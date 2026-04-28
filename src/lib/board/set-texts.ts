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
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'the-merchant-of-venice',
    title: 'The Merchant of Venice',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'the-tempest',
    title: 'The Tempest',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['aqa', 'ocr'],
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
    boards: ['eduqas', 'aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'henry-v',
    title: 'Henry V',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['eduqas'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'twelfth-night',
    title: 'Twelfth Night',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['edexcel'],
    copyrightStatus: 'public-domain',
  },

  // ── 19th-Century Novels ───────────────────────────────────────────────────
  {
    slug: 'a-christmas-carol',
    title: 'A Christmas Carol',
    author: 'Charles Dickens',
    category: '19th-century',
    boards: ['aqa', 'edexcel', 'eduqas'],
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
    boards: ['aqa', 'ial-edexcel'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'jane-eyre',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    category: '19th-century',
    boards: ['aqa', 'ocr', 'ial-edexcel'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'frankenstein',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    category: '19th-century',
    boards: ['aqa', 'edexcel', 'ocr', 'ial-edexcel'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'pride-and-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    category: '19th-century',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'ial-edexcel'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'the-sign-of-four',
    title: 'The Sign of the Four',
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
    boards: ['aqa', 'edexcel', 'eduqas'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'the-war-of-the-worlds',
    title: 'The War of the Worlds',
    author: 'H.G. Wells',
    category: '19th-century',
    boards: ['ocr', 'eduqas'],
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
    boards: ['aqa', 'ocr', 'eduqas'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'animal-farm',
    title: 'Animal Farm',
    author: 'George Orwell',
    category: 'modern',
    boards: ['aqa', 'edexcel', 'ocr'],
    copyrightStatus: 'copyright',
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
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'things-fall-apart',
    title: 'Things Fall Apart',
    author: 'Chinua Achebe',
    category: 'modern',
    boards: ['edexcel-igcse'],
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
    author: 'Simon Stephens',
    category: 'modern',
    boards: ['edexcel-igcse'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'blood-brothers',
    title: 'Blood Brothers',
    author: 'Willy Russell (b. 1947)',
    category: 'modern',
    boards: ['edexcel', 'eduqas'],
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
    boards: ['aqa'],
    copyrightStatus: 'copyright',
  },

  // ── A-Level — Shakespeare tragedies & histories ────────────────────────────
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
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level', 'ial-edexcel'],
    copyrightStatus: 'public-domain',
  },

  // ── A-Level — Modernist & 20th-century ─────────────────────────────────────
  {
    slug: 'the-waste-land',
    title: 'The Waste Land',
    author: 'T.S. Eliot',
    category: 'poetry-anthology',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level', 'ial-edexcel'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'a-streetcar-named-desire',
    title: 'A Streetcar Named Desire',
    author: 'Tennessee Williams',
    category: 'modern',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level', 'ial-edexcel'],
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
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level', 'ial-edexcel'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'a-dolls-house',
    title: "A Doll's House",
    author: 'Henrik Ibsen',
    category: 'modern',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level', 'ial-edexcel'],
    copyrightStatus: 'public-domain',
  },

  // ── Pearson Edexcel IGCSE English Language A (4EA1) Anthology ──────────────
  // Section A — Non-fiction (10 texts)
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
    ukRightsNotice:
      'Rights notice: © Wylie Agency / TED Conferences / Pearson Education on behalf of Chimamanda Ngozi Adichie. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or the original TEDGlobal 2009 talk transcript.',
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
      "George Alagiah (1955-2023) was a Sri Lankan-born British BBC journalist and broadcaster; rights to his work are now held by his estate. In this memoir extract, Alagiah recalled reporting on famine in Somalia and the moment one man's apologetic smile forced him to question how journalism turns suffering into spectacle.",
    ukRightsNotice:
      '© Alagiah estate via Pearson Education. Short fair-dealing extracts; full anthology selections require an Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
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
      'Rights notice: © Penguin / Pearson Education on behalf of Kari Herbert. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
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
      'Originally published in The Guardian, 24 January 2003; adapted for the Edexcel anthology by Pearson. The article reports the rescue of two British explorers stranded in the Antarctic, and the public debate over whether their expedition was bravery or recklessness.',
    ukRightsNotice:
      'Anthology version warning: This text is an adapted version printed in the Edexcel IGCSE Anthology (ISBN 978-1-446-93108-0). The freely-available Guardian original (linked from many revision sites) differs in cuts, re-orderings, and minor word choice. Always use the anthology version when answering Edexcel exam questions — examiners will mark against the anthology text. Originally published in The Guardian, 24 January 2003; adapted for the Edexcel anthology by Pearson. © Guardian News & Media Ltd / Pearson Education. Short fair-dealing extracts only.',
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
    description:
      'Ralston recounts the moment he was forced to amputate his own arm after a boulder pinned him in a remote Utah canyon — a meditation on solitude, willpower and the limits of the body.',
    ukRightsNotice:
      'Rights notice: © Simon & Schuster / Pearson Education on behalf of Aron Ralston. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
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
    description:
      'Benjamin Zephaniah (1958–2023) was a British dub poet and rights campaigner; he died in January 2023 and rights to his work are now held by his estate. The text was originally a 2017 Guardian opinion piece and has been adapted for the Edexcel anthology — the printed version differs from the freely-available online original in cuts and re-orderings. In it, Zephaniah wrote about growing up labelled as stupid because of dyslexia, and argued that creative thinking and refusal to be defined by an educational system are strengths.',
    ukRightsNotice:
      'Anthology version warning: This text is an adapted version printed in the Edexcel IGCSE Anthology (ISBN 978-1-446-93108-0). The freely-available Guardian original (linked from many revision sites) differs in cuts, re-orderings, and minor word choice. Always use the anthology version when answering Edexcel exam questions — examiners will mark against the anthology text. Rights notice: Benjamin Zephaniah (1958–2023) — rights now held by his estate. © estate via Pearson Education. Quotations are short fair-dealing extracts.',
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
    description:
      "Levine's account of watching buzkashi — a violent Asian sport played with the carcass of a goat — and her attempt to describe a tradition very far from her own without judging it.",
    ukRightsNotice:
      'Rights notice: © Little, Brown / Pearson Education on behalf of Emma Levine. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
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
      'Rights notice: © Penguin Canada / Pearson Education on behalf of Jamie Zeppa. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
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
    description:
      "Macdonald's memoir of training a goshawk in the months after her father's sudden death — a study of how wildness and grief can mirror and reshape each other.",
    ukRightsNotice:
      'Rights notice: © Jonathan Cape / Penguin Random House / Pearson Education on behalf of Helen Macdonald. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
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
      'Rights notice: © Penguin / Pearson Education on behalf of Adeline Yen Mah. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },

  // Section B — Poetry (15 poems)
  {
    slug: 'disabled',
    title: 'Disabled',
    author: 'Wilfred Owen',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
    copyrightStatus: 'public-domain',
    year: '1917',
    keyThemes: ['War', 'Loss of youth', 'Isolation', 'Disability'],
    description:
      'A young soldier, now a multiple amputee, sits in a wheelchair at dusk and remembers the careless decisions and patriotic pressure that led him to enlist before he was even shaving.',
  },
  {
    slug: 'out-out',
    title: "'Out, Out—'",
    author: 'Robert Frost',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
    // Frost died 1963; UK copyright (CDPA 1988 §12: life + 70 years) expires
    // 31 December 2033. Public domain in the United States, but NOT in the UK.
    copyrightStatus: 'copyright',
    year: '1916',
    keyThemes: ['Death', 'Childhood', 'Indifference of nature', 'Work'],
    description:
      'A boy doing chores on a Vermont farm loses his hand to a buzz-saw and dies; the watching adults, after a brief shock, "turn[] to their affairs". Frost’s title quotes Macbeth.',
    ukRightsNotice:
      'Rights notice (UK): Frost died 1963; UK copyright expires 31 December 2033. Quotations are short fair-dealing extracts. Frost is public domain in the United States, but not in the UK — students using overseas revision resources should be aware that those reproductions are not redistributable in the UK platform.',
  },
  {
    slug: 'an-unknown-girl',
    title: 'An Unknown Girl',
    author: 'Moniza Alvi (b. 1954)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
    copyrightStatus: 'copyright',
    year: '1996',
    keyThemes: ['Identity', 'Heritage', 'Belonging', 'Cultural connection'],
    description:
      'In an Indian bazaar, the speaker has her hand decorated with henna by a girl she does not know; the temporary pattern becomes a meditation on her own divided sense of cultural identity.',
    ukRightsNotice:
      'Rights notice: © Bloodaxe Books on behalf of Moniza Alvi. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or Alvi’s collection Carrying My Wife (2000).',
  },
  {
    slug: 'the-bright-lights-of-sarajevo',
    title: 'The Bright Lights of Sarajevo',
    author: 'Tony Harrison (b. 1937)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
    copyrightStatus: 'copyright',
    year: '1995',
    keyThemes: ['War', 'Resilience', 'Love', 'Hope'],
    description:
      'Harrison reports from besieged Sarajevo, where young couples flirt in the dark streets between sniper fire and shell craters — the persistence of ordinary life inside war.',
    ukRightsNotice:
      'Rights notice: © Bloodaxe Books on behalf of Tony Harrison. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0). Note: the anthology layout uses extra stanza breaks not in the original 1995 Guardian text or the Bloodaxe collected edition — students should revise from the anthology.',
  },
  {
    slug: 'still-i-rise',
    title: 'Still I Rise',
    author: 'Maya Angelou (1928–2014)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
    copyrightStatus: 'copyright',
    year: '1978',
    keyThemes: ['Defiance', 'Race', 'Resilience', 'Female strength'],
    description:
      'Angelou addresses an oppressor directly and refuses to be broken by hatred, history or contempt; the refrain "I rise" enacts the unbreakable spirit she describes.',
    ukRightsNotice:
      'Rights notice: © Random House / Penguin Random House on behalf of the Maya Angelou estate (1928–2014). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or Angelou’s collection And Still I Rise (1978).',
  },
  {
    slug: 'do-not-go-gentle-into-that-good-night',
    title: 'Do not go gentle into that good night',
    author: 'Dylan Thomas (1914–1953)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1951',
    keyThemes: ['Death', 'Defiance', 'Fatherhood', 'Grief'],
    description:
      "A son's villanelle urging his dying father to resist death with rage and fire rather than accept it quietly; the circling repetitions enact the refusal to let go.",
    ukRightsNotice:
      'Rights notice: © David Higham Associates on behalf of the Dylan Thomas estate (1914–1953). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or Thomas’s Collected Poems (Dent / Weidenfeld).',
  },
  {
    slug: 'refugee-blues',
    title: 'Refugee Blues',
    author: 'W.H. Auden (1907–1973)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1939',
    keyThemes: ['Displacement', 'Persecution', 'Statelessness', 'Antisemitism'],
    description:
      'Two German-Jewish refugees walk through New York on the eve of the Second World War, finding everywhere shut to them; the blues form gives political horror a quietly mournful music.',
    ukRightsNotice:
      'Rights notice: © Curtis Brown / Faber & Faber on behalf of the W.H. Auden estate (1907–1973; UK copyright runs to 2044). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or Auden’s Collected Poems (Faber).',
  },
  {
    slug: 'war-photographer',
    title: 'War Photographer',
    author: 'Carol Ann Duffy (b. 1955)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
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
    title: 'If—',
    author: 'Rudyard Kipling',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
    copyrightStatus: 'public-domain',
    year: '1910',
    keyThemes: ['Stoicism', 'Identity', 'Growing up', 'Self-control'],
    description:
      'A father addresses his son and lists the qualities — composure, integrity, persistence, humility — required to live a balanced and honourable life and finally become "a Man".',
  },
  {
    slug: 'prayer-before-birth',
    title: 'Prayer Before Birth',
    author: 'Louis MacNeice (1907–1963)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1944',
    keyThemes: ['Innocence', 'Fear of the world', 'War', 'Dehumanisation'],
    description:
      "An unborn child pleads to be protected from the violence, dehumanisation and moral corruption of the adult world; the prayer's mounting urgency reflects mid-war anxiety.",
    ukRightsNotice:
      'Rights notice: © Faber & Faber on behalf of the Louis MacNeice estate (1907–1963). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or MacNeice’s Collected Poems (Faber).',
  },
  {
    slug: 'piano',
    title: 'Piano',
    author: 'D.H. Lawrence',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'public-domain',
    year: '1918',
    keyThemes: ['Nostalgia', 'Memory', 'Motherhood', 'Loss of childhood'],
    description:
      "A woman's singing pulls the adult speaker helplessly back into childhood memories of his mother at the piano on Sunday evenings; the present is overwhelmed by the past.",
  },
  {
    slug: 'hide-and-seek',
    title: 'Hide and Seek',
    author: 'Vernon Scannell (1922–2007)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1984',
    keyThemes: ['Childhood', 'Isolation', 'Betrayal', 'Imagination'],
    description:
      'A child hiding in an ingenious spot waits to be found, only to discover with a jolt that his friends have already left and he is alone in the dark.',
    ukRightsNotice:
      'Rights notice: © Robson Books on behalf of the Vernon Scannell estate (1922–2007). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'half-past-two',
    title: 'Half-past Two',
    author: 'U.A. Fanthorpe (1929–2009)',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1992',
    keyThemes: ['Childhood', 'Time', 'Authority', 'Innocence'],
    description:
      'A small boy kept behind after school becomes lost in a timeless world because he cannot yet read a clock, and a careless punishment becomes an accidental gift of escape.',
    ukRightsNotice:
      'Rights notice: © Peterloo Poets / Enitharmon on behalf of the U.A. Fanthorpe estate (1929–2009). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'my-last-duchess',
    title: 'My Last Duchess',
    author: 'Robert Browning',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
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
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
    copyrightStatus: 'public-domain',
    year: '1609',
    keyThemes: ['Love', 'Constancy', 'Time', 'Faithfulness'],
    description:
      'A meditation on true love as an "ever-fixed mark" that cannot be altered by time, circumstance or trouble; love that changes when it finds change is, the speaker insists, not love at all.',
  },

  // Section C — Prose (10 short stories)
  {
    slug: 'the-door',
    title: 'The Door',
    author: 'E.M. Forster (1879–1970)',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1911',
    keyThemes: ['Imagination', 'Reality vs fantasy', 'Office life', 'Escape'],
    description:
      'A weary office worker discovers a door in the underground that opens onto a luminous, otherworldly meadow — and must decide whether he can ever find it again.',
    ukRightsNotice:
      'Rights notice: © Society of Authors / King’s College, Cambridge on behalf of the E.M. Forster estate (1879–1970; UK copyright runs to 2040). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'the-necklace',
    title: 'The Necklace',
    author: 'Guy de Maupassant',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'public-domain',
    year: '1884',
    keyThemes: ['Vanity', 'Class', 'Pride', 'Ironic reversal'],
    description:
      'A vain young Parisian woman borrows a diamond necklace for a single glittering ball, loses it, and spends ten brutalising years repaying its cost — only to learn the truth at the end.',
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
      'Rights notice: © Vintage / Penguin Random House / Pearson Education on behalf of Rose Tremain. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or Tremain’s novel The Road Home (2007).',
  },
  {
    slug: 'whistle-and-ill-come-to-you',
    title: "Whistle and I'll Come to You, My Lad",
    author: 'M.R. James',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'public-domain',
    year: '1904',
    keyThemes: ['The supernatural', 'Rationalism', 'Fear', 'Isolation'],
    description:
      'A sceptical Cambridge professor on holiday on the East Anglian coast finds an ancient bronze whistle in a graveyard and, unable to resist blowing it, summons something he cannot explain.',
  },
  {
    slug: 'night',
    title: 'Night',
    author: 'Bernard MacLaverty (b. 1942)',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1990',
    keyThemes: ['Loneliness', 'Aging', 'Empathy', 'Quiet despair'],
    description:
      'A short, finely observed story about an elderly woman alone at night, listening to a younger woman in distress in the flat below, and the small moral question of what to do.',
    ukRightsNotice:
      'Rights notice: © Jonathan Cape / Penguin Random House / Pearson Education on behalf of Bernard MacLaverty. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'the-pedestrian',
    title: 'The Pedestrian',
    author: 'Ray Bradbury (1920–2012)',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1951',
    keyThemes: ['Conformity', 'Technology', 'Isolation', 'Dystopia'],
    description:
      "In a future city where everyone watches television indoors, a man's nightly walks alone become so unusual that an automated police car arrests him for being on the street.",
    ukRightsNotice:
      'Rights notice: © HarperCollins / Don Congdon Associates / Pearson Education on behalf of the Ray Bradbury estate (1920–2012). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'the-yellow-wallpaper',
    title: 'The Yellow Wall Paper',
    author: 'Charlotte Perkins Gilman',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'public-domain',
    year: '1892',
    keyThemes: ['Mental health', 'Patriarchy', 'Confinement', 'Female autonomy'],
    description:
      "A woman confined to a single bedroom by her physician husband as a 'rest cure' becomes obsessed with the patterns in the wallpaper, in a story that pioneered feminist psychological fiction.",
  },
  {
    slug: 'when-greek-meets-greek',
    title: 'When Greek Meets Greek',
    author: 'Sam Selvon (1923–1994)',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1957',
    keyThemes: ['Race', 'Migration', 'Prejudice', 'Survival in Britain'],
    description:
      'A comic but biting story of Caribbean migrants in 1950s London, where two friends pretend to be Indian to navigate the racism of the British housing market.',
    ukRightsNotice:
      'Rights notice: © Longman / Pearson Education on behalf of the Sam Selvon estate (1923–1994). Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0).',
  },
  {
    slug: 'the-man-who-loved-flowers',
    title: 'The Man Who Loved Flowers',
    author: 'Stephen King (b. 1947)',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1977',
    keyThemes: ['Romance and horror', 'Obsession', 'Mental illness', 'Mistaken identity'],
    description:
      "On a beautiful spring evening in 1960s New York, a young man in love walks the streets buying flowers — but his sweet anticipation curdles into something terrifying by the story's end.",
    ukRightsNotice:
      'Rights notice: © Hodder & Stoughton / Doubleday / Pearson Education on behalf of Stephen King. Quotations are short fair-dealing extracts under CDPA 1988 §30 (criticism, review, quotation). For full text, students should consult the Edexcel-licensed school edition (ISBN 978-1-446-93108-0) or King’s collection Night Shift (1978).',
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
      'A woman is told her husband has been killed in a train accident and, alone in her room, slowly realises she feels free — until the door opens and her hour of liberty ends.',
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
