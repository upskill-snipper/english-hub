import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, n, rng } from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, hatch, once, portraitGround, smooth } from './common'

/**
 * Mr Frederick, as Orwell introduces him in Chapter 4, and nothing else:
 *
 *   "The other farm, which was called Pinchfield, was smaller and better
 *   kept. Its owner was a Mr. Frederick, a tough, shrewd man, perpetually
 *   involved in lawsuits and with a name for driving hard bargains."
 *
 * Orwell never describes his face, so he is drawn plainly: a countryman of
 * the 1940s in a hat with its brim pulled down, a dark overcoat, a collar and
 * tie. What the passage gives is his character, his business and his land, so
 * that is what is drawn: a hard face in profile, facing right, the jaw set,
 * the eye narrowed under the brim, the mouth one tight line ("tough,
 * shrewd"); a thick bundle of legal papers held against his chest, tied with
 * tape printed in the spot colour, the red tape a solicitor ties a brief with
 * ("perpetually involved in lawsuits"); and behind him Pinchfield, small and
 * neat: a clipped hedge, a straight fence and a field ploughed in even rows.
 * He is drawn to stand apart from Pilkington: profile against three-quarters,
 * a hat against a cap, neat land against overgrown woods. Nothing here comes
 * from a film or stage production.
 *
 * Seeds: 6401 for the ground, 6402 for the cuts.
 */

/** His head in profile, facing right: a square jaw and a straight nose. */
const HEAD = smooth([
  [132, 150],
  [128, 118],
  [136, 96],
  [156, 84],
  [184, 82],
  [206, 90],
  [214, 104],
  [216, 118],
  [228, 138, 1],
  [218, 142],
  [220, 152],
  [216, 160],
  [218, 170],
  [212, 180, 1],
  [196, 184],
  [178, 184],
  [164, 178],
  [152, 176],
  [148, 196, 1],
  [130, 196, 1],
])
/** A trilby, its brim pulled down at the front. */
const CROWN =
  'M138 100C136 82 140 62 154 54C162 50 168 56 176 58C184 60 190 50 200 52C210 56 214 76 212 98Z'
/** The pinch of the crown: its dent, cut down the middle. */
const PINCH = 'M162 58C168 66 172 76 172 88M190 56C186 66 184 76 184 88'
const BRIM =
  'M110 104C128 98 170 98 206 98C222 98 236 106 242 118C224 114 206 108 186 108C160 108 130 112 110 104Z'
const BAND = 'M138 88C162 84 190 84 212 86L212 96C190 94 162 94 138 98Z'
/** His overcoat, running out of the block, the collar turned up. */
const COAT = smooth([
  [30, 330, 1],
  [40, 262],
  [70, 214],
  [116, 194],
  [138, 190],
  [170, 206],
  [206, 186],
  [242, 196],
  [274, 226],
  [290, 272],
  [298, 330, 1],
])
const COAT_COLLAR = 'M120 196L144 182L174 210L152 240ZM226 188L250 200L214 238L200 214Z'
const SHIRT = 'M150 190L174 206L204 186L206 204L176 222L148 206Z'
const TIE = 'M170 208L184 208L188 234L178 256L168 234Z'
/** The bundle of papers, held against his chest, and its red tape. */
const PAPERS = 'M104 244L204 230L214 300L112 314Z'
const PAPERS_SIDE = 'M104 244L96 250L104 318L112 314Z'
const TAPE = 'M152 237L160 236L170 307L162 309ZM106 272L208 258L209 266L107 280Z'
const BOW =
  'M166 262C158 252 148 252 150 262C152 268 160 266 166 262ZM166 262C176 254 186 256 184 264C182 270 172 268 166 262ZM166 262L158 280L162 281ZM166 262L176 280L172 281Z'
/** His hand across the front of the bundle, fingers apart. */
const HAND = 'M206 264C214 258 226 260 230 268L228 290C224 296 214 296 208 292Z'
const FINGERS = ['M210 268L196 268', 'M210 276L194 277', 'M210 284L196 286']

/** Pinchfield: where the field's horizon, the fence and the hedge top run. */
const HORIZON = 128
const HEDGE_TOP = 186

