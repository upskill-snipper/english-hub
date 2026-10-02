import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GRIP_CUTS,
  GRIP_HAND,
  HEAD_JEM,
  HEAD_OLD,
  HEAD_SILAS,
  JEM_CUTS,
  JEM_HAIR,
  JEM_HAIR_CUTS,
  JEM_STUBBLE,
  MACEY_HAIR,
  MACEY_HAIR_LINES,
  NECKCLOTH,
  OLD_CUTS,
  OPEN_HAND,
  PaperHair,
  SHIRT_COLLAR,
  SilasFace,
  coat,
  handAt,
  headAt,
  man,
  smocking,
  type Hand,
  type P,
  type Part,
} from './people'

/**
 * Chapters 5 to 7: "Robbed", the fifth moment in the guide's timeline. The
 * panel is the moment of its quotation, in the kitchen of the Rainbow. Every
 * detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "He lifted the latch, and turned into the bright bar or kitchen on the
 *   right hand"; "the party on the high-screened seats in the kitchen was
 *   more numerous than usual"; "the more important customers, who drank
 *   spirits and sat nearest the fire"; "The pipes began to be puffed". So the
 *   room is bright with a big fire (the spot colour), a high-backed settle
 *   stands on the left, and the long clay pipes are out.
 * - "The landlord forced Marner to take off his coat, and then to sit down on
 *   a chair aloof from every one else, in the centre of the circle and in the
 *   direct rays of the fire"; "You're as wet as a drownded rat"; he had run
 *   out "forgetting to cover his head". So Silas is in his shirt sleeves and
 *   waistcoat, bareheaded, his hair wet, and his empty chair stands in the
 *   middle of the room in the firelight.
 * - "Jem Rodney was the outermost man, and sat conveniently near Marner's
 *   standing-place"; "Jem's been a-sitting here drinking his can"; "a known
 *   poacher, and otherwise disreputable". So Jem sits nearest the door, on
 *   the end of the settle, his drinking-can on his knee, looking up at Silas:
 *   the kit's rough, unshaven labourer in a smock-frock.
 * - "With a movement of compunction as new and strange to him as everything
 *   else within the last hour, he started from his chair and went close up to
 *   Jem"; "'I don't accuse you—I won't accuse anybody—only,' he added, lifting
 *   up his hands to his head, and turning away with bewildered misery". So
 *   Silas stands close to Jem, turned away from him, both hands lifted to his
 *   head: the open hands of the kit, the fingers apart, clasping his head, and
 *   the pale face of the kit (./people.tsx) between his white sleeves.
 * - "Mr. Macey, tailor and parish-clerk ... held his white head on one side,
 *   and twirled his thumbs with an air of complacency"; "Mr. Macey, sitting a
 *   long way off the ghost"; "'Aye, aye,' said Mr. Macey; 'let's have no
 *   accusing o' the innicent.'" So the old man sits far off on the right, by
 *   the fire, his white hair cut in paper, his head tipped and his hands
 *   together in his lap.
 *
 * The rest of the company, the landlord among them, sit out of the picture,
 * round the circle. The kitchen's furnishings are not described beyond the
 * seats, the fire and the pipes, so the rest is a plain inn kitchen of the
 * time: a shelf of pewter, flagstones. Seeds: 501 (the wall), 502 (the
 * flagstones), 503 (the drips of rain).
 */

const W = 860
const H = 340
/** The foot of the wall. */
const FLOOR = 252
/** The heart of the fire, where its light comes from. */
const FIRE: P = [764, 230]

