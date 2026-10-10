/**
 * Jane Eyre in linocut: the panels for its key moments and the portraits of
 * its people as Brontë describes them.
 *
 * THE TEXT. Quotations on the art are copied from the held edition,
 * src/data/full-texts/jane-eyre.ts: the Service & Paton edition (London,
 * 1897), as Project Gutenberg transcribes it (eBook #1260), with its chapters
 * numbered straight through, 1 to 38. It prints curly quotation marks and
 * apostrophes and long dashes with no spaces round them ("Unjust!—unjust!"):
 * copy every quotation from the held edition, in its own spelling and
 * punctuation, and never from the guide or from memory.
 *
 * WHAT IS NEVER DRAWN, for readers who are children (the style guide's
 * safeguarding rules, and these for this text):
 * - Jane is a child in Chapters 1 to 10, and is never shown at the moment of
 *   harm. John Reed's thrown book and the cut on her head are not shown: the
 *   moment before or after is, with no red near her head or face.
 * - The red-room: Jane alone in the room, seated and frightened. She is never
 *   shown being dragged or locked in.
 * - Helen Burns's flogging is never shown. Her death is never shown or
 *   captioned: the two girls' friendship is, or Jane going to her with a
 *   candle.
 * - Brocklehurst setting Jane on the stool is shaming, not harm, and may be
 *   shown.
 * - Bertha Mason is never drawn as an animal or a racial caricature, whatever
 *   the novel's own words: she is a woman, partly in shadow, drawn with the
 *   same dignity as every other figure. This overrides the usual rule of
 *   drawing from the text's description.
 * - The fire in Rochester's bed: Jane with the water jug and the smoke, no
 *   flames on a person.
 * - The attack on Mason: the aftermath, no wound, no blood.
 * - Thornfield's burning and Bertha's fall from the roof are never shown, and
 *   no caption, quotation or alt text names or describes her death or how it
 *   happened: Jane finding the blackened ruin is shown instead.
 * - Rochester at Ferndean is blind, his maimed arm kept hidden in his coat as
 *   the text says; no injury is drawn.
 * A quotation never names or describes a death, a killing, or the means of
 * either.
 *
 * The people recur from chapter to chapter, so the figures cut from Brontë's
 * descriptions of them are shared in ./panels/people.tsx. Draw them from
 * there, so a student meets the same Jane, the same Rochester and the same
 * Brocklehurst in every panel.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs jane-eyre --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'
import { theBookAndTheBlow } from './panels/the-book-and-the-blow'
import { theRedRoom } from './panels/the-red-room'
import { theBlackPillar } from './panels/the-black-pillar'
import { theStoolOfShame } from './panels/the-stool-of-shame'
import { resurgam } from './panels/resurgam'
import { thornfieldAndTheLaugh } from './panels/thornfield-and-the-laugh'
import { theRiderInHayLane } from './panels/the-rider-in-hay-lane'
import { fireInTheNight } from './panels/fire-in-the-night'
import { theHouseParty } from './panels/the-house-party'
import { aWoundInTheNight } from './panels/a-wound-in-the-night'
import { mrsReedsConfession } from './panels/mrs-reeds-confession'
import { theProposalInTheOrchard } from './panels/the-proposal-in-the-orchard'
import { silksAndASeraglio } from './panels/silks-and-a-seraglio'
import { theTornVeil } from './panels/the-torn-veil'
import { theImpediment } from './panels/the-impediment'
import { flightFromThornfield } from './panels/flight-from-thornfield'
import { destituteAtWhitcross } from './panels/destitute-at-whitcross'
import { twentyThousandPounds } from './panels/twenty-thousand-pounds'
import { theMissionarysWife } from './panels/the-missionarys-wife'
import { theVoice } from './panels/the-voice'
import { aBlackenedRuin } from './panels/a-blackened-ruin'
import { ferndean } from './panels/ferndean'
import { readerIMarriedHim } from './panels/reader-i-married-him'

export const comics: ComicSet = {
  slug: 'jane-eyre',
  panels: [
    {
      moment: 'The book and the blow',
      art: theBookAndTheBlow,
      alt: 'A linocut print of the breakfast-room at Gateshead on a wet November afternoon. On the left, by the panelled door, ten-year-old Jane stands small and pale in a dark frock and a white pinafore, her dark hair loose. She leans forward with her brow drawn down and her mouth open, crying out, one hand thrown out towards her cousin with the fingers spread. On the floor between them lies a heavy book, open and splayed where it fell. Across the room, right of the middle, John Reed, a big, stout boy of fourteen with a heavy face, starts back from her words with his mouth open and one hand up, in front of his arm-chair. Behind them stands a bookcase with a gap on one shelf. On the right, the red curtain of the window-seat, printed in the spot colour, is pushed back from a window where rain slants across a misty sky and a wind-bent shrub.',
      quote: 'Wicked and cruel boy!',
      quoteAt: 'top-left',
    },
    {
      moment: 'The red-room',
      art: theRedRoom,
      alt: "A linocut print of the red-room at Gateshead as the daylight fades. On the left, beside a pale marble chimney-piece with an empty grate, ten-year-old Jane sits alone on a low ottoman in her dark frock and white pinafore, her face and arms pale in the gloom, gripping the edge of her seat with both hands. She has lifted her head and stares up with wide eyes at a streak of light cut on the dark wall, gliding up from beside the window to the ceiling above her, where it breaks into quivering rays. The window's blind is drawn down and red falls of drapery hang at its sides. On the right a great bed rises before her on a massive dark pillar, hung with red damask, its piled mattresses and pillows glaring white.",
      quote: 'at this moment a light gleamed on the wall',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The black pillar',
      art: theBlackPillar,
      alt: 'A linocut print of the breakfast-room at Gateshead on a grey January morning. On the left, just inside the panelled door, ten-year-old Jane, small and pale in her dark frock, curtseys, holding her skirt out at her sides, and looks up with wide eyes. In the middle, on the hearth-rug in front of a pale marble chimney-piece, stands Mr Brocklehurst, a tall, narrow figure all in black from his white neckcloth to his large feet, buttoned up like a column, his arms straight at his sides. His long, hard face, set against the pale glass over the mantelpiece like a carved mask, is turned down towards her: bushy brows, a small eye, a great nose and large teeth. Beside him a low fire burns in the grate, printed in the spot colour. On the right, Mrs Reed, stout and square-shouldered in a dark gown and a white cap, sits in her arm-chair by the fire and lifts one hand to beckon Jane forward. Beyond her, a window shows frost and bare branches.',
      quote: 'the grim face at the top was like a carved mask',
      quoteAt: 'top-right',
    },
    {
      moment: 'The stool of shame',
      art: theStoolOfShame,
      alt: 'A linocut print of the long schoolroom at Lowood, lit by tall windows. In the middle, ten-year-old Jane stands alone on top of a very high stool, small and pale in her dark school frock with a white tucker at the throat and a little pocket at the waist, her hair combed back, her arms straight at her sides and her head bowed, her eyes cast down. A yard away, his head level with hers, stands Mr Brocklehurst, a tall black column of a man against the window, turning his long, hard face to his family on the left, his hands behind his back. On the left, below her, his family sit in a row: his wife in a black velvet shawl edged with white ermine and a row of curls on her brow, and his two daughters in silk pelisses printed in the spot colour, with tall hats, white plumes curling over them and pale curls beneath. Beyond him stands Miss Temple, tall and grave in a dark gown, her hands folded, dark curls at her temples and a watch at her waist. On the right the girls of the school, plainly dressed with their hair combed back, sit on a form and look up at Jane.',
      quote: 'exposed to general view on a pedestal of infamy',
      quoteAt: 'top-right',
    },
    {
      moment: 'Resurgam',
      art: resurgam,
      alt: "A linocut print of Miss Temple's room at Lowood late at night. At the left the door stands open on a passage pale with moonlight. In an easy-chair a nurse in a white cap and apron sleeps with her head fallen forward. On a small round table in the middle an unsnuffed candle burns dimly, its small flame printed in the spot colour, the only light in the room. On the right, white curtains hang round Miss Temple's bed, and in a little crib half under them Helen, pale and thin, raised on her pillow under a white coverlet, holds the curtain back with one hand and smiles up at Jane. Jane, a child, small and pale, barefoot, her dark frock over the white hem of her night-dress and her hair combed back, stands at the head of the crib with her hand by its rail, her head bent to look down into her friend's face.",
      quote: 'Can it be you, Jane?',
      quoteAt: 'top-left',
    },
    {
      moment: 'Thornfield and the laugh',
      art: thornfieldAndTheLaugh,
      alt: "A linocut print of the third-storey passage at Thornfield: narrow, low and dim, with a beamed ceiling and two rows of small black doors running away to one little window at the far end, the only light. On the left one door stands open on a dim room, and Grace Poole stands on its threshold: a square-made woman, her hard, plain face in shadow, in a white servant's cap and a long white apron, carrying a tray with a covered basin on it. Broken rings of sound, the laugh, spread out of the dark doorway behind her. In the middle of the passage Jane, grown, small and pale in her black frock and white tucker, her dark hair smooth, has turned back towards the sound, one hand caught up to her breast.",
      quote: 'It was a curious laugh; distinct, formal, mirthless.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The rider in Hay Lane',
      art: theRiderInHayLane,
      alt: "A linocut print of Hay Lane at dusk in January, frozen hard and pale under the moon. On the hill at the left the rising moon shines over the roofs of Hay, and below it a stile stands in the dark hedge with Jane's muff on it. In the middle Rochester, dark-faced, in a long riding cloak with a fur collar and two steel clasps, his black head bowed, lays a heavy hand on the shoulder of Jane, who stands small beside him in a black cloak and a black bonnet, her pale face turned ahead. Pilot, his great long-haired dog, black and white, stands at his heels looking up at him. On the right his tall black horse, saddled and bridled, waits on a sheet of ice across the causeway, its head turned to them. Far off in the vale the battlemented hall stands pale under the last of the sunset, a low streak printed in the spot colour.",
      quote: 'He laid a heavy hand on my shoulder',
      quoteAt: 'top-right',
    },
    {
      moment: 'Fire in the night',
      art: fireInTheNight,
      alt: "A linocut print of Rochester's bedroom at night, lit by fire. The curtains of the great four-post bed are burning: tongues of flame, printed in the spot colour, run along the valance and climb the curtain at its foot, and black billows of smoke roll along the ceiling and out over the open door at the left, where a candle stands on the matting of the gallery. In the middle Jane, in her dark frock with a shawl round her shoulders, leans forward and flings water from a jug held in both hands at the burning curtain, the water flying in streams and drops. At the head of the bed, far from the flames, Rochester, roused, has raised himself on his elbow in his white nightshirt, the coverlet over him, and turns his face towards her. The floor shines with spilt water.",
      quote: 'Tongues of flame darted round the bed: the curtains were on fire.',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The house party',
      art: theHouseParty,
      alt: 'A linocut print of the drawing-room at Thornfield in the evening, brightly lit by a fire and wax candles. At the left, in the shade of a window-bay, Jane sits on the window-seat in a dress cut grey with fine pale lines, a pearl brooch at her throat, netting a purse in her lap, half hidden by the heavy window-curtain that falls in front of her knees. In the middle, before a curtained arch, Adèle, small and pale, with long curls down her back and a pale satin frock with a dark sash, sits on an ottoman beside a young gentleman in black who leans towards her. On the right, on either side of a pale marble mantelpiece where a fire burns in the spot colour under two candles, Blanche Ingram, tall, her face and arms dark, in a long white gown, faces Rochester and throws one hand back to point at Adèle, while Rochester, broad and dark in black with a white neckcloth, stands looking straight at her. A tall glass hangs at the far right, and the white carpet is strewn with garlands.',
      quote: 'Then, what induced you to take charge of such a little doll as that?',
      quoteAt: 'top-left',
    },
    {
      moment: 'A wound in the night',
      art: aWoundInTheNight,
      alt: "A linocut print of a room on the third storey at Thornfield at night, hung with old tapestry and lit by a single candle on a stand. At the left stands a great dark cabinet whose front is divided into twelve panels, each with a grave carved face in it. In the middle Jane, in her black frock, sits on a low chair and leans forward to hold a glass of water to the lips of Richard Mason, who sits back in a high-backed easy-chair beside her, his coat off, in his white shirt and a dark waistcoat, his pale face tipped back and his eyes half closed. On the right the drawn hangings of a vast old bed fall in long dark folds, and beyond it, under a looped-up fall of tapestry, a small door stands shut. The candle's flame is cut in paper, and there is no colour in this print.",
      quote: 'You will not speak to him on any pretext',
      quoteAt: 'bottom-left',
    },
    {
      moment: "Mrs Reed's confession",
      art: mrsReedsConfession,
      alt: "A linocut print of Mrs Reed's bedroom at Gateshead on a wet, windy afternoon. At the left, rain slants across the panes of a tall window between dark curtains, and beside it stands a toilet-table with an oval glass and an open dressing-case. In the middle the great four-post bed is hung with dark curtains under a scalloped valance; Mrs Reed lies propped on three piled pillows in a white cap, her heavy face turned away, and her hand lies on the sheet. Jane, grown, in her black frock, stands at the bedside and leans over it, reaching out to cover her aunt's hand with hers, a letter in her other hand. A low fire burns in the grate at the right in the spot colour, and a footstool stands on the bare boards of the floor.",
      quote: 'you have my full and free forgiveness',
      quoteAt: 'top-right',
    },
    {
      moment: 'The proposal in the orchard',
      art: theProposalInTheOrchard,
      alt: "A linocut print of the orchard at Thornfield on Midsummer-eve, by the light of a low moon. At the left, laurels border a pale walk, and the moon hangs low in a sky cut with stars over the dark line of a wood. In the middle Jane stands upright on the walk, small and pale in her dark frock with a shawl pinned at her breast, her arms at her sides, facing Rochester. He sits on the seat that circles the old roots of a giant horse-chestnut at the right, dark in his black coat with a white neckcloth, and holds out his open hand to her. The tree's great limbs and crown fill the top right, and beyond a sunk fence the shorn fields lie pale. Far off on the right, the last of the sunset burns on one hill-peak in the spot colour.",
      quote: 'I offer you my hand, my heart, and a share of all my possessions.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Silks and a seraglio',
      art: silksAndASeraglio,
      alt: "A linocut print of a silk warehouse in Millcote, lit by a shop window at the left. Along the back wall, shelves of pigeonholes are stacked with folded and striped pieces of silk. On the right a long pale counter runs into the shop; on it a length of brilliant silk, printed in the spot colour, is unrolled from its bolt and falls over the counter's edge in folds, and beyond it lie folded pieces of sober black and pale grey. Rochester, broad and dark in a black coat with a white neckcloth, holds his open hand out over the brilliant silk and looks up at the shelves. At his shoulder Jane, small, in her dark frock and a straw bonnet, looks up at him and lifts one hand between them as she whispers.",
      quote: 'he fixed on a rich silk of the most brilliant amethyst dye',
      quoteAt: 'top-left',
    },
    {
      moment: 'The torn veil',
      art: theTornVeil,
      alt: "A linocut print of Jane's bedroom at night, lit by one candle on the dressing-table at the right, under a dark oblong glass in which the candle's flame shows small. At the left Jane, pale, in a white night-dress, has risen up in her bed and bends forward, watching. Beside the bed the closet door stands open on her pale wedding-dress hanging inside. In the middle a tall woman stands facing the candle, upright and grave: Bertha, her face calm and pale where the light falls on it, her thick dark hair hanging long down her back, in a plain white gown straight from the shoulder, its back in shadow. She holds up one torn half of the bridal veil, sprigged and edged, from her raised hand; the other half lies on the floor at her feet. Trunks, corded for a journey, stand against the wall at the far right. The candle's small flame is printed in the spot colour.",
      quote: 'It seemed, sir, a woman, tall and large, with thick and dark hair',
      quoteAt: 'top-left',
    },
    {
      moment: 'The impediment',
      art: theImpediment,
      alt: 'A linocut print of the small grey church near Thornfield on the morning of the wedding. On the right, beneath an east window that glows with a ruddy morning sky in the spot colour, the clergyman in a white surplice stands at the plain altar beyond the communion rails, a book in one hand and his other hand stretched out, and the clerk stands beside him. At the rails Rochester, broad and dark, stands rigid, facing the altar, and beside him Jane, small and pale in a white wedding-dress with a plain square veil fastened to her hair, has turned her head back over her shoulder. Behind them in the chancel a gentleman in a dark coat, the solicitor, holds out one hand as he speaks. At the far left, by a marble tomb with a kneeling angel behind iron rails, a pale man in a dark greatcoat stands waiting.',
      quote: 'when a distinct and near voice said',
      quoteAt: 'top-left',
    },
    {
      moment: 'Flight from Thornfield',
      art: flightFromThornfield,
      alt: 'A linocut print of the gates of Thornfield at dawn on a short summer night. Behind a long yard wall at the left rise the dark trees of the rookery and the grey, battlemented front of the house, its windows dark. In the middle the great gates are shut and locked between their stone piers, the small wicket in one of them closed. On the right, beyond the end of the wall, fields and low hedges stretch away to the horizon, where the dawn is pale and two bars of cloud catch its first light in the spot colour. Jane, in a straw bonnet and a dark shawl pinned at her breast, her parcel tied with string in her hand, walks away along the lane towards a track across the fields, looking ahead and never back.',
      quote: 'not one glance was to be cast back',
      quoteAt: 'top-right',
    },
    {
      moment: 'Destitute at Whitcross',
      art: destituteAtWhitcross,
      alt: "A linocut print of a crossroads on the open moor on a summer evening. In the middle a whitewashed stone pillar stands on a stepped foot where four pale roads meet, four arms springing from its top. The heather grows dark and deep to the edges of the roads. Beyond the moor's edge lies a deep valley, and beyond that, wave after wave of mountains. The low sun, printed in the spot colour, is going down in the west at the left. Far off along one road a coach and its horses are going away. To the right of the pillar Jane stands alone, small, in a straw bonnet and a dark shawl, her hands empty, turned towards the coach.",
      quote: 'it is but a stone pillar set up where four roads meet',
      quoteAt: 'top-right',
    },
    {
      moment: 'Twenty thousand pounds',
      art: twentyThousandPounds,
      alt: "A linocut print of Jane's cottage at Morton on a snowy night: a small whitewashed room with a sanded floor. At the left the door is shut, a long cloak white with snow hangs on a peg against it, and snow lies by the mat; a clock hangs on the wall above a cupboard of plates and tea-things, and the window shutter is closed. On a table a candle burns, printed in the spot colour, beside a book. In the middle St John Rivers, tall and slender, fair-haired and pale, in a long dark coat, stands holding out a slip of paper with the words JANE EYRE written on it. On the right Jane sits on a chair by the hearth, small and pale in her dark frock, turned to the slip. A fire burns in the spot colour under the chimney breast at the far right.",
      quote: 'he has left you all his property, and that you are now rich',
      quoteAt: 'top-right',
    },
    {
      moment: "The missionary's wife",
      art: theMissionarysWife,
      alt: 'A linocut print of a glen among the hills near Moor House on a clear summer day. Two hills close in on either side, the left one in shadow and the right in sun, and between them, at the head of the glen, a rocky pass where a waterfall comes down, with a bare mountain beyond. A stream runs from the fall down through soft turf dotted with tiny flowers like rings and stars. At the left St John Rivers, fair-haired, in a long dark coat, sits back against a dark crag with his arms folded on his chest, his hat on the rock beside him, looking down at Jane. Jane sits on a low bank of heath below him, small, in a straw bonnet and a dark shawl, her hand at her breast, her face turned up to him. There is no colour in this print.',
      quote: 'he leaned back against the crag behind him, folded his arms on his chest',
      quoteAt: 'top-right',
    },
    {
      moment: 'The voice',
      art: theVoice,
      alt: 'A linocut print of the parlour of Moor House late at night, full of moonlight. At the left the moon shines in through an uncurtained window and lies in a long pale band across the dark floor. In the middle Jane, in her black frock, has started forward into the moonlight, her face turned up towards the window and one hand pressed to her breast. Behind her St John Rivers, tall and fair-haired, in a long dark coat, stands with his head bowed and his eyes lowered, one hand held loosely out towards her. On the right, on a dark table, a great old Bible lies open beside a candle burnt low, its small flame printed in the spot colour, and old portraits in dark frames and a cupboard with glass doors stand against the wall.',
      quote: 'The one candle was dying out: the room was full of moonlight.',
      quoteAt: 'top-left',
    },
    {
      moment: 'A blackened ruin',
      art: aBlackenedRuin,
      alt: 'A linocut print of Thornfield in the early morning. At the left a stone gate-pier topped with a stone ball stands at the edge of a meadow, and Jane, small, in a straw bonnet and a dark shawl, one hand at her breast, stands in the meadow looking towards the house. The low sun, printed in the spot colour, shines behind her in a pale sky where crows are flying. On the right the house is a blackened ruin: a high, thin shell of a front, three storeys of paneless windows with the sky showing through, no roof and no battlements, its doorway an empty black arch, with fallen beams, rubble and weeds along its foot. Dark trees cluster behind it, and a small grey church tower stands on a knoll between the house and the gates. Nothing is burning: the ruin is long cold.',
      quote:
        'a shell-like wall, very high and very fragile-looking, perforated with paneless windows',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Ferndean',
      art: ferndean,
      alt: 'A linocut print of the gloomy parlour at Ferndean at dusk, on an evening of rain. On the right a high, old-fashioned stone mantelpiece stands over a low fire in the grate, a few embers printed in the spot colour, and a glass stands on the mantelshelf. In the middle Rochester, tall and broad, dark against a narrow latticed window where rain streaks across the wood outside, stands bareheaded with his long black hair over his collar and his eyes shut; his left arm is folded across his chest inside his coat, and his right hand is held out. Jane, small and pale in her dark frock, her hair smooth, holds his hand in both of hers and looks up into his face. His old dog Pilot, black and white, is at her side, looking up. On a table at the left stand a tray and two lit candles, their small flames in the spot colour.',
      quote: 'I arrested his wandering hand, and prisoned it in both mine.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Reader, I married him',
      art: readerIMarriedHim,
      alt: 'A linocut print of a quiet wedding morning outside a small grey country church with a low tower. In the porch door at the left the parson, grey-haired, in a white surplice, holds his book, and the clerk in a plain dark coat stands outside the porch. In the middle Jane, small, in her dark frock and straw bonnet, walks out along the path a step ahead of Rochester, leading him; he walks behind her, tall and broad in black, his long black hair over his collar, his eyes shut and his face smiling, his arm passing round her shoulders. Ahead of them, over the dark wood at the right, the sun shines in the spot colour, and rough grass grows on either side of the path.',
      quote: 'A quiet wedding we had: he and I, the parson and clerk, were alone present.',
      quoteAt: 'top-left',
    },
  ],
  // ./portraits, as Brontë describes them.
  portraits: PORTRAITS,
}
