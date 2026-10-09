import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'

import {
  ageLines,
  Beard,
  beardStrands,
  EarCut,
  JackBody,
  jackQuilts,
  JackNeck,
  JACK,
  KETTLE_CAP,
  MAN_EAR,
  MAN_HEAD,
  ManEye,
  ManNoseAndMouth,
  napeShade,
  NeckShadow,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  SHORT_BEARD_P,
  spline,
  SteelCap,
  steelLight,
} from './common'

/**
 * Michael Williams, the common soldier who argues with the disguised King in
 * the English camp before dawn, and takes the King's glove as a pledge to
 * fight him:
 *
 *   WILLIAMS: "Here's my glove; give me another of thine." ... "This will I
 *   also wear in my cap." (Act 4, Scene 1)
 *   HENRY: "Soldier, why wear'st thou that glove in thy cap?" (Act 4, Scene 7)
 *   HENRY: "If that the soldier strike him, as I judge By his blunt bearing he
 *   will keep his word" (Act 4, Scene 7)
 *
 * So: a plain soldier with a glove stuck in his cap, and a blunt, steady
 * face: a man who says what he thinks to a stranger and to his king. The
 * play gives him no other looks.
 *
 * He is drawn as the figure kit draws him (../panels/people.tsx, 'williams'):
 * every man's head (MAN_HEAD); the soldier's steel cap with its broad brim
 * (the kit's KETTLE, as ./common.tsx carries it to this size), with the light
 * on its bowl cut in paper; a short dark beard, which the kit gives him only
 * to tell him from Gower (./common.tsx, SHORT_BEARD_P); and the soldier's
 * padded jack with its high neck, its quilting cut in paper.
 *
 * THE GLOVE stands in the band of his cap behind the brow and leans back, as
 * the kit sets it (`glove`): its cuff tucked into the band, its fingers up. At
 * the size of a portrait a glove cut in plain paper reads as a hand: standing
 * up, as one raised in a salute or a wave, and with its fingers curled over,
 * as one gripping the cap (the first four cuts of this portrait were each
 * caught on one or the other). So it is printed as leather, hatched in ink all
 * over, a middle tone that is never the paper of the skin; the deep cuff of a
 * gauntlet flares wider than any wrist, closer hatched, with a turned edge;
 * the thumb lies folded against the side; and the empty fingers lie together,
 * parted only at their tips.
 *
 * REDRAWN 9 OCTOBER 2026. The first draft gave him a felt cap with a turned-up
 * brim and a stubbled chin, cut before the kit had a Williams; the kit and the
 * panels give him the steel cap and a short beard, so the portrait does too.
 *
 * It is the grey before dawn: "We see yonder the beginning of the day" (4.1).
 * The light is low ahead of him. There is no red in this plate.
 *
 * He faces left, towards the King, so the figure is drawn facing right and
 * flipped.
 *
 * MARKERS. "that glove in thy cap" comes to the glove from behind his head,
 * at the glove's own height, clear of his face; "By his blunt bearing he will
 * keep his word" sits on his cheek with no line. No line crosses his face.
 *
 * Seeds: 9601 to 9606 (the figure's marks), 9610 (the ground).
 */

// ── The glove, in its own frame: the cuff's open end at the origin, standing up along -y ──

/**
 * The glove's outline: the deep cuff of a gauntlet, flaring wider than any
 * wrist; the back of the glove; the thumb lying folded against its side; and
 * the four empty fingers lying together, parted only at their tips and bowed
 * back a little, as a glove with no hand in it is.
 */
const GLOVE = spline([
  [-17.6, 0, 1],
  [-15, -12],
  [-11.4, -26],
  [-11.8, -36],
  [-12.4, -46],
  [-14.2, -55],
  [-14, -61.6],
  [-10.6, -63],
  [-8, -54.6, 1],
  [-9.4, -62],
  [-8, -69.4],
  [-3.8, -70.2],
  [-2, -54.8, 1],
  [-2.8, -63.6],
  [-0.4, -69],
  [3.6, -67.6],
  [3.8, -54, 1],
  [3.4, -60.6],
  [6, -64.4],
  [9.2, -61.6],
  [10.2, -51],
  [11.6, -44.6, 1],
  [15.4, -39],
  [15.8, -33],
  [11.8, -29.6, 1],
  [11.6, -26],
  [15.4, -12],
  [18, 0, 1],
])
/** The cuff, below its turned edge, for its darker leather. */
const CUFF = spline([
  [-17.6, 0, 1],
  [-15, -12],
  [-11.6, -24.6, 1],
  [11.8, -24.6, 1],
  [15.4, -12],
  [18, 0, 1],
])
/** The turned edge at the top of the cuff. */
const CUFF_EDGE = spline([
  [-12.8, -22.2, 1],
  [13, -22.2, 1],
  [12.2, -28.6, 1],
  [-12.2, -28.6, 1],
])
/** The seams between the fingers, run down the back of the glove; the thumb's seam. */
const GLOVE_SEAMS =
  'M-8 -54.6Q-7.6 -48 -6 -40M-2 -54.8Q-1.6 -48 -0.6 -40M3.8 -54Q4.4 -48 5.2 -41' +
  'M11.6 -44Q10.4 -37 11.8 -30'
