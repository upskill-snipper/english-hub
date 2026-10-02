import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { CaesarsSeat, PompeyStatue, benches, column, nichePath } from './capitol'
import { Person, limb, type P } from './people'

/**
 * Act 3, Scene 1: "Antony alone with the body", the eighth moment in the
 * guide's timeline: the hall of "The assassination" (./capitol.tsx), after
 * it. Every detail is from the scene in the held edition (Project Gutenberg
 * #1522, src/data/full-texts/julius-caesar.ts):
 *
 * - "Exeunt all but Antony." The Senators have gone ("The Senators and People
 *   retire in confusion"), so their benches are empty, and Caesar's seat
 *   stands empty before Pompey's statue. It is still day: the door on the
 *   right opens on Rome in daylight.
 * - THE BODY IS NOT SHOWN. Antony stands over it ("O, pardon me, thou bleeding
 *   piece of earth"; "Over thy wounds now do I prophesy"), and it lies at his
 *   feet below the bottom of the picture, which cuts him at the knee. The floor
 *   the picture shows is the floor beyond it. He is the kit's Antony
 *   (./people.tsx), known by his curls.
 * - The prophecy: "Domestic fury and fierce civil strife Shall cumber all the
 *   parts of Italy ... And Caesar's spirit, ranging for revenge, ... Shall in
 *   these confines with a monarch's voice Cry havoc and let slip the dogs of
 *   war". To let slip is to loose a hound from its leash. So the dogs of war
 *   are drawn as the Macbeth panels draw Macbeth's "scorpions", a figure of
 *   speech made visible in the spot colour: three hounds at full stretch, in
 *   collars, the ends of their slipped leashes trailing, running out through
 *   the door into Rome, and Antony points after them.
 *
 * SAFEGUARDING. No body, no wound and no blood: "thy wounds" and "this costly
 * blood" are left to the words. The red is the hounds alone, running away
 * from where the body lies.
 *
 * WHY HE STANDS AND LOOKS UP (2 October 2026). He was first cut kneeling,
 * cropped at the hip to keep the body out of the picture, and read as a man
 * sitting on the floor. Then his head was bowed to the body below the frame,
 * and his eyes fell on the empty floor in front of him, which said "nothing is
 * here". Standing, with his eyes on the hounds, he reads as the man who
 * prophesies.
 *
 * Seeds: 7401 (wall and floor), 7402 (niche).
 */

const W = 860
const H = 340
const WALL = 236
const NICHE_X = 456
const DOOR = { x0: 676, x1: 828, top: 30 }

type Marks = {
  wall: string
  niche: string
  floor: string
  floorShade: string
  city: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(7401)
  // The hall is lit from the open door on the right.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - 760) * 0.7, (y - 150) * 1.2) / 460) * 0.85, 0.07)
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: WALL }, light, {
    spacing: 6.6,
    len: [16, 60],
    gap: [6, 22],
  })
  const niche = gougeField(
    rng(7402),
    { x0: NICHE_X - 92, x1: NICHE_X + 92, y0: 4, y1: WALL },
    (x, y) => clamp(0.06 + (y / WALL) * 0.16 - Math.abs(x - NICHE_X) / 900),
    { spacing: 5.6, len: [10, 34], gap: [8, 20], max: 2.4 },
  )
  let floor = ''
  const V: [number, number] = [560, 40]
  for (let xt = -900; xt < 1800; xt += 52) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (WALL - V[1]))
    floor += wedge(xt, WALL, xb, H, 0.9, 3)
  }
  for (const [y, w] of [
    [248, 1],
    [264, 1.5],
    [288, 2],
    [318, 2.6],
  ] as const)
    floor += gouge(-10, y + between(r, -1, 1), W + 10, y + between(r, -1, 1), w)
  let floorShade = ''
  for (let y = WALL + 2; y < WALL + 16; y += 3)
    floorShade += gouge(0, y, W, y, 2.2 - (y - WALL) * 0.12)
  // Rome beyond the door: roofs, a temple's front and the far hills, in ink lines.
  const city =
    'M676 188L700 176L724 188M708 188V214M736 196L770 180L804 196M744 196V214M760 196V214M776 196V214M792 196V214' +
    'M676 214H828M676 170Q716 160 752 166T828 158'
  cached = { wall, niche, floor, floorShade, city }
  return cached
}

/**
 * One of the "dogs of war": a hound at full stretch, facing right, in its
 * own frame (about 80 long, the feet at y 0), printed in the spot colour.
 */
const HOUND_BODY =
  'M-16 -20C-10 -28 8 -30 24 -28C32 -27 38 -26 42 -24C46 -30 50 -34 56 -34L61 -31L70 -29L68 -24L59 -23C55 -21 51 -17 47 -15C40 -12 31 -12 21 -13C8 -13 -6 -11 -13 -13Z'
