import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, gougeField, n, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { floe, type Floe } from './arctic-kit'
import {
  DOG,
  DOG_CUTS,
  DOG_FAR_LEGS,
  DOG_TAIL,
  Figure,
  FUR_CAP,
  FUR_CAP_CUTS,
  FUR_COLLAR,
  FUR_COLLAR_CUTS,
  GRIP_HAND,
  HEAD_SAILOR,
  HEAD_VICTOR,
  HEAD_WALTON,
  NECKCLOTH,
  OPEN_HAND,
  SAILOR_CUTS,
  SAILOR_HAT,
  SAILOR_HAT_BAND,
  VICTOR_CUTS,
  VICTOR_HAIR,
  VICTOR_HAIR_CUTS,
  VICTOR_PUPIL,
  WALTON_CUTS,
  furTrim,
  headAt,
  man,
  sledge,
  type P,
} from './people'

/**
 * Letter 4: "The stranger on the ice", the second moment in the guide's
 * timeline. The morning after the crew saw the first sledge, a second one has
 * drifted to the ship on a fragment of ice, and a man in it is asked aboard.
 * Every detail is from the letter:
 *
 * - "In the morning, however, as soon as it was light, I went upon deck, and
 *   found all the sailors busy on one side of the vessel, apparently talking to
 *   some one in the sea. It was, in fact, a sledge, like that we had seen
 *   before, which had drifted towards us in the night, on a large fragment of
 *   ice." So the ship's side is on the left, its crew at the rail, and the
 *   sledge sits on a large floe on dark water in the early light.
 * - "Only one dog remained alive; but there was a human being within it, whom
 *   the sailors were persuading to enter the vessel." So there is one dog,
 *   standing in its harness, and no other: the dead dogs are not drawn. The
 *   master leans out with his hand open to the stranger, and a rope hangs from
 *   the rail to the ice.
 * - "When I appeared on deck, the master said, 'Here is our captain'". So
 *   Walton stands at the rail beside him, in the fur cap and fur collar of
 *   every panel (./people.tsx).
 * - "On perceiving me, the stranger addressed me ... 'will you have the
 *   kindness to inform me whither you are bound?'" So the stranger's face is
 *   lifted to Walton, one hand raised a little, open.
 * - "His limbs were nearly frozen, and his body dreadfully emaciated by
 *   fatigue and suffering." So he is Victor of every panel, thin and hunched
 *   in the sledge, with rime cut white on his hair and shoulders.
 * - "we beheld, stretched out in every direction, vast and irregular plains
 *   of ice"; "before night the ice broke, and freed our ship"; "those large
 *   loose masses which float about after the breaking up of the ice". So the
 *   plain of ice runs to the horizon behind, broken at its near edge, with
 *   loose masses in the open water.
 *
 * Not in the text, and drawn plainly: the lantern one sailor holds out over
 * the side in the first light, whose flame is the only red, the warmth held
 * out to a man nearly frozen; and the ship, a plain vessel of the 1790s. The
 * crew wear the seaman's hat of ./people.tsx. Nothing is taken from a film or
 * stage production.
 * Seeds: 1601 (sky), 1602 (the ice plain), 1603 (water), 1604 (floes), 1605
 * (hull), 1606 (rime), 1607 (lantern light).
 */

const W = 860
const H = 340
/** The far edge of the ice plain, and its broken near edge on the water. */
const HZ = 150
const ICE_EDGE = 232

