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
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Cut, HEAD, HEAD_OPEN, Nightcap, headAt, scroogeHead } from './cut-figure'

/**
 * Stave Four: "The dead man's belongings", the twelfth moment in the guide's
 * timeline, in old Joe's parlour. Every detail is from the text:
 *
 * - "a low-browed, beetling shop, below a pent-house roof, where iron, old
 *   rags, bottles, bones, and greasy offal, were bought. Upon the floor
 *   within, were piled up heaps of rusty keys, nails, chains, hinges, files,
 *   scales, weights, and refuse iron of all kinds." So a heavy beam overhead,
 *   and heaps of keys, chains, a pair of scales and bottles in the foreground.
 * - Old Joe, "a grey-haired rascal, nearly seventy years of age; who had
 *   screened himself from the cold air without, by a frousy curtaining of
 *   miscellaneous tatters, hung upon a line", sits "by a charcoal stove, made
 *   of old bricks" and "smoked his pipe". "The parlour was the space behind
 *   the screen of rags"; he "trimmed his smoky lamp (for it was night)". So
 *   the rags hang on a line at the right, the stove glows in the spot colour,
 *   and the lamp over the group is the only other red.
 * - The charwoman "sat down in a flaunting manner on a stool; crossing her
 *   elbows on her knees", and later laughs "leaning forward on her crossed
 *   arms". Joe "went down on his knees" to open her bundle and "dragged out a
 *   large and heavy roll of some dark stuff": "Bed-curtains!", taken down
 *   "rings and all, with him lying there". So the dark curtains lie unrolled
 *   on the floor with their rings cut white along the edge.
 * - "old Joe, producing a flannel bag with money in it, told out their
 *   several gains upon the ground", and she laughs. So he kneels with the bag,
 *   the coins in small heaps before him. He "chalked the sums he was disposed
 *   to give for each, upon the wall, and added them up into a total": the
 *   chalked figures are cut on a shutter on the wall behind him (the text
 *   gives no figures, so the ones drawn are only plausible sums).
 * - The laundress, Mrs Dilber, and "a man in faded black", the undertaker's
 *   man, stand behind with their own bundles.
 * - "Scrooge listened to this dialogue in horror. As they sat grouped about
 *   their spoil, in the scanty light afforded by the old man's lamp, he
 *   viewed them with a detestation and disgust". He stands back at the left
 *   in his dressing-gown and nightcap, with the Phantom: "shrouded in a deep
 *   black garment, which concealed its head, its face, its form, and left
 *   nothing of it visible save one outstretched hand". Its hand points on,
 *   towards the spoil. The two fade in, since the others cannot see them.
 *
 * The dead man himself is not shown: this is a scene about what is done with
 * his things. Nobody's dress is described beyond the above, so the thieves
 * wear the plain working dress of 1843. Nothing is taken from a film or a
 * stage production. Seed 1212.
 */

const W = 860
const H = 340

