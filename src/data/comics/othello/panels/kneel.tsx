import type { ReactNode } from 'react'

import { gouge, n } from '@/components/comics/linocut/carve'

import { CutFigure, shoe, type Part } from '../../romeo-and-juliet/panels/verona-kit'
import { Person, limb, type P, type Pose } from './people'

/**
 * Men of Othello off their feet, for the moments the play puts them there and
 * the kit's standing `Person` cannot:
 * - `KneelingMan`, on one knee, the classic kneel of a vow, for the vow in the
 *   garden (Act 3, Scene 3): "In the due reverence of a sacred vow [Kneels.]
 *   I here engage my words." and Iago, "Do not rise yet. [Kneels.]".
 * - `SeatedMan`, on a bench, for Montano hurt in the brawl (Act 2, Scene 3):
 *   "Zounds, I bleed still, I am hurt to the death."
 * ./seated.tsx seats and kneels a woman in her gown, and sits a man on the
 * ground; these are the men's poses it does not make.
 *
 * NOT A NEW OUTLINE. Everything above the waist is the kit's own `Person`
 * (./people.tsx): the same head, face, hair, dress, arms and hands, clipped
 * just below the girdle or the sash, as ./seated.tsx clips it. Below that this
 * adds only what the pose needs, cut as the kit cuts (a paper halo, the parts
 * in ink, the folds in paper): the skirt of the coat or the doublet over the
 * hip, the near knee down on the ground with its shin along it and the sole
 * of the shoe turned up behind, and the far leg's knee up in front with its
 * shoe planted under it.
 *
 * WHAT MAKES THE POSE READ (from the Julius Caesar kit's Kneel, 2 October
 * 2026): a knee raised in front, a shin along the ground behind and the sole
 * of the foot turned up at the end of it. A kneel with the cloth to the ground
 * reads as a short man standing in a long robe, so Othello's coat, which
 * standing falls to the knee, is drawn up over his front thigh here and the
 * legs show below it.
 *
 * `at` is the point on the ground under the hip; facing right, or left with
 * `flip`. Each needs a clip of its own: `uid` and `id` make its id unique.
 * `children` are drawn last in the standing figure's own frame (feet at 0,
 * head at 3, -160), as `Person`'s are, so a thing at the belt stays at the
 * belt.
 */

/** The kit's sizes (SIZE in ./people.tsx), for the people who kneel here. */
const SIZE: Partial<Record<Pose['look'], number>> = {
  othello: 1.03,
  iago: 0.99,
  cassio: 1,
  roderigo: 0.97,
  montano: 1,
  lodovico: 1,
  gentleman: 0.98,
  officer: 1,
}

/** Where the standing figure is cut, this far above its feet: the waist, as ./seated.tsx cuts it. */
const CUT = 86
/** How far below the cut the ground is, kneeling: the hip 16 below it, the thigh about 34. */
const GROUND = 54

/** A sole turned up behind a kneeling man: the toe on the ground, the heel in the air. */
function sole(x: number, g: number): Part {
  return {
    d: `M${n(x + 4)} ${g}L${n(x - 12)} ${g + 1}C${n(x - 14)} ${g - 4} ${n(x - 13)} ${g - 9} ${n(x - 10)} ${g - 11}L${n(x + 2)} ${g - 6}Z`,
  }
}

function lowerBody(coat: boolean): { parts: Part[]; cuts: string } {
  const g = GROUND
  // The far leg: the thigh forward from the hip, the knee up, the shin down to the foot.
  const front: P[] = [
    [3, 16],
    [36, 20],
    [38, g - 4],
  ]
  // The near leg: the thigh down to the knee on the ground, the shin back along it.
  const back: P[] = [
    [-2, 16],
    [-2, g - 4],
    [-32, g - 4],
  ]
  // The skirt over the hip: a general's coat drawn up over the front thigh and
  // hanging behind; a doublet's short skirt over the hip alone.
  const skirt = coat
    ? 'M-17 -2C-19 10 -22 24 -24 36L-10 40C2 36 16 32 30 28C32 20 30 12 26 6C20 0 14 -2 15 -2Z'
    : 'M-15 -2C-17 6 -19 14 -19 22L-4 24C6 22 14 20 20 18C21 10 19 4 15 -2Z'
  return {
    parts: [
      { d: limb(back), w: 9 },
      sole(-32, g),
      { d: limb(front), w: 9 },
      shoe([40, g], 1),
      { d: skirt },
    ],
    cuts:
      gouge(-28, g - 2, -32, g - 8, 0.5) +
      (coat
        ? gouge(-6, 4, 24, 22, 1.6, -1.6) +
          gouge(-14, 6, -18, 32, 1.5, 0.8) +
          gouge(4, 2, 8, 30, 1.3, -0.4)
        : gouge(-10, 4, 14, 14, 1.4, -1.2)),
  }
}

