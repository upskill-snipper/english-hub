import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rays,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import { TorchFlame } from '../panels/people'
import {
  folds,
  GRIP_AT,
  GRIP_DIGITS,
  GRIP_LINES,
  GRIP_PALM,
  Hand,
  handPoint,
  locks,
  MAN_EAR,
  MAN_HEAD,
  ManEye,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
} from './common'

/**
 * Brabantio, on the night his daughter leaves his house, from what the play
 * says of him:
 *
 *   "Zounds, sir, you're robb'd, for shame put on your gown" (Iago, calling
 *   up to his window, Act 1, Scene 1)
 *   "Strike on the tinder, ho! Give me a taper! Call up all my people! This
 *   accident is not unlike my dream" (Brabantio, Act 1, Scene 1)
 *   "That I have ta'en away this old man's daughter, It is most true"
 *   (Othello, before the senate, Act 1, Scene 3)
 *
 * So: an old man woken in the night, his brow raised and lined with alarm,
 * holding up the taper he called for, its flame the one light in the dark
 * and the spot colour, and the gown over his shoulders that Iago told him to
 * put on. Iago's speech up to the window goes on in words the print never
 * quotes; only his "put on your gown" is a marker here.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx): every
 * man's head (MAN_HEAD), lit; a full white beard and white hair cut in paper
 * with ink strands; at his window that night bareheaded, in his white shirt,
 * here with his gown thrown on over it. The flame is the kit's TorchFlame,
 * the same flame every torch and candle in the panels burns with. There is
 * no other red in this plate but the markers.
 *
 * Seeds: 9701 (the figure's marks), 9710 (the ground).
 */

/**
 * His white hair: a full head of it, from the hairline at the top of his
 * brow over the crown, and down the back of his head and over the ear to the
 * nape, as the kit's WHITE_CROWN cuts it for him at his window that night
 * (../panels/people.tsx). WHY (2 October 2026): the portrait first left the
 * crown bare, so the old man of the gallery was bald and the same old man in
 * "Iago wakes Venice", bareheaded on the same night, had a full head of hair.
 */
const HAIR = spline([
  [151, 46, 1],
  [141, 33],
  [112, 29],
  [80, 40],
  [56, 62],
  [42, 94],
  [41, 134],
  [49, 170],
  [60, 186],
  [74, 180],
  [84, 160],
  [89, 138],
  [93, 112],
  [102, 100],
  [116, 96, 1],
  [124, 80],
  [134, 64],
  [143, 54],
])
/** Strands combed back over the crown from the hairline, stroked in ink and clipped to HAIR. */
const CROWN_STRANDS =
  'M149 47Q120 31 78 45M145 53Q113 39 64 58M139 59Q108 49 54 76M133 66Q103 59 47 98'

/** A full white beard, from below the ear round the jaw and falling to his chest. */
const BEARD = spline([
  [114, 128, 1],
  [125, 144],
  [140, 151],
  [156, 148],
  [166.4, 137.6, 1],
  [174, 143],
  [180, 160],
  [183, 186],
  [181, 214],
  [174, 240],
  [161, 258],
  [145, 264],
  [130, 254],
  [118, 230],
  [109, 198],
  [106, 162],
])

/** His gown thrown on over his shirt, loose over his shoulders. */
const GOWN = spline([
  [-14, 336, 1],
  [-10, 292],
  [6, 256],
  [36, 230],
  [70, 216],
  [100, 220],
  [118, 236, 1],
  [150, 262],
  [176, 270, 1],
  [204, 270],
  [222, 296],
  [232, 336, 1],
])
/** The white shirt at the back of his neck, above the gown. */
const SHIRT = spline([
  [60, 204, 1],
  [90, 200],
  [118, 208],
  [126, 230, 1],
  [100, 222],
  [64, 220, 1],
])

