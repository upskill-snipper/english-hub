import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  gouge,
  gougeField,
  ribbon,
  rng,
  wedge,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  Cut,
  HEAD,
  HEAD_OPEN,
  HOLLY_LEAF,
  Nightcap,
  PRESENT_FACE,
  PRESENT_HAIR,
  headAt,
  scroogeHead,
} from './cut-figure'

/**
 * Stave Three: "Fred's party", the tenth moment in the guide's timeline, at
 * the height of the game of Yes and No. Every detail is from the text:
 *
 * - "to find himself in a bright, dry, gleaming room, with the Spirit standing
 *   smiling by his side"; the company, "with the dessert upon the table, were
 *   clustered round the fire, by lamplight". So the wall is cut nearly white,
 *   and the fire and the lamp are in the spot colour.
 * - "It was a Game called Yes and No, where Scrooge's nephew had to think of
 *   something ... this nephew burst into a fresh roar of laughter; and was so
 *   inexpressibly tickled, that he was obliged to get up off the sofa and
 *   stamp." When he laughs he is "holding his sides, rolling his head". So Fred
 *   is up from the sofa, head back, hands on his sides, one foot raised to
 *   stamp. His face keeps the ruddy edge it has in the counting-house panel
 *   ("his face was ruddy").
 * - "At last the plump sister, falling into a similar state, cried out: 'I
 *   have found it out! I know what it is, Fred!'"; she is "the plump one with
 *   the lace tucker". So she is on her feet, pointing at Fred, with a band of
 *   lace cut at her neck.
 * - Topper, "who could growl away in the bass", sits by the fire. The room
 *   has curtains, which the blind-man goes "smothering himself among", so a
 *   curtained window stands on the back wall.
 * - "Scrooge's niece ... was made comfortable with a large chair and a
 *   footstool, in a snug corner, where the Ghost and Scrooge were close behind
 *   her"; "the sunniest pair of eyes". So she sits in a wing chair with her
 *   feet up, her eye a cut spark.
 * - Scrooge, "wholly forgetting in the interest he had in what was going on,
 *   that his voice made no sound in their ears, he sometimes came out with
 *   his guess quite loud". So he leans in over her chair with his finger up,
 *   and nobody turns. He wears the "slippers, dressing-gown, and nightcap" he
 *   has had on since Stave One (see cut-figure.tsx).
 * - The Ghost of Christmas Present, "a jolly Giant": "one simple green robe,
 *   or mantle, bordered with white fur ... its capacious breast was bare ...
 *   Its feet ... were also bare; and on its head it wore no other covering
 *   than a holly wreath, set here and there with shining icicles. Its dark
 *   brown curls were long and free; free as its genial face, its sparkling
 *   eye, its open hand ... Girded round its middle was an antique scabbard;
 *   but no sword was in it". The print has no green, so the robe is ink and
 *   its colour is left to the words. The holly's berries take the spot colour:
 *   the Spirit's holly in Stave Three has "bright gleaming berries".
 *
 * Scrooge and the Ghost fade in after the room, since nobody there can see
 * them. Nobody's dress beyond the above is described, so the family wear the
 * plain evening dress of 1843. Nothing is taken from a film or a stage
 * production. Seed 1010.
 */

const W = 860
const H = 340