type Marks = { wall: string; flags: string; shade: string; drips: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The kitchen lit by its fire on the right: the cuts in the wall thicken
  // towards it and thin into the dark by the door.
  const light = (x: number, y: number) => {
    const l = clamp(1 - Math.hypot((x - FIRE[0]) * 0.7, (y - FIRE[1]) * 1.05) / 560)
    return Math.max(l ** 1.2, 0.06)
  }
  const wall = gougeField(rng(501), { x0: 0, x1: W, y0: 6, y1: FLOOR - 4 }, light, {
    spacing: 6.2,
    len: [14, 52],
  })
  // Flagstones: courses deepening towards the eye, the joints staggered.
  const f = rng(502)
  let flags = ''
  const rows = [FLOOR, FLOOR + 10, FLOOR + 24, FLOOR + 44, FLOOR + 70, H + 4]
  for (let i = 0; i < rows.length - 1; i++) {
    const y = rows[i]
    const next = rows[i + 1]
    flags += gouge(0, y, W, y, 0.7 + i * 0.25)
    const step = 54 + i * 26
    for (
      let x = (i % 2) * (step / 2) + between(f, -6, 6);
      x < W + step;
      x += step + between(f, -8, 8)
    )
      flags += `M${n(x)} ${n(y)}L${n(x + (x - 430) * 0.08)} ${n(next)}`
  }
  // Shadow: the floor away from the fire, and the long shadows the fire
  // throws to the left from Silas, the empty chair, Jem's settle and Macey.
  let shade = ''
  for (let y = FLOOR + 3; y < H - 2; y += 3.4) {
    const k = (y - FLOOR) / (H - FLOOR)
    shade += gouge(-10, y, 190 - k * 40, y + 0.4, 1 + (1 - k) * 0.8)
  }
  const cast = (x0: number, x1: number, y: number, len: number, w: number) => {
    for (let k = 0; k < 4; k++)
      shade += wedge(x1, y + k * 2.6, x0 - len, y + 4 + k * 3.2, w, w * 0.4)
  }
  cast(250, 292, 304, 70, 2.6)
  cast(412, 466, 296, 110, 2.2)
  cast(560, 640, 298, 70, 2.2)
  const d = rng(503)
  let drips = ''
  for (let k = 0; k < 9; k++) {
    const x = between(d, 238, 300)
    const y = between(d, 304, 314)
    drips += gouge(x, y, x + between(d, 6, 16), y + between(d, -0.4, 0.4), between(d, 0.5, 0.9))
  }
  cached = { wall, flags, shade, drips }
  return cached
}

// ── SILAS, close to Jem, turned away, his hands lifted to his head ──────────
const SILAS_HEAD = { d: HEAD_SILAS, at: [282, 112] as P, rot: 16, scale: 1.34 }
/**
 * His arms lifted, the elbows out to either side, so that in profile both
 * stand up behind his face, and the hands lie on his head over the ear and
 * the crown. (Drawn first with the near elbow out in front, the arm crossed
 * his face and hid it.)
 */
const NEAR_SLEEVE: P[] = [
  [278, 152],
  [256, 126],
  [266, 102],
]
const FAR_SLEEVE: P[] = [
  [270, 150],
  [238, 130],
  [250, 100],
]
/** The hands bent at the wrist to lie forward over the ear and the crown. */
const NEAR_HAND: Hand = { parts: OPEN_HAND, scale: 1.04, rot: 58 }
const FAR_HAND: Hand = { parts: OPEN_HAND, scale: 1.02, rot: 62 }
const SILAS: Part[] = man({
  facing: 1,
  neck: [274, 142],
  hip: [268, 214],
  head: SILAS_HEAD,
  body: { width: 28, tails: 6, front: 6, flare: 2 },
  arm: 8,
  leg: 9.5,
  near: {
    arm: [],
    leg: [
      [270, 214],
      [280, 262],
      [286, 306],
    ],
  },
  far: {
    arm: [],
    leg: [
      [264, 216],
      [256, 262],
      [246, 302],
    ],
  },
})
const SILAS_T = headAt(1, SILAS_HEAD.at, SILAS_HEAD.rot, SILAS_HEAD.scale)

/** A full shirt sleeve: paper, outlined in ink, with folds and a cuff band at the wrist. */
function Sleeve({ arm }: { arm: P[] }) {
  const d = 'M' + arm.map(([x, y]) => `${x} ${y}`).join('L')
  const [, e, w] = arm
  const cuff = [w[0] + (e[0] - w[0]) * 0.16, w[1] + (e[1] - w[1]) * 0.16]
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke={INK}
        strokeWidth={15}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={d}
        fill="none"
        stroke={PAPER}
        strokeWidth={11.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d={
          gouge(arm[0][0], arm[0][1], (arm[0][0] + e[0]) / 2, (arm[0][1] + e[1]) / 2 - 2, 0.7, 1) +
          gouge(e[0], e[1], (e[0] + w[0]) / 2, (e[1] + w[1]) / 2, 0.6, -0.8)
        }
        fill={INK}
      />
      <path
        d={`M${n(cuff[0])} ${n(cuff[1])}L${w[0]} ${w[1]}`}
        stroke={INK}
        strokeWidth={10}
        strokeLinecap="butt"
      />
    </>
  )
}

