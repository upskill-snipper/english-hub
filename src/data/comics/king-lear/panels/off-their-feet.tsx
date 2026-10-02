import type { ReactNode } from 'react'

import { PAPER } from '@/components/comics/linocut/palette'
import { gouge, n } from '@/components/comics/linocut/carve'

import { CutFigure, Person, limb, mailRings, type P, type Part, type Pose } from './people'

/**
 * Men of the play in tunics, off their feet, for the moments of the last scene
 * that put them there and the kit's standing `Person` cannot:
 * - `SittingMan`: Edmund on the ground after the duel, "[Edmund falls.]" ...
 *   "I pant for life", sitting up to give his sword as the token of reprieve.
 * - `KneelingMan`: Kent on one knee to his master, "O, my good master!
 *   [Kneeling.]".
 * A man or woman in a long gown kneels with ./kneel.tsx; this is the tunic.
 *
 * NOT A NEW OUTLINE. Everything above the hip is the kit's own `Person`
 * (./people.tsx): the same head, hair, beard, hood, mail, arms and hands,
 * clipped at the hip and turned about it by `lean` (forward is positive), as
 * ./kneel.tsx clips it at the waist. Below the hip this adds only what the
 * pose needs, cut as the kit cuts (a paper halo, the parts in ink, the folds in
 * paper): the tunic's skirt over the hip, with its rings when the man is
 * `armed`, and the legs. The clip reaches down beside the body as well, so an
 * arm held low in front or behind is not cut off with the legs.
 *
 * WHAT MAKES THE POSE READ (the Julius Caesar and Othello kits found it, 2
 * October 2026): for a kneel, a knee raised in front, a shin along the ground
 * behind and the sole turned up at the end of it; for a man sitting on the
 * ground, his legs along it, one knee up, and his shoes on their heels.
 *
 * `at` is the point on the ground under the hip; facing right, or left with
 * `flip`. Each needs a clip of its own: `uid` and `id` make its id unique.
 * `children` are drawn last in the standing figure's own frame (feet at 0,
 * head at 3, -160), as `Person`'s are, and are not clipped.
 */

/** The kit's sizes (SIZE in ./people.tsx), for the men who sit or kneel here. */
const SIZE: Partial<Record<Pose['look'], number>> = {
  edmund: 1,
  edgar: 1,
  kent: 1.01,
  caius: 1.01,
  albany: 1,
}

/** The kit's hip above the feet for a man in a tunic: (0, -70). */
const HIP = 70

type Lower = { parts: Part[]; cuts: string; mail: string; ground: number }

/** A shoe on its heel, the toe up: a man sitting with his legs along the ground. */
function heel(x: number, y: number): Part {
  return {
    d: `M${n(x - 4)} ${n(y - 2)}C${n(x - 2)} ${n(y - 12)} ${n(x + 6)} ${n(y - 14)} ${n(x + 8)} ${n(y - 8)}L${n(x + 7)} ${n(y + 1)}L${n(x - 3)} ${n(y + 1)}Z`,
  }
}

/** A sole turned up behind a kneeling man: the toe on the ground, the heel in the air. */
function sole(x: number, g: number): Part {
  return {
    d: `M${n(x + 4)} ${g}L${n(x - 12)} ${g + 1}C${n(x - 14)} ${g - 4} ${n(x - 13)} ${g - 9} ${n(x - 10)} ${g - 11}L${n(x + 2)} ${g - 6}Z`,
  }
}

/** The kit's shoe, standing, the heel at (x, y), the toe towards the right. */
function shoeAt(x: number, y: number): Part {
  return {
    d: `M${n(x - 5)} ${n(y - 6)}L${n(x + 5)} ${n(y - 5)}C${n(x + 10)} ${n(y - 4)} ${n(x + 12)} ${n(y - 2)} ${n(x + 12)} ${n(y + 1)}L${n(x - 6)} ${n(y + 1)}Z`,
  }
}

/**
 * Sitting on the ground, the hip on it: the near leg along the ground, the far
 * knee drawn up with the foot flat, the near shoe on its heel, and the tunic's
 * skirt over the hip and the tops of the thighs.
 */
