import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  COLLAR,
  Figure,
  HEAD_HOLMES,
  HEAD_THADDEUS,
  HEAD_WATSON,
  HOLMES_CUTS,
  HOLMES_HAIR,
  HOLMES_PUPIL,
  HolmesHands,
  LONG_HAND,
  OPEN_HAND,
  THADDEUS_CAP,
  THADDEUS_CAP_BAND,
  THADDEUS_CAP_FUR,
  THADDEUS_FACE_CUTS,
  THADDEUS_LAPPET,
  THADDEUS_PUPIL,
  WATSON_CUTS,
  WATSON_HAIR,
  WATSON_PUPIL,
  gent,
  headAt,
  type P,
  type Part,
} from './people'

/**
 * Chapter 5, "The Tragedy of Pondicherry Lodge": "The locked room at
 * Pondicherry Lodge", the sixth moment in the guide's timeline. Every detail
 * is from the held edition:
 *
 * - "The third flight of stairs ended in a straight passage of some length,
 *   with a great picture in Indian tapestry upon the right of it and three
 *   doors upon the left." The passage is seen side on from the tapestry side,
 *   so the three doors are on the far wall, the first two back down the
 *   passage in the dark, and the tapestry is behind the reader.
 * - "The third door was that which we were seeking. Holmes knocked without
 *   receiving any answer ... It was locked on the inside, however, and by a
 *   broad and powerful bolt, as we could see when we set our lamp up against
 *   it." So the lamp stands on the boards at the foot of the third door, its
 *   flame the spot colour, and it is the only light in the passage.
 * - "The key being turned, however, the hole was not entirely closed.
 *   Sherlock Holmes bent down to it, and instantly rose again with a sharp
 *   intaking of the breath." / "Moonlight was streaming into the room". So
 *   the keyhole is the one bright mark on the dark door, and Holmes has just
 *   straightened up from it and turned to Watson, his head drawn back: "'There
 *   is something devilish in this, Watson,' said he, more moved than I had
 *   ever before seen him. 'What do you make of it?'" So his long white hand
 *   is held open towards the keyhole, for Watson to look for himself.
 * - "while we kept close at his heels": Watson steps up behind him, towards
 *   the door, to look for himself ("I stooped to the hole").
 * - "Thaddeus Sholto's teeth were chattering in his head. So shaken was he
 *   that I had to pass my hand under his arm as we went up the stairs, for
 *   his knees were trembling under him." So Thaddeus hangs back at the end of
 *   the line, one hand over the lower part of his face as in
 *   Chapter 4 ("constantly passing his hand over the lower part of his
 *   face"). He is in the rabbit-skin cap with its lappets and the "very long
 *   befrogged topcoat with Astrakhan collar".
 *
 * WHAT IS NOT DRAWN. Bartholomew Sholto is behind the door and is never
 * shown: the moment is the keyhole and the faces of the men who stand at it.
 * Miss Morstan "had remained behind with the frightened housekeeper", so she
 * is not in the passage. Holmes and Watson are bareheaded in the house.
 *
 * REDRAWN on 2 October 2026 from an unreviewed first draft. It cast the men's
 * shadows up the far wall, which a lamp standing against that wall cannot
 * do (and "our long black shadows streaming backwards down the corridor" is
 * the walk along the passage, not the moment at the door; on boards seen
 * this low the shadows would be slivers that read as nothing, so none is
 * drawn); it put Holmes's hand up high on the door, where at panel size it
 * read as a wave; and it drew the men too small to read on a phone.
 *
 * Seeds: 601 (the wall), 602 (the lamp's rays), 603 (the boards).
 */

const W = 860
const H = 340
/** The foot of the far wall, where the boards begin. */
const FLOOR = 268
/** The lamp's flame: the lamp stands on the boards against the third door. */
const LAMP: P = [748, 236]
const LAMP_SCALE = 1.4
/** The third door, on the far wall: x, top, width. */
const DOOR = { x: 692, top: 30, w: 112 }
/** The keyhole in it, on the stile nearest the men. */
const KEY: P = [708, 156]

