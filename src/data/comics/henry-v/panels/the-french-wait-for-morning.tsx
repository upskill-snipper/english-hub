import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, gouge, n, ribbon, rng, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  H,
  NightGround,
  Pavilion,
  W,
  WatchFire,
  farCamp,
  nightMarks,
  type NightMarks,
  type P,
} from './agincourt-night'
import { FLEUR, Person } from './people'

/**
 * Act 3, Scene 7: "The French wait for morning", the thirteenth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1521, src/data/full-texts/henry-v.ts), whose setting is
 * "The French camp, near Agincourt":
 *
 * - "Enter the Constable of France, the Lord Rambures, Orleans, Dauphin with
 *   others." Four lords of France, drawn from the kit (./people.tsx): the
 *   Dauphin with his long dark hair and his circlet, the Constable bareheaded
 *   with his pointed beard and his sword, Orleans in his bonnet, clean-shaven,
 *   and Rambures in his bonnet with a short beard. They wear their long gowns
 *   with the lilies of France: nobody has armed yet ("'Tis midnight; I'll go
 *   arm myself"; "Now is it time to arm").
 * - "What a long night is this! I will not change my horse with any that
 *   treads but on four pasterns. Ch'ha! He bounds from the earth ... When I
 *   bestride him, I soar, I am a hawk." So the Dauphin stands by his horse,
 *   holding its rein, his other hand held out low to the lords as he praises
 *   it, his mouth open on a word. The horse is not ridden, for it is night;
 *   it stands with one forefoot lifted, its neck arched and its head high:
 *   "He is pure air and fire". "He's of the colour of the nutmeg": its coat is
 *   cut in fine lines over the ink, a brown between black and paper, and its
 *   mane, tail and legs are ink. Its cloth is sprinkled with the lilies, so it
 *   is the prince's horse. ("qui a les narines de feu", nostrils of fire, is
 *   left to the words: a red nostril shrinks at phone width to a red speck on
 *   a face.)
 * - Orleans takes the Dauphin's part ("He is simply the most active gentleman
 *   of France"), so he turns to him smiling; the Constable mocks ("Nay, for
 *   methought yesterday your mistress shrewdly shook your back"), so he stands
 *   back with his hand on his hip and his head up; Rambures is beside the
 *   Constable's tent: "the armour that I saw in your tent tonight, are those
 *   stars or suns upon it? Stars, my lord." So the Constable's pavilion stands
 *   open behind them on his armour, with stars cut on it.
 * - "My Lord High Constable, the English lie within fifteen hundred paces of
 *   your tents." So the English fires are small and far off along the
 *   horizon, cut in paper (./agincourt-night.tsx), and the French watch-fire
 *   is near and large, the spot colour, well clear of every face and hand.
 *
 * The French are drawn with the same care as the English: proud, well
 * dressed, at their ease, never as caricatures. Nothing is taken from a film
 * or stage production.
 *
 * Seeds: 1301 (the night), 1302 (the English fires), 1303 (the horse's coat).
 */

const HORIZON = 214
const FIRE: P = [446, 304]
/** The Constable's pavilion, its door open on his armour. */
const TENT: P = [804, 266]
const TENT_S = 1.3

const HORSE_AT: P = [128, 302]
const HORSE_S = 1.36

type Marks = NightMarks & {
  far: { tents: string; fires: string }
  coat: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const m = nightMarks(1301, {
    horizon: HORIZON,
    glows: [{ at: [FIRE[0], FIRE[1] - 34], reach: 210, strength: 0.9 }],
    stars: 30,
    // keep stars off the horse's head and the quotation's corner
    clear: (x, y) => (x < 300 && y > 60 && y < 220) || (x > 500 && y < 80),
  })
  const far = farCamp(1302, 330, 560, HORIZON, 30)
  // The horse's coat, "of the colour of the nutmeg": fine diagonal cuts over
  // the ink, in the horse's own frame, clipped to its body.
  let coat = ''
  const r = rng(1303)
  for (let x = -150; x < 120; x += 3.2)
    coat += gouge(x, 6 + between(r, -2, 2), x + 70, -176 + between(r, -2, 2), 0.46)
  cached = { ...m, far, coat }
  return cached
}

// ── The Dauphin's horse ──────────────────────────────────────────────────────
// Facing right, the hoofs on y 0, the withers 116 up: a courser, not a cart
// horse, with a deep chest, a high arched neck, a small head and fine legs.
// Its mane, tail and legs are ink, its coat a brown cut in fine lines.

