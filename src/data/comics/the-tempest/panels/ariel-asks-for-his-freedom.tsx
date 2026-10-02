import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Ariel, Person, STAFF_HELD, seatedFrame, type P } from './people'
import { Cell, LimeTree } from './the-cell'

/**
 * Act 1, Scene 2: "Ariel asks for his freedom", the third moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1540, src/data/full-texts/the-tempest.ts):
 *
 * - "Thou art inclin'd to sleep; 'tis a good dulness ... [Miranda sleeps.]"
 *   Miranda is still before the cell, asleep where she sat to hear the story,
 *   her head fallen forward and her hands in her lap, until "Awake, dear
 *   heart, awake!".
 * - "Come away, servant, come! I am ready now. Approach, my Ariel. Come!
 *   [Enter Ariel.]" Ariel comes as himself, the spirit of the kit
 *   (./people.tsx): cut in paper, his body streaming away into air below the
 *   waist, his hair streaming back, as one who will "ride On the curl'd
 *   clouds".
 * - "What is the time o' th' day? / Past the mid season." So it is the
 *   afternoon, and the storm is gone: the sky is clear and the sea calm.
 * - "Is there more toil? Since thou dost give me pains, Let me remember thee
 *   what thou hast promis'd ... My liberty." "I prithee, Remember I have done
 *   thee worthy service". Ariel hangs in the air before his master, both
 *   hands held out open, pleading.
 * - "How now! moody?" "Thou liest, malignant thing!" "Dost thou forget From
 *   what a torment I did free thee?" Prospero, staff in hand (held clear of
 *   his face, as the kit's STAFF_HELD holds it), frowns and points. (His
 *   anger was first marked in red on his cheek; on a face this small it read
 *   as red lips, so it is left to the frown.) The spot colour is the fire
 *   Caliban "does make" for them, inside the cell's door.
 * - The torment he means is the "cloven pine" in which Sycorax confined
 *   Ariel until "it was mine art ... that made gape The pine, and let thee
 *   out". The pine stands far off on a rise, split and empty: the kit's rule
 *   is that it is described, never shown with Ariel in it or in pain. So is
 *   the oak Prospero threatens, which is not drawn at all.
 *
 * Seeds: 3301 (sky), 3302 (sea), 3303 (ground), 3304 (the rise and the pine).
 *
 * REVIEWED 2 October 2026. Prospero's staff ran up through his face. Ariel's
 * two hands lay one over the other and read as clapping; they are held apart
 * now, one at his breast and one at his waist (raised to his face, one read
 * as a wave of greeting). Cut in paper on a pale sky he was faint, so
 * the sky darkens behind him, as the style guide asks of a lit figure, and
 * his white body shows against it. The pine's two halves met its trunk at a
 * hairline, which the print's rough edge cut through, so a bare post stood
 * under a floating V; it is redrawn as one tree split from the crown.
 */

const W = 860
const H = 340
const GROUND = 330
const HORIZON = 190
const edge = (x: number) => 236 + 4 * Math.sin(x / 41) + Math.max(0, (x - 700) / 12) ** 1.2

type Marks = {
  sky: string
  sea: string
  land: string
  ground: string
  tufts: string
  rise: string
  riseCuts: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A clear afternoon sky, cut lightly in ink, heavier at the top of the
  // block, and heavier again behind Ariel, so his white body shows.
  const sky = gougeField(
    rng(3301),
    { x0: 0, x1: W, y0: 4, y1: HORIZON - 2 },
    (x, y) =>
      clamp(
        0.08 +
          (1 - y / HORIZON) * 0.38 +
          0.8 * Math.exp(-(((x - 600) / 170) ** 2) - ((y - 130) / 120) ** 2),
      ),
    { spacing: 6, len: [36, 130], gap: [14, 44], max: 2.8 },
  )
  // The sea, calm now: long low lines.
  const q = rng(3302)
  const sea = gougeField(
    q,
    { x0: 0, x1: W, y0: HORIZON + 3, y1: 250 },
    (x, y) => clamp(0.3 - ((y - HORIZON) / 60) * 0.12),
    { spacing: 5, len: [30, 90], gap: [8, 26], max: 1.8 },
  )
  let land = `M-10 ${H + 10}L-10 ${n(edge(0))}`
  for (let x = 0; x <= W + 10; x += 8) land += `L${x} ${n(edge(x))}`
  land += `L${W + 10} ${H + 10}Z`
  const g = rng(3303)
  const ground = gougeField(
    g,
    { x0: 0, x1: W, y0: 240, y1: H },
    (x, y) => clamp(((y - 236) / 104) ** 1.5 * 0.5 + 0.06),
    { spacing: 6, len: [10, 46], gap: [14, 44], max: 2 },
  )
  let tufts = ''
  for (let i = 0; i < 90; i++) {
    const x = between(g, 0, W)
    const y = between(g, edge(x) + 6, H)
    if (y > H - 2) continue
    const h = 3 + clamp((y - 240) / 100) * 7
    tufts += `M${n(x - 2.4)} ${n(y)}l${n(-1.2)} ${n(-h)}M${n(x)} ${n(y)}l0 ${n(-h * 1.25)}M${n(x + 2.4)} ${n(y)}l${n(1.6)} ${n(-h)}`
  }
  // The far rise on the right, across the water, where the pine stands.
  const k = rng(3304)
  let rise = `M700 ${HORIZON + 1}`
  for (let x = 700; x <= W + 10; x += 6)
    rise += `L${n(x)} ${n(HORIZON - 18 * Math.sin(((x - 700) / 170) * Math.PI * 0.9) - 3 * Math.sin(x / 7))}`
  rise += `L${W + 10} ${HORIZON + 1}Z`
  let riseCuts = ''
  for (let i = 0; i < 22; i++) {
    const x = between(k, 712, 850)
    const y = between(k, HORIZON - 12, HORIZON - 2)
    riseCuts += gouge(x, y, x + between(k, 8, 18), y + between(k, 0.4, 1.4), 0.9)
  }
  cached = { sky, sea, land, ground, tufts, rise, riseCuts }
  return cached
}

