import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, LINE, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gouge, n, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  ARMS,
  engravedSky,
  FallenCrown,
  fieldMarks,
  MailPattern,
  SWORD_ALOFT,
  Warrior,
} from './dunsinane-kit'

/**
 * Act 5, Scene 8: "Macduff and Macbeth", the twenty-third and last moment in
 * the guide's timeline.
 *
 * SAFEGUARDING. The scene ends with "Enter Macduff, with Macbeth's head." The
 * style guide rules that Macbeth's severed head is never drawn, and neither is
 * the fight's end or his body. So the panel shows what comes after: the
 * victors, and the things Macbeth leaves on the field. Nothing in it is a
 * wound, and nobody is dead in the picture.
 *
 * Every detail is from the scene:
 *
 * - "Before my body / I throw my warlike shield. Lay on, Macduff." So
 *   Macbeth's round shield lies thrown down on the field in the foreground,
 *   with his sword beside it. His crown lies there too, in the spot colour.
 *   The text does not say where his crown ends up; it stands here for the
 *   king he no longer is, and for what Macduff carries in, which is never
 *   drawn. (The guide is careful that Malcolm is hailed, not crowned: he will
 *   be "crowned at Scone". So no one wears the crown in this panel.)
 * - "Retreat. Flourish. Enter, with drum and colours, Malcolm, Old Siward,
 *   Ross, the other Thanes, and Soldiers." The colours are the red banner the
 *   army marched under from Birnam (see ./birnam-wood.tsx).
 * - "Hail, King! For so thou art. [...] The time is free." "Hail, King of
 *   Scotland!" So Macduff, bearded and helmeted, raises his sword to Malcolm,
 *   and Siward, Ross and the thanes behind Malcolm raise theirs; Malcolm,
 *   young and bareheaded, lifts an open hand to receive it.
 * - The castle of Dunsinane stands on its hill behind, taken.
 *
 * The panel's quotation, "this dead butcher and his fiend-like queen", is
 * Malcolm's verdict in this same speech. Nothing is taken from a film or stage
 * production. Seeds: 2301 (sky), 2302 (field).
 */

const W = 860
const H = 340
const HORIZON = 226

/** Dunsinane on its hill, behind on the left. */
const HILL = 'M-6 206C30 188 70 164 120 156C170 150 214 166 250 190C272 204 290 214 318 226H-6Z'
const CASTLE =
  'M58 160V112H52V96H58V100H64V96H70V100H76V96H82V112H78V122H114V92H108V76H114V80H120V76H126V80H132V76H138V92H132V122H166V112H162V96H168V100H174V96H180V100H186V96H192V112H186V160Z'
const GATE = 'M112 160V142C112 136 116 132 122 132C128 132 132 136 132 142V160Z'

/** Macbeth's shield, thrown down: an oval seen from low down, and its boss. */
const SHIELD = { cx: 210, cy: 298, rx: 60, ry: 20 }
/** His sword in front of it: the point to the left, the hilt to the right. */
const SWORD_BLADE = 'M112 330L276 310L277 315.4L114 332.6Z'
const SWORD_GUARD = 'M275 303.6L279.4 321.4'
const SWORD_GRIP = 'M278 312.4L298 310'

/** The victors: Macduff in front, Malcolm facing him, the thanes behind Malcolm. */
const MACDUFF: [number, number, number] = [392, 322, 1]
const MALCOLM: [number, number, number] = [522, 312, 0.96]
const THANES: { at: [number, number]; s: number; head: 'old' | 'beard' }[] = [
  { at: [690, 280], s: 0.78, head: 'beard' },
  { at: [628, 290], s: 0.84, head: 'old' },
]
const BANNER: [number, number, number] = [748, 274, 0.72]
const PENNANT = 'M-25 -336L24 -326L8 -318L26 -308L-25 -302Z'

type Marks = {
  sky: string
  hill: string
  field: string
  shadow: string
  crownShadow: string
}

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // darker over the castle, clearing towards the victors on the right
  const sky = engravedSky(rng(2301), { x0: 0, x1: W, y0: 0, y1: HORIZON - 18 }, (x, y) =>
    clamp(0.86 - y / 240 - x / 1300),
  )
  let hill = ''
  for (let x = -10; x < 340; x += 3) hill += `M${n(x)} 150L${n(x - 26)} 230`
  const field = fieldMarks(rng(2302), { x0: 0, x1: W, y0: HORIZON + 4, y1: H - 4 }, 90)
  const crownShadow = gouge(300, 328, 366, 326, 2.2) + gouge(306, 332.6, 360, 331, 1.5)
  let shadow = ''
  for (let k = 0; k < 4; k++)
    shadow += gouge(
      SHIELD.cx - SHIELD.rx + k * 4,
      SHIELD.cy + SHIELD.ry + 2 + k * 2.4,
      SHIELD.cx + SHIELD.rx + 8 - k * 6,
      SHIELD.cy + SHIELD.ry + 1 + k * 2.4,
      1.6 - k * 0.3,
    )
  cached = { sky, hill, field, shadow, crownShadow }
  return cached
}

