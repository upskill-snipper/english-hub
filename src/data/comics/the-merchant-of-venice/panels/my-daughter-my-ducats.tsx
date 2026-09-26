import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type Pose } from './people'
import { FEET, H, MooringPost, VeniceCanal, W, footShadow } from './venice-canal'

/**
 * Act 2, Scene 8: "My daughter, my ducats", the sixth moment in the guide's
 * timeline. Every detail is from the scene, as the held edition prints it
 * (src/data/full-texts/the-merchant-of-venice.ts):
 *
 * - "Venice. A street." "Enter Salarino and Solanio." Nobody else is in the
 *   scene, so nobody else is drawn. Shylock is not on stage: his grief
 *   reaches the audience only as Solanio repeats it ("I never heard a passion
 *   so confus'd ... As the dog Jew did utter in the streets"), and the guide
 *   asks the student to weigh exactly that. So he is not drawn, and neither
 *   are "all the boys in Venice" who follow him: the panel does not stage the
 *   mockery it reports.
 * - What they are talking about is drawn instead. On the left stands
 *   Shylock's house, its door shut under its penthouse ("This is the
 *   penthouse under which Lorenzo / Desired us to make stand", 2.6; "I will
 *   make fast the doors", 2.6), and above it the casement Jessica stood at
 *   "above, in boy's clothes" (2.6) is open on an empty, dark room. Its
 *   curtain blows out of the window in the spot colour: the daughter is gone.
 * - Solanio, bareheaded with his short beard (./people.tsx), turns to the
 *   house and points up at the empty window as he tells what he heard. Salarino, in his round cap, stands beside him with his hand on
 *   his heart: he is thinking of Antonio ("I thought upon Antonio when he
 *   told me, / And wish'd in silence that it were not his"; "A kinder
 *   gentleman treads not the earth").
 * - "in a gondola were seen together / Lorenzo and his amorous Jessica." On
 *   the right an empty gondola lies moored at a post on the canal.
 * - It is the next day, by daylight: "I saw Bassanio under sail", and the
 *   Duke "came too late". The street is ./venice-canal.tsx, the street of
 *   the other Venice panels of moments 6 to 10.
 *
 * The quotation is Solanio's report of Shylock's cry, the guide's own line
 * for the moment, and no slur. Nothing is taken from a film or stage
 * production. Seeds: 6601 (the street), 6602 (the house).
 */

/** The right-hand edge of Shylock's house. */
const HOUSE_X1 = 176
/** The open casement: its opening. */
const CASE = { x0: 54, x1: 124, top: 96, bottom: 180 }

type Marks = { stone: string; door: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(6602)
  // The house is on the near side of the canal, in its own shadow: ink, its
  // courses of stone cut in paper.
  let stone = ''
  for (let y = 14; y < FEET - 30; y += 14) {
    stone += gouge(-4, y, HOUSE_X1 - 4, y + between(r, -0.6, 0.6), 1.1)
    const off = (Math.round(y / 14) % 2) * 20
    for (let x = 8 + off; x < HOUSE_X1 - 6; x += 40) stone += gouge(x, y + 2, x, y + 12, 0.8)
  }
  // The door's planks, and the studs that bind them.
  let door = ''
  for (const x of [66, 86, 106]) door += gouge(x, 234, x, 302, 1.2)
  for (const y of [248, 280])
    for (const x of [60, 76, 96, 114]) door += gouge(x - 1.6, y, x + 1.6, y, 1.4)
  cached = { stone, door }
  return cached
}

/**
 * Solanio, turned to the house (flipped to face left), pointing up at the
 * empty window on a bent arm, his head raised to it.
 */
const SOLANIO: Pose = {
  look: 'solanio',
  head: { rot: -10 },
  far: {
    pts: [
      [-4, -128],
      [-8, -100],
      [-5, -74],
    ],
  },
  near: {
    pts: [
      [5, -128],
      [24, -122],
      [38, -144],
    ],
    hand: 'point',
    deg: -54,
  },
}

