/**
 * /blog/[slug] - individual blog article.
 *
 * Server component. Compiles the MDX body via `compileMDX` from
 * `next-mdx-remote/rsc` and renders the article shell with breadcrumbs,
 * prose styles and two pieces of structured data:
 *
 *   1. BreadcrumbList - Home → Blog → {Title}
 *   2. Article - headline, description, dates, author, publisher, and the
 *      language actually rendered (`inLanguage`, so the /ar surface stops
 *      declaring English)
 *
 * ONWARD LINKING: every article ends with one relevant link into a product
 * or revision page, chosen from the post's own tags/category/level - see
 * `resolveOnwardDestination` below for why the template owns this rather
 * than the MDX files.
 *
 * RENDERING MODEL (honest version, Aug 2026): this route is DYNAMICALLY
 * rendered by design. The site's i18n works by cookie/URL → middleware →
 * `x-lang` request header, and both this page and the root layout read
 * `headers()`, so posts compile per request. Two consequences, both
 * handled explicitly:
 *
 *   - Unknown slugs cannot rely on `dynamicParams = false` (that gate is
 *     only meaningful for statically-rendered routes; here it stamped a
 *     200 on the not-found shell). Instead we check the slug against the
 *     catalogue and call `notFound()`, which returns a real HTTP 404 on
 *     a dynamic render.
 *   - A post that fails MDX compilation would throw per-request and
 *     collapse the page to an empty shell WITHOUT failing the build (19
 *     posts shipped broken this way until Aug 2026 - HTML `<!-- -->`
 *     comments are invalid MDX). `scripts/check-mdx-compile.mjs` now runs
 *     in `prebuild` and fails the build on any uncompilable MDX file.
 *
 * Arabic: `/ar/blog/<slug>` is rewritten by middleware to this route with
 * `x-lang: ar`; `getBlogPost(slug, 'ar')` then serves the `<slug>.ar.mdx`
 * sibling when it exists (EN fallback otherwise). Metadata is locale-aware
 * and posts with an AR variant emit hreflang alternates + a visible
 * cross-language link.
 */

import type { Metadata } from 'next'
import type { ComponentPropsWithoutRef } from 'react'
import { headers } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { compileMDX } from 'next-mdx-remote/rsc'

import { AIContentLabel } from '@/components/ai/ai-content-label'
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import {
  getAllBlogPosts,
  getBlogPost,
  getBlogSlugs,
  hasArabicVariant,
  type BlogPost,
} from '@/lib/blog/posts'
import { tSync } from '@/lib/i18n/t'
import type { Locale } from '@/lib/i18n/dictionary'

const SITE_URL = 'https://theenglishhub.app'
const BLOG_URL = `${SITE_URL}/blog`

type Params = { slug: string }

