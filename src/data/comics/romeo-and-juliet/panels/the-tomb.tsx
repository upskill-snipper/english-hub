import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { grass, grave, Monument, stars, Yew, type P } from './late-scenes-kit'
import { Figure, type Pose } from './late-scenes-people'

/**
 * Act 5, Scene 3: "The tomb", the nineteenth moment in the guide's timeline.
 *
 * SAFEGUARDING. The moment holds three deaths: Paris killed in a fight,
 * Romeo's suicide by poison, and Juliet's with his dagger, and Juliet is
 * thirteen. The style guide rules that violence is suggested and never shown,
 * that no body is drawn, and that for suicide the picture carries the weight
 * of the moment and not its injury. So nobody who dies is drawn, and nothing
 * inside the vault but the torch's light. The panel shows the moment the text
 * turns on outside the tomb: the Friar arriving "some minute ere the time /
 * Of her awaking" and seeing the light of Romeo's torch in the vault, too
 * late. The quotation carries what has happened inside.
 *
 * Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/romeo-and-juliet.ts):
 *
 * - "A churchyard; in it a Monument belonging to the Capulets." It is night:
 *   "Who is it that consorts, so late, the dead?" So stars are cut in the sky
 *   over the monument (./late-scenes-kit.tsx), whose door Romeo has broken
 *   open ("Breaking open the door of the monument").
 * - "What torch is yond that vainly lends his light [...] It burneth in the
 *   Capels' monument." So the vault through the broken door is full of the
 *   torch's light, its flame in the spot colour, and the light falls out
 *   down the steps.
 * - "Enter, at the other end of the Churchyard, Friar Lawrence, with a
 *   lantern, crow, and spade." "How oft tonight / Have my old feet stumbled at
 *   graves?" So he comes in on the left among the graves, stooped, his lantern
 *   held out before him, its flame in the spot colour, the iron crow and the
 *   spade over his shoulder.
 * - BALTHASAR: "As I did sleep under this yew tree here"; "there's my master,
 *   / One that you love." So Balthasar has got up from under the yew and
 *   points to the monument, level, at its door. His arm was first raised at
 *   a slant, and a straight raised arm reads as a salute at phone width
 *   (review of 26 September 2026).
 * - "what blood is this which stains / The stony entrance of this sepulchre? /
 *   What mean these masterless and gory swords". So two swords lie in the
 *   light below the steps, masterless; no blood is drawn. Paris "came with
 *   flowers to strew his lady's grave", so flowers lie strewn on the steps,
 *   and Romeo's mattock lies where he dropped it.
 *
 * The people are drawn as in the other late panels (./late-scenes-people.tsx).
 * Nothing is taken from a film or stage production. Seeds: 1901 (stars), 1902
 * (grass), 1903 (the lantern's light), 1904 (the flowers), 1905 (the sky's
 * cuts), 1906 (the ground's cuts).
 */

const W = 860
const H = 340
const HORIZON = 252
/** The Friar's lantern, hanging from his hand. */
const LANTERN: P = [196, 216]

/** Friar Lawrence, stooped, lantern out before him, the crow and spade on his shoulder. */
const FRIAR: Pose = {
  look: 'friar',
  head: { at: [7, -172], rot: 8 },
  far: {
    arm: [
      [-3, -149],
      [10, -150],
      [14, -170],
    ],
    hand: 'cup',
  },
  near: {
    arm: [
      [6, -147],
      [20, -124],
      [40, -116],
    ],
    hand: 'cup',
  },
  body: { hem: 30, lean: 6, stoop: 4 },
}
const FRIAR_AT: P = [150, 326]

/** Balthasar, up from under the yew, pointing to the monument. */
const BALTHASAR: Pose = {
  look: 'servant',
  head: { at: [4, -176], rot: -6 },
  far: {
    arm: [
      [-3, -149],
      [-8, -120],
      [-6, -96],
    ],
    hand: 'open',
    thumb: -1,
  },
  near: {
    arm: [
      [6, -147],
      [28, -140],
      [52, -138],
    ],
    hand: 'point',
    deg: -2,
    thumb: -1,
  },
  legs: {
    far: [
      [-5, -84],
      [-10, -44],
      [-16, 0],
    ],
    near: [
      [6, -84],
      [14, -44],
      [18, 0],
    ],
  },
  cloak: 3,
}
const BALTHASAR_AT: P = [420, 318]

