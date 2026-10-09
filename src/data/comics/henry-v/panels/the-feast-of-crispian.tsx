import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { banner, clothBand, crows, daySky, farHost, staff, trampledGround } from './agincourt-field'
import { Person } from './people'

/**
 * Act 4, Scene 3: "The feast of Crispian", the sixteenth moment in the
 * guide's timeline. Every detail is from the held edition
 * (src/data/full-texts/henry-v.ts, Project Gutenberg #1521):
 *
 * - Henry answers Westmorland in front of his lords: "What's he that wishes
 *   so? My cousin Westmorland? No, my fair cousin." Exeter is there ("my good
 *   Lord Exeter", Salisbury's farewell), so Henry stands on the right, turned
 *   back to his own men, one hand held out low to them as he speaks, and
 *   Westmorland and Exeter (his grey beard, the kit's mark for him) face him,
 *   with a third lord of the host behind them. (His hand was first cut at
 *   chest height on a near-straight arm with the fingers turned up: at panel
 *   size it read as a signal to halt, and its fingers ran together. On review,
 *   9 October 2026, it was lowered to a bent arm and opened at the kit's full
 *   spread, the gesture the kit gives to a man speaking to his own.)
 * - They are dressed for the battle: "They shall have none, I swear, but
 *   these my joints"; Henry's crown is on his helm, so the King is known in the
 *   field (the kit's `helm`).
 * - "Of fighting men they have full three-score thousand"; "There's five to
 *   one"; "The French are bravely in their battles set". So the French host
 *   fills the rise behind Henry, a long dense line of helmets and lances under
 *   their standards, and the English are a short rank.
 * - "Our gayness and our gilt are all besmirch'd With rainy marching in the
 *   painful field; There's not a piece of feather in our host". So the English
 *   banners are torn at the fly, nobody wears a plume, and the field is mud.
 *   The nearest banner is Saint George's, the cross in the spot colour: "Cry,
 *   'God for Harry! England and Saint George!'" (3.1). The cross is centred
 *   on the cloth the tear has left (set nearer the hoist, it read as a
 *   Scandinavian cross).
 * - "the knavish crows Fly o'er them" (Grandpré, 4.2): crows over the English.
 *
 * Montjoy and York, who come after the speech, are left to the guide's words:
 * the panel is the speech. Nobody is struck or hurt; every blade is sheathed or
 * upright in the rank. Nothing is taken from a film or stage production.
 * Seeds: 1601 to 1605.
 */

const W = 860
const H = 340
const HORIZON = 214

/** The rise the French stand on, behind Henry on the right. */
const frenchGround = (x: number) => HORIZON - 4 - Math.max(0, x - 470) * 0.022