/** Resolve the request locale the middleware stamped (see file header). */
async function resolveLocale(): Promise<{ locale: Locale; viaArUrl: boolean }> {
  const h = await headers()
  const lang = h.get('x-lang')
  return {
    locale: lang === 'ar' ? 'ar' : 'en',
    // 'url' means the visitor is on the canonical /ar/... surface (as
    // opposed to the eh-lang cookie toggling an /blog/... URL).
    viaArUrl: lang === 'ar' && h.get('x-lang-source') === 'url',
  }
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const { locale, viaArUrl } = await resolveLocale()
  const post = getBlogPost(slug, locale)

  if (!post) {
    // Unknown slugs on this route CANNOT return a real HTTP 404: the route
    // is dynamically rendered (cookie i18n reads headers()) and Next 15
    // streams the shell - and, since 15.2, the metadata too - with a
    // committed 200 before the page body (or even this function) can
    // change the status. Verified against both the built server and dev
    // (notFound() here or in the body still yields 200 + not-found UI).
    // So we ship the next-best thing Google fully respects: an explicit
    // noindex on the streamed metadata, plus the body-level notFound() UI.
    // The June 2026 de-index audit confirmed GSC treats these as benign
    // soft-404s. A true 404 would need a blog-slug manifest consulted in
    // middleware - revisit post-launch if GSC ever complains.
    return {
      title: 'Article not found',
      description: 'The article you are looking for could not be found.',
      robots: { index: false, follow: false },
    }
  }

  const enUrl = `${BLOG_URL}/${post.slug}`
  const arUrl = `${SITE_URL}/ar/blog/${post.slug}`
  const hasAr = hasArabicVariant(post.slug)
  // Canonical: the /ar/... surface is its own canonical URL when the post
  // really has an Arabic variant; everything else canonicalises to the EN
  // URL (cookie-toggled Arabic on /blog/... is invisible to cookieless
  // crawlers, so the EN canonical is the truthful one there).
  const url = viaArUrl && hasAr ? arUrl : enUrl
  // Document <title> must be brandless: the root layout's title template
  // (`%s - The English Hub`) appends the brand. Baking it in here too produced
  // a DOUBLED suffix ("Post - The English Hub - The English Hub") in SERPs on
  // every blog post. OG/Twitter titles are NOT templated, so they keep the
  // brand explicitly for social cards.
  const brandedTitle = `${post.title} - The English Hub`
  const ogImage = buildOgImage(post)

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
      ...(hasAr ? { languages: { 'en-GB': enUrl, ar: arUrl, 'x-default': enUrl } } : {}),
    },
    openGraph: {
      title: brandedTitle,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description: post.description,
      images: [ogImage],
    },
  }
}

/**
 * Resolve the OG image for a given post.
 *
 * If the frontmatter `cover` is already an `/api/og?…` URL we use it
 * verbatim - that's the project convention. Otherwise we synthesise a
 * fresh /api/og URL from the title and category so the post still has a
 * branded social card.
 *
 * 2026-06-08 — SEO audit fix. Previously this returned RELATIVE URLs
 * like `/api/og?…`. Some social scrapers (LinkedIn most notably, plus
 * a handful of email clients) silently fail on relative OG image URLs
 * and render no preview card. Every URL is now absolute, prefixed with
 * `https://theenglishhub.app`.
 */
function buildOgImage(post: BlogPost): string {
  const SITE = 'https://theenglishhub.app'
  if (post.cover && post.cover.startsWith('http')) return post.cover
  if (post.cover && post.cover.startsWith('/api/og')) return `${SITE}${post.cover}`
  if (post.cover && post.cover.startsWith('/')) return `${SITE}${post.cover}`
  return `${SITE}/api/og?title=${encodeURIComponent(post.title)}&subtitle=${encodeURIComponent(post.category || 'The English Hub Blog')}`
}

function formatDisplayDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`)
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(d)
}

/**
 * Pick up to `limit` related posts that share a tag or the category with the
 * current post (excluding the post itself). Posts are scored by the number of
 * shared tags (a shared category counts as one point), then newest-first as a
 * tie-breaker, so the most topically-relevant articles surface first.
 *
 * This closes the internal-linking "island": individual articles previously
 * had no outbound links to sibling posts, so crawlers (and readers) hit a
 * dead end at the bottom of every article. Server-rendered, so the links are
 * in the static HTML and discoverable without JS.
 */
/* ------------------------------------------------------------------ */
/*  ONWARD LINKING - blog → product ("money") pages                    */
/* ------------------------------------------------------------------ */

/**
 * A single onward destination: a real product/revision page the reader can
 * carry the article into.
 *
 * WHY THIS EXISTS (2026-08-23 SEO internal-linking audit): the article
 * template's only outbound links were `Related articles`, i.e. blog → blog.
 * All 42 English MDX posts happen to hand-link into revision pages inside
 * their body copy, but 11 of the 40 Arabic variants carry NO internal links
 * at all (an-inspector-calls, gcse-english-literature-revision-tips,
 * gothic-literature-techniques, igcse-english-language-exam-tips,
 * macbeth-edexcel-a-level, shakespeare-sonnet-analysis, symbolism-in-poetry,
 * understanding-ao1, unseen-poem-in-8-minutes, comparative-essay-ao5,
 * gcse-english-prose-analysis). Those are crawl and conversion dead ends.
 * Fixing it in the TEMPLATE - rather than in 84 MDX files - means every
 * post, in every locale, now has one relevant onward path, and new posts
 * inherit it automatically.
 *
 * COPY IS INLINE, NOT IN THE DICTIONARY, and deliberately so: every
 * `blog.*` key lives in the master `dictionary.ts`, which this workstream
 * must not edit, and adding keys to an unrelated shard would desynchronise
 * `src/lib/i18n/generated/*` until someone re-ran `npm run i18n:generate`.
 * The EN/AR pairs below follow the existing `pickLocaleField` house pattern
 * for locale-paired content. Flagged for the i18n owner to migrate.
 *
 * Every `href` was checked against the route tree - all resolve to a real
 * `page.tsx`. Every blurb describes what the destination genuinely
 * contains (checked against each page's own metadata description); no
 * outcome or scale claims.
 */
