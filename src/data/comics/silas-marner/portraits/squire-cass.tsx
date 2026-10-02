import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  combedHair,
  hatch,
  inside,
  once,
  portraitGround,
  smooth,
  type Knot,
} from './common'

/**
 * Squire Cass, as George Eliot describes him, and nothing else. Chapter 9,
 * coming in late to breakfast in the dark wainscoted parlour of the Red
 * House, where Godfrey has waited for him:
 *
 *   "a tall, stout man of sixty, with a face in which the knit brow and
 *   rather hard glance seemed contradicted by the slack and feeble mouth.
 *   His person showed marks of habitual neglect, his dress was slovenly"
 *
 * So: an old, heavy man in profile, facing right; big and broad, his coat
 * strained over a round stomach at the bottom of the block ("tall, stout");
 * the brow drawn down hard over the nose and creased between the eyes ("the
 * knit brow"); a narrow eye under a heavy lid, looking straight ahead, with a
 * bag under it ("rather hard glance"); and below them, against them, a loose
 * mouth with the lower lip hanging and the lips a little apart ("the slack
 * and feeble mouth"), over heavy jowls and a double chin. His thin grey hair
 * is cut in paper, as the panels cut it (SQUIRE_HAIR in ../panels/people.tsx),
 * gone from the top of his head. "His dress was slovenly": his neckcloth is
 * knotted loosely and pulled askew, one end hanging out over his waistcoat,
 * the top buttons of the waistcoat are undone, and his coat is creased. He
 * matches the Squire of the panels. There is no red in this plate: Eliot
 * gives his face no colour until he is "purple with anger", later in the
 * chapter.
 *
 * His clothes are the dress of a country squire of about 1800, worn badly.
 * Nothing here comes from a film or stage production.
 *
 * Seeds: 5601 for the ground, 5602 for the cuts in the figure.
 */

const HEAD_K: Knot[] = [
  [110, 270, 1],
  [106, 242],
  [92, 212],
  [82, 176],
  [80, 136],
  [90, 98],
  [112, 66],
  [146, 46],
  [184, 40],
  [212, 50],
  [227, 70],
  [232, 92],
  [235.5, 109],
  [230, 121],
  [235, 133],
  [244, 151],
  [251, 166, 1],
  [245, 171.5],
  [238, 172.5, 1],
  [239.5, 178.5],
  [236, 182, 1],
  [240, 189],
  [235, 196],
  [238.5, 206],
  [237, 217],
  [231, 227],
  [227, 238],
  [221, 248],
  [219, 258],
  [217, 270, 1],
]
const HEAD = smooth(HEAD_K)

/** Thin grey hair over the back and sides of the head, gone from the top. */
const HAIR_K: Knot[] = [
  [150, 50],
  [128, 58],
  [106, 76],
  [90, 104],
  [82, 140],
  [86, 176],
  [98, 206, 1],
  [116, 196],
  [130, 170],
  [142, 150],
  [156, 132],
  [168, 116],
  [180, 112],
  [190, 116],
  [196, 104],
  [186, 86],
  [172, 70],
]
const HAIR = smooth(HAIR_K)

/** A big, heavy body: broad shoulders and a round stomach pushing the coat out in front. */
const COAT = smooth([
  [-8, 330, 1],
  [-6, 288],
  [10, 254],
  [44, 232],
  [92, 226],
  [130, 240],
  [176, 252],
  [224, 254],
  [266, 264],
  [298, 284],
  [318, 308],
  [326, 330, 1],
])
/** His waistcoat over the stomach, its top buttons undone. */
const WAISTCOAT = smooth([
  [198, 260, 1],
  [242, 260],
  [278, 276],
  [304, 300],
  [316, 330, 1],
  [216, 330, 1],
  [208, 296],
])
/** The shirt showing in the gap where the waistcoat is unbuttoned. */
const SHIRT = smooth([
  [204, 262, 1],
  [230, 262, 1],
  [238, 284],
  [226, 300, 1],
  [214, 286],
])
/** The neckcloth, knotted loosely and askew round a thick neck. */
const NECKCLOTH = smooth([
  [136, 252, 1],
  [170, 252],
  [208, 246],
  [224, 254],
  [222, 268],
  [190, 274],
  [146, 270, 1],
])
/** Its loose end, hanging out over the waistcoat. */
const NECK_END = smooth([
  [214, 262, 1],
  [226, 266, 1],
  [236, 296],
  [232, 318],
  [222, 322, 1],
  [222, 298],
])
const COLLAR = smooth([
  [92, 238, 1],
  [104, 214],
  [128, 222],
  [152, 242],
  [166, 262],
  [140, 266],
  [110, 258, 1],
])

