import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'

import {
  COLLAR,
  combedBack,
  EarCut,
  JACKET,
  LAPEL_FAR,
  LAPEL_NEAR,
  MAN_CHEEK,
  MAN_EAR,
  MAN_HAIR,
  MAN_HAIR_PTS,
  MAN_HEAD,
  ManBrow,
  ManEye,
  ManNoseAndMouth,
  NeckShadow,
  neckShade,
  once,
  PH,
  placing,
  portraitGround,
  PortraitRule,
  PW,
  SHIRT_V,
  TIE,
  TIE_KNOT,
} from './common'

/**
 * Nick Carraway, at the window of Tom and Myrtle's flat high over 158th
 * Street, in Chapter II:
 *
 *   "Yet high over the city our line of yellow windows must have contributed
 *   their share of human secrecy to the casual watcher in the darkening
 *   streets, and I saw him too, looking up and wondering. I was within and
 *   without, simultaneously enchanted and repelled by the inexhaustible
 *   variety of life."
 *
 * Nick never describes his own face or build; he tells us only where he
 * stands. So he is drawn plainly, as the figure kit draws him
 * (../panels/people.tsx): a man of thirty with short dark hair, in a dark
 * suit of 1922, a white collar and a dark tie, in profile, facing right,
 * looking out. Behind him the room is lit; in front of him is its window, its
 * sash bar and frame cut in ink; through it, the darkening city: the last
 * light in the sky, a dark block opposite with its windows lit, and far down
 * in the street, under a lamp, one small figure with its face turned up to
 * the windows. The yellow of the windows is left to the words: they are cut
 * in paper. Nothing here comes from a film or stage production, and there is
 * no red in this plate.
 *
 * Seeds: 6801 (the ground), 6802 (the hair), 6803 (the city), 6804 (the shade
 * down the back of the neck).
 */

const P = placing(-10, 26, 0.98)

/** The window, in the portrait's own frame: its glass, sash bar and frame. */
const WIN = { x0: 190, x1: 316, y0: 18, y1: 306, rail: 150 }

/** The block across the street, its roofline, in the portrait's frame. */
const ROOF =
  'M192 98L214 98L214 88L236 88L236 100L262 100L262 82L274 82L274 100L300 100L300 92L318 92L318 252L192 252Z'
/** The street far below, and the lamp's pool of light on it. */
const STREET = 'M192 252L318 252L318 306L192 306Z'
/** The casual watcher: a small figure under the lamp, his face turned up. */
const WATCHER_AT: [number, number] = [262, 286]
const WATCHER =
  // head tipped back, looking up
  'M259.6 266.8a3.4 3.4 0 1 0 6.8 0a3.4 3.4 0 1 0 -6.8 0Z' +
  // a hat brim tipped back, and the body in a coat to the knee
  'M257.2 265.4L266.6 262.6L267.4 264.2L258.2 267Z' +
  'M258.4 271.6L266 271.2L268 286L256.6 286.4Z' +
  // legs
  'M258.6 286L261 286L260.8 296L258.4 296ZM263.4 286L265.8 286L266.4 296L264 296Z'
/** The lamp: its post and its globe. */
const LAMP = 'M236 258L238.6 258L238.6 300L236 300Z'

const marks = once(() => {
  // The room behind him is lit (from outside, its windows are the "line of
  // yellow windows"); the city beyond the glass is darkening.
  const ground = portraitGround('gg-nick', 6801, (x, y) =>
    x > WIN.x0 ? 0 : clamp(0.95 - (x - 20) / 400 - Math.max(0, (y - 230) / 300)),
  )
  // Plain short dark hair, the plainest in the gallery: no oil, no parting.
  const hair = combedBack(6802, MAN_HAIR_PTS, 18, [0.6, 1.1], {
    parting: false,
    light: (x, y) => clamp(0.3 + (x - 60) / 160 - (y - 40) / 300),
  })
  const r = rng(6803)
  // The last light in the sky: cuts widest low over the roofs.
  let sky = ''
  for (let y = WIN.y0 + 6; y < 100; y += 5.2) {
    let x = WIN.x0 + between(r, 0, 8)
    while (x < WIN.x1) {
      const len = between(r, 12, 34)
      const L = clamp((y - WIN.y0) / 80)
      sky += gouge(x, y, Math.min(x + len, WIN.x1), y + between(r, -0.4, 0.4), 0.3 + L * 2.2)
      x += len + between(r, 4, 10)
    }
  }
  // The windows of the block opposite, some lit.
  let lit = ''
  for (let row = 0; row < 6; row++)
    for (let col = 0; col < 5; col++) {
      if (r() < 0.45) continue
      const x = 200 + col * 23 + between(r, -1, 1)
      const y = 112 + row * 22
      lit += `M${n(x)} ${n(y)}h9v12h-9Z`
    }
  // The lamp's light on the pavement, in short cuts.
  let pool = ''
  for (let y = 292; y < 304; y += 4)
    for (let x = 212; x < 296; x += between(r, 8, 14))
      if (Math.abs(x - 248) < 44 - (y - 292)) pool += gouge(x, y, x + between(r, 4, 9), y, 1.2)
  const back = neckShade(6804)
  return { ground, hair, sky, lit, pool, back }
})

function NickFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-gg-nick-hair`
  const headClip = `${uid}-gg-nick-head`
  return (
    <g>
      <defs>
        <clipPath id={hairClip}>
          <path d={MAN_HAIR} />
        </clipPath>
        <clipPath id={headClip}>
          <path d={MAN_HEAD} />
        </clipPath>
      </defs>
      <g fill={INK} stroke={INK} strokeWidth={9} strokeLinejoin="round">
        <path d={MAN_HEAD} />
        <path d={MAN_HAIR} />
        <path d={JACKET} />
      </g>
      <path d={JACKET} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d={SHIRT_V} fill={PAPER} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
      <path
        d={LAPEL_NEAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path
        d={LAPEL_FAR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <path d={MAN_HEAD} fill={PAPER} />
      <NeckShadow id={`${uid}-gg-nick`} />
      <g clipPath={`url(#${headClip})`}>
        <path d={m.back} fill="none" stroke={INK} strokeWidth={1.5} strokeLinecap="round" />
      </g>
      <path
        d={MAN_HAIR}
        fill={INK}
        stroke={PAPER}
        strokeWidth={LINE.carve}
        strokeLinejoin="round"
      />
      <g clipPath={`url(#${hairClip})`}>
        <path d={m.hair} fill={PAPER} />
      </g>
      <EarCut outline={MAN_EAR.outline} curl={MAN_EAR.curl} />
      <ManBrow w={2.6} />
      <ManEye look="open" />
      <ManNoseAndMouth />
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} strokeLinejoin="round" />
      <path d={TIE_KNOT} fill={INK} stroke={PAPER} strokeWidth={1} strokeLinejoin="round" />
    </g>
  )
}

function NickPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      {/* Through the window: the sky, the block opposite, the street below. */}
      <path d={m.sky} fill={PAPER} />
      <path d={ROOF} fill={INK} />
      <path d={m.lit} fill={PAPER} />
      <path d={STREET} fill={INK} />
      <path d={m.pool} fill={PAPER} />
      <path d={LAMP} fill={PAPER} />
      <circle cx={237.3} cy={255} r={4.6} fill={PAPER} />
      {/* "the casual watcher in the darkening streets", looking up */}
      <path d={WATCHER} fill={PAPER} />
      {/* The window of the room: its frame and sash bar. */}
      <path
        d={`M${WIN.x0} ${WIN.y0}H${WIN.x1}V${WIN.y1}H${WIN.x0}Z`}
        fill="none"
        stroke={INK}
        strokeWidth={9}
      />
      <path
        d={`M${WIN.x0} ${WIN.y0}V${WIN.y1}M${WIN.x0} ${WIN.rail}H${WIN.x1}`}
        fill="none"
        stroke={PAPER}
        strokeWidth={11}
      />
      <path
        d={`M${WIN.x0} ${WIN.y0}V${WIN.y1}M${WIN.x0} ${WIN.rail}H${WIN.x1}`}
        fill="none"
        stroke={INK}
        strokeWidth={7}
      />
      <g transform={P.transform}>
        <NickFigure uid={uid} />
      </g>
      <PortraitRule />
    </>
  )
}

export const nickCarrawayArt: LinocutArt = { width: PW, height: PH, Draw: NickPortrait }

const CHEEK = P.to(MAN_CHEEK[0], MAN_CHEEK[1] - 4)
const SHOULDER = P.to(40, 268)

export const nickCarraway: Portrait = {
  name: 'Nick Carraway',
  art: nickCarrawayArt,
  alt: 'A linocut portrait of Nick Carraway, drawn from his own words in Chapter II: a man of thirty in profile, facing right, with short dark hair, in a dark suit, a white collar and a dark tie, standing in a lit room at its window and looking out. Through the window, framed by its dark sash bar, is the city at dusk: the last light in the sky, a dark block opposite with some of its windows lit, and far below in the street, under a lamp, one small figure with his face turned up towards the windows. Four numbered red markers point to the city below the window, the figure in the street, Nick himself and his face.',
  describedBy: [
    { phrase: 'high over the city', at: [WIN.x1 - 20, 196] },
    // The line comes level to his coat and stops before it. (It first rose
    // to the small figure's neck, the one way a marker never reaches a
    // figure, and at phone width it read as a red mark at his throat, 9
    // October 2026.)
    {
      phrase: 'the casual watcher in the darkening streets',
      at: [WATCHER_AT[0] + 36, WATCHER_AT[1] - 7],
      to: [WATCHER_AT[0] + 10, WATCHER_AT[1] - 7],
    },
    { phrase: 'I was within and without', at: SHOULDER },
    {
      phrase: 'simultaneously enchanted and repelled by the inexhaustible variety of life',
      at: CHEEK,
    },
  ],
  where: 'Chapter II',
  passage:
    'Yet high over the city our line of yellow windows must have contributed their share of human secrecy to the casual watcher in the darkening streets, and I saw him too, looking up and wondering. I was within and without, simultaneously enchanted and repelled by the inexhaustible variety of life.',
  note: 'At the party in the flat, Nick imagines a stranger in the street looking up at its lit windows, and sees himself in both places at once. That double place, a guest and a watcher, is where he stands to tell the whole novel.',
  artNote:
    'Nick never describes his own face or build, so he is drawn plainly, as the panels draw him: short dark hair and a dark suit of 1922. The yellow of the windows is left to the words.',
}
