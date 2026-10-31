import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Figurative Language Finder: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/figurative-language-finder.ts). Written with AI
 * on 16 October 2026 and checked against each sentence and every device it can be
 * offered beside, as the founder decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: explanations for the 252 new questions
 * (232 of them real lines from 32 texts out of UK copyright, each explained
 * against its scene; pathetic fallacy as a ninth device; a near neighbour
 * beside most tier-2 questions; the two meanings of a pun; what a word, image or
 * sound suggests, with a why-not for every wrong option), and every one of the
 * 55 kept questions rewritten where it taught the old tells (a simile "uses
 * like or as") or named another question's trigger word. Written with AI and
 * checked against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 31 October 2026, and 35 explanations
 * corrected. Facts about the texts: the moles line in The Sign of Four is
 * Watson's, not Holmes's; Owen's soldier hears the boys now, not before the
 * war; Midas did not starve; Daisy's voice revives Nick, since Gatsby is
 * indoors; Pip is walking home at the start of Great Expectations Chapter 4,
 * not lying awake; Time's sickle is Father Time's, not the Grim Reaper's;
 * "Yours is the Earth" is the last line but one of "If"; Poole saw the masked
 * figure among the crates; the title Theseus mocks is "tedious brief" and
 * "very tragical mirth"; "bestrid", "pleasures" and "glorious" quoted as
 * printed. Tips that named a word another question turns on ("crash",
 * "thud"); pathetic fallacy stretched to mean foreshadowing (Jane Eyre's
 * chestnut, Pip's storm, Casca's tempest); and the `not` entries of the
 * options the check replaced.
 */
export const EXPLANATIONS: GameExplanations = {
  'The new pupil was as quiet as a switched-off radio on her first morning.': {
    why: "The pupil is compared with a switched-off radio: she was 'as quiet as' one. The sentence keeps the two things separate and says one is like the other, which makes it a simile.",
    more: 'A radio is usually full of chatter, but a switched-off one makes no sound at all. The simile suggests she is completely silent, perhaps not her usual self, because she is nervous on her first day.',
    tip: "When you write about a simile, explain what the two things share: 'The simile suggests she is so nervous that she has gone completely silent.'",
  },
  'My rucksack felt like a sack of bricks by the end of the school trip.': {
    why: 'The rucksack is compared with a sack of bricks. The sentence does not say the rucksack was bricks, only that it felt like them, so this is a simile.',
    more: 'Bricks are heavy, hard and awkward to carry, so the image makes us feel the weight dragging on the writer. It also exaggerates a little, as many similes do: few rucksacks are really that heavy.',
    tip: 'Use a simile to show how something feels, not just how it looks. Ask what a tired body, a cold room or a long wait reminds you of.',
  },
  'The frightened kitten trembled like a leaf caught in an autumn gale.': {
    why: "The kitten's trembling is compared with a leaf shaking in a strong wind. The comparison is made openly, and the kitten stays a kitten, so this is a simile.",
    more: 'A leaf in a gale is small, light and helpless against something much stronger. The simile makes the kitten seem tiny and powerless, so we feel sorry for it.',
    tip: 'Pick a simile whose picture matches the feeling you want. A leaf in a storm suits fear; a leaf drifting on a pond would suit calm.',
  },
  'Her explanation was as clear as a freshly cleaned window.': {
    why: "Her explanation is compared with a freshly cleaned window: it was 'as clear as' one. An open comparison between two different things is a simile.",
    more: 'You can see straight through a clean window with nothing in the way. The simile suggests her explanation was easy to understand, with no confusing smudges.',
    tip: "Some similes are worn out, such as 'as clear as crystal'. Inventing a fresh one, like this window, makes your own writing stand out.",
  },
  'The athlete shot off the starting line like an arrow loosed from a bow.': {
    why: "The athlete's start is compared with an arrow fired from a bow. The athlete is not said to be an arrow, only to move like one, so this is a simile.",
    more: "An arrow leaves a bow suddenly, fast and dead straight. The simile shows the athlete's explosive speed and focus in a single picture.",
    tip: "In a description of action, one simile can do the work of several adverbs. 'Like an arrow' says fast, sudden and straight all at once.",
  },
  'The old floorboards were as cold as a frozen pond beneath our bare feet.': {
    why: "The floorboards are compared with a frozen pond: they were 'as cold as' one. The two stay separate things, compared openly, so this is a simile.",
    more: 'Most of us can imagine the shock of icy cold on bare feet. The simile makes the reader feel the cold through their own body, not just read about it.',
    tip: 'Similes that use the senses, such as touch, sound and smell, bring a description to life. Ask yourself what the moment feels like, not only what it looks like.',
  },
  'The classroom buzzed like a beehive whenever the teacher stepped out.': {
    why: 'The noisy classroom is compared with a beehive. It does not say the classroom is a beehive, only that it is like one, so this is a simile.',
    more: "A sentence can use more than one device. 'Buzzed' is also onomatopoeia, because it sounds like the noise it names. Together they suggest a room full of restless pupils, all talking at once.",
    tip: "If you spot two devices in one sentence, write about both: 'The simile and the onomatopoeia of buzzed make the class sound like a swarm.'",
  },
  'The library was a treasure chest waiting to be unlocked by curious minds.': {
    why: 'The library is called a treasure chest. The sentence does not say it is like one; it says it was one, so this is a metaphor, not a simile.',
    more: "Treasure is precious and stays hidden until someone opens the chest. The metaphor suggests the books hold valuable knowledge for anyone curious enough to look. 'Waiting' also gives the chest a hint of personification.",
    tip: "To explain a metaphor, ask what the two things have in common: 'The metaphor presents books as treasure, valuable and ready to be discovered.'",
  },
  'My grandfather is a walking encyclopaedia of village history.': {
    why: 'The grandfather is called a walking encyclopaedia: the sentence says he is one, not that he is like one. Saying that one thing is another makes a metaphor.',
    more: 'An encyclopaedia is a book full of facts. Calling him a walking one suggests he can answer any question about the village. Like many metaphors, it also exaggerates for effect.',
    tip: 'You can describe people with metaphors too. Choose an object that sums up one strong quality, such as a person who is a human alarm clock.',
  },
  'The exam hall was a desert of silent, sweating students.': {
    why: 'The exam hall is called a desert. The sentence says it was one rather than comparing it openly with one, so this is a metaphor.',
    more: "A desert is hot, empty and silent, and people struggle to survive there. The metaphor makes the exam feel like an ordeal. 'Silent, sweating students' also uses alliteration, so one sentence can hold two devices.",
    tip: 'Explore the ideas a metaphor brings to mind. A desert suggests heat, silence and struggle: say how each one fits the exam hall.',
  },
  'Fear is a thief that steals your best ideas during a presentation.': {
    why: 'Fear is called a thief: the sentence says fear is one, not that it is like one. Saying that one thing is another makes a metaphor.',
    more: "Because the thief 'steals', fear is also given a human action, which is personification. A thief takes something valuable without asking, so the image shows how nerves can rob you of ideas you had prepared.",
    tip: "Metaphors are useful for feelings, which are hard to describe directly. Try one of your own: 'Worry is a heavy bag I carry everywhere.'",
  },
  'The internet is an ocean, and most of us only paddle in the shallows.': {
    why: "The internet is called an ocean, and the idea carries on: most of us only 'paddle in the shallows' of it. Saying that one thing is another makes a metaphor.",
    more: 'A metaphor that carries on over several words is an extended metaphor. An ocean is huge and deep, so the image suggests most people only use a tiny, safe part of what the internet holds.',
    tip: 'Extending a metaphor makes it stronger. If you call something an ocean, keep going with words such as dive, waves or depths.',
  },
  'Her words were daggers that found every weak point in his argument.': {
    why: 'Her words are called daggers. Words cannot really cut, but the sentence says they are blades rather than that they are like blades, so this is a metaphor.',
    more: 'Daggers are small, sharp and deadly. The metaphor suggests her words were precise and painful, aimed at exactly the places where his argument was weakest.',
    tip: 'When you analyse a metaphor, zoom in on one word and say what it suggests: here, that her words were sharp, deliberate and meant to wound.',
  },
  'The motorway was a ribbon of red brake lights winding into the night.': {
    why: 'The motorway is called a ribbon. The long line of red lights is described as if it really were one, with no word of comparison, so this is a metaphor.',
    more: "A ribbon is long, thin and curving, so the image helps us see the traffic as one glowing line twisting into the dark. 'Ribbon of red' also uses alliteration, a second device in the same sentence.",
    tip: 'Metaphors help a reader see a big scene from far away. In descriptive writing, try one: a river as a silver thread, or a city at night as a carpet of lights.',
  },
  'The wind hammered angrily at the windows, demanding to be let inside.': {
    why: 'The wind is given human feelings and actions: it is angry, and it demands to be let in. Giving human qualities to something that is not human is personification, the precise name for this kind of metaphor.',
    more: 'The wind sounds like a furious person banging on the door. This makes the storm feel threatening, as if it wants to get at the people inside.',
    tip: 'Personification works well for weather. Choose verbs that show a mood: rain that sulks, wind that prowls, fog that creeps.',
  },
  'The ancient clock groaned before it reluctantly chimed the hour.': {
    why: "The clock groans and chimes 'reluctantly', as an unwilling person might. Reluctance is a human feeling, so this is personification, which is more precise here than calling it a metaphor.",
    more: "Only a living thing can feel reluctant, so the clock seems old and weary, like an elderly person getting up from a chair. 'Groaned' also hints at the creaking sound it makes.",
    tip: 'To personify an object, give it a feeling it could never really have, then choose a verb to match. Try it with a car that will not start on a frosty morning.',
  },
  'Opportunity knocked softly, but nobody in the office bothered to answer.': {
    why: 'Opportunity is an idea, not a person, yet here it knocks softly at the door like a visitor. Giving a human action to an idea is personification, the precise name for this kind of metaphor.',
    more: "The sentence plays on the saying 'opportunity knocks', which means a chance comes along. Because the knock is soft and nobody answers, it suggests the people in the office missed a good chance by not paying attention.",
    tip: 'Ideas such as hope, time or fear can be personified too. It makes an idea easier to picture, because the reader can see it act.',
  },
  'The hungry waves snatched at the sandcastle until nothing remained.': {
    why: "The waves are 'hungry' and they 'snatched' at the sandcastle, like a greedy person grabbing. Giving human qualities to something that is not human is personification.",
    more: 'Hunger never stops, so the waves keep grabbing until the sandcastle is gone. The personification makes the sea seem greedy and destructive.',
    tip: 'To analyse personification, pick out the words that make the thing seem alive, here a hunger and a grab, and say what each one suggests.',
  },
  'Dawn tiptoed over the hills, careful not to wake the sleeping town.': {
    why: 'Dawn is given human actions and feelings: it tiptoes, and it is careful not to wake anyone. Giving human qualities to something that is not human is personification.',
    more: "Tiptoeing is quiet and gentle, so the personification shows the light arriving slowly and softly. 'The sleeping town' is personified too, which makes the whole scene feel peaceful.",
    tip: 'Gentle verbs create a calm mood and violent verbs create tension. Picture the same dawn crashing over the hills instead, and notice how the mood changes.',
  },
  'The stubborn jar refused to open no matter how hard she twisted the lid.': {
    why: "The jar is called stubborn and it 'refused', as if it were a person deciding not to help. Giving a human will to an object is personification: a kind of metaphor, but personification is the precise name.",
    more: 'Most of us know the frustration of a jar that will not open. The personification turns it into a battle of wills, which makes an ordinary moment funny.',
    tip: 'Personification can add humour to everyday writing. Give an object a personality: a printer that sulks, or a door that refuses to close.',
  },
  'My alarm clock screamed at me, furious that I had ignored it twice.': {
    why: 'The alarm clock screams and is furious, as if it were an angry person. Giving human feelings and actions to an object is personification.',
    more: 'An alarm cannot feel anything, but the writer imagines it is cross at being ignored twice. This turns a familiar, annoying moment into something funny and makes the noise seem even louder.',
    tip: 'Personification can show how a character feels about something: to a sleepy person, an alarm clock really can seem furious.',
  },
  'The brave builders battled bitter blizzards to finish the bridge.': {
    why: "Six words begin with the same 'b' sound: brave, builders, battled, bitter, blizzards and bridge. Repeating the opening sound of words close together is alliteration.",
    more: "'B' is a plosive sound, made with a small burst of air. The repeated bursts sound tough and determined, like the builders working on against the weather.",
    tip: "When you write about alliteration, say what the sound adds: 'The harsh, repeated b sounds suggest the builders' struggle.'",
  },
  'Silly Sam sold seven slippery snails on Saturday.': {
    why: "Almost every word starts with the same 's' sound: silly, Sam, sold, seven, slippery, snails, Saturday. Repeating the opening sound of nearby words is alliteration.",
    more: "The alliteration turns the sentence into a tongue-twister: fun to say, hard to say quickly, and easy to remember. Repeated 's' sounds are also called sibilance.",
    tip: 'Alliteration is often used in headlines, adverts and names, such as Peter Piper, because it sticks in the memory.',
  },
  'The mighty mountain mist muffled every morning sound.': {
    why: "The 'm' sound starts mighty, mountain, mist, muffled and morning. Repeating the opening sound of words close together is alliteration.",
    more: "'M' is a soft, humming sound made with closed lips. Repeating it slows the sentence down and makes it sound hushed, just like the mist muffling every sound.",
    tip: 'Read alliteration aloud and listen: does the repeated sound speed the line up or slow it down, and does that match what is happening?',
  },
  'Tiny Tom tiptoed towards the towering tower of toast.': {
    why: "Seven words start with a 't' sound: tiny, Tom, tiptoed, towards, towering, tower and toast. Repeating the opening sound of nearby words is alliteration.",
    more: "The quick, light 't' sounds match Tom's tiptoeing steps. The alliteration gives the sentence a playful, comic rhythm, like a line from a picture book.",
    tip: 'A lot of alliteration sounds comic, which suits a funny story but not a serious one. Read your writing aloud to check the effect.',
  },
  'Frantic foxes fled the fierce February flood.': {
    why: "Frantic, foxes, fled, fierce, February and flood all start with an 'f' sound. Repeating the opening sound of words close together is alliteration.",
    more: "'F' is a breathy sound, like rushing air or water. The repeated sound adds to the sense of panic and speed as the foxes escape.",
    tip: "In an exam answer, link the sound to the meaning: 'The breathy f sounds echo the rush of the flood and the foxes' panic.'",
  },
  'Greedy gulls gathered greedily on the glistening grey groyne.': {
    why: "Greedy, gulls, gathered, greedily, glistening, grey and groyne all start with a hard 'g' sound. Repeating the opening sound of nearby words is alliteration.",
    more: "A groyne is a low wall built out into the sea to stop the beach washing away. The harsh, gulping 'g' sounds suit the noisy, grabbing gulls.",
    tip: 'Alliteration works best when the sound suits the subject. Here the throaty g sound is a little like the gulls themselves.',
  },
  'The fireworks crackled and boomed above the cheering crowd.': {
    why: "'Crackled' and 'boomed' are words that imitate the sounds they name. A word that sounds like its noise is onomatopoeia.",
    more: "Onomatopoeia lets the reader hear the scene. The sharp 'crackled' and the deep 'boomed' give two different firework sounds, so the display feels loud and real.",
    tip: 'In descriptive writing, include at least one sound word, and choose it for the exact noise: a firework that fizzes is not the same as one that thunders.',
  },
  'Rain pattered on the tin roof while the kettle began to hiss.': {
    why: "'Pattered' and 'hiss' imitate the sounds they describe: light taps of rain and the steam from a kettle. Words that sound like their noise are onomatopoeia.",
    more: 'The two quiet sounds together create a cosy indoor mood, with the rain outside and the kettle inside.',
    tip: 'Notice whether sound words are soft or harsh. Gentle sounds make a scene feel safe; harsh ones would change the mood completely.',
  },
  'The old gate creaked, then slammed with a tremendous bang.': {
    why: "'Creaked', 'slammed' and 'bang' all imitate the noises they name. A word that sounds like its noise is onomatopoeia.",
    more: "The slow 'creaked' builds suspense and the sudden 'bang' breaks it, so the reader may jump just as a character would.",
    tip: 'Writers of ghost stories often put a quiet sound before a loud one to make the reader jump. Try it in your own story openings.',
  },
  'Bees buzzed lazily while the brook gurgled over smooth stones.': {
    why: "'Buzzed' and 'gurgled' imitate the sounds of the bees and the water. Words that sound like the noise they describe are onomatopoeia.",
    more: "The two soft, steady sounds create a calm summer scene. The sentence also uses alliteration in 'Bees buzzed' and 'smooth stones', which adds to its gentle rhythm.",
    tip: "When you analyse sound, name the device and its effect: 'The onomatopoeia of gurgled helps the reader hear the slow, peaceful stream.'",
  },
  'The cereal went snap and crackle the moment the milk hit the bowl.': {
    why: "'Snap' and 'crackle' imitate the sounds the cereal makes when the milk hits it. Words that sound like their noise are onomatopoeia.",
    more: 'Onomatopoeia is common in comics and adverts because it lets you hear a moment instantly. Here it makes an ordinary breakfast sound lively.',
    tip: 'A sound word can stand alone as a short sentence for impact, before the reader learns what made the noise.',
  },
  'My trainers squelched through the mud as thunder rumbled overhead.': {
    why: "'Squelched' and 'rumbled' imitate the sounds they name: wet mud underfoot and thunder overhead. Words that sound like their noise are onomatopoeia.",
    more: "'Squelched' even sounds wet and sticky when you say it. The two sounds, one close and one far away, put the reader right in the middle of a stormy walk.",
    tip: 'Use sound words for things near and far to give a scene depth: footsteps close by, traffic in the distance.',
  },
  'The vending machine whirred, clunked, and finally thudded out a can.': {
    why: "'Whirred', 'clunked' and 'thudded' each imitate a noise the machine makes. Words that sound like the noise they describe are onomatopoeia.",
    more: "The three sounds come in order, like a little story of the machine working, and 'finally' makes the wait feel long. It is a funny, true-to-life description.",
    tip: 'A list of sound words can show a process step by step. Try describing a washing machine, a printer or a lift in the same way.',
  },
  'I have told you a million times to tidy your room before dinner.': {
    why: "Nobody has really said anything a million times. 'A million times' is a huge, deliberate exaggeration, which is hyperbole.",
    more: 'The speaker does not expect to be believed. The exaggeration shows how frustrated they are far more strongly than an exact number would.',
    tip: 'Hyperbole is common in speech and persuasive writing. Use it sparingly, so that it stands out when you do.',
  },
  'This homework is going to take me a thousand years to finish.': {
    why: 'No homework takes a thousand years. The speaker deliberately exaggerates to show how long and dull it feels, which is hyperbole.',
    more: "Hyperbole tells us about the speaker's feelings rather than the facts. Here it shows dread and a little self-pity, and it sounds funny.",
    tip: "In an exam answer, say what the exaggeration reveals: 'The hyperbole shows how overwhelmed the speaker feels.'",
  },
  'My schoolbag weighs more than a fully grown elephant today.': {
    why: 'A schoolbag cannot weigh more than an elephant, which can weigh several tonnes. This is an obvious, deliberate exaggeration, which is hyperbole.',
    more: 'It compares the bag with an elephant, which some would call a simile, but the point is an impossible weight, not a likeness: the exaggeration is what makes it hyperbole. The picture shows how heavy and tiring the bag feels.',
    tip: 'Comparing with something enormous is a quick way to build hyperbole, as long as the claim is plainly impossible.',
  },
  'She was so embarrassed she could have died right there on the spot.': {
    why: "Nobody really dies of embarrassment. 'Could have died' is a deliberate exaggeration of how she felt, which is hyperbole.",
    more: 'This is a common saying, and readers understand that it is not meant literally. It shows that her embarrassment was overwhelming.',
    tip: 'Everyday exaggerations soon become clichés. In your own writing, invent a fresh exaggeration that fits your character.',
  },
  'I am so hungry I could eat everything in the entire canteen twice.': {
    why: 'Nobody could eat all the food in a canteen, let alone twice. The speaker exaggerates on purpose to show how hungry they are, which is hyperbole.',
    more: "'Twice' pushes the exaggeration even further, which makes it funny. Hyperbole often uses impossible numbers and amounts.",
    tip: "The pattern 'so ... I could' is a handy way to build hyperbole: 'I was so tired I could have slept for a week.'",
  },
  'It was so cold on the field that we nearly turned into icebergs.': {
    why: 'People cannot turn into icebergs, however cold it is. The speaker deliberately exaggerates the cold for effect, which is hyperbole.',
    more: "An iceberg is a huge mass of floating ice, so the picture is funny as well as extreme. 'Nearly' keeps it light and playful.",
    tip: "Hyperbole works best when the reader can picture it. An iceberg is far more vivid than simply 'we were extremely cold'.",
  },
  'He laughed so hard at the joke that the whole street could hear him.': {
    why: 'A whole street hearing one person laugh is an exaggeration. The speaker overstates how loud he was for effect, which is hyperbole.',
    more: 'This kind of everyday exaggeration is how people really talk. It tells us the laugh was loud and the joke was very funny, without measuring anything.',
    tip: 'Hyperbole can be gentle or wild. A whole street is gentle; a whole planet would be wild. Choose the level that suits your writing.',
  },
  "The winner's name was an open secret long before the envelope was opened.": {
    why: "'Open secret' joins two words that contradict each other: a secret is hidden, but open means known to all. Two opposite words placed together make an oxymoron.",
    more: 'An open secret is something meant to be secret that everyone actually knows. Here the name should have been a surprise until the envelope was opened, but everybody already knew it.',
    tip: 'Some oxymorons are everyday phrases. Spotting them helps you notice how writers and speakers play with meaning.',
  },
  'There was a deafening silence in the room after the headteacher spoke.': {
    why: "'Deafening silence' puts two opposites side by side: deafening means extremely loud, but silence has no sound at all. Two contradictory words placed together make an oxymoron.",
    more: 'The phrase suggests a silence so heavy and awkward that it feels overwhelming, as if everyone is too shocked or nervous to speak.',
    tip: 'In analysis, explain both halves of an oxymoron, and what the clash between them suggests about the moment.',
  },
  'The film was seriously funny from the opening scene to the credits.': {
    why: "'Seriously funny' joins two words with opposite meanings, serious and funny. Placing contradictory words together is an oxymoron.",
    more: "In everyday speech 'seriously' just means 'very', so the phrase is a playful way to say the film was extremely funny. The clash between the two words makes it memorable.",
    tip: "When you write about an oxymoron, explain why the writer chose a contradiction rather than a plain word such as 'very'.",
  },
  'It was a bittersweet farewell at the end of our final term.': {
    why: "'Bittersweet' joins two opposite tastes, bitter and sweet, in one word. Combining contradictory ideas like this is an oxymoron.",
    more: 'The farewell is sad because they are leaving, but happy because of good memories or a new start. The oxymoron captures mixed feelings in a single word.',
    tip: 'Oxymorons are perfect for mixed emotions. Use one when a character feels two things at once.',
  },
  'The crowd waited in a kind of organised chaos before the gates opened.': {
    why: "'Organised chaos' puts two opposites together: organised means orderly, while chaos means total disorder. Two contradictory words placed side by side make an oxymoron.",
    more: 'The phrase suggests a crowd that looks wild and messy but somehow works, with everyone finding their own place.',
    tip: 'An oxymoron can sum up a scene that is two things at once. Try describing a school corridor at lunchtime in two contradictory words.',
  },
  'He gave a clearly confusing answer that left the whole class baffled.': {
    why: "'Clearly confusing' joins two words with opposite meanings: clear means easy to understand, while confusing means hard to follow. Contradictory words placed together make an oxymoron.",
    more: "Here 'clearly' also means 'obviously', so the joke is that his answer was obviously confusing. The phrase alliterates too, with a hard 'c' sound at the start of both words.",
    tip: 'Look for the two words that pull against each other. If you can explain the clash and why it is used, you have analysed the oxymoron.',
  },
  'The actor became well known for playing one of the living dead.': {
    why: "'The living dead' joins two opposites, living and dead. Nothing can be both at once, so placing these words together makes an oxymoron.",
    more: "'The living dead' is another name for zombies in horror stories. The oxymoron is creepy because it describes something that should not be possible.",
    tip: 'Oxymorons make a reader stop and think. Use one to describe something strange or unsettling, such as a frozen fire.',
  },
  'The baker quit his job because he simply could not make enough dough.': {
    why: "'Dough' has two meanings here: the mixture used to make bread, and a slang word for money. Using one word for two meanings to make a joke is a pun.",
    more: 'A baker works with dough all day, so the joke is that he could make bread dough but not enough money. Puns often make readers groan and smile at the same time.',
    tip: 'Puns appear in newspaper headlines and adverts to catch attention. Look for a word that fits two ideas at once.',
  },
  'I used to be a banker, but I lost interest in the work.': {
    why: "'Interest' has two meanings: money a bank pays or charges, and feeling keen on something. A word used for two meanings at once, to make a joke, is a pun.",
    more: "A banker deals with interest all the time, so 'lost interest' means both losing money and becoming bored. The double meaning is the joke.",
    tip: 'To explain a pun, write down both meanings and show how each one fits the sentence.',
  },
  'The electrician was shocked when he was suddenly let go from the firm.': {
    why: "'Shocked' has two meanings: very surprised, and hit by an electric shock, which suits an electrician. A word with two meanings used for a joke is a pun.",
    more: "Many puns depend on a word linked to someone's job or a topic. Here electricity and surprise meet in one word.",
    tip: 'When you meet a pun, ask which two meanings fit here, and why the writer chose this word.',
  },
  'My maths teacher called the broken compass a pointless instrument.': {
    why: "'Pointless' has two meanings: without a point, and useless. This broken compass has no sharp point and is no use. One word used for two meanings at once, as a joke, is a pun.",
    more: "A maths compass is the tool with a sharp point for drawing circles. The teacher's joke works because both meanings are true at the same time.",
    tip: 'Puns rely on words with more than one meaning. Many everyday words, such as light, bright or sharp, have several.',
  },
  'The gardener was thrilled because business was really growing this spring.': {
    why: "'Growing' has two meanings: plants getting bigger, and a business getting more customers. For a gardener both are true, so the word makes a joke, which is a pun.",
    more: "Spring is when plants start to grow, which adds to the joke. Puns often link a word to a person's job.",
    tip: 'Puns suit light-hearted writing such as jokes, headlines and comic stories better than serious pieces.',
  },
  'A clock factory worker said the job was a great way to pass the time.': {
    why: "'Pass the time' means to keep yourself busy while time goes by. For someone who makes clocks, time really is the job, so the phrase gains a second, joking meaning. That is a pun.",
    more: 'Puns are often built from common sayings. A familiar phrase becomes funny when it is put in a situation where it is also true in another way.',
    tip: 'To find a pun, look for a familiar phrase that seems to fit the situation a little too well.',
  },
  'The author of a book about anti-gravity said it was impossible to put down.': {
    why: "'Impossible to put down' usually means a book is so exciting you cannot stop reading. With a book about anti-gravity, the joke is that it floats, so you really could not put it down. The double meaning is a pun.",
    more: 'On its own, the phrase is a common exaggeration about exciting books. The joke works because here it might be literally true.',
    tip: 'Puns often turn a saying into something literal. Try it with a phrase such as over the moon or break a leg.',
  },
  'It was long, and wound about him like a tail': {
    why: "Marley's chain is compared with a tail: it 'wound about him like a tail'. The chain stays a chain, compared openly with something else, so this is a simile.",
    more: "Dickens is describing the chain that Marley's ghost drags behind him. A tail grows from an animal's body, so the chain seems to have become part of Marley, something he can never take off.",
    tip: 'When a simile compares a thing with part of a body, ask what that suggests: often something that cannot be left behind.',
  },
  'Hold her arms, Miss Abbot: she’s like a mad cat.': {
    why: 'Young Jane, fighting the servants, is compared with a mad cat. The servant does not say Jane is a cat, only that she is like one, so this is a simile.',
    more: 'A cat gone wild scratches, spits and cannot be held. The simile shows how the servants see Jane: not as a frightened child but as a wild animal to be controlled.',
    tip: 'A simile spoken by a character tells you about the speaker too. Ask what this comparison shows about how the adults treat Jane.',
  },
  'If it was my master, why did he cry out like a rat, and run from me?': {
    why: "Poole compares the cry he heard with a rat's: 'cry out like a rat'. The voice is said to be like a rat's, not to be one, so this is a simile.",
    more: "Poole, Jekyll's butler, glimpsed a masked figure among the crates in the laboratory, which cried out and fled from him. A rat squeals and scurries away from people, so the simile suggests something small, scared and less than human, a hint that it is Hyde.",
    tip: 'Similes that compare people with animals can make them seem less than human. Say which animal is chosen and what that suggests.',
  },
  'Weeping like a woman or a lost soul': {
    why: 'The sound from behind the locked door is compared with a woman weeping, or a lost soul. It is said to be like their crying, not to be it, so this is a simile.',
    more: 'A lost soul is a spirit with no rest after death, so the second comparison turns a sad sound into a frightening one. Poole does not know what is in the room, and the simile shares his dread.',
    tip: 'When a writer gives two comparisons for one thing, the second often goes further. Say how it changes the picture.',
  },
  'For look where Beatrice, like a lapwing, runs\nClose by the ground, to hear our conference.': {
    why: 'Beatrice is compared with a lapwing, a bird that runs low along the ground. She is not said to be a bird, only to run like one, so this is a simile.',
    more: 'Hero knows Beatrice has crept up to eavesdrop. A lapwing scuttles quickly and low, so the simile makes Beatrice’s sneaking up to listen look quick, crouching and comic.',
    tip: "Look for the detail a simile chooses. Here the bird runs 'close by the ground', just as Beatrice keeps out of sight.",
  },
  'See how that one little cloud floats like a pink feather from some gigantic flamingo.': {
    why: 'Holmes compares a small pink cloud at dawn with a feather from a gigantic flamingo. The cloud is said to float like a feather, not to be one, so this is a simile.',
    more: 'The comparison is playful: a flamingo big enough to drop a cloud-sized feather. It shows a gentler side of Holmes as the sun rises after a long night on the case.',
    tip: 'A surprising simile catches the eye, but it must still fit. Here the colour, the softness and the floating all match.',
  },
  'As it bulged up and caught the light, it glistened like wet leather.': {
    why: "The Martian's body is compared with wet leather: it 'glistened like' it. The creature is said to look like leather, not to be leather, so this is a simile.",
    more: 'This is the narrator’s first sight of a Martian. Wet leather is dark, shiny and slimy, so the simile makes the creature unpleasant to imagine touching: alien and disgusting.',
    tip: 'When you describe something strange, compare it with something the reader can feel. Here we can almost feel the slime.',
  },
  'No, no, I am as ugly as a bear,\nFor beasts that meet me run away for fear': {
    why: "Helena compares herself with a bear: 'as ugly as a bear'. She stays a person, compared openly with an animal, so this is a simile.",
    more: 'Helena feels unloved because Demetrius runs from her. She is not ugly at all, which shows how low she feels: the simile tells us about her mood, not her looks.',
    tip: "A character's simile about themselves often reveals how they feel. Ask whether the comparison is fair, or what it shows about their state of mind.",
  },
  'And then it started, like a guilty thing\nUpon a fearful summons.': {
    why: "The Ghost's sudden movement is compared with a guilty person jumping when called to account. It 'started, like a guilty thing', so this is a simile.",
    more: "'Started' means jumped. Horatio describes how the Ghost of Hamlet's father fled when the cock crowed. The simile hints that the Ghost answers to some power, and may have something to hide.",
    tip: 'Old words can hide a simile from you. Gloss them first: here, started means jumped and a summons is an order to appear.',
  },
  'He receives comfort like cold porridge.': {
    why: 'Sebastian compares the way Alonso takes comfort with cold porridge, which nobody wants. Saying that one thing is like another makes this a simile.',
    more: "Alonso fears his son has drowned and wants no comforting. Sebastian mocks him: kind words are as welcome as cold porridge. It is a joke too, because Alonso has just said 'peace', and pease was a kind of porridge.",
    tip: 'Shakespeare’s jokers often hide a pun inside a simile. Read the line before to see what they are playing on.',
  },
  'The only completely stationary object in the room was an enormous couch on which two young women were buoyed up as though upon an anchored balloon.':
    {
      why: "The couch is compared with an anchored balloon: the women sit on it 'as though upon' one. 'As though' makes an open comparison, just as 'like' does, so this is a simile.",
      more: 'Daisy and Jordan seem to float above the breezy room, light and unmoving. The balloon makes them seem unreal and weightless, drifting above ordinary life while staying tied in place.',
      tip: "A simile can use 'as though', 'as if' or 'as ... as' as well as 'like'. Look for the comparison itself, not one word.",
    },
  'The quality of mercy is not strain’d,\nIt droppeth as the gentle rain from heaven\nUpon the place beneath.':
    {
      why: "Mercy is compared with rain: it 'droppeth as the gentle rain from heaven'. Here 'as' means 'like', so the comparison is made openly and this is a simile, not a metaphor. 'Strain'd' means forced; 'droppeth' means falls.",
      more: 'Portia is asking Shylock to show mercy in court. Rain falls freely on everyone below and helps things grow, so the simile suggests mercy cannot be forced: it is a gift that falls from above.',
      tip: "If you can swap in 'like' and the line still makes sense, you have found a simile, whatever word the writer used.",
    },
  'So shows a snowy dove trooping with crows\nAs yonder lady o’er her fellows shows.': {
    why: "Romeo compares Juliet among the other guests with a white dove among black crows: 'So shows' the dove 'As yonder lady' shows. 'So ... as' makes the comparison open, so it is a simile, not a metaphor.",
    more: 'This is the first time Romeo sees Juliet, at the Capulets’ party. A dove is white, gentle and rare among crows, so the simile makes her seem pure and bright, and the other women plain and dark beside her.',
    tip: 'A comparison can be spread over two lines. Read to the end of the sentence before you decide.',
  },
  'They were both in white, and their dresses were rippling and fluttering as if they had just been blown back in after a short flight around the house.':
    {
      why: "The dresses ripple 'as if they had just been blown back in after a short flight around the house'. 'As if' makes an open comparison with flying, so this is a simile: the women did not really fly.",
      more: 'Nick is describing Daisy and her friend Jordan in a breezy room. The image makes them seem light, airy and unreal, more like birds or spirits than ordinary people.',
      tip: "'As if' introduces something that is not really happening. When it compares one thing with another, it makes a simile.",
    },
  'From the plane window, the fields resembled a quilt made of green and brown patches.': {
    why: "The fields are compared with a patchwork quilt: they 'resembled' one. 'Resembled' makes an open comparison, just as 'like' does, so this is a simile, not a metaphor.",
    more: 'From high up, fields of different crops look like squares sewn together. The simile turns a huge landscape into something small, soft and homely.',
    tip: "A simile needs a word or phrase of comparison, but it need not be 'like'. Ask: does the sentence say one thing is similar to another?",
  },
  'Ana slipped through the busy corridor the way a fish moves between reeds.': {
    why: "Ana's movement is compared with a fish moving between reeds: she slipped through 'the way' a fish does. 'The way' makes the comparison openly, so this is a simile, not a metaphor.",
    more: 'A fish glides through narrow gaps without touching anything. The simile suggests Ana is quick, quiet and skilful at weaving through a crowd.',
    tip: 'To test for a simile, try rewriting it with like. If it still means the same, the writer was comparing openly.',
  },
  'I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy.': {
    why: 'Each simile picks a different joy: a feather has no weight, an angel is good, a schoolboy is young and carefree. Together they suggest Scrooge feels light, good and young, with the weight of his old life gone.',
    not: {
      "He has grown weak and thin after the ghosts' visits":
        "'Light as a feather' is about how he feels, not his weight. The burden of his old life has lifted; nothing suggests illness.",
      'He is only pretending to be happy for the spirits':
        'The spirits have gone, and his joy pours out when he is alone. Nothing suggests he is acting.',
      'He is still as cold and mean as he always was':
        'These similes show the opposite: the cold, mean man of the first stave has been changed.',
    },
    more: 'Dickens piles up three similes in a row, which makes Scrooge sound breathless with happiness. Compare the hard, cold comparisons used for him at the start: the change in the similes shows the change in the man.',
    tip: 'When a writer gives several similes together, say what each one adds, then what they suggest together.',
  },
  'Though not yet full-grown, they were huge dogs, and as fierce-looking as wolves.': {
    why: 'Wolves are wild hunters that kill, not tame farm dogs. Comparing the dogs with wolves suggests Napoleon has turned them into something savage and frightening, ready to attack.',
    not: {
      'They are loyal pets who will guard the farm kindly':
        'They are loyal, but only to Napoleon. Wolves are not kind guards, and at this moment the dogs chase Snowball off the farm.',
      'They are still young puppies who like to play':
        "'Not yet full-grown' gives their age, but 'huge' and 'fierce-looking as wolves' show they are already dangerous, not playful.",
      'They have escaped from a wild pack living in the woods':
        'The comparison is with wolves, but these are the farm’s own puppies, which Napoleon took away and reared in secret.',
    },
    more: 'This is the moment Napoleon seizes power: the dogs chase Snowball off the farm. The simile turns the farm’s puppies into a private army, which hints at how dictators use force.',
    tip: 'In Animal Farm, notice when animals are compared with wild animals or with humans. Each comparison shows who is gaining power.',
  },
  'his affections, like ivy, were the growth of time': {
    why: "Ivy takes years to grow and clings tightly to what it climbs. The simile, with 'the growth of time', suggests Utterson's friendships formed slowly over many years and hold on loyally.",
    not: {
      'They were made in a hurry and are soon forgotten':
        "Ivy grows slowly, and 'the growth of time' says these friendships took years. They are the opposite of quick.",
      'They slowly choke the very people he cares about':
        "Ivy can smother a tree, but nothing in Utterson's loyal friendships harms anyone. The simile is about slow growth and holding on.",
      'They spread quickly to everyone he meets':
        'His friends are only relatives and people he has known longest. The ivy here is slow and faithful, not fast.',
    },
    more: 'Stevenson tells us Utterson’s friends were relatives or people he had known longest. This loyalty matters later: he stands by Jekyll long after others would have given up.',
    tip: 'To explain a simile, list what you know about the comparison (ivy is slow, clinging, long-lasting), then pick the qualities the writer means.',
  },
  'It is too rash, too unadvis’d, too sudden,\nToo like the lightning, which doth cease to be\nEre one can say “It lightens.”':
    {
      why: "Lightning is brilliant but gone in an instant, before you can even say 'It lightens'. Juliet fears their love is the same: dazzling, but so sudden it may vanish as quickly as it came.",
      not: {
        'It is slow and steady and will surely last for ever':
          "Juliet says the opposite: it is 'too rash' and 'too sudden'. Lightning is the most sudden thing she could name.",
        'It is dangerous because a storm is on its way':
          'There is no real storm. Lightning is used for its speed and brightness, to describe the love.',
        'It is something she feels ashamed to talk about':
          'She is not ashamed but worried. Her fear is that something so sudden cannot last.',
      },
      more: 'This is the balcony scene, on the night they meet. The simile looks ahead: the lovers’ story moves at lightning speed, and it ends very quickly too.',
      tip: 'In Romeo and Juliet, light is often used for love, against the dark. Track these images when you write about the play.',
    },
  'he doth bestride the narrow world\nLike a Colossus, and we petty men\nWalk under his huge legs':
    {
      why: "The Colossus was a giant statue said to stand astride a harbour while ships sailed between its legs. Cassius suggests Caesar towers over the world, and the other Romans have shrunk to 'petty men' beneath him.",
      not: {
        'He is a kind giant who protects the people of Rome':
          "Cassius is not praising Caesar. 'Petty men' walking under his legs shows resentment, not gratitude for protection.",
        'He is a statue that the Romans have built to honour him':
          'The Colossus is the comparison, not a real statue of Caesar. Cassius means that Caesar’s power has grown huge.',
        'He is tall and strong, so he wins every battle':
          'The simile is about power, not his body. In the same speech Cassius mocks Caesar’s weakness, telling how he once nearly drowned.',
      },
      more: 'Cassius is trying to turn Brutus against Caesar. By making Caesar enormous and everyone else small, the simile stirs Brutus’s pride: why should one man tower over his equals?',
      tip: 'When a speaker uses a simile to persuade, ask what feeling it is meant to stir in the listener: here, resentment.',
    },
  'He seemed to weave, like the spider, from pure impulse, without reflection.': {
    why: "A spider spins its web by instinct, without deciding to. Eliot's simile, with 'pure impulse, without reflection', suggests Silas weaves the same way: endlessly, by habit, without any thought of why.",
    not: {
      'He is cunning and weaves to trap other people':
        "Spiders trap flies, but Eliot names only the instinct: 'pure impulse'. Silas is lonely, not cunning, and traps nobody.",
      'He is a skilled artist who plans every pattern carefully':
        "'Without reflection' means without thinking. He does not plan; he weaves the way a spider spins.",
      'He is frightened of the spiders in his cottage':
        'The spider is only the comparison. Nothing in the line is about real spiders in his home.',
    },
    more: 'Silas has lost his faith and his friends, and weaving has become his whole life. The spider image shows how small and mechanical that life has become.',
    tip: 'Notice what a simile leaves out. A spider has no friends or hopes, so comparing Silas with one shows what his life now lacks.',
  },
  'And each particular hair to stand on end\nLike quills upon the fretful porpentine.': {
    why: "A porcupine's quills stand up stiff when it is upset or threatened. The Ghost says his story would make every one of Hamlet's hairs stand up like those quills: it would terrify him.",
    not: {
      "Make him proud of his father's courage":
        'The Ghost is describing horror, not pride. Hair standing on end is a sign of fear.',
      'Turn all of his hair grey with grief and worry':
        'Hair turning grey takes years. Here it stands straight up at once, like quills, from sudden terror.',
      'Make him laugh at how strange the tale is':
        "A porcupine sounds comic to us, but the Ghost means terror: the same speech says the tale would 'freeze thy young blood'.",
    },
    more: "'Porpentine' is an old word for porcupine, and 'fretful' means agitated. Hamlet has just met his father’s ghost, and the image prepares the audience for something truly horrifying.",
    tip: 'If an old word puzzles you, use the rest of the line to work it out: quills, and hair on end.',
  },
  'I see you stand like greyhounds in the slips,\nStraining upon the start.': {
    why: "'Slips' are the leashes that hold greyhounds before a hunt. Dogs held back in them strain forward, desperate to run. Henry sees his soldiers the same way: eager, tense and ready to charge.",
    not: {
      'They are tired and want to rest before the next battle':
        "'Straining upon the start' means pulling forward to go, the opposite of wanting to rest.",
      'They are loyal pets who follow Henry everywhere':
        'Greyhounds here are hunting dogs about to be released, not pets. The simile is about eagerness, not obedience.',
      'They are nervous and trying to slip away unseen':
        "'Slips' are leashes, not slipping away. The soldiers strain forward; they are not trying to escape.",
    },
    more: "These lines come near the end of Henry's 'Once more unto the breach' speech before the town of Harfleur. The simile tells the soldiers who they are, eager and brave, so that they will act like it.",
    tip: 'A leader’s simile about his followers can be a way of inspiring them. Ask whether it describes them or tells them how to be.',
  },
  'In his blue gardens men and girls came and went like moths among the whisperings and the champagne and the stars.':
    {
      why: 'Moths are drawn helplessly to light, fluttering around it at night. The simile suggests Gatsby’s guests are pulled to his glittering parties in the same way, drifting about with no real purpose.',
      not: {
        'They are shy and hide away in the dark gardens':
          "The guests are not hiding: they 'came and went' among the champagne and music. Moths seek out light rather than dark.",
        'They are pests that Gatsby would like to get rid of':
          'Nothing here shows Gatsby wants them gone. The moths are about how the guests are drawn to his lights.',
        'They come only at night, because they are busy working by day':
          'Moths do fly at night, but the simile is not about the guests’ jobs. It is about being drawn to brightness.',
      },
      more: 'A moth that flies too close to a flame can be burnt. Some readers see a warning in the image: the glamour that draws everyone in is dangerous.',
      tip: 'Think about what usually happens to the thing in a comparison. Moths and flames end badly, and that can add a darker meaning.',
    },
  'She sat like patience on a monument,\nSmiling at grief.': {
    why: "Statues of Patience were carved on tombs, sitting still and calm. Viola's imagined sister, who loved in secret, is compared with one: silent, bearing her sorrow, even smiling at it, and never speaking of her love.",
    not: {
      "She enjoyed other people's sorrow and laughed at it":
        "'Smiling at grief' means smiling while she herself suffered, not laughing at someone else's pain.",
      'She was made of stone and could feel nothing at all':
        'The monument is the comparison. She felt deeply; she only looked as calm as a statue.',
      'She was too lazy to do anything at all about her troubles':
        'Sitting still here is patience, not laziness: she could not speak of her love, so she bore it in silence.',
    },
    more: 'Viola, disguised as a young man, is really describing her own hidden love for Orsino. The simile lets her speak about her feelings without giving herself away.',
    tip: 'Similes that compare a person with a statue or a picture often suggest someone hiding feelings behind a still face.',
  },
  'The saintly soul of Elizabeth shone like a shrine-dedicated lamp in our peaceful home.': {
    why: "A lamp kept burning at a shrine is holy and gives a steady light. Victor compares Elizabeth's 'saintly soul' with one: she is pure and good, and she fills their 'peaceful home' with calm warmth.",
    not: {
      'She is fierce and fiery, quick to lose her temper':
        'Fire can mean anger, but a shrine lamp gives a gentle, steady glow. Nothing in the line suggests temper.',
      'She is bright and clever, always first with the answer':
        "The light here is goodness, not cleverness: her soul is 'saintly', and the lamp belongs at a holy place.",
      'She is a nun who keeps a lamp burning in a church':
        'The shrine and the lamp are the comparison. Elizabeth is a girl in Victor’s family, not a nun.',
    },
    more: 'Victor describes Elizabeth as almost perfect. Some readers notice that she is always seen through his eyes, as an ideal rather than a person with wishes of her own.',
    tip: 'When a narrator describes someone, ask whether the comparison tells you more about that person or about the narrator’s feelings.',
  },
  'It was not in impenetrable shadow as the other objects in the yard were, but had a dismal light about it, like a bad lobster in a dark cellar.':
    {
      why: "Shellfish going bad can give off a faint glow in the dark. Dickens's simile makes the light around Marley's face sickly and unnatural, yet a bad lobster is a funny, everyday picture: eerie and comic at once.",
      not: {
        'It is a warm, welcoming glow that cheers Scrooge up':
          "'Dismal' means gloomy, and the glow is that of rotting seafood. There is nothing warm or cheering about it.",
        'It comes from a lamp that someone left down in the cellar':
          'There is no lamp: the cellar and the lobster are the comparison. The strange light comes from the door knocker itself.',
        'It smells strongly of the sea and of fish':
          'The simile is about how the light looks, not how anything smells. Shellfish going bad can glow faintly in the dark.',
      },
      more: "This is the moment Scrooge's door knocker turns into Marley's face. Dickens often mixes horror with jokes, so the reader is unsettled and amused together.",
      tip: 'If a simile makes you smile in a frightening scene, say so: noticing the humour, and asking why it is there, is close reading.',
    },
  'You start a question, and it’s like starting a stone.': {
    why: 'Starting a stone means setting it rolling down a hill, where it knocks others loose. Enfield suggests a question works the same way: once asked, it can set off gossip and harm that nobody can stop.',
    not: {
      'Questions are heavy, and only the strongest can ask them':
        'The stone is not about weight. It is about what happens once it starts rolling: it cannot be called back.',
      'Asking questions is a way to start a friendly game':
        'Enfield is warning against questions, not enjoying them. He goes on to say the rolling stone hurts someone.',
      'A good question builds something solid, stone by stone':
        'Nothing is being built. The stone rolls downhill and knocks others loose, so the image is about damage spreading.',
    },
    more: 'Enfield imagines the stone rolling until it hits someone in their own garden. He and Utterson agree never to speak of the story again, which shows how keen respectable men are to avoid scandal.',
    tip: 'A simile spoken by a character can reveal their values. Here it shows a Victorian gentleman’s fear of gossip.',
  },
  'There’s daggers in men’s smiles': {
    why: "Hidden threats are called 'daggers in men's smiles'. The smiles are not said to be like daggers: the daggers are simply in them, so this is a metaphor.",
    more: 'Donalbain says this just after his father, King Duncan, has been murdered. Friendly smiles may hide murderers, so he and his brother flee. The metaphor sums up a world where nobody can be trusted.',
    tip: 'A metaphor can be packed into a short phrase. Look for words that belong to one thing used about another: here, weapons in a smile.',
  },
  'She was a vixen when she went to school,\nAnd though she be but little, she is fierce.': {
    why: 'Helena calls Hermia a vixen, a female fox. She says Hermia was one, not that she was like one, so this is a metaphor.',
    more: 'A vixen is small but sharp-toothed and quick to bite. Helena is warning the young men that Hermia, though little, is fierce, and the second line has become famous.',
    tip: 'Calling a person an animal is a quick metaphor. Say which qualities of the animal are meant: here small, quick and fierce.',
  },
  'Something is rotten in the state of Denmark.': {
    why: "Denmark's government is described as if it were food going bad: something in it is 'rotten'. A country cannot really rot, so the word is a metaphor for corruption.",
    more: 'Marcellus says this as Hamlet follows his father’s ghost. Rot spreads and smells, so the metaphor suggests a hidden evil at the heart of the country that will soon touch everyone.',
    tip: "A metaphor does not need 'is a'. One word used about the wrong kind of thing, such as rotten about a country, can be one.",
  },
  'But I will wear my heart upon my sleeve\nFor daws to peck at': {
    why: "Iago says he would 'wear my heart upon my sleeve', showing his true feelings openly. He would not really pin his heart to his clothes, so this is a metaphor.",
    more: "Iago is explaining why he hides his true self: the day his actions showed his real heart, he might as well wear it on his sleeve. 'Daws' are jackdaws, birds that peck, so a heart shown so openly would be pecked at and hurt.",
    tip: 'Many everyday sayings began as metaphors. When you meet one in a text, explain the picture behind it as well as its meaning.',
  },
  'the small bundle of shivers growing afraid of it all and beginning to cry, was Pip.': {
    why: "Pip calls his younger self 'the small bundle of shivers'. He does not say he was like a bundle; he says the bundle was Pip, so this is a metaphor.",
    more: 'Pip is a small boy alone in a churchyard on the cold marshes. The metaphor shrinks him to nothing but cold and fear, which makes us feel for him just before the convict leaps out.',
    tip: 'Writers often describe a frightened character as a small object. Notice how it makes them seem helpless.',
  },
  'In came Mrs. Fezziwig, one vast substantial smile.': {
    why: "Mrs Fezziwig is called 'one vast substantial smile'. The sentence says she is a smile, not that she is like one, so this is a metaphor.",
    more: "Dickens shrinks her whole person down to her happiness. 'Substantial' means large and solid, so the joke is that her smile seems to take up all of her. It sets the warm, generous mood of the Fezziwigs' party.",
    tip: 'Describing a person as one feature, such as a smile or a frown, is a quick way to show their character.',
  },
  'The Thane of Cawdor lives: why do you dress me\nIn borrow’d robes?': {
    why: "Macbeth calls the title of Thane of Cawdor 'borrow'd robes'. A title is not clothing, but he speaks of it as if it were, so this is a metaphor.",
    more: 'Macbeth has just been greeted as Thane of Cawdor, though he thinks that lord is alive. Clothes run through the play: Macbeth’s titles never quite fit him, as if he wears what belongs to someone else.',
    tip: 'Look for metaphors that come back through a text. A pattern, such as clothes in Macbeth, makes a strong exam point.',
  },
  'She speaks poniards, and every word stabs': {
    why: "Benedick says Beatrice 'speaks poniards': her words are daggers, and every one stabs. Words cannot really stab, so this is a metaphor.",
    more: 'Benedick has just been mocked by Beatrice at a masked dance. The metaphor shows how sharp and wounding her wit is, and how much it has hurt his pride.',
    tip: 'Metaphors about speech, such as words that cut or sting, show how powerful words can be. Notice who is hurt and who holds the weapon.',
  },
  'I was a discord in Gateshead Hall': {
    why: "Jane calls herself 'a discord': a clash of notes that spoils the music. She does not say she was like one, so this is a metaphor.",
    more: 'Gateshead Hall is the Reeds’ house, where Jane is an unwanted orphan. A discord jars against everything around it, so the metaphor shows how out of place she felt.',
    tip: 'Musical words such as harmony and discord are often used for how people get on. Explain the music first, then the meaning.',
  },
  'Her voice is full of money': {
    why: "Gatsby says Daisy's voice 'is full of money'. A voice cannot hold coins, but he speaks as if it could, so this is a metaphor.",
    more: 'Gatsby means that Daisy’s voice has the sound of wealth: easy, charming and sure of itself. It is one of the most quoted lines in the novel, because it links Daisy’s charm to her riches.',
    tip: 'Some metaphors join two senses, such as hearing and wealth. Explain what quality the two share.',
  },
  'her eye of ice continued to dwell freezingly on mine.': {
    why: "Mrs Reed's look is called 'her eye of ice', and it rests 'freezingly' on Jane. Her eye is not really ice, but the sentence describes it as if it were, so this is a metaphor.",
    more: "Mrs Reed is Jane's cruel aunt. Ice is cold and hard, so the metaphor shows her cold dislike of the child, and 'freezingly' carries the image on.",
    tip: 'Temperature metaphors are common for feelings: warm for kindness, icy for coldness. Say what the temperature shows about the character.',
  },
  'By degrees, Wemmick got dryer and harder as we went along, and his mouth tightened into a post-office again.':
    {
      why: "Wemmick's mouth 'tightened into a post-office': a letter-box slot. It is not compared with one; it becomes one, so this is a metaphor. Here 'as' means 'while', not 'like'.",
      more: 'Wemmick is warm and friendly at home but stiff and businesslike at work. As he walks back towards the office, his mouth closes into the narrow slot Dickens jokingly calls a post-office.',
      tip: "Check what 'as' is doing before you call a line a simile. 'As we went along' means while: nothing is being compared.",
    },
  'If he be married,\nMy grave is like to be my wedding bed.': {
    why: "Juliet says her grave will be her 'wedding bed': if Romeo is married, she will marry nobody but death. 'Is like to be' means 'is likely to be', not a comparison, so this is a metaphor, not a simile.",
    more: 'Juliet has just met Romeo and sends the Nurse to find out who he is. The dark metaphor is an early hint of where the story goes: the play ties love and death together from the start.',
    tip: "Older English uses 'like' in other ways: 'like to be' means likely to be. Ask whether two things are really being compared.",
  },
  'I hold the world but as the world, Gratiano,\nA stage, where every man must play a part,\nAnd mine a sad one.':
    {
      why: "Antonio calls the world 'A stage, where every man must play a part'. He means it is one, not that it is like one: 'hold ... as' means 'think of as'. That makes it a metaphor.",
      more: 'Antonio is sad and cannot say why. If the world is a stage, everyone has a part written for them, and his is a sad one: the metaphor suggests his sadness feels fixed, not chosen.',
      tip: 'The world as a stage turns up in several of Shakespeare’s plays. When you meet it, ask what part the speaker thinks they have been given.',
    },
  'that’s as much to say, I wear not motley in my brain.': {
    why: "Feste says 'I wear not motley in my brain'. Motley is a jester's patchwork costume, and a brain cannot wear clothes, so this is a metaphor. 'As much to say' means 'that is to say': nothing is compared.",
    more: 'Feste is a professional fool, but his costume does not make him stupid: his mind is sharp. The metaphor separates how he looks from what he is.',
    tip: 'A metaphor can hide inside a joke. Work out the picture (clothes on a brain), then the point (looking foolish is not being foolish).',
  },
  'I like him not, nor stands it safe with us\nTo let his madness range.': {
    why: "Claudius speaks of Hamlet's madness as a wild animal that must not 'range', or roam free. Madness cannot really roam, so this is a metaphor. 'I like him not' means 'I do not like him': nothing is compared.",
    more: 'Claudius is about to send Hamlet to England, out of the way. Treating his madness as a dangerous beast suggests Claudius sees Hamlet as a threat to be caged.',
    tip: "When 'like' means 'enjoy', it cannot make a simile. Read the whole sentence to see what each 'like' is doing.",
  },
  'My salad days,\nWhen I was green in judgment, cold in blood,\nTo say as I said then.': {
    why: "Cleopatra calls her youth her 'salad days', when she was 'green in judgment': young, fresh and untested. Days cannot be salad, so this is a metaphor. In 'To say as I said then', 'as' compares nothing.",
    more: "Shakespeare's 'salad days' is still used for a carefree, inexperienced youth. Cleopatra uses it to wave away the love she once felt for Julius Caesar as the foolishness of a girl.",
    tip: 'Colour words can be metaphors: green for young and untested, blue for sad. Say what the colour suggests in the line.',
  },
  'We have scorch’d the snake, not kill’d it.': {
    why: "Macbeth calls the danger to his crown a snake that he has only wounded ('scorch'd'), not killed. A threat is not a snake, but he speaks of it as one, so this is a metaphor. A snake is an animal, not a person.",
    more: 'Macbeth is king, but he still feels unsafe. A wounded snake can heal and strike again, so the metaphor shows his fear that the danger will return, which drives him on to further murders.',
    tip: 'Personification gives something human qualities. When the comparison is with an animal or an object, the precise name is metaphor.',
  },
  'Come not between the dragon and his wrath.': {
    why: "King Lear calls himself 'the dragon': he says he is one, not that he is like one, so this is a metaphor. A person called an animal is not personification, which gives human qualities to what is not human.",
    more: 'Lear is furious with his daughter Cordelia and warns the loyal Kent not to step between them. A dragon is huge, fiery and dangerous: the metaphor shows how terrifying his anger is.',
    tip: 'When a character calls themselves an animal, it reveals how they see their own power. Here Lear sees himself as unstoppable.',
  },
  'A great chocolate-coloured pall lowered over heaven': {
    why: "The fog is called 'a great chocolate-coloured pall': a pall is the cloth laid over a coffin. The fog is said to be one, not to be like one, so this is a metaphor. Nothing human is given to it.",
    more: "Utterson is being driven through London after a murder. 'Lowered' means hung dark and low. A pall belongs at a funeral, so the metaphor wraps the city in death and gloom, and makes the fog feel heavy and smothering.",
    tip: 'Look for a word from a funeral, a prison or a battle used about weather or a place. It is often a metaphor that sets the mood.',
  },
  'Me, poor man, my library\nWas dukedom large enough': {
    why: "Prospero says his library 'Was dukedom large enough': his books were a whole dukedom to him. A library is not a dukedom, but he says it was one, so this is a metaphor. It does not overstate: it says what his books were worth to him.",
    more: 'Prospero was Duke of Milan but left the ruling to his brother while he studied, and his brother stole his title. The metaphor shows both his love of learning and why he lost his power.',
    tip: 'Hyperbole overstates. A metaphor can be quite modest, as here: it says what something was worth to the speaker.',
  },
  'For Antony is but a limb of Caesar.': {
    why: "Brutus calls Antony 'but a limb of Caesar': only an arm or a leg of Caesar's body. Antony is a man, not a limb, so this is a metaphor. It plays Antony down rather than exaggerating.",
    more: 'Brutus is arguing that the plotters should kill only Caesar, not Antony too: cut off the head, and a limb is useless. He is wrong. Antony turns Rome against them.',
    tip: 'Ask whether a metaphor makes something bigger or smaller. Hyperbole always makes it bigger; a metaphor can belittle.',
  },
  "Worry was a pebble in Leah's shoe all through the school trip.": {
    why: 'Worry is called a pebble in a shoe. The sentence says it was one, not that it was like one, so this is a metaphor. It does not exaggerate at all: a pebble is a tiny thing.',
    more: 'A pebble in a shoe is small, but you feel it with every step and cannot ignore it. The metaphor suggests a nagging worry that never quite goes away.',
    tip: 'Some of the best metaphors understate. A small, exact image can say more about a feeling than a huge one.',
  },
  'Yet do I fear thy nature;\nIt is too full o’ th’ milk of human kindness\nTo catch the nearest way.':
    {
      why: "Milk is the food of babies: soft, gentle and nourishing. Lady Macbeth fears her husband is 'too full' of this gentleness to take 'the nearest way' to the crown, which is murder.",
      not: {
        'He is a loving father who cares for his children':
          'The milk is about Macbeth’s gentle nature, not about fatherhood. Lady Macbeth is worried, not praising him as a parent.',
        'He is strong and fierce, ready for anything':
          "She fears the opposite: that he is not fierce enough. 'Too full' of kindness means too soft.",
        'He is kind to everyone, which makes him a good king':
          'She sees his kindness as a weakness, not a virtue, because it stands between him and the crown.',
      },
      more: 'Moments later Lady Macbeth calls on spirits to take away her own gentleness. The play links softness with weakness in her mind, and that is how she pushes Macbeth.',
      tip: 'When one character uses a metaphor about another, ask whether it is fair. Macbeth is brave in battle; his wife sees only one side.',
    },
  'Life’s but a walking shadow; a poor player,\nThat struts and frets his hour upon the stage,\nAnd then is heard no more':
    {
      why: 'A shadow has no substance, and a poor actor struts about for an hour, then is never heard again. Macbeth, told that his wife is dead, sees life the same way: brief, empty and pointless.',
      not: {
        'It is an exciting show to be enjoyed while it lasts':
          "The actor is 'poor' and quickly forgotten. Macbeth is in despair, not enjoying the show.",
        'It is dark and frightening, like a shadow at night':
          'A shadow here is something without substance, not something frightening. The point is emptiness.',
        'It is a career on the stage that he wishes he had chosen':
          'The stage stands for life itself, not a real career. Macbeth means every life is a short, bad performance.',
      },
      more: 'This speech comes near the end of the play. The metaphors of shadow and actor show how his crimes have emptied his life of meaning.',
      tip: 'When a speech uses several metaphors in a row, show how they build one idea: here, that life is hollow.',
    },
  '’tis an unweeded garden\nThat grows to seed; things rank and gross in nature\nPossess it merely.':
    {
      why: "An unweeded garden is one nobody tends: weeds take over and choke everything good. Hamlet feels the whole world is like this, overrun by 'things rank and gross', since his father died and his mother remarried.",
      not: {
        'It is natural and free, which Hamlet finds beautiful':
          "'Rank and gross' means foul and coarse. Hamlet finds the wildness disgusting, not beautiful.",
        'It needs a gardener, a job Hamlet longs to do':
          'Hamlet is not thinking about gardening. The garden is a picture of the world, and he is sick of it.',
        'It is full of flowers that will soon come into bloom':
          "A garden that 'grows to seed' has gone past its best. The image is of decay, not of flowers to come.",
      },
      more: 'This is Hamlet’s first speech alone on stage. The garden links to the play’s many images of rot and disease, which suggest something is badly wrong at the heart of the country.',
      tip: 'Nature images can show a character’s mood. A ruined garden suggests a mind that feels the world has been spoiled.',
    },
  'Who steals my purse steals trash.': {
    why: "Iago calls money 'trash' to make a point: losing a purse matters little, because money comes and goes. His next lines say what does matter: a good name, or reputation, which a thief cannot give back.",
    not: {
      'His purse is old and worn, and should be thrown away':
        'Iago is not describing a real purse. Calling money trash shows how little he claims it matters.',
      'He would be glad if a thief took it from him':
        'He is not inviting thieves. He is saying a stolen purse is a small loss beside a stolen reputation.',
      'He has spent all his money and has none left':
        "Nothing says his money is gone. 'Trash' is about its worth to him, not how much is left.",
    },
    more: 'Iago is pretending to be an honest man who cares about reputation, while he plots to ruin Othello. The audience knows he is lying, which makes the metaphor ironic.',
    tip: 'A metaphor can be part of a speaker’s act. Ask whether the character means what they say, and how the audience knows.',
  },
  'What the hammer? what the chain?\nIn what furnace was thy brain?': {
    why: "A furnace is where a blacksmith melts and shapes iron. Blake imagines the tiger's brain forged in one: made by a mighty maker, in fierce heat, with hammer and chain.",
    not: {
      'It was born somewhere hot, deep in a jungle far away':
        'The furnace belongs to a blacksmith, not a jungle. The image is about how the tiger was made, not where it lives.',
      'It was made gently and slowly, with love':
        'Hammers, chains and furnaces are heavy, violent tools. Nothing in the image is gentle.',
      'It has a fever and its brain is burning':
        'The tiger is not ill. The furnace is the forge where its brain was made, in the maker’s workshop.',
    },
    more: 'The Tyger asks who could have made such a fearsome creature. Picturing the maker as a smith at a forge suggests great power and danger, and fills the questions with awe.',
    tip: 'Follow a metaphor through a poem. Here hammer, chain, furnace and anvil all belong to the same forge.',
  },
  'But manhood is melted into curtsies, valour into compliment, and men are only turned into tongue, and trim ones too':
    {
      why: "Beatrice says manhood has 'melted into curtsies' and men have 'turned into tongue': all bowing and talk. She means men now only make polite speeches instead of acting bravely, so none will defend her cousin Hero.",
      not: {
        'They are skilled dancers who bow beautifully':
          'Curtsies here are polite gestures, not dancing. Beatrice is mocking men who bow and talk instead of acting.',
        'They are brave soldiers who fight for honour':
          "She says the opposite: valour, or bravery, has 'melted' into mere compliments.",
        'They are too shy to speak to women at all':
          "They are all 'tongue': their fault is talking, not shyness. Talk is all they do.",
      },
      more: 'Hero has been shamed at her own wedding, and Beatrice longs to defend her but cannot, as a woman of her time. Her metaphors of melting and turning show her fury that bravery has become empty words.',
      tip: 'Verbs of changing, such as melted and turned, often signal a metaphor. Say what has turned into what, and why it matters.',
    },
  'Now the melancholy god protect thee, and the tailor make thy doublet of changeable taffeta, for thy mind is a very opal.':
    {
      why: "An opal is a gem whose colours shift as it turns, and 'changeable taffeta' is silk that changes colour in the light. Feste is teasing Orsino: his moods keep shifting and never settle.",
      not: {
        'His mind is precious and worth a great deal':
          "Opals are precious, but the 'changeable taffeta' beside it shows which quality is meant: changing colour.",
        'His mind is hard, cold and quite unfeeling':
          'Orsino feels too much, not too little. The opal is about shifting moods, not coldness.',
        'His thinking is clear, so he sees the truth':
          "An opal's colours are cloudy and shifting, not clear. Feste is mocking Orsino's changeable moods.",
      },
      more: 'Orsino swings between love-sick sighing and sudden boredom. Feste, the clown, sees it clearly and uses two images of changing colour to make fun of him.',
      tip: 'When an image could mean several things, use the words around it to decide which the writer means.',
    },
  'A Christmas frost had come at midsummer; a white December storm had whirled over June; ice glazed the ripe apples, drifts crushed the blowing roses':
    {
      why: 'Frost and snow in June would kill everything growing. Jane uses these images for her own life: her hopes, ripe and blooming the day before, have been destroyed all at once, as unnaturally as winter arriving in summer.',
      not: {
        'The weather really turned cold and snowy that June':
          'It is midsummer, and the frost is in Jane’s feelings. The images describe her ruined hopes, not the weather.',
        'She has always loved winter more than summer':
          'Nothing suggests she loves winter. The frost is something terrible that crushes what was growing.',
        'Her wedding has been moved to Christmas instead':
          'There is no new date. The images show that the wedding, and her happiness, have been destroyed.',
      },
      more: 'Jane’s wedding to Rochester has just been stopped, because he already has a wife. Turning summer into winter shows how sudden and complete her loss feels.',
      tip: 'Seasons often stand for feelings: spring for hope, winter for loss. Notice when a writer puts the wrong season in the wrong place.',
    },
  'Our castle’s strength\nWill laugh a siege to scorn': {
    why: "The castle's strength is given a human action: it will 'laugh a siege to scorn'. Only people laugh, so this is personification, the precise name for this kind of metaphor.",
    more: 'An army is marching on Macbeth’s castle. Making the walls laugh at the enemy shows his confidence, perhaps too much of it, since his luck is about to run out.',
    tip: 'When a speaker personifies their own side as strong or scornful, ask whether the boast sounds sure or desperate.',
  },
  'Her heart did whisper, that he had done it for her.': {
    why: "Elizabeth's heart is given a voice: it 'did whisper' to her. A heart cannot speak, so giving it a human action is personification.",
    more: 'Elizabeth has learnt that Darcy secretly helped her family. Her heart whispering suggests a quiet hope she hardly dares to admit, even to herself.',
    tip: 'Personifying a part of a character, such as the heart or the mind, can show feelings they will not say aloud.',
  },
  'misery acquaints a man with strange bed-fellows.': {
    why: "Misery is given a human action: it 'acquaints', or introduces, a man to strange companions. An unhappy state cannot introduce anyone, so this is personification.",
    more: 'Trinculo, caught in a storm, crawls under the cloak of the odd creature Caliban for shelter. The saying means that trouble pushes people together who would never choose each other.',
    tip: 'Many sayings personify an idea. When you meet one, explain the person the idea has become: here, someone making introductions.',
  },
  'But age with his stealing steps\nHath claw’d me in his clutch': {
    why: "Age is given a body and actions: it creeps up 'with his stealing steps' and has 'claw'd me in his clutch'. Giving human qualities to an idea is personification.",
    more: 'The gravedigger sings this while he digs a grave. Old age creeps up quietly, then grabs and holds on, so the song makes growing old feel sudden and inescapable.',
    tip: 'Ideas such as age, time and death are often personified as a figure who comes for us. Say what kind of figure the writer makes them.',
  },
  'Four days will quickly steep themselves in night;\nFour nights will quickly dream away the time':
    {
      why: "Days and nights are given human actions: days 'steep themselves in night' and nights 'dream away the time'. Only people dream, so this is personification.",
      more: 'Hippolyta is reassuring Theseus, who is impatient for their wedding in four days. Making the nights dream the time away suggests it will pass quickly and pleasantly.',
      tip: 'Personifying time can make it seem fast or slow. Ask whether the writer’s verbs speed time up or drag it out.',
    },
  'The grey-ey’d morn smiles on the frowning night,\nChequering the eastern clouds with streaks of light':
    {
      why: "The morning 'smiles' and the night is 'frowning'. Faces and smiles belong to people, so giving them to morning and night is personification.",
      more: 'Friar Lawrence is out at dawn gathering herbs. The smiling morning chasing away the frowning night makes daybreak feel hopeful, just before Romeo arrives with news of his new love.',
      tip: 'Personified light and dark often carry a mood. Notice which one smiles and which one frowns.',
    },
  'Methinks the wind hath spoke aloud at land.': {
    why: "The wind is given a voice: it 'hath spoke aloud'. Speaking is a human action, so this is personification.",
    more: "A great storm is blowing at sea off Cyprus. 'Methinks' means I think. A wind that speaks aloud sounds powerful and almost deliberate, as if the storm has something to say.",
    tip: 'Verbs of speech, such as speaks, whispers or shouts, are quick ways to personify weather. Notice how loud the voice is.',
  },
  'Courtesy itself must convert to disdain if you come in her presence.': {
    why: "Courtesy, or politeness, is given a human choice: it 'must convert to disdain', changing sides as a person might. Giving an idea a human action is personification.",
    more: 'Beatrice is mocking Benedick: he is so annoying that politeness itself would turn rude in his company. The joke is sharper because she makes courtesy into a person who cannot stand him.',
    tip: 'Personification can be a weapon in an argument. Beatrice uses it to insult Benedick without calling him a single name.',
  },
  'In our last conflict four of his five wits went halting off': {
    why: "Benedick's wits, his powers of mind, are given human legs: they 'went halting off', limping away like wounded soldiers. Giving ideas human actions is personification.",
    more: "Beatrice claims she beat Benedick so badly in their last battle of words that four of his 'five wits' limped away. She makes him sound left with barely a mind at all.",
    tip: 'Comic personification often turns something abstract into a little scene. Describe the scene as well as naming the device.',
  },
  'The clock upbraids me with the waste of time.': {
    why: "The clock 'upbraids', or scolds, Olivia for wasting time. A clock is an object, so giving it a human voice is personification. It is not pathetic fallacy, which is weather or nature that reflects a feeling.",
    more: 'Olivia has fallen for Cesario, who will never love her back, and the clock strikes. Its scolding sounds like her own conscience telling her she is wasting her time.',
    tip: 'Pathetic fallacy needs weather or a natural setting. A personified object, however moody, is personification.',
  },
  'my very visor began to assume life and scold with her.': {
    why: "Benedick's visor, the mask he wore at the dance, 'began to assume life and scold with her'. Giving an object life and a voice is personification; there is no weather or nature here to make it pathetic fallacy.",
    more: 'Beatrice insulted Benedick at the masked dance without seeming to know who he was. He exaggerates comically: her words were so cutting that even his mask wanted to argue back.',
    tip: 'Personification and exaggeration often work together in comedy. Name both, and say what the picture adds.',
  },
  'The gold had asked that he should sit weaving longer and longer': {
    why: "The gold is given a human voice: it 'had asked' Silas to keep weaving. Money is an object, so this is personification. It is not pathetic fallacy, which needs weather or nature reflecting a mood.",
    more: 'Silas once lived for his hoard of gold, which seemed to demand more and more work. Now his adopted daughter Eppie calls him away, and the contrast shows what has changed in him.',
    tip: 'When an object makes demands of a character, ask what that shows about their life: here, a man ruled by money.',
  },
  'just at that point a certain sinister block of building thrust forward its gable on the street.':
    {
      why: "The building 'thrust forward its gable' as a person pushes forward their head. Giving a human action to a building is personification, the most precise name: it is a kind of metaphor, but its own name is better.",
      more: "This is the door Hyde uses, in a dingy back street. The building seems to push itself rudely into the street, and 'sinister' makes it feel threatening, as if it has something to hide.",
      tip: 'Buildings in Gothic stories often seem alive and watchful. Look for the verb that gives them life.',
    },
  'Danger knows full well\nThat Caesar is more dangerous than he.': {
    why: "Danger is given a mind: it 'knows full well' that Caesar is more dangerous than he. Knowing is a human act, so this is personification, which is more precise here than metaphor.",
    more: 'Caesar’s wife begs him to stay at home because of terrible omens. He boasts that danger itself fears him. The audience knows he will be killed that day, which makes the boast hollow.',
    tip: 'Personification can show pride. When a character makes an idea afraid of them, ask whether the confidence is justified.',
  },
  'O conspiracy,\nSham’st thou to show thy dangerous brow by night,\nWhen evils are most free?': {
    why: "Brutus speaks to conspiracy as a person with a 'dangerous brow', a face, who is ashamed to show it. Giving an idea a face and feelings is personification, the precise name for this kind of metaphor.",
    more: 'Brutus has joined the plot against Caesar and is waiting for the plotters at night. Picturing conspiracy as a person hiding its face shows how guilty and secret the plan feels to him.',
    tip: 'Speaking to an idea as if it could hear is a strong form of personification. Notice what the speaker asks it or accuses it of.',
  },
  'Mischief, thou art afoot': {
    why: "Antony speaks to mischief as if it were a person now 'afoot', walking about on its own. Giving an idea the life of a person is personification, the most precise name here.",
    more: 'Antony has just turned the crowd against Caesar’s killers with his funeral speech. Calling mischief a figure set loose shows that he has started something he can no longer control, and is glad of it.',
    tip: 'When a character addresses an idea directly, it often marks a turning point. Ask what has just been set in motion.',
  },
  'Till gathering sleep had mothered them from him.': {
    why: "Sleep is given a mother's action: it 'mothered' the children away from him, as a mother takes her children to bed. Giving sleep a human role is personification, which is more precise here than metaphor.",
    more: "Owen's soldier, back from the war and in a wheelchair, hears boys playing in the park until sleep takes them home to bed. The tender, motherly image leaves him alone in the dark, shut out from the play he once shared.",
    tip: 'A gentle personification can make a sad poem sadder. Notice the comfort the soldier no longer has.',
  },
  'In such a night as this,\nWhen the sweet wind did gently kiss the trees,\nAnd they did make no noise':
    {
      why: "The wind is given a human action: it 'did gently kiss the trees'. That is personification. 'In such a night as this' compares nothing: 'such ... as' simply means a night like this one.",
      more: "Lorenzo and Jessica are newly married and sitting in a moonlit garden. The kissing wind makes the whole night seem in love, and because the gentle night matches the lovers' mood, it can be read as pathetic fallacy as well.",
      tip: "'Such ... as' and 'as soon as' contain 'as' but compare nothing. Look for the device in the words around them.",
    },
  'The stairs groaned under every step as Jess climbed towards the attic.': {
    why: "A groan is the sound a person makes in pain. Giving it to the stairs makes the old house seem to suffer under Jess's weight, and every step adds to the feeling that something is wrong up there.",
    not: {
      'Jess has hurt herself and cries out in pain':
        'It is the stairs that groan, not Jess. The sound belongs to the house, which seems to be in pain.',
      'The stairs are being mended by builders working below':
        "Nothing suggests builders. 'Groaned' gives the stairs a human sound of pain, which makes the climb uneasy.",
      'The house is glad to welcome a new visitor':
        'A groan is a sound of pain or misery, not of welcome. The house seems unhappy to bear her weight.',
    },
    more: 'Writers of ghost stories often give old houses human sounds and feelings. It makes the building feel alive and unwelcoming before anything frightening has happened.',
    tip: 'To write about the effect of one word, say what it usually describes, then what that adds here: a groan is pain, so the house seems to hurt.',
  },
  'The evil that men do lives after them,\nThe good is oft interred with their bones': {
    why: "Antony personifies evil as something that 'lives after' a person, while their good is 'interred', or buried, with their bones. People remember a man's wrongs and forget the good he did.",
    not: {
      'Their good deeds are never forgotten by anyone':
        'Antony says the opposite: the good is buried with their bones.',
      'Evil people are punished long after they have died':
        "'Lives after them' means the evil is remembered, not punished. Antony is speaking about memory and reputation.",
      'Everyone is remembered fairly, good and bad alike':
        'His point is that memory is unfair: the evil lasts and the good is forgotten.',
    },
    more: 'Antony is speaking at Caesar’s funeral, having promised the killers he will not blame them. He begins with this general truth, then slowly reminds the crowd of every good thing Caesar did.',
    tip: 'A speech can begin with a general saying to win the audience before getting to its real point. Ask what the saying prepares them for.',
  },
  'Age cannot wither her, nor custom stale\nHer infinite variety.': {
    why: "Age is personified as something that withers, and custom, or habit, as something that makes things stale. Neither can touch Cleopatra: her 'infinite variety' means she is always new, never dull.",
    not: {
      'She has grown old and tired of the same habits':
        "He says the opposite: age 'cannot wither her', and habit cannot make her stale.",
      'She is very young, so age has not reached her yet':
        'Cleopatra is not young. The point is that time cannot spoil her, whatever her age.',
      'She changes her mind so often that nobody trusts her':
        "'Infinite variety' is praise for how endlessly fascinating she is, not a complaint about being changeable.",
    },
    more: 'Enobarbus, a tough soldier, is explaining why Antony will never leave her. Even from a man who mocks love, the praise is total.',
    tip: 'When personified forces fail against a character, it shows how remarkable the writer thinks they are.',
  },
  'Love’s not Time’s fool, though rosy lips and cheeks\nWithin his bending sickle’s compass come': {
    why: "Time is personified with a 'bending sickle', a curved blade, cutting down 'rosy lips and cheeks' as a reaper cuts crops. Beauty falls to it, but love is 'not Time's fool': it is not at time's mercy.",
    not: {
      'Time makes true love grow stronger with every passing year':
        'The sonnet does not say love grows stronger. It says love is not ruled by time, even as beauty fades.',
      'True love is foolish, because time destroys it':
        "'Love's not Time's fool' means love is not something time can mock or control. The poem praises love.",
      'Time is a farmer who looks after young lovers':
        'Time carries a sickle, a blade for cutting crops, but it cuts down beauty rather than caring for it.',
    },
    more: 'Time with a sickle is an old picture: Father Time, a reaper who cuts down every living thing. Shakespeare uses it to set love apart from everything that ages and dies.',
    tip: 'Notice what a personified figure carries: a sickle, a crown, a key. The object tells you what the figure does.',
  },
  'If you can fill the unforgiving minute\nWith sixty seconds’ worth of distance run': {
    why: 'Forgiving is something people do. A minute that is unforgiving will not excuse you or give you another try: once its sixty seconds have passed, they are gone.',
    not: {
      'It is angry with the reader for being lazy':
        "The minute is not cross with anyone. 'Unforgiving' means it never lets you have time back.",
      'It feels endless, because the runner is so tired':
        'A minute that cannot be filled again is short, not endless. The point is that it will not wait.',
      'It forgives anyone who has tried their best':
        'That is the opposite of unforgiving. Every second must be used, or it is lost.',
    },
    more: "The poem is a father's advice to his son. Filling 'the unforgiving minute' with 'sixty seconds' worth of distance run' means making every moment count.",
    tip: 'One adjective can personify. Ask what a person who is unforgiving, patient or cruel would do, then apply it to the thing.',
  },
  'The cold within him froze his old features, nipped his pointed nose, shrivelled his cheek, stiffened his gait':
    {
      why: "Dickens makes 'the cold within him' act like a person: it froze his face, nipped his nose, shrivelled his cheek and stiffened his walk. Scrooge's coldness of heart shows on the outside.",
      not: {
        'He lives in a freezing house and cannot afford a single fire':
          "The cold is 'within him'. Scrooge can afford a fire: he is too mean to want warmth, inside or out.",
        'He is ill with a fever that makes him shiver':
          'Nothing suggests illness. The cold that nips and shrivels him comes from his own nature.',
        'He is old, and age has made him look stiff and tired':
          "He is old, but Dickens says the cause is 'the cold within him', not his age.",
      },
      more: 'This comes at the very start of the story. Dickens keeps linking Scrooge to cold and ice, so that when he changes, warmth and light can mark the change.',
      tip: 'When a writer makes a quality act on a character’s body, it shows that the quality has taken them over.',
    },
  'Love looks not with the eyes, but with the mind;\nAnd therefore is wing’d Cupid painted blind.':
    {
      why: "Love is personified as someone who 'looks not with the eyes, but with the mind', which is why Cupid, the god of love, is painted blind. Love sees what the lover imagines, not what is really there.",
      not: {
        'It only cares about how beautiful someone looks':
          "She says the opposite: love 'looks not with the eyes', so looks are not what it goes by.",
        'It is cruel, because Cupid shoots his arrows at people blindly':
          'Cupid is blind because love does not judge by sight, not because he is cruel.',
        'It is wise, so it always chooses the right person':
          'Helena means love is blind and can be foolish. In the play, lovers choose badly all the time.',
      },
      more: 'Helena loves Demetrius, who scorns her, though she is as beautiful as Hermia. Her line explains the whole play, where the lovers’ eyes are later tricked by a magic flower.',
      tip: 'When a character states a general truth about love, test it against the plot. Here the play proves Helena right.',
    },
  'Night’s candles are burnt out, and jocund day\nStands tiptoe on the misty mountain tops.': {
    why: 'The day is personified as someone standing on tiptoe on the mountain tops, poised to step down into the valley. Dawn is just about to break, and Romeo, banished from Verona, must go before he is found.',
    not: {
      'It is shy and does not want to disturb the lovers':
        "The day is 'jocund', cheerful, not shy. It is poised to step in, which is bad news for the lovers.",
      'It is far away, so the lovers have plenty of time':
        'Standing tiptoe on the mountain tops means it is ready to arrive any moment, not far off.',
      'It is dancing for joy because Romeo and Juliet are married':
        'Tiptoe here is about being poised to move, not dancing. Daylight means danger for Romeo, who is banished.',
    },
    more: "'Night's candles', the stars, have burnt out too. The lovers have spent their wedding night together, and the cheerful day is their enemy.",
    tip: 'In this play, day and night swap their usual moods. Notice when light, normally good, becomes a danger.',
  },
  'Purple the sails, and so perfumed that\nThe winds were love-sick with them': {
    why: "The winds are personified as lovers, 'love-sick' with longing for the perfumed purple sails. If even the winds fall in love with the barge, its beauty, and Cleopatra's, must be overwhelming.",
    not: {
      'The winds are making the sailors seasick on the river':
        'Love-sick means sick with love, not seasick. Nobody on board is ill.',
      'The perfume is so strong that it makes people ill':
        'The perfume is not harmful. It is so lovely that even the winds are lovesick for it.',
      'The weather is calm because nobody wants to travel':
        'The winds are not still: they are drawn to the perfumed sails, full of longing.',
    },
    more: 'Enobarbus is describing the first time Antony saw Cleopatra, sailing down the river. Nature itself seems to adore her, which helps explain why Antony could not resist.',
    tip: 'When nature behaves like a person in love, it often magnifies a character. Ask what it makes the reader feel about them.',
  },
  'When sorrows come, they come not single spies,\nBut in battalions.': {
    why: 'Sorrows are personified as soldiers. Spies arrive one at a time, but sorrows come in battalions, whole army units at once. Troubles pile on top of each other.',
    not: {
      'Sad news is spread by secret spies at court':
        'There are no real spies. Sorrows are compared with spies, who come singly, and soldiers, who come in great numbers.',
      'Sorrows can be fought off and beaten, like an invading army':
        'The battalions are about how many sorrows come at once, not about fighting them off.',
      'Each sorrow comes alone, so it is easy to bear':
        "He says the opposite: they come 'not single spies, / But in battalions', all together.",
    },
    more: "Claudius says this after Ophelia, driven mad by her father's death, has left the stage. One grief has led to another, and more are on the way.",
    tip: 'Military personification makes troubles sound like an attack. Say how the image makes the troubles feel.',
  },
  'I have a high respect for your nerves. They are my old friends.': {
    why: "Mr Bennet calls his wife's nerves 'my old friends': he has known them so long they feel like people he has lived with. The joke shows she complains of her nerves constantly, and he is weary and amused.",
    not: {
      'He truly respects his wife’s feelings and worries':
        "His 'high respect' is teasing. He is mocking how often she mentions her nerves, not honouring them.",
      'His wife has many friends who help her stay calm':
        'The old friends are her nerves themselves, not real people. The joke is that her complaints are so familiar.',
      'He is as nervous as his wife, and always has been':
        'Mr Bennet is calm and amused. The nerves are hers, and he has simply heard about them for twenty years.',
    },
    more: 'This is in the first chapter of the novel. In a few lines Austen shows a marriage where the husband teases and the wife does not notice she is being teased.',
    tip: 'Personification can be ironic. When a character calls a nuisance a friend, ask what they really mean.',
  },
  'The grief that does not speak\nWhispers the o’er-fraught heart, and bids it break.': {
    why: "Grief is personified as someone whispering to the 'o'er-fraught', overloaded, heart and telling it to break. Malcolm means that grief kept inside will break a heart, so it must be put into words.",
    not: {
      'Grief is best kept quiet so that it fades away':
        'Malcolm says the opposite: grief that does not speak whispers to the heart until it breaks.',
      'A man should never weep, or talk to anyone about his grief':
        "He has just said 'Give sorrow words': he wants Macduff to speak, not to keep quiet.",
      'Grief speaks loudly, so everyone can hear it':
        "The grief that does not speak only 'whispers', to the heart alone. Nobody else hears it.",
    },
    more: 'Macduff has just heard terrible news about his family. Malcolm’s advice comes in the line before: "Give sorrow words". It is a moment of real tenderness in a violent play.',
    tip: 'Personification can make an inner feeling into a voice. Ask what the voice says and who hears it.',
  },
  'Vaulting ambition, which o’erleaps itself\nAnd falls on th’ other': {
    why: "Ambition is pictured as a rider 'vaulting', leaping into the saddle, who 'o'erleaps itself': jumps too far and falls off the other side. Macbeth fears his ambition will carry him into disaster.",
    not: {
      'It will carry him safely over every obstacle in his way':
        "He fears the opposite: ambition that 'o'erleaps itself' jumps too far and lands badly.",
      'It is a fine horse that he is proud to ride':
        'There is no horse. Ambition is pictured as a rider vaulting into the saddle, and the point is the fall.',
      'It is too weak to make him do anything at all':
        "His ambition is strong, 'vaulting'. His fear is that it is too strong and will carry him over.",
    },
    more: 'Macbeth is alone, wondering whether to kill King Duncan. He admits he has no good reason, only ambition, and he can already see where it might lead.',
    tip: 'A character can see their own flaw clearly and still give in to it. That is a strong point to make about Macbeth.',
  },
  'The lawn started at the beach and ran toward the front door for a quarter of a mile, jumping over sun-dials and brick walks and burning gardens':
    {
      why: "The lawn 'started at the beach and ran toward the front door for a quarter of a mile, jumping over' everything in its way. Running and jumping make it seem alive and eager, rushing up to the grand house.",
      not: {
        'It is overgrown, because nobody bothers to cut it':
          'Nothing suggests neglect. It is a vast, perfect lawn, so lively that it seems to run.',
        'Children are running races across it in the sun':
          'The lawn itself does the running. There are no children in the sentence.',
        'It is uneven and dangerous, full of hidden holes and bumps':
          'Jumping over sun-dials and walks is playful energy, not a description of bumps and holes.',
      },
      more: 'Nick is describing the Buchanans’ mansion. The lively lawn shows wealth on a huge scale, but it is energy without purpose, like the rich people who live there.',
      tip: 'Personification can make a setting feel restless or calm. Ask what the setting’s energy says about the people in it.',
    },
  'When shall we three meet again?\nIn thunder, lightning, or in rain?': {
    why: 'The witches will meet in thunder, lightning or rain. Wild, stormy weather matches their dark, evil purpose and the chaos to come, so this is pathetic fallacy: weather that reflects the mood of the scene.',
    more: 'These are the first lines of Macbeth. Before we know anything else, the storm tells us the play will be full of disorder, violence and the supernatural.',
    tip: 'Notice the weather at the start of a story or scene. Writers often use it to set the mood before anything happens.',
  },
  'There was a melancholy wind, and the marshes were very dismal.': {
    why: "The wind is 'melancholy' and the marshes 'very dismal': the whole setting is sad and gloomy. Weather and a landscape that reflect the mood of the scene make pathetic fallacy.",
    more: 'Pip is on the lonely marshes at night, on his way to a dangerous meeting. The sad wind and dismal marshes make the reader uneasy about what will happen there.',
    tip: 'Look for feeling words used about weather or a landscape: melancholy, dismal, cheerful, angry. They often signal pathetic fallacy.',
  },
  'On the day her best friend moved away, a thin grey rain fell until dark.': {
    why: 'The day her best friend leaves is a sad one, and a thin grey rain falls all day. The weather mirrors her sadness, which is pathetic fallacy.',
    more: "The rain is not given any human feeling: it simply falls. It is the match between the grey weather and the girl's loss that makes this pathetic fallacy, not personification.",
    tip: 'Pathetic fallacy does not need personification. Ask whether the weather matches what a character feels.',
  },
  'Just as Zara heard that she had won the art prize, the sun came out over the garden.': {
    why: "At the very moment Zara hears her good news, the sun comes out. The bright weather reflects her joy, so this is pathetic fallacy. 'Just as' means at the moment when: nothing is compared.",
    more: 'Sunshine breaking through often marks happiness, relief or hope in stories. Here it arrives at exactly the right moment to share Zara’s delight.',
    tip: 'Timing matters: weather that changes at the moment a feeling changes is a strong sign of pathetic fallacy.',
  },
  'For this relief much thanks. ’Tis bitter cold,\nAnd I am sick at heart.': {
    why: "Francisco, a guard on watch at night, says it is 'bitter cold' and that he is 'sick at heart'. The cold weather matches his uneasy, unhappy mood, which is pathetic fallacy. The cold is not given human qualities.",
    more: 'These are among the first lines of Hamlet. The guards have seen a ghost on these battlements, and the bitter cold sets a mood of unease that hangs over the whole play.',
    tip: 'When a character mentions the weather and their feelings in the same breath, look for pathetic fallacy.',
  },
  'I pray thee, good Mercutio, let’s retire:\nThe day is hot, the Capulets abroad,\nAnd if we meet, we shall not scape a brawl':
    {
      why: "Benvolio says 'The day is hot' and the Capulets are out, so a fight is likely. Hot weather matches hot tempers: the heat reflects, and stirs up, the anger in the streets. That is pathetic fallacy.",
      more: 'Minutes later Tybalt kills Mercutio and Romeo kills Tybalt. The heat warns the audience that tempers are about to boil over.',
      tip: 'Hot weather often goes with anger or passion in stories, cold with loneliness or fear. Say what the weather warns the reader about.',
    },
  'It was wretched weather; stormy and wet, stormy and wet; mud, mud, mud, deep in all the streets.':
    {
      why: "The weather is 'wretched', miserable, and the streets are deep in mud. It matches the dark, uneasy mood of the night, which is pathetic fallacy. Wretched weather is simply very bad weather: it is not given a human mind.",
      more: 'This is the stormy night when a stranger from Pip’s past climbs his stairs and changes everything. The repeated words, stormy and wet, mud, mud, mud, make the gloom feel endless.',
      tip: "Look out for 'wretched': it is spelt with a w but begins with an r sound, so 'wretched weather' does not alliterate.",
    },
  'On the night the factory closed and two hundred people lost their jobs, a heavy fog settled over the town.':
    {
      why: 'The town has just lost its factory and two hundred jobs, and that night a heavy fog settles over it. The gloomy weather mirrors the town’s mood, which is pathetic fallacy.',
      more: 'The fog is not given human feelings: it only settles. Its heaviness matches the weight of bad news, as if the whole town were under a cloud.',
      tip: 'Pathetic fallacy can show the mood of a whole community, not just one character.',
    },
  'The week Gran came home after six months abroad, the snow melted and the first green shoots appeared.':
    {
      why: "The week Gran comes home, winter gives way to spring: the snow melts and green shoots appear. The change in the weather mirrors the family's joy at having her back, which is pathetic fallacy.",
      more: 'Melting snow and new shoots are signs of new life. Nothing in the sentence is given human feelings; the match between season and mood does the work.',
      tip: 'A change of season can mirror a change in a character’s life. Look for the moment the weather turns.',
    },
  'Storm clouds gathered over the pitch as the two captains glared at each other.': {
    why: "Storm clouds gather as the two captains glare at each other. The darkening weather mirrors the tension between them, which is pathetic fallacy. 'As' means while here; nothing is compared.",
    more: 'The clouds are not given human feelings: they simply gather. But a coming storm warns of trouble, just as the glare warns that a clash is coming.',
    tip: 'Weather can do the job of a warning. Ask what is about to happen when a storm gathers.',
  },
  'Light thickens; and the crow\nMakes wing to th’ rooky wood.': {
    why: "'Light thickens' as dusk falls, and the crow, a bird linked with death, flies to the dark wood. Macbeth welcomes the night because it will cover the murder he has planned: the gathering dark mirrors the evil.",
    not: {
      'The day is ending peacefully and everyone can rest':
        'Nothing here is peaceful. Darkness thickening, and a crow flying to its wood, prepare for a killing.',
      'A storm is on its way, so the crow is flying home':
        "There is no storm. 'Light thickens' means darkness is closing in, and it matches the evil about to be done.",
      'Macbeth is tired and wants to go to sleep early':
        'Macbeth is not sleepy. He welcomes the night because it will hide the murder he has ordered.',
    },
    more: 'Macbeth has hired murderers to kill his friend Banquo. Throughout the play, darkness goes with evil deeds, and Macbeth often calls on night to hide them.',
    tip: 'Track light and dark through a play. In Macbeth, night is almost always the time of crime.',
  },
  'Mud-coloured clouds drooped sadly over the muddy streets.': {
    why: "Clouds cannot be sad, so 'drooped sadly' gives the weather a low, heavy mood. That evening Watson feels nervous and depressed, and the dreary weather matches him: pathetic fallacy, helped by personification.",
    not: {
      'The clouds are about to break and let the sun through':
        'Clouds that droop sadly are sinking and heavy, not breaking up. The scene stays gloomy.',
      'The streets have been flooded by a sudden storm':
        'Muddy streets are not a flood. The words describe a dull, heavy evening, not a sudden storm.',
      'Watson is excited about the adventure that lies ahead':
        'Watson admits he feels nervous and low that evening. The drooping clouds match his mood.',
    },
    more: "The repeated mud, 'Mud-coloured' clouds over 'muddy streets', makes London seem dirty and dull everywhere you look.",
    tip: 'When weather is given a feeling, check whether a character shares it. That match is what makes pathetic fallacy.',
  },
  'A glooming peace this morning with it brings;\nThe sun for sorrow will not show his head.': {
    why: "The sun will not show his head 'for sorrow': it is too sad to rise. The cloudy morning mirrors the grief of Verona at the deaths of Romeo and Juliet, so nature itself seems to mourn.",
    not: {
      'It will rain later, so the families should go home':
        'The Prince is not giving a weather forecast. The hidden sun is a sign of grief.',
      'The feud is over, so everyone can be happy again':
        "The families are reconciled, but the peace is 'glooming', dark and sad. Nobody is happy.",
      'The sun is shy and hiding from the angry Prince':
        "The sun hides 'for sorrow', for grief, not from shyness or fear.",
    },
    more: "These are the Prince's words at the end of the play. 'A glooming peace' is a gloomy one: the feud has ended, but at a terrible price.",
    tip: 'Endings often use weather to sum up a story. Ask what the final weather says about how the story ends.',
  },
  'Morning, dismal and wet, at length dawned, and discovered to my sleepless and aching eyes the church of Ingolstadt, its white steeple and clock, which indicated the sixth hour.':
    {
      why: "After a sleepless night, a 'dismal and wet' morning dawns. Victor's great success has become a nightmare, and the gloomy weather mirrors his horror and misery: pathetic fallacy.",
      not: {
        'He is excited and cannot wait to show his work':
          'Victor is horrified by what he has made. A dismal, wet morning matches despair, not excitement.',
        'Autumn has come, and the town is getting colder':
          'The weather is there for its mood, not to mark the season. It mirrors how Victor feels.',
        'He has slept well and feels ready for a new day':
          "His eyes are 'sleepless and aching'. He has not slept at all.",
      },
      more: 'Victor worked for nearly two years to create life. The moment it succeeds, he is filled with disgust, and the novel’s weather turns dark with him.',
      tip: 'Compare a character’s hopes with the weather that greets their success. A gloomy morning after a triumph shows something has gone wrong.',
    },
  'No fog, no mist; clear, bright, jovial, stirring, cold; cold, piping for the blood to dance to; Golden sunlight; Heavenly sky; sweet fresh air; merry bells.':
    {
      why: "The fog and mist of the earlier staves have gone. The morning is 'clear, bright, jovial', with golden sunlight and merry bells. The lively, joyful weather mirrors Scrooge's own new happiness.",
      not: {
        'He is still cold and mean, like the frosty air':
          'The cold here is lively and joyful, making the blood dance. It matches a changed, happy Scrooge.',
        'He wishes the day were warm instead of cold':
          'He loves the cold morning: it is bright, sweet and fresh. Nothing suggests he wishes it different.',
        'He is too tired after the night to enjoy the weather':
          'He is full of energy. The weather is as wide awake and cheerful as he is.',
      },
      more: 'At the start, Dickens surrounds Scrooge with fog and gloom. The change in the weather on the last morning marks the change in him.',
      tip: 'Compare the weather at the start of a story with the weather at the end. The difference often shows how a character has changed.',
    },
  'The day agreed upon was pouring rain.': {
    why: 'Gatsby has waited five years for this meeting and is terribly nervous. The pouring rain mirrors his anxiety and the awkward start; when the meeting finally goes well, the sun comes out.',
    not: {
      'The meeting will be cancelled because of the storm':
        'The meeting goes ahead in the rain. The weather matters for its mood, not as an obstacle.',
      'Gatsby is calm and has no worries about the meeting':
        'Gatsby is so nervous that he nearly leaves. The pouring rain matches his anxiety.',
      'Summer is over and autumn has already arrived':
        'It is still summer. The rain is there to mirror feelings, not to mark the season.',
    },
    more: 'Fitzgerald times the weather carefully in this chapter. The rain and the sunshine follow Gatsby’s feelings almost minute by minute.',
    tip: 'Follow the weather through a chapter. If it changes when a character’s mood changes, that is pathetic fallacy at work.',
  },
  'The next day was broiling, almost the last, certainly the warmest, of the summer.': {
    why: "'Broiling' means grilling hot, and it is the warmest day of the summer. The fierce heat matches the rising tempers of the day, when Gatsby and Tom finally clash over Daisy.",
    not: {
      'The summer has been a happy, relaxed one for everyone':
        "'Broiling' heat is uncomfortable, not relaxing. It prepares for anger, not happiness.",
      'The characters are going on a pleasant trip to the beach':
        'They drive into the city, not to the beach, and the day ends in a terrible quarrel.',
      'The weather is about to turn cold and wintry':
        'Nothing suggests a change. The point is the heat itself, which matches the rising anger.',
    },
    more: "'Almost the last' day of summer also hints at an ending. After this day, the novel moves quickly towards its tragedy.",
    tip: 'Heat often goes with anger and passion. When a writer stresses the hottest day, expect trouble.',
  },
  'And the mists had all solemnly risen now, and the world lay spread before me.': {
    why: "The mists 'had all solemnly risen' and 'the world lay spread before me'. As the fog clears, Pip's future seems to open up: the clearing weather mirrors his hope and his sense of a new beginning.",
    not: {
      'He is lost in thick fog and cannot find his way':
        'The mists have risen, cleared away. Pip can now see the world spread out before him.',
      'His future looks dark, and he expects only trouble':
        "The mists have lifted, not closed in. 'The world lay spread before me' is open and full of promise, not dark.",
      'The weather on the marshes is getting worse':
        'The mists clearing means the weather is improving, as Pip’s hopes are.',
    },
    more: 'Mists on the marshes appear at key moments in the novel. Here, at the end of the first part, they lift as Pip leaves his old life behind.',
    tip: 'A clearing sky can mark a fresh start. Notice what the character can now see that they could not before.',
  },
  'the great horse-chestnut at the bottom of the orchard had been struck by lightning in the night, and half of it split away.':
    {
      why: 'On the night of their engagement, lightning splits the great chestnut tree in two. A tree torn in half is a warning: something is about to tear Jane and Rochester apart.',
      not: {
        'The storm has ruined the garden for the wedding':
          'The garden is not the point. The tree split in two is a warning about the couple.',
        'Rochester will grow strong and tall like the tree':
          'The tree is struck and split, not growing. It suggests damage and division.',
        'Jane and Rochester have quarrelled in the night':
          'They have not quarrelled. They are happy, which makes the warning more frightening.',
      },
      more: "Jane and Rochester sat beneath this tree when he proposed. The storm broke minutes later, just after Rochester said of man's opinion, 'I defy it': the weather seems to mirror the wrong hidden in his promise. Weeks later their wedding is stopped.",
      tip: 'Nature can warn as well as mirror a mood. When it is damaged at a happy moment, ask what it foreshadows.',
    },
  'Full fathom five thy father lies.': {
    why: "Full, fathom, five and father all begin with the same 'f' sound. Repeating the opening sound of words close together is alliteration.",
    more: "Ariel, a spirit, sings this to Ferdinand, who believes his father has drowned. 'Fathom' is a measure of sea depth, six feet. The soft, breathy f sounds make the song hushed and haunting.",
    tip: 'Alliteration helps a song or a line stick in the memory. Read it aloud and notice how the repeated sound shapes it.',
  },
  'Ill met by moonlight, proud Titania.': {
    why: "'Met' and 'moonlight' begin with the same 'm' sound, close together. Repeating the opening sound of nearby words is alliteration.",
    more: "Oberon and Titania, king and queen of the fairies, are quarrelling. 'Ill met' means an unlucky meeting, and the smooth m sounds make his greeting sound cold and mocking.",
    tip: 'Alliteration need not be a string of words. Two well-placed words can be enough to make a line memorable.',
  },
  'Thou and I are too wise to woo peaceably.': {
    why: "'Wise' and 'woo' begin with the same 'w' sound, with only 'to' between them. Repeating the opening sound of nearby words is alliteration.",
    more: 'Benedick and Beatrice have spent the play trading insults, and now they are falling in love. The neat sound of "wise to woo" fits his joke: they are too clever to court each other quietly.',
    tip: 'Look for alliteration that links two key words. Here it ties being wise to wooing, which is the joke.',
  },
  'I do perceive here a divided duty': {
    why: "'Divided' and 'duty' begin with the same 'd' sound, side by side. Repeating the opening sound of nearby words is alliteration.",
    more: 'Desdemona explains to her father that she now owes duty to two people: him and her new husband, Othello. The firm d sounds make her calm, clear answer sound strong.',
    tip: 'Alliteration can make a short phrase sound decided and firm. Notice who is speaking, and what that firmness shows about them.',
  },
  'Let me speak proudly: tell the Constable\nWe are but warriors for the working-day.': {
    why: "'Warriors' and 'working-day' begin with the same 'w' sound, close together. Repeating the opening sound of nearby words is alliteration.",
    more: "Before the battle of Agincourt, Henry tells the French that his men are 'warriors for the working-day': ordinary, tired soldiers, not fine ones dressed for show. The alliteration makes his pride ring out.",
    tip: 'Leaders often use alliteration in speeches, because a repeated sound is easy to remember and to cheer.',
  },
  'Therefore thou gaudy gold,\nHard food for Midas, I will none of thee': {
    why: "'Gaudy' and 'gold' begin with the same hard 'g' sound, side by side. Repeating the opening sound of nearby words is alliteration.",
    more: 'Bassanio is choosing between gold, silver and lead caskets to win Portia. Midas wished that all he touched would turn to gold, then found that even his food did. The harsh g sounds help him reject showy gold.',
    tip: 'Hard sounds such as g, k, b and t can make a line sound scornful. Ask how the speaker feels about what the sounds describe.',
  },
  'She found me roots of relish sweet,\nAnd honey wild, and manna dew': {
    why: "'Roots' and 'relish' begin with the same 'r' sound, close together. Repeating the opening sound of nearby words is alliteration.",
    more: 'The knight remembers the mysterious lady feeding him strange, sweet foods. The gentle r sounds add to the dreamy, enchanted feeling of the memory.',
    tip: "In poetry, alliteration often sits beside other sound patterns. Notice 'honey wild, and manna dew' too, and what the sounds have in common.",
  },
  'And shivered in his ghastly suit of grey': {
    why: "'Ghastly' and 'grey' begin with the same hard 'g' sound. Repeating the opening sound of nearby words is alliteration.",
    more: "The soldier in Owen's poem has come home from the war badly wounded and sits alone in a wheelchair. 'Ghastly' means horrible, even deathly, and the harsh g sounds make his dull grey clothes feel bleak.",
    tip: 'Alliteration can draw attention to a sad detail. Ask why the writer wants us to notice this one.',
  },
  'This is the silliest stuff that ever I heard.': {
    why: "'Silliest' and 'stuff' begin with the same 's' sound, side by side. Repeating the opening sound of nearby words is alliteration.",
    more: 'Hippolyta is watching a group of workmen perform a clumsy play at her wedding. The hissing s sounds make her scorn sound playful and sharp.',
    tip: 'Alliteration can make a put-down funnier. Read the line aloud and listen to how it lands.',
  },
  'Kingdoms are clay.': {
    why: "'Kingdoms' and 'clay' begin with the same 'k' sound, though one is spelt with k and the other with c. Alliteration is about the sound, not the letter.",
    more: 'Antony is dismissing everything Rome wants from him: kingdoms are just clay, mere earth. The hard, matching k sounds make the three short words land like a blow.',
    tip: 'Say alliteration aloud rather than looking at the letters: c, k and q can all make the same sound.',
  },
  'Thou naughty knave, what trade?': {
    why: "'Naughty' and 'knave' both begin with an 'n' sound: the k in 'knave' is silent. The sound repeats, not the letter, and that is alliteration.",
    more: "'Naughty' meant wicked and a knave is a rogue, so Marullus is insulting a working man. The repeated n sound gives the insult a sneering bite.",
    tip: "Silent letters can hide alliteration: kn and gn begin with an 'n' sound, wr with an 'r' sound.",
  },
  'The jocund travellers came on; and as they came, Scrooge knew and named them every one.': {
    why: "'Knew' and 'named' both begin with an 'n' sound, though one is spelt kn. The sound repeats, so this is alliteration. 'As they came' means while they came; nothing is compared.",
    more: 'The Ghost of Christmas Past shows Scrooge the boys he went to school with. The soft n sounds give the moment a gentle, remembering feel.',
    tip: 'Listen for the first sound of each word, not the first letter. Spelling can hide a match.',
  },
  'The air was filled with phantoms, wandering hither and thither in restless haste, and moaning as they went.':
    {
      why: "'Filled' and 'phantoms' begin with the same 'f' sound, spelt f and ph. The repeated sound makes this alliteration.",
      more: "'Phantoms' are ghosts. Scrooge looks out of his window and sees the air crowded with restless spirits, and the soft, breathy f sounds suit their drifting.",
      tip: "'Ph' sounds like f. When you hunt for alliteration, say the words and trust your ear.",
    },
  'I fully expected to find a Constable in the kitchen, waiting to take me up.': {
    why: "'Constable' and 'kitchen' begin with the same 'k' sound, spelt c and k. A repeated opening sound in nearby words is alliteration.",
    more: 'Pip has stolen food for a convict and is coming home, sure he has been found out. A constable was a policeman, and the comic hard sounds show a boy certain he is about to be arrested in his own kitchen.',
    tip: 'Alliteration can be funny. Here the neat sound makes Pip’s terror seem slightly absurd, seen by the grown-up Pip telling the story.',
  },
  'I’ll lead you about a round,\nThrough bog, through bush, through brake, through brier': {
    why: "Bog, bush, brake and brier all begin with a 'b' sound. The repeated opening sound is alliteration. None of the words imitates a noise, so it is not onomatopoeia.",
    more: 'Puck, a mischievous spirit, threatens to lead the workmen a wild chase. A brake is a thicket and a brier a thorn bush. The bouncing b sounds suit the crashing, stumbling chase.',
    tip: 'Alliteration can suggest a sound without being onomatopoeia. Onomatopoeia needs a word that imitates its own noise.',
  },
  'Fillet of a fenny snake,\nIn the cauldron boil and bake': {
    why: "'Fillet' and 'fenny' share an 'f' sound, and 'boil' and 'bake' a 'b' sound. Repeating opening sounds is alliteration. No word imitates a noise, so it is not onomatopoeia.",
    more: "The witches are brewing a spell in their cauldron. 'Fenny' means from the marshes. The chanting, repeated sounds make the spell feel like a magic rhythm.",
    tip: 'In a chant or spell, repeated sounds and a strong beat work together. Name both when you write about it.',
  },
  'Heavy hooves hit the hard, dry ground as the horses galloped past.': {
    why: "Heavy, hooves, hit, hard and horses begin with an 'h' sound. The repeated opening sound is alliteration. None of the words imitates a noise the way 'clop' would, so it is not onomatopoeia.",
    more: 'The repeated breathy h sounds, one after another, give the sentence a pounding rhythm, almost like the beat of the hooves.',
    tip: 'To tell the two apart, find the word that makes the noise. If no single word sounds like the noise, it is alliteration, not onomatopoeia.',
  },
  'Poor naked wretches, wheresoe’er you are,\nThat bide the pelting of this pitiless storm': {
    why: "'Pelting' and 'pitiless' repeat a hard 'p', a sound made with a burst of air. The bursts are like rain striking skin. Lear, out in the storm himself, suddenly feels for the 'poor naked wretches' who have no roof.",
    not: {
      'A cheerful rhythm, like children playing in the rain':
        "Lear is pitying 'Poor naked wretches' in a storm. The hard p sounds hit like rain, not play.",
      'A soft, soothing calm as the storm slowly passes':
        "'Pelting' and 'pitiless' are harsh, not soothing, and the storm is at its height, not passing.",
      'The sound of a clock ticking as Lear waits for help':
        'There is no clock. The p sounds are the pelting rain that the homeless must endure.',
    },
    more: 'King Lear has been shut out by his daughters into a storm. For the first time he thinks about the poor he never cared for as king.',
    tip: 'Plosive sounds (p, b, t, d, k, g) are made with a burst of air. They often suit violence, blows or anger.',
  },
  'The isle is full of noises,\nSounds, and sweet airs, that give delight, and hurt not.': {
    why: "'Sounds' and 'sweet' repeat a soft 's', and the line says the island's music gives 'delight, and hurt not'. The gentle sibilance makes the speech sound like the music it describes.",
    not: {
      'A threatening hiss, as if Caliban were a snake':
        "The sounds are 'sweet airs, that give delight, and hurt not'. Caliban means calm, not threat.",
      'A sense of loud, harsh noise that hurts his ears':
        "Caliban says the noises 'hurt not'. The soft s sounds suit pleasure, not pain.",
      'A fast, excited rhythm, as if he were running':
        'The line is slow and dreamy. The soft sounds slow it down rather than speeding it up.',
    },
    more: 'Caliban is usually rough and angry, so this tender speech surprises audiences. He loves his island, which shows a side of him the other characters never see.',
    tip: "Repeated 's' sounds, called sibilance, can be soft and soothing or hissing and sinister. Use the meaning of the words to decide which.",
  },
  'Enjoy the honey-heavy dew of slumber': {
    why: "Honey is sweet and thick, and 'heavy' sleep is deep. The two h sounds bind the words together: the boy's sleep is sweet and deep. Brutus, who cannot sleep for thinking about the plot, envies him.",
    not: {
      'It is sticky and uncomfortable, like spilt honey':
        'Honey here means sweetness, not mess. Brutus envies how pleasant and deep the sleep is.',
      'It is short and light, so he will soon wake up':
        "'Heavy' means the opposite: deep sleep that holds the boy down.",
      'It is troubled by bad dreams about the plot':
        'The boy sleeps peacefully. It is Brutus, kept awake by the plot, who has no rest.',
    },
    more: 'Brutus finds his servant Lucius asleep and lets him rest. The tender image shows that Brutus is a gentle man troubled by the murder he is planning.',
    tip: 'Compound words joined by alliteration pack two ideas into one. Explain each half, then what they make together.',
  },
  'And for a little while they halted in sorrowful silence at the place where the windmill had once stood.':
    {
      why: "The windmill the animals built has been blown up. 'Sorrowful silence' repeats the soft 's', so the phrase itself sounds hushed, like a crowd too sad to speak.",
      not: {
        'A peaceful calm because their hard work is over':
          'The windmill they worked so hard on has been destroyed. Their silence is grief, not relief.',
        'A secret plan, whispered so the pigs cannot hear':
          'Nobody is whispering. The animals are too sad to speak.',
        'A sense that the animals are bored and want to rest':
          "'Sorrowful' means full of sorrow. The animals are grieving, not bored.",
      },
      more: 'The animals gave years of hard work to the windmill. Orwell makes their grief quiet and still, which makes it more moving than shouting would be.',
      tip: 'Soft sounds such as s, m, l and f can make a moment feel hushed. Link the sound to the feeling, not just the meaning of the words.',
    },
  "The bully's big black boots came down the corridor towards us.": {
    why: "Bully's, big, black and boots repeat a hard 'b', a sound made with a burst of air. The thudding sounds are like heavy footsteps, building a sense of threat as he comes closer.",
    not: {
      'A cheerful, bouncing rhythm, like a ball on the floor':
        'The b sounds are heavy, not playful, and they belong to a bully coming towards us.',
      'A quiet, gentle mood in the empty corridor':
        'Hard plosive b sounds are loud and blunt, the opposite of quiet and gentle.',
      'A feeling that the bully is tired and slow':
        'Nothing suggests he is tired. The heavy sounds make him seem strong and menacing.',
    },
    more: 'The alliteration gathers the most important details, big, black, boots, at the start of the sentence, so the reader feels the menace before learning where he is going.',
    tip: "In an exam answer, link the sound to the meaning: 'The heavy b sounds echo his footsteps and build a sense of threat.'",
  },
  'Double, double, toil and trouble;\nFire, burn; and cauldron, bubble.': {
    why: "'Bubble' imitates the sound of the boiling cauldron: say it and you can almost hear it. A word that sounds like the noise it names is onomatopoeia.",
    more: 'The witches are chanting over their cauldron as they make a spell. The bubbling sound, the rhyme and the strong beat make the chant feel like real magic.',
    tip: 'Onomatopoeia often appears in chants and songs, where sound matters as much as meaning.',
  },
  'Bow-wow. The watch dogs bark.': {
    why: "'Bow-wow' imitates a dog's bark, and 'bark' names the sound too. Words that sound like the noises they describe are onomatopoeia.",
    more: 'Ariel, a spirit, sings to Ferdinand, and the song is full of animal sounds. Shakespeare spells out the noise so that the audience hears it in the song.',
    tip: 'Some onomatopoeia spells out a sound exactly (bow-wow, cock-a-doodle-doo); some names it with a word that echoes it (bark, sizzle). Both count.',
  },
  'Now the hungry lion roars,\nAnd the wolf behowls the moon;\nWhilst the heavy ploughman snores': {
    why: "'Roars', 'behowls' and 'snores' all imitate the noises they name: the lion's roar, the wolf's howl, the ploughman's snoring. Words that sound like their noise are onomatopoeia.",
    more: 'Puck describes the night world after the humans have gone to bed. Wild animals roar and howl while the tired ploughman snores, so the night is full of sound.',
    tip: 'A list of sound words can build a whole scene. Notice which sounds are wild and which are homely.',
  },
  'I had rather hear my dog bark at a crow than a man swear he loves me.': {
    why: "'Bark' is a word that echoes the sound it names. A word that imitates its own noise is onomatopoeia.",
    more: "Beatrice says she would rather hear her dog bark at a crow than hear a man swear he loves her. A bark is a harsh, meaningless noise, which is what she thinks men's vows of love are worth.",
    tip: 'Onomatopoeia can be used for humour. Here a dog’s bark is set against a lover’s promise.',
  },
  'The furnaces roared, and the powerful engines whizzed and clanked, like a great metallic heart.':
    {
      why: "'Roared', 'whizzed' and 'clanked' each imitate a noise the boat's engines make. Words that sound like their noise are onomatopoeia.",
      more: 'Holmes and Watson are chasing a boat down the Thames at full speed. The three sound words, one after another, make the engine room loud, fast and urgent.',
      tip: 'Several sound words in a row can speed up a chase scene. Notice how short, sharp sounds create urgency.',
    },
  'It creaked and groaned, but did not yield.': {
    why: "'Creaked' and 'groaned' imitate the sounds of the straining door. Words that sound like the noises they name are onomatopoeia.",
    more: 'Holmes and Watson are trying to force a locked door. The two sounds tell us how hard they are pushing, and that the door still will not give way.',
    tip: 'Sound words can show effort and struggle. Ask what the noise tells you about what is happening.',
  },
  'The cows lowed it, the dogs whined it, the sheep bleated it, the horses whinnied it, the ducks quacked it.':
    {
      why: "'Lowed', 'whined', 'bleated', 'whinnied' and 'quacked' each name an animal's call in a word that echoes it. Words that imitate the sounds they describe are onomatopoeia.",
      more: "'Lowed' means mooed. The animals have just learned the song of the rebellion and sing it in their own voices, so the farm fills with an excited, noisy chorus.",
      tip: 'A list of different sound words can show many voices joining in at once. Notice how each animal has its own sound.',
    },
  'Let Hercules himself do what he may,\nThe cat will mew, and dog will have his day.': {
    why: "'Mew' imitates a cat's cry. A word that sounds like the noise it names is onomatopoeia.",
    more: 'Hamlet means that nobody, not even the hero Hercules, can stop nature taking its course: cats will mew and dogs will have their turn. He is hinting that his own day will come.',
    tip: 'A proverb can contain other devices. Name the one asked about, then say what the proverb means in its scene.',
  },
  'One of our chimneys cracked as if a shot had hit it, flew, and a piece of it came clattering down the tiles':
    {
      why: "'Cracked' and 'clattering' imitate the noises of the chimney breaking and falling. Words that sound like their noises are onomatopoeia.",
      more: "The Martians' Heat-Ray is hitting the narrator's town. The sudden crack and the clattering bricks make the attack loud, close and real.",
      tip: 'Onomatopoeia brings the reader into the middle of the action. Notice whether the sounds are sudden or long-lasting.',
    },
  'Keep where thou canst hear the babble of the brook.': {
    why: "'Babble' imitates the bubbling, chattering sound of running water. A word that sounds like the noise it describes is onomatopoeia.",
    more: 'Hester tells her daughter Pearl to play where she can hear the brook. Babble is also the word for chatter, so the brook seems almost to be talking.',
    tip: 'Some sound words, such as babble or murmur, belong to people as well as to water. That can add a hint of personification.',
  },
  'Sometimes a thousand twangling instruments\nWill hum about mine ears': {
    why: "'Twangling', the sound of plucked strings, and 'hum' imitate the noises they name. Words that sound like their noise are onomatopoeia.",
    more: 'Caliban is describing the magical music of the island. The sound words make it seem to vibrate around his ears.',
    tip: 'When you quote onomatopoeia, say what kind of sound it is: sharp, soft, sudden, steady. That is the start of analysis.',
  },
  'And neigh, and bark, and grunt, and roar, and burn,\nLike horse, hound, hog, bear, fire, at every turn.':
    {
      why: "'Neigh', 'bark', 'grunt' and 'roar' each imitate an animal's noise. Words that sound like the noises they describe are onomatopoeia.",
      more: 'Puck promises to frighten the workmen by turning into one animal after another. The burst of noises makes his chase sound wild and chaotic.',
      tip: 'Notice how many sound words a writer piles together. A long list can create chaos and confusion.',
    },
  'The cellar-door flew open with a booming sound, and then he heard the noise much louder, on the floors below':
    {
      why: "'Booming' imitates the deep, echoing noise of the cellar door. A word that sounds like its noise is onomatopoeia. No nearby words share an opening sound, so it is not alliteration.",
      more: 'Scrooge is alone in his gloomy house when a noise rises from the cellar. The booming sound, growing louder, tells us something is coming up the stairs: Marley’s ghost.',
      tip: 'Onomatopoeia is one word that sounds like a noise; alliteration is several words sharing an opening sound. Check which you have.',
    },
  'The creature instantly broke into a succession of high, tremulous yelps': {
    why: "'Yelps' imitates the dog's short, high cries. A word that sounds like the noise it describes is onomatopoeia. No nearby words share an opening sound, so it is not alliteration.",
    more: 'Toby, the dog helping Holmes, has caught a scent. His excited yelps tell the reader the chase has begun.',
    tip: 'One well-chosen sound word can do a lot. Here it shows the dog’s excitement without any other description.',
  },
  'Heavy steps and the clamour of loud voices were audible from below, and the hall door shut with a loud crash.':
    {
      why: "'Crash' imitates the noise of the door slamming. A word that sounds like its noise is onomatopoeia. Repeating 'loud' is repetition, not alliteration, and no other nearby words share an opening sound.",
      more: 'The police have just arrived downstairs, heavy-footed and loud, and the front door crashes shut behind them. The noisy sounds make their arrival comic: Holmes has just found the vital clue without them.',
      tip: 'Repeating a whole word is repetition. Alliteration repeats only the opening sound of different words.',
    },
  'Moses sprang off his perch and flapped after her, croaking loudly.': {
    why: "'Flapped' and 'croaking' imitate the sounds of the raven's wings and its harsh cry. Words that sound like their noises are onomatopoeia. No nearby words share an opening sound, so it is not alliteration.",
    more: 'Moses is the tame raven who tells the animals about a heaven called Sugarcandy Mountain. The clumsy flapping and croaking make him a little comic.',
    tip: 'Sound words can shape how we feel about a character. A croak is not a beautiful sound.',
  },
  'Mr. Hyde shrank back with a hissing intake of the breath.': {
    why: "'Hissing' imitates the sharp sound of Hyde's breath. A word that sounds like its noise is onomatopoeia. No nearby words share an opening sound, so it is not alliteration.",
    more: 'Utterson has just stopped Hyde at his door. A hiss is the sound of a snake or an angry cat, so the word makes Hyde seem animal-like and dangerous.',
    tip: 'Ask what usually makes a sound. If a man hisses, the writer may be comparing him to a snake.',
  },
  'I quitted my seat, and walked on, although the darkness and storm increased every minute, and the thunder burst with a terrific crash over my head.':
    {
      why: "'Crash' imitates the sudden roar of the thunder. A word that sounds like the noise it names is onomatopoeia. No nearby words share an opening sound, so it is not alliteration.",
      more: "'Terrific' here means terrifying. Victor is walking alone at night through a growing storm, and the crash of thunder makes the moment wild and frightening.",
      tip: 'Old meanings can surprise you: terrific once meant terrifying. Check what a word meant when the text was written.',
    },
  'Ice clinked in the jug as Dad poured the lemonade.': {
    why: "'Clinked' imitates the light, sharp sound of ice knocking against glass. A word that sounds like its noise is onomatopoeia. No nearby words share an opening sound, so it is not alliteration.",
    more: 'One small sound word puts the reader in a sunny kitchen on a hot day. Onomatopoeia does not have to be loud to be effective.',
    tip: 'Choose sound words that fit the exact noise. Ice clinks, coins jingle, keys rattle: each is different.',
  },
  'The hum of either army stilly sounds,\nThat the fix’d sentinels almost receive\nThe secret whispers of each other’s watch':
    {
      why: "The 'hum' of each army carries 'stilly', quietly, through the dark, and the guards can almost hear 'the secret whispers' of the enemy's watch. The soft sounds show how close the armies are, and how tense the night is.",
      not: {
        'The soldiers are singing happily around their fires':
          'A hum and whispers are low, quiet sounds, not singing. The mood is tense, not happy.',
        'The battle has already started in the dark':
          'The battle is tomorrow. Tonight the armies only wait, listening to each other.',
        'Both armies are fast asleep and nothing stirs':
          'If nothing stirred there would be no hum. The quiet sounds show both armies are awake and waiting.',
      },
      more: 'The Chorus describes the night before the battle of Agincourt. Quiet sound words build suspense better than loud ones could: everyone is listening.',
      tip: 'Quiet onomatopoeia can create tension. Ask what the characters are listening for.',
    },
  'Then slowly the hissing passed into a humming, into a long, loud, droning noise.': {
    why: "The noise grows from a hiss to a hum to 'a long, loud, droning noise'. Each sound is bigger than the last, so the reader senses something mechanical powering up, just before the Heat-Ray strikes the crowd.",
    not: {
      'A swarm of bees is gathering in the sandpit':
        'Humming and droning can sound like bees, but this is the Martian machine in the pit.',
      'The noise is fading away as the danger passes':
        "The sounds grow, into 'a long, loud, droning noise'. The danger is building, not passing.",
      'People in the crowd are whispering to each other':
        'Whispering is a human sound. These noises come from the Martians’ machinery.',
    },
    more: 'The crowd around the Martian pit does not yet know what is coming. Wells uses rising sound to build dread before the first attack.',
    tip: 'Notice when sounds change in order. A sequence of sound words can show something growing, approaching or fading.',
  },
  'But suddenly the dogs sitting round Napoleon let out deep, menacing growls, and the pigs fell silent and sat down again.':
    {
      why: "When some young pigs protest, Napoleon's dogs let out 'deep, menacing growls' and the pigs fall silent. The sound alone is enough: Napoleon no longer needs to argue, because everyone fears his dogs.",
      not: {
        'The dogs are hungry and want their dinner':
          'The growls come exactly when the pigs begin to object. They are a warning, not hunger.',
        'The pigs are frightened of the other animals':
          'The pigs fall silent because of the dogs. It is the dogs, Napoleon’s guards, who frighten them.',
        'The animals enjoy a lively, open debate':
          'Debate ends the moment the dogs growl. The farm is no longer a place of open argument.',
      },
      more: 'This happens just after Napoleon has driven Snowball off the farm. The growls show how a dictator silences opposition.',
      tip: 'Onomatopoeia can carry a threat. Ask who makes the sound, who hears it, and what changes afterwards.',
    },
  'And hymns in the cosy parlour, the tinkling piano our guide.': {
    why: "'Tinkling' imitates light, high, bright notes. Set in 'the cosy parlour' among family hymns, it makes the piano part of a warm, safe childhood that the grown speaker remembers with longing.",
    not: {
      'It is out of tune and painful to listen to':
        'Nothing suggests it is out of tune. Tinkling is a light, pleasant sound in a cosy room.',
      'It is loud and grand, played in a concert hall':
        "The setting is 'the cosy parlour', a family sitting room, and tinkling is soft, not grand.",
      'It is broken, and only a few keys still work':
        'Tinkling describes how it sounds, light and bright, not whether it works.',
    },
    more: "In Lawrence's poem a woman singing makes the speaker remember sitting under the piano as a child while his mother played. The gentle sound words carry his homesickness.",
    tip: 'Ask whether a sound word is comforting or harsh, then link it to the speaker’s feelings about the memory.',
  },
  'Clash, clang, hammer; ding, dong, bell.': {
    why: "The sound words clash, clang, ding, dong tumble out in a happy jumble, like bells pealing all over the city. On the morning he wakes up changed, the noisy bells match Scrooge's excitement and joy.",
    not: {
      'The noise gives him a headache and spoils his mood':
        'Scrooge is delighted on this morning. The bells add to his joy rather than spoiling it.',
      'A fire has broken out and the alarm bells are ringing':
        'The bells are Christmas bells ringing in the day, not an alarm.',
      'The church bells are calling him to his own funeral':
        'He saw his lonely grave in a vision, but now he has woken alive and changed. These bells celebrate.',
    },
    more: "Earlier in the story Scrooge hated noise and fun. Now the clanging bells are 'glorious' to him, which shows how far he has changed.",
    tip: 'Sound words can capture a mood as well as a noise. Here the jumbled sounds feel like laughter.',
  },
  'The fridge hummed in the empty flat.': {
    why: "A fridge's hum is so quiet that you only notice it when nothing else is making a sound. Hearing it here tells the reader the flat is silent and empty, which makes the scene feel lonely.",
    not: {
      'A cheerful tune that someone in the flat is singing':
        'The flat is empty, so nobody is singing. The hum is the fridge, the only sound left.',
      'A busy, crowded party going on in the next room':
        'The flat is empty and quiet. A party would drown out a fridge’s hum.',
      'A warning that the fridge is broken and dangerous':
        'A hum is a normal, steady sound. Here it matters because it is the only sound in the flat.',
    },
    more: 'Writers often use a small sound to show how quiet a place is. The hum makes the silence around it more noticeable.',
    tip: 'Sometimes onomatopoeia shows silence by contrast. Ask what the sound tells you about everything else.',
  },
  'she would have made Hercules have turned spit, yea, and have cleft his club to make the fire too.':
    {
      why: 'Benedick claims Beatrice would have made the mighty hero Hercules turn the roasting spit like a kitchen boy, and chop up his own club for firewood. It is deliberately impossible, so this is hyperbole.',
      more: 'Hercules was the strongest hero of Greek legend. Benedick exaggerates wildly to show how bossy he thinks Beatrice is, and how much she has rattled him.',
      tip: 'Comic characters often exaggerate when they are hurt. Ask what the hyperbole reveals about the speaker’s feelings.',
    },
  'Let Rome in Tiber melt': {
    why: 'Antony says he would rather the whole city of Rome melted into the river Tiber than leave Cleopatra. Nobody means such a thing literally, so this is hyperbole.',
    more: 'Antony is one of the three rulers of Rome, yet he dismisses its very existence for love. The exaggeration shows how completely Cleopatra has swept him away.',
    tip: 'Hyperbole about huge things, such as a city or the world, often shows a character’s priorities. Ask what they are willing to give up.',
  },
  'It looks as though all the moles in England had been let loose in it.': {
    why: 'Watson says the grounds look as though every mole in England had been let loose there. Nobody believes every mole in the country did it, so this is a deliberate exaggeration: hyperbole.',
    more: 'The grounds of the house are full of holes dug by treasure hunters. The comic exaggeration helps the reader picture the mess instantly.',
    tip: "Words like 'all', 'every' and 'never' often signal hyperbole. Check whether the claim could really be true.",
  },
  'it became a thing such as even Dante could not have conceived.': {
    why: 'Victor says his creature became so ugly that even Dante, a poet who described the horrors of hell, could not have imagined it. That is a deliberate overstatement, which is hyperbole.',
    more: 'Victor has just brought his creature to life and is horrified by what he sees. The exaggeration shows his disgust and panic, though some readers notice how unfair he is to the creature from the start.',
    tip: 'Hyperbole shows how a narrator feels, not just how things are. Ask whether the narrator is being fair.',
  },
  "Scrooge had a very small fire, but the clerk's fire was so very much smaller that it looked like one coal.":
    {
      why: "Bob Cratchit's fire is said to be so tiny that it looked like a single coal. No one could warm an office with one coal, so the claim is deliberately exaggerated: hyperbole.",
      more: 'Scrooge keeps the coal box in his own room so his clerk cannot take more. The exaggeration makes his meanness funny and shocking at once.',
      tip: 'Hyperbole can make a serious point through humour. Here the joke is about a cold, poor worker and his mean employer.',
    },
  "He carried his own low temperature always about with him; he iced his office in the dog-days; and didn't thaw it one degree at Christmas.":
    {
      why: "Scrooge 'iced his office' in the hottest days of summer and never warmed it 'one degree' at Christmas. No person could really do that, so this is hyperbole.",
      more: "'Dog-days' are the hottest days of the year. Dickens exaggerates Scrooge's coldness until it seems to change the weather around him.",
      tip: 'Notice when hyperbole and metaphor work together: the metaphor gives the picture, the exaggeration gives it force.',
    },
  'Sure, it was the roar\nOf a whole herd of lions.': {
    why: 'Antonio claims he heard the roar of a whole herd of lions. There are no lions on the island; he is exaggerating, and lying, which is hyperbole.',
    more: 'Antonio and Sebastian were about to kill the sleeping king and were nearly caught with their swords drawn. They invent a huge noise as an excuse.',
    tip: 'A character’s hyperbole may be a lie. Ask what they are trying to cover up.',
  },
  'Now would I give a thousand furlongs of sea for an acre of barren ground.': {
    why: "Gonzalo would swap 'a thousand furlongs of sea', about 125 miles of it, for one acre of bare land. Nobody could trade sea for land; he is exaggerating how desperate he is to be ashore. It is hyperbole, not metaphor: nothing is called something else.",
    more: 'The ship is breaking up in a terrible storm. A furlong is an eighth of a mile, and barren ground is land where nothing grows. Even the poorest land would do.',
    tip: 'To tell hyperbole from metaphor, ask: is something being called something else (metaphor), or is it being made bigger than it is (hyperbole)?',
  },
  'I had rather be married to a death’s-head with a bone in his mouth than to either of these.': {
    why: "Portia says she would rather marry a skull, a 'death's-head' with a bone in its mouth, than either of two suitors. She does not mean it literally: the exaggeration shows how much she dislikes them. Nothing is called something else, so it is hyperbole, not metaphor.",
    more: 'Portia must marry whoever chooses the right casket, so she cannot refuse anyone. Her wild exaggerations are her only way of protesting.',
    tip: "The pattern 'I had rather ... than ...' is a common way to build hyperbole. The first thing is chosen to be absurd.",
  },
  'Yours is the Earth and everything that’s in it': {
    why: "The poem promises that 'the Earth and everything that's in it' will belong to the son. Nobody can own the whole world, so this is a deliberate exaggeration, hyperbole. It is not a metaphor: the Earth is not called anything else.",
    more: "These words come at the very end of the father's advice. The huge promise says that a person who lives by these rules will have everything worth having.",
    tip: 'Hyperbole can inspire as well as amuse. Ask what feeling the exaggeration is meant to stir.',
  },
  'Nobody in the history of the world has ever felt as bored as I did in that assembly.': {
    why: "The speaker claims to be the most bored person in the history of the world. That is an obvious exaggeration, so this is hyperbole. 'As bored as' compares the speaker with other people, not with something of a different kind, so it is not a simile.",
    more: 'A simile compares two different kinds of thing. Comparing yourself with other people, however boldly, is just a comparison, made huge here for comic effect.',
    tip: "'As ... as' does not always make a simile. Check whether two different kinds of thing are being compared.",
  },
  'My little sister takes about three hours to put on one shoe.': {
    why: 'Nobody really takes three hours to put on a shoe. The speaker exaggerates to show how slow and frustrating the sister is, which is hyperbole. Nothing is called something else, so it is not a metaphor.',
    more: "'About' makes the exaggeration sound almost like a real measurement, which is part of the joke.",
    tip: 'Hyperbole in everyday speech often uses impossible times or numbers. Check whether the number could be real.',
  },
  'I will fetch you a toothpicker now from the furthest inch of Asia; bring you the length of Prester John’s foot; fetch you a hair off the Great Cham’s beard':
    {
      why: 'Benedick offers to fetch a toothpick from the far end of Asia, or a hair from the beard of the Great Cham, the Mongol emperor, rather than talk to Beatrice. The ridiculous errands show how desperate he is to avoid her.',
      not: {
        'He is a famous explorer who has travelled across Asia':
          'Benedick is a soldier, not an explorer. The far-off errands are exaggerations, not real travels.',
        'He is trying to impress Beatrice with expensive gifts':
          'The errands are not gifts for Beatrice. He offers them to the Prince to escape from her.',
        'He is boasting about journeys he has already made':
          "These journeys have not happened: 'I will fetch you' offers them now, to the Prince, as a way to escape Beatrice.",
      },
      more: 'Beatrice has just beaten him in a battle of wits at the masked dance. His comic exaggeration hides hurt pride, and perhaps feelings he will not admit.',
      tip: 'A list of exaggerations builds comedy, each one bigger than the last. Notice how the list grows.',
    },
  'He does smile his face into more lines than is in the new map with the augmentation of the Indies.':
    {
      why: 'Maria says Malvolio smiles his face into more lines than a new map of the world, one crowded with newly added lands. The exaggeration paints a ridiculous, face-creasing grin.',
      not: {
        'He has drawn a careful map of the world on his face':
          'There is no real map. The new map with all its lines is a comparison for his creased face.',
        'He is old, and his face is wrinkled from travel':
          'The lines come from smiling, not from age or travel. He has been tricked into grinning constantly.',
        'He is smiling politely, just enough to be friendly':
          'Nothing about it is polite or small. More lines than a whole map is a huge, ridiculous grin.',
      },
      more: 'Malvolio, a gloomy steward, has been tricked by a forged letter into thinking his mistress wants him to smile. The hyperbole sets up the comedy of his fixed, foolish grin.',
      tip: 'Hyperbole is a tool of comedy. Explain the picture it creates, then why it is funny in its scene.',
    },
  'Sir, I love you more than word can wield the matter;\nDearer than eyesight, space, and liberty':
    {
      why: "Goneril claims to love Lear 'more than word can wield the matter', dearer than eyesight, space and freedom. Lear is dividing his kingdom by who loves him most, so her huge claims are flattery to win land.",
      not: {
        'She loves him more than anyone has ever loved a father':
          'That is what she claims, not what is true. She later turns her father out of her house.',
        'She cannot find the words, because she is shy and quiet':
          'She finds plenty of words. Her speech is smooth and flattering, not shy.',
        'She would gladly lose her sight and freedom for him':
          'This repeats her exaggeration as if it were true. Her actions later show it was not.',
      },
      more: 'Her sister Cordelia refuses to compete and says simply that she loves him as a daughter should. Lear believes the hyperbole and banishes the honest daughter, which begins his tragedy.',
      tip: 'Ask whether a character’s hyperbole is sincere. Exaggeration can be a sign of flattery or lies.',
    },
  'His legs bestrid the ocean; his reared arm\nCrested the world': {
    why: "Cleopatra says Antony's legs straddled the ocean and his raised arm towered over the world. No person could be that big, so the hyperbole shows how vast and godlike he seems to her.",
    not: {
      'He was a sailor who crossed every ocean on earth':
        'Antony was a soldier and ruler, not a sailor. His legs astride the ocean are an exaggeration of his greatness.',
      'He was a tall, strong man who won wrestling contests':
        'The description is of something far bigger than any real man. It is about his power and glory, not his strength.',
      'He was a statue standing at the entrance to a harbour':
        'This is how she remembers Antony himself, not a real statue. No statue could bestride an ocean.',
    },
    more: 'Antony has died, and Cleopatra is describing a dream of him. Her exaggerations turn grief into a kind of hymn, making him larger than life.',
    tip: 'Hyperbole after a death often shows love and grief. Ask how the speaker wants the dead to be remembered.',
  },
  'He trots the air; the earth sings when he touches it; the basest horn of his hoof is more musical than the pipe of Hermes.':
    {
      why: 'The Dauphin claims his horse trots on air, the earth sings when it touches it, and its hoof is more musical than a god’s pipe. Such boasting, on the night before a great battle, shows a vain man who loves show.',
      not: {
        'He knows exactly how many horses the French army has':
          'He is not counting horses. He is praising one horse in wildly exaggerated terms.',
        'He is a modest man who rarely talks about himself':
          'His speech is the opposite of modest. A horse whose hoof outplays a god’s pipe is a boast.',
        'He is afraid of horses and is trying to sound brave':
          'Nothing suggests fear. He loves his horse and loves to show it off.',
      },
      more: 'The French are sure of victory at Agincourt and spend the night bragging. The English win the next day, so the Dauphin’s hyperbole looks foolish in hindsight.',
      tip: 'Hyperbole can reveal character. A speaker who exaggerates their own things is often proud or careless.',
    },
  'The others said of Squealer that he could turn black into white.': {
    why: 'Nobody can literally turn black into white. The exaggeration means Squealer can talk the animals into believing anything, even the opposite of what they see.',
    not: {
      'He is a skilled painter who can change any colour':
        'Black and white are not real colours here. Turning one into the other means making anything seem true.',
      'He is honest and always tells the animals the truth':
        'The saying means the opposite. Squealer can make the animals believe almost anything.',
      'He is clever at sums and keeps the farm’s accounts':
        'The saying is about persuading, not counting. Squealer’s gift is talk.',
    },
    more: 'Squealer is the pig who explains, and twists, Napoleon’s decisions. Orwell uses him to show how propaganda changes the truth.',
    tip: 'Hyperbole can describe a talent. Ask what the exaggerated skill is used for, and who it harms.',
  },
  'I sometimes used to wonder whether it was possible she washed herself with a nutmeg-grater instead of soap.':
    {
      why: 'A nutmeg-grater is a rough metal tool. Pip, as a child, wonders whether his sister washed with one instead of soap, because her skin was so red. The comic exaggeration also suits her rough, harsh nature.',
      not: {
        'She is a careful cook who grates nutmeg into every meal':
          'The nutmeg-grater is not about cooking. It is an imagined way of washing, to explain her red skin.',
        'She is very gentle and soft with her family':
          'Mrs Joe is the opposite of gentle, and her rough skin matches her harsh temper.',
        'She cannot afford soap, so the family is poor':
          'Pip is joking about her skin, not about money. He only wonders whether she used a grater.',
      },
      more: "Mrs Joe brings Pip up 'by hand' and is quick with a cane. Dickens lets the grown-up Pip joke about her, which makes a hard childhood funny as well as sad.",
      tip: 'Hyperbole about how someone looks often hints at what they are like. Link the picture to their character.',
    },
  'her eyes in heaven\nWould through the airy region stream so bright\nThat birds would sing and think it were not night.':
    {
      why: "Romeo imagines Juliet's eyes up in the sky, shining 'so bright / That birds would sing and think it were not night'. No eyes are that bright, so the hyperbole shows how dazzling she is to him.",
      not: {
        'They are dangerous, so the birds fly away in fear':
          'The birds are not afraid; they sing. Her eyes are so bright the birds think it is morning.',
        'They are tired, because it is the middle of the night':
          "Romeo praises her eyes for shining 'so bright', not for looking tired.",
        'They reflect the stars, so she must be looking up':
          'Romeo imagines her eyes in the sky itself, brighter than stars, not reflecting them.',
      },
      more: 'Romeo is in the Capulet orchard, gazing up at Juliet. Images of light against darkness run through his speech, making her the sun and the stars.',
      tip: 'Love poetry often uses hyperbole. Ask whether the exaggeration tells you about the beloved or about the lover.',
    },
  'To what, my love, shall I compare thine eyne?\nCrystal is muddy.': {
    why: "'Eyne' means eyes. Demetrius says that next to Helena's eyes, crystal, the clearest thing he can think of, looks muddy. The exaggeration is extravagant praise.",
    not: {
      'He has dropped some crystal into a muddy puddle':
        "There is no real crystal here. 'Crystal is muddy' only next to her eyes.",
      'Helena’s eyes are cloudy and she needs help to see':
        'He means the opposite: her eyes are so clear that crystal seems cloudy beside them.',
      'Crystal is clear enough to match her eyes':
        'He says the opposite: beside her eyes even crystal, the clearest thing he knows, looks muddy.',
    },
    more: 'Demetrius has scorned Helena all play, but a magic flower has just made him fall in love with her. His sudden, over-the-top praise is part of the comedy.',
    tip: 'When a character suddenly starts using wild hyperbole, ask what has changed. Here it is a magic spell.',
  },
  'Why, then, O brawling love! O loving hate!': {
    why: "'Brawling love' and 'loving hate' each join two opposites: love that fights, hate that loves. Placing contradictory words side by side makes an oxymoron.",
    more: "'Brawling' means fighting. Romeo has just seen the aftermath of a street fight between the families, and he is also miserable in love, so he finds love and hate tangled together.",
    tip: 'An oxymoron is two clashing words, usually side by side. If you can name the two opposites, you have found it.',
  },
  'Merry and tragical? Tedious and brief?\nThat is hot ice and wondrous strange snow.': {
    why: "'Hot ice' joins two words that cannot both be true. Theseus uses it to mock a title that does the same, a 'tedious brief scene' of 'very tragical mirth'. Contradictory words placed together make an oxymoron.",
    more: "Theseus is reading out the play the workmen will perform at his wedding, and mocks its contradictions as impossible as hot ice. 'Wondrous strange snow' is a puzzle: snow is not strange, and editors still argue about the line.",
    tip: 'Oxymorons can be used to mock something that does not make sense. Ask whether the writer is serious or joking.',
  },
  'The most lamentable comedy and most cruel death of Pyramus and Thisbe': {
    why: "'Lamentable comedy' joins opposites: lamentable means sad and pitiful, but a comedy is meant to be funny. Contradictory words side by side make an oxymoron.",
    more: 'This is the title of the play the workmen choose to perform. They do not see the contradiction, which makes it funnier: their tragedy will turn out to be a comedy by accident.',
    tip: 'An oxymoron can be unintended by a character but intended by the writer. Ask who is in on the joke.',
  },
  'So foul and fair a day I have not seen.': {
    why: "Macbeth calls the day both 'foul' and 'fair': foul because of the storm, fair because of his victory. Joining two opposites to describe one thing makes an oxymoron.",
    more: "These are Macbeth's first words in the play, and they echo the witches' chant, 'Fair is foul, and foul is fair'. Before he even meets them, he is speaking their language.",
    tip: 'Notice when a character’s words echo another’s. Here the echo links Macbeth to the witches at once.',
  },
  'my stars shine darkly over me': {
    why: "Stars cannot 'shine darkly': shining gives light, darkly takes it away. Putting the two together makes an oxymoron.",
    more: 'Sebastian believes his twin sister has drowned. People once thought the stars ruled their luck, so stars that shine darkly mean his fate is unlucky.',
    tip: 'An oxymoron can sit inside a longer image. Name the two words that clash, then explain the whole picture.',
  },
  'though I cannot be said to be a flattering honest man, it must not be denied but I am a plain-dealing villain.':
    {
      why: "'Plain-dealing villain' joins opposites: plain-dealing means honest, but a villain is wicked and deceitful. 'Flattering honest man' clashes in the same way. Contradictory words together make an oxymoron.",
      more: 'Don John is the villain of the play, and he admits it openly. His oxymoron is a boast: he is honest about being bad.',
      tip: 'When a character describes themselves with an oxymoron, ask what it reveals about how they see themselves.',
    },
  'But that would be a cruel kindness, and I dare not do it.': {
    why: "'Cruel kindness' joins two opposites: an act cannot normally be cruel and kind at once. Placing them together makes an oxymoron.",
    more: "Victor's father is writing with terrible news. He says that sending only a short note, and hiding the truth, would seem kind but would be cruel, so he tells Victor everything.",
    tip: 'Some oxymorons describe a hard choice: an action that is kind and cruel at once. Explain why both words fit.',
  },
  'Our cat greeted us with a friendly hiss.': {
    why: "'Friendly hiss' joins two opposites: a hiss is a warning, not a welcome. Contradictory words placed side by side make an oxymoron.",
    more: 'The clash makes us smile, because anyone with a cat knows the mixed messages they send. The oxymoron captures a grumpy kind of welcome.',
    tip: 'An everyday oxymoron can be funny. Look for an adjective that contradicts its noun.',
  },
  'Mum describes our garden as a controlled wilderness.': {
    why: "'Controlled wilderness' joins two opposites: a wilderness is wild and untamed, the opposite of controlled. That makes an oxymoron. 'Describes ... as' means calls it, so nothing is compared and it is not a simile.",
    more: 'The phrase suggests a garden that looks wild on purpose, carefully allowed to grow. The contradiction says it is both at once.',
    tip: "'Describe as', 'work as', 'dressed as': none of these makes a simile. A simile needs two different things compared.",
  },
  'O heavy lightness! serious vanity!\nMisshapen chaos of well-seeming forms!': {
    why: "Romeo piles up contradictions: 'heavy lightness', 'serious vanity', 'Misshapen chaos of well-seeming forms'. Love, for him, is everything and its opposite at once, which shows a mind in turmoil.",
    not: {
      'He is calm and thinking clearly about the feud':
        'Piling up contradictions shows confusion, not calm. Nothing here is clear to him.',
      'He is happy because his love is returned at last':
        'His love is not returned: Rosaline will not have him. That is why love feels so contradictory.',
      'He finds the fight in the street exciting and fun':
        "He calls it 'brawling' and sees hate in it. The contradictions are pain, not excitement.",
    },
    more: 'At this point Romeo is lovesick for Rosaline, who rejects him. Many readers think his long list of oxymorons is also a little showy, the speech of a young man enjoying his own misery.',
    tip: 'A string of oxymorons can show confusion, or it can show a character showing off. Say which you think it is, and why.',
  },
  'Parting is such sweet sorrow\nThat I shall say good night till it be morrow.': {
    why: "Parting is a 'sorrow', because Juliet does not want Romeo to go, but it is 'sweet', because their love is what makes it painful. She would keep saying good night until morning.",
    not: {
      'She is glad that Romeo is leaving at last':
        'She does not want him to go: she would say good night until morning. The sweetness is love, not relief.',
      'The night has been sad, so she will not miss him':
        'The night has been full of love. The sorrow is only at parting.',
      'Goodbyes are easy when you know you will meet again':
        'If parting were easy, it would not be sorrow. She feels both pain and sweetness.',
    },
    more: 'This is the end of the balcony scene. The famous oxymoron captures how love can make even sadness feel precious.',
    tip: 'Explain both halves of an oxymoron and why the writer needs both. One word alone would tell only half the truth.',
  },
  'Despised substance of divinest show!\nJust opposite to what thou justly seem’st,\nA damned saint, an honourable villain!':
    {
      why: "'A damned saint, an honourable villain': each phrase joins goodness and wickedness. Juliet loves her new husband, yet he has killed her cousin, so she cannot describe him without contradicting herself.",
      not: {
        'She hates Romeo now and wants him punished at once':
          "She calls him a 'saint' and 'honourable' too. If she only hated him, she would not need the contradictions.",
        'She thinks Romeo is a perfect, holy man in every way':
          "Each kind word is matched by a cruel one: 'damned', 'villain'. She is torn, not admiring.",
        'She does not care about Tybalt or what happened to him':
          'She is shocked and grieving for her cousin. That is why the villain half of each oxymoron is there.',
      },
      more: 'Juliet’s speech echoes Romeo’s oxymorons from the start of the play. Both lovers reach for contradictions when love and hate collide.',
      tip: 'When an oxymoron describes a person, it often shows the speaker’s mixed feelings about them. Name both feelings.',
    },
  'I never heard\nSo musical a discord, such sweet thunder.': {
    why: "Thunder is loud and fierce, but Hippolyta calls it 'sweet'; a 'discord' is clashing noise, but she calls it 'musical'. She means the hounds' great noise was loud and harmonious at once.",
    not: {
      'A storm broke out, but it was over very quickly':
        'The thunder is the noise of the hunting hounds, not a real storm.',
      'The music at the wedding was soft and gentle':
        'Thunder is loud. She is describing the hounds’ cry, not gentle music.',
      'The hounds were silent, so the hunt was peaceful':
        'The hounds were noisy: that is the thunder. What surprises her is that the noise was sweet.',
    },
    more: 'Hippolyta is remembering a hunt in Crete with famous hounds. The oxymorons show her delight in a noise most people would find harsh.',
    tip: 'Oxymorons can describe something surprising: a noise that should be ugly but is beautiful. Say what the surprise is.',
  },
  'Have we, as ’twere with a defeated joy,\nWith one auspicious and one dropping eye,\nWith mirth in funeral, and with dirge in marriage':
    {
      why: "'A defeated joy', 'mirth in funeral', 'dirge in marriage', a dirge being a funeral song: Claudius balances happiness and grief in phrase after phrase. He wants the court to accept a marriage that came very soon after a funeral.",
      not: {
        'He is honestly grieving and has no wish to marry':
          'He has married Gertrude, and wants it accepted. His grief is a balance he presents, not all he feels.',
        'He thinks the funeral and the wedding were both mistakes':
          'He is defending both, not regretting them. The balanced phrases make the hasty wedding sound proper.',
        'He is confused and has forgotten which event came first':
          'Nothing suggests confusion. The phrases are carefully balanced, like a smooth public speech.',
      },
      more: "Hamlet is disgusted by how quickly his mother remarried. Claudius's neat contradictions sound reasonable, but they can also sound false.",
      tip: 'Smooth, balanced oxymorons can be a sign of a politician choosing words carefully. Ask what the speaker wants the listeners to believe.',
    },
  'ALL ANIMALS ARE EQUAL\nBUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS': {
    why: "Equal means the same, so nothing can be 'more equal'. The contradiction shows how the pigs have twisted the farm's first rule: they keep the word 'equal' while giving themselves power over everyone else.",
    not: {
      'They have made sure every animal is treated the same':
        "The words 'more equal' admit that some animals count for more. Equality has been abandoned.",
      'They are bad at spelling and have painted it wrongly':
        'The words are chosen carefully, not by mistake. The contradiction is the pigs’ trick.',
      'They want the other animals to work less and rest more':
        'Nothing here is about rest. The commandment justifies the pigs ruling over the others.',
    },
    more: "This is the only commandment left on the barn wall at the end of the novel. Orwell's contradiction sums up how revolutions can betray their own ideals.",
    tip: 'A deliberate contradiction can expose a lie. Explain what the words claim and what they really mean.',
  },
  'Truly, sir, all that I live by is with the awl': {
    why: "'All' and 'awl' sound the same. An awl is a shoemaker's pointed tool, so the cobbler says he lives by 'all', everything, and by his 'awl'. Two meanings in one sound, for a joke, make a pun.",
    more: 'This comes in the first scene of the play. The cobbler is teasing two officials who want to know his trade, and his puns make them angrier and angrier.',
    tip: 'Puns built on words that sound alike, called homophones, often only work when spoken aloud. Say the line to hear the joke.',
  },
  'The very best at a beast, my lord, that e’er I saw.': {
    why: "'Best' and 'beast' sound almost alike. Demetrius says the actor playing the lion is 'the very best at a beast': the best actor of a beast, and the best at being one. The play on near-identical words is a pun.",
    more: 'The workmen are performing a play at the wedding, and the lords make fun of them. The joke is gentle mockery of a nervous amateur actor.',
    tip: 'A pun can play on two words that sound nearly the same. Write down both words and both meanings to explain it.',
  },
  'I am not I if there be such an I;\nOr those eyes shut that make thee answer Ay.': {
    why: "'I', 'eyes' and 'Ay', which means yes, all sound the same. Juliet plays on the three meanings in two lines. Words that sound alike used for their different meanings make a pun.",
    more: "Juliet is begging the Nurse for news, terrified that 'Ay' will mean Romeo is dead. Even in fear, she plays with words, which shows how quick her mind is.",
    tip: 'Puns are not always jokes. Shakespeare’s characters pun in serious moments too, to show strong feeling or a racing mind.',
  },
  'I am too sore enpierced with his shaft\nTo soar with his light feathers, and so bound,\nI cannot bound a pitch above dull woe.':
    {
      why: "'Sore' (hurt) and 'soar' (fly) sound the same, and 'bound' means both tied up and leap. Romeo uses each sound for two meanings: he is too hurt by love to fly. That play on words is a pun.",
      more: "Romeo is lovesick for Rosaline, and his friend Mercutio has told him to borrow Cupid's wings and fly high. Romeo answers with puns: Cupid's arrow has wounded him too badly.",
      tip: 'Romeo puns even when sad. Notice how wordplay can show a character enjoying, or hiding behind, their own cleverness.',
    },
  '“If he be Mr. Hyde,” he had thought, “I shall be Mr. Seek.”': {
    why: "'Hyde' sounds exactly like 'hide'. Utterson plays on it: if the man is Mr Hyde, he will be Mr Seek, as in hide-and-seek. A word used for two meanings at once is a pun.",
    more: 'Utterson the lawyer decides to watch the door until he sees Hyde. The light joke shows his determination, though the game he is starting turns out to be far from playful.',
    tip: "Writers sometimes choose a character's name for its double meaning. Ask what the name suggests about the character.",
  },
  'The two tennis players had a long rally, but there was no love lost between them.': {
    why: "In tennis, 'love' means a score of nothing, and a 'rally' is a long exchange of shots. 'No love lost between them' also means they dislike each other. One phrase with two meanings, for a joke, is a pun.",
    more: 'The joke works because every word fits tennis as well as the players’ feelings. Puns like this are common in sports reports.',
    tip: 'To find a pun in a sports story, look for words that belong both to the game and to everyday life.',
  },
  "Ella's model aeroplane never left the ground, but her idea for the science fair really took off.":
    {
      why: "'Took off' has two meanings: a plane leaving the ground, and an idea becoming a success. Her plane did not take off, but her idea did. A phrase used for two meanings at once is a pun.",
      more: 'The joke depends on the contrast: the real aeroplane fails, while the idea flies. Puns often set a literal meaning against a figurative one.',
      tip: 'Phrasal verbs such as take off, pick up and turn out often have two meanings. They are good places to look for puns.',
    },
  "The library's new reading corner was so popular that it was fully booked.": {
    why: "'Fully booked' means every place has been reserved, but a library corner is also full of books. The phrase fits both meanings, which makes it a pun.",
    more: 'Puns are often used in signs, headlines and adverts because they make people smile and remember the message.',
    tip: 'When a phrase seems to fit its subject a little too well, check whether it has a second meaning.',
  },
  'I think it be thine indeed, for thou liest in’t.': {
    why: "The gravedigger claims the grave is his. Hamlet agrees, 'for thou liest in't': the man is in the grave, where the dead lie, and he is telling lies, since a grave is for the dead, not for him.",
    not: {
      'Resting, and lying asleep inside the grave':
        'He is neither resting nor asleep: he is standing in the grave, digging it. Hamlet means he is in it, and telling lies.',
      'Telling the truth, and telling a long story':
        'To lie is the opposite of telling the truth. The joke is that he lies in two senses.',
      'Lying in wait, and lying low to hide':
        'Nothing suggests hiding or an ambush. He is standing in the grave and joking with Hamlet.',
    },
    more: 'The gravedigger is a match for Hamlet in wordplay. Their joking scene is comic, yet it is all about death, which Hamlet is trying to understand.',
    tip: 'When a pun uses a common word such as lie, write out both meanings in full. It shows you understand the joke.',
  },
  'This precious book of love, this unbound lover,\nTo beautify him, only lacks a cover': {
    why: "Paris is called 'this precious book of love' that is 'unbound', without its covers, and so 'only lacks a cover'. A book needs a binding to be complete; Paris, she says, needs a wife: Juliet.",
    not: {
      'A book’s binding, and a blanket to keep Paris warm':
        'Paris is not cold. He is a book without a cover: a man who needs a wife.',
      'A disguise, and a place for Paris to hide':
        'Nothing is hidden. The cover finishes the book, as a wife would finish Paris.',
      'A lid, and a roof over the house where Paris lives':
        'A roof is not the point. The image is of a beautiful book still waiting for its binding.',
    },
    more: 'Lady Capulet is trying to persuade Juliet to marry Paris. Her long, clever book metaphor ends in a pun, which shows how carefully she has planned her speech.',
    tip: 'A pun often comes at the end of an extended metaphor, as a punchline. Follow the metaphor through to the last word.',
  },
  'The Count is neither sad, nor sick, nor merry, nor well; but civil Count, civil as an orange, and something of that jealous complexion.':
    {
      why: "Seville oranges are bitter and yellow, and 'civil' sounded like 'Seville'. Yellow was the colour of jealousy, so Beatrice jokes that Claudio is polite on the outside but bitter and jealous inside.",
      not: {
        'Oranges are round, so the Count must be plump':
          'The joke is in the sound of civil, not the shape of an orange.',
        'Oranges are sweet, so the Count must be kind':
          'Seville oranges are bitter, not sweet, which suits a Count who is sulking.',
        'Oranges are bright, so the Count must be cheerful':
          'The Count is sulking, not cheerful. The colour that matters is yellow, the colour of jealousy, and the pun is on Seville.',
      },
      more: 'Claudio thinks the Prince has wooed Hero for himself, so he is sulking. Beatrice notices at once, and turns his mood into a pun.',
      tip: 'Some puns depend on facts the first audience knew, such as Seville oranges. A short gloss shows you understand the joke.',
    },
  'You had musty victual, and he hath holp to eat it; he is a very valiant trencher-man; he hath an excellent stomach.':
    {
      why: "'Stomach' could mean courage in Shakespeare's time, as well as appetite. Beatrice praises Benedick's 'excellent stomach' after calling him a 'valiant trencher-man', a brave eater: brave at the dinner table, not in battle.",
      not: {
        'He never feels sick, even on a rough sea voyage':
          "'Stomach' could mean courage. Beatrice uses it to mean appetite, not seasickness.",
        'He is an excellent cook who feeds the army':
          "A 'trencher-man' is a big eater, not a cook. Beatrice says he eats, not that he cooks.",
        'He is very strong, with powerful muscles':
          'The joke is about eating and bravery, not muscles.',
      },
      more: 'A messenger has just praised Benedick as a soldier. Beatrice cannot resist mocking him, which tells the audience straight away that these two have a history.',
      tip: 'Words change meaning over time. A pun can rest on an old meaning, so check what a word meant then.',
    },
  'Nay, I beseech you, sir, be not out with me; yet, if you be out, sir, I can mend you.': {
    why: "To be 'out' with someone is to be angry with them, but shoes that are 'out' are worn through. The cobbler, a shoe-mender, says that if the official is out, in either sense, 'I can mend you'.",
    not: {
      'He is offering to fix the official’s broken arm':
        "Nothing is broken. 'Mend' is a cobbler's word for repairing shoes.",
      'He wants the official to walk out and leave him alone':
        'He is not sending the official away. He is teasing him with two meanings of out.',
      'He is admitting that his own shoes are worn out':
        'The worn-out shoes are the official’s, in the joke, not the cobbler’s own.',
    },
    more: "The officials are angry that the workmen are celebrating Caesar. The cobbler's cheeky puns show the common people's high spirits, and their lack of respect for the officials.",
    tip: 'Notice who makes puns in a play. Servants and workers often outwit their social betters with wordplay.',
  },
  'thou hadst little wit in thy bald crown when thou gav’st thy golden one away.': {
    why: "A crown is a king's gold circlet, and also the top of the head. The Fool says Lear had little wit in his 'bald crown', his head, when he gave his 'golden one', his kingdom, away to his daughters.",
    not: {
      'Lear’s crown was made of gold and was very heavy':
        'The golden crown is one meaning, but the joke needs the other: his head, which had little sense.',
      'Lear has lost his hair because he is getting old':
        'His baldness is part of the picture, but the point is the foolish decision made inside his head.',
      'Lear won the crown in a contest of wits long ago':
        'Nothing suggests a contest. The Fool means Lear gave his crown away, foolishly.',
    },
    more: 'The Fool is allowed to tell the king hard truths through jokes. His puns keep reminding Lear of his mistake in dividing his kingdom.',
    tip: 'A Fool in Shakespeare often speaks the truth through wordplay. Ask what serious point the joke is making.',
  },
  'They often "came down" handsomely, and Scrooge never did.': {
    why: "Rain, snow and hail often 'came down' handsomely, falling in plenty. To come down handsomely also meant to pay up generously. The weather did, and Scrooge never did: he never gave anything away.",
    not: {
      'Scrooge never came down the stairs to his office':
        'Stairs are not the point. To come down handsomely means to pay generously.',
      'The weather was mild, so no snow fell that winter':
        'The joke needs rain and snow to fall: they come down, while Scrooge does not.',
      'Scrooge never fell over, however icy the ground':
        "'Came down' is about giving money, not falling over.",
    },
    more: 'Dickens is listing all the ways the bad weather was better than Scrooge. The pun ends the list with a joke at his meanness.',
    tip: 'Speech marks around a common phrase, as here, can be a sign that the writer is playing with its meaning.',
  },
  "There's more of gravy than of grave about you, whatever you are!": {
    why: 'Scrooge claims the ghost may be a bit of undigested beef or a blot of mustard, so it is more from gravy than from the grave. Joking that it is indigestion is his way of fighting his terror.',
    not: {
      'He is hungry and wants his supper before he talks':
        'Food is only his excuse. He is trying to explain the ghost away, not asking for supper.',
      'He is sure the ghost has come to take him to his grave':
        'He is trying hard not to believe in the ghost at all, so he jokes rather than admitting fear.',
      'He thinks the ghost is a cook who has spilt his gravy':
        'Gravy is a joke about indigestion: something he ate might be causing the vision.',
    },
    more: 'Dickens adds that Scrooge was not in the habit of cracking jokes, and that he was trying to be smart to keep down his fear. The pun shows a frightened man pretending to be calm.',
    tip: 'Characters sometimes joke when they are frightened. Ask what feeling the pun is hiding.',
  },
  'the near in blood,\nThe nearer bloody.': {
    why: "'Near in blood' means closely related; 'bloody' means murderous. Donalbain means that the closer someone is to them in family, the more likely that person is to shed their blood.",
    not: {
      'They are covered in blood after finding their father':
        "'Near in blood' means closely related, not stained with blood.",
      'Their family is the strongest and healthiest in Scotland':
        'Blood here means family and murder, not health. Donalbain fears his own relatives.',
      'The murderer must be a stranger with no link to them':
        'He suspects the opposite: that someone close to them, a relative, is the killer.',
    },
    more: "King Duncan has just been murdered, and his sons decide to flee. They are right to fear their relative Macbeth, their father's cousin.",
    tip: 'A pun can carry a warning. Explain both meanings, then say what the speaker fears.',
  },
  'This is to make an ass of me, to fright me, if they could.': {
    why: "To 'make an ass' of someone is to make them look foolish. Bottom thinks his friends are fooling him, but the audience can see that he has literally been given an ass's head. The pun is funny because we know more than he does.",
    not: {
      'He knows about his new head and is joking about it':
        'Bottom has no idea his head has changed. The joke is that he does not know.',
      'He has been turned into a real donkey and can only bray':
        'He can still talk, as this line shows. Only his head has been changed.',
      'His friends are playing a trick by dressing as donkeys':
        'His friends ran away in terror when they saw him. Puck changed his head with magic.',
    },
    more: 'When the audience knows something a character does not, it is called dramatic irony. Here it makes Bottom’s every word funnier.',
    tip: 'A pun can depend on what the audience can see. Explain both meanings and who understands each one.',
  },
  'O world, thou wast the forest to this hart;\nAnd this indeed, O world, the heart of thee.': {
    why: "A hart is a male deer, and the world was its forest; but Caesar was also the world's 'heart'. The pun makes him both a noble beast hunted down by the plotters and the centre of everything.",
    not: {
      'He was a coward who ran from danger like a deer':
        'Antony praises Caesar. The hunted hart is noble, killed by others, not a coward running away.',
      'He loved to hunt deer in the forests around Rome':
        'Nothing here is about Caesar hunting. He is the one who has been hunted.',
      'He was cold-hearted and cared for nobody but himself':
        "Antony calls him 'the heart' of the world: its centre, and loved, not cold-hearted.",
    },
    more: 'Antony is alone with the plotters and Caesar’s body. His grief, and his anger at the hunters, show through even while he pretends to make peace with them.',
    tip: 'A pun in a tragic speech is not a joke. Explain how each meaning adds to the speaker’s feeling.',
  },
  'When we have match’d our rackets to these balls,\nWe will, in France, by God’s grace, play a set\nShall strike his father’s crown into the hazard.':
    {
      why: "Henry turns the insult round: he will play a 'set' in France that will strike the French king's crown into the 'hazard', the opening in a tennis court that wins a point, and also danger. The game will be a war.",
      not: {
        'He will challenge the Dauphin to a game of tennis':
          'The game he means is war. A set, a crown and a hazard are tennis words turned into threats.',
        'He is grateful for the gift and will practise his tennis':
          'He is not grateful. The gift mocked him as a playboy, and he answers with a threat.',
        'He is too young to rule and prefers to play games':
          'That is what the insult suggested. Henry’s puns show he is a serious and dangerous king.',
      },
      more: 'The Dauphin thought Henry was still the idle young man of his wild youth. Henry’s cool, witty reply shows he has become a king to be feared.',
      tip: 'A pun can be a threat. Notice how a character takes another’s words and turns them back against him.',
    },
  'But I am constant as the northern star': {
    why: "Caesar compares himself with the northern star: he is 'constant as' it. 'As' here means 'like', so the comparison is made openly: a simile, not a metaphor. 'Constant' means never changing.",
    more: 'The northern star, the Pole Star, seems never to move, so sailors steered by it. Caesar is refusing a request and boasting that nothing can change his mind, moments before the plotters stab him.',
    tip: 'A boastful simile can be dramatic irony: the audience knows what the speaker does not. Ask what is about to happen.',
  },
  'The disinherited son of a small squire, equally disinclined to dig and to beg, was almost as helpless as an uprooted tree':
    {
      why: "A son with no inheritance is compared with an uprooted tree: 'as helpless as' one. The comparison is made openly with 'as ... as', so it is a simile, not a metaphor.",
      more: 'Godfrey Cass fears his father will cut him off. Eliot says such a son, unwilling to dig or beg, would be as helpless as a tree torn from the ground, with nothing to feed on.',
      tip: "A simile with 'as ... as' names the quality the two things share. Start your analysis there: here, helplessness.",
    },
  'I felt as a rabbit might feel returning to his burrow and suddenly confronted by the work of a dozen busy navvies digging the foundations of a house.':
    {
      why: "The narrator compares his feelings with a rabbit's: 'I felt as a rabbit might feel'. 'As' makes the comparison open, so this is a simile, not a metaphor: he does not say he was a rabbit.",
      more: 'He has come out of hiding to find the Martians reshaping the land. Like a rabbit whose burrow is dug up by builders, he realises that humans are no longer the masters of the earth.',
      tip: 'Notice when a writer compares people with small animals. It often shows them losing power.',
    },
  'the fall of a leaf startled me, and I shunned my fellow-creatures as if I had been guilty of a crime.':
    {
      why: "Victor avoided people 'as if I had been guilty of a crime'. 'As if' makes an open comparison with a guilty man, so this is a simile, not a metaphor: he has not really committed a crime.",
      more: 'Victor is secretly building his creature and hiding from everyone. He acts like a criminal, which hints that he already feels his work is wrong.',
      tip: "'As if' similes often show how a character behaves, and what that behaviour gives away.",
    },
  'street after street, all lighted up as if for a procession and all as empty as a church': {
    why: "The streets are compared with a procession route and with an empty church: 'as if for a procession', 'as empty as a church'. Both comparisons are open, so this is a simile, not a metaphor.",
    more: 'Enfield is walking home through London at three in the morning, just before he sees Hyde trample a child. The bright, empty streets feel eerie, as if waiting for something.',
    tip: 'Two similes for one thing can pull in different directions. Here one is grand and busy, the other silent and still.',
  },
  'For women are as roses, whose fair flower\nBeing once display’d, doth fall that very hour.': {
    why: "Orsino compares women with roses: they 'are as roses'. 'As' here means 'like', so the comparison is made openly and this is a simile, not a metaphor.",
    more: 'A rose fades soon after it opens. Orsino is telling Cesario, who is really Viola in disguise, that women’s beauty is brief: a rather selfish view from a man in love with being in love.',
    tip: "In Shakespeare, 'are as' often means 'are like'. Read it with 'like' to test for a simile.",
  },
  'As I perchance hereafter shall think meet\nTo put an antic disposition on': {
    why: "Hamlet says he may 'put an antic disposition on': a mad manner, put on like a coat. Behaviour is not clothing, so this is a metaphor. The 'As' at the start introduces what he may decide later; nothing is compared.",
    more: "'Antic' means wild or mad. Hamlet is warning his friends that he may pretend to be mad, so they must not give him away.",
    tip: 'Clothing metaphors often suggest a disguise: something put on, and so something that can be taken off.',
  },
  'There was witchcraft in little Pearl’s eyes; and her face, as she glanced upward at the minister, wore that naughty smile which made its expression frequently so elvish.':
    {
      why: "There is said to be 'witchcraft in little Pearl's eyes': magic, inside her eyes. Eyes cannot hold spells, so this is a metaphor. 'As she glanced upward' means while she glanced; nothing is compared.",
      more: "Pearl is Hester's daughter, wild and strange, and the townspeople think she is not quite human. The metaphor, and the 'elvish' smile, make her seem uncanny.",
      tip: "A word such as 'witchcraft' or 'devilish' used of a child is a metaphor that shows how others see them.",
    },
  'The lights grow brighter as the earth lurches away from the sun, and now the orchestra is playing yellow cocktail music, and the opera of voices pitches a key higher.':
    {
      why: "The music is 'yellow cocktail music' and the voices an 'opera'. Neither is literally true: the sentence describes one thing in the words of another, which is metaphor. 'As the earth lurches' means while it turns; nothing is compared.",
      more: "Nick is describing a party at Gatsby's as night falls. Colour words for sounds and an 'opera of voices' make the party feel dazzling, loud and a little unreal.",
      tip: 'Describing a sound with a colour, or a colour with a sound, is a daring kind of metaphor. Say what feeling it creates.',
    },
  'Was ever book containing such vile matter\nSo fairly bound?': {
    why: "Juliet calls Romeo a book with 'such vile matter', wicked words, inside covers 'so fairly bound'. She says he is one, not that he is like one, so this is a metaphor. A person called a thing is not personification.",
    more: 'Juliet has just heard that Romeo has killed her cousin Tybalt. The book metaphor shows her shock: his handsome outside seems to hide something evil.',
    tip: 'Personification gives a thing human qualities. When a person is described as a thing, the precise name is metaphor.',
  },
  'How low am I, thou painted maypole?': {
    why: "Hermia calls Helena a 'painted maypole': tall, thin and over-decorated. She says Helena is one, not that she is like one, so this is a metaphor. A person called an object is not personification.",
    more: 'The two friends are quarrelling because magic has made both young men chase Helena. Hermia, who is short, turns the insult on her tall friend.',
    tip: 'Insults in Shakespeare are often quick metaphors. Say what the object suggests about the person: here, tall and showy.',
  },
  'The boy was the very staff of my age, my very prop.': {
    why: "Old Gobbo calls his son 'the very staff of my age', the walking stick of his old age, and his 'prop', his support. A son is not a stick, but Gobbo says he was one, so this is a metaphor, not personification.",
    more: 'Gobbo is almost blind, and his son Launcelet has tricked him into thinking the boy is dead. The metaphor shows how much the old man leans on his son.',
    tip: 'A metaphor of support, such as a staff, a rock or a pillar, shows how much one person depends on another.',
  },
  'I am trusted with a muzzle and enfranchised with a clog; therefore I have decreed not to sing in my cage.':
    {
      why: "Don John speaks of himself as a muzzled dog, an animal with a 'clog' tied to its leg, and a bird in a cage. He is none of these, so this is a metaphor. A person compared with an animal is not personification.",
      more: "'Enfranchised' means set free. Don John has been forgiven by his brother, but he feels trusted only as far as a muzzled dog, so he refuses to be cheerful.",
      tip: 'When a character describes themselves as caged or muzzled, ask who they blame, and whether they are about to break free.',
    },
  'I will do anything, Nerissa, ere I will be married to a sponge.': {
    why: "Portia calls a drunken suitor 'a sponge': he soaks up drink. She does not say he is like one; she calls him one, so this is a metaphor. A person called a thing is not personification.",
    more: "'Ere' means before. Portia must marry whoever chooses the right casket, and this suitor drinks heavily, so she mocks him to her maid Nerissa.",
    tip: 'Everyday objects make sharp, funny metaphors for people. Ask which one quality of the object is meant.',
  },
  'The storm burst upon us six years ago now.': {
    why: "The Martian invasion is called 'The storm'. It was not real weather; the narrator speaks of it as if it were, so this is a metaphor. Pathetic fallacy needs real weather mirroring a mood.",
    more: 'The narrator is looking back on the invasion six years later. Calling it a storm makes it sound sudden, violent and beyond anyone’s control.',
    tip: 'Not every storm in a story is weather. Ask whether the storm is really happening, or stands for something else.',
  },
  'The exhilarating ripple of her voice was a wild tonic in the rain.': {
    why: "Daisy's voice is called 'a wild tonic': a reviving medicine. A voice is not a drink, but the sentence says it was one, so this is a metaphor. Nothing is overstated, so it is not hyperbole.",
    more: "'Exhilarating' means thrilling. Daisy has just arrived at Nick's house in the rain, where Gatsby is waiting to see her for the first time in five years. To Nick, her voice is like a reviving drink on a dreary day.",
    tip: 'Medicine and drink metaphors often show what a person does to someone else: heals them, revives them, or poisons them.',
  },
  'Arise, black vengeance, from thy hollow hell!': {
    why: 'Othello calls on vengeance, revenge, to rise up from hell like a demon. Speaking to an idea as if it were a living being is personification. There is no weather or nature here, so it is not pathetic fallacy.',
    more: 'Iago has convinced Othello that Desdemona has betrayed him. Calling vengeance up from hell shows his love turning into murderous rage.',
    tip: 'When a character calls on an idea to rise up or come to them, it often marks the moment they give in to it.',
  },
  'We lived at the top of the last house, and the wind rushing up the river shook the house that night, like discharges of cannon, or breakings of a sea.':
    {
      why: "On the night that changes Pip's life, a wild wind shakes the house like cannon fire. The violent weather fills the night with turmoil and dread, the mood of the scene, which is pathetic fallacy. The wind is not given human feelings.",
      more: 'This is the stormy night when a stranger from Pip’s past climbs the stairs. The weather prepares the reader for something frightening before it happens.',
      tip: 'A storm can build dread before anything happens. When one rises at the start of a chapter, ask what is about to arrive.',
    },
  'But never till tonight, never till now,\nDid I go through a tempest dropping fire.': {
    why: "Casca has never walked through a storm like tonight's, a 'tempest dropping fire'. The violent, unnatural weather mirrors his terror and the violent plot against Caesar, already afoot that night, which is pathetic fallacy.",
    more: "'Tempest' means storm. On the night before Caesar's murder the heavens seem to warn Rome, and frightened Romans see the storm as a sign.",
    tip: 'In Shakespeare, wild weather often goes with a disturbance in the state, such as the murder of a ruler.',
  },
  'The fog came pouring in at every chink and keyhole, and was so dense without, that although the court was of the narrowest, the houses opposite were mere phantoms.':
    {
      why: "A thick fog pours into Scrooge's counting-house through every crack. The cold, choking gloom outside mirrors the cold, gloomy man inside, which is pathetic fallacy. The fog is not given human feelings.",
      more: "'Chink' means crack and 'without' means outside. The fog is so thick that houses across the narrow court look like 'phantoms', ghosts, which prepares for the ghosts to come.",
      tip: 'Dickens often makes the weather match Scrooge. Notice how it changes as he does.',
    },
  'Down the Strand the lamps were but misty splotches of diffused light which threw a feeble circular glimmer upon the slimy pavement.':
    {
      why: 'In the fog, the street lamps are only misty smudges throwing a weak glow on the slimy pavement. The dim, dreary setting mirrors the heavy, uneasy mood of the evening, which is pathetic fallacy.',
      more: 'The Strand is a busy London street. That evening Watson admits he feels nervous and low, and the description of the gloomy, smeared lights matches his mood.',
      tip: 'Pathetic fallacy can use a whole setting, not only the sky. Look at light, streets and buildings too.',
    },
  'Stiffen the sinews, summon up the blood': {
    why: "Stiffen, sinews and summon begin with the same 's' sound. That repeated opening sound is alliteration. No word imitates a noise, so it is not onomatopoeia.",
    more: "Henry is urging his soldiers to make themselves fierce before the walls of Harfleur. 'Sinews' are muscles. The hissing s sounds make the command tense and urgent.",
    tip: 'Leaders use alliteration to make orders memorable. Read the line aloud as a command.',
  },
  'The dropping of the daylight in the West': {
    why: "'Dropping' and 'daylight' begin with the same 'd' sound, close together, which is alliteration. 'Dropping' is not a sound word, so it is not onomatopoeia.",
    more: 'The Duke lists the simple things his late wife loved, a sunset among them, as if her delight in ordinary things were a fault. The soft d sounds suit the slow sinking of the light.',
    tip: 'A gentle sound pattern can be at odds with what a speaker is saying. Here the beauty of the line works against the Duke’s complaint.',
  },
  'Voices of play and pleasures after day': {
    why: "'Play' and 'pleasures' begin with the same 'p' sound, which is alliteration. 'Voices' names a sound but does not imitate one, so it is not onomatopoeia.",
    more: "The soldier in Owen's poem, who has lost his legs in the war, sits listening to children playing. The light p sounds and the rhyme of play and day make the happy noise he cannot join even sadder.",
    tip: 'A word that names a sound, such as voice or noise, is not onomatopoeia. The word itself must imitate the sound.',
  },
  'The torrent roar’d, and we did buffet it\nWith lusty sinews, throwing it aside\nAnd stemming it with hearts of controversy.':
    {
      why: "'Roar'd' imitates the deep, rushing noise of the flooded river. A word that sounds like its noise is onomatopoeia. No nearby words share an opening sound, so it is not alliteration.",
      more: 'Cassius tells how he and Caesar once swam the flooded river Tiber, and Caesar had to be saved from drowning. The roaring torrent makes the danger real, and shows Caesar as weak.',
      tip: 'Onomatopoeia can make a story inside a speech feel vivid. Ask why the speaker wants the danger to sound so loud.',
    },
  'The odds is gone,\nAnd there is nothing left remarkable\nBeneath the visiting moon.': {
    why: 'Cleopatra says that with Antony dead, nothing remarkable is left anywhere beneath the moon. No one could mean that literally: it is a deliberate overstatement of her grief, which is hyperbole. Nothing is called something else.',
    more: "'The odds is gone' means the difference between great and small has gone: without Antony, everything is ordinary. The moon 'visits' because it seems to travel over the earth.",
    tip: 'Hyperbole in grief makes the loss feel total. Ask what the speaker says the world is now without.',
  },
  'I’ll be your foil, Laertes; in mine ignorance\nYour skill shall like a star i’ th’ darkest night,\nStick fiery off indeed.':
    {
      why: "A foil is the blunt sword used in fencing, and also the dark setting behind a jewel that makes it shine. Hamlet modestly says his poor skill will make Laertes' skill shine out, like a star on the darkest night.",
      not: {
        'A fencing sword, and a way to spoil an enemy’s plan':
          "Foil can mean to spoil a plan, but Hamlet says his ignorance will make Laertes' skill 'stick fiery off': shine out.",
        'A shield for blocking blows, and a wrapping for food':
          'A foil is a light sword, not a shield, and food wrapping is a modern meaning.',
        'A dull jewel, and a dark night with no stars':
          'The dark night is the comparison for how Hamlet’s clumsiness will show off Laertes, not a meaning of foil.',
      },
      more: 'Hamlet and Laertes are about to fence, and Hamlet does not know the match is a trap. His graceful pun is generous to the man plotting against him.',
      tip: 'A pun can be polite as well as funny. Notice the tone of the pun as well as its two meanings.',
    },
  'He’s a soldier; and for one to say a soldier lies is stabbing.': {
    why: "Desdemona means 'where does he lodge?', but 'lies' also means tells lies. The Clown pretends he dare not say a soldier 'lies', because calling a soldier a liar would get you stabbed.",
    not: {
      'Cassio is lying ill in bed after being stabbed':
        "Nobody has been stabbed. 'Stabbing' means that calling a soldier a liar is as good as asking to be stabbed.",
      'Soldiers never tell anyone at all where they are living':
        'The joke is not about secrecy. It turns on the two meanings of lies.',
      'The Clown is too frightened of Cassio to answer':
        "He pretends to be afraid, but only as part of the joke on 'lies'.",
    },
    more: "The Clown's puns are a short, light moment in a play that is growing very dark. Desdemona is anxious to find Cassio, which makes his teasing feel out of place.",
    tip: 'Clowns often stretch a single word as far as it will go. Write out each meaning they use.',
  },
  'Trifles light as air\nAre to the jealous confirmations strong\nAs proofs of holy writ.': {
    why: "'Trifles light as air', tiny things, seem to a jealous man as certain as 'proofs of holy writ', the Bible. Iago means that jealousy turns the smallest detail into proof.",
    not: {
      'They only believe what they read in the Bible':
        "'Holy writ', the Bible, is the comparison for how certain a trifle feels to them, not what they read.",
      'They forget small worries as quickly as air':
        'Light as air describes how small the trifles are. To the jealous they become heavy, not forgotten.',
      'They need a great deal of evidence before they act':
        'Iago means the opposite: a jealous man needs almost no evidence at all.',
    },
    more: 'Iago is planning to plant a handkerchief where Othello’s friend will find it. He knows that one small object will be enough to convince the jealous Othello.',
    tip: 'Two similes set side by side can make a contrast. Here light as air is set against the weight of holy proof.',
  },
  'His reasons are as two grains of wheat hid in two bushels of chaff': {
    why: "Chaff is the useless husk around grain. Two grains of wheat hidden in two bushels of it would take ages to find, and be hardly worth it. Gratiano's 'reasons', his sensible words, are lost in a heap of chatter.",
    not: {
      'He talks about farming and the price of wheat':
        'Wheat and chaff are the comparison. Gratiano talks a great deal, but not about farming.',
      'He saves his best ideas and shares them with friends':
        'His good sense is hidden, not shared: you have to search two bushels of chaff to find it.',
      'He speaks very little, so every word is precious':
        'He talks endlessly. The point is how little sense is in all his words, not how few there are.',
    },
    more: "Bassanio says Gratiano 'speaks an infinite deal of nothing'. The simile is affectionate but sharp: he is fun company, but nobody listens for wisdom.",
    tip: 'Farming similes were familiar to Shakespeare’s audience. Explain the farming fact first, then what it shows.',
  },
  'It seemed as if an invisible bond had burst, and that I had struggled out into unhoped-for liberty.':
    {
      why: "Jane feels 'as if an invisible bond had burst', and she has struggled out into freedom she never hoped for. The simile shows the sudden release of speaking up after years of silent suffering.",
      not: {
        'She is tied up with rope and struggling to escape from her room':
          "The bond is 'invisible': there is no real rope. It is a picture of how trapped she has felt.",
        'She is sure that her aunt will love her now':
          "Nothing suggests that. Mrs Reed is frightened of her, and the burst bond is Jane's own freedom, not a new love between them.",
        'She is too frightened of her aunt to say any more':
          'Her aunt looks frightened, not Jane. Jane has found the courage to speak.',
      },
      more: 'Jane is ten, an orphan living with her aunt, who treats her cruelly. Here she tells Mrs Reed exactly what she thinks of her, and the triumph is overwhelming, though remorse follows within half an hour.',
      tip: 'Images of chains, ropes or cages breaking often mark a turning point for a character. Ask what they are now free to do.',
    },
  'The fountains of human love and of faith in a divine love had not yet been unlocked, and his soul was still the shrunken rivulet':
    {
      why: 'A rivulet is a little stream. Silas’s soul is called a shrunken one: his love and faith have dried up to almost nothing, and what is left is blocked and confused.',
      not: {
        'He lives beside a small stream that is drying out':
          'The rivulet is the comparison for his soul, not a real stream near his cottage.',
        'He is thin and weak because he does not eat enough':
          'The image is about his soul, not his body. It is his capacity for love that has shrunk.',
        'His love for his neighbours is growing day by day':
          "A 'shrunken' stream is getting smaller. His love has not yet begun to grow.",
      },
      more: 'Silas has been robbed of his gold and spends Christmas alone. The water image prepares for change: when love returns to him, through Eppie, the stream can flow again.',
      tip: 'Water metaphors often show how full or empty a life is. Notice whether the water is flowing, blocked or dried up.',
    },
  'Heaven knows we need never be ashamed of our tears, for they are rain upon the blinding dust of earth, overlying our hard hearts.':
    {
      why: "Pip calls tears 'rain upon the blinding dust of earth, overlying our hard hearts'. As rain settles dust and softens hard ground, crying clears what blinds us and softens our hearts.",
      not: {
        'Tears are a sign of weakness that should be hidden':
          "He says the opposite: 'we need never be ashamed of our tears'.",
        'Rain on the road has made his journey dusty and hard':
          'There is no real rain. The rain is his tears, falling on the dust of the world.',
        'People cry only when the weather is bad':
          'Tears and rain are compared, but crying does not depend on the weather.',
      },
      more: 'Pip cries as he leaves home for London, at a signpost on the road. The grown-up Pip, telling the story, thinks the tears made him a better person for a moment.',
      tip: 'When a narrator looks back on their younger self, metaphors often carry their later wisdom. Ask who is speaking: the boy or the man.',
    },
  'To see the dingy cloud come drooping down, obscuring everything, one might have thought that Nature lived hard by, and was brewing on a large scale.':
    {
      why: "Nature is personified as a neighbour who 'lived hard by', close by, and was brewing beer, which fills the air with steam. The joke paints the fog as so thick and dirty it might come from a giant brewery next door.",
      not: {
        'Nature is making tea and coffee for the clerks':
          'Brewing means making beer, which fills the air with steam. Nobody is making drinks for the clerks.',
        'The weather is warm and pleasant, like a kitchen':
          'The fog is dingy and drooping, not pleasant. The brewing is a joke about how thick it is.',
        'Scrooge is secretly running a brewery next door':
          "Scrooge runs a counting-house. 'Nature lived hard by', close by, is Dickens's joke.",
      },
      more: 'The fog pours into Scrooge’s office on Christmas Eve. Dickens makes the gloomy weather comic as well as dreary, which is typical of his style.',
      tip: 'Dickens often mixes humour with gloom. When a description makes you smile, say what the joke adds to the mood.',
    },
  'the sky was just a row of long angry red lines and dense black lines intermixed': {
    why: "The sky is 'a row of long angry red lines and dense black lines'. Angry red and black make it threatening, mirroring the terror of a small boy who has just been grabbed by an escaped convict.",
    not: {
      'A summer sunset is making the marshes beautiful':
        "The red lines are 'angry' and mixed with dense black. This is a threatening sky, not a beautiful one.",
      'The convict is angry with the weather on the marshes':
        'The sky is angry, not the convict. The weather mirrors the threat Pip feels.',
      'The sky will clear soon, and he will feel calmer':
        'Nothing suggests clearing. The black and red lines leave Pip, and the reader, uneasy.',
    },
    more: 'The marshes are flat and bleak, made of lines and nothing else. The angry sky adds to the sense that Pip is small and alone in a dangerous world.',
    tip: 'Colours carry moods. Red can mean anger or danger, and black fear or death. Say what the colours add.',
  },
  'he looked out on the black frost that seemed to press cruelly on every blade of grass, while the half-icy red pool shivered under the bitter wind':
    {
      why: "Silas spends Christmas alone and grieving. The 'black frost' that seems to press 'cruelly' on every blade of grass, and the pool shivering in the bitter wind, mirror his crushing, lonely loss.",
      not: {
        'Winter has come early, and he must find more firewood':
          'The frost is there for its mood, not to send him for firewood. It mirrors his bitter loss.',
        'He is looking forward to Christmas with his neighbours':
          'He spends Christmas alone and sad, though neighbours tried to cheer him.',
        'The frost is beautiful, and it cheers him up':
          'The frost presses ‘cruelly’; nothing about it is cheering.',
      },
      more: 'The weather is personified too: the frost is cruel and the pool shivers. Later that day snow begins to fall, and before long the child Eppie will come into his life.',
      tip: 'Pathetic fallacy often uses personification. Name both, and say what the weather’s feeling shows about the character’s.',
    },
  'Presently I heard Pilot bark far below, out of his distant kennel in the courtyard: hope revived.':
    {
      why: "After hours in the dark with a wounded man, Jane hears Rochester's dog bark in the courtyard. The everyday sound means morning is coming and the house is waking, so the long, frightening night is nearly over.",
      not: {
        'It warns her that a dangerous dog is coming to attack':
          'Pilot is Rochester’s dog, and his bark brings hope, not fear.',
        'It means Pilot has found the person who hurt the man':
          'Nothing suggests Pilot has found anyone. The bark simply belongs to the ordinary waking world.',
        'It tells her the wounded man has died in the night':
          'She feared he might die, but he is still alive. Her hope revives because morning, and help, are near.',
      },
      more: 'Onomatopoeia here works through contrast. After the silence and terror of the night, one ordinary sound feels like rescue.',
      tip: 'A familiar sound in a frightening scene can bring relief. Ask what the sound means to the character, not just what it is.',
    },
  'Thrift, thrift, Horatio! The funeral bak’d meats\nDid coldly furnish forth the marriage tables.':
    {
      why: "Hamlet sarcastically praises 'thrift', saving money: the pies baked for his father's funeral were served cold at his mother's wedding. The exaggeration shows how disgustingly soon, to him, the wedding followed the death.",
      not: {
        'His family is so poor that they cannot afford a feast':
          'They are royalty. Calling it thrift is sarcasm about speed, not real money worries.',
        'The wedding food was cold because the cooks were late':
          "'Coldly' means the leftover funeral pies were served cold at the wedding, which is the joke.",
        'Hamlet enjoyed the wedding more than the funeral':
          'Hamlet is disgusted by the wedding. His joke is bitter, not cheerful.',
      },
      more: 'Gertrude married Claudius, her dead husband’s brother, within two months. Hamlet’s bitter wit is how he copes with his anger and grief.',
      tip: 'Sarcastic hyperbole says the opposite of what it seems to praise. Explain what the speaker really means.',
    },
}
