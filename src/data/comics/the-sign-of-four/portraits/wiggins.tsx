import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, ProfileEar, ProfileEye, once, portraitGround, smooth } from './common'

/**
 * Wiggins, leader of the Baker Street Irregulars, as he comes into the
 * sitting room at Baker Street in Chapter 8, and nothing else:
 *
 *   "There was some show of discipline among them, despite their tumultuous
 *   entry, for they instantly drew up in line and stood facing us with
 *   expectant faces. One of their number, taller and older than the others,
 *   stood forward with an air of lounging superiority which was very funny
 *   in such a disreputable little scarecrow."
 *
 * So: a boy in profile, facing right, towards Holmes; out in front of the
 * line of smaller boys behind him; leaning back with his hips forward, his
 * chin up and his lids lowered, one hand pushed into the pocket of a coat far
 * too big for him, its shoulders hanging, its sleeves too long and ragged at
 * the ends, a patch on it and a tear. Behind him, two of the line, smaller
 * and younger, with wide, expectant eyes.
 *
 * He is drawn as the panel of this moment draws him
 * (../panels/the-baker-street-irregulars.tsx): a flat cap, a coat far too big
 * for him, leaning back with one hand in his pocket; and the boys are the
 * panel's boys, children of ten or twelve in the ragged dress of the London
 * streets of 1888, in round caps or bareheaded. No boy is described beyond
 * this, so they are plain. They are drawn with the same care as every other
 * figure: poor, not comic. The sentence before this passage calls the boys
 * by a word of its day that the art does not use, so the card prints the
 * passage from the sentence after it. His face is not marked with dirt: a
 * mark on a child's face reads at a glance as a bruise.
 *
 * There is no red: nothing in the passage asks for it.
 *
 * Seeds: 5201 for the ground, 5202 for the cuts in the figures.
 */

/** A boy's head, rounder than a man's, a small nose, a soft chin, facing right. */
const HEAD = smooth([
  [126, 236, 1],
  [126, 214],
  [118, 192],
  [110, 164],
  [108, 128],
  [116, 98],
  [134, 76],
  [158, 64],
  [184, 62],
  [204, 72],
  [216, 88],
  [221, 104],
  [223, 116, 1],
  [219.5, 124],
  [223, 132],
  [227, 140],
  [230, 147, 1],
  [225, 150.4],
  [220.6, 151.2, 1],
  [221.6, 156],
  [220.4, 159.4, 1],
  [217.4, 161, 1],
  [219.4, 164.4],
  [218.2, 168.6, 1],
  [214.6, 171.4],
  [215.4, 178],
  [211, 185],
  [202, 189],
  [190, 190],
  [182, 196],
  [178, 236, 1],
])
/** His hair, under the cap: short and rough, cut off above the collar. */
const HAIR = smooth([
  [106, 100, 1],
  [150, 98],
  [148, 116],
  [142, 132],
  [134, 146],
  [126, 152],
  [118, 158, 1],
  [114, 150],
  [109, 160, 1],
  [106, 132],
])
/**
 * The flat cap the panel gives him, scaled from the kit's frame to this
 * head: a soft crown and a short peak.
 */
const CAP =
  'M107.8 98.3C102.4 67.7 124.8 45.3 158.8 43.9C192.8 42.5 213.2 57.5 216.6 82.7L247.2 89.5C252 92.9 247.2 98.3 237 98.3L114.6 103.1Z'
const CAP_CUTS = gouge(118, 94, 212, 88, 1.6, -1) + gouge(150, 52, 196, 54, 0.9, -1.4)
/** The head leans back: "an air of lounging superiority". */
const TILT = 'rotate(-9 152 236)'

/**
 * "a disreputable little scarecrow": a man's coat on a boy, the shoulders
 * hanging past his own, open down the front. He leans back, so the coat's
 * back edge slopes away to the left and its front comes forward below.
 */
const COAT = smooth([
  [64, 330, 1],
  [66, 280],
  [70, 236],
  [90, 208],
  [124, 196],
  [158, 204],
  [188, 202],
  [208, 216],
  [222, 250],
  [236, 290],
  [244, 330, 1],
])
/** The open front: his shirt between the coat's fronts. */
const SHIRT = smooth([
  [184, 206, 1],
  [204, 214, 1],
  [226, 330, 1],
  [204, 330, 1],
])
const LAPEL = smooth([
  [176, 212, 1],
  [194, 222, 1],
  [214, 330, 1],
  [196, 330, 1],
  [184, 270],
])
/**
 * The near arm in its long sleeve, the elbow out behind him, the hand pushed
 * out of sight into the side pocket of the coat.
 */
const SLEEVE = smooth([
  [86, 222],
  [112, 206],
  [132, 222],
  [130, 258],
  [150, 286, 1],
  [178, 282, 1],
  [182, 304, 1],
  [146, 312],
  [110, 286],
  [92, 256],
])
/** The pocket the hand is in. */
const POCKET = 'M150 300L196 296L198 304L152 308Z'
/** The ragged end of the long sleeve, frayed into a few loose ends over the pocket. */
const FRAY =
  gouge(156, 290, 158, 304, 0.9, 0.4) +
  gouge(164, 288, 165, 300, 0.8, -0.3) +
  gouge(171, 287, 174, 301, 0.9, 0.5)

