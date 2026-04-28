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
    { url: `${base}/revision/poetry`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/revision/texts`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    {
      url: `${base}/revision/language`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/flashcards`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/exam-technique`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/grade-targets`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    { url: `${base}/revision/quiz`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    {
      url: `${base}/revision/common-errors`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    { url: `${base}/mock-exams`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/games`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },

    // Audience pages
    { url: `${base}/for-teachers`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/for-schools`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/for-parents`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/creators`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/igcse`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Resources hub
    { url: `${base}/resources`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },

    // English Language resources
    {
      url: `${base}/resources/english-language`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
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
      })),
    ),
    {
      url: `${base}/resources/english-language/ocr/spoken-language`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/resources/english-language/wjec/grade-boundaries`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // English Literature resources
    {
      url: `${base}/resources/english-literature`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
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
      })),
    ),
    // AQA Literature texts
    ...['macbeth', 'romeo-and-juliet', 'christmas-carol', 'inspector-calls', 'jekyll-and-hyde'].map(
      (text) => ({
        url: `${base}/resources/english-literature/aqa/${text}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }),
    ),
    // Edexcel Literature texts
    ...[
      'macbeth',
      'romeo-and-juliet',
      'christmas-carol',
      'inspector-calls',
      'jekyll-and-hyde',
      'animal-farm',
      'lord-of-the-flies',
    ].map((text) => ({
      url: `${base}/resources/english-literature/edexcel/${text}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // OCR Literature texts
    ...['macbeth', 'romeo-and-juliet', 'christmas-carol', 'inspector-calls', 'jekyll-and-hyde'].map(
      (text) => ({
        url: `${base}/resources/english-literature/ocr/${text}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      }),
    ),
    // CAIE Literature texts and pages
    ...[
      'paper-1',
      'paper-2',
      'poetry',
      'unseen',
      'grade-boundaries',
      'exam-technique',
      'macbeth',
      'christmas-carol',
      'inspector-calls',
      'jekyll-and-hyde',
      'great-expectations',
      'to-kill-a-mockingbird',
      'things-fall-apart',
      'a-midsummer-nights-dream',
      'a-streetcar-named-desire',
      'a-taste-of-honey',
      'blues-for-an-alabama-sky',
      'fire-on-the-mountain',
      'picnic-at-hanging-rock',
      'rebecca',
      'songs-of-ourselves-v1',
      'songs-of-ourselves-v2',
      'unseen-poetry',
    ].map((sub) => ({
      url: `${base}/resources/english-literature/caie/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // CAIE 0475 Songs of Ourselves Volume 1 — individual poems
    ...[
      'funeral-blues',
      'hawk-roosting',
      'he-never-expected-much',
      'on-finding-a-small-fly-crushed-in-a-book',
      'rain',
      'the-city-planners',
      'the-thought-fox',
      'wind',
    ].map((poem) => ({
      url: `${base}/resources/english-literature/caie/songs-of-ourselves-v1/${poem}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    {
      url: `${base}/resources/english-literature/wjec/grade-boundaries`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Revision notes
    {
      url: `${base}/resources/revision-notes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...[
      'macbeth',
      'romeo-and-juliet',
      'christmas-carol',
      'inspector-calls',
      'jekyll-and-hyde',
      'animal-farm',
      'lord-of-the-flies',
      'great-expectations',
      'frankenstein',
      'jane-eyre',
      'othello',
      'the-tempest',
      'merchant-of-venice',
      'much-ado-about-nothing',
      'pride-and-prejudice',
      'blood-brothers',
      'view-from-the-bridge',
      'the-crucible',
      'silas-marner',
      'sign-of-four',
      'woman-in-black',
      'never-let-me-go',
    ].map((text) => ({
      url: `${base}/resources/revision-notes/${text}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Poetry
    {
      url: `${base}/resources/poetry`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...[
      'power-and-conflict',
      'love-and-relationships',
      'edexcel-anthology',
      'unseen-poetry',
      'techniques',
    ].map((sub) => ({
      url: `${base}/resources/poetry/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Writing skills
    {
      url: `${base}/resources/writing-skills`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...['creative-writing', 'persuasive-writing', 'analytical-writing', 'grammar-punctuation'].map(
      (sub) => ({
        url: `${base}/resources/writing-skills/${sub}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }),
    ),

    // Exam technique
    {
      url: `${base}/resources/exam-technique`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...['essay-structure', 'question-types', 'time-management', 'exam-day'].map((sub) => ({
      url: `${base}/resources/exam-technique/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Themes
    {
      url: `${base}/resources/themes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...['power', 'love', 'guilt', 'conflict', 'social-responsibility'].map((sub) => ({
      url: `${base}/resources/themes/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Context
    {
      url: `${base}/resources/context`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...['elizabethan-jacobean', 'victorian', 'romantic', 'twentieth-century'].map((sub) => ({
      url: `${base}/resources/context/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Grade targets
    {
      url: `${base}/resources/grade-targets`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...['grade-5', 'grade-7', 'grade-9'].map((sub) => ({
      url: `${base}/resources/grade-targets/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Model answers
    {
      url: `${base}/resources/model-answers`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...['creative-writing', 'language-analysis', 'literature-essay', 'persuasive-writing'].map(
      (sub) => ({
        url: `${base}/resources/model-answers/${sub}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }),
    ),

    // Techniques, vocabulary, study tools
    {
      url: `${base}/resources/techniques`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/resources/techniques/language-devices`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/resources/techniques/structural-devices`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/resources/vocabulary`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...['academic', 'analytical', 'descriptive'].map((sub) => ({
      url: `${base}/resources/vocabulary/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    {
      url: `${base}/resources/study-tools`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...['flashcards', 'checklists', 'quote-tester', 'revision-planner'].map((sub) => ({
      url: `${base}/resources/study-tools/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    {
      url: `${base}/resources/glossary`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/resources/spoken-language`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/resources/spoken-language/topics`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.5,
    },

    // Teaching resources
    {
      url: `${base}/resources/teaching`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...['lesson-plans', 'assessment', 'printables'].map((sub) => ({
      url: `${base}/resources/teaching/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Analysis pages
    ...[
      'macbeth',
      'jekyll-hyde',
      'inspector-calls',
      'christmas-carol',
      'aqa-love-relationships',
      'aqa-power-conflict',
      'language-paper',
      'revision',
    ].map((slug) => ({
      url: `${base}/analysis/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Assessment
    {
      url: `${base}/assessment/reading`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Revision text hub pages
    ...[
      'macbeth',
      'romeo-and-juliet',
      'jekyll-and-hyde',
      'a-christmas-carol',
      'an-inspector-calls',
      'animal-farm',
      'lord-of-the-flies',
      'great-expectations',
      'frankenstein',
      'jane-eyre',
      'much-ado-about-nothing',
      'the-tempest',
      'of-mice-and-men',
      'a-view-from-the-bridge',
      'blood-brothers',
      'things-fall-apart',
      'to-kill-a-mockingbird',
      'pride-and-prejudice',
      'anita-and-me',
      'curious-incident',
      'never-let-me-go',
      'pigeon-english',
    ].map((text) => ({
      url: `${base}/revision/texts/${text}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),

    // Revision text sub-pages (discovered from filesystem)
    ...(
      [
        [
          'a-christmas-carol',
          ['characters', 'context', 'essay-plans', 'key-quotes', 'staves', 'themes'],
        ],
        ['a-view-from-the-bridge', ['characters', 'context', 'key-quotes', 'themes']],
        [
          'an-inspector-calls',
          ['acts', 'characters', 'context', 'essay-plans', 'key-quotes', 'themes'],
        ],
        [
          'animal-farm',
          ['chapters', 'characters', 'context', 'essay-plans', 'key-quotes', 'themes'],
        ],
        ['blood-brothers', ['acts', 'characters', 'essay-plans', 'key-quotes', 'themes']],
        ['frankenstein', ['chapters', 'characters', 'essay-plans', 'key-quotes', 'read', 'themes']],
        ['great-expectations', ['chapters', 'characters', 'essay-plans', 'key-quotes', 'themes']],
        ['jane-eyre', ['chapters', 'key-quotes']],
        [
          'jekyll-and-hyde',
          ['chapters', 'characters', 'context', 'essay-plans', 'key-quotes', 'themes'],
        ],
        [
          'lord-of-the-flies',
          ['chapters', 'characters', 'context', 'essay-plans', 'key-quotes', 'themes'],
        ],
        [
          'macbeth',
          [
            'act-1',
            'act-2',
            'act-3',
            'acts',
            'characters',
            'context',
            'essay-plans',
            'key-quotes',
            'read',
            'themes',
          ],
        ],
        ['of-mice-and-men', ['characters', 'context', 'key-quotes', 'themes']],
        ['pride-and-prejudice', ['chapters', 'characters']],
        [
          'romeo-and-juliet',
          ['acts', 'characters', 'context', 'essay-plans', 'key-quotes', 'themes'],
        ],
        ['things-fall-apart', ['characters', 'context', 'key-quotes', 'themes']],
        ['to-kill-a-mockingbird', ['characters', 'context', 'key-quotes', 'themes']],
      ] as const
    ).flatMap(([text, subs]) =>
      subs.map((sub) => ({
        url: `${base}/revision/texts/${text}/${sub}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
    ),

    // Revision poetry hubs
    {
      url: `${base}/revision/poetry/power-and-conflict`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/poetry/power-and-conflict/essay-plans`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/revision/poetry/love-and-relationships`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/poetry/love-and-relationships/essay-plans`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/revision/poetry/love-and-relationships/comparison-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/revision/poetry/aqa-worlds-and-lives`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${base}/revision/poetry/edexcel`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/poetry/edexcel/essay-plans`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/revision/poetry/edexcel/conflict`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/poetry/edexcel/time-and-place`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/poetry/eduqas`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/poetry/eduqas/essay-plans`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/revision/poetry/ocr`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/poetry/ocr/essay-plans`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/revision/poetry/ocr/comparison-guide`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/revision/poetry/ocr/themes`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/revision/poetry/ocr/conflict`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/poetry/ocr/love-and-relationships`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/poetry/ocr/power-and-natural-world`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/poetry/ocr/youth-and-age`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/revision/poetry/unseen-poetry`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Individual poems — Power and Conflict (AQA)
    ...[
      'ozymandias',
      'london',
      'the-prelude',
      'my-last-duchess',
      'the-charge-of-the-light-brigade',
      'exposure',
      'storm-on-the-island',
      'bayonet-charge',
      'remains',
      'poppies',
      'war-photographer',
      'tissue',
      'the-emigree',
      'kamikaze',
      'checking-out-me-history',
    ].map((poem) => ({
      url: `${base}/revision/poetry/power-and-conflict/${poem}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Individual poems — Love and Relationships (AQA)
    ...[
      'when-we-two-parted',
      'loves-philosophy',
      'neutral-tones',
      'porphyrias-lover',
      'sonnet-29',
      'before-you-were-mine',
      'climbing-my-grandfather',
      'eden-rock',
      'follower',
      'letters-from-yorkshire',
      'mother-any-distance',
      'singh-song',
      'the-farmers-bride',
      'walking-away',
      'winter-swans',
    ].map((poem) => ({
      url: `${base}/revision/poetry/love-and-relationships/${poem}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Individual poems — Edexcel Conflict
    ...['a-poison-tree', 'the-destruction-of-sennacherib'].map((poem) => ({
      url: `${base}/revision/poetry/edexcel/conflict/${poem}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Individual poems — Edexcel Time and Place
    ...[
      'london',
      'composed-upon-westminster-bridge',
      'i-started-early-took-my-dog',
      'to-autumn',
    ].map((poem) => ({
      url: `${base}/revision/poetry/edexcel/time-and-place/${poem}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Individual poems — Eduqas (legacy pre-2025 anthology)
    // These poems are NOT part of the Eduqas 2025 cluster but still serve content as a
    // study reference. Demoted to priority 0.1 to prevent SEO promotion of legacy content.
    ...[
      'dulce-et-decorum-est',
      'the-soldier',
      'london',
      'ozymandias',
      'the-prelude',
      'a-wife-in-london',
      'sonnet-43',
      'to-autumn',
    ].map((poem) => ({
      url: `${base}/revision/poetry/eduqas/${poem}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.1,
    })),

    // Individual poems — OCR Love and Relationships
    ...['neutral-tones', 'she-dwelt-among-the-untrodden-ways', 'she-walks-in-beauty'].map(
      (poem) => ({
        url: `${base}/revision/poetry/ocr/love-and-relationships/${poem}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }),
    ),

    // Individual poems — OCR Power and Natural World
    ...['the-eagle'].map((poem) => ({
      url: `${base}/revision/poetry/ocr/power-and-natural-world/${poem}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // Individual poems — OCR Youth and Age
    ...['crossing-the-bar', 'when-i-have-fears'].map((poem) => ({
      url: `${base}/revision/poetry/ocr/youth-and-age/${poem}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // ============================================================
    // IGCSE — Edexcel
    // ============================================================
    { url: `${base}/igcse/edexcel`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    {
      url: `${base}/igcse/edexcel/syllabus`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/igcse/edexcel/past-papers`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/igcse/edexcel/exam-technique`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/igcse/edexcel/essay-technique`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/igcse/edexcel/essay-technique/comparison-essays`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/igcse/edexcel/essay-technique/mark-scheme`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // IGCSE Edexcel Drama
    {
      url: `${base}/igcse/edexcel/drama`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...(
      [
        [
          'a-view-from-the-bridge',
          ['characters', 'context', 'essay-plans', 'key-quotes', 'themes'],
        ],
        [
          'an-inspector-calls',
          [
            'act-1',
            'act-2',
            'act-3',
            'characters',
            'context',
            'essay-plans',
            'key-quotes',
            'themes',
          ],
        ],
        ['curious-incident', ['characters', 'key-quotes', 'themes']],
      ] as const
    ).flatMap(([text, subs]) => [
      {
        url: `${base}/igcse/edexcel/drama/${text}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
      ...subs.map((sub) => ({
        url: `${base}/igcse/edexcel/drama/${text}/${sub}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
    ]),

    // IGCSE Edexcel Prose
    {
      url: `${base}/igcse/edexcel/prose`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...(
      [
        ['of-mice-and-men', ['chapters', 'characters', 'essay-plans', 'key-quotes', 'themes']],
        ['things-fall-apart', ['characters', 'key-quotes', 'themes']],
        [
          'to-kill-a-mockingbird',
          ['chapters', 'characters', 'context', 'essay-plans', 'key-quotes', 'themes'],
        ],
      ] as const
    ).flatMap(([text, subs]) => [
      {
        url: `${base}/igcse/edexcel/prose/${text}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
      ...subs.map((sub) => ({
        url: `${base}/igcse/edexcel/prose/${text}/${sub}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
    ]),

    // IGCSE Edexcel Shakespeare
    {
      url: `${base}/igcse/edexcel/shakespeare`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...(
      [
        ['macbeth', ['characters', 'context', 'essay-plans', 'plot', 'quotes', 'themes']],
        ['much-ado', ['characters', 'quotes', 'themes']],
        ['romeo-and-juliet', ['characters', 'context', 'essay-plans', 'quotes', 'themes']],
      ] as const
    ).flatMap(([text, subs]) => [
      {
        url: `${base}/igcse/edexcel/shakespeare/${text}`,
        lastModified: now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      },
      ...subs.map((sub) => ({
        url: `${base}/igcse/edexcel/shakespeare/${text}/${sub}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
    ]),

    // IGCSE Edexcel Poetry — official 4ET1 Anthology Issue 2 (13 poems)
    {
      url: `${base}/igcse/edexcel/poetry`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...[
      'an-unknown-girl',
      'disabled',
      'half-caste',
      'if',
      'la-belle-dame-sans-merci',
      'out-out',
      'ozymandias',
      'remember',
      'sonnet-116',
      'still-i-rise',
      'the-bright-lights-of-sarajevo',
      'the-tyger',
      'war-photographer',
    ].map((poem) => ({
      url: `${base}/igcse/edexcel/poetry/${poem}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // Orphan IGCSE Edexcel poetry slugs — pages exist but are NOT in the
    // current 4ET1 Anthology Issue 2. Demoted to priority 0.3 to keep them
    // discoverable for archived study traffic without promoting in SEO.
    ...['cousin-kate', 'piano', 'the-man-he-killed'].map((poem) => ({
      url: `${base}/igcse/edexcel/poetry/${poem}`,
      lastModified: now,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),

    // IGCSE Edexcel Unseen Poetry
    {
      url: `${base}/igcse/edexcel/unseen-poetry`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...['approach', 'comparison', 'language-analysis', 'practice', 'structure-form'].map((sub) => ({
      url: `${base}/igcse/edexcel/unseen-poetry/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // ============================================================
    // IGCSE — Edexcel Language
    // ============================================================
    {
      url: `${base}/igcse/edexcel-lang`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/igcse/edexcel-lang/anthology`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    // Edexcel IGCSE English Language A (4EA1) — all 10 prescribed Anthology texts
    ...[
      '127-hours',
      'a-game-of-polo-with-a-headless-goat',
      'a-passage-to-africa',
      'beyond-the-sky-and-the-earth',
      'chinese-cinderella',
      'explorers-or-boys-messing-about',
      'h-is-for-hawk',
      'the-danger-of-a-single-story',
      'the-explorers-daughter',
      'young-and-dyslexic',
    ].map((text) => ({
      url: `${base}/igcse/edexcel-lang/anthology/${text}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // ============================================================
    // IGCSE — Cambridge
    // ============================================================
    { url: `${base}/igcse/cambridge`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },

    // Cambridge 0500
    {
      url: `${base}/igcse/cambridge/0500`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/igcse/cambridge/0500/syllabus`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/igcse/cambridge/0500/vocabulary`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/igcse/cambridge/0500/grade-boundaries`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/igcse/cambridge/0500/comprehension-strategies`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/igcse/cambridge/0500/paper-1`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...[
      'language-analysis',
      'model-answers',
      'practice',
      'reading-techniques',
      'summary-writing',
    ].map((sub) => ({
      url: `${base}/igcse/cambridge/0500/paper-1/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    {
      url: `${base}/igcse/cambridge/0500/paper-2`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...['descriptive-writing', 'directed-writing', 'model-answers', 'narrative-writing'].map(
      (sub) => ({
        url: `${base}/igcse/cambridge/0500/paper-2/${sub}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }),
    ),

    // Cambridge 0990
    {
      url: `${base}/igcse/cambridge/0990`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...[
      'difference-vs-0500',
      'grade-5-guide',
      'grade-7-guide',
      'grade-9-guide',
      'grade-conversion',
      'practice-paper-1',
      'practice-paper-2',
      'syllabus',
    ].map((sub) => ({
      url: `${base}/igcse/cambridge/0990/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    {
      url: `${base}/igcse/cambridge/0990/paper-1`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/igcse/cambridge/0990/paper-1/question-types`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/igcse/cambridge/0990/paper-2`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Cambridge Composition
    {
      url: `${base}/igcse/cambridge/composition`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${base}/igcse/cambridge/composition/mark-scheme`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/igcse/cambridge/composition/sentence-variety`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/igcse/cambridge/composition/vocabulary-upgrade`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/igcse/cambridge/composition/descriptive`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...[
      'extended-metaphors',
      'model-answers',
      'practice-prompts',
      'sensory-language',
      'structure',
    ].map((sub) => ({
      url: `${base}/igcse/cambridge/composition/descriptive/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    {
      url: `${base}/igcse/cambridge/composition/narrative`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...['character', 'dialogue', 'model-answers', 'practice-prompts', 'structure', 'tension'].map(
      (sub) => ({
        url: `${base}/igcse/cambridge/composition/narrative/${sub}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }),
    ),

    // Cambridge Reading
    {
      url: `${base}/igcse/cambridge/reading`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...[
      'character-introductions',
      'childrens-classic',
      'classic-novel-openings',
      'descriptive-nature',
      'dialogue-analysis',
      'modernist-fiction',
      'narrative-voice',
      'setting-atmosphere',
      'travel-writing',
      'victorian-fiction',
    ].map((sub) => ({
      url: `${base}/igcse/cambridge/reading/${sub}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),

    // ============================================================
    // Toolkit
    // ============================================================
    { url: `${base}/toolkit`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    {
      url: `${base}/toolkit/test-builder`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/toolkit/revision-builder`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/toolkit/personalised-revision`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/toolkit/my-materials`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/toolkit/progress`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Note: /demo/*, /dashboard/*, and /auth/* are disallowed in robots.ts and
    // intentionally excluded from the sitemap to avoid "Indexed though blocked"
    // warnings in Google Search Console.

    // ============================================================
    // Other
    // ============================================================
    { url: `${base}/board-select`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },

    // Info & legal pages
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/faqs`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/help`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/help/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/help/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: `${base}/help/report`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    {
      url: `${base}/help/suggestions`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    { url: `${base}/safeguarding`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    {
      url: `${base}/safeguarding/report`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/cookie-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/accessibility`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${base}/refund-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    {
      url: `${base}/data-processing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },

    // Additional pages
    { url: `${base}/pricing`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    {
      url: `${base}/for-teachers/free-resources`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/for-schools/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    { url: `${base}/affiliates`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    {
      url: `${base}/legal/acceptable-use`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${base}/legal/ai-transparency`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${base}/legal/cancellation`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${base}/legal/cancellation-form`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${base}/legal/complaints`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${base}/legal/disclaimer`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${base}/legal/privacy-qatar`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${base}/legal/safeguarding`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${base}/legal/rights`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]

  const courseRoutes: MetadataRoute.Sitemap = allCourses.map((course) => ({
    url: `${base}/courses/${course.id}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticRoutes, ...courseRoutes]
}
