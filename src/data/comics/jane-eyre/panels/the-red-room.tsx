import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { HOLD_HAND, JaneGirl, type P } from './people'

/**
 * Chapter 2: "The red-room", the second moment in the guide's timeline.
 * Every detail is from the held edition (src/data/full-texts/jane-eyre.ts).
 *
 * THE MOMENT DRAWN. Jane alone, seated where she was left, at the instant the
 * light comes: "Shaking my hair from my eyes, I lifted my head and tried to
 * look boldly round the dark room; at this moment a light gleamed on the
 * wall." She is never shown being carried in, held down or locked in, and
 * nobody else is in the room.
 *
 * - "My seat ... was a low ottoman near the marble chimney-piece; the bed
 *   rose before me ... to my left were the muffled windows". So she sits on a
 *   low ottoman beside a pale marble chimney-piece, facing the bed, with a
 *   window on the wall beyond. "This room was chill, because it seldom had a
 *   fire": the grate is empty.
 * - "A bed supported on massive pillars of mahogany, hung with curtains of
 *   deep red damask, stood out like a tabernacle in the centre"; "Out of these
 *   deep surrounding shades rose high, and glared white, the piled-up
 *   mattresses and pillows of the bed, spread with a snowy Marseilles
 *   counterpane". So the bed's hangings are the spot colour, its bedding is
 *   bare paper, and it rises before her, too big for the panel.
 * - "the two large windows, with their blinds always drawn down, were half
 *   shrouded in festoons and falls of similar drapery". So the window's blind
 *   is down and red falls hang at its sides.
 * - "Daylight began to forsake the red-room; it was past four o'clock". So the
 *   room is dark, and the whites are the only light in it.
 * - "a light gleamed on the wall ... while I gazed, it glided up to the
 *   ceiling and quivered over my head", and Jane believed it was "a herald of
 *   some coming vision from another world" (it was "in all likelihood, a
 *   gleam from a lantern carried by some one across the lawn", seen through
 *   "some aperture in the blind"). So a streak of light is cut on the wall
 *   between the blind and her, gliding up to the ceiling over her head, and
 *   Jane looks up at it with her eyes wide, gripping the ottoman.
 * - "the strange little figure there gazing at me, with a white face and arms
 *   specking the gloom, and glittering eyes of fear" (the looking-glass,
 *   minutes before). So she is Jane as ./people.tsx cuts her, her face and
 *   arms in paper, her dark hair loose, in her frock and pinafore as she was
 *   in Chapter 1.
 *
 * No red touches Jane: her head is still bleeding from the blow ("My head
 * still ached and bled"), and is drawn without a mark. "the carpet was red"
 * and "the table at the foot of the bed was covered with a crimson cloth"
 * too; the print keeps its one colour for the bed and the window, the red of
 * the room's name, and cuts the carpet in ink. The looking-glass and the
 * white easy-chair stand beyond the edges of this view.
 *
 * Seeds: 1201 (the wall), 1202 (the gleam), 1203 (the carpet), 1204 (the
 * marble).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const FLOOR = 250
/** The gleam: its streak runs from A, on the wall near the blind, up to B at the ceiling. */
const GLEAM_A: P = [392, 112]
const GLEAM_B: P = [286, 24]
/** Where it quivers, over her head. */
const QUIVER: P = [300, 34]

type Marks = {
  wall: string
  gleamRays: string
  carpet: string
  marble: string
  quilt: string
  blind: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The light on the wall is the gleam, and a little grey through the blind.
  const ax = GLEAM_B[0] - GLEAM_A[0]
  const ay = GLEAM_B[1] - GLEAM_A[1]
  const nearGleam = (x: number, y: number) => {
    const t = clamp(((x - GLEAM_A[0]) * ax + (y - GLEAM_A[1]) * ay) / (ax * ax + ay * ay))
    const d = Math.hypot(x - (GLEAM_A[0] + ax * t), y - (GLEAM_A[1] + ay * t))
    return clamp(1 - d / 110)
  }
  const light = (x: number, y: number) =>
    Math.max(nearGleam(x, y) * 0.85, clamp(1 - Math.hypot(x - 470, y - 140) / 140) * 0.3, 0.04)
  const wall = gougeField(rng(1201), { x0: 0, x1: W, y0: 20, y1: FLOOR - 6 }, light, {
    spacing: 7,
    len: [14, 50],
    gap: [8, 24],
    max: 3.4,
  })
  // The gleam's quivering light: broken rays round where it reaches the ceiling.
  const gleamRays = rays(rng(1202), QUIVER[0], QUIVER[1], { from: 12, to: 84, every: 6, width: 3 })
  // The carpet: ink, with a sparse lattice of cut diamonds.
  const rc = rng(1203)
  let carpet = ''
  for (let row = 0; row < 6; row++) {
    const y = FLOOR + 12 + row * 14 + row * row * 0.9
    const step = 44 + row * 8
    for (let x = -10 + (row % 2) * step * 0.5 + between(rc, -2, 2); x < W + 20; x += step) {
      const s = 2.2 + row * 0.45
      carpet += `M${n(x)} ${n(y - s)}L${n(x + s * 1.6)} ${n(y)}L${n(x)} ${n(y + s)}L${n(x - s * 1.6)} ${n(y)}Z`
    }
  }
  // Veins in the pale marble of the chimney-piece.
  const rm = rng(1204)
  let marble = ''
  for (let k = 0; k < 12; k++) {
    const x = between(rm, 6, 112)
    const y = between(rm, 120, 244)
    marble += `M${n(x)} ${n(y)}q${n(between(rm, 4, 10))} ${n(between(rm, -6, 6))} ${n(between(rm, 8, 18))} ${n(between(rm, -4, 10))}`
  }
  // The quilting of the Marseilles counterpane where it falls over the side.
  let quilt = ''
  for (let x = 584; x < 870; x += 34)
    quilt += `M${x} 214L${x + 17} 240L${x} 266M${x + 34} 214L${x + 17} 240L${x + 34} 266`
  // The blind: a grey cut with faint horizontal lines.
  let blind = ''
  for (let y = 60; y < 222; y += 7) blind += `M444 ${y}H500`
  cached = { wall, gleamRays, carpet, marble, quilt, blind }
  return cached
}