type Marks = {
  sky: string
  plain: string
  hummocks: string
  edge: string
  water: string
  floes: Floe[]
  raft: Floe
  hull: string
  rime: string
  glow: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // First light, low on the right: paper sky, ink streaks thickening up and to the left.
  const skyDark = (x: number, y: number) =>
    clamp(0.06 + 0.8 * (Math.hypot((x - 780) * 0.7, (y - HZ) * 1.3) / 700) ** 1.2)
  const sky = gougeField(rng(1601), { x0: 0, x1: W, y0: 8, y1: HZ - 3 }, skyDark, {
    spacing: 7,
    len: [20, 90],
    gap: [10, 40],
    max: 1.5,
  })
  // The plain of ice: paper, with ink ridges that thin towards the horizon.
  const plainDark = (_x: number, y: number) => clamp(0.08 + ((y - HZ) / (ICE_EDGE - HZ)) * 0.4)
  const plain = gougeField(rng(1602), { x0: 0, x1: W, y0: HZ + 5, y1: ICE_EDGE - 2 }, plainDark, {
    spacing: 5.4,
    len: [10, 50],
    gap: [8, 30],
    max: 1.2,
  })
  // "the distant inequalities of the ice": a broken line of hummocks on the horizon.
  const rh = rng(1602)
  let hummocks = `M0 ${HZ}`
  for (let x = 0; x <= W; x += between(rh, 8, 22)) {
    hummocks += `L${n(x)} ${n(HZ - between(rh, 0, 5))}L${n(x + between(rh, 3, 8))} ${n(HZ - between(rh, 3, 9))}`
  }
  hummocks += `L${W} ${HZ}L${W} ${HZ + 3}L0 ${HZ + 3}Z`
  // The plain's near edge, broken where the ice parted in the night.
  let edge = `M0 ${ICE_EDGE}`
  for (let x = 0; x <= W; x += between(rh, 14, 34)) {
    edge += `L${n(x)} ${n(ICE_EDGE + between(rh, -5, 4))}`
  }
  edge += `L${W} ${ICE_EDGE}L${W} ${H}L0 ${H}Z`
  const waterLight = (x: number, y: number) =>
    clamp(0.1 + 0.5 * Math.exp(-(((x - 780) / 160) ** 2)) * (1 - (y - ICE_EDGE) / 120))
  const water = gougeField(rng(1603), { x0: 0, x1: W, y0: ICE_EDGE + 4, y1: H }, waterLight, {
    spacing: 5,
    len: [8, 40],
    gap: [8, 20],
    max: 2.2,
  })
  const rf = rng(1604)
  const floes = [floe(rf, 452, 246, 34, 4.4), floe(rf, 812, 250, 40, 5), floe(rf, 540, 262, 24, 4)]
  const raft = floe(rf, 648, 296, 200, 20, 10)
  const rhull = rng(1605)
  let hull = ''
  for (let k = 0; k < 11; k++) {
    const y0 = 162 + k * 15
    let x = between(rhull, -30, 0)
    const end = 350 + k * 2
    while (x < end) {
      const x2 = Math.min(x + between(rhull, 60, 150), end)
      hull += gouge(x, y0 + x * 0.02, x2, y0 + x2 * 0.02, 1.4, between(rhull, -0.4, 0.4))
      x = x2 + between(rhull, 6, 16)
    }
  }
  // Rime on his hair and shoulders: small white flecks.
  const rr = rng(1606)
  let rime = ''
  for (let i = 0; i < 26; i++) {
    const x = between(rr, 648, 694)
    const y = between(rr, 178, 232)
    rime += gouge(x, y, x + between(rr, 1.4, 3), y + between(rr, -0.6, 0.6), 0.55)
  }
  const glow = rays(rng(1607), LANTERN[0], LANTERN[1] + 8, {
    from: 14,
    to: 40,
    every: 16,
    width: 1.6,
  })
  cached = { sky, plain, hummocks, edge, water, floes, raft, hull, rime, glow }
  return cached
}

/** Where the lantern hangs, out over the side. */
const LANTERN: P = [384, 112]

/** Walton, at the rail, looking down at the stranger. */
const WAL_HEAD = { d: HEAD_WALTON, at: [150, 70] as P, rot: 10, scale: 1.14 }
const WALTON = man({
  facing: 1,
  neck: [146, 104],
  hip: [142, 170],
  head: WAL_HEAD,
  hair: FUR_CAP,
  body: { width: 36, tails: 60, long: true },
  near: {
    arm: [
      [152, 112],
      [164, 132],
      [180, 142],
    ],
    leg: [],
    hand: { parts: GRIP_HAND },
  },
  far: { arm: [], leg: [] },
  arm: 9,
  feet: false,
})

/** The master, leaning out, his hand held open to the stranger. */
const MAS_HEAD = { d: HEAD_SAILOR, at: [262, 84] as P, rot: 18, scale: 1.08 }
const MASTER = man({
  facing: 1,
  neck: [254, 114],
  hip: [236, 172],
  head: MAS_HEAD,
  hair: SAILOR_HAT,
  body: { width: 32, tails: 30 },
  near: {
    arm: [
      [258, 120],
      [278, 128],
      [300, 124],
    ],
    leg: [],
    hand: { parts: OPEN_HAND, rot: -24 },
  },
  far: {
    arm: [
      [248, 122],
      [262, 140],
      [270, 148],
    ],
    leg: [],
    hand: { parts: GRIP_HAND },
  },
  arm: 8.5,
  feet: false,
})

