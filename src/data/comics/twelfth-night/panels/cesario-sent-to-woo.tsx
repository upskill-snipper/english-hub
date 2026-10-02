import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  rng,
  wedge,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person } from './people'

/**
 * Act 1, Scene 4: "Cesario sent to woo", the fourth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "A Room in the Duke's Palace." "Enter Valentine and Viola in man's
 *   attire." So Viola is Cesario, the kit's 'cesario': her own face, the
 *   page's cap with its feather, the doublet and short cloak; a young woman
 *   dressed as a young man, drawn plainly and never as a joke.
 * - "Stand you awhile aloof.—Cesario, / Thou know'st no less but all; I have
 *   unclasp'd / To thee the book even of my secret soul." So the attendants,
 *   Valentine in his bonnet and Curio, stand back by the door, smaller with
 *   distance, while Orsino, in front of the bright window, holds out one
 *   open hand to Cesario and lays the other on his own heart: his love for
 *   Olivia, which he is sending her to plead ("address thy gait unto her").
 *   The door the attendants wait by is the way she must go. (He first laid
 *   his hand on her shoulder; at panel size it sat at her collar and could be
 *   read as a hand at her throat, so he does not touch her.)
 * - "Diana's lip / Is not more smooth and rubious; thy small pipe / Is as the
 *   maiden's organ ... And all is semblative a woman's part." Orsino sees and
 *   does not see: Cesario stands a head shorter than he does, beardless and
 *   slight.
 * - "I'll do my best / To woo your lady. [Aside.] Yet, a barful strife! /
 *   Whoe'er I woo, myself would be his wife." So Cesario looks up at him with
 *   her hand on her own heart, and the spot colour is the flush on her cheek:
 *   the love she cannot say. Rubious is the play's word for her lip; the red
 *   stays on the cheek, never the mouth, by the kit's rule.
 *
 * The play does not give the hour; the window is full of daylight. The people
 * are cut from ./people.tsx. Nothing is taken from a film, television or
 * stage production. Seeds: 1401 (the wall), 1402 (the floor), 1403 (the sky
 * in the window), 1404 (the window's stonework).
 */

const W = 860
const H = 340
/** The window behind Orsino: its middle, half-width, spring line and sill. */
const WX = 228
const WR = 78
const SPRING = 112
const SILL = 236
/** The foot of the back wall. */
const SKIRT = 264
/** The doorway on the right, where the attendants wait. */
const DOOR = { x0: 676, x1: 772, top: 96 }

type Marks = { wall: string; floor: string; sky: string; stones: string; roofs: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1 - Math.hypot((x - WX) * 0.75, y - 160) / 300) * 0.95,
      clamp(1 - Math.hypot(x - 724, (y - 180) * 0.8) / 140) * 0.6,
      0.06,
    )
  const wall = gougeField(rng(1401), { x0: 0, x1: W, y0: 6, y1: SKIRT - 2 }, light, {
    spacing: 6.4,
    len: [16, 64],
    gap: [6, 22],
    max: 3.4,
  })
  // The palace floor, flags of pale stone, as in the Duke's apartment in 1.1.
  const r = rng(1402)
  let floor = ''
  const V: Pt = [WX + 120, 120]
  for (let xt = -700; xt < W + 700; xt += 44) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (SKIRT - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.4, 0.9))
      floor += wedge(
        xt + (xb - xt) * t0,
        SKIRT + (H - SKIRT) * t0,
        xt + (xb - xt) * t1,
        SKIRT + (H - SKIRT) * t1,
        0.8 + t0 * 2.2,
        0.8 + t1 * 2.2,
      )
      t0 = t1 + between(r, 0.03, 0.08)
    }
  }
  for (const t of [0.14, 0.34, 0.62]) {
    const y = SKIRT + (H - SKIRT) * t
    let x = between(r, -30, 0)
    while (x < W) {
      const len = between(r, 60, 150)
      floor += gouge(
        x,
        y + between(r, -0.5, 0.5),
        x + len,
        y + between(r, -0.5, 0.5),
        0.8 + t * 1.6,
      )
      x += len + between(r, 2, 10)
    }
  }
  for (let y = SKIRT + 1; y < SKIRT + 12; y += 3)
    floor += gouge(0, y, W, y, 2.2 - (y - SKIRT) * 0.16)
  // Through the window, a pale sky over the roofs and towers of the town.
  const g = rng(1403)
  const sky = gougeField(
    g,
    { x0: WX - WR, x1: WX + WR, y0: 30, y1: 210 },
    (_x, y) => clamp(0.3 - y / 1000),
    { spacing: 9, len: [20, 70], gap: [20, 50], max: 1.6 },
  )
  const roofs = `M${WX - WR} ${SILL}V214L${WX - 60} 206L${WX - 46} 214V196L${WX - 40} 190L${WX - 34} 196V214L${WX - 14} 208L${WX + 4} 214V200H${WX + 22}V186L${WX + 28} 176L${WX + 34} 186V200H${WX + 40}V214L${WX + 60} 204L${WX + WR} 214V${SILL}Z`
  const s = rng(1404)
  let stones = ''
  for (let y = SILL - 22; y > SPRING; y -= between(s, 20, 28)) {
    stones += gouge(WX - WR - 14, y, WX - WR - 2, y, 0.8)
    stones += gouge(WX + WR + 2, y, WX + WR + 14, y, 0.8)
  }
  for (let a = 196; a < 345; a += 15) {
    const p = deg(a)
    stones += gouge(
      WX + Math.cos(p) * (WR + 1),
      SPRING + Math.sin(p) * (WR + 1),
      WX + Math.cos(p) * (WR + 13),
      SPRING + Math.sin(p) * (WR + 13),
      0.8,
    )
  }
  cached = { wall, floor, sky, stones, roofs }
  return cached
}