type Marks = { wall: string; glow: string; floor: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The lamp is low against the wall, so its light grazes along the wall and
  // the boards: bright round the third door, dying away down the passage.
  const light = (x: number, y: number) =>
    clamp((1 - Math.hypot((x - LAMP[0]) * 0.46, (y - LAMP[1]) * 0.8) / 300) * 1.4)
  const wall = gougeField(rng(601), { x0: 0, x1: W, y0: 6, y1: FLOOR - 4 }, (x, y) =>
    Math.max(light(x, y), 0.04),
  )
  const glow = rays(rng(602), LAMP[0], LAMP[1], { from: 28, to: 130, every: 5.2, width: 2.8 })
  // The boards run along the passage: long joints, cut paper where the lamp
  // reaches them and closing up into the dark.
  const r = rng(603)
  const fl = (x: number, y: number) =>
    clamp((1 - Math.hypot((x - LAMP[0]) * 0.3, (y - FLOOR) * 0.8) / 300) * 2.4)
  let floor = ''
  for (let y = FLOOR + 5; y < H; y += 6) {
    let x = between(r, -40, 0)
    while (x < W) {
      const len = between(r, 40, 130)
      const L = fl(x + len / 2, y)
      if (r() < 0.2 + L * 0.8)
        floor += gouge(
          x,
          y + between(r, -0.6, 0.6),
          x + len,
          y + between(r, -0.6, 0.6),
          0.5 + L * 3.6,
        )
      x += len + between(r, 3, 14) * (1 - L * 0.7)
    }
  }
  cached = { wall, glow, floor }
  return cached
}

/** A panelled door on the far wall: architrave, frame, four panels. */
function Door({ x, top, w, lit }: { x: number; top: number; w: number; lit: number }) {
  const h = FLOOR - top
  const px = x + w * 0.16
  const pw = w * 0.3
  const qx = x + w - w * 0.16 - pw
  return (
    <g>
      <rect x={x - 9} y={top - 9} width={w + 18} height={h + 9} fill={INK} />
      <path
        d={`M${x - 9} ${FLOOR}V${top - 9}H${x + w + 9}V${FLOOR}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={lit > 0.5 ? LINE.bold : LINE.fine}
      />
      <path
        d={`M${x} ${FLOOR}V${top}H${x + w}V${FLOOR}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={lit > 0.5 ? LINE.carve : LINE.hairline}
      />
      <g fill="none" stroke={PAPER} strokeWidth={lit > 0.5 ? LINE.carve : LINE.hairline}>
        <rect x={px} y={top + 14} width={pw} height={h * 0.34} />
        <rect x={qx} y={top + 14} width={pw} height={h * 0.34} />
        <rect x={px} y={top + h * 0.5} width={pw} height={h * 0.42} />
        <rect x={qx} y={top + h * 0.5} width={pw} height={h * 0.42} />
      </g>
    </g>
  )
}

/**
 * The lamp: the carriage side-lamp Thaddeus "took down" at the gate and "left
 * us", which Holmes carries through the house ("Sherlock Holmes took the lamp
 * and led the way"). A glass box on a black frame, a pointed top and a ring to
 * carry it by; the flame, at `at`, is the spot colour. Shared with "Holmes
 * gives a demonstration", so it is the same lamp in both rooms.
 */
export function Lantern({ at, scale = 1 }: { at: P; scale?: number }) {
  const [x, y] = at
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M-11 22H11L9 -16H-9Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <rect x={-6} y={-12} width={12} height={26} fill={PAPER} />
      <path d="M-12 -16L0 -26L12 -16Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d="M-5 -26Q0 -36 5 -26" fill="none" stroke={PAPER} strokeWidth={3.4} />
      <path d="M-5 -26Q0 -36 5 -26" fill="none" stroke={INK} strokeWidth={1.8} />
      <path className="lc-flicker" d="M0 6C-4.6 2 -3 -4 0 -10C3 -4 4.6 2 0 6Z" fill={RED} />
      <rect x={-7} y={7} width={14} height={4} fill={INK} />
    </g>
  )
}

// ── THE THREE MEN ───────────────────────────────────────────────────────────

/** Holmes, just risen from the keyhole, turned to Watson, his head drawn back. */
const HOLMES_HEAD = { d: HEAD_HOLMES, at: [636, 94] as P, rot: 5, scale: 1.62 }
const HOLMES_NEAR: P[] = [
  [638, 146],
  [630, 186],
  [626, 224],
]
/** His far hand open towards the keyhole: "What do you make of it?" */
const HOLMES_FAR: P[] = [
  [652, 146],
  [670, 174],
  [686, 180],
]
const HOLMES_HANDS = [
  { arm: HOLMES_NEAR, hand: { parts: LONG_HAND, scale: 1.15, rot: 4 } },
  { arm: HOLMES_FAR, hand: { parts: LONG_HAND, scale: 1.15, rot: -24, flip: false } },
]
const HOLMES: Part[] = gent({
  facing: -1,
  neck: [642, 136],
  hip: [650, 226],
  head: HOLMES_HEAD,
  body: { width: 30, hem: 58, flare: 8 },
  arm: 9.6,
  leg: 10.6,
  near: {
    arm: HOLMES_NEAR,
    leg: [
      [646, 226],
      [638, 274],
      [630, 320],
    ],
  },
  far: {
    arm: HOLMES_FAR,
    leg: [
      [654, 226],
      [664, 274],
      [670, 318],
    ],
  },
})

