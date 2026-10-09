import type { ReactNode } from 'react'

import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { doublet, gown, shoe } from '../../romeo-and-juliet/panels/verona-kit'
import { SHORT_BEARD, SHORT_BEARD_CUTS, furCollar } from '../../king-lear/panels/people'
import { HAIR_SHORT } from '../../the-merchant-of-venice/panels/people'
import {
  AVENTAIL,
  BASCINET,
  CROWN,
  CROWN_BAND,
  CutFigure,
  EYE,
  HEAD_MAN,
  HEAD_YOUTH,
  Person,
  gripHand,
  hand,
  limb,
  mitt,
  swordHilt,
  type P,
  type Piece,
} from './people'
import { H, HourGlass, Playhouse, SKY, W, Yard } from './the-wooden-o'

/**
 * Act 5, Chorus: "Home and back again", the twenty-first moment in the
 * guide's timeline. "London and Blackheath, in the imagination." Every
 * detail is from the Chorus's speech in the held edition
 * (src/data/full-texts/henry-v.ts, Project Gutenberg #1521):
 *
 * - "Vouchsafe to those that have not read the story, That I may prompt
 *   them". The Chorus speaks from the playhouse of the first panel (cut the
 *   same in ./the-wooden-o.tsx), seen from further back in the yard so that
 *   more of its open sky shows: the galleries sit lower in the picture, and
 *   the people of the yard stand along the bottom. He is the kit's Chorus
 *   (./people.tsx), on the boards, looking up, one open hand held out low
 *   towards what he asks the audience to see: "But now behold".
 * - What he describes is drawn in the open sky of the O, in line only,
 *   unprinted, as the first panel draws the army it asks the audience to
 *   imagine, so that it reads as imagined and not as there:
 *   - "You may imagine him upon Blackheath, Where that his lords desire him
 *     to have borne His bruised helmet and his bended sword Before him
 *     through the city. He forbids it, Being free from vainness and
 *     self-glorious pride". So on the heath the King, the kit's Henry cut in
 *     line (the same head, crown and fur-collared gown), holds up his open
 *     hand from a bent arm to stop a lord who stands before him on the road
 *     to the city, turned back to him: a bearded man in a tunic to the knee,
 *     holding out the helmet, its bowl dented and its mail hanging from it,
 *     and holding the sword by its hilt, point down, its blade bent. The
 *     quotation.
 *   - "How London doth pour out her citizens! The mayor and all his brethren
 *     in best sort ... With the plebeians swarming at their heels, Go forth
 *     and fetch their conquering Caesar in". So the walls and the gate of
 *     London stand beyond the heath, and its people pour out of the gate
 *     towards him, the Mayor at their head in a long gown and a chain.
 * - The spot colour is the one colour in the vision, as in the first panel:
 *   the banner of Saint George ("Cry, God for Harry! England and Saint
 *   George!", 3.1) flying over London's gate to welcome the King home, cut big
 *   enough at phone width to stay a flag. The only ink printed solid in it is
 *   what the kit always prints in ink: the fur of the King's collar and the
 *   mail of the helmet, its rings cut in paper.
 * - "Turning the accomplishment of many years Into an hour-glass" (the
 *   Prologue): the first panel's hour-glass stands on the boards, its sand
 *   nearly run, "myself have play'd The interim".
 *
 * The beach and the sea, the Emperor, and the general from Ireland the
 * speech compares him to are left to the words. Nothing is taken from a
 * film, television or stage production. Seeds: 2101 (the sky), 2102 (the
 * heath), 2103 (the citizens).
 */

/**
 * The playhouse is printed lower in the picture than the first panel prints
 * it, as it looks from further back in the yard: squeezed upwards towards the
 * foot of the picture, which gives the open sky more room for what is
 * imagined in it.
 */
const SQUASH = 'translate(0 340) scale(1 0.72) translate(0 -340)'
const sq = (y: number) => 340 - (340 - y) * 0.72

const CHORUS: P = [148, 302]
const GLASS: P = [432, sq(280)]
/** Where the imagined heath runs, under the King and the lord. */
const HEATH = 183
/** The scale of the imagined King and lord, and where they stand on the heath. */
const VISION = 0.78
const KING_AT: P = [424, HEATH + 2]
const LORD_AT: P = [556, HEATH]

// ── The imagined people, cut in line ───────────────────────────────────────
// Each is cut from the kit's own heads and garments (./people.tsx), facing
// right with its feet at (0, 0), in paper with an ink edge: unprinted.

