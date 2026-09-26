import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED, SERIF } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  rays,
  ribbon,
  rng,
  wave,
  wedge,
  wisps,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Figure,
  GRIP_HAND,
  HEAD_UTTERSON,
  UTTERSON_CUTS,
  gent,
  handAt,
  headAt,
  type P,
  type Part,
} from './people'
import { COLLAR, UTTERSON_HAIR } from './investigation-kit'

/**
 * Chapter 2, "Search for Mr. Hyde": "The will and Mr Seek", the second moment
 * in the guide's timeline. Every detail is from the text:
 *
 * - "as soon as the cloth was taken away, he took up a candle and went into
 *   his business room. There he opened his safe, took from the most private
 *   part of it a document endorsed on the envelope as Dr. Jekyll's Will and
 *   sat down with a clouded brow to study its contents." So it is night, the
 *   one light is his candle (the spot colour), the safe stands open with its
 *   inner drawer pulled out, the endorsed envelope lies on the table, and he
 *   sits bent over the will, his brow cut low and furrowed.
 * - "It was worse when it began to be clothed upon with detestable
 *   attributes; and out of the shifting, insubstantial mists that had so long
 *   baffled his eye, there leaped up the sudden, definite presentment of a
 *   fiend." And that night, "still the figure had no face by which he might
 *   know it; even in his dreams, it had no face, or one that baffled him and
 *   melted before his eyes". So in
 *   the dark beyond the candle a small figure in a plain low hat rises out of
 *   drifting mist, and where its face should be there is only a blank, with
 *   the mist running across it. It is his imagination, not a visitor: it has
 *   no feet, its body dissolves into the mist, and the mist trails to it from
 *   the paper in his hands.
 * - "thus it was that there sprang up and grew apace in the lawyer's mind a
 *   singularly strong, almost an inordinate, curiosity to behold the features
 *   of the real Mr. Hyde." That is Mr Seek, and the quotation.
 *
 * Utterson is at home and bareheaded, so his hair shows for once. Lanyon,
 * whom he visits later that evening, is not in this room, so he is not drawn.
 * Seeds: 221 (the wall), 222 (the floor), 223 (the candle's light), 224 and
 * 225 (the mist).
 */

const W = 860
const H = 340
const FLOOR = 244
/** The candle flame. */
const FLAME: P = [538, 140]

type Marks = {
  wall: string
  floor: string
  shine: string
  mist: string
  trail: string
  dissolve: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // The room is lit by the one candle; the far right is left in the dark
  // for the mist.
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - FLAME[0]) * 0.9, (y - FLAME[1]) * 1.1) / 260) ** 1.3, 0.04)
  const wall = gougeField(rng(221), { x0: 0, x1: W, y0: 6, y1: FLOOR - 2 }, light, {
    spacing: 6.4,
    len: [16, 60],
  })
  // The floor: boards running towards the back wall, lit near the table.
  const f = rng(222)
  let floor = ''
  const V: P = [520, 60]
  for (let xt = -500; xt < 1400; xt += 34) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (FLOOR - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(f, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        FLOOR + (H - FLOOR) * t0,
        xt + (xb - xt) * t1,
        FLOOR + (H - FLOOR) * t1,
        0.8 + t0 * 2.6,
        0.8 + t1 * 2.6,
      )
      t0 = t1 + between(f, 0.03, 0.08)
    }
  }
  for (let y = FLOOR + 2; y < FLOOR + 22; y += 3.2)
    floor += gouge(0, y, W, y, 2.4 - (y - FLOOR) * 0.1)
  // Darkness pooling on the floor away from the light.
  for (let y = FLOOR + 30; y < H; y += 3.6) {
    floor += gouge(-10, y, 250 - (y - FLOOR) * 0.8, y, 1.2)
    floor += gouge(700 + (y - FLOOR) * 0.4, y, W + 10, y, 1.2)
  }
  const shine = rays(rng(223), FLAME[0], FLAME[1], { from: 16, to: 96, every: 6, width: 2.8 })
  // "the shifting, insubstantial mists": wisps across the dark right, a bank
  // at its foot, and a trail from the paper in his hands.
  const mist = wisps(rng(224), 9, { x0: 600, x1: 900, y0: 70, y1: 250 }, [3, 8])
  const trail = [
    ribbon(wave(430, 640, 132, 5, 90, 1.2, 26), 4.6, 0.9),
    ribbon(wave(440, 660, 104, 4, 110, 2.6, 26), 3, 0.9),
    ribbon(wave(610, 800, 170, 6, 80, 0.4, 24), 6, 0.8),
  ].join('')
  // The fiend's lower half dissolving: paper streaks across it, thickening
  // downwards until the figure is gone.
  const d = rng(225)
  let dissolve = ''
  for (let y = 180; y < 262; y += 5.5) {
    const k = (y - 180) / 80
    dissolve += ribbon(
      wave(
        between(d, 682, 700),
        between(d, 790, 812),
        y,
        1.6,
        between(d, 40, 70),
        between(d, 0, 6),
        18,
      ),
      0.8 + k * 5.4,
      0.8,
    )
  }
  cached = { wall, floor, shine, mist, trail, dissolve }
  return cached
}

