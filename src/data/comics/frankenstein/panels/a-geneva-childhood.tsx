import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED, SERIF } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  n,
  rays,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  ALPHONSE_CUTS,
  ALPHONSE_HAIR,
  ELIZABETH_GIRL_CUTS,
  Figure,
  GOLD_HAIR,
  GOLD_HAIR_STRANDS,
  GRIP_HAND,
  HEAD_ALPHONSE,
  HEAD_ELIZABETH_GIRL,
  HEAD_VICTOR_BOY,
  HOLD_HAND,
  NECKCLOTH,
  OPEN_HAND,
  QUEUE,
  VICTOR_BOY_CUTS,
  VICTOR_BOY_PUPIL,
  VICTOR_HAIR,
  VICTOR_HAIR_CUTS,
  headAt,
  man,
  type P,
} from './people'

/**
 * Chapters 1 to 3: "A Geneva childhood and a fatal subject", the third moment
 * in the guide's timeline. Of all the years the moment covers, the panel is
 * the day Victor himself names as the start of his ruin, in Chapter 2, and
 * every detail is from it:
 *
 * - "When I was thirteen years of age, we all went on a party of pleasure to
 *   the baths near Thonon: the inclemency of the weather obliged us to remain
 *   a day confined to the inn." So the room is an inn's, with a low beamed
 *   ceiling, and rain streams down the window over the lake and the far
 *   mountains.
 * - "In this house I chanced to find a volume of the works of Cornelius
 *   Agrippa ... A new light seemed to dawn upon my mind; and, bounding with
 *   joy, I communicated my discovery to my father." So Victor, a boy of
 *   thirteen, strides forward holding the open book up to his father, and
 *   the light of it is cut white round the pages. The name on its titlepage
 *   is printed in the spot colour: the one red in the scene that matters, as
 *   Scrooge's name is on his gravestone. (A flush on his cheek was tried, and
 *   at panel size read as paint.)
 * - "My father looked carelessly at the titlepage of my book", and said "My
 *   dear Victor, do not waste your time upon this; it is sad trash." So his
 *   father sits back in his chair by the fire with his
 *   own paper on his knee, and his eyelid is half lowered: a glance, not a
 *   look. He is the older man of every panel ("the decline of life", Chapter
 *   1), grey hair tied at the nape.
 * - "we all went": the family was there. Elizabeth, "not quite a year" from
 *   Victor in age (Chapter 2), kneels in the window seat with her back to
 *   them, looking out at the storm, as the text sets her apart from him:
 *   "While my companion contemplated with a serious and satisfied spirit the
 *   magnificent appearances of things, I delighted in investigating their
 *   causes." Her gold hair ("the brightest living gold", Chapter 1) is cut in
 *   paper. The rest of the family are not drawn: the moment is between
 *   Victor, his father and the book.
 *
 * Not in the text, and drawn plainly: the fire in the grate on a wet day,
 * also printed in red, and the inn's furniture. Dress is the plain dress of the
 * 1780s. Nothing is taken from a film or stage production.
 * Seeds: 1701 (wall), 1702 (floor), 1703 (the book's light), 1704 (rain).
 */

const W = 860
const H = 340
const FLOOR = 272
const BOOK: P = [502, 156]

type Marks = {
  wall: string
  floor: string
  glow: string
  rain: string
  lake: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is lit by the grey window, the fire, and the book's light.
  const light = (x: number, y: number) => {
    const win = clamp(1 - Math.hypot((x - 118) * 0.9, y - 126) / 230) * 0.75
    const fire = clamp(1 - Math.hypot(x - 804, (y - 232) * 1.2) / 190) * 0.8
    const book = clamp(1 - Math.hypot(x - BOOK[0], y - BOOK[1]) / 170) * 0.7
    return Math.max(win, fire, book, 0.05)
  }
  const wall = gougeField(rng(1701), { x0: 0, x1: W, y0: 22, y1: FLOOR - 2 }, light, {
    spacing: 6,
    max: 3.6,
  })
  const rf = rng(1702)
  let floor = ''
  const V: P = [470, 60]
  for (let xt = -700; xt < 1600; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(rf, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.8 + t0 * 2.6,
        0.8 + t1 * 2.6,
      )
      t0 = t1 + between(rf, 0.02, 0.07)
    }
  }
  for (let y = FLOOR + 2; y < FLOOR + 16; y += 3)
    floor += gouge(0, y, W, y, 2.2 - (y - FLOOR) * 0.12)
  const glow = rays(rng(1703), BOOK[0], BOOK[1], { from: 30, to: 96, every: 7, width: 2.8 })
  const rr = rng(1704)
  let rain = ''
  for (let i = 0; i < 46; i++) {
    const x = between(rr, 30, 210)
    const y = between(rr, 40, 200)
    const len = between(rr, 10, 24)
    rain += `M${n(x)} ${n(y)}l${n(-len * 0.28)} ${n(len)}`
  }
  let lake = ''
  for (let y = 178; y < 206; y += 4) {
    let x = 40 + between(rr, -10, 0)
    while (x < 200) {
      const len = between(rr, 10, 30)
      lake += gouge(x, y, x + len, y, 0.5 + (y - 178) * 0.03)
      x += len + between(rr, 6, 14)
    }
  }
  cached = { wall, floor, glow, rain, lake }
  return cached
}

