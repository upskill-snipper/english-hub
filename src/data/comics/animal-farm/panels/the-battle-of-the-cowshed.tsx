import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Cut, HEAD_FRAME, Horse, Man, Pig, place, type P, type Part } from './people'

/**
 * Chapter 4: "The Battle of the Cowshed", the eleventh moment in the guide's
 * timeline, drawn at its end, when the battle is won and Boxer grieves. Every
 * detail is from the text (the held edition, src/data/full-texts/animal-farm.ts):
 *
 * - "Early in October, when the corn was cut and stacked". So it is day, the
 *   far field is stubble, and two corn-stacks stand in it.
 * - "the three horses, the three cows, and the rest of the pigs, who had been
 *   lying in ambush in the cowshed, suddenly emerged in their rear"; "it was
 *   named the Battle of the Cowshed, since that was where the ambush had been
 *   sprung". So the cowshed stands on the left with both its doors swung wide
 *   on the empty dark inside. "Jones was hurled into a pile of dung": the
 *   dung-heap is by its wall.
 * - "Jones and all his men ... had entered the five-barred gate and were
 *   coming up the cart-track"; "the men were glad enough to rush out of the
 *   yard and make a bolt for the main road ... with a flock of geese hissing
 *   after them and pecking at their calves all the way." So, far off through
 *   the open gate, four men run up the track, Jones bare-headed as the figure
 *   kit draws him and his men in caps, one looking back, with three geese
 *   stretched out at their heels.
 * - "'He is dead,' said Boxer sorrowfully. 'I had no intention of doing that.
 *   I forgot that I was wearing iron shoes.'"; "'I have no wish to take life,
 *   not even human life,' repeated Boxer, and his eyes were full of tears." So
 *   Boxer, the biggest animal on the farm, with his white stripe, stands with
 *   his head bowed low, and two tears, cut in paper, run from his eye.
 * - "'No sentimentality, comrade!' cried Snowball ... 'War is war.'" So
 *   Snowball, the pale pig of the kit, stands square to Boxer, his mouth open.
 *   "the blood was still dripping" from his wounds in the text; in the print
 *   he is unmarked. Wounds are the book's words, never the picture's.
 *
 * WHAT IS LEFT OUT, AND WHY. The stable-lad from Foxwood, who "lay face down
 * in the mud" while Boxer grieves, is not drawn: he is a boy, he is "only
 * stunned" but Boxer and the reader believe him dead, and a boy lying face
 * down in the mud would read as a body. Boxer's grief and his words carry
 * the moment without him. The battle itself is not drawn, and nor is Jones's
 * gun, "lying in the mud": a first version drew it in the foreground, where
 * at panel size it read as a spade, and the panel needs no weapon to be
 * understood. The sheep who was killed, and Mollie, who "was found hiding in
 * her stall", are not in the yard.
 *
 * NO SPOT COLOUR. The moment is Boxer's grief, and a red rim at his eye, tried
 * first, read at panel size as a cut on his face. Nothing else in the scene
 * is the text's to colour, so the panel is printed from the ink block alone,
 * as several of the pilot's panels are.
 *
 * Nothing is taken from a film or stage production. Seeds: 1110 (sky), 1111
 * (fields), 1112 (yard), 1113 (hoof marks).
 */

const W = 860
const H = 340
/** The line of the far fields. */
const FAR = (x: number) => 172 + 4 * Math.sin(x / 55) + 3 * Math.sin(x / 19 + 1)
/** Where the yard begins, below the gate and the hedge. */
const YARD = 212

