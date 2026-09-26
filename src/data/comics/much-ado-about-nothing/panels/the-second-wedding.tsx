import type { ArtProps, LinocutArt } from '@/lib/comics/types'
import { INK, PAPER, RED } from '@/components/comics/linocut/palette'
import { clamp, gougeField, rays, rng } from '@/components/comics/linocut/carve'
import { timing } from '@/components/comics/linocut/styles'

import { H, Room, W, Window, type Win } from './leonatos-rooms'
import { MASK, MASK_EYE, Person, type Pose } from './people'

/**
 * Act 5, Scene 4: "The second wedding", the fifteenth and last moment in the
 * guide's timeline. Every detail is from the scene, as the held edition
 * prints it (src/data/full-texts/much-ado-about-nothing.ts):
 *
 * - "A Room in Leonato's House." It is the room of "Don John's accusation"
 *   and "Too busy to listen" (./leonatos-rooms.tsx): the lime-washed wall,
 *   the tiled floor and the round-arched window with its shutters folded
 *   back. It is morning ("Good morrow to this fair assembly"; Leonato bade
 *   them come "Tomorrow morning"), so the window is full of early light, and
 *   the couple stand against it, their joined hands in the light.
 * - CLAUDIO: "Give me your hand: before this holy friar, / I am your husband,
 *   if you like of me." HERO: "And when I liv'd, I was your other wife:
 *   [Unmasking.]" So Claudio, the beardless youth, holds her hand, and Hero,
 *   small ("Leonato's short daughter", 1.1) with her plait down her back,
 *   lifts her mask up off her face with the other. It is the revellers'
 *   visor of the masked ball (./people.tsx), in paper.
 * - The spot colour is the morning sun, in the window over the roofs of
 *   Messina, high above everyone's heads: the morning after the night at the tomb,
 *   when Don Pedro saw "the gentle day [...] Dapples the drowsy East"
 *   (5.3), and the life Hero claims: "but I do live". It answers the low
 *   sun of "Challenges and confession".
 * - NO RED ON THE MASK. It was first printed red, and wherever it went the
 *   red was wrong: held up, it sat beside Claudio's mouth, where red reads as
 *   blood; lowered, it lay on her skirt like a stain. So it is paper.
 * - "Here comes the Prince and Claudio"; "here's the friar ready." Friar
 *   Francis, old, in his habit and cord with his tonsure (./people.tsx),
 *   stands by with his hands together, behind Claudio. DON PEDRO: "The former Hero! Hero
 *   that is dead!" So the Prince, in his circlet and cloak, throws up a hand
 *   in wonder behind Claudio. LEONATO: "She died, my lord, but whiles her
 *   slander liv'd." So her father, white-bearded, stands behind her and
 *   opens his hand towards her.
 * - "Re-enter Antonio, with the ladies masked." Beatrice does not unmask
 *   until Benedick asks "Which is Beatrice?", after this, so she is drawn
 *   still masked, her hair in its net, and Benedick, shaved since Act 3,
 *   beside her. Antonio, Margaret, Ursula and the attendants are in the room
 *   too; there is not space for everyone, and they are left out rather than
 *   crowded in.
 *
 * The people are drawn from ./people.tsx, as in every panel of this play.
 * Nothing is taken from a film or stage production. Seeds: 15101 (the room),
 * 15102 (the morning through the window), 15103 (its light in the room).
 */

const WIN: Win = { x0: 376, x1: 492, top: 40, bottom: 222 }
/** The morning sun in the window, high above everyone's heads. */
const SUN: [number, number] = [434, 82]

/**
 * Don Pedro, one hand thrown up in wonder on a bent arm, the fingers apart,
 * held forward and clear of his face: a hand at the mouth read as eating.
 */
const DON_PEDRO: Pose = {
  look: 'don-pedro',
  head: { at: [2, -160], rot: -8 },
  far: {
    pts: [
      [-3, -132],
      [-6, -106],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [28, -126],
      [42, -144],
    ],
    hand: 'open',
    deg: -58,
    thumb: -1,
    size: 17,
    spread: 19,
  },
}

/** Claudio, holding out his hand to take hers. */
const CLAUDIO: Pose = {
  look: 'claudio',
  head: { at: [4, -160], rot: -4 },
  far: {
    pts: [
      [-3, -132],
      [-6, -106],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [20, -106],
      [42, -100],
    ],
    hand: 'open',
    deg: 6,
    thumb: -1,
    spread: 6,
  },
  sword: true,
}

/**
 * Hero, facing him (flipped to face left): her far hand in his, her near
 * hand lifting the mask up off her face.
 */
const HERO: Pose = {
  look: 'hero',
  head: { at: [3, -154], rot: -6 },
  far: {
    pts: [
      [-3, -126],
      [14, -112],
      [34, -116],
    ],
    hand: 'mitt',
    deg: 2,
  },
  near: {
    pts: [
      [3, -126],
      [18, -138],
      [22, -162],
    ],
    hand: 'mitt',
    deg: -84,
  },
}

