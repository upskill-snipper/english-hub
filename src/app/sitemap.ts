import { MetadataRoute } from 'next'
import { allCourses } from '@/data/courses'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://theenglishhub.app'
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    // Core pages
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/courses`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/practice`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/revision`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/mock-exams`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/games`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },

    // Audience pages
    { url: `${base}/for-teachers`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/for-schools`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/for-parents`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/creators`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/igcse`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Exam guides
    { url: `${base}/exam-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/exam-guide/aqa`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/exam-guide/edexcel`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/exam-guide/ocr`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/exam-guide/wjec`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/exam-guide/igcse`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },

    // Resources hub
    { url: `${base}/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

    // English Language resources
    { url: `${base}/resources/english-language`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...['aqa', 'edexcel', 'ocr', 'wjec', 'caie'].map((board) => ({
      url: `${base}/resources/english-language/${board}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...['aqa', 'edexcel', 'ocr', 'caie'].flatMap((board) =>
      ['paper-1', 'paper-2', 'techniques', 'writing-skills', 'grade-boundaries'].map((sub) => ({
        url: `${base}/resources/english-language/${board}/${sub}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
    ),
    { url: `${base}/resources/english-language/ocr/spoken-language`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/resources/english-language/wjec/grade-boundaries`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // English Literature resources
    { url: `${base}/resources/english-literature`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...['aqa', 'edexcel', 'ocr', 'wjec', 'caie'].map((board) => ({
      url: `${base}/resources/english-literature/${board}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...['aqa', 'edexcel', 'ocr'].flatMap((board) =>
      ['paper-1', 'paper-2', 'poetry', 'grade-boundaries'].map((sub) => ({
        url: `${base}/resources/english-literature/${board}/${sub}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
    ),
    // AQA Literature texts
    ...['macbeth', 'romeo-and-juliet', 'christmas-carol', 'inspector-calls', 'jekyll-and-hyde'].map((text) => ({
      url: `${base}/resources/english-literature/aqa/${text}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Edexcel Literature texts
    ...['macbeth', 'romeo-and-juliet', 'christmas-carol', 'inspector-calls', 'jekyll-and-hyde', 'animal-farm', 'lord-of-the-flies'].map((text) => ({
      url: `${base}/resources/english-literature/edexcel/${text}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // OCR Literature texts
    ...['macbeth', 'romeo-and-juliet', 'christmas-carol', 'inspector-calls', 'jekyll-and-hyde'].map((text) => ({
      url: `${base}/resources/english-literature/ocr/${text}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // CAIE Literature texts and pages
    ...['paper-1', 'paper-2', 'poetry', 'unseen', 'grade-boundaries', 'exam-technique',
      'macbeth', 'christmas-carol', 'inspector-calls', 'jekyll-and-hyde',
      'great-expectations', 'to-kill-a-mockingbird', 'things-fall-apart',
      'a-midsummer-nights-dream', 'a-streetcar-named-desire', 'a-taste-of-honey',
      'blues-for-an-alabama-sky', 'fire-on-the-mountain', 'picnic-at-hanging-rock',
      'rebecca', 'songs-of-ourselves-v1', 'songs-of-ourselves-v2', 'unseen-poetry',
    ].map((sub) => ({
      url: `${base}/resources/english-literature/caie/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    { url: `${base}/resources/english-literature/wjec/grade-boundaries`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // Revision notes
    { url: `${base}/resources/revision-notes`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...['macbeth', 'romeo-and-juliet', 'christmas-carol', 'inspector-calls', 'jekyll-and-hyde',
      'animal-farm', 'lord-of-the-flies', 'great-expectations', 'frankenstein', 'jane-eyre',
      'othello', 'the-tempest', 'merchant-of-venice', 'much-ado-about-nothing',
      'pride-and-prejudice', 'blood-brothers', 'view-from-the-bridge', 'the-crucible',
      'silas-marner', 'sign-of-four', 'woman-in-black', 'never-let-me-go',
    ].map((text) => ({
      url: `${base}/resources/revision-notes/${text}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Poetry
    { url: `${base}/resources/poetry`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...['power-and-conflict', 'love-and-relationships', 'edexcel-anthology', 'unseen-poetry', 'techniques'].map((sub) => ({
      url: `${base}/resources/poetry/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Writing skills
    { url: `${base}/resources/writing-skills`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...['creative-writing', 'persuasive-writing', 'analytical-writing', 'grammar-punctuation'].map((sub) => ({
      url: `${base}/resources/writing-skills/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Exam technique
    { url: `${base}/resources/exam-technique`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...['essay-structure', 'question-types', 'time-management', 'exam-day'].map((sub) => ({
      url: `${base}/resources/exam-technique/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Comparison skills
    { url: `${base}/resources/comparison`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...['poetry-comparison', 'text-comparison', 'language-comparison'].map((sub) => ({
      url: `${base}/resources/comparison/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Themes
    { url: `${base}/resources/themes`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...['power', 'love', 'guilt', 'conflict', 'social-responsibility'].map((sub) => ({
      url: `${base}/resources/themes/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Context
    { url: `${base}/resources/context`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...['elizabethan-jacobean', 'victorian', 'romantic', 'twentieth-century'].map((sub) => ({
      url: `${base}/resources/context/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Grade targets
    { url: `${base}/resources/grade-targets`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...['grade-5', 'grade-7', 'grade-9'].map((sub) => ({
      url: `${base}/resources/grade-targets/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Model answers
    { url: `${base}/resources/model-answers`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...['creative-writing', 'language-analysis', 'literature-essay', 'persuasive-writing'].map((sub) => ({
      url: `${base}/resources/model-answers/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Techniques, vocabulary, study tools
    { url: `${base}/resources/techniques`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/resources/techniques/language-devices`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/resources/techniques/structural-devices`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/resources/vocabulary`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...['academic', 'analytical', 'descriptive'].map((sub) => ({
      url: `${base}/resources/vocabulary/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    { url: `${base}/resources/study-tools`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...['flashcards', 'checklists', 'quote-tester', 'revision-planner'].map((sub) => ({
      url: `${base}/resources/study-tools/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    { url: `${base}/resources/glossary`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/resources/spoken-language`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/resources/spoken-language/topics`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // Teaching resources
    { url: `${base}/resources/teaching`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    ...['lesson-plans', 'assessment', 'printables'].map((sub) => ({
      url: `${base}/resources/teaching/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Info & legal pages
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/faqs`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/help`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/help/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/help/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/help/report`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/help/suggestions`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/safeguarding`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/safeguarding/report`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/accessibility`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/refund-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/data-processing`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },

    // Additional pages
    { url: `${base}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/affiliates`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/legal/acceptable-use`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/legal/ai-transparency`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/legal/cancellation`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/legal/cancellation-form`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/legal/complaints`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/legal/disclaimer`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/legal/privacy-qatar`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/legal/safeguarding`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ]

  const courseRoutes: MetadataRoute.Sitemap = allCourses.map((course) => ({
    url: `${base}/courses/${course.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...courseRoutes]
}
