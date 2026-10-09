import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { banner, daySky, farHost, staff, trampledGround } from './agincourt-field'
import { Person, type Pose } from './people'

/**
 * Act 4, Scene 6: "York, Suffolk and the prisoners", the eighteenth moment in
 * the guide's timeline. Every detail is from the held edition
 * (src/data/full-texts/henry-v.ts, Project Gutenberg #1521):
 *
 * - "Alarum. Enter King Henry and his train, with prisoners." Exeter brings
 *   the news: "The Duke of York commends him to your Majesty", and tells how
 *   York and Suffolk died together. York's death is told, never shown: what is
 *   drawn is the teller. "The pretty and sweet manner of it forc'd Those
 *   waters from me which I would have stopp'd; But I had not so much of man in
 *   me, And all my mother came into mine eyes And gave me up to tears." So
 *   Exeter (the kit's grey beard, bareheaded in harness) stands with his head
 *   bowed low, his eyes lowered, tears cut in paper on his cheek and a hand
 *   pressed to his chest. (A hand raised over his eyes was tried on 9 October
 *   2026 and taken out: the forearm stood up in front of his face, hid his
 *   beard, and at panel size read as a salute or a man at his ear, not as a
 *   man weeping. The bowed head carries the grief at phone width.)
 * - Henry answers "I blame you not; For, hearing this, I must perforce
 *   compound With mistful eyes". So he faces his uncle with his own eyes
 *   lowered and his brow drawn up in sorrow, one hand held out low to him.
 * - Then "[Alarum.] But hark! what new alarum is this same? The French have
 *   reinforc'd their scatter'd men." So behind Henry, on the ridge to the
 *   right, the French standards rise again over a line of lances, where the
 *   reader sees them as the alarum sounds and before the King turns. The
 *   standards are the spot colour: they are what the alarum is, and what the
 *   scene turns on. They fade in after the two men, as the alarum comes after
 *   the grief.
 * - The train stands behind Exeter on the left under a ragged English banner,
 *   and with it, as the stage direction has them, two of the prisoners: French
 *   men-at-arms, bareheaded and without their swords, the lilies of France on
 *   their jupons (the kit's 'french-lord' in harness), their hands together
 *   before them. One bows his head; the other lifts his face towards the
 *   ridge, where his own side is gathering. They are men, drawn with the same
 *   care as the English, and nothing threatens them in the picture: every
 *   staff in the train is upright. (Dust drifting across the field was tried
 *   and taken out: between the two men its lines read as ropes. Crows were
 *   taken out too: over a field where York and Suffolk lie, birds of carrion
 *   say what the panel does not show.)
 *
 * WHAT IS NOT DRAWN. York and Suffolk, who are dead, are not drawn, and nor is
 * the order Henry gives at the end of the scene. The panel stops at the
 * alarum, and its quotation is that line, not the order (this play's rule).
 * Nobody is wounded and no blade is drawn. Nothing is taken from a film or
 * stage production. Seeds: 1801, 1802, 1804 to 1806.
 */

const W = 860
const H = 340
const HORIZON = 212

/** The ridge on the right, where the French gather again. */
const ridgeY = (x: number) => HORIZON - 2 - Math.max(0, x - 560) * 0.1 + Math.max(0, x - 760) * 0.06

type Marks = {
  sky: string
  ground: string
  ridge: string
  host: { band: string; lances: string; pennons: string }
  standards: string[]
  staves: string
  train: string
  trainCuts: string
  trainStaves: string
  flag: string
  flagStaff: string
  shade: string
}

