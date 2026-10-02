import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  GardenDoor,
  OrchardTree,
  Steeple,
  Topiary,
  WallCoping,
  brickWall,
  footShadow,
  hedgeBand,
  skyBars,
  walk,
} from './act-3-garden'
import { Person } from './people'

/**
 * Act 4, Scene 3: "A pearl and a priest", the sixteenth moment in the
 * guide's timeline. Olivia's garden, cut from the same pieces as the Act 3
 * panels (./act-3-garden.tsx): the brick wall and its coping, the box hedge
 * and clipped box balls at its foot, the orchard over it, the church tower
 * that stands by the house, and the gravel walk. Every detail is from the
 * scene in the held edition (src/data/full-texts/twelfth-night.ts, Project
 * Gutenberg #1526):
 *
 * - "Olivia's Garden. Enter Sebastian. This is the air; that is the glorious
 *   sun, This pearl she gave me, I do feel't and see't". So it is broad day:
 *   the sun is up over the wall, printed in the spot colour, its light cut in
 *   ink round it, and the pale sky is open; and Sebastian, on the left, looks
 *   down at the pearl on the open fingers of his hand. The pearl is cut in
 *   paper with a glint of paper rays, against the dark of a clipped box ball
 *   behind his hand, so it shows at panel size. He is the kit's Sebastian,
 *   his rapier at his side, as in 4.1.
 * - "I am ready to distrust mine eyes ... But here the lady comes. Enter
 *   Olivia and a Priest." So Olivia comes in from the right in her mourning
 *   black and veil, one hand held out to him, the other back towards the
 *   Priest behind her: "Now go with me and with this holy man Into the
 *   chantry by". The Priest (the kit's 'priest', added for these panels) is
 *   old, "toward my grave" (5.1), tonsured and clean-shaven in his cassock,
 *   and waits with his hands together.
 * - The chantry is "by", "underneath that consecrated roof": the church
 *   tower over the wall, between them, is where they will go, through the
 *   garden door below it (the door of 3.1, "Let the garden door be shut").
 *   Its bell hangs still: no clock strikes in this scene.
 *
 * Sebastian's open hand is drawn with its fingers apart, holding the pearl,
 * so it is never read as a fist. Seeds: 6801 (sky), 6802 (the sun's rays),
 * 6803 (wall), 6804 (walk), 6805 and 6806 (the hedge), 6807 to 6809 (the
 * orchard), 6810 and 6811 (the box balls).
 */

const W = 860
const H = 340
const FEET = 324
const WALL_TOP = 172
const WALL_BASE = 244
const SUN: [number, number] = [132, 100]
const SEBASTIAN_X = 236
const OLIVIA_X = 586
const PRIEST_X = 700
/** The pearl, in Sebastian's figure frame: on the fingers of his open hand. */
const PEARL: [number, number] = [41.5, -119]

type Marks = {
  sky: string
  sun: string
  wall: string
  walk: string
  hedge: string
  leaves: string
  shadows: string
}
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyBars(rng(6801), { x0: 0, x1: W, y0: 6, y1: WALL_TOP - 8 })
  const sun = rays(rng(6802), SUN[0], SUN[1], { from: 30, to: 70, every: 9, width: 2 })
  const wall = brickWall(rng(6803), { x0: 0, x1: W, y0: WALL_TOP + 2, y1: WALL_BASE }, (x) =>
    Math.max(0.15, 1 - Math.abs(x - 300) / 600),
  )
  const walkD = walk(rng(6804), { x0: 0, x1: W, y0: WALL_BASE + 12, y1: H })
  const left = hedgeBand(rng(6805), -4, 400, WALL_BASE - 20, WALL_BASE + 10)
  const right = hedgeBand(rng(6806), 470, W + 4, WALL_BASE - 20, WALL_BASE + 10)
  const shadows =
    footShadow(SEBASTIAN_X + 4, FEET, 26, -3) +
    footShadow(OLIVIA_X, FEET, 32, -3) +
    footShadow(PRIEST_X, FEET - 4, 28, -3)
  cached = {
    sky,
    sun,
    wall,
    walk: walkD,
    hedge: left.shape + right.shape,
    leaves: left.leaves + right.leaves,
    shadows,
  }
  return cached
}

