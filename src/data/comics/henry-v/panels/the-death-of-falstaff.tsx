import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { siegeGround, siegeSky } from './harfleur'
import { Person } from './people'

/**
 * Act 2, Scene 3: "The death of Falstaff", the sixth moment in the guide's
 * timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/henry-v.ts, Project Gutenberg #1521), set "London.
 * Before a tavern.":
 *
 * - "Enter Pistol, Nym, Bardolph, Boy and Hostess." So these five and no one
 *   else, drawn from the kit (./people.tsx): the Hostess in her coif and
 *   apron; the Boy, Falstaff's page, a child a head and more shorter than the
 *   men; Bardolph and his nose, "all bubukles, and whelks, and knobs"; Pistol
 *   in his feathered cap and "a beard of the general's cut"; Nym in his hood.
 * - FALSTAFF IS NEVER DRAWN. His death is the Hostess's to tell ("'A made a
 *   finer end and went away an it had been any christom child"), so the
 *   panel shows her telling it and the men who hear it: no bed, no body, no
 *   room. The house he died in is the one before them, where in Act 2, Scene 1
 *   the Hostess called them to "come in quickly to Sir John"; its upper
 *   window is shut.
 * - The Hostess weeps as she tells it: Pistol bids her "Go, clear thy
 *   crystals", dry her eyes. So she bows her head and puts a hand over them,
 *   before her own door.
 * - Pistol: "No; for my manly heart doth yearn", so a hand on his heart.
 *   Bardolph: "Would I were with him, wheresome'er he is", so his head bowed.
 *   The Boy, who answers the Hostess twice, looks up at her.
 * - They are leaving for the war: Nym, "Shall we shog? The King will be gone
 *   from Southampton", and Pistol, "Let us to France". So they are dressed
 *   for it, in their jacks with their swords at their hips, and Nym has
 *   turned already and points away along the street.
 * - The tavern is not named or described in the play. It is drawn plainly as
 *   a London house of 1415: timber-framed, its upper storey jettied out over
 *   the street, a latticed window, a door, and a sign on an iron bracket, as a
 *   tavern of the time hung out. Beyond the street are the roofs of the city
 *   and a church tower.
 *
 * THE SPOT COLOUR is the tavern's sign, a board with a cup cut on it in
 * paper, the house of the old life the scene says goodbye to. It hangs high
 * over the street, large and far from any face or hand, so at phone width it
 * stays a sign. Nothing is taken from a film or stage production.
 *
 * Seeds: 601 (sky), 602 (street), 603 (plaster), 604 (the city), 605
 * (timbers).
 */

const W = 860
const H = 340
/** Where the street meets the far roofs, and where the feet stand. */
const HORIZON = 246
const FEET = 318

/** The tavern front: its right edge, the jetty, the doorway and the window. */
const T = { x1: 236, jetty: 112, beam: 122 }
const DOOR = { x0: 40, x1: 104, top: 150 }
const WIN = { x0: 132, x1: 222, top: 166, sill: 236 }
const UP = { x0: 70, x1: 186, top: 18, sill: 92 }
/** The sign on its bracket, out over the street. */
const SIGN = { x0: 252, x1: 308, top: 52, bottom: 104 }

