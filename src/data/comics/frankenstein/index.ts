/**
 * Frankenstein in linocut: the panels for its key moments and the portraits
 * of its people as Mary Shelley describes them.
 *
 * An edition is held in src/data/full-texts/frankenstein.ts (Project
 * Gutenberg #42324, the revised text of 1831), so every quotation on the art
 * is copied from it, word for word, and the comics test checks it there. A
 * quotation may not run across a paragraph break. Quote only the 1831 text:
 * where 1818 reads differently, the 1818 words are not in the held edition
 * and the test will fail them.
 *
 * THE CREATURE is drawn only as Shelley describes him (Chapter 5 and after):
 * gigantic stature, yellow skin that scarcely covers the muscles and arteries,
 * lustrous flowing black hair, pearly white teeth, watery eyes almost the
 * colour of their sockets, a shrivelled complexion, straight black lips. Never
 * the film image: no flat-topped head, no bolts in the neck, no green skin, no
 * stitches across the forehead.
 *
 * DEATHS HAPPEN OFF THE PAGE. William is a child and is never shown with the
 * Creature at or near the moment of harm; Justine's execution, Clerval's death
 * and Elizabeth's murder are suggested (a window, an empty room, a figure
 * outside, the faces of those who find her), never shown, and there is no
 * body on a bed. The creation shows no corpses, body parts or dissecting-room
 * detail: the room, the candle, the Creature's eye opening, Victor's horror.
 *
 * The people recur from Walton's letters to his last entries, so their
 * figures are cut once, from the text's own descriptions, in
 * ./panels/people.tsx. Draw them from there, so a student meets the same
 * Victor, the same Walton and the same Creature in every panel.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs frankenstein --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { waltonSetsOut } from './panels/walton-sets-out'
import { theStrangerOnTheIce } from './panels/the-stranger-on-the-ice'
import { aGenevaChildhood } from './panels/a-geneva-childhood'
import { theSecretToil } from './panels/the-secret-toil'
import { theCreation } from './panels/the-creation'
import { williamsMurderAndJustinesTrial } from './panels/williams-murder-and-justines-trial'
import { theMeetingOnTheGlacier } from './panels/the-meeting-on-the-glacier'
import { learningToBeHuman } from './panels/learning-to-be-human'
import { threeBooksAndARejection } from './panels/three-books-and-a-rejection'
import { warOnHumankind } from './panels/war-on-humankind'
import { PORTRAITS } from './portraits'
import { theDemandForACompanion } from './panels/the-demand-for-a-companion'
import { theSecondCreationDestroyed } from './panels/the-second-creation-destroyed'
import { clervalsMurder } from './panels/clervals-murder'
import { theWeddingNight } from './panels/the-wedding-night'
import { thePursuitNorth } from './panels/the-pursuit-north'
import { creatureOverVictorsBody } from './panels/the-creature-over-victors-body'

export const comics: ComicSet = {
  slug: 'frankenstein',
  panels: [
    {
      moment: 'Walton sets out for the Pole',
      art: waltonSetsOut,
      alt: 'A linocut print of a sailing ship far to the north in summer, seen at its bow. On the left, the foremast carries a square sail bellying forward in the wind, and a jib fills out from the bowsprit. Robert Walton stands alone at the bow rail in a tall fur cap and a greatcoat with a fur collar, facing ahead. One hand rests on the rail; the other holds a letter, its lines of writing stirring in the wind. Ahead of him, on the right, the sun sits on the horizon, printed in red, ringed with light, and its path shines across a dark sea on which flat sheets of ice float past the ship.',
      quote: 'What can stop the determined heart and resolved will of man?',
      quoteAt: 'top-right',
    },
    {
      moment: 'The stranger on the ice',
      art: theStrangerOnTheIce,
      alt: "A linocut print of the side of a ship in the Arctic in the first light of morning. Behind, a plain of ice stretches to the horizon, broken at its near edge where it has parted from the open water, and loose masses of ice float on the dark sea. On the right, a large flat fragment of ice has drifted up to the ship. On it stands a low sledge, and in the sledge sits a thin, hunched man, rime white on his dark hair and shoulders, his face lifted towards the ship and one hand raised a little, open. In front of the sledge one dog stands in its harness. On the left, at the ship's rail, the master in a seaman's knitted cap leans out with his hand held open to the stranger; a sailor beside him, in the same cap, holds a lantern out over the side, its flame printed in red; and Robert Walton, in his fur cap and fur collar, looks down at the man. A rope hangs from the rail down to the ice.",
      quote: 'will you have the kindness to inform me whither you are bound?',
      quoteAt: 'top-right',
    },
    {
      moment: 'A Geneva childhood and a fatal subject',
      art: aGenevaChildhood,
      alt: 'A linocut print of a room in an inn on a wet day, under a low beamed ceiling. On the left, rain streams down the window over a lake and dark mountains, and a young girl with long fair hair, Elizabeth, kneels on the window seat with her back to the room, looking out at the storm. In the middle, Victor, a boy of thirteen, strides forward holding up an open book, its light cut in white rays all round it; on its right-hand page, the titlepage, the name AGRIPPA is printed in red. On the right, his father, an older man with grey hair tied at the nape, sits back in a high chair beside a fire printed in red, with his own paper open on his knee, and glances at the book from under a half-lowered eyelid.',
      quote: 'My dear Victor, do not waste your time upon this; it is sad trash.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The secret toil',
      art: theSecretToil,
      alt: 'A linocut print of a garret at night under a sloping roof. On the left, through a small window, the full moon looks in from a starry sky, a vine heavy with bunches of grapes hangs across the glass, and moonlight falls in pale streaks across the floorboards. With his back to the window, Victor, thin and gaunt, sits hunched on a stool at a long table, his eye wide, holding up a round glass flask to a candle whose flame is printed in red; the candlelight is cut white round the flame and pale on his cheek. On the table are papers of notes, a retort, flasks, a stand and a mortar. At the far right end, pushed aside under a heavy book, lie three letters, sealed and unopened, their seals printed in red.',
      quote: 'how dangerous is the acquirement of knowledge',
      quoteAt: 'top-right',
    },
    {
      moment: 'The creation, and the flight',
      art: theCreation,
      alt: 'A linocut print of the same garret at one in the morning, almost dark, with rain streaming down the black window on the left. On the floor in the middle a stub of candle in a dish is nearly burnt out, its small flame printed in red and its faint light cut round it. At its light, Victor stands recoiling: he leans back, his mouth open, one hand raised before his face with the fingers spread. At his feet, on the right, the Creature lies on the boards, far longer than a man, covered from the shoulders by a dark cloth that runs out of the picture. Only his head and one hand are seen: a pale face turned up in profile, well made, with long black hair spread beneath it, straight black lips, and an eye just opened, pale in its pale socket. His breath rises in three white puffs, and the spread fingers of his hand stir on the boards. Behind him, a table holds glass vessels and a retort.',
      quote: 'breathless horror and disgust filled my heart',
      quoteAt: 'top-right',
    },
    {
      moment: "William's murder and Justine's trial",
      art: williamsMurderAndJustinesTrial,
      alt: 'A linocut print of a gloomy prison cell of dressed stone. High in the back wall is a small barred window with the evening sky in it printed in red, and its light falls in a broad beam down across the cell. In the beam, by a heap of straw, Justine, in a black mourning dress with her dark hair bound in a knot at the nape, kneels with her face turned up, a tear on her cheek, and her hands held out together before her; her wrists are manacled, with a short chain hanging between the iron bands. Elizabeth, her long golden hair loose down her back, stands bending over her, weeping, and reaches down with both open hands to take hers and raise her. On the left is the heavy iron-bound door of the cell, shut. On the right, apart from them, Victor stands turned away into the dark corner, his head bowed and one hand pressed over his eyes.',
      quote: 'I almost began to think that I was the monster that he said I was',
      quoteAt: 'top-left',
    },
    {
      moment: 'The meeting on the glacier',
      art: theMeetingOnTheGlacier,
      alt: 'A linocut print of the sea of ice below Mont Blanc at noon. The broad snow dome of Mont Blanc rises on the right, a bank of cloud lies along the foot of dark mountains streaked with snow, and the sun, printed in red, stands high in a pale sky. The ice is cut in rolling ridges and deep dark rifts. On the left, Victor, a lean young man with dark hair to his collar, in a dark tailcoat, has stepped out from a recess in a black cliff of rock; one hand is still on the rock behind him, and he leans back with his other hand held up, open, the fingers spread, to keep off what is before him. Facing him across the ice stands the Creature, far taller than he is, in a long dark cloak: a pale face in profile under long black hair that falls past his shoulders, straight black lips and a pale eye. His head a little bowed, he holds one great open hand out low towards Victor.',
      quote: 'I ought to be thy Adam; but I am rather the fallen angel',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Learning to be human',
      art: learningToBeHuman,
      alt: "A linocut print of a cottage and the hovel built against it, at night, drawn cut away so that both are seen at once. On the left, in the low, dark hovel under a sloping roof of planks, with a crescent moon and stars outside, the Creature sits on the straw with his knees drawn up and an arm round them, his pale face in profile and his long black hair falling down his back, his eye pressed to a chink in the boarded-up window in the wall between, where a thin thread of light comes through onto his face. On the right is the cottage's one whitewashed room. At a table lit by a single taper, its flame printed in red, Felix, a slight young man, sits holding up an open book and reading from it to Safie, who sits across from him in a dark dress, her black hair braided round her head, one hand on the table, leaning in to follow. Beyond them, in front of the plank door, shut, in the back wall, Agatha, her fair hair in a plait down her back, sits on a stool with white needlework in her lap, turned to old De Lacey, who sits beside her in a high-backed chair in the corner by a small fire printed in red, his long silver hair falling to his collar and his eyes shut, playing a guitar on his knee.",
      quote: 'Was I then a monster, a blot upon the earth',
      quoteAt: 'top-left',
    },
    {
      moment: 'Three books and a rejection',
      art: threeBooksAndARejection,
      alt: "A linocut print of the same cottage and hovel on a sunny autumn day, cut away to show both. On the left the hovel is empty and open at its far end, and on its straw lie a leather portmanteau, three books and some loose written pages. In the whitewashed room a guitar leans against the wall, and blind old De Lacey, his long hair silver, sits in his chair with his face lifted in alarm. The Creature, in a dark cloak, kneels before him, so tall that even kneeling his pale face, in profile under long black hair, is above the old man's, and he holds the old man's hand in both of his. Behind them the door in the back wall stands wide open on the bright day. Felix, a slight young man, darts in through it with one arm stretched out towards the Creature's back and a stick held low behind him in his other hand. Beside the door Agatha, her fair hair in a plait, sways back against the wall in a faint, her head tipped back and one hand at her brow. Through the doorway Safie, in a dark dress, runs away across the field past a tree whose leaves are printed in red, and a few red leaves lie at the open end of the hovel. A small fire burns red in the hearth on the right.",
      quote: 'Do not you desert me in the hour of trial!',
      quoteAt: 'top-left',
    },
    {
      moment: 'War on humankind',
      art: warOnHumankind,
      alt: 'A linocut print of open country on a windy night. On the left the moon is half sunk behind the black line of the woods on the horizon, and torn clouds stream across the starry sky. In the foreground stands the Creature, gigantic, his long dark cloak and his long black hair blown out behind him on the wind, his pale face in profile turned to the right; he holds one arm high with a dry branch whose burning end is printed in red, and flings the other hand back. On the right the empty cottage, with its thatched roof, its chimney and the low hovel against its end, is wrapped in fire: forked tongues of flame, printed in red, rise from the brush heaped round its walls, up over its dark windows, and stream from its roof on the wind. Plants torn up from the wrecked garden lie scattered on the ground in front of it, and a pale pool lies beside it.',
      quote: 'I declared everlasting war against the species',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The demand for a companion',
      art: theDemandForACompanion,
      alt: 'A linocut print of the inside of a rough mountain hut at the end of the day, its walls of dry stone and its low roof on a heavy beam. In the middle a fire burns on a ring of hearth stones, its flames printed in red. On the left Victor, a lean young man with dark hair to his collar, in a dark coat and a white neckcloth, sits upright on a stone, drawn back, a hand gripping his knee, looking across the fire. On the right the Creature sits on a boulder, so tall that even seated his head is near the roof beam: a pale face in profile, long black hair flowing down his back, straight black lips, a dark cloak. He leans towards Victor and holds one great hand out to him across the fire, open, the fingers spread. Behind him, through the open doorway, dark mountain peaks stand above the pale sea of ice, and the setting sun, printed in red, sits low between them.',
      quote: 'if I cannot inspire love, I will cause fear',
      quoteAt: 'top-left',
    },
    {
      moment: 'The second creation destroyed',
      art: theSecondCreationDestroyed,
      alt: 'A linocut print of a bare stone room under a thatched roof at nightfall, with no candle lit. Jars stand on a shelf on the left. In the middle a bench holds only glass vessels: a round flask, a retort, a tall stoppered jar and a phial. Victor sits on a stool at the end of the bench, his face turned up to the right and his mouth open, one open hand thrown up before him. On the right, through an open casement, the moon is rising from a dark sea, with a thin line of red on the horizon where the sun has set, and its light falls in across the room. In the casement are the head and shoulders of the Creature, looking down into the room: a pale face in profile under long black hair, his lips drawn back in a grin that shows a row of white teeth.',
      quote: 'A ghastly grin wrinkled his lips as he gazed on me',
      quoteAt: 'top-left',
    },
    {
      moment: "Clerval's murder",
      art: clervalsMurder,
      alt: 'A linocut print of a bare prison room of stone blocks. High in the wall on the left is a small window barred with iron, the morning sun printed in red behind the bars, and its light falls in a slanting beam to the floor, where the shadows of the bars lie across it. Beside a plain wooden chair stands a stool with a medicine bottle and a cup on it. Victor sits in the chair, in a dark coat and a white neckcloth, and holds one open hand out towards the door. On the right a heavy door of planks, bound with iron straps and a great bolt, stands open on a lit passage, and his father, an older man with grey hair tied back at the nape, in a long greatcoat, has just stepped in and reaches out his own open hand to his son.',
      quote: 'surely I should have died on the coffin of Henry',
      quoteAt: 'top-right',
    },
    {
      moment: 'The wedding night',
      art: theWeddingNight,
      alt: 'A linocut print of a room at an inn at night. On the right a tall window stands open, its slatted shutters folded back against the wall on either side; beyond it the moon rides among torn clouds above the black outlines of mountains and a lake broken into waves. In the window are the head and shoulders of the Creature: a pale face in profile under long black hair, grinning so that his white teeth show. He leans one long arm in over the sill and points down into the room with one finger. Moonlight falls in a slanting band across the floor. On the left Victor, in a dark coat and a white neckcloth, starts across the room towards the window in a long stride, one arm flung back and the other hand hidden inside the breast of his coat. Behind him a door stands open on the passage, where a lamp burns with a flame printed in red.',
      quote: 'I saw at the open window a figure the most hideous and abhorred.',
      quoteAt: 'top-left',
    },
    {
      moment: "The pursuit north, and Victor's death",
      art: thePursuitNorth,
      alt: 'A linocut print of the frozen sea at dusk. On the left, on the long flat top of a black ice-mountain, Victor sits in a low sledge, leaning out over its front with one hand on its rim, staring ahead to the right. In front of the sledge, harnessed to it, stand three sledge dogs with pricked ears and curled tails. Below, a pale plain of ice scattered with jagged blocks stretches away to the horizon, where the sun, printed in red, is half down under a dark sky. Far out on the plain, small and dark, another sledge is going away to the right behind its own team of dogs, and in it sits a figure much taller than the carriage, his long hair blown back.',
      quote: 'my eye caught a dark speck upon the dusky plain',
      quoteAt: 'top-right',
    },
    {
      moment: "The Creature over Victor's body",
      art: creatureOverVictorsBody,
      alt: "A linocut print of Walton's cabin on his ship at midnight, lit by one lantern hanging from a low beam, its flame printed in red. In the middle a coffin stands on two trestles, its six-sided rim seen a little from above and its inside lost in shadow. Over it hangs the Creature, a gigantic figure in a dark cloak, bent so low that his back almost touches the beam: his head is bowed, long locks of black hair fall over his face and hide it, and one vast pale hand is stretched out over the coffin. On the left, Robert Walton, in a fur cap and a greatcoat with a fur collar, has stopped just inside the open door, his hand open at his side. On the right, through the cabin window, are stars, a line of far ice and, on the black sea close by the ship, a flat ice-raft.",
      quote: 'Alas! he is cold, he cannot answer me.',
      quoteAt: 'top-left',
    },
  ],
  portraits: PORTRAITS,
}
