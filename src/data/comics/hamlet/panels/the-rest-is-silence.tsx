import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge, n, wedge, type Pt } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { H, HallBack, ROAD, Table, W, stoup } from './hall'
import { Person, hilt, type Pose } from './people'

/**
 * Act 5, Scene 2: "The rest is silence", the twenty-first and last moment in
 * the guide's timeline.
 *
 * SAFEGUARDING. The moment holds two deaths, Laertes's and Hamlet's, and
 * Horatio's wish to die with his friend ("I am more an antique Roman than a
 * Dane. Here's yet some liquor left"). The play's rule for it (./people.tsx)
 * is that Hamlet's end is Horatio at his side and Fortinbras arriving, not a
 * body on the floor, with no wound and no blood. So the panel draws the last
 * minute of Hamlet's life, before "[Dies.]": he is alive, sitting up and
 * speaking. The King, the Queen and Laertes lie in the hall ("give order that
 * these bodies / High on a stage be placed to the view"), and none of them is
 * drawn. Horatio's wish is carried only by the cup held out of his reach,
 * never by a hand reaching for it: his hand is on his friend's. The quotation
 * is Hamlet's last words. It was first "Give me the cup. Let go; by Heaven,
 * I'll have't.", which puts a friend's wish to take his own life into words
 * on the art; changed on review, 2 October 2026.
 *
 * Every detail is from the scene in the held edition
 * (src/data/full-texts/hamlet.ts, Project Gutenberg #1524):
 *
 * - The hall is ./hall.tsx's, the same room as "The readiness is all" and
 *   "The duel", minutes later: its great window, the day's light thrown
 *   across the flags, and the table where the King had the wine set ("Set me
 *   the stoups of wine upon that table").
 * - HORATIO: "Here's yet some liquor left." HAMLET: "As th'art a man, / Give
 *   me the cup. Let go; by Heaven, I'll have't." So Hamlet has the cup and
 *   holds it back behind him, away from his friend. It is the cup of "The
 *   duel" (./the-duel.tsx), cut the same and printed in the spot colour as
 *   there, well away from every mouth.
 * - "I am dead, Horatio"; "O good Horatio ... If thou didst ever hold me in
 *   thy heart, / Absent thee from felicity awhile ... To tell my story." So
 *   Hamlet, dying, has sunk onto a bench, slumped back, his head tipped up to
 *   Horatio and his mouth open to speak, and with his other hand he holds on
 *   to Horatio's. Horatio stoops over him, his head bowed, his hand laid over
 *   Hamlet's. The play does not say where Hamlet dies: the bench is plain
 *   furniture for a hall, there so that he sits up and does not lie on the
 *   floor.
 * - "[March afar off, and shot within.] What warlike noise is this?" OSRIC:
 *   "Young Fortinbras, with conquest come from Poland". HAMLET: "He has my
 *   dying voice." HORATIO: "Why does the drum come hither?" So through the
 *   window Fortinbras's army comes along the road towards the castle:
 *   Fortinbras at its head, the kit's young prince in his circlet,
 *   breastplate and cloak; then a drummer, his drum in the spot colour; then
 *   pikemen cut as "Fortinbras's army" (./fortinbrass-army.tsx) cuts them,
 *   with its red pennants. As the panel arrives the column drifts in from the
 *   right (lc-drift-r).
 * - "Give us the foils"; LAERTES: "The treacherous instrument is in thy hand,
 *   / Unbated and envenom'd." The fight is over, so the two foils lie dropped
 *   and crossed on the flags, in the light. No blood is on either.
 * - Hamlet ("my inky cloak") and Horatio ("a scholar") are the kit's
 *   (./people.tsx). Osric, who names Fortinbras, and the lords who "look pale
 *   and tremble" are left to the words, so that nothing stands between the
 *   two friends and the window.
 *
 * Nothing is taken from a film or stage production. Seeds: none of its own;
 * the hall's (2101 and 2102, in ./hall.tsx).
 */

// ── Fortinbras's column on the road, seen through the window ───────────────
//
// The pikemen are cut as the panel of "Fortinbras's army" cuts them
// (./fortinbrass-army.tsx): a round helmet with a narrow brim, a jerkin, the
// pike sloped back over the shoulder, and a red pennant on a few pikes. Each
// is drawn in his own frame, facing left (the way the column marches,
// towards the castle), his feet at (0, 0) and about 100 tall.

const pt = (p: Pt) => `${n(p[0])} ${n(p[1])}`
const line = (pts: Pt[]) => 'M' + pts.map(pt).join('L')

