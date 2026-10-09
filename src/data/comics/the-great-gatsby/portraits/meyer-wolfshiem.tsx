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
 * Meyer Wolfshiem, at lunch with Gatsby and Nick in a cellar restaurant on
 * Forty-second Street, in Chapter IV.
 *
 * DRAWN LIKE EVERY OTHER MAN, AND NEVER AS THE NOVEL'S CARICATURE. Many
 * readers find Fitzgerald's description of Wolfshiem an antisemitic
 * stereotype (the guide says so, and that the best answers comment on it).
 * That
 * description is not drawn or quoted here, nor are his cufflinks, nor the
 * way the novel spells his speech. His head is MAN_HEAD, every man's head in
 * these portraits, cut exactly as Nick's is: the same brow, nose, mouth, eye
 * and ear, nothing enlarged or changed. Nothing marks him out but what the
 * figure kit (../panels/people.tsx) gives him from his own words, his age:
 *
 *   "As for me, I am fifty years old, and I won't impose myself on you any
 *   longer."
 *
 * so a little grey is cut in his dark hair at the temple and over the ear,
 * and two fine lines on his forehead. The markers point only at what he says
 * and does, and what Gatsby says of him:
 *
 *   "When the subject of this instinctive trust returned to the table and sat
 *   down Mr. Wolfshiem drank his coffee with a jerk and got to his feet."
 *   "He's the man who fixed the World's Series back in 1919."
 *
 * So: a man of fifty in profile, facing right, in the plain dark suit of 1922
 * with a white collar and a dark tie, at the restaurant table, his coffee cup
 * on its saucer in front of him. The cellar is dim, lit from the right.
 * Nothing here comes from a film or stage production, and there is no red in
 * this plate.
 *
 * Seeds: 6901 (the ground), 6902 (the hair), 6903 (the grey), 6904 (the shade
 * down the back of the neck), 6905 (the table).
 */

const P = placing(4, 22, 1)

/** The grey at the temple and over the ear, in the frame of MAN_HEAD. */
const GREY_AT = { x: 116, y: 100 }

/** The table's edge, the cup and its saucer, in the portrait's own frame. */
const TABLE = 'M168 270L320 262L320 320L168 320Z'
const SAUCER = 'M232 268C232 262 290 262 290 268C290 274 232 274 232 268Z'
const CUP = 'M240 236L282 236C282 254 272 266 261 266C250 266 240 254 240 236Z'
const HANDLE = 'M281 242C292 240 296 252 284 256'

const marks = once(() => {
  const ground = portraitGround('gg-wolfshiem', 6901, (x, y) =>
    clamp(0.06 + ((x - 60) / 260) * 0.75 - Math.max(0, (y - 230) / 260)),
  )
  const hair = combedBack(6902, MAN_HAIR_PTS, 24, [0.7, 1.5], {
    light: (x, y) => clamp(0.2 + (x - 60) / 120 - (y - 40) / 260),
  })
  // "I am fifty years old": grey strands cut at the temple and over the ear.
  const r = rng(6903)
  let grey = ''
  for (let i = 0; i < 26; i++) {
    const t = i / 25
    const x0 = 136 - t * 40 + between(r, -1.5, 1.5)
    const y0 = 82 + t * 20 + between(r, -1.5, 1.5)
    grey += gouge(x0, y0, x0 - between(r, 14, 22), y0 + between(r, 2, 6), between(r, 1.3, 2), 1)
  }
  // Two fine lines across the forehead, and the fold from the nose.
  const lines = 'M142 66Q151 63.6 160 66.4M143 74Q151.6 72 160.6 74.4'
  const back = neckShade(6904)
  // The polished table: its edge, and the shine broken where the cup stands.
  const rt = rng(6905)
  let table = ''
  for (let y = 278; y < 316; y += 5.5) {
    let x = 174 + between(rt, 0, 8)
    while (x < 314) {
      const len = between(rt, 12, 34)
      const end = Math.min(x + len, 314)
      if (end < 228 || x > 294)
        table += gouge(x, y, end, y + between(rt, -0.4, 0.4), between(rt, 0.5, 1.2))
      x += len + between(rt, 6, 14)
    }
  }
  return { ground, hair, grey, lines, back, table }
})