/** Elizabeth, kneeling on the window seat, looking out at the storm. */
const ELI_HEAD = { d: HEAD_ELIZABETH_GIRL, at: [206, 150] as P, scale: 1.02 }
const ELIZABETH = man({
  facing: -1,
  neck: [212, 174],
  hip: [222, 220],
  head: ELI_HEAD,
  robe: 'M206 172Q214 168 222 172L230 216L262 222L264 234L196 234L204 216Z',
  near: {
    arm: [
      [208, 180],
      [194, 196],
      [178, 204],
    ],
    leg: [],
    hand: { parts: OPEN_HAND, rot: 30, scale: 0.9 },
  },
  far: { arm: [], leg: [] },
  arm: 6.5,
  feet: false,
})

/** Victor at thirteen, striding forward with the open book held up to his father. */
const VIC_HEAD = { d: HEAD_VICTOR_BOY, at: [432, 150] as P, rot: -4, scale: 1.14 }
/**
 * His hands hold the book by its covers, behind it, so only a thumb shows
 * over the left-hand page and the far hand shows under the lower edge.
 * WHY (27 September 2026): both hands were first drawn in ink over the left
 * page, and at panel size the two sets of fingers ran together and read as
 * hands pressed flat on the page, or clawing at it.
 */
const VIC_NEAR: P[] = [
  [430, 184],
  [450, 180],
  [463, 169],
]
const VIC_FAR: P[] = [
  [422, 186],
  [452, 196],
  [482, 190],
]
/** His near thumb over the edge of the left-hand page. */
const THUMB = 'M462.4 167.6L471.4 161.4'
const VICTOR = man({
  facing: 1,
  neck: [426, 176],
  hip: [418, 240],
  head: VIC_HEAD,
  hair: VICTOR_HAIR,
  body: { width: 28, tails: 38, front: 2, swing: 4 },
  near: {
    arm: VIC_NEAR,
    leg: [
      [420, 240],
      [440, 276],
      [446, 314],
    ],
    hand: { parts: HOLD_HAND, rot: -20 },
  },
  far: {
    arm: VIC_FAR,
    leg: [
      [416, 240],
      [404, 278],
      [388, 312],
    ],
    hand: { parts: HOLD_HAND, rot: -70 },
  },
  arm: 7.5,
  leg: 8.5,
})
/**
 * The open book, turned to the reader: its dark boards behind, two pages, and
 * on the right-hand page, where a titlepage falls, the name in small capitals
 * between two rules. The left-hand page is plain text under his thumb.
 */
const BOARDS = 'M462 140L500 126L540 133L541 182L502 176L465 187Z'
const PAGE_L = 'M466 142L500 130L502 173L469 183Z'
const PAGE_R = 'M500 130L537 136L538 179L502 173Z'
const LINES_L =
  'M480 145L496 139.4M480 151L496 145.4M480 157L496 151.4M480 163L496 157.4M481 169L497 163.4M481 175L492 171.2'
const TITLE_RULES = 'M506 146L532 150.4M506 163L532 167.4'
const TITLE_AT = { x: 507, y: 159.6, rot: 9.4 }

