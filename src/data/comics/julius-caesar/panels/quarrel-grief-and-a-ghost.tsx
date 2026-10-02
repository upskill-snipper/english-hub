import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { Person, type P } from './people'

/**
 * Act 4, Scene 3: "Quarrel, grief and a ghost", the twelfth moment in the
 * guide's timeline. The scene runs from the quarrel to the ghost; the panel
 * draws its last part, the moment of its quotation, when Cassius has gone to
 * his own tent. Every detail is from the scene (the held edition, Project
 * Gutenberg #1522):
 *
 * - "Within the tent of Brutus", late: "The deep of night is crept upon our
 *   talk". So it is a soldier's tent at night, its canvas lit by one light,
 *   its door open on the dark.
 * - "Enter Lucius, with wine and a taper"; "How ill this taper burns!". So the
 *   one light is a taper on a stand, its flame small and bent, and the light
 *   it throws is short. The flame is the spot colour.
 * - "Give me the gown"; "I put it in the pocket of my gown"; "Let me see, let
 *   me see; is not the leaf turn'd down Where I left reading?" So Brutus is in
 *   his gown, the kit's robe and loose mantle ('unbraced'), with his book in
 *   his hand.
 * - "Enter the Ghost of Caesar." "It comes upon me. Art thou anything? ...
 *   That mak'st my blood cold and my hair to stare? Speak to me what thou
 *   art." "Thy evil spirit, Brutus." So the Ghost stands in the door, and
 *   Brutus has risen from his book and starts back, his hand up and open
 *   towards it. The Ghost is Caesar as the kit cuts him, in his toga and
 *   wreath, cut with `stone`: a pale figure and nothing more, never a wound.
 *   Unlike a statue it has an eye, because it looks at Brutus and speaks.
 * - "[Lucius plays and sings till he falls asleep.]"; "If thou dost nod, thou
 *   break'st thy instrument; I'll take it from thee". So Lucius, the boy,
 *   sleeps where he sat to play, slumped over a chest, his instrument set
 *   down beside him. Nobody but Brutus sees the Ghost: "Didst thou see
 *   anything?" "Nothing, my lord."
 *
 * The play does not say what the instrument is, only that it has strings
 * ("The strings, my lord, are false"); it is cut as a small lyre, the
 * stringed instrument of Brutus's Rome.
 *
 * LEFT OUT, and why. Varro and Claudius sleep in the tent too ("[Servants lie
 * down.]"); drawn lying flat on the ground under their cloaks they read, at a
 * glance, as two bodies, so they are left to the words. Cassius is not drawn:
 * he has gone ("Exeunt Cassius, Titinius and Messala") before the Ghost
 * comes. Portia's death, told earlier in the scene, is left to the words, and
 * Brutus's hair "to stare" too: cut as bristles standing off his head, it read
 * as a crown. Nothing is taken from a film or stage production. Seeds: 1201
 * (the canvas and the ground), 1202 (the taper's light).
 */

const W = 860
const H = 340
/** Where the ground meets the back of the tent. */
const BACK = 264
/** The taper's flame, on its stand. */
const TAPER: P = [548, 150]
/** The door of the tent, its flaps tied back on the night. */
const DOOR = 'M640 274L664 140L714 62L764 140L788 274Z'

