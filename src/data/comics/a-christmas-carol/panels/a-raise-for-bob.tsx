import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  ribbon,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { SCROOGE_HEAD } from '../scrooge'

/**
 * Stave Five: "A raise for Bob", the seventeenth and last moment in the
 * guide's timeline. The same room as the first panel, Christmas Eve at the
 * counting-house, so that a student sees the change in one place: the same
 * wall, window, small fire and coal-box, the same doorway into the Tank.
 * Every detail is from the text:
 *
 * - "But he was early at the office next morning... The clock struck nine. No
 *   Bob. A quarter past. No Bob. He was full eighteen minutes and a half
 *   behind his time." So the church clock in the window stands at eighteen
 *   minutes past nine. The church is the one Stave One sets outside the
 *   window: "The ancient tower of a church, whose gruff old bell was always
 *   peeping slily down at Scrooge out of a Gothic window in the wall".
 * - "His hat was off, before he opened the door; his comforter too." So Bob
 *   is bareheaded and his hat and long comforter hang on a peg in the Tank.
 *   His coat is patched: "his threadbare clothes darned up" (Stave Three).
 * - "'and therefore,' he continued, leaping from his stool, and giving Bob
 *   such a dig in the waistcoat that he staggered back into the Tank again;
 *   'and therefore I am about to raise your salary!'" So the stool rocks
 *   behind Scrooge, his finger is in Bob's waistcoat, and Bob reels back
 *   through the doorway with both arms flung out behind him, one hand thrown
 *   up and the other feeling for his desk: "Bob trembled, and got a little
 *   nearer to the ruler." The burst cut round Bob's head is his astonishment,
 *   in the place where the first panel cut the light of his candle. It centres
 *   on his face, not on the dig, so that it reads as surprise and not as a
 *   blow.
 *
 *   WHY NOBODY'S HAND IS RAISED AT THE OTHER (review, 26 September 2026). The
 *   first draft threw Scrooge's back hand up over his head and raised Bob's
 *   front hand over his, and every hand carried the same paper halo as the
 *   bodies, which filled the gaps between the fingers. At phone width the
 *   open hands printed as two raised fists, Scrooge's poking finger merged
 *   with Bob's pale waistcoat into what looked like a handshake, and with
 *   the burst the whole panel read as a fight. So Scrooge's back arm now
 *   swings down behind him, as a man's does in a lunge; Bob's free arm is
 *   flung up and back, away from Scrooge; and the hands are cut with an ink
 *   edge instead of a halo, so the fingers stay apart and the one finger in
 *   the waistcoat reads as a finger. Keep every hand below the heads.
 * - "Make up the fires, and buy another coal-scuttle before you dot another
 *   i, Bob Cratchit!" He says it next; for now the fires are as small as they
 *   were on Christmas Eve, Scrooge's few coals and the clerk's one coal, both
 *   in the spot colour.
 * - The spot colour flushes Scrooge's cheek as it flushed Fred's in the first
 *   panel. In Stave Five he is "so fluttered and so glowing with his good
 *   intentions": the nephew's glow is now his.
 *
 * Scrooge's head is his portrait's profile (SCROOGE_HEAD), with a grin cut in
 * it; his dress is the plain black coat, high collar and stock of the
 * portrait. Bob's looks are not described beyond "little Bob", so he is a
 * small plain man. Seed 1701.
 */

const W = 860
const H = 340

