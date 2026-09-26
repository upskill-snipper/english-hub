import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  ENFIELD_CUTS,
  Figure,
  GRIP_HAND,
  HEAD_ENFIELD,
  HEAD_JEKYLL,
  HEAD_UTTERSON,
  TOP_HAT,
  TOP_HAT_BAND,
  UTTERSON_CUTS,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'
import { COLLAR } from './investigation-kit'

/**
 * Chapter 7, "Incident at the Window": the ninth moment in the guide's
 * timeline. Every detail is from the text:
 *
 * - "It chanced on Sunday, when Mr. Utterson was on his usual walk with Mr.
 *   Enfield"; "we may step into the court and take a look at the windows".
 *   So the two walkers of Chapter 1 stand in the court, in their top hats,
 *   Utterson with his stick and Enfield with his cane, as the shared figures
 *   (./people.tsx) draw them in "The door and Enfield's story".
 * - "The court was very cool and a little damp, and full of premature
 *   twilight, although the sky, high up overhead, was still bright with
 *   sunset." So the court is dark and its flags are wet, and only a strip of
 *   sky shows high overhead, bright, streaked with the sunset in the spot
 *   colour.
 * - The cabinet looks "out upon the court by three dusty windows barred with
 *   iron" (Chapter 5). "The middle one of the three windows was half-way
 *   open; and sitting close beside it, taking the air with an infinite
 *   sadness of mien, like some disconsolate prisoner, Utterson saw Dr.
 *   Jekyll." So three barred windows run along the upper storey, the lower
 *   sash of the middle one raised half-way, and Jekyll sits at it behind the
 *   bars. The rest of the glass is dusty, cut with fine hatching.
 * - "the smile was struck out of his face and succeeded by an expression of
 *   such abject terror and despair, as froze the very blood of the two
 *   gentlemen below. They saw it but for a glimpse for the window was
 *   instantly thrust down". So his face is cut pale, as the one lit thing in
 *   the court, and the motion shows the change: the smile fades and the
 *   terror comes, brows up, eye wide, mouth open. The finished print is that
 *   glimpse, before the window comes down; no hand is drawn at the sash (an
 *   earlier version of this note said there was one). Below, the two men
 *   stand frozen, their faces turned up to him.
 *
 * Jekyll is "a large, well-made, smooth-faced man of fifty" (Chapter 3), so
 * his is the shared broad, clean-shaven head, lit; his hair, not described,
 * is dark and brushed back as in his portrait. Nothing is drawn of any change
 * in him but his face: the text shows only the look. Nothing is taken from a
 * film or stage production.
 *
 * The spot colour is the sunset. Seeds: 901 (the facade), 902 (the court's
 * walls), 903 (the flags), 904 (the dust on the glass).
 */

const W = 860
const H = 340
/** The foot of the walls; the flags of the court run from here. */
const GROUND = 252
/** The roofline, and the strip of sky above it. */
const EAVES = 38
/** The three windows of the cabinet: x of each, and their top and height. */
const WIN_X = [372, 516, 660]
const WIN_W = 110
const WIN_TOP = 56
const WIN_H = 128
/** Where the raised lower sash of the middle window now sits. */
const SASH = WIN_TOP + 62

type Marks = {
  facade: string
  walls: string
  flags: string
  wet: string
  dust: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The last of the sunset catches the top of the walls; below, twilight.
  const light = (_x: number, y: number) => 0.04 + 0.5 * clamp((110 - y) / 80)
  const facade = gougeField(rng(901), { x0: 338, x1: W, y0: EAVES + 6, y1: GROUND }, light, {
    spacing: 6,
    len: [16, 60],
    max: 3,
  })
  const walls = gougeField(rng(902), { x0: 0, x1: 330, y0: 24, y1: GROUND }, light, {
    spacing: 6,
    len: [16, 60],
    max: 3,
  })
  // The flags: joints running back to the foot of the wall.
  const r = rng(903)
  let flags = ''
  for (let x = -300; x < W + 300; x += 46) {
    const xb = 430 + (x - 430) * 1.9
    flags += wedge(x, GROUND + 2, xb, H, 0.5, 1.6)
  }
  for (const y of [266, 284, 308])
    flags += wedge(0, y, W, y + 0.5, 0.6 + (y - GROUND) / 60, 0.6 + (y - GROUND) / 60)
  // "a little damp": the bright sky caught in the wet stones, in long streaks.
  let wet = ''
  for (let i = 0; i < 16; i++) {
    const x = between(r, 20, 500)
    const y = between(r, GROUND + 10, H - 10)
    wet += gouge(x, y, x + between(r, 20, 70), y + between(r, -0.6, 0.6), between(r, 0.6, 1.4))
  }
  // Dust on the glass: fine diagonal hatching over each pane.
  let dust = ''
  for (const x0 of WIN_X)
    for (let k = -WIN_H; k < WIN_W; k += 4.2)
      dust += `M${(x0 + k).toFixed(1)} ${WIN_TOP + WIN_H}L${(x0 + k + WIN_H * 0.6).toFixed(1)} ${WIN_TOP}`
  cached = { facade, walls, flags, wet, dust }
  return cached
}