// His hand closed round the stem of the candlestick, before his chest; the
// taper above it, its flame level with his mouth and well in front of it.
const HAND_AT: Pt = [180, 262]
const HAND_S = 1.2
const inHand = handPoint(HAND_AT, 0, HAND_S)
const HAND_T = `translate(${HAND_AT[0]} ${HAND_AT[1]}) scale(${HAND_S})`
const STEM_X = inHand(...GRIP_AT)[0]
const STEM = `M${n(STEM_X - 4)} 236L${n(STEM_X + 4)} 236L${n(STEM_X + 4)} 300L${n(STEM_X - 4)} 300Z`
const DISH = `M${n(STEM_X - 17)} 228Q${n(STEM_X)} 236 ${n(STEM_X + 17)} 228L${n(STEM_X + 14)} 238Q${n(STEM_X)} 243 ${n(STEM_X - 14)} 238Z`
const TAPER = `M${n(STEM_X - 5)} 186L${n(STEM_X + 5)} 186L${n(STEM_X + 5)} 230L${n(STEM_X - 5)} 230Z`
/** The foot of the flame, on the wick at the top of the taper. */
export const FLAME_AT: Pt = [STEM_X, 184]

const marks = once(() => {
  const r = rng(9701)
  // White hair: ink strands on paper, combed back round the head; few, so it reads as white.
  const hair = locks(
    9702,
    20,
    (t) => [132 - t * 84, 64 + t * 4],
    (t) => [92 - t * 30, 116 + t * 64],
    [0.7, 1.1],
    -8,
  )
  // The beard in long locks, falling from the jaw and from under the lip, thinly inked.
  const beard =
    locks(
      9703,
      14,
      (t) => [120 + t * 54, 150 - t * 4],
      (t) => [130 + t * 40, 216 + Math.sin(Math.PI * t) * 36],
      [0.8, 1.2],
      2,
      1.2,
    ) +
    locks(
      9704,
      6,
      (t) => [112 + t * 16, 136 + t * 14],
      (t) => [118 + t * 12, 196 + t * 24],
      [0.7, 1],
      -3,
    )
  // The moustache, falling from under the nose into the beard.
  const moustache = 'M168 139Q176 142 178.5 152M165.5 141Q172 146 173 156M163 142Q167 149 167 158'
  // The lines of age and of alarm: the brow raised, the forehead creased
  // below the hairline, crow's feet at the eye.
  let lines = 'M141 66Q150 62 163 67M141 74Q151 71 164 75'
  for (let i = 0; i < 3; i++)
    lines += `M${n(145)} ${n(101 + i * 3)}L${n(136 - between(r, 0, 3))} ${n(98 + i * 4.5)}`
  for (let rad = 12; rad < 22; rad += 3.4)
    lines += arcDashes(r, 150, 118, rad, deg(80), deg(140), [8, 16], [2, 5])
  const gown = folds(9705, [-6, 110], [250, 268], 7) + gouge(150, 268, 162, 336, 1.4, -1)
  return { hair, beard, moustache, lines, gown }
})

