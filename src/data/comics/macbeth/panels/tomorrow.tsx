import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  flagFloor,
  footShadow,
  Macbeth,
  MailPattern,
  MacbethSilhouette,
  stoneWall,
} from './dunsinane-kit'

/**
 * Act 5, Scene 5: "Tomorrow", the twenty-second moment in the guide's
 * timeline. Every detail is from the scene:
 *
 * - "Dunsinane. Within the castle." "A cry of women within." Seyton goes to
 *   find out, and comes back: "The Queen, my lord, is dead." So Seyton stands
 *   in the doorway to the inner rooms, where the cry came from, head bowed,
 *   the news just given.
 * - "She should have died hereafter." Macbeth, crowned, in the mail he has
 *   armed himself in ("At least we'll die with harness on our back"), stands
 *   with his head bowed, one open hand held out to the one light in the room,
 *   as he speaks to it.
 * - "Out, out, brief candle! / Life's but a walking shadow, a poor player /
 *   That struts and frets his hour upon the stage / And then is heard no
 *   more." So the only light is a candle burnt down to a stub, and the candle
 *   throws Macbeth's shadow, crown and all, huge and flat on the stone behind
 *   him: the walking shadow standing over the man.
 *
 * The spot colour is the candle's flame and the crown. Motion: the flame
 * gutters, and the shadow rises on the wall as the light takes. Nothing is
 * taken from a film or stage production. Seeds: 2201 (wall), 2202 (floor),
 * 2203 (candlelight), 2204 (the passage beyond the door), 2205 (the cut edge
 * of the pool of light).
 */

const W = 860
const H = 340
const FLOOR = 252

/** The candle's flame, Macbeth's feet, Seyton's feet, and the shadow's throw. */
const FLAME: [number, number] = [346, 124]
const MAC_AT: [number, number] = [492, 320]
const MAC_SCALE = 1.14
const SEYTON_AT: [number, number] = [126, 258]
const SEYTON_SCALE = 1.16
/** The shadow is Macbeth scaled away from the flame onto the wall. */
const THROW = 1.5
const SHADOW = `translate(${FLAME[0]} ${FLAME[1]}) scale(${THROW}) translate(${-FLAME[0]} ${-FLAME[1]}) translate(${MAC_AT[0]} ${MAC_AT[1]}) scale(${MAC_SCALE})`

/** The door to the inner rooms: a round-headed arch. */
const DOOR = 'M74 252V130A52 52 0 0 1 178 130V252Z'
const DOOR_FRAME = 'M62 252V130A64 64 0 0 1 190 130V252Z'

/**
 * The pool of candlelight on the wall, where the block is cleared to paper:
 * round the flame and across the stone behind Macbeth, where his shadow
 * falls. An ellipse with a hand-cut wobble to its edge.
 */
const POOL = { cx: 470, cy: 128, rx: 212, ry: 112 }
const inPool = (x: number, y: number, k = 1) =>
  ((x - POOL.cx) / (POOL.rx * k)) ** 2 + ((y - POOL.cy) / (POOL.ry * k)) ** 2 < 1

