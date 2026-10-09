import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, seatedBody, type P } from './people'

/**
 * Chapter IV: "Wolfshiem and Jordan's story", the fifth moment in the guide's
 * timeline. Its line is Jordan's, and the panel is drawn where she says it,
 * at the end of the day: the lunch with Wolfshiem earlier is not drawn, so
 * nothing of the novel's description of him is either. Every detail is from
 * the held text (the 1925 first edition, src/data/full-texts/the-great-gatsby.ts):
 *
 * - "When Jordan Baker had finished telling all this we had left the Plaza
 *   for half an hour and were driving in a victoria through Central Park."
 *   So an open carriage, its hood folded back, its driver up on the box,
 *   one horse in the shafts, goes along a drive through the park.
 * - "The sun had gone down behind the tall apartments of the movie stars in
 *   the West Fifties ... through the hot twilight". So behind the park's dark
 *   trees the tall apartment blocks stand black against the afterglow, a few
 *   windows lit, and the glow where the sun went down is the spot colour.
 * - "'It was a strange coincidence,' I said. 'But it wasn't a coincidence at
 *   all.' 'Why not?' 'Gatsby bought that house so that Daisy would be just
 *   across the bay.'" So Jordan and Nick sit side by side on the victoria's
 *   one seat, facing the way it goes, and Jordan, sitting up straight with
 *   her chin raised a little as the kit gives it ("with her chin raised a
 *   little", Chapter I), turns her head back to him as she tells him; Nick,
 *   on the far side, listens. (They were first cut facing each other across
 *   the carriage, which a victoria, with one seat for its passengers, does
 *   not allow.)
 * - Jordan is in white with pale hair and a golfer's tanned face and arms,
 *   as in every panel (the kit, ./people.tsx); Nick is in a dark suit. The
 *   driver and the horse are not described, so they are plain: a driver in
 *   a dark coat and cap, and a dark carriage horse in harness, walking.
 *
 * The children singing on the grass in this paragraph are not drawn, and the
 * words of their song, which the held text leaves out for copyright, are
 * never quoted. Red is the afterglow, a broad band of sky behind the
 * buildings, showing only where no head stands in front of it (BLOCKS says
 * why), well away from the people and the horse. Nothing is taken from
 * a film, television or stage production. Seeds: 1501 (the sky), 1502 (the
 * windows), 1503 (the trees), 1504 (the lawn).
 */

const W = 860
const H = 340
/** The glow where the sun went down, behind the apartments. */
const GLOW = { y0: 116, y1: 204 }
/** The drive through the park. */
const DRIVE = { y0: 278, y1: 312 }

/**
 * The tall apartments of the West Fifties: [left, right, top, water tank].
 * Streets open between some of them, so the glow shows through. (Cut first
 * shoulder to shoulder and taller, they hid the glow altogether.)
 *
 * No street opens behind a head. Three blocks were widened, and the one
 * behind Nick raised, at review on 9 October 2026: the glow showed through
 * the streets at 352, 560 and 772, directly behind the back of Nick's head,
 * the driver's and the horse's, and over the top of Nick's, and at phone
 * width a strip of red down the back of a head reads as blood. Where a
 * block stands behind a head, its top is above the glow, so no red touches
 * one.
 */
const BLOCKS: [number, number, number, boolean][] = [
  [0, 48, 118, false],
  [54, 104, 92, true],
  [104, 140, 128, false],
  [150, 206, 84, true],
  [206, 240, 120, false],
  [252, 316, 96, false],
  [316, 362, 104, false],
  [362, 420, 88, true],
  [420, 452, 124, false],
  [462, 520, 78, false],
  [520, 570, 110, true],
  [570, 628, 92, false],
  [628, 664, 126, false],
  [674, 736, 82, true],
  [736, 782, 108, false],
  [782, 840, 98, false],
  [840, 860, 130, false],
]

