import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED, SERIF } from '@/components/comics/linocut/palette'
import {
  clamp,
  gouge,
  gougeField,
  rng,
  wedge,
  wisps,
  between,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GRIP_HAND,
  HEAD_UTTERSON,
  UTTERSON_CUTS,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'
import {
  COLLAR,
  GUEST_CUTS,
  HEAD_GUEST,
  UTTERSON_HAIR,
  floorBoards,
  scribble,
} from './investigation-kit'

/**
 * Chapter 5, "Incident of the Letter": "The letter and the handwriting", the
 * seventh moment in the guide's timeline. The moment runs from Jekyll's
 * cabinet to Utterson's fireside; the panel is the fireside, where the
 * quotation is spoken. Every detail is from the text:
 *
 * - "Presently after, he sat on one side of his own hearth, with Mr. Guest,
 *   his head clerk, upon the other, and midway between, at a nicely
 *   calculated distance from the fire, a bottle of a particular old wine".
 *   So Utterson sits on the left of his hearth and Guest on the right, and
 *   the bottle stands on a little table between them near the fire.
 * - "The fog still slept on the wing above the drowned city, where the lamps
 *   glimmered like carbuncles ... But the room was gay with firelight." So
 *   the window behind Utterson is full of fog with the far lamps glinting red
 *   in it, and the fire lights the room: its cuts are widest round the hearth.
 * - The letter was "written in an odd, upright hand and signed “Edward
 *   Hyde”". Then "the servant entered with a note", Jekyll's, and "the clerk
 *   laid the two sheets of paper alongside and sedulously compared their
 *   contents". So Guest holds the two sheets side by side, the letter on the
 *   left signed Edward Hyde in an upright hand, and the note on the right.
 * - "the two hands are in many points identical: only differently sloped."
 *   So the writing on the two sheets is the same line of pen strokes, drawn
 *   from the same seed: upright on the letter, sloped on the note. Nothing of
 *   either is legible but the signature, because the text quotes neither.
 * - "There was a pause, during which Mr. Utterson struggled with himself."
 *   So Utterson leans forward in his chair, his hand at his jaw, watching.
 *
 * Neither man's dress is described, so both wear the plain dark coat and
 * white collar of the 1880s; Guest is not described at all, so his face is
 * plain (./investigation-kit.tsx). Nothing is taken from a film or stage
 * production.
 *
 * The spot colour is the fire and the lamps in the fog. Seeds: 701 (the
 * wall), 702 (the floor), 704 (the fog in the window),
 * 705 (the handwriting).
 */

const W = 860
const H = 340
/** The foot of the wall. */
const FLOOR = 238
/** The heart of the fire. */
const FIRE: P = [372, 208]

type Marks = {
  wall: string
  wains: string
  floor: string
  fog: string
  lines: string[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - FIRE[0]) * 0.72, (y - FIRE[1]) * 1.15) / 330), 0.05)
  const wall = gougeField(rng(701), { x0: 0, x1: W, y0: 2, y1: 170 }, light)
  const w = rng(706)
  let wains = ''
  for (let x = 3; x < W; x += 9) {
    if (x > 292 && x < 452) continue
    wains += wedge(
      x + between(w, -0.6, 0.6),
      180,
      x + between(w, -0.6, 0.6),
      230,
      0.4,
      0.8 + light(x, 205) * 3.2,
    )
  }
  const floor = floorBoards(rng(702), W, H, FLOOR, [420, 20], 32)
  const fog = wisps(rng(704), 9, { x0: 30, x1: 124, y0: 34, y1: 122 }, [1.4, 3])
  // The two hands: six lines of the same pen strokes, and a short last line.
  const r = rng(705)
  const lines = [0, 1, 2, 3, 4, 5].map((i) => scribble(r, -22, -22 + i * 8, i === 5 ? 20 : 42))
  cached = { wall, wains, floor, fog, lines }
  return cached
}

// ── Utterson, seated on the left, leaning forward, his hand at his jaw ───────

