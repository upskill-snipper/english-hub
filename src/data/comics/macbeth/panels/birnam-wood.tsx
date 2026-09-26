import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, ribbon, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  ARMS,
  AXE,
  Bearer,
  boughCrown,
  canopy,
  engravedSky,
  fieldMarks,
  MailPattern,
  Warrior,
} from './dunsinane-kit'

/**
 * Act 5, Scene 4: "Birnam Wood", the twenty-first moment in the guide's
 * timeline. Every detail is from the scene:
 *
 * - "Drum and colours. Enter Malcolm, Siward, Macduff, Siward's son, Menteith,
 *   Caithness, Angus, and Soldiers, marching." So the army carries its
 *   colours, and the spot colour is on the banner: the cause that has come to
 *   end the tyranny.
 * - "What wood is this before us?" "The Wood of Birnam." "Let every soldier
 *   hew him down a bough / And bear 't before him. Thereby shall we shadow /
 *   The numbers of our host and make discovery / Err in report of us." So on
 *   the left is the wood, and a soldier at its edge hews down a bough; in
 *   front, Malcolm points to the trees as he gives the order, with Macduff and
 *   old Siward beside him; and across the middle the soldiers march off, each
 *   hidden behind the bough he carries, a wood that walks.
 * - Macbeth "Keeps still in Dunsinane" (5.4), and in the next scene the wood
 *   is seen from its hill. So Dunsinane stands on a hill far off on the right,
 *   where the boughs are going.
 *
 * Nobody's looks are described except that Siward is old ("Old Siward", 5.8),
 * so he has a long beard; Malcolm is Duncan's young son, so he is beardless
 * and bareheaded; the soldiers wear the plain mail and conical helms of the
 * eleventh century. Nothing is taken from a film or stage production. Seeds:
 * 2101 (sky), 2102 (field), 2110 (bark), 2111 (the near crowns), 2112 (the
 * crowns behind), 2115 (the hewn bough), 2120 to 2124 (the carried boughs).
 */

const W = 860
const H = 340
const HORIZON = 222

/** The castle on its hill, far off to the right. */
const HILL =
  'M540 222C590 214 640 204 676 192C706 182 730 166 760 162C788 158 812 162 836 172C848 177 858 184 872 190V230H540Z'
const CASTLE =
  'M774 166V142H780V136H784V142H788V136H792V142H796V148H806V130H812V124H816V130H820V124H824V130H828V148H832V142H836V136H840V142H844V168Z'

/** The dark mass of the wood behind its nearest trees. */
const WOOD_BACK =
  'M-6 150C20 132 58 142 88 130C118 120 150 138 178 132C200 128 222 140 238 152L244 266C160 280 70 282 -6 278Z'
/** The leaves of the bough being hewn at the wood's edge. */
const HEWN_ROUNDS: [number, number, number][] = [
  [256, 108, 15],
  [270, 120, 12],
  [242, 116, 12],
]
/** The crowns of the trees behind the nearest ones, along the top of WOOD_BACK. */
const BACK_ROUNDS: [number, number, number][] = [
  [-4, 138, 30],
  [44, 128, 28],
  [92, 124, 30],
  [138, 130, 28],
  [186, 128, 28],
  [226, 142, 22],
]
/** The nearest trees: trunk foot x, foot y, width at the foot, crown centre. */
const TREES: { x: number; y: number; w: number; top: [number, number]; rounds: number[][] }[] = [
  {
    x: 30,
    y: 276,
    w: 20,
    top: [30, 66],
    rounds: [
      [8, 48, 34],
      [48, 40, 32],
      [28, 14, 30],
      [30, 82, 30],
    ],
  },
  {
    x: 104,
    y: 270,
    w: 16,
    top: [100, 44],
    rounds: [
      [84, 30, 30],
      [118, 26, 28],
      [100, 2, 26],
      [102, 62, 28],
    ],
  },
  {
    x: 164,
    y: 274,
    w: 18,
    top: [162, 74],
    rounds: [
      [146, 60, 30],
      [182, 56, 28],
      [162, 32, 28],
      [164, 92, 26],
    ],
  },
  {
    x: 216,
    y: 266,
    w: 14,
    top: [214, 102],
    rounds: [
      [200, 92, 26],
      [230, 90, 24],
      [214, 70, 24],
    ],
  },
]