type Marks = { sky: string; windows: string; trees: string; lawn: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The hot twilight: dark overhead, paler down towards the glow.
  const sky = gougeField(
    rng(1501),
    { x0: 0, x1: W, y0: 8, y1: GLOW.y0 + 4 },
    (_x, y) => 0.08 + Math.pow(clamp(y / GLOW.y0), 1.4) * 0.8,
    { spacing: 6, len: [18, 60], gap: [5, 16], max: 2.8 },
  )
  // A few lit windows in the dark blocks.
  const rw = rng(1502)
  let windows = ''
  for (const [x0, x1, top] of BLOCKS) {
    for (let y = top + 10; y < 186; y += 12) {
      for (let x = x0 + 6; x < x1 - 8; x += 11) {
        if (rw() < 0.2) windows += `M${x} ${y}h4v6h-4Z`
      }
    }
  }
  // The park's trees: dark canopies with leaves caught by the last light.
  const rt = rng(1503)
  let trees = ''
  for (let i = 0; i < 90; i++) {
    const x = between(rt, 0, W)
    const y = between(rt, 170, 236)
    trees += gouge(x, y, x + between(rt, 5, 10), y - between(rt, 1, 4), 0.9)
  }
  // The lawn below the drive.
  const lawn = gougeField(rng(1504), { x0: 0, x1: W, y0: DRIVE.y1 + 4, y1: H }, () => 0.22, {
    spacing: 6,
    len: [10, 30],
    gap: [8, 20],
    max: 1.8,
  })
  cached = { sky, windows, trees, lawn }
  return cached
}

/** The canopies of the park's trees, a lumpy line of them in front of the blocks. */
const TREES =
  'M0 250V196C10 178 30 172 46 180C56 164 82 160 96 172C110 158 136 160 146 176C160 166 184 168 192 184C206 170 232 172 240 188C256 176 280 178 288 192' +
  'C300 178 326 176 336 190C350 174 378 176 388 190C402 178 426 180 434 194C448 182 472 182 480 196C494 184 520 184 528 198C540 186 566 186 574 198' +
  'C588 184 614 184 622 198C636 186 662 188 670 200C684 186 712 186 720 200C734 188 760 190 768 202C782 188 810 188 818 202C830 192 850 194 860 200V250Z'

/**
 * A carriage horse walking right, in harness: hooves at y 0, withers near
 * y -100, the muzzle near (104, -114). Drawn plainly; the text gives it no
 * looks.
 */
const HORSE = {
  body: 'M-66 -96C-58 -104 -30 -104 0 -102C18 -101 30 -104 38 -102C50 -98 56 -88 56 -78C56 -70 50 -64 42 -62C20 -58 -20 -58 -46 -62C-58 -64 -70 -72 -72 -82C-73 -90 -70 -94 -66 -96Z',
  neck: 'M22 -98C32 -120 48 -138 66 -150L88 -138L76 -124C70 -110 66 -94 58 -78Z',
  head: 'M64 -148C72 -156 88 -154 96 -144L112 -122C115 -116 112 -107 103 -107C97 -107 92 -109 88 -112L80 -116C71 -122 65 -132 62 -140ZM68 -150L63 -165L75 -152ZM75 -152L75 -166L82 -151Z',
  tail: 'M-70 -92C-82 -86 -86 -72 -86 -54L-80 -56L-78 -50C-78 -66 -74 -82 -64 -90Z',
  legs: ['M42 -66L40 -34L42 -4', 'M-58 -66L-66 -38L-62 -4', 'M-46 -66L-44 -36L-40 -4'],
  lifted: 'M50 -66L58 -40L50 -22',
}