const UTT_HEAD = { d: HEAD_UTTERSON, at: [214, 132] as P, rot: 7, scale: 1.12 }
const UTT_ARM: P[] = [
  [210, 168],
  [240, 230],
  [229, 181],
]
const UTTERSON: Part[] = [
  ...gent({
    facing: 1,
    neck: [206, 158],
    hip: [172, 238],
    head: UTT_HEAD,
    near: {
      arm: UTT_ARM,
      leg: [
        [176, 240],
        [238, 244],
        [242, 312],
      ],
    },
    far: {
      arm: [
        [198, 168],
        [184, 206],
        [214, 222],
      ],
      leg: [
        [168, 242],
        [228, 250],
        [228, 312],
      ],
    },
    body: { width: 30, hem: 18, flare: 4 },
  }),
  ...GRIP_HAND.map((q) => ({
    ...q,
    t: handAt(UTT_ARM, 1, { parts: GRIP_HAND, rot: 8, scale: 1.1 }),
  })),
]
const UTT_CUTS = gouge(200, 172, 186, 232, 0.9, 0.8) + gouge(212, 178, 204, 232, 0.8, 0.4)

// ── Guest, seated on the right, facing left, the two sheets held up ─────────

const GUEST_HEAD = { d: HEAD_GUEST, at: [688, 128] as P, rot: -14, scale: 1.1 }
const GUEST_NEAR_ARM: P[] = [
  [690, 164],
  [674, 216],
  [641, 198],
]
const GUEST_FAR_ARM: P[] = [
  [700, 160],
  [668, 212],
  [590, 200],
]
const GUEST: Part[] = [
  ...gent({
    facing: -1,
    neck: [694, 156],
    hip: [712, 238],
    head: GUEST_HEAD,
    near: {
      arm: GUEST_NEAR_ARM,
      leg: [
        [708, 240],
        [650, 244],
        [646, 312],
      ],
    },
    far: {
      arm: GUEST_FAR_ARM,
      leg: [
        [716, 242],
        [660, 250],
        [660, 312],
      ],
    },
    body: { width: 30, hem: 18, flare: 4 },
  }),
]
const GUEST_NEAR_HAND: Part[] = GRIP_HAND.map((q) => ({
  ...q,
  t: handAt(GUEST_NEAR_ARM, -1, { parts: GRIP_HAND, scale: 1.05 }),
}))
const GUEST_CUTS_BODY = gouge(700, 176, 712, 234, 0.9, -0.6) + gouge(690, 180, 694, 232, 0.8)

/** A sheet of writing paper, 56 by 72, centred on its origin. */
const SHEET = 'M-28 -36H28V36H-28Z'

/**
 * One sheet: the lines of writing, upright or sloped. `slope` skews every
 * line about its own baseline, so the strokes lean but the lines stay level.
 */
function Sheet({ at, lines, slope }: { at: string; lines: string[]; slope: number }) {
  return (
    <g transform={at}>
      <path d={SHEET} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g fill="none" stroke={INK} strokeWidth={0.8} strokeLinejoin="round">
        {lines.map((d, i) => {
          const y = -22 + i * 8
          return (
            <path
              key={i}
              d={d}
              transform={slope ? `translate(0 ${y}) skewX(${slope}) translate(0 ${-y})` : undefined}
            />
          )
        })}
      </g>
    </g>
  )
}

/** The window behind Utterson, and its curtains. */
const WINDOW: [number, number, number, number] = [40, 26, 84, 132]
/** The roofs of the city, dark under the fog, low in the window. */
const CITY =
  'M40 158V130H48V122H54V130L66 124L78 131V118H83V131L96 126L108 132V121H114V132L124 128V158Z'