function CesarioSentToWoo({ uid }: ArtProps) {
  const m = marks()
  const win = `${uid}-win`
  const opening = `M${WX - WR} ${SILL}V${SPRING}A${WR} ${WR} 0 0 1 ${WX + WR} ${SPRING}V${SILL}Z`
  return (
    <>
      <defs>
        <clipPath id={win}>
          <path d={opening} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 200], push: 1.03 })}>
        {/* the room */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={SKIRT} width={W} height={H - SKIRT} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the window, and the town beyond it */}
        <path
          d={`M${WX - WR - 16} ${SILL + 10}V${SPRING}A${WR + 16} ${WR + 16} 0 0 1 ${WX + WR + 16} ${SPRING}V${SILL + 10}Z`}
          fill={PAPER}
        />
        <path d={m.stones} fill={INK} />
        <path d={opening} fill={PAPER} />
        <g clipPath={`url(#${win})`}>
          <path d={m.sky} fill={INK} />
          <path d={m.roofs} fill={INK} />
          <path
            d={gouge(WX - 30, 214, WX - 22, 214, 0.8) + gouge(WX + 48, 212, WX + 56, 212, 0.8)}
            fill={PAPER}
          />
        </g>
        <path d={`M${WX - 3.4} ${SPRING - WR + 4}V${SILL}h6.8V${SPRING - WR + 4}Z`} fill={INK} />
        <path d={`M${WX - WR - 18} ${SILL}h${WR * 2 + 36}v8h${-(WR * 2 + 36)}Z`} fill={PAPER} />
        <path d={`M${WX - WR - 18} ${SILL + 8}h${WR * 2 + 36}v2.4h${-(WR * 2 + 36)}Z`} fill={INK} />

        {/* the doorway out, lit from the gallery beyond */}
        <path d={`M${DOOR.x0} ${SKIRT}V${DOOR.top}H${DOOR.x1}V${SKIRT}Z`} fill={PAPER} />
        <path
          d={`M${DOOR.x0 - 10} ${SKIRT}V${DOOR.top - 10}H${DOOR.x1 + 10}V${SKIRT}H${DOOR.x1 + 4}V${DOOR.top - 4}H${DOOR.x0 - 4}V${SKIRT}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />

        {/* the attendants, standing aloof by the door */}
        <Person
          at={[700, 290]}
          scale={0.8}
          flip
          pose={{
            look: 'curio',
            head: { rot: 6 },
            far: {
              pts: [
                [-4, -132],
                [-2, -106],
                [10, -96],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -132],
                [6, -106],
                [14, -94],
              ],
              hand: 'mitt',
              deg: 160,
            },
          }}
        />
        <Person
          at={[750, 292]}
          scale={0.8}
          flip
          pose={{
            look: 'valentine',
            cloak: 2,
            head: { rot: 4 },
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
                [8, -104],
                [10, -80],
              ],
              hand: 'mitt',
            },
          }}
        />

        {/* Cesario, her hand on her heart, looking up at him */}
        <Person
          at={[438, 320]}
          scale={1.12}
          flip
          pose={{
            look: 'cesario',
            cloak: 2,
            head: { rot: -10 },
            flush: true,
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
                [16, -106],
                [8, -116],
              ],
              hand: 'open',
              deg: -100,
              size: 12.6,
              spread: 16,
            },
          }}
        />

        {/* Orsino, one hand held out to her and the other on his heart */}
        <Person
          at={[336, 318]}
          scale={1.12}
          pose={{
            look: 'orsino',
            head: { rot: 8 },
            far: {
              pts: [
                [-4, -132],
                [16, -110],
                [40, -106],
              ],
              hand: 'open',
              deg: -12,
              thumb: -1,
              size: 14,
              spread: 18,
            },
            near: {
              pts: [
                [4, -132],
                [18, -104],
                [10, -114],
              ],
              hand: 'open',
              deg: -104,
              size: 13.6,
              spread: 16,
            },
          }}
        />
      </g>
    </>
  )
}

export const cesarioSentToWoo: LinocutArt = { width: W, height: H, Draw: CesarioSentToWoo }
