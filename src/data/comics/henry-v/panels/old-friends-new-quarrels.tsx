import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { siegeGround, siegeSky } from './harfleur'
import { Person } from './people'

/**
 * Act 2, Scene 1: "Old friends, new quarrels", the fourth moment in the
 * guide's timeline. "London. A street." Every detail is from the scene in the
 * held edition (src/data/full-texts/henry-v.ts, Project Gutenberg #1521):
 *
 * - "Good morrow, Lieutenant Bardolph": it is morning, so the street is in
 *   daylight under a pale sky.
 * - Nym and Pistol have fallen out: Pistol has married "Nell Quickly", to
 *   whom Nym "were troth-plight", and owes him "the eight shillings I won of
 *   you at betting". The stage directions have them draw twice ("Nym and
 *   Pistol draw", "They draw"), and between the two the Hostess begs Nym to
 *   "put up your sword" and Pistol swears "fury shall abate". The panel draws
 *   the quarrel with every sword in its scabbard, the moment before a blade
 *   comes out, as the style guide asks: Nym, in his hood, "I dare not fight,
 *   but I will wink and hold out mine iron", has his hand on his hilt;
 *   Pistol, in his feathered cap and "a beard of the general's cut", squares
 *   up to him, chin high, one fist on his hip and the other hand on his own
 *   hilt. No blade is drawn: the Boy is in the picture.
 * - Bardolph stands between them, bidding them both "offer nothing here",
 *   and "I will bestow a breakfast to make you friends": his
 *   open hands held out low from bent arms, one to each, keeping them apart,
 *   his great nose in profile ("his face is all bubukles, and whelks, and
 *   knobs", 3.6). How the three look, and why, is in ./people.tsx.
 * - "Enter the Boy. Mine host Pistol, you must come to my master, and you,
 *   hostess. He is very sick, and would to bed." So the Boy, Falstaff's page,
 *   a child, has come running out of the house on the right, and calls to
 *   them with an open hand held out low, pointing back with the other to
 *   the house where his master lies.
 * - The Hostess, "the quondam Quickly", now Pistol's wife: "The King has
 *   kill'd his heart. Good husband, come home presently." So she stands
 *   between the Boy and her husband, turned to Pistol, a hand at her breast
 *   and her head bowed. That line, the guide's quotation for the moment, is
 *   the panel's: it names a heart broken, not a death.
 * - The house is the Hostess's: "Nor shall my Nell keep lodgers", Pistol
 *   says, and she calls them in to Sir John at the end of the scene ("come in
 *   quickly to Sir John"). It is the house the panel of the moment after this
 *   one stands before, after Falstaff has died (./the-death-of-falstaff.tsx),
 *   cut to the same plan, so a student sees the same house in both: a
 *   timber-framed London house of 1415, its upper storey jettied out over the
 *   street, a door, a latticed window, and its sign, a board with a cup cut
 *   in paper, hanging from an iron bracket over the street. Here Falstaff is
 *   alive, "very sick": the shutters of the upper window stand open on the
 *   dark of the room, where in the next panel they are shut. He is not drawn.
 * - The rest of the street runs away to the left, to the roofs of the city
 *   and a church spire, as in the next panel.
 *
 * THE SPOT COLOUR is the house's sign, as in the next panel: large, high over
 * the street and far from every face and hand, so at phone width it stays a
 * sign. Nothing else is red. Nothing is taken from a film or stage
 * production. Seeds: 401 (sky), 402 (street), 403 (plaster), 404 (the city),
 * 405 (timbers).
 */

const W = 860
const H = 340
/** Where the street meets the far roofs, and where the feet stand. */
const HORIZON = 246
const FEET = 318

/**
 * The Hostess's house, on the right. `x0` is the left edge of its ground
 * storey, `jetty` the foot of the upper storey, which overhangs the street
 * (its corner at `x0 - 14`), `beam` the top of the ground storey.
 */
