import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  n,
  rays,
  ribbon,
  rng,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, stoneWall, type P } from './acts-3-4-kit'

/**
 * Friar Lawrence's cell, for the two panels set in it among moments 11 to 15:
 * "Banished" (Act 3, Scene 3, late at night, by lamplight) and "The Friar's
 * plan" (Act 4, Scene 1, by day). One room, so a student sees the same cell
 * twice: its window on the walls of Verona, the Friar's herbs drying from the
 * beam, his shelf of jars, his basket and his table.
 *
 * From the text (src/data/full-texts/romeo-and-juliet.ts):
 * - The Friar is a gatherer of herbs: "I must upfill this osier cage of ours
 *   / With baleful weeds and precious-juiced flowers" (2.3). So bundles of
 *   herbs hang drying from the beam, jars stand on his shelf, a mortar and
 *   pestle on his table, and his osier basket, full, on the floor.
 * - ROMEO: "There is no world without Verona walls" (3.3). So the one window
 *   looks out over roofs to the city wall and its tower, and past it to
 *   empty hills: the world Romeo is banished to.
 * - 3.3 is late: "it grows very late", "'tis late; farewell; good night". So
 *   the window shows the moon and stars over a moonlit wall, and the room is
 *   lit by one lamp, its flame the spot colour. 4.1 is by day (Juliet offers
 *   to come back "at evening mass"), so the sky is pale, the wall and roofs
 *   stand dark against it, and the lamp is out.
 *
 * Seeds: 3301 (wall), 3302 (floor), 3303 (herbs), 3304 (lamp rays).
 */

export const CELL = { W: 860, H: 340, FLOOR: 262 } as const
/** The window's opening: an arch on (360, 108), radius 48, down to the sill at 196. */
const WIN = { x0: 312, x1: 408, cx: 360, cy: 108, r: 48, sill: 196 }
const WIN_PATH = `M${WIN.x0} ${WIN.sill}V${WIN.cy}A${WIN.r} ${WIN.r} 0 0 1 ${WIN.x1} ${WIN.cy}V${WIN.sill}Z`
/** The lamp's flame on the table. */
export const LAMP: P = [665, 181]

type Time = 'night' | 'day'
type Marks = {
  wall: string
  joints: string
  floor: string
  herbs: string
  leaves: string
  lampRays: string
}

const cache: Partial<Record<Time, Marks>> = {}
function marks(time: Time): Marks {
  const hit = cache[time]
  if (hit) return hit
  const r = rng(3301)
  const light =
    time === 'night'
      ? (x: number, y: number) =>
          Math.max(
            clamp(1 - Math.hypot(x - LAMP[0], (y - LAMP[1]) * 1.15) / 330) ** 0.9,
            clamp(1 - Math.hypot(x - WIN.cx, y - 130) / 120) * 0.45,
            0.04,
          )
      : (x: number, y: number) =>
          Math.max(clamp(1 - Math.hypot(x - WIN.cx, (y - 130) * 1.1) / 460) ** 1.05, 0.1)
  const { cuts: wall, joints } = stoneWall(
    r,
    { x0: 0, x1: CELL.W, y0: 4, y1: CELL.FLOOR - 2 },
    light,
  )
  const floor = flagFloor(rng(3302), CELL.W, CELL.H, CELL.FLOOR, [430, 40])

  // Five bundles of herbs hung head down from the beam: the stems tied at
  // the top, the leaves falling in a fan below the tie.
  const h = rng(3303)
  let herbs = ''
  let leaves = ''
  for (const x of [46, 98, 150, 204, 256]) {
    herbs += `M${x} 34V45`
    herbs += gouge(x - 4, 46.5, x + 4, 46.5, 1.4)
    const k = 7
    for (let i = 0; i < k; i++) {
      const dx = (i - (k - 1) / 2) * between(h, 2.6, 3.6)
      const len = between(h, 30, 46)
      const pts: P[] = [
        [x + dx * 0.25, 48],
        [x + dx * 0.8, 48 + len * 0.45],
        [x + dx * 1.3 + between(h, -2, 2), 48 + len],
      ]
      leaves += ribbon(pts, between(h, 3, 4.4), 0.6)
      // small leaves off the stem
      for (let j = 1; j < 3; j++) {
        const t = j / 3
        const px = x + dx * (0.25 + t * 1.05)
        const py = 48 + len * t
        const s = dx >= 0 ? 1 : -1
        leaves += gouge(px, py, px + s * between(h, 4, 6), py + between(h, 3, 5), 1.2)
      }
    }
  }
  const lampRays = rays(rng(3304), LAMP[0], LAMP[1], { from: 16, to: 92, every: 6, width: 2.6 })
  const out = { wall, joints, floor, herbs, leaves, lampRays }
  cache[time] = out
  return out
}

