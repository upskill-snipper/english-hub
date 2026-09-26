import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { InnerRule, PH, PW, hatch, once, portraitGround, rimLight, smooth, strands } from './common'

/**
 * Victor Frankenstein as Walton first sees him, in Letter 4: taken aboard
 * from a sledge on the drifting ice, "on the brink of destruction".
 *
 *   "His limbs were nearly frozen, and his body dreadfully emaciated by
 *   fatigue and suffering. ... As soon as he showed signs of life we wrapped
 *   him up in blankets, and placed him near the chimney of the kitchen
 *   stove." (Letter 4)
 *   "his eyes have generally an expression of wildness, and even madness ...
 *   But he is generally melancholy and despairing; and sometimes he gnashes
 *   his teeth, as if impatient of the weight of woes that oppresses him."
 *   (Letter 4, the next paragraph)
 *
 * So: a gaunt young man in profile, facing right towards the stove, the
 * cheek fallen in under the bone and the jaw sharp, a blanket wrapped close
 * round his shoulders and up to his chin. His eye is cut wide open, the
 * pupil set in it, under a brow drawn down; the mouth is set hard and turned
 * down at the corner. The stove is the one spot of colour: a squat iron box
 * at the lower right with its fire printed red through the open door, and
 * its chimney going up out of the block.
 *
 * Shelley never gives his hair or features, so he is the panels' Victor
 * (../panels/people.tsx): clean-shaven, lean, a straight nose, his own dark
 * hair worn loose to the collar with a lock fallen over his brow. The
 * blankets are plain, with a woven stripe at the edge; the text says only
 * "blankets". Nothing here comes from a film or stage production.
 *
 * The head is drawn in its own frame and placed with HEAD_T; `onHead` carries
 * a point on it to the plate, for the markers.
 *
 * Seeds: 4201 for the ground, 4202 for the cuts in the figure.
 */

const HEAD_T = 'translate(-24 -12) scale(1.12)'
const onHead = (x: number, y: number): Pt => [
  Math.round((-24 + x * 1.12) * 10) / 10,
  Math.round((-12 + y * 1.12) * 10) / 10,
]

/** A lean young head in profile, facing right: a straight nose, a hard, square jaw. */
const HEAD = smooth([
  [138, 262, 1],
  [134, 226],
  [118, 190],
  [106, 146],
  [108, 100],
  [126, 60],
  [158, 36],
  [196, 32],
  [222, 46],
  [234, 70],
  [238, 92],
  [237.5, 104],
  [234, 112, 1],
  [240, 126],
  [247, 139],
  [254, 151, 1],
  [247, 154.5],
  [237, 155.5, 1],
  [237.5, 160],
  [239.5, 164, 1],
  [236.5, 167.5, 1],
  [238.5, 171],
  [236, 176],
  [240, 186],
  [239, 196, 1],
  [224, 202],
  [200, 202],
  [186, 196, 1],
  [192, 212],
  [198, 222],
  [195, 234],
  [198, 262, 1],
])

/** Dark hair, loose to the collar, swept back from the brow over the ear. */
const HAIR = smooth([
  [226, 56, 1],
  [214, 50],
  [200, 53],
  [186, 64],
  [174, 84],
  [168, 106],
  [150, 112],
  [140, 136],
  [142, 170],
  [146, 204],
  [148, 236, 1],
  [104, 240, 1],
  [94, 204],
  [88, 160],
  [92, 110],
  [110, 62],
  [144, 32],
  [186, 24],
  [214, 30],
  [229, 42],
  [233, 52],
])
/** The lock fallen over his brow. */
const LOCK = ribbon(
  [
    [204, 50],
    [214, 56],
    [220, 66],
    [223, 78],
    [222, 90],
    [219, 98],
  ],
  8.5,
  0.9,
  false,
)
/** The hollow under the cheekbone: a crescent the shading is clipped to. */
const HOLLOW = 'M198 128C204 150 220 164 238 162C224 154 214 142 212 126Z'

/** The ear, in front of the hair. */
const EAR = smooth([
  [174, 121],
  [167, 117],
  [162, 123],
  [161, 136],
  [164, 147],
  [170, 151],
  [175, 146],
  [177, 132],
])

/** The blanket wrapped round his shoulders and up round his neck. */
const BLANKET = smooth([
  [-12, 330, 1],
  [-12, 262],
  [30, 240],
  [84, 226],
  [130, 228],
  [170, 236],
  [206, 230],
  [232, 224],
  [252, 236],
  [266, 262],
  [274, 300],
  [276, 330, 1],
])

