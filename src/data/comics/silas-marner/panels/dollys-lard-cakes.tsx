import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  AaronHead,
  DollyHead,
  Figure,
  GRIP_CUTS,
  GRIP_HAND,
  HEAD_AARON,
  HEAD_DOLLY,
  HEAD_SILAS,
  HOLD_CUTS,
  HOLD_HAND,
  SHIRT_COLLAR,
  SilasFace,
  handAt,
  headAt,
  man,
  seatedGown,
  type P,
  type Part,
} from './people'

/**
 * Chapter 10: "Dolly's lard-cakes", the seventh moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/silas-marner.ts):
 *
 * - "one Sunday afternoon she took her little boy Aaron with her, and went to
 *   call on Silas, carrying in her hand some small lard-cakes, flat paste-like
 *   articles"; "on arriving at the Stone-pits, they heard the mysterious
 *   sound of the loom". So it is afternoon, Silas has just left his loom, and
 *   the loom stands behind him: the cottage of the loom panel
 *   (./fifteen-years-at-the-loom.tsx), with its stone walls, its sanded brick
 *   floor, its brick hearth with the kettle on the hanger, and the broken
 *   brown pot "propped ... in its old place" beside it. Outside the window
 *   it is winter ("now the frost kills the sound").
 * - "He opened the door wide to admit Dolly, but without otherwise returning
 *   her greeting than by moving the armchair a few inches as a sign that she
 *   was to sit down in it. Dolly, as soon as she was seated, removed the white
 *   cloth that covered her lard-cakes". So Dolly sits in the armchair, the
 *   white cloth on her lap, and holds out the plate.
 * - "Dolly sighed gently as she held out the cakes to Silas, who thanked her
 *   kindly and looked very close at them, absently, being accustomed to look
 *   so at everything he took into his hand". So Silas, thin and bent, holds a
 *   cake up close to his large eye. "There's letters pricked on 'em"; "It's
 *   I. H. S.,". So the letters are pricked on it.
 * - "eyed all the while by the wondering bright orbs of the small Aaron, who
 *   had made an outwork of his mother's chair, and was peeping round from
 *   behind it"; "an apple-cheeked youngster of seven, with a clean starched
 *   frill which looked like a plate for the apples". So Aaron peeps over the
 *   back of the chair, his frill resting on its top like a plate.
 * - Dolly: "a 'comfortable woman'—good-looking, fresh-complexioned, having
 *   her lips always slightly screwed"; her dress is not described, so she
 *   wears the cap, kerchief and apron of a village wife of about 1800. The
 *   three people are the figure kit's (./people.tsx).
 *
 * The spot colour: the fire, Aaron's apple cheek and Dolly's fresh one.
 *
 * Seeds: 701 (the walls), 702 (the floor), 703 (the sand), 704 (the frost on
 * the glass).
 */

const W = 860
const H = 340
/** The foot of the wall. */
const FLOOR = 252
const WIN = { x: 26, y: 44, w: 86, h: 114 }
/** The hearth: the chimney breast and its arched opening. */
const HEARTH = { x0: 604, x1: 772, ax0: 634, ax1: 742, top: 176 }
const FIRE: P = [688, 236]