type Marks = {
  wall: string
  floor: string
  robe: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1010)
  // A bright room: the fire and the lamp at the left, and a warm light
  // everywhere else, a little less towards the snug corner.
  // A bright room: the wall is cleared almost to the paper, and ink is left
  // standing only where the light of the fire and the lamp falls off.
  const shade = (x: number, y: number) => {
    const fire = clamp(1 - Math.hypot(x - 118, (y - 196) * 1.2) / 300)
    const lamp = clamp(1 - Math.hypot(x - 186, y - 100) / 240)
    const room = 0.62 - clamp((x - 420) / 440) * 0.24 - clamp((40 - y) / 40) * 0.2
    return clamp(1 - Math.max(fire, lamp, room))
  }
  const wall = gougeField(r, { x0: 0, x1: W, y0: 4, y1: 222 }, shade, { max: 3.4 })

  let floor = ''
  const V = [430, -420]
  for (let xt = -700; xt < 1600; xt += 32) {
    const xb = V[0] + (xt - V[0]) * ((H - V[1]) / (236 - V[1]))
    let t0 = 0
    while (t0 < 1) {
      const t1 = Math.min(1, t0 + between(r, 0.3, 0.8))
      floor += wedge(
        xt + (xb - xt) * t0,
        236 + (H - 236) * t0,
        xt + (xb - xt) * t1,
        236 + (H - 236) * t1,
        0.8 + t0 * 2.4,
        0.8 + t1 * 2.4,
      )
      t0 = t1 + between(r, 0.02, 0.07)
    }
  }

  // The Spirit's mantle: long heavy folds, lit from the fire on the left.
  let robe = ''
  for (let k = 0; k < 10; k++) {
    const t = k / 9
    const x0 = 772 + (t - 0.5) * 70
    const x1 = 700 + t * 144
    robe += gouge(
      x0 + between(r, -3, 3),
      116 + between(r, 0, 50),
      x1 + between(r, -4, 4),
      310,
      0.8 + (1 - t) * 1.8,
      between(r, -5, 5),
    )
  }
  cached = { wall, floor, robe }
  return cached
}

// ── The company ────────────────────────────────────────────────────────────

/** Fred, up off the sofa, head back, hands on his sides, one foot raised to stamp. */
const FRED_HEAD = headAt(398, 128, 30, false, 26)
const FRED_BODY = [
  // tailcoat, its tails hanging behind him
  'M388 152C383 162 383 178 387 194L389 208L413 208L417 228L425 254L432 251L427 222L421 200C423 180 423 164 418 154C410 147 396 147 388 152Z',
  // the boot he stands on, and the one he lifts
  'M384 305L398 305L400 316L377 317C375 313 378 309 384 305Z',
  'M381 277L394 279L395 288L372 291C371 287 375 282 381 277Z',
]
const FRED_LIMBS: [string, number][] = [
  ['M396 206L393 308', 11],
  ['M407 208L383 244L389 281', 10.5],
  ['M390 157L372 180L389 196', 8.5],
  ['M415 158L429 182L415 198', 8.5],
]

/** The plump sister in the lace tucker, on her feet and pointing at Fred. */
const SISTER_HEAD = headAt(277, 134, 28, true, -8)
const SISTER_BODY = [
  'M264 196C255 230 242 270 231 312L317 312C307 270 295 230 287 196Z',
  'M262 198L288 198C291 182 291 166 286 153C278 148 268 148 262 153C258 166 258 182 262 198Z',
  // hair: a knot at the back and a ringlet by the cheek
  'M260 124C254 124 251 130 253 135C255 140 261 140 264 136Z',
  'M282 139C284 145 284 151 282 156L279 155C280 150 280 145 279 140Z',
]
const SISTER_LIMBS: [string, number][] = [
  ['M286 158L304 150L322 142', 7],
  ['M265 160L257 176L270 186', 7],
]

/** Topper by the fire, sitting back in his chair. */
const TOPPER_HEAD = headAt(50, 166, 26, true, -4)
const TOPPER_BODY = [
  'M38 180C34 196 34 214 38 236L66 238L68 226C62 214 60 198 58 184C52 178 44 177 38 180Z',
  // his chair: back, seat and legs
  'M22 176L30 176L32 300L26 300Z',
  'M24 236L70 238L70 244L24 243Z',
  'M66 244L70 244L72 300L68 300Z',
  'M86 288L100 288L102 298L82 299C81 294 83 291 86 288Z',
]
const TOPPER_LIMBS: [string, number][] = [
  ['M46 236L84 240L90 292', 10],
  ['M48 188L62 212L76 218', 7.5],
]

