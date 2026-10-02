import type { ReactNode } from 'react'

import { gouge, n } from '@/components/comics/linocut/carve'

import { CutFigure, shoe, type Part } from '../../romeo-and-juliet/panels/verona-kit'
import { Person, limb, type P, type Pose } from './people'

/**
 * People of Othello off their feet, for the moments the play puts them there
 * and the kit's standing `Person` cannot: Desdemona seated while Emilia
 * unpins her hair ("unpin me here", 4.3), Desdemona on her knees to Othello
 * ("Upon my knees, what doth your speech import?", 4.2), and Cassio fallen in
 * the street, sitting up and calling for help ("[Falls.]" ... "Here, here! for
 * heaven's sake, help me!", 5.1).
 *
 * NOT A NEW OUTLINE. Everything above the hip is the kit's own `Person`
 * (./people.tsx): the same head, lit face, hair, dress, arms and hands,
 * clipped at the hip and turned about it by `lean` (forward is positive).
 * Below the hip this adds only what the pose needs, cut as the kit cuts (a
 * paper halo, the parts in ink, the folds in paper): a gown's skirt over the
 * lap or spread on the floor round the knees, or a man's legs and shoes along
 * the ground. It is the method of the Julius Caesar kit's Kneel and Seated
 * (../../julius-caesar/panels/kneel.tsx), for the same reason: a kneeling or
 * seated Desdemona is the standing Desdemona of every other panel.
 *
 * WHAT MAKES THE POSE READ. A seated woman in a long gown is known by her lap
 * standing out in front and the skirt falling straight from the knee to the
 * floor, with the toe of a shoe under it. A kneeling woman by the skirt
 * spread on the floor round her and the soles of her shoes turned up behind
 * it (a kneel with the cloth to the ground and no soles read, in Julius
 * Caesar, as a short figure standing). A man sitting on the ground by his
 * legs along it, one knee up, and his shoes on their heels.
 *
 * `at` is the point on the floor under the hip; facing right, or left with
 * `flip`. Each needs a clip of its own: `uid` and `id` make its id unique.
 * A man on one knee (the vow, 3.3) or seated on a bench is ./kneel.tsx's.
 */

/** The kit's sizes (SIZE in ./people.tsx), for the people who sit or kneel here. */
const SIZE: Partial<Record<Pose['look'], number>> = {
  desdemona: 0.87,
  emilia: 0.89,
  cassio: 1,
}

/** Where the kit's standing figure is cut: its hip, this far above its feet. */
const CUT = 86

/** The kit's figure above the hip: clipped there, turned about it by `lean`. */
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
          <rect x={-200} y={-400} width={400} height={404} />
        </clipPath>
      </defs>
      <g transform={lean ? `rotate(${n(lean)})` : undefined}>
        <g clipPath={`url(#${clip})`}>
          <Person pose={pose} at={[0, CUT]} scale={1 / size}>
            {children}
          </Person>
        </g>
      </g>
    </>
  )
}

type Lower = { parts: Part[]; cuts: string; ground: number }

/**
 * Seated on a low stool, the seat `seat` above the floor: the lap of the gown
 * out over the knees, the skirt falling straight from them to the floor in
 * front and from the seat behind, and the toe of a shoe under the front hem.
 */
function seatedWoman(seat: number): Lower {
  const g = seat
  return {
    parts: [
      shoe([44, g], 1),
      {
        d: `M-16 -12C-18 6 -21 ${n(g * 0.5)} -24 ${g}L50 ${g}C49 ${n(g * 0.6)} 47 ${n(g * 0.25)} 46 6C44 -4 34 -9 22 -11Z`,
      },
    ],
    cuts:
      gouge(-8, -2, 38, 0, 1.5, -1.4) +
      gouge(42, 10, 44, g - 4, 1.6, -0.4) +
      gouge(30, 8, 32, g - 4, 1.5, 0.4) +
      gouge(-10, 8, -18, g - 4, 1.6, 1),
    ground: g,
  }
}

/**
 * Kneeling on both knees, the hip `hip` above the floor: the skirt spread on
 * the floor round the knees, and the soles of both shoes turned up behind
 * the hem.
 */
function kneelingWoman(hip: number): Lower {
  const g = hip
  const sole = (x: number): Part => ({
    d: `M${n(x + 4)} ${g}L${n(x - 11)} ${g + 1}C${n(x - 13)} ${g - 3} ${n(x - 12)} ${g - 8} ${n(x - 9)} ${g - 10}L${n(x + 2)} ${g - 5}Z`,
  })
  return {
    parts: [
      sole(-34),
      sole(-26),
      {
        d: `M-15 -10C-18 8 -24 ${n(g * 0.6)} -30 ${g - 6}L-36 ${g}L34 ${g}C32 ${n(g * 0.72)} 28 ${n(g * 0.45)} 22 ${n(g * 0.2)}C18 2 16 -4 14 -10Z`,
      },
    ],
    cuts:
      gouge(-6, 0, 22, g - 10, 1.6, -2) +
      gouge(-14, 6, -28, g - 6, 1.6, 1.2) +
      gouge(4, 10, 6, g - 4, 1.4, -0.4),
    ground: g,
  }
}

/**
 * Sitting on the ground, the hip on it: the near leg along the ground, the
 * far knee drawn up, both shoes on their heels, the doublet's skirt over the
 * hip. `ground` is how far below the hip the ground is.
 */
function sittingMan(ground: number): Lower {
  const g = ground
  const heel = (x: number, y: number): Part => ({
    d: `M${n(x - 4)} ${n(y - 2)}C${n(x - 2)} ${n(y - 12)} ${n(x + 6)} ${n(y - 14)} ${n(x + 8)} ${n(y - 8)}L${n(x + 7)} ${n(y + 1)}L${n(x - 3)} ${n(y + 1)}Z`,
  })
  const far: P[] = [
    [0, 0],
    [30, -20],
    [46, g - 5],
  ]
  const near: P[] = [
    [0, 2],
    [36, g - 7],
    [68, g - 6],
  ]
  return {
    parts: [
      { d: limb(far), w: 9 },
      heel(48, g),
      { d: limb(near), w: 9.4 },
      heel(70, g),
      { d: 'M-14 -12C-16 -2 -14 6 -8 10L18 12C20 6 20 -4 16 -12Z' },
    ],
    cuts: gouge(-10, 2, 14, 4, 1.2, -0.6),
    ground: g,
  }
}

export function OffTheirFeet({
  uid,
  id,
  pose,
  how,
  at,
  scale = 1,
  flip = false,
  lean = 0,
  seat = 46,
  children,
}: {
  uid: string
  id: string
  pose: Pose
  how: 'seated' | 'kneeling' | 'ground'
  at: P
  scale?: number
  flip?: boolean
  lean?: number
  /** The stool's height, for `seated`; the hip's height, for `kneeling`. */
  seat?: number
  /** Drawn last in the standing figure's own frame (feet at 0, head at 3, -160), as `Person`'s children are. */
  children?: ReactNode
}) {
  const size = SIZE[pose.look] ?? 1
  const s = scale * size
  const lower =
    how === 'seated' ? seatedWoman(seat) : how === 'kneeling' ? kneelingWoman(seat) : sittingMan(10)
  // The hip frame: the hip at the origin, the floor `lower.ground` below it, in figure units.
  const frame = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)}) translate(0 ${-lower.ground})`
  return (
    <g transform={frame}>
      <CutFigure parts={lower.parts} cuts={lower.cuts} />
      <UpperBody clip={`${uid}-low-${id}`} pose={pose} lean={lean}>
        {children}
      </UpperBody>
    </g>
  )
}
