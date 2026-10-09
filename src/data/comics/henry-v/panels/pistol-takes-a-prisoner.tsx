import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { gouge, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { prayingHands } from '../../romeo-and-juliet/panels/acts-3-4-kit'
import {
  banner,
  clothBand,
  crows,
  daySky,
  farHost,
  farLuggage,
  staff,
  trampledGround,
} from './agincourt-field'
import { CutFigure, Person } from './people'

/**
 * Act 4, Scene 4: "Pistol takes a prisoner", the seventeenth moment in the
 * guide's timeline. Every detail is from the held edition
 * (src/data/full-texts/henry-v.ts, Project Gutenberg #1521):
 *
 * - "Alarum. Excursions. Enter Pistol, French Soldier and Boy." So it is the
 *   field by day with the fighting far off: a broken line of men and lances on
 *   the right, nobody near struck or hurt.
 * - The Frenchman begs on his knees: "O, prenez miséricorde! Ayez pitié de
 *   moi!", and at the end "Sur mes genoux je vous donne mille remerciements",
 *   which the Boy puts as "He gives you upon his knees, a thousand thanks". So
 *   Monsieur le Fer kneels, his hands pressed together, his eyes wide. He is
 *   "a gentleman of a good house": the kit's le Fer, in harness with the lilies
 *   on his jupon, bareheaded, his sword gone.
 * - Pistol wants money, not blood: "unless thou give me crowns, brave crowns";
 *   "Tell him my fury shall abate, and I The crowns will take." So he stands
 *   over him with his chest out and his chin up, one fist on his hip and the
 *   other hand held out, palm up, for the crowns. His sword stays in its
 *   scabbard: the threats are words only, and the Boy is never drawn near a
 *   drawn blade (the kit's rule).
 * - The Boy translates: "Écoutez. Comment êtes-vous appelé?" So he stands on
 *   the Frenchman's other side, a child a head and more shorter than the men,
 *   turned to the two of them with one hand out as he explains.
 * - "I must stay with the lackeys with the luggage of our camp": the camp, its
 *   tents and carts, is far off on the left under Saint George's pennon, the
 *   one mark of the spot colour, its cross at the hoist as a standard carries
 *   it and big enough to stay a flag at phone width. Its staff stands on the
 *   peak of a tent. It is the camp the next panels return to.
 *
 * Dust drifting over the far fighting was cut as wavy ribbons in the first
 * draft and taken out on review (9 October 2026): across the lances they
 * read as ropes, as the same dust did in "York, Suffolk and the prisoners".
 *
 * The quotation is the Boy's verdict on Pistol, from the same speech. Nothing
 * is taken from a film or stage production. Seeds: 1701 to 1706.
 */

const W = 860
const H = 340
const HORIZON = 206

type Marks = {
  sky: string
  ground: string
  crowPaths: string
  camp: { shapes: string; cuts: string }
  pennon: string
  cross: string
  pole: string
  host: { band: string; lances: string; pennons: string }
  hostBanners: string
  shade: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = daySky(rng(1701), { x0: 0, x1: W, y0: 6, y1: HORIZON - 6 }, (x, y) => {
    const high = 1 - y / HORIZON
    return 0.1 + high * 0.5 - (x / W) * 0.1
  })
  const ground = trampledGround(rng(1702), { x0: 0, x1: W, y0: HORIZON + 2, y1: H })
  const crowPaths = crows([
    { at: [470, 40], s: 0.9, rot: -8 },
    { at: [536, 70], s: 0.7, rot: 10 },
    { at: [410, 82], s: 0.65, rot: -12 },
  ])
  // The luggage of the English camp, far off on the left. The pennon's staff
  // rises from the peak of the second tent (a pole top is 6 above its peak).
  const camp = farLuggage(rng(1704), 22, 214, HORIZON, 1)
  const top = camp.poles[1] ?? camp.poles[0]
  const peak = top[1] + 6
  const pole = staff([top[0], peak + 3], [top[0], peak - 40], 2.4)
  const flag = banner(rng(1705), [top[0] + 1, peak - 38], { len: 44, depth: 22, tail: true })
  const pennon = flag.cloth
  // Saint George's cross at the hoist, as a standard carries it
  const cross =
    clothBand(flag.at, true, 0, 0.62, 0.5, 0.24) + clothBand(flag.at, false, 0, 1, 0.24, 0.14)
  // the excursions: a broken line of men far off on the right
  const rh = rng(1706)
  const host = farHost(rh, 600, 866, () => HORIZON - 1, {
    h: 13,
    lance: 18,
    every: 7.4,
    pennons: 0.15,
    rows: 2,
  })
  let hostBanners = ''
  for (const x of [672, 790]) {
    hostBanners += staff([x, HORIZON - 6], [x, HORIZON - 52], 2)
    hostBanners += banner(rh, [x + 1, HORIZON - 50], { len: 24, depth: 11, tail: true }).cloth
  }
  let shade = ''
  for (const [x0, x1, y] of [
    [214, 336, 322],
    [352, 462, 322],
    [520, 600, 322],
  ])
    for (let k = 0; k < 4; k++)
      shade += gouge(x0 + k * 5, y + k * 2.6, x1 - k * 6, y + k * 2.6 + 0.6, 1.6 - k * 0.25)
  cached = { sky, ground, crowPaths, camp, pennon, cross, pole, host, hostBanners, shade }
  return cached
}

/**
 * Le Fer's hands pressed together, raised towards Pistol, in his own frame
 * (facing right before the flip): the Romeo and Juliet kit's praying hands,
 * larger, with the line between the palms cut wider and the thumbs laid along
 * the top, so that at panel size they read as two hands and not as a blade.
 */
const PLEA = prayingHands([22, -95], -60, 1.3)
const PLEA_CUT = gouge(3, 0, 16, 0, 0.9)
const THUMBS = 'M3 -3.4L10.6 -6.4'

function PistolTakesAPrisoner({ uid }: ArtProps) {
  const m = marks()
  const pennon = `${uid}-pennon`
  return (
    <>
      <defs>
        <clipPath id={pennon}>
          <path d={m.pennon} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [400, 220], push: 1.03 })}>
        {/* the sky over the field */}
        <rect x={0} y={0} width={W} height={HORIZON + 2} fill={PAPER} />
        <path d={m.sky} fill={INK} />
        <path d={m.crowPaths} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />

        {/* the excursions, far off on the right */}
        <path d={m.host.lances} stroke={INK} strokeWidth={1.2} fill="none" />
        <path d={m.host.pennons + m.hostBanners} fill={INK} />
        <path d={m.host.band} fill={INK} stroke={PAPER} strokeWidth={0.9} strokeLinejoin="round" />

        {/* the luggage of the English camp, far off on the left, under Saint George */}
        <path
          d={m.camp.shapes}
          fill={INK}
          stroke={PAPER}
          strokeWidth={0.9}
          strokeLinejoin="round"
        />
        <path d={m.camp.cuts} fill={PAPER} />
        <path d={m.pole} fill={INK} stroke={PAPER} strokeWidth={0.8} strokeLinejoin="round" />
        <path d={m.pennon} fill={PAPER} stroke={INK} strokeWidth={1.4} strokeLinejoin="round" />
        <g clipPath={`url(#${pennon})`}>
          <path d={m.cross} fill={RED} />
        </g>

        {/* the trampled field */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.4} />
        <path d={m.ground} fill={INK} />
        <path d={m.shade} fill={INK} />

        {/* Pistol, chest out, one fist on his hip, the other hand out for the crowns */}
        <Person
          at={[272, 322]}
          scale={1.26}
          pose={{
            look: 'pistol',
            mouth: 'open',
            head: { rot: -7 },
            body: { neck: [-3, -138], hip: [0, -70] },
            far: {
              pts: [
                [-4, -130],
                [-26, -108],
                [-8, -86],
              ],
              hand: 'mitt',
              deg: 30,
            },
            near: {
              pts: [
                [2, -130],
                [10, -104],
                [33, -96],
              ],
              hand: 'open',
              deg: 0,
              thumb: -1,
            },
            legs: {
              far: [
                [-3, -70],
                [-12, -36],
                [-18, -3],
              ],
              near: [
                [3, -70],
                [12, -36],
                [20, -3],
              ],
            },
          }}
        />

        {/* Monsieur le Fer on his knees, his hands pressed together */}
        <Person
          at={[438, 322]}
          scale={1.26}
          flip
          pose={{
            look: 'le-fer',
            dress: 'armour',
            sword: false,
            eye: 'wide',
            brow: 'sorrow',
            head: { rot: -12 },
            body: { neck: [2, -106], hip: [0, -40] },
            legs: {
              far: [
                [-2, -40],
                [-8, -6],
                [-38, -4],
              ],
              near: [
                [2, -40],
                [32, -40],
                [30, -3],
              ],
            },
            far: {
              pts: [
                [-2, -98],
                [10, -80],
                [22, -92],
              ],
              hand: 'none',
            },
            near: {
              pts: [
                [4, -98],
                [14, -80],
                [24, -94],
              ],
              hand: 'none',
            },
          }}
        >
          <CutFigure parts={[PLEA.part]} halo={1.5} />
          <g transform={PLEA.t}>
            <path d={PLEA_CUT} fill={PAPER} />
            <path d={THUMBS} stroke={PAPER} strokeWidth={1} strokeLinecap="round" />
          </g>
        </Person>

        {/* the Boy, turned to them both, explaining */}
        <Person
          at={[566, 322]}
          scale={1.26}
          flip
          pose={{
            look: 'boy',
            mouth: 'open',
            head: { rot: -4 },
            far: {
              pts: [
                [-2, -130],
                [-6, -104],
                [-2, -82],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [3, -130],
                [14, -106],
                [32, -98],
              ],
              hand: 'open',
              deg: -14,
              thumb: -1,
            },
          }}
        />
      </g>
    </>
  )
}

export const pistolTakesAPrisoner: LinocutArt = { width: W, height: H, Draw: PistolTakesAPrisoner }
