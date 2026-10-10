import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  BROCKLEHURST_CUTS,
  BROCKLEHURST_HAIR,
  BROCKLEHURST_HAIR_CUTS,
  BROCKLEHURST_NECKCLOTH,
  BROCKLEHURST_TEETH,
  Figure,
  GIRL_INK_CUTS,
  HEAD_BROCKLEHURST,
  HEAD_GIRL,
  HEAD_TEMPLE,
  HOLD_HAND,
  JANE_GIRL_HAIR_COMBED,
  JANE_GIRL_HAIR_COMBED_CUTS,
  JaneGirl,
  LOOSE_HAND,
  TEMPLE_CURLS,
  TEMPLE_CURL_RINGS,
  TEMPLE_CUTS,
  TEMPLE_HAIR,
  TEMPLE_HAIR_CUTS,
  TUCKER,
  boot,
  gown,
  handAt,
  headAt,
  line,
  type P,
  type Part,
} from './people'

/**
 * Chapters 7 and 8: "The stool of shame", the fourth moment in the guide's
 * timeline. Every detail is from the held edition
 * (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. Brocklehurst presenting Jane to the school from the
 * stool: "Ladies," said he, turning to his family, "Miss Temple, teachers, and
 * children, you all see this girl?" The stool is a shaming, not a harm, and is
 * shown; nobody touches her.
 *
 * - "'Fetch that stool,' said Mr. Brocklehurst, pointing to a very high one
 *   from which a monitor had just risen"; "they had hoisted me up to the
 *   height of Mr. Brocklehurst's nose, that he was within a yard of me, and
 *   that a spread of shot orange and purple silk pelisses and a cloud of
 *   silvery plumage extended and waved below me". So the stool is tall and
 *   bare, Jane stands on it with her head level with his, he stands a yard
 *   off, and his family sit below her.
 * - "I felt their eyes directed like burning-glasses against my scorched
 *   skin". So her head is bowed and her eyes are down, her arms straight at
 *   her sides. She wears the Lowood dress of ./people.tsx: the frock made
 *   high, the tucker at the throat, the holland pocket at the waist, her hair
 *   combed back.
 * - The family: "they were splendidly attired in velvet, silk, and furs. The
 *   two younger of the trio (fine girls of sixteen and seventeen) had grey
 *   beaver hats, then in fashion, shaded with ostrich plumes, and from under
 *   the brim of this graceful head-dress fell a profusion of light tresses,
 *   elaborately curled; the elder lady was enveloped in a costly velvet shawl,
 *   trimmed with ermine, and she wore a false front of French curls";
 *   "conducted to seats of honour at the top of the room". So they sit at the
 *   left in a row: the two daughters in the spot colour, the silk he has just
 *   preached against, with white plumes curling over their hats and pale
 *   curls under the brims; their mother in a black velvet shawl edged with
 *   ermine (cut as white fur with black tips), a row of curls on her brow.
 *   Orange and purple are left to the words; a white frill at each daughter's
 *   throat keeps the red off her face.
 * - His sermon on dress came minutes before: "I wish these girls to be the
 *   children of Grace"; "Miss Temple, that girl's hair must be cut off
 *   entirely"; "my mission is to mortify in these girls the lusts of the
 *   flesh; to teach them to clothe themselves with shame-facedness and
 *   sobriety, not with braided hair and costly apparel". So the girls of the
 *   school, seated nearest us at the right, have plain combed hair and dark
 *   frocks, and look up at Jane.
 * - Miss Temple "gently assisted me to his very feet"; she is tall, with dark
 *   curls clustered at her temples and a gold watch at her girdle (Chapter
 *   5), and her face "naturally pale as marble, appeared to be assuming also
 *   the coldness and fixity of that material" (Chapter 7). So she stands
 *   straight beyond him, her hands folded, grave.
 * - Brocklehurst as ./people.tsx cuts him, the black column, "standing on the
 *   hearth with his hands behind his back" as he did when he came in, his
 *   head turned to his family as he speaks. He does not reach for her. A
 *   tall window behind him sets him off.
 *
 * Helen Burns, who comforts Jane when the visitors have gone, is not picked
 * out: she is one of the school at this moment, and the guide's words say
 * the rest.
 *
 * Seeds: 1401 (the wall), 1402 (the floor), 1403 (the plumes), 1404 (the
 * ermine).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const FLOOR = 250
/** The tall windows of the schoolroom. */
const WINDOWS = [
  { x0: 24, x1: 98 },
  { x0: 370, x1: 446 },
  { x0: 566, x1: 640 },
  { x0: 762, x1: 836 },
]
const WIN_Y0 = 30
const WIN_Y1 = 204

