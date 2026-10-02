import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Doorway,
  Floor,
  FLOOR,
  H,
  W,
  keep,
  roomMarks,
  shadowPool,
  type Light,
} from './acts-3-4-rooms'
import { flower } from './ophelia-mad-laertes-in-arms'
import { Person, rapier } from './people'

/**
 * Act 4, Scene 7: "The plot, and a drowning", the sixteenth moment in the
 * guide's timeline. The moment is two things one after the other, and the
 * panel is cut as one block with two pictures, read left to right as the
 * scene runs: the room where the King and Laertes plot, at the instant the
 * Queen comes in with her news; and the place she tells of. Every detail is
 * from the scene in the held edition (src/data/full-texts/hamlet.ts, Project
 * Gutenberg #1524):
 *
 * - "Another room in the Castle." The stone and the floor are the castle's,
 *   from ./acts-3-4-rooms.tsx. The play gives no hour; the room is lit from
 *   the passage beyond its door, as "Sent to England" lights its room, so the
 *   doorway the Queen comes through is the bright place in the picture.
 * - The plot. KING: "you may choose A sword unbated, and in a pass of
 *   practice, Requite him for your father." LAERTES: "I will do't. And for
 *   that purpose I'll anoint my sword ... I'll touch my point With this
 *   contagion". So Laertes, in the feathered cap and short cloak he wears in
 *   "Ophelia mad, Laertes in arms", has his sword drawn, held low at his
 *   side with its point to the floor. (Held across his hands, as if he were
 *   looking at its point, it pointed at the Queen in the doorway and read as
 *   a threat to her.) The King's poisoned cup ("A chalice for the nonce") is
 *   only planned in this scene, so no cup is drawn.
 * - "Enter Queen." KING: "How now, sweet Queen?" QUEEN: "One woe doth tread
 *   upon another's heel, So fast they follow. Your sister's drown'd,
 *   Laertes." So the Queen stands in the lit doorway, her hand at her
 *   breast, and Laertes and the King have turned to her. LAERTES: "Drown'd!
 *   O, where?" So his eyes are wide and his mouth open.
 * - The place. "There is a willow grows aslant a brook, That shows his hoary
 *   leaves in the glassy stream. There with fantastic garlands did she make
 *   Of crow-flowers, nettles, daisies, and long purples ... There on the
 *   pendant boughs her coronet weeds Clamb'ring to hang, an envious sliver
 *   broke, When down her weedy trophies and herself Fell in the weeping
 *   brook." So the second picture is the willow leaning out over a still
 *   stream, its pale leaves on its hanging boughs, one bough broken and
 *   hanging down, garlands still on the boughs, and flowers floating on the
 *   water below. It fades in after the room, as the Queen tells it.
 * - SAFEGUARDING. Ophelia's death is told, never shown: she is not in the
 *   picture, in the water, under it or on the bank, and nothing of her
 *   clothes is drawn. Only the flowers she made fell with her, and they are
 *   the spot colour: what the moment is about. The ones afloat are cut as
 *   "Ophelia mad, Laertes in arms" cuts her flowers, five petals round a
 *   paper heart, so that nobody can take them for anything else. (They were
 *   first plain red dots on the water, and on the brook where she drowned a
 *   red dot reads at a glance as a drop of blood. Reviewed 2 October 2026.)
 *   The garlands still on the boughs are cut in paper, as her daisies: they
 *   were red too, and at phone width their blossoms shrank to red specks
 *   running down the broken bough into the water. Changed the same day.
 *
 * WHY TWO PICTURES. The scene is set in a room and its second half is told,
 * and the panel's brief allows the willow and the garlands with nobody in
 * them. Seen through a window of the room, the brook would have been put by
 * the castle, where the play does not put it; so it is a picture of its own,
 * beside the room, with a gutter cut between them.
 *
 * Nothing is taken from a film, a stage production or a painting. Seeds:
 * 1601 (the room), 1602 (the passage), 1603 (the sky over the brook), 1604
 * (the water and the reflection), 1605 (the willow's boughs and leaves).
 */

