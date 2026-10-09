import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, type P, type Pose } from './people'
import { floorMarks, wallMarks } from './palace'

/**
 * Act 2, Scene 2: "The traitors at Southampton", the fifth moment in the
 * guide's timeline. "Southampton. A council-chamber." Every detail is from
 * the scene in the held edition (src/data/full-texts/henry-v.ts, Project
 * Gutenberg #1521):
 *
 * - "Now sits the wind fair, and we will aboard" and "We will aboard
 *   tonight"; the Chorus to Act 2 has the King "set from London" and the
 *   scene "transported, gentles, to Southampton". So the chamber's window
 *   opens on the harbour, where a ship rides with its sail set and bellied by
 *   the fair wind, another further out, and from the near ship's masthead
 *   flies the banner of Saint George, the English army's ("England and Saint
 *   George", 3.1), streaming in the same wind. Its red cross is the one thing
 *   in the spot colour, cut big enough at phone width to stay a flag, and
 *   kept far from every face and hand.
 * - "Then, Richard Earl of Cambridge, there is yours; There yours, Lord Scroop
 *   of Masham; and, sir knight, Grey of Northumberland, this same is yours.
 *   Read them, and know I know your worthiness." Then the King asks "What see
 *   you in those papers that you lose So much complexion?", and says "Look
 *   ye, how they change" and "Their cheeks are paper." That is the moment
 *   drawn, and the last is the quotation. The three stand before the King,
 *   each with his paper open in his hands, and each face is cut in paper with
 *   its features in ink and its eye wide: the kit's `pale` (./people.tsx),
 *   made for this line. With motion, the faces print dark first and then
 *   go pale, as the King says they "change".
 * - Cambridge, nearest the King, is the first to speak: "I do confess my
 *   fault, And do submit me to your Highness' mercy." So he has lowered his
 *   paper and pressed his other hand to his breast. Scroop, "the man that was
 *   his bed-fellow" (Exeter), holds his paper close and bows his head over
 *   it. Grey holds his out before him and leans back from it. How the three
 *   look, and why (none is described), is in ./people.tsx.
 * - The King faces them, upright, in his gown and crown, one open hand held
 *   out low from a bent arm towards them, asking what they see; his brow is
 *   drawn down. "Their faults are open. Arrest them to the answer of the
 *   law", and Exeter arrests them. So Exeter, grey-bearded, stands behind
 *   them with his hand on the hilt of his sword, still in its scabbard, and
 *   Westmorland beside him: the lords who "shall be apprehended by and by",
 *   says Exeter at the start of the scene, knew. No blade is drawn, and
 *   nothing of the sentence ("Get you therefore hence, Poor miserable
 *   wretches, to your death") is shown or quoted.
 * - The chamber is stone, lit from the harbour window on the left, so the
 *   wall darkens towards the right, where the three pale faces stand out
 *   against it.
 *
 * Nothing is taken from a film or stage production. Seeds: 501 (wall), 502
 * (floor), 503 (sky), 504 (sea).
 */

const W = 860
const H = 340
const FLOOR_Y = 238

/**
 * The window on the harbour: two pointed lights side by side under one
 * pointed head, a stone mullion between them and a quatrefoil carved in the
 * stone above. `x0` to `x1` is the whole opening; `sill` its foot. (The
 * stone first had a round light cut through it, which read as a moon.)
 */
const WIN = { x0: 26, x1: 194, spring: 92, apex: 34, sill: 200 }
const LIGHTS: [number, number][] = [
  [30, 106],
  [114, 190],
]
const LIGHT_SPRING = 98
const LIGHT_APEX = 60
/** The quatrefoil: four lobes round (110, 51). */
const QUATREFOIL = [
  [110, 46],
  [115, 51],
  [110, 56],
  [105, 51],
]
  .map(([x, y]) => `M${x - 4} ${y}a4 4 0 1 0 8 0a4 4 0 1 0 -8 0Z`)
  .join('')
/** The horizon. */
const SEA_Y = 150

const HENRY: P = [256, 304]
const CAMBRIDGE: P = [404, 304]
const SCROOP: P = [492, 304]
const GREY: P = [580, 304]
const EXETER: P = [694, 300]
const WESTMORLAND: P = [776, 298]

/** The window's light falls across the wall from the left. */
const light = (x: number, y: number) => {
  const win = clamp(1 - Math.hypot((x - 110) * 0.55, (y - 120) * 1.1) / 330)
  return Math.max(win * 0.92, 0.05)
}

