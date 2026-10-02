import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gougeField,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Ariel, Person, STAFF_HELD, type P } from './people'
import { Cell, LimeTree } from './the-cell'

/**
 * Act 1, Scene 2: "Ferdinand meets Miranda", the fifth moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "Re-enter Ariel, playing and singing; Ferdinand following." "Come unto
 *   these yellow sands"; "This music crept by me upon the waters ... thence I
 *   have follow'd it". So Ferdinand comes up from the shore on the right, the
 *   sands and the sea behind him, led by Ariel's music, which the spot colour
 *   shows: three ribbons of song rising from Ariel's open hands, held low
 *   before his breast, and arching over to fall above Ferdinand's head ("I
 *   hear it now above me"). (They first ran from Ariel's face to
 *   Ferdinand's, and red passing between two faces read as something worse
 *   than a song; then from hands held up by his chin, and red leaving a
 *   mouth reads as blood. They leave his hands now, a head's height below
 *   his face, and end well above Ferdinand's.)
 * - Ariel is "like a nymph o' th' sea", and "invisible To every eyeball
 *   else" (Prospero's own orders). So he is the kit's spirit in his nymph
 *   form, his hair falling like water, cut as a veil (./people.tsx): an
 *   outline and fine cuts, the sky showing through him. Ferdinand and Miranda
 *   do not see him; they look at each other.
 * - "The fringed curtains of thine eye advance, And say what thou seest
 *   yond." "What is't? a spirit? ... I might call him A thing divine".
 *   Miranda, before the cell, stands with her hands clasped at her breast
 *   and looks at him.
 * - "Most sure, the goddess On whom these airs attend!" Ferdinand, a young
 *   man in the doublet, ruff and short cloak of the court, his rapier at his
 *   side, stops on the path and lifts an open hand before him. He has not
 *   yet drawn: that comes after, and is not this moment.
 * - "[Aside.] It goes on, I see, As my soul prompts it"; "At the first sight
 *   They have changed eyes." Prospero stands behind his daughter by the cell,
 *   staff in hand (held clear of his face, as the kit's STAFF_HELD holds
 *   it), and reaches his other hand, open, past it towards the young man.
 *   His aside is the quotation, so it is set at the top left, over him.
 *
 * Seeds: 3501 (sky), 3502 (sea), 3503 (sands and ground), 3504 (the song).
 *
 * REVIEWED 2 October 2026: the staff ran up through Prospero's face, and the
 * song left Ariel at the height of his mouth. Both are mended.
 */

const W = 860
const H = 340
const GROUND = 330
const HORIZON = 192

type Marks = {
  sky: string
  sea: string
  sands: string
  sandCuts: string
  ground: string
  tufts: string
  song: string
}

/** The foot of the rise before the cell, where the path comes up from the sands. */
const rise = (x: number) => 248 + Math.max(0, (x - 460) / 9) ** 1.25 - 4 * Math.sin(x / 33)

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(3501),
    { x0: 0, x1: W, y0: 4, y1: HORIZON - 2 },
    (x, y) => clamp(0.1 + (1 - y / HORIZON) * 0.34),
    { spacing: 6, len: [36, 130], gap: [14, 44], max: 2.2 },
  )
  const sea = gougeField(
    rng(3502),
    { x0: 300, x1: W, y0: HORIZON + 3, y1: 262 },
    (x, y) => clamp(0.34 - ((y - HORIZON) / 70) * 0.12),
    { spacing: 5, len: [30, 90], gap: [8, 26], max: 1.8 },
  )
  // The yellow sands below the rise: pale, stippled lightly in ink.
  const g = rng(3503)
  const sands = `M300 ${H + 10}L300 262C420 256 600 250 ${W + 10} 254L${W + 10} ${H + 10}Z`
  let sandCuts = ''
  for (let i = 0; i < 160; i++) {
    const x = between(g, 470, W)
    const y = between(g, 256, H)
    sandCuts += `M${n(x)} ${n(y)}h${n(between(g, 1.6, 3.6))}`
  }
  // The rise before the cell, grassed, the path running down it to the sands.
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: 244, y1: H },
    (x, y) => (y < rise(x) ? 0 : clamp(((y - 240) / 100) ** 1.5 * 0.5 + 0.06)),
    { spacing: 6, len: [10, 46], gap: [14, 44], max: 2 },
  )
  let tufts = ''
  for (let i = 0; i < 80; i++) {
    const x = between(g, 0, W)
    const y = between(g, rise(x) + 4, H - 2)
    if (y > H - 2) continue
    const h = 3 + clamp((y - 240) / 100) * 7
    tufts += `M${n(x - 2.4)} ${n(y)}l${n(-1.2)} ${n(-h)}M${n(x)} ${n(y)}l0 ${n(-h * 1.25)}M${n(x + 2.4)} ${n(y)}l${n(1.6)} ${n(-h)}`
  }
  // Ariel's song: three ribbons rising from his open hands, arching over the
  // air between them, and falling to fade above Ferdinand's head: "I hear it
  // now above me". Each is a curve from SONG_FROM through a high point to
  // SONG_TO, with a ripple along it, so it reads as music and not as a rope.
  const s = rng(3504)
  let song = ''
  for (let k = 0; k < 3; k++) {
    const a: Pt = [SONG_FROM[0] + k * 4, SONG_FROM[1] + k * 11]
    const c: Pt = [594, 40 + k * 13]
    const b: Pt = [SONG_TO[0] + k * 6, SONG_TO[1] + k * 10]
    const ph = between(s, 0, 6)
    const pts: Pt[] = []
    for (let i = 0; i <= 48; i++) {
      const t = i / 48
      const x = (1 - t) * (1 - t) * a[0] + 2 * t * (1 - t) * c[0] + t * t * b[0]
      const y = (1 - t) * (1 - t) * a[1] + 2 * t * (1 - t) * c[1] + t * t * b[1]
      pts.push([x, y + (4.2 + k * 0.6) * Math.sin(t * Math.PI * 6 + ph)])
    }
    song += ribbon(pts, 4.4 - k * 0.5, 0.6, true)
  }
  cached = { sky, sea, sands, sandCuts, ground, tufts, song }
  return cached
}

