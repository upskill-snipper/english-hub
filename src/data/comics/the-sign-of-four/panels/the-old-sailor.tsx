import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  COLLAR,
  Figure,
  GRIP_HAND,
  HEAD_HOLMES,
  HEAD_JONES,
  HEAD_WATSON,
  HOLMES_CUTS,
  HOLMES_HAIR,
  HOLMES_PUPIL,
  HolmesHands,
  JONES_CUTS,
  JONES_FLUSH,
  LONG_HAND,
  OPEN_HAND,
  WATSON_CUTS,
  WATSON_HAIR,
  WATSON_PUPIL,
  coat,
  floorBoards,
  gent,
  greyish,
  headAt,
  jonesPaunch,
  limbArea,
  type P,
  type Part,
} from './people'
import { Armchair, ChairArm, Mantel, armchair } from './baker-street'

/**
 * Chapter 9, "A Break in the Chain": "The old sailor", the eleventh moment in
 * the guide's timeline. The panel is the instant the disguise comes off, so a
 * student sees at once that the old seaman and Holmes are one man. Every
 * detail is from the text:
 *
 * - "At three o'clock in the afternoon there was a loud peal at the bell ...
 *   no less a person than Mr. Athelney Jones was shown up to me"; "Take that
 *   chair and try one of these cigars"; "And a whiskey-and-soda?" "Well, half
 *   a glass. It is very hot for the time of year". So it is a hot afternoon,
 *   the window is clear and bright (no fog, unlike Chapter 1), Jones sits in
 *   a plain chair, and a small table between him and Watson holds the cigars
 *   and his half glass.
 * - The old man: "an aged man, clad in seafaring garb, with an old pea-jacket
 *   buttoned up to his throat"; "As he leaned upon a thick oaken cudgel"; "He
 *   had a coloured scarf round his chin, and I could see little of his face
 *   save a pair of keen dark eyes, overhung by bushy white brows, and long
 *   grey side-whiskers". At dawn the same day: "clad in a rude sailor dress
 *   with a pea-jacket, and a coarse red scarf round his neck". So Holmes still
 *   wears the short double-breasted pea-jacket, and the rest of the disguise
 *   is off: the scarf, the spot colour (the text's own red), is thrown over
 *   the back of the sofa behind him, and the cudgel leans on the front of the
 *   sofa's arm. (The scarf was tried round his neck; red so close under a
 *   chin can read as blood, so it is kept away from his face.)
 * - "Sit over here on the sofa"; "Jones and I resumed our cigars and our
 *   talk"; "'I think that you might offer me a cigar too,' he said. We both
 *   started in our chairs. There was Holmes sitting close to us with an air of
 *   quiet amusement." "'Here is the old man,' said he, holding out a heap of
 *   white hair. 'Here he is ... wig, whiskers, eyebrows, and all.'" So Holmes
 *   sits on the sofa, his own face and his own dark hair bare, a small smile
 *   cut at the corner of his mouth, and holds out on his open white hand the
 *   heap of white hair: the wig, the two long side-whiskers hanging over the
 *   edge of his hand, and the two bushy brows on top. The sofa is drawn end
 *   on, as every seat in these panels is.
 * - The fireplace is the room's own (Mantel in ./baker-street.tsx), its grate
 *   cold on a hot day, the bottle and the closed case on its shelf as in
 *   every Baker Street panel.
 * - "'Ah, You rogue!' cried Jones, highly delighted. 'You would have made an
 *   actor, and a rare one.'" So Jones leans forward in his chair, his cigar
 *   held out at Holmes, his "red-faced" flush on the cheekbone as the kit
 *   draws it (JONES_FLUSH), and Watson, who "started" in his chair, leans back
 *   with an open hand up.
 *
 * Seeds: 1101 (the wall), 1102 (the floor), 1103 (the houses opposite).
 */

const W = 860
const H = 340
const FLOOR = 262
/** The window behind the sofa: the lightest area, so Holmes is cut against it. */
const WIN = { x: 652, y: 22, w: 176, h: 206 }