type Marks = {
  wall: string
  floor: string
  shroud: string
  rags: string[]
  ragCuts: string
  smoke: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1212)
  // "the scanty light afforded by the old man's lamp": one pool of light on
  // the group, the rest of the room left in the ink.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1.3 - Math.hypot(x - 430, (y - 150) * 1.25) / 215),
      clamp(1 - Math.hypot(x - 596, y - 236) / 110) * 0.6,
      0.04,
    )
  // Cut as ink on a cleared ground, so the pool of light can be nearly white
  // and the corners nearly solid: the ink marks swell past their spacing
  // where the light fails.
  const shade = (x: number, y: number) => clamp(1 - light(x, y))
  const wall = gougeField(r, { x0: 0, x1: W, y0: 22, y1: 262 }, shade, { max: 8 })
  let floor = ''
  for (let y = 266; y < H; y += 5) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 20, 70)
      const D = shade(x + len / 2, y - 70)
      if (r() < 0.3 + D)
        floor += gouge(x, y, x + len, y + between(r, -1, 1), 0.5 + D * 6, between(r, -0.6, 0.6))
      x += len + between(r, 6, 20)
    }
  }
  let shroud = ''
  for (let k = 0; k < 7; k++) {
    const x = 58 + k * 9
    shroud += gouge(
      x,
      96 + between(r, 0, 20),
      x - 26 + k * 7,
      322,
      0.8 + between(r, 0, 0.8),
      between(r, -3, 3),
    )
  }
  // The frousy curtaining of tatters: strips of every length hung on a line.
  const rags: string[] = []
  let ragCuts = ''
  let x = 604
  while (x < W + 10) {
    const w = between(r, 14, 30)
    const top = 34 + (x - 604) * 0.03
    const bottom = between(r, 150, 250)
    const midY = (top + bottom) / 2
    const pts = [
      `M${n(x)} ${n(top)}`,
      `L${n(x + w)} ${n(top + 1)}`,
      `L${n(x + w + between(r, -3, 3))} ${n(midY)}`,
      `L${n(x + w - between(r, 0, 6))} ${n(bottom - between(r, 0, 20))}`,
      `L${n(x + w * 0.6)} ${n(bottom + between(r, -6, 6))}`,
      `L${n(x + w * 0.35)} ${n(bottom - between(r, 4, 18))}`,
      `L${n(x + between(r, 0, 4))} ${n(bottom - between(r, 0, 8))}`,
      `L${n(x + between(r, -3, 3))} ${n(midY)}Z`,
    ]
    rags.push(pts.join(''))
    ragCuts += gouge(
      x + w * 0.5,
      top + 10,
      x + w * 0.5 + between(r, -4, 4),
      bottom - 24,
      0.6 + between(r, 0, 0.8),
    )
    if (r() < 0.5) {
      const hy = between(r, top + 30, bottom - 40)
      ragCuts += gouge(x + w * 0.3, hy, x + w * 0.7, hy + between(r, -3, 3), 1.6)
    }
    x += w - between(r, 2, 6)
  }
  const smoke = ribbon(
    [
      [400, 70],
      [396, 58],
      [402, 46],
      [396, 34],
      [400, 24],
    ],
    3,
  )
  cached = { wall, floor, shroud, rags, ragCuts, smoke }
  return cached
}

// ── The watchers ───────────────────────────────────────────────────────────

/** The Phantom: a tall black shroud, its hood turned towards the spoil, one hand out. */
const PHANTOM =
  'M80 18C62 18 52 34 52 54C52 64 54 72 58 78C46 90 38 110 36 136C32 190 28 260 22 330L140 330C136 260 128 190 120 136C116 108 108 88 98 78C102 70 104 62 102 50C100 32 92 18 80 18Z'
const PHANTOM_ARM: [string, number][] = [['M100 104C130 104 160 104 190 108', 13]]
const PHANTOM_HAND =
  'M190 102C196 100 204 100 212 102L222 103C224 104 224 106 222 107L210 108C206 112 198 113 192 112Z'

/** Scrooge, drawn back in horror, his hands up. */
const SCROOGE_HEAD = scroogeHead(180, 150, 32, false, -8)
const SCROOGE_GOWN = [
  'M174 166C164 182 160 206 162 228C156 254 150 280 146 318L208 320C206 290 202 264 198 238C202 212 200 190 192 172C186 166 180 164 174 166Z',
  'M142 316L160 316L162 324L138 324ZM194 318L214 318L218 326L194 326Z',
]
const SCROOGE_LIMBS: [string, number][] = [
  ['M186 178L204 194L214 180', 10],
  ['M180 184L196 204L212 202', 10],
]
const SCROOGE_HANDS = [
  'M212 182C211 175 214 170 219 170C222 171 222 176 220 181L217 186Z',
  'M210 204C211 197 215 193 220 194C223 196 222 201 219 205L214 208Z',
]