/** The King: the kit's Henry, his head, crown and gown, his near hand held up to stop the lord. */
const KING = {
  parts: [
    [
      {
        d: limb([
          [-3, -130],
          [-6, -104],
          [-4, -80],
        ]),
        w: 9.4,
      },
      mitt([-4, -80], 92),
    ],
    { d: gown([0, -138], [0, -90], 0, 1, { shoulder: 32, waistW: 26, front: 22, back: 28 }) },
    shoe([10, 0], 1),
    { d: HEAD_YOUTH, t: 'translate(3 -160)' },
    { d: CROWN, t: 'translate(3 -160)', sep: 1.2 },
    [
      {
        d: limb([
          [5, -128],
          [24, -117],
          [41, -127],
        ]),
        w: 9.4,
        sep: 1.3,
      },
      ...hand([41, -127], -64, { size: 15, spread: 18, thumb: -1, sep: 1.3 }),
    ],
  ] as Piece[],
  cuts:
    gouge(-13, -91, 13, -90, 1.5) +
    gouge(6, -80, 12, -8, 1.3, -0.4) +
    gouge(-4, -80, -14, -8, 1.5, 1) +
    furCollar([0, -138]),
}

/**
 * The lord, turned back to the King, a man of the kit's lords in a tunic to
 * the knee and a short beard. In his near hand he holds the bruised helmet
 * out to the King at the height of his shoulder: the kit's bascinet with its
 * mail falling from it, so that it is plainly a helmet, dented in at the side.
 * In his far hand he holds the bended sword by its hilt, point down, so that
 * no blade is raised at anyone.
 *
 * WHY (9 October 2026). He was first cut in a long cloak and a tunic to the
 * calf, which in outline read as a woman's gown, and the helmet, a bowl on
 * his hand with no mail, read as a fan.
 */
const HELM_GRIP: P = [50, -138]
const SWORD_GRIP: P = [14, -92]
const LORD = {
  parts: [
    [
      {
        d: limb([
          [-3, -70],
          [-6, -36],
          [-9, -3],
        ]),
        w: 9,
      },
      shoe([-9, 0], 1),
    ],
    [{ d: limb([[-3, -130], [6, -110], SWORD_GRIP]), w: 8.6 }, gripHand(SWORD_GRIP, 96)],
    {
      d: limb([
        [0, -138],
        [0, -70],
      ]),
      w: 23.6,
    },
    { d: doublet([0, -138], [0, -70], 1, { width: 31, hem: 30, flare: 8 }) },
    [
      {
        d: limb([
          [3, -70],
          [7, -36],
          [9, -3],
        ]),
        w: 9,
      },
      shoe([9, 0], 1),
    ],
    { d: SHORT_BEARD, t: 'translate(3 -160)' },
    { d: HEAD_MAN, t: 'translate(3 -160)' },
    [
      { d: limb([[5, -128], [25, -124], HELM_GRIP]), w: 8.6, sep: 1.3 },
      { ...gripHand(HELM_GRIP, -72), sep: 1.3 },
    ],
  ] as Piece[],
  cuts: gouge(-13, -73, 14, -74, 1.3) + gouge(6, -66, 10, -46, 1.2, -0.4),
}
/** The bended sword, point down: straight from the hilt, then bent sharply forward towards the ground. */
const BLADE = (() => {
  const [x, y] = SWORD_GRIP
  const kink: P = [x + 1, y + 40]
  const tip: P = [x + 24, y + 70]
  return (
    `M${x - 2.4} ${y + 8}L${kink[0] - 2.6} ${kink[1] + 1.4}L${n(tip[0] - 2.4)} ${n(tip[1] - 0.2)}` +
    `L${n(tip[0] + 1.4)} ${n(tip[1] + 1.4)}L${n(tip[0] + 1.8)} ${n(tip[1] - 3)}L${kink[0] + 2.4} ${kink[1] - 1.6}L${x + 2.4} ${y + 8}Z`
  )
})()
/**
 * The bruised helmet on his hand, its open face towards the King: the kit's
 * bascinet and its mail (AVENTAIL), the rings of the mail in ink, and the dent
 * cut into the side of the bowl.
 */
const HELM_T = `translate(${HELM_GRIP[0] + 14} ${HELM_GRIP[1] - 14}) rotate(12) scale(1.4)`
/**
 * The far rim of the helmet's open face, seen through the opening: the edge
 * of the steel round where the face would be, so that the helmet reads as a
 * hollow shell held up empty, and not as a hood.
 */
