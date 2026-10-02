/**
 * The Tempest in linocut: the panels for its key moments and the portraits of
 * its people as the play describes them.
 *
 * An edition is held in src/data/full-texts/the-tempest.ts (Project Gutenberg
 * #1540), so every quotation on the art is copied from it, word for word, and
 * the comics test checks it there. A quotation may not run across a paragraph
 * break, and a verse line break is a space, never " / ". Quote from the
 * edition only, never from the guide's paraphrase or from memory.
 *
 * THIS PLAY NEEDS PARTICULAR CARE. The rules in full are in the docblock of
 * ./panels/people.tsx, which every artist on this text reads first. In short:
 * - Caliban is drawn as a man, with the same care as every other figure:
 *   weathered, barefoot, in island dress. No scales, fins, animal features or
 *   caricature. The other characters' names for him ('monster', 'mooncalf',
 *   'fish' and worse) stay in their mouths and are never a quotation, a
 *   caption or an alt text; his own lines are the ones to quote.
 * - Prospero's accusation that Caliban tried to violate Miranda is never drawn
 *   or alluded to in the art.
 * - The storm and the wreck show the ship and the sea, never a drowning
 *   figure: everyone survives.
 * - Ariel is a spirit, light and airy, never a child in danger and never shown
 *   in pain. The cloven pine is described in the words, not drawn in agony.
 *
 * The people are cut once, in ./panels/people.tsx, and every panel draws the
 * recurring characters from there, so a student meets the same Prospero, the
 * same Miranda and the same Caliban in every panel.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs the-tempest --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'

import { theStormAtSea } from './panels/the-storm-at-sea'
import { prosperoTellsMirandaThePast } from './panels/prospero-tells-miranda-the-past'
import { arielAsksForHisFreedom } from './panels/ariel-asks-for-his-freedom'
import { calibanCursesHisMaster } from './panels/caliban-curses-his-master'
import { ferdinandMeetsMiranda } from './panels/ferdinand-meets-miranda'
import { thePlotToKillTheKing } from './panels/the-plot-to-kill-the-king'
import { calibanFindsANewMaster } from './panels/caliban-finds-a-new-master'
import { theLogBearerAndTheLoversVows } from './panels/the-log-bearer-and-the-lovers-vows'
import { thePlotAgainstProspero } from './panels/the-plot-against-prospero'
import { theVanishingBanquet } from './panels/the-vanishing-banquet'
import { theMasqueBrokenOff } from './panels/the-masque-broken-off'
import { virtueNotVengeance } from './panels/virtue-not-vengeance'
import { theBraveNewWorld } from './panels/the-brave-new-world'
import { prosperoAsksToBeSetFree } from './panels/prospero-asks-to-be-set-free'

export const comics: ComicSet = {
  slug: 'the-tempest',
  panels: [
    {
      moment: 'The storm at sea',
      art: theStormAtSea,
      alt: "A linocut print of a ship's deck in a storm, under a black sky full of rain, lit by a fork of lightning on the left. The ship heels hard, so the deck slopes and the mast leans; beyond the rail the sea runs in ridges, white where the lightning lights it, and on the right a great wave rears beyond the rail, its crest curling over in white fingers of foam, and spills across the deck. Above, the great mainsail is set and full of wind, the topsail is furled on its yard, and tongues of fire printed in red burn at the ends of the yards: the spirit Ariel's fire. In the middle of the deck the Boatswain, a seaman in a knitted cap with bare feet, braces his legs, grips a rope that runs down from the yard, and with his other hand points down at the deck, ordering the courtiers below. Facing him are the courtiers, their cloaks blown out by the wind: nearest him, old Gonzalo with a white beard holds up an open hand before his breast; behind him, from the nearest, are Sebastian with a short beard, Antonio in a tall hat with a hand on his sword's hilt, the King in his crown, holding out a hand, and the young Ferdinand, beside the open hatch to the cabins, throwing an arm back to keep his feet. On the right two barefoot mariners lean back and haul on a rope that runs up to the mast.",
      quote: 'What cares these roarers for the name of king?',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Prospero tells Miranda the past',
      art: prosperoTellsMirandaThePast,
      alt: "A linocut print of the open ground before Prospero's cell, a low hut of rough stone with a thatched roof beside a broad lime tree, on a headland above the sea; through its dark doorway a small fire burns red. The storm is passing: its black clouds and their rain draw off over the sea on the right, and the sky is clearing. Behind Prospero his magic mantle hangs over a low stone bench, its border cut white. Prospero, an old man, bald on the crown with white hair at the sides and back, in a long gown, leans towards his daughter and holds out an open hand to her. Miranda, a girl with long dark hair loose down her back, sits on a rock facing him and looks up at him, a tear on her cheek.",
      quote: 'I have done nothing but in care of thee',
      quoteAt: 'top-left',
    },
    {
      moment: 'Ariel asks for his freedom',
      art: arielAsksForHisFreedom,
      alt: "A linocut print of the ground before Prospero's cell on a clear afternoon, the calm sea behind. On the left, by the stone cell beside its lime tree, where a small fire burns red through the doorway, Miranda sits asleep on a rock, her head fallen forward and her hands in her lap. In the middle stands Prospero, an old man in a long gown, a tall staff held before him in one hand; he frowns and points at Ariel with the other. Before him, hanging in the air against a darker stretch of sky, is Ariel, a spirit cut in white: a slender figure in a light shift whose body streams away below the waist into wisps of air, his hair streaming back, holding out both open hands to his master, one at his breast and one at his waist. Far off across the water, on a dark rise, stands a tall pine split from its crown down the middle into two halves bowed apart, empty.",
      quote: 'Remember I have done thee worthy service',
      quoteAt: 'top-left',
    },
    {
      moment: 'Caliban curses his master',
      art: calibanCursesHisMaster,
      alt: "A linocut print of the ground before Prospero's cell in the afternoon, under a sun printed in red. On the left is Caliban's rock, a low hump of stone with a dark opening, and in front of it stands Caliban, a barefoot man with thick dark hair to his collar, in a coarse coat to the knee belted with rope. He stands upright, one hand on his breast and the other arm swept back at the height of his shoulder, its hand open, over the island's low hills behind him. Ahead of him a spring runs down the hillside to the shore, beside a lime tree. On the right, Prospero, an old man in a long gown, holding a tall staff before him, frowns and points at him, and behind her father, a little apart, Miranda stands with her hands folded, looking on. Beyond her is the cell, a low stone hut with a thatched roof, and to the right the sea.",
      quote: 'This island’s mine, by Sycorax my mother',
      quoteAt: 'top-left',
    },
    {
      moment: 'Ferdinand meets Miranda',
      art: ferdinandMeetsMiranda,
      alt: "A linocut print of the rise before Prospero's cell, with the sands and the sea below it on the right. On the left, by the stone cell beside its lime tree, Prospero, an old man in a long gown, stands aside, holding a tall staff before him, and reaches his other hand, open, past it towards the young man. In front of him Miranda, a girl with long dark hair, stands with her hands clasped at her breast, looking at the young man. On the right, Ferdinand, beardless, in a doublet with a ruff, a short cloak and a rapier at his side, has stopped on the path up from the shore and lifts an open hand before him, looking at her. Between them, high in the air, floats Ariel as a sea-nymph, his hair falling like water, his open hands held low before him: he is cut only in outline and fine lines, the sky showing through him, because they cannot see him. Three wavy ribbons of his song, printed in red, rise from his hands and arch through the air to fall above Ferdinand's head.",
      quote: 'At the first sight They have changed eyes.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The plot to kill the King',
      art: thePlotToKillTheKing,
      alt: "A linocut print of open grassland on the island in the afternoon, with the sea and a far headland behind. On the left, against a low grassy bank, two men sit asleep with their eyes shut: old Gonzalo, white-bearded, in a close cap and a long gown, his head bowed on his breast, and beside him the King, Alonso, in his crown, his elbow on his raised knee and his head resting on his hand. On the right two courtiers stand looking down at the sleeping King. Sebastian, in a flat bonnet, with a short beard and a sword at his side, holds his hand to his chin. Behind him Antonio, in a tall hat, leans in close with one hand on Sebastian's shoulder and the other on the hilt of his own sheathed sword. No sword is drawn. Just above Sebastian's head hangs a crown printed in red, with short strokes above it to show it dropping: the crown Antonio imagines for him.",
      quote: 'My strong imagination sees a crown Dropping upon thy head.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Caliban finds a new master',
      art: calibanFindsANewMaster,
      alt: "A linocut print of open ground on the island, with no bush or tree on it and low hills on the horizon. A huge black cloud hangs over the left of the sky, its rain falling far off, and the sky clears to the right. On the left a bundle of logs lies on the ground where it was let fall. Three men walk to the right in a line. Last comes Trinculo, the jester, in a coat patterned with diamonds, hose of two colours and a hood with a long point, looking up at the cloud with a hand held out for the rain. In the middle Stephano, in a tall hat with a broad brim, points ahead. Leading them is Caliban, a barefoot man with thick dark hair, in a coarse coat to the knee belted with rope, striding out with his head up and his mouth open in song, waving one hand back over his shoulder; in his other hand, at his side, he carries Stephano's bottle, printed in red.",
      quote: 'Freedom, high-day! high-day, freedom!',
      quoteAt: 'top-right',
    },
    {
      moment: "The log-bearer and the lovers' vows",
      art: theLogBearerAndTheLoversVows,
      alt: "A linocut print of the ground before Prospero's cell on a clear afternoon, with the sea behind and the sun, printed in red, standing over it on the right. On the left are the low stone cell with its thatched roof, a lime tree behind it, and against its side wall a pile of logs. Behind the pile, further off and seen from the waist up, Prospero, an old man with a tall staff, watches unseen and holds out an open hand towards the two young people. In the middle Miranda, a girl with long dark hair and a tear on her cheek, lays one hand in Ferdinand's and holds the other at her breast. Ferdinand, a young man in a doublet with a ruff and a short cloak, a rapier at his side, carries a rough log on his shoulder, steadying it with one hand, and holds out the other to her.",
      quote: 'I am your wife if you will marry me',
      quoteAt: 'top-left',
    },
    {
      moment: 'The plot against Prospero',
      art: thePlotAgainstProspero,
      alt: 'A linocut print of open ground on the island on a clear afternoon, with the sea behind and a low outcrop of rock on the right. On the left two frightened men: Trinculo, the jester, in a coat patterned with diamonds and a pointed hood, stands with his head bowed and his hands pressed together as if praying, and Stephano, in a broad-brimmed hat, holding a bottle at his side, looks up and throws up an open hand before his face. In the air between them and Caliban floats Ariel, invisible to them, cut only in outline and fine lines: a slender spirit with streaming hair, playing a pipe held to his lips and a small drum at his waist. Three ribbons of his tune, printed in red, rise from the end of the pipe and run out high over the two men. On the right Caliban, a barefoot man with thick dark hair in a coarse coat to the knee, stands easily facing them, his head lifted to listen, and holds out an open hand to calm them.',
      quote: 'Be not afeard. The isle is full of noises',
      quoteAt: 'top-right',
    },
    {
      moment: 'The vanishing banquet',
      art: theVanishingBanquet,
      alt: 'A linocut print of the island under a black sky in thunder and rain, a fork of lightning cut white in the middle. On the left stand four lords. Old Gonzalo, white-bearded, holds out a hand to the King, puzzled. The King, Alonso, in his crown, Sebastian, in a flat bonnet, and Antonio, in a tall hat, have drawn their swords, but the blades hang down to the ground; the King lifts his other hand, its fingers spread, before his face. Before them stands a long table under a white cloth, and on it a banquet cut only in red outlines as it vanishes: a dish of fruit, a jug, a fowl on a platter and a goblet. Over the far end of the table hangs Ariel as a harpy, cut in white: a spirit with streaming hair and great feathered wings, one raised high and one brought down on the table, his brow drawn down, pointing at the three men with swords. On the right, on top of a dark crag, Prospero, with his staff, watches unseen, cut only in outline and fine lines.',
      quote: 'You are three men of sin',
      quoteAt: 'top-left',
    },
    {
      moment: 'The masque broken off',
      art: theMasqueBrokenOff,
      alt: "A linocut print of the ground before Prospero's cell on a clear afternoon, the sea behind. On the left are the stone cell and its lime tree. Ferdinand, a young man in a doublet with a ruff, a short cloak and a rapier, lifts an open hand, and beside him Miranda, a girl with long dark hair, holds her hands clasped at her breast; both look towards Prospero. In the middle Prospero, an old man in a long gown, frowns, holds his tall staff in one hand and flings his other arm out towards a dance of spirits, the hand open. On the right three spirits, cut in white, dance hand in hand: a nymph in a long gown with a wreath of sedge on her long hair, whole; a reaper in a smock and a broad straw hat, whose legs are fading to a broken outline; and a second nymph who is only an outline with the sky showing through her, her hand reaching out to a partner who is no longer there. Over the dance stands a rainbow, its outer band printed in red; on the right it breaks into pieces and fades into the sky.",
      quote: 'We are such stuff As dreams are made on',
      quoteAt: 'top-left',
    },
    {
      moment: 'Virtue, not vengeance',
      art: virtueNotVengeance,
      alt: "A linocut print of the ground before Prospero's cell in the evening, the sky dark overhead and pale low over the sea, where the sun, printed in red, hangs just above the water. On the left the stone cell stands among two lime trees. In the middle stands Prospero, an old man with white hair, in his magic robes: a long mantle over his gown, its border cut white with a row of black lozenges down the front and along the hem. He holds his tall staff in one hand and holds out the other, open, to Ariel. Ariel, a spirit cut in white, his hair streaming back and his body trailing away into wisps of air below the waist, hangs in the air before him and holds out both open hands to him.",
      quote: 'the rarer action is In virtue than in vengeance',
      quoteAt: 'top-left',
    },
    {
      moment: 'The brave new world',
      art: theBraveNewWorld,
      alt: "A linocut print of the ground before Prospero's cell at dusk, the sky darkening overhead and pale low over the sea. On the left, by the stone cell and its lime tree, stands Prospero, an old man with white hair, dressed now as the Duke of Milan in a tall hat with a rapier at his hip and no magic robes. He holds out an open hand towards a small table at the cell's door, where a chessboard stands with the game left on it, its chessmen printed in red, between two empty stools. In front of the table Miranda, a girl with long dark hair, lifts both open hands in wonder and looks at the strangers on the right. In the middle the young Ferdinand and his father the King, who wears a crown, stand face to face holding hands. Beside them old Gonzalo, white-bearded under a close cap, holds his hands clasped and looks down, and Sebastian, with a short beard and a flat bonnet, lifts an open hand. Apart from them all on the right, Antonio, in a tall hat and a long cloak, stands turned away with his head bowed.",
      quote: 'O brave new world That has such people in ’t',
      quoteAt: 'top-left',
    },
    {
      moment: 'Prospero asks to be set free',
      art: prosperoAsksToBeSetFree,
      alt: "A linocut print of a playhouse seen from the side, dark except for a pool of light on the stage. Prospero, an old man with white hair under the Duke of Milan's tall hat, in a long gown with a rapier at his hip and no staff or magic robes, stands alone near the edge of the raised stage, his head a little bowed, and holds out both open hands towards the audience. Behind him is a dark wall with a curtained doorway. Below the edge of the stage on the right, the heads and shoulders of the audience in the pit are turned up towards him, men in caps and hats and a woman in a linen coif; above them, in a gallery behind a rail, three more watch. The print is in black and white only.",
      quote: 'Let your indulgence set me free',
      quoteAt: 'top-left',
    },
  ],
  portraits: PORTRAITS,
}
