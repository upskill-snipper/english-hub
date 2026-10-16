import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Reading Detective: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/reading-detective.ts). Written with AI on 16 October
 * 2026 and checked against each passage, question and option, as the founder
 * decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'The Last Bus: How many times had Mara checked her watch?': {
    why: "The first sentence says Mara 'checked her watch for the third time', so she has checked it three times. Look for the exact words in the text that match the question.",
    not: {
      Once: "'For the third time' means this is her third check, not her first.",
      Twice: 'She had checked twice before, but this check is the third, so the total is three.',
      'Eight times':
        "Eight comes from 'eight minutes ago', which is how late the bus is. It is not the number of checks.",
    },
    more: "Checking a watch again and again shows that Mara is anxious and impatient. A small detail like this can tell you about a character's feelings.",
    tip: 'In retrieval questions, watch out for numbers that appear elsewhere in the text. Check that the number you choose answers this question.',
  },
  'The Last Bus: Why could Mara not take a taxi?': {
    why: "The text says she 'had spent her last coins on a sandwich at lunch, so a taxi was out of the question'. If those were her last coins, she had no money left for a taxi.",
    not: {
      'There were no taxis nearby':
        'The text never says whether taxis were nearby. The reason it gives is about money.',
      'She disliked taxis':
        'Nothing suggests she dislikes taxis. She simply could not pay for one.',
      'The taxi was full': 'No taxi appears in the passage at all, so it cannot have been full.',
    },
    more: "The word 'so' links a cause to its result: she spent her last coins, so she could not get a taxi. Connectives like 'so' and 'because' often point to the answer to a 'why' question.",
    tip: "For an inference, put the clue and your conclusion together: 'Her last coins are gone, so she has no money for a taxi.'",
  },
  'The Last Bus: How does Mara most likely feel when the headlights appear?': {
    why: "Mara has been waiting for a late bus, and when headlights 'finally' appear she stands up 'so quickly that her bag slid off the bench'. Jumping up that fast shows she is relieved the wait is over and eager to go.",
    not: {
      Bored: 'A bored person would not leap up so quickly that their bag falls off the bench.',
      Angry:
        'She may have been annoyed by the wait, but her quick reaction to the headlights shows eagerness, not anger.',
      Sleepy: 'Sleepy people move slowly. Mara moves so fast that her bag slides off.',
    },
    more: "Writers often show feelings through actions instead of naming them. 'Finally' also hints at how long the wait has felt.",
    tip: "When asked how a character feels, find an action and explain what it shows: 'Standing up so quickly shows her relief and eagerness.'",
  },
  'The Honey Bee: How much honey does one bee make in its whole life?': {
    why: "The first sentence says a single honey bee produces 'only about a twelfth of a teaspoon of honey in its entire life'. 'Its entire life' matches 'its whole life' in the question.",
    not: {
      'A full teaspoon':
        'A twelfth of a teaspoon is much less than a full one. It would take about twelve bees to make a teaspoon.',
      'One jar': 'The text says thousands of bees are needed to make one jar, not one bee.',
      'A million teaspoons':
        "'Millions' in the text describes the flowers the bees visit, not the honey one bee makes.",
    },
    more: "The word 'only' shows the writer wants us to be surprised by how little one bee makes, and so to value the work of the whole hive.",
    tip: "Questions often use different words from the text, such as 'whole life' for 'entire life'. Look for words with the same meaning, not just the same words.",
  },
  'The Honey Bee: What is the "waggle dance" used for?': {
    why: "The text says bees 'communicate the direction of food' by performing a movement that scientists call the waggle dance. So the dance shows other bees which way to go for food.",
    not: {
      'To rest the bees': 'The dance is a movement that carries a message, not a way of resting.',
      'To clean the hive':
        'Cleaning is never mentioned. The dance is about telling other bees where food is.',
      'To scare predators':
        'No predators are mentioned. The dance is aimed at other bees, to share where food is.',
    },
    more: 'This is a real fact: scientists have found that the angle and length of the dance tell other bees which way the flowers are and roughly how far.',
    tip: "When a word is in inverted commas, like 'waggle dance', the sentence around it usually explains it. Read the whole sentence.",
  },
  'The Honey Bee: What does the passage suggest would happen if bees disappeared?': {
    why: "The last sentence says that without bees and other pollinators, 'many of the fruits and vegetables we eat would become far harder to grow'. So losing bees would make growing many foods much harder.",
    not: {
      'Honey would taste sweeter':
        'Without bees there would be no honey to taste. The text says nothing about sweetness.',
      'Flowers would grow faster':
        'Nothing in the text links bees to how fast flowers grow. It is about our crops.',
      'Nothing would change':
        'The text warns of a big change: many fruits and vegetables would be far harder to grow.',
    },
    more: 'Pollinators carry pollen from flower to flower, which many plants need to make fruit and seeds. That is why bees matter far beyond honey.',
    tip: "'Suggest' questions ask you to apply what the text says. Here it says 'bees and other pollinators', and the question asks only about bees, so you go one step beyond the words.",
  },
  'Repotting a Plant: When should you water the plant before starting?': {
    why: "The first sentence tells you to 'water the plant lightly an hour ahead so the soil holds together'. 'An hour ahead' means an hour before you start.",
    not: {
      'A day before': 'The text says an hour ahead, not a day.',
      'A week before':
        'The text says an hour ahead, not a week. A week would be far too early to help.',
      Never:
        'The instructions clearly say to water it, both before you start and again at the end.',
    },
    more: 'The reason is given too: watering first helps the soil hold together, so the plant comes out of its pot in one piece.',
    tip: "Instructions often give a time and a reason in the same sentence. In retrieval questions, check whether you are asked for the 'when' or the 'why'.",
  },
  'Repotting a Plant: Why should the new pot be only one size larger?': {
    why: "Straight after saying to choose a pot only one size larger, the text gives the reason: 'a pot that is too big can lead to soggy roots'.",
    not: {
      'It looks neater':
        'The text gives no reason about looks. Its reason is the health of the roots.',
      'It is cheaper': 'Cost is never mentioned in the instructions.',
      'It is easier to carry':
        'Carrying the pot is never mentioned. The reason given is about soggy roots.',
    },
    more: 'The semicolon in that sentence joins the instruction to the reason behind it. Semicolons often link two closely connected ideas.',
    tip: "When a question asks 'why', look just after the instruction for words that explain it, such as 'because', 'so' or a semicolon.",
  },
  'Repotting a Plant: What can you infer about the plant’s roots before repotting?': {
    why: "You are told to 'loosen the tangled roots with your fingers'. If the roots are tangled and need loosening, you can infer they have grown crowded in the old pot, which is why the plant needs a bigger one.",
    not: {
      'They are completely dry':
        'The plant was watered an hour before, so its roots should not be completely dry.',
      'They have been removed':
        'The roots are still there to be loosened. Nothing says they were removed.',
      'They are painted':
        'Nothing in the text mentions paint, and it does not make sense for a plant.',
    },
    more: "Plants are usually repotted when their roots have filled the old pot. The writer does not say this directly, but 'tangled' and the need for a bigger pot point to it.",
    tip: "An inference uses evidence plus what you know. Write it as: 'The word tangled suggests the roots have run out of room.'",
  },
  'My First Coding Club: What did the leader hand the writer?': {
    why: "The text says 'the leader handed me a sticky note'. The question uses the same verb, hand, so scanning for it takes you straight to the answer.",
    not: {
      'A laptop': 'A laptop is never mentioned. What the leader handed over was a sticky note.',
      'A book': 'No book is mentioned in the passage.',
      'A cat':
        "The cat is a picture in the writer's program, not something the leader handed over.",
    },
    more: "The sticky note is a small, friendly gesture. Along with 'everyone there had once been a beginner', it shows the club was welcoming.",
    tip: "Scanning for a key word from the question, such as 'handed', is the quickest way to answer a retrieval question.",
  },
  'My First Coding Club: Why did the writer almost not go?': {
    why: "The writer 'imagined a room full of experts who would laugh at my questions'. Imagining being laughed at shows they were afraid of it, which is why they almost stayed away.",
    not: {
      'They were too tired': 'Tiredness is never mentioned. The worry was about the people there.',
      'They had no transport': 'Getting there is never mentioned as a problem.',
      'They were ill':
        "Nothing suggests illness. The writer's fear came from imagining experts laughing.",
    },
    more: "The next word, 'Instead', shows that the club was not what the writer feared. Writers often set up a worry and then overturn it.",
    tip: "For 'why' questions about feelings, look at what a character imagines or expects. Their worries often explain their actions.",
  },
  'My First Coding Club: How does the writer feel by the end?': {
    why: "The writer 'walked home grinning, already planning what to build next week'. Grinning shows happiness and excitement, and planning more shows new confidence.",
    not: {
      Disappointed: 'A disappointed person would not walk home grinning and planning to come back.',
      Frightened: 'The writer was nervous at the start, but by the end the fear has gone.',
      Confused: 'The writer got their program working, so they understood what they were doing.',
    },
    more: "The passage moves from fear to confidence. Noticing how a character's feelings change from beginning to end is a key reading skill.",
    tip: "Back up a feeling with evidence: 'The verb grinning shows excitement, and already planning shows confidence.'",
  },
  'The Locked Drawer: Where was the brass key hidden?': {
    why: "The narrator says 'I found the small brass key hidden under a pot of pencils'. The word 'hidden' in the question points you to this sentence.",
    not: {
      'In Dad’s coat': "Dad's coat is never mentioned. The key was under a pot of pencils.",
      'Behind a book': 'No book is mentioned. The text says the key was under a pot of pencils.',
      'In the drawer': 'The key opens the drawer, so it could not have been locked inside it.',
    },
    more: "The details 'small' and 'brass' make the key seem old and precious, which builds the mystery before the drawer is opened.",
    tip: "Retrieval questions reward precise answers. 'Under a pot of pencils' is better than just 'on the desk'.",
  },
  'The Locked Drawer: What was actually inside the drawer?': {
    why: "The last sentence says there were 'no jewels or secrets, only a faded photograph of a boy who looked exactly like me'. The word 'only' tells you this was all there was.",
    not: {
      Jewels:
        "The text says there were 'no jewels'. The narrator may have hoped for them, but they were not there.",
      Money: 'Money is never mentioned. The only thing inside was a photograph.',
      'A letter': 'No letter is mentioned. The drawer held only a faded photograph.',
    },
    more: "The question says 'actually' because the narrator expected treasure. The ending, a boy who looks exactly like the narrator, leaves a new mystery: who is he?",
    tip: "Words such as 'actually' and 'really' in a question often warn you that the text sets up a false expectation. Give what was truly there.",
  },
  'The Locked Drawer: Why was the narrator so curious about the drawer?': {
    why: "Dad had told them 'never to touch the bottom drawer', 'so of course it was all I could think about'. Being told not to touch it is exactly what made the drawer so tempting.",
    not: {
      'It was always open': 'It needed a key to open, so it was not always open.',
      'A friend dared them': "No friend or dare appears. The curiosity came from Dad's rule.",
      'It made a strange noise':
        'No noise is mentioned. The narrator was curious because the drawer was forbidden.',
    },
    more: "'Of course' shows the narrator thinks this reaction is natural: being told not to do something makes people want to do it more.",
    tip: "Look for cause and effect linked by 'so'. Here the rule, never touch, causes the curiosity, all I could think about.",
  },
  'Volcanoes: What is melted rock called once it reaches the surface?': {
    why: "The text says melted rock below the ground is magma, but 'once it reaches the surface it is called lava'.",
    not: {
      Magma:
        'Magma is the name for melted rock below the ground. Once it reaches the surface, it is called lava.',
      Ash: 'Ash is mentioned as something that escapes from a volcano, but it is not melted rock.',
      Gas: 'Gases also escape, but they are not melted rock. Melted rock at the surface is lava.',
    },
    more: 'It is the same melted rock in both cases: only its position changes its name. Underground it is magma; above ground it is lava.',
    tip: 'When a text gives two similar terms, note exactly what makes them different. Questions often test that difference.',
  },
  'Volcanoes: What name is given to scientists who study volcanoes?': {
    why: "The last sentence says 'Scientists who study volcanoes are known as volcanologists'. The question repeats 'scientists who study volcanoes', so this sentence holds the answer.",
    not: {
      Meteorologists: 'Meteorologists study the weather, not volcanoes.',
      Biologists: 'Biologists study living things, not volcanoes.',
      Astronomers: 'Astronomers study stars, planets and space, not volcanoes.',
    },
    more: "Many science words end in 'ologist', meaning someone who studies something: a volcanologist studies volcanoes, and a biologist studies living things.",
    tip: "Breaking a long word into parts can unlock its meaning: volcano plus ologist gives 'someone who studies volcanoes'.",
  },
  'Volcanoes: Why do volcanologists monitor warning signs?': {
    why: "The text says volcanologists 'monitor warning signs to help keep nearby towns safe'. The word 'to' introduces the reason.",
    not: {
      'To collect lava samples for fun':
        'The text gives a serious reason, safety. It never mentions lava samples or fun.',
      'To stop volcanoes erupting':
        'Nobody can stop a volcano erupting. Watching the signs gives people warning, so they can stay safe.',
      'To name new volcanoes':
        'Naming volcanoes is never mentioned. The reason given is keeping towns safe.',
    },
    more: 'Warning signs can include small earthquakes, more gas escaping and the ground swelling. Spotting them early gives people time to leave.',
    tip: "'To' followed by a verb often gives a purpose: 'monitor warning signs to help keep nearby towns safe'. Use it to find reasons quickly.",
  },
  'Making a Paper Aeroplane: What should you do after folding the paper in half lengthways?': {
    why: "The first sentence says to fold the paper in half lengthways, 'then open it out again so a crease remains'. 'Then' tells you this is the very next step.",
    not: {
      'Tear it in two':
        'The instructions never tell you to tear the paper. You need the whole sheet to make the plane.',
      'Fold it in half again':
        'These instructions never ask you to fold it in half again. The next step is to open it out, leaving a crease.',
      'Throw it at once':
        'Throwing is the very last step, after the corners and the wings have been folded.',
    },
    more: "The crease left behind is a guide: the next step folds the corners in to meet it, the 'centre line'.",
    tip: "Instructions are written in time order. Words such as 'then', 'next' and 'finally' show you exactly where each step belongs.",
  },
  'Making a Paper Aeroplane: Why must both sides be kept even?': {
    why: "The third sentence says to keep 'both sides even so the plane flies straight'. The word 'so' introduces the reason.",
    not: {
      'So it looks colourful':
        'Colour is never mentioned. The reason is about how the plane flies.',
      'So it is heavier':
        'Folding evenly does not make the plane heavier. The text says it helps it fly straight.',
      'So it folds faster':
        'The speed of folding is never mentioned. Even sides help the plane fly straight.',
    },
    more: 'If one wing is bigger than the other, the air pushes harder on one side and the plane turns off course.',
    tip: "Instructions often explain why a step matters. Spotting the reason helps you remember the step, and answer 'why' questions.",
  },
  'Making a Paper Aeroplane: What kind of throw does the text recommend?': {
    why: "The last sentence says to 'launch it with a gentle, level throw'. The answer uses the text's own words.",
    not: {
      'A hard upward throw':
        'The text asks for the opposite: gentle, not hard, and level, not upward.',
      'A spinning throw':
        'Spinning is never mentioned. A gentle, level throw keeps the plane steady.',
      'A downward throw':
        'The text says level, not downward. A downward throw would send the plane into the ground.',
    },
    more: 'A paper plane flies best when it is launched smoothly, so the air can flow evenly over its wings.',
    tip: "When options look similar, compare every word with the text. Here both 'gentle' and 'level' must match.",
  },
  'Why I Switched Off Notifications: Where did the writer leave their phone while reading?': {
    why: "The writer says they 'left the phone in another room while I read'. The question's words 'while reading' lead you straight to this sentence.",
    not: {
      'In their pocket':
        "The phone was not with them at all: they kept reaching for 'a phone that was not there'.",
      'On the table': 'A table is never mentioned. The phone was in another room.',
      'In a bag': 'A bag is never mentioned. The phone was in another room.',
    },
    more: "Putting the phone in another room was the writer's way of breaking the habit of checking it.",
    tip: "Match the question's key words to the text: 'leave' and 'while reading' match 'left' and 'while I read'.",
  },
  'Why I Switched Off Notifications: What does "kept reaching for a phone that was not there" suggest?':
    {
      why: 'The writer knew the phone was in another room, yet kept reaching for it without thinking. Doing something automatically, again and again, shows a habit that is hard to break.',
      not: {
        'The writer lost their phone':
          'The phone was not lost: the writer had left it in another room on purpose.',
        'The phone was broken':
          'Nothing suggests the phone was broken. It was simply in another room.',
        'The writer had two phones': 'Only one phone is mentioned, and it was in another room.',
      },
      more: "'At first' suggests the habit faded over the weekend. By Sunday evening the writer felt calm.",
      tip: 'Inference questions often quote a phrase. Ask what it shows about the person, not just what it says.',
    },
  'Why I Switched Off Notifications: How did the writer feel by Sunday evening?': {
    why: "The last sentence says that by Sunday evening the writer 'felt strangely calm'. The question uses the same time phrase, 'by Sunday evening'.",
    not: {
      Anxious:
        'The writer felt pressure before, replying to every buzz, but by Sunday evening they felt calm.',
      Bored: 'The writer finished a whole book, so they were absorbed, not bored.',
      Annoyed: 'Nothing suggests annoyance. The writer says they felt calm.',
    },
    more: "'Strangely' shows the calm surprised the writer: it was 'something I had not felt in a long time'. That suggests months of feeling hurried and pressured.",
    tip: "Time phrases such as 'at first' and 'by Sunday evening' help you find the right moment in a text, especially when feelings change.",
  },
  'The Marble Race: What did Tomas build the track from?': {
    why: "The first sentence says Tomas built the track 'out of cardboard tubes taped along the staircase'.",
    not: {
      Wood: 'Wood is never mentioned. The track was made of cardboard tubes.',
      'Metal pipes': 'The tubes were cardboard, not metal.',
      'Plastic bricks': 'No bricks appear. The track was made of cardboard tubes.',
    },
    more: 'Building with cardboard and tape suggests Tomas made it himself from everyday things, which makes its success even more satisfying.',
    tip: "'Built from' and 'built out of' mean the same thing. Look for matching meanings, not identical words.",
  },
  'The Marble Race: How did Ana feel about the track at first?': {
    why: "The text says Ana 'doubted it would work and folded her arms'. To doubt something is to be doubtful about it.",
    not: {
      Excited: 'She folded her arms and doubted it would work. That is not excitement.',
      Frightened: 'Nothing suggests fear. She simply did not believe the track would work.',
      Proud: 'Tomas built the track, and Ana doubted it, so she was not proud of it.',
    },
    more: 'Folded arms are body language for doubt or holding back. The writer shows her feeling twice: in what she thinks and in what she does.',
    tip: 'Notice body language in stories. Folded arms, clenched fists or a grin can show feelings without naming them.',
  },
  'The Marble Race: What does Ana’s grin at the end show?': {
    why: "After the marble lands in the cup, Ana's arms 'slowly unfolded, and a grin spread across her face'. Her doubting body language disappears, so she is now impressed.",
    not: {
      'She was still doubtful':
        'Her folded arms showed doubt. Unfolding them and grinning shows the doubt has gone.',
      'She was tired': 'A grin shows pleasure, not tiredness.',
      'She was upset': 'A grin is a happy expression, the opposite of being upset.',
    },
    more: "'Slowly' suggests she does not want to admit it straight away. The writer shows her change of mind through her body, not by telling us.",
    tip: "Compare a character at the start and the end. Ana's arms fold, then unfold: that change is the point of the story.",
  },
  'The River Nile: In which direction does the Nile flow?': {
    why: "The first sentence says the Nile 'flows northwards through north-eastern Africa'.",
    not: {
      Southwards: 'The text says northwards, which is the opposite direction.',
      Eastwards: "'North-eastern Africa' tells you where the river is, not which way it flows.",
      Westwards: 'The text says the Nile flows northwards, not west.',
    },
    more: 'The Nile flows north into the Mediterranean Sea. People sometimes expect rivers to flow south, because south is at the bottom of a map, but rivers flow downhill in any direction.',
    tip: "Read the whole phrase. 'North-eastern Africa' might tempt you to choose east, but it describes the region, not the flow.",
  },
  'The River Nile: Why did the yearly floods help farmers?': {
    why: "The text says the yearly floods 'left rich, dark soil along its banks, allowing farmers to grow crops in an otherwise dry land'.",
    not: {
      'They washed crops away':
        'Floods can do that, but the text says these floods helped farmers by leaving good soil.',
      'They cooled the air': 'Temperature is never mentioned. The benefit was the rich soil.',
      'They created roads': 'Roads are never mentioned. The floods left fertile soil.',
    },
    more: "'Otherwise dry land' tells us that without the floods, the land would have been too dry to farm.",
    tip: "Watch for words that link a cause to its result, such as 'allowing', 'so' and 'because'.",
  },
  'The River Nile: Why did many ancient towns grow up near the Nile?': {
    why: "The text does not say why directly, so you put clues together: the river brought water, and its floods left rich soil for crops in 'an otherwise dry land'. That made the land by the river good for living and farming.",
    not: {
      'It was the only flat land':
        'Flat land is never mentioned. The text points to water and rich soil as the attraction.',
      'It was always cold there':
        'The text calls it a dry land and never mentions cold. North-eastern Africa is mostly hot.',
      'There were no animals':
        'Animals are never mentioned. People settled there because of the water and the soil.',
    },
    more: 'Towns and cities have often grown up beside rivers, which give drinking water, food, farmland and transport.',
    tip: "For an inference, link two pieces of evidence: 'The floods made the soil rich and the land around was dry, so people settled by the river.'",
  },
  'Staying Safe in a Storm: How long should you wait after the last thunder?': {
    why: "The last sentence says to 'wait until at least thirty minutes after the last thunder before going back outside'.",
    not: {
      'Five minutes': 'Five minutes is far shorter than the thirty minutes the text gives.',
      'Two hours':
        'Waiting longer would do no harm, but the text says at least thirty minutes, not two hours.',
      'No need to wait':
        'The text clearly says to wait, because lightning can still strike after a storm seems to be over.',
    },
    more: "'At least' means thirty minutes is the shortest safe wait: you can wait longer, but not less.",
    tip: "Small words such as 'at least', 'only' and 'never' change a meaning completely. Include them when you retrieve an answer.",
  },
  'Staying Safe in a Storm: Why should you avoid sheltering under a lone tree?': {
    why: "The first sentence says not to shelter under 'a tall, lone tree, as it can attract lightning'. 'As' here means 'because', so it introduces the reason.",
    not: {
      'It is uncomfortable': 'Comfort is never mentioned. The danger is lightning.',
      'It blocks the view':
        'The view is never mentioned. The reason is that the tree can attract lightning.',
      'It is too far away':
        'Distance is never mentioned. The tree is dangerous because it can attract lightning.',
    },
    more: 'Lightning tends to strike the tallest thing around, so a tree standing alone in open ground is especially risky.',
    tip: "'As' can mean 'because'. When you see it in the middle of a sentence, check whether it is giving a reason.",
  },
  'Staying Safe in a Storm: Why does the text say to avoid using taps?': {
    why: "The text says to 'avoid using taps, since pipes can carry an electrical charge'. 'Since' means 'because', so it gives the reason.",
    not: {
      'The water may be dirty':
        'Dirty water is never mentioned. The danger is electricity travelling through the pipes.',
      'It wastes water':
        'Wasting water is never mentioned. The text is about staying safe in a storm.',
      'It makes noise': 'Noise is never mentioned. The reason given is the electrical charge.',
    },
    more: 'If lightning strikes a building, the electricity can travel along metal pipes and through the water, which is why taps can be dangerous in a storm.',
    tip: "'Since', 'as' and 'because' can all introduce reasons. Learn to spot all three.",
  },
  'Learning to Cook: What happened during the first pasta attempt?': {
    why: "The writer says the first attempt at pasta 'ended with a smoke alarm and a very hard lump in the pan'. So a smoke alarm went off.",
    not: {
      'It was delicious':
        'A very hard lump that set off the smoke alarm was not delicious. It was a failure.',
      'Guests arrived': 'The friends came a month later. Nobody arrived during the first attempt.',
      'The pan broke': 'There was a hard lump in the pan, but the pan itself did not break.',
    },
    more: 'The writer uses this disaster for humour, and to show how far they improved by the end.',
    tip: "Retrieval answers sometimes rephrase the text: 'ended with a smoke alarm' becomes 'a smoke alarm went off'.",
  },
  'Learning to Cook: What did the writer do to improve?': {
    why: "The text says 'I watched my grandmother carefully the next time I visited and wrote down every step'.",
    not: {
      'Bought ready meals':
        'Ready meals are never mentioned. The writer learned to cook from their grandmother.',
      'Gave up cooking': "The text says 'Rather than giving up', so the writer did the opposite.",
      'Ate out every day':
        'Eating out is never mentioned. The writer learned by watching and taking notes.',
    },
    more: "'Rather than giving up' shows determination. The writer turned a failure into a reason to learn.",
    tip: "Notice phrases such as 'rather than' and 'instead of'. They tell you what a character chose not to do, which can rule out wrong answers.",
  },
  'Learning to Cook: What can you infer from "nobody guessed it was only my fifth attempt"?': {
    why: 'If nobody guessed the writer was a beginner, the meal must have been good. Going from a smoke alarm to a meal for friends in five attempts shows the writer had improved a lot.',
    not: {
      'The meal was a failure':
        'If the meal had failed, the friends would have guessed. Their not guessing suggests it was a success.',
      'The friends did not eat':
        'Nothing suggests they refused it, and they could only judge the meal by eating it.',
      'The writer cooked daily': 'Five attempts in about a month is not every day.',
    },
    more: "'Only' stresses how few attempts it took. The passage is about learning: from barely boiling an egg to cooking for friends.",
    tip: 'When a question asks what you can infer, ask what must be true for the quoted words to make sense.',
  },
}
