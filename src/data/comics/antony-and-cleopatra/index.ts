/**
 * Antony and Cleopatra in linocut: the panels for its key moments and the
 * portraits of its people as the play describes them.
 *
 * An edition is held in src/data/full-texts/antony-and-cleopatra.ts, so every
 * quotation on the art is copied from it, word for word, and the comics test
 * checks it there. A quotation may not run across a paragraph break, and a
 * verse line break is a space, never " / ". Quote from the edition only, never
 * from the guide's paraphrase or from memory. Note the edition's own spellings
 * (Phœbus, curly apostrophes): copy them, do not retype them.
 *
 * THIS PLAY NEEDS PARTICULAR CARE. In short:
 * - Five deaths come by the characters' own hands or by grief: Enobarbus,
 *   Eros, Antony, Charmian and Iras, and Cleopatra. None is shown at the
 *   moment, and none is suggested by its method: no blade turned on anyone,
 *   no sword fallen on, no asp at a breast or arm, no poison raised to a
 *   mouth. Enobarbus is drawn grieving alone under the moon, never his body;
 *   Antony is drawn alive, raised up to the monument, never wounded; Cleopatra
 *   is drawn robed and crowned, preparing, the basket of figs closed on a
 *   table at most. Thidias is led away; the whipping is never shown.
 * - A quotation on a panel never names or describes a death by a character's
 *   own hand, an order to kill, or the means of either, even where the
 *   guide's timeline uses such a line: choose another line from the scene.
 * - Cleopatra is drawn as the play describes her, with the same dignity as
 *   every other figure: never sexualised, never a caricature of an Egyptian
 *   queen. Her looks come only from the play's own words ('a tawny front';
 *   'with Phœbus’ amorous pinches black'), and the panels say where it is
 *   silent.
 * - Red is the spot colour, and at phone width a small red mark shrinks to a
 *   speck that reads as blood beside a hand, a mouth, a face, a blade or
 *   water. Keep every red mark big enough to stay what it is, and print small
 *   details in ink or paper. A flush goes on the cheek, never the mouth.
 *
 * The people are cut once, in ./panels/people.tsx, and every panel draws the
 * recurring characters from there, so a student meets the same Antony, the
 * same Cleopatra and the same Enobarbus in every panel.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs antony-and-cleopatra --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { romesVerdict } from './panels/romes-verdict'
import { newsFromRome } from './panels/news-from-rome'
import { aPartingPerformed } from './panels/a-parting-performed'
import { caesarsCaseAgainstAntony } from './panels/caesars-case-against-antony'
import { serpentOfOldNile } from './panels/serpent-of-old-nile'
import { aMarriageAndABarge } from './panels/a-marriage-and-a-barge'
import { theSoothsayersWarning } from './panels/the-soothsayers-warning'
import { theMessenger } from './panels/the-messenger'
import { pompeysGalley } from './panels/pompeys-galley'
import { enthronedInAlexandria } from './panels/enthroned-in-alexandria'
import { bySeaBySea } from './panels/by-sea-by-sea'
import { actium } from './panels/actium'
import { shameAndAKiss } from './panels/shame-and-a-kiss'
import { thidiasWhipped } from './panels/thidias-whipped'
import { herculesLeavesHim } from './panels/hercules-leaves-him'
import { treasureSentAfterHim } from './panels/the-treasure-sent-after-him'
import { aDayOfVictory } from './panels/a-day-of-victory'
import { enobarbusDies } from './panels/enobarbus-dies'
import { allIsLost } from './panels/all-is-lost'
import { theShapeOfACloud } from './panels/the-shape-of-a-cloud'
import { deathInTheMonument } from './panels/death-in-the-monument'
import { caesarMournsHisRival } from './panels/caesar-mourns-his-rival'
import { theDreamOfAntony } from './panels/the-dream-of-antony'
import { againForCydnus } from './panels/again-for-cydnus'
import { aPairSoFamous } from './panels/a-pair-so-famous'
import { PORTRAITS } from './portraits'

export const comics: ComicSet = {
  slug: 'antony-and-cleopatra',
  panels: [
    {
      moment: 'Rome’s verdict, Egypt’s reply',
      art: romesVerdict,
      alt: "A linocut print of a hall of round columns in Cleopatra's palace in Alexandria, open to the daylight. On the left, in the shadow of the wall, two Roman officers in armour watch: Philo, frowning, points across the hall, and Demetrius stands behind him. In the middle a messenger in a short tunic and travelling cloak holds out a letter from Rome. Antony, his curling hair and beard flecked with grey, in a belted tunic, has his back to it and flings one open hand back towards it, while his other arm goes round Cleopatra's waist. She faces him with her hand on his breast, her long hair loose and a mantle hanging from her shoulders. Behind her two attendants hold tall fans on staffs over her head, the fans printed in red.",
      quote: 'Let Rome in Tiber melt, and the wide arch Of the ranged empire fall!',
      quoteAt: 'top-left',
    },
    {
      moment: 'News from Rome',
      art: newsFromRome,
      alt: "A linocut print of another room in Cleopatra's palace by day: a dark wall with a bright doorway on the left, and columns open to the light on the right. A messenger in a short tunic and travelling cloak, come in through the doorway, bows his head, his open hand still held out from giving Antony a letter. Antony, bearded, in a belted tunic, holds the letter up before him and reads it, his head bowed over it. Behind him the banquet stands abandoned: a table with a cloth, a bunch of grapes and two cups on it, and beside it a tall jar of wine in its stand, printed in red.",
      quote: 'These strong Egyptian fetters I must break, Or lose myself in dotage.',
      quoteAt: 'top-right',
    },
    {
      moment: 'A parting performed',
      art: aPartingPerformed,
      alt: "A linocut print of a room in Cleopatra's palace by day, round columns open to the light and a dark wall at the right. Antony, bearded, in armour and a general's cloak, ready to leave for Rome, holds out a letter to Cleopatra, a column of the hall behind it. Cleopatra sways back as if fainting, her head thrown back and her eyes shut, one open hand held up to keep him off, her long hair loose and a mantle at her shoulders. Behind her Charmian, her hair in a knot, leans in with a hand at her back to hold her up.",
      quote: 'I am quickly ill and well, So Antony loves.',
      quoteAt: 'top-left',
    },
    {
      moment: "Caesar's case against Antony",
      art: caesarsCaseAgainstAntony,
      alt: "A linocut print of a plain room in Caesar's house in Rome by day, its wall dark, a barred window high in it showing the roofs of Rome and the gable of a temple, and an unlit lamp on a tall stand. At the front young Caesar, in a toga and frowning, holds out an opened letter, the news from Alexandria. A step further back Lepidus, slight and balding, also in a toga, faces him with an open hand turned up. Behind Caesar, in the bright doorway at the back of the room, a messenger in a short tunic and travelling cloak steps in with his hand on his breast.",
      quote: 'A man who is the abstract of all faults That all men follow.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Serpent of old Nile',
      art: serpentOfOldNile,
      alt: "A linocut print of a hall in Cleopatra's palace in Alexandria by day, round columns open to the light and a dark wall at the left. Cleopatra, her long hair loose and a mantle hanging from her shoulders, lifts her face to the sky and holds out one open hand towards it. Behind her Charmian, her hair in a knot, reaches towards her, and further back by the wall Mardian waits in a long robe. Far off in the sky, on a dark cloud of cuts, is what Cleopatra imagines, cut pale like a vision: Antony, bearded and in armour, riding away from her on a lean horse that holds its head high and lifts one foreleg.",
      quote: 'O happy horse, to bear the weight of Antony!',
      quoteAt: 'top-left',
    },
    {
      moment: 'A marriage, and a barge',
      art: aMarriageAndABarge,
      alt: "A linocut print of a plain room in Lepidus's house in Rome, lit through a wide doorway at the back and a high barred window on the right. In the middle, framed in the bright doorway, Caesar, a young beardless man in a toga, and Antony, bigger, with curling hair and a curled beard, also in a toga, clasp right hands. On the left Lepidus, slight and balding, in a toga, holds out both open hands towards them, one above the other, and behind Caesar stands Agrippa in armour. On the right, apart from them, Enobarbus, bearded and in armour, stands with his hand at his beard, watching. Between him and the others stands a brazier on a tripod, its low fire of coals and small flames printed in red.",
      quote: 'A sister I bequeath you, whom no brother Did ever love so dearly.',
      quoteAt: 'top-left',
    },
    {
      moment: "The Soothsayer's warning",
      art: theSoothsayersWarning,
      alt: "A linocut print of a room in Caesar's house in Rome at night, stars showing through a high barred window and a dark doorway on the left. On the left a lamp on a stand gives the only light, its flame printed in red, its rays spreading across the wall. In front of it the Soothsayer, an old man with a long white beard and a bald crown, in a long robe, raises one finger in warning and holds his other hand out, open, to Antony. Antony, a big man with curling hair and a curled beard, in a toga, stands facing him at the edge of the light, frowning, his hand on his breast.",
      quote: 'Therefore, O Antony, stay not by his side.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The messenger',
      art: theMessenger,
      alt: "A linocut print of a room in Cleopatra's palace in Alexandria by day, round columns open to the sky, and a dark wall on the left with a bright doorway in it. A messenger, a young man in a belted tunic and a short travelling cloak, is down on one knee, looking up and holding out both hands, open, pleading. Cleopatra, her long hair loose down her back and a mantle hanging from her shoulders, stands over him, frowning, and points down at him. Behind her Charmian, her hair in a knot, reaches out to her with both hands to hold her back. On the right, on a low dais, stands the queen's empty chair of state with its footstool, the cushion on its seat and the panel of its high back printed in red.",
      quote: 'I that do bring the news made not the match.',
      quoteAt: 'top-left',
    },
    {
      moment: "Pompey's galley",
      art: pompeysGalley,
      alt: "A linocut print of Pompey's galley at anchor at dusk, the sky dark overhead and pale along the horizon, a mountain on the far shore and the sea beyond the ship's rail. On the left, under an awning hung with two lamps whose flames are printed in red, four men sit at a table under a long cloth: Enobarbus, bearded, raising his cup; Lepidus, balding, slumped forward with his eyes shut and his cup fallen on its side; Antony, with curling hair and a curled beard, in a toga, turned to him with an open hand; and Caesar, young and beardless, in a toga, sitting upright with his hand on the table. The mast stands in the middle, the sail furled on its yard. On the right, away from the table, Menas, a seaman with a short dark beard in a belted tunic and a cap, leans in to Pompey and points back over his shoulder at the men at the table. Pompey, clean-shaven, in armour and a general's cloak, holds up his open hand before his chest to stop him. At the bow behind them the anchor cable lies coiled on the deck and runs up over the rail.",
      quote: '’Tis not my profit that does lead mine honour; Mine honour it.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Enthroned in Alexandria',
      art: enthronedInAlexandria,
      alt: "A linocut print of a room in Caesar's house in Rome by day, the roofs of the city showing through a high barred window and a lamp standing unlit on its stand. On the left Octavia, a woman in a long gown with a mantle drawn over her head, has just come in at the bright doorway, where two men of her household stand behind her; she bows her head, her eyes down and her hand on her breast. In the middle Caesar, a young beardless man in a toga, has turned to her and holds out an open hand. Behind him stands the folding chair with crossed legs that he has risen from, its cushion printed in red. On the right Agrippa, in armour, and Maecenas, in a toga with his hand on his breast, look on.",
      quote: 'No, my most wronged sister. Cleopatra Hath nodded him to her.',
      quoteAt: 'top-right',
    },
    {
      moment: 'By sea, by sea',
      art: bySeaBySea,
      alt: "A linocut print of Antony's camp on the promontory of Actium on a clear day. On the left, before the camp's tents on the hillside, stand Canidius, in a crested helmet and a general's cloak, holding out his open hand, and Enobarbus, bearded and frowning, his open hand held out in protest. In the middle Antony, with curling hair and a curled beard, in armour and a general's cloak, strides towards the sea with his head up, and Cleopatra, her long hair loose down her back and a mantle hanging from her shoulders, walks a step behind him. At the edge of the land, between Antony and the water, an old soldier in a crested helmet has turned to face him, calling out, one open hand held out to him and the other pointing down at the ground under his feet. Below them in the bay lie Antony's galleys with their sails furled, and Cleopatra's ships under sails printed in red.",
      quote: 'O noble emperor, do not fight by sea.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Actium',
      art: actium,
      alt: "A linocut print of the sea fight off Actium, seen from the plain above the shore. Far out on the bay a crowd of galleys fight bow to bow, their masts down, two of them heeled hard over. Away from the fight to the right, Cleopatra's ships flee under full sail, their sails printed in red and their wakes streaming behind them, and one ship under a white sail, Antony's, has left the fight and follows them. On the plain stand three of Antony's men. On the left Canidius, in a crested helmet and a general's cloak, has turned his back on the sea and walks away inland, his head bowed. Enobarbus, bearded, has turned away too, his forearm laid across his eyes. Scarus, bareheaded, calls out and points down at the red sails, his other hand open.",
      quote: 'The greater cantle of the world is lost With very ignorance.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Shame, and a kiss',
      art: shameAndAKiss,
      alt: "A linocut print of a hall in Cleopatra's palace in Alexandria by day: round columns under a beam, a dark wall on the left, and through the openings the harbour, where Cleopatra's ship lies under a sail printed in red beside a galley with its sail furled. In the middle Antony, with curling hair and a curled beard, still in his armour, sits on a stone bench and looks up, holding out his open hand. Behind him his servant Eros, in a belted tunic, holds out his open hand to him. Before him Cleopatra, her long hair loose and a mantle hanging from her shoulders, bows her head and reaches her open hand down towards his. Behind her, her woman Charmian holds out a hand at her back, and Iras stands with her eyes cast down.",
      quote: 'Forgive my fearful sails!',
      quoteAt: 'top-left',
    },
    {
      moment: 'Thidias whipped',
      art: thidiasWhipped,
      alt: "A linocut print of a room in Cleopatra's palace by day, a dark wall with a bright doorway on the left and round columns on the right, open to the water. Two servants in belted tunics lead Caesar's messenger Thidias, in a toga, out through the doorway: the one in front leans into the pull with his hand round Thidias's forearm, the other follows with a hand on his back, and Thidias hangs back with his head bowed. Antony, with curling hair and a curled beard, in armour and a general's cloak, frowns and points after him. Behind Antony, Cleopatra, her long hair loose and her head bowed, holds her hand to her breast. Apart on the right Enobarbus, bearded, stands with his back to them all, looking out across the water to Caesar's camp on the far shore, where tents stand under Caesar's standard, its flag printed in red.",
      quote: 'I will seek Some way to leave him.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Hercules leaves him',
      art: herculesLeavesHim,
      alt: "A linocut print of the square before Cleopatra's palace at night, under the stars, with the palace's columns and shut doors on the right. Four soldiers of the watch, in armour and crested helmets, stand apart across the square. Rings of music, printed in red, rise out of the paving and up into the air, growing as they go. On the left a soldier with a spear turns to the others with his open hand, asking. The next points up after the music, his mouth open, and a third, with a spear, lifts his face to listen. On the right the soldier nearest the palace bows his head and points down at the paving the music rises from.",
      quote: '’Tis the god Hercules, whom Antony loved, Now leaves him.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The treasure sent after him',
      art: treasureSentAfterHim,
      alt: "A linocut print of Caesar's camp outside Alexandria on a bright morning, the city's walls on the skyline and two of Caesar's standards flying over the camp, their flags printed in red. Beside his tent stands Enobarbus, alone, bearded and in armour, his head bowed and one hand pressed to his chest. Before the tent's dark doorway lies the treasure Antony has sent after him: banded chests, and one standing open, heaped with coins, a cup and a dish that glint in the light. On the right, Antony's messenger, in a short travelling cloak, carries another chest to the pile from a mule with long ears that is still laden with its pack.",
      quote: 'I am alone the villain of the earth',
      quoteAt: 'top-left',
    },
    {
      moment: 'A day of victory',
      art: aDayOfVictory,
      alt: "A linocut print of the walls of Alexandria at the end of a day's fighting, a red sun blazing in the sky above them. From the left Antony's soldiers march in, helmeted, carrying round shields with hacked rims, two of them raising long trumpets towards the city. Out of the open gate on the right has come Cleopatra, her long hair loose down her back and a mantle hanging from her shoulders, her hands held out in welcome. Antony, bearded and in armour with a general's cloak, strides to meet her, reaching for her hand, and with his other hand on the shoulder of Scarus, a bareheaded soldier who bows his head, presents him to the queen.",
      quote: 'O thou day o’ th’ world',
      quoteAt: 'top-left',
    },
    {
      moment: 'Enobarbus dies',
      art: enobarbusDies,
      alt: "A linocut print of Caesar's camp at night. Dark tents stand along the horizon, and Caesar's standard, its flag printed in red, is planted among them. On the right a great full moon hangs low over the camp, its light cut in rings and rays across the dark sky. Close under it, alone, Enobarbus kneels on one knee in his armour, his head and shoulders dark against its glow, his bearded face lifted to the moon as he speaks. One hand is pressed to his heart and the other is held out, open, towards the moon.",
      quote: 'Be witness to me, O thou blessed moon',
      quoteAt: 'top-left',
    },
    {
      moment: 'All is lost',
      art: allIsLost,
      alt: "A linocut print of high ground above the sea by day. On the left a tall umbrella pine stands over everything, a long strip of its bark stripped away down the trunk. Under it Scarus, a bareheaded soldier in armour, stands with his head bowed. Ahead of him Antony, with curling hair and a curled beard, in armour and a general's cloak, frowns and cries out, pointing down at the sea. Out on the water a fleet lies together with its oars shipped, ships under sails printed in red alongside ships under dark sails, and three swallows wheel over the red sails.",
      quote: 'All is lost! This foul Egyptian hath betrayed me.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The shape of a cloud',
      art: theShapeOfACloud,
      alt: "A linocut print of a room in the palace at Alexandria at evening: a dark wall and a round column on the left, and on the right an opening over a low wall to the sky and the sea. Antony, with curling hair and a curled beard, in armour and a general's cloak, stands at the opening and looks up at a great dark cloud in the shape of a horse, its head, ears, mane and forelegs clear and its back breaking up into streaks; he lifts one open hand towards it. Behind him Eros, a young man in a belted tunic, bows his head. Further off a bank of cloud rises into walls and towers like a citadel, and the setting sun, printed in red, sits on the sea.",
      quote: 'Here I am Antony, Yet cannot hold this visible shape',
      quoteAt: 'top-left',
    },
    {
      moment: 'Death in the monument',
      art: deathInTheMonument,
      alt: "A linocut print of Cleopatra's monument by the sea at evening: a tall tower of pale dressed stone, and on the left the sun going down into the water, printed in red. On the roof, behind the parapet, Cleopatra leans far out, her long hair loose, holding both open hands down. On either side of her, her women Charmian and Iras lean back and haul on two ropes that run over the parapet and down the wall. Halfway up the wall Antony, with curling hair and a curled beard, in a belted tunic, sits alive in a sling of cloth between the ropes, one hand on a rope and the other reaching up, open, towards hers; their hands have not yet met. Below, one helmeted soldier of his guard steadies the sling with both hands and another looks up, and on the shore Diomedes, in a long robe, watches.",
      quote: 'How heavy weighs my lord',
      quoteAt: 'top-left',
    },
    {
      moment: 'Caesar mourns his rival',
      art: caesarMournsHisRival,
      alt: "A linocut print of Caesar's camp outside Alexandria by day: a palisade, Caesar's large tent with its door flaps tied back, and two of his standards, their flags printed in red. Low on the skyline to the left stand the city's walls, with Cleopatra's tall monument rising above them. Dercetus, a bareheaded soldier of Antony's, kneels on one knee and holds out both hands, open and empty. Facing him, young Caesar, beardless, in armour and a general's cloak, bows his head with his hand flat on his breast. Behind Caesar his friends watch him: Agrippa, in armour, holding out an open hand towards him, and Maecenas, in a toga.",
      quote: 'my brother, my competitor In top of all design, my mate in empire',
      quoteAt: 'top-left',
    },
    {
      moment: 'The dream of Antony',
      art: theDreamOfAntony,
      alt: "A linocut print of a stone room in Cleopatra's monument by day, the light coming in at a tall window. On the left Dolabella, a young Roman officer in armour, bows his head with his hand on his breast. Cleopatra, her long hair loose, in a long gown with a mantle and no crown, lifts her face and holds out an open hand towards her dream, which fills the right of the picture in a dark field edged with mist: a giant Antony, cut white like a vision, with curling hair and a beard, in armour and a general's cloak, one hand on his hip, striding across the waves of the sea, a crescent moon on one side of his head and the sun, printed in red, on the other.",
      quote: 'I dreamt there was an Emperor Antony.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Again for Cydnus',
      art: againForCydnus,
      alt: "A linocut print of the stone room in Cleopatra's monument at dusk. In the middle, in front of the window, which is pale with the last of the light, Cleopatra stands with her head held high, in a long robe with a band of ornament at its hem and a crown with five points, printed in red. In front of her, her woman Iras ties the girdle of the robe; behind her, Charmian settles the mantle on her shoulder with one hand. Both women bow their heads. To the left a round basket stands on a small table, its lid shut. On the right is the queen's bed, empty, its curtains tied back to its posts.",
      quote: 'Give me my robe. Put on my crown.',
      quoteAt: 'top-right',
    },
    {
      moment: 'A pair so famous',
      art: aPairSoFamous,
      alt: "A linocut print of the stone room in Cleopatra's monument at night, a crescent moon in the window and a lamp burning on a tall iron stand, its flame printed in red. On the left the doorway is bright with torchlight, and a helmeted Roman soldier stands in it. In front, Dolabella, a young officer in armour, bows his head, and beside him young Caesar, in armour and a general's cloak, bows his head and holds out an open hand, low, towards the queen's bed on the right. The bed's curtains are drawn all along it, so that nothing on it can be seen, and a helmeted guard stands at its foot with his head bowed.",
      quote: 'No grave upon the earth shall clip in it A pair so famous.',
      quoteAt: 'top-right',
    },
  ],
  portraits: PORTRAITS,
}