type Marks = {
  wall: { cuts: string; joints: string; edges: string }
  floor: string
  pool: string
  poolEdge: string
  glow: string
  passage: string
  shadows: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // One candle, but the wall it faces takes its light: bright round the
  // flame and across the stone behind Macbeth, where his shadow falls, and
  // dark only in the far corners.
  const light = (x: number, y: number) =>
    Math.max(clamp(1.3 - Math.hypot((x - POOL.cx) * 0.62, (y - POOL.cy) * 1.1) / 190), 0.05)
  const wall = stoneWall(rng(2201), { x0: 0, x1: W, y0: 0, y1: FLOOR }, light, 26, (x, y) =>
    inPool(x, y, 0.96),
  )
  const floor = flagFloor(rng(2202), W, H, FLOOR, [FLAME[0], 60])

  // The cleared pool, and the gouge marks where its edge was cut outwards.
  const r = rng(2205)
  let pool = ''
  let poolEdge = ''
  for (let a = 0; a < 360; a += 4) {
    const t = (a * Math.PI) / 180
    const k = 1 + 0.035 * Math.sin(t * 5 + 1) + 0.025 * Math.sin(t * 11)
    const x = POOL.cx + Math.cos(t) * POOL.rx * k
    const y = POOL.cy + Math.sin(t) * POOL.ry * k
    pool += `${a ? 'L' : 'M'}${n(x)} ${n(y)}`
    const out = between(r, 10, 30)
    const len = Math.hypot(Math.cos(t) * POOL.rx, Math.sin(t) * POOL.ry)
    poolEdge += gouge(
      x - (Math.cos(t) * POOL.rx * 6) / len,
      y - (Math.sin(t) * POOL.ry * 6) / len,
      x + (Math.cos(t) * POOL.rx * out) / len,
      y + (Math.sin(t) * POOL.ry * out) / len,
      between(r, 1.4, 2.8),
    )
  }
  pool += 'Z'
  // Light from the flame, engraved as fine ink lines across the cleared stone.
  const glow = rays(rng(2203), FLAME[0], FLAME[1], { from: 16, to: 70, every: 7.5, width: 1.1 })
  // the passage beyond the door: pale, with its floor and far wall cut in ink
  const passage =
    gougeField(rng(2204), { x0: 74, x1: 178, y0: 76, y1: 150 }, (x, y) => clamp((y - 76) / 90), {
      spacing: 6,
      len: [20, 70],
    }) +
    gouge(74, 214, 178, 214, 1.2) +
    gouge(74, 232, 178, 233, 1.8)
  const shadows = footShadow(MAC_AT[0], MAC_AT[1] + 2, 44) + footShadow(FLAME[0], 306, 24)
  cached = { wall, floor, pool, poolEdge, glow, passage, shadows }
  return cached
}

/**
 * Seyton, facing right, in his own frame (feet on y = 0, about 150 tall): an
 * officer of the household in a belted tunic and a short cloak, his head
 * bowed and his hands clasped before him. Not described in the play.
 */
const SEY = {
  cloak: 'M-4 -118C-14 -117 -20 -110 -21 -98C-22 -80 -22 -64 -20 -52L-2 -56Z',
  body: 'M-6 -118C-13 -117 -16 -110 -16 -100C-16 -86 -14 -74 -15 -48L15 -48C13 -70 12 -88 12 -100C12 -110 6 -118 -6 -118Z',
  head: 'M-8 -128C-9 -135 -4 -140 2 -139.6C7.4 -139 10 -136 10.4 -132L10.8 -129.4L13.8 -125.8L11 -124.8L11.4 -122.6L10.4 -122L10.8 -120.2C10 -117.4 7 -116 4 -116.2L2 -113C-3 -114 -6 -119 -8 -128Z',
  bootFront: 'M3 -9L11 -9L12 0L-1 0C-1 -3 1 -5 3 -6Z',
  bootBack: 'M-10 -9L-2 -9L-1 0L-14 0C-14 -3 -12 -5 -10 -6Z',
  hands: 'M6 -84C9 -86 13 -85 14 -82C14 -79 11 -77 8 -78C6 -79 5 -82 6 -84Z',
}
const SEY_LEGS = ['M-6 -50L-6 -8', 'M6 -50L7 -8']
const SEY_ARM = 'M6 -112C12 -104 14 -94 12 -84'
const SEY_TURN = 'rotate(12 0 -116)'

