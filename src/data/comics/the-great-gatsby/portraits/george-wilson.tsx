import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arcDashes,
  between,
  clamp,
  deg,
  gouge,
  n,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  COLLAR,
  combedBack,
  EarCut,
  handPaths,
  LAPEL_FAR,
  LAPEL_NEAR,
  MAN_EAR,
  MAN_HAIR,
  MAN_HAIR_PTS,
  once,
  onTurnedHead,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  SHIRT_V,
  shoulders,
  SpecHand,
  spline,
  TIE,
  TIE_KNOT,
  turn,
  WILSON_HEAD,
} from './common'

/**
 * George Wilson, as Nick first sees him in his garage in the valley of ashes,
 * in Chapter II:
 *
 *   "the proprietor himself appeared in the door of an office, wiping his
 *   hands on a piece of waste. He was a blond, spiritless man, anæmic, and
 *   faintly handsome. When he saw us a damp gleam of hope sprang into his
 *   light blue eyes."
 *
 *   "A white ashen dust veiled his dark suit and his pale hair as it veiled
 *   everything in the vicinity—except his wife, who moved close to Tom."
 *
 * So: a thin man in profile, facing right, towards Tom, his long face bowed a
 * little (WILSON_HEAD, as the figure kit cuts HEAD_WILSON,
 * ../panels/people.tsx); the face pale and drawn, a hollow under the
 * cheekbone and a line under the eye, but even-featured ("faintly handsome");
 * the eye lifted, with a wet glint cut in it and the lower lid shining ("a
 * damp gleam of hope"); pale hair, cut in paper, and dust over it in fine ink
 * specks; a dark suit flecked all over with paper specks of ash. In front of
 * his chest is a pale, lumpy wad of cotton waste, its threads cut in fine
 * ink curls, his other hand wrapped in it, and his near hand lies open on it
 * as he wipes it, the fingers fanned apart over the cloth (NEAR_HAND says
 * why it is open). The ground is the dim garage. His
 * light blue eyes are left to the words: the print has no blue. Nothing here
 * comes from a film or stage production, and there is no red in this plate.
 *
 * Seeds: 6701 (the ground), 6702 (the hair), 6703 (the ash), 6704 (the face),
 * 6705 (the threads of the waste).
 */

const P = placing(30, 8, 0.92)
/** "spiritless": the head bowed a little at the neck. */
const BOW = 5

/** His thin shoulders. */
const COAT = shoulders(0.9, 4)

/**
 * The wad of cotton waste in his hands, in front of his chest: a loose, lumpy
 * tangle of threads, its edge broken into tufts.
 */
const WASTE = spline([
  [154, 262],
  [162, 252],
  [174, 254],
  [184, 246],
  [198, 252],
  [210, 250],
  [220, 262],
  [228, 274],
  [224, 286],
  [229, 296],
  [218, 304],
  [204, 302],
  [192, 310],
  [178, 304],
  [164, 306],
  [156, 296],
  [150, 282],
])

/**
 * The near hand, its back to us, open on the waste as he wipes it: the
 * fingers long and fanned apart over the cloth, the thumb up behind them.
 * (It was first cut closed round the cloth, the fingers short, level and
 * close together under a thumb curled over the top, and at phone width it
 * read as a fist at his chest, 9 October 2026.)
 */
const NEAR_HAND = handPaths({
  wrist: [
    [142, 276],
    [146, 292],
  ],
  knuckles: [
    [166, 268],
    [170, 275],
    [171.5, 282],
    [170.5, 289],
  ],
  tips: [
    [186, 252],
    [195, 266],
    [197, 281],
    [191, 296],
  ],
  width: [5.4, 5.6, 5.4, 4.8],
  bow: [-1, -0.6, 0, 0.8],
  thumb: { root: [152, 272], tip: [158, 254], width: 5.2, bow: -1 },
})
/** The sleeve to the near hand, and the paper cuff of the shirt at the wrist. */
const SLEEVE = 'M96 336C106 312 122 290 138 274L150 296C134 304 120 322 114 336Z'
const CUFF = 'M138 274L144 272L152 294L146 298Z'