/** The soldiers marching off behind their boughs, far to near: [x, y, scale]. */
const GROVE: [number, number, number][] = [
  [776, 268, 0.48],
  [724, 276, 0.56],
  [668, 286, 0.66],
  [586, 298, 0.76],
  [512, 308, 0.86],
]
const BANNER: [number, number, number] = [628, 290, 0.68]
/** The pennant on the staff, streaming back as he marches. */
const PENNANT = 'M-25 -336L24 -326L8 -318L26 -308L-25 -302Z'

type Marks = {
  sky: string
  hills: string
  field: string
  shade: string
  trunks: string
  bark: string
  crowns: { mass: string; cuts: string }
  back: { mass: string; cuts: string }
  hewn: { mass: string; cuts: string; stem: string }
  grove: { mass: string; cuts: string; stem: string }[]
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = engravedSky(rng(2101), { x0: 0, x1: W, y0: 0, y1: HORIZON - 20 }, (x, y) =>
    clamp(0.72 - y / 230),
  )
  let hills = ''
  for (let x = 530; x < W + 40; x += 3.4) hills += `M${n(x)} 156L${n(x - 30)} 232`
  const field = fieldMarks(rng(2102), { x0: 250, x1: W, y0: HORIZON + 4, y1: H - 4 }, 80)
  // the shade the wood throws on the field at its foot
  let shade = ''
  for (let y = 266; y < 300; y += 3.6) shade += gouge(-10, y, 290 - (y - 266) * 2.6, y + 1, 2.2)

  // Trunks, each a tapering stroke with a slight lean, and bark cut in paper
  // down the side towards the open field.
  const r = rng(2110)
  let trunks = ''
  let bark = ''
  for (const t of TREES) {
    const pts: [number, number][] = []
    for (let i = 0; i <= 6; i++) {
      const k = i / 6
      pts.push([
        t.x + (t.top[0] - t.x) * k + Math.sin(k * 3 + t.x) * 2,
        t.y + (t.top[1] + 20 - t.y) * k,
      ])
    }
    trunks += ribbon(pts, t.w, 0.35, false)
    for (let k = 0; k < 5; k++) {
      const y = t.y - 24 - k * 28 + between(r, -6, 6)
      bark += gouge(t.x + t.w * 0.18, y, t.x + t.w * 0.14, y - between(r, 12, 20), 0.8)
    }
  }
  const crowns = canopy(
    rng(2111),
    TREES.flatMap((t) => t.rounds as [number, number, number][]),
    (x, y) => clamp((x - 60) / 200 - y / 300 + 0.35),
    10,
    6,
  )
  // the crowns of the trees behind, merging into the dark of the wood
  const back = canopy(rng(2112), BACK_ROUNDS, (x) => clamp((x - 120) / 160), 5, 4)
  // the bough being hewn: a stem from the edge tree, and a crown of leaves
  // cut like the carried ones
  const hewnLeaves = canopy(rng(2115), HEWN_ROUNDS, () => 0.5, 5, 5)
  const hewn = {
    ...hewnLeaves,
    stem: ribbon(
      [
        [212, 150],
        [228, 140],
        [244, 128],
        [256, 118],
      ],
      6,
      0.4,
      false,
    ),
  }
  const grove = GROVE.map((_, i) => boughCrown(2120 + i))
  cached = { sky, hills, field, shade, trunks, bark, crowns, back, hewn, grove }
  return cached
}

