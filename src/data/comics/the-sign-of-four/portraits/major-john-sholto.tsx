import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rays,
  rng,
} from '@/components/comics/linocut/carve'

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
 * Major John Sholto at the card table in the Andaman Islands, as Jonathan
 * Small watched him through the window of the surgery in Chapter 12, and
 * nothing else:
 *
 *   "Night after night the soldiers got up poorer men, and the poorer they
 *   got the more keen they were to play. Major Sholto was the hardest hit. He
 *   used to pay in notes and gold at first, but soon it came to notes of hand
 *   and for big sums. He sometimes would win for a few deals, just to give
 *   him heart, and then the luck would set in against him worse than ever.
 *   All day he would wander about as black as thunder, and he took to
 *   drinking a deal more than was good for him."
 *
 * So: an officer in profile, facing right, at the card table of an evening
 * in the surgeon's lamplight, the cards thrown down in front of him, bank
 * notes and a little gold beside them, and his own pen writing a note of
 * hand, a promise to pay; his glass at his elbow; and his face dark, the
 * brows drawn down hard, frown lines cut between them and shadow round the
 * eye, "as black as thunder". This is the debt that makes him listen when
 * Small offers him the Agra treasure, which is why his portrait is drawn
 * here and not on his deathbed in Chapter 4, which the rules for this text
 * keep off the page.
 *
 * Small says only that the officers "were in command of the native troops",
 * and Thaddeus that his father was "once of the Indian army" (Chapter 4).
 * The novel never describes his face, his figure or his uniform, so he is
 * drawn plainly: a man in middle life, clean-shaven, in the plain dark tunic
 * with a stand collar that an officer wore off parade, its buttons cut in
 * paper. Nothing is taken from a film or television production.
 *
 * Seeds: 4701 for the ground, 4702 for the cuts in the figure, 4703 for the
 * lamplight.
 */

/** The head, in profile facing right, tipped a little forward over the table. */
const HEAD = smooth([
  [116, 232, 1],
  [116, 204],
  [108, 180],
  [102, 144],
  [106, 104],
  [122, 70],
  [148, 48],
  [178, 40],
  [204, 48],
  [218, 66],
  [224, 90],
  [226, 104],
  [229.5, 112, 1],
  [223.5, 121, 1],
  [228.5, 131],
  [234, 142],
  [238.5, 152, 1],
  [232.5, 156],
  [227, 157, 1],
  [228.5, 163],
  [227, 167, 1],
  [223, 169, 1],
  [226, 172],
  [224.5, 177, 1],
  [221, 179],
  [224.5, 186],
  [223.5, 195],
  [216, 201],
  [202, 202],
  [194, 210],
  [190, 232, 1],
])
const TIP = 'rotate(6 152 232)'
/** Plain dark hair, cut short and brushed back, greying at the temple. */
const HAIR = smooth([
  [60, 20, 1],
  [212, 20, 1],
  [210, 50],
  [200, 56],
  [190, 70],
  [182, 92],
  [174, 110],
  [162, 114],
  [150, 124],
  [142, 156],
  [134, 190],
  [120, 222, 1],
  [60, 222, 1],
])

/** The tunic: the back, the shoulders and the chest, down to the table's edge. */
const TUNIC = smooth([
  [20, 330, 1],
  [26, 290],
  [46, 252],
  [80, 230],
  [114, 224],
  [150, 234],
  [190, 230],
  [212, 244],
  [222, 266],
  [226, 330, 1],
])
/** The stand collar of the tunic, close round the neck. */
const COLLAR = smooth([
  [112, 218, 1],
  [152, 226],
  [192, 218, 1],
  [196, 238, 1],
  [152, 246],
  [110, 238, 1],
])
/** The near arm, the elbow on the table and the forearm along it to the pen. */
const SLEEVE = smooth([
  [84, 250],
  [112, 236],
  [140, 248],
  [150, 274],
  [176, 262],
  [196, 250, 1],
  [202, 270, 1],
  [170, 282],
  [138, 290],
  [104, 284],
  [88, 268],
])
const CUFF = smooth([
  [193, 249, 1],
  [203, 246.6, 1],
  [208.4, 266, 1],
  [199.4, 269.4, 1],
])
/** His hand on the paper, holding the pen, each finger apart. */
const HAND = handPaths({
  wrist: [
    [204, 247],
    [208, 266],
  ],
  knuckles: [
    [222, 249],
    [223.6, 254.6],
    [223.6, 260],
    [222.4, 265],
  ],
  tips: [
    [236, 262],
    [234, 266.4],
    [230.6, 269.2],
    [226.6, 270.4],
  ],
  width: [5.4, 5.6, 5.2, 4.6],
  bow: [-1.6, -1, -0.6, -0.2],
  thumb: { root: [208, 247], tip: [226, 243], width: 5.4, bow: -1, front: true },
})
/** The pen, held in the fingers, its nib on the note of hand. */
const PEN = 'M206 226L240 266'

