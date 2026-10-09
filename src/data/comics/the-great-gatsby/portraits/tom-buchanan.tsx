import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  COLLAR,
  combedBack,
  EarCut,
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
  TIE,
  TIE_KNOT,
  TOM_HEAD,
  turn,
} from './common'

/**
 * Tom Buchanan, as Nick sees him on his porch in Chapter I, and nothing else:
 *
 *   "He had changed since his New Haven years. Now he was a sturdy
 *   straw-haired man of thirty with a rather hard mouth and a supercilious
 *   manner. Two shining arrogant eyes had established dominance over his face
 *   and gave him the appearance of always leaning aggressively forward. Not
 *   even the effeminate swank of his riding clothes could hide the enormous
 *   power of that body—he seemed to fill those glistening boots until he
 *   strained the top lacing, and you could see a great pack of muscle
 *   shifting when his shoulder moved under his thin coat. It was a body
 *   capable of enormous leverage—a cruel body."
 *
 * and, the sentence before, "Tom Buchanan in riding clothes was standing
 * with his legs apart on the front porch".
 *
 * So: the broadest man in the gallery, in profile, facing right, his head
 * carried forward of his shoulders and tipped down a little, as the figure
 * kit (../panels/people.tsx) carries it; the jaw square and heavy and the
 * neck thick (TOM_HEAD); straw hair, cut pale, brushed back; a heavy brow
 * drawn low over a large eye with a hard lid and a glint in it; the mouth a
 * straight, hard line turned down at the corner. His riding coat is thin
 * tweed, cut in fine paper ticks, and his near shoulder rises under it in a
 * round of cut lines where the muscle shifts. The novel does not describe his
 * shirt and tie, so they are plain. His boots are below the frame. Nothing
 * here comes from a film or stage production, and there is no red in this
 * plate.
 *
 * Seeds: 6301 (the ground), 6302 (the hair), 6303 (the figure's cuts).
 */

const P = placing(14, 16, 1.02)
/** "leaning aggressively forward": the head tipped forward at the neck. */
const LEAN = 8

/** The broad riding coat: the shoulders every garment is cut from, made wider. */
const COAT = shoulders(1.16, 2)

const marks = once(() => {
  // The evening light on the porch is in front of him.
  const ground = portraitGround('gg-tom', 6301, (x, y) =>
    clamp(0.08 + ((x - 50) / 270) * 0.92 - Math.max(0, (y - 250) / 260)),
  )
  // Straw hair, brushed back: ink strokes on the pale hair, thinner where the
  // light falls on it.
  const hair = combedBack(6302, MAN_HAIR_PTS, 46, [0.5, 1], {
    light: (x, y) => clamp(1.1 - (x - 50) / 140 + (y - 60) / 300),
  })
  const r = rng(6303)
  // The tweed of the thin coat: short ticks in rows, slanting each way in turn.
  let tweed = ''
  for (let row = 0; row < 15; row++) {
    const y = 244 + row * 6.4
    const slant = row % 2 ? 2.2 : -2.2
    for (let x = -10 + between(r, 0, 6); x < 250; x += between(r, 7, 11)) {
      if (r() < 0.6) tweed += gouge(x, y, x + 3, y + slant, 0.55)
    }
  }
  // "a great pack of muscle shifting when his shoulder moved under his thin
  // coat": the round of the near shoulder, in arcs of cut line over it.
  let shoulder = ''
  for (let rad = 34; rad < 56; rad += 7)
    shoulder += arcDashes(r, 52, 306, rad, deg(204), deg(272), [16, 34], [3, 6])
  // The shadow down the back of the thick neck, under the pale hair, dense
  // enough that the hair's edge stands off it.
  let back = ''
  for (let rad = 70; rad < 118; rad += 3)
    back += arcDashes(r, 122, 118, rad, deg(100), deg(152), [10, 24], [1.5, 4])
  // Rows of shadow under the heavy jaw, kept to the wedge below it (JAW_SHADE).
  let jaw = ''
  for (let y = 150; y < 236; y += 3.9) jaw += `M60 ${n(y)}L178 ${n(y + 2.4)}`
  return { ground, hair, tweed, shoulder, back, jaw }
})

/** The wedge of shadow under the jaw and down the front of the thick neck. */
const JAW_SHADE =
  'M104 146C114 172 140 192 172 189L158 196L146 201L140 208L138.5 222Q106 212 84 186Q72 168 74 148Z'

/** His features, in the frame of TOM_HEAD. */
const FEATURES = {
  /** A heavy brow, drawn low and hard. */
  brow: 'M143 89.8Q153.6 86.4 166 90.2',
  /** The heavy upper lid, half down: "supercilious". */
  lid: 'M145.6 99.4Q154 95.6 163 99.6',
  lower: 'M147.6 104.4Q154.6 106.4 161.2 103.2',
  /** "a rather hard mouth": straight, its corner turned down. */
  mouth: 'M169.8 148.4L159.6 148.8Q157.4 149.6 157 152.6',
  chin: 'M168.4 159.4Q164.6 161.2 160.6 159.8',
  nostril: 'M172.5 128C168.5 125.5 168.5 120 174 119',
  fold: 'M165.4 125Q159.4 134 160 146.4',
  /** The square of the jaw, back to below the ear. */
  jawLine: 'M171.5 188C152 197 128 190 116 172C110 162 108 152 108 144',
}

