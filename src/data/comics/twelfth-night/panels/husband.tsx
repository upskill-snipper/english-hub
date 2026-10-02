import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { footShadow, skyBars } from './act-3-garden'
import { OliviasHouse, Street } from './olivias-house'
import { Person } from './people'

/**
 * Act 5, Scene 1: "Husband", the seventeenth moment in the guide's timeline.
 * The street before Olivia's house (./olivias-house.tsx), by day. Every
 * detail is from the scene in the held edition (src/data/full-texts/
 * twelfth-night.ts, Project Gutenberg #1526):
 *
 * - Orsino has sworn to take Cesario away and "sacrifice the lamb that I do
 *   love", and calls "Come, boy, with me"; Viola goes "most jocund, apt, and
 *   willingly". Olivia: "Whither, my lord? Cesario, husband, stay." Orsino:
 *   "Husband?" ... "Her husband, sirrah?" Viola: "No, my lord, not I." So
 *   Orsino, on the left, has turned back on them, recoiling, one open hand
 *   held up at his chest in disbelief, his brow drawn down, his cloak
 *   swinging; Cesario, who was following him, faces him with both hands
 *   spread open and low, bewildered, "not I"; and Olivia, behind her,
 *   reaches out with both hands to stop her husband going, the kit's flush
 *   on her cheek. The threat is left in the words: Orsino's rapier stays in
 *   its scabbard. (A hand laid on Cesario's chest was tried for "not I", and
 *   at panel size it was lost in the black of the doublet.)
 * - "Call forth the holy father." [Exit an Attendant.] ... "Enter Priest. O,
 *   welcome, father!" So the Priest (the kit's 'priest', added for these
 *   panels) is coming out of Olivia's open gate, one open hand held out as
 *   he begins to speak, for he has come to swear to the contract "Confirmed
 *   by mutual joinder of your hands". He fades in after the others, as he
 *   enters after them.
 * - Antonio and the officers are "aside" at this point, and Sir Andrew and
 *   Sir Toby come in later "with broken heads"; none of them is drawn, so the
 *   panel holds one instant, and no hurt is shown.
 *
 * Viola is the kit's Cesario: her own face, her hair gathered under the
 * page's cap. Seeds: 6501 (the sky).
 *
 * WHY NO RED ON ORSINO (review of 2 October 2026). He was cut first with the
 * kit's `flush: 'anger'`, the Tempest kit's two strokes. Its lower stroke
 * lies level with the mouth, and on his dark face, just above the beard, the
 * pair read at a glance as red lips: red at the mouth of a man who has just
 * sworn to "sacrifice the lamb", which the site's rule forbids. The single
 * flush was tried next and sat in the same place, on top of the beard. So the
 * spot colour here is Olivia's alone, and his frown and recoil carry the
 * anger.
 */

const W = 860
const H = 340
/** The foot of the house front, where the street begins. */
const FOOT = 252
const FEET = 328
const GATE = 600
/** The orchard over the wall, placed so no dark crown stands behind a head. */
const TREES: [number, number, number, number][] = [
  [48, -150, 40, 34],
  [250, -154, 42, 36],
  [334, -140, 28, 24],
]

type Marks = { sky: string; shadows: string }
let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = skyBars(rng(6501), { x0: 0, x1: GATE - 270, y0: 4, y1: FOOT - 104 })
  const shadows =
    footShadow(166, FEET, 26, -3) + footShadow(330, FEET, 22, 3) + footShadow(478, FEET, 30, 3)
  cached = { sky, shadows }
  return cached
}

function Husband({ uid }: ArtProps) {
  void uid
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [430, 220], push: 1.03 })}>
      <rect width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />
      <OliviasHouse at={[GATE, FOOT]} scale={0.92} gate="open" wall="left" trees={TREES} />
      <Street top={FOOT + 10} bottom={H} width={W} vx={GATE} />
      <path d={`M0 ${FOOT + 10}H${W}`} stroke={INK} strokeWidth={2} />
      <path d={m.shadows} fill={INK} />

      {/* the Priest, come out of the gate on to the top step */}
      <g className="lc-fade-in" style={timing({ delay: 1.1, dur: 1 })}>
        <Person
          at={[GATE + 4, FOOT + 9]}
          scale={0.84}
          flip
          pose={{
            look: 'priest',
            head: { rot: 4 },
            near: {
              pts: [
                [4, -130],
                [14, -106],
                [32, -104],
              ],
              hand: 'open',
              deg: -18,
              thumb: -1,
            },
            far: {
              pts: [
                [-4, -130],
                [4, -106],
                [14, -96],
              ],
            },
          }}
        />
      </g>

      {/* Orsino, turned back on them: "Husband?" */}
      <Person
        at={[166, FEET]}
        scale={1.1}
        pose={{
          look: 'orsino',
          body: { neck: [-5, -137] },
          head: { rot: -5 },
          sword: true,
          cloak: 7,
          frown: true,
          legs: {
            far: [
              [-3, -70],
              [6, -36],
              [12, -3],
            ],
            near: [
              [3, -70],
              [-3, -36],
              [-12, -3],
            ],
          },
          far: {
            pts: [
              [-9, -131],
              [-16, -106],
              [-12, -82],
            ],
          },
          near: {
            pts: [
              [-2, -131],
              [18, -112],
              [32, -120],
            ],
            hand: 'open',
            deg: -58,
            thumb: -1,
          },
        }}
      />

      {/* Cesario, following him, turns to him: "No, my lord, not I." */}
      <Person
        at={[330, FEET]}
        scale={1.1}
        flip
        pose={{
          look: 'cesario',
          head: { rot: 3 },
          cloak: 5,
          legs: {
            far: [
              [-3, -70],
              [-8, -36],
              [-12, -3],
            ],
            near: [
              [3, -70],
              [9, -36],
              [12, -3],
            ],
          },
          far: {
            pts: [
              [-4, -129],
              [-13, -107],
              [-22, -93],
            ],
            hand: 'open',
            deg: 128,
            thumb: 1,
          },
          near: {
            pts: [
              [3, -129],
              [13, -106],
              [26, -94],
            ],
            hand: 'open',
            deg: 40,
            thumb: -1,
          },
        }}
      />

      {/* Olivia reaches after her: "Cesario, husband, stay." */}
      <Person
        at={[480, FEET]}
        scale={1.1}
        flip
        pose={{
          look: 'olivia',
          body: { neck: [7, -131] },
          head: { rot: 6 },
          flush: true,
          hem: { front: 30, back: 32 },
          far: {
            pts: [
              [3, -126],
              [20, -118],
              [38, -126],
            ],
            hand: 'open',
            deg: -16,
            thumb: -1,
          },
          near: {
            pts: [
              [9, -125],
              [26, -112],
              [46, -114],
            ],
            hand: 'open',
            deg: -6,
            thumb: -1,
          },
        }}
      />
    </g>
  )
}

export const husband: LinocutArt = { width: W, height: H, Draw: Husband }