/** The card table: dark wood, its near edge catching the light. */
const TABLE = 'M2 270L330 262L330 330L2 330Z'
/**
 * "notes of hand and for big sums": the slip he is writing, a promise to
 * pay, under his pen.
 */
const NOTE_OF_HAND = 'M226 268L272 264L276 282L230 287Z'
const NOTE_LINES = 'M234 271.6L252 270M235 275.4L264 272.6M236 279.4L258 277.4'
/** "notes and gold": bank notes thrown on the table, and a little gold. */
const BANK_NOTES = ['M110 290L150 284L153 298L113 304Z', 'M128 300L166 296L167 309L129 313Z']
const COINS: [number, number, number][] = [
  [286, 290, 5.4],
  [298, 296, 5],
  [280, 300, 4.6],
  [292, 284, 5],
]
/** The cards, thrown down anyhow. */
const CARDS = [
  'M40 286L60 282L64 302L44 306Z',
  'M58 296L78 294L80 314L60 316Z',
  'M178 300L198 296L202 314L182 318Z',
]
/** "drinking a deal more than was good for him": his glass at his elbow. */
const GLASS = 'M250 214L276 214L272 258L254 258Z'
const DRINK = 'M251.4 230L274.6 230L272.2 257L253.8 257Z'
/** The surgeon's lamp on the table: its glass chimney and its flame. */
const LAMP_BASE = 'M296 262L322 262L318 248L300 248Z'
const LAMP_FONT = 'M298 248C292 236 296 224 309 222C322 224 326 236 320 248Z'
const CHIMNEY = 'M302 222L304 176C304 170 314 170 314 176L316 222Z'
const FLAME = 'M309 190C313 196 314 204 309 212C304 204 305 196 309 190Z'

type Marks = {
  ground: string
  glow: string
  hair: string
  back: string
  thunder: string
  neck: string
  tunic: string
  table: string
}

const marks = once<Marks>(() => {
  // The lamp on the table at the right; the room dark behind him.
  const ground = portraitGround(4701, (x, y) =>
    clamp(0.04 + 0.95 * clamp(1 - Math.hypot(x - 309, (y - 200) * 1.2) / 290)),
  )
  const glow = rays(rng(4703), 309, 200, { from: 24, to: 74, every: 10, width: 1.4 })
  const r = rng(4702)
  // Short dark hair brushed back, a little grey at the temple.
  const hair =
    strands(r, 56, lerp2([206, 50], [174, 112]), lerp2([124, 66], [130, 200]), [0.6, 1.2], 2.2) +
    rimLight(r, { cx: 166, cy: 128, rx: 60, ry: 92 }, 150, 285, 36, 1) +
    strands(r, 10, lerp2([178, 92], [172, 110]), lerp2([164, 100], [158, 116]), [0.8, 1.2], 1)
  let back = ''
  for (let rad = 44; rad < 90; rad += 3.4)
    back += arcDashes(r, 174, 148, rad, deg(106), deg(170), [8, 22], [2, 6])
  // "as black as thunder": the brow knotted, deep frown lines over the nose,
  // and shadow cut round the eye under the lowered brow.
  let thunder = 'M226 96Q224 103 226.4 109M221.6 95Q219.6 102 221.4 108M216 97Q214.6 102 215.6 106'
  for (let rad = 10; rad < 19; rad += 2.6)
    thunder += arcDashes(r, 215, 126, rad, deg(150), deg(300), [6, 14], [1.5, 3.5])
  for (let i = 0; i < 4; i++)
    thunder += `M${n(198 + i * 6)} ${n(80 + i * 1.6)}Q${n(210 + i * 4)} ${n(76 + i)} ${n(222)} ${n(82 + i * 2.2)}`
  const neck = hatch(r, { x0: 114, x1: 196, y0: 206, y1: 226 }, 4.2, 0.06)
  const tunic =
    gouge(50, 270, 40, 322, 2, 2) +
    gouge(76, 256, 66, 300, 1.4, 1.5) +
    gouge(204, 252, 214, 300, 1.1, -1)
  // The polish of the table top in the lamplight.
  let table = ''
  for (let y = 276; y < 324; y += 5.5) {
    let x = 8 + between(r, 0, 10)
    while (x < 322) {
      const len = between(r, 14, 46)
      const end = Math.min(x + len, 322)
      const L = clamp((x - 40) / 280)
      table += gouge(x, y, end, y + between(r, -0.4, 0.4), 0.3 + L * 1.3 * between(r, 0.7, 1.1))
      x += len + between(r, 6, 16)
    }
  }
  return { ground, glow, hair, back, thunder, neck, tunic, table }
})

function SholtoPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-ms-head`
  const glassClip = `${uid}-ms-glass`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={glassClip}>
          <path d={GLASS} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={HEAD} transform={TIP} />
        <path d={TUNIC} />
      </g>
      <path d={TUNIC} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.tunic} fill={PAPER} />
      {/* the buttons down the front of the tunic */}
      {[252, 270, 288].map((y) => (
        <circle key={y} cx={n(215 + (y - 252) * 0.16)} cy={y} r={2.4} fill={PAPER} />
      ))}
      <g transform={TIP}>
        <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.6} />
        <g clipPath={`url(#${headClip})`}>
          <g fill="none" stroke={INK} strokeLinecap="round">
            <path d={m.back} strokeWidth={1.6} />
            <path d={m.thunder} strokeWidth={1} />
            <path d={m.neck} strokeWidth={1.1} />
          </g>
          <path d={HAIR} fill={INK} />
          <path d={m.hair} fill={PAPER} />
        </g>
        <ProfileEar at={[166, 118]} h={44} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the jaw, back to below the ear */}
          <path d="M220 199C204 204 186 199 176 186C171 178 169 169 169 160" strokeWidth={1.8} />
          {/* "as black as thunder": the brows drawn down hard */}
          <path d="M199 111Q212 117.5 229 110.5" strokeWidth={4.6} />
          {/* the eye under the brow, the lid heavy */}
          <path d="M207.5 123.5Q215.5 119.6 223 122.6" strokeWidth={2.6} />
          <path d="M209.5 128.6Q216.5 130.4 222.6 127.4" strokeWidth={LINE.fine} />
          {/* the nostril, the fold past the mouth, a mouth turned down */}
          <path d="M233 155.5C229 154 228.5 149.5 231 147.5" strokeWidth={1.4} />
          <path d="M226 144C219 151 216.5 159 217.5 168" strokeWidth={1.4} />
          <path d="M227 168.2L216.6 167.8" strokeWidth={1.9} />
          <path d="M216.6 167.8Q213.6 169 213.2 172.4" strokeWidth={LINE.fine} />
          <path d="M224.4 175.4Q221.8 176.8 219.8 176" strokeWidth={LINE.hairline} />
        </g>
        <circle cx={218.4} cy={125.4} r={2.6} fill={INK} />
        <circle cx={219.4} cy={124.4} r={0.9} fill={PAPER} />
      </g>
      <path d={COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d="M118 231Q152 239 192 231" fill="none" stroke={PAPER} strokeWidth={1} />
      {/* the card table, and what is on it */}
      <path d={TABLE} fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round" />
      <path d={TABLE} fill={INK} />
      <path d={m.table} fill={PAPER} />
      <path d="M2 270L330 262" fill="none" stroke={PAPER} strokeWidth={LINE.bold} />
      {CARDS.map((d) => (
        <g key={d}>
          <path d={d} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        </g>
      ))}
      <path
        d="M52 290.6l3.2 3.2l-3.2 3.2l-3.2 -3.2ZM69 301.6l3.2 3.2l-3.2 3.2l-3.2 -3.2ZM190 303.6l3.2 3.2l-3.2 3.2l-3.2 -3.2Z"
        fill={RED}
      />
      {BANK_NOTES.map((d) => (
        <g key={d}>
          <path d={d} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
        </g>
      ))}
      <path
        d="M118 292.6L144 288.8M119 297L132 295M136 303L160 300M137 307L150 305.6"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      {COINS.map(([x, y, rr]) => (
        <g key={`${x}-${y}`}>
          <ellipse
            cx={x}
            cy={y}
            rx={rr}
            ry={rr * 0.55}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.1}
          />
          <ellipse
            cx={x}
            cy={y}
            rx={rr * 0.55}
            ry={rr * 0.28}
            fill="none"
            stroke={INK}
            strokeWidth={0.7}
          />
        </g>
      ))}
      {/* the lamp, its flame in the spot colour */}
      <path d={LAMP_BASE} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <path d={LAMP_FONT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={CHIMNEY} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
      <path d={FLAME} fill={RED} className="lc-flicker" />
      {/* his glass */}
      <path d={GLASS} fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round" />
      <g clipPath={`url(#${glassClip})`}>
        <path d={DRINK} fill="none" stroke={PAPER} strokeWidth={1} />
        <path
          d="M252 236H276M252 242H276M253 248H275"
          fill="none"
          stroke={PAPER}
          strokeWidth={0.8}
        />
      </g>
      <path d={GLASS} fill="none" stroke={PAPER} strokeWidth={1.8} strokeLinejoin="round" />
      <path
        d="M255 218L257.6 252"
        fill="none"
        stroke={PAPER}
        strokeWidth={2}
        strokeLinecap="round"
      />
      {/* "notes of hand": the slip, the pen, his hand writing */}
      <path d={NOTE_OF_HAND} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={NOTE_LINES} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={gouge(118, 256, 144, 282, 1.2, 1)} fill={PAPER} />
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={PEN} fill="none" stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <path d={PEN} fill="none" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
      <Hand paths={HAND} />
      <InnerRule />
    </>
  )
}

