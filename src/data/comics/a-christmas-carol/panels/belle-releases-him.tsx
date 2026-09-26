import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import {
  between,
  clamp,
  deg,
  gouge,
  gougeField,
  rng,
  type Rng,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { SCROOGE_HEAD, SCROOGE_NECK } from '../scrooge'
import { GHOST_PAST_CROWN, GhostOfChristmasPast } from './ghost-of-christmas-past'
import { ScroogeNightHead } from './scrooge-at-night'

/**
 * Stave II: "Belle releases him", the sixth moment in the guide's timeline.
 * Every detail is from the text:
 *
 * - "For again Scrooge saw himself. He was older now; a man in the prime of
 *   life. His face had not the harsh and rigid lines of later years; but it
 *   had begun to wear the signs of care and avarice. There was an eager,
 *   greedy, restless motion in the eye". So the young Scrooge has the old
 *   man's profile (the same SCROOGE_HEAD) under a full head of dark hair, and
 *   the spot colour marks his eye, as it marks the old man's: the passion
 *   "that had taken root".
 * - "He was not alone, but sat by the side of a fair young girl in a
 *   mourning-dress: in whose eyes there were tears, which sparkled in the light
 *   that shone out of the Ghost of Christmas Past." So they sit side by side,
 *   she is all in black, and a tear sparkles in the Ghost's light.
 * - "He was about to speak; but with her head turned from him, she resumed."
 *   So her head is turned from him and bowed, and his hand is held out to
 *   her, open ("Am I?").
 * - No room is described, so none is drawn: the pair sit on a plain bench in
 *   the Ghost's light, and the dark is cut away only where that light falls.
 * - The Ghost is the one figure shared by every Stave II panel
 *   (ghost-of-christmas-past.tsx, which quotes its description), in its
 *   `watch` pose, holly in hand, looking on; the pair are lit by "the light
 *   that shone out" of it, so a beam of its light falls across to them.
 * - Scrooge watches as the Ghost took him from his bed, "clad but lightly in
 *   his slippers, dressing-gown, and nightcap": the shared ScroogeNightHead
 *   (scrooge-at-night.tsx), the portrait's own head, lit by the Ghost, his old
 *   eye red.
 *
 * The belt's sheen cannot be printed in this palette and is left to the
 * words. Nothing is taken from a film or stage production.
 *
 * The figures are drawn at one working size and placed with a scale (the
 * pair at S_PAIR, Scrooge at S_OLD), so outlines inside those groups are
 * divided by their scale to print at the style guide's weights.
 */

const W = 860
const H = 340

/** The shared Ghost (ghost-of-christmas-past.tsx), placed and scaled, feet on y 300. */
const S_GHOST = 0.85
const GHOST_AT = `translate(${300 - 80 * S_GHOST} ${300 - 310 * S_GHOST}) scale(${S_GHOST})`
/** The Ghost's jet of light, where the beam that lights the pair starts. */
const JET: [number, number] = [
  300 - 80 * S_GHOST + GHOST_PAST_CROWN[0] * S_GHOST,
  300 - 310 * S_GHOST + (GHOST_PAST_CROWN[1] - 30) * S_GHOST,
]

/** Where the pair are placed, and their scale: nearer than the Ghost. */
const S_PAIR = 1.4
const PAIR_AT = `translate(600 300) scale(${S_PAIR}) translate(-590 -244)`
/** Scrooge, nearest of all, cut off by the bottom of the block. */
const S_OLD = 1.4
const OLD_AT = `translate(112 214) scale(${S_OLD}) translate(-140 -200)`

/**
 * Light from a point cut as broken spokes, like `rays`, but only between two
 * angles and thinning slowly, so it reaches the far side of the panel.
 */
function beam(r: Rng, cx: number, cy: number, a0: number, a1: number, from: number, to: number) {
  let d = ''
  for (let a = a0; a < a1; a += 2.6) {
    const ang = deg(a + between(r, -0.8, 0.8))
    let rad = between(r, from, from * 1.4)
    while (rad < to) {
      const len = between(r, 12, 34)
      const w = 2.4 * (1 - (rad / to) * 0.72)
      if (r() < 0.8)
        d += gouge(
          cx + Math.cos(ang) * rad,
          cy + Math.sin(ang) * rad,
          cx + Math.cos(ang) * (rad + len),
          cy + Math.sin(ang) * (rad + len),
          w,
        )
      rad += len + between(r, 6, 18)
    }
  }
  return d
}

type Marks = {
  ground: string
  floor: string
  beam: string
  gown: string
  skirt: string
  coat: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(606)
  // The only light is the Ghost's: strongest round its jet, and gathered in a
  // pool behind the pair, so their black shapes stand against it.
  const light = (x: number, y: number) => {
    const ghost = clamp(1 - Math.hypot(x - JET[0], (y - JET[1]) * 1.2) / 200) ** 1.2
    const pool = clamp(1 - Math.hypot((x - 612) / 205, (y - 212) / 140)) ** 0.7
    return Math.max(ghost, pool, 0.02)
  }
  const ground = gougeField(r, { x0: 0, x1: W, y0: 6, y1: 292 }, light)
  // The Ghost stands on the only floor that can be seen: a pool of its own light.
  const floorLight = (x: number, y: number) =>
    clamp(1 - Math.abs(x - 300) / 260) * clamp(1.1 - (y - 292) / 70)
  const floor = gougeField(r, { x0: 150, x1: 470, y0: 294, y1: 336 }, floorLight, {
    spacing: 4.6,
    len: [30, 110],
    gap: [3, 12],
    max: 3.4,
  })
  const toPair = beam(rng(63), JET[0], JET[1], -14, 30, 70, 380)
  // folds cut into the three black garments, on the side the light comes from
  const g = rng(62)
  // the gown's folds, widest on the side the Ghost lights
  const gown = [
    gouge(163, 218, 166, 302, 1.5 + between(g, 0, 0.3), -0.6),
    gouge(151, 222, 150, 302, 1.1, -0.3),
    gouge(126, 222, 121, 302, 0.7, 0.4),
    gouge(160, 150, 166, 200, 0.9, -0.8),
  ].join('')
  const skirt =
    gouge(488, 244, 478, 296, 1.1, 0.8) +
    gouge(497, 248, 491, 297, 0.9, 0.5) +
    gouge(507, 252, 506, 298, 0.7, 0.3) +
    gouge(507, 176, 505, 204, 0.7, 0.4) +
    gouge(490, 236, 506, 222, 0.6)
  const coat =
    gouge(623, 176, 621, 222, 0.9, 0.6) +
    gouge(629, 174, 628, 214, 0.6, 0.3) +
    gouge(612, 237.5, 640, 236, 0.6)
  cached = { ground, floor, beam: toPair, gown, skirt, coat }
  return cached
}

/** A paper outline round a black shape: drawn first, under it. */
function Halo({ d, w = 3.2 }: { d: string; w?: number }) {
  return <path d={d} fill={PAPER} stroke={PAPER} strokeWidth={w} strokeLinejoin="round" />
}
/** A thick ink halo round a lit shape, to lift it off a lit ground. */
function Knock({ d, w = 6 }: { d: string; w?: number }) {
  return <path d={d} fill={INK} stroke={INK} strokeWidth={w} strokeLinejoin="round" />
}
/** A limb: a thick stroke, with its paper outline when `halo` is given. */
function Limb({
  d,
  w,
  halo = 0,
  color = INK,
}: {
  d: string
  w: number
  halo?: number
  color?: string
}) {
  return (
    <>
      {halo > 0 && (
        <path
          d={d}
          fill="none"
          stroke={PAPER}
          strokeWidth={w + halo}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={w}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
}

// ── Old Scrooge, watching ─────────────────────────────────────────────────

const OLD_HEAD_AT = 'translate(148 113) scale(0.26) translate(-110 -116)'
const OLD_GOWN =
  'M128 138C116 142 108 152 106 168C104 190 106 214 104 236C102 258 98 280 95 302L173 304C171 284 168 262 170 240C172 222 172 204 170 188C168 168 166 152 158 141C150 136 138 135 128 138Z'
const OLD_ARM = 'M146 150C150 172 154 196 156 218'
/** The wide sleeve of the gown, and the hand hanging out of it. */
const OLD_CUFF = 'M147 208L165 205L170 226C164 229 154 230 146 228Z'
const OLD_HAND =
  'M152 229C156 228 161 228 164 229L165 238C165 243 163 246 160 247C157 247 154 245 153 241Z'
const OLD_FINGERS = 'M156 236L156.5 245M159.5 236L160 246'

// ── Belle ──────────────────────────────────────────────────────────────────

const BELLE_FACE =
  'M507 122C500 122 495 127 494 133L493.5 136L490.4 140.6L493 142.4L492.6 145L491.8 146.4L493 148L492.6 150C493.5 154 497 157 502 157C507 157 510 155 512 152L520 150C525 146 527 139 526 132C524 125 516 121 507 122Z'
/**
 * Fair hair, smooth over the ear and gathered low at the back: pale, with a
 * few strands cut in ink, as in her portrait (portraits/belle.tsx), which
 * reads "a fair young girl" as her colouring as well as her looks. The first
 * draft inked it dark, so the girl in the panel and the girl in the gallery
 * were not the same person; she is fair in both now.
 */
const BELLE_HAIR =
  'M495 131C495 124 501 119 509 118.5C519 118 527 123 529.5 131C532.5 136 533.5 142 531.5 147.5C529.5 152 525 154.5 520.5 153.5L517 151C516 146 515 141 513 137C510 133 505 131 500 131.5C498 131.5 496.5 131.5 495 131Z'
const BELLE_NECK = 'M505 155L506 168L515 168L515.5 151Z'
const BELLE_DRESS =
  'M502 166C510 162 520 162 528 166C531 180 530 194 528 208C532 222 534 236 538 250C544 266 549 284 552 300L467 300C469 284 473 262 477 246C478 240 482 236 488 234C494 226 500 218 506 208C503 194 499 180 502 166Z'
const BELLE_ARM = 'M507 174C503 186 501 196 503 205C498 213 494 219 490 225'
const BELLE_HANDS =
  'M497 222C493 220.5 488 220.5 484.5 222.5C482.5 223.8 482.5 226.4 484.5 227.4C488 229 493 229.4 497 228.8Z'
const BELLE_FINGERS = 'M494.5 222.6C491.5 223.6 489 224 486.5 224M488 227.6L494 227.8'
const TEAR = 'M497.6 141C496.4 143.6 496.6 145.4 497.8 145.8C499 145.4 499.2 143.6 497.6 141Z'
/** A four-pointed sparkle, centred on the origin. */
const SPARKLE = 'M0 -6.5L1.3 -1.3L6.5 0L1.3 1.3L0 6.5L-1.3 1.3L-6.5 0L-1.3 -1.3Z'

// ── The young Scrooge ──────────────────────────────────────────────────────

const YOUNG_HEAD_AT = 'translate(628 136) scale(-0.25 0.25) translate(-110 -116)'
/** Dark hair, full, in SCROOGE_HEAD's frame: the crown, the back and a whisker. */
const YOUNG_HAIR =
  'M161 64C158 40 140 26 112 24C80 22 52 36 40 60C30 80 30 110 40 130C46 142 56 150 66 156L80 150C76 138 78 126 88 118C96 112 104 108 110 96C118 82 134 72 152 72C156 70 159 68 161 64ZM112 116C118 124 120 136 118 150L108 150C108 138 106 126 102 118Z'
const YOUNG_HAIR_CUTS =
  'M150 58C130 44 100 40 70 54M146 50C124 36 94 34 64 46M120 64C100 60 80 64 60 78M100 76C84 80 70 92 60 108M84 92C72 104 66 118 64 132'
const YOUNG_BODY =
  'M624 166C634 160 648 160 655 166C660 184 661 204 658 224L660 246L628 246C622 212 618 190 618 178C618 172 620 168 624 166Z'
const YOUNG_THIGH = 'M650 238C636 240 620 241 606 242'
const YOUNG_SHINS = ['M606 242C606 262 605 280 604 294', 'M623 244C623 262 621 280 620 294']
const YOUNG_ARM = 'M630 176C622 188 616 198 612 206C604 208 597 208 591 207'
const YOUNG_HAND =
  'M591 204C587 203 584 202 581 199.5C579.5 199 578.8 200.4 579.6 201.6C581 203.2 582 204 582.5 204.4L576 204.8C573.5 205 572.5 206 573 207.2C573.6 208.4 575.5 208.6 577 208.6L586 210L591 210.5Z'
/** The white stock wound high round his neck, and its knot. */
const CRAVAT = 'M617 156C624 159 634 160 643 157L644 165C634 168 624 167 617 164Z'
const CRAVAT_KNOT =
  'M615 159C613 162 613.5 166 616.5 167.5L621 166C620.5 163 619.5 160.5 618.5 158.5Z'

// ── The bench ──────────────────────────────────────────────────────────────

const BENCH = 'M438 244H738V252H438Z'
const BENCH_LEGS = ['M452 252V300', 'M724 252V300']

function BelleReleasesHim({ uid }: ArtProps) {
  const m = marks()
  const hp = 3.2 / S_PAIR
  const ho = 3.2 / S_OLD
  return (
    <g className="lc-push" style={timing({ origin: [560, 200], push: 1.03 })}>
      {/* the dark, cut away where the Ghost's light falls */}
      <path d={m.ground} fill={PAPER} />
      <path d={m.floor} fill={PAPER} />
      <g className="lc-fade-in" style={timing({ delay: 0.3, dur: 1.4 })}>
        <path d={m.beam} fill={PAPER} />
      </g>
      <ellipse cx={302} cy={301} rx={28} ry={4} fill={INK} />

      {/* the Ghost, watching, its light springing from its crown */}
      <g transform={GHOST_AT}>
        <GhostOfChristmasPast pose="watch" />
      </g>

      {/* the pair on the bench, nearer than the Ghost */}
      <g transform={PAIR_AT}>
        <Halo d={BENCH} w={hp} />
        {BENCH_LEGS.map((d) => (
          <Limb key={d} d={d} w={6} halo={hp} />
        ))}
        <path d={BENCH} fill={INK} />
        <path d={gouge(446, 247, 730, 247, 0.6)} fill={PAPER} />

        {/* Belle, in her mourning-dress, her head turned from him */}
        <Halo d={BELLE_DRESS} w={hp} />
        <Limb d={BELLE_ARM} w={9} halo={hp} />
        <path d={BELLE_DRESS} fill={INK} />
        <path d={m.skirt} fill={PAPER} />
        <Limb d={BELLE_ARM} w={9} />
        <Knock d={BELLE_HANDS} w={3} />
        <path d={BELLE_HANDS} fill={PAPER} />
        <path d={BELLE_FINGERS} fill="none" stroke={INK} strokeWidth={0.6} strokeLinecap="round" />
        <g transform="rotate(-10 510 150)">
          <Knock d={BELLE_NECK} w={4} />
          <Knock d={BELLE_HAIR} w={4} />
          <Knock d={BELLE_FACE} w={4} />
          <path d={BELLE_NECK} fill={PAPER} />
          <path d={BELLE_FACE} fill={PAPER} />
          <path d={BELLE_HAIR} fill={PAPER} stroke={INK} strokeWidth={0.9} strokeLinejoin="round" />
          <path
            d="M498 128Q508 120.5 520 122Q528 125.5 530 137M501.5 130.5Q512 124 522 126.5Q528.5 131 529 144.5M507 131.5Q515.5 127.5 522.5 132Q527 138 525 150M513 122Q521 122 526 127"
            fill="none"
            stroke={INK}
            strokeWidth={0.7}
            strokeLinecap="round"
          />
          <g fill="none" stroke={INK} strokeLinecap="round">
            <path d="M495.5 131.5Q498.5 129.8 502.5 131" strokeWidth={0.95} />
            <path d="M496 136.2Q499 138 502 136.6" strokeWidth={0.95} />
            <path
              d="M497 137.4L496.4 139M499 137.9L498.8 139.6M501 137.4L501.2 139"
              strokeWidth={0.6}
            />
            <path d="M493.6 148.4L496.6 148" strokeWidth={0.9} />
          </g>
          {/* "tears, which sparkled in the light" */}
          <path d={TEAR} fill={PAPER} stroke={INK} strokeWidth={0.6} />
          <g className="lc-glow" style={timing({ delay: 0.4 })}>
            <path
              d={SPARKLE}
              transform="translate(488.5 134) scale(0.85)"
              fill={PAPER}
              stroke={INK}
              strokeWidth={0.6}
            />
          </g>
        </g>

        {/* the young Scrooge, in the prime of life, leaning to her */}
        <Halo d={YOUNG_BODY} w={hp} />
        {YOUNG_SHINS.map((d) => (
          <Limb key={d} d={d} w={10} halo={hp} />
        ))}
        <Limb d={YOUNG_THIGH} w={16} halo={hp} />
        <Limb d={YOUNG_ARM} w={10} halo={hp} />
        {YOUNG_SHINS.map((d) => (
          <Limb key={d} d={d} w={10} />
        ))}
        <Limb d={YOUNG_THIGH} w={16} />
        <path d={YOUNG_BODY} fill={INK} />
        <path d={m.coat} fill={PAPER} />
        <g fill={PAPER}>
          <circle cx={627} cy={196} r={1} />
          <circle cx={628} cy={208} r={1} />
        </g>
        <Limb d={YOUNG_ARM} w={10} />
        <Knock d={YOUNG_HAND} w={3} />
        <path d={YOUNG_HAND} fill={PAPER} />
        <path d="M576.5 206.8L585 207.6" stroke={INK} strokeWidth={0.6} />
        <g transform={YOUNG_HEAD_AT}>
          <path d={SCROOGE_NECK} fill={INK} stroke={INK} strokeWidth={16} />
          <path d={SCROOGE_HEAD} fill={INK} stroke={INK} strokeWidth={16} strokeLinejoin="round" />
          <path d={SCROOGE_NECK} fill={PAPER} />
          <path d={SCROOGE_HEAD} fill={PAPER} />
          <path d={YOUNG_HAIR} fill={INK} />
          <path
            d={YOUNG_HAIR_CUTS}
            fill="none"
            stroke={PAPER}
            strokeWidth={2.8}
            strokeLinecap="round"
          />
          <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
            <path d="M96 104C86 104 82 114 84 124C86 134 92 140 100 140" strokeWidth={6} />
            <path d="M164 154.5C159 155 155 155.5 151 157.5" strokeWidth={5} />
            <path d="M173 136C169 131 171 125 177 125" strokeWidth={4.5} />
            <path d="M146 88Q155 82 165 87" strokeWidth={8} />
            <path d="M145 98Q152 94 161 98" strokeWidth={5} />
          </g>
          <circle cx={157} cy={101} r={5.5} fill={INK} />
          {/* "an eager, greedy, restless motion in the eye" */}
          <path
            className="lc-fade-in"
            style={timing({ delay: 1.6, dur: 0.8 })}
            d="M146.5 105.5Q154 108 160.5 103.5"
            fill="none"
            stroke={RED}
            strokeWidth={7}
            strokeLinecap="round"
          />
        </g>
        <path d={CRAVAT} fill={PAPER} stroke={INK} strokeWidth={0.9} />
        <path d="M620 161.5Q631 163.5 642 161" fill="none" stroke={INK} strokeWidth={0.6} />
        <path d={CRAVAT_KNOT} fill={PAPER} stroke={INK} strokeWidth={0.9} />
      </g>

      {/* Scrooge, watching from the dark, lit by the Ghost */}
      <g transform={OLD_AT}>
        <Halo d={OLD_GOWN} w={ho} />
        <path d={OLD_GOWN} fill={INK} />
        <path d={m.gown} fill={PAPER} />
        <path
          d="M132 140C140 150 148 160 156 176M104 214C128 218 150 216 170 210M166 212L168 236"
          fill="none"
          stroke={PAPER}
          strokeWidth={1.1}
        />
        <circle cx={168} cy={238} r={2} fill={PAPER} />
        <Halo d={OLD_CUFF} w={ho} />
        <Limb d={OLD_ARM} w={14} halo={ho} />
        <path d={OLD_CUFF} fill={INK} />
        <path d="M149 224Q158 226 168 223" fill="none" stroke={PAPER} strokeWidth={0.9} />
        <Knock d={OLD_HAND} w={2.4} />
        <path d={OLD_HAND} fill={PAPER} />
        <path d={OLD_FINGERS} fill="none" stroke={INK} strokeWidth={0.7} strokeLinecap="round" />
        <g transform={OLD_HEAD_AT}>
          <ScroogeNightHead uid={uid} seed={61} />
        </g>
      </g>
    </g>
  )
}

export const belleReleasesHim: LinocutArt = { width: W, height: H, Draw: BelleReleasesHim }
