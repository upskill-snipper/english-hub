import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person, type P } from './people'
import { Bunch, CaesarImage, Eave, TempleFront, blossom, templeFront } from './rome'

/**
 * Act 1, Scene 1: "The tribunes scold the crowd", the first moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1522, src/data/full-texts/julius-caesar.ts):
 *
 * - "Rome. A street." "Enter Flavius, Marullus and a throng of Citizens." It
 *   is day and a holiday: "Is this a holiday?", "we make holiday to see
 *   Caesar, and to rejoice in his triumph". So a sunlit street, two tribunes
 *   on the left and the throng on the right.
 * - The citizens are working men out of their working clothes: "Where is thy
 *   leather apron and thy rule? What dost thou with thy best apparel on?" So
 *   the carpenter carries no rule and wears no apron, and the crowd are in
 *   clean belted tunics and caps. The cobbler, who answers in puns ("a mender
 *   of bad soles", "I can mend you"), grins and spreads an open hand.
 * - "And do you now strew flowers in his way, That comes in triumph over
 *   Pompey's blood?" The crowd hold flowers, and flowers lie strewn on the
 *   paving in Caesar's way: the spot colour.
 * - "Disrobe the images, If you do find them deck'd with ceremonies"; "let
 *   no images Be hung with Caesar's trophies". Between them, before a
 *   temple, stands one of Caesar's images, cut in white stone, a scarf
 *   swagged and knotted across its plinth (Casca's word for the ceremonies in
 *   1.2: "pulling scarfs off Caesar's images"), also printed in the spot
 *   colour: the honours the tribunes mean to strip. The scarf is on the
 *   plinth, never on Caesar's figure (see `CaesarImage` in ./rome.tsx).
 * - "You blocks, you stones, you worse than senseless things!" Marullus, in
 *   front, frowns, calls out and points at the crowd; Flavius, behind him,
 *   holds them off with an open hand: "Hence! home, you idle creatures, get
 *   you home." Some of the crowd look down ("They vanish tongue-tied in their
 *   guiltiness").
 *
 * The tribunes are told apart as the kit (./people.tsx) tells them: Flavius
 * is the older, grey at the nape.
 *
 * Seeds: 5101 (sky), 5102 (walls), 5103 (paving), 5104 (strewn flowers).
 */

const W = 860
const H = 340
/** Where the paving meets the house fronts and the temple steps. */
const STREET = 256
const TEMPLE = { x0: 296, x1: 598, top: 20 }

type Marks = {
  sky: string
  walls: string
  paving: string
  shadows: string
  strewn: string
  petals: string
  temple: ReturnType<typeof templeFront>
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A clear holiday sky: a few long, thin ink cuts on the paper.
  const sky = gougeField(
    rng(5101),
    { x0: 0, x1: W, y0: 6, y1: 110 },
    (x, y) => clamp(0.06 + (1 - y / 110) * 0.22),
    { spacing: 7, len: [40, 150], gap: [24, 70], max: 1.6 },
  )
  // Plaster on the sunlit house fronts: sparse ink cuts, denser under the eaves.
  const walls = gougeField(
    rng(5102),
    { x0: 0, x1: W, y0: 88, y1: STREET - 4 },
    (x, y) => {
      if (x > TEMPLE.x0 - 16 && x < TEMPLE.x1 + 16) return 0
      const top = x < TEMPLE.x0 ? 88 : 100
      return clamp(0.05 + Math.max(0, 1 - (y - top) / 26) * 0.5)
    },
    { spacing: 7, len: [14, 60], gap: [16, 46], max: 2 },
  )
  const paving = flagFloor(rng(5103), W, H, STREET, [446, 120], 54, 6)
  const shadows =
    footShadow(108, 324, 26) +
    footShadow(206, 336, 32) +
    footShadow(446, 304, 46) +
    footShadow(612, 336, 30) +
    footShadow(692, 334, 30) +
    footShadow(772, 332, 28)
  // Flowers strewn in Caesar's way, thickest where the crowd has come.
  const r = rng(5104)
  let strewn = ''
  let petals = ''
  for (let i = 0; i < 26; i++) {
    const t = Math.pow(r(), 0.7)
    const x = 268 + t * 330 + between(r, -10, 10)
    const y = between(r, 296, 336)
    if (Math.abs(x - 446) < 50 && y < 306) continue
    strewn += blossom(x, y, between(r, 1.9, 2.6))
  }
  for (let i = 0; i < 30; i++) {
    const x = between(r, 250, 640)
    const y = between(r, 290, 338)
    if (Math.abs(x - 446) < 48 && y < 306) continue
    petals += gouge(x, y, x + between(r, 2.4, 4), y + between(r, -1.4, 1.4), 1.2)
  }
  const temple = templeFront(TEMPLE.x0, TEMPLE.x1, TEMPLE.top, STREET)
  cached = { sky, walls, paving, shadows, strewn, petals, temple }
  return cached
}