type Marks = {
  sky: string
  furrows: string
  hedge: string
  fence: string
  coat: string
  jaw: string
  lines: string
}

const marks = once<Marks>(() => {
  const r = rng(6402)
  // A pale sky over the field.
  const sky = portraitGround(6401, (x, y) => (y < HORIZON ? clamp(0.06 + (y / HORIZON) * 0.12) : 0))
  // "smaller and better kept": the field ploughed in straight, even rows
  // running to the horizon.
  let furrows = ''
  for (let k = -14; k <= 14; k++) {
    const x0 = 166 + k * 4
    const x1 = 166 + k * 42
    furrows += `M${n(x0)} ${HORIZON + 2}L${n(x1)} ${HEDGE_TOP}`
  }
  // The clipped hedge: a level top, cut with small even leaf marks.
  let hedge = ''
  for (let y = HEDGE_TOP + 6; y < HEDGE_TOP + 40; y += 6)
    for (let x = 12 + (y % 12); x < PW - 10; x += 10) hedge += gouge(x, y, x + 5, y - 3, 0.9)
  // A straight post-and-rail fence along the field's edge.
  let fence = ''
  for (let x = 16; x < PW; x += 38) fence += `M${x} ${HEDGE_TOP - 22}L${x} ${HEDGE_TOP + 2}`
  fence += `M8 ${HEDGE_TOP - 16}L${PW - 8} ${HEDGE_TOP - 16}M8 ${HEDGE_TOP - 6}L${PW - 8} ${HEDGE_TOP - 6}`
  // The folds of the overcoat.
  const coat =
    gouge(80, 230, 56, 318, 1.6, 2) +
    gouge(254, 220, 278, 318, 1.4, -2) +
    gouge(226, 240, 236, 316, 1.1, -1)
  // The shadow at the back of the neck, under the jaw.
  const jaw = hatch(r, { x0: 130, x1: 152, y0: 150, y1: 196 }, 3.4, 0.2)
  // A few hard lines of the face: the cheek, the furrow by the mouth.
  const lines =
    'M176 132L182 150M204 146C200 156 200 164 204 172M186 120L178 124M156 170C166 178 180 182 196 182'
  return { sky, furrows, hedge, fence, coat, jaw, lines }
})

