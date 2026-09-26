import type { ChapterGuide } from '@/lib/study-guides/chapter-guide'

/**
 * Animal Farm, Chapter 8 (Chapter VIII of the held edition, section-8 of
 * src/data/full-texts/animal-farm.ts). Written 26 September 2026.
 *
 * Every quotation was located in the held edition before it was used, and
 * chapter-guides.test.ts checks each one against that chapter. The chapter
 * has no title of its own; "The Battle of the Windmill" matches the whole-text
 * guide's timeline moment for this chapter.
 *
 * Things the checking turned up, recorded so nobody reintroduces them:
 * - The held edition prints the added words of the Sixth and Fifth
 *   Commandments in capitals. The analysis says "in this edition" rather than
 *   claiming the capitals as Orwell's choice, because printings differ in
 *   typography (see the note in src/data/study-guides/animal-farm.ts).
 * - The chapters overview card said Squealer's figures come while "the
 *   animals are hungrier than ever". The text says only that they seemed to
 *   work longer and be fed no better than in Jones's day, so this guide says
 *   that.
 * - The Battle of Stalingrad is dated from 17 July 1942 in one Wikipedia
 *   article and from 23 August 1942 in another; this guide says "summer 1942".
 * - The poem's line "Thou are the giver of" and the phrase "this pigs liked to
 *   invent" are misprints in the held edition. Neither is quoted.
 * - Outside words (Stalin's titles, Orwell's preface) are given in reported
 *   speech, not quotation marks: the test checks every quoted phrase against
 *   the novella, and these are not in it.
 *
 * An adversarial review the same day corrected these, each checked against
 * section-8 or a fetched source:
 * - The paddock is ploughed up and it "soon became known" that Napoleon meant
 *   to sow barley. It is not said to be sown until Chapter 9, so the key event
 *   and the quiz option no longer say it is sown here. The whole-text guide's
 *   "The whisky" moment still says "to be sown with barley".
 * - "What victory?" was called the nearest Boxer comes to doubting Squealer.
 *   In Chapter 7 he tells Squealer outright that he does not believe Snowball
 *   was a traitor, so that claim was false.
 * - Napoleon's chipped tail does not sit beside Boxer's split hoof: the hoof
 *   comes pages later, when Boxer asks what victory they have won.
 * - Boxer's last thought runs from the work of rebuilding to his age, not the
 *   other way round, and the text says only that "perhaps" his muscles are not
 *   what they were.
 * - Whymper is not Napoleon's "only link" with humans in this chapter: the
 *   pigeons carry his message to Pilkington and bring back the reply.
 * - Napoleon is never shown drinking: he is seen in the bowler hat, galloping
 *   round the yard. The character and theme entries now say what is shown.
 * - The hen's words are direct speech, not reported speech, and Boxer's "won
 *   back what we had before" is not "back where they started": the windmill
 *   is gone.
 * - The change of slogan to "Death to Pilkington" is sudden, not overnight;
 *   weeks pass between the two slogans.
 * - The 1939 double game is what the Soviet Union "has often been charged
 *   with" (Wikipedia's framing), and the pact was signed on 24 August and
 *   backdated to the 23rd.
 * - Added, from Wikipedia: Orwell had "all the animals, including Napoleon"
 *   changed to "except Napoleon" in recognition of Stalin staying in Moscow.
 *   Without it the guide read the battle only as Napoleon's cowardice.
 */
