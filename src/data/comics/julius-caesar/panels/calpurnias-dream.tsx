import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Kneel } from './kneel'
import { Person } from './people'
import { CaesarImage } from './rome'

/**
 * Act 2, Scene 2: "Calpurnia's dream and Decius's flattery", the sixth moment
 * in the guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1522, src/data/full-texts/julius-caesar.ts), which
 * spells her Calphurnia:
 *
 * - "A room in Caesar's palace." "Thunder and lightning. Enter Caesar, in his
 *   nightgown"; "Nor heaven nor earth have been at peace tonight". It is the
 *   morning of the Ides ("Caesar, 'tis strucken eight"), after a night of
 *   storm. So the window shows the storm drawing off, a dark bank of cloud
 *   with its rain, and the low morning sun breaking through: the spot colour,
 *   the day of the Ides beginning.
 * - Caesar is "in his nightgown", and calls for his robe only once Decius has
 *   won ("Give me my robe, for I will go"). So he wears the kit's loose house
 *   robe with a mantle hanging from the shoulders (dress 'unbraced'), and his
 *   wreath, which is how the kit (./people.tsx) tells him in every panel.
 * - CALPHURNIA: "Let me upon my knee prevail in this"; CAESAR, to Decius:
 *   "Calphurnia here, my wife, stays me at home ... and on her knee Hath
 *   begg'd that I will stay at home today." So she kneels at his side
 *   (./kneel.tsx), both hands held up to him, and he has turned from her to
 *   Decius.
 * - "She dreamt tonight she saw my statue, Which like a fountain with an
 *   hundred spouts Did run pure blood"; DECIUS: "This dream is all amiss
 *   interpreted ... Your statue spouting blood in many pipes, In which so
 *   many smiling Romans bath'd, Signifies that from you great Rome shall suck
 *   Reviving blood". Through the window one of Caesar's images stands in the
 *   street (CaesarImage, ./rome.tsx; "Caesar's images", 1.1), and Decius,
 *   smiling, points to it as he turns the dream round: the flatterer who
 *   boasted "I can o'ersway him" (2.1). Caesar holds an open hand out to him:
 *   "And this way have you well expounded it."
 *
 * SAFEGUARDING. The dream's blood is left to the words. The statue is plain
 * stone with no red on it or by it: the sun is in the other light of the
 * window, because the kit puts no red on Caesar's figure, in stone or in life,
 * for exactly this dream (see CaesarImage). The augurers' sacrifice,
 * "Plucking the entrails of an offering forth", happens offstage and is not
 * drawn.
 *
 * WHY THE STATUE IS ON DECIUS'S SIDE (2 October 2026). It first stood in the
 * left light of the window and the sun in the right, and Decius's finger ran
 * past the statue to the sun.
 *
 * Seeds: 7201 (wall and floor), 7202 (sky), 7203 (rain), 7204 (the sun's rays).
 */

const W = 860
const H = 340
const WALL = 252
const WIN = { x0: 392, x1: 576, top: 34, sill: 190 }
const SUN: [number, number] = [440, 132]

type Marks = {
  wall: string
  floor: string
  sky: string
  clouds: string
  rain: string
  sunRays: string
  roofs: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(7201)
  // The room is lit by the morning at the window.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 484) * 0.6, (y - 112) * 1.1) / 380) * 0.9, 0.07)
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: WALL }, light, {
    spacing: 6.6,
    len: [16, 60],
    gap: [6, 22],
  })
  let floor = ''
  const V: [number, number] = [484, 60]
  for (let xt = -900; xt < 1800; xt += 50) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (WALL - V[1]))
    floor += wedge(xt, WALL, xb, H, 0.9, 2.8)
  }
  for (const [y, w] of [
    [262, 1],
    [280, 1.5],
    [304, 2],
    [330, 2.6],
  ] as const)
    floor += gouge(-10, y + between(r, -1, 1), W + 10, y + between(r, -1, 1), w)
  // The sky through the window: clearing towards the sun, low on the right.
  const sky = gougeField(
    rng(7202),
    { x0: WIN.x0, x1: WIN.x1, y0: WIN.top, y1: WIN.sill },
    (x, y) =>
      clamp(
        0.15 + (y - WIN.top) / 400 + Math.max(0, 1 - Math.hypot(x - SUN[0], y - SUN[1]) / 90) * 0.5,
      ),
    { spacing: 5.6, len: [18, 60], gap: [8, 24], max: 1.6 },
  )
  // The last of the night's storm: a dark bank of cloud across the top, and
  // its rain slanting from it.
  let clouds = `M${WIN.x0} ${WIN.top}H${WIN.x1}V${WIN.top + 26}`
  for (let x = WIN.x1, k = 0; x > WIN.x0; x -= 18, k++)
    clouds += `A10 ${k % 2 ? 9 : 7} 0 0 1 ${n(Math.max(WIN.x0, x - 18))} ${WIN.top + 26 + (k % 3) * 3}`
  clouds += 'Z'
  let rain = ''
  const rr = rng(7203)
  for (let i = 0; i < 26; i++) {
    const x = between(rr, WIN.x0 + 100, WIN.x1 - 4)
    const y = between(rr, WIN.top + 36, WIN.sill - 30)
    rain += gouge(x, y, x - 4, y + between(rr, 10, 18), 0.5)
  }
  const sunRays = rays(rng(7204), SUN[0], SUN[1], { from: 18, to: 40, every: 12, width: 1.6 })
  // The roofs of the street beyond, below the sill.
  const roofs = `M${WIN.x0} 184L${WIN.x0 + 30} 172L${WIN.x0 + 60} 184M${WIN.x0 + 112} 186L${WIN.x0 + 140} 176L${WIN.x1} 186`
  cached = { wall, floor, sky, clouds, rain, sunRays, roofs }
  return cached
}