type Marks = {
  sky: string
  street: string
  plaster: string
  timbers: string
  timberCuts: string
  lattice: string
  shutters: string
  shutterCuts: string
  roofs: string
  roofCuts: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = siegeSky(
    rng(601),
    { x0: T.x1, x1: W, y0: 6, y1: HORIZON - 30 },
    (x, y) => 0.08 + (1 - y / HORIZON) * 0.3 + clamp(1 - Math.hypot(x - 760, y - 30) / 260) * 0.2,
    7.2,
  )
  const street =
    siegeGround(rng(602), { x0: 0, x1: W, y0: HORIZON + 2, y1: H }, 1.3) +
    // the kennel down the middle of the street, where the rain runs
    gouge(T.x1 + 4, 286, W + 4, 284, 1.6, 0.4) +
    gouge(T.x1 + 30, 291, W + 4, 290, 0.8, -0.3)
  // The plaster between the timbers, lit from the open street on the right
  // and darkest under the jetty.
  const light = (x: number, y: number) =>
    clamp(
      0.2 +
        (x / T.x1) * 0.38 -
        (y < T.beam + 40 && y > T.beam ? 0.22 : 0) -
        (y < T.jetty ? 0.06 : 0),
    )
  const plaster = gougeField(rng(603), { x0: -6, x1: T.x1 + 14, y0: -4, y1: FEET - 2 }, light, {
    spacing: 5.6,
    len: [10, 40],
    gap: [4, 12],
    max: 2.6,
  })
  // The frame of the house: posts, the rail over the door and window, the
  // sill beam, two braces, and above the jetty the close studs of the upper
  // storey round its window.
  const post = (x: number, y0: number, y1: number, w = 9) =>
    `M${n(x - w / 2)} ${n(y0)}H${n(x + w / 2)}V${n(y1)}H${n(x - w / 2)}Z`
  const rail = (x0: number, x1: number, y: number, h = 8) =>
    `M${n(x0)} ${n(y - h / 2)}H${n(x1)}V${n(y + h / 2)}H${n(x0)}Z`
  let timbers =
    post(4, T.beam, FEET) +
    post(DOOR.x1 + 6, T.beam, FEET) +
    post(T.x1 - 4, T.beam, FEET, 10) +
    rail(-6, T.x1, DOOR.top - 6) +
    rail(-6, T.x1 + 2, FEET - 2, 10) +
    // the jetty: the bressummer under the upper storey, and its joist ends
    rail(-6, T.x1 + 14, T.jetty + 5, 12) +
    // the upper storey's posts and studs, either side of the window
    post(T.x1 + 8, -10, T.jetty)
  for (let x = 8; x < UP.x0 - 6; x += 22) timbers += post(x, -10, T.jetty, 7)
  for (let x = UP.x1 + 16; x < T.x1; x += 22) timbers += post(x, -10, T.jetty, 7)
  timbers += rail(UP.x0 - 8, UP.x1 + 8, UP.sill + 6, 8) + rail(UP.x0 - 8, UP.x1 + 8, UP.top - 4, 8)
  // braces in the ground storey, from the posts up to the rail
  const brace = (x0: number, y0: number, x1: number, y1: number) => wedge(x0, y0, x1, y1, 7, 7)
  timbers += brace(WIN.x1 + 2, WIN.top - 12, T.x1 - 8, WIN.sill - 2)
  let joists = ''
  for (let x = 4; x < T.x1 + 8; x += 18) joists += `M${n(x)} ${n(T.beam - 1)}h8v6h-8Z`
  timbers += joists
  // the grain of the timbers, cut in paper, and their lit edges
  const rt = rng(605)
  let timberCuts = ''
  for (let x = 8; x < T.x1 + 12; x += between(rt, 30, 60))
    timberCuts += gouge(
      x,
      T.jetty + 3,
      x + between(rt, 20, 40),
      T.jetty + 3 + between(rt, -0.6, 0.6),
      0.7,
    )
  timberCuts +=
    gouge(T.x1 - 6.4, T.beam + 12, T.x1 - 6, FEET - 12, 0.8) +
    gouge(DOOR.x1 + 4, T.beam + 30, DOOR.x1 + 4.4, FEET - 16, 0.7)
  // the ground-floor window's lattice, and the upper window's shut leaves
  let lattice = ''
  for (let k = -8; k <= 8; k++) {
    const c = (WIN.x0 + WIN.x1) / 2 + k * 14
    lattice += `M${n(c - 60)} ${n(WIN.sill + 60)}L${n(c + 60)} ${n(WIN.sill - 60)}M${n(c + 60)} ${n(WIN.sill + 60)}L${n(c - 60)} ${n(WIN.sill - 60)}`
  }
  const mid = (UP.x0 + UP.x1) / 2
  const shutters = `M${n(UP.x0)} ${n(UP.top)}H${n(UP.x1)}V${n(UP.sill)}H${n(UP.x0)}Z`
  let shutterCuts = ''
  for (let x = UP.x0 + 9; x < UP.x1 - 4; x += 11)
    if (Math.abs(x - mid) > 5) shutterCuts += gouge(x, UP.top + 5, x + 0.4, UP.sill - 5, 0.9)
  for (const y of [UP.top + 14, UP.sill - 14])
    shutterCuts += gouge(UP.x0 + 4, y, mid - 5, y, 1.6) + gouge(mid + 5, y, UP.x1 - 4, y, 1.6)
  // The houses of the city beyond the street, far off: each a wall with a
  // steep roof, gable end or eaves on to the street, its windows and the
  // joints of its timbers cut in paper, a chimney on some; and a church tower
  // with its spire among them.
  const rr = rng(604)
  let roofs = ''
  let roofCuts = ''
  let x = T.x1 - 4
  let k = 0
  while (x < W + 10) {
    const w = between(rr, 30, 52)
    const wall = between(rr, 18, 44)
    const roof = between(rr, 16, 28)
    const base = HORIZON + 1
    const top = base - wall
    const gable = k % 3 !== 1
    if (gable)
      roofs += `M${n(x)} ${n(base)}V${n(top)}L${n(x + w / 2)} ${n(top - roof)}L${n(x + w)} ${n(top)}V${n(base)}Z`
    else
      roofs += `M${n(x)} ${n(base)}V${n(top)}L${n(x + 9)} ${n(top - roof * 0.8)}H${n(x + w - 9)}L${n(x + w)} ${n(top)}V${n(base)}Z`
    // the eaves line, the windows of the upper floor and the door
    roofCuts += gouge(x + 2, top + 1, x + w - 2, top + 1, 0.8)
    const wins = w > 40 ? 2 : 1
    for (let i = 0; i < wins; i++) {
      const wx = x + (w * (i + 1)) / (wins + 1) - 3
      roofCuts += `M${n(wx)} ${n(top + 5)}h6v6h-6Z`
    }
    if (rr() < 0.5) roofCuts += `M${n(x + w * 0.5 - 2.5)} ${n(base - 11)}h5v10h-5Z`
    if (gable) roofCuts += gouge(x + w / 2 + 2, top - roof + 5, x + w - 4, top - 1, 0.8)
    if (rr() < 0.45) {
      const cxh = x + w * between(rr, 0.62, 0.78)
      const cy = gable ? top - roof * (1 - Math.abs(cxh - x - w / 2) / (w / 2)) : top - roof * 0.8
      roofs += `M${n(cxh)} ${n(cy + 4)}V${n(cy - 9)}h6V${n(cy + 6)}Z`
    }
    x += w + between(rr, -2, 3)
    k++
  }
  // the church: a square tower and its spire
  const cx = 704
  roofs += `M${cx - 14} ${HORIZON}V${HORIZON - 78}H${cx + 14}V${HORIZON}Z`
  roofs += `M${cx - 16} ${HORIZON - 76}L${cx} ${HORIZON - 142}L${cx + 16} ${HORIZON - 76}Z`
  roofCuts +=
    gouge(cx + 3, HORIZON - 134, cx + 12, HORIZON - 80, 0.9) +
    `M${cx - 3.5} ${HORIZON - 66}h7v16h-7Z` +
    gouge(cx - 14, HORIZON - 77, cx + 14, HORIZON - 77, 0.7) +
    gouge(cx + 7, HORIZON - 40, cx + 7.4, HORIZON - 4, 0.7)
  const shadows =
    footShadow(270, FEET + 7, 18) +
    footShadow(338, FEET + 1, 26) +
    footShadow(416, FEET + 9, 30) +
    footShadow(512, FEET + 4, 28)
  cached = {
    sky,
    street,
    plaster,
    timbers,
    timberCuts,
    lattice,
    shutters,
    shutterCuts,
    roofs,
    roofCuts,
    shadows,
  }
  return cached
}