// ── The thieves ────────────────────────────────────────────────────────────

/** The charwoman on her stool, leaning on the elbows crossed on her knees, laughing. */
const CHAR_HEAD = headAt(362, 192, 28, true, -26)
/** Her cap, in the head's own frame: over the crown and the back of the head. */
const CHAR_CAP =
  'M-13 -6C-14 -18 -4 -24 5 -22C14 -20 18 -10 16 2C15 8 12 12 10 14L8 6C9 -4 4 -12 -4 -12C-9 -12 -12 -10 -13 -6Z'
const CHAR = [
  // bodice, leaning forward
  'M324 252C320 238 326 222 338 210C346 204 354 204 360 210C360 226 354 242 348 254Z',
  // skirt over the knees and down to the floor
  'M320 246C332 244 356 248 374 256C378 270 380 288 382 302L322 302C318 284 318 262 320 246Z',
  // the stool
  'M312 280H330V286H312ZM314 286L310 304H314L318 286ZM326 286L330 304H326L322 286Z',
]
const CHAR_LIMBS: [string, number][] = [
  // elbows out on her knees, forearms crossed
  ['M354 218L368 250L384 244', 8],
  ['M348 220L360 252L386 254', 8],
]

/** Old Joe on his knees, the flannel bag in one hand, telling out coins with the other. */
const JOE_HEAD = headAt(502, 206, 28, false, 10)
const JOE = [
  // bent back in an old coat
  'M506 222C520 220 534 230 538 246C542 262 538 276 532 282L500 284C498 270 496 250 498 236C499 228 501 224 506 222Z',
  // kneeling: thigh to the knee on the floor, shin and boot behind
  'M498 280C492 290 488 298 486 306L500 308L512 296L536 300L550 306L552 312L500 312L486 312C484 300 490 286 500 278Z',
  // the flannel bag
  'M468 244C462 244 458 250 460 258C462 266 474 268 480 262C484 256 482 248 476 244L474 240L470 240Z',
]
const JOE_LIMBS: [string, number][] = [
  ['M510 236L494 252L480 254', 8],
  ['M516 240L500 270L478 294', 8],
]
const JOE_HAND = 'M470 290C468 294 470 300 474 300C480 300 482 296 480 292Z'
/** Coins told out on the floor: [x, y, count] for each heap. */
const COINS: [number, number, number][] = [
  [440, 306, 3],
  [456, 308, 2],
  [468, 306, 4],
]

/** The laundress and the undertaker's man, standing back with their bundles. */
const DILBER_HEAD = headAt(404, 146, 22, true, 0)
const DILBER = [
  'M392 142C390 132 396 126 404 126C412 126 418 132 418 140L420 150L414 146C412 138 406 134 400 136C396 138 394 144 394 150Z',
  'M394 158C388 168 386 184 388 200C384 222 382 244 380 262L428 262C426 244 424 222 420 200C422 184 420 168 414 158C408 154 400 154 394 158Z',
  'M384 196C380 206 382 214 390 216L402 214L400 200Z',
]
const UNDERTAKER_HEAD = headAt(450, 132, 22, true, 0)
const UNDERTAKER = [
  // a low hat
  'M440 124L442 108C446 104 456 104 460 108L461 124ZM434 124L466 124L466 128L434 128Z',
  'M438 146C430 158 428 180 430 204L434 262H448L450 212L452 262H466L468 204C470 180 468 158 462 146C456 142 444 142 438 146Z',
]

// ── The chalked sums ───────────────────────────────────────────────────────