function WolfshiemFigure({ uid }: { uid: string }) {
  const m = marks()
  const hairClip = `${uid}-gg-wolfshiem-hair`
  const headClip = `${uid}-gg-wolfshiem-head`
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
      <NeckShadow id={`${uid}-gg-wolfshiem`} />
      <g clipPath={`url(#${headClip})`} fill="none" stroke={INK} strokeLinecap="round">
        <path d={m.back} strokeWidth={1.5} />
        <path d={m.lines} strokeWidth={LINE.hairline} />
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
        <path d={m.grey} fill={PAPER} />
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

function WolfshiemPortrait({ uid }: ArtProps) {
  const m = marks()
  return (
    <>
      <path d={m.ground} fill={PAPER} />
      <g transform={P.transform}>
        <WolfshiemFigure uid={uid} />
      </g>
      {/* the restaurant table, and his coffee cup on its saucer */}
      <path d={TABLE} fill={INK} stroke={INK} strokeWidth={8} strokeLinejoin="round" />
      <path d={m.table} fill={PAPER} />
      <path d="M168 270L320 262" fill="none" stroke={PAPER} strokeWidth={LINE.bold} />
      <path d={SAUCER} fill={PAPER} stroke={INK} strokeWidth={1.6} />
      <path d={HANDLE} fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <path d={HANDLE} fill="none" stroke={PAPER} strokeWidth={2.6} strokeLinecap="round" />
      <path d={CUP} fill={PAPER} stroke={INK} strokeWidth={1.8} strokeLinejoin="round" />
      <path d="M240 236C240 232 282 232 282 236C282 240 240 240 240 236Z" fill={INK} />
      <path
        d={`M${n(247)} 244Q${n(248)} 254 ${n(254)} 260`}
        fill="none"
        stroke={INK}
        strokeWidth={LINE.hairline}
        strokeLinecap="round"
      />
      <PortraitRule />
    </>
  )
}

export const meyerWolfshiemArt: LinocutArt = { width: PW, height: PH, Draw: WolfshiemPortrait }

const GREY = P.to(GREY_AT.x - 18, GREY_AT.y - 6)
const LAPEL = P.to(104, 262)

export const meyerWolfshiem: Portrait = {
  name: 'Meyer Wolfshiem',
  art: meyerWolfshiemArt,
  alt: 'A linocut portrait of Meyer Wolfshiem in profile, facing right, drawn as plainly as every other man in these portraits: a man of fifty with dark hair combed back, a little grey cut into it at the temple and over the ear, and two fine lines on his forehead. He wears a dark suit with a white collar and a dark tie, and sits at a restaurant table with a coffee cup on its saucer in front of him. Three numbered red markers point to the grey in his hair, the coffee cup and his suit.',
  describedBy: [
    { phrase: 'I am fifty years old', at: [GREY[0] - 54, GREY[1]], to: GREY },
    { phrase: 'drank his coffee with a jerk', at: [304, 226], to: [284, 236] },
    { phrase: 'He’s the man who fixed the World’s Series back in 1919.', at: LAPEL },
  ],
  where: 'Chapter IV',
  note: 'Gatsby introduces Wolfshiem as his friend and, once he has gone, as the man who fixed the 1919 World’s Series. In Chapter IX Wolfshiem claims he made Gatsby, “right out of the gutter”, and he does not come to the funeral.',
  artNote:
    'Many readers find the novel’s description of Wolfshiem an antisemitic stereotype, so it is not drawn here: his head is cut as every other man’s is, and the markers point only at what he says and does. The grey at his temple is for the age he gives himself, as the panels draw it.',
}
