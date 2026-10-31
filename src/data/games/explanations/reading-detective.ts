import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Reading Detective: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/reading-detective.ts). Written with AI on 16 October
 * 2026 and checked against each passage, question and option, as the founder
 * decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 215 explanations, one for every
 * question in the 43 passages (31 real extracts from works out of UK copyright
 * and the site's twelve passages, each lengthened), all written anew, including
 * those for the 25 original questions kept; each gives why, a why-not for every
 * wrong option, more and a tip, and none states the answer to another question
 * in its passage. Written with AI and checked against each question, as the
 * founder decided (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 24 October 2026, every explanation against
 * its question and passage: 26 rewritten in part. Twenty-two because their
 * question changed (the bank's docblock, CHECKED): new why-nots for the 15
 * questions given new wrong options; whole entries for the five questions
 * with a new prompt, among them Eppie's weaving, which is new; the 'more' for
 * If's speaker, moved before the questions it hinted at; and the 'why' for
 * Wemmick's gun, which quoted his line without "said Wemmick" and no
 * ellipsis. Four because they told a later question in the same passage its
 * answer, which the page asks next: the honey bee's structure ("ends with how
 * to help bees", before the final paragraph's purpose), the storm's wait ("the
 * gap ... means you should shelter", before why the text begins by counting),
 * the frosty night's hour ("build tension ... while Utterson waits", before
 * the footstep's effect) and the tip on the Arctic traveller ("doubt, fear or
 * wonder", before what the letter form adds). Written with AI and checked
 * against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'The Last Bus: How many times had Mara checked her watch?': {
    why: "The first sentence says Mara 'checked her watch for the third time', so she has checked it three times. The exact words in the text answer the question.",
    not: {
      Once: "'For the third time' means this is her third check, not her first.",
      'Four times':
        "Four comes from 'four o'clock', when her phone died. It is not the number of checks.",
      'Eight times':
        "Eight comes from 'eight minutes ago', which is how late the bus is. It is not the number of checks.",
    },
    more: "Checking a watch again and again shows that Mara is anxious and impatient. A small, repeated action can tell you a lot about a character's feelings.",
    tip: 'In retrieval questions, watch out for numbers that appear elsewhere in the text. Check that the number you choose answers this question.',
  },
  'The Last Bus: Why could Mara not take a taxi?': {
    why: "The text says she 'had spent her last coins on a sandwich at lunch, so a taxi was out of the question'. If those were her last coins, she had no money left for a taxi.",
    not: {
      'She had promised to take the bus':
        'No promise is mentioned. She waits for the bus because she cannot pay for anything else.',
      'The taxi rank had closed early':
        'No taxi rank is mentioned. The reason the passage gives is money.',
      'No taxis came down that road':
        'Cars pass, but the text never says taxis could not come. The reason is that she had no money.',
    },
    more: "The word 'so' links a cause to its result: she spent her last coins, so a taxi was impossible. Connectives like 'so' and 'because' often point to the answer to a 'why' question.",
    tip: "For a 'why' question, find the sentence with 'so' or 'because' and check which part is the cause.",
  },
  "The Last Bus: What does 'the sky was turning the colour of cold tea' suggest about the evening?":
    {
      why: "Cold tea is a dull, muddy brown. Comparing the sky to it shows the light fading into a gloomy, brownish dusk, and 'cold' adds to the chill of Mara's long wait.",
      not: {
        'It is a warm and cosy summer night':
          "'Cold' and the dull brown of old tea are not cosy. The evening is chilly and gloomy.",
        'A storm is about to break overhead':
          'The road is wet, but no storm is described. The colour shows dusk falling.',
        'The sun is rising after a long night':
          'The bus is due at 17:40, in the evening. The sky is darkening, not brightening.',
      },
      more: "Writers often choose everyday comparisons that readers can picture at once. A colour like 'cold tea' is more vivid than simply saying 'brown'.",
      tip: 'To explain an image, describe what the comparison looks like, then the mood it creates.',
    },
  "The Last Bus: In the third paragraph, Mara's heart lifts and sinks again and again. How does this build tension?":
    {
      why: "Each time a light appears 'her heart lifted', and each time 'it sank again'. The repeated pattern of hope and disappointment makes the wait feel longer, and the reader waits anxiously with her.",
      not: {
        'It hurries the story on towards the bus':
          'The opposite: counting lamp posts, bricks and seconds slows time down. Each false alarm makes the wait feel longer, not shorter.',
        'It hints that someone is following her':
          'Nobody follows Mara. The lights belong to passing cars, and the tension comes from waiting, not from danger.',
        'It shows the street growing ever busier':
          "Only a few cars pass, and the paragraph is about Mara's hopes, not the traffic.",
      },
      more: 'Repeating a pattern, raising hope and then dashing it, is a common way to build suspense. The reader feels the strain of waiting along with the character.',
      tip: 'When a paragraph repeats a pattern, name the pattern, then explain what it makes the reader feel.',
    },
  "The Last Bus: Which detail best shows Mara's relief?": {
    why: "On the bus, Mara 'let out a breath she felt she had been holding for half an hour'. Breathing out after holding your breath is a sign that tension has ended: the long, worried wait is over.",
    not: {
      "'She pulled her sleeves down over her hands'":
        'This shows she is cold while waiting, not relieved.',
      "'She began to count the lamp posts'":
        'Counting things passes the time while she waits anxiously. It comes before the relief.',
      "'the driver nodded as if he had been expecting her'":
        "This shows the driver's calm, not Mara's own relief.",
    },
    more: 'Writers often show a feeling through the body rather than naming it. Breath, hands and posture can all reveal how a character feels.',
    tip: 'Choose the quotation that shows the feeling at the right moment. Relief comes after the wait, so look near the end.',
  },
  'The Honey Bee: How much honey does one bee make in its whole life?': {
    why: "The first sentence says a single honey bee produces 'only about a twelfth of a teaspoon of honey in its entire life'. 'Its entire life' matches 'its whole life' in the question.",
    not: {
      'About a quarter of a teaspoon':
        'A quarter is much more than the passage says. The figure is a twelfth of a teaspoon.',
      'About a teaspoon each week':
        "The passage gives one amount for a bee's whole life, and it is far less than a teaspoon.",
      'About half a jar in a summer':
        "A jar needs 'thousands of bees' visiting 'millions of flowers'. One bee makes only a tiny amount.",
    },
    more: "The word 'only' shows the writer wants us to be surprised by how little one bee makes, and so to value the work of the whole hive.",
    tip: "Questions often use different words from the text, such as 'whole life' for 'entire life'. Look for words with the same meaning.",
  },
  'The Honey Bee: What is the "waggle dance" used for?': {
    why: "The text says bees 'communicate the direction of food' with the waggle dance. The angle of the dance shows which way to fly, and the length of the waggle shows how far away the flowers are.",
    not: {
      'To warn the hive that wasps are near':
        'Wasps are not mentioned. The dance shares where food is.',
      'To choose which bee will be the queen':
        'The queen is not mentioned. The dance is about finding food.',
      'To keep the honey cells warm at night':
        'Fanning wings over the cells helps to make honey, but that is not the dance. The dance shows the way to food.',
    },
    more: 'This is a real discovery: in the twentieth century the scientist Karl von Frisch worked out what the dance means, and won a Nobel Prize for his work on bees.',
    tip: "When a phrase is in inverted commas, like 'waggle dance', the sentences around it usually explain it. Read them all.",
  },
  "The Honey Bee: What does 'Honey bees are only part of the story' mean here?": {
    why: "The sentence goes on: 'the United Kingdom is home to more than 250 kinds of bee'. Honey bees are just one kind among many, and the others, most of which live alone, matter as pollinators too.",
    not: {
      'Honey bees do less work than other bees':
        'The sentence is about how many kinds of bee there are, not how hard they work. Honey bees are one kind among more than 250.',
      'The facts about honey bees are unproven':
        "'Story' here means the whole picture, not a made-up tale. The writer is widening the topic, not doubting the facts.",
      'More facts about honey are still to come':
        'The words after the colon are about other kinds of bee, not more about honey.',
    },
    more: "Idioms like 'only part of the story' are common in non-fiction. They signal that the writer is widening the topic.",
    tip: 'When a phrase is followed by a colon, the words after it usually explain it.',
  },
  'The Honey Bee: How is the fact box organised?': {
    why: "It begins with one bee's honey and short, busy life, moves on to the hive and the waggle dance, and widens out to why bees matter for our food and what is happening to them. It goes from one bee to bees in general.",
    not: {
      'From the oldest facts to the newest discoveries':
        'No dates or discoveries are given. The order goes from one bee outwards.',
      'From the dangers bees face to how honey is sold':
        'Dangers come near the end, not the start, and selling honey is never mentioned.',
      "From one bee's story to a recipe that uses its honey":
        "There is no recipe. The fact box ends with bees in general, not with a use for one bee's honey.",
    },
    more: 'Information texts often move from the small and specific to the big and general. That order helps readers build up a picture step by step.',
    tip: 'To describe structure, say how the text begins, how it moves on, and how it ends.',
  },
  'The Honey Bee: What is the main purpose of the final paragraph?': {
    why: "It warns that many bees 'are struggling', then says that 'Planting even a small patch of wild flowers can give them somewhere to feed'. It encourages readers to do something to help.",
    not: {
      'To blame people for paving gardens':
        'Paved gardens are one reason bees struggle, but nobody is blamed. The paragraph ends by showing readers what they can do.',
      'To explain why meadows are vanishing':
        'The paragraph says meadows are disappearing but never explains why. Its last sentence tells readers how to help.',
      'To warn that bees will die out':
        "It says bees 'are struggling', not that they will die out, and it ends on a hopeful step readers can take.",
    },
    more: 'Many information texts end with something the reader can do. A simple, achievable step, like a patch of flowers, makes readers more likely to act.',
    tip: "To find a paragraph's purpose, ask what it wants the reader to think, feel or do.",
  },
  'Repotting a Plant: When should you water the plant before starting?': {
    why: "The text says to 'water the plant lightly an hour ahead so the soil holds together'. 'An hour ahead' means an hour before you begin.",
    not: {
      'A week before you start': 'A week is far too early. The text says an hour ahead.',
      'Just before you tip it out':
        "Tipping the plant out comes later, once the newspaper and the new pot are ready. The watering comes 'an hour ahead', before you begin.",
      'The night before you start': 'The text says an hour ahead, not the night before.',
    },
    more: "Watering first helps the soil 'hold together', so the plant comes out of its old pot in one piece.",
    tip: 'Check whether a question asks about before, during or after a task. Instructions often mention the same action more than once.',
  },
  'Repotting a Plant: Why should the new pot be only one size larger?': {
    why: "The text warns that 'a pot that is too big can lead to soggy roots, because the extra compost holds water that the roots cannot yet reach'. Wet, unused compost makes the roots soggy.",
    not: {
      'A bigger pot would be too heavy to move':
        'Weight is never mentioned. The reason given is soggy roots.',
      'Larger pots let in too much strong sunlight':
        'Sunlight is mentioned only later, about where to keep the plant. It is not the reason for the pot size.',
      'The plant would grow far too tall too fast':
        'Height is not mentioned. The problem with a big pot is soggy roots.',
    },
    more: "Instructions often give a reason after a semicolon or 'because'. Reasons help readers follow a rule even in a situation the writer did not mention.",
    tip: "In a 'why' question about instructions, look for 'because', 'so' or 'as' near the instruction.",
  },
  'Repotting a Plant: What can you infer about the plant’s roots before repotting?': {
    why: "The text tells you to 'loosen the tangled roots with your fingers', and says roots may be 'poking out of the drainage holes'. The roots have run out of room and are tangled and cramped.",
    not: {
      'They are dry, brown and dead':
        'The plant is alive and needs more room. Nothing says its roots are dead.',
      'They have been cut back short':
        'Nobody cuts the roots. They are long enough to be tangled and to poke out of the holes.',
      'They are floating in water':
        "Water 'runs straight through', which suggests a pot packed with roots, not roots floating in water.",
    },
    more: 'An inference puts clues together. Here two clues, tangled roots and roots poking out of the holes, point to a plant that has outgrown its pot.',
    tip: 'For an inference, name at least one clue from the text and say what it suggests.',
  },
  'Repotting a Plant: Why does the writer begin with signs that a plant needs repotting, before listing what you need?':
    {
      why: "The opening asks, 'How do you know when a houseplant needs a new home?' and gives signs to check. Readers can make sure the job is needed before they gather anything or start.",
      not: {
        'To show that every plant must be repotted':
          'The signs help you tell whether a plant needs it. Not every plant does.',
        'To warn readers that repotting is risky':
          'The opening gives signs to look for, not dangers. The warning about pots that are too big comes later.',
        'So readers will buy a bigger pot first':
          'Buying comes after deciding. The signs come first so that readers check whether the plant needs a new pot at all.',
      },
      more: 'Good instructions follow the order in which a reader will act: decide, prepare, do, then look after. Starting with a question also draws the reader in.',
      tip: 'In a structure answer about instructions, explain how the order matches what the reader needs to do first.',
    },
  "Repotting a Plant: Why does the writer add 'Do not be alarmed if it droops a little at first'?":
    {
      why: "A reader seeing a droopy plant might think they had harmed it. The writer explains that it 'is getting used to its new home', reassuring readers that a little drooping is usual.",
      not: {
        'To tell readers to repot it all over again':
          'Nothing suggests repotting again. The advice is to wait while it settles.',
        'To admit the instructions might be wrong':
          "The writer is confident: drooping is part of the plant 'getting used to its new home'.",
        'To warn that the plant has probably died':
          'The opposite: the writer says not to be alarmed, because the plant is settling in.',
      },
      more: "Instructions sometimes predict a reader's worries and answer them in advance. This makes the writer sound experienced and trustworthy.",
      tip: "When a writer speaks directly to the reader's feelings, ask what worry they are trying to prevent.",
    },
  'My First Coding Club: What did the leader hand the writer?': {
    why: "The text says, 'the leader handed me a sticky note'. It was for writing down anything that confused them.",
    not: {
      'A library card':
        "The club's poster is in the library, but nothing is handed over there. The leader gives a sticky note.",
      'A coding manual': 'No manual appears. The leader hands over a sticky note.',
      'A poster':
        'The poster advertised the club in the library. The leader hands over a sticky note.',
    },
    more: 'The sticky note matters: it shows that questions are expected and welcome at the club.',
    tip: 'Retrieval questions often offer things that appear elsewhere in the text. Check that your answer matches the exact action asked about.',
  },
  'My First Coding Club: Why did the writer almost not go?': {
    why: "The writer says, 'I imagined a room full of experts who would laugh at my questions.' Fear of being laughed at nearly kept them away.",
    not: {
      'They had to return books to the library':
        "It is the writer's sister who returns books, and she is the one who pushes them through the door.",
      'They did not know where the club met':
        "They knew where it was: they 'walked past the door twice'.",
      'They had no computer of their own':
        'Computers are not mentioned as a problem. The fear was of being laughed at.',
    },
    more: "The writer's fear is about what they imagined, not what happened. Many personal blogs are built on a gap between fear and reality.",
    tip: "For a 'why' question about a feeling, quote the words where the writer explains it, such as 'I imagined...'.",
  },
  "My First Coding Club: What does 'the board was yellow with notes' suggest?": {
    why: "Everyone was invited to stick up questions, and by the end the board was covered in yellow notes, with 'only a few of them' the writer's. Many people had questions, so the writer was not the only beginner.",
    not: {
      'The board had been painted a bright shade of yellow':
        'The yellow comes from the sticky notes covering it, not from paint.',
      'Nobody had asked a single question all night':
        "A board 'yellow with notes' means many questions, the opposite of none.",
      'The writer had covered it with questions':
        "Only a few of the notes were the writer's own. Most came from other people.",
    },
    more: 'Writers often show rather than tell. Instead of saying that everyone else was confused too, the blog lets a board full of notes make the point.',
    tip: 'When a description seems simple, ask what it reveals. Here a colour tells us about the number of questions.',
  },
  "My First Coding Club: Why does the writer end with 'It was walking through the door'?": {
    why: "The writer says 'the hardest part of coding was not the code'. Ending with walking through the door links back to walking past it twice: the real challenge was nerves, not the coding itself.",
    not: {
      'The writer will not go back next week':
        "They walked home 'already planning what to build next week'.",
      'Coding is too hard for most to learn':
        'The writer makes a cat glide across the screen, and says the code was not the hardest part.',
      'The door to the club was very hard to open':
        'The door is not hard to open. The writer means it was hard to find the courage to go in.',
    },
    more: 'Ending by echoing the opening is called a circular structure. It ties a piece together and shows how far the writer has come.',
    tip: 'If the last line echoes the first paragraph, mention both and explain what has changed in between.',
  },
  'My First Coding Club: Which detail best shows that the club makes beginners feel welcome?': {
    why: "'But nobody laughed, not once' answers the writer's first fear directly. Nobody mocked their questions, which shows how welcoming the club is.",
    not: {
      "'Loops still make my head spin'":
        'This shows the writer still finds some coding hard, not how the club treats beginners.',
      "'my cat refused to do anything at all'":
        "This is about the writer's program not working at first, not about the club's welcome.",
      "'I walked past the door twice'":
        "This shows the writer's nerves before going in, not how they were welcomed.",
    },
    more: "'Not once' adds emphasis. Short, stressed phrases like this help a writer underline the point that matters most.",
    tip: 'Choose evidence that matches the claim exactly: here, how other people treated a beginner.',
  },
  'The Locked Drawer: Where was the brass key hidden?': {
    why: "The narrator 'found the small brass key hidden under a pot of pencils'. It was hidden in plain sight.",
    not: {
      "In Dad's coat pocket":
        "Dad's coat is mentioned only when he comes home dripping. The key was under the pot of pencils.",
      'Behind the study door':
        'The study door is where Dad stands at the end. The key was under a pot of pencils.',
      'Inside a football boot':
        'Football is mentioned, but not boots. The key was under a pot of pencils.',
    },
    more: 'Hiding a key under an everyday object is a common detail in stories. It suggests Dad did not expect anyone to look very hard.',
    tip: 'When several places are named in a passage, find the one linked to the exact object in the question.',
  },
  'The Locked Drawer: What was actually inside the drawer?': {
    why: "'Inside there were no jewels or secrets, only a faded photograph of a boy who looked exactly like me.' The drawer holds an old photograph.",
    not: {
      'A treasure map': "The narrator 'privately hoped for treasure maps', but there were none.",
      'A muddy trophy':
        'The trophy is in the photograph, held by the boy. It is not in the drawer.',
      'A bundle of money':
        "The narrator's sister guessed money. The drawer held only a photograph.",
    },
    more: "'Actually' in the question hints that the truth differs from what people expected. The passage builds up guesses before revealing something ordinary.",
    tip: "Watch for options that come from characters' guesses. A guess is not what the text says is really there.",
  },
  'The Locked Drawer: Why was the narrator so curious about the drawer?': {
    why: "Dad 'had told us never to touch the bottom drawer of his desk, so of course it was all I could think about'. Being told not to touch it is exactly what made the drawer so tempting.",
    not: {
      'It made a strange noise at night':
        'The drawer only groans when it is opened. The curiosity came from being forbidden.',
      'Their sister had said it was empty': "The sister said it was 'full of money', not empty.",
      'A friend had dared them to open it':
        'The friend only guessed what was inside. Nobody dared the narrator.',
    },
    more: "'Of course' shows the narrator expects readers to understand: being forbidden to do something often makes us want to do it more.",
    tip: "Look for 'so' in a sentence: here it links Dad's rule to the narrator's curiosity.",
  },
  "The Locked Drawer: Why does the writer give 'Michael is my dad's name.' a paragraph of its own?":
    {
      why: 'The line reveals that the boy in the photograph is Dad as a child. Setting it alone, in a paragraph of one sentence, makes the reader pause at the surprise, just as the narrator does.',
      not: {
        "It shows the narrator had forgotten Dad's name":
          'The narrator knows the name, which is why the writing on the back is such a surprise.',
        'It starts a new part of the story, years later':
          "The story carries straight on: the narrator is 'still staring at it' when Dad comes home.",
        'It explains why Dad was angry about the drawer':
          'Dad is not angry, and this line does not explain his rule. It reveals who the boy is.',
      },
      more: 'A one-sentence paragraph is a strong tool for a reveal. The space around it gives the reader time to take it in.',
      tip: 'When a paragraph is very short, explain what it reveals and why the writer wants you to stop on it.',
    },
  'The Locked Drawer: Which detail best shows that Dad is not angry about the drawer?': {
    why: "Instead of shouting, Dad 'sat down on the edge of the desk and smiled in a way I had never seen before'. A new kind of smile shows that the photograph has brought back happy memories, not anger.",
    not: {
      "'looked at the open drawer'":
        'Looking at the drawer shows he has noticed, but not how he feels.',
      "'Dad stood in the doorway of the study with his coat dripping'":
        'This shows that he has just come in from the rain. It says nothing about his mood.',
      "'I waited for the shouting'":
        'This shows what the narrator expected, not how Dad actually feels.',
    },
    more: 'Stories often set up an expectation, here shouting, and then overturn it. The surprise makes the ending warmer.',
    tip: "Separate what a narrator expects from what actually happens. The evidence for a character's feelings is in what they do.",
  },
  'Volcanoes: What is melted rock called once it reaches the surface?': {
    why: "The passage says, 'Melted rock below the ground is called magma; once it reaches the surface it is called lava.' The name changes when it comes out.",
    not: {
      Magma:
        'Magma is melted rock below the ground. Once it reaches the surface it has another name.',
      Ash: 'Ash is hurled into the sky in explosive eruptions. It is not melted rock on the surface.',
      Pumice:
        'Pumice is a light rock formed when frothy molten rock cools. It is not the name of the melted rock itself.',
    },
    more: 'Science texts often give two names for one thing in different places. Here a semicolon separates the two halves of the definition.',
    tip: 'When a definition has two parts, check which part the question asks about: below the ground or at the surface.',
  },
  'Volcanoes: Why is the area around the Pacific Ocean called the Ring of Fire?': {
    why: "The passage says, 'So many volcanoes surround the Pacific Ocean that the area is known as the Ring of Fire.' The volcanoes form a ring around the ocean.",
    not: {
      'Clouds of ash hang high above it':
        'Ash is hurled into the sky by explosive eruptions, but that is not where the name comes from. It comes from the ring of volcanoes.',
      'The sun sets there in a ring of red':
        'Sunsets are not mentioned. The ring is made of volcanoes.',
      'Hot lava flows across its sea floor':
        'The passage never says lava covers the Pacific floor. The name comes from the volcanoes around it.',
    },
    more: 'The Ring of Fire also has many earthquakes, because the edges of tectonic plates meet there.',
    tip: "Look for 'so ... that' in a sentence: it links a cause to its result, as in 'so many volcanoes ... that'.",
  },
  "Volcanoes: What does 'dormant' mean, as the passage uses it?": {
    why: "The passage says, 'A dormant volcano is quiet for now but may wake.' Dormant means sleeping: not erupting at the moment, but still able to erupt again.",
    not: {
      'Never expected to erupt again at all': 'That describes an extinct volcano, the third group.',
      'Erupting almost all of the time':
        'A volcano that erupts often is active. A dormant one is quiet for now.',
      'Too small to do any harm at all':
        'Size is not part of the definition. A dormant volcano may wake and erupt.',
    },
    more: "'Dormant' comes from a Latin word meaning to sleep, the same root as 'dormitory'. Knowing a word's root can help you work out its meaning.",
    tip: 'In a passage that sorts things into groups, use the definition of each group to tell close words apart.',
  },
  "Volcanoes: Why do volcanologists watch for 'ground that bulges upwards'?": {
    why: "The passage lists warning signs, including 'ground that bulges upwards', which 'can all suggest that magma is on the move'. Rising magma pushes the ground up, so a bulge can warn of an eruption.",
    not: {
      'It shows that the volcano is now extinct':
        'An extinct volcano is not expected to erupt. A bulge is a warning sign that one may.',
      'It means the soil is good for farming':
        'Farming is not mentioned. The bulge is a warning sign.',
      'It shows that an earthquake has ended':
        'Small earthquakes are another warning sign, but a bulge does not mean one has ended.',
    },
    more: 'Scientists measure tiny changes in the shape of the ground, sometimes from satellites, to spot magma rising long before an eruption.',
    tip: "When a text lists signs or causes, link each one to what it shows, using the text's own summary.",
  },
  "Volcanoes: How does the third paragraph develop the idea that 'Not all volcanoes erupt violently'?":
    {
      why: "It begins with a gentle example, Kilauea, which 'erupted almost without a break from 1983 to 2018', then contrasts volcanoes that 'trap gas until the pressure becomes too great and they explode'. Example first, then contrast.",
      not: {
        'A warning, then advice on staying safe':
          'The paragraph gives no warning or advice. It explains how eruptions differ.',
        'A list of eruptions from oldest to newest':
          'Only one span of dates is given, for one volcano. It is an example, not a list.',
        'An explosive example, then a gentle contrast':
          "The order is the other way round: Kilauea's slow, steady lava comes first, and the explosive kind follows with 'Others'.",
      },
      more: 'Topic sentence, example, contrast is a common pattern in information writing. Spotting it helps you explain how a paragraph is built.',
      tip: 'In a structure answer, name the job of each part: the claim, the example and the contrast.',
    },
  'Making a Paper Aeroplane: In step 1, what should you do straight after folding the paper in half?':
    {
      why: "Step 1 says to fold the paper in half lengthways, 'then open it out again so a crease remains'. The crease becomes the centre line for the next folds.",
      not: {
        'Fold the wings down':
          'The wings come at step 5, after more folds. In step 1 the very next action is to open the paper out again.',
        'Turn it over': 'Turning over is not mentioned. You open it out again.',
        'Tear it along the crease': 'Nothing is torn. The crease is used as a guide.',
      },
      more: "The first crease is a guide line: the next two steps fold corners and edges 'to the centre line'. Early steps in instructions often prepare for later ones.",
      tip: "Words like 'straight after' and 'then' tell you to look at the very next action, not a later one.",
    },
  'Making a Paper Aeroplane: Why must both sides be kept even?': {
    why: "Step 5 says to fold the wings 'keeping both sides even so the plane flies straight'. Even wings balance the plane.",
    not: {
      'So the point stays very sharp':
        'The point is made in steps 2 and 3. Keeping the wings even is about flying straight.',
      'So it can be thrown harder':
        'The text warns against throwing harder: a gentle, level throw is best.',
      'So the wings can bend up later':
        'Bending the wings comes later, as a fix for diving. Even sides are about flying straight.',
    },
    more: 'If one wing is bigger, it creates more lift on that side, and the plane turns or rolls. Balance is the key to a straight flight.',
    tip: "In instructions, 'so' often introduces the reason for a step. Quote it when a question asks why.",
  },
  'Making a Paper Aeroplane: Your plane keeps diving nose first. What should you change?': {
    why: "The text says, 'If your plane dives nose first, bend the back edges of both wings up very slightly.' That small change lifts the nose.",
    not: {
      "Bend the wings' back edges down":
        'Bending them down fixes a plane that climbs steeply and then drops, the opposite problem.',
      'Throw it harder and higher':
        "A hard throw 'usually sends a paper plane into a loop or straight into the floor'.",
      'Fold the point longer and thinner': 'That is a folding step, not the fix for diving.',
    },
    more: "These small bends work like the moving flaps on a real aeroplane's tail, which pilots use to point the nose up or down.",
    tip: 'When instructions give fixes for problems, match the problem in the question to the right fix. Two fixes may sound alike.',
  },
  "Making a Paper Aeroplane: Why do so many sentences begin with verbs such as 'Take', 'Fold' and 'Hold'?":
    {
      why: "Verbs like 'Take', 'Fold' and 'Hold' are imperatives, or commands. Starting with them tells the reader exactly what to do at each step, which is what instructions are for.",
      not: {
        'They describe what the writer once did':
          'The verbs are not in the past tense, and they give orders to the reader. They are commands, not a story.',
        'They are questions for the reader':
          'None of these sentences is a question. They tell the reader what to do.',
        'They list the materials you will need':
          'The materials come in the first paragraph. These verbs give the steps.',
      },
      more: "Imperative verbs, numbered steps and time words like 'Finally' are the main features of instructions. Spotting them helps you name a text's type.",
      tip: "To identify an imperative, look for a verb at the start of a sentence with no 'I', 'he' or 'she' before it.",
    },
  'Making a Paper Aeroplane: Why are the folding steps numbered, but the advice after them is not?':
    {
      why: 'The folds must be done in a fixed order, so they are numbered 1 to 5. The advice after them, about throwing and fixing a plane, is used only when needed, so it has no fixed order.',
      not: {
        'The writer simply forgot to number the last part':
          'The difference is deliberate: the steps have an order, and the advice does not.',
        'The tips matter more than the folds do':
          'Numbers show order, not importance. Both parts matter.',
        'The numbers show how long each step takes':
          'No times are given for the steps. The numbers show the order.',
      },
      more: 'Good instructions match their layout to how they will be used. Numbers help a reader keep their place while their hands are busy.',
      tip: 'When a text changes its layout halfway through, ask why. The change usually marks a change of purpose.',
    },
  'Why I Switched Off Notifications: Where did the writer leave their phone while reading?': {
    why: "The writer 'turned every notification off and left the phone in another room while I read'.",
    not: {
      'Inside their pocket':
        'Their hand drifted towards their pocket out of habit, but the phone was not there. It was in another room.',
      'Beside their book':
        'The book is what they read while the phone was away. The phone was in another room.',
      'With their family':
        'The family appear only in the memory of watching a film. The phone was left in another room.',
    },
    more: 'Putting the phone out of reach is the key part of the experiment: the writer could not check it without getting up.',
    tip: "Retrieval answers are usually stated plainly. Find the sentence with the same action as the question, here 'left the phone'.",
  },
  'Why I Switched Off Notifications: What does "kept reaching for a phone that was not there" suggest?':
    {
      why: 'The writer reached for the phone even though it had been put away. Reaching without thinking shows how deep the habit of checking had become, and how hard it is to break.',
      not: {
        'The writer had lost the phone somewhere':
          'The phone was not lost; the writer had put it away on purpose.',
        'The phone had been broken over the weekend':
          'Nothing says the phone was broken. It was simply out of reach.',
        'The writer was expecting an important call':
          "The writer later finds 'nothing that could not have waited'. The reaching was a habit, not a wait for a call.",
      },
      more: "Habits are actions we repeat without thinking. A hand that moves 'as if it had a mind of its own' shows how automatic the habit is.",
      tip: 'For an inference about an action, ask why someone would do it for no reason. The answer is often a habit or a strong feeling.',
    },
  "Why I Switched Off Notifications: What does the comparison to 'the moment after a washing machine stops spinning' suggest?":
    {
      why: 'When a washing machine stops, you suddenly notice how loud it was. The writer means the same about the phone: only when the constant buzzing stopped did they realise how noisy and distracting it had been.',
      not: {
        'The writer missed the buzzing of the phone':
          'The writer does not miss it. The quiet is a relief.',
        'The writer did the washing on Sunday evening':
          'The washing machine is a comparison, not something that happened.',
        "The writer's head was still spinning with dizziness":
          'The spinning belongs to the machine in the comparison. The writer feels calm.',
      },
      more: 'Comparisons from everyday life make a feeling easy to share. Most readers know that sudden quiet after a machine stops.',
      tip: "Explain a comparison by saying what the reader recognises from life, then how it matches the writer's experience.",
    },
  'Why I Switched Off Notifications: Why does the writer describe watching a film and not knowing how it ended?':
    {
      why: "Not knowing how a film ended shows how much the phone was stealing the writer's attention. The very next words, 'So last weekend I tried an experiment', show that this was the problem that led to the change.",
      not: {
        'It recommends a good film for families to watch':
          'The film is not named or praised. The point is that the writer missed it.',
        'It proves the film was much too long':
          'The length of the film is not mentioned. The problem was the phone.',
        'It explains how to use a phone well':
          'That comes at the end. The film shows the problem, not the solution.',
      },
      more: 'Blogs often start with a moment that made the writer change. A specific memory is more convincing than a general complaint.',
      tip: "In a structure answer, link a paragraph to what follows it. 'So' at the start of the next paragraph is a strong clue.",
    },
  "Why I Switched Off Notifications: What is the writer's final view of phones?": {
    why: "The writer has 'not given up my phone' and thinks nobody needs to, but keeps only notifications 'from people, not from apps'. Phones are fine, they suggest, as long as you choose when to look.",
    not: {
      'Everyone should give up phones completely':
        "The writer says the opposite: 'I do not think anyone needs to.'",
      'Notifications from people are the worst':
        'Those are the ones the writer turns back on. The ones from apps stay off.',
      'Apps matter more than people do':
        'The writer chooses people over apps, keeping only notifications from people.',
    },
    more: "A balanced ending, neither 'phones are terrible' nor 'phones are fine', makes the writer seem fair and thoughtful. Readers trust a writer who avoids extremes.",
    tip: "For a writer's final view, read the last paragraph closely and quote the sentence that sums it up.",
  },
  'The Marble Race: What did Tomas build the track from?': {
    why: "The first sentence says Tomas built it 'out of cardboard tubes taped along the staircase', and the next sentence lists toilet-roll and kitchen-roll tubes.",
    not: {
      'The stair banisters':
        "The tubes are 'taped along the staircase', but the track itself is made of cardboard tubes, not the banisters.",
      'Plastic cups':
        'A cup waits at the end to catch the marble, but the track is made of cardboard tubes.',
      'Sofa cushions':
        'The marble rolls under the sofa on the first try, but the track is made of cardboard tubes.',
    },
    more: "The list of materials, down to 'most of a roll of tape', shows how much effort Tomas has put in, which makes the ending more satisfying.",
    tip: 'When a passage gives a list, the first sentence often sums it up. Use that summary for a retrieval answer.',
  },
  'The Marble Race: How did Ana feel about the track at first?': {
    why: "The text says Ana 'doubted it would work and folded her arms'. To doubt something is to feel unsure that it will work.",
    not: {
      Excited:
        'She folds her arms and says marbles cannot go upside down. That is doubt, not excitement.',
      Frightened: 'Nothing frightens her. She simply does not believe the track will work.',
      Proud: "It is Tomas's track, not hers, and she doubts it.",
    },
    more: 'Folded arms are a classic sign of doubt or stubbornness. The writer lets body language show her feelings.',
    tip: "When the text uses a verb like 'doubted', turn it into the matching adjective to answer a question about feelings.",
  },
  "The Marble Race: Why is Ana's silence after the second failure 'worse than laughing'?": {
    why: "After the marble sticks, 'Ana said nothing'. Laughing would be teasing, but silence seems to say she expected it to fail all along, which feels worse to Tomas.",
    not: {
      'It shows she is too upset to speak':
        'Nothing suggests she is upset. Her silence seems knowing, as if she had expected this all along.',
      'It means she was not watching at all':
        'She is sitting on the bottom step where the track ends. Her silence is a judgement, not a sign that she missed it.',
      'It shows she wants to help him fix it':
        'She offers no help and says nothing. Her silence is a comment on the failure, not an offer.',
    },
    more: "Silence can say as much as words. Stories often use a character's silence to show judgement, disappointment or tension.",
    tip: 'When a character says nothing, ask what their silence means to the other characters.',
  },
  'The Marble Race: Why does the writer show two failed tries before the success?': {
    why: "On the first try the marble 'vanished under the sofa'; on the second it got 'wedged'. Each failure raises the stakes, so when the marble finally lands 'straight into the waiting cup', the success feels earned and satisfying.",
    not: {
      'They prove that Ana was right all along':
        'Ana doubted the track, but the third try works perfectly. The failures make that success matter more.',
      'They show that Tomas should give up':
        'Tomas fixes the joint and tries again. The failures show his persistence, not a reason to stop.',
      'They explain how the track was built':
        'How the track was built comes in the first paragraph. The failed tries are about testing it.',
    },
    more: 'Failure before success is one of the oldest patterns in storytelling. Readers enjoy a win more when they have seen how hard it was.',
    tip: 'In a structure answer, explain how earlier events make a later one more powerful.',
  },
  'The Marble Race: Which detail best shows that Ana has changed her mind about the track?': {
    why: "At the end Ana says, 'Again,' and, 'And this time I want to let it go.' Wanting a turn herself shows that she now believes in the track and is excited by it.",
    not: {
      "'marbles cannot go upside down'":
        'This is what Ana says at the start, before the track has worked.',
      "'She sat on the bottom step in her pyjamas'":
        'This describes where Ana is, not a change of mind.',
      "'For a moment neither of them moved'":
        'This shows a pause of surprise, but not yet that Ana has changed her mind.',
    },
    more: "The story ends with Ana's own words rather than a description. Letting a character speak at the end can show a change more strongly than the narrator could.",
    tip: 'To show a character has changed, compare what they say or do at the start with what they say or do at the end.',
  },
  'The River Nile: In which direction does the Nile flow?': {
    why: "The first sentence says the Nile 'flows northwards through north-eastern Africa', ending in the Mediterranean Sea.",
    not: {
      Southwards: 'The passage says northwards. The river ends in the Mediterranean, to the north.',
      Eastwards: "'North-eastern Africa' tells us where the river is, not which way it flows.",
      Westwards: 'The passage says the river flows northwards.',
    },
    more: 'Many people expect rivers to flow south, because maps put north at the top. The Nile flows north, to the sea.',
    tip: "Read compound words like 'north-eastern' carefully: they often describe a place, while words ending in '-wards' describe a direction.",
  },
  'The River Nile: Where do the White Nile and the Blue Nile meet?': {
    why: "The passage says, 'The two meet at Khartoum, in Sudan, and travel on together through the desert to Egypt.'",
    not: {
      'At the Mediterranean Sea':
        'The Mediterranean is where the Nile ends. The two branches meet long before, at Khartoum.',
      'In the highlands of Ethiopia':
        'That is where the Blue Nile rises, not where it meets the White Nile.',
      'At Aswan, in Egypt':
        'Aswan is where the High Dam was built, further north. The rivers meet at Khartoum.',
    },
    more: 'Khartoum, the capital of Sudan, stands at the point where the two rivers join.',
    tip: 'Questions about places often offer other places from the passage. Match each place to what happens there.',
  },
  "The River Nile: Why did the ancient Egyptians call their country 'the black land'?": {
    why: "The passage says they called it Kemet, 'the black land', 'after this soil': the rich, dark mud left by the yearly floods. The name celebrates the fertile soil that made farming possible.",
    not: {
      'Their skies were often dark with storms':
        'Storms are not mentioned. The name comes from the soil.',
      'Their temples were built of black stone':
        'No temples are mentioned. The name comes from the dark soil.',
      'The desert sand there was black':
        "The desert was called 'the red land'. The black land was the soil by the river.",
    },
    more: 'The contrast between black land and red land shows how the Egyptians saw their world: fertile river banks against empty desert.',
    tip: "Inference questions often need two sentences joined together. Here 'after this soil' points back to the sentence before.",
  },
  'The River Nile: Why did many ancient towns grow up near the Nile?': {
    why: "The river gave them farmland, watered and enriched by its floods, in an 'otherwise dry land'. It was also 'their road as well as their farm': boats carried 'grain, stone and people'. Food, water and transport drew people to it.",
    not: {
      'It was the only place with flat ground':
        'Flat ground is not mentioned. The river gave food, water and transport.',
      'It kept enemies away with its floods':
        'The floods watered the fields; nothing says they kept enemies away.',
      'Its banks were cooler than the coast':
        'Temperature is not mentioned. The reasons are farming, water and travel.',
    },
    more: "Rivers have drawn people for thousands of years. Many of the world's oldest cities stand on rivers for the same reasons.",
    tip: "For a 'why' question, gather every reason the passage gives. A good answer combines them.",
  },
  'The River Nile: Which detail best shows that the Aswan High Dam brought problems as well as benefits?':
    {
      why: "After the dam's benefits, the passage adds that 'It also trapped the rich mud behind it, so farmers now rely on fertilisers instead.' 'Also' introduces a cost: the mud that once fed the fields no longer reaches them.",
      not: {
        "'stored water for dry years'": 'Storing water is a benefit, not a problem.',
        "'produced electricity'": 'Electricity is a benefit, not a problem.',
        "'In 1970 the Aswan High Dam was completed'":
          'This gives the date. It shows neither a benefit nor a problem.',
      },
      more: "Balanced writing gives both sides of a change. Words like 'also', 'however' and 'but' often mark where the other side begins.",
      tip: 'For a question about problems and benefits, sort each option into one group before choosing.',
    },
  'Staying Safe in a Storm: How long should you wait after the last thunder?': {
    why: "The text says, 'Wait until at least thirty minutes after the last thunder before going back outside.'",
    not: {
      'Until the rain has stopped':
        "Lightning can strike 'even when the rain has stopped', so the rain is not a safe guide.",
      'Until you see blue sky':
        'Blue sky is not mentioned. The rule is a set time after the last thunder.',
      'At least thirty seconds':
        'Thirty seconds belongs to the counting rule, the gap between a flash and its thunder. The wait after the last thunder is measured in minutes.',
    },
    more: 'The two thirties are easy to muddle: one counts the seconds between a flash and its thunder, the other the minutes after the last thunder.',
    tip: 'When two numbers in a text use the same figure, check the units: seconds and minutes are very different.',
  },
  'Staying Safe in a Storm: Why does the text say to avoid using taps?': {
    why: "The text says to avoid taps 'since pipes can carry an electrical charge'. If lightning strikes a building, the charge can travel through metal pipes and the water in them.",
    not: {
      'The water may have been made dirty':
        'Dirty water is not mentioned. The danger is electricity.',
      'Storms make the water pressure drop':
        'Water pressure is not mentioned. The danger is electricity in the pipes.',
      'Running water attracts the lightning':
        'Water does not attract lightning; the risk is that pipes can carry the charge.',
    },
    more: 'The same reason explains the advice about baths and showers. Understanding a reason lets you apply it to new situations.',
    tip: "Look for 'since', 'as' or 'because' after an instruction. The reason follows it.",
  },
  'Staying Safe in a Storm: You count fifteen seconds between a flash and its thunder. About how far away is the storm?':
    {
      why: "Sound travels 'about a kilometre every three seconds'. Fifteen seconds divided by three is five, so the storm is about five kilometres away.",
      not: {
        'Fifteen kilometres':
          'That counts one kilometre per second. Sound takes three seconds to travel a kilometre.',
        'Three kilometres':
          "Three kilometres is the passage's example for nine seconds. Fifteen seconds is further.",
        'Half a kilometre':
          'Half a kilometre would take under two seconds. Fifteen seconds means much further.',
      },
      more: 'You see lightning almost at once because light is extremely fast, but sound is much slower. The gap between them tells you the distance.',
      tip: 'When a text gives a rule with an example, apply the rule, not the example. Check your answer by working backwards.',
    },
  'Staying Safe in a Storm: Why is a car with a metal roof safe in a storm, when a tent is not?': {
    why: "The text explains that in a car with a metal roof, 'the charge travels around the outside of the metal and down into the ground'. The metal shell carries the lightning round the people inside; a tent has no metal shell to do that.",
    not: {
      'Tents are usually put up on high ground':
        'Where tents stand is not the point. A tent has no metal shell to carry the charge.',
      'A car is heavy, so lightning cannot move it':
        'Weight is not the reason. The metal shell carries the charge around the outside.',
      'The rubber tyres stop electricity reaching you':
        'Many people believe this, but the text gives the real reason: the metal carries the charge.',
    },
    more: 'A metal box that carries electricity round its outside is sometimes called a Faraday cage, after the scientist Michael Faraday.',
    tip: 'When a common belief is offered as an option, check it against the text. A science text often corrects a popular mistake.',
  },
  'Staying Safe in a Storm: Why does the text begin by explaining how to judge how far away a storm is?':
    {
      why: "Counting the gap between flash and thunder tells you when a storm is close enough to be dangerous: 'If the gap is shorter than thirty seconds, it is time to take shelter.' It comes first because it tells you when to act on the rest.",
      not: {
        'So you know how long the storm will last':
          'Counting the gap tells you how far away the storm is, not how long it will last. The point is knowing when to shelter.',
        'To prove that every storm is far away':
          'Counting can show that a storm is close, which is exactly when you need to shelter.',
        'To show that UK thunderstorms are rare':
          "The text says storms are 'usually short', not rare. The counting tells you when to shelter.",
      },
      more: 'Safety texts are often ordered by time: first spot the danger, then act, then wait until it has passed. The order matches what you will need to do.',
      tip: 'In a structure answer about information texts, explain why the first section has to come before the others.',
    },
  'Learning to Cook: What happened during the first pasta attempt?': {
    why: "The writer says, 'My first attempt at pasta ended with a smoke alarm and a very hard lump in the pan.'",
    not: {
      'The pasta came out soggy': "The opposite: it ended as 'a very hard lump'.",
      'The cooker would not light':
        "The cooker worked; the water 'boiled away' while the writer was busy.",
      'The pan cracked in two':
        "The pasta was 'welded to the bottom' of the pan, but the pan did not crack.",
    },
    more: "The writer makes the disaster funny through exaggeration: the pasta is 'welded' to the pan, as if by a metalworker.",
    tip: "Look for the sentence that begins with the event in the question, here 'My first attempt at pasta'.",
  },
  'Learning to Cook: What did the writer do to improve?': {
    why: "The writer 'watched my grandmother carefully the next time I visited and wrote down every step'. Watching and taking notes is how they learnt.",
    not: {
      'Followed the times printed on the packet':
        "The grandmother tested a piece 'instead of trusting the time on the packet'.",
      'Took a cookery class at a local college':
        'No class is mentioned. The writer learnt from their grandmother.',
      'Watched cooking videos every evening':
        'No videos are mentioned. The writer watched their grandmother in person.',
    },
    more: "'Rather than giving up' shows determination. The writer turns a failure into a reason to learn.",
    tip: "Put the text's words into the option's words: 'wrote down every step' means 'took notes'.",
  },
  'Learning to Cook: What can you infer from "nobody guessed it was only my fifth attempt"?': {
    why: 'The meal was so good that the friends assumed the writer was an experienced cook. From a burnt lump to a meal nobody could fault in five tries, the writer had improved enormously.',
    not: {
      'The friends had cooked the meal themselves':
        "The writer 'cooked a meal for friends'. The friends were guests.",
      'The friends did not like the meal':
        "One friend 'asked for the recipe', which shows they liked it.",
      'The writer cooks for friends every day':
        "It was only the 'fifth attempt', so the writer had not cooked often.",
    },
    more: 'Inference means working out what the text does not say outright. Here the writer leaves us to see how much they have improved.',
    tip: 'For an inference, explain what the detail suggests, then support it with another detail from the text.',
  },
  "Learning to Cook: What does Grandmother's advice to stir the pasta 'so it doesn't stick together and sulk' suggest about her?":
    {
      why: 'Pasta cannot really sulk. Talking about it as if it had moods shows that the grandmother speaks about food warmly and with a sense of humour, like a cook who loves what she does.',
      not: {
        'She dislikes cooking pasta for others':
          'She cooks with care and shares her tips. Nothing suggests she dislikes it.',
        'She believes pasta has real feelings':
          'She is joking. Giving pasta a mood is a playful way to explain a cooking tip.',
        'She is strict and gets cross with cooks':
          "Her advice is playful, and she even says, 'Never cook when you are cross.'",
      },
      more: "Giving human feelings to things is personification. In speech it often shows a character's warmth or humour.",
      tip: "When a character's words are odd or playful, ask what they reveal about the speaker, not just what they mean.",
    },
  "Learning to Cook: Why does the writer end with the burn mark on the notebook's cover?": {
    why: "The burn mark comes 'from that very first night', the night of the smoke alarm. Ending with it ties the success with friends back to the first failure, showing how far the writer has come.",
    not: {
      'It shows that the notebook is now useless':
        'The notebook holds the recipe that impressed the friends. It is precious, not useless.',
      'It warns readers never to cook pasta':
        'The whole blog encourages learning to cook. It is not a warning.',
      'It shows the grandmother was careless':
        "The burn happened on the writer's first attempt, not the grandmother's.",
    },
    more: 'Bringing back a detail from the start of a text at the end is a circular structure. It gives a sense of completion.',
    tip: 'When an ending refers back to the beginning, explain what the echo shows about change.',
  },
  'On the Marshes: According to the first paragraph, what is scattered across the marshes?': {
    why: "The narrator describes the marshes as a 'dark flat wilderness' with 'scattered cattle feeding on it'. The word 'scattered' belongs to the cattle, so they are what is spread across the land.",
    not: {
      'Dykes and gates':
        "The marshes are 'intersected with dykes and mounds and gates': these cut across the land in lines. They are not the things described as scattered.",
      Gravestones:
        "The graves are in the churchyard, not out on the marshes, which lie 'beyond the churchyard'.",
      'Patches of nettles':
        "Nettles overgrow the churchyard ('this bleak place overgrown with nettles'), not the marshes beyond it.",
    },
    more: "Dickens builds this long sentence as a chain of discoveries, each beginning 'and that'. In a sentence this long, match each describing word to the place it belongs to before you answer.",
    tip: "In a retrieval question, check which noun a describing word belongs to. Here 'scattered' sits right before 'cattle', which settles it.",
  },
  "On the Marshes: What does 'a great iron on his leg' suggest about the man?": {
    why: "An iron fastened round a man's leg is a fetter, the kind used to hold prisoners. With his 'coarse grey' clothes and his hiding place among the graves, it tells us he has broken out of a prison and is on the run.",
    not: {
      "He works at a blacksmith's forge":
        'A blacksmith works with iron but does not wear it. An iron fixed to the leg holds a person, which points to a prisoner.',
      'He has hurt his leg in a fall':
        'He does limp, but an iron on the leg is not a bandage or a splint. It is a fetter, put on to stop someone escaping.',
      'He is a soldier in heavy armour':
        "He wears 'coarse grey', with 'no hat' and 'broken shoes'. That is no soldier's armour, and a single iron on one leg is a prisoner's fetter.",
    },
    more: "Dickens never uses the word 'convict' here. He lets the details do the work, so the reader pieces it together at the same moment as the frightened boy.",
    tip: "When a question asks what a detail suggests, name the inference and then the clue: 'The iron on his leg suggests he is an escaped prisoner.'",
  },
  "On the Marshes: What does 'the distant savage lair' suggest about the sea?": {
    why: "A lair is a wild animal's den, and 'savage' means fierce. Calling the sea 'the distant savage lair from which the wind was rushing' makes it sound like a beast's home, with the wind bursting out of it like an animal on the attack.",
    not: {
      'It is calm and still in the evening light':
        "The wind is 'rushing' from it, and 'savage' is the opposite of calm. Nothing here is still.",
      'It is where the man in grey has hidden':
        "The man starts up 'from among the graves' in the churchyard. The sea is far off, and nobody hides there.",
      'It is too distant to be a danger to Pip':
        "'Distant' tells us where the sea is, but 'savage lair' makes it threatening. The phrase adds danger, not safety.",
    },
    more: 'Describing a place as if it were a creature makes a setting feel alive and hostile. The whole landscape seems to close in, preparing the reader for something terrible to happen.',
    tip: "Pick out the one word that carries the effect, here 'lair', give its usual meaning, then say what it does in this setting.",
  },
  "On the Marshes: The narrator says 'the small bundle of shivers growing afraid of it all and beginning to cry, was Pip' instead of 'I'. What does this suggest?":
    {
      why: "The narrator is Pip grown up. He calls this 'a memorable raw afternoon' and says his first impression 'seems to me' to come from then, so he is remembering. Naming himself 'Pip', as if he were a stranger, shows the distance between the man and the child.",
      not: {
        'Pip is another boy the narrator once saw in the churchyard':
          "The long sentence lists what 'I found out', ending with who 'was Pip'. The narrator is discovering himself, not watching another boy.",
        'The narrator is still a child, telling the story as it happens':
          "'Seems to me to have been gained on a memorable raw afternoon' is the voice of someone remembering, years later.",
        'The narrator dislikes his own name and so wants to hide it from us':
          'Nothing suggests he dislikes his name. He uses it to see his younger self from the outside.',
      },
      more: 'A first-person narrator looking back can show two views at once: what the child felt then and what the adult understands now. Dickens draws both humour and sympathy from that gap.',
      tip: "In a viewpoint answer, say who is telling the story and when: 'The adult Pip looks back at his younger self, which lets him...'",
    },
  'On the Marshes: Which detail best shows that the man is suffering, not only frightening?': {
    why: "Chattering teeth are a sign of bitter cold, something the man cannot control. 'Whose teeth chattered in his head' shows that this fearsome figure is himself frozen and wretched, which makes him pitiable as well as terrifying.",
    not: {
      "'and glared and growled'":
        "Glaring and growling are threatening actions, like an animal's. They show him frightening, not suffering.",
      "'a man started up from among the graves'":
        'His sudden appearance from the graves is meant to shock. It adds to the fear rather than showing his pain.',
      "'as he seized me by the chin'":
        "Seizing the boy by the chin is an act of force. It shows the man's power, not his suffering.",
    },
    more: "Dickens lists what has happened to the man: 'soaked in water, and smothered in mud, and lamed by stones'. Each verb shows something done to him, so he is a victim of the land and the weather even while he terrifies the child.",
    tip: "For a 'best shows' question, test each option against the exact claim. Here the claim is suffering, so rule out details that only show menace.",
  },
  'Christmas Dinner: What part of the fowls is the narrator given to eat?': {
    why: "He says he was 'regaled with the scaly tips of the drumsticks of the fowls'. 'Regaled' usually means treated to something good, so Dickens is being ironic: the boy is handed the bony, scaly ends.",
    not: {
      'The obscure corners of the fowls':
        "He does get 'obscure corners', but they are corners of pork. From the fowls he gets the scaly tips of the drumsticks.",
      'The plump slices from the breast':
        "No plump slices come his way. The passage names 'the scaly tips of the drumsticks' as his share.",
      'The wings, with all the stuffing':
        'Wings and stuffing are never mentioned. His share is the bony ends of the drumsticks.',
    },
    more: "Alongside the drumsticks he gets 'those obscure corners of pork of which the pig, when living, had had the least reason to be vain'. The joke is that even the pig would not have been proud of these bits.",
    tip: "Retrieval answers should come from the passage's own facts. Find the exact noun, here 'drumsticks', rather than guessing from what sounds likely.",
  },
  "Christmas Dinner: The narrator lists being squeezed in, kept quiet and given the worst meat, then says 'No; I should not have minded that'. Why build up to this?":
    {
      why: "He lists three discomforts, each starting 'Not because' or 'nor because', then sweeps them aside: he would not have minded 'if they would only have left me alone'. The build-up shows that what truly hurt was being picked on, not the squeeze or the scraps.",
      not: {
        'To show that the other guests were treated just as badly':
          'Only the narrator is squeezed in and given scraps. The guests are comfortable, and they do the talking.',
        'To show that Christmas dinner was a success after all':
          "Nothing in the list suggests success. It sets up a worse complaint: 'they wouldn't leave me alone'.",
        'To show that he was too greedy to notice anything else':
          'He notices everything, down to an elbow in his eye. The list proves he was very aware, and that something hurt even more.',
      },
      more: 'Piling up lesser points so that the main one lands hardest is called building to a climax. Dickens uses it here for comedy and for sympathy at once.',
      tip: "In a structure answer, describe the order and its purpose: 'He lists smaller complaints first, so the last one seems the worst.'",
    },
  "Christmas Dinner: What does the narrator suggest by calling himself 'an unfortunate little bull in a Spanish arena'?":
    {
      why: "In a bullfight the bull is jabbed again and again by people doing it for sport. The narrator says he was 'smartingly touched up by these moral goads', so each lesson aimed at him is a goad, and he is the small, trapped bull.",
      not: {
        'He is so angry that he wants to charge at the guests':
          "A bull may charge, but this one is 'unfortunate' and 'little', and it is the one being hurt. Nothing shows him fighting back.",
        'He is being fattened up to be eaten, like the pork':
          'The bull is not food here. It stands in an arena being jabbed, which matches the remarks being aimed at him.',
        'He is strong and proud, like a champion in a contest':
          "An 'unfortunate little bull' is the opposite of a proud champion. He is small and helpless.",
      },
      more: 'A comparison works by carrying over one key feature. Here it is the jabbing: a goad is a pointed stick for driving cattle, and each moral lesson pricks him like one.',
      tip: 'Explain a comparison in two steps: what the thing is like in real life, then which part of it fits the character.',
    },
  'Christmas Dinner: Looking back as an adult, how does the narrator present the grown-ups at the dinner?':
    {
      why: "He mocks their self-importance: Mr Wopsle says grace 'with theatrical declamation', Mrs Hubble's question becomes a 'moral mystery', and Mr Hubble's answer is spelt out as 'Naterally wicious'. They pick on a child, and the adult narrator laughs at them for it.",
      not: {
        'As wise elders whose advice he now accepts':
          "He calls their lessons 'moral goads', jabs that hurt, and pokes fun at how they speak. He does not accept their verdict.",
        'As frightening figures he still cannot laugh at':
          "He clearly can laugh at them now: comparing Wopsle's grace to a ghost in a play is a joke.",
        'As dull guests he hardly noticed at the time':
          "He remembers every remark and look, down to a guest's elbow in his eye. He noticed them all too well.",
      },
      more: "Spelling a character's words as they sound, 'Naterally wicious' for 'naturally vicious', is a comic way of showing that a speaker is less grand than he thinks.",
      tip: 'Viewpoint questions ask how the narrator feels about what he describes. Look for mockery, sympathy or anger in his choice of words, then quote one.',
    },
  'Christmas Dinner: Which detail best shows that the adults look for chances to criticise the narrator?':
    {
      why: "'They seemed to think the opportunity lost, if they failed to point the conversation at me' means they treated every pause as a chance to turn the talk on him. That shows them seeking out chances, not just criticising when he did wrong.",
      not: {
        "'nor because I was not allowed to speak'":
          'This shows he was kept silent, but it is a rule about him, not the adults hunting for chances to criticise.',
        "'and the Pumblechookian elbow in my eye'":
          'This shows how cramped he was at the table. It is discomfort, not criticism.',
        "'Mr. Wopsle said grace with theatrical declamation'":
          "This mocks Mr Wopsle's showy voice. It is about his performance, not about aiming remarks at the boy.",
      },
      more: 'The best evidence matches every part of the claim. Here the claim has two parts, criticism and looking for chances, and only one option shows both.',
      tip: 'Before choosing a quotation, split the claim into its key words and check each word against the option.',
    },
  "Walworth: What has been cut out and painted on the top of Wemmick's cottage?": {
    why: "The narrator says 'the top of it was cut out and painted like a battery mounted with guns'. A battery is a row of heavy guns on a fort, so the little wooden cottage has been made to look armed.",
    not: {
      'A flag on a real flagstaff':
        "The flagstaff is 'real', and the flag goes up on Sundays. It is not cut out and painted on the roof.",
      'A row of Gothic windows':
        'The Gothic windows are set in the walls of the house, most of them only for show. What was painted on the top is something military.',
      'A drawbridge across a deep moat':
        'There is a bridge, but it is a plank, and it is not painted on the top of the house.',
    },
    more: 'A battery in this sense has nothing to do with electricity: it is the word for a group of big guns. Many words have several meanings, so read the sentence around them.',
    tip: 'Watch for words with more than one meaning. If the usual meaning makes no sense, try another that fits the sentence.',
  },
  "Walworth: When does Wemmick's gun fire?": {
    why: "'At nine o'clock every night, Greenwich time,' said Wemmick, 'the gun fires.' Wemmick names the hour himself, and keeps to it by the clock.",
    not: {
      'Every Sunday, with the flag':
        'Sunday is when he runs up the flag. The gun fires every night at nine.',
      'Whenever a visitor crosses':
        'Crossing the bridge goes with hoisting it up, not with firing the gun.',
      'At noon, by Greenwich time':
        "'Greenwich time' is right, but the hour is nine o'clock at night, not noon.",
    },
    more: 'Greenwich time is the time kept at the Royal Observatory in Greenwich, used for setting clocks exactly. Firing his little gun by it shows how precisely Wemmick keeps his routine.',
    tip: 'Questions about times often offer details from nearby sentences. Match the time to the event the question names.',
  },
  "Walworth: Why does the passage describe Walworth as 'a rather dull retirement' before it reaches Wemmick's house?":
    {
      why: "The district is 'a collection of black lanes, ditches, and little gardens', grey and ordinary. Describing that first makes Wemmick's flag, bridge and painted roof stand out all the more as bright, odd and personal.",
      not: {
        'It shows that the narrator wishes he had stayed home':
          "The narrator 'highly commended' the house and enjoys his visit. The dull district is a contrast, not a complaint.",
        'It warns that Wemmick is a dull and gloomy man':
          "The dull description belongs to the district. Wemmick's own house is full of fancy and fun.",
        'It explains why the house had to be built so small':
          "Nothing links the dull lanes to the size of the house. The size is part of Wemmick's own design.",
      },
      more: 'Contrast is one of the commonest structural tools: placing two opposite things side by side makes each sharper. Here a grey background makes one cheerful oddity glow.',
      tip: 'In a structure answer, say what the writer puts first, what follows, and what the order makes the reader notice.',
    },
  "Walworth: The bridge crosses a ditch 'four feet wide and two deep', which the narrator calls a 'chasm'. What is the effect of that word?":
    {
      why: "A chasm is a deep split in rock, the kind of gap a castle bridge might span. Using that grand word for a ditch you could almost step over makes the reader smile at the gap between Wemmick's make-believe and the tiny reality.",
      not: {
        'It suggests the house stands on a steep cliff':
          "The house stands among 'black lanes, ditches, and little gardens'. There is no cliff.",
        'It warns the reader that the ditch is dangerous':
          "The exact size, 'four feet wide and two deep', shows it is not dangerous at all. The big word is a joke.",
        'It shows the narrator is afraid he will fall in':
          'The narrator is relaxed and amused. Nothing suggests fear of a ditch two feet deep.',
      },
      more: 'Using grand, heroic language for something small and ordinary is called mock-heroic. It is a gentle kind of comedy: it laughs at the gap without sneering.',
      tip: 'When a writer picks a surprising word, ask what the word normally describes. The difference between that and what it describes here is the effect.',
    },
  "Walworth: Which detail best shows that the narrator is touched by Wemmick's delight, not only amused by it?":
    {
      why: "'But it was very pleasant to see the pride with which he hoisted it up' shows the narrator warming to Wemmick. The word 'But' turns from the joke about the tiny bridge to real pleasure in his friend's happiness.",
      not: {
        "'a Gothic door, almost too small to get in at'":
          "This is a joke about the house's odd scale, not a sign that the narrator is moved.",
        "'an ingenious little tarpaulin contrivance'":
          "'Ingenious' admires the cleverness of a cover for the gun. It is about the gadget, not Wemmick's delight.",
        "'I think it was the smallest house I ever saw'":
          'This is an amused comment on the size of the house. It shows no feeling for Wemmick himself.',
      },
      more: "Dickens often mixes laughter with affection. Wemmick is comic, but his home shows a warm private life, and the narrator's tone invites us to like him.",
      tip: "For a feeling, look for words such as 'pleasant' that show the narrator's own reaction, rather than descriptions of things.",
    },
  "Scrooge: What do the blind men's dogs do when they see Scrooge coming?": {
    why: "Dickens writes that the dogs 'would tug their owners into doorways and up courts'. Even dogs leading men who cannot see seem to know Scrooge, and pull their owners out of his way.",
    not: {
      'Bark to warn their owners':
        'The dogs make no sound in the passage. They pull their owners aside instead.',
      'Run up to him, wagging their tails':
        'They do wag their tails, but only after pulling their owners away, as if glad to have escaped him.',
      'Lie down and refuse to move on':
        "The dogs move quickly, tugging their owners 'into doorways and up courts'. They do not stay put.",
    },
    more: "This is comic exaggeration: no real dog could judge a man's character, yet these do. The joke makes Scrooge's reputation seem known to every creature in London.",
    tip: 'Retrieval questions often offer a detail from later in the same sentence. Read the whole sentence before you choose.',
  },
  "Scrooge: What does 'solitary as an oyster' suggest about Scrooge?": {
    why: "An oyster lives clamped inside a tight shell that is hard to prise open. Dickens pairs the simile with 'secret, and self-contained', so it shows Scrooge closing himself off from other people and letting nobody in.",
    not: {
      'He is slippery and hard to deal with in business':
        "Oysters can be slippery to eat, but the words around the simile are 'secret, and self-contained'. The point is being shut away.",
      'He is happiest when he is far away by the sea':
        'The oyster is not about the seaside. It is about a creature sealed inside its shell.',
      'He feels lonely and longs for some company':
        "'Solitary' means alone, not lonely. Nothing in the simile suggests he wants company: an oyster stays shut.",
    },
    more: "A simile compares two things using 'like' or 'as'. To explain one, ask which feature of the second thing the writer wants us to carry over, here the closed shell.",
    tip: "Explain a simile by naming the shared quality: 'Like an oyster in its shell, Scrooge lets no one in.'",
  },
  "Scrooge: Dickens writes that 'The cold within him froze his old features'. Why place the cold 'within' Scrooge?":
    {
      why: "Placing the cold inside him shows that coldness is his nature: his unkindness chills his face, nose and voice from the inside. The next paragraph confirms it: 'External heat and cold had little influence on Scrooge.' He makes his own winter.",
      not: {
        'He has been out walking in the snow for too long':
          "The weather, Dickens says, 'had little influence on Scrooge'. The cold comes from within, not from the snow.",
        'He is ill, and can never keep his old body warm enough':
          "Nothing suggests illness. The 'cold within him' is a picture of an unfeeling character.",
        'His house is freezing because he lights no fires':
          'The passage says nothing about fires at home. The cold is inside the man himself.',
      },
      more: "Dickens turns a feeling into weather, so readers can almost feel Scrooge's hardness. Cold and warmth run through the whole story as signs of how he treats people.",
      tip: 'When an image seems odd, ask what it would mean literally and why that makes no sense. The gap shows it is a picture of character.',
    },
  'Scrooge: The third paragraph lists people who never greet Scrooge. How does the last paragraph change the way we see this?':
    {
      why: "After the list of people who avoid him, the narrator says, 'It was the very thing he liked.' What looked like sad loneliness turns out to be his choice: he enjoys 'warning all human sympathy to keep its distance'.",
      not: {
        'It reveals that he has never noticed it':
          "He has noticed. He likes 'warning all human sympathy to keep its distance'.",
        'It reveals that he is too busy to care':
          'Work is not mentioned in the last paragraph. He does not merely put up with being avoided; he likes it.',
        'It reveals that he is secretly hurt by it':
          "The narrator says the opposite: being avoided 'was the very thing he liked'.",
      },
      more: 'A turn like this is a structural surprise. Dickens leads the reader towards pity and then snatches it away, which makes Scrooge seem harder still.',
      tip: "A word such as 'But' at the start of a paragraph often signals a turn. Say what changes and why the writer waited to reveal it.",
    },
  'Scrooge: Which detail best shows that Scrooge is mean with money?': {
    why: "Tight-fisted means unwilling to spend or give money: the fist is clenched round what it holds. 'A tight-fisted hand at the grind-stone' shows a man who works hard and keeps every penny.",
    not: {
      "'nipped his pointed nose'":
        'This shows the cold of his nature sharpening his face. It says nothing about money.',
      "'A frosty rime was on his head'":
        'Frost on his hair belongs to the cold imagery, not to his money.',
      "'shrivelled his cheek, stiffened his gait'":
        'These describe how the cold within him shows in his body, not how he treats money.',
    },
    more: "Dickens follows 'tight-fisted' with a list of grabbing words: 'squeezing, wrenching, grasping, scraping, clutching'. Piled up like that, they make his greed sound almost physical.",
    tip: 'When a list of similar words appears, you need not quote them all. Pick one or two and say what they share.',
  },
  'Two Gentlemen Call: What do the gentlemen want to buy for the poor?': {
    why: "The gentleman says they are raising 'a fund to buy the Poor some meat and drink, and means of warmth'. That is the charity they hope Scrooge will support.",
    not: {
      'Places for them in the workhouses':
        'Workhouses are what Scrooge mentions. The gentlemen want to give the poor food and warmth instead.',
      'Tickets for a Christmas entertainment':
        'No entertainment is mentioned. The fund is for food, drink and warmth.',
      'New clothes and boots for the winter':
        'Clothes are not mentioned. Warmth is, but the fund is for food, drink and heat.',
    },
    more: "The gentlemen choose Christmas 'because it is a time, of all others, when Want is keenly felt, and Abundance rejoices'. Dickens gives Want and Abundance capitals, as if they were people.",
    tip: 'If two options both seem close, go back to the exact words. A list in the passage usually decides it.',
  },
  'Two Gentlemen Call: Why does the gentleman lay down his pen after Scrooge asks about prisons?': {
    why: "He takes up his pen as he begins his appeal, ready to note a gift. When Scrooge answers with a question about prisons, the gentleman lays it down 'again', because he can see that no gift is coming.",
    not: {
      'He is so shocked that he means to leave':
        'He stays, and goes on to explain the fund, so he is not leaving. Laying down the pen shows he expects no gift.',
      "He has already written down Scrooge's gift":
        'Scrooge has offered nothing yet. Laying down the pen shows the gentleman expects nothing to write.',
      'He means to list the prisons for Scrooge':
        'He puts the pen down, the opposite of starting to write.',
    },
    more: "Small actions can carry a lot of meaning. Dickens shows the gentleman's hope fading through the pen rather than through his words.",
    tip: "For an action, explain what it shows about a character's thoughts: 'Laying down the pen shows he no longer expects a gift.'",
  },
  "Two Gentlemen Call: What does Scrooge mean when he says the poor who would rather die should 'decrease the surplus population'?":
    {
      why: "'Surplus' means more than is needed, like spare stock. Scrooge means that there are too many people, so if the poor would rather die, there would simply be fewer of them, and that would suit him.",
      not: {
        'The workhouses should take in fewer people each year':
          "Scrooge wants the workhouses kept busy. 'Surplus population' is about the number of people, not places in workhouses.",
        'Poor families should move out to the countryside':
          'Moving is not mentioned. Scrooge is talking about there being fewer people altogether.',
        'More houses should be built so that no one is homeless':
          'Scrooge refuses to give anything. Building houses for the poor is the opposite of his view.',
      },
      more: "'Surplus population' echoes writers of Dickens's time who argued that there were too many poor people to feed. Dickens puts the phrase in Scrooge's mouth to attack that idea.",
      tip: "To explain a phrase, define its key word first ('surplus' means extra), then apply it to what the character believes.",
    },
  "Two Gentlemen Call: Scrooge answers the appeal with questions about prisons and workhouses, then says he is 'very glad to hear' they are busy. What does this suggest?":
    {
      why: "Scrooge answers a plea for food and warmth by asking about prisons, workhouses and the treadmill, as if those were the proper help. Told they are 'Both very busy', he is glad. He thinks the poor deserve nothing better.",
      not: {
        'He wants to know where to send his own Christmas gift':
          'He offers no gift at all. His questions are a way of refusing, not of planning one.',
        'He was truly afraid that the prisons had all closed':
          "His 'I was afraid' is sarcasm. He pretends to worry so that he can mock the gentlemen's concern.",
        'He has never heard of such places and is curious':
          "He knows them well: he says he helps 'to support the establishments I have mentioned'.",
      },
      more: "Sarcasm says one thing and means another, often to mock. Scrooge pretends relief that the Treadmill and the Poor Law are 'in full vigour', showing that he sees no problem in sending the poor there.",
      tip: "If a character's words sound too cheerful for the situation, consider sarcasm, and quote the words that give it away.",
    },
  'Two Gentlemen Call: How does Dickens want readers to react to Scrooge in this scene?': {
    why: "Dickens gives the gentlemen calm, kind words about people 'in want of common necessaries', and gives Scrooge cold replies about prisons and workhouses. The contrast is meant to shock readers, so that the change he later goes through matters.",
    not: {
      'To agree that charity only rewards idle people':
        "Scrooge says he can't 'afford to make idle people merry', but Dickens gives the kinder, wiser lines to the gentlemen. We are not meant to agree.",
      'To admire him for paying for the prisons and workhouses':
        "Scrooge grumbles that they 'cost enough', but Dickens shows this as an excuse for giving nothing, not as generosity.",
      'To pity him because he is lonely and unhappy at Christmas':
        "He says 'I wish to be left alone'. He is not shown as lonely or sad here, but as cold to people in need.",
    },
    more: 'Dickens wrote A Christmas Carol in 1843 partly to change how comfortable readers thought about the poor. Scrooge voices views some of them held, so they could hear how cruel those views sounded.',
    tip: "For a writer's purpose, write 'Dickens wants the reader to...' and back it with a quotation that shows how he does it.",
  },
  'Old Fezziwig: Where does the fiddler set himself up to play?': {
    why: "The first sentence says the fiddler 'went up to the lofty desk, and made an orchestra of it'. He climbs on to the high desk and turns it into his stage.",
    not: {
      'By the warehouse door':
        "No door is mentioned. He plays from 'the lofty desk', high above the dancers.",
      'On a wooden shutter':
        "A shutter appears only in a joke at the end, about another fiddler 'carried home, exhausted, on a shutter'. He plays from the desk.",
      'Beside the pot of porter':
        'The pot of porter is the drink he plunges his face into between dances, not where he plays.',
    },
    more: "'Made an orchestra of it' is a joke: one fiddler on a desk becomes a whole orchestra. Dickens fills the scene with this kind of cheerful exaggeration.",
    tip: "When a question asks where, look for place words in the passage, such as 'up to', 'behind' or 'into'.",
  },
  "Old Fezziwig: What does 'suspected of not having board enough from his master' suggest about the boy?":
    {
      why: "'Board' here means meals, as in 'bed and board'. The boy is thought not to get enough food from the master he works for, so a party like this is a rare treat for him.",
      not: {
        'He has no proper bed to sleep in':
          "'Bed and board' go together, but 'board' alone is the food. The passage says nothing about his bed.",
        'He is bored by the work he is set':
          "'Board' sounds like 'bored' but is a different word. The passage is about food, not boredom.",
        'His master gives him too little wood':
          "'Board' can mean a plank, but nobody expects planks from a master. Here it means meals.",
      },
      more: "Dickens slips a sad detail into a happy scene: a hungry boy hiding behind a girl who 'was proved to have had her ears pulled by her mistress'. The party welcomes young servants whom others treat badly.",
      tip: "If a word seems odd in context, test its other meanings. 'Board' as food is old-fashioned, but it survives in 'board and lodging'.",
    },
  "Old Fezziwig: What does 'Mrs. Fezziwig, one vast substantial smile' suggest about her?": {
    why: "'Vast' and 'substantial' make her large and solid, and the whole of her becomes 'one' smile. Dickens shows a big, warm woman whose good humour fills her completely.",
    not: {
      'She smiles politely to hide her dislike':
        'Nothing hints at dislike. She is a smile through and through, matching the cheerful scene.',
      'She is so thin that her smile looks huge':
        "'Vast substantial' means large and solid, the opposite of thin.",
      'She is laughing at the guests as they come':
        'A smile is not mockery here. Everyone who comes in is welcomed, and she is part of the welcome.',
    },
    more: 'Describing a whole person as one feature turns a character into a single bright impression, almost like a cartoon. Dickens often does this with minor characters.',
    tip: "When a description is only a phrase, take each word in turn: 'vast' (big), 'substantial' (solid), 'smile' (good humour). Then put them together.",
  },
  "Old Fezziwig: Why does Dickens begin sentence after sentence with 'In came'?": {
    why: "Repeating 'In came' at the start of eight sentences makes the guests arrive in a rush, one wave after another, from the fiddler to the boy from over the way. The rhythm itself feels like a crowd filling a room.",
    not: {
      'It slows the scene to show how dull it is':
        "The scene is lively, not dull: 'some pushing, some pulling', and then everyone dances. The repetition speeds it up.",
      'It warns that the room is getting too full':
        "No danger is suggested. Everyone fits, and 'twenty couple' dance at once.",
      'It shows each guest was formally announced':
        "Nobody announces anyone. The guests come 'anyhow and everyhow', some shyly and some boldly.",
    },
    more: 'Repeating a word or phrase at the start of sentences is called anaphora. It builds rhythm and momentum, which is why speeches and lively descriptions use it.',
    tip: 'Name the technique, quote it, then explain what its rhythm does to the reader: here it makes us feel the crowd arriving.',
  },
  "Old Fezziwig: Which detail best shows the fiddler's tireless energy?": {
    why: "After a drink between dances, 'he instantly began again, though there were no dancers yet'. He does not even wait for the dancers to be ready, which shows energy that will not stop.",
    not: {
      "'clapping his hands to stop the dance'":
        'This is old Fezziwig, not the fiddler, and it is the moment the dancing stops.',
      "'and tuned like fifty stomach-aches'":
        'This is a joke about the awful noise of his tuning up. It shows sound, not energy.',
      "'with a music-book'":
        'Carrying a music-book tells us he came ready to play. It says nothing about how tireless he is.',
    },
    more: "Dickens ends with a joke: the fiddler plays as if he were a 'bran-new man' resolved to beat another fiddler 'or perish'. The comic exaggeration matches the energy of the whole party.",
    tip: 'Check who each option is about. In a busy scene, a detail about one character is easily mistaken for another.',
  },
  'Christmas Morning: What will Scrooge give the boy if he comes back with the man in less than five minutes?':
    {
      why: "Scrooge promises that if the boy comes back with the man 'in less than five minutes' he will give him 'half-a-crown'. A shilling is the reward for coming back at all; the faster return earns more.",
      not: {
        'A shilling':
          'A shilling is offered for coming back with the man. The bigger reward is for doing it in under five minutes.',
        'The small turkey':
          'Scrooge wants the big prize turkey bought, and the turkey is not a reward for the boy.',
        'A sixpence':
          'No sixpence is mentioned. The two rewards are a shilling and a larger coin for speed.',
      },
      more: 'Half-a-crown was worth two shillings and sixpence, more than twice the first reward. Scrooge raises his own offer, as if he cannot be generous enough.',
      tip: "When two sums appear close together, match each one to its condition. The question's 'less than five minutes' points to one of them.",
    },
  'Christmas Morning: Why is Scrooge so pleased to hear that it is Christmas Day?': {
    why: "Told it is Christmas Day, Scrooge says to himself, 'I haven't missed it.' He feared the Spirits' visits had taken many nights, and is overjoyed that the day itself is still to come.",
    not: {
      'He thinks the shops will be shut':
        "He expects the Poulterer's to be open, and sends the boy there. Shops being shut is not his worry.",
      'He has business to finish today':
        'Business is not mentioned. He is thinking only of Christmas.',
      'He can stay in bed all day':
        'He is up at the window, calling to a boy in the street. Staying in bed is not on his mind.',
    },
    more: "The repeated 'Of course they can. Of course they can' shows Scrooge talking to himself in delight, almost like a child. Repetition in speech often shows strong feeling.",
    tip: "For a 'why' question, find what the character says straight after the news. His own words, 'I haven't missed it', explain his joy.",
  },
  "Christmas Morning: What does the list 'Clash, clang, hammer; ding, dong, bell' help the reader to do?":
    {
      why: "These words imitate sounds: the clash and clang of swinging bells, the hammer of their clappers, the 'ding, dong'. Reading them, we hear the 'lustiest peals' ringing out just as Scrooge does.",
      not: {
        'Picture workmen hammering in the street':
          "'Hammer' here is the sound of the bells being struck, not workmen. The sentence is about 'the churches ringing out'.",
        'Feel the cold of the frosty morning':
          'The cold comes in the next paragraph. This list is all sound.',
        "Sense Scrooge's anger at being woken":
          "He is not angry: the next words are 'Oh, glorious, glorious'. The bells delight him.",
      },
      more: "Words that sound like what they mean are called onomatopoeia. Dickens then repeats the list backwards, 'Bell, dong, ding; hammer, clang, clash', like bells answering one another.",
      tip: 'For sound words, say what the reader hears and what mood the sounds create. Here they make the morning loud and joyful.',
    },
  'Christmas Morning: The scene moves from short cries about the weather to a quick exchange with the boy. What does this pace suggest about Scrooge?':
    {
      why: "Short bursts like 'Golden sunlight; Heavenly sky; sweet fresh air; merry bells' and his rapid questions to the boy make everything happen at speed. The pace mirrors Scrooge himself, bursting with energy and eager to act at once.",
      not: {
        'He is nervous and hiding his true feelings':
          'He hides nothing: he cries out about the bells and the sunlight for anyone to hear.',
        'He is confused and keeps forgetting his questions':
          "He asks the date twice only because the boy cries 'EH'. He knows exactly what he wants.",
        'He is impatient because the boy is slow and rude':
          "Scrooge's replies to the boy are warm, not cross. Nothing he says shows impatience.",
      },
      more: 'Writers control pace with sentence length. Short fragments and quick dialogue speed a scene up; long sentences slow it down. Here the speed matches a man starting his life again.',
      tip: "In a structure answer, link the pace to the character's state of mind: 'The quick exchanges reflect his excitement.'",
    },
  "Christmas Morning: Which detail best shows that Scrooge now enjoys other people's company?": {
    why: "'It's a pleasure to talk to him' shows Scrooge taking delight in a chat with a boy in the street. Talking to someone is no longer a nuisance to him; it is a pleasure.",
    not: {
      "'and put out his head'":
        'Putting his head out of the window lets him see the morning. It shows nothing about enjoying company.',
      "'The Spirits have done it all in one night'":
        'This is Scrooge working out what has happened to him. It is about the Spirits, not other people.',
      "'calling downward to a boy in Sunday clothes'":
        'This shows him starting a conversation, but not that he enjoys it. The pleasure comes in his own words later.',
    },
    more: "Dickens shows Scrooge's change through what he does and says rather than by telling us about it. Enjoying a chat with a stranger is one small sign of a large change.",
    tip: "Choose the quotation that states the feeling most directly. 'Pleasure' names the enjoyment the question asks about.",
  },
  'A Winter Afternoon: Why is there no walk that afternoon?': {
    why: "The narrator explains that 'the cold winter wind had brought with it clouds so sombre, and a rain so penetrating, that further outdoor exercise was now out of the question'. The weather has made a walk impossible.",
    not: {
      'Mrs. Reed had forbidden the children to go out':
        'Mrs. Reed shuts the narrator out of the family group, but the walk is stopped by the weather, not by her.',
      'The children had already walked all morning':
        "They had wandered 'an hour in the morning', not all morning, and that is not the reason given.",
      'Bessie the nurse was too busy to take them':
        "Bessie is mentioned for her 'chidings', not for being busy. The rain is the reason.",
    },
    more: "Brontë opens with a plain, flat sentence: 'There was no possibility of taking a walk that day.' Beginning with something that cannot happen hints at a life full of limits.",
    tip: "Look for 'so... that' in a sentence: it links a cause to its result. Here the clouds and rain were so bad that walking was impossible.",
  },
  "A Winter Afternoon: What does 'humbled by the consciousness of my physical inferiority' to her cousins suggest?":
    {
      why: "'Physical inferiority' means being weaker or smaller in body, and 'humbled' means made to feel low. Coming home from walks, she is made painfully aware that she is less strong than Eliza, John and Georgiana.",
      not: {
        'She feels cleverer than all of her cousins':
          "'Physical' is about the body, not the mind. And 'humbled' shows she feels lower, not superior.",
        'She is too ill to go out in the cold air':
          'Nothing says she is ill. She dislikes walks because of the cold and how small they make her feel.',
        'She is proud of being much tougher than they are':
          "'Inferiority' means being less, not more. She feels weaker than her cousins, not tougher.",
      },
      more: "Breaking a long phrase into its parts helps: 'humbled' (made to feel small), 'consciousness' (awareness), 'physical inferiority' (being weaker in body).",
      tip: 'If a phrase is long and formal, put each word into everyday English, then put the meaning back together.',
    },
  'A Winter Afternoon: Which detail best suggests that the Reed children are not as good as their mother believes?':
    {
      why: "The narrator adds in brackets that the children were '(for the time neither quarrelling nor crying)'. 'For the time' means just for now, so this quietly suggests that quarrelling and crying are what they usually do.",
      not: {
        "'clustered round their mama in the drawing-room'":
          'This shows the children gathered close to their mother. It is a picture of closeness, not a hint about bad behaviour.',
        "'she lay reclined on a sofa by the fireside'":
          "This describes Mrs. Reed resting by the fire. It says nothing about her children's behaviour.",
        "'looked perfectly happy'":
          'This describes how Mrs. Reed looked with her children round her. It shows her view of them, not the truth the narrator hints at.',
      },
      more: "A comment in brackets can let a narrator whisper something to the reader. Here it undercuts Mrs. Reed's picture of 'contented, happy, little children' with a sly aside.",
      tip: 'Read brackets closely. Writers often hide their sharpest comments in them.',
    },
  'A Winter Afternoon: How does the narrator want readers to see her exclusion from the family group?':
    {
      why: "Mrs. Reed keeps her 'at a distance' until she becomes more 'sociable and childlike', but when she asks what Bessie says she has done, she is told to 'remain silent'. Shut out and refused a reason, she wants us to feel it is unjust.",
      not: {
        'As kind, since it protects her from her cousins':
          "Mrs. Reed calls it a privilege kept 'only for contented, happy, little children'. It is a punishment, not protection.",
        'As a joke, since Mrs. Reed is only teasing her':
          "Mrs. Reed is entirely serious: 'until you can speak pleasantly, remain silent'.",
        'As fair, since she has clearly behaved very badly':
          'No bad deed is named. She asks what she has done and gets no answer, which makes the exclusion seem unfair.',
      },
      more: "Jane tells her own story as an adult looking back. She reports Mrs. Reed's words exactly and lets their coldness speak for itself, so readers take her side.",
      tip: 'For a viewpoint question, ask whose side the narrator puts you on, and quote the words that do it.',
    },
  "A Winter Afternoon: What does 'I was shrined in double retirement' suggest about the window-seat?":
    {
      why: "A shrine is a sacred, protected place, and 'retirement' means withdrawal from others. She has slipped into another room and then drawn the curtain, so she is hidden twice over in a refuge where she feels safe.",
      not: {
        'It is a holy place where she goes to pray':
          "'Shrined' borrows from holy places, but she is looking at a book of pictures, not praying. The word suggests how precious the hiding place is.",
        'It is a prison where she has been shut away':
          "Nobody shuts her in: she 'slipped in' and drew the curtain herself. It is her own choice.",
        'It is a cold place she longs to escape from':
          'She chooses it, gathers up her feet and settles in. She is escaping to it, not from it.',
      },
      more: "One precise word can carry a whole feeling. 'Shrined' suggests something treasured and safe, which tells us how much she values a corner of her own.",
      tip: "When a word is unusual, ask where you normally meet it. 'Shrine' belongs to sacred places, and that sense of something precious carries over.",
    },
  'The Red-Room: How long has Mr. Reed been dead?': {
    why: "The first sentence says 'Mr. Reed had been dead nine years'. The room has kept its gloomy reputation ever since.",
    not: {
      'Nine months': 'The number is right but the unit is wrong: the passage says years.',
      'Ten years': 'The passage gives nine years, not ten.',
      'A few weeks':
        'It has been nine years, long enough for the room to be left almost always empty.',
    },
    more: "Brontë lists the stages of his death in one sentence: 'he breathed his last; here he lay in state; hence his coffin was borne'. Each step happened in this very room.",
    tip: 'With numbers, check the unit as well as the figure: nine years and nine months are very different.',
  },
  "The Red-Room: What does 'no jail was ever more secure' tell us?": {
    why: "She gets up to see whether 'they had locked the door', and finds that they had. Comparing the room to a jail shows that she is locked in like a prisoner and cannot get out.",
    not: {
      'Bessie is standing guard outside the door':
        "Bessie and Miss Abbot have 'left me riveted' to the seat and gone. The door is locked, not guarded.",
      'She feels safe from the Reeds in this room':
        "'Secure' can mean safe, but a jail keeps people in. She has just found the door locked, so she is trapped, not safe.",
      'The red-room was once used as a prison':
        'The room was where Mr. Reed died, not a prison. The jail is a comparison.',
    },
    more: "Comparing a bedroom to a jail turns a punishment at home into something much darker, and makes the reader feel the child's helplessness.",
    tip: "When a word has two meanings, like 'secure', use the rest of the sentence to choose. Here 'jail' decides it.",
  },
  "The Red-Room: What is 'the strange little figure' she sees in the looking-glass?": {
    why: "Crossing 'before the looking-glass', she sees a figure 'with a white face and arms specking the gloom'. It is her own reflection, but in the gloom it has 'the effect of a real spirit', so she thinks of the phantoms in Bessie's stories.",
    not: {
      'Miss Abbot, watching her from the doorway':
        'Miss Abbot has gone, and the door is locked. The figure is in the looking-glass.',
      'A painting of a fairy beside the glass':
        "The figure's eyes are 'moving where all else was still', so it is alive: her reflection, not a painting.",
      'The ghost of Mr. Reed, rising from the bed':
        "The figure is 'little', with 'glittering eyes of fear'. It is a child's frightened face, her own, not a man's ghost.",
    },
    more: "The scene shows how fear works: in a dark, silent room, even her own reflection looks like something from a ghost story. Brontë makes the reader feel the child's terror from the inside.",
    tip: 'When a narrator describes something strange, check whether it could be something ordinary seen in a frightening way.',
  },
  'The Red-Room: The passage opens with the fact that Mr. Reed died in this room. How does placing it first affect what follows?':
    {
      why: "Once we know that 'it was in this chamber he breathed his last', every later detail, the 'high, dark wardrobe', the 'vacant majesty of the bed', the figure in the glass, feels touched by death. The opening fact makes the whole room seem haunted.",
      not: {
        'It explains why the room is kept so very tidy':
          'Tidiness is not mentioned. The opening fact is about death, which fills the room with dread.',
        'It shows that the narrator misses her uncle':
          'She does not speak of missing him. The fact comes first to make the room frightening.',
        'It suggests the room will soon be used again':
          "The room has been 'guarded ... from frequent intrusion' since his death. Nothing suggests it will be used soon.",
      },
      more: 'Writers often place a key fact early so that it colours everything after it. Readers then see the ordinary furniture through the fear that fact creates.',
      tip: "In a structure answer, explain how an opening detail shapes the way we read the rest: 'Because we know..., the room seems...'",
    },
  'The Red-Room: Which detail best shows that the narrator is still defiant, not yet beaten by fear?':
    {
      why: "'My blood was still warm' means her anger has not yet cooled. The sentence says superstition had not yet won 'complete victory', because her hot temper was still holding fear back.",
      not: {
        "'I returned to my stool'":
          'This is a simple action after seeing the reflection. It shows neither defiance nor fear.',
        "'Superstition was with me at that moment'":
          'This shows fear creeping in, the opposite of defiance.',
        "'glittering eyes of fear'":
          'These are frightened eyes in her reflection. They show fear, not defiance.',
      },
      more: "Brontë describes the feelings as if they were fighting a battle: superstition seeks 'complete victory', while 'the mood of the revolted slave' still braces her. The struggle is inside the child.",
      tip: "Words for heat, such as 'warm', often stand for anger or passion, while chill and stillness often go with fear.",
    },
  "Mr. Brocklehurst: According to Miss Temple, why does Julia Severn's hair curl?": {
    why: "Miss Temple replies, 'Julia's hair curls naturally.' The curls are not something Julia has done to her hair; it grows that way.",
    not: {
      'She curls it with hot tongs':
        'Mr. Brocklehurst assumes she is showing off, but Miss Temple says the curls are natural.',
      'Her mother has it curled':
        "No mother is mentioned. Miss Temple says the hair 'curls naturally'.",
      'It was curled for his visit':
        'Nobody has curled it for anyone. It curls naturally, as Miss Temple says.',
    },
    more: "Miss Temple answers 'very quietly' and then 'still more quietly'. Her calm, short replies are a contrast with his outbursts.",
    tip: "If a question names a speaker ('According to Miss Temple'), find that character's own words. Other characters may believe something different.",
  },
  "Mr. Brocklehurst: Why does Mr. Brocklehurst want Julia's hair cut off even though it curls naturally?":
    {
      why: "He says 'we are not to conform to nature' and wants hair 'arranged closely, modestly, plainly'. Even curls that nature gave her must go, because he wants the girls to look plain and humble.",
      not: {
        'He thinks Julia has lied about curling her own hair':
          "He accepts that the curls are natural ('Yes, but we are not to conform to nature') and still wants them cut. He is not calling her a liar.",
        'He fears that long hair is unhealthy for the girls':
          'Health is never mentioned. His reasons are about plainness and modesty.',
        'He is punishing Julia for answering him rudely':
          'Julia never speaks. Miss Temple answers for her, very quietly.',
      },
      more: "Brocklehurst calls hair 'the excrescence', a word for an ugly growth. Choosing such a word for a girl's hair shows how twisted his idea of goodness is.",
      tip: 'When a character gives a reason, quote it and then explain what it shows about their beliefs, not just their actions.',
    },
  "Mr. Brocklehurst: Miss Temple's smile is said to have 'curled' her lips. Why is this a clever choice of word?":
    {
      why: "The scene is all about curls: Brocklehurst rages at hair 'curled all over'. Using 'curled' for Miss Temple's hidden smile echoes his word and turns it against him, a quiet joke at his expense.",
      not: {
        'It shows that Miss Temple is angry with Julia':
          "She is trying to hide a smile, not anger, and the smile is at Mr. Brocklehurst's fuss, not at Julia.",
        "It hints that Miss Temple's own hair is curled":
          'The word describes her lips, not her hair. Its link to curls is a joke, not a description.',
        'It shows that she is in pain from biting her lip':
          "There is no pain: the handkerchief hides 'the involuntary smile'. She is amused.",
      },
      more: "When a writer repeats a word in a new sense, it can mock the person who used it first. Readers who notice the echo share the narrator's private joke.",
      tip: 'Look for a word that has already appeared in the passage. If it comes back with a new meaning, the echo is usually deliberate.',
    },
  "Mr. Brocklehurst: The passage moves from Mr. Brocklehurst's angry speeches to the girls' silent grimaces. What does this ending reveal?":
    {
      why: "The narrator says that whatever he does 'with the outside of the cup and platter, the inside was further beyond his interference than he imagined'. He can cut their hair and turn them to the wall, but their thoughts stay their own.",
      not: {
        'The girls are terrified of the punishments he gives':
          "They obey, but they pull 'looks and grimaces' behind his back. That is mockery, not terror.",
        'The girls agree that curls are a sign of vanity':
          'Their grimaces show they think his order ridiculous. They do not agree with him.',
        'Miss Temple has secretly told them to disobey him':
          "Miss Temple 'gave the order' as he asked. The girls' reactions are their own.",
      },
      more: "'The outside of the cup and platter' echoes a saying in the Bible about hypocrites who clean the outside of a cup and leave the inside dirty. Brontë turns it against a man who cares only for outward show.",
      tip: "The end of a passage often carries the writer's verdict. Quote it, then explain what it says about the characters.",
    },
  'Mr. Brocklehurst: Which detail best shows that Mr. Brocklehurst is truly outraged by the curls, not merely pretending?':
    {
      why: "As he points his cane at the hair, his 'hand shaking as he did so' shows a reaction he cannot control. A shaking hand is a sign of real, strong feeling, so his outrage is genuine, however foolish.",
      not: {
        "'majestically surveyed the whole school'":
          'This shows his grand manner before he notices anything. It is pride, not outrage.',
        "'his hands behind his back'":
          'This is how he stands before he sees the curls, calm and in command. It shows no outrage.',
        "'replied Miss Temple, very quietly'":
          "This is Miss Temple's calm reply, not Mr. Brocklehurst's reaction.",
      },
      more: 'Physical details, such as a shaking hand or a blink, often reveal feelings a character does not choose to show. They are strong evidence because they are involuntary.',
      tip: 'When asked whether a feeling is real, look for a body reaction the character cannot control.',
    },
  "The Ball: Whom does Darcy call 'the only handsome girl in the room'?": {
    why: "Darcy tells Bingley that he is 'dancing with the only handsome girl in the room', while 'looking at the eldest Miss Bennet'. She is Bingley's partner, so the compliment goes to her.",
    not: {
      'Elizabeth Bennet':
        "Elizabeth is the sister 'sitting down just behind you' whom Bingley suggests. Darcy's praise is for her elder sister.",
      "One of Bingley's sisters":
        "Bingley's sisters are 'engaged' for this dance. Darcy is looking at the eldest Miss Bennet as he speaks.",
      'A girl sitting behind him':
        "The girl sitting behind is the one Bingley points out next. Darcy's praise is for the girl Bingley is dancing with.",
    },
    more: "In Austen's time the eldest unmarried daughter was 'Miss Bennet' and a younger one 'Miss Elizabeth Bennet'. The eldest Miss Bennet here is Jane, Elizabeth's elder sister.",
    tip: "When a speaker says 'you' or 'she', check the words around the speech, such as 'looking at', to see who is meant.",
  },
  "The Ball: What does Bingley's reply, 'I would not be so fastidious as you are', show about him?":
    {
      why: "'Fastidious' means fussy and hard to please. Bingley says he would not be so fussy 'for a kingdom', and that he 'never met with so many pleasant girls'. He is easily pleased and is enjoying himself.",
      not: {
        "He is jealous of Darcy's good looks and fortune":
          'Nothing in his reply is jealous. He is cheerfully urging his friend to join in.',
        'He is very fussy about whom he dances with':
          "'Fastidious' does mean fussy, but Bingley says he would not be so fastidious. The fussy one is Darcy.",
        'He is tired of dancing and wants to stop':
          'He wants Darcy to dance too, and goes back to his partner. He is not tired of it.',
      },
      more: 'Austen often shows character through contrast: easy, warm Bingley beside his reserved friend. Each makes the other clearer.',
      tip: "If a word is unfamiliar, use the speaker's next words: 'so many pleasant girls' shows that 'fastidious' must mean the opposite of easily pleased.",
    },
  "The Ball: Darcy calls Elizabeth 'tolerable'. What is the effect of this word?": {
    why: "'Tolerable' means just bearable, good enough and no more. Said 'coldly' about a girl within earshot, and followed by 'not handsome enough to tempt me', the faint praise works as an insult.",
    not: {
      'It means she is patient and easy-going':
        "That would be 'tolerant'. 'Tolerable' means bearable, only just acceptable.",
      'It shows he thinks her very beautiful':
        "He says at once that she is 'not handsome enough to tempt' him. 'Tolerable' is the opposite of high praise.",
      'It is a kindly way to refuse the introduction':
        "He says it 'coldly' and adds that she has been 'slighted by other men'. There is nothing kind in it.",
    },
    more: "Faint praise, praising someone so weakly that it insults them, can wound more than plain rudeness. Austen lets Darcy's own words count against him.",
    tip: "Notice small words that rank things, such as 'tolerable', 'quite' and 'fairly'. A writer can use them to deliver an insult politely.",
  },
  "The Ball: How does the narrator present Elizabeth's reaction in the last paragraph?": {
    why: "She is left 'with no very cordial feelings towards him', a mild way of saying she dislikes him. But she 'told the story however with great spirit among her friends', because she 'delighted in any thing ridiculous'. She is stung, but laughs it off.",
    not: {
      'She is crushed and leaves the ball in tears':
        "She stays and tells the story 'with great spirit'. Nothing suggests tears.",
      'She agrees with Darcy and feels plain':
        'She finds his remark ridiculous enough to joke about. She does not accept it.',
      'She is furious and plans her revenge on him':
        "'No very cordial feelings' is mild. She turns the insult into a funny story, not a plan for revenge.",
    },
    more: "'No very cordial feelings' is an understatement: saying less than you mean, often to be dry or funny. Austen's narrator uses it to show Elizabeth's annoyance with a smile.",
    tip: 'Look for understatement in Austen. A mild phrase can hide a strong feeling, and spotting it shows close reading.',
  },
  'The Ball: Which detail best shows that Darcy thinks himself above the company at the ball?': {
    why: "Darcy says, 'At such an assembly as this, it would be insupportable.' Calling a whole gathering of local people unbearable shows that he looks down on them as beneath him.",
    not: {
      "'I hate to see you standing about by yourself in this stupid manner'":
        "These are Bingley's words, urging Darcy to dance. They do not show Darcy's own opinion of the company.",
      "'and turning round, he looked for a moment at Elizabeth'":
        'This is only Darcy turning to look. His cold words come after it.',
      "'Mr. Bingley followed his advice'":
        "This is the narrator telling us what Bingley did next. It shows nothing of Darcy's pride.",
    },
    more: "'Such an assembly as this' is scornful: 'such' points at the gathering as if it were obviously poor. A small word can carry a great deal of contempt.",
    tip: 'Check who is speaking before you quote. A quotation from the wrong character is the commonest slip in an evidence answer.',
  },
  'Elizabeth Sets Out: Why must Elizabeth walk to see her sister?': {
    why: "The narrator explains that 'the carriage was not to be had; and as she was no horse-woman, walking was her only alternative'. With no carriage and no wish to ride, she has to walk.",
    not: {
      'Her father has forbidden her to take the horses':
        "Her father offers, half joking, to 'send for the horses', and she says no. Nobody forbids her.",
      'She enjoys long walks across the fields':
        "She says she does not wish 'to avoid the walk', but the reason she must walk is that there is no carriage and she does not ride.",
      'Her sisters want to walk to Meryton with her':
        'Her sisters join her only as far as Meryton. Their company is not why she must walk.',
    },
    more: "'Horse-woman' means a woman who rides well. A lady in Austen's world without a carriage had few choices, which makes a three-mile walk through mud unusual.",
    tip: "A 'why' question often has its answer in a 'because' or 'as' clause. Here 'as she was no horse-woman' gives part of it.",
  },
  "Elizabeth Sets Out: What does Mrs. Bennet's warning, 'You will not be fit to be seen', show about her?":
    {
      why: "Elizabeth is anxious about Jane, yet her mother's first worry is 'all this dirt' and how Elizabeth will look when she arrives. Mrs. Bennet cares more about appearances than about Jane.",
      not: {
        'She fears Elizabeth will catch a cold':
          "Mrs. Bennet mentions 'all this dirt' and being 'fit to be seen'. Her worry is mud and looks, not health.",
        'She thinks the walk is too far for anyone':
          'She never mentions the distance. Her objection is the dirt and how Elizabeth will look.',
        'She wants to go and see Jane herself':
          "She makes no offer to go. She only objects to Elizabeth's plan.",
      },
      more: "Elizabeth's reply turns her mother's words round: 'I shall be very fit to see Jane'. Austen often lets a sharp answer expose a foolish remark.",
      tip: 'When a character objects to something, ask what the objection reveals they care about most.',
    },
  "Elizabeth Sets Out: What does Lydia's remark about Captain Carter suggest about her?": {
    why: "While Elizabeth is anxious about Jane, Lydia hopes that if they 'make haste' they 'may see something of Captain Carter before he goes'. Her mind is on the officers, not on her sister.",
    not: {
      'She is worried about Jane and wants to hurry':
        'She does want to hurry, but to see Captain Carter, not because of Jane.',
      'She has a message for the Captain from home':
        'No message is mentioned. She simply hopes to see him.',
      'She is afraid of walking through Meryton':
        'Lydia is eager to get to Meryton, where the officers are. She shows no fear.',
    },
    more: "Austen gives her characters remarks that reveal them in a single line. Lydia's thoughts run straight to officers, a trait that matters later in the novel.",
    tip: 'For a minor character, one remark can be enough evidence. Quote it, then say what it shows they care about.',
  },
  "Elizabeth Sets Out: One by one, each member of the family answers Elizabeth's plan. What do their replies show?":
    {
      why: "Each reply reveals its speaker: Mrs. Bennet frets about 'dirt', Mr. Bennet makes a dry joke about horses, Mary preaches about 'reason', and Lydia thinks of an officer. Only Elizabeth's thoughts are on Jane.",
      not: {
        'The whole family is united in worry for Jane':
          'Only Elizabeth shows real concern. The others think of mud, jokes, rules and officers.',
        'Everyone agrees that the walk is sensible':
          "Her mother calls her 'silly', and Mary lectures her about reason. They do not all agree.",
        'They all try their hardest to stop her going':
          'Only her mother objects strongly. Her father jokes, and two sisters walk part of the way with her.',
      },
      more: "Austen often lines up a group's reactions to one event. Each reply shows a different character, and the comedy comes from the contrast.",
      tip: 'When several characters react to one thing, compare them. A structure answer can say how the sequence builds a picture of the family.',
    },
  "Elizabeth Sets Out: Which detail best shows Elizabeth's eagerness to reach her sister?": {
    why: "She crosses the fields 'springing over puddles with impatient activity'. 'Impatient' shows she cannot get there quickly enough, and 'springing' shows energy that ignores the mud.",
    not: {
      "'with weary ancles, dirty stockings'":
        'These show what the walk did to her, tired ankles and muddy stockings, not her eagerness.',
      "'In Meryton they parted'": 'This only tells us where her sisters left her.',
      "'finding herself at last within view of the house'":
        'This tells us she arrived. It does not show how eager she was on the way.',
    },
    more: "'Ancles' is an older spelling of 'ankles', as printed in 1813. Older texts often spell words differently; do not copy their spellings into your own writing.",
    tip: "Choose the quotation with the strongest word for the claim. 'Impatient' names the eagerness directly.",
  },
  'By the Loom: Where had Silas hidden his guineas?': {
    why: "He 'swept away the sand without noticing any change, and removed the bricks', and then sees 'the empty hole'. The gold had been kept in a hole under the bricks in the floor near his loom.",
    not: {
      'Inside his bed, under the mattress':
        'He turns his bed over during his search, hoping he moved the gold there. It was not kept there.',
      'In the brick oven where he laid his sticks':
        'The oven is another place he searches in desperation. The hiding place was the hole under the bricks.',
      'In a box on the table by the fire':
        "He pictures the guineas 'on the table before him' at supper, but they were kept hidden under the floor.",
    },
    more: "Hiding money under the floor was common for people who did not trust banks. Silas's secret hole shows how much of his life is lived alone and in secret.",
    tip: 'The places a character searches are not always where things were kept. Find the exact place the passage describes first.',
  },
  'By the Loom: Why does Silas want to take out his guineas before supper?': {
    why: "He thinks 'it would be pleasant to see them on the table before him as he ate his unwonted feast'. He wants to enjoy the sight of his gold while he eats.",
    not: {
      'He wants to count them before a purchase':
        "He plans no purchase. He simply likes to see them 'on the table before him'.",
      'He needs money to pay for his supper':
        'He wants the coins on the table to look at, not to spend.',
      'He fears a thief may come for them':
        'He has no idea of a thief yet. The empty hole comes as a shock to him.',
    },
    more: "'Unwonted' means unusual: this feast is a rare treat. Eliot shows that for Silas even a special supper is better with his gold to look at.",
    tip: "If the passage gives a character's thought, quote it, then put it into your own words.",
  },
  "By the Loom: What does the narrator mean by calling Silas's guineas 'a golden wine'?": {
    why: "'For joy is the best of wine': wine warms and lifts the spirits, and so does joy. The sight of his guineas gives Silas that kind of warm, heady pleasure; they are his greatest delight.",
    not: {
      'He spends all his money on expensive drink':
        'The wine is a comparison. Silas saves his guineas; he does not spend them on drink.',
      'His gold coins smell as sweet as wine':
        'The comparison is about feeling, not smell. Joy, like wine, warms him.',
      'He drinks wine to forget his loneliness':
        'He drinks no wine here. The gold itself is his wine, the thing that cheers him.',
    },
    more: "This is a metaphor: the guineas are called wine without 'like' or 'as'. It hints at something close to an addiction, a pleasure Silas craves.",
    tip: 'To explain a metaphor, say what the two things share. Here wine and gold both bring Silas a warm rush of pleasure.',
  },
  "By the Loom: What does the comparison 'A man falling into dark waters seeks a momentary footing even on sliding stones' show about Silas?":
    {
      why: "A drowning man grabs at stones he knows will slip. In the same way Silas clings to 'false hopes', such as having moved the gold and forgotten, to put off 'the moment of despair'. He holds on to hopes that cannot last.",
      not: {
        'He is afraid of drowning in the river':
          'There is no river. The dark waters are a picture of his despair.',
        'He is searching the floor for loose stones':
          'He searches for his gold, not stones. The sliding stones belong to the comparison.',
        'He is calmly deciding where to look next':
          "He is shaking 'so violently that he let fall the candle'. Nothing about him is calm.",
      },
      more: 'An extended comparison like this turns an inner feeling into a physical scene. Readers who have never lost a fortune can still imagine slipping in dark water.',
      tip: "For a comparison, explain both halves: what happens in the picture, and what it shows about the character's mind.",
    },
  "By the Loom: How is the passage ordered to build Silas's despair?": {
    why: "It opens with pleasure: 'it would be pleasant to see them on the table'. Then comes the empty hole, and a search through bed, oven and corners until 'no untried refuge' is left. Each failed place takes away a little more hope.",
    not: {
      'The theft first, then a flashback to how he earned the gold':
        'The theft is discovered, not shown, and there is no flashback. The passage moves forward through his search.',
      'A calm search that ends when he finds the gold somewhere else':
        "He never finds the gold. The search ends with 'the terrible truth'.",
      'A quarrel with a neighbour, then a lonely, hopeless search':
        'No neighbour appears. Silas is alone throughout.',
    },
    more: "Moving from happiness to loss makes the fall feel steeper. The final sentence, 'There was no untried refuge left', closes every door, as the search has done.",
    tip: 'In a structure answer, describe the shape of the passage from start to end, then explain what that shape does to the reader.',
  },
  "By the Hearth: What do Silas's fingers touch instead of coins?": {
    why: "Reaching for what he thinks is gold, 'instead of the hard coin with the familiar resisting outline, his fingers encountered soft warm curls'. The curls belong to a sleeping child.",
    not: {
      'A heap of dry leaves':
        "He throws 'dried leaves and sticks' on the fire afterwards. His fingers first touch curls.",
      'The fallen logs':
        "He pushes the logs together before and after. The thing he reaches for is a child's hair.",
      'A shabby blanket':
        "The child's 'shabby clothing' is seen later, by the firelight. His fingers touch curls.",
    },
    more: "Eliot sets hard against soft: 'the hard coin' against 'soft warm curls'. The contrast marks a turning point in the novel, from cold gold to a living child.",
    tip: "The word 'instead' signals a contrast. The answer is what comes after it.",
  },
  'By the Hearth: Why does Silas at first think there is gold on the floor?': {
    why: "The fire gives 'only a red uncertain glimmer', and Silas's vision is 'blurred'. In that light the child's 'soft yellow rings' of hair look like a heap of gold coins.",
    not: {
      'A neighbour has secretly returned his money':
        "There is no money. What looks like gold is a child's hair.",
      'He dropped some coins there earlier that night':
        "His gold had been taken from him; there were no coins to drop. The glint is the child's curls.",
      'He has been dreaming of his lost gold all evening':
        "He has been 'standing at the door and looking out', not dreaming of gold. The mistake comes from the dim light and the yellow hair.",
    },
    more: "The mistake is a symbol as well as a trick of the light: the child will take the place of the gold in Silas's life.",
    tip: 'When a character misreads what they see, look for clues about the light, their eyes or their state of mind.',
  },
  "By the Hearth: What does 'the chasm in his consciousness' suggest?": {
    why: "A chasm is a deep gap. Silas closes his door 'unaware of the chasm in his consciousness', not knowing that he has blanked out while time passed; he notices only that 'the light had grown dim' and he was 'chilled and faint'.",
    not: {
      'He fell into a deep pit just outside his door':
        'The chasm is in his consciousness, his mind, not in the ground.',
      'He has been thinking very deeply about his loss':
        'A gap in consciousness is the opposite of deep thought: for a while he was not thinking at all.',
      'He has suddenly understood a painful truth':
        "He understands nothing new; he is 'unaware' that anything has happened.",
    },
    more: 'Silas suffers fits in which he goes still and loses track of time. Eliot describes one from the inside: he notices only the dimmer light and the cold.',
    tip: "If a word like 'chasm' is used about the mind, translate it: a deep gap in the ground becomes a gap in memory or awareness.",
  },
  'By the Hearth: Why does the writer let Silas, and the reader, believe for a moment that the gold has come back?':
    {
      why: "We share Silas's hope that it is 'his own gold' come back. Then, instead of hard coin, his fingers find something soft and warm. The false hope makes the real discovery, a sleeping child, all the more astonishing: 'the marvel', as the narrator calls it.",
      not: {
        'To show that Silas has now gone quite mad with grief':
          "He is amazed, not mad: he examines 'the marvel' closely and builds up the fire to see it better.",
        'To prove that his money was never really stolen':
          'The money is still gone. What he finds is a child, not his gold.',
        'To make us distrust everything that Silas says':
          'We see what he sees, and the passage explains the mistake. Nothing suggests he cannot be trusted.',
      },
      more: 'This is a twist inside a single paragraph: the writer raises an expectation and overturns it. The bigger the expectation, the stronger the surprise.',
      tip: 'For a structure question about a surprise, explain what the reader expects, what actually happens, and why the gap matters.',
    },
  'By the Hearth: Which detail best shows that the child stirs old, tender memories in Silas?': {
    why: "Seeing the child, Silas wonders, 'Could this be his little sister come back to him', the sister he 'had carried about in his arms' as a small boy. The child brings back a loving memory from long ago.",
    not: {
      "'He rose to his feet again, pushed his logs together'":
        'This is a practical action to get more light. It shows nothing of his memories.',
      "'it only lit up more distinctly the little round form'":
        'This describes what the firelight shows. It is about seeing the child, not remembering.',
      "'with soft yellow rings all over its head'":
        "This describes the child's hair. It explains the mistake about gold, not his memories.",
    },
    more: 'Memory matters in this novel: Silas has lost touch with his past. The child awakens feelings he has not had for years, which begins his recovery.',
    tip: "For memories, look for words that point back in time, such as 'come back' and 'when he was a small boy'.",
  },
  'Eppie: What has Eppie done to deserve punishment?': {
    why: "Silas tells her she was 'naughty to cut with the scissors and run away'. Those are her two misdeeds, and her muddy feet and clothes show where she ran.",
    not: {
      'Climbed on the bed and broken it':
        'No bed is broken. Silas names the scissors and running away.',
      'Torn her clothes and lost her boots':
        'Her clothes are muddy, not torn, and no boots are lost. Silas names the scissors and running away.',
      'Broken the loom and hidden the linen':
        "The loom is not broken. Silas later picks up 'the linen band', but her misdeeds are the scissors and running off.",
    },
    more: "Silas speaks in the short, simple sentences a parent uses to a toddler: 'Eppie must go into the coal-hole for being naughty.' Eliot lets us hear his voice directly.",
    tip: 'When a question asks what a character did, look for the speech where someone sums it up. Silas names both deeds in one line.',
  },
  "Eppie: Why does Silas hold the coal-hole door 'with a trembling sense that he was using a strong measure'?":
    {
      why: "To Silas, even shutting her in for a moment feels harsh. He 'half-expected' his words alone to be 'shock enough', and his trembling shows how much he hates being severe with the child he loves.",
      not: {
        'He is afraid that Eppie will escape and run off':
          'She can hardly escape while Silas holds the door. His trembling is about his feelings, not her escaping.',
        'He is shivering from the cold of the coal-hole':
          "He is outside it, holding the door. 'Trembling sense' describes his feelings, not cold.",
        'He is furious and fighting to control his temper':
          "Nothing shows anger. He 'half-expected' that words would be enough, and he lets her out at her first cry.",
      },
      more: 'Trembling is usually a sign of fear. Here Silas is afraid of what he is doing to Eppie, not of Eppie herself.',
      tip: 'Physical reactions like trembling are strong evidence of feeling. Quote them and say what they show.',
    },
  "Eppie: What does Eppie's 'Eppie in de toal-hole' show?": {
    why: "Half an hour after being cleaned, she 'peeped out at him with black face and hands again' and announces where she is. She has gone back in by herself: the punishment was a game to her.",
    not: {
      'She is frightened and is hiding from Silas':
        "She 'peeped out at him', pleased with herself, not hiding in fear.",
      'She is asking to be let out of the dark':
        "Earlier she cried 'Opy, opy' to be let out. This time she has chosen to go in.",
      'She is telling Silas that she is sorry':
        'Nothing shows she is sorry. She repeats the very thing she was punished with, as a game.',
    },
    more: "Eppie's baby talk, 'toal' for 'coal' and 'Opy' for 'open', makes her sound very young, which is part of the comedy and the charm.",
    tip: "Read a child's words alongside her actions. Here going back into the coal-hole tells us more than the words do.",
  },
  "Eppie: How does the narrator want readers to feel about Silas's attempt to punish Eppie?": {
    why: "The narrator smiles at it: 'perhaps, it would have been better if Eppie had cried more', and the plan ends in 'total failure'. We are amused by the failure but fond of Silas, who cannot bring himself to hurt her.",
    not: {
      'Bored, because nothing much really happens':
        'The scene is lively and comic, ending with Eppie happily back in the coal-hole.',
      'Angry, because he is so cruel to a small child':
        "He shuts her in only 'for a moment' and lets her out at her first cry. The narrator does not present this as cruelty.",
      'Worried, because Eppie is in real danger':
        'She is in no danger: she comes out black with coal dust and soon goes back in for fun.',
    },
    more: "Narrators show their attitude through tone. Dry asides, such as hoping a punishment would 'save time in future', let us share a joke with the narrator.",
    tip: "For a viewpoint question, quote the narrator's comment, not a character's, and say what tone it shows.",
  },
  "Eppie: The narrator says 'The weaving must stand still a long while this morning'. What does this suggest about Silas?":
    {
      why: "Silas stops work for as long as it takes, because 'Eppie must be washed, and have clean clothes on'. Caring for her now comes before the weaving, and he tells Dolly, 'If she makes me a bit o' trouble, I can bear it.'",
      not: {
        'He is glad of any excuse to stop weaving':
          "He hopes the punishment will 'save time in future', so he does not want to lose working time. He stops because Eppie needs him.",
        'Eppie has damaged the loom with the scissors':
          "Nothing says the loom is damaged. The weaving stops because Eppie 'must be washed, and have clean clothes on'.",
        'He is too upset to work after punishing her':
          'The narrator gives the reason: Eppie must be washed and dressed again. Her care, not his feelings, stops the loom.',
      },
      more: 'Before Eppie came, Silas wove from morning till night, year after year, to add to his gold. A morning lost to washing a muddy child shows how far his life has changed.',
      tip: "When a detail interrupts a character's routine, ask what has become more important to them, and link it to how they lived before.",
    },
  'The Ice: What was pulling the sledge?': {
    why: "The writer describes 'a low carriage, fixed on a sledge and drawn by dogs'. A team of dogs pulls the sledge across the ice.",
    not: {
      'A pair of horses': "No horses are mentioned. The sledge is 'drawn by dogs'.",
      'Some reindeer':
        "Reindeer can pull sledges in the far north, but this one is 'drawn by dogs'.",
      'Two of the sailors':
        'The sailors are on board the ship, watching through telescopes. The sledge is drawn by dogs.',
    },
    more: 'Dog sledges were the usual way to cross Arctic ice. The ordinary detail makes the scene feel real, even as the figure on the sledge seems unreal.',
    tip: "When a question uses a different verb, such as 'pulling', look for a matching one in the passage, such as 'drawn by'.",
  },
  'The Ice: Why does the sighting suggest that land may be nearer than the crew believed?': {
    why: "The crew believed they were 'many hundred miles from any land'. A traveller on a dog sledge must have set out from somewhere, so 'this apparition seemed to denote' that land was 'not, in reality, so distant'.",
    not: {
      'They can see mountains through the telescopes':
        'They use their telescopes to follow the traveller, not to see land. No mountains are mentioned.',
      'The ice has broken up and the sea is calm':
        'The ice breaks later, and that frees the ship. It says nothing about land.',
      'The traveller shouts to them that land is close':
        "The traveller is half a mile away and soon 'lost among the distant inequalities of the ice'. He says nothing to them.",
    },
    more: "An inference often works like a detective's reasoning: if this is true, then that must follow. Here the crew reason from a sledge to the land it must have come from.",
    tip: "For an inference, write out the chain: 'A sledge needs a starting point, so land must be nearer than they thought.'",
  },
  "The Ice: Why does the writer call the figure 'a being which had the shape of a man' rather than simply 'a man'?":
    {
      why: "The figure is 'apparently of gigantic stature'. Calling it 'a being' with 'the shape of a man' shows the writer is not sure it is human at all: it looks like a man, but is too huge to be one.",
      not: {
        'He is too far away to tell a man from a woman':
          "He is half a mile off, but the doubt is not about man or woman. 'Being' shows doubt about whether it is human.",
        "He wants to keep the traveller's name a secret":
          "He does not know the traveller's name. 'Being' shows uncertainty, not secrecy.",
        'He thinks it might be one of his own crew':
          'His crew are with him on the ship. The figure is far off on the ice.',
      },
      more: "Careful wording can create mystery. 'Being' and 'apparition' make the figure eerie, and readers who know the novel will guess who it is.",
      tip: 'When a writer avoids a simple word, ask why. The choice usually shows doubt about what is being described.',
    },
  'The Ice: The passage is written as a letter to someone at home. What does this form add?': {
    why: "The writer sets down events of 'Last Monday' because 'So strange an accident has happened to us, that I cannot forbear recording it'. A letter gives his own view, so we share his anxiety and wonder as he tells it.",
    not: {
      "It lets us hear the traveller's own thoughts":
        "The letter gives only the writer's view. The traveller is seen from half a mile away.",
      'It makes the events seem long ago and calm':
        "They happened 'Last Monday', and the writer is still stirred: he 'cannot forbear recording it'.",
      'It shows he never expects to see home again':
        "He writes that 'you will see me before these papers can come into your possession'. He expects to get home.",
    },
    more: 'Frankenstein begins with letters from an Arctic explorer to his sister in England. The letters frame the whole story and make it feel like a true record.',
    tip: 'In a viewpoint question about form, say what the form lets the reader see and what it keeps hidden.',
  },
  'The Ice: How does the mood change across the passage?': {
    why: "It begins in danger, the ship 'nearly surrounded by ice' in 'a very thick fog'. Then 'a strange sight' fills them with 'unqualified wonder'. Finally 'the ice broke, and freed our ship', and the writer can rest.",
    not: {
      'From calm, to rising panic, to disaster':
        'It begins in danger, not calm, and ends with the ship freed, not with disaster.',
      'From excitement to boredom as nothing happens':
        'The strange sight is the most exciting moment, and the ice breaking up matters greatly. Nothing is boring.',
      'From fear to anger at the strange traveller':
        "Nobody is angry with the traveller. He 'excited our unqualified wonder'.",
    },
    more: "Tracking how a mood shifts is a key structure skill. Mark the turning points: here 'when a strange sight suddenly attracted our attention' and 'before night the ice broke'.",
    tip: 'Answer a mood question in three steps: how it starts, what changes it, and how it ends.',
  },
  'In the Forest: Who had left the fire?': {
    why: "The narrator found 'a fire which had been left by some wandering beggars'. Someone else made it; he only comes across it.",
    not: {
      'Woodcutters gathering branches':
        "The narrator gathers branches himself. The fire was left by 'some wandering beggars'.",
      'Travellers lost in the forest':
        "The narrator is the one in the forest. The fire was left by 'some wandering beggars'.",
      'A shepherd and his dog': "No shepherd appears. The passage names 'some wandering beggars'.",
    },
    more: 'The narrator never meets the beggars. He learns from what people leave behind, which shows how alone he is.',
    tip: "Find the noun after 'by' in a passive sentence: 'left by some wandering beggars' tells you who did it.",
  },
  'In the Forest: Why would the first branches the narrator collected not burn?': {
    why: "He says, 'I quickly collected some branches; but they were wet, and would not burn.' Wet wood will not catch fire.",
    not: {
      'The fire had gone out':
        "The fire was still burning: he 'sat still watching the operation of the fire'.",
      'They were covered in leaves':
        'He covers the fire with dry wood and leaves later, at night. The first branches would not burn because they were wet.',
      'They were too thick': 'Thickness is not mentioned. The problem was wetness.',
    },
    more: "'Would not burn' is plain and short. Shelley gives the narrator a calm, exact voice as he describes each small event.",
    tip: "If the answer follows 'but' in the passage, read the words around it: 'but they were wet, and would not burn'.",
  },
  "In the Forest: What does the narrator mean by 'the same cause should produce such opposite effects'?":
    {
      why: "The fire gives him 'delight at the warmth', yet when he touches the 'live embers' he cries out in pain. The same fire both comforts and hurts him, and he finds this 'strange'.",
      not: {
        'Wet wood and dry wood burn in the same way':
          "The opposite: wet wood 'would not burn' at first. The 'opposite effects' are warmth and pain.",
        'The moon grows smaller and then larger again':
          "The moon's changes are in the first paragraph, but the 'same cause' here is the fire.",
        'Birds sing sweetly by day and harshly by night':
          'The birds differ by kind, sparrow against blackbird, not by time of day. The remark is about the fire.',
      },
      more: 'Moments like this show the narrator as thoughtful and curious: he does not simply react to pain but stops to wonder at it.',
      tip: 'When a narrator states a general idea, find the example that prompted it. Here it is the burn that follows the warmth.',
    },
  "In the Forest: How does the passage show the narrator's mind developing?": {
    why: "At first he only notices: his eyes become 'accustomed to the light', and he hears that birds sing differently. With the fire he goes further: 'I reflected on this', and 'by touching the various branches, I discovered the cause'. He moves from noticing to reasoning.",
    not: {
      'He forgets more each day as the moon changes':
        "The opposite: 'my mind received every day additional ideas'. He learns more, not less.",
      'He learns everything at once on the first night':
        "His learning is gradual, 'by degrees', across many days.",
      'He is taught step by step by a kind stranger':
        'Nobody teaches him. He learns alone, by watching and trying.',
    },
    more: 'The passage reads like a record of a mind growing, one discovery at a time. Shelley makes the reader watch learning happen from the inside.',
    tip: 'For a structure question about development, describe the starting point, the later point, and the step between them.',
  },
  'In the Forest: Which detail best shows that the narrator is learning about the world from the very beginning?':
    {
      why: "'I distinguished the insect from the herb' shows him learning a difference that most people know from early childhood. He is starting from nothing, sorting out even the simplest things around him.",
      not: {
        "'I lay on the ground'":
          'Lying down to sleep is an ordinary action. It shows nothing about learning.',
        "'I was in the greatest fear lest my fire should be extinguished'":
          'This shows how much he values the fire, but not that he is learning from the very beginning.',
        "'had been left by some wandering beggars'":
          'This tells us who left the fire. It is not about his learning.',
      },
      more: 'By making the narrator learn what every child knows, Shelley invites the reader to see the world afresh through his eyes.',
      tip: "For 'from the very beginning', look for the most basic lesson in the passage. The simpler the thing learnt, the stronger the evidence.",
    },
  "The Cottagers: What cause of the family's unhappiness does the narrator discover?": {
    why: "He says he discovered 'one of the causes of the uneasiness of this amiable family: it was poverty'. They do not have enough to live on.",
    not: {
      'The long winter':
        "Winter makes the cow give 'very little', but the cause he names is poverty.",
      Loneliness: 'The family have one another. Their trouble is poverty.',
      'A quarrel':
        "The family are 'amiable' and kind to one another. The cause he discovers is poverty.",
    },
    more: "'Uneasiness' and 'amiable' are mild, careful words. The narrator observes the family closely and politely, like someone trying hard to understand.",
    tip: 'When a passage uses a colon, what follows often explains what came before. Here the colon leads straight to the answer.',
  },
  'The Cottagers: What did the cottagers live on?': {
    why: "'Their nourishment consisted entirely of the vegetables of their garden, and the milk of one cow'. That is all they have, and the cow gives 'very little during the winter'.",
    not: {
      'Berries, nuts and roots from the wood':
        'That is what the narrator himself eats. The family live on vegetables and milk.',
      'Fish caught in a nearby river':
        'No river or fish is mentioned. They live on their garden and one cow.',
      'Bread and meat bought in the town':
        "They cannot afford to buy food. Their nourishment came 'entirely' from the garden and the cow.",
    },
    more: "'Entirely' matters: it tells us there is nothing else at all, which shows how little the family have.",
    tip: "Words like 'entirely', 'only' and 'never' make a statement complete. Notice them in retrieval questions.",
  },
  "The Cottagers: Why does the narrator stop taking food from the cottagers' store?": {
    why: "He had been taking 'a part of their store', but 'when I found that in doing this I inflicted pain on the cottagers, I abstained'. Once he sees that his stealing hurts them, he stops.",
    not: {
      'He is afraid of being caught':
        'He never mentions being caught. He stops because of the harm he is doing.',
      'He has found a better store':
        "He turns to 'berries, nuts, and roots' from the wood, which are poorer food, not a better store.",
      'The old man asks him to stop':
        'The family do not know he is there. Nobody asks him to stop.',
    },
    more: "'Abstained' means held back by choice. The narrator gives up easier food so that the family suffer less.",
    tip: "In a 'why' question, look for 'when' or 'because' clauses that link a discovery to an action.",
  },
  "The Cottagers: Which detail best shows that the family's selflessness touches the narrator?": {
    why: "The family go hungry so that the old man can eat. Straight after describing this, the narrator says, 'This trait of kindness moved me sensibly', meaning that it affected him deeply.",
    not: {
      "'they suffered that evil in a very distressing degree'":
        'This describes how badly the family suffer. It shows their hardship, not his feelings.',
      "'the milk of one cow, which gave very little'":
        "This is a fact about their food. It says nothing about the narrator's feelings.",
      "'I observed, with pleasure'":
        "This is his pleasure at seeing his own help work, when the youth can stay at home. It is about the firewood, not the family's selflessness.",
    },
    more: "'Sensibly' here means in his feelings, not wisely: an older meaning of the word. Older texts often use familiar words in unfamiliar senses.",
    tip: "When the claim is about a character's feelings, choose a quotation where the character says or shows what they feel.",
  },
  "The Cottagers: How does the narrator's account make readers feel about him?": {
    why: "He stops stealing when he sees it hurts the family, gathers their firewood in secret, and watches 'with pleasure' as the youth is freed for other work. His hidden kindness makes us see him as gentle and good.",
    not: {
      'We find him foolish for wasting all his time':
        'His work saves the youth days of labour. It is not wasted.',
      'We fear him as a thief who preys on the poor':
        'He did take food, but stopped as soon as he saw it hurt them, and now helps them instead.',
      'We think him cold and only curious about them':
        'He is touched by their kindness and acts to help. He is warm, not cold.',
    },
    more: 'Readers who know the story know that the narrator is a creature whom people fear. Letting him tell his own story shows us the kindness inside him first.',
    tip: 'For a viewpoint question about a narrator, ask what his actions, not just his words, show about him.',
  },
  'The By-Street: What is the door of the sinister building without?': {
    why: "The door 'was equipped with neither bell nor knocker'. With no way to call at it, the door seems unwelcoming, as if nobody wants visitors.",
    not: {
      'A lock and a key':
        'Locks are not mentioned in this passage. The missing things are a bell and a knocker.',
      'A handle and its hinges':
        "Handles and hinges are not mentioned. The passage says 'neither bell nor knocker'.",
      'A step and a porch':
        "There are steps: 'children kept shop upon the steps'. What is missing is a bell and a knocker.",
    },
    more: 'A door with no bell or knocker offers no way in for a polite visitor. Stevenson makes the door itself seem secretive.',
    tip: "'Neither ... nor' means not one and not the other. It is a quick sign that something is missing.",
  },
  "The By-Street: What does 'like rows of smiling saleswomen' suggest about the shop fronts?": {
    why: "The shop fronts stand 'with an air of invitation, like rows of smiling saleswomen'. The simile makes the bright, freshly painted shops seem to greet passers-by with a smile, inviting them in.",
    not: {
      'They are run by cheerful women shopkeepers':
        'The saleswomen are a comparison. The simile describes how the shop fronts look, not who runs them.',
      'They are dark and shuttered up for Sunday':
        "Even on Sunday the street 'shone out', with 'freshly painted shutters'. The shops look bright, not dark.",
      'They are crowded with eager weekday customers':
        'The street does trade well on weekdays, but the simile describes how the shop fronts look and invite.',
    },
    more: 'Similes like this make a place feel alive. Here the street seems to have a friendly personality of its own.',
    tip: 'Explain a simile by naming what the two things share: here a cheerful, inviting manner.',
  },
  "The By-Street: The building has 'a blind forehead of discoloured wall'. What is the effect of describing it like a face?":
    {
      why: "A forehead with no eyes beneath it is 'blind': the wall has 'no window'. Describing the building as a blank, unseeing face makes it eerie and lifeless, a face that gives nothing away.",
      not: {
        'It makes the building seem friendly and human':
          'A blind, discoloured face is not friendly. The human features make it strange and sinister.',
        'It shows that the wall has been freshly painted':
          "The wall is 'discoloured', the opposite of freshly painted.",
        'It suggests someone watches from a window':
          "The upper storey has no window at all. That is why its forehead is 'blind'.",
      },
      more: 'Personification can frighten as well as charm. A building given a face but no eyes feels hidden and unknowable, which suits a story about secrets.',
      tip: 'When a building is given a face, ask what kind of face it is and what that suggests about whoever is inside.',
    },
  'The By-Street: Why does Stevenson describe the cheerful street before the building?': {
    why: "The street 'shone out ... like a fire in a forest', with 'well-polished brasses' and 'gaiety'. Placing the 'sinister block of building' straight after makes its door look even darker by contrast.",
    not: {
      'To show the street matters more than the door':
        'The door is what Enfield points at and what the story is about. The street is there to make it stand out.',
      'To show that the whole neighbourhood is dingy':
        "The street shines 'in contrast to its dingy neighbourhood'. It is the bright exception, not part of the dinginess.",
      'To suggest the door belongs to a busy shop':
        "The door has 'neither bell nor knocker' and no trade at all. It is not a shop.",
    },
    more: 'Placing light beside dark is called juxtaposition. It is a favourite tool in Gothic stories, where a cheerful surface often hides something sinister.',
    tip: 'When a description turns from bright to dark, explain what each half does and why the order matters.',
  },
  'The By-Street: Which detail best shows that nobody has looked after the building for years?': {
    why: "The building 'bore in every feature, the marks of prolonged and sordid negligence'. 'Prolonged' means over a long time, and 'negligence' means lack of care: nobody has looked after it for years.",
    not: {
      "'on the left hand going east the line was broken'":
        'This only tells us where the building stands.',
      "'It was two storeys high; showed no window'":
        "This describes the building's shape, not its condition.",
      "'a certain sinister block of building thrust forward its gable'":
        'This makes the building seem threatening as it juts into the street, but it does not show neglect.',
    },
    more: "Stevenson backs the claim with detail: tramps strike matches on the door, and 'for close on a generation, no one had appeared to drive away these random visitors'.",
    tip: "The best evidence often holds the key idea in one word, here 'negligence'. Then you can explain that word in your answer.",
  },
  'A Frosty Night: By what time were the shops closed and the by-street solitary?': {
    why: "The passage says, 'By ten o’clock, when the shops were closed, the by-street was very solitary'. By ten the street is empty and quiet.",
    not: {
      'At midnight': 'Midnight is not mentioned. The shops were closed by ten.',
      'By nine': 'The passage gives ten o’clock, not nine.',
      'Soon after dusk': 'No time of dusk is given. The street was solitary by ten.',
    },
    more: 'Exact times and places make the story read like a true record, as if it were evidence in a case.',
    tip: "With times, quote the exact phrase. 'By ten' means at or before ten, which is why the street is already solitary.",
  },
  "A Frosty Night: What does 'he drew a key from his pocket like one approaching home' suggest?": {
    why: "He makes 'straight for the door' and takes out a key 'like one approaching home'. He has his own key and uses the door as easily as if he lived there: he comes and goes as he pleases.",
    not: {
      'He is a burglar who is about to break in':
        "A burglar would not have a key. He walks up openly, 'crossing the roadway to save time'.",
      'He has lost his way and is looking for home':
        "He makes 'straight for the door'. He knows exactly where he is going.",
      'He is a servant sent there on an errand':
        "Nothing suggests he is a servant. 'Like one approaching home' shows he treats the place as his own.",
    },
    more: 'Small details like this build mystery: who is this man, and why does he have a key to that door?',
    tip: "'Like one' introduces a comparison of manner. Ask what kind of person usually behaves that way.",
  },
  "A Frosty Night: What does 'the streets as clean as a ballroom floor' suggest about the night?": {
    why: "It is 'a fine dry night; frost in the air'. Bare in the frost and empty of people, the streets gleam like a polished dance floor, still and waiting.",
    not: {
      'Heavy rain has washed the streets clean':
        "It is 'a fine dry night'. The cleanness comes from frost and emptiness, not rain.",
      'A grand dance is being held nearby tonight':
        'The ballroom floor is a comparison. There is no dance.',
      'The streets are crowded with people dancing':
        "The street is 'very solitary'. Nobody is there but Utterson.",
    },
    more: "A simile can set a scene's mood. A gleaming, empty floor feels like a stage before a performance, which suits a moment of waiting.",
    tip: 'When you explain a simile, link the picture to the mood it creates, not only to what it looks like.',
  },
  'A Frosty Night: The first paragraph describes the silent street and a distant footstep before the man appears. What is the effect?':
    {
      why: "Stevenson lingers on the silence, where 'Small sounds carried far', and on 'an odd light footstep drawing near'. We wait with Utterson, hearing the steps approach before we see anyone, so suspense builds.",
      not: {
        'It shows the street is safe and cheerful':
          "The street is 'very solitary' and silent at night, and Utterson is on the watch. The mood is tense, not cheerful.",
        'It delays the action, as nothing important happens':
          'The delay is the point: the waiting builds tension before the meeting.',
        'It shows Utterson has fallen asleep at his post':
          "He is wide awake: 'his attention had never before been so sharply and decisively arrested'.",
      },
      more: "Delaying an arrival is a classic way to build suspense. The reader's imagination fills the silence, which is often more frightening than the sight itself.",
      tip: 'When a writer slows down before a key moment, say what the delay makes the reader feel.',
    },
  'A Frosty Night: Which detail best shows that Hyde is startled when Utterson stops him?': {
    why: "When Utterson touches him on the shoulder, 'Mr. Hyde shrank back with a hissing intake of the breath'. Shrinking back and gasping are sudden, involuntary reactions of shock.",
    not: {
      "'he answered coolly enough'":
        'This shows him recovering his calm, the opposite of being startled.',
      "'The steps drew swiftly nearer, and swelled out suddenly louder'":
        'This describes his footsteps before he is stopped. It shows nothing of his reaction.',
      "'very plainly dressed'": 'This describes his clothes, not his reaction.',
    },
    more: "'Hissing' makes Hyde sound like a snake. Stevenson gives him animal-like reactions, a hint that something about him is not quite human.",
    tip: 'For a reaction, choose the quotation from the moment of the event, and look for physical signs such as gasping or shrinking.',
  },
  "Holmes Explains: What does Holmes notice on Watson's instep?": {
    why: "Holmes says, 'Observation tells me that you have a little reddish mould adhering to your instep.' 'Mould' here means soft earth, and its reddish colour is the clue.",
    not: {
      'A fresh green grass stain':
        'No grass is mentioned. The clue is reddish earth from the dug-up pavement.',
      'A splash of grey mud':
        "The colour matters: the earth is a 'peculiar reddish tint', not grey.",
      'White dust from the road':
        'Dust is not mentioned. Holmes notices reddish earth on the instep.',
    },
    more: "'Mould' has several meanings: a fungus, a shape for casting, and soft, rich soil. Here it is the soil, which is why its colour can show where Watson has been.",
    tip: "Check an unfamiliar word against the rest of the passage: 'thrown up some earth' tells you what the 'mould' is.",
  },
  'Holmes Explains: How does Holmes know that Watson did not go to the post office to post a letter?':
    {
      why: "Holmes says, 'I knew that you had not written a letter, since I sat opposite to you all morning.' Watson cannot have posted a letter he never wrote.",
      not: {
        "He could see Watson's letters still on the desk":
          "On the desk he sees 'a sheet of stamps and a thick bundle of post-cards', not letters.",
        'Watson had told him he meant to send a telegram':
          "Watson says it was 'a sudden impulse' and that he had 'mentioned it to no one'.",
        'The post office in Wigmore Street takes no letters':
          'Nothing says the post office refuses letters. Holmes reasons from what he saw Watson do.',
      },
      more: 'Holmes builds his answer from small, checkable facts: where he sat, and what lies in the open desk. Nothing he says is a guess.',
      tip: 'When a detective explains, list the facts he uses. Retrieval answers often come from one of those facts.',
    },
  "Holmes Explains: What does Holmes mean by 'Eliminate all other factors, and the one which remains must be the truth'?":
    {
      why: "To 'eliminate' is to rule out. Holmes means: rule out every other possible explanation, and whatever is left must be the true one. Watson wrote no letter and already had stamps and post-cards, so only a telegram is left.",
      not: {
        'The simplest answer to a problem is never the right one':
          "Holmes calls his own answer 'simplicity itself'. Simple answers can be right.",
        'Gather every clue you can find before deciding anything':
          'Gathering clues is part of observation, but this sentence is about ruling out possibilities.',
        'Always trust your very first guess about a problem':
          "Holmes's method is the opposite of guessing: he checks and rules out each possibility.",
      },
      more: "This is one of Holmes's best-known rules of reasoning, and he states it again in other stories. It is a useful method in science as well as in detective work.",
      tip: "To explain a saying, first translate its key word ('eliminate' means rule out), then show it at work in the passage.",
    },
  'Holmes Explains: According to Holmes, what is the difference between observation and deduction?':
    {
      why: "Observation is noticing: Holmes sees the 'reddish mould' on Watson's instep. Deduction is reasoning from what is noticed: 'The rest is deduction', he says, before he works out the telegram. One gathers facts; the other draws conclusions.",
      not: {
        'Observation is guessing; deduction is simply knowing':
          'Neither is guessing. Observation is careful noticing, and deduction is careful reasoning.',
        'They are the same thing under two different names':
          "Watson suggests that 'the one to some extent implies the other', and Holmes answers, 'Why, hardly'.",
        'Deduction notices clues; observation reasons from them':
          'This has them the wrong way round. Holmes observes the earth and deduces the telegram.',
      },
      more: 'In everyday English, to deduce is to work something out from evidence. Exam answers use the same skill when they move from a quotation to what it suggests.',
      tip: 'When a passage defines two ideas, find the example given for each. The examples show the difference better than any definition.',
    },
  "Holmes Explains: Which detail best shows that Holmes is amused by Watson's astonishment?": {
    why: "As Holmes begins to explain, he 'remarked, chuckling at my surprise'. He laughs because Watson is astonished, which shows that the effect of his cleverness amuses him.",
    not: {
      "'I have mentioned it to no one'":
        "These are Watson's words, showing why he is puzzled. They do not show Holmes's amusement.",
      "'sending up thick blue wreaths from his pipe'":
        "Smoking his pipe shows Holmes relaxed, before Watson is astonished. It is not a reaction to Watson's surprise.",
      "'since I sat opposite to you all morning'":
        "This is part of Holmes's reasoning, a fact he uses, not a sign of amusement.",
    },
    more: "Watson tells the stories, and he often shows Holmes enjoying his own brilliance. The friendly teasing between them is part of the stories' charm.",
    tip: 'For a feeling, look for a reaction such as a laugh or a smile, and check whose reaction it is.',
  },
  'Miss Morstan: Who is Mrs. Cecil Forrester?': {
    why: "Miss Morstan says Holmes 'once enabled my employer, Mrs. Cecil Forrester, to unravel a little domestic complication'. Mrs. Forrester is the woman she works for.",
    not: {
      "Miss Morstan's mother": "She calls Mrs. Forrester 'my employer', not her mother.",
      "Holmes's housekeeper": 'Mrs. Forrester is someone Holmes once helped, not his housekeeper.',
      "An old friend of Watson's":
        "Watson does not know her. She is Miss Morstan's employer and a former client of Holmes.",
    },
    more: 'Miss Morstan names someone Holmes has helped before. Coming recommended by a former client is a natural way to approach a detective.',
    tip: "Look for words that name relationships, such as 'my employer', when a question asks who someone is.",
  },
  "Miss Morstan: What does 'a suggestion of limited means' tell us about Miss Morstan?": {
    why: "'Means' here is money, what a person has to live on. Her plain, untrimmed dress suggests she has little money to spend, even though she dresses 'in the most perfect taste'.",
    not: {
      'She means to stay only briefly':
        "'Means' is a noun here, as in 'a person of means'. It has nothing to do with intending.",
      'She is unwilling to say much':
        'The phrase is about her clothes and money. She goes on to explain why she has come.',
      'She has a narrow, limited mind':
        "'Limited' describes her money, not her mind. Watson praises her 'refined and sensitive nature'.",
    },
    more: "Watson reads her clothes the way Holmes reads clues: plain colours and no trimming point to a small income. He is learning his friend's method.",
    tip: "If a familiar word seems wrong, it may be a different word that looks the same. 'Means' as money is one example.",
  },
  "Miss Morstan: The first paragraph begins with her 'outward composure' and ends with 'intense inward agitation'. What does this shift show?":
    {
      why: "'Outward' and 'inward' are opposites. She enters 'with a firm step', calm on the surface, but as she sits 'her lip trembled, her hand quivered'. Her calm is a brave front over deep anxiety.",
      not: {
        'She grows nervous because Holmes is very rude to her':
          'Holmes politely places a seat for her. He is not rude at all.',
        'She is only pretending to be upset for sympathy':
          "Her trembling is shown as real, 'intense inward agitation'. Her calm is the part she puts on.",
        'She calms down once she has sat in her chair':
          'The opposite: her agitation shows just as she sits down.',
      },
      more: "A description that moves from outside to inside lets the reader see past a character's mask. Watson notices what Miss Morstan tries to hide.",
      tip: "Look for pairs of opposite words, such as 'outward' and 'inward'. They often mark the key contrast in a paragraph.",
    },
  "Miss Morstan: What does the narrator's description of Miss Morstan suggest about his feelings for her?":
    {
      why: "Watson admits her face lacks 'regularity of feature', yet he has 'never looked upon a face which gave a clearer promise of a refined and sensitive nature'. Such warm praise shows he is deeply taken with her.",
      not: {
        'He suspects she is lying about her troubles':
          "Watson praises her 'sweet and amiable' expression and believes her distress is real.",
        'He finds her plain and rather dull to look at':
          "He says her face is not conventionally beautiful, but he finds her eyes 'singularly spiritual and sympathetic'. He is charmed.",
        'He is jealous of her friendship with Holmes':
          'She has only just met Holmes. Watson shows admiration, not jealousy.',
      },
      more: "Watson boasts of 'an experience of women which extends over many nations and three separate continents', which makes his praise of Miss Morstan all the stronger, and a little comic.",
      tip: "A narrator's feelings show in the details he chooses to dwell on. A long, warm description usually means strong interest.",
    },
  "Miss Morstan: Which detail best shows Holmes's eagerness to hear a difficult case?": {
    why: "As soon as she calls her situation 'utterly inexplicable', 'Holmes rubbed his hands, and his eyes glistened'. Rubbing his hands and bright eyes show his delight at the prospect of a hard puzzle.",
    not: {
      "'he repeated thoughtfully'":
        'This shows Holmes calmly recalling Mrs. Forrester, not eagerness.',
      "'I believe that I was of some slight service to her'":
        'This is Holmes being modest about an old case. It shows no eagerness.',
      "'as I remember it, was a very simple one'":
        'Calling the old case simple shows he was not excited by it, the opposite of eagerness.',
    },
    more: "Holmes perks up only when Miss Morstan's case sounds stranger than her employer's. He is bored by simple problems and thrilled by difficult ones.",
    tip: 'Body language such as rubbing hands or shining eyes is strong evidence of a feeling. Quote it and name the feeling.',
  },
  'Pinchin Lane: How many dogs does Mr. Sherman threaten to let out?': {
    why: "Mr. Sherman shouts that he will 'open the kennels and let out forty-three dogs' on the man at his door.",
    not: {
      'Thirty-four': 'The digits are the wrong way round. He threatens forty-three dogs.',
      Three:
        "Three is the count he gives before he drops the 'wiper'. The dogs number forty-three.",
      Thirteen: 'Thirteen is not mentioned. He threatens forty-three dogs.',
    },
    more: 'The oddly exact number makes the threat funny. Who counts their dogs so precisely while shouting from a window at night?',
    tip: "When several numbers appear, match each one to what it counts. Here one number counts dogs and another counts down to the 'wiper'.",
  },
  "Pinchin Lane: Why is Mr. Sherman 'a little short' with Watson at first?": {
    why: "He explains that he is 'guyed at by the children', who come down the lane to wake him by knocking. He took Watson for one more prankster.",
    not: {
      'He has been woken by his barking dogs':
        "It is Watson's knocking that wakes him, not his dogs. He explains his temper by the children's pranks.",
      'He thinks Watson wants to steal a dog':
        'When Watson says he wants a dog, Mr. Sherman will not listen, but he never suggests theft. He thinks it is a prank.',
      'He dislikes Sherlock Holmes and his friends':
        "The opposite: 'A friend of Mr. Sherlock is always welcome'.",
    },
    more: "'Guyed at' means made fun of. The word comes from the guy, the figure of Guy Fawkes that is mocked and burnt on Bonfire Night.",
    tip: 'When a character explains their own behaviour, quote it. The reason may come later in the passage than the behaviour it explains.',
  },
  "Pinchin Lane: What does 'the words had a most magical effect' suggest?": {
    why: "The moment Watson says Holmes's name, 'the window instantly slammed down, and within a minute the door was unbarred and open'. The name works like a spell, changing Mr. Sherman from hostile to welcoming at once.",
    not: {
      'Watson has cast a spell to open the door':
        "'Magical' is a comparison. The name works as if by magic; no real spell is cast.",
      'The words scare Mr. Sherman into hiding':
        'He slams the window only to come down and open the door. He welcomes Watson in.',
      'Mr. Sherman does not hear Watson at all':
        "He hears clearly, and reacts at once to Holmes's name.",
    },
    more: "Using 'magical' for something ordinary is a playful exaggeration. It also shows how far Holmes's reputation reaches, even into a shabby lane in Lambeth.",
    tip: "When a word like 'magic' is used about ordinary events, explain what happens and why it seems as quick or surprising as magic.",
  },
  "Pinchin Lane: Why does Conan Doyle print Mr. Sherman's speech with spellings such as 'wiper' for viper and 'hain't'?":
    {
      why: "Spellings such as 'wiper' and 'hain't' copy how Mr. Sherman sounds. They show his rough, local way of speaking, so we hear him as Watson does.",
      not: {
        'To make him sound grand and well educated':
          "'Hain't got no fangs' is not grand speech. The spellings make him sound rough and down-to-earth.",
        'To show that he cannot spell properly':
          'These are spoken words, not his writing. The spellings show his accent, not his spelling.',
        'Because these spellings were correct then':
          "Watson's own words are spelt normally. The odd spellings belong to Mr. Sherman's speech only.",
      },
      more: "Writing an accent into the spelling of a character's speech is called writing in dialect. Dickens and Conan Doyle both used it to bring working people's voices onto the page.",
      tip: 'In an answer, say what the spelling shows about the speaker, such as class, region or mood, and how it brings the scene to life.',
    },
  'Pinchin Lane: Which detail best shows that Mr. Sherman is fond of his animals?': {
    why: "He scolds the stoat as if it were a naughty child: 'Ah, naughty, naughty, would you take a nip at the gentleman?' Speaking to it so gently shows affection, even for a creature with a 'wicked head and red eyes'.",
    not: {
      "'Keep clear of the badger; for he bites'":
        'This is a warning to Watson. It shows Mr. Sherman knows his animals, not that he is fond of them.',
      "'a lanky, lean old man, with stooping shoulders'":
        'This describes Mr. Sherman himself. It says nothing about his animals.',
      "'the window instantly slammed down'":
        "This is his reaction to Holmes's name. It has nothing to do with his animals.",
    },
    more: "Conan Doyle gives a minor character a whole little world: a badger, a stoat and a slow-worm that 'keeps the beetles down'. Details like these make a story's world feel real.",
    tip: 'When a character speaks to an animal, the tone of voice can be good evidence of how they feel about it.',
  },
  'The Eve of the War: How did most people imagine any men on Mars, if they imagined them at all?':
    {
      why: "The passage says that 'At most terrestrial men fancied there might be other men upon Mars, perhaps inferior to themselves and ready to welcome a missionary enterprise.' People pictured lesser beings who would welcome visitors from Earth.",
      not: {
        'Far wiser than us, and planning an invasion':
          "That is the truth the narrator reveals, not what people imagined. 'No one gave a thought' to danger from space.",
        'Exactly like us in every possible way':
          "People imagined Martians as 'perhaps inferior to themselves', not exactly like us.",
        'Too small to be seen through any telescope':
          'Nothing is said about size. People imagined them as inferior and welcoming.',
      },
      more: "'Missionary enterprise' means sending people to spread a religion. Some Victorians assumed that any other people they met would want to be taught by them.",
      tip: "'Fancied' means imagined. In a retrieval question, look for verbs of thinking, such as 'fancied' or 'believed', to find what people supposed.",
    },
  "The Eve of the War: Humans are compared to 'the transient creatures that swarm and multiply in a drop of water'. What does this suggest?":
    {
      why: 'A scientist with a microscope studies tiny, short-lived creatures in a drop of water. Wells says the Martians studied us in the same way, so to them we are as small and unimportant as microbes.',
      not: {
        'Humans are dirty and spread disease':
          'The comparison is about how small and closely watched we are, not about dirt or disease.',
        'Humans live mostly in or near the sea':
          'The drop of water is under a microscope. It is not about where humans live.',
        'Humans are clever enough to use microscopes':
          'In the comparison, the Martians hold the microscope and humans are the tiny creatures under it.',
      },
      more: 'Wells turns the usual picture round: humans are used to being the watchers, and suddenly they are the watched. That reversal makes the opening unsettling.',
      tip: 'In a comparison, work out who plays which part. Here the Martians are the scientists and humans are the creatures in the drop.',
    },
  "The Eve of the War: What is the effect of describing the Martian minds as 'vast and cool and unsympathetic'?":
    {
      why: "'Vast' makes their minds enormous, 'cool' makes them calm and calculating, and 'unsympathetic' means they feel no pity. Together the words make the Martians coldly superior and frightening.",
      not: {
        'They seem calm, friendly and easy to reason with':
          "'Cool' can mean calm, but 'unsympathetic' rules out friendly. They regard the earth 'with envious eyes'.",
        'They seem enormous in body but slow in mind':
          "'Vast' describes their intellects, their minds, not their bodies. They are clever, not slow.",
        'They seem confused and unsure what to do':
          "They 'slowly and surely drew their plans against us'. They know exactly what they are doing.",
      },
      more: "A list of three adjectives builds an impression step by step. The last word, 'unsympathetic', is the most chilling, so Wells puts it last.",
      tip: 'When a writer uses several adjectives, take each one in turn, then say what they create together.',
    },
  "The Eve of the War: Looking back on 'those departed days', how does the narrator see people's confidence then?":
    {
      why: "He says men went about 'with infinite complacency', 'serene in their assurance of their empire over matter', and finds it 'curious to recall' their habits. Looking back, he sees their confidence as foolish and blind to the danger watching them.",
      not: {
        'As sensible, since there was no danger':
          "There was danger: the Martians 'drew their plans against us'. Their calm was a mistake.",
        'As the fault of careless scientists':
          "He criticises the confidence of 'men' in general, not scientists in particular.",
        'As a brave and admirable calmness':
          "'Complacency' means smug, careless satisfaction. It is a criticism, not praise.",
      },
      more: 'The narrator writes after the invasion, so he knows what the people of the time did not. That gap between his knowledge and theirs creates dramatic irony.',
      tip: "Words like 'complacency' and 'serene' can be loaded. Ask whether the narrator admires or criticises what they describe.",
    },
  "The Eve of the War: Why does the paragraph end with the short sentence 'And early in the twentieth century came the great disillusionment'?":
    {
      why: "After a long paragraph about how unready people were, the short final sentence lands like a blow. 'The great disillusionment' hints at a terrible shock to come without saying what it was, so the reader wants to read on.",
      not: {
        'It sums up a peaceful century that is ending':
          "'Disillusionment' means losing a comforting belief. The sentence warns of a shock, not peace.",
        'It explains exactly how the war was won':
          'It explains nothing; it only hints that something happened.',
        'It shows the narrator has lost interest':
          'The opposite: the sentence is a hook, pulling the reader into the story.',
      },
      more: 'Ending a long build-up with a short sentence is a common way to create impact. Novels often open with a hint of disaster to grip the reader.',
      tip: 'When a paragraph ends with a short sentence after long ones, comment on the change in length and what it does.',
    },
  'The Falling Star: How does he first notice that the top of the cylinder is turning?': {
    why: "The movement is so slow that he sees it only 'through noticing that a black mark that had been near him five minutes ago was now at the other side of the circumference'.",
    not: {
      'He hears the top grinding loudly round':
        "He hears 'a muffled grating sound' only after noticing the mark, and it is muffled, not loud.",
      'The ash falls off in one large piece':
        'A large piece of ash does fall, but that comes before he sees the top turning.',
      'He sees steam rising from the end': 'No steam is mentioned. The clue is the black mark.',
    },
    more: 'Wells makes the movement painfully slow, which suits a moment of dawning horror. The reader notices the mark with Ogilvy, one step at a time.',
    tip: "When a question asks how a character first notices something, look for 'only through' or 'first' in the passage.",
  },
  'The Falling Star: Why does the falling ash disturb his idea that the Thing was simply cooling?':
    {
      why: "He 'fancied' that 'the cooling of the body might account for this', but 'the ash was falling only from the end of the cylinder'. Cooling would loosen ash all over; ash falling from one end suggests that something there is moving.",
      not: {
        'The ash is far too hot to have come from mere cooling':
          'The passage says nothing about how hot the ash is. The problem is where it falls from.',
        'Meteorites never cool down once they land':
          "They do cool. Ogilvy's idea of cooling is reasonable until he sees where the ash falls.",
        'The ash is rising into the air, not falling':
          "The ash is 'dropping off in flakes and raining down upon the sand'. It falls.",
      },
      more: 'Ogilvy reasons like a scientist: he tests his first idea against what he sees and drops it when the evidence does not fit.',
      tip: "In an inference question, look for words like 'but' and 'only'. They often mark the detail that changes a character's mind.",
    },
  "The Falling Star: What does 'brought his heart into his mouth' suggest?": {
    why: "To have your heart in your mouth is an idiom for a sudden jolt of fear. The sharp noise of the falling piece makes Ogilvy's heart leap with fright.",
    not: {
      'A wave of sickness from the heat':
        "The heat is 'excessive', but the phrase follows a sudden 'sharp noise'. It describes fright, not sickness.",
      'A shout of excitement': 'The phrase describes a feeling inside him, not a shout.',
      'A feeling of calm':
        'A sudden noise that brings his heart into his mouth is the opposite of calm.',
    },
    more: "Idioms are fixed phrases whose meaning is not literal. They are common in everyday speech, which makes Ogilvy's fright feel real and ordinary.",
    tip: 'If a phrase makes no sense literally, it may be an idiom. Say what it means and what it shows about the character.',
  },
  'The Falling Star: The first paragraph describes how still and silent the morning is. Why does Wells begin this way?':
    {
      why: "The morning is 'wonderfully still', with no birds and 'no breeze stirring', and 'the only sounds were the faint movements from within the cindery cylinder'. In such silence, every sound and movement from the Thing becomes startling.",
      not: {
        'It shows that nothing exciting will happen that day':
          'The stillness comes just before the most exciting moment of all, the top unscrewing.',
        'It shows the birds have been frightened away':
          "He 'did not remember hearing any birds', but no cause is given. The point of the silence is the contrast it creates.",
        'It suggests Ogilvy is daydreaming and imagining things':
          'Ogilvy is alert and watching closely. What he sees turns out to be real.',
      },
      more: 'Calm before a shock is a classic way to build suspense. The quieter the opening, the louder the sudden change feels.',
      tip: 'When a passage opens with calm, ask what follows. A writer often uses calm to make the next event hit harder.',
    },
  'The Falling Star: Which detail best shows the moment Ogilvy finally understands what the cylinder is?':
    {
      why: "'Then the thing came upon him in a flash.' After slowly noticing clues, Ogilvy suddenly understands that the cylinder is 'artificial' and hollow, with something inside unscrewing the top.",
      not: {
        "'For a minute he scarcely realised what this meant'":
          'This shows him not yet understanding. The moment of realisation comes later.',
        "'dimly perceiving even then some evidence of design'":
          "This is an early, faint hint of understanding, only 'dimly', not the full moment.",
        "'He fancied even then that the cooling of the body might account for this'":
          'This is his first, mistaken explanation, before he understands.',
      },
      more: 'Wells builds the realisation in stages: dim perception, a wrong theory, then a flash of understanding. The reader is led along the same path.',
      tip: "For the moment something happens, look for time words such as 'then' or 'in a flash', which mark the turning point.",
    },
  'The Big Barn: Where do the pigs settle down?': {
    why: "The passage says the pigs 'settled down in the straw immediately in front of the platform'. They take the front places, closest to the speaker.",
    not: {
      'Up in the rafters beside the fluttering pigeons':
        "It is the pigeons that 'fluttered up to the rafters'. The pigs settle in the straw.",
      'On the window-sills beside the hens':
        'The hens perch on the window-sills. The pigs are in the straw at the front.',
      'Behind the sheep and the cows':
        "It is the other way round: 'the sheep and cows lay down behind the pigs'.",
    },
    more: "Orwell's careful seating plan is worth noticing. Readers who know the story may see a hint in the pigs taking the front places at the very first meeting.",
    tip: "In a retrieval question about place, check who is next to whom. 'Behind the pigs' and 'behind the sheep' are easy to muddle.",
  },
  "The Big Barn: Boxer and Clover set down their hoofs 'with great care lest there should be some small animal concealed in the straw'. What does this show?":
    {
      why: "'Lest' means in case. The huge horses place their 'vast hairy hoofs' carefully in case a small animal is hidden in the straw, which shows they are gentle and protective towards smaller creatures.",
      not: {
        'They are afraid of being bitten by rats':
          "The care is for the small animals' sake, in case they are trodden on, not for the horses' own safety.",
        'They are old and their legs are weak':
          "Boxer is 'as strong as any two ordinary horses'. Their slow steps come from care, not weakness.",
        'They are searching the straw for food':
          'They walk slowly so as not to tread on anything. They are not looking for food.',
      },
      more: "Contrast makes the gentleness stand out: 'vast hairy hoofs' and 'tremendous powers of work' beside 'great care' for tiny creatures. Strength used gently is a sign of goodness.",
      tip: "When a sentence says why a character acts, look for words like 'lest', 'so that' or 'for fear', which introduce the reason.",
    },
  "The Big Barn: What does 'cynical' suggest about Benjamin's remarks?": {
    why: "Cynical remarks sneer at things and expect the worst. Benjamin says 'that God had given him a tail to keep the flies off, but that he would sooner have had no tail and no flies'. Even a gift becomes something to grumble about.",
    not: {
      'He is cheerful and full of jokes':
        "His remarks may be dry, but he 'never laughed' and is 'the worst tempered'. He is not cheerful.",
      'He is shy and hates to be heard':
        "He 'seldom talked', but because he is gloomy, not shy. When he does talk, he sneers.",
      'He gives wise and helpful advice':
        'His remark about the tail helps nobody. Cynical remarks find fault rather than help.',
    },
    more: "Orwell defines the word by example: 'cynical' is followed by 'for instance' and a remark that shows it. Writers often explain a hard word in this way.",
    tip: "If a word is followed by 'for instance' or 'such as', the example will show you what it means.",
  },
  "The Big Barn: What is the narrator's tone in describing the animals' arrival?": {
    why: "The narrator describes each animal plainly, like a careful report: 'First came the three dogs ... and then the pigs'. Small touches of humour, such as Clover never getting 'her figure back after her fourth foal', make the tone gently funny.",
    not: {
      'Excited, and full of breathless exclamations':
        'There is not a single exclamation. The sentences are calm and orderly.',
      'Angry, and mocking every animal in turn':
        "The humour is gentle. Boxer is 'universally respected', and Clover is 'motherly'.",
      'Sad, and full of pity for the animals':
        'Nothing here asks for pity. The tone is plain and lightly amused.',
    },
    more: 'Animal Farm is told in a simple, almost fairy-tale voice. That plain tone makes the story easy to follow, and it makes later shocks feel all the colder.',
    tip: "To describe tone, choose two precise words, such as 'plain' and 'wry', and quote a phrase that shows each.",
  },
  'The Big Barn: Which detail best suggests that Benjamin is warmer than he seems?': {
    why: "Benjamin seems cold and sour, but 'the two of them usually spent their Sundays together' shows a loyal friendship with Boxer. Spending his free time with a friend reveals a warmth he never admits.",
    not: {
      "'Alone among the animals on the farm he never laughed'":
        'This makes him seem gloomy, not warm.',
      "'he would sooner have had no tail and no flies'":
        'This is one of his sour remarks. It shows his cynicism.',
      "'the oldest animal on the farm, and the worst tempered'":
        'This describes his age and bad temper. It makes him seem colder, not warmer.',
    },
    more: "Orwell shows character through actions as well as words. Benjamin's words are sour; his Sundays tell another story.",
    tip: "When a character's words and actions disagree, the actions are often the better evidence of their true feelings.",
  },
  'The Farmhouse: Who butts the farmhouse door open?': {
    why: "After the animals hesitate outside, 'Snowball and Napoleon butted the door open with their shoulders'. Two pigs lead the way in.",
    not: {
      'Boxer and Mollie':
        'Boxer kicks in the beer barrel, and Mollie stays behind upstairs. Snowball and Napoleon open the door.',
      'Mollie and Benjamin': 'Mollie appears later, upstairs. Snowball and Napoleon open the door.',
      'Bluebell, Jessie and Pincher':
        'The dogs are not mentioned here. Snowball and Napoleon open the door.',
    },
    more: 'Small moments like this show who takes the lead. The other animals file in after the two pigs.',
    tip: 'When a question asks who, check whether the passage names two people rather than one.',
  },
  'The Farmhouse: What is Mollie doing when the others find her?': {
    why: "Mollie 'had taken a piece of blue ribbon from Mrs. Jones's dressing-table, and was holding it against her shoulder and admiring herself in the glass'. She is posing in the mirror with a ribbon.",
    not: {
      'Lying asleep on a feather mattress':
        'The feather mattresses are among the luxuries the animals gaze at. Mollie is admiring herself in the glass.',
      'Eating one of the hams down in the kitchen':
        'The hams are taken out for burial, not eaten. Mollie is upstairs in the best bedroom.',
      'Hiding from the others under the bed':
        'She is in plain view in front of the glass, not hiding.',
    },
    more: "Ribbons belong to the world of humans, who dress up their animals. Mollie's love of them shows she misses the comforts of the old life.",
    tip: "For 'what is she doing', find the main verbs in the sentence: here 'holding' and 'admiring'.",
  },
  "The Farmhouse: What does 'A unanimous resolution was passed' mean?": {
    why: "'Unanimous' means agreed by everyone, and a 'resolution' is a formal decision. Every animal agreed that the farmhouse should be kept as a museum.",
    not: {
      'One leader made the decision alone':
        "'Unanimous' means all together, not one alone. 'All were agreed', the passage adds.",
      'The animals promised to try harder':
        'A resolution here is a decision, not a promise to try harder.',
      'The vote was won by a narrow margin':
        "A narrow margin means many disagreed. 'Unanimous' means nobody did.",
    },
    more: 'The animals speak like a council or a parliament, passing resolutions. Orwell borrows the language of politics, which suits a story about how power works.',
    tip: "Break a formal phrase into its words: 'unanimous' (everyone agrees) and 'resolution' (a decision). Then put them back together.",
  },
  "The Farmhouse: Why are the hams taken out of the kitchen 'for burial'?": {
    why: 'Hams are pig meat. The animals do not eat them or throw them away: they bury them, as people bury their dead. They treat the hams as the bodies of fellow animals that deserve respect.',
    not: {
      'Mr. Jones ordered it before he was driven off':
        'Mr. Jones has been driven out. The animals decide this for themselves.',
      'The hams have gone bad and smell terrible':
        "Nothing says the hams are bad. 'Burial' shows respect for the dead, not getting rid of rubbish.",
      'The pigs want to hide the food to eat later':
        "Food hidden to be eaten later is not 'for burial'. The animals honour the hams instead.",
    },
    more: 'The detail is darkly comic: the animals see what humans call food as the remains of their own kind. It shows how differently they see the farm.',
    tip: "When a word seems surprising, such as 'burial' for hams, ask what it shows about the characters' point of view.",
  },
  'The Farmhouse: Which detail best shows that the animals respect the house rather than wanting to use it?':
    {
      why: "The animals enter 'walking with the utmost care for fear of disturbing anything'. They move through the house like visitors to a museum, careful not to change or use anything they see.",
      not: {
        "'Snowball and Napoleon butted the door open with their shoulders'":
          'This is how they get in. It shows boldness, not respect for what is inside.',
        "'the barrel of beer in the scullery was stove in'":
          'Smashing the beer barrel destroys something. It is not respect for the house.',
        "'They were just coming down the stairs'":
          'This only tells us where they were when Mollie was missed.',
      },
      more: "The animals break only the beer barrel and remove the hams, things linked to the humans' drinking and eating. Everything else is left exactly as it was.",
      tip: "For a 'best shows' question, test each option against both halves of the claim: here, respecting the house and not wanting to use it.",
    },
  'The Harvest: Why was it hard for the animals to use the farm tools?': {
    why: "'The implements had been designed for human beings and not for animals', and 'no animal was able to use any tool that involved standing on his hind legs'. The tools suit people who stand upright.",
    not: {
      'They had been broken in the Rebellion':
        'Nothing says the tools were broken. The problem is that they were made for humans.',
      'The pigs would not let anyone touch them':
        "The pigs help: they 'could think of a way round every difficulty'.",
      'Mr. Jones had taken them all away':
        "The tools are still there: the horses harness themselves to 'the cutter or the horse-rake'.",
    },
    more: 'Standing on two legs marks the difference between humans and animals in this story. It is a detail worth remembering as the novel goes on.',
    tip: 'Some retrieval questions need two linked facts. Here: the tools were made for humans, and using them meant standing upright.',
  },
  'The Harvest: How much sooner than Jones and his men did the animals finish the harvest?': {
    why: "'In the end they finished the harvest in two days' less time than it had usually taken Jones and his men.' Two days' less time means two days sooner.",
    not: {
      'Two weeks': 'The passage says two days, not two weeks.',
      'In half the time': "No halving is mentioned. They finished in two days' less time.",
      'Three days': 'The passage gives two days, not three.',
    },
    more: "Orwell piles up the harvest's successes: faster, bigger, and 'no wastage whatever'. The list shows the animals' pride in what they have achieved.",
    tip: "Read a number with its phrase: 'two days' less time' is a comparison, so turn it into 'two days sooner'.",
  },
  "The Harvest: What do the ducks and hens 'carrying tiny wisps of hay in their beaks' show?": {
    why: "'Every animal down to the humblest worked', and even the ducks and hens carry what they can, 'tiny wisps' in their beaks, 'to and fro all day in the sun'. Even the smallest animals give all they have to the work.",
    not: {
      'The ducks and hens are lazy and do very little':
        "They 'toiled to and fro all day in the sun'. Tiny loads carried all day show effort, not laziness.",
      'The hay is too heavy for the bigger animals':
        'The horses pull the cutter and the rake. The birds carry wisps because wisps are all they can carry.',
      'The birds are building nests for the winter':
        "They are 'turning the hay and gathering it' for the harvest, not building nests.",
    },
    more: "Orwell's image is touching and a little comic: a hen with one wisp of hay. It captures the shared hope of the early days on the farm.",
    tip: "For an image, explain both what it shows literally and what it suggests about the characters' feelings or beliefs.",
  },
  "The Harvest: The narrator says the pigs 'did not actually work' while 'every animal down to the humblest' did. What does this contrast suggest?":
    {
      why: "While the others toil, the pigs 'directed and supervised'. The narrator calls this 'natural' because of their 'superior knowledge', but the contrast shows the pigs already setting themselves above the others, giving orders instead of working.",
      not: {
        'The other animals resent the pigs and will rebel':
          "Nobody complains in this passage. The animals accept the pigs' leadership.",
        'The farm work is shared out equally among all':
          'The contrast shows the opposite: everyone works except the pigs.',
        'The pigs are too weak to do heavy farm work':
          "Weakness is never mentioned. The pigs supervise because of their 'superior knowledge'.",
      },
      more: "Orwell lets the facts speak without comment. The plain statement that the pigs 'did not actually work' invites the reader to see what the animals do not.",
      tip: 'When a narrator reports something without judging it, ask whether the reader is meant to judge it. That gap is often where the meaning lies.',
    },
  'The Harvest: Which detail best shows that the animals are honest now that they work for themselves?':
    {
      why: "The passage ends: 'And not an animal on the farm had stolen so much as a mouthful.' Working for themselves, the animals take nothing for themselves alone, so nobody steals.",
      not: {
        "'There was no wastage whatever'":
          'This shows the animals were careful and thorough, not that they were honest.',
        "'the hens and ducks with their sharp eyes'":
          'This explains how the last stalks were gathered. It shows sharp eyes, not honesty.',
        "'they knew every inch of the field'":
          "This shows the horses' knowledge of the field, not honesty.",
      },
      more: "Ending on 'not ... so much as a mouthful' stresses how complete the honesty is. Placing it last makes it the high point of the harvest's success.",
      tip: "Two options can look alike, as 'no wastage' and 'not stolen' do here. Match the exact claim: honesty means not stealing.",
    },
  'The Yard: Whose terrified neighing first calls the animals to the yard?': {
    why: "'The terrified neighing of a horse sounded from the yard', and the narrator adds, 'It was Clover's voice.' She has seen something that horrifies her.",
    not: {
      "Squealer's":
        'Squealer is the pig the animals then see walking. The neighing is a horse, and the passage names Clover.',
      "Napoleon's":
        'Napoleon comes out of the farmhouse later, with his dogs. The neighing is a horse, and the passage names Clover.',
      "Benjamin's":
        "Benjamin is a donkey, and the neighing is a horse's. The passage names Clover.",
    },
    more: "Orwell holds back what Clover has seen: 'Then they saw what Clover had seen.' The reader has to wait for the next line to find out.",
    tip: "If a question asks whose, look for a possessive in the passage, such as 'Clover's voice'.",
  },
  'The Yard: What does Napoleon carry in his trotter?': {
    why: 'In a paragraph of one sentence, straight after Napoleon appears, we are told that he carries a whip in his trotter. A whip is what the humans used on the animals.',
    not: {
      'A walking stick':
        "Some pigs look as if they 'would have liked the support of a stick', but Napoleon carries a whip.",
      'A set of keys': 'Keys are not mentioned. The passage names a whip.',
      'A clay pipe': 'No pipe of any kind is mentioned in this passage. Napoleon carries a whip.',
    },
    more: "A trotter is a pig's foot. A pig holding a whip in its foot is both absurd and frightening, a picture of how far things have changed.",
    tip: 'Short paragraphs often hold key facts. When a sentence stands alone, read it closely.',
  },
  "The Yard: What does 'It was as though the world had turned upside-down' suggest?": {
    why: 'The animals had always held that four legs are good and two legs bad. Seeing pigs walk upright like humans, they feel that everything they believed has been reversed, as if the world itself had flipped over.',
    not: {
      'The animals feel dizzy and sick with fear':
        "They are terrified, but 'upside-down' describes how their world has been reversed, not dizziness.",
      'An earthquake has shaken the whole farm':
        "Nothing has been physically shaken. The phrase is a comparison: 'as though'.",
      'The pigs are walking around on their heads':
        "The pigs walk on their hind legs. 'Upside-down' describes the animals' sense of shock.",
    },
    more: "'As though' tells us a comparison is coming. Here it turns a shock of the mind into a physical picture the reader can feel.",
    tip: "When you meet 'as though' or 'as if', explain both the picture and the feeling it stands for.",
  },
  "The Yard: Why does Orwell give 'It was a pig walking on his hind legs.' a paragraph of its own?":
    {
      why: "After building up to it with 'Then they saw what Clover had seen', Orwell sets the sight alone on a line. Standing by itself, the short, plain sentence hits the reader with the same shock the animals feel.",
      not: {
        'It shows that the pig fell over straight away':
          "The pig does not fall: Squealer strolls 'with perfect balance'.",
        'It marks the start of a new chapter':
          'The story carries straight on in the next paragraph. It is the same scene.',
        'It shows that the narrator is bored by it':
          'The opposite: setting it apart shows how important and shocking it is.',
      },
      more: 'Orwell uses the same trick again a moment later, when Napoleon appears. Single-line paragraphs are a strong structural tool for moments of shock.',
      tip: 'When a paragraph is only one sentence long, ask why the writer isolated it. The answer is usually emphasis.',
    },
  "The Yard: Why do the sheep burst into bleating 'just at that moment, as though at a signal'?": {
    why: "Just as the animals 'might have uttered some word of protest', the sheep burst into their chant. 'As though at a signal' suggests the timing is planned, so that the noise drowns any protest before anyone can speak.",
    not: {
      'They are frightened of the dogs and the whip':
        "The animals fear the dogs, but the sheep's timing, 'as though at a signal', suggests a plan, not fear.",
      'They are cheering Clover for raising the alarm':
        'Their chant praises two legs, not Clover. It has nothing to do with her.',
      'They are hungry and want to be given supper':
        'Supper is not mentioned. The bleating comes at the exact moment protest might begin.',
    },
    more: "The new chant, 'two legs BETTER', reverses the slogan the animals once lived by. Changing the words of a slogan is one way the powerful rewrite what everyone believes.",
    tip: "Words like 'as though at a signal' hint that something is planned. Ask who gains from the timing.",
  },
  "If: What does the poem tell the reader to do with 'Triumph and Disaster'?": {
    why: "The poem says, 'If you can meet with Triumph and Disaster / And treat those two impostors just the same'. Success and failure should both be met in the same steady way.",
    not: {
      'Celebrate the first and hide from the second':
        "The poem asks you to treat them 'just the same', not one with joy and the other with fear.",
      'Build them both up again with worn-out tools':
        "Building up 'with worn-out tools' is about the things you gave your life to, broken. Triumph and Disaster are to be treated the same.",
      'Share them both with crowds and with Kings':
        'Crowds and Kings come in the last stanza, about keeping your virtue. They are not linked to Triumph and Disaster.',
    },
    more: 'Kipling gives Triumph and Disaster capital letters, turning them into people you might meet. This is personification.',
    tip: 'In a poem, a sentence often runs on over a line break. Read on to the end of the sense, not just the end of the line.',
  },
  "If: What does 'keep your head when all about you / Are losing theirs' mean?": {
    why: "To keep your head is an idiom for staying calm, and to lose your head is to panic. The line means staying calm and clear-thinking when everyone around you is panicking, and even 'blaming it on you'.",
    not: {
      'Think for yourself in every argument':
        "Trusting yourself comes in the next line, 'trust yourself when all men doubt you'. This line is about staying calm.",
      'Remember facts when others forget them':
        'Keeping something in your head can mean remembering it, but to keep your head is to stay calm, and to lose it is to panic.',
      'Stand tall when others bow their heads':
        'Bowing heads is not mentioned. Losing your head means panicking.',
    },
    more: "The line plays on the literal sense: 'losing theirs' could sound like losing their actual heads. Idioms like this make advice memorable.",
    tip: 'When a phrase uses a part of the body, such as head or heart, check whether it is an idiom before taking it literally.',
  },
  'If: Who is speaking, and to whom, as the last line reveals?': {
    why: "The last line ends 'you'll be a Man, my son'. 'My son' shows that a parent is speaking to a son, so the whole poem is advice passed from one generation to the next.",
    not: {
      'A boy promising to please his father':
        "The speaker gives the advice; the son receives it. The 'you' throughout is the son.",
      'A king speaking to his loyal army':
        "Kings are mentioned only as people to 'walk with'. 'My son' shows a parent speaking.",
      'A teacher talking to a class': "'My son' is addressed to one person, a son, not a class.",
    },
    more: "Nobody is named as the speaker until 'my son' in the very last line. Read again with that in mind, every 'If' sounds like a parent's hope for a child.",
    tip: "In a viewpoint question, check the pronouns: 'you' and 'my son' tell you who is speaking to whom.",
  },
  "If: Why does the speaker call Triumph and Disaster 'impostors'?": {
    why: 'An impostor pretends to be something he is not. Calling success and failure impostors suggests that neither is what it seems: triumph is not as wonderful, nor disaster as final, as it feels at the time.',
    not: {
      'Both are people who have lied to the speaker':
        'They are personified, but they are not real people. The word suggests that both are deceptive.',
      'Both are enemies who will set a trap for you':
        "The trap in the poem is set by 'knaves' twisting your words. Triumph and Disaster are not called enemies.",
      'Both always arrive together, side by side':
        'The poem says to treat them the same, not that they arrive together.',
    },
    more: "These lines are so well known that they are written above the players' entrance to Centre Court at Wimbledon.",
    tip: 'For one precise word, give its meaning, then say what it suggests about the thing it describes.',
  },
  "If: The whole poem is built from 'If' clauses, and the main clause comes only at the end. What is the effect?":
    {
      why: "Clause after clause begins with 'If', setting test after test, and the answer is held back until the last two lines: 'Yours is the Earth'. Because we wait through the whole list, the reward at the end feels hard-won.",
      not: {
        'It shows that the speaker cannot decide what to say':
          "The poem is carefully built, with a regular pattern of 'If' clauses. It is deliberate, not undecided.",
        'It turns the poem into questions with no answers':
          "The 'If' clauses are conditions, not questions, and the last lines give the answer.",
        'It suggests the rules do not matter in the end':
          'The ending rewards those who meet every condition. The rules matter more than anything.',
      },
      more: 'The poem is one long sentence across thirty-two lines. Holding back the main clause creates suspense, so the ending lands with full force.',
      tip: 'In a structure answer, say where the key idea comes and what the build-up before it does to the reader.',
    },
  'La Belle Dame sans Merci: What has happened to the sedge by the lake?': {
    why: "The first stanza says, 'The sedge is withered from the lake'. The plants by the water have dried up and died back, as they do at the end of the year.",
    not: {
      'It has flowered': "'Withered' is the opposite of flowering. The plants have dried up.",
      'It has been harvested':
        "'The harvest's done', but that is about the crops. The sedge has withered.",
      'It has turned gold': 'The harvest is done, but the sedge has withered, not turned gold.',
    },
    more: "Sedge is a grass-like plant that grows near water. Its withering, with 'no birds' singing, makes the setting as lifeless as the knight.",
    tip: "If a plant word is unfamiliar, the verb with it usually tells you enough: 'withered' shows decay.",
  },
  "La Belle Dame sans Merci: What does 'Alone and palely loitering' suggest about the knight?": {
    why: "'Alone' shows he is by himself, 'palely' that he looks ill and drained, and 'loitering' that he hangs about with no purpose. A knight should ride on a quest, but this one lingers, lost and lonely.",
    not: {
      'He is hiding from his enemies by the lake':
        'No enemies are mentioned. He is lingering without purpose.',
      'He is waiting happily for the lady to return':
        "He is 'haggard and so woe-begone'. He is not happy.",
      'He is resting after winning a great battle':
        'Nothing mentions a battle. His paleness comes from his meeting with the lady.',
    },
    more: "Keats's sounds help the meaning: the soft 'l' sounds in 'Alone and palely loitering' slow the line down, like the knight himself.",
    tip: 'Take a phrase word by word: say what each word adds, then sum up the picture they make together.',
  },
  'La Belle Dame sans Merci: Who speaks the first three stanzas, and who speaks the rest?': {
    why: "The first three stanzas question the knight: 'O what can ail thee, knight-at-arms'. From the fourth stanza he answers: 'I met a lady in the meads'. A questioner speaks first, then the knight tells his story.",
    not: {
      'The knight first, then the lady':
        "The opening stanzas are spoken to the knight, so he is not speaking them. The lady's words are only reported.",
      'The lady first, then the knight':
        'The lady never speaks for herself; the knight reports what she said.',
      'The pale kings first, then the knight':
        "The pale kings appear only in the knight's dream, near the end.",
    },
    more: "A poem built from a question and an answer is like a very short play. The questioner's view makes the knight's sorry state seem stranger still.",
    tip: "In a poem, look for 'I', 'thee' and 'you' to work out who is speaking and to whom.",
  },
  'La Belle Dame sans Merci: The last stanza repeats words from the first. What is the effect?': {
    why: "The knight ends where the poem began: 'Alone and palely loitering', by withered sedge where 'no birds sing'. The poem circles back, and so does he: he is trapped in the same cold, lonely place.",
    not: {
      'It shows that the knight has escaped at last':
        "The opposite: he is still there, 'Alone and palely loitering'.",
      'It shows that the questioner has forgotten':
        "The last stanza is the knight's answer: 'this is why I sojourn here'. Nobody has forgotten anything.",
      'It shows that the season is turning to springtime':
        'The sedge is still withered and no birds sing. Nothing has changed.',
    },
    more: "A circular structure can suggest being stuck. Here the repetition makes the knight's sorrow feel endless.",
    tip: 'When an ending repeats the opening, ask whether it suggests completion or being trapped. Explain which, with the repeated words.',
  },
  'La Belle Dame sans Merci: Which line best suggests that the lady is not quite human?': {
    why: "The knight calls her 'a faery's child'. A faery is a magical being, so the lady belongs to the fairy world, not the ordinary one, which explains her strange power over him.",
    not: {
      "'Her hair was long, her foot was light'":
        'Long hair and a light step describe a graceful woman. They do not show she is magical.',
      "'I made a garland for her head'":
        "This is the knight's action, a gift of flowers. It says nothing about what she is.",
      "'I set her on my pacing steed'":
        'This shows the knight letting her ride his horse. It is not about her nature.',
    },
    more: "Keats spells 'faery' in an old-fashioned way, which suits the poem's medieval world of knights and ballads.",
    tip: "For 'not quite human', look for words from the world of magic or legend, such as 'faery' or 'elfin'.",
  },
}
