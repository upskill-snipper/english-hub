import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, rng } from '@/components/comics/linocut/carve'

import {
  Hand,
  InnerRule,
  PH,
  PW,
  ProfileEar,
  handPaths,
  hatch,
  lerp2,
  once,
  portraitGround,
  rimLight,
  smooth,
  strands,
} from './common'

/**
 * Captain Arthur Morstan, as his daughter tells Holmes about him in
 * Chapter 2, and nothing else:
 *
 *   "My father was an officer in an Indian regiment who sent me home when I
 *   was quite a child. [...] In the year 1878 my father, who was senior
 *   captain of his regiment, obtained twelve months' leave and came home. He
 *   telegraphed to me from London that he had arrived all safe, and directed
 *   me to come down at once, giving the Langham Hotel as his address. His
 *   message, as I remember, was full of kindness and love. On reaching London
 *   I drove to the Langham, and was informed that Captain Morstan was staying
 *   there, but that he had gone out the night before and had not yet
 *   returned. [...] from that day to this no word has ever been heard of my
 *   unfortunate father."
 *
 * So: a man in middle life in profile, facing right, home on leave in London
 * in 1878 in a plain dark overcoat, reading over the telegram he has written
 * to his daughter before he sends it, with a kind face. He is drawn on the
 * day he arrived, the last day anything is known of him, because that is all
 * his daughter knows. What happened to him that night (Chapter 4) is never
 * drawn: the rules for this text keep every death off the page.
 *
 * Nobody in the novel describes his face or his figure, so he is drawn
 * plainly: clean-shaven, his short hair greying at the temple, in the dress
 * of a gentleman travelling in 1878 (a dark overcoat, a white collar, a dark
 * tie). The words of his telegram are not given in the novel, so the form
 * carries only lines, no words. There is no red: nothing in the passage asks
 * for it. Nothing is taken from a film or television production.
 *
 * Seeds: 4801 for the ground, 4802 for the cuts in the figure.
 */

/** The head, in profile facing right, bent a little to read. */
const HEAD = smooth([
  [112, 236, 1],
  [112, 206],
  [104, 182],
  [98, 144],
  [102, 104],
  [118, 70],
  [144, 48],
  [174, 40],
  [200, 48],
  [214, 66],
  [220, 90],
  [222, 104],
  [225, 112, 1],
  [219.6, 121, 1],
  [224.4, 131],
  [229.6, 142],
  [234, 151.6, 1],
  [228.4, 155.4],
  [222.6, 156.4, 1],
  [224, 162],
  [222.4, 166, 1],
  [218.6, 167.6, 1],
  [221.6, 171],
  [220.2, 175.6, 1],
  [216.8, 177.4],
  [220, 184],
  [219, 193],
  [211.6, 199],
  [196, 200],
  [188, 208],
  [186, 236, 1],
])
const TIP = 'rotate(7 150 236)'
/** Short hair, brushed back, greying at the temple. */
const HAIR = smooth([
  [60, 20, 1],
  [206, 20, 1],
  [204, 50],
  [194, 56],
  [184, 72],
  [178, 94],
  [170, 112],
  [158, 116],
  [146, 126],
  [138, 158],
  [130, 192],
  [116, 224, 1],
  [60, 224, 1],
])

/** "obtained twelve months' leave and came home": his dark travelling overcoat. */
const COAT = smooth([
  [20, 330, 1],
  [26, 290],
  [46, 256],
  [78, 236],
  [110, 230],
  [146, 242],
  [184, 236],
  [206, 250],
  [214, 286],
  [216, 330, 1],
])
/** The coat's deep collar, turned down over the shoulders. */
const COAT_COLLAR = smooth([
  [96, 238, 1],
  [128, 236],
  [160, 250],
  [184, 244],
  [196, 262],
  [178, 300, 1],
  [160, 266],
  [128, 258],
  [100, 256],
])
const COLLAR = smooth([
  [110, 230, 1],
  [148, 242],
  [186, 232, 1],
  [188, 246, 1],
  [148, 256],
  [108, 244, 1],
])
const TIE = smooth([
  [176, 247, 1],
  [190, 244, 1],
  [193, 258],
  [184, 264],
  [178, 258],
])
/** The near arm, up from the elbow to the hand that holds the form. */
const SLEEVE = smooth([
  [70, 330, 1],
  [94, 300],
  [130, 284],
  [176, 266],
  [196, 258, 1],
  [204, 280, 1],
  [182, 290],
  [140, 304],
  [116, 330, 1],
])
const CUFF = smooth([
  [193, 257, 1],
  [203.6, 254, 1],
  [210.4, 274.4, 1],
  [201.2, 278.6, 1],
])
/**
 * "He telegraphed to me from London": the form he has written, held up to
 * read over, tipped towards him. Lines for the message, no words.
 */
