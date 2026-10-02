import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person } from './people'

/**
 * Act 1, Scene 5: "Olivia unveiled", the fifth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "A Room in Olivia's House." Olivia is in mourning for her brother and
 *   veiled: "Give me my veil; come, throw it o'er my face. / We'll once more
 *   hear Orsino's embassy." So she is in black, with the black veil the kit
 *   gives her.
 * - The moment is the unveiling, when the two of them are alone: "Give us the
 *   place alone" (Maria goes out), then "Good madam, let me see your face."
 *   "we will draw the curtain and show you the picture. [Unveiling.] Look
 *   you, sir, such a one I was this present. Is't not well done?" So Olivia,
 *   on the right, lifts the veil back over her head with one hand and holds
 *   out the other, open, showing herself; Feste, Malvolio and Maria have gone
 *   out and are not drawn, and the door Maria went out by is shut.
 * - "'Tis beauty truly blent, whose red and white / Nature's own sweet and
 *   cunning hand laid on." Her face is the kit's one face cut in paper, the
 *   brightest thing in the room against the dark wall, and the spot colour is
 *   the red on her cheek, never on her lips. It is also the flush of what
 *   happens to her in this scene: "Even so quickly may one catch the plague?"
 * - Cesario, on the left, stands against the window, her face turned up to
 *   Olivia's and one hand held out to it in wonder. Olivia's joke makes her
 *   veil a curtain over a picture, and the window's curtain behind Cesario is
 *   drawn back too.
 *
 * The play does not give the hour; the window is full of daylight. The people
 * are cut from ./people.tsx, and the room is lit as Olivia's house is in
 * "Revels at Olivia's house" (./revels-at-olivias-house.tsx): dark panelling
 * and a floor of boards. Nothing is taken from a film, television or stage
 * production. Seeds: 1501 (the wall), 1502 (the floorboards), 1503 (the
 * panelling).
 */

const W = 860
const H = 340
/** The foot of the back wall. */
const SKIRT = 262
/** The window behind Cesario. */
const WIN = { x0: 96, x1: 258, top: 34, sill: 226 }

type Marks = { wall: string; wains: string; floor: string; glass: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is lit from the window on the left; the cuts in the wall follow
  // that light, and the wall behind Olivia's face is left dark.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 178) * 0.8, (y - 130) * 0.9) / 330) * 0.95, 0.05)
  const wall = gougeField(rng(1501), { x0: 0, x1: W, y0: 6, y1: 154 }, light, {
    spacing: 6.4,
    len: [16, 64],
    gap: [6, 22],
    max: 3.4,
  })
  const p = rng(1503)
  let wains = ''
  for (let x = 4; x < W; x += 9) {
    if (x > WIN.x0 - 12 && x < WIN.x1 + 12) continue
    const L = light(x, 214)
    wains += wedge(x + between(p, -0.6, 0.6), 166, x + between(p, -0.6, 0.6), 250, 0.4, 0.8 + L * 3)
  }
  const r = rng(1502)
  let floor = ''
  const V: Pt = [180, 40]
  for (let xt = -700; xt < W + 700; xt += 30) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (SKIRT - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        SKIRT + (H - SKIRT) * t0,
        xt + (xb - xt) * t1,
        SKIRT + (H - SKIRT) * t1,
        0.8 + t0 * 2.6,
        0.8 + t1 * 2.6,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }
  for (let y = SKIRT + 1; y < SKIRT + 14; y += 3)
    floor += gouge(0, y, W, y, 2.4 - (y - SKIRT) * 0.15)
  // The window's leading: a lattice of small panes in fine ink lines.
  let glass = ''
  for (let k = -12; k < 20; k++) {
    const x = WIN.x0 + k * 14
    glass += `M${n(x)} ${WIN.top}L${n(x + (WIN.sill - WIN.top) * 0.5)} ${WIN.sill}`
    glass += `M${n(x + (WIN.sill - WIN.top) * 0.5)} ${WIN.top}L${n(x)} ${WIN.sill}`
  }
  cached = { wall, wains, floor, glass }
  return cached
}

