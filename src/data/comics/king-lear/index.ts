/**
 * King Lear in linocut: the panels for its key moments and the portraits of
 * its people as the play describes them.
 *
 * An edition is held in src/data/full-texts/king-lear.ts (Project Gutenberg
 * #1532), so every quotation on the art is copied from it, word for word, and
 * the comics test checks it there. A quotation may not run across a paragraph
 * break, and a verse line break is a space, never " / ". Quote from the
 * edition only, never from the guide's paraphrase or from memory, and 15 words
 * at most.
 *
 * THIS PLAY NEEDS PARTICULAR CARE. An old man's eyes are put out on stage,
 * three women die and a king dies over his daughter. The art suggests and
 * never shows. In short, and in full in ./panels/people.tsx:
 * - The blinding of Gloucester (3.7) is never shown, never implied by hands
 *   near his face, and its panel has no red at all: the moment before (bound
 *   in his chair, Cornwall and Regan over him, the servant who will defend
 *   him) or the moment after (led out, a plain cloth band over his eyes).
 * - Every later panel with Gloucester shows the same plain cloth band over his
 *   eyes (`blind` in the kit) and nothing beneath it: no wound, no red.
 * - Kent in the stocks and Lear in the storm show hardship, not injury.
 * - Edgar as Poor Tom is a man in rags, near naked as the text says, always
 *   decently covered; his madness is a disguise, and Lear's is drawn with the
 *   same dignity: never mocked, never a caricature of mental illness.
 * - The duel shows swords, no wound. Goneril's and Regan's deaths and
 *   Cordelia's hanging happen off the page. At Lear's death, never Cordelia's
 *   body: if she is in the panel at all she is covered and turned away.
 * - Red may stand for blood as a symbol, never as a wound, and never on a
 *   mouth or chin, where it reads as blood at a glance. In this play it goes
 *   on no face at all, not even as a flush on the cheek: at panel size the
 *   cheek is just below the eye, and in the play of Gloucester's eyes a red
 *   mark there read on a phone as a hurt eye (Albany's flush, taken off in
 *   the review of 2 October 2026).
 *
 * The people are cut once, in ./panels/people.tsx, and every panel draws the
 * recurring characters from there, so a student meets the same Lear, the same
 * Gloucester and the same Cordelia in every panel. Its docblock sets out what
 * the play says each of them looks like, and where it says it.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs king-lear --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'
import { theLoveTest } from './panels/the-love-test'
import { kentBanished } from './panels/kent-banished'
import { edmundsLetter } from './panels/edmunds-letter'
import { gonerilsHouse } from './panels/gonerils-house'
import { theFoolsWarning } from './panels/the-fools-warning'
import { edgarFramed } from './panels/edgar-framed'
import { kentInTheStocks } from './panels/kent-in-the-stocks'
import { edgarBecomesPoorTom } from './panels/edgar-becomes-poor-tom'
import { strippedOfHisKnights } from './panels/stripped-of-his-knights'
import { defyingTheStorm } from './panels/defying-the-storm'
import { poorTomInTheHovel } from './panels/poor-tom-in-the-hovel'
import { theFarmhouse } from './panels/the-farmhouse'
import { theBlindingOfGloucester } from './panels/the-blinding-of-gloucester'
import { theBlindLedByTheMad } from './panels/the-blind-led-by-the-mad'
import { albanyTurns } from './panels/albany-turns'
import { doverCliff } from './panels/dover-cliff'
import { reasonInMadness } from './panels/reason-in-madness'
import { learWakes } from './panels/lear-wakes'
import { theBattleLost } from './panels/the-battle-lost'
import { birdsInTheCage } from './panels/birds-in-the-cage'
import { theWheelComesFullCircle } from './panels/the-wheel-comes-full-circle'
import { tooLate } from './panels/too-late'
import { learsDeath } from './panels/lears-death'

export const comics: ComicSet = {
  slug: 'king-lear',
  panels: [
    {
      moment: 'The love test',
      art: theLoveTest,
      alt: "A linocut print of King Lear's room of state. On the left, old Lear, with a long white beard and white hair falling to his shoulders, sits on a high carved seat on a dais under a dark cloth of state, wearing a crown printed in red, a dark gown and a fur-edged mantle; he leans forward and points to a large map of the kingdom hanging on a stand in the middle of the room. On the map, an island with forests, rivers and meadows, two lines printed in red divide the land into three. Goneril, in a veil with a band across her brow, stands frowning on the left of the map with her husband Albany behind her, and Regan, her hair in a knot, stands on the right of it with her husband Cornwall, who is bearded. On the right, alone on the open floor, the youngest daughter Cordelia, small and young, her face and her long loose hair cut in white so that she is the one fair-haired figure in a dark gown, faces her father with her hands folded. Behind her, nearest us, against a tall window, stands the Earl of Kent, grey-bearded, with a sword and a cloak, one hand at his breast.",
      quote: 'Nothing will come of nothing: speak again.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Kent banished, Cordelia taken by France',
      art: kentBanished,
      alt: 'A linocut print of the same room of state a few moments later. On the left, in front of his empty high seat, old Lear, white-haired and white-bearded, bareheaded now, stands on the dais frowning, one hand laid on the hilt of the sword at his side, still in its scabbard, and the other pointing across the room at the Earl of Kent. In the middle, Kent, grey-bearded, faces the King with one hand on his heart and the other held out to him, open and low. Behind them Albany holds out an open hand towards the King, and bearded Cornwall holds the crown that Lear has just given away, printed in red. On the right, apart, the youngest daughter Cordelia, fair-haired, stands with her hands folded, watching Kent, and beyond her Goneril, veiled, and Regan stand side by side by the window, watching.',
      quote: 'See better, Lear; and let me still remain The true blank of thine eye.',
      quoteAt: 'top-right',
    },
    {
      moment: "Edmund's letter",
      art: edmundsLetter,
      alt: "A linocut print of a stone hall in the Earl of Gloucester's castle. Nearest us on the left, Edmund, a handsome young man with short dark curls, a short cloak and a sword, lifts his head with a knowing smile and holds up a folded letter, closed with a seal printed in red, as if showing it to the heavens. Behind him is a tall arched window, and on the back wall a dark hanging. On the right, in a lit arched doorway, his father Gloucester, an old man with a white beard, a soft round cap and a long gown, is coming into the hall with his head bowed and one open hand lifted in dismay, not yet seeing his son or the letter.",
      quote: 'Now, gods, stand up for bastards!',
      quoteAt: 'top-right',
    },
    {
      moment: "Goneril's house",
      art: gonerilsHouse,
      alt: "A linocut print of a stone hall in the Duke of Albany's palace, lit only by a fire burning in an iron brazier, its flames printed in red. In the middle, old Lear, white-haired and white-bearded, bareheaded, in a dark gown with a fur collar, stands with one hand on his own breast and the other held out, open, to his daughter Goneril, who stands across the fire on the right, veiled, a band across her brow, frowning, with her hands folded. The firelight throws Lear's shadow, huge and black, on the wall behind him. At his side the Fool, small and slight, in a crested fool's cap and a striped coat, points up at the shadow. On the far right, by the wall, Kent stands watching his master, in his disguise, a hood drawn over his head and his grey beard showing.",
      quote: 'Who is it that can tell me who I am?',
      quoteAt: 'top-right',
    },
    {
      moment: "The Fool's warning",
      art: theFoolsWarning,
      alt: "A linocut print of the paved court in front of the Duke of Albany's palace at sunset. On the left is the palace's dark stone front with its great arched door shut. In the middle, old Lear, white-haired and white-bearded, in a dark gown with a fur collar and a fur-edged mantle, lifts his face to the sky with his hands pressed together in prayer. Facing him, the Fool, small and slight in his crested cap and striped coat, looks up at him and points at him. Above Lear, seven small stars have come out close together in the darkening sky. On the right, beyond a low wall and an open gate, the sun is setting, printed in red, over low hills, and far off on the road a small hooded figure walks away: Kent, sent on ahead with the King's letters.",
      quote: 'Thou shouldst not have been old till thou hadst been wise.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Edgar framed',
      art: edgarFramed,
      alt: "A linocut print of the walled court of Gloucester's castle at night, under a moon half hidden in cloud above the battlements. In the middle two young men fight with drawn swords, their blades crossed. On the left Edmund, with short dark curls and a short cloak, presses forward with a knowing smile, his free hand flung back. On the right his brother Edgar, his straight dark hair to his shoulders, falls back towards a small dark doorway in the wall, his mouth open in surprise, his sword raised to guard himself and his free hand reaching behind him. Behind Edmund, through an open door in the tower on the left, two servants are coming down a lit passage holding up torches whose flames are printed in red.",
      quote: 'In cunning I must draw my sword upon you:',
      quoteAt: 'top-left',
    },
    {
      moment: 'Kent in the stocks',
      art: kentInTheStocks,
      alt: "A linocut print of the gate of Gloucester's castle at dawn. On the left stand the castle's walls and its shut gate. On the right the sun, printed in red, is half risen over dark, bare country with two leafless trees on the skyline, and the sky round it is cut almost white. On the open ground before the castle, to the right of the gate and facing the sunrise, Kent, disguised as a servant in a plain tunic with a hood drawn up over his head and his grey beard showing, sits on a low bench with his legs locked in the stocks, two heavy boards held between posts, his feet standing up out of the holes. He holds an open letter up in both hands towards the sunrise and reads it with heavy eyes.",
      quote: 'Nothing almost sees miracles But misery.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Edgar becomes Poor Tom',
      art: edgarBecomesPoorTom,
      alt: 'A linocut print of open country on a windy morning. On the left stands a great bare oak with a long split hollow in its trunk, and at its foot lie the clothes Edgar has taken off: his tunic in a heap with its belt across it, and his sword in its scabbard. Edgar, now Poor Tom, strides away from them towards the open country with his arms spread wide to the wind. He is barefoot and bare-armed, wrapped from his chest to his knees in a ragged blanket tied with a rope, and his long hair is tangled into knots. Far off a track winds across the fields, a sheep-cote and a windmill stand on the hills, and two horsemen ride along the skyline. The sun, printed in red, shows low through streaming cloud.',
      quote: 'Poor Turlygod! poor Tom, That’s something yet: Edgar I nothing am.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Stripped of his knights',
      art: strippedOfHisKnights,
      alt: "A linocut print of the gate of Gloucester's castle at nightfall as a storm begins: rain slants across a dark sky and lightning flashes far off on the right. The gate stands open on a lit hall, and a torch burns in red in a bracket high above it. Before the gate Goneril, veiled, with a band across her brow, and Regan, her hair in a knot, stand side by side holding hands, and Cornwall, with a dark pointed beard, stands frowning beside them. The empty stocks stand by the gate. On the right the old King, bareheaded, with long white hair and a long white beard, in a dark gown with a fur collar, has turned his back on them and on the house. He presses one hand to his heart and holds the hand of the Fool, a small figure in a crested cap and a striped coat, who looks up at him. Kent, hooded, follows them.",
      quote: 'O fool, I shall go mad!',
      quoteAt: 'top-left',
    },
    {
      moment: 'Defying the storm',
      art: defyingTheStorm,
      alt: "A linocut print of an open heath in a storm at night, with rain driving in from the right. On a rise in the ground the old King stands bareheaded, his long white hair blown back by the wind and his long white beard on his chest, flinging his arms wide to the sky with his hands open, the skirt of his dark gown blown back by the wind. The Fool, a small figure in a crested cap and a striped coat, crouches against the King's gown on the side away from the wind, holding on to the back of it with both hands and looking up at him. Far off on the right a forked bolt of lightning strikes a bare oak on the skyline and splits it, and the oak burns with flames printed in red.",
      quote: 'Here I stand your slave, A poor, infirm, weak, and despis’d old man:',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Poor Tom in the hovel',
      art: poorTomInTheHovel,
      alt: "A linocut print of a heath at night in a storm, rain driving across a black sky that is lit low behind the clouds. On the left stands a low thatched hovel with a dark doorway and straw trodden out of it, a thorn tree bent by the wind over its roof. Just outside the door, Edgar disguised as Poor Tom, barefoot, his long hair matted in knots and a ragged blanket wrapped round him from shoulder to knee, stands hunched against the cold, holding out one open hand as if for charity. Facing him, old King Lear, bareheaded, with white hair to his shoulders and a long white beard, holds one open hand out towards him and with the other pulls at the fur collar of his own dark gown. Behind the King, Kent, disguised in a hooded tunic, his grey beard showing, reaches a hand towards the King's shoulder, and the Fool, in a coxcomb and a striped coat, points away to the right, where the old Earl of Gloucester, white-bearded and capped, comes over the heath holding up a torch whose flame, printed in red, is blown back by the wind.",
      quote: 'Poor naked wretches, wheresoe’er you are,',
      quoteAt: 'top-right',
    },
    {
      moment: 'The farmhouse',
      art: theFarmhouse,
      alt: 'A linocut print of a low farmhouse room at night, with timber-framed walls, a small dark window and a board floor, lit by one candle on a shelf whose flame is printed in red. On the left, three men sit in a row on a long bench as judges: Edgar disguised as Poor Tom, wrapped in his ragged blanket, his matted head bowed and a tear on his cheek; the Fool, in his coxcomb and striped coat, holding out an open hand towards an empty joint-stool that stands in the light in the middle of the floor; and Kent, hooded and grey-bearded, his head bowed. On the right, old King Lear, white-haired and white-bearded in a dark gown, stands facing the bench and points down at the empty stool as if it were a prisoner on trial. Behind him, cushions lie ready on a pallet of straw on the floor.',
      quote: 'And I’ll go to bed at noon.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The blinding of Gloucester',
      art: theBlindingOfGloucester,
      alt: "A linocut print, in black and white only, of a stone-walled room in a castle at night, lit by a torch in an iron bracket on the wall, its flame cut in white. In the middle, the old Earl of Gloucester, white-bearded and wearing a soft cap, sits in a tall carved chair, bound to it with rope wound three times round his chest and the chair's back and tied at his wrist; he holds his head up, facing his questioners. On the right, the Duke of Cornwall, dark-bearded and frowning, in a long cloak with a sword at his hip, holds out an open letter towards the Earl's chest, and beside him Regan, her hair in a knot, points at the Earl. On the left, by an arched doorway, a young servant stands watching with his hand on the hilt of his sword.",
      quote: 'I am tied to the stake, and I must stand the course.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The blind led by the mad',
      art: theBlindLedByTheMad,
      alt: "A linocut print of an open heath on the morning after the storm. The last dark cloud hangs over the left of the sky, and on the right the sun, printed in red, is just up over the rim of the heath, its rays cut round it. A worn track runs across the heath towards the sun. On it Edgar, disguised as Poor Tom, barefoot, his hair matted in knots and a ragged blanket wrapped round him, walks ahead with his eyes lowered, leading his blind father. The old Earl of Gloucester, white-bearded, in a cap and a long dark gown, follows with one open hand on his son's shoulder; a plain white cloth band is tied over his eyes, its ends hanging at the back of his head. Far off on the left, small, the old man who led him before walks away across the heath.",
      quote: 'I stumbled when I saw.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Albany turns',
      art: albanyTurns,
      alt: "A linocut print, in black and white only, of the court before the Duke of Albany's palace on a windy day. On the left is the palace's stone front with its arched door open. Long streaks of cloud drive across the pale sky, trees bend on a dark rise in the distance, and dust blows along the paved court from the left. The Duke of Albany, clean-shaven, with dark hair to his jaw, in a long tunic and cloak with a sword at his hip, has stepped out towards his wife and points at her, frowning. Goneril, veiled, with a band across her brow, stands facing him with her head up and one hand on her hip, the wind blowing the back of her long dark gown.",
      quote: 'You are not worth the dust which the rude wind Blows in your face!',
      quoteAt: 'top-right',
    },
    {
      moment: 'Dover cliff',
      art: doverCliff,
      alt: "A linocut print, in black and white only, of open, level downland near Dover on a pale day. The grass is cut in flat rows all the way to a low far ridge with a copse on the left, and the sea is a dark band on the horizon on the right. In the middle two men stand on the flat ground. The old Earl of Gloucester, white-bearded, in a soft cap and a long dark gown, has a plain white cloth band tied over his eyes; he stands upright with his face lifted and holds out one hand to his son. A step ahead of him, Edgar, a young man with dark hair to his shoulders in a plain tunic, holds his father's hand behind him and bends forward to look down at the grass in front of his feet, his other hand held out open over it, as if over the edge of a cliff that is not there.",
      quote: 'How fearful And dizzy ’tis to cast one’s eyes so low!',
      quoteAt: 'top-right',
    },
    {
      moment: 'Reason in madness',
      art: reasonInMadness,
      alt: "A linocut print, in black and white only, of the same level downland near Dover, the sea a dark band on the horizon. On the left, old King Lear, with a long white beard and white hair to his shoulders, stands upright in a dark gown with a fur collar, crowned with a tangle of wild weeds: leaves and stalks of grass sticking out every way, with small white flowers among them. He holds one open hand out low in front of him. Kneeling before him, the blind Earl of Gloucester, white-bearded and capped, a plain white cloth band tied over his eyes, reaches up with both open hands towards the King's hand. On the right, Edgar, in a plain tunic, his dark hair to his shoulders, stands a little apart with his head bowed, his eyes down and one hand on his heart.",
      quote: 'Ay, every inch a king.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Lear wakes',
      art: learWakes,
      alt: 'A linocut print, in black and white only, of the inside of a tent by day. The canvas walls and their seams are lit from an open doorway on the right, its flaps tied back on the bright camp outside, and fall into shadow in the far corner, where a low bed stands with a white sheet and pillow. Old King Lear, white-haired and white-bearded, in a plain dark gown with a fur collar, sits forward on the edge of the bed and reaches one open hand out towards his daughter. Cordelia, young and fair-haired, her long hair loose under a small circlet, kneels on the floor before him and lifts both open hands up towards his. On the right, in the light from the door, Kent stands watching, in a plain hooded tunic, his grey beard showing.',
      quote: 'I am a very foolish fond old man',
      quoteAt: 'top-left',
    },
    {
      moment: 'The battle lost',
      art: theBattleLost,
      alt: 'A linocut print of a level field on a pale day. On the left a broad old tree spreads its dark crown over the field and throws its shade on the grass. At its foot the blind Earl of Gloucester, white-bearded and capped, a plain white cloth band tied over his eyes, sits on the roots with his head bowed and his hands in his lap. Edgar, a young man in a plain tunic with dark hair to his shoulders, has come back across the field in haste, his other arm swung out behind him, and stoops towards his father with one open hand held out. Far off on the right, white smoke billows up from a low rise where spears stand and lean, and a banner printed in red, the colours of the beaten army, leans down into the smoke.',
      quote: 'Men must endure Their going hence, even as their coming hither; Ripeness is all.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Birds in the cage',
      art: birdsInTheCage,
      alt: 'A linocut print of the British camp near Dover by day: a level field, a large tent and a drum on the left under a banner printed in red, and far off on the right a small castle on a hill. On the left, Edmund, a young man with short dark curls in a mail shirt, smiling, hands a folded note closed with a red seal to a bearded captain, who reaches for it. To the right of them, two soldiers with tall spears lead the prisoners away towards the castle: old King Lear, white-haired and white-bearded in a long dark gown, walks with his hand on his daughter’s shoulder and his head bent towards her, and Cordelia, young and fair-haired, wearing a small circlet, goes beside him with her head bowed.',
      quote: 'We two alone will sing like birds i’ the cage',
      quoteAt: 'top-right',
    },
    {
      moment: 'The wheel comes full circle',
      art: theWheelComesFullCircle,
      alt: "A linocut print of the British camp near Dover by day: round tents on a level field and the sea far off on the right. In the middle two men in mail shirts fight with swords, their blades crossed in the air above them, touching no one. On the left Edgar, his head shut in a flat-topped helm with only a slit for his eyes, drives forward; on the right Edmund, bareheaded, with short dark curls, leans back as he meets the blow. On the far left a trumpeter sounds a long trumpet beside a large tent. On the right Albany, holding a folded letter, and Goneril, veiled and frowning, her hand at her breast, stand watching beneath the camp's colours, a banner on a tall staff printed in red.",
      quote: 'The wheel is come full circle; I am here.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Too late',
      art: tooLate,
      alt: "A linocut print of the same camp, its level field stretching away to a small castle on a far hill on the right. On the left Kent, hooded, his grey beard showing, has just arrived and holds out an open hand, asking. Beside him Albany points across the field towards the castle, calling out. In the middle Edmund sits on the ground in his mail shirt, propped on one hand, holding up his sword by the blade with its point to the ground, and Edgar, in mail and bareheaded, his dark hair to his shoulders, takes it by the hilt as he strides off towards the castle. Behind them stand a tent and the camp's colours, a banner on a tall staff printed in red.",
      quote: 'Nay, send in time.',
      quoteAt: 'top-right',
    },
    {
      moment: "Lear's death",
      art: learsDeath,
      alt: "A linocut print of the same camp, seen from low down. On the right, nearest to us, old King Lear kneels, with a bald crown, white hair to his shoulders and a long white beard, in a plain dark gown, holding up a small feather before his face and watching it closely; whatever he watches over lies beyond the edge of the picture. Behind him Kent, hooded and grey-bearded, kneels on one knee and reaches an open hand towards his back. Further back Edgar, in a mail shirt, holds out an open hand towards Kent, and Albany stands with his head bowed and a hand on his breast. On the left are a tent and the camp's colours, a banner on a tall staff printed in red.",
      quote: 'This feather stirs; she lives!',
      quoteAt: 'top-right',
    },
  ],
  portraits: PORTRAITS,
}