type Marks = {
  stars: string
  sky: string
  ground: string
  lit: string
  lantern: string
  flowers: [number, number][]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // the monument covers the sky on the right, so no cut is made behind it
  const behindMonument = (x: number, y: number) =>
    x > 574 && (x < 716 ? y > 112 - ((x - 578) / 138) * 84 : y > 28 + ((x - 716) / 160) * 80)
  const keep = (d: string, covered: (x: number, y: number) => boolean) =>
    d
      .split('M')
      .filter((c) => {
        if (!c) return false
        const [x, y] = c.split(/[ Q]/).map(Number)
        return !covered(x, y)
      })
      .map((c) => 'M' + c)
      .join('')
  const st = keep(stars(rng(1901), { x0: 10, x1: 850, y0: 10, y1: 210 }, 44), behindMonument)
  // a night sky cut in fine rows, paler towards the horizon, so the yew and
  // the two men stand dark against it
  const sky = keep(
    gougeField(
      rng(1905),
      { x0: 0, x1: W, y0: 8, y1: HORIZON - 2 },
      (_x, y) => 0.04 + 0.86 * (y / HORIZON) ** 2.6,
      { spacing: 5.5, len: [20, 70], gap: [6, 22], max: 3.2 },
    ),
    behindMonument,
  )
  // the ground, lit a little by the lantern and by the light from the door
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot(x - LANTERN[0], (y - LANTERN[1]) * 1.6) / 170) * 0.8,
      clamp(1 - Math.hypot(x - 716, (y - 280) * 1.4) / 260) * 0.6,
      0.06,
    )
  const ground = gougeField(rng(1906), { x0: 0, x1: W, y0: HORIZON + 3, y1: H }, light, {
    spacing: 5.5,
    len: [10, 36],
    gap: [6, 18],
    max: 2.4,
  })
  const g = rng(1902)
  // the grass in the light that falls from the door, cut in ink on paper
  const lit = grass(g, { x0: 600, x1: W, y0: 284, y1: H - 2 }, 46)
  const lantern = rays(rng(1903), LANTERN[0], LANTERN[1], {
    from: 12,
    to: 84,
    every: 8,
    width: 2.4,
  })
  const f = rng(1904)
  const flowers: [number, number][] = []
  for (let k = 0; k < 9; k++)
    flowers.push([between(f, 606, 820), k < 5 ? between(f, 255, 260) : between(f, 269, 275)])
  cached = { stars: st, sky, ground, lit, lantern, flowers }
  return cached
}

/** A strewn flower: four round petals, cut in paper. */
const flower = ([x, y]: [number, number]) =>
  `M${x - 4} ${y}a2 2 0 1 0 4 0a2 2 0 1 0 -4 0ZM${x} ${y}a2 2 0 1 0 4 0a2 2 0 1 0 -4 0ZM${x - 2} ${y - 2.4}a2 2 0 1 0 4 0a2 2 0 1 0 -4 0ZM${x - 2} ${y + 2.2}a2 2 0 1 0 4 0a2 2 0 1 0 -4 0Z`

/** The graves the Friar stumbles among, and the stones at their heads. */
const GRAVES = [
  grave(92, 320, 44, 'slab'),
  grave(262, 300, 34, 'cross'),
  grave(536, 330, 40),
  grave(530, 282, 26, 'slab'),
  grave(40, 276, 22),
]

/** A sword lying on the ground: the blade from `tip` to the guard, then the hilt. */
function Sword({ tip, hilt }: { tip: P; hilt: P }) {
  const dx = hilt[0] - tip[0]
  const dy = hilt[1] - tip[1]
  const L = Math.hypot(dx, dy)
  const u: P = [dx / L, dy / L]
  const v: P = [-u[1], u[0]]
  const guard = `M${hilt[0] + v[0] * 8} ${hilt[1] + v[1] * 8}L${hilt[0] - v[0] * 8} ${hilt[1] - v[1] * 8}`
  const grip = `M${hilt[0]} ${hilt[1]}L${hilt[0] + u[0] * 14} ${hilt[1] + u[1] * 14}`
  return (
    <g strokeLinecap="round" fill="none">
      <path d={`M${tip[0]} ${tip[1]}L${hilt[0]} ${hilt[1]}`} stroke={INK} strokeWidth={3} />
      <path d={guard} stroke={INK} strokeWidth={3.4} />
      <path d={grip} stroke={INK} strokeWidth={4} />
      <circle cx={hilt[0] + u[0] * 16} cy={hilt[1] + u[1] * 16} r={3} fill={INK} />
    </g>
  )
}