/** Chalk figures, each in a 6 by 10 box: strokes for the digits, a stroke and a dash. */
const GLYPHS: Record<string, string> = {
  '0': 'M3 0C0 0 0 3 0 5C0 7 0 10 3 10C6 10 6 7 6 5C6 3 6 0 3 0Z',
  '1': 'M1 2L3 0V10',
  '2': 'M0 2C1 0 5 -1 6 2C6 5 1 7 0 10H6',
  '3': 'M0 1C2 -1 6 0 5 3C4 5 2 5 2 5C4 5 6 6 6 8C5 11 1 10 0 9',
  '4': 'M5 10V0L0 7H6',
  '7': 'M0 0H6L2 10',
  '6': 'M5 0C2 1 0 4 0 7C0 9 1 10 3 10C5 10 6 9 6 7C6 5 4 4 2 5C1 5 0 6 0 7',
  '9': 'M6 3C6 1 5 0 3 0C1 0 0 1 0 3C0 5 2 6 3 6C5 6 6 4 6 3V10',
  '/': 'M0 10L5 0',
  '-': 'M0 5H5',
}
/**
 * The chalked sums: one line for each bundle, a rule, and the total, in
 * shillings and pence (2/6 and 1/9 and 3/4 make 7/7). The text gives no
 * figures, so these are only plausible ones; what matters is that they are
 * chalked, sums, and added up.
 */
const SUMS: [string, number, number][] = [
  ['2/6', 492, 46],
  ['1/9', 492, 64],
  ['3/4', 492, 82],
  ['7/7', 492, 106],
]
const CHALK =
  SUMS.flatMap(([text, x0, y]) =>
    [...text].map((c, i) => shift(GLYPHS[c] ?? '', x0 + i * 9, y)),
  ).join('') + 'M488 98H522'

/** A glyph's path moved to (dx, dy): its absolute coordinates offset, its relative ones kept. */
function shift(d: string, dx: number, dy: number) {
  return d.replace(/([MLHVC])([^MLHVCZ]*)/g, (_, cmd: string, args: string) => {
    const v = args
      .trim()
      .split(/[\s,]+/)
      .filter(Boolean)
      .map(Number)
    if (cmd === 'H') return `H${n(v[0] + dx)}`
    if (cmd === 'V') return `V${n(v[0] + dy)}`
    return cmd + v.map((a, i) => n(a + (i % 2 ? dy : dx))).join(' ')
  })
}

// ── The wares ──────────────────────────────────────────────────────────────

/** The stove of old bricks, its mouth glowing. */
const STOVE = 'M566 200H626V262H566Z'
const STOVE_PIPE = 'M586 200V120H596V200Z'

/** Scales, bottles, a coil of chain and keys, heaped in the foreground. */
const WARES = [
  // a heap of iron
  'M640 340C650 318 670 304 700 300C730 296 770 300 800 312C822 320 840 330 848 340Z',
  // bottles
  'M660 300L660 276C660 272 664 270 664 266V258H670V266C670 270 674 272 674 276V300Z',
  'M676 302L676 284C676 281 679 279 679 276V270H684V276C684 279 687 281 687 284V302Z',
  // the pair of scales
  'M760 314V262H764V314ZM730 262H794V266H730ZM726 266L716 290H744L734 266ZM790 266L780 290H808L798 266ZM748 314H776V320H748Z',
]