function Horse({ at, s }: { at: P; s: number }) {
  const t = `translate(${n(at[0])} ${n(at[1])}) scale(${n(s)})`
  const hoof = (x: number, y: number) => `M${x - 5} ${y}h11l-1 -6h-9Z`
  return (
    <g transform={t} strokeLinecap="round" strokeLinejoin="round">
      {/* the paper halo round the whole horse */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={3.6}>
        <path d={HORSE.body + HORSE.neck + HORSE.head + HORSE.tail} />
      </g>
      <path
        d={[...HORSE.legs, HORSE.lifted].join('')}
        fill="none"
        stroke={PAPER}
        strokeWidth={12.6}
      />
      <path d={[...HORSE.legs, HORSE.lifted].join('')} fill="none" stroke={INK} strokeWidth={9} />
      <path d={hoof(42, 0) + hoof(-62, 0) + hoof(-40, 0)} fill={INK} />
      <path d={HORSE.body + HORSE.neck + HORSE.head + HORSE.tail} fill={INK} />
      {/* the mane, the eye, the blinker and bridle, the collar and the traces */}
      <path
        d={
          gouge(70, -140, 36, -104, 1.2, 2) +
          gouge(76, -136, 88, -132, 0.9) +
          gouge(-60, -88, -76, -68, 0.8, 1)
        }
        fill={PAPER}
      />
      <path
        d="M78 -142L100 -116M84 -126L108 -112M36 -112Q44 -96 52 -82M-30 -84H40"
        fill="none"
        stroke={PAPER}
        strokeWidth={1.8}
      />
      <path d="M80 -138h8v9h-8Z" fill={PAPER} stroke={INK} strokeWidth={1} />
      <circle cx={92} cy={-134} r={1.6} fill={PAPER} />
    </g>
  )
}

function WolfshiemAndJordansStory({ uid }: ArtProps) {
  const m = marks()
  const id = { sky: `${uid}-sky` }
  return (
    <>
      <defs>
        <clipPath id={id.sky}>
          <rect x={0} y={0} width={W} height={GLOW.y0 + 4} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
        {/* the hot twilight, and the glow where the sun went down */}
        <g clipPath={`url(#${id.sky})`}>
          <path d={m.sky} fill={PAPER} />
        </g>
        <rect x={0} y={GLOW.y0} width={W} height={GLOW.y1 - GLOW.y0} fill={RED} />
        <path
          d={
            gouge(0, GLOW.y0 + 3, W, GLOW.y0 + 3, 1.6) +
            gouge(0, GLOW.y0 + 10, W, GLOW.y0 + 10, 1.1) +
            gouge(0, GLOW.y0 + 17, W, GLOW.y0 + 17, 0.7)
          }
          fill={PAPER}
        />

        {/* the tall apartments of the West Fifties, black against the glow */}
        <g fill={INK} stroke={PAPER} strokeWidth={1.2}>
          {BLOCKS.map(([x0, x1, top]) => (
            <path
              key={x0}
              d={`M${x0} 240V${top + 8}H${x0 + 4}V${top}H${x1 - 4}V${top + 8}H${x1}V240Z`}
            />
          ))}
        </g>
        <g fill={INK} stroke={PAPER} strokeWidth={1}>
          {BLOCKS.filter(([, , , tank]) => tank).map(([x0, x1, top]) => {
            const cx = (x0 + x1) / 2
            return (
              <path
                key={x0}
                d={`M${cx - 6} ${top}V${top - 12}H${cx + 6}V${top}ZM${cx - 8} ${top - 12}L${cx} ${top - 18}L${cx + 8} ${top - 12}Z`}
              />
            )
          })}
        </g>
        <path d={m.windows} fill={PAPER} />

        {/* the park's trees */}
        <path d={TREES} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.trees} fill={PAPER} />

        {/* the park below: the drive, pale in the twilight, and the lawn */}
        <rect x={0} y={248} width={W} height={H - 248} fill={INK} />
        <path d={`M0 ${DRIVE.y0}H${W}V${DRIVE.y1}H0Z`} fill={PAPER} />
        <path
          d={
            gouge(20, DRIVE.y0 + 10, 300, DRIVE.y0 + 11, 0.8) +
            gouge(380, DRIVE.y0 + 22, 840, DRIVE.y0 + 21, 0.8)
          }
          fill={INK}
        />
        <path d={m.lawn} fill={PAPER} />

        <g transform="translate(560 302) scale(1.12) translate(-560 -302)">
          {/* the victoria: its folded hood, the back seat, the low body, the
            driver's box, the wheels, and the shafts to the horse */}
          <g stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
            <path d="M320 222C318 204 330 192 350 190L378 192L384 244L330 248Z" fill={INK} />
            <path
              d="M358 256Q352 224 368 210Q382 202 390 214L394 248H566Q584 248 586 234L588 216H600V236Q596 268 566 272H384Q362 272 358 256Z"
              fill={INK}
            />
            <path d="M548 216V188H596V200H560V216Z" fill={INK} />
          </g>
          <path
            d={gouge(336, 200, 346, 240, 1, 1.4) + gouge(350, 196, 360, 242, 1, 1.4)}
            fill={PAPER}
          />
          <path d="M390 262H560" stroke={PAPER} strokeWidth={1.4} />
          <path d="M596 236L676 238" stroke={PAPER} strokeWidth={7} />
          <path d="M596 236L676 238" stroke={INK} strokeWidth={4} />
          {[
            [394, 284, 28],
            [556, 292, 20],
          ].map(([cx, cy, r]) => (
            <g key={cx}>
              <circle cx={cx} cy={cy} r={r} fill="none" stroke={PAPER} strokeWidth={7} />
              <circle cx={cx} cy={cy} r={r} fill="none" stroke={INK} strokeWidth={4} />
              <path
                d={Array.from({ length: 8 }, (_, i) => {
                  const a = (i * Math.PI) / 4
                  return `M${cx} ${cy}L${n(cx + Math.cos(a) * (r - 2))} ${n(cy + Math.sin(a) * (r - 2))}`
                }).join('')}
                stroke={INK}
                strokeWidth={2}
              />
              <circle cx={cx} cy={cy} r={4} fill={INK} stroke={PAPER} strokeWidth={1.4} />
            </g>
          ))}

          {/* the horse in the shafts, walking */}
          <Horse at={[700, 314]} s={0.86} />

          {/* the driver up on the box, the reins in his hands */}
          <Person
            at={[566, 252]}
            scale={0.6}
            pose={{
              look: 'man',
              hat: 'cap',
              body: seatedBody(52, 6),
              head: { rot: 4 },
              legs: {
                far: [
                  [-2, -54],
                  [28, -54],
                  [30, -4],
                ],
                near: [
                  [2, -54],
                  [32, -54],
                  [34, -4],
                ],
              },
              far: {
                pts: [
                  [2, -114],
                  [18, -94],
                  [36, -96],
                ],
                hand: 'grip',
              },
              near: {
                pts: [
                  [8, -114],
                  [22, -90],
                  [40, -92],
                ],
                hand: 'grip',
              },
            }}
          />
          <path d="M590 196Q660 196 790 212" fill="none" stroke={PAPER} strokeWidth={1.6} />

          {/* Nick on the far side of the back seat, listening */}
          <Person
            at={[382, 270]}
            scale={0.66}
            pose={{
              look: 'nick',
              body: seatedBody(40, 4),
              head: { rot: 4 },
              legs: {
                far: [
                  [-2, -42],
                  [30, -44],
                  [34, -4],
                ],
                near: [
                  [2, -42],
                  [34, -42],
                  [38, -4],
                ],
              },
              far: {
                pts: [
                  [0, -104],
                  [10, -78],
                  [30, -70],
                ],
                hand: 'mitt',
              },
              near: {
                pts: [
                  [6, -104],
                  [14, -76],
                  [34, -66],
                ],
                hand: 'mitt',
              },
            }}
          />
          {/* Jordan beside him on the near side, sitting up straight, her
              head turned back to him as she tells him */}
          <Person
            at={[430, 272]}
            scale={0.7}
            pose={{
              look: 'jordan',
              seated: true,
              body: { hip: [0, -44], neck: [2, -96] },
              head: { rot: -4, back: true },
              legs: {
                far: [
                  [-2, -44],
                  [26, -46],
                  [28, -4],
                ],
                near: [
                  [2, -44],
                  [30, -44],
                  [32, -4],
                ],
              },
              far: {
                pts: [
                  [-2, -92],
                  [4, -70],
                  [22, -62],
                ],
                hand: 'mitt',
              },
              near: {
                pts: [
                  [4, -92],
                  [10, -70],
                  [26, -60],
                ],
                hand: 'mitt',
              },
            }}
          />
        </g>
      </g>
    </>
  )
}

export const wolfshiemAndJordansStory: LinocutArt = {
  width: W,
  height: H,
  Draw: WolfshiemAndJordansStory,
}