/** Scrooge's niece in the large chair, laughing, her feet on the footstool. */
const NIECE_HEAD = headAt(568, 166, 25, false, -4)
const NIECE_BODY = [
  'M562 184C558 196 558 214 562 232L590 232C590 214 588 196 582 184C576 180 568 180 562 184Z',
  // her skirt over the seat and down to the footstool
  'M560 228C544 236 530 256 524 290L552 292C558 270 570 256 600 252L600 232Z',
  // a knot of hair at the back, and ringlets by the cheek
  'M576 154C582 152 588 156 588 162C588 168 582 170 578 168Z',
  'M572 172C576 176 578 182 577 188L573 188C573 182 572 178 569 175Z',
]
const NIECE_LIMBS: [string, number][] = [['M566 194L560 216L574 226', 6]]
const CHAIR = [
  // the wing back, the seat, the legs
  'M596 164C604 156 616 156 622 164L622 252L598 254Z',
  'M556 236L622 238L622 256L556 254Z',
  'M558 254L564 254L562 302L556 302Z',
  'M614 256L620 256L622 302L616 302Z',
  // the footstool
  'M508 288L546 288L546 298L508 298Z',
  'M512 298L516 298L516 308L512 308ZM538 298L542 298L542 308L538 308Z',
]

// ── The unseen visitors ────────────────────────────────────────────────────

/** Scrooge, leaning in behind her chair with his finger up, guessing aloud. */
const SCROOGE_HEAD_PART = scroogeHead(640, 146, 32, true, 6)
const SCROOGE_GOWN = [
  'M632 166C622 180 618 202 620 224C614 248 610 272 608 296L680 296C676 270 668 246 664 224C666 202 662 182 654 170C648 164 638 162 632 166Z',
  // slippers
  'M604 294L622 294L622 300L600 301ZM664 294L682 294L684 301L662 301Z',
]
const SCROOGE_LIMBS: [string, number][] = [['M636 178L614 166L606 142', 10]]
const SCROOGE_HAND =
  'M601 146C599 140 601 136 605 135L604 124C604 121 608 121 608 124L609 136C612 138 612 144 609 147Z'

/**
 * The Ghost of Christmas Present, drawn in its own frame (the base of the
 * neck at the origin, facing left) and placed with GHOST_AT: a giant, half
 * as tall again as the people round it, one hand on its hip and the other
 * open behind Scrooge.
 */
const GHOST_AT = 'translate(772 98)'
const GHOST = {
  robe: 'M-44 8C-60 44 -70 124 -80 222L78 222C70 142 58 52 42 6C24 -4 -24 -4 -44 8Z',
  chest: 'M-20 0L16 0C12 26 4 50 -4 66C-10 48 -16 24 -20 0Z',
  furL: 'M-23 -3L-15 -3C-12 22 -8 46 -3 66L-10 71C-15 48 -19 24 -23 -3Z',
  furR: 'M12 -3L20 -3C16 24 8 50 -2 71L-6 64C3 46 9 22 12 -3Z',
  furFront: 'M-8 78L1 78C-1 120 -7 170 -15 224L-26 224C-18 170 -10 120 -8 78Z',
  furHem: 'M-80 210C-30 218 30 218 78 210L79 224L-81 224Z',
  girdle: 'M-54 70C-20 77 20 77 55 66L56 74C20 85 -20 85 -55 78Z',
  scabbard: 'M-44 78L-34 80L-58 170L-66 166Z',
  hand: 'M-78 64C-86 60 -94 60 -98 64C-100 67 -97 69 -93 68L-86 68C-88 72 -85 75 -81 73L-72 68Z',
  feet: 'M-58 224C-64 227 -64 232 -58 233L-32 233L-32 224ZM0 224L0 233L24 233C30 232 30 227 24 224Z',
  face: PRESENT_FACE,
  hair: PRESENT_HAIR,
}
const GHOST_LIMBS: [string, number][] = [
  // the far arm, hand on hip, its elbow out past the robe
  ['M34 14L66 52L46 72', 19],
  // the near arm, lowered, the open hand turned up
  ['M-38 16L-58 50L-74 66', 18],
]
/** The curls cut into the Spirit's hair, in the unshifted head frame. */
const CURLS: [number, number][] = [
  [16, -52],
  [21, -40],
  [24, -26],
  [26, -12],
  [25, 2],
  [20, 16],
  [12, -38],
  [15, -22],
  [18, -8],
]
/** Holly round the Spirit's head: [x, y, angle] for each leaf, in the Ghost's frame. */
const WREATH: [number, number, number][] = [
  [-17, -54, -50],
  [-8, -62, -26],
  [4, -65, -4],
  [15, -61, 22],
  [22, -52, 52],
]