/** A sailor at the bow, holding the lantern out over the side. */
const SAI_HEAD = { d: HEAD_SAILOR, at: [338, 78] as P, rot: 14, scale: 1.02 }
const SAILOR = man({
  facing: 1,
  neck: [330, 106],
  hip: [318, 166],
  head: SAI_HEAD,
  hair: SAILOR_HAT,
  body: { width: 30, tails: 28 },
  near: {
    arm: [
      [334, 112],
      [354, 110],
      [374, 100],
    ],
    leg: [],
    hand: { parts: GRIP_HAND, rot: -60 },
  },
  far: {
    arm: [
      [324, 114],
      [334, 134],
      [344, 144],
    ],
    leg: [],
    hand: { parts: GRIP_HAND },
  },
  arm: 8,
  feet: false,
})

/** The stranger in the sledge, hunched, his face lifted to the ship. */
const VIC_HEAD = { d: HEAD_VICTOR, at: [664, 200] as P, rot: 18, scale: 1.12 }
const VIC_ARM: P[] = [
  [664, 236],
  [648, 256],
  [628, 250],
]
const STRANGER = man({
  facing: -1,
  neck: [672, 226],
  hip: [682, 280],
  head: VIC_HEAD,
  hair: VICTOR_HAIR,
  body: { width: 34, tails: 20 },
  near: { arm: VIC_ARM, leg: [], hand: { parts: OPEN_HAND, rot: -30 } },
  far: {
    arm: [
      [680, 236],
      [698, 258],
      [712, 266],
    ],
    leg: [],
    hand: { parts: GRIP_HAND },
  },
  arm: 8,
  feet: false,
})
const SLEDGE = sledge([724, 300], 142, -1, 30)
/** The one dog left alive, standing in its harness in front of the sledge. */
const DOG_AT = 'translate(528 281) scale(1.5)'
const HARNESS = 'M516 266Q552 278 588 292'