// ── The two walkers, in the court, looking up ───────────────────────────────

const UTT_HEAD = { d: HEAD_UTTERSON, at: [176, 180] as P, rot: -16, scale: 0.92 }
const UTT_ARM: P[] = [
  [176, 210],
  [184, 238],
  [194, 258],
]
const UTTERSON: Part[] = [
  ...gent({
    facing: 1,
    neck: [172, 202],
    hip: [168, 262],
    head: UTT_HEAD,
    hat: TOP_HAT,
    body: { width: 24, hem: 40, flare: 6 },
    near: {
      arm: UTT_ARM,
      leg: [
        [170, 262],
        [176, 292],
        [180, 320],
      ],
    },
    far: {
      arm: [
        [168, 210],
        [162, 238],
        [160, 260],
      ],
      leg: [
        [166, 262],
        [160, 292],
        [152, 320],
      ],
    },
    arm: 7,
    leg: 7.6,
  }),
  { d: 'M196 258L202 321', w: 2.8 },
  ...GRIP_HAND.map((q) => ({
    ...q,
    t: handAt(UTT_ARM, 1, { parts: GRIP_HAND, rot: -20, scale: 0.85 }),
  })),
]

const ENF_HEAD = { d: HEAD_ENFIELD, at: [262, 194] as P, rot: -18, scale: 0.9 }
const ENF_ARM: P[] = [
  [262, 222],
  [270, 248],
  [280, 266],
]
const ENFIELD: Part[] = [
  ...gent({
    facing: 1,
    neck: [258, 216],
    hip: [254, 270],
    head: ENF_HEAD,
    hat: TOP_HAT,
    body: { width: 26, hem: 32, flare: 7 },
    near: {
      arm: ENF_ARM,
      leg: [
        [256, 270],
        [264, 296],
        [268, 322],
      ],
    },
    far: {
      arm: [
        [254, 222],
        [248, 248],
        [246, 268],
      ],
      leg: [
        [252, 270],
        [246, 296],
        [240, 322],
      ],
    },
    arm: 7,
    leg: 7.8,
  }),
  { d: 'M282 266L288 323', w: 2.8 },
  ...GRIP_HAND.map((q) => ({
    ...q,
    t: handAt(ENF_ARM, 1, { parts: GRIP_HAND, rot: -20, scale: 0.85 }),
  })),
]

// ── Jekyll at the middle window, facing left, down towards them ─────────────

const JEK_AT: P = [594, 150]
const JEK_T = headAt(-1, JEK_AT, 6, 1.4)
/** His dark hair, brushed back over the crown and behind the ear, in the head's frame. */
const JEK_HAIR =
  'M-2 -22.5C-12 -22 -18 -14 -18.5 -4C-19 4 -16.5 10 -12.5 15L-4.5 13C-6.5 8 -6.5 1 -3.5 -5C0.5 -11 7 -14.6 13.5 -14.6C16 -14.6 17.5 -13.6 18 -12C16.5 -19 8 -23 -2 -22.5Z'
/** Strands in the hair, cut in paper, in the head's frame. */
const JEK_STRANDS =
  gouge(12, -18.4, -8, -14, 0.5, 1.4) +
  gouge(4, -20, -14, -6, 0.5, 1.8) +
  gouge(-6, -16, -13.6, 6, 0.45, 1)
