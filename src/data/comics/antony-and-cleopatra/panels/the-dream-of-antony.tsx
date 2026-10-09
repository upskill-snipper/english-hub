import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  clamp,
  gouge,
  n,
  rays,
  ribbon,
  rng,
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { cut, skyLines } from './light-cuts'
import { ROOM_FLOOR, ROOM_WINDOW, RoomWindow, floorShadow, roomFloor, roomWall } from './monument'
import { Person, sizeOf, type P } from './people'

/**
 * Act 5, Scene 2: "The dream of Antony", the twenty-third moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. A Room in the Monument." It is still day: the bright day is
 *   not "done" (Iras) until after Caesar's visit, later in the scene. So the
 *   room of ./monument.tsx, its window full of daylight.
 * - DOLABELLA: "Most noble empress, you have heard of me?" Proculeius and the
 *   soldiers have gone, and Dolabella, "Proculeius, ... For the queen, I'll
 *   take her to my guard", is left with her: a Roman officer in the cuirass,
 *   bareheaded and beardless (the kit's Dolabella, ./people.tsx). He hears
 *   her out, and at the end: "I do feel, By the rebound of yours, a grief
 *   that smites My very heart at root." So he stands with his head bowed and
 *   his hand on his breast.
 * - CLEOPATRA: "I dreamt there was an Emperor Antony." So she stands by the
 *   window in her gown and mantle, her long hair loose, no crown (the play
 *   gives it to her only when she sends for it), her face lifted and her hand
 *   held out, open, to what she sees.
 * - What she sees is drawn as she tells it, cut in paper in a field of dark
 *   with a mist round its edge, the kit's `stone` figure for a vision (the
 *   same Antony, curls, beard and all, cut white): "His legs bestrid the
 *   ocean", so he strides across the sea, in armour and a general's cloak, an
 *   emperor, his hand on his hip; "His face was as the heavens, and therein
 *   stuck A sun and moon", so a sun and a crescent moon stand in the dark
 *   either side of his head.
 *
 * WHAT WAS TRIED AND LEFT OUT (9 October 2026). "His reared arm Crested the
 * world": a raised arm with "The little O, the earth" under its hand was cut
 * three ways, and each read wrong at panel size, as a lantern hung from his
 * hand, as a ball bounced or held up, and with the raised arm across his
 * face; a raised arm with an open hand also risks the salute this site never
 * shows (./people.tsx). So the arm is left to the words. "His delights Were
 * dolphin-like": the dolphins, cut showing their backs, read as sharks' fins,
 * and were taken out.
 *
 * RED is the sun of the dream, large, with its rays, in the dark behind his
 * head and clear of his face. Nothing is taken from a film or stage
 * production. Seeds: 2301 (the wall), 2302 (the floor), 2303 (the window's
 * sky), 2304 (the dream's field and mist), 2305 (the sea), 2306 (the sun).
 */

const W = 860
const H = 340
/** Where Cleopatra and Dolabella stand. */
const FOOT = 326

/** The dream: its field's bounds, the line of its sea, and the colossus in it. */
const DREAM = { x0: 404, x1: 848, y0: 14, y1: 304 }
const SEA = 266
/** The colossus: where his feet stand, his size, and so where his features fall. */
const COLOSSUS: { at: P; scale: number } = { at: [604, 300], scale: 1.4 }
const S = COLOSSUS.scale * sizeOf('antony')
/** A point in the colossus's own frame (facing right, feet at 0, 0), out in the panel; he faces left. */
const onColossus = (x: number, y: number): P => [COLOSSUS.at[0] - x * S, COLOSSUS.at[1] + y * S]
/** The sun and the moon in the dark either side of his head. */
const SUN: P = [694, 46]
const MOON: P = [498, 42]

/** The dream's field: a rounded field whose edge is a run of soft swellings, like the edge of a cloud. */
const FIELD = (() => {
  const { x0, x1, y0, y1 } = DREAM
  const pts: P[] = []
  const step = 24
  const edge = (a: P, b: P) => {
    const L = Math.hypot(b[0] - a[0], b[1] - a[1])
    const k = Math.max(1, Math.round(L / step))
    for (let i = 0; i < k; i++)
      pts.push([a[0] + ((b[0] - a[0]) * i) / k, a[1] + ((b[1] - a[1]) * i) / k])
  }
  edge([x0 + 30, y0], [x1 - 30, y0])
  edge([x1, y0 + 30], [x1, y1 - 30])
  edge([x1 - 30, y1], [x0 + 30, y1])
  edge([x0, y1 - 30], [x0, y0 + 30])
  // each step of the edge bulges outwards, so the field's rim is a run of
  // rounded swellings
  const cx = (x0 + x1) / 2
  const cy = (y0 + y1) / 2
  let d = `M${n(pts[0][0])} ${n(pts[0][1])}`
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i]
    const b = pts[(i + 1) % pts.length]
    const mx = (a[0] + b[0]) / 2
    const my = (a[1] + b[1]) / 2
    const ox = mx - cx
    const oy = my - cy
    const L = Math.hypot(ox, oy) || 1
    d += `Q${n(mx + (ox / L) * 10)} ${n(my + (oy / L) * 10)} ${n(b[0])} ${n(b[1])}`
  }
  return d + 'Z'
})()