export const majorJohnSholtoArt: LinocutArt = { width: PW, height: PH, Draw: SholtoPortrait }

export const majorJohnSholto: Portrait = {
  name: 'Major John Sholto',
  art: majorJohnSholtoArt,
  alt: 'A linocut portrait of Major Sholto in profile, facing right, drawn from Jonathan Small’s words in Chapter 12: an officer in middle life, clean-shaven, with short dark hair and a plain dark tunic with a stand collar and paper-white buttons, sitting at a card table in the evening by an oil lamp whose flame is printed in red. His brows are drawn down hard in a frown, with lines cut between them and shadow round his eye. His elbow is on the table and he is writing with a pen on a small slip of paper. In front of him lie playing cards thrown down anyhow, two bank notes and a little pile of gold coins, and at his elbow stands a glass. Five numbered red markers point to him, the money, the slip he is writing, his dark brow and his glass.',
  describedBy: [
    { phrase: 'Major Sholto was the hardest hit', at: [40, 210], to: [70, 248] },
    { phrase: 'notes and gold', at: [244, 304], to: [278, 294] },
    { phrase: 'notes of hand and for big sums', at: [300, 238], to: [268, 268] },
    { phrase: 'as black as thunder', at: [258, 82], to: [222, 112] },
    { phrase: 'drinking a deal more than was good for him', at: [264, 186], to: [264, 212] },
  ],
  where: 'Chapter 12',
  passage:
    'Well, there was one thing which very soon struck me, and that was that the soldiers used always to lose and the civilians to win. Mind, I don’t say that there was anything unfair, but so it was. These prison-chaps had done little else than play cards ever since they had been at the Andamans, and they knew each other’s game to a point, while the others just played to pass the time and threw their cards down anyhow. Night after night the soldiers got up poorer men, and the poorer they got the more keen they were to play. Major Sholto was the hardest hit. He used to pay in notes and gold at first, but soon it came to notes of hand and for big sums. He sometimes would win for a few deals, just to give him heart, and then the luck would set in against him worse than ever. All day he would wander about as black as thunder, and he took to drinking a deal more than was good for him.',
  note: 'Sholto’s ruin at cards is why he listens when Small offers him the Agra treasure: the respectable officer is already a desperate man. On his deathbed in Chapter 4 he names his own fault: “The cursed greed which has been my besetting sin through life”.',
  artNote:
    'The novel never describes Major Sholto’s face or uniform, so he is drawn plainly, as an officer off parade. The red is the lamp’s flame, and on the cards their pips.',
}
