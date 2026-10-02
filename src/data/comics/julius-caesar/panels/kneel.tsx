import { gouge, n } from '@/components/comics/linocut/carve'

import { CutFigure, Person, limb, sandal, sandalCuts, type P, type Part, type Pose } from './people'

/**
 * People of the play on their knees or in their seats, for the moments the
 * play puts them there and the kit's standing `Person` cannot: Calphurnia
 * "on her knee Hath begg'd" (2.2); Metellus Cimber "throws before thy seat An
 * humble heart [Kneeling.]", Brutus "bootless" kneels and Cassius falls "As
 * low as to thy foot" (3.1); Antony on his knee by Caesar (3.1); and the
 * Senators, who "take their seats" (3.1).
 *
 * NOT A NEW OUTLINE. Everything above the hip is the kit's own `Person`
 * (./people.tsx): the same head, hair, wreath, arms and hands, clipped at the
 * hip and turned about it by `lean` (forward is positive). Below the hip
 * this adds only the legs, in the kit's sandals, and the cloth over them: the
 * toga's or the stola's, with paper fold cuts as the kit cuts them. So a
 * kneeling Brutus is the standing Brutus of every other panel.
 *
 * WHY THE LEGS SHOW (2 October 2026). The first cut covered the knees and
 * shins with cloth to the ground, as a standing toga falls, and at panel size
 * a kneeling man read as a short man standing in a long robe. What makes a
 * kneel read is its silhouette: a knee raised in front, a shin along the
 * ground behind and the sole of the foot turned up at the end of it, as
 * Malcolm kneels in Macbeth ("The Prince of Cumberland"). So the drape is
 * drawn up over the knee and the legs below it are cut as the kit cuts the
 * citizens' bare legs.
 *
 * `at` is the point on the ground under the hip (for `Seated`, the front edge
 * of the seat under the hip). `kind` is 'one' (the near knee down and the far
 * foot planted ahead, the classic kneel) or 'both' (both knees down, the
 * shins along the ground behind: a deep bow). Facing right, or left with
 * `flip`. Each needs a clip of its own; `uid` and `id` make its id unique.
 */

/** The kit's sizes (SIZE in ./people.tsx), for the looks that kneel or sit here. */
const SIZE: Partial<Record<Pose['look'], number>> = {
  caesar: 1,
  brutus: 1.01,
  cassius: 1.01,
  casca: 0.98,
  antony: 1.02,
  calpurnia: 0.92,
  portia: 0.92,
  citizen: 0.97,
  decius: 1,
  senator: 1,
}

/** The height of the hip above the ground when kneeling, in the figure's units. */
const HIP = 44
/** Where the kit's standing figure is cut: its hip, this far above its feet. */
const CUT = 86

type Lower = { parts: Part[]; cuts: string }

/** The near knee down, the far foot planted ahead: a man in a toga. */
function oneKnee(woman: boolean): Lower {
  const backLeg: P[] = [
    [0, 0],
    [6, HIP - 2],
    [-30, HIP - 2],
  ]
  const frontLeg: P[] = [
    [0, -2],
    [40, -4],
    [43, HIP - 3],
  ]
  const drape = woman
    ? 'M-15 -10C-18 8 -22 26 -26 40L-30 46L20 46C24 34 32 22 50 16C52 8 50 0 44 -8C34 -12 24 -12 14 -10Z'
    : 'M-19 -10C-22 6 -24 22 -22 36L-6 42C4 36 18 28 32 22L50 20C51 8 49 -2 43 -8C33 -13 24 -12 16 -10Z'
  return {
    parts: [
      { d: limb(backLeg), w: 9 },
      backSole(-30),
      { d: limb(frontLeg), w: 9 },
      sandal([43, HIP], 1),
      { d: drape },
    ],
    cuts:
      gouge(-24, HIP - 1.6, -30, HIP - 7, 0.5) +
      sandalCuts([43, HIP], 1) +
      (woman
        ? gouge(-6, 0, 26, 18, 1.6, -2) + gouge(-14, 6, -26, 40, 1.6, 1.2)
        : gouge(-12, -2, 40, 4, 1.7, -2.4) +
          gouge(-16, 6, 22, 26, 1.6, -1.6) +
          gouge(-18, 2, -20, 34, 1.4, 0.8)),
  }
}

