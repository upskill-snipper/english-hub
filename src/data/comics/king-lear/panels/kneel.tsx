import { gouge, n } from '@/components/comics/linocut/carve'

import { CutFigure, Person, type P, type Part, type Pose } from './people'

/**
 * People of the play on their knees, for the moments the play puts them there
 * and the kit's standing `Person` cannot: Gloucester, blind, kneels to kiss the
 * mad King's hand ("O, let me kiss that hand!", 4.6), and Cordelia kneels at
 * her father's side ("O, look upon me, sir, / And hold your hands in
 * benediction o'er me", 4.7). Cut for the panels of moments 17 and 18; any
 * other panel may use it ("Lear's death" kneels Lear with it).
 *
 * NOT A NEW OUTLINE. Everything above the waist is the kit's own `Person`
 * (./people.tsx): the same head, hair, beard, band, arms and hands, clipped at
 * the waist and turned about it by `lean` (forward is positive). Below the
 * waist this adds only the long gown kneeling: the cloth over the thighs to a
 * knee on the ground in front, falling to the ground behind, with the soles of
 * the feet turned up at the back of the hem, and the gown's fold cuts.
 *
 * WHY THE KNEE AND THE SOLES SHOW. The Julius Caesar kit found (2 October
 * 2026) that a kneeling figure covered to the ground in cloth reads at panel
 * size as a short man standing in a long robe, and that what makes a kneel
 * read is its silhouette: the knee out in front, and the soles turned up
 * behind (../../julius-caesar/panels/kneel.tsx). Both people kneel here in long
 * gowns, so the gown is drawn over the knee, and the soles show at its hem.
 *
 * `at` is the point on the ground under the hip; facing right, or left with
 * `flip`. Each needs a clip of its own; `uid` and `id` make its id unique.
 */

/** The kit's sizes (SIZE in ./people.tsx), for the looks that kneel here. */
const SIZE: Partial<Record<Pose['look'], number>> = {
  gloucester: 0.97,
  cordelia: 0.86,
  lear: 0.98,
}

/** The height of the hip above the ground when kneeling, in the figure's units. */
const HIP = 44
/** The kit's waist above its feet: (0, -90) for a man in a gown, (0, -94) for a woman. */
const WAIST = { man: 90, woman: 94 }

type Lower = { parts: Part[]; cuts: string }

/** A foot behind a kneeling figure: the toes on the ground, the sole turned up and back. */
function backSole(x: number): Part {
  return {
    d: `M${n(x + 4)} ${HIP}L${n(x - 12)} ${HIP + 1}C${n(x - 14)} ${HIP - 4} ${n(x - 13)} ${HIP - 9} ${n(x - 10)} ${HIP - 11}L${n(x + 2)} ${HIP - 6}Z`,
  }
}

/**
 * Both knees down in a long gown: the cloth from the waist over the thighs
 * to the knee on the ground in front, and down the back to the ground, the
 * soles of both feet turned up at the back of the hem.
 */
function gownKneeling(woman: boolean): Lower {
  const drape = woman
    ? 'M-12 -8C-16 8 -22 26 -32 44L30 44C32 36 31 28 27 22C21 12 16 2 13 -8Z'
    : 'M-16 -10C-20 8 -26 28 -38 44L34 44C36 36 35 27 30 21C24 11 19 0 16 -10Z'
  const back = woman ? -32 : -38
  return {
    parts: [backSole(back - 2), backSole(back + 6), { d: drape }],
    cuts:
      gouge(-4, -2, 26, 30, 1.7, -1.8) +
      gouge(-10, 4, -24, 40, 1.6, 1) +
      gouge(6, 10, 20, 42, 1.5, -0.8),
  }
}

export function Kneel({
  uid,
  id,
  pose,
  at,
  scale = 1,
  flip = false,
  lean = 0,
}: {
  uid: string
  id: string
  pose: Pose
  at: P
  scale?: number
  flip?: boolean
  lean?: number
}) {
  const size = SIZE[pose.look] ?? 1
  const s = scale * size
  const woman = pose.look === 'cordelia'
  const lower = gownKneeling(woman)
  const cut = woman ? WAIST.woman : WAIST.man
  const clip = `${uid}-kneel-${id}`
  // The hip frame: the hip at the origin, the ground HIP below, in figure units.
  const frame = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)}) translate(0 ${-HIP})`
  return (
    <g transform={frame}>
      <CutFigure parts={lower.parts} cuts={lower.cuts} />
      <defs>
        <clipPath id={clip}>
          <rect x={-200} y={-400} width={400} height={404} />
        </clipPath>
      </defs>
      <g transform={lean ? `rotate(${n(lean)})` : undefined}>
        <g clipPath={`url(#${clip})`}>
          <Person pose={pose} at={[0, cut]} scale={1 / size} />
        </g>
      </g>
    </g>
  )
}
