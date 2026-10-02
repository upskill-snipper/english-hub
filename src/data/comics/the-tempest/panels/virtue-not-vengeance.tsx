import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Ariel, Person, STAFF_HELD, type P } from './people'
import { Cell, LimeTree } from './the-cell'

/**
 * Act 5, Scene 1: "Virtue, not vengeance", the twelfth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "Enter Prospero in his magic robes, and Ariel." So Prospero wears the
 *   magic garment he laid down in 1.2, the kit's mantle (./people.tsx), its
 *   border cut in paper with its row of lozenges, over his gown; his staff is
 *   in his hand, held clear of his face as STAFF_HELD holds it. He does not
 *   frown: this is the moment he chooses "my nobler reason 'gainst my fury".
 * - "How's the day? / On the sixth hour; at which time, my lord, You said
 *   our work should cease." So it is evening: the sun is low over the sea,
 *   printed in red, the spot colour, with its light cut round it, and the sky
 *   is heavier with ink than in the afternoon panels.
 * - "all prisoners, sir, In the line grove which weather-fends your cell;
 *   They cannot budge till your release." The prisoners are in the grove,
 *   not on the stage, so they are not drawn: the grove is, two limes about
 *   the cell, behind Prospero.
 * - "if you now beheld them, your affections Would become tender." "Mine
 *   would, sir, were I human." Ariel, the kit's spirit in his own airy form,
 *   hangs in the air before his master and holds out both open hands to him,
 *   one high and one low.
 * - "And mine shall ... the rarer action is In virtue than in vengeance ...
 *   Go release them, Ariel." Prospero holds out his free hand, open, to Ariel.
 *
 * His book is not drawn: the scene names it only in the promise "I'll drown
 * my book", and that, like breaking the staff, is still to come.
 *
 * Seeds: 4201 (sky), 4202 (the sun), 4203 (sea), 4204 (ground).
 */

const W = 860
const H = 340
const GROUND = 330
const HORIZON = 192
const SUN: P = [716, 158]
const edge = (x: number) => 238 + 4 * Math.sin(x / 37 + 1)

type Marks = {
  sky: string
  sun: string
  sea: string
  land: string
  ground: string
  tufts: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // An evening sky, cut as the block cuts light: an ink ground with paper
  // cuts that widen towards the horizon and round the sun, so the top of the
  // sky is dark and the light lies low over the sea.
  const glow = (x: number, y: number) =>
    Math.max(0, 1 - Math.hypot((x - SUN[0]) * 0.8, y - SUN[1]) / 150)
  const sky = gougeField(
    rng(4201),
    { x0: 0, x1: W, y0: 2, y1: HORIZON + 2 },
    (x, y) => clamp(0.12 + (y / HORIZON) ** 1.6 * 0.8 + glow(x, y) * 0.7),
    { spacing: 7, len: [40, 150], gap: [6, 20], max: 4.2 },
  )
  const sun = rays(rng(4202), SUN[0], SUN[1], { from: 30, to: 88, every: 10, width: 2.2 })
  // The calm sea, with the sun's road on it left pale.
  const sea = gougeField(
    rng(4203),
    { x0: 0, x1: W, y0: HORIZON + 3, y1: 252 },
    (x, y) =>
      clamp(0.34 - ((y - HORIZON) / 60) * 0.1 - Math.max(0, 1 - Math.abs(x - SUN[0]) / 46) * 0.3),
    { spacing: 5, len: [30, 90], gap: [8, 26], max: 1.8 },
  )
  let land = `M-10 ${H + 10}L-10 ${n(edge(0))}`
  for (let x = 0; x <= W + 10; x += 8) land += `L${x} ${n(edge(x))}`
  land += `L${W + 10} ${H + 10}Z`
  const g = rng(4204)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: 244, y1: H },
    (x, y) => clamp(((y - 238) / 102) ** 1.5 * 0.55 + 0.08),
    { spacing: 6, len: [10, 46], gap: [14, 44], max: 2 },
  )
  let tufts = ''
  for (let i = 0; i < 80; i++) {
    const x = between(g, 0, W)
    const y = between(g, edge(x) + 6, H - 2)
    const h = 3 + clamp((y - 240) / 100) * 7
    tufts += `M${n(x - 2.4)} ${n(y)}l${n(-1.2)} ${n(-h)}M${n(x)} ${n(y)}l0 ${n(-h * 1.25)}M${n(x + 2.4)} ${n(y)}l${n(1.6)} ${n(-h)}`
  }
  cached = { sky, sun, sea, land, ground, tufts }
  return cached
}

const PROSPERO: P = [356, GROUND]
const ARIEL: P = [560, 286]

function VirtueNotVengeance({ uid }: ArtProps) {
  const m = marks()
  const seaClip = `${uid}-sea`
  return (
    <>
      <defs>
        <clipPath id={seaClip}>
          <rect x={0} y={HORIZON} width={W} height={70} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [460, 200], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={HORIZON} fill={INK} />
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={m.sky} fill={PAPER} />
        {/* "On the sixth hour": the evening sun, low over the sea */}
        <path
          className="lc-fade-in"
          style={timing({ delay: 0.3, dur: 1.4 })}
          d={m.sun}
          fill={INK}
        />
        <circle cx={SUN[0]} cy={SUN[1]} r={22} fill={RED} stroke={INK} strokeWidth={LINE.bold} />
        <g clipPath={`url(#${seaClip})`}>
          <path d={m.sea} fill={INK} />
        </g>
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.fine} />

        {/* the ground before the cell, and the grove of limes about it */}
        <path d={m.land} fill={PAPER} />
        <path d={m.land} fill="none" stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.ground} fill={INK} />
        <path d={m.tufts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <LimeTree at={[214, 290]} scale={0.66} which="small" />
        <LimeTree at={[30, 300]} scale={0.8} />
        <Cell at={[96, 300]} scale={0.8} />

        {/* Prospero in his magic robes, his free hand held out to Ariel */}
        <Person
          at={PROSPERO}
          scale={1.24}
          pose={{
            look: 'prospero',
            head: { rot: 2 },
            mantle: 6,
            far: {
              pts: [
                [-4, -130],
                [24, -120],
                [58, -116],
              ],
              hand: 'open',
              deg: -2,
              thumb: -1,
            },
            near: STAFF_HELD.near,
            staff: STAFF_HELD.staff,
          }}
        />

        {/* Ariel, before him in the air: "Mine would, sir, were I human." */}
        <g className="lc-rise" style={timing({ delay: 0.4, dur: 1.6 })}>
          <Ariel
            at={ARIEL}
            scale={1.08}
            flip
            pose={{
              form: 'air',
              head: { rot: 6 },
              trail: 1.1,
              far: {
                pts: [
                  [-3, -134],
                  [10, -112],
                  [26, -100],
                ],
                deg: 30,
                thumb: -1,
              },
              near: {
                pts: [
                  [4, -132],
                  [22, -122],
                  [42, -124],
                ],
                deg: -8,
                thumb: -1,
              },
            }}
          />
        </g>
      </g>
    </>
  )
}

export const virtueNotVengeance: LinocutArt = {
  width: W,
  height: H,
  Draw: VirtueNotVengeance,
}
