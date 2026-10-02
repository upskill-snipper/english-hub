import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  ribbon,
  rng,
  wave,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'
import { prayingHands } from '../../romeo-and-juliet/panels/acts-3-4-kit'

import { Ariel, BarkBottle, CutFigure, Person, type P } from './people'

/**
 * Act 3, Scene 2: "The plot against Prospero", the ninth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "Another part of the island." "'tis a custom with him I' th' afternoon
 *   to sleep": it is afternoon, and clear. The plot itself (what Caliban
 *   would have Stephano do to Prospero) is in the words, never in the
 *   picture: the moment drawn is the one the guide quotes.
 * - "Ariel plays the tune on a tabor and pipe." "This is the tune of our
 *   catch, played by the picture of Nobody." Ariel, "invisible", is the kit's
 *   spirit cut as a veil (./people.tsx), as he is in "Ferdinand meets
 *   Miranda": the pipe at his lips under one hand, the tabor, a small drum,
 *   hung at his waist and struck with a stick in the other. The tune is the
 *   spot colour, as Ariel's song is there: three ribbons rising from the
 *   pipe and running out high over the two frightened men's hats. They stay
 *   clear of every face: red crossing a face reads as something worse than
 *   a tune. (A fourth, curling over Ariel towards Caliban, passed in front of
 *   Ariel's own face, and was taken out.)
 * - "O, forgive me my sins!" Trinculo, the jester in motley, hangs back with
 *   his head bowed and his hands pressed together.
 * - "If thou beest a man, show thyself in thy likeness ... Mercy upon us!"
 *   Stephano, his hat tipped back and his bark bottle at his side, looks up
 *   and throws up a hand before his face.
 * - "Art thou afeard? ... Be not afeard. The isle is full of noises, Sounds,
 *   and sweet airs, that give delight, and hurt not." Caliban, as the kit
 *   draws him, stands easy on the right facing them, his head lifted to
 *   listen, and holds out an open hand to calm them.
 *
 * Seeds: 3901 (sky), 3902 (sea), 3903 (the rocks), 3904 (ground),
 * 3905 (the tune).
 */

const W = 860
const H = 340
const GROUND = 330
const HORIZON = 214

/** The end of Ariel's pipe, in the panel: where the tune comes from. */
const PIPE_END: P = [362, 139]

type Marks = {
  sky: string
  sea: string
  rocks: string
  rockCuts: string
  ground: string
  tufts: string
  tune: string
}

/** The rocks on the right behind Caliban: a low outcrop against the sea. */
const ROCKS =
  'M620 236C626 214 642 198 664 192C680 188 694 176 712 172C736 168 756 178 772 190C790 186 812 188 830 198C846 206 858 218 866 236Z'

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(3901),
    { x0: 0, x1: W, y0: 4, y1: HORIZON - 2 },
    (x, y) => clamp(0.08 + (1 - y / HORIZON) * 0.3),
    { spacing: 6, len: [36, 130], gap: [14, 44], max: 2.2 },
  )
  const sea = gougeField(rng(3902), { x0: 0, x1: W, y0: HORIZON + 3, y1: 240 }, () => 0.3, {
    spacing: 5,
    len: [30, 90],
    gap: [8, 26],
    max: 1.8,
  })
  // The outcrop: ink, cut lighter on its upper faces.
  const k = rng(3903)
  let rockCuts = ''
  for (let i = 0; i < 70; i++) {
    const x = between(k, 630, 856)
    const y = between(k, 196, 232)
    const light = clamp(0.95 - (y - 186) / 50 + (x - 620) / 900)
    if (k() > light) continue
    rockCuts += gouge(
      x,
      y,
      x + between(k, 8, 20),
      y + between(k, 1, 4),
      0.5 + light * 1.4,
      between(k, -1, 1),
    )
  }
  const g = rng(3904)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: 238, y1: H },
    (x, y) => clamp(((y - 234) / 106) ** 1.5 * 0.5 + 0.06),
    { spacing: 6, len: [10, 46], gap: [14, 44], max: 2 },
  )
  let tufts = ''
  for (let i = 0; i < 70; i++) {
    const x = between(g, 0, W)
    const y = between(g, 246, H - 2)
    const h = 3 + clamp((y - 240) / 100) * 7
    tufts += `M${n(x - 2.4)} ${n(y)}l${n(-1.2)} ${n(-h)}M${n(x)} ${n(y)}l0 ${n(-h * 1.25)}M${n(x + 2.4)} ${n(y)}l${n(1.6)} ${n(-h)}`
  }
  // The tune: three ribbons rising from the end of the pipe and running out
  // to the left high over the two men's hats. None crosses a face.
  const s = rng(3905)
  const [px, py] = PIPE_END
  let tune = ''
  for (let i = 0; i < 3; i++) {
    const base = 58 + i * 11
    const ph = between(s, 0, 6)
    const pts: [number, number][] = []
    for (let k = 0; k <= 34; k++) {
      const x = px - ((px - 56) * k) / 34
      const lift = clamp((x - 290) / (px - 290)) ** 1.6
      const y = base + (py - base) * lift + (3 + i) * Math.sin(x / (46 + i * 7) + ph) * (1 - lift)
      pts.push([x, y])
    }
    tune += ribbon(pts, 3.4 - i * 0.5, 0.6, true)
  }
  cached = { sky, sea, rocks: ROCKS, rockCuts, ground, tufts, tune }
  return cached
}

/**
 * The pipe and tabor, in Ariel's frame (facing right, before the flip), cut
 * as he is, in outline: the pipe from his lips down and forward, the drum at
 * his waist on its cord, and the stick in his far hand.
 */