type Marks = { wall: string; bricks: string; sand: string; rime: string; joints: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is lit by its one window, on the left, and by the fire.
  const light = (x: number, y: number) => {
    const win = clamp(1 - Math.hypot((x - 70) * 0.62, (y - 110) * 1.1) / 360)
    const fire = clamp(1 - Math.hypot(x - FIRE[0], (y - FIRE[1]) * 1.2) / 150) * 0.55
    return Math.max(win ** 1.1, fire, 0.06)
  }
  const wall = gougeField(rng(701), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6.2,
    len: [12, 44],
  })
  // The brick floor: courses widening towards the eye, joints staggered, and
  // every joint cut heavier where the floor falls away from the window and
  // the fire, so the far corner sinks into shadow.
  const r = rng(702)
  const lit = (x: number) =>
    Math.max(clamp(1 - (x - 40) / 640) * 0.9, clamp(1 - Math.abs(x - FIRE[0]) / 130) * 0.6)
  let bricks = ''
  const rows = [
    FLOOR,
    FLOOR + 6,
    FLOOR + 13,
    FLOOR + 21,
    FLOOR + 31,
    FLOOR + 43,
    FLOOR + 57,
    FLOOR + 73,
    H + 4,
  ]
  for (let i = 0; i < rows.length - 1; i++) {
    const y = rows[i]
    const next = rows[i + 1]
    for (let x = -10; x < W + 10; x += 40) {
      const k = 1 + (1 - lit(x + 20)) * 2.2
      bricks += wedge(
        x,
        y + between(r, -0.3, 0.3),
        x + 40,
        y + between(r, -0.3, 0.3),
        (0.7 + i * 0.2) * k,
        (0.7 + i * 0.2) * k,
      )
    }
    const step = 26 + i * 9
    for (let x = (i % 2) * (step / 2) - 20; x < W + 20; x += step) {
      const tilt = (x - 430) * 0.04
      const k = 1 + (1 - lit(x)) * 2.2
      bricks += wedge(x, y, x + tilt, next, (0.8 + i * 0.12) * k, (1 + i * 0.16) * k)
    }
  }
  // Shadow pools under the loom, under Silas and under the chair.
  const pool = (x0: number, x1: number, yc: number, h: number) => {
    for (let y = yc - h; y < yc + h; y += 3) {
      const w = 1 - Math.abs(y - yc) / h
      bricks += gouge(x0 - w * 8, y, x1 + w * 8, y + 0.6, 0.6 + w * 1.8)
    }
  }
  pool(20, 210, 302, 7)
  pool(238, 290, 308, 6)
  pool(398, 520, 314, 7)
  const s = rng(703)
  let sand = ''
  for (let k = 0; k < 160; k++) {
    const x = between(s, 120, 600)
    const y = between(s, FLOOR + 3, H - 6)
    sand += `M${n(x)} ${n(y)}h1.2`
  }
  // Frost on the panes: fern-like rime growing in from the corners.
  const f = rng(704)
  let rime = ''
  const corners: P[] = [
    [WIN.x, WIN.y + WIN.h],
    [WIN.x + WIN.w, WIN.y + WIN.h],
    [WIN.x, WIN.y],
  ]
  for (const [cx, cy] of corners) {
    for (let k = 0; k < 5; k++) {
      const a =
        (cx === WIN.x ? -0.3 : Math.PI + 0.3) + (cy === WIN.y ? 0.9 : -0.9) * between(f, 0.1, 1)
      const len = between(f, 14, 30)
      const x2 = cx + Math.cos(a) * len
      const y2 = cy + Math.sin(a) * len
      rime += `M${n(cx)} ${n(cy)}L${n(x2)} ${n(y2)}`
      for (let j = 1; j < 4; j++) {
        const t = j / 4
        const bx = cx + (x2 - cx) * t
        const by = cy + (y2 - cy) * t
        rime += `M${n(bx)} ${n(by)}l${n(Math.cos(a - 0.7) * 5)} ${n(Math.sin(a - 0.7) * 5)}`
        rime += `M${n(bx)} ${n(by)}l${n(Math.cos(a + 0.7) * 5)} ${n(Math.sin(a + 0.7) * 5)}`
      }
    }
  }
  // The brick joints of the chimney breast, cut in paper.
  let joints = ''
  for (let y = 22; y < FLOOR; y += 26) joints += `M${HEARTH.x0 + 4} ${y}H${HEARTH.x1 - 4}`
  for (let i = 0, y = 22; y < FLOOR - 26; i++, y += 26)
    for (let x = HEARTH.x0 + 22 + (i % 2) * 22; x < HEARTH.x1 - 10; x += 44)
      if (!(y >= HEARTH.top - 30 && x > HEARTH.ax0 - 4 && x < HEARTH.ax1 + 4))
        joints += `M${x} ${y}V${y + 26}`
  cached = { wall, bricks, sand, rime, joints }
  return cached
}