type OnwardDestination = {
  href: string
  title: string
  titleAr: string
  blurb: string
  blurbAr: string
}

const ONWARD: Record<string, OnwardDestination> = {
  macbeth: {
    href: '/revision/texts/macbeth',
    title: 'Macbeth revision hub',
    titleAr: 'مركز مراجعة Macbeth',
    blurb: 'Themes, characters, key quotations with AO2 analysis, and exam-style practice.',
    blurbAr: 'الثيمات والشخصيات واقتباسات مفتاحية مع تحليل AO2، وتدريب على أسلوب الامتحان.',
  },
  inspectorCalls: {
    href: '/revision/texts/an-inspector-calls',
    title: 'An Inspector Calls revision hub',
    titleAr: 'مركز مراجعة An Inspector Calls',
    blurb: 'Themes, characters, key quotations with AO2 analysis, and exam-style practice.',
    blurbAr: 'الثيمات والشخصيات واقتباسات مفتاحية مع تحليل AO2، وتدريب على أسلوب الامتحان.',
  },
  romeoAndJuliet: {
    href: '/revision/texts/romeo-and-juliet',
    title: 'Romeo and Juliet revision hub',
    titleAr: 'مركز مراجعة Romeo and Juliet',
    blurb: 'Themes, characters, key quotations with AO2 analysis, and exam-style practice.',
    blurbAr: 'الثيمات والشخصيات واقتباسات مفتاحية مع تحليل AO2، وتدريب على أسلوب الامتحان.',
  },
  powerAndConflict: {
    href: '/revision/poetry/power-and-conflict',
    title: 'Power and Conflict revision hub',
    titleAr: 'مركز مراجعة Power and Conflict',
    blurb: 'Poem-by-poem analysis, comparison pairings and exam-style practice.',
    blurbAr: 'تحليل لكل قصيدة، ومقارنات جاهزة، وتدريب على أسلوب الامتحان.',
  },
  unseenPoetry: {
    href: '/revision/poetry/unseen-poetry',
    title: 'Unseen poetry revision hub',
    titleAr: 'مركز مراجعة Unseen Poetry',
    blurb: 'A repeatable method for unseen poems, with worked examples and practice.',
    blurbAr: 'طريقة ثابتة للقصائد غير المدروسة، مع أمثلة محلولة وتدريب.',
  },
  edexcelAnthology: {
    href: '/resources/poetry/edexcel-anthology',
    title: 'Edexcel anthology poetry',
    titleAr: 'قصائد Edexcel Anthology',
    blurb: 'Poem guides and exam-style practice for the Pearson Edexcel anthology.',
    blurbAr: 'أدلة للقصائد وتدريب على أسلوب الامتحان لأنثولوجيا Pearson Edexcel.',
  },
  aqaPaper1: {
    href: '/resources/english-language/aqa/paper-1',
    title: 'AQA English Language Paper 1',
    titleAr: 'AQA English Language Paper 1',
    blurb: 'Question-by-question guidance, timings and model responses for Paper 1.',
    blurbAr: 'إرشادات لكل سؤال، وتوزيع الوقت، وإجابات نموذجية لـ Paper 1.',
  },
  aqaLiterature: {
    href: '/resources/english-literature/aqa',
    title: 'AQA English Literature resources',
    titleAr: 'موارد AQA English Literature',
    blurb: 'Set texts, poetry and paper guidance for the AQA specification.',
    blurbAr: 'النصوص المقررة والشعر وإرشادات الأوراق لمنهج AQA.',
  },
  caieLanguage: {
    href: '/resources/english-language/caie',
    title: 'Cambridge IGCSE English Language',
    titleAr: 'Cambridge IGCSE English Language',
    blurb: 'Paper guidance, techniques and practice for the Cambridge specification.',
    blurbAr: 'إرشادات الأوراق والتقنيات والتدريب لمنهج Cambridge.',
  },
  ocrLanguage: {
    href: '/resources/english-language/ocr',
    title: 'OCR English Language resources',
    titleAr: 'موارد OCR English Language',
    blurb: 'Paper guidance, techniques and practice for the OCR specification.',
    blurbAr: 'إرشادات الأوراق والتقنيات والتدريب لمنهج OCR.',
  },
  essayStructure: {
    href: '/resources/exam-technique/essay-structure',
    title: 'Essay structure guide',
    titleAr: 'دليل بناء المقال',
    blurb: 'How to plan and build an essay paragraph by paragraph.',
    blurbAr: 'شلون تخطط وتبني المقال فقرة فقرة.',
  },
  modelLiteratureEssays: {
    href: '/resources/model-answers/literature-essay',
    title: 'Model literature essays',
    titleAr: 'مقالات أدبية نموذجية',
    blurb: 'Grade 3, 5, 7 and 9 model essays, annotated to show what changes at each level.',
    blurbAr: 'مقالات نموذجية لدرجات 3 و5 و7 و9، مشروحة عشان تشوف شنو يتغيّر بكل مستوى.',
  },
  quoteTester: {
    href: '/resources/study-tools/quote-tester',
    title: 'Quotation tester',
    titleAr: 'اختبار الاقتباسات',
    blurb: 'Test yourself on key quotations until they stick.',
    blurbAr: 'اختبر نفسك في الاقتباسات المفتاحية لين ترسخ.',
  },
  timeManagement: {
    href: '/resources/exam-technique/time-management',
    title: 'Exam timing guide',
    titleAr: 'دليل إدارة وقت الامتحان',
    blurb: 'Paper-by-paper timing breakdowns, and what to do if you run out of time.',
    blurbAr: 'توزيع الوقت لكل ورقة، وشنو تسوي إذا خلص وقتك.',
  },
  examTechnique: {
    href: '/resources/exam-technique',
    title: 'Exam technique hub',
    titleAr: 'مركز مهارات الامتحان',
    blurb: 'Question types, timing and the marking criteria behind them.',
    blurbAr: 'أنواع الأسئلة، وتوزيع الوقت، ومعايير التصحيح ورا كل سؤال.',
  },
  gradeTargets: {
    href: '/revision/grade-targets',
    title: 'Revision by grade target',
    titleAr: 'المراجعة حسب الدرجة المستهدفة',
    blurb: 'What examiners reward at each level, from grade 1 up to grade 9.',
    blurbAr: 'شنو يكافئ عليه المصححون بكل مستوى، من درجة 1 لين درجة 9.',
  },
  mockExams: {
    href: '/mock-exams',
    title: 'Mock exams',
    titleAr: 'الامتحانات التجريبية',
    blurb: 'Sit a full paper under timed conditions and get structured feedback.',
    blurbAr: 'اجلس ورقة كاملة بوقت محدد واحصل على تغذية راجعة مرتّبة.',
  },
  practice: {
    href: '/practice',
    title: 'Practice questions',
    titleAr: 'أسئلة التدريب',
    blurb: 'Exam-style questions with model answers, sorted by question type.',
    blurbAr: 'أسئلة على أسلوب الامتحان مع إجابات نموذجية، مرتّبة حسب نوع السؤال.',
  },
  englishLanguage: {
    href: '/resources/english-language',
    title: 'English Language resources',
    titleAr: 'موارد English Language',
    blurb: 'Board-by-board paper guidance, techniques and writing skills.',
    blurbAr: 'إرشادات الأوراق حسب كل بورد، والتقنيات، ومهارات الكتابة.',
  },
  poetry: {
    href: '/revision/poetry',
    title: 'Poetry revision hub',
    titleAr: 'مركز مراجعة الشعر',
    blurb: 'Anthology and unseen poetry, poem by poem, with comparison practice.',
    blurbAr: 'شعر الأنثولوجيا والقصائد غير المدروسة، قصيدة قصيدة، مع تدريب على المقارنة.',
  },
  setTexts: {
    href: '/revision/texts',
    title: 'Set-text revision hubs',
    titleAr: 'مراكز مراجعة النصوص المقررة',
    blurb: 'Notes, key quotations and practice for the set texts we cover.',
    blurbAr: 'ملاحظات واقتباسات مفتاحية وتدريب للنصوص المقررة اللي نغطيها.',
  },
  forTeachers: {
    // QA 2026-08-23: was '/for-teachers', which next.config.js 308s to
    // '/teachers'. A page.tsx exists at both paths, so the "checked against
    // the route tree" test passed while the link still cost every reader and
    // crawler a redirect hop. Internal links must name the canonical URL.
    href: '/teachers',
    title: 'The English Hub for teachers',
    titleAr: 'The English Hub للمعلّمين',
    blurb: 'Lesson planning, marking support and class analytics in one place.',
    blurbAr: 'تحضير الدروس، ودعم التصحيح، وتحليلات الصف بمكان واحد.',
  },
  forSchools: {
    // QA 2026-08-23: was '/for-schools', which next.config.js 308s to
    // '/schools' (same defect as forTeachers above).
    href: '/schools',
    title: 'The English Hub for schools',
    titleAr: 'The English Hub للمدارس',
    blurb: 'Department-wide deployment, structured pilots and leadership reporting.',
    blurbAr: 'تطبيق على مستوى القسم، وبرامج تجريبية مرتّبة، وتقارير للإدارة.',
  },
  forParents: {
    href: '/for-parents',
    title: 'The English Hub for parents',
    titleAr: 'The English Hub لأولياء الأمور',
    blurb: "How to follow your child's revision and where to help.",
    blurbAr: 'شلون تتابع مراجعة ولدك ووين تقدر تساعد.',
  },
  aLevel: {
    href: '/a-level',
    title: 'A-Level English',
    titleAr: 'A-Level English',
    blurb: 'A-Level Literature and Language guidance and practice.',
    blurbAr: 'إرشادات وتدريب لـ A-Level Literature و Language.',
  },
  igcse: {
    href: '/igcse',
    title: 'IGCSE English',
    titleAr: 'IGCSE English',
    blurb: 'Cambridge and Pearson Edexcel IGCSE guidance and practice.',
    blurbAr: 'إرشادات وتدريب لـ IGCSE من Cambridge و Pearson Edexcel.',
  },
  ks3: {
    href: '/ks3',
    title: 'KS3 English',
    titleAr: 'KS3 English',
    blurb: 'Build the reading and writing foundations GCSE goes on to assume.',
    blurbAr: 'ابنِ أساسات القراءة والكتابة اللي يبني عليها GCSE.',
  },
  revisionHub: {
    href: '/revision',
    title: 'Revision hub',
    titleAr: 'مركز المراجعة',
    blurb: 'Set texts, poetry, language skills and exam technique in one place.',
    blurbAr: 'النصوص المقررة، والشعر، ومهارات اللغة، ومهارات الامتحان بمكان واحد.',
  },
}

