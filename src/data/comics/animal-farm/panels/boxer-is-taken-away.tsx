import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED, SERIF } from '@/components/comics/linocut/palette'
import { between, deg, gouge, n, ribbon, rng, wave, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Benjamin, HEAD, HEAD_FRAME, Hen, Horse, Muriel, place, type P } from './people'
import { BleatingSheep } from './two-legs'

/**
 * Chapter 9: "Boxer is taken away", the twenty-eighth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "it was in the middle of the day when the van came to take him away." So
 *   it is broad day, the sky pale.
 * - "there in the yard was a large closed van, drawn by two horses, with
 *   lettering on its side and a sly-looking man in a low-crowned bowler hat
 *   sitting on the driver's seat. And Boxer's stall was empty." So the van is
 *   shut all round, two horses draw it, and a man in a low bowler sits up on
 *   its box; on the left the stable door stands open on an empty stall.
 * - Benjamin reads the lettering: "'Alfred Simmonds, Horse Slaughterer and
 *   Glue Boiler, Willingdon. ...'". Squealer later calls the van "marked
 *   'Horse Slaughterer'". So the side of the van carries a board lettered
 *   ALFRED SIMMONDS and HORSE SLAUGHTERER, the words the scene turns on, in the
 *   spot colour, as the pilot cuts the name on Scrooge's gravestone. Nothing
 *   else is shown of what the words mean.
 * - "the man on the box whipped up his horses and the van moved out of the
 *   yard at a smart trot. All the animals followed, crying out at the tops of
 *   their voices. Clover forced her way to the front. The van began to gather
 *   speed. Clover tried to stir her stout limbs to a gallop, and achieved a
 *   canter." So the van is drawing away down the ruts to the road, the whip
 *   raised over the horses and touching neither, and Clover, the kit's
 *   hatched mare, runs at the front of the animals with her head up and her
 *   mouth open, calling; Benjamin, Muriel, a sheep and a hen come behind.
 * - "just at this moment, as though he had heard the uproar outside, Boxer's
 *   face, with the white stripe down his nose, appeared at the small window
 *   at the back of the van." So the van's back is turned to us, with one small
 *   window, and in it Boxer's face, seen from the front: the kit's black head
 *   and its paper blaze. It fades in after the rest, as the text has it
 *   appear.
 *
 * The animals are the shared figures of ./people.tsx; the two horses that
 * draw the van are its plain cart-horses. The man is the kit's head under a
 * low-crowned bowler. The spot colour is the lettering and the stable roof,
 * red as the text's farm roofs are (Chapter 7). Nothing is taken from a film,
 * a cartoon or a stage production.
 *
 * Seeds: 2801 (sky and stable), 2802 (the yard).
 */

const W = 860
const H = 340

/** Where the yard's ruts and the van's side run to: the road beyond the gate. */
const VP: P = [1060, 176]
/** The far edge of the yard, where the hedge stands. */
const FAR = 190

/** The van's corners: the back (towards us) and the side, running to VP. */
const VAN = { backL: 374, backR: 468, top: 86, foot: 238, front: 690 }
const along = (x: number, y: number) => y + (VP[1] - y) * ((x - VAN.backR) / (VP[0] - VAN.backR))
const slope = (y: number) => n((Math.atan((VP[1] - y) / (VP[0] - VAN.backR)) * 180) / Math.PI)

// ── BOXER AT THE WINDOW ─────────────────────────────────────────────────────
// His face from the front, filling the small window: the kit's black head, and
// its blaze running down the middle.

const WIN = { x: 393, y: 100, w: 56, h: 50 }
/** His head from the front, long and narrowing to the muzzle, the ears pricked. */
const FACE =
  'M408.6 119C408.6 112.4 414 108.6 421 108.6C428 108.6 433.4 112.4 433.4 119C433.4 127 430.4 134.4 430 141C429.8 147 426 150.4 421 150.4C416 150.4 412.2 147 412 141C411.6 134.4 408.6 127 408.6 119Z'
const EARS = 'M411.2 114L408 100.4L416 110ZM430.8 114L434 100.4L426 110Z'
const FORELOCK =
  'M415.6 110C417 114 419 116.6 421 117.4C423 116.6 425 114 426.4 110C424 108.6 418 108.6 415.6 110Z'
