import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { bill, CutFigure, Person, type Pose } from './people'

/**
 * Act 4, Scene 2: "The examination", the twelfth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "A Prison." It is the day of the wedding (the Sexton reports that "Prince
 *   John is this morning secretly stolen away"), so daylight comes in at a
 *   barred window high in the stone wall and falls across the floor.
 * - "Enter Dogberry, Verges, and Sexton, in gowns; and the Watch, with Conrade
 *   and Borachio." VERGES: "O! a stool and a cushion for the sexton." Then the
 *   Sexton, having got to the truth, goes ahead to Leonato ("I will go before
 *   and show him their examination. [Exit.]"). So the Sexton is not drawn:
 *   his stool stands empty by the open door he has just gone out by, the
 *   passage beyond it lit, and his cushion is the spot colour, the one thing
 *   in the room the eye goes to, because the joke is who is not sitting on it.
 * - DOGBERRY: "Come, let them be opinioned." VERGES: "Let them be in the
 *   hands—" CONRADE: "Off, coxcomb!" So Verges, old, small and stooped, with
 *   his short white beard (./people.tsx), holds the cord he has just tied
 *   round Conrade's wrists behind his back, and a watchman holds Borachio's
 *   cord in one hand and his bill in the other ("have a care that your bills
 *   be not stolen", 3.3).
 * - CONRADE: "Away! you are an ass; you are an ass." So Conrade, in his soft
 *   flat bonnet, leans forward at Dogberry, his chin thrust out. Borachio, whose
 *   confession the Watch overheard, hangs his head.
 * - DOGBERRY: "God's my life! where's the sexton? let him write down the
 *   Prince's officer coxcomb." And: "O that he were here to write me down an
 *   ass!" So Dogberry, stout in his gown ("one that hath two gowns"), stands in
 *   the light from the window with his head thrown back in outrage, and holds
 *   out his open hand at the empty stool.
 *
 * The people are drawn from ./people.tsx, as in every panel of this play.
 * Nothing is taken from a film or stage production. Seeds: 12101 (the wall),
 * 12102 (the floor).
 */

const W = 860
const H = 340
const FLOOR = 254
/** The barred window high in the wall, and the door the Sexton has gone out by. */
const WIN = { x0: 386, x1: 446, y0: 34, y1: 92 }
const DOOR = { x0: 52, x1: 132, top: 104 }
/** Where the shaft of light from the window reaches the floor. */
const SHAFT = { x0: 222, x1: 330 }

/** Dogberry, turned to the empty stool, his open hand held out at it, his head thrown back. */
const DOGBERRY: Pose = {
  look: 'dogberry',
  head: { at: [4, -160], rot: -14 },
  far: {
    pts: [
      [-6, -130],
      [-9, -104],
      [-6, -82],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [6, -130],
      [26, -114],
      [48, -108],
    ],
    hand: 'open',
    deg: 22,
    thumb: -1,
    spread: 14,
  },
}

/** Conrade, facing Dogberry's back, leaning in to jeer, his hands pulled behind him. */
const CONRADE: Pose = {
  look: 'conrade',
  head: { at: [6, -159], rot: -8 },
  far: {
    pts: [
      [-3, -132],
      [-14, -108],
      [-22, -92],
    ],
    hand: 'none',
  },
  near: {
    pts: [
      [4, -132],
      [-10, -110],
      [-20, -94],
    ],
    hand: 'none',
  },
  legs: {
    far: [
      [-3, -70],
      [-12, -36],
      [-20, -3],
    ],
    near: [
      [3, -70],
      [10, -36],
      [14, -3],
    ],
  },
}

/** Verges, stooped, holding the cord that binds Conrade's wrists behind him. */
const VERGES: Pose = {
  look: 'verges',
  head: { at: [8, -154], rot: 16 },
  far: {
    pts: [
      [-3, -128],
      [10, -108],
      [26, -100],
    ],
    hand: 'mitt',
    deg: 0,
  },
  near: {
    pts: [
      [4, -128],
      [16, -106],
      [32, -96],
    ],
    hand: 'mitt',
    deg: 10,
  },
}