type Marks = { wall: string; floor: string; houses: string; hatch: string; windows: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A bright afternoon: the wall is cut lightest round the window.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 736) * 0.66, (y - 120) * 1.1) / 360) ** 1.05, 0.05)
  const wall = gougeField(rng(1101), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6.2,
    len: [14, 50],
  })
  const floor = floorBoards(rng(1102), W, H, FLOOR, [430, 90], 34)
  // The houses opposite, clear in the sun: a roofline with chimneys, the fronts
  // hatched, rows of dark windows.
  const r = rng(1103)
  const { x, y, w, h } = WIN
  let houses = `M${x} ${y + h}`
  let hx = x
  const tops: [number, number, number][] = []
  while (hx < x + w) {
    const bw = between(r, 40, 62)
    const top = y + h * between(r, 0.6, 0.68)
    houses += `L${n(hx)} ${n(top)}L${n(hx + bw * 0.22)} ${n(top)}V${n(top - between(r, 9, 15))}H${n(hx + bw * 0.34)}V${n(top)}L${n(hx + bw)} ${n(top)}`
    tops.push([hx, hx + bw, top])
    hx += bw
  }
  houses += `L${x + w} ${y + h}Z`
  let hatch = ''
  for (let k = x - h; k < x + w; k += 6) hatch += `M${n(k)} ${y + h}L${n(k + h * 0.5)} ${y}`
  let windows = ''
  for (const [a, b, top] of tops)
    for (let wy = top + 14; wy < y + h - 12; wy += 30)
      for (let wx = a + 8; wx < b - 12; wx += 18) windows += `M${n(wx)} ${n(wy)}h8v14h-8Z`
  cached = { wall, floor, houses, hatch, windows }
  return cached
}

/** The sash window on a clear afternoon: the frame and bars of FogWindow, without the fog. */
function ClearWindow({ uid, m }: { uid: string; m: Marks }) {
  const { x, y, w, h } = WIN
  const clip = `${uid}-win`
  const hclip = `${uid}-houses`
  const mid = y + h * 0.5
  return (
    <g>
      <defs>
        <clipPath id={clip}>
          <rect x={x} y={y} width={w} height={h} />
        </clipPath>
        <clipPath id={hclip}>
          <path d={m.houses} />
        </clipPath>
      </defs>
      <rect x={x - 10} y={y - 10} width={w + 20} height={h + 20} fill={INK} />
      <rect x={x} y={y} width={w} height={h} fill={PAPER} />
      <g clipPath={`url(#${clip})`}>
        <g clipPath={`url(#${hclip})`}>
          <path d={m.hatch} stroke={INK} strokeWidth={LINE.fine} />
          <path d={m.windows} fill={INK} />
        </g>
        <path d={m.houses} fill="none" stroke={INK} strokeWidth={1.4} />
      </g>
      <g fill={INK}>
        <rect x={x} y={y} width={w} height={4} />
        <rect x={x} y={y + h - 4} width={w} height={4} />
        <rect x={x} y={y} width={4} height={h} />
        <rect x={x + w - 4} y={y} width={4} height={h} />
        <rect x={x} y={mid - 3} width={w} height={6} />
        <rect x={x + w / 2 - 2} y={y} width={4} height={h} />
        <rect x={x} y={y + h * 0.25 - 1.3} width={w} height={2.6} />
        <rect x={x} y={y + h * 0.75 - 1.3} width={w} height={2.6} />
      </g>
      <rect x={x - 16} y={y + h + 10} width={w + 32} height={6} fill={PAPER} />
      <rect x={x - 16} y={y + h + 16} width={w + 32} height={2} fill={INK} />
    </g>
  )
}