const FORM = 'M214 214L284 204L292 262L222 274Z'
const FORM_RULE = 'M219 226L286 216.4'
const MESSAGE =
  'M222 234L280 225.6M223 241L281.4 232.6M224 248L270 241.4M225 255L282 246.8M226 262L262 256.8'
/** His near hand, holding the foot of the form, the thumb over its edge. */
const HAND = handPaths({
  wrist: [
    [204, 256],
    [209, 276],
  ],
  knuckles: [
    [224, 270],
    [226, 275.6],
    [226.6, 281],
    [225.6, 286],
  ],
  tips: [
    [239, 276],
    [239.4, 281.6],
    [238, 286.6],
    [234.6, 290.6],
  ],
  width: [5.6, 5.8, 5.4, 4.8],
  bow: [1, 0.8, 0.4, 0],
  thumb: { root: [212, 258], tip: [226, 262], width: 5.6, bow: -1, front: true },
})

type Marks = {
  ground: string
  hair: string
  back: string
  cheek: string
  neck: string
  coat: string
}

const marks = once<Marks>(() => {
  // Daylight from the right; the dark of the room behind him.
  const ground = portraitGround(4801, (x, y) =>
    clamp(0.08 + ((x - 70) / 240) * 0.8 - Math.max(0, (y - 260) / 220)),
  )
  const r = rng(4802)
  // Short dark hair brushed back, with grey strands at the temple.
  const hair =
    strands(r, 56, lerp2([200, 50], [170, 112]), lerp2([120, 66], [126, 200]), [0.6, 1.2], 2.2) +
    rimLight(r, { cx: 160, cy: 130, rx: 60, ry: 92 }, 150, 285, 36, 1) +
    strands(r, 18, lerp2([184, 70], [172, 110]), lerp2([160, 86], [150, 120]), [0.9, 1.4], 1)
  let back = ''
  for (let rad = 44; rad < 88; rad += 3.4)
    back += arcDashes(r, 170, 150, rad, deg(106), deg(170), [8, 22], [2, 6])
  // A face in middle life: a line or two at the eye and the cheek, no more.
  let cheek = ''
  for (let rad = 14; rad < 24; rad += 3.2)
    cheek += arcDashes(r, 198, 148, rad, deg(72), deg(140), [8, 16], [2, 5])
  cheek += 'M201 126L194 123.6M201.4 129.6L195 131'
  const neck = hatch(r, { x0: 112, x1: 192, y0: 210, y1: 236 }, 4.4, 0.07)
  const coat =
    gouge(48, 274, 38, 322, 2, 2) +
    gouge(76, 256, 66, 304, 1.4, 1.5) +
    gouge(204, 266, 210, 318, 1.2, -1) +
    gouge(186, 300, 196, 322, 1, -1)
  return { ground, hair, back, cheek, neck, coat }
})

function MorstanPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-am-head`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} transform={TIP} />
        <path d={COAT} />
        <path d={FORM} />
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.coat} fill={PAPER} />
      <g transform={TIP}>
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
        <g clipPath={`url(#${headClip})`}>
          <g fill="none" stroke={INK} strokeLinecap="round">
            <path d={m.back} strokeWidth={1.6} />
            <path d={m.cheek} strokeWidth={0.9} />
            <path d={m.neck} strokeWidth={1.1} />
          </g>
          <path d={HAIR} fill={INK} />
          <path d={m.hair} fill={PAPER} />
        </g>
        <ProfileEar at={[160, 118]} h={44} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the jaw, back to below the ear */}
          <path d="M216 197C200 202 184 197 174 184C169 176 167 168 167 160" strokeWidth={1.8} />
          {/* an easy brow */}
          <path d="M196 110.6Q208 105.4 224 109" strokeWidth={3} />
          {/* the eye, lowered to the form, the lid soft */}
          <path d="M204.4 123.6Q212 120 220.4 122.6" strokeWidth={2.6} />
          <path d="M206 127.4Q212.6 129.2 219.4 126" strokeWidth={LINE.fine} />
          {/* the nostril, the fold past the mouth, a mouth at ease */}
          <path d="M228.6 154.8C224.6 153.4 224 149 226.6 147" strokeWidth={1.4} />
          <path d="M221.6 145C215.6 152 213.4 159 214.2 167" strokeWidth={1.3} />
          <path d="M222.4 167L213.6 166.2Q212 166.4 211.6 165" strokeWidth={1.8} />
          <path d="M219.8 173.6Q217.2 175 215.4 174.2" strokeWidth={LINE.hairline} />
        </g>
        <circle cx={216.6} cy={126.2} r={2.6} fill={INK} />
        <circle cx={217.5} cy={125.2} r={0.9} fill={PAPER} />
      </g>
      <path d={COAT_COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1} />
      {/* the telegram form, and his hand holding it */}
      <path d={FORM} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={FORM_RULE} fill="none" stroke={INK} strokeWidth={1.6} />
      <path d={MESSAGE} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(110, 302, 168, 278, 1.2, -1.5)} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <Hand paths={HAND} />
      <InnerRule />
    </>
  )
}

export const captainArthurMorstanArt: LinocutArt = { width: PW, height: PH, Draw: MorstanPortrait }

export const captainArthurMorstan: Portrait = {
  name: 'Captain Arthur Morstan',
  art: captainArthurMorstanArt,
  alt: 'A linocut portrait of Captain Morstan in profile, facing right, drawn from his daughter’s words in Chapter 2: a clean-shaven man in middle life with short dark hair greying at the temple and a kind, easy face, wearing a dark overcoat with a deep collar, a white collar and a dark tie. He holds up a telegram form in one hand and reads it over, his eyes lowered to it; the form is ruled with lines for the message, with no words on it. Four numbered red markers point to his overcoat, the form in his hand, the lines of the message and his face.',
  describedBy: [
    { phrase: 'obtained twelve months’ leave and came home', at: [40, 236], to: [72, 270] },
    {
      phrase: 'He telegraphed to me from London that he had arrived all safe',
      at: [292, 296],
      to: [240, 284],
    },
    {
      phrase: 'His message, as I remember, was full of kindness and love',
      at: [306, 186],
      to: [276, 230],
    },
    { phrase: 'my unfortunate father', at: [262, 92], to: [222, 122] },
  ],
  where: 'Chapter 2',
  passage:
    'My father was an officer in an Indian regiment who sent me home when I was quite a child. My mother was dead, and I had no relative in England. I was placed, however, in a comfortable boarding establishment at Edinburgh, and there I remained until I was seventeen years of age. In the year 1878 my father, who was senior captain of his regiment, obtained twelve months’ leave and came home. He telegraphed to me from London that he had arrived all safe, and directed me to come down at once, giving the Langham Hotel as his address. His message, as I remember, was full of kindness and love. On reaching London I drove to the Langham, and was informed that Captain Morstan was staying there, but that he had gone out the night before and had not yet returned. I waited all day without news of him. That night, on the advice of the manager of the hotel, I communicated with the police, and next morning we advertised in all the papers. Our inquiries led to no result; and from that day to this no word has ever been heard of my unfortunate father.',
  note: 'Captain Morstan is gone before the novel begins: his daughter has only the facts of his last journey and one loving telegram. His disappearance is the first mystery Holmes is asked to solve, and Chapter 12 shows that he too had bargained with Small for the treasure.',
  artNote:
    'The novel never describes his face or his clothes, so he is drawn plainly, as a gentleman travelling in 1878. It never gives the words of his telegram either, so the form carries only lines.',
}