/** A pointed head over a span from `x0` to `x1`, springing at `spring`, rising to `apex`. */
const pointed = (x0: number, x1: number, spring: number, apex: number, foot: number) => {
  const m = (x0 + x1) / 2
  const k = (x1 - x0) * 0.26
  return (
    `M${n(x0)} ${n(foot)}V${n(spring)}C${n(x0)} ${n(spring - (spring - apex) * 0.62)} ${n(m - k)} ${n(apex + 3)} ${n(m)} ${n(apex)}` +
    `C${n(m + k)} ${n(apex + 3)} ${n(x1)} ${n(spring - (spring - apex) * 0.62)} ${n(x1)} ${n(spring)}V${n(foot)}Z`
  )
}
/** The two lights: what the view is seen through. */
const GLASS = LIGHTS.map(([a, b]) => pointed(a, b, LIGHT_SPRING, LIGHT_APEX, WIN.sill)).join('')

type Marks = {
  wall: { cuts: string; joints: string }
  floor: string
  shadows: string
  sky: string
  sea: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The sky over the harbour: paper, with a few long streaks of cloud.
  const sky = gougeField(
    rng(503),
    { x0: WIN.x0, x1: WIN.x1, y0: WIN.apex + 6, y1: SEA_Y - 8 },
    (_x, y) => clamp(0.22 - (y - WIN.apex) / 500, 0.02, 0.3),
    { spacing: 9, len: [20, 60], gap: [20, 50], max: 1.4 },
  )
  // The sea: ink, with the light on the water cut in short paper waves.
  const r = rng(504)
  let sea = ''
  for (let y = SEA_Y + 4; y < WIN.sill; y += 5.2) {
    let x = WIN.x0 + between(r, -10, 0)
    while (x < WIN.x1) {
      const len = between(r, 6, 16)
      sea += gouge(
        x,
        y + between(r, -0.6, 0.6),
        x + len,
        y + between(r, -0.6, 0.6),
        0.5 + ((y - SEA_Y) / 50) * 0.9,
      )
      x += len + between(r, 4, 12)
    }
  }
  const shadows =
    footShadow(HENRY[0], HENRY[1], 30) +
    footShadow(CAMBRIDGE[0], CAMBRIDGE[1], 28) +
    footShadow(SCROOP[0], SCROOP[1], 28) +
    footShadow(GREY[0], GREY[1], 28) +
    footShadow(EXETER[0], EXETER[1], 28) +
    footShadow(WESTMORLAND[0], WESTMORLAND[1], 26)
  cached = {
    wall: wallMarks(501, light),
    floor: floorMarks(502, [470, 116]),
    shadows,
    sky,
    sea,
  }
  return cached
}

/**
 * A ship of the year, a cog: a round hull with a castle at either end, one
 * mast, one square sail bellied by the wind, its stays, and at the masthead
 * Saint George's banner (or a plain pennon) streaming out on the same wind.
 * Drawn in its own frame, the waterline at y 0 and the mast at x 0; the wind
 * blows from the right.
 */
const SHIP = {
  hull: 'M-46 -18C-44 -24 -42 -28 -38 -32L-26 -26C-10 -24 12 -24 26 -26L38 -30L44 -20C40 -8 30 0 16 1L-28 1C-38 0 -45 -8 -46 -18Z',
  castles: 'M-42 -30L-42 -44L-24 -44L-24 -26ZM26 -27L26 -40L42 -40L41 -29Z',
  planks: 'M-40 -18C-20 -14 18 -14 40 -20M-34 -9C-14 -5 14 -5 32 -10',
  sail: 'M-26 -112L26 -112L24 -52L-24 -52C-34 -70 -35 -96 -26 -112Z',
  seams: 'M-12 -111V-53M0 -111V-53M12 -111V-53',
  yards: 'M-29 -113.4H29V-110.6H-29ZM-26 -53.4H26V-50.6H-26Z',
  banner: 'M0 -146C-14 -149 -32 -142 -54 -146C-49 -137 -49 -130 -54 -121C-32 -117 -14 -124 0 -119Z',
  cross: 'M-23 -145.4V-119.6M0 -132.4C-14 -135.4 -32 -129 -50 -133.4',
  pennon: 'M0 -146L-24 -141L0 -136Z',
}

