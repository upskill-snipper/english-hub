import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Synonym Shuffle: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/synonym-shuffle.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'Careful not to wake the baby, she ⟨said⟩ the secret into his ear.': {
    why: 'Whispered means spoke very softly, using breath rather than a full voice. She is careful not to wake the baby and speaks right into his ear, so a word for quiet, secret speech is the only one that fits.',
    not: {
      declared:
        'Declared means said something firmly and openly, for others to hear. A secret kept quiet near a sleeping baby is the opposite.',
      shouted:
        'Shouted means spoke very loudly. That would wake the baby and everyone else, and it would spoil the secret.',
      announced:
        "Announced means told people something in a clear, public way. A secret in someone's ear is private, not public.",
    },
    more: 'Speech verbs show volume. Whispered, murmured and breathed are quiet, while shouted, bellowed and yelled are loud. The verb tells the reader how the words sounded, so you often need no extra description.',
    tip: "In your own writing, choose the speech verb that matches the situation. 'She whispered' is stronger and shorter than 'she said very quietly'.",
  },
  'Standing before the court, the lawyer ⟨said⟩ that her client was innocent.': {
    why: "Declared means stated something firmly and clearly, often in front of other people. A lawyer speaking in court about her client's innocence is making a confident, formal statement, so declared fits.",
    not: {
      mumbled:
        'Mumbled means spoke unclearly and quietly. A lawyer who mumbled would sound unsure, and the court might not hear her.',
      whispered:
        'Whispered means spoke very softly. A court needs to hear a lawyer, so whispering does not suit a public statement.',
      muttered:
        'Muttered means spoke in a low, grumbling voice, often to oneself. It sounds unsure or annoyed, not firm and formal.',
    },
    more: 'Declared is a strong, formal word. It is also used for official statements, such as declaring a winner or declaring war. It makes the speaker sound confident and in charge.',
    tip: 'Use declared when a character states something with total confidence in front of others. It gives their words authority.',
  },
  '"It is not fair!" the child ⟨said⟩ angrily, stamping a foot.': {
    why: "Protested means spoke out against something that seems unfair. The child objects that 'It is not fair' and stamps a foot, so the verb needs to show a complaint, and protested does.",
    not: {
      suggested:
        'Suggested means put forward an idea for someone to consider. The child is complaining, not offering a plan.',
      wondered:
        'Wondered means thought aloud or asked oneself a question. The child is making a complaint, not wondering about something.',
      observed:
        'Observed means remarked calmly on something noticed. A child who is stamping a foot is not calm.',
    },
    more: 'Neutral speech verbs such as said, replied and remarked show no feeling. Protested, snapped and snarled each show how the speaker feels, and each gives the reader a different picture.',
    tip: 'Choose a speech verb that shows why a character is speaking, not just that they are. Protested tells us the character thinks something is wrong.',
  },
  'Unsure of the answer, he ⟨said⟩ something under his breath.': {
    why: "Muttered means spoke in a low, unclear voice, often because you are unsure or unhappy. He is unsure of the answer and speaks 'under his breath', so he is speaking quietly and not clearly.",
    not: {
      proclaimed:
        'Proclaimed means announced something loudly and proudly. Someone who is unsure and speaking under his breath is doing the opposite.',
      bellowed:
        "Bellowed means shouted in a deep, loud voice. It cannot be done 'under his breath'.",
      announced:
        'Announced means told people something clearly so they all heard. Speaking under your breath is meant not to be heard.',
    },
    more: 'Mutter, mumble and murmur all describe quiet speech, but they differ. Muttering often shows worry or annoyance, mumbling is simply hard to hear, and murmuring is soft and gentle.',
    tip: "Pair a speech verb with a detail that agrees with it, such as 'under his breath'. Matching details make a character's feelings easy to believe.",
  },
  'She ⟨said⟩ that the holiday had been the best week of her life.': {
    why: 'Enthused means spoke with great excitement and delight. She says the holiday was the best week of her life, so her tone is joyful and full of praise.',
    not: {
      grumbled:
        'Grumbled means complained in a bad mood. She is praising the holiday, not moaning about it.',
      snapped: 'Snapped means spoke sharply and crossly. Her words are happy ones.',
      objected:
        'Objected means said she disagreed or did not like something. She is full of praise, not disagreement.',
    },
    more: "Enthused is the verb linked to the noun enthusiasm. It is often followed by 'about' or 'over', as in 'she enthused about the food'. It shows the speaker's feeling as well as her words.",
    tip: 'Use a positive speech verb such as enthused, gushed or raved to give a character a bright, excited voice.',
  },
  '"You will regret this," the villain ⟨said⟩ with a cold smile.': {
    why: "Sneered means spoke in a scornful, mocking way. The villain says 'You will regret this' with a cold smile, so his tone is menacing and full of contempt.",
    not: {
      giggled: 'Giggled means laughed in a light, silly way. It sounds playful, not threatening.',
      chirped:
        'Chirped means spoke in a bright, cheerful voice. A cold smile and a threat do not sound cheerful.',
      sighed:
        'Sighed means spoke with a long breath, often from sadness or tiredness. It does not show scorn or menace.',
    },
    more: 'Sneer is also a noun: a scornful look or smile. Verbs such as sneered, snarled and hissed make a speaker sound unfriendly or dangerous.',
    tip: "To make a character sound threatening, choose a speech verb with a cold sound and add one detail, as the sentence does with 'a cold smile'.",
  },
  'The judges agreed it was a ⟨good⟩ performance that left the audience speechless.': {
    why: 'Remarkable means so impressive that people notice it and talk about it. A performance that leaves the whole audience speechless must have been far better than ordinary, so remarkable fits.',
    not: {
      adequate:
        'Adequate means just good enough and no more. It cannot describe a performance that left an audience speechless.',
      acceptable:
        'Acceptable means good enough to be allowed. That is very low praise, far from leaving people speechless.',
      satisfactory:
        'Satisfactory means it met the standard but no more. That is a very flat word for a performance that amazed an audience.',
    },
    more: 'Remarkable means worth remarking on. Words of praise come in strengths: acceptable and adequate are weak, good is middle, and remarkable or outstanding are strong.',
    tip: 'When you judge something in an essay, match the strength of your word to the evidence. Choose a strong word like remarkable only when the text shows a strong effect.',
  },
  'He gave a ⟨good⟩ argument, supported by clear and convincing evidence.': {
    why: 'Compelling means so convincing that it is hard to disagree. The argument is backed by clear, convincing evidence, so compelling describes how strong and persuasive it is.',
    not: {
      pleasant:
        'Pleasant means nice to experience. It describes how something feels, not how strong an argument is.',
      tasty: 'Tasty describes food with a good flavour. An argument cannot be tasted.',
      kind: 'Kind describes a caring person or action. It says nothing about how well an argument is made.',
    },
    more: 'Compelling can also describe a story or a performance that holds your attention so strongly that you cannot look away. For arguments, persuasive and convincing are close in meaning.',
    tip: "Use compelling when you judge a writer's or speaker's case: 'The writer builds a compelling argument using strong evidence.'",
  },
  'The soup was so ⟨good⟩ that everyone asked for the recipe.': {
    why: 'Delicious means having a very pleasant taste or smell. The soup was so good that everyone asked for the recipe, so the missing word must be about flavour.',
    not: {
      virtuous:
        'Virtuous describes a person who behaves in a morally good way. A soup cannot have good morals.',
      skilful:
        'Skilful describes a person who does something well. The cook may be skilful, but the soup itself is not.',
      generous:
        'Generous means giving freely, or large in amount. It does not explain why everyone wanted the recipe, which is about taste.',
    },
    more: "'Good' covers many meanings. For food, choose a word about taste or smell, such as delicious, tasty or mouth-watering. For people, 'good' means something quite different.",
    tip: 'Use a precise taste word in descriptive writing. It helps the reader almost taste the food, which makes the scene more vivid.',
  },
  'She is a ⟨good⟩ person who volunteers every weekend without being asked.': {
    why: 'Virtuous means having high moral standards and doing what is right. She volunteers every weekend without being asked, which shows goodness of character, so virtuous fits.',
    not: {
      tasty: "Tasty describes food with a good flavour. A person's goodness is not about taste.",
      fluent:
        'Fluent means able to speak or write a language smoothly. It says nothing about being a good person.',
      rapid: 'Rapid means very fast. It describes speed, not character.',
    },
    more: 'A virtue is a good quality such as honesty, kindness or fairness. Virtuous is quite a formal word, so it suits serious writing better than casual chat.',
    tip: "In an essay about a character, name the exact quality the writer shows, such as selfless or principled. It is more precise than 'good'.",
  },
  'After months of practice, she became a ⟨good⟩ violinist.': {
    why: 'Accomplished means highly skilled, usually after training and practice. After months of practice she became a good violinist, so the missing word must describe her ability, and accomplished does.',
    not: {
      delicious: 'Delicious describes food with a pleasant taste. A violinist is not tasted.',
      honest:
        'Honest means truthful. A violinist can be honest, but it says nothing about how well she plays.',
      spacious:
        'Spacious describes a room or place with plenty of space. It cannot describe a person.',
    },
    more: 'Accomplished is linked to the verb accomplish, to achieve. Talented and gifted suggest natural ability, but accomplished suggests skill built up through practice, which is what this sentence describes.',
    tip: 'Use accomplished when skill has been earned through practice. It tells the reader how a person became good, not just that they are good.',
  },
  'They explored the ⟨big⟩ cathedral, craning their necks at its towering ceiling.': {
    why: 'Vast means extremely large, covering a huge space. The visitors crane their necks at a towering ceiling, which shows the cathedral is huge, so vast is the best fit.',
    not: {
      cramped:
        'Cramped means too small and crowded. That is the opposite of a cathedral with a towering ceiling.',
      plump:
        'Plump means round and well filled out, like a cushion or a cheek. It is not used for a huge building.',
      mild: 'Mild means gentle, as in mild weather. It has nothing to do with size.',
    },
    more: "Vast suggests a size you can hardly take in, such as a desert, an ocean or a great hall. It carries a feeling of awe that 'big' does not.",
    tip: 'Pick a size word that gives a feeling. Vast can make the reader feel small and amazed.',
  },
  'Losing the championship was a ⟨big⟩ disappointment for the whole team.': {
    why: 'Crushing describes a blow that hits with great force and leaves you feeling beaten. Losing the championship is a heavy emotional blow for the whole team, so crushing suits the disappointment.',
    not: {
      spacious: 'Spacious means having plenty of room. It describes places, not feelings.',
      roomy: 'Roomy also means having plenty of space, so it describes places, not feelings.',
      bulky:
        'Bulky means large and awkward to carry. It describes objects, not how a result feels.',
    },
    more: "'Big' can mean large in size or large in effect, and here it means large in effect. Crushing, bitter and devastating are strong words often paired with disappointment or defeat.",
    tip: 'To show strong emotion, choose an adjective that makes the feeling seem physical. Crushing makes disappointment feel like a heavy weight.',
  },
  'The decision to move abroad was a ⟨big⟩ one that changed everything.': {
    why: 'Monumental means hugely important or great in effect. Moving abroad changed everything, so the decision was enormous in importance, and monumental describes that.',
    not: {
      wide: 'Wide describes how far across something is. A decision has no width.',
      tall: 'Tall describes height. A decision cannot be measured from top to bottom.',
      fat: 'Fat describes how thick something is. A decision has no thickness, so only a word about importance will work.',
    },
    more: 'A monument is a large structure built to last, often to remember something. Monumental borrows that idea of something big and lasting, so it works for events, mistakes and changes as well as for buildings.',
    tip: "When 'big' means important and not large in size, say so with a word such as monumental, major or life-changing. It shows the reader why the thing matters.",
  },
  'A ⟨big⟩ wave rose above the boat and crashed onto the deck.': {
    why: 'Towering means rising very high, like a tower, and often feels threatening. The wave rose above the boat before it crashed down, so a word about great height is the best choice.',
    not: {
      plump: 'Plump means round and well filled out. It describes shape, not the height of a wave.',
      broad:
        'Broad means wide from side to side. A wave that rose above the boat is described by its height, not its width.',
      chubby:
        "Chubby means round and slightly fat, and usually describes a child's cheeks or hands. It does not suit a dangerous wave.",
    },
    more: 'Towering borrows the shape of a tower, so it is a quiet metaphor. It makes the wave seem solid and powerful, and the boat small and in danger.',
    tip: 'In descriptive writing, use words that make a large thing feel threatening, such as towering, looming or hulking.',
  },
  'The factory was a ⟨big⟩ building that stretched the length of the street.': {
    why: 'Enormous means extremely large. The factory stretches the whole length of the street, so the missing word must describe huge physical size, and enormous does that exactly.',
    not: {
      crushing:
        'Crushing describes a powerful blow, such as a crushing defeat. It does not describe the size of a building.',
      serious: 'Serious means important or grave. It does not tell us how large the factory is.',
      weighty:
        'Weighty usually means heavy or important, as in a weighty decision. It does not describe length or size.',
    },
    more: "Enormous, gigantic and immense all mean very large. A detail can prove the size, as 'stretched the length of the street' does here.",
    tip: 'Back up a size word with evidence, such as a measurement or a comparison. It makes a description believable.',
  },
  'The hotel staff were so ⟨nice⟩ that guests felt welcome the moment they arrived.': {
    why: 'Hospitable means friendly and welcoming to guests. The staff made guests feel welcome the moment they arrived, so hospitable is the exact word for it.',
    not: {
      wealthy:
        'Wealthy means having a lot of money. It says nothing about how the staff treated guests.',
      punctual: 'Punctual means arriving on time. It does not explain why guests felt welcome.',
      silent:
        'Silent means making no sound. Silent staff would not make guests feel warmly welcomed.',
    },
    more: 'Hospitable, hospitality, hotel and hospital all come from an old word linked to guests and looking after them. That shared idea of care is why hospitable suits a welcoming hotel.',
    tip: "Use hospitable for people or places that welcome others warmly. 'Nice' tells the reader very little, but hospitable says exactly what kind of nice.",
  },
  'It was a ⟨nice⟩ summer afternoon, warm with a gentle breeze.': {
    why: 'Pleasant means giving a feeling of enjoyment. The afternoon is warm with a gentle breeze, so it feels agreeable, and pleasant fits a day or its weather.',
    not: {
      generous: 'Generous describes a person who gives freely. It is not used for an afternoon.',
      honest:
        'Honest describes a person who tells the truth. An afternoon has no character to be honest.',
      brave: 'Brave describes a person who faces danger. A day cannot be brave.',
    },
    more: 'Nice is a very flexible word. It can mean kind, friendly, pleasant or attractive. Choosing a more exact word shows which meaning you intend.',
    tip: "For weather and places, pleasant, mild and balmy are exact. 'Balmy' means pleasantly warm, which also suits this afternoon.",
  },
  'That was a very ⟨nice⟩ thing to do: you helped without expecting thanks.': {
    why: 'Kind means caring about others and wanting to help. The person helped without expecting thanks, which is a selfless, caring act, so kind names the quality exactly.',
    not: {
      mild: 'Mild means gentle or not extreme, as in mild weather. It does not show the caring that made the person help.',
      tidy: 'Tidy means neat and in order. It describes a room or a habit, not an act of help.',
      rapid:
        'Rapid means very quick. The sentence is about the caring nature of the act, not its speed.',
    },
    more: 'Kind, thoughtful and selfless are close in meaning. Selfless goes further, because it says the person gave up something of their own, such as time or comfort.',
    tip: "Show kindness through an action, then name it. 'Helped without expecting thanks' is the evidence, and 'kind' or 'selfless' is the label.",
  },
  'She wore a ⟨nice⟩ dress that turned heads as she entered the hall.': {
    why: 'Elegant means graceful and stylish. The dress turned heads as she walked into the hall, so the missing word must describe how it looked, and elegant is about attractive, refined appearance.',
    not: {
      honest: 'Honest describes someone who tells the truth. A dress has no honesty to describe.',
      punctual: "Punctual means arriving on time. It describes a person's behaviour, not a dress.",
      humble:
        'Humble means modest, or plain and ordinary. A dress that turned heads is the opposite of plain.',
    },
    more: 'Elegant suggests simple, graceful style rather than showy decoration. Stylish, striking and glamorous also describe appearance, and each gives a different picture.',
    tip: "Choose the appearance word that gives the effect you want. 'Elegant' suggests grace and good taste, while 'glamorous' suggests sparkle and show.",
  },
  'Their new neighbour seemed ⟨nice⟩, always smiling and ready to chat.': {
    why: 'Friendly means kind and pleasant towards other people. The neighbour is always smiling and ready to chat, so the missing word must describe a warm, sociable person.',
    not: {
      vast: "Vast means extremely large. It could describe a building or a space, but not a person's manner.",
      ancient: 'Ancient means very old, from long ago. It does not describe how someone behaves.',
      fluent:
        'Fluent means able to speak a language smoothly. The sentence says nothing about languages.',
    },
    more: 'Other words for a nice person include warm, approachable and cheerful. Choose by what the person does: smiling suggests cheerful, and chatting suggests sociable.',
    tip: "Use the person's actions as evidence for the word you choose. Smiling and chatting back up 'friendly' in a way that 'nice' never can.",
  },
  'The milk had a ⟨bad⟩ smell, so she poured it down the sink.': {
    why: 'Rancid describes food, especially food containing fat, that has gone off and smells or tastes foul. The milk smelled so bad that she poured it away, so rancid fits.',
    not: {
      rude: "Rude means impolite. It describes a person's manners, not the smell of milk.",
      faint:
        'Faint means weak or hard to notice. It tells us how strong a smell is, not that the smell is unpleasant.',
      severe:
        'Severe means very strict or very serious, as in severe pain. It does not usually describe a smell.',
    },
    more: "The best 'bad' word depends on what is bad. Food goes rancid, a person can be rude or wicked, and weather can be atrocious. Each kind of thing has its own best 'bad' word.",
    tip: "In descriptive writing, a precise 'bad' word helps the reader smell or taste the thing. Rancid is stronger than 'bad' because it names the sickly, spoiled quality.",
  },
  'Stealing from the elderly is a truly ⟨bad⟩ act.': {
    why: 'Wicked means deeply evil or morally wrong. Stealing from the elderly is a cruel and serious wrong, so the missing word must be about moral badness, and wicked is.',
    not: {
      rancid: 'Rancid describes food that has gone off. An act cannot be rancid.',
      faint:
        'Faint means weak or hardly noticeable. Stealing from the elderly is serious, not slight.',
      bland:
        'Bland means mild and lacking taste or interest. It is far too weak for such a cruel act.',
    },
    more: "Wicked is a strong word for moral badness. Cruel, evil and despicable are similar. In informal speech wicked can even mean 'excellent', so in formal writing make sure the context shows which meaning you intend.",
    tip: 'Use wicked or another strong moral word only for truly serious behaviour. If you use strong words all the time, they lose their power.',
  },
  'He made a ⟨bad⟩ mistake that cost the company thousands of pounds.': {
    why: 'Costly means causing a great loss, especially of money. The mistake cost the company thousands of pounds, so costly says exactly what was bad about it.',
    not: {
      tasty: 'Tasty describes food with a good flavour. A mistake cannot be tasty.',
      gentle: 'Gentle means soft and calm. It is the opposite of a mistake with serious results.',
      quiet:
        'Quiet means making little noise. It tells us nothing about the damage the mistake caused.',
    },
    more: "'Bad' hides what was bad about something. Costly names the result of the mistake. Other words name other results: a fatal mistake has deadly results, and an embarrassing mistake causes shame.",
    tip: 'Name the consequence in your description. Costly shows the effect on the company, so the reader sees how serious the mistake was.',
  },
  'The weather was so ⟨bad⟩ that the match had to be cancelled.': {
    why: 'Atrocious means extremely bad or terrible. The weather was so bad that the match had to be cancelled, so a strong word for terrible conditions is needed, and atrocious is that.',
    not: {
      rancid: 'Rancid describes food that has gone off. Weather is not food.',
      rude: "Rude means impolite, so it describes a person's manners and not the weather.",
      dull: 'Dull means grey, boring or not bright. Dull weather is disappointing, but it is not bad enough to cancel a match.',
    },
    more: "Atrocious describes anything extremely poor or shocking, such as atrocious weather, atrocious handwriting or an atrocious performance. It sounds much stronger than 'poor' or 'bad'.",
    tip: 'Match the strength of your word to the evidence. A cancelled match proves the weather was extreme, so a strong word such as atrocious is justified.',
  },
  'His ⟨bad⟩ behaviour towards the waiter embarrassed everyone at the table.': {
    why: 'Rude means impolite and showing no respect. His behaviour towards the waiter embarrassed everyone at the table, so the word must be about bad manners, and rude is exactly that.',
    not: {
      rancid: "Rancid describes food that has gone off. It cannot describe a person's behaviour.",
      stale:
        'Stale describes food or air that is no longer fresh, such as stale bread. It does not describe behaviour.',
      damp: 'Damp means slightly wet. It describes things such as clothes or walls, not behaviour.',
    },
    more: 'Disrespectful, insolent and offensive also describe bad behaviour. Insolent suggests cheek towards someone in authority, while rude covers bad manners in general.',
    tip: 'In a character study, name the bad behaviour exactly: rude, arrogant and cruel each give a different picture. Then back it up with evidence.',
  },
  'When she heard she had won, she was ⟨happy⟩ beyond words and burst into tears.': {
    why: 'Overjoyed means extremely happy, so full of joy that it is almost too much to hold. She is happy beyond words and bursts into tears, which shows an overwhelming feeling.',
    not: {
      content:
        'Content means quietly satisfied. It is far too mild for someone who bursts into tears of joy.',
      amused:
        'Amused means finding something funny. Winning is not a joke, and amusement makes people laugh, not burst into tears.',
      calm: 'Calm means peaceful and not excited. Bursting into tears is not calm.',
    },
    more: "The 'over' in overjoyed means more than enough, as in overflowing: the joy spills over, here into tears. Happiness comes in strengths: pleased is mild, delighted is strong, and overjoyed or ecstatic are very strong.",
    tip: "Match the strength of the word to the reaction. Tears and 'beyond words' show a very strong feeling, so a strong word like overjoyed is right.",
  },
  'After a long day, he sat by the fire feeling quietly ⟨happy⟩.': {
    why: 'Content means quietly happy and satisfied with things as they are. He sits by the fire after a long day feeling quietly happy, so a calm, peaceful word fits.',
    not: {
      ecstatic:
        'Ecstatic means overwhelmed with joy. That is an extreme, excited happiness, not a quiet one by the fire.',
      jubilant:
        'Jubilant means joyful in a loud, triumphant way, like fans after a win. It does not suit a quiet evening by the fire.',
      frantic:
        'Frantic means wildly rushed or panicked. It is the opposite of relaxed contentment.',
    },
    more: "Happiness comes in different kinds as well as different strengths. Content is calm, gleeful is playful and ecstatic is wild. The word 'quietly' in the sentence is the clue to the calm kind.",
    tip: "Look for clue words such as 'quietly' or 'bouncing' that show which kind of happy is meant, and use clues like them in your own writing.",
  },
  'The children were ⟨happy⟩ and bouncing with energy on the trampoline.': {
    why: 'Gleeful means full of lively, joyful delight. The children are bouncing with energy on the trampoline, so the word should describe playful, bubbling happiness.',
    not: {
      serene: 'Serene means calm and peaceful. Bouncing children are lively, not peaceful.',
      tranquil: 'Tranquil also means calm and quiet. It does not match children full of energy.',
      sombre:
        'Sombre means serious, dark or sad in mood. It is the opposite of children enjoying themselves.',
    },
    more: "Gleeful often goes with laughter or shouting. It can also mean delighting in someone else's misfortune, as in 'gleeful at his rival's mistake', so the context matters.",
    tip: 'A word like gleeful adds sound and movement to happiness. Use it to bring a lively scene to life instead of just saying that people are happy.',
  },
  'She gave a ⟨happy⟩ sigh, finally relaxed now the exams were over.': {
    why: 'Relieved means glad because a worry has ended. She gives a happy sigh and is relaxed now that the exams are over, so her happiness is the kind that comes when a worry lifts.',
    not: {
      frantic:
        'Frantic means wildly rushed or panicked. She is relaxed, so frantic is the opposite.',
      anxious:
        'Anxious means worried or nervous. She is free of worry now that the exams are over.',
      furious: 'Furious means extremely angry. A relaxed, happy sigh does not show anger.',
    },
    more: 'Relief is happiness that comes after worry. Relieved only makes sense when there was something to worry about first, and the exams are the clue. Compare delighted, which needs no earlier worry.',
    tip: 'Name the cause of a feeling in the same sentence, as this one does with the exams. It helps the reader see why a character feels that way.',
  },
  'He was ⟨happy⟩ to help and grateful to be asked at all.': {
    why: 'Delighted means very pleased. He is happy to help and grateful to be asked, so the word must show willing, pleased feeling, and delighted does.',
    not: {
      reluctant: 'Reluctant means unwilling. He is happy to help, so he is not unwilling.',
      gloomy:
        'Gloomy means sad and without hope. It does not fit someone who is grateful to be asked.',
      bored: 'Bored means uninterested. Someone grateful to be asked is interested and keen.',
    },
    more: "Delighted often goes with 'to', as in delighted to help or delighted to meet you. It is warm and polite, which is why formal letters say 'We are delighted to offer you a place'.",
    tip: "In a formal letter or speech, delighted sounds warmer than 'happy'. Use it for good news, as in 'I am delighted to accept'.",
  },
  'After the funeral she felt deeply ⟨sad⟩ and could not stop weeping.': {
    why: 'Grief-stricken means overwhelmed by deep sorrow, especially after a death. She has just been to a funeral and cannot stop crying, so it names her feeling exactly.',
    not: {
      irritated:
        'Irritated means slightly annoyed. Someone weeping after a funeral is grieving, not annoyed.',
      puzzled: 'Puzzled means confused. It does not show sorrow.',
      restless:
        'Restless means unable to keep still or settle. It does not describe the heavy sadness of grief.',
    },
    more: "Grief is the deep sadness that follows a loss. 'Stricken' means struck, so grief-stricken pictures grief as a blow. Other compound adjectives work the same way: heartbroken, awestruck, panic-stricken.",
    tip: 'Compound adjectives such as grief-stricken pack a cause and an effect into one word. Save them for the strongest moments in your writing.',
  },
  'Staring out at the rain, he felt a vague, ⟨sad⟩ longing for home.': {
    why: 'Wistful means sadly longing for something far away or in the past. He stares at the rain and feels a vague longing for home, which is a gentle, dreamy sadness.',
    not: {
      furious: 'Furious means extremely angry. A soft longing for home is not anger.',
      cheerful: 'Cheerful means happy and bright. It does not match a sad longing.',
      panicked:
        'Panicked means gripped by sudden fear. His feeling is vague and gentle, not frightened.',
    },
    more: 'Wistful is a soft kind of sadness mixed with fond memory or a little hope. It is quieter than grief. Writers often use it with weather, memories and faraway places.',
    tip: 'Pair a mood word with a setting that matches, as the rain does here. A feeling and a setting that agree create atmosphere.',
  },
  'The film’s ending was so ⟨sad⟩ that the whole cinema fell silent.': {
    why: 'Heartbreaking means causing deep sadness. The ending was so sad that the whole cinema fell silent, which shows a powerful emotional effect, and heartbreaking names exactly that.',
    not: {
      annoying: 'Annoying means irritating. A silent cinema suggests deep feeling, not irritation.',
      confusing: 'Confusing means hard to understand. The sentence is about sadness.',
      tiring: 'Tiring means causing tiredness. It does not describe a sad effect.',
    },
    more: 'Heartbreaking turns a feeling into a picture of a heart breaking, which is a quiet kind of metaphor. Heart-wrenching works in the same way.',
    tip: "Describe the effect on the audience as well as the event itself. 'The whole cinema fell silent' backs up the word heartbreaking.",
  },
  'He looked ⟨sad⟩ and downcast after missing the final goal.': {
    why: 'Dejected means sad and low in spirits, usually after a disappointment. He missed the final goal and looks downcast, so dejected matches his mood exactly.',
    not: {
      thrilled:
        'Thrilled means very excited and pleased. Missing a goal does not make a player thrilled.',
      amused: 'Amused means finding something funny. He looks downcast, not entertained.',
      curious:
        'Curious means eager to find something out. It does not describe sadness after a disappointment.',
    },
    more: 'Dejected, downcast and crestfallen all describe the low spirits that follow a letdown. This is different from grief, which follows a serious loss.',
    tip: 'Use dejected for sadness with a clear cause, such as losing or failing. Then show it in the body: drooping shoulders or a lowered head.',
  },
  'A ⟨sad⟩ grey light fell over the empty, abandoned town.': {
    why: 'Melancholy means sad in a quiet, thoughtful way. A grey light over an empty, abandoned town creates a gloomy, mournful mood, so melancholy suits the atmosphere.',
    not: {
      furious:
        'Furious means extremely angry. An empty, abandoned town suggests sadness, not rage.',
      jolly: 'Jolly means cheerful and fun. It clashes with a grey light and empty streets.',
      frantic:
        'Frantic means wild with rushing or worry. The scene is still and empty, not busy and panicked.',
    },
    more: 'Calling a light sad or melancholy gives a place a mood. Writers use this to set the atmosphere of a scene, as in many ghost stories and gothic tales.',
    tip: 'To build atmosphere, give the setting the same mood as the story: a melancholy light, a mournful wind. Choose mood words that fit together.',
  },
  'Exhausted, the hikers ⟨walked⟩ slowly up the last steep hill.': {
    why: 'Trudged means walked slowly and heavily, with effort. The hikers are exhausted and climbing the last steep hill slowly, so trudged shows both their tiredness and the hard work.',
    not: {
      sprinted:
        'Sprinted means ran at top speed. Exhausted hikers going slowly up a steep hill are not sprinting.',
      skipped:
        'Skipped means moved with light, bouncing steps, usually when happy. It does not suit exhausted walkers.',
      darted: 'Darted means moved suddenly and fast. The hikers are slow and tired.',
    },
    more: 'Trudge, plod and slog all describe tired, heavy walking. They are good choices for hills, mud, snow and long journeys.',
    tip: "A walking verb can show tiredness, mood and speed in one word. 'Trudged' says in one word what 'walked slowly with great effort' takes five words to say.",
  },
  'The soldiers ⟨walked⟩ in perfect time across the parade ground.': {
    why: 'Marched means walked in time, with regular, firm steps, like soldiers. The soldiers move in perfect time across the parade ground, so marched describes their discipline and rhythm.',
    not: {
      wandered:
        'Wandered means walked without any plan or direction. Soldiers on parade follow a strict order.',
      stumbled:
        "Stumbled means walked unsteadily and almost fell. 'Perfect time' means steady and exact.",
      crept:
        'Crept means moved quietly and carefully so as not to be noticed. Soldiers on parade are meant to be seen and heard.',
    },
    more: 'March can also describe angry or determined walking, as when someone marches out of a room. It carries the ideas of rhythm, firmness and purpose.',
    tip: "Use marched when movement is orderly or determined. A character who 'marched' into a room seems to have made up their mind.",
  },
  'Proud of her medal, she ⟨walked⟩ confidently onto the stage.': {
    why: 'Strode means walked with long, confident steps. She is proud of her medal and walks confidently onto the stage, so strode shows her pride in how she moves.',
    not: {
      limped:
        'Limped means walked unevenly because of an injury. It shows weakness, not confidence.',
      shuffled:
        'Shuffled means dragged the feet along slowly, often from age, tiredness or shyness. It does not suit a proud walk.',
      staggered:
        'Staggered means walked unsteadily, as if about to fall. That is the opposite of confident.',
    },
    more: 'Strode is the past tense of stride. A stride is one long, firm step, so to stride is to walk taking steps like that.',
    tip: 'Choose a walking verb that shows attitude. Strode, swaggered and sauntered all suggest confidence, but each in a different way.',
  },
  'Not wanting to be seen, the thief ⟨walked⟩ quietly along the dark hallway.': {
    why: 'Crept means moved slowly and quietly, trying not to be noticed. The thief does not want to be seen and goes quietly along a dark hallway, so crept fits.',
    not: {
      galloped:
        'Galloped means ran like a horse at full speed. A thief trying to stay hidden would not make that noise.',
      marched:
        'Marched means walked with firm, regular steps. It is noisy and obvious, the opposite of sneaking.',
      bounded: 'Bounded means moved with big, energetic leaps. That would draw attention.',
    },
    more: 'Crept is the past tense of creep, which is also the root of the word creepy. A character who creeps is usually hiding, spying or afraid, so the verb builds tension.',
    tip: 'To build suspense, choose verbs of quiet movement, such as crept, tiptoed or sneaked, and add a setting detail like a dark hallway.',
  },
  'With nowhere to be, they ⟨walked⟩ aimlessly through the old market.': {
    why: 'Wandered means walked in a relaxed way with no fixed goal. They have nowhere to be and walk aimlessly through the market, so wandered describes the lack of purpose.',
    not: {
      sprinted: 'Sprinted means ran very fast. People with nowhere to be have no reason to rush.',
      marched:
        'Marched means walked with firm, regular steps and purpose. It is the opposite of aimless.',
      lunged:
        'Lunged means made a sudden forward movement, often to grab or attack. It does not fit a relaxed stroll.',
    },
    more: "Wander can also describe the mind drifting from a topic, as in 'my thoughts wandered'. Both uses share the idea of moving without a clear direction.",
    tip: "Wandered already suggests no fixed route, so you could drop 'aimlessly'. A strong verb often makes an adverb unnecessary.",
  },
  'The detective ⟨looked⟩ closely at the muddy footprint for any clue.': {
    why: 'Examined means looked at something closely and in detail. A detective searching a muddy footprint for any clue needs to inspect it carefully, so examined is the best fit.',
    not: {
      glanced:
        'Glanced means looked quickly and briefly. A detective hunting for clues would not give just a quick look.',
      glimpsed:
        'Glimpsed means saw something for a moment, often by chance. The detective is looking on purpose, for as long as it takes.',
      peeked:
        'Peeked means took a quick look, often secretly. It does not suit a careful inspection.',
    },
    more: 'Look verbs show how long and how carefully someone looks. Glance and glimpse are quick, gaze and stare are long, and examine, study and scrutinise are careful.',
    tip: "In a detective or science scene, 'examined' signals careful attention. Add what was found: 'He examined the footprint and noticed the deep heel.'",
  },
  'She only ⟨looked⟩ at the headline before rushing out of the door.': {
    why: 'Glanced means looked quickly and then looked away. She only looked at the headline as she rushed out of the door, so the look was brief, and glanced is the exact word.',
    not: {
      studied: 'Studied means looked at something carefully for a long time. She was in a rush.',
      examined:
        'Examined means looked closely at every detail. Someone rushing out has no time for that.',
      scrutinised:
        'Scrutinised means checked something very carefully, looking for details or mistakes. It is the opposite of a quick look.',
    },
    more: "Glance is also a noun, as in 'a quick glance'. The word 'only' in the sentence is a clue that the look was brief.",
    tip: 'Use a precise looking verb to show how much attention a character pays. A glance at a headline suggests hurry, while a stare suggests shock.',
  },
  'He ⟨looked⟩ angrily at the boy who had broken his window.': {
    why: 'Glared means stared with strong anger. He looked angrily at the boy who broke his window, so the verb must show hostility, and glared does.',
    not: {
      peeked: 'Peeked means took a quick, secret look. It does not show anger.',
      skimmed:
        'Skimmed means read or looked through something quickly. It is usually about reading, and it carries no anger.',
      browsed:
        'Browsed means looked through things casually, for example in a shop. It is relaxed, not angry.',
    },
    more: 'Glare also means a harsh, dazzling light, and a glaring look can feel as unpleasant as that. Both meanings are bright, hard and uncomfortable to receive.',
    tip: 'A look can show an emotion. Glared shows anger, gazed shows wonder and stared shows shock or curiosity, so pick the one that matches the character.',
  },
  'The tourists ⟨looked⟩ in wonder at the snow-capped mountains.': {
    why: 'Gazed means looked steadily for a long time, often in wonder or admiration. The tourists look in wonder at snow-capped mountains, so gazed matches both the length and the feeling of the look.',
    not: {
      glared: 'Glared means stared angrily. The tourists feel wonder, not anger.',
      glanced: 'Glanced means looked quickly. People amazed by mountains would look for longer.',
      squinted:
        'Squinted means looked with the eyes half closed, usually because of bright light or poor sight. It does not show wonder.',
    },
    more: "Gaze is also a noun, as in 'her steady gaze'. It is a soft word, often used for love, wonder or daydreaming. Compare 'stare', which can feel rude or shocked.",
    tip: 'Gazed sounds poetic, so it suits descriptive writing about scenery, stars or someone loved. It slows the pace of a sentence.',
  },
  'Through the keyhole the child ⟨looked⟩ secretly at the party inside.': {
    why: 'Peered means looked hard at something that is difficult to see. The child is looking secretly through a keyhole, which is awkward, so peered fits.',
    not: {
      announced:
        'Announced means told people something. It is a speaking word, not a looking word.',
      marched: 'Marched means walked with firm steps. It is a walking word, not a looking word.',
      shouted:
        'Shouted means spoke loudly. It is a speaking word, and a secret watcher would stay silent.',
    },
    more: 'Peer, peek and peep are close in meaning. Peer suggests effort to see, while peek and peep suggest a quick or secret look.',
    tip: 'Use peered when seeing is hard, for example through fog, a keyhole or a dirty window. The verb then shows the obstacle without an extra sentence.',
  },
  'The detective gave a ⟨small⟩ nod, barely moving his head.': {
    why: 'Slight means small in degree or amount. The detective barely moves his head, so the nod is tiny, and slight says that exactly.',
    not: {
      enormous: 'Enormous means extremely large. A nod that barely moves the head is the opposite.',
      generous:
        'Generous can mean large in amount, as in a generous helping. A barely noticeable nod is not large.',
      lengthy:
        'Lengthy means long, usually of time or of writing. It does not describe how small a movement is.',
    },
    more: 'Slight can describe any small amount: a slight cough, a slight delay, a slight chance. With people it can also mean thin and light, as in a slight build.',
    tip: "Small actions can show a character's personality. A slight nod from a detective suggests self-control and secrecy.",
  },
  'It was a ⟨small⟩ cottage, just big enough for one person.': {
    why: 'Compact means small but neatly arranged, with no space wasted. The cottage is just big enough for one person, so it is small and efficient, and compact describes it well.',
    not: {
      vast: 'Vast means extremely large. A cottage for one person is not vast.',
      towering: 'Towering means very tall. A tiny cottage is not high.',
      broad: 'Broad means wide. A cottage just big enough for one person is small, not wide.',
    },
    more: "Compact sounds positive because it suggests good planning. Cramped sounds negative. Cosy, tiny and snug are other 'small' words for homes, and each carries its own feeling.",
    tip: 'Choose small-size words for their feeling. Compact and snug are positive, while cramped and poky are negative. Pick the one that matches the mood you want.',
  },
  'After the storm the sea became ⟨calm⟩ and perfectly still.': {
    why: 'Serene means calm, peaceful and untroubled. After the storm the sea is calm and perfectly still, so serene gives a feeling of peace as well as lack of movement.',
    not: {
      frantic: 'Frantic means wild and rushed. The sea is perfectly still.',
      turbulent:
        'Turbulent means rough and violent. That describes the sea during the storm, not after it.',
      stormy: 'Stormy means full of storms or wild weather. The storm has passed.',
    },
    more: "'After the storm' sets up a contrast between before and after. Serene is often used for water, skies and faces because it suggests both stillness and peace.",
    tip: 'Use contrast to show change, such as a stormy sea becoming a serene one. Put the strong word and the calm word close together for effect.',
  },
  'He stayed ⟨calm⟩ even as the alarm blared and people panicked.': {
    why: 'Composed means calm and in control of your feelings. He stays calm while the alarm blares and people panic, so composed describes someone steady under pressure.',
    not: {
      hysterical:
        'Hysterical means out of control with fear or excitement. That is how the panicking people behave, not him.',
      restless: 'Restless means unable to keep still or settle. It does not show calm control.',
      anxious: 'Anxious means worried and nervous. He stays calm, so he is not anxious.',
    },
    more: 'Composed comes from compose, which can mean to settle or arrange. A composed person has put their feelings in order. Poised and unflustered also describe calm in a crisis.',
    tip: "A calm character stands out when everyone else panics. Use that contrast, as this sentence does, to show a character's strength.",
  },
  'The old man told a ⟨funny⟩ story that had everyone roaring with laughter.': {
    why: "Hilarious means extremely funny. The story had everyone roaring with laughter, so the word must mean very funny, and hilarious is much stronger than 'funny'.",
    not: {
      tragic:
        'Tragic means extremely sad, often with a terrible ending. People roaring with laughter are not hearing a sad story.',
      tedious: 'Tedious means boring and tiring. It would not make people roar with laughter.',
      solemn:
        'Solemn means serious and without humour. It is the opposite of a story that makes everyone laugh.',
    },
    more: 'Funny has two meanings: amusing, and strange. Hilarious only ever means very amusing, so it is clearer. Side-splitting is another strong word for humour.',
    tip: "Back up a strong humour word with a reaction, as the writer does with 'roaring with laughter'. The reaction proves the story was hilarious.",
  },
  'There was something ⟨funny⟩ about the locked room that did not feel right.': {
    why: "Here 'funny' means odd or suspicious, not amusing. Something about the locked room does not feel right, so strange is the best match for that meaning.",
    not: {
      amusing:
        'Amusing means entertaining or making you smile. The locked room feels wrong, not entertaining.',
      comical: 'Comical means funny in a silly way. The sentence is uneasy, not silly.',
      witty:
        'Witty means clever and funny in speech or writing. It does not fit a room that feels wrong.',
    },
    more: "'Funny' has two meanings. People sometimes say 'funny ha-ha' for amusing and 'funny peculiar' for odd. The clue 'did not feel right' shows which one is meant here.",
    tip: "In reading, use the words around a word to decide its meaning. Clues such as 'locked' and 'did not feel right' signal unease, not humour.",
  },
  'She felt ⟨scared⟩ as the floorboards creaked in the empty house.': {
    why: 'Uneasy means worried and uncomfortable, with a feeling that something is wrong. Creaking floorboards in an empty house create a low, creeping fear, so uneasy fits it well.',
    not: {
      cheerful:
        'Cheerful means happy and bright. It does not suit creaking floorboards in an empty house.',
      curious:
        "Curious means wanting to find something out. It is not a kind of fear, and the word has to replace 'scared'.",
      bored: 'Bored means uninterested. It is not a kind of fear either.',
    },
    more: 'Fear comes in strengths: uneasy and nervous are mild, afraid and frightened are middle, and terrified and petrified are strong. Quiet sounds in an empty place suit the mild end, which builds suspense.',
    tip: 'In suspense writing, start with a mild fear word and build up. Uneasy, then frightened, then terrified makes the tension rise.',
  },
  'When the lion roared, the visitors were ⟨scared⟩ and ran for the exit.': {
    why: 'Terrified means extremely frightened. When the lion roars, the visitors are so scared that they run for the exit, so the word must show strong fear, and terrified does.',
    not: {
      amused:
        'Amused means finding something funny. People running for the exit are not enjoying themselves.',
      relaxed: 'Relaxed means calm and at ease. Running away shows the opposite.',
      delighted: 'Delighted means very pleased. It does not match people fleeing in fear.',
    },
    more: 'Terrified comes from terror, meaning extreme fear. Petrified, horrified and panic-stricken are other strong fear words. Petrified can mean frozen with fear, while terrified can send you running, as it does here.',
    tip: "A reaction can show how strong a feeling is. Running for the exit shows that 'terrified' is the right word.",
  },
  'The runner was ⟨tired⟩ and collapsed onto the grass at the finish line.': {
    why: "Exhausted means completely worn out, with no energy left. The runner collapses onto the grass at the finish line, which shows total tiredness, so exhausted is stronger than 'tired'.",
    not: {
      refreshed:
        'Refreshed means full of new energy after a rest. A runner who collapses is the opposite.',
      eager:
        'Eager means keen and impatient to do something. It does not describe someone with no energy left.',
      lively: 'Lively means full of energy. A runner who collapses has none.',
    },
    more: 'Tired has levels: sleepy, weary, drained, exhausted. Exhausted is the top level. It comes from exhaust, meaning to use something up completely, so the runner has used up all their energy.',
    tip: "Show tiredness with an action, such as collapsing, then name it. The action gives the evidence and 'exhausted' gives the exact label.",
  },
  'After a poor night’s sleep she felt a little ⟨tired⟩ but carried on.': {
    why: "Weary means tired in a worn-down way, often from long effort. After a poor night's sleep she feels a little tired but carries on, so weary suits a mild, lingering tiredness.",
    not: {
      energetic: 'Energetic means full of energy. She is tired, so energetic is the opposite.',
      thrilled: "Thrilled means very excited and pleased. It does not suit a poor night's sleep.",
      alert:
        'Alert means awake and ready to react. A tired person after a bad night is not usually alert.',
    },
    more: 'Weary suggests a long, steady tiredness, while exhausted suggests running out of energy completely. Weary can also describe looks and feelings, such as a weary sigh or a weary smile.',
    tip: "Put weary before a small action, such as 'a weary nod', to show tiredness through a detail.",
  },
  'The teacher gave a ⟨clear⟩ explanation that even beginners understood at once.': {
    why: 'Lucid means expressed so clearly that it is easy to understand. Even beginners understood the explanation at once, so lucid is the exact word for it.',
    not: {
      murky:
        'Murky means dark, cloudy or unclear. That is the opposite of an explanation beginners understood at once.',
      vague: 'Vague means not clear or not exact. Beginners understood at once, so it was clear.',
      confusing: 'Confusing means hard to follow. This explanation was easy to follow.',
    },
    more: "'Clear' has several meanings: easy to understand (lucid), able to be seen through (transparent), and obvious (evident). A precise word tells the reader which meaning you intend.",
    tip: "Use lucid to praise writing or speaking that explains well. In an exam answer you could write: 'The writer gives a lucid account of events.'",
  },
  'Through the ⟨clear⟩ water you could see every pebble on the riverbed.': {
    why: "Transparent means clear enough to see through. You can see every pebble on the riverbed through the water, so transparent is the right sense of 'clear'.",
    not: {
      cloudy:
        'Cloudy means not clear, with a milky or misty look. You could not see every pebble through cloudy water.',
      obvious:
        'Obvious means easy to see or understand. It describes a fact or a mistake, not water.',
      logical: 'Logical means following sensible reasoning. It describes arguments, not water.',
    },
    more: 'Transparent has a second meaning: honest and open, as in transparent rules. Translucent is different, because it lets light through but not a clear picture. Frosted glass is translucent.',
    tip: "Choose the sense of 'clear' by the noun it describes. Water or glass is transparent, an explanation is lucid and a fact is obvious.",
  },
  'It was a ⟨cold⟩ winter morning and ice coated every window.': {
    why: 'Frosty means so cold that frost forms. Ice coats every window on a winter morning, which shows freezing temperatures, so frosty fits.',
    not: {
      mild: 'Mild means gentle or not harsh. Ice on the windows shows the weather is not mild.',
      warm: 'Warm means pleasantly heated, not cold. Ice would not form in warm weather.',
      tepid:
        'Tepid means only slightly warm, usually of a liquid. It would not leave ice on every window.',
    },
    more: 'Frosty also has a second meaning: cold and unfriendly, as in a frosty welcome. Words for temperature often describe feelings in the same way. That is a metaphor.',
    tip: 'Use a weather word to set the mood in a story. A frosty morning can prepare for a cold, tense scene before any character speaks.',
  },
  'Her ⟨cold⟩ reply made it clear the friendship was over.': {
    why: "Here 'cold' describes a person's manner: unfriendly and showing no feeling. An icy reply is hard and chilling, and it makes the end of the friendship clear.",
    not: {
      fiery:
        'Fiery means hot-tempered or full of passion. A fiery reply is angry and loud, not cold and distant.',
      warm: 'Warm means friendly and caring. It is the opposite of cold, so it cannot be a synonym for it.',
      gentle:
        'Gentle means soft and kind. A cold reply is hard and distant, so gentle does not mean the same.',
    },
    more: 'Words for temperature often describe feelings. Icy, frosty and chilly can all describe an unfriendly manner, and warm can describe kindness. This is a metaphor: feelings are described as if they were weather.',
    tip: 'Use a temperature word to show how one character treats another. Icy shows distance and held-back anger, while fiery shows anger let loose.',
  },
}
