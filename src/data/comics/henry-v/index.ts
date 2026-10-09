/**
 * Henry V in linocut: the panels for its key moments and the portraits of its
 * people as the play describes them.
 *
 * An edition is held in src/data/full-texts/henry-v.ts (Project Gutenberg
 * #1521), so every quotation on the art is copied from it, word for word, and
 * the comics test checks it there. A quotation may not run across a paragraph
 * break, and a verse line break is a space, never " / ". Quote from the
 * edition only, never from the guide's paraphrase or from memory.
 *
 * THIS PLAY NEEDS PARTICULAR CARE. It is a play about a war, and many of its
 * readers are children. In short:
 * - War is drawn as the play stages it, not as a battle painting: banners,
 *   ranks, the breach in the wall, faces, the weather. No one is shown
 *   wounded, dying or dead; no blade, arrow or shot strikes anyone; no blood.
 * - Henry's threats to Harfleur (3.3) are words only: Henry before the gates
 *   and the Governor on the wall, never the threatened violence, and never
 *   children in danger.
 * - Bardolph's sentence (3.6) is drawn, never the hanging: no gallows, no rope,
 *   no body.
 * - The order to kill the prisoners (4.6) and the killing of the boys (4.7) are
 *   told, never shown: the faces of those who hear it, the empty luggage camp.
 *   A panel's quotation never names or describes an order to kill, a death by
 *   a character's own hand, or the means of either.
 * - The dead at Agincourt (4.8) are names on the herald's paper, not bodies.
 * - Falstaff's death (2.3) is told by the Hostess and never shown.
 * - The French are drawn with the same care as the English, never as
 *   caricatures, and Katherine, in the English lesson and the wooing, is never
 *   drawn in a sexualised way.
 *
 * The people are cut once, in ./panels/people.tsx, and every panel draws the
 * recurring characters from there, so a student meets the same Henry, the same
 * Exeter and the same Pistol in every panel. Its docblock sets out what the
 * play says each of them looks like, and where it says it.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs henry-v --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { chorusAsksForImagination } from './panels/the-chorus-asks-for-imagination'
import { churchMakesAnOffer } from './panels/the-church-makes-an-offer'
import { claimAndTennisBalls } from './panels/the-claim-and-the-tennis-balls'
import { oldFriendsNewQuarrels } from './panels/old-friends-new-quarrels'
import { traitorsAtSouthampton } from './panels/the-traitors-at-southampton'
import { feastOfCrispian } from './panels/the-feast-of-crispian'
import { pistolTakesAPrisoner } from './panels/pistol-takes-a-prisoner'
import { yorkSuffolkAndThePrisoners } from './panels/york-suffolk-and-the-prisoners'
import { theBoysAndTheLuggage } from './panels/the-boys-and-the-luggage'
import { theGloveAndTheCountOfTheDead } from './panels/the-glove-and-the-count-of-the-dead'
import { englishLesson } from './panels/an-english-lesson'
import { bardolphIsCondemned } from './panels/bardolph-is-condemned'
import { frenchWaitForMorning } from './panels/the-french-wait-for-morning'
import { aLittleTouchOfHarry } from './panels/a-little-touch-of-harry'
import { theKingInDisguise } from './panels/the-king-in-disguise'
import { theDeathOfFalstaff } from './panels/the-death-of-falstaff'
import { theFrenchCourtDivided } from './panels/the-french-court-divided'
import { onceMoreUntoTheBreach } from './panels/once-more-unto-the-breach'
import { theBreachSeenFromBelow } from './panels/the-breach-seen-from-below'
import { theUltimatumToHarfleur } from './panels/the-ultimatum-to-harfleur'
import { homeAndBackAgain } from './panels/home-and-back-again'
import { pistolEatsTheLeek } from './panels/pistol-eats-the-leek'
import { peaceAndTheWooing } from './panels/peace-and-the-wooing'
import { smallTime } from './panels/small-time'
import { PORTRAITS } from './portraits'

export const comics: ComicSet = {
  slug: 'henry-v',
  panels: [
    {
      moment: 'The Chorus asks for imagination',
      art: chorusAsksForImagination,
      alt: "A linocut print of a London playhouse of Shakespeare's own time, seen from its open yard: a ring of timber galleries, three storeys high under a thatched roof, round a bare wooden stage. On the left of the stage the Chorus, dressed in the fashion of about 1599 in a doublet, round padded breeches, a white ruff and a short cloak, looks up and holds out one open hand towards the open sky above the galleries. In the middle of the stage stands an hour-glass, its sand just beginning to run. In the sky, drawn only in outline as if imagined, three horsemen in pointed helmets gallop away in a line into the distance, their lances upright and dust flying from their hoofs; the nearest carries a banner with the red cross of Saint George. Below the stage the audience stand in the yard, the backs of their heads to us.",
      quote: 'Think, when we talk of horses, that you see them',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The Church makes an offer',
      art: churchMakesAnOffer,
      alt: "A linocut print of an ante-chamber in the King's palace in London, with walls of dressed stone and a flagstone floor, lit by the afternoon light through a tall window with a pointed arch. Beside the window two churchmen stand close together, talking privately, each in a black skull cap, a white linen tunic with a black cross on the breast over a long black cassock, and a short black cape. On the left the younger, the Bishop of Ely, leans in to listen, holding out an open hand. On the right the elder, the Archbishop of Canterbury, with white hair at the nape, leans towards him as he speaks, one open hand held out low and the other pointing back over his shoulder to a doorway on the right. Through the gap of its half-open oak door can be seen part of a red hanging scattered with small white crosses: the King's cloth of state in the room beyond.",
      quote: 'For I have made an offer to his Majesty',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The claim and the tennis balls',
      art: claimAndTennisBalls,
      alt: "A linocut print of the presence chamber in the King's palace. On the left young King Henry, crowned, in a long gown and mantle with a fur collar, sits on a high carved throne on a stone dais under a red cloth of state scattered with small white crosses; he leans forward, frowning, one open hand held out, asking. Before him stands his uncle Exeter, grey-bearded, holding up a tennis ball for the King to see. Behind Exeter, by the wall, stand the Archbishop of Canterbury and the Bishop of Ely in black skull caps, white tunics with black crosses and black cassocks. In the middle of the floor stands an open cask heaped with tennis balls, its lid leaning against it and a few balls rolled out across the flagstones. On the right, by a tall pointed window, two French ambassadors in soft caps and long dark gowns scattered with white fleurs-de-lis face the King; the nearer, bearded, holds out an open hand to present the gift.",
      quote: 'Hath turn’d his balls to gun-stones',
      quoteAt: 'top-right',
    },
    {
      moment: 'Old friends, new quarrels',
      art: oldFriendsNewQuarrels,
      alt: "A linocut print of a London street on a bright morning. On the right stands a timber-framed house, its upper storey jutting out over the street; its door stands open on the dark inside, the shutters of its upper window are folded back on a dark room, and over the street hangs its sign, a red board with a white cup on it. In the street three men in soldiers' jackets, with swords in their scabbards at their hips, are quarrelling: on the left Nym, in a hood, his hand on the hilt of his sword; facing him Pistol, with a feather in his cap and a pointed beard, his chin up, one fist on his hip and his other hand on his hilt; and between them Bardolph, with his great knobbly nose, holding out an open hand low to each of them to keep them apart. Behind Pistol his wife, the Hostess, in a linen cap and apron, stands with her head bowed and a hand at her breast. Beyond her a small boy has run out of the house and calls to them, one hand held out and the other pointing back at the door. Far off down the street are the pale roofs of the city and a church spire.",
      quote: 'The King has kill’d his heart',
      quoteAt: 'top-left',
    },
    {
      moment: 'The traitors at Southampton',
      art: traitorsAtSouthampton,
      alt: 'A linocut print of a stone council chamber at Southampton. On the left a window of two pointed lights looks out on the harbour, where a ship with a bellied sail flies a banner with the red cross of Saint George and another ship lies further out. Beside the window stands young King Henry, crowned, in a long gown with a fur collar, frowning, one open hand held out low towards three lords who face him, each holding a paper written over with lines. Their faces have gone white, printed in paper, with wide staring eyes: Cambridge, in a soft cap and a short beard, has lowered his paper and pressed his other hand to his breast; Scroop, bareheaded, his dark hair to the jaw, holds his paper close and bows his head over it; Grey, with a dark pointed beard, holds his paper out before him and leans back from it. Behind them on the right stand grey-bearded Exeter, his hand on the hilt of his sheathed sword, and another lord in a soft cap.',
      quote: 'Their cheeks are paper.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The death of Falstaff',
      art: theDeathOfFalstaff,
      alt: "A linocut print of a London street by day. On the left stands a timber-framed tavern, its upper window shut tight behind its shutters and its door standing open; its sign, a board printed in red with a white cup on it, hangs from an iron bracket over the street. Before the door the Hostess, in a linen coif and a white apron, bows her head and holds a hand over her eyes, weeping. Facing her stand the Boy, Falstaff's page, a child much smaller than the men, looking up at her; Bardolph, with his great knobbed nose, his head bowed; and Pistol, in his feathered cap and pointed beard, a hand on his heart. On the right Nym, in his hood, has turned away and points along the street. Beyond them the roofs and gables of the city stretch away to a church tower and its spire.",
      quote: '’A made a finer end',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The French court divided',
      art: theFrenchCourtDivided,
      alt: "A linocut print of a stone chamber in the French King's palace. On the left the French King, white-haired and crowned, sits on a high seat on a stepped dais under a cloth of state printed in red and cut with the white lilies of France. In the middle, before a tall leaded window, the Constable of France, with a dark pointed beard and a long gown sprinkled with lilies, points at the Dauphin; the Dauphin, young, his long hair under a small pointed circlet, faces him with his chin up, smiling, a hand on his hip. On the right the Duke of Exeter, the English envoy with his grey beard, holds out towards the King a long unrolled pedigree with a family tree drawn on it, and behind him a French lord stands by the arched doorway.",
      quote: 'Covering discretion with a coat of folly',
      quoteAt: 'top-right',
    },
    {
      moment: 'Once more unto the breach',
      art: onceMoreUntoTheBreach,
      alt: 'A linocut print of the walls of Harfleur under siege, by day. On the right the town wall, between two round towers, is broken open by a wide gap, the roofs and church spire of the town showing through it, its fallen stones heaped below and the smoke of the guns hanging over it; a scaling ladder leans against the wall beside it. In the middle King Henry, in armour with his crown on his helmet, strides towards the gap with his sword raised over his head and his mouth open in a shout, his other hand held back, low and open, to the men behind him. Following him and leaning forward, ready to run, come three lords in helmets, the grey-bearded Duke of Exeter nearest, and on the left two soldiers, one carrying a scaling ladder and one holding the banner of Saint George, its cross printed in red. A rank of soldiers with bills and bows stands behind them.',
      quote: 'Once more unto the breach, dear friends, once more',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The breach seen from below',
      art: theBreachSeenFromBelow,
      alt: 'A linocut print of the siege works below the walls of Harfleur. The town wall runs across the picture, broken open on the right, its fallen stones heaped below the gap and smoke above it. On the left an earth bank flies the banner of Saint George, its cross printed in red, and the timbered mouth of a mine opens into it, a pick and a spade leaning beside it. In front four captains quarrel: Captain Macmorris, bareheaded with a full dark beard, just up from the mine, frowns and points at Captain Fluellen; Fluellen, in his cap with a hood thrown back, leans away with a hand on his breast; Captain Gower, in a steel cap, reaches out to hold him back; and Captain Jamy, in a flat cap, looks on with a hand at his belt.',
      quote: 'What ish my nation?',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The ultimatum to Harfleur',
      art: theUltimatumToHarfleur,
      alt: 'A linocut print of the gate of Harfleur under a grey sky. On the right the town gate stands shut between two round towers; on the wall above it the Governor of the town, in armour, bows his head and holds out an open hand, and three townsmen beside him stare down. On the left the English stand on the ground below: a rank of soldiers, one of them leaning wearily on his bill with his head down, a soldier holding the banner of Saint George, its cross printed in red, and the grey-bearded Duke of Exeter; in front of them King Henry, in armour and his crown, his brow drawn down and his mouth open, points at the gate.',
      quote: 'The gates of mercy shall be all shut up',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'An English lesson',
      art: englishLesson,
      alt: "A linocut print of a chamber in the French King's palace. In the middle, in front of a tall leaded window, Princess Katherine, a girl with long dark hair loose down her back, a small circlet on her head and a long dark gown sprinkled with lilies, holds up one open hand before her face and looks at it as she says its English name. Facing her, her old gentlewoman Alice, in a white veil and a white wimple round her face and throat and a plain dark gown, leans towards her and points at the hand. The window's light falls across the tiled floor between them. On the left wall hangs a cloth printed in red and sprinkled with white lilies; on the right a doorway opens on a passage with a lit door at its far end.",
      quote: 'd’hand, de fingres, de nails, d’arm, de bilbow.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Bardolph is condemned',
      art: bardolphIsCondemned,
      alt: "A linocut print of the English army on the march in Picardy, late in the day. On the left, far off, a stone bridge of three arches crosses a river under a low sun. In front of it Captain Gower, in his steel cap, stands watching, and Captain Fluellen, in his cap and hood, leans towards the King with one open hand held out as he gives him the news. Right of centre King Henry, in armour and wearing his crown, stands still and upright with his hands at his sides, his face giving nothing away. Behind him come Gloucester in his helmet, a soldier carrying Saint George's banner, its cross printed in red, a drummer with his drum, and two weary soldiers bowed over their staves. Every figure throws a long shadow across the ground.",
      quote: 'one Bardolph, if your Majesty know the man.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The French wait for morning',
      art: frenchWaitForMorning,
      alt: "A linocut print of the French camp at midnight under the stars. On the left the Dauphin's horse stands saddled and bridled, a fine horse with an arched neck, pricked ears and one forefoot lifted from the ground, its coat, which the Dauphin calls the colour of the nutmeg, cut in fine lines, and its cloth sprinkled with lilies. The Dauphin, with long dark hair under a small circlet and a long gown sprinkled with lilies, holds its rein in one hand and holds the other out to his lords, his mouth open as he praises it. Across a watch-fire burning red in the middle stand three French lords in long gowns sprinkled with lilies: Orleans in his bonnet, smiling, the bareheaded Constable with his pointed beard and his hand on his hip, and Rambures in his bonnet with a short beard. Behind them the Constable's pavilion stands open on his armour, which is cut with stars, and far off along the horizon lie the small tents and fires of the English camp.",
      quote: 'When I bestride him, I soar, I am a hawk.',
      quoteAt: 'top-right',
    },
    {
      moment: 'A little touch of Harry',
      art: aLittleTouchOfHarry,
      alt: "A linocut print of the English camp at Agincourt in the dark hours before dawn, under a bright moon. Round a watch-fire burning red in the middle, English soldiers in padded jackets sit on logs and on the ground: on the left a man in a steel cap lifts his face towards the King; behind the fire a bearded man sits hunched over his knees with his head bowed; on the right a bareheaded man sits facing the fire. King Henry, in armour and wearing his crown, has come up behind him and stands smiling down, one open hand resting on the man's shoulder. Behind them stand the English tents, low and patched, and further off on the left two more men sit hunched by a small fire. Far across the field on the right, along the horizon under the moon, lie the many fires and striped pavilions of the French camp.",
      quote: 'A little touch of Harry in the night',
      quoteAt: 'top-left',
    },
    {
      moment: 'The king in disguise',
      art: theKingInDisguise,
      alt: 'A linocut print of the English camp at Agincourt at the end of the night, the first light breaking low along the horizon on the right. Left of centre King Henry, in a long cloak closed about him and a soft bonnet, with no crown, holds out a glove to Williams, a common soldier in a steel cap with a short dark beard, who frowns and holds out his own glove to him; each glove is held by its cuff, its fingers hanging. Behind Williams, Bates, another soldier in a steel cap, comes towards them with one open hand held out low. On the right Court, bareheaded, sits on a log beside a watch-fire burning red, looking towards the dawn. Behind them stand the low English tents, and far off on the right, on the brightening horizon, stand the striped pavilions of the French.',
      quote: 'every subject’s soul is his own',
      quoteAt: 'top-left',
    },
    {
      moment: 'The feast of Crispian',
      art: feastOfCrispian,
      alt: "A linocut print of the English camp at Agincourt on a windy morning, as the battle begins. On the right stands King Henry in armour, his crown on his helmet and his back to the enemy, holding one hand out low to his lords as he speaks to them. Facing him on the left are three lords in armour: Westmorland nearest, a hand pressed to his chest, then Exeter with his grey beard, and a third lord further back. Behind them a short rank of English archers and billmen stands under ragged banners; the largest is Saint George's, its cross printed in red, and crows fly over it. Far off behind Henry, along a rise on the right, the French army stretches to the edge of the picture: a long, dense line of helmets and lances under swallow-tailed standards.",
      quote: 'We few, we happy few, we band of brothers',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Pistol takes a prisoner',
      art: pistolTakesAPrisoner,
      alt: 'A linocut print of the field at Agincourt by day, with the fighting far off: on the right horizon, a broken line of men, lances and standards. In the middle a Frenchman in armour, his coat cut with the lilies of France, kneels bareheaded on one knee with his hands pressed together, looking up with wide eyes. On the left Pistol, in his feathered cap and pointed beard, stands over him with his chest out, one fist on his hip and the other hand held out open for money; his sword stays in its scabbard. On the right the Boy, a child much smaller than the men, turns to them both with one hand out, explaining. Far off on the left lies the English luggage camp, its tents and carts, with a pennon flying from the peak of one tent, a red cross at its hoist. Crows fly over the field.',
      quote: 'The empty vessel makes the greatest sound.',
      quoteAt: 'top-right',
    },
    {
      moment: 'York, Suffolk and the prisoners',
      art: yorkSuffolkAndThePrisoners,
      alt: 'A linocut print of another part of the field at Agincourt by day. In the middle the Duke of Exeter, grey-bearded and bareheaded in armour, stands with his head bowed low, his eyes lowered, tears on his cheek and a hand pressed to his chest. Facing him, King Henry, his crown on his helmet, lowers his own eyes and holds one hand out low to his uncle. Behind Exeter on the left a short rank of English soldiers stands under a ragged black banner, every bill and bow stave upright, and beside them, nearer to us, stand two French prisoners, bareheaded and without swords, the lilies of France on their coats and their hands together before them: one bows his head, the other lifts his face towards the right. Behind Henry, on a ridge to the right, a line of French helmets and lances has gathered again under three swallow-tailed standards printed in red.',
      quote: 'But hark! what new alarum is this same?',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'The boys and the luggage',
      art: theBoysAndTheLuggage,
      alt: "A linocut print of the English luggage camp after it has been plundered, with no one left in it. On the left the King's tent stands half burned away, its charred canvas torn and its pole bare, a fire still burning red at its burned edge and smoke rising from it into the sky. A baggage cart lies tipped over beside it, and a chest stands thrown open with nothing in it. In the middle Captain Gower, in his steel cap, bows his head over the ruin, and Captain Fluellen, in his cap and hood, cries out with a hand held out towards it. On the right King Henry, his crown on his helmet and his brow drawn down in anger, has turned from the camp and points at a hill on the right, where four French horsemen sit their horses along the crest with their lances up.",
      quote: 'I was not angry since I came to France',
      quoteAt: 'top-right',
    },
    {
      moment: 'The glove and the count of the dead',
      art: theGloveAndTheCountOfTheDead,
      alt: "A linocut print of the field before King Henry's pavilion, a great round tent with a striped wall, flying a pennon with a red cross. On the left Williams, a soldier in a steel cap, reaches for a glove heaped with coins that the grey-bearded Duke of Exeter, in armour, holds out to him from the right; behind Williams, at the far left, Captain Fluellen, a glove tucked into his own cap, holds out a single coin. On the right an English herald, his tabard quartered with lilies and lions, holds out a paper to King Henry, who stands before his pavilion in armour and his crown, holding open a long list ruled with lines of names and lifting his eyes upwards.",
      quote: 'O God, thy arm was here',
      quoteAt: 'top-left',
    },
    {
      moment: 'Home and back again',
      art: homeAndBackAgain,
      alt: "A linocut print of the playhouse seen from its yard: the ring of galleries under their thatch, the bare stage, and the heads and shoulders of the people standing in the yard. On the left the Chorus, in a ruff, a doublet and a short cloak, stands on the boards looking up, one open hand held out low towards the open sky over the galleries, where what he asks the audience to imagine is drawn in outline only. On a heath King Henry, crowned, in a long gown with a fur collar, holds up his open hand to stop a bearded lord who stands on the road before him, turned back to him. The lord holds out the King's helmet, its bowl dented and its mail hanging from it, and holds his sword by the hilt, point down, its blade bent. Beyond them stand the walls and gate of London, and its people pour out of the gate towards the King; over the gate flies the banner of Saint George, its cross printed in red. On the stage stands an hour-glass, its sand nearly run through.",
      quote: 'Being free from vainness and self-glorious pride',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Pistol eats the leek',
      art: pistolEatsTheLeek,
      alt: "A linocut print of the English camp in France by day: round tents on trodden ground and a row of small tents along the far edge of the field. Over the great tent on the left flies the banner of Saint George, its cross printed in red. In front of it Captain Gower, in his steel cap, stands back with one open hand held out low towards Captain Fluellen. In the middle Fluellen, in his cap and hood, his cap bare now that its leek is in Pistol's hand, holds a knotted cudgel lowered at his side and points at Pistol with the other hand. On the right Pistol, in his feathered cap and pointed beard, is down on one knee with his eyes screwed shut, biting the end of a long white leek that he holds in his fist, its leaves hanging down from the far end.",
      quote: 'By this leek, I will most horribly revenge.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Peace and the wooing',
      art: peaceAndTheWooing,
      alt: "A linocut print of a room in the French King's palace by day: a stone wall, a tiled floor and a tall leaded window whose light lies on the floor. On the left wall hangs a cloth printed in red and sprinkled with the white lilies of France. King Henry, crowned, in a long gown with a fur collar, stands to the left of the window and speaks, holding his open hand out low towards Princess Katherine. She stands apart from him on the other side of the window, a circlet on her head and her dark hair loose down her back, in a long gown sprinkled with lilies, her hands lowered before her and her eyes cast down. Behind her, her old gentlewoman Alice, in a white veil and wimple, raises one open hand as she speaks. Through an open door on the right, in the next room, the French King, crowned and white-haired, sits reading a long paper of articles, and the grey-bearded Duke of Exeter stands beside him, pointing to a line in it.",
      quote: 'Is it possible dat I should love de enemy of France?',
      quoteAt: 'top-right',
    },
    {
      moment: 'Small time',
      art: smallTime,
      alt: "A linocut print of the playhouse at dusk, after the play has ended: the ring of galleries under their thatch, the sky over them dark above and paler towards the roof, and one white star shining over the playhouse. The bare stage is empty but for an hour-glass whose sand has all run down and, lying tipped on its side on the boards, the King's crown, printed in red. On the right, at the front of the stage, the Chorus, in his ruff, doublet and short cloak, bows low, his arms hanging before him, over the heads of the people standing in the yard along the bottom of the picture.",
      quote: 'Small time, but in that small most greatly lived This star of England.',
      quoteAt: 'top-right',
    },
  ],
  portraits: PORTRAITS,
}
