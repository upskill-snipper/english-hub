/**
 * Deal one round of a skills game (24 October 2026).
 *
 * WHY. The founder, 24 October 2026: "questions repetitive with the answer in
 * the previous. too obvious and easy." Every skills game dealt its round with
 * `shuffle(BANK).slice(0, n)`. Measured that day by replaying each page's own
 * dealing code (.tmp-games-audit, all 37 games): no game remembered what a
 * student had met, so a quarter of round 2 and two thirds of round 5 were
 * questions already answered (in the EAL games, between 88 and 97 per cent by
 * round 10); and
 * nothing stopped a question from sitting after one that had just given its
 * answer away. In the EAL games 391 of 1,058 explanations named another
 * question's answer (the tip on "Which day comes first?" lists all seven days,
 * and "What day comes after Wednesday?" can follow it); Speed Analysis asked
 * for a device already answered, its cue just taught, 8.9 times in a round of
 * 20.
 *
 * THE RULES. Where a bank is too small for all of them, a question never met
 * still comes before one met already, even where an earlier question in the
 * round gives it away or its group is full (rule 6 then asks it first); only
 * a shared fact, or two questions that give each other away, outranks that.
 *
 *   1. a question missed in an earlier round comes back once it is `due`
 *      (two rounds later: see ./round-history.ts), up to a third of a round;
 *   2. then questions the student has never met, then the least recently met
 *      (`seen`, newest first);
 *   3. no two questions in a round share a FACT (`facts`: the quotation, the
 *      word, the text, the answer) and none gives another away (`reveals`:
 *      the keys of the questions whose answer or sentence its prompt or
 *      explanation states; ./give-aways.ts works them out);
 *   4. at most `groupMax` questions of one group (`group`: the device, rule
 *      or word set a question tests), or an even share where a bank has too
 *      few groups for that;
 *   5. the round climbs: easier tiers first (`tier`), shuffled within a tier;
 *      no two of one group back to back where the tier allows;
 *   6. where a give-away could not be kept out, the question given away is
 *      asked BEFORE the one that gives it, so its answer is not on screen
 *      when it is asked.
 *
 * When the bank cannot fill a round under rules 3 and 4, the round is topped
 * up with what is left, least-breaking first, so a small bank still deals a
 * full round. src/__tests__/a-game-round-gives-nothing-away.test.ts holds every
 * real bank, over 300 rounds of one student's history, to the rules that never
 * give way. Pure apart from `random`, so a test can deal it many times.
 */

export interface DealOptions<T> {
  /** Questions in a round. */
  size: number
  /** A stable id for a question, as the bank keys it (GameBank.key). */
  key: (item: T) => string
  /** Ids met in earlier rounds, newest first. */
  seen?: readonly string[]
  /** Ids missed in an earlier round and due again. */
  due?: readonly string[]
  /** 1 easiest to 3 hardest; questions without one count as 2. */
  tier?: (item: T) => number | undefined
  /** What would give one question away to another; no two in a round share one. */
  facts?: (item: T) => readonly string[]
  /** The keys of the questions this one gives away. */
  reveals?: (item: T) => ReadonlySet<string> | undefined
  /** The device, rule or set a question tests. */
  group?: (item: T) => string | undefined
  /** At most this many of one group in a round, where the bank allows. Default 2. */
  groupMax?: number
  /**
   * A page that has always dealt a fixed mix (Spelling Bee: five easy, eight
   * medium, seven hard) keeps it: at most `counts[of(item)]` of each, and
   * `size` should be their sum. A share the bank cannot fill is left short
   * rather than filled from another.
   */
  quota?: { of: (item: T) => string; counts: Readonly<Record<string, number>> }
  random?: () => number
}