type Marks = {
  sky: string
  ground: string
  ridge: string
  host: { band: string; lances: string; pennons: string }
  frBanners: string
  crowPaths: string
  rank: string
  rankCuts: string
  rankStaves: string
  staves: string
  cloths: { d: string; ink: boolean }[]
  cross: string
  shade: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1601)
  // A windy morning: cloud heavier overhead and on the left, the air
  // clearing low over the field where the French stand.
  const sky = daySky(r, { x0: 0, x1: W, y0: 6, y1: HORIZON - 6 }, (x, y) => {
    const high = 1 - y / HORIZON
    return 0.08 + high * 0.55 - (x / W) * 0.18
  })
  const ground = trampledGround(rng(1602), { x0: 0, x1: W, y0: HORIZON + 2, y1: H })

  // The French host, "bravely in their battles set": three rows deep along
  // the rise, their lances up and pennons on many of them.
  const rh = rng(1603)
  const host = farHost(rh, 452, 866, frenchGround, {
    h: 15,
    lance: 22,
    every: 6.4,
    pennons: 0.22,
    rows: 3,
  })
  // and their standards over them, each a swallow-tailed standard flying
  // on the same wind as the English banners
  let frBanners = ''
  for (const x of [536, 610, 688, 766, 836]) {
    const y = frenchGround(x) - 30
    frBanners += staff([x, y + 22], [x, y - 34], 2.2)
    frBanners += banner(rh, [x + 1, y - 32], { len: 30, depth: 13, tail: true }).cloth
  }
  let ridge = `M440 ${HORIZON + 1}`
  for (let x = 440; x <= W + 6; x += 12) ridge += `L${x} ${n(frenchGround(x) + 2)}`
  ridge += `L${W + 6} ${HORIZON + 1}Z`

  // "the knavish crows Fly o'er them": over the English, on the left.
  const crowPaths = crows([
    { at: [292, 30], s: 1.05, rot: -10 },
    { at: [366, 58], s: 0.85, rot: 8 },
    { at: [236, 64], s: 0.8, rot: -4 },
    { at: [404, 22], s: 0.7, rot: -14 },
  ])

  // The English rank behind their lords: archers and billmen in kettle hats
  // and padded jacks, a bow stave or a bill upright beside each.
  const rr = rng(1604)
  let rank = ''
  let rankCuts = ''
  let rankStaves = ''
  for (let x = 14; x < 420; x += between(rr, 21, 27)) {
    const s = 0.9 + between(rr, -0.05, 0.05)
    const base = 254 + between(rr, -2, 2)
    const head = base - 62 * s
    // legs
    rank += `M${n(x - 6 * s)} ${base}L${n(x - 3 * s)} ${base}L${n(x - 2.4 * s)} ${n(base - 20 * s)}L${n(x - 5.6 * s)} ${n(base - 20 * s)}Z`
    rank += `M${n(x + 2 * s)} ${base}L${n(x + 5.4 * s)} ${base}L${n(x + 5.4 * s)} ${n(base - 20 * s)}L${n(x + 2 * s)} ${n(base - 20 * s)}Z`
    // the padded jack, to mid-thigh
    rank += `M${n(x - 9 * s)} ${n(base - 18 * s)}L${n(x - 7 * s)} ${n(head + 14 * s)}Q${n(x)} ${n(head + 10 * s)} ${n(x + 7 * s)} ${n(head + 14 * s)}L${n(x + 9 * s)} ${n(base - 18 * s)}Z`
    // head and kettle hat
    rank += `M${n(x - 4.6 * s)} ${n(head + 12 * s)}L${n(x - 4.6 * s)} ${n(head + 4 * s)}L${n(x + 4.6 * s)} ${n(head + 4 * s)}L${n(x + 4.6 * s)} ${n(head + 12 * s)}Z`
    rank += `M${n(x - 10 * s)} ${n(head + 5 * s)}Q${n(x)} ${n(head + 2.4 * s)} ${n(x + 10 * s)} ${n(head + 5 * s)}L${n(x + 6 * s)} ${n(head + 2.6 * s)}Q${n(x)} ${n(head - 7 * s)} ${n(x - 6 * s)} ${n(head + 2.6 * s)}Z`
    // the quilting of the jack, cut in paper
    rankCuts += gouge(x - 3.4 * s, head + 17 * s, x - 3.8 * s, base - 21 * s, 0.75 * s)
    rankCuts += gouge(x + 3.4 * s, head + 17 * s, x + 3.8 * s, base - 21 * s, 0.75 * s)
    // a bow stave (long and bent a little) or a bill (a short blade at the top)
    const bow = rr() < 0.55
    const sx = x + 11 * s
    if (bow)
      rankStaves += `M${n(sx)} ${n(base - 2)}Q${n(sx + 3.4)} ${n(head - 4)} ${n(sx)} ${n(head - 18 * s)}`
    else {
      rankStaves += `M${n(sx)} ${n(base - 2)}L${n(sx)} ${n(head - 14 * s)}`
      rank += `M${n(sx - 1.2)} ${n(head - 12 * s)}L${n(sx + 4.6 * s)} ${n(head - 14 * s)}L${n(sx + 1.4)} ${n(head - 24 * s)}L${n(sx - 1.6)} ${n(head - 22 * s)}Z`
    }
  }

  // Their banners, torn at the fly, high over the lords' heads: "Their ragged
  // curtains poorly are let loose, And our air shakes them passing
  // scornfully" (4.2). The nearest is Saint George's.
  const rb = rng(1605)
  const george = banner(rb, [96, 22], { len: 100, depth: 60, ragged: true })
  const left = banner(rb, [24, 70], { len: 48, depth: 30, ragged: true })
  const right = banner(rb, [356, 74], { len: 50, depth: 30, ragged: true })
  const staves =
    staff([94, 252], [94, 16], 4) +
    staff([23, 250], [23, 64], 3.4) +
    staff([355, 252], [355, 68], 3.2)
  // the cross centred on the cloth that is left, short of the torn tongues
  const cross =
    clothBand(george.at, true, 0, 0.84, 0.5, 0.2) +
    clothBand(george.at, false, 0, 1, 0.42, (0.2 * 60) / 100)

  // The shadow each figure stands in, on the mud.
  let shade = ''
  for (const [x0, x1, y] of [
    [110, 214, 318],
    [214, 322, 326],
    [300, 412, 327],
    [430, 548, 330],
  ])
    for (let k = 0; k < 4; k++)
      shade += gouge(x0 + k * 5, y + k * 2.6, x1 - k * 6, y + k * 2.6 + 0.6, 1.6 - k * 0.25)

  cached = {
    sky,
    ground,
    ridge,
    host,
    frBanners,
    crowPaths,
    rank,
    rankCuts,
    rankStaves,
    staves,
    cloths: [
      { d: george.cloth, ink: false },
      { d: left.cloth, ink: true },
      { d: right.cloth, ink: true },
    ],
    cross,
    shade,
  }
  return cached
}