/** Friar Francis between them before the window, his hands together. */
const FRIAR: Pose = {
  look: 'friar',
  head: { at: [3, -160], rot: 6 },
  far: {
    pts: [
      [-3, -132],
      [8, -110],
      [18, -114],
    ],
    hand: 'mitt',
    deg: -40,
  },
  near: {
    pts: [
      [4, -132],
      [12, -108],
      [20, -110],
    ],
    hand: 'mitt',
    deg: -40,
  },
}

/** Leonato behind his daughter, his open hand held out towards her. */
const LEONATO: Pose = {
  look: 'leonato',
  head: { at: [3, -160], rot: 4 },
  far: {
    pts: [
      [-3, -132],
      [-6, -106],
      [-2, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [20, -110],
      [38, -112],
    ],
    hand: 'open',
    deg: 14,
    thumb: 1,
    spread: 12,
  },
}

/** Beatrice, still masked. */
const BEATRICE: Pose = {
  look: 'beatrice',
  masked: true,
  far: {
    pts: [
      [-3, -126],
      [-4, -104],
      [4, -94],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [3, -126],
      [6, -104],
      [14, -96],
    ],
    hand: 'mitt',
  },
}

/** Benedick beside her, shaved, his sword at his side. */
const BENEDICK: Pose = {
  look: 'benedick-shaved',
  head: { at: [3, -160], rot: 2 },
  far: {
    pts: [
      [-3, -132],
      [-6, -106],
      [-3, -84],
    ],
    hand: 'mitt',
  },
  near: {
    pts: [
      [4, -132],
      [8, -106],
      [6, -84],
    ],
    hand: 'mitt',
  },
  sword: true,
}

type Marks = { sky: string; glow: string }

let cached: Marks | undefined
function marks(): Marks {
  if (cached) return cached
  // Early morning through the window: pale, the sky cut clean near the sun.
  const sky = gougeField(
    rng(15102),
    { x0: WIN.x0 - 20, x1: WIN.x1 + 20, y0: WIN.top, y1: WIN.bottom },
    (x, y) => clamp(0.95 - Math.hypot(x - SUN[0], (y - SUN[1]) * 1.2) / 260),
    { spacing: 6, len: [20, 70], gap: [6, 16], max: 2.8 },
  )
  // The morning light spreading from the window over the wall round it.
  const glow = rays(rng(15103), (WIN.x0 + WIN.x1) / 2, 130, {
    from: 96,
    to: 190,
    every: 6,
    width: 2.2,
  })
  cached = { sky, glow }
  return cached
}

function TheSecondWedding({ uid }: ArtProps) {
  const m = marks()
  const clip = `${uid}-sw-wall`
  return (
    <g className="lc-push" style={timing({ origin: [420, 200], push: 1.03 })}>
      <defs>
        <clipPath id={clip}>
          <path d={`M0 0H${W}V236H0Z`} />
        </clipPath>
      </defs>
      <Room seed={15101} win={WIN} />
      <g clipPath={`url(#${clip})`}>
        <path d={m.glow} fill={PAPER} />
      </g>
      <Window
        uid={uid}
        win={WIN}
        outside={
          <>
            <path d={m.sky} fill={INK} />
            {/* the morning sun over Messina's roofs */}
            <circle cx={SUN[0]} cy={SUN[1]} r={13} fill={RED} />
            <path
              d="M368 224V210L384 204L400 210L418 206L434 212L452 206L468 212L482 208L496 212V224Z"
              fill={INK}
            />
          </>
        }
      />

      {/* the Prince and Benedick at either end, Claudio and Hero before the Friar */}
      <Person pose={DON_PEDRO} at={[150, 318]} scale={1.1} />
      <Person pose={FRIAR} at={[262, 310]} scale={1.04} />
      <Person pose={CLAUDIO} at={[380, 320]} scale={1.14} />
      <Person pose={LEONATO} at={[596, 318]} scale={1.1} flip />
      <Person pose={HERO} at={[482, 320]} scale={1.14} flip>
        {/* the mask she is lifting off, printed as the revellers' are */}
        <g transform="translate(16 -178) rotate(-24) scale(1.75)">
          <path d={MASK} fill={PAPER} stroke={INK} strokeWidth={1.4} />
          <path d={MASK_EYE} fill={INK} />
        </g>
      </Person>
      <Person pose={BEATRICE} at={[694, 318]} scale={1.08} flip />
      <Person pose={BENEDICK} at={[778, 318]} scale={1.1} flip />
    </g>
  )
}

export const theSecondWedding: LinocutArt = { width: W, height: H, Draw: TheSecondWedding }