/**
 * Body, neck and head as one shape: from the point of the chest down by the
 * girth and the belly to the stifle, under the hindquarters (the hind legs
 * cover it), up the buttock and over the croup and the back to the withers,
 * up the crest to the poll, down the face to the muzzle, back under the jaw
 * to the throat, and down the neck to the chest.
 */
const HORSE =
  'M58 -84C60 -74 52 -66 42 -63C24 -58 -14 -57 -30 -62C-35 -64 -38 -67 -40 -70L-62 -76' +
  'C-68 -84 -69 -96 -63 -104C-58 -111 -48 -114 -36 -112C-22 -109 0 -103 12 -108' +
  'C16 -110 18 -113 20 -116C24 -138 40 -168 60 -172C64 -173 68 -171 70 -168' +
  'C76 -158 83 -145 88 -135C91 -130 89 -124 85 -123C81 -123 77 -125 74 -127' +
  'C69 -128 62 -130 58 -135C56 -139 54 -141 52 -142C52 -122 57 -100 58 -84Z'
/** The ears, pricked forward, and the forelock between them. */
const EARS = 'M63 -170L61 -186L67 -172ZM68 -170L72 -184L73 -169Z'
const FORELOCK = 'M69 -170C74 -169 79 -164 81 -159C76 -160 72 -163 68 -167Z'
/** The line of the shoulder, cut in paper over the coat. */
const SHOULDER = gouge(26, -104, 50, -76, 0.7, -2.6)

/** A limb as a tapering shape through its joints, `w` its width at each. */
function taper(pts: Pt[], w: number[]): string {
  const left: Pt[] = []
  const right: Pt[] = []
  pts.forEach((p, i) => {
    const a = pts[Math.max(0, i - 1)]
    const b = pts[Math.min(pts.length - 1, i + 1)]
    const dx = b[0] - a[0]
    const dy = b[1] - a[1]
    const L = Math.hypot(dx, dy) || 1
    const nx = -dy / L
    const ny = dx / L
    left.push([p[0] + (nx * w[i]) / 2, p[1] + (ny * w[i]) / 2])
    right.push([p[0] - (nx * w[i]) / 2, p[1] - (ny * w[i]) / 2])
  })
  return 'M' + [...left, ...right.reverse()].map(([x, y]) => `${n(x)} ${n(y)}`).join('L') + 'Z'
}

/**
 * The legs, far ones first. A hind leg is cut whole from the stifle and the
 * buttock down by the hock to the fetlock, so it grows out of the body; a
 * foreleg tapers from the elbow. The near forefoot is lifted: "He bounds from
 * the earth".
 */
const LEGS = {
  farHind:
    'M-38 -68C-42 -57 -47 -48 -49 -42L-47 -13L-45 -6L-53 -6L-55 -13L-58 -40C-61 -52 -61 -64 -57 -74Z',
  farFore: taper(
    [
      [33, -66],
      [35, -36],
      [34, -10],
      [38, -4],
    ],
    [13, 8, 6, 7],
  ),
  nearHind:
    'M-43 -70C-47 -58 -55 -48 -57 -42L-55 -13L-53 -6L-61 -6L-63 -13L-66 -40C-70 -54 -70 -70 -65 -82Z',
  nearFore: taper(
    [
      [46, -72],
      [60, -48],
      [57, -27],
      [59, -21],
    ],
    [15, 9, 6, 7],
  ),
}
const HOOFS = {
  far: 'M38 -6L46 -6L48 0L36 0ZM-54 -6L-46 -6L-44 0L-56 0Z',
  near: 'M-62 -6L-54 -6L-52 0L-64 0ZM55 -23L63 -20L62 -13L54 -16Z',
}
const TAIL: Pt[] = [
  [-63, -106],
  [-73, -103],
  [-81, -92],
  [-85, -74],
  [-83, -54],
  [-78, -38],
]
/** The mane, lying along the crest. */
const MANE: Pt[] = [
  [64, -170],
  [52, -163],
  [41, -150],
  [31, -134],
  [24, -120],
]
/** The saddle, and the cloth under it sprinkled with the lilies of France. */
const SADDLE =
  'M-30 -109C-28 -118 -18 -120 -8 -114L6 -113C10 -118 16 -120 20 -115C14 -104 -22 -102 -30 -109Z'