function FeastOfCrispian({ uid }: ArtProps) {
  const m = marks()
  const george = `${uid}-george`
  return (
    <>
      <defs>
        <clipPath id={george}>
          <path d={m.cloths[0].d} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [470, 200], push: 1.03 })}>
        {/* the windy morning sky */}
        <rect x={0} y={0} width={W} height={HORIZON + 2} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.crowPaths} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />

        {/* the French, far off on their rise */}
        <path d={m.ridge} fill={INK} />
        <path d={m.host.lances} stroke={INK} strokeWidth={1.3} fill="none" />
        <path d={m.host.pennons} fill={INK} />
        <path d={m.frBanners} fill={INK} />
        <path d={m.host.band} fill={INK} stroke={PAPER} strokeWidth={0.9} strokeLinejoin="round" />

        {/* the trampled field */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.4} />
        <path d={m.ground} fill={INK} />

        {/* the English banners, ragged, and the rank under them */}
        <path d={m.staves} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
        {m.cloths.map((c) => (
          <path
            key={c.d.slice(0, 24)}
            d={c.d}
            fill={c.ink ? INK : PAPER}
            stroke={c.ink ? PAPER : INK}
            strokeWidth={c.ink ? 1.4 : 2.2}
            strokeLinejoin="round"
          />
        ))}
        <g clipPath={`url(#${george})`}>
          <path d={m.cross} fill={RED} />
        </g>
        <path d={m.rankStaves} stroke={PAPER} strokeWidth={4.4} fill="none" strokeLinecap="round" />
        <path d={m.rankStaves} stroke={INK} strokeWidth={2.2} fill="none" strokeLinecap="round" />
        <path d={m.rank} fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
        <path d={m.rank} fill={INK} />
        <path d={m.rankCuts} fill={PAPER} />
        <path d={m.shade} fill={INK} />

        {/* a lord of the host, Exeter and Westmorland, turned to the King */}
        <Person
          at={[160, 318]}
          scale={1.1}
          pose={{
            look: 'lord',
            variant: 0,
            dress: 'armour',
            bare: true,
            far: {
              pts: [
                [-2, -130],
                [-6, -104],
                [-2, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [8, -104],
                [6, -80],
              ],
              hand: 'mitt',
            },
          }}
        />
        <Person
          at={[266, 326]}
          scale={1.22}
          pose={{
            look: 'exeter',
            dress: 'armour',
            head: { rot: 4 },
            far: {
              pts: [
                [-2, -130],
                [-4, -104],
                [2, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [12, -106],
                [10, -82],
              ],
              hand: 'mitt',
            },
          }}
        />
        <Person
          at={[352, 327]}
          scale={1.22}
          pose={{
            look: 'lord',
            variant: 2,
            dress: 'armour',
            bare: true,
            head: { rot: -4 },
            far: {
              pts: [
                [-2, -130],
                [-6, -104],
                [-2, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [18, -112],
                [10, -106],
              ],
              hand: 'mitt',
              deg: 160,
            },
            legs: {
              far: [
                [-3, -70],
                [-8, -36],
                [-11, -3],
              ],
              near: [
                [3, -70],
                [7, -36],
                [9, -3],
              ],
            },
          }}
        />

        {/* Henry, his back to the French, speaking to his own men */}
        <Person
          at={[490, 330]}
          scale={1.3}
          flip
          pose={{
            look: 'henry',
            dress: 'armour',
            helm: true,
            mouth: 'open',
            head: { rot: -4 },
            far: {
              pts: [
                [-2, -130],
                [-8, -104],
                [-4, -80],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [14, -104],
                [36, -94],
              ],
              hand: 'open',
              deg: 2,
              thumb: -1,
              size: 16,
            },
            legs: {
              far: [
                [-3, -70],
                [-9, -36],
                [-14, -3],
              ],
              near: [
                [3, -70],
                [10, -36],
                [14, -3],
              ],
            },
          }}
        />
      </g>
    </>
  )
}

export const feastOfCrispian: LinocutArt = { width: W, height: H, Draw: FeastOfCrispian }
