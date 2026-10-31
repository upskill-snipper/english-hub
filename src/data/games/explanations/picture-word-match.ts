import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Picture Word Match: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/picture-word-match.ts). Written with AI
 * on 16 October 2026 and checked against each question and its options, as
 * the founder decided (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: explanations for the 195 questions
 * added (a word in a sentence, a word in a short text or dialogue, eight of
 * them real lines from out-of-copyright novels, and 34 new pictures), and
 * every older one rewritten so that no why, more or tip names the answer to a
 * question that can be dealt in the same round. Written with AI and checked
 * against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Checked on 24 October 2026 by a second reader, not the writer: eleven
 * explanations rewritten, five for the questions the check changed
 * (firefighter, sunglasses, glasses, the Jane Eyre sofa, and Pride and
 * Prejudice in place of a Jane Eyre line) and six for errors: a tip that said
 * "niece" and "nice" sound alike, Tiny Tim called the youngest Cratchit,
 * in-laws said to come only from your own marriage, a train said unable to
 * reach France, and the tips for "tired" and "recipe". The bank's docblock
 * lists the question fixes.
 */
export const EXPLANATIONS: GameExplanations = {
  apple: {
    why: 'The picture shows a round red fruit with a short stalk. It is an apple. You can say: I have an apple in my lunch box.',
    not: {
      orange:
        'An orange is round too, but its thick skin is orange. The fruit in the picture is red.',
      banana: 'A banana is long, curved and yellow. The fruit in the picture is round and red.',
      pear: 'A pear is wide at the bottom and narrow at the top. The fruit in the picture is round all over.',
    },
    more: "Say 'an apple', not 'a apple'. We use 'an' before a vowel sound, and 'apple' begins with one. The plural is 'apples'.",
    tip: "Learn a noun with its article: 'an apple'. Then say a short sentence with it, such as 'I like apples'.",
  },
  bread: {
    why: 'The picture shows a loaf of bread, a food that is baked from flour. People make toast and sandwiches with it. You can say: Can I have some bread, please?',
    not: {
      cheese:
        'Cheese is made from milk and is often yellow, with holes. The picture shows a brown loaf.',
      butter: 'Butter is a soft yellow food that we spread on bread. It is not the loaf itself.',
      rice: 'Rice is small white grains that we boil. The picture shows a baked loaf.',
    },
    more: "We do not count bread as 'one bread, two breads'. We say 'some bread', 'a loaf of bread' or 'a piece of bread'.",
    tip: "Count bread with 'loaf': one loaf of bread, two loaves of bread.",
  },
  milk: {
    why: 'The picture shows a glass of a white drink. It is milk, which comes from a farm animal. You can say: Would you like a glass of milk?',
    not: {
      water: 'Water has no colour, so you can see through it. The drink in the glass is white.',
      juice:
        'Juice is made from fruit and is usually orange, red or yellow. The drink in the picture is white.',
      tea: 'Tea is a hot brown drink made with leaves. The picture shows a white drink in a glass.',
    },
    more: "We do not count milk as 'one milk, two milks'. We say 'some milk' or 'a glass of milk'.",
    tip: 'Learn drink phrases with what they come in: a glass of milk, a carton of milk, a bottle of juice.',
  },
  cheese: {
    why: 'The picture shows a yellow wedge with holes in it. This food is cheese. You can say: I like cheese on toast.',
    not: {
      egg: 'An egg has a smooth oval shell and comes from a hen. The picture shows a yellow wedge with holes.',
      bread:
        'Bread is baked from flour, and a loaf is brown on the outside. The food in the picture is yellow with holes.',
      ham: 'Ham is pink meat. The picture shows a yellow food with holes, not pink meat.',
    },
    more: "We do not usually count cheese. We say 'a piece of cheese' or 'some cheese'. We say 'cheeses' only for different kinds.",
    tip: "Put a food word into a sentence about a meal you know: 'I have cheese on toast for lunch.'",
  },
  strawberry: {
    why: 'The picture shows a red fruit shaped like a heart, with tiny yellow seeds on its skin and green leaves on top. It is a strawberry. You can say: We pick strawberries in June.',
    not: {
      raspberry:
        'A raspberry is red too, but it is made of many small round bumps. The fruit in the picture is smooth, with seeds on its skin.',
      blackberry:
        'A blackberry is made of small round bumps, like a raspberry, and it is dark purple or black. The fruit in the picture is red.',
      cherry:
        'A cherry is small and round, with a long thin stalk. The fruit in the picture is shaped like a heart and has seeds on its skin.',
    },
    more: "The plural is 'strawberries': take off 'y' and add 'ies'. The same happens with 'cherry' and 'cherries', and with 'berry' and 'berries'.",
    tip: "Words that end in a consonant and then 'y' take 'ies' in the plural. Write two more: lorry, lorries; city, cities.",
  },
  carrot: {
    why: 'The picture shows a long orange vegetable with green leaves on top. It is a carrot. You can say: I put carrots in the soup.',
    not: {
      potato:
        'A potato is round or oval and brown or yellow. It grows under the ground too, but it is not long and orange.',
      onion:
        'An onion is round, with thin papery skin, and it can make your eyes water. The picture shows a long orange vegetable.',
      tomato: 'A tomato is round, red and soft. The picture shows something long, hard and orange.',
    },
    more: 'We eat the root of the carrot plant, the part that grows under the ground. We can count carrots: one carrot, two carrots.',
    tip: "Say 'a carrot' with 'a', because 'carrot' begins with a consonant sound.",
  },
  tea: {
    why: 'The picture shows a teacup without a handle, holding a hot green drink. This drink is green tea. You can say: Would you like some tea?',
    not: {
      coffee:
        'Coffee is made from beans and is dark brown. The drink in the picture is pale green.',
      soup: 'Soup is a hot food that we eat with a spoon, usually from a bowl. The picture shows a drink.',
      milk: 'Milk is white and is often drunk from a glass. The picture shows a hot green drink.',
    },
    more: 'Tea is made from the dried leaves of a plant. Green tea is popular in China and Japan, and black tea is popular in Britain.',
    tip: "Offer a drink politely with 'Would you like ...?' Answer 'Yes, please' or 'No, thank you'.",
  },
  egg: {
    why: 'The picture shows an egg, smooth and oval. Hens lay them, and we eat them boiled, fried or in cakes. You can say: I have a boiled egg every morning.',
    not: {
      cheese: 'Cheese is made from milk. It has no shell. The picture shows a smooth oval egg.',
      bean: 'A bean is a small seed, often green or brown. It is much smaller than an egg.',
      nut: 'A nut has a hard shell too, but it is small and grows on a tree. An egg comes from a hen.',
    },
    more: "Say 'an egg', because 'egg' begins with a vowel sound. For more than one, add 's'.",
    tip: 'Learn the cooking words: boiled, fried, scrambled. They are useful in a cafe.',
  },
  banana: {
    why: 'The picture shows a long, curved yellow fruit. It is a banana. We take off the skin before we eat it. You can say: I eat a banana after school.',
    not: {
      lemon:
        'A lemon is yellow too, but it is short and oval. The fruit in the picture is long and curved.',
      orange: 'An orange is round and orange. The fruit in the picture is long, curved and yellow.',
      pear: 'A pear is wide at the bottom and narrow at the top, and it is green or yellow. The fruit in the picture is long and curved.',
    },
    more: "We say 'peel a banana' when we take its skin off. Bananas grow in hot countries.",
    tip: 'The word has three parts: ba-na-na. Clap the three parts as you say it.',
  },
  pizza: {
    why: "The picture shows a piece of pizza, a round food from Italy. It is baked with a tasty topping. You can say: Let's have pizza tonight.",
    not: {
      pasta:
        'Pasta is made from flour and water, in long or small shapes, such as spaghetti. The picture shows a slice with cheese on top.',
      cake: 'A cake is sweet and soft, often with cream or icing on top. The picture shows a pizza slice with cheese.',
      burger:
        'A burger is a round piece of meat inside a bread roll. The picture shows a triangle of pizza with cheese on top.',
    },
    more: 'A whole pizza is round, and we cut it into pieces shaped like triangles.',
    tip: 'Some food words are the same in many languages: pizza, pasta, sushi. They are easy to remember.',
  },
  potato: {
    why: "The picture shows a potato, a brown vegetable that grows under the ground. We boil, bake or fry it. You can say: I'd like a baked potato, please.",
    not: {
      onion:
        'An onion has thin papery layers and a strong smell. The picture shows a brown potato.',
      carrot: 'A carrot is long and orange. The picture shows a round brown vegetable.',
      mushroom:
        'A mushroom has a round top on a short stem. The picture shows an oval brown potato.',
    },
    more: "The plural is 'potatoes', with 'es'. The same happens with 'tomato' and 'tomatoes'.",
    tip: 'Mashed potato, roast potatoes and baked potatoes are all common in Britain. Learn the way you like them.',
  },
  chips: {
    why: 'The picture shows long, thin, hot fried pieces in a red box. In British English these are chips. You can say: Can I have chips with my burger?',
    not: {
      crisps:
        'Crisps are very thin, dry slices of potato that come in a bag. The picture shows long fried pieces in a box.',
      rice: 'Rice is small white grains. The picture shows long fried pieces of potato.',
      pasta: 'Pasta is made from flour and water. The pieces in the picture are fried potato.',
    },
    more: "American English calls these 'fries'. In Britain, 'chips' are these hot fried pieces, and 'crisps' are the thin slices in a bag.",
    tip: 'Learn the British pair: chips are hot, crisps come in a bag. Many learners mix them up.',
  },
  'ice cream': {
    why: "The picture shows a cone with a soft white swirl on top. It is ice cream, a frozen food that we eat on hot days. You can say: Let's buy an ice cream at the beach.",
    not: {
      cake: 'A cake is baked in an oven and is not frozen. The picture shows a soft swirl in a cone.',
      chocolate:
        'Chocolate is a sweet brown food, often in a bar. The picture shows a white swirl in a cone.',
      biscuit: 'A biscuit is small, dry and hard. The picture shows a soft frozen swirl in a cone.',
    },
    more: "'Ice cream' is two words. We say 'some ice cream', or 'an ice cream' for one cone or tub.",
    tip: 'Learn the word with a flavour you like: vanilla ice cream, chocolate ice cream.',
  },
  dog: {
    why: 'The picture shows the face of a dog, with soft ears that hang down. A dog is a pet that barks. You can say: My dog likes to play in the park.',
    not: {
      cat: 'A cat has small pointed ears and long whiskers. The animal in the picture has soft ears that hang down.',
      fox: 'A fox has a thin pointed face, orange fur and ears that stand up. The animal in the picture has soft ears that hang down.',
      wolf: 'A wolf is a wild animal with pointed ears that stand up. The animal in the picture looks like a friendly pet.',
    },
    more: 'We say a dog barks. People keep dogs as pets, and some dogs work, for example on farms or with the police.',
    tip: "Learn an animal with the sound it makes: a dog barks. Then say it in a sentence: 'My dog barks at the postman.'",
  },
  cat: {
    why: 'The picture shows the face of a cat, with pointed ears and long whiskers. A cat is a small pet that purrs. You can say: The cat sleeps all afternoon.',
    not: {
      dog: 'A dog barks and often has ears that hang down. The picture shows a cat with pointed ears and whiskers.',
      rabbit:
        'A rabbit has very long ears and hops. The ears in the picture are short and pointed.',
      mouse:
        'A mouse is a very small animal with a long thin tail and round ears. The picture shows a cat with pointed ears.',
    },
    more: "A cat purrs when it is content and says 'miaow'. Cats like to sleep for many hours a day.",
    tip: "Make a sentence with a place: 'The cat is under the chair.' A place word helps you remember a noun.",
  },
  cow: {
    why: 'The picture shows the face of a cow, a big farm animal. Its face often has black and white patches. It eats grass in the fields. You can say: The cow says moo.',
    not: {
      sheep: 'A sheep is smaller and has thick, curly wool. The picture shows the face of a cow.',
      horse:
        'A horse has a long face and long hair on its neck. People ride horses. The picture shows a cow.',
      pig: 'A pig is pink and has a flat round nose. The picture shows a cow.',
    },
    more: 'A cow spends most of the day eating grass, and it chews the grass again later. That is called chewing the cud.',
    tip: 'Link an animal to what it gives us. That makes the word easier to remember.',
  },
  horse: {
    why: 'The picture shows the head of a horse, with a long face and a long mane on its neck. People ride them. You can say: She rides a horse at the weekend.',
    not: {
      cow: 'A cow has a wider face and no mane. The picture shows a horse.',
      donkey:
        'A donkey has very long ears and is smaller and grey. The animal in the picture has shorter ears, so it is a horse.',
      goat: 'A goat is small and has horns and a short beard. The animal in the picture has no horns.',
    },
    more: "We say 'ride a horse', and the person who rides is a rider. A horse can trot and gallop.",
    tip: "Use 'ride' for things you sit on: ride a horse, ride a bike. Different verbs go with different words.",
  },
  sheep: {
    why: 'The picture shows a sheep, an animal with thick, curly wool. Farmers keep sheep for their wool and meat. You can say: The sheep are eating grass on the hill.',
    not: {
      goat: 'A goat has short hair, not thick wool, and often a beard. The animal in the picture is covered in curly wool.',
      cow: 'A cow is much bigger and has short hair. The picture shows an animal with thick wool.',
      pig: 'A pig is pink and has no wool. The picture shows an animal covered in curly wool.',
    },
    more: "'Sheep' is the same in the singular and the plural: one sheep, two sheep. A group of sheep is a flock.",
    tip: 'Learn the nouns that stay the same in the plural together: one sheep, two sheep; one deer, two deer.',
  },
  bird: {
    why: 'The picture shows a bird, an animal with a beak that can fly. You can say: A bird is singing outside my window.',
    not: {
      fish: 'A fish lives in water and has fins and scales. The animal in the picture has feathers and a beak.',
      bee: 'A bee is a very small insect with six legs and stripes. A bird is bigger and has feathers.',
      bat: 'A bat can fly too, but it has fur, not feathers, and it flies at night. The animal in the picture has feathers and a beak.',
    },
    more: 'Birds have two legs and a beak. Not all birds can fly: penguins and ostriches cannot.',
    tip: "Use 'bird' for any kind. You can learn the names later: a robin, a parrot, an eagle.",
  },
  fish: {
    why: 'The picture shows a fish, an animal that lives in water. It has fins and scales. You can say: There are three fish in the pond.',
    not: {
      frog: 'A frog lives in water and on land. It has four legs and jumps. The animal in the picture has fins and no legs.',
      crab: 'A crab lives in the sea and has a hard shell and two big claws. The picture shows an animal with fins.',
      bird: 'A bird has feathers and flies in the air. The animal in the picture swims.',
    },
    more: "The plural of 'fish' is usually 'fish': one fish, two fish. 'Fish' is also a food that we eat.",
    tip: "Say 'a fish' for the animal and 'some fish' for the food. The word stays the same.",
  },
  bee: {
    why: 'The picture shows a bee, a small flying insect with yellow and black stripes. Bees visit flowers. You can say: There is a bee on that flower.',
    not: {
      ant: 'An ant is a tiny insect that walks and lives in the ground. It has no yellow and black stripes.',
      fly: 'A fly is a small grey or black insect. It has no yellow and black stripes.',
      spider: 'A spider has eight legs and makes a web. A bee has six legs and can fly.',
    },
    more: 'A bee is an insect, so it has six legs. Bees can sting, and they make a buzzing sound when they fly.',
    tip: "Do not mix up 'be' and 'bee'. They sound alike, but the insect has two letter e's.",
  },
  pig: {
    why: 'The picture shows the face of a pig, a pink farm animal with a round snout. You can say: The pig is rolling in the mud.',
    not: {
      cow: 'A cow is bigger, often has patches and gives us milk. The picture shows a pink face with a round snout.',
      sheep:
        'A sheep is covered in thick curly wool. The picture shows a pink animal with no wool.',
      horse:
        'A horse has a long face and a mane. The picture shows a round pink face with a snout.',
    },
    more: "A pig says 'oink'. Its snout is good at finding food in the ground.",
    tip: "Write 'pig' with a small drawing in your notebook. A picture beside a word helps you remember it.",
  },
  rabbit: {
    why: 'The picture shows the face of a rabbit. Its two very long ears stand up. Rabbits hop and eat grass. You can say: My rabbit lives in a hutch.',
    not: {
      hamster:
        'A hamster is small and round, with tiny ears and fat cheeks. The animal in the picture has very long ears.',
      mouse:
        'A mouse is tiny, with round ears and a long thin tail. The animal in the picture has very long ears.',
      cat: 'A cat has short pointed ears and long whiskers. The ears in the picture are very long.',
    },
    more: "A rabbit's home in the ground is a burrow. A pet rabbit often lives in a wooden box called a hutch.",
    tip: 'Learn a verb with the animal: rabbits hop. Say it as you move your fingers: hop, hop, hop.',
  },
  lion: {
    why: 'The picture shows the face of a lion, a big wild animal with a thick mane round its face. You can say: The lion has a very loud roar.',
    not: {
      tiger:
        'A tiger is orange with black stripes and has no mane. The picture shows a lion with thick hair round its face.',
      bear: 'A bear has a round face, small round ears and thick brown fur all over. The picture shows a lion with a mane.',
      wolf: 'A wolf has a long thin face and pointed ears, like a wild dog. The picture shows a lion.',
    },
    more: 'Only male lions have a big mane. A group of lions is called a pride. Most wild lions live in Africa.',
    tip: "Learn the sound with the animal: a lion roars. 'Roar' is a strong word to use in a story.",
  },
  elephant: {
    why: 'The picture shows an elephant, a very big grey animal with a long trunk. You can say: The elephant drinks with its trunk.',
    not: {
      kangaroo:
        'A kangaroo jumps on its big back legs and carries its baby in a pouch. It has no trunk.',
      giraffe:
        'A giraffe has a very long neck and brown patches. The animal in the picture has a trunk.',
      rhino: 'A rhino is big and grey too, but it has a horn on its nose, not a trunk.',
    },
    more: "Say 'an elephant', because the word begins with a vowel sound. Elephants are the biggest animals that live on land.",
    tip: "Break a long word into parts to spell it: el-e-phant. The 'ph' sounds like 'f'.",
  },
  frog: {
    why: 'The picture shows the face of a frog, a small green animal with big eyes. Frogs jump and live near water. You can say: A frog is sitting by the pond.',
    not: {
      fish: 'A fish lives only in water and has fins. A frog has legs and can jump on land.',
      snake: 'A snake is long and thin and has no legs. The picture shows a frog with big eyes.',
      lizard:
        'A lizard has dry skin with scales and a long tail. A frog has smooth wet skin and no tail.',
    },
    more: 'A young frog is a tadpole. It lives in water at first, and later it grows legs.',
    tip: "Learn a verb with the animal: frogs jump. Then make a sentence: 'The frog jumps into the pond.'",
  },
  monkey: {
    why: 'The picture shows the face of a monkey, a clever animal that climbs and can hold things in its fingers, as we do. You can say: The monkey is swinging from branch to branch.',
    not: {
      donkey:
        "A donkey is like a small horse with very long ears. The picture shows a monkey's face.",
      bear: 'A bear is big, with thick fur and small round ears. The picture shows a monkey.',
      tiger: 'A tiger is a big cat with orange fur and black stripes. The picture shows a monkey.',
    },
    more: "'Monkey' and 'donkey' look alike and rhyme, but they are very different animals. The plural is 'monkeys', not 'monkies'.",
    tip: "A word that ends in a vowel and then 'y' just adds 's': monkey, monkeys; donkey, donkeys.",
  },
  duck: {
    why: 'The picture shows a duck. Ducks swim on ponds and rivers and have a wide beak. You can say: We feed the ducks in the park.',
    not: {
      swan: 'A swan is a big white bird with a very long neck. The bird in the picture is smaller and has a short neck.',
      owl: 'An owl has a round face and big round eyes, and it hunts at night. The bird in the picture has a flat beak.',
      chicken:
        'A chicken lives on a farm and has a small red comb on its head. It does not swim. The bird in the picture swims.',
    },
    more: "A duck says 'quack'. A young duck is called a duckling.",
    tip: "'Duck' is also a verb: when someone shouts 'Duck', move your head down quickly. Learn both meanings.",
  },
  snake: {
    why: 'The picture shows a snake, a long thin animal with no legs. It moves along the ground and has a forked tongue. You can say: Some snakes are dangerous.',
    not: {
      worm: 'A worm is long and thin too, but it is small, pink and soft, and it has no eyes or tongue. The animal in the picture has eyes and a tongue.',
      lizard: 'A lizard has four legs and a long tail. A snake has no legs.',
      crab: 'A crab has a hard shell, two claws and eight legs. The animal in the picture is long and has no legs.',
    },
    more: "A snake makes a 'sss' sound, called a hiss. Snakes are reptiles, like lizards and crocodiles.",
    tip: "Learn the sound word with the animal: a snake hisses. Say 'hiss' and hold the 's' sound.",
  },
  baby: {
    why: 'The picture shows a baby, a person in the first months of life. A baby cannot stand up or talk yet. The other words are for people who are older. You can say: The baby is asleep.',
    not: {
      man: 'A man is a grown-up. The picture shows a very young baby.',
      woman: 'A woman is a grown-up. The picture shows a very young baby.',
      'old man':
        'An old man is a grown-up who has lived a long time. The picture shows a very young baby.',
    },
    more: "The plural of 'baby' is 'babies'. We take off 'y' and add 'ies'.",
    tip: "Use 'baby' for someone in their first year or two. A ten-year-old is not a baby.",
  },
  girl: {
    why: 'The picture shows a girl, a young female person. You can say: The girl next door is seven years old.',
    not: {
      boy: 'A boy is a young male person. The picture shows a girl.',
      man: 'A man is a grown-up male. The picture shows a young female person.',
      baby: 'A baby is very young and cannot walk or talk yet. The person in the picture is older.',
    },
    more: 'This picture shows only a girl. It cannot show who her family are, so a word for a relative would be a guess.',
    tip: "'Girl' has the same sound as the 'ir' in 'first' and 'third'. Practise the sound.",
  },
  boy: {
    why: 'The picture shows a boy, a young male person. You can say: The boy is playing in the park.',
    not: {
      girl: 'A girl is a young female person. The picture shows a boy.',
      man: 'A man is a grown-up male. The picture shows a young boy.',
      baby: 'A baby is very young and cannot walk or talk yet. The person in the picture is older.',
    },
    more: "The plural is 'boys': a word that ends in a vowel and then 'y' just adds 's'.",
    tip: "Say it with an age: 'He is a ten-year-old boy.' With an age before a noun, 'year' has no 's'.",
  },
  woman: {
    why: "The picture shows a woman, a grown-up female person. A picture shows a person, not their family, so it cannot tell us if she is someone's mother. You can say: That woman is a doctor.",
    not: {
      man: 'A man is a grown-up male person. The picture shows a grown-up female person.',
      boy: 'A boy is a young male person. The picture shows a grown-up female person.',
      'old man':
        'An old man is a male person who has lived a long time. The picture shows a female person.',
    },
    more: "The plural of 'woman' is 'women'. The spelling changes from 'a' to 'e', and the first sound changes too: we say 'wimmin'.",
    tip: 'Learn the irregular plural pair together: one woman, two women.',
  },
  man: {
    why: "The picture shows a man, a grown-up male person. A picture shows a person, not their family, so it cannot tell us if he is someone's father. You can say: A man is waiting outside.",
    not: {
      woman: 'A woman is a grown-up female person. The picture shows a grown-up male person.',
      girl: 'A girl is a young female person. The picture shows a grown-up male person.',
      'old woman':
        'An old woman is a female person who has lived a long time. The picture shows a male person.',
    },
    more: "The plural of 'man' is 'men'. We do not add 's'.",
    tip: "Learn the irregular plural pair together: one man, two men. Do not say 'mans'.",
  },
  hand: {
    why: 'The picture shows a hand held up, with a palm and five fingers. Your hand is at the end of your arm. You can say: Put up your hand if you know the answer.',
    not: {
      foot: 'A foot is at the end of your leg. You stand on it. The picture shows a hand with five fingers.',
      arm: 'An arm is the long part between your shoulder and your hand. The picture shows only the hand.',
      leg: 'A leg is the long part of the body that you stand on. The picture shows a hand.',
    },
    more: "In class we say 'put up your hand' to ask or answer a question. We also shake hands when we meet someone.",
    tip: "Learn 'left' and 'right' with it: 'I write with my right hand.'",
  },
  eye: {
    why: 'The picture shows an eye, the part of the face that we see with. You can say: She has big brown eyes.',
    not: {
      ear: 'An ear is on the side of the head. We hear with it. The picture shows an eye.',
      nose: 'A nose is in the middle of the face. We smell with it. The picture shows an eye.',
      mouth:
        'A mouth is the opening under the nose. We eat and speak with it. The picture shows an eye.',
    },
    more: "The word 'eye' sounds just like 'I'. The plural is 'eyes'. We close our eyes to sleep.",
    tip: 'Learn the face from the top down: eyebrows first, then eyes. Point to each part as you say it.',
  },
  ear: {
    why: 'The picture shows an ear, the part of the head that we hear with. You have one on each side of your head. You can say: I have a pain in my ear.',
    not: {
      eye: 'An eye is the part we see with. The picture shows an ear on the side of the head.',
      nose: 'A nose is in the middle of the face. We smell with it. The picture shows an ear.',
      chin: 'A chin is the bottom of the face, under the mouth. The picture shows an ear on the side of the head.',
    },
    more: "People wear earrings, and 'earache' is a pain inside the ear. Both words begin with 'ear'.",
    tip: "Do not mix up 'ear' and 'year'. They sound different: 'year' begins with a 'y' sound.",
  },
  nose: {
    why: 'The picture shows a nose, the part in the middle of your face that we smell with. You can say: My nose is red.',
    not: {
      mouth:
        'A mouth is the opening under the nose. We eat and speak with it. The picture shows a nose.',
      eye: 'An eye is above the nose. We see with it. The picture shows a nose.',
      ear: 'An ear is on the side of the head. The picture shows a nose in the middle of the face.',
    },
    more: 'We breathe through our nose. When we are ill, we often have a runny nose.',
    tip: "Learn the phrase 'blow your nose'. You need a tissue for it.",
  },
  foot: {
    why: 'The picture shows a foot, the part of the body that we stand on. You can say: My foot hurts.',
    not: {
      hand: 'A hand is at the end of your arm. The picture shows a foot.',
      leg: 'A leg is the long part from your hip down. The picture shows only the foot at the bottom.',
      knee: 'The knee is in the middle of your leg, where it bends. The picture shows the foot at the bottom.',
    },
    more: "The plural of 'foot' is 'feet'. This is irregular, so do not say 'foots'.",
    tip: 'Learn the irregular pairs together: one foot, two feet; one goose, two geese.',
  },
  tooth: {
    why: 'The picture shows a tooth, one of the hard white parts that we bite and chew with. You can say: I have a wobbly tooth.',
    not: {
      tongue:
        'A tongue is the soft pink part that helps you taste and speak. The picture shows a hard white tooth.',
      lip: 'Lips are the soft edges round your mouth. The picture shows a hard white tooth.',
      jaw: 'The jaw is the bone that holds the teeth. The picture shows one tooth, not the whole jaw.',
    },
    more: "The plural of 'tooth' is irregular: the 'oo' becomes 'ee', just as 'goose' becomes 'geese'.",
    tip: "Learn 'a wobbly tooth': a loose tooth that will soon come out.",
  },
  hair: {
    why: 'The picture shows a person having a haircut. Hair grows on your head, and the hairdresser is cutting it. The other words are parts of the body that are not hair. You can say: She has long hair.',
    not: {
      foot: 'A foot is at the bottom of your leg. A haircut is for the head, not the foot.',
      knee: 'A knee is in the middle of your leg. A haircut is for the head, not the knee.',
      leg: 'A leg is a part of the body that you stand on. A haircut is for the head, not the leg.',
    },
    more: "We say 'My hair is long', with 'is'. We say 'a hair' only for one single strand.",
    tip: "Say 'have a haircut' or 'get a haircut' when someone else cuts your hair. Do not say 'make a haircut'.",
  },
  mouth: {
    why: 'The picture shows a mouth, with red lips. We eat, drink and speak with our mouth. You can say: Open your mouth, please.',
    not: {
      nose: 'A nose is above the mouth. We smell with it. The picture shows lips.',
      tongue:
        'A tongue is inside the mouth, behind the lips. The picture shows the lips of a mouth.',
      chin: 'A chin is below the mouth, at the bottom of the face. The picture shows lips.',
    },
    more: "The edges of your mouth are your lips. The plural of 'mouth' is 'mouths'.",
    tip: 'Learn the action words that go with it: eat, drink, speak, smile. Say one sentence with each.',
  },
  leg: {
    why: 'The picture shows a leg, the long part of the body from your hip down. We stand and run on our legs. You can say: A spider has eight legs.',
    not: {
      arm: 'An arm is between your shoulder and your hand. The picture shows a leg, which bends at the knee.',
      hand: 'A hand is at the end of your arm, with fingers. The picture shows a leg.',
      neck: 'Your neck joins your head to your body. The picture shows a leg.',
    },
    more: 'Halfway down, the leg bends. Near the bottom is the ankle.',
    tip: 'Touch your leg from the top down, and name each part you know in English.',
  },
  shirt: {
    why: "The picture shows a T-shirt, a kind of shirt: a light top with a round neck. You wear it on the top half of your body. You can say: I'm wearing a blue T-shirt.",
    not: {
      coat: 'A coat is long and thick, and we wear it outside over other clothes. The picture shows a light top.',
      jumper:
        'A jumper is a warm top, often made of wool. The picture shows a light cotton T-shirt.',
      dress:
        'A dress is one piece of clothing for the top half and the legs. The picture shows a top only.',
    },
    more: 'A T-shirt is named after its shape: it looks like the letter T. A shirt for school usually has a collar and buttons.',
    tip: "Use 'I'm wearing ...' for clothes you have on now: 'I'm wearing a shirt.'",
  },
  trousers: {
    why: 'The picture shows a pair of jeans. Jeans are trousers made of strong blue cotton, and they cover your legs down to your feet. You can say: These trousers are too long.',
    not: {
      shorts: 'Shorts cover only the top part of your legs. The trousers in the picture are long.',
      skirt:
        'A skirt hangs from the waist and has no legs. The picture shows clothing with two legs.',
      socks: 'Socks go on your feet. The picture shows long clothing for your legs.',
    },
    more: "'Trousers' is always plural: 'My trousers are new.' We say 'a pair of trousers' for one.",
    tip: 'Learn the plural clothes words together: trousers, jeans, shorts, tights.',
  },
  dress: {
    why: 'The picture shows a dress, one piece of clothing that covers the top of the body and hangs down over the legs. You can say: She wore a red dress to the wedding.',
    not: {
      skirt:
        'A skirt covers only the bottom half, from the waist down. The picture shows one piece from the shoulders down.',
      shirt: 'A shirt covers only the top half of the body. The picture shows a long dress.',
      coat: 'A coat is a thick piece of clothing that you wear outside over other clothes. The picture shows a dress.',
    },
    more: "'Dress' is also a verb: 'get dressed' means put your clothes on.",
    tip: "Use 'get dressed' in your morning routine: 'I get up, I wash, I get dressed.'",
  },
  shoes: {
    why: 'The picture shows a sports shoe, often called a trainer. We wear shoes on our feet. You can say: Take your shoes off at the door.',
    not: {
      socks:
        'Socks are soft and go on your feet under your shoes. The picture shows a shoe with laces.',
      boots: 'Boots are shoes that come up over the ankle. The shoe in the picture is low.',
      gloves: 'Gloves go on your hands. The picture shows a shoe.',
    },
    more: "Shoes come in pairs: 'a pair of shoes'. In Britain, a sports shoe like this one is called a trainer.",
    tip: "Learn 'put on' and 'take off': put on your shoes, take off your shoes.",
  },
  coat: {
    why: "The picture shows a coat, a long, warm piece of clothing that we wear outside over other clothes. You can say: Put on your coat. It's raining.",
    not: {
      jumper:
        'A jumper is a warm knitted top that we pull on over our head. The picture shows a long coat.',
      shirt: 'A shirt is a light top. The picture shows a long, thick coat.',
      scarf: 'A scarf is a long piece of cloth for your neck. The picture shows a coat.',
    },
    more: "We say 'put on your coat' and 'take off your coat'. A coat often has buttons or a zip.",
    tip: "Hang your coat up when you come in: 'hang up' is a phrasal verb.",
  },
  socks: {
    why: "The picture shows a pair of socks. We wear socks on our feet. You can say: I've got a hole in my sock.",
    not: {
      shoes: 'Shoes are hard and go on top of your socks. The picture shows soft socks.',
      gloves: 'Gloves go on your hands. The picture shows socks for your feet.',
      shorts: 'Shorts are clothes for your legs. The picture shows socks for your feet.',
    },
    more: "We usually say 'socks' in the plural, because they come in pairs: 'a pair of socks'.",
    tip: "Learn 'a pair of' with clothes that come in twos: a pair of socks, a pair of jeans.",
  },
  cap: {
    why: 'The picture shows a cap, a soft head covering with a stiff part at the front called a peak. You can say: He wears his cap backwards.',
    not: {
      gloves: 'Gloves go on your hands. The picture shows a cap for your head.',
      scarf: 'A scarf goes round your neck. The picture shows a cap for your head.',
      belt: 'A belt goes round your waist to hold up your trousers. The picture shows a cap.',
    },
    more: 'Many sports players wear caps, and some school uniforms have one.',
    tip: "'Cap' rhymes with 'map' and 'nap'. Say the three words together.",
  },
  scarf: {
    why: 'The picture shows a scarf, a long piece of warm cloth that we wear round the neck in winter. You can say: Wrap your scarf round your neck.',
    not: {
      tie: 'A tie is thin and goes under a shirt collar. The picture shows a long warm scarf.',
      belt: 'A belt goes round your waist. The picture shows a scarf for your neck.',
      gloves: 'Gloves go on your hands. The picture shows a scarf.',
    },
    more: "The plural of 'scarf' is 'scarves': 'f' becomes 'ves'. The same happens with 'wolf' and 'wolves'.",
    tip: "Use 'wrap ... round': 'Wrap the scarf round your neck.'",
  },
  gloves: {
    why: "The picture shows a pair of gloves. We wear them on our hands to keep them warm. You can say: I've lost one of my gloves.",
    not: {
      socks: 'Socks go on your feet. The picture shows gloves for your hands.',
      boots: 'Boots go on your feet. The picture shows gloves for your hands.',
      jumper: 'A jumper is a warm top for your body. The picture shows gloves for your hands.',
    },
    more: "Gloves come in pairs: 'a pair of gloves'. Gloves with one place for all four fingers together are called mittens.",
    tip: 'Make a list: what do you wear on your feet, on your hands and round your neck?',
  },
  hat: {
    why: 'The picture shows a hat with a wide brim and a ribbon. A hat is something we wear on the head. You can say: Grandma wears a straw hat in the garden.',
    not: {
      tie: 'A tie is a long thin piece of cloth worn under a shirt collar. The picture shows a hat.',
      scarf: 'A scarf goes round your neck. The picture shows a hat for your head.',
      belt: 'A belt goes round your waist. The picture shows a hat.',
    },
    more: 'The wide part round a hat is the brim. A hat with a wide brim keeps your face in the shade.',
    tip: "'Hat' rhymes with 'mat' and 'that'. Say the three words together.",
  },
  glasses: {
    why: 'The picture shows a pair of glasses: two lenses in a frame that help people see better. You can say: I need my glasses to read.',
    not: {
      necklace:
        'A necklace is a chain or a string of beads that you wear round your neck. The picture shows glasses for your eyes.',
      watch: 'A watch tells the time and goes on your wrist. The picture shows glasses.',
      ring: 'A ring is a small circle that you wear on a finger. The picture shows glasses.',
    },
    more: "We say 'glasses' or 'a pair of glasses', even for one. The clear parts are the lenses.",
    tip: "'Glasses' can also mean the things you drink from. The sentence tells you which: 'I wear glasses' or 'two glasses of juice'.",
  },
  sun: {
    why: 'The picture shows the sun, the bright light in the sky that warms the Earth in the day. You can say: The sun is shining.',
    not: {
      rain: 'Rain is water that falls from the sky. The picture shows the sun with its rays.',
      cloud: 'A cloud is white or grey and floats in the sky. The picture shows the sun.',
      snow: 'Snow is soft white flakes that fall when it is freezing. The picture shows the sun.',
    },
    more: "We say 'the sun', with 'the', because there is only one. Never look straight at it.",
    tip: "Learn the sentence: 'The sun rises in the east and sets in the west.'",
  },
  rain: {
    why: "The picture shows drops of water falling from a dark sky. That water is rain. You can say: It's raining again.",
    not: {
      snow: 'Snow is white and soft and falls when it is freezing. The picture shows drops of water.',
      sun: 'The sun is the bright light in the sky. The picture shows water falling.',
      wind: 'Wind is moving air. You cannot see it. The picture shows water falling.',
    },
    more: "'Rain' is a noun and a verb: 'There is a lot of rain' and 'It is raining'.",
    tip: "Use 'It's raining' for now, and 'It rains a lot' for what usually happens.",
  },
  snow: {
    why: 'The picture shows a snowflake, one tiny piece of snow. Snow falls from the sky when the air is freezing. You can say: The garden is white with snow.',
    not: {
      rain: 'Rain is drops of water. The picture shows a white snowflake.',
      wind: 'Wind is moving air that you cannot see. The picture shows a snowflake.',
      fog: 'Fog is like a cloud near the ground that makes it hard to see. The picture shows a snowflake.',
    },
    more: 'Each snowflake has six points, and no two are exactly the same shape.',
    tip: "Learn 'It's snowing' and 'a snowflake'. 'Snow' can be a noun or a verb.",
  },
  cloud: {
    why: 'The picture shows a big white cloud, partly in front of something bright. A cloud is made of tiny drops of water floating in the sky. You can say: There are dark clouds over the hills.',
    not: {
      rain: 'Rain is water falling from the sky. The picture shows a cloud, and no water is falling.',
      snow: 'Snow is white flakes falling from the sky. The picture shows a cloud.',
      wind: 'Wind is moving air, and you cannot see it. The picture shows a cloud.',
    },
    more: 'When there are many clouds in the sky, we say it is cloudy.',
    tip: "Add 'y' to describe the sky: cloud, cloudy.",
  },
  rainbow: {
    why: "The picture shows a rainbow, a curve of seven colours in the sky. A rainbow appears when sunlight shines through drops of water in the air. You can say: Look, there's a rainbow.",
    not: {
      storm:
        'A storm is strong wind and heavy rain, often with thunder. The picture shows a curve of colours.',
      snow: 'Snow is white and falls from the sky. The picture shows many colours.',
      wind: 'Wind is moving air that you cannot see. The picture shows a curve of colours.',
    },
    more: 'The seven colours are red, orange, yellow, green, blue, indigo and violet.',
    tip: "'Rainbow' is two shorter words joined together. Can you find them?",
  },
  lightning: {
    why: 'The picture shows a lightning bolt, a bright flash of electricity in the sky during a thunderstorm. You can say: Lightning lit up the sky.',
    not: {
      fog: 'Fog is a thick grey cloud near the ground. The picture shows a bright flash.',
      wind: 'Wind is moving air that you cannot see. The picture shows a flash of light.',
      rain: 'Rain is water falling from the sky. The picture shows a bright flash.',
    },
    more: 'The same picture is also a sign for electricity or danger. We see lightning first and hear thunder after it, because light travels faster than sound.',
    tip: "The spelling has no 'e' after the 't': lightning, not 'lightening'.",
  },
  moon: {
    why: 'The picture shows the moon as a thin curve, the shape we call a crescent. We see the moon in the night sky. You can say: The moon is very bright tonight.',
    not: {
      sun: 'The sun is round and shines in the day. The picture shows a thin curve, a crescent.',
      star: 'A star is a tiny point of light in the night sky, drawn with five points. The picture shows a curved shape.',
      cloud: 'A cloud is white or grey and fluffy. The picture shows a thin curve.',
    },
    more: 'The moon looks different through the month: a thin crescent, then half a circle, then a whole round circle.',
    tip: "We say 'the moon', with 'the', because the Earth has only one.",
  },
  star: {
    why: 'The picture shows a star, drawn with five points. At night we see stars as tiny points of light in the sky. You can say: I can see lots of stars tonight.',
    not: {
      moon: 'The moon is big and round, or a thin curve. The picture shows a shape with five points.',
      cloud: 'A cloud is soft and has no points. The picture shows a star.',
      flower: 'A flower grows from the ground and has petals. The picture shows a star.',
    },
    more: 'We draw a star with five points, but real stars are huge balls of burning gas, very far away.',
    tip: "'Star' also means a famous person: 'a film star'.",
  },
  tree: {
    why: 'The picture shows a tree, a tall plant with a wooden trunk and many branches. You can say: There is an old tree in our garden.',
    not: {
      flower:
        'A flower is small and has coloured petals. The picture shows a tall tree with a trunk.',
      grass: 'Grass is short and green and covers the ground. The picture shows a tall tree.',
      leaf: 'A leaf is one small green part of a tree. The picture shows the whole tree.',
    },
    more: 'The thick part of a tree is the trunk, and the arms that grow from it are the branches.',
    tip: 'Learn the parts in order from the ground up: roots, trunk, branches.',
  },
  leaf: {
    why: 'The picture shows a red and orange leaf. Leaves grow on branches, and many turn red or brown in autumn. You can say: The leaves are falling.',
    not: {
      tree: 'A tree is the whole tall plant. The picture shows one leaf.',
      flower: 'A flower has coloured petals. The picture shows a leaf with points.',
      grass: 'Grass is thin and green and covers the ground. The picture shows one leaf.',
    },
    more: "The plural of 'leaf' is 'leaves': 'f' becomes 'ves'.",
    tip: 'Learn the plural with another word that changes the same way: wolf, wolves.',
  },
  car: {
    why: 'The picture shows a car, a vehicle with four wheels for a few people. You can say: My mum drives a red car.',
    not: {
      bus: 'A bus is long and big and carries many people. The picture shows a small car.',
      van: 'A van is bigger than a car and carries things for work. The picture shows a car.',
      lorry:
        'A lorry is a very big vehicle that carries heavy things. The picture shows a small car.',
    },
    more: "We say 'drive a car' and 'go by car'. The person who drives is the driver.",
    tip: "Learn 'get in' and 'get out of' with a car: 'Get in the car, please.'",
  },
  bus: {
    why: 'The picture shows a bus, a big vehicle that carries many people along the streets. You can say: I go to school by bus.',
    not: {
      car: 'A car is small and carries only a few people. The picture shows a big bus.',
      train: 'A train runs on rails. The picture shows a bus.',
      taxi: 'A taxi is a car that you pay to drive you somewhere. The picture shows a big bus.',
    },
    more: "We say 'go by bus', 'get on the bus' and 'get off the bus'.",
    tip: 'Learn the bus words together: wait at the bus stop, get on, pay, get off.',
  },
  bicycle: {
    why: 'The picture shows a bicycle, with two wheels, pedals and handlebars. You push the pedals with your feet. You can say: I ride my bicycle to the park.',
    not: {
      motorbike:
        'A motorbike has two wheels too, but it has an engine. The picture shows a bicycle with pedals.',
      scooter:
        'A scooter has a board that you stand on, and no pedals. The picture shows a bicycle.',
      car: 'A car has four wheels and an engine. The picture shows a bicycle.',
    },
    more: "'Bike' is the short, everyday word for 'bicycle'. We say 'ride a bike'.",
    tip: "'Bi' means two, as in 'bicycle': two wheels.",
  },
  aeroplane: {
    why: 'The picture shows an aeroplane, which flies people a long way through the sky. You can say: We went to Spain by aeroplane.',
    not: {
      helicopter:
        'A helicopter has long blades that turn round on top. The picture shows an aeroplane.',
      rocket: 'A rocket is tall and thin and flies into space. The picture shows an aeroplane.',
      boat: 'A boat travels on water. The picture shows an aeroplane in the sky.',
    },
    more: "'Aeroplane' is the British word, and 'plane' is the short word everyone uses. In America it is 'airplane'.",
    tip: "Use the verb 'fly' with it: 'We flew to Spain.'",
  },
  train: {
    why: "The picture shows a steam train, which runs on rails and pulls carriages. You can say: The train leaves at ten o'clock.",
    not: {
      tram: 'A tram runs on rails in the streets of a city, with power from wires above. The picture shows a steam train.',
      bus: 'A bus drives on the road, not on rails. The picture shows a train.',
      lorry: 'A lorry drives on the road and carries heavy things. The picture shows a train.',
    },
    more: 'Old trains used steam, which you can see in the picture. Most trains today use electricity or diesel.',
    tip: "Say 'catch a train' and 'miss a train'.",
  },
  ship: {
    why: 'The picture shows a ship, a very big vessel that carries people or goods across the sea. You can say: The ship sailed into the port.',
    not: {
      bus: 'A bus drives on the road. The picture shows a ship on the water.',
      plane: 'A plane flies in the sky. The picture shows a ship on the water.',
      train: 'A train runs on rails. The picture shows a ship on the water.',
    },
    more: "A ship is bigger than most boats. We say 'on a ship': 'We travelled on a ship.'",
    tip: 'Learn the travel verbs: you sail on a ship and fly on a plane.',
  },
  taxi: {
    why: "The picture shows a taxi, a vehicle with a driver that you pay to take you somewhere. You can say: Let's get a taxi.",
    not: {
      bus: 'A bus is big and stops for many people on a route. The picture shows a taxi.',
      lorry: 'A lorry carries heavy things. The picture shows a taxi for people.',
      van: 'A van carries things for work. The picture shows a taxi with a sign on top.',
    },
    more: 'A taxi often has a sign on its roof. In London, black cabs are a famous kind of taxi.',
    tip: "Say 'take a taxi' or 'get a taxi'.",
  },
  helicopter: {
    why: 'The picture shows a helicopter, which flies with long blades that turn round on top. It can go straight up and stay still in the air. You can say: The helicopter landed on the roof.',
    not: {
      aeroplane:
        'An aeroplane has wings and needs a runway to take off. The picture shows a helicopter with blades on top.',
      rocket: 'A rocket is tall and thin and goes into space. The picture shows a helicopter.',
      'hot-air balloon':
        'A hot-air balloon is a big bag of hot air with a basket under it. The picture shows a helicopter.',
    },
    more: 'Helicopters can land in small places, so they are used for rescues at sea and in the mountains.',
    tip: 'Break the long word into parts: he-li-cop-ter.',
  },
  ambulance: {
    why: 'The picture shows an ambulance, a vehicle with lights and a siren that carries ill or hurt people, fast. You can say: Call an ambulance.',
    not: {
      'police car':
        'A police car carries police officers. The picture shows an ambulance with a red cross.',
      'fire engine':
        'A fire engine is red and carries firefighters and water to put out fires. The picture shows an ambulance.',
      taxi: 'A taxi takes people where they want to go, for money. The picture shows an ambulance.',
    },
    more: 'In the UK, you call 999 for an ambulance in an emergency.',
    tip: "Say 'an ambulance', with 'an', because it begins with a vowel sound.",
  },
  boat: {
    why: 'The picture shows a small boat with a sail, called a sailing boat. Moving air pushes the sail. You can say: We went out in a boat on the lake.',
    not: {
      car: 'A car travels on the road. The picture shows a boat on the water.',
      bicycle: 'A bicycle has two wheels and goes on land. The picture shows a boat.',
      train: 'A train runs on rails. The picture shows a boat on the water.',
    },
    more: 'A boat with a sail is a sailing boat; one with an engine is a motorboat.',
    tip: "Say 'by boat' and 'in a boat'.",
  },
  house: {
    why: 'The picture shows a house, a building where a family lives. It has a roof, walls, a door and windows. You can say: We live in a small house.',
    not: {
      garden:
        'A garden is the ground with grass and flowers next to a house. The picture shows the building.',
      room: 'A room is one part inside a house. The picture shows the whole building.',
      door: 'A door is one part of a house. You open it to go in. The picture shows the whole house.',
    },
    more: 'A house often has rooms upstairs and downstairs. The top of a house is the roof.',
    tip: "Say 'at home' when you mean the place you live: 'I am at home.' Do not say 'in home'.",
  },
  bed: {
    why: "The picture shows a bed, the furniture that we sleep on at night. You can say: I go to bed at nine o'clock.",
    not: {
      chair: 'A chair is a seat for one person. We sit on it. The picture shows a bed.',
      sofa: 'A sofa is a long soft seat for two or three people. We sit on it. The picture shows a bed.',
      table: 'A table has a flat top and legs. We eat or work at a table. The picture shows a bed.',
    },
    more: "We usually say 'go to bed' and 'in bed' without 'a' or 'the'.",
    tip: "Learn 'go to bed' as one phrase: it means go to sleep, not just go near the bed.",
  },
  bath: {
    why: 'The picture shows a bath, a long tub that you fill with water to wash your whole body. You can say: I have a bath every Sunday.',
    not: {
      sink: 'A sink is a small bowl with taps for washing your hands or dishes. The picture shows a big tub for your whole body.',
      shower:
        'A shower sprays water from above while you stand. The picture shows a tub that you sit or lie in.',
      mirror: 'A mirror is glass that shows your face. The picture shows a bath.',
    },
    more: "In Britain we say 'have a bath'. Americans often say 'take a bath'.",
    tip: "Use 'have' with many daily things: have a bath, have lunch, have a rest.",
  },
  key: {
    why: "The picture shows a key, a small metal object that opens a lock. You can say: I can't find my key.",
    not: {
      lock: 'A lock is the part of a door that a key fits into. The picture shows the key.',
      handle: 'A handle is the part you hold to open a door or a drawer. The picture shows a key.',
      bell: 'A bell makes a ringing sound. The picture shows a key.',
    },
    more: 'We use a key to lock and unlock a door. On a computer, each button is also called a key.',
    tip: "The prefix 'un' means the opposite: lock, unlock.",
  },
  sofa: {
    why: 'The picture shows a sofa, a long soft seat for two or three people, with a lamp beside it. You can say: We watch TV on the sofa.',
    not: {
      bed: 'A bed is for sleeping at night. The picture shows a sofa for sitting.',
      chair: 'A chair is a seat for one person. The picture shows a long seat for two or three.',
      table: 'A table has a flat top for eating or working. The picture shows a soft seat.',
    },
    more: 'Many people in Britain also call a sofa a settee or a couch.',
    tip: "Say 'sit on the sofa', with 'on'.",
  },
  shower: {
    why: 'The picture shows a shower, which sprays water from above so that you can wash standing up. You can say: I have a shower every morning.',
    not: {
      bath: 'A bath is a long tub that you sit in. The picture shows water spraying from above.',
      toilet:
        'A toilet is the seat and bowl we use when we need the loo. The picture shows a shower spraying water.',
      sink: 'A sink is a small bowl for washing your hands. The picture shows a shower.',
    },
    more: "'Shower' is also a word for a short fall of light drops from the sky.",
    tip: "Use 'have' with it: 'I have a shower before school.'",
  },
  toilet: {
    why: 'The picture shows a toilet. You can ask politely: Can I go to the toilet, please?',
    not: {
      bath: 'A bath is a long tub for washing your body. The picture shows a toilet.',
      shower: 'A shower sprays water from above. The picture shows a toilet.',
      sink: 'A sink is a small bowl with taps for washing your hands. The picture shows a toilet.',
    },
    more: "In Britain people also say 'the loo', and in public places 'the toilets'. Americans say 'the bathroom' or 'the restroom'.",
    tip: "Learn the polite question by heart: 'Excuse me, where are the toilets?'",
  },
  football: {
    why: "The picture shows a football, a round ball with black and white patches that we kick. You can say: Let's play football after school.",
    not: {
      basketball:
        'A basketball is orange with black lines, and we throw it. The picture shows a black and white ball that we kick.',
      'tennis ball':
        'A tennis ball is small, yellow and fluffy. The picture shows a bigger black and white ball.',
      'golf ball':
        'A golf ball is very small, white and hard. The picture shows a bigger ball with patches.',
    },
    more: "'Football' is both the ball and the game. In America the game is called 'soccer'.",
    tip: "Say 'play football', with no 'the': 'I play football on Saturdays.'",
  },
  guitar: {
    why: 'The picture shows a guitar, a musical instrument with six strings that we play with our fingers. You can say: My brother plays the guitar.',
    not: {
      violin:
        'A violin is smaller, and we play it with a bow, held under the chin. The picture shows a guitar.',
      drum: 'A drum is round, and we hit it with sticks. The picture shows a guitar with strings.',
      piano: 'A piano is big, with black and white keys. The picture shows a guitar.',
    },
    more: "We say 'play the guitar', with 'the', for musical instruments.",
    tip: "Compare: 'play the guitar' but 'play chess'. Instruments take 'the'; games do not.",
  },
  kite: {
    why: "The picture shows a kite, a light frame covered with cloth or paper that flies on a long string. You can say: Let's fly a kite on the beach.",
    not: {
      balloon:
        'A balloon is a soft round bag full of air or gas. The picture shows a kite on a string.',
      ball: 'A ball is round, and we throw or kick it. The picture shows a kite.',
      flag: 'A flag is a piece of cloth on a pole, often for a country. The picture shows a kite.',
    },
    more: 'A kite flies best on a breezy day, high above the trees.',
    tip: "We say 'fly a kite'. The same verb is used for planes and birds.",
  },
  balloon: {
    why: 'The picture shows a balloon, a soft rubber bag filled with air or gas, on a string. You can say: We put up balloons for the birthday.',
    not: {
      kite: 'A kite is a flat frame that flies on a long string. The picture shows a round balloon.',
      flag: 'A flag is a piece of cloth on a pole. The picture shows a balloon.',
      present:
        'A present is a gift, often in coloured paper with a bow. The picture shows a balloon.',
    },
    more: "Spelling: 'balloon' has two l's and two o's.",
    tip: "We 'blow up' a balloon, and if it bursts it goes 'pop'.",
  },
  "My mum's sister is my ___.": {
    why: "Your mum's sister is your aunt, and so is your dad's sister. You can say: My aunt lives in Leeds.",
    not: {
      cousin:
        "Your cousin is your aunt's or uncle's child. Your mum's sister is one generation older than a cousin.",
      niece:
        "Your niece is your brother's or sister's daughter. Your mum's sister is older than you, not younger.",
      grandmother:
        "Your grandmother is your mum's or dad's mother. Your mum's sister is her sister, not her mother.",
    },
    more: "In English, 'aunt' is the same word for your mum's sister and your dad's sister. Some languages have two different words.",
    tip: "Draw your family as a chart, with your mum's family on one side, and write the family words under each person.",
  },
  "My dad's brother is my ___.": {
    why: "Your dad's brother is your uncle, and so is your mum's brother. You can say: My uncle works in Manchester.",
    not: {
      cousin:
        "Your cousin is the child of your aunt or uncle. Your dad's brother is one generation older than you.",
      nephew:
        "Your nephew is your brother's or sister's son. Your dad's brother is older than you, not younger.",
      grandfather:
        "Your grandfather is your mum's or dad's father. Your dad's brother is his brother, not his father.",
    },
    more: "English uses 'uncle' for your mum's brother and your dad's brother. Many languages have a different word for each.",
    tip: "Put the name after the word: 'Uncle Sam', 'Auntie Rose'.",
  },
  "My aunt's son is my ___.": {
    why: "Your aunt's son is your cousin. Cousins are the children of your parents' brothers and sisters. You can say: My cousin and I are the same age.",
    not: {
      brother: "Your brother has the same parents as you. Your aunt's son has different parents.",
      nephew: "Your nephew is your brother's or sister's son. Your aunt's son is a cousin.",
      uncle: "An uncle is the brother of your mum or dad. Your aunt's son is in your generation.",
    },
    more: "'Cousin' is one word for male and female relatives alike.",
    tip: "Spelling: 'cousin' has 'ou' in the middle, but it sounds like 'cuz-in'.",
  },
  "My dad's mum is my ___.": {
    why: "Your dad's mum is your grandmother, and so is your mum's mum. Many children call her grandma or nan. You can say: My grandmother is eighty.",
    not: {
      aunt: 'An aunt is the sister of your mum or dad, not their mother.',
      cousin:
        "A cousin is the child of your aunt or uncle. Your dad's mum is two generations older than you.",
      granddaughter:
        "A granddaughter is your son's or daughter's daughter. That is two generations younger, not older.",
    },
    more: "'Grand' in front of a family word means two generations apart.",
    tip: 'Learn the pair: you are her grandchild, and she is your grandmother.',
  },
  "My mum's dad is my ___.": {
    why: "Your mum's dad is your grandfather, and so is your dad's dad. Many children call him grandad. You can say: My grandfather tells funny stories.",
    not: {
      uncle: 'An uncle is the brother of your mum or dad, not their father.',
      'great-uncle':
        "A great-uncle is the brother of your grandmother or grandfather. Your mum's dad is your grandfather himself.",
      grandson:
        "A grandson is your son's or daughter's son, two generations younger. Your mum's dad is two generations older.",
    },
    more: "In everyday speech people say 'grandad', 'grandpa' or 'granddad'.",
    tip: 'Spell it as two words joined: grand + father.',
  },
  "Tom and Lily have the same mum and dad. Lily is Tom's ___.": {
    why: "Tom and Lily have the same parents, so Lily is Tom's sister. You can say: I have one sister and no brothers.",
    not: {
      cousin:
        'Cousins have different parents, who are brothers or sisters. Tom and Lily have the same parents.',
      aunt: 'An aunt is the sister of your mum or dad. Lily is in the same generation as Tom.',
      daughter:
        "Lily is her parents' daughter, but the question asks what she is to Tom, her brother.",
    },
    more: "Brothers and sisters are also called siblings. 'Siblings' can mean both.",
    tip: "Use 'older' and 'younger': 'my older sister', 'my younger brother'.",
  },
  "Ana is married to Leo. Ana is Leo's ___.": {
    why: "When two people are married, each is the other's partner. Ana is married to Leo, so she is his wife, and he is her husband.",
    not: {
      sister:
        'A sister has the same parents as you. Ana and Leo are married, not brother and sister.',
      aunt: "An aunt is the sister of your mum or dad. Ana is Leo's partner in marriage.",
      daughter: "A daughter is someone's child. Ana is Leo's partner, not his child.",
    },
    more: "The plural of 'wife' is 'wives': 'f' becomes 'ves'.",
    tip: "Learn the pair: husband and wife. 'They are husband and wife' means they are married to each other.",
  },
  'Mr and Mrs Patel have two children, Raj and Priya. Raj is their ___.': {
    why: "Raj is one of Mr and Mrs Patel's two children, and he is male, so he is their son. Priya is their daughter.",
    not: {
      brother:
        "Raj is Priya's brother, but 'their' means Mr and Mrs Patel. To his parents, Raj is a son.",
      nephew: "A nephew is the son of your brother or sister. Raj is the Patels' own child.",
      uncle: 'An uncle is the brother of your mum or dad. Raj is a child of the Patels.',
    },
    more: "'Son' and 'daughter' are the words for a parent's children.",
    tip: "Read 'their' carefully. It points back to Mr and Mrs Patel, not to Priya.",
  },
  "My mum's mum and dad, and my dad's mum and dad, are my ___.": {
    why: "Your parents' parents are your grandparents. Most people have four: two on their mum's side and two on their dad's side.",
    not: {
      cousins:
        "Cousins are the children of your aunts and uncles. Your parents' parents are two generations older.",
      aunts: 'Aunts are the sisters of your mum or dad, not their parents.',
      grandchildren:
        'Grandchildren are the children of your children. That is two generations younger, not older.',
    },
    more: 'To them, you are a grandchild: a grandson or a granddaughter.',
    tip: "Use 'on my mum's side' to say which family: 'my grandparents on my dad's side'.",
  },
  'My brother and I were born on the same day, ten minutes apart. We are ___.': {
    why: 'Two children born to the same mother at the same time are twins. You and your brother were born ten minutes apart, so you are twins.',
    not: {
      cousins: 'Cousins have different parents. You and your brother have the same mum.',
      parents: 'Parents are a mother and a father. You and your brother are their children.',
      neighbours: 'Neighbours live near you. You and your brother are family.',
    },
    more: "Twins can look exactly the same or quite different. 'Identical twins' look the same.",
    tip: "Say 'my twin' for one of a pair of twins: 'My twin is taller than me.'",
  },
  "My sister's daughter is my ___.": {
    why: "Your sister's daughter is your niece, and so is your brother's daughter. You can say: My niece is three years old.",
    not: {
      cousin:
        "A cousin is the child of your aunt or uncle. Your sister's child is one generation younger than you.",
      aunt: "An aunt is the sister of your mum or dad. Your sister's daughter is younger than you.",
      granddaughter:
        "A granddaughter is your own child's daughter. Your sister's daughter is not your own child's child.",
    },
    more: "'Niece' has 'ie' in the middle, like 'piece'.",
    tip: "Remember the spelling: take the first 'e' out of 'niece' and you have 'nice'. A niece is nice.",
  },
  "My brother's son is my ___.": {
    why: "Your brother's son is your nephew, and so is your sister's son. You can say: My nephew is learning to read.",
    not: {
      cousin:
        "A cousin is the child of your aunt or uncle. Your brother's son is one generation younger than you.",
      uncle: "An uncle is the brother of your mum or dad. Your brother's son is younger than you.",
      grandson:
        "A grandson is your own child's son. Your brother's son is not your own child's child.",
    },
    more: "In 'nephew', the 'ph' sounds like 'f': nef-yoo.",
    tip: "Learn the words for your brother's and sister's children as a pair.",
  },
  'A young cat is called a ___.': {
    why: 'A young cat is a kitten. Kittens are small and playful. You can say: Our pet has had three kittens.',
    not: {
      puppy: 'A puppy is a young dog.',
      lamb: 'A lamb is a young sheep.',
      piglet: 'A piglet is a young pig.',
    },
    more: 'Many young animals have their own word. Some just add a small ending: a piglet, a duckling.',
    tip: 'Learn the young animal words in a list, with the grown-up animal beside each one.',
  },
  'A young dog is called a ___.': {
    why: 'A young dog is a puppy. Puppies like to play and chew things. You can say: The puppy chewed my shoe.',
    not: {
      kitten: 'A kitten is a young cat.',
      foal: 'A foal is a young horse.',
      chick: 'A chick is a young bird, such as a young chicken.',
    },
    more: "The plural of 'puppy' is 'puppies': take off 'y' and add 'ies'.",
    tip: "Say 'puppy' with a short 'u' sound, as in 'up'.",
  },
  'A young sheep is called a ___.': {
    why: 'A young sheep is a lamb. Many lambs are born in the spring. You can say: There are lambs in the field.',
    not: {
      calf: 'A calf is a young cow.',
      foal: 'A foal is a young horse.',
      kitten: 'A kitten is a young cat.',
    },
    more: "The 'b' in 'lamb' is silent. We say 'lam'.",
    tip: "Other words with a silent 'b' at the end: comb, climb, thumb.",
  },
  'Bees make ___.': {
    why: 'Bees make honey from nectar, a juice they collect from flowers. You can say: I like honey on toast.',
    not: {
      milk: 'Milk comes from animals such as cows and goats, not from bees.',
      butter: 'Butter is made from cream, which comes from milk. Bees do not make it.',
      wool: 'Wool comes from sheep. Bees do not make it.',
    },
    more: 'Bees store the honey to eat in winter. A person who keeps bees is a beekeeper.',
    tip: "We do not count honey: say 'some honey' or 'a jar of honey'.",
  },
  'A ___ has a very long neck and eats leaves from tall trees.': {
    why: 'A giraffe has the longest neck of any animal, so it can reach leaves at the top of tall trees. You can say: Giraffes live in Africa.',
    not: {
      zebra: 'A zebra has black and white stripes and a short neck. It eats grass.',
      hippo: 'A hippo is big and heavy, with a short neck. It spends the day in rivers.',
      kangaroo: 'A kangaroo jumps on strong back legs. It does not have a very long neck.',
    },
    more: 'Giraffes have brown patches on their fur, and no two giraffes have the same pattern.',
    tip: "The 'g' in 'giraffe' sounds like 'j', and there are two f's at the end.",
  },
  'A bird lays its eggs in a ___.': {
    why: "Birds build a nest from twigs, grass and mud, and they lay their eggs in it. You can say: There's a nest on our roof.",
    not: {
      web: 'A web is made by a spider to catch insects.',
      hive: 'A hive is the home of bees.',
      shell: 'A shell is the hard outside of an egg. The eggs are laid in a nest.',
    },
    more: 'A bird sits on its eggs to keep them warm until the young birds come out.',
    tip: "Learn animal homes together: a bird's nest, a spider's web, a fox's den.",
  },
  'Birds fly with their ___.': {
    why: 'Birds fly by moving their wings up and down. You can say: The bird opened its wings and flew away.',
    not: {
      legs: 'Birds stand and hop on their legs, but legs cannot lift them into the air.',
      ears: 'Ears are for hearing. They do not help a bird fly.',
      beaks: "A beak is a bird's hard mouth, for eating. It does not help a bird fly.",
    },
    more: 'Planes have wings too, and so do many insects.',
    tip: "Say 'a bird's wings', with the apostrophe before the 's', for one bird.",
  },
  'You can borrow books from the ___.': {
    why: 'A library lends books: you borrow them for free and give them back later. You can say: I borrowed three books from the library.',
    not: {
      bookshop:
        'A bookshop sells books. You buy them and keep them. You do not borrow books from a shop.',
      bakery: 'A bakery sells bread and cakes, not books.',
      bank: 'A bank keeps money safe. It does not lend books.',
    },
    more: "'Borrow' means take something and give it back later. 'Lend' is the other side: the library lends you a book.",
    tip: "Do not mix up 'library' and 'bookshop'. In many languages, a word like 'library' means a bookshop.",
  },
  'You can buy bread and cakes at the ___.': {
    why: 'A bakery bakes and sells bread, cakes and buns. You can say: I bought two rolls at the bakery.',
    not: {
      library: 'A library lends books. It does not sell bread.',
      pharmacy: 'A pharmacy sells medicine, not bread and cakes.',
      bank: 'A bank looks after money. It does not sell bread or cakes.',
    },
    more: "A person who bakes bread is a baker. We also say 'the baker's' for the shop.",
    tip: "Places where things are made often end in '-ery': bakery, pottery.",
  },
  'You can buy medicine at the ___.': {
    why: 'A pharmacy sells medicine, and a pharmacist can give you advice when you feel ill. You can say: I need to go to the pharmacy.',
    not: {
      bakery: 'A bakery sells bread and cakes, not medicine.',
      library: 'A library lends books, not medicine.',
      'post office': 'A post office sends letters and parcels. It does not sell medicine.',
    },
    more: "In Britain people also call a pharmacy a chemist or a chemist's.",
    tip: "The 'ph' in 'pharmacy' sounds like 'f': far-ma-see.",
  },
  'You can send letters and parcels at the ___.': {
    why: 'At a post office you buy stamps and send letters and parcels. You can say: I posted a parcel to Spain.',
    not: {
      'police station': 'Police officers work at a police station. You go there to report a crime.',
      'bus station': 'Buses start and stop at a bus station. You cannot send letters there.',
      'swimming pool': 'You go to a swimming pool to swim. You cannot send letters there.',
    },
    more: "In Britain, letters also go in a red postbox in the street. 'Post' means send by mail.",
    tip: "Learn the verb 'post': 'I posted the letter yesterday.'",
  },
  'Doctors and nurses work in a ___.': {
    why: 'A hospital is where doctors and nurses look after people who are ill or hurt. You can say: She works in a hospital in London.',
    not: {
      hotel: 'A hotel is where you sleep and eat on holiday.',
      museum: 'A museum shows old and interesting things.',
      restaurant: 'A restaurant is where you pay to eat a meal.',
    },
    more: "In British English we say 'in hospital' with no 'the': 'She is in hospital.'",
    tip: "Say 'go to hospital' when someone needs care there.",
  },
  'You can see dinosaur bones in a ___.': {
    why: 'A museum keeps and shows old and interesting things, such as dinosaur bones and old coins. You can say: We visited the Natural History Museum.',
    not: {
      cinema: 'A cinema shows films on a big screen.',
      stadium: 'A stadium is a big ground for sport and concerts.',
      hospital: 'A hospital is where ill people are cared for.',
    },
    more: 'Many big museums in Britain are free to visit.',
    tip: "Say 'museum' in three parts: mew-zee-um.",
  },
  'We watch a film at the ___.': {
    why: "A cinema shows films on a big screen. You can say: Let's go to the cinema on Saturday.",
    not: {
      museum: 'A museum shows old and interesting objects.',
      library: 'A library lends books.',
      stadium: 'A stadium is for sport and concerts.',
    },
    more: "American English says 'go to the movies'. British English says 'go to the cinema'.",
    tip: "We say 'at the cinema' or 'to the cinema', always with 'the'.",
  },
  'You catch a train at the ___.': {
    why: 'Trains stop at a station, where people get on and off. You can say: The station is five minutes from here.',
    not: {
      airport: 'Planes take off and land at an airport.',
      harbour: 'Boats and ships stay in a harbour.',
      'car park': 'You leave a car in a car park. Trains do not stop there.',
    },
    more: "We also say 'railway station' or 'train station'.",
    tip: "Learn 'get on' and 'get off': get on at one station and get off at another.",
  },
  'Planes take off and land at the ___.': {
    why: 'An airport is where planes take off and land. You can say: We were at the airport at six in the morning.',
    not: {
      station: 'Trains and buses stop at a station.',
      harbour: 'Boats stay in a harbour.',
      garage: 'A garage is a building for a car, or a place that mends cars.',
    },
    more: 'At the airport, you check in your bags and go through security.',
    tip: "'Take off' and 'land' are the two big moments of a flight.",
  },
  'You can watch a football match at the ___.': {
    why: 'A stadium is a big sports ground with seats all round it. You can say: Sixty thousand people were at the stadium.',
    not: {
      library: 'A library lends books.',
      museum: 'A museum shows old and interesting things.',
      hospital: 'A hospital cares for ill people.',
    },
    more: 'Big concerts happen in stadiums too.',
    tip: "In everyday English the plural is 'stadiums'.",
  },
  'We cook dinner in the ___.': {
    why: 'The kitchen is the room where we cook and wash the dishes. You can say: Dad is cooking in the kitchen.',
    not: {
      bedroom: 'A bedroom is the room where you sleep.',
      bathroom: 'A bathroom is the room where you wash and have a bath.',
      garage: 'A garage is a building where you keep a car.',
    },
    more: "The names of many rooms end in 'room', such as living room and dining room. 'Kitchen' does not.",
    tip: "Spelling: 'kitchen' has 'tch' in the middle, like 'match'.",
  },
  'At night I sleep in my ___.': {
    why: 'A bedroom is the room where you sleep at night. You can say: My bedroom is upstairs.',
    not: {
      kitchen: 'A kitchen is the room where you cook.',
      bathroom: 'A bathroom is the room where you wash.',
      garden: 'A garden is outside, with grass and flowers. We do not sleep there at night.',
    },
    more: "We say 'in my bedroom', with 'in', for a room.",
    tip: "Describe your room in two sentences: 'My bedroom is small. It has a big window.'",
  },
  'Dad parks the car in the ___.': {
    why: 'A garage is a building where you keep a car, often next to a home. You can say: Our bikes are in the garage.',
    not: {
      garden: 'A garden has grass and plants. We do not usually park a car there.',
      kitchen: 'A kitchen is a room for cooking. A car cannot go inside.',
      hall: 'A hall is the space inside the front door. A car cannot go there.',
    },
    more: 'In British English, a garage is also a place that mends cars or sells petrol.',
    tip: "Both 'GA-rahzh' and 'GA-ridge' are heard in Britain. Either is fine.",
  },
  'Keep the milk cold in the ___.': {
    why: 'A fridge keeps food and drinks cold, so they stay fresh. You can say: Put the butter back in the fridge.',
    not: {
      oven: 'An oven makes food hot. It does not keep milk cold.',
      cupboard: 'A cupboard is for plates and dry food. It is not cold inside.',
      sink: 'A sink is for washing up. It does not keep things cold.',
    },
    more: "'Fridge' is short for 'refrigerator'. A freezer is even colder and freezes food.",
    tip: "The 'dge' in 'fridge' sounds like 'j', as in 'badge'.",
  },
  'Bake the cake in the ___.': {
    why: 'An oven is a hot box where we bake and roast food. You can say: Take the tray out of the oven.',
    not: {
      fridge: 'A fridge keeps food cold. You cannot bake in it.',
      sink: 'A sink is for washing dishes.',
      freezer: 'A freezer freezes food. It is very cold, not hot.',
    },
    more: 'We bake cakes and biscuits in an oven, and we roast meat in it too.',
    tip: "Say 'an oven', with 'an', because it begins with a vowel sound.",
  },
  'Put your head on the ___ and go to sleep.': {
    why: 'A pillow is the soft cushion where you rest your head at night. You can say: I like a soft pillow.',
    not: {
      blanket: 'A blanket covers your body to keep you warm. Your head goes on the pillow.',
      towel: 'A towel is for drying yourself.',
      carpet: 'A carpet covers the floor.',
    },
    more: 'A pillowcase is the cotton cover that goes over a pillow.',
    tip: 'Learn the bedding words together: pillow, sheet, duvet.',
  },
  'Dry your hands with a ___.': {
    why: 'A towel is a piece of soft cloth that we dry ourselves with after washing. You can say: Can I have a clean towel, please?',
    not: {
      soap: 'Soap is for washing, not drying.',
      pillow: 'A pillow is for your head in bed.',
      brush: 'A brush is for your hair or for cleaning.',
    },
    more: "We say 'dry your hands' and 'dry yourself'. A small towel for your face is a flannel.",
    tip: 'Pair each bathroom word with its job: soap washes, a towel dries.',
  },
  'Turn on the ___ and fill your glass with water.': {
    why: "A tap lets water come out over a sink. You turn it on and off. You can say: Don't leave the tap running.",
    not: {
      plug: 'A plug connects a machine to electricity, or stops water going down a sink.',
      fan: 'A fan moves air to keep you cool.',
      lamp: 'A lamp gives light.',
    },
    more: 'Many British sinks have two taps, marked H and C.',
    tip: "Learn 'turn on' and 'turn off': turn on the tap, turn off the tap.",
  },
  'A ___ flies a plane.': {
    why: 'A pilot is the person who flies a plane. You can say: The pilot said hello to everyone on the plane.',
    not: {
      driver: 'A driver drives a car, a bus or a lorry on the road.',
      sailor: 'A sailor works on a ship at sea.',
      chef: 'A chef cooks food in a restaurant.',
    },
    more: 'The pilot in charge of a plane is called the captain.',
    tip: "Many job words end in '-er' or '-or', but 'pilot' does not. Learn it on its own.",
  },
  'A ___ cooks food in a restaurant.': {
    why: 'A chef is a person whose job is to cook in a restaurant or a hotel. You can say: The chef made a delicious soup.',
    not: {
      waiter: 'A waiter brings the food to your table, but does not cook it.',
      farmer: 'A farmer grows food and keeps animals on a farm.',
      vet: 'A vet looks after sick animals.',
    },
    more: "'Chef' comes from French. The 'ch' sounds like 'sh': shef.",
    tip: "At home we say 'cook' for anyone who cooks. 'Chef' is usually the job in a restaurant.",
  },
  'A ___ brings your food to the table in a café.': {
    why: 'A waiter takes your order and brings food and drinks to your table. You can say: The waiter brought us some water.',
    not: {
      driver: 'A driver drives a vehicle.',
      farmer: 'A farmer works on a farm.',
      nurse: 'A nurse looks after ill people.',
    },
    more: "Some people say 'waitress' for a female waiter, but many now say 'waiter' for everyone.",
    tip: "Ask a waiter politely: 'Excuse me, could we order, please?'",
  },
  'A ___ looks after your teeth.': {
    why: 'A dentist checks your teeth, cleans them and mends them when they hurt. You can say: I go to the dentist twice a year.',
    not: {
      optician: 'An optician checks your eyes and sells glasses.',
      vet: 'A vet looks after animals.',
      pilot: 'A pilot flies planes.',
    },
    more: "We say 'go to the dentist' or 'go to the dentist's'.",
    tip: 'Learn the person and the place: a dentist works at a dental surgery.',
  },
  'A ___ looks after sick animals.': {
    why: 'A vet is a doctor for animals. You take a pet to the vet when it is ill. You can say: We took our pet to the vet.',
    not: {
      dentist: "A dentist looks after people's teeth.",
      pilot: 'A pilot flies planes.',
      waiter: 'A waiter serves food in a restaurant.',
    },
    more: "'Vet' is short for 'veterinary surgeon'.",
    tip: "Learn the long form once, veterinary surgeon. Then just say 'vet', as everyone does.",
  },
  'A ___ grows crops and looks after animals in the fields.': {
    why: 'A farmer works on a farm, growing crops such as wheat and keeping animals. You can say: The farmer drives a tractor.',
    not: {
      baker: 'A baker makes bread and cakes.',
      butcher: 'A butcher sells meat in a shop.',
      builder: 'A builder builds houses and walls.',
    },
    more: 'Crops are plants that farmers grow for food, such as wheat and barley.',
    tip: "Add '-er' to make a job: farm, farmer; bake, baker; build, builder.",
  },
  'A ___ sprays water on a burning house.': {
    why: 'A firefighter puts out fires: they spray water on burning buildings and rescue the people inside. You can say: The firefighters came quickly.',
    not: {
      'police officer':
        'A police officer keeps people safe and catches criminals. Police officers do not put out fires.',
      lifeguard: 'A lifeguard watches swimmers at a pool or a beach.',
      builder: 'A builder builds houses. A builder does not put out fires.',
    },
    more: "People used to say 'fireman', but 'firefighter' is the word for everyone today.",
    tip: 'In the UK, call 999 for the fire service in an emergency.',
  },
  'A ___ sells meat.': {
    why: "A butcher cuts and sells meat, such as beef and chicken, in a shop. You can say: We bought sausages at the butcher's.",
    not: {
      baker: 'A baker sells bread and cakes.',
      florist: 'A florist sells flowers.',
      waiter: 'A waiter serves food in a restaurant.',
    },
    more: "We often say 'the butcher's' for the shop, just as we say 'the baker's'.",
    tip: "The 'u' in 'butcher' sounds like the 'oo' in 'book'.",
  },
  'We eat ___ in the morning.': {
    why: 'Breakfast is the first meal of the day, eaten in the morning. You can say: I have cereal for breakfast.',
    not: {
      lunch: 'Lunch is the meal in the middle of the day.',
      dinner: 'Dinner is the main meal, usually in the evening.',
      'afternoon tea': 'Afternoon tea is a small meal of sandwiches and cakes in the afternoon.',
    },
    more: "'Breakfast' means breaking a fast: it ends the long night without food.",
    tip: "Say 'have breakfast', with no 'a': 'I have breakfast at seven.'",
  },
  "I'd like a ___ of chocolate, please.": {
    why: 'Chocolate often comes in a long piece called a bar. You can say: Can I have a bar of chocolate?',
    not: {
      loaf: 'A loaf is a whole piece of bread.',
      bunch: 'A bunch is a group of things joined together, such as bananas or flowers.',
      slice: 'A slice is a thin piece cut from something bigger, such as bread or cake.',
    },
    more: "We also say 'a bar of soap'.",
    tip: 'Learn each food with its counting word: a bar of chocolate, a carton of juice.',
  },
  'Can I have a ___ of bread, please?': {
    why: 'A slice is a thin piece cut from a loaf. You can say: I had two slices of toast.',
    not: {
      cup: 'A cup is for drinks, such as tea.',
      bar: 'A bar is for chocolate or soap.',
      bottle: 'A bottle is for drinks.',
    },
    more: 'We can cut slices of many foods: a slice of cake, a slice of ham.',
    tip: "'Slice' is a noun and a verb: 'Slice the cake' means cut it into slices.",
  },
  'I bought a ___ of bananas.': {
    why: 'Bananas grow, and are sold, joined together in a bunch. You can say: A bunch of bananas costs one pound.',
    not: {
      loaf: 'A loaf is a whole piece of bread.',
      slice: 'A slice is a thin piece cut from something.',
      bar: 'A bar is a piece of chocolate or soap.',
    },
    more: "We also say 'a bunch of flowers' and 'a bunch of grapes'.",
    tip: "The 'u' in 'bunch' sounds like the 'u' in 'lunch'.",
  },
  'Lemons taste ___.': {
    why: 'Lemons taste sour: sharp and acid. You can say: This lemon juice is really sour.',
    not: {
      sweet: 'Sweet is the taste of sugar. Lemons are not sweet.',
      salty: 'Salty is the taste of salt, as in crisps.',
      hot: 'Hot food has chillies or spice in it. Lemons are not hot.',
    },
    more: 'Vinegar tastes sour too.',
    tip: "Use 'taste' with an adjective: 'It tastes sour.' Do not say 'It tastes sourly.'",
  },
  'Sugar tastes ___.': {
    why: 'Sugar tastes sweet, like jam and cake. You can say: This drink is too sweet.',
    not: {
      sour: 'Sour is the taste of lemons and vinegar.',
      salty: 'Salty is the taste of salt.',
      bitter: 'Bitter is the strong taste of black coffee or dark chocolate.',
    },
    more: "'Sweets' is also the British word for small sugary things, like toffees and mints.",
    tip: "Say 'It tastes sweet', not 'It tastes sweetly'. After 'taste', use an adjective.",
  },
  'We eat soup with a ___.': {
    why: 'A spoon has a small round end that can hold liquid. You can say: Can I have a spoon, please?',
    not: {
      fork: 'A fork has points. Soup would run through it.',
      knife: 'A knife is for cutting, not for liquid food.',
      plate: 'A plate is for putting food on. You eat the soup itself with a spoon.',
    },
    more: 'A teaspoon is small, and a tablespoon is big.',
    tip: 'Learn the set: knife, fork and spoon. Together they are called cutlery.',
  },
  'It is snowing. Put on your ___ to keep your hands warm.': {
    why: 'Gloves cover your hands and fingers and keep them warm. You can say: My gloves are made of wool.',
    not: {
      socks: 'Socks keep your feet warm, not your hands.',
      scarf: 'A scarf keeps your neck warm.',
      slippers: 'Slippers are soft shoes for wearing indoors.',
    },
    more: 'Wool and leather are both good for gloves.',
    tip: "Say what you wear in winter: 'In winter I wear ...'.",
  },
  'It is raining. Open your ___ so you stay dry.': {
    why: 'An umbrella opens over your head and keeps you dry. You can say: Can I share your umbrella?',
    not: {
      sunglasses: 'Sunglasses protect your eyes from bright light. They do not keep you dry.',
      gloves: 'Gloves keep your hands warm, not dry.',
      scarf: 'A scarf keeps your neck warm.',
    },
    more: 'We open and close an umbrella. Some people call it a brolly.',
    tip: "Say 'an umbrella', with 'an', because it begins with a vowel sound.",
  },
  'It is very bright today. Wear your ___ to protect your eyes.': {
    why: 'Sunglasses have dark lenses that protect your eyes from bright light. You can say: I always take sunglasses on holiday.',
    not: {
      gloves: 'Gloves are for your hands.',
      scarf: 'A scarf is for your neck.',
      slippers: 'Slippers are soft shoes for indoors.',
    },
    more: "We say 'a pair of sunglasses', because they have two lenses.",
    tip: 'Split long words into the words inside them. This one has two.',
  },
  'Put on your ___ before you go to bed.': {
    why: 'Pyjamas are soft, loose clothes that we sleep in. You can say: I put on my pyjamas at nine.',
    not: {
      uniform: 'A uniform is for school or work, not for sleeping.',
      swimsuit: 'A swimsuit is for swimming.',
      raincoat: 'A raincoat keeps you dry outside.',
    },
    more: "'Pyjamas' is always plural. The British spelling has a 'y'; Americans spell it 'pajamas'.",
    tip: 'Learn the night routine in order: wash, put on your pyjamas, sleep.',
  },
  "Put on your ___. We're going into the sea.": {
    why: "A swimsuit is what we wear to swim. You can say: Don't forget your swimsuit.",
    not: {
      raincoat: 'A raincoat keeps you dry in the rain. You do not wear it to swim.',
      uniform: 'A uniform is for school or work.',
      'dressing gown': 'A dressing gown is a soft coat you wear at home over your pyjamas.',
    },
    more: 'Boys often wear swimming trunks, and girls often wear a swimsuit.',
    tip: 'Spell it as two words joined: swim + suit.',
  },
  'Wear a ___ on your head when you ride your bike.': {
    why: 'A cycle helmet protects your head if you fall off your bike. You can say: I never ride without my helmet.',
    not: {
      'seat belt': 'A seat belt holds you in your seat in a car.',
      'life jacket': 'A life jacket keeps you floating in water.',
      apron: 'An apron protects your clothes when you cook.',
    },
    more: 'Builders and motorbike riders wear helmets too.',
    tip: "Say 'Put your helmet on' and 'Take your helmet off'.",
  },
  'In a car, the law says you must wear a ___.': {
    why: 'A seat belt holds you safely in your seat. In the UK, everyone in a car must wear one.',
    not: {
      helmet: 'A helmet is for cycling or riding a motorbike, not for a car.',
      'life jacket': 'A life jacket is for boats and water.',
      uniform: 'A uniform is for school or work.',
    },
    more: "We say 'put on your seat belt' or 'fasten your seat belt'.",
    tip: "Learn 'fasten' with it: 'Please fasten your seat belt.'",
  },
  'Your ___ is in the middle of your leg, where it bends.': {
    why: 'Your knee is the joint in the middle of your leg. It lets your leg bend. You can say: I fell over and hurt my knee.',
    not: {
      elbow: 'Your elbow is in the middle of your arm, not your leg.',
      wrist: 'Your wrist is at the end of your arm.',
      ankle: 'Your ankle is near the bottom of your leg, just above your foot.',
    },
    more: "The 'k' in 'knee' is silent: we say 'nee'. The same is true for 'knife' and 'know'.",
    tip: 'Learn the pair: your knee bends your leg, and your elbow bends your arm.',
  },
  'You wear a ring on your ___.': {
    why: 'A ring is a small circle of metal that we wear on a finger. You can say: She wears a silver ring.',
    not: {
      neck: 'We wear a necklace on the neck, not a ring.',
      knee: 'A knee is the middle of your leg. We do not wear rings there.',
      elbow: 'An elbow is the middle of your arm. We do not wear rings there.',
    },
    more: 'Each one has a name: thumb, index finger, middle finger, ring finger and little finger.',
    tip: "The 'ring finger' is the one next to your little finger.",
  },
  'You wear a watch on your ___.': {
    why: 'Your wrist is the thin part at the end of your arm, where a watch sits. You can say: My watch is on my left wrist.',
    not: {
      ankle: 'Your ankle joins your leg to your foot. We do not wear a watch there.',
      elbow: 'Your elbow is the middle of your arm, where it bends.',
      knee: 'Your knee is the middle of your leg.',
    },
    more: 'Your ankle is a joint like this one, lower down.',
    tip: "The first letter of 'wrist' is silent: we say 'rist'.",
  },
  'I brush my ___ after every meal.': {
    why: 'We brush our teeth to keep them clean and healthy. You can say: I brush my teeth twice a day.',
    not: {
      nails: 'Nails are on the ends of your fingers and toes. We do not brush them after meals.',
      ears: 'We clean our ears, but we do not brush them after meals.',
      feet: 'We wash our feet, but we do not brush them after meals.',
    },
    more: 'We brush with a toothbrush and toothpaste.',
    tip: "Learn the phrase 'brush your teeth', with 'your', not 'the'.",
  },
  'Tom has not eaten all day. He is very ___.': {
    why: "When you have not eaten for a long time, you are hungry: you want food. You can say: I'm hungry. What's for dinner?",
    not: {
      thirsty: 'Thirsty means you want a drink. Tom has not eaten, so he wants food.',
      full: 'Full means you have eaten enough. Tom has not eaten at all.',
      cold: 'Cold is about temperature, not food. Not eating does not make you cold.',
    },
    more: "'Starving' is a strong, informal word for very hungry.",
    tip: "Say 'I'm hungry', not 'I have hungry'. English uses 'be' with this word.",
  },
  'Mia needs a drink of water. She is ___.': {
    why: "When you need a drink, you are thirsty. You can say: I'm thirsty. Can I have some juice?",
    not: {
      hungry: 'Hungry means you need food. Mia needs a drink.',
      full: 'Full means you have had enough to eat or drink.',
      excited: 'Excited means very pleased about something that will happen.',
    },
    more: "The noun is 'thirst'.",
    tip: "Use 'be': 'I am thirsty.' Some languages say 'I have thirst', but English uses 'be'.",
  },
  'Leo is yawning, and his eyes keep closing. He is ___.': {
    why: "Yawning and closing eyes are signs that you need sleep, so Leo is tired. You can say: I'm tired. I need a rest.",
    not: {
      angry: 'Angry people may shout, but they do not yawn and close their eyes.',
      hungry: 'Hungry means you need food. Yawning shows you need sleep.',
      thirsty: 'Thirsty means you need a drink. Yawning shows you need sleep.',
    },
    more: "'Sleepy' and 'exhausted' are other words. 'Exhausted' means very, very tired.",
    tip: "In British English the 'r' in 'tired' is not said: 'tie-ud'.",
  },
  'Our team won the cup. We are all very ___.': {
    why: "When something good happens, like winning, people feel happy. You can say: I'm so happy for you.",
    not: {
      sad: 'Sad is how you feel when something bad happens. Winning is good news.',
      angry: 'Angry is how you feel when something is unfair.',
      bored: 'Bored means you have nothing interesting to do.',
    },
    more: "Stronger words are 'delighted' and 'thrilled'.",
    tip: 'Learn feelings in pairs of opposites, and say a sentence for each.',
  },
  'Sam has lost his favourite cap. He is ___.': {
    why: "Losing something you love makes you sad. You can say: I'm sad because my friend is moving away.",
    not: {
      happy: 'Happy is how you feel when something good happens. Losing a cap is bad news.',
      excited: 'Excited is how you feel before something fun.',
      proud: 'Proud is how you feel when you or someone you love does well.',
    },
    more: "'Upset' and 'unhappy' are close in meaning.",
    tip: "Say the 'a' in this word as in 'bad'.",
  },
  'Zoe sees a big spider on her bed. She is ___.': {
    why: 'Many people are scared of spiders. Scared means afraid. You can say: My little brother is scared of the dark.',
    not: {
      bored:
        'Bored means you have nothing interesting to do. A spider on the bed is not boring for Zoe.',
      proud: 'Proud is a good feeling about something you did well.',
      hungry: 'Hungry means you need food.',
    },
    more: "'Frightened' and 'afraid' mean the same. We say 'scared of': 'scared of spiders'.",
    tip: "Learn 'scared of' as a pair: 'What are you scared of?'",
  },
  "There is nothing to do, and the rain won't stop. Max is ___.": {
    why: "When there is nothing to do, you feel bored. You can say: I'm bored. Let's play a game.",
    not: {
      proud: 'Proud means pleased about something you did well.',
      full: 'Full means you have eaten enough.',
      brave: 'Brave means not afraid of danger.',
    },
    more: "Do not mix up 'bored' and 'boring'. Max is bored because the day is boring.",
    tip: "Use '-ed' for how you feel and '-ing' for the thing that makes you feel it.",
  },
  "Ella's little brother broke her new phone. She is very ___.": {
    why: 'When someone breaks something of yours, you may feel angry. You can say: Dad was angry because we were late.',
    not: {
      happy: 'Happy is a good feeling. A broken phone is bad news.',
      proud: 'Proud is a good feeling about something done well.',
      bored: 'Bored means there is nothing to do.',
    },
    more: "We say 'angry with' a person and 'angry about' a thing.",
    tip: "A stronger word is 'furious', which means very angry.",
  },
  "Take your coat. It's very ___ today.": {
    why: "We wear a coat when it is cold, to stay warm. You can say: It's cold, so put on a jumper.",
    not: {
      hot: 'On a hot day we do not need a coat.',
      sunny: 'Sunny means the sun is shining. It does not tell us to take a coat.',
      warm: 'On a warm day we do not need a coat.',
    },
    more: "'Freezing' means very cold, and 'chilly' means a little cold.",
    tip: "Say 'It's cold', not 'It has cold'. English uses 'it is' for this.",
  },
  "There's a lot of ___ today. I can't see the end of the street.": {
    why: "Fog is thick, wet air near the ground. It makes it hard to see far. You can say: The fog was so thick that we couldn't see the hills.",
    not: {
      sun: 'The sun helps us see. It does not hide the end of the street.',
      wind: 'Wind is moving air. You can still see through it.',
      heat: 'Heat makes the day hot, but you can still see through the air.',
    },
    more: "The adjective is 'foggy': 'It's foggy today.'",
    tip: 'Drivers turn on their lights when there is fog.',
  },
  "It's very ___ today. Hold on to your hat.": {
    why: "When it is windy, the moving air can blow your hat off. You can say: It's very windy on the hill.",
    not: {
      sunny: 'Sunny means the sun is shining. It will not blow your hat off.',
      foggy: 'Foggy means it is hard to see. Fog does not blow your hat off.',
      cold: 'Cold is about temperature. It does not blow your hat off.',
    },
    more: 'Strong gusts can even knock over bins.',
    tip: "Many words for the sky end in 'y': cloudy, stormy, snowy.",
  },
  "It's ___ today, so the beach will be hot and busy.": {
    why: "When the sky is clear and bright, it is sunny, and people go to the beach. You can say: It's sunny, so let's have a picnic.",
    not: {
      foggy: 'On a foggy day it is hard to see and not hot.',
      rainy: 'On a rainy day most people stay away from the beach.',
      stormy: 'On a stormy day the sea is rough and few people go to the beach.',
    },
    more: 'On a bright day, drink plenty of water and stay in the shade at midday.',
    tip: "This adjective doubles a letter before the 'y': two n's.",
  },
  'You need a ___ to travel by train.': {
    why: 'You buy a ticket before you travel by train, and you show it if someone asks. You can say: Can I buy a ticket to York, please?',
    not: {
      stamp: 'A stamp goes on a letter.',
      receipt: 'A receipt shows what you paid in a shop.',
      map: 'A map shows you where places are.',
    },
    more: 'A single ticket is for one way, and a return ticket is for there and back.',
    tip: "Learn 'buy a ticket' and 'show your ticket'.",
  },
  'We went across the sea on a ___.': {
    why: 'A ferry carries people, and often their cars, across a stretch of water. You can say: We took the ferry to France.',
    not: {
      bus: 'A bus drives on roads. It cannot cross the sea.',
      train:
        'A train runs on rails. It can go through a tunnel under the sea, but it does not go across the water.',
      lorry: 'A lorry drives on roads. It can go on a ferry, but it cannot cross the sea itself.',
    },
    more: 'Ferries cross the English Channel between Britain and France every day.',
    tip: "Say 'by ferry' or 'on the ferry': 'We went by ferry.'",
  },
  'Look left and right before you cross the ___.': {
    why: 'Cars and lorries drive along the road, so look both ways before you cross. You can say: Always cross the road at a crossing.',
    not: {
      river: 'A river is water. You cross it on a bridge, not by looking left and right.',
      sea: 'The sea is very wide water. You do not cross it on foot.',
      beach: 'A beach is sand by the sea. There is no traffic on it.',
    },
    more: 'In the UK, vehicles drive on the left, so look right first, then left.',
    tip: "Learn 'cross the road' as one phrase.",
  },
  'In ___, you hit a ball over a net with a racket.': {
    why: 'In tennis, players hit a ball over a net with a racket. You can say: Do you want to play tennis?',
    not: {
      golf: 'In golf, you hit a small ball into a hole with a club. There is no net.',
      football: 'In football, you kick a ball. You do not use a racket.',
      cricket: 'In cricket, you hit a ball with a bat, not a racket, and there is no net.',
    },
    more: 'Wimbledon, in London, is the most famous tennis tournament in the world.',
    tip: "Spelling: 'tennis' has two n's, and 'racket' has 'ck'.",
  },
  'You play the ___ by pressing black and white keys.': {
    why: 'A piano has a row of black and white keys. You press them with your fingers to make music. You can say: My friend plays the piano.',
    not: {
      guitar: 'A guitar has strings that you pluck. It has no keys.',
      drum: 'You hit a drum with sticks. It has no keys.',
      violin: 'You play a violin with a bow. It has no keys.',
    },
    more: 'A piano has 88 keys: 52 white and 36 black.',
    tip: "Say 'play the piano', with 'the', as for every instrument.",
  },
  'The subject still held them when Joe came in from his work to have a ___ of tea.': {
    why: "We drink tea from a cup, so 'a cup of tea' is the phrase. Joe comes in from his work as a blacksmith and sits down for his tea.",
    not: {
      loaf: 'A loaf is bread. You cannot have a loaf of tea.',
      slice: 'A slice is a thin piece of food, not a drink.',
      bar: 'A bar is for chocolate or soap.',
    },
    more: "In Great Expectations, Joe Gargery is Pip's kind brother-in-law, the village blacksmith.",
    tip: "Learn 'a cup of' with hot drinks: a cup of tea, a cup of coffee.",
  },
  'Mix the flour, sugar and eggs in a big ___.': {
    why: 'A bowl is deep and round, so you can mix food in it without spilling.',
    not: {
      plate: 'A plate is too flat to mix things in.',
      glass: 'A glass is for drinks.',
      tray: 'A tray is flat, for carrying things.',
    },
    more: 'A mixing bowl is a big bowl used for baking.',
    tip: 'Learn the baking verbs: mix, stir, pour, bake.',
  },
  'The farmer gets up early to milk his ___.': {
    why: 'Farmers milk cows to get the milk we drink. That is why the farmer gets up early.',
    not: {
      hens: 'Hens give us eggs, not milk.',
      pigs: 'Farmers keep pigs for meat, not for milk.',
      dogs: 'Farm dogs help with sheep. Farmers do not milk them.',
    },
    more: 'Many farms milk their cows twice a day, early in the morning and again later.',
    tip: "'Milk' is a verb too: 'He milks the cows.'",
  },
  'The tortoise pulled its head into its ___.': {
    why: 'A tortoise has a hard shell on its back. When it is afraid, it pulls its head inside.',
    not: {
      nest: 'A nest is a home that birds make.',
      cage: 'A cage is for keeping a pet in.',
      pocket: 'A pocket is part of your clothes.',
    },
    more: 'A tortoise lives on land. A turtle is a similar animal that lives mostly in water.',
    tip: "Learn 'shell' with other animals: a snail's shell, a crab's shell.",
  },
  'The dog wagged its ___ because it was happy to see us.': {
    why: 'A dog moves its tail from side to side, or wags it, when it is happy.',
    not: {
      paws: "Paws are a dog's feet. Dogs do not wag them.",
      ears: 'Ears can move, but we say a dog wags its tail.',
      legs: 'A dog runs on its legs. It does not wag them.',
    },
    more: "'Wag' means move from side to side.",
    tip: "Learn 'wag its tail' as one phrase.",
  },
  'A caterpillar turns into a ___.': {
    why: 'A caterpillar makes a hard case, called a chrysalis, and later comes out of it as a butterfly.',
    not: {
      bee: 'A bee starts life as a small grub, not a caterpillar.',
      spider: 'A spider hatches from an egg as a tiny spider.',
      ladybird: 'A ladybird starts as a larva that is not a caterpillar.',
    },
    more: 'Some caterpillars turn into moths instead.',
    tip: 'Learn the life cycle in order: caterpillar, chrysalis, butterfly.',
  },
  'We get honey from bees, wool from sheep and ___ from hens.': {
    why: 'Hens lay eggs, and farmers collect them for us to eat.',
    not: {
      milk: 'Milk comes from cows and goats, not hens.',
      butter: 'Butter is made from cream, not from hens.',
      cheese: 'Cheese is made from milk, not from hens.',
    },
    more: 'A male chicken is a cockerel, and a female one is a hen.',
    tip: "In a list, put 'and' before the last thing: honey, wool and eggs.",
  },
  "Ella's mum has a brother called Ben. Ben has a son called Joe. Joe is Ella's ___.": {
    why: "Ben is the brother of Ella's mum. Joe is Ben's son, so Joe's dad and Ella's mum are siblings. That makes Joe and Ella cousins.",
    not: {
      nephew:
        "Joe is the nephew of Ella's mum, because he is her brother's son. To Ella he is a cousin.",
      brother: "A brother has the same parents as you. Joe's dad is Ben, not Ella's dad.",
      uncle: "Ben is the uncle. Joe is his son, in Ella's generation.",
    },
    more: 'The children of two siblings are always cousins.',
    tip: 'Work it out in steps: first place Ben, then place Joe. Write each step down.',
  },
  "Sam's dad has a sister called Rosa. Sam is Rosa's ___.": {
    why: "Rosa's brother is Sam's dad, so Sam is her brother's son. That makes Sam her nephew.",
    not: {
      son: "Rosa is not Sam's mother. She is his dad's sister.",
      cousin: "Sam's cousins would be Rosa's children. Sam himself is Rosa's nephew.",
      brother: "Rosa's brother is Sam's dad, not Sam.",
    },
    more: 'Family words often come in pairs that look at one link from both ends.',
    tip: "Read the question for whose word it wants: 'Sam is Rosa's ___' asks what Sam is to Rosa.",
  },
  "Lily's aunt Kate has just had a baby girl. The baby is Lily's ___.": {
    why: "Kate is Lily's aunt, so Kate's new baby is Lily's cousin.",
    not: {
      sister: "A sister has the same parents. The baby's mother is Kate, not Lily's mum.",
      niece:
        "A niece is your brother's or sister's daughter. The baby is the daughter of Lily's aunt.",
      aunt: "Kate is the aunt. The baby is in Lily's generation.",
    },
    more: 'A cousin can be much younger or older than you. The word is the same whatever their age.',
    tip: 'When a question names a baby, ask: who is its mother? Then the word follows.',
  },
  "A: Who's that girl with your brother?\nB: That's Lucy, his daughter. She's my ___.": {
    why: "Lucy is the daughter of B's brother. Your brother's or sister's daughter is your niece.",
    not: {
      cousin: "A cousin is the child of your aunt or uncle. Lucy is the child of B's brother.",
      sister: "A sister has the same parents as you. Lucy's dad is B's brother.",
      granddaughter:
        "A granddaughter is your own child's daughter. Lucy is B's brother's daughter.",
    },
    more: "In the dialogue, 'his' points back to 'your brother'.",
    tip: "Follow the small words: 'his daughter' means the brother's daughter.",
  },
  "Leo's mum married again last year. Her new husband, Dan, is Leo's ___.": {
    why: "When your mum marries a new husband, he becomes your stepfather. Dan is Leo's stepfather.",
    not: {
      'father-in-law':
        "A father-in-law is your husband's or wife's father. Leo is not married to Dan's child.",
      uncle: "An uncle is your mum's or dad's brother. Dan is married to Leo's mum.",
      grandfather: "A grandfather is your mum's or dad's father. Dan is Leo's mum's husband.",
    },
    more: "'Step' family words come from a parent's new marriage: stepfather, stepmother, stepbrother, stepsister.",
    tip: "Keep 'step-' and '-in-law' apart: a stepfather comes from a parent's new marriage, and a father-in-law is the father of the person you marry.",
  },
  "My dad's sister is married to Carlos. Carlos is my ___.": {
    why: "The husband of your dad's sister is your uncle, even though he is not related to you by blood. Carlos is an uncle by marriage.",
    not: {
      cousin:
        "A cousin is the child of your aunt or uncle. Carlos is married to your dad's sister.",
      nephew:
        "A nephew is your brother's or sister's son. Carlos is older, in your dad's generation.",
      grandfather:
        "A grandfather is your mum's or dad's father. Carlos is married to your dad's sister.",
    },
    more: "English uses the same word for a parent's brother and for the husband of a parent's sibling.",
    tip: 'On a family chart, draw one kind of line for blood and another for marriage. The word is the same for both.',
  },
  "Grandma has two children: my mum and my uncle Pete. Pete's children are my ___.": {
    why: "Pete is your mum's brother. His children are your cousins.",
    not: {
      brothers:
        "Your brothers have the same parents as you. Pete's children have Pete as their dad.",
      nephews:
        "Nephews are your brother's or sister's sons. Pete's children are your mum's nephews, not yours.",
      uncles: 'Pete is the uncle. His children are in your generation.',
    },
    more: "Your mum would call Pete's children her nephews and nieces.",
    tip: "Most family words just add 's' in the plural: one cousin, two cousins.",
  },
  "Amy's sister has a baby boy. Amy is his ___.": {
    why: "The baby's mother is Amy's sister, so Amy is his aunt.",
    not: {
      cousin: "A cousin is the child of an aunt or uncle. Amy is the sister of the baby's mother.",
      niece:
        "A niece is a brother's or sister's daughter. Here the baby is Amy's nephew, and Amy is his aunt.",
      grandmother: "A grandmother is a parent's mother. Amy is the sister of the baby's mother.",
    },
    more: 'When your sibling has a baby, you get a new family word too.',
    tip: "Read 'his' carefully: it means the baby, so the question asks what Amy is to the baby.",
  },
  "My grandad's brother is my ___.": {
    why: "Your grandad's brother is your great-uncle: an uncle one generation further back. You can say: My great-uncle is ninety.",
    not: {
      cousin:
        "A cousin is in your own generation. Your grandad's brother is two generations older.",
      nephew: "A nephew is a brother's or sister's son, younger than you.",
      grandson: "A grandson is your child's son. Your grandad's brother is much older than you.",
    },
    more: "'Great' adds a generation: your great-grandad is your grandad's father.",
    tip: 'Write it with a hyphen: great-uncle.',
  },
  "A: That's £4.50, please.\nB: Here's a five-pound note.\nA: Thank you. And here's your ___: 50p.":
    {
      why: 'B paid £5 for something that cost £4.50, so B gets 50p back. The money you get back is your change.',
      not: {
        receipt: 'A receipt is the paper that shows what you paid. It is not 50p.',
        bill: 'A bill tells you how much to pay. B has already paid.',
        ticket: 'A ticket lets you travel or go into a place. It is not money.',
      },
      more: "'Change' also means small coins: 'Have you got any change for the machine?'",
      tip: "Practise the shop phrases: 'Here you are' and 'Keep the change'.",
    },
  "A: Excuse me, could we have the ___, please? We'd like to pay.\nB: Of course. I'll bring it now.":
    {
      why: 'In a restaurant, the bill is the paper that shows how much you must pay. You ask for it at the end of the meal.',
      not: {
        menu: 'The menu lists the food you can order. You ask for it at the start, not to pay.',
        change: 'Change is the money you get back after you pay.',
        recipe: 'A recipe tells you how to cook a dish.',
      },
      more: "In American English, the bill in a restaurant is often called 'the check'.",
      tip: "Ask politely at the end of a meal: 'Could we have the bill, please?'",
    },
  'A: Are you ready to order?\nB: Not yet, sorry. Could we see the ___ again?': {
    why: 'The menu is the list of food and drinks in a restaurant or café. B needs it to choose what to order.',
    not: {
      bill: 'The bill comes at the end, when you pay. B has not ordered yet.',
      receipt: 'A receipt shows what you have paid. B has not paid.',
      recipe: 'A recipe tells a cook how to make a dish. Customers read the menu.',
    },
    more: "'Order' means ask for the food you want.",
    tip: 'Learn the restaurant verbs in order: choose, order, eat, pay.',
  },
  "A: I'd like to take this jumper back. It's too small.\nB: Have you got the ___?\nA: Yes, here it is. I paid by card.":
    {
      why: 'A receipt is the paper a shop gives you when you pay. It shows what you bought and when, so shops ask for it when you take something back.',
      not: {
        recipe: 'A recipe tells you how to cook something. It does not show that you paid.',
        menu: 'A menu lists food in a restaurant.',
        change: 'Change is money you get back. A paid by card, so there is no change.',
      },
      more: "The 'p' in 'receipt' is silent: we say 'ri-seet'.",
      tip: "Do not mix up 'receipt' with a word that looks like it and means cooking instructions. A receipt is about money.",
    },
  "A: Would you like some more cake?\nB: No, thank you. I'm ___. I've eaten too much.": {
    why: 'When you have eaten enough, or too much, you are full. B has eaten too much, so B is full.',
    not: {
      hungry: 'Hungry means you want food. B says no to more cake.',
      thirsty: 'Thirsty means you want a drink. B is talking about eating.',
      cold: 'Cold is about temperature. It is not why B says no to cake.',
    },
    more: "We say 'I'm full', not 'I'm fully'. 'Full up' is also common in Britain.",
    tip: "Learn a polite way to say no to food: 'No, thank you. I'm full.'",
  },
  'A: Can I try these jeans on?\nB: Of course. The ___ is over there, next to the mirror.': {
    why: 'In a clothes shop, the changing room is where you try clothes on before you buy them.',
    not: {
      'waiting room': "A waiting room is where you wait, for example at the doctor's.",
      'dining room': 'A dining room is where people eat at home.',
      'living room': 'A living room is where a family relaxes at home.',
    },
    more: 'Some shops call it the fitting room.',
    tip: "Learn 'try on': 'Can I try this on, please?'",
  },
  "A: These shoes are too small. Have you got a bigger ___?\nB: Yes. Try these. They're a 6.": {
    why: "Shoes and clothes come in sizes. When shoes are too small, you need a bigger size. 'They're a 6' gives a shoe size.",
    not: {
      price: 'A price is how much something costs. A bigger price would not help.',
      colour: 'A colour is red, blue and so on. A colour does not make shoes bigger.',
      shop: 'A shop is where you buy things. A needs bigger shoes, not a bigger shop.',
    },
    more: 'UK shoe sizes are numbers, such as 4, 5 and 6. Clothes sizes can be words: small, medium, large.',
    tip: "Ask in a shop: 'Have you got this in a bigger size?'",
  },
  "A: Hello, I'd like to book a ___ for two people at eight o'clock.\nB: Certainly. Inside or outside?":
    {
      why: "In a restaurant you book a table for a set time and for a group of people. 'Inside or outside?' asks where the table should be.",
      not: {
        room: "You book a room in a hotel for nights, not for eight o'clock. 'Inside or outside?' does not fit a room.",
        ticket:
          "You book a ticket for a train or a show. 'Inside or outside?' does not fit a ticket.",
        taxi: "You can book a taxi, but 'Inside or outside?' does not fit a taxi.",
      },
      more: "'Book' is also a verb: it means arrange to have something later.",
      tip: "Learn the whole phrase: 'I'd like to book a table for two, please.'",
    },
  'The supermarket was very busy. I waited in a long ___ to pay.': {
    why: 'A queue is a line of people waiting for their turn. In a busy supermarket, people queue to pay.',
    not: {
      row: 'A row is a line of seats or things side by side, as in a cinema. People waiting to pay stand one behind another.',
      crowd: 'A crowd is a big group of people, not in a line.',
      team: 'A team is a group that plays or works together.',
    },
    more: "British people are famous for queuing. American English says 'wait in line'.",
    tip: "Spelling: 'queue' has 'ueue' after the 'q'. Say it like the letter Q.",
  },
  "I've lost my ___. All my money and bank cards were in it.": {
    why: 'A wallet is a small folding case for money and cards. You can say: My wallet is in my bag.',
    not: {
      umbrella: 'An umbrella keeps you dry. You do not keep money in it.',
      ticket: 'A ticket lets you travel. Money and cards are not kept in it.',
      passport: 'A passport shows who you are when you travel. It is not for money.',
    },
    more: 'In Britain, a small bag for money is often called a purse.',
    tip: 'If you lose your wallet, tell your bank at once so that it can stop your cards.',
  },
  "A: Have you got any brothers or sisters?\nB: No, I haven't. I'm an only ___.": {
    why: 'An only child has no brothers or sisters. B has none, so B is an only child.',
    not: {
      baby: "A baby is very young. 'An only baby' is not a phrase we use.",
      cousin:
        "A cousin is a relative, but 'an only cousin' does not mean you have no brothers or sisters.",
      twin: 'A twin has a brother or sister born at the same time. B has none.',
    },
    more: "We say 'an only child', with 'an', because 'only' begins with a vowel sound.",
    tip: "Learn 'only child' as a fixed phrase. It is a common question when people meet.",
  },
  '"A merry Christmas, uncle! God save you!" cried a cheerful voice. It was the voice of Scrooge\'s ___ ...':
    {
      why: "The speaker calls Scrooge 'uncle', so Scrooge is the brother of the speaker's mother or father. That makes the speaker his nephew. In the story he is called Fred.",
      not: {
        uncle: "Scrooge is the uncle here. The speaker calls him 'uncle'.",
        son: "A son would call Scrooge 'father', not 'uncle'.",
        brother: "A brother would not call Scrooge 'uncle'.",
      },
      more: 'Fred visits Scrooge on Christmas Eve to invite him to Christmas dinner, and Scrooge refuses.',
      tip: "Use the words people call each other as clues: 'uncle', 'Mum', 'sir'.",
    },
  'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a ___.':
    {
      why: "'Single' means not married. People say a rich single man must want to marry, so what he is 'in want of', or needs, is a wife.",
      not: {
        sister:
          "You cannot get a sister by marrying. 'Single' tells you the sentence is about marriage.",
        daughter:
          "'Single' means not married, so the sentence is about finding someone to marry, not about children.",
        cousin:
          "A cousin is a relative you already have. 'Single' tells you the man needs someone to marry.",
      },
      more: 'This is the famous first sentence of Pride and Prejudice, and Austen is joking: it is the families nearby, with daughters to marry, who are sure the rich newcomer wants a wife.',
      tip: "Learn 'single' and 'married' as a pair: 'Are you single or married?' Forms often ask it.",
    },
  '"And how did little Tim behave?" asked Mrs. Cratchit ... "As good as ___," said Bob ...': {
    why: "'As good as gold' is a fixed phrase that means very well behaved. Bob is telling Mrs Cratchit that Tiny Tim behaved very well.",
    not: {
      new: "'As good as new' means mended or clean again, like something new. It is not about how someone behaves.",
      silver: "'As good as silver' is not a phrase in English.",
      honey: "'As good as honey' is not a phrase in English.",
    },
    more: "Tiny Tim is one of Bob Cratchit's children. He is ill, but cheerful and kind.",
    tip: 'Parents in Britain still use this phrase about their children. Learn it as one phrase.',
  },
  "My grandmother can't hear very well, so we have to speak ___.": {
    why: 'If someone cannot hear well, you speak loudly so that they can hear you.',
    not: {
      quietly: 'Speaking quietly would make it harder for her to hear.',
      angrily: 'Speaking angrily is about a feeling, not about being heard.',
      sadly: 'Speaking sadly is about a feeling, not about being heard.',
    },
    more: 'Speaking clearly and facing the person helps too.',
    tip: "Many adverbs are an adjective plus 'ly': loud, loudly; soft, softly.",
  },
  'A: Which ___ does the London train leave from?\nB: Number 4, over the bridge.': {
    why: "At a railway station, trains leave from numbered platforms. B answers 'Number 4', so A is asking about the platform.",
    not: {
      terminal: 'A terminal is a big building at an airport.',
      gate: 'At an airport, you get on a plane at a gate.',
      stop: 'Buses and trams have stops. A train at a station leaves from a platform.',
    },
    more: "Screens at a station show each train's platform number.",
    tip: "Ask it this way: 'Which platform does the train to York leave from?'",
  },
  'A: How much is a ___ to Leeds?\nB: A single is £12, and a return is £20.': {
    why: "You pay for a ticket to travel. 'A single' and 'a return' are kinds of ticket: one way, or there and back.",
    not: {
      passport: 'A passport shows who you are. You do not buy one for a trip to Leeds.',
      suitcase: 'A suitcase carries your clothes. It has no single or return price.',
      platform: 'A platform is where you wait for a train. You do not pay for it.',
    },
    more: 'In Britain, a return ticket is often cheaper than two singles.',
    tip: "Learn the short answers: 'A single, please' or 'A return, please'.",
  },
  "A: Shall we take the bus to the beach?\nB: No, let's ___. It's only ten minutes on foot.": {
    why: "'On foot' means walking, and ten minutes is not far. B wants to walk instead of taking the bus.",
    not: {
      drive: "Driving uses a car, but B says 'on foot'.",
      fly: 'We do not fly to a place that is ten minutes away on foot.',
      swim: "B says 'on foot', so B means going on land.",
    },
    more: "'Let's' means 'let us'. It is a way to suggest something we can do together.",
    tip: "Learn 'on foot' as one phrase: 'We went on foot.'",
  },
  'The bus was full of ___. Every seat was taken, and some people had to stand.': {
    why: 'Passengers are the people who travel in a vehicle but do not drive it. The bus was full of them.',
    not: {
      drivers: 'A bus has one driver. It cannot be full of drivers.',
      pilots: 'Pilots fly planes.',
      tickets: 'People sit and stand on a bus. Tickets do not take the seats.',
    },
    more: 'Passengers often stand up to give an older person a seat.',
    tip: "In 'passenger', the 'ss' sounds like 's', and the 'g' sounds like 'j'.",
  },
  'There was so much ___ on the motorway that our journey took four hours.': {
    why: 'Traffic is all the cars and lorries moving along a motorway or street. Too much traffic makes a journey slow.',
    not: {
      weather: "Bad weather can slow you down, but we do not say 'so much weather'.",
      petrol: 'Petrol goes in a car. It does not make a journey slow.',
      luggage: 'Luggage is the bags you carry. It does not fill a motorway.',
    },
    more: 'A long line of slow traffic is called a traffic jam.',
    tip: "'Traffic' cannot be counted: say 'a lot of traffic', not 'a traffic'.",
  },
  "Don't forget your ___. You can't fly to Spain without it.": {
    why: 'To fly from Britain to another country you need a passport, a small book that shows who you are.',
    not: {
      suitcase: 'You can fly without a suitcase, with only a small bag.',
      umbrella: 'You can fly without an umbrella.',
      sunglasses: 'You can fly without sunglasses.',
    },
    more: 'Check that your passport is still in date before you travel.',
    tip: 'Spell it as two words joined: pass + port.',
  },
  'We had too much ___, so we paid extra at the airport.': {
    why: 'Luggage is the bags and suitcases you take on a journey. Airlines charge extra when it is too heavy.',
    not: {
      passport: 'You have one passport. You cannot have too much of it.',
      ticket: 'You buy a ticket to fly. You do not pay extra for too much ticket.',
      journey: 'A journey is the trip itself, not something you carry.',
    },
    more: "'Luggage' cannot be counted: say 'a lot of luggage' or 'three bags', not 'three luggages'.",
    tip: "'Baggage' means the same as 'luggage'.",
  },
  "A: Can you help me with my ___? It's really heavy.\nB: Of course. Which train are you getting?":
    {
      why: 'A suitcase is a big case for clothes on a journey. It can be heavy, and B offers to help carry it to the train.',
      not: {
        passport: 'A passport is small and light.',
        ticket: 'A ticket is a small piece of paper.',
        wallet: 'A wallet is small and light.',
      },
      more: 'Many suitcases now have wheels.',
      tip: "Offer help politely: 'Can I help you with your bags?'",
    },
  "A: Is it far to the castle?\nB: Not really. Go over the ___, and it's on the other side of the river.":
    {
      why: 'A bridge goes over a river, so you can cross from one side to the other.',
      not: {
        tunnel: 'A tunnel goes under a river or a hill, not over it.',
        roof: 'A roof is the top of a building.',
        wall: 'A wall is a side of a building or a line of stone. It does not cross a river.',
      },
      more: 'London has many famous bridges over the River Thames, such as Tower Bridge.',
      tip: "Learn 'go over' and 'go under': over the bridge, under the bridge.",
    },
  'A: Did you enjoy your holiday?\nB: Yes, but the ___ was terrible. It rained every day.': {
    why: "'It rained every day' is about the weather, so the weather was terrible.",
    not: {
      food: 'Bad food has nothing to do with rain.',
      hotel: 'A bad hotel has nothing to do with rain.',
      journey: 'A bad journey has nothing to do with rain every day.',
    },
    more: 'British people talk about the weather a lot. It is a safe way to begin a conversation.',
    tip: "Do not mix up 'weather' and 'whether'. They sound the same.",
  },
  "A: Where's Dad?\nB: He's at the ___. He's got toothache.": {
    why: 'Toothache is a pain that a dentist treats. So Dad has gone to the dentist.',
    not: {
      library: 'A library lends books. It cannot help with toothache.',
      hairdresser: 'A hairdresser cuts hair. It cannot help with toothache.',
      bank: 'A bank looks after money. It cannot help with toothache.',
    },
    more: "We say 'at the dentist' or 'at the dentist's'.",
    tip: "Pain words can end in '-ache': toothache, headache, earache.",
  },
  "A: Is there a ___ near here? I need some medicine for my cough.\nB: Yes, there's one next to the bank.":
    {
      why: 'A pharmacy sells medicine, such as cough medicine. A needs medicine, so A is looking for a pharmacy.',
      not: {
        bakery: 'A bakery sells bread and cakes, not medicine.',
        library: 'A library lends books, not medicine.',
        museum: 'A museum shows old things. It does not sell medicine.',
      },
      more: 'A pharmacist can tell you which medicine is right for a cough.',
      tip: "Ask for a place with 'Is there a ... near here?'",
    },
  'The doctor took my ___. It was 39 degrees, so I stayed in bed.': {
    why: 'Your temperature is how hot your body is. Normal is about 37 degrees, so 39 degrees means you have a fever.',
    not: {
      medicine: 'A doctor gives you medicine, but 39 degrees is not a medicine.',
      appointment: 'An appointment is a time to see the doctor. It does not have degrees.',
      prescription: 'A prescription is a note for medicine. It does not have degrees.',
    },
    more: "We say 'take someone's temperature' when we measure it with a thermometer.",
    tip: 'Break the long word into parts: tem-per-a-ture.',
  },
  "I've got a sore ___. It hurts when I swallow.": {
    why: 'Your throat is inside your neck. Food goes down it when you swallow, so a sore throat hurts then.',
    not: {
      knee: 'Your knee is in your leg. Swallowing does not make it hurt.',
      elbow: 'Your elbow is in your arm. Swallowing does not make it hurt.',
      back: 'Your back does not hurt when you swallow.',
    },
    more: 'A sore throat is often one of the first signs that you are getting ill.',
    tip: "Learn 'sore' with body parts: a sore throat, sore eyes.",
  },
  'I cut my finger, so Mum put a ___ on it.': {
    why: 'A plaster is a small sticky strip that covers a small cut.',
    not: {
      ribbon: 'A ribbon is for decoration, not for a cut.',
      scarf: 'A scarf goes round your neck.',
      ring: 'A ring is jewellery. It does not cover a cut.',
    },
    more: 'A big cut needs a bandage, which is wrapped round it.',
    tip: "Learn 'put on a plaster' and 'take off a plaster'.",
  },
  "A: You look pale. What's wrong?\nB: I feel sick. I ate too many sweets, and now my ___ hurts.": {
    why: 'Your stomach is where food goes after you swallow it. Too many sweets can give you a stomach ache.',
    not: {
      knee: 'Your knee is in your leg. Sweets do not make it hurt.',
      elbow: 'Your elbow is in your arm. Sweets do not make it hurt.',
      ear: 'Your ear is for hearing. Sweets do not make it hurt.',
    },
    more: "Children often say 'tummy' instead of 'stomach'.",
    tip: "Spelling: 'stomach' ends in 'ach', and the 'ch' sounds like 'k'.",
  },
  'My coat has a big ___. I keep my phone and keys in it.': {
    why: 'A pocket is a small bag sewn into clothes, where you can keep things.',
    not: {
      button: 'A button does up a coat. You cannot keep things in it.',
      collar: 'A collar goes round your neck.',
      sleeve: 'A sleeve covers your arm.',
    },
    more: 'Many coats and jackets have a pocket on each side.',
    tip: "We keep things 'in' a pocket: 'Put it in your pocket.'",
  },
  'This jumper is too long for me. The ___ cover my hands.': {
    why: 'The sleeves are the parts of a jumper that cover your arms. If they are too long, they cover your hands too.',
    not: {
      pockets: 'Pockets are for keeping things. They do not cover your hands.',
      buttons: 'Buttons are small. They do not cover your hands.',
      collars: 'A collar goes round your neck.',
    },
    more: "'Short-sleeved' and 'long-sleeved' describe shirts and tops.",
    tip: "Learn 'roll up your sleeves', which means fold them up your arms.",
  },
  'There was a ___ last night. The thunder was so loud that the baby woke up.': {
    why: 'Thunder is the loud noise in a storm.',
    not: {
      rainbow: 'A rainbow is a curve of colours. It makes no noise.',
      breeze: 'A breeze is a light, gentle wind. It is quiet.',
      frost: 'Frost is white ice on the ground. It makes no noise.',
    },
    more: 'A storm with thunder is called a thunderstorm.',
    tip: 'Count the seconds between the flash and the bang: three seconds is about one kilometre away.',
  },
  'In the morning the grass was white and crunchy. There had been a ___ in the night.': {
    why: 'Frost is a thin white layer of ice that forms on clear nights when the air is freezing. It makes grass white and crunchy.',
    not: {
      storm: 'A storm brings wind and rain, not white crunchy grass.',
      rainbow: 'A rainbow is a curve of colours in the sky.',
      breeze: 'A breeze is a light wind. It does not turn grass white.',
    },
    more: 'When there is frost, we say it is frosty.',
    tip: "'There had been' tells you the frost came before the morning.",
  },
  'It is very foggy this morning, so please drive ___.': {
    why: 'When it is foggy you cannot see far, so it is safe to drive slowly.',
    not: {
      quickly: 'Driving quickly in fog is dangerous.',
      loudly: 'Fog does not make anyone drive loudly or quietly. It is about how fast you go.',
      happily: "'Happily' is about feelings, not about safe driving.",
    },
    more: "Many adverbs end in '-ly' and tell us how something is done.",
    tip: 'Learn pairs of opposite adverbs together.',
  },
  'We walked to town, my sister leading the way in a very large beaver bonnet, and carrying a basket ..., a spare shawl, and an ___, though it was a fine bright day.':
    {
      why: "'Though it was a fine bright day' tells us she did not need it that day. You carry an umbrella for wet days, so taking one on a fine day is odd. That is the joke.",
      not: {
        apron:
          "An apron is for cooking. 'Though it was a fine bright day' would make no sense with it.",
        envelope: 'An envelope is for a letter. A fine day would not matter for it.',
        apple: 'An apple is food. A fine day would not matter for it.',
      },
      more: "Mrs Joe, Pip's sister, likes to look important, so she takes far more than she needs into town.",
      tip: "'Though' shows a surprise or a contrast: 'She took it, though it was not raining.'",
    },
  'It was a fine dry night; frost in the air; the streets as clean as a ballroom floor; the lamps, unshaken by any ___, drawing a regular pattern of light and shadow.':
    {
      why: "Moving air can shake street lamps. 'Unshaken by any wind' means the air was still, so the light did not move.",
      not: {
        rain: 'The text says it was a dry night, so there was no rain.',
        sun: 'It was night, so there was no sun.',
        snow: 'It was a dry night, and snow does not shake lamps.',
      },
      more: 'Stevenson paints a calm, clear London night. On this night, Mr Utterson meets Mr Hyde for the first time.',
      tip: "'Un-' in front of a word often means 'not': unshaken means not shaken.",
    },
  "Mum's car broke down, so she took it to the ___ to be mended.": {
    why: 'In Britain, a garage is also a place where mechanics mend cars.',
    not: {
      bakery: 'A bakery sells bread and cakes.',
      library: 'A library lends books.',
      museum: 'A museum shows old things.',
    },
    more: 'A mechanic is the person who mends cars at a garage.',
    tip: "'Break down' means stop working: 'The car broke down.'",
  },
  'Every morning I take my dog for a walk in the park. He pulls hard on his ___, so I hold it tightly.':
    {
      why: 'A lead is the long strap that you hold to keep a dog close on a walk. A strong dog pulls on it.',
      not: {
        bone: 'A bone is something a dog chews. You do not hold it on a walk.',
        tail: "A dog's tail is part of its body. You do not hold it on a walk.",
        kennel: "A kennel is a dog's small house.",
      },
      more: "American English says 'leash'. In British English it is a lead, which rhymes with 'need'.",
      tip: "Learn 'keep your dog on a lead'. You see it on signs in British parks.",
    },
  "I forgot my ___, so I couldn't open the front door. I waited in the garden until Mum came home.":
    {
      why: 'You open a front door with your keys. Without them you cannot get in, so you have to wait outside.',
      not: {
        ticket: 'A ticket is for travel. It does not open a door.',
        umbrella: 'An umbrella keeps you dry. It does not open a door.',
        wallet: 'A wallet holds money. It does not open a door.',
      },
      more: 'People often keep their keys together on a key ring.',
      tip: "We say 'lock' and 'unlock' a door with a key.",
    },
  'Mrs Green lives in the house next to ours. She is our ___.': {
    why: 'A neighbour is someone who lives next to you or near you. Mrs Green lives next door, so she is our neighbour.',
    not: {
      guest: 'A guest visits for a short time. Mrs Green lives in her own house.',
      passenger: 'A passenger travels in a vehicle.',
      customer: 'A customer buys things in a shop.',
    },
    more: "The British spelling has 'ou': neighbour.",
    tip: "'Next door' means in the house right beside yours: 'She lives next door.'",
  },
  "I'm going to make a cake. First I'll read the ___ to see what I need.": {
    why: 'A recipe tells you what you need and how to cook something, step by step.',
    not: {
      receipt: 'A receipt shows what you paid in a shop. It does not tell you how to cook.',
      menu: 'A menu lists food you can order in a restaurant.',
      bill: 'A bill tells you what you must pay.',
    },
    more: 'A recipe has two parts: the ingredients, and the steps, called the method.',
    tip: "Say 'recipe' in three parts: res-i-pee.",
  },
  'Close the ___, please. The sun is shining in my eyes.': {
    why: 'Curtains hang by a window. When you close them, they stop the sunlight coming in.',
    not: {
      cupboards: 'Cupboards hold things. Closing them does not stop sunlight.',
      books: 'Closing a book does not stop the sunlight.',
      drawers: 'Drawers are inside furniture. Closing them does not stop sunlight.',
    },
    more: "We 'open' and 'close', or 'draw', the curtains.",
    tip: 'Learn the pair: open the curtains, close the curtains.',
  },
  'Water is dripping from the ___. I think the roof is leaking.': {
    why: 'The ceiling is the top of a room. If the roof leaks, water comes through the ceiling and drips down.',
    not: {
      floor: 'The floor is under your feet. Water drips onto it, not from it.',
      carpet: 'A carpet covers the floor. Water does not drip down from it.',
      sink: 'A sink has a tap, but a leaking roof drips through the ceiling, not the sink.',
    },
    more: "The 'ei' in 'ceiling' sounds like 'ee'.",
    tip: 'Learn the opposites: the ceiling is above you, the floor is below you.',
  },
  'A: Why are you wearing your coat inside?\nB: The ___ is broken, and the house is freezing.': {
    why: 'The heating keeps a home warm. If it is broken, the house gets freezing, so people wear coats inside.',
    not: {
      fridge: 'A broken fridge makes food warm. It does not make the house cold.',
      shower: 'A broken shower does not make the house freezing.',
      doorbell: 'A broken doorbell does not make the house freezing.',
    },
    more: 'Many British homes have central heating, with radiators in each room.',
    tip: "We say 'turn the heating on' and 'turn the heating off'.",
  },
  'A: Do you live in a house?\nB: No, we live in a ___ on the fifth floor.': {
    why: 'A flat is a home on one floor of a bigger building. B lives on the fifth floor, so B lives in a flat.',
    not: {
      tent: 'A tent is for camping. It is not on the fifth floor.',
      farm: 'A farm is land in the country, with fields.',
      cottage: 'A cottage is a small house in the country. It does not have five floors.',
    },
    more: "American English says 'apartment'.",
    tip: 'Count floors the British way: the ground floor, then the first floor above it.',
  },
  'The lift is not working, so you will have to use the ___.': {
    why: 'Stairs are the steps inside a building that go from one floor to another. If the lift is broken, you climb the stairs.',
    not: {
      ladder: 'A ladder is for reaching high places, not for moving between floors.',
      roof: 'The roof is the top of the building.',
      window: 'A window lets in light. You do not use it to go between floors.',
    },
    more: "American English says 'elevator' for a lift.",
    tip: "We go 'upstairs' and 'downstairs'.",
  },
  "I can't hear the TV. Can you turn the ___ up, please?": {
    why: 'The volume is how loud a sound is. Turning it up makes the TV louder.',
    not: {
      light: 'Turning up the light makes a room brighter, not louder.',
      heating: 'Turning up the heating makes a room warmer.',
      oven: 'Turning up the oven makes it hotter.',
    },
    more: "We also say 'turn it down' to make something quieter.",
    tip: "Learn 'turn up' and 'turn down' with sounds and music.",
  },
  'The baby is asleep, so please speak ___.': {
    why: 'When someone is asleep, we speak quietly so that we do not wake them.',
    not: {
      loudly: 'Speaking loudly would wake the baby.',
      quickly: 'Speaking quickly does not make you any quieter.',
      angrily: 'Speaking angrily might wake the baby. It is about a feeling, not about sound.',
    },
    more: "'Softly' means almost the same.",
    tip: "Do not mix up 'quiet' and 'quite'. 'Quiet' has 'et' at the end.",
  },
  'The tree fell down in the storm and broke our ___. Now the dog can get out of the garden.': {
    why: 'A fence goes round a garden and keeps pets in. With the fence broken, the dog can get out.',
    not: {
      roof: 'A broken roof would not let the dog out of the garden.',
      window: 'A broken window would not let the dog out of the garden.',
      chimney: 'A chimney is on the roof. A broken one would not let the dog out.',
    },
    more: 'A gate is the part of a fence that opens.',
    tip: 'Learn the garden words together: fence, gate, path, hedge.',
  },
  "A bird's body is covered in ___. A cat's body is covered in fur.": {
    why: "Feathers cover a bird's body and keep it warm and dry. Fur does the same job for many other animals.",
    not: {
      wings: 'A bird has two wings, but its whole body is covered in feathers.',
      scales: 'Scales cover fish and snakes, not birds.',
      whiskers: "Whiskers are the long hairs on a cat's face.",
    },
    more: 'Only birds have feathers. They help most birds to fly.',
    tip: "The 'ea' in 'feather' sounds like the 'e' in 'red'.",
  },
  "A: I'll meet you outside the cinema at seven.\nB: OK. If I'm late, I'll send you a ___.": {
    why: 'A message on a phone arrives at once, so it can tell a friend that you are late.',
    not: {
      letter: 'A letter takes days to arrive, which is too slow to say you are late.',
      parcel: 'A parcel is a package sent by post.',
      postcard: 'A postcard is sent by post, often from a holiday.',
    },
    more: "'Text' is also used: 'I'll text you.'",
    tip: "Learn 'send a message' and 'get a message'.",
  },
  "A: The film begins at eight.\nB: Then we must leave at half past seven, or we'll miss the ___.":
    {
      why: 'If they leave late, they will arrive after eight and miss the start of the film.',
      not: {
        end: 'Arriving late makes you miss the beginning, not the end.',
        ticket: 'You do not miss a ticket.',
        popcorn: 'B is worried about the film, not the popcorn.',
      },
      more: "'Begin' and 'start' mean the same here.",
      tip: "'Miss' means not catch or not see: miss a lesson, miss the start.",
    },
  'We put up our ___ in the field and slept in sleeping bags.': {
    why: 'A tent is a shelter you put up for camping. You sleep inside it.',
    not: {
      flag: 'A flag is a piece of cloth on a pole. You cannot sleep in it.',
      fence: 'A fence goes round a garden or a field.',
      kite: 'A kite flies on a string.',
    },
    more: 'Going away and sleeping in a tent is called camping.',
    tip: "Learn 'put up a tent' and 'take down a tent'.",
  },
  'Our cat is lost. We have put a ___ with her photo on every tree in our street.': {
    why: 'A poster is a big printed notice that people put up for others to see.',
    not: {
      letter: 'A letter goes in an envelope to one person.',
      ticket: 'A ticket lets you travel or go into a place.',
      menu: 'A menu lists food in a restaurant.',
    },
    more: 'A poster for a lost pet usually has a photo and a way to get in touch.',
    tip: "Learn 'put up a poster' and 'take down a poster'.",
  },
  "My birthday ___ is on Saturday. I've invited ten friends.": {
    why: 'A party is a time when friends come together to celebrate. You invite people to a party.',
    not: {
      present: 'A present is a gift. You do not invite people to a present.',
      cake: 'A cake is food. You do not invite people to a cake.',
      card: 'A card is a piece of folded paper with a message.',
    },
    more: "'Invite' is the verb, and an 'invitation' is what you send.",
    tip: "Learn 'have a party' and 'go to a party'.",
  },
  "A: What's your phone ___?\nB: It's 07700 900123.": {
    why: "B gives a list of digits, so A asked for B's phone number.",
    not: {
      address: 'An address is where you live, with a street name.',
      name: 'A name is a word, not a list of digits.',
      age: 'An age is one or two numbers, such as 12.',
    },
    more: 'In Britain, mobile phone numbers begin with 07.',
    tip: "Say a phone number in small groups, and say 'oh' for 0.",
  },
  'A: Where do you live?\nB: My ___ is 12 Park Road, Leeds.': {
    why: 'An address tells people where you live, with the name of your street and your town.',
    not: {
      number: 'A number alone is only part of an address.',
      name: 'A name is what people call you.',
      postcode:
        'A postcode is a short code of letters and numbers at the end of an address. It is not a street.',
    },
    more: 'In a British address, the postcode comes at the end.',
    tip: "Spelling: 'address' has two d's and two s's.",
  },
  'A: Have you got any pets?\nB: Yes, a ___. It lives in a glass tank and swims all day.': {
    why: 'A goldfish is a small orange pet that lives in water and swims. People keep it in a glass tank.',
    not: {
      parrot: 'A parrot is a bird. It does not live in water.',
      hamster: 'A hamster lives in a cage and runs on a wheel.',
      tortoise: 'A tortoise lives on land and moves slowly.',
    },
    more: "The plural of 'goldfish' is 'goldfish'.",
    tip: 'Name pets by where they live: a goldfish in a tank, a hamster in a cage.',
  },
  "A: Can I speak to Mr Ali, please?\nB: I'm sorry, he's out. Can I take a ___?": {
    why: "On the phone, 'Can I take a message?' means 'Shall I write down what you want to tell him?'",
    not: {
      photo: "'Take a photo' is a real phrase, but it does not help when Mr Ali is out.",
      seat: "'Take a seat' means sit down. It does not fit a phone call.",
      ticket: "'Take a ticket' is about queues or travel, not phone calls.",
    },
    more: "The caller can answer: 'Yes, please. Can you ask him to call me back?'",
    tip: "Learn 'take a message' and 'leave a message'.",
  },
  "A: Is there anything good on TV tonight?\nB: There's a ___ about penguins at eight.": {
    why: 'A TV programme is a show, such as one about penguins, at a set time.',
    not: {
      channel: 'A channel is the station that shows programmes, such as BBC One.',
      remote: 'A remote changes the channel.',
      screen: 'The screen is the glass part of the TV.',
    },
    more: "The British spelling is 'programme', with 'mme'. For computers, we write 'program'.",
    tip: "Learn 'What's on TV?' and 'There's a programme about ...'.",
  },
  'The said Eliza, John, and Georgiana were now clustered round their mama in the drawing-room: she lay reclined on a ___ by the fireside ...':
    {
      why: 'You lie back on a sofa, and a drawing-room is a sitting room, so Mrs Reed lay on a sofa by the fire.',
      not: {
        stool: 'A stool is a small seat with no back. You cannot lie back on it.',
        table: 'A table is for eating or working at. People do not lie back on a table.',
        shelf: 'A shelf holds books and things. People do not lie on it.',
      },
      more: 'In Jane Eyre, Mrs Reed sits happily with her own children, but leaves Jane out.',
      tip: "'Reclined' means lying back. 'Mama' is an old word for mum.",
    },
  'Boxer was an enormous beast, nearly eighteen hands high, and as strong as any two ordinary ___ put together.':
    {
      why: "Boxer is an enormous animal. 'Hands high' is how horses are measured, so he is one of the farm's horses, as strong as two ordinary ones.",
      not: {
        hens: 'Hens are small birds. Being as strong as two hens would not be special for an enormous beast.',
        cats: 'Cats are small. Being as strong as two cats would not be special for Boxer.',
        mice: 'Mice are tiny. Being as strong as two mice would not be special for Boxer.',
      },
      more: 'In Animal Farm, Boxer works harder than any other animal on the farm.',
      tip: "'Put together' means added up: as strong as two horses added up.",
    },
  'Our neighbours have a new baby. We sent them a ___ to say congratulations.': {
    why: 'We send a card with a few kind words for a special event, such as a new baby or a birthday.',
    not: {
      menu: 'A menu lists food in a restaurant.',
      receipt: 'A receipt shows what you paid.',
      ticket: 'A ticket is for travel or a show.',
    },
    more: "'Congratulations' is what we say when something good happens to someone.",
    tip: "Spelling: 'congratulations' has a 't' in the middle, not a 'd'.",
  },
}
