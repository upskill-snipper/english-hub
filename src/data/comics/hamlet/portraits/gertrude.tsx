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

import { VEIL as KIT_VEIL } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  carry,
  CROWN,
  CROWN_BAND_LINE,
  folds,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  Tear,
  WOMAN_EAR,
  WOMAN_HEAD,
  WomanNeckShadow,
} from './common'

/**
 * Gertrude, Queen of Denmark, from Act 1, Scene 2, where she is described
 * twice in one scene: by the new King, in public, and by her son, alone.
 *
 *   CLAUDIUS: "Therefore our sometime sister, now our queen, Th'imperial
 *   jointress to this warlike state, Have we ... Taken to wife"
 *   HAMLET: "A little month, or ere those shoes were old With which she
 *   followed my poor father's body Like Niobe, all tears ... Within a month,
 *   Ere yet the salt of most unrighteous tears Had left the flushing in her
 *   galled eyes, She married."
 *
 * So: a queen, crowned, who has wept: a tear on her cheek, and the rims of
 * her eyes red and sore ("galled", rubbed raw). Both descriptions are
 * someone else's, and neither is kind: to Claudius she is a title and a
 * kingdom, to Hamlet tears that dried too fast.
 *
 * She is drawn as the figure kit draws her (../panels/people.tsx): a woman's
 * head (WOMAN_HEAD), not young ("at your age The hey-day in the blood is
 * tame", Act 3, Scene 4), so lines at the eye and the fold from the nose; a
 * dark veil over her head and falling down her back (the kit's VEIL, carried
 * to this size), her dark hair dressed back under it; the King's crown, a
 * little smaller, over the veil (the kit's QUEEN_CROWN_T); a dark gown with a
 * plain standing collar of linen.
 *
 * RED marks the rims of her eyes, where Hamlet sees the flushing, and nothing
 * else: never her mouth, never a mark that could be taken for a hurt. The
 * tear is cut in paper, as the Tempest portraits cut Miranda's.
 *
 * She faces left, so the figure is drawn facing right and flipped.
 *
 * Seeds: 7401 to 7405 (the figure's marks), 7410 (the ground).
 */

/** The veil over her head and down her back: the kit's VEIL at this size. */
const VEIL = carry(KIT_VEIL)

/** Her dark hair, dressed back from the brow under the veil. In the head's frame. */
const HAIR = spline([
  [160, 56, 1],
  [150, 52],
  [134, 54],
  [120, 62],
  [111, 76],
  [104, 90, 1],
  [96, 82],
  [104, 66],
  [124, 54],
  [146, 50],
])

/** The Queen's crown over the veil: the King's, smaller, as the kit sets it. */
const QUEEN_CROWN = 'translate(105.6 66) scale(0.8) translate(-106 -80)'

/** Her shoulders in the gown. */
const BODY = spline([
  [-12, 336, 1],
  [-6, 296],
  [14, 262],
  [48, 240],
  [80, 230],
  [112, 236],
  [140, 230],
  [168, 242],
  [194, 266],
  [210, 298],
  [218, 336, 1],
])
/** The standing collar of linen round the foot of her neck. */
const COLLAR = spline([
  [72, 206, 1],
  [104, 214],
  [136, 206, 1],
  [140, 226, 1],
  [104, 234],
  [68, 228, 1],
])

/** Where the tear sits on her cheek, below the eye and back from the nose. */
const TEAR_AT: Pt = [142, 124]

type Marks = { veil: string; hair: string; back: string; body: string; age: string }

const marks = once((): Marks => {
  const r = rng(7401)
  // Folds of the veil, falling from the crown of her head, cut in paper.
  let veil = ''
  for (let i = 0; i < 6; i++) {
    const t = (i + 0.5) / 6
    const pts: Pt[] = []
    for (let k = 0; k <= 12; k++) {
      const u = k / 12
      pts.push([112 - t * 52 - u * (56 - t * 26) + Math.sin(u * 5 + i) * 2, 40 + u * 300])
    }
    veil += ribbon(pts, between(r, 1.2, 2.2), 0.7)
  }
  let hair = ''
  for (let i = 0; i < 8; i++) {
    const t = (i + 0.5) / 8
    hair += gouge(156 - t * 10, 54 + t * 2, 112 - t * 8, 66 + t * 16, between(r, 0.5, 0.8), -2)
  }
  // The shadow down the back of her neck, away from the light.
  let back = ''
  for (let rad = 72; rad < 100; rad += 4)
    back += arcDashes(r, 150, 120, rad, deg(116), deg(166), [8, 20], [2, 6])
  const body = folds(7402, [86, 196], [262, 282], 6)
  // Not young: lines at the corner of the eye, and the fold from the nose
  // towards the mouth, which stops above the lips.
  const age = 'M143.6 98.4L137.6 96.2M144 101.4L138.4 102.6M164 123.6Q158.8 129.4 159.4 134.6'
  return { veil, hair, back, body, age }
})