function Ship({ at, s, banner }: { at: P; s: number; banner?: boolean }) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(s)})`}>
      {/* the stays, fine lines from the masthead to bow and stern */}
      <path d="M0 -144L-40 -44M0 -144L40 -40" stroke={INK} strokeWidth={LINE.fine} fill="none" />
      <path d="M-1.8 -147H1.8V-24H-1.8Z" fill={INK} />
      <path d={SHIP.sail} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={SHIP.seams} stroke={INK} strokeWidth={LINE.hairline} fill="none" />
      <path d={SHIP.yards} fill={INK} />
      <path d={SHIP.castles} fill={INK} stroke={PAPER} strokeWidth={1.1} />
      <path d={SHIP.hull} fill={INK} stroke={PAPER} strokeWidth={1.3} strokeLinejoin="round" />
      <path d={SHIP.planks} stroke={PAPER} strokeWidth={1.1} fill="none" />
      {banner ? (
        <>
          <path d={SHIP.banner} fill={PAPER} />
          <path d={SHIP.cross} stroke={RED} strokeWidth={7} fill="none" />
          <path d={SHIP.banner} fill="none" stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
        </>
      ) : (
        <path d={SHIP.pennon} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      )}
    </g>
  )
}

/** An open paper held in the hands, its lines of writing in ink. */
function Paper({ at, rot = 0, s = 1 }: { at: P; rot?: number; s?: number }) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) rotate(${n(rot)}) scale(${n(s)})`}>
      <path
        d="M-11 -15L11 -14L11 14L-11 15Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.3}
        strokeLinejoin="round"
      />
      <path
        d="M-7.4 -9.6H7M-7.4 -5H7.4M-7.4 -0.4H5.4M-7.4 4.2H7.2M-7.4 8.8H2.6"
        stroke={INK}
        strokeWidth={1.1}
        fill="none"
      />
    </g>
  )
}

/** The three, as the King's papers find them: each pale, each with his eye wide. */
const TRAITORS: { at: P; pose: Pose; paper: { at: P; rot: number } }[] = [
  {
    // Cambridge: his paper lowered, his other hand pressed to his breast
    at: CAMBRIDGE,
    pose: {
      look: 'cambridge',
      pale: true,
      eye: 'wide',
      head: { rot: 4 },
      far: {
        pts: [
          [-3, -128],
          [-2, -102],
          [8, -84],
        ],
        hand: 'grip',
        deg: 40,
      },
      near: {
        pts: [
          [3, -128],
          [6, -103],
          [17, -110],
        ],
        hand: 'open',
        deg: -104,
        thumb: -1,
        size: 15,
        spread: 16,
      },
    },
    paper: { at: [16, -76], rot: 30 },
  },
  {
    // Scroop: his paper held close, his head bowed over it
    at: SCROOP,
    pose: {
      look: 'scroop',
      pale: true,
      eye: 'wide',
      head: { rot: 16 },
      far: {
        pts: [
          [-3, -128],
          [6, -106],
          [20, -112],
        ],
        hand: 'none',
      },
      near: {
        pts: [
          [5, -128],
          [14, -104],
          [24, -110],
        ],
        hand: 'grip',
        deg: -50,
      },
    },
    paper: { at: [30, -122], rot: -14 },
  },
  {
    // Grey: his paper held out before him, leaning back from it
    at: GREY,
    pose: {
      look: 'grey',
      pale: true,
      eye: 'wide',
      head: { at: [-2, -160], rot: -8 },
      body: { neck: [-4, -137], hip: [0, -70] },
      far: {
        pts: [
          [-6, -128],
          [2, -108],
          [22, -106],
        ],
        hand: 'none',
      },
      near: {
        pts: [
          [-1, -128],
          [12, -108],
          [30, -110],
        ],
        hand: 'grip',
        deg: -40,
      },
    },
    paper: { at: [38, -118], rot: -8 },
  },
]

