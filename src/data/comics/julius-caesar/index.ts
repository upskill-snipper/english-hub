/**
 * Julius Caesar in linocut: the panels for its key moments and the portraits
 * of its people as the play describes them.
 *
 * An edition is held in src/data/full-texts/julius-caesar.ts (Project
 * Gutenberg #1522), so every quotation on the art is copied from it, word for
 * word, and the comics test checks it there. A quotation may not run across a
 * paragraph break, and a verse line break is a space, never " / ". Quote from
 * the edition only, never from the guide's paraphrase or from memory.
 *
 * THIS PLAY NEEDS PARTICULAR CARE. It is a play about a killing, and many of
 * its readers are children. In short:
 * - The assassination (3.1) is suggested, never shown: no dagger in or
 *   touching Caesar, no wound, no blood. Brutus's call to bathe their hands in
 *   Caesar's blood is left to the words; never red hands or a bloodied body.
 *   Draw the conspirators closing round him, the faces, the mantle, or the
 *   empty Capitol after.
 * - Cinna the poet's death (3.3), Portia's death, and the deaths of Cassius
 *   and Brutus (Act 5) happen off the page: the mob turning, the letter, the
 *   battlefield, the faces of those who find them; never a body, and never a
 *   blade at the moment.
 * - Portia's wound in the thigh (2.1) is self-inflicted: it is left to the
 *   words, never drawn or pointed at.
 * - Caesar's ghost is never gory: a pale figure at the tent is enough.
 * - The crowd is a crowd of ordinary Romans, working men and women in their
 *   holiday clothes, never a caricature.
 *
 * The people are cut once, in ./panels/people.tsx, and every panel draws the
 * recurring characters from there, so a student meets the same Caesar, the
 * same Brutus and the same Cassius in every panel. Its docblock sets out what
 * the play says each of them looks like, and where it says it.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs julius-caesar --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { theTribunesScoldTheCrowd } from './panels/the-tribunes-scold-the-crowd'
import { bewareTheIdesOfMarch } from './panels/beware-the-ides-of-march'
import { cassiusWorksOnBrutus } from './panels/cassius-works-on-brutus'
import { aNightOfStormsAndPortents } from './panels/a-night-of-storms-and-portents'
import { brutusDecidesInTheOrchard } from './panels/brutus-decides-in-the-orchard'
import { calpurniasDream } from './panels/calpurnias-dream'
import { theAssassination } from './panels/the-assassination'
import { antonyAloneWithTheBody } from './panels/antony-alone-with-the-body'
import { twoSpeechesInTheForum } from './panels/two-speeches-in-the-forum'
import { cinnaThePoet } from './panels/cinna-the-poet'
import { proscriptionList } from './panels/the-proscription-list'
import { quarrelGriefGhost } from './panels/quarrel-grief-and-a-ghost'
import { wordsBeforeBlows } from './panels/words-before-blows-at-philippi'
import { cassiussMistake } from './panels/cassiuss-mistake'
import { noblestRoman } from './panels/the-noblest-roman'
import { PORTRAITS } from './portraits'

export const comics: ComicSet = {
  slug: 'julius-caesar',
  panels: [
    {
      moment: 'The tribunes scold the crowd',
      art: theTribunesScoldTheCrowd,
      alt: "A linocut print of a sunlit street in Rome on a holiday. In the middle, before the columns of a temple, a white stone statue of Caesar in a toga and a laurel wreath stands on a plinth, with a scarf printed in red swagged across the plinth and knotted at its corners. On the left, the two tribunes in togas face the crowd: Marullus, in front, frowns and calls out, pointing at them; behind him, older Flavius frowns and holds out an open hand to send them home. On the right stands the throng of working Romans in belted tunics and caps: in front, a grinning cobbler spreads an open hand, and the carpenter beside him looks down, a bunch of red flowers held to his chest; a woman behind them and a young man at the back hold up red flowers. More red flowers lie strewn on the paving in Caesar's way.",
      quote: 'You blocks, you stones, you worse than senseless things!',
      quoteAt: 'top-left',
    },
    {
      moment: 'Beware the Ides of March',
      art: bewareTheIdesOfMarch,
      alt: 'A linocut print of a sunlit public place in Rome on the feast day, with the Capitol on its hill far behind the houses. On the left, in front of a crowd holding up red flowers, stands the Soothsayer, an old man with a long white beard in a plain robe, one finger raised before him in warning. Lean Cassius stands behind him with a hand on his shoulder, having brought him out of the crowd. Across an open space where red flowers lie strewn on the paving, Caesar, in a toga and a laurel wreath, walks on to the right, but turns his head back to the Soothsayer, frowning, and brushes him aside with a low open hand. On the right his train has turned to watch: Antony, dressed for the race in a short tunic, arms and legs bare, a hand on his hip; Caesar’s wife Calpurnia, her mantle drawn over her head; Brutus, his arms folded; and bearded Casca.',
      quote: 'He is a dreamer; let us leave him. Pass.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Cassius works on Brutus',
      art: cassiusWorksOnBrutus,
      alt: 'A linocut print of the same sunlit public place, emptied of the crowd, with the Capitol on its hill behind the houses on the left. On the right, before the dark porch of a temple, a white stone statue of Caesar in a toga and a laurel wreath, larger than life on its plinth, towers over everything, its head as high as the temple roof; a scarf printed in red is swagged across the plinth. In the foreground on the left, two men in togas stand face to face. Brutus stands with his arms folded across his chest, his head bowed and his eyes down. Facing him, lean Cassius leans in close and points back over his shoulder, up at the towering statue.',
      quote: 'For who so firm that cannot be seduc’d?',
      quoteAt: 'top-left',
    },
    {
      moment: 'A night of storms and portents',
      art: aNightOfStormsAndPortents,
      alt: 'A linocut print of a street in Rome at night in a thunderstorm. A great fork of lightning, cut in white, strikes down on the right, and its flash lights the storm clouds, the wet paving and the columns of a temple at the right edge. Balls of fire printed in red streak down aslant through the dark sky, trailing long flaming tails and sparks. On the left, in front of dark house fronts, bearded Casca stares up at the sky with his mouth open, his short sword still drawn and held low, its point to the ground, his free hand spread. In the middle, lean Cassius stands facing the lightning, ungirt, his tunic pulled open on his bare chest, his arms spread wide and his head thrown back.',
      quote: 'Either there is a civil strife in heaven',
      quoteAt: 'top-left',
    },
    {
      moment: 'Brutus decides in the orchard',
      art: brutusDecidesInTheOrchard,
      alt: "A linocut print of Brutus's orchard at night, before dawn, under a starry sky, with grey streaks of the coming morning low in the clouds on the right, and one ball of fire printed in red streaking across the sky. On the left is Brutus's house, its door open on a taper burning red on its stand within, and on the threshold his servant boy Lucius sits asleep, his head on his knees. A dark fruit tree stands beside the house and another at the far right, before the orchard wall. In the middle, Brutus, risen from his bed in a loose robe and mantle, faces lean Cassius and holds up an open hand to stop him; Cassius leans in, frowning, urging him with a low open hand. On the right, four more conspirators stand together, their broad hats pulled down to their eyes and their cloaks drawn up over their faces; one has turned to look at the grey in the east.",
      quote: 'Let us be sacrificers, but not butchers, Caius.',
      quoteAt: 'top-right',
    },
    {
      moment: "Calpurnia's dream and Decius's flattery",
      art: calpurniasDream,
      alt: "A linocut print of a dark room in Caesar's house on a stormy morning. On the left, Calphurnia, Caesar's wife, in a long gown with a mantle drawn over her head, kneels at his side and holds up both hands to him. Caesar, in his nightgown with a mantle hanging from his shoulders and a laurel wreath on his head, has turned from her and holds out an open hand to Decius, a man in a toga who stands on the right, leaning towards him, smiling and pointing at a window between them. Through the window, under a dark bank of storm cloud and its slanting rain, a white stone statue of Caesar stands on its plinth in the street, and the low morning sun, printed in red, breaks through the cloud beside it. On the far right is a dark doorway.",
      quote: 'Your wisdom is consum’d in confidence.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The assassination',
      art: theAssassination,
      alt: "A linocut print of the Senate hall in the Capitol on the morning of the Ides, just before Caesar is killed; the killing is not shown and no dagger is drawn. In the middle, Caesar, in a toga and a laurel wreath, stands before his folding seat and holds out his hand to Brutus, who kneels on one knee with his lips to it. Behind Brutus, Metellus Cimber kneels with both hands held up, and lean Cassius is bowed low to the floor. Decius on the left and Cinna on the right lean in towards Caesar with open hands, and close behind Caesar stands Casca, bearded and frowning, his hand hidden in the fold of his toga. Above them, Pompey's statue in white stone stands on a high base in a dark niche. On the left, Senators sit on their benches, and through an open door the morning sun, printed in red, shines over the street.",
      quote: 'Et tu, Brute?',
      quoteAt: 'top-left',
    },
    {
      moment: 'Antony alone with the body',
      art: antonyAloneWithTheBody,
      alt: "A linocut print of the Senate hall after the murder, empty but for Mark Antony. Caesar's body lies at Antony's feet below the bottom of the picture and is not shown. Antony, a young man with thick curling hair, in a toga, stands large in the foreground on the left and points across the hall. Behind him the Senators' benches are empty, and Caesar's folding seat stands empty before Pompey's white statue in its dark niche. Across the floor three hounds printed in red, in collars, the ends of their slipped leashes trailing, run at full stretch away from him and out through a great open door on the right, into the daylight over the roofs of Rome.",
      quote: 'Cry havoc and let slip the dogs of war',
      quoteAt: 'top-left',
    },
    {
      moment: 'Two speeches in the Forum',
      art: twoSpeechesInTheForum,
      alt: "A linocut print of the Forum in Rome by day, an open square with a temple and house fronts. On the left, Mark Antony, a young man with thick curling hair, in a toga, stands in a raised stone pulpit and holds up an unrolled parchment, Caesar's will, with a round seal printed in red hanging from it; his other hand is open towards the crowd. Before the pulpit, Caesar's coffin, shut, with a gabled lid, rests on its bier. On the right a crowd of ordinary Romans, men in belted tunics, some in caps, and women with mantles over their heads, stand packed together looking up at him: in front, a man in a cap points up at the parchment and calls out, an old bald man bows his head into his hand, and a woman holds her hands together at her breast.",
      quote: 'But here’s a parchment with the seal of Caesar',
      quoteAt: 'top-right',
    },
    {
      moment: 'Cinna the poet',
      art: cinnaThePoet,
      alt: "A linocut print of a street in Rome on the afternoon of Caesar's funeral, with plumes of black smoke rising from behind the roofs and leaning on the wind. Left of centre, Cinna the poet, in a toga, with a fringe of hair over his brow, holds one hand to his breast and the other open before him, his mouth open as he protests. Working men in belted tunics stand round him: one with a beard and a cap points at him from behind, and one in front points at his face, calling out. Beside them a man in a cap holds a burning firebrand high, its flame printed in red. On the right one man has turned away and points up the street, and another follows him with a second firebrand. No one touches Cinna.",
      quote: 'I am Cinna the poet, I am Cinna the poet.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The proscription list',
      art: proscriptionList,
      alt: "A linocut print of a plain room in Antony's house, lit by a high window on the right. Three men in togas sit in a row behind a long table covered by a dark cloth that falls to the floor. On the left Lepidus, slight and balding, sits with his head bowed and his hand on the table. Next to him the young Octavius points down at a list of names unrolled across the table. On the right Antony, with thick curling hair, turns towards them and leans over the list, a pen in one hand and the other spread on the table. The list hangs down over the front of the table in rows of writing, with a column of spots printed in red down its edge, one against nearly every name, and a new spot at the point of Antony's pen.",
      quote: 'These many then shall die; their names are prick’d.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Quarrel, grief and a ghost',
      art: quarrelGriefGhost,
      alt: "A linocut print of the inside of Brutus's tent at night, its canvas walls hanging in folds, lit only by a taper on a tall stand whose small flame, printed in red, burns crooked. On the left, the boy Lucius sleeps where he sat, slumped over a wooden chest with his head bowed, and a small lyre is set down against the chest. In the middle Brutus, in a long gown with a mantle and a book in one hand, has risen and starts back, holding up his other hand, open, towards the door of the tent. In the doorway on the right, its flaps tied back on the dark night, stands the Ghost of Caesar: a pale figure in a toga and a laurel wreath, looking at him.",
      quote: 'Thy evil spirit, Brutus.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Words before blows at Philippi',
      art: wordsBeforeBlows,
      alt: "A linocut print of the plains of Philippi on a pale morning. On the left, in front of a low hill, Brutus and Cassius's army stands in two ranks of helmeted soldiers with tall shields and upright spears, and a banner printed in red hangs from a crossbar on a tall pole above them. Black birds, ravens and crows and kites with forked tails, fly across the sky over their heads. In the foreground, Brutus on the left and lean Cassius on the right, both bareheaded, in armour and cloaks, face each other and clasp hands. Far off on the right, across the empty plain, the enemy's army waits in a line under its standards.",
      quote: 'For ever, and for ever, farewell, Cassius.',
      quoteAt: 'bottom-right',
    },
    {
      moment: "Cassius's mistake",
      art: cassiussMistake,
      alt: "A linocut print of a hillside at Philippi in the afternoon. In the foreground on the left lean Cassius, bareheaded in armour and a cloak, holds a standard on a tall pole and looks up the slope. At the top of the hill above him, Pindarus, in a plain tunic, points down and out across the plain. Out on the plain at the foot of the hill, Cassius's tents are burning, their flames printed in red, and black smoke rolls up from them and blows back over the hill. Far off on the plain to the right, horsemen gallop in from both sides towards one rider in the middle.",
      quote: 'Titinius is enclosed round about With horsemen, that make to him on the spur',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The noblest Roman',
      art: noblestRoman,
      alt: 'A linocut print of the battlefield at night, with a large craggy rock in the foreground on the left. On the right, three helmeted soldiers hold up burning torches, their flames printed in red, and the torchlight falls on the dark ground. In front of the soldiers Antony, with thick curling hair, bareheaded in armour and a cloak, bows his head and holds one open hand out, low, towards the rock, and beside him the young Octavius bows his head too. On the left, beyond the rock, Strato stands alone with his head bowed and his hands at his sides.',
      quote: 'This was the noblest Roman of them all.',
      quoteAt: 'top-left',
    },
  ],
  portraits: PORTRAITS,
}