/** Borachio, bound, his head hung. */
const BORACHIO: Pose = {
  look: 'borachio',
  eye: 'down',
  head: { at: [6, -158], rot: 22 },
  far: {
    pts: [
      [-3, -132],
      [-8, -108],
      [-12, -92],
    ],
    hand: 'none',
  },
  near: {
    pts: [
      [4, -132],
      [-4, -108],
      [-12, -94],
    ],
    hand: 'none',
  },
}

/** The watchman holding Borachio, his bill upright in his far hand. */
const WATCHMAN: Pose = {
  look: 'watchman',
  head: { at: [3, -160], rot: 4 },
  far: {
    pts: [
      [-3, -132],
      [14, -110],
      [36, -116],
    ],
    hand: 'mitt',
    deg: -84,
  },
  near: {
    pts: [
      [4, -132],
      [18, -112],
      [34, -104],
    ],
    hand: 'mitt',
    deg: 0,
  },
}

/** The cords, in the scene's own coordinates: each from the prisoner's bound wrists to the hand that holds it. */
const CORDS = 'M462 221Q502 236 540 226M665 221Q684 222 703 210'

type Marks = { wall: string; blocks: string; floor: string; shaft: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(12101)
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot(x - 416, (y - 64) * 1.1) / 190) * 0.8,
      clamp(1 - Math.hypot(x - 92, (y - 190) * 0.8) / 140) * 0.55,
      0.05,
    )
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: FLOOR - 2 }, light, {
    spacing: 6,
    len: [12, 44],
    gap: [6, 18],
    max: 3,
  })
  // The joints of the great stone blocks, cut in paper.
  let blocks = ''
  for (let row = 0, y = 28; y < FLOOR - 6; row++, y += 40) {
    blocks += gouge(-4, y, W + 4, y + between(r, -1, 1), 1)
    for (let x = (row % 2) * 60 + between(r, 0, 24); x < W; x += between(r, 100, 140))
      blocks += gouge(x, y + 3, x + between(r, -1, 1), y + 37, 0.85)
  }
  // Flagstones, in ink with paper joints.
  const f = rng(12102)
  let floor = ''
  for (let y = FLOOR + 10; y < H; y += 12 + (y - FLOOR) * 0.25) {
    floor += gouge(-10, y, W + 10, y + between(f, -1, 1), 0.9 + (y - FLOOR) * 0.02)
    for (let x = between(f, 0, 60); x < W; x += between(f, 70, 130))
      floor += gouge(x, y + 1, x - 4, y + 10 + (y - FLOOR) * 0.2, 0.8)
  }
  // The shaft of daylight from the window, falling across to the floor,
  // cut as parallel wedges that widen as they fall.
  let shaft = ''
  for (let k = 0; k < 10; k++) {
    const t = k / 9
    const x0 = WIN.x0 + 4 + t * (WIN.x1 - WIN.x0 - 8)
    const x1 = SHAFT.x0 + t * (SHAFT.x1 - SHAFT.x0)
    shaft += wedge(x0, WIN.y1 + 4, x1, FLOOR + 36, 1.2, 4.4)
  }
  cached = { wall, blocks, floor, shaft }
  return cached
}

