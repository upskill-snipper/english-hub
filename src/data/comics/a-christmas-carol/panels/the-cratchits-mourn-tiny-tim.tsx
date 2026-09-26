import type { ReactNode } from 'react'

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  ribbon,
  rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { SCROOGE_HEAD, SCROOGE_NECK } from '../scrooge'
import { ScroogeNightHead } from './scrooge-at-night'

/**
 * Stave Four: "The Cratchits mourn Tiny Tim", the fourteenth moment in the
 * guide's timeline. Tiny Tim is not in the picture. As the style guide
 * requires, and as Dickens does, his absence is shown by what he left: the
 * Ghost of Christmas Present foresaw "a vacant seat... in the poor
 * chimney-corner, and a crutch without an owner, carefully preserved" (Stave
 * Three), where Tim was taken "to his stool before the fire" and sat "upon his
 * little stool". So his little stool stands empty in the chimney-corner and
 * his crutch leans beside it, pale in the firelight. Every other detail is
 * from Stave Four:
 *
 * - "They entered poor Bob Cratchit's house... and found the mother and the
 *   children seated round the fire. Quiet. Very quiet." "The mother and her
 *   daughters were engaged in sewing." Peter "had a book before him". The
 *   mother "laid her work upon the table, and put her hand up to her face.
 *   'The colour hurts my eyes,' she said." "It makes them weak by
 *   candle-light". So the family sit at a table by one candle, the work in a
 *   black heap before them (the colour is mourning black), the mother with her
 *   hand at her face.
 * - "little Bob in his comforter... came in. His tea was ready for him on the
 *   hob... Then the two young Cratchits got upon his knees and laid, each child
 *   a little cheek, against his face". The two are "boy and girl" in Stave
 *   Three. So Bob sits by the fire, still in his long white comforter, a small
 *   pot on the hob, the two small children on his knees with their cheeks
 *   against his bowed face. It is the moment before "My little, little child!".
 * - Scrooge and the Ghost of Christmas Yet to Come watch unseen from the
 *   threshold: "as he and the Spirit crossed the threshold". The Phantom is
 *   black and faceless with one outstretched hand, as in the gravestone
 *   panel; Scrooge wears his nightcap and dressing-gown, as in the other
 *   Stave Four panels, and his head is the shared ScroogeNightHead
 *   (scrooge-at-night.tsx), the portrait's own face, grave and watching.
 *
 *   WHY THAT HEAD (review, 26 September 2026). The first draft drew a small
 *   head of its own under the cut-figure nightcap, whose brim sat across the
 *   eye like a blindfold, and whose mouth line read as a smile at a family in
 *   mourning. The other panels that show his face lit use the portrait's
 *   head, so this one does too.
 *
 * The spot colour is the fire and the candle flame, and nothing else. Nobody's
 * looks are described in this scene beyond Bob's comforter and Peter's collar
 * (Stave Three), so the family are plain figures of 1843. Seed 1401.
 */

const W = 860
const H = 340
/** The skirting: the wall meets the floor here. */
const FLOOR = 276

type Marks = {
  wall: string
  floor: string
  passage: string
  candleRays: string
  gownLight: string
  robeFolds: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1401)
  // Two lights in a dark room: the fire, left of the middle, and the candle
  // on the table. The wall's cuts follow them.
  const light = (x: number, y: number) =>
    Math.max(
      clamp(1.05 - Math.hypot((x - 258) * 0.85, (y - 250) * 1.1) / 270),
      clamp(1 - Math.hypot(x - 664, (y - 170) * 1.1) / 210) * 0.75,
      0.04,
    )
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: FLOOR - 6 }, light, {
    spacing: 6.6,
    len: [16, 64],
  })
  // Floor boards in the firelight.
  const floorLight = (x: number, y: number) =>
    clamp(0.95 - Math.hypot((x - 258) * 0.6, (y - FLOOR) * 2) / 280, 0.06, 0.85)
  const floor = gougeField(r, { x0: 0, x1: W, y0: FLOOR + 4, y1: H }, floorLight, {
    spacing: 7.4,
    len: [30, 90],
    gap: [4, 12],
  })
  // The passage beyond the doorway: dark, a little light from the room.
  const passage = gougeField(
    r,
    { x0: 22, x1: 150, y0: 40, y1: 262 },
    (x) => clamp((x - 20) / 180, 0.08, 0.5),
    { spacing: 6, len: [8, 30] },
  )
  const candleRays = rays(rng(1414), 664, 170, { from: 16, to: 170, every: 5, width: 3.2 })

  // Scrooge's dressing-gown, lit from the fire he faces.
  let gownLight = ''
  for (let x = 124; x < 186; x += 3.2) {
    const L = clamp((x - 128) / 50)
    if (L <= 0.05) continue
    gownLight += gouge(x, 168, x + (x - 150) * 0.12, 290, 0.3 + L * 1.1, between(r, -0.5, 0.5))
  }
  const robeFolds =
    gouge(80, 70, 66, 118, 1, 1) +
    gouge(70, 116, 48, 262, 1.6, 3) +
    gouge(88, 120, 80, 262, 1.4, 1) +
    gouge(104, 124, 110, 262, 1.3, -1) +
    gouge(120, 170, 134, 262, 1.1, -1.4) +
    gouge(132, 114, 170, 120, 1, 0.8) +
    gouge(92, 58, 104, 76, 0.8, -0.6)

  cached = { wall, floor, passage, candleRays, gownLight, robeFolds }
  return cached
}

