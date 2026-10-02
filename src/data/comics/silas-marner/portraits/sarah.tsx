import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { arcDashes, between, clamp, deg, gouge, n, rng } from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, hatch, once, portraitGround, rimLight, smooth } from './common'

/**
 * Sarah, Silas's betrothed in Lantern Yard. George Eliot never says how she
 * looks. Chapter 1 gives only who she is and how her manner changed:
 *
 *   "For some months he had been engaged to a young servant-woman"
 *
 *   "Sarah's manner towards him began to exhibit a strange fluctuation
 *   between an effort at an increased manifestation of regard and
 *   involuntary signs of shrinking and dislike."
 *
 * So she is drawn plainly, and the markers point only at those two things:
 * a young woman in the dress a servant would wear in a northern town in the
 * 1790s (a white linen cap with a frilled edge over her hair, a white
 * kerchief crossed over a dark gown), in profile, facing right; her head
 * bowed and drawn back, her eyes lowered and her brows a little drawn
 * together, as someone shrinks from a person she is facing ("shrinking and
 * dislike"). Nothing is drawn into her face beyond that. The two phrases are
 * too far apart in the paragraph to print as one passage, so the card prints
 * them alone. There is no red in this plate, and nothing here comes from a
 * film or stage production.
 *
 * Seeds: 5301 for the ground, 5302 for the cuts in the figure.
 */

/** The head is drawn upright and bowed by BOW, about the base of the neck. */
const BOW = 'rotate(9 160 244)'

const HEAD = smooth([
  [128, 252, 1],
  [124, 228],
  [112, 204],
  [104, 172],
  [102, 136],
  [110, 100],
  [128, 72],
  [156, 56],
  [186, 54],
  [208, 64],
  [222, 84],
  [228, 106],
  [228.5, 120],
  [225, 128],
  [229, 140],
  [236, 154],
  [241, 163, 1],
  [236, 167],
  [230, 168, 1],
  [231.5, 173],
  [229, 176.5, 1],
  [230.5, 180.5],
  [226, 186],
  [228.5, 194],
  [223, 203],
  [208, 208],
  [200, 220],
  [200, 252, 1],
])

/** The linen cap: a gathered crown over the head, down to the nape. */
const CAP = smooth([
  [214, 76, 1],
  [206, 52],
  [178, 34],
  [138, 36],
  [104, 58],
  [86, 96],
  [84, 142],
  [94, 184],
  [118, 214, 1],
  [150, 206],
  [166, 180],
  [176, 150],
  [190, 116],
  [204, 92],
])
/** A little dark hair, parted, between the frill and the forehead. */
const HAIR = smooth([
  [219, 80, 1],
  [212, 82],
  [200, 96],
  [190, 116],
  [184, 132, 1],
  [196, 118],
  [206, 104],
  [216, 92],
])
/** The frilled edge of the cap, framing the face. */
const FRILL_SPINE: [number, number][] = [
  [216, 70],
  [206, 86],
  [196, 104],
  [186, 124],
  [176, 146],
  [166, 170],
  [154, 194],
  [138, 214],
]

const GOWN = smooth([
  [-6, 330, 1],
  [0, 294],
  [22, 262],
  [64, 240],
  [110, 234],
  [150, 242],
  [196, 244],
  [230, 258],
  [250, 290],
  [256, 330, 1],
])
/** The kerchief, round the neck and crossed over the breast. */
const KERCHIEF = smooth([
  [96, 238, 1],
  [124, 226],
  [150, 236],
  [178, 240],
  [204, 238],
  [222, 250],
  [232, 272],
  [218, 300, 1],
  [196, 286],
  [170, 272],
  [134, 262],
  [100, 254, 1],
])

type Marks = {
  ground: string
  cap: string
  frill: string
  back: string
  neck: string
  gown: string
  kerchief: string
}

/** Scallops along a spine, on its outer side: a frilled edge. */
function scallops(spine: [number, number][], depth: number, every: number): string {
  let d = ''
  for (let i = 0; i < spine.length - 1; i++) {
    const [ax, ay] = spine[i]
    const [bx, by] = spine[i + 1]
    const L = Math.hypot(bx - ax, by - ay)
    const nx = (by - ay) / L
    const ny = -(bx - ax) / L
    for (let t = 0; t < L - 0.1; t += every) {
      const x0 = ax + ((bx - ax) * t) / L
      const y0 = ay + ((by - ay) * t) / L
      const t1 = Math.min(t + every, L)
      const x1 = ax + ((bx - ax) * t1) / L
      const y1 = ay + ((by - ay) * t1) / L
      const cx = (x0 + x1) / 2 + nx * depth
      const cy = (y0 + y1) / 2 + ny * depth
      d += `M${n(x0)} ${n(y0)}Q${n(cx)} ${n(cy)} ${n(x1)} ${n(y1)}`
    }
  }
  return d
}