/** A marching man's legs in stride: the front leg forward (to the left), the back leg behind. */
function stride(k: number): string {
  const f = 9 + 3 * k
  const b = 8 - 2 * k
  return (
    line([
      [0, -42],
      [-f * 0.55, -22],
      [-f, -2],
    ]) +
    line([
      [1, -42],
      [b * 0.4, -21],
      [b, -2],
    ])
  )
}
/** Shoes for those legs, toes to the left. */
function shoes(k: number): string {
  const f = 9 + 3 * k
  const b = 8 - 2 * k
  const shoe = (x: number) =>
    `M${n(x + 3)} -4.6L${n(x - 6.4)} -3.6C${n(x - 9)} -3.2 ${n(x - 9)} 0.6 ${n(x - 6)} 0.6L${n(x + 3.4)} 0.6Z`
  return shoe(-f) + shoe(b)
}

/** The round helmet with its narrow brim, over a head in profile facing left. */
const HELM = 'M9 -88C8 -97 2 -101 -2 -101C-7 -101 -12 -97 -12 -88C-8 -90 5 -90 9 -88Z'
const HEAD =
  'M5.6 -88C6.4 -83 5.6 -79 3 -77L-3 -77L-4.6 -79.4L-6.6 -80.6L-5 -82.4L-6.4 -86.4L-5.8 -88Z'
/** A jerkin to the hip. */
const JERKIN = 'M8 -78C11 -66 11 -52 9 -40L-10 -40C-11 -54 -10 -66 -7 -78C-3 -81 4 -81 8 -78Z'
/** The drum slung at the drummer's hip, and the cords laced round it. */
const DRUM = 'M-20 -54L-2 -54L-2 -32L-20 -32Z'
const DRUM_CORDS = 'M-19 -52L-15.5 -34L-12 -52L-8.5 -34L-5 -52L-3 -40'

type Man = { x: number; k: number; drum?: boolean }
/** The column behind Fortinbras, from the drummer back to where the jamb hides the rest. */
const MEN: Man[] = [
  { x: 667, k: -1, drum: true },
  { x: 695, k: 1 },
  { x: 716, k: -1 },
  { x: 739, k: 1 },
  { x: 760, k: -1 },
  { x: 783, k: 1 },
  { x: 804, k: -1 },
]
const MAN_S = 0.55
/** Where a man's feet are on the hall's road: alternate ranks a little apart. */
const footOf = (x: number, k = 1): Pt => [x, ROAD - (k < 0 ? 1.4 : 0)]

/** The pikes, in the panel's frame: from below each pikeman's hand up past his helmet, leaning back. */
const PIKE_TIPS: Pt[] = []
const PIKES = MEN.filter((m) => !m.drum)
  .map(({ x, k }, i) => {
    const [fx, fy] = footOf(x, k)
    const x0 = fx - 3 * MAN_S
    const y0 = fy - 30 * MAN_S
    const x1 = fx + (14 + (i % 2) * 3) * MAN_S
    const y1 = fy - (196 - (i % 3) * 6) * MAN_S
    PIKE_TIPS.push([x1, y1])
    return `M${n(x0)} ${n(y0)}L${n(x1)} ${n(y1)}`
  })
  .join('')
const PIKE_HEADS = PIKE_TIPS.map(
  ([x, y]) => `M${n(x + 0.6)} ${n(y - 7)}L${n(x + 2)} ${n(y + 1)}L${n(x - 1.4)} ${n(y + 1)}Z`,
).join('')
const PENNANTS = [PIKE_TIPS[0], PIKE_TIPS[3]]
  .map(
    ([x, y]) =>
      `M${n(x)} ${n(y + 3)}L${n(x + 20)} ${n(y + 6)}L${n(x + 13)} ${n(y + 8.6)}L${n(x + 18)} ${n(y + 12)}L${n(x - 0.4)} ${n(y + 12.4)}Z`,
  )
  .join('')

/**
 * Fortinbras at the head of his army, from the kit: the youth's head in a
 * prince's circlet, a breastplate, a cloak and a rapier, striding. Facing
 * right in the kit's frame, turned to face left.
 */
const FORTINBRAS: Pose = {
  look: 'fortinbras',
  sword: true,
  cloak: 12,
  legs: {
    far: [
      [-3, -70],
      [-12, -37],
      [-20, -3],
    ],
    near: [
      [3, -70],
      [14, -38],
      [22, -3],
    ],
  },
  far: {
    pts: [
      [-4, -128],
      [-12, -104],
      [-12, -80],
    ],
  },
  near: {
    pts: [
      [5, -128],
      [16, -106],
      [26, -92],
    ],
  },
}