function TheExamination({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-exam-wall`
  const r = (DOOR.x1 - DOOR.x0) / 2
  const doorPath = `M${DOOR.x0} ${FLOOR}V${DOOR.top + r}A${r} ${r} 0 0 1 ${DOOR.x1} ${DOOR.top + r}V${FLOOR}Z`
  return (
    <g className="lc-push" style={timing({ origin: [300, 200], push: 1.03 })}>
      <defs>
        <clipPath id={clip}>
          <path d={`M0 0H${W}V${H}H0Z`} />
        </clipPath>
      </defs>
      <path d={m.wall} fill={PAPER} />
      <path d={m.blocks} fill={PAPER} />
      <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
      <path d={m.floor} fill={PAPER} />
      <path d={`M0 ${FLOOR}H${W}`} stroke={PAPER} strokeWidth={LINE.bold} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.shaft} fill={PAPER} />
      </g>

      {/* the barred window */}
      <rect
        x={WIN.x0 - 6}
        y={WIN.y0 - 6}
        width={WIN.x1 - WIN.x0 + 12}
        height={WIN.y1 - WIN.y0 + 12}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} fill={PAPER} />
      <path
        d={`M${WIN.x0 + 15} ${WIN.y0}V${WIN.y1}M${WIN.x0 + 30} ${WIN.y0}V${WIN.y1}M${WIN.x0 + 45} ${WIN.y0}V${WIN.y1}M${WIN.x0} ${(WIN.y0 + WIN.y1) / 2}H${WIN.x1}`}
        stroke={INK}
        strokeWidth={4.4}
      />

      {/* the door the Sexton has gone out by, standing open on a lit passage */}
      <path d={doorPath} fill={PAPER} stroke={INK} strokeWidth={5} />
      <path
        d={`M${DOOR.x0 + 8} ${n(FLOOR - 40)}H${DOOR.x1 - 8}M${DOOR.x0 + 20} ${FLOOR - 40}V${FLOOR}`}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path
        d={`M${DOOR.x1 + 3} ${DOOR.top + 30}L${DOOR.x1 + 38} ${DOOR.top + 12}V${FLOOR + 14}L${DOOR.x1 + 3} ${FLOOR}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={
          gouge(DOOR.x1 + 14, DOOR.top + 30, DOOR.x1 + 14, FLOOR + 2, 1.1) +
          gouge(DOOR.x1 + 26, DOOR.top + 24, DOOR.x1 + 26, FLOOR + 6, 1.1)
        }
        fill={PAPER}
      />
      {/* the light from the passage, falling in across the floor */}
      <path
        d={`M${DOOR.x0} ${FLOOR}H${DOOR.x1}L${DOOR.x1 + 30} ${H}H${DOOR.x0 - 20}Z`}
        fill={PAPER}
      />

      {/* the Sexton's stool and cushion, empty */}
      <g stroke={PAPER} strokeWidth={8} strokeLinecap="round" fill="none">
        <path d="M168 276L162 322M202 276L208 322M164 306H206" />
      </g>
      <g stroke={INK} strokeWidth={4.6} strokeLinecap="round" fill="none">
        <path d="M168 276L162 322M202 276L208 322M164 306H206" />
      </g>
      <rect
        x={154}
        y={268}
        width={62}
        height={9}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d="M157 268C157 257 168 253 185 253C202 253 213 257 213 268Z"
        fill={RED}
        stroke={INK}
        strokeWidth={1.6}
      />
      <path d="M170 258Q185 255 200 258" fill="none" stroke={INK} strokeWidth={1} />

      <Person pose={DOGBERRY} at={[300, 322]} scale={1.14} flip />
      {/* the cord from Verges' hands to Conrade's wrists */}
      {/* the cords: Conrade's wrists to Verges' hands, Borachio's to the watchman's */}
      <g fill="none" strokeLinecap="round">
        <path d={CORDS} stroke={PAPER} strokeWidth={4.4} />
        <path d={CORDS} stroke={INK} strokeWidth={1.8} />
      </g>
      {/* Conrade leans in at Dogberry's back, his chin thrust out */}
      <g transform="rotate(-7 446 322)">
        <Person pose={CONRADE} at={[446, 322]} scale={1.1} flip />
      </g>
      <Person pose={VERGES} at={[580, 322]} scale={1.1} flip />
      <Person pose={BORACHIO} at={[652, 322]} scale={1.1} flip>
        {/* the cord round his wrists, behind his back */}
        <path d="M-16 -96C-10 -90 -4 -92 -2 -98" fill="none" stroke={PAPER} strokeWidth={2} />
      </Person>
      <CutFigure parts={bill([710, 322], [714, 92])} />
      <Person pose={WATCHMAN} at={[752, 322]} scale={1.1} flip />
    </g>
  )
}

export const theExamination: LinocutArt = { width: W, height: H, Draw: TheExamination }