const marks = once<Marks>(() => {
  const ground = portraitGround(5301, (x, y) =>
    clamp(0.06 + ((x - 40) / 280) * 0.9 - Math.max(0, (y - 250) / 280)),
  )
  const r = rng(5302)
  // The gathers of the linen crown, radiating from the band at the back.
  let cap = ''
  for (let i = 0; i < 16; i++) {
    const a = deg(200 + i * 9 + between(r, -3, 3))
    const x0 = 150 + Math.cos(a) * 30
    const y0 = 128 + Math.sin(a) * 36
    const x1 = 150 + Math.cos(a) * between(r, 62, 76)
    const y1 = 128 + Math.sin(a) * between(r, 78, 90)
    cap += `M${n(x0)} ${n(y0)}Q${n((x0 + x1) / 2 + between(r, -4, 4))} ${n((y0 + y1) / 2)} ${n(x1)} ${n(y1)}`
  }
  // Shadow in the linen on the side away from the light.
  cap += rimLight(r, { cx: 150, cy: 124, rx: 62, ry: 86 }, 120, 250, 0, 1)
  let shade = ''
  for (let rad = 52; rad < 80; rad += 4)
    shade += arcDashes(r, 150, 126, rad, deg(120), deg(210), [10, 26], [3, 7])
  const frill = scallops(FRILL_SPINE, 4.2, 7)
  let back = ''
  for (let rad = 56; rad < 90; rad += 3.4)
    back += arcDashes(r, 176, 150, rad, deg(96), deg(140), [8, 22], [2, 5])
  const neck = hatch(r, { x0: 120, x1: 206, y0: 208, y1: 244 }, 5.2, 0.06)
  const gown =
    gouge(34, 270, 16, 318, 2, 2) +
    gouge(70, 256, 58, 318, 1.6, 2) +
    gouge(236, 286, 246, 318, 1.6, -2)
  const kerchief =
    'M110 246Q140 252 170 262M126 236Q160 246 196 256M150 240Q186 250 214 262M204 244Q216 262 220 290'
  return { ground, cap: cap + shade, frill, back, neck, gown, kerchief }
})

function SarahPortrait({ uid }: ArtProps) {
  const m = marks()
  const headClip = `${uid}-sa-head`
  const capClip = `${uid}-sa-cap`
  return (
    <>
      <defs>
        <clipPath id={headClip}>
          <path d={HEAD} />
        </clipPath>
        <clipPath id={capClip}>
          <path d={CAP} />
        </clipPath>
      </defs>
      <path d={m.ground} fill={PAPER} />
      {/* The ink halo that lifts the figure off the ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <g transform={BOW}>
          <path d={HEAD} />
          <path d={CAP} />
        </g>
        <path d={GOWN} />
      </g>
      <path d={GOWN} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={m.gown} fill={PAPER} />
      <g transform={BOW}>
        <path d={HEAD} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
          <path d={m.back} strokeWidth={1.5} />
          <path d={m.neck} strokeWidth={LINE.hairline} />
        </g>
        <path d={HAIR} fill={INK} />
        <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
          {/* the jaw */}
          <path d="M223 203C204 212 184 206 174 192" strokeWidth={1.5} />
          {/* brows drawn a little together, over lowered eyes */}
          <path d="M204 119Q214 115.5 224.5 119.5" strokeWidth={2.8} />
          <path d="M204.5 130.5Q214 125 223.5 130" strokeWidth={2.6} />
          <path d="M205 131Q213 135.5 222 131.5" strokeWidth={LINE.fine} />
          <path
            d="M207.5 133.5L206 137.5M211.5 134.5L211 138.5M215.5 134.5L215.8 138.5"
            strokeWidth={LINE.hairline}
          />
          {/* nostril, a small closed mouth, the chin */}
          <path d="M236 165C233 163 232.5 160 235 158" strokeWidth={1.3} />
          <path d="M229 176.5L221.5 177.5" strokeWidth={1.6} />
          <path d="M226.5 187Q224.5 189.5 225.5 192" strokeWidth={LINE.hairline} />
        </g>
        <circle cx={219.2} cy={132.4} r={2.2} fill={INK} />
        <path d={CAP} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <g clipPath={`url(#${capClip})`}>
          <path
            d={m.cap}
            fill="none"
            stroke={INK}
            strokeWidth={LINE.hairline}
            strokeLinecap="round"
          />
        </g>
        <path d={m.frill} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
        <path
          d="M216 70L206 86L196 104L186 124L176 146L166 170L154 194L138 214"
          fill="none"
          stroke={INK}
          strokeWidth={LINE.hairline}
        />
      </g>
      <path d={KERCHIEF} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={m.kerchief} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      <InnerRule />
    </>
  )
}

export const sarahArt: LinocutArt = { width: PW, height: PH, Draw: SarahPortrait }

export const sarah: Portrait = {
  name: 'Sarah',
  art: sarahArt,
  alt: "A linocut portrait of Sarah, the young woman Silas was engaged to in Lantern Yard, in profile, facing right. George Eliot never describes her looks, so she is drawn plainly: a young woman in a white linen cap with a frilled edge, a little dark hair showing at her forehead, a white kerchief crossed over a dark gown. Her head is bowed and drawn back, her eyes are lowered and her brows a little drawn together. Two numbered red markers point to her servant's cap and to her lowered eyes.",
  describedBy: [
    { phrase: 'a young servant-woman', at: [52, 70], to: [104, 96] },
    { phrase: 'involuntary signs of shrinking and dislike', at: [288, 96], to: [232, 140] },
  ],
  where: 'Chapter 1',
  note: 'Sarah has no words of her own in the novel. She ends the engagement by a message, and within little more than a month marries William Dane.',
  artNote:
    'Eliot never says how Sarah looks, only who she was and how her manner towards Silas changed. So she is drawn plainly, in the cap, kerchief and gown of a servant of the time, and the numbers point only to what the text says.',
}