const clampX = (x: number) => Math.max(0, Math.min(1, (x - 480) / 380))

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const sky = daySky(rng(1801), { x0: 0, x1: W, y0: 6, y1: HORIZON - 6 }, (x, y) => {
    const high = 1 - y / HORIZON
    // darker over the ridge, where the alarum comes from
    return 0.1 + high * 0.45 + clampX(x) * 0.2
  })
  const ground = trampledGround(rng(1802), { x0: 0, x1: W, y0: HORIZON + 2, y1: H })
  let ridge = `M548 ${HORIZON + 1}`
  for (let x = 548; x <= W + 6; x += 10) ridge += `L${x} ${n(ridgeY(x) + 1)}`
  ridge += `L${W + 6} ${HORIZON + 1}Z`
  // the French, come back over the ridge: a line of helmets and lances
  const rh = rng(1804)
  const host = farHost(rh, 590, 866, (x) => ridgeY(x) + 2, {
    h: 14,
    lance: 26,
    every: 7,
    pennons: 0.12,
    rows: 2,
  })
  // and three standards over them, big enough to stay flags at phone width
  const standards: string[] = []
  let staves = ''
  for (const [x, len] of [
    [640, 46],
    [728, 52],
    [812, 44],
  ]) {
    const foot = ridgeY(x) - 6
    staves += staff([x, foot], [x, foot - 70], 2.6)
    standards.push(banner(rh, [x + 1, foot - 68], { len, depth: 22, tail: true }).cloth)
  }

  // The King's train behind him on the left: a short rank in kettle hats, a
  // bill or a bow stave upright beside each. It ends short of the prisoners,
  // so that no bill's head stands at a prisoner's shoulder.
  const rr = rng(1805)
  let train = ''
  let trainCuts = ''
  let trainStaves = ''
  for (let x = 16; x < 150; x += between(rr, 22, 28)) {
    const s = 0.95 + between(rr, -0.05, 0.05)
    const base = 258 + between(rr, -2, 2)
    const head = base - 62 * s
    train += `M${n(x - 6 * s)} ${base}L${n(x - 3 * s)} ${base}L${n(x - 2.4 * s)} ${n(base - 20 * s)}L${n(x - 5.6 * s)} ${n(base - 20 * s)}Z`
    train += `M${n(x + 2 * s)} ${base}L${n(x + 5.4 * s)} ${base}L${n(x + 5.4 * s)} ${n(base - 20 * s)}L${n(x + 2 * s)} ${n(base - 20 * s)}Z`
    train += `M${n(x - 9 * s)} ${n(base - 18 * s)}L${n(x - 7 * s)} ${n(head + 14 * s)}Q${n(x)} ${n(head + 10 * s)} ${n(x + 7 * s)} ${n(head + 14 * s)}L${n(x + 9 * s)} ${n(base - 18 * s)}Z`
    train += `M${n(x - 4.6 * s)} ${n(head + 12 * s)}L${n(x - 4.6 * s)} ${n(head + 4 * s)}L${n(x + 4.6 * s)} ${n(head + 4 * s)}L${n(x + 4.6 * s)} ${n(head + 12 * s)}Z`
    train += `M${n(x - 10 * s)} ${n(head + 5 * s)}Q${n(x)} ${n(head + 2.4 * s)} ${n(x + 10 * s)} ${n(head + 5 * s)}L${n(x + 6 * s)} ${n(head + 2.6 * s)}Q${n(x)} ${n(head - 7 * s)} ${n(x - 6 * s)} ${n(head + 2.6 * s)}Z`
    trainCuts += gouge(x - 3.4 * s, head + 17 * s, x - 3.8 * s, base - 21 * s, 0.75 * s)
    trainCuts += gouge(x + 3.4 * s, head + 17 * s, x + 3.8 * s, base - 21 * s, 0.75 * s)
    const sx = x + 11 * s
    if (rr() < 0.5)
      trainStaves += `M${n(sx)} ${n(base - 2)}Q${n(sx + 3.4)} ${n(head - 4)} ${n(sx)} ${n(head - 18 * s)}`
    else {
      trainStaves += `M${n(sx)} ${n(base - 2)}L${n(sx)} ${n(head - 14 * s)}`
      train += `M${n(sx - 1.2)} ${n(head - 12 * s)}L${n(sx + 4.6 * s)} ${n(head - 14 * s)}L${n(sx + 1.4)} ${n(head - 24 * s)}L${n(sx - 1.6)} ${n(head - 22 * s)}Z`
    }
  }
  // the train's banner, ragged and in ink: the spot colour is the French standards'
  const flag = banner(rng(1806), [92, 58], { len: 70, depth: 40, ragged: true }).cloth
  const flagStaff = staff([90, 256], [90, 52], 3.6)

  let shade = ''
  for (const [x0, x1, y] of [
    [140, 270, 306],
    [272, 390, 326],
    [430, 548, 326],
  ])
    for (let k = 0; k < 4; k++)
      shade += gouge(x0 + k * 5, y + k * 2.6, x1 - k * 6, y + k * 2.6 + 0.6, 1.6 - k * 0.25)
  cached = {
    sky,
    ground,
    ridge,
    host,
    standards,
    staves,
    train,
    trainCuts,
    trainStaves,
    flag,
    flagStaff,
    shade,
  }
  return cached
}

/**
 * A French prisoner in the King's train: a man-at-arms of France in harness,
 * the lilies on his jupon (the kit cuts them on every Frenchman in harness),
 * bareheaded and without his sword. In the figure's own frame (facing right).
 */
const prisoner = (o: Partial<Pose>): Pose => ({
  look: 'french-lord',
  variant: 2,
  dress: 'armour',
  bare: true,
  sword: false,
  ...o,
})

/** Exeter's head: bowed low towards the King, so the tears can be cut in its frame. */
const EXETER_HEAD = { at: [6, -156] as [number, number], rot: 22 }
/** "gave me up to tears": two drops falling from the lowered eye down the cheek, above the beard. */
const TEARS =
  gouge(10.8, -0.6, 9.6, 5.6, 1.25, -0.2) + 'M8 8.6a1.5 1.7 0 1 0 3 0a1.5 1.7 0 1 0 -3 0Z'