function TheStrangerOnTheIce({ uid }: ArtProps) {
  const m = marks()
  const clip = { hull: `${uid}-hull` }
  const wt = headAt(1, WAL_HEAD.at, WAL_HEAD.rot, WAL_HEAD.scale)
  const mt = headAt(1, MAS_HEAD.at, MAS_HEAD.rot, MAS_HEAD.scale)
  const st = headAt(1, SAI_HEAD.at, SAI_HEAD.rot, SAI_HEAD.scale)
  const vt = headAt(-1, VIC_HEAD.at, VIC_HEAD.rot, VIC_HEAD.scale)
  const hullPath = 'M0 150L300 143C330 141 350 138 364 133C368 190 376 260 386 340L0 340Z'
  return (
    <>
      <defs>
        <clipPath id={clip.hull}>
          <path d={hullPath} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [640, 260], push: 1.03 })}>
        {/* the first light: a paper sky, and the plain of ice to the horizon */}
        <rect x={0} y={0} width={W} height={ICE_EDGE + 6} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.hummocks} fill={INK} />
        <path d={m.plain} fill={INK} />
        {/* open water where the ice broke in the night */}
        <path d={m.edge} fill={INK} />
        <path d={m.water} fill={PAPER} />
        {m.floes.map((f, i) => (
          <g key={i} className="lc-drift-r" style={timing({ delay: 0.2 * i })}>
            <path d={f.side} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
            <path d={f.hatch} fill={INK} />
            <path d={f.top} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
          </g>
        ))}

        {/* the large fragment of ice, the sledge, the dog and the stranger */}
        <path d={m.raft.side} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
        <path d={m.raft.hatch} fill={INK} />
        <path d={m.raft.top} fill={PAPER} stroke={INK} strokeWidth={LINE.bold} />
        <path
          d={gouge(470, 300, 560, 302, 1.2) + gouge(720, 306, 800, 304, 1.2)}
          fill={INK}
          opacity={0.9}
        />
        <Figure parts={STRANGER} halo={2.2}>
          <g transform={vt}>
            <path d={VICTOR_HAIR_CUTS + VICTOR_CUTS} fill={PAPER} />
            <path d={VICTOR_PUPIL} fill={INK} />
            <path d={NECKCLOTH} fill={PAPER} />
          </g>
          <path d={m.rime} fill={PAPER} />
          <path d={gouge(676, 238, 690, 276, 0.9, -1.2)} fill={PAPER} />
        </Figure>
        <path d={SLEDGE.runners} fill="none" stroke={PAPER} strokeWidth={6} strokeLinecap="round" />
        <path d={SLEDGE.box} fill={PAPER} stroke={PAPER} strokeWidth={3.6} strokeLinejoin="round" />
        <path d={SLEDGE.box} fill={INK} />
        <path d={SLEDGE.slats} fill={PAPER} />
        <path
          d={SLEDGE.runners}
          fill="none"
          stroke={INK}
          strokeWidth={LINE.bold}
          strokeLinecap="round"
        />
        <path d={HARNESS} fill="none" stroke={INK} strokeWidth={LINE.carve} />
        <g transform={DOG_AT}>
          <path d={DOG_FAR_LEGS} stroke={INK} strokeWidth={4} strokeLinecap="round" />
          <path
            d={DOG + DOG_TAIL}
            fill={INK}
            stroke={PAPER}
            strokeWidth={1.4}
            strokeLinejoin="round"
          />
          <path d={DOG + DOG_TAIL} fill={INK} />
          <path d={DOG_CUTS} fill={PAPER} />
        </g>

        {/* Walton, the master and a sailor at the rail */}
        <Figure parts={WALTON} halo={2}>
          <g transform={wt}>
            <path d={FUR_COLLAR} fill={INK} stroke={PAPER} strokeWidth={0.8} />
            <path d={FUR_COLLAR_CUTS + FUR_CAP_CUTS + WALTON_CUTS} fill={PAPER} />
          </g>
          <path d={furTrim([160, 112], [160, 146])} fill={PAPER} />
        </Figure>
        <Figure parts={MASTER} halo={2}>
          <path d={SAILOR_HAT_BAND + SAILOR_CUTS} transform={mt} fill={PAPER} />
          <path d={gouge(250, 124, 240, 150, 0.8, 1)} fill={PAPER} />
        </Figure>
        <Figure parts={SAILOR} halo={2}>
          <path d={SAILOR_HAT_BAND + SAILOR_CUTS} transform={st} fill={PAPER} />
        </Figure>
        {/* the ship's side, the rope let down to the ice, and the rail */}
        <path d={hullPath} fill={INK} />
        <g clipPath={`url(#${clip.hull})`}>
          <path d={m.hull} fill={PAPER} />
        </g>
        <path
          d="M300 145C340 190 380 230 420 262C438 276 452 286 466 292"
          fill="none"
          stroke={PAPER}
          strokeWidth={4.4}
          strokeLinecap="round"
        />
        <path
          d="M300 145C340 190 380 230 420 262C438 276 452 286 466 292"
          fill="none"
          stroke={INK}
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="5 2"
        />

        {/* the lantern held out over the side, its glow */}
        <path d={m.glow} fill={INK} />
        <path
          d={`M${LANTERN[0] - 6} ${LANTERN[1]}L${LANTERN[0] - 8} ${LANTERN[1] - 12}`}
          stroke={INK}
          strokeWidth={1.4}
        />
        <path
          d={`M${LANTERN[0] - 7} ${LANTERN[1]}h14v18h-14Z`}
          fill={PAPER}
          stroke={INK}
          strokeWidth={LINE.bold}
        />
        <path d={`M${LANTERN[0] - 9} ${LANTERN[1]}h18l-3 -5h-12Z`} fill={INK} />
        <path d={`M${LANTERN[0] - 8} ${LANTERN[1] + 18}h16v3h-16Z`} fill={INK} />
        <path
          className="lc-flicker"
          d={`M${LANTERN[0]} ${LANTERN[1] + 16}C${LANTERN[0] - 4} ${LANTERN[1] + 12} ${LANTERN[0] - 2} ${LANTERN[1] + 7} ${LANTERN[0]} ${LANTERN[1] + 3}C${LANTERN[0] + 2} ${LANTERN[1] + 7} ${LANTERN[0] + 4} ${LANTERN[1] + 12} ${LANTERN[0]} ${LANTERN[1] + 16}Z`}
          fill={RED}
        />

        <path d="M0 148L300 141C330 139 350 136 364 131" fill="none" stroke={INK} strokeWidth={9} />
        <path
          d="M0 146L300 139C330 137 350 134 364 129"
          fill="none"
          stroke={PAPER}
          strokeWidth={3}
          strokeLinecap="round"
        />
        <path
          d="M364 133C368 190 376 260 386 340"
          fill="none"
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
      </g>
    </>
  )
}

export const theStrangerOnTheIce: LinocutArt = { width: W, height: H, Draw: TheStrangerOnTheIce }