/** His shoulders and the dark coat, cut off by the sill. */
const JEK_BODY = 'M566 184C568 178 574 175 582 174L608 174C616 176 622 180 624 184Z'

function IncidentAtTheWindow({ uid }: ArtProps) {
  const m = marks()
  const glass = `${uid}-glass`
  const ut = headAt(1, UTT_HEAD.at, UTT_HEAD.rot, UTT_HEAD.scale)
  const et = headAt(1, ENF_HEAD.at, ENF_HEAD.rot, ENF_HEAD.scale)
  const mid = WIN_X[1]
  return (
    <>
      <defs>
        <clipPath id={glass}>
          {WIN_X.map((x) => (
            <rect
              key={x}
              x={x}
              y={WIN_TOP}
              width={WIN_W}
              height={x === mid ? SASH - WIN_TOP : WIN_H}
            />
          ))}
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [560, 120], push: 1.03 })}>
        {/* the sky high overhead, bright with sunset */}
        <rect x={0} y={0} width={W} height={EAVES + 4} fill={PAPER} />
        <g fill={RED}>
          <path d="M40 14C120 10 220 12 300 17C220 19 120 19 40 14Z" />
          <path d="M360 9C470 5 600 6 700 11C600 14 470 14 360 9Z" />
          <path d="M520 24C620 21 740 22 850 27C740 29 620 29 520 24Z" />
          <path d="M150 28C220 26 290 27 330 30C290 32 220 32 150 28Z" />
        </g>

        {/* the walls of the court, in twilight */}
        <path d={`M0 ${GROUND}V30H60V20H78V30H330V${GROUND}Z`} fill={INK} />
        <path d={m.walls} fill={PAPER} />
        {/* the way in from the by-street, and two dark windows */}
        <path
          d={`M44 ${GROUND}V170Q44 146 70 146Q96 146 96 170V${GROUND}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        {[
          [150, 60],
          [238, 60],
        ].map(([x, y]) => (
          <g key={x}>
            <rect x={x - 3} y={y - 3} width={46} height={62} fill={PAPER} />
            <rect x={x} y={y} width={40} height={56} fill={INK} />
            <path
              d={`M${x + 20} ${y}V${y + 56}M${x} ${y + 28}H${x + 40}`}
              stroke={PAPER}
              strokeWidth={1.1}
            />
          </g>
        ))}

        {/* the cabinet: its wall, its cornice and its three barred windows */}
        <rect x={334} y={EAVES} width={W - 334} height={GROUND - EAVES} fill={INK} />
        <path d={m.facade} fill={PAPER} />
        <rect x={334} y={EAVES} width={W - 334} height={5} fill={PAPER} />
        <rect x={334} y={EAVES + 8} width={W - 334} height={1.6} fill={PAPER} />
        <path d={`M334 ${EAVES}V${GROUND}`} stroke={PAPER} strokeWidth={LINE.carve} />
        {WIN_X.map((x) => (
          <g key={x}>
            <rect x={x - 6} y={WIN_TOP - 6} width={WIN_W + 12} height={WIN_H + 12} fill={PAPER} />
            <rect x={x - 3} y={WIN_TOP - 3} width={WIN_W + 6} height={WIN_H + 6} fill={INK} />
            <rect x={x} y={WIN_TOP} width={WIN_W} height={WIN_H} fill={PAPER} />
            <rect x={x - 10} y={WIN_TOP + WIN_H + 6} width={WIN_W + 20} height={6} fill={PAPER} />
          </g>
        ))}
        {/* the dust on the glass */}
        <g clipPath={`url(#${glass})`}>
          <path d={m.dust} stroke={INK} strokeWidth={0.9} />
        </g>
        {/* the sash bars */}
        <g stroke={INK} strokeWidth={3}>
          {WIN_X.map((x) => (
            <path
              key={x}
              d={
                x === mid
                  ? `M${x + WIN_W / 2} ${WIN_TOP}V${SASH}M${x} ${WIN_TOP + 30}H${x + WIN_W}`
                  : `M${x + WIN_W / 2} ${WIN_TOP}V${WIN_TOP + WIN_H}M${x} ${WIN_TOP + WIN_H / 2}H${x + WIN_W}`
              }
            />
          ))}
        </g>
        {/* the open half of the middle window: the dark room, and Jekyll in it */}
        <rect x={mid} y={SASH} width={WIN_W} height={WIN_TOP + WIN_H - SASH} fill={INK} />
        <path
          d={`M${mid} ${SASH - 4}H${mid + WIN_W}V${SASH + 3}H${mid}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />

        <path d={JEK_BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={COLLAR} transform={JEK_T} fill={PAPER} />
        <g transform={JEK_T}>
          <path
            d={HEAD_JEKYLL}
            fill={PAPER}
            stroke={PAPER}
            strokeWidth={3.4}
            strokeLinejoin="round"
          />
          <path
            d={HEAD_JEKYLL}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.2}
            strokeLinejoin="round"
          />
          <path d={JEK_HAIR} fill={INK} />
          <path d={JEK_STRANDS} fill={PAPER} />
          {/* the smile, before it was struck out of his face */}
          <g className="lc-fade-out" style={timing({ delay: 1.2, dur: 0.5 })}>
            <path d={gouge(6.5, -8, 14, -7.4, 0.9)} fill={INK} />
            <path d="M7.6 -3.6Q10.4 -5 13 -3.8" fill="none" stroke={INK} strokeWidth={1.4} />
            <path d="M10.4 12.4Q13.4 13.4 16.4 11.4" fill="none" stroke={INK} strokeWidth={1.3} />
          </g>
          {/* and the terror and despair that came in its place */}
          <g className="lc-fade-in" style={timing({ delay: 1.5, dur: 0.4 })}>
            <path d="M5 -8.6Q9.6 -13.4 15 -9.6" fill="none" stroke={INK} strokeWidth={1.8} />
            <path d="M6.6 -13.8Q10 -15.6 13.4 -13.6" fill="none" stroke={INK} strokeWidth={0.8} />
            <circle cx={10.2} cy={-4} r={3} fill={PAPER} stroke={INK} strokeWidth={1.3} />
            <circle cx={11.2} cy={-4.2} r={1.2} fill={INK} />
            <path d="M16.4 10.2L11 10.6L11.4 15.6L16.8 14.4Z" fill={INK} />
            <path d="M5 4Q7.4 9 9.4 14.6" fill="none" stroke={INK} strokeWidth={0.9} />
          </g>
        </g>
        {/* the iron bars, over every window */}
        {WIN_X.map((x) => (
          <g key={x}>
            <path
              d={
                [14, 41, 69, 96]
                  .map((k) => `M${x + k} ${WIN_TOP - 4}V${WIN_TOP + WIN_H + 4}`)
                  .join('') +
                `M${x} ${WIN_TOP + 6}H${x + WIN_W}M${x} ${WIN_TOP + WIN_H - 6}H${x + WIN_W}`
              }
              stroke={PAPER}
              strokeWidth={5.4}
            />
            <path
              d={
                [14, 41, 69, 96]
                  .map((k) => `M${x + k} ${WIN_TOP - 4}V${WIN_TOP + WIN_H + 4}`)
                  .join('') +
                `M${x} ${WIN_TOP + 6}H${x + WIN_W}M${x} ${WIN_TOP + WIN_H - 6}H${x + WIN_W}`
              }
              stroke={INK}
              strokeWidth={3.2}
            />
          </g>
        ))}

        {/* the damp flags of the court */}
        <rect x={0} y={GROUND} width={W} height={H - GROUND} fill={INK} />
        <path d={m.wet} fill={PAPER} />
        <path d={m.flags} fill={PAPER} />
        <rect x={0} y={GROUND} width={W} height={2.4} fill={PAPER} />

        {/* the two gentlemen below, frozen */}
        <Figure parts={UTTERSON}>
          <g transform={ut}>
            <path d={UTTERSON_CUTS + TOP_HAT_BAND + COLLAR} fill={PAPER} />
          </g>
        </Figure>
        <Figure parts={ENFIELD}>
          <g transform={et}>
            <path d={ENFIELD_CUTS + TOP_HAT_BAND + COLLAR} fill={PAPER} />
          </g>
        </Figure>
      </g>
    </>
  )
}

export const incidentAtTheWindow: LinocutArt = { width: W, height: H, Draw: IncidentAtTheWindow }
