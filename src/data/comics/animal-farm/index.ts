/**
 * Animal Farm in linocut: the panels for its key moments and the portraits of
 * its animals and people as Orwell describes them.
 *
 * An edition is held in src/data/full-texts/animal-farm.ts (the Project
 * Gutenberg Australia transcription), so every quotation on the art is copied
 * from it, word for word, and the comics test checks it there. A quotation may
 * not run across a paragraph break. Copy from the edition, never from memory
 * or from another printing: the held edition's punctuation is the one checked.
 *
 * The animals recur from chapter to chapter, so the figures cut from the
 * text's descriptions of them (Major "a majestic-looking pig", the "prize
 * Middle White boar"; Boxer "nearly eighteen hands high" with "A white stripe
 * down his nose"; Clover "a stout motherly mare"; Mollie "the foolish, pretty
 * white mare" with red ribbons in her mane; Benjamin the donkey; Napoleon "a
 * large, rather fierce-looking Berkshire boar"; Squealer "a small fat pig"
 * with "very round cheeks") are shared in ./panels/people.tsx. Draw them from
 * there, so a student meets the same animal in every panel.
 *
 * How to add a piece, and how to preview one, are set out at the top of
 * src/data/comics/a-christmas-carol/index.ts and in the style guide,
 * src/components/comics/linocut/index.ts:
 *
 *   node scripts/preview-comics.mjs animal-farm --only <moment or name>
 *
 * Several artists draw here at once: add your own entries, and keep each
 * change to the lines that are yours.
 */

import type { ComicSet } from '@/lib/comics/types'

import { PORTRAITS } from './portraits'
import { oldMajorsSpeech } from './panels/old-majors-speech'
import { majorsWarnings } from './panels/majors-warnings'
import { beastsOfEngland } from './panels/beasts-of-england'
import { animalism } from './panels/animalism'
import { theRebellion } from './panels/the-rebellion'
import { theSevenCommandmentsAndTheMilk } from './panels/the-seven-commandments-and-the-milk'
import { theFirstHarvest } from './panels/the-first-harvest'
import { readingAndTheMaxim } from './panels/reading-and-the-maxim'
import { theMilkAndTheApples } from './panels/the-milk-and-the-apples'
import { theNewsSpreads } from './panels/the-news-spreads'
import { battleOfTheCowshed } from './panels/the-battle-of-the-cowshed'
import { mollieLeaves } from './panels/mollie-leaves'
import { windmillPlans } from './panels/the-windmill-plans'
import { snowballIsDrivenOut } from './panels/snowball-is-driven-out'
import { napoleonIsAlwaysRight } from './panels/napoleon-is-always-right'
import { workingLikeSlaves } from './panels/working-like-slaves'
import { tradeAndTheFarmhouseBeds } from './panels/trade-and-the-farmhouse-beds'
import { theWindmillFalls } from './panels/the-windmill-falls'
import { theHensRevolt } from './panels/the-hens-revolt'
import { snowballTheTraitor } from './panels/snowball-the-traitor'
import { theConfessions } from './panels/the-confessions'
import { cloversVision } from './panels/clovers-vision'
import { withoutCause } from './panels/without-cause'
import { battleOfTheWindmill } from './panels/the-battle-of-the-windmill'
import { theWhisky } from './panels/the-whisky'
import { rationsAndTheRepublic } from './panels/rations-and-the-republic'
import { boxerFalls } from './panels/boxer-falls'
import { boxerIsTakenAway } from './panels/boxer-is-taken-away'
import { squealersStory } from './panels/squealers-story'
import { yearsPass } from './panels/years-pass'
import { walkingOnTwoLegs } from './panels/walking-on-two-legs'
import { theSingleCommandment } from './panels/the-single-commandment'
import { fromPigToMan } from './panels/from-pig-to-man'