// ── THE LOOM, behind Silas, as the loom panel cuts it ───────────────────────
const LOOM = {
  top: 60,
  post: 206,
  breast: [196, 196] as P,
  cloth: [190, 244] as P,
  fell: [128, 194] as P,
}
const WARP = (() => {
  let d = ''
  for (let k = 0; k < 4; k++) {
    const o = k * 1.6
    d += `M${LOOM.fell[0]} ${LOOM.fell[1] - 2 + o * 0.4}L80 ${174 + o}L-4 ${168 + o}`
    d += `M${LOOM.fell[0]} ${LOOM.fell[1] + o * 0.4}L80 ${206 + o}L-4 ${212 + o}`
  }
  return d
})()
const CLOTH = `M${LOOM.fell[0]} 191L${LOOM.breast[0]} 188Q${LOOM.breast[0] + 9} 190 ${LOOM.breast[0] + 8} 200L${LOOM.cloth[0] + 14} ${LOOM.cloth[1]}L${LOOM.cloth[0] + 8} ${LOOM.cloth[1] + 2}L${LOOM.breast[0] - 2} 202L${LOOM.fell[0]} 197Z`

function Loom() {
  return (
    <>
      {/* the frame: the top, the front post, the rail */}
      <g stroke={PAPER} strokeWidth={13} strokeLinecap="square" fill="none">
        <path d={`M-10 ${LOOM.top}H${LOOM.post + 6}M${LOOM.post} ${LOOM.top}V300`} />
      </g>
      <g stroke={INK} strokeWidth={9} strokeLinecap="square" fill="none">
        <path d={`M-10 ${LOOM.top}H${LOOM.post + 6}M${LOOM.post} ${LOOM.top}V300`} />
      </g>
      <path
        d={
          gouge(LOOM.post - 1, LOOM.top + 12, LOOM.post - 1, 290, 0.7) +
          gouge(4, LOOM.top - 1, LOOM.post - 12, LOOM.top - 1, 0.7)
        }
        fill={PAPER}
      />
      {/* the heddles on their cords, and the warp through them */}
      <path d="M72 66V150M88 66V150" stroke={PAPER} strokeWidth={1.4} />
      <path d="M68 150H92V232H68Z" fill={INK} stroke={PAPER} strokeWidth={1.6} />
      <path
        d={[0, 1, 2, 3, 4, 5].map((k) => `M${71 + k * 3.6} 152V230`).join('')}
        stroke={PAPER}
        strokeWidth={LINE.hairline}
      />
      <path d={WARP} stroke={PAPER} strokeWidth={LINE.hairline} fill="none" />
      {/* the batten hanging from the top, its reed at the fell */}
      <path d="M150 66L134 204" stroke={PAPER} strokeWidth={10} strokeLinecap="round" />
      <path d="M150 66L134 204" stroke={INK} strokeWidth={6.5} strokeLinecap="round" />
      <path d="M129 166H139V212H129Z" fill={INK} stroke={PAPER} strokeWidth={1.4} />
      {/* the cloth over the breast beam, wound on the cloth beam */}
      <circle
        cx={LOOM.breast[0]}
        cy={LOOM.breast[1]}
        r={7}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={CLOTH} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <circle
        cx={LOOM.cloth[0]}
        cy={LOOM.cloth[1]}
        r={14}
        fill={PAPER}
        stroke={INK}
        strokeWidth={2}
      />
      <path
        d={`M${LOOM.cloth[0] - 10} ${LOOM.cloth[1]}A10 10 0 0 1 ${LOOM.cloth[0] + 10} ${LOOM.cloth[1]}`}
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
      />
      <circle cx={LOOM.cloth[0]} cy={LOOM.cloth[1]} r={3} fill={INK} />
      {/* the treadles, and the bench he has just got up from */}
      <path d="M40 292L190 282M40 296L190 296" stroke={PAPER} strokeWidth={8} />
      <path d="M40 292L190 282M40 296L190 296" stroke={INK} strokeWidth={5} />
      <path d="M150 220H236" stroke={PAPER} strokeWidth={11} />
      <path d="M150 220H236" stroke={INK} strokeWidth={7} />
      <path d="M158 222V300M228 222V300" stroke={INK} strokeWidth={5} />
      <path d="M158 222V300M228 222V300" stroke={PAPER} strokeWidth={1} strokeDasharray="0 0" />
    </>
  )
}