/** Brabantio, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function BrabantioFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-bra-head`
  const hairClip = `${uid}-bra-hair`
  const beardClip = `${uid}-bra-beard`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
        <clipPath id={beardClip}>
          <path d={BEARD} />
        </clipPath>
      </defs>
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <path d={MAN_HEAD} fill={PAPER} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.lines} strokeWidth={LINE.hairline} />
      </g>
      {/* white hair round the back of his head */}
      <path d={HAIR} fill={PAPER} stroke={INK} strokeWidth={1.1} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={INK} />
        <path d={CROWN_STRANDS} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
      </g>
      <path d={MAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={MAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.5} />
      {/* the white shirt he was woken in, its collar at the back of his neck */}
      <path d={SHIRT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d="M78 214Q96 211 112 218" fill="none" stroke={INK} strokeWidth={0.9} />
      {/* "this old man's daughter": the full white beard */}
      <path d={BEARD} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <g clipPath={`url(#${beardClip})`}>
        <path d={m.beard} fill={INK} />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={m.moustache} strokeWidth={1.2} />
        <path d="M172.5 128C168.5 125.5 168.5 120 174 119" strokeWidth={1.5} />
        {/* the white brow, raised in alarm */}
        <path d="M143 86Q153 81.6 166 85.4" strokeWidth={1.6} />
      </g>
      <ManEye look="open" />
      {/* "Give me a taper!": the candlestick in his hand, and its flame */}
      <g fill={INK} stroke={INK} strokeWidth={6} strokeLinejoin="round">
        <path d={STEM} />
        <path d={DISH} />
        <path d={TAPER} />
      </g>
      <path d={STEM} fill={PAPER} stroke={INK} strokeWidth={1.1} />
      <path d={DISH} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={TAPER} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <path
        d={`M${n(STEM_X + 1.6)} 192L${n(STEM_X + 1.6)} 226`}
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
        strokeLinecap="round"
      />
      <TorchFlame at={FLAME_AT} s={2.1} rays={false} />
      <Hand
        transform={HAND_T}
        palm={GRIP_PALM}
        digits={GRIP_DIGITS}
        lines={GRIP_LINES}
        halo={3.4}
      />
    </g>
  )
}

/** A thick ink halo round head, beard and shoulders. */
function BrabantioKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={HAIR} />
      <path d={BEARD} />
      <path d={GOWN} />
    </g>
  )
}

const P = placing(30, 4, 0.95)
const FLAME = P.to(FLAME_AT[0], FLAME_AT[1] - 16)

const ground = once(() => {
  // His house at night: the only light is the taper's, falling away from it.
  const [fx, fy] = FLAME
  return portraitGround('othello-brabantio', 9710, (x, y) =>
    clamp(1.05 - Math.hypot(x - fx, (y - fy) * 1.15) / 190),
  )
})
const glow = once(() =>
  rays(rng(9711), FLAME[0], FLAME[1], { from: 26, to: 96, every: 8, width: 2.6 }),
)

function BrabantioPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <path d={glow()} fill={PAPER} />
      <g transform={P.transform}>
        <BrabantioKnockout />
        <BrabantioFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const brabantioPortrait: LinocutArt = { width: PW, height: PH, Draw: BrabantioPortrait }

const GOWN_AT = P.to(56, 262)
const BEARD_AT = P.to(150, 226)

export const brabantio: Portrait = {
  name: 'Brabantio',
  art: brabantioPortrait,
  alt: 'A linocut portrait of Brabantio in profile, facing right, head and shoulders, at night: an old man with a full head of white hair combed back from his brow and a full white beard falling to his chest, his brow raised and lined with alarm and his eye open. He wears the white shirt he was woken in, its collar showing at the back of his neck, and a loose dark gown thrown over his shoulders. In his hand before his chest he holds up a candlestick, and the flame of its taper, printed in red, is the only light, its rays cut through the dark round it. Three numbered red markers point to the gown, the flame and his white beard.',
  describedBy: [
    { phrase: 'put on your gown', at: [GOWN_AT[0] - 10, GOWN_AT[1] - 60], to: GOWN_AT },
    { phrase: 'Give me a taper!', at: [FLAME[0] + 42, FLAME[1] - 40], to: FLAME },
    { phrase: 'this old man’s daughter', at: [BEARD_AT[0] - 50, BEARD_AT[1] + 54], to: BEARD_AT },
  ],
  where: 'Act 1, Scenes 1 and 3',
  note: 'Woken in the night with the news that his daughter has gone, Brabantio calls for lights and raises his household. He cannot believe that she chose Othello freely, and accuses him before the senate of winning her with witchcraft.',
  artNote:
    'The play gives his age and his rank, not his looks. He is drawn as the panels draw him that night, an old man with a full white beard, bareheaded, with the gown he is told to put on; the taper’s flame is the only red in the print.',
}
