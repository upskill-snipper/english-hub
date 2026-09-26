/**
 * Macbeth in linocut: the panels for its key moments and the portraits of its
 * people as the play describes them.
 *
 * No edition of Macbeth is held in src/data/full-texts, so every quotation on
 * the art is copied from the guide's own verified quotations in
 * src/data/study-guides/macbeth.ts (its timeline, extracts and annotations,
 * checked against the Folger text), and the comics test checks it there.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs macbeth --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { theWitchesMeet } from './panels/the-witches-meet'
import { braveMacbeth } from './panels/brave-macbeth'
import { theProphecies } from './panels/the-prophecies'
import { thePrinceOfCumberland } from './panels/the-prince-of-cumberland'
import { ladyMacbethsInvocation } from './panels/lady-macbeths-invocation'
import { duncanArrives } from './panels/duncan-arrives'
import { macbethWavers } from './panels/macbeth-wavers'
import { theDagger } from './panels/the-dagger'
import { theMurder } from './panels/the-murder'
import { theDiscovery } from './panels/the-discovery'
import { natureInDisorder } from './panels/nature-in-disorder'
import { banquoSuspects } from './panels/banquo-suspects'
import { scorpionsInTheMind } from './panels/scorpions-in-the-mind'
import { theAmbush } from './panels/the-ambush'
import { theBanquet } from './panels/the-banquet'
import { theApparitions } from './panels/the-apparitions'
import { macduffsFamily } from './panels/macduffs-family'
import { malcolmTestsMacduff } from './panels/malcolm-tests-macduff'
import { theSleepwalking } from './panels/the-sleepwalking'
import { macbethAtBay } from './panels/macbeth-at-bay'
import { birnamWood } from './panels/birnam-wood'
import { tomorrow } from './panels/tomorrow'
import { macduffAndMacbeth } from './panels/macduff-and-macbeth'
import { PORTRAITS } from './portraits'

export const comics: ComicSet = {
  slug: 'macbeth',
  panels: [
    {
      moment: 'The witches meet',
      art: theWitchesMeet,
      alt: 'A linocut print of a bare heath in a thunderstorm. A jagged bolt of lightning splits the sky in the middle, and rain drives across the right. Three witches stand black against the lit sky, bent and thin, in ragged shawls torn into tatters, with straggling beards and long bony fingers: the one on the left reaches up towards the lightning, the tallest raises both arms, and the smallest leans on a staff. Their feet are lost in a bank of white fog. On the left a dead thorn tree, white in the lightning, bends in the wind, a cat stands with its back arched at the edge of the fog, and a toad squats nearer the reader. Far off on the right, the fires of the battle burn red along the horizon under dark billows of smoke.',
      quote: 'Fair is foul, and foul is fair',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Brave Macbeth',
      art: braveMacbeth,
      alt: "A linocut print of King Duncan's camp beside a battle. On the left, on a ridge, the armies' spears and banners stand black against the pale haze of the fight, with dark smoke rising behind them. In the middle, a captain who has come from the fight is down on one knee, holding himself up on his spear and flinging his other arm back towards the ridge as he tells the story. On the right, in front of a large pale tent with a pennant, old King Duncan, with a white beard and a red crown, lifts a hand in praise, and his young son Malcolm, beardless, holds out a hand to the captain. Macbeth himself is not in the picture.",
      quote: 'O valiant cousin, worthy gentleman',
      quoteAt: 'bottom-left',
    },
    {
      moment: 'The prophecies',
      art: theProphecies,
      alt: "A linocut print of a heath by day under a split sky: a dark storm with rain and a far fork of lightning over the left, the sun breaking through on the right. On the left the three witches stand in a row in a low mist, bent and bearded, in ragged shawls: the nearest points a long bony finger at Macbeth, the next lays a finger on her lips, and the one at the back lifts both arms. On the right Macbeth, a soldier in a mail shirt and cloak, starts back from them with one hand thrown up and the other on his sword. Behind him Banquo stands his ground, a spear upright in one hand, the other held out towards the witches. In the air above Macbeth's head, not on it, a crown printed in red hangs inside a dark disc shot through with rays of light.",
      quote: 'All hail, Macbeth, that shalt be king hereafter',
      quoteAt: 'top-left',
    },
    {
      moment: 'The Prince of Cumberland',
      art: thePrinceOfCumberland,
      alt: "A linocut print of King Duncan's hall at Forres. On the left, old King Duncan, white-bearded and wearing a red crown, sits on a high-backed throne on a stepped dais, under a dark cloth of state cut with white stars, and holds out his hand over his son Malcolm, who kneels on the step below him with his head bowed. Two thanes stand beyond them, watching. In the foreground on the right, large and close, Macbeth has turned his back on the throne: his face, in profile, is black against the bright window behind him, and one fist is clenched at his chest over his mail shirt.",
      quote: 'Stars, hide your fires; / Let not light see my black and deep desires',
      quoteAt: 'bottom-left',
    },
    {
      moment: "Lady Macbeth's invocation",
      art: ladyMacbethsInvocation,
      alt: "A linocut print of a dark stone chamber in Macbeth's castle at the end of the day. Lady Macbeth, in a long gown and a veil, stands in the middle of the room holding her husband's letter lowered in one hand, and lifts her other arm high towards a tall window, her head tipped back. Through the window the evening sky is pale, the low sun is a red disc barred with cloud, and a raven sits on the battlements outside with its beak open. Black smoke billows in at the top of the window towards her raised hand and spills over the sill onto the floor. The window's light throws her shadow, arm raised and letter in hand, large on the wall to the left.",
      quote: 'Come, thick night',
      quoteAt: 'top-left',
    },
    {
      moment: 'Duncan arrives',
      art: duncanArrives,
      alt: "A linocut print of King Duncan arriving at Macbeth's castle on a summer evening. On the left, the old king, with a white beard, a red crown and a long robe, lifts an open hand towards the castle in admiration. Behind him Banquo, a soldier with a sword at his hip, points up at the martlets, small swallow-like birds that fly round the battlements and nest under the ledge of the wall. Beyond them a torch and spears mark the royal train. On the right stands the castle, with a round tower, a tall keep and an arched gate, black inside. In the gateway Lady Macbeth, cut in white against the dark, bows to welcome the king, between two torches burning red.",
      quote: 'This castle hath a pleasant seat',
      quoteAt: 'top-left',
    },
    {
      moment: 'Macbeth wavers',
      art: macbethWavers,
      alt: 'A linocut print of Macbeth and Lady Macbeth arguing in a dark passage outside the feast. Through a wide stone arch behind them the great hall is bright: a long table laid with dishes and candles, guests seated along it, and at its head King Duncan in a high chair, his crown printed in red. In the foreground the couple are black silhouettes against that light. On the left Lady Macbeth, in a long gown and veil, leans towards her husband and points at him. On the right Macbeth leans away from her, one hand raised with the palm out, his head bowed.',
      quote: 'When you durst do it, then you were a man',
      quoteAt: 'top-right',
    },
    {
      moment: 'The dagger',
      art: theDagger,
      alt: "A linocut print of Macbeth alone in the courtyard of his castle at night, with no moon and no stars. He is a black silhouette with a dagger sheathed at his belt, reaching out with one open hand towards another dagger that hangs in the empty air in front of him, its handle towards his hand. The floating dagger is cut in white and throws rays of light across the dark; red drops of blood mark its blade and handle. Its point is aimed up a stone stair on the right towards the closed door of the king's chamber, where rings of sound spread from a small bell. Far off on the left, through an arch, Banquo and his son Fleance walk away by the red light of Fleance's torch.",
      quote: 'Is this a dagger which I see before me',
      quoteAt: 'top-left',
    },
    {
      moment: 'The murder',
      art: theMurder,
      alt: "A linocut print of Macbeth and Lady Macbeth in the dark courtyard after the murder, which is not shown. On the right, at the foot of the stair to the king's chamber, whose door stands open on blackness, Macbeth bows his head over his own open hands, held up before him, and they are red. Facing him on the left, Lady Macbeth in her gown and veil, back from the king's chamber, reaches out to him, and her open hand is red too. Neither of them holds a dagger. A torch burns white on the wall between them, an owl watches from a ledge by the king's door, and on the far left white marks of knocking break out round the gate.",
      quote: 'A little water clears us of this deed',
      quoteAt: 'top-left',
    },
    {
      moment: 'The discovery',
      art: theDiscovery,
      alt: "A linocut print of the household woken in the courtyard after the king is found dead, which is not shown. At the top of a stair on the right, Macduff stands before the open, black doorway of the king's chamber with both arms flung up in horror, and beside the stair a bell printed in red swings and rings. At the foot of the stair, in their night-gowns, Macbeth spreads his hands as he speaks and Lady Macbeth sways back with a hand to her brow, while Lennox looks up at Macduff. In the foreground on the left, Duncan's two young sons, Malcolm and Donalbain, stand apart in their night-gowns, watching the others; Donalbain leans close to whisper in his brother's ear.",
      quote: "There's daggers in men's smiles",
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Nature in disorder',
      art: natureInDisorder,
      alt: "A linocut print of the road outside Macbeth's castle, by day, under a black sky. In the middle of the sky the sun is a red disc with bands of black night drawn tight across it, and only a thin strip of daylight lies along the horizon. High to the right an owl, wings raised and talons out, stoops on a falcon, and a few feathers fall. Below, two of Duncan's horses rear at each other. On the right stands the dark castle, and a small cloaked figure, Macduff, walks away from its gate. On the left, in the foreground, an old man with a white beard, bent over his staff, and Ross, a nobleman in a cloak, look up at the sky, and Ross points at the darkened sun.",
      quote: "'Tis unnatural, / Even like the deed that's done",
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Banquo suspects',
      art: banquoSuspects,
      alt: 'A linocut print of a stone hall in the royal palace. On the left Banquo, a bearded man in a riding cloak, with a sword at his side, stands black against a tall bright window, one hand raised to his beard, looking across the hall past a stone pillar. On the right, up three steps on a dais, Macbeth sits on a high-backed throne, facing him and leaning forward, gripping an upright sceptre, with a red crown on his head. Behind the throne, in the bright arch of an open door, two plain, bare-headed men stand waiting in shadow: the murderers.',
      quote: 'To be thus is nothing, / But to be safely thus',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Scorpions in the mind',
      art: scorpionsInTheMind,
      alt: 'A linocut print of a room in the palace at dusk, lit by one candle. Through an arched window on the left, crows fly towards a dark wood under the last of the light. Lady Macbeth, in a long gown and a veil with a small crown, stands at the end of a table and reaches a hand towards her husband. A candle with a red flame stands on the table between them. Behind the table Macbeth sits with his head bowed into his hand, a red crown on his head. The candle throws his shadow huge on the wall behind him, crown and all, and five red scorpions crawl over the shadow of his head and shoulders.',
      quote: 'O, full of scorpions is my mind, dear wife',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The ambush',
      art: theAmbush,
      alt: 'A linocut print of a road through a park at dusk, the sky dark but for streaks of light low on the left, and the first rain slanting down on the right. From the left, out of the trees, come three men in plain caps and coats: the nearest lunges forward with a dagger raised above his head, the next swings a cudgel back over his shoulder, and the third points ahead. None of them has struck. A burning torch, knocked away, tumbles through the air above them, its red flame the only light. In the middle Banquo, a bearded man in a cloak, has turned to face them with one open hand raised against them and the other arm flung back towards his son. On the right, his son Fleance, a boy, runs away along the road, towards the lit gate of the palace far off.',
      quote: 'Fly, good Fleance, fly, fly, fly',
      quoteAt: 'top-right',
    },
    {
      moment: 'The banquet',
      art: theBanquet,
      alt: "A linocut print of the banqueting hall at night. Along a table spread with a white cloth, cups and two candles with red flames, four lords sit, all turned to look at Macbeth. A fifth, Lennox, stands behind the table and holds out his hand towards the high chair at its end, Macbeth's own place. In that chair sits the ghost of Banquo, cut in white as if made of light, a bearded man with long, loose, wild hair, his eye a dark hollow, staring at Macbeth. He has no wound. On the right Macbeth, in a long robe and a red crown, has sprung back from the table, pointing at the chair, his other fist clenched at his side. Lady Macbeth, veiled and crowned, stands at his side with her hand on his arm.",
      quote: 'Thou canst not say I did it',
      quoteAt: 'bottom-left',
    },
    {
      moment: 'The apparitions',
      art: theApparitions,
      alt: 'A linocut print of a dark cave. In the middle a great black cauldron stands on three legs over a red fire, and a column of pale steam rises from it to the top of the picture. In the steam three apparitions rise one after another: high on the left, a head in a pointed helmet and a mail hood, its lit face staring; to the right, a small black figure of a child ringed in red; lower down, a child wearing a crown and holding a young tree upright. Two witches in ragged shawls lean over the cauldron with their bony hands raised, and the third, further right, lays a finger on her lips. On the left Macbeth, bearded, in a mail shirt and cloak, with a red crown on his head, flings out an arm at them, his other hand on his sword. On the right eight crowned kings, cut in white like ghosts, stand in a line that shrinks away into the dark; the nearest holds up a round mirror in which more crowns appear.',
      quote: 'By the pricking of my thumbs, / Something wicked this way comes',
      quoteAt: 'top-right',
    },
    {
      moment: "Macduff's family",
      art: macduffsFamily,
      alt: "A linocut print of a stone room in Macduff's castle. On the left two men in hooded cloaks stand in an arched doorway, black against the light behind them, with swords at their sides; the nearer one steps in and reaches out a hand. The door beside them stands open. Their long shadows stretch across the lit floor towards the right, where Lady Macduff, in a long gown and a veil, cut pale, faces them with one hand raised, palm out. Her young son holds on to her gown behind her, and her other hand rests on his head. Behind them on the right a small fire burns red in the hearth.",
      quote: 'I have done no harm',
      quoteAt: 'top-right',
    },
    {
      moment: 'Malcolm tests Macduff',
      art: malcolmTestsMacduff,
      alt: 'A linocut print of three Scottish noblemen standing in the open in England, black against a pale sky. On the left a great tree spreads its dark crown over them, and far off on the horizon to the right stands a palace with towers. In the middle Macduff, bearded, bows his head with his soft cap pulled down over his eyes; one hand is clenched over his heart and the other closes on the hilt of his sword, printed in red. Malcolm, young and beardless, faces him and puts a hand on his shoulder, his other hand clenched. Ross, who brought the news, stands behind Macduff with his head bowed and his hands clasped. A kite, a small bird of prey, hangs in the sky above them.',
      quote: 'But I must also feel it as a man',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The sleepwalking',
      art: theSleepwalking,
      alt: 'A linocut print of a dark stone room in the castle at Dunsinane at night. In the middle a tall iron stand holds a lit taper; its small red flame is the only light, and its rays are cut into the stone round it. To its right Lady Macbeth walks in a long pale nightgown, her dark hair loose down her back and her eyes wide open and blank. She holds her hands together before her, rubbing one with the other, and one small red spot marks her hand. Her shadow rises on the wall behind her, and beyond it is a dark arched doorway. On the left, in the shadows, the Doctor, a grey-haired man in a long gown, writes on a tablet, and the Gentlewoman beside him, in a veil, holds her hand to her mouth.',
      quote: "Yet here's a spot.",
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Macbeth at bay',
      art: macbethAtBay,
      alt: 'A linocut print of a stone chamber in the castle at Dunsinane. In the middle Macbeth stands black against a deep arched window, in a mail shirt and cloak, with his sword at his hip and a red crown on his head. He flings out one hand against the Doctor, a grey-haired older man in a long gown on the left, who bows his head and holds up a small white phial of medicine. Through the window, far off on the hills, lies the dark clump of Birnam Wood. On the right a torch burns red in an iron bracket on the wall, and his helmet and round shield wait on a chest.',
      quote: 'Throw physic to the dogs',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Birnam Wood',
      art: birnamWood,
      alt: 'A linocut print of an open field beside Birnam Wood. On the left the wood is a dark mass of trees, and at its edge a soldier in a pointed helmet raises an axe to hew down a leafy bough. In front of him Malcolm, young, bareheaded and beardless, points at the trees as he gives the order, with Macduff, bearded and helmeted, and old Siward, with a long beard, standing beside him in mail. On the right the soldiers march away towards the castle of Dunsinane, small on a far hill, each hidden behind the leafy bough he holds up before him like a wood on the move, and one of them carries a staff with a red banner.',
      caption: "The witches' impossible condition is about to be met by a soldier's trick.",
      captionAt: 'top-left',
    },
    {
      moment: 'Tomorrow',
      art: tomorrow,
      alt: 'A linocut print of a stone room in the castle at Dunsinane, lit by a single candle. In the middle a short stub of candle burns with a red flame on a tall iron stand. To its right Macbeth stands in his mail shirt, cloak and red crown, his head bowed, holding one open hand out towards the flame. Behind him the candle throws his shadow high up the wall, larger than he is, crown and all. On the left, in the pale arch of a door to the inner rooms, stands Seyton, a smaller dark figure with his head bowed and his hands clasped, who has just brought the news that the Queen is dead.',
      quote: "Life's but a walking shadow, a poor player",
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Macduff and Macbeth',
      art: macduffAndMacbeth,
      alt: 'A linocut print of the field below the castle of Dunsinane after the battle, with the taken castle dark on its hill behind on the left. In the foreground on the left lie the things Macbeth has left behind: his round shield, thrown down on the grass, his sword beside it, and his crown, printed in red, fallen on its side. In the middle Macduff, bearded and helmeted, in mail, raises his sword high towards Malcolm, who stands on the right, young and bareheaded, and lifts an open hand to receive the greeting. Behind Malcolm old Siward and another thane raise their swords too, and a third holds up a staff with a red banner.',
      quote: 'this dead butcher and his fiend-like queen',
      quoteAt: 'bottom-right',
    },
  ],
  portraits: PORTRAITS,
}