// ── SILAS, up from the loom, bent close over a cake ─────────────────────────
const SILAS_HEAD = { d: HEAD_SILAS, at: [310, 106] as P, rot: 18, scale: 1.25 }
/** The near arm raised, the hand holding the cake up close to his eye. */
const CAKE_ARM: P[] = [
  [300, 146],
  [316, 186],
  [334, 128],
]
const CAKE_HAND = { parts: HOLD_HAND, scale: 1.1, rot: 8 }
const SILAS: Part[] = man({
  facing: 1,
  neck: [298, 136],
  hip: [266, 208],
  head: SILAS_HEAD,
  body: { width: 28, tails: 14, front: 2, flare: 3 },
  arm: 8.5,
  leg: 9.5,
  near: {
    arm: CAKE_ARM,
    leg: [
      [268, 210],
      [278, 258],
      [272, 306],
    ],
    hand: CAKE_HAND,
  },
  far: {
    arm: [
      [292, 144],
      [290, 184],
      [300, 214],
    ],
    leg: [
      [264, 210],
      [254, 258],
      [248, 304],
    ],
    hand: { parts: HOLD_HAND, scale: 1, rot: 0 },
  },
})
/** The cake, held up to his eye, its face turned to us: I. H. S. pricked on it. */
const CAKE: P = [348, 102]
const IHS =
  'M-6.6 -4.4V4.4M-7.8 -4.4H-5.4M-7.8 4.4H-5.4' +
  'M-2.8 -4.4V4.4M1.6 -4.4V4.4M-2.8 0H1.6' +
  'M7.2 -3.6Q6 -4.8 4.6 -4.4Q3 -3.8 3.6 -1.8Q4.2 -0.4 5.8 0.4Q7.6 1.4 7 3.4Q6.2 4.8 4.4 4.4Q3.4 4 3.2 3.2'

// ── DOLLY, in the armchair, holding out the plate ───────────────────────────
const DOLLY_HEAD = { d: HEAD_DOLLY, at: [446, 164] as P, rot: 9, scale: 1.12 }
const DOLLY_NECK: P = [452, 196]
const DOLLY_HIP: P = [472, 248]
const DOLLY_KNEE: P = [414, 254]
const PLATE_ARM: P[] = [
  [448, 206],
  [428, 228],
  [398, 210],
]
const PLATE_HAND = { parts: HOLD_HAND, scale: 1.05, rot: -6 }
const DOLLY: Part[] = man({
  facing: -1,
  neck: DOLLY_NECK,
  hip: DOLLY_HIP,
  head: DOLLY_HEAD,
  robe: seatedGown(DOLLY_NECK, DOLLY_HIP, DOLLY_KNEE, 312, -1, { width: 36, lap: 13 }),
  arm: 8.5,
  feet: false,
  near: { arm: PLATE_ARM, leg: [], hand: PLATE_HAND },
  far: {
    arm: [
      [460, 204],
      [470, 234],
      [446, 246],
    ],
    leg: [],
    hand: { parts: HOLD_HAND, scale: 1, rot: 0 },
  },
})
/** Her kerchief over the shoulders: a point down the back, crossed in a V at the front. Fill with PAPER. */
const KERCHIEF = 'M442 197Q453 192 465 197L476 216Q467 213 461 207L451 218Q444 209 442 197Z'
/** Her apron, over the lap and down the front of the skirt. Fill with PAPER. */
const APRON = 'M462 232L410 243L405 256L403 308L428 309L431 262Q440 250 461 244Z'
const APRON_FOLDS = 'M420 256L417 304M412 258L410 304M440 246L428 250'
/** The plate in her hand, and the two cakes left on it. */
const PLATE: P = [380, 207]

// ── THE ARMCHAIR, and AARON peeping over its back ───────────────────────────
const CHAIR = 'M488 208Q488 194 501 194Q514 194 514 208V312H504V258H418V312H410V250H488Z'
/**
 * Aaron stands behind the chair, on the far side of it from Silas, his hands
 * on its back, and leans to peep round it: the chair hides him from the
 * weaver, not from us. (Cut first as a head and frill over the chair back,
 * he read as a bust on a post, and smaller still as a bird perched there.)
 * A boy of seven in the short jacket and trousers of about 1800; only his
 * head, his frill and his cheek are described.
 */