function Ghost() {
  const m = marks()
  return (
    <g transform={GHOST_AT}>
      <Cut parts={[{ shapes: [GHOST.robe], limbs: GHOST_LIMBS }, { shapes: [GHOST.hair] }]} />
      <g transform="translate(-772 -98)">
        <path d={m.robe} fill={PAPER} />
      </g>
      <path d={GHOST.face} fill={PAPER} stroke={INK} strokeWidth={1.5} strokeLinejoin="round" />
      {/* "its capacious breast was bare", and the white fur round the robe */}
      <path d={GHOST.chest} fill={PAPER} />
      <path
        d="M-12 14Q-5 18 3 14M-10 28Q-4 31 1 28"
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      <g fill={PAPER}>
        <path d={GHOST.furL} />
        <path d={GHOST.furR} />
        <path d={GHOST.furFront} />
      </g>
      <path d={GHOST.furHem} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path
        d="M-19 14l2 3M-15 40l2 3M14 20l2 3M-7 110l2 3M-11 150l2 3M-17 190l2 3M-62 216l2 3M-38 218l2 3M20 218l2 3M56 216l2 3"
        stroke={INK}
        strokeWidth={LINE.hairline}
      />
      {/* the girdle and the antique scabbard, empty: its open mouth is cut white */}
      <path d={GHOST.girdle} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={GHOST.scabbard} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <ellipse cx={-39} cy={79} rx={5.4} ry={2.2} fill={PAPER} transform="rotate(12 -39 79)" />
      <path d="M-45 104L-41 105M-50 126L-46 127M-55 148L-51 149" stroke={PAPER} strokeWidth={1.2} />
      {/* a fur cuff and "its open hand" */}
      <path d={wedge(-66, 58, -74, 70, 5, 5)} fill={PAPER} />
      <path d={GHOST.hand} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <path d={GHOST.feet} fill={PAPER} stroke={INK} strokeWidth={1.1} />
      <path d="M-58 228h3M-54 230h3M20 228h3M24 230h3" stroke={INK} strokeWidth={0.9} />
      {/* the head: long dark curls, the lit face, the holly wreath */}
      <g transform="translate(0 8)">
        <path
          d={ribbon(
            [
              [2, -44],
              [0, -34],
              [3, -24],
              [0, -14],
            ],
            5,
          )}
          fill={INK}
        />
        {/* "Its dark brown curls were long and free" */}
        <path
          d={CURLS.map(([x, y]) => `M${x - 3} ${y + 1}Q${x} ${y - 4} ${x + 3} ${y + 1}`).join('')}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.2}
          strokeLinecap="round"
        />
        {/* "its sparkling eye" and a smile */}
        <path d="M-17 -41Q-13 -45 -8 -42" fill="none" stroke={INK} strokeWidth={1.8} />
        <path d="M-15 -39.5L-11 -39.5" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
        <path d="M-20 -24Q-15 -20 -11 -24" fill="none" stroke={INK} strokeWidth={1.4} />
        <path d="M-11 -29Q-9 -26 -11 -23" fill="none" stroke={INK} strokeWidth={1} />
        {WREATH.map(([x, y, a]) => (
          <g key={x} transform={`translate(${x} ${y}) rotate(${a})`}>
            <path d={HOLLY_LEAF} fill={INK} stroke={PAPER} strokeWidth={0.8} />
            <path d="M-6 0.5L6 0.5" stroke={PAPER} strokeWidth={0.7} />
          </g>
        ))}
        {/* "set here and there with shining icicles" */}
        <path
          d={
            wedge(-14, -56, -16, -46, 2.6, 0.3) +
            wedge(9, -63, 10, -53, 2.6, 0.3) +
            wedge(21, -56, 23, -46, 2.4, 0.3)
          }
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.6}
        />
        <g fill={RED}>
          <circle cx={-12} cy={-61} r={2.5} />
          <circle cx={-2} cy={-66} r={2.5} />
          <circle cx={10} cy={-66} r={2.3} />
          <circle cx={19} cy={-60} r={2.5} />
        </g>
      </g>
    </g>
  )
}