/** Jane on the low ottoman, facing the bed, her head lifted to the gleam, her eyes wide. */
const JANE_POSE = {
  facing: 1 as const,
  neck: [195, 226] as P,
  waist: [195, 262] as P,
  hemY: 302,
  head: { at: [184, 204] as P, rot: -26, scale: 1.05 },
  arm: 8.4,
  leg: 9,
  shoe: 0.92,
  skirt:
    'M190 222C194 220 202 220 206 223L208 233L205 262C220 264 236 266 247 268C252 272 254 286 255 302L233 304C233 298 232 294 230 292L174 294C176 284 180 272 186 262L184 234Z',
  near: {
    arm: [
      [199, 234],
      [207, 262],
      [215, 287],
    ] as P[],
    leg: [
      [200, 288],
      [244, 272],
      [250, 318],
    ] as P[],
    hand: { parts: HOLD_HAND, scale: 0.96, rot: 8 },
  },
  far: {
    arm: [
      [190, 235],
      [180, 262],
      [172, 287],
    ] as P[],
    leg: [
      [194, 288],
      [234, 274],
      [238, 318],
    ] as P[],
    hand: { parts: HOLD_HAND, scale: 0.96, rot: -8 },
  },
}
/** Jane and her ottoman, scaled up about the foot of the ottoman: she sits nearer than the wall. */
const JANE_NEAR = 'translate(206 330) scale(1.22) translate(-206 -330)'
/** Her pinafore, over her bodice and lap and falling over her knees. */
const PINAFORE =
  'M199 228C202 227 205 228 206 230L204 262C220 265 236 267 246 270C251 276 252 288 253 300L236 301C235 292 232 286 226 283C216 280 206 278 198 276L196 266L197 232C197 230 198 228 199 228Z'
const PINAFORE_FOLDS = 'M236 280L240 300M246 278L249 300M196 264Q201 266 205 262'