type Marks = {
  canvas: string
  roof: string
  ground: string
  glow: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  const r = rng(1201)
  const light = (x: number, y: number) =>
    Math.max(clamp(1 - Math.hypot((x - TAPER[0]) * 0.75, (y - TAPER[1]) * 1.1) / 330) * 0.95, 0.04)
  // the canvas: upright cuts, the cloth hanging in folds, lit by the taper
  let canvas = ''
  for (let x = 4; x < W; x += between(r, 5.6, 8)) {
    // each fold runs most of the height, broken once or twice, and is cut
    // wider where the taper's light falls on it
    let y = 64 + between(r, 0, 10)
    while (y < BACK - 6) {
      const len = between(r, 60, 150)
      const y1 = Math.min(y + len, BACK - 3)
      const L = light(x, (y + y1) / 2)
      if (r() < 0.25 + L * 0.75)
        canvas += gouge(x, y, x + between(r, -1.4, 1.4), y1, 0.35 + L * 2.6, between(r, -1.2, 1.2))
      y = y1 + between(r, 4, 12)
    }
  }
  // the roof, rising into the dark above the walls
  let roof = ''
  for (let k = 0; k < 24; k++) {
    const x = -60 + k * 42
    const L = light(x, 40)
    roof += gouge(x, 60, 470 + (x - 470) * 0.3, -6, 0.4 + L * 1.8, between(r, -1, 1))
  }
  let ground = ''
  for (let y = BACK + 5; y < H; y += 5.5) {
    let x = between(r, -20, 0)
    while (x < W) {
      const len = between(r, 18, 60)
      const L = light(x + len / 2, y - 90) * 0.75
      if (r() < 0.12 + L) ground += gouge(x, y, x + len, y + between(r, -0.5, 0.5), 0.3 + L * 1.8)
      x += len + between(r, 6, 24)
    }
  }
  const glow = rays(rng(1202), TAPER[0], TAPER[1] - 7, { from: 9, to: 52, every: 7.5, width: 2.4 })
  cached = { canvas, roof, ground, glow }
  return cached
}

/** The flaps of the door, gathered back to each side and tied. */
const FLAP_L = 'M640 274L664 140L714 62L700 92C690 118 680 150 680 176C680 204 672 238 664 274Z'
const FLAP_R = 'M788 274L764 140L714 62L728 92C738 118 748 150 748 176C748 204 756 238 764 274Z'
const FLAP_CUTS =
  gouge(662, 150, 660, 268, 1.3, 1.2) +
  gouge(672, 128, 668, 172, 1.1, 0.8) +
  gouge(686, 104, 676, 150, 1, 0.6) +
  gouge(766, 150, 768, 268, 1.3, -1.2) +
  gouge(756, 128, 760, 172, 1.1, -0.8) +
  gouge(742, 104, 752, 150, 1, -0.6)

/** The chest Lucius sleeps over, and his lyre against it. */
const CHEST = 'M58 252H212V318H58Z'
const CHEST_LID = 'M52 244H218L214 254H56Z'
const LYRE_BOX =
  'M226 300C226 292 236 288 250 288C264 288 274 292 274 300L272 312C266 318 234 318 228 312Z'
const LYRE_ARMS =
  'M232 292C226 280 220 266 224 254C226 248 232 246 236 250L232 254C230 262 234 276 238 290ZM268 292C274 280 280 266 276 254C274 248 268 246 264 250L268 254C270 262 266 276 262 290Z'