const AARON_HEAD = { d: HEAD_AARON, at: [510, 162] as P, rot: -6, scale: 1.02 }
const AARON_ARM: P[] = [
  [522, 194],
  [522, 214],
  [508, 200],
]
const AARON_FAR_ARM: P[] = [
  [528, 194],
  [530, 216],
  [516, 202],
]
const AARON: Part[] = man({
  facing: -1,
  neck: [522, 186],
  hip: [534, 242],
  head: AARON_HEAD,
  body: { width: 26, tails: 6, front: 0, flare: 2 },
  arm: 7,
  leg: 8.5,
  near: {
    arm: AARON_ARM,
    leg: [
      [532, 244],
      [530, 274],
      [530, 304],
    ],
  },
  far: {
    arm: AARON_FAR_ARM,
    leg: [
      [538, 244],
      [544, 274],
      [546, 302],
    ],
  },
})
/** His hands on the chair back, printed over it: the fingers curled round its edge. */
const AARON_HAND = { parts: GRIP_HAND, scale: 0.85, rot: -20 }
const AARON_HANDS: Part[] = [AARON_FAR_ARM, AARON_ARM].flatMap((arm) =>
  AARON_HAND.parts.map((q) => ({ ...q, t: handAt(arm, -1, AARON_HAND) })),
)

// ── THE HEARTH, and the mended pot propped in its old place ─────────────────
const POT = {
  body: 'M566 258C558 253 556 241 559 233C561 226 566 222 568 217L568 209H584L584 217C586 222 591 226 593 233C596 241 594 253 586 258Z',
  handle: 'M588 213C598 211 603 220 598 231',
  cracks: 'M570 224L577 229L573 238L581 243L578 253M577 229L588 234',
}