/** A sword aloft, drawn as `held` in the `aloft` fist, with its own carved edge. */
const Aloft = (
  <>
    <path d={SWORD_ALOFT} fill={INK} stroke={PAPER} strokeWidth={2.4} paintOrder="stroke" />
    <path d="M-25 -240V-292" stroke={PAPER} strokeWidth={0.9} />
  </>
)

function MacduffAndMacbeth({ uid }: ArtProps) {
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
      <g className="lc-push" style={timing({ origin: [460, 200], push: 1.03 })}>
        {/* the sky over the field, clearing to the right */}
        <rect x={0} y={0} width={W} height={HORIZON + 2} fill={PAPER} />
        <path d={m.sky} fill={INK} />

        {/* Dunsinane on its hill, taken */}
        <path d={HILL} fill={PAPER} />
        <g clipPath={`url(#${id.hill})`}>
          <path d={m.hill} stroke={INK} strokeWidth={LINE.fine} />
        </g>
        <path d={HILL} fill="none" stroke={INK} strokeWidth={1.8} />
        <path d={CASTLE} fill={INK} stroke={PAPER} strokeWidth={1.2} strokeLinejoin="round" />
        <path d={GATE} fill={PAPER} />
        <path
          d="M68 128V138M176 128V138M123 96V106M92 136V144M150 136V144"
          stroke={PAPER}
          strokeWidth={1.8}
        />

        {/* the field */}
        <rect x={0} y={HORIZON} width={W} height={H - HORIZON} fill={PAPER} />
        <path d={`M318 ${HORIZON}H${W}`} stroke={INK} strokeWidth={1.4} />
        <path d={m.field} fill={INK} />

        {/* the thanes behind Malcolm raise their swords, under the colours */}
        <Warrior
          uid={uid}
          at={[bx, by]}
          scale={bs}
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
        {THANES.map(({ at, s, head }) => (
          <Warrior
            key={at[0]}
            uid={uid}
            at={at}
            scale={s}
            look={{ head, wear: 'helm', cloak: true }}
            arms={ARMS.aloft}
            held={Aloft}
          />
        ))}

        {/* Malcolm, hailed King of Scotland */}
        <Warrior
          uid={uid}
          at={[MALCOLM[0], MALCOLM[1]]}
          scale={MALCOLM[2]}
          look={{ head: 'young', wear: 'bare', cloak: true, hilt: true }}
          arms={ARMS.greet}
        />

        {/* Macduff: "Hail, King! For so thou art." */}
        <Warrior
          uid={uid}
          at={[MACDUFF[0], MACDUFF[1]]}
          scale={MACDUFF[2]}
          flip
          look={{ head: 'beard', wear: 'helm', cloak: true }}
          arms={ARMS.aloft}
          held={Aloft}
        />

        {/* what Macbeth left on the field: his shield, his sword, his crown */}
        <path d={m.shadow} fill={INK} />
        <ellipse
          cx={SHIELD.cx}
          cy={SHIELD.cy}
          rx={SHIELD.rx}
          ry={SHIELD.ry}
          fill={INK}
          stroke={PAPER}
          strokeWidth={LINE.carve}
        />
        <ellipse
          cx={SHIELD.cx}
          cy={SHIELD.cy - 1}
          rx={SHIELD.rx - 6}
          ry={SHIELD.ry - 3.4}
          fill="none"
          stroke={PAPER}
          strokeWidth={1.2}
        />
        <ellipse
          cx={SHIELD.cx + 2}
          cy={SHIELD.cy - 3}
          rx={8}
          ry={4}
          fill={INK}
          stroke={PAPER}
          strokeWidth={1.4}
        />
        <path
          d={
            gouge(SHIELD.cx - 30, SHIELD.cy - 4, SHIELD.cx - 12, SHIELD.cy - 9, 1.2) +
            gouge(SHIELD.cx + 16, SHIELD.cy + 8, SHIELD.cx + 32, SHIELD.cy + 3, 0.9)
          }
          fill={PAPER}
        />
        <path d={SWORD_BLADE} fill={INK} stroke={PAPER} strokeWidth={2.4} paintOrder="stroke" />
        <path d="M130 329.4L270 312.8" stroke={PAPER} strokeWidth={0.9} />
        <path d={SWORD_GUARD} stroke={PAPER} strokeWidth={6.4} strokeLinecap="round" />
        <path d={SWORD_GUARD} stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
        <path d={SWORD_GRIP} stroke={PAPER} strokeWidth={6.4} strokeLinecap="round" />
        <path d={SWORD_GRIP} stroke={INK} strokeWidth={3.6} strokeLinecap="round" />
        <circle cx={300.4} cy={309.8} r={4} fill={INK} stroke={PAPER} strokeWidth={1.2} />
        <path d={m.crownShadow} fill={INK} />
        <FallenCrown at={[330, 302]} scale={1.45} />
      </g>
    </>
  )
}

export const macduffAndMacbeth: LinocutArt = { width: W, height: H, Draw: MacduffAndMacbeth }