function DeadMansBelongings({ uid }: ArtProps) {
  const m = marks()
  const hood = `${uid}-hood`
  return (
    <>
      <defs>
        <clipPath id={hood}>
          <path d={PHANTOM} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 200], push: 1.03 })}>
        {/* the parlour, lit only round the lamp */}
        <rect x={0} y={20} width={W} height={H - 20} fill={PAPER} />
        <path d={m.wall} fill={INK} />
        <rect x={0} y={262} width={W} height={4} fill={INK} />
        <path d={m.floor} fill={INK} />
        {/* the low beam of the pent-house roof */}
        <rect x={0} y={0} width={W} height={20} fill={INK} />
        <path
          d={gouge(0, 20, W, 20, 1.6) + gouge(40, 10, 300, 11, 0.8) + gouge(520, 9, 820, 10, 0.8)}
          fill={PAPER}
        />

        {/* a shutter on the wall, and the sums chalked on it, with their total */}
        <path d="M476 34H552V150H476Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(501, 38, 501, 146, 0.8) + gouge(527, 38, 527, 146, 0.8)} fill={PAPER} />
        <path
          d={CHALK}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* the frousy curtaining of tatters, hung upon a line */}
        <path d="M600 32L860 40" stroke={PAPER} strokeWidth={1.2} />
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.fine} strokeLinejoin="round">
          {m.rags.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <path d={m.ragCuts} fill={PAPER} />

        {/* the charcoal stove of old bricks, glowing */}
        <path d={STOVE_PIPE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={STOVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path
          d="M566 214H626M566 228H626M566 242H626M580 200V214M606 200V214M594 214V228M572 228V242M616 228V242M586 242V262M608 242V262"
          stroke={PAPER}
          strokeWidth={1}
        />
        <path d="M580 236H612V256H580Z" fill={INK} />
        <path
          className="lc-glow"
          d="M582 256C584 248 590 246 596 250C600 244 608 246 610 256Z"
          fill={RED}
        />

        {/* the hanging lamp, smoking */}
        <path d="M400 20V70" stroke={INK} strokeWidth={1.4} strokeDasharray="3 2" />
        <path d="M390 104L410 104L408 96L392 96Z" fill={INK} stroke={PAPER} strokeWidth={1} />
        <path
          d="M393 96L407 96L406 76C406 72 403 70 400 70C397 70 394 72 394 76Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9, delay: 0.2 })}
          d="M400 92C397 88 398 84 400 79C402 84 403 88 400 92Z"
          fill={RED}
        />
        <g className="lc-rise" style={timing({ delay: 0.6, dur: 1.6 })}>
          <path d={m.smoke} fill={PAPER} />
        </g>

        {/* the laundress and the undertaker's man, standing back */}
        <Cut
          parts={[
            { shapes: [HEAD], ...DILBER_HEAD },
            { shapes: DILBER },
            { shapes: [HEAD], ...UNDERTAKER_HEAD },
            { shapes: UNDERTAKER },
          ]}
        >
          <path d={gouge(398, 170, 392, 250, 0.9) + gouge(446, 160, 440, 200, 0.8)} fill={PAPER} />
        </Cut>

        {/* the bed-curtains, rings and all, spread on the floor */}
        <path
          d="M352 290C390 282 440 284 480 290C500 294 520 300 534 310C520 318 480 324 430 324C390 324 360 318 346 310C344 302 346 294 352 290Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(362, 300, 470, 296, 1) +
            gouge(370, 312, 500, 310, 1.2) +
            gouge(420, 318, 520, 312, 0.8)
          }
          fill={PAPER}
        />
        <g fill="none" stroke={PAPER} strokeWidth={1.3}>
          {[360, 374, 388, 402, 416, 430, 444, 458].map((x) => (
            <circle key={x} cx={x} cy={290 - Math.sin((x - 350) / 40) * 2} r={3} />
          ))}
        </g>

        {/* the charwoman */}
        <Cut
          parts={[
            { shapes: [HEAD_OPEN, CHAR_CAP], ...CHAR_HEAD },
            { shapes: CHAR, limbs: CHAR_LIMBS },
          ]}
        >
          <g transform={CHAR_HEAD.at}>
            {/* the frilled edge of her cap */}
            <path
              d="M-12 -7C-10 -12 -4 -14 2 -13"
              fill="none"
              stroke={PAPER}
              strokeWidth={1.2 / CHAR_HEAD.scale}
              strokeLinecap="round"
            />
          </g>
          <path d={gouge(334, 262, 330, 298, 1) + gouge(352, 262, 360, 298, 1)} fill={PAPER} />
        </Cut>

        {/* old Joe, grey-haired, with his pipe */}
        <Cut
          parts={[
            { shapes: [HEAD], ...JOE_HEAD },
            { shapes: JOE, limbs: JOE_LIMBS, front: [JOE_HAND] },
          ]}
        >
          <g transform={JOE_HEAD.at}>
            {/* grey hair, cut white at the back of the head */}
            <path
              d="M2 -12C8 -12 12 -6 12 0M5 -14C11 -12 14 -4 13 4M8 -15C13 -12 16 -2 14 8"
              fill="none"
              stroke={PAPER}
              strokeWidth={1.2 / JOE_HEAD.scale}
              strokeLinecap="round"
            />
          </g>
          {/* the pipe */}
          <path d="M492 212L478 218" stroke={INK} strokeWidth={2} strokeLinecap="round" />
          <path d="M474 214H482V222H474Z" fill={INK} stroke={PAPER} strokeWidth={0.9} />
          <path d={gouge(512, 232, 530, 276, 1)} fill={PAPER} />
          <path d="M464 250Q470 254 478 250" stroke={PAPER} strokeWidth={1} fill="none" />
        </Cut>
        <g fill={PAPER} stroke={INK} strokeWidth={0.9}>
          {COINS.flatMap(([x, y, k]) =>
            Array.from({ length: k }, (_, i) => (
              <ellipse key={`${x}-${i}`} cx={x} cy={y - i * 2.2} rx={4.4} ry={1.8} />
            )),
          )}
        </g>

        {/* the wares in the foreground */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
          {WARES.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g fill="none" stroke={PAPER} strokeWidth={1.4}>
          {[0, 1, 2, 3, 4, 5, 6].map((k) => (
            <ellipse
              key={k}
              cx={700 + k * 11}
              cy={316 - Math.sin(k) * 4}
              rx={6}
              ry={3.4}
              transform={`rotate(${k % 2 ? 30 : -20} ${700 + k * 11} ${316 - Math.sin(k) * 4})`}
            />
          ))}
        </g>
        <path
          d="M800 322L824 316M812 319L814 324M818 318L820 322M654 330L676 322M664 326L666 331"
          stroke={PAPER}
          strokeWidth={2}
          strokeLinecap="round"
        />
        <g fill="none" stroke={PAPER} strokeWidth={1.6}>
          <circle cx={828} cy={314} r={4} />
          <circle cx={650} cy={332} r={3.6} />
        </g>

        {/* the Phantom and Scrooge, unseen */}
        <g className="lc-fade-in" style={timing({ delay: 0.9, dur: 1.4 })}>
          <Cut parts={[{ shapes: [PHANTOM], limbs: PHANTOM_ARM }]} halo={2.6}>
            <g clipPath={`url(#${hood})`}>
              <path d={m.shroud} fill={PAPER} />
            </g>
            <path
              d="M96 38C104 50 104 66 98 78"
              fill="none"
              stroke={PAPER}
              strokeWidth={LINE.carve}
            />
            <path d={PHANTOM_HAND} fill={PAPER} stroke={INK} strokeWidth={1} />
            <path d="M206 102L206 108M200 102L200 110" stroke={INK} strokeWidth={0.8} />
          </Cut>
          <Cut
            parts={[
              SCROOGE_HEAD,
              { shapes: SCROOGE_GOWN, limbs: SCROOGE_LIMBS, front: SCROOGE_HANDS },
            ]}
          >
            <Nightcap part={SCROOGE_HEAD} />
            <path
              d="M176 168C174 186 172 206 172 228"
              fill="none"
              stroke={PAPER}
              strokeWidth={1.4}
            />
            <path d="M162 230Q180 235 198 230" fill="none" stroke={PAPER} strokeWidth={1.4} />
            <path
              d={gouge(190, 242, 200, 312, 1.1, -0.6) + gouge(166, 246, 156, 312, 1)}
              fill={PAPER}
            />
          </Cut>
        </g>
      </g>
    </>
  )
}

export const deadMansBelongings: LinocutArt = { width: W, height: H, Draw: DeadMansBelongings }