/** The safe, standing open on the left. */
const SAFE = 'M60 318V150H190V318Z'
const SAFE_DOOR = 'M60 150L20 166V306L60 318Z'

/** Utterson, seated, bent over the will. */
const UTT_HEAD = { d: HEAD_UTTERSON, at: [336, 130] as P, rot: 14, scale: 1.3 }
const NEAR_ARM: P[] = [
  [334, 168],
  [352, 204],
  [382, 190],
]
const FAR_ARM: P[] = [
  [328, 168],
  [342, 202],
  [378, 184],
]
/** The will, held up to the candle, its written lines faint through the paper. */
const WILL = 'M380 118L414 124L408 196L374 190Z'

const UTTERSON: Part[] = gent({
  facing: 1,
  neck: [326, 164],
  hip: [318, 238],
  head: UTT_HEAD,
  body: { width: 30, hem: 14, flare: 4 },
  near: {
    arm: NEAR_ARM,
    leg: [
      [322, 238],
      [380, 238],
      [388, 316],
    ],
  },
  far: {
    arm: FAR_ARM,
    leg: [
      [316, 240],
      [372, 244],
      [374, 318],
    ],
  },
})
const UTT_HANDS: Part[] = [
  ...GRIP_HAND.map((q) => ({ ...q, t: handAt(NEAR_ARM, 1, { parts: GRIP_HAND, rot: -40 }) })),
]

/**
 * The figure of his imagination, facing him from the mist: a small frontal
 * figure in a plain low hat, its face a blank. Its coat ends in the mist.
 */
const FIEND_AT = 'translate(744 96)'
const FIEND_HEAD =
  'M-15 2C-15 -12 -8 -19 0 -19C8 -19 15 -12 15 2C15 16 9 24 0 24C-9 24 -15 16 -15 2Z'
const FIEND_HAT =
  'M-24 -8C-22 -11 -18 -12 -14 -12C-14 -24 -8 -30 0 -30C8 -30 14 -24 14 -12C18 -12 22 -11 24 -8C14 -5 -14 -5 -24 -8Z'
const FIEND_BODY =
  'M-9 22L-26 30C-34 34 -36 44 -36 56L-37 110L-40 138L-30 132L-28 150L-16 140L-8 156L2 142L12 154L20 138L32 146L36 128L39 136L37 110L36 56C36 44 34 34 26 30L9 22Z'
const FIEND_ARMS = 'M-33 44C-40 70 -42 92 -41 112M33 44C40 70 42 92 41 112'
/** The blank where its face should be. */
const FIEND_FACE = 'M-10 3C-10 -8 -5 -13 0 -13C5 -13 10 -8 10 3C10 13 5 19 0 19C-5 19 -10 13 -10 3Z'