const PROSPERO: P = [186, GROUND]
const MIRANDA: P = [316, GROUND]
const FERDINAND: P = [690, GROUND]
const ARIEL: P = [468, 214]
/** Where the song leaves Ariel's hands, and where it fades, above Ferdinand's head. */
const SONG_FROM: P = [518, 112]
const SONG_TO: P = [670, 80]

function FerdinandMeetsMiranda({ uid }: ArtProps) {
  const m = marks()
  const seaClip = `${uid}-sea`
  let land = `M-10 ${H + 10}L-10 ${n(rise(0))}`
  for (let x = 0; x <= W + 10; x += 8) land += `L${x} ${n(rise(x))}`
  land += `L${W + 10} ${H + 10}Z`
  return (
    <>
      <defs>
        <clipPath id={seaClip}>
          <rect x={0} y={HORIZON} width={W} height={80} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 210], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <g clipPath={`url(#${seaClip})`}>
          <path d={m.sea} fill={INK} />
        </g>
        <path d={`M300 ${HORIZON}H${W}`} stroke={INK} strokeWidth={LINE.fine} />
        {/* the yellow sands he has come from */}
        <path d={m.sands} fill={PAPER} />
        <path
          d={`M300 262C420 256 600 250 ${W + 10} 254`}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.fine}
        />
        <path d={m.sandCuts} stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
        {/* the rise before the cell, and the path up it from the shore */}
        <path d={land} fill={PAPER} />
        <path d={land} fill="none" stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.ground} fill={INK} />
        <path d={m.tufts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <path
          d="M560 340C590 316 640 296 700 286C760 278 820 274 870 274L870 284C820 284 764 288 706 296C650 306 610 322 590 340Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.2}
        />
        <LimeTree at={[30, 300]} scale={0.8} />
        <Cell at={[96, 300]} scale={0.8} />

        {/* Prospero, aside, opening his hand towards the young man */}
        <Person
          at={PROSPERO}
          scale={1.16}
          pose={{
            look: 'prospero',
            head: { rot: 6 },
            far: {
              pts: [
                [-4, -130],
                [18, -116],
                [44, -112],
              ],
              hand: 'open',
              deg: -12,
              thumb: -1,
            },
            near: STAFF_HELD.near,
            staff: STAFF_HELD.staff,
          }}
        />

        {/* Miranda, her hands clasped at her breast, looking at him */}
        <Person
          at={MIRANDA}
          scale={1.2}
          pose={{
            look: 'miranda',
            head: { rot: -4 },
            far: {
              pts: [
                [-3, -124],
                [6, -104],
                [13, -113],
              ],
              hand: 'mitt',
              deg: -70,
            },
            near: {
              pts: [
                [3, -124],
                [12, -103],
                [15, -112],
              ],
              hand: 'mitt',
              deg: -80,
            },
          }}
        />

        {/* Ariel's song, rising from his hands and falling above Ferdinand */}
        <path className="lc-drift" style={timing({ delay: 0.6, dur: 2 })} d={m.song} fill={RED} />

        {/* Ariel, like a nymph of the sea, unseen by them both */}
        <g className="lc-fade-in" style={timing({ delay: 0.2, dur: 1.6 })}>
          <Ariel
            at={ARIEL}
            scale={0.92}
            veiled={{ uid, key: 'nymph', on: 'light' }}
            pose={{
              form: 'nymph',
              head: { rot: 4 },
              trail: 1,
              far: {
                pts: [
                  [-3, -134],
                  [10, -110],
                  [30, -100],
                ],
                deg: -34,
                thumb: -1,
              },
              near: {
                pts: [
                  [4, -132],
                  [16, -104],
                  [38, -92],
                ],
                deg: -14,
                thumb: -1,
              },
            }}
          />
        </g>

        {/* Ferdinand, stopped on the path, his hand lifted before him */}
        <Person
          at={FERDINAND}
          scale={1.2}
          flip
          pose={{
            look: 'ferdinand',
            head: { rot: -4 },
            sword: true,
            cloak: 4,
            legs: {
              far: [
                [-3, -70],
                [-8, -36],
                [-14, -3],
              ],
              near: [
                [3, -70],
                [12, -37],
                [18, -3],
              ],
            },
            far: {
              pts: [
                [-4, -128],
                [-8, -100],
                [-4, -76],
              ],
            },
            near: {
              pts: [
                [5, -128],
                [20, -112],
                [32, -118],
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

export const ferdinandMeetsMiranda: LinocutArt = {
  width: W,
  height: H,
  Draw: FerdinandMeetsMiranda,
}
