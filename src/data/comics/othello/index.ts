/**
 * Othello in linocut: the panels for its key moments and the portraits of its
 * people as the play describes them.
 *
 * An edition is held in src/data/full-texts/othello.ts (Project Gutenberg
 * #1531), so every quotation on the art is copied from it, word for word, and
 * the comics test checks it there. A quotation may not run across a paragraph
 * break, and a verse line break is a space, never " / ". Quote from the
 * edition only, never from the guide's paraphrase or from memory, and 15 words
 * at most.
 *
 * THIS PLAY NEEDS PARTICULAR CARE. Its villain speaks racism and sexual
 * disgust, and a woman is killed in her bed. The art never adopts the one and
 * never shows the other. In short:
 * - Othello is a Black general in the service of Venice. The play calls him
 *   the Moor, and he says "for I am black" (3.3). He is drawn as a Black man,
 *   with exactly the dignity and care of every other figure: never a
 *   caricature, never from a stage or film production. How the print does
 *   that is set out in ./panels/people.tsx.
 * - The racist and sexual insults Iago, Roderigo and Brabantio use about
 *   Othello and Desdemona are never quoted on a panel, a marker, an alt text
 *   or a caption, and never drawn. No animal ever stands for anyone.
 * - Suggest violence, never show it: no blade touching anyone, no wound, no
 *   body. The blow in 4.1 is never drawn (the moment after it is). Desdemona's
 *   death is never shown or implied by hands or a pillow near her; the candle
 *   Othello speaks to and Desdemona asleep, with Othello apart from the bed,
 *   is as far as the print goes. Emilia's stabbing and Othello's own death
 *   happen off the page. Desdemona is never drawn in a sexualised way.
 * - Red may stand for blood as a symbol, never as a wound, and never on a
 *   mouth or chin, where it reads as blood at a glance: a flush goes on the
 *   cheek.
 *
 * The people are cut once, in ./panels/people.tsx, and every panel draws the
 * recurring characters from there, so a student meets the same Othello, the
 * same Iago and the same Desdemona in every panel. Its docblock sets out what
 * the play says each of them looks like, and where it says it.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs othello --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'
import { iagoWakesVenice } from './panels/iago-wakes-venice'
import { othelloWillNotHide } from './panels/othello-will-not-hide'
import { beforeTheSenate } from './panels/before-the-senate'
import { iagosPlanIsBorn } from './panels/iagos-plan-is-born'
import { stormAndReunion } from './panels/storm-and-reunion'
import { theDrunkenBrawl } from './panels/the-drunken-brawl'
import { theTemptationBegins } from './panels/the-temptation-begins'
import { theHandkerchiefIsDropped } from './panels/the-handkerchief-is-dropped'
import { theVowOfRevenge } from './panels/the-vow-of-revenge'
import { theMagicInTheHandkerchief } from './panels/the-magic-in-the-handkerchief'
import { theTranceAndTheBlow } from './panels/the-trance-and-the-blow'
import { theAccusation } from './panels/the-accusation'
import { theWillowSong } from './panels/the-willow-song'
import { ambushInTheDark } from './panels/ambush-in-the-dark'
import { theMurder } from './panels/the-murder'
import { emiliaSpeaks } from './panels/emilia-speaks'
import { othellosLastWords } from './panels/othellos-last-words'

export const comics: ComicSet = {
  slug: 'othello',
  panels: [
    {
      moment: 'Iago wakes Venice',
      art: iagoWakesVenice,
      alt: "A linocut print of a street in Venice at night. On the right is the stone front of Brabantio's house. At a pointed window over a balcony, old Brabantio, white-haired and white-bearded and in his white nightshirt, leans out of his dark room and reaches a hand over the rail. In the next window a taper has just been lit, its flame printed in red, and by the arched door below a torch burns red in an iron bracket, its light cut into the stone and the paving. In the street on the left two men look up at him, calling out: in front, Roderigo, in a flat bonnet with a long feather and a purse at his belt, points up at the window; a step behind him and further from the light, Iago, in a close soldier's cap, cups a hand to his mouth to shout. Behind them a canal runs past with a gondola moored on it, and beyond the water stand dark houses, a few of their windows lit, with funnel-shaped chimneys and a bell tower under the stars.",
      quote: 'I am not what I am',
      quoteAt: 'top-left',
    },
    {
      moment: 'Othello will not hide',
      art: othelloWillNotHide,
      alt: "A linocut print of a street in Venice at night, between stone house fronts with pointed windows. In the middle, in front of a deep arch whose passage is lit pale behind him, Othello, a Black man in a general's long coat with a sash, stands upright and calm, his own sword still in its scabbard at his side, and holds out one hand, open and low, towards the drawn swords. On the left, on his side, an officer holds up a torch, its flame printed in red; Cassio, bearded, holds his drawn sword pointing at the ground; and Iago, in a close cap, holds his sword up towards Roderigo across the street. On the right, Roderigo, in a feathered bonnet, holds up his drawn sword; old Brabantio, white-bearded, in a senator's gown and cap, points at Othello and calls out; and behind them one officer holds up a second torch, printed in red, and another a halberd. Every blade is cut in white and held up or down, and none is near anyone.",
      quote: 'Keep up your bright swords, for the dew will rust them.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Before the senate',
      art: beforeTheSenate,
      alt: "A linocut print of the council chamber in Venice at night, its tall windows black and its wall lit by candles on a long table, their flames printed in red. On the right, behind the table and its heavy cloth, the Duke sits in a high-backed chair in the stiff cap of his office, with a grey-bearded senator in a round cap on either side of him and letters lying open before them. In the middle of the room Othello, a Black man in a general's long coat, stands upright before them and holds out an open hand as he tells his story. Facing him at the end of the table stands old Brabantio, white-bearded, in a senator's gown and cap, a hand on his breast. On the left, through an arched door from a lit passage, Desdemona comes in, a young woman in a dark gown with her hair pinned up, one hand laid on her breast; Iago, in a close cap, stands in the doorway behind her, and Roderigo, in a feathered bonnet, watches from further back.",
      quote: 'She lov’d me for the dangers I had pass’d,',
      quoteAt: 'top-left',
    },
    {
      moment: "Iago's plan is born",
      art: iagosPlanIsBorn,
      alt: "A linocut print of the same council chamber later that night, emptied and dim. On the right the Duke's high chair and the senators' chairs stand empty behind the long table, with letters still lying on it; three of its candles have been snuffed, a thread of smoke rising from each, and one still burns, its flame printed in red. Iago, in a close cap, stands alone near it, his face in its light, his hand at his chin as he thinks and a knowing smile on his lips. On the left, across the empty floor, Roderigo, in a feathered bonnet with a purse at his belt, is going out through the arched door into the lit passage.",
      quote: 'Hell and night Must bring this monstrous birth to the world’s light.',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Storm and reunion on Cyprus',
      art: stormAndReunion,
      alt: "A linocut print of a stone platform on the harbour wall of Cyprus, with a battlemented parapet along the sea. A dark bank of storm cloud is going off over the top left, above a sea still heaving with white crests; to the right the sky has cleared and the water is calm, and Othello's ship rides at anchor in the bay below a headland, her sails taken in and a small pennant printed in red at her masthead. In the middle Othello, a Black man in a general's long coat and a cloak, come up from the harbour, and Desdemona, in a dark gown with her hair pinned up, face each other with their hands joined and smile, his head bowed towards her and hers lifted to him. On the left stand those who waited with her: Cassio, bearded, holding out an open hand towards the pair; Montano, grey-bearded, in a round cap; Emilia in her coif; and Roderigo in his feathered bonnet. Apart from them at the far left, nearest to us, Iago in a close cap stands with a hand on his hip, watching the pair with a knowing smile.",
      quote: 'If it were now to die, ’Twere now to be most happy',
      quoteAt: 'top-left',
    },
    {
      moment: 'The drunken brawl',
      art: theDrunkenBrawl,
      alt: "A linocut print of a stone hall in the castle on Cyprus late at night, lit by a torch in an iron bracket by the door, its flame printed in red. On the left, Desdemona, in a dark gown with her hair pinned up, has come to the open door from the lit passage beyond, a hand at her breast. In front of her Othello, a Black man in a general's long coat, stands upright and points at Cassio. Cassio, bearded, stands before him with his head hung and his eyes shut, his drawn sword hanging point down to the floor from his hand. Behind Cassio, Iago, in a close cap, holds out both open hands to Othello. On the right, grey-bearded Montano, in a round cap and a long cloak, sits bent forward on a bench with a hand pressed to his side, his sword lying on the floor before him, by a long table with a jug, cups and a candle whose flame is printed in red. A cup and a stool lie knocked over on the floor. Through an arched window the town's bell tower stands against the night sky, its bell ringing with rings of sound cut round it, and bonfires printed in red burn on the roofs.",
      quote: 'Cassio, I love thee, But never more be officer of mine.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The temptation begins',
      art: theTemptationBegins,
      alt: "A linocut print of the garden of the castle on Cyprus in the middle of the day, with a clipped hedge and dark cypress trees under a bright sky. On the left, Cassio, bearded, his head down, is slipping away out of the garden through an arched gate in the battlemented castle wall. In the middle, Emilia, in a dark gown and a coif, and Desdemona, in a dark gown with her hair pinned up, have turned towards Othello, and Desdemona holds out an open hand to him; in her other hand she carries a small white handkerchief worked with strawberries printed in red. On the right, Othello, a Black man in a general's long coat, stands watching Cassio go, and Iago, in a close cap, leans in close behind him with a hand on his shoulder, speaking low at his ear.",
      quote: 'Ha, I like not that.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The handkerchief is dropped',
      art: theHandkerchiefIsDropped,
      alt: "A linocut print of the garden of the castle on Cyprus by day. On the left, Othello, a Black man in a general's long coat, is going in at the arched door in the battlemented castle wall with his head bowed, and Desdemona, in a dark gown with her hair pinned up, follows close behind him with a hand on his arm. Neither looks back. Behind them on the gravel walk, in the long shadow of a cypress, a small white handkerchief lies where it has fallen, worked with five strawberries printed in red with dark leaves. On the right, Emilia, in a dark gown and a coif, has stayed behind; she looks down at the handkerchief and reaches a hand towards it.",
      quote: 'My wayward husband hath a hundred times Woo’d me to steal it.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The vow of revenge',
      art: theVowOfRevenge,
      alt: "A linocut print of the far end of the castle garden on Cyprus, by a stone parapet over the sea, under a bright sky drawn out in long thin clouds like the veins in marble, with the sun blazing on the right. Othello, a Black man in a general's long coat, kneels on one knee on the gravel, his head raised to the sky and his open hand laid on his breast, swearing. Behind him Iago, in a close cap, kneels too, his hands pressed together as if in prayer and a knowing smile on his face, and at his belt hangs the corner of a white handkerchief worked with strawberries printed in red. On the left rise the battlemented castle wall and two cypresses.",
      quote: 'Now art thou my lieutenant.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The magic in the handkerchief',
      art: theMagicInTheHandkerchief,
      alt: "A linocut print of the forecourt before the castle on Cyprus by day: on the left the battlemented castle wall with its arched gate, on the right a parapet over the harbour, with the sun printed in red over the sea. Othello, a Black man in a general's long coat, stands on the left and holds out his open hand, low, towards Desdemona. Facing him, Desdemona, in a dark gown with her hair pinned up, holds out a plain white handkerchief by one corner, her other hand at her breast; it has no strawberries on it. A step behind her, Emilia, in a dark gown and a coif, stands with her hands folded and her eyes lowered.",
      quote: 'There’s magic in the web of it.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The trance and the blow',
      art: theTranceAndTheBlow,
      alt: "A linocut print of the forecourt before the castle on Cyprus by day, the moment after the blow, which is not shown. On the left, before the castle's open gate, Iago in a close cap stands with a hand on his hip, watching with a knowing smile. Next to him Othello, a Black man in a general's long coat, has turned his back on the others and reads the open letter from Venice, held in both hands, his head bowed over it. Behind him Desdemona, in a dark gown with her hair pinned up, stands upright and still, her hands folded before her and her eyes lowered. On the right Lodovico, bearded, in a flat bonnet and a long cloak, has started back, his mouth open and both open hands raised before his breast. Beyond the parapet a Venetian galley rides at anchor in the harbour, a small pennant printed in red at her masthead.",
      quote: 'Is this the noble Moor, whom our full senate Call all in all sufficient?',
      quoteAt: 'top-right',
    },
    {
      moment: 'The accusation',
      art: theAccusation,
      alt: "A linocut print of a stone-walled room in the castle in the last of the daylight. On the left, Emilia, in a dark gown and a coif, stands in an open doorway on the dark passage, turned back towards her mistress as she goes, one open hand raised a little before her. In the middle, Desdemona, in a dark gown with her hair pinned up, kneels on the flagged floor, her face turned up and both hands open before her, asking. On the right, across the room from her and alone against a tall arched window full of evening sky, Othello, a Black man in a general's long coat, stands with his head bowed and one hand to his brow over his eyes, weeping.",
      quote: 'I understand a fury in your words, But not the words.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The willow song',
      art: theWillowSong,
      alt: "A linocut print of Desdemona's bedchamber at night, lit by one candle on a tall iron stand, its flame printed in red, with stars in a narrow window. On the left stands the four-poster bed, its curtains tied back at the posts and the white wedding sheets laid ready on it. In the candlelight Desdemona, in a dark gown, sits with her hands folded in her lap, her head bowed to one side and her lips parted as she sings. Behind her stands Emilia, in a dark gown and a coif, taking the pins from her hair with both hands, and Desdemona's long dark hair falls loose down her back. On the right the door is shut.",
      quote: 'Let husbands know Their wives have sense like them',
      quoteAt: 'top-right',
    },
    {
      moment: 'Ambush in the dark',
      art: ambushInTheDark,
      alt: "A linocut print of a street on Cyprus at night under a dark sky, its stone house fronts shuttered, lit only by one lantern. On the right Iago, in a close cap and his white shirt, his sword sheathed at his side, has come with the lantern held up before him, its flame printed in red, and calls out. In the middle, in the lantern's light before a wooden stall built out from a house, Cassio, bearded, sits on the ground where he fell, leaning back, and reaches one open hand up towards the light, his mouth open, calling for help; no wound is shown. On the left, at the edge of the light, Lodovico, bearded, in a flat bonnet and a long cloak, holds back with an open hand raised, and old Gratiano, white-haired and white-bearded in a long gown, stands beside him with his hand on his breast.",
      quote: 'He hath a daily beauty in his life That makes me ugly.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The murder',
      art: theMurder,
      alt: "A linocut print of the castle bedchamber at night, before anything happens, lit by a single candle on a tall iron stand, its flame printed in red. On the left, in the four-poster bed with its curtains tied back, Desdemona lies asleep on her back under white sheets drawn up to her chin, her eyes shut and her dark hair spread on the linen. To the right of the candle, apart from the bed, Othello, a Black man in a general's long coat, stands with his head bowed towards the flame and one hand flat on his breast; his hands hold nothing. Behind him stars show in a narrow window, and on the right the door is shut.",
      quote: 'Put out the light, and then put out the light',
      quoteAt: 'top-right',
    },
    {
      moment: 'Emilia speaks',
      art: emiliaSpeaks,
      alt: "A linocut print of the castle bedchamber at night, lit by one candle on a tall iron stand, its flame printed in red, with stars in a narrow window. On the left stands a four-poster bed with its curtains drawn all along its side, so that nothing on it can be seen, and beside it Othello, a Black man in a general's long coat, stands apart with his head bowed. In the candlelight Emilia, in a dark gown and a coif, her face in the light, holds her chin up and speaks, one hand on her breast and the other held out open towards her husband Iago. Iago, in a close cap, faces her and holds up an open hand to silence her. Behind him old Gratiano, white-haired and bearded, raises a hand in dismay, and Montano, in a round cap and a long cloak, stands in the open doorway.",
      quote: 'I will not charm my tongue; I am bound to speak.',
      quoteAt: 'top-right',
    },
    {
      moment: "Othello's last words",
      art: othellosLastWords,
      alt: "A linocut print of the same castle bedchamber at night, lit by one candle on a tall iron stand, its flame printed in red. On the left the four-poster bed stands with its curtains drawn all along its side, so that nothing on it can be seen. In front of the candle, nearer to us and larger than anyone else, Othello, a Black man in a general's long coat, stands unarmed with his head up, one hand on his breast and the other held out as he speaks, a tear cut in white on his cheek below his eye. Facing him, Lodovico, bearded, in a flat bonnet and a long cloak, holds out two open letters. Beyond him Cassio, bearded, sits in the chair he was carried in, its carrying pole along its side, and holds out a hand towards Othello, and old Gratiano, white-haired, stands behind the chair. In the open doorway on the right Iago stands silent with his arms bound behind his back, and Montano holds him by the shoulder.",
      quote: 'Speak of me as I am. Nothing extenuate, Nor set down aught in malice.',
      quoteAt: 'top-right',
    },
  ],
  portraits: PORTRAITS,
}
