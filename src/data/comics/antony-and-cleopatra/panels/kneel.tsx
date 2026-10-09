import { gouge, n } from '@/components/comics/linocut/carve'

import { sandal, sandalCuts } from '../../julius-caesar/panels/people'
import { CutFigure, UpperBody, limb, type P, type Part, type Pose } from './people'

/**
 * A person of the play on one knee, for the moments the play puts someone
 * there and the kit's standing `Person` cannot: Dercetus yielding himself to
 * Caesar, "I yield thee up my life" (5.1).
 *
 * NOT A NEW OUTLINE. Everything above the hip is the kit's own figure
 * (./people.tsx, through `UpperBody`): the same head, hair, arms and hands,
 * clipped at the hip and turned about it by `lean` (forward is positive).
 * Below the hip this adds only the legs, in the kit's sandals, and over them
 * the skirt of the dress: the cuirass's strips, which hang straight down over
 * the forward thigh as they do over a standing man's, or a tunic's hem. As
 * the Julius Caesar kit found (../../julius-caesar/panels/kneel.tsx), what
 * makes a kneel read at panel size is its silhouette: a knee raised in front,
 * a shin along the ground behind and the sole of that foot turned up.
 *
 * `at` is the point on the ground under the hip. Facing right, or left with
 * `flip`. `uid` and `id` make its clip's id unique.
 */

/** The height of the hip above the ground when kneeling, in the figure's units. */
const HIP = 44

/** The near knee down and the shin along the ground behind; the far foot planted ahead. */
const BACK_LEG: P[] = [
  [0, 0],
  [6, HIP - 2],
  [-30, HIP - 2],
]
const FRONT_LEG: P[] = [
  [0, -2],
  [40, -4],
  [43, HIP - 3],
]

/** A foot behind a kneeling figure: the toes on the ground, the sole turned up and back. */
function backSole(x: number): Part {
  return {
    d: `M${n(x + 4)} ${HIP}L${n(x - 12)} ${HIP + 1}C${n(x - 14)} ${HIP - 4} ${n(x - 13)} ${HIP - 9} ${n(x - 10)} ${HIP - 11}L${n(x + 2)} ${HIP - 6}Z`,
  }
}

/** The skirt over the hip: the cuirass's strips, or a belted tunic's hem, hanging. */
const STRIPS = 'M-18.6 -2L-21 24L21.6 24L19.4 -2Z'
const STRIP_CUTS = (() => {
  let d = ''
  for (let k = 0; k < 7; k++) {
    const x = -15 + k * 5.4
    d += gouge(x, 4, x - 0.6 + k * 0.2, 22.6, 0.8)
  }
  return d
})()
const TUNIC_HEM = 'M-18 -4C-21 6 -22 22 -22 40L20 40C20 22 18 6 16 -4Z'

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
  const tunic = pose.dress === 'tunic'
  const parts: Part[] = [
    { d: limb(BACK_LEG), w: 9 },
    backSole(-30),
    { d: limb(FRONT_LEG), w: 9 },
    sandal([43, HIP], 1),
    { d: tunic ? TUNIC_HEM : STRIPS },
  ]
  const cuts =
    gouge(-24, HIP - 1.6, -30, HIP - 7, 0.5) +
    sandalCuts([43, HIP], 1) +
    (tunic ? gouge(-6, 6, -12, 36, 1.4, 0.8) + gouge(8, 6, 12, 36, 1.4, -0.4) : STRIP_CUTS)
  // The hip frame: the hip at the origin, the ground HIP below, in figure units.
  const frame = `translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -scale : scale)} ${n(scale)}) translate(0 ${-HIP})`
  return (
    <g transform={frame}>
      <CutFigure parts={parts} cuts={cuts} />
      <UpperBody uid={uid} id={`kneel-${id}`} pose={pose} lean={lean} />
    </g>
  )
}