type Marks = {
  wall: string
  floor: string
  pools: string
  plumes: { shape: string; ribs: string }[]
  ermine: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const lightAt = (x: number, y: number) =>
    Math.max(
      ...WINDOWS.map(({ x0, x1 }) =>
        clamp(1 - Math.hypot((x - (x0 + x1) / 2) * 0.9, (y - 110) * 1.2) / 150),
      ),
      0.05,
    )
  const wall = gougeField(rng(1401), { x0: 0, x1: W, y0: 4, y1: FLOOR - 6 }, lightAt, {
    spacing: 6.5,
    len: [16, 56],
    gap: [6, 20],
    max: 3.6,
  })
  // A bare board floor, its joints running away from us.
  const r = rng(1402)
  let floor = ''
  for (let y = FLOOR + 6; y < H; y += 8 + (y - FLOOR) * 0.12) {
    let x = between(r, -40, 0)
    while (x < W) {
      const len = between(r, 60, 180)
      floor += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.5 + (y - FLOOR) * 0.02)
      x += len + between(r, 6, 20)
    }
  }
  let pools = ''
  for (let y = FLOOR + 1; y < FLOOR + 12; y += 3)
    pools += gouge(0, y, W, y, 2.2 - (y - FLOOR) * 0.16)
  const pool = (cx: number, cy: number, rx: number, ry: number) => {
    for (let y = cy - ry; y < cy + ry; y += 3.2) {
      const w = 1 - Math.abs(y - cy) / ry
      pools += gouge(cx - rx * w, y, cx + rx * w, y + 0.6, 0.6 + w * 2.2)
    }
  }
  pool(322, 320, 44, 6)
  pool(408, 318, 40, 6)
  pool(512, 318, 42, 6)
  pool(150, 308, 110, 7)
  // The ostrich plumes over the daughters' hats, in the head's frame: each
  // curls up from the back of the crown, over the top and down in front of
  // the brim ("shaded with ostrich plumes"), a paper ribbon with its rib and
  // its fronds cut in ink.
  const rp = rng(1403)
  const plume = (lift: number) => {
    const pts: Pt[] = [
      [-11, -24],
      [-8, -34 - lift],
      [0, -40 - lift],
      [10, -38 - lift],
      [18, -31],
      [22, -22],
      [21, -14],
    ]
    const shape = ribbon(pts, 11, 0.55)
    let ribs = 'M' + pts.map(([x, y]) => `${n(x)} ${n(y)}`).join('L')
    for (let i = 1; i < pts.length - 1; i++) {
      const [x, y] = pts[i]
      ribs += `M${n(x)} ${n(y)}l${n(between(rp, -3.4, -2))} ${n(between(rp, 1.6, 3))}M${n(x)} ${n(y)}l${n(between(rp, 2, 3.4))} ${n(between(rp, -3, -1.6))}`
    }
    return { shape, ribs }
  }
  const plumes = [plume(0), plume(2)]
  // Ermine: white fur along the shawl's edge, with the black tips of the
  // tails set along it.
  const re = rng(1404)
  let ermine = ''
  const band = (t: number): Pt => {
    const u = 1 - t
    const p: Pt[] = [
      [58, 248],
      [66, 256],
      [80, 262],
      [96, 262],
    ]
    return [
      u * u * u * p[0][0] + 3 * u * u * t * p[1][0] + 3 * u * t * t * p[2][0] + t * t * t * p[3][0],
      u * u * u * p[0][1] + 3 * u * u * t * p[1][1] + 3 * u * t * t * p[2][1] + t * t * t * p[3][1],
    ]
  }
  for (let k = 1; k < 8; k++) {
    const [x, y] = band(k / 8 + between(re, -0.02, 0.02))
    ermine += `M${n(x - 1.3)} ${n(y + 1.6)}L${n(x)} ${n(y - 1.8)}L${n(x + 1.3)} ${n(y + 1.6)}Z`
  }
  cached = { wall, floor, pools, plumes, ermine }
  return cached
}