/** Watson, close at his heels, stepping up to the door. */
const WATSON_HEAD = { d: HEAD_WATSON, at: [528, 104] as P, rot: 4, scale: 1.62 }
const WATSON: Part[] = gent({
  facing: 1,
  neck: [522, 146],
  hip: [512, 230],
  head: WATSON_HEAD,
  body: { width: 40, hem: 56, flare: 9 },
  arm: 10.4,
  leg: 11.4,
  near: {
    arm: [
      [520, 156],
      [530, 194],
      [540, 228],
    ],
    leg: [
      [516, 230],
      [530, 278],
      [544, 324],
    ],
    hand: { parts: OPEN_HAND, scale: 1.05, rot: 10 },
  },
  far: {
    arm: [
      [526, 156],
      [512, 192],
      [502, 226],
    ],
    leg: [
      [508, 230],
      [496, 278],
      [484, 322],
    ],
    hand: { parts: OPEN_HAND, scale: 1, rot: -6 },
  },
})

/**
 * Thaddeus, small, hanging back in his cap and long topcoat, one hand over
 * his mouth. The coat is "very long", so it falls below his knees.
 */
const THAD_HEAD = { d: HEAD_THADDEUS, at: [432, 146] as P, rot: 10, scale: 1.36 }
const THAD_HT = headAt(1, THAD_HEAD.at, THAD_HEAD.rot, THAD_HEAD.scale)
/**
 * The topcoat's "Astrakhan collar" (Chapter 4), turned up round his neck
 * behind the lappets: with the cap, it leaves "no part of him ... visible
 * save his mobile and peaky face", and in this chapter Watson sees "his
 * twitching feeble face peeping out from the great Astrakhan collar"
 * (Chapter 5). A deep collar of tight curls from the shoulders up
 * to the back flap of the cap, low in front, under his chin. Inked over the
 * head and the cap with a paper edge of its own; its curls are cut in paper.
 *
 * REDRAWN on 2 October 2026 (review). It was a flat band at the shoulders, so
 * the cap ran down unbroken to the shoulders and read as long hair; turned
 * up, it ends the cap at the ear, as a collar does.
 */
const ASTRAKHAN =
  'M403 192C400 180 401 167 407 158C413 160 418 165 423 170C431 174 440 174 448 172C452 178 453 186 450 194C436 201 416 201 403 192Z'
const ASTRAKHAN_CURLS = [
  [408, 166],
  [407, 175],
  [414, 172],
  [408, 184],
  [416, 181],
  [424, 178],
  [432, 179],
  [440, 178],
  [446, 182],
  [413, 191],
  [421, 189],
  [429, 188],
  [437, 188],
  [445, 190],
]
  .map(([x, y]) => `M${x - 2.2} ${y}a2.2 2.2 0 1 1 4.4 0`)
  .join('')
/**
 * "a very long befrogged topcoat": the frogging, four loops of braid across
 * the front with a toggle at each end, cut in paper.
 */
const FROGGING = 'M425 206H441M424.4 215H440.6M423.8 224H440M423.2 233H439.4'
const FROG_TOGGLES = [206, 215, 224, 233]
  .map((y, i) => {
    const x0 = 425 - i * 0.6
    const x1 = 441 - i * 0.6
    return `M${x0 - 2} ${y}a2 2 0 1 0 4 0a2 2 0 1 0 -4 0ZM${x1 - 2} ${y}a2 2 0 1 0 4 0a2 2 0 1 0 -4 0Z`
  })
  .join('')
