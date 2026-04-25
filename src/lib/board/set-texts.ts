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
    author: 'Willy Russell',
    category: 'modern',
    boards: ['edexcel', 'eduqas'],
    copyrightStatus: 'copyright',
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
    author: 'Chimamanda Ngozi Adichie',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2009',
    keyThemes: ['Identity', 'Stereotypes', 'Cultural representation', 'Power of stories'],
    description:
      "Adichie's TED talk arguing that reducing any people, place or culture to a single story dispossesses them of full humanity, and that many stories are needed to see the world honestly.",
  },
  {
    slug: 'a-passage-to-africa',
    title: 'A Passage to Africa',
    author: 'George Alagiah',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2001',
    keyThemes: ['Suffering', 'Empathy', 'Guilt', 'Media ethics'],
    description:
      "Alagiah recalls reporting on famine in Somalia and the moment one man's apologetic smile forced him to question how journalism turns suffering into spectacle.",
  },
  {
    slug: 'the-explorers-daughter',
    title: "The Explorer's Daughter",
    author: 'Kari Herbert',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2004',
    keyThemes: ['Nature', 'Tradition', 'Survival', 'Moral conflict'],
    description:
      "Herbert watches Inuit hunters pursue narwhal in the Arctic and reflects on the tension between her instinctive sympathy for the whales and the community's need to hunt to survive.",
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
      'A Guardian newspaper article reporting the rescue of two British explorers stranded in the Antarctic, and the public debate over whether their expedition was bravery or recklessness.',
  },
  {
    slug: 'between-a-rock-and-a-hard-place',
    title: 'Between a Rock and a Hard Place',
    author: 'Aron Ralston',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2004',
    keyThemes: ['Survival', 'Isolation', 'Determination', 'Nature'],
    description:
      'Ralston recounts the moment he was forced to amputate his own arm after a boulder pinned him in a remote Utah canyon — a meditation on solitude, willpower and the limits of the body.',
  },
  {
    slug: 'young-and-dyslexic',
    title: "Young and dyslexic? You've got it going on",
    author: 'Benjamin Zephaniah',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2015',
    keyThemes: ['Education', 'Identity', 'Disability', 'Self-belief'],
    description:
      'Zephaniah writes about growing up labelled as stupid because of dyslexia, and argues that creative thinking and refusal to be defined by an educational system are strengths.',
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
  },
  {
    slug: 'beyond-the-sky-and-the-earth',
    title: 'Beyond the Sky and the Earth',
    author: 'Jamie Zeppa',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1999',
    keyThemes: ['Culture shock', 'Isolation', 'Beauty', 'Transformation'],
    description:
      "Zeppa's memoir of arriving as a young Canadian teacher in remote Bhutan, and how the strangeness of the landscape and language slowly reshaped her sense of home.",
  },
  {
    slug: 'h-is-for-hawk',
    title: 'H is for Hawk',
    author: 'Helen Macdonald',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2014',
    keyThemes: ['Grief', 'Nature', 'Obsession', 'Identity'],
    description:
      "Macdonald's memoir of training a goshawk in the months after her father's sudden death — a study of how wildness and grief can mirror and reshape each other.",
  },
  {
    slug: 'chinese-cinderella',
    title: 'Chinese Cinderella',
    author: 'Adeline Yen Mah',
    category: 'non-fiction',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1999',
    keyThemes: ['Family', 'Rejection', 'Resilience', 'Identity'],
    description:
      'Yen Mah recalls her childhood in mid-twentieth-century China as the unwanted daughter blamed for her mother’s death, and how academic success became her way of being seen.',
  },

  // Section B — Poetry (15 poems)
  {
    slug: 'disabled',
    title: 'Disabled',
    author: 'Wilfred Owen',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
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
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'public-domain',
    year: '1916',
    keyThemes: ['Death', 'Childhood', 'Indifference of nature', 'Work'],
    description:
      'A boy doing chores on a Vermont farm loses his hand to a buzz-saw and dies; the watching adults, after a brief shock, "turn[] to their affairs". Frost’s title quotes Macbeth.',
  },
  {
    slug: 'an-unknown-girl',
    title: 'An Unknown Girl',
    author: 'Moniza Alvi',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1996',
    keyThemes: ['Identity', 'Heritage', 'Belonging', 'Cultural connection'],
    description:
      'In an Indian bazaar, the speaker has her hand decorated with henna by a girl she does not know; the temporary pattern becomes a meditation on her own divided sense of cultural identity.',
  },
  {
    slug: 'the-bright-lights-of-sarajevo',
    title: 'The Bright Lights of Sarajevo',
    author: 'Tony Harrison',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1995',
    keyThemes: ['War', 'Resilience', 'Love', 'Hope'],
    description:
      'Harrison reports from besieged Sarajevo, where young couples flirt in the dark streets between sniper fire and shell craters — the persistence of ordinary life inside war.',
  },
  {
    slug: 'still-i-rise',
    title: 'Still I Rise',
    author: 'Maya Angelou',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1978',
    keyThemes: ['Defiance', 'Race', 'Resilience', 'Female strength'],
    description:
      'Angelou addresses an oppressor directly and refuses to be broken by hatred, history or contempt; the refrain "I rise" enacts the unbreakable spirit she describes.',
  },
  {
    slug: 'do-not-go-gentle-into-that-good-night',
    title: 'Do not go gentle into that good night',
    author: 'Dylan Thomas',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1951',
    keyThemes: ['Death', 'Defiance', 'Fatherhood', 'Grief'],
    description:
      "A son's villanelle urging his dying father to resist death with rage and fire rather than accept it quietly; the circling repetitions enact the refusal to let go.",
  },
  {
    slug: 'refugee-blues',
    title: 'Refugee Blues',
    author: 'W.H. Auden',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1939',
    keyThemes: ['Displacement', 'Persecution', 'Statelessness', 'Antisemitism'],
    description:
      'Two German-Jewish refugees walk through New York on the eve of the Second World War, finding everywhere shut to them; the blues form gives political horror a quietly mournful music.',
  },
  {
    slug: 'war-photographer',
    title: 'War Photographer',
    author: 'Carol Ann Duffy',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1985',
    keyThemes: ['War', 'Suffering', 'Moral responsibility', 'Detachment'],
    description:
      'A war photographer develops his pictures alone in a darkroom in rural England, caught between the horrors he has witnessed abroad and the brief sympathy of distant readers.',
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
    author: 'Louis MacNeice',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
    copyrightStatus: 'copyright',
    year: '1944',
    keyThemes: ['Innocence', 'Fear of the world', 'War', 'Dehumanisation'],
    description:
      "An unborn child pleads to be protected from the violence, dehumanisation and moral corruption of the adult world; the prayer's mounting urgency reflects mid-war anxiety.",
  },
  {
    slug: 'piano',
    title: 'Piano',
    author: 'D.H. Lawrence',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
    copyrightStatus: 'public-domain',
    year: '1918',
    keyThemes: ['Nostalgia', 'Memory', 'Motherhood', 'Loss of childhood'],
    description:
      "A woman's singing pulls the adult speaker helplessly back into childhood memories of his mother at the piano on Sunday evenings; the present is overwhelmed by the past.",
  },
  {
    slug: 'hide-and-seek',
    title: 'Hide and Seek',
    author: 'Vernon Scannell',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
    copyrightStatus: 'copyright',
    year: '1984',
    keyThemes: ['Childhood', 'Isolation', 'Betrayal', 'Imagination'],
    description:
      'A child hiding in an ingenious spot waits to be found, only to discover with a jolt that his friends have already left and he is alone in the dark.',
  },
  {
    slug: 'half-past-two',
    title: 'Half-past Two',
    author: 'U.A. Fanthorpe',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
    copyrightStatus: 'copyright',
    year: '1992',
    keyThemes: ['Childhood', 'Time', 'Authority', 'Innocence'],
    description:
      'A small boy kept behind after school becomes lost in a timeless world because he cannot yet read a clock, and a careless punishment becomes an accidental gift of escape.',
  },
  {
    slug: 'my-last-duchess',
    title: 'My Last Duchess',
    author: 'Robert Browning',
    category: 'poetry-anthology',
    boards: ['edexcel-igcse-lang', 'edexcel-igcse'],
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
    author: 'E.M. Forster',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1911',
    keyThemes: ['Imagination', 'Reality vs fantasy', 'Office life', 'Escape'],
    description:
      'A weary office worker discovers a door in the underground that opens onto a luminous, otherworldly meadow — and must decide whether he can ever find it again.',
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
    author: 'Rose Tremain',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '2007',
    keyThemes: ['Migration', 'Loneliness', 'Hope', 'Memory'],
    description:
      'On a long coach journey from rural Eastern Europe to London, a migrant worker named Lev contemplates the past he is leaving and the precarious future ahead.',
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
    author: 'Bernard MacLaverty',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1990',
    keyThemes: ['Loneliness', 'Aging', 'Empathy', 'Quiet despair'],
    description:
      'A short, finely observed story about an elderly woman alone at night, listening to a younger woman in distress in the flat below, and the small moral question of what to do.',
  },
  {
    slug: 'the-pedestrian',
    title: 'The Pedestrian',
    author: 'Ray Bradbury',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1951',
    keyThemes: ['Conformity', 'Technology', 'Isolation', 'Dystopia'],
    description:
      "In a future city where everyone watches television indoors, a man's nightly walks alone become so unusual that an automated police car arrests him for being on the street.",
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
    author: 'Sam Selvon',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1957',
    keyThemes: ['Race', 'Migration', 'Prejudice', 'Survival in Britain'],
    description:
      'A comic but biting story of Caribbean migrants in 1950s London, where two friends pretend to be Indian to navigate the racism of the British housing market.',
  },
  {
    slug: 'the-man-who-loved-flowers',
    title: 'The Man Who Loved Flowers',
    author: 'Stephen King',
    category: 'prose',
    boards: ['edexcel-igcse-lang'],
    copyrightStatus: 'copyright',
    year: '1977',
    keyThemes: ['Romance and horror', 'Obsession', 'Mental illness', 'Mistaken identity'],
    description:
      "On a beautiful spring evening in 1960s New York, a young man in love walks the streets buying flowers — but his sweet anticipation curdles into something terrifying by the story's end.",
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