/** The hands of a figure at the ends of its arms, cut out of the ground by a paper halo. */
function Hands({ hands }: { hands: { arm: P[]; facing: 1 | -1; hand: Hand }[] }) {
  const parts: Part[] = hands.flatMap(({ arm, facing, hand }) =>
    hand.parts.map((q) => ({ ...q, t: handAt(arm, facing, hand) })),
  )
  return <Figure parts={parts} halo={1.6} />
}

// ── JEM RODNEY, on the end of the settle, his can on his knee ───────────────
const JEM_HEAD = { d: HEAD_JEM, at: [112, 130] as P, rot: -10, scale: 1.3 }
const JEM_CAN_ARM: P[] = [
  [110, 168],
  [118, 204],
  [140, 204],
]
const JEM_GRIP: Hand = { parts: GRIP_HAND, scale: 1.05, rot: -10 }
/** His smock-frock, seated: over the shoulders, down the chest and over the lap to below the knee. */
const JEM_SMOCK =
  'M94 158Q108 152 120 162L126 210L160 212Q170 216 168 232L166 246L112 244L88 238Q80 204 88 168Z'
const JEM: Part[] = [
  ...man({
    facing: 1,
    neck: [104, 160],
    hip: [100, 226],
    head: JEM_HEAD,
    hair: JEM_HAIR,
    robe: JEM_SMOCK,
    body: { width: 34 },
    arm: 9,
    leg: 10,
    near: {
      arm: JEM_CAN_ARM,
      leg: [
        [102, 226],
        [156, 226],
        [160, 300],
      ],
      hand: JEM_GRIP,
    },
    far: {
      arm: [
        [100, 168],
        [98, 204],
        [124, 214],
      ],
      leg: [
        [98, 224],
        [150, 220],
        [150, 296],
      ],
    },
  }),
]
const JEM_T = headAt(1, JEM_HEAD.at, JEM_HEAD.rot, JEM_HEAD.scale)
/** His drinking-can, held by the handle, standing on his knee. */
const CAN = { body: 'M150 186H170V212H150Z', handle: 'M150 191Q142 192 143 199Q144 206 150 206' }

/** The high-backed settle he sits on: its tall back, the seat and its front board. */
const SETTLE = 'M30 34H66V42H62V302H34V42H30ZM62 228H182V238H62ZM172 238H182V302H172Z'

// ── MR MACEY, far off on the right by the fire, his hands together ──────────
const MAC_HEAD = { d: HEAD_OLD, at: [606, 134] as P, rot: 12, scale: 1.24 }
const MAC_NEAR_ARM: P[] = [
  [606, 174],
  [604, 210],
  [586, 214],
]
const MAC_FAR_ARM: P[] = [
  [614, 172],
  [618, 208],
  [590, 210],
]
const MAC_GRIP: Hand = { parts: GRIP_HAND, scale: 1, rot: 0 }
const MACEY: Part[] = man({
  facing: -1,
  neck: [612, 166],
  hip: [622, 228],
  head: MAC_HEAD,
  body: { width: 36, tails: 30, front: 6, flare: 4 },
  arm: 9.5,
  leg: 10.5,
  near: {
    arm: MAC_NEAR_ARM,
    leg: [
      [620, 228],
      [574, 228],
      [570, 300],
    ],
    hand: MAC_GRIP,
  },
  far: {
    arm: MAC_FAR_ARM,
    leg: [
      [626, 226],
      [580, 222],
      [580, 296],
    ],
    hand: MAC_GRIP,
  },
})
const MAC_T = headAt(-1, MAC_HEAD.at, MAC_HEAD.rot, MAC_HEAD.scale)

