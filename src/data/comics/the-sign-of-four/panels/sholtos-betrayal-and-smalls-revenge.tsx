import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GRIP_HAND,
  HEAD_SMALL,
  HEAD_TONGA,
  SMALL_CURLS,
  SMALL_CUTS,
  SMALL_PUPIL,
  TONGA_CUTS,
  TONGA_HAIR,
  TONGA_HAIR_CUTS,
  TONGA_PUPIL,
  coat,
  gent,
  headAt,
  type P,
  type Part,
} from './people'

/**
 * Chapter 12, "The Strange Story of Jonathan Small": "Sholto's betrayal and
 * Small's revenge", the fifteenth moment in the guide's timeline. Sholto's
 * betrayal is told, not seen (he "went off to India, but he never came back
 * again"); the panel is what Small does about it, the night he escapes the
 * Andaman Islands to hunt Sholto down. The guard he strikes on the wharf is
 * not drawn (the rules in ./people.tsx). Every detail is from the text:
 *
 * - "I was given a hut in Hope Town, which is a small place on the slopes of
 *   Mount Harriet". So the island behind them is a dark mountain falling to
 *   the sea. The lit windows of the settlement on its slope are the spot
 *   colour: the text does not say they were lit, so they are kept few and
 *   small, the place he is leaving, as the pilot's far candles are.
 * - "Tonga ... was a fine boatman, and owned a big, roomy canoe of his own";
 *   "I gave him directions to have several gourds of water and a lot of yams,
 *   cocoa-nuts, and sweet potatoes"; "At the night named he had his boat at
 *   the wharf"; "I made for the boat, and in an hour we were well out at sea.
 *   Tonga had brought all his earthly possessions with him, his arms and his
 *   gods. Among other things, he had a long bamboo spear, and some Andaman
 *   cocoa-nut matting, with which I made a sort of sail." So it is night, the
 *   canoe is a long dugout running out to sea away from the island, the stores
 *   are heaped in its bows, and the sail is the matting, cut with its weave.
 *   The text does not say what the sail hung from; the long bamboo spear is
 *   the one pole it names, so it stands as the mast, its joints cut in paper.
 * - TONGA (see the rules in ./people.tsx): "He was stanch and true, was
 *   little Tonga. No man ever had a more faithful mate." He kneels in the
 *   stern and paddles, the boatman, smaller than Small and drawn with the same
 *   care. His dress at sea is not described, so he is wrapped in a plain dark
 *   cloth, as he is in London ("wrapped in some sort of dark ulster or
 *   blanket", Chapter 10).
 * - SMALL, at about forty: the kit's Small (HEAD_SMALL), the beard, the curls,
 *   the heavy brow. He stands at the mast with his hand on the sheet, black
 *   against the pale sail, looking ahead: "From that day I lived only for
 *   vengeance ... To escape, to track down Sholto ... that was my one
 *   thought." His wooden leg is inside the canoe, below its side.
 *
 * Seeds: 1501 (the stars), 1502 (the sea), 1503 (the wake), 1504 (the trees
 * on the ridge).
 */

const W = 860
const H = 340
const HORIZON = 204

type Marks = { stars: string; sea: string; wake: string; ridge: string; weave: string }

/** The ridge of the island: Mount Harriet, falling to the sea at the right. */
function ridgeY(x: number) {
  if (x < 118) return 112 - (x / 118) * 46
  if (x < 320) return 66 + ((x - 118) / 202) ** 1.25 * (HORIZON - 66)
  return HORIZON
}
const ISLAND = (() => {
  let d = `M-6 ${HORIZON + 6}L-6 112`
  for (let x = 0; x <= 324; x += 6) d += `L${n(x)} ${n(ridgeY(x))}`
  return d + `L326 ${HORIZON + 6}Z`
})()
/** "a small place on the slopes of Mount Harriet": a few lit windows of Hope Town. */
const HOPE_TOWN: P[] = [
  [128, 128],
  [150, 138],
  [176, 150],
  [208, 164],
]

