import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GRIP_HAND,
  HEAD_UTTERSON,
  TOP_HAT,
  TOP_HAT_BAND,
  UTTERSON_CUTS,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'
import { COLLAR, UTTERSON_HAIR, floorBoards } from './investigation-kit'

/**
 * Chapter 6, "Incident of Dr. Lanyon": "Lanyon's shock", the eighth moment
 * in the guide's timeline. The moment runs on to Lanyon's death and the
 * sealed envelope; the panel is the visit, where the quotation is. Every
 * detail is from the text:
 *
 * - "the sixth he betook himself to Dr. Lanyon's. There at least he was not
 *   denied admittance; but when he came in, he was shocked at the change".
 *   It is night (Utterson had Guest to dine "the fifth night"). So Utterson
 *   has just come in at the door on the left, his hat still in his hand, the
 *   lit hall behind him.
 * - "He had his death-warrant written legibly upon his face. The rosy man had
 *   grown pale; his flesh had fallen away; he was visibly balder and older".
 *   He is the man of Chapter 2, "a hearty, healthy, dapper, red-faced
 *   gentleman, with a shock of hair prematurely white", undone: so his face
 *   is lit pale by the lamp and cut gaunt, a hollow under the cheekbone, the
 *   white hair gone thin to a fringe round a bare crown, the body thin in its
 *   coat. There is no red in his face: the rosiness is what has gone.
 * - "a look in the eye and quality of manner that seemed to testify to some
 *   deep-seated terror of the mind". So his eye is wide, a ring with the
 *   pupil set in it, in a dark hollow.
 * - "But Lanyon's face changed, and he held up a trembling hand. “I wish to
 *   see or hear no more of Dr. Jekyll,”". So he sits in his chair and holds
 *   up one open hand before him, the elbow bent, the palm towards Utterson
 *   and the fingers apart, with small cut lines beside it for the trembling.
 * - Lanyon is a doctor "at home in Cavendish Square, that citadel of
 *   medicine" (Chapter 2), so books line the wall behind him. The lamp that
 *   lights the room is not in the text; a room at night has one.
 *
 * Utterson is the shared figure (./people.tsx), bareheaded, his top hat in
 * his hand. Lanyon's dress is not described, so it is a plain dark coat.
 * Nothing is taken from a film or stage production.
 *
 * The spot colour is the lamp's flame. Seeds: 801 (the wall), 802 (the
 * floor), 803 (the lamplight), 804 (the books), 805 (the hall).
 */

const W = 860
const H = 340
const FLOOR = 240
/** The lamp's flame. */
const FLAME: P = [438, 186]

type Marks = {
  wall: string
  floor: string
  rays: string
  books: string
  hall: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - FLAME[0]) * 0.8, (y - FLAME[1]) * 1.1) / 290), 0.04)
  const wall = gougeField(rng(801), { x0: 150, x1: 560, y0: 2, y1: FLOOR }, light)
  const floor = floorBoards(rng(802), W, H, FLOOR, [440, 30], 30)
  const lamp = rays(rng(803), FLAME[0], FLAME[1], { from: 18, to: 150, every: 6.5, width: 3 })
  // Books on four shelves, their spines cut in paper, lit from the lamp side.
  const b = rng(804)
  let books = ''
  for (const top of [26, 80, 134, 188]) {
    let x = 566
    while (x < 850) {
      const w = between(b, 4, 9)
      const h = between(b, 32, 46)
      const L = clamp(1 - (x - 566) / 380)
      if (b() < 0.86)
        books += `M${x.toFixed(1)} ${(top + 50 - h).toFixed(1)}h${(w - 1.6).toFixed(1)}v${(h - 1).toFixed(1)}h${(-(w - 1.6)).toFixed(1)}Z`
      if (L > 0.2 && b() < 0.7)
        books += gouge(x + w / 2 - 0.8, top + 50 - h + 5, x + w / 2 - 0.8, top + 46, 0.4 + L * 0.5)
      x += w + between(b, 0, 1.2)
    }
  }
  const hall = gougeField(rng(805), { x0: 60, x1: 150, y0: 50, y1: FLOOR }, () => 0.92, {
    spacing: 5,
    len: [10, 40],
  })
  cached = { wall, floor, rays: lamp, books, hall }
  return cached
}

