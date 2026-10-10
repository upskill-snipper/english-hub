import type { ArtProps, ComicPanel, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/timing'

import { Person, seatedBody, type P } from './people'

/**
 * Chapter 1: "A rich young man takes Netherfield", the first moment in the
 * guide's timeline. Every detail is from the held text
 * (src/data/full-texts/pride-and-prejudice.ts):
 *
 * - "'My dear Mr. Bennet,' said his lady to him one day, 'have you heard that
 *   Netherfield Park is let at last?' Mr. Bennet replied that he had not."
 *   So there are two people and no more: the five daughters are talked of,
 *   never present. The chapter gives no hour, so it is drawn by day, in the
 *   light of one tall sash window.
 * - "'Do not you want to know who has taken it?' cried his wife impatiently";
 *   "'Oh! single, my dear, to be sure! A single man of large fortune; four or
 *   five thousand a year. What a fine thing for our girls!'" So Mrs Bennet is
 *   on her feet, leaning towards him, one hand thrown out with the news and
 *   the other at her breast, her mouth open: she is talking. Nothing in the
 *   chapter colours her face, so nothing in this print is red. (Cut first
 *   with her impatience as a flush, the red sat beside her open mouth, where
 *   at phone width it reads as blood, and the kit gives a flush only where
 *   the text does.)
 * - "'You take delight in vexing me. You have no compassion on my poor
 *   nerves.'" The hand at her breast is her nerves.
 * - "Mr. Bennet was so odd a mixture of quick parts, sarcastic humour,
 *   reserve, and caprice"; "Mr. Bennet made no answer." So he sits back in his
 *   chair, his legs crossed, turned to her with the kit's dry half-smile and
 *   nothing else moving. "With a book he was regardless of time" (Chapter 3),
 *   and when his wife next bursts in on him with a match to make, "Mr. Bennet
 *   raised his eyes from his book" (Chapter 20): so a book lies shut on his
 *   knee under his hand.
 * - "When a woman has five grown up daughters" (Chapter 1): she is a matron,
 *   in the cap and kerchief of 1811 (the kit's Mrs Bennet); "I certainly _have_
 *   had my share of beauty".
 *
 * Longbourn is not described here, so the room is plain: a panelled door, a
 * sash window with its curtains and the country beyond it, a fireplace with
 * nothing in the grate (Bingley "is to take possession before Michaelmas",
 * so it is early autumn, and the text lights no fire), floorboards. Nothing is
 * taken from any film or television production.
 *
 * Seeds: 1101 (the wall), 1102 (the floor), 1103 (the trees beyond the
 * window), 1104 (the curtains and the door).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const BASE = 262
/** The window's glass. */
const WIN = { x0: 262, x1: 394, y0: 36, y1: 212 }

type Marks = {
  wall: string
  wains: string
  floor: string
  shade: string
  trees: string
  folds: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1101)
  // The day comes in at the window, and the wall is cut away where it falls.
  const light = (x: number, y: number) => {
    const l1 = clamp(1 - Math.hypot((x - 330) * 0.6, (y - 120) * 0.9) / 280)
    return Math.max(l1, 0.07)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: 190 }, light)
  let wains = ''
  for (let x = 4; x < W; x += 9) {
    if (x > 678 && x < 852) continue
    const L = light(x, 220)
    wains += wedge(x + between(r, -0.6, 0.6), 202, x + between(r, -0.6, 0.6), 252, 0.4, 0.6 + L * 3)
  }

  // Floorboards to a vanishing point by the window, and the shadows on them.
  const f = rng(1102)
  let floor = ''
  const V: P = [330, 40]
  for (let xt = -700; xt < 1500; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (BASE - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        BASE + (H - BASE) * t0,
        xt + (xb - xt) * t1,
        BASE + (H - BASE) * t1,
        0.8 + t0 * 2.8,
        0.8 + t1 * 2.8,
      )
      t0 = t1 + between(f, 0.02, 0.07)
    }
  }
  let shade = ''
  for (let y = BASE + 2; y < BASE + 18; y += 3) shade += gouge(0, y, W, y, 2.4 - (y - BASE) * 0.12)
  for (let y = 306; y < 334; y += 3.4) {
    const w = 1 - Math.abs(y - 320) / 15
    shade += gouge(548 - w * 10, y, 690 + w * 10, y + 0.6, 0.8 + w * 2)
    shade += gouge(270 - w * 8, y + 1, 352 + w * 8, y + 1.4, 0.6 + w * 1.6)
  }

  // Beyond the glass, under a pale sky, the round heads of trees.
  const v = rng(1103)
  let trees = `M${WIN.x0} ${WIN.y1}L${WIN.x0} 176`
  for (let x = WIN.x0; x < WIN.x1; ) {
    const w = between(v, 14, 24)
    const h = between(v, 8, 20)
    trees += `Q${n(x + w / 2)} ${n(176 - h * 2)} ${n(x + w)} ${n(176 - between(v, 0, 4))}`
    x += w
  }
  trees += `L${WIN.x1} ${WIN.y1}Z`

  // The folds of the curtains and the grain of the door.
  const c = rng(1104)
  let folds = ''
  for (const [x0, x1] of [
    [230, 262],
    [394, 426],
  ]) {
    for (let x = x0 + 5; x < x1 - 2; x += 6.5)
      folds += gouge(x + between(c, -1, 1), 24, x + between(c, -2, 2), 256, 0.9, between(c, -1, 1))
  }

  cached = { wall, wains, floor, shade, trees, folds }
  return cached
}

