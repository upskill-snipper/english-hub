/**
 * The Great Gatsby in linocut: the panels for its key moments and the
 * portraits of its people as Fitzgerald describes them.
 *
 * THE TEXT. Quotations on the art are copied from the 1925 first edition,
 * Wikisource's transcription of the Scribner printing, which the site holds
 * as src/data/full-texts/the-great-gatsby.ts, in its own spelling ("gray",
 * "to-morrow", "orgastic"). Four lines of a song in Chapter IV are left out of
 * the held text for copyright, marked by a note in square brackets: never quote
 * or draw the words of that song. The comics test checks every quotation
 * against the held text where the checkout holds it, and against the guide's
 * own quotations where it does not. The held text has been on main since
 * 2 October 2026 (commit 26b73146); these pieces were drawn on 9 October in a
 * checkout behind main that lacked it, and reviewed in one that had it. Every
 * panel but one quotes a line that is in both, and passes either way; the
 * panel for "The death car" quotes a line of Chapter VII the guide does not
 * (the guide's own line for it names a death), and the portraits' phrases
 * are not among the guide's quotations either (./portraits/index.ts). So a
 * checkout without the held text fails the comics test on those, and the fix
 * is to bring the held edition into it, never to swap the words.
 *
 * WHAT IS NEVER DRAWN, for readers who are children (the style guide's
 * safeguarding rules, and these for this text):
 * - Tom breaking Myrtle's nose in the flat: no raised hand, no blow, no blood.
 * - Anyone drunk, sick or falling at Gatsby's parties; nobody hurt in the car
 *   in the ditch.
 * - Meyer Wolfshiem as the caricature the novel's description of him makes
 *   him: he is drawn like every other man, and that description, and his
 *   cufflinks, are never quoted or drawn.
 * - Myrtle's death, Gatsby's and Wilson's: no impact, no body, no gun, no pool
 *   with anyone in it, no blood. Gatsby's funeral shows a closed coffin or the
 *   grave's edge at most.
 * - Tom's racist talk at dinner, and the book he cites, are never quoted,
 *   drawn or named.
 * Myrtle, Daisy and Jordan are drawn with the same dignity as every other
 * figure, never sexualised. A quotation never names or describes a death, a
 * killing, or the means of either.
 *
 * THE GREEN LIGHT is never printed red. The print's one spot colour is red,
 * but the novel's light at the end of Daisy's dock is green, so it is cut in
 * paper: a bright point with its rays.
 *
 * The people recur from chapter to chapter, so the figures cut from
 * Fitzgerald's descriptions of them are shared in ./panels/people.tsx. Draw
 * them from there, so a student meets the same man in every panel.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs the-great-gatsby --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { dinnerInEastEgg } from './panels/dinner-in-east-egg'
import { theGreenLight } from './panels/the-green-light'
import { theValleyOfAshes } from './panels/the-valley-of-ashes'
import { gatsbysParty } from './panels/gatsbys-party'
import { wolfshiemAndJordansStory } from './panels/wolfshiem-and-jordans-story'
import { theReunion } from './panels/the-reunion'
import { jamesGatz } from './panels/james-gatz'
import { thePlazaHotel } from './panels/the-plaza-hotel'
import { theDeathCar } from './panels/the-death-car'
import { gatsbysDeath } from './panels/gatsbys-death'
import { theFuneral } from './panels/the-funeral'
import { boatsAgainstTheCurrent } from './panels/boats-against-the-current'
import { PORTRAITS } from './portraits'

export const comics: ComicSet = {
  slug: 'the-great-gatsby',
  panels: [
    {
      moment: 'Dinner in East Egg',
      art: dinnerInEastEgg,
      alt: "A linocut print of the Buchanans' front porch after dinner on a June evening, in deep gloom. On a wicker settee in the middle sit Nick, a young man in a dark suit, turned towards his cousin, and Daisy, cut all in white, her dress, her arms and her face, with short dark waved hair. She leans forward with her elbows on her knees and her chin in her hands, her eyes open, looking out past a porch column, dark in the gloom, at the dusk: a few stars, the far shore, the pale bay and the dark lawn. On the left, through a tall French window, the crimson room behind them is printed in red and bright with lamp-light: at one end of a long couch sits Tom, a broad man with pale hair in riding clothes and tall boots, and at the other sits Jordan, upright, in white, with pale short hair, holding a magazine open and reading aloud. The lamp-light falls out through the panes onto the porch floor.",
      quote: 'that’s the best thing a girl can be in this world, a beautiful little fool.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The green light',
      art: theGreenLight,
      alt: "A linocut print of a bright night in West Egg, with a moon and a sky peppered with stars. On the left, in his yard by the corner of his small, dark house and the black trees, Nick sits on the drum of an old grass roller, watching. A cat walks across the moonlit lawn. In the middle, Gatsby's huge mansion rises behind the lawn, its face pale in the moonlight, its windows dark, a tower with a steep pointed roof on one side and dark ivy along its foot. In front of it, on the pale lawn near the water, Gatsby, a dark figure in a suit, stretches out both arms towards the black water on the right, his hands open, with short cuts beside them to show him trembling. Far across the bay, on the low black line of the far shore, shines one small light, cut in white with its rays, its reflection broken on the water below it. There is no red in the print.",
      quote: 'a single green light, minute and far away',
      quoteAt: 'top-right',
    },
    {
      moment: 'The valley of ashes and the flat',
      art: theValleyOfAshes,
      alt: "A linocut print of the valley of ashes on a hazy afternoon, all in grey, under a pale sky scored with dust. High over everything, on tall posts, stands Doctor T. J. Eckleburg's billboard: two huge eyes behind enormous round spectacles joined by a bridge over nothing, with no face and no nose. Below it the land is ridges and hills of grey ash, one of them heaped into the shape of a house with a chimney whose smoke is ash too. Beyond it a line of small wagons stands on a track among the heaps, three pale, ash-coloured men in caps stand on them bent over their spades, and a cloud of dust rises over the far end of the line. In front runs the railway, where a train waits at a halt on the left, and a low white fence separates it from the road. On the road, under the eyes, Tom, a broad man with pale hair in a dark suit, strides ahead towards a small brick block on the right, and Nick follows him. The block has three shopfronts: an empty one, a restaurant with a trail of ash to its door, and a garage under a sign that reads REPAIRS. Nothing is printed in red.",
      quote: 'This is a valley of ashes',
      quoteAt: 'top-left',
    },
    {
      moment: "Gatsby's party",
      art: gatsbysParty,
      alt: "A linocut print of Gatsby's garden at night during one of his parties. Strings of coloured lights hang in loops over the whole garden between the trees and the house, every other bulb printed in red. Behind, the great house has every window lit, with its tower and pointed roof on the left, and white marble steps come down from its lit doorway into the garden. At the head of the steps, against the light of the doorway, Gatsby stands alone, a dark figure in a suit with nothing in his hands, looking down at his guests. Guests in evening clothes stand about the dark lawn, several of them turned towards the steps. On the right two couples dance upright on a pale canvas floor, each man and woman at arm's length holding hands, and beyond them the orchestra sits on its stand playing a trombone, a saxophone and a viol beside a big drum, with guests standing in front of it. In the foreground, at a table with a white cloth and a glass on it, sits Jordan, with pale short hair and her chin raised, and beside her Nick, in white flannels, turns to look up at Gatsby on the steps.",
      quote: 'I was one of the few guests who had actually been invited.',
      quoteAt: 'top-right',
    },
    {
      moment: "Wolfshiem and Jordan's story",
      art: wolfshiemAndJordansStory,
      alt: 'A linocut print of Central Park in the hot twilight. The sun has gone down behind the tall apartment blocks of the West Fifties, which stand black against a band of glowing sky printed in red, a few of their windows lit and water tanks on some of their roofs. In front of them is a line of dark trees, and below runs a pale drive through the park. Along it goes an open carriage, a victoria, its hood folded back, pulled by one dark horse in harness, walking, with the driver in a cap up on the box holding the reins. Side by side on its one seat sit Nick, in a dark suit, on the far side, and Jordan, nearer, in white, with pale short hair, sitting up straight with her chin raised. She has turned her head back to him and is telling him something, and he looks at her, listening.',
      quote: 'Gatsby bought that house so that Daisy would be just across the bay.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The reunion',
      art: theReunion,
      alt: "A linocut print of a dim room in Gatsby's house on a rainy afternoon. On the left two tall cabinets stand open, each with two stacks of folded shirts piled like bricks a dozen high. In front of them a table is heaped with shirts thrown down open, striped, checked and patterned with curls, their sleeves flung out and hanging over its edge; two of the shirts are printed in red. On the right three people stand in a row at a tall window, looking out at the rain: Nick in a dark suit, then Daisy in white with short dark hair, her arm through Gatsby's, and Gatsby in a white suit, looking straight ahead. Through the window the water of the bay is ridged by the wind, rain falls across the glass, and the far shore is lost in mist.",
      quote: 'His count of enchanted objects had diminished by one.',
      quoteAt: 'top-left',
    },
    {
      moment: 'James Gatz',
      art: jamesGatz,
      alt: "A linocut print of Gatsby's garden late at night, after a party. On the right his great house is dark, its tower at the near end and every window out, except the front door at the top of its steps, which stands open and lit, its light falling down the steps. A pale path runs from the steps across the dark lawn, littered with fruit rinds, fallen paper hats, crushed flowers and streamers. On the path on the left stands Nick, in a dark suit, turned towards Gatsby. In the middle Gatsby, in a dark suit, has turned away towards the dark house, one arm held out low with the hand open, as if reaching for something in its shadow. Black trees stand along the garden, hung with strings of party lights: most of the bulbs are out, and four still burn, printed in red.",
      quote: 'Why of course you can!',
      quoteAt: 'top-right',
    },
    {
      moment: 'The Plaza Hotel',
      art: thePlazaHotel,
      alt: "A linocut print of the Buchanans' house on a blazing hot afternoon, the sun's rays scored across the pale sky and a thin crescent moon already up. The house on the left is brick with white trim, a white portico, tall French windows along the ground floor and vines climbing its end. At an upper window Daisy, in white with short dark hair, looks out towards the drive. On the gravel drive below, Nick, in a dark suit, and Gatsby, whose pink suit is printed in red, stand face to face, talking. Behind them on the right Gatsby's long open car waits on the drive, pale with dark seats, its wind-shields standing one behind another and boxes on a rack at the back.",
      quote: 'Her voice is full of money',
      quoteAt: 'top-right',
    },
    {
      moment: 'The death car',
      art: theDeathCar,
      alt: "A linocut print of the road through the valley of ashes at dusk. The sky is dark overhead and still pale low down behind the car. On the left Gatsby's long open car drives towards the right with its lamp lit: Daisy, in white with short dark hair, is at the wheel with both hands on it, and Gatsby, in a dark suit, sits beside her. Ahead of the car the empty road lies pale in a cone of light from the lamp. Behind the road the heaps of ash are dark mounds, pale along their crests, and above them on the right Doctor T. J. Eckleburg's billboard stands on its posts: two huge eyes behind round spectacles, with no face, dimmed by the dusk. There is no red in the print.",
      quote: 'Over the ashheaps the giant eyes of Doctor T. J. Eckleburg kept their vigil',
      quoteAt: 'top-left',
    },
    {
      moment: "Gatsby's death",
      art: gatsbysDeath,
      alt: "A linocut print of Gatsby's house and lawn on a clear autumn morning. On the right is the house, its new stone pale, with a tower and a steep spire at its left end, thin ivy climbing the tower, a steep roof with dormers, and an open front door at the top of a flight of wide white steps. Gatsby stands at the foot of the white steps, a dark figure in a suit, his head bowed a little in a nod and his face smiling. Far off on the left, across the wide empty lawn, Nick, small, in a dark suit, has turned back by the hedge with one hand raised as he calls to him. Dark trees stand beyond the hedge. Nothing is printed in red.",
      quote: 'They’re a rotten crowd',
      quoteAt: 'top-left',
    },
    {
      moment: 'The funeral',
      art: theFuneral,
      alt: "A linocut print of Gatsby's funeral in a cemetery in the rain, under a low grey sky, with fine rain falling over everything. On the left, outside the open gate, a black motor hearse is drawn up on the road, with the front of another car behind it, and an empty path runs in from the gate between a few headstones and a line of dark trees. On the right, a handful of mourners stand round an open grave, one end of it still under a canvas whose edge is folded back. At the head of the grave the minister, in black with a white collar, bows his head over an open book. Facing him along the far side stand a stout man in large round spectacles and Nick, both bowed, and a step behind them four servants, two of them women in close hats, and the postman in his cap with his bag's strap across him. Nearest of all, at the foot of the grave, stands Gatsby's father, an old man with grey hair and a sparse grey beard, stooped in a long coat, his head bowed and his arms hanging. Nothing is printed in red.",
      quote: 'But it wasn’t any use. Nobody came.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Boats against the current',
      art: boatsAgainstTheCurrent,
      alt: "A linocut print of a moonlit night by the Sound. On the left, Gatsby's great house stands empty above a sloping lawn of long grass: a square tower with a pointed spire at one end, a steep roof, two rows of arched windows, all dark, and pale steps up to the dark doorway. Below it, on the wide pale beach, Nick sits alone on the sand, leaning back on his hands with one knee up, his face lifted towards the water, his shadow lying on the sand under him and past his feet. Behind him the moon hangs high, ringed with light, and lays a bright path down the dark water. Across the water the far shore is a low dark line of shut-up houses and trees, their outlines broken as if melting away, and a dock runs out from it with a lamp at its end, unlit. Further along, a ferryboat with a row of lit windows crosses the water in a soft glow. Nothing is printed in red.",
      quote: 'So we beat on, boats against the current, borne back ceaselessly into the past.',
      quoteAt: 'top-right',
    },
  ],
  // The people in the guide's relationships, each in its own file in
  // ./portraits, as Fitzgerald describes them.
  portraits: PORTRAITS,
}
