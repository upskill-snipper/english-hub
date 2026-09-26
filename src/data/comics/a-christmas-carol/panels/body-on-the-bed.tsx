import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng, wedge } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { SCROOGE_HEAD, SCROOGE_NECK, ScroogeHeadLit } from '../scrooge'
import { Cut, Nightcap } from './cut-figure'

/**
 * Stave Four: "The body on the bed", the thirteenth moment in the guide's
 * timeline. Every detail is from the text:
 *
 * - "he recoiled in terror, for the scene had changed, and now he almost
 *   touched a bed: a bare, uncurtained bed: on which, beneath a ragged sheet,
 *   there lay a something covered up". The curtains went to old Joe "rings and
 *   all", so the four-poster's rail is bare, and the sheet hangs torn over its
 *   side.
 * - "The room was very dark, too dark to be observed with any accuracy ... A
 *   pale light, rising in the outer air, fell straight upon the bed". So the
 *   room is left in the ink, and one shaft of light from a high window falls
 *   on the sheet and on Scrooge's face.
 * - "Scrooge glanced towards the Phantom. Its steady hand was pointed to the
 *   head. The cover was so carelessly adjusted that the slightest raising of
 *   it, the motion of a finger upon Scrooge's part, would have disclosed the
 *   face. He thought of it, felt how easy it would be to do, and longed to do
 *   it; but had no more power to withdraw the veil than to dismiss the spectre
 *   at his side." So the Phantom's pale hand points down at the head of the
 *   bed, and Scrooge's hand is stopped in the air above the sheet, not
 *   touching it.
 * - "A cat was tearing at the door". A cat claws at the door in the far
 *   corner, and its scratches are cut in the wood.
 * - Scrooge is close to us, lit, wide-eyed with fright: the head of the
 *   character portrait (ScroogeHeadLit, `wide`), with the red lower lid that
 *   is the spot colour's only use here. He wears his nightcap and
 *   dressing-gown.
 *
 * SAFEGUARDING. The moment is named for the body, and the body is not drawn.
 * Only the sheet is: lit, torn, lying almost flat, with no head, hands or
 * feet to be made out under it. The picture carries the moment through the
 * pointing hand, the stopped hand and Scrooge's face. Nothing is taken from a
 * film or a stage production. Seed 1313.
 */

const W = 860
const H = 340

type Marks = {
  room: string
  shaft: string
  sheetFolds: string
  floor: string
  shroud: string
  scratches: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1313)
  // "too dark to be observed with any accuracy": the walls barely cut at all,
  // a little more where the shaft of light spills.
  const light = (x: number, y: number) =>
    clamp(1 - Math.abs(x - (560 - (y - 30) * 0.5)) / 180) * 0.35 + 0.03
  const room = gougeField(r, { x0: 0, x1: W, y0: 6, y1: 250 }, light, { spacing: 7, max: 3 })
  // The shaft: long cuts falling from the high window down to the sheet.
  let shaft = ''
  for (let k = 0; k < 22; k++) {
    const t = k / 21
    const x0 = 536 + t * 60
    const x1 = 356 + t * 330
    let a = between(r, 0, 0.15)
    while (a < 1) {
      const b = Math.min(1, a + between(r, 0.15, 0.4))
      shaft += gouge(
        x0 + (x1 - x0) * a,
        70 + 130 * a,
        x0 + (x1 - x0) * b,
        70 + 130 * b,
        0.5 + Math.sin(t * Math.PI) * 1.4 * (1 - a * 0.3),
      )
      a = b + between(r, 0.03, 0.12)
    }
  }
  // Folds in the ragged sheet, long and slack.
  let sheetFolds = ''
  for (let k = 0; k < 9; k++) {
    const x = 380 + k * 40 + between(r, -8, 8)
    sheetFolds += gouge(x, 230, x + between(r, -10, 10), 262 + between(r, -6, 6), 0.9)
  }
  for (let k = 0; k < 5; k++) {
    const x = 400 + k * 70 + between(r, -10, 10)
    sheetFolds += gouge(x, 208, x + between(r, 30, 60), 214 + between(r, -3, 3), 0.7)
  }
  let floor = ''
  for (let y = 296; y < H; y += 6) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 30, 90)
      if (r() < 0.4) floor += gouge(x, y, x + len, y + between(r, -1, 1), 0.5 + (y - 296) * 0.02)
      x += len + between(r, 10, 30)
    }
  }
  let shroud = ''
  for (let k = 0; k < 5; k++) {
    const x = 458 + k * 11
    shroud += gouge(
      x,
      60 + between(r, 0, 10),
      x - 8 + k * 5,
      196,
      0.7 + between(r, 0, 0.6),
      between(r, -2, 2),
    )
  }
  let scratches = ''
  for (let k = 0; k < 5; k++) {
    const x = k < 3 ? 792 + k * 4 : 812 + k * 4
    scratches += gouge(x, 196 + between(r, -4, 4), x + 2, 222 + between(r, -3, 3), 0.7)
  }
  cached = { room, shaft, sheetFolds, floor, shroud, scratches }
  return cached
}