export const chapter: ChapterGuide = {
  slug: 'animal-farm',
  chapter: 8,
  part: 'Chapter 8',
  title: 'The Battle of the Windmill',
  atAGlance:
    "Napoleon withdraws into ceremony and flattery while he plays his two human neighbours off against each other, until Mr Frederick cheats him with forged banknotes and Frederick's men blow up the newly finished windmill. The animals drive the attackers off at a terrible cost and are told they have won a great victory, and the chapter ends with the pigs drinking whisky and a second Commandment quietly rewritten.",

  summary: [
    "The chapter opens a few days after the executions. Some animals remember, or think they remember, that the Sixth Commandment forbade killing, and Clover asks Benjamin to read it to her. As usual he refuses to meddle, so she fetches Muriel, and the Commandment turns out to end with the words “WITHOUT CAUSE”. The animals conclude that the killings were justified after all. Through the year they rebuild the windmill, with walls twice as thick, alongside the ordinary work of the farm, and at times it seems to them that they work longer and are fed no better than in Jones's day. Every Sunday Squealer reads out figures proving that production has risen by two, three or five hundred per cent, and the animals can no longer remember the past clearly enough to doubt him.",
    "Napoleon is now seen in public less than once a fortnight. When he does appear, he is attended by his dogs, and a black cockerel marches in front and crows before he speaks. He is said to live in separate rooms in the farmhouse and to eat alone off the Crown Derby dinner service, with two dogs to wait on him, and the gun is now to be fired on his birthday as well as on the two anniversaries. He is always called “our Leader, Comrade Napoleon”, the pigs invent grand titles for him, and the animals credit him with everything from a hen's eggs to the taste of the drinking water. Minimus writes a poem, Comrade Napoleon, which Napoleon has inscribed on the barn wall at the opposite end from the Commandments, under a portrait of himself that Squealer has painted in white paint.",
    "Through Mr Whymper, Napoleon bargains over the pile of timber with both Mr Frederick and Mr Pilkington. Rumours spread that Frederick means to attack the farm and destroy the windmill. Three hens confess to a plot, inspired by Snowball, to murder Napoleon, and are executed at once; from now on four dogs guard Napoleon's bed and a young pig, Pinkeye, tastes his food in case it is poisoned. It is given out that Napoleon has arranged to sell the timber to Pilkington, dreadful stories arrive about Frederick's cruelty to his own animals, and Napoleon declares that he never meant to deal with such a scoundrel; the pigeons' slogan becomes “Death to Frederick”. Snowball is blamed for weeds in the wheat, on the confession of a gander who then dies by eating deadly nightshade, and the animals are told that Snowball was never decorated after the Battle of the Cowshed but was censured for cowardice. In the autumn, after an exhausting effort alongside the harvest, the windmill is finished on the very day it was due, and Napoleon names it Napoleon Mill.",
    "Two days later Napoleon announces that he has sold the timber to Frederick: all through his apparent friendship with Pilkington he was secretly dealing with Frederick. Now Pilkington is insulted, the slogan becomes “Death to Pilkington”, the stories of Frederick's cruelty are declared greatly exaggerated, and Snowball, it seems, has been living in comfort at Foxwood all along. Squealer praises Napoleon's cleverness in refusing a cheque and demanding real five-pound notes, and the animals file past to look at the money, piled on a china dish beside Napoleon on the platform. Three days later Whymper races up on his bicycle with the news that the notes are forgeries. Napoleon pronounces a death sentence on Frederick, who is to be boiled alive when captured, and sends four pigeons to Pilkington with a message meant to make peace.",
    "The very next morning Frederick attacks with fifteen men and half a dozen guns. The animals are driven back into the farm buildings, and the pigeons return with Pilkington's pencilled reply: “Serves you right.” Napoleon insists that the walls are far too thick to knock down, but Benjamin sees that the men are drilling a hole for blasting powder, and the windmill is blown to pieces. Enraged, the animals charge. In a savage fight a cow, three sheep and two geese are killed and nearly every animal is wounded, but Boxer's hooves and a cow's horn do damage in return, and when Napoleon's nine dogs appear on the men's flank the attackers run. Squealer, who was absent during the fighting, meets the limping animals as a gun is fired to celebrate the victory. Boxer, bleeding and lame, asks what victory they have won, and for the first time realises that he is eleven years old. There is a funeral, two days of celebrations, and Napoleon creates a new decoration, the Order of the Green Banner, which he awards to himself.",
    "A few days later the pigs find a case of whisky in the farmhouse cellars. That night there is loud singing in the farmhouse, and Napoleon, wearing Mr Jones's old bowler hat, is seen galloping round the yard. Next morning Squealer, looking ill, announces that Napoleon is dying, and later that morning that his last act has been to make drinking alcohol punishable by death. By the following evening Napoleon is back at work. He sends Whymper to buy booklets on brewing and distilling, and orders the paddock once meant as a grazing-ground for animals past work to be ploughed up, supposedly for re-seeding, though it soon becomes known that he means to sow it with barley. One night the animals find Squealer stunned beside a broken ladder at the foot of the barn wall, with a lantern, a paint-brush and an overturned pot of white paint. Only Benjamin seems to understand, and he says nothing. A few days later Muriel finds that the Fifth Commandment forbids drinking alcohol only “TO EXCESS”.",
  ],

  keyEvents: [
    'Muriel reads the Sixth Commandment with two words the animals had forgotten, and they accept that the killings in Chapter 7 had a cause.',
    "Napoleon becomes a remote, ceremonial figure, given grand titles, credited with every success and praised in Minimus's poem, which is inscribed on the barn wall beneath his portrait.",
    'The rebuilt windmill is finished on time and named Napoleon Mill.',
    'Napoleon reveals that he has sold the timber to Frederick while pretending friendship with Pilkington, and Frederick pays with forged five-pound notes.',
    "Frederick's men attack, Pilkington refuses to help, and the windmill is blown up with blasting powder.",
    'The animals drive the men off at a heavy cost in dead and wounded; Squealer calls it a victory and Napoleon awards himself the Order of the Green Banner.',
    'The pigs get drunk on whisky, Napoleon makes alcohol punishable by death, then sends for booklets on brewing and orders the paddock meant for retired animals to be ploughed up for barley.',
    'Squealer is found at night beside a broken ladder and white paint, and the Fifth Commandment now forbids drinking only to excess.',
  ],

  closeReading: [
    {
      quote:
        'No animal shall kill any other animal WITHOUT CAUSE ... No animal shall drink alcohol TO EXCESS',
      technique: 'Typographical emphasis and a framing structure',
      analysis:
        'In this edition the added words stand out in capitals, so the reader sees them glaring from a familiar rule. Each addition is only two words and sounds reasonable, yet it turns an absolute ban into a rule with an exception, and the pigs decide what the exception covers. One amendment is found in the first paragraph and the other in the last sentence, so they frame the whole chapter: the killings and the whisky are both made lawful after the event.',
    },
    {
      quote: 'they would sooner have had less figures and more food',
      technique: 'Antithesis and understatement',
      analysis:
        "The balanced opposites set Squealer's statistics against the animals' hunger, and the plain word food wins. The phrasing is mild, “would sooner”, as if the animals hardly dare complain even in thought, and its homely wording sounds like their own thoughts rather than the pigs' official language. Propaganda can prove anything on paper while the body knows otherwise; the animals feel the gap but cannot argue with numbers they have no way of checking.",
    },
    {
      quote:
        'Under the guidance of our Leader, Comrade Napoleon, I have laid five eggs in six days',
      technique: 'Satire through bathos, in direct speech',
      analysis:
        "The official phrase of praise is attached to the most ordinary farmyard event, and the sudden drop from grand to trivial is bathos. It is darker because the speaker is a hen: in Chapter 7 the hens' eggs were taken for sale, and their protest ended only after their rations were stopped and nine of them had died. Praise has become a reflex, spoken in the regime's own vocabulary, so that animals Napoleon has wronged thank him for work they do themselves.",
    },
    {
      quote: 'Lord of the swill-bucket ... Like the sun in the sky',
      technique: 'Bathos and hyperbolic simile in a mock hymn',
      analysis:
        "Minimus's poem borrows the language of worship: exclamations, the old-fashioned “thou” and a simile that compares Napoleon's eye to the sun in the sky. Orwell punctures it from inside, because the title Lord, fit for a king or a god, is given to the master of a pig's food bucket. The comedy is the satire of the personality cult: praise so extravagant that it becomes absurd. Inscribed at the opposite end of the barn from the Seven Commandments, the poem is set up as if it stood level with the principles of the Rebellion.",
    },
    {
      quote:
        'Throughout the whole period of his seeming friendship with Pilkington, Napoleon had really been in secret agreement with Frederick.',
      technique: 'Reversal, and the contrast between appearance and reality',
      analysis:
        "The sentence turns on two words, “seeming” and “really”, which divide what the animals were shown from what was true. The narrator delivers the reversal flatly and after the event, as the animals receive it: they are struck dumb with surprise, and nobody is asked for a view. Everything they were told about the two farmers, from Frederick's cruelty to Snowball's hiding place, is reversed with it. Read as allegory, it recalls the Soviet pact with Nazi Germany in 1939, prepared in secret while Soviet talks with Britain and France were still going on.",
    },
    {
      quote: 'a piece of paper with a promise to pay written upon it',
      technique: 'Naive definition and dramatic irony',
      analysis:
        'The narrator explains a cheque in the innocent terms the animals would understand, and the description fits the banknotes just as well: they too are only paper, worth nothing if the promise behind them is false. Napoleon, praised by Squealer for trusting nobody, refuses the cheque, takes the notes and displays them on a china dish like a trophy. The reader can sense the trick coming before the animals do, and the leader who outwits every animal on the farm is outwitted by a human.',
    },
    {
      quote:
        'Even Napoleon, who was directing operations from the rear, had the tip of his tail chipped by a pellet.',
      technique: 'Bathos and ironic juxtaposition',
      analysis:
        "The sentence begins like praise for a leader sharing his soldiers' danger, “Even Napoleon”, then undercuts itself twice: he was at the back, and his wound is the tip of a tail. It comes straight after the deaths of a cow, three sheep and two geese, so a scratch is set against lives. Napoleon later creates the Order of the Green Banner and confers it on himself. The contrast with Snowball, whose back was streaked with blood as he led the charge in Chapter 4, is left for the reader to draw.",
    },
    {
      quote: 'Then we have won back what we had before ... That is our victory',
      technique: 'Dialogue and redefinition',
      analysis:
        "Boxer's short, literal sentence states the plain truth: after all their losses the animals have only regained the ground they held before, and the windmill is gone. Squealer does not deny it; he simply renames it, and four words close the argument. This is the regime's method in miniature, changing the meaning of a word rather than the facts, as the Commandments are changed. Boxer is strong enough to ask the question, but a moment later he is bracing himself for the work of rebuilding, and wondering for the first time whether his strength is failing.",
    },
  ],

  characters: [
    {
      name: 'Napoleon',
      development:
        "The chapter shows Napoleon at the height of his power and at his most exposed. He withdraws from view behind ritual: the cockerel, the dogs, the Crown Derby china, the birthday gun. He is guarded more closely than ever, with four dogs at his bed and Pinkeye tasting his food. His famous cunning fails him: Frederick cheats him and the windmill named after him is destroyed. In the battle he directs operations from the rear, yet when the windmill explodes he is the only animal who does not throw himself flat. He answers the loss of the windmill with ceremony, awarding himself a medal, and once the whisky is found he is seen galloping round the yard in Mr Jones's bowler hat.",
    },
    {
      name: 'Squealer',
      development:
        "Squealer is the regime's voice throughout. He reads the Sunday figures, weeps as he speaks of Napoleon's wisdom, persuades the animals that their memories of Snowball's courage are at fault, and insists that a battle which cost them the windmill was a victory. He is absent from the fighting and reappears beaming. He brings the news of Napoleon's illness, announcing that “Comrade Napoleon was dying!”, and at night he is found beside a broken ladder and a pot of white paint: the closest the novella comes to showing how the Commandments are changed.",
    },
    {
      name: 'Boxer',
      development:
        'Boxer fights bravely, is badly hurt and stays loyal. His question “What victory?” challenges Squealer, as he did over Snowball in Chapter 7, but he lets the answer stand and braces himself to rebuild. For the first time he realises that he is eleven years old and wonders whether his great strength is fading, and in the same weeks the paddock meant for animals past work is ploughed up for barley. Both details prepare for his fate in Chapter 9.',
    },
    {
      name: 'Benjamin',
      development:
        "Benjamin knows more than he says. He refuses to read the Sixth Commandment for Clover, yet he is the one who sees that the men are about to pack blasting powder into the windmill, and he nods knowingly at Squealer's fall but will say nothing. One reading is that Orwell uses him to show the clever onlooker whose understanding changes nothing because he will not act on it.",
    },
    {
      name: 'Clover and Muriel',
      development:
        "Clover's sense that something is wrong makes her ask for the Sixth Commandment to be read, and Muriel, who can read, finds the added words both times. Their memories were right, but they trust the wall over their memories and conclude that they had remembered wrongly. After the battle Clover and Boxer pull the wagon that serves as a hearse, working and carrying out orders as she resolved to in Chapter 7.",
    },
    {
      name: 'Mr Frederick',
      development:
        'Frederick, the owner of Pinchfield, is the more dangerous neighbour: rumoured to be plotting an attack, reported to be cruel to his animals, and shrewder than Napoleon. He pays for the timber with forged notes, attacks with guns and blasting powder, and runs when the dogs appear on his flank. Read as allegory, he stands for Hitler and Nazi Germany.',
    },
    {
      name: 'Mr Pilkington',
      development:
        "Pilkington, of Foxwood, is courted through the summer, then suddenly dropped and insulted, and when the attack comes he answers Napoleon's appeal with a pencilled note of three words. The animals distrust him as a human but prefer him to Frederick. In the story, Napoleon's double-dealing leaves the farm to face Frederick alone. Read as allegory, Pilkington stands for the Western Allies before the Second World War.",
    },
    {
      name: 'Mr Whymper',
      development:
        "The solicitor is Napoleon's go-between with the human world. He conducts the timber negotiations, races up on his bicycle, deadly pale, with the news of the forgery, and is later sent to buy booklets on brewing and distilling. The regime that preaches hatred of Man depends on a human to do its business.",
    },
    {
      name: 'Minimus',
      development:
        'The pig poet whose song replaced Beasts of England in Chapter 7 now writes Comrade Napoleon. His verse shows the arts turned into flattery: the poem is not about the farm or the animals but about the leader, and it is inscribed on the barn wall like a new commandment.',
    },
    {
      name: 'The dogs',
      development:
        "The dogs are both bodyguard and weapon. Two wait on Napoleon at meals, four guard his bed, and the nine who appear on the men's flank turn the battle. After Squealer's fall they form a ring round him and take him back to the farmhouse, so force protects the regime's secrets as well as its leader.",
    },
    {
      name: 'Snowball',
      development:
        "Snowball never appears, but every fact about him changes to suit Napoleon's policy. He is blamed for a murder plot and the weeds in the wheat, his courage at the Battle of the Cowshed is rewritten as cowardice, and his hiding place moves from Pinchfield to Foxwood the moment Napoleon changes sides.",
    },
  ],

  themes: [
    {
      theme: 'Power and Corruption',
      development:
        "Napoleon's rule grows more personal and more luxurious: separate rooms, fine china, a food taster, a medal he awards himself, and at last Jones's whisky and bowler hat. The paddock meant for retired animals is ploughed up for barley, and the booklets on brewing suggest what the barley is for. Corruption is also shown as weakness: the leader who controls everything on the farm is easily cheated by a human neighbour, and the animals pay for his mistake.",
    },
    {
      theme: 'Language and Propaganda',
      development:
        "Squealer's figures, the titles and the poem, the sudden change of slogan from “Death to Frederick” to “Death to Pilkington”, the renaming of defeat as victory and the two amended Commandments all show language replacing reality. Orwell also shows its limits: the animals would rather have food than figures, and Boxer asks what victory they have won. The question is answered with a new definition, not a fact.",
    },
    {
      theme: 'Revolution and Betrayal',
      development:
        "In Chapter 1 Old Major told the animals never to drink alcohol, touch money or engage in trade. In this chapter Napoleon trades with humans, is cheated over money and wears Jones's hat, and the pigs find Jones's whisky. The last discovery of the chapter shows the rule against drinking bent to fit what the pigs already do, and the revolution moves another step back towards Manor Farm.",
    },
    {
      theme: 'Class and Labour',
      development:
        'The animals labour for a year, with the harvest at the same time, to rebuild the windmill, and it is destroyed in moments. The ones who do the work do the dying: a cow, three sheep and two geese. Boxer, the hardest worker, begins to wonder whether his strength is failing just as the land set aside for old workers is taken away. The pigs receive the ceremony, and soon the barley.',
    },
    {
      theme: 'Education and Ignorance',
      development:
        'The animals cannot check the figures or remember the past, most of them cannot read the wall for themselves, and memory is overruled again and again: Squealer convinces them that their memories of Snowball are at fault, and twice they decide they had remembered a Commandment wrong. Muriel and Benjamin can read, but reading helps only when someone acts on it, and in this chapter nobody does.',
    },
  ],

  context: [
    {
      heading: 'The pact of 1939 and the invasion of 1941',
      body: "Read as allegory, Frederick stands for Hitler's Germany and Pilkington for the Western Allies. In 1939 the Soviet Union held open talks on an alliance with Britain and France, and it has often been charged with playing a double game by secretly considering German proposals at the same time. It suspended the military talks on 21 August, and the Nazi-Soviet (Molotov-Ribbentrop) Pact was signed in Moscow on 24 August and dated 23 August 1939. Under a trade pact in 1940 the Soviet Union sent raw materials such as oil and wheat to Germany. On 22 June 1941 Germany invaded the Soviet Union in Operation Barbarossa, although Stalin had received intelligence that an attack was coming. Napoleon's secret deal, the timber sold to Frederick, the forged notes and the sudden attack follow that pattern, squeezed from nearly two years into a few days.",
    },
    {
      heading: 'The Battle of the Windmill and the war in the east',
      body: 'Critics including Peter Edgerly Firchow and Peter Davison read the Battle of the Windmill as the Second World War, with the Battles of Moscow and Stalingrad in mind. The German attack on Moscow was fought off between October 1941 and January 1942, and the Battle of Stalingrad, from summer 1942 to 2 February 1943, ended in a Soviet victory and is considered the deadliest battle of the war. The city had been renamed Stalingrad in honour of Stalin in 1925, one of many places renamed after him, and the new name of the windmill, Napoleon Mill, can be read as an echo of that habit. Orwell said the book was not written down until about the end of 1943, so he wrote this chapter with those events behind him. He also had his publisher change one detail: he had first written that all the animals took cover, Napoleon included, and the text now reads “except Napoleon”, in recognition of Stalin’s decision to stay in Moscow during the German advance.',
    },
    {
      heading: 'The cult of Stalin',
      body: "Stalin accepted titles such as Father of Nations and Leader of Progressive Humanity, the Soviet press called him wise and a genius, and a frequent metaphor cast him as the sun. A. O. Avdeenko's Hymn to Stalin, taken from a speech he made in 1935, thanked Stalin for the writer's own joy, and propaganda came to credit Stalin alone with the country's well-being. Chapter 8 compresses all of this into a farmyard: the grand titles, the sun simile in Minimus's poem, the portrait on the barn wall and the hen who thanks Napoleon for her eggs. Even the Order of the Green Banner can be read as an echo of the Order of the Red Banner, the first Soviet military decoration, founded in 1918.",
    },
    {
      heading: 'Orwell on the history in the book',
      body: 'In his preface to the Ukrainian edition, written in March 1947 and surviving only as a translation back into English, Orwell said that after returning from Spain he thought of exposing what he called the Soviet myth in a story almost anyone could understand. He added that the episodes are taken from the real history of the Russian Revolution but handled schematically, with their order changed for the symmetry of the story. Chapter 8 shows the method at work: a pact, an invasion and years of war become one timber deal, a few days and a single battle on a farm.',
    },
  ],

  structure:
    "Chapter 8 is the longest of the ten chapters and the novella's last battle, which the narrator explicitly sets against the Battle of the Cowshed in Chapter 4. Then Snowball led from the front and the victory was easy; now Napoleon directs from the rear and the victory costs the windmill. The chapter is framed by two amended Commandments, one discovered in its first paragraph and one in its last sentence, so the war sits between two quiet rewritings of the law. The pace quickens: the opening pages cover a year in summary, then time is counted in days as the timber deal collapses into invasion. The windmill falls for the second time, repeating Chapter 6, and Boxer's age and the ploughed-up paddock prepare for Chapter 9.",

  vocabulary: [
    {
      term: 'Retinue',
      meaning:
        'A group of attendants who accompany an important person. Napoleon appears with his retinue of dogs, like a king with his guards.',
    },
    {
      term: 'Crown Derby',
      meaning:
        'Fine china made in Derby, England, sold under the Crown Derby name since 1773. Napoleon eats alone off the Crown Derby dinner service that had been kept in the glass cupboard in the drawing-room.',
    },
    {
      term: 'Surmounted',
      meaning:
        "Topped by. Minimus's poem on the barn wall is surmounted by Squealer's portrait of Napoleon, so the leader's image sits above the words that praise him.",
    },
    {
      term: 'Machinations',
      meaning:
        'Secret, scheming plots. The narrator uses the word for the crimes blamed on Snowball, such as the weed seeds in the wheat, repeating the official story as if it were proven.',
    },
    {
      term: 'Censured',
      meaning:
        'Formally criticised or condemned. The animals are now told that Snowball was censured for cowardice at the Battle of the Cowshed, not decorated.',
    },
    {
      term: 'Pensioner',
      meaning:
        'Someone who lives on regular payments from another. Snowball is now said to have been a pensioner of Pilkington for years, paid by the enemy.',
    },
    {
      term: 'Title-deeds',
      meaning:
        "The legal documents that prove who owns a piece of land. Frederick is said to have bribed the magistrates and police to ask no questions if he gets hold of the farm's title-deeds.",
    },
    {
      term: 'Conciliatory',
      meaning:
        'Meant to make peace or soothe anger. After the forgery Napoleon sends Pilkington a conciliatory message, days after insulting him.',
    },
    {
      term: 'Beatifically',
      meaning:
        'With a blissful, saintly look. Napoleon smiles beatifically beside the money, a word with religious overtones that suits the worship around him.',
    },
    {
      term: 'Sallied forth',
      meaning:
        "Rushed out to attack. The animals sally forth boldly against Frederick's men, but the guns soon drive them back.",
    },
    {
      term: 'Lamentation',
      meaning:
        'A loud expression of grief. A cry of lamentation goes up when Squealer announces that Napoleon is dying.',
    },
    {
      term: 'Brewing and distilling',
      meaning:
        'Making beer (brewing) and strong spirits such as whisky (distilling). Napoleon sends for booklets on both the day after he is back at work.',
    },
  ],

  examQuestion: {
    question:
      'Starting with Chapter 8, explore how Orwell presents the ways the pigs control what the other animals believe. Write about Chapter 8 and about the novella as a whole.',
    guidance: [
      'Decide your line of argument first. Control of belief here means propaganda, rewritten rules, rewritten history and fear. One strong argument is that the pigs rule less by single lies than by teaching the animals to distrust their own memories.',
      "Open with the Sixth Commandment at the start of Chapter 8 and the animals' conclusion that they had remembered wrongly. Link back to the Commandments painted in Chapter 2 and forward to the single Commandment left in Chapter 10.",
      "Analyse Squealer's Sunday figures and the phrase “less figures and more food”, then his exchange with Boxer after the battle, where defeat is renamed victory. Compare his argument about the milk and apples in Chapter 3.",
      "Explore the cult of personality: the titles, the hen's five eggs, Minimus's poem and the Order of the Green Banner. Show praise becoming a duty, and trace it from Napoleon's seizure of power in Chapter 5 to his transformation in Chapter 10.",
      "Use Snowball as evidence: in this chapter his hiding place moves with Napoleon's diplomacy and his courage becomes cowardice. Set that against what Chapter 4 actually showed.",
      'Bring in context briefly and precisely, for example the sudden switch from Pilkington to Frederick read alongside the 1939 pact, or the cult of Stalin. Keep it tied to what Orwell is showing about power.',
      "Conclude with the limits of control: Boxer's question “What victory?” and Benjamin's silence at the ladder show that the truth survives but nobody acts on it, which leads to Boxer's fate in Chapter 9.",
    ],
    tips: [
      'Quote short phrases and build them into your own sentences. A few precise words analysed closely are worth more than a long quotation.',
      'Name a technique only when you can say what it does. The dramatic irony of the ladder scene works because the reader understands what the animals cannot.',
      'Treat the allegory as a reading, not a code: say that Frederick can be read as Hitler, then explain what the episode shows about power in its own right.',
      "This is a GCSE-style question. Check your own board's paper for whether an extract is printed, how long you have and how the marks are given.",
    ],
  },

  quiz: [
    {
      question: 'What does Muriel find at the end of the Sixth Commandment?',
      options: ['To excess', 'Without cause', 'With sheets', 'Except in war'],
      answer: 1,
      explanation:
        'The Commandment now forbids killing any other animal without cause, so the animals decide the executions in Chapter 7 were lawful. To excess is added to the Fifth Commandment later in this chapter, and with sheets to the Fourth in Chapter 6.',
    },
    {
      question: 'Who writes the poem Comrade Napoleon?',
      options: ['Squealer', 'Muriel', 'Moses', 'Minimus'],
      answer: 3,
      explanation:
        "Minimus writes it, and Napoleon has it inscribed on the barn wall opposite the Seven Commandments. Squealer's contribution is the portrait of Napoleon above it, in white paint.",
    },
    {
      question: "Why is Frederick's payment for the timber worthless?",
      options: [
        'The five-pound notes are forgeries',
        'His cheque is refused by the bank',
        'Whymper keeps the money for himself',
        'The pigs spend it all on whisky',
      ],
      answer: 0,
      explanation:
        'Napoleon refuses a cheque and demands real five-pound notes, which Squealer praises as proof of his cleverness. Three days later Whymper brings the news that the notes are forged.',
    },
    {
      question: 'How does Pilkington answer when the animals need help during the attack?',
      options: [
        'He sends men with guns',
        'He demands the timber in return',
        'He sends a note saying it serves them right',
        'He sends no answer at all',
      ],
      answer: 2,
      explanation:
        'The pigeons return with a scrap of paper on which three words are pencilled. Days earlier Napoleon had broken off relations with Foxwood and insulted Pilkington.',
    },
    {
      question: 'What does Squealer say their victory consists of?',
      options: [
        'Capturing Frederick and his men',
        'Driving the enemy off and winning back every inch of the farm',
        'Saving the windmill from destruction',
        'Winning Pilkington back as an ally',
      ],
      answer: 1,
      explanation:
        'Boxer points out that they have only won back what they had before, and Squealer replies that this is their victory. As Boxer says, the windmill they had worked on for two years is gone.',
    },
    {
      question: 'What happens to the Order of the Green Banner?',
      options: [
        'It is given to Boxer for his courage',
        'It is given to the nine dogs',
        'It is given to every animal who fought',
        'Napoleon awards it to himself',
      ],
      answer: 3,
      explanation:
        'Napoleon creates the decoration after the Battle of the Windmill and confers it on himself, although he directed the fighting from the rear and his only wound was to the tip of his tail.',
    },
    {
      question: 'What is Squealer most likely doing when he falls from the ladder at night?',
      options: [
        'Changing one of the Commandments on the barn wall',
        'Painting a new portrait of Napoleon',
        'Keeping watch for Snowball',
        'Repairing the roof of the big barn',
      ],
      answer: 0,
      explanation:
        'The narrator never says so, which is the point. The ladder, lantern, brush and white paint lie at the foot of the wall where the Commandments are written, and a few days later Muriel finds the Fifth Commandment changed. Only Benjamin seems to understand.',
    },
    {
      question: 'What happens to the paddock beyond the orchard?',
      options: [
        'It becomes a grazing-ground for retired animals',
        'It becomes the site of the new windmill',
        'It is ploughed up, to be sown with barley',
        'It becomes a burial ground for the dead of the battle',
      ],
      answer: 2,
      explanation:
        'It had been meant as grazing for animals past work, but Napoleon has it ploughed up, and it soon becomes known that he means to sow barley. The order comes a week after he sends for booklets on brewing and distilling, and in the same weeks that Boxer realises he is eleven.',
    },
  ],

  sources: [
    {
      label:
        "The held edition, src/data/full-texts/animal-farm.ts (Project Gutenberg Australia transcription, eBook 0100011h): every quotation and every event, Chapter VIII, with Chapters I, II, IV, VI, VII and IX for the cross-references to Old Major, the Commandments as first painted, Snowball at the Battle of the Cowshed, the storm and the altered Fourth Commandment, the hens, Boxer's doubt about Snowball, Clover's resolve and Minimus's song, and the barley sown by Chapter IX",
      url: 'https://gutenberg.net.au/ebooks01/0100011h.html',
    },
    {
      label:
        "Wikipedia, Animal Farm: Frederick's forged notes read as the Molotov-Ribbentrop Pact of August 1939; the alliance and invasion as alluding to the pact and Operation Barbarossa; Peter Edgerly Firchow and Peter Davison on the Battle of the Windmill as the Second World War, with Stalingrad and Moscow; Orwell having the publisher change the animals taking cover, Napoleon included, to “except Napoleon”, in recognition of Stalin's decision to remain in Moscow during the German advance",
      url: 'https://en.wikipedia.org/wiki/Animal_Farm',
    },
    {
      label:
        'LitCharts, Animal Farm, Mr Pilkington: he represents the Allies before the Second World War',
      url: 'https://www.litcharts.com/lit/animal-farm/characters/mr-pilkington',
    },
    {
      label:
        'LitCharts, Animal Farm, Mr Frederick: he symbolises the fascist Germans and Hitler in particular',
      url: 'https://www.litcharts.com/lit/animal-farm/characters/mr-frederick',
    },
    {
      label:
        'Wikipedia, Molotov-Ribbentrop Pact: signed in Moscow on 24 August 1939 and backdated to 23 August, by Molotov and Ribbentrop; the Soviets often charged with a double game of open talks with Britain and France while secretly considering German proposals; the Soviets still negotiating with the British and French missions when Stalin entered the secret pact; tripartite military talks suspended on 21 August',
      url: 'https://en.wikipedia.org/wiki/Molotov%E2%80%93Ribbentrop_Pact',
    },
    {
      label:
        'Wikipedia, Operation Barbarossa: the German invasion from 22 June 1941; the 1940 trade pact sending Soviet oil and wheat to Germany; Stalin receiving intelligence of the attack',
      url: 'https://en.wikipedia.org/wiki/Operation_Barbarossa',
    },
    {
      label:
        "Wikipedia, Battle of Moscow: October 1941 to January 1942, the Soviet defence thwarting Germany's attack on Moscow",
      url: 'https://en.wikipedia.org/wiki/Battle_of_Moscow',
    },
    {
      label:
        'Wikipedia, Battle of Stalingrad: ended 2 February 1943 with the surrender of the German 6th Army, a Soviet victory, considered the deadliest battle of the Second World War; the campaign extended to Stalingrad in July 1942',
      url: 'https://en.wikipedia.org/wiki/Battle_of_Stalingrad',
    },
    {
      label:
        'Wikipedia, Volgograd: Tsaritsyn renamed Stalingrad in honour of Stalin on 10 April 1925',
      url: 'https://en.wikipedia.org/wiki/Volgograd',
    },
    {
      label:
        "Wikipedia, Joseph Stalin's cult of personality: titles he accepted, such as Father of Nations and Leader of Progressive Humanity; the press calling him Wise and Genius; Stalin as the sun; a renaming craze of towns, villages and cities; Avdeenko's Hymn to Stalin, from a speech of 1935; Stalin alone the professed cause of Soviet well-being",
      url: 'https://en.wikipedia.org/wiki/Joseph_Stalin%27s_cult_of_personality',
    },
    {
      label:
        'Wikipedia, Order of the Red Banner: the first Soviet military decoration, established 16 September 1918',
      url: 'https://en.wikipedia.org/wiki/Order_of_the_Red_Banner',
    },
    {
      label:
        'Orwell, preface to the Ukrainian edition (March 1947), at the Orwell Foundation: exposing the Soviet myth in a story almost anyone could understand; episodes from the history of the Russian Revolution treated schematically, their order changed for symmetry. The English original is lost; the text is a back-translation',
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/preface-to-the-ukrainian-edition-of-animal-farm/',
    },
    {
      label:
        'Orwell, The Freedom of the Press (proposed preface, first published 1972), at the Orwell Foundation: the book first thought of in 1937 but not written down until about the end of 1943',
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/the-freedom-of-the-press/',
    },
    {
      label:
        'Wikipedia, Royal Crown Derby: porcelain made in Derby, known as Crown Derby from 1773',
      url: 'https://en.wikipedia.org/wiki/Royal_Crown_Derby',
    },
  ],
}