/**
 * Mr Bennet's armchair, from the side, its back to the right: a padded back,
 * the seat, the far arm behind him (the near one is left out, so it hides
 * nothing of him), and turned legs.
 */
function Armchair() {
  return (
    <g>
      <path
        d="M640 312L644 252L688 252L694 312ZM636 252C632 214 634 176 646 140C650 128 664 126 672 136C680 158 684 196 686 252Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={gouge(650, 150, 652, 244, 1.2, -1.6) + gouge(668, 146, 674, 244, 1, 1.6)}
        fill={PAPER}
      />
      <path
        d="M560 240L676 240L678 262L558 262Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(564, 251, 672, 251, 1)} fill={PAPER} />
      <path
        d="M566 262L562 314M668 262L672 314"
        stroke={INK}
        strokeWidth={6}
        strokeLinecap="round"
        fill="none"
      />
      {/* the far arm, a scroll on a post, behind him */}
      <path
        d="M572 214C566 206 572 198 580 200L646 204L646 214L584 214L580 240L570 240L572 216Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
    </g>
  )
}

/** The fireplace on the right: a pale stone surround, the mantel, a cold grate. */
function Fireplace() {
  return (
    <g>
      <rect x={698} y={170} width={150} height={8} fill={INK} />
      <rect x={694} y={164} width={158} height={6} fill={PAPER} />
      <rect x={704} y={178} width={138} height={BASE - 178} fill={PAPER} />
      <path d="M730 262V214Q730 200 746 200H800Q816 200 816 214V262Z" fill={INK} />
      <path
        d={
          gouge(714, 184, 714, 258, 1.4) +
          gouge(832, 184, 832, 258, 1.4) +
          gouge(736, 188, 810, 188, 1.1)
        }
        fill={INK}
      />
      {/* the empty grate: bars in paper on the dark of the opening */}
      <path
        d="M746 236H800M746 244H800M748 252H798M752 236V256M773 236V256M794 236V256"
        stroke={PAPER}
        strokeWidth={1.4}
        fill="none"
      />
      <rect x={698} y={BASE} width={150} height={6} fill={PAPER} />
      <rect x={698} y={BASE + 6} width={150} height={2} fill={INK} />
    </g>
  )
}

