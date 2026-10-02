import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person } from './people'
import { Bunch, Eave, blossom } from './rome'

/**
 * Act 1, Scene 2: "Beware the Ides of March", the second moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1522, src/data/full-texts/julius-caesar.ts):
 *
 * - "The same. A public place." "Enter, in procession, with music, Caesar;
 *   Antony, for the course; Calphurnia, Portia, Decius, Cicero, Brutus,
 *   Cassius and Casca; a great crowd following, among them a Soothsayer."
 *   It is the feast of Lupercal (1.1), by day. So a public place in the sun,
 *   the procession halted on the right, the crowd on the left.
 * - "Who is it in the press that calls on me?"; "Set him before me; let me
 *   see his face"; Cassius: "Fellow, come from the throng; look upon Caesar."
 *   So the Soothsayer stands out in front of the crowd, facing Caesar across
 *   an open space, with Cassius behind him, who has brought him forward, a
 *   hand on his shoulder. (Reviewed 2 October 2026: the arm was first cut
 *   straight out at shoulder height, the open hand flat at the end of it,
 *   which at panel size is the salute the kit forbids. It is bent at the
 *   elbow now, the hand resting on the old man's back.)
 * - "What say'st thou to me now? Speak once again." "Beware the Ides of
 *   March." The Soothsayer, drawn plainly as an old man of the crowd (the kit,
 *   ./people.tsx), raises one finger in warning.
 * - "He is a dreamer; let us leave him. Pass." Caesar, in his toga and wreath,
 *   walks on to the right, the way the procession goes, his head turned back
 *   to the Soothsayer (the kit's `back` head), frowning, and brushes him aside
 *   with a low open hand. (Facing him with the hand held out, he read at
 *   panel size as reaching to take the old man's hand.)
 * - On the right, his train, turned to watch: Calpurnia, whom he has told to "Stand you
 *   directly in Antonius' way, When he doth run his course"; Antony "for the
 *   course", in a short tunic, arms and legs bare, a hand on his hip; Brutus,
 *   "not gamesome", his arms across; and Casca, who has called "Peace, ho!
 *   Caesar speaks". Portia, Decius and Cicero are in the stage direction too;
 *   the procession is cut at Casca, so as not to crowd the moment, and the
 *   guide's list of those present is the one drawn.
 * - The spot colour is the crowd's flowers, held up and strewn in Caesar's
 *   way, as on the same holiday in 1.1 ("strew flowers in his way"): the
 *   honours of the many, against the one voice that warns him.
 *
 * Seeds: 5201 (sky), 5202 (hill), 5203 (walls), 5204 (paving), 5205 (flowers).
 */

const W = 860
const H = 340
const STREET = 252

type Marks = {
  sky: string
  hill: string
  hillCuts: string
  walls: string
  paving: string
  shadows: string
  strewn: string
}

/** The Capitol's hill, far behind the houses on the left. */
const hillY = (x: number) => 112 - 26 * Math.exp(-(((x - 210) / 120) ** 2)) + 4 * Math.sin(x / 23)

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(5201),
    { x0: 0, x1: W, y0: 6, y1: 128 },
    (x, y) => clamp(0.06 + (1 - y / 128) * 0.2),
    { spacing: 7, len: [40, 150], gap: [24, 70], max: 1.6 },
  )
  let hill = `M-10 140`
  for (let x = -10; x <= 470; x += 6) hill += `L${n(x)} ${n(hillY(x))}`
  hill += 'L470 140Z'
  const h = rng(5202)
  let hillCuts = ''
  for (let i = 0; i < 160; i++) {
    const x = between(h, 0, 460)
    const top = hillY(x)
    const y = between(h, top + 3, 136)
    const L = clamp(0.8 - (y - top) / 40)
    if (h() > L) continue
    hillCuts += gouge(x, y, x + 3 + L * 4, y + between(h, -1, 1), 0.5 + L * 0.9)
  }
  const walls = gougeField(
    rng(5203),
    { x0: 0, x1: W, y0: 134, y1: STREET - 4 },
    (x, y) => clamp(0.05 + Math.max(0, 1 - (y - 134) / 24) * 0.5),
    { spacing: 7, len: [14, 60], gap: [16, 46], max: 2 },
  )
  const paving = flagFloor(rng(5204), W, H, STREET, [400, 110], 54, 6)
  const shadows =
    footShadow(202, 330, 26) +
    footShadow(274, 338, 30) +
    footShadow(448, 340, 36) +
    footShadow(550, 336, 26) +
    footShadow(612, 326, 26) +
    footShadow(714, 330, 28) +
    footShadow(792, 326, 26)
  const r = rng(5205)
  let strewn = ''
  for (let i = 0; i < 16; i++) {
    const x = between(r, 312, 404)
    const y = between(r, 300, 336)
    strewn += blossom(x, y, between(r, 1.9, 2.5))
  }
  for (let i = 0; i < 6; i++) strewn += blossom(between(r, 40, 140), between(r, 316, 336), 2.2)
  cached = { sky, hill, hillCuts, walls, paving, shadows, strewn }
  return cached
}