function BirnamWood({ uid }: ArtProps) {
  const m = marks()
  const id = { hill: `${uid}-hill` }
  const [bx, by, bs] = BANNER
  return (
    <>
      <defs>
        <MailPattern uid={uid} />
        <clipPath id={id.hill}>
          <path d={HILL} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [360, 170], push: 1.03 })}>
        {/* the sky, pale towards the horizon */}
        <rect x={0} y={0} width={W} height={HORIZON + 2} fill={PAPER} />
        <path d={m.sky} fill={INK} />

        {/* Dunsinane on its hill, far off, where the boughs are going */}
        <path d={HILL} fill={PAPER} />
        <g clipPath={`url(#${id.hill})`}>
          <path d={m.hills} stroke={INK} strokeWidth={LINE.hairline} />
        </g>
        <path d={HILL} fill="none" stroke={INK} strokeWidth={1.6} />
        <path d={CASTLE} fill={INK} />
        <path d="M814 136V144M792 150V158M838 150V158" stroke={PAPER} strokeWidth={1.4} />

        {/* the field */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={`M240 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.4} />
        <path d={m.field} fill={INK} />
        <path d={m.shade} fill={INK} />

        {/* Birnam Wood: the dark behind, the nearest trees, their crowns */}
        <path d={m.back.mass} fill={INK} />
        <path d={WOOD_BACK} fill={INK} />
        <path d={m.back.cuts} fill={PAPER} />
        <path d={m.trunks} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} paintOrder="stroke" />
        <path d={m.bark} fill={PAPER} />
        <path d={m.crowns.mass} fill={INK} stroke={PAPER} strokeWidth={2.4} paintOrder="stroke" />
        <path d={m.crowns.cuts} fill={PAPER} />

        {/* a soldier at the wood's edge hews down a bough */}
        <g fill={INK} stroke={PAPER} strokeWidth={3} paintOrder="stroke">
          <path d={m.hewn.stem} />
          <path d={m.hewn.mass} />
        </g>
        <path d={m.hewn.cuts} fill={PAPER} />
        <Warrior
          uid={uid}
          at={[272, 296]}
          scale={0.76}
          look={{ head: 'beard', wear: 'helm', mail: false }}
          arms={ARMS.hew}
          held={<path d={AXE} fill={INK} stroke={PAPER} strokeWidth={1.6} paintOrder="stroke" />}
        />

        {/* the soldiers march off behind their boughs: a wood that walks */}
        <g className="lc-drift" style={timing({ delay: 0.3 })}>
          {GROVE.slice(0, 3).map(([x, y, s], i) => (
            <Bearer key={x} at={[x, y]} scale={s} flip crown={m.grove[i]} />
          ))}
          <Warrior
            uid={uid}
            at={[bx, by]}
            scale={bs}
            flip
            look={{ head: 'beard', wear: 'helm', mail: false }}
            arms={ARMS.aloft}
            held={
              <>
                <path d="M-25 -150V-340" stroke={PAPER} strokeWidth={6} />
                <path d="M-25 -150V-340" stroke={INK} strokeWidth={3.4} />
                <path d={PENNANT} fill={RED} />
              </>
            }
          />
          {GROVE.slice(3).map(([x, y, s], i) => (
            <Bearer key={x} at={[x, y]} scale={s} flip crown={m.grove[i + 3]} />
          ))}
        </g>

        {/* Malcolm gives the order; Macduff and old Siward beside him */}
        <Warrior
          uid={uid}
          at={[440, 312]}
          scale={0.86}
          look={{ head: 'old', wear: 'helm', cloak: true }}
          arms={ARMS.down}
        />
        <Warrior
          uid={uid}
          at={[394, 322]}
          scale={0.92}
          look={{ head: 'beard', wear: 'helm', cloak: true, hilt: true }}
          arms={ARMS.down}
        />
        <Warrior
          uid={uid}
          at={[336, 334]}
          scale={1}
          look={{ head: 'young', wear: 'bare', cloak: true }}
          arms={ARMS.point}
        />
      </g>
    </>
  )
}

export const birnamWood: LinocutArt = { width: W, height: H, Draw: BirnamWood }
