import type { ArtProps, LinocutArt, Portrait } from '@/lib/comics/types'
import { INK, LINE, PAPER } from '@/components/comics/linocut/palette'
import { between, clamp, gouge, n, rng } from '@/components/comics/linocut/carve'

import { InnerRule, PH, PW, once, portraitGround, smooth, strands } from './common'

/**
 * Mr Whymper, as Orwell introduces him in Chapter 6, and nothing else:
 *
 *   "He was a sly-looking little man with side whiskers, a solicitor in a
 *   very small way of business, but sharp enough to have realised earlier
 *   than anyone else that Animal Farm would need a broker and that the
 *   commissions would be worth having."
 *
 * So: a small man, head and shoulders, three-quarters to the right, with side
 * whiskers down his cheeks to the jaw, his eyes slid sideways and a smile at
 * one corner of his mouth: "sly-looking". The whiskers are the one feature the
 * text gives him. The rest is plain town dress of the 1940s for a country
 * solicitor, because the text describes none: a bowler hat, a dark suit, a
 * white collar and a dark tie. Under his arm is a small case of papers, for
 * the "very small way of business", and in his hand a pocket-book of figures,
 * for the commissions. No figure in it is legible, and none is meant to be.
 * He is cut dark against a pale ground, his face in PAPER. Nothing here comes
 * from a film or stage production.
 *
 * Seeds: 6201 for the ground, 6202 for the cuts.
 */

/** His face, three-quarters to the right, under the brim of the hat. */
const FACE = smooth([
  [134, 96],
  [128, 122],
  [134, 146],
  [148, 158],
  [152, 162],
  [168, 168],
  [186, 172],
  [198, 166],
  [206, 154],
  [210, 146],
  [212, 140, 1],
  [220, 132, 1],
  [210, 110],
  [206, 98],
])
/** The bowler: its dome, and its brim curled at the sides. */
const CROWN = 'M142 94C140 58 158 42 180 42C204 42 218 60 214 94Z'
const BRIM =
  'M124 98C132 90 150 94 180 94C206 94 222 88 230 94C226 102 206 102 180 102C150 102 132 104 124 98Z'
/** "side whiskers": from the temple down the cheek to the jaw, not meeting at the chin. */
const WHISKERS = smooth([
  [154, 100],
  [164, 100],
  [168, 124],
  [172, 148],
  [178, 164],
  [168, 166],
  [158, 152],
  [154, 126],
])
/** His hair, short and dark, at the back of the head under the brim. */
const HAIR = 'M130 96L152 96L150 108L140 114L130 112Z'
/** His ear, behind the whiskers. */
const EAR = 'M152 114C146 112 142 118 142 126C142 134 146 138 152 138'
/** The white collar, the tie, and the dark suit of his shoulders. */
const COLLAR = 'M160 168L182 180L202 166L208 186L182 196L154 184Z'
const TIE = 'M176 184L190 184L194 212L184 236L174 212Z'
const SUIT = smooth([
  [40, 330, 1],
  [52, 250],
  [84, 206],
  [132, 188],
  [158, 180],
  [182, 196],
  [206, 182],
  [234, 192],
  [262, 214],
  [282, 262],
  [292, 330, 1],
])
/** The small case of papers, under his arm. */
const CASE = 'M58 236L130 226L138 290L64 300Z'
/** The pocket-book of figures in his hand, and the hand holding it. */
const BOOK = 'M214 242L262 234L270 290L222 298Z'
const HAND =
  'M212 286C206 276 208 266 216 262L236 266C240 276 238 290 230 296C224 300 216 296 212 286Z'
const FINGERS = 'M222 262L240 256M224 270L244 266M226 278L244 276'

type Marks = {
  ground: string
  whisk: string
  suit: string
  figures: string
}

const marks = once<Marks>(() => {
  const ground = portraitGround(6201, (x, y) => clamp(0.12 + (y / PH) * 0.2 + (x / PW) * 0.06))
  const r = rng(6202)
  // The whiskers: paper strands through the dark, combed down.
  const whisk = strands(
    r,
    12,
    (t) => [155 + t * 9, 104 + t * 4],
    (t) => [158 + t * 12, 150 + t * 12],
    [0.4, 0.8],
    0.6,
  )
  // The folds of the suit: a few long cuts down the lapels and sleeves.
  const suit =
    gouge(132, 196, 110, 296, 1.4, 2) +
    gouge(150, 190, 160, 300, 1.1, -1) +
    gouge(232, 200, 214, 250, 1.2, -1.5) +
    gouge(252, 222, 272, 306, 1.2, 1.5) +
    gouge(84, 220, 60, 232, 1, 0.5)
  // The pocket-book's columns of figures: small ink marks in rows, none a
  // letter or a number anyone could read.
  let figures = ''
  for (let row = 0; row < 7; row++) {
    const y = 246 + row * 6.4
    for (let col = 0; col < 3; col++) {
      let x = 220 + col * 14 + row * 0.9
      const end = x + between(r, 7, 11)
      while (x < end) {
        const h = between(r, 2, 3.2)
        figures += `M${n(x)} ${n(y + row * 0.2)}q${n(1.4)} ${n(-h)} ${n(2.4)} 0`
        x += between(r, 2.6, 3.4)
      }
    }
  }
  return { ground, whisk, suit, figures }
})