type Marks = {
  wall: string
  wains: string
  floor: string
  floorShade: string
  pool: string
  houses: string
  tower: string
  burst: string
  bobCoat: string
  scroogeCoat: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1701)
  // Morning light from the window and a little from the small fire.
  const light = (x: number, y: number) => {
    const l1 = clamp(1 - Math.hypot((x - 370) * 0.85, y - 88) / 230)
    const l2 = clamp(1 - Math.hypot(x - 78, y - 200) / 150) * 0.7
    return Math.max(l1, l2, 0.05)
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: 158 }, light, { spacing: 6.4 })

  let wains = ''
  for (let x = 2; x < W; x += 9) {
    if (x > 8 && x < 150) continue
    const L = light(x, 200)
    wains += wedge(
      x + between(r, -0.6, 0.6),
      175,
      x + between(r, -0.6, 0.6),
      231,
      0.4,
      0.8 + L * 3.2,
    )
  }

  // Floor: paper boards, ink joints running to a vanishing point, as on
  // Christmas Eve.
  let floor = ''
  const V = [470, 30]
  for (let xt = -560; xt < 1440; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (241 - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        241 + (H - 241) * t0,
        xt + (xb - xt) * t1,
        241 + (H - 241) * t1,
        0.8 + t0 * 3,
        0.8 + t1 * 3,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  let floorShade = ''
  for (let y = 242; y < 262; y += 3) floorShade += gouge(0, y, W, y, 2.6 - (y - 242) * 0.12)
  // Shadow pools under Scrooge, the desk and the rocking stool.
  let pool = ''
  for (let y = 292; y < 312; y += 3.4) {
    const w = 1 - Math.abs(y - 302) / 12
    pool += gouge(454 - w * 16, y, 596 + w * 16, y + 0.6, 0.8 + w * 2.2)
  }
  for (let y = 300; y < 330; y += 3.4) {
    const w = 1 - Math.abs(y - 315) / 17
    pool += gouge(236 - w * 8, y, 420 + w * 12, y + 1, 0.8 + w * 2)
  }

  // The houses opposite, clear this morning, hatched behind the church.
  let houses = ''
  for (let x = 250; x < 460; x += 4.4) houses += `M${n(x)} 20L${n(x + 60)} 160`
  let tower = ''
  for (let y = 42; y < 124; y += 3.4) tower += `M314 ${n(y)}H350`

  // Bob's astonishment, cut as a burst through the Tank round his head:
  // surprise, not a blow, so it centres on his face and not on the dig.
  const burst = rays(rng(1717), 658, 100, { from: 28, to: 150, every: 6, width: 3 })

  // Worn cloth: Bob's coat takes a few hairline cuts, Scrooge's a few folds.
  const bobCoat =
    gouge(662, 124, 676, 170, 0.9, -1) +
    gouge(654, 128, 660, 172, 0.8, -0.6) +
    gouge(678, 176, 690, 208, 0.8, -1)
  const scroogeCoat =
    gouge(502, 134, 496, 198, 1.3, 1.5) +
    gouge(516, 140, 514, 222, 1, 0.8) +
    gouge(492, 208, 478, 246, 1, 1) +
    gouge(540, 146, 540, 226, 0.9, -0.8) +
    gouge(528, 200, 530, 226, 0.8, -0.4)

  cached = { wall, wains, floor, floorShade, pool, houses, tower, burst, bobCoat, scroogeCoat }
  return cached
}

/**
 * Scrooge, standing, lunging right at Bob: coat tails flying from the leap,
 * one arm out to the dig, the other swung down behind him. Panel coordinates.
 */
const SCROOGE_COAT =
  'M512 116C502 120 496 128 494 140C490 160 490 182 492 200C486 222 478 240 466 256L484 259C494 247 502 235 508 226L550 230C550 214 553 196 553 180C556 164 556 146 552 134C548 124 542 118 534 114Z'
const SCROOGE_LEGS: [string, number][] = [
  ['M508 222C500 248 488 274 476 294', 12.5],
  ['M538 224C550 238 560 250 563 262C565 274 566 284 568 294', 12.5],
]
const SCROOGE_SHOES =
  'M466 290C472 288 480 288 486 292L490 300L460 301C458 296 460 292 466 290ZM562 290C570 288 580 290 588 296L590 302L560 302Z'
const SCROOGE_ARMS: [string, number][] = [
  ['M544 128C558 136 572 142 586 147C594 149 600 151 608 152', 10],
  ['M506 130C499 141 491 152 481 163', 9.5],
]
/** The hand in the dig, one finger out into the waistcoat. */
const SCROOGE_HAND =
  'M606 146C612 145 618 147 621 150L640 151C643 151.4 643 155 640 155.4L622 156C620 160 614 161.6 609 160C606 159 604 155 604 152Z'
/** The other hand, open, swung down behind him, the fingers spread. */
const SCROOGE_OPEN_HAND =
  'M483 160C479 160 476 162 475 165L468 171L470 173.4L475.4 169.4L470 177L472.6 178.6L477.4 172.4L475 180L478 180.8L480 173.6L481 180.6L483.8 180.2L483.2 172.6C485 169 485.8 163.6 483 160Z'
/** A light cut down the back of the swung arm, where it crosses the coat. */
const SCROOGE_BACK_SLEEVE = gouge(505, 134, 492, 152, 0.9)
const COLLAR = 'M518 114L540 110L544 126L524 128Z'
/** The head: SCROOGE_HEAD, 39 units tall, tipped forward into the lunge. */
const HEAD_AT = 'translate(531 94) rotate(14) scale(0.23) translate(-110 -116)'

/**
 * Bob, recoiling back through the doorway: bareheaded, his coat thrown open
 * on his waistcoat, both arms flung out behind him, one hand up and back and
 * the other reaching down behind for the ruler.
 */
const BOB_COAT =
  'M652 112C646 116 642 124 640 134C636 150 634 166 634 178L630 214C646 218 664 218 682 214L676 176C680 160 684 142 682 128C680 118 674 112 666 110Z'
const BOB_WAISTCOAT = 'M644 120C640 132 638 148 638 166L638 178L656 176C656 160 656 140 656 122Z'
const BOB_LEGS: [string, number][] = [
  ['M646 212C640 224 634 234 626 244', 11],
  ['M670 212C676 222 684 232 692 240', 11],
]
const BOB_SHOES =
  'M618 240C622 238 628 238 632 241L634 248L612 248C612 244 614 241 618 240ZM688 236C694 234 700 236 704 240L704 247L684 247Z'
const BOB_ARMS: [string, number][] = [
  ['M664 120C672 112 680 104 688 96', 9],
  ['M674 124C686 134 696 146 704 156C708 160 712 164 716 166', 9],
]
const BOB_HANDS =
  'M686 99C684 96 684 93 686 91L684 84L686.6 83.4L689 89L689 82L691.8 82L692 89L694.6 83.6L697 84.8L695 91L698.4 88.6L700 90.6L696 95.6C694 99 690 101 686 99Z' +
  'M714 160C719 158 725 160 728 164L733 167L731 170L726 168L728 172L725 173L720 170C716 170 713 166 714 160Z'
/** Bob's head, facing left towards Scrooge: eyes wide, mouth open. */
const BOB_HEAD =
  'M670 78C662 76 655 79 652 85C651 88 650 90 647 93L645.5 96.5C647 97.5 648.5 98 649.5 98.6C649.5 101 649 103 649.6 105C650.4 108.6 653 110.6 656.4 110.6C661.6 111 667.6 108.6 672 103.6C675 97 675.4 88 672.4 81.6Z'
const BOB_HAIR =
  'M652 85C654 77 664 73 672 77C678 82 679 92 676 100L671 97C672 90 670 84 664 82C660 82 656 84 652 85Z'
/** "his threadbare clothes darned up": a patch on the coat, stitched round. */
const PATCH = 'M668 184L680 182L682 194L670 196Z'
/** Bob is drawn full size, then made smaller about the dig in his waistcoat. */
const BOB_AT = 'translate(640 150) scale(0.9) translate(-640 -150)'

/** Roofs across the foot of the window, and the gabled houses opposite. */
const ROOFS =
  'M300 150V122L312 116H330V110H336V116L352 116L360 122V100L378 86L396 100V110H408V100H414V110H440V150Z'

/** The desk under the window where Scrooge sat, and the stool he leapt from. */
const DESK_TOP = 'M262 184L390 160L392 168L264 192Z'
const DESK = 'M268 188L386 166L386 216L268 228Z'
const DESK_LEGS = 'M272 228V318M382 216V312M272 292L382 288'
const STOOL_AT = 'rotate(-13 414 318)'
const STOOL = 'M412 214L406 318M444 214L450 318M408 286H448'

function RaiseForBob({ uid }: ArtProps) {
  const m = marks()
  const id = {
    win: `${uid}-win`,
    tank: `${uid}-tank`,
    houses: `${uid}-houses`,
  }
  return (
    <>
      <defs>
        <clipPath id={id.win}>
          <rect x={300} y={24} width={140} height={126} />
        </clipPath>
        <clipPath id={id.tank}>
          <rect x={586} y={34} width={228} height={206} />
        </clipPath>
        <clipPath id={id.houses}>
          <path d={ROOFS} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [600, 150], push: 1.03 })}>
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={159} width={W} height={6} fill={PAPER} />
        <rect x={0} y={169} width={W} height={1.8} fill={PAPER} />
        <path d={m.wains} fill={PAPER} />
        <rect x={0} y={233} width={W} height={8} fill={PAPER} />
        <rect x={0} y={236} width={W} height={1.4} fill={INK} />
        <rect x={0} y={241} width={W} height={H - 241} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.floorShade} fill={INK} />
        <path d={m.pool} fill={INK} />

        {/* Scrooge's small fire, not yet made up */}
        <rect x={12} y={144} width={136} height={97} fill={PAPER} />
        <rect x={8} y={140} width={144} height={6} fill={INK} />
        <rect x={6} y={136} width={148} height={4} fill={PAPER} />
        <path
          d={
            gouge(22, 152, 22, 236, 1.6) +
            gouge(28, 156, 28, 232, 1) +
            gouge(132, 152, 132, 236, 1.6) +
            gouge(138, 156, 138, 232, 1) +
            gouge(52, 152, 108, 152, 1.2)
          }
          fill={INK}
        />
        <path d="M42 241V184Q42 168 58 168H102Q118 168 118 184V241Z" fill={INK} />
        <path
          d="M58 216H102M59 222H101M60 228H100M62 216V236M98 216V236"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.5}
        />
        <g fill={RED}>
          <path d="M62 216C62 210 68 207 73 211C75 206 84 206 86 211C91 208 99 211 98 216Z" />
          <path className="lc-flicker" d="M71 211C69 204 73 198 75 192C78 199 82 204 78 211Z" />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.35 })}
            d="M84 211C83 206 86 202 87 198C89 202 91 206 89 211Z"
          />
        </g>
        <rect x={4} y={241} width={152} height={8} fill={PAPER} />
        <rect x={4} y={249} width={152} height={2} fill={INK} />

        {/* the coal-box, still in Scrooge's own room */}
        <path d="M154 270L190 270L186 300L158 300Z" fill={INK} />
        <path d="M150 271L194 264L194 268L150 275Z" fill={INK} />
        <path
          d={
            gouge(163, 278, 162, 296, 1.1) +
            gouge(172, 278, 172, 297, 1.1) +
            gouge(181, 278, 182, 296, 1.1)
          }
          fill={PAPER}
        />
        <g fill={INK}>
          <circle cx={162} cy={266} r={4.4} />
          <circle cx={171} cy={263.5} r={5} />
          <circle cx={180} cy={264} r={4} />
        </g>

        {/* the window: the church tower and its clock at eighteen past nine */}
        <rect x={290} y={14} width={160} height={146} fill={INK} />
        <rect x={300} y={24} width={140} height={126} fill={PAPER} />
        <g clipPath={`url(#${id.win})`}>
          {/* the tower, its clock, and the Gothic window with the gruff old bell */}
          <path d={m.tower} stroke={INK} strokeWidth={1.1} />
          <path
            d="M314 124V40H350V124M311 40H353M311 34H317V40M322 34H328V40M334 34H340V40M345 34H353V40"
            fill="none"
            stroke={INK}
            strokeWidth={1.6}
          />
          <circle cx={332} cy={70} r={11} fill={PAPER} stroke={INK} strokeWidth={1.6} />
          <path
            d="M332 60.4V62.6M341.6 70H339.4M332 79.6V77.4M322.4 70H324.6"
            stroke={INK}
            strokeWidth={1.2}
          />
          {/* hour hand just past nine, minute hand at eighteen minutes */}
          <path d="M332 70L325.9 69" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
          <path d="M332 70L339.8 72.5" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
          <path d="M324 116V102Q324 94 332 90Q340 94 340 102V116Z" fill={INK} />
          <path d="M327.6 110Q328 101 332 100Q336 101 336.4 110Z" fill={PAPER} />
          <path d="M332 97.6V100M330 110.6H334" stroke={PAPER} strokeWidth={1.2} />
          {/* roofs in front of the church, and the houses opposite */}
          <path d={ROOFS} fill={PAPER} />
          <g clipPath={`url(#${id.houses})`}>
            <path d={m.houses} stroke={INK} strokeWidth={LINE.fine} />
          </g>
          <path d={ROOFS} fill="none" stroke={INK} strokeWidth={1.3} />
        </g>
        <g fill={INK}>
          <rect x={300} y={24} width={140} height={4} />
          <rect x={300} y={146} width={140} height={4} />
          <rect x={300} y={24} width={4} height={126} />
          <rect x={436} y={24} width={4} height={126} />
          <rect x={368} y={24} width={4} height={126} />
          <rect x={300} y={84} width={140} height={5} />
          <rect x={300} y={54} width={140} height={2.6} />
          <rect x={300} y={117} width={140} height={2.6} />
        </g>
        <rect x={284} y={150} width={172} height={7} fill={PAPER} />
        <rect x={284} y={157} width={172} height={2} fill={INK} />

        {/* the desk he sat at, and the stool still rocking from his leap */}
        <path d={DESK} fill={INK} />
        <path d={gouge(300, 190, 302, 222, 1.2) + gouge(340, 180, 342, 216, 1.2)} fill={PAPER} />
        <path d={DESK_LEGS} stroke={INK} strokeWidth={5} fill="none" />
        <path d={DESK_TOP} fill={INK} />
        <path d={gouge(264, 184, 390, 160, 1.3)} fill={PAPER} />
        <path d="M284 178L356 165L358 158L286 171Z" fill={PAPER} />
        <path d="M296 175L318 171M326 169L350 165" stroke={INK} strokeWidth={0.9} />
        <g transform={STOOL_AT}>
          <path d={STOOL} stroke={PAPER} strokeWidth={7.5} fill="none" strokeLinecap="round" />
          <rect x={400} y={204} width={54} height={12} fill={PAPER} />
          <path d={STOOL} stroke={INK} strokeWidth={4.5} fill="none" strokeLinecap="round" />
          <rect x={402} y={206} width={50} height={8} fill={INK} />
        </g>
        <path
          d="M392 200Q398 194 404 196M388 214Q394 206 402 208"
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinecap="round"
        />

        {/* the doorway into the Tank */}
        <rect x={562} y={12} width={276} height={229} fill={PAPER} />
        <g fill="none" stroke={INK} strokeWidth={LINE.fine}>
          {[0, 1, 2].map((k) => (
            <rect key={k} x={571 + k * 4} y={19 + k * 4} width={258 - k * 8} height={223 - k * 4} />
          ))}
        </g>
        <rect x={584} y={32} width={232} height={209} fill={INK} />
        <g clipPath={`url(#${id.tank})`}>
          <path
            d="M586 34L608 52M814 34L792 52M586 240L608 212M814 240L792 212M608 52H792V212H608Z"
            fill="none"
            stroke={PAPER}
            strokeWidth={LINE.fine}
          />
          <path d={m.burst} fill={PAPER} />
          <path d="M606 212L792 212L814 240L586 240Z" fill={INK} />
          <path
            d={
              gouge(640, 214, 632, 240, 1) +
              gouge(680, 214, 678, 240, 1) +
              gouge(720, 214, 724, 240, 1) +
              gouge(760, 214, 770, 240, 1)
            }
            fill={PAPER}
          />
          {/* the one coal, as on Christmas Eve */}
          <path
            d="M600 213V194Q600 183 614 183Q628 183 628 194V213Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
          />
          <path d="M605 204H623" stroke={PAPER} strokeWidth={1} />
          <circle cx={614} cy={208.5} r={3.6} fill={RED} />
          {/* the peg: his hat and his comforter, off before he opened the door */}
          <path d="M770 64L782 64" stroke={PAPER} strokeWidth={2.4} strokeLinecap="round" />
          <path
            d="M760 62L760 42C760 38 764 36 776 36C788 36 792 38 792 42L792 62C798 62 800 64 800 66C790 69 762 69 752 66C752 64 754 62 760 62Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
          />
          <path d="M760 58H792" stroke={PAPER} strokeWidth={1.1} />
          <path
            d={
              ribbon(
                [
                  [772, 68],
                  [770, 96],
                  [768, 124],
                  [768, 150],
                ],
                7,
                0.3,
                false,
              ) +
              ribbon(
                [
                  [782, 68],
                  [783, 98],
                  [784, 128],
                  [786, 160],
                ],
                7,
                0.3,
                false,
              )
            }
            fill={PAPER}
          />
          <path
            d="M765 150L764 158M768 150L768 158M771 150L772 158M782 160L781 168M785 160L785 168M788 160L789 168"
            stroke={PAPER}
            strokeWidth={1.1}
          />
          {/* Bob's desk, and the ruler he edges towards */}
          <path d="M724 228V178M790 226V176" stroke={PAPER} strokeWidth={6} />
          <path d="M724 228V178M790 226V176" stroke={INK} strokeWidth={3.4} />
          <path d="M712 176L800 170L800 178L712 184Z" fill={INK} stroke={PAPER} strokeWidth={1.2} />
          <path d="M736 172L796 168L796 171.6L736 175.6Z" fill={PAPER} />
          <path
            d="M744 171.4V174.4M752 170.9V173.9M760 170.4V173.4M768 169.9V172.9M776 169.4V172.4M784 168.9V171.9"
            stroke={INK}
            strokeWidth={0.9}
          />
        </g>

        {/* Bob, reeling back into the Tank: "little Bob", a head shorter than Scrooge */}
        <g transform={BOB_AT}>
          <g fill={PAPER} stroke={PAPER} strokeWidth={3.6} strokeLinejoin="round">
            <path d={BOB_COAT} />
            <path d={BOB_HEAD} />
            <path d={BOB_SHOES} />
          </g>
          <g fill="none" stroke={PAPER} strokeLinecap="round">
            {[...BOB_LEGS, ...BOB_ARMS].map(([d, w]) => (
              <path key={d} d={d} strokeWidth={w + 3.6} />
            ))}
          </g>
          <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
            {[...BOB_LEGS, ...BOB_ARMS].map(([d, w]) => (
              <path key={d} d={d} strokeWidth={w} />
            ))}
          </g>
          <path d={BOB_COAT} fill={INK} />
          <path d={m.bobCoat} fill={PAPER} />
          <path d={BOB_WAISTCOAT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
          <path
            d="M644 132H654M642 144H655M641 156H655M640 168H655"
            stroke={INK}
            strokeWidth={LINE.hairline}
          />
          <g fill={INK}>
            {[128, 140, 152, 164].map((y) => (
              <circle key={y} cx={650} cy={y} r={1.4} />
            ))}
          </g>
          <path d={PATCH} fill={INK} stroke={PAPER} strokeWidth={1} strokeDasharray="2 1.6" />
          <path d={BOB_SHOES} fill={INK} />
          <path d={BOB_HANDS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
          <path d={BOB_HEAD} fill={PAPER} />
          <path d={BOB_HAIR} fill={INK} />
          {/* eyes wide, brows up, mouth a round O */}
          <circle cx={654.5} cy={90} r={1.9} fill={INK} />
          <path d="M651 84.4Q655 82 659 84" stroke={INK} strokeWidth={1.4} fill="none" />
          <ellipse cx={651.5} cy={103.4} rx={2} ry={2.6} fill={INK} />
          <path d="M666 90C664 92 664 96 667 98" stroke={INK} strokeWidth={1.4} fill="none" />
          {/* "Bob trembled" */}
          <path
            d="M704 80Q710 86 704 93M709 76Q717 86 709 97M720 150Q726 146 730 150"
            stroke={PAPER}
            strokeWidth={LINE.fine}
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Scrooge, leapt from his stool, giving Bob the dig */}
        <g fill={PAPER} stroke={PAPER} strokeWidth={3.6} strokeLinejoin="round">
          <path d={SCROOGE_COAT} />
          <path d={SCROOGE_SHOES} />
        </g>
        <g fill="none" stroke={PAPER} strokeLinecap="round" strokeLinejoin="round">
          {[...SCROOGE_LEGS, ...SCROOGE_ARMS].map(([d, w]) => (
            <path key={d} d={d} strokeWidth={w + 3.6} />
          ))}
        </g>
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {SCROOGE_LEGS.map(([d, w]) => (
            <path key={d} d={d} strokeWidth={w} />
          ))}
        </g>
        <path d={SCROOGE_COAT} fill={INK} />
        <path d={m.scroogeCoat} fill={PAPER} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {SCROOGE_ARMS.map(([d, w]) => (
            <path key={d} d={d} strokeWidth={w} />
          ))}
        </g>
        <path d={gouge(550, 134, 596, 149, 1, -0.6) + SCROOGE_BACK_SLEEVE} fill={PAPER} />
        <path d={SCROOGE_SHOES} fill={INK} />
        <path d={gouge(570, 294, 584, 297, 0.8) + gouge(470, 294, 484, 294, 0.8)} fill={PAPER} />
        <path d={SCROOGE_HAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d="M616 150.6L617 155.6M611 148L612 159" stroke={INK} strokeWidth={LINE.hairline} />
        <path d={SCROOGE_OPEN_HAND} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g transform={HEAD_AT}>
          <path d={SCROOGE_HEAD} fill={INK} stroke={INK} strokeWidth={16} />
          <path d={SCROOGE_HEAD} fill={PAPER} />
          {/* thin swept hair, the eye creased shut with laughing, the grin */}
          <path
            d="M60 60C80 40 110 32 140 36M52 80C70 58 100 48 128 48M48 100C60 82 80 70 104 64"
            fill="none"
            stroke={INK}
            strokeWidth={6}
            strokeLinecap="round"
          />
          <path
            d="M144 100Q154 92 164 100"
            fill="none"
            stroke={INK}
            strokeWidth={8}
            strokeLinecap="round"
          />
          <path
            d="M146 86Q155 80 165 85"
            fill="none"
            stroke={INK}
            strokeWidth={7}
            strokeLinecap="round"
          />
          <path d="M167 150L144 153C148 164 158 170 166 165Z" fill={INK} />
          <path
            d="M96 106C86 108 84 122 92 132M134 122C128 134 130 148 140 158M140 106L128 102M141 112L130 116"
            fill="none"
            stroke={INK}
            strokeWidth={6}
            strokeLinecap="round"
          />
          {/* "so glowing with his good intentions" */}
          <ellipse cx={118} cy={128} rx={15} ry={10} fill={RED} />
        </g>
      </g>
    </>
  )
}

export const raiseForBob: LinocutArt = { width: W, height: H, Draw: RaiseForBob }