/**
 * Choose the single most relevant onward destination for a post, from its
 * frontmatter tags → category → educational level. Most specific match
 * wins; every branch returns a real page, so there is no "no CTA" state
 * and no blanket advert either.
 */
function resolveOnwardDestination(post: BlogPost): OnwardDestination {
  const tags = new Set(post.tags.map((tag) => tag.toLowerCase()))
  const category = post.category.toLowerCase()
  const tagged = (...names: string[]) => names.some((name) => tags.has(name))

  // A-Level first: sending an A-Level reader to a GCSE technique page would
  // be the kind of near-miss that makes an onward link feel like an advert.
  if (post.educationalLevel === 'A-Level') return ONWARD.aLevel

  // 1. Set text / anthology - the most specific signal a post can carry.
  if (tagged('macbeth')) return ONWARD.macbeth
  if (tagged('an inspector calls')) return ONWARD.inspectorCalls
  if (tagged('romeo and juliet')) return ONWARD.romeoAndJuliet
  if (tagged('power and conflict')) return ONWARD.powerAndConflict
  if (tagged('unseen poetry', 'ao4')) return ONWARD.unseenPoetry
  if (tagged('edexcel igcse', '4et1', 'anthology')) return ONWARD.edexcelAnthology

  // 2. Audience - a teacher/parent/leadership post should land on its own
  //    surface, not on a student revision hub.
  if (tagged('teachers')) return ONWARD.forTeachers
  if (tagged('ofsted', 'hod', 'english department')) return ONWARD.forSchools
  if (tagged('ks3 english')) return ONWARD.ks3
  if (tagged('parents', 'for parents')) return ONWARD.forParents

  // 3. Board / paper.
  if (tags.has('aqa') && tags.has('paper 1')) return ONWARD.aqaPaper1
  if (tagged('cambridge igcse', '0500', '0990')) return ONWARD.caieLanguage
  if (tagged('ocr')) return ONWARD.ocrLanguage
  if (tags.has('aqa') && category.includes('literature')) return ONWARD.aqaLiterature

  // 4. Skill / technique.
  if (tagged('quotes', 'memory techniques', 'spaced repetition')) return ONWARD.quoteTester
  if (tagged('essay structure', 'essay planning', 'essay technique', 'peel', 'ao5'))
    return ONWARD.essayStructure
  if (tagged('ao2')) return ONWARD.modelLiteratureEssays
  if (tagged('time management')) return ONWARD.timeManagement
  if (tagged('mock exams')) return ONWARD.mockExams
  if (tagged('grade prediction', 'self-assessment', 'grade 9')) return ONWARD.gradeTargets
  if (tagged('exam technique')) return ONWARD.examTechnique
  if (tagged('ai marking')) return ONWARD.practice

  // 5. Slug signals - a small number of posts carry generic tags
  //    ('gcse english', 'revision') that would otherwise drop them onto the
  //    catch-all hub even though the subject is unambiguous in the slug.
  if (post.slug.includes('poetry') || post.slug.includes('sonnet')) return ONWARD.poetry
  if (post.slug.includes('parent')) return ONWARD.forParents

  // 6. Category.
  if (category.includes('for teachers')) return ONWARD.forTeachers
  if (category.includes('for schools')) return ONWARD.forSchools
  if (category.includes('for parents')) return ONWARD.forParents
  if (category.includes('ai marking')) return ONWARD.practice
  if (category.includes('exam technique')) return ONWARD.examTechnique
  if (category.includes('self-assessment')) return ONWARD.gradeTargets
  if (category.includes('language')) return ONWARD.englishLanguage
  if (category.includes('literature')) return ONWARD.setTexts

  // 7. Educational level, then the revision hub as the catch-all.
  if (post.educationalLevel === 'IGCSE') return ONWARD.igcse
  if (post.educationalLevel === 'KS3') return ONWARD.ks3
  return ONWARD.revisionHub
}