function Seyton({ at, scale }: { at: [number, number]; scale: number }) {
  return (
    <g transform={`translate(${at[0]} ${at[1]}) scale(${scale})`}>
      <g fill={INK} stroke={INK} strokeWidth={3} strokeLinejoin="round">
        {[SEY.cloak, SEY.body, SEY.bootFront, SEY.bootBack].map((d) => (
          <path key={d} d={d} />
        ))}
        <path d={SEY.head} transform={SEY_TURN} />
      </g>
      <g fill="none" stroke={INK} strokeWidth={8} strokeLinecap="round">
        {SEY_LEGS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      {/* a paper line for the belt, the edge of the arm, the fold of the cloak */}
      <path d="M-15.4 -80C-6 -78 4 -78 12.6 -80" stroke={PAPER} strokeWidth={1.4} fill="none" />
      <path d={SEY_ARM} fill="none" stroke={PAPER} strokeWidth={9.6} strokeLinecap="round" />
      <path d={SEY_ARM} fill="none" stroke={INK} strokeWidth={7} strokeLinecap="round" />
      <path d={SEY.hands} fill={INK} stroke={PAPER} strokeWidth={1} />
      <path d={gouge(-8, -108, -12, -62, 0.8, 0.8) + gouge(2, -100, 4, -56, 0.7)} fill={PAPER} />
      <g transform={SEY_TURN}>
        <path d={gouge(3.4, -131.4, 9.4, -131, 0.7)} fill={PAPER} />
        <path d={gouge(4.6, -128, 8.2, -127.2, 0.55, 0.2)} fill={PAPER} />
        <path d={gouge(-6, -134, -2, -122, 0.5, -0.4)} fill={PAPER} />
      </g>
    </g>
  )
}

function Tomorrow({ uid }: ArtProps) {
  const m = marks()
  const id = { wall: `${uid}-wall`, door: `${uid}-door` }
  const [fx, fy] = FLAME
  return (
    <>
      <defs>
        <MailPattern uid={uid} />
        <clipPath id={id.wall}>
          <rect x={0} y={0} width={W} height={FLOOR} />
        </clipPath>
        <clipPath id={id.door}>
          <path d={DOOR} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [480, 120], push: 1.03 })}>
        {/* the stone of Dunsinane, lit by one candle */}
        <path d={m.wall.cuts} fill={PAPER} />
        <path d={m.poolEdge} fill={PAPER} />
        <path d={m.pool} fill={PAPER} />
        <path d={m.wall.joints} fill={INK} />
        <path d={m.wall.edges} fill={PAPER} />
        <path d={m.glow} fill={INK} />

        {/* "a walking shadow": his, thrown up the wall by the candle */}
        <g
          className="lc-fade-in"
          style={timing({ delay: 0.5, dur: 1.6 })}
          clipPath={`url(#${id.wall})`}
        >
          <g transform={SHADOW}>
            <MacbethSilhouette pose="reach" arm={false} />
          </g>
        </g>

        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.shadows} fill={INK} />

        {/* the door to the inner rooms, and Seyton in it with the news */}
        <path d={DOOR_FRAME} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <path d={DOOR} fill={PAPER} stroke={INK} strokeWidth={2.4} />
        <g clipPath={`url(#${id.door})`}>
          <path d={m.passage} fill={INK} />
        </g>
        <Seyton at={SEYTON_AT} scale={SEYTON_SCALE} />

        {/* the candle, burnt down to a stub, on its iron pricket */}
        <path
          d={`M${fx} ${fy + 30}V${fy + 178}M${fx - 16} ${fy + 184}L${fx} ${fy + 172}L${fx + 16} ${fy + 184}`}
          stroke={PAPER}
          strokeWidth={6.4}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d={`M${fx} ${fy + 30}V${fy + 178}M${fx - 16} ${fy + 184}L${fx} ${fy + 172}L${fx + 16} ${fy + 184}`}
          stroke={INK}
          strokeWidth={3.6}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <ellipse cx={fx} cy={fy + 96} rx={5} ry={3} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <path
          d={`M${fx - 15} ${fy + 28}H${fx + 15}L${fx + 10} ${fy + 34}H${fx - 10}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <rect
          x={fx - 5.5}
          y={fy + 12}
          width={11}
          height={16}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path
          d={`M${fx - 5.5} ${fy + 14}C${fx - 8} ${fy + 18} ${fx - 7} ${fy + 22} ${fx - 8.5} ${fy + 27}M${fx + 5.5} ${fy + 16}C${fx + 8} ${fy + 20} ${fx + 7.5} ${fy + 24} ${fx + 8.5} ${fy + 28}`}
          stroke={PAPER}
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
        />
        <path d={`M${fx} ${fy + 12}V${fy + 7}`} stroke={INK} strokeWidth={1.2} />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.85, delay: 0.1 })}
          d={`M${fx} ${fy + 9}C${fx - 7} ${fy + 4} ${fx - 5} ${fy - 6} ${fx} ${fy - 16}C${fx + 5} ${fy - 6} ${fx + 7} ${fy + 4} ${fx} ${fy + 9}Z`}
          fill={RED}
        />

        <Macbeth uid={uid} at={MAC_AT} scale={MAC_SCALE} pose="reach" />
      </g>
    </>
  )
}

export const tomorrow: LinocutArt = { width: W, height: H, Draw: Tomorrow }
