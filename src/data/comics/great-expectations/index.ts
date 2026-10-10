/**
 * Great Expectations in linocut: the panels for its key moments and the
 * portraits of its people as Dickens describes them.
 *
 * THE TEXT. Quotations on the art are copied from the held edition,
 * src/data/full-texts/great-expectations.ts: the P. F. Collier and Son edition
 * (New York, 1890), as Wikisource transcribes it, with its chapters numbered
 * straight through, 1 to 59. Its punctuation differs in places from the
 * Project Gutenberg text the guide's own quotations follow (eBook #1400), so a
 * line copied from the guide can fail the comics test here: copy every
 * quotation from the held edition, in its own spelling and punctuation, and
 * never from the guide or from memory.
 *
 * WHAT IS NEVER DRAWN, for readers who are children (the style guide's
 * safeguarding rules, and these for this text):
 * - Pip is a child in the first stage (Chapters 1 to 19), and is never shown
 *   in danger at the moment of harm. In the churchyard the convict rises among
 *   the graves and Pip is startled: no seizing, no turning him upside down, no
 *   threat of the knife.
 * - Mrs Joe's "Tickler" is never shown in use.
 * - The attack on Mrs Joe is never shown: what follows it is (the leg-iron,
 *   the chalk mark on the slate).
 * - Miss Havisham's dress catching fire (Chapter 49) is never shown: no flames
 *   on a person, no burns. The aftermath in the room, with her lying covered
 *   and Pip beside her, or the burnt wedding-cake table, may be.
 * - Orlick's ambush at the lime-kiln and the capture on the river are
 *   suggested: no struggle, nobody in the water.
 * - Magwitch's last hours (Chapter 56): Pip at his bedside holding his hand,
 *   no death shown, and no caption describes his death. No caption describes
 *   Compeyson drowning.
 * A quotation never names or describes a death, a killing, or the means of
 * either.
 *
 * The people recur from chapter to chapter, so the figures cut from Dickens's
 * descriptions of them are shared in ./panels/people.tsx. Draw them from there,
 * so a student meets the same boy, the same convict and the same blacksmith in
 * every panel.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs great-expectations --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'

import { theConvictInTheChurchyard } from './panels/the-convict-in-the-churchyard'
import { stolenFoodAndARecapturedConvict } from './panels/stolen-food-and-a-recaptured-convict'
import { firstVisitToSatisHouse } from './panels/first-visit-to-satis-house'
import { visitsAFightAndAnApprenticeship } from './panels/visits-a-fight-and-an-apprenticeship'
import { theAttackOnMrsJoe } from './panels/the-attack-on-mrs-joe'
import { greatExpectations } from './panels/great-expectations'
import { leavingTheForge } from './panels/leaving-the-forge'
import { joesVisitToLondon } from './panels/joes-visit-to-london'
import { missHavishamsCommand } from './panels/miss-havishams-command'
import { estellaTurnsOnHerMaker } from './panels/estella-turns-on-her-maker'
import { theConvictReturns } from './panels/the-convict-returns'
import { magwitchsStory } from './panels/magwitchs-story'
import { estellasEngagement } from './panels/estellas-engagement'
import { remorseAndFire } from './panels/remorse-and-fire'
import { estellasParents } from './panels/estellas-parents'
import { orlicksTrap } from './panels/orlicks-trap'
import { escapeDownTheRiver } from './panels/escape-down-the-river'
import { magwitchsDeath } from './panels/magwitchs-death'
import { joesCareAndBiddysWedding } from './panels/joes-care-and-biddys-wedding'
import { elevenYearsLater } from './panels/eleven-years-later'

export const comics: ComicSet = {
  slug: 'great-expectations',
  panels: [
    {
      moment: 'The convict in the churchyard',
      art: theConvictInTheChurchyard,
      alt: 'A linocut print of a churchyard on the marshes towards evening. On the left stands the church, with its steeple and weather-cock and a gabled porch with a dark arched door. Just beside the porch a big man in coarse grey, bareheaded but for a pale rag tied round his head, is starting up from among the graves: one knee still on the ground, one hand pushing on a headstone and his other arm clutched across his chest, an iron ring and chain fastened round his shin, glaring across the graves. On the right a small boy has started back from him in fright beside a headstone cut with the name PHILIP PIRRIP, one hand raised before him and the other flung back, his eyes wide and a tear on his cheek. Five little lozenge-shaped stones lie in a row beside the grave, nettles grow all over the churchyard, and beyond its low wall the dark flat marshes stretch away, with cattle grazing, a gate, the pale line of the river and a beacon on a pole. The sky is streaked with long dark lines, and a few long lines in it, the red of the evening, are printed in red.',
      quote: 'A fearful man, all in coarse grey, with a great iron on his leg.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Stolen food and a recaptured convict',
      art: stolenFoodAndARecapturedConvict,
      alt: 'A linocut print of a rough wooden hut by the river at night, its whitewashed plank walls pale in the light of a bright fire, printed in red, in a stone hearth on the left, and of a lamp with a red flame hanging from the rafters. Before the fire stands the convict in coarse grey with the pale rag round his head, his hands cuffed together in front of him, frowning across the hut. In the middle a sergeant in a tall shako stands with his arms folded, and behind him soldiers in greatcoats lie on a long low wooden bedstead, one of them propped on his elbow to look. A stand of muskets leans against the back wall, and a drum stands on the floor. On the right Joe, a big fair-haired man in a coat, holds out an open hand towards the convict, and with his other hand holds the hand of Pip, a small boy, who looks up from beside him. Through the open door behind them a black prison-ship like an ark, its ports barred and its chains running down to the water, lies out on the dark river, and a boat with rowers pulls out towards it.',
      quote: 'God knows you’re welcome to it',
      quoteAt: 'top-left',
    },
    {
      moment: 'First visit to Satis House',
      art: firstVisitToSatisHouse,
      alt: 'A linocut print of a large dark room with no daylight, lit only by wax candles whose small flames are printed in red. On the right stands a dressing-table with a faded drape and a gilded looking-glass between two candles, and heaped by the glass are a watch and chain, jewels, gloves, flowers, a Prayer-book and one white shoe. In front of it Miss Havisham sits stooped in her arm-chair, all in white: a long white dress, a long white veil hanging from her white hair, bridal flowers in her hair, a gaunt face with sunken eyes, one white shoe on her foot and her hands in her lap. She is watching two children play cards at a small table. Nearer her sits Estella, a girl with a pale face and long dark hair, in a pale dress, her chin raised, pointing scornfully at the boy’s hands. Across the table sits Pip in his dark jacket and thick boots, his head bowed as he looks at his own open hand, his cards in the other. On the wall between them a clock has stopped at twenty minutes to nine, a candle burns in a sconce on the left, and a half-packed trunk on the floor has a pale dress hanging over its edge.',
      quote: 'And what coarse hands he has! And what thick boots!',
      quoteAt: 'top-left',
    },
    {
      moment: 'Visits, a fight and an apprenticeship',
      art: visitsAFightAndAnApprenticeship,
      alt: 'A linocut print of the dark room of the wedding feast at Satis House, where no daylight comes. On the left two branched candlesticks stand on a high chimney-piece, their small flames printed in red, and below them a few dull red coals glow in the grate, with two black beetles on the hearth. A long table runs away to the right under a faded cloth, and in the middle of it the bride-cake rises as a black mound hung with pale cobwebs, strands of web running up into the dark; spiders run on the cloth, and thin wisps of smoke hang across the room. At the near end of the table Miss Havisham stands stooped, all in white, with a long white veil and bridal flowers in her white hair, leaning on a crutch-headed stick with one hand and laying the other on the shoulder of Pip, a small boy in a dark jacket, who stands close before her and looks along the table at the cake with wide eyes. The panelled walls are cut faint in the dark.',
      quote: 'It’s a great cake. A bride-cake. Mine!',
      quoteAt: 'top-right',
    },
    {
      moment: 'The attack on Mrs Joe',
      art: theAttackOnMrsJoe,
      alt: 'A linocut print of the forge kitchen by day. On the left a low fire, printed in red, burns in the grate under a shelf with a candlestick and a canister on it. Beside the fire Mrs Joe, a tall thin woman in a white cap and a dark gown with a white bib, sits upright in a high-backed wooden chair, holding a slate up on her knees with its face turned to us; a large letter T is chalked on it in white, and her forefinger points to it. Behind the chair stands Biddy, a young woman in a dark gown with her hair in a knot, looking down at the slate. Facing Mrs Joe stands Orlick, a big man in his shirt sleeves and a dark leather apron, his shoulders hunched, his knees bent and his eyes on the ground, his empty hands hanging at his sides. Behind him are a window on the grey marsh and a dresser of plates. On the right Pip, a youth, and Joe, a big fair-haired man, both in their shirt sleeves and leather aprons, stand watching beside the open door to the dark forge, where an anvil shows.',
      quote: 'a character that looked like a curious T',
      quoteAt: 'top-left',
    },
    {
      moment: 'Great expectations',
      art: greatExpectations,
      alt: 'A linocut print of the best parlour at the forge at night, lit by one candle, its flame printed in red, on a small table in the middle of the room; the wall is cut lighter only round it. On the left Mr Jaggers, a burly man with a large head, bald on top, stands with one foot up on the seat of a chair, leaning on his knee, and throws his forefinger out at Pip. On the right Pip, the apprentice, stands with his hands clasped together at his chest and his mouth open, and beside him Joe, a big man with fair hair, stands still, his eyes wide and his mouth open. Behind them stands a tall press with two doors.',
      quote: 'in a word, as a young fellow of great expectations',
      quoteAt: 'top-left',
    },
    {
      moment: 'Leaving the forge',
      art: leavingTheForge,
      alt: 'A linocut print of the road at the end of a village at dawn. On the left the village lies dark against a pale sky: roofs, trees, a smoking chimney and a church with a tall spire. In the middle a wooden finger-post with two blank arms stands at the roadside, and beside it stands Pip, a young man in a new coat and a tall hat, with one hand laid on the post and his head bowed, a tear on his cheek; a small travelling bag stands at his feet. To the right the road runs away across the flat land under long bands of rising mist, where the low sun, printed in red, is half hidden in the mist.',
      quote: 'Heaven knows we need never be ashamed of our tears',
      quoteAt: 'top-right',
    },
    {
      moment: "Joe's visit to London",
      art: joesVisitToLondon,
      alt: "A linocut print of Pip's sitting-room in London on a wet morning. The wall is papered in a pattern of small diamonds, and through the window on the left rain and soot run down the glass, with the cracked and shabby windows across the court beyond. In front of the window Joe, a big man with fair hair, stiff in his best dark coat with a high collar and a big white cravat, holds his top hat against his chest with one hand and gives Pip the other. Pip, a young man in a long dressing-gown patterned with small flowers, takes his hand, his face flushed red on the cheekbone. On the right stand the breakfast table, with a white cloth and the tea things on it, an empty chair pushed back from it, and a pale chimney-piece with no fire in the grate.",
      quote: 'life is made of ever so many partings welded together',
      quoteAt: 'top-left',
    },
    {
      moment: "Miss Havisham's command",
      art: missHavishamsCommand,
      alt: 'A linocut print of the long room at Satis House where the wedding feast is spread, lit only by two branched chandeliers hanging in the dark, their candle flames printed in red. A long table with a grey, faded cloth runs across the room, and on the right the bride-cake stands on it as a black mound hung with cobwebs. In front of the table Miss Havisham, all in white, with a long white veil and bridal flowers in her white hair, sits in a wheeled chair. She has drawn her arm round the neck of Pip, a young man in a dark coat, who stoops over the chair, and her hand lies white on the back of his head as she draws it down close to her face.',
      quote: 'Love her, love her, love her!',
      quoteAt: 'top-left',
    },
    {
      moment: 'Estella turns on her maker',
      art: estellaTurnsOnHerMaker,
      alt: "A linocut print of Miss Havisham's dressing-room at Satis House at night, lit by a fire, printed in red, in a pale chimney-piece on the right, and by two candles high on the wall, their small flames printed in red. On the chimney-piece a clock has stopped at twenty minutes to nine. On the left, in deep shadow, stand a draped dressing-table and a tall looking-glass. Miss Havisham, all in white, with a long white veil and bridal flowers in her white hair, sits forward in her high-backed arm-chair, both hands gripping her crutch-headed stick, which is struck down on the floor. A white satin shoe, a long glove and faded flowers lie on the floor. Estella, a young woman in a dark gown with her hair dressed up, stands before the chimney-piece with her back half turned to Miss Havisham, her head bowed, looking down at the fire. On the far right Pip, a young man, sits on a plain chair, watching.",
      quote: 'I am what you have made me.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The convict returns',
      art: theConvictReturns,
      alt: "A linocut print of Pip's sitting-room in the Temple at night, in a storm. On the left a fire, printed in red, burns in a pale fireplace, and a rough coat hangs over the back of a chair before it. In the middle a shaded lamp on a small table throws a small circle of light on a shut book and a watch. A man of about sixty, broad and strong, bald on top with long grey hair hanging at the sides of his head and a neckerchief at his throat, leans towards Pip, holding out both hands open, the fingers apart. On the right Pip, a young man in a dark coat, stands back from him in front of a tall case of books, one hand to his breast and his eye wide. Through the tall window on the right rain drives across the black panes, and far lamps show as small points of light.",
      quote: 'Yes, Pip, dear boy, I’ve made a gentleman on you!',
      quoteAt: 'top-left',
    },
    {
      moment: "Magwitch's story",
      art: magwitchsStory,
      alt: "A linocut print of Pip's sitting-room in the Temple by day, with a fire printed in red in a pale fireplace on the left, a tall case of books, an unlit lamp on a small table, and a window on the river on the right. By the fire Magwitch, a strong man of about sixty with short grey hair, in a dark coat, sits forward in a high-backed easy-chair with a hand spread on his knee and a short black pipe stuck in his buttonhole, looking round at Pip as he talks. Pip, a young man in a dark coat, sits on a chair facing him, listening. Behind Pip, at a dark breakfast table with a cup and a plate on it, sits Herbert, a pale young man with light hair, bent over an open book, writing in its cover with a pencil.",
      quote: 'Compeyson is the man who professed to be Miss Havisham’s lover',
      quoteAt: 'top-left',
    },
    {
      moment: "Estella's engagement",
      art: estellasEngagement,
      alt: "A linocut print of Miss Havisham's dressing-room at Satis House, lit by three candles high on the wall, their flames cut in white, and by a fire, printed in red, in a pale chimney-piece on the right, where a clock stands stopped at twenty minutes to nine. On the left, by a draped dressing-table with an oval looking-glass, Pip, a young man in a dark coat, sits bent forward in a chair with his face in his hands. Before him a half-packed trunk spills a pale dress across the floor, and a ball of wool lies beside it. Estella, in a dark gown with her hair dressed up, sits low on a cushion on the floor with her knitting in her hands, facing him, composed. Behind her, on a settee by the fire, sits Miss Havisham, all in white, with her long white veil and bridal flowers, one hand pressed to her heart and her crutch-headed stick beside her, staring at Pip.",
      quote: 'Why not tell you the truth? I am going to be married to him.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Remorse and fire',
      art: remorseAndFire,
      alt: 'A linocut print of the long room at Satis House, dark, with the daylight shut out. On the left the long table with its faded cloth runs back into the dark, and on it the bride-cake stands as a black mound hung with cobwebs. In the middle Pip, a young man in a dark coat, stands drawing back, both hands lifted before him and his eye wide. Kneeling at his feet, her white dress spread on the floor, Miss Havisham, with a long white veil and bridal flowers in her white hair, turns her worn face up to him and raises her folded hands. Behind her stands a ragged high-backed chair with its covering torn, and on the right, in a pale chimney-piece, a low fire of grey ash glows with three small coals printed in red, far from them both.',
      quote: 'What have I done! What have I done!',
      quoteAt: 'top-left',
    },
    {
      moment: "Estella's parents",
      art: estellasParents,
      alt: "A linocut print of Pip's sitting-room in the Temple by day, with a fire printed in red in a pale fireplace on the left, a tall case of books, a window on the river on the right, and an unlit lamp on a small table by the wall. Herbert, a young man with light hair and a pale face, sits on a plain chair with his back to the fire, leaning forward with his hands on his knees to look closely into Pip's face. Pip sits facing him on the near end of a long dark sofa, his coat hung over his shoulders like a cloak and fastened at the neck, the white band of a sling crossing his chest, his head lifted and his eye wide.",
      quote: 'And the man we have in hiding down the river, is Estella’s Father.',
      quoteAt: 'top-right',
    },
    {
      moment: "Orlick's trap",
      art: orlicksTrap,
      alt: 'A linocut print of the inside of a hut of boards on the marshes at night, lit by one candle, its flame printed in red, standing on a long table in the middle. On the left Pip, a young man with his coat hung over his shoulders, stands bound with his back against a ladder fixed to the wall, one rope round his chest and another round his waist, his head up and his mouth shut. At the far end of the table Orlick, a big, heavy man, sits with his arms folded on the table, glaring at Pip, and his great shadow is thrown up the boards behind him. On the right a door stands shut in the dark, with a little light showing under it.',
      quote: 'Old Orlick’s a match for you and knowed you’d come to-night!',
      quoteAt: 'top-left',
    },
    {
      moment: 'Escape down the river',
      art: escapeDownTheRiver,
      alt: 'A linocut print of the broad river below Gravesend on a bright, cold day, the far shore low and flat under a pale sky. On the left a paddle-steamer comes on towards the boats under a cloud of black smoke, her funnel and masts dark and her great paddle-wheel turning. In the near boat, in the foreground, Pip sits in the stern with his coat hung over his shoulders, and beside him Magwitch, a man of about sixty with short grey hair, sits still, wrapped in a dark cloak. Facing them, two young men pull at the oars: Startop, dark-haired, and Herbert, with light hair. Beyond them a long four-oared galley lies alongside: its steersman, in a top hat, turns and points at the man in the cloak, a second man beside him sits muffled in a cloak up to his nose, and four rowers sit at the oars.',
      quote: 'I apprehend that man, and call upon him to surrender, and you to assist.',
      quoteAt: 'top-right',
    },
    {
      moment: "Magwitch's death",
      art: magwitchsDeath,
      alt: "A linocut print of a bare prison infirmary by day, under a white ceiling, with two high barred windows whose light falls on the wall. On the right, in a plain bed, Magwitch, a man of about sixty with short grey hair, lies on his back, raised on three piled white pillows, with a pale blanket drawn up to his chest and his face turned up towards Pip. Pip, a young man in a dark coat, sits on the far side of the bed and leans over him, reaching down to lay his hand on the blanket over Magwitch's breast, and Magwitch's arm comes up from his side to lay his hand over Pip's. On the left, by a dark doorway, a gentleman in a top hat, the governor of the prison, beckons a plainly dressed officer out of the room.",
      quote: 'She is living now. She is a lady and very beautiful. And I love her!',
      quoteAt: 'top-left',
    },
    {
      moment: "Joe's care and Biddy's wedding",
      art: joesCareAndBiddysWedding,
      alt: "A linocut print in two scenes side by side. On the left, in Pip's room in London, Pip, thin and dressed in white, lies propped on his pillows in a bed with no curtains, his hands pressed together; a small table of medicine bottles stands in the corner, and at the window, its blind half down, Joe, a big man with fair hair, stands with his back to the room and his arm raised to his eyes. On the right, a June day in the village: under the dark leaves of the lime trees, beside the forge, which stands shut, and a whitewashed house with white curtains and flowers at its open window, Pip, a young man in a dark coat, stands facing Joe, in his best coat and a top hat, and Biddy, in a white gown with her hair in a knot, who stand arm in arm before him, Biddy with one hand raised in surprise. Larks fly high in the pale sky.",
      quote: 'O God bless this gentle Christian man!',
      quoteAt: 'top-left',
    },
    {
      moment: 'Eleven years later',
      art: elevenYearsLater,
      alt: 'A linocut print of the cleared ground where Satis House stood, on a winter evening. A long brick garden wall with a pale coping runs across the back; above it the night sky is cut with stars, and on the right a low moon, ringed with broken light, shines through bands of silvery mist. Long bands of mist lie across the ground and drift past a rough fence of posts and rails, in which a gate stands open. In the middle Pip, a man in a dark coat, and Estella, a woman in a dark gown with her hair drawn up in a knot, stand facing each other in front of a bench, her hand held in his, her head a little bowed. In the foreground low mounds of ruin are overgrown with ivy.',
      quote: 'I have been bent and broken, but—I hope—into a better shape.',
      quoteAt: 'top-left',
    },
  ],
  portraits: PORTRAITS,
}
