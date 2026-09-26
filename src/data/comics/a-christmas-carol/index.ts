/**
 * A Christmas Carol in linocut: the panels for its key moments and the
 * portraits of its people as Dickens describes them.
 *
 * HOW TO ADD A PIECE
 * 1. Read the style guide: src/components/comics/linocut/index.ts. It holds the
 *    palette, the carving tools, the motion classes and the safeguarding rules.
 * 2. Draw it in its own file here, as a LinocutArt: `Draw` returns SVG content
 *    only (the frame supplies the <svg>, the alt text and the textures).
 * 3. Register it below. A panel's `moment` is the EXACT title of a moment in
 *    src/data/study-guides/a-christmas-carol.ts's timeline. Its quotation, and
 *    every portrait phrase and passage, is copied from the held edition,
 *    src/data/full-texts/a-christmas-carol.ts, not typed from memory.
 * 4. `npx vitest run src/__tests__/comics.test.ts` checks the key, the
 *    quotations against the edition, the alt text, and that no art file
 *    reaches for a URL.
 *
 * HOW TO PREVIEW, without a dev server or a public route:
 *
 *   node scripts/preview-comics.mjs a-christmas-carol
 *   node scripts/preview-comics.mjs a-christmas-carol --only scrooge --at 400,1500
 *   node scripts/preview-comics.mjs a-christmas-carol --out <folder>
 *
 * It renders every registered piece with react-dom/server into one standalone
 * HTML page (the same frames, CSS and textures the site uses, nothing
 * fetched), then screenshots each piece with Playwright in Chrome: the finished
 * print at desktop and phone widths, the reduced-motion render, and a frame at
 * each `--at` time in milliseconds after the motion starts. It prints where the
 * files went (by default a folder in the system temp directory) and fails if
 * the page logs an error or requests anything over the network. Look at every
 * PNG yourself before calling a piece finished.
 */

import type { ComicSet } from '@/lib/comics/types'

import { countingHouse } from './counting-house'
import { charityCollectors } from './panels/charity-collectors'
import { marleysGhost } from './panels/marleys-ghost'
import { lonelySchoolboy } from './panels/lonely-schoolboy'
import { fezziwigsBall } from './panels/fezziwigs-ball'
import { gravestone } from './panels/the-gravestone'
import { raiseForBob } from './panels/a-raise-for-bob'
import { christmasMorning } from './panels/christmas-morning'
import { cratchitsMourn } from './panels/the-cratchits-mourn-tiny-tim'
import { fredsParty } from './panels/freds-party'
import { ignoranceAndWant } from './panels/ignorance-and-want'
import { deadMansBelongings } from './panels/dead-mans-belongings'
import { bodyOnTheBed } from './panels/body-on-the-bed'
import { belleReleasesHim } from './panels/belle-releases-him'
import { oneShadowMore } from './panels/one-shadow-more'
import { cratchitsKeepChristmas } from './panels/the-cratchits-keep-christmas'
import { aVacantSeat } from './panels/a-vacant-seat'
import { scroogePortrait } from './scrooge'
import { fredPortrait } from './portraits/fred'
import { marleyPortrait } from './portraits/marley'
import { ghostOfChristmasPastPortrait } from './portraits/ghost-of-christmas-past'
import { fezziwigPortrait } from './portraits/fezziwig'
import { bellePortrait } from './portraits/belle'
import { ghostOfChristmasPresentPortrait } from './portraits/ghost-of-christmas-present'
import { bobCratchitPortrait } from './portraits/bob-cratchit'
import { tinyTimPortrait } from './portraits/tiny-tim'
import { ghostOfChristmasYetToComePortrait } from './portraits/ghost-of-christmas-yet-to-come'