const HELM_RIM = 'M14.6 -8.6C10.4 -7.2 6.2 -6.4 2.6 -6.2C3.4 2 5.4 9 8.6 15.4'
/** The bowl's ridge, from the brow up over the top, cut in ink so the steel is curved. */
const HELM_RIDGE = 'M12.4 -12.4C9 -20 2 -25 -6 -25.4'
/** The dent: a notch knocked into the side of the bowl, its edges cut in ink. */
const HELM_DENT_NOTCH = 'M-19.4 -18.4L-12.4 -15.2L-18.8 -9.6Z'
const HELM_DENT = 'M-19.4 -18.4L-12.4 -15.2L-18.8 -9.6'
/** The rings of the mail, cut in paper on the ink, as the kit cuts every aventail. */
const MAIL = (() => {
  let d = ''
  for (const [y, x0, x1] of [
    [1.4, -18.6, -3.4],
    [6.2, -19.8, -2.6],
    [11, -21, -1],
    [15.8, -22.4, 1.4],
    [20.6, -24, 4.6],
  ] as [number, number, number][])
    for (let x = x0 + ((y * 10) % 3); x < x1; x += 3.4)
      d += `M${n(x)} ${y}a1.2 1.2 0 1 0 2.4 0a1.2 1.2 0 1 0 -2.4 0`
  return d
})()
/** One of the people pouring out of London: a long gown with its shoulders, a head, and a flat cap on some. */
function citizen(
  x: number,
  y: number,
  s: number,
  cap: boolean,
  chain = false,
): { parts: Piece[]; cuts: string } {
  const p = (dx: number, dy: number) => `${n(x + dx * s)} ${n(y + dy * s)}`
  const body = `M${p(-9, -42)}C${p(-12, -36)} ${p(-12, -22)} ${p(-14, 0)}L${p(12, 0)}C${p(10, -22)} ${p(10, -36)} ${p(8, -42)}Q${p(0, -47)} ${p(-9, -42)}Z`
  const head = `M${p(-6.6, -52)}a${n(6.6 * s)} ${n(7.2 * s)} 0 1 0 ${n(13.2 * s)} 0a${n(6.6 * s)} ${n(7.2 * s)} 0 1 0 ${n(-13.2 * s)} 0Z`
  const parts: Piece[] = [{ d: body }, { d: head, sep: 0.9 }]
  if (cap)
    parts.push({ d: `M${p(-8.4, -56)}C${p(-8, -64)} ${p(8, -64)} ${p(8.6, -56)}Z`, sep: 0.8 })
  // a fold down the gown, and for the Mayor his chain of office across his shoulders
  let cuts = gouge(x - 2 * s, y - 36 * s, x - 4 * s, y - 4 * s, 0.8 * s)
  if (chain) cuts += gouge(x - 7 * s, y - 41 * s, x + 6 * s, y - 37 * s, 1.1 * s, 3 * s)
  return { parts, cuts }
}

/** A stretch of city wall with battlements along its top, from x0 to x1. */
function wall(
  x0: number,
  x1: number,
  top: number,
  bottom: number,
  merlon = 9,
  gap = 6,
  mh = 7,
): string {
  let d = `M${x0} ${bottom}L${x0} ${top}`
  for (let x = x0; x < x1; x += merlon + gap) {
    const a = x
    const b = Math.min(x + merlon, x1)
    d += `L${a} ${top - mh}L${b} ${top - mh}L${b} ${top}`
    if (b < x1) d += `L${Math.min(b + gap, x1)} ${top}`
  }
  return d + `L${x1} ${bottom}Z`
}