/** A black figure with one paper edge round all of its parts. */
function Silhouette({
  shapes,
  limbs = [],
  halo = 3.4,
  children,
}: {
  shapes: string[]
  limbs?: [string, number][]
  halo?: number
  children?: ReactNode
}) {
  return (
    <g>
      <g fill={PAPER} stroke={PAPER} strokeWidth={halo} strokeLinejoin="round">
        {shapes.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke={PAPER} strokeLinecap="round" strokeLinejoin="round">
        {limbs.map(([d, w]) => (
          <path key={d} d={d} strokeWidth={w + halo} />
        ))}
      </g>
      <g fill={INK}>
        {shapes.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        {limbs.map(([d, w]) => (
          <path key={d} d={d} strokeWidth={w} />
        ))}
      </g>
      {children}
    </g>
  )
}

// ── Heads ──────────────────────────────────────────────────────────────────

/**
 * One profile head for the family, facing left, centred on (410, 148) and
 * about 42 units from crown to chin; placed with `headAt`. By the fire the
 * faces are paper, lit from the side they turn to; at the table they are
 * black against the candle, with only their carved edge.
 */
const FACE =
  'M420 128C412 127 405 130 402 136C401 140 401 142 400 144C398 147 395 151 393 154C395 155.4 397 155.6 398.6 156C398.4 158 398 159 398.6 160.4C398 161.6 398.4 163 399.6 164C399.4 166 400.6 168.4 404 169.4C409 170 414 167 418 163C423 158 425 150 425 142C425 135 423 130 420 128Z'
const HAIR_SHORT =
  'M402 136C405 128 413 125 421 127C427 130 429 138 428 146C428 152 426 157 423 161L420 158C421 152 421 146 419 142C415 139 408 138 402 136Z'
/** Hair drawn back into a knot, for the mother and the girls. */
const HAIR_KNOT = HAIR_SHORT + 'M425 132C431 129 437 134 436 141C435 147 430 149 426 147Z'
const headAt = (x: number, y: number, s: number, right = false, tilt = 0) =>
  `translate(${x} ${y}) rotate(${tilt}) scale(${right ? -s : s} ${s}) translate(-410 -148)`

/**
 * A head. `lit`: a paper face with its features cut in ink, and the shadow
 * side hatched; otherwise a black profile with a paper edge.
 */
function Head({
  at,
  hair,
  shut = false,
  lit = true,
}: {
  at: string
  hair: string
  shut?: boolean
  lit?: boolean
}) {
  if (!lit)
    return (
      <g transform={at}>
        <g fill={PAPER} stroke={PAPER} strokeWidth={4.6} strokeLinejoin="round">
          <path d={FACE} />
          <path d={hair} />
        </g>
        <path d={FACE} fill={INK} />
        <path d={hair} fill={INK} />
      </g>
    )
  return (
    <g transform={at}>
      <g fill={INK} stroke={PAPER} strokeWidth={4.6} strokeLinejoin="round">
        <path d={FACE} />
        <path d={hair} />
      </g>
      <path d={FACE} fill={PAPER} />
      <path d={hair} fill={INK} />
      <path
        d="M406 132Q412 130 418 131M409 136Q416 135 421 137"
        stroke={PAPER}
        strokeWidth={1}
        fill="none"
        strokeLinecap="round"
      />
      {shut ? (
        <path
          d="M400.4 145Q403.4 147.2 406.4 145.2"
          stroke={INK}
          strokeWidth={1.8}
          fill="none"
          strokeLinecap="round"
        />
      ) : (
        <circle cx={403.4} cy={144.8} r={1.7} fill={INK} />
      )}
      <path
        d="M400.6 141.2Q403.6 139.8 406.8 141M414 146C417 145 419 148 418 151C417 153 415 153 414 152M417 156L421 153M416 161L420 158"
        stroke={INK}
        strokeWidth={1.4}
        fill="none"
        strokeLinecap="round"
      />
    </g>
  )
}

// ── The watchers, on the threshold ─────────────────────────────────────────

/** The Phantom in the doorway, facing right, its one hand held out. */
const PHANTOM =
  'M88 44C102 44 112 58 114 76C117 86 116 96 114 102C120 102 126 102 132 102C146 102 160 104 172 108L176 132C166 138 152 142 140 144C132 146 128 154 126 164C130 198 136 234 142 262C120 266 96 262 78 266C60 262 46 266 34 262C42 230 50 196 56 160C60 130 64 104 70 84C72 66 76 48 88 44Z'
const HOOD_RIM = 'M100 58C108 70 111 86 109 100'
/** The bony hand, in its own frame, pointing along +x (as in the gravestone panel). */
const HAND =
  'M-4 -11C6 -13 18 -13 27 -10.5L44 -8.6L46.4 -9.4L63 -6.4C66.6 -5.9 67.4 -2.8 64 -2.2L46.4 -2.6L36 -1.6C38.6 2.6 37.6 8.4 33 10C31 14 26 15 23 12.4C20 15 15.4 15 13.4 11.6C8 12 2 11 -4 8.6Z'
const HAND_CUTS =
  'M27 -10.5L28 -4M46 -8.8L46.4 -3M56 -7.4L56.4 -2.6M12 -1.6C20 -2.6 28 -0.8 33 2M33 10C30 7 29 4.6 30 1.6M23 12.4C21 9.6 21 7 22 4.6'
const HAND_AT = 'translate(174 120) rotate(34) scale(0.72)'

/** Scrooge, standing in front of the Spirit, his hands clasped. */
const GOWN =
  'M140 168C132 172 128 180 126 192C122 214 120 246 118 286L188 288C184 258 180 228 178 206C176 188 172 176 164 168C156 164 148 164 140 168Z'
const SCROOGE_ARM: [string, number] = ['M164 176C170 184 174 192 176 200', 7]
const SCROOGE_HANDS = 'M172 196C176 193 182 194 184 198L184 204C180 207 174 207 171 203Z'
const SCROOGE_HEAD_AT = 'translate(152 146) rotate(8) scale(0.18) translate(-110 -116)'

// ── The hearth ─────────────────────────────────────────────────────────────

/** Tim's little stool, empty, in the chimney-corner, and his crutch. */
const STOOL = 'M314 248H358V256H314Z'
const STOOL_LEGS = 'M319 256L314 282M353 256L358 282M336 256V282'
const CRUTCH = 'M350 282L359 180M348 177Q359 173 370 179M354 228L364 229'

// ── Bob and the two young Cratchits ────────────────────────────────────────

/** Bob in his chair, drawn in his own frame and placed larger with BOB_AT. */
const BOB_AT = 'translate(456 290) scale(1.3) translate(-420 -276)'
const BOB_BODY =
  'M414 164C426 158 440 158 450 166C458 176 460 194 458 214C458 222 456 228 452 232L384 236C376 236 372 232 374 226C378 222 388 222 398 220C402 204 404 186 406 176C408 170 410 166 414 164Z'
const BOB_LEGS: [string, number][] = [
  ['M382 234C380 248 378 262 376 274', 10],
  ['M396 234C396 248 394 262 392 276', 10],
]
const BOB_SHOES =
  'M366 272C370 270 378 270 382 274L382 280L362 280C362 276 363 273 366 272ZM382 274C386 272 394 272 398 276L398 282L378 282Z'
const BOB_ARM: [string, number] = ['M444 176C440 192 430 204 414 210C404 214 394 214 386 210', 9]
/** "at least three feet of comforter exclusive of the fringe, hanging down before him" */
const COMFORTER = 'M406 166C414 172 426 172 434 166L436 172C426 180 412 180 404 172Z'
const COMFORTER_ENDS =
  ribbon(
    [
      [410, 172],
      [410, 190],
      [410, 208],
      [410, 226],
    ],
    6,
    0.3,
    false,
  ) +
  ribbon(
    [
      [418, 174],
      [418, 192],
      [419, 210],
      [420, 228],
    ],
    5.6,
    0.3,
    false,
  )
const GIRL_BODY =
  'M378 186C384 180 394 180 400 186C404 196 406 210 404 222L402 230L372 230L374 214C372 204 374 192 378 186Z'
const BOY_BODY =
  'M426 176C432 172 440 174 444 180C448 190 448 204 446 216L444 226L420 226L422 208C420 196 422 184 426 176Z'
/** His chair, facing the fire. */
const CHAIR = 'M398 236H468M404 236L402 290M466 236V290'
const CHAIR_BACK = 'M452 172C458 168 466 168 470 172L468 238L454 238Z'

// ── The table, the candle and the family at their sewing ───────────────────

const TABLE_TOP = 'M528 214H852V221H528Z'
const TABLE = 'M532 221H848V232H532Z'
const TABLE_LEGS = 'M542 232V304M838 232V304'
/** "The colour hurts my eyes": the black work, laid upon the table. */
const WORK = 'M600 214C602 206 610 200 622 200C634 199 646 204 650 214Z'
const WORK_FOLDS = 'M608 212Q616 204 628 205M630 212Q640 204 648 210'
const DAUGHTER_WORK = 'M672 214C674 208 680 204 690 204C698 204 704 208 706 214Z'

/** Mrs Cratchit, facing the candle, her hand up to her face. */
const MOTHER =
  'M556 160C548 164 544 174 544 188C544 198 544 208 542 214L606 214C606 202 604 190 600 178C596 166 588 160 578 158C570 158 562 158 556 160Z'
const MOTHER_ARM: [string, number] = ['M592 168L604 194L592 146', 7]
const MOTHER_HAND = 'M577 136C579 129 588 127 594 130L597 139C593 144 584 145 578 142Z'

/** A daughter, her head bent over her needle. */
const DAUGHTER =
  'M706 170C700 178 698 192 698 214L750 214C750 196 746 182 738 172C730 166 714 166 706 170Z'
const DAUGHTER_ARM: [string, number] = ['M708 178C702 190 696 200 694 208', 6.5]

/** Peter, at the far end, the book before him. */
const PETER =
  'M782 166C774 174 772 192 772 214L828 214C828 196 824 180 816 170C808 164 790 162 782 166Z'
/** Master Peter's "monstrous shirt collar" (Stave Three). */
const PETER_COLLAR = 'M786 166L794 172L802 166L800 174L792 176L784 172Z'
const PETER_ARM: [string, number] = ['M784 174C778 188 774 200 770 208', 6.5]
const BOOK = 'M742 213C750 206 758 205 762 209C766 205 774 206 782 213Z'

function CratchitsMourn({ uid }: ArtProps) {
  const m = marks()
  const id = {
    door: `${uid}-door`,
    gown: `${uid}-gown`,
    candle: `${uid}-candle`,
  }
  return (
    <>
      <defs>
        <clipPath id={id.door}>
          <rect x={22} y={40} width={128} height={222} />
        </clipPath>
        <clipPath id={id.gown}>
          <path d={GOWN} />
        </clipPath>
        <clipPath id={id.candle}>
          <rect x={480} y={0} width={380} height={214} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 210], push: 1.03 })}>
        {/* the room, dark but for the fire and the candle */}
        <path d={m.wall} fill={PAPER} />
        <g clipPath={`url(#${id.candle})`}>
          <path d={m.candleRays} fill={PAPER} />
        </g>
        <rect x={0} y={FLOOR - 3} width={W} height={3} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={4} fill={INK} />
        <path d={m.floor} fill={PAPER} />

        {/* the hearth: mantel, the small fire, the pot on the hob */}
        <g transform="translate(0 14)">
          <rect x={184} y={140} width={172} height={8} fill={PAPER} />
          <rect x={188} y={148} width={164} height={3} fill={INK} />
          <path d="M200 262V160H312V262" fill={PAPER} />
          <path d="M214 262V188Q214 176 226 176H286Q298 176 298 188V262Z" fill={INK} />
          <path
            d="M228 238H284M229 244H283M230 250H282M232 238V256M280 238V256"
            fill="none"
            stroke={PAPER}
            strokeWidth={1.5}
          />
          <g fill={RED}>
            <path d="M232 238C232 232 238 229 243 233C245 228 254 228 256 233C261 230 269 233 268 238Z" />
            <path
              className="lc-flicker"
              d="M241 233C239 226 243 220 245 214C248 221 252 226 248 233Z"
            />
            <path
              className="lc-flicker"
              style={timing({ dur: 0.8, delay: 0.35 })}
              d="M254 233C253 228 256 224 257 220C259 224 261 228 259 233Z"
            />
          </g>
          {/* "His tea was ready for him on the hob" */}
          <path d="M268 218H296V224H268Z" fill={PAPER} />
          <path
            d="M274 218C272 210 276 204 282 204C288 204 292 210 290 218Z"
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.2}
          />
          <path d="M290 210L296 206" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
          <path
            d={
              gouge(204, 166, 204, 258, 1.4) +
              gouge(308, 166, 308, 258, 1.4) +
              gouge(224, 164, 288, 164, 1.1)
            }
            fill={INK}
          />
          <rect x={194} y={262} width={124} height={6} fill={PAPER} />
        </g>

        {/* the vacant seat in the chimney-corner, and the crutch without an owner */}
        <path d={STOOL_LEGS} stroke={INK} strokeWidth={6.6} fill="none" strokeLinecap="round" />
        <path d={STOOL_LEGS} stroke={PAPER} strokeWidth={3.6} fill="none" strokeLinecap="round" />
        <path d={STOOL} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <path d={CRUTCH} stroke={INK} strokeWidth={7} fill="none" strokeLinecap="round" />
        <path d={CRUTCH} stroke={PAPER} strokeWidth={4} fill="none" strokeLinecap="round" />

        {/* Bob by the fire, in his comforter, the two young Cratchits on his knees */}
        <g transform={BOB_AT}>
          <path d={CHAIR} stroke={PAPER} strokeWidth={7.6} fill="none" strokeLinecap="round" />
          <path d={CHAIR} stroke={INK} strokeWidth={4.4} fill="none" strokeLinecap="round" />
          <path d={CHAIR_BACK} fill={INK} stroke={PAPER} strokeWidth={1.8} strokeLinejoin="round" />
          <Silhouette shapes={[BOB_BODY, BOB_SHOES]} limbs={BOB_LEGS} />
          <path d={COMFORTER_ENDS} fill={PAPER} />
          <path
            d="M408 227L407.6 233M411 227V233M417 229L416.6 235M420 229L420.4 235"
            stroke={PAPER}
            strokeWidth={1.1}
          />
          {/* the boy, behind, his cheek to his father's jaw */}
          <Silhouette shapes={[BOY_BODY]} halo={3} />
          <Head at={headAt(431, 162, 0.52, false, 8)} hair={HAIR_SHORT} shut />
          {/* Bob, head bowed, eyes shut */}
          <Head at={headAt(410, 150, 0.8, false, -16)} hair={HAIR_SHORT} shut />
          <path d={COMFORTER} fill={PAPER} />
          {/* the girl, in front, her cheek to his face */}
          <Silhouette shapes={[GIRL_BODY]} halo={3} />
          <Head at={headAt(392, 170, 0.52, false, 10)} hair={HAIR_KNOT} shut />
          <path
            d={BOB_ARM[0]}
            stroke={PAPER}
            strokeWidth={BOB_ARM[1] + 3.4}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d={BOB_ARM[0]}
            stroke={INK}
            strokeWidth={BOB_ARM[1]}
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M382 206C386 204 390 206 390 210L388 214C384 215 381 213 381 210Z"
            fill={PAPER}
          />
        </g>

        {/* the table, the candle, and the family at their work */}
        <Silhouette shapes={[DAUGHTER]} limbs={[DAUGHTER_ARM]} />
        <path
          d={
            gouge(705, 180, 700, 212, 1.2, 1.2) +
            'M708 168L716 174L724 169L722 176L714 178L707 174Z'
          }
          fill={PAPER}
        />
        <Head at={headAt(716, 150, 0.66, false, -24)} hair={HAIR_KNOT} lit={false} />
        <Silhouette shapes={[PETER]} limbs={[PETER_ARM]} />
        <path d={PETER_COLLAR} fill={PAPER} />
        <path d={gouge(781, 178, 776, 212, 1.2, 1.2)} fill={PAPER} />
        <Head at={headAt(796, 144, 0.7, false, -12)} hair={HAIR_SHORT} lit={false} />
        <Silhouette shapes={[MOTHER]} limbs={[MOTHER_ARM]} />
        <path
          d={
            gouge(601, 176, 605, 212, 1.2, -1.2) +
            'M562 160L572 166L582 160L580 168L570 170L562 166Z'
          }
          fill={PAPER}
        />
        <Head at={headAt(574, 138, 0.7, true, 8)} hair={HAIR_KNOT} lit={false} />
        <path d={MOTHER_HAND} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <path d="M582 132L584 140M587 131L589 140M592 131L593 139" stroke={INK} strokeWidth={0.9} />
        <path d={TABLE} fill={INK} />
        <path d={TABLE_LEGS} stroke={INK} strokeWidth={6} />
        <path d={TABLE_TOP} fill={PAPER} />
        <path d="M532 232H848" stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={WORK} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <path d={WORK_FOLDS} fill="none" stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={DAUGHTER_WORK} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <path
          d="M692 208L688 190"
          stroke={PAPER}
          strokeWidth={LINE.hairline}
          strokeLinecap="round"
        />
        <path d={BOOK} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path d="M762 209V213M748 211L758 207.6M766 207.6L776 211" stroke={INK} strokeWidth={0.9} />
        {/* the candle: "It makes them weak by candle-light" */}
        <rect x={652} y={208} width={24} height={6} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <rect x={660} y={180} width={8} height={28} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.8 })}
          d="M664 178C660.5 174 661.5 169 664 162C666.5 169 667.5 174 664 178Z"
          fill={RED}
        />

        {/* the Phantom and Scrooge, unseen on the threshold */}
        <g transform="translate(0 14)">
          <path d="M14 34H158V262" fill="none" stroke={PAPER} strokeWidth={LINE.bold} />
          <rect x={22} y={40} width={128} height={222} fill={INK} />
          <g clipPath={`url(#${id.door})`}>
            <path d={m.passage} fill={PAPER} />
          </g>
          <path
            d="M22 40V262M150 40V262M22 40H150"
            fill="none"
            stroke={PAPER}
            strokeWidth={LINE.fine}
          />
          <Silhouette shapes={[PHANTOM]} halo={4}>
            <path d={m.robeFolds} fill={PAPER} />
            <path
              d={HOOD_RIM}
              fill="none"
              stroke={PAPER}
              strokeWidth={LINE.bold}
              strokeLinecap="round"
            />
          </Silhouette>
          <g transform={HAND_AT}>
            <path d={HAND} fill={INK} stroke={INK} strokeWidth={5} strokeLinejoin="round" />
            <path d={HAND} fill={PAPER} />
            <path d={HAND_CUTS} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
          </g>
          <Silhouette shapes={[GOWN, SCROOGE_HANDS]} limbs={[SCROOGE_ARM]} halo={3.4}>
            <g clipPath={`url(#${id.gown})`}>
              <path d={m.gownLight} fill={PAPER} />
            </g>
            <path
              d={SCROOGE_ARM[0]}
              stroke={INK}
              strokeWidth={SCROOGE_ARM[1]}
              fill="none"
              strokeLinecap="round"
            />
            <path d={SCROOGE_HANDS} fill={PAPER} stroke={INK} strokeWidth={1} />
          </Silhouette>
          <g transform={SCROOGE_HEAD_AT}>
            {/* a carved paper edge between his head and the Phantom's black robe */}
            <g fill={PAPER} stroke={PAPER} strokeWidth={22} strokeLinejoin="round">
              <path d={SCROOGE_HEAD} />
              <path d={SCROOGE_NECK} />
            </g>
            <ScroogeNightHead uid={uid} seed={141} />
          </g>
        </g>
      </g>
    </>
  )
}

export const cratchitsMourn: LinocutArt = { width: W, height: H, Draw: CratchitsMourn }
