import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  Hand,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  ProfileEye,
  handPaths,
  once,
  portraitGround,
  smooth,
  strands,
  lerp2,
} from './common'

/**
 * Abdullah Khan, as Jonathan Small remembers him at the gate of the fort at
 * Agra in 1857, in Chapter 12, and nothing else:
 *
 *   "For two nights I kept the watch with my Punjaubees. They were tall,
 *   fierce-looking chaps, Mahomet Singh and Abdullah Khan by name, both old
 *   fighting-men who had borne arms against us at Chilian-wallah. They could
 *   talk English pretty well, but I could get little out of them."
 *
 *   "The third night of my watch was dark and dirty, with a small, driving
 *   rain."
 *
 *   "'It is nothing against the fort,' said he. 'We only ask you to do that
 *   which your countrymen come to this land for. We ask you to be rich.'"
 *
 * So: a tall man in profile, facing right, towards Small, under the arch of
 * the gate on a dark night in the rain, his hand held out open, palm up, as
 * he makes his offer. The open hand is bent at the elbow and held low, palm
 * up and fingers apart, so it reads as an offer and as nothing else.
 *
 * THE CARE THIS NEEDS. Small's account of the two troopers is written in the
 * hostile language of the British in 1857 (in the first paragraph above it
 * goes on to mock their speech, and the night of the offer begins with a
 * knife and a threat). None of that is drawn, and the card prints the
 * phrases alone, not the paragraph. What the art takes from Small is what he
 * says Abdullah Khan was and did: an old soldier, a speaker of English, the
 * man who put the offer, in his own words. He is drawn with the same care as
 * every other sitter, his face cut in the same way (common.tsx), with no
 * feature exaggerated.
 *
 * His face and dress are not described. The novel calls the two troopers
 * Sikhs, so he wears a trooper's dress of that time and place: a turban, a
 * long coat and a sash; and a full beard, which the dress of a Sikh soldier
 * of 1857 included. Small tells the scene by lantern-light he has not yet
 * uncovered, so there is no red. Nothing is taken from a film or television
 * production.
 *
 * Seeds: 5001 for the ground, 5002 for the cuts in the figure, 5003 for the
 * rain.
 */

/** The head, in profile facing right. The turban covers the crown. */
const HEAD = smooth([
  [120, 232, 1],
  [120, 204],
  [112, 180],
  [106, 146],
  [110, 106],
  [126, 74],
  [152, 54],
  [182, 48],
  [206, 56],
  [220, 74],
  [226, 96],
  [228, 108],
  [231.5, 116, 1],
  [226, 124.5, 1],
  [231, 134],
  [236.6, 145],
  [241.4, 155, 1],
  [235.4, 158.6],
  [229.6, 159.6, 1],
  [232, 166],
  [234, 180],
  [234, 196],
  [228, 210],
  [214, 220],
  [196, 224],
  [190, 232, 1],
])
/**
 * The turban, wound over the crown and down over the top of the ear, its
 * folds crossing at the front. Ink, the edges of the wound cloth cut in
 * paper.
 */
const TURBAN = smooth([
  [98, 166, 1],
  [94, 128],
  [100, 90],
  [120, 58],
  [152, 38],
  [188, 32],
  [214, 40],
  [229, 58],
  [233, 80],
  [231, 100, 1],
  [214, 98],
  [196, 100],
  [178, 108],
  [162, 120],
  [150, 136],
  [134, 152],
  [116, 166],
])
/** The edges of the wound cloth, cut in paper, crossing at the front. */
const TURBAN_FOLDS =
  gouge(102, 150, 230, 90, 1.5, -5) +
  gouge(100, 122, 229, 68, 1.4, -6) +
  gouge(108, 92, 224, 50, 1.3, -5) +
  gouge(132, 60, 210, 38, 1.1, -3) +
  gouge(150, 126, 230, 96, 1.1, -2)
/**
 * A full beard, neat and close to the line of the jaw, from the cheek below
 * the ear to a rounded end a little below the chin, with the moustache over
 * the mouth.
 */
const BEARD = smooth([
  [166, 150, 1],
  [178, 160],
  [196, 166],
  [214, 164],
  [229.6, 159.6, 1],
  [233, 165],
  [228, 170.4],
  [221, 172.4],
  [232, 177],
  [235.6, 189],
  [233, 203],
  [224, 214],
  [208, 220],
  [192, 218],
  [178, 208],
  [168, 192],
  [162, 172],
])