function Hearth() {
  const m = marks()
  const { x0, x1, ax0, ax1, top } = HEARTH
  return (
    <>
      <rect x={x0} y={0} width={x1 - x0} height={FLOOR} fill={INK} />
      <path d={m.joints} stroke={PAPER} strokeWidth={1.1} fill="none" />
      {/* the mantel shelf */}
      <rect x={x0 - 10} y={146} width={x1 - x0 + 20} height={8} fill={PAPER} />
      <rect x={x0 - 10} y={154} width={x1 - x0 + 20} height={2} fill={INK} />
      {/* the arched opening, black, the fire low at its foot */}
      <path
        d={`M${ax0} ${FLOOR}V${top + 22}Q${ax0} ${top} ${ax0 + 24} ${top}H${ax1 - 24}Q${ax1} ${top} ${ax1} ${top + 22}V${FLOOR}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {/* the kettle on its hanger, hung high over the low fire */}
      <path d={`M688 ${top}V190`} stroke={PAPER} strokeWidth={1.4} />
      <path d="M680 190Q688 184 696 190" fill="none" stroke={PAPER} strokeWidth={1.4} />
      <path
        d="M674 195C674 192 678 190 688 190C698 190 702 192 702 195L704 207C704 212 698 214 688 214C678 214 672 212 672 207Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(677, 198, 677, 209, 0.9) + gouge(672, 196, 664, 192, 1.2)} fill={PAPER} />
      {/* two logs, and the fire burning low between them */}
      <path d="M650 248L700 238L702 245L652 252Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d="M726 248L680 240L678 247L724 252Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <g fill={RED}>
        <path d="M666 244C666 238 672 236 676 240C679 234 688 234 690 240C695 236 702 238 701 244Z" />
        <path
          className="lc-flicker"
          style={timing({ dur: 1 })}
          d="M680 240C678 234 682 230 684 225C687 230 690 234 688 240Z"
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.8, delay: 0.4 })}
          d="M692 241C691 237 693 234 694 231C696 234 698 237 697 241Z"
        />
      </g>
      {/* the hearth before it */}
      <rect x={x0 - 14} y={FLOOR - 2} width={x1 - x0 + 28} height={6} fill={PAPER} />
    </>
  )
}

/** The one window, frost on its panes, its shutter folded back. */
function Window({ clip }: { clip: string }) {
  const m = marks()
  return (
    <>
      <rect x={WIN.x - 8} y={WIN.y - 8} width={WIN.w + 16} height={WIN.h + 16} fill={INK} />
      <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        {/* the white winter field and the hedge beyond */}
        <path
          d={`M${WIN.x} 132Q${WIN.x + 22} 122 ${WIN.x + 44} 130Q${WIN.x + 66} 124 ${WIN.x + WIN.w} 130V140H${WIN.x}Z`}
          fill={INK}
        />
        <path d={m.rime} stroke={INK} strokeWidth={LINE.hairline} fill="none" />
      </g>
      <g fill={INK}>
        <rect x={WIN.x + WIN.w / 2 - 1.8} y={WIN.y} width={3.6} height={WIN.h} />
        <rect x={WIN.x} y={WIN.y + WIN.h / 2 - 1.8} width={WIN.w} height={3.6} />
      </g>
      <rect x={WIN.x - 12} y={WIN.y + WIN.h + 8} width={WIN.w + 24} height={6} fill={PAPER} />
    </>
  )
}

function DollysLardCakes({ uid }: ArtProps) {
  const m = marks()
  const st = headAt(1, SILAS_HEAD.at, SILAS_HEAD.rot, SILAS_HEAD.scale)
  const dt = headAt(-1, DOLLY_HEAD.at, DOLLY_HEAD.rot, DOLLY_HEAD.scale)
  const at = headAt(-1, AARON_HEAD.at, AARON_HEAD.rot, AARON_HEAD.scale)
  const win = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 170], push: 1.03 })}>
        {/* the stone walls, lit from the window and the fire */}
        <path d={m.wall} fill={PAPER} />
        <path
          d="M240 40H300M268 18V40M360 28H470M420 28V58M520 50H580M800 40H850M790 120H840"
          stroke={PAPER}
          strokeWidth={LINE.fine}
          fill="none"
        />
        <Window clip={win} />
        <Hearth />
        {/* the brown pot, mended, by the hearth */}
        <g transform="rotate(-6 576 258)">
          <path d={POT.handle} fill="none" stroke={PAPER} strokeWidth={7} strokeLinecap="round" />
          <path d={POT.handle} fill="none" stroke={INK} strokeWidth={4.2} strokeLinecap="round" />
          <path
            d={POT.body}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path
            d={POT.cracks}
            fill="none"
            stroke={PAPER}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
        </g>

        {/* the brick floor, sprinkled with sand */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.bricks} fill={INK} />
        <path d={m.sand} stroke={INK} strokeWidth={0.9} />

        <Loom />

        {/* Aaron, behind his mother's chair, peeping round it */}
        <Figure parts={AARON} halo={1.8}>
          <AaronHead t={at} />
        </Figure>
        {/* the armchair Silas moved for her */}
        <path d={CHAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path d={gouge(501, 210, 501, 250, 1)} fill={PAPER} />
        <Figure parts={AARON_HANDS} halo={1.4}>
          {[AARON_FAR_ARM, AARON_ARM].map((arm) => (
            <path
              key={arm[2][0]}
              d={GRIP_CUTS}
              transform={handAt(arm, -1, AARON_HAND)}
              fill={PAPER}
            />
          ))}
        </Figure>

        {/* Dolly, seated, holding out the cakes */}
        <Figure parts={DOLLY} halo={2}>
          <path d={APRON} fill={PAPER} stroke={INK} strokeWidth={1} />
          <path d={APRON_FOLDS} stroke={INK} strokeWidth={0.9} fill="none" />
          <path d={KERCHIEF} fill={PAPER} stroke={INK} strokeWidth={1} />
          <DollyHead t={dt} />
          <path d={HOLD_CUTS} transform={handAt(PLATE_ARM, -1, PLATE_HAND)} fill={PAPER} />
        </Figure>
        {/* the plate, and the two cakes left on it */}
        <ellipse
          cx={PLATE[0]}
          cy={PLATE[1]}
          rx={21}
          ry={4.8}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.3}
        />
        <g fill={PAPER} stroke={INK} strokeWidth={1.1}>
          <ellipse cx={PLATE[0] - 7} cy={PLATE[1] - 4} rx={8} ry={3.2} />
          <ellipse cx={PLATE[0] + 7} cy={PLATE[1] - 5} rx={8} ry={3.2} />
        </g>

        {/* Silas, bent close over the cake in his hand */}
        <Figure parts={SILAS} halo={2}>
          <path d={SHIRT_COLLAR} transform={st} fill={PAPER} />
          <SilasFace t={st} look={1} />
          <path d={HOLD_CUTS} transform={handAt(CAKE_ARM, 1, CAKE_HAND)} fill={PAPER} />
        </Figure>
        <g transform={`translate(${CAKE[0]} ${CAKE[1]})`}>
          <ellipse cx={0} cy={0} rx={11} ry={10} fill={PAPER} stroke={INK} strokeWidth={1.4} />
          <path d={IHS} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
        </g>
      </g>
    </>
  )
}

export const dollysLardCakes: LinocutArt = { width: W, height: H, Draw: DollysLardCakes }