const T = { x0: 648, jetty: 112, beam: 122 }
const DOOR = { x0: 676, x1: 738, top: 150 }
const WIN = { x0: 766, x1: 852, top: 166, sill: 236 }
const UP = { x0: 704, x1: 812, top: 18, sill: 92 }
/** The sign on its bracket, out over the street. */
const SIGN = { x0: 562, x1: 618, top: 52, bottom: 104 }

/** Where each person stands. */
const NYM: [number, number] = [118, FEET + 2]
const BARDOLPH: [number, number] = [236, FEET]
const PISTOL: [number, number] = [352, FEET + 4]
const HOSTESS: [number, number] = [470, FEET + 4]
const BOY: [number, number] = [588, FEET + 6]

type Marks = {
  sky: string
  street: string
  plaster: string
  timbers: string
  timberCuts: string
  lattice: string
  roofs: string
  roofCuts: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = siegeSky(
    rng(401),
    { x0: -6, x1: T.x0 - 14, y0: 6, y1: HORIZON - 30 },
    (x, y) => 0.08 + (1 - y / HORIZON) * 0.3 + clamp(1 - Math.hypot(x - 90, y - 30) / 260) * 0.2,
    7.2,
  )
  const street =
    siegeGround(rng(402), { x0: 0, x1: W, y0: HORIZON + 2, y1: H }, 1.3) +
    // the kennel down the middle of the street, where the rain runs
    gouge(-4, 284, T.x0 - 4, 286, 1.6, 0.4) +
    gouge(-4, 290, T.x0 - 30, 291, 0.8, -0.3)
  // The plaster between the timbers, lit from the open street on the left
  // and darkest under the jetty.
  const light = (x: number, y: number) =>
    clamp(
      0.2 +
        ((W - x) / (W - T.x0)) * 0.38 -
        (y < T.beam + 40 && y > T.beam ? 0.22 : 0) -
        (y < T.jetty ? 0.06 : 0),
    )
  const plaster = gougeField(rng(403), { x0: T.x0 - 20, x1: W + 6, y0: -4, y1: FEET - 2 }, light, {
    spacing: 5.6,
    len: [10, 40],
    gap: [4, 12],
    max: 2.6,
  })
  // The frame of the house: posts, the rail over the door and window, the
  // sill beam, a brace, and above the jetty the close studs of the upper
  // storey round its window.
  const post = (x: number, y0: number, y1: number, w = 9) =>
    `M${n(x - w / 2)} ${n(y0)}H${n(x + w / 2)}V${n(y1)}H${n(x - w / 2)}Z`
  const rail = (x0: number, x1: number, y: number, h = 8) =>
    `M${n(x0)} ${n(y - h / 2)}H${n(x1)}V${n(y + h / 2)}H${n(x0)}Z`
  let timbers =
    post(T.x0 + 4, T.beam, FEET, 10) +
    post(DOOR.x1 + 14, T.beam, FEET) +
    post(W + 2, T.beam, FEET) +
    rail(T.x0, W + 6, DOOR.top - 6) +
    rail(T.x0 - 2, W + 6, FEET - 2, 10) +
    // the jetty: the bressummer under the upper storey, and its joist ends
    rail(T.x0 - 14, W + 6, T.jetty + 5, 12) +
    // the upper storey's corner post, and its studs either side of the window
    post(T.x0 - 8, -10, T.jetty)
  for (let x = T.x0 + 6; x < UP.x0 - 8; x += 22) timbers += post(x, -10, T.jetty, 7)
  for (let x = UP.x1 + 16; x < W + 6; x += 22) timbers += post(x, -10, T.jetty, 7)
  timbers += rail(UP.x0 - 8, UP.x1 + 8, UP.sill + 6, 8) + rail(UP.x0 - 8, UP.x1 + 8, UP.top - 4, 8)
  // a brace in the ground storey, from the post by the door up to the rail
  timbers += wedge(DOOR.x1 + 16, WIN.sill - 2, WIN.x0 - 6, WIN.top - 14, 7, 7)
  for (let x = T.x0 - 12; x < W + 8; x += 18) timbers += `M${n(x)} ${n(T.beam - 1)}h8v6h-8Z`
  // the grain of the timbers, cut in paper
  const rt = rng(405)
  let timberCuts = ''
  for (let x = T.x0 - 10; x < W; x += between(rt, 30, 60))
    timberCuts += gouge(
      x,
      T.jetty + 3,
      x + between(rt, 20, 40),
      T.jetty + 3 + between(rt, -0.6, 0.6),
      0.7,
    )
  timberCuts +=
    gouge(T.x0 + 2.4, T.beam + 12, T.x0 + 2.8, FEET - 12, 0.8) +
    gouge(DOOR.x1 + 12, T.beam + 30, DOOR.x1 + 12.4, FEET - 16, 0.7)
  // the ground-floor window's lattice
  let lattice = ''
  for (let k = -8; k <= 8; k++) {
    const c = (WIN.x0 + WIN.x1) / 2 + k * 14
    lattice += `M${n(c - 60)} ${n(WIN.sill + 60)}L${n(c + 60)} ${n(WIN.sill - 60)}M${n(c + 60)} ${n(WIN.sill + 60)}L${n(c - 60)} ${n(WIN.sill - 60)}`
  }
  // The houses of the city along the street to the left, far off and in the
  // morning light: each a wall with a steep roof, cut almost all away to the
  // paper, so that the people of the street stand black against it and no
  // hand is lost in it (cut in ink, as in the next panel's view the other way,
  // the roofs ran behind the hands at the height they are held). Their
  // outlines, the lines of their roofs, their windows and doors and a chimney
  // on some are left in ink; a church tower with its spire stands among them.
  const rr = rng(404)
  let roofs = ''
  let roofCuts = ''
  let x = -12
  let k = 0
  while (x < T.x0 - 14) {
    const w = between(rr, 30, 52)
    const wall = between(rr, 14, 30)
    const roof = between(rr, 12, 22)
    const base = HORIZON + 1
    const top = base - wall
    const gable = k % 3 !== 1
    if (gable)
      roofs += `M${n(x)} ${n(base)}V${n(top)}L${n(x + w / 2)} ${n(top - roof)}L${n(x + w)} ${n(top)}V${n(base)}Z`
    else
      roofs += `M${n(x)} ${n(base)}V${n(top)}L${n(x + 9)} ${n(top - roof * 0.8)}H${n(x + w - 9)}L${n(x + w)} ${n(top)}V${n(base)}Z`
    // the eaves, and the courses of the roof
    roofCuts += wedge(x, top, x + w, top, 2.2, 2.2)
    for (let c = 1; c < 3; c++) {
      const y = top - (roof * c) / 3
      const inset = gable ? (w / 2) * (c / 3) : 9 * (c / 3) * 0.8
      roofCuts += gouge(x + inset + 1, y, x + w - inset - 1, y, 0.6)
    }
    const wins = w > 40 ? 2 : 1
    for (let i = 0; i < wins; i++) {
      const wx = x + (w * (i + 1)) / (wins + 1) - 3
      roofCuts += `M${n(wx)} ${n(top + 4)}h6v6h-6Z`
    }
    if (rr() < 0.5) roofCuts += `M${n(x + w * 0.5 - 2.5)} ${n(base - 10)}h5v10h-5Z`
    if (rr() < 0.45) {
      const cxh = x + w * between(rr, 0.22, 0.38)
      const cy = gable ? top - roof * (1 - Math.abs(cxh - x - w / 2) / (w / 2)) : top - roof * 0.8
      roofCuts += `M${n(cxh)} ${n(cy + 4)}V${n(cy - 8)}h5V${n(cy + 5)}Z`
    }
    x += w + between(rr, -2, 3)
    k++
  }
  // the church: a square tower and its spire
  const cx = 46
  roofs += `M${cx - 14} ${HORIZON}V${HORIZON - 78}H${cx + 14}V${HORIZON}Z`
  roofs += `M${cx - 16} ${HORIZON - 76}L${cx} ${HORIZON - 142}L${cx + 16} ${HORIZON - 76}Z`
  roofCuts +=
    `M${cx - 3.5} ${HORIZON - 66}h7v16h-7Z` +
    `M${cx - 3} ${HORIZON - 36}h6v12h-6Z` +
    wedge(cx - 16, HORIZON - 77, cx + 16, HORIZON - 77, 2.4, 2.4) +
    gouge(cx - 1, HORIZON - 132, cx - 10, HORIZON - 82, 0.7) +
    gouge(cx + 1, HORIZON - 132, cx + 10, HORIZON - 82, 0.7)
  const shadows =
    footShadow(NYM[0], FEET + 3, 28) +
    footShadow(BARDOLPH[0], FEET + 1, 30) +
    footShadow(PISTOL[0], FEET + 5, 28) +
    footShadow(HOSTESS[0] + 6, FEET + 5, 30) +
    footShadow(BOY[0], FEET + 7, 20)
  cached = { sky, street, plaster, timbers, timberCuts, lattice, roofs, roofCuts, shadows }
  return cached
}

