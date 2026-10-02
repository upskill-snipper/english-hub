/**
 * Silas Marner in linocut: the panels for its key moments and the portraits
 * of its people as George Eliot describes them.
 *
 * An edition is held in src/data/full-texts/silas-marner.ts (Project
 * Gutenberg), so every quotation on the art is copied from it, word for word,
 * and the comics test checks it there. A quotation may not run across a
 * paragraph break. Quote only from that file.
 *
 * DEATHS HAPPEN OFF THE PAGE. Molly Farren dies in the snow from opium and
 * cold (Chapter 12): her body and her dying are never drawn. The panel may
 * show the child toddling towards the light of Silas's open door, or Silas at
 * his hearth finding her; the mother stays off the page, or is at most a
 * distant, indistinct shape in the snow. Dunstan Cass's skeleton, found when
 * the Stone-pit is drained (Chapter 18), is never drawn: show the drained pit,
 * the faces, the gold bags, or Godfrey telling Nancy. Dunstan's taking of the
 * gold is shown as the theft it is, never as harm to anyone. Eppie is a small
 * child for much of the book, and is never shown in danger at the moment of
 * harm (the coal-hole, the Stone-pit's edge).
 *
 * The people recur across both parts, so their figures are cut once, from
 * the text's own descriptions, in ./panels/people.tsx. Draw them from there,
 * so a student meets the same Silas, the same Godfrey and the same Dunstan in
 * every panel. Silas's cottage by the Stone-pit has no shared file: each panel
 * that shows it draws it from the text, as laid stone under a roof of stone
 * slates ("Marner's cottage had no thatch", Chapter 4), with a brick floor
 * sprinkled with sand, the loom and the brick hearth. It is drawn first inside
 * in ./panels/fifteen-years-at-the-loom.tsx and outside in
 * ./panels/the-robbery.tsx.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs silas-marner --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'
import { framedAtLanternYard } from './panels/framed-at-lantern-yard'
import { fifteenYearsAtTheLoom } from './panels/fifteen-years-at-the-loom'
import { blackmailAtTheRedHouse } from './panels/blackmail-at-the-red-house'
import { theRobbery } from './panels/the-robbery'
import { robbed } from './panels/robbed'
import { godfreyFailsToConfess } from './panels/godfrey-fails-to-confess'
import { dollysLardCakes } from './panels/dollys-lard-cakes'
import { theNewYearsEveDance } from './panels/the-new-years-eve-dance'
import { theChildInTheSnow } from './panels/the-child-in-the-snow'
import { silasAtTheRedHouse } from './panels/silas-at-the-red-house'
import { nancysSunday } from './panels/nancys-sunday'
import { eppieIsNamed } from './panels/eppie-is-named'
import { godfreysSilence } from './panels/godfreys-silence'
import { sixteenYearsLater } from './panels/sixteen-years-later'
import { theStonePitGivesUpItsSecret } from './panels/the-stone-pit-gives-up-its-secret'
import { eppieChooses } from './panels/eppie-chooses'
import { tooLate } from './panels/too-late'
import { lanternYardIsGone } from './panels/lantern-yard-is-gone'
import { theWedding } from './panels/the-wedding'

export const comics: ComicSet = {
  slug: 'silas-marner',
  panels: [
    {
      moment: 'Framed at Lantern Yard',
      art: framedAtLanternYard,
      alt: 'A linocut print of the vestry of the chapel in Lantern Yard by day, its whitewashed walls lit by one plain window through which the roofs and chimneys of the town and the hills beyond can be seen. On the left Silas Marner, a young man with a pale face and large, prominent eyes, kneels on the bare boards with his hands pressed together, looking up. In the middle the minister, in a long dark coat and a white neckcloth, stands behind a plain table and holds up a slip of paper towards Silas: the lot that has been drawn. On the table lie a shut pocket-knife and an empty money-bag printed in red, lying limp: the bag that held the church money. On the right William Dane, also pale-faced, kneels facing Silas with his hands together, his narrow eye turned on his friend and his lips pressed tight, and behind him two more of the brethren kneel, one looking at Silas and one with his head bowed in prayer.',
      quote: 'The lots declared that Silas Marner was guilty.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Fifteen years at the loom',
      art: fifteenYearsAtTheLoom,
      alt: 'A linocut print of the inside of a stone cottage by day, lit from a window where a cobweb hangs in one corner and brambles show outside. Silas Marner, thin and bent, sits on a bench at his hand-loom, his pale withered face bent close over the cloth, which is woven in little squares; one hand holds the shuttle and the other the batten, and the threads of the warp run back through the loom. Under the loom the brick floor, sprinkled with sand, is cut away to show a hole beneath it where two leather bags of gold lie hidden, printed in red. On the right, by the brick hearth where a kettle hangs in the empty fireplace, his broken water-pot stands mended, its cracks showing, propped on a stone.',
      quote: 'He seemed to weave, like the spider, from pure impulse, without reflection.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Blackmail at the Red House',
      art: blackmailAtTheRedHouse,
      alt: 'A linocut print of the dark wainscoted parlour of the Red House in the grey light of a November afternoon. On the left Godfrey Cass, a big young man with fair hair, stands on the hearth with his back to a low fire printed in red, his hands in his pockets and his head down, frowning at the floor. Two guns, a whip and a fox’s brush hang on the wall by the chimney-piece, and a clay pipe leans in each corner of the grate. Beside him a hat lies flung on a chair, and a spaniel lies under it. In the middle stands a table with two tankards on it. On the right, against the window, his brother Dunstan, thick-set, lies back across two chairs with his boots up, a tankard in one hand, rapping the window-seat behind him with the handle of his whip, his chin up and his cheek flushed red.',
      quote: 'You never hold trumps, you know—I always do.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The robbery',
      art: theRobbery,
      alt: 'A linocut print of the stone cottage by the Stone-pit on a dark, rainy night, rain cut across the black in fine slanting lines. On the left the cottage stands with its shutters closed and its door shut, light gleaming only through the chinks of the shutters, at the latch-hole and along the foot of the door. In the middle Dunstan Cass, thick-set, in a round hat, a riding coat and top-boots, strides away from the door to the right, a heavy leather bag of gold hanging from each fist, printed in red, his whip gripped with one of them. Ahead of him on the right the lane ends at the dark edge of the Stone-pit, where a little light glints on the water far below.',
      quote: 'So he stepped forward into the darkness.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Robbed',
      art: robbed,
      alt: 'A linocut print of the bright kitchen of the Rainbow inn, lit by a big fire printed in red in an open hearth on the right. On the left Jem Rodney, a rough, unshaven labourer in a smock-frock, sits on the end of a high-backed settle with his drinking-can on his knee, looking up. Close beside him stands Silas Marner, thin and bareheaded, in his white shirt sleeves and waistcoat, wet from the rain: he has turned away from Jem and lifted both hands to his head, his pale face full of misery. Beyond him his chair stands empty in the middle of the room, in the firelight. Far off on the right, by the fire, old Mr Macey sits with his white head tipped back and his hands together in his lap, watching.',
      quote: 'I don’t accuse you—I won’t accuse anybody',
      quoteAt: 'top-right',
    },
    {
      moment: 'Godfrey fails to confess',
      art: godfreyFailsToConfess,
      alt: 'A linocut print of the dark wainscoted parlour of the Red House on a winter morning. On the left, below two guns, a hunting whip and a fox’s brush hung on the wall, a low fire glows red in the grate, with tankards on the chimney-piece and a long clay pipe in each corner. Fleet the deer-hound, long-legged and rough-coated, stands by the chair of Squire Cass, a stout old man with thin grey hair and a heavy jaw, who leans forward over the breakfast table with one hand laid flat on the white cloth beside his plate, his knife and fork put down, his cheek flushed red with anger. On the table stand a tankard of ale, a joint of beef and a loaf. On the right, against the pale light of the window, his son Godfrey, big and fair-haired, in a tail-coat and riding boots, faces his father with one open hand turned out in a shrug, between the table and the shut door he will leave by.',
      quote: 'Favourable Chance, I fancy, is the god of all men who follow their own devices',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Dolly’s lard-cakes',
      art: dollysLardCakes,
      alt: 'A linocut print of the inside of Silas Marner’s stone cottage on a winter afternoon. On the left, by his hand-loom and a window with frost on its panes, Silas, thin and bent, with a pale withered face and a large eye, holds a small round cake up close to his eye, the letters I H S pricked on it. In the middle Dolly Winthrop, in a white cap, kerchief and apron, sits in an armchair and holds out a plate with two more cakes on it, her cheek fresh and red. Behind her chair stands her small son Aaron, with a wide white frill round his neck and a round red cheek, his hands on the chair back, peeping round it at the weaver. On the right is the brick hearth, where a small fire burns red under a kettle on its hanger, and beside it Silas’s broken brown pot stands mended.',
      quote: 'now the casket was empty, and the lock was broken.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The New Year’s Eve dance',
      art: theNewYearsEveDance,
      alt: 'A linocut print of New Year’s Eve at the Red House. On the left, through a wide doorway, the dance goes on in the White Parlour, a white panelled room lit by tallow candles with red flames among holly with red berries, with oval mirrors and a mistletoe-bough hanging from the ceiling: old Solomon, with long white hair, plays his fiddle with his head on one side, the stout Squire dances with one hand raised in a wave beside small Mrs Crackenthorp in a turban with a tall feather, and a young couple go down the dance with their joined hands raised. On the right, in the dark small parlour next door, lit by one candle on a card-table, Nancy Lammeter, small, with flat rings of hair over her brow and a pale silk gown, sits bolt upright on a chair against the card-table, her cheek flushed red. Godfrey, big and fair-haired, in pale stockings and dancing shoes, stands over her with one hand on his heart.',
      quote: 'I think those have the least feeling that act wrong to begin with',
      quoteAt: 'top-right',
    },
    {
      moment: 'The child in the snow',
      art: theChildInTheSnow,
      alt: 'A linocut print of the inside of Silas Marner’s cottage at night, dark but for a red glimmer on the brick hearth on the right, where two logs have fallen apart under a kettle on its hanger and a small pot stands to one side. Beside the hearth stands his mended brown pot. Through the window on the left are white snow, the edges of broken cloud and one star. In the middle Silas, thin, with a pale withered face, leans forward from his wooden fireside chair and stretches out his hand. His fingers touch the curly head of a small child asleep on an old coat spread on the floor in front of the hearth. She lies curled up in a dark shawl with her little bonnet at her back, and light is cut in white rays round her pale curls.',
      quote: 'his fingers encountered soft warm curls',
      quoteAt: 'top-right',
    },
    {
      moment: 'Silas at the Red House',
      art: silasAtTheRedHouse,
      alt: 'A linocut print of the White Parlour of the Red House on New Year’s Eve, a white panelled room with oval mirrors, tallow candles with red flames in branched holders among holly with red berries, and a mistletoe-bough. On the left, just inside an open doorway from the dark hall, Silas Marner, thin, with a pale withered face, holds a small curly-haired child close against his chest with both arms, and she hides her face against him. Facing them, stout Mrs Kimble, in a turban and a pale ornamented bodice, holds out one open hand towards the child and stops short of her. In the middle Nancy Lammeter, in a pale silk gown, her hands folded, turns her face up to Godfrey, who stands stiffly beside her, big and fair-haired, his fists shut at his sides, staring at the child. On the right, servants and villagers crowd the other doorway, looking on.',
      quote: 'It’s come to me—I’ve a right to keep it.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Eppie is named',
      art: eppieIsNamed,
      alt: 'A linocut print of the inside of Silas Marner’s stone cottage by day. On the right a fire burns red on a raised brick hearth, with a kettle hanging over it. Beside it Silas, thin and pale, his dark hair long, sits in his fireside chair with a little girl of two on his lap, his arm round her and his face bent close over her. She has a head of tight curls and wears a white shirt that falls to her feet, and she reaches out with one hand towards a small patched frock. Facing them on a plain chair sits Dolly Winthrop in a white cap, kerchief and apron, holding the frock up by its shoulders, with more little garments folded in a pile on her knee. Behind her, on the left, the loom stands idle by its empty bench.',
      quote: 'the child was come instead of the gold—that the gold had turned into the child',
      quoteAt: 'top-left',
    },
    {
      moment: 'Godfrey’s silence',
      art: godfreysSilence,
      alt: 'A linocut print of a country lane on a bright day. In the middle Godfrey Cass, a broad young gentleman in a tall round hat, his fair hair showing beneath it, sits on a dark horse that stands reined in, facing left along the lane, which runs away between hedges to a farmhouse among trees on a rise. He has turned in the saddle and leans down to drop a coin, printed in red, into the open hand of Silas Marner, a thin, pale man with long dark hair, who stands by the horse’s flank looking up at him. Silas carries a small curly-headed girl on his other arm; her hand rests on his shoulder and she looks up at the rider. On the right a hedge and an ash tree stand against the sky.',
      quote: 'That was a father’s duty.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Sixteen years later',
      art: sixteenYearsLater,
      alt: 'A linocut print of the open ground at the Stone-pits on a bright autumn afternoon, with the sun printed in red high on the left. In the foreground on the left lies the old quarry, its far side broken stone ledges; below the line where the water stood, a band of dark wet stone shows how far it has sunk, and the water lies low at the bottom. Eppie, a young woman with rippling curly hair in a dark gown, stands at the edge holding out her hand towards the water, and behind her Silas, old and bent now, his hair white, leans to look, his hands behind his back. Beyond the pit a stile stands in the hedge under an ash tree. On the right is the stone cottage, roofed with stone slates, its newer end built on, with a furze bush near the door.',
      quote: 'come and see how the water’s gone down since yesterday.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Nancy’s Sunday',
      art: nancysSunday,
      alt: 'A linocut print of the polished parlour of the Red House on a Sunday afternoon. On the left, silver tankards stand on a side-table, a low fire burns red in a pale stone fireplace, and above the mantelpiece a stag’s antlers hold two whips and two walking-sticks between two vases of lavender. In the middle a wing armchair stands empty by the hearth, facing a small round table on which a Bible lies open. On the right Nancy, small and upright in a plain dark gown, her hair dressed in flat rings over her brow, sits alone at the table with her hand by the open page and her eyes lifted from it to the empty chair. Behind her, through the tall window, the church tower, the gravestones and the Rectory trees in their autumn colours, printed in red, stand in the sun.',
      quote: 'it’s the will of Providence',
      quoteAt: 'bottom-left',
    },
    {
      moment: 'The Stone-pit gives up its secret',
      art: theStonePitGivesUpItsSecret,
      alt: 'A linocut print of the polished parlour of the Red House at tea-time, the fire made up and burning red, the shadows of the gravestones lying long across the churchyard beyond the window and the Rectory trees printed in red. Godfrey Cass, a broad, fair-haired man of forty, sits in the wing armchair by the hearth that stood empty an hour before, leaning forward with his arm on his knee and his frowning face turned to his wife. His tall round hat stands on the little round table between them among the tea-cups. Facing him across the table, Nancy sits very upright in her chair, her hands clasped in her lap, and looks back at him.',
      quote: 'Everything comes to light, Nancy, sooner or later.',
      quoteAt: 'bottom-left',
    },
    {
      moment: 'Eppie chooses',
      art: eppieChooses,
      alt: 'A linocut print of the inside of the stone cottage at night, its laid stone wall and brick floor lit by one candle on an oak table in the middle, where the recovered gold stands in columns of coins. The coins and the candle flame are printed in red. On the left, on two plain chairs, sit Nancy, small and upright in a straw bonnet tied with a bow and a dark fringed shawl, looking across the room, and Godfrey, broad and fair-haired, his head bowed and his eyes on the end of the walking-stick he rests on the bricks. On the right Eppie, a young woman with curly hair and a pale throat above a dark gown, stands facing them beside her father, her hand closed round his. Silas, white-haired and pale-faced, sits in his oak arm-chair and looks up at her.',
      quote: 'I can’t feel as I’ve got any father but one',
      quoteAt: 'top-left',
    },
    {
      moment: 'Too late',
      art: tooLate,
      alt: 'A linocut print of the oak parlour of the Red House at night, lit only by a low fire, printed in red, in the grate on the left, below a stag’s antlers hung with whips and walking-sticks; silver tankards stand on a side-table by the wall. Godfrey, broad and fair-haired, sits in his wing armchair by the hearth, his face turned up to Nancy, who stands at his side in a dark gown with her hand in his, looking down at him. Behind her, her straw bonnet lies on the round table and her dark shawl hangs over the back of her chair. Through the window on the right, stars shine over the dark church tower and the trees.',
      quote: 'I shall pass for childless now against my wish.',
      quoteAt: 'bottom-left',
    },
    {
      moment: 'Lantern Yard is gone',
      art: lanternYardIsGone,
      alt: 'A linocut print, in black and white only, of a paved street in a manufacturing town at noon. On the left stands an old timbered house with a window jutting out over the street on two brackets. Beside it Silas, white-haired and pale-faced, has stopped dead in the street, a small cloth bundle hanging from his hand, staring at the great factory that fills the right of the picture, with rows of windows and a chimney pouring smoke across the sky. Eppie, in a dark bonnet, holds his arm in both hands and looks up into his face. Men and women stream out of the factory door and across the open ground towards them.',
      quote: 'It’s all gone—chapel and all.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The wedding',
      art: theWedding,
      alt: 'A linocut print of a lane on a bright morning, the sun blazing in the top left corner. On the left, lilacs in flower stand above an old stone wall, with the church tower beyond. Along the lane, in front of a dark hedgerow, four people walk towards home: Dolly, in a white cap and kerchief, behind; then Silas, white-haired, holding the hand of Eppie, who is dressed all in white; and Eppie’s other hand rests on the arm of her husband Aaron, a tall young man in a dark suit. On the right stands the stone cottage with its slate roof and its new end, and in the garden in front of it, behind a low open fence and beside a furze bush, a bed of flowers printed in red.',
      quote: 'the flowers shone with answering gladness',
      quoteAt: 'top-right',
    },
  ],
  portraits: PORTRAITS,
}