/** A glint round the pearl: short paper rays, in the figure frame. */
function glint([x, y]: [number, number]) {
  let d = ''
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * Math.PI * 2 + 0.3
    const r0 = k % 2 ? 7 : 6.6
    const r1 = k % 2 ? 11.4 : 15
    d += gouge(
      x + Math.cos(a) * r0,
      y + Math.sin(a) * r0,
      x + Math.cos(a) * r1,
      y + Math.sin(a) * r1,
      0.75,
    )
  }
  return d
}
const GLINT = glint(PEARL)

function APearlAndAPriest({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [400, 220], push: 1.03 })}>
      {/* the open sky and the sun: "that is the glorious sun" */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <circle cx={SUN[0]} cy={SUN[1]} r={32} fill={PAPER} />
      <path d={m.sun} fill={INK} />
      <circle cx={SUN[0]} cy={SUN[1]} r={21} fill={RED} stroke={INK} strokeWidth={LINE.bold} />

      {/* the orchard over the wall, and the church tower, where the chantry is */}
      <OrchardTree r={rng(6807)} cx={340} cy={128} rx={30} ry={26} base={WALL_TOP} />
      <OrchardTree r={rng(6808)} cx={530} cy={122} rx={26} ry={23} base={WALL_TOP} />
      <OrchardTree r={rng(6809)} cx={788} cy={120} rx={38} ry={32} base={WALL_TOP} />
      <Steeple x={436} top={86} base={WALL_TOP} seed={6812} />

      {/* the wall, the box hedge at its foot, and the clipped box balls */}
      <rect x={0} y={WALL_TOP} width={W} height={WALL_BASE - WALL_TOP} fill={PAPER} />
      <path d={m.wall} fill={INK} />
      <WallCoping x0={0} x1={W} top={WALL_TOP} />
      <GardenDoor x={417} base={WALL_BASE + 4} w={36} h={56} />
      <path d={m.hedge} fill={INK} />
      <path d={m.leaves} fill={PAPER} />
      <Topiary r={rng(6810)} cx={290} cy={200} rad={25} base={WALL_BASE} />
      <Topiary r={rng(6811)} cx={736} cy={198} rad={26} base={WALL_BASE} />

      {/* the walk */}
      <path d={m.walk} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* the Priest, waiting behind her */}
      <Person
        at={[PRIEST_X, FEET - 4]}
        scale={1.06}
        flip
        pose={{
          look: 'priest',
          head: { rot: 7 },
          far: {
            pts: [
              [-4, -130],
              [2, -106],
              [12, -96],
            ],
          },
          near: {
            pts: [
              [4, -130],
              [9, -106],
              [15, -97],
            ],
          },
        }}
      />

      {/* Olivia: "Now go with me and with this holy man Into the chantry by" */}
      <Person
        at={[OLIVIA_X, FEET]}
        scale={1.12}
        flip
        pose={{
          look: 'olivia',
          body: { neck: [5, -132] },
          head: { rot: 3 },
          far: {
            pts: [
              [-3, -127],
              [-16, -110],
              [-32, -104],
            ],
            hand: 'open',
            deg: 170,
            thumb: 1,
          },
          near: {
            pts: [
              [6, -126],
              [22, -114],
              [42, -114],
            ],
            hand: 'open',
            deg: -8,
            thumb: -1,
          },
        }}
      />

      {/* Sebastian, the pearl on his open hand: "I do feel't and see't" */}
      <Person
        at={[SEBASTIAN_X, FEET]}
        scale={1.12}
        pose={{
          look: 'sebastian',
          head: { rot: 13 },
          sword: true,
          cloak: 3,
          far: {
            pts: [
              [-4, -129],
              [-10, -105],
              [-6, -82],
            ],
          },
          near: {
            pts: [
              [3, -129],
              [12, -107],
              [28, -114],
            ],
            hand: 'open',
            deg: -12,
            thumb: -1,
            size: 14,
          },
        }}
      >
        <g className="lc-fade-in" style={timing({ delay: 0.8, dur: 1 })}>
          <path d={GLINT} fill={PAPER} />
        </g>
        <circle
          cx={n(PEARL[0])}
          cy={n(PEARL[1])}
          r={5}
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.1}
        />
        <path
          d={gouge(PEARL[0] - 2, PEARL[1] - 1.6, PEARL[0] + 0.4, PEARL[1] - 2.4, 0.5)}
          fill={INK}
        />
      </Person>
    </g>
  )
}

export const aPearlAndAPriest: LinocutArt = { width: W, height: H, Draw: APearlAndAPriest }