/** Where the room's picture ends and the brook's begins: the gutter between them. */
const SPLIT = 508
const GUTTER = 18
/** The brook's picture starts here. */
const BX = SPLIT + GUTTER

const DOOR = { x0: 386, x1: 466, top: 86 }
const DOOR_R = (DOOR.x1 - DOOR.x0) / 2
/** Where the room's light comes from: the passage beyond the door. */
const SOURCE: Pt = [426, 180]
/** The light from the passage thrown across the floor, to the gutter. */
const SPILL = `M${DOOR.x0 + 2} ${FLOOR}L${DOOR.x1 - 2} ${FLOOR}L${SPLIT} 318L${SPLIT} ${H}L300 ${H}Z`

const light: Light = (x, y) =>
  Math.max(
    Math.min(1, clamp(1 - Math.hypot((x - SOURCE[0]) * 0.75, (y - SOURCE[1]) * 1.2) / 520) ** 1.4),
    0.07,
  )

/** The brook: the far bank's edge and the water below it. */
const BANK = 214
const WATER = 222

type Marks = {
  room: ReturnType<typeof roomMarks>
  passage: string
  sky: string
  water: string
  reflection: string
  boughs: string
  leaves: string
  bank: string
}

/** The top of the willow's crown, where its boughs rise from. */
const CROWN: Pt = [738, 80]
/** How many boughs the crown is cut from. */
const BOUGHS = 24

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const inDoor = (x: number, y: number) => x > DOOR.x0 - 14 && x < DOOR.x1 + 14 && y > DOOR.top - 14
  const full = roomMarks(1601, light, (x, y) => x > SPLIT + 2 || inDoor(x, y))
  // The floor is cut across the whole block; keep only what is left of the gutter.
  const behind = (x: number) => x > SPLIT + 4
  const room = {
    wall: full.wall,
    joints: keep(full.joints, behind),
    flags: keep(full.flags, behind),
  }
  // The passage beyond the door: its flags and the foot of its far wall.
  const r = rng(1602)
  let passage = ''
  for (let k = 0, y = FLOOR - 4; y > FLOOR - 40; k++, y -= 5 + k * 0.6) {
    let x = DOOR.x0 + between(r, 0, 10)
    while (x < DOOR.x1 - 6) {
      const len = between(r, 10, 24)
      passage += gouge(
        x,
        y,
        Math.min(x + len, DOOR.x1 - 4),
        y + between(r, -0.3, 0.3),
        1.1 - k * 0.12,
      )
      x += len + between(r, 6, 14)
    }
  }

  // The day over the brook: a pale sky, a few long thin lines.
  const s = rng(1603)
  let sky = ''
  for (let y = 10; y < BANK - 8; y += 9) {
    let x = BX + between(s, -30, 0)
    while (x < W) {
      const len = between(s, 50, 140)
      const D = clamp(0.62 - y / 300)
      if (s() < 0.2 + D * 0.7) sky += gouge(x, y, x + len, y + between(s, -0.4, 0.4), 0.5 + D * 1.6)
      x += len + between(s, 20, 60)
    }
  }
  // The far bank: a dark line of turf and reeds.
  let bank = `M${BX} ${WATER}L${BX} ${BANK + 2}`
  for (let x = BX; x <= W; x += 6) bank += `L${x} ${n(BANK + Math.sin(x / 23) * 2.2)}`
  bank += `L${W} ${WATER}Z`
  for (let x = BX + 4; x < W; x += between(s, 7, 14))
    bank += `M${n(x - 1.4)} ${BANK + 1}L${n(x + between(s, -3, 3))} ${n(BANK - between(s, 6, 12))}L${n(x + 1.4)} ${BANK + 1}Z`

  // The glassy stream: still water, a few long ripples, closer near the banks.
  const w = rng(1604)
  let water = ''
  for (let y = WATER + 4; y < H; y += 5.6 + (y - WATER) * 0.06) {
    const t = (y - WATER) / (H - WATER)
    let x = BX + between(w, -20, 0)
    while (x < W) {
      const len = between(w, 34, 100)
      if (w() < 0.5 - t * 0.2)
        water += gouge(x, y, x + len, y + between(w, -0.3, 0.3), 0.6 + t * 0.9)
      x += len + between(w, 14, 40)
    }
  }
  // The willow's crown is cut from its boughs, as a weeping willow grows:
  // each rises from the top of the trunk, arches outward and falls to a
  // ragged tip over the water. The outer boughs reach furthest and hang
  // lowest. Their leaves are cut in paper down the falling part, more of
  // them on the side the day comes from: "his hoary leaves".
  const l = rng(1605)
  let boughs = ''
  let leaves = ''
  const tips: Pt[] = []
  for (let k = 0; k < BOUGHS; k++) {
    const t = k / (BOUGHS - 1) - 0.5
    const spread = Math.abs(t)
    const start: Pt = [CROWN[0] + t * 34, CROWN[1] + 8 + spread * 14]
    const rise: Pt = [CROWN[0] + t * 150, CROWN[1] - 34 + spread * 40]
    const fall: Pt = [CROWN[0] + t * 236 + between(l, -6, 6), CROWN[1] + 40 + spread * 20]
    const tip: Pt = [
      CROWN[0] + t * 250 + between(l, -8, 8),
      186 + spread * 70 + between(l, -14, 14),
    ]
    const pts: Pt[] = []
    for (let i = 0; i <= 12; i++) {
      const u = i / 12
      const a = (1 - u) ** 3
      const b = 3 * (1 - u) ** 2 * u
      const c = 3 * (1 - u) * u ** 2
      const d = u ** 3
      pts.push([
        a * start[0] + b * rise[0] + c * fall[0] + d * tip[0],
        a * start[1] + b * rise[1] + c * fall[1] + d * tip[1],
      ])
    }
    boughs += ribbon(pts, between(l, 8, 11), 0.5, false)
    tips.push(tip)
    const lit = clamp(0.8 - t)
    for (let i = 4; i < 12; i++) {
      if (l() > 0.45 + lit * 0.5) continue
      const [x, y] = pts[i]
      const side = i % 2 ? 1 : -1
      leaves += gouge(x, y, x + side * between(l, 4.5, 7), y + between(l, 3.5, 6), 1)
    }
    if (t < 0.15) leaves += gouge(pts[2][0], pts[2][1] + 1.6, pts[5][0], pts[5][1] + 1.6, 0.7, -0.6)
  }
  // "shows his hoary leaves in the glassy stream": under the boughs' tips,
  // their reflection, short level strokes broken by the ripples.
  let reflection = ''
  tips.forEach(([x], k) => {
    if (k % 2) return
    for (let y = WATER + 8, i = 0; i < 5; i++, y += between(w, 6, 9))
      reflection += gouge(
        x - 4 + i * 0.4,
        y,
        x + 4 - i * 0.4,
        y + between(w, -0.3, 0.3),
        1 - i * 0.12,
      )
  })
  cached = { room, passage, sky, water, reflection, boughs, leaves, bank }
  return cached
}