function Netherfield({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 170], push: 1.03 })}>
        {/* the wall, the dado and the panelling below it */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={192} width={W} height={6} fill={PAPER} />
        <rect x={0} y={200} width={W} height={1.6} fill={PAPER} />
        <path d={m.wains} fill={PAPER} />
        <rect x={0} y={BASE - 6} width={W} height={6} fill={PAPER} />
        <rect x={0} y={BASE} width={W} height={H - BASE} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shade} fill={INK} />

        {/* the panelled door on the left, shut */}
        <rect x={30} y={36} width={112} height={BASE - 36} fill={INK} />
        <rect x={38} y={44} width={96} height={BASE - 44} fill={PAPER} />
        <g fill="none" stroke={INK} strokeWidth={LINE.bold}>
          <rect x={48} y={54} width={34} height={70} />
          <rect x={90} y={54} width={34} height={70} />
          <rect x={48} y={136} width={34} height={110} />
          <rect x={90} y={136} width={34} height={110} />
        </g>
        <circle cx={128} cy={150} r={3.2} fill={INK} />

        {/* the window: a pale sky, the trees beyond, the glazing bars */}
        <rect
          x={WIN.x0 - 10}
          y={WIN.y0 - 10}
          width={WIN.x1 - WIN.x0 + 20}
          height={WIN.y1 - WIN.y0 + 16}
          fill={INK}
        />
        <rect x={WIN.x0} y={WIN.y0} width={WIN.x1 - WIN.x0} height={WIN.y1 - WIN.y0} fill={PAPER} />
        <g clipPath={`url(#${win})`}>
          <path d={m.trees} fill={INK} />
          <path
            d={
              gouge(WIN.x0 + 6, 192, WIN.x1 - 6, 194, 1.2) +
              gouge(WIN.x0 + 10, 202, WIN.x1 - 8, 203, 1.1)
            }
            fill={PAPER}
          />
        </g>
        <g fill={INK}>
          <rect x={WIN.x0 - 2} y={122} width={WIN.x1 - WIN.x0 + 4} height={6} />
          <rect x={WIN.x0} y={78} width={WIN.x1 - WIN.x0} height={2.6} />
          <rect x={WIN.x0} y={168} width={WIN.x1 - WIN.x0} height={2.6} />
          <rect x={WIN.x0 + 31} y={WIN.y0} width={2.6} height={WIN.y1 - WIN.y0} />
          <rect x={WIN.x0 + 64} y={WIN.y0} width={4} height={WIN.y1 - WIN.y0} />
          <rect x={WIN.x0 + 98} y={WIN.y0} width={2.6} height={WIN.y1 - WIN.y0} />
        </g>
        <rect x={WIN.x0 - 14} y={WIN.y1 + 2} width={WIN.x1 - WIN.x0 + 28} height={6} fill={PAPER} />
        <rect x={WIN.x0 - 14} y={WIN.y1 + 8} width={WIN.x1 - WIN.x0 + 28} height={2} fill={INK} />
        {/* the curtains, drawn back */}
        <path d="M228 18L262 18C258 90 254 160 260 250L230 254C234 170 232 90 228 18Z" fill={INK} />
        <path d="M394 18L428 18C424 90 422 170 426 254L396 250C402 160 398 90 394 18Z" fill={INK} />
        <path d={m.folds} fill={PAPER} />
        <rect x={218} y={12} width={220} height={7} fill={INK} />
        <rect x={218} y={18} width={220} height={1.6} fill={PAPER} />

        <Fireplace />
        <Armchair />

        {/* Mr Bennet, sitting back, his legs crossed, his book shut on his knee */}
        <Person
          pose={{
            look: 'mrBennet',
            seated: true,
            body: seatedBody(52, 3),
            head: { rot: 4 },
            legs: {
              far: [
                [-2, -54],
                [32, -57],
                [30, -4],
              ],
              near: [
                [2, -54],
                [38, -64],
                [50, -30],
              ],
            },
            near: {
              pts: [
                [5, -114],
                [18, -92],
                [36, -76],
              ],
              hand: 'mitt',
              deg: 4,
            },
            far: {
              pts: [
                [0, -114],
                [-6, -92],
                [8, -80],
              ],
              hand: 'mitt',
            },
          }}
          at={[628, 314]}
          scale={1.42}
          flip
        >
          {/* the book, shut, on his crossed knee under his hand */}
          <g transform="translate(40 -72) rotate(-12)">
            <rect x={-9} y={-5} width={18} height={9} fill={INK} stroke={PAPER} strokeWidth={1.2} />
            <path d="M-7 -1.6H7M-7 1.2H7" stroke={PAPER} strokeWidth={0.7} />
          </g>
        </Person>

        {/* Mrs Bennet, leaning in with her news, one hand out, one at her breast */}
        <Person
          pose={{
            look: 'mrsBennet',
            body: {
              neck: [9, -130],
              hip: [0, -80],
            },
            head: { rot: 6 },
            far: {
              pts: [
                [6, -124],
                [24, -116],
                [42, -124],
              ],
              hand: 'open',
              deg: -30,
              spread: 20,
            },
            near: {
              pts: [
                [12, -124],
                [8, -104],
                [16, -112],
              ],
              hand: 'mitt',
              deg: -10,
            },
          }}
          at={[300, 316]}
          scale={1.5}
        />
      </g>
    </>
  )
}

export const aRichYoungManTakesNetherfieldArt: LinocutArt = {
  width: W,
  height: H,
  Draw: Netherfield,
}

export const aRichYoungManTakesNetherfield: ComicPanel = {
  moment: 'A rich young man takes Netherfield',
  art: aRichYoungManTakesNetherfieldArt,
  alt: 'A linocut print of a plain room at Longbourn by day, lit by one tall sash window with its curtains drawn back and round-headed trees beyond the glass. On the left is a shut panelled door. In front of the window Mrs Bennet stands leaning forward with her news, in a white cap, a kerchief at her neck and a dark gown: one hand is thrown out with the fingers spread, the other is pressed to her breast, and her mouth is open. On the right Mr Bennet sits back in an armchair beside a cold fireplace, his legs crossed and a shut book on his knee under his hand, turned towards her with a dry half-smile. Nothing in the print is red.',
  quote: 'A single man of large fortune; four or five thousand a year.',
  quoteAt: 'top-right',
}