const CLOTH = 'M-38 -108C-22 -101 8 -101 24 -110L27 -78C8 -72 -20 -72 -40 -78Z'
const CLOTH_LILIES: [number, number][] = [
  [-28, -95],
  [-10, -93],
  [8, -95],
  [-19, -83],
  [-1, -82],
  [17, -85],
]
/** The bridle, in paper on the head: the browband, the cheek strap and the noseband. */
const BRIDLE = 'M65 -163L72 -165M65 -166L79 -126M72 -138L87 -137'
/** Where the rein leaves the bit, in the horse's frame (the Dauphin holds the other end). */
const BIT: P = [79, -126]

function Horse({ uid, coat }: { uid: string; coat: string }) {
  const clip = `${uid}-horse`
  const tail = ribbon(TAIL, 18, 0.55, false)
  const mane = ribbon(MANE, 12, 0.6, true)
  return (
    <g transform={`translate(${HORSE_AT[0]} ${HORSE_AT[1]}) scale(${HORSE_S})`}>
      <defs>
        <clipPath id={clip}>
          <path d={HORSE} />
        </clipPath>
      </defs>
      {/* the paper halo round the whole horse */}
      <path
        d={HORSE + EARS + HOOFS.far + HOOFS.near + tail + mane + Object.values(LEGS).join('')}
        fill={PAPER}
        stroke={PAPER}
        strokeWidth={3.4}
        strokeLinejoin="round"
      />
      {/* far legs, then the tail and the body, then the near legs */}
      <path d={LEGS.farHind + LEGS.farFore + HOOFS.far} fill={INK} />
      <path d={tail} fill={INK} />
      <path d={HORSE + EARS} fill={INK} />
      <path d={coat} fill={PAPER} clipPath={`url(#${clip})`} />
      <path d={SHOULDER} fill={PAPER} />
      <path
        d={LEGS.nearHind + LEGS.nearFore}
        fill={INK}
        stroke={PAPER}
        strokeWidth={1.2}
        strokeLinejoin="round"
      />
      <path d={HOOFS.near} fill={INK} stroke={PAPER} strokeWidth={0.8} strokeLinejoin="round" />
      {/* the black mane and forelock, and the strands of the mane and the tail */}
      <path d={mane + FORELOCK} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
      <path
        d={
          gouge(58, -166, 48, -158, 0.8, 0.6) +
          gouge(48, -158, 38, -144, 0.8, 0.6) +
          gouge(39, -146, 30, -130, 0.7, 0.6) +
          gouge(-70, -100, -80, -66, 0.8, -1.4) +
          gouge(-76, -96, -82, -50, 0.7, -2)
        }
        fill={PAPER}
      />
      {/* the cloth with the lilies, and the saddle */}
      <path d={CLOTH} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
      <g fill={INK}>
        {CLOTH_LILIES.map(([x, y]) => (
          <path key={`${x} ${y}`} d={FLEUR} transform={`translate(${x} ${y}) scale(0.95)`} />
        ))}
      </g>
      <path d={SADDLE} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
      {/* the eye, the wide nostril, the line of the mouth, the bridle */}
      <path d="M69 -155Q72.6 -158.4 76 -155.4Q72.6 -153 69 -155Z" fill={PAPER} />
      <path d="M82 -134Q85.6 -136 86.2 -131.8Q84 -130.8 82 -134Z" fill={PAPER} />
      <path d="M77.6 -125.6Q81.6 -126.2 85.4 -124.8" fill="none" stroke={PAPER} strokeWidth={0.9} />
      <path d={BRIDLE} fill="none" stroke={PAPER} strokeWidth={1.5} strokeLinecap="round" />
    </g>
  )
}

/** The horse's frame mapped onto the drawing. */
const onHorse = ([x, y]: P): P => [HORSE_AT[0] + x * HORSE_S, HORSE_AT[1] + y * HORSE_S]

/**
 * The Constable's armour on its stand in his tent: "are those stars or suns
 * upon it? Stars, my lord." A breastplate on a post with a bascinet on top,
 * in paper with an ink edge, five-pointed stars cut on the breast in ink. In
 * the tent's own frame.
 */