function TraitorsAtSouthampton({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-view`
  const head = pointed(WIN.x0, WIN.x1, WIN.spring, WIN.apex, WIN.sill)
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={GLASS} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 170], push: 1.03 })}>
        {/* the stone of the council-chamber, lit from the window */}
        <path d={m.wall.cuts} fill={PAPER} />
        <path d={m.wall.joints} fill={PAPER} />

        {/* the floor */}
        <rect x={0} y={FLOOR_Y} width={W} height={H - FLOOR_Y} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shadows} fill={INK} />
        <path d={gouge(0, FLOOR_Y + 2, W, FLOOR_Y + 2, 1.6)} fill={INK} />

        {/* the window on the harbour: its deep reveal and its stone, then the view through its lights */}
        <path
          d={pointed(WIN.x0 - 12, WIN.x1 + 12, WIN.spring, WIN.apex - 12, WIN.sill + 8)}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        <path d={head} fill="none" stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={GLASS} fill={PAPER} />
        <g clipPath={`url(#${clip})`}>
          <path d={m.sky} fill={INK} />
          {/* the far shore, low across the water */}
          <path
            d={`M${WIN.x0} ${SEA_Y + 1}L${WIN.x0 + 40} ${SEA_Y - 5}L${WIN.x0 + 92} ${SEA_Y - 2}L${WIN.x1 - 30} ${SEA_Y - 8}L${WIN.x1} ${SEA_Y - 5}V${SEA_Y + 2}H${WIN.x0}Z`}
            fill={INK}
          />
          <rect x={WIN.x0} y={SEA_Y} width={WIN.x1 - WIN.x0} height={WIN.sill - SEA_Y} fill={INK} />
          <path d={m.sea} fill={PAPER} />
          {/* another ship further out, in the right light, and the near one in the left */}
          <Ship at={[154, SEA_Y + 8]} s={0.42} />
          <Ship at={[84, SEA_Y + 36]} s={0.8} banner />
        </g>
        <path d={GLASS} fill="none" stroke={INK} strokeWidth={2.6} strokeLinejoin="round" />
        <path d={QUATREFOIL} fill="none" stroke={PAPER} strokeWidth={LINE.carve} />
        {/* the sill */}
        <path
          d={`M${WIN.x0 - 20} ${WIN.sill + 8}H${WIN.x1 + 20}V${WIN.sill + 15}H${WIN.x0 - 20}Z`}
          fill={PAPER}
        />
        <path
          d={`M${WIN.x0 - 20} ${WIN.sill + 15}H${WIN.x1 + 20}`}
          stroke={INK}
          strokeWidth={1.6}
        />

        {/* Westmorland and Exeter, behind the three, Exeter's hand on his hilt */}
        <Person
          pose={{
            look: 'lord',
            variant: 1,
            far: {
              pts: [
                [-3, -128],
                [-6, -104],
                [-2, -82],
              ],
            },
            near: {
              pts: [
                [4, -128],
                [8, -104],
                [12, -82],
              ],
            },
          }}
          at={WESTMORLAND}
          scale={1.12}
          flip
        />
        <Person
          pose={{
            look: 'exeter',
            brow: 'frown',
            far: {
              pts: [
                [-3, -128],
                [-6, -104],
                [-4, -82],
              ],
            },
            near: {
              pts: [
                [4, -128],
                [14, -104],
                [9, -84],
              ],
              hand: 'grip',
              deg: 112,
            },
          }}
          at={EXETER}
          scale={1.16}
          flip
        />

        {/* the three, their papers in their hands, their cheeks gone pale */}
        {TRAITORS.map(({ at, pose, paper }, i) => (
          <g key={pose.look}>
            {/* as they begin to read: the face in ink, as the kit cuts it */}
            <Person pose={{ ...pose, pale: false, eye: 'open' }} at={at} scale={1.2} flip>
              <Paper at={paper.at} rot={paper.rot} s={1.05} />
            </Person>
            {/* "Look ye, how they change": the same man, his cheeks gone to paper,
                printed over the first. The finished print is this one. */}
            <g className="lc-fade-in" style={timing({ delay: 1.3 + i * 0.3, dur: 1.1 })}>
              <Person pose={pose} at={at} scale={1.2} flip>
                <Paper at={paper.at} rot={paper.rot} s={1.05} />
              </Person>
            </g>
          </g>
        ))}

        {/* the King, facing them, one open hand held out low: "What see you in those papers?" */}
        <Person
          pose={{
            look: 'henry',
            brow: 'frown',
            far: {
              pts: [
                [-3, -128],
                [-5, -104],
                [-2, -84],
              ],
            },
            near: {
              pts: [
                [4, -128],
                [16, -106],
                [34, -102],
              ],
              hand: 'open',
              deg: -12,
              thumb: -1,
              size: 17,
              spread: 20,
            },
          }}
          at={HENRY}
          scale={1.24}
        />
      </g>
    </>
  )
}

export const traitorsAtSouthampton: LinocutArt = {
  width: W,
  height: H,
  Draw: TraitorsAtSouthampton,
}