function TomFigure({ uid }: { uid: string }) {
  const m = marks()
  const headClip = `${uid}-gg-tom-head`
  const hairClip = `${uid}-gg-tom-hair`
  return (
    <g>
      <defs>
        <clipPath id={headClip}>
          <path d={TOM_HEAD} />
        </clipPath>
        <clipPath id={hairClip}>
          <path d={MAN_HAIR} />
        </clipPath>
        <clipPath id={`${headClip}-jaw`}>
          <path d={JAW_SHADE} />
        </clipPath>
      </defs>
      {/* The ink halo that lifts the figure off the lit ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={COAT} />
        <g transform={turn(LEAN)}>
          <path d={TOM_HEAD} />
          <path d={MAN_HAIR} />
        </g>
      </g>
      <path d={COAT} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.tweed} fill={PAPER} />
      <path d={m.shoulder} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
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
      <g transform={turn(LEAN)}>
        <path d={TOM_HEAD} fill={PAPER} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.7} />
          <g clipPath={`url(#${headClip}-jaw)`}>
            <path d={m.jaw} strokeWidth={1.1} />
          </g>
        </g>
        <path d={MAN_HAIR} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
        <g clipPath={`url(#${hairClip})`}>
          <path d={m.hair} fill={INK} />
        </g>
        <EarCut outline={MAN_EAR.outline} curl={MAN_EAR.curl} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          <path d={FEATURES.jawLine} strokeWidth={1.6} />
          <path d={FEATURES.brow} strokeWidth={3.8} />
          <path d={FEATURES.lid} strokeWidth={2.6} />
          <path d={FEATURES.lower} strokeWidth={1.1} />
          <path d={FEATURES.nostril} strokeWidth={1.5} />
          <path d={FEATURES.fold} strokeWidth={1.2} />
          <path d={FEATURES.mouth} strokeWidth={2} />
          <path d={FEATURES.chin} strokeWidth={1} />
        </g>
        {/* "Two shining arrogant eyes": a large dark eye with a glint cut in it */}
        <circle cx={155.6} cy={101.6} r={3.2} fill={INK} />
        <circle cx={156.8} cy={100.6} r={1.1} fill={PAPER} />
      </g>
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={TIE_KNOT} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
    </g>
  )
}

function TomPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <TomFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const tomBuchananArt: LinocutArt = { width: PW, height: PH, Draw: TomPortrait }

const on = (x: number, y: number) => onTurnedHead(P, LEAN, x, y)
const HAIR_BACK = on(44, 96)
const EYE = on(163, 101.6)
const LIPS = on(182, 149)
const SHOULDER = P.to(40, 262)
const BODY = P.to(198, 262)

export const tomBuchanan: Portrait = {
  name: 'Tom Buchanan',
  art: tomBuchananArt,
  alt: "A linocut portrait of Tom Buchanan in profile, facing right, drawn from Fitzgerald's description in Chapter I: the broadest man in the gallery, his head carried forward of his shoulders and tipped down a little. He has a square, heavy jaw and a thick neck, pale straw-coloured hair brushed back, a heavy brow drawn low over a large dark eye with a glint in it, and a straight, hard mouth turned down at the corner. He wears a thin tweed riding coat, its weave cut in fine pale ticks, with a white collar and a dark tie, and his near shoulder rises under the coat in a round of cut lines. Five numbered red markers point to his hair, his mouth, his eye, his shoulder and his body.",
  describedBy: [
    {
      phrase: 'a sturdy straw-haired man of thirty',
      at: [HAIR_BACK[0] - 40, HAIR_BACK[1]],
      to: HAIR_BACK,
    },
    { phrase: 'a rather hard mouth', at: [LIPS[0] + 56, LIPS[1]], to: LIPS },
    { phrase: 'Two shining arrogant eyes', at: [EYE[0] + 74, EYE[1]], to: EYE },
    {
      phrase: 'a great pack of muscle shifting when his shoulder moved under his thin coat',
      at: SHOULDER,
    },
    { phrase: 'a cruel body', at: BODY },
  ],
  where: 'Chapter I',
  passage:
    'He had changed since his New Haven years. Now he was a sturdy straw-haired man of thirty with a rather hard mouth and a supercilious manner. Two shining arrogant eyes had established dominance over his face and gave him the appearance of always leaning aggressively forward. Not even the effeminate swank of his riding clothes could hide the enormous power of that body—he seemed to fill those glistening boots until he strained the top lacing, and you could see a great pack of muscle shifting when his shoulder moved under his thin coat. It was a body capable of enormous leverage—a cruel body.',
  note: 'Nick describes Tom almost entirely as a body, and as a threat: his eyes have “established dominance”, he seems always to be “leaning aggressively forward”, his strength is “leverage”. The last two words are a verdict on everything he does in the novel.',
  artNote:
    'His straw hair is cut pale, as the panels cut it. His “glistening boots” are below the frame; the novel does not describe his shirt and tie, so they are plain.',
}