const THAD_BODY: Part[] = gent({
  facing: 1,
  neck: [426, 180],
  hip: [420, 250],
  head: THAD_HEAD,
  hat: THADDEUS_CAP,
  body: { width: 34, hem: 50, flare: 7 },
  arm: 9,
  leg: 9.8,
  near: {
    // "constantly passing his hand over the lower part of his face" (Chapter 4)
    arm: [
      [432, 190],
      [454, 210],
      [452, 176],
    ],
    leg: [
      [424, 250],
      [440, 284],
      [434, 320],
    ],
    hand: { parts: OPEN_HAND, scale: 0.92, rot: 10 },
  },
  far: {
    arm: [
      [420, 190],
      [410, 222],
      [412, 252],
    ],
    leg: [
      [416, 250],
      [404, 284],
      [410, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 0.88, rot: 0 },
  },
})
/**
 * The band and the lappet go on over the crown, each with a paper edge, and
 * the turned-up collar over them, before the near arm and its hand.
 */
const THAD_ARM_AT = THAD_BODY.findIndex((p) => p.d === THADDEUS_CAP) + 1
const THADDEUS: Part[] = [
  ...THAD_BODY.slice(0, THAD_ARM_AT),
  { d: THADDEUS_CAP_BAND, t: THAD_HT, sep: 0.9 },
  { d: THADDEUS_LAPPET, t: THAD_HT, sep: 0.9 },
  { d: ASTRAKHAN, sep: 1.1 },
  ...THAD_BODY.slice(THAD_ARM_AT),
]

function TheLockedRoom({ uid }: ArtProps) {
  const m = marks()
  const ht = headAt(-1, HOLMES_HEAD.at, HOLMES_HEAD.rot, HOLMES_HEAD.scale)
  const wt = headAt(1, WATSON_HEAD.at, WATSON_HEAD.rot, WATSON_HEAD.scale)
  const keyClip = `${uid}-key`
  return (
    <>
      <defs>
        <clipPath id={keyClip}>
          <rect x={DOOR.x} y={DOOR.top} width={DOOR.w} height={FLOOR - DOOR.top} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [640, 170], push: 1.03 })}>
        {/* the far wall, lit low from the lamp on the boards */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 6} width={W} height={2.4} fill={PAPER} />
        {/* the first two doors, back down the passage in the dark */}
        <Door x={-30} top={DOOR.top} w={DOOR.w} lit={0} />
        <Door x={232} top={DOOR.top} w={DOOR.w} lit={0.2} />

        {/* the boards, lit along the passage from the lamp */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={m.floor} fill={PAPER} />

        {/* the third door, bolted on the inside, lit from its foot */}
        <Door x={DOOR.x} top={DOOR.top} w={DOOR.w} lit={1} />
        {/* the keyhole, with the moonlight of the room beyond it */}
        <g clipPath={`url(#${keyClip})`}>
          <path
            d={`M${KEY[0]} ${KEY[1] - 5}a5 5 0 1 1 0.1 0L${KEY[0] + 5} ${KEY[1] + 12}H${KEY[0] - 5}Z`}
            fill={PAPER}
          />
          <g className="lc-glow" style={timing({ delay: 0.6 })}>
            <path
              d={
                gouge(KEY[0] + 10, KEY[1] - 3, KEY[0] + 26, KEY[1] - 9, 0.9) +
                gouge(KEY[0] + 10, KEY[1] + 4, KEY[0] + 27, KEY[1] + 8, 0.9) +
                gouge(KEY[0] + 1, KEY[1] - 13, KEY[0] + 3, KEY[1] - 26, 0.8)
              }
              fill={PAPER}
            />
          </g>
        </g>

        {/* the lamp's light, cut round the flame */}
        <path d={m.glow} fill={PAPER} />

        {/* Thaddeus, hanging back, shaking */}
        <Figure parts={THADDEUS}>
          <g transform={THAD_HT}>
            {/* the rabbit-skin cap, its fur cut all over it */}
            <path d={THADDEUS_CAP_FUR} fill={PAPER} />
            {/* "his mobile and peaky face", the one part of him the cap leaves */}
            <path d={THADDEUS_FACE_CUTS} fill={PAPER} />
            <path d={THADDEUS_PUPIL} fill={INK} />
          </g>
          <path d={ASTRAKHAN_CURLS} fill="none" stroke={PAPER} strokeWidth={1.1} />
          {/* the frogging across the front of the long topcoat */}
          <path d={FROGGING} stroke={PAPER} strokeWidth={1.8} />
          <path d={FROG_TOGGLES} fill={PAPER} />
        </Figure>

        {/* Watson, stepping up behind Holmes */}
        <Figure parts={WATSON}>
          <g transform={wt}>
            <path d={WATSON_CUTS + WATSON_HAIR + COLLAR} fill={PAPER} />
            <path d={WATSON_PUPIL} fill={INK} />
          </g>
          <path d={gouge(520, 166, 506, 226, 1, 1.2)} fill={PAPER} />
        </Figure>

        {/* Holmes, risen from the keyhole */}
        <Figure parts={HOLMES}>
          <g transform={ht}>
            <path d={HOLMES_CUTS + HOLMES_HAIR + COLLAR} fill={PAPER} />
            <path d={HOLMES_PUPIL} fill={INK} />
          </g>
          <path d={gouge(648, 158, 658, 224, 1, -1.2)} fill={PAPER} />
        </Figure>
        <HolmesHands facing={-1} arms={HOLMES_HANDS} />

        {/* the lamp, set down against the door, and its light on the boards */}
        <Lantern at={LAMP} scale={LAMP_SCALE} />
        <path
          d={
            wedge(LAMP[0] - 34, FLOOR + 12, LAMP[0] + 34, FLOOR + 12, 2.6, 2.6) +
            wedge(LAMP[0] - 56, FLOOR + 20, LAMP[0] + 56, FLOOR + 20, 1.8, 1.8)
          }
          fill={PAPER}
        />
      </g>
    </>
  )
}

export const theLockedRoom: LinocutArt = { width: W, height: H, Draw: TheLockedRoom }
