import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import {
  arc,
  between,
  clamp,
  deg,
  n,
  ribbon,
  rng,
  type Pt,
} from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import {
  DRESS,
  DRESS_NECK,
  inside,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  spline,
  WOMAN_EYE,
  WOMAN_HEAD,
  WomanFace,
  WomanNeckShadow,
  type SP,
} from './common'

/**
 * Daisy Buchanan, as Nick hears and sees her when he first calls at the
 * Buchanans' house in East Egg, in Chapter I:
 *
 *   "I looked back at my cousin, who began to ask me questions in her low,
 *   thrilling voice. It was the kind of voice that the ear follows up and
 *   down, as if each speech is an arrangement of notes that will never be
 *   played again. Her face was sad and lovely with bright things in it,
 *   bright eyes and a bright passionate mouth, but there was an excitement in
 *   her voice that men who had cared for her found difficult to forget"
 *
 * and, from the same evening, "They were both in white" (Chapter I); her hair
 * from Chapter VIII, "her dark shining hair".
 *
 * So: a young woman in profile, facing right, speaking; her voice cut in
 * paper as two short arcs at her lips and then a line that rises and falls
 * away from her across the dark, as the ear follows it, with a few small
 * notes on it; her face lit and still, the mouth level, the eye open and
 * bright, with a glint cut in it. Her hair is dark and shining, short and
 * waved to the jaw over the ear, the bob of 1922, as the figure kit
 * (../panels/people.tsx) cuts DAISY_HAIR; the shine is cut across its crown
 * where the light falls. Her dress is white, cut in paper with a plain round
 * neck. The light is the last sunshine of the evening, in front of her ("the
 * last sunshine fell with romantic affection upon her glowing face", Chapter
 * I). Her "bright passionate mouth" is left to the words: nothing is printed
 * on her lips. Nothing here comes from a film or stage production, and there
 * is no red in this plate.
 *
 * Seeds: 6201 (the ground), 6202 (the hair), 6203 (the dress), 6204 (the
 * voice).
 */

const P = placing(16, 20, 1.04)

/** Dark hair, short and waved to the jaw over the ear, a wave across the temple. */
const HAIR_PTS: SP[] = [
  [162, 60, 1],
  [156, 63],
  [146, 69],
  [137, 79],
  [131, 91],
  [126, 104],
  [122, 118],
  [120, 134],
  [121, 148],
  [125, 158, 1],
  [112, 163],
  [96, 166],
  [78, 168],
  [58, 165],
  [44, 157],
  [37, 136],
  [38, 104],
  [50, 70],
  [74, 44],
  [106, 28],
  [136, 28],
  [154, 40],
  [161, 50],
]
const HAIR = spline(HAIR_PTS)

/** Where her voice runs, in the portrait's own frame: away from her lips, up and down. */
function voiceLine(): Pt[] {
  const [x0, y0] = P.to(184, 141)
  const pts: Pt[] = []
  for (let i = 0; i <= 40; i++) {
    const t = i / 40
    const x = x0 + t * (312 - x0)
    pts.push([x, y0 - t * 30 - Math.sin(t * Math.PI * 2.5) * (4 + t * 13)])
  }
  return pts
}

const marks = once(() => {
  const ground = portraitGround('gg-daisy', 6201, (x, y) =>
    clamp(0.12 + ((x - 60) / 260) * 0.85 - Math.max(0, (y - 250) / 240)),
  )
  const r = rng(6202)
  const poly = HAIR_PTS.map(([x, y]): Pt => [x, y])
  // The waves of 1922: crests that ripple across the side of the head from
  // front to back, one above another, cut in paper; widest across the crown,
  // towards the light, where the hair shines ("her dark shining hair").
  let hair = ''
  for (let row = 0; row < 12; row++) {
    const y0 = 40 + row * 10.6 + between(r, -1.5, 1.5)
    const phase = row * 1.9
    const line: Pt[] = []
    for (let x = 166; x > 30; x -= 3) {
      const u = (166 - x) / 136
      line.push([x, y0 + u * 9 + Math.sin(x / 9 + phase) * 3.4])
    }
    let run: Pt[] = []
    const flush = () => {
      if (run.length > 3) {
        const mid = run[Math.floor(run.length / 2)]
        const shine = clamp(1 - Math.abs(mid[1] - 64) / 40) * clamp((mid[0] - 40) / 100)
        hair += ribbon(run, between(r, 0.9, 1.3) * (1 + shine * 1.9), 0.7)
      }
      run = []
    }
    for (const p of line) {
      if (inside(poly, p[0], p[1])) run.push(p)
      else flush()
    }
    flush()
  }
  // The soft folds of a white dress, falling from the neck and the shoulders.
  const rd = rng(6203)
  let folds = ''
  for (const [x, y, bend] of [
    [40, 262, -8],
    [62, 252, -6],
    [92, 248, -3],
    [150, 246, 3],
    [178, 252, 6],
    [204, 264, 8],
  ] as [number, number, number][]) {
    const x1 = x + bend * 1.6 + between(rd, -3, 3)
    folds += `M${n(x)} ${n(y)}Q${n(x + bend)} ${n((y + 336) / 2)} ${n(x1)} 336`
  }
  // Her voice: a fine paper line rising and falling away from her, and small
  // notes along it.
  const pts = voiceLine()
  const rv = rng(6204)
  const voice = ribbon(pts, 3, 0.6, true)
  let notes = ''
  for (const i of [12, 24, 33]) {
    const [x, y] = pts[i]
    const s = between(rv, 3.2, 3.8)
    notes += `M${n(x - s)} ${n(y - 9)}a${n(s)} ${n(s * 0.78)} 0 1 0 ${n(2 * s)} 0a${n(s)} ${n(s * 0.78)} 0 1 0 ${n(-2 * s)} 0Z`
  }
  // The first sound of it, close to her lips: three short arcs.
  const [vx, vy] = P.to(176, 141)
  let sound = ''
  for (const rad of [5, 9.5]) sound += arc(vx - 2, vy, rad, deg(-40), deg(40))
  return { ground, hair, folds, voice, notes, sound }
})

function DaisyFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-gg-daisy-hair`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={HAIR} />
        </clipPath>
      </defs>
      {/* The ink halo that lifts the white figure off the lit ground. */}
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={WOMAN_HEAD} />
        <path d={HAIR} />
        <path d={DRESS} />
      </g>
      {/* "They were both in white" */}
      <path d={DRESS} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path
        d={m.folds}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <path d={WOMAN_HEAD} fill={PAPER} />
      <WomanNeckShadow id={`${uid}-gg-daisy`} />
      <path d={DRESS_NECK} fill="none" stroke={INK} strokeWidth={1.4} strokeLinecap="round" />
      <path
        d={`${DRESS_NECK}M70 228C90 248 124 252 150 232M14 286C30 280 44 284 56 296`}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.fine}
        strokeLinecap="round"
      />
      <path d={HAIR} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} strokeLinejoin="round" />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <WomanFace eye="open" />
      <path
        d="M156.6 91.6L158.2 88.6M159.6 92.6L162 90M153.2 91.2L154 88.2"
        fill="none"
        stroke={INK}
        strokeWidth={0.9}
        strokeLinecap="round"
      />
      {/* "bright eyes": a glint cut in the dark of the eye */}
      <circle cx={154.5} cy={95.3} r={0.95} fill={PAPER} />
    </g>
  )
}

function DaisyPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <DaisyFigure uid={uid} />
      </g>
      {/* "the kind of voice that the ear follows up and down": it flows out
          from her lips, fading in as it goes */}
      <g className="lc-fade-in" style={timing({ delay: 0.5, dur: 1.4 })}>
        <g className="lc-drift" style={timing({ delay: 0.5 })}>
          <path d={m.sound} fill="none" stroke={PAPER} strokeWidth={1.6} strokeLinecap="round" />
          <path d={m.voice} fill={PAPER} />
          <path d={m.notes} fill={PAPER} />
        </g>
      </g>
      <PortraitRule />
    </>
  )
}

export const daisyBuchananArt: LinocutArt = { width: PW, height: PH, Draw: DaisyPortrait }

const VOICE = voiceLine()[22]
const CHEEK = P.to(140, 124)
const EYE = P.to(WOMAN_EYE[0] + 8, WOMAN_EYE[1])

export const daisyBuchanan: Portrait = {
  name: 'Daisy Buchanan',
  art: daisyBuchananArt,
  alt: "A linocut portrait of Daisy Buchanan in profile, facing right, drawn from Fitzgerald's description in Chapter I: a young woman with a lit, still face, her eye open and bright with a glint in it, and her dark hair short and waved to the jaw over her ear, shining across the crown where the light falls. She wears a white dress with a plain round neck. In front of her lips, three short curved lines and a fine pale line carry her voice away from her across the dark, rising and falling, with small notes along it. Three numbered red markers point to her voice, her face and her eye.",
  describedBy: [
    {
      phrase: 'the kind of voice that the ear follows up and down',
      at: [VOICE[0], VOICE[1] + 22],
      to: [VOICE[0], VOICE[1] + 4],
    },
    { phrase: 'Her face was sad and lovely with bright things in it', at: CHEEK },
    { phrase: 'bright eyes', at: [EYE[0] + 70, EYE[1]], to: EYE },
  ],
  where: 'Chapter I',
  passage:
    'I looked back at my cousin, who began to ask me questions in her low, thrilling voice. It was the kind of voice that the ear follows up and down, as if each speech is an arrangement of notes that will never be played again. Her face was sad and lovely with bright things in it, bright eyes and a bright passionate mouth, but there was an excitement in her voice that men who had cared for her found difficult to forget: a singing compulsion, a whispered “Listen,” a promise that she had done gay, exciting things just a while since and that there were gay, exciting things hovering in the next hour.',
  note: 'Nick describes Daisy’s voice before her face, and he keeps coming back to it. In Chapter VII Gatsby names what is in it: “Her voice is full of money.”',
  artNote:
    'Her dark, shining hair is from Chapter VIII and her white dress from Chapter I (“They were both in white”), as the panels draw them. Her “bright passionate mouth” is left to the words.',
}