function Armour() {
  const star = (x: number, y: number, r: number) => {
    let d = ''
    for (let k = 0; k < 5; k++) {
      const a = ((-90 + k * 72) * Math.PI) / 180
      const b = ((-90 + k * 72 + 36) * Math.PI) / 180
      d += `${k ? 'L' : 'M'}${n(x + Math.cos(a) * r)} ${n(y + Math.sin(a) * r)}L${n(x + Math.cos(b) * r * 0.42)} ${n(y + Math.sin(b) * r * 0.42)}`
    }
    return d + 'Z'
  }
  return (
    <g>
      <path d="M0 0V-22" stroke={PAPER} strokeWidth={2.2} />
      <path
        d="M-9 -40C-9 -45 -4.6 -47 0 -47C4.6 -47 9 -45 9 -40L7.6 -22C4 -19.6 -4 -19.6 -7.6 -22Z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={0.9}
      />
      <path d="M-5.6 -48C-5.6 -55 5.6 -55 5.6 -48Z" fill={PAPER} stroke={INK} strokeWidth={0.8} />
      <path d={star(-3.2, -37.4, 2.9) + star(3.4, -33, 2.7) + star(-2, -27, 2.5)} fill={INK} />
    </g>
  )
}

function FrenchWaitForMorning({ uid }: ArtProps) {
  const m = marks()
  const bit = onHorse(BIT)
  return (
    <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
      <NightGround m={m} />
      {/* the English fires far off across the field */}
      <path d={m.far.tents} fill={INK} stroke={PAPER} strokeWidth={0.9} />
      <path d={m.far.fires} fill={PAPER} />

      {/* the French pavilions, and the Constable's, open on his armour */}
      <Pavilion at={[872, 236]} s={0.8} rich lit={-1} />
      <Pavilion at={TENT} s={TENT_S} rich lit={-1} open>
        <Armour />
      </Pavilion>

      <WatchFire at={FIRE} s={1.15} />

      {/* Rambures, by the Constable's tent */}
      <Person
        at={[724, 306]}
        scale={0.98}
        flip
        pose={{
          look: 'french-lord',
          variant: 2,
          far: {
            pts: [
              [-3, -130],
              [-5, -106],
              [-2, -84],
            ],
          },
          near: {
            pts: [
              [4, -130],
              [8, -106],
              [6, -84],
            ],
          },
        }}
      />

      {/* the Constable, his hand on his hip, mocking */}
      <Person
        at={[644, 316]}
        scale={1.1}
        flip
        pose={{
          look: 'constable',
          head: { rot: -5 },
          far: {
            pts: [
              [-3, -130],
              [-6, -106],
              [-3, -84],
            ],
          },
          near: {
            pts: [
              [4, -130],
              [20, -112],
              [9, -94],
            ],
            hand: 'mitt',
            deg: 200,
          },
        }}
      />

      {/* Orleans, taking the Dauphin's part */}
      <Person
        at={[548, 330]}
        scale={1.22}
        flip
        pose={{
          look: 'french-lord',
          variant: 0,
          mouth: 'smile',
          head: { rot: 3 },
          far: {
            pts: [
              [-3, -130],
              [-6, -106],
              [-3, -84],
            ],
          },
          near: {
            pts: [
              [4, -130],
              [10, -106],
              [8, -84],
            ],
          },
        }}
      />

      {/* the horse */}
      <Horse uid={uid} coat={m.coat} />

      {/* the rein, from the bit to the Dauphin's hand */}
      <path
        d={`M${n(bit[0])} ${n(bit[1])}Q${n(bit[0] + 6)} ${n(bit[1] + 40)} 270 180`}
        fill="none"
        stroke={PAPER}
        strokeWidth={3.6}
      />
      <path
        d={`M${n(bit[0])} ${n(bit[1])}Q${n(bit[0] + 6)} ${n(bit[1] + 40)} 270 180`}
        fill="none"
        stroke={INK}
        strokeWidth={1.6}
      />

      {/* the Dauphin, praising him */}
      <Person
        at={[300, 326]}
        scale={1.22}
        pose={{
          look: 'dauphin',
          mouth: 'open',
          head: { rot: -4 },
          far: {
            pts: [
              [-3, -130],
              [-16, -110],
              [-25, -118],
            ],
            hand: 'grip',
            deg: 200,
          },
          near: {
            pts: [
              [4, -130],
              [18, -110],
              [36, -114],
            ],
            hand: 'open',
            deg: -18,
            thumb: -1,
          },
        }}
      />
    </g>
  )
}

export const frenchWaitForMorning: LinocutArt = { width: W, height: H, Draw: FrenchWaitForMorning }