/** London, beyond the heath: its wall, its gatehouse with two towers, and roofs and a spire behind. */
const CITY = {
  roofs:
    'M640 132L652 112L664 132ZM668 132L668 116L684 104L700 116L700 132Z' +
    'M786 130L786 112L800 100L814 112L814 130ZM818 128L830 106L842 128Z' +
    // the spire of a church, its tower and its steeple
    'M804 102L804 74L818 74L818 102ZM803 74L811 30L819 74Z',
  wallL: wall(624, 694, 132, 166),
  wallR: wall(770, 862, 128, 160),
  towerL: wall(690, 716, 80, 166, 6, 4, 6),
  towerR: wall(746, 772, 80, 164, 6, 4, 6),
  gateBody: wall(714, 748, 96, 165, 5, 4, 5),
  arch: 'M720 165L720 134C720 124 742 124 742 134L742 165Z',
  windows: 'M700 98h6v10h-6ZM756 98h6v10h-6ZM728 106h6v8h-6Z',
  stones: 'M632 146H690M774 142H860M632 154H688M776 150H858',
}
/** Saint George's banner on the left tower, flying out towards the heath. */
const POLE = 'M703 80L703 38'
const FLAG = 'M703 40C690 38 680 44 664 42L668 52L663 62C678 64 690 58 703 60Z'
const FLAG_CROSS =
  'M687 40.6L692 40.6L692 49H703V54.4H692L691.6 61.6L686.6 62.4L686.8 54.6L666.4 54.2L667.6 49L687 49Z'

function LineFigure({
  at,
  s,
  flip = false,
  parts,
  cuts,
  children,
}: {
  at: P
  s: number
  flip?: boolean
  parts: Piece[]
  cuts?: string
  children?: ReactNode
}) {
  return (
    <g transform={`translate(${n(at[0])} ${n(at[1])}) scale(${n(flip ? -s : s)} ${n(s)})`}>
      <CutFigure parts={parts} cuts={cuts} tone="paper" halo={1.5}>
        {children}
      </CutFigure>
    </g>
  )
}

type Marks = { streaks: string; heath: string; crowd: { parts: Piece[]; cuts: string }[] }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A clear afternoon: a few long streaks of cloud, as in the first panel.
  const streaks = gougeField(
    rng(2101),
    { x0: 0, x1: W, y0: 8, y1: 150 },
    (x, y) => clamp(0.3 - y / 300 - Math.abs(x - 330) / 2600, 0.02, 0.36),
    { spacing: 9, len: [30, 110], gap: [30, 90], max: 1.6 },
  )
  // The heath in line: its edge, a road running on to the gate, and tufts.
  const r = rng(2102)
  let heath = `M332 ${HEATH + 2}C420 ${HEATH - 2} 520 ${HEATH} 600 ${HEATH - 6}C640 ${HEATH - 10} 680 168 712 166`
  heath += `M560 ${HEATH + 4}C610 ${HEATH - 2} 660 172 720 166`
  for (let i = 0; i < 16; i++) {
    const x = between(r, 350, 620)
    const y = HEATH + between(r, -1, 1) - (x > 560 ? (x - 560) * 0.08 : 0)
    heath += `M${n(x - 3)} ${n(y)}L${n(x - 1)} ${n(y - 5)}M${n(x + 1)} ${n(y)}L${n(x + 2)} ${n(y - 6)}`
  }
  // The people of London, pouring out of the gate towards the King, smaller
  // as they are further off, the Mayor at their head.
  const rc = rng(2103)
  const crowd: Marks['crowd'] = []
  const stream: [number, number, number][] = [
    [726, 163, 0.34],
    [736, 162, 0.32],
    [716, 165, 0.36],
    [704, 167, 0.4],
    [690, 170, 0.43],
    [702, 172, 0.45],
    [676, 173, 0.48],
    [688, 176, 0.5],
    [662, 177, 0.53],
  ]
  for (const [x, y, s] of stream) crowd.push(citizen(x, y, s, rc() < 0.5))
  crowd.push(citizen(640, HEATH - 2, 0.62, true, true))
  cached = { streaks, heath, crowd }
  return cached
}

