import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { clamp, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { lightField, skyLines } from './light-cuts'
import { Column, beam, parapet } from './palace'
import { Person, type P } from './people'

/**
 * Act 1, Scene 3: "A parting performed", the third moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Alexandria. A Room in Cleopatra’s palace." So the palace of the first
 *   two panels (./palace.tsx): its columns, its daylight, and a dark wall at
 *   one side, here the right.
 * - CLEOPATRA: "I am sick and sullen." ... "Help me away, dear Charmian! I
 *   shall fall." So she sways back as if fainting, her head thrown back and
 *   her eyes shut, and Charmian (the kit's, ./people.tsx, her hair in a knot)
 *   leans in behind her, a hand at her back, to hold her up.
 * - CLEOPATRA: "Pray you, stand farther from me." So her near hand is held up
 *   between them, open, the fingers apart, the arm bent: keeping him off.
 * - It is a performance, and the scene says so ("Good now, play one scene Of
 *   excellent dissembling"; "I am quickly ill and well, So Antony loves"), so
 *   the swoon is drawn as she plays it: too far back to be true, and caught
 *   at once by her woman. Cleopatra is the kit's, her hair long and loose and
 *   the queen's mantle behind her; she is not crowned, as the kit keeps the
 *   crown for 5.2.
 * - "Enter Antony." ANTONY: "Now, my dearest queen—" ... "The strong
 *   necessity of time commands Our services awhile". So Antony, come to take
 *   his leave for Rome, is armed for it, the kit's Antony in the cuirass and
 *   the general's cloak ("Now, by my sword—"). ANTONY: "Look here, and at thy
 *   sovereign leisure read The garboils she awaked; at the last, best, See
 *   when and where she died." So he steps towards her holding out the letter
 *   of Fulvia's death, the letter of the second panel, and she will not look
 *   at it, or at him: "Where be the sacred vials thou shouldst fill With
 *   sorrowful water?" A column of the hall stands between them, behind the
 *   letter, so the sheet shows against it.
 *
 * Nothing in the scene is the spot colour's: it is ink and paper only.
 * Hangings drawn back like a stage's were cut here first, printed red for her
 * playing, and taken out on 9 October 2026: the play has no hangings and no
 * stage in this room, and the picture must not invent one. The words say it
 * instead: the quotation is Cleopatra's own, from the same scene, verbatim,
 * "I am quickly ill and well, So Antony loves", which tells the reader the
 * swoon is played. Nothing is taken from a film or stage production. Seeds:
 * 301 (the sky), 302 (the floor), 303 to 305 (the parapets), 306 (the wall).
 */

const W = 860
const H = 340
const BEAM = { top: 14, bottom: 40 }
const WALL_FOOT = 262
const FEET = 324
const COLS = [150, 430, 690]
/** The dark wall at the right, from here to the edge. */
const WALL_AT = 704
const CAP_TOP = 40
const SILL = 224
/** The scale every figure is drawn at: a closer view than the hall of the first panel. */
const S = 1.24

/** Where Cleopatra stands, and how far she sways back from her feet, in degrees. */
const CLEO_AT: P = [486, FEET]
const SWAY = 14
/** Where Charmian stands behind her, and how far she leans in to catch her. */
const CHARMIAN_AT: P = [599, FEET]
const CATCH = 2
const ANTONY_AT: P = [362, FEET]

type Marks = {
  sky: string
  wall: string
  floor: string
  parapets: { shape: string; cuts: string }[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyLines(
    301,
    { x0: 0, x1: WALL_AT, y0: BEAM.bottom + 2, y1: SILL - 2 },
    (_x, y) => 0.42 - (y - BEAM.bottom) / 260,
  )
  // The wall at the right, out of the light: dark, cut more as it nears the
  // last opening.
  const wall = lightField(
    306,
    { x0: WALL_AT, x1: W, y0: BEAM.bottom + 2, y1: WALL_FOOT },
    (x, y) => clamp(0.12 + ((W - x) / (W - WALL_AT)) * 0.45 - (y - 150) / 900),
    { spacing: 6, len: [12, 40], gap: [6, 18], max: 3 },
  )
  const floor = flagFloor(rng(302), W, H, WALL_FOOT, [430, 120], 64, 5)
  const parapets = [
    parapet(303, -10, COLS[0] - 14, SILL, WALL_FOOT),
    parapet(304, COLS[0] + 14, COLS[1] - 14, SILL, WALL_FOOT),
    parapet(305, COLS[1] + 14, COLS[2] - 14, SILL, WALL_FOOT),
  ]
  cached = { sky, wall, floor, parapets }
  return cached
}

/**
 * The letter in Antony's hand, the same sheet he was given in the second
 * panel, in his figure's frame: an opened sheet, its lines cut in ink.
 */
const LETTER = 'M44 -116L62 -122L66 -100L48 -94Z'
const LETTER_LINES = 'M49 -110L60 -114M50 -105L61 -109M51 -100L62 -104'

function APartingPerformed(_props: ArtProps) {
  const m = marks()
  const b = beam(W, BEAM.top, BEAM.bottom)
  return (
    <g className="lc-push" style={timing({ origin: [470, 210], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <rect
        x={WALL_AT}
        y={BEAM.bottom}
        width={W - WALL_AT}
        height={WALL_FOOT - BEAM.bottom}
        fill={INK}
      />
      <path d={m.wall} fill={PAPER} />
      {m.parapets.map((p, k) => (
        <g key={k}>
          <path d={p.shape} fill={INK} />
          <path d={p.cuts} fill={PAPER} />
        </g>
      ))}
      <path d={m.floor} fill={INK} />
      <path
        d={footShadow(ANTONY_AT[0] + 2, FEET + 2, 74) + footShadow(546, FEET + 2, 100)}
        fill={INK}
      />
      <path d={b.shape} fill={INK} />
      <path d={b.cuts} fill={PAPER} />
      {COLS.map((cx) => (
        <Column key={cx} cx={cx} top={CAP_TOP} foot={WALL_FOOT + 2} />
      ))}

      {/* Antony, armed to leave, holding out the letter of Fulvia's death */}
      <Person
        pose={{
          look: 'antony',
          head: { rot: 6 },
          near: {
            pts: [
              [5, -130],
              [22, -108],
              [44, -104],
            ],
            hand: 'grip',
            deg: -14,
          },
        }}
        at={ANTONY_AT}
        scale={S}
      >
        <path d={LETTER} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
        <path d={LETTER_LINES} stroke={INK} strokeWidth={0.9} />
      </Person>

      {/* Cleopatra, swaying back as if to fall, her eyes shut, a hand held up to keep him off */}
      <g transform={`rotate(${SWAY} ${CLEO_AT[0]} ${CLEO_AT[1]})`}>
        <Person
          pose={{
            look: 'cleopatra',
            eye: 'shut',
            head: { rot: -18 },
            near: {
              pts: [
                [5, -124],
                [18, -100],
                [17, -110],
              ],
              hand: 'open',
              deg: -84,
              spread: 14,
            },
          }}
          at={CLEO_AT}
          scale={S}
          flip
        />
      </g>
      {/* Charmian, leaning in behind her, a hand at her back to hold her up */}
      <g transform={`rotate(${-CATCH} ${CHARMIAN_AT[0]} ${CHARMIAN_AT[1]})`}>
        <Person
          pose={{
            look: 'charmian',
            head: { rot: 8 },
            near: {
              pts: [
                [5, -122],
                [24, -104],
                [44, -112],
              ],
              hand: 'open',
              deg: -76,
            },
          }}
          at={CHARMIAN_AT}
          scale={S}
          flip
        />
      </g>
    </g>
  )
}

export const aPartingPerformed: LinocutArt = { width: W, height: H, Draw: APartingPerformed }