function TheWill(_props: ArtProps) {
  const m = marks()
  const ut = headAt(1, UTT_HEAD.at, UTT_HEAD.rot, UTT_HEAD.scale)
  return (
    <>
      <g className="lc-push" style={timing({ origin: [470, 150], push: 1.03 })}>
        {/* the business room at night, lit by one candle */}
        <path d={m.wall} fill={PAPER} />
        <rect x={0} y={FLOOR - 4} width={W} height={4} fill={PAPER} />
        <rect x={0} y={FLOOR} width={W} height={H - FLOOR} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the safe: iron walls, its heavy door swung open on its hinges */}
        <path
          d={SAFE_DOOR}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
          strokeLinejoin="round"
        />
        <path d="M60 150L52 153V314L60 318Z" fill={PAPER} />
        <path
          d={
            gouge(30, 180, 30, 292, 0.9) +
            gouge(26, 172, 50, 162, 0.8) +
            gouge(26, 300, 50, 310, 0.8)
          }
          fill={PAPER}
        />
        {/* its bolts, and the keyhole plate */}
        <g fill={PAPER}>
          <rect x={52} y={176} width={9} height={5} />
          <rect x={52} y={232} width={9} height={5} />
          <rect x={52} y={288} width={9} height={5} />
        </g>
        <path d="M36 226L44 223V242L36 245Z" fill={PAPER} />
        <path d="M40 230V238" stroke={INK} strokeWidth={1.6} />
        <path d={SAFE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d="M60 318V150H190" fill="none" stroke={PAPER} strokeWidth={LINE.bold} />
        <rect
          x={74}
          y={164}
          width={102}
          height={140}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.fine}
        />
        {/* a shelf of papers tied in bundles */}
        <path d="M74 214H176" stroke={PAPER} strokeWidth={2.4} />
        <g fill={PAPER}>
          <path d="M80 196H118V212H80Z" />
          <path d="M82 186H116V194H82Z" />
          <path d="M126 180H170V212H126Z" />
        </g>
        <path d="M99 196V212M148 180V212" stroke={INK} strokeWidth={1.4} />
        {/* "the most private part of it": an inner cupboard, its drawer pulled out and empty */}
        <path d="M80 222H170V256H80Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d="M72 256H196L186 272H80Z" fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <rect x={127} y={262} width={16} height={3.4} fill={INK} />
        {/* its plinth */}
        <path d="M54 318H196V328H54Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />

        {/* the candle's light and the table */}
        <path d={m.shine} fill={PAPER} />
        <path d="M356 204H652L664 218H344Z" fill={PAPER} />
        <path d="M344 218H664V232H344Z" fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d="M412 232V330M640 232V330" stroke={PAPER} strokeWidth={9} />
        <path d="M412 232V330M640 232V330" stroke={INK} strokeWidth={6} />
        {/* the envelope, endorsed in the lawyer's hand */}
        <path d="M430 207H510L516 216H424Z" fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <text
          x={470}
          y={214.6}
          textAnchor="middle"
          fontFamily={SERIF}
          fontStyle="italic"
          fontSize={7.4}
          fill={INK}
          textLength={70}
          lengthAdjust="spacingAndGlyphs"
        >
          {"Dr. Jekyll's Will"}
        </text>
        {/* the candlestick and the flame */}
        <path d="M522 212H554L548 206H528Z" fill={INK} />
        <rect x={534} y={170} width={8} height={36} fill={INK} />
        <rect x={531} y={156} width={14} height={16} fill={PAPER} stroke={INK} strokeWidth={1} />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.8 })}
          d="M538 156C532 150 533 142 538 128C543 142 544 150 538 156Z"
          fill={RED}
        />
        <path d="M538 153C536 150 536.5 146 538 141C539.5 146 540 150 538 153Z" fill={PAPER} />

        {/* the mist, and the fiend that leaps up out of it */}
        <g className="lc-drift" style={timing({ delay: 0.2 })}>
          <path d={m.trail} fill={PAPER} opacity={0.9} />
          <path d={m.mist} fill={PAPER} />
        </g>
        <g className="lc-fade-in" style={timing({ delay: 0.9, dur: 1.4 })}>
          <g transform={FIEND_AT}>
            <g fill={PAPER} stroke={PAPER} strokeWidth={4} strokeLinejoin="round">
              <path d={FIEND_BODY} />
              <path d={FIEND_HEAD} />
              <path d={FIEND_HAT} />
            </g>
            <path
              d={FIEND_ARMS}
              fill="none"
              stroke={PAPER}
              strokeWidth={14}
              strokeLinecap="round"
            />
            <path d={FIEND_BODY} fill={INK} />
            <path d={FIEND_ARMS} fill="none" stroke={INK} strokeWidth={10} strokeLinecap="round" />
            <path d={FIEND_HEAD} fill={INK} />
            <path d={FIEND_HAT} fill={INK} />
            <path d={gouge(-13, -15.5, 13, -15.5, 0.8)} fill={PAPER} />
            {/* "it had no face": a blank where the face should be */}
            <path d={FIEND_FACE} fill={PAPER} />
          </g>
          {/* its body thinning into the mist from the waist down */}
          <path d={m.dissolve} fill={PAPER} />
        </g>
        {/* the chair, and Utterson on it */}
        <path
          d="M296 150L300 330M300 240H352M348 240L350 330"
          stroke={INK}
          strokeWidth={6}
          fill="none"
        />
        <path d="M296 150L300 330" stroke={PAPER} strokeWidth={1.2} fill="none" />
        <Figure parts={UTTERSON}>
          {/* his hair, bare indoors, cut as in every panel where he has no hat */}
          <path d={UTTERSON_HAIR + UTTERSON_CUTS + COLLAR} transform={ut} fill={PAPER} />
          {/* the clouded brow: a second furrow above the first */}
          <path d={gouge(6, -11, 14, -10, 0.7, 0.4)} transform={ut} fill={PAPER} />
        </Figure>
        {/* the will in his hands: fingers behind the sheet, the thumb over it */}
        <Figure parts={UTT_HANDS} halo={1.4} />
        <path d={WILL} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
        <path
          d="M384 134L408 138M383 144L407 148M382 154L406 158M381 164L405 168M380 174L398 177"
          stroke={INK}
          strokeWidth={0.9}
        />
        <path
          d="M380 190L387 181L391 178"
          fill="none"
          stroke={INK}
          strokeWidth={4}
          strokeLinecap="round"
        />
      </g>
    </>
  )
}

export const theWill: LinocutArt = { width: W, height: H, Draw: TheWill }