// ── Utterson, just come in, his hat in his hand ─────────────────────────────

const UTT_HEAD = { d: HEAD_UTTERSON, at: [236, 124] as P, rot: 2, scale: 1.2 }
const UTT_ARM: P[] = [
  [232, 164],
  [244, 200],
  [262, 190],
]
const UTTERSON: Part[] = [
  ...gent({
    facing: 1,
    neck: [228, 154],
    hip: [222, 234],
    head: UTT_HEAD,
    near: {
      arm: UTT_ARM,
      leg: [
        [224, 234],
        [234, 278],
        [240, 318],
      ],
    },
    far: {
      arm: [
        [220, 164],
        [212, 204],
        [214, 236],
      ],
      leg: [
        [220, 234],
        [214, 278],
        [206, 318],
      ],
    },
    body: { width: 32, hem: 56, flare: 8 },
  }),
  ...GRIP_HAND.map((q) => ({ ...q, t: handAt(UTT_ARM, 1, { parts: GRIP_HAND, rot: -30 }) })),
]
const UTT_CUTS =
  gouge(214, 176, 206, 288, 1, 0.8) +
  gouge(228, 190, 230, 288, 1, 0.2) +
  gouge(238, 214, 248, 286, 0.8, -0.6)
/** His top hat, held by the brim against his coat, crown down. */
const HAT_AT = 'translate(266 186) rotate(176) scale(0.9)'

// ── Lanyon, in his chair, facing left ───────────────────────────────────────

/**
 * Lanyon's head in profile facing left, centred on (0, 0), about 40 high: the
 * head of the shared frame, the cheek drawn in and the jaw left bony.
 */
const LAN_HEAD =
  'M8.5 22C10 15.5 13.5 9 13.5 0C13.5 -10.5 6 -18 -3 -18C-10 -18 -13.8 -13 -14 -7.5L-14.8 -3.8L-20.5 3.2C-20.8 4.6 -19.6 5.2 -18 5.2L-15 5.4L-15.4 7.8L-13.8 9L-14.8 11.2L-12.8 12.4C-12.6 16.6 -10.4 19.4 -6.6 19.6L-5.4 23Z'
/** What is left of the white hair: a thin fringe round the back of a bare crown. */
const LAN_FRINGE =
  'M2 -12.5C7 -13 11.5 -9.5 13 -4C14 1 13 6 11 9.5L7 8.5C8.5 5 9 0 8 -4C7 -8 5 -10.5 2 -10.5Z'
const LAN_HEAD_AT: P = [634, 136]
const LAN_HEAD_T = `translate(${LAN_HEAD_AT[0]} ${LAN_HEAD_AT[1]}) rotate(-4) scale(1.22)`

const LAN_NEAR_ARM: P[] = [
  [628, 176],
  [606, 216],
  [592, 188],
]
const LANYON: Part[] = [
  // the far leg
  { d: 'M648 246L604 252L604 312', w: 9 },
  { d: 'M597 305L609 306C614 307 616 310 616 313L592 313C592 309 593 306 597 305Z' },
  // a thin body in a dark coat, sitting back in the chair
  {
    d: 'M636 160C627 162 622 170 621 184L620 226C620 236 626 246 640 248L660 248L656 208C656 184 652 166 644 161Z',
  },
  { d: 'M632 150L638 164', w: 9 },
  // the near leg
  { d: 'M640 240L594 246L588 312', w: 9.5 },
  { d: 'M581 305L593 306C598 307 600 310 600 313L576 313C576 309 577 306 581 305Z' },
  // the near arm, bent at the elbow, the forearm raised
  { d: 'M628 176L606 216L592 188', w: 8.5, sep: 1.4 },
]
const LANYON_CUTS =
  gouge(630, 178, 626, 236, 0.9, 0.6) +
  gouge(640, 184, 646, 244, 0.8, -0.4) +
  gouge(608, 248, 596, 250, 0.6)

