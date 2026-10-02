import type { LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { flagFloor, footShadow } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import { Person } from './people'
import { CaesarImage, Eave, TempleFront, templeFront } from './rome'

/**
 * Act 1, Scene 2: "Cassius works on Brutus", the third moment in the guide's
 * timeline. Every detail is from the scene in the held edition (Project
 * Gutenberg #1522, src/data/full-texts/julius-caesar.ts):
 *
 * - "Exeunt all but Brutus and Cassius." The same public place as the
 *   Soothsayer's warning (./beware-the-ides-of-march.tsx), with the Capitol
 *   on its hill behind the houses, now empty but for the two of them, while
 *   the games go on offstage ("Flourish and shout").
 * - "Brutus, I do observe you now of late"; "poor Brutus, with himself at
 *   war". Brutus stands with his arms across, as Portia describes him in 2.1
 *   ("Musing and sighing, with your arms across"), his eyes down and his
 *   brows drawn up (the kit's BRUTUS_BROW, "the charactery of my sad
 *   brows").
 * - "Why, man, he doth bestride the narrow world Like a Colossus, and we petty
 *   men Walk under his huge legs". Cassius, lean (the kit's HEAD_CASSIUS),
 *   leans in to him and points back over his shoulder, up at one of Caesar's
 *   images in the public place (Flavius's "images" of 1.1, cut as ./rome.tsx
 *   cuts them), larger than life on its plinth before the dark porch of a
 *   temple, its wreathed head as high as the temple roof: it towers over the
 *   two men. (Set further back against the sky, it was first drawn no taller
 *   than they were, and towered over nothing.)
 * - "I do believe that these applauses are For some new honours that are
 *   heap'd on Caesar." The scarves on the image's plinth are the honours, in
 *   the spot colour, as in the first panel.
 *
 * The statue is the play's image, not a literal colossus: Cassius's figure of
 * speech is drawn as Caesar's image standing over them, so the picture holds
 * nothing the scene does not.
 *
 * Seeds: 5301 (sky), 5302 (hill), 5303 (walls), 5304 (paving).
 */

const W = 860
const H = 340
const STREET = 252
const IMAGE_X = 640
const TEMPLE = { x0: 452, x1: 830, top: 6 }

type Marks = {
  sky: string
  hill: string
  hillCuts: string
  walls: string
  paving: string
  shadows: string
  temple: ReturnType<typeof templeFront>
}

/** The Capitol's hill behind the houses, as in the Soothsayer's panel, seen further to the left. */
const hillY = (x: number) => 116 - 24 * Math.exp(-(((x - 120) / 110) ** 2)) + 4 * Math.sin(x / 23)

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = gougeField(
    rng(5301),
    { x0: 0, x1: W, y0: 6, y1: 134 },
    (x, y) => clamp(0.06 + (1 - y / 134) * 0.2),
    { spacing: 7, len: [40, 150], gap: [24, 70], max: 1.6 },
  )
  let hill = `M-10 140`
  for (let x = -10; x <= 300; x += 6) hill += `L${n(x)} ${n(hillY(x))}`
  hill += 'L300 140Z'
  const h = rng(5302)
  let hillCuts = ''
  for (let i = 0; i < 110; i++) {
    const x = between(h, 0, 296)
    const top = hillY(x)
    const y = between(h, top + 3, 136)
    const L = clamp(0.8 - (y - top) / 40)
    if (h() > L) continue
    hillCuts += gouge(x, y, x + 3 + L * 4, y + between(h, -1, 1), 0.5 + L * 0.9)
  }
  const walls = gougeField(
    rng(5303),
    { x0: 0, x1: TEMPLE.x0 - 20, y0: 134, y1: STREET - 4 },
    (x, y) => clamp(0.05 + Math.max(0, 1 - (y - 134) / 24) * 0.5),
    { spacing: 7, len: [14, 60], gap: [16, 46], max: 2 },
  )
  const paving = flagFloor(rng(5304), W, H, STREET, [430, 110], 54, 6)
  const shadows = footShadow(256, 338, 34) + footShadow(352, 338, 32) + footShadow(IMAGE_X, 318, 66)
  const temple = templeFront(TEMPLE.x0, TEMPLE.x1, TEMPLE.top, STREET)
  cached = { sky, hill, hillCuts, walls, paving, shadows, temple }
  return cached
}

function CassiusWorksOnBrutus() {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [330, 200], push: 1.035 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      {/* the Capitol on its hill */}
      <path d={m.hill} fill={INK} />
      <path d={m.hillCuts} fill={PAPER} />
      <path
        d="M78 96L120 78L162 96ZM82 96H158V100H82ZM86 100H154V118H86Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={1.2}
      />
      <path
        d="M94 102V118M106 102V118M118 102V118M130 102V118M142 102V118"
        stroke={INK}
        strokeWidth={2.4}
      />

      {/* the houses round the public place, empty now, and a temple */}
      <rect x={0} y={134} width={TEMPLE.x0 - 20} height={STREET - 134} fill={PAPER} />
      <path d={m.walls} fill={INK} />
      <Eave x0={-12} x1={TEMPLE.x0 - 20} y={138} />
      <path d={`M150 132V252M${TEMPLE.x0 - 20} 126V252`} stroke={INK} strokeWidth={LINE.bold} />
      <rect x={40} y={162} width={36} height={30} fill={INK} />
      <rect x={168} y={162} width={36} height={30} fill={INK} />
      <path d="M58 162V192M186 162V192" stroke={PAPER} strokeWidth={2} />
      <TempleFront t={m.temple} x0={TEMPLE.x0} x1={TEMPLE.x1} base={STREET} />

      {/* the public place */}
      <rect x={0} y={STREET} width={W} height={H - STREET} fill={PAPER} />
      <path d={`M0 ${STREET}H${W}`} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.paving} fill={INK} />
      <path d={m.shadows} fill={INK} />

      {/* Caesar's image, larger than life on its plinth before the temple,
          towering over the two men, honours on its plinth */}
      <CaesarImage at={[IMAGE_X, 222]} scale={1.08} plinth={88} scarves flip />

      {/* Brutus, his arms across, eyes down: "with himself at war" */}
      <Person
        at={[256, 336]}
        scale={1.16}
        pose={{
          look: 'brutus',
          folded: true,
          eye: 'down',
          head: { rot: 8 },
          feet: [-8, 10],
        }}
      />
      {/* Cassius, leaning in, pointing back over his shoulder at the image:
          "he doth bestride the narrow world Like a Colossus" */}
      <Person
        at={[354, 336]}
        scale={1.15}
        flip
        pose={{
          look: 'cassius',
          head: { at: [6, -159], rot: 12 },
          feet: [-14, 12],
          hem: { front: 26, back: 30 },
          near: {
            pts: [
              [5, -128],
              [-14, -136],
              [-34, -146],
            ],
            hand: 'point',
            deg: -157,
            thumb: -1,
          },
        }}
      />
    </g>
  )
}

export const cassiusWorksOnBrutus: LinocutArt = {
  width: W,
  height: H,
  Draw: CassiusWorksOnBrutus,
}