/** The cup on the tavern's sign, cut in paper: its bowl, its stem and its foot. */
const CUP = 'M-9 -12H9C9 -2 5 3 1.6 4V10H6V13H-6V10H-1.6V4C-5 3 -9 -2 -9 -12Z'

function TheDeathOfFalstaff({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={`M${WIN.x0} ${WIN.top}H${WIN.x1}V${WIN.sill}H${WIN.x0}Z`} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [330, 230], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.roofs} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <path d={m.roofCuts} fill={PAPER} />

        {/* the street */}
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.street} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* the tavern: its plastered front between the timbers */}
        <path d={`M-6 -6H${T.x1}V${T.jetty}H${T.x1 + 14}V${FEET + 3}H-6Z`} fill={INK} />
        <path d={m.plaster} fill={PAPER} />
        <path
          d={m.timbers}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
        <path d={m.timberCuts} fill={PAPER} />
        {/* the shadow under the jetty */}
        <path d={gouge(-6, T.beam + 6, T.x1 + 10, T.beam + 6, 2.6)} fill={INK} />

        {/* the upper window, its shutters closed */}
        <path d={m.shutters} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.shutterCuts} fill={PAPER} />
        <path
          d={`M${(UP.x0 + UP.x1) / 2} ${UP.top}V${UP.sill}`}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />

        {/* the door, standing open on the dark of the house */}
        <path
          d={`M${DOOR.x0} ${DOOR.top}H${DOOR.x1}V${FEET}H${DOOR.x0}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${DOOR.x0 + 2} ${DOOR.top + 2}L${DOOR.x0 + 16} ${DOOR.top + 10}V${FEET - 8}L${DOOR.x0 + 2} ${FEET - 1}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={gouge(DOOR.x0 + 9, DOOR.top + 18, DOOR.x0 + 9.4, FEET - 16, 0.7)} fill={PAPER} />
        <path
          d={`M${DOOR.x0 - 6} ${FEET}H${DOOR.x1 + 6}V${FEET + 5}H${DOOR.x0 - 6}Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
        />

        {/* the ground-floor window, its lattice */}
        <path d={`M${WIN.x0} ${WIN.top}H${WIN.x1}V${WIN.sill}H${WIN.x0}Z`} fill={PAPER} />
        <g clipPath={`url(#${clip})`}>
          <path d={m.lattice} stroke={INK} strokeWidth={1.6} fill="none" />
        </g>
        <path
          d={`M${WIN.x0} ${WIN.top}H${WIN.x1}V${WIN.sill}H${WIN.x0}Z`}
          fill="none"
          stroke={INK}
          strokeWidth={4}
        />
        <path d={`M${(WIN.x0 + WIN.x1) / 2} ${WIN.top}V${WIN.sill}`} stroke={INK} strokeWidth={5} />

        {/* the sign, on its iron bracket out over the street */}
        <path
          d={`M${T.x1 + 10} 44H${SIGN.x1 + 6}M${T.x1 + 10} 66Q${T.x1 + 40} 64 ${T.x1 + 52} 44`}
          fill="none"
          stroke={INK}
          strokeWidth={3}
          strokeLinecap="round"
        />
        <path
          d={`M${SIGN.x0 + 6} 44V${SIGN.top}M${SIGN.x1 - 6} 44V${SIGN.top}`}
          stroke={INK}
          strokeWidth={2}
        />
        <path
          d={`M${SIGN.x0} ${SIGN.top}H${SIGN.x1}V${SIGN.bottom}H${SIGN.x0}Z`}
          fill={RED}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path
          d={`M${SIGN.x0 + 5} ${SIGN.top + 5}H${SIGN.x1 - 5}V${SIGN.bottom - 5}H${SIGN.x0 + 5}Z`}
          fill="none"
          stroke={PAPER}
          strokeWidth={2.2}
        />
        <path
          d={CUP}
          transform={`translate(${(SIGN.x0 + SIGN.x1) / 2} ${(SIGN.top + SIGN.bottom) / 2}) scale(1.15)`}
          fill={PAPER}
        />

        {/* the Hostess before her door, her hand to her eyes */}
        <Person
          at={[158, FEET + 4]}
          scale={1.2}
          pose={{
            look: 'hostess',
            head: { at: [6, -150], rot: 14 },
            eye: 'shut',
            far: {
              pts: [
                [-3, -122],
                [-6, -100],
                [-2, -80],
              ],
            },
            near: {
              pts: [
                [3, -122],
                [20, -112],
                [15, -140],
              ],
              hand: 'open',
              deg: -96,
              size: 13.5,
            },
          }}
        />

        {/* the Boy, Falstaff's page, looking up at her */}
        <Person
          at={[268, FEET + 6]}
          scale={1.2}
          flip
          pose={{ look: 'boy', head: { rot: -8 }, brow: 'sorrow' }}
        />

        {/* Bardolph, his head bowed */}
        <Person
          at={[338, FEET]}
          scale={1.14}
          flip
          pose={{
            look: 'bardolph',
            head: { at: [6, -158], rot: 16 },
            eye: 'down',
            brow: 'sorrow',
            near: {
              pts: [
                [4, -132],
                [8, -108],
                [6, -86],
              ],
            },
          }}
        />

        {/* Pistol, his hand on his heart: "my manly heart doth yearn" */}
        <Person
          at={[416, FEET + 8]}
          scale={1.24}
          flip
          pose={{
            look: 'pistol',
            head: { rot: -6 },
            far: {
              pts: [
                [-3, -132],
                [-20, -110],
                [-6, -94],
              ],
            },
            near: {
              pts: [
                [4, -132],
                [20, -112],
                [10, -122],
              ],
              hand: 'open',
              deg: -150,
              size: 14,
            },
          }}
        />

        {/* Nym, turned already to the road: "Shall we shog?" */}
        <Person
          at={[512, FEET + 3]}
          scale={1.18}
          pose={{
            look: 'nym',
            near: {
              pts: [
                [4, -132],
                [22, -116],
                [42, -122],
              ],
              hand: 'point',
              deg: -8,
            },
          }}
        />
      </g>
    </>
  )
}

export const theDeathOfFalstaff: LinocutArt = { width: W, height: H, Draw: TheDeathOfFalstaff }