/** The sail of cocoa-nut matting, hung from its yard on the bamboo mast. */
const SAIL = 'M484 80L662 66C672 116 676 172 668 224L498 230C504 180 500 128 484 80Z'
const MAST = 'M572 256L567.4 70'
const YARD = 'M478 82L666 64'

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1501)
  let stars = ''
  for (let i = 0; i < 64; i++) {
    const x = between(r, 14, W - 14)
    const y = between(r, 10, HORIZON - 14)
    // none on the island, the sail, or under the quotation
    if (x < 330 && y > ridgeY(x) - 6) continue
    if (x > 470 && x < 690 && y > 50) continue
    if (x > 600 && y < 70) continue
    const s = between(r, 0.7, 1.5)
    stars += `M${n(x - s)} ${n(y)}a${n(s)} ${n(s)} 0 1 0 ${n(2 * s)} 0a${n(s)} ${n(s)} 0 1 0 ${n(-2 * s)} 0Z`
    if (s > 1.3) stars += gouge(x - 4.6, y, x + 4.6, y, 0.35) + gouge(x, y - 4.6, x, y + 4.6, 0.35)
  }
  // The sea at night: paler far out under the sky, dark close in, dark under
  // the island.
  const light = (x: number, y: number) => {
    const d = clamp(1 - (y - HORIZON) / 140)
    const shade = x < 330 ? clamp((x - 160) / 170) * 0.6 + 0.25 : 1
    return clamp(0.08 + 0.46 * d * d * shade)
  }
  const sea = gougeField(rng(1502), { x0: 0, x1: W, y0: HORIZON + 4, y1: H }, light, {
    spacing: 5.8,
    len: [18, 64],
    gap: [8, 26],
  })
  // The wake streaming back from the stern, and the water at the bow.
  const k = rng(1503)
  let wake = ''
  for (let i = 0; i < 5; i++) {
    const y = 268 + i * 5 + between(k, -1, 1)
    wake += ribbon(
      wave(140 - i * 20, 330 - i * 4, y, 1.4, 50, between(k, 0, 6), 18),
      3.4 - i * 0.45,
      0.6,
    )
  }
  wake +=
    ribbon(wave(780, 848, 262, 1.2, 30, 1, 10), 3.6, 0.7) +
    ribbon(wave(770, 846, 270, 1.2, 36, 2, 10), 2.6, 0.7)
  // Trees along the ridge of the island, cut as short upright ticks.
  const t = rng(1504)
  let ridge = ''
  for (let x = 4; x < 318; x += 5.6) {
    const y = ridgeY(x)
    ridge += gouge(x, y + 3, x + between(t, -0.6, 0.6), y + between(t, 7, 12), 0.7)
  }
  // The weave of the matting: diagonal lines both ways over the sail.
  let weave = ''
  for (let c = 300; c < 900; c += 8) weave += `M${n(c)} 60L${n(c - 200)} 260`
  for (let c = 300; c < 900; c += 8) weave += `M${n(c - 200)} 60L${n(c)} 260`
  cached = { stars, sea, wake, ridge, weave }
  return cached
}

/** The canoe: "a big, roomy canoe", a long dugout, the stern left, the bow right. */
const HULL =
  'M318 232C330 244 352 250 382 252C470 257 610 258 720 253C756 251 784 244 806 230C802 250 790 264 770 270C700 276 520 278 372 272C350 266 330 252 318 232Z'
/** The far gunwale seen over the near one: the dark inside of the boat between. */
const INSIDE =
  'M324 234C346 240 372 243 402 244C482 248 620 248 720 244C752 242 780 238 802 232C784 244 756 251 720 253C610 258 470 257 382 252C352 250 334 244 324 234Z'