// ── The bed ────────────────────────────────────────────────────────────────

/** The bare four-poster: posts, the empty rail, the headboard, the frame. */
const BED_FRAME = [
  // posts: head (left) and foot (right), near and far
  'M306 40H316V300H306Z',
  'M330 30H338V214H330Z',
  'M742 40H752V300H742Z',
  'M722 30H730V200H722Z',
  // the bare rail, and its far side
  'M300 36H758V46H300Z',
  'M326 26H736V32H326Z',
  // the headboard, tall and carved at the top, and the low footboard
  'M312 96C312 80 324 70 340 70C352 70 360 78 362 90V236H312Z',
  'M722 172H744V240H722Z',
  // the frame under the mattress, and the legs
  'M316 270H744V284H316Z',
]
/** The sheet on the bed: its top lying almost flat, its torn edge hanging over the side. */
const MATTRESS = 'M360 226H742V262H360Z'
const SHEET_TOP =
  'M362 200C366 186 382 182 398 186C410 190 416 196 424 198C470 194 530 192 580 196C630 199 690 202 722 204L740 226L360 228Z'
const SHEET_SIDE =
  'M360 226L740 224L736 244L726 252L718 244L706 262L694 246L684 250L672 240L660 256L644 246L632 262L618 250L600 272L588 256L574 262L562 246L548 258L534 250L520 266L506 252L494 258L480 246L466 276L452 258L440 264L428 250L414 268L400 254L388 262L374 248L360 256Z'

/** Stripes of ticking on the mattress. */
const TICKING = Array.from({ length: 48 }, (_, k) => `M${364 + k * 8} 228V260`).join('')

// ── The Phantom, beyond the head of the bed ───────────────────────────────

const PHANTOM =
  'M480 22C462 22 452 38 452 58C452 68 454 76 458 82C446 94 440 112 438 136C436 160 436 184 436 206L524 206C524 184 522 160 518 136C514 112 508 94 498 82C502 74 504 66 502 54C500 36 492 22 480 22Z'
const PHANTOM_ARM: [string, number][] = [['M454 104C436 124 414 146 396 168', 13]]
/** Its hand, pale, the forefinger pointing down at the head of the bed. */
const PHANTOM_HAND =
  'M388 162C384 168 384 176 388 180L384 194C383 197 387 198 388 195L393 182C398 180 400 174 398 168Z'

// ── Scrooge, close to us ───────────────────────────────────────────────────

/** Where the portrait's head is set: head centre, size 80, facing right. */
const HEAD_SIZE = 80
const HEAD_SCALE = HEAD_SIZE / 170
const HEAD_AT = `translate(176 138) scale(${HEAD_SCALE}) translate(-110 -116)`
const GOWN =
  'M112 214C96 222 80 244 70 280L62 340L270 340L266 290C260 258 250 232 236 218C222 208 204 206 188 206L172 212C156 210 128 208 112 214Z'
const GOWN_ARM: [string, number][] = [['M230 236C252 230 274 220 296 208', 20]]
/** His hand, lit, stopped in the air above the sheet. */
const HAND =
  'M292 200C300 194 310 192 318 194L332 192C335 192 335 196 332 197L320 199L334 199C337 199 337 203 334 203L320 204L332 206C335 207 334 210 331 210L318 209L328 213C330 214 329 217 326 216L312 213C304 216 296 216 290 212Z'

/**
 * The cat at the door, seen from behind, reared up with its forepaws in the
 * wood and its tail on the floor.
 */
const CAT = [
  'M798 288C795 280 796 270 799 262C801 256 802 250 803 246L813 246C814 250 815 256 817 262C820 270 821 280 818 288Z',
  'M802 246C800 240 802 234 808 233C814 234 816 240 814 246Z',
  'M802.5 237L801 228L806 234ZM813.5 237L815 228L810 234Z',
]
const CAT_LEGS: [string, number][] = [
  ['M804 250L799 238L797 226', 3.2],
  ['M812 250L817 238L819 226', 3.2],
  ['M814 287C824 290 832 288 834 282', 2.6],
]