const marks = once(() => {
  // The dim garage: a little light from the right, where he looks.
  const ground = portraitGround('gg-wilson', 6701, (x, y) =>
    clamp(0.06 + ((x - 80) / 260) * 0.6 - Math.max(0, (y - 240) / 300)),
  )
  // Pale hair, combed back without much care: ink strands on paper.
  const hair = combedBack(6702, MAN_HAIR_PTS, 40, [0.45, 0.9], {
    parting: false,
    light: (x) => clamp(1.1 - (x - 50) / 140),
  })
  // "A white ashen dust veiled his dark suit and his pale hair": paper specks
  // over the suit, ink specks over the hair.
  const r = rng(6703)
  let ash = ''
  for (let i = 0; i < 150; i++) {
    const x = between(r, -10, 236)
    const y = between(r, 236, 334)
    const s = between(r, 0.7, 1.4)
    ash += `M${n(x - s)} ${n(y)}a${n(s)} ${n(s)} 0 1 0 ${n(2 * s)} 0a${n(s)} ${n(s)} 0 1 0 ${n(-2 * s)} 0Z`
  }
  let dust = ''
  for (let i = 0; i < 60; i++) {
    const x = between(r, 44, 160)
    const y = between(r, 30, 160)
    const s = between(r, 0.5, 0.9)
    dust += `M${n(x - s)} ${n(y)}a${n(s)} ${n(s)} 0 1 0 ${n(2 * s)} 0a${n(s)} ${n(s)} 0 1 0 ${n(-2 * s)} 0Z`
  }
  // The drawn face: a hollow under the cheekbone, and the back of the neck.
  const rf = rng(6704)
  let cheek = ''
  for (let rad = 12; rad < 26; rad += 3)
    cheek += arcDashes(rf, 146, 112, rad, deg(62), deg(132), [8, 20], [2, 5])
  let back = ''
  for (let rad = 76; rad < 106; rad += 3.6)
    back += arcDashes(rf, 120, 116, rad, deg(108), deg(146), [8, 20], [2, 5])
  let jaw = ''
  for (let y = 150; y < 236; y += 4.2) jaw += `M60 ${n(y)}L176 ${n(y + 2.4)}`
  // The threads of the waste: loose loops and curls of fine ink.
  const rw = rng(6705)
  let threads = ''
  for (let i = 0; i < 26; i++) {
    const x = between(rw, 160, 222)
    const y = between(rw, 258, 302)
    const a = between(rw, 0, Math.PI * 2)
    const L = between(rw, 6, 13)
    threads += `M${n(x)} ${n(y)}q${n(Math.cos(a) * L * 0.5 - Math.sin(a) * 4)} ${n(Math.sin(a) * L * 0.5 + Math.cos(a) * 4)} ${n(Math.cos(a) * L)} ${n(Math.sin(a) * L)}`
  }
  return { ground, hair, ash, dust, cheek, back, jaw, threads }
})

/** The shadow under his jaw, and down the thin neck. */
const JAW_SHADE =
  'M104 146C114 170 138 186 166 182L156 191L145 197L137 205L133 222Q104 210 84 186Q72 168 74 148Z'

const FEATURES = {
  brow: 'M144 89.2Q153.4 86.6 164.6 88.8',
  /** The eye lifted, the lid raised: hope. */
  lid: 'M146 97.6Q154 92.4 162.6 96.8',
  /** The lower lid, wet: "a damp gleam". */
  lower: 'M147.6 103.8Q154.4 105.6 160.8 102.6',
  /** A line under the eye, and the weary fold from the nose. */
  under: 'M148.6 108.8Q154.6 111 159.6 108.4',
  nostril: 'M172.5 128C168.5 125.5 168.5 120 174 119',
  fold: 'M165 125Q160 135 161.5 147',
  mouth: 'M169.8 148.2L161.6 148.8Q160.2 149.4 160 151.4',
  chin: 'M167.6 158.6Q164.6 160 162 159',
  jawLine: 'M167 181C150 190 128 184 116 168C111 160 109 152 108 145',
}

function WilsonFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-gg-wilson-head`
  const hairClip = `${uid}-gg-wilson-hair`
  const coatClip = `${uid}-gg-wilson-coat`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={WILSON_HEAD} />
        </clipPath>
        <clipPath id={`${headClip}-jaw`}>
          <path d={JAW_SHADE} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={MAN_HAIR} />
        </clipPath>
        <clipPath id={coatClip}>
          <path d={COAT} />
          <path d={SLEEVE} />
        </clipPath>
      </defs>
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={COAT} />
        <g transform={turn(BOW)}>
          <path d={WILSON_HEAD} />
          <path d={MAN_HAIR} />
        </g>
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={SHIRT_V} fill={PAPER} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
      <path
        d={LAPEL_NEAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={LAPEL_FAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g transform={turn(BOW)}>
        <path d={WILSON_HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.5} />
          <path d={m.cheek} strokeWidth={0.95} />
          <g clipPath={`url(#${headClip}-jaw)`}>
            <path d={m.jaw} strokeWidth={1.1} />
          </g>
        </g>
        <path d={MAN_HAIR} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={INK} />
          <path d={m.dust} fill={INK} />
        </g>
        <EarCut outline={MAN_EAR.outline} curl={MAN_EAR.curl} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d={FEATURES.jawLine} strokeWidth={1.4} />
          <path d={FEATURES.brow} strokeWidth={2.4} />
          <path d={FEATURES.lid} strokeWidth={2.2} />
          <path d={FEATURES.lower} strokeWidth={1.2} />
          <path d={FEATURES.under} strokeWidth={LINE.hairline} />
          <path d={FEATURES.nostril} strokeWidth={1.5} />
          <path d={FEATURES.fold} strokeWidth={1.1} />
          <path d={FEATURES.mouth} strokeWidth={1.8} />
          <path d={FEATURES.chin} strokeWidth={0.9} />
        </g>
        {/* "a damp gleam of hope": the eye with a wet glint, and the lower lid's shine */}
        <circle cx={155.4} cy={99.2} r={2.8} fill={INK} />
        {/* "sprang into his light blue eyes": the gleam appears */}
        <circle
          className="lc-fade-in"
          style={timing({ delay: 1.1, dur: 0.6 })}
          cx={156.6}
          cy={98.2}
          r={1.05}
          fill={PAPER}
        />
        <path d="M150.4 103.2Q154.4 104.4 158 102.8" fill="none" stroke={PAPER} strokeWidth={0.8} />
      </g>
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={TIE_KNOT} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
      {/* "wiping his hands on a piece of waste" */}
      <path d={SLEEVE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${coatClip})`}>
        <path d={m.ash} fill={PAPER} />
      </g>
      <path d={CUFF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={WASTE} fill={PAPER} stroke={INK} strokeWidth={2.4} strokeLinejoin="round" />
      <path d={m.threads} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
      <SpecHand paths={NEAR_HAND} />
    </g>
  )
}

function WilsonPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <WilsonFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const georgeWilsonArt: LinocutArt = { width: PW, height: PH, Draw: WilsonPortrait }

const on = (x: number, y: number) => onTurnedHead(P, BOW, x, y)
const WASTE_AT: Pt = P.to(212, 282)
const CHEEK = on(142, 128)
const EYE = on(163, 99.4)
const SUIT = P.to(40, 272)

export const georgeWilson: Portrait = {
  name: 'George Wilson',
  art: georgeWilsonArt,
  alt: "A linocut portrait of George Wilson in profile, facing right, drawn from Fitzgerald's description in Chapter II: a thin man with a long, pale, drawn face, bowed a little, a hollow under the cheekbone and a line under the eye, but even-featured. His eye is lifted, with a wet glint in it. His pale hair is flecked with dark specks of dust, and his dark suit is flecked all over with pale specks of ash. In front of his chest he holds a pale wad of cloth, the other hand wrapped in it and his near hand open on it, the fingers spread, as he wipes it. Four numbered red markers point to the cloth in his hands, his face, his eye and his dusty suit.",
  describedBy: [
    // The line stops in the air before the cloth. (It first ran on into the
    // pale wad in his hands, and at phone width a red streak on a white rag
    // in a man's fist reads as blood, 9 October 2026.)
    {
      phrase: 'wiping his hands on a piece of waste',
      at: [WASTE_AT[0] + 52, WASTE_AT[1] - 12],
      to: [WASTE_AT[0] + 21, WASTE_AT[1] - 5.6],
    },
    { phrase: 'a blond, spiritless man, anæmic, and faintly handsome', at: CHEEK },
    {
      phrase: 'a damp gleam of hope sprang into his light blue eyes',
      at: [EYE[0] + 72, EYE[1]],
      to: EYE,
    },
    { phrase: 'A white ashen dust veiled his dark suit and his pale hair', at: SUIT },
  ],
  where: 'Chapter II',
  note: 'Almost every word Nick gives Wilson is about what he lacks: “spiritless”, “anæmic”, only “faintly” handsome. The dust of the valley of ashes veils him and everything round him, “except his wife, who moved close to Tom.”',
  artNote:
    'The print has no blue, so his light blue eyes are left to the words. His pale hair and his suit flecked with ash are how the panels draw him.',
}