/** His father, sitting back by the fire, his own paper on his knee. */
const ALP_HEAD = { d: HEAD_ALPHONSE, at: [666, 160] as P, rot: -6, scale: 1.24 }
const ALPHONSE = man({
  facing: -1,
  neck: [672, 190],
  hip: [664, 248],
  head: ALP_HEAD,
  body: { width: 34, tails: 26, front: 2 },
  near: {
    arm: [
      [666, 198],
      [652, 226],
      [630, 238],
    ],
    leg: [
      [660, 250],
      [622, 254],
      [620, 314],
    ],
    hand: { parts: GRIP_HAND, rot: 10 },
  },
  far: {
    arm: [
      [678, 200],
      [692, 228],
      [704, 238],
    ],
    leg: [
      [666, 252],
      [634, 260],
      [636, 314],
    ],
    hand: { parts: GRIP_HAND },
  },
  arm: 9,
  leg: 10,
})
/** "looked carelessly": his eyelid half lowered, in ink, over the eye ALPHONSE_CUTS opens. */
const HALF_LID = 'M6.4 -3.8Q9.8 -5.6 13.2 -3.8L13.2 -2.8Q9.8 -3.6 6.4 -2.8Z'
const NEWSPAPER = 'M592 232L630 222L640 248L602 258Z'
const NEWSPRINT =
  'M597 236L626 228.4M598.6 240.6L627.6 233M600.2 245.2L629.2 237.6M601.8 249.8L620 245'