/** The patch on the coat and the tear, cut round in paper. */
const PATCH = 'M86 248L110 244L112 268L88 272Z'
const TEAR = 'M200 258l6 10l-4 2l8 12'

// ── THE LINE OF BOYS BEHIND HIM ─────────────────────────────────────────────
/**
 * A younger boy's head in a frame of its own, facing right, about 38 high
 * and centred on (0, 0), cut in paper, set into the block by `t`. The
 * panel's boy, with the panel's round cap; the bareheaded boy's hair is a
 * rough rounded mass (a row of spikes read as a crown at this size).
 */
const BOY_HEAD =
  'M-8 24C-10 19 -14.6 15 -15.2 6C-15.8 -8 -7.6 -19 3 -19C11 -19 15.4 -14 15.6 -7L15.8 -3.4L19 2.8L15.6 4.2L15.8 7L14.6 8.2L15.6 10.6C15.4 15.6 12.4 18.6 7.6 19L6 24Z'
const ROUND_CAP =
  'M-15.4 -9C-16 -19 -8 -25 2 -25C11 -25 16.4 -19 15.6 -9.6C9 -7.2 -8 -6.8 -15.4 -9Z'
const ROUGH_HAIR =
  'M-15.6 8C-18.4 -2 -17 -14 -8 -19.6C-1 -23.6 9 -22.6 14.2 -16.4C16 -14 15.4 -11.6 13 -11.4C8 -12 2 -12.4 -2 -11C-6 -9.6 -8.6 -5 -9.6 0C-10.4 4 -11.6 7.6 -15.6 8Z'
const HAIR_CUTS =
  'M-12 -10q2 -3 5 -2M-6 -16q3 -2 6 -1M3 -18q3 -1 5 1M-14 -2q1 -3 3 -3M-10 -13q2 -2 4 -1'
const BOYS = [
  {
    t: 'translate(36 204) scale(1.42)',
    cap: ROUND_CAP,
    cuts: '',
    body: 'M8 330L10 254Q24 236 44 236Q62 240 66 258L68 330Z',
  },
  {
    t: 'translate(82 222) scale(1.38)',
    cap: ROUGH_HAIR,
    cuts: HAIR_CUTS,
    body: 'M58 330L60 270Q72 252 88 254Q100 258 102 270L104 330Z',
  },
]
/** Wiggins is set to the right of the block, in front of the line, by WIG. */
const WIG = 'translate(30 0)'

type Marks = {
  ground: string
  back: string
  neck: string
  coat: string
  hair: string
}

const marks = once<Marks>(() => {
  // Morning light from the window on the right; the door and the stair behind.
  const ground = portraitGround(5201, (x, y) =>
    clamp(0.1 + ((x - 40) / 260) * 0.85 - Math.max(0, (y - 270) / 240)),
  )
  const r = rng(5202)
  let back = ''
  for (let rad = 46; rad < 74; rad += 4)
    back += arcDashes(r, 172, 140, rad, deg(118), deg(150), [8, 18], [3, 7])
  const neck = 'M150 196Q158 192 166 194'
  // The coat: its seams and creases hanging loose on him.
  const coat =
    gouge(76, 286, 70, 324, 1.6, 2) +
    gouge(124, 206, 104, 236, 1.1, 1) +
    gouge(170, 300, 176, 326, 1, -1) +
    gouge(140, 318, 120, 326, 0.9, 0)
  // Rough short hair at the back of the neck: short paper cuts.
  let hair = ''
  for (let i = 0; i < 10; i++) {
    const y = 106 + i * 5
    const x = 116 + between(r, -4, 4)
    hair += gouge(x, y, x + between(r, 8, 18), y + between(r, 3, 6), between(r, 0.5, 0.9), 0.6)
  }
  return { ground, back, neck, coat, hair }
})

function WigginsPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-wg-head`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* "they instantly drew up in line": two of the line behind him */}
      {BOYS.map((b) => (
        <g key={b.t}>
          <path d={b.body} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <g transform={b.t}>
            <path d={BOY_HEAD} fill={INK} stroke={INK} strokeWidth={5} strokeLinejoin="round" />
            <path d={BOY_HEAD} fill={PAPER} />
            <path d={b.cap} fill={INK} stroke={PAPER} strokeWidth={0.9} />
            {b.cuts && (
              <path d={b.cuts} fill="none" stroke={PAPER} strokeWidth={0.7} strokeLinecap="round" />
            )}
            {/* a wide, expectant eye, the brow lifted, the mouth a little open */}
            <path
              d="M5.6 -8.6Q9.6 -10.4 13.6 -8.6"
              fill="none"
              stroke={INK}
              strokeWidth={1.2}
              strokeLinecap="round"
            />
            <ellipse
              cx={9.6}
              cy={-3.4}
              rx={3.2}
              ry={2.4}
              fill="none"
              stroke={INK}
              strokeWidth={0.9}
            />
            <circle cx={10.6} cy={-3.4} r={1.4} fill={INK} />
            <path
              d="M14.6 11L10 11.4"
              fill="none"
              stroke={INK}
              strokeWidth={1}
              strokeLinecap="round"
            />
            <path
              d="M18.2 2.8C16.2 3.2 15.4 1.6 16.4 0.2"
              fill="none"
              stroke={INK}
              strokeWidth={0.8}
            />
            <path d="M-4.6 -1C-6.6 0 -6.8 5 -4.4 6" fill="none" stroke={INK} strokeWidth={0.9} />
          </g>
        </g>
      ))}
      <g transform={WIG}>
        {/* The ink halo that lifts Wiggins off the ground. */}
        <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
          <path d={HEAD} transform={TILT} />
          <path d={CAP} transform={TILT} />
          <path d={COAT} />
          <path d={SLEEVE} />
        </g>
        {/* "a disreputable little scarecrow": the coat far too big for him */}
        <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={m.coat} fill={PAPER} />
        <path d={SHIRT} fill={PAPER} />
        <path
          d="M206 236L214 262M210 284L220 310"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
        <path d={LAPEL} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={PATCH} fill="none" stroke={PAPER} strokeWidth={1.4} strokeDasharray="3 2" />
        <path d={TEAR} fill="none" stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
        <g transform={TILT}>
          <path d={HEAD} fill={PAPER} stroke={PAPER} strokeWidth={2.4} />
          <g clipPath={`url(#${headClip})`}>
            <g fill="none" stroke={INK} strokeLinecap="round">
              <path d={m.back} strokeWidth={1.4} />
              <path d={m.neck} strokeWidth={0.9} />
            </g>
            <path d={HAIR} fill={INK} />
            <path d={m.hair} fill={PAPER} />
          </g>
          <ProfileEar at={[160, 118]} h={38} />
          <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
            {/* a soft jaw, back to below the ear */}
            <path d="M206 187C196 190 186 187 180 179" strokeWidth={1.3} />
            {/* the brow, raised a little above lowered lids */}
            <path d="M196 112Q207 107 219 110" strokeWidth={2.4} />
            {/* the nostril of a small nose, and a mouth set in a half-smile */}
            <path d="M224.6 148.8C221.4 147.6 221 143.6 223.4 141.6" strokeWidth={1.3} />
            <path d="M220.4 159.6L212.4 159.6Q210.4 158.6 210 156.4" strokeWidth={1.6} />
            <path d="M217.6 166.8Q215.2 168.2 213.4 167.4" strokeWidth={LINE.hairline} />
          </g>
          {/* "an air of lounging superiority": the lids lowered, looking down his nose */}
          <ProfileEye at={[207, 124]} s={1.08} heavy />
          <path d={CAP} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
          <path d={CAP_CUTS} fill={PAPER} />
        </g>
        {/* the near arm, its hand pushed into his pocket */}
        <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(102, 232, 122, 270, 1.2, 1.4)} fill={PAPER} />
        <path d={POCKET} fill={INK} stroke={PAPER} strokeWidth={LINE.fine} />
        <path d={FRAY} fill={PAPER} />
      </g>
      <InnerRule />
    </>
  )
}

export const wigginsArt: LinocutArt = { width: PW, height: PH, Draw: WigginsPortrait }

export const wiggins: Portrait = {
  name: 'Wiggins',
  art: wigginsArt,
  alt: 'A linocut portrait of Wiggins in profile, facing right, drawn from Watson’s description in Chapter 8: a boy in a flat cap, taller and older than the two younger boys standing in line behind him, who look up with wide, expectant eyes, one in a round cap and one bareheaded. Wiggins leans back with his chin up, his eyelids lowered and his mouth set in a half-smile, one hand pushed into the pocket of a man’s coat far too big for him, its shoulders hanging, its sleeve ragged at the end, a patch on it and a tear in the front. Four numbered red markers point to the line of boys, his height above them, his lounging look and his ragged coat.',
  describedBy: [
    {
      phrase: 'they instantly drew up in line and stood facing us with expectant faces',
      at: [24, 140],
      to: [40, 176],
    },
    { phrase: 'taller and older than the others', at: [112, 40], to: [150, 62] },
    { phrase: 'an air of lounging superiority', at: [296, 176], to: [256, 150] },
    { phrase: 'a disreputable little scarecrow', at: [302, 262], to: [270, 296] },
  ],
  where: 'Chapter 8',
  passage:
    'There was some show of discipline among them, despite their tumultuous entry, for they instantly drew up in line and stood facing us with expectant faces. One of their number, taller and older than the others, stood forward with an air of lounging superiority which was very funny in such a disreputable little scarecrow.',
  note: 'Wiggins leads the Baker Street Irregulars, street boys Holmes pays a shilling a day because “They can go everywhere, see everything, overhear every one.” Watson finds the boy’s swagger funny, but the description also shows how poor these London children are.',
  artNote:
    'The novel says nothing of his face, so he is drawn plainly, as the panel of Chapter 8 draws him: a flat cap and a coat far too big for him. The other boys are not described either, so they are drawn as plain children of the London streets in 1888.',
}
