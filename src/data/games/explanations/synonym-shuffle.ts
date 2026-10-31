import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Synonym Shuffle: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/synonym-shuffle.ts). Written with AI on 16 October
 * 2026 and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 200 questions, 192 of them new, each
 * with why, a why-not for every wrong option, more and tip; the eight kept were
 * re-explained for their new options, and fifteen real lines from books out of
 * UK copyright are explained with their context. Written with AI and checked
 * against each question, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'Across the noisy playground, Mr Hale ⟨said⟩ that the bell had already gone.': {
    why: 'Bellowed means shouted in a deep, loud voice. Mr Hale is speaking across a noisy playground, so his voice has to carry over all that noise, and only a loud way of speaking can do it.',
    not: {
      whispered:
        'Whispered means spoke using only breath, so quietly that only someone close by hears. Nobody across a noisy playground would catch a word.',
      murmured:
        'Murmured means spoke softly and steadily in a low voice. The noise of the playground would drown it.',
      mumbled:
        'Mumbled means spoke unclearly, with the words running together. Across a noisy playground the message would be lost.',
    },
    more: "Speech verbs tell the reader how loud the words were, so you need no extra adverb. A loud verb in a noisy place also shows the speaker's effort to be heard.",
    tip: "When a setting is noisy or vast, choose a speech verb that shows the effort of being heard. It saves you writing 'said very loudly'.",
  },
  "'Please let me stay up for the fireworks,' Ruby ⟨said⟩, clasping her hands together.": {
    why: 'Begged means asked for something desperately, as a favour. Ruby says please and clasps her hands together, the gesture of someone pleading, so she is asking as hard as she can for something she wants.',
    not: {
      ordered:
        'Ordered means told someone to do something, using authority. Ruby has no authority here: she says please and asks permission.',
      boasted:
        'Boasted means talked proudly about yourself. Ruby is asking for something, not showing off.',
      joked:
        'Joked means said something to be funny. Clasped hands and a please show she means it seriously.',
    },
    more: 'Asking verbs come in strengths. Asking politely is calm; begging is desperate and emotional; demanding is forceful. The words and gestures around the speech show which one fits.',
    tip: "Body language can do half the work. 'Clasping her hands' shows the reader how Ruby feels before the speech verb even names it.",
  },
  "'Fine, it was me who ate the last slice,' Tom ⟨said⟩, his ears turning pink.": {
    why: "Admitted means agreed, often unwillingly, that something you did is true. 'Fine, it was me' shows Tom giving in at last, and his ears turning pink show embarrassment, so he is owning up.",
    not: {
      boasted:
        "Boasted means spoke proudly about something you did. Tom is embarrassed, not proud: 'Fine' shows he is giving in.",
      insisted:
        'Insisted means said something firmly, refusing to back down. Tom is backing down: he finally owns up.',
      explained:
        'Explained means gave reasons to make something clear. Tom gives no reason for eating the slice; he only owns up to it.',
    },
    more: "Owning up often follows a denial or a silence: the speaker gives in. A word like 'Fine' at the start of a speech is a clue that someone has stopped resisting.",
    tip: "Show how a character feels as they speak with one physical detail, like Tom's pink ears. The verb and the detail together tell the reader more than either alone.",
  },
  "'I scored the winner, and with my weaker foot,' Jake ⟨said⟩ to anyone who would listen.": {
    why: "Bragged means talked too proudly about yourself to impress people. Jake repeats his own success 'to anyone who would listen', which shows he wants everyone to admire him.",
    not: {
      confessed:
        'Confessed means admitted something you were ashamed of. Scoring the winner is nothing to be ashamed of.',
      grumbled:
        'Grumbled means complained in a bad-tempered way. Jake is delighted with himself, not complaining.',
      whispered:
        "Whispered means spoke very softly so that few could hear. Telling 'anyone who would listen' means spreading the news as widely as possible.",
    },
    more: 'Bragged carries disapproval: it suggests the speaker is showing off and is tiresome to listen to. A writer who uses it is quietly judging the character for the reader.',
    tip: "In an analysis, notice when a speech verb judges the speaker. A verb like this shows the narrator's attitude, which you can comment on.",
  },
  "'If you touch that wire, the fence will give you a shock,' the farmer ⟨said⟩.": {
    why: 'Warned means told someone about a danger so they can avoid it. The farmer tells the listener what will happen if they touch the wire, to keep them safe, so the speech is a warning.',
    not: {
      threatened:
        'Threatened means said you would harm someone. The farmer will not harm anyone; he is pointing out a danger the fence itself holds.',
      promised:
        'Promised means said you would certainly do something, usually something good. A shock is not something the farmer offers to give.',
      suggested:
        'Suggested means offered an idea for someone to consider. The farmer is not offering a choice; he is pointing out a danger.',
    },
    more: 'A warning and a threat can sound alike. The difference is who causes the harm: a warning points to a danger, while a threat says the speaker will cause it.',
    tip: 'Before choosing a speech verb, ask what the words are for: to inform, to persuade, to frighten or to protect. The purpose decides the verb.',
  },
  "'I'll pay you back on Friday, every penny,' Leon ⟨said⟩, shaking his friend's hand.": {
    why: "Vowed means promised solemnly that you would do something. Leon names a day and says 'every penny', then shakes hands on it, the way people seal an agreement, so he is giving his word.",
    not: {
      hinted:
        'Hinted means suggested something without saying it directly. Leon says it directly, down to the day and the amount.',
      grumbled:
        "Grumbled means complained in a bad mood. Nothing in Leon's words or handshake is a complaint.",
      joked: 'Joked means said something to be funny. The handshake shows he means it.',
    },
    more: 'A vow looks to the future: the speaker commits to something they will do. Verbs that look back at the past, such as owning up or saying sorry, do a different job.',
    tip: "Speech verbs can carry a character's honesty. A vow kept or broken later can become a key moment in a story.",
  },
  "'We could build the den behind the shed, where nobody would see it,' Kofi ⟨said⟩.": {
    why: "Suggested means put forward an idea for others to think about. Kofi says 'we could', which offers a possible plan rather than a firm decision, so he is making a suggestion.",
    not: {
      insisted:
        "Insisted means said something firmly and would not give way. 'We could' is gentle and open, the opposite of insisting.",
      demanded:
        'Demanded means asked for something forcefully, as if it were owed. Kofi is offering an idea, not making a demand.',
      confessed:
        'Confessed means admitted something you were ashamed of. Kofi is planning, not owning up to anything.',
    },
    more: 'Small words such as could, might and perhaps make speech tentative, which means unsure or open. Must, will and now make it forceful. Spotting them helps you choose the right speech verb.',
    tip: "Read the speech itself for clues. Modal verbs like 'could' tell you how strongly a character means what they say.",
  },
  "'W-w-what was that noise?' Ella ⟨said⟩, pulling the duvet over her head.": {
    why: "Stammered means spoke with sudden stops and repeated sounds, often from fear or nerves. The repeated 'w' in 'W-w-what' shows Ella's voice catching, and hiding under the duvet shows she is frightened.",
    not: {
      drawled:
        "Drawled means spoke slowly and lazily, stretching the vowels. A frightened child's broken words are not slow and relaxed.",
      chanted:
        'Chanted means said words over and over in a rhythm, as a crowd does. Ella asks one frightened question.',
      proclaimed:
        'Proclaimed means announced something publicly and proudly. Ella is hiding under her duvet, not making a public statement.',
    },
    more: "Writers can show a stammer through the spelling of the speech itself, as 'W-w-what' does. The speech verb then confirms what the reader has already heard.",
    tip: 'Use broken words in speech sparingly: once is enough to show fear. Overusing it makes dialogue hard to read.',
  },
  "'Is it far to the station?' the tourist ⟨said⟩, holding out a crumpled map.": {
    why: "Enquired means asked for information. The tourist's words are a question about the way to the station, and holding out a map shows he needs directions, so he is asking.",
    not: {
      replied:
        'Replied means answered something someone else said. The tourist starts the conversation with a question, so nothing is being answered.',
      explained:
        'Explained means made something clear by giving details. The tourist is the one who needs things made clear.',
      argued:
        'Argued means gave reasons in a disagreement. A polite question about directions is not an argument.',
    },
    more: 'In British English, enquire is the usual spelling for simply asking, and inquire is often kept for a formal investigation, such as a public inquiry.',
    tip: 'Use a question verb only for a question. If the speech ends in a question mark, said can usually be upgraded to a verb of asking.',
  },
  "'Don't worry, the stitches come out next week,' the nurse ⟨told⟩ the boy.": {
    why: "Reassured means said something to take away someone's worry. The nurse begins with 'Don't worry' and gives good news about the stitches, so her words are meant to calm the boy's fears.",
    not: {
      cautioned:
        'Cautioned means warned someone to be careful. The nurse is not pointing out a danger; she is giving good news.',
      instructed:
        'Instructed means told someone what to do. The nurse gives the boy no task; she tells him not to worry.',
      scolded: "Scolded means told someone off angrily. 'Don't worry' is kind, not angry.",
    },
    more: 'Reassure is built from re-, meaning again: to reassure someone is to make them feel safe again. It is what doctors, parents and friends do when someone is frightened.',
    tip: "A speech verb can show a character's kindness. This one tells the reader the nurse cares about the boy's feelings, not just his stitches.",
  },
  "'Oh, brilliant, another flat tyre,' Dad ⟨said⟩, kicking the wheel.": {
    why: "Grumbled means complained in a bad-tempered way. Dad calls a flat tyre 'brilliant', but kicking the wheel shows he means the opposite: the word is sarcastic, so he is complaining.",
    not: {
      enthused:
        "Enthused means spoke with excitement. It takes 'brilliant' at face value, but nobody is excited about a flat tyre, and the kick shows anger.",
      chuckled: 'Chuckled means laughed quietly. Kicking the wheel shows annoyance, not amusement.',
      announced:
        'Announced means told people news formally. Dad is not informing anyone; he is complaining to himself.',
    },
    more: 'Sarcasm says the opposite of what is meant, usually to mock or to complain. The clue is a mismatch: praise for something bad, or an action that contradicts the words.',
    tip: "When a character's words and actions disagree, trust the actions. In an exam answer, point out the mismatch and say what it shows about their mood.",
  },
  "'Everyone line up by the door,' Miss Begum ⟨said⟩, and the whole class stood at once.": {
    why: 'Instructed means told someone what to do. Miss Begum gives the class a direct command, and they obey at once, which shows they understood her words as an instruction, not an option.',
    not: {
      suggested:
        'Suggested means offered an idea people could choose to follow. A class standing at once shows they had no choice.',
      recommended:
        'Recommended means advised something as a good idea. Miss Begum is not giving advice; she is telling them what to do.',
      pleaded:
        'Pleaded means begged desperately. A teacher whose class obeys at once has no need to beg.',
    },
    more: "Commands are often in the imperative: the verb comes first with no subject, as in 'line up'. A speech verb for a command matches that grammar.",
    tip: "Look at the form of the speech. An imperative ('Sit down') is a command, a question needs an asking verb, and 'could' or 'might' signal an idea being offered.",
  },
  "'I really am sorry about your bike; I should never have borrowed it,' Sam ⟨said⟩.": {
    why: "Apologised means said sorry for something you did wrong. Sam takes the blame himself, 'I should never have borrowed it', so his 'sorry' is an apology, not just sympathy.",
    not: {
      sympathised:
        "Sympathised means said you felt sorry about someone else's bad luck. Sam is sorry for his own mistake, which makes it an apology.",
      protested:
        'Protested means objected strongly to something. Sam is taking the blame, not objecting.',
      explained:
        'Explained means made something clear by giving reasons or details. Sam is saying sorry, not giving reasons for what happened.',
    },
    more: "'Sorry' has two jobs in English. 'I'm sorry I broke it' takes the blame; 'I'm sorry your cat is ill' shares someone's sadness. Who caused the problem decides which.",
    tip: 'When you write dialogue, the reader should be able to tell from the words alone what a speaker is doing. The speech verb then sharpens it.',
  },
  "'You haven't fed the cat, you haven't tidied up, and you're still in your pyjamas,' Mum ⟨said⟩, hands on her hips.":
    {
      why: 'Scolded means told someone off angrily for something they did wrong. Mum lists three jobs not done, one after another, with her hands on her hips, which builds into a telling-off.',
      not: {
        praised:
          "Praised means spoke with approval. Every item in Mum's list is something not done, so there is nothing to approve of.",
        consoled:
          'Consoled means comforted someone who was sad. Mum is pointing out failings, not comforting anyone.',
        teased:
          'Teased means made fun of someone playfully. A list of jobs left undone, said with hands on hips, shows real annoyance.',
      },
      more: "Repetition in speech, as in 'you haven't... you haven't...', often shows a speaker's rising irritation. The list builds like a drumbeat.",
      tip: "In your own writing, a list of complaints in a character's speech can show anger without any angry adverb.",
    },
  "'Mmm, five more minutes,' Grandad ⟨said⟩ from deep in his armchair, eyes still shut.": {
    why: 'Murmured means said something softly in a low, unclear voice. Grandad is still half asleep, eyes shut, deep in his armchair, so his words come out soft and drowsy.',
    not: {
      bellowed:
        'Bellowed means shouted in a deep, loud voice. Someone with their eyes still shut, sinking into an armchair, is not shouting.',
      declared:
        'Declared means stated something firmly and clearly, often to an audience. Sleepy words from an armchair are not a firm statement.',
      snapped:
        'Snapped means said something suddenly and crossly. Nothing suggests Grandad is annoyed; he is simply sleepy.',
    },
    more: "Soft speech verbs suit drowsy, gentle or private moments. The verb's sound can help too: this one is full of soft m sounds.",
    tip: "Match the speech verb to the speaker's state as well as their words. A sleepy, ill or worn-out character rarely speaks crisply.",
  },
  'Lena ⟨looked⟩ at the menu board, unable to read it without her glasses.': {
    why: 'Squinted means looked with the eyes partly closed, to see better. Lena cannot read the board without her glasses, so she narrows her eyes to try to bring the words into focus.',
    not: {
      glowered:
        'Glowered means stared angrily. Lena is struggling to read, not cross with the menu.',
      gazed:
        'Gazed means looked steadily for a long time, often dreamily. Lena is straining to see, not lost in thought.',
      glanced:
        'Glanced means looked quickly and briefly. Lena is making an effort to read, which takes more than a quick look.',
    },
    more: 'People also narrow their eyes in bright light. Looking verbs often show the reason for looking: effort, anger, love, curiosity or secrecy.',
    tip: "A precise looking verb can show a character's problem without explaining it. This one tells the reader Lena cannot see well.",
  },
  'Without breaking her stride, Aisha ⟨looked⟩ at her watch and kept running for the bus.': {
    why: 'Glanced means looked quickly, for a moment. Aisha does not break her stride and keeps running, so there is only time for the briefest look at her watch.',
    not: {
      gazed:
        'Gazed means looked steadily for a long time. You cannot hold a long, steady look at a watch while running for a bus.',
      stared:
        'Stared means looked fixedly for a long time. Aisha keeps running, so she cannot fix her eyes on her watch.',
      goggled:
        'Goggled means stared with wide, amazed eyes. There is nothing amazing about the time, and no time to stare.',
    },
    more: "Looking verbs differ most in how long the look lasts. A quick look and a long one tell the reader very different things about a character's mood and situation.",
    tip: 'Check what else the character is doing. Someone running, driving or fighting can only manage a brief look.',
  },
  'For a whole hour the old sailor ⟨looked⟩ out at the horizon, as if waiting for a ship that would never come.':
    {
      why: 'Gazed means looked steadily for a long time, often lost in thought or longing. The sailor looks for an hour, as if waiting for a ship that will never come, so his look is long and full of longing.',
      not: {
        glanced: 'Glanced means looked quickly. An hour is the opposite of a quick look.',
        glared: 'Glared means stared angrily. The sailor is waiting and hoping, not angry.',
        peeped:
          'Peeped means looked quickly and secretly, as through a gap. The sailor looks openly, and for a long time.',
      },
      more: "A long, steady look often carries feeling: love, longing, wonder or sadness. A writer can use it to slow a scene down and show a character's inner life.",
      tip: "In descriptive writing, a long look can suggest memory or regret. Pair it with what the character is thinking, as 'as if waiting for a ship' does.",
    },
  'Before signing, Grandad ⟨looked at⟩ every line of the contract, his finger moving word by word.':
    {
      why: 'Studied means looked at something carefully and in detail. Grandad reads every line before signing, his finger moving word by word, which is slow, close attention.',
      not: {
        skimmed:
          'Skimmed means read quickly to get the general idea. Moving word by word is the opposite of skimming.',
        surveyed:
          'Surveyed means looked over the whole of something, often a wide view. Grandad goes through it line by line, not taking in the whole at once.',
        glimpsed:
          'Glimpsed means saw something only briefly or partly. Grandad looks at every word, so his look is neither brief nor partial.',
      },
      more: 'There are two kinds of reading: slow and close, for detail, and quick, for the general idea. Choosing the right verb shows the reader which a character is doing, and why.',
      tip: 'In the exam, read the question slowly and closely, but read a long extract quickly first to get its shape.',
    },
  'From the top of the castle tower, the queen ⟨looked at⟩ her lands stretching to the distant hills.':
    {
      why: 'Surveyed means looked over the whole of a wide area, usually from a high place. The queen stands at the top of a tower, taking in her lands all the way to the distant hills.',
      not: {
        scrutinised:
          'Scrutinised means examined something very closely, detail by detail. Lands stretching to distant hills are too far away for close study.',
        inspected:
          'Inspected means checked something carefully for faults, close up. The queen is too high and too far away to inspect anything.',
        eyed: 'Eyed means watched something with interest or suspicion. The queen is taking in a whole view, not watching one thing.',
      },
      more: 'Survey comes from an old French word meaning to look over from above. People who measure land for maps are still called surveyors.',
      tip: 'A looking verb can show power. A ruler taking in her lands from a tower seems in control of everything she sees.',
    },
  'When the whale burst out of the water beside the boat, the tourists ⟨looked⟩, their cameras forgotten in their hands.':
    {
      why: 'Gaped means stared with the mouth open in amazement. A whale bursting out of the water beside the boat is astonishing, and the tourists forget even their cameras, which shows how amazed they are.',
      not: {
        glanced:
          'Glanced means looked quickly and briefly. People who forget their cameras are too amazed to look away.',
        peeped:
          'Peeped means looked quickly and secretly. The tourists are in plain view, looking openly.',
        glowered:
          'Glowered means stared angrily. A whale leaping beside a boat causes wonder, not anger.',
      },
      more: 'Some looking verbs describe the whole face as well as the eyes. This one comes from the open mouth of surprise, as in a gaping hole.',
      tip: "Show amazement through what a character forgets to do. 'Their cameras forgotten' does more than the word 'amazed' could.",
    },
  "Hidden behind the curtain, Jack ⟨looked⟩ out at the guests arriving for his sister's birthday.":
    {
      why: 'Peeped means looked quickly and secretly, often through a small gap. Jack is hidden behind a curtain, so he is stealing looks at the guests without being seen.',
      not: {
        glared:
          'Glared means stared angrily. Nothing suggests Jack is angry with the guests; he is curious and hiding.',
        squinted:
          'Squinted means looked with narrowed eyes, to see better. Nothing suggests the light or his eyesight is a problem; the point is that he is hidden.',
        gaped:
          'Gaped means stared open-mouthed in amazement. Guests arriving for a birthday are not astonishing.',
      },
      more: 'Peep has another meaning as well: to make a small, high sound, as a chick does. Both senses suggest something small and quick.',
      tip: 'Secret looking builds tension or comedy. A character who hides and watches knows something others do not, and the reader shares the secret.',
    },
  'Mr Okafor gave the joker a ⟨hard⟩ look, and he shrank into his seat.': {
    why: 'A withering look is one so scornful that it makes the person feel small and ashamed. The joker shrinks into his seat, which shows the look crushed his confidence, exactly the effect withering describes.',
    not: {
      sideways:
        'A sideways look comes from the corner of the eye, often sly or suspicious. It would not make a joker shrink with shame.',
      fleeting:
        'A fleeting look lasts only a moment. Too quick to notice, it could hardly make anyone shrink.',
      steady:
        'A steady look is calm and unwavering. It shows patience, not the scorn that makes someone shrink.',
    },
    more: 'Withering comes from plants drying up and shrivelling. A withering look seems to make its target shrivel too, which is why it suits someone shrinking into a seat.',
    tip: 'Judge a look by its effect. If a character shrinks, blushes or falls silent, choose a word for the look that explains that reaction.',
  },
  'The new boy kept ⟨looking at⟩ the last cake on the plate, waiting for someone else to say no.': {
    why: 'Eyeing means looking at something closely, usually because you want it. The boy keeps looking at the last cake while waiting for everyone else to say no, which shows he hopes to have it.',
    not: {
      admiring:
        'Admiring means looking at something with pleasure because it is beautiful or impressive. The boy wants to eat the cake, not admire it.',
      surveying:
        "Surveying means looking over a whole scene or a wide area. The boy's eyes are fixed on one cake.",
      scanning:
        'Scanning means looking quickly over many things to find one. The boy has already found what he wants.',
    },
    more: "To eye something often hints at wanting it, or at suspicion, as in 'she eyed the stranger warily'. The context decides which.",
    tip: 'Looking verbs can reveal desire without stating it. A reader who sees a character watching the last cake knows exactly what they want.',
  },
  'The guard ⟨looked at⟩ my passport for a long minute, checking the photo against my face as if I might be a spy.':
    {
      why: 'Examined means looked at something carefully to check or test it. The guard spends a long minute comparing the photo with the face, as if searching for proof that something is wrong.',
      not: {
        glimpsed:
          'Glimpsed means saw something only briefly. A long minute of checking is far more than a glimpse.',
        skimmed:
          'Skimmed means read quickly for the general idea. The guard is checking details, not reading fast.',
        admired:
          'Admired means looked at with pleasure or approval. The guard is suspicious, not impressed.',
      },
      more: "Time can show suspicion. 'A long minute' at a passport tells the reader the guard is not satisfied, without saying so.",
      tip: "A suspicious look raises tension. In a story, let the reader feel the narrator's nerves while being checked.",
    },
  'With a heavy rucksack and blisters on both feet, Tom ⟨walked⟩ up the last hill.': {
    why: 'Trudged means walked slowly and heavily, as if every step were hard work. A heavy rucksack, blistered feet and a hill at the end of a long walk all make each step an effort.',
    not: {
      skipped:
        'Skipped means moved along with little hops, usually from happiness. Nobody skips with blisters and a heavy load.',
      strolled:
        'Strolled means walked in a slow, relaxed way, for pleasure. Tom is struggling, not relaxing.',
      pranced:
        'Pranced means moved with high, springy steps, often showing off. Blisters and a heavy rucksack make that impossible.',
    },
    more: "Movement verbs show a character's energy and mood. Heavy, slow verbs suggest tiredness or sadness; light, quick ones suggest joy.",
    tip: "Let the verb carry the effort. One precise verb does the work of 'walked slowly and tiredly up the hill' in fewer words.",
  },
  'On a sunny Sunday afternoon, the couple ⟨walked⟩ along the seafront, stopping for ice creams.': {
    why: 'Strolled means walked slowly and happily, for pleasure. A sunny Sunday, the seafront and stops for ice creams all show a couple in no hurry, enjoying themselves.',
    not: {
      trudged:
        'Trudged means walked slowly and wearily. Nothing in the scene is tiring or unpleasant.',
      marched:
        'Marched means walked with firm, regular steps, like a soldier. A relaxed walk with ice creams is not a march.',
      scurried:
        'Scurried means moved with quick, short steps, like a mouse. The couple are in no hurry.',
    },
    more: 'Leisurely movement verbs slow a scene down and suggest calm or contentment. They suit holidays, Sundays and happy endings.',
    tip: 'Use the setting as evidence. A sunny seafront and ice creams back up a relaxed verb.',
  },
  'Late for her interview, Nadia ⟨walked⟩ across the car park, her bag swinging at her side.': {
    why: 'Hurried means moved quickly because there was little time. Nadia is late for an interview, so she must move as fast as she can.',
    not: {
      sauntered:
        'Sauntered means walked in a slow, relaxed way. Someone late for an interview cannot afford to be relaxed.',
      tiptoed: 'Tiptoed means walked quietly on the toes. Nadia needs speed, not silence.',
      staggered:
        'Staggered means walked unsteadily, almost falling. Nothing suggests Nadia is unsteady; she is in a rush.',
    },
    more: 'Time pressure in a story calls for quick movement verbs. A small detail, such as a swinging bag, adds to the picture of speed.',
    tip: "Give a reason for a character's speed. 'Late for her interview' makes the reader feel the rush.",
  },
  'Trying not to wake his parents, Ben ⟨walked⟩ down the creaky stairs.': {
    why: 'Tiptoed means walked quietly on the tips of the toes. Ben is trying not to wake his parents on stairs that creak, so every step must be as quiet as possible.',
    not: {
      stomped: 'Stomped means walked with heavy, noisy steps. That would wake the whole house.',
      strode:
        'Strode means walked with long, confident steps. Ben is moving carefully, not marching boldly.',
      thundered:
        'Thundered means moved very loudly and heavily. That is the opposite of trying not to wake anyone.',
    },
    more: 'Quiet movement verbs often build tension: the reader waits for the noise that will give the character away.',
    tip: 'Creaky stairs and sleeping parents are a classic tension builder. Use a quiet verb, then a sudden sound, to make the reader jump.',
  },
  'After spinning round twenty times, the children ⟨walked⟩ across the grass, giggling and falling over.':
    {
      why: 'Staggered means walked unsteadily, almost falling. After spinning round twenty times the children are dizzy, so they lurch about and fall over.',
      not: {
        strolled:
          'Strolled means walked slowly and steadily for pleasure. Dizzy children falling over are not walking steadily.',
        marched:
          'Marched means walked with firm, regular steps. Dizziness makes steps anything but regular.',
        scampered:
          'Scampered means ran with quick, light steps. The children are wobbling and falling, not running nimbly.',
      },
      more: 'Unsteady movement verbs suit dizziness, injury, exhaustion or the deck of a moving ship.',
      tip: 'Show the cause first, then the effect. Spinning round twenty times explains the unsteady walk, so the reader believes it.',
    },
  'Having won the race again, Jamal ⟨walked⟩ past the other runners with his chin in the air.': {
    why: 'Strutted means walked in a proud, stiff way, showing off. Jamal has won again and holds his chin in the air as he passes the runners he beat, so he is parading his victory.',
    not: {
      trudged:
        'Trudged means walked slowly and wearily. A proud winner with his chin up is not weary.',
      shuffled:
        'Shuffled means walked slowly, dragging the feet. That shows tiredness or shyness, not pride.',
      tiptoed: 'Tiptoed means walked quietly to avoid being noticed. Jamal wants to be noticed.',
    },
    more: 'Strutting is how a cockerel walks, chest out and head high. Used of a person, the word carries disapproval: it suggests vanity, not just confidence.',
    tip: "A verb can show how a character wants to be seen. Strutting is a performance for others, which tells the reader about Jamal's pride.",
  },
  'Stiff after its long sleep, the old dog ⟨walked⟩ to its bowl.': {
    why: 'Hobbled means walked with difficulty, usually because of pain or stiffness. The old dog is stiff after its long sleep, so each step is awkward and slow.',
    not: {
      bounded: 'Bounded means moved with big, energetic leaps. A stiff old dog cannot leap.',
      scampered:
        'Scampered means ran with quick, light steps, like a playful puppy. Stiffness makes that impossible.',
      pranced: 'Pranced means moved with high, springy steps. A stiff dog barely lifts its feet.',
    },
    more: 'Age and injury have their own movement verbs. They create sympathy for the character, or animal, who moves that way.',
    tip: 'When you describe an animal, choose verbs that show its age and mood. An old dog and a puppy move in very different ways.',
  },
  'The lost tourists ⟨walked⟩ around the old town for hours, with no map and no plan.': {
    why: 'Wandered means walked around with no fixed direction or purpose. The tourists have no map and no plan, so they drift from street to street for hours.',
    not: {
      marched:
        'Marched means walked with firm, regular steps, as if going somewhere definite. Lost tourists have nowhere definite to go.',
      strode:
        'Strode means walked with long, confident steps. Being lost makes people unsure, not confident.',
      hastened:
        'Hastened means moved quickly because of hurry. Nothing suggests the tourists are rushing; they have hours to fill.',
    },
    more: 'Wander can describe the mind too: a wandering mind drifts from thought to thought, just as wandering feet drift from place to place.',
    tip: 'Aimless movement verbs suit dreamy, lost or bored characters. They can also slow a story down.',
  },
  'I motioned to him to take up the letter, while I ⟨walked⟩ up and down the room in the extremest agitation.':
    {
      why: "Paced means walked up and down again and again, usually from worry or impatience. Victor, the narrator, is in 'the extremest agitation' and cannot keep still, so he walks back and forth across the room.",
      not: {
        strolled:
          "Strolled means walked in a slow, relaxed way. 'The extremest agitation' is the opposite of relaxed.",
        tiptoed:
          'Tiptoed means walked quietly on the toes, trying not to be heard. Victor is not hiding; he is too upset to sit still.',
        limped:
          'Limped means walked unevenly because of an injury. Nothing suggests Victor is hurt; his trouble is in his mind.',
      },
      more: 'Mary Shelley often shows feelings through movement. Walking back and forth is a sign of a troubled mind that cannot rest, which suits a narrator who has just read terrible news.',
      tip: "When writing about a character's feelings, look at the body: pacing, fidgeting or freezing can show what words leave out.",
    },
  'I ⟨walked⟩ about the isle like a restless spectre, separated from all it loved, and miserable in the separation.':
    {
      why: "Roamed means moved about with no fixed direction, often over a wide area. Victor drifts about the island 'like a restless spectre', a ghost that cannot settle, so his walking has no purpose or destination.",
      not: {
        marched:
          'Marched means walked with firm, regular steps towards somewhere. A restless ghost has nowhere to go.',
        strode:
          'Strode means walked with long, confident steps. Victor is miserable and lost, not confident.',
        strolled:
          "Strolled means walked slowly for pleasure. Victor is 'miserable', so his walking gives him no pleasure.",
      },
      more: "The simile 'like a restless spectre' turns Victor himself into a ghost: alive, but cut off from everyone he loves. The movement verb should share that lost, aimless quality.",
      tip: 'When a writer uses a simile, let it guide your reading of the words around it. Here the ghost comparison tells you how Victor moves.',
    },
  "When the shop's alarm went off, the thief ⟨ran⟩ out of the back door and into the night.": {
    why: 'Bolted means ran away suddenly and fast, usually in fear. The alarm sounds and the thief is gone at once through the back door, escaping before anyone can catch him.',
    not: {
      jogged:
        'Jogged means ran at a steady, gentle pace, as for exercise. A thief escaping an alarm runs as fast as he can.',
      trotted:
        'Trotted means ran with short, easy steps. Nothing about escaping from an alarm is easy or relaxed.',
      plodded: 'Plodded means walked slowly and heavily. That would get the thief caught.',
    },
    more: 'Bolt is used for horses that suddenly run off in fright, and for anyone who leaves in a hurry. It suggests a sudden start as well as speed.',
    tip: 'Speed verbs can show panic. A sudden escape verb tells the reader the thief was frightened as well as fast.',
  },
  'The mouse ⟨ran⟩ across the kitchen floor and vanished under the fridge.': {
    why: 'Scurried means moved with quick, short steps, as small animals do. A mouse dashing across the floor and vanishing under the fridge is small, fast and keen to hide.',
    not: {
      plodded:
        'Plodded means walked slowly and heavily. A mouse that vanishes in a moment is neither slow nor heavy.',
      lumbered:
        'Lumbered means moved heavily and clumsily, like a large animal. A mouse is tiny and quick.',
      strode:
        'Strode means walked with long, confident steps. A mouse has tiny legs and is hiding.',
    },
    more: "Movement verbs often match a creature's size: heavy, clumsy verbs for large animals, quick and light ones for small ones.",
    tip: 'In your writing, choose a verb that fits the size and character of the creature. It makes the picture sharper at once.',
  },
  'Drums beat as the soldiers ⟨walked⟩ through the town in their dress uniforms.': {
    why: 'Marched means walked with regular, rhythmic steps, as soldiers do. The drums beating and the uniforms show a parade, where soldiers step together in time.',
    not: {
      ambled:
        'Ambled means walked slowly and casually. A parade with drums is neither slow nor casual.',
      sauntered:
        'Sauntered means strolled in a relaxed, carefree way. Soldiers on parade keep strict order.',
      scurried:
        'Scurried means moved with quick, short steps, like a mouse. A parade moves in steady, even steps.',
    },
    more: "Marching keeps time with a beat, which is why armies used drums. The word can also describe anyone walking with determination, as in 'she marched into the office'.",
    tip: "Sound and movement can work together in description. The drumbeat and the soldiers' steps make one picture.",
  },
  'With seconds left on the clock, the winger ⟨ran⟩ the length of the pitch to score.': {
    why: 'Sprinted means ran as fast as possible over a short distance. With only seconds left, the winger must cover the whole pitch at top speed to score.',
    not: {
      jogged:
        'Jogged means ran at a slow, steady pace. With seconds left, a jog would be far too slow.',
      trotted: 'Trotted means ran with short, easy steps. Easy steps would not beat the clock.',
      meandered:
        'Meandered means moved slowly along a winding route. The winger needs the straightest, fastest line to goal.',
    },
    more: 'Sprinting is all-out speed that cannot last long, which is why short races, such as the hundred metres, are called sprints. A time limit in a sentence often calls for it.',
    tip: "Use time pressure as a clue. 'With seconds left' tells you the verb must be the fastest one.",
  },
  'The clerk promised that he would; and Scrooge ⟨walked⟩ out with a growl.': {
    why: "Stormed means went somewhere angrily and noisily. Scrooge leaves the office 'with a growl', the sound of an angry animal, so his exit is full of bad temper.",
    not: {
      tiptoed: 'Tiptoed means walked quietly on the toes. A growl is the opposite of quiet.',
      skipped:
        'Skipped means moved along with little hops from happiness. Scrooge is anything but happy.',
      strolled:
        'Strolled means walked in a slow, relaxed way. A growl shows he is irritated, not relaxed.',
    },
    more: "Dickens often compares Scrooge to animals and to cold things. 'A growl' makes him sound like a bad-tempered dog, warning others to keep away.",
    tip: "Look for the detail that carries the feeling. In 'with a growl', one noun shows Scrooge's whole mood.",
  },
  'The ⟨big⟩ suitcase would not fit in the overhead locker, so she had to check it in.': {
    why: 'Bulky means large and awkward to carry or fit in a space. The problem with the suitcase is that it will not fit in the locker, so the word must describe awkward size.',
    not: {
      sprawling:
        'Sprawling means spreading out untidily over a wide area, like a city. A suitcase does not spread out.',
      towering:
        'Towering means very tall. The locker problem is about overall size and shape, not height.',
      vast: 'Vast means covering a huge area, like a desert or ocean. No suitcase is that large.',
    },
    more: 'Size words differ by the kind of size they describe: height, area, weight or awkwardness. Ask which kind matters in the sentence before you choose.',
    tip: 'Before choosing a size word, ask what the size causes. Here it causes a problem with fitting, which points to awkward size.',
  },
  'Our new flat is ⟨big⟩ enough for a dining table, a sofa and a piano.': {
    why: 'Spacious means having plenty of room inside. The flat holds a dining table, a sofa and a piano with room to spare, so the word must describe space inside.',
    not: {
      bulky: 'Bulky means large and awkward, used for objects. A flat is not awkward to carry.',
      hefty: 'Hefty means large and heavy. A flat is not lifted or carried.',
      towering: 'Towering means very tall. Fitting furniture in is about floor space, not height.',
    },
    more: 'Spacious comes from space. Estate agents use it constantly because it makes a home sound comfortable and generous.',
    tip: 'In persuasive writing, such as an advert, a positive size word can make the reader want what you describe.',
  },
  'The ⟨big⟩ city has swallowed the farms and villages that once stood around it.': {
    why: 'Sprawling means spreading out widely and untidily. The city has grown outwards and swallowed the farms and villages around it, so its size is about spread, not height.',
    not: {
      towering: 'Towering means very tall. The city has grown outwards over the land, not upwards.',
      cavernous:
        'Cavernous means huge and hollow inside, like a cave. A city spreading over farms is not hollow.',
      bulky: 'Bulky means large and awkward, used for objects you carry. A city is not carried.',
    },
    more: "Sprawling often carries mild disapproval: it suggests growth that is untidy and unplanned. The verb 'swallowed' supports that negative picture.",
    tip: "Notice how words in a sentence support each other. 'Swallowed' and the size word together make the city seem greedy.",
  },
  'Six of us shared a ⟨small⟩ tent, with elbows in our faces all night.': {
    why: 'Cramped means uncomfortably small, with too little room. Six people squeezed into one tent, with elbows in their faces all night, shows a space that is far too small for them.',
    not: {
      compact:
        'Compact means small but well designed, a positive word. Nothing about elbows in faces is well designed.',
      miniature:
        'Miniature means a small copy of something larger, like a model. The tent is a real tent, just too full.',
      dainty: 'Dainty means small, delicate and pretty. An overcrowded tent is not pretty.',
    },
    more: 'Small spaces can be described kindly or unkindly. A word that complains about the size, rather than just measuring it, tells the reader how the speaker feels.',
    tip: 'Connotation matters as much as meaning. Choose the size word that carries the feeling you want the reader to share.',
  },
  'The ⟨small⟩ camera folds flat and slips easily into a pocket.': {
    why: 'Compact means small but cleverly designed, so it takes up little space. The camera folds flat and slips into a pocket, which is exactly the praise compact gives.',
    not: {
      cramped:
        'Cramped means uncomfortably small for what it holds, used for spaces such as rooms. A camera is not a space anyone squeezes into.',
      meagre:
        'Meagre means too small in amount, like a meagre meal. It complains; the sentence praises.',
      poky: 'Poky is an informal word for a small, cramped room. It is a complaint, and a camera is not a room.',
    },
    more: "Advertisers love positive size words because they turn smallness into a selling point. A word's connotation can make the same size sound good or bad.",
    tip: 'In persuasive writing, choose size words with positive connotations to make the reader want the product.',
  },
  'The model railway has ⟨small⟩ trees, houses and people, all made by hand.': {
    why: "Miniature means a very small copy of something larger. A model railway's trees, houses and people are tiny versions of real ones, so miniature describes them exactly.",
    not: {
      meagre:
        'Meagre means too small in amount, like a meagre meal. The trees are small copies, not too few.',
      cramped: 'Cramped means uncomfortably small, used for spaces. Model trees are not spaces.',
      slight:
        'Slight means small in degree, as in a slight cold, or thin and delicate in build. It does not mean a scale copy of something.',
    },
    more: 'Miniature comes from an Italian word for the small, brightly coloured pictures painted in old handwritten books. Today it describes anything made on a small scale.',
    tip: 'Use miniature for small copies of real things and tiny for small things in general. The difference keeps a description precise.',
  },
  'The decision to move abroad was a ⟨big⟩ one that changed everything.': {
    why: 'Momentous means hugely important, with effects that last. Moving abroad changed everything for the family, so the decision was big in importance rather than in size.',
    not: {
      bulky: 'Bulky means large and awkward to carry. A decision has no shape or weight.',
      spacious:
        'Spacious means having plenty of room inside, like a flat. A decision has no inside.',
      cavernous: 'Cavernous means huge and hollow, like a cave. It describes spaces, not choices.',
    },
    more: "Big can mean large in size or large in importance. When a sentence is about effects, such as 'changed everything', the second meaning is meant.",
    tip: 'In an essay, describe a turning point with a word of importance. It tells the reader this moment matters.',
  },
  'Having beaten everyone at the quiz, Oscar sat back with a ⟨happy⟩ little grin that annoyed the whole table.':
    {
      why: 'Smug means too pleased with yourself, in a way that annoys others. Oscar has beaten everyone and sits back with a little grin, and the grin annoys the whole table, which shows his pleasure comes at their expense.',
      not: {
        contented:
          "Contented means quietly satisfied. A contented grin would annoy nobody, yet Oscar's grin annoys the whole table.",
        cheerful:
          'Cheerful means bright and friendly. A cheerful grin would lift the table, not annoy it.',
        grateful:
          'Grateful means thankful to someone. Oscar is pleased with himself, not thanking anyone.',
      },
      more: 'Some happy words have a sting: they describe pleasure that other people dislike seeing. A writer who chooses one is telling the reader to disapprove of the character.',
      tip: 'Look at how other characters react. If the happiness annoys them, the precise word is probably a disapproving one.',
    },
  "The crowd was ⟨happy⟩, singing and dancing in the streets after the town's first-ever cup win.":
    {
      why: "Jubilant means full of noisy joy at a success. The crowd sings and dances in the streets after the town's first cup win, a public celebration of a triumph.",
      not: {
        contented:
          'Contented means quietly satisfied. Singing and dancing in the streets is far louder than contentment.',
        serene:
          'Serene means calm and peaceful. A crowd dancing in the streets is excited, not calm.',
        smug: 'Smug means too pleased with yourself. Nothing suggests the crowd is annoying anyone; they are celebrating together.',
      },
      more: 'Jubilant comes from a Latin word meaning to shout for joy. It suits crowds, victories and public celebration.',
      tip: 'Match the size of the word to the size of the feeling. A first-ever cup win calls for a word of public, noisy joy.',
    },
  'Curled up with a book while the rain fell outside, Ivy felt ⟨happy⟩ and wanted nothing more.': {
    why: "Content means quietly happy and satisfied with what you have. Ivy is curled up warm with a book while it rains and 'wanted nothing more', which is exactly the calm satisfaction content describes.",
    not: {
      elated:
        'Elated means extremely happy and excited, often after good news. Curling up with a book is calm, not thrilling.',
      relieved:
        'Relieved means happy because a worry has ended. Nothing in the scene was worrying Ivy.',
      grateful:
        'Grateful means thankful to someone for something. Ivy is simply enjoying the moment, not thanking anyone.',
    },
    more: 'Content has its stress on the second syllable when it means satisfied, and on the first when it means what something contains, as in the contents of a box.',
    tip: 'Quiet happiness needs quiet words. Calm details, such as rain outside and a book, build the mood the word names.',
  },
  'The twins were ⟨happy⟩ as they planned the trick they would play on their uncle.': {
    why: 'Gleeful means full of excited, mischievous delight. The twins are planning a trick on their uncle, and the fun they expect from it gives their happiness a cheeky edge.',
    not: {
      content: 'Content means calmly satisfied. Plotting a trick is exciting, not calm.',
      serene: 'Serene means peaceful and untroubled. Mischief-makers are bubbling with excitement.',
      grateful: 'Grateful means thankful. The twins are not thanking anyone; they are plotting.',
    },
    more: "Glee often comes with mischief, or even with someone else's misfortune. A villain in a story may be full of glee at the trouble he causes.",
    tip: 'When happiness has a mischievous side, choose a word that shows it. It hints that someone is about to be tricked.',
  },
  'When the last exam ended, Ella gave a long, ⟨happy⟩ sigh and let her shoulders drop.': {
    why: "Relieved means happy because something worrying is over. The last exam has ended, and Ella's long sigh and dropping shoulders show the tension of the exams draining away.",
    not: {
      smug: 'Smug means too pleased with yourself. A sigh and dropping shoulders show release, not showing off.',
      elated:
        'Elated means extremely happy and excited. A long sigh is a sign of release, not excitement.',
      grateful:
        'Grateful means thankful to someone. Ella is not thanking anyone; her worry has simply ended.',
    },
    more: 'Relief is happiness that comes from something bad ending, rather than something good arriving. The body often shows it: a breath out, a loosening of the shoulders.',
    tip: 'Describe relief through the body. A sigh, a slump or a laugh tells the reader the pressure has gone.',
  },
  'Looking at old photos of the house she grew up in, Gran gave a ⟨sad⟩ smile.': {
    why: 'Wistful means sad and longing for something that is gone. Gran is looking at photos of her childhood home, so her smile mixes fond memories with sadness that those days are over.',
    not: {
      bitter:
        'Bitter means angry and hurt about something unfair. Old photos of a childhood home bring fondness, not anger.',
      gloomy: 'Gloomy means dark and hopeless. A smile at happy memories is gentler than gloom.',
      resentful:
        'Resentful means feeling hurt and angry at someone. Nobody in the scene has wronged Gran.',
    },
    more: 'This kind of sadness is gentle and often mixed with love. It is the feeling of looking back at something precious you cannot have again.',
    tip: 'A sad smile is a mixed feeling, and a mixed feeling needs a precise word: one that holds both the smile and the sadness.',
  },
  'After the argument, Raj sat in a ⟨sad⟩ silence, refusing to answer anyone.': {
    why: 'Sullen means silent and bad-tempered, refusing to be friendly. Raj has just argued and refuses to answer anyone, so his silence is a sulk, not simple sadness.',
    not: {
      wistful:
        'Wistful means gently sad and longing for the past. Raj is angry after an argument, not dreaming of old times.',
      sombre:
        'Sombre means serious and sad, as at a funeral. Refusing to answer people is sulky, not solemn.',
      mournful:
        'Mournful means full of grief, as for a death. An argument causes resentment, not grief.',
    },
    more: 'Sullen mixes sadness with anger. A sullen character usually wants others to know they are upset, without saying so.',
    tip: 'Silence can mean many things. Name the kind: a sullen silence, a stunned silence or a peaceful silence each tells a different story.',
  },
  'Three weeks into the camp, Leo was ⟨sad⟩ and kept asking when he could see his own bedroom again.':
    {
      why: 'Homesick means sad because you miss your home. Leo is away at camp and keeps asking when he can see his own bedroom, so his sadness is about missing home.',
      not: {
        remorseful:
          'Remorseful means sorry for something wrong you did. Leo has done nothing wrong; he misses home.',
        heartbroken:
          'Heartbroken means overwhelmed with sorrow, often after losing someone you love. Missing your bedroom is a gentler sadness.',
        'grief-stricken':
          'Grief-stricken means overcome with sorrow after a death. Nobody has died; Leo simply misses home.',
      },
      more: 'This is a compound word: home plus sick. Many feeling words are built this way, such as seasick or lovesick.',
      tip: 'Name the cause of a feeling and the precise word often follows. Missing home gives the word here.',
    },
  "Having broken her grandmother's favourite vase and hidden the pieces, Kezia felt ⟨sad⟩ and could not sleep.":
    {
      why: 'Remorseful means deeply sorry for something wrong you have done. Kezia broke the vase and hid the pieces, and her guilt about both keeps her awake.',
      not: {
        wistful:
          "Wistful means gently sad and longing for the past. Kezia's sadness is about what she did, not what she misses.",
        homesick:
          'Homesick means sad because you miss home. Kezia is at home, and her trouble is guilt.',
        melancholic:
          "Melancholic means sad in a deep, lasting, often unexplained way. Kezia's sadness has a clear cause: the broken vase.",
      },
      more: 'Remorse is the painful feeling of guilt after doing wrong. Hiding the pieces makes it worse, because Kezia has now done two wrong things.',
      tip: 'Feelings linked to guilt make strong turning points in stories. A character full of regret often confesses or tries to put things right.',
    },
  'Accused of cheating when she had worked for weeks, Jo was ⟨angry⟩ and demanded an apology.': {
    why: 'Indignant means angry because you have been treated unfairly. Jo is wrongly accused of cheating after weeks of honest work, and she demands an apology, so her anger is about injustice.',
    not: {
      irritable:
        "Irritable means easily annoyed by small things. Jo's anger has a serious cause, not a bad mood.",
      grumpy:
        'Grumpy means bad-tempered and moaning. It is too mild and too general for someone wrongly accused.',
      exasperated:
        'Exasperated means worn out by something that keeps annoying you. Jo is reacting to one serious injustice, not a repeated nuisance.',
    },
    more: 'This kind of anger has a sense of right and wrong behind it. Characters who feel it usually want something put right, such as an apology.',
    tip: 'Ask why a character is angry. Anger at unfairness, at a nuisance and at an insult each has its own precise word.',
  },
  'The little boy was ⟨angry⟩ about not getting a second biscuit and refused to speak to anyone.': {
    why: 'Sulky means silently bad-tempered because you are not getting your way. The boy is upset about a biscuit and refuses to speak to anyone, which is the classic sign of a sulk.',
    not: {
      livid:
        'Livid means extremely angry, almost shaking with fury. A biscuit is a small matter, and the boy is silent, not raging.',
      hysterical:
        'Hysterical means wildly out of control with emotion, screaming or sobbing. The boy goes quiet instead.',
      frantic:
        'Frantic means wild with worry or hurry. The boy is not worried or rushing; he is in a mood.',
    },
    more: 'Sulking is a quiet, stubborn kind of anger that uses silence as a weapon. It is often linked to children, which can make it seem immature in an adult.',
    tip: 'Silence can show anger as well as shouting can. A character who refuses to speak makes everyone notice them.',
  },
  'The buzzing fly made Dad more ⟨angry⟩ with every lap it made of the kitchen.': {
    why: "Irritated means annoyed, often by something small that keeps happening. A fly buzzing round and round the kitchen is a small, repeated nuisance, and Dad's annoyance grows with each lap.",
    not: {
      outraged:
        'Outraged means shocked and furious at something seriously wrong. A fly is not an outrage.',
      livid:
        'Livid means extremely angry. A buzzing fly is annoying, but nobody is livid with a fly.',
      indignant: 'Indignant means angry at unfair treatment. A fly cannot treat anyone unfairly.',
    },
    more: 'Anger words come in strengths, from mild annoyance to fury. Matching the strength to the cause keeps writing believable, and a mismatch can be funny.',
    tip: 'For comedy, a writer sometimes gives a tiny cause a huge reaction. For realism, keep the strength of the word close to the size of the cause.',
  },
  'Finding muddy boots on the clean carpet for the third time that week, Mum was ⟨annoyed⟩.': {
    why: "Exasperated means worn out and annoyed by something that keeps happening. The muddy boots are on the clean carpet for the third time that week, so Mum's patience has run out.",
    not: {
      indignant:
        'Indignant means angry at being treated unfairly. Muddy boots are careless, not unjust.',
      outraged:
        'Outraged means shocked and furious at something seriously wrong. Muddy boots are a nuisance, not a scandal.',
      sulky:
        'Sulky means silently bad-tempered, like a child who has not got their way. Mum is fed up, not sulking.',
    },
    more: "This is the anger of lost patience. The phrase 'for the third time' is the clue: repetition is what wears patience down.",
    tip: "In a story, show the history behind a feeling. 'For the third time that week' tells the reader why one more pair of boots is too much.",
  },
  'The night before her first day at a new school, Mia felt ⟨scared⟩ about who she would sit with.':
    {
      why: "Apprehensive means a little worried about something that is going to happen. Mia's fear is about tomorrow, and about a small worry, so a mild word for nervous expectation fits.",
      not: {
        petrified:
          'Petrified means so frightened you cannot move. Wondering who to sit with is a worry, not terror.',
        horrified:
          'Horrified means shocked and disgusted by something dreadful. Nothing dreadful has happened.',
        'panic-stricken':
          'Panic-stricken means overcome by sudden, wild fear. Mia is lying awake wondering, not panicking.',
      },
      more: 'Fear words differ in strength and in time. This one looks ahead to something coming; terror is usually about what is happening now.',
      tip: 'In a personal story, a mild fear word can be more believable than an extreme one. Save the strongest words for real danger.',
    },
  'The deer was ⟨scared⟩, lifting its head at every snap of a twig as the walkers passed.': {
    why: 'Wary means alert and careful because something might be dangerous. The deer stays alert, lifting its head at every small sound, ready to flee if the walkers come closer.',
    not: {
      petrified:
        'Petrified means frozen with terror. The deer is alert and moving its head, not frozen.',
      hysterical:
        'Hysterical means wildly out of control. The deer is calm enough to keep watching.',
      horrified:
        'Horrified means shocked by something dreadful. Walkers on a path are not dreadful; they are a possible threat.',
    },
    more: 'This is careful, alert fear: not panic, but readiness. It suits wild animals, and characters who do not trust a stranger.',
    tip: 'Show careful fear through small, alert actions, such as lifting a head or turning towards a door. They create quiet tension.',
  },
  'When the bull charged, Ewan was too ⟨scared⟩ to move a muscle.': {
    why: 'Petrified means so frightened that you cannot move. A charging bull is real danger, and Ewan freezes completely, which is exactly what petrified describes.',
    not: {
      uneasy: 'Uneasy means slightly worried. A charging bull causes far more than slight worry.',
      wary: 'Wary means watchful and careful. Ewan is too terrified even to watch carefully; he is frozen.',
      apprehensive:
        'Apprehensive means worried about something that might happen. The bull is charging now.',
    },
    more: 'Petrified literally means turned to stone, from the Greek word for rock. Wood that has turned to stone over millions of years is called petrified wood.',
    tip: 'Use words with a picture inside them. This one suggests a person frozen like a statue.',
  },
  'When the lion roared, the visitors were ⟨scared⟩ and ran for the exit.': {
    why: "Terrified means extremely frightened. The lion's roar makes the visitors run for the exit, so their fear is strong enough to send them fleeing.",
    not: {
      uneasy: 'Uneasy means slightly worried. Slight worry would not make a crowd run.',
      apprehensive:
        'Apprehensive means worried about something that might happen. The roar is happening now, and the fear is sudden and strong.',
      suspicious:
        'Suspicious means not trusting someone or something. Running for the exit is fear, not distrust.',
    },
    more: 'Terrify is linked to terror and terrible. All three come from a Latin word meaning to frighten.',
    tip: 'Back up a strong feeling word with a strong action. Running for the exit proves how frightened the visitors were.',
  },
  'The runner was ⟨tired⟩ and collapsed onto the grass at the finish line.': {
    why: 'Exhausted means so tired that you have no energy left at all. The runner collapses at the finish line, which shows every last bit of strength has been used up.',
    not: {
      drowsy:
        'Drowsy means sleepy, as if about to doze off. The runner is drained by effort, not ready for bed.',
      jaded:
        'Jaded means tired and bored from having too much of something. The runner has just finished a race; it is effort, not boredom.',
      listless:
        "Listless means lacking energy and interest, often for no clear reason. The runner's tiredness has an obvious cause: the race.",
    },
    more: 'Tiredness words differ by cause: sleepiness, effort, boredom or illness. Exhausted comes from a Latin word meaning drained out, like water from a tank.',
    tip: 'Show the cause and the effect of tiredness. A collapse at the finish line is the evidence for a strong word.',
  },
  'Gran is ⟨careful⟩ with money: she mends her own socks, yet still gives generously to charity.': {
    why: 'Thrifty means careful with money in a sensible, admirable way. Gran saves by mending her own socks, yet she still gives generously, so her carefulness is a good quality, not meanness.',
    not: {
      stingy:
        'Stingy means unwilling to spend or give. Gran gives generously to charity, so she is not stingy.',
      extravagant:
        'Extravagant means spending far too much. Mending your own socks is the opposite.',
      greedy:
        'Greedy means wanting more than your share. Someone who gives generously to charity is not greedy.',
    },
    more: "Words for saving money can approve or disapprove of the same habit. The writer's choice tells you what to think of the person.",
    tip: "When you analyse a character, notice whether the writer's words approve or disapprove. One word can praise the same behaviour another would criticise.",
  },
  'Mr Grimble is so ⟨mean⟩ that he once charged his own son for a cup of tea.': {
    why: 'Miserly means hating to spend money, even when it is unkind or ridiculous. Charging your own son for a cup of tea shows a love of money that goes far beyond sensible saving.',
    not: {
      thrifty:
        'Thrifty means careful with money in a sensible way, and it approves. Charging your son for tea is not sensible; it is shocking.',
      economical:
        'Economical means not wasting money or resources, a neutral or approving word. The sentence mocks Mr Grimble, so a disapproving word is needed.',
      spiteful:
        'Spiteful means wanting to hurt or upset someone on purpose. Mr Grimble wants the money, not to hurt his son.',
    },
    more: 'A miser is someone who hoards money and hates spending it. Scrooge, in A Christmas Carol, is the most famous miser in English literature.',
    tip: 'Mean has two meanings in British English: unkind, and unwilling to spend. Check which one the sentence is about before you choose.',
  },
  'Kai is so ⟨proud⟩ that he checks his hair in every shop window he passes.': {
    why: 'Vain means too proud of your looks. Kai checks his hair in every shop window he passes, so his pride is about his appearance, and it has become a habit.',
    not: {
      dignified:
        'Dignified means calm and serious in a way that earns respect. Checking your hair in every window does not earn respect.',
      honoured:
        'Honoured means proud because you have been given respect or an award. Nobody has honoured Kai; he admires himself.',
      confident:
        'Confident means sure of yourself, usually a good quality. Someone truly confident would not need to check every window.',
    },
    more: "Vain has a second meaning, useless, as in 'a vain attempt to escape'. Both meanings come from the Latin for empty: a vain person's pride rests on nothing deeper than looks.",
    tip: 'Repeated habits reveal character. A detail like checking every shop window shows the trait more convincingly than naming it.',
  },
  'Even in her old coat, Mrs Adebayo walked into the courtroom ⟨proud⟩ and calm.': {
    why: 'Dignified means calm, serious and deserving respect. Mrs Adebayo enters the courtroom calm and upright even in an old coat, so her pride is quiet self-respect, not showing off.',
    not: {
      vain: 'Vain means too proud of your looks. Her old coat shows she is not thinking about her appearance.',
      conceited:
        'Conceited means having too high an opinion of yourself. Nothing suggests boasting; she is calm.',
      arrogant:
        'Arrogant means behaving as if you are better than others. Her calm is self-respect, not scorn for anyone.',
    },
    more: 'Proud can be a fault or a strength. Some words keep the strength and drop the fault: they describe self-respect rather than self-importance.',
    tip: "In character analysis, separate admirable pride from unpleasant pride. The writer's word choice usually tells you which is meant.",
  },
  'Cycling down the steepest hill in town with no brakes was ⟨brave⟩, and it ended in hospital.': {
    why: 'Reckless means doing something dangerous without thinking about the risk. Riding the steepest hill with no brakes was a pointless danger, and it ended in hospital, so the act was foolish rather than brave.',
    not: {
      heroic:
        'Heroic means very brave, usually to help others. Nobody was helped by riding without brakes.',
      courageous:
        'Courageous means brave in facing danger or pain, and it praises. The hospital ending shows the risk was foolish, not admirable.',
      valiant:
        'Valiant means bravely determined, often in a fight. It praises; the sentence criticises.',
    },
    more: 'Bravery needs a good reason to face danger. Taking a risk for no reason, or only to show off, is something else.',
    tip: 'When a character takes a risk, ask whether the writer admires it. The result, here a hospital visit, is often the clue.',
  },
  'The firefighter was ⟨brave⟩, going back into the smoke three times to carry people out.': {
    why: 'Heroic means very brave, especially in risking your own safety to save others. The firefighter goes back into the smoke three times to carry people out, which is courage used for others.',
    not: {
      reckless:
        'Reckless means taking risks without thinking. A firefighter is trained, and the risks have a purpose: saving lives.',
      foolhardy:
        'Foolhardy means foolishly bold. Rescuing people is not foolish; it is the whole point of the job.',
      rash: 'Rash means acting too quickly without thinking. Going back in three times is deliberate, not a sudden whim.',
    },
    more: 'Several words can describe someone running into danger. The difference is purpose and judgement, which is why the reason for the risk matters.',
    tip: 'Use the strongest praise sparingly in your writing, for acts that truly save or protect others. Overused, it loses its power.',
  },
  'Our ⟨curious⟩ neighbour reads our post when it is left on the doormat.': {
    why: "Prying means trying to find out about other people's private business. Reading the neighbours' post is snooping into things that are none of her business.",
    not: {
      inquiring:
        "Inquiring means eager to learn, usually praised, as in an inquiring mind. Reading other people's post is not learning; it is snooping.",
      attentive:
        'Attentive means paying close attention, especially to help. Nobody is helped by having their post read.',
      thoughtful:
        "Thoughtful means kind and considerate. Reading someone's post is the opposite of considerate.",
    },
    more: 'Curious can be praise or criticism. A curious scientist explores; a curious neighbour snoops. The connotation depends on whose business is being explored.',
    tip: "When curiosity crosses into other people's privacy, choose a disapproving word. It tells the reader to judge the character.",
  },
  'Always ⟨curious⟩ in science lessons, Femi asked so many questions that his teacher lent him her own books.':
    {
      why: "Inquisitive means eager to learn and find things out. Femi's questions are about science, and his teacher rewards them by lending her own books, so his curiosity is admired.",
      not: {
        nosy: "Nosy means too interested in other people's private business. Femi's questions are about science, not about people.",
        interfering:
          "Interfering means getting involved in things that are not your concern. Asking questions in a lesson is exactly a pupil's concern.",
        gossipy:
          "Gossipy means fond of talking about other people's private lives. Femi talks about science, not people.",
      },
      more: "Inquisitive can sometimes be used of people who pry, so the context matters. Here the teacher's response shows that the curiosity is aimed at knowledge.",
      tip: 'Look at how others respond. A teacher lending her books shows the curiosity is admired, so choose an approving word.',
    },
  'Grandpa is ⟨firm⟩ about it: he refuses to try the new computer, though it would save him hours.':
    {
      why: 'Obstinate means refusing to change your mind even when you should. Grandpa will not try the computer although it would save him hours, so his refusal works against him.',
      not: {
        resolute:
          'Resolute means firmly determined, usually in a good cause. Refusing a useful tool is not a good cause.',
        steadfast:
          'Steadfast means loyally firm, as a friend stands by you. It praises; the sentence shows a refusal that harms Grandpa.',
        principled:
          'Principled means acting on moral beliefs. Refusing a computer is a habit, not a moral stand.',
      },
      more: 'Firmness can be praised as determination or blamed as stubbornness. The difference is whether the firmness makes sense.',
      tip: "In analysis, ask whether a character's firmness helps or harms them. That decides between an approving word and a disapproving one.",
    },
  'Despite four failed attempts, Grace stayed ⟨firm⟩ and passed her driving test at the fifth.': {
    why: 'Resolute means firmly determined to achieve something. Grace keeps trying after four failures and succeeds at the fifth, so her firmness is admirable persistence.',
    not: {
      obstinate:
        "Obstinate means stubbornly refusing to change, a criticism. Grace's firmness leads to success, so the writer approves of it.",
      inflexible:
        "Inflexible means unable or unwilling to change, a criticism. Grace's determination brings success, so the sentence approves of it.",
      'pig-headed':
        'Pig-headed means stupidly stubborn, a strong insult. Nothing in the sentence mocks Grace.',
    },
    more: "English has many words for not giving up. Some praise it and some mock it. Writers choose between them to steer the reader's opinion.",
    tip: 'When you write about a character who keeps going, pick a word that shows whether their persistence is sensible or foolish.',
  },
  'The ⟨famous⟩ pirate Blackbeard frightened sailors from Virginia to the Caribbean.': {
    why: 'Notorious means famous for something bad. Blackbeard was known everywhere for frightening and robbing sailors, so his fame came from his crimes.',
    not: {
      renowned:
        'Renowned means famous and admired, usually for skill or achievement. Terrorising sailors earns fear, not admiration.',
      celebrated:
        'Celebrated means famous and praised. Nobody praised Blackbeard for frightening sailors.',
      acclaimed:
        'Acclaimed means publicly praised, often by critics, as an acclaimed film is. A pirate is not acclaimed.',
    },
    more: 'Notorious and famous both mean widely known, but notorious adds disapproval. A notorious criminal and a famous scientist are both well known for very different reasons.',
    tip: 'In an essay, notorious is useful for villains and their deeds. It shows you know the difference between fame and infamy.',
  },
  'Edinburgh is ⟨famous⟩ for its summer festival, which draws performers from all over the world.':
    {
      why: "Renowned means famous and admired. Edinburgh's festival draws performers from all over the world, which shows its fame is a matter of pride, not shame.",
      not: {
        notorious:
          'Notorious means famous for something bad. A festival that attracts performers from everywhere is admired.',
        infamous: 'Infamous means well known for wickedness. Nothing wicked is described.',
        feared:
          'Feared means known for causing fear, as a feared opponent is. Nothing about a festival frightens anyone.',
      },
      more: 'Renown comes from an old French word meaning to name again: something with renown is named over and over in praise.',
      tip: 'Use a word of admiring fame for a place, a writer or an achievement you want to praise.',
    },
  'The shop sold ⟨cheap⟩ souvenirs that broke before we even got them home.': {
    why: 'Shoddy means badly made and of poor quality. The souvenirs broke before anyone got them home, which shows they were cheap in the bad sense: poorly made.',
    not: {
      economical:
        'Economical means good value and not wasteful, an approving word. Souvenirs that break at once are a waste of money.',
      affordable:
        'Affordable means low enough in price for people to buy, a positive word. The sentence is about poor quality, not a fair price.',
      reasonable:
        'Reasonable means sensible, or fair in price. Souvenirs that fall apart before you get home are neither.',
    },
    more: 'Cheap can describe a low price or poor quality. When the sentence shows something falling apart, it is the quality that matters.',
    tip: 'In a review, separate price from quality. A low price can be praised, but poor quality is always a criticism.',
  },
  'The museum café was ⟨cheap⟩, so all four of us had lunch for under ten pounds.': {
    why: 'Affordable means low enough in price for people to pay easily. Four people having lunch for under ten pounds is good value, so the low price is praised.',
    not: {
      shoddy:
        'Shoddy means badly made. The sentence is pleased about the price, not complaining about quality.',
      tacky:
        'Tacky means cheap-looking and in poor taste. Nothing is said about how the café looks.',
      'second-rate':
        "Second-rate means of poor quality. The sentence praises the café's prices; it criticises nothing.",
    },
    more: 'Advertisers avoid the word cheap because it can suggest poor quality. Words like good value and reasonably priced praise a low price without that risk.',
    tip: 'In persuasive writing, choose words that keep only the positive side of a meaning. Praise the price without insulting the product.',
  },
  'Sixty-year-old Dot stays ⟨young⟩ by swimming in the sea every morning.': {
    why: 'Youthful means having the energy and freshness of a young person, a compliment. Dot is sixty but swims in the sea every morning, so the word praises her energy, not her age.',
    not: {
      childish:
        'Childish means behaving like a child in a silly way, a criticism. Morning swims are healthy, not silly.',
      immature:
        'Immature means not grown-up in behaviour, a criticism. Nothing Dot does is irresponsible.',
      juvenile:
        'Juvenile means young, or silly in a childish way. Used of an adult, it is an insult; the sentence admires Dot.',
    },
    more: 'Words about youth can praise energy and freshness or criticise silly behaviour. The rest of the sentence tells you which kind is meant.',
    tip: "Compliment an older character's energy with a word that praises without suggesting they act like a child.",
  },
  "Laughing at the supply teacher's name was ⟨young⟩ behaviour for pupils of fifteen.": {
    why: "Childish means silly or immature in a way that does not suit your age. Fifteen-year-olds laughing at a teacher's name are behaving like much younger children, which the sentence criticises.",
    not: {
      youthful: 'Youthful praises the energy of youth. The sentence is criticising, not praising.',
      sprightly:
        'Sprightly means lively and energetic, usually said of older people as praise. It does not fit unkind laughter.',
      innocent:
        "Innocent means harmless, or knowing no wrong, a kind word. Laughing at someone's name is unkind, and fifteen-year-olds know it.",
    },
    more: "Childish and childlike differ. Childlike praises a child's innocence and wonder; childish criticises a child's silliness.",
    tip: "This is a useful word for criticising a character's behaviour in an essay, but check you do not mean the gentler 'childlike'.",
  },
  'Amina is ⟨quiet⟩ in big groups but chatty with her close friends.': {
    why: 'Reserved means slow to share your thoughts and feelings, especially with people you do not know well. Amina holds back in big groups but opens up with close friends, which is exactly what reserved describes.',
    not: {
      sullen:
        'Sullen means silent because you are in a bad mood. Amina is not cross; she is simply quiet in crowds.',
      mute: 'Mute means not speaking at all, or unable to speak. Amina talks freely with her friends.',
      haughty:
        'Haughty means proud and looking down on others. Nothing suggests Amina thinks she is better than anyone; she is simply quiet.',
    },
    more: 'Quietness can be described kindly or unkindly. A kind word suggests a calm, private person; an unkind one suggests rudeness or a bad mood.',
    tip: 'Be fair to quiet characters in your writing. Choose a word that shows why they are quiet, not just that they are.',
  },
  'Max was so ⟨honest⟩ that he told Priya her essay was boring, right in front of the class.': {
    why: 'Blunt means saying exactly what you think, without caring how it sounds. Telling Priya her essay is boring in front of the whole class is honesty with no thought for her feelings.',
    not: {
      tactful:
        'Tactful means careful not to upset people. Criticising someone in front of the class is the opposite.',
      discreet:
        'Discreet means careful about what you say and where, keeping things private. Max says it in public.',
      gentle:
        'Gentle means kind and soft in manner. Calling an essay boring in front of everyone is harsh, not gentle.',
    },
    more: 'A blunt remark is like a blunt instrument: heavy and crude rather than fine and careful. Honesty can be kind or harsh, and English has words for both.',
    tip: 'When describing an honest character, decide whether their honesty is kind or harsh. The word you choose tells the reader.',
  },
  'The candle ⟨shone⟩ in the draught from the open window, almost going out.': {
    why: 'Flickered means shone unsteadily, wavering between bright and dim. The draught from the window makes the flame waver until it almost goes out.',
    not: {
      glared:
        'Glared means shone with a harsh, dazzling light. A candle about to go out is faint, not harsh.',
      dazzled: 'Dazzled means shone so brightly it blinded. A tiny, wavering flame cannot dazzle.',
      glistened:
        'Glistened means shone with a wet, sparkling light, like dew. A candle flame is not wet.',
    },
    more: 'Unsteady light is a favourite of ghost stories and gothic novels: it makes shadows move and suggests that something could go out at any moment.',
    tip: 'Use unsteady light to build tension. A wavering candle tells the reader the darkness could win.',
  },
  'On the frosty lawn, a million tiny crystals ⟨shone⟩ in the morning sun.': {
    why: 'Glittered means shone with many tiny, bright sparkles of light. A million frost crystals each catch the sun, so the lawn sparkles with countless small points of light.',
    not: {
      glowed:
        'Glowed means gave out a steady, soft light, like embers. Frost crystals flash and sparkle rather than shine softly.',
      flickered:
        'Flickered means shone unsteadily, like a candle in a draught. The morning sun is steady.',
      smouldered: 'Smouldered means burnt slowly with smoke and no flame. Frost cannot burn.',
    },
    more: 'This word suits many small, hard, bright things: frost, jewels, sequins, stars on a clear night. Its sharp sounds match the sharp points of light.',
    tip: 'Count the light sources. Many tiny ones sparkle; one soft one shines steadily; one unsteady one wavers.',
  },
  'The embers ⟨shone⟩ red long after the last flames had died.': {
    why: 'Glowed means gave out a steady, warm light without flames. Embers are what is left of a fire after the flames have died, so they shine softly and red.',
    not: {
      glittered:
        'Glittered means sparkled with many tiny flashes, like frost or jewels. Embers give a steady light, not sparkles.',
      twinkled:
        'Twinkled means shone with a small light that seemed to come and go, like a star. Embers shine steadily.',
      flashed:
        'Flashed means shone suddenly and briefly. Embers keep shining long after the flames.',
    },
    more: 'This word can describe faces too: a face can shine with health, pride or embarrassment. It carries warmth wherever it is used.',
    tip: 'Warm, steady light creates a calm or homely mood. Use it for firesides and safety; save harsh light for danger.',
  },
  'Far out at sea, the lighthouse ⟨shone⟩ every ten seconds.': {
    why: "Flashed means shone suddenly and briefly, then went dark. A lighthouse shining 'every ten seconds' gives short bursts of light with darkness between them.",
    not: {
      glowed:
        'Glowed means shone steadily and softly. A light that comes every ten seconds is not steady.',
      shimmered:
        'Shimmered means shone with a soft, wavering light, like moonlight on water. A lighthouse beam is strong and sudden.',
      smouldered:
        'Smouldered means burnt slowly with smoke and no flame. A lighthouse lamp does not burn like a bonfire.',
    },
    more: 'Each lighthouse has its own pattern of light and darkness, so sailors at night can tell which one they are looking at.',
    tip: 'Rhythm in light can build atmosphere: a regular light across dark water feels lonely and patient.',
  },
  'The moonlight ⟨shone⟩ on the surface of the lake as the breeze rippled across it.': {
    why: 'Shimmered means shone with a soft, wavering light. The breeze ripples the lake, so the moonlight on it keeps moving and quivering, gentle rather than bright.',
    not: {
      flashed:
        'Flashed means shone suddenly and briefly. Moonlight on rippling water is soft and continuous.',
      blazed:
        'Blazed means burned or shone with fierce brightness, like a bonfire. Moonlight is far too gentle for that.',
      glared: 'Glared means shone harshly and uncomfortably, like a midday sun. Moonlight is soft.',
    },
    more: 'This word suits light on moving surfaces: water, silk, heat haze on a road. Its soft sh sound matches the gentle effect.',
    tip: 'Match the light verb to the surface. Water, glass, metal and frost each reflect light in their own way.',
  },
  "Behind his glasses, the old professor's eyes ⟨shone⟩ with mischief as he revealed the answer.": {
    why: "Twinkled means shone with a small, lively light, as stars do. Eyes that twinkle show amusement or kindness, which fits the professor's mischief as he reveals the answer.",
    not: {
      glared: 'Glared means stared angrily. Mischief is playful, not angry.',
      blazed:
        'Blazed means shone fiercely, as with fury or passion. A playful reveal is gentler than that.',
      smouldered:
        'Smouldered means showed strong feeling held back, often anger or passion. Mischief is light-hearted.',
    },
    more: 'Eyes are often described with light words: they can sparkle with fun, blaze with anger or shine with pride. Each tells the reader the feeling behind the look.',
    tip: "Use the eyes to reveal a character's mood. A small, lively light can show that someone is enjoying a secret.",
  },
  'The midday sun ⟨shone⟩ off the white sand until we had to shield our eyes.': {
    why: 'Glared means shone with a harsh, dazzling light that hurts the eyes. The midday sun bouncing off white sand is so bright that they have to shield their eyes.',
    not: {
      glimmered:
        'Glimmered means shone faintly. A faint light would not make anyone shield their eyes.',
      glowed:
        'Glowed means shone softly and steadily, like embers. Midday sun on white sand is harsh, not soft.',
      twinkled:
        'Twinkled means shone with a small, flickering light, like a star. The midday sun is huge and fierce.',
    },
    more: 'This word is used for light and for looks: a harsh sun and an angry face share it. The two senses share the idea of something too strong to meet comfortably.',
    tip: 'Show the effect of light on people. Shielding eyes is the evidence that the light is harsh.',
  },
  'The old stairs ⟨made a noise⟩ under every step, giving away our midnight snack.': {
    why: 'Creaked means made a long, high, grating sound, like old wood under weight. Old stairs creak as people climb them, and that noise gives away the midnight snack.',
    not: {
      rustled:
        'Rustled means made a soft, dry sound like leaves or paper. Wooden stairs do not rustle.',
      chimed: 'Chimed means rang like a bell. Stairs do not ring.',
      gurgled:
        'Gurgled means made a bubbling sound, like water down a drain. Wooden stairs hold no water.',
    },
    more: 'Many sound words imitate the sound itself, which is called onomatopoeia. Say this one slowly and you can almost hear the wood.',
    tip: 'Use onomatopoeia in descriptive writing to let the reader hear the scene, not just see it.',
  },
  'Dry leaves ⟨made a noise⟩ under our boots as we kicked through the park.': {
    why: 'Crunched means made a crushing sound, like something brittle being broken. Dry leaves break into pieces under boots, so they crunch with every step.',
    not: {
      clanged:
        'Clanged means made a loud ringing sound, like metal hitting metal. Leaves are not metal.',
      whistled:
        'Whistled means made a high, clear sound, like air through a narrow gap. Leaves underfoot do not whistle.',
      chimed: 'Chimed means rang like a bell. Leaves are soft and dry, not ringing.',
    },
    more: 'The sound of a word can match its meaning. This one has hard sounds at both ends, like the snap of something brittle.',
    tip: 'Autumn descriptions come alive with sound. Add one precise sound verb to a seasonal description and the reader is there.',
  },
  'Light rain ⟨made a noise⟩ on the roof of the tent all night.': {
    why: 'Pattered means made a quick, light tapping sound. Light rain on a tent roof makes many soft taps, which is exactly the sound pattered names.',
    not: {
      thundered: 'Thundered means made a deep, loud rumbling. Light rain is far too gentle.',
      clanged:
        'Clanged means made a loud metallic ringing. A tent roof is fabric, and the rain is light.',
      roared: 'Roared means made a deep, loud, continuous noise. Light rain does not roar.',
    },
    more: 'Patter is also used for small, quick feet: the patter of tiny feet means a small child or animal running.',
    tip: 'Gentle sounds suit calm or peaceful scenes. Soft rain on canvas can make a tent feel safe.',
  },
  'When Ollie dropped the tray, cutlery ⟨made a noise⟩ all over the canteen floor.': {
    why: 'Clattered means made a loud, rattling noise, like hard objects hitting each other. Metal cutlery scattering across a hard floor makes a sharp, jangling crash.',
    not: {
      rustled: 'Rustled means made a soft, dry sound like leaves. Metal cutlery is hard and loud.',
      hummed: 'Hummed means made a low, steady buzz. Falling cutlery is sudden and noisy.',
      squelched:
        'Squelched means made a wet, sucking sound, like boots in mud. Cutlery on a floor is dry and hard.',
    },
    more: 'This word suits many hard things falling together: plates, pans, hooves on cobbles. The repeated t sounds in it echo the noise.',
    tip: 'A sudden loud sound in a quiet place grabs attention. Writers use it to make a moment embarrassing or startling.',
  },
  'Somewhere in the walls, the old pipes ⟨made a noise⟩ like a hungry stomach.': {
    why: 'Gurgled means made a bubbling sound, like water moving through a narrow space. Old pipes carry water, and a hungry stomach makes the same bubbling noise.',
    not: {
      chimed: 'Chimed means rang like a bell. Pipes full of water bubble rather than ring.',
      tinkled:
        'Tinkled means made a light, ringing sound, like a small bell or glass. A stomach-like noise is low and bubbly.',
      crackled:
        'Crackled means made sharp snapping sounds, like a fire. Water in pipes does not snap.',
    },
    more: "The simile 'like a hungry stomach' helps the reader hear the pipes by comparing them to a familiar sound.",
    tip: 'If you cannot name a sound, compare it to one the reader knows. Then choose a verb that fits both.',
  },
  'The logs on the fire ⟨made a noise⟩ and spat sparks onto the rug.': {
    why: 'Crackled means made a series of small, sharp cracking sounds. Burning logs pop as the heat bursts them, and the sparks they spit show that this fire is lively.',
    not: {
      rustled: "Rustled means made a soft, dry sound like leaves. A fire's sounds are sharper.",
      tinkled:
        'Tinkled means made a light ringing, like a small bell. Burning wood snaps; it does not ring.',
      squeaked:
        'Squeaked means made a short, high sound, like a mouse or a hinge. Logs on a fire pop and spit.',
    },
    more: 'This is onomatopoeia: the word sounds like the noise. Fire, frost, static on a radio and brittle paper all make it.',
    tip: 'Firelight scenes often combine sound and light. A lively fire and warm light make a room feel welcoming.',
  },
  'Far away over the hills, thunder ⟨made a noise⟩ like a lorry crossing a bridge.': {
    why: 'Rumbled means made a deep, heavy, continuous sound. Distant thunder rolls on like a lorry crossing a bridge, low and long.',
    not: {
      tinkled: 'Tinkled means made a light, high ringing. Thunder is deep and heavy.',
      crackled:
        'Crackled means made sharp snapping sounds, like a fire. Distant thunder is a low roll, not a snap.',
      squeaked: 'Squeaked means made a short, high sound. Thunder is the opposite: deep and long.',
    },
    more: 'Thunder that is close cracks; thunder that is far away rolls on, because the sound spreads and blurs over distance.',
    tip: 'Distance changes sound. Use that in description: a far-off roll feels like a warning, a close crack like an attack.',
  },
  'The snake ⟨made a noise⟩ and raised its head when the keeper opened the tank.': {
    why: "Hissed means made a long 'sss' sound, as snakes do when they feel threatened. The snake raises its head as the tank opens, a warning to keep away.",
    not: {
      growled:
        'Growled means made a deep, rough sound in the throat, like an angry dog. Snakes have no vocal cords to growl with.',
      snorted:
        "Snorted means pushed air noisily through the nose, like a horse. A snake's warning is a long, steady sound.",
      squealed: 'Squealed means made a long, high cry, like a piglet. Snakes do not squeal.',
    },
    more: 'A snake makes its warning by forcing air out through its windpipe. The word is onomatopoeia: say it and you make the sound.',
    tip: 'Animal sounds can build menace in a story. A sound in the dark tells the reader there is danger before anything is seen.',
  },
  'We set off on a ⟨cold⟩, bright winter morning, our breath puffing like smoke, and loved every minute.':
    {
      why: 'Crisp means cold, dry and fresh in a pleasant way. The morning is bright and the walkers love every minute, so the cold is enjoyable, not miserable.',
      not: {
        bleak:
          'Bleak means cold, bare and cheerless. A bright morning that everyone loves is not bleak.',
        raw: 'Raw means cold and damp in a way that chills you. Nothing here is damp or unpleasant.',
        bitter:
          'Bitter means painfully cold, usually with a cutting wind. The walkers are enjoying themselves, not suffering.',
      },
      more: 'Cold weather has words for every mood, pleasant and miserable. The rest of the sentence decides which kind a writer needs.',
      tip: 'In descriptive writing, use the weather to set the mood. A fresh, bright morning promises a good day.',
    },
  'A ⟨cold⟩, grey drizzle seeped through our coats and seemed to reach our bones.': {
    why: 'Raw means cold and damp in a way that chills you right through. A grey drizzle seeping through coats to the bones describes exactly that wet, penetrating cold.',
    not: {
      crisp:
        'Crisp means cold, dry and pleasantly fresh. Drizzle soaking through coats is neither dry nor pleasant.',
      brisk:
        'Brisk means cold and fresh in a lively way, as a brisk wind is. Nothing about grey drizzle is lively.',
      fresh:
        'Fresh means cool and clean, a pleasant word. Cold that reaches your bones is miserable.',
    },
    more: 'Raw has several meanings: uncooked, sore, inexperienced. For weather it means damp cold that seems to scrape the skin, like a sore.',
    tip: "Use the body to show weather: cold that 'seemed to reach our bones' lets the reader feel it too.",
  },
  "With no air conditioning, the packed train was ⟨hot⟩ and everyone's shirts stuck to their backs.":
    {
      why: 'Stifling means so hot and airless that it is hard to breathe. A packed train with no air conditioning traps heat and breath, and shirts sticking to backs show how uncomfortable it is.',
      not: {
        balmy:
          'Balmy means pleasantly warm, like a summer evening. Sticky shirts on a packed train are not pleasant.',
        mild: 'Mild means gently warm, not hot. Shirts sticking to backs show real heat.',
        lukewarm:
          'Lukewarm means only slightly warm, like a bath left too long. The train is uncomfortably hot.',
      },
      more: "Stifle also means to smother or hold back, as in 'stifle a yawn'. Heat like this seems to smother the people inside it.",
      tip: 'Describe heat through its effects on people: sticking shirts, red faces, slow movement.',
    },
  'We ate dinner outside on a ⟨warm⟩ evening, with a light breeze and the scent of jasmine in the air.':
    {
      why: 'Balmy means pleasantly warm and gentle. Eating outside with a light breeze and the scent of jasmine is a comfortable, enjoyable evening, so the warmth is a pleasure.',
      not: {
        sweltering:
          'Sweltering means uncomfortably hot and sweaty. A light breeze and dinner outside suggest comfort.',
        scorching:
          'Scorching means burning hot, like the midday sun. An evening breeze is far gentler.',
        stuffy:
          'Stuffy means hot and airless, like a closed room. The diners are outdoors with a breeze.',
      },
      more: "Balm is a soothing ointment, so a balmy evening is one that soothes. The word's connotations are all comfort.",
      tip: 'Choose weather words that match the mood you want. Gentle warmth suits holidays and happy endings.',
    },
  'With every window shut, the classroom was so ⟨hot⟩ that half the class kept yawning.': {
    why: 'Stuffy means warm and lacking fresh air. Every window is shut, so the air has gone stale, and yawning is a sign of too little fresh air.',
    not: {
      scorching:
        'Scorching means burning hot, like strong sun. A closed classroom is warm and airless, not burning.',
      balmy: 'Balmy means pleasantly warm. Yawning, sleepy pupils are not enjoying the air.',
      tropical:
        'Tropical means hot and humid, like a rainforest. The problem here is stale air, not jungle heat.',
    },
    more: 'Stuffy can also describe people: a stuffy person is formal and old-fashioned. Both senses suggest a lack of fresh air.',
    tip: 'A precise word often names the cause. This one tells the reader the problem is the air, not the sun.',
  },
  'After the storm, the football pitch was so ⟨wet⟩ that the ball stopped dead in the puddles.': {
    why: 'Sodden means completely soaked through. Puddles standing on the pitch and a ball that stops dead show the ground cannot hold another drop.',
    not: {
      damp: 'Damp means slightly wet. A slightly wet pitch would not stop a ball in puddles.',
      moist:
        'Moist means slightly wet, often in a pleasant way, like a cake. Standing puddles are far wetter.',
      clammy: 'Clammy means damp and sticky, used for skin or air. A football pitch is not clammy.',
    },
    more: 'Wetness words come in strengths, from slightly wet to wet right through. Choosing the right strength makes description exact.',
    tip: 'Give the evidence for the strength of a word. Puddles and a ball stopping dead prove the pitch is soaked through.',
  },
  "Mum's lemon cake was ⟨wet⟩ in the middle, just as a good sponge should be.": {
    why: "Moist means slightly wet in a pleasant way. A good sponge cake should not be dry, so the sentence praises the cake's softness.",
    not: {
      soggy:
        'Soggy means unpleasantly wet and heavy. That would be a complaint, and the sentence praises the cake.',
      damp: 'Damp means slightly wet in an unpleasant way, like a cellar or a towel. It is not used to praise food.',
      clammy:
        'Clammy means damp and sticky, usually said of skin. It would make the cake sound unpleasant.',
    },
    more: 'This is one of the few wet words that can be a compliment, especially for cake. The same slight wetness in a towel is a complaint.',
    tip: 'Food reviews depend on connotation. The same cake can be described so that readers want a slice, or so that they push it away.',
  },
  "Before his speech, Dev's hands were ⟨wet⟩ with nerves.": {
    why: 'Clammy means unpleasantly damp and cold, especially of skin. Nerves before a speech make hands sweat, and clammy is the word for skin damp with fear or illness.',
    not: {
      soaked: 'Soaked means completely wet through. Nervous sweat makes hands damp, not drenched.',
      waterlogged:
        'Waterlogged means so full of water that no more can soak in, like a flooded pitch. Hands cannot be waterlogged.',
      dewy: 'Dewy means covered with fresh drops, like grass at dawn. It sounds fresh and lovely, not nervous.',
    },
    more: "Damp, cold hands are a classic sign of nerves. Writers use them to show a character's fear without saying 'he was afraid'.",
    tip: "Show, don't tell: damp hands, a dry mouth or a racing heart can reveal nerves more vividly than the word nervous.",
  },
  'The ⟨smell⟩ of fresh coffee drifted up the stairs and woke the whole house.': {
    why: 'An aroma is a pleasant, rich smell, especially of food or drink. Fresh coffee drifting up the stairs is a smell people enjoy, the kind that wakes a house in a good mood.',
    not: {
      stench: 'A stench is a strong, disgusting smell. Fresh coffee is a smell most people love.',
      reek: 'A reek is a strong, unpleasant smell. It would make the coffee sound revolting.',
      odour:
        'An odour is a smell, usually an unpleasant one. It is too flat and too negative for fresh coffee.',
    },
    more: 'Smell words carry strong connotations. Pleasant ones invite the reader in; unpleasant ones push the reader away.',
    tip: 'In descriptive writing, smell is the sense students forget. One precise smell word can make a scene feel real.',
  },
  'The ⟨smell⟩ from the overflowing bins made the whole street hold its breath.': {
    why: 'A stench is a strong, disgusting smell. Overflowing bins that make a whole street hold its breath give off a smell that is both powerful and foul.',
    not: {
      aroma: 'An aroma is a pleasant smell, usually of food. Overflowing bins smell foul.',
      fragrance:
        'A fragrance is a sweet smell, like flowers or perfume. Nobody holds their breath against a fragrance.',
      whiff:
        'A whiff is a faint smell that comes and goes. A whole street holding its breath shows the smell is strong and constant.',
    },
    more: 'Stench is linked to stink. Strong negative smell words are useful for building disgust, and for showing a place has been neglected.',
    tip: "Show the strength of a smell through people's reactions: holding breath, covering noses, crossing the road.",
  },
  'As the bus pulled away, a ⟨smell⟩ of diesel, so faint I barely noticed it, drifted in and was gone.':
    {
      why: "A whiff is a faint smell that is noticed for a moment and then gone. The diesel smell is 'so faint I barely noticed it' and quickly disappears, so it is only a brief trace.",
      not: {
        stench: 'A stench is a strong, disgusting smell. This one is barely noticed.',
        perfume:
          'A perfume is a sweet, pleasant smell, like roses or scent from a bottle. Diesel fumes are not sweet, and this smell is barely there.',
        fragrance:
          'A fragrance is a sweet, pleasant smell, like flowers. Diesel fumes are not sweet.',
      },
      more: "A whiff can be figurative too: 'a whiff of scandal' means a small hint of it. The word always suggests something slight.",
      tip: 'Smell words measure strength as well as pleasantness. Ask both questions before choosing one.',
    },
  'After a whole day of hiking, the boys ⟨ate⟩ their pizzas in minutes.': {
    why: 'Devoured means ate something quickly and hungrily. The boys have hiked all day and finish their pizzas in minutes, so they are eating with great hunger and speed.',
    not: {
      nibbled: 'Nibbled means ate in small bites. Small bites would not finish a pizza in minutes.',
      savoured:
        'Savoured means ate slowly to enjoy every bit. Finishing in minutes is the opposite of slow.',
      tasted:
        'Tasted means tried a little to see what something was like. The boys eat the whole pizza.',
    },
    more: 'This word is used for reading too: a person who reads books eagerly and fast can be said to eat them up. It always suggests hunger.',
    tip: 'Eating verbs show mood and character as well as speed. A hungry hero and a nervous guest eat in very different ways.',
  },
  'Feeling sick with nerves, Asha ⟨ate⟩ a corner of her toast and left the rest.': {
    why: 'Nibbled means ate in tiny bites. Asha feels sick with nerves, eats only a corner of her toast and leaves the rest, so she takes the smallest possible bites.',
    not: {
      devoured: 'Devoured means ate quickly and hungrily. Asha leaves most of her toast.',
      gobbled: 'Gobbled means ate fast and greedily. Someone sick with nerves is not greedy.',
      savoured:
        'Savoured means ate slowly, enjoying every bite. Asha is too nervous to enjoy anything.',
    },
    more: 'Small bites suggest a small appetite, caution or nerves. Mice and rabbits eat this way, which is why the word feels small and timid.',
    tip: "Show a character's feelings through how they eat. Appetite rises and falls with mood.",
  },
  'Eyes closed, Grandpa ⟨ate⟩ the first strawberry of summer, as if it might be his last.': {
    why: 'Savoured means ate slowly, enjoying every moment of the taste. Grandpa closes his eyes and treats the first strawberry of summer as if it might be his last, so he makes the pleasure last.',
    not: {
      gobbled: 'Gobbled means ate fast and greedily. Closed eyes show slow, careful enjoyment.',
      munched:
        'Munched means chewed steadily and noisily. That is everyday eating, not a treasured moment.',
      gulped:
        'Gulped means swallowed quickly in large mouthfuls. Grandpa is making the moment last.',
    },
    more: 'Savour comes from a word for taste, and it can be used for experiences too: you can savour a victory or a quiet moment.',
    tip: 'Slow eating verbs can show gratitude, memory or love. They slow the scene down so the reader shares the moment.',
  },
  'After weeks of saving her pocket money, Hana finally ⟨got⟩ the bike she wanted.': {
    why: 'Bought means got something by paying for it. Hana saved her pocket money for weeks, so she paid for the bike with her own savings.',
    not: {
      won: 'Won means got something as a prize. Saving money is not a competition.',
      borrowed:
        "Borrowed means took something to give back later. Hana's bike is hers to keep, paid for with her savings.",
      inherited:
        'Inherited means received something from someone who has died. Hana paid for the bike herself.',
    },
    more: 'Got is one of the most overused words in English. Ask how something was got: paid for, given, won or found.',
    tip: "Replace 'got' in your writing whenever you can. The precise verb usually adds information for free.",
  },
  'Our class ⟨got⟩ a certificate for the best attendance in the school.': {
    why: 'Received means was given something. The class is given a certificate as a reward for the best attendance.',
    not: {
      borrowed: "Borrowed means took something to give back. A certificate is the class's to keep.",
      caught:
        'Caught means got hold of something moving, or got an illness. Neither fits a certificate.',
      fetched:
        'Fetched means went to get something and brought it back. The certificate is given to the class, not collected on an errand.',
    },
    more: 'This is a formal, polite word, which suits awards and letters. Remember the spelling: e before i after c.',
    tip: "Formal events call for formal verbs. A report of an award ceremony sounds wrong with 'got'.",
  },
  'On the walk home in the downpour, Ella ⟨got⟩ a terrible cold.': {
    why: 'Caught means became ill with something. English uses catch for getting most everyday illnesses, so Ella catches a cold on the way home.',
    not: {
      earned: 'Earned means got something in return for work. Nobody works for a cold.',
      received:
        'Received means was given something, often formally, like a letter. An illness is not sent or given like a parcel.',
      won: 'Won means got a prize. A cold is no prize.',
    },
    more: 'Colds are caused by viruses, not by rain itself, though people have long linked the two. English still talks about colds as if they were thrown at us.',
    tip: 'Learn the verbs that go with nouns, called collocations, such as pay attention and make a mistake. Getting them right makes writing sound natural.',
  },
  'It took three readings before I ⟨got⟩ the joke.': {
    why: 'Grasped means understood something, especially something difficult. It took three readings, so understanding the joke took effort, and grasped describes getting hold of an idea at last.',
    not: {
      received:
        'Received means was given something. You can be sent a joke, but here the point is understanding it.',
      fetched: "Fetched means went and brought something back. A joke's meaning is not fetched.",
      earned: 'Earned means got as a reward for work. Understanding is not a reward.',
    },
    more: 'Grasp means to hold firmly, and English often treats ideas as objects you hold: you can hold an opinion or get hold of a point.',
    tip: 'Precise thinking verbs, such as grasp, recognise and deduce, improve analytical writing.',
  },
  'The seagull ⟨took⟩ the chip right out of my hand and flew off with it.': {
    why: 'Snatched means grabbed something quickly and roughly. The seagull takes the chip out of a hand without warning and flies away, a sudden, rough grab.',
    not: {
      accepted:
        'Accepted means took something that was offered. Nobody offered the seagull the chip.',
      borrowed: 'Borrowed means took something to give back. The seagull will not return the chip.',
      collected:
        "Collected means gathered or picked up, calmly and on purpose. A seagull's sudden grab is not calm.",
    },
    more: 'This word suggests speed, surprise and a little rudeness. It suits thieves, seagulls and anyone who grabs without asking.',
    tip: 'A verb can show manners. A rough grabbing verb tells the reader the seagull was rude without saying so.',
  },
  'The head teacher ⟨gave⟩ the cup to the winning team at the end-of-year assembly.': {
    why: 'Presented means gave something formally, often at a ceremony. A head teacher handing a cup to the winners in front of the school at assembly is a formal ceremony.',
    not: {
      donated:
        'Donated means gave something to help a cause, such as a charity. A trophy for winners is a prize, not a donation.',
      bequeathed:
        'Bequeathed means left something to someone in a will. The head teacher is alive and handing over a trophy.',
      surrendered:
        'Surrendered means gave something up unwillingly, often to an enemy. A head teacher gives a trophy gladly.',
    },
    more: 'Formal occasions have formal verbs. At ceremonies, prizes and awards are handed over with words that sound as grand as the occasion.',
    tip: "Match the verb to the occasion. 'Gave' sounds flat in a report of a ceremony.",
  },
  'Every Friday the bakery ⟨gives⟩ its unsold bread to the night shelter.': {
    why: 'Donates means gives something freely to help a good cause. The bakery gives its unsold bread to a night shelter every week, a charitable gift to people who need it.',
    not: {
      lends: 'Lends means gives something that must be returned. Bread is eaten, not returned.',
      awards: 'Awards means gives a prize for an achievement. The shelter has not won anything.',
      presents:
        'Presents means gives something formally, at a ceremony. A weekly bread delivery is not a ceremony.',
    },
    more: 'Donate and donor come from the Latin word for give. People give money, blood, time or food to good causes this way.',
    tip: 'In persuasive writing about charity, a giving verb with purpose behind it shows generosity.',
  },
  'Can you ⟨give⟩ your calculator to me until the end of the lesson?': {
    why: "Lend means give something for a short time, expecting it back. 'Until the end of the lesson' shows the calculator will be returned, so it is a loan.",
    not: {
      donate: 'Donate means give something away to help a cause. The calculator is coming back.',
      award: 'Award means give as a prize. Nobody has won the calculator.',
      present:
        'Present means give formally, at a ceremony. Passing a calculator in class is not a ceremony.',
    },
    more: 'Lend and borrow are a pair that people mix up. You lend something to someone; you borrow something from someone.',
    tip: "In standard English, 'Can you lend me a pen?' is correct, not 'Can you borrow me a pen?'",
  },
  'When the football hit it, the greenhouse window ⟨broke⟩, and we spent an hour sweeping up glass.':
    {
      why: 'Shattered means broke suddenly into many small pieces. Sweeping up glass for an hour shows the window burst into countless fragments.',
      not: {
        snapped:
          'Snapped means broke cleanly in two, like a stick. An hour of sweeping means far more than two pieces.',
        dented:
          'Dented means pushed in without breaking, like a car door. A dent leaves no glass to sweep up.',
        crumpled: 'Crumpled means crushed into folds, like paper. Glass breaks; it does not fold.',
      },
      more: 'This word is also used for feelings and hopes: a dream that falls apart can lie in pieces, like broken glass.',
      tip: 'Breaking verbs can be used figuratively for emotions. Confidence that breaks into pieces sounds far worse than confidence that goes.',
    },
  'Left out in the rain, the old biscuits ⟨broke⟩ between our fingers.': {
    why: 'Crumbled means broke into small, soft pieces. Biscuits left in the rain go soft, so they fall apart into crumbs when touched.',
    not: {
      shattered: 'Shattered means broke into sharp pieces, like glass. Soggy biscuits are soft.',
      snapped: 'Snapped means broke cleanly with a sharp sound. Soft, damp biscuits do not snap.',
      burst:
        'Burst means broke open suddenly from pressure inside, like a balloon. Biscuits have nothing inside to burst.',
    },
    more: 'This word is linked to crumb. Buildings, cliffs and empires can fall apart this way too: slowly, piece by piece.',
    tip: 'Match the breaking verb to the material: glass, sticks, biscuits and balloons each break in their own way.',
  },
  'The branch ⟨broke⟩ with a crack like a pistol shot, and the swing landed in the grass.': {
    why: "Snapped means broke suddenly and cleanly with a sharp sound. A branch breaking 'with a crack like a pistol shot' is one sudden break with a loud bang.",
    not: {
      crumbled:
        'Crumbled means fell apart slowly into small pieces. The branch breaks all at once.',
      shattered:
        'Shattered means broke into many small pieces, as glass does. A branch breaks in two.',
      dented: 'Dented means pushed in without breaking. The branch breaks completely.',
    },
    more: 'Snap is onomatopoeia, and so is crack. Both imitate the sudden sound of something brittle breaking.',
    tip: 'Pair a breaking verb with a sound to make a moment vivid: the reader hears it as well as sees it.',
  },
  'Without checking, Liam ⟨thought⟩ the shop would be open on a Sunday, and wasted the trip.': {
    why: 'Assumed means believed something was true without checking. Liam did not check the opening times and wasted the trip, so his belief had no proof behind it.',
    not: {
      remembered:
        'Remembered means brought back to mind something you knew. Liam did not know; he guessed wrongly.',
      doubted:
        'Doubted means thought something was unlikely. Liam expected the shop to be open, the opposite of doubt.',
      proved:
        'Proved means showed something was true with evidence. Liam checked nothing, so he proved nothing.',
    },
    more: 'An assumption is a belief taken for granted. In exam answers, it helps to spot the assumptions a writer or a character makes.',
    tip: 'Use this verb when someone acts on a belief they never tested. It quietly suggests the belief was wrong.',
  },
  'The detective ⟨thought⟩ the butler had lied, but she could not yet prove it.': {
    why: "Suspected means believed something was probably true without proof. The detective thinks the butler lied but 'could not yet prove it', which is exactly what a suspicion is.",
    not: {
      doubted:
        'Doubted means thought something was probably untrue. The detective believes the butler did lie.',
      recalled: 'Recalled means remembered. The detective is forming a theory, not remembering.',
      established: 'Established means proved beyond doubt. The detective has no proof yet.',
    },
    more: 'Suspicion is at the heart of detective stories. The person under suspicion is called the suspect, and the plot moves from suspicion to proof.',
    tip: 'Thinking verbs show how sure a character is. Choose the one that matches the evidence they have.',
  },
  'Once the truth came out, Tom ⟨thought⟩ that he should have trusted his sister.': {
    why: 'Realised means came to understand something clearly. Once the truth has come out, Tom knows what really happened, so he now sees what he missed at the time: he should have trusted his sister.',
    not: {
      suspected:
        'Suspected means believed something without proof. The truth has come out, so Tom has his proof: he is no longer guessing.',
      assumed:
        "Assumed means took something for granted without checking. Tom's view comes from the truth he has just learnt, not from taking anything for granted.",
      doubted:
        'Doubted means thought something was unlikely. Once the truth is out, Tom is certain, not unsure: doubt belongs to the time before it came out.',
    },
    more: 'British English spells this word with an s, though American English uses z. Moments of sudden understanding often mark the turning point of a story.',
    tip: 'When a character comes to understand something, show the change: what they believed before and what they understand now.',
  },
  'Remembering the joke from the night before, Grandpa ⟨laughed⟩ into his newspaper.': {
    why: 'Chuckled means laughed quietly, often to yourself. Grandpa is remembering a joke and laughs into his newspaper, a private, gentle laugh rather than a loud one.',
    not: {
      cackled:
        'Cackled means laughed in a harsh, shrill way, like a witch. A fond memory gives a warm laugh.',
      guffawed:
        'Guffawed means laughed loudly and heartily. Laughing into a newspaper is quiet and private.',
      shrieked:
        'Shrieked means made a high, piercing cry. Nothing about a remembered joke behind a newspaper is piercing.',
    },
    more: 'Laughing verbs show volume and feeling. A quiet laugh to yourself can show warmth and fond memories.',
    tip: 'Choose laugh verbs that reveal character. A gentle grandpa and a cruel villain laugh in very different ways.',
  },
  'When Nikhil tripped on the stage steps, two boys at the back ⟨laughed⟩ behind their hands.': {
    why: "Sniggered means laughed in a sly, unkind way, often half hidden. The boys laugh behind their hands at someone else's embarrassment, which is mocking and sneaky.",
    not: {
      chuckled:
        "Chuckled means laughed quietly in a warm, good-natured way. Laughing at someone's fall from behind your hands is not good-natured.",
      guffawed:
        'Guffawed means laughed loudly and openly. Laughing behind their hands is hidden, not loud.',
      chortled:
        'Chortled means laughed with gleeful delight, openly. The boys hide their laughter, which suggests they know it is unkind.',
    },
    more: 'This laugh carries disapproval: it suggests the laughter is mean. A writer who uses it wants the reader to dislike the laughers.',
    tip: 'Hidden laughter can show cruelty. In analysis, point out how one verb shapes our view of a character.',
  },
  'The witch in the pantomime ⟨laughed⟩ as she stirred her bubbling pot.': {
    why: 'Cackled means laughed in a loud, harsh, shrill way. Stage witches stirring bubbling pots traditionally laugh like this, a sound that is both funny and sinister in a pantomime.',
    not: {
      giggled:
        'Giggled means laughed in a light, silly way, often from nerves. A witch over her cauldron is wicked, not silly.',
      chuckled:
        'Chuckled means laughed quietly and warmly. A pantomime witch is loud and menacing.',
      tittered:
        'Tittered means laughed in a short, nervous or embarrassed way. A witch enjoying her spell is not nervous.',
    },
    more: 'This word first described the noise of a hen, and later a harsh human laugh. Its hard c sounds give it a scratchy edge.',
    tip: 'Stock characters have stock sounds. You can use them, or surprise the reader by breaking them.',
  },
  "'I told you I'd win,' said Zara, with a ⟨smile⟩ that made her brother want to scream.": {
    why: 'A smirk is a self-satisfied, gloating smile. Zara reminds her brother she predicted her win, and her smile makes him want to scream, so it is the annoying smile of someone gloating.',
    not: {
      beam: 'A beam is a broad, happy smile that warms everyone. It would not make anyone want to scream.',
      simper:
        'A simper is a silly, affected smile, trying to please. Zara is not trying to please her brother.',
      grimace:
        'A grimace is a twisted face of pain or disgust. Zara is pleased with herself, not pained.',
    },
    more: "Smile words carry judgements. Some tell the reader the smiler is pleased at someone else's expense; others suggest warmth or cheek.",
    tip: 'Use a self-satisfied smile for gloating characters. It shows the reader how others feel about them.',
  },
  'When the baby took her first steps, Dad ⟨smiled⟩ so widely that his face could barely contain it.':
    {
      why: "Beamed means smiled broadly with obvious happiness. Dad's smile at the baby's first steps is so wide his face can barely contain it, which shows pride and joy shining out.",
      not: {
        smirked:
          "Smirked means smiled smugly. A father watching his baby's first steps is joyful, not smug.",
        sneered:
          'Sneered means smiled or spoke with scorn. There is nothing scornful about a proud father.',
        simpered: "Simpered means smiled in a silly, affected way. Dad's joy is real, not put on.",
      },
      more: 'A beam is also a ray of light, so this kind of smile seems to shine. The word links happiness and light.',
      tip: 'For moments of pure joy, use smile words that sound bright and open.',
    },
  'Lost in the supermarket, the toddler ⟨cried⟩ so loudly that shoppers came running from every aisle.':
    {
      why: 'Wailed means cried with a long, loud, high sound. The lost toddler cries so loudly that shoppers come running from every aisle, so the crying must fill the supermarket.',
      not: {
        whimpered:
          'Whimpered means cried softly with small sounds. Soft crying would not bring shoppers running.',
        sniffled:
          'Sniffled means cried quietly with a runny nose. That is far too quiet to fill a supermarket.',
        sighed: 'Sighed means breathed out slowly with sadness or tiredness. A sigh is not crying.',
      },
      more: 'Crying verbs differ in volume and in feeling. Loud, long crying suggests panic or grief; soft crying suggests hurt or fear held back.',
      tip: "Show the effect of a sound on others, as 'shoppers came running' does. It proves how loud it was.",
    },
  'Shut in the kitchen for the night, the puppy ⟨cried⟩ at the door.': {
    why: 'Whimpered means made small, weak crying sounds. A puppy shut away from its owners cries softly and pitifully, as young animals do when they feel alone.',
    not: {
      sobbed:
        "Sobbed means cried with loud, gasping breaths. It describes human crying, not a puppy's.",
      wept: 'Wept means cried tears, a human and often grown-up word. A puppy makes small sounds instead.',
      blubbered:
        "Blubbered means cried noisily and messily, like an upset child. It is a human word, and a puppy's crying is small.",
    },
    more: 'This word suits anything small and frightened: a puppy, a baby, a hurt child. The word itself sounds soft and pitiful.',
    tip: 'Animal sounds can create sympathy. A small, sad sound at a door makes the reader want to open it.',
  },
  'The judges agreed it was a ⟨good⟩ performance that left the audience speechless.': {
    why: 'Remarkable means so impressive that people notice it and talk about it. A performance that leaves the whole audience speechless must be far above ordinary.',
    not: {
      competent:
        'Competent means done well enough, with skill but no brilliance. Competence does not leave an audience speechless.',
      respectable:
        'Respectable means fairly good, deserving some respect. It is polite praise, too mild for a stunned audience.',
      promising:
        'Promising means showing signs of future success. It praises potential, but this performance has already amazed people.',
    },
    more: "Praise words come in strengths. A judge who says 'good enough' and one who says 'unforgettable' mean very different things.",
    tip: 'In an essay, match the strength of your praise to the evidence. Save strong words for strong effects.',
  },
  "The new café's coffee is ⟨good⟩, but it's nothing special.": {
    why: "Decent means good enough, satisfactory but not impressive. The speaker adds that the coffee is 'nothing special', so the praise is only moderate.",
    not: {
      outstanding:
        "Outstanding means excellent, far better than most. 'Nothing special' rules out any word of high praise.",
      exceptional:
        'Exceptional means unusually good. Something exceptional is special, which the sentence denies.',
      superb: 'Superb means of the very highest quality. That is the opposite of nothing special.',
    },
    more: "Moderate praise is useful and honest. Words like fair and reasonable say 'acceptable' without exaggerating.",
    tip: 'In reviews and evaluations, moderate words make you sound fair. Not everything has to be amazing or awful.',
  },
  'Stealing from people too frail to defend themselves is a truly ⟨bad⟩ act.': {
    why: 'Wicked means morally evil, seriously wrong. Stealing from people too frail to defend themselves takes advantage of the weakest, so the act is cruel and deeply wrong.',
    not: {
      naughty:
        "Naughty describes a child's misbehaviour, such as not doing as told. It is far too mild for stealing from the frail.",
      mischievous:
        'Mischievous means playfully troublesome. Stealing from vulnerable people is not playful.',
      faulty:
        'Faulty means not working properly, like a machine. An act can be wrong, but it is not faulty.',
    },
    more: 'Bad covers everything from a broken toaster to a terrible crime. Moral words say the badness is a matter of right and wrong.',
    tip: 'Use strong moral words only for serious wrongs. If everything is evil, nothing is.',
  },
  'The weather was so ⟨bad⟩ that the match had to be cancelled.': {
    why: 'Atrocious means extremely bad or unpleasant. Weather bad enough to cancel a match must be severe, so a very strong word for terrible conditions fits.',
    not: {
      dull: 'Dull means grey and sunless. Grey skies are disappointing, but they do not cancel a match.',
      changeable:
        'Changeable means likely to change, sunny one moment and wet the next. That is not bad enough to cancel a match.',
      mild: 'Mild means gentle and not extreme. Mild weather is perfect for a match.',
    },
    more: 'Atrocious comes from a Latin word meaning fierce or cruel. Today it is used for anything shockingly bad, from weather to handwriting.',
    tip: 'Use the result as evidence for the strength of a word. A cancelled match proves the weather was extreme.',
  },
  'There was something ⟨funny⟩ about the locked room that did not feel right.': {
    why: "Peculiar means odd or hard to explain. Something about the locked room 'did not feel right', so funny here means odd and unsettling, not amusing.",
    not: {
      amusing:
        'Amusing means making people smile. Nothing about a room that feels wrong is entertaining.',
      hilarious:
        'Hilarious means extremely funny. A room that does not feel right is unsettling, not laughable.',
      witty: 'Witty means clever and quick with words. A room cannot make clever jokes.',
    },
    more: "Funny has two meanings: amusing, and odd. People sometimes ask 'funny ha-ha or funny peculiar?' to check which is meant.",
    tip: 'When a word has two meanings, use a precise one so the reader cannot misread you.',
  },
  'Through the ⟨clear⟩ water you could see every pebble on the riverbed.': {
    why: 'Transparent means able to be seen through. You can see every pebble on the riverbed, so the water lets light and sight pass straight through it.',
    not: {
      cloudless:
        'Cloudless describes a clear sky with no clouds. Water is not described by its clouds.',
      obvious:
        'Obvious means easy to understand or notice, as a clear answer is. The sentence is about seeing through water, not understanding.',
      logical: 'Logical means sensible and reasoned, as a clear argument is. Water cannot reason.',
    },
    more: 'Clear has many meanings: see-through, easy to understand, free of cloud, free of obstacles. The noun it describes usually decides which.',
    tip: 'When you replace a word with several meanings, check which meaning the sentence uses before choosing.',
  },
  "The teacher's explanation was ⟨clear⟩: even beginners understood it at once.": {
    why: "Lucid means expressed clearly and easy to understand. Even beginners understood the teacher's explanation at once, so its clearness is about understanding.",
    not: {
      audible:
        'Audible means loud enough to be heard. Being heard is not the same as being understood, and beginners understood it.',
      cloudless: 'Cloudless describes a sky with no clouds. An explanation has no sky.',
      empty:
        'Empty is a meaning of clear for a space, like a clear desk. An empty explanation would say nothing.',
    },
    more: 'Lucid comes from the Latin for light: a lucid explanation lets light into a difficult idea.',
    tip: "This is a strong word for praising a writer's style in an essay: 'the argument is lucid and well organised'.",
  },
  'She wore a dress so ⟨nice⟩ that it turned heads as she entered the hall.': {
    why: 'Elegant means graceful and stylish. The dress turns heads as she enters, so it is admired for its look, and elegant is a word for refined beauty.',
    not: {
      sensible: 'Sensible means practical and wise. Sensible clothes rarely turn heads.',
      cosy: 'Cosy means warm and comfortable. Comfort is not what makes people turn to look.',
      practical:
        'Practical means useful and suited to a job. Heads turn for style, not usefulness.',
    },
    more: 'Nice once meant foolish, then fussy, and only later pleasant. Words drift in meaning over centuries, which is why old texts can surprise us.',
    tip: 'Replace nice with a word that names the quality you mean: style, kindness or comfort each has its own word.',
  },
  'The milk had a ⟨bad⟩ smell, so she poured it down the sink.': {
    why: 'Sour means having the sharp, acid smell and taste of milk that has gone off. Milk turns sour as it spoils, which is why she pours it away.',
    not: {
      stale:
        'Stale means no longer fresh, used for bread, biscuits or air. Milk that has gone off is described differently.',
      mouldy:
        'Mouldy means covered in mould, like old bread or cheese. Spoiled milk usually smells sharp and acid before any mould appears.',
      musty:
        'Musty means smelling damp and old, like a cellar or an old book. Milk does not smell of damp.',
    },
    more: "Food words for 'gone off' are specific: bread goes hard, butter turns rancid, fruit rots, and each has its own smell.",
    tip: 'Smell is the most neglected sense in student writing. A precise smell word brings a scene to life.',
  },
  'He spoke before the hour bell sounded, which it now did with a deep, ⟨dull⟩, hollow, melancholy ONE.':
    {
      why: "Muffled means deadened, so a sound is heavy and not clear. The bell strikes 'deep' and 'hollow', and a dull sound in that list is one with no bright ring to it.",
      not: {
        boring:
          'Boring is what dull means for a lesson or a film. A bell striking the hour is described here by how it sounds.',
        overcast:
          "Overcast is what dull means for the sky, grey with cloud. A bell's sound has no clouds.",
        blunt:
          'Blunt is what dull means for a blade that will not cut. The sentence describes a sound, not an edge.',
      },
      more: 'Dickens piles up adjectives here: deep, dull, hollow, melancholy. Each adds to the gloomy, heavy sound as Scrooge waits for the first spirit.',
      tip: 'When a writer lists adjectives, read them together: each one shades the meaning of the others.',
    },
  "I'll be ⟨plain⟩ with you, my friend Pip.": {
    why: 'Frank means honest and direct, saying exactly what you think. Mr Jaggers is warning Pip that he will speak openly, without softening anything.',
    not: {
      simple:
        'Simple is what plain means for food or clothes, without extras. Jaggers is describing how he will speak, not what he will be like.',
      ordinary:
        "Ordinary is what plain means in 'plain folk'. Being ordinary with someone makes no sense here; being honest does.",
      undecorated:
        'Undecorated is what plain means for a wall or a dress, with no pattern. Jaggers is talking about how openly he will speak.',
    },
    more: "To be plain with someone is to speak plainly: clearly and without hiding anything. Here Jaggers, a lawyer, is about to refuse to answer one of Pip's questions.",
    tip: "Phrases such as 'be plain with you' warn the listener that open, honest talk is coming.",
  },
  'She sang, and her voice flowed in a ⟨rich⟩ cadence, swelling or dying away, like a nightingale of the woods.':
    {
      why: "Resonant means full, deep and warm in sound. The voice 'flowed', 'swelling or dying away' like a nightingale's song, so rich here describes a sound that is full and beautiful.",
      not: {
        wealthy:
          'Wealthy is what rich means for a person with a lot of money. A voice cannot own anything.',
        fertile:
          'Fertile is what rich means for soil that grows crops well. The sentence is about singing, not soil.',
        fattening:
          'Fattening is what rich means for heavy, creamy food. A voice is heard, not eaten.',
      },
      more: 'The creature hears this singing while hiding beside the cottage. Its beauty moves him, which shows that he responds to music and kindness as a human would.',
      tip: 'Words for sound are often borrowed from other senses: a warm tone, a bright note. Ask what each borrowing suggests.',
    },
  'The next day a ⟨keen⟩ wind brought fresh and blinding falls; by twilight the valley was drifted up and almost impassable.':
    {
      why: "Biting means painfully cold, as if it bites the skin. The wind brings fresh falls of snow that leave the valley 'almost impassable', so a keen wind here is sharp, cold and cutting.",
      not: {
        willing:
          'Willing is close to what keen means for a person who is eager to do something. A wind cannot want anything.',
        'sharp-witted':
          'Sharp-witted is what keen means for a quick mind. The sentence describes weather, not intelligence.',
        competitive:
          'Competitive is what keen means for prices low enough to beat rivals. Wind has no price.',
      },
      more: 'Keen can describe a blade that cuts well. A keen wind cuts in a similar way, which is why the word suits cold that stings the face.',
      tip: 'If a familiar word seems odd in an old text, try its other meanings. Older writers often use senses we rarely meet today.',
    },
  'His eyes were set very deep in his head, and were disagreeably ⟨sharp⟩ and suspicious.': {
    why: "Watchful means alert and noticing everything. The man's eyes are 'suspicious' as well as sharp, so they are eyes that watch people closely, which Pip finds unpleasant.",
    not: {
      pointed: 'Pointed is what sharp means for a pencil or a knife. Eyes have no point.',
      acidic: 'Acidic is what sharp means for a sour taste, like lemon. Eyes are not tasted.',
      fashionable:
        "Fashionable is what sharp means in 'a sharp suit'. The sentence is about how the eyes look at Pip, not style.",
    },
    more: 'The man Pip meets on the stairs here turns out to be Mr Jaggers, the lawyer. Sharp, suspicious eyes suit a man whose job is to find out the truth.',
    tip: 'Eyes in fiction often reveal character. Notice the adjectives a writer gives them.',
  },
  'It is a truth universally acknowledged, that a single man in possession of a ⟨good⟩ fortune, must be in want of a wife.':
    {
      why: 'Sizeable means fairly large. A fortune here is a sum of money, and the single man owns a good one, meaning a large amount of wealth, which is why, Austen jokes, everyone takes it for granted that he must want a wife.',
      not: {
        lucky:
          "Lucky is tempting, because good fortune can mean good luck. But a man 'in possession of' a fortune owns it: here fortune means money.",
        virtuous: 'Virtuous means morally good, as a good person is. Money cannot have morals.',
        skilful: 'Skilful means good at something, as a good cook is. A fortune has no skills.',
      },
      more: 'This is the famous first sentence of Pride and Prejudice. It is ironic: Austen means that families with daughters want a rich man to need a wife, not that he does.',
      tip: "Watch for words whose older meanings differ from today's. In nineteenth-century novels, a fortune is usually a sum of money.",
    },
  'I shall commit my thoughts to paper, it is true; but that is a ⟨poor⟩ medium for the communication of feeling.':
    {
      why: "Feeble means weak and not effective. Walton says writing his thoughts on paper is a poor way to share feelings: it cannot do the job as well as a friend's company.",
      not: {
        penniless:
          'Penniless is what poor means for a person with no money. A way of sharing feelings has no money to lack.',
        luckless:
          "Luckless is close to what poor means in 'poor thing', someone unlucky who deserves pity. Walton is judging how well writing works, not pitying it.",
        needy:
          'Needy is what poor means for people who lack money and food. Writing cannot go hungry.',
      },
      more: 'Robert Walton, the explorer who opens Frankenstein, longs for a friend who will understand him. His complaint about letters shows how lonely he is.',
      tip: 'Poor has three common meanings: without money, deserving pity, and low in quality. Test each in the sentence.',
    },
  'From that room, too, the daylight was completely excluded, and it had an airless ⟨smell⟩ that was oppressive.':
    {
      why: "An odour is a smell, usually an unpleasant one. The room is shut off from daylight and fresh air, and its smell is 'airless' and 'oppressive', heavy and hard to bear.",
      not: {
        aroma:
          'An aroma is a pleasant smell, usually of food or coffee. Nothing about an airless, oppressive room is pleasant.',
        fragrance:
          'A fragrance is a sweet, pleasant smell, like flowers or perfume. The sentence describes a smell that weighs on Pip.',
        tang: "A tang is a sharp, fresh smell or taste, like sea air or lemon. 'Airless' is the opposite of fresh.",
      },
      more: "This is a room in Miss Havisham's house, where the clocks have been stopped and nothing has changed for years. The stale smell shows a house shut away from life.",
      tip: 'Before choosing a smell word, decide whether the smell should attract or repel your reader.',
    },
  "I'm a bit ⟨hungry⟩; could I have an apple before dinner?": {
    why: "Peckish means slightly hungry. The speaker is only 'a bit' hungry and wants just an apple to last until dinner, so the hunger is mild.",
    not: {
      ravenous:
        'Ravenous means extremely hungry. Someone that hungry would want far more than an apple.',
      famished:
        "Famished means very hungry, as after a long time without food. 'A bit' and an apple show the hunger is slight.",
      starving:
        'Starving, in everyday speech, means very hungry. It is far too strong for someone who can wait for dinner after an apple.',
    },
    more: 'This is an informal British word, from the way birds peck at food in small amounts. Hunger words range from slight to extreme.',
    tip: "Match the strength of a feeling word to the situation. Exaggeration, such as 'starving' for a snack, can be funny in dialogue but sounds careless in description.",
  },
  'After two days lost on the moor, the walkers were ⟨hungry⟩ enough to eat anything put in front of them.':
    {
      why: "Ravenous means extremely hungry. Two days lost on the moor without food would leave anyone desperate to eat, ready to eat 'anything put in front of them'.",
      not: {
        peckish: 'Peckish means slightly hungry. Two days without food is far more than slight.',
        gluttonous:
          'Gluttonous means greedy, eating far more than you need. The walkers need food; they are not being greedy.',
        picky:
          'Picky means fussy about food. Walkers ready to eat anything are the opposite of picky.',
      },
      more: 'This word comes from an old French word meaning to seize by force, which suits hunger so strong that it grabs at anything.',
      tip: "Explain an extreme feeling with its cause. 'Two days lost on the moor' makes the strong word believable.",
    },
  'The critics called the play ⟨bad⟩, the worst they had seen in years: dull, wooden and far too long.':
    {
      why: 'Dreadful means extremely bad. The critics call it the worst play they have seen in years and list three serious faults, so they condemn it completely.',
      not: {
        mediocre:
          'Mediocre means only average, neither good nor bad. The worst play in years is far below average.',
        disappointing:
          'Disappointing means worse than hoped. It is too mild for the worst play the critics have seen in years.',
        uneven:
          'Uneven means good in places and weak in others. The critics find nothing good in it at all.',
      },
      more: 'Wooden, used of acting, means stiff and lifeless, like a puppet. Critics often pile up faults like this to show how strongly they dislike something.',
      tip: 'In a review, back up a strong judgement with specific faults. A list of three makes the verdict convincing.',
    },
  "The polite letter began, 'I am writing to ⟨ask for⟩ a refund for the broken kettle.'": {
    why: "Request means ask for something politely and formally. The letter is polite and formal, beginning 'I am writing to', so its asking is courteous, not forceful.",
    not: {
      demand:
        'Demand means ask forcefully, as if something is owed. A polite letter does not demand.',
      beg: 'Beg means ask desperately, as a favour. A formal letter about a kettle is calm, not desperate.',
      wheedle:
        'Wheedle means coax someone with flattery or charm. A formal letter states its request plainly.',
    },
    more: 'Formal letters have their own vocabulary. Choosing it shows you can match your register, your level of formality, to your reader.',
    tip: "In a formal letter, avoid chatty verbs like 'ask for' and 'get'. One formal verb changes the tone of a whole sentence.",
  },
  'A ⟨group⟩ of angry fans pushed through the barriers and onto the pitch.': {
    why: 'A mob is a large, disorderly crowd that may turn violent. Angry fans pushing through barriers onto the pitch are out of control, which is exactly what the word suggests.',
    not: {
      congregation:
        'A congregation is a group gathered for worship. Angry fans on a pitch are not at a service.',
      panel:
        'A panel is a small group chosen to judge or discuss, like the judges on a show. Fans storming a pitch were not chosen for anything.',
      troupe:
        'A troupe is a group of performers, such as dancers or actors. These fans are rioting, not performing.',
    },
    more: 'This word carries disapproval: it suggests danger and lack of control. A writer who uses it for a crowd is telling the reader to fear or condemn it.',
    tip: 'Collective nouns can carry judgement. Choosing between a crowd, a gathering and a more hostile word changes how the reader sees the people.',
  },
  'The ⟨group⟩ of tourists followed their guide quietly around the castle.': {
    why: 'A party is a group of people travelling or working together, as in a party of tourists or a search party. Tourists quietly following a guide are an organised group on a visit.',
    not: {
      mob: 'A mob is a disorderly, threatening crowd. Tourists quietly following a guide are orderly.',
      gang: 'A gang is a group of people, often criminals, who act together. Nothing suggests these tourists are up to no good.',
      pack: 'A pack is a group of animals such as wolves, or an insulting word for people behaving like them. These tourists are behaving well.',
    },
    more: 'This sense has nothing to do with celebrations. It comes from an old meaning, a part or a side, as in a political party.',
    tip: 'Collective nouns have their own uses: a panel of judges, a troupe of dancers. Using the right one sounds expert.',
  },
  'Uncle Ray is so ⟨talkative⟩ that a five-minute story takes him an hour to tell.': {
    why: 'Long-winded means talking for far too long, with too many words. A five-minute story taking an hour shows that Uncle Ray stretches everything out, which tires his listeners.',
    not: {
      eloquent:
        'Eloquent means speaking beautifully and persuasively, a compliment. A story that drags on for an hour is not eloquent.',
      articulate:
        'Articulate means able to express ideas clearly, a compliment. Clarity would make the story shorter, not longer.',
      'quick-witted':
        'Quick-witted means fast at thinking of clever replies. Uncle Ray is slow, not quick.',
    },
    more: 'Talkative itself is neutral. The words around it decide whether a speaker is admired for talking well or criticised for talking too much.',
    tip: 'In an essay, criticise a speech precisely: fault its length, its clarity or its argument, and say which.',
  },
  'The ⟨talkative⟩ storyteller held the whole hall spellbound for an hour.': {
    why: 'Eloquent means speaking fluently and movingly. The storyteller holds a whole hall spellbound for an hour, which shows great skill with words.',
    not: {
      'long-winded':
        'Long-winded means talking for too long and boring people. A spellbound audience is not bored.',
      gossipy:
        "Gossipy means fond of talking about other people's private lives. A storyteller holding a hall spellbound is performing, not gossiping.",
      rambling:
        'Rambling means wandering from point to point without direction. A spellbound audience shows the story keeps a tight hold.',
    },
    more: 'Speaking well was one of the great skills taught in ancient Rome, where speakers trained to move and persuade crowds. It is still the highest praise for a speaker.',
    tip: 'When you praise a speech or a writer, name the skill. It shows you know what makes speech effective.',
  },
  'Nadia was ⟨sure of herself⟩ in the interview, answering every question calmly and thanking the panel.':
    {
      why: 'Assured means calmly confident in a way that impresses others. Nadia answers every question calmly and politely thanks the panel, so her confidence comes with good manners.',
      not: {
        arrogant:
          'Arrogant means acting as if you are better than others. Thanking the panel is polite, not arrogant.',
        cocky:
          'Cocky means too confident in a cheeky, annoying way. Calm answers and good manners are not cocky.',
        boastful:
          'Boastful means talking proudly about yourself. Nadia simply answers calmly; she does not show off.',
      },
      more: 'Confidence words range from admiring to scornful. The difference often lies in how the confident person treats others.',
      tip: "In a reference or a speech, praise someone's confidence with an approving word; criticise it with a disapproving one.",
    },
  'Having never lost a game, Theo was ⟨sure of himself⟩ and stopped practising with the rest of the team.':
    {
      why: 'Complacent means so pleased with how things are that you stop trying. Theo has never lost, so he stops practising, which is the danger complacent warns of.',
      not: {
        assured:
          'Assured means calmly confident, a compliment. Giving up practice is careless, not admirable.',
        poised:
          'Poised means calm and graceful under pressure. Theo is not under pressure; he has stopped trying.',
        unassuming:
          'Unassuming means modest and not showing off. Someone who thinks he no longer needs practice is the opposite of modest.',
      },
      more: 'In stories, this kind of overconfidence often comes before a fall: the hero stops trying, and the underdog wins.',
      tip: 'Use this word for a character whose success makes them careless. It hints that trouble is coming.',
    },
  "The ballet teacher praised the dancer's ⟨thin⟩, graceful arms.": {
    why: "Slender means thin in an attractive, graceful way. The teacher praises the dancer's arms and calls them graceful, so the thinness is admired.",
    not: {
      skinny:
        'Skinny means very thin, often in an unflattering way. A teacher praising grace would not choose it.',
      scrawny: 'Scrawny means thin and weak-looking, a criticism. The sentence admires the dancer.',
      gaunt:
        'Gaunt means thin and bony from illness, hunger or worry. Nothing suggests the dancer is unwell.',
    },
    more: 'Thin has approving and disapproving relatives. Writers choose between them to show admiration, concern or contempt.',
    tip: "Describing people's bodies needs care. Choose words that show your attitude, and avoid unkind ones about real people.",
  },
  'After a winter with too little food, the stray cat looked ⟨thin⟩ and pitiful.': {
    why: 'Scrawny means thin and weak-looking, in a way that makes you feel sorry for it. A stray cat that has had too little food all winter looks underfed and pitiful.',
    not: {
      slender:
        'Slender means thin in an attractive, graceful way. A pitiful, hungry cat is not admired for its shape.',
      slim: 'Slim means pleasantly thin, a compliment. Hunger has made this cat look unwell, not pleasantly thin.',
      lean: 'Lean means thin and fit, with no spare fat, like an athlete. A starving cat is weak, not fit.',
    },
    more: 'The same thinness can sound healthy or unhealthy. Some words praise fitness; others show weakness and need.',
    tip: 'Animals in stories are often described to make us feel pity. The precise word for their thinness can do much of that work.',
  },
  "The baby's ⟨fat⟩ little cheeks made everyone want to pinch them.": {
    why: 'Chubby means plump in a round, appealing way, especially of babies and children. Cheeks that everyone wants to pinch are being admired fondly.',
    not: {
      portly:
        "Portly means rather fat, a polite word for an older, usually male, figure. It does not suit a baby's cheeks.",
      obese:
        "Obese is a medical word for being seriously overweight. It is wrong for a baby's cheeks, and unkind in a fond sentence.",
      stout:
        "Stout means rather fat and solid, used of adults' build. It does not describe a baby's soft cheeks.",
    },
    more: "Words for being fat range from fond to medical to insulting. Writers choose carefully, because the word shows the speaker's feelings.",
    tip: 'Fond words for appearance suit babies and pets. Use them to make a reader smile.',
  },
  'My great-grandmother is ⟨old⟩ now, but she still walks to the shops every morning.': {
    why: 'Elderly is a polite word for old, used of people. The sentence is respectful and admiring, since she still walks to the shops every morning, so a kind word suits it.',
    not: {
      antique:
        'Antique means old and valuable, used of objects like furniture. People are not antiques.',
      ancient:
        'Ancient means extremely old, from long ago, like a ruin. Used of a person it is a joke or an insult.',
      decrepit:
        'Decrepit means worn out and weak with age. A woman who walks to the shops every morning is not weak.',
    },
    more: 'Age words are chosen by what is old: people, objects or buildings. Each has polite and impolite forms.',
    tip: 'When writing about older people, choose respectful words. Polite language shows maturity in your writing.',
  },
  "The museum's ⟨old⟩ clock is worth thousands of pounds.": {
    why: 'Antique means old and valuable because of its age and quality, used of objects. A clock in a museum worth thousands of pounds is prized because it is old.',
    not: {
      elderly: 'Elderly is a polite word for old people. A clock is not a person.',
      decrepit:
        'Decrepit means worn out and falling apart. A clock worth thousands is precious, not broken down.',
      outdated:
        "Outdated means old-fashioned and no longer useful. The clock's age makes it more valuable, not less useful.",
    },
    more: 'This word comes from the Latin for old. Dealers often keep it for things at least a hundred years old.',
    tip: 'Old things can be described as valuable, worn out or old-fashioned. The word you choose tells the reader whether to admire them.',
  },
  'The ⟨old⟩ shed leaned to one side, its roof full of holes and its door hanging off.': {
    why: 'Rickety means poorly made or falling apart, likely to collapse. The shed leans to one side with holes in its roof and its door hanging off, so it could fall down at any moment.',
    not: {
      antique: 'Antique means old and valuable. A shed with holes in its roof is not prized.',
      vintage:
        'Vintage means old and of high quality, like a vintage car. This shed is falling apart.',
      venerable:
        'Venerable means old and deserving respect, like a venerable cathedral. A broken shed earns no respect.',
    },
    more: 'Some age words admire, some respect, and some show decay. A shed on the point of collapse can make a setting feel neglected or unsafe.',
    tip: 'In descriptive writing, choose details that prove the word: a leaning wall, holes in the roof, a hanging door.',
  },
  "The fox was ⟨clever⟩ enough to steal the farmer's eggs without ever being seen.": {
    why: 'Cunning means clever in a sly, sneaky way, used to trick or deceive. The fox steals eggs without ever being seen, so its cleverness is used for stealing, not for good.',
    not: {
      wise: 'Wise means having good judgement from knowledge and experience, a word of respect. Stealing eggs is crafty, not wise.',
      brainy:
        'Brainy means good at schoolwork and learning. A fox stealing eggs is sly, not studious.',
      talented:
        'Talented means naturally good at a skill, like music or sport. Stealing is not a talent the sentence admires.',
    },
    more: 'In fables and folk tales, the fox is the classic sly animal, always tricking others. Writers still use foxes to suggest slyness.',
    tip: 'Clever has approving and disapproving relatives. Ask whether the cleverness is used to help or to trick.',
  },
  'Grandma is ⟨clever⟩: she always knows the right thing to say when someone is upset.': {
    why: 'Wise means having good judgement and understanding, often gained over a lifetime. Grandma always knows the right thing to say to someone upset, which shows understanding of people, not tricks.',
    not: {
      cunning:
        'Cunning means clever in a sly, deceiving way. Comforting someone who is upset is kind, not sly.',
      sly: "Sly means sneaky and secretive. Grandma's words help people openly.",
      crafty:
        'Crafty means clever at getting what you want by tricks. Grandma is helping others, not herself.',
    },
    more: 'Wisdom is different from cleverness. A clever person may know many facts; a wise one knows how to use them, especially with people.',
    tip: 'In a character analysis, this is high praise. It suggests experience, kindness and good judgement together.',
  },
  'The empty house was ⟨strange⟩ at night, with footsteps sounding where nobody walked.': {
    why: 'Eerie means strange in a frightening, mysterious way. Footsteps where nobody walks in an empty house at night suggest something unexplained and possibly ghostly.',
    not: {
      quirky:
        'Quirky means strange in an appealing, charming way. Ghostly footsteps are frightening, not charming.',
      unusual: 'Unusual means not common. It is too calm a word for footsteps where nobody walks.',
      exotic:
        'Exotic means strange because it comes from a distant country. Nothing in the house is foreign.',
    },
    more: 'This word is a favourite of ghost stories and gothic novels. Its long vowel sounds seem to stretch out, like the silence in an empty house.',
    tip: 'To build suspense, choose words for strangeness that carry fear. They prepare the reader for something unexplained.',
  },
  'Our art teacher has a ⟨strange⟩ collection of teapots shaped like animals, which everyone loves.':
    {
      why: 'Quirky means strange in an appealing, unusual way. Teapots shaped like animals are odd, but everyone loves them, so the strangeness is charming.',
      not: {
        sinister:
          'Sinister means strange in a threatening, evil way. A collection everyone loves is not threatening.',
        ghostly:
          'Ghostly means like a ghost, pale and frightening. Animal teapots are fun, not frightening.',
        foreign:
          'Foreign means from another country, an old sense of strange. Nothing suggests the teapots come from abroad; they are simply unusual.',
      },
      more: 'Strangeness can be pleasant or unpleasant. Some words make oddness charming; others make it a warning.',
      tip: "Describe a character's unusual habits with an affectionate word if you want the reader to like them.",
    },
  'The puppy has been ⟨bad⟩ again: there are chewed slippers all over the hall.': {
    why: 'Naughty means badly behaved in a small, mischievous way, used of children and pets. Chewing slippers is annoying but harmless, so a mild word fits.',
    not: {
      wicked:
        'Wicked means morally evil. A puppy has no idea of right and wrong, and chewed slippers are not evil.',
      evil: "Evil means deeply wicked and harmful. It is far too strong for a puppy's mischief.",
      criminal: 'Criminal means against the law. Chewing slippers breaks no law.',
    },
    more: 'Words for bad behaviour come in strengths, from mischief to evil. Using a strong word for a small fault can be funny on purpose.',
    tip: "Exaggeration for comedy works only if the reader knows the right word. 'The criminal puppy' is a joke because it is too strong.",
  },
  'When the bus left without her, Priya was ⟨upset⟩ for a moment, but soon laughed about it.': {
    why: 'Disappointed means let down because something did not go as hoped. Missing the bus is a small setback, and Priya soon laughs about it, so a mild word fits.',
    not: {
      devastated:
        'Devastated means shocked and overwhelmed with grief. Missing a bus is not a tragedy, and she soon laughs.',
      distraught:
        'Distraught means so upset you cannot think clearly. Someone who soon laughs about it was never distraught.',
      inconsolable:
        'Inconsolable means so sad that nobody can comfort you. Priya comforts herself within moments.',
    },
    more: "Feeling words should match the size of the event. Writers sometimes use huge words for small problems to show a character's sense of drama, or for comedy.",
    tip: "Check the evidence before choosing a strong feeling word. 'Soon laughed about it' shows this feeling was small.",
  },
  "My little brother ⟨likes⟩ dinosaurs so much that he knows every one's name.": {
    why: "Adores means loves something very much. Knowing the name of every dinosaur takes enormous enthusiasm, so the brother's liking is a passion.",
    not: {
      tolerates:
        "Tolerates means puts up with something without liking it. Someone who learns every dinosaur's name more than puts up with them.",
      appreciates:
        "Appreciates means values something and understands its worth, a calm, grown-up word. It is too cool for a little boy's passion.",
      respects:
        'Respects means admires something for its qualities or importance. It describes admiration, not the excited love of a fan.',
    },
    more: 'Liking comes in strengths, from putting up with something to loving it. Strong words need strong evidence, such as learning every name.',
    tip: "Show the strength of a feeling through what a character does. Knowing every dinosaur's name proves a real passion.",
  },
  "Gran doesn't love my music, but she ⟨likes⟩ it when I play it in the car.": {
    why: "Tolerates means puts up with something you do not particularly like. Gran 'doesn't love' the music, but she lets it be played, so she accepts it without enjoying it.",
    not: {
      adores:
        "Adores means loves something very much. The sentence says Gran doesn't love the music.",
      cherishes:
        'Cherishes means holds something dear and protects it. Gran is putting up with the music, not holding it dear.',
      treasures:
        'Treasures means values something greatly, as if it were precious. Gran only puts up with it.',
    },
    more: 'Tolerance means putting up with things you do not like. It is a useful word in essays about characters who accept others without agreeing with them.',
    tip: "'Doesn't love ... but' sets up a contrast, and the word after 'but' must be weaker than love. Read the whole sentence before choosing.",
  },
  'The marathon runner ⟨drank⟩ the whole bottle of water in one go.': {
    why: "Gulped means swallowed quickly in large mouthfuls. A thirsty marathon runner drinking a whole bottle 'in one go' takes it down fast, without pausing.",
    not: {
      sipped: 'Sipped means drank in tiny mouthfuls. A whole bottle in one go is the opposite.',
      sampled:
        'Sampled means tried a little to see what it was like. The runner drinks the whole bottle.',
      savoured:
        'Savoured means drank or ate slowly to enjoy it. One go leaves no time to enjoy anything.',
    },
    more: 'Drinking verbs, like eating verbs, show speed and need. A desperate drinker and a polite one take their drinks in very different ways.',
    tip: "Thirst and hunger can be shown through how a character eats and drinks, without the words 'thirsty' or 'hungry'.",
  },
  'The lifeguard ⟨helped⟩ the swimmer who had been swept out to sea, bringing her back to the beach.':
    {
      why: 'Rescued means saved someone from danger. The swimmer has been swept out to sea, and the lifeguard brings her back to the beach, so he saves her from real danger.',
      not: {
        encouraged:
          'Encouraged means gave someone confidence with words. Words alone would not bring a swimmer back from the sea.',
        advised:
          'Advised means told someone what they should do. The swimmer needed saving, not advice.',
        cheered:
          'Cheered means shouted support. The lifeguard does more than shout: he brings her back.',
      },
      more: 'Help is a broad word. Precise verbs say how someone helped: by saving, guiding, teaching or comforting.',
      tip: 'In a story, the precise verb for help can make a character a hero. Saving someone from danger is far more than helping.',
    },
  'At dawn the scientists ⟨started⟩ their new rocket on its journey to Mars.': {
    why: 'Launched means sent something on its way, such as a rocket or a ship. A rocket setting off on its journey to Mars is launched into the sky.',
    not: {
      founded:
        'Founded means started an organisation, such as a school or a charity. A rocket is not an organisation.',
      opened:
        "Opened means started something for the public, such as a shop, or unfastened it. Neither fits a rocket's take-off.",
      triggered:
        'Triggered means set off a sudden reaction, such as an alarm. A rocket is sent on a journey, not set off like an alarm.',
    },
    more: 'Launch also works for products, books and campaigns, which are sent out into the world like ships from a harbour.',
    tip: 'Start is a flat verb. Ask what kind of start it is: a journey, an organisation, an event or a machine, and choose a verb for that.',
  },
  'Two friends ⟨started⟩ the charity in 1998 with fifty pounds and a borrowed van.': {
    why: 'Founded means started an organisation that is meant to last. Two friends setting up a charity with fifty pounds and a van created something new and lasting.',
    not: {
      kindled:
        'Kindled means lit a fire, or stirred up a feeling. It does not describe setting up an organisation.',
      triggered:
        'Triggered means set off a sudden reaction, like an alarm. Starting a charity takes planning, not a trigger.',
      ignited:
        'Ignited means set something on fire. It can be used for feelings, but not for starting a charity.',
    },
    more: 'The people who start an organisation are its founders. The same family of words gives us the foundations of a building.',
    tip: 'In history and in non-fiction, this is the precise verb for starting schools, cities, companies and charities.',
  },
  'The referee ⟨stopped⟩ the match early because of the lightning.': {
    why: 'Abandoned, in sport, means stopped before the end and not finished. Lightning makes play too dangerous, so the referee calls the match off part-way through.',
    not: {
      extended:
        'Extended means made longer, as with extra time. The lightning cut the match short instead.',
      completed:
        'Completed means finished in full. The match was cut short, so it was not completed.',
      postponed:
        'Postponed means put off to a later date before it starts. This match had already begun.',
    },
    more: 'Abandon usually means to leave something behind for ever, as in an abandoned house. In sport it has this special meaning of a game called off part-way.',
    tip: 'Some everyday words have special meanings in sport, law or science. Check which world a sentence belongs to.',
  },
  "The tailor ⟨changed⟩ Grandad's old trousers, taking in the waist so that they fitted perfectly.":
    {
      why: "Altered means changed something a little to make it better or make it fit. The tailor takes in the waist of Grandad's own trousers, so they are the same trousers, reshaped to fit.",
      not: {
        swapped:
          'Swapped means exchanged one thing for another. The tailor keeps the same trousers.',
        replaced:
          'Replaced means put something new in place of the old. The trousers are not thrown away; they are adjusted.',
        converted:
          'Converted means changed something into a different thing, like a barn into a house. The trousers are still trousers.',
      },
      more: 'Change has many precise forms: changing a little, changing completely, changing for another, changing into something else. Tailors call their work alterations.',
      tip: 'In writing about how a character changes, choose carefully: a small adjustment and a complete transformation are very different.',
    },
  'Squirrels ⟨keep⟩ nuts in autumn so that they have food through the winter.': {
    why: 'Hoard means gather and store a large supply, often hidden, for later. Squirrels collect nuts in autumn and hide them away to eat through the winter.',
    not: {
      guard:
        'Guard means watch over something to protect it. Squirrels hide their nuts and leave them, rather than standing guard.',
      crack:
        'Crack means break open, as squirrels do when they eat a nut. Cracking nuts in autumn would leave none for winter.',
      maintain:
        'Maintain means keep something in good working order, as you maintain a bike or a garden. Squirrels do not look after their nuts; they hide them away for later.',
    },
    more: 'This word can also describe people who keep far more than they need, often in secret. A dragon in a story sits on a pile of gold.',
    tip: 'Verbs of keeping can show character. Someone who stores up more than they need seems greedy or anxious; someone who shares seems generous.',
  },
  'In the cold, Ella ⟨shook⟩ in her thin coat.': {
    why: 'Shivered means shook slightly and quickly, especially from cold. Ella is out in the cold in a thin coat, so her body shakes to keep warm.',
    not: {
      wobbled:
        'Wobbled means moved unsteadily from side to side, like a jelly or a toddler. Cold makes people shake in small, quick movements, not wobble.',
      quaked:
        "Quaked means shook with fear, as in 'quaking in her boots'. Ella's shaking is caused by the cold.",
      juddered:
        'Juddered means shook violently and noisily, like a machine. It describes engines and lorries, not a cold person.',
    },
    more: 'Shaking verbs often name the cause: cold, fear, laughter or illness. The verb can tell the reader why without another word.',
    tip: 'Show cold through the body: shaking, blue lips, numb fingers. It makes the reader feel the weather.',
  },
  'Standing in front of the head teacher, Joe felt his knees ⟨shake⟩.': {
    why: 'Tremble means shake slightly because of fear, nerves or strong feeling. Standing in front of the head teacher makes Joe nervous, and his knees shake with it.',
    not: {
      shiver:
        'Shiver means shake from cold. Nothing suggests Joe is cold; standing before the head teacher makes him nervous.',
      judder: 'Judder means shake violently and noisily, like a machine. Knees do not judder.',
      vibrate:
        'Vibrate means move back and forth very fast, like a phone or a guitar string. It is a word for machines and sounds, not nervous knees.',
    },
    more: 'This is a classic sign of fear in stories. Hands, voices and knees can all shake with nerves, and each shows fear in a different way.',
    tip: "Use one physical sign of fear rather than naming the fear. Shaking knees let the reader feel Joe's nerves.",
  },
  "The frightened child ⟨held⟩ her mother's hand all the way through the dark tunnel.": {
    why: "Clutched means held something tightly, especially from fear or need. The child is frightened in a dark tunnel, so she grips her mother's hand hard and does not let go.",
    not: {
      cradled:
        'Cradled means held gently and protectively, like a baby in your arms. A frightened child grips; she does not cradle.',
      caressed:
        'Caressed means stroked gently and lovingly. Fear makes the child grip, not stroke.',
      grazed:
        'Grazed means touched lightly in passing, or scraped. The child holds on all the way through the tunnel.',
    },
    more: 'Holding verbs show feeling: a tight grip shows fear or desperation; a gentle hold shows care.',
    tip: 'In tense scenes, describe what characters hold and how. A tight grip can show fear without naming it.',
  },
  'The café was ⟨nice⟩: soft chairs, warm lamps and a cat asleep by the fire.': {
    why: 'Cosy means warm, comfortable and snug. Soft chairs, warm lamps and a cat asleep by the fire make the café feel safe and relaxing.',
    not: {
      spacious:
        'Spacious means having plenty of room. The sentence is about comfort and warmth, not size.',
      glamorous:
        'Glamorous means exciting and fashionable, full of sparkle. A sleeping cat by the fire is homely, not glamorous.',
      bustling:
        'Bustling means busy and full of activity. A cat asleep by the fire shows the café is calm.',
    },
    more: 'This is the British spelling; American English spells it with a z. The word suits small, warm, safe places.',
    tip: 'Build a mood from small details, as this sentence does with chairs, lamps and a cat, then name it with one word.',
  },
  'For three hours, in a small grey room, the police ⟨talked to⟩ the suspect.': {
    why: 'Questioned means asked someone many questions, often officially. Police spending three hours with a suspect in a small interview room are trying to find out what he knows.',
    not: {
      consulted:
        "Consulted means asked someone for expert advice. The police are not seeking the suspect's advice.",
      lectured:
        'Lectured means talked at length to teach or tell off. The police want answers, not to give a talk.',
      entertained: 'Entertained means amused someone. A police interview is not entertainment.',
    },
    more: 'Long, forceful police questioning has its own word, interrogation. Detective stories are full of such scenes.',
    tip: "Choose verbs that fit the setting. A police station, a classroom and a doctor's surgery each have their own kinds of talk.",
  },
  "It's only ⟨raining a little⟩, so we can still walk to school.": {
    why: "Drizzling means raining lightly in very fine drops. The rain is 'only' light, so it will not stop the walk to school.",
    not: {
      pouring: "Pouring means raining very heavily. Nobody would say it is 'only' pouring.",
      bucketing:
        'Bucketing is informal British for raining extremely hard, as if from a bucket. That would make walking miserable.',
      teeming:
        'Teeming means raining very heavily. It is far too strong for weather you can happily walk in.',
    },
    more: 'British English has an unusually rich vocabulary for rain, from light showers to downpours. Each word measures how hard it falls.',
    tip: 'Rain words measure strength. Use them to set the mood: light rain can be gentle; a downpour can be dramatic.',
  },
  'Furious, the toddler ⟨threw⟩ his toy train across the room.': {
    why: 'Hurled means threw something with great force. The toddler is furious, and anger puts all his strength behind the throw.',
    not: {
      tossed: 'Tossed means threw something lightly and casually. Fury is not casual.',
      lobbed:
        'Lobbed means threw something in a high, gentle curve, as in tennis. An angry throw is hard and fast.',
      passed:
        'Passed means handed or threw something to another person. The toddler is throwing in anger, not passing to anyone.',
    },
    more: "Throwing verbs show force and feeling. A gentle throw and a violent one tell the reader very different things about a character's mood.",
    tip: "Pair a feeling word with a matching action. 'Furious' and a forceful throw support each other.",
  },
  'The tower of bricks ⟨fell⟩ when the toddler pulled out the bottom one.': {
    why: "Toppled means fell over because it was unbalanced. Pulling out the bottom brick takes away the tower's support, so the whole tower tips and falls.",
    not: {
      sagged:
        'Sagged means sank or bent downwards in the middle, like an old mattress. The tower falls right over.',
      sank: 'Sank means went down slowly, as into water or soft ground. The tower falls quickly to the floor.',
      slumped:
        'Slumped means fell or sat heavily and loosely, like a tired person. It describes bodies, not bricks.',
    },
    more: 'Falling verbs describe how something falls: tipping over, collapsing inwards, sliding down. Tall things that tip over, such as towers and trees, have their own verb.',
    tip: 'This word can be used figuratively: a government or a champion can be brought down this way. It suggests something tall made to fall.',
  },
  'The cat ⟨jumped⟩ onto the mouse before it could reach its hole.': {
    why: "Pounced means jumped suddenly to attack or seize something. The cat leaps on the mouse before it can escape, a hunter's sudden spring.",
    not: {
      hopped:
        "Hopped means jumped lightly, often on one foot or like a rabbit. A hunting cat's leap is sudden and fierce.",
      vaulted:
        'Vaulted means jumped over something using your hands or a pole. The cat is landing on the mouse, not jumping over it.',
      skipped:
        'Skipped means moved with light, happy little jumps. A cat catching a mouse is hunting, not playing.',
    },
    more: 'This is a hunting word: cats, owls and foxes use it. It can be used for people too, as when someone seizes on a mistake.',
    tip: 'Animal verbs can make human characters seem predatory. A teacher who leaps on every error sounds like a cat with a mouse.',
  },
  'The children ⟨ran⟩ around the playground like puppies let off the lead.': {
    why: "Scampered means ran with quick, light, playful steps, like a small animal. Children running about 'like puppies let off the lead' are full of playful energy.",
    not: {
      plodded:
        'Plodded means walked slowly and heavily. Puppies let off the lead are anything but slow.',
      trudged:
        'Trudged means walked wearily, as if every step were hard. Playful children are full of energy.',
      lumbered:
        'Lumbered means moved heavily and clumsily, like a bear. Puppies are light and quick.',
    },
    more: "The simile 'like puppies let off the lead' tells you the kind of movement: quick, happy and in every direction at once.",
    tip: 'Comparisons with animals can make movement vivid. Choose an animal whose way of moving matches the mood.',
  },
  'When the dentist ⟨touched⟩ the sore tooth, Ali flinched.': {
    why: 'Prodded means poked something with a finger or a pointed object. The dentist presses on the sore tooth, and Ali flinches with the sudden pain.',
    not: {
      caressed:
        'Caressed means stroked gently and lovingly. A dentist checking a sore tooth is not being loving.',
      stroked:
        'Stroked means moved a hand gently along something, as you stroke a cat. Teeth are checked by pressing, not stroking.',
      patted:
        'Patted means tapped gently with a flat hand, as you pat a dog. A dentist does not pat a tooth.',
    },
    more: 'Touching verbs show force and purpose: a gentle touch shows care, a sharp poke shows testing or annoyance.',
    tip: 'Flinching is a useful reaction to describe: it shows pain or fear in a single movement.',
  },
  'After the long drive, Grandpa ⟨slept⟩ in his armchair for ten minutes before dinner.': {
    why: "Dozed means slept lightly for a short time. Ten minutes in an armchair before dinner is a short, light nap, not a deep night's sleep.",
    not: {
      hibernated:
        'Hibernated means spent the winter in a deep sleep, as hedgehogs do. Ten minutes in an armchair is far from a winter.',
      fainted:
        'Fainted means suddenly lost consciousness, often from shock or illness. Grandpa is simply tired after the drive.',
      yawned:
        'Yawned means opened the mouth wide because of tiredness. Yawning comes before sleep; it is not sleep itself.',
    },
    more: 'Sleep words measure depth and length: a nap, a light sleep, a deep sleep. Each suggests a different kind of tiredness.',
    tip: 'Use a light sleep word for short rests. It helps the reader picture the scene exactly.',
  },
  'Through the trees and the mist, the lights of a distant village ⟨shone⟩.': {
    why: 'Glimmered means shone faintly and unsteadily. Lights seen through trees and mist from far away reach the eye weakly, as small, wavering points.',
    not: {
      glared: 'Glared means shone harshly and brightly. Distant lights through mist are faint.',
      blazed:
        'Blazed means shone with fierce brightness. Mist and distance soften light, not strengthen it.',
      dazzled:
        'Dazzled means shone so brightly that it blinded. Faraway village lights cannot dazzle.',
    },
    more: "A faint light can also be a small sign of something, as in 'a glimmer of hope'. The figurative sense keeps the idea of a weak light.",
    tip: 'Light in the distance can suggest hope or safety in a story, especially for a lost or tired character.',
  },
  'All afternoon, bees ⟨made a noise⟩ among the lavender.': {
    why: 'Hummed means made a low, steady, continuous sound. Bees moving among flowers on a summer afternoon make a gentle, droning sound.',
    not: {
      clanged: 'Clanged means made a loud metallic ringing. Bees have no metal.',
      shrieked: 'Shrieked means made a high, piercing cry. Bees drone softly.',
      boomed:
        'Boomed means made a deep, loud sound, like a drum or a cannon. Bees are far too small and quiet.',
    },
    more: 'The repeated m sounds in this word imitate the sound it names. Writers use such sounds to make a scene feel lazy and warm.',
    tip: 'Sound can set the mood of a whole scene. A gentle background sound suggests peace and summer.',
  },
  "Dad's ⟨old⟩ car is his pride and joy: he polishes it every Sunday and takes it to shows.": {
    why: "Vintage means old but admired for its quality and style, like a classic car. Dad polishes it every Sunday and shows it off, so the car's age makes it special.",
    not: {
      decrepit:
        'Decrepit means worn out and falling apart. A car polished every week and taken to shows is well cared for.',
      outdated:
        'Outdated means old-fashioned and no longer useful. Dad treasures the car because of its age.',
      battered:
        'Battered means damaged by rough use. A car that is polished every Sunday is in good condition.',
    },
    more: "This word first described a year's wine harvest; a wine from a good year carries it. It now praises anything old and well made.",
    tip: 'Approving words for age turn oldness into a selling point. Use them when you want the reader to admire something old.',
  },
  "Scrooge had a very ⟨small⟩ fire, but the clerk's fire was so very much smaller that it looked like one coal.":
    {
      why: "Meagre means too small to be enough. Scrooge keeps his own fire tiny to save money, and his clerk's is even smaller, so both fires are pitifully inadequate on a bitter winter's day.",
      not: {
        compact:
          'Compact means small but neatly designed, a word of praise. Dickens is criticising these tiny fires, not praising them.',
        miniature:
          'Miniature means a small copy of something larger, like a model. These are real fires, just far too small.',
        dainty:
          'Dainty means small, delicate and pretty. A fire that looks like one coal is pitiful, not pretty.',
      },
      more: "Dickens uses the fires to show Scrooge's meanness: even his own comfort comes second to saving money, and his clerk gets less still.",
      tip: 'Small details, such as the size of a fire, can reveal a whole character. Look for them in the opening of a novel.',
    },
  'Napoleon was a ⟨large⟩, rather fierce-looking Berkshire boar, the only Berkshire on the farm, not much of a talker, but with a reputation for getting his own way.':
    {
      why: "Hulking means very big and heavy, in a way that looks powerful or threatening. Napoleon is 'rather fierce-looking' and used to getting his own way, so his size adds to the sense of menace.",
      not: {
        portly:
          'Portly means rather fat, a polite and slightly comic word for a man. Napoleon is fierce, not comic.',
        towering: 'Towering means very tall. A boar is broad and heavy, not tall.',
        lanky: 'Lanky means tall and thin, often awkwardly so. A large boar is the opposite.',
      },
      more: "Orwell introduces Napoleon through his size and his 'reputation for getting his own way'. From his first appearance, the pig who becomes a tyrant is described by strength, not ideas.",
      tip: 'Notice how writers introduce characters. A first description often hints at what a character will become.',
    },
  'Darkness is ⟨cheap⟩, and Scrooge liked it.': {
    why: 'Inexpensive means costing little money. Darkness costs nothing, because sitting in the dark means buying no candles, and a miser loves anything that saves money.',
    not: {
      shoddy:
        'Shoddy means badly made. Darkness is not made at all; Dickens is joking about its cost.',
      tacky: 'Tacky means cheap-looking and in poor taste. Darkness has no look to judge.',
      'second-rate':
        'Second-rate means of poor quality. Dickens is joking about what darkness costs, not about its quality.',
    },
    more: "This short sentence is a joke about Scrooge's meanness: he would rather sit in the dark than pay for light. Dickens often makes us laugh at Scrooge before he is changed.",
    tip: "Short sentences can carry a writer's humour or judgement. Look closely at them when you analyse a character.",
  },
  'Joe was a ⟨fair⟩ man, with curls of flaxen hair on each side of his smooth face, and with eyes of such a very undecided blue that they seemed to have somehow got mixed with their own whites.':
    {
      why: "Blond means having pale yellow hair. Dickens follows 'fair' with 'curls of flaxen hair' and a smooth face, so he is describing Joe's colouring, not his character.",
      not: {
        just: 'Just means fair in the sense of treating people equally, and Joe is a kind man. But this sentence describes his hair and face, not his behaviour.',
        sunny:
          "Sunny can mean cheerful, but fair means sunny only for the weather. The sentence describes Joe's looks.",
        moderate:
          "Moderate is what fair means in 'a fair amount', neither large nor small. A man's colouring is not an amount.",
      },
      more: "Fair once meant beautiful as well as light-coloured, and many old poems use it that way. Pip's description of Joe, with flaxen curls and pale eyes, is gentle and affectionate.",
      tip: 'When a word has a physical and a moral meaning, read the details around it. A list of features means the physical sense.',
    },
}