/** Salarino beside him, his hand on his heart, his head a little bowed. */
const SALARINO: Pose = {
  look: 'salarino',
  head: { rot: 5 },
  cloak: 1,
  far: {
    pts: [
      [-4, -128],
      [-8, -100],
      [-5, -74],
    ],
  },
  near: {
    pts: [
      [5, -128],
      [14, -100],
      [13, -112],
    ],
    hand: 'open',
    deg: -94,
    size: 14,
    spread: 10,
    thumb: 1,
  },
}

function MyDaughterMyDucats(_: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [300, 180], push: 1.03 })}>
      <VeniceCanal seed={6601} gap={600} near={<MooringPost x={760} top={150} />} />

      {/* an empty gondola, moored at the post */}
      <path
        d="M632 232C660 238 720 240 780 236C800 234 814 228 826 216L830 218C822 232 806 242 780 246C720 250 664 248 640 242C630 240 626 234 624 226L628 224Z"
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d="M826 216L836 204L840 206L832 220Z" fill={INK} stroke={PAPER} strokeWidth={1} />
      <path d={gouge(646, 238, 800, 238, 0.9)} fill={PAPER} />

      {/* Shylock's house, on the near side of the canal */}
      <rect x={0} y={0} width={HOUSE_X1} height={FEET - 14} fill={INK} />
      <path d={m.stone} fill={PAPER} />
      <rect x={HOUSE_X1} y={0} width={4} height={FEET - 14} fill={PAPER} />
      {/* the open casement, the room behind it dark and empty */}
      <rect
        x={CASE.x0 - 8}
        y={CASE.top - 8}
        width={CASE.x1 - CASE.x0 + 16}
        height={CASE.bottom - CASE.top + 16}
        fill={PAPER}
      />
      <rect
        x={CASE.x0}
        y={CASE.top}
        width={CASE.x1 - CASE.x0}
        height={CASE.bottom - CASE.top}
        fill={INK}
      />
      {/* its shutter, swung open against the wall */}
      <path
        d={`M${CASE.x1} ${CASE.top}L158 90V186L${CASE.x1} ${CASE.bottom}Z`}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={gouge(141, 98, 141, 180, 1.1)} fill={PAPER} />
      {/* the curtain, blown out of the empty window */}
      <path
        d="M56 97H104C110 104 118 110 130 116C144 124 156 134 164 148C168 158 170 168 168 178C162 172 158 166 150 162C146 170 140 174 134 176C136 164 132 150 122 140C110 130 92 124 76 118C66 114 58 108 56 97Z"
        fill={RED}
      />
      <path d={gouge(84, 104, 138, 130, 1.1, 2) + gouge(118, 124, 152, 160, 1, 2.4)} fill={INK} />
      {/* the rod it hangs from, and its rings */}
      <path d={`M${CASE.x0} 99H${CASE.x1}`} stroke={PAPER} strokeWidth={1.8} />
      <g fill="none" stroke={PAPER} strokeWidth={1.2}>
        {[62, 76, 90].map((x) => (
          <circle key={x} cx={x} cy={100} r={2.6} />
        ))}
      </g>
      {/* the door, shut fast under its penthouse */}
      <path d="M34 212H150L162 226H22Z" fill={PAPER} />
      <path d={gouge(30, 220, 154, 220, 1)} fill={INK} />
      <rect
        x={52}
        y={228}
        width={68}
        height={80}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
      />
      <path d={m.door} fill={PAPER} />
      <rect x={18} y={FEET - 14} width={150} height={5} fill={INK} />

      <path d={footShadow(372, 34) + footShadow(486, 36)} fill={INK} />
      <Person pose={SOLANIO} at={[372, FEET]} scale={1.12} flip />
      <Person pose={SALARINO} at={[486, FEET]} scale={1.12} flip />
    </g>
  )
}

export const myDaughterMyDucats: LinocutArt = { width: W, height: H, Draw: MyDaughterMyDucats }