function YorkSuffolkAndThePrisoners({ uid }: ArtProps) {
  const m = marks()
  const flagClip = `${uid}-flag`
  return (
    <>
      <defs>
        <clipPath id={flagClip}>
          <path d={m.flag} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [420, 200], push: 1.03 })}>
        {/* the sky over another part of the field */}
        <rect x={0} y={0} width={W} height={HORIZON + 2} fill={PAPER} />
        <path d={m.sky} fill={INK} />

        {/* the French on the ridge again, their standards up: the new alarum */}
        <path d={m.ridge} fill={INK} />
        <path d={m.host.lances} stroke={INK} strokeWidth={1.3} fill="none" />
        <path d={m.host.pennons} fill={INK} />
        <path d={m.staves} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
        <g className="lc-fade-in" style={timing({ delay: 0.9, dur: 1.2 })}>
          {m.standards.map((d) => (
            <path
              key={d.slice(0, 20)}
              d={d}
              fill={RED}
              stroke={INK}
              strokeWidth={1.4}
              strokeLinejoin="round"
            />
          ))}
        </g>
        <path d={m.host.band} fill={INK} stroke={PAPER} strokeWidth={0.9} strokeLinejoin="round" />

        {/* the trampled field */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={`M0 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.4} />
        <path d={m.ground} fill={INK} />

        {/* the King's train behind him, under a ragged English banner */}
        <path d={m.flagStaff} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
        <path d={m.flag} fill={INK} stroke={PAPER} strokeWidth={1.4} strokeLinejoin="round" />
        <g clipPath={`url(#${flagClip})`}>
          <path
            d={gouge(92, 70, 160, 78, 1.4, -1) + gouge(92, 84, 150, 92, 1.2, -1)}
            fill={PAPER}
          />
        </g>
        <path
          d={m.trainStaves}
          stroke={PAPER}
          strokeWidth={4.4}
          fill="none"
          strokeLinecap="round"
        />
        <path d={m.trainStaves} stroke={INK} strokeWidth={2.2} fill="none" strokeLinecap="round" />
        <path d={m.train} fill={INK} stroke={PAPER} strokeWidth={1.6} strokeLinejoin="round" />
        <path d={m.train} fill={INK} />
        <path d={m.trainCuts} fill={PAPER} />
        <path d={m.shade} fill={INK} />

        {/* two of the prisoners with the train: one bowed, one looking to the ridge */}
        <Person
          at={[176, 304]}
          scale={0.86}
          pose={prisoner({
            eye: 'down',
            head: { rot: 14 },
            far: {
              pts: [
                [-2, -130],
                [4, -104],
                [13, -90],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [9, -104],
                [17, -91],
              ],
              hand: 'mitt',
            },
          })}
        />
        <Person
          at={[234, 306]}
          scale={0.88}
          pose={prisoner({
            head: { rot: -10 },
            far: {
              pts: [
                [-2, -130],
                [3, -104],
                [12, -91],
              ],
              hand: 'mitt',
            },
            near: {
              pts: [
                [4, -130],
                [8, -104],
                [16, -92],
              ],
              hand: 'mitt',
            },
          })}
        />

        {/* Exeter, his head bowed low and a hand pressed to his chest, weeping as he tells it */}
        <Person
          at={[334, 328]}
          scale={1.26}
          pose={{
            look: 'exeter',
            dress: 'armour',
            eye: 'down',
            brow: 'sorrow',
            head: EXETER_HEAD,
            body: { neck: [5, -136], hip: [0, -70] },
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
                [18, -111],
                [10, -106],
              ],
              hand: 'mitt',
              deg: 160,
            },
          }}
        >
          <g
            transform={`translate(${EXETER_HEAD.at[0]} ${EXETER_HEAD.at[1]}) rotate(${EXETER_HEAD.rot})`}
          >
            <path d={TEARS} fill={PAPER} />
          </g>
        </Person>

        {/* Henry, his eyes lowered, his hand held out low to his uncle; the alarum behind him */}
        <Person
          at={[488, 328]}
          scale={1.3}
          flip
          pose={{
            look: 'henry',
            dress: 'armour',
            helm: true,
            eye: 'down',
            brow: 'sorrow',
            head: { rot: 6 },
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
                [12, -104],
                [32, -94],
              ],
              hand: 'open',
              deg: -4,
              thumb: -1,
            },
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
          }}
        />
      </g>
    </>
  )
}

export const yorkSuffolkAndThePrisoners: LinocutArt = {
  width: W,
  height: H,
  Draw: YorkSuffolkAndThePrisoners,
}