// ── The family, seated at the left, facing right ────────────────────────────

/** A young lady's head: a smooth profile, a small nose a little upturned. */
const HEAD_LADY =
  'M-7 24C-9 19 -13.6 15 -14.6 6C-15.6 -9 -7 -19.4 3 -19.4C10.8 -19.4 14.8 -14.8 15 -9L15.2 -5.2L18.8 2.6L15.2 4.4L15.6 7.6L14.6 9L15.4 11.2C15.2 16 12.4 18.8 8 19.2L6 24Z'
/** Her features, cut in paper on the ink face. */
const LADY_CUTS =
  gouge(6, -7.4, 13.4, -7.4, 0.6) +
  'M7 -3.2Q10 -5.2 12.8 -3.4Q10 -1.8 7 -3.2Z' +
  gouge(10.4, 10, 14.4, 9.6, 0.45)
/** A grey beaver hat: a round crown, the brim wider at the front. In the head's frame. */
const BEAVER_HAT =
  'M-18 -9C-10 -12.6 6 -14 22 -9.6L22.4 -6.6C8 -10.6 -9 -9 -18 -6.4Z' +
  'M-11.6 -11.4L-10.6 -27C-6 -30.6 5 -30.6 9.6 -27L10.6 -12.2Z'
/** Its grey, cut as short paper strokes over the ink, and the band. */
const BEAVER_GREY =
  'M-8 -24l3 -2M-3 -25l3 -2M2 -25l3 -2M-8 -19l3 -2M-3 -20l3 -2M2 -20l3 -2M7 -20l2 -1.4'
const BEAVER_BAND = 'M-11 -14.4H10.8'
/** "a profusion of light tresses, elaborately curled", under the brim at the back. PAPER. */
const TRESSES =
  'M-8 -8C-12 -6 -14 -2 -13 2C-15 5 -15 9 -13 12C-14.6 15 -14 19 -11 21C-8.6 19 -9 15 -10.4 13C-8.4 10 -8.6 6 -10.6 3.6C-8.8 1 -8 -3 -5.6 -6Z' +
  'M-15.6 -6C-19 -3 -20.4 1 -19.6 5C-21 8 -20.6 12 -18.4 14.4C-16.4 12.6 -16.8 9 -18 7C-16.2 4.4 -16.4 0.6 -17.4 -1.6C-16 -3.6 -15 -5 -13.4 -6.6Z'
/** The ink rings of the curls. */
const TRESS_RINGS =
  'M-12.6 0.6a1.6 1.6 0 1 0 0.1 0M-12.4 9.4a1.6 1.6 0 1 0 0.1 0M-18.6 3.2a1.4 1.4 0 1 0 0.1 0M-18 10.6a1.4 1.4 0 1 0 0.1 0'
/** The white frill at the throat, in the head's frame. */
const FRILL =
  'M-7 22.4C-2 21 6 21 11.4 23.2C12.6 25 12.4 27.2 11 28.8C5 30 -2 29.6 -7.6 27.6C-8.6 26 -8.4 24 -7 22.4Z'

/** The pelisse of a seated daughter: shoulders to the floor, the lap forward. In panel units. */
function pelisse(x: number): string {
  return `M${x - 10} 206C${x - 4} 202 ${x + 10} 202 ${x + 15} 206L${x + 16} 226C${x + 26} 228 ${x + 36} 230 ${x + 40} 236C${x + 42} 256 ${x + 42} 280 ${x + 40} 304L${x - 14} 304C${x - 18} 270 ${x - 18} 240 ${x - 14} 216Z`
}