// ── Watson, in his armchair at the left, started back, one open hand up ─────
const WAT_CHAIR = armchair(30, 1, 244, 300)
const WAT_HEAD = { d: HEAD_WATSON, at: [108, 128] as P, rot: -10, scale: 1.3 }
const WAT_RAISED: P[] = [
  [106, 174],
  [128, 208],
  [154, 190],
]
const WATSON: Part[] = gent({
  facing: 1,
  neck: [98, 166],
  hip: [88, 240],
  head: WAT_HEAD,
  body: { width: 34, hem: 16, flare: 4 },
  arm: 9,
  leg: 10,
  near: {
    arm: WAT_RAISED,
    leg: [
      [92, 240],
      [146, 244],
      [150, 318],
    ],
    hand: { parts: OPEN_HAND, scale: 1.2, rot: -14 },
  },
  far: {
    arm: [
      [98, 172],
      [104, 204],
      [128, 206],
    ],
    leg: [
      [86, 242],
      [136, 250],
      [136, 318],
    ],
    hand: { parts: GRIP_HAND, scale: 1 },
  },
})
const WATSON_BODY = WATSON.slice(0, -OPEN_HAND.length - 1)
const WATSON_ARM = WATSON.slice(-OPEN_HAND.length - 1)

// ── Jones, in a plain chair, leaning forward, his cigar out at Holmes ───────
const JON_HEAD = { d: HEAD_JONES, at: [352, 134] as P, rot: -4, scale: 1.3 }
const JON_NECK: P = [338, 170]
const JON_HIP: P = [314, 244]
const JON_BODY = { width: 44, hem: 14, flare: 4 }
const JON_CIGAR_ARM: P[] = [
  [342, 180],
  [372, 204],
  [404, 190],
]
const JON_FAR_ARM: P[] = [
  [332, 180],
  [344, 214],
  [366, 236],
]
const JON_NEAR_LEG: P[] = [
  [318, 244],
  [378, 248],
  [382, 318],
]
const JON_FAR_LEG: P[] = [
  [312, 246],
  [366, 254],
  [366, 318],
]
const JONES_ALL: Part[] = gent({
  facing: 1,
  neck: JON_NECK,
  hip: JON_HIP,
  head: JON_HEAD,
  body: JON_BODY,
  arm: 10,
  leg: 11,
  near: {
    arm: JON_CIGAR_ARM,
    leg: JON_NEAR_LEG,
    hand: { parts: GRIP_HAND, scale: 1.1, rot: -4 },
  },
  far: {
    arm: JON_FAR_ARM,
    leg: JON_FAR_LEG,
    hand: { parts: OPEN_HAND, scale: 1.05, rot: 20 },
  },
})
/**
 * "a very stout, portly man in a grey suit": the ground the suit covers, for
 * the clip its fine upright cuts are printed through. Coat, paunch, sleeves
 * and trousers; not the boots, the hands or the head.
 *
 * REDRAWN on 2 October 2026 (review). The cuts were clipped to the coat
 * alone, because a clip ignores the strokes the limbs are drawn with, so the
 * suit printed as a grey tabard over black sleeves and trousers, unlike his
 * portrait. limbArea() in ./people.tsx gives the clip the limbs as well; the
 * cuts stop at the cuffs and at the tops of the boots.
 */
const JONES_SUIT: string[] = [
  coat(JON_NECK, JON_HIP, 1, JON_BODY),
  jonesPaunch(JON_NECK, JON_HIP, 1, 44),
  ...limbArea(JON_CIGAR_ARM, 10, 6),
  ...limbArea(JON_FAR_ARM, 10, 6),
  ...limbArea(JON_NEAR_LEG, 11),
  ...limbArea(JON_FAR_LEG, 11),
]
/** Where the suit's cuts are laid, down to the tops of his boots. */
const JONES_SUIT_BOX = { x0: 280, x1: 420, y0: 160, y1: 310 }
/**
 * His paunch goes over the coat, before the near leg: after the far arm, its
 * open hand (six parts), the far leg and boot, the body and the coat.
 */