// ── Small, at the mast, against the sail ────────────────────────────────────
const SMALL_HEAD = { d: HEAD_SMALL, at: [604, 108] as P, rot: 0, scale: 1.24 }
const SHEET_ARM: P[] = [
  [606, 156],
  [626, 186],
  [646, 194],
]
const MAST_ARM: P[] = [
  [592, 154],
  [580, 174],
  [570, 166],
]
const SMALL: Part[] = gent({
  facing: 1,
  neck: [598, 146],
  hip: [592, 222],
  head: SMALL_HEAD,
  body: { width: 36, hem: 16, flare: 4 },
  arm: 9.6,
  leg: 10.4,
  near: {
    arm: SHEET_ARM,
    leg: [
      [596, 222],
      [600, 244],
      [602, 256],
    ],
    hand: { parts: GRIP_HAND, scale: 1.05, rot: 10 },
  },
  far: {
    arm: MAST_ARM,
    leg: [
      [588, 222],
      [584, 244],
      [582, 256],
    ],
    hand: { parts: GRIP_HAND, scale: 1.05, rot: -60 },
  },
})
/** The sheet, from the foot of the sail to his hand. */
const SHEET = 'M668 222Q664 206 658 196'

// ── Tonga, kneeling in the stern, paddling ──────────────────────────────────
const TONGA_HEAD = { d: HEAD_TONGA, at: [404, 170] as P, rot: 6, scale: 1 }
/** The paddle, on the near side of the canoe: the shaft across him, the blade in the water. */
const PADDLE = 'M432 186L372 292'
const PADDLE_BLADE = 'M374 282C364 292 362 308 368 318C378 312 384 298 382 288Z'
const TONGA_UPPER: P[] = [
  [406, 202],
  [420, 214],
  [424, 200],
]
const TONGA_LOWER: P[] = [
  [398, 206],
  [398, 226],
  [409, 228],
]
/** His body kneeling, wrapped in a plain dark cloth, and his two arms on the paddle. */
const TONGA: Part[] = [
  { d: coat([402, 196], [396, 238], 1, { width: 28, hem: 8, flare: 3 }) },
  { d: 'M396 238L418 242L420 252', w: 9 },
  { d: TONGA_HAIR, t: headAt(1, TONGA_HEAD.at, TONGA_HEAD.rot, TONGA_HEAD.scale) },
  { d: HEAD_TONGA, t: headAt(1, TONGA_HEAD.at, TONGA_HEAD.rot, TONGA_HEAD.scale) },
  { d: 'M' + TONGA_LOWER.map(([x, y]) => `${x} ${y}`).join('L'), w: 7.4 },
  { d: 'M' + TONGA_UPPER.map(([x, y]) => `${x} ${y}`).join('L'), w: 7.4, sep: 1.3 },
]
/** His two hands closed round the shaft, each turned along it. */
const TONGA_HANDS: Part[] = [
  ...GRIP_HAND.map((q) => ({ ...q, t: 'translate(421.6 199.6) rotate(-62) scale(0.9)' })),
  ...GRIP_HAND.map((q) => ({ ...q, t: 'translate(406.4 227.6) rotate(-62) scale(0.9)' })),
]