/** Gertrude, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function GertrudeFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-ger`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={WOMAN_HEAD} />
        </clipPath>
        <clipPath id={`${id}-veil`}>
          <path d={VEIL} />
        </clipPath>
      </defs>
      <path d={BODY} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.body} fill={PAPER} />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${id}-ns`} />
      <g clipPath={`url(#${id}-head)`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
        <path d={HAIR} fill={INK} />
        <path d={m.hair} fill={PAPER} />
      </g>
      <path d={WOMAN_EAR.outline} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={WOMAN_EAR.curl} fill="none" stroke={INK} strokeWidth={1.4} />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d="M74 216Q104 224 138 216" fill="none" stroke={INK} strokeWidth={LINE.hairline} />

      {/* the veil, and the crown over it */}
      <path d={VEIL} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-veil)`}>
        <path d={m.veil} fill={PAPER} />
      </g>
      <g transform={QUEEN_CROWN}>
        <path d={CROWN} fill={PAPER} stroke={INK} strokeWidth={2} strokeLinejoin="round" />
        <path d={CROWN_BAND_LINE} fill="none" stroke={INK} strokeWidth={1.6} />
      </g>

      {/* the face: the nostril, the lips closed, a sorrowful brow */}
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M169.5 121.5C166 119.5 166 115.5 170 114.5" strokeWidth={1.2} />
        <path d="M163.5 137L156.5 137.8" strokeWidth={1.6} />
        <path d="M164.5 143.5C162.5 145 160.5 145.3 158.5 144.7" strokeWidth={0.9} />
        <path d="M143 85.4Q150.6 84.4 156.4 82Q160 80.6 162.6 78.4" strokeWidth={2.1} />
        <path d="M145 94.6Q152.5 90.6 160.5 94.2" strokeWidth={2.2} />
        <path d={m.age} strokeWidth={LINE.hairline} />
      </g>
      <circle cx={153.4} cy={96.2} r={2.4} fill={INK} />
      {/* "the flushing in her galled eyes": the rims red and sore */}
      <path
        d="M146.2 99.2Q153 102.2 159.8 98.6"
        fill="none"
        stroke={RED}
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      {/* "Like Niobe, all tears" */}
      <Tear x={TEAR_AT[0]} y={TEAR_AT[1]} s={0.95} track={10} />
    </g>
  )
}

/** A thick ink halo round head, veil, crown and shoulders. */
function GertrudeKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={WOMAN_HEAD} />
      <path d={VEIL} />
      <path d={CROWN} transform={QUEEN_CROWN} />
      <path d={BODY} />
    </g>
  )
}

const P = placing(44, 14, 0.9, true)

/** Her chamber, the light ahead of her, to the left. */
const ground = once(() =>
  portraitGround('hamlet-gertrude', 7410, (x, y) =>
    clamp(0.1 + ((PW - x - 40) / 280) * 0.86 - (y / PH) * 0.12),
  ),
)

function GertrudePortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <GertrudeKnockout />
        <GertrudeFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const gertrudePortrait: LinocutArt = { width: PW, height: PH, Draw: GertrudePortrait }

const TEAR_MARK = P.to(126, 114)
const EYE_AT = P.to(159, 95)
const CROWN_AT = P.to(158, 30)

export const gertrude: Portrait = {
  name: 'Gertrude',
  art: gertrudePortrait,
  alt: 'A linocut portrait of Gertrude in profile, facing left: a woman no longer young, a fine line at the corner of her eye, her brow drawn up in sorrow. A single tear runs down her cheek, cut in white, and the rim of her eye is printed in red. Her dark hair is drawn back under a dark veil that covers her head and falls down her back, its folds cut in white, and over the veil she wears a small white crown with five points. Her dark gown has a plain white standing collar. Three numbered red markers point to the tear on her cheek, the red rim of her eye and her crown.',
  describedBy: [
    { phrase: 'Like Niobe, all tears', at: TEAR_MARK },
    {
      phrase: 'the flushing in her galled eyes',
      at: [EYE_AT[0] - 46, EYE_AT[1] - 6],
      to: EYE_AT,
    },
    {
      phrase: 'Th’imperial jointress to this warlike state',
      at: [CROWN_AT[0] - 50, CROWN_AT[1]],
      to: CROWN_AT,
    },
  ],
  where: 'Act 1, Scene 2',
  note: 'Claudius presents her to the court as a title, the widow through whom he holds the kingdom. Hamlet, alone, remembers her weeping at his father’s funeral and cannot forgive how quickly the tears dried. The play never lets us hear her own account.',
  artNote:
    'The play gives her tears and her red, sore eyes, so the red marks the rims of her eyes and nothing else. Her veil, crown and gown are how the panels draw the Queen.',
}