/** Where the glove stands in the band of the cap, how far it leans back, and its size. */
const GLOVE_XY: Pt = [82, 74]
const GLOVE_ROT = -34
const GLOVE_S = 1.05
const GLOVE_AT = `translate(${GLOVE_XY[0]} ${GLOVE_XY[1]}) rotate(${GLOVE_ROT}) scale(${GLOVE_S})`

/** The leather: diagonal hatching in ink over the paper, a middle tone; closer on the cuff. */
const leather = once(() => {
  let glove = ''
  for (let k = -48; k < 48; k += 3) glove += `M${k - 20} 4L${k + 30} -76`
  let cuff = ''
  for (let k = -36; k < 36; k += 2.2) cuff += `M${k - 8} 2L${k + 14} -28`
  return { glove, cuff }
})

function Glove({ id }: { id: string }) {
  const l = leather()
  return (
    <g transform={GLOVE_AT}>
      <defs>
        <clipPath id={`${id}-glove`}>
          <path d={GLOVE} />
        </clipPath>
        <clipPath id={`${id}-cuff`}>
          <path d={CUFF} />
        </clipPath>
      </defs>
      {/* a paper edge round an ink halo, so the glove stands clear of the cap and the ground */}
      <path d={GLOVE} fill={INK} stroke={PAPER} strokeWidth={6.4} strokeLinejoin="round" />
      <path d={GLOVE} fill={INK} stroke={INK} strokeWidth={3} strokeLinejoin="round" />
      <path d={GLOVE} fill={PAPER} />
      <g clipPath={`url(#${id}-glove)`}>
        <path d={l.glove} fill="none" stroke={INK} strokeWidth={1.15} />
      </g>
      <g clipPath={`url(#${id}-cuff)`}>
        <path d={l.cuff} fill="none" stroke={INK} strokeWidth={1.15} />
      </g>
      <path d={CUFF_EDGE} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={GLOVE_SEAMS} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
    </g>
  )
}

/** Dark hair below the cap: at the temple in front of the ear, and at the nape. */
const HAIR = spline([
  [116, 82, 1],
  [118, 98],
  [116.6, 112, 1],
  [110, 106],
  [100, 103],
  [92, 108],
  [88, 122],
  [86, 140],
  [80, 156, 1],
  [70, 150],
  [60, 158, 1],
  [52, 140],
  [48, 118],
  [48, 96],
  [52, 84, 1],
])

type Marks = {
  quilts: string
  hair: string
  age: string
  cheek: string
  nape: string
  beard: string
  steel: string
}

const marks = once((): Marks => {
  const r = rng(9601)
  const quilts = jackQuilts(9602)
  let hair = ''
  for (const [x, y, x2, y2] of [
    [110, 88, 112, 108],
    [94, 112, 86, 138],
    [78, 104, 70, 140],
    [62, 100, 56, 136],
  ] as [number, number, number, number][])
    hair += gouge(x, y, x2 + between(r, -1, 1), y2, 0.8, between(r, -1, 1))
  const age = ageLines(9603, 2)
  let cheek = ''
  for (let rad = 14; rad < 24; rad += 3.6)
    cheek += arcDashes(r, 141, 110, rad, deg(76), deg(124), [7, 14], [2, 5])
  const nape = napeShade(9604, 150, 118, 86, 112)
  const beard = beardStrands(9605, false)
  const steel = steelLight(9606)
  return { quilts, hair, age, cheek, nape, beard, steel }
})

