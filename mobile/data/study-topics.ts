// ---------------------------------------------------------------------------
// Study topic tree -- bundled for offline use
// ---------------------------------------------------------------------------

import type { FlashcardCategory } from './flashcards';

export type CategoryId =
  | 'poetry'
  | 'set-texts'
  | 'language-skills'
  | 'exam-practice'
  | 'flashcards';

export interface StudyTopic {
  id: string;
  title: string;
  description: string;
  /** Ionicons icon name */
  icon: string;
  /** 0-100 progress percentage (placeholder -- hook up to real progress later) */
  progress: number;
  /** Optional URL to open in the web app for the full guide */
  webUrl?: string;
  /** If topic maps to a flashcard category, show "Start Flashcards" button */
  flashcardCategory?: FlashcardCategory;
  /** If topic has a quiz, show "Take Quiz" button */
  hasQuiz?: boolean;
  /** Short content summary shown on the detail view */
  summary: string;
}

export interface StudyCategory {
  id: CategoryId;
  title: string;
  /** Ionicons icon name */
  icon: string;
  /** Accent colour (hex) */
  color: string;
  topics: StudyTopic[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

export const studyCategories: StudyCategory[] = [
  {
    id: 'poetry',
    title: 'Poetry',
    icon: 'leaf-outline',
    color: '#059669',
    topics: [
      {
        id: 'poetry-unseen',
        title: 'Unseen Poetry',
        description: 'Analyse poems you have never seen before',
        icon: 'eye-outline',
        progress: 0,
        summary:
          'Learn how to approach an unseen poem step by step: identify form and structure, explore language techniques, and build a coherent personal response under timed conditions.',
        hasQuiz: true,
        webUrl: 'https://theenglishhub.app/guides/unseen-poetry',
      },
      {
        id: 'poetry-anthology',
        title: 'Anthology Poems',
        description: 'Key poems from the GCSE/A-Level anthology',
        icon: 'library-outline',
        progress: 25,
        summary:
          'Comprehensive revision of the set anthology poems, including themes, context, language analysis, and comparison strategies for each cluster.',
        hasQuiz: true,
        webUrl: 'https://theenglishhub.app/guides/anthology-poems',
      },
      {
        id: 'poetry-comparison',
        title: 'Comparing Poems',
        description: 'Techniques for comparing two poems effectively',
        icon: 'git-compare-outline',
        progress: 10,
        summary:
          'Master the art of poetry comparison: structuring comparative essays, identifying shared and contrasting themes, and weaving analysis of both poems together seamlessly.',
        hasQuiz: true,
        webUrl: 'https://theenglishhub.app/guides/comparing-poems',
      },
      {
        id: 'poetry-terms',
        title: 'Poetic Terminology',
        description: 'Essential terms every student needs to know',
        icon: 'book-outline',
        progress: 40,
        summary:
          'A glossary of key poetic terms -- from metre and rhyme scheme to enjambment and caesura -- with clear definitions and examples from set texts.',
        flashcardCategory: 'devices',
        webUrl: 'https://theenglishhub.app/guides/poetic-terminology',
      },
    ],
  },
  {
    id: 'set-texts',
    title: 'Set Texts',
    icon: 'documents-outline',
    color: '#7c3aed',
    topics: [
      {
        id: 'text-macbeth',
        title: 'Macbeth',
        description: "Shakespeare's Scottish tragedy",
        icon: 'skull-outline',
        progress: 30,
        summary:
          "Study guide covering Macbeth's plot, key characters (Macbeth, Lady Macbeth, Banquo, the Witches), themes of ambition, guilt, and the supernatural, plus essay writing strategies.",
        flashcardCategory: 'characters',
        hasQuiz: true,
        webUrl: 'https://theenglishhub.app/guides/macbeth',
      },
      {
        id: 'text-inspector',
        title: 'An Inspector Calls',
        description: "Priestley's play on social responsibility",
        icon: 'search-outline',
        progress: 15,
        summary:
          "Detailed analysis of Priestley's morality play: the Birling family, Inspector Goole, themes of responsibility and class, dramatic techniques, and historical context.",
        flashcardCategory: 'characters',
        hasQuiz: true,
        webUrl: 'https://theenglishhub.app/guides/an-inspector-calls',
      },
      {
        id: 'text-christmas-carol',
        title: 'A Christmas Carol',
        description: "Dickens' tale of redemption",
        icon: 'gift-outline',
        progress: 20,
        summary:
          "Explore Scrooge's transformation, Dickens' social message about Victorian poverty, the role of the supernatural, and how to write top-band essays on the novella.",
        flashcardCategory: 'characters',
        hasQuiz: true,
        webUrl: 'https://theenglishhub.app/guides/a-christmas-carol',
      },
      {
        id: 'text-lotf',
        title: 'Lord of the Flies',
        description: "Golding's allegory of civilisation",
        icon: 'bonfire-outline',
        progress: 0,
        summary:
          "Characters, symbols (the conch, Piggy's glasses, the Beast), themes of civilisation vs savagery, and essay structure guidance for Golding's novel.",
        flashcardCategory: 'characters',
        webUrl: 'https://theenglishhub.app/guides/lord-of-the-flies',
      },
    ],
  },
  {
    id: 'language-skills',
    title: 'Language Skills',
    icon: 'chatbubble-ellipses-outline',
    color: '#0284c7',
    topics: [
      {
        id: 'lang-analysis',
        title: 'Language Analysis',
        description: 'Breaking down how writers use language',
        icon: 'analytics-outline',
        progress: 10,
        summary:
          'How to identify and analyse language features in fiction and non-fiction extracts: word choice, imagery, tone, sentence structures, and their effects on the reader.',
        hasQuiz: true,
        webUrl: 'https://theenglishhub.app/guides/language-analysis',
      },
      {
        id: 'lang-structure',
        title: 'Structural Analysis',
        description: 'How writers organise and shape texts',
        icon: 'layers-outline',
        progress: 5,
        summary:
          'Techniques for analysing how writers structure whole texts and use structural features: openings, shifts in focus, narrative perspective, pacing, and endings.',
        hasQuiz: true,
        webUrl: 'https://theenglishhub.app/guides/structural-analysis',
      },
      {
        id: 'lang-creative',
        title: 'Creative Writing',
        description: 'Descriptive and narrative writing skills',
        icon: 'pencil-outline',
        progress: 35,
        summary:
          'A toolkit for creative writing success: crafting compelling openings, using sensory detail, varying sentence structures, and building atmosphere for descriptive and narrative tasks.',
        webUrl: 'https://theenglishhub.app/guides/creative-writing',
      },
      {
        id: 'lang-transactional',
        title: 'Transactional Writing',
        description: 'Letters, articles, speeches, and reviews',
        icon: 'newspaper-outline',
        progress: 20,
        summary:
          'How to write persuasively across different forms: articles, speeches, letters, and reviews. Covers rhetorical techniques, tone, audience, and format conventions.',
        hasQuiz: true,
        webUrl: 'https://theenglishhub.app/guides/transactional-writing',
      },
    ],
  },
  {
    id: 'exam-practice',
    title: 'Exam Practice',
    icon: 'timer-outline',
    color: '#dc2626',
    topics: [
      {
        id: 'exam-timing',
        title: 'Exam Timing',
        description: 'How to manage your time in the exam',
        icon: 'stopwatch-outline',
        progress: 0,
        summary:
          'Paper-by-paper timing breakdowns for GCSE and A-Level English exams. Learn how long to spend on each question and how to avoid running out of time.',
        webUrl: 'https://theenglishhub.app/guides/exam-timing',
      },
      {
        id: 'exam-essay',
        title: 'Essay Structure',
        description: 'Building a top-band essay',
        icon: 'document-text-outline',
        progress: 15,
        summary:
          'The PEEL paragraph structure and beyond: how to write introductions, develop analytical paragraphs, embed quotations, and craft strong conclusions.',
        hasQuiz: true,
        webUrl: 'https://theenglishhub.app/guides/essay-structure',
      },
      {
        id: 'exam-extract',
        title: 'Extract Questions',
        description: 'Approaching extract-based questions',
        icon: 'reader-outline',
        progress: 0,
        summary:
          'Step-by-step strategies for tackling extract-based questions: reading the extract, annotating key features, planning your response, and writing under timed conditions.',
        hasQuiz: true,
        webUrl: 'https://theenglishhub.app/guides/extract-questions',
      },
    ],
  },
  {
    id: 'flashcards',
    title: 'Flashcards',
    icon: 'albums-outline',
    color: '#d97706',
    topics: [
      {
        id: 'fc-quotes',
        title: 'Key Quotes',
        description: '20 essential quotes with analysis',
        icon: 'chatbox-outline',
        progress: 0,
        summary:
          'Test your knowledge of 20 key quotes from across the English Literature syllabus. Each card shows the quote on the front and the source, context, and analysis on the back.',
        flashcardCategory: 'quotes',
      },
      {
        id: 'fc-characters',
        title: 'Characters',
        description: '20 major characters with key facts',
        icon: 'people-outline',
        progress: 0,
        summary:
          'Revise 20 major characters from set texts. Each card shows the character name and text on the front, with key traits, quotes, and analysis on the back.',
        flashcardCategory: 'characters',
      },
      {
        id: 'fc-devices',
        title: 'Literary Devices',
        description: '20 techniques with definitions and examples',
        icon: 'construct-outline',
        progress: 0,
        summary:
          'Learn 20 essential literary devices. Each card shows the device name on the front, with a clear definition and example from a well-known text on the back.',
        flashcardCategory: 'devices',
      },
    ],
  },
];

export function getCategoryById(id: CategoryId): StudyCategory | undefined {
  return studyCategories.find((c) => c.id === id);
}

export function getTopicById(id: string): StudyTopic | undefined {
  for (const cat of studyCategories) {
    const topic = cat.topics.find((t) => t.id === id);
    if (topic) return topic;
  }
  return undefined;
}
