/**
 * Twelfth Night in linocut: the panels for its key moments and the portraits
 * of its people as the play describes them.
 *
 * An edition is held in src/data/full-texts/twelfth-night.ts (Project
 * Gutenberg #1526), so every quotation on the art is copied from it, word for
 * word, and the comics test checks it there. A quotation may not run across a
 * paragraph break, and a verse line break is a space, never " / ". Quote from
 * the edition only, never from the guide's paraphrase or from memory.
 *
 * THIS PLAY NEEDS PARTICULAR CARE. In short:
 * - Viola disguised as Cesario is a young woman dressed as a young man, as
 *   the text says, drawn so a student can see it is Viola; the disguise is
 *   never mocked. Sebastian, her twin, looks like her ("One face, one voice,
 *   one habit").
 * - Malvolio's imprisonment in the dark room is drawn with dignity: never a
 *   caricature of madness or of mental illness, and never mocking him. In
 *   yellow stockings he is comic, but stays a man, not a grotesque.
 * - Cakes and ale: late-night singing with cups, nobody shown harmed by
 *   drink, and drink not made glamorous.
 * - The duel and the arrest: swords may be drawn but touch no one.
 * - Antonio's devotion to Sebastian is drawn with the same care as every
 *   other bond in the play, never as a stereotype.
 * - The shipwreck: nobody drowning; the sea, and the survivors on the shore.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs twelfth-night --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours. The portraits are registered in
 * ./portraits/index.ts.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'
import { musicForALovesickDuke } from './panels/music-for-a-lovesick-duke'
import { shipwreckedInIllyria } from './panels/shipwrecked-in-illyria'
import { revelsAtOliviasHouse } from './panels/revels-at-olivias-house'
import { cesarioSentToWoo } from './panels/cesario-sent-to-woo'
import { oliviaUnveiled } from './panels/olivia-unveiled'
import { aPearlAndAPriest } from './panels/a-pearl-and-a-priest'
import { husband } from './panels/husband'
import { oneFaceOneVoice } from './panels/one-face-one-voice'
import { theWholePackOfYou } from './panels/the-whole-pack-of-you'
import { theWindAndTheRain } from './panels/the-wind-and-the-rain'
import { iAmNotWhatIAm } from './panels/i-am-not-what-i-am'
import { yellowStockings } from './panels/yellow-stockings'
import { aDuelAndAnArrest } from './panels/a-duel-and-an-arrest'
import { mistakenForCesario } from './panels/mistaken-for-cesario'
import { theDarkRoom } from './panels/the-dark-room'
import { sebastianIsAlive } from './panels/sebastian-is-alive'
import { theRing } from './panels/the-ring'
import { cakesAndAle } from './panels/cakes-and-ale'
import { patienceOnAMonument } from './panels/patience-on-a-monument'
import { theLetterInTheGarden } from './panels/the-letter-in-the-garden'

export const comics: ComicSet = {
  slug: 'twelfth-night',
  panels: [
    {
      moment: 'Music for a lovesick duke',
      art: musicForALovesickDuke,
      alt: "A linocut print of a room in Duke Orsino's palace by day. On the left two musicians sit on stools and play, one a lute and one a bass viol with a bow, and rings of sound are cut in the dark air between them and the Duke. In the middle, in front of a tall arched window full of daylight, Orsino lies back on a daybed with his eyes shut, a plain circlet on his dark hair and a short pointed beard, one open hand lifted towards the players. Through the window is a garden, with a line of trees and a bed of flowers whose blooms are printed in red. Curio, bearded, stands waiting by the head of the daybed, and on the right Valentine, in a flat cap, stands in a lit doorway with one hand held out, bringing his news.",
      quote: 'If music be the food of love, play on,',
      quoteAt: 'top-left',
    },
    {
      moment: 'Shipwrecked in Illyria',
      art: shipwreckedInIllyria,
      alt: "A linocut print of a sandy shore after a storm. Dark bands of cloud still hang over the sea on the left; in the middle the sun, printed in red, breaks through thin streaks of cloud, its rays cut round it and its light glittering on the water. Far out on the horizon a ship lies split on a rock, its mast broken. On the beach a small boat has been drawn up out of the waves: one sailor rests a hand on its stern, and another, in a knitted cap, stands by its bow holding an oar upright. In the middle Viola, a young woman in a long dark gown with her dark hair loose down her back, turns to the ship's Captain with one hand held out open and the other at her breast. The Captain, grey-bearded, in a broad-brimmed hat and a long coat, faces her with his hand on his heart. Rocky cliffs rise on the right.",
      quote: 'Conceal me what I am, and be my aid',
      quoteAt: 'top-right',
    },
    {
      moment: 'Revels at Olivia’s house',
      art: revelsAtOliviasHouse,
      alt: "A linocut print of a panelled room in Olivia's house, lit by a fire burning red in a stone fireplace. On the left Maria, a small woman in a long gown and a linen cap, stands with a hand on her hip, pointing at Sir Toby. Sir Toby, broad and bearded, sprawls in a high-backed chair by the fire with his booted legs stretched out across the floorboards, holding up a cup towards her. On the right Sir Andrew, very tall and thin, with straight pale hair hanging to his shoulders, comes in through an open door with one hand raised in greeting.",
      quote: 'Ay, but you must confine yourself within the modest limits of order.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Cesario sent to woo',
      art: cesarioSentToWoo,
      alt: "A linocut print of a room in Duke Orsino's palace by day. On the left, in front of an arched window looking out over the roofs and towers of a town, Orsino stands, bearded, with a plain circlet and a cloak to the knee, one hand on his heart and the other held out open towards Cesario. Cesario, who is Viola dressed as a young man, faces him: a slighter, beardless figure, a head shorter, in a doublet, a short cloak and a flat cap with a feather, one hand on her heart and her cheek flushed red as she looks up at him. Far off on the right, two of Orsino's attendants stand back by a lit doorway.",
      quote: 'Whoe’er I woo, myself would be his wife.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Olivia unveiled',
      art: oliviaUnveiled,
      alt: "A linocut print of a dark, panelled room in Olivia's house. On the left, against a tall window of small diamond panes with its curtain drawn back, stands Cesario, who is Viola dressed as a young man in a feathered cap and a short cloak, holding out one hand in wonder. On the right Olivia, in a long black mourning gown, lifts her black veil back over her head with one hand and holds out the other, showing her face. Her face is the only pale face in the picture, and her cheek is flushed red. Behind her the door of the room is shut.",
      quote: 'Even so quickly may one catch the plague?',
      quoteAt: 'top-right',
    },
    {
      moment: 'A pearl and a priest',
      art: aPearlAndAPriest,
      alt: "A linocut print of Olivia's walled garden on a bright day. High on the left the sun is printed in red, its rays cut round it. Below it Sebastian, a young man in a feathered cap, a ruff and a short cloak, a rapier at his side, looks at a small white pearl on the open fingers of his hand, against a dark clipped box ball. Over the brick wall behind him rise the round trees of the orchard and a church tower with a spire, with a shut garden door in the wall below it. From the right, Olivia, in a black gown with a black veil thrown back from her pale face, comes towards him with one hand held out to him and the other reaching back towards a priest. The priest, an old man with a ring of white hair round a shaven crown, in a long black cassock, waits behind her with his hands together.",
      quote: 'This is the air; that is the glorious sun,',
      quoteAt: 'top-left',
    },
    {
      moment: 'Husband',
      art: husband,
      alt: "A linocut print of the street before Olivia's house by day: a stone house with a great arched gateway standing open, and a brick garden wall with orchard trees running on to the left. On the left Orsino, the Duke, in a circlet, a ruff and a cloak to the knee, his rapier in its scabbard, has turned back and recoils, one open hand held up at his chest, his brow drawn down in anger. In the middle Cesario, who is Viola dressed as a young man in a feathered cap, doublet and short cloak, faces him with both hands spread open and low, bewildered. On the right Olivia, in a black gown and black veil, a red flush on the cheek of her pale face, reaches out with both hands towards Cesario. Behind her, in the dark gateway of the house, a priest in a long black cassock comes out on to the top step, one hand held out.",
      quote: 'Cesario, husband, stay.',
      quoteAt: 'top-left',
    },
    {
      moment: 'One face, one voice',
      art: oneFaceOneVoice,
      alt: "A linocut print of the street before Olivia's house by day, its arched gateway open. In the middle, in front of the gateway, Viola, dressed as the young man Cesario, and her twin brother Sebastian stand face to face, exactly alike: the same face, the same feathered cap, ruff, doublet and short cloak, the same height and the same pose, each holding out one open hand towards the other without touching. Viola is on the left and Sebastian on the right, and each has the same small red flush on the cheek. On the far left Orsino, in a circlet and a long cloak, holds out an open hand towards them in wonder. On the right Antonio, a bearded seaman, bareheaded, holds out his open hand, palm up, asking which is which, and beyond him Olivia, in her black gown and veil, clasps her hands at her breast.",
      quote: 'One face, one voice, one habit, and two persons!',
      quoteAt: 'top-left',
    },
    {
      moment: 'The whole pack of you',
      art: theWholePackOfYou,
      alt: "A linocut print of the street before Olivia's house by day, its arched gateway open. On the left, alone, stands Malvolio the steward, upright in sober black with a white collar, a pointed beard and his chain of office across his chest, his brow drawn down, pointing across the street at the others. Facing him, Feste the fool, in a pointed hood and a chequered coat, raises one forefinger and holds out his other hand. Beside Feste stands Fabian, his head bowed and his arms at his sides. In front of the gateway Olivia, in her black gown and veil, holds up a letter whose wax seal is printed in red, and on the right Orsino, in a circlet and a long cloak, holds out an open hand after Malvolio.",
      quote: 'I’ll be revenged on the whole pack of you.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The wind and the rain',
      art: theWindAndTheRain,
      alt: "A linocut print of the street before Olivia's house in the rain, under a dark sky. Rain slants down across the whole picture, cut in white against the sky and in black across the pale stone and the wet paving. On the right is Olivia's house with its great arched gate shut and two of its upper windows lit, printed in red. On the left, in front of a brick garden wall with dark orchard trees behind it, Feste the fool stands alone in his pointed hood and chequered coat, his head lifted as he sings, his arms held open and one hand stretched out, palm up, into the rain.",
      quote: 'With hey, ho, the wind and the rain,',
      quoteAt: 'top-left',
    },
    {
      moment: 'I am not what I am',
      art: iAmNotWhatIAm,
      alt: "A linocut print of Olivia's walled garden by day. Over the brick wall stand orchard trees and, on the left, a church tower whose clock is striking, with rings of sound cut round the two bells in its belfry. The arched door in the garden wall is shut, and clipped box grows along the foot of the wall. On the gravel walk Olivia, in a black gown with a black veil thrown back, her pale face flushed red on the cheek, reaches one open hand towards Cesario. Cesario, who is Viola dressed as a young man in a doublet, a short cloak and a feathered cap, faces her with one hand laid on her breast.",
      quote: 'Then think you right; I am not what I am.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Yellow stockings',
      art: yellowStockings,
      alt: "A linocut print of Olivia's walled garden by day, with orchard trees and a church tower over the brick wall and clipped box along its foot. On the left Malvolio, the steward, bearded, in sober black with his chain of office across his chest, strides along the walk smiling, one hand on his hip and the other flourished out towards Olivia as if from a kiss. His stockings are cut bright and cross-gartered, the garters crossing in black above and below each knee; the play says the stockings are yellow, which the print leaves to the words. On the right Olivia, in her black gown and veil, her face pale, draws back from him with one open hand raised, and beside her stands Maria, small, in a linen coif, her hands folded.",
      quote: 'Why, this is very midsummer madness.',
      quoteAt: 'top-right',
    },
    {
      moment: 'A duel and an arrest',
      art: aDuelAndAnArrest,
      alt: "A linocut print of the orchard at the end of Olivia's garden by day, with a brick wall behind and round-headed fruit trees on the grass. On the left Sir Toby, bearded and in riding boots, holds his drawn sword with its point to the ground. Beside him tall Sir Andrew, his flaxen hair hanging straight, leans away in fright, holding his sword out at arm's length with his other hand up. In the middle Cesario, who is Viola in a doublet, short cloak and feathered cap, holds her drawn sword point down at her side and reaches an open hand towards Antonio, a bearded sea captain with no cap on. Antonio holds out his hand to her, his sword in its scabbard, as an officer in a steel cap takes him by the shoulder; behind them a second officer, holding a bill upright, points at him. No sword touches anyone.",
      quote: 'Prove true, imagination, O prove true, That I, dear brother, be now ta’en for you!',
      quoteAt: 'top-left',
    },
    {
      moment: 'Mistaken for Cesario',
      art: mistakenForCesario,
      alt: "A linocut print of the street before Olivia's great stone house by day, its arched gate standing open, with the garden wall and orchard trees beyond it on the left. In the middle of the street Olivia, in her black gown and veil, her pale face flushed red on the cheek, holds Sebastian's hand clasped in hers and stretches her other hand, open, back towards her open gate. Sebastian, Viola's twin, dressed exactly as Cesario in a doublet, short cloak and feathered cap, his sword in its scabbard, gives her his hand and lifts the other, open, in bewilderment. Further down the street on the left, Sir Toby, Sir Andrew with his flaxen hair, and Fabian walk away.",
      quote: 'Or I am mad, or else this is a dream.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The dark room',
      art: theDarkRoom,
      alt: "A linocut print of a room in Olivia's house by day, lit by a window in the far wall. On the right, close to us, is the heavy plank door of a dark room, shut and bolted, with a small barred grate high in it. Behind the bars it is black, and Malvolio's bearded face shows in profile at the grate, upright and composed, his hands round two of the bars. To one side of the door, his head well below Malvolio's, Feste stands disguised as the curate Sir Topas, in a long dark gown, a close black cap and a long white false beard, looking up at the grate with one finger raised as he speaks. Further back in the room Sir Toby, bearded, and Maria, small, in her linen coif, stand watching.",
      quote: 'They have laid me here in hideous darkness.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Sebastian is alive',
      art: sebastianIsAlive,
      alt: "A linocut print of the sea-coast under a low sun, printed in red, whose light lies in a path across the sea. Rows of waves run in to break on a pale strip of sand, with dark rocks at the water's edge on the left. On the sand stands Antonio, a sea captain with a short beard, in a knitted seaman's cap, a short jacket and wide breeches, holding one open hand out towards Sebastian. A few steps up a path that climbs the dark headland on the right, towards a walled town with towers on the hilltop, Sebastian, a young man in a feathered cap, a ruff, a doublet and a short cloak, has turned back to him and raises one hand in farewell, its fingers spread.",
      quote: 'But come what may, I do adore thee so,',
      quoteAt: 'top-right',
    },
    {
      moment: 'The ring',
      art: theRing,
      alt: "A linocut print of a sunny street of plastered houses with tiled roofs, leaded windows above, barred windows below and arched, studded doors, paved with square setts. On the left Malvolio, Olivia's steward, in black with a white collar, a pointed beard and his chain of office, walks away with his nose in the air, one open hand flung back towards the ring he has thrown down. The ring lies on the stones in the middle of the street, printed in red, with a glint cut round it. On the right Viola, disguised as the young man Cesario in a feathered cap, a ruff, a doublet and a short cloak, stands looking down at it, one hand held out open.",
      quote: 'O time, thou must untangle this, not I,',
      quoteAt: 'top-right',
    },
    {
      moment: 'Cakes and ale',
      art: cakesAndAle,
      alt: "A linocut print of a dark room in Olivia's house after midnight. A crescent moon and stars show through a window, and one candle, its flame printed in red, lights a table set with a jug, cups and a plate of round cakes. On the left Malvolio, the steward, in black with a white collar, a pointed beard and his chain of office, has stepped in from a dark doorway and stands stiffly with his chin up. Sir Toby, a broad, bearded, balding man in riding boots, has turned on him and points at him, a cup in his other hand, while Maria, small, in a linen cap and a long gown, stands behind Sir Toby with one open hand raised to quieten him. Sir Andrew, tall and thin, his pale flaxen hair hanging straight to his shoulders, sits on a stool at the end of the table with a cup in his hand. On the right Feste the fool, in a pointed hood and a chequered coat, sings with one hand lifted.",
      quote: 'because thou art virtuous, there shall be no more cakes and ale?',
      quoteAt: 'top-right',
    },
    {
      moment: 'Patience on a monument',
      art: patienceOnAMonument,
      alt: "A linocut print of a room in Orsino's palace in the morning, with a chequered floor. On the left, in a tall arched window with the sun shining outside, Viola, disguised as the young man Cesario in a feathered cap, a ruff and a doublet, sits very still on a stone window seat with her hands in her lap, a small red flush on her cheek. On the right Orsino, the young Duke, with a short pointed beard and a pale circlet on his dark hair, sits in a tall chair of state in front of a patterned cloth of state under a canopy, leaning towards her with one open hand held out.",
      quote: 'She sat like patience on a monument,',
      quoteAt: 'top-right',
    },
    {
      moment: 'The letter in the garden',
      art: theLetterInTheGarden,
      alt: "A linocut print of Olivia's garden on a sunny day: a brick wall with a church spire beyond it, the sun shining over the wall, and a gravel walk. On the left stands a great clipped box-tree, a dome of dark leaves, and three men hidden in it look out towards the right: over its top Sir Andrew, his pale flaxen hair hanging straight, and Sir Toby, bald-crowned, bearded and frowning, and round its side Fabian, in a round cap, with one finger to his lips. On the right Malvolio, Olivia's steward, in black with a white collar, a pointed beard and his chain of office, stands on the walk with one hand on his hip, reading a letter he holds up before him, its wax seal printed in red. His shadow stretches from his feet across the walk towards the box-tree.",
      quote: 'be not afraid of greatness.',
      quoteAt: 'top-left',
    },
  ],
  portraits: PORTRAITS,
}