/** "the white stripe down his nose": the kit's blaze, seen from the front. */
const BLAZE = ribbon(
  [
    [421, 113],
    [420.8, 121],
    [420.6, 129],
    [420.8, 137],
    [421, 143],
  ],
  5.6,
  0.35,
)
const NOSTRILS = 'M415.6 146.6Q417 143.4 419 145.6M426.4 146.6Q425 143.4 423 145.6'

// ── THE MAN ON THE BOX ──────────────────────────────────────────────────────

/** A low-crowned bowler, in the frame of the kit's HEAD. */
const BOWLER =
  'M-15 -7C-14.6 -17 -8 -23 2 -23C11 -23 16.4 -17 16 -8L23 -6.4C23 -4.6 19.6 -3.6 15 -3.8L-15 -3.6C-19.4 -3.6 -20 -6 -15 -7Z'
const MAN_T = 'translate(702 97) scale(0.3)'

// ── THE SCENE ───────────────────────────────────────────────────────────────

type Marks = {
  sky: string
  hedge: string
  ground: string
  ruts: string
  stable: string
  vanSide: string
  doors: string
  spokes: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2801)
  // A bright midday sky: paper, with long thin streaks of ink.
  let sky = ''
  for (let y = 22; y < FAR - 30; y += 9) {
    let x = between(r, -60, 0)
    while (x < W) {
      const len = between(r, 40, 150)
      if (r() < 0.2 + (y / FAR) * 0.28)
        sky += ribbon(
          wave(x, x + len, y + between(r, -2, 2), 1.2, 90, between(r, 0, 6), 8),
          1.3 + (y / FAR) * 0.8,
          0.8,
        )
      x += len + between(r, 30, 110)
    }
  }
  // The hedge along the far side of the yard: a dark band, its top rolling.
  let hedge = `M0 ${FAR + 6}`
  for (let x = 0; x <= W; x += 6)
    hedge += `L${x} ${n(FAR - 14 - 5 * Math.sin(x / 19) - 3 * Math.sin(x / 7 + 1) - between(r, 0, 2))}`
  hedge += `L${W} ${FAR + 6}Z`
  // The stable wall: tarred boards, cut in upright joints.
  let stable = ''
  for (let x = 10; x < 250; x += 11) {
    if (x > 118 && x < 178) continue
    stable += gouge(x + between(r, -1, 1), 118, x + between(r, -1, 1), FAR - 2, 0.8)
  }
  // The yard: packed earth in the midday light, paper scored with short
  // strokes of ink that grow bolder as the ground comes towards us.
  const g = rng(2802)
  let ground = ''
  for (let y = FAR + 8; y < H; y += 6 + (y - FAR) * 0.05) {
    const t = (y - FAR) / (H - FAR)
    let x = between(g, -20, 0)
    while (x < W) {
      const len = between(g, 6, 20) * (0.7 + t)
      if (g() < 0.5) ground += gouge(x, y, x + len, y + between(g, -0.5, 0.5), 0.5 + t * 1.1)
      x += len + between(g, 14, 46) * (1.4 - t * 0.5)
    }
  }
  // Wheel ruts running out of the yard to the road.
  let ruts = ''
  for (const x0 of [300, 470, 640, 900]) ruts += wedge(x0, H + 6, VP[0] - 230, VP[1] + 12, 6, 0.6)
  // The van's side boards, their joints running to the vanishing point.
  let vanSide = ''
  for (let x = VAN.backR + 14; x < VAN.front - 4; x += 16)
    vanSide += gouge(x, along(x, VAN.top) + 4, x, along(x, VAN.foot) - 4, 0.6)
  // The back doors: two leaves of upright boards, below and beside the window.
  let doors = ''
  for (let x = 384; x < 466; x += 10) {
    if (x > 388 && x < 452) doors += gouge(x, 156, x, 230, 0.7)
    else doors += gouge(x, 98, x, 230, 0.7)
  }
  // The wheels' spokes.
  let spokes = ''
  const wheel = (cx: number, cy: number, rx: number, ry: number) => {
    for (let a = 0; a < 360; a += 30) {
      const t = deg(a)
      spokes += wedge(cx, cy, cx + Math.cos(t) * rx * 0.86, cy + Math.sin(t) * ry * 0.86, 3, 1.6)
    }
  }
  wheel(522, 244, 27, 36)
  wheel(657, 234, 21, 28)
  cached = { sky, hedge, ground, ruts, stable, vanSide, doors, spokes }
  return cached
}