function SholtosBetrayal({ uid }: ArtProps) {
  const m = marks()
  const sailClip = `${uid}-sail`
  const th = headAt(1, TONGA_HEAD.at, TONGA_HEAD.rot, TONGA_HEAD.scale)
  const sh = headAt(1, SMALL_HEAD.at, SMALL_HEAD.rot, SMALL_HEAD.scale)
  return (
    <>
      <defs>
        <clipPath id={sailClip}>
          <path d={SAIL} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 200], push: 1.03 })}>
        {/* the night, the stars */}
        <path d={m.stars} fill={PAPER} />
        <path d={m.sea} fill={PAPER} />
        <path d={`M0 ${HORIZON}H${W}`} stroke={PAPER} strokeWidth={LINE.fine} />

        {/* the island behind them, Mount Harriet, and the lights of Hope Town */}
        <path d={ISLAND} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.ridge} fill={PAPER} />
        {HOPE_TOWN.map(([x, y], i) => (
          <rect
            key={x}
            className="lc-glow"
            style={timing({ delay: 0.4 + i * 0.2 })}
            x={x - 3}
            y={y - 2.4}
            width={6}
            height={4.8}
            fill={RED}
          />
        ))}

        {/* the wake behind the canoe, and the water at its bow */}
        <path d={m.wake} fill={PAPER} />

        {/* the inside of the canoe; the bamboo mast, the yard, the sail of matting */}
        <path d={INSIDE} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={MAST} stroke={PAPER} strokeWidth={8} strokeLinecap="round" />
        <path d={MAST} stroke={INK} strokeWidth={4.6} strokeLinecap="round" />
        <path d={SAIL} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
        <g clipPath={`url(#${sailClip})`}>
          <path d={m.weave} stroke={INK} strokeWidth={0.8} fill="none" />
        </g>
        <path d={YARD} stroke={PAPER} strokeWidth={6.6} strokeLinecap="round" />
        <path d={YARD} stroke={INK} strokeWidth={3.8} strokeLinecap="round" />
        <path d="M570 70L572 236" stroke={INK} strokeWidth={4.6} />
        {/* the joints of the bamboo */}
        <path d="M565.8 110H576M566.4 150H576.4M567 190H577" stroke={PAPER} strokeWidth={1.2} />
        {/* the sheet, from the sail's corner to his hand */}
        <path d={SHEET} fill="none" stroke={PAPER} strokeWidth={4.2} strokeLinecap="round" />
        <path d={SHEET} fill="none" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />

        {/* the stores in the bows: gourds of water, cocoa-nuts, yams */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
          <path d="M694 246C692 234 696 228 702 228C705 220 712 220 714 228C720 230 722 238 718 248Z" />
          <circle cx={734} cy={238} r={9} />
          <circle cx={752} cy={242} r={7.6} />
          <path d="M762 246C762 236 770 230 780 234C786 236 784 244 778 248Z" />
        </g>
        <path
          d={
            gouge(729, 233, 738, 232, 0.6) +
            gouge(748, 238, 756, 238, 0.6) +
            gouge(704, 232, 710, 230, 0.5)
          }
          fill={PAPER}
        />

        {/* Tonga, in the stern, paddling */}
        <Figure parts={TONGA}>
          <g transform={th}>
            <path d={TONGA_CUTS} fill={PAPER} />
            <path d={TONGA_PUPIL} fill={INK} />
            <path
              d={TONGA_HAIR_CUTS}
              fill="none"
              stroke={PAPER}
              strokeWidth={0.8}
              strokeLinecap="round"
            />
          </g>
          <path d={gouge(392, 206, 386, 232, 0.8, 0.8)} fill={PAPER} />
        </Figure>

        {/* Small, at the mast, black against the sail */}
        <Figure parts={SMALL}>
          <g transform={sh}>
            <path d={SMALL_CUTS} fill={PAPER} />
            <path d={SMALL_PUPIL} fill={INK} />
            <path
              d={SMALL_CURLS}
              fill="none"
              stroke={PAPER}
              strokeWidth={0.8}
              strokeLinecap="round"
            />
          </g>
          <path d={gouge(594, 162, 588, 214, 0.9, 0.8)} fill={PAPER} />
        </Figure>

        {/* the near side of the canoe, over their knees, and the paddle's blade in the water */}
        <path d={HULL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <path
          d={gouge(330, 244, 802, 236, 1.1, 8) + gouge(400, 262, 760, 264, 0.8, 2)}
          fill={PAPER}
        />
        <path d={PADDLE_BLADE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={PADDLE} stroke={PAPER} strokeWidth={7.6} strokeLinecap="round" />
        <path d={PADDLE} stroke={INK} strokeWidth={4.2} strokeLinecap="round" />
        <Figure parts={TONGA_HANDS} halo={1.4} />
      </g>
    </>
  )
}

export const sholtosBetrayal: LinocutArt = { width: W, height: H, Draw: SholtosBetrayal }