/** Williams, head and shoulders, facing right in the 0..240 by 0..332 frame. */
export function WilliamsFigure({ uid }: { uid: string }) {
  const m = marks()
  const id = `${uid}-wil`
  return (
    <g>
      <defs>
        <clipPath id={`${id}-head`}>
          <path d={MAN_HEAD} />
        </clipPath>
        <clipPath id={`${id}-hair`}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      {/* the padded jack, its quilting cut in paper */}
      <JackBody quilts={m.quilts} />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={id} />
      <g clipPath={`url(#${id}-head)`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.nape} strokeWidth={1.4} />
        <path d={m.age} strokeWidth={LINE.hairline} />
        <path d={m.cheek} strokeWidth={0.95} />
      </g>
      <JackNeck />
      {/* short dark hair below the cap, at the temple and the nape */}
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${id}-hair)`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <EarCut {...MAN_EAR} />
      <ManNoseAndMouth />
      {/* the short dark beard, close along the jaw */}
      <Beard id={id} d={SHORT_BEARD_P} strands={m.beard} moustache={false} />
      {/* "his blunt bearing": a level, heavy brow over a steady eye */}
      <path
        d="M143 88.6Q153 85.6 166 88.2"
        fill="none"
        stroke={INK}
        strokeWidth={3.4}
        strokeLinecap="round"
      />
      <ManEye look="open" />
      {/* the steel cap, and "that glove in thy cap", its cuff in the band */}
      <SteelCap id={id} light={m.steel} />
      <Glove id={id} />
      {/* the band again, over the foot of the cuff, so the glove is tucked into it */}
      <path d={gouge(62, 75.6, 110, 70.4, 3.4, -0.6)} fill={INK} />
      <path d={gouge(60, 72.2, 112, 67.6, 0.8, -0.6)} fill={PAPER} />
      <path d={gouge(64, 79.2, 108, 74.2, 0.7, -0.6)} fill={PAPER} />
    </g>
  )
}

/** A thick ink halo round head, cap, glove, beard and shoulders. */
function WilliamsKnockout() {
  return (
    <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
      <path d={MAN_HEAD} />
      <path d={KETTLE_CAP} />
      <path d={SHORT_BEARD_P} />
      <path d={GLOVE} transform={GLOVE_AT} />
      <path d={JACK} />
    </g>
  )
}

const P = placing(48, 24, 0.9, true)

const ground = once(() =>
  // The English camp in the grey before dawn: the first light low ahead of
  // him, to the left, and the dark still overhead.
  portraitGround('hv-williams', 9610, (x, y) =>
    clamp(0.06 + ((PW - x - 40) / 280) * 0.5 + clamp((y - 90) / 200) * 0.45 - (x > 180 ? 0.3 : 0)),
  ),
)

function WilliamsPortrait({ uid }: ArtProps) {
  return (
    <>
      <path d={ground()} fill={PAPER} />
      <g transform={P.transform}>
        <WilliamsKnockout />
        <WilliamsFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const williamsPortrait: LinocutArt = { width: PW, height: PH, Draw: WilliamsPortrait }

/** A point on the glove, carried through its placing in the cap and the portrait's. */
function onGlove(x: number, y: number): Pt {
  const a = deg(GLOVE_ROT)
  const [gx, gy] = [x * GLOVE_S, y * GLOVE_S]
  return P.to(
    GLOVE_XY[0] + gx * Math.cos(a) - gy * Math.sin(a),
    GLOVE_XY[1] + gx * Math.sin(a) + gy * Math.cos(a),
  )
}
/** The back of the glove, below the fingers. */
const GLOVE_PT = onGlove(-13, -50)
const CHEEK_AT = P.to(138, 127)

export const williams: Portrait = {
  name: 'Williams',
  art: williamsPortrait,
  alt: 'A linocut portrait of the soldier Williams in profile, facing left, in the grey light before dawn: a plain man with a short dark beard, a heavy level brow, a steady eye and a closed mouth. He wears a dark steel cap with a broad brim, and standing in its band behind his brow, leaning back, is a leather glove shaded all over in fine lines, its wide gauntlet cuff tucked into the band and its empty fingers lying together. He wears a padded soldier’s jacket with a high neck, its quilting cut in white. Two numbered red markers point to the glove in his cap and to his cheek.',
  describedBy: [
    { phrase: 'that glove in thy cap', at: [GLOVE_PT[0] + 40, GLOVE_PT[1] - 2], to: GLOVE_PT },
    { phrase: 'By his blunt bearing he will keep his word', at: CHEEK_AT },
  ],
  where: 'Act 4, Scene 1; Act 4, Scene 7',
  note: 'Williams tells a stranger in a borrowed cloak that if the King’s cause is bad, the King must answer for every soldier who dies for it. They swap gloves as a pledge to fight. When the stranger turns out to be the King, Williams stands by what he said, and Henry fills his glove with crowns.',
  artNote:
    'The play does not describe his face. The glove in his cap is from his own words; his steel cap, short beard and padded jacket are how the panels draw a common soldier of 1415, and tell him from Captain Gower.',
}