/** The willow's trunk, leaning from the near bank out over the water into its crown. */
const TRUNK =
  'M544 340C548 316 560 296 578 276C596 256 618 236 638 214C660 190 688 150 712 112C720 100 728 92 736 88L744 94C738 100 732 110 726 122C708 156 684 196 660 226C640 252 616 276 600 300C592 312 590 326 592 340Z'
/** A knot on the trunk and the root where it meets the bank. */
const ROOT = 'M572 312C580 316 588 322 594 330L586 332C582 326 578 320 572 316Z'
/** The bark: cuts in paper down the trunk. */
const BARK = [
  [562, 326, 606, 268],
  [574, 324, 626, 256],
  [632, 222, 690, 154],
  [646, 214, 702, 146],
]
/** The near bank the willow grows from, in the corner. */
const NEAR_BANK = `M${BX} 300C548 296 570 300 600 306C620 312 636 324 646 340H${BX}Z`

/**
 * The broken bough: "an envious sliver broke". It leaves the trunk, snaps,
 * and its outer end hangs down towards the water.
 */
const BOUGH = 'M616 232C628 230 640 228 652 228L653 234C641 234 630 236 619 238Z'
const SLIVER = 'M651 229L656 228L668 256L674 282L668 283L661 258Z'

/** A garland: blossoms along a loop that sags between two points. */
function garland(a: Pt, b: Pt, sag: number, k: number, s = 1) {
  let d = ''
  const hearts: Pt[] = []
  for (let i = 0; i <= k; i++) {
    const t = i / k
    const x = a[0] + (b[0] - a[0]) * t
    const y = a[1] + (b[1] - a[1]) * t + Math.sin(t * Math.PI) * sag
    const r = 2.5 * s
    d += `M${n(x - r)} ${n(y)}a${n(r)} ${n(r)} 0 1 0 ${n(2 * r)} 0a${n(r)} ${n(r)} 0 1 0 ${n(-2 * r)} 0`
    hearts.push([x, y])
  }
  return { d, hearts }
}
const GARLANDS = [
  garland([716, 214], [734, 220], 12, 6),
  garland([790, 222], [808, 226], 11, 5),
  garland([662, 252], [672, 262], 9, 4),
]
/** The flowers that fell, floating on the stream, each with a ripple under it. */
const FLOATING: Pt[] = [
  [682, 300],
  [702, 313],
  [721, 301],
  [740, 317],
  [664, 323],
]
const FLOATING_FLOWERS = FLOATING.map(([x, y]) => flower(x, y, 1.5))