function BodyOnTheBed({ uid }: ArtProps) {
  const m = marks()
  const lit = `${uid}-lit`
  const shroudClip = `${uid}-shroud`
  return (
    <>
      <defs>
        <clipPath id={lit}>
          <path d={SCROOGE_HEAD} />
          <path d={SCROOGE_NECK} />
        </clipPath>
        <clipPath id={shroudClip}>
          <path d={PHANTOM} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 200], push: 1.03 })}>
        {/* the dark room */}
        <path d={m.room} fill={PAPER} />
        {/* the skirting: a thin solid cut, not a tint (the palette has no grey) */}
        <rect x={0} y={288.5} width={W} height={2} fill={PAPER} />
        <path d={m.floor} fill={PAPER} />

        {/* the high window, and the pale light falling straight upon the bed */}
        <rect x={530} y={20} width={72} height={52} fill={PAPER} />
        <path d="M566 20V72M530 46H602" stroke={INK} strokeWidth={3} />
        <g className="lc-fade-in" style={timing({ delay: 0.3, dur: 1.6 })}>
          <path d={m.shaft} fill={PAPER} />
        </g>

        {/* the door in the far corner, and the cat tearing at it */}
        <path d="M770 88H846V288H770Z" fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(790, 96, 790, 282, 0.7) + gouge(826, 96, 826, 282, 0.7)} fill={PAPER} />
        <circle cx={778} cy={190} r={2.4} fill={PAPER} />
        <path d={m.scratches} fill={PAPER} />
        <Cut parts={[{ shapes: CAT, limbs: CAT_LEGS }]} halo={1.6} />

        {/* the Phantom, beyond the head of the bed */}
        <Cut parts={[{ shapes: [PHANTOM], limbs: PHANTOM_ARM }]} halo={2.4}>
          <g clipPath={`url(#${shroudClip})`}>
            <path d={m.shroud} fill={PAPER} />
          </g>
          <path
            d="M462 44C454 54 454 70 460 80"
            fill="none"
            stroke={PAPER}
            strokeWidth={LINE.carve}
          />
          <path
            d={PHANTOM_HAND}
            fill={PAPER}
            stroke={INK}
            strokeWidth={1.1}
            strokeLinejoin="round"
          />
        </Cut>

        {/* the bare, uncurtained bed and the ragged sheet */}
        <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve}>
          {BED_FRAME.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        {/* the mattress's ticking, where the torn sheet does not reach */}
        <path d={MATTRESS} fill={PAPER} stroke={INK} strokeWidth={1.2} />
        <path d={TICKING} stroke={INK} strokeWidth={1.4} />
        <path d={SHEET_SIDE} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={SHEET_TOP} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={m.sheetFolds} fill={INK} />
        {/* holes and a tear in the sheet */}
        <path
          d={
            gouge(470, 244, 486, 246, 2) +
            gouge(612, 238, 624, 240, 1.8) +
            wedge(560, 262, 566, 246, 3, 0.4)
          }
          fill={INK}
        />
        <path d="M316 300H320M740 300H746" stroke={PAPER} strokeWidth={1} />

        {/* Scrooge, close to us, lit, his hand stopped over the sheet */}
        <Cut parts={[{ shapes: [GOWN], limbs: GOWN_ARM }]} halo={2}>
          <path
            d="M154 214C162 240 166 280 164 340M188 208C196 230 202 270 204 340"
            fill="none"
            stroke={PAPER}
            strokeWidth={1.6}
          />
          <path
            d={gouge(110, 240, 94, 330, 1.4, 1) + gouge(250, 244, 258, 330, 1.2)}
            fill={PAPER}
          />
          <path d={wedge(280, 214, 292, 206, 16, 15)} fill={INK} />
        </Cut>
        <path d={HAND} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
        <path d="M320 199L310 199M320 204L308 204M318 209L308 208" stroke={INK} strokeWidth={0.8} />
        <g transform={HEAD_AT}>
          <g fill={INK} stroke={INK} strokeWidth={10 / (HEAD_SIZE / 170)} strokeLinejoin="round">
            <path d={SCROOGE_HEAD} />
            <path d={SCROOGE_NECK} />
          </g>
          <g clipPath={`url(#${lit})`}>
            <ScroogeHeadLit uid={uid} seed={31} wide />
          </g>
        </g>
        <Nightcap
          part={{
            at: HEAD_AT,
            scale: HEAD_SCALE,
          }}
        />
      </g>
    </>
  )
}

export const bodyOnTheBed: LinocutArt = { width: W, height: H, Draw: BodyOnTheBed }