function AGenevaChildhood({ uid }: ArtProps) {
  const m = marks()
  const clip = { pane: `${uid}-pane` }
  const et = headAt(-1, ELI_HEAD.at, 0, ELI_HEAD.scale)
  const vt = headAt(1, VIC_HEAD.at, VIC_HEAD.rot, VIC_HEAD.scale)
  const at = headAt(-1, ALP_HEAD.at, ALP_HEAD.rot, ALP_HEAD.scale)
  return (
    <>
      <defs>
        <clipPath id={clip.pane}>
          <rect x={42} y={50} width={150} height={150} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [BOOK[0], BOOK[1]], push: 1.03 })}>
        {/* the inn's wall, lit from the window, the fire and the book */}
        <path d={m.wall} fill={PAPER} />
        {/* the low beamed ceiling */}
        <rect x={0} y={0} width={W} height={18} fill={INK} />
        <rect x={0} y={18} width={W} height={3} fill={PAPER} />
        <path
          d={gouge(10, 8, 300, 9, 1.2) + gouge(340, 9, 700, 8, 1.2) + gouge(720, 8, 850, 9, 1)}
          fill={PAPER}
        />
        {/* the floor */}
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the window: rain streaming over the lake and the far mountains */}
        <rect x={30} y={38} width={174} height={174} fill={INK} />
        <rect x={42} y={50} width={150} height={150} fill={PAPER} />
        <g clipPath={`url(#${clip.pane})`}>
          <path
            d="M42 172L54 162L62 164L72 150L82 156L92 160L104 147L113 150L121 137L131 146L140 152L147 157L157 151L168 145L178 153L192 160V180H42Z"
            fill={INK}
          />
          <path d={gouge(76, 156, 100, 166, 0.9) + gouge(124, 144, 150, 160, 0.9)} fill={PAPER} />
          <path d={m.lake} fill={INK} />
          <g className="lc-drift" style={timing({ dur: 3.2 })}>
            <path d={m.rain} stroke={INK} strokeWidth={LINE.hairline} strokeLinecap="round" />
          </g>
        </g>
        <path d="M117 50V200M42 125H192" stroke={INK} strokeWidth={5} />
        <rect x={24} y={206} width={186} height={8} fill={PAPER} />
        <rect x={24} y={214} width={186} height={2} fill={INK} />
        {/* the window seat */}
        <rect x={14} y={232} width={260} height={7} fill={PAPER} />
        <path
          d={
            gouge(60, 252, 60, 268, 1) + gouge(140, 252, 140, 268, 1) + gouge(220, 252, 220, 268, 1)
          }
          fill={PAPER}
        />
        <rect x={14} y={239} width={260} height={2} fill={INK} />

        {/* Elizabeth, looking out at the storm */}
        <Figure parts={ELIZABETH} halo={2}>
          <g transform={et}>
            <path d={GOLD_HAIR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
            <path d={GOLD_HAIR_STRANDS} fill="none" stroke={INK} strokeWidth={0.9} />
            <path d={ELIZABETH_GIRL_CUTS} fill={PAPER} />
          </g>
          <path
            d={gouge(226, 184, 236, 216, 0.8, -1) + gouge(236, 224, 256, 228, 0.7)}
            fill={PAPER}
          />
        </Figure>

        {/* the fire in the grate, and the chimney-piece */}
        <rect x={752} y={138} width={108} height={8} fill={PAPER} />
        <rect x={758} y={146} width={96} height={126} fill={PAPER} />
        <path d="M774 272V196Q774 178 806 178Q838 178 838 196V272Z" fill={INK} />
        <path d={gouge(766, 152, 766, 268, 1.4) + gouge(846, 152, 846, 268, 1.4)} fill={INK} />
        <g fill={RED}>
          <path d="M784 262C784 254 792 250 798 255C801 249 812 249 815 255C821 251 830 254 829 262Z" />
          <path
            className="lc-flicker"
            d="M794 254C791 246 796 238 799 230C803 238 807 246 803 254Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.4 })}
            d="M810 254C808 248 811 243 813 238C815 243 818 248 816 254Z"
          />
        </g>
        <path d="M780 262H832M782 267H830" stroke={PAPER} strokeWidth={1.4} />

        {/* his father's chair */}
        <path
          d="M680 124C700 118 724 120 738 128L744 250L752 312H740L734 262L656 262L652 314H642L646 256L690 244Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path
          d={gouge(712, 132, 718, 238, 1, 1.6) + gouge(726, 136, 732, 236, 0.8, 1)}
          fill={PAPER}
        />

        {/* the light of the book, cut round it */}
        <path d={m.glow} fill={PAPER} />

        {/* his father, glancing at the titlepage */}
        <Figure parts={ALPHONSE} halo={2}>
          <g transform={at}>
            <path d={ALPHONSE_HAIR} fill={PAPER} />
            <path d={QUEUE} fill={INK} stroke={PAPER} strokeWidth={0.7} />
            <path d={ALPHONSE_CUTS} fill={PAPER} />
            <path d={HALF_LID} fill={INK} />
            <path d={NECKCLOTH} fill={PAPER} />
          </g>
          <path
            d={gouge(676, 206, 668, 244, 0.8, -1) + gouge(640, 256, 626, 254, 0.7)}
            fill={PAPER}
          />
        </Figure>
        <path
          d={NEWSPAPER}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.fine}
          strokeLinejoin="round"
        />
        <path d={NEWSPRINT} stroke={INK} strokeWidth={LINE.hairline} />

        {/* Victor, bounding with joy, the book held up */}
        <Figure parts={VICTOR} halo={2.2}>
          <g transform={vt}>
            <path d={VICTOR_HAIR_CUTS + VICTOR_BOY_CUTS} fill={PAPER} />
            <path d={VICTOR_BOY_PUPIL} fill={INK} />
            <path d={NECKCLOTH} fill={PAPER} />
          </g>
          <path
            d={gouge(420, 190, 414, 236, 0.8, 1) + gouge(412, 246, 402, 272, 0.7, 0.6)}
            fill={PAPER}
          />
        </Figure>
        <g>
          <path
            d={BOARDS}
            fill={INK}
            stroke={PAPER}
            strokeWidth={LINE.carve}
            strokeLinejoin="round"
          />
          <path
            d={PAGE_L + PAGE_R}
            fill={PAPER}
            stroke={INK}
            strokeWidth={LINE.fine}
            strokeLinejoin="round"
          />
          <path d="M500 130L502 173" stroke={INK} strokeWidth={LINE.carve} />
          <path d={LINES_L + TITLE_RULES} stroke={INK} strokeWidth={LINE.hairline} />
          <text
            x={TITLE_AT.x}
            y={TITLE_AT.y}
            fontSize={7.6}
            fontFamily={SERIF}
            fill={RED}
            transform={`rotate(${TITLE_AT.rot} ${TITLE_AT.x} ${TITLE_AT.y})`}
            textLength={25}
            lengthAdjust="spacingAndGlyphs"
          >
            AGRIPPA
          </text>
        </g>
        {/* his thumb over the edge of the page; his fingers are behind the cover */}
        <path d={THUMB} stroke={PAPER} strokeWidth={4.6} strokeLinecap="round" />
        <path d={THUMB} stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
      </g>
    </>
  )
}

export const aGenevaChildhood: LinocutArt = { width: W, height: H, Draw: AGenevaChildhood }