function OliviaUnveiled({ uid }: ArtProps) {
  const m = marks()
  const glass = `${uid}-glass`
  return (
    <>
      <defs>
        <clipPath id={glass}>
          <rect x={WIN.x0} y={WIN.top} width={WIN.x1 - WIN.x0} height={WIN.sill - WIN.top} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [440, 200], push: 1.03 })}>
        {/* the wall, the dado rail and the panelling */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={156} width={W} height={6} fill={PAPER} />
        <rect x={0} y={162} width={W} height={1.6} fill={INK} />
        <path d={m.wains} fill={PAPER} />
        <rect x={0} y={252} width={W} height={10} fill={PAPER} />
        <rect x={0} y={256} width={W} height={1.4} fill={INK} />
        <rect x={0} y={SKIRT} width={W} height={H - SKIRT} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the window, full of daylight, its leaded panes */}
        <rect
          x={WIN.x0 - 12}
          y={WIN.top - 12}
          width={WIN.x1 - WIN.x0 + 24}
          height={WIN.sill - WIN.top + 22}
          fill={PAPER}
        />
        <rect
          x={WIN.x0 - 4}
          y={WIN.top - 4}
          width={WIN.x1 - WIN.x0 + 8}
          height={WIN.sill - WIN.top + 8}
          fill={INK}
        />
        <rect
          x={WIN.x0}
          y={WIN.top}
          width={WIN.x1 - WIN.x0}
          height={WIN.sill - WIN.top}
          fill={PAPER}
        />
        <g clipPath={`url(#${glass})`}>
          <path d={m.glass} stroke={INK} strokeWidth={0.8} />
        </g>
        {/* two mullions, so three lights */}
        <path
          d={`M${WIN.x0 + 50} ${WIN.top}h5V${WIN.sill}h-5ZM${WIN.x0 + 107} ${WIN.top}h5V${WIN.sill}h-5Z`}
          fill={INK}
        />
        {/* the curtain, drawn back and tied to the right of the window */}
        <path
          d={`M${WIN.x0 - 18} ${WIN.top - 18}H${WIN.x1 + 40}V${WIN.top - 10}H${WIN.x0 - 18}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={`M${WIN.x1 - 14} ${WIN.top - 10}C${WIN.x1 - 4} 80 ${WIN.x1 + 2} 120 ${WIN.x1 + 6} 140C${WIN.x1 + 2} 170 ${WIN.x1 - 6} 220 ${WIN.x1 - 2} 258L${WIN.x1 + 36} 258C${WIN.x1 + 34} 220 ${WIN.x1 + 30} 170 ${WIN.x1 + 26} 140C${WIN.x1 + 34} 120 ${WIN.x1 + 40} 80 ${WIN.x1 + 40} ${WIN.top - 10}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d={
            gouge(WIN.x1 + 2, 60, WIN.x1 + 12, 134, 1.2, 0.6) +
            gouge(WIN.x1 + 20, 56, WIN.x1 + 18, 132, 1.1, -0.4) +
            gouge(WIN.x1 + 10, 152, WIN.x1 + 4, 250, 1.2, 0.6) +
            gouge(WIN.x1 + 24, 150, WIN.x1 + 26, 250, 1.1, -0.4)
          }
          fill={PAPER}
        />
        <path
          d={`M${WIN.x1 + 4} 137C${WIN.x1 + 12} 134 ${WIN.x1 + 22} 134 ${WIN.x1 + 30} 138`}
          fill="none"
          stroke={PAPER}
          strokeWidth={2.4}
          strokeLinecap="round"
        />

        {/* the door Maria has gone out by, shut behind her */}
        <path
          d="M716 262V96H800V262Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d="M706 262V86H810V262H802V94H714V262Z" fill={PAPER} />
        <path
          d={
            gouge(728, 110, 728, 170, 1.3) +
            gouge(788, 110, 788, 170, 1.3) +
            gouge(732, 106, 784, 106, 1.2) +
            gouge(732, 174, 784, 174, 1.2) +
            gouge(728, 190, 728, 248, 1.3) +
            gouge(788, 190, 788, 248, 1.3) +
            gouge(732, 186, 784, 186, 1.2) +
            gouge(732, 252, 784, 252, 1.2)
          }
          fill={PAPER}
        />
        <circle cx={730} cy={182} r={3} fill={PAPER} />

        {/* Cesario, against the window, a hand held out in wonder */}
        <Person
          at={[262, 320]}
          scale={1.12}
          pose={{
            look: 'cesario',
            cloak: 2,
            head: { rot: -6 },
            far: {
              pts: [
                [-4, -132],
                [-8, -104],
                [-4, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -132],
                [22, -116],
                [42, -122],
              ],
              hand: 'open',
              deg: -18,
              thumb: -1,
              spread: 20,
            },
          }}
        />

        {/* Olivia, drawing back her veil */}
        <Person
          at={[536, 322]}
          scale={1.15}
          flip
          pose={{
            look: 'olivia',
            flush: true,
            head: { rot: 2 },
            hem: { front: 30, back: 40 },
            far: {
              pts: [
                [-3, -127],
                [12, -110],
                [34, -112],
              ],
              hand: 'open',
              deg: 4,
              thumb: -1,
              size: 13,
              spread: 18,
            },
            near: {
              pts: [
                [3, -127],
                [-10, -146],
                [-10, -170],
              ],
              hand: 'open',
              deg: -60,
              size: 12.6,
              spread: 16,
            },
          }}
        />
      </g>
    </>
  )
}

export const oliviaUnveiled: LinocutArt = { width: W, height: H, Draw: OliviaUnveiled }