/** The kit's figure above the waist: clipped there, turned about it by `lean`. */
function UpperBody({
  clip,
  pose,
  lean,
  children,
}: {
  clip: string
  pose: Pose
  lean: number
  children?: ReactNode
}) {
  const size = SIZE[pose.look] ?? 1
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <rect x={-200} y={-400} width={400} height={408} />
        </clipPath>
      </defs>
      <g transform={lean ? `rotate(${n(lean)})` : undefined}>
        <g clipPath={`url(#${clip})`}>
          <Person pose={pose} at={[0, CUT]} scale={1 / size} />
        </g>
        {/* Not clipped, so a thing that hangs below the belt still hangs there. */}
        {children && <g transform={`translate(0 ${CUT}) scale(${n(1 / size)})`}>{children}</g>}
      </g>
    </>
  )
}

/**
 * Seated on a bench, seen from the side: the thighs along the seat, the shins
 * down to the floor, the doublet's skirt over the lap, and for a man in a long
 * cloak (Montano, Lodovico) the cloak falling behind the bench to the floor.
 * The seat is about 20 below the cut, the floor GROUND below it: a bench
 * about 34 high in the figure's own units, drawn by the panel under him.
 */
function seatedLower(cloak: boolean): { parts: Part[]; cuts: string } {
  const g = GROUND
  return {
    parts: [
      ...(cloak ? [{ d: 'M-17 -6C-24 12 -28 32 -31 52L-31 54L-8 54C-9 38 -8 22 -5 4Z' }] : []),
      {
        d: limb([
          [-1, 18],
          [30, 21],
          [32, g - 4],
        ]),
        w: 9,
      },
      shoe([34, g], 1),
      {
        d: limb([
          [3, 16],
          [36, 18],
          [40, g - 4],
        ]),
        w: 9,
      },
      shoe([42, g], 1),
      { d: 'M-15 -2C-17 6 -18 14 -16 22L24 23C26 16 24 6 15 -2Z' },
    ],
    cuts:
      gouge(-10, 6, 20, 14, 1.3, -1) +
      (cloak ? gouge(-20, 14, -26, 48, 1.4, 0.6) + gouge(-12, 18, -14, 48, 1.2, 0.4) : ''),
  }
}

export function SeatedMan({
  uid,
  id,
  pose,
  at,
  scale = 1,
  flip = false,
  lean = 0,
  children,
}: {
  uid: string
  id: string
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  lean?: number
  children?: ReactNode
}) {
  const size = SIZE[pose.look] ?? 1
  const s = scale * size
  const lower = seatedLower(pose.look === 'montano' || pose.look === 'lodovico')
  // `at` is the point on the floor under the hip; the cut frame puts the waist at the origin.
  const frame = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)}) translate(0 ${-GROUND})`
  return (
    <g transform={frame}>
      <CutFigure parts={lower.parts} cuts={lower.cuts} />
      <UpperBody clip={`${uid}-seat-${id}`} pose={pose} lean={lean}>
        {children}
      </UpperBody>
    </g>
  )
}

export function KneelingMan({
  uid,
  id,
  pose,
  at,
  scale = 1,
  flip = false,
  lean = 0,
  children,
}: {
  uid: string
  id: string
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  lean?: number
  children?: ReactNode
}) {
  const size = SIZE[pose.look] ?? 1
  const s = scale * size
  const lower = lowerBody(pose.look === 'othello')
  // The cut frame: the waist at the origin, the ground GROUND below it, in figure units.
  const frame = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)}) translate(0 ${-GROUND})`
  return (
    <g transform={frame}>
      <CutFigure parts={lower.parts} cuts={lower.cuts} />
      <UpperBody clip={`${uid}-kneel-${id}`} pose={pose} lean={lean}>
        {children}
      </UpperBody>
    </g>
  )
}