function MrWhymperPortrait({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-wh-face`
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={FACE} />
        </clipPath>
      </defs>
      <rect x={0} y={0} width={PW} height={PH} fill={PAPER} />
      <path d={m.ground} fill={INK} />
      {/* the paper edge that cuts him out of the ground */}
      <g fill={PAPER} stroke={PAPER} strokeWidth={6} strokeLinejoin="round">
        <path d={SUIT} />
        <path d={CROWN} />
        <path d={BRIM} />
        <path d={FACE} />
        <path d={CASE} />
      </g>
      <path d={SUIT} fill={INK} />
      <path d={m.suit} fill={PAPER} />
      {/* the case of papers under his arm */}
      <path d={CASE} fill={INK} stroke={PAPER} strokeWidth={LINE.carve} />
      <path d="M62 250L134 240" stroke={PAPER} strokeWidth={1.2} />
      <rect x={94} y={238} width={8} height={8} fill={PAPER} transform="rotate(-8 98 242)" />
      <path d="M76 226Q96 212 116 222" fill="none" stroke={INK} strokeWidth={5} />
      <path d="M76 226Q96 212 116 222" fill="none" stroke={PAPER} strokeWidth={1.6} />
      {/* the arm round it */}
      <path d="M60 246C80 256 112 262 146 256" fill="none" stroke={PAPER} strokeWidth={1.4} />
      {/* the collar and tie */}
      <path d={COLLAR} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <path d={TIE} fill={INK} stroke={PAPER} strokeWidth={1.2} />
      {/* the face, cut in paper, and the side whiskers */}
      <path d={FACE} fill={PAPER} stroke={INK} strokeWidth={LINE.fine} />
      <g clipPath={`url(#${clip})`}>
        <path d={HAIR} fill={INK} />
        <path d={WHISKERS} fill={INK} />
        <path d={m.whisk} fill={PAPER} />
        <path d="M176 158L196 160M172 152L198 156" stroke={INK} strokeWidth={LINE.hairline} />
      </g>
      {/* the ear, behind the whiskers */}
      <path d={EAR} fill="none" stroke={INK} strokeWidth={1.6} strokeLinecap="round" />
      <path d="M149 120C146 122 146 130 149 132" fill="none" stroke={INK} strokeWidth={1} />
      {/* sly eyes, slid sideways under level lids; a smile at one corner */}
      <g fill="none" stroke={INK} strokeLinecap="round" strokeLinejoin="round">
        <path d="M176 110Q186 106 194 110" strokeWidth={2.2} />
        <path d="M200 108Q206 106 210 109" strokeWidth={2} />
        <path d="M178 116Q186 112 194 115" strokeWidth={1.4} />
        <path d="M200 114Q205 112 210 114" strokeWidth={1.2} />
        <path d="M178 118Q186 121 193 117" strokeWidth={1} />
        {/* the nose */}
        <path d="M206 112L218 132L210 136" strokeWidth={1.4} />
        {/* the mouth: thin, one corner lifted */}
        <path d="M188 150Q198 152 206 144" strokeWidth={1.6} />
        <path d="M206 144L208 141" strokeWidth={1.4} />
      </g>
      <circle cx={181} cy={116} r={2.4} fill={INK} />
      <circle cx={202} cy={113} r={1.9} fill={INK} />
      {/* the bowler hat */}
      <path d={CROWN} fill={INK} />
      <path d="M150 88C150 64 162 50 178 48" fill="none" stroke={PAPER} strokeWidth={1.6} />
      <path d="M144 88L214 88" stroke={PAPER} strokeWidth={1.2} />
      <path d={BRIM} fill={INK} stroke={PAPER} strokeWidth={1.4} />
      {/* the pocket-book of figures, and the hand that holds it */}
      <path d={BOOK} fill={PAPER} stroke={INK} strokeWidth={1.4} />
      <path d={m.figures} fill="none" stroke={INK} strokeWidth={0.9} strokeLinecap="round" />
      <path d={HAND} fill={PAPER} stroke={INK} strokeWidth={1.3} />
      <path d={FINGERS} fill="none" stroke={INK} strokeWidth={6} strokeLinecap="round" />
      <path d={FINGERS} fill="none" stroke={PAPER} strokeWidth={3.8} strokeLinecap="round" />
      <path d="M204 290C212 286 216 296 212 302" fill="none" stroke={PAPER} strokeWidth={1.2} />
      <InnerRule />
    </>
  )
}

export const mrWhymperArt: LinocutArt = { width: PW, height: PH, Draw: MrWhymperPortrait }

export const mrWhymper: Portrait = {
  name: 'Mr Whymper',
  art: mrWhymperArt,
  alt: 'A linocut portrait of Mr Whymper, the solicitor, in Chapter 6: a small man seen head and shoulders, turned three-quarters to the right, against a pale ground. He wears a black bowler hat, a dark suit, a white collar and a dark tie. Dark side whiskers run down his cheeks to his jaw. His eyes are slid sideways under level lids and one corner of his thin mouth is lifted in a smile. Under one arm he carries a small dark case of papers, and in his other hand he holds an open pocket-book ruled with rows of small figures. Four numbered red markers point to his face, his whiskers, the case and the pocket-book.',
  describedBy: [
    { phrase: 'a sly-looking little man', at: [254, 104], to: [210, 118] },
    { phrase: 'side whiskers', at: [106, 150], to: [162, 140] },
    { phrase: 'a solicitor in a very small way of business', at: [40, 196], to: [72, 238] },
    { phrase: 'the commissions would be worth having', at: [300, 226], to: [258, 250] },
  ],
  where: 'Chapter 6',
  passage:
    'He was a sly-looking little man with side whiskers, a solicitor in a very small way of business, but sharp enough to have realised earlier than anyone else that Animal Farm would need a broker and that the commissions would be worth having.',
  note: 'Whymper is the farm’s only link with the human world. Napoleon trades through him, and in Chapter 7 has him led past bins of sand topped with grain, so that he tells the outside world there is no food shortage.',
  artNote:
    'Orwell gives him only the whiskers and the look; the hat and suit are plain dress of the time, and the case and pocket-book stand for his trade.',
}