/**
 * The cloven pine, empty, in its own frame: its foot at (0, 0), about 156
 * tall. A pine trunk split from its crown down to a third of its height, the
 * two halves bowed apart in a V with the sky between them, each still
 * carrying its flat clumps of needles on short boughs, splinters standing up
 * in the fork and the pale split wood cut along the inner faces: "it was
 * mine art ... that made gape The pine". The halves overlap the trunk by
 * several units, so the print's rough edge cannot part them from it. (Tiers
 * of branches either side of one trunk, cut first, read as a mast or a sign;
 * then halves joined to the trunk at a hairline printed as a floating V on a
 * bare post.)
 */
const PINE_TRUNK = 'M-10 0C-9 -22 -8.4 -46 -8 -70L8 -70C8.4 -46 9 -22 10 0Z'
const PINE_HALVES =
  'M-8.4 -62C-13 -92 -21 -122 -37 -151L-29 -155C-15 -128 -6 -100 -0.8 -66Z' +
  'M8.4 -62C13 -92 20 -120 35 -149L27 -153C14 -126 6 -100 0.8 -66Z'
/** Short boughs from the halves, each ending in a clump of needles. */
const PINE_BOUGHS = [
  [-30, -138, -44, -134],
  [-20, -112, -33, -106],
  [28, -136, 42, -132],
  [18, -110, 31, -104],
]
  .map(([x1, y1, x2, y2]) => `M${x1} ${y1}L${x2} ${y2}`)
  .join('')
/**
 * A clump of needles at (x, y), `w` wide and `h` deep: a low dome on top and
 * a fringe of spikes underneath, as a pine's boughs hang. (Small flat clumps
 * with a few points, cut first, read at panel size as bats.)
 */
function needleClump(x: number, y: number, w: number, h: number): string {
  const pts: string[] = []
  const k = 18
  for (let i = 0; i <= k; i++) {
    const a = Math.PI + (i / k) * Math.PI
    pts.push(`${n(x + Math.cos(a) * w)} ${n(y + Math.sin(a) * h + (i % 2 ? h * 0.18 : 0))}`)
  }
  for (let i = 1; i < 12; i++) {
    const px = x + w - (i / 12) * 2 * w
    pts.push(`${n(px)} ${n(y + (i % 2 ? h * 0.9 : h * 0.2))}`)
  }
  return 'M' + pts.join('L') + 'Z'
}
const NEEDLES = [
  [-34, -152, 19, 8],
  [-49, -133, 15, 6.5],
  [-37, -106, 13, 6],
  [31, -150, 19, 8],
  [47, -131, 15, 6.5],
  [35, -104, 13, 6],
]
  .map(([x, y, w, h]) => needleClump(x, y, w, h))
  .join('')
/** Splinters standing up in the fork, in ink against the sky. */
const SPLINTERS = 'M-4 -66L-5.6 -80L-2 -68ZM-0.6 -67L0.6 -84L2 -68ZM2.6 -67L5.4 -78L4.6 -66Z'
/** The pale split wood along the inner face of each half, and the bark, cut in paper. */
const SPLIT_CUTS =
  gouge(-3.6, -72, -16, -128, 0.9, -0.6) +
  gouge(3.6, -72, 15, -128, 0.9, 0.6) +
  gouge(-4, -8, -3.4, -54, 0.9) +
  gouge(3.6, -14, 4, -58, 0.8)