function HomeAndBackAgain({ uid }: ArtProps) {
  const m = marks()
  const skyClip = `${uid}-sky`
  return (
    <>
      <defs>
        <clipPath id={skyClip}>
          <rect x={0} y={0} width={W} height={100} />
          <path d={SKY} transform={SQUASH} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [430, 160], push: 1.03 })}>
        {/* the open sky of the O */}
        <g clipPath={`url(#${skyClip})`}>
          <rect x={0} y={0} width={W} height={H} fill={PAPER} />
          <path d={m.streaks} fill={INK} />
        </g>
        <g transform={SQUASH}>
          <Playhouse />
        </g>

        {/* what the Chorus asks us to see, drawn in line in the sky */}
        <g className="lc-fade-in" style={timing({ delay: 0.8, dur: 1.6 })}>
          {/* London: its roofs and spire, its walls, its gate, and Saint George's banner */}
          <g fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round">
            <path d={CITY.roofs} />
            <path d={CITY.wallL + CITY.wallR} />
            <path d={CITY.towerL + CITY.towerR} />
            <path d={CITY.gateBody} />
          </g>
          <path d={CITY.arch + CITY.windows} fill={INK} />
          <path d={CITY.stones} stroke={INK} strokeWidth={0.9} fill="none" />
          <path d={POLE} stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
          <path d={FLAG} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
          <path d={FLAG_CROSS} fill={RED} />
          <path d={FLAG} fill="none" stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />

          {/* the heath, and the people pouring out of the gate across it */}
          <path d={m.heath} fill="none" stroke={INK} strokeWidth={1.3} strokeLinecap="round" />
          {m.crowd.map((c, i) => (
            <CutFigure key={i} parts={c.parts} cuts={c.cuts} tone="paper" halo={1.3} />
          ))}

          {/* the lord, holding out the bruised helmet and the bended sword */}
          <LineFigure at={LORD_AT} s={VISION} flip parts={LORD.parts} cuts={LORD.cuts}>
            <path d={BLADE} fill={PAPER} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
            <path
              d={swordHilt([SWORD_GRIP[0], SWORD_GRIP[1] + 8], -90)}
              fill={PAPER}
              stroke={INK}
              strokeWidth={1.2}
            />
            <path d={gripHand(SWORD_GRIP, 96).d} fill={PAPER} stroke={INK} strokeWidth={1.3} />
            <g transform={HELM_T}>
              <path d={AVENTAIL} fill={INK} stroke={INK} strokeWidth={1.3} strokeLinejoin="round" />
              <path d={MAIL} fill="none" stroke={PAPER} strokeWidth={0.75} />
              <path
                d={BASCINET}
                fill={PAPER}
                stroke={INK}
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
              <path d={HELM_DENT_NOTCH} fill={PAPER} />
              <path
                d={HELM_DENT}
                fill="none"
                stroke={INK}
                strokeWidth={1.4}
                strokeLinejoin="round"
              />
              <path
                d={HELM_RIM + HELM_RIDGE}
                fill="none"
                stroke={INK}
                strokeWidth={1}
                strokeLinecap="round"
              />
            </g>
            <g transform="translate(3 -160)">
              <path
                d={SHORT_BEARD}
                fill={PAPER}
                stroke={INK}
                strokeWidth={1.1}
                strokeLinejoin="round"
              />
              <path d={SHORT_BEARD_CUTS} fill={INK} />
              <path d={EYE} fill={INK} />
              <path
                d={HAIR_SHORT}
                fill="none"
                stroke={INK}
                strokeWidth={1.1}
                strokeLinecap="round"
              />
            </g>
          </LineFigure>

          {/* the King, his hand held up: "He forbids it" */}
          <LineFigure at={KING_AT} s={VISION} parts={KING.parts} cuts={KING.cuts}>
            <g transform="translate(3 -160)">
              <path d={EYE} fill={INK} />
              <path
                d={HAIR_SHORT}
                fill="none"
                stroke={INK}
                strokeWidth={1.1}
                strokeLinecap="round"
              />
              <path d={CROWN_BAND} fill="none" stroke={INK} strokeWidth={1} />
            </g>
          </LineFigure>
        </g>

        {/* the hour-glass on the boards, its sand nearly run */}
        <HourGlass x={GLASS[0]} y={GLASS[1]} sand={0.82} />

        {/* the Chorus, looking up, one open hand held out towards what he describes */}
        <path
          d={gouge(CHORUS[0] - 40, CHORUS[1] + 1, CHORUS[0] + 46, CHORUS[1] + 2, 2.2)}
          fill={INK}
        />
        <Person
          at={CHORUS}
          scale={1.1}
          pose={{
            look: 'chorus',
            head: { rot: -9 },
            mouth: 'open',
            far: {
              pts: [
                [-3, -128],
                [-9, -104],
                [-7, -82],
              ],
            },
            near: {
              pts: [
                [4, -128],
                [22, -112],
                [41, -116],
              ],
              hand: 'open',
              deg: -22,
              thumb: -1,
            },
            legs: {
              far: [
                [-3, -70],
                [-8, -36],
                [-12, -3],
              ],
              near: [
                [3, -70],
                [8, -36],
                [10, -3],
              ],
            },
          }}
        />

        <g transform="translate(0 10)">
          <Yard />
        </g>
      </g>
    </>
  )
}

export const homeAndBackAgain: LinocutArt = { width: W, height: H, Draw: HomeAndBackAgain }