const HOUND_EAR = 'M51 -32L46 -40L55 -35Z'
/** "let slip": a collar, and the loose end of the leash it has slipped, trailing back. */
const HOUND_COLLAR = 'M43.6 -26.4L47.6 -15.4'
const HOUND_LEASH = 'M45.6 -21C38 -30 30 -34 22 -36C16 -37 12 -40 10 -44'
const HOUND_LIMBS = [
  limb([
    [42, -16],
    [53, -11],
    [65, -6],
  ]),
  limb([
    [37, -15],
    [46, -7],
    [57, -3],
  ]),
  limb([
    [-9, -15],
    [-20, -9],
    [-33, -6],
  ]),
  limb([
    [-4, -14],
    [-12, -5],
    [-26, 0],
  ]),
  limb([
    [-14, -22],
    [-24, -28],
    [-34, -30],
  ]),
]

function Hound({ at, scale = 1, rot = 0 }: { at: P; scale?: number; rot?: number }) {
  const t = `translate(${n(at[0])} ${n(at[1])}) rotate(${n(rot)}) scale(${n(scale)})`
  return (
    <g transform={t} strokeLinecap="round" strokeLinejoin="round">
      <g fill={INK} stroke={INK} strokeWidth={3.4}>
        <path d={HOUND_BODY + HOUND_EAR} />
      </g>
      <g fill="none" stroke={INK} strokeWidth={8}>
        {HOUND_LIMBS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke={RED} strokeWidth={4.6}>
        {HOUND_LIMBS.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d={HOUND_BODY + HOUND_EAR} fill={RED} />
      <path d={gouge(54, -29, 58, -28.6, 0.7)} fill={INK} />
      {/* the collar, and the end of the leash it has slipped */}
      <path d={HOUND_COLLAR} fill="none" stroke={INK} strokeWidth={2.6} />
      <path d={HOUND_LEASH} fill="none" stroke={INK} strokeWidth={1.6} />
    </g>
  )
}

const COLUMNS = [92, 214, 336, 576, 650]

function AntonyAloneWithTheBody({ uid }: ArtProps) {
  const m = marks()
  const nicheClip = `${uid}-niche`
  const doorClip = `${uid}-door`
  const cols = COLUMNS.map((x) => column(x, 14, WALL, 26))
  const bench = benches(40, 300, WALL, 3, 18, 12)
  const nicheD = nichePath(92, -232)
  const doorD = `M${DOOR.x0} ${WALL}V${DOOR.top + 76}A76 76 0 0 1 ${DOOR.x1} ${DOOR.top + 76}V${WALL}Z`
  return (
    <>
      <defs>
        <clipPath id={nicheClip}>
          <path d={nicheD} transform={`translate(${NICHE_X} ${WALL})`} />
        </clipPath>
        <clipPath id={doorClip}>
          <path d={doorD} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [300, 200], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={WALL} fill={INK} />
        <path d={m.wall} fill={PAPER} />
        {/* the open door on the right, and Rome in the daylight beyond */}
        <path d={doorD} fill={PAPER} stroke={PAPER} strokeWidth={LINE.frame} />
        <path d={m.city} fill="none" stroke={INK} strokeWidth={LINE.fine} />
        {/* the niche, dark, behind Pompey's statue */}
        <path d={nicheD} transform={`translate(${NICHE_X} ${WALL})`} fill={INK} />
        <g clipPath={`url(#${nicheClip})`}>
          <path d={m.niche} fill={PAPER} />
        </g>
        <path
          d={nicheD}
          transform={`translate(${NICHE_X} ${WALL})`}
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.bold}
        />
        <path d={cols.map((c) => c.white).join('')} fill={PAPER} />
        <path d={cols.map((c) => c.flutes).join('')} fill={INK} />
        <path d={cols.map((c) => c.joints).join('')} stroke={INK} strokeWidth={LINE.fine} />
        <rect x={0} y={WALL} width={W} height={H - WALL} fill={PAPER} />
        <path d={m.floor} fill={INK} />
        <path d={m.floorShade} fill={INK} />
        {/* the Senators' benches, empty: they "retire in confusion" */}
        <path d={bench.risers} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={bench.seats} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <PompeyStatue at={[NICHE_X, WALL + 4]} scale={0.96} flip />
        {/* Caesar's seat, empty */}
        <CaesarsSeat at={[540, 292]} scale={1} />

        {/* "Cry havoc and let slip the dogs of war": the hounds run out into Rome */}
        <g className="lc-drift" style={timing({ delay: 0.3 })}>
          <Hound at={[600, 268]} scale={0.9} rot={-4} />
          <Hound at={[690, 228]} scale={0.74} rot={-8} />
          <g clipPath={`url(#${doorClip})`}>
            <Hound at={[766, 196]} scale={0.58} rot={-10} />
          </g>
        </g>

        {/* Antony, standing over the body, which lies at his feet below the picture */}
        <Person
          at={[148, 424]}
          scale={1.74}
          pose={{
            look: 'antony',
            head: { rot: -7 },
            far: {
              pts: [
                [-4, -130],
                [4, -110],
                [10, -120],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [5, -128],
                [26, -124],
                [48, -131],
              ],
              hand: 'point',
              deg: -16,
            },
          }}
        />
      </g>
    </>
  )
}

export const antonyAloneWithTheBody: LinocutArt = {
  width: W,
  height: H,
  Draw: AntonyAloneWithTheBody,
}