function BewareTheIdesOfMarch() {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [380, 200], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      {/* the Capitol on its hill, far off behind the houses */}
      <path d={m.hill} fill={INK} />
      <path d={m.hillCuts} fill={PAPER} />
      <path
        d="M168 90L210 72L252 90ZM172 90H248V94H172ZM176 94H244V112H176Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path
        d="M184 96V112M196 96V112M208 96V112M220 96V112M232 96V112"
        stroke={INK}
        strokeWidth={2.4}
      />

      {/* the houses round the public place, sunlit */}
      <rect x={0} y={134} width={W} height={STREET - 134} fill={PAPER} />
      <path d={m.walls} fill={INK} />
      <Eave x0={-12} x1={W + 12} y={138} />
      <path d="M318 132V252M602 132V252" stroke={INK} strokeWidth={LINE.bold} />
      <rect x={40} y={160} width={36} height={30} fill={INK} />
      <rect x={232} y={160} width={36} height={30} fill={INK} />
      <path d="M338 252V200Q338 178 362 178Q386 178 386 200V252Z" fill={INK} />
      <rect x={660} y={160} width={36} height={30} fill={INK} />
      <rect x={780} y={160} width={36} height={30} fill={INK} />
      <path d="M58 160V190M250 160V190M678 160V190M798 160V190" stroke={PAPER} strokeWidth={2} />

      {/* the public place: paving, and flowers strewn in Caesar's way */}
      <rect x={0} y={STREET} width={W} height={H - STREET} fill={PAPER} />
      <path d={`M0 ${STREET}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.paving} fill={INK} />
      <path d={m.shadows} fill={INK} />
      <path d={m.strewn} fill={RED} stroke={INK} strokeWidth={0.7} />

      {/* the crowd behind the Soothsayer, flowers held up */}
      <Person
        at={[34, 312]}
        scale={0.9}
        pose={{
          look: 'citizen',
          variant: 4,
          near: {
            pts: [
              [5, -128],
              [16, -146],
              [20, -170],
            ],
            hand: 'grip',
            deg: -84,
          },
        }}
      >
        <Bunch at={[21, -176]} angle={-90} />
      </Person>
      <Person at={[92, 306]} scale={0.9} pose={{ look: 'citizen', variant: 2 }} />
      <Person
        at={[124, 320]}
        scale={0.92}
        pose={{
          look: 'citizen-woman',
          near: {
            pts: [
              [4, -124],
              [14, -102],
              [28, -110],
            ],
            hand: 'grip',
            deg: -58,
          },
        }}
      >
        <Bunch at={[30, -116]} angle={-62} />
      </Person>

      {/* Cassius, who has brought him out of the throng, a hand on his
          shoulder: the elbow bent and the hand low, never a straight arm */}
      <Person
        at={[200, 328]}
        scale={1.06}
        pose={{
          look: 'cassius',
          feet: [-8, 10],
          near: {
            pts: [
              [5, -128],
              [17, -106],
              [39, -114],
            ],
            hand: 'open',
            deg: -18,
            thumb: -1,
          },
        }}
      />
      {/* the Soothsayer, one finger raised before him: "Beware the Ides of March" */}
      <Person
        at={[272, 336]}
        scale={1.08}
        pose={{
          look: 'soothsayer',
          head: { rot: -5 },
          feet: [-8, 12],
          near: {
            pts: [
              [5, -128],
              [28, -122],
              [34, -144],
            ],
            hand: 'finger',
            deg: -84,
          },
        }}
      />

      {/* Caesar walks on, his head turned back to him, frowning, brushing him
          off with the back of his hand: "let us leave him. Pass." */}
      <Person
        at={[450, 338]}
        scale={1.18}
        pose={{
          look: 'caesar',
          head: { at: [-1, -160], rot: 6, back: true },
          frown: true,
          feet: [-14, 16],
          hem: { front: 30, back: 30 },
          near: {
            pts: [
              [5, -128],
              [-6, -106],
              [-26, -98],
            ],
            hand: 'open',
            deg: 166,
            thumb: 1,
          },
        }}
      />
      {/* his train, turned to watch: Antony for the course, Calpurnia, Brutus, Casca */}
      <Person
        at={[612, 324]}
        scale={1.02}
        flip
        pose={{
          look: 'calpurnia',
          near: {
            pts: [
              [4, -124],
              [10, -102],
              [16, -92],
            ],
            hand: 'mitt',
            deg: 40,
          },
        }}
      />
      <Person
        at={[548, 334]}
        scale={1.04}
        flip
        pose={{
          look: 'antony',
          dress: 'runner',
          legs: {
            far: [
              [-3, -70],
              [-8, -36],
              [-10, -3],
            ],
            near: [
              [3, -70],
              [8, -36],
              [10, -3],
            ],
          },
          near: {
            pts: [
              [5, -128],
              [20, -110],
              [10, -92],
            ],
            hand: 'mitt',
            deg: 160,
          },
        }}
      />
      <Person at={[716, 328]} scale={1.04} flip pose={{ look: 'brutus', folded: true }} />
      <Person
        at={[794, 324]}
        scale={1.0}
        flip
        pose={{
          look: 'casca',
          near: {
            pts: [
              [5, -128],
              [10, -104],
              [12, -82],
            ],
            hand: 'mitt',
          },
        }}
      />
    </g>
  )
}

export const bewareTheIdesOfMarch: LinocutArt = {
  width: W,
  height: H,
  Draw: BewareTheIdesOfMarch,
}
