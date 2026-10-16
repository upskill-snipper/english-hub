import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Picture Word Match: the explanation a student sees after each answer, by
 * question key (src/data/games/banks/picture-word-match.ts). Written with AI
 * on 16 October 2026 and checked against each question and its options, as
 * the founder decided (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  apple: {
    why: 'The picture shows a round red fruit with a short stem. This fruit is an apple. You can say: I eat an apple every day.',
    not: {
      orange:
        'An orange is round too, but it is orange and has thick skin. The fruit in the picture is red.',
      banana: 'A banana is long and yellow. The fruit in the picture is round and red.',
      pear: 'A pear is wide at the bottom and thin at the top. The fruit in the picture is round, like a ball.',
    },
    more: "Say 'an apple', not 'a apple'. We use 'an' before a vowel sound, and 'apple' starts with the sound 'a'. The plural is 'apples'.",
    tip: "Learn a noun with its article: 'an apple'. Then say a short sentence about it, such as 'I like apples'.",
  },
  bread: {
    why: 'The picture shows a loaf of bread, the food we make from flour. People eat it as toast or in a sandwich. You can say: I have bread for breakfast.',
    not: {
      cheese:
        'Cheese is made from milk and is often yellow. The picture shows a brown loaf, not cheese.',
      butter: 'Butter is a soft yellow food that we put on bread. It is not the bread itself.',
      rice: 'Rice is a food made of small white grains. It is cooked in water. The picture shows a loaf.',
    },
    more: "We do not count bread as 'one bread, two breads'. We say 'some bread' or 'a slice of bread'.",
    tip: "Use 'a slice of bread' or 'a loaf of bread' when you want to count it.",
  },
  milk: {
    why: 'The picture shows a glass of a white drink. It is milk, the drink we get from cows. You can say: I drink a glass of milk every morning.',
    not: {
      water: 'Water is clear and has no colour. The drink in the glass is white.',
      juice:
        'Juice is made from fruit and is usually orange, red or yellow. The drink in the glass is white.',
      tea: 'Tea is a hot drink made with leaves, usually served in a cup. The drink in the glass is white.',
    },
    more: "We do not count milk as 'one milk, two milks'. We say 'some milk' or 'a glass of milk'.",
    tip: 'Learn drink phrases: a glass of milk, a cup of tea, a bottle of water. They are useful when you order a drink.',
  },
  cheese: {
    why: 'The picture shows a yellow piece with holes in it. This food is cheese, which is made from milk. You can say: I like cheese on toast.',
    not: {
      egg: 'An egg has a smooth oval shell and comes from a hen. The picture shows a yellow piece with holes.',
      bread:
        'Bread is made from flour and is baked in an oven. The food in the picture is made from milk.',
      ham: 'Ham is pink meat from a pig. The picture shows a yellow food, not pink meat.',
    },
    more: "We do not usually count cheese. We say 'a piece of cheese' or 'some cheese'. We say 'cheeses' only for different kinds.",
    tip: 'Learn food words in groups: bread, cheese, butter, milk. Then make a sentence about your lunch.',
  },
  strawberry: {
    why: 'The picture shows a red fruit with tiny seeds on the outside and green leaves on top. It is a strawberry. You can say: I eat strawberries in summer.',
    not: {
      cherry:
        'A cherry is small and round, with a long thin stem. The fruit in the picture is shaped like a heart and has seeds on its skin.',
      grape:
        'A grape has smooth skin and no seeds on the outside. The fruit in the picture has tiny seeds on its skin.',
      plum: 'A plum is a round fruit with a hard stone inside. It has smooth skin. The fruit in the picture has seeds on the outside.',
    },
    more: "The plural is 'strawberries': take off 'y' and add 'ies'. The same happens with 'cherry' and 'cherries'.",
    tip: "Write the plural once: strawberry, strawberries. The same rule works for many words that end in a consonant and then 'y'.",
  },
  carrot: {
    why: 'The picture shows a long orange vegetable with green leaves on top. It is a carrot. You can say: I put carrots in the soup.',
    not: {
      potato:
        'A potato is round and brown or yellow. It also grows under the ground, but it is not long and orange.',
      onion:
        'An onion is round, with thin skin, and it can make your eyes water. The picture shows a long orange vegetable.',
      tomato:
        'A tomato is a round red fruit that we eat as a vegetable. The picture shows something long and orange.',
    },
    more: 'Carrots grow under the ground, and we eat the root of the plant. We can count them: one carrot, two carrots.',
    tip: "Say 'a carrot' with 'a', because 'carrot' starts with a consonant sound.",
  },
  tea: {
    why: 'The picture shows a hot drink in a small cup, with steam above it. This drink is tea. You can say: I would like a cup of tea, please.',
    not: {
      coffee:
        'Coffee is made from beans and is usually dark brown. The picture shows a pale drink in a small cup without a handle.',
      soup: 'Soup is a hot food that we eat with a spoon, usually from a bowl. The picture shows a drink in a small cup.',
      milk: 'Milk is white and is often drunk cold, from a glass. The picture shows a hot drink in a cup with steam.',
    },
    more: "In Britain many people drink tea with milk. We say 'some tea' and 'a cup of tea'. 'Two teas' means two cups of tea.",
    tip: 'Learn drink phrases: a cup of tea, a glass of milk, a bottle of water.',
  },
  egg: {
    why: 'The picture shows an oval egg with a hard shell. Hens lay eggs, and we eat them boiled, fried or in cakes. You can say: I have an egg for breakfast.',
    not: {
      cheese: 'Cheese is made from milk. It has no shell. The picture shows a smooth oval egg.',
      bean: 'A bean is a small seed, often green or brown. It is much smaller than an egg.',
      nut: 'A nut has a hard shell too, but it is small and grows on a plant. An egg comes from a hen.',
    },
    more: "Say 'an egg', because 'egg' starts with a vowel sound. The plural is 'eggs'.",
    tip: 'Learn how we cook eggs: boiled, fried and scrambled. These words are useful in a restaurant.',
  },
  dog: {
    why: 'The picture shows the face of a dog, with floppy ears. A dog is a pet that barks. You can say: My dog likes to walk in the park.',
    not: {
      cat: "A cat is a small pet with pointed ears and whiskers. It says 'miaow'. The picture shows a dog.",
      fox: 'A fox has a thin pointed face and upright ears. The animal in the picture has a rounder face and floppy ears.',
      wolf: 'A wolf has pointed, upright ears. The animal in the picture has floppy ears, like a pet dog.',
    },
    more: "A dog barks, and we say 'woof'. A young dog is called a puppy.",
    tip: 'Learn animals with their sounds: a dog barks, a cat miaows, a cow moos.',
  },
  cat: {
    why: "The picture shows the face of a cat, with pointed ears and whiskers. A cat is a small pet that says 'miaow'. You can say: The cat sleeps on the sofa.",
    not: {
      dog: 'A dog barks and often has floppy ears. The picture shows a cat with pointed ears.',
      rabbit:
        "A rabbit has very long ears and soft fur, and it hops. A cat's ears are short and pointed.",
      mouse:
        'A mouse is a very small animal with a long tail. Cats chase mice. The picture shows the cat, not the mouse.',
    },
    more: 'A young cat is called a kitten. Many people keep a cat as a pet at home.',
    tip: "Make a sentence with a place: 'The cat is on the sofa.' A place word helps you remember the noun.",
  },
  cow: {
    why: 'The picture shows the face of a cow, a big farm animal with patches on its face. Cows give us milk. You can say: The cow eats grass in the field.',
    not: {
      sheep:
        'A sheep has thick wool and is smaller than a cow. The picture shows the face of a cow.',
      horse:
        'A horse has a long face and long hair on its neck. People ride horses. The picture shows a cow.',
      pig: 'A pig is pink and has a round nose. It lives on a farm, but it does not give us milk.',
    },
    more: "A cow says 'moo'. A baby cow is called a calf.",
    tip: 'Link each animal to what it gives us: cow and milk, sheep and wool, hen and eggs. This makes the words easier to remember.',
  },
  horse: {
    why: 'The picture shows the head of a horse, with a long face and a mane, which is the long hair on its neck. People ride horses and use them on farms. You can say: She rides a horse at the weekend.',
    not: {
      cow: 'A cow has a wider face and no long hair on its neck. It gives us milk. The picture shows a horse.',
      donkey:
        'A donkey has very long ears. The animal in the picture has shorter ears, so it is a horse.',
      goat: 'A goat is smaller than a horse and has horns and a short beard. The picture shows no horns.',
    },
    more: "A young horse is called a foal. A horse says 'neigh'.",
    tip: "Use the verb 'ride' with horse and bicycle: 'ride a horse', 'ride a bicycle'. Different verbs go with different words.",
  },
  sheep: {
    why: 'The picture shows a sheep, an animal with thick, curly wool. Farmers keep sheep for their wool. You can say: The sheep eat grass on the hill.',
    not: {
      goat: 'A goat has short hair, not thick wool. The animal in the picture has thick, curly wool.',
      cow: 'A cow is much bigger and has short hair. The picture shows an animal with thick wool.',
      pig: 'A pig is pink and has no wool. The picture shows an animal with woolly fur.',
    },
    more: "'Sheep' is the same in the singular and the plural: one sheep, two sheep. A baby sheep is called a lamb.",
    tip: 'Learn the words that do not change together: one sheep, two sheep; one fish, two fish.',
  },
  bird: {
    why: 'The picture shows a bird, an animal with feathers, wings and a beak. Most birds can fly. You can say: A bird is singing in the tree.',
    not: {
      fish: 'A fish lives in water and has fins and scales. The animal in the picture has wings and feathers.',
      bee: 'A bee is a very small insect with six legs. A bird is much bigger and has feathers.',
      bat: 'A bat can fly too, but it has fur, not feathers. The animal in the picture has feathers and a beak.',
    },
    more: 'Birds have two legs and lay eggs. Not all birds can fly: penguins and ostriches cannot.',
    tip: "Use 'bird' for any bird. You can name the kind later: a robin, a parrot, an eagle.",
  },
  fish: {
    why: 'The picture shows a fish, an animal that lives in water. It has fins, a tail and scales. You can say: The fish swims in the river.',
    not: {
      frog: 'A frog lives in water and on land. It has four legs and jumps. The animal in the picture has fins and no legs.',
      crab: 'A crab lives in the sea and has a hard shell and two big claws. The picture shows a fish with fins and a tail.',
      bird: 'A bird has feathers and wings and flies in the air. The animal in the picture swims.',
    },
    more: "The plural of 'fish' is usually 'fish': one fish, two fish. 'Fish' is also a food: I like fish and chips.",
    tip: "Say 'a fish' for the animal and 'some fish' for the food. The word does not change.",
  },
  bee: {
    why: 'The picture shows a bee, a small flying insect with yellow and black stripes. Bees visit flowers and make honey. You can say: A bee is on the flower.',
    not: {
      ant: 'An ant is a tiny insect that lives in the ground. It does not have yellow and black stripes.',
      fly: 'A fly is a small insect with two wings. It is grey or black and has no stripes. A fly does not make honey.',
      spider:
        'A spider has eight legs and no wings, and it makes a web. A bee has six legs and wings.',
    },
    more: 'A bee is an insect, so it has six legs. Bees live together in a hive and make honey.',
    tip: "Do not mix up 'be' and 'bee'. They sound the same. The insect has two 'e' letters.",
  },
  mother: {
    why: "The picture shows a woman. Of the four words, only 'mother' means a woman. A mother is a woman who has a child. You can say: My mother cooks dinner.",
    not: {
      father: 'A father is a man who has a child. The picture shows a woman, not a man.',
      brother: 'A brother is a boy or man with the same parents as you. The picture shows a woman.',
      uncle:
        'An uncle is a man in your family, the brother of your mother or father. The picture shows a woman.',
    },
    more: "Many British children say 'mum' to their own mother. 'Mother' is the more formal word.",
    tip: "Use 'mother' in writing and in formal speaking. Use 'mum' when you talk to friends about your family.",
  },
  father: {
    why: "The picture shows a man. Of the four words, only 'father' means a man. A father is a man who has a child. You can say: My father drives a bus.",
    not: {
      mother: 'A mother is a woman who has a child. The picture shows a man, not a woman.',
      sister: 'A sister is a girl or woman with the same parents as you. The picture shows a man.',
      aunt: 'An aunt is a woman in your family, the sister of your mother or father. The picture shows a man.',
    },
    more: "Many British children say 'dad' to their own father. 'Father' is the more formal word.",
    tip: "'Parents' means mother and father together: 'My parents are at work.' It is a useful plural word.",
  },
  baby: {
    why: 'The picture shows a very young child, a baby. A baby cannot walk or talk yet. The other three words are grown-ups. You can say: The baby is asleep.',
    not: {
      mother: 'A mother is a grown-up woman. The picture shows a very small baby, not an adult.',
      father: 'A father is a grown-up man. The picture shows a very small baby.',
      grandmother:
        'A grandmother is the mother of your mother or father, so she is an older woman. The picture shows a baby.',
    },
    more: "The plural of 'baby' is 'babies'. We change 'y' to 'ies'.",
    tip: "Use 'baby' for a very young child and 'child' for an older one. Do not say 'baby' for a ten-year-old.",
  },
  grandmother: {
    why: 'The picture shows an older woman with grey hair. A grandmother is the mother of your mother or father. The other three words mean men. You can say: My grandmother tells me stories.',
    not: {
      grandfather:
        'A grandfather is the father of your mother or father. He is a man. The picture shows a woman.',
      father: 'A father is a man who has a child. The picture shows an older woman.',
      uncle:
        'An uncle is a man in your family, the brother of your mother or father. The picture shows an older woman.',
    },
    more: "Friendly words for a grandmother are 'grandma', 'granny' and 'nan'. 'Grandmother' is more formal.",
    tip: "Break the word in two: grand + mother. The same pattern gives 'grandfather', 'grandparents' and 'grandchildren'.",
  },
  grandfather: {
    why: 'The picture shows an older man with grey hair. A grandfather is the father of your mother or father. The other three words mean women. You can say: My grandfather plays chess.',
    not: {
      grandmother:
        'A grandmother is the mother of your mother or father. She is a woman. The picture shows a man.',
      mother: 'A mother is a woman who has a child. The picture shows an older man.',
      aunt: 'An aunt is a woman in your family, the sister of your mother or father. The picture shows a man.',
    },
    more: "Friendly words for a grandfather are 'grandad', 'granddad' and 'grandpa'. 'Grandfather' is more formal.",
    tip: "'Grandparents' means grandmother and grandfather together. Say: 'I visit my grandparents on Sundays.'",
  },
  daughter: {
    why: 'The picture shows a girl. A daughter is a girl or woman who is the child of a mother and father. The other three words are for boys and men. You can say: Their daughter is ten.',
    not: {
      son: 'A son is a boy or man who is the child of a mother and father. The picture shows a girl.',
      father: 'A father is a grown-up man. The picture shows a young girl.',
      grandfather: 'A grandfather is an older man. The picture shows a young girl.',
    },
    more: "Your son and your daughter are your children. The plural of 'child' is 'children', not 'childs'.",
    tip: 'Learn word pairs: son and daughter, brother and sister, father and mother. Pairs are easier to remember.',
  },
  house: {
    why: 'The picture shows a house, a building where a family lives. It has a roof, walls, a door and windows. You can say: We live in a small house.',
    not: {
      garden:
        'A garden is the piece of ground with grass and flowers next to a house. It is outside. The picture shows the building.',
      room: 'A room is one part inside a house, such as a kitchen or a bedroom. The picture shows the whole building.',
      door: 'A door is one part of a house. You open it to go in. The picture shows the whole house, not only the door.',
    },
    more: "A house has many rooms. A 'flat' is a home on one floor of a bigger building.",
    tip: "Say 'I am at home', not 'I am in home'. We use 'at' with 'home'.",
  },
  door: {
    why: 'The picture shows a door. You open a door to go into a room or a building, and you close it to keep the room private. You can say: Please close the door.',
    not: {
      window:
        'A window is a glass opening in a wall. It lets in light. The picture shows a wooden door, not glass.',
      wall: 'A wall is the side of a room or a building. A door is a part of a wall. The picture shows the door.',
      roof: 'A roof is the top of a building. It keeps out the rain. The picture shows a door, which is lower down.',
    },
    more: 'We open and close doors. We also knock on a door when we want someone to let us in.',
    tip: "Learn useful verbs with 'door': open the door, close the door, knock on the door.",
  },
  bed: {
    why: "The picture shows a bed with a pillow and a blanket. A bed is the furniture where we sleep. You can say: I go to bed at ten o'clock.",
    not: {
      chair:
        'A chair is a seat for one person. It has four legs and a back. We do not sleep on a chair.',
      sofa: 'A sofa is a long soft seat for two or three people. We sit on a sofa. The picture shows a bed with a pillow.',
      table: 'A table has a flat top and legs. We eat or work at a table. It is not for sleeping.',
    },
    more: "We usually say 'go to bed' and 'in bed' without 'a' or 'the'.",
    tip: "Learn 'go to bed' as one phrase. It means to go and sleep, not only to walk to the bed.",
  },
  chair: {
    why: 'The picture shows a chair, a seat for one person. It has four legs and a back. You can say: Please sit on this chair.',
    not: {
      bed: 'A bed is for sleeping. It is long and soft. The picture shows a seat with a back, not a bed.',
      shelf:
        'A shelf is a flat board on a wall that holds books or other things. You cannot sit on it.',
      desk: 'A desk is a table where you read or write. A chair is the seat you use at a desk.',
    },
    more: 'A chair usually has a back. A seat without a back is called a stool.',
    tip: "Learn the phrases 'sit down on a chair' and 'stand up'. They are opposites.",
  },
  bath: {
    why: 'The picture shows a bath, a long tub that you fill with water to wash your whole body. You can say: I have a bath every evening.',
    not: {
      sink: 'A sink is a small bowl with a tap. We use it to wash our hands or dishes. The picture shows a big tub for the whole body.',
      shower:
        'A shower sprays water from above, and you stand up. The picture shows a long tub that you sit or lie in.',
      mirror:
        'A mirror is a flat piece of glass that shows your face. The picture shows a big tub, not a mirror.',
    },
    more: "In British English we say 'have a bath' and 'have a shower'. American English often says 'take a bath'.",
    tip: "Use 'have' with bath, shower and breakfast: have a bath, have a shower, have breakfast.",
  },
  clock: {
    why: 'The picture shows a clock. A clock has a round face with numbers and hands, and it tells us the time. You can say: The clock says half past three.',
    not: {
      lamp: 'A lamp gives light. It has a shade and a bulb. The picture shows a round face with hands, so it shows the time.',
      shelf: 'A shelf is a flat board that holds things. It does not show the time.',
      mirror: 'A mirror is a flat piece of glass that shows your face. It has no numbers or hands.',
    },
    more: 'A clock stands or hangs in a room. A watch is a small clock that you wear on your wrist.',
    tip: "Say the time aloud: 'It is five o'clock.' Practise with the clock in your room.",
  },
  key: {
    why: 'The picture shows a key. A key is a small metal object that opens or closes a lock. You can say: I cannot find my house key.',
    not: {
      lock: 'A lock is the part on a door that a key fits into. The picture shows the key, not the lock.',
      handle:
        'A handle is the part you hold to open a door or a drawer. A key is a separate small object.',
      bell: 'A bell makes a ringing sound. The picture shows a key, which opens a lock.',
    },
    more: "We use a key to lock and unlock a door. 'Keys' is the plural. A 'key' is also a button on a computer keyboard.",
    tip: "Say 'lock the door' and 'unlock the door'. The prefix 'un' means 'do the opposite'.",
  },
  hand: {
    why: 'The picture shows a hand, the part of the body at the end of your arm. It has a palm and five fingers. You can say: Raise your hand if you know the answer.',
    not: {
      foot: 'A foot is at the end of your leg. You stand and walk on it. The picture shows a hand with five fingers.',
      arm: 'An arm is the long part between your shoulder and your hand. The picture shows only the hand.',
      leg: 'A leg is the long part of the body that you walk with. The picture shows a hand.',
    },
    more: 'You have two hands and ten fingers. We shake hands when we meet someone, and we wash our hands before we eat.',
    tip: "Say 'I write with my right hand' or 'I write with my left hand'. It is a useful pattern.",
  },
  eye: {
    why: 'The picture shows an eye, the part of the body that we see with. You have two eyes. You can say: She has big brown eyes.',
    not: {
      ear: 'An ear is the part of the body that we hear with. It is on the side of the head. The picture shows an eye.',
      nose: 'A nose is in the middle of the face. We smell with it. The picture shows an eye.',
      mouth:
        'A mouth is the opening in the face. We eat and speak with it. The picture shows an eye.',
    },
    more: "The word 'eye' sounds like the letter 'I' and the word 'I'. The plural is 'eyes'. We close our eyes to sleep.",
    tip: 'Learn the body part with its action: see with your eyes, hear with your ears, smell with your nose.',
  },
  ear: {
    why: 'The picture shows an ear, the part of the body that we hear with. You have two ears, one on each side of your head. You can say: I listen with my ears.',
    not: {
      eye: 'An eye is the part we see with. The picture shows an ear, which is on the side of the head.',
      nose: 'A nose is in the middle of the face. We smell with it. The picture shows an ear.',
      chin: 'A chin is the bottom of the face, under the mouth. The picture shows an ear on the side of the head.',
    },
    more: "People wear earrings in their ears. 'Earache' is a pain in the ear. These words start with 'ear'.",
    tip: "Do not mix up 'hear' and 'ear'. You hear with your ear. 'Hear' has an 'h' at the start.",
  },
  nose: {
    why: 'The picture shows a nose, the part of the face that we smell with. It is in the middle of your face. You can say: My nose is cold.',
    not: {
      mouth:
        'A mouth is the opening under the nose. We eat and speak with it. The picture shows a nose.',
      eye: 'An eye is above the nose. We see with it. The picture shows a nose.',
      ear: 'An ear is on the side of the head. We hear with it. The picture shows a nose.',
    },
    more: 'We breathe through our nose and our mouth. When a person has a cold, they often have a runny nose.',
    tip: "Use 'blow your nose' with a tissue. It is a common phrase when you have a cold.",
  },
  foot: {
    why: 'The picture shows a foot, the part at the bottom of your leg. We stand and walk on our feet. You can say: My foot hurts.',
    not: {
      hand: 'A hand is at the end of your arm. It has fingers. The picture shows a foot.',
      leg: 'A leg is the long part from your hip to your foot. The picture shows only the foot.',
      knee: 'The knee is in the middle of your leg, where it bends. The picture shows the foot at the bottom.',
    },
    more: "The plural of 'foot' is 'feet'. This is irregular, so do not say 'foots'. One foot, two feet.",
    tip: 'Learn the irregular body plurals in pairs: foot, feet; tooth, teeth.',
  },
  tooth: {
    why: 'The picture shows a tooth. We use our teeth to bite and chew food. You can say: I brush my teeth twice a day.',
    not: {
      tongue:
        'A tongue is the soft pink part inside your mouth. It helps you taste and speak. The picture shows a white tooth.',
      lip: 'Lips are the soft edges of your mouth. The picture shows a hard white tooth, not a lip.',
      jaw: 'The jaw is the bone that holds your teeth. The picture shows one tooth, not the whole jaw.',
    },
    more: "The plural of 'tooth' is 'teeth'. Adults have 32 teeth, and children have 20 first teeth.",
    tip: "Learn the daily phrase 'brush your teeth' and use it in a sentence about your morning.",
  },
  hair: {
    why: 'The picture shows a person getting a haircut. The hairdresser cuts the hair, which grows on your head. The other three words are parts of the body that are not hair. You can say: She has long hair.',
    not: {
      foot: 'A foot is at the bottom of your leg. A haircut is for the head, not the foot.',
      knee: 'A knee is in the middle of your leg. A haircut is for the head, not the knee.',
      leg: 'A leg is the part of the body you walk with. A haircut is for the head, not the leg.',
    },
    more: "We say 'My hair is long', with 'is'. We say 'a hair' only when we mean one single piece of hair. A hairdresser cuts hair.",
    tip: "Say 'have a haircut' or 'get a haircut' when someone else cuts your hair. Do not say 'make a haircut'.",
  },
  shirt: {
    why: "The picture shows a T-shirt, a top with short sleeves. 'Shirt' is the closest word here. You can say: He wears a green shirt to school.",
    not: {
      coat: 'A coat is a warm, heavy piece of clothing that we wear outside over other clothes. The picture shows a light top with short sleeves.',
      jumper:
        'A jumper is a warm top made of wool with long sleeves. The picture shows a light top with short sleeves.',
      dress:
        'A dress is one piece of clothing that covers the top and the legs. The picture shows only a top.',
    },
    more: "A T-shirt has no collar or buttons, but a school shirt usually has both. In Britain a 'jumper' is a warm top. Americans often say 'sweater'.",
    tip: "Use the verb 'wear' with clothes: 'I wear a shirt to school.'",
  },
  trousers: {
    why: 'The picture shows jeans, which are a kind of trousers. Trousers cover both legs from the waist to the ankles. You can say: These trousers are too long.',
    not: {
      shorts:
        'Shorts are short trousers that stop above the knee. The legs in the picture are long.',
      skirt: 'A skirt hangs from the waist and has no separate legs. Trousers have two legs.',
      socks: 'Socks are small clothes for the feet. The picture shows clothes for the whole legs.',
    },
    more: "'Trousers' is always plural, so we say 'a pair of trousers' and 'these trousers are'. The same is true for 'shorts', 'jeans' and 'scissors'.",
    tip: "Say 'a pair of trousers' for one item. You can also say 'a pair of jeans' or 'a pair of shoes'.",
  },
  dress: {
    why: 'The picture shows a dress, a piece of clothing for girls and women. It covers the body from the shoulders down in one piece. You can say: She wore a blue dress to the party.',
    not: {
      skirt:
        'A skirt hangs from the waist and covers only the lower part of the body. The picture shows one piece with a top.',
      shirt:
        'A shirt covers only the top half of the body. The picture shows one piece that covers the body and the top of the legs.',
      coat: 'A coat is a warm layer that we wear outside over other clothes. The picture shows a dress.',
    },
    more: "'Dress' is also a verb: 'I dress in the morning' means 'I put on my clothes'. Here it is a noun.",
    tip: "Learn the verb 'put on': 'She puts on her dress.' The opposite is 'take off'.",
  },
  shoes: {
    why: "The picture shows a sports shoe. We wear shoes on our feet, and we usually say 'shoes' because we wear two. You can say: These shoes are comfortable.",
    not: {
      socks: 'Socks are soft and go inside your shoes. The picture shows a shoe with a thick sole.',
      boots:
        'Boots cover the ankle or more. They are for cold, wet or muddy weather. The picture shows a low sports shoe.',
      gloves: 'Gloves are for the hands. The picture shows something for the foot.',
    },
    more: "We wear shoes in pairs, so the word is usually plural: 'a pair of shoes'. One shoe is 'a shoe'.",
    tip: "Use 'put on' and 'take off' for shoes: 'Take off your shoes at the door.'",
  },
  coat: {
    why: 'The picture shows a coat, a warm piece of clothing that we wear outside over our other clothes. It has long sleeves. You can say: Take your coat. It is cold.',
    not: {
      jumper:
        'A jumper is a soft top made of wool. We usually wear it under a coat, not outside. The picture shows a coat.',
      shirt:
        'A shirt is a light top. It is not warm enough for cold weather. The picture shows a coat.',
      scarf:
        'A scarf is a long piece of cloth that goes around your neck. The picture shows a coat with sleeves.',
    },
    more: "We wear a coat in cold or wet weather. A 'raincoat' keeps out the rain, and a 'jacket' is a shorter, lighter coat.",
    tip: "Learn winter clothes together: coat, scarf, gloves, hat. Say: 'I wear a coat in winter.'",
  },
  socks: {
    why: "The picture shows socks. Socks are soft clothes that we wear on our feet, inside our shoes. We wear two together, so we say 'socks'. You can say: I need clean socks.",
    not: {
      shoes: 'Shoes are harder and go outside your socks. The picture shows soft socks.',
      gloves: 'Gloves are for your hands. Socks are for your feet. The picture shows socks.',
      shorts:
        'Shorts are short trousers for your legs. The picture shows small soft clothes for the feet.',
    },
    more: "Like 'shoes' and 'trousers', 'socks' is plural. We say 'a pair of socks'. One sock is 'a sock'.",
    tip: "Use 'a pair of' with socks, shoes, gloves, trousers and glasses.",
  },
  cap: {
    why: 'The picture shows a cap, a soft hat with a flat piece at the front. We wear it on the head. You can say: He wears a cap when it is sunny.',
    not: {
      gloves: 'Gloves go on your hands. A cap goes on your head. The picture shows a cap.',
      scarf:
        'A scarf is a long piece of cloth that goes around your neck. The picture shows something for the head.',
      belt: 'A belt goes around your waist to hold up trousers. The picture shows a cap for the head.',
    },
    more: "A cap is a kind of hat. Other hats are a woolly hat for the cold and a sun hat for hot days. The word 'hat' covers all of them.",
    tip: "Learn the general word and the special word: 'hat' is general, and 'cap' is one kind of hat.",
  },
  sun: {
    why: 'The picture shows the sun, the bright round star in the sky that gives us light and heat. You can say: The sun is shining today.',
    not: {
      rain: 'Rain is water that falls from the clouds in drops. The picture shows a bright sun, not falling water.',
      cloud:
        'A cloud is a white or grey shape in the sky. The picture shows a bright circle with rays.',
      snow: 'Snow is soft, white and cold. It falls in winter. The picture shows a warm, bright sun.',
    },
    more: 'We make weather adjectives from nouns: sun, sunny; rain, rainy; cloud, cloudy; snow, snowy.',
    tip: "Describe the weather with 'It is': 'It is sunny.' 'It is rainy.' Use 'It is' and then the adjective.",
  },
  rain: {
    why: 'The picture shows a cloud with drops of water falling from it. This is rain. You can say: It is raining, so I need an umbrella.',
    not: {
      snow: 'Snow is soft and white. It falls when the weather is very cold. The picture shows drops of water.',
      sun: 'The sun is a bright circle in the sky. The picture shows a grey cloud with drops falling.',
      wind: 'Wind is moving air. We cannot see it. The picture shows water drops falling from a cloud.',
    },
    more: "'Rain' can be a noun or a verb. 'The rain is heavy' uses a noun, and 'It rains a lot here' uses a verb.",
    tip: "Say 'It is raining' for now and 'It rains a lot' for what is usual. Practise both.",
  },
  snow: {
    why: 'The picture shows a snowflake, a tiny piece of frozen water. Many snowflakes together make snow, which is soft and white and falls in cold weather. You can say: We play in the snow.',
    not: {
      rain: 'Rain is liquid water that falls in drops. Snow is frozen, so it falls as soft white flakes. The picture shows a flake.',
      wind: 'Wind is moving air. We cannot see it. The picture shows a snowflake.',
      fog: 'Fog is thick cloud near the ground. It makes it hard to see far. The picture shows a snowflake.',
    },
    more: "We say 'There is a lot of snow', not 'snows'. We use 'snowflake' for one small piece. A snowman is a figure made from snow.",
    tip: "Use 'It is snowing' for now. The verb 'snow' is the same word as the noun.",
  },
  cloud: {
    why: 'The picture shows a cloud with a little sun behind it. The cloud is the big shape in front. Clouds are made of tiny drops of water in the sky. You can say: There is a big cloud over the hill.',
    not: {
      rain: 'Rain is water falling from the sky. There are no drops falling in this picture.',
      snow: 'Snow is white flakes falling in cold weather. There are no flakes in this picture.',
      wind: 'Wind is moving air, so it is hard to draw. The picture shows a cloud in the sky.',
    },
    more: "'Cloudy' means that there are many clouds in the sky. Dark grey clouds often bring rain.",
    tip: "Say 'It is cloudy' for a day with many clouds. Learn it with 'It is sunny' and 'It is rainy'.",
  },
  rainbow: {
    why: 'The picture shows a rainbow, a curve of many colours in the sky. It appears when sunlight shines through drops of rain. You can say: There is a rainbow over the hill.',
    not: {
      storm:
        'A storm is very bad weather with strong wind and heavy rain. It is not a curve of colours in the sky.',
      snow: 'Snow is white, cold and soft. The picture shows a curve of bright colours.',
      wind: 'Wind is moving air. You cannot see it. The picture shows curved lines of colour.',
    },
    more: "'Rainbow' is made from 'rain' and 'bow', a curved shape. People often name seven colours: red, orange, yellow, green, blue, indigo and violet.",
    tip: 'Learn the colours in order: red, orange, yellow, green, blue, indigo, violet. Say them when you see a rainbow.',
  },
  lightning: {
    why: 'The picture shows a bright zigzag, the sign for lightning. Lightning is a flash of electricity in the sky during a storm. You can say: We saw lightning last night.',
    not: {
      fog: 'Fog is thick grey air near the ground. It is slow and quiet. The picture shows a sharp, bright flash.',
      wind: 'Wind is moving air. We cannot see it. The picture shows a flash with a zigzag shape.',
      rain: 'Rain is water falling in drops. The picture shows a zigzag flash, not drops.',
    },
    more: "Lightning is the flash that you see. Thunder is the loud noise that comes after it. We usually say 'thunder and lightning'.",
    tip: "'Lightning' has no plural form. Say 'a flash of lightning' when you want to count it.",
  },
  car: {
    why: 'The picture shows a small car, a road vehicle with four wheels that carries a few people. You can say: My father drives a red car.',
    not: {
      bus: 'A bus is much bigger than a car and carries many passengers. The picture shows a small car.',
      van: 'A van is bigger and has a large space at the back for goods. The picture shows a car for people.',
      lorry: 'A lorry is a very big truck that carries goods. The picture shows a small car.',
    },
    more: "Americans say 'truck' for 'lorry'. In Britain a 'lorry' carries goods on the road.",
    tip: "Say 'in a car' but 'on a bus'. After 'by' we use no 'a' or 'the': 'I go to school by car.'",
  },
  bus: {
    why: 'The picture shows a bus, a large vehicle that carries many people on the road. It stops at bus stops. You can say: I take the bus to school.',
    not: {
      car: 'A car is smaller and carries only a few people. The picture shows a long, tall bus with many windows.',
      train: 'A train runs on rails, not on a road. The picture shows a vehicle for the road.',
      taxi: 'A taxi is a car that you pay to take you where you want to go. The picture shows a large bus.',
    },
    more: "A bus follows a route and stops at bus stops. A 'coach' is a bus for long journeys.",
    tip: "Say 'get on the bus' and 'get off the bus'. We use 'on' for buses, trains and planes.",
  },
  bicycle: {
    why: 'The picture shows a bicycle, which has two wheels and pedals. You move it with your legs. You can say: I ride my bicycle to the park.',
    not: {
      motorbike:
        'A motorbike has an engine, so it does not need pedals. The picture shows a bicycle that you pedal.',
      scooter:
        'A scooter has two small wheels and a board that you stand on. The picture shows a seat and pedals.',
      car: 'A car has four wheels and an engine. The picture shows a vehicle with two wheels.',
    },
    more: "People often say 'bike' for 'bicycle'. We say 'ride a bike' and 'go by bike'.",
    tip: "'Bi' means 'two', as in 'bicycle'. Use this to remember that it has two wheels.",
  },
  aeroplane: {
    why: "The picture shows an aeroplane, a vehicle with wings that flies in the air and carries people far away. You can say: The aeroplane lands at six o'clock.",
    not: {
      helicopter:
        'A helicopter has a spinning blade on top instead of fixed wings. The picture shows an aeroplane with wings.',
      rocket:
        'A rocket flies up into space and has no wings. The picture shows an aeroplane with two wings.',
      boat: 'A boat travels on water. The picture shows a vehicle that flies in the sky.',
    },
    more: "In British English we say 'aeroplane' or 'plane'. Americans say 'airplane'. People fly from an airport.",
    tip: "Use 'fly' with aeroplane: 'I fly to London.' We also say 'by plane' for how we travel.",
  },
  train: {
    why: 'The picture shows a train, a long vehicle that runs on rails and carries many people or goods. This one is an old steam train. You can say: The train arrives at nine.',
    not: {
      tram: 'A tram also runs on rails, but it goes along town streets and is shorter. The picture shows an old train engine.',
      bus: 'A bus runs on the road, not on rails. The picture shows a vehicle that runs on rails.',
      lorry: 'A lorry is a big truck that drives on the road. The picture shows a train.',
    },
    more: "We go to the station to catch a train. We say 'get on' and 'get off' a train.",
    tip: "Use 'by train': 'I go to work by train.' We do not say 'by the train' in this meaning.",
  },
  ship: {
    why: 'The picture shows a ship, a very large boat that carries people or goods across the sea. You can say: The ship sails to France.',
    not: {
      bus: 'A bus travels on roads. The picture shows a vehicle that sails on water.',
      plane: 'A plane flies in the sky. The picture shows a vehicle that floats on the sea.',
      train: 'A train runs on rails on land. The picture shows a vehicle on the water.',
    },
    more: "A ship is bigger than a boat. We often say 'boat' for a small one and 'ship' for a big one that crosses the sea.",
    tip: "Use 'by ship', 'by boat', 'by train' and 'by plane' to say how you travel. No 'a' comes after 'by'.",
  },
  taxi: {
    why: 'The picture shows a taxi, a car with a driver that you pay to take you to a place. Many taxis are yellow or black. You can say: We took a taxi to the airport.',
    not: {
      bus: 'A bus is big and carries many passengers on a fixed route. The picture shows a car for a few people.',
      lorry: 'A lorry is a very large truck for goods. The picture shows a small car.',
      van: 'A van has a large space at the back for things. The picture shows a car with seats for people.',
    },
    more: "A 'cab' is another word for a taxi. In London many taxis are black. We pay the driver at the end of the journey.",
    tip: "Learn useful phrases: 'take a taxi', 'call a taxi' and 'Can you take me to the station?'",
  },
  books: {
    why: 'The picture shows a stack of books. A book has pages that we read. The word is plural because there is more than one. You can say: I have three books in my bag.',
    not: {
      pens: 'Pens are thin tools for writing. The picture shows thick things with pages: books.',
      bags: 'Bags are for carrying things. The picture shows things with pages and covers.',
      rulers: 'Rulers are flat sticks for measuring. The picture shows books.',
    },
    more: "One book, two books: we add 's'. The words 'bookshop', 'bookcase' and 'bookmark' all contain 'book'.",
    tip: "Use 'a' for one and 'some' for more than one: 'a book', 'some books'.",
  },
  pencil: {
    why: 'The picture shows a pencil, which has a sharp tip and a long body. We write and draw with it. You can say: Please write with a pencil, not a pen.',
    not: {
      pen: 'A pen writes with ink, and you cannot rub the ink out easily. The picture shows a pencil.',
      ruler:
        'A ruler is a flat stick with numbers for measuring. The picture shows a pencil, which is for writing.',
      rubber:
        "A rubber removes pencil marks. Many pencils have a small rubber on the end, but the picture shows the whole pencil, so the word is 'pencil'.",
    },
    more: "In British English a 'rubber' is what you use to remove pencil marks. Americans call it an 'eraser'.",
    tip: 'Pencils are good for practice, because you can rub out a mistake.',
  },
  bag: {
    why: 'The picture shows a bag, a backpack for school. A bag is something we carry on our back or in our hand to hold our things. You can say: My bag is very heavy.',
    not: {
      book: 'A book has pages and words. You put a book in a bag. The picture shows the bag.',
      desk: 'A desk is a table for writing and reading. It does not move. The picture shows something you carry.',
      'pencil case':
        'A pencil case is a small bag for pens and pencils. The picture shows a big bag with straps.',
    },
    more: "A school bag holds books and a lunch box. A 'rucksack' or 'backpack' is a bag with two straps that you carry on your back.",
    tip: "Say 'in my bag' to tell where something is: 'My pencil case is in my bag.'",
  },
  scissors: {
    why: 'The picture shows a pair of scissors. They have two sharp blades that cut paper. You can say: Can I borrow your scissors?',
    not: {
      glue: 'Glue is a sticky liquid that joins paper together. Scissors do the opposite: they cut it.',
      ruler: 'A ruler is a flat stick with numbers for measuring. It does not cut.',
      tape: 'Tape is a thin sticky strip that sticks things together. It does not cut.',
    },
    more: "'Scissors' is always plural: 'These scissors are sharp.' We say 'a pair of scissors' for one tool.",
    tip: "Learn the verb 'cut' with scissors: 'cut the paper'. It is the same in the past: 'I cut the paper yesterday.'",
  },
  ruler: {
    why: 'The picture shows a ruler, a flat stick with marks along its edge. We use it to measure how long something is and to draw straight lines. You can say: Draw a line with a ruler.',
    not: {
      pencil:
        'A pencil is for writing and drawing. It has no marks along its edge. The picture shows a flat ruler with marks.',
      rubber: 'A rubber is a small soft block that removes pencil marks. It does not measure.',
      pen: 'A pen is for writing with ink. A ruler is for measuring. The picture shows a ruler.',
    },
    more: 'A ruler in Britain usually measures in centimetres, and often in inches too. A 30 centimetre ruler is common.',
    tip: "Practise numbers: measure your pencil and say 'It is fifteen centimetres long.'",
  },
  crayon: {
    why: 'The picture shows a crayon, a thick coloured stick made of wax. Children use crayons to colour pictures. You can say: I colour the sun with a yellow crayon.',
    not: {
      pencil: 'A pencil has a wooden body and a thin tip. The picture shows a thick wax crayon.',
      paint:
        'Paint is a wet liquid that you put on with a brush. The picture shows a solid stick of colour.',
      chalk:
        'Chalk is a soft stick for a blackboard, and it leaves dust. A crayon is waxy and is for paper.',
    },
    more: 'Crayons are made of coloured wax, so they feel smooth. We draw and colour on paper with them.',
    tip: "Use 'colour' as a verb: 'colour the picture'. In British English it has the letters 'ou'.",
  },
  abacus: {
    why: 'The picture shows an abacus, an old tool for counting. It has rows of beads on wires. You move the beads to add and take away. You can say: The teacher showed us an abacus.',
    not: {
      calculator:
        'A calculator is an electronic tool with buttons and a screen. The picture shows a frame with beads.',
      clock:
        'A clock shows the time. It has a round face with hands. The picture shows rows of beads.',
      ruler:
        'A ruler is a flat stick for measuring. The picture shows a frame with beads for counting.',
    },
    more: 'People have used the abacus for a very long time to count and to do sums.',
    tip: "'Abacus' is a rare word, so say it slowly: AB-a-cus. Learn it with 'count' and 'beads'.",
  },
}
