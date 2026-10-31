/**
 * What each answered question is evidence of: the skill groups the analytics
 * report by, and how a quest challenge or a skills game's question is filed.
 *
 * Every question is filed under ONE group, the skill it mostly tests. The
 * groups are named in plain English for students. The literature groups line
 * up with the assessment objectives of GCSE English Literature (AO1 knowledge
 * of the text and its quotations, AO2 the writer's methods, AO3 context); the
 * `examinersCallIt` note says so where the match is exact, and is left out
 * where it is not. The International GCSE numbers its objectives differently,
 * so no screen shows an AO number without saying it is the GCSE one.
 *
 * Client-safe: plain data and pure functions.
 */

import { getGameTaxon, type Strand } from '@/lib/learning-profile/taxonomy'
import type { RoundSource } from './types'

export type SkillGroup =
  // Literature
  | 'plot'
  | 'characters'
  | 'quotations'
  | 'themes'
  | 'methods'
  | 'interpretation'
  | 'context'
  // Language and literacy
  | 'reading'
  | 'vocabulary'
  | 'grammar'
  | 'punctuation'
  | 'spelling'
  | 'writing'

export interface SkillGroupInfo {
  family: 'literature' | 'language'
  /** i18n key of the group's name. */
  labelKey: string
  /** The GCSE English Literature objective, only where the group matches one exactly. */
  examinersCallIt?: 'AO1' | 'AO2' | 'AO3'
}

export const SKILL_GROUPS: Record<SkillGroup, SkillGroupInfo> = {
  plot: { family: 'literature', labelKey: 'ga.group.plot', examinersCallIt: 'AO1' },
  characters: { family: 'literature', labelKey: 'ga.group.characters', examinersCallIt: 'AO1' },
  quotations: { family: 'literature', labelKey: 'ga.group.quotations', examinersCallIt: 'AO1' },
  themes: { family: 'literature', labelKey: 'ga.group.themes', examinersCallIt: 'AO1' },
  methods: { family: 'literature', labelKey: 'ga.group.methods', examinersCallIt: 'AO2' },
  interpretation: { family: 'literature', labelKey: 'ga.group.interpretation' },
  context: { family: 'literature', labelKey: 'ga.group.context', examinersCallIt: 'AO3' },
  reading: { family: 'language', labelKey: 'ga.group.reading' },
  vocabulary: { family: 'language', labelKey: 'ga.group.vocabulary' },
  grammar: { family: 'language', labelKey: 'ga.group.grammar' },
  punctuation: { family: 'language', labelKey: 'ga.group.punctuation' },
  spelling: { family: 'language', labelKey: 'ga.group.spelling' },
  writing: { family: 'language', labelKey: 'ga.group.writing' },
}

export const SKILL_GROUP_ORDER: SkillGroup[] = [
  'plot',
  'characters',
  'quotations',
  'themes',
  'methods',
  'interpretation',
  'context',
  'reading',
  'vocabulary',
  'grammar',
  'punctuation',
  'spelling',
  'writing',
]

// ─── Quests ───────────────────────────────────────────────────────────────

/** The kinds a quest challenge is filed under, with the group each belongs to. */
export const QUEST_KINDS = {
  'who-role': 'characters',
  'who-relation': 'characters',
  portrait: 'characters',
  where: 'quotations',
  finish: 'quotations',
  rebuild: 'quotations',
  method: 'methods',
  theme: 'themes',
  'theme-check': 'themes',
  order: 'plot',
  comic: 'plot',
  // Deeper kinds. Listed on 13 October 2026 for challenges the quests were to
  // gain; only 'analysis-quote' is built so far: the evidence challenge, which
  // matches a guide's reading of a line to the line (24 October 2026,
  // src/lib/games/quest/build.ts, buildEvidence). The rest name nothing yet.
  significance: 'interpretation',
  'extract-note': 'methods',
  'analysis-quote': 'interpretation',
  'example-shows': 'interpretation',
  'essay-plan': 'interpretation',
  'paragraph-order': 'interpretation',
  vocabulary: 'vocabulary',
  context: 'context',
} as const satisfies Record<string, SkillGroup>

export type QuestKind = keyof typeof QUEST_KINDS

export function isQuestKind(k: string): k is QuestKind {
  return Object.prototype.hasOwnProperty.call(QUEST_KINDS, k)
}

// ─── Skills games ─────────────────────────────────────────────────────────

const STRAND_GROUP: Record<Exclude<Strand, 'literature'>, SkillGroup> = {
  vocabulary: 'vocabulary',
  grammar: 'grammar',
  punctuation: 'punctuation',
  spelling: 'spelling',
  reading: 'reading',
  writing: 'writing',
}

/**
 * Where a game's own tags point somewhere other than the game's skill. Grade
 * Climber files each question as technique, meaning or analysis; only the
 * first is about naming a method.
 */
const TAG_GROUP: Record<string, Record<string, SkillGroup>> = {
  'grade-climber': { technique: 'methods', meaning: 'interpretation', analysis: 'interpretation' },
}

/** The group a skills game's question belongs to, from the game's taxonomy entry and its tag. */
export function skillsGameGroup(slug: string, tag?: string): SkillGroup {
  const override = tag ? TAG_GROUP[slug]?.[tag] : undefined
  if (override) return override
  const taxon = getGameTaxon(slug)
  if (taxon.strand !== 'literature') return STRAND_GROUP[taxon.strand]
  switch (taxon.skill) {
    case 'theme-knowledge':
      return 'themes'
    case 'set-text-knowledge':
      return 'quotations'
    default:
      // literary-devices, literary-terminology, analysis-speed
      return 'methods'
  }
}

/**
 * The group any stored question belongs to, or null for a quest kind this
 * build does not know (a newer browser, say), which is then left out of the
 * group figures rather than filed somewhere wrong.
 */
export function groupOf(source: RoundSource, activity: string, kind: string): SkillGroup | null {
  if (source === 'quest') return isQuestKind(kind) ? QUEST_KINDS[kind] : null
  return skillsGameGroup(activity, kind)
}