function ThePlotAndADrowning({ uid }: ArtProps) {
  const m = marks()
  const roomClip = `${uid}-room`
  const brookClip = `${uid}-brook`
  const spill = `${uid}-spill`
  return (
    <>
      <defs>
        <clipPath id={roomClip}>
          <rect x={0} y={0} width={SPLIT} height={H} />
        </clipPath>
        <clipPath id={brookClip}>
          <rect x={BX} y={0} width={W - BX} height={H} />
        </clipPath>
        <clipPath id={spill}>
          <path d={SPILL} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 200], push: 1.03 })}>
        {/* ── the room ── */}
        <g clipPath={`url(#${roomClip})`}>
          <path d={m.room.wall} fill={PAPER} />
          <Floor marks={m.room} />
          <path d={SPILL} fill={PAPER} />
          <g clipPath={`url(#${spill})`}>
            <path d={m.room.joints} fill={INK} />
          </g>
          <Doorway x0={DOOR.x0} x1={DOOR.x1} top={DOOR.top} />
          {/* the lit passage beyond the door */}
          <path
            d={`M${DOOR.x0 + 1} ${FLOOR}V${n(DOOR.top + DOOR_R)}A${n(DOOR_R - 1)} ${n(DOOR_R - 1)} 0 0 1 ${DOOR.x1 - 1} ${n(DOOR.top + DOOR_R)}V${FLOOR}Z`}
            fill={PAPER}
          />
          <path d={m.passage} fill={INK} />
          <path d={shadowPool(120, 328, 48, 4) + shadowPool(246, 328, 46, 4)} fill={INK} />

          {/* the King, turned to the Queen: "How now, sweet Queen?" */}
          <Person
            at={[118, 326]}
            scale={1.2}
            pose={{
              look: 'claudius',
              head: { rot: -2 },
              far: {
                pts: [
                  [-4, -130],
                  [-8, -104],
                  [-2, -86],
                ],
              },
              near: {
                pts: [
                  [5, -128],
                  [14, -106],
                  [16, -118],
                ],
              },
            }}
          />
          {/* Laertes, his drawn sword low at his side: "I'll anoint my sword" */}
          <Person
            at={[244, 326]}
            scale={1.2}
            pose={{
              look: 'laertes',
              cloak: 4,
              eye: 'wide',
              mouth: 'open',
              far: {
                pts: [
                  [-4, -130],
                  [-8, -104],
                  [-2, -86],
                ],
              },
              near: {
                pts: [
                  [5, -128],
                  [12, -104],
                  [18, -86],
                ],
                hand: 'grip',
              },
            }}
          >
            <path d={rapier([19, -82], 100, 74)} fill={PAPER} stroke={INK} strokeWidth={0.9} />
          </Person>
          {/* the Queen in the lit doorway: "Your sister's drown'd, Laertes." */}
          <Person
            at={[428, 298]}
            scale={1.12}
            flip
            pose={{
              look: 'gertrude',
              brow: 'sorrow',
              head: { rot: 4 },
              far: {
                pts: [
                  [-4, -126],
                  [-4, -104],
                  [4, -88],
                ],
              },
              near: {
                pts: [
                  [5, -124],
                  [14, -104],
                  [10, -118],
                ],
                hand: 'open',
                deg: -140,
              },
            }}
          />
        </g>

        {/* ── the gutter between the two pictures ── */}
        <rect x={SPLIT} y={-10} width={GUTTER} height={H + 20} fill={PAPER} />
        <path
          d={`M${SPLIT + 2} -10V${H + 10}M${BX - 2} -10V${H + 10}`}
          stroke={INK}
          strokeWidth={LINE.frame}
        />

        {/* ── the willow aslant the brook, as the Queen tells it, fading up
            from the bare sheet ── */}
        <rect x={BX} y={0} width={W - BX} height={H} fill={PAPER} />
        <g
          clipPath={`url(#${brookClip})`}
          className="lc-fade-in"
          style={timing({ delay: 0.9, dur: 1.4 })}
        >
          <rect x={BX} y={0} width={W - BX} height={H} fill={PAPER} />
          <path d={m.sky} fill={INK} />
          <path d={m.bank} fill={INK} />
          <path d={m.water} fill={INK} />
          <path d={m.reflection} fill={INK} />
          <path d={NEAR_BANK} fill={INK} />
          {/* the flowers that fell, afloat, each with its ripple */}
          <path
            d={FLOATING.map(
              ([x, y]) => `M${n(x - 11)} ${n(y + 5)}Q${n(x)} ${n(y + 9)} ${n(x + 11)} ${n(y + 5)}`,
            ).join('')}
            fill="none"
            stroke={INK}
            strokeWidth={1}
          />
          <path
            d={FLOATING_FLOWERS.map((f) => f.petals).join('')}
            fill={RED}
            stroke={INK}
            strokeWidth={0.7}
          />
          <path d={FLOATING_FLOWERS.map((f) => f.heart).join('')} fill={PAPER} />
          {/* the tree: the trunk, its hanging boughs falling over it, then the broken bough */}
          <path
            d={TRUNK + ROOT}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path d={BARK.map(([a, b, c, d]) => gouge(a, b, c, d, 1.1, 0.6)).join('')} fill={PAPER} />
          <path d={m.boughs} fill={PAPER} stroke={PAPER} strokeWidth={3} strokeLinejoin="round" />
          <path d={m.boughs} fill={INK} />
          <path d={m.leaves} fill={PAPER} />
          <path
            d={BOUGH + SLIVER}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          {/* the garlands still hanging on the boughs, paper daisies (see above) */}
          {GARLANDS.map((g, i) => (
            <path key={i} d={g.d} fill={PAPER} stroke={INK} strokeWidth={1} />
          ))}
          <path
            d={GARLANDS.flatMap((g) => g.hearts)
              .map(([x, y]) => `M${n(x - 0.6)} ${n(y)}h1.2`)
              .join('')}
            stroke={INK}
            strokeWidth={1.1}
          />
        </g>
      </g>
    </>
  )
}

export const thePlotAndADrowning: LinocutArt = { width: W, height: H, Draw: ThePlotAndADrowning }
