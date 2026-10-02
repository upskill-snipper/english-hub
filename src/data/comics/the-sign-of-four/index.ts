/**
 * The Sign of Four in linocut: the panels for its key moments and the
 * portraits of its people as Conan Doyle describes them.
 *
 * An edition is held in src/data/full-texts/the-sign-of-four.ts (Project
 * Gutenberg #2097), so every quotation on the art is copied from it, word for
 * word, and the comics test checks it there. A quotation may not run across a
 * paragraph break. Quote from the edition only, never from the guide's
 * paraphrase or from memory.
 *
 * THIS NOVEL NEEDS PARTICULAR CARE. The rules in full are in the docblock of
 * ./panels/people.tsx, which every artist on this text reads first. In short:
 * - Tonga, the Andaman Islander, is described by the narrators in racist
 *   terms. The art never adopts them: he is drawn as a small man, with the
 *   same care and dignity as every other figure, no animal features and no
 *   caricature, and none of the narrators' slurs or dehumanising words is
 *   ever a quotation, a caption or an alt text.
 * - Holmes's cocaine (Chapter 1) is left to the words. No syringe, no needle,
 *   no injection is ever drawn; the morocco case is shown closed.
 * - Every death is off the page. Bartholomew Sholto is never drawn dead (show
 *   the locked room, the ladder, the faces of those who find him, or the thorn
 *   in Holmes's lens); the Agra fort and the Mutiny are suggested, with no
 *   bodies and no killing; Tonga's death in the river chase is suggested by
 *   the launch and the smoke of the shots, never a body.
 *
 * The people are cut once, in ./panels/people.tsx, and every panel draws the
 * recurring characters from there, so a student meets the same Holmes, the
 * same Watson and the same Mary Morstan in every panel. The sitting room at
 * 221B Baker Street is cut once in ./panels/baker-street.tsx.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs the-sign-of-four --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'
import { theSevenPerCentSolution } from './panels/the-seven-per-cent-solution'
import { theTestOfTheWatch } from './panels/the-test-of-the-watch'
import { missMorstansStatement } from './panels/miss-morstans-statement'
import { intoTheFog } from './panels/into-the-fog'
import { thaddeusSholtosStory } from './panels/thaddeus-sholtos-story'
import { theDivisionOfRewards } from './panels/the-division-of-rewards'
import { theOldSailor } from './panels/the-old-sailor'
import { theChaseDownTheThames } from './panels/the-chase-down-the-thames'
import { theEmptyBox } from './panels/the-empty-box'
import { smallsStoryOfAgra } from './panels/smalls-story-of-agra'
import { sholtosBetrayal } from './panels/sholtos-betrayal-and-smalls-revenge'
import { theLockedRoom } from './panels/the-locked-room'
import { theDemonstration } from './panels/the-demonstration'
import { tobyAndTheBarrel } from './panels/toby-and-the-barrel'
import { theBakerStreetIrregulars } from './panels/the-baker-street-irregulars'
import { marysIndifferenceToTheFortune } from './panels/marys-indifference-to-the-fortune'

export const comics: ComicSet = {
  slug: 'the-sign-of-four',
  panels: [
    {
      moment: 'The seven-per-cent solution',
      art: theSevenPerCentSolution,
      alt: "A linocut print of the sitting room at 221B Baker Street on a foggy afternoon. On the left, by Watson's open writing desk, Dr Watson sits forward in his armchair, earnest, holding out one open hand towards his friend. In the middle stands a pale stone fireplace with an unlit grate, and on the corner of its mantelpiece a small bottle and, beside it, a neat, closed case printed in red. On the right, Sherlock Holmes, lean, with a hawklike profile, sits back in his deep velvet-lined armchair with his elbows on its arms and the fingertips of his long white hands pressed together. Behind him a tall window is full of fog, the roofs across the street faint in it, and an old book lies open on a small table at his side.",
      quote: 'I abhor the dull routine of existence. I crave for mental exaltation.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The test of the watch',
      art: theTestOfTheWatch,
      alt: 'A linocut print of the sitting room at 221B Baker Street on the same foggy afternoon. On the left, Sherlock Holmes sits forward in his armchair and looks up, holding up in one long white hand an old watch with its back swung open on the hinge, its key-hole and the scratches round it showing and its chain hanging down; in his other hand, lowered, is a large round magnifying lens. On the right, in front of a tall window full of fog, Dr Watson has got up from his armchair, which stands empty behind him. He stands facing Holmes with his weight off one leg, holding out an open hand towards the watch, and on his cheek is a flush of red, his hurt.',
      quote: 'I had forgotten how personal and painful a thing it might be to you.',
      quoteAt: 'top-left',
    },
    {
      moment: "Miss Morstan's statement",
      art: missMorstansStatement,
      alt: 'A linocut print of the sitting room at 221B Baker Street later the same afternoon. In the middle, in front of the door she came in by, Mary Morstan sits on an upright chair: a small young woman with fair hair drawn back to a knot, a small dark turban with a white feather at its side, and a plain dress cut with fine upright lines. In her white-gloved hands she holds out an open flat box with six white pearls lying in it. On the left, Dr Watson sits forward in his armchair looking at her, one hand resting on the arm of the chair, a flush of red on his cheek. On the right, Sherlock Holmes, lean, with a hawklike profile, leans forward in his armchair in front of a tall window full of fog, holding up a letter in his long white hands and reading it.',
      quote: 'You are a wronged woman, and shall have justice.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Into the fog',
      art: intoTheFog,
      alt: 'A linocut print of the Strand on a foggy September evening, under low, sagging clouds. On the left, on the far pavement, a shop window glares white and its light streams across the road in bars, while small dark figures of passers-by, men in hats and a woman in a bonnet, walk in front of it. Two street lamps glow red inside rings of misty light. In the middle, a closed four-wheeled cab drives to the right, a cabman in a low hat up on the box holding the reins and an upright whip. Through its two side windows, lit from inside by a small lantern whose flame is printed in red, are Dr Watson in a bowler, his hand on his stick; Mary Morstan in a dark cloak, her face pale, turned to him; and Sherlock Holmes in a top hat, bent over a note-book on his knee with the lantern in his other hand. On the right, the horse goes into a bank of fog, its legs lost in low mist, and a far lamp shows only as a red smear.',
      quote: 'Mud-coloured clouds drooped sadly over the muddy streets.',
      quoteAt: 'top-left',
    },
    {
      moment: "Thaddeus Sholto's story",
      art: thaddeusSholtosStory,
      alt: "A linocut print of Thaddeus Sholto's richly furnished room at night. Heavy curtains hang on every wall, looped back with tasselled cords in two places to show a framed landscape painting and a tall vase on a stand, and the carpet is patterned. From the ceiling, on a fine wire, hangs a lamp in the shape of a white dove, its flame printed in red. In the middle, Thaddeus Sholto, a small man with a very high, bald, shining head and a bristling fringe of red hair round the back of it, sits on a low settee holding the mouthpiece of a hookah to his lips, his other hand held out open towards his listeners. Beside him stands the tall hookah on its mat, a glass bowl of water at its foot and its bowl of burning tobacco, printed in red, at the top, with smoke rising from it. On the left, Mary Morstan sits in a dark cloak and a small turban with a white feather, her face white with shock and a glass of water in her hand, and Dr Watson stands beside her holding a glass carafe. On the right, Sherlock Holmes leans back in his chair with his eyelids lowered and his long white hands on his knees.",
      quote: 'The cursed greed which has been my besetting sin through life',
      quoteAt: 'top-right',
    },
    {
      moment: 'The old sailor',
      art: theOldSailor,
      alt: "A linocut print of the sitting room at 221B Baker Street on a hot, clear afternoon. On the left, Dr Watson has started back in his armchair, one open hand raised. By a small table holding a box of cigars and a half glass, Athelney Jones, very stout, in a grey suit, a flush of red on his cheek, leans forward on a plain chair, delighted, holding his cigar out across the room, a thread of smoke rising from it. In the middle stands the pale stone fireplace, its grate cold, with a small bottle and a closed case on its mantelpiece. On the right, in front of a bright window on the houses opposite, Sherlock Holmes, lean, with a hawklike profile and his own dark hair, sits on the end of the sofa in an old sailor's pea-jacket with two rows of buttons, smiling a little, and holds out on his long white hand a heap of white hair: a wig, two long side-whiskers and two bushy eyebrows. A thick, knotted cudgel leans against the sofa, and a coarse red scarf hangs over its back.",
      quote: 'You would have made an actor, and a rare one.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The chase down the Thames',
      art: theChaseDownTheThames,
      alt: "A linocut print of the Thames at night under a clear, starry sky, the flat marshes a low dark line along the far bank. On the left, the forward half of the police launch races to the right, smoke pouring back from its funnel and white water heaped at its steep prow. On board, Dr Watson in a bowler and Sherlock Holmes in a top hat stand leaning forward, Holmes's long white hands on the side; two burly inspectors in bowlers sit in front of them; and in the bows stout Athelney Jones, a flush of red on his cheek, has his hand on a great lantern whose funnel of light runs across the dark water. Ahead on the right, caught in the light, the steam launch Aurora speeds away, black with two red stripes along her side, her black funnel banded in white and trailing smoke, white foam at her stern. A boy holds her tiller; Jonathan Small, bearded, sits low by the stern looking back at the police launch; beside him sits Tonga, a small man wrapped in a dark blanket, his head and thick curly hair showing; and old Smith, bare-armed, bends with a shovel at the open furnace, whose glare is printed in red.",
      quote: 'never did sport give me such a wild thrill as this mad, flying man-hunt',
      quoteAt: 'top-right',
    },
    {
      moment: 'The empty box',
      art: theEmptyBox,
      alt: "A linocut print of Mrs Cecil Forrester's drawing-room late at night. On the left, beside an open window on the dark night sky, a basket chair stands empty. In the middle, under the soft light of a shaded lamp on a table, a heavy iron box stands open, its lid flung back and its hasp, shaped like a small sitting figure, hanging loose; its thick walls and its bare inside show that it is completely empty, and a poker lies on the table in front of it. On the right, Dr Watson has turned from the box to Mary Morstan and holds her hand in his, a flush of red on his cheek. She stands facing him and looks up at him, small, fair-haired and bareheaded, in a long white dress with a red sash at her waist, her white hand in his.",
      quote: 'Whoever had lost a treasure, I knew that night that I had gained one.',
      quoteAt: 'top-right',
    },
    {
      moment: "Small's story of Agra",
      art: smallsStoryOfAgra,
      alt: 'A linocut print of a night in 1857 at the fort at Agra, in driving rain under heavy clouds. On the left, in a great wall of stone, is a small arched door, and in the doorway stands Mahomet Singh, a tall Sikh trooper with a full beard and a turban, in a long coat with a sash, keeping watch. Beside him Abdullah Khan, as tall, bearded and turbaned, bends his head to speak quietly to Jonathan Small, a young man in a peaked cap, clean-shaven, his right leg ending in a wooden peg, who stands at the front holding his musket upright at his side and a closed lantern in his other hand, looking out. Below them the bank drops to a moat that is nearly dry, with a few pools in it, and on the far side, in a dip between dark mounds of earth, the glint of a small lantern is printed in red.',
      quote: 'We ask you to be rich.',
      quoteAt: 'top-right',
    },
    {
      moment: "Sholto's betrayal and Small's revenge",
      art: sholtosBetrayal,
      alt: 'A linocut print of a night at sea off the Andaman Islands. On the left, the dark mountain of the island falls to the sea, a few small lit windows on its slope printed in red. In the middle and on the right, a long dugout canoe runs out to sea away from it, leaving a white wake. Tonga, a small man with a full head of curly hair, kneels in the stern and paddles, holding the paddle in both hands with its blade in the water at the side. Jonathan Small, bearded and broad, stands at the bamboo mast holding the rope of a sail woven of matting, a black figure against the pale sail, looking ahead out to sea. In the bows are the stores: gourds of water, cocoa-nuts and yams.',
      quote: 'From that day I lived only for vengeance.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The division of rewards',
      art: theDivisionOfRewards,
      alt: 'A linocut print of the sitting room at 221B Baker Street late at night, lit by one oil lamp. On the left, by his open writing desk, Dr Watson sits in his armchair turned towards his friend, holding out one open hand to him, a flush of red on his cheek. In the middle stands the pale stone fireplace, its grate dark. At one end of the mantelpiece the lamp burns, its flame printed in red; at the other end, nearest Holmes, stand a small bottle and, beside it, a neat, closed case printed in red. On the right, Sherlock Holmes, lean, with a hawklike profile, lies sunk back in his deep armchair with his long legs stretched out before him, lifts his face and stretches one long white hand up towards the bottle; his fingers have not yet reached it.',
      quote: 'there still remains the cocaine-bottle',
      quoteAt: 'top-left',
    },
    {
      moment: 'The locked room at Pondicherry Lodge',
      art: theLockedRoom,
      alt: 'A linocut print of a long passage at night at the top of Pondicherry Lodge, seen side on, with three panelled doors along its far wall, the first two back in the dark. The third door, on the right, is shut, and its keyhole shows as one small bright shape; a carriage lamp stands on the boards at its foot, its flame printed in red, its light spreading over the door, the wall and the floor. Sherlock Holmes, lean and hawk-nosed, has just straightened up from the keyhole: he stands beside the door with his head drawn back, turned to Watson, one long white hand held open towards the keyhole. Dr Watson, bareheaded, steps up behind him, facing him. At the back of the line Thaddeus Sholto, small, muffled in a fur cap with flaps over his ears, a turned-up collar of tight curls and a very long coat braided across the front, hangs back with one hand over his mouth.',
      quote: 'There is something devilish in this, Watson',
      quoteAt: 'top-left',
    },
    {
      moment: 'Holmes gives a demonstration',
      art: theDemonstration,
      alt: "A linocut print of Bartholomew Sholto's chemical laboratory at night. Left of the middle, a step-ladder rises from a litter of broken lath and plaster, with a coil of rope on the floor beside it, to a square opening in the ceiling, where the garret above shows pale in the lamplight, crossed by dark rafters. Sherlock Holmes stands at the foot of the steps holding a carriage lamp up to the opening by its ring in his white hand, his head tipped back to look into it; the lamp's flame is printed in red. In the corner on the left, Dr Watson sits forward on a plain chair with his hands on his knees and his face turned up to the opening. On the right are the ways in that have been ruled out: a window with its lower sash raised on a half moon, a boot-print and a round mark on its sill, an iron hook in the wall beside it and round marks across the floor; a small, dark fireplace grate; and the door, broken open on the dark passage, its edge splintered. In the far corner stands a carboy in a wicker basket, and a dark stream runs from it across the boards.",
      quote: 'We know that he did not come through the door, the window, or the chimney.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Toby and the trail of creosote',
      art: tobyAndTheBarrel,
      alt: "A linocut print of an alley in a timber-yard early in the morning, between two tall stacks of sawn planks, the ground pale with sawdust and curled shavings. Beyond the yard wall are roofs and chimneys, a pale bank of cloud and the risen sun, printed in red. In the middle a large barrel stands upright on a two-wheeled hand-trolley, dark smears running down its pale staves and over the wheels. On top of the barrel stands Toby, a scruffy, long-legged, long-haired dog, white with brown patches and long brown ears, his tongue lolling and his eyes screwed shut, facing Holmes; a cord runs from his collar to Sherlock Holmes's white hand. On the left Holmes, in a top hat, is doubled over with laughter, his other hand on his knee; on the right Dr Watson, in a bowler hat, leans on his stick with his head thrown back, laughing. Both men have their eyes shut and their mouths wide open.",
      quote: 'With lolling tongue and blinking eyes, Toby stood upon the cask',
      quoteAt: 'top-right',
    },
    {
      moment: 'The Baker Street Irregulars',
      art: theBakerStreetIrregulars,
      alt: 'A linocut print of the sitting room at 221B Baker Street in the morning, with breakfast laid. From the open door on the left, a line of eleven ragged, barefoot boys stands facing the table, the first still in the doorway: some in flat or round caps and some bareheaded with tousled hair, in torn jackets, some with their hands in their pockets or behind their backs, their bare shins and feet pale. In front of the line stands Wiggins, taller and older, in a coat too big for him with a torn hem, leaning back with one hand in his pocket and the other held out. Sherlock Holmes, turned round on his chair, holds out three silver coins to him on his long white palm. Behind the table, which is laid with a white cloth, a coffee-pot, cups and a plate of ham and eggs, Dr Watson sits with the newspaper lowered, watching the boys. Toby the dog lies on the floor by the table, his head up. Behind them a window shows the houses opposite in the morning light.',
      quote: 'They can go everywhere, see everything, overhear every one.',
      quoteAt: 'top-left',
    },
    {
      moment: "Mary's indifference to the fortune",
      art: marysIndifferenceToTheFortune,
      alt: "A linocut print of Mrs Cecil Forrester's drawing-room in Camberwell late in the afternoon. On the left, Dr Watson sits on a plain chair, leaning forward with his hands on his knees, watching Mary Morstan, with a flush of red on his cheekbone. In the middle Mary, fair-haired and bareheaded, in a plain greyish dress, sits in a wicker basket chair with her pale hands folded in her lap and her head tossed up, her chin raised, turned away from the older woman beside her. On the right Mrs Forrester, a woman of middle years in a dark dress, her dark hair drawn up in a knot, leans towards Mary from her chair with both hands held open. Behind her a window shows the houses across the road, and at the far right an unlit lamp with a shade stands on a small table.",
      quote: 'It is for Mr. Thaddeus Sholto that I am anxious',
      quoteAt: 'top-left',
    },
  ],
  portraits: PORTRAITS,
}