type Marks = {
  sky: string
  fields: string
  yard: string
  prints: string
  ricks: string
  shedWall: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // A pale October sky, lightly scored in ink.
  const r = rng(1110)
  let sky = ''
  for (let y = 10; y < 168; y += 7) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 30, 110)
      if (r() < 0.34 - y / 800)
        sky += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.9 - y / 400)
      x += len + between(r, 20, 60)
    }
  }
  // The far fields, cut and stacked: pale stubble scored in fine lines.
  const fields = gougeField(
    rng(1111),
    { x0: 180, x1: W, y0: 176, y1: YARD },
    (_x, y) => 0.1 + ((y - 176) / (YARD - 176)) * 0.2,
    { spacing: 4.6, len: [18, 60], gap: [8, 20], max: 1.8 },
  )
  // The trampled yard: ink ground, cut lighter towards the gate where the
  // men ran, and darker in the foreground mud.
  const yard = gougeField(
    rng(1112),
    { x0: 0, x1: W, y0: YARD + 4, y1: H },
    (x, y) => clamp(0.75 - (y - YARD) / 190 - Math.abs(x - 420) / 1400),
    { spacing: 6, len: [20, 80], gap: [6, 18] },
  )
  // Hoof and trotter marks pressed into the mud.
  const rp = rng(1113)
  let prints = ''
  for (let i = 0; i < 40; i++) {
    const x = between(rp, 20, W - 20)
    const y = between(rp, YARD + 20, H - 8)
    const s = 0.6 + (y - YARD) / 160
    prints += `M${n(x - 4 * s)} ${n(y)}Q${n(x)} ${n(y - 3.4 * s)} ${n(x + 4 * s)} ${n(y)}Q${n(x)} ${n(y - 1.2 * s)} ${n(x - 4 * s)} ${n(y)}Z`
  }
  // Two stacks of corn in the far field: "when the corn was cut and stacked".
  let ricks = ''
  for (const [x, w, h] of [
    [800, 44, 32],
    [840, 34, 26],
  ]) {
    const y = FAR(x) + 6
    ricks += `M${x - w / 2} ${y}L${x - w / 2 + 3} ${y - h * 0.55}Q${x} ${y - h * 1.25} ${x + w / 2 - 3} ${y - h * 0.55}L${x + w / 2} ${y}Z`
  }
  // The cowshed's weatherboards, lit from the right, either side of its door.
  let shedWall = ''
  for (let y = 120; y < 250; y += 7) {
    shedWall += gouge(0, y, 44, y + 0.4, 0.5 + (y - 120) / 260)
    shedWall += gouge(168, y, 230, y + 0.4, 0.6 + (y - 120) / 160)
  }
  for (let y = 116; y < 146; y += 7) shedWall += gouge(20, y, 212, y + 0.4, 0.4 + (y - 116) / 90)
  cached = { sky, fields, yard, prints, ricks, shedWall }
  return cached
}

/** Where the figures stand. */
const BOXER: P = [668, 324]
const BOXER_S = 1.42
/** How far Boxer's head is bowed, in degrees about his withers. */
const BOWED = 32
const SNOWBALL: P = [292, 318]
/** The men in flight up the track, far off: x, y, cap, looking back. */
const MEN: [number, number, boolean, boolean][] = [
  [470, 178, true, false],
  [436, 181, false, false],
  [404, 184, true, true],
  [376, 187, true, false],
]
/** The geese hissing after them: x, y. */
const GEESE: P[] = [
  [352, 192],
  [320, 196],
  [336, 203],
]

/**
 * A goose at full stretch, neck out, hissing: paper, facing right, feet on
 * y = 0, about 26 long. Not described in the text beyond "a flock of geese".
 */
const GOOSE: Part[] = [
  { d: 'M-2 -4L-4 0M3 -4L6 0', w: 1.6 },
  {
    d: 'M-13 -8C-15 -13 -10 -15 -3 -15C3 -15 7 -14 9 -12L19 -16.4L21.4 -15.6L24 -15.4L21.6 -14L11 -9C9 -5 4 -3.4 -3 -3.4C-8 -3.4 -11.6 -5 -13 -8Z',
  },
  { d: 'M-12.6 -9L-18 -13L-12 -12Z' },
]

/** The pile of dung Jones was hurled into, by the cowshed wall. */
const DUNG = 'M176 252C179 242 188 237 197 239C205 234 216 236 220 243C226 244 231 248 232 254Z'

/**
 * Boxer's eyes "full of tears", in the frame of the kit's horse head, whose
 * eye is cut at about x 15 to 22.5, y 2 along the face, below the blaze. With
 * his head bowed the face points at the ground, so a tear falls along the
 * face, towards the muzzle: two drops cut in paper on the dark of his cheek,
 * clear of the paper blaze, the nearer one still at the eye. If the kit's eye
 * or blaze moves, move these with it: paper on the blaze does not show.
 *
 * No red on him. A spot-colour rim was tried at the eye and at panel size it
 * read as a cut on his face.
 */
const TEARS =
  'M22 6.6C25.4 4 29.8 4 31.4 6.8C29.8 9.6 25.4 9.6 22 6.6Z' +
  'M34.6 8C37 6.2 40 6.4 41 8.2C40 10 37 10 34.6 8Z'

