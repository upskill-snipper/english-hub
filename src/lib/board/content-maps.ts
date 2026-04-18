import type { ExamBoard } from './board-store'

// Set texts by board — each board prescribes different novels/plays/poetry
export const SET_TEXTS_BY_BOARD: Record<ExamBoard, { shakespeare: string[]; nineteenthCentury: string[]; modern: string[]; poetry: string[] }> = {
  'ks3': { shakespeare: [], nineteenthCentury: [], modern: [], poetry: [] },
  'aqa': {
    shakespeare: ['macbeth', 'romeo-and-juliet', 'the-merchant-of-venice', 'much-ado-about-nothing', 'julius-caesar', 'the-tempest'],
    nineteenthCentury: ['a-christmas-carol', 'jekyll-and-hyde', 'great-expectations', 'jane-eyre', 'frankenstein', 'pride-and-prejudice', 'the-sign-of-four', 'silas-marner'],
    modern: ['an-inspector-calls', 'lord-of-the-flies', 'animal-farm', 'anita-and-me', 'pigeon-english', 'never-let-me-go'],
    poetry: ['power-and-conflict', 'love-and-relationships'],
  },
  'edexcel': {
    shakespeare: ['macbeth', 'romeo-and-juliet', 'the-merchant-of-venice', 'much-ado-about-nothing', 'twelfth-night'],
    nineteenthCentury: ['jekyll-and-hyde', 'a-christmas-carol', 'pride-and-prejudice', 'silas-marner', 'frankenstein'],
    modern: ['an-inspector-calls', 'hobson-s-choice', 'blood-brothers', 'animal-farm', 'anita-and-me', 'the-empress', 'refugee-boy'],
    poetry: ['conflict', 'time-and-place', 'relationships', 'belonging'],
  },
  'ocr': {
    shakespeare: ['macbeth', 'romeo-and-juliet', 'much-ado-about-nothing', 'the-merchant-of-venice', 'the-tempest'],
    nineteenthCentury: ['jekyll-and-hyde', 'jane-eyre', 'frankenstein', 'pride-and-prejudice', 'the-war-of-the-worlds'],
    modern: ['an-inspector-calls', 'animal-farm', 'lord-of-the-flies', 'anita-and-me', 'my-mother-said-i-never-should'],
    poetry: ['love-and-relationships-ocr', 'conflict-ocr', 'youth-and-age', 'power-and-natural-world'],
  },
  'eduqas': {
    shakespeare: ['macbeth', 'romeo-and-juliet', 'the-merchant-of-venice', 'othello', 'henry-v', 'much-ado-about-nothing'],
    nineteenthCentury: ['a-christmas-carol', 'jekyll-and-hyde', 'pride-and-prejudice', 'silas-marner', 'the-war-of-the-worlds'],
    modern: ['an-inspector-calls', 'blood-brothers', 'a-taste-of-honey', 'lord-of-the-flies', 'anita-and-me', 'the-woman-in-black'],
    poetry: ['eduqas-anthology'],
  },
  'edexcel-igcse': {
    shakespeare: ['macbeth', 'romeo-and-juliet', 'much-ado-about-nothing'],
    nineteenthCentury: [],
    modern: ['to-kill-a-mockingbird', 'of-mice-and-men', 'things-fall-apart', 'an-inspector-calls', 'a-view-from-the-bridge', 'curious-incident'],
    poetry: ['edexcel-igcse-anthology'],
  },
  'cambridge-0500': { shakespeare: [], nineteenthCentury: [], modern: [], poetry: [] },
  'cambridge-0990': { shakespeare: [], nineteenthCentury: [], modern: [], poetry: [] },
}

export function hasSetText(board: ExamBoard | null, category: keyof (typeof SET_TEXTS_BY_BOARD)[ExamBoard], slug: string): boolean {
  if (!board) return true
  return SET_TEXTS_BY_BOARD[board][category].includes(slug)
}
