import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Kneel } from './kneel'
import { cut, skyLines } from './light-cuts'
import { Person, type P } from './people'

/**
 * Act 5, Scene 1: "Caesar mourns his rival", the twenty-second moment in the
 * guide's timeline. Drawn from the scene in the held edition
 * (src/data/full-texts/antony-and-cleopatra.ts):
 *
 * - "Caesar's Camp before Alexandria." So the panel is the camp of "The
 *   treasure sent after him" (./the-treasure-sent-after-him.tsx), cut the
 *   same way: a pale sky, the camp's palisade, Caesar's standards, and the
 *   walls of Alexandria on the skyline to the left, where now the tall
 *   monument of the panel before (./monument.tsx) stands up among the towers,
 *   with Cleopatra shut in it ("The queen, my mistress, Confined in all she
 *   has, her monument").
 * - "Enter Caesar, Agrippa, Dolabella, Maecenas, Gallus, Proculeius with his
 *   council of war." Dolabella is sent off at once ("Go to him, Dolabella"),
 *   so he is not here. Agrippa, a soldier in the cuirass, and Maecenas, in a
 *   toga with his hair swept back to a lock (the kit's marks for them,
 *   ./people.tsx), stand with Caesar; Gallus and Proculeius are left out, to
 *   keep the panel to the men who speak.
 * - Dercetus: "I am called Dercetus. Mark Antony I served ... If thou please
 *   To take me to thee, as I was to him I'll be to Caesar; if thou pleasest
 *   not, I yield thee up my life." So he kneels before Caesar, bareheaded,
 *   with his hands held out open and empty (./kneel.tsx).
 * - "Caesar is touched." "When such a spacious mirror's set before him, He
 *   needs must see himself." (Agrippa and Maecenas.) So young Caesar ("the
 *   boy Caesar", 3.13), in his cuirass and general's cloak, bows his head
 *   with his hand flat on his breast, and his two friends watch him, Agrippa
 *   holding an open hand towards him. The text does not show him weep, so no
 *   tear is drawn.
 *
 * WHAT IS LEFT OUT, AND WHY. Dercetus enters "with the sword of Antony", the
 * sword Antony fell on, "stained With his most noble blood". This play's rule
 * (./people.tsx) is that no death by a character's own hand is suggested by
 * its method, so the sword is not drawn: Dercetus kneels with empty hands, as
 * he does when he yields up his life, and the quotation is Caesar's lament
 * for his "brother" and "competitor", not the line about the wound or any
 * line that names the death.
 *
 * RED is the camp's two standards, flags big enough to stay flags at phone
 * width, far from any face or hand. Nothing is taken from a film or stage
 * production. Seeds: 2201 (the ground), 2202 (the sky).
 *
 * REDRAWN, 9 October 2026: the first cut had the camp and no one in it, under
 * a sky cut so dark it read as night.
 */

const W = 860
const H = 340
/** The far edge of the plain, as in the camp of moment 16. */
const HORIZON = 254
/** Where everyone stands. */
const FOOT = 328

/**
 * Alexandria on the skyline to the left: the wall and its towers, and the
 * monument, the tallest thing in the city, its cornice and parapet as the
 * panel before cuts them.
 */
const CITY =
  'M-6 254L-6 232L16 232L16 218L36 218L36 232L82 232L82 224L92 224L92 232L104 232L104 214L126 214L126 232L198 232L198 222L212 222L212 232L246 232L246 218L266 218L266 232L300 232L300 254Z'
const MONUMENT = 'M134 232L139 150L136 150L136 141L178 141L178 150L175 150L180 232Z'

/** The camp's palisade along the far edge of the plain: a fence of stakes. */
const PALISADE = (() => {
  let d = ''
  for (let x = 304; x < W; x += 7) {
    const h = 9 + ((x * 7) % 5)
    d += `M${x} ${HORIZON}V${HORIZON - h}`
  }
  return d
})()

/** Caesar's tent at the right: a ridge tent seen end on, the largest in the camp. */
const TENT = 'M640 316L664 168L760 120L856 168L870 316Z'
const TENT_SEAMS = 'M712 144L700 316M808 144L818 316M664 168L856 168M760 120L760 160'
/** The dark doorway, its flaps drawn back and tied. */
const DOOR = 'M716 316L728 196Q760 178 792 196L804 316Z'
const FLAPS = 'M716 316L728 196L704 258ZM804 316L792 196L816 258Z'

type Marks = { sky: string; ground: string; shade: string; tent: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(2201)
  const sky = skyLines(2202, { x0: 0, x1: W, y0: 0, y1: HORIZON - 4 }, (_x, y) => 0.5 - y / 380)
  // The trodden ground of the camp, as moment 16 cuts it: paper, scored in
  // ink in short broken strokes and tufts, more heavily towards the front.
  let ground = ''
  for (let y = HORIZON + 3; y < H; ) {
    const t = (y - HORIZON) / (H - HORIZON)
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 4, 16) * (0.8 + t * 0.8)
      if (r() < 0.3 + t * 0.5) ground += cut(x, y, len, 0.5 + t * 1.3, between(r, -1.4, 1.4))
      if (r() < 0.05 + t * 0.06) {
        const tx = x + len / 2
        ground +=
          gouge(tx, y + 1, tx - 2.4, y - 5 - t * 4, 0.7) +
          gouge(tx + 1, y + 1, tx + 3.2, y - 4 - t * 4, 0.7)
      }
      x += len + between(r, 6, 26) * (1.3 - t * 0.6)
    }
    y += 3.4 + t * 2.4
  }
  // The shadows on the ground under each of them, cut as rows of ink.
  let shade = ''
  const pools: [number, number, number, number][] = [
    [256, 330, 48, 4],
    [366, 330, 36, 4],
    [500, 328, 30, 4],
    [592, 328, 36, 4],
    [756, 320, 112, 4],
  ]
  for (const [cx, cy, half, rows] of pools)
    for (let k = 0; k < rows; k++) {
      const w = half * (1 - k / (rows + 1))
      shade += cut(cx - w, cy + k * 2.4 - 3, w * 2, 1.1, between(r, -0.4, 0.4))
    }
  // The shaded side of the tent: its canvas hatched in ink.
  let tent = ''
  for (let x = 812; x < 866; x += 5) {
    const top = 168 + (x - 812) * 0.4
    tent += gouge(x, top + 4, x + (x - 812) * 0.06, 312, 0.7 + (x - 812) / 80)
  }
  cached = { sky, ground, shade, tent }
  return cached
}

