import type { ExamBoard } from './board-store'

export type TextCategory = 'shakespeare' | '19th-century' | 'modern' | 'poetry-anthology'

export type SetText = {
  slug: string
  title: string
  author: string
  category: TextCategory
  boards: ExamBoard[] // which boards study this text
  copyrightStatus: 'public-domain' | 'copyright'
  description?: string
  keyThemes?: string[]
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
    boards: ['aqa'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'jane-eyre',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    category: '19th-century',
    boards: ['aqa', 'ocr'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'frankenstein',
    title: 'Frankenstein',
    author: 'Mary Shelley',
    category: '19th-century',
    boards: ['aqa', 'edexcel', 'ocr'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'pride-and-prejudice',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    category: '19th-century',
    boards: ['aqa', 'edexcel', 'ocr', 'eduqas'],
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
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'king-lear',
    title: 'King Lear',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'antony-and-cleopatra',
    title: 'Antony and Cleopatra',
    author: 'William Shakespeare',
    category: 'shakespeare',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level'],
    copyrightStatus: 'public-domain',
  },

  // ── A-Level — Modernist & 20th-century ─────────────────────────────────────
  {
    slug: 'the-waste-land',
    title: 'The Waste Land',
    author: 'T.S. Eliot',
    category: 'poetry-anthology',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'a-streetcar-named-desire',
    title: 'A Streetcar Named Desire',
    author: 'Tennessee Williams',
    category: 'modern',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'the-handmaids-tale',
    title: "The Handmaid's Tale",
    author: 'Margaret Atwood',
    category: 'modern',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level'],
    copyrightStatus: 'copyright',
  },
  {
    slug: 'the-great-gatsby',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    category: 'modern',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level'],
    copyrightStatus: 'public-domain',
  },
  {
    slug: 'a-dolls-house',
    title: "A Doll's House",
    author: 'Henrik Ibsen',
    category: 'modern',
    boards: ['aqa-a-level', 'edexcel-a-level', 'ocr-a-level', 'eduqas-a-level'],
    copyrightStatus: 'public-domain',
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