const COAT_AT = 1 + OPEN_HAND.length + 4
const JONES: Part[] = [
  ...JONES_ALL.slice(0, COAT_AT),
  { d: jonesPaunch(JON_NECK, JON_HIP, 1, 44) },
  ...JONES_ALL.slice(COAT_AT),
]
/** The plain chair he was given, in profile, facing right. */
const JONES_CHAIR = {
  back: 'M286 252L282 150Q284 142 292 144L296 252Z',
  seat: 'M282 244H352V254H282Z',
  legs: 'M288 254V304M348 254V304',
}

// ── Holmes, on the sofa at the right, the heap of white hair held out ───────
const SOFA = armchair(812, -1, 248, 300)
const HOL_HEAD = { d: HEAD_HOLMES, at: [698, 132] as P, rot: 2, scale: 1.3 }
const HOL_NECK: P = [708, 168]
const HOL_HIP: P = [724, 244]
const WIG_ARM: P[] = [
  [702, 178],
  [668, 214],
  [628, 206],
]
const WIG_HAND = { parts: LONG_HAND, scale: 1.2, rot: 8, flip: false }
const HOLMES: Part[] = gent({
  facing: -1,
  neck: HOL_NECK,
  hip: HOL_HIP,
  head: HOL_HEAD,
  body: { width: 28, hem: 10, flare: 3 },
  arm: 8.4,
  leg: 9.2,
  near: {
    arm: WIG_ARM,
    leg: [
      [720, 246],
      [662, 250],
      [658, 318],
    ],
  },
  far: {
    arm: [
      [714, 178],
      [722, 210],
      [702, 232],
    ],
    leg: [
      [726, 246],
      [676, 256],
      [674, 318],
    ],
  },
})
const HOLMES_BODY = HOLMES.slice(0, -1)
const HOLMES_ARM = HOLMES.slice(-1)

/** The pea-jacket's two rows of buttons, its front edge and pocket flaps, cut in paper. */
const JACKET_CUTS =
  [182, 194, 206, 218, 230]
    .map((y) => {
      const x = 702 + (y - 182) * 0.2
      return `M${n(x - 1.6)} ${y}a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0ZM${n(x + 6.4)} ${y}a1.6 1.6 0 1 0 3.2 0a1.6 1.6 0 1 0 -3.2 0Z`
    })
    .join('') +
  gouge(698, 178, 704, 240, 0.7, 0.4) +
  gouge(712, 226, 728, 226, 0.6) +
  gouge(716, 192, 720, 230, 0.6, -0.8) +
  gouge(700, 170, 712, 171, 0.8)

/**
 * The coarse red scarf, off his chin now with the rest of the disguise and
 * thrown over the top of the sofa's back behind him: a fold over the top and
 * two ends hanging down, each with a fringe. Kept well away from his face,
 * because red at a mouth or a chin reads as blood.
 */
const SCARF =
  'M776 116C784 108 798 106 808 110L810 118C800 115 788 117 780 123Z' +
  'M780 121C778 134 778 148 781 162L773 163C770 149 770 134 772 122Z' +
  'M792 117C795 132 796 148 794 164L786 164C787 149 786 134 784 119Z'
const SCARF_LINES =
  'M780 113.4C788 110.6 796 110 804 111.6M775.6 128L775.4 156M789.4 126C790.6 138 790.8 150 790 160' +
  'M773.6 163.6L773.2 169.6M776.6 163.6L776.6 169.8M779.6 163.2L780 169.2M787 164.6L786.6 170.6M790 164.8L790 170.8M793 164.6L793.4 170.6'

/**
 * The heap of white hair, lying on his open palm: the wig in a loose mound,
 * the two long grey side-whiskers hanging over the edge of his hand, and the
 * two bushy brows on top, all in PAPER. Its own frame: the middle of the palm
 * at (0, 0).
 */
