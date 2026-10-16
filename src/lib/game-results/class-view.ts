import type { Confusion, GameAnalytics, SkillStat } from './analytics'
import { SKILL_GROUP_ORDER, type SkillGroup } from './skills'

/**
 * A class's game results, for its teacher (16 October 2026).
 *
 * The founder asked on 13 October for game results to be "tracked and scored
 * as detailed analytics in your hub and for schools". Each pupil's figures
 * come from analyseRounds (./analytics.ts), the function behind the pupil's
 * own hub, so a teacher and a pupil can never disagree about a number. This
 * file only adds them up across a class.
 *
 * Pure: pupils' analytics in, class figures out. Who the pupils are, and
 * which of their rounds count, is the route's business
 * (src/app/api/school/classes/[classId]/games/route.ts): only the school's own
 * pupils, and only rounds since each joined the class.
 *
 * A class figure is POOLED over answers (all right answers over all answers),
 * so a pupil who answered 200 questions weighs more than one who answered 5.
 * A pupil's BAND in a skill is their own, from their last 30 answers in it;
 * the class view counts pupils per band and never averages bands.
 *
 * Like everything built on the analytics, nothing here names or predicts a
 * grade.
 */

export interface ClassPupilInput {
  id: string
  name: string | null
  /** When the pupil joined the class; null when the enrolment does not say. */
  joinedAt: string | null
  analytics: GameAnalytics
}

export interface BandCounts {
  secure: number
  developing: number
  needsWork: number
  tooFew: number
}

export interface ClassGroupStat {
  group: SkillGroup
  /** Pupils with at least one answer in this group, by their own band. */
  pupils: BandCounts
  answered: number
  correct: number
  /** Pooled over every answer in the group; null when none. */
  accuracy: number | null
}

export interface ClassConfusion extends Confusion {
  /** How many pupils made this mix-up at least once. */
  pupils: number
}

/** The few fields of a skill the class table needs to name it. */
export type SkillRef = Pick<SkillStat, 'key' | 'group' | 'source' | 'activity' | 'kind' | 'band'>

export interface ClassPupilRow {
  id: string
  name: string | null
  joinedAt: string | null
  answered: number
  /** Over the pupil's answers since joining; null when none. */
  accuracy: number | null
  thisWeek: number
  lastPlayed: string | null
  /** The pupil's own "to work on", most specific first, at most two. */
  workOn: SkillRef[]
  /** How many of their skill groups are secure, and how many judged at all. */
  secureGroups: number
  judgedGroups: number
}

export interface ClassGamesSummary {
  generatedAt: string
  pupils: number
  pupilsWithData: number
  answered: number
  correct: number
  accuracy: number | null
  thisWeek: { answered: number; pupils: number }
  /** In SKILL_GROUP_ORDER, only groups some pupil has answered. */
  groups: ClassGroupStat[]
  /** Most widespread first, at most CLASS_CONFUSIONS_SHOWN. */
  confusions: ClassConfusion[]
  /** By name, pupils with no name last. */
  rows: ClassPupilRow[]
}

export const CLASS_CONFUSIONS_SHOWN = 8

const pct = (correct: number, answered: number) =>
  answered > 0 ? Math.round((correct / answered) * 100) : null

const slim = (s: SkillStat): SkillRef => ({
  key: s.key,
  group: s.group,
  source: s.source,
  activity: s.activity,
  kind: s.kind,
  band: s.band,
})

export function summariseClass(
  pupils: readonly ClassPupilInput[],
  now = new Date(),
): ClassGamesSummary {
  const groups = new Map<SkillGroup, ClassGroupStat>()
  const confusions = new Map<string, ClassConfusion>()
  let answered = 0
  let correct = 0
  let weekAnswered = 0
  let weekPupils = 0
  let withData = 0

  const rows: ClassPupilRow[] = pupils.map((p) => {
    const a = p.analytics
    if (a.hasData) withData++
    answered += a.totals.answered
    correct += a.totals.correct
    weekAnswered += a.thisWeek.answered
    if (a.thisWeek.answered > 0) weekPupils++

    let secureGroups = 0
    let judgedGroups = 0
    for (const g of a.groups) {
      let stat = groups.get(g.group)
      if (!stat) {
        stat = {
          group: g.group,
          pupils: { secure: 0, developing: 0, needsWork: 0, tooFew: 0 },
          answered: 0,
          correct: 0,
          accuracy: null,
        }
        groups.set(g.group, stat)
      }
      stat.answered += g.answered
      stat.correct += g.correct
      if (g.band === 'secure') stat.pupils.secure++
      else if (g.band === 'developing') stat.pupils.developing++
      else if (g.band === 'needs-work') stat.pupils.needsWork++
      else stat.pupils.tooFew++
      if (g.band !== 'too-few') judgedGroups++
      if (g.band === 'secure') secureGroups++
    }

    // One mix-up counts each pupil once, however often they made it.
    for (const c of a.confusions) {
      const key = `${c.activity}\u0000${c.kind}\u0000${c.chose}`
      const seen = confusions.get(key)
      if (seen) {
        seen.times += c.times
        seen.pupils++
      } else confusions.set(key, { ...c, pupils: 1 })
    }

    return {
      id: p.id,
      name: p.name,
      joinedAt: p.joinedAt,
      answered: a.totals.answered,
      accuracy: pct(a.totals.correct, a.totals.answered),
      thisWeek: a.thisWeek.answered,
      lastPlayed: a.totals.lastPlayed,
      workOn: a.workOn.slice(0, 2).map(slim),
      secureGroups,
      judgedGroups,
    }
  })

  for (const g of groups.values()) g.accuracy = pct(g.correct, g.answered)

  rows.sort((x, y) => {
    if (x.name && y.name) return x.name.localeCompare(y.name, 'en-GB')
    if (x.name) return -1
    if (y.name) return 1
    return x.id.localeCompare(y.id)
  })

  return {
    generatedAt: now.toISOString(),
    pupils: pupils.length,
    pupilsWithData: withData,
    answered,
    correct,
    accuracy: pct(correct, answered),
    thisWeek: { answered: weekAnswered, pupils: weekPupils },
    groups: SKILL_GROUP_ORDER.flatMap((g) => {
      const s = groups.get(g)
      return s ? [s] : []
    }),
    confusions: [...confusions.values()]
      .sort((x, y) => y.pupils - x.pupils || y.times - x.times || x.kind.localeCompare(y.kind))
      .slice(0, CLASS_CONFUSIONS_SHOWN),
    rows,
  }
}