const MARULLUS: P = [206, 334]
const FLAVIUS: P = [104, 322]

function TheTribunesScoldTheCrowd() {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [430, 210], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />

      {/* the house fronts, sunlit, either side of the temple */}
      <path d={m.walls} fill={INK} />
      <Eave x0={-12} x1={TEMPLE.x0 - 22} y={88} />
      <Eave x0={TEMPLE.x1 + 22} x1={W + 12} y={100} />
      <path d={`M${TEMPLE.x0 - 22} 76V${STREET}`} stroke={INK} strokeWidth={LINE.bold} />
      <path d={`M${TEMPLE.x1 + 22} 88V${STREET}`} stroke={INK} strokeWidth={LINE.bold} />
      {/* the left house: a doorway and an upper window */}
      <path d="M30 256V178Q30 150 64 150Q98 150 98 178V256Z" fill={INK} />
      <path
        d="M24 256V178Q24 144 64 144Q104 144 104 178V256"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.bold}
      />
      <rect x={150} y={112} width={52} height={40} fill={INK} />
      <path d="M176 112V152M150 132H202" stroke={PAPER} strokeWidth={2.2} />
      <rect x={144} y={152} width={64} height={5} fill={INK} />
      {/* the right house: a doorway and two windows */}
      <path d="M700 256V184Q700 160 728 160Q756 160 756 184V256Z" fill={INK} />
      <rect x={640} y={124} width={40} height={34} fill={INK} />
      <rect x={784} y={124} width={40} height={34} fill={INK} />
      <path d="M660 124V158M804 124V158" stroke={PAPER} strokeWidth={2} />

      {/* the temple, and before it one of Caesar's images, hung with scarves */}
      <TempleFront t={m.temple} x0={TEMPLE.x0} x1={TEMPLE.x1} base={STREET} />

      {/* the street: paving in the sun, flowers strewn in Caesar's way */}
      <rect x={0} y={STREET} width={W} height={H - STREET} fill={PAPER} />
      <path d={`M0 ${STREET}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.paving} fill={INK} />
      <path d={m.shadows} fill={INK} />
      <CaesarImage at={[446, 264]} scale={0.7} scarves plinth={52} />
      <path d={m.petals} fill={RED} />
      <path d={m.strewn} fill={RED} stroke={INK} strokeWidth={0.7} />

      {/* the tribunes: Flavius holding them off, Marullus pointing and calling out */}
      <Person
        at={FLAVIUS}
        scale={1.02}
        pose={{
          look: 'flavius',
          frown: true,
          feet: [-10, 10],
          hem: { front: 26, back: 30 },
          head: { rot: 2 },
          near: {
            pts: [
              [5, -128],
              [22, -112],
              [40, -110],
            ],
            hand: 'open',
            deg: -38,
            thumb: -1,
          },
        }}
      />
      <Person
        at={MARULLUS}
        scale={1.12}
        pose={{
          look: 'marullus',
          frown: true,
          mouth: 'open',
          feet: [-16, 16],
          hem: { front: 30, back: 34 },
          head: { rot: -4 },
          near: {
            pts: [
              [5, -128],
              [26, -120],
              [50, -120],
            ],
            hand: 'point',
            deg: -2,
          },
        }}
      />

      {/* the throng, facing them: the back row first */}
      <Person
        at={[650, 302]}
        scale={0.94}
        flip
        pose={{ look: 'citizen', variant: 3, eye: 'down' }}
      />
      <Person at={[734, 300]} scale={0.94} flip pose={{ look: 'citizen', variant: 2 }} />
      <Person
        at={[822, 304]}
        scale={0.94}
        flip
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
      {/* the cobbler, grinning, an open hand spread: "I can mend you" */}
      <Person
        at={[612, 336]}
        scale={1.08}
        flip
        pose={{
          look: 'citizen',
          variant: 0,
          mouth: 'grin',
          near: {
            pts: [
              [5, -128],
              [16, -104],
              [34, -100],
            ],
            hand: 'open',
            deg: -34,
            thumb: -1,
          },
        }}
      />
      {/* the carpenter, flowers held to his chest, looking down */}
      <Person
        at={[692, 334]}
        scale={1.08}
        flip
        pose={{
          look: 'citizen',
          variant: 1,
          eye: 'down',
          head: { rot: 6 },
          near: {
            pts: [
              [5, -128],
              [16, -106],
              [8, -114],
            ],
            hand: 'grip',
            deg: -96,
          },
        }}
      >
        <Bunch at={[8, -120]} angle={-80} />
      </Person>
      {/* a woman of the crowd, her flowers held out before her for the triumph */}
      <Person
        at={[772, 332]}
        scale={1.04}
        flip
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
    </g>
  )
}

export const theTribunesScoldTheCrowd: LinocutArt = {
  width: W,
  height: H,
  Draw: TheTribunesScoldTheCrowd,
}