const WIG =
  'M-20 0C-22.6 -3 -21 -6.6 -18 -7.4C-18.6 -10.6 -15.6 -13 -12.4 -12.4C-11 -15.6 -7 -16.6 -4.4 -14.8C-2.4 -17.6 2 -17.6 3.8 -15.2C6.6 -16.6 10.4 -15 10.8 -12C13.8 -12 16.2 -9.2 15.4 -6.2C17.8 -4.6 17.4 -0.6 14.4 2C6 3.4 -10 3.4 -20 0Z'
const WHISKERS =
  'M-19.6 -0.4C-23 6 -23.4 15 -20.6 24.6C-18.6 17.6 -16.6 10 -14.8 1.6Z' +
  'M-12.4 1.8C-14.6 8.6 -14.2 17 -11.4 25.6C-10 18 -8.6 10.6 -7.4 2.4Z'
const BROWS =
  'M-12 -14C-10.4 -18.6 -5.6 -20.2 -1.6 -18.6C-3.2 -16 -7 -14.4 -12 -14Z' +
  'M1.6 -15C3.6 -19.6 8.4 -20 12 -18C10 -15.6 6.4 -14.6 1.6 -15Z'
const WIG_LINES =
  'M-16.6 -3.6C-11 -9.6 -1 -11.6 10 -7.6M-13.6 -8.4C-9 -11 -5 -12.4 -1 -12.6M2.6 -12.6C5.4 -12.2 8 -11 9.4 -9.6M-17 -0.6C-8 -3.4 3 -3.2 12.6 -1.4M-6 -6.4C-2 -7.4 3 -7.2 7 -5.6' +
  'M-20 4.6C-20.8 10 -20.6 15.6 -19.4 20.6M-18 4.4C-18.6 9 -18.4 13.6 -17.6 17.4M-11.6 6C-12 11 -11.4 16.6 -10.2 21.6M-9.8 5.4C-10 9.6 -9.6 13.6 -8.8 17'
const WIG_AT: P = [638, 198]
const WIG_SCALE = 1.15

/** "a thick oaken cudgel", leaning on the front of the sofa's arm: knots cut in paper. */
const CUDGEL = 'M694 316L716 214'
const CUDGEL_KNOTS =
  gouge(697, 298, 701, 292, 0.9) + gouge(704, 268, 707, 262, 0.9) + gouge(710, 240, 713, 234, 0.9)

/** The small table between Watson and Jones: the cigar box and his half glass. */
const TABLE = 'M196 214H262V220H196ZM227 220V298M212 300H244'