function MrFrederickPortrait({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-fr-head`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={HEAD} />
        </clipPath>
      </defs>
      <rect x={0} y={0} width={PW} height={HORIZON} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      {/* the field, ploughed in even rows, the fence and the clipped hedge */}
      <rect x={0} y={HORIZON} width={PW} height={HEDGE_TOP - HORIZON} fill={PAPER} />
      <path d={m.furrows} fill="none" stroke={INK} strokeWidth={1.3} />
      <path d={`M0 ${HORIZON}L${PW} ${HORIZON}`} stroke={INK} strokeWidth={LINE.bold} />
      <path d={m.fence} fill="none" stroke={INK} strokeWidth={3} />
      <path d={m.fence} fill="none" stroke={PAPER} strokeWidth={1} />
      <rect x={0} y={HEDGE_TOP} width={PW} height={PH - HEDGE_TOP} fill={INK} />
      <path d={`M0 ${HEDGE_TOP}L${PW} ${HEDGE_TOP}`} stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={m.hedge} fill={PAPER} />
      {/* the paper edge that cuts him out of the ground */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={5} strokeLinejoin="round">
        <path d={COAT} />
        <path d={HEAD} />
        <path d={CROWN} />
        <path d={BRIM} />
      </g>
      <path d={COAT} fill={INK} />
      <path d={m.coat} fill={PAPER} />
      <path d={SHIRT} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      <path d={COAT_COLLAR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      {/* the head, lit */}
      <path d={HEAD} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${clip})`}>
        {/* short dark hair at the back of the head, under the brim */}
        <path d="M126 102L156 102L152 122L142 134L128 134Z" fill={INK} />
        {/* the shadow at the back of the neck */}
        <path d={m.jaw} fill="none" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d={m.lines} strokeWidth={1.1} />
        {/* the ear */}
        <path d="M162 124C154 122 150 132 152 140C154 146 160 148 164 144" strokeWidth={1.7} />
        {/* a narrowed eye under a straight, heavy brow */}
        <path d="M190 116L214 118" strokeWidth={3} />
        <path d="M196 124Q204 121 212 124" strokeWidth={2} />
        <path d="M197 127Q204 128 211 126" strokeWidth={1} />
        {/* the nostril, and the mouth: one tight line */}
        <path d="M220 146C216 146 214 144 216 140" strokeWidth={1.2} />
        <path d="M216 164L198 165" strokeWidth={2.2} />
        <path d="M198 162L196 168" strokeWidth={1.2} />
      </g>
      <circle cx={206} cy={124.5} r={1.8} fill={INK} />
      {/* the trilby */}
      <path d={CROWN} fill={INK} />
      <path d={PINCH} fill="none" stroke={PAPER} strokeWidth={1.3} strokeLinecap="round" />
      <path d={BAND} fill={INK} stroke={PAPER} strokeWidth={1} />
      <path d={BRIM} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      {/* the bundle of papers, and its red tape */}
      <path d={PAPERS_SIDE} fill={PAPER} stroke={INK} strokeWidth={1.2} />
      <path
        d="M98 256L106 252M98 266L106 262M99 276L107 272M100 286L108 282M100 296L109 292M101 306L110 302"
        stroke={INK}
        strokeWidth={0.9}
      />
      <path d={PAPERS} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path
        d="M118 252L196 242M118 262L140 259M120 290L200 280M121 300L196 290"
        stroke={INK}
        strokeWidth={0.9}
      />
      <path d={TAPE} fill={RED} />
      <path d={BOW} fill={RED} stroke={INK} strokeWidth={0.8} />
      {/* his hand, laid across the front of the bundle, the fingers apart */}
      <path
        d="M232 240C238 256 236 276 228 290"
        fill="none"
        stroke={INK}
        strokeWidth={20}
        strokeLinecap="round"
      />
      <path d={HAND} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <g fill="none" strokeLinecap="round">
        {FINGERS.map((d) => (
          <path key={`i${d}`} d={d} stroke={INK} strokeWidth={8.4} />
        ))}
        {FINGERS.map((d) => (
          <path key={d} d={d} stroke={PAPER} strokeWidth={5.6} />
        ))}
      </g>
      <InnerRule />
    </>
  )
}

export const mrFrederickArt: LinocutArt = { width: PW, height: PH, Draw: MrFrederickPortrait }

export const mrFrederick: Portrait = {
  name: 'Mr Frederick',
  art: mrFrederickArt,
  alt: 'A linocut portrait of Mr Frederick of Pinchfield, in Chapter 4: a countryman seen head and shoulders, in profile facing right, in a dark trilby with its brim pulled down, a dark overcoat with the collar up, a white collar and a dark tie. His face is hard: a square jaw, a straight nose, a narrowed eye under a heavy brow, and a mouth set in one tight line. He holds a thick bundle of legal papers against his chest, tied with tape printed in red, his hand laid across it. Behind him lies a small, neat farm: a field ploughed in straight, even rows, a straight post-and-rail fence and a clipped hedge. Four numbered red markers point to the field, his face, the bundle of papers and his jaw.',
  describedBy: [
    { phrase: 'smaller and better kept', at: [284, 150], to: [260, 170] },
    { phrase: 'a tough, shrewd man', at: [270, 70], to: [212, 122] },
    { phrase: 'perpetually involved in lawsuits', at: [60, 270], to: [100, 282] },
    { phrase: 'a name for driving hard bargains', at: [252, 228], to: [206, 170] },
  ],
  where: 'Chapter 4',
  passage:
    'The other farm, which was called Pinchfield, was smaller and better kept. Its owner was a Mr. Frederick, a tough, shrewd man, perpetually involved in lawsuits and with a name for driving hard bargains.',
  note: 'Napoleon sells Frederick the timber in Chapter 8 and is paid in forged banknotes. Days later Frederick’s men attack the farm and blow up the windmill.',
  artNote:
    'Orwell never describes his face or his clothes, so he is drawn plainly, as a countryman of the 1940s; the red tape stands for his lawsuits.',
}