/** The five-barred gate, standing open on the cart-track. */
function Gate() {
  const rails = [0, 1, 2, 3, 4].map((k) => 176 + k * 6.4)
  return (
    <g>
      <path d="M252 206V168M262 206V170" stroke={INK} strokeWidth={4} />
      <g stroke={INK} strokeWidth={2.6} fill="none">
        {rails.map((y) => (
          <path key={y} d={`M262 ${y}L${n(318)} ${n(y - 6)}`} />
        ))}
        <path d="M262 202L318 170M318 170V196" />
      </g>
    </g>
  )
}

function BattleOfTheCowshed(_props: ArtProps) {
  const m = marks()
  let far = `M0 ${YARD}L0 ${n(FAR(0))}`
  for (let x = 0; x <= W; x += 10) far += `L${x} ${n(FAR(x))}`
  far += `L${W} ${YARD}Z`
  return (
    <>
      <g className="lc-push" style={timing({ origin: [560, 220], push: 1.03 })}>
        <rect x={0} y={0} width={W} height={H} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={far} fill={PAPER} stroke={INK} strokeWidth={2} />
        <path d={m.fields} fill={INK} />
        <path d={m.ricks} fill={INK} />
        {/* the hedge along the lane, broken by the gateway */}
        <path
          d={`M180 ${YARD}C200 196 230 198 248 204L248 ${YARD}ZM322 ${YARD}L322 200C360 192 420 196 470 190C540 186 640 192 720 188C780 186 830 190 ${W} 188L${W} ${YARD}Z`}
          fill={INK}
        />
        {/* the cart-track, running out through the gate to the road */}
        <path
          d={`M252 ${YARD}C262 200 300 190 330 184C380 176 440 176 520 ${n(FAR(520) + 2)}`}
          fill="none"
          stroke={INK}
          strokeWidth={1.4}
        />
        <Gate />
        {/* the yard */}
        <rect x={0} y={YARD} width={W} height={H - YARD} fill={INK} />
        <path d={m.yard} fill={PAPER} />
        <path d={m.prints} fill={INK} />

        {/* the cowshed, its doors open where the ambush was sprung */}
        <path d="M-4 252V112L106 72L234 112V252Z" fill={INK} />
        <path d="M-6 113L106 72L236 113" fill="none" stroke={PAPER} strokeWidth={2.6} />
        <path d={m.shedWall} fill={PAPER} />
        {/* the doorway, dark inside, and its two leaves swung wide */}
        <rect x={46} y={150} width={88} height={102} fill={INK} stroke={PAPER} strokeWidth={2.4} />
        <path
          d="M46 150L14 158V258L46 252Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.8}
          strokeLinejoin="round"
        />
        <path
          d="M134 150L166 158V258L134 252Z"
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.8}
          strokeLinejoin="round"
        />
        <path
          d={
            gouge(24, 162, 24, 252, 0.8) +
            gouge(35, 158, 35, 250, 0.8) +
            gouge(145, 158, 145, 250, 0.8) +
            gouge(156, 162, 156, 252, 0.8)
          }
          fill={PAPER}
        />
        <path d="M14 206L46 202M134 202L166 206" stroke={PAPER} strokeWidth={1.4} />
        {/* the dung-heap by the wall */}
        <path d={DUNG} fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
        <path d={gouge(190, 244, 210, 242, 0.8) + gouge(184, 250, 224, 249, 0.8)} fill={PAPER} />

        {/* the men in flight up the track to the road, the geese at their heels */}
        {MEN.map(([x, y, cap, back]) => (
          <Man key={x} at={[x, y]} s={0.34} cap={cap} pose={back ? 'run-look-back' : 'run'} />
        ))}
        {GEESE.map(([x, y]) => (
          <Cut key={x} parts={GOOSE} tone="paper" halo={1.4} transform={place([x, y], 0.95)} />
        ))}

        {/* Snowball, turned to Boxer: "No sentimentality, comrade!" */}
        <Pig at={SNOWBALL} s={1.5} kind="snowball" mouthOpen />

        {/* Boxer, head bowed, his eye full of tears */}
        <Horse at={BOXER} s={BOXER_S} face={-1} who="boxer" headDown={BOWED} />
        <g transform={`${place(BOXER, BOXER_S, -1)} rotate(${BOWED} 40 -104) ${HEAD_FRAME}`}>
          <path d={TEARS} fill={PAPER} />
        </g>
      </g>
    </>
  )
}

export const battleOfTheCowshed: LinocutArt = { width: W, height: H, Draw: BattleOfTheCowshed }