function TheOldSailor({ uid }: ArtProps) {
  const m = marks()
  const wt = headAt(1, WAT_HEAD.at, WAT_HEAD.rot, WAT_HEAD.scale)
  const jt = headAt(1, JON_HEAD.at, JON_HEAD.rot, JON_HEAD.scale)
  const ht = headAt(-1, HOL_HEAD.at, HOL_HEAD.rot, HOL_HEAD.scale)
  const suit = `${uid}-suit`
  return (
    <>
      <defs>
        <clipPath id={suit}>
          {JONES_SUIT.map((d) => (
            <path key={d} d={d} />
          ))}
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [600, 170], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the window on a hot, clear afternoon */}
        <ClearWindow uid={uid} m={m} />
        {/* the same fireplace as Chapter 1, its grate cold */}
        <Mantel x={430} shelf={140} floor={FLOOR} />

        {/* the small table: the cigars, and Jones's half glass */}
        <path d={TABLE} stroke={INK} strokeWidth={5} fill={INK} />
        <path d="M200 205H226V214H200Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={gouge(203, 209.4, 223, 209.4, 0.7)} fill={PAPER} />
        <path d="M238 196H250L248.6 214H239.4Z" fill={PAPER} stroke={INK} strokeWidth={1.1} />
        <path d="M239.6 205.4H248.6" stroke={INK} strokeWidth={0.8} />

        {/* Watson, started back in his armchair */}
        <Armchair c={WAT_CHAIR} />
        <Figure parts={WATSON_BODY}>
          <path d={WATSON_CUTS + WATSON_HAIR + COLLAR} transform={wt} fill={PAPER} />
          <path d={WATSON_PUPIL} transform={wt} fill={INK} />
        </Figure>
        <ChairArm c={WAT_CHAIR} />
        <Figure parts={WATSON_ARM} />

        {/* Jones in his plain chair, delighted */}
        <path d={JONES_CHAIR.legs} stroke={INK} strokeWidth={4.6} />
        <path d={JONES_CHAIR.back} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <Figure parts={JONES}>
          <path
            d={greyish(JONES_SUIT_BOX)}
            clipPath={`url(#${suit})`}
            stroke={PAPER}
            strokeWidth={0.9}
            fill="none"
          />
          <g transform={jt}>
            <path d={JONES_CUTS + COLLAR} fill={PAPER} />
            <path
              d={JONES_FLUSH}
              fill="none"
              stroke={RED}
              strokeWidth={1.8}
              strokeLinecap="round"
            />
          </g>
        </Figure>
        <path d={JONES_CHAIR.seat} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        {/* his cigar, held out, and its smoke */}
        <path d="M410 184L424 178" stroke={PAPER} strokeWidth={5.4} strokeLinecap="round" />
        <path d="M410 184L424 178" stroke={INK} strokeWidth={3} strokeLinecap="round" />
        <path d="M424.6 177.6L426.4 176.8" stroke={PAPER} strokeWidth={2.6} strokeLinecap="round" />
        <path
          className="lc-rise"
          style={timing({ delay: 1.2, dur: 1.6 })}
          d="M427 173C431 166 425 160 430 152C434 146 431 140 434 134"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.4}
          strokeLinecap="round"
        />

        {/* the sofa, end on, and Holmes on it */}
        <Armchair c={SOFA} />
        <Figure parts={HOLMES_BODY}>
          <path d={JACKET_CUTS} fill={PAPER} />
          <g transform={ht}>
            <path d={HOLMES_CUTS + HOLMES_HAIR} fill={PAPER} />
            <path d={HOLMES_PUPIL} fill={INK} />
            {/* "an air of quiet amusement": the corner of the mouth lifted */}
            <path d={gouge(9.4, 11.4, 11, 13.2, 0.45)} fill={PAPER} />
          </g>
        </Figure>
        <ChairArm c={SOFA} />
        {/* the cudgel, leaning on the front of the sofa's arm */}
        <path d={CUDGEL} stroke={PAPER} strokeWidth={10.4} strokeLinecap="round" />
        <path d={CUDGEL} stroke={INK} strokeWidth={7.4} strokeLinecap="round" />
        <path d={CUDGEL_KNOTS} fill={PAPER} />
        {/* the red scarf, thrown over the back of the sofa */}
        <path d={SCARF} fill={RED} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={SCARF_LINES} fill="none" stroke={INK} strokeWidth={0.8} strokeLinecap="round" />
        <Figure parts={HOLMES_ARM} />

        {/* his white hand held out, palm up, and the heap of white hair lying on it */}
        <HolmesHands facing={-1} arms={[{ arm: WIG_ARM, hand: WIG_HAND }]} />
        <g transform={`translate(${WIG_AT[0]} ${WIG_AT[1]}) scale(${WIG_SCALE})`}>
          <path
            d={WIG + WHISKERS + BROWS}
            fill={PAPER}
            stroke={INK}
            strokeWidth={4}
            strokeLinejoin="round"
          />
          <path d={WIG + WHISKERS + BROWS} fill={PAPER} stroke={PAPER} strokeWidth={1} />
          <path d={WIG + WHISKERS + BROWS} fill="none" stroke={INK} strokeWidth={1.1} />
          <path d={WIG_LINES} fill="none" stroke={INK} strokeWidth={0.8} strokeLinecap="round" />
        </g>
      </g>
    </>
  )
}

export const theOldSailor: LinocutArt = { width: W, height: H, Draw: TheOldSailor }
