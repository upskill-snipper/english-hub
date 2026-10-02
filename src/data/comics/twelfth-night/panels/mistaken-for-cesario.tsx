import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { gouge, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person } from './people'
import { OliviasHouse, Street } from './olivias-house'
import { footShadow, skyBars } from './act-3-garden'

/**
 * Act 4, Scene 1: "Mistaken for Cesario", the fourteenth moment in the
 * guide's timeline. Every detail is from the scene in the held edition
 * (Project Gutenberg #1526, src/data/full-texts/twelfth-night.ts):
 *
 * - "The Street before Olivia's House." So the house is the one every panel
 *   set before it shares (./olivias-house.tsx), its garden wall and orchard
 *   running on to the left.
 * - The instant drawn is Sebastian's line, after the fight: Olivia has come
 *   out crying "Hold, Toby! On thy life I charge thee hold!", sent him off
 *   ("Rudesby, be gone!" Exeunt Sir Toby, Sir Andrew and Fabian), and turns
 *   to the youth she takes for Cesario: "Be not offended, dear Cesario ...
 *   Go with me to my house ... Thou shalt not choose but go. Do not deny."
 *   So her gate stands open behind her, she takes his hand, and her other
 *   hand points him to the gate.
 * - Sebastian: "What relish is in this? How runs the stream? / Or I am mad,
 *   or else this is a dream." He gives her his hand, bewildered, his other
 *   hand lifted open beside him, and their two hands are one clasp between
 *   them (CLASP, below). He drew on Sir Toby a moment before; his sword is
 *   back in its scabbard.
 * - He is Viola's twin and dressed as she dresses as Cesario ("he went /
 *   Still in this fashion, colour, ornament, / For him I imitate", 3.4), so
 *   the kit cuts him with Cesario's face, cap and feather: that likeness is
 *   the mistake the panel is about.
 * - Sir Toby, Sir Andrew and Fabian go off down the street on the left,
 *   smaller for the distance. Feste has already gone ("This will I tell my
 *   lady straight"), so he is not drawn.
 * - The spot colour is Olivia's flush, on the cheek of her paper face, as in
 *   "I am not what I am": she believes she has Cesario by the hand.
 *
 * SAFEGUARDING. Sir Andrew strikes Sebastian and is beaten ("there's for
 * thee, and there, and there"), and swords are drawn; none of it is drawn
 * here. The panel shows the moment after, when the lady has stopped it.
 *
 * The people are cut from ./people.tsx; nothing is taken from a film,
 * television or stage production.
 *
 * Seeds: 1401 (sky). The house and the street carry their own (6301 to 6305).
 */

const W = 860
const H = 340
/** The foot of the house front, where the street begins. */
const STREET = 252
const FEET = 330
const SEBASTIAN_X = 430
const OLIVIA_X = 548
/**
 * Where their hands meet: between Sebastian's wrist (his figure's [50, -110])
 * and Olivia's (her figure's [48, -110], flipped), both at scale 1.14 of the
 * kit's 0.92.
 *
 * WHY ONE CLASP (review of 2 October 2026). The two hands were first the
 * kit's closed hands at rest, meeting end to end with the paper halo between
 * them. At panel size they read as two fists touching, a moment after a
 * fight, and not as a hand taken. They are now one clasp, cut as the two
 * fathers' clasp in Romeo and Juliet's "A glooming peace", with the gaps
 * between the fingers and the curve of the thumb cut at carve weight so the
 * grip does not print as one black knot.
 */
const CLASP: [number, number] = [490, 214.6]
/** The three going off down the street, smaller for the distance. */
const BACK = 300

type Marks = { sky: string; shadows: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyBars(rng(1401), { x0: 0, x1: W, y0: 6, y1: STREET - 40 })
  const shadows =
    footShadow(SEBASTIAN_X, FEET, 30, -3) +
    footShadow(OLIVIA_X, FEET, 36, -3) +
    footShadow(70, BACK, 22, -2) +
    footShadow(150, BACK, 22, -2) +
    footShadow(232, BACK, 24, -2)
  cached = { sky, shadows }
  return cached
}

function MistakenForCesario({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [480, 220], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <OliviasHouse at={[680, STREET]} scale={0.86} gate="open" wall="left" />
      <Street top={STREET} bottom={H} width={W} vx={480} />
      <path d={m.shadows} fill={INK} />

      {/* Sir Andrew, Sir Toby and Fabian, sent packing down the street */}
      <Person
        at={[70, BACK]}
        scale={0.8}
        flip
        pose={{
          look: 'fabian',
          legs: {
            far: [
              [-3, -70],
              [6, -38],
              [12, -3],
            ],
            near: [
              [3, -70],
              [-6, -36],
              [-12, -3],
            ],
          },
        }}
      />
      <Person
        at={[150, BACK]}
        scale={0.8}
        flip
        pose={{
          look: 'sir-andrew',
          head: { rot: 8 },
          legs: {
            far: [
              [-3, -70],
              [8, -38],
              [14, -3],
            ],
            near: [
              [3, -70],
              [-4, -36],
              [-10, -3],
            ],
          },
        }}
      />
      <Person
        at={[232, BACK]}
        scale={0.8}
        flip
        pose={{
          look: 'sir-toby',
          sword: true,
          head: { rot: -4 },
          legs: {
            far: [
              [-3, -70],
              [6, -38],
              [12, -3],
            ],
            near: [
              [3, -70],
              [-6, -36],
              [-12, -3],
            ],
          },
        }}
      />

      {/* Sebastian, bewildered, his hand taken */}
      <Person
        at={[SEBASTIAN_X, FEET]}
        scale={1.14}
        pose={{
          look: 'sebastian',
          sword: true,
          cloak: 4,
          head: { rot: -4 },
          far: {
            pts: [
              [-4, -128],
              [-22, -116],
              [-32, -136],
            ],
            hand: 'open',
            deg: -112,
            size: 12.5,
            thumb: 1,
          },
          near: {
            pts: [
              [5, -128],
              [26, -112],
              [50, -110],
            ],
            hand: 'none',
          },
        }}
      />

      {/* Olivia, drawing him to her house */}
      <Person
        at={[OLIVIA_X, FEET]}
        scale={1.14}
        flip
        pose={{
          look: 'olivia',
          flush: true,
          head: { rot: 2 },
          far: {
            pts: [
              [-6, -124],
              [-22, -112],
              [-40, -118],
            ],
            hand: 'open',
            deg: 190,
            size: 12.5,
          },
          near: {
            pts: [
              [6, -124],
              [26, -110],
              [48, -110],
            ],
            hand: 'none',
          },
        }}
      />

      {/* their hands, one clasp: "Go with me to my house" */}
      <g transform={`translate(${CLASP[0]} ${CLASP[1]}) scale(1.05)`}>
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
    </g>
  )
}

export const mistakenForCesario: LinocutArt = { width: W, height: H, Draw: MistakenForCesario }