type Marks = {
  wall: { cuts: string; joints: string; dim: string }
  floor: string
  shade: string
  winSky: string
  stars: string
  mist: string
  sea: string
  sunRays: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const { x0, x1, y0, y1 } = ROOM_WINDOW
  // The wall is lit from the window, brightest round it and dark beyond.
  const wall = roomWall(2301, (x, y) =>
    clamp(0.95 - Math.hypot((x - (x0 + x1) / 2) * 0.8, (y - (y0 + y1) / 2) * 0.55) / 210),
  )
  const floor = roomFloor(2302)
  const shade = floorShadow(108, FOOT + 2, 34) + floorShadow(234, FOOT + 2, 40)
  // Daylight in the window: the paper all but bare, a few long lines.
  const winSky = skyLines(2303, { x0, x1, y0, y1 }, () => 0.18)
  // The dream's field: a few stars, cut as small crosses, kept off the
  // colossus and away from his face.
  const r = rng(2304)
  let stars = ''
  for (let k = 0; k < 26; k++) {
    const x = between(r, DREAM.x0 + 20, DREAM.x1 - 20)
    const y = between(r, DREAM.y0 + 16, SEA - 30)
    if (Math.abs(x - COLOSSUS.at[0]) < 70 && y > 30) continue
    if (Math.hypot(x - SUN[0], y - SUN[1]) < 40 || Math.hypot(x - MOON[0], y - MOON[1]) < 30)
      continue
    const s = between(r, 1.6, 3)
    stars += gouge(x - s, y, x + s, y, 0.5) + gouge(x, y - s, x, y + s, 0.5)
  }
  // The mist round the dream's edge: soft paper wisps along its rim.
  let mist = ''
  const rim = (a: P, b: P, count: number) => {
    for (let k = 0; k < count; k++) {
      const t = (k + between(r, 0.1, 0.9)) / count
      const x = a[0] + (b[0] - a[0]) * t
      const y = a[1] + (b[1] - a[1]) * t
      const horizontal = Math.abs(b[0] - a[0]) > Math.abs(b[1] - a[1])
      const len = between(r, 40, 90)
      const pts = horizontal
        ? wave(
            x - len / 2,
            x + len / 2,
            y,
            between(r, 1, 2.6),
            between(r, 40, 70),
            between(r, 0, 6),
            12,
          )
        : wave(
            y - len / 2,
            y + len / 2,
            x,
            between(r, 1, 2.6),
            between(r, 40, 70),
            between(r, 0, 6),
            12,
          ).map(([yy, xx]) => [xx, yy] as P)
      mist += ribbon(pts, between(r, 2.4, 4.6), 0.8)
    }
  }
  rim([DREAM.x0 + 8, DREAM.y0 + 10], [DREAM.x1 - 8, DREAM.y0 + 10], 8)
  rim([DREAM.x0 + 9, DREAM.y0 + 30], [DREAM.x0 + 9, DREAM.y1 - 20], 6)
  rim([DREAM.x0 + 30, DREAM.y1 - 8], [DREAM.x1 - 30, DREAM.y1 - 8], 7)
  rim([DREAM.x1 - 9, DREAM.y0 + 30], [DREAM.x1 - 9, DREAM.y1 - 20], 6)
  // The ocean he bestrides, from its far edge to the foot of the dream: paper
  // crests on the dark, closer and heavier towards us.
  const s = rng(2305)
  let sea = cut(DREAM.x0, SEA, DREAM.x1 - DREAM.x0, 1.2)
  for (let y = SEA + 4; y < DREAM.y1 - 2; y += 3.4 + (y - SEA) * 0.07) {
    const t = (y - SEA) / (DREAM.y1 - SEA)
    let x = DREAM.x0 + between(s, -10, 10)
    while (x < DREAM.x1) {
      const len = between(s, 14, 36) * (1 + t * 0.8)
      if (s() < 0.78) sea += cut(x, y, len, 0.7 + t * 1.5, between(s, -0.5, 0.5), -0.5)
      x += len + between(s, 5, 16)
    }
  }
  const sunRays = rays(rng(2306), SUN[0], SUN[1], { from: 22, to: 46, every: 15, width: 2.4 })
  cached = { wall, floor, shade, winSky, stars, mist, sea, sunRays }
  return cached
}