const PIPE = 'M15.6 -151.4L46 -127.6L44.4 -125.4L14.4 -149.2Z'
const TABOR = 'M12 -118L42 -118L42 -94L12 -94Z'
const TABOR_HEAD = 'M12 -118C12 -122 42 -122 42 -118C42 -114 12 -114 12 -118Z'
const TABOR_CORDS = 'M12 -115L19.5 -97L27 -115L34.5 -97L42 -115'
const TABOR_STRAP = 'M0 -136L14 -118'
const STICK = 'M10 -130L24 -121'

const TRINCULO: P = [150, GROUND]
const STEPHANO: P = [262, GROUND]
const CALIBAN: P = [596, GROUND]
const ARIEL: P = [400, 250]

function ThePlotAgainstProspero({ uid }: ArtProps) {
  const m = marks()
  const seaClip = `${uid}-sea`
  return (
    <>
      <defs>
        <clipPath id={seaClip}>
          <rect x={0} y={HORIZON} width={W} height={30} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 200], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <g clipPath={`url(#${seaClip})`}>
          <path d={m.sea} fill={INK} />
        </g>
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.fine} />
        {/* an outcrop of rock against the sea, behind Caliban */}
        <path d={m.rocks} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.rockCuts} fill={PAPER} />

        {/* the ground where they stand */}
        <path
          d={`M-10 ${H + 10}L-10 236Q430 228 ${W + 10} 236L${W + 10} ${H + 10}Z`}
          fill={PAPER}
        />
        <path
          d={`M-10 236Q430 228 ${W + 10} 236`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={m.ground} fill={INK} />
        <path d={m.tufts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />

        {/* Trinculo, hanging back, head bowed, hands pressed together:
            "O, forgive me my sins!" */}
        <Person
          at={TRINCULO}
          scale={1.12}
          pose={{
            look: 'trinculo',
            head: { rot: 16 },
            eye: 'shut',
            legs: {
              far: [
                [-3, -70],
                [-6, -36],
                [-9, -3],
              ],
              near: [
                [3, -70],
                [6, -36],
                [8, -3],
              ],
            },
            far: {
              pts: [
                [-4, -130],
                [6, -110],
                [20, -116],
              ],
              hand: 'none',
            },
            near: {
              pts: [
                [5, -128],
                [12, -108],
                [21, -114],
              ],
              hand: 'none',
            },
          }}
        >
          <PrayingHands at={[21, -115]} />
        </Person>

        {/* Stephano, looking up, a hand thrown up before his face */}
        <Person
          at={STEPHANO}
          scale={1.16}
          pose={{
            look: 'stephano',
            head: { rot: -14 },
            legs: {
              far: [
                [-3, -70],
                [-10, -36],
                [-14, -3],
              ],
              near: [
                [3, -70],
                [10, -37],
                [15, -3],
              ],
            },
            far: {
              pts: [
                [-4, -130],
                [-10, -106],
                [-8, -84],
              ],
              hand: 'grip',
              deg: 88,
            },
            near: {
              pts: [
                [5, -128],
                [24, -128],
                [34, -150],
              ],
              hand: 'open',
              deg: -76,
              thumb: -1,
            },
          }}
        >
          <BarkBottle at={[-8.4, -76]} rot={4} scale={0.9} />
        </Person>

        {/* the tune, from Ariel's pipe out over their heads */}
        <path
          className="lc-drift-r"
          style={timing({ delay: 0.6, dur: 2.2 })}
          d={m.tune}
          fill={RED}
        />

        {/* Ariel, invisible, playing the tabor and pipe */}
        <g className="lc-fade-in" style={timing({ delay: 0.2, dur: 1.6 })}>
          <Ariel
            at={ARIEL}
            scale={0.9}
            flip
            veiled={{ uid, key: 'piper', on: 'light' }}
            pose={{
              form: 'air',
              head: { rot: 8 },
              trail: 0.9,
              far: {
                pts: [
                  [-4, -134],
                  [2, -114],
                  [12, -124],
                ],
                deg: -20,
                size: 13,
                spread: 16,
              },
              near: {
                pts: [
                  [4, -132],
                  [14, -116],
                  [26, -136],
                ],
                deg: -38,
                size: 14,
                spread: 16,
              },
            }}
          >
            <g fill="none" stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round">
              <path d={PIPE} />
              <path d={TABOR + TABOR_HEAD} />
              <path d={TABOR_STRAP + STICK} strokeLinecap="round" />
            </g>
            <path d={TABOR_CORDS} fill="none" stroke={INK} strokeWidth={1.2} />
          </Ariel>
        </g>

        {/* Caliban, easy, his head lifted to listen, a hand held out to calm them */}
        <Person
          at={CALIBAN}
          scale={1.2}
          flip
          pose={{
            look: 'caliban',
            head: { rot: -12 },
            legs: {
              far: [
                [-5, -44],
                [-9, -3],
              ],
              near: [
                [5, -44],
                [9, -3],
              ],
            },
            far: {
              pts: [
                [-4, -130],
                [-10, -106],
                [-6, -84],
              ],
              deg: 80,
            },
            near: {
              pts: [
                [5, -128],
                [20, -112],
                [34, -120],
              ],
              hand: 'open',
              deg: -40,
              thumb: -1,
            },
          }}
        />
      </g>
    </>
  )
}

/** Hands pressed together, palm to palm, the fingers up, in the figure's frame: the R&J kit's. */
function PrayingHands({ at }: { at: P }) {
  const h = prayingHands(at, -74, 1)
  return (
    <CutFigure parts={[h.part]} cuts={undefined}>
      <path d={h.cut} transform={h.t} fill={PAPER} />
    </CutFigure>
  )
}

export const thePlotAgainstProspero: LinocutArt = {
  width: W,
  height: H,
  Draw: ThePlotAgainstProspero,
}