function FredsParty({ uid }: ArtProps) {
  const m = marks()
  const fredFace = `${uid}-fred-face`
  return (
    <>
      <defs>
        <clipPath id={fredFace}>
          <rect x={-17} y={-17} width={9} height={32} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 170], push: 1.03 })}>
        {/* the bright room */}
        <rect x={0} y={0} width={W} height={222} fill={PAPER} />
        <path d={m.wall} fill={INK} />
        <rect x={0} y={222} width={W} height={6} fill={PAPER} />
        <rect x={0} y={228} width={W} height={8} fill={INK} />
        <rect x={0} y={236} width={W} height={H - 236} fill={PAPER} />
        <path d={m.floor} fill={INK} />

        {/* the fireplace: a pale surround, a high fire, the lamp on the mantel */}
        <rect x={40} y={136} width={160} height={96} fill={PAPER} />
        <path
          d="M40 232V136M200 232V136M62 232V150H178V232"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d="M40 150H62M178 150H200M40 190H62M178 190H200" stroke={INK} strokeWidth={1} />
        <rect x={32} y={124} width={176} height={12} fill={INK} />
        <path d={gouge(34, 130, 206, 130, 1.3)} fill={PAPER} />
        <path d="M78 232V178Q78 160 96 160H144Q162 160 162 178V232Z" fill={INK} />
        <path d="M92 224H148M94 216H146M100 216V230M140 216V230" stroke={PAPER} strokeWidth={1.6} />
        <g fill={RED}>
          <path d="M94 216C92 206 100 202 106 206C108 198 118 196 122 204C128 198 140 202 146 216Z" />
          <path
            className="lc-flicker"
            d="M104 208C100 196 106 186 110 176C114 188 120 196 114 208Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.8, delay: 0.4 })}
            d="M118 206C116 194 122 184 126 172C130 184 134 194 130 206Z"
          />
          <path
            className="lc-flicker"
            style={timing({ dur: 0.9, delay: 0.1 })}
            d="M132 210C130 202 134 196 137 190C140 198 142 204 140 210Z"
          />
        </g>
        <path d="M178 126L194 126L190 118L182 118Z" fill={INK} />
        <path
          d="M181 118L191 118L193 96C193 90 190 86 186 86C182 86 179 90 179 96Z"
          fill={PAPER}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path
          className="lc-flicker"
          style={timing({ dur: 0.9, delay: 0.3 })}
          d="M186 112C183 108 184 103 186 97C188 103 189 108 186 112Z"
          fill={RED}
        />

        {/* a curtained window: the curtains the blind-man goes smothering himself among */}
        <rect x={456} y={34} width={70} height={150} fill={INK} />
        <path d="M491 34V184M456 84H526M456 134H526" stroke={PAPER} strokeWidth={2.2} />
        <path
          d="M444 26C452 60 454 120 450 196L468 196C472 150 470 90 466 26Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d="M538 26C530 60 528 120 532 196L514 196C510 150 512 90 516 26Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path
          d={
            gouge(452, 40, 456, 190, 1) +
            gouge(460, 34, 462, 190, 0.8) +
            gouge(530, 40, 526, 190, 1) +
            gouge(522, 34, 520, 190, 0.8)
          }
          fill={PAPER}
        />
        <rect x={436} y={20} width={110} height={8} fill={INK} />

        {/* the sofa Fred has just got up from */}
        <path
          d="M330 214C330 204 340 200 350 204C390 196 460 196 500 204C510 200 520 204 520 214L520 270L330 270Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <path d={gouge(352, 236, 500, 236, 1.2) + gouge(360, 212, 492, 210, 0.9)} fill={PAPER} />
        <path d="M336 270L340 282M514 270L510 282" stroke={INK} strokeWidth={4} />

        <Cut
          parts={[
            { shapes: [HEAD], ...TOPPER_HEAD },
            { shapes: TOPPER_BODY, limbs: TOPPER_LIMBS },
          ]}
        />

        <Cut
          parts={[
            { shapes: [HEAD_OPEN], ...SISTER_HEAD },
            { shapes: SISTER_BODY, limbs: SISTER_LIMBS },
          ]}
        >
          {/* the lace tucker */}
          <path
            d="M263 154Q266 158 269 154Q272 158 275 154Q278 158 281 154Q284 158 287 154L287 157Q284 161 281 157Q278 161 275 157Q272 161 269 157Q266 161 263 157Z"
            fill={PAPER}
          />
          <path
            d={
              gouge(270, 204, 252, 306, 1.2) +
              gouge(282, 210, 296, 306, 1.1) +
              gouge(276, 220, 274, 306, 0.8)
            }
            fill={PAPER}
          />
          <path d="M322 142L329 139" stroke={INK} strokeWidth={3} strokeLinecap="round" />
        </Cut>

        <Cut
          parts={[
            { shapes: [HEAD_OPEN], ...FRED_HEAD },
            { shapes: FRED_BODY, limbs: FRED_LIMBS },
          ]}
        >
          <g transform={FRED_HEAD.at}>
            <g clipPath={`url(#${fredFace})`}>
              <path
                d={HEAD_OPEN}
                fill="none"
                stroke={RED}
                strokeWidth={2.2}
                strokeLinejoin="round"
              />
            </g>
            <ellipse cx={-5} cy={4} rx={3} ry={2.3} fill={RED} />
            {/* eyes screwed up with laughing */}
            <path d="M-10 -3.5Q-7 -6 -4 -3.5" fill="none" stroke={PAPER} strokeWidth={1.2} />
          </g>
          <path
            d={gouge(396, 160, 392, 200, 0.9, 0.6) + gouge(414, 212, 424, 246, 0.8)}
            fill={PAPER}
          />
          <g fill={PAPER}>
            {[168, 178, 188].map((y) => (
              <circle key={y} cx={390.5} cy={y} r={1.2} />
            ))}
          </g>
          {/* his shirt collar and cravat */}
          <path d="M389 150L399 147L401 156L393 158Z" fill={PAPER} />
          <path d="M396 154L400 164L393 162Z" fill={PAPER} />
        </Cut>

        {/* the Spirit and Scrooge, whom nobody in the room can see */}
        <g className="lc-fade-in" style={timing({ delay: 0.9, dur: 1.4 })}>
          <Ghost />
          <Cut
            parts={[
              SCROOGE_HEAD_PART,
              { shapes: SCROOGE_GOWN, limbs: SCROOGE_LIMBS, front: [SCROOGE_HAND] },
            ]}
          >
            <Nightcap part={SCROOGE_HEAD_PART} />
            {/* the shawl collar and the cord of the gown */}
            <path
              d="M634 168C628 182 624 200 626 222"
              fill="none"
              stroke={PAPER}
              strokeWidth={1.4}
            />
            <path d="M622 224Q642 229 664 223" fill="none" stroke={PAPER} strokeWidth={1.4} />
            <path d="M644 227L640 252M648 227L650 250" stroke={PAPER} strokeWidth={1.2} />
            <path d={gouge(652, 234, 660, 290, 1.1, -0.6)} fill={PAPER} />
          </Cut>
        </g>
        <Cut parts={[{ shapes: CHAIR }]} halo={1.6} />
        <Cut
          parts={[
            { shapes: [HEAD_OPEN], ...NIECE_HEAD },
            { shapes: NIECE_BODY, limbs: NIECE_LIMBS },
          ]}
        >
          <g transform={NIECE_HEAD.at}>
            {/* "the sunniest pair of eyes" */}
            <path d={gouge(-10, -3, -5, -3.4, 1.1)} fill={PAPER} />
          </g>
          <path d={gouge(548, 250, 538, 282, 0.9) + gouge(560, 250, 548, 282, 0.9)} fill={PAPER} />
        </Cut>
      </g>
    </>
  )
}

export const fredsParty: LinocutArt = { width: W, height: H, Draw: FredsParty }
