import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Benjamin, HEAD_FRAME, Hen, Horse, Pig, place, Sheep } from './people'

/**
 * Chapter 7: "Snowball the traitor", the twentieth moment in the guide's
 * timeline. Every detail is from the text (the held edition,
 * src/data/full-texts/animal-farm.ts):
 *
 * - "In the evening Squealer called them together, and with an alarmed
 *   expression on his face told them that he had some serious news to
 *   report." So it is the farmyard at evening, the light going.
 * - "'Comrades!' cried Squealer, making little nervous skips" and later
 *   "exclaimed Squealer, frisking from side to side". So Squealer, the small
 *   round pale pig, is caught mid-skip, his tail whisked out, talking: his
 *   voice is three strokes off his snout, as it is drawn in moment 15.
 * - "Snowball was in league with Jones from the very start! He was Jones's
 *   secret agent all the time." "The animals were stupefied."
 * - "Even Boxer, who seldom asked questions, was puzzled. He lay down, tucked
 *   his fore hoofs beneath him, shut his eyes, and with a hard effort managed
 *   to formulate his thoughts." So Boxer lies facing Squealer with his
 *   forelegs folded out of sight under his chest and his eye shut. The kit's
 *   lying horse lays one foreleg out in front, so that hoof is masked here,
 *   and the kit's open eye is cut shut.
 * - "In these days Napoleon rarely appeared in public, but spent all his time
 *   in the farmhouse" (earlier in the chapter). Squealer speaks for him, so
 *   behind Squealer stands the farmhouse, and its one lit window is the spot
 *   colour: where the story Squealer tells comes from.
 *
 * Clover, Benjamin, the sheep and the hens listen round Boxer. Everyone is
 * the kit's (./people.tsx). Nothing is taken from a film, a cartoon or a
 * stage production. Seeds: 2001 (sky), 2002 (yard), 2003 (house).
 */

const W = 860
const H = 340
const GROUND = 322
/** Where the yard meets the fields behind it. */
const HORIZON = 250

/** The farmhouse on the left: its front, eaves and ridge. */
const HOUSE = { x0: -6, x1: 290, eaves: 118, ridge: 70, base: HORIZON + 8 }
/** The lit window, and the dark ones. */
const LIT = { x: 196, y: 140, w: 34, h: 38 }
const DARK: Pt[] = [
  [52, 140],
  [52, 196],
  [196, 200],
]

/** Squealer, in the air mid-skip; Boxer lying, facing him. */
const SQUEALER = { at: [262, GROUND - 10] as Pt, s: 1.34 }
const BOXER = { at: [588, GROUND + 2] as Pt, s: 0.98, down: 10 }
/** His voice: three strokes off his snout, as in moment 15. */
const VOICE = 'M352 262Q361 270 352 278M362 255Q374 270 362 285M372 248Q387 270 372 292'

type Marks = { sky: string; yard: string; house: string; roof: string; hedge: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Evening: the sky pale low down, darkening upwards, scored across.
  const r = rng(2001)
  const sky = gougeField(
    r,
    { x0: 0, x1: W, y0: 4, y1: HORIZON },
    (x, y) => clamp(0.1 + (1 - y / HORIZON) * 0.5),
    { spacing: 6.5, len: [40, 150], gap: [16, 44], max: 2.8 },
  )
  // The far hedge along the edge of the yard.
  let hedge = `M${HOUSE.x1 - 10} ${HORIZON + 4}`
  for (let x = HOUSE.x1 - 10; x <= W + 4; x += 7)
    hedge += `L${n(x)} ${n(HORIZON - 6 + 3 * Math.sin(x / 12) + between(r, -1, 1))}`
  hedge += `L${W + 4} ${HORIZON + 4}Z`
  // The trodden yard, pale, darker towards us.
  const y = rng(2002)
  const yard = gougeField(
    y,
    { x0: 0, x1: W, y0: HORIZON + 4, y1: H },
    (_x, yy) => clamp(0.08 + (yy - HORIZON) / 300),
    { spacing: 6, len: [14, 54], gap: [16, 40], max: 2.4 },
  )
  // The farmhouse front in the dusk: dark, with its stone courses faintly cut.
  const h = rng(2003)
  const house = gougeField(
    h,
    { x0: HOUSE.x0, x1: HOUSE.x1, y0: HOUSE.eaves + 6, y1: HOUSE.base },
    (x) => clamp(0.22 - (x - HOUSE.x0) / 2400),
    { spacing: 8, len: [14, 44], gap: [10, 30] },
  )
  let roof = ''
  for (let yy = HOUSE.ridge + 8; yy < HOUSE.eaves - 2; yy += 7)
    roof += gouge(HOUSE.x0, yy, HOUSE.x1 - 20 - (HOUSE.eaves - yy) * 0.6, yy, 0.8)
  cached = { sky, yard, house, roof, hedge }
  return cached
}

/**
 * Boxer's shut eye, laid over the kit's open one: the eye's cut filled in
 * again with ink, and a lid cut as a short paper arc. In the head's frame,
 * placed exactly as the kit places a lying horse's head.
 */