/** The view from the window: roofs, the wall of Verona with its tower, and the hills beyond. */
function View({ time, r }: { time: Time; r: Rng }) {
  const night = time === 'night'
  const sky = night ? INK : PAPER
  const lit = night ? PAPER : INK // the wall: moonlit at night, dark against the day
  const dark = night ? INK : PAPER
  // merlons along the wall top and the tower top
  let merlons = ''
  for (let x = WIN.x0 - 4; x < WIN.x1 + 4; x += 14) merlons += `M${x} 166h8v-9h-8Z`
  for (let x = 314; x < 340; x += 9) merlons += `M${x} 128h5.5v-8h-5.5Z`
  let courses = ''
  for (let y = 172; y < 196; y += 6)
    courses += gouge(WIN.x0, y, WIN.x1, y + between(r, -0.5, 0.5), 0.55)
  for (let y = 134; y < 166; y += 6) courses += gouge(312, y, 342, y, 0.5)
  let stars = ''
  if (night)
    for (const [x, y, s] of [
      [324, 76, 1.2],
      [342, 92, 0.9],
      [334, 110, 1.1],
      [396, 116, 1],
      [370, 72, 0.9],
      [352, 64, 1.1],
      [388, 104, 0.8],
    ])
      stars += `M${x - s} ${y}a${s} ${s} 0 1 0 ${2 * s} 0a${s} ${s} 0 1 0 ${-2 * s} 0Z`
  let haze = ''
  if (!night)
    for (let y = 70; y < 150; y += 9) {
      let x = WIN.x0 + between(r, -10, 10)
      while (x < WIN.x1) {
        const len = between(r, 12, 30)
        if (r() < 0.45) haze += gouge(x, y, x + len, y + between(r, -0.4, 0.4), 0.45)
        x += len + between(r, 8, 20)
      }
    }
  return (
    <>
      <path d={WIN_PATH} fill={sky} />
      {night ? (
        <g fill={PAPER}>
          <path d={stars} />
          {/* a waning moon */}
          <path d="M386 70A11 11 0 0 0 386 92A14 14 0 0 1 386 70Z" />
        </g>
      ) : (
        <path d={haze} fill={INK} />
      )}
      {/* far hills, past the wall */}
      <path
        d="M312 164C326 152 340 150 352 156C364 146 382 144 396 152C402 154 406 156 408 157V170H312Z"
        fill="none"
        stroke={lit}
        strokeWidth={LINE.fine}
      />
      {/* the wall and its tower */}
      <path d={`M${WIN.x0} 166H${WIN.x1}V196H${WIN.x0}Z`} fill={lit} />
      <path d="M312 166V128H342V166Z" fill={lit} />
      <path d={merlons} fill={lit} />
      <path d={courses} fill={dark} />
      <path d="M325 140h4v10h-4Z" fill={dark} />
      {/* roofs of the city this side of the wall */}
      <path
        d="M312 196V184L326 176L340 184V178L356 172L372 180V186L384 180L398 186L408 182V196Z"
        fill={dark}
        stroke={lit}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      {!night && (
        <path
          d={
            gouge(318, 186, 334, 186, 0.5) +
            gouge(344, 182, 368, 182, 0.5) +
            gouge(376, 188, 400, 188, 0.5)
          }
          fill={INK}
        />
      )}
    </>
  )
}

/**
 * The cell, empty of people: wall, window, beam and herbs, shelf and jars,
 * table, basket and floor. `time` lights it.
 */