/** A standard of Caesar's, as moment 16 cuts it: a pole, a crossbar and a square flag in the spot colour. */
function Standard({ x, top, foot }: { x: number; top: number; foot: number }) {
  const flag = `M${x - 19} ${top + 11}H${x + 19}V${top + 44}L${x + 12.7} ${top + 39}L${x + 6.3} ${top + 45}L${x} ${top + 39}L${x - 6.3} ${top + 45}L${x - 12.7} ${top + 39}L${x - 19} ${top + 45}Z`
  return (
    <g>
      <path d={`M${x} ${foot}V${top}`} stroke={PAPER} strokeWidth={6.4} strokeLinecap="round" />
      <path d={`M${x} ${foot}V${top}`} stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
      <path d={`M${x - 21} ${top + 10}H${x + 21}`} stroke={INK} strokeWidth={3} />
      <path d={flag} fill={RED} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
      <path d={`M${x - 3} ${top - 1}L${x} ${top - 9}L${x + 3} ${top - 1}Z`} fill={INK} />
    </g>
  )
}

/** Where Caesar stands, and his size. */
const CAESAR: { at: P; s: number } = { at: [384, FOOT], s: 1.06 }

function CaesarMournsHisRival({ uid }: ArtProps) {
  const m = marks()
  return (
    <g className="lc-push" style={timing({ origin: [380, 210], push: 1.03 })}>
      <rect x={0} y={0} width={W} height={H} fill={PAPER} />
      <path d={m.sky} fill={INK} />

      {/* Alexandria on the skyline, the monument standing up among its towers */}
      <path d={CITY + MONUMENT} fill={INK} />
      <path
        d={
          gouge(4, 244, 96, 244, 0.7) +
          gouge(190, 244, 290, 244, 0.7) +
          gouge(140, 146, 174, 146, 0.8) +
          gouge(138, 158, 176, 158, 0.6)
        }
        fill={PAPER}
      />
      <path d={PALISADE} stroke={INK} strokeWidth={2.2} />
      <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.6} />

      {/* the camp ground, and the shadows on it */}
      <path d={m.ground} fill={INK} />
      <path d={m.shade} fill={INK} />

      {/* Caesar's standards over the camp */}
      <Standard x={446} top={30} foot={300} />
      <Standard x={810} top={22} foot={296} />

      {/* Caesar's tent */}
      <path d={TENT} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} strokeLinejoin="round" />
      <path d={m.tent} fill={INK} />
      <path d={TENT_SEAMS} fill="none" stroke={INK} strokeWidth={1.6} />
      <path d={DOOR} fill={INK} />
      <path d={FLAPS} fill={PAPER} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
      <path d="M760 116V106" stroke={INK} strokeWidth={4} />

      {/* Dercetus, Antony's man, kneeling with his hands held out, open and empty */}
      <Kneel
        uid={uid}
        id="dercetus"
        at={[234, FOOT]}
        scale={1.02}
        lean={-4}
        pose={{
          look: 'soldier',
          bare: true,
          head: { rot: -12 },
          far: {
            pts: [
              [-3, -128],
              [12, -110],
              [30, -110],
            ],
            hand: 'open',
            deg: -8,
          },
          near: {
            pts: [
              [5, -128],
              [20, -108],
              [38, -106],
            ],
            hand: 'open',
            deg: -6,
          },
        }}
      />

      {/* Caesar, touched: his head bowed and his hand on his breast */}
      <Person
        pose={{
          look: 'caesar',
          head: { rot: 24 },
          eye: 'down',
          far: {
            pts: [
              [-4, -130],
              [-8, -104],
              [-6, -80],
            ],
            hand: 'mitt',
          },
          near: {
            pts: [
              [5, -128],
              [17, -98],
              [12, -112],
            ],
            hand: 'open',
            deg: -64,
            thumb: -1,
          },
        }}
        at={CAESAR.at}
        scale={CAESAR.s}
        flip
      />

      {/* Agrippa and Maecenas, watching him */}
      <Person
        pose={{
          look: 'agrippa',
          head: { rot: 6 },
          near: {
            pts: [
              [5, -128],
              [14, -104],
              [32, -96],
            ],
            hand: 'open',
            deg: -12,
            thumb: -1,
          },
        }}
        at={[506, FOOT - 1]}
        scale={1}
        flip
      />
      <Person pose={{ look: 'maecenas', head: { rot: 8 } }} at={[598, FOOT - 1]} scale={1} flip />
    </g>
  )
}

export const caesarMournsHisRival: LinocutArt = { width: W, height: H, Draw: CaesarMournsHisRival }