/** The cup on the house's sign, cut in paper: its bowl, its stem and its foot. */
const CUP = 'M-9 -12H9C9 -2 5 3 1.6 4V10H6V13H-6V10H-1.6V4C-5 3 -9 -2 -9 -12Z'

/**
 * The upper window with its shutters opened back against the wall either side
 * and the dark of the room within, where Falstaff lies sick and is not drawn.
 */
function OpenWindow() {
  const leaf = (x0: number, x1: number) => {
    let cuts = ''
    for (let x = x0 + 8; x < x1 - 4; x += 10)
      cuts += gouge(x, UP.top + 5, x + 0.4, UP.sill - 5, 0.9)
    return { d: `M${n(x0)} ${n(UP.top)}H${n(x1)}V${n(UP.sill)}H${n(x0)}Z`, cuts }
  }
  const half = (UP.x1 - UP.x0) / 2
  const left = leaf(UP.x0 - half + 4, UP.x0 - 2)
  const right = leaf(UP.x1 + 2, UP.x1 + half - 4)
  return (
    <g>
      {/* the opening, on the dark of the room, and the wooden mullions across it that catch the light */}
      <path
        d={`M${UP.x0} ${UP.top}H${UP.x1}V${UP.sill}H${UP.x0}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={[1, 2, 3]
          .map((i) => {
            const x = UP.x0 + ((UP.x1 - UP.x0) * i) / 4
            return `M${n(x - 2.2)} ${UP.top}H${n(x + 2.2)}V${UP.sill}H${n(x - 2.2)}Z`
          })
          .join('')}
        fill={PAPER}
      />
      {/* the two leaves, folded back against the wall */}
      <path d={left.d + right.d} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={left.cuts + right.cuts} fill={PAPER} />
      {/* the sill */}
      <path d={`M${UP.x0 - 6} ${UP.sill}H${UP.x1 + 6}V${UP.sill + 4}H${UP.x0 - 6}Z`} fill={PAPER} />
    </g>
  )
}

function OldFriendsNewQuarrels({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={`M${WIN.x0} ${WIN.top}H${WIN.x1}V${WIN.sill}H${WIN.x0}Z`} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 230], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.roofs} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
        <path d={m.roofCuts} fill={INK} />

        {/* the street */}
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.street} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* the Hostess's house: its plastered front between the timbers */}
        <path
          d={`M${T.x0 - 14} -6H${W + 6}V${FEET + 3}H${T.x0}V${T.jetty}H${T.x0 - 14}Z`}
          fill={INK}
        />
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
        <path d={gouge(T.x0 - 10, T.beam + 6, W + 6, T.beam + 6, 2.6)} fill={INK} />

        <OpenWindow />

        {/* the door, standing open on the dark of the house */}
        <path
          d={`M${DOOR.x0} ${DOOR.top}H${DOOR.x1}V${FEET}H${DOOR.x0}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${DOOR.x1 - 2} ${DOOR.top + 2}L${DOOR.x1 - 16} ${DOOR.top + 10}V${FEET - 8}L${DOOR.x1 - 2} ${FEET - 1}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        <path d={gouge(DOOR.x1 - 9, DOOR.top + 18, DOOR.x1 - 9.4, FEET - 16, 0.7)} fill={PAPER} />
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
          d={`M${T.x0 - 10} 44H${SIGN.x0 - 6}M${T.x0 - 10} 66Q${T.x0 - 40} 64 ${T.x0 - 52} 44`}
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

        {/* Nym, in his hood, his hand on his hilt: "I will wink and hold out mine iron" */}
        <Person
          at={NYM}
          scale={1.2}
          pose={{
            look: 'nym',
            brow: 'frown',
            far: {
              pts: [
                [-3, -132],
                [-8, -108],
                [-6, -86],
              ],
            },
            near: {
              pts: [
                [4, -132],
                [14, -106],
                [9, -86],
              ],
              hand: 'grip',
              deg: 112,
            },
          }}
        />

        {/* Bardolph between them, a hand held out low to each: "offer nothing here" */}
        <Person
          at={BARDOLPH}
          scale={1.16}
          pose={{
            look: 'bardolph',
            mouth: 'open',
            far: {
              pts: [
                [-2, -128],
                [-16, -108],
                [-34, -106],
              ],
              hand: 'open',
              deg: 184,
              thumb: 1,
              size: 16,
              spread: 20,
            },
            near: {
              pts: [
                [5, -128],
                [19, -108],
                [37, -106],
              ],
              hand: 'open',
              deg: -4,
              thumb: -1,
              size: 16,
              spread: 20,
            },
          }}
        />

        {/* Pistol squaring up to Nym: chin high, a fist on his hip, a hand on his hilt */}
        <Person
          at={PISTOL}
          scale={1.22}
          flip
          pose={{
            look: 'pistol',
            head: { rot: -7 },
            mouth: 'open',
            brow: 'frown',
            far: {
              pts: [
                [-3, -130],
                [-20, -110],
                [-6, -92],
              ],
            },
            near: {
              pts: [
                [4, -130],
                [14, -106],
                [9, -86],
              ],
              hand: 'grip',
              deg: 112,
            },
          }}
        />

        {/* the Hostess, turned to her husband, a hand at her breast: "The King has kill'd his heart" */}
        <Person
          at={HOSTESS}
          scale={1.2}
          flip
          pose={{
            look: 'hostess',
            head: { rot: 10 },
            eye: 'down',
            brow: 'sorrow',
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
                [6, -100],
                [15, -108],
              ],
              hand: 'open',
              deg: -100,
              thumb: -1,
              size: 13.5,
              spread: 16,
            },
          }}
        />

        {/* the Boy, run out of the house: "you must come to my master" */}
        <Person
          at={BOY}
          scale={1.2}
          flip
          pose={{
            look: 'boy',
            mouth: 'open',
            far: {
              pts: [
                [-3, -128],
                [-16, -116],
                [-32, -122],
              ],
              hand: 'point',
              deg: 192,
              thumb: -1,
            },
            near: {
              pts: [
                [4, -128],
                [15, -108],
                [30, -106],
              ],
              hand: 'open',
              deg: -8,
              thumb: -1,
            },
          }}
        />
      </g>
    </>
  )
}

export const oldFriendsNewQuarrels: LinocutArt = {
  width: W,
  height: H,
  Draw: OldFriendsNewQuarrels,
}