function TheTomb({ uid }: ArtProps) {
  const m = marks()
  const LIGHT = 'M680 280H752L872 340H566Z'
  return (
    <g className="lc-push" style={timing({ origin: [560, 200], push: 1.03 })}>
      {/* the churchyard at night: the sky and its stars, the ground, the graves */}
      <path d={m.sky} fill={PAPER} />
      <path d={m.stars} fill={PAPER} />
      <path d={m.ground} fill={PAPER} />
      <path d={`M0 ${HORIZON}H${W}`} stroke={PAPER} strokeWidth={LINE.fine} />
      <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
        {GRAVES.map((g) => (
          <path key={g.mound} d={g.mound} />
        ))}
        {GRAVES.filter((g) => g.head).map((g) => (
          <path key={g.head} d={g.head} />
        ))}
      </g>

      {/* the monument, the torch burning in the open vault */}
      <Monument uid={uid} time="night" />
      {/* its light on the steps and falling out across the ground */}
      <path d="M672 250H760L766 264H666Z" fill={PAPER} />
      <path d="M662 264H770L778 280H654Z" fill={PAPER} />
      <path d="M666 264H766M654 280H778" stroke={INK} strokeWidth={1.6} />
      <path d={LIGHT} fill={PAPER} />
      <path d={m.lit} fill={INK} />
      {/* Paris's strewn flowers on the steps */}
      <path d={m.flowers.map(flower).join('')} fill={PAPER} stroke={INK} strokeWidth={0.6} />
      {/* the masterless swords, and Romeo's mattock */}
      <Sword tip={[676, 330]} hilt={[616, 314]} />
      <Sword tip={[760, 300]} hilt={[828, 322]} />
      <path d="M704 336L748 296" stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <path
        d="M736 290C744 292 754 300 758 306L752 300L742 296Z"
        fill={INK}
        stroke={INK}
        strokeWidth={3}
        strokeLinejoin="round"
      />

      {/* the yew, and Balthasar up from under it */}
      <Yew at={[334, 284]} />
      <Figure pose={BALTHASAR} at={BALTHASAR_AT} scale={1.02} />

      {/* Friar Lawrence among the graves, with lantern, crow and spade */}
      <path d={m.lantern} fill={PAPER} />
      <g stroke={PAPER} strokeWidth={7} strokeLinecap="round" fill="none">
        <path d="M168 150L82 218" />
        <path d="M162 146L74 206" />
      </g>
      <g stroke={INK} strokeWidth={4} strokeLinecap="round" fill="none">
        <path d="M168 150L82 218" />
        <path d="M162 146L74 206" />
      </g>
      {/* the spade's blade, and the crow's hooked end */}
      <path d="M74 214L58 234L78 242L92 222Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
      <path
        d="M160 142C164 135 171 135 173 140"
        stroke={PAPER}
        strokeWidth={6.6}
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M160 142C164 135 171 135 173 140"
        stroke={INK}
        strokeWidth={3.8}
        fill="none"
        strokeLinecap="round"
      />
      <Figure pose={FRIAR} at={FRIAR_AT} scale={1.04} />
      {/* the lantern */}
      <path d={`M${LANTERN[0]} 198V206`} stroke={INK} strokeWidth={1.6} />
      <path
        d={`M${LANTERN[0] - 9} 206H${LANTERN[0] + 9}L${LANTERN[0] + 7} 232H${LANTERN[0] - 7}Z`}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2.4}
      />
      <path d={`M${LANTERN[0] - 11} 204H${LANTERN[0] + 11}L${LANTERN[0]} 196Z`} fill={INK} />
      <path
        className="lc-flicker"
        style={timing({ dur: 0.8 })}
        d={`M${LANTERN[0]} 229C${LANTERN[0] - 4} 225 ${LANTERN[0] - 3} 219 ${LANTERN[0]} 211C${LANTERN[0] + 3} 219 ${LANTERN[0] + 4} 225 ${LANTERN[0]} 229Z`}
        fill={RED}
      />
    </g>
  )
}

export const theTomb: LinocutArt = { width: W, height: H, Draw: TheTomb }