function sitting(armed: boolean): Lower {
  const g = 12
  const skirt: P[] = [
    [-15, -8],
    [-17, 4],
    [-12, 12],
    [24, 11],
    [26, 2],
    [17, -8],
  ]
  return {
    parts: [
      {
        d: limb([
          [2, -2],
          [26, -28],
          [38, g - 6],
        ]),
        w: 9.4,
      },
      shoeAt(40, g),
      {
        d: limb([
          [2, 4],
          [36, g - 6],
          [66, g - 6],
        ]),
        w: 9.6,
      },
      heel(68, g),
      {
        d: 'M-15 -8C-18 0 -17 8 -12 12C0 13 14 13 24 11C27 6 26 0 22 -4C20 -6 18 -8 16 -8Z',
      },
    ],
    cuts: gouge(-11, 4, 21, 6, 1.3, -0.6),
    mail: armed ? mailRings(skirt) : '',
    ground: g,
  }
}

/**
 * On one knee: the near knee down on the ground with its shin along it and the
 * sole turned up behind, the far knee up in front with its foot planted under
 * it, and the tunic's short skirt over the hip.
 */
function kneeling(armed: boolean): Lower {
  const g = 40
  const skirt: P[] = [
    [-15, -6],
    [-18, 18],
    [-4, 22],
    [20, 16],
    [15, -6],
  ]
  return {
    parts: [
      {
        d: limb([
          [-2, 4],
          [-2, g - 4],
          [-30, g - 4],
        ]),
        w: 9.2,
      },
      sole(-30, g),
      {
        d: limb([
          [3, 2],
          [30, 6],
          [33, g - 5],
        ]),
        w: 9.2,
      },
      shoeAt(36, g),
      { d: 'M-15 -6C-17 4 -18 12 -18 20L-4 23C6 21 14 19 20 16C21 8 19 1 15 -6Z' },
    ],
    cuts: gouge(-10, 4, 14, 14, 1.4, -1.2),
    mail: armed ? mailRings(skirt) : '',
    ground: g,
  }
}

function OffFeet({
  uid,
  id,
  pose,
  at,
  scale,
  flip,
  lean,
  lower,
  children,
}: {
  uid: string
  id: string
  pose: Pose
  at: P
  scale: number
  flip: boolean
  lean: number
  lower: Lower
  children?: ReactNode
}) {
  const size = SIZE[pose.look] ?? 1
  const s = scale * size
  const clip = `${uid}-off-${id}`
  // The hip frame: the hip at the origin, the ground `lower.ground` below it, in figure units.
  const frame = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)}) translate(0 ${-lower.ground})`
  return (
    <g transform={frame}>
      <CutFigure parts={lower.parts} cuts={lower.cuts} />
      {lower.mail && (
        <path d={lower.mail} fill="none" stroke={PAPER} strokeWidth={0.9} strokeLinecap="round" />
      )}
      <defs>
        <clipPath id={clip}>
          <rect x={-200} y={-400} width={400} height={404} />
          <rect x={22} y={0} width={200} height={70} />
          <rect x={-222} y={0} width={200} height={70} />
        </clipPath>
      </defs>
      <g transform={lean ? `rotate(${n(lean)})` : undefined}>
        <g clipPath={`url(#${clip})`}>
          <Person pose={pose} at={[0, HIP]} scale={1 / size} />
        </g>
        {children && <g transform={`translate(0 ${HIP})`}>{children}</g>}
      </g>
    </g>
  )
}

type OffProps = {
  uid: string
  id: string
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  lean?: number
  children?: ReactNode
}

/** A man in a tunic sitting on the ground, his legs along it and one knee up. */
export function SittingMan({ scale = 1, flip = false, lean = 0, ...p }: OffProps) {
  return <OffFeet {...p} scale={scale} flip={flip} lean={lean} lower={sitting(!!p.pose.armed)} />
}

/** A man in a tunic on one knee. */
export function KneelingMan({ scale = 1, flip = false, lean = 0, ...p }: OffProps) {
  return <OffFeet {...p} scale={scale} flip={flip} lean={lean} lower={kneeling(!!p.pose.armed)} />
}