/** A daughter, seated, her head lifted towards the stool. */
function Daughter({ x, k }: { x: number; k: number }) {
  const t = headAt(1, [x + 2, 178], -12, 1)
  const m = marks()
  const arm: P[] = [
    [x + 2, 210],
    [x + 8, 232],
    [x + 20, 242],
  ]
  return (
    <g>
      {/* her chair */}
      <path
        d={`M${x - 26} 166L${x - 20} 166L${x - 14} 300L${x - 22} 300Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {/* her silk pelisse, under the head so that the head's paper edge keeps the red off her face */}
      <path d={pelisse(x)} fill={RED} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
      <Figure
        parts={[
          { d: `M${x + 34} 290L${x + 36} 302`, w: 7 },
          boot([x + 36, 304], 1, 0.8),
          { d: HEAD_LADY, t },
          { d: BEAVER_HAT, t },
        ]}
      >
        <path
          d={`M${x - 4} 214L${x - 8} 300M${x + 10} 238L${x + 6} 300M${x + 26} 240L${x + 24} 300`}
          stroke={INK}
          strokeWidth={1.3}
          fill="none"
        />
        <path d={FRILL} transform={t} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        <path d={LADY_CUTS} transform={t} fill={PAPER} />
        <path d={BEAVER_GREY} transform={t} fill="none" stroke={PAPER} strokeWidth={0.7} />
        <path d={BEAVER_BAND} transform={t} fill="none" stroke={PAPER} strokeWidth={1.3} />
        <path d={TRESSES} transform={t} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        <path d={TRESS_RINGS} transform={t} fill="none" stroke={INK} strokeWidth={0.7} />
        {/* her arm across her lap, the hand in it */}
        <path d={line(arm)} stroke={PAPER} strokeWidth={10} fill="none" strokeLinecap="round" />
        <path d={line(arm)} stroke={RED} strokeWidth={7.4} fill="none" strokeLinecap="round" />
        {/* a white kid glove, so the red of the sleeve stops short of the hand */}
        <Figure
          parts={LOOSE_HAND.map((q) => ({
            ...q,
            t: handAt(arm, 1, { parts: LOOSE_HAND, scale: 0.8, rot: 20 }),
            paper: true,
            edge: 0.9,
          }))}
          halo={0}
        />
        <path
          d={`M${x + 16} 236L${x + 19} 244`}
          stroke={PAPER}
          strokeWidth={3.4}
          strokeLinecap="round"
        />
      </Figure>
      {/* the plume, a cloud of silvery plumage, waving */}
      <g className="lc-fade-in" style={timing({ delay: 0.4 + k * 0.3, dur: 1.2 })}>
        <path d={m.plumes[k].shape} transform={t} fill={PAPER} stroke={INK} strokeWidth={0.9} />
        <path
          d={m.plumes[k].ribs}
          transform={t}
          fill="none"
          stroke={INK}
          strokeWidth={0.75}
          strokeLinecap="round"
        />
      </g>
    </g>
  )
}

/** Mrs Brocklehurst's head: an older face. */
const HEAD_ELDER =
  'M-8 25C-10 19 -14.6 15 -15.6 5C-16.6 -9 -8 -20 2.6 -20C10.6 -20 15 -15.4 15.2 -9.6L15.6 -5.6L20 3L15.8 4.8L16 7.6L14.8 9.2L16 11.6C16 16.6 13 19.6 8.4 20.2L6.4 25Z'
const ELDER_CUTS =
  gouge(6, -7.2, 13.6, -7, 0.65) +
  'M7.4 -3.2Q10.2 -4.8 13 -3.4Q10.2 -2.2 7.4 -3.2Z' +
  gouge(10.4, 10.6, 15, 10.4, 0.45) +
  gouge(4, 2, 7.6, 12, 0.45, 1.2)
/** Her dark hair and, on her brow, "a false front of French curls": paper rings. */
const ELDER_HAIR =
  'M15 -10.6C13.6 -18.6 7 -23 -0.6 -22.6C-11 -22 -18 -14 -18.2 -3.4C-18.4 3 -17 8.6 -14.4 13L-9.4 11C-11 6.4 -11.2 1.4 -10 -3C-8.4 -8.4 -3.4 -12 2.6 -12.6C7.6 -13.2 11.6 -12.4 15 -10.6Z'
const FRENCH_CURLS =
  'M10.6 -12.6a2.6 2.6 0 1 0 0.1 0M5.6 -13.6a2.6 2.6 0 1 0 0.1 0M0.6 -13a2.6 2.6 0 1 0 0.1 0M-4 -11a2.4 2.4 0 1 0 0.1 0M-7.8 -7.4a2.4 2.4 0 1 0 0.1 0'

/** Mrs Brocklehurst, seated, "enveloped in a costly velvet shawl, trimmed with ermine". */
const ELDER_T = headAt(1, [80, 178], -8, 1.02)
const SHAWL =
  'M62 198C70 192 86 192 94 198C104 210 112 230 114 252C108 262 96 266 84 264C72 262 60 256 52 246C52 228 56 210 62 198Z'
const ELDER_GOWN =
  'M56 240C70 250 92 256 114 252C122 262 124 280 122 304L52 304C48 284 50 262 56 240Z'

// ── Brocklehurst, the stool and Jane, Miss Temple ───────────────────────────

const BROCK_T = headAt(-1, [408, 52], -6, 1.08)
const BROCK_BODY =
  'M390 96C392 90 400 86 409 86C418 86 426 90 428 96L431 110L431 266L387 266L387 110Z'
/** His near arm bent back, the hand behind him: "his hands behind his back". */
const BROCK_ARM: P[] = [
  [393, 102],
  [396, 150],
  [418, 172],
]
const BROCK: Part[] = [
  { d: 'M402 266L400 312', w: 12 },
  { d: 'M417 266L420 312', w: 12 },
  boot([400, 314], -1, 1.5),
  boot([420, 314], -1, 1.5),
  { d: BROCK_BODY },
  { d: HEAD_BROCKLEHURST, t: BROCK_T },
  { d: BROCKLEHURST_HAIR, t: BROCK_T },
  { d: line(BROCK_ARM), w: 11, sep: 1.4 },
]
const BROCK_CUTS =
  [104, 122, 140, 158, 176, 194, 212, 230].map((y) => gouge(395, y, 398.4, y, 1.1)).join('') +
  gouge(426, 120, 427, 258, 0.8)

/** The very high stool. */
const STOOL = 'M292 190H350V198H292ZM298 198L288 318M344 198L354 318M296 266H346'

/** Jane on the stool, facing right, her head bowed, her arms straight at her sides. */
const JANE_POSE = {
  facing: 1 as const,
  neck: [319, 81] as P,
  waist: [319, 110] as P,
  hemY: 170,
  head: { at: [324, 60] as P, rot: 14, scale: 0.9 },
  frock: { shoulder: 21, waistW: 16, front: 17, back: 19 },
  arm: 7.4,
  leg: 8,
  shoe: 0.82,
  near: {
    arm: [
      [322, 88],
      [326, 112],
      [327, 136],
    ] as P[],
    leg: [
      [322, 128],
      [323, 158],
      [324, 186],
    ] as P[],
    hand: { parts: LOOSE_HAND, scale: 0.88 },
  },
  far: {
    arm: [
      [315, 89],
      [312, 113],
      [310, 136],
    ] as P[],
    leg: [
      [315, 128],
      [314, 158],
      [313, 186],
    ] as P[],
    hand: { parts: LOOSE_HAND, scale: 0.88 },
  },
}
/** The holland pocket tied at the front of her frock. */
const POCKET = 'M321 114L331 113L332 126Q327 130 321 127Z'
const POCKET_TIE = 'M314 112Q322 114 331 112'

/** Miss Temple, standing beyond him, facing left, her hands folded at her waist. */
const TEMPLE_T = headAt(-1, [514, 66], 0, 1)
const TEMPLE_NEAR: P[] = [
  [508, 110],
  [502, 136],
  [492, 148],
]
const TEMPLE_FAR: P[] = [
  [520, 110],
  [512, 138],
  [498, 150],
]
const TEMPLE: Part[] = [
  { d: line(TEMPLE_FAR), w: 8.5 },
  ...HOLD_HAND.map((q) => ({
    ...q,
    t: handAt(TEMPLE_FAR, -1, { parts: HOLD_HAND, scale: 0.95, rot: 20 }),
  })),
  { d: gown([514, 92], [514, 122], 314, -1, { shoulder: 26, waistW: 18, front: 24, back: 28 }) },
  { d: HEAD_TEMPLE, t: TEMPLE_T },
  { d: TEMPLE_HAIR, t: TEMPLE_T },
  { d: line(TEMPLE_NEAR), w: 8.5, sep: 1.4 },
  ...HOLD_HAND.map((q) => ({
    ...q,
    t: handAt(TEMPLE_NEAR, -1, { parts: HOLD_HAND, scale: 0.95, rot: -10 }),
  })),
]
/** The Spanish trimming of black velvet, cut as bands of paper round its edge. */
const TEMPLE_CUTS_BODY =
  gouge(492, 300, 540, 300, 1.2) +
  gouge(494, 292, 538, 292, 0.6) +
  gouge(506, 102, 522, 102, 0.9) +
  gouge(512, 126, 524, 300, 0.8, 1)

/**
 * The girls of the school, seated nearest us at the right: heads and
 * shoulders, cut off by the edge of the block, turned up towards Jane.
 */
const GIRLS: { x: number; rot: number }[] = [
  { x: 612, rot: 16 },
  { x: 684, rot: 12 },
  { x: 756, rot: 14 },
  { x: 828, rot: 10 },
]
function SchoolGirl({ x, rot }: { x: number; rot: number }) {
  const t = headAt(-1, [x, 268], rot, 1.32)
  const parts: Part[] = [
    {
      d: `M${x - 26} 346C${x - 26} 318 ${x - 18} 302 ${x - 4} 298L${x + 14} 298C${x + 28} 302 ${x + 34} 318 ${x + 34} 346Z`,
    },
    { d: HEAD_GIRL, t },
    { d: JANE_GIRL_HAIR_COMBED, t },
  ]
  return (
    <Figure parts={parts}>
      <path d={JANE_GIRL_HAIR_COMBED_CUTS} transform={t} fill={PAPER} />
      <path d={GIRL_INK_CUTS} transform={t} fill={PAPER} />
      <path d={TUCKER} transform={t} fill={PAPER} />
    </Figure>
  )
}

function StoolOfShame() {
  const m = marks()
  return (
    <>
      <g className="lc-push" style={timing({ origin: [330, 110], push: 1.03 })}>
        {/* the schoolroom wall, its tall windows, the floor */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 8} width={W} height={8} fill={PAPER} />
        <rect x={0} y={FLOOR - 5} width={W} height={1.4} fill={INK} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.pools} fill={INK} />
        {WINDOWS.map(({ x0, x1 }) => (
          <g key={x0}>
            <rect
              x={x0 - 6}
              y={WIN_Y0 - 6}
              width={x1 - x0 + 12}
              height={WIN_Y1 - WIN_Y0 + 12}
              fill={PAPER}
            />
            <rect x={x0} y={WIN_Y0} width={x1 - x0} height={WIN_Y1 - WIN_Y0} fill={INK} />
            <rect
              x={x0 + 4}
              y={WIN_Y0 + 4}
              width={x1 - x0 - 8}
              height={WIN_Y1 - WIN_Y0 - 8}
              fill={PAPER}
            />
            <path
              d={`M${(x0 + x1) / 2} ${WIN_Y0}V${WIN_Y1}M${x0} ${WIN_Y0 + 58}H${x1}M${x0} ${WIN_Y0 + 116}H${x1}`}
              stroke={INK}
              strokeWidth={3.6}
            />
            <path
              d={
                gouge(x0 + 8, WIN_Y1 - 12, x0 + 30, WIN_Y1 - 30, 0.8) +
                gouge(x1 - 26, WIN_Y0 + 40, x1 - 10, WIN_Y0 + 24, 0.7)
              }
              fill={INK}
            />
          </g>
        ))}

        {/* Mrs Brocklehurst */}
        <path
          d="M34 166L40 166L46 300L38 300Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <Figure
          parts={[
            { d: ELDER_GOWN },
            { d: 'M110 290L112 302', w: 7 },
            boot([112, 304], 1, 0.8),
            { d: HEAD_ELDER, t: ELDER_T },
            { d: ELDER_HAIR, t: ELDER_T },
            { d: SHAWL },
          ]}
          cuts={
            gouge(66, 204, 60, 240, 0.9, 1) +
            gouge(84, 204, 82, 250, 0.8) +
            gouge(100, 214, 106, 246, 0.8, -1)
          }
        >
          <path d={ELDER_CUTS} transform={ELDER_T} fill={PAPER} />
          <path d={FRENCH_CURLS} transform={ELDER_T} fill="none" stroke={PAPER} strokeWidth={1.4} />
          <path
            d="M58 248C66 256 80 262 96 262C104 262 110 258 114 252"
            fill="none"
            stroke={PAPER}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <path d={m.ermine} fill={INK} />
        </Figure>
        {/* the daughters, in silk pelisses and plumed beaver hats */}
        <Daughter x={148} k={0} />
        <Daughter x={222} k={1} />

        {/* the very high stool, and Jane on it */}
        <path d={STOOL} fill={INK} stroke={INK} strokeWidth={5} strokeLinecap="round" />
        <path d="M292 190H350" stroke={PAPER} strokeWidth={1.4} />
        <path d="M298 200L289 314M344 200L353 314" stroke={PAPER} strokeWidth={0.9} />
        <JaneGirl
          pose={JANE_POSE}
          dress="lowood"
          eye="down"
          mouth="shut"
          paperOver={POCKET}
          inkOver={POCKET_TIE}
        />

        {/* Brocklehurst, a yard off, his hands behind his back */}
        <Figure parts={BROCK} cuts={BROCK_CUTS}>
          <path d={BROCKLEHURST_HAIR_CUTS} transform={BROCK_T} fill={PAPER} />
          <path d={BROCKLEHURST_CUTS} transform={BROCK_T} fill={PAPER} />
          <path
            d={BROCKLEHURST_TEETH}
            transform={BROCK_T}
            fill="none"
            stroke={INK}
            strokeWidth={0.7}
          />
          <path d={BROCKLEHURST_NECKCLOTH} transform={BROCK_T} fill={PAPER} />
        </Figure>

        {/* Miss Temple */}
        <Figure parts={TEMPLE} cuts={TEMPLE_CUTS_BODY}>
          <path d={TEMPLE_HAIR_CUTS} transform={TEMPLE_T} fill={PAPER} />
          <path d={TEMPLE_CURLS} transform={TEMPLE_T} fill={INK} stroke={PAPER} strokeWidth={0.6} />
          <path
            d={TEMPLE_CURL_RINGS}
            transform={TEMPLE_T}
            fill="none"
            stroke={PAPER}
            strokeWidth={0.7}
          />
          <path d={TEMPLE_CUTS} transform={TEMPLE_T} fill={PAPER} />
          {/* "a gold watch ... shone at her girdle": a paper disc on its chain,
              at her high waist. FIXED 10 October 2026: the alt text named it
              and the print had left it out. */}
          <path d="M519 124Q521 130 520 136" fill="none" stroke={PAPER} strokeWidth={0.9} />
          <circle cx={520} cy={140} r={3.6} fill={PAPER} stroke={INK} strokeWidth={0.8} />
        </Figure>

        {/* the girls of the school, nearest us */}
        {GIRLS.map((g) => (
          <SchoolGirl key={g.x} x={g.x} rot={g.rot} />
        ))}
      </g>
    </>
  )
}

export const theStoolOfShame: LinocutArt = { width: W, height: H, Draw: StoolOfShame }
