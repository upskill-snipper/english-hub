/**
 * Strange Case of Dr Jekyll and Mr Hyde in linocut: the panels for its key
 * moments and the portraits of its people as Stevenson describes them.
 *
 * An edition is held in src/data/full-texts/jekyll-and-hyde.ts (Project
 * Gutenberg #43), so every quotation on the art is copied from it, word for
 * word, and the comics test checks it there. A quotation may not run across a
 * paragraph break. The guide's own timeline quotations are not all verbatim
 * (Chapter 2's "If he be Mr. Hyde... I shall be Mr. Seek." joins two spans
 * with an ellipsis), so copy from the edition, never from the guide.
 *
 * The people recur from chapter to chapter, so the figures cut from the text's
 * descriptions of them (Utterson "lean, long, dusty, dreary"; Hyde "pale and
 * dwarfish", "very plainly dressed"; Jekyll "a large, well-made, smooth-faced
 * man of fifty") are shared in ./panels/people.tsx. Draw them from there, so
 * a student meets the same man in every panel.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs jekyll-and-hyde --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'
import { theDoor } from './panels/the-door'
import { theWill } from './panels/the-will'
import { uttersonMeetsHyde } from './panels/utterson-meets-hyde'
import { jekyllAtEase } from './panels/jekyll-at-ease'
import { theCarewMurder } from './panels/the-carew-murder'
import { sohoInTheFog } from './panels/soho-in-the-fog'
import { theLetterAndTheHandwriting } from './panels/the-letter-and-the-handwriting'
import { lanyonsShock } from './panels/lanyons-shock'
import { incidentAtTheWindow } from './panels/incident-at-the-window'
import { theLastNight } from './panels/the-last-night'
import { lanyonsNarrative } from './panels/lanyons-narrative'
import { theExperiment } from './panels/the-experiment'
import { losingControl } from './panels/losing-control'

export const comics: ComicSet = {
  slug: 'jekyll-and-hyde',
  panels: [
    {
      moment: "The door and Enfield's story",
      art: theDoor,
      alt: 'A linocut print of a quiet London by-street on a Sunday, by day. Across the road runs a row of bright shops with dark roofs and chimneys, every shop window closed behind shutters printed in red. Between them, beside the dark entry of a court, a lower block of building thrusts its gable forward: it has no window at all, only a blotched, stained wall and, on the ground floor, a single battered door in a recess, with no bell and no knocker. On the near pavement two gentlemen in top hats and long coats are walking. The younger, Enfield, lifts his cane and points it across the road at the door. Behind him the taller, leaner Utterson, with his walking stick, looks where it points.',
      quote: 'Did you ever remark that door?',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The will and Mr Seek',
      art: theWill,
      alt: "A linocut print of Utterson's business room at night, lit by a single candle whose small flame is printed in red. On the left an iron safe stands open, its heavy door swung back, a shelf of tied bundles of papers inside and an empty inner drawer pulled out. In the middle Utterson, a lean man, sits bareheaded on a chair at a table, bent over a sheet of writing that he holds up before him: Dr Jekyll's will. On the table stand the candle in its candlestick and an envelope endorsed Dr. Jekyll's Will. To the right, in the dark beyond the candle, trails of white mist drift from the paper towards a small figure in a low hat rising out of the mist. It has no face, only a blank where the face should be, and below the waist it thins into streaks of mist: the figure of his imagination, not a visitor.",
      quote: 'I shall be Mr. Seek.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Utterson meets Hyde',
      art: uttersonMeetsHyde,
      alt: 'A linocut print of the same by-street at night, clear and frosty, the shops shut and a few upper windows lit. Street lamps burn white along the pavement, each throwing a pool of light on the clean flags, with dark between. On the right is the windowless block with its battered door in a recess, lit by a lamp beside it. In front of it stands Mr Hyde, a small man plainly dressed in a short coat and a low round hat, turned square to face the man who has stopped him, an old door key held up in his fist. His face is the one pale face in the picture: a heavy brow over a deep-set eye and a tight, smirking mouth, with red at his brow and on his cheek, the flush of his anger. Facing him on the left, a head and more taller, stands Utterson in a top hat and long greatcoat, black against the lamplight, his hands at his sides, staring back. Between them and the shops is the dark entry of a court.',
      quote: "if ever I read Satan's signature upon a face",
      quoteAt: 'top-left',
    },
    {
      moment: 'Jekyll at ease',
      art: jekyllAtEase,
      alt: "A linocut print of a panelled room in Dr Jekyll's house late in the evening, lit only by the fire. In the middle a fire burns in a pale stone fireplace, its flames printed in red, with a clock on the mantelpiece above. On the left, in a tall wing chair, Utterson sits upright, his hands on his knees, looking into the fire; beside him a small table holds a decanter and two wine glasses. On the right, in a matching chair, Dr Jekyll, a large, broad, clean-shaven man, leans forward and holds his open hand out across the hearth towards Utterson, thumb up, as if to shake on a promise.",
      quote: 'the moment I choose, I can be rid of Mr. Hyde',
      quoteAt: 'top-left',
    },
    {
      moment: 'The Carew murder',
      art: theCarewMurder,
      alt: 'A linocut print of a lane beside the river at night under a full moon, the lane lit almost white. On the left, at the open upper window of a dark house, a maid in a frilled white cap, her hair in a bun, sits looking down at the lane, one hand at her mouth. In the lane Mr Hyde, small, in a low hat, his pale face flushed red at the brow and cheek with anger, stamps one foot and holds a heavy stick raised high behind his head. Facing him on the right, Sir Danvers Carew, an old gentleman in a top hat with white hair, steps back in surprise, one open hand raised before his chest and the other thrown out behind him. The stick has touched no one. Their long shadows stretch across the lane in the moonlight, and beyond a low wall the river shines under the moon, with the dark wharves and a church tower of the far bank.',
      quote: 'he broke out in a great flame of anger',
      quoteAt: 'top-right',
    },
    {
      moment: 'Soho in the fog',
      art: sohoInTheFog,
      alt: 'A linocut print of a dingy street in Soho on a foggy morning. A heavy dark pall of fog hangs across the top of the picture, a slanting shaft of paler light breaks down through it on the left, and wreaths of fog drift over the roofs. Along the far side of the street runs a row of dingy houses with shops below: a little shop with papers pegged up in its window and a board of salads beneath it, a gin palace with the word GIN over its door and its big windows lit, and a low eating house with a striped awning and a half-curtained window. Ragged children sit huddled in two of the doorways. Two gas lamps at the kerb are still burning, their flames printed in red. On the left a cab has drawn up in the muddy road, a man in a bowler hat, the police inspector, still at its window. Beside it stands Utterson, tall and lean in a top hat and long greatcoat, one hand in his pocket, looking along the street.',
      quote: 'like a district of some city in a nightmare',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The letter and the handwriting',
      art: theLetterAndTheHandwriting,
      alt: "A linocut print of Utterson's sitting room in the evening, lit by the fire. In the middle a fire burns red in a stone fireplace under a plain mantelshelf. On the left, in front of a curtained window where fog lies over the dark roofs of the city and the far lamps glint red, Utterson sits in a wing armchair, leaning forward with his hand at his chin, watching. On the right, in the other armchair, his clerk Mr Guest sits facing him and holds up two sheets of writing side by side: the sheet on the left, signed Edward Hyde, is written in upright strokes; the sheet on the right carries the same lines of writing, every stroke sloping to the right. Between the two men, near the fire, a bottle of wine and two glasses stand on a small round table.",
      quote: 'the two hands are in many points identical: only differently sloped.',
      quoteAt: 'top-right',
    },
    {
      moment: "Lanyon's shock",
      art: lanyonsShock,
      alt: "A linocut print of Dr Lanyon's book-lined room at night, lit by an oil lamp on a small table, its flame printed in red. On the left, Utterson has just come in through an open door from the lit hall, bareheaded, his top hat hanging from his hand, and stands looking at his old friend. On the right, in front of shelves of books, Lanyon sits in a high-backed armchair: a thin man in a dark coat, his face pale in the lamplight and gaunt, his cheek hollow, his crown bald above a thin fringe of white hair, his eye wide and staring from a dark hollow. He holds up one open hand towards Utterson, the elbow bent and the fingers spread, with small lines beside the fingers to show it trembling.",
      quote: 'He had his death-warrant written legibly upon his face.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Incident at the window',
      art: incidentAtTheWindow,
      alt: "A linocut print of a dark, damp court at sunset, with a strip of bright sky high overhead streaked with red. On the right, the upper storey of a dark building has three dusty windows barred with iron. The lower half of the middle window is pushed up, and behind its bars Dr Jekyll's pale face looks out and down, his eyebrows raised, his eye wide and his mouth open in terror. Below, on the wet flagstones of the court, Utterson and Enfield, two gentlemen in top hats and long coats, each with a walking stick, stand frozen, looking up at him. On the left is the dark archway of the way in from the street.",
      quote: 'like some disconsolate prisoner',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The last night',
      art: theLastNight,
      alt: 'A linocut print of a dark dissecting theatre at night. On the left, crates are stacked by the wall with straw spilling from them and littering the floor, and on a table of chemical flasks a single candle burns with a red flame. On the right a flight of stairs with a banister rises to a landing and a door covered in red baize, studded round its edges with nails. On the landing Poole, an older servant in a dark coat and white shirt front, leans in and drives an axe into the red door, which jumps in its frame; jagged lines of sound burst out from behind it. Utterson stands on the stairs below, a poker held down at his side, looking up at the door.',
      quote: 'A dismal screech, as of mere animal terror, rang from the cabinet.',
      quoteAt: 'bottom-left',
    },
    {
      moment: "Lanyon's narrative",
      art: lanyonsNarrative,
      alt: "A linocut print of Dr Lanyon's consulting room at midnight, lit bright by a lamp on a table, with a tall bookcase on the left and a clock on the wall at twelve. A small man in a coat far too big for him, its collar sprawling and its hem at his shins, his trousers rolled at the ankle, reels back from the table: one hand grips its end, the other is at his breast, his head is thrown back with his mouth open, his face black and his staring eye printed red. Three rings of outline spread from him as he seems to swell. On the table are an empty measuring glass and a small bottle half full of red liquid; a drawer lies on the floor behind the table with a sheet thrown back from it. On the right Lanyon, a man with a shock of white hair in a frock coat, has leapt back against the wall beyond his empty armchair, both hands raised, open and apart to shield himself, his face pale in the lamplight, his eye wide and his mouth open in a cry.",
      quote: 'My life is shaken to its roots',
      quoteAt: 'top-left',
    },
    {
      moment: 'The experiment',
      art: theExperiment,
      alt: "A linocut print of Dr Jekyll's bedroom at night, lit by one candle. On the left stands a four-poster bed hung with patterned curtains, not slept in, and beside it a tall black window full of stars. In the middle a small man, Hyde, bareheaded, his dark hair brushed back, stands in clothes far too big for him: the coat hangs to his shins, the collar stands out wide, the sleeve comes down over his hand and the trousers lie heaped on the floor over his shoes. He holds up a candle, its flame printed red, and faces a tall mirror on a stand, smiling, his face pale in its light. In the dark glass his reflection, the same small man with the same candle and the same smile, looks back at him. A wardrobe stands on the right.",
      quote: 'man is not truly one, but truly two',
      quoteAt: 'top-right',
    },
    {
      moment: 'Losing control',
      art: losingControl,
      alt: "A linocut print of Regent's Park on a clear January day. The sky is bare and bright, and the low sun is a red disc on the left. Bare trees stand on either side, with small birds singing in their branches, and puddles lie on the wet gravel path. On a park bench in the middle sits a small man, Hyde, bareheaded, his dark hair brushed back, in a gentleman's clothes far too big for him: the coat heaped round him, the collar standing off his neck, the trousers hanging down over his feet. His head is bowed, his brow heavy and his mouth turned down, as he looks at his own hand lying on his knee, drawn large and pale, its knuckles and cords standing out and its back covered in short dark hairs.",
      quote: 'I was slowly losing hold of my original and better self',
      quoteAt: 'top-right',
    },
  ],
  portraits: PORTRAITS,
}
