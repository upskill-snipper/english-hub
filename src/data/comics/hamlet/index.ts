/**
 * Hamlet in linocut: the panels for its key moments and the portraits of its
 * people as the play describes them.
 *
 * Every quotation on the art is verbatim from the held edition,
 * src/data/full-texts/hamlet.ts (Project Gutenberg #1524), and the comics test
 * checks it there, mark for mark, within one speech. A quotation that runs
 * over a verse line is printed with the break as a space, because the test
 * reads a speech as one paragraph and has no " / ".
 *
 * The people are cut once, in ./panels/people.tsx, and every panel draws them
 * from there, so that the Ghost, Hamlet and Horatio look the same from the
 * battlements to the last scene. Read its docblock, and the play's own rules
 * in it, before drawing.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs hamlet --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, in timeline order,
 * and keep each change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { ghostOnTheBattlements } from './panels/the-ghost-on-the-battlements'
import { theNewKingAndTheMourningSon } from './panels/the-new-king-and-the-mourning-son'
import { opheliaIsWarned } from './panels/ophelia-is-warned'
import { hamletFollowsTheGhost } from './panels/hamlet-follows-the-ghost'
import { theGhostsCommand } from './panels/the-ghosts-command'
import { opheliasFright } from './panels/ophelias-fright'
import { spiesAndPlayers } from './panels/spies-and-players'
import { theRogueAndPeasantSlave } from './panels/the-rogue-and-peasant-slave'
import { toBeOrNotToBe } from './panels/to-be-or-not-to-be'
import { theMousetrap } from './panels/the-mousetrap'
import { theKingAtPrayer } from './panels/the-king-at-prayer'
import { theClosetScene } from './panels/the-closet-scene'
import { sentToEngland } from './panels/sent-to-england'
import { fortinbrassArmy } from './panels/fortinbrass-army'
import { opheliaMadLaertesInArms } from './panels/ophelia-mad-laertes-in-arms'
import { thePlotAndADrowning } from './panels/the-plot-and-a-drowning'
import { theGraveyard } from './panels/the-graveyard'
import { opheliasFuneral } from './panels/ophelias-funeral'
import { theReadinessIsAll } from './panels/the-readiness-is-all'
import { theDuel } from './panels/the-duel'
import { theRestIsSilence } from './panels/the-rest-is-silence'
import { PORTRAITS } from './portraits'

export const comics: ComicSet = {
  slug: 'hamlet',
  panels: [
    {
      moment: 'The Ghost on the battlements',
      art: ghostOnTheBattlements,
      alt: "A linocut print of the platform at Elsinore at midnight: a walk of pale flagstones behind a dark crenellated parapet under a starry sky, with a square corner tower on the right and a dark arched doorway in it. High on the left one star burns, printed in red. On the left stand the three men of the watch. Barnardo, a bearded soldier in a steel cap and a cloak, holds his partisan and points at the Ghost; Marcellus, in a steel cap with a partisan, reaches out to Horatio's shoulder to urge him on; and Horatio, a scholar in a flat cap, a gown and a white band, starts back with one open hand raised before him. In the middle, close to them, the Ghost walks slowly in from the tower: a tall, pale figure in full armour from helmet to feet, the visor raised to show a sorrowful face and a dark beard streaked with silver, a short truncheon held upright before him. Broken rings of light shine in the dark around him.",
      quote: 'In the same figure, like the King that’s dead.',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The new King and the mourning son',
      art: theNewKingAndTheMourningSon,
      alt: "A linocut print of a dark room of state in the castle. On the right, on a low dais under a pale cloth of state patterned with a lattice, the King and Queen sit on two high-backed thrones, facing left. The King, bearded, in a gown with a broad fur collar, wears a crown printed in red and holds out an open hand. The Queen, in a veil and a small crown, leans towards her son with her hand held out to him. Behind the King's throne stand old Polonius, with his white beard and flat cap, and young Laertes in a feathered cap and a ruff, his hand on the hilt of the sword at his side. On the left, further off in the dark, three lords of the court look on. In the middle, nearest of all and apart from everyone, Hamlet stands all in black, his cloak about him, his eyes cast down and one hand on his heart.",
      quote: 'Seems, madam! Nay, it is; I know not seems.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Ophelia is warned',
      art: opheliaIsWarned,
      alt: "A linocut print of a room in Polonius's house, its walls panelled below and dark above. At the far left a door stands open onto a lit passage. Through a diamond-paned window in the middle, a ship with four bellied sails waits in the harbour. On the right a fire, printed in red, burns in a pale stone fireplace. To the left of the window, old Polonius, with a white beard, a flat black cap and a long gown, leans towards his daughter and points at her. Facing him, Ophelia stands with her head bowed and her eyes down, her long dark hair loose down her back under a pale band, her hands together at her waist.",
      quote: 'I shall obey, my lord.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Hamlet follows the Ghost',
      art: hamletFollowsTheGhost,
      alt: 'A linocut print of the castle platform at night under a moon half hidden by drifting cloud. On the left the castle rises dark, the three tall windows of its hall lit red for the King’s feast. On the flagstones behind the parapet, Marcellus, in a steel cap and holding a partisan, and Horatio, in a scholar’s cap and gown, reach out after Hamlet. Hamlet, in his black cloak, strides away from them towards the right, one hand thrown back out of their reach and the other stretched out ahead. On the right the Ghost, a pale figure in full armour, stands further along the walk with broken rings of light around him and holds out an open hand, low and palm up, beckoning Hamlet to follow.',
      quote: 'Something is rotten in the state of Denmark.',
      quoteAt: 'top-left',
    },
    {
      moment: "The Ghost's command",
      art: theGhostsCommand,
      alt: 'A linocut print of a remote corner of the castle walls just before dawn. On the left rises the dark foot of a tower with a narrow arched door, and a low wall runs along the edge of the cliff. Beyond it on the right, the first red rim of the sun shows on the sea with rays of light around it, while the sky above is still dark. On the flagstones the Ghost, a pale figure in full armour with a sorrowful bearded face under a raised visor, stands inside broken rings of light and holds out his open hand towards his son. Facing him, Hamlet kneels on one knee in his black cloak, his face turned up to his father, one hand on his heart and the other reaching out towards him.',
      quote: 'Adieu, adieu, adieu. Remember me.',
      quoteAt: 'top-right',
    },
    {
      moment: "Ophelia's fright",
      art: opheliasFright,
      alt: "A linocut print of a room in Polonius's house by day, with plastered walls over a panelled dado, a boarded floor, two round-headed leaded windows and, on the right, a heavy table with papers, an inkstand and a quill. On the left, Ophelia, a young woman with long dark hair under a band, in a long dark gown, has just run in through an open arched door from a lit passage. She leans forward with her eyes wide and her lips parted, one hand held out to her father and the other holding a piece of plain white linen at her side. In front of the window on the right, Polonius, an old man with a full white beard and white hair under a flat black bonnet, in a long gown, has turned from his table towards her, his eyes wide and one open hand lifted.",
      quote: 'Lord Hamlet, with his doublet all unbrac’d, No hat upon his head',
      quoteAt: 'top-right',
    },
    {
      moment: 'Spies and players',
      art: spiesAndPlayers,
      alt: "A linocut print of a long stone room in the castle by day, with tall leaded windows and a pale woven arras hanging on the wall. In front of the arras Hamlet, bareheaded and in black with a black cloak, stands smiling between his two old schoolfellows, who lean in close on either side of him with their eyes lowered, listening: Guildenstern, bearded, in a round cap with a turned-up brim, and Rosencrantz in a flat bonnet. Hamlet rests a hand on Rosencrantz's arm. Through the window on the left, a weathervane on a far turret is printed in red. On the right, through an archway, two players cross a sunlit court towards the room: one blows a trumpet hung with a red banner, and the other, at their head, is bearded. Beside the arch Polonius, white-bearded, in a flat bonnet and a long gown, steps in with one hand raised in greeting.",
      quote: 'I am but mad north-north-west.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The rogue and peasant slave',
      art: theRogueAndPeasantSlave,
      alt: 'A linocut print of the same stone room in the castle by day, empty now but for Hamlet. Bareheaded, in black with a long black cloak, he strides out of the light of a tall leaded window on the left, his brow drawn down, and points across the room at two empty chairs of state standing on a dais on the right. Above the left-hand chair, the King’s, a crown worked on the dark cloth of state is printed in red. Daylight from two windows lies across the stone floor, and at the right edge hangs the end of a pale woven arras.',
      quote: 'The play’s the thing Wherein I’ll catch the conscience of the King.',
      quoteAt: 'bottom-right',
    },
    {
      moment: '“To be, or not to be” and the nunnery scene',
      art: toBeOrNotToBe,
      alt: 'A linocut print of the same stone room in the castle by day. On the left Hamlet, bareheaded and in black with a long black cloak, walks slowly in front of a leaded window, his head bowed and a hand raised to his chin, lost in thought; he carries no weapon. In the middle Ophelia, with long dark hair, sits on a stone bench under another window with an open book in her hands and her eyes on it, and a small bundle of letters tied with tape lies beside her. On the right hangs a pale woven arras, and round its edge peer two faces, unseen by the others: the King, bearded, his crown printed in red, and below him Polonius, with a white beard and a flat black bonnet. The hems of their gowns show under its fringe.',
      quote: 'Thus conscience does make cowards of us all',
      quoteAt: 'top-left',
    },
    {
      moment: 'The Mousetrap',
      art: theMousetrap,
      alt: 'A linocut print of a hall in the castle at night, lit by flames printed in red. On the left, on a low wooden stage in front of a pale hanging and between two candles on tall stands, a player wearing a crown lies back asleep, his eyes shut and his head propped on a bank dotted with flowers, and a second player stands over him holding up a small stoppered bottle, upright and well clear of him, with nothing poured. Facing the stage, Polonius, white-bearded, holds up a hand to stop the play. In front of him Hamlet, in black, half risen from the floor beside Ophelia, points across the hall at the King, and Ophelia, on a stool, starts with her hands raised. On the right, under torches burning on the wall, the King, bearded and crowned, has risen from his chair and recoils, his eyes wide and one hand thrown up before his face. The Queen, in a veil and a small crown, still seated in her chair beside his, reaches out to him, and Horatio, in a scholar’s square cap, stands behind them watching the King.',
      quote: 'What, frighted with false fire?',
      quoteAt: 'top-right',
    },
    {
      moment: 'The King at prayer',
      art: theKingAtPrayer,
      alt: "A linocut print of a stone room in the castle at night, lit by one candle on a tall iron stand on the right, its flame printed in red. In the middle King Claudius kneels on the flags facing the candle, his head bowed, his eyes shut and his hands pressed together in prayer. He wears his crown, printed in red, a short dark beard and a long gown with a fur collar, and the soles of his shoes show behind its hem. Behind him, between the King and an arched doorway on the left, Hamlet stands still in his black doublet and cloak, his brow drawn down, looking at the King's back. He holds his drawn rapier low at his side, its point turned away from the King towards the floor behind his own feet.",
      quote: 'Now might I do it pat, now he is praying.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The closet scene',
      art: theClosetScene,
      alt: "A linocut print of the Queen's room at night, lit by one candle on a small table, its flame printed in red. On the right a pale woven arras hangs from a rod in heavy folds, with a dark border, small woven flowers and a fringe just above the floor. At the height of a man's chest there is a short dark slit in it where a blade has passed through; nothing is to be seen behind it or under it. Hamlet, in black, stands before the arras with his face to the slit, his rapier drawn back out of it and held low at his side, its point to the floor behind him. On the left, in front of her high-backed chair, Queen Gertrude, in her veil and small crown, has started up with her hands raised before her and the fingers spread, her eyes wide and her mouth open.",
      quote: 'O me, what hast thou done?',
      quoteAt: 'top-left',
    },
    {
      moment: 'Sent to England',
      art: sentToEngland,
      alt: 'A linocut print of a dark room in the castle at night. On the right an arched doorway opens on a lit passage, and its light falls across the floor. Hamlet, in black, stands in the doorway as a silhouette against the light, turned back towards the room with a slight bow, one open hand held out low. Between him and the King, Rosencrantz and Guildenstern, two young courtiers in ruffs, short cloaks and caps, walk after him towards the door, and Rosencrantz holds a folded, tied packet of letters before his chest, its seal printed in red. On the left King Claudius stands crowned, in his long gown with its fur collar, smiling, one arm out and a finger pointing them after Hamlet.',
      quote: 'The present death of Hamlet. Do it, England',
      quoteAt: 'top-left',
    },
    {
      moment: "Fortinbras's army",
      art: fortinbrassArmy,
      alt: 'A linocut print of a wide, flat plain under a pale sky. In the left foreground Hamlet stands alone on a dark rise in his black cloak, his head a little bowed and one hand closed on his breast, watching an army go by. A long column of soldiers in round steel helmets, each with a pike on his shoulder, marches two abreast along a road from just below him away to the right, rank after rank growing smaller until far off it is a thin dark line under a hatching of pikes. Pennants printed in red fly from a few of the pikes. Far away on the right, where the road ends, a small fort stands on a low hill with a flag on its tower.',
      quote: 'My thoughts be bloody or be nothing worth.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Ophelia mad, Laertes in arms',
      art: opheliaMadLaertesInArms,
      alt: 'A linocut print of a room in the castle. On the left the doors of an arched doorway hang broken, one leaf torn from its upper hinge and leaning in, the other split. In the middle Ophelia stands in a long gown, her long dark hair loose down her back, with straws and small red flowers tucked into her hair and at her girdle. Her head is bowed and her eyes are down, and she holds out a sprig of rosemary with two small red flowers on it to her brother Laertes. He faces her in a feathered cap, a ruff and a short cloak, his head bowed to her, reaching out an open hand for the sprig; in his other hand he holds a drawn rapier low at his side, its point to the floor behind him. On the right the King and the Queen stand crowned and watch, the Queen with her hands together.',
      quote: 'There’s rosemary, that’s for remembrance',
      quoteAt: 'top-right',
    },
    {
      moment: 'The plot, and a drowning',
      art: thePlotAndADrowning,
      alt: 'A linocut print in two pictures side by side. On the left, a dark stone room in the castle, lit from an arched doorway on the right that opens on a bright passage. King Claudius stands on the left, crowned, with a short dark beard and a fur collar on his long gown, one hand at his chest. Beside him Laertes, in a feathered cap, a ruff and a short cloak, holds his drawn sword low at his side, its point to the floor; his eyes are wide and his mouth open. Queen Gertrude, in her veil and small crown, stands in the lit doorway, a dark figure against the light, one hand at her breast. On the right, the place she tells of: a weeping willow leans out from a dark bank over a still stream, its pale-leaved boughs hanging down towards the water. One bough has broken and hangs down with a garland of small white flowers caught on it, two more white garlands hang on the boughs, and a few red flowers float on the water. Nobody is there.',
      quote: 'Your sister’s drown’d, Laertes.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The graveyard',
      art: theGraveyard,
      alt: "A linocut print of a flat churchyard on a grey day, among old headstones and crosses, with a low whitewashed wall and, on the right, a whitewashed church with a dark roof and a stepped gable on its tower, where a bell hangs. In the middle Hamlet, bareheaded in his black doublet and long black cloak, holds a plain skull up before his face on his open hand and looks at it, his brow drawn up. A little behind him on the left stands Horatio in his scholar's square cap and gown with a white band, listening. On the right the Gravedigger, in a close working man's cap, stands in an open grave up to his waist, leaning on his spade and looking up at Hamlet. Beside the grave is a heap of dug clay with a pickaxe lying on it.",
      quote: 'Alas, poor Yorick.',
      quoteAt: 'top-left',
    },
    {
      moment: "Ophelia's funeral",
      art: opheliasFuneral,
      alt: "A linocut print of the same churchyard at the open grave, on a grey day. On the left Hamlet, in black, strides to the end of the grave with his hand on his breast and his mouth open, naming himself; behind him Horatio, in his scholar's cap and gown, reaches after him with an open hand. Laertes, bareheaded, with a short pointed beard, stands down in the grave, seen from the waist up, one hand on its edge, turned towards Hamlet with a frown. On the far side of the grave, in front of the whitewashed church, stand the mourners: a priest in a long black gown and a white ruff holding an open book, Queen Gertrude in her veil and small crown, her empty hand held out open over the grave where she has strewn her flowers, King Claudius crowned and frowning, and two women in veils with their heads bowed. Small red flowers with white hearts lie strewn along the far edge of the grave and on the heap of clay beside it. Nothing of the dead is shown.",
      quote: 'This is I, Hamlet the Dane.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The readiness is all',
      art: theReadinessIsAll,
      alt: "A linocut print of the stone hall of the castle by day, its one great round-headed window on the right throwing a patch of light across the flagged floor, and a table under a white cloth standing bare against the wall on the left. In front of the window Hamlet, bareheaded in his black doublet and cloak, stands calm, his open hand let fall low. Facing him, Horatio, in his scholar's cap and gown with a white band, holds a folded letter against his chest, its broken seal printed in red, his brow drawn up in worry. On the left Osric, a young courtier in a ruff and a tall hat with a curling plume, walks in carrying two fencing foils, their points down behind him.",
      quote: 'The readiness is all.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The duel',
      art: theDuel,
      alt: "A linocut print of the stone hall of the castle by day, its great round-headed window on the right, and on the left a table against the wall with two tall flagons of wine on it. In front of the window Queen Gertrude, in her veil and small crown, holds out a goblet, printed in red, towards Hamlet in a toast, a white napkin in her other hand. Hamlet, in black, stands turned to her, his fencing foil lowered, its point to the floor. On the left King Claudius, crowned, in his fur-collared gown, reaches out an open hand towards her, his eyes wide. Between them, further back, Laertes, bareheaded with a pointed beard, waits with his foil point down, and Osric, in a ruff and a tall plumed hat, stands as judge. On the right Horatio, in his scholar's cap and gown, watches.",
      quote: 'It is the poison’d cup; it is too late.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The rest is silence',
      art: theRestIsSilence,
      alt: "A linocut print of the hall at Elsinore by day, lit by one great round-headed window on the right. On the left, by a table under a white cloth with two tall stoups of wine on it, Hamlet, in a black doublet and a long black cloak, his dark hair falling to his jaw, sits slumped back on a plain bench, his head tipped up and his mouth open to speak. In one hand he holds a goblet, printed red, back behind him at the height of his shoulder; with the other he holds on to the hand of Horatio, who stands stooping over him in a scholar's square cap, a white band and a long gown, his head bowed to Hamlet's face and his hand laid over Hamlet's. On the floor, in the sunlight thrown across the flags from the window, two dropped foils lie crossed. Through the window, under a bright sky, Fortinbras's army marches along a road towards the castle: Fortinbras at its head, a young prince in a circlet and a cloak, then a drummer with his drum printed red, then a file of pikemen in round helmets, a red pennant flying from two of their pikes.",
      quote: 'The rest is silence.',
      quoteAt: 'top-left',
    },
  ],
  portraits: PORTRAITS,
}