/** The stove at the lower right: an iron box on short legs, its door open on the fire, and its chimney. */
const STOVE = 'M280 240L330 240L330 304L280 304Z'
const STOVE_TOP = 'M274 232L330 232L330 242L274 242Z'
const LEGS = 'M284 304L290 304L290 312L284 312ZM320 304L326 304L326 312L320 312Z'
const CHIMNEY = 'M298 -4L312 -4L312 234L298 234Z'
const DOOR = 'M288 256L322 256L322 292L288 292Z'
const FLAMES = [
  'M292 290C289 283 291 276 295 271C296 276 298 278 299 280C300 274 303 268 306 263C307 270 311 275 312 281C313 278 315 277 317 276C318 282 318 287 316 290Z',
]
const COALS =
  'M290 292C290 288 296 287 299 289C301 286 307 286 309 289C312 286 318 287 320 290L320 292Z'

type Marks = {
  ground: string
  glow: string
  hair: string
  hairRim: string
  blanket: string
  weave: string
  stripe: string
  cheek: string
  neck: string
  socket: string
  stove: string
}

const marks = once<Marks>(() => {
  // The stove at the lower right is the only warmth and the only light: the
  // cabin is dark behind him and lighter towards the fire.
  const ground = portraitGround(4201, (x, y) => {
    const d = Math.hypot(x - 300, (y - 270) * 1.1)
    return 0.12 + clamp(1 - d / 360) ** 1.1 * 0.9
  })
  const r = rng(4202)

  // The heat off the open door, cut as short spokes to the left and up.
  let glow = ''
  for (let a = 150; a < 290; a += 9) {
    const ang = deg(a + between(r, -3, 3))
    const rad = between(r, 30, 38)
    const len = between(r, 8, 16)
    glow += gouge(
      305 + Math.cos(ang) * rad,
      274 + Math.sin(ang) * rad,
      305 + Math.cos(ang) * (rad + len),
      274 + Math.sin(ang) * (rad + len),
      1.1,
    )
  }

  // Dark hair swept back and falling to the collar: paper strands through
  // the black, and light caught along the crown from the stove.
  let hair = strands(
    r,
    30,
    (t) => [224 - t * 92, 40 + t * 24],
    (t) => [174 - t * 68, 96 + t * 138],
    [0.5, 1],
    2.2,
  )
  const hairRim = rimLight(r, { cx: 166, cy: 128, rx: 74, ry: 104 }, 230, 330, 30, 1.2)

  // The blanket: coarse wool, cut as short crossing strokes, lit on the right.
  let weave = ''
  for (let i = 0; i < 170; i++) {
    const x = between(r, 0, 270)
    const y = between(r, 236, 326)
    const L = clamp(0.25 + (x - 60) / 260)
    if (r() > L + 0.15) continue
    const a = r() < 0.5 ? deg(35) : deg(-35)
    const len = between(r, 3, 6)
    weave += gouge(x, y, x + Math.cos(a) * len, y + Math.sin(a) * len, 0.45 + L * 0.5)
  }
  // Long folds where it is drawn round him.
  const blanket =
    gouge(30, 256, 12, 322, 2, 3) +
    gouge(70, 246, 62, 324, 1.6, 2) +
    gouge(112, 244, 118, 326, 1.4, -1) +
    gouge(250, 262, 262, 326, 1.8, -2)
  // A woven stripe along the edge where he holds it closed: up round his
  // neck and down the front.
  const stripe =
    'M132 240C166 248 200 244 228 236C240 254 242 286 238 330' +
    'M136 248C168 256 202 252 226 244C234 262 234 294 230 330'

  // "dreadfully emaciated": the cheek fallen in under the bone, cut as
  // shallow bowls of line.
  const cheek = hatch(r, { x0: 190, x1: 246, y0: 110, y1: 176 }, 4, 0.7, 0.4)
  const neck = hatch(r, { x0: 150, x1: 196, y0: 206, y1: 222 }, 4.4, 0.14)

  // The shadowed socket of a sleepless eye.
  let socket = ''
  for (let rad = 9; rad < 17; rad += 3)
    socket += arcDashes(r, 226, 116, rad, deg(150), deg(250), [6, 14], [1.5, 3])

  // The iron of the stove: rivets along its top and bands round its chimney.
  let stove = ''
  for (let x = 284; x < 328; x += 8) stove += gouge(x, 248, x + 3, 248, 0.6)
  for (let y = 16; y < 220; y += 26) stove += gouge(300, y, 310, y + 1, 0.6)

  return { ground, glow, hair, hairRim, blanket, weave, stripe, cheek, neck, socket, stove }
})