/**
 * An open hand, palm towards us, fingers up and spread apart, in its own frame
 * with the wrist at (0, 0): lit by the lamp, so cut in paper.
 */
const OPEN_HAND =
  'M-4 0C-4.8 -2.6 -5.2 -4.6 -5.8 -6.8L-9.6 -10C-10.8 -11 -9.8 -12.8 -8.2 -12L-5.2 -10L-5.8 -18C-5.8 -19.6 -3.6 -19.6 -3.4 -18L-2.6 -12.2L-2.4 -20.6C-2.4 -22.2 -0.2 -22.2 0 -20.6L0.6 -12.2L2.2 -19.2C2.4 -20.8 4.6 -20.6 4.4 -19L3.4 -11.6L5.8 -16.6C6.2 -18 8.2 -17.6 7.8 -16L5.6 -8.8C5 -5 4.4 -2.6 3.8 0Z'
const HAND_AT = 'translate(592 188) rotate(-10) scale(1.35)'
/** "a trembling hand": short cut strokes beside the fingers, in the hand's frame. */
const TREMBLE =
  'M-12.6 -15.4L-14.6 -17.4M-13.2 -11.2L-15.6 -11.6M9.4 -19.4L11.2 -21.6M10.4 -14.6L12.8 -15.4M-2 -24.2L-2.6 -26.8M2.8 -23.6L3.8 -26'