function QuarrelGriefGhost({ uid }: ArtProps) {
  const m = marks()
  const id = { chest: `${uid}-chest` }
  return (
    <>
      <defs>
        <clipPath id={id.chest}>
          <rect x={0} y={0} width={W} height={300} />
        </clipPath>
      </defs>
      <g className="lc-push" style={timing({ origin: [600, 200], push: 1.03 })}>
        {/* the tent: its roof, its canvas lit by the taper, and the ground */}
        <path d={m.roof} fill={PAPER} />
        <rect x={0} y={58} width={W} height={4} fill={PAPER} />
        <path d={m.canvas} fill={PAPER} />
        <path
          d="M108 62V264M262 62V264M416 62V264M570 62V264M824 62V264"
          stroke={INK}
          strokeWidth={2.6}
        />
        <path d={m.ground} fill={PAPER} />
        <rect x={0} y={BACK} width={W} height={2} fill={PAPER} />

        {/* the door, open on the night, its flaps tied back */}
        <path d={DOOR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={FLAP_L} fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path d={FLAP_R} fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path d={FLAP_CUTS} fill={PAPER} />
        <path
          d="M676 178C670 174 670 168 678 166M752 178C758 174 758 168 750 166"
          stroke={PAPER}
          strokeWidth={2}
          fill="none"
        />

        {/* the Ghost of Caesar, a pale figure in the door */}
        <Person pose={{ look: 'caesar', eye: 'open' }} at={[716, 306]} scale={1.08} flip stone />

        {/* Lucius asleep over the chest, only his head and shoulders above it, his lyre set down beside him */}
        <g clipPath={`url(#${id.chest})`}>
          <g transform="translate(134 330) rotate(24 0 -100)">
            <Person
              pose={{
                look: 'lucius',
                eye: 'shut',
                head: { rot: 30 },
                near: {
                  pts: [
                    [4, -128],
                    [18, -106],
                    [34, -118],
                  ],
                  hand: 'mitt',
                },
              }}
              at={[0, 0]}
              scale={1.16}
            />
          </g>
        </g>
        <path d={CHEST_LID} fill={INK} stroke={PAPER} strokeWidth={1.4} />
        <path d={CHEST} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
        <path d={gouge(70, 268, 200, 268, 1.3) + gouge(70, 300, 200, 300, 1.3)} fill={PAPER} />
        <path d="M128 276H142V288H128Z" fill="none" stroke={PAPER} strokeWidth={1.4} />
        <g transform="rotate(-14 250 316)">
          <path d={LYRE_ARMS} fill={INK} stroke={PAPER} strokeWidth={1.4} />
          <path d="M228 256H272" stroke={PAPER} strokeWidth={5.4} strokeLinecap="round" />
          <path d="M228 256H272" stroke={INK} strokeWidth={3} strokeLinecap="round" />
          <path d={LYRE_BOX} fill={INK} stroke={PAPER} strokeWidth={1.6} />
          <path
            d="M241 258V300M247 258V302M253 258V302M259 258V300"
            stroke={PAPER}
            strokeWidth={1}
          />
        </g>

        {/* the taper on its stand, burning low */}
        <path d={m.glow} fill={PAPER} />
        <path d={`M${TAPER[0]} ${TAPER[1] + 24}V300`} stroke={INK} strokeWidth={4.4} />
        <path d={`M${TAPER[0]} ${TAPER[1] + 24}V300`} stroke={PAPER} strokeWidth={1} />
        <path
          d={`M${TAPER[0] - 16} 304L${TAPER[0]} 296L${TAPER[0] + 16} 304Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <path
          d={`M${TAPER[0] - 9} ${TAPER[1] + 22}H${TAPER[0] + 9}L${TAPER[0] + 6} ${TAPER[1] + 26}H${TAPER[0] - 6}Z`}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1}
        />
        <rect
          x={TAPER[0] - 3.4}
          y={TAPER[1] + 2}
          width={6.8}
          height={20}
          fill={PAPER}
          stroke={INK}
          strokeWidth={0.8}
        />
        <path
          className="lc-flicker"
          d={`M${TAPER[0] + 1} ${TAPER[1] + 2}C${TAPER[0] - 3} ${TAPER[1] - 1} ${TAPER[0] - 5} ${TAPER[1] - 5} ${TAPER[0] - 8} ${TAPER[1] - 10}C${TAPER[0] - 1} ${TAPER[1] - 8} ${TAPER[0] + 4} ${TAPER[1] - 4} ${TAPER[0] + 1} ${TAPER[1] + 2}Z`}
          fill={RED}
        />

        {/* Brutus, risen from his book, starting back from it */}
        <g transform="rotate(-4 402 318)">
          <Person
            pose={{
              look: 'brutus',
              dress: 'unbraced',
              head: { rot: -4 },
              far: {
                pts: [
                  [-4, -130],
                  [-8, -106],
                  [4, -88],
                ],
                hand: 'grip',
                deg: 10,
              },
              near: {
                pts: [
                  [5, -130],
                  [24, -116],
                  [36, -132],
                ],
                hand: 'open',
                deg: -58,
                size: 20,
                spread: 28,
                thumb: -1,
              },
            }}
            at={[402, 318]}
            scale={1.16}
          >
            {/* the book in his other hand, open at its turned-down leaf */}
            <path d="M2 -84L18 -88L20 -78L4 -74Z" fill={PAPER} stroke={INK} strokeWidth={1} />
            <path d="M11 -86L12 -76" stroke={INK} strokeWidth={0.9} />
          </Person>
        </g>
      </g>
    </>
  )
}

export const quarrelGriefGhost: LinocutArt = { width: W, height: H, Draw: QuarrelGriefGhost }