/** Tall, square shoulders in a long coat. */
const COAT = smooth([
  [22, 330, 1],
  [26, 286],
  [44, 250],
  [74, 226],
  [100, 204],
  [124, 210],
  [150, 222],
  [192, 226],
  [214, 244],
  [226, 280],
  [230, 330, 1],
])
/** The coat's closed, standing collar, round the base of the neck. */
const COAT_COLLAR = smooth([
  [104, 200, 1],
  [140, 206],
  [186, 206, 1],
  [194, 228, 1],
  [146, 230],
  [104, 224, 1],
])
/** The sash wound round the waist, at the foot of the block. */
const SASH = smooth([
  [30, 300, 1],
  [120, 304],
  [228, 300, 1],
  [230, 322, 1],
  [120, 326],
  [28, 322, 1],
])
/** The near arm, bent at the elbow, the forearm held out low in front of him. */
const SLEEVE = smooth([
  [78, 252],
  [108, 238],
  [134, 254],
  [150, 284],
  [186, 276],
  [222, 266, 1],
  [226, 288, 1],
  [190, 298],
  [150, 306],
  [116, 300],
  [92, 280],
])
const CUFF = smooth([
  [220, 265, 1],
  [231, 262.4, 1],
  [235.4, 284.4, 1],
  [224.6, 287.6, 1],
])
/**
 * "We ask you to be rich.": the hand held out open, palm up, the fingers
 * apart and a little curled, the thumb along the top.
 */
const HAND = handPaths({
  wrist: [
    [232, 263],
    [236, 284],
  ],
  knuckles: [
    [254, 266],
    [256.4, 271.6],
    [257.4, 277.4],
    [257, 283],
  ],
  tips: [
    [276, 262],
    [279.6, 268.6],
    [280.6, 275.6],
    [278, 282.4],
  ],
  width: [6, 6.2, 6, 5.4],
  bow: [1.6, 1.2, 0.8, 0.4],
  thumb: { root: [238, 263], tip: [256, 252], width: 6, bow: -1.6 },
})

/** The gate behind him: the stone jamb and the head of the arch. */
const ARCH = 'M8 330L8 8L118 8C88 26 62 58 52 96L52 330Z'

type Marks = {
  ground: string
  rain: string
  stones: string
  beard: string
  back: string
  coat: string
  sash: string
}

const marks = once<Marks>(() => {
  // A dark night: only a little light, low on the right, from the open side.
  const ground = portraitGround(5001, (x, y) =>
    clamp(0.04 + ((x - 100) / 260) * 0.5 - Math.max(0, (y - 280) / 260)),
  )
  // "a small, driving rain": short slanting cuts over the dark.
  const rr = rng(5003)
  let rain = ''
  for (let i = 0; i < 120; i++) {
    const x = between(rr, 60, PW + 10)
    const y = between(rr, 6, PH - 6)
    // not across the face, the beard or the hand
    if (x > 96 && x < 246 && y > 20 && y < 250) continue
    if (x > 220 && x < 290 && y > 240 && y < 296) continue
    const len = between(rr, 10, 18)
    rain += gouge(x, y, x - len * 0.34, y + len, 0.45)
  }
  const r = rng(5002)
  // The courses of the stone of the gate.
  let stones = ''
  for (let y = 22; y < 326; y += 24) {
    stones += gouge(8, y, 52, y + between(r, -0.6, 0.6), 0.6)
    const x = (y / 24) % 2 ? 22 : 36
    stones += gouge(x, y + 2, x + 0.4, y + 22, 0.5)
  }
  // The beard: strands cut downwards through it.
  const beard =
    strands(r, 40, lerp2([172, 166], [232, 168]), lerp2([176, 228], [226, 230]), [0.5, 1], 2) +
    strands(r, 14, lerp2([166, 150], [176, 166]), lerp2([164, 196], [172, 214]), [0.5, 0.9], 1.5)
  // The shadow of the beard on the neck, under the jaw, as on every sitter.
  let back = ''
  for (let y = 178; y < 200; y += 4.4) back += `M128 ${n(y)}L${n(176)} ${n(y + 7)}`
  const coat =
    gouge(48, 268, 38, 296, 1.8, 2) +
    gouge(76, 250, 68, 294, 1.3, 1.5) +
    gouge(214, 254, 222, 296, 1.1, -1)
  const sash = gouge(34, 308, 226, 304, 0.9, -1.4) + gouge(34, 315, 226, 312, 0.8, -1.2)
  return { ground, rain, stones, beard, back, coat, sash }
})

function AbdullahPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-ak-head`
  const beardClip = `${uid}-ak-beard`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* the stone of the gate behind him */}
      <path d={ARCH} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.stones} fill={PAPER} />
      {/* "a small, driving rain" */}
      <path d={m.rain} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} />
        <path d={TURBAN} />
        <path d={COAT} />
        <path d={SLEEVE} />
      </g>
      {/* the long coat and the sash */}
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <path d={SASH} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={m.sash} fill={PAPER} />
      <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
      <g clipPath={`url(#${headClip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.1} strokeLinecap="round" />
      </g>
      <path d={COAT_COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <ProfileEar at={[168, 128]} h={40} />
      {/* the turban, wound over the crown and the top of the ear */}
      <path d={TURBAN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={TURBAN_FOLDS} fill={PAPER} />
      {/* the beard and moustache */}
      <path d={BEARD} fill={INK} stroke={PAPER} strokeWidth={1} />
      <g clipPath={`url(#${beardClip})`}>
        <path d={m.beard} fill={PAPER} />
      </g>
      {/* "They could talk English pretty well": the mouth open on a word */}
      <path d="M222 175.4Q228 173.8 233.4 175.6Q228 178.4 222 177.4Z" fill={PAPER} />
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {/* a strong brow */}
        <path d="M205 114Q217 108.6 231 112" strokeWidth={3.4} />
        {/* the nose and its nostril */}
        <path d="M229 131Q235 139 238.6 147" strokeWidth={LINE.fine} />
        <path d="M235.6 157.6C231.6 156 231 151.4 233.6 149.4" strokeWidth={1.4} />
      </g>
      {/* a steady eye, on the man he is speaking to */}
      <ProfileEye at={[218, 124]} s={1.08} />
      {/* the near arm, and the open hand */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(112, 260, 136, 294, 1.2, 1.2)} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Hand paths={HAND} />
      {/* the palm, turned up: a fold cut across it */}
      <path
        d="M241 272Q248 276 254 274"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <InnerRule />
    </>
  )
}

export const abdullahKhanArt: LinocutArt = { width: PW, height: PH, Draw: AbdullahPortrait }

export const abdullahKhan: Portrait = {
  name: 'Abdullah Khan',
  art: abdullahKhanArt,
  alt: 'A linocut portrait of Abdullah Khan in profile, facing right, drawn from Jonathan Small’s words in Chapter 12: a tall man in a turban wound over his head, with a full beard and moustache and a steady eye, wearing a long dark coat with a sash at the waist. He stands at night before the stone of a gate, with a small rain driving down in slanting lines, and his mouth is open as he speaks. One arm is bent at the elbow and the hand is held out low in front of him, open, palm up and fingers apart, offering. Four numbered red markers point to his coat, his mouth, his open hand and the rain.',
  describedBy: [
    {
      phrase: 'both old fighting-men who had borne arms against us at Chilian-wallah',
      at: [36, 236],
      to: [70, 264],
    },
    { phrase: 'They could talk English pretty well', at: [276, 190], to: [234, 177] },
    { phrase: 'We ask you to be rich.', at: [304, 240], to: [280, 264] },
    { phrase: 'a small, driving rain', at: [300, 60], to: [286, 92] },
  ],
  where: 'Chapter 12',
  note: 'Small describes the two troopers in the hostile shorthand of the British in 1857, and admits he “could get little out of them”. Abdullah Khan’s own words cut deeper than anything Small says of him: “We only ask you to do that which your countrymen come to this land for.”',
  artNote:
    'The novel never describes his face or his dress. Small calls the two troopers Sikhs, so he is drawn as a trooper of that time and place, in a turban, a long coat and a sash, with a beard. The card prints the phrases alone, because the paragraphs they come from also hold a threat of killing and Small’s mockery of the troopers’ speech.',
}
