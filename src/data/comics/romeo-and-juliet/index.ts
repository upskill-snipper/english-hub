/**
 * Romeo and Juliet in linocut: the panels for its key moments and the
 * portraits of its people as the play describes them.
 *
 * An edition is held in src/data/full-texts/romeo-and-juliet.ts (Project
 * Gutenberg #1513), so every quotation on the art is copied from it, word for
 * word, and the comics test checks it there. A quotation may not run across a
 * paragraph break, and a verse line break is a space, never " / ".
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs romeo-and-juliet --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'
import { theChorusTellsTheEnding } from './panels/the-chorus-tells-the-ending'
import { aBrawlInTheStreets } from './panels/a-brawl-in-the-streets'
import { aSuitorForJuliet } from './panels/a-suitor-for-juliet'
import { queenMabAndAWarning } from './panels/queen-mab-and-a-warning'
import { theFeast } from './panels/the-feast'
import { banished } from './panels/banished'
import { thursday } from './panels/thursday'
import { dawnAndAFathersRage } from './panels/dawn-and-a-fathers-rage'
import { theFriarsPlan } from './panels/the-friars-plan'
import { julietDrinksThePotion } from './panels/juliet-drinks-the-potion'
import { theBalcony } from './panels/the-balcony'
import { theFriarAgrees } from './panels/the-friar-agrees'
import { aSecretWedding } from './panels/a-secret-wedding'
import { twoDeathsAndABanishment } from './panels/two-deaths-and-a-banishment'
import { weddingTurnedToFuneral } from './panels/wedding-turned-to-funeral'
import { newsInMantua } from './panels/news-in-mantua'
import { theLetterThatNeverWent } from './panels/the-letter-that-never-went'
import { theTomb } from './panels/the-tomb'
import { aGloomingPeace } from './panels/a-glooming-peace'
import { julietHearsTheNews } from './panels/juliet-hears-the-news'

export const comics: ComicSet = {
  slug: 'romeo-and-juliet',
  panels: [
    {
      moment: 'The Chorus tells the ending',
      art: theChorusTellsTheEnding,
      alt: 'A linocut print of a bare stage at night. On the left, on the boards, stands the Chorus, a bearded man in a long dark gown and a flat cap, turned towards the scene behind him with one open hand held out to it, palm up. Across the back of the stage two great houses of Verona face each other, the same in every line, each with a tower flying a banner and rows of lit windows, with the far roofs and towers of the city low between them. High in the dark sky above them two stars printed in red fall towards each other, and their white trails cross in the middle of the sky, so that each star falls towards the other house. Along the bottom of the picture, below the front of the stage, are the backs of the heads of the audience.',
      caption: 'The audience knows the ending from the first minute.',
      captionAt: 'top-left',
    },
    {
      moment: 'A brawl in the streets',
      art: aBrawlInTheStreets,
      alt: 'A linocut print of a square in Verona on a bright morning, with houses, a loggia of three arches and a bell tower behind. In the middle two young men face each other with swords drawn: on the left Tybalt, in a feathered cap, lunges with his rapier raised over his head and his other fist thrust out; on the right Benvolio holds his own sword pointing at the ground and puts up an open hand to stop him. No blow has landed. On the far left old Capulet, with a long white beard, in a long gown and cap, reaches forward with an open hand for a sword while his wife holds him back by the arm. On the far right old Montague, white-haired and white-bearded, brandishes his sword while his wife holds him back. Behind them, small, two servants with round bucklers cross swords on the left, and on the right a servant raises his buckler against a citizen swinging a club. At the back, in the middle arch of the loggia, the Prince, cut in white, with a short dark beard and a circlet printed in red, points at the ground, with an attendant holding a spear in the arch on either side.',
      quote: 'What, drawn, and talk of peace? I hate the word',
      quoteAt: 'top-right',
    },
    {
      moment: 'A suitor for Juliet',
      art: aSuitorForJuliet,
      alt: "A linocut print of a street in Verona by day, with sunlit house fronts behind, an archway on the left opening on to the rest of the city, and on the right the arched door of Capulet's house. On the left Paris, a young man without a beard, in a bonnet, doublet and short cloak, bows a little towards Capulet with one hand on his heart. Facing him in the middle, old Capulet, white-bearded, in a cap and a long gown, answers with an open hand held out palm up; their hands do not meet. With his other hand Capulet passes a sheet of paper, printed in red, back to his servant, a bareheaded young man in a belted tunic who reaches out to take it: the list of guests for the feast.",
      quote: 'My will to her consent is but a part',
      quoteAt: 'top-left',
    },
    {
      moment: 'Queen Mab and a warning',
      art: queenMabAndAWarning,
      alt: "A linocut print of a street in Verona at night under a sky full of white stars. On the right stands Capulet's house, its windows lit for the feast, and two small maskers, one with a torch and one with a drum, go in at its bright doorway. In the foreground three masked young men are on their way there. On the left Mercutio, in a mask with a heavy jutting brow, throws out an open hand with the fingers spread in the middle of a speech, his other hand on his hip. In the middle Romeo, masked, with curly hair and a sword at his side, holds a burning torch up behind him, so that his head is black against its light; he lays his other hand on his breast and looks up at the sky, where one star, printed in red, hangs above him. On the right Benvolio, masked and in a flat cap, turns back to them, holding out one open hand to them and pointing over his shoulder to the house with the other.",
      quote: 'Some consequence yet hanging in the stars',
      quoteAt: 'top-left',
    },
    {
      moment: 'The feast',
      art: theFeast,
      alt: "A linocut print of the hall in Capulet's house during the feast at night, lit by torches on the walls whose flames are printed in red, with the tables turned up on their sides against the back wall. In the middle Romeo, a young man with curly hair, still in his mask, and Juliet, a girl cut in white with long dark hair loose down her back, face each other and raise their hands to touch palm to palm, under the torch that burns on the wall between them. Behind them two couples dance, and old Capulet, white-bearded, in his cap and gown, stands among his guests. On the left Tybalt, in his feathered cap, is going out through a bright doorway with his fist clenched, and turns his head to glare back at Romeo. On the right the Nurse, broad, in a white coif and apron, makes her way towards Juliet.",
      quote: 'My only love sprung from my only hate',
      quoteAt: 'top-right',
    },
    {
      moment: 'The balcony',
      art: theBalcony,
      alt: "A linocut print of Capulet's orchard at night. On the right, high in the dark stone wall of the house, Juliet leans on the sill of an arched window with her cheek resting on her hand; she is cut in white, her long dark hair loose down her back, and the room behind her glows red, its light cut in faint rays across the wall. Below her in the orchard stands Romeo, a young man with curly hair, in a doublet and short cloak with a sword at his side, black against a high pale wall. He looks up at her with one hand on his heart and the other held out towards her, open. A pale moon, shadowed across its face, hangs over the orchard, the tops of the fruit trees are touched with white, and two stars shine between the moon and the window.",
      quote: "It is too rash, too unadvis'd, too sudden",
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The Friar agrees',
      art: theFriarAgrees,
      alt: "A linocut print of Friar Lawrence's garden at dawn, before sunrise: the sky still dark overhead, and the grey light of morning spreading up from the horizon behind the far rooftops and towers of Verona, crossed by long bars of cloud streaked with light. On the left stands the Friar's small stone cell with its door open, and rows of herbs grow in the garden beds. In the middle Friar Lawrence, an old friar with a white tonsure, in a habit with the hood down and a knotted cord at the waist, holds up one small flower, printed red, on his open palm. His willow basket of herbs stands on the ground behind him. Facing him on the right, Romeo, a young man with curly hair, in a doublet and cloak with a sword at his side, leans towards him with one hand on his heart and the other held out, palm up, asking.",
      quote: "this alliance may so happy prove, To turn your households' rancour to pure love",
      quoteAt: 'top-left',
    },
    {
      moment: 'A secret wedding',
      art: aSecretWedding,
      alt: "A linocut print of Friar Lawrence's cell by day: stone walls, bundles of herbs drying from a beam, a shelf of jars, a basket of herbs, and an arched window looking out on the walls of Verona. Romeo, a young man with curly hair, in a doublet and cloak with a sword at his side, stands black against the bright window, one hand on his heart and the other held out. Juliet, a girl cut in white with her long dark hair down her back, has just come in lightly, her gown swinging, and holds out her hand to his; their hands have not yet met. On the right Friar Lawrence, an old friar with a white tonsure, in a habit with a knotted cord, stands by his table with his hands pressed together in prayer. Beside him a small clay lamp burns on the table, its flame printed red.",
      quote: 'These violent delights have violent ends',
      quoteAt: 'top-right',
    },
    {
      moment: 'Two deaths and a banishment',
      art: twoDeathsAndABanishment,
      alt: "A linocut print of a square in Verona at midday, under a white-hot sky and a sun printed red, with houses and a tower behind. In the middle Romeo, a young man with curly hair, has rushed between two swordsmen with his arms spread and both hands up and open, one towards each. On the left Mercutio, bareheaded, lunges in with his rapier; on the right Tybalt, in a flat cap with a white feather, stands in a fencer's guard with one hand on his hip. Both rapiers have been beaten down and point at the paving, touching no one. Behind Mercutio, Benvolio, in a flat cap, puts up an open hand and calls to them to hold; behind Tybalt one of his followers waits with a hand on his sword.",
      quote: "A plague o' both your houses",
      quoteAt: 'top-left',
    },
    {
      moment: 'Juliet hears the news',
      art: julietHearsTheNews,
      alt: "A linocut print of a room in Capulet's house in the afternoon, with plaster walls above a panelled wainscot and a boarded floor. On the left a door stands open on a dark passage. Just in from it, black against an arched window where the low sun is printed red over the roofs, the Nurse, a broad old woman in a gown, a white apron and a white linen coif, lifts her face and wrings her hands together. On the floor between her and Juliet lies a rope ladder, thrown down in a heap. On the right Juliet, a girl cut in white with her long dark hair down her back, starts back from the Nurse with one hand pressed to her breast and the other held up, open.",
      quote: 'Beautiful tyrant, fiend angelical',
      quoteAt: 'top-right',
    },
    {
      moment: 'Banished',
      art: banished,
      alt: "A linocut print of Friar Lawrence's cell late at night, lit by one small lamp whose flame is printed red. Romeo, a young man with curly hair, lies full length on the stone floor, propped on one elbow with his face bowed to the flags and one hand clutching his hair. Friar Lawrence, an old friar with a tonsure, in a habit with the hood down and a knotted cord at the waist, bends over him and holds out an open hand. Above them, through the arched window, the moon and stars shine over the roofs, the wall and a tower of Verona. Bundles of herbs hang drying from a beam, jars stand on a shelf, and a basket of herbs sits on the floor.",
      quote: 'There is no world without Verona walls',
      quoteAt: 'top-right',
    },
    {
      moment: 'Thursday',
      art: thursday,
      alt: "A linocut print of a room in Capulet's house late at night. On the left, Paris, a young man in a flat cap and short cloak, holds out his hand, and old Capulet, white-bearded, in a cap and a long gown, takes it in both of his. Beside them, through an arched window, a thin moon hangs low among the stars over dark roofs. On the right, Lady Capulet, in a gown and veil, stands at the foot of a stair holding up a candle whose flame is printed red, the only light in the room. The stair climbs behind her to a closed door at the top.",
      quote: "I think she will be rul'd In all respects by me",
      quoteAt: 'bottom-right',
    },
    {
      moment: "Dawn, and a father's rage",
      art: dawnAndAFathersRage,
      alt: "A linocut print of the stone gallery outside Juliet's chamber at daybreak. On the right, through two open arches, streaks of red dawn light are laced through the clouds over misty hills, and the dark crown of a pomegranate tree rises from the garden below. Juliet, a girl cut in white with long dark hair, kneels in front of the arches with her hands pressed together, looking up at her father. Old Capulet, white-bearded, in a cap and a long gown, stands over her and leans towards her with both hands on his hips; the front of his face is edged in red. Behind him the Nurse, a broad old woman in a white coif and apron, presses her hands together. On the far left, by the door into the house, Lady Capulet stands apart in her gown and veil with her hands folded.",
      quote: 'Hang thee young baggage, disobedient wretch!',
      quoteAt: 'top-left',
    },
    {
      moment: "The Friar's plan",
      art: theFriarsPlan,
      alt: "A linocut print of Friar Lawrence's cell by day, with herbs drying from the beam, jars on a shelf, a basket of herbs on the floor and the lamp on the table unlit. Juliet, a girl cut in white with long dark hair, reaches out with both open hands. Facing her, Friar Lawrence, an old friar with a tonsure, in his habit with the hood down and a knotted cord, holds up a small stoppered vial, black against the pale sky in the arched window, where the wall and tower of Verona stand dark. Her cheek is printed red.",
      quote: 'Thou shalt continue two and forty hours',
      quoteAt: 'top-right',
    },
    {
      moment: 'Juliet drinks the potion',
      art: julietDrinksThePotion,
      alt: "A linocut print of Juliet's chamber at night. Juliet, a girl cut in white with long dark hair, sits alone on the edge of her curtained four-poster bed, one hand on her breast, holding a small stoppered vial up high in the other and looking up at it. Beside her a candle burns on a tall stand, its flame printed red and its light cut in rays across the wall. On the left, stars shine in a dark arched window, and a white gown, the dress chosen for her wedding, lies over a chest. Her cheek is printed red.",
      quote: 'My dismal scene I needs must act alone.',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Wedding turned to funeral',
      art: weddingTurnedToFuneral,
      alt: "A linocut print of Juliet's chamber in Capulet's house early in the morning, lit by a window of pale daylight. On the right stands a curtained bed with its side curtain drawn shut, so that nobody on it can be seen; a garland of bridal flowers, printed red, hangs along its canopy, and a white coverlet hangs below the curtain. Lady Capulet, in a gown and veil, kneels at the bedside with one hand on the coverlet and the other at her face. At the foot of the bed the Nurse, an old woman in a white coif and an apron, flings both hands up with the fingers spread. In the middle Capulet, old and white-bearded, in his cap and long gown, stands with his head bowed and his hand over his eyes. On the left, in the bright doorway, is the wedding party: Friar Lawrence, an old friar with a white tonsure and a knotted cord, his hands folded in his sleeves; Paris, a young man in a bonnet and a short cloak, with his hand at his heart; and behind them two musicians, one playing a pipe and one holding a fiddle.",
      quote: 'Death lies on her like an untimely frost',
      quoteAt: 'top-left',
    },
    {
      moment: 'News in Mantua',
      art: newsInMantua,
      alt: "A linocut print of a street in Mantua on a bright day, the sun printed red in a pale sky scored with its rays. On the left a tired post-horse stands with its head hung low. In front of it Balthasar, a young servant in riding boots and a short cloak, bows his head, holding his cap to his chest in one hand and holding out the other, open. Facing him in the middle, Romeo, a young man with curly hair, in a doublet and short cloak with a sword at his side, has flung his head back to glare up at the sky, both fists clenched at his sides; his face is cut pale. Behind them runs a row of house fronts with arcades and a bell tower. On the right is the Apothecary's shop, its lower shutter barred; through the open window above, a stuffed alligator hangs from the beam, with a tortoise shell, a dried fish and a shelf of empty boxes.",
      quote: 'Then I defy you, stars!',
      quoteAt: 'top-right',
    },
    {
      moment: 'The letter that never went',
      art: theLetterThatNeverWent,
      alt: "A linocut print of Friar Lawrence's cell at night: stone walls, bundles of herbs drying from a beam, a shelf of jars, a basket of herbs, and an arched window where a crescent moon and stars shine over the wall and tower of Verona. On the right a lamp burns on the table, its flame printed red. In the middle Friar John, a friar with his hood up, bows his head and holds out a folded letter whose seal, printed red, is still unbroken. Facing him, Friar Lawrence, an old friar with a white tonsure, in a habit with the hood down and a knotted cord, starts back from the letter with one hand thrown up and its fingers spread.",
      quote: 'Unhappy fortune!',
      quoteAt: 'top-right',
    },
    {
      moment: 'The tomb',
      art: theTomb,
      alt: "A linocut print of a churchyard at night under a starry sky, seen from outside the Capulets' monument. On the right stands the monument, a stone house for the dead with a gabled roof. Its door has been broken open and hangs crooked, and inside, the vault is bright with the light of a torch whose flame is printed red; nobody can be seen within. The light falls out down the steps, where flowers lie strewn, and onto the ground below, where two swords and a mattock lie abandoned. In the middle, under a dark yew tree, Balthasar, a young servant in a cap and riding boots, stands and points straight at the monument's door. On the left, among the graves, Friar Lawrence, an old friar with a white tonsure, comes stooping in with a lantern held out before him, its flame printed red, and an iron crowbar and a spade over his shoulder.",
      quote: 'Thus with a kiss I die.',
      quoteAt: 'top-left',
    },
    {
      moment: 'A glooming peace',
      art: aGloomingPeace,
      alt: "A linocut print of the same churchyard at dawn, under a heavy grey sky with no sun in it. On the right stands the Capulets' monument, its broken door open on the dark, where a small torch still burns, its flame printed red; nobody can be seen inside. In front of it the Prince, with a short dark beard and a circlet printed red, holds a letter in one hand and holds out the other to the two old men in the middle, Capulet, white-bearded, in his cap, and Montague, white-haired, who clasp each other's hand with their heads bowed. Behind Capulet stand Lady Capulet, veiled, her head bowed and her hands clasped; Friar Lawrence, his head bowed and his hands in his sleeves; and Balthasar, holding his cap to his chest. On the left is the dark yew tree and a few graves.",
      quote: 'See what a scourge is laid upon your hate',
      quoteAt: 'top-left',
    },
  ],
  portraits: PORTRAITS,
}