/** Both knees down, the shins along the ground behind. */
function bothKnees(woman: boolean): Lower {
  const leg: P[] = [
    [0, 0],
    [12, HIP - 2],
    [-28, HIP - 2],
  ]
  const drape = woman
    ? 'M-15 -10C-18 8 -24 26 -32 40L-38 46L30 46C28 34 24 22 20 10C18 2 16 -4 14 -10Z'
    : 'M-19 -10C-22 6 -24 22 -20 36L-4 44L26 44C26 34 24 20 20 8C18 0 17 -4 16 -10Z'
  return {
    parts: [{ d: limb(leg), w: 9 }, backSole(-28), { d: drape }],
    cuts:
      gouge(-22, HIP - 1.6, -28, HIP - 7, 0.5) +
      (woman
        ? gouge(-6, 0, 22, 34, 1.6, -2) + gouge(-14, 6, -30, 40, 1.6, 1.2)
        : gouge(-12, -2, 22, 24, 1.7, -2) + gouge(-18, 2, -16, 34, 1.4, 0.8)),
  }
}

/** A foot behind a kneeling figure: the toes on the ground, the sole turned up and back. */
function backSole(x: number): Part {
  return {
    d: `M${n(x + 4)} ${HIP}L${n(x - 12)} ${HIP + 1}C${n(x - 14)} ${HIP - 4} ${n(x - 13)} ${HIP - 9} ${n(x - 10)} ${HIP - 11}L${n(x + 2)} ${HIP - 6}Z`,
  }
}

/** The kit's figure above the hip: clipped there, turned about it by `lean`. */
function UpperBody({ clip, pose, lean }: { clip: string; pose: Pose; lean: number }) {
  const size = SIZE[pose.look] ?? 1
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={-200} y={-400} width={400} height={402} />
        </clipPath>
      </defs>
      <g transform={lean ? `rotate(${n(lean)})` : undefined}>
        <g clipPath={`url(#${clip})`}>
          <Person pose={pose} at={[0, CUT]} scale={1 / size} />
        </g>
      </g>
    </>
  )
}

export function Kneel({
  uid,
  id,
  pose,
  at,
  scale = 1,
  flip = false,
  lean = 0,
  kind = 'one',
}: {
  uid: string
  id: string
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  lean?: number
  kind?: 'both' | 'one'
}) {
  const size = SIZE[pose.look] ?? 1
  const s = scale * size
  const woman = pose.look === 'calpurnia' || pose.look === 'portia'
  const lower = kind === 'one' ? oneKnee(woman) : bothKnees(woman)
  // The hip frame: the hip at the origin, the ground HIP below, in figure units.
  const frame = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)}) translate(0 ${-HIP})`
  return (
    <g transform={frame}>
      <CutFigure parts={lower.parts} cuts={lower.cuts} />
      <UpperBody clip={`${uid}-kneel-${id}`} pose={pose} lean={lean} />
    </g>
  )
}

/**
 * A person seated, seen from the side: the kit's figure above the hip, the
 * thighs along the seat and the shins down to the ground `drop` below it.
 */
export function Seated({
  uid,
  id,
  pose,
  at,
  scale = 1,
  flip = false,
  drop = 40,
}: {
  uid: string
  id: string
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  drop?: number
}) {
  const size = SIZE[pose.look] ?? 1
  const s = scale * size
  const lap = `M-19 -10C-22 2 -20 10 -14 12L30 12C34 10 36 4 34 -2C30 -8 24 -10 16 -10Z`
  const parts: Part[] = [
    {
      d: limb([
        [28, 4],
        [30, drop - 3],
      ]),
      w: 9,
    },
    sandal([30, drop], 1),
    { d: lap },
  ]
  const frame = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`
  return (
    <g transform={frame}>
      <CutFigure parts={parts} cuts={gouge(-10, 2, 28, 4, 1.4, -0.6) + sandalCuts([30, drop], 1)} />
      <UpperBody clip={`${uid}-seat-${id}`} pose={pose} lean={0} />
    </g>
  )
}