/** A plain chair in profile: seat, legs, and the back on the side `back` (1: right). */
function chair(x: number, seat: number, back: 1 | -1, top: number, w = 56): string {
  const bx = back === 1 ? x + w - 4 : x + 4
  return (
    `M${x} ${seat}H${x + w}V${seat + 7}H${x}Z` +
    `M${x + 3} ${seat + 7}V${H - 34}h5V${seat + 7}Z` +
    `M${x + w - 8} ${seat + 7}V${H - 36}h5V${seat + 7}Z` +
    `M${bx - 3} ${seat}V${top}h6V${seat}Z`
  )
}
/** Silas's chair, empty, in the middle of the room and in the rays of the fire. */
const EMPTY_CHAIR = chair(408, 240, -1, 172)
const EMPTY_LADDER = 'M406 186H420M406 204H420M406 222H420'
/** Mr Macey's chair, its back behind him. */
const MAC_CHAIR = chair(592, 234, 1, 170)

function Robbed({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <defs>
        <clipPath id={`${uid}-hearth`}>
          <path d={`M698 ${FLOOR}V176Q698 150 724 150H806Q832 150 832 176V${FLOOR}Z`} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 190], push: 1.03 })}>
        {/* the bright kitchen of the Rainbow, lit from its fire */}
        <path d={m.wall} fill={PAPER} />
        {/* a shelf of pewter on the back wall */}
        <rect x={340} y={70} width={150} height={5} fill={PAPER} />
        <path d="M346 75L354 90M484 75L476 90" stroke={PAPER} strokeWidth={3} />
        <g fill={INK} stroke={PAPER} strokeWidth={1.6}>
          {[360, 386, 414, 442, 470].map((x, i) => (
            <path
              key={x}
              d={i % 2 ? `M${x - 9} 70A9 9 0 0 1 ${x + 9} 70Z` : `M${x - 7} 70V54H${x + 7}V70Z`}
            />
          ))}
        </g>
        <path
          d="M367 58q5 1 4 6q-1 4 -4 4M421 58q5 1 4 6q-1 4 -4 4M477 58q5 1 4 6q-1 4 -4 4"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.4}
        />

        {/* the chimney-piece and the open hearth on the right */}
        <rect x={672} y={104} width={188} height={FLOOR - 104} fill={INK} />
        <path
          d={[124, 144, 164, 184, 204, 224].map((y) => `M676 ${y}H856`).join('')}
          stroke={PAPER}
          strokeWidth={1}
        />
        <path
          d={[104, 124, 144, 164, 184, 204, 224]
            .map((y, i) =>
              [0, 1, 2, 3, 4].map((k) => `M${684 + k * 40 + (i % 2) * 20} ${y}V${y + 20}`).join(''),
            )
            .join('')}
          stroke={PAPER}
          strokeWidth={0.9}
        />
        <rect x={664} y={96} width={196} height={8} fill={PAPER} />
        <rect x={664} y={104} width={196} height={2} fill={INK} />
        {/* pewter on the mantel-shelf */}
        <g fill={INK} stroke={PAPER} strokeWidth={1.6}>
          <path d="M690 96V80H704V96Z" />
          <path d="M720 96A12 12 0 0 1 744 96Z" />
          <path d="M840 96V80H854V96Z" />
        </g>
        <path
          d={`M698 ${FLOOR}V176Q698 150 724 150H806Q832 150 832 176V${FLOOR}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <g clipPath={`url(#${uid}-hearth)`}>
          {/* the fire: a heaped blaze, its flames leaping unevenly */}
          <g fill={RED}>
            <path
              d={`M712 ${FLOOR}C716 236 726 230 734 232C740 222 750 220 756 226C762 216 776 216 782 226C790 220 804 224 808 234C816 234 822 242 820 ${FLOOR}Z`}
            />
            <path
              className="lc-flicker"
              d="M744 228C738 214 744 202 748 190C752 202 758 214 752 228Z"
            />
            <path
              className="lc-flicker"
              style={timing({ dur: 0.9, delay: 0.3 })}
              d="M760 224C754 204 762 186 768 168C773 186 780 204 774 224Z"
            />
            <path
              className="lc-flicker"
              style={timing({ dur: 1.1, delay: 0.15 })}
              d="M780 228C776 214 782 202 786 192C790 204 794 214 790 228Z"
            />
            <path
              className="lc-flicker"
              style={timing({ dur: 0.8, delay: 0.5 })}
              d="M796 234C793 226 796 218 800 212C803 220 806 228 802 234Z"
            />
            <path
              className="lc-flicker"
              style={timing({ dur: 1, delay: 0.4 })}
              d="M728 236C726 228 729 222 732 216C735 224 737 230 734 236Z"
            />
          </g>
          {/* the logs on the fire-dogs */}
          <path d="M716 244H816" stroke={INK} strokeWidth={6} strokeLinecap="round" />
          <path d={gouge(724, 243, 806, 243, 0.8)} fill={PAPER} />
        </g>
        <rect x={664} y={FLOOR} width={196} height={8} fill={PAPER} />

        {/* the flagstones */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <rect x={664} y={FLOOR} width={196} height={8} fill={PAPER} />
        <path d={m.flags} stroke={INK} strokeWidth={1.1} fill={INK} />
        <path d={m.shade} fill={INK} />
        <rect x={0} y={FLOOR - 4} width={664} height={4} fill={INK} />

        {/* the high-backed settle, and Jem Rodney on its end, his can on his knee */}
        <path
          d={SETTLE}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d={
            gouge(42, 54, 42, 220, 0.8) + gouge(54, 54, 54, 220, 0.8) + gouge(36, 132, 60, 132, 0.8)
          }
          fill={PAPER}
        />
        <Figure parts={JEM} halo={2}>
          <path d={smocking([110, 172], [114, 200], 6)} fill={PAPER} />
          <path d={JEM_HAIR_CUTS + JEM_CUTS + JEM_STUBBLE} transform={JEM_T} fill={PAPER} />
          <path d={SHIRT_COLLAR} transform={JEM_T} fill={PAPER} />
        </Figure>
        <path d={CAN.handle} fill="none" stroke={PAPER} strokeWidth={6} />
        <path d={CAN.handle} fill="none" stroke={INK} strokeWidth={3} />
        <path d={CAN.body} fill={INK} stroke={PAPER} strokeWidth={1.8} />
        <path d={gouge(156, 190, 156, 208, 0.9)} fill={PAPER} />
        <Hands hands={[{ arm: JEM_CAN_ARM, facing: 1, hand: JEM_GRIP }]} />
        <path d={GRIP_CUTS} transform={handAt(JEM_CAN_ARM, 1, JEM_GRIP)} fill={PAPER} />

        {/* Silas's chair, empty, in the rays of the fire */}
        <path
          d={EMPTY_CHAIR}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={EMPTY_LADDER} stroke={PAPER} strokeWidth={2} />

        {/* Mr Macey in his chair by the fire, his white head tipped, his hands together */}
        <path
          d={MAC_CHAIR}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <Figure parts={MACEY} halo={2}>
          <path d={NECKCLOTH} transform={`${MAC_T} translate(2 -1)`} fill={PAPER} />
          <path d={OLD_CUTS} transform={MAC_T} fill={PAPER} />
          <PaperHair t={MAC_T} d={MACEY_HAIR} lines={MACEY_HAIR_LINES} />
          <path d={GRIP_CUTS} transform={handAt(MAC_NEAR_ARM, -1, MAC_GRIP)} fill={PAPER} />
          {/* his two thumbs, touching */}
          <path
            d="M582 206L578 200M586 205L584 199"
            stroke={PAPER}
            strokeWidth={1.4}
            strokeLinecap="round"
          />
        </Figure>

        {/* Silas: the far sleeve, the figure, then the near sleeve and the hands at his head */}
        <Sleeve arm={FAR_SLEEVE} />
        <Hands hands={[{ arm: FAR_SLEEVE, facing: 1, hand: FAR_HAND }]} />
        <Figure parts={SILAS} halo={2}>
          <path d={SHIRT_COLLAR} transform={SILAS_T} fill={PAPER} />
          <SilasFace t={SILAS_T} look={0.4} />
          <path d={gouge(274, 152, 272, 204, 0.8, 0.6)} fill={PAPER} />
        </Figure>
        <Sleeve arm={NEAR_SLEEVE} />
        <Hands hands={[{ arm: NEAR_SLEEVE, facing: 1, hand: NEAR_HAND }]} />
        {/* the rain still dripping from him on to the stones */}
        <path d={m.drips} fill={PAPER} />
      </g>
    </>
  )
}

export const robbed: LinocutArt = { width: W, height: H, Draw: Robbed }