export function Cell({ uid, time }: { uid: string; time: Time }) {
  const m = marks(time)
  const night = time === 'night'
  const clip = `${uid}-cellwin`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={WIN_PATH} />
        </clipPath>
      </defs>
      <path d={m.wall} fill={PAPER} />
      <path d={m.joints} fill={PAPER} />
      {night && <path d={m.lampRays} fill={PAPER} />}

      {/* the window, in its deep stone reveal */}
      <path d="M296 204V106A64 64 0 0 1 424 106V204Z" fill={PAPER} />
      <path d="M303 200V107A57 57 0 0 1 417 107V200Z" fill={INK} />
      <g clipPath={`url(#${clip})`}>
        <View time={time} r={rng(3305)} />
      </g>
      <path d="M360 60V196" stroke={INK} strokeWidth={3} />
      <rect x={290} y={196} width={140} height={8} fill={PAPER} />
      <rect x={290} y={204} width={140} height={2} fill={INK} />

      {/* the beam, and the herbs drying from it */}
      <rect x={10} y={26} width={284} height={9} fill={PAPER} />
      <path d={gouge(18, 30.5, 280, 30.5, 0.9)} fill={INK} />
      <path d={m.herbs} stroke={PAPER} strokeWidth={1.2} fill={PAPER} />
      <path d={m.leaves} fill={PAPER} />

      {/* the shelf of jars */}
      <rect x={24} y={150} width={230} height={6} fill={PAPER} />
      <path
        d="M40 156L40 170L52 156M232 156L232 170L220 156"
        stroke={PAPER}
        strokeWidth={2.4}
        fill="none"
      />
      <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
        <path d="M40 150C36 140 38 128 46 124V118H58V124C66 128 68 140 64 150Z" />
        <path d="M84 150V122C84 118 88 116 92 116H100C104 116 108 118 108 122V150Z" />
        <path d="M128 150C120 144 120 132 128 128C126 124 128 120 134 120H144C150 120 152 124 150 128C158 132 158 144 150 150Z" />
        <path d="M176 150V134C176 130 180 128 186 128H192C198 128 202 130 202 134V150Z" />
        <path d="M222 150C216 144 216 136 222 132V124H236V132C242 136 242 144 236 150Z" />
      </g>
      <path
        d={
          gouge(43, 134, 45, 146, 0.8) +
          gouge(89, 124, 89, 146, 0.8) +
          gouge(130, 134, 131, 146, 0.8) +
          gouge(181, 136, 181, 147, 0.8) +
          gouge(225, 138, 226, 147, 0.8)
        }
        fill={PAPER}
      />

      {/* the floor */}
      <rect x={0} y={CELL.FLOOR} width={CELL.W} height={CELL.H - CELL.FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />

      {/* the osier basket, full of what he has gathered */}
      <path d="M44 250C50 234 94 234 100 250" stroke={PAPER} strokeWidth={7} fill="none" />
      <path d="M44 250C50 234 94 234 100 250" stroke={INK} strokeWidth={3.6} fill="none" />
      <path
        d={
          ribbon(
            [
              [52, 266],
              [46, 254],
              [38, 246],
            ],
            4.4,
          ) +
          ribbon(
            [
              [64, 264],
              [62, 250],
              [58, 240],
            ],
            4.4,
          ) +
          ribbon(
            [
              [80, 264],
              [84, 252],
              [90, 244],
            ],
            4.4,
          ) +
          ribbon(
            [
              [94, 266],
              [100, 256],
              [108, 250],
            ],
            4.4,
          )
        }
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.8}
      />
      <path
        d="M36 312C30 296 30 278 38 266H106C114 278 114 296 108 312Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d={
          gouge(40, 276, 104, 276, 0.9) +
          gouge(36, 288, 108, 288, 0.9) +
          gouge(38, 300, 106, 300, 0.9) +
          gouge(54, 268, 52, 310, 0.8) +
          gouge(72, 268, 72, 310, 0.8) +
          gouge(90, 268, 92, 310, 0.8)
        }
        fill={PAPER}
      />

      {/* the table: mortar and pestle, a jar, an open book, the lamp */}
      <path d="M600 222V302M770 222V302" stroke={INK} strokeWidth={8} />
      <path d="M600 276H770" stroke={INK} strokeWidth={5} />
      <rect
        x={588}
        y={212}
        width={194}
        height={12}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(592, 216, 778, 216, 0.9)} fill={PAPER} />
      <path
        d="M608 212C606 200 612 194 622 194C632 194 638 200 636 212Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d="M624 196L640 176" stroke={PAPER} strokeWidth={6} strokeLinecap="round" />
      <path d="M624 196L640 176" stroke={INK} strokeWidth={3.4} strokeLinecap="round" />
      <path
        d="M752 212V192C752 188 756 186 760 186H766C770 186 772 188 772 192V212Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path
        d="M688 212L700 204H722L728 208L734 204H756L766 212Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1}
      />
      <path d="M704 207H722M704 210H724M736 207H754M734 210H756" stroke={INK} strokeWidth={0.8} />
      {/* the lamp: a clay lamp with its wick at the spout */}
      <path
        d="M636 212C634 204 640 198 650 198H658L666 192L664 200C668 204 668 210 664 212Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      {night && (
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9 })}
          d={`M${LAMP[0]} 191C${LAMP[0] - 4} 186 ${LAMP[0] - 3} 180 ${LAMP[0] + 1} 170C${LAMP[0] + 5} 180 ${LAMP[0] + 6} 186 ${LAMP[0]} 191Z`}
          fill={RED}
        />
      )}
    </>
  )
}
