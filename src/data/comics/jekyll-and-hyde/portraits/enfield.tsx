import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  rng,
} from '@/components/comics/linocut/carve'

import { Hand, handPaths } from './hands'
import { InnerRule, PH, PW, hatch, once, rimLight, smooth } from './common'

/**
 * Richard Enfield. Stevenson never describes his face or his dress; he says
 * only who he is and what he does, in Chapter 1:
 *
 *   "Mr. Richard Enfield, his distant kinsman, the well-known man about town."
 *   "Mr. Enfield and the lawyer were on the other side of the by-street; but
 *   when they came abreast of the entry, the former lifted up his cane and
 *   pointed."
 *   "Mr. Utterson sighed deeply but said never a word; and the young man
 *   presently resumed."
 *
 * So he is drawn plainly, as a young gentleman of the 1880s out for a Sunday
 * walk (a top hat, a dark frock coat, a high collar and a dark cravat), and
 * the numbered markers point only at what the text says: that he is young,
 * that he is a man about town (so, dressed for the town), and that he lifts
 * his cane and points. It points across the street at the door of the story:
 * a door in a blank, stained gable wall ("a blind forehead of discoloured
 * wall"), "equipped with neither bell nor knocker".
 *
 * He matches the Enfield of the panels (../panels/people.tsx): younger than
 * Utterson, a fuller face, hair curling at the nape under a top hat, and his
 * cane. His hand is closed round the cane, but each finger is cut apart from
 * the next, so it reads as a grip and not a fist. It is a Sunday, by day, so
 * the ground is the lightest in the set. There is no red in this plate.
 * Nothing here comes from a film or stage production.
 *
 * Seeds: 3401 for the ground, 3402 for the cuts in the figure.
 */

/** A young, full face in profile, facing right, under the hat. */
const HEAD = smooth([
  [130, 238, 1],
  [128, 214],
  [118, 192],
  [112, 160],
  [114, 122],
  [124, 102],
  [150, 96],
  [190, 96],
  [212, 102],
  [220, 116],
  [222, 128],
  [223.5, 134, 1],
  [219, 142],
  [225, 154],
  [233, 165, 1],
  [228, 169],
  [222, 169.5, 1],
  [224, 176.5],
  [222, 179.5, 1],
  [224.5, 183],
  [220.5, 189],
  [226, 199],
  [222, 209],
  [206, 214],
  [198, 220],
  [196, 238, 1],
])
/** A tall silk hat, and its curled brim. */
const CROWN = smooth([
  [128, 102, 1],
  [125, 70],
  [124, 38, 1],
  [212, 36, 1],
  [210, 70],
  [210, 100, 1],
])
const HAT_TOP = 'M124 38C124 31 212 29 212 36C212 43 124 45 124 38Z'
const BAND = smooth([
  [127, 88, 1],
  [211, 86, 1],
  [210, 100, 1],
  [128, 102, 1],
])
const BRIM = smooth([
  [104, 106],
  [116, 98],
  [170, 101],
  [224, 97],
  [238, 104],
  [224, 110],
  [170, 108],
  [116, 111],
])
/** Hair under the hat, curling at the nape. */
const HAIR = smooth([
  [106, 100, 1],
  [198, 100, 1],
  [190, 114],
  [178, 124],
  [166, 128],
  [154, 132],
  [148, 162],
  [142, 192],
  [138, 218, 1],
  [106, 218, 1],
])
const EAR = smooth([
  [166, 132],
  [155, 134],
  [151, 150],
  [155, 166],
  [165, 172],
  [171, 162],
  [172, 144],
])
const COAT = smooth([
  [40, 330, 1],
  [46, 292],
  [70, 262],
  [110, 246],
  [132, 240],
  [168, 256],
  [204, 252],
  [230, 262],
  [252, 290],
  [262, 330, 1],
])
const COLLAR = smooth([
  [128, 232, 1],
  [162, 244],
  [198, 232, 1],
  [202, 248, 1],
  [162, 260],
  [126, 250, 1],
])
const CRAVAT = smooth([
  [184, 248, 1],
  [214, 244, 1],
  [220, 262],
  [212, 276],
  [198, 272],
  [190, 260],
])
const LAPEL = smooth([
  [166, 258, 1],
  [188, 262, 1],
  [214, 330, 1],
  [192, 330, 1],
  [176, 290],
])
/** The near arm, bent, the forearm lifted to point the cane. */
const SLEEVE = smooth([
  [150, 330, 1],
  [164, 300],
  [196, 296],
  [222, 260, 1],
  [242, 272, 1],
  [214, 318],
  [196, 330, 1],
])
const CUFF = smooth([
  [219, 257, 1],
  [230, 250, 1],
  [248, 266, 1],
  [242, 274, 1],
])
/**
 * "lifted up his cane and pointed": the cane runs from its crook, below his
 * fist, up across the picture to the door.
 */