function Column() {
  return (
    <g className="lc-drift-r" style={timing({ delay: 0.3 })}>
      <Person pose={FORTINBRAS} at={footOf(636)} scale={0.32} flip />
      {MEN.map(({ x, k, drum }) => {
        const [fx, fy] = footOf(x, k)
        return (
          <g key={x} transform={`translate(${n(fx)} ${n(fy)}) scale(${MAN_S})`}>
            <path
              d={
                stride(k) +
                line([
                  [-1, -74],
                  [-7, -60],
                  [-3, -52],
                ])
              }
              fill="none"
              stroke={INK}
              strokeWidth={6.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d={HELM + HEAD + JERKIN + shoes(k)} fill={INK} />
            <path d={gouge(-9.6, -44, 9, -44, 1.3)} fill={PAPER} />
            {drum && (
              <>
                <path d={DRUM} fill={RED} stroke={INK} strokeWidth={2.4} strokeLinejoin="round" />
                <path d={DRUM_CORDS} fill="none" stroke={PAPER} strokeWidth={1.4} />
                <path d="M-6 -66L-14 -84" stroke={INK} strokeWidth={2.6} strokeLinecap="round" />
              </>
            )}
          </g>
        )
      })}
      <path d={PIKES} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <path d={PIKE_HEADS} fill={INK} />
      <path d={PENNANTS} fill={RED} stroke={INK} strokeWidth={0.8} strokeLinejoin="round" />
    </g>
  )
}

// ── Hamlet and Horatio ──────────────────────────────────────────────────────

/** The floor under the two of them, and the scale they are cut at. */
const GROUND = 322
const S = 1.34
/** Where Hamlet's figure stands (its feet) and Horatio's. */
const HAMLET_AT: Pt = [292, GROUND]
const HORATIO_AT: Pt = [382, GROUND]
/** The bench's seat, in Hamlet's frame: he sits on it. */
const SEAT = 48

/**
 * Hamlet on the bench, slumped back, his head tipped back to look up at
 * Horatio, his mouth open to speak. His near hand holds on to Horatio's; his
 * far hand holds the cup back behind him, out of his friend's reach.
 */
const HAMLET: Pose = {
  look: 'hamlet',
  body: { neck: [-16, -106], hip: [0, -SEAT] },
  head: { at: [-14, -127], rot: -22 },
  legs: {
    far: [
      [-2, -SEAT],
      [34, -SEAT + 2],
      [44, -3],
    ],
    near: [
      [2, -SEAT],
      [34, -SEAT - 2],
      [34, -3],
    ],
  },
  far: {
    pts: [
      [-20, -98],
      [-38, -88],
      [-54, -92],
    ],
    hand: 'grip',
    deg: 186,
  },
  near: {
    pts: [
      [-11, -98],
      [6, -76],
      [26, -80],
    ],
    hand: 'grip',
    deg: -12,
  },
  eye: 'open',
  mouth: 'open',
}

/**
 * The folds of his cloak where it hangs behind him over the bench, in his
 * frame: the kit cuts a cloak's folds only where it hangs from a standing
 * man's shoulders, so a seated man's are cut here, in the same place on the
 * cloak (the kit's cloakCuts, moved with his neck).
 */
const CLOAK_FOLDS = gouge(-28, -96, -36, -8, 1.8, 1) + gouge(-20, -94, -26, -10, 1.6, 0.6)

/**
 * The poisoned cup, in Hamlet's frame, cut as "The duel" (./the-duel.tsx)
 * cuts it, so it is the same cup: a goblet held by its stem in his far fist,
 * its bowl above the fist and its foot below it, with the light on its rim cut
 * in paper. Only the wine in the bowl is the spot colour; the foot is paper,
 * as in "The duel", because a red foot under a fist reads as a drop falling
 * from the hand.
 */
const CUP_X = -60
const CUP_TOP = -107.6
const CUP_BOWL =
  `M${CUP_X - 5.2} ${CUP_TOP}C${CUP_X - 5.6} ${CUP_TOP + 6.2} ${CUP_X - 3.2} ${CUP_TOP + 9} ${CUP_X} ${CUP_TOP + 9.4}` +
  `C${CUP_X + 3.2} ${CUP_TOP + 9} ${CUP_X + 5.6} ${CUP_TOP + 6.2} ${CUP_X + 5.2} ${CUP_TOP}Z`
const CUP_FOOT = `M${CUP_X - 4} ${CUP_TOP + 23.2}L${CUP_X + 4} ${CUP_TOP + 23.2}L${CUP_X + 1.4} ${CUP_TOP + 20.8}L${CUP_X - 1.4} ${CUP_TOP + 20.8}Z`

function Cup() {
  return (
    <g>
      <path d={CUP_BOWL} fill={RED} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={CUP_FOOT} fill={PAPER} stroke={INK} strokeWidth={1.2} strokeLinejoin="round" />
      <path d={`M${CUP_X - 3.8} ${CUP_TOP + 2.2}H${CUP_X + 3.8}`} stroke={PAPER} strokeWidth={1} />
    </g>
  )
}

/**
 * Horatio, standing over him and stooping, his head bowed to Hamlet's face,
 * his near hand laid over the hand Hamlet holds out to him. Facing right in
 * the kit's frame, turned to face left.
 */
const HORATIO: Pose = {
  look: 'horatio',
  body: { neck: [14, -132], hip: [2, -70] },
  head: { at: [19, -154], rot: 30 },
  near: {
    pts: [
      [18, -124],
      [32, -104],
      [38, -86],
    ],
    hand: 'open',
    deg: 30,
    thumb: -1,
  },
  eye: 'down',
  brow: 'sorrow',
}

/** A plain bench of boards, under Hamlet, in the panel's frame. */
const BENCH_TOP = GROUND - SEAT * S
const BX = HAMLET_AT[0]
const BENCH =
  `M${BX - 64} ${n(BENCH_TOP)}H${BX + 40}V${n(BENCH_TOP + 7)}H${BX - 64}Z` +
  `M${BX - 58} ${n(BENCH_TOP + 7)}H${BX - 49}V${GROUND}H${BX - 58}Z` +
  `M${BX + 25} ${n(BENCH_TOP + 7)}H${BX + 34}V${GROUND}H${BX + 25}Z`

// ── The foils ──────────────────────────────────────────────────────────────

/**
 * The two foils, dropped, lying crossed on the flags in the light: each a
 * long blade tapering to its point, and the kit's hilt.
 */
const FOIL_A: [Pt, Pt] = [
  [522, 316],
  [684, 295],
]
const FOIL_B: [Pt, Pt] = [
  [700, 320],
  [546, 297],
]
const foil = ([h, t]: [Pt, Pt]) => {
  const a = (Math.atan2(t[1] - h[1], t[0] - h[0]) * 180) / Math.PI
  const r = (a * Math.PI) / 180
  const from: Pt = [h[0] + Math.cos(r) * 5, h[1] + Math.sin(r) * 5]
  return wedge(from[0], from[1], t[0], t[1], 3.4, 0.6) + hilt(h, a)
}
const FOILS = foil(FOIL_A) + foil(FOIL_B)
/** The light along each blade, cut in paper. */
const FOIL_GLINTS = gouge(536, 313.4, 640, 299.6, 0.45) + gouge(686, 317.4, 592, 302.8, 0.45)
/** Their shadows on the flags, a little below them. */
const FOIL_SHADOWS = gouge(530, 320, 686, 299, 1.2) + gouge(694, 324, 550, 301, 1.2)

function TheRestIsSilence({ uid }: ArtProps) {
  return (
    <g className="lc-push" style={timing({ origin: [430, 210], push: 1.03 })}>
      <HallBack uid={uid}>
        <Column />
      </HallBack>

      {/* "Set me the stoups of wine upon that table": the table, as in "The duel" */}
      <Table />
      <path
        d={stoup(52) + stoup(92, 30)}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />

      {/* the foils, dropped in the light */}
      <path d={FOIL_SHADOWS} fill={INK} />
      <path d={FOILS} fill={INK} stroke={INK} strokeWidth={0.6} strokeLinejoin="round" />
      <path d={FOIL_GLINTS} fill={PAPER} />

      {/* the bench, and Hamlet on it; Horatio bending over him */}
      <path d={BENCH} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <Person pose={HAMLET} at={HAMLET_AT} scale={S}>
        <path d={CLOAK_FOLDS} fill={PAPER} />
        <Cup />
      </Person>
      <Person pose={HORATIO} at={HORATIO_AT} scale={S} flip />
    </g>
  )
}

export const theRestIsSilence: LinocutArt = { width: W, height: H, Draw: TheRestIsSilence }