export const comics: ComicSet = {
  slug: 'animal-farm',
  panels: [
    {
      moment: "Old Major's speech",
      art: oldMajorsSpeech,
      alt: 'A linocut print of the big barn at night. On the left, on a raised wooden platform, Old Major, a big white boar with a curled tail, lies on a heap of straw with his mouth open, speaking, under a lantern that hangs from a beam; its flame is printed in red and its light is cut in rays across the plank wall. Three dogs lie at the foot of the platform, and three young black pigs lie in the straw just beyond it, facing him. Behind them a cow and two sheep lie chewing the cud. Near the front stands Mollie, a white mare, with a lump of sugar in her mouth and red ribbons tied in her plaited mane. On the right the two cart-horses lie facing Major: Clover, cut in fine lines, with one foreleg laid out in front of three ducklings, and Boxer, black with a white stripe down his nose, with the cat sitting between them. Muriel the white goat and Benjamin the donkey stand at the back. Hens roost on the sill of a window, through which the dark farmhouse can be seen, and pigeons perch on the beam.',
      quote: 'Man is the only real enemy we have.',
      quoteAt: 'top-right',
    },
    {
      moment: "Major's warnings",
      art: majorsWarnings,
      alt: 'A linocut print of the big barn at night, drawn close. On the left, Old Major, a big white boar with a tusk curving up from his jaw, lies on a heap of straw on a raised platform under a hanging lantern whose flame is printed in red. He has lifted his forequarters and raised one front trotter, and his mouth is open as he speaks. Two young black pigs lie in the straw at the foot of the platform, facing him. On the right the two cart-horses lie listening with their heads up and their ears pricked: Boxer behind, black, with a white stripe down his nose, and Clover in front, cut in fine lines, one foreleg laid out on the straw round three ducklings. Through a window above them the farmhouse stands dark against the night sky.',
      quote: 'we must not come to resemble him',
      quoteAt: 'top-right',
    },
    {
      moment: 'Beasts of England',
      art: beastsOfEngland,
      alt: 'A linocut print of the farmyard at night. On the left the double doors of the big barn stand open on its lantern-lit inside, where the animals are singing. Clover, cut in fine lines, and Boxer, black with a white stripe down his nose, throw their heads up towards the lantern, whose flame is printed in red. Old Major, a white boar, lies on his platform at the back with his mouth open, and in front a cow, a black pig, a dog, a sheep and two ducklings crowd the doorway. Red musical notes rise from the doorway and over the barn roof. On the right the farmhouse is dark, every window black but one: at an upper window Mr Jones, bare-headed in a white nightshirt, leans out with his gun at his shoulder and fires it up into the night sky over the yard, a white burst at the muzzle.',
      quote: 'The singing of this song threw the animals into the wildest excitement.',
      quoteAt: 'bottom-left',
    },
    {
      moment: 'Animalism',
      art: animalism,
      alt: "A linocut print of the big barn at night, at one of the pigs' secret meetings. On the left, on the raised platform under a hanging lantern whose flame is printed in red, Snowball, a pale pig, stands speaking with his mouth open, and behind him stands Napoleon, a big black boar, silent. Down in the straw Squealer, a small, round, pale pig, is caught mid-skip, his mouth open and his tail whisked out, with arcs cut round his feet where he skips from side to side. Facing him and the platform stand Mollie, a white mare with a lump of sugar at her lips and red ribbons in her plaited mane, then Clover, cut in fine lines, and Boxer, black with a white stripe down his nose, their heads bent to listen. Two sheep lie in the straw below an open window, where Moses the raven sits on the sill with his beak open.",
      quote: 'The others said of Squealer that he could turn black into white.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The Rebellion',
      art: theRebellion,
      alt: 'A linocut print of Manor Farm on a midsummer evening, the sun low and printed in red above the far hedge and trees. Down a pale cart-track from the farm buildings on the left, where the door of the store-shed hangs broken open, five men run in full flight towards an open five-barred gate and the road beyond it: Mr Jones, bare-headed, last and nearest, looking back over his shoulder, and his four men in caps ahead of him, their long shadows thrown back along the track. Two dropped whips lie on the track behind them. After them, with open ground between, come the animals: two dogs, Boxer, black with a white stripe down his nose, at a flying gallop, a pig, and a cow with her horns lowered. Far off on the left, going the other way, Mrs Jones hurries off in a long coat and hat carrying a carpet bag, and Moses the raven flies after her with his beak open.',
      quote: 'Jones was expelled, and the Manor Farm was theirs.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The Seven Commandments and the milk',
      art: theSevenCommandmentsAndTheMilk,
      alt: 'A linocut print of the farmyard on a June morning. On the left stands the tarred black end wall of the big barn, THE SEVEN COMMANDMENTS freshly painted on it in white letters with seven numbered lines beneath, and a ladder still leaning against it. At the foot of the ladder a small, round, pale pig, Squealer, stands beside a pot of white paint, and a paint-brush lies thrown down on the ground. In the middle, five wooden buckets of frothing white milk stand in the yard, their hoops printed in red. In front of them, his back to the buckets and facing the others, stands Napoleon, a big black boar. To the right, Boxer, a huge black cart-horse with a white stripe down his nose, and Snowball, a pale pig, walk away towards the hayfield, where tall standing grass waits beyond a hedge.',
      quote: 'it was noticed that the milk had disappeared.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The first harvest',
      art: theFirstHarvest,
      alt: 'A linocut print of a mown hayfield on a summer day, the sun a red disc high on the right, with a hedgerow and round trees along the far side. In the middle two cart-horses stand harnessed side by side, with collars on their necks and no bits or reins: Boxer, black, with a white stripe down his nose, and Clover beyond him, cut in fine lines. A long pole runs back from them to a two-wheeled horse-rake with a row of curved tines and an empty iron seat. Behind the rake, on the left, a black pig walks carrying nothing, short lines at his open mouth as he calls out. In the foreground on the right two black hens and two white ducks walk across the stubble, each with a wisp of hay in its beak, and further off Benjamin the donkey stands beside a haycock.',
      quote: 'The pigs did not actually work, but directed and supervised the others.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Reading and the maxim',
      art: readingAndTheMaxim,
      alt: 'A linocut print of the farmyard on an autumn day. On the left is the tarred black end wall of the big barn: high in the gable, in big white letters, FOUR LEGS GOOD, TWO LEGS BAD, and below it THE SEVEN COMMANDMENTS in smaller white letters, seven numbered lines. In the middle Boxer, a huge black cart-horse with a white stripe down his nose, stands with his head lowered, staring at four letters traced in the dust in front of his hooves, A, B, C and D, printed in red. Beyond a post-and-rail fence, sheep lie in a stubble field, short lines at their dark faces as they bleat.',
      quote: 'Boxer could not get beyond the letter D.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The milk and the apples',
      art: theMilkAndTheApples,
      alt: 'A linocut print of the farm on a late summer day. On the left is the black, weatherboarded harness-room at the end of the stables, its door open and dark inside and a hatch shut high above it. At the door lies a heap of red apples, and beside it stands a wooden bucket of frothing milk with red hoops. A pale pig, Snowball, stands to the left of the bucket, and a big black boar, Napoleon, to the right of the door. Out in the grass in front of them Squealer, a small, round, pale pig, is caught mid-skip, his curly tail whisked out behind him, facing the others. On the right, under two apple trees hung with red apples, with a few red windfalls in the grass, Boxer, a huge black cart-horse, and Clover, cut in fine lines, stand facing him, with a hen in the grass between him and them and a sheep lying under the far tree.',
      quote: 'We pigs are brainworkers.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The news spreads',
      art: theNewsSpreads,
      alt: 'A linocut print of the English countryside on a late summer day. A flight of seven black pigeons crosses the sky from left to right. On the left three white pigeons sit in a big dark elm, and three blackbirds perch on a hedge with their beaks open. On the right a square church tower shows its bell in the belfry, and red musical notes rise from the elm, the blackbirds and the bell. Beside the tower stands the Red Lion inn, a hanging sign at its corner painted with a red lion and the words RED LION over its door and window. Through the taproom window two men sit at a table with mugs: Mr Jones, bare-headed, on the left, his mouth open, talking to a man in a cap who faces him. A furrowed field runs across the foreground.',
      quote: 'And yet the song was irrepressible.',
      quoteAt: 'bottom-left',
    },
    {
      moment: 'The Battle of the Cowshed',
      art: battleOfTheCowshed,
      alt: 'A linocut print of the farmyard on an October day, just after the battle. On the left stands the cowshed, both its doors swung wide on the dark inside, with a dung-heap by its wall. Far off, through the open five-barred gate, four men run away up the cart-track towards the road, one bare-headed and three in caps, one looking back over his shoulder, with three white geese stretched out at their heels; two corn-stacks stand in the far field. In the foreground Snowball, a pale pig, stands facing Boxer with his mouth open. Boxer, the huge black cart-horse with a white stripe down his nose, stands with his head bowed low, and two tears, cut in white, run from his eye.',
      quote: 'I have no wish to take life, not even human life',
      quoteAt: 'top-right',
    },
    {
      moment: 'Mollie leaves',
      art: mollieLeaves,
      alt: "A linocut print in two parts, divided by a white line. On the left, in Mollie's dark stall, Clover, a stout mare cut in grey hatching, stands alone with her head bowed over the straw, where a patch has been turned over to show a little pile of white lumps of sugar and three bunches of ribbon, one of them red. On the right, by day, outside an inn at the edge of a town, Mollie, the white mare, stands between the shafts of a smart dogcart whose wheel and body panel are red and the rest black. Red ribbons are plaited in her mane and a scarlet bow is tied at her forelock. A stout man in shirt-sleeves, waistcoat, check breeches and gaiters, with a red flush on his cheek, strokes her nose with one open hand and holds a lump of sugar to her mouth with the other. Three pigeons watch from the roof of the inn, whose hanging sign is blank.",
      quote: 'None of the animals ever mentioned Mollie again.',
      quoteAt: 'top-left',
    },
    {
      moment: 'The windmill plans',
      art: windmillPlans,
      alt: 'A linocut print of the inside of a shed by day, its smooth floor black. More than half the floor is covered with drawings in white chalk: toothed cog-wheels, the shafts and a crank between them, ruled lines and, at the far end, a small sketch of a windmill with four sails. On the left three books lie on the floor, one held open by a round stone, and Snowball, a pale pig, stands at the edge of the plans with his nose to the floor and a piece of chalk at his trotter. At the back a hen and a duck step carefully between the chalk lines, each with a foot lifted. In the open doorway on the right, against the daylight and a grassy knoll beyond, Napoleon, a large black boar, stands looking at the plans out of the corner of his eye, which is marked in red.',
      quote: 'a complicated mass of cranks and cog-wheels, covering more than half the floor',
      quoteAt: 'top-left',
    },
    {
      moment: 'Snowball is driven out',
      art: snowballIsDrivenOut,
      alt: 'A linocut print of the inside of the big barn on a Sunday morning, its floor deep in straw and its great door open on the daylight. On the left, below an empty raised platform and an unlit lantern, Napoleon, a large black boar, stands facing into the barn, his sidelong eye marked in red, and three short curved lines leave his snout: his whimper, the signal. In the middle Snowball, a pale pig, still facing Napoleon, springs clear with all four feet off the straw, his shadow left on the floor below him. Through the door on the right six huge black dogs in collars studded with white points come bounding in one behind another, the leader stretched out in mid-leap just behind Snowball, its jaws shut. Sheep lie in the straw at the far left, in front of the platform.',
      quote: 'uttered a high-pitched whimper of a kind no one had ever heard him utter before',
      quoteAt: 'top-left',
    },
    {
      moment: 'Napoleon is always right',
      art: napoleonIsAlwaysRight,
      alt: 'A linocut print of the farmyard on a winter day, with a bare elm behind a low hedge and the long pale wall of the big barn, its great door shut. On the left Squealer, a small, round, pale pig, skips along with his tail whisked up and his mouth open, three short lines leaving his snout as he talks. On the right Boxer, the huge black cart-horse with a white stripe down his nose, stands facing Squealer with his head a little lowered, and Clover, a mare cut in grey hatching, stands beside him. In the near yard between Squealer and Boxer three sheep lie facing Squealer, listening.',
      quote: 'If Comrade Napoleon says it, it must be right.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Working like slaves',
      art: workingLikeSlaves,
      alt: "A linocut print of the limestone quarry on a summer day, the sun a red disc high on the right. The quarry is seen in section. Low on the left a huge pale boulder, lashed round with rope, lies on a long slope that climbs to the right, and the rope runs taut up the slope to the animals hauling it. Two sheep at the tail of the rope hold it in their teeth; then Clover, a big cart-horse cut in fine lines, her head down and the rope in her teeth; and at the head, near the top of the slope, Boxer, the huge black cart-horse with a white stripe down his nose, the rope round his chest, leaning into it with his head low, one foreleg reaching up the slope and his hind legs driving back, dust kicked up at his hoofs. Behind them rises the pale, bedded face of the quarry. On the right, beyond the edge at the top of the slope, broken stone lies heaped at the bottom of the drop. In the distance, on a knoll, the first low course of the windmill's round wall has been laid, and Benjamin the donkey and Muriel the white goat, side by side, pull a small two-wheeled cart of stone towards it.",
      quote: 'All that year the animals worked like slaves.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Trade and the farmhouse beds',
      art: tradeAndTheFarmhouseBeds,
      alt: 'A linocut print of the farmyard by day. On the left stands the tarred black end wall of the big barn with THE SEVEN COMMANDMENTS in white letters, seven numbered lines; at the end of the fourth, No animal shall sleep in a bed, the words with sheets are printed in red. Muriel, the white goat, stands at the foot of the wall with her face to the letters, spelling them out, and Clover, a big cart-horse cut in fine lines, stands behind her with her head lowered, listening. From the right comes Squealer, a small, round, pale pig, his mouth open as he talks, with two huge black dogs in studded collars at his back. Behind them stands the dark farmhouse, and through its lit upstairs window a black pig can be seen asleep in a bed, his head on the pillow and a striped blanket pulled up over him.',
      quote: 'A bed merely means a place to sleep in.',
      quoteAt: 'top-right',
    },
    {
      moment: 'The windmill falls',
      art: theWindmillFalls,
      alt: 'A linocut print of the top of the knoll on a grey morning after a gale, torn cloud streaming across the sky. Down on the left, in the distance, stand the barn with tiles missing from its roof, the farmhouse and the orchard, and beside the orchard an elm lies on its side with its roots torn out of the ground; the flagstaff lies flat by the house. In the middle, where the windmill stood, there is only a low broken ring of stone wall, one piece of it a little higher than the rest, and its stones lie scattered all around. On the left Napoleon, a big black boar, has halted among the stones with his tail held stiff out behind him, and he roars at the others, his mouth open and three curved lines coming off his snout; his eye is printed in red. On the right Benjamin the donkey, Boxer the huge black cart-horse with a white stripe down his nose, and Clover, cut in fine lines, stand with their heads lowered, looking at the fallen stone.',
      quote: 'Snowball has done this thing!',
      quoteAt: 'top-left',
    },
    {
      moment: "The hens' revolt",
      art: theHensRevolt,
      alt: "A linocut print of the inside of the henhouse in winter. On the left the door stands open on a snowy yard, with a fence along it and snow falling, and one of Napoleon's huge black dogs, in a collar studded with white points, stands in the doorway on guard, looking in. High up, along the beam under the roof, seven black hens stand in a row; three of them together near the middle, the young pullets who lead the others, have their combs printed in red. Another hen flies up from the floor to join them, one wing raised. An egg is falling from the beam, and on the dark floor below three eggs lie smashed, their shells broken and their insides spilt. On the right, along the back wall, a row of four nesting boxes with straw in them stands empty.",
      quote:
        'For the first time since the expulsion of Jones, there was something resembling a rebellion.',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'Snowball the traitor',
      art: snowballTheTraitor,
      alt: 'A linocut print of the farmyard in the evening, the sky darkening. On the left stands the dark farmhouse, and one upstairs window is lit, printed in red. In front of it Squealer, a small, round, pale pig, is caught in the air in a nervous little skip, his tail whisked out, his mouth open and three curved lines coming off his snout as he talks. The animals listen to him, stupefied: a hen and a sheep resting on the ground nearest him; then Boxer, the huge black cart-horse with a white stripe down his nose, lying down facing Squealer with his forelegs tucked under him and his eye shut; and behind Boxer, Clover, a big cart-horse cut in fine lines, Benjamin the donkey and another hen.',
      quote: 'Snowball was in league with Jones from the very start!',
      quoteAt: 'top-right',
    },
    {
      moment: 'The confessions',
      art: theConfessions,
      alt: 'A linocut print of the farmyard in the late afternoon, a low red sun sinking behind the far wall of the yard. On the left, in front of the farmhouse and its open back door, stands Napoleon, a big black boar, with two round medals hanging at his neck and his head dark against the red sun. One of his dogs, a huge black dog with a studded collar, stands at his side, and another looms behind four young black pigs who stand before him with their heads hung low. On the right the other animals crouch and watch in silence: Boxer, a huge black cart-horse, lying down with his head lowered, two sheep and two hens lying close together, and Muriel, the white goat, standing further back.',
      quote: 'Napoleon now called upon them to confess their crimes.',
      quoteAt: 'top-right',
    },
    {
      moment: "Clover's vision",
      art: cloversVision,
      alt: 'A linocut print of a clear spring evening, seen from the top of a knoll. On the left stands the half-finished windmill, a round stump of stone with a broken, uneven top. Beside it the animals lie huddled together on the lit grass: a cow, two sheep, Benjamin the donkey, Muriel the white goat, two white geese and three black hens, and among them Clover, a big cart-horse cut in fine lines, lying with her head raised, looking down the hillside with a tear running from her eye. Below them on the right the farm spreads out in the level rays of the setting sun: the farm buildings with red roofs and smoke curling from their chimneys, hedged fields, ploughed land, a drinking pool, a spinney of trees and the main road.',
      quote: 'It was not for this that they had built the windmill',
      quoteAt: 'top-right',
    },
    {
      moment: 'Without cause',
      art: withoutCause,
      alt: 'A linocut print of the farmyard by day. On the right stands the tarred black end wall of the big barn: FOUR LEGS GOOD, TWO LEGS BAD in big white letters in the gable, and below it THE SEVEN COMMANDMENTS, seven numbered lines. At the end of the sixth line, No animal shall kill any other animal, the last two words, WITHOUT CAUSE, are printed in red. Muriel, the white goat, stands at the foot of the wall with her face to the letters, reading them out. Behind her Clover, a big cart-horse cut in fine lines, raises her head to the wall. On the left Benjamin the donkey stands with his back to the wall, facing away.',
      quote: "Somehow or other, the last two words had slipped out of the animals' memory.",
      quoteAt: 'top-left',
    },
    {
      moment: 'The Battle of the Windmill',
      art: battleOfTheWindmill,
      alt: 'A linocut print of the big pasture on the morning of the battle. On the right, on top of a knoll, a huge cloud of black smoke rises where the windmill stood, with a red flash at its foot, a broken stump of foundations below it and its stones flung through the air in every direction. Pigeons wheel up over the pasture, and four small men in caps run away from the knoll in both directions. On the left, in the lee of a dark wooden farm building, the animals lie flat on their bellies: Clover and Boxer with their heads down to the ground, Benjamin the donkey and Muriel the white goat with their heads bowed to the grass, and two sheep and two hens pressed low. Only Napoleon, a big black boar, stays on his feet, facing the blast.',
      quote: 'a huge cloud of black smoke was hanging where the windmill had been',
      quoteAt: 'top-left',
    },
    {
      moment: 'The whisky',
      art: theWhisky,
      alt: 'A linocut print of the farmyard at midnight under a bright moon. On the left is the tarred black end wall of the big barn: FOUR LEGS GOOD, TWO LEGS BAD in big white letters in the gable, and below it THE SEVEN COMMANDMENTS. At the end of the fifth line, No animal shall drink alcohol, the words TO EXCESS are printed in red. At the foot of the wall lie a ladder broken in two pieces, an overturned pot of white paint in a spilt white pool, a paint-brush and a lantern on its side. Squealer, a small, round, pale pig, sprawls on the ground by the ladder, lifting himself on one trotter, and three huge black dogs with studded collars stand in a ring round him. On the right, in front of the stable, the other animals watch: Boxer, a huge black cart-horse, sheep and hens, and nearest, Benjamin the donkey, nodding his head.',
      quote: 'No animal shall drink alcohol TO EXCESS.',
      quoteAt: 'top-right',
    },
    {
      moment: 'Rations and the Republic',
      art: rationsAndTheRepublic,
      alt: "A linocut print of the farmyard on a cold winter day, under a low streaked sky, with bare trees along the hedge. At the back on the right is the farmhouse, its roof printed in red, and in its garden a tall flagstaff flies a dark flag marked with a white hoof and horn. Across the yard the animals march in procession from left to right. At the head of all walks a black cockerel, crowing. Behind him come the pigs: Napoleon, a big black boar, and Squealer, a small, fat, pale pig. Next come the two cart-horses, one behind the other, Boxer, black with a white stripe down his nose, in front, and Clover, cut in fine lines, behind, each holding a pole in its mouth; stretched between the poles above Boxer's back is a dark banner marked with a white hoof and horn and the words Long live Comrade Napoleon. One of Napoleon's big black dogs, in a studded collar, walks beside the horses. A black horned cow follows them, then three sheep with their heads up, bleating, and two hens at the back.",
      quote: 'they were able to forget that their bellies were empty',
      quoteAt: 'top-left',
    },
    {
      moment: 'Boxer falls',
      art: boxerFalls,
      alt: "A linocut print of the knoll on a summer evening, the low sun printed in red among long rays across a pale sky. On the left stand the half-built stone walls of the windmill, with a pile of stone beside them. In the middle the great black cart-horse Boxer lies on the grass in his collar, between the shafts of a two-wheeled cart loaded with stone, his neck stretched out along the ground and his head, with its white stripe, lying flat; his eye is open. Clover, a mare cut in fine lines, has come down on her knees at his head and lowers her own head to his. Benjamin the donkey lies along Boxer's side, his head up and his long ears raised, his tail swinging. Far off on the right, beside the red roofs of the farm buildings, Squealer, a small pale pig, comes skipping up the slope towards them.",
      quote: 'There lay Boxer, between the shafts of the cart, his neck stretched out',
      quoteAt: 'top-right',
    },
    {
      moment: 'Boxer is taken away',
      art: boxerIsTakenAway,
      alt: "A linocut print of the farmyard at midday. On the left is the stable, its roof printed in red, its door standing open on an empty stall. In the middle a large closed van is driving away from us along the wheel ruts towards the road. Along its side is a board lettered ALFRED SIMMONDS and, beneath, in red, HORSE SLAUGHTERER. In the small window at the back of the van is Boxer's face, seen from the front, black with a white stripe down his nose, looking out. Up on the driver's seat sits a man in a low-crowned bowler hat, a whip raised over the two horses that draw the van. Following it, Clover, a mare cut in fine lines, canters at the front of the animals with her head up and her mouth open, calling; behind her come Benjamin the donkey, Muriel the white goat, a sheep, bleating, and a hen.",
      quote: 'Boxer was never seen again.',
      quoteAt: 'top-left',
    },
    {
      moment: "Squealer's story",
      art: squealersStory,
      alt: 'A linocut print of the farmyard by day. On the right stands the dark brick farmhouse, its roof printed in red. On the doorstep in front of its shut door sits Squealer, a small, fat, pale pig, up on his haunches, his eye screwed shut, lifting one trotter to his eye to wipe away a tear, which is cut as a small white drop on his cheek. On the left the other animals stand quietly facing him, listening: Clover the mare, Benjamin the donkey, Muriel the white goat, two sheep lying on the ground and two hens.',
      quote: 'Those were his very last words, comrades.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Years pass',
      art: yearsPass,
      alt: 'A linocut print of Animal Farm years later, on a pale day. In the middle stands the finished windmill, a tall stone tower with four lattice sails, sacks of milled corn piled at its door. To its right are the farm buildings, their roofs printed in red. Behind on the left, the first low courses of another windmill are rising, and two young horses haul stone towards them. In front on the left stand the three who remember the old days: Clover, an old stout mare with her head hanging low, Benjamin the donkey with his pale muzzle, and Moses the raven on a post. On the right, facing them, stand Napoleon, now an enormous black boar, and Squealer, pale and so fat that a fold of fat hangs over his eye.',
      quote: 'Years passed. The seasons came and went, the short animal lives fled by.',
      quoteAt: 'top-left',
    },
    {
      moment: 'Walking on two legs',
      art: walkingOnTwoLegs,
      alt: 'A linocut print of the farmyard on a summer evening, the low sun a red disc on the far side of the yard with its rays cut across a pale sky. Across the middle of the yard four black pigs walk in single file on their hind legs, one holding his forelegs out to keep his balance. At their head, nearest the watching animals, Squealer, a fat pale pig, strolls upright, leaning back a little over his belly. On the right, in front of the dark farmhouse and its open door, Napoleon, the biggest pig, black, walks upright with his chin raised, carrying a whip upright in his trotter with its lash hanging slack. A black cockerel crows in front of him, and two of his black dogs in studded collars leap about him. On the left the other animals stand huddled together, watching: Clover, a big cart-horse cut in fine lines, with her head flung up, Benjamin the donkey, and three sheep in front with their heads thrown back and short lines at their open mouths as they bleat.',
      quote: 'Four legs good, two legs BETTER!',
      quoteAt: 'top-left',
    },
    {
      moment: 'The single Commandment',
      art: theSingleCommandment,
      alt: 'A linocut print of the end wall of the big barn on a summer evening. The tarred black wall fills most of the picture, with a course of pale stones along its foot, and on it in big letters is a single Commandment in two lines: ALL ANIMALS ARE EQUAL in white, and below it BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS in red. Nothing else is written on the wall. On the left, past the corner of the barn, the low sun sits above a dark hedge with its rays cut across the sky. In front of the wall, side by side and seen from the side, stand Clover, a big old cart-horse cut in fine lines, with her head raised, and Benjamin the donkey, his long ears up.',
      quote: 'Are the Seven Commandments the same as they used to be, Benjamin?',
      quoteAt: 'bottom-right',
    },
    {
      moment: 'From pig to man',
      art: fromPigToMan,
      alt: "A linocut print of the farmhouse at night, seen from the garden. The house wall is dark, and the one light is a wide dining-room window. Inside, round a long table with a jug, mugs of beer and scattered playing cards, six figures in dark coats with white collars and ties sit and stand, and every one has the same heavy face: a pig's ear, a snout shortened almost to a nose, a scowling brow, several chins and a mouth open in a shout, with short red strokes of anger on the cheek. In the middle two of them stand face to face across the table, each holding up an ace of spades to the other, and nothing shows which is Napoleon and which is Mr Pilkington. Outside on the left, Clover, a big cart-horse cut in fine lines, has her head at the window and her eye on the faces, and dark laurel bushes grow along the foot of the wall.",
      quote: 'it was impossible to say which was which',
      quoteAt: 'bottom-right',
    },
  ],
  portraits: PORTRAITS,
}