const CANE = 'M236 282L302 193'
const CROOK = 'M236 282C230 290 222 292 216 286C212 281 214 275 219 274'
/** His hand closed round the cane: four fingers, each cut apart, the thumb along the top. */
const HAND = handPaths({
  wrist: [
    [230, 252],
    [244, 270],
  ],
  knuckles: [
    [254, 243],
    [258.5, 248],
    [261, 254],
    [262, 260.5],
  ],
  tips: [
    [251, 250],
    [254, 255.5],
    [256, 261],
    [256.5, 267],
  ],
  width: [6.6, 6.8, 6.6, 6],
  bow: [-6.5, -6.5, -6, -5.5],
  thumb: { root: [236, 250], tip: [258, 236], width: 6.8, bow: -1.5, front: true },
})

/** The door across the street, in its blank, stained gable wall. */
const WALL = smooth([
  [258, 12, 1],
  [334, 12, 1],
  [334, 330, 1],
  [258, 330, 1],
])
const DOOR = 'M280 150L318 150L318 262L280 262Z'
const DOOR_RECESS = 'M272 142L326 142L326 270L272 270Z'
const DOOR_PANELS = 'M286 158L312 158L312 200L286 200ZM286 208L312 208L312 256L286 256Z'

type Marks = {
  ground: string
  wall: string
  hair: string
  curls: string
  back: string
  cheek: string
  neck: string
  coat: string
  sleeve: string
  sheen: string
}

const marks = once<Marks>(() => {
  const r = rng(3402)
  // Daylight: the lightest ground in the set, cut closer than the others'.
  const ground = gougeField(
    r,
    { x0: 12, x1: 258, y0: 14, y1: 316 },
    (x, y) => clamp(0.45 + ((x - 40) / 260) * 0.5 - (y / PH) * 0.25),
    { spacing: 4.6, len: [20, 70], gap: [4, 12], max: 2.2 },
  )
  // "a blind forehead of discoloured wall": a pale wall, blotched with stains.
  const wall = gougeField(
    r,
    { x0: 262, x1: 324, y0: 14, y1: 316 },
    (x, y) => clamp(0.95 - 0.5 * Math.max(0, Math.sin(x / 9 + y / 23) + Math.sin(y / 11 - x / 31))),
    { spacing: 4.2, len: [8, 26], gap: [2, 6], max: 2.4 },
  )
  // Hair under the hat: strands, light on the edge, curling at the nape.
  let hair = ''
  for (let i = 0; i < 20; i++) {
    const y = 136 + i * 4
    hair += gouge(150 - i * 0.5, y, 128 - i * 0.2, y + 8, between(r, 0.5, 0.95), -1.2)
  }
  hair += rimLight(r, { cx: 164, cy: 158, rx: 54, ry: 62 }, 160, 205, 12, 0.9)
  let curls = ''
  for (let i = 0; i < 5; i++) {
    const cx = 120 + i * 4.4
    const cy = 204 + (i % 2) * 6
    curls += arcDashes(r, cx, cy, 4.2, deg(0), deg(300), [18, 26], [0.5, 1])
  }
  let back = ''
  for (let rad = 40; rad < 80; rad += 3.4)
    back += arcDashes(r, 172, 160, rad, deg(108), deg(162), [8, 20], [2, 6])
  // A young cheek: one soft line, no hollows.
  const cheek = arcDashes(r, 210, 160, 20, deg(84), deg(140), [18, 30], [3, 5])
  const neck = hatch(r, { x0: 128, x1: 204, y0: 222, y1: 240 }, 5.4, 0.07)
  const coat =
    gouge(66, 278, 56, 318, 2.2, 2) +
    gouge(94, 266, 88, 318, 1.6, 1.5) +
    gouge(128, 268, 124, 318, 1.1, -1)
  const sleeve = gouge(172, 306, 200, 300, 1.4, 1) + gouge(206, 296, 226, 268, 1.2, 1)
  // Sheen on the silk of the hat, widest where the daylight falls on it.
  let sheen = ''
  for (let i = 0; i < 10; i++) {
    const x = 202 - i * 7 + between(r, -1, 1)
    sheen += gouge(x, 44 + between(r, 0, 6), x + 1.5, 82 - between(r, 0, 6), 1.8 - i * 0.13)
  }
  return { ground, wall, hair, curls, back, cheek, neck, coat, sleeve, sheen }
})

function EnfieldPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-en-head`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* the gable wall across the street, and its door */}
      <path d={WALL} fill={INK} />
      <path d={m.wall} fill={PAPER} />
      <path d={DOOR_RECESS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={DOOR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={DOOR_PANELS} fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
      <path d="M258 12L258 330" fill="none" stroke={INK} strokeWidth={4} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={CROWN} />
        <path d={BRIM} />
        <path d={COAT} />
        <path d={SLEEVE} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.4} />
      <g clipPath={`url(#${headClip})`}>
        <g fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.5} />
          <path d={m.cheek} strokeWidth={LINE.hairline} />
          <path d={m.neck} strokeWidth={LINE.hairline} />
        </g>
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
        <path d={m.curls} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
      </g>
      <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.9} strokeLinejoin="round" />
      <path
        d="M164 141C159 143 158 154 161 160C163 163 166 162 167 158"
        fill="none"
        stroke={INK}
        strokeWidth={1.2}
        strokeLinecap="round"
      />
      <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={CRAVAT} fill={INK} stroke={PAPER} strokeWidth={1.1} />
      <path d="M196 254Q204 262 202 272" fill="none" stroke={PAPER} strokeWidth={LINE.hairline} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* a young, full jaw, back to below the ear */}
        <path d="M222 209C204 216 184 212 174 198C169 190 168 180 168 172" strokeWidth={1.8} />
        {/* a brow and an open, lively eye, looking where the cane points */}
        <path d="M200 131Q211 127 222 130" strokeWidth={2.8} />
        <path d="M203.5 139Q210.5 135 218.5 138" strokeWidth={2.2} />
        <path d="M205.5 143.5Q211.5 145 217.5 142" strokeWidth={LINE.fine} />
        {/* the nostril, the lips, the round of the chin */}
        <path d="M228.5 166C225 163.5 224.5 159.5 227 157" strokeWidth={1.4} />
        <path d="M222 179.5L214.5 178.8" strokeWidth={1.7} />
        <path d="M214.5 178.8Q213 177.4 213.4 175.6" strokeWidth={LINE.hairline} />
        <path d="M221.5 187.5Q218 189.5 217 192" strokeWidth={LINE.hairline} />
      </g>
      <circle cx={214.2} cy={139.6} r={2.6} fill={INK} />
      <circle cx={215} cy={138.9} r={0.85} fill={PAPER} />
      <path d={CROWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.sheen} fill={PAPER} />
      <path d={HAT_TOP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={BAND} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={BRIM} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {/* the near arm, the cane and the hand round it */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.sleeve} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g fill="none" strokeLinecap="round">
        <path d={CROOK} stroke={INK} strokeWidth={8.6} />
        <path d={CANE} stroke={INK} strokeWidth={8.6} />
        <path d={CROOK} stroke={PAPER} strokeWidth={4.4} />
        <path d={CANE} stroke={PAPER} strokeWidth={4.4} />
        {/* the ferrule */}
        <path d="M295.6 195.8L301 199.8" stroke={INK} strokeWidth={1.3} />
      </g>
      <Hand paths={HAND} />
      <InnerRule />
    </>
  )
}

export const enfieldArt: LinocutArt = { width: PW, height: PH, Draw: EnfieldPortrait }

export const enfield: Portrait = {
  name: 'Richard Enfield',
  art: enfieldArt,
  alt: 'A linocut portrait of Richard Enfield on a Sunday walk, by day, in profile and facing right: a young man with a full, smooth face, a lively eye and dark hair curling at the nape, under a tall silk top hat. He wears a dark frock coat, a high white collar and a dark cravat. He has lifted his cane in one hand, his fingers closed round it, and points it across the street at a battered door set in a blank, stained wall on the right. Three numbered red markers point to his hat and coat, his young face and his cane.',
  describedBy: [
    { phrase: 'the well-known man about town', at: [66, 66], to: [126, 70] },
    { phrase: 'the young man', at: [250, 124], to: [222, 150] },
    { phrase: 'lifted up his cane and pointed', at: [266, 300], to: [276, 228] },
  ],
  where: 'Chapter 1',
  note: 'Enfield is the storyteller who starts it all, and a man of the world: his rule is “the more it looks like Queer Street, the less I ask.” The door his cane points to turns out to be the back way into Dr Jekyll’s laboratory.',
  artNote:
    'Stevenson never describes his face or his clothes, so he is drawn plainly, in the dress of a young gentleman of the 1880s; the markers point only at what the text says of him.',
}
