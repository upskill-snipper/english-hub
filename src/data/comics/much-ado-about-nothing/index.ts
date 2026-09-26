/**
 * Much Ado About Nothing in linocut: the panels for its key moments and the
 * portraits of its people as the play describes them.
 *
 * An edition is held in src/data/full-texts/much-ado-about-nothing.ts (Project
 * Gutenberg #1519), so every quotation on the art is copied from it, word for
 * word, and the comics test checks it there. A quotation may not run across a
 * paragraph break, and a verse line break is a space, never " / ". Two of the
 * guide's timeline titles carry a curly apostrophe (Don John’s discontent,
 * Borachio’s plan): a panel's `moment` must match it exactly.
 *
 * The people are cut once, in ./panels/people.tsx, and every panel draws the
 * recurring characters from there, so a student meets the same Benedick in
 * every panel. Read its docblock before drawing anyone.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs much-ado-about-nothing --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'
import { theSoldiersComeHome } from './panels/the-soldiers-come-home'
import { donJohnsDiscontent } from './panels/don-johns-discontent'
import { theMaskedBall } from './panels/the-masked-ball'
import { borachiosPlan } from './panels/borachios-plan'
import { benedickInTheGarden } from './panels/benedick-in-the-garden'
import { beatriceInTheBower } from './panels/beatrice-in-the-bower'
import { donJohnsAccusation } from './panels/don-johns-accusation'
import { theWatchOverhear } from './panels/the-watch-overhear'
import { tooBusyToListen } from './panels/too-busy-to-listen'
import { theWedding } from './panels/the-wedding'
import { killClaudio } from './panels/kill-claudio'
import { theExamination } from './panels/the-examination'
import { challengesAndConfession } from './panels/challenges-and-confession'
import { atTheTomb } from './panels/at-the-tomb'
import { theSecondWedding } from './panels/the-second-wedding'

export const comics: ComicSet = {
  slug: 'much-ado-about-nothing',
  panels: [
    {
      moment: 'The soldiers come home',
      art: theSoldiersComeHome,
      alt: "A linocut print of the open ground before Leonato's house in Messina on a bright afternoon. On the left stands the house, pale stone with a tiled roof, its arched door open and its window shutters thrown back. Hero, small, in a long gown, her dark hair bound with a band and brought forward over her shoulder in a plait, stands by the door with her eyes cast down. Next to her, her father Leonato, an old man with a full white beard and white hair, in a long gown, holds out his hand in welcome to Don Pedro, the Prince, who wears a plain circlet and a cloak and holds out his hand in return. In the middle Beatrice, her hair up in a net, one hand on her hip, points at Benedick, a bearded soldier with a sword at his side, who lifts an open hand before him in reply. To the right the young, beardless Claudio stands with his hand on his heart, looking back past them at Hero, and further off Don John, in a tall black hat, stands apart with his arms folded, wrapped to the knee in a dark cloak. Behind them the road runs away over the hills, and the rest of the soldiers are still coming down it, small in the distance, with their pikes and a standard whose flag is printed in red.",
      quote: 'There is a kind of merry war',
      quoteAt: 'top-right',
    },
    {
      moment: 'Don John’s discontent',
      art: donJohnsDiscontent,
      alt: "A linocut print of a dark room in Leonato's house in the evening, lit by a single candle on a small table, its flame printed in red. On the left Don John, in a tall black hat and a dark cloak to the knee, stands stiffly with his arms folded, frowning. Facing him across the candle, Conrade, in a soft flat cap, leans towards him and holds out an open hand, reasoning with him. On the right a door stands open on a bright hall, where a long table is spread with a cloth, dishes and a jug, and candles burn on it with red flames. Borachio, in a round cap, has just come in through the door: he holds out one hand to Don John and points back over his shoulder with the other at the supper he has come from.",
      quote: 'let me be that I am, and seek not to alter me',
      quoteAt: 'top-left',
    },
    {
      moment: 'The masked ball',
      art: theMaskedBall,
      alt: "A linocut print of a hall in Leonato's house at night, lit by two torches on the wall whose flames are printed in red. On the left Don Pedro, in a visor and without his circlet, bends his head towards Hero, who is small, unmasked, with her plait over her shoulder, and holds out his open hand to her; she looks up at him. Behind them, smaller, the dance goes on: Beatrice, unmasked, her hair in a net, raises her hand to a masked man with a beard below his visor, Benedick, who raises his to hers. In the middle Claudio, young and masked, stands apart with his arms at his sides, watching the Prince and Hero. On the right, in the shadow between the torches, Don John in a visor and his tall black hat stands with his arms folded, and Borachio, masked, points at Claudio.",
      quote: 'Friendship is constant in all other things Save in the office and affairs of love',
      quoteAt: 'top-left',
    },
    {
      moment: 'Borachio’s plan',
      art: borachiosPlan,
      alt: "A linocut print of a dark room in Leonato's house at night, with a tall open window on the right. Through it the moon and stars shine over the far wing of the house across the court, pale stone with rows of dark windows, and one window high up is lit, printed in red; nobody can be seen at it. Borachio, in a round cap, stands at the window and points across the court at the lit window. Behind him Don John, in his tall black hat and dark cloak, leans forward to look where he points, holding up a heavy purse in his other hand. Moonlight falls in at the window across the floor.",
      quote: 'Proof enough to misuse the Prince, to vex Claudio, to undo Hero',
      quoteAt: 'top-left',
    },
    {
      moment: 'Benedick in the garden',
      art: benedickInTheGarden,
      alt: "A linocut print of Leonato's garden in the evening, the sun going down behind the orchard hedge on the right, printed in red, with the orchard's round trees dark against the sky. On the left stands the arbour, a leafy bower on a wooden frame, dark inside. Benedick, a bearded man, leans out of its shadow over a low bush at its mouth, one hand on its post, listening. On the path to the right, with their long evening shadows, three men talk. Don Pedro, in his circlet, stands with his back to the arbour, one hand on his hip. Facing him, the young, beardless Claudio lifts a hand beside his mouth to whisper to him. Behind Claudio, old Leonato, with his full white beard and long gown, faces the arbour and holds out his hand as he speaks up.",
      quote: 'This can be no trick',
      quoteAt: 'top-right',
    },
    {
      moment: 'Beatrice in the bower',
      art: beatriceInTheBower,
      alt: "A linocut print of Leonato's garden in full sun, the sun a white disc with rays high in a striped sky. Behind a clipped hedge stands a row of round orchard trees. On the gravel alley on the left two women in long gowns are talking: Ursula, in a linen coif, walks towards Hero with her hands folded before her, and Hero, smaller, her dark hair bound with a band, faces her and speaks with one hand lifted open. On the right a long arched bower of leaves and honeysuckle flowers stands over the alley, dark inside. In its mouth Beatrice, her hair up in a net, crouches low among the leaves and reaches out with one open hand to hold a spray of them aside, listening. Her ear is printed in red.",
      quote: 'Contempt, farewell! and maiden pride, adieu!',
      quoteAt: 'top-left',
    },
    {
      moment: 'Don John’s accusation',
      art: donJohnsAccusation,
      alt: "A linocut print of a room in Leonato's house in the evening, with a tiled floor and a round-arched window whose shutters are folded back. Through the window the sun, printed in red, is going down behind the roofs of Messina. On the left Don John, in a tall black hat and a dark cloak, leans forward, frowning, and points at Claudio. Facing him, the young, beardless Claudio leans back with one foot stepped away and a hand pressed to his breast. Beside Claudio stands Don Pedro, the Prince, in a circlet and a cloak, holding up an open hand as if to put the charge from him. Claudio and Don Pedro wear swords.",
      quote: 'Leonato’s Hero, your Hero, every man’s Hero',
      quoteAt: 'top-right',
    },
    {
      moment: 'The Watch overhear',
      art: theWatchOverhear,
      alt: 'A linocut print of a street in Messina at night in the rain, the rain cut as fine slanting white lines. On the left, against the stone wall of the church and in front of its bench, three men of the Watch in brimmed hats stand close together, each with a tall bill, a staff with a hooked blade, upright behind him. The middle one holds a lantern low, its flame printed in red, lighting the wall around them, and the nearest leans forward with a hand cupped behind his ear. On the right, sheltering under the tiled lean-to roof of a house, Borachio, in a round cap, stands against a lit window and holds out an open hand as he talks to Conrade, in a soft flat cap, who faces him in front of a dark door. Rain drips from the edge of the roof.',
      quote: 'I have tonight wooed Margaret',
      quoteAt: 'top-right',
    },
    {
      moment: 'Too busy to listen',
      art: tooBusyToListen,
      alt: "A linocut print of a room in Leonato's house early in the morning, with a tiled floor, a round-arched window with its shutters folded back and, on the right, an open door onto a bright passage. Through the window the sun, printed in red, is rising behind the roofs and the tower of a church. On the left Dogberry, a stout man in a flat cap and a wide belted gown, lifts his chin and holds out an open hand as he talks; behind him Verges, a small, stooped old man with a short white beard, in a close cap and a gown, lifts a hand to put in a word. On the right Leonato, an old man with a full white beard and white hair, in a long gown, stands between them and the door, leaning back towards it, and holds up an open hand to stop them.",
      quote: 'Neighbours, you are tedious',
      quoteAt: 'top-left',
    },
    {
      moment: 'The wedding',
      art: theWedding,
      alt: "A linocut print of the inside of a church by day. On the left an altar with a white cloth, a cross and two candles, their flames printed in red, stands under an arched window, and beside it, against a pale stone pillar, the old Friar Francis in a friar's habit stands aside with his hands together. In the middle Leonato, white-bearded, lifts both hands open in dismay. Before him stands Hero, small, in a long gown with a standing lace collar behind her neck, her head bowed. The young Claudio has turned his back on her and walks towards Don Pedro, the Prince, in his circlet, pointing back at her over his shoulder. Behind them Don John, in his tall black hat, stands with his arms folded, dark against the open west door and the daylight beyond it. On the far right Benedick, clean-shaven, lifts an open hand, and Beatrice, her hair up in a net, holds her hands to her breast.",
      quote: 'Give not this rotten orange to your friend',
      quoteAt: 'top-right',
    },
    {
      moment: '“Kill Claudio”',
      art: killClaudio,
      alt: 'A linocut print of the inside of a church by day, empty after the wedding. On the left stands the altar on its steps, with a white cloth, a plain cross and two lit candles whose flames are printed in red, under an arched window of daylight. A pale stone pillar of the nave stands beside it. In the middle Benedick, a clean-shaven soldier with a sword at his side, leans back from Beatrice with one open hand raised before him, refusing. Facing him, Beatrice, her hair up in a net, stands with her chin up and points back past her shoulder at the church door on the right, which stands open on the bright day outside: the way Claudio went.',
      quote: 'Kill Claudio.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The examination',
      art: theExamination,
      alt: "A linocut print of a stone prison room by day, lit by a barred window high in the wall whose light falls in slanting stripes to the floor. On the left a door stands open on a bright passage, and beside it is an empty stool with a cushion printed in red, where the Sexton sat to write; he has gone. Dogberry, a stout constable in a long gown and a flat cap, stands with his head thrown back in outrage, holding out his open hand at the empty stool. Behind him Conrade, in a soft flat cap, his hands tied behind his back, leans forward at him, and old Verges, small and white-bearded, holds the cord that ties Conrade's wrists. On the right Borachio, in a round cap, stands with his head hung and his hands bound behind him, and a watchman in a brimmed hat holds his cord and a tall bill.",
      quote: 'O that he were here to write me down an ass!',
      quoteAt: 'top-right',
    },
    {
      moment: 'Challenges and confession',
      art: challengesAndConfession,
      alt: "A linocut print of the open ground before Leonato's house late in the afternoon. On the left is the house, pale stone with a tiled roof and a shuttered window, its arched door shut. Hills run along the horizon, with a road winding over them on the right, and the low sun, printed in red, sits on the hills in the gap between Claudio and the man confessing to him. Don Pedro, the Prince, in a circlet and a cloak, lays his hand on the shoulder of Claudio, a beardless young man, who leans back a step with his head bowed and one hand pressed to his breast. Facing Claudio, Borachio, in a round cap, stands with his head bowed and his hands tied behind his back. Behind Borachio stand Conrade, also bound, in a soft flat cap, a watchman holding a bill, stout Dogberry in his gown and cap with one finger raised, and old Verges with his white beard.",
      quote: 'I have drunk poison whiles he utter’d it',
      quoteAt: 'top-left',
    },
    {
      moment: 'At the tomb',
      art: atTheTomb,
      alt: "A linocut print of the inside of a church at midnight, lit only by tapers whose flames are printed in red, with stars in a high window. On the right is the monument of Leonato's family, a pale stone tomb chest under a round-arched niche with an old inscribed tablet on its wall. Claudio, a beardless young man, stands black against the pale stone and reaches up to hang a scroll with lines of writing on the monument. Behind him Don Pedro, the Prince, in a circlet and a cloak, holds up a lit taper with his head bowed. On the left three attendants stand in a row with their heads bowed, two holding tapers and one playing a lute, and the light of the tapers falls in pools on the dark floor at their feet.",
      quote: 'Done to death by slanderous tongues',
      quoteAt: 'top-left',
    },
    {
      moment: 'The second wedding',
      art: theSecondWedding,
      alt: "A linocut print of a room in Leonato's house in the morning, with a tiled floor and a tall arched window, its shutters folded back and the morning sun, printed in red, high in it over the roofs of Messina. Before the window Claudio, a beardless young man with a sword at his side, holds Hero's hand. Hero, small, with her dark hair in a long plait, faces him and lifts a pale mask up off her face with her other hand. Behind Claudio stand Friar Francis, an old friar with a tonsure, his hands together, and Don Pedro, in a circlet and a cloak, with one open hand thrown up in wonder. Behind Hero her father Leonato, with a full white beard, holds out an open hand towards her. On the right Beatrice, still masked, her hair in a net, stands beside Benedick.",
      quote: 'One Hero died defil’d, but I do live',
      quoteAt: 'top-left',
    },
  ],
  portraits: PORTRAITS,
}