function BoxerIsTakenAway({ uid }: ArtProps) {
  const m = marks()
  const sideY = (x: number, y: number) => n(along(x, y))
  const sign = `${uid}-sign`
  const win = `${uid}-win`
  const clover: P = [272, 300]
  const cloverS = 0.95
  const cloverLift = -6
  return (
    <>
      <defs>
        <clipPath id={sign}>
          <path
            d={`M${VAN.backR + 10} ${sideY(VAN.backR + 10, 120)}L${VAN.front - 10} ${sideY(VAN.front - 10, 120)}L${VAN.front - 10} ${sideY(VAN.front - 10, 196)}L${VAN.backR + 10} ${sideY(VAN.backR + 10, 196)}Z`}
          />
        </clipPath>
        <clipPath id={win}>
          <rect x={WIN.x + 4} y={WIN.y + 4} width={WIN.w - 8} height={WIN.h - 8} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 170], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.hedge} fill={INK} />
        <path d={m.ground} fill={INK} />
        <path d={m.ruts} fill={INK} />

        {/* the stable, its red roof, and Boxer's stall standing open and empty */}
        <path d={`M0 118L256 118L256 ${FAR}L0 ${FAR}Z`} fill={INK} />
        <path d={m.stable} fill={PAPER} />
        <path d="M0 120L10 106L250 106L266 120Z" fill={RED} />
        <path d="M0 120H268" stroke={INK} strokeWidth={LINE.bold} />
        <rect x={120} y={130} width={56} height={FAR - 130} fill={PAPER} />
        <rect x={126} y={136} width={44} height={FAR - 136} fill={INK} />
        <path d="M128 158L168 158" stroke={PAPER} strokeWidth={LINE.fine} />

        {/* the van: its back towards us, its side running away to the road */}
        <path
          d={`M${VAN.backR} ${VAN.top}L${VAN.front} ${sideY(VAN.front, VAN.top)}L${VAN.front} ${sideY(VAN.front, VAN.foot)}L${VAN.backR} ${VAN.foot}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.vanSide} fill={PAPER} />
        {/* the lettering on its side, on a paper board */}
        <g clipPath={`url(#${sign})`}>
          <rect x={VAN.backR} y={100} width={VAN.front - VAN.backR} height={110} fill={PAPER} />
          <g fontFamily={SERIF} fontWeight={700}>
            <text
              x={0}
              y={0}
              fontSize={16}
              fill={INK}
              transform={`translate(${VAN.backR + 22} ${sideY(VAN.backR + 22, 142)}) skewY(${slope(142)})`}
              textLength={170}
              lengthAdjust="spacingAndGlyphs"
            >
              ALFRED SIMMONDS
            </text>
            <text
              x={0}
              y={0}
              fontSize={21}
              fill={RED}
              transform={`translate(${VAN.backR + 16} ${sideY(VAN.backR + 16, 182)}) skewY(${slope(182)})`}
              textLength={192}
              lengthAdjust="spacingAndGlyphs"
            >
              HORSE SLAUGHTERER
            </text>
          </g>
        </g>
        {/* the back */}
        <path
          d={`M${VAN.backL} ${VAN.top + 2}L${VAN.backR} ${VAN.top}L${VAN.backR} ${VAN.foot}L${VAN.backL} ${VAN.foot - 2}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d={m.doors} fill={PAPER} />
        <path
          d={`M421 ${WIN.y + WIN.h + 2}V${VAN.foot - 2}`}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        <path d="M384 196H392M450 196H458" stroke={PAPER} strokeWidth={3} strokeLinecap="round" />
        {/* the roof, curving over */}
        <path
          d={`M${VAN.backL - 6} ${VAN.top + 4}Q421 ${VAN.top - 16} ${VAN.backR + 4} ${VAN.top - 2}L${VAN.front + 4} ${n(along(VAN.front, VAN.top) - 5)}L${VAN.front + 4} ${n(along(VAN.front, VAN.top) + 2)}L${VAN.backR} ${VAN.top + 4}Q421 ${VAN.top - 8} ${VAN.backL - 6} ${VAN.top + 8}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        {/* the step under the doors */}
        <path d="M380 240H462L458 248H384Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />

        {/* the small window at the back, and Boxer's face in it */}
        <rect x={WIN.x} y={WIN.y} width={WIN.w} height={WIN.h} fill={PAPER} />
        <rect x={WIN.x + 4} y={WIN.y + 4} width={WIN.w - 8} height={WIN.h - 8} fill={INK} />
        <g
          clipPath={`url(#${win})`}
          className="lc-fade-in"
          style={timing({ delay: 1.1, dur: 0.9 })}
        >
          <path
            d={EARS + FACE}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path d={BLAZE} fill={PAPER} />
          <path d={FORELOCK} fill={INK} stroke={PAPER} strokeWidth={LINE.hairline} />
          <path
            d={gouge(409.8, 121.6, 415, 123.2, 1.3) + gouge(432.2, 121.6, 427, 123.2, 1.3)}
            fill={PAPER}
          />
          <path
            d={NOSTRILS}
            fill="none"
            stroke={PAPER}
            strokeWidth={LINE.fine}
            strokeLinecap="round"
          />
        </g>

        {/* wheels */}
        <g fill="none" stroke={INK}>
          <ellipse cx={522} cy={244} rx={27} ry={36} strokeWidth={8} />
          <ellipse cx={657} cy={234} rx={21} ry={28} strokeWidth={6.5} />
        </g>
        <path d={m.spokes} fill={INK} />
        <g fill="none" stroke={PAPER} strokeWidth={LINE.fine}>
          <ellipse cx={522} cy={244} rx={31.5} ry={40.5} />
          <ellipse cx={657} cy={234} rx={24.5} ry={31.5} />
        </g>

        {/* the two horses that draw it, and the shafts */}
        <Horse at={[790, 216]} s={0.46} who="plain" pose="gallop" />
        <path d="M688 196L770 184M688 206L760 196" stroke={INK} strokeWidth={2.6} />
        <Horse at={[762, 224]} s={0.5} who="plain" pose="gallop" />

        {/* the man on the box, a low-crowned bowler, the whip raised over his horses */}
        <path d="M684 124H716L714 130H686Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path
          d="M694 102C700 99 708 100 710 104C712 112 710 120 708 126L692 126C690 118 690 108 694 102Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M704 126L716 128L718 144"
          fill="none"
          stroke={INK}
          strokeWidth={5}
          strokeLinecap="round"
        />
        <g transform={MAN_T}>
          <path d={HEAD} fill={INK} stroke={PAPER} strokeWidth={5} strokeLinejoin="round" />
          <path d={BOWLER} fill={INK} stroke={PAPER} strokeWidth={4} strokeLinejoin="round" />
          <path d={gouge(5, -1.6, 11, -2.6, 1.3)} fill={PAPER} />
        </g>
        <path
          d="M707 106L716 96L721 90"
          fill="none"
          stroke={PAPER}
          strokeWidth={6.4}
          strokeLinecap="round"
        />
        <path
          d="M707 106L716 96L721 90"
          fill="none"
          stroke={INK}
          strokeWidth={4}
          strokeLinecap="round"
        />
        <path d="M721 90L736 66" stroke={INK} strokeWidth={1.8} strokeLinecap="round" />
        <path
          d="M736 66C756 58 778 62 796 78"
          fill="none"
          stroke={INK}
          strokeWidth={1.1}
          strokeLinecap="round"
        />

        {/* the animals after it: Muriel, a sheep, a hen, Benjamin, and Clover at the front, calling */}
        <Muriel at={[46, 312]} s={0.8} />
        <BleatingSheep at={[64, 336]} s={1.15} />
        <Horse at={clover} s={cloverS} who="clover" pose="gallop" headDown={cloverLift} uid={uid} />
        <Benjamin at={[134, 334]} s={0.92} />
        <Hen at={[262, 334]} s={1.5} />
        {/* her mouth open: "'Boxer!' she cried" */}
        <g transform={`${place(clover, cloverS, 1)} rotate(${cloverLift} 40 -104) ${HEAD_FRAME}`}>
          <path
            d="M44 9.6L60.6 6.4L55 16.4Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
        </g>
        <g fill="none" stroke={INK} strokeWidth={LINE.fine} strokeLinecap="round">
          <path d="M366 138Q372 130 370 120M358 132Q361 126 359 119" />
        </g>
      </g>
    </>
  )
}

export const boxerIsTakenAway: LinocutArt = { width: W, height: H, Draw: BoxerIsTakenAway }