function getRelatedPosts(current: BlogPost, limit = 3): BlogPost[] {
  const currentTags = new Set(current.tags.map((t) => t.toLowerCase()))
  return getAllBlogPosts()
    .filter((p) => p.slug !== current.slug)
    .map((p) => {
      let score = 0
      for (const tag of p.tags) if (currentTags.has(tag.toLowerCase())) score++
      if (current.category && p.category === current.category) score++
      return { post: p, score }
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => (b.score !== a.score ? b.score - a.score : a.post.date < b.post.date ? 1 : -1))
    .slice(0, limit)
    .map((entry) => entry.post)
}

export default async function BlogArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  // Hard 404 for slugs outside the catalogue. On this dynamically-rendered
  // route `notFound()` returns a real HTTP 404 status (unlike the old
  // `dynamicParams = false` gate, which only works for static renders and
  // stamped 200 on the not-found shell here).
  if (!getBlogSlugs().includes(slug)) notFound()

  const { locale, viaArUrl } = await resolveLocale()
  const post = getBlogPost(slug, locale)
  if (!post) notFound()

  const hasAr = hasArabicVariant(post.slug)
  // On the canonical Arabic surface the structured data must point at the
  // Arabic URL too. It previously always used the English URL, so
  // ArticleJsonLd's mainEntityOfPage and the breadcrumbs contradicted the
  // (correct) Arabic canonical that generateMetadata emits.
  const arUrl = `${SITE_URL}/ar/blog/${post.slug}`
  const enUrl = `${BLOG_URL}/${post.slug}`
  const url = viaArUrl && hasAr ? arUrl : enUrl
  const ogImage = buildOgImage(post)

  // `compileMDX` runs server-side and returns a React element ready to
  // render. Tailwind typography handles the default elements; the only
  // override is demoting a leading `# Heading` in the MDX body from `<h1>`
  // to `<h2>`. The article title at L194 below is the page's single,
  // canonical `<h1>` - without this demotion every post shipped two `<h1>`s
  // (flagged by the live SEO audit as "Multiple H1s - 2 H1s"). Mapping the
  // content `h1 → h2` keeps the document outline well-formed (title is h1,
  // in-body section headings start at h2). Sibling content authors can ship
  // richer experiences by extending this `components` map (e.g. callouts).
  const { content } = await compileMDX<Record<string, unknown>>({
    source: post.content,
    options: { parseFrontmatter: false },
    components: {
      h1: (props: ComponentPropsWithoutRef<'h2'>) => <h2 {...props} />,
    },
  })

  // Localised chrome - synchronous lookups using the locale we already
  // resolved above (we avoid `tMany()` because re-reading `headers()`
  // would opt the route into dynamic rendering and defeat the static
  // `dynamicParams = false` 404 gate documented above).
  const tBlogLabel = tSync('blog.breadcrumb_label', locale)
  const readingTimeLabel = tSync('blog.reading_time', locale).replace(
    '{n}',
    String(post.readingTime),
  )

  // Related articles - up to 3 posts sharing a tag/category with this one.
  // Resolved at build time (static render) so the outbound links ship in HTML.
  const relatedPosts = getRelatedPosts(post, 3)

  // Onward path into a product/revision page (see resolveOnwardDestination).
  const onward = resolveOnwardDestination(post)
  const isArabic = locale === 'ar'
  // Internal links must stay on the surface the reader is actually on.
  // Middleware rewrites `/ar/<path>` to `/<path>` with `x-lang: ar`, so an
  // unprefixed href would silently drop an /ar/... visitor back onto the
  // English surface. Cookie-toggled Arabic (viaArUrl false) needs no prefix
  // because the cookie travels with the request. This also fixes the
  // pre-existing leak in the Related-articles links below.
  const localePrefix = viaArUrl ? '/ar' : ''

  return (
    <main className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16 lg:max-w-3xl lg:px-8">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Blog', url: BLOG_URL },
          { name: post.title, url },
        ]}
      />
      <ArticleJsonLd
        headline={post.title}
        description={post.description}
        image={ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`}
        datePublished={post.date}
        authorName={post.author}
        // The Arabic surface serves a genuinely Arabic body (or the EN
        // fallback). Declaring the rendered language keeps the Article node
        // consistent with <html lang>, the hreflang alternates and the
        // Arabic canonical emitted in generateMetadata.
        inLanguage={locale === 'ar' && hasAr ? 'ar' : 'en-GB'}
        url={url}
      />

      <article>
        <header className="mb-8">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted-foreground mb-3">
            {/* Prefixed for the same reason as the onward/related links:
                an unprefixed /blog would bounce an /ar/... reader to EN. */}
            <Link
              href={`${localePrefix}/blog`}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {tBlogLabel}
            </Link>
            {post.category ? (
              <>
                <span aria-hidden="true"> · </span>
                <span>{post.category}</span>
              </>
            ) : null}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-muted-foreground leading-relaxed">{post.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDisplayDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{readingTimeLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{post.educationalLevel}</span>
            <span aria-hidden="true">·</span>
            {/* PDPPL Remediation 6 - AI involvement disclosure at the
                point of consumption. Blog posts in this site are drafted
                by the agent pipeline and human-reviewed before publish. */}
            <AIContentLabel variant="inline" />
            {hasAr ? (
              <>
                <span aria-hidden="true">·</span>
                {locale === 'ar' ? (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="underline underline-offset-4 hover:text-foreground"
                    lang="en"
                  >
                    Read in English
                  </Link>
                ) : (
                  <Link
                    href={`/ar/blog/${post.slug}`}
                    className="underline underline-offset-4 hover:text-foreground"
                    lang="ar"
                    dir="rtl"
                  >
                    اقرأ بالعربية
                  </Link>
                )}
              </>
            ) : null}
          </div>
        </header>

        <div className="prose prose-eh prose-lg max-w-none dark:prose-invert">{content}</div>

        {post.tags.length > 0 ? (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-border/60 pt-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
              >
                #{tag}
              </span>
            ))}
          </div>
        ) : null}
      </article>

      {/* Onward path into the matching product/revision page. Sits directly
          after the article body (ahead of Related articles) because blog →
          blog was previously the ONLY outbound path from this template. */}
      <aside
        aria-labelledby="onward-heading"
        className="mt-12 rounded-xl border border-primary/30 bg-primary/[0.04] p-5 sm:p-6"
      >
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
          {isArabic ? 'الخطوة الجاية' : 'Next step'}
        </p>
        <h2
          id="onward-heading"
          className="mt-2 font-heading text-lg font-semibold tracking-tight text-foreground"
        >
          <Link
            href={`${localePrefix}${onward.href}`}
            className="underline-offset-4 hover:text-primary hover:underline"
          >
            {isArabic ? onward.titleAr : onward.title}
          </Link>
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {isArabic ? onward.blurbAr : onward.blurb}
        </p>
      </aside>

      {relatedPosts.length > 0 ? (
        <section
          aria-labelledby="related-articles-heading"
          className="mt-16 border-t border-border/60 pt-8"
        >
          <h2
            id="related-articles-heading"
            className="font-heading text-lg font-semibold tracking-tight text-foreground"
          >
            {tSync('blog.related.heading', locale)}
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {relatedPosts.map((related) => (
              <li key={related.slug}>
                <Link
                  href={`${localePrefix}/blog/${related.slug}`}
                  className="group block h-full rounded-xl border border-border/60 p-4 transition-colors hover:border-primary/40"
                >
                  <span className="block font-medium text-foreground transition-colors group-hover:text-primary">
                    {related.title}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground leading-relaxed">
                    {related.excerpt}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  )
}
