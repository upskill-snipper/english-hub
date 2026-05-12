/**
 * Root KS3 curriculum aggregator.
 *
 * Combines skill codes, rubrics, end-of-KS3 standards, and the three
 * year records into a single typed `KS3Curriculum` object that pages
 * import and traverse.
 */

import type { KS3Curriculum, Year } from './types'
import { SKILL_CODES } from './skills'
import { RUBRICS } from './rubrics'
import { YEAR_7 } from './year-7'
import { YEAR_8 } from './year-8'
import { YEAR_9 } from './year-9'

// Each year's `rubric` field gets populated from the shared RUBRICS list
// so we don't duplicate descriptors across the data files.
function withRubric(year: Year): Year {
  return { ...year, rubric: RUBRICS.filter((r) => r.year === year.number) }
}

export const END_OF_KS3 = {
  overview: {
    en: "By the end of Year 9, students working at the expected standard can analyse texts using evidence and explanation of writer's methods, compare texts with clear developed points, use precise subject terminology, produce well-structured coherent extended writing, adapt to audience and purpose, and present ideas clearly and confidently in discussion and debate. This page mirrors the British National Curriculum end-of-KS3 statements.",
    ar: 'بنهاية السنة التاسعة، يستطيع الطلاب في المستوى المتوقَّع تحليل النصوص مدعومين بالأدلة وشرح أساليب الكاتب، ومقارنة النصوص بنقاط واضحة ومُطوّرة، واستخدام المصطلحات الأدبية بدقّة، وإنتاج كتابة موسّعة مُنظّمة ومتماسكة.',
  },
  byStrand: [
    {
      strand: 'reading' as const,
      label: { en: 'Reading', ar: 'القراءة' },
      bullets: [
        {
          en: 'Read a wide range of high-quality fiction, non-fiction and poetry (including pre-1914 texts).',
        },
        { en: 'Understand increasingly challenging texts independently.' },
        { en: 'Analyse how writers use language, form and structure.' },
        { en: 'Use precise subject terminology (e.g. metaphor, iambic, narrative perspective).' },
        { en: 'Identify themes and ideas across texts.' },
        { en: 'Compare texts (ideas, methods, perspectives).' },
        { en: 'Make developed inferences supported by evidence.' },
        { en: 'Understand how context influences meaning.' },
      ],
    },
    {
      strand: 'writing' as const,
      label: { en: 'Writing', ar: 'الكتابة' },
      bullets: [
        {
          en: 'Write effectively for a range of purposes: narratives, descriptions, explanations, arguments, speeches.',
        },
        { en: 'Adapt tone, style and register confidently.' },
        { en: 'Structure writing clearly using paragraphs and cohesion across whole texts.' },
        { en: 'Develop ideas in detail and depth.' },
        { en: 'Use a wide vocabulary precisely and deliberately.' },
        { en: 'Accurate spelling of most words, including subject vocabulary.' },
      ],
    },
    {
      strand: 'grammar' as const,
      label: { en: 'Grammar and Linguistic Knowledge', ar: 'المعرفة النحوية واللغوية' },
      bullets: [
        { en: 'Understand and apply word classes and grammatical structures.' },
        { en: 'Use complex sentences for effect.' },
        {
          en: 'Use a range of punctuation accurately, including more sophisticated marks where appropriate.',
        },
        { en: 'Reflect on how grammar creates meaning and effect.' },
      ],
    },
    {
      strand: 'speaking' as const,
      label: { en: 'Speaking and Listening', ar: 'التحدّث والاستماع' },
      bullets: [
        { en: 'Speak confidently and fluently in a range of contexts.' },
        { en: 'Participate in discussions, debates, presentations.' },
        { en: 'Use Standard English appropriately.' },
        { en: "Justify opinions and respond to others' ideas." },
        { en: 'Structure spoken responses clearly for impact.' },
      ],
    },
    {
      strand: 'literary' as const,
      label: { en: 'Literary and Cultural Knowledge', ar: 'المعرفة الأدبية والثقافية' },
      bullets: [
        { en: 'Read whole texts: novels, plays, poetry.' },
        { en: 'Encounter Shakespeare and 19th-century literature.' },
        { en: 'Understand literary traditions and genres.' },
        { en: 'Recognise themes such as power, identity, conflict, relationships.' },
        { en: 'Appreciate how literature reflects different cultures and contexts.' },
      ],
    },
  ],
  expectedAtEnd: [
    {
      strand: 'reading' as const,
      bullets: [
        { en: "Analyse a text using evidence + explanation of writer's methods." },
        { en: 'Compare texts with clear, developed points.' },
        { en: 'Use terminology accurately.' },
      ],
    },
    {
      strand: 'writing' as const,
      bullets: [
        { en: 'Produce well-structured, coherent texts.' },
        { en: 'Adapt writing to audience and purpose.' },
        { en: 'Use varied sentence structures and vocabulary effectively.' },
      ],
    },
    {
      strand: 'speaking' as const,
      bullets: [
        { en: 'Present ideas clearly and confidently.' },
        { en: 'Engage thoughtfully in discussion and debate.' },
      ],
    },
  ],
}

export const KS3: KS3Curriculum = {
  years: [withRubric(YEAR_7), withRubric(YEAR_8), withRubric(YEAR_9)],
  skillCodes: SKILL_CODES,
  endOfKS3: END_OF_KS3,
}

// Re-export the helpers + types so consumers can do
// `import { KS3, findSkill } from '@/lib/ks3/curriculum'`.
export type {
  KS3Curriculum,
  Year,
  Term,
  HalfTerm,
  HalfTermId,
  Week,
  Lesson,
  SkillCode,
  RubricCell,
  RubricLevel,
  Strand,
  YearNumber,
  LessonFocus,
  LocalizedString,
  Locale,
} from './types'
export {
  loc,
  STRAND_LABEL,
  RUBRIC_LEVEL_LABEL,
  LESSON_FOCUS_LABEL,
  findSkill,
  getYear,
  getTerm,
  getHalfTerm,
  getWeek,
  listWeeks,
} from './types'