function LetterAndHandwriting({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  const [wx, wy, ww, wh] = WINDOW
  const ut = headAt(1, UTT_HEAD.at, UTT_HEAD.rot, UTT_HEAD.scale)
  const gt = headAt(-1, GUEST_HEAD.at, GUEST_HEAD.rot, GUEST_HEAD.scale)
  return (
    <>
      <defs>
        <clipPath id={win}>
          <rect x={wx} y={wy} width={ww} height={wh} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 170], push: 1.03 })}>
        {/* the room, lit from the hearth */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={171} width={W} height={5} fill={PAPER} />
        <path d={m.wains} fill={PAPER} />
        <rect x={0} y={231} width={W} height={7} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the window on the fog, the lamps of the city glimmering in it */}
        <rect x={wx - 7} y={wy - 7} width={ww + 14} height={wh + 14} fill={PAPER} />
        <rect x={wx - 4} y={wy - 4} width={ww + 8} height={wh + 8} fill={INK} />
        <g clipPath={`url(#${win})`}>
          <rect x={wx} y={wy} width={ww} height={wh} fill={PAPER} />
          <g className="lc-drift">
            <path d={m.fog} fill={INK} />
          </g>
          {/* the drowned city below the fog */}
          <path d={CITY} fill={INK} />
          {[
            [50, 140],
            [64, 134],
            [80, 146],
            [97, 138],
            [112, 148],
            [58, 152],
          ].map(([x, y], i) => (
            <path
              key={x}
              className="lc-glow"
              // Three 1.2 s breaths after the last delay: all done by 4.1 s.
              style={timing({ delay: 0.1 + i * 0.08 })}
              d={`M${x} ${y - 3.4}L${x + 2.4} ${y}L${x} ${y + 3.4}L${x - 2.4} ${y}Z`}
              fill={RED}
            />
          ))}
        </g>
        <path
          d={`M${wx + ww / 2} ${wy}V${wy + wh}M${wx} ${wy + wh / 2}H${wx + ww}`}
          stroke={INK}
          strokeWidth={4}
        />
        <rect x={wx - 10} y={wy + wh + 4} width={ww + 20} height={6} fill={PAPER} />
        {/* the curtains, looped back */}
        <path
          d={`M${wx - 18} ${wy - 12}H${wx + 6}C${wx + 2} ${wy + 50} ${wx - 4} ${wy + 100} ${wx + 4} ${wy + wh + 30}H${wx - 18}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${wx + ww + 18} ${wy - 12}H${wx + ww - 6}C${wx + ww - 2} ${wy + 50} ${wx + ww + 4} ${wy + 100} ${wx + ww - 4} ${wy + wh + 30}H${wx + ww + 18}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(wx - 12, wy - 4, wx - 10, wy + wh + 20, 0.8) +
            gouge(wx - 3, wy - 4, wx - 4, wy + wh + 22, 0.7, 1) +
            gouge(wx + ww + 12, wy - 4, wx + ww + 10, wy + wh + 20, 0.8) +
            gouge(wx + ww + 3, wy - 4, wx + ww + 4, wy + wh + 22, 0.7, -1)
          }
          fill={PAPER}
        />

        {/* the hearth: a stone surround, the mantelshelf, the fire */}
        <path d="M300 238V120H444V238Z" fill={PAPER} />
        <path
          d={
            gouge(306, 128, 306, 234, 1.2) +
            gouge(438, 128, 438, 234, 1.2) +
            gouge(320, 126, 424, 126, 1) +
            gouge(310, 170, 322, 170, 0.8) +
            gouge(424, 170, 436, 170, 0.8)
          }
          fill={INK}
        />
        <rect x={288} y={110} width={168} height={9} fill={PAPER} />
        <rect x={288} y={118} width={168} height={3} fill={INK} />
        <path d="M326 238V160Q326 144 342 144H402Q418 144 418 160V238Z" fill={INK} />
        {/* the grate and the fire in it */}
        <path
          d="M340 212H404M341 219H403M342 226H402M346 212V234M398 212V234"
          stroke={PAPER}
          strokeWidth={1.5}
          fill="none"
        />
        <g fill={RED}>
          <path d="M344 212C344 204 352 200 358 205C361 198 372 197 375 204C381 199 392 201 391 208C396 206 401 208 400 212Z" />
          <path
            className="lc-flicker"
            d="M354 206C350 196 356 186 360 176C364 188 369 196 364 206Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.35 })}
            d="M370 205C366 192 372 178 376 166C381 180 386 192 381 205Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 1, delay: 0.15 })}
            d="M384 206C382 198 386 190 389 184C392 192 395 199 392 206Z"
          />
        </g>
        {/* the hearthstone and the fender */}
        <rect x={290} y={238} width={164} height={12} fill={PAPER} />
        <path d="M296 250H448" stroke={INK} strokeWidth={LINE.bold} />
        <path d="M306 244H438" stroke={INK} strokeWidth={1.2} />

        {/* Utterson's chair */}
        <path
          d="M92 250V130Q92 110 112 110Q132 110 132 130V214H222Q232 214 232 224V250Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M100 250V312M226 250V312" stroke={INK} strokeWidth={6} />
        <rect x={92} y={248} width={140} height={10} fill={INK} stroke={PAPER} strokeWidth={1.2} />

        {/* Guest's chair */}
        <path
          d="M768 250V130Q768 110 748 110Q728 110 728 130V214H638Q628 214 628 224V250Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d="M760 250V312M634 250V312" stroke={INK} strokeWidth={6} />
        <rect x={628} y={248} width={140} height={10} fill={INK} stroke={PAPER} strokeWidth={1.2} />

        {/* Utterson, struggling with himself */}
        <Figure parts={UTTERSON} cuts={UTT_CUTS}>
          <g transform={ut}>
            <path d={UTTERSON_CUTS + UTTERSON_HAIR + COLLAR} fill={PAPER} />
          </g>
        </Figure>

        {/* the little table, the old wine and two glasses, midway between */}
        <path
          d="M474 262V304M462 312L474 300L486 312"
          stroke={PAPER}
          strokeWidth={8}
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M474 262V304M462 312L474 300L486 312"
          stroke={INK}
          strokeWidth={5}
          fill="none"
          strokeLinecap="round"
        />
        <ellipse cx={474} cy={260} rx={28} ry={6} fill={INK} stroke={PAPER} strokeWidth={1.6} />
        <path
          d="M466 256V226C466 218 469 214 471 212V198H477V212C479 214 482 218 482 226V256Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <rect x={468.5} y={232} width={11} height={12} fill={PAPER} />
        <path d="M470 236H478M470 240H476" stroke={INK} strokeWidth={0.8} />
        {[452, 494].map((x) => (
          <path
            key={x}
            d={`M${x - 5} 240H${x + 5}C${x + 5} 246 ${x + 2} 248 ${x} 248V256M${x - 4} 257H${x + 4}`}
            fill="none"
            stroke={PAPER}
            strokeWidth={1.3}
          />
        ))}

        {/* Guest, and the two sheets side by side */}
        <Figure parts={GUEST} cuts={GUEST_CUTS_BODY}>
          <g transform={gt}>
            <path d={GUEST_CUTS + COLLAR} fill={PAPER} />
          </g>
        </Figure>
        <Sheet at="translate(544 162) rotate(-4) scale(1.18)" lines={m.lines} slope={0} />
        <text
          x={0}
          y={30}
          transform="translate(544 162) rotate(-4) scale(1.18)"
          fontFamily={SERIF}
          fontSize={7.6}
          textAnchor="end"
          fill={INK}
        >
          <tspan x={24}>Edward Hyde</tspan>
        </text>
        <Sheet at="translate(610 160) rotate(3) scale(1.18)" lines={m.lines} slope={-30} />
        <Figure parts={GUEST_NEAR_HAND} />
        <Figure
          parts={GRIP_HAND.map((q) => ({
            ...q,
            t: handAt(GUEST_FAR_ARM, -1, { parts: GRIP_HAND, scale: 1.05 }),
          }))}
        />
        {/* his thumbs over the foot of each sheet */}
        <g fill={INK} stroke={PAPER} strokeWidth={1}>
          <ellipse cx={637} cy={199} rx={2.4} ry={4.4} transform="rotate(-18 637 199)" />
          <ellipse cx={578} cy={198} rx={2.4} ry={4.4} transform="rotate(-10 578 198)" />
        </g>
      </g>
    </>
  )
}

export const theLetterAndTheHandwriting: LinocutArt = {
  width: W,
  height: H,
  Draw: LetterAndHandwriting,
}