function shuffled<T>(items: readonly T[], random: () => number): T[] {
  const a = [...items]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** A fact as compared: case, spacing and surrounding punctuation ignored. */
export const normalFact = (fact: string) =>
  fact
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, ' ')
    .replace(/^[\s"'.,;:?()]+|[\s"'.,;:?()]+$/g, '')

export function dealRound<T>(bank: readonly T[], options: DealOptions<T>): T[] {
  const { size, key, tier, facts, reveals, group, quota, random = Math.random } = options
  const groupMax = Math.max(1, options.groupMax ?? 2)
  const seenOrder = options.seen ?? []
  const dueSet = new Set(options.due ?? [])

  // Rule 2's order: never met (shuffled), then met longest ago first. A rank
  // per id: the newest seen has rank 0.
  const rank = new Map<string, number>()
  seenOrder.forEach((id, i) => {
    if (!rank.has(id)) rank.set(id, i)
  })
  const unique: T[] = []
  const keys = new Set<string>()
  for (const item of bank) {
    const k = key(item)
    if (keys.has(k)) continue
    keys.add(k)
    unique.push(item)
  }
  const due = shuffled(
    unique.filter((item) => dueSet.has(key(item))),
    random,
  )
  const fresh = shuffled(
    unique.filter((item) => !dueSet.has(key(item)) && !rank.has(key(item))),
    random,
  )
  const old = shuffled(
    unique.filter((item) => !dueSet.has(key(item)) && rank.has(key(item))),
    random,
  ).sort((a, b) => (rank.get(key(b)) ?? 0) - (rank.get(key(a)) ?? 0))

  const factsOf = new Map<T, string[]>()
  const fOf = (item: T) => {
    let f = factsOf.get(item)
    if (!f) {
      f = facts ? facts(item).map(normalFact).filter(Boolean) : []
      factsOf.set(item, f)
    }
    return f
  }
  const groupOf = (item: T) => group?.(item) ?? undefined

  // Rule 4's cap: two of a group, or an even share where there are too few groups.
  const groups = new Set(unique.map(groupOf).filter((g): g is string => !!g))
  const cap = groups.size ? Math.max(groupMax, Math.ceil(size / groups.size)) : Infinity

  const picked: T[] = []
  const pickedKeys = new Set<string>()
  const usedFacts = new Set<string>()
  const perGroup = new Map<string, number>()
  const perQuota = new Map<string, number>()
  const roomFor = (item: T) => {
    if (!quota) return true
    const q = quota.of(item)
    return (perQuota.get(q) ?? 0) < (quota.counts[q] ?? 0)
  }

  // A HARD clash no order can mend: a shared fact (the same quotation or word
  // twice in a round), or two questions that each give the other away. A SOFT
  // one the order mends or only spreads: a question one already dealt gives
  // away (it will be asked first), or a group over its cap.
  const hardClash = (item: T) => {
    if (fOf(item).some((f) => usedFacts.has(f))) return true
    if (reveals) {
      const k = key(item)
      const mine = reveals(item)
      for (const p of picked) if (mine?.has(key(p)) && reveals(p)?.has(k)) return true
    }
    return false
  }
  const softClash = (item: T) => {
    const g = groupOf(item)
    if (g !== undefined && (perGroup.get(g) ?? 0) >= cap) return true
    if (reveals) {
      const k = key(item)
      const mine = reveals(item)
      for (const p of picked) if (mine?.has(key(p)) || reveals(p)?.has(k)) return true
    }
    return false
  }
  const take = (item: T) => {
    picked.push(item)
    pickedKeys.add(key(item))
    for (const f of fOf(item)) usedFacts.add(f)
    const g = groupOf(item)
    if (g !== undefined) perGroup.set(g, (perGroup.get(g) ?? 0) + 1)
    if (quota) perQuota.set(quota.of(item), (perQuota.get(quota.of(item)) ?? 0) + 1)
  }

  const dueLimit = Math.ceil(size / 3)
  const pass = (list: T[], limit: number, allow: 'nothing' | 'soft' | 'all') => {
    let n = 0
    for (const item of list) {
      if (picked.length >= size || n >= limit) break
      if (pickedKeys.has(key(item)) || !roomFor(item)) continue
      if (allow !== 'all' && hardClash(item)) continue
      if (allow === 'nothing' && softClash(item)) continue
      take(item)
      n++
    }
  }
  // Rule 1, then rule 2 above the soft half of rules 3 and 4: a question never
  // met, even one an earlier question gives away (the order will ask it
  // first), comes before one met already.
  pass(due, dueLimit, 'nothing')
  pass(fresh, Infinity, 'nothing')
  pass(fresh, Infinity, 'soft')
  pass(old, Infinity, 'nothing')
  pass(old, Infinity, 'soft')
  // A bank too small for the rules still deals a full round.
  pass([...due, ...fresh, ...old], Infinity, 'all')

  return order(picked, { key, tier, reveals, group: groupOf })
}

/** Rules 5 and 6: easier first, groups spread, and a give-away after what it gives away. */
function order<T>(
  picked: T[],
  o: {
    key: (item: T) => string
    tier?: (item: T) => number | undefined
    reveals?: (item: T) => ReadonlySet<string> | undefined
    group: (item: T) => string | undefined
  },
): T[] {
  // Easier first. A stable sort keeps the shuffle within each tier.
  let out = o.tier
    ? picked
        .map((item, i) => ({ item, i, t: o.tier!(item) ?? 2 }))
        .sort((a, b) => a.t - b.t || a.i - b.i)
        .map((x) => x.item)
    : [...picked]

  // No two of one group back to back, within each tier: take the next item
  // (in the shuffled order) whose group differs from the last, unless one
  // group has so many left that it must go now to be spread at all.
  const tierOf = (item: T) => o.tier?.(item) ?? 2
  const spread: T[] = []
  let prev: string | undefined
  for (let start = 0; start < out.length; ) {
    let end = start
    while (end < out.length && tierOf(out[end]) === tierOf(out[start])) end++
    const left = out.slice(start, end)
    while (left.length) {
      const counts = new Map<string, number>()
      for (const x of left) {
        const g = o.group(x)
        if (g !== undefined) counts.set(g, (counts.get(g) ?? 0) + 1)
      }
      let most: string | undefined
      for (const [g, c] of counts) if (most === undefined || c > counts.get(most)!) most = g
      const pressing = most !== undefined && most !== prev && counts.get(most)! * 2 > left.length
      let at = left.findIndex((x) =>
        pressing ? o.group(x) === most : o.group(x) === undefined || o.group(x) !== prev,
      )
      if (at === -1) at = 0
      const [x] = left.splice(at, 1)
      spread.push(x)
      prev = o.group(x)
    }
    start = end
  }
  out = spread

  // A question given away comes before the one that gives it.
  if (o.reveals) {
    for (let guard = 0; guard < out.length * out.length; guard++) {
      let moved = false
      for (let i = 0; i < out.length && !moved; i++) {
        const shows = o.reveals(out[i])
        if (!shows?.size) continue
        for (let j = i + 1; j < out.length; j++) {
          if (!shows.has(o.key(out[j]))) continue
          // Only if the later one does not give this one away too.
          if (o.reveals(out[j])?.has(o.key(out[i]))) continue
          const [later] = out.splice(j, 1)
          out.splice(i, 0, later)
          moved = true
          break
        }
      }
      if (!moved) break
    }
    out = [...out]
  }
  return out
}