function RedRoom({ uid }: ArtProps) {
  const m = marks()
  const id = { gleam: `${uid}-gleam` }
  return (
    <>
      <defs>
        <clipPath id={id.gleam}>
          <ellipse cx={QUIVER[0]} cy={QUIVER[1] + 6} rx={92} ry={44} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [260, 150], push: 1.03 })}>
        {/* the wall, the cornice, the skirting */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={12} width={W} height={4} fill={PAPER} />
        <rect x={0} y={19} width={W} height={1.4} fill={PAPER} />
        <rect x={0} y={FLOOR - 8} width={W} height={8} fill={PAPER} />
        <rect x={0} y={FLOOR - 5} width={W} height={1.4} fill={INK} />
        {/* the red carpet, cut in ink */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={INK} />
        <path d={m.carpet} fill={PAPER} />

        {/* the marble chimney-piece, the grate empty */}
        <rect x={0} y={106} width={130} height={10} fill={PAPER} />
        <rect x={0} y={116} width={120} height={FLOOR - 116} fill={PAPER} />
        <path d={m.marble} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
        <path d="M18 250V158Q18 146 30 146H88Q100 146 100 158V250Z" fill={INK} />
        <path
          d="M30 210H88M32 218H86M34 226H84M42 210V242M76 210V242"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <rect x={0} y={102} width={130} height={4} fill={INK} />

        {/* the window, its blind down, half shrouded in red falls */}
        <rect x={434} y={46} width={76} height={184} fill={PAPER} />
        <rect x={440} y={52} width={64} height={172} fill={INK} />
        <rect x={444} y={56} width={56} height={164} fill={PAPER} />
        <path d={m.blind} stroke={INK} strokeWidth={1} />
        <path d="M438 228H506" stroke={INK} strokeWidth={3} />
        <g fill={RED}>
          <path d="M426 36H518V54C508 66 492 72 472 72C452 72 436 66 426 54Z" />
          <path d="M426 48C436 62 442 120 438 238H424C422 160 422 92 426 48Z" />
          <path d="M518 48C508 62 502 120 506 238H520C522 160 522 92 518 48Z" />
        </g>
        <g fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round">
          <path d="M434 58C438 68 452 72 472 72C492 72 506 68 510 58" />
          <path d="M430 74C432 120 432 180 430 234M514 74C512 120 512 180 514 234" />
        </g>

        {/* the gleam on the wall, gliding up to the ceiling and quivering over her head */}
        <g className="lc-rise" style={timing({ delay: 0.5, dur: 2.2 })}>
          <g clipPath={`url(#${id.gleam})`}>
            <path d={m.gleamRays} fill={PAPER} />
          </g>
          <path d={gouge(GLEAM_A[0], GLEAM_A[1], GLEAM_B[0], GLEAM_B[1], 10, -2)} fill={PAPER} />
          <path
            d={
              gouge(GLEAM_A[0] + 8, GLEAM_A[1] + 18, GLEAM_A[0] - 6, GLEAM_A[1] + 4, 2.6) +
              gouge(GLEAM_A[0] + 18, GLEAM_A[1] + 34, GLEAM_A[0] + 10, GLEAM_A[1] + 24, 1.6)
            }
            fill={PAPER}
          />
        </g>

        {/* the bed rising before her: the tester, the red damask, the pillars */}
        <rect x={552} y={20} width={320} height={18} fill={INK} />
        <path d="M552 20H872M552 38H872" stroke={PAPER} strokeWidth={LINE.fine} />
        <path
          d="M556 38H872V58C862 66 850 66 840 58C830 66 818 66 808 58C798 66 786 66 776 58C766 66 754 66 744 58C734 66 722 66 712 58C702 66 690 66 680 58C670 66 658 66 648 58C638 66 626 66 616 58C606 66 594 66 584 58C574 66 562 66 556 58Z"
          fill={RED}
        />
        {/* the hangings at the head of the bed, behind the pillows */}
        <path d="M782 62H872V190H782Z" fill={RED} />
        <path d="M798 66V186M814 66V186M830 66V186M846 66V186" stroke={INK} strokeWidth={1.4} />
        {/* the bedding, piled up and glaring white */}
        <path
          d="M576 206C584 194 640 188 720 188C780 188 840 190 872 194L872 278L574 278Z"
          fill={PAPER}
        />
        <path d={m.quilt} fill="none" stroke={INK} strokeWidth={0.8} />
        <path d="M576 206C650 212 780 212 872 206" fill="none" stroke={INK} strokeWidth={1.4} />
        <path d="M574 244C660 250 780 250 872 244" fill="none" stroke={INK} strokeWidth={1} />
        <path
          d="M790 150C802 140 840 140 856 150C862 162 860 180 854 192C832 196 806 196 790 190C784 178 784 162 790 150Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path
          d="M760 168C768 160 790 160 800 168C804 178 802 188 798 196C784 198 770 198 760 194C756 186 756 176 760 168Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <rect x={572} y={278} width={300} height={10} fill={INK} />
        {/* the curtain at the foot, tied back to its pillar */}
        <path
          d="M566 58C582 60 596 60 606 58C602 110 592 150 586 170C594 204 600 236 606 262L566 264Z"
          fill={RED}
        />
        <path
          d="M578 66C578 120 578 196 580 260M592 64C590 110 584 150 578 172"
          stroke={INK}
          strokeWidth={1.5}
          fill="none"
        />
        <path d="M570 168C580 172 590 172 600 168" stroke={PAPER} strokeWidth={2.2} fill="none" />
        {/* the foot pillar, massive mahogany */}
        <path
          d="M552 38H570V98C578 103 578 117 570 122V200C580 205 580 221 570 226V290H552V226C542 221 542 205 552 200V122C544 117 544 103 552 98Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(558, 46, 558, 94, 1) + gouge(558, 128, 558, 196, 1) + gouge(558, 232, 558, 284, 1)
          }
          fill={PAPER}
        />

        {/* the low ottoman, and Jane on it, drawn a little nearer than the room */}
        <g transform={JANE_NEAR}>
          <path d="M150 290H262V318H150Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d="M150 290C180 285 232 285 262 290" fill="none" stroke={PAPER} strokeWidth={1.4} />
          <g fill={PAPER}>
            {[172, 206, 240].map((x) => (
              <circle key={x} cx={x} cy={303} r={1.8} />
            ))}
          </g>
          <path d="M156 318V328M256 318V328" stroke={INK} strokeWidth={5} strokeLinecap="round" />
          <path d="M156 318V327M256 318V327" stroke={PAPER} strokeWidth={1.2} />
          <JaneGirl
            pose={JANE_POSE}
            dress="pinafore"
            eye="wide"
            mouth="shut"
            pinafore={PINAFORE}
            inkOver={PINAFORE_FOLDS}
          />
        </g>
      </g>
    </>
  )
}

export const theRedRoom: LinocutArt = { width: W, height: H, Draw: RedRoom }