export const comics: ComicSet = {
  slug: 'a-christmas-carol',
  panels: [
    {
      moment: 'Christmas Eve at the counting-house',
      art: countingHouse,
      alt: "A linocut print of Scrooge's counting-house on Christmas Eve, already dark in the afternoon. In the middle, Scrooge sits hunched on a high stool at a sloping desk, a black silhouette against a window full of fog, where the houses opposite are faint shapes and two candles glow red in far windows. Behind him on the left is his very small fire, with the coal-box on the floor of his own room. On the right, his nephew Fred has just come in from the clerk's side: a figure in a top hat and greatcoat, his muffler flying, one hand raised in greeting, his face edged in red and his breath rising towards Scrooge in three white puffs. Through the open doorway behind Fred, in a cramped cell lit by one candle, Bob Cratchit in a long white comforter bends over his desk beside a fire of one red coal.",
      quote: "the clerk's fire was so very much smaller that it looked like one coal.",
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The charity collectors',
      art: charityCollectors,
      alt: "A linocut print of Scrooge's counting-house later on Christmas Eve. On the left, beside his very small red fire and his coal-box, Scrooge sits stiffly on his high stool at his sloping desk, a black silhouette, holding a paper out at arm's length to hand back the gentlemen's credentials. On the right, two portly gentlemen with their hats off bow towards him, their round faces lit and smiling: one holds an open book and a pen, his top hat tucked under his arm; the other holds a roll of papers to his chest and lets his hat hang from his hand. In the gap between them, through the fogged window, ragged men and a boy warm their hands round a brazier whose fire is printed in red. Behind the gentlemen, a candle burns in the clerk's cell.",
      quote: 'they had better do it, and decrease the surplus population',
      quoteAt: 'top-right',
    },
    {
      moment: "Marley's Ghost",
      art: marleysGhost,
      alt: "A linocut print of Scrooge's dark sitting-room late on Christmas Eve. On the left, in an old fireplace lined with small picture tiles, one flame leaps up tall and red from a very low fire, and a little saucepan stands on the hob. Scrooge, in his dressing-gown, slippers and nightcap, grips the arm of his high wing chair and stares, eyes wide. A disused bell hangs on the wall. On the right, in front of the shut door, Marley's Ghost faces us: a kerchief bound over his head and under his chin, spectacles pushed up on his forehead, wide fixed eyes, and his hair, pigtail, coat-skirts and boot-tassels standing out stiffly. His body is transparent, cut as a pale veil through which the door's panels show dark, and two buttons at the back of his coat show through his waistcoat. A long chain is padlocked round his middle and trails away across the floor, hung with cash-boxes, keys, padlocks, ledgers, deeds and steel purses.",
      quote: 'I wear the chain I forged in life',
      quoteAt: 'top-left',
    },
    {
      moment: 'The lonely schoolboy',
      art: lonelySchoolboy,
      alt: "A linocut print of a long, bare schoolroom on a winter day, with a line of plain, empty forms and desks running across it. On the left, old Scrooge in his dressing-gown and nightcap sits on the first form, bowed, with tears on his cheek. Beside him stands the Ghost of Christmas Past, the size of a child, with long white hair down its back, a smooth face with a red bloom on its cheek, bare arms and legs, a white tunic trimmed with flowers and a dark, glinting belt; a bright jet of light springs from the top of its head. With one hand on Scrooge's arm, it points its very long arm, holding a sprig of holly, across the room. At the far right a small boy sits alone at the last desk, bent over a book, beside a feeble fire printed in red. Through the windows are a snowy yard, a water-spout, a shed door and one bare poplar.",
      quote: 'A solitary child, neglected by his friends, is left there still.',
      quoteAt: 'top-right',
    },
    {
      moment: "Fezziwig's ball",
      art: fezziwigsBall,
      alt: "A linocut print of Fezziwig's warehouse cleared for a ball on Christmas Eve: a bright room with pale plank walls, two hanging lamps and a heaped fire printed in red, and the window shutters barred. In the middle, old Fezziwig, round and laughing, in a close knitted cap and a great white waistcoat, leaps with his arms up and his legs crossed in the air, his calves shining. Facing him, Mrs Fezziwig, broad and smiling, in a cap, kerchief and full dark gown, dances towards him with one hand raised. Behind them couples dance hand in hand, and a fiddler plays at a tall desk with a music-book open on it. On the left, in shadow behind a post, old Scrooge in his dressing-gown and nightcap watches with his hands clasped and his eyes wide, and the small Ghost of Christmas Past watches him, the light on its head burning bright.",
      quote: 'The happiness he gives, is quite as great as if it cost a fortune.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The gravestone',
      art: gravestone,
      alt: 'A linocut print of a neglected churchyard walled in by tall black houses, overrun with pale grass and weeds and crowded with old leaning stones. On the left the Ghost of Christmas Yet to Come stands tall against a pale sky: a heap of black robe and hood with no face inside, and one bony white hand stretched out, its finger pointing down at a headstone. Scrooge, in his dressing-gown and nightcap, is on his knees between them, turned up towards the empty hood and clutching the black robe with one hand. On the headstone, weeds growing round its foot, his own name is cut in red capitals: EBENEZER SCROOGE.',
      quote: 'I am not the man I was.',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'A raise for Bob',
      art: raiseForBob,
      alt: "A linocut print of Scrooge's counting-house on the morning after Christmas: the same room as on Christmas Eve, with the small red fire and the coal-box on the left and the window in the middle, where a church tower's clock shows eighteen minutes past nine. Scrooge's stool rocks by his desk where he has leapt from it. Scrooge, in his black coat and high collar, lunges across the floor grinning, his cheek flushed red, his other arm swung down behind him and one finger digging Bob Cratchit in the waistcoat. Bob, small and bareheaded in a patched coat, reels back through the doorway into his cell with both arms flung out behind him, one hand thrown up and the other feeling for the ruler on his desk, while a white burst of cut lines spreads round his astonished face. On a peg behind him hang his hat and his long comforter; his fire is still one red coal.",
      quote: 'I am about to raise your salary!',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Christmas morning',
      art: christmasMorning,
      alt: 'A linocut print of a bright, clear Christmas morning. On the left, Scrooge leans out of the open window of his dark house, in his white nightcap and dark dressing-gown, one hand on the sill and the other flung out towards the street, his head tipped down, laughing, his cheek flushed red. Below him are his street door with its knocker and three white steps. Across the rest of the picture the sun blazes in a white sky scored with its rays, over black roofs, chimneys and two church towers whose bells, printed in red, swing in their belfries inside rings of sound. Down in the sunlit street a small boy in a cap and short jacket stands looking up at Scrooge, his mouth open in wonder.',
      quote: "What's to-day, my fine fellow?",
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The Cratchits mourn Tiny Tim',
      art: cratchitsMourn,
      alt: "A linocut print of the Cratchits' dark, quiet room in the evening, lit only by a small red fire and one red candle flame. In the doorway on the left stand the Ghost of Christmas Yet to Come, a tall black hooded shape with no face, one bony white hand pointing towards the hearth, and Scrooge in his nightcap and dressing-gown, his hands clasped, watching unseen. By the fire, in the chimney-corner, Tiny Tim's little stool stands empty and his crutch leans beside it, both pale in the firelight; a small pot waits on the hob. Next to the empty stool Bob Cratchit sits in his chair with his long white comforter still on and his head bowed, eyes shut, while his two youngest children sit on his knees with their cheeks pressed to his face. On the right, dark shapes against the candlelight at a table, Mrs Cratchit sits with her hand up to her face beside a heap of black sewing, a daughter bends over her needle, and Peter sits with a book open before him.",
      quote: 'My little, little child!',
      quoteAt: 'bottom-right',
    },
    {
      moment: "Fred's party",
      art: fredsParty,
      alt: "A linocut print of Fred's party on Christmas evening, in a bright room. On the left, Topper sits by a high fire printed in red, with a lamp burning red on the mantelpiece. The plump sister, a band of lace at her neck, stands pointing at Fred, who is up from the sofa laughing, his head thrown back, his hands on his sides and one foot raised to stamp; his face is edged in red. By a curtained window, Scrooge's niece sits laughing in a wing chair with her feet on a footstool. Behind her chair, unseen by anyone, Scrooge in his dressing-gown and white nightcap leans in with one finger raised, calling out a guess. Beside him stands the Ghost of Christmas Present, a smiling giant with long dark curls, a holly wreath with red berries and white icicles, a fur-bordered robe open at the chest, an empty scabbard and one open hand.",
      quote: "It's your Uncle Scro-o-o-o-oge!",
      quoteAt: 'top-left',
    },
    {
      moment: 'Ignorance and Want',
      art: ignoranceAndWant,
      alt: 'A linocut print of an open place at night. Above the rooftops a church clock with a red face shows a quarter to twelve, and the sound of its chimes is cut round the spire. On the right towers the Ghost of Christmas Present, grown old: its long hair is grey, its face lined and grave, and its head is bowed over two children kneeling at the hem of its fur-bordered robe, and its arm is stretched out a little below the shoulder, one finger pointing out across the dark, past Scrooge, towards the roofs of the city. The children are thin and ragged, lit pale against the dark paving: the boy crouches low with one hand on the ground, scowling; the girl kneels upright with long lank hair, holding on to the fur of the robe. On the left, Scrooge in his dressing-gown and white nightcap starts back with his hands up, appalled.',
      quote: 'This boy is Ignorance. This girl is Want.',
      quoteAt: 'top-left',
    },
    {
      moment: "The dead man's belongings",
      art: deadMansBelongings,
      alt: "A linocut print of old Joe's parlour at night, lit by one hanging lamp with a red flame. The charwoman sits on a stool with her arms on her knees, laughing, beside the dark bed-curtains spread on the floor with their rings cut white. Old Joe, grey-haired and smoking a pipe, kneels with a flannel bag and tells out small heaps of coins on the floor. Behind them stand the laundress and the undertaker's man in a tall hat, and chalked sums with their total are cut on a shutter on the wall. On the right, a curtain of rags hangs from a line beside a stove of old bricks glowing red, and bottles, a pair of scales and a coil of chain lie heaped in the foreground. On the left, unseen by the thieves, Scrooge in his dressing-gown and white nightcap draws back in horror, and the Phantom, a tall figure shrouded in black, points its one pale hand at the spoil.",
      quote: 'to profit us when he was dead! Ha, ha, ha!',
      quoteAt: 'top-right',
    },
    {
      moment: 'The body on the bed',
      art: bodyOnTheBed,
      alt: 'A linocut print of a very dark bedroom. In the middle stands a bare four-poster bed with no curtains, lit by a pale shaft of light falling from a high window. A ragged white sheet lies almost flat over the bed, torn along its hanging edge, with nothing to be made out beneath it but a pillow at the head. Behind the bed the Phantom, a tall shape shrouded in black, points one pale finger down at the head of the bed. In the foreground Scrooge, in his white nightcap, his face lit and his eyes wide with fright and rimmed in red, stretches out a hand towards the sheet and stops short of it. In the far corner a cat, reared up on its hind legs, claws at the door.',
      quote: 'unwatched, unwept, uncared for',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Belle releases him',
      art: belleReleasesHim,
      alt: "A linocut print of a scene from Scrooge's past, in a darkness lit only by the Ghost of Christmas Past. Near the middle stands the Ghost, the size of a child, in a white tunic trimmed with flowers and a belt, its white hair hanging down its back, a touch of red on its smooth cheek and a sprig of holly in its hand, with a jet of light springing up from the crown of its head. On the left, old Scrooge in his dressing-gown and white nightcap watches, his face lit by the Ghost and his eye rimmed in red. On the right, in a pool of the Ghost's light, the young Scrooge in a black tailcoat and white stock sits on a bench beside Belle, a fair-haired young woman in a black mourning-dress. She has turned her bowed head away from him, and a tear sparkles on her cheek. He leans towards her with one hand held out, open, and his eye is rimmed in red for the greed that has taken root in him.",
      quote: 'I release you. With a full heart, for the love of him you once were.',
      quoteAt: 'top-right',
    },
    {
      moment: 'One shadow more',
      art: oneShadowMore,
      alt: "A linocut print of Belle's comfortable parlour years later, on a winter evening. On the left, Belle, now a mother and still fair-haired, sits smiling in her chair beside a fire burning red in the grate, and a toy turkey on a platter and a doll's frying-pan lie on the hearth. Across the fire her husband sits turned towards her with a smile, one hand on the shoulder of their daughter, a girl in a white dress with long, loose fair hair, who sits on a footstool leaning against him. On the right, old Scrooge in his dressing-gown and nightcap leans over a great black cone, the Ghost's extinguisher-cap, pressing it down on the floor with both fists, his eye rimmed in red. The Ghost is hidden under it, but its light pours out from under the rim in a flood of white across the floorboards.",
      quote: 'though Scrooge pressed it down with all his force, he could not hide the light',
      quoteAt: 'top-left',
    },
    {
      moment: 'The Cratchits keep Christmas',
      art: cratchitsKeepChristmas,
      alt: "A linocut print of the Cratchits' low, crowded room at Christmas dinner. On the left, the Ghost of Christmas Present, a smiling giant with long dark curls and a holly wreath with red berries, stoops in the doorway in a long robe edged with white fur, an empty scabbard at his belt. He holds out a horn-shaped torch with a red flame, sprinkling drops of light over the room. Beside him, old Scrooge in his dressing-gown and nightcap holds on to the Ghost's robe. At a small table with a white cloth sit the family: Tiny Tim in the corner, his little crutch leaning by him, then Bob in his long white comforter, Peter in his huge collars, and on the far side Belinda with ribbons in her hair and the two youngest with spoons in their mouths, while Martha stands at the end. On the table is a dish holding one small bone of the goose. In the middle, Mrs Cratchit, her cheek flushed red, holds out the Christmas pudding on a plate, speckled and blazing with red flames, a sprig of holly stuck in the top, its light shining across the wall. Steam drifts from the wash-house door on the right.",
      quote: 'they were happy, grateful, pleased with one another, and contented with the time',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'A vacant seat',
      art: aVacantSeat,
      alt: "A linocut print of the Cratchits gathered round their fire after dinner. On the left, the Ghost of Christmas Present, a giant with long dark curls and a holly wreath with red berries, stands stern, holding up his torch with its red flame, and old Scrooge, in his dressing-gown and nightcap, stands before him with his head hung. In the middle, Mrs Cratchit, her cheek red, raises a tumbler, and Bob, in his white comforter, leans from his chair to hold the hand of Tiny Tim, who sits on a little stool at his side looking up at him, his crutch beside him and an iron frame on his legs. Two more children sit on the floor by the fire, which burns red in the chimney-corner with a jug on the hob. The torch throws a pool of light on the wall above them, and in it their shadows: Bob's shadow on his chair, reaching out his hand, and beside it, where Tim's should be, the shadow of an empty stool with a crutch leaning by it.",
      quote: 'a crutch without an owner, carefully preserved.',
      quoteAt: 'bottom-left',
    },
  ],
  portraits: [
    {
      name: 'Ebenezer Scrooge',
      art: scroogePortrait,
      alt: "A linocut portrait of Scrooge in profile, facing right, drawn from Dickens's description in Stave One: an old, pinched face; a long, sharp, pointed nose; a hollow, shrivelled cheek; a red-rimmed eye; thin, tight lips; and white bristles of frost on his head, his eyebrows and his jutting chin. He wears a high white collar, a black stock and a black coat. Four numbered red markers point to his nose, his cheek, his eye and the frost on his chin.",
      describedBy: [
        { phrase: 'pointed nose', at: [292, 140], to: [259, 156] },
        { phrase: 'shrivelled his cheek', at: [194, 184] },
        { phrase: 'made his eyes red', at: [262, 96], to: [224, 120] },
        {
          phrase: 'A frosty rime was on his head, and on his eyebrows, and his wiry chin',
          at: [268, 238],
          to: [240, 222],
        },
      ],
      where: 'Stave One',
      passage:
        'The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait; made his eyes red, his thin lips blue; and spoke out shrewdly in his grating voice. A frosty rime was on his head, and on his eyebrows, and his wiry chin.',
      note: "The cold is inside him. Dickens turns Scrooge's meanness into weather, and then into a face.",
      artNote:
        'This print has one colour besides black, so red marks his eyes; his blue lips are left to the words.',
    },
    // The other people Dickens describes, in the order he describes them.
    // Each is drawn, and its words and markers kept, in its own file.
    fredPortrait,
    marleyPortrait,
    ghostOfChristmasPastPortrait,
    fezziwigPortrait,
    bellePortrait,
    ghostOfChristmasPresentPortrait,
    bobCratchitPortrait,
    tinyTimPortrait,
    ghostOfChristmasYetToComePortrait,
  ],
}