const PROSPERO: P = [404, GROUND]
const MIRANDA: P = [262, GROUND - 6]
const ARIEL: P = [592, 290]
const SEAT = 44

function ArielAsksForHisFreedom({ uid }: ArtProps) {
  const m = marks()
  const sf = seatedFrame(SEAT)
  const seaClip = `${uid}-sea`
  return (
    <>
      <defs>
        <clipPath id={seaClip}>
          <rect x={0} y={HORIZON} width={W} height={70} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [500, 200], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <g clipPath={`url(#${seaClip})`}>
          <path d={m.sea} fill={INK} />
        </g>

        {/* across the water, on a far rise, the cloven pine, split and empty */}
        <path d={m.rise} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.riseCuts} fill={PAPER} />
        <g transform={`translate(790 ${HORIZON - 9}) scale(0.86)`}>
          <g stroke={PAPER} strokeWidth={2.8} strokeLinejoin="round" strokeLinecap="round">
            <path d={PINE_TRUNK + PINE_HALVES + NEEDLES + SPLINTERS} fill={INK} />
            <path d={PINE_BOUGHS} fill="none" strokeWidth={6.4} />
          </g>
          <path d={PINE_TRUNK} fill={INK} />
          <path d={PINE_HALVES} fill={INK} />
          <path d={NEEDLES + SPLINTERS} fill={INK} />
          <path d={PINE_BOUGHS} fill="none" stroke={INK} strokeWidth={3.2} strokeLinecap="round" />
          <path d={SPLIT_CUTS} fill={PAPER} />
        </g>
        <path d={`M0 ${HORIZON}H700`} stroke={INK} strokeWidth={LINE.fine} />

        {/* the ground before the cell */}
        <path d={m.land} fill={PAPER} />
        <path d={m.land} fill="none" stroke={INK} strokeWidth={LINE.bold} />
        <path d={m.ground} fill={INK} />
        <path d={m.tufts} stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
        <LimeTree at={[34, 300]} scale={0.76} />
        <Cell at={[124, 300]} scale={0.8} glow />

        {/* Miranda, asleep where she sat, her head fallen forward */}
        <path
          d="M226 325C222 310 228 292 240 286C252 281 272 281 284 286C296 292 300 310 298 325Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={gouge(234, 294, 258, 288, 1.4, -0.8) + gouge(264, 288, 288, 294, 1.2, -0.6)}
          fill={PAPER}
        />
        <Person
          at={MIRANDA}
          pose={{
            look: 'miranda',
            seated: { seat: SEAT },
            head: { rot: 32 },
            eye: 'shut',
            far: {
              pts: [
                [-3, sf.shoulder[1]],
                [2, sf.shoulder[1] + 22],
                [20, sf.waist[1] - 2],
              ],
              deg: 8,
            },
            near: {
              pts: [
                [3, sf.shoulder[1]],
                [10, sf.shoulder[1] + 22],
                [26, sf.waist[1] - 4],
              ],
              deg: 6,
            },
          }}
        />

        {/* Prospero, staff in hand, frowning, pointing: "Dost thou forget?" */}
        <Person
          at={PROSPERO}
          scale={1.2}
          pose={{
            look: 'prospero',
            head: { rot: -4 },
            frown: true,
            far: {
              pts: [
                [-4, -130],
                [16, -120],
                [42, -124],
              ],
              hand: 'point',
              deg: -6,
            },
            near: STAFF_HELD.near,
            staff: STAFF_HELD.staff,
          }}
        />

        {/* Ariel, in the air before his master, both hands held out: "My liberty." */}
        <g className="lc-rise" style={timing({ delay: 0.4, dur: 1.6 })}>
          <Ariel
            at={ARIEL}
            scale={1.12}
            flip
            pose={{
              form: 'air',
              head: { rot: 8 },
              trail: 1.2,
              far: {
                pts: [
                  [-3, -134],
                  [14, -126],
                  [34, -126],
                ],
                deg: -8,
                thumb: -1,
              },
              near: {
                pts: [
                  [4, -132],
                  [16, -106],
                  [36, -96],
                ],
                deg: 8,
                thumb: -1,
              },
            }}
          />
        </g>
      </g>
    </>
  )
}

export const arielAsksForHisFreedom: LinocutArt = {
  width: W,
  height: H,
  Draw: ArielAsksForHisFreedom,
}