function LanyonsShock({ uid }: ArtProps) {
  const m = marks()
  const hall = `${uid}-hall`
  const shelves = `${uid}-shelves`
  const ut = headAt(1, UTT_HEAD.at, UTT_HEAD.rot, UTT_HEAD.scale)
  return (
    <>
      <defs>
        <clipPath id={hall}>
          <rect x={150} y={52} width={74} height={FLOOR - 52} />
        </clipPath>
        <clipPath id={shelves}>
          <rect x={562} y={20} width={300} height={FLOOR - 20} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [520, 170], push: 1.03 })}>
        {/* the room, dark but for the lamp */}
        <path d={m.wall} fill={PAPER} />
        <path d={m.rays} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the open door, the lit hall beyond it */}
        <rect x={140} y={42} width={94} height={FLOOR - 42} fill={PAPER} />
        <rect x={150} y={52} width={74} height={FLOOR - 52} fill={INK} />
        <g clipPath={`url(#${hall})`}>
          <rect x={150} y={52} width={74} height={FLOOR - 52} fill={PAPER} />
          <path d="M150 196H224M150 205H224" stroke={INK} strokeWidth={1.1} />
          <path d="M196 70H222V150H196Z" fill="none" stroke={INK} strokeWidth={1.3} />
        </g>
        {/* the door itself, swung back against the wall */}
        <path d="M150 52L108 64V236L150 240Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M142 70L116 77V142L142 138ZM142 154L116 157V222L142 226Z"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.2}
        />

        {/* the doctor's books */}
        <rect x={560} y={16} width={W - 560} height={FLOOR - 16} fill={INK} />
        <g clipPath={`url(#${shelves})`}>
          <path d={m.books} fill={PAPER} />
          <path d={m.books} fill="none" stroke={INK} strokeWidth={0.6} />
        </g>
        <g fill={PAPER}>
          {[74, 128, 182, 236].map((y) => (
            <rect key={y} x={560} y={y} width={W - 560} height={4} />
          ))}
          <rect x={560} y={16} width={4} height={FLOOR - 16} />
        </g>
        <rect x={0} y={FLOOR - 2} width={W} height={3} fill={PAPER} />

        {/* the lamp on its table between them */}
        <path
          d="M438 244V304M424 314L438 300L452 314"
          stroke={PAPER}
          strokeWidth={8}
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M438 244V304M424 314L438 300L452 314"
          stroke={INK}
          strokeWidth={5}
          strokeLinecap="round"
          fill="none"
        />
        <ellipse
          cx={438}
          cy={242}
          rx={40}
          ry={7}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M424 236C424 226 430 220 438 220C446 220 452 226 452 236Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path d="M432 220V208H444V220Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <path
          d="M433 208C430 196 431 180 434 168V160H442V168C445 180 446 196 443 208Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.3}
        />
        <circle
          className="lc-glow"
          cx={FLAME[0]}
          cy={FLAME[1]}
          r={9}
          fill="none"
          stroke={RED}
          strokeWidth={1.2}
        />
        <path
          className="lc-flicker"
          d={`M${FLAME[0]} ${FLAME[1] + 9}C${FLAME[0] - 4.5} ${FLAME[1] + 5} ${FLAME[0] - 4} ${FLAME[1] - 1} ${FLAME[0]} ${FLAME[1] - 9}C${FLAME[0] + 4} ${FLAME[1] - 1} ${FLAME[0] + 4.5} ${FLAME[1] + 5} ${FLAME[0]} ${FLAME[1] + 9}Z`}
          fill={RED}
        />

        {/* Lanyon's chair */}
        <path
          d="M690 252V120Q690 100 670 100Q650 100 650 120V210H584Q572 210 572 222V252Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M682 252V314M580 252V314" stroke={INK} strokeWidth={6} />
        <rect x={572} y={248} width={120} height={10} fill={INK} stroke={PAPER} strokeWidth={1.2} />

        {/* Utterson, shocked at the change */}
        <Figure parts={UTTERSON} cuts={UTT_CUTS}>
          <g transform={ut}>
            <path d={UTTERSON_CUTS + UTTERSON_HAIR + COLLAR} fill={PAPER} />
          </g>
        </Figure>
        <g transform={HAT_AT}>
          <path
            d={TOP_HAT}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path d={TOP_HAT_BAND} fill={PAPER} />
        </g>

        {/* Lanyon, his hand held up */}
        <Figure parts={LANYON} cuts={LANYON_CUTS} />
        {/* his head, lit pale by the lamp: bare crown, thin white fringe, gaunt */}
        <g transform={LAN_HEAD_T}>
          <path d={LAN_HEAD} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
          <path d={LAN_FRINGE} fill={PAPER} stroke={INK} strokeWidth={1} />
          <path
            d="M4 -10.5C6 -7 7 -2 6.8 3M7 -11.5C9.6 -8 10.6 -3 10 4.5M9.8 -9.4C12 -6 12.4 -1 11.4 5"
            fill="none"
            stroke={INK}
            strokeWidth={0.7}
          />
          {/* the ear under the fringe */}
          <path
            d="M3.6 -2C6 -3.4 7.6 0 6.8 2.6C6.2 4.8 4 5 3.4 3.4"
            fill="none"
            stroke={INK}
            strokeWidth={1}
          />
          {/* the brow, the eye wide in its dark hollow */}
          <path d={gouge(-13.4, -8, -4, -9.2, 1.1, -0.3)} fill={INK} />
          <ellipse cx={-8.4} cy={-3.2} rx={4} ry={3} fill={INK} />
          <circle cx={-8.6} cy={-3.4} r={2.2} fill={PAPER} />
          <circle cx={-9.6} cy={-3.4} r={1} fill={INK} />
          {/* the hollow under the cheekbone, the lines of age, the set mouth */}
          <path d={gouge(-6.4, 2, -3.6, 13, 0.9, -1.2)} fill={INK} />
          <path
            d="M-14.4 5.8Q-12.4 8.8 -11.4 12M-11 -13.2L-4 -14.2M-10 -15.8L-5 -16.4"
            fill="none"
            stroke={INK}
            strokeWidth={0.8}
          />
          <path d="M-14.2 10.2L-10.6 10.8" stroke={INK} strokeWidth={1.1} />
        </g>
        {/* his collar, and the trembling hand, lit */}
        <path d="M624 158L634 160L632 168L624 166Z" fill={PAPER} />
        <g transform={HAND_AT}>
          <path d={OPEN_HAND} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
          <path d={TREMBLE} stroke={INK} strokeWidth={2.6} strokeLinecap="round" />
          <path d={TREMBLE} stroke={PAPER} strokeWidth={1.1} strokeLinecap="round" />
        </g>
      </g>
    </>
  )
}

export const lanyonsShock: LinocutArt = { width: W, height: H, Draw: LanyonsShock }