function VictorFrankenstein({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-vf-head`
  const hairClip = `${uid}-vf-hair`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={`${uid}-vf-hollow`}>
          <path d={HOLLOW} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      <path d={m.glow} fill={PAPER} />
      {/* the stove and its chimney, "near the chimney of the kitchen stove" */}
      <path d={CHIMNEY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={STOVE + LEGS} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={STOVE_TOP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.stove} fill={PAPER} />
      <path d={DOOR} fill={INK} stroke={PAPER} strokeWidth={LINE.bold} />
      {FLAMES.map((d) => (
        <path
          key={d}
          d={d}
          fill={RED}
          className="lc-flicker"
          // four 0.9 s flickers after the delay: all done by 4 s
          style={timing({ delay: 0.3 })}
        />
      ))}
      <path d={COALS} fill={INK} stroke={PAPER} strokeWidth={1} />
      {/* the ink halo that lifts him off the ground */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={BLANKET} />
        <g transform={HEAD_T}>
          <path d={HEAD} />
          <path d={HAIR} />
        </g>
      </g>
      <g transform={HEAD_T}>
        <path d={HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.cheek} strokeWidth={0.85} clipPath={`url(#${uid}-vf-hollow)`} />
          <path d={m.socket} strokeWidth={0.9} />
          <path d={m.neck} strokeWidth={1.1} />
          {/* the sharp line of the jaw */}
          <path d="M184 170C190 184 204 196 222 200" strokeWidth={1.3} />
          {/* the throat */}
          <path d="M200 214C204 222 204 230 200 238" strokeWidth={1.1} />
        </g>
        <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={PAPER} />
          <path d={m.hairRim} fill={PAPER} />
        </g>
        <path d={LOCK} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
        <path d={EAR} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d="M172 127C168 129 167 137 169 142C170 144 172 144 173 141" strokeWidth={1.1} />
          {/* the brow drawn down */}
          <path d="M212 101Q224 97 237 104" strokeWidth={3.2} />
          <path d="M230 92L233 98" strokeWidth={0.9} />
          {/* an eye cut wide open */}
          <path d="M219 113Q226.5 106 235 111.5" strokeWidth={2.2} />
          <path d="M220.5 116.5Q227 122 234 115.5" strokeWidth={LINE.fine} />
          <path d="M234.5 111.5L236 114" strokeWidth={1.2} />
          {/* the nostril, and a mouth set hard, turned down at the corner */}
          <path d="M246 151C242 149 242 144 246 142" strokeWidth={1.4} />
          <path d="M239.5 164.2L229.5 165L227 168.6" strokeWidth={1.8} />
          <path d="M236 172Q233 173.4 230.5 172.6" strokeWidth={LINE.hairline} />
        </g>
        <circle cx={228.2} cy={113.6} r={2.7} fill={INK} />
        <circle cx={229} cy={112.8} r={0.8} fill={PAPER} />
      </g>
      {/* the blanket, wrapped close */}
      <path d={BLANKET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.weave} fill={PAPER} />
      <path d={m.blanket} fill={PAPER} />
      <path d={m.stripe} fill="none" stroke={PAPER} strokeWidth={2} strokeLinecap="round" />
      <InnerRule />
    </>
  )
}

export const victorFrankensteinArt: LinocutArt = {
  width: PW,
  height: PH,
  Draw: VictorFrankenstein,
}

const EYE = onHead(229, 112)
const CHEEK = onHead(210, 150)
/**
 * "melancholy and despairing" is marked on the brow drawn down over his eye.
 * (It pointed at his set mouth at first; a red line at a mouth reads as blood
 * at a glance.)
 */
const BROW = onHead(213, 100)

export const victorFrankenstein: Portrait = {
  name: 'Victor Frankenstein',
  art: victorFrankensteinArt,
  alt: "A linocut portrait of Victor Frankenstein as Walton first sees him in Letter 4, just taken aboard from the ice: a gaunt young man in profile, facing right, clean-shaven, with dark hair falling to his collar and a lock fallen over his brow. His cheek is fallen in under the bone and his jaw is sharp. His eye is wide open under a brow drawn down, and his mouth is set hard. A dark woollen blanket with a pale stripe along its edge is wrapped close round his shoulders and up under his chin. At the right is the ship's iron stove, its chimney rising out of the picture and its fire printed in red through the open door. Five numbered red markers point to his hollow cheek, his eye, the blanket, the stove and his brow.",
  describedBy: [
    {
      phrase: 'his body dreadfully emaciated by fatigue and suffering',
      at: [CHEEK[0] - 56, CHEEK[1] + 44],
      to: CHEEK,
    },
    {
      phrase: 'his eyes have generally an expression of wildness, and even madness',
      at: [EYE[0] + 36, EYE[1] - 56],
      to: EYE,
    },
    { phrase: 'we wrapped him up in blankets', at: [58, 290], to: [92, 266] },
    { phrase: 'the chimney of the kitchen stove', at: [280, 128], to: [298, 160] },
    {
      phrase: 'he is generally melancholy and despairing',
      at: [168, 34],
      to: BROW,
    },
  ],
  where: 'Letter 4',
  note: 'This is Victor at the end of his story, before he tells it: the man Walton finds is what ambition has left. Walton begins “to love him as a brother”, and the novel’s first picture of its hero is of a wreck.',
  artNote:
    'Shelley never describes his face or his hair, so he is drawn plainly, with the dark hair the panels give him; the markers point only at what Walton sees.',
}