/** Wave crests over the colossus's feet, where they meet the water. Fill with PAPER. */
const WASH = (xs: [number, number][]) =>
  xs
    .map(([x, y]) => cut(x - 26, y, 52, 2.2, 0, -0.8) + cut(x - 18, y + 6, 40, 1.8, 0, -0.6))
    .join('')

function TheDreamOfAntony({ uid }: ArtProps) {
  const m = marks()
  const dream = `${uid}-dream`
  return (
    <g className="lc-push" style={timing({ origin: [420, 180], push: 1.03 })}>
      <defs>
        <clipPath id={dream}>
          <path d={FIELD} />
        </clipPath>
      </defs>

      {/* the room: the back wall lit from the window, the floor of flags */}
      <rect x={0} y={0} width={W} height={ROOM_FLOOR} fill={INK} />
      <path d={m.wall.cuts} fill={PAPER} />
      <path d={m.wall.joints} fill="none" stroke={PAPER} strokeWidth={1.6} />
      <path d={m.wall.dim} fill="none" stroke={PAPER} strokeWidth={0.9} />
      <rect x={0} y={ROOM_FLOOR} width={W} height={H - ROOM_FLOOR} fill={PAPER} />
      <path d={m.floor} fill={INK} />
      <path d={m.shade} fill={INK} />
      <RoomWindow uid={uid}>
        <path d={m.winSky} fill={INK} />
      </RoomWindow>

      {/* the dream, in a field of dark with a mist round its edge */}
      <g className="lc-fade-in" style={timing({ delay: 0.5, dur: 1.4 })}>
        <path d={FIELD} fill={INK} stroke={PAPER} strokeWidth={2.4} strokeLinejoin="round" />
        <g clipPath={`url(#${dream})`}>
          <path d={m.stars} fill={PAPER} />
          <path d={m.sea} fill={PAPER} />
          {/* the sun and the moon either side of his head */}
          <path d={m.sunRays} fill={PAPER} />
          <circle cx={SUN[0]} cy={SUN[1]} r={17} fill={RED} stroke={INK} strokeWidth={1.4} />
          <path
            d={`${arc(MOON[0], MOON[1], 13, Math.PI * 0.42, Math.PI * 1.58)}A10 10 0 0 0 ${n(MOON[0] + 13 * Math.cos(Math.PI * 0.42))} ${n(MOON[1] + 13 * Math.sin(Math.PI * 0.42))}Z`}
            fill={PAPER}
          />
          {/* the colossus: Antony as she dreamt him, astride the ocean */}
          <Person
            pose={{
              look: 'antony',
              head: { rot: 4 },
              far: {
                pts: [
                  [-4, -130],
                  [-10, -104],
                  [-6, -80],
                ],
                hand: 'mitt',
              },
              near: {
                pts: [
                  [5, -128],
                  [25, -108],
                  [13, -88],
                ],
                hand: 'mitt',
              },
              legs: {
                far: [
                  [-3, -70],
                  [-20, -36],
                  [-38, -3],
                ],
                near: [
                  [3, -70],
                  [22, -36],
                  [40, -3],
                ],
              },
            }}
            at={COLOSSUS.at}
            scale={COLOSSUS.scale}
            flip
            stone
          />
          {/* the water over his feet */}
          <path d={WASH([onColossus(40, 2), onColossus(-38, 2)])} fill={PAPER} />
        </g>
        <path d={m.mist} fill={PAPER} />
      </g>

      {/* Dolabella, his head bowed and his hand on his breast */}
      <Person
        pose={{
          look: 'dolabella',
          head: { rot: 14 },
          eye: 'down',
          near: {
            pts: [
              [5, -128],
              [17, -98],
              [12, -112],
            ],
            hand: 'open',
            deg: -64,
            thumb: -1,
          },
        }}
        at={[108, FOOT]}
        scale={1.04}
      />

      {/* Cleopatra at the window, her hand held out to what she sees */}
      <Person
        pose={{
          look: 'cleopatra',
          head: { rot: -14 },
          near: {
            pts: [
              [5, -128],
              [22, -112],
              [42, -126],
            ],
            hand: 'open',
            deg: -30,
            thumb: -1,
          },
        }}
        at={[238, FOOT]}
        scale={1.06}
      />
    </g>
  )
}

export const theDreamOfAntony: LinocutArt = { width: W, height: H, Draw: TheDreamOfAntony }