type Marks = {
  ground: string
  hair: string
  back: string
  neck: string
  jowl: string
  brow: string
  cheek: string
  coat: string
  vest: string
}

const marks = once<Marks>(() => {
  // The grey morning light of the parlour, from in front of him.
  const ground = portraitGround(5601, (x, y) =>
    clamp(0.04 + ((x - 40) / 280) * 0.85 - Math.max(0, (y - 236) / 260)),
  )
  const r = rng(5602)
  // Thin grey hair: sparse strokes combed back round the skull.
  let hair = combedHair(r, HAIR_K, [150, 130], 110, [5, 10])
  const poly = HAIR_K.map(([x, y]): Pt => [x, y])
  for (let i = 0, tries = 0; i < 40 && tries < 3000; tries++) {
    const x = between(r, 82, 130)
    const y = between(r, 80, 200)
    if (!inside(poly, x, y)) continue
    hair += `M${n(x)} ${n(y)}l${n(between(r, -3, -1))} ${n(between(r, 4, 7))}`
    i++
  }
  // The shadow at the back of the skull, cut in the paper of the bare head.
  let back = ''
  for (let rad = 70; rad < 104; rad += 3.6)
    back += arcDashes(r, 172, 146, rad, deg(185), deg(250), [8, 20], [3, 7])
  const neck = hatch(r, { x0: 108, x1: 220, y0: 226, y1: 256 }, 4.6, 0.05)
  // Heavy jowls and a double chin.
  const jowl =
    'M236 216Q226 226 214 226M231 228Q220 238 208 236' + 'M207 182Q212 196 222 204Q228 210 232 214'
  // "the knit brow": forehead lines, and the creases between the eyes.
  let brow = ''
  for (let i = 0; i < 4; i++)
    brow += `M${n(200 + i * 2)} ${n(72 + i * 7)}Q${n(214 + i)} ${n(67 + i * 7)} ${n(228 + i * 0.6)} ${n(74 + i * 7.5)}`
  brow += 'M228 103L230.5 113M224 104L226 112'
  let cheek = ''
  for (let rad = 12; rad < 30; rad += 3.4)
    cheek += arcDashes(r, 198, 152, rad, deg(40), deg(140), [8, 22], [1.5, 4])
  // Creases in the coat where it strains over him.
  const coat =
    gouge(24, 270, 10, 318, 2.2, 2) +
    gouge(56, 256, 46, 318, 1.8, 2) +
    gouge(100, 266, 96, 318, 1.3, 1) +
    gouge(150, 270, 160, 300, 1.2, -1) +
    gouge(170, 276, 184, 296, 1, -1) +
    gouge(244, 278, 270, 300, 1.2, 1)
  // The waistcoat's buttons, the open ones at the top hanging loose.
  const vest =
    'M248 286l3 1M260 298l3 1M272 310l3 1M282 322l3 1' +
    gouge(270, 280, 300, 310, 1.4, -1) +
    gouge(286, 290, 308, 322, 1, -1) +
    gouge(212, 300, 236, 320, 0.8, 1) +
    gouge(222, 312, 250, 328, 0.7, 1)
  return { ground, hair, back, neck, jowl, brow, cheek, coat, vest }
})

function SquirePortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-sq-head`
  const hairClip = `${uid}-sq-hair`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={COAT} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={WAISTCOAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={SHIRT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.vest} fill={PAPER} stroke={PAPER} strokeWidth={LINE.hairline} />
      <path d={HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.back} strokeWidth={1.5} />
        <path d={m.neck} strokeWidth={LINE.hairline} />
        <path d={m.cheek} strokeWidth={0.95} />
        <path d={m.brow} strokeWidth={LINE.hairline} />
      </g>
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
      </g>
      <ProfileEar at={[158, 114]} h={54} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={m.jowl} strokeWidth={LINE.fine} />
        {/* the jaw, heavy, back to below the ear */}
        <path d="M222 238C204 236 184 224 172 206C167 198 165 188 166 178" strokeWidth={1.6} />
        {/* "the knit brow": drawn down hard towards the nose */}
        <path d="M200 106Q216 100 233 112" strokeWidth={3.8} />
        {/* nostril, and a deep fold from the nose past the mouth */}
        <path d="M245.5 169C241 166.5 240.5 162 243.5 159.5" strokeWidth={1.5} />
        <path d="M236 156C228 164 226 174 229 184" strokeWidth={1.4} />
        {/* "the slack and feeble mouth": the lips apart, the lower one hanging */}
        <path d="M238.5 181.5L229 183" strokeWidth={1.6} />
        <path d="M239 186.5Q233 190 229.5 186" strokeWidth={1.4} />
        <path d="M234.5 195Q231 198 233 202" strokeWidth={LINE.hairline} />
        {/* the bag under the eye */}
        <path d="M209 139Q218 145 228 138" strokeWidth={LINE.hairline} />
      </g>
      <path d="M237.5 182.5L230 183.6Q232 185.6 237.8 185.6Z" fill={INK} />
      {/* "rather hard glance": a narrow eye under a heavy lid, looking straight ahead */}
      <ProfileEye at={[220, 127]} s={0.95} heavy look={0.6} />
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={NECKCLOTH} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d="M146 260Q180 256 214 252M154 266Q180 266 210 262M170 252Q176 262 172 272"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <path d={NECK_END} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d="M220 276Q226 296 226 316" fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <InnerRule />
    </>
  )
}

export const squireCassArt: LinocutArt = { width: PW, height: PH, Draw: SquirePortrait }

export const squireCass: Portrait = {
  name: 'Squire Cass',
  art: squireCassArt,
  alt: "A linocut portrait of Squire Cass in profile, facing right, drawn from George Eliot's description in Chapter 9: a big, heavy old man of sixty, his coat strained over a round stomach. His brow is drawn down hard over his nose and creased between the eyes, and his narrow eye looks straight ahead from under a heavy lid; but below them his mouth is loose, the lips a little apart and the lower lip hanging, over heavy jowls and a double chin. His thin grey hair lies over the back and sides of his head and is gone from the top. His neckcloth is knotted loosely and askew, with one end hanging out over a dark waistcoat whose top buttons are undone. Five numbered red markers point to his stout body, his frowning brow, his eye, his mouth and his untidy neckcloth.",
  describedBy: [
    { phrase: 'a tall, stout man of sixty', at: [36, 206], to: [70, 240] },
    { phrase: 'the knit brow', at: [272, 70], to: [226, 102] },
    { phrase: 'rather hard glance', at: [292, 118], to: [228, 126] },
    { phrase: 'the slack and feeble mouth', at: [292, 178], to: [240, 186] },
    { phrase: 'his dress was slovenly', at: [298, 236], to: [234, 298] },
  ],
  where: 'Chapter 9',
  passage:
    'a tall, stout man of sixty, with a face in which the knit brow and rather hard glance seemed contradicted by the slack and feeble mouth. His person showed marks of habitual neglect, his dress was slovenly; and yet there was something in the presence of the old Squire distinguishable from that of the ordinary farmers in the parish, who were perhaps every whit as refined as he, but, having slouched their way through life with a consciousness of being in the vicinity of their “betters,” wanted that self-possession and authoritativeness of voice and carriage which belonged to a man who thought of superiors as remote existences with whom he had personally little more to do than with America or the stars.',
  note: 'The face is the father in small: a hard look over a weak mouth. He has let his sons run wild, and Godfrey fears his anger too much ever to tell him the truth.',
  artNote:
    'His clothes are not described beyond being slovenly, so he wears the dress of a country squire of about 1800, badly. Eliot gives his face no colour here, so there is no red in the print.',
}
