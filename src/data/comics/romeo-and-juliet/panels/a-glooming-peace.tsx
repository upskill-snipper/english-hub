import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { clamp, gouge, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { engravedSky, footShadow, grass, grave, Monument, Yew, type P } from './late-scenes-kit'
import { Figure, type Pose } from './late-scenes-people'

/**
 * Act 5, Scene 3: "A glooming peace", the twentieth and last moment in the
 * guide's timeline. Every detail is from the end of the scene, as the held
 * edition prints it (src/data/full-texts/romeo-and-juliet.ts):
 *
 * - "A glooming peace this morning with it brings; / The sun for sorrow will
 *   not show his head." So it is dawn in the same churchyard as "The tomb",
 *   with its yew and the Capulets' monument (./late-scenes-kit.tsx), and the
 *   sky is heavy with cloud: the light is up, but there is no sun in it.
 * - "There, where the torch doth burn." Romeo's torch still burns in the
 *   vault, small in the dark doorway, its flame in the spot colour.
 * - SAFEGUARDING: the dead lie in the vault and are not drawn; the doorway
 *   is dark.
 * - PRINCE: "Capulet, Montague, / See what a scourge is laid upon your hate
 *   [...] All are punish'd." He has just read Romeo's letter ("This letter
 *   doth make good the Friar's words"), so he holds it in one hand and turns
 *   to the two fathers with the other. His circlet is printed in the spot
 *   colour, as it is in "A brawl in the streets".
 * - CAPULET: "O brother Montague, give me thy hand." So the two old men
 *   clasp hands in the middle of the picture, heads bowed: Capulet in his cap
 *   and white beard, Montague white-haired and bareheaded.
 * - Montague: "my wife is dead tonight", so Lady Montague is not here. Lady
 *   Capulet ("This sight of death is as a bell / That warns my old age to a
 *   sepulchre") stands behind her husband, head bowed, hands clasped.
 * - Friar Lawrence has told the whole story and waits for judgement ("let my
 *   old life / Be sacrific'd"), head bowed, his hands in his sleeves; and
 *   Balthasar, "Romeo's man", stands by with his cap in his hand.
 *
 * The Watch are there too, but are left out to keep the picture clear. The
 * people are drawn as in the other late panels (./late-scenes-people.tsx).
 * Nothing is taken from a film or stage production. Seeds: 2001 (sky), 2002
 * (grass).
 */

const W = 860
const H = 340
const HORIZON = 250

const BALTHASAR: Pose = {
  look: 'servant',
  bare: true,
  head: { at: [4, -175], rot: 16 },
  eye: 'down',
  far: {
    arm: [
      [-3, -149],
      [6, -122],
      [17, -130],
    ],
    hand: 'cup',
  },
  near: {
    arm: [
      [6, -147],
      [3, -120],
      [6, -96],
    ],
    hand: 'open',
    deg: 90,
    thumb: -1,
  },
  legs: {
    far: [
      [-5, -84],
      [-8, -46],
      [-10, 0],
    ],
    near: [
      [6, -84],
      [10, -46],
      [12, 0],
    ],
  },
  cloak: 2,
}
const FRIAR: Pose = {
  look: 'friar',
  head: { at: [4, -174], rot: 16 },
  eye: 'down',
  far: {
    arm: [
      [-3, -149],
      [2, -118],
      [15, -113],
    ],
    hand: 'cup',
  },
  near: {
    arm: [
      [6, -147],
      [10, -117],
      [21, -111],
    ],
    hand: 'cup',
  },
}
const LADY: Pose = {
  look: 'lady',
  head: { at: [5, -168], rot: 18 },
  eye: 'down',
  far: {
    arm: [
      [-2, -142],
      [3, -114],
      [15, -108],
    ],
    hand: 'cup',
  },
  near: {
    arm: [
      [5, -142],
      [10, -112],
      [19, -106],
    ],
    hand: 'cup',
  },
  body: { top: -150 },
}
/** The two fathers, each reaching out his near hand to clasp the other's. */
const FATHER_ARM: P[] = [
  [6, -147],
  [24, -127],
  [48, -124],
]
const CAPULET: Pose = {
  look: 'capulet',
  head: { at: [4, -174], rot: 12 },
  eye: 'down',
  far: {
    arm: [
      [-3, -149],
      [-7, -118],
      [-4, -94],
    ],
    hand: 'open',
    thumb: -1,
  },
  near: { arm: FATHER_ARM },
}
const MONTAGUE: Pose = {
  look: 'montague',
  head: { at: [4, -174], rot: 14 },
  eye: 'down',
  far: {
    arm: [
      [-3, -149],
      [-7, -118],
      [-4, -94],
    ],
    hand: 'open',
    thumb: -1,
  },
  near: { arm: FATHER_ARM },
}
/** The Prince, Romeo's letter in one hand, the other held out to the fathers. */
const PRINCE: Pose = {
  look: 'prince',
  head: { at: [3, -178], rot: 2 },
  far: {
    arm: [
      [-3, -149],
      [6, -122],
      [18, -118],
    ],
    hand: 'cup',
  },
  near: {
    arm: [
      [6, -147],
      [22, -124],
      [46, -120],
    ],
    hand: 'open',
    deg: -6,
    thumb: -1,
  },
}

const AT = {
  balthasar: [196, 322] as P,
  friar: [262, 324] as P,
  lady: [330, 322] as P,
  capulet: [408, 326] as P,
  montague: [530, 326] as P,
  prince: [640, 324] as P,
}
/** Where the fathers' hands meet: each near wrist, carried by its figure's transform. */
const CLASP: P = [469, 196]

type Marks = { sky: string; grass: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // a grey morning under cloud: heavy above, paling towards the horizon, and
  // no sun anywhere in it
  // (no cut is made where the monument will cover the sky)
  const sky = engravedSky(rng(2001), { x0: 0, x1: W, y0: 0, y1: HORIZON }, (_x, y) =>
    clamp(0.95 - (y / HORIZON) * 0.75),
  )
    .split('M')
    .filter((c) => {
      if (!c) return false
      const [x, y] = c.split(/[ Q]/).map(Number)
      return !(
        x > 590 && (x < 716 ? y > 112 - ((x - 578) / 138) * 84 : y > 28 + ((x - 716) / 160) * 80)
      )
    })
    .map((c) => 'M' + c)
    .join('')
  const gr = grass(rng(2002), { x0: 0, x1: W, y0: HORIZON + 4, y1: H - 2 }, 130)
  cached = { sky, grass: gr }
  return cached
}

const GRAVES = [grave(70, 330, 40, 'slab'), grave(810, 336, 34), grave(150, 286, 22, 'cross')]

function GloomingPeace({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [470, 200], push: 1.03 })}>
      {/* a grey morning with no sun in it */}
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />

      {/* the churchyard: ground, grass and graves */}
      <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.6} />
      <path d={m.grass} fill={INK} />
      <g fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round">
        {GRAVES.map((g) => (
          <path key={g.mound} d={g.mound} />
        ))}
        {GRAVES.filter((g) => g.head).map((g) => (
          <path key={g.head} d={g.head} />
        ))}
      </g>

      {/* the yew and the monument, the torch still burning in the vault */}
      <Yew at={[70, 284]} scale={0.92} />
      <Monument uid={uid} time="dawn" />

      {/* shadows at their feet */}
      <path
        d={
          footShadow(AT.balthasar[0], AT.balthasar[1] + 2, 26) +
          footShadow(AT.friar[0] + 4, AT.friar[1] + 2, 34) +
          footShadow(AT.lady[0] + 4, AT.lady[1] + 2, 38) +
          footShadow(AT.capulet[0], AT.capulet[1] + 2, 34) +
          footShadow(AT.montague[0], AT.montague[1] + 2, 34) +
          footShadow(AT.prince[0], AT.prince[1] + 2, 34)
        }
        fill={INK}
      />

      {/* Balthasar, Romeo's man, his cap in his hand */}
      <Figure pose={BALTHASAR} at={AT.balthasar} scale={0.98}>
        <path
          d="M8 -138C8 -146 16 -150 24 -148C30 -146 32 -140 30 -134C22 -132 14 -133 8 -138Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.3}
        />
      </Figure>
      {/* the Friar, who has told the whole story */}
      <Figure pose={FRIAR} at={AT.friar} scale={1.02} />
      {/* Lady Capulet, behind her husband */}
      <Figure pose={LADY} at={AT.lady} scale={1.02} />

      {/* "O brother Montague, give me thy hand." */}
      <Figure pose={CAPULET} at={AT.capulet} scale={1.04} />
      <Figure pose={MONTAGUE} at={AT.montague} scale={1.04} flip />
      {/* the clasped hands, cut so the grip reads at panel size. The cuts
          between the fingers and round the thumb were first finer than a
          hairline, and the grip printed as one black knot, two fists meeting
          (review of 26 September 2026); they are cut at carve weight now. */}
      <g transform={`translate(${CLASP[0]} ${CLASP[1]})`}>
        <path
          d="M-15 -5C-12 -10 -4 -11 2 -9C8 -11 14 -9 16 -4C18 1 15 7 9 8C4 10 -4 10 -9 8C-15 6 -18 0 -15 -5Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.8}
        />
        <path
          d={
            gouge(-9, -3, -3.5, 6, 1.4) + gouge(-3, -5.5, 2.5, 6, 1.4) + gouge(3, -6, 8.5, 4.5, 1.4)
          }
          fill={PAPER}
        />
        <path d="M-7 -9C-5 -15 2 -16 6 -11" stroke={PAPER} strokeWidth={LINE.carve} fill="none" />
      </g>

      {/* the Prince: "See what a scourge is laid upon your hate" */}
      <Figure pose={PRINCE} at={AT.prince} scale={1.06} flip>
        {/* Romeo's letter, open in his hand */}
        <path d="M14 -132L34 -128L30 -104L10 -108Z" fill={PAPER} stroke={INK} strokeWidth={1.3} />
        <path d="M15 -124L29 -121M14 -118L28 -115M13 -112L24 -110" stroke={INK} strokeWidth={0.8} />
      </Figure>
    </g>
  )
}

export const aGloomingPeace: LinocutArt = { width: W, height: H, Draw: GloomingPeace }