function ShutEye() {
  const { at, s, down } = BOXER
  const headT = `translate(0 54) rotate(${down} 40 -104) ${HEAD_FRAME}`
  return (
    <g transform={`${place(at, s, -1)} ${headT}`}>
      <ellipse cx={18.8} cy={-1.1} rx={5.6} ry={2.8} fill={INK} />
      <path
        d="M14.4 -1.6Q18.8 2.2 23.2 -1.8"
        fill="none"
        stroke={PAPER}
        strokeWidth={1.3}
        strokeLinecap="round"
      />
    </g>
  )
}

function SnowballTheTraitor({ uid }: ArtProps) {
  const m = marks()
  // "tucked his fore hoofs beneath him": the kit's lying horse lays a foreleg
  // out in front; everything of it beyond his chest is masked out.
  const [bx, by] = BOXER.at
  const tuck = `${uid}-tuck`
  const hide = { x0: bx - 104 * BOXER.s, x1: bx - 68 * BOXER.s, y0: by - 16 * BOXER.s, y1: by + 6 }
  return (
    <g className="lc-push" style={timing({ origin: [420, 260], push: 1.03 })}>
      <defs>
        <clipPath id={tuck}>
          <path
            clipRule="evenodd"
            d={`M-10 -10H${W + 10}V${H + 10}H-10ZM${n(hide.x0)} ${n(hide.y0)}H${n(hide.x1)}V${n(hide.y1)}H${n(hide.x0)}Z`}
          />
        </clipPath>
      </defs>
      {/* the evening sky, the hedge and the yard */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <path d={m.hedge} fill={INK} />
      <path d={m.yard} fill={INK} />

      {/* the farmhouse, where Napoleon keeps himself, one window lit */}
      <path
        d={`M${HOUSE.x0} ${HOUSE.eaves}V${HOUSE.ridge}H${HOUSE.x1 - 36}L${HOUSE.x1 + 14} ${HOUSE.eaves}Z`}
        fill={INK}
      />
      <path d={m.roof} fill={PAPER} />
      <rect x={70} y={HOUSE.ridge - 26} width={22} height={30} fill={INK} />
      <rect x={66} y={HOUSE.ridge - 30} width={30} height={6} fill={INK} />
      <rect
        x={HOUSE.x0}
        y={HOUSE.eaves}
        width={HOUSE.x1 - HOUSE.x0}
        height={HOUSE.base - HOUSE.eaves}
        fill={INK}
      />
      <path d={m.house} fill={PAPER} />
      <rect
        x={HOUSE.x0}
        y={HOUSE.eaves - 3}
        width={HOUSE.x1 - HOUSE.x0 + 12}
        height={6}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.fine}
      />
      {DARK.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x - 4} y={y - 4} width={42} height={46} fill={PAPER} />
          <rect x={x - 1} y={y - 1} width={36} height={40} fill={INK} />
          <path
            d={`M${x + 17} ${y}V${y + 38}M${x} ${y + 18}H${x + 34}`}
            stroke={PAPER}
            strokeWidth={1.4}
          />
        </g>
      ))}
      <rect x={LIT.x - 4} y={LIT.y - 4} width={LIT.w + 8} height={LIT.h + 8} fill={PAPER} />
      <rect x={LIT.x} y={LIT.y} width={LIT.w} height={LIT.h} fill={RED} />
      <path
        d={`M${LIT.x + LIT.w / 2} ${LIT.y}V${LIT.y + LIT.h}M${LIT.x} ${LIT.y + LIT.h / 2}H${LIT.x + LIT.w}`}
        stroke={INK}
        strokeWidth={2.2}
      />
      <rect
        x={116}
        y={196}
        width={40}
        height={HOUSE.base - 196}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />

      {/* the animals, stupefied: the sheep and hens in front, Clover and Benjamin behind */}
      <Horse at={[742, GROUND - 14]} s={0.84} face={-1} who="clover" headDown={12} uid={uid} />
      <Benjamin at={[836, GROUND - 4]} s={0.96} face={-1} />
      <Sheep at={[482, GROUND + 4]} s={1.9} face={-1} />
      <Hen at={[392, GROUND + 2]} s={1.6} face={-1} />
      <Hen at={[716, GROUND + 14]} s={1.5} face={-1} />

      {/* Boxer, lying down, his fore hoofs tucked under him, his eyes shut */}
      <g clipPath={`url(#${tuck})`}>
        <Horse at={BOXER.at} s={BOXER.s} face={-1} who="boxer" pose="lie" headDown={BOXER.down} />
      </g>
      <ShutEye />

      {/* Squealer, mid-skip, telling them */}
      <ellipse cx={SQUEALER.at[0] + 4} cy={GROUND + 4} rx={48} ry={4} fill={INK} />
      <g className="lc-rise" style={timing({ delay: 0.3, dur: 0.9 })}>
        <Pig at={SQUEALER.at} s={SQUEALER.s} kind="squealer" pose="skip" mouthOpen />
      </g>
      <path
        className="lc-fade-in"
        style={timing({ delay: 1, dur: 0.5 })}
        d={VOICE}
        fill="none"
        stroke={INK}
        strokeWidth={2.4}
        strokeLinecap="round"
      />
    </g>
  )
}

export const snowballTheTraitor: LinocutArt = { width: W, height: H, Draw: SnowballTheTraitor }