function CalpurniasDream({ uid }: ArtProps) {
  const m = marks()
  const winClip = `${uid}-win`
  return (
    <>
      <defs>
        <clipPath id={winClip}>
          <rect x={WIN.x0} y={WIN.top} width={WIN.x1 - WIN.x0} height={WIN.sill - WIN.top} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 200], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={WALL} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        {/* the window on the morning of the Ides */}
        <rect
          x={WIN.x0 - 10}
          y={WIN.top - 10}
          width={WIN.x1 - WIN.x0 + 20}
          height={WIN.sill - WIN.top + 18}
          fill={INK}
        />
        <g clipPath={`url(#${winClip})`}>
          <rect
            x={WIN.x0}
            y={WIN.top}
            width={WIN.x1 - WIN.x0}
            height={WIN.sill - WIN.top}
            fill={PAPER}
          />
          <path d={m.sky} fill={INK} />
          <path d={m.sunRays} fill={INK} />
          <circle cx={SUN[0]} cy={SUN[1]} r={14} fill={RED} stroke={INK} strokeWidth={LINE.bold} />
          <path d={m.clouds} fill={INK} />
          <path d={m.rain} fill={INK} />
          <path d={m.roofs} fill="none" stroke={INK} strokeWidth={LINE.fine} />
          {/* one of Caesar's images, in the street below: the statue of her dream */}
          <CaesarImage at={[530, 158]} scale={0.46} plinth={70} flip />
        </g>
        <rect x={WIN.x0 - 14} y={WIN.sill} width={WIN.x1 - WIN.x0 + 28} height={8} fill={PAPER} />
        <path
          d={`M${WIN.x0 + (WIN.x1 - WIN.x0) / 2} ${WIN.top}V${WIN.sill}`}
          stroke={INK}
          strokeWidth={5}
        />
        {/* the doorway he came in by */}
        <path
          d="M742 252V128Q742 92 782 92Q822 92 822 128V252Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        {/* the floor */}
        <rect x={0} y={WALL} width={W} height={H - WALL} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* Calphurnia, on her knee, reaching up to him */}
        <Kneel
          uid={uid}
          id="calphurnia"
          kind="both"
          at={[236, 334]}
          scale={1.2}
          lean={8}
          pose={{
            look: 'calpurnia',
            head: { rot: -16 },
            far: {
              pts: [
                [-3, -124],
                [14, -114],
                [30, -126],
              ],
              hand: 'open',
              deg: -40,
            },
            near: {
              pts: [
                [3, -124],
                [20, -118],
                [38, -128],
              ],
              hand: 'open',
              deg: -26,
            },
          }}
        />
        {/* Caesar, in his nightgown, turned from her to Decius */}
        <Person
          at={[336, 334]}
          scale={1.12}
          pose={{
            look: 'caesar',
            dress: 'unbraced',
            head: { rot: -4 },
            far: {
              pts: [
                [-4, -130],
                [4, -110],
                [12, -118],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [5, -128],
                [18, -108],
                [36, -104],
              ],
              hand: 'open',
              deg: -14,
            },
          }}
        />
        {/* Decius, a hand on his heart, opening the other to the statue */}
        <g transform="rotate(-5 650 334)">
          <Person
            at={[650, 334]}
            scale={1.1}
            flip
            pose={{
              look: 'decius',
              mouth: 'grin',
              head: { rot: 8 },
              far: {
                pts: [
                  [-4, -130],
                  [4, -110],
                  [12, -118],
                ],
                hand: 'mitt',
              },
              near: {
                pts: [
                  [5, -128],
                  [20, -136],
                  [36, -150],
                ],
                hand: 'point',
                deg: -34,
              },
              hem: { front: 26, back: 30 },
            }}
          />
        </g>
      </g>
    </>
  )
}

export const calpurniasDream: LinocutArt = {
  width: W,
  height: H,
  Draw: CalpurniasDream,
}
