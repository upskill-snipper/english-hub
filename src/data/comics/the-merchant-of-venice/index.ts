/**
 * The Merchant of Venice in linocut: the panels for its key moments and the
 * portraits of its people as the play describes them.
 *
 * An edition is held in src/data/full-texts/the-merchant-of-venice.ts (Project
 * Gutenberg #1515), so every quotation on the art is copied from it, word for
 * word, and the comics test checks it there. A quotation may not run across a
 * paragraph break, and a verse line break is a space, never " / ".
 *
 * THIS PLAY NEEDS PARTICULAR CARE. Its characters speak antisemitism and
 * racism, and the art never adopts it. Shylock is drawn as an individual with
 * dignity: no caricatured nose, no hunched or grasping posture, no clutching
 * of money, no devil or animal imagery, whatever other characters call him.
 * Nobody is drawn spitting on him or striking him; his own words carry it. No
 * slur or line of abuse is ever a panel's quotation. The Prince of Morocco is
 * drawn with the dignity of every suitor, and Portia's line on his
 * complexion is never a caption. At the trial the knife and scales may be
 * shown, never touching or near Antonio's body, and Shylock's forced
 * conversion is drawn with gravity. The rules in full are in the docblock of
 * ./panels/people.tsx, which every artist on this text reads first.
 *
 * The people are cut once, in ./panels/people.tsx, and every panel draws the
 * recurring characters from there, so a student meets the same Shylock, the
 * same Antonio and the same Portia in every panel. Belmont's casket room, the
 * three caskets and the curtain they stand behind are cut once in
 * ./panels/belmont.tsx, and Antonio's argosies in ./panels/venice.tsx.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs the-merchant-of-venice --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'
import { antoniosSadness } from './panels/antonios-sadness'
import { portiaAndHerFathersWill } from './panels/portia-and-her-fathers-will'
import { theMerryBond } from './panels/the-merry-bond'
import { jessicaLeavesHerFather } from './panels/jessica-leaves-her-father'
import { moroccoChoosesGold } from './panels/morocco-chooses-gold'
import { myDaughterMyDucats } from './panels/my-daughter-my-ducats'
import { arragonChoosesSilver } from './panels/arragon-chooses-silver'
import { hathNotAJewEyes } from './panels/hath-not-a-jew-eyes'
import { leadAndALetter } from './panels/lead-and-a-letter'
import { illHaveMyBond } from './panels/ill-have-my-bond'
import { portiasPlan } from './panels/portias-plan'
import { theTrialMercyRefused } from './panels/the-trial-mercy-refused'
import { theTrialTheReversal } from './panels/the-trial-the-reversal'
import { theRingsGivenAway } from './panels/the-rings-given-away'
import { inSuchANight } from './panels/in-such-a-night'
import { theRingQuarrel } from './panels/the-ring-quarrel'

export const comics: ComicSet = {
  slug: 'the-merchant-of-venice',
  panels: [
    {
      moment: "Antonio's sadness",
      art: antoniosSadness,
      alt: 'A linocut print of a street on the Venice waterfront on a clear morning. On the left, beside the stone parapet of the quay, Antonio the merchant, in a knee-length gown and a round cap, stands with his head bowed and his eyes down, one hand laid on his breast. His friend Salarino, in a round cap, turns to him and points out to sea, where three great merchant ships ride on the horizon, their full sails printed in red. Beside them Solanio, bareheaded and bearded, turns the other way and holds out an open hand towards three young men coming along the quay from the houses on the right: Bassanio in front, bareheaded, in a short cloak with a sword at his side, holding out his hand in greeting, then Gratiano in a cap with a feather, then Lorenzo in a flat bonnet.',
      quote: 'In sooth I know not why I am so sad',
      quoteAt: 'top-left',
    },
    {
      moment: "Portia and her father's will",
      art: portiaAndHerFathersWill,
      alt: "A linocut print of a room in Portia's house at Belmont by day, with a floor of dark and pale marble squares. On the left, a tall arched window looks out on the gardens, with a clipped hedge and two cypress trees. Portia, small, her fair hair falling at her temples and down her back, stands with her head bowed and her eyes down, one hand laid on her breast. In the middle, in an arched alcove, a curtain printed in red is half drawn back, and in the gap three caskets stand on a table: on the left a gold one, cut bright white with glints round it, in the middle a grey silver one, on the right a plain dark lead one. On the far side of them Nerissa, her waiting-woman, in a linen cap, turns to Portia and holds out an open hand towards the caskets.",
      quote: 'a living daughter curb’d by the will of a dead father',
      quoteAt: 'top-right',
    },
    {
      moment: 'The merry bond',
      art: theMerryBond,
      alt: 'A linocut print of a paved square in Venice by day, with house fronts all round it and a round stone well-head on the left. Shylock, an old man with a full grey beard and grey hair, in a plain long gaberdine to his ankles, stands upright and holds out an open hand to Antonio as he offers the loan. Antonio, clean-shaven, in a knee-length gown and a cap, faces him with his chin up and a hand laid on his breast, giving his word. Behind Antonio, Bassanio, a young man in a short cloak with a sword at his side, steps up and lays a hand on his shoulder to hold him back. On the right, through an arch, a merchant ship with its sails printed in red rides on the water.',
      quote: 'I would be friends with you, and have your love',
      quoteAt: 'top-left',
    },
    {
      moment: 'Jessica leaves her father',
      art: jessicaLeavesHerFather,
      alt: "A linocut print of a street in Venice at night, under a dark sky with a few stars, a row of dark houses on the far side. On the right is Shylock's house, its stone front lit by a torch, its door shut and one of its two upper windows shuttered. From the other, open window, lit from within, Jessica, dressed as a boy in a doublet and a small cap, leans out with both arms held out, and a small casket is in the air, thrown from her hands. Below in the street, Lorenzo, in a flat bonnet, looks up at her with both hands raised open to catch it. Under the roof over the door stand two masked young men in visors, Gratiano and Salarino, and Salarino holds up a torch whose flame is printed in red.",
      quote: 'I have a father, you a daughter, lost.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Morocco chooses gold',
      art: moroccoChoosesGold,
      alt: "A linocut print of the same room in Portia's house at Belmont, with its tall window on the gardens and its floor of dark and pale marble squares. In the arched alcove on the right the red curtain is drawn right back, and the three caskets stand on their table: the gold one on the left stands open, its lid thrown back, with a small plain skull lying inside it; the grey silver one and the dark lead one are shut. In the middle the Prince of Morocco, tall and upright, dressed all in white as the play describes him, with a plain circlet on his head and a curved scimitar at his side, bows his head over a scroll he holds open before him in both hands, reading it. Behind him on the left stands one of his followers, also in white. On the far right Portia, small, with her fair hair falling down her back, stands still with her hands before her, watching him.",
      quote: 'All that glisters is not gold',
      quoteAt: 'top-left',
    },
    {
      moment: 'My daughter, my ducats',
      art: myDaughterMyDucats,
      alt: "A linocut print of a street beside a canal in Venice by day. On the left stands Shylock's house, dark stone, its door shut fast under a small sloping roof. Above the door a window stands open on an empty, dark room, one shutter swung back, and its curtain, printed in red, blows out of the window. Two young gentlemen stand on the paved walk and look up at it: Solanio, bareheaded, with a short beard, points up at the empty window, and beside him Salarino, in a round cap and a short cloak, lays his hand on his heart. Behind them, across the canal, runs a row of tall pale houses with pointed windows and chimneys shaped like funnels, and on the right an empty gondola lies moored at a striped post.",
      quote: 'My daughter! O my ducats! O my daughter!',
      quoteAt: 'top-right',
    },
    {
      moment: 'Arragon chooses silver',
      art: arragonChoosesSilver,
      alt: "A linocut print of the casket room in Portia's house at Belmont by day, with a floor of dark and pale marble squares and a tall arched window on the gardens on the left. In the middle, in an arched alcove, the curtain, printed in red, is drawn right back from three caskets on a table: on the left a gold one, cut bright white, in the middle a grey silver one, standing open with its lid thrown back, and on the right a plain dark lead one. On the left Portia, small, her fair hair falling at her temples and down her back, stands still with her hands at her sides and watches, with Nerissa, her waiting-woman, in a linen cap, beside her. On the right the Prince of Arragon, in a plain circlet, a long cloak and a sword, holds up before him in both hands a small framed picture from the silver casket and stares at it: the painted head of a grinning fool in a fool's cap of three points hung with bells, one eye shut in a wink, holding up a scroll.",
      quote: 'The portrait of a blinking idiot',
      quoteAt: 'top-right',
    },
    {
      moment: 'Hath not a Jew eyes?',
      art: hathNotAJewEyes,
      alt: 'A linocut print of a street beside a canal in Venice by day, with a row of tall pale houses across the water and the sun, printed in red, high in the sky above the gap between the people below. On the left two young gentlemen face right: Solanio, bareheaded, with a short beard, stands with one hand on his hip, and Salarino, in a round cap and a short cloak, holds out an open hand as he asks a question. Across the street, facing them, stands Shylock, an old man with a grey beard and grey hair, upright and bareheaded in a long plain coat tied with a sash, as tall as they are. He lays one open hand on his own breast and holds the other out open towards them as he answers.',
      quote: 'Hath not a Jew eyes?',
      quoteAt: 'top-right',
    },
    {
      moment: 'Lead, and a letter',
      art: leadAndALetter,
      alt: "A linocut print of the casket room in Portia's house at Belmont, with a tall arched window on the gardens on the left and a floor of dark and pale marble squares. In the middle, in an arched alcove, the curtain, printed in red, is drawn right back from three caskets on a table: a gold one, cut bright white, and a grey silver one stand shut, and the plain dark lead one on the right stands open, with a small framed portrait of Portia, her fair hair falling down her back, propped up inside it. On the left Bassanio, bareheaded, in a short cloak with a sword at his side, bows his head over a letter he holds open in both hands. Portia, small and fair-haired, faces him, watching his face, and holds out an open hand towards the letter. On the right, across the room, Salerio, in a travelling hat with a wide brim and a cloak, holds out his hand towards Bassanio, and behind him stand Lorenzo, in a flat bonnet, and Jessica, her long dark hair loose.",
      quote: 'The world is still deceiv’d with ornament.',
      quoteAt: 'top-right',
    },
    {
      moment: "I'll have my bond",
      art: illHaveMyBond,
      alt: "A linocut print of a street beside a canal in Venice by day, with a row of tall pale houses across the water. On the left three men face right. At the back stands Salarino, in a round cap and a short cloak. In the middle is the gaoler, in a plain jerkin and a steel cap with a sloping brim, a ring of keys at his belt. In front, Antonio, in a merchant's knee-length gown and a round cap, his head a little bowed, holds out an open hand, pleading. On the right, some way off, Shylock, an old man with a grey beard and grey hair in a long plain coat tied with a sash, has turned his back on them and faces away to the right, towards a small bridge over a side canal. He holds before him a folded deed, the bond, and its seal, printed in red, hangs from it on a cord.",
      quote: 'I’ll have my bond, speak not against my bond.',
      quoteAt: 'top-right',
    },
    {
      moment: "Portia's plan",
      art: portiasPlan,
      alt: "A linocut print of a room in Portia's house at Belmont by day, with a floor of black and white marble squares. On the right a tall arched window looks out over the garden hedge to a closed coach with one horse, standing ready between two cypresses. In the middle Portia, small, her fair hair falling to her shoulders, turns to Nerissa, who wears a linen coif, and holds out an open hand to her as she tells her plan; Nerissa listens with a hand on her breast. On the left a table holds a sheet of paper, an inkstand and a quill, and beyond it Portia's servant Balthazar, in a brimmed hat and a short cloak, strides out through an open arched doorway carrying a letter, its seal printed in red.",
      quote: 'When we are both accoutered like young men',
      quoteAt: 'top-left',
    },
    {
      moment: 'The trial: mercy refused',
      art: theTrialMercyRefused,
      alt: "A linocut print of a court of justice in Venice by day, lit by two high arched windows. At the back, raised above the court under a canopy, the Duke sits behind a panelled bench in a stiff cap that rises to a horn at the back, and three Magnificoes in round caps sit on a raised bench on each side of him. On the floor at the left stand Gratiano, in a feathered cap, Bassanio, who reaches a hand to his friend's shoulder, and Antonio, in a soft round cap and a gown to the knee, his head bowed and his hands folded. In the middle Portia, disguised as a young doctor of law in a long dark robe and a square cap, her fair hair tucked up under it, holds out an open hand to Shylock as she pleads for mercy. Facing her, Shylock, an old man with a full grey beard and grey hair, in a long plain coat tied with a sash, stands upright and holds out the bond, a written sheet whose seal is printed in red. At the far right Nerissa, disguised as the clerk, a slight beardless youth, holds a letter.",
      quote: 'The quality of mercy is not strain’d,',
      quoteAt: 'top-left',
    },
    {
      moment: 'The trial: the reversal',
      art: theTrialTheReversal,
      alt: 'A linocut print of the same court of justice in Venice by day. The Duke leans forward in his seat under the canopy, and the Magnificoes watch from their raised benches on either side. At the left Gratiano leans forward to hear, beside Bassanio and Antonio, who stands fully clothed among his friends, far from the knife. In the middle Portia, disguised as the young doctor of law in a long robe and a square cap, holds up an open hand to stop Shylock, and in her other hand holds the bond, its seal printed in red. Facing her, Shylock, the old man with a grey beard in a long plain coat, has stopped where he stands with his head drawn back, a knife held low at his side and pointing at the floor. Behind him an empty pair of scales stands ready on a stand. At the far right Nerissa, disguised as the clerk, holds a letter.',
      quote: 'Tarry a little, there is something else.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The rings given away',
      art: theRingsGivenAway,
      alt: "A linocut print of the same court of justice in Venice after the trial: the Duke's chair under its canopy and the Magnificoes' benches stand empty. At the left Gratiano, in a feathered cap, and Antonio, in a soft round cap and a gown to the knee, look on. In the middle Bassanio, bareheaded, with a short cloak and a sword, draws his hand back and up, away from the young doctor; on one finger of it is a ring, printed in red, with light glinting round it. Facing him Portia, still disguised as the doctor of law in a long robe and a square cap, holds out her open hand for the ring, a pair of gloves hanging from her other hand. Behind her Nerissa, still disguised as the clerk, holds a paper.",
      quote: 'There’s more depends on this than on the value.',
      quoteAt: 'top-left',
    },
    {
      moment: 'In such a night',
      art: inSuchANight,
      alt: "A linocut print of the avenue to Portia's house at Belmont at night. A full moon shines in a sky thick with stars, some of them cut as small round discs. In the foreground on the left Lorenzo, in a flat bonnet, and Jessica, her long dark hair down her back, sit on a grassy bank that lies pale in the moonlight, their faces turned up to the moon; Lorenzo leans back on one hand, and Jessica, just in front of him, has her hands in her lap. Two rows of tall dark cypresses run back along a pale walk to the house at its end, where one window of the hall is lit, printed in red, with its beams cut round it. Far up the walk two small figures, Portia, whose fair hair shows even at that distance, and Nerissa, walk home towards the light.",
      quote: 'How sweet the moonlight sleeps upon this bank!',
      quoteAt: 'top-right',
    },
    {
      moment: 'The ring quarrel',
      art: theRingQuarrel,
      alt: "A linocut print of the avenue to Portia's house at Belmont at night, under a full moon and a sky of stars. Two rows of tall dark cypresses run back to the house at the end of the avenue, where one window of the hall is lit by a candle, printed in red, with its beams cut round it. In the middle of the avenue Antonio, a clean-shaven merchant in a brimmed cap and a gown to the knee, holds up a small ring in his fingers towards Bassanio; the ring is printed in red and shines with cut rays. Bassanio, a young man with a short cloak and a sword, faces him with his head drawn back in astonishment and holds out an open hand to take it. Behind Antonio, Portia, small, her fair hair cut in white and falling to her shoulders, holds her open hand out towards the ring, and Nerissa, in a linen coif, stands beside her with her hands before her. Behind Bassanio, Gratiano, in a small cap with a feather, watches. At the left, on a pale grassy bank in the moonlight, Jessica, with long dark hair, and Lorenzo, in a flat bonnet, look on.",
      quote: 'I once did lend my body for his wealth',
      quoteAt: 'top-right',
    },
  ],
  portraits: PORTRAITS,
}
