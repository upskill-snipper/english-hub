import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Tense Timeline: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/tense-timeline.ts). Written with AI on 16 October 2026
 * and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: 240 questions, 80 a tier. Tier 1
 * names the tense, from four near neighbours instead of three drawn at
 * random; the 42 kept sentences keep their why, more and tip, with "why not"
 * cut to the three tenses each now offers; 18 real lines from books out of
 * UK copyright and 20 new sentences were added, and the 14 future sentences
 * no longer ask for a name that prints their own marker word. Tiers 2 and 3
 * are new: forming the tense in a sentence ("I ___ (live) in this flat since
 * 2018."), then choosing and forming it where a dialogue or a short text
 * decides. Written with AI and checked against each question, as the founder
 * decided (src/lib/games/explanations/types.ts).
 *
 * Checked by a second reader on 31 October 2026. Eleven explanations
 * corrected: rules stated too absolutely for this bank's own questions (a year
 * in the past "always" with the past simple, beside "since 2015"; "ago" always
 * with the past simple; the past simple never with "since", beside "since we
 * were children"), a "why" that made "will" sound necessary where a timetable
 * takes the present simple too, and another that tied the past continuous to a
 * long action, a "more" and a tip whose examples answered other questions ("if
 * it rains", "I have lost my key"), and the question whose sentence gained
 * "now".
 */
export const EXPLANATIONS: GameExplanations = {
  'The train leaves at half past seven every morning.': {
    why: "The clue is 'every morning': it shows something that happens again and again. 'Leaves' (verb + s with 'the train') is the present simple, used for habits and fixed timetables.",
    not: {
      'Present Continuous':
        "'The train is leaving' would mean it is leaving right now. 'Every morning' shows a regular timetable, not one action in progress.",
      'Past Simple': "'The train left' would be about the past. 'Leaves' shows it is true now.",
      'Present Perfect':
        "'The train has left' would mean it is already gone now. 'Every morning' shows a repeated event, not one result.",
    },
    more: "We use the present simple for timetables, even for the future: 'The film starts at eight tonight.'",
    tip: 'Words such as every day, always and usually often point to the present simple.',
  },
  'My sister works in a small bakery on the high street.': {
    why: "There is no time word here. The clue is the verb 'works': it states a fact about her job now, and the -s ending goes with 'my sister' (she) in the present simple.",
    not: {
      'Present Continuous':
        "'My sister is working' would mean she is working now, perhaps only for a short time. This sentence is about her normal job.",
      'Present Perfect':
        "'My sister has worked' would need a time such as 'for five years'. Here we simply say where she works now.",
      'Past Continuous':
        "'My sister was working' would mean she was in the middle of work at a past moment. No past moment is given.",
    },
    more: "Use the present simple for jobs and for where people live or work: 'He lives in Leeds. They teach at a school.'",
    tip: 'With he, she and it, add -s to the verb in the present simple: she works, he plays.',
  },
  'Water boils at one hundred degrees Celsius.': {
    why: "This is a scientific fact that is always true, so there is no time word. 'Boils' is the present simple, which we use for facts and general truths.",
    not: {
      'Present Continuous':
        "'Water is boiling' would mean it is boiling now, in one pot. This sentence is a fact that is always true.",
      'Past Simple':
        "'Water boiled' would be about one time in the past. A scientific fact is true at all times.",
      'Past Continuous':
        "'Water was boiling' would describe one pot at a past moment. This sentence states a general fact.",
    },
    more: "Facts about nature and science use the present simple: 'The sun rises in the east. Ice melts when it is warm.'",
    tip: "In science answers, write facts in the present simple: 'Plants need light to grow.'",
  },
  'We usually have dinner at about seven o’clock.': {
    why: "The clue is 'usually': it shows a habit, something we do on most days. 'Have' is the present simple. 'At about seven o’clock' is our usual time, not one moment now.",
    not: {
      'Past Simple':
        "'We usually had dinner' would mean this was our habit once, but not now. This sentence is about now.",
      'Present Perfect':
        "'We have had dinner' would mean we have already eaten. 'Usually' shows a habit, not a finished action.",
      'Past Continuous':
        "'We were having dinner' would mean we were in the middle of eating at one past moment. 'Usually' means most days.",
    },
    more: "Frequency words (always, usually, often, sometimes, never) go before the main verb in the present simple: 'We usually have dinner.'",
    tip: "To talk about your habits in speaking, use the present simple with a frequency word: 'I sometimes walk to school.'",
  },
  'She speaks three languages fluently.': {
    why: "There is no time word. The clue is that this is something she can do all the time, a fact about her. 'Speaks' (verb + s) is the present simple.",
    not: {
      'Present Continuous':
        "'She is speaking' would mean she is speaking now. This sentence says what she is able to do in general.",
      'Present Perfect':
        "'She has spoken' would talk about speaking that connects the past to now. This sentence states an ability, not an event.",
      'Past Simple': "'She spoke' would be about the past. This sentence is about her ability now.",
    },
    more: "The present simple also describes states and abilities that last: 'He knows the answer. They like music.'",
    tip: "For abilities and facts about a person, use the present simple, not 'is speaking'.",
  },
  'The shop opens at nine and closes at six.': {
    why: "The verbs 'opens' and 'closes' are present simple forms, and 'at nine' and 'at six' are fixed daily times. Opening hours are a timetable, and timetables use the present simple.",
    not: {
      'Present Continuous':
        "'The shop is opening' would mean it is opening right now. 'At nine' and 'at six' give fixed daily times.",
      'Past Simple':
        "'The shop opened' would mean it opened once, at a time that is over. This sentence gives its regular hours.",
      'Past Perfect':
        "'The shop had opened' would mean it opened before another past time. No past time is given.",
    },
    more: "Shops, schools, trains and buses follow timetables, so we use the present simple: 'School starts at half past eight.'",
    tip: "On a sign or a notice, opening times use the present simple: 'The library closes at five.'",
  },
  'He never drinks coffee after lunch.': {
    why: "The clue is the verb form 'drinks' (verb + s), which is the present simple. With 'never', it describes a habit: something he does at no time.",
    not: {
      'Present Perfect':
        "'He has never drunk' would mean he has not drunk coffee at any time up to now. This sentence is about a daily habit after lunch.",
      'Present Continuous':
        "'He is not drinking' would mean he is not drinking now, or not today. 'Never' shows a habit that is always true.",
      'Past Continuous':
        "'He was not drinking' would mean he was not doing it at one past moment. 'Never' describes a general habit.",
    },
    more: "'Never' already makes the meaning negative, so we do not add 'not'. We say 'He never drinks coffee', not 'He does not never drink'.",
  },
  'My cousin plays the guitar in a band.': {
    why: "'Plays' is the plain verb with -s: the present simple. It describes something regular and true about my cousin, not one action happening now.",
    not: {
      'Present Continuous':
        "The present continuous would be 'is playing', for something happening at this moment. 'Plays' has no 'is' and no -ing.",
      'Past Simple':
        "The past simple would be 'played', with -ed. 'Plays' ends in -s, so it is the present.",
      'Present Perfect':
        "The present perfect would be 'has played', with 'has' and a past participle. Here there is no 'has'.",
    },
    more: 'We use the present simple for hobbies and regular activities: what someone does, not what they are doing now.',
    tip: 'With he, she and it in the present simple, the verb ends in -s or -es.',
  },
  'Our lessons start at nine o’clock.': {
    why: "'Start' is the plain verb, with no -s because 'our lessons' is plural. A timetable that repeats every day takes the present simple.",
    not: {
      'Present Continuous':
        "The present continuous would be 'are starting', for something happening now. A daily timetable uses the present simple.",
      'Present Perfect':
        "The present perfect would be 'have started'. The sentence gives a regular time, not a link to now.",
      'Past Continuous':
        "The past continuous would be 'were starting', about the past. The sentence is about the school timetable now.",
    },
    more: 'Timetables use the present simple even for the future: The museum opens at ten tomorrow.',
    tip: 'Check the subject: one thing takes -s, and more than one takes the plain verb.',
  },
  'Cats sleep for most of the day.': {
    why: "'Sleep' is the plain verb, with no -s because 'cats' is plural. The sentence states a general fact about cats, so it is the present simple.",
    not: {
      'Present Continuous':
        "The present continuous would be 'are sleeping', about cats asleep at this moment. This is a fact about all cats.",
      'Past Simple':
        "The past simple would be 'slept'. A general fact is true now, so it is in the present.",
      'Past Continuous':
        "The past continuous would be 'were sleeping', about one moment in the past.",
    },
    more: 'General facts about animals, places and people use the present simple: Bees make honey.',
    tip: 'If a sentence is true all the time, use the present simple.',
  },
  'Do you walk to school every day?': {
    why: "Questions in the present simple start with 'do' or 'does', then the plain verb: do you walk. 'Every day' shows a habit.",
    not: {
      'Present Continuous':
        "The present continuous question would start with 'are' and need -ing. 'Every day' shows a habit, not now.",
      'Past Simple':
        "The past simple question would start with 'did'. This one starts with 'do', so it is the present.",
      'Present Perfect':
        "The present perfect question would start with 'have'. This one starts with 'do'.",
    },
    more: "Use 'does' with he, she and it: Does she cycle to school?",
    tip: "To ask about someone's routine, use 'Do you' or 'Does he' and the plain verb.",
  },
  'He doesn’t eat meat or fish.': {
    why: "'Doesn’t eat' is the present simple negative: 'does not' and the plain verb. It describes a fact about him all the time.",
    not: {
      'Past Simple':
        "The past simple negative would start with 'didn’t'. 'Doesn’t' shows the present.",
      'Present Continuous':
        "The present continuous negative would be 'isn’t' and an -ing verb, for now. This is a fact about his diet.",
      'Present Perfect':
        "The present perfect negative would start with 'hasn’t'. There is no 'has' here.",
    },
    more: "After 'doesn’t', the verb has no -s: he doesn’t like, she doesn’t know.",
    tip: 'To describe what people do not eat or drink, use the present simple negative.',
  },
  'I wear the chain I forged in life.': {
    why: "The main verb, 'wear', is the present simple: the speaker wears the chain now and always. The other verb, 'forged', is the past simple, for how he made it.",
    not: {
      'Present Continuous':
        "The present continuous would be 'am wearing'. The main verb is 'wear', with no 'am' and no -ing.",
      'Present Perfect':
        "The present perfect would need 'have' and a past participle. The main verb here is 'wear' alone.",
      'Past Continuous':
        "The past continuous would be 'was wearing'. The main verb is in the present.",
    },
    more: "'Forged' means made by heating and hammering metal. The speaker made his chain himself, by the way he lived.",
    tip: 'A sentence can use two tenses: the present for now, and the past for what caused it.',
  },
  'I am as light as a feather, I am as happy as an angel, I am as merry as a schoolboy.': {
    why: "'Am' is the present simple of 'be'. The speaker describes how he feels now, three times over.",
    not: {
      'Present Continuous':
        "The present continuous needs 'am' and an -ing verb. Here 'am' has no -ing verb after it.",
      'Past Simple': "The past simple would be 'was'. 'Am' shows the present.",
      'Present Perfect':
        "The present perfect would need 'have' and 'been'. Here we have 'am' alone.",
    },
    more: "Each part is a simile with 'as ... as'. Saying 'I am' three times shows how excited he is.",
    tip: "'Am', 'is' and 'are' alone are the present simple of 'be', not the present continuous.",
  },
  'Look, the children are playing in the garden right now.': {
    why: "The clues are the order 'Look' and the words 'right now': they show the action is happening at this moment. 'Are playing' (are + -ing) is the present continuous.",
    not: {
      'Present Simple':
        "'Look' is an order, not the present simple. The present simple would be 'The children play', for what they usually do. 'Right now' shows it is happening at this moment.",
      'Past Continuous':
        "'The children were playing' would mean they were playing at a past moment. 'Right now' means this moment.",
      'Present Perfect':
        "'The children have played' would mean they have finished, with a result now. 'Right now' shows the playing is still going on.",
    },
    more: "The present continuous is made with am, is or are plus a verb ending in -ing: 'She is eating.'",
    tip: 'Words such as now, right now and at the moment point to the present continuous.',
  },
  'I am reading a fascinating novel this week.': {
    why: "The form 'am reading' (am + -ing) is the present continuous. 'This week' is a short period around now, not a permanent habit, so it is a temporary activity.",
    not: {
      'Present Simple':
        "'I read a novel every week' would be the present simple, for a habit. 'Am reading' shows a temporary activity in progress.",
      'Present Perfect':
        "'I have read a fascinating novel' would mean I have finished it. 'Am reading' shows I am still in the middle.",
      'Past Simple':
        "'I read it last week' (said like 'red') would be the past simple, for a finished action. 'Am reading' shows I am still reading.",
    },
    more: "You may not be reading at this exact second. The present continuous also covers things in progress around now: 'I am learning to drive.'",
  },
  'They are building a new library near the station.': {
    why: "There is no time word. 'Are building' (are + -ing) shows work that is in progress now, so it is the present continuous.",
    not: {
      'Present Simple':
        "'They build' would describe what builders do in general. This sentence is about one library that is being built now.",
      'Past Continuous':
        "'They were building' would be about work in progress at a past time. No past time is given.",
      'Past Simple':
        "'They built' would mean the library is finished. The building is still going on.",
    },
    more: "Use the present continuous for projects and changes that are going on now: 'The city is growing.'",
  },
  'Why are you wearing your coat indoors?': {
    why: "There is no time word. The question asks what you are doing now: you have a coat on at this moment, inside a building. 'Are wearing' (are + -ing) is the present continuous.",
    not: {
      'Present Simple':
        "'Why do you wear' would ask about a habit. This question asks about what you are doing now.",
      'Past Continuous':
        "'Why were you wearing' would ask about a past moment. This question is about now.",
      'Present Perfect':
        "'Why have you worn your coat indoors?' would ask about something finished, with a result now. This question is about this moment.",
    },
    more: "Questions in the present continuous put am, is or are before the person: 'What are you doing? Is he coming?'",
  },
  'My parents are travelling around Italy at the moment.': {
    why: "The clue is 'at the moment': it means this period now. 'Are travelling' (are + -ing) is the present continuous for something that is temporary.",
    not: {
      'Present Simple':
        "'My parents travel' would be about what they usually do. 'At the moment' shows this trip is happening now.",
      'Present Perfect':
        "'My parents have travelled' would mean they have finished a trip, or have that experience. 'At the moment' shows the trip is still going on.",
      'Past Continuous':
        "'My parents were travelling' would mean they were on the trip at a past time. 'At the moment' means now.",
    },
    more: "A trip is temporary, so we use the continuous: 'My parents are travelling.' A permanent fact uses the simple: 'My parents live in Leeds.'",
  },
  'She is studying for her exams this month.': {
    why: "The clue is 'this month': it is a temporary, busy period around now. 'Is studying' (is + -ing) is the present continuous.",
    not: {
      'Present Simple':
        "'She studies' would describe a habit. 'Is studying' shows a temporary period.",
      'Past Simple':
        "'She studied' would mean she finished studying. 'Is studying' shows she is still studying.",
      'Present Perfect':
        "'She has studied' would mean she has done the studying already. 'Is studying' shows it is still going on.",
    },
    more: "She may not be studying at this exact second. The present continuous also covers a busy period: 'He is training hard this term.'",
  },
  'The weather is getting colder these days.': {
    why: "The clues are 'these days' and 'getting': they describe a change that is happening now. 'Is getting' (is + -ing) is the present continuous.",
    not: {
      'Present Simple':
        "'The weather gets colder' would be a general fact, such as every winter. 'Is getting' shows a change that is happening now.",
      'Present Perfect':
        "'The weather has got colder' would mean the change has happened, with a result now. 'Is getting' shows it is still changing.",
      'Past Continuous':
        "'The weather was getting colder' would be about a past time. 'These days' means now.",
    },
    more: "Use the present continuous for changes in progress: 'Prices are rising. The days are getting longer.'",
  },
  'Shh, the baby is sleeping upstairs.': {
    why: "'Is sleeping' is 'is' and an -ing verb: the present continuous. 'Shh' tells us the sleep is happening right now.",
    not: {
      'Present Simple':
        "The present simple would be 'sleeps', for a habit. 'Shh' shows the baby is asleep now.",
      'Past Continuous':
        "The past continuous would start with 'was', about the past. Here the action is now.",
      'Present Perfect':
        "The present perfect would need 'has' and a past participle. The sentence has 'is' and -ing.",
    },
    more: "The present continuous is 'am', 'is' or 'are' and a verb with -ing.",
    tip: "Words like 'Shh', 'Listen' and 'Look' often come before the present continuous.",
  },
  'We are learning about volcanoes this term.': {
    why: "'Are learning' is 'are' and an -ing verb: the present continuous. 'This term' is a period around now, for something temporary.",
    not: {
      'Present Simple':
        "The present simple would be 'learn', for something always true. 'This term' shows a temporary topic.",
      'Present Perfect':
        "The present perfect would need 'have' and a past participle. The sentence uses 'are' and -ing.",
      'Past Simple': 'The past simple would end in -ed. The sentence is about now.',
    },
    more: 'The present continuous can cover a period around now, even if you are not doing it at this second.',
    tip: 'Use it for school projects and topics: We are studying the Romans this year.',
  },
  'Is it raining outside?': {
    why: "'Is it raining' is a question in the present continuous: 'is' before the subject, then the -ing verb. It asks about this moment.",
    not: {
      'Present Simple':
        "The present simple question would start with 'does', about what usually happens.",
      'Past Continuous':
        "The past continuous question would start with 'was'. This one starts with 'is'.",
      'Past Simple': "The past simple question would start with 'did'. This one is about now.",
    },
    more: "In a present continuous question, 'am', 'is' or 'are' comes before the subject.",
    tip: 'Before you go out, ask about the weather with the present continuous.',
  },
  'I am sitting alone on the hearth.': {
    why: "'Am sitting' is 'am' and an -ing verb: the present continuous. The narrator describes what she is doing at this moment.",
    not: {
      'Present Simple':
        "The present simple would be 'sit', for a habit. Here we have 'am' and -ing.",
      'Past Continuous': "The past continuous would start with 'was'. 'Am' shows the present.",
      'Present Perfect':
        "The present perfect would need 'have' and a past participle. Here we have 'am' and -ing.",
    },
    more: "The 'hearth' is the floor in front of a fireplace. Writing in the present continuous makes the scene feel close.",
    tip: 'In a diary, the present continuous describes what is happening as you write.',
  },
  'No one is living there.': {
    why: "'Is living' is 'is' and an -ing verb: the present continuous. It describes the house as it is now, empty.",
    not: {
      'Present Simple': "The present simple would be 'lives'. Here we have 'is' and -ing.",
      'Past Continuous': "The past continuous would start with 'was'. 'Is' shows the present.",
      'Past Simple': 'The past simple would end in -ed. The sentence is about now.',
    },
    more: "'No one' takes a singular verb: no one is, no one knows.",
    tip: 'Use the present continuous for a situation now that may change, such as an empty house.',
  },
  'I am going out now.': {
    why: "'Am going' is 'am' and an -ing verb: the present continuous. 'Now' shows the speaker is leaving at this moment.",
    not: {
      'Present Simple': "The present simple would be 'go out'. Here we have 'am' and -ing.",
      'Present Perfect':
        "The present perfect would need 'have' and a past participle. Here we have 'am' and -ing.",
      'Past Continuous': "The past continuous would start with 'was'. 'Am' shows the present.",
    },
    more: "'Going' here is the verb 'go', not 'going to' for a plan, because no other verb follows it.",
    tip: 'Say what you are about to do with the present continuous: I am leaving now.',
  },
  'Your lip is trembling.': {
    why: "'Is trembling' is 'is' and an -ing verb: the present continuous. The trembling is happening right now, as the speaker watches.",
    not: {
      'Present Simple': "The present simple would be 'trembles'. Here we have 'is' and -ing.",
      'Past Continuous': "The past continuous would start with 'was'. 'Is' shows the present.",
      'Past Simple': "The past simple would be 'trembled'. The sentence is about now.",
    },
    more: "'Tremble' means shake a little, often because of strong feeling.",
    tip: 'Use the present continuous to describe what you can see someone doing now.',
  },
  'We visited my grandmother in Wales last summer.': {
    why: "The clue is 'last summer': a time that is finished. 'Visited' (verb + -ed) is the past simple, used for an action that started and finished in the past.",
    not: {
      'Present Simple':
        "'We visit' would describe a habit, such as every summer. 'Last summer' is a time that is over.",
      'Present Perfect':
        "'We have visited' would link the past to now, and it cannot be used with 'last summer'. A time that is over needs the past simple.",
      'Past Continuous':
        "'We were visiting' would mean we were in the middle of the visit at a past moment. This sentence reports the whole finished visit.",
    },
    more: 'Regular verbs add -ed (visit, visited). Irregular verbs change: think, thought; make, made.',
    tip: 'Words such as yesterday, last week and ago point to the past simple.',
  },
  'He bought a second-hand bicycle yesterday.': {
    why: "The clue is 'yesterday': a day that is finished. 'Bought' is the past simple of the irregular verb 'buy'.",
    not: {
      'Present Perfect':
        "'He has bought' would link the past to now, and it cannot be used with 'yesterday'. A time that is over needs the past simple.",
      'Present Simple':
        "'He buys' would describe a habit or a fact. 'Yesterday' is a time that is over.",
      'Past Perfect':
        "'He had bought' would mean he bought it before another past time. Only one past time is given.",
    },
    more: 'Irregular past forms have to be learnt one by one: make, made; think, thought; teach, taught.',
  },
  'The film started at eight and finished at ten.': {
    why: "The verbs 'started' and 'finished' are past simple forms, and 'at eight' and 'at ten' are exact times. So this is the past simple.",
    not: {
      'Past Continuous':
        "'The film was starting' would mean it was in the middle of starting at a past moment. These times are finished facts.",
      'Present Perfect':
        "'The film has started' would mean it began recently, with a result now. Exact times such as 'at eight' need the past simple.",
      'Present Simple':
        "'The film starts at eight' would give a timetable for a film still to come. Here both actions are finished.",
    },
    more: "Use the past simple for events in order, as in a story: 'He opened the door and sat down.'",
  },
  'They moved to Manchester three years ago.': {
    why: "The clue is 'three years ago': a time that is finished. 'Moved' (move + -d) is the past simple.",
    not: {
      'Present Perfect':
        "'They have moved' would link the past to now, and it cannot be used with 'ago'. A time that is over needs the past simple.",
      'Past Perfect':
        "'They had moved' would mean they moved before another past time. Only one past time is given.",
      'Present Simple':
        "'They move' would be a habit or a timetable. 'Three years ago' is a time that is over.",
    },
    more: "'Ago' goes with the past simple, not the present perfect: 'I met her two years ago.'",
  },
  'I broke my arm when I was nine.': {
    why: "The clue is 'when I was nine': a time that is over. 'Broke' is the past simple of 'break', and 'was' is the past simple of 'be'.",
    not: {
      'Present Perfect':
        "'I have broken my arm' would link the past to now, and it cannot be used with 'when I was nine'. A time that is over needs the past simple.",
      'Past Continuous':
        "'I was breaking my arm' would mean I was in the middle of breaking it. This sentence reports one finished event.",
      'Past Perfect':
        "'I had broken my arm' would mean it happened before another past time. Here 'when I was nine' is the time itself.",
    },
    more: "A question about a time that is over also uses the past simple: 'When did you break your arm?'",
  },
  'She wrote a letter to the council last week.': {
    why: "The clue is 'last week': a time that is finished. 'Wrote' is the past simple of the irregular verb 'write'.",
    not: {
      'Present Perfect':
        "'She has written' would link the past to now, and it cannot be used with 'last week'. A time that is over needs the past simple.",
      'Present Simple': "'She writes' would describe a habit. 'Last week' is a time that is over.",
      'Past Continuous':
        "'She was writing' would mean she was in the middle of writing at a past moment. This sentence reports a finished action.",
    },
    more: 'Irregular verbs change their form: write, wrote, written. Learn all three forms.',
    tip: "Do not say 'has written' with 'last week'. A time that is over needs the past simple.",
  },
  'We did not see anyone at the party.': {
    why: "There is no time word, but 'did not see' is the past simple negative: 'did not' plus the plain verb. The party is over, so this is past simple.",
    not: {
      'Present Simple':
        "'We do not see anyone' would describe a habit or a fact about now. The party is over.",
      'Present Perfect':
        "'We have not seen anyone' would link to now, for example 'up to now'. This sentence is about a finished event.",
      'Past Perfect':
        "'We had not seen anyone' would mean before another past time. No other past time is given.",
    },
    more: "For negatives and questions in the past simple, use did and the plain verb: 'We did not go.' 'Did you see him?'",
    tip: "After 'did' or 'did not', use the plain verb: 'did not see', never 'did not saw'.",
  },
  'I lost my phone on the bus last week.': {
    why: "'Lost' is the past simple of 'lose', and 'last week' is a finished time. A finished time takes the past simple.",
    not: {
      'Present Perfect':
        "The present perfect would need 'have', and it cannot go with 'last week', a finished time.",
      'Present Simple': "The present simple would be 'lose'. 'Last week' shows the past.",
      'Past Continuous':
        "The past continuous would be 'was losing'. 'Lost' is one short finished action.",
    },
    more: 'Some verbs change completely in the past simple: lose becomes lost, think becomes thought.',
    tip: "Time words like 'last week', 'yesterday' and 'ago' go with the past simple.",
  },
  'Did you enjoy the concert?': {
    why: "'Did you enjoy' is a past simple question: 'did', the subject, and the plain verb. The concert is over.",
    not: {
      'Present Simple': "The present simple question would start with 'do'. 'Did' shows the past.",
      'Present Perfect':
        "The present perfect question would start with 'have'. This one starts with 'did'.",
      'Past Perfect':
        "The past perfect question would start with 'had'. This one starts with 'did'.",
    },
    more: "After 'did', the verb is always plain: did you enjoy, not did you enjoyed.",
    tip: "Ask about someone's weekend with 'Did you' and a plain verb.",
  },
  'They didn’t win the match on Saturday.': {
    why: "'Didn’t win' is the past simple negative: 'did not' and the plain verb. The match on Saturday is over.",
    not: {
      'Present Simple':
        "The present simple negative would start with 'don’t'. 'Didn’t' shows the past.",
      'Present Perfect':
        "The present perfect negative would start with 'haven’t'. There is no 'have' here.",
      'Past Continuous':
        "The past continuous negative would be 'weren’t' and an -ing verb. 'Didn’t win' is the past simple.",
    },
    more: "After 'didn’t', use the plain verb: didn’t win, didn’t lose.",
    tip: 'When you report a result, use the past simple: Our team won, theirs lost.',
  },
  'My grandparents met in 1970.': {
    why: "'Met' is the past simple of 'meet', and 1970 is a finished time. So this is the past simple.",
    not: {
      'Present Perfect':
        "The present perfect would need 'have', and it cannot go with a finished time like 'in 1970'.",
      'Past Perfect':
        "The past perfect would need 'had', for an action before another past event. There is only one event here.",
      'Present Simple': "The present simple would be 'meet'. 1970 is in the past.",
    },
    more: "'In' with a year in the past goes with the past simple: in 1970, in 2015.",
    tip: 'Family histories use the past simple, with dates: they met in 1970.',
  },
  'Old Marley was as dead as a door-nail.': {
    why: "'Was' is the past simple of 'be'. The narrator tells a fact about the past, before the story begins.",
    not: {
      'Present Simple': "The present simple would be 'is'. 'Was' shows the past.",
      'Present Perfect':
        "The present perfect would need 'has' and 'been'. Here we have 'was' alone.",
      'Past Continuous':
        "The past continuous needs 'was' and an -ing verb. Here 'was' has no -ing verb after it.",
    },
    more: "'As dead as a door-nail' is a simile meaning completely dead. The narrator jokes about it.",
    tip: "'Was' and 'were' alone are the past simple of 'be': 'was' for I, he, she and it, 'were' for you, we and they.",
  },
  'Reader, I married him.': {
    why: "'Married' is the past simple of 'marry'. The narrator tells her reader a finished event in her life.",
    not: {
      'Present Perfect':
        "The present perfect would need 'have' before the verb. Here the verb stands alone.",
      'Present Simple': "The present simple would be 'marry'. 'Married' with -ed shows the past.",
      'Past Perfect': "The past perfect would need 'had' before the verb. There is no 'had' here.",
    },
    more: "'Reader' speaks directly to the person reading the book.",
    tip: 'Most stories are told in the past simple: the main events, one after another.',
  },
  'I was cooking dinner when the phone rang.': {
    why: "The clue is 'when the phone rang': a short event interrupted a longer one. 'Was cooking' (was + -ing) is the past continuous for the action already in progress.",
    not: {
      'Present Continuous':
        "'I am cooking dinner' would mean I am cooking now. This sentence is about the past.",
      'Past Perfect':
        "'I had cooked dinner' would mean it was finished before the phone rang. 'Was cooking' means it was still going on.",
      'Present Perfect':
        "'I have cooked dinner' would mean it is finished, with a result now. 'Was cooking' means I was in the middle of it.",
    },
    more: "The other verb, 'rang', is the past simple: it is the short action that interrupted. The sentence is about the longer action, 'was cooking'.",
    tip: 'In a story, use the past continuous for the scene and the past simple for the events: The fire was burning when he knocked.',
  },
  'They were watching television all evening.': {
    why: "The clue is 'were watching' (were + -ing): an action that went on through 'all evening'. That is the past continuous.",
    not: {
      'Past Simple':
        "'They watched' would report the whole evening as one finished fact. 'Were watching' shows the activity going on through the evening.",
      'Present Continuous':
        "'They are watching television' would mean they are watching now. The evening is over.",
      'Past Perfect':
        "'They had watched television' would mean before another past time. No other past time is given.",
    },
    more: 'The past continuous shows a long action in progress, such as watching television for the whole evening.',
  },
  'While she was walking home, it began to rain.': {
    why: "The clue is 'While': it joins a longer action to another event. 'Was walking' (was + -ing) is the past continuous: she was in the middle of walking.",
    not: {
      'Present Continuous':
        "'She is walking home' would mean it is happening now. This sentence is about the past.",
      'Past Perfect':
        "'She had walked home' would mean she arrived before another past event. 'Was walking' shows she was still walking.",
      'Present Simple':
        "'She walks home' would describe a habit. This sentence is about one past journey.",
    },
    more: "The other verb, 'began', is the past simple: it is the event that happened while she was walking.",
    tip: "'While' is usually followed by the past continuous. 'When' often goes with the past simple.",
  },
  'At nine o’clock last night we were still revising.': {
    why: "The clues are 'At nine o’clock last night' and 'still': the action was in progress at one moment in the past. 'Were revising' (were + -ing) is the past continuous.",
    not: {
      'Past Simple':
        "'We revised' would report the revision as a finished fact. 'Were still revising' shows it was in progress at nine o’clock.",
      'Present Continuous':
        "'We are still revising' would mean we are revising now. 'Last night' is over.",
      'Present Perfect':
        "'We have revised' would link to now, and it cannot be used with 'last night'. A time that is over does not take the present perfect.",
    },
    more: "Use 'at' with a clock time in the past to show what was happening then: 'At six I was having dinner.'",
  },
  'He was waiting for the bus when he saw the accident.': {
    why: "The clue is 'when he saw the accident': a short event during a longer one. 'Was waiting' (was + -ing) is the past continuous for the longer action.",
    not: {
      'Present Continuous':
        "'He is waiting' would mean it is happening now. This sentence is about the past.",
      'Present Perfect':
        "'He has waited' would link to now, or mean the waiting is over. 'Was waiting' shows he was still waiting.",
      'Past Perfect':
        "'He had waited' would mean the waiting finished before he saw the accident. 'Was waiting' shows it was still going on.",
    },
    more: "The other verb, 'saw', is the past simple: it is the short event. He was already waiting before he saw the accident.",
  },
  'The sun was shining and the birds were singing.': {
    why: "There is no time word. Two actions were in progress together, to describe a scene. 'Was shining' and 'were singing' (was or were + -ing) are the past continuous.",
    not: {
      'Past Simple':
        "'The sun shone and the birds sang' would report finished events. 'Was shining' and 'were singing' describe a scene in progress.",
      'Present Continuous':
        "'The sun is shining' would describe the scene now. This sentence is about the past.",
      'Past Perfect':
        "'The sun had shone' would mean it shone before another past time. No other past time is given.",
    },
    more: "Writers use the past continuous to set the scene in a story: 'The fire was crackling and the rain was falling.'",
    tip: 'In your own stories, set the scene with the past continuous, then use the past simple for the events.',
  },
  'What were you doing at midnight?': {
    why: "The form 'were you doing' (were + -ing) is the past continuous. 'Were' puts the question in the past, and 'at midnight' names the moment it asks about.",
    not: {
      'Present Continuous':
        "'What are you doing at midnight?' would ask about now or a plan. 'Were' puts the question in the past.",
      'Past Simple':
        "'What did you do at midnight?' would ask for the finished action. 'Were you doing' asks what was in progress then.",
      'Present Perfect':
        "'What have you done at midnight?' would link to now. 'Were' puts this question in the past.",
    },
    more: "In a question in the past continuous, was or were comes before the person: 'Where were you going?'",
  },
  'We were sitting in the garden at six o’clock.': {
    why: "'Were sitting' is 'were' and an -ing verb: the past continuous. 'At six o’clock' is a moment, and the action was in progress then.",
    not: {
      'Present Continuous':
        "The present continuous would start with 'are', about now. 'Were' shows the past.",
      'Past Simple': "The past simple would be 'sat'. 'Were sitting' has an -ing verb.",
      'Past Perfect':
        "The past perfect would need 'had' and a past participle, for an earlier past.",
    },
    more: 'The past continuous tells us what was in progress at a time in the past.',
    tip: 'To say what you were doing at a time yesterday, use the past continuous.',
  },
  'Were you having a shower when I called?': {
    why: "'Were you having' is a past continuous question: an action in progress when the call came. The other verb, 'called', is the past simple, for the short event.",
    not: {
      'Present Continuous':
        "The present continuous question would start with 'are'. This one starts with 'were'.",
      'Present Perfect':
        "The present perfect question would start with 'have'. Here we have 'were' and -ing.",
      'Past Perfect':
        "The past perfect question would start with 'had'. Here we have 'were' and -ing.",
    },
    more: "'Have a shower' uses 'have' as an action, so it can take -ing: having a shower.",
    tip: 'When you ask why someone did not answer, the past continuous fits: Were you asleep, or were you out?',
  },
  'It was snowing all night.': {
    why: "'Was snowing' is 'was' and an -ing verb: the past continuous. 'All night' shows the snow went on for a long time.",
    not: {
      'Past Simple': "The past simple would be 'snowed'. 'Was snowing' has 'was' and -ing.",
      'Present Continuous':
        "The present continuous would start with 'is', about now. 'Was' shows the past.",
      'Present Perfect':
        "The present perfect would need 'has' and a past participle. There is no 'has' here.",
    },
    more: 'The past continuous can show a long action over a period: all night, all day.',
    tip: 'Describe weather in a story with the past continuous: the sky was getting darker.',
  },
  'He was waiting for me with great impatience.': {
    why: "'Was waiting' is 'was' and an -ing verb: the past continuous. The waiting was already in progress when the narrator arrived.",
    not: {
      'Present Continuous':
        "The present continuous would start with 'is', about now. 'Was' shows the past.",
      'Past Simple': "The past simple would end in -ed. Here we have 'was' and -ing.",
      'Present Perfect':
        "The present perfect would need 'has' and a past participle. There is no 'has' here.",
    },
    more: "'With great impatience' means he could hardly wait any longer.",
    tip: 'Writers use the past continuous to show what a character was already doing when someone comes in.',
  },
  'It was beginning to rain fast.': {
    why: "'Was beginning' is 'was' and an -ing verb: the past continuous. The rain was starting at that moment in the story.",
    not: {
      'Past Simple': "The past simple would be 'began'. Here we have 'was' and -ing.",
      'Present Continuous':
        "The present continuous would start with 'is', about now. 'Was' shows the past.",
      'Past Perfect': "The past perfect would be 'had begun'. Here we have 'was' and -ing.",
    },
    more: "'To rain fast' means to rain hard and heavily.",
    tip: 'Weather in a story is often in the past continuous: it sets the scene.',
  },
  'Estella was knitting, and Miss Havisham was looking on.': {
    why: "Both verbs are 'was' and an -ing verb: two actions were in progress at the same moment. That is the past continuous.",
    not: {
      'Present Continuous':
        "The present continuous would start with 'is', about now. 'Was' shows the past.",
      'Past Simple':
        "The past simple would end in -ed, with no 'was'. Here we have 'was' and -ing.",
      'Present Perfect':
        "The present perfect would need 'has' and a past participle. There is no 'has' here.",
    },
    more: "'Looking on' means watching what someone else is doing.",
    tip: 'Use the past continuous for two things happening together when someone walks into a room.',
  },
  'I have never been to Japan.': {
    why: "The form 'have been' (have + past participle) is the present perfect, used for experience. 'Never' shows we mean your whole life up to now, with no exact time.",
    not: {
      'Past Simple':
        "'I never went to Japan' would be about a time that is over. This sentence covers my whole life up to now.",
      'Past Perfect':
        "'I had never been to Japan' would mean up to a moment in the past, such as 'until 2019'. This sentence is up to now.",
      'Present Simple':
        "'I never go to Japan' would describe a habit, as if I do not go each year. This sentence is about my whole life up to now.",
    },
    more: "Use 'have been to' for places you have visited: 'She has been to Spain twice.'",
    tip: "To talk about life experience, use the present perfect. If you give an exact past time, change to the past simple: 'I went to Japan in 2019.'",
  },
  'She has just finished her homework.': {
    why: "The form 'has just finished' (has + past participle) is the present perfect. 'Just' means a very short time ago, so the action is recent and the news matters now.",
    not: {
      'Past Simple':
        "'She finished her homework' would simply report a past action. 'Has just finished' links it to now.",
      'Past Perfect':
        "'She had finished' would mean she finished before another past time. 'Has' shows this is about now.",
      'Present Continuous':
        "'She is finishing her homework' would mean she is nearly done, or doing it now. 'Has just finished' means it is done.",
    },
    more: "'Just', 'already' and 'yet' often go with the present perfect: 'Have you finished yet?'",
  },
  'We have lived in this village since 2015.': {
    why: "The clue is 'since 2015': a starting point in the past. 'Have lived' (have + past participle) is the present perfect: we began living here in 2015 and still live here.",
    not: {
      'Past Simple':
        "'We lived in this village' would mean we do not live here now. 'Have lived' shows we still do.",
      'Present Simple':
        "'We live in this village' would state where we live now. 'Have lived ... since 2015' adds that it began in 2015 and continues.",
      'Present Continuous':
        "'We are living in this village' would sound temporary. 'Have lived since 2015' shows a long time up to now.",
    },
    more: "Use 'since' with a starting point and 'for' with a length of time: since Monday, for two weeks.",
  },
  'They have already eaten their lunch.': {
    why: "The form 'have eaten' (have + past participle) is the present perfect. The word 'already' supports it: it means 'before now', and lunch is finished, which matters now.",
    not: {
      'Past Perfect':
        "'They had already eaten' would mean before another past time. This sentence is about now.",
      'Past Simple':
        "'They ate their lunch' would simply report a past action. 'Have already eaten' links it to now: lunch is finished.",
      'Present Continuous':
        "'They are eating their lunch' would mean they are eating now. 'Have already eaten' shows they have finished.",
    },
    more: "'Already' usually goes between have and the past participle: 'They have already eaten.'",
  },
  'Have you ever ridden a horse?': {
    why: "The form 'have you ridden' (have + past participle) is the present perfect, used to ask about experience. 'Ever' means 'at any time in your life'.",
    not: {
      'Past Simple':
        "'Did you ride a horse?' would ask about one time that is over. 'Ever' asks about your whole life.",
      'Present Simple':
        "'Do you ride a horse?' would ask about a habit. 'Ever' asks about any time in your life up to now.",
      'Past Perfect':
        "'Had you ever ridden a horse?' would ask about before a past time. This question is about now.",
    },
    more: "The answer often uses 'never' or 'once': 'No, I have never ridden a horse.'",
  },
  'He has worked here for ten years.': {
    why: "The form 'has worked' (has + past participle) is the present perfect: it goes up to now. 'For ten years' tells us how long: he started ten years ago and still works here.",
    not: {
      'Past Simple':
        "'He worked here for ten years' would mean he does not work here now. 'Has worked' shows he still does.",
      'Present Simple':
        "'He works here' would state a fact. 'For ten years' adds how long, up to now.",
      'Past Perfect':
        "'He had worked here for ten years' would mean up to a past moment. This sentence is about now.",
    },
    more: "Compare: 'He worked here for ten years' (past simple) means he does not work here now.",
  },
  'I have lost my keys and I cannot find them.': {
    why: "There is no time word. The clue is the result now: 'I cannot find them'. 'Have lost' (have + past participle) is the present perfect: a past action with a result for the present.",
    not: {
      'Past Simple':
        "'I lost my keys' would simply report a past event. 'Have lost' links it to now: I still cannot find them.",
      'Past Perfect':
        "'I had lost my keys' would mean before another past time. This sentence is about now.",
      'Present Continuous':
        "'I am losing my keys' would mean it is happening now, as if they are slipping away. 'Have lost' means they are already gone.",
    },
    more: "'Cannot find' only shows the result now: the keys are still lost. The tense being asked about is 'have lost'.",
    tip: "Use the present perfect when a past action matters now: 'I have lost my phone' means I need help finding it.",
  },
  'Have you finished your homework yet?': {
    why: "'Have you finished' is a present perfect question: 'have' and the past participle. 'Yet' asks about any time up to now.",
    not: {
      'Past Simple':
        "The past simple question would start with 'did'. Here we have 'have' and a past participle.",
      'Present Continuous':
        "The present continuous question would start with 'are' and need -ing. Here we have 'have'.",
      'Present Simple':
        "The present simple question would start with 'do'. This one starts with 'have'.",
    },
    more: "'Yet' goes at the end of present perfect questions and negatives.",
    tip: "Ask about tasks with 'Have you ... yet?': Have you packed yet?",
  },
  'We have known each other for years.': {
    why: "'Have known' is 'have' and the past participle of 'know'. 'For years' joins a past start to now, so this is the present perfect.",
    not: {
      'Present Simple':
        "The present simple would be 'know'. 'For years' up to now needs 'have' and a participle.",
      'Past Simple': "The past simple would be 'knew'. Here we have 'have known'.",
      'Past Perfect': "The past perfect would be 'had known'. Here we have 'have'.",
    },
    more: "'Know' is a state verb. For a state that started in the past and goes on, use the present perfect with 'for' or 'since'.",
    tip: "Say how long you have known a friend with 'for' and a length of time.",
  },
  'This expedition has been the favourite dream of my early years.': {
    why: "'Has been' is 'has' and the past participle of 'be': the present perfect. The dream started in his early years and is still true now.",
    not: {
      'Past Simple': "The past simple would be 'was'. Here we have 'has' and 'been'.",
      'Present Simple': "The present simple would be 'is'. 'Has been' links the past to now.",
      'Past Perfect': "The past perfect would start with 'had'. Here we have 'has'.",
    },
    more: "'Favourite' is the British spelling. An 'expedition' is a long journey to explore.",
    tip: 'Use the present perfect to talk about a dream you have held for a long time.',
  },
  'But I have forgotten one thing.': {
    why: "'Have forgotten' is 'have' and the past participle of 'forget': the present perfect. The forgetting matters now, so the speaker goes on to add the missing thing.",
    not: {
      'Past Simple': "The past simple would be 'forgot'. Here we have 'have' and a participle.",
      'Past Perfect': "The past perfect would start with 'had'. Here we have 'have'.",
      'Present Continuous':
        "The present continuous would be 'am' and an -ing verb. Here we have 'have' and a participle.",
    },
    more: "Forget, forgot, forgotten: the third form goes after 'have' and 'had'.",
    tip: 'Use the present perfect when a past action has a result now: someone has taken my seat.',
  },
  'Mrs. Joe has been out a dozen times, looking for you, Pip.': {
    why: "'Has been' is 'has' and the past participle of 'be': the present perfect. It counts the times up to now: a dozen times.",
    not: {
      'Past Simple': "The past simple would be 'was out'. Here we have 'has' and 'been'.",
      'Present Continuous':
        "'Looking' adds a description, but the main verb is 'has been', not 'is' and -ing.",
      'Present Simple': "The present simple would be 'is out'. 'Has been' links the past to now.",
    },
    more: "'A dozen' means twelve. Counting how many times something has happened up to now is a common use of the present perfect.",
    tip: 'Use the present perfect with a number of times: three times, a dozen times.',
  },
  'I have come to dinner.': {
    why: "'Have come' is 'have' and the past participle of 'come': the present perfect. The speaker has arrived, and the result is now: he is at the door.",
    not: {
      'Past Simple': "The past simple would be 'came'. Here we have 'have' and a participle.",
      'Present Simple': "The present simple would be 'come' alone. Here 'have' comes before it.",
      'Past Perfect': "The past perfect would start with 'had'. Here we have 'have'.",
    },
    more: "Come, came, come: the participle of 'come' looks the same as the plain verb.",
    tip: "Look for 'have' or 'has' before a verb: that is the sign of the present perfect.",
  },
  'By the time we arrived, the train had already left.': {
    why: "The form 'had left' (had + past participle) is the past perfect. 'By the time we arrived' gives the later moment, and 'already' shows the train had gone before it.",
    not: {
      'Present Perfect':
        "'The train has already left' would mean it is gone now. 'By the time we arrived' sets the time in the past.",
      'Past Continuous':
        "'The train was leaving' would mean it was in the middle of leaving when we arrived. This sentence says 'had left': it was already gone.",
      'Present Simple':
        "'The train leaves' would describe a timetable. This sentence is about a past event before we arrived.",
    },
    more: "There are two past events: first the train left, then we arrived. The other verb, 'arrived', is the past simple and names the later event.",
    tip: 'Use the past perfect to show which of two past events came first.',
  },
  'She had finished the report before the meeting began.': {
    why: "The form 'had finished' (had + past participle) is the past perfect. 'Before the meeting began' names the later event, so the report came first.",
    not: {
      'Present Perfect':
        "'She has finished the report' would link to now. This sentence is about a past time.",
      'Past Continuous':
        "'She was finishing the report' would mean she was still working when the meeting began. This sentence says 'had finished': she was already done.",
      'Present Continuous':
        "'She is finishing the report' would mean she is doing it now. This sentence is about the past.",
    },
    more: "The other verb, 'began', is the past simple: it names the later event, the start of the meeting.",
  },
  'They were tired because they had walked all day.': {
    why: "'Had walked' (had + past participle) is the past perfect. The walking came first, and it caused the tiredness.",
    not: {
      'Present Perfect':
        "'They have walked all day' would link to now. This sentence is about the past.",
      'Past Continuous':
        "'They were walking all day' would describe the long walk as in progress. 'Had walked' shows it finished first and caused the tiredness.",
      'Present Simple':
        "'They are tired because they walk all day' would be about a habit now. This sentence is about one past day.",
    },
    more: "The other verb, 'were', is the past simple: it tells us how they felt. A reason that came earlier often uses the past perfect: 'She was late because she had missed the bus.'",
  },
  'When I got home, my brother had cooked dinner.': {
    why: "'Had cooked' (had + past participle) is the past perfect. 'When I got home' names the later moment, so the dinner was cooked first.",
    not: {
      'Present Perfect':
        "'My brother has cooked dinner' would mean it is ready now. 'When I got home' sets the time in the past.",
      'Past Continuous':
        "'My brother was cooking dinner' would mean he was still cooking when I got home. 'Had cooked' means he had finished.",
      'Present Continuous':
        "'My brother is cooking dinner' would mean he is cooking now. This sentence is about the past.",
    },
    more: "Compare: 'When I got home, my brother cooked dinner' (past simple) would mean he cooked after I arrived.",
  },
  'He realised he had forgotten his passport.': {
    why: "There is no time word. The clue is 'realised': he noticed later that the forgetting had already happened. 'Had forgotten' (had + past participle) is the past perfect, for the earlier event.",
    not: {
      'Present Perfect':
        "'He has forgotten his passport' would mean he still does not have it now. 'Realised' puts the sentence in the past.",
      'Present Simple':
        "'He forgets his passport' would describe a habit. This sentence is about one past moment.",
      'Past Continuous':
        "'He was forgetting his passport' would mean he was in the middle of forgetting it. 'Had forgotten' means the forgetting was finished first.",
    },
    more: "The other verb, 'realised', is the past simple: it is the later moment. After verbs such as 'knew' or 'realised', we often use the past perfect for the earlier event: 'She knew she had heard the song before.'",
  },
  'The film had started by the time we sat down.': {
    why: "'Had started' (had + past participle) is the past perfect. 'By the time we sat down' names the later moment, so the film began first.",
    not: {
      'Present Perfect':
        "'The film has started' would mean it is already on now. 'By the time we sat down' sets the time in the past.",
      'Past Continuous':
        "'The film was starting' would mean it was in the middle of starting when we sat down. 'Had started' shows it began first.",
      'Present Continuous':
        "'The film is starting' would mean it is starting now. This sentence is about the past.",
    },
    more: "'By the time we sat down' names the later moment, and the earlier event uses the past perfect. The other verb, 'sat', is the past simple.",
  },
  'I had never seen snow until I moved to Scotland.': {
    why: "The form 'had never seen' (had + never + past participle) is the past perfect. 'Until I moved to Scotland' names the later moment, and 'never' means no experience before it.",
    not: {
      'Present Perfect':
        "'I have never seen snow' would mean up to now. 'Until I moved to Scotland' sets an earlier past point.",
      'Past Continuous':
        "A past continuous would describe one moment in progress. 'Had never seen' covers my whole life before I moved.",
      'Present Simple':
        "'I never see snow' would describe a habit now. This sentence is about my life up to a past moment.",
    },
    more: "Compare the present perfect: 'I have never seen snow' means up to now. The past perfect means up to a point in the past. The other verb, 'moved', is the past simple.",
  },
  'When we arrived, the shop had closed.': {
    why: "'Had closed' is 'had' and a past participle: the past perfect. The shop closed before we arrived. The other verb, 'arrived', is the past simple.",
    not: {
      'Present Perfect':
        "The present perfect would start with 'has', linked to now. This story is all in the past.",
      'Past Continuous':
        "The past continuous would be 'was' and an -ing verb. Here we have 'had' and a participle.",
      'Present Simple': "The present simple would be 'closes'. The sentence is in the past.",
    },
    more: 'The past perfect shows which of two past events came first.',
    tip: "In a story, use 'had' and a participle for something that happened even earlier.",
  },
  'She had never flown before her trip to Spain.': {
    why: "'Had never flown' is 'had' and the past participle of 'fly'. It looks back from her trip, a past event, to the time before it.",
    not: {
      'Past Simple': "The past simple would be 'never flew'. Here we have 'had' and a participle.",
      'Present Perfect':
        "The present perfect would start with 'has', looking back from now. Here we look back from the trip.",
      'Past Continuous':
        "The past continuous would be 'was' and an -ing verb. Here we have 'had' and a participle.",
    },
    more: 'Fly, flew, flown: learn the three forms of irregular verbs together.',
    tip: "'Had never' and a participle describes a first time in the past.",
  },
  'By ten o’clock, everyone had gone home.': {
    why: "'Had gone' is 'had' and the past participle of 'go'. 'By ten o’clock' means before that time, so this is the past perfect.",
    not: {
      'Past Simple': "The past simple would be 'went'. Here we have 'had' and a participle.",
      'Present Perfect':
        "The present perfect would start with 'has', linked to now. 'By ten o’clock' looks back from a past time.",
      'Present Continuous':
        "The present continuous would be 'is' and an -ing verb. The sentence is in the past.",
    },
    more: "'By' a time means at that time or before it. It often goes with the past perfect.",
    tip: "Go, went, gone: after 'had' and 'have' use 'gone', never 'went'.",
  },
  'His words had given me a start.': {
    why: "'Had given' is 'had' and the past participle of 'give': the past perfect. The words were spoken before the moment the narrator is describing.",
    not: {
      'Past Simple': "The past simple would be 'gave'. Here we have 'had' and a participle.",
      'Present Perfect':
        "The present perfect would start with 'have', linked to now. 'Had' shows an earlier past.",
      'Past Continuous':
        "The past continuous would be 'were' and an -ing verb. Here we have 'had' and a participle.",
    },
    more: "'Given me a start' is an old way to say 'made me jump' or 'surprised me'.",
    tip: 'When you read a novel, notice how writers use the past perfect to look back.',
  },
  'I had visited it frequently during my boyhood.': {
    why: "'Had visited' is 'had' and a past participle: the past perfect. The narrator looks back from his journey to visits even earlier, in his boyhood.",
    not: {
      'Past Simple': "The past simple would be 'visited' alone. Here 'had' comes before it.",
      'Present Perfect':
        "The present perfect would start with 'have', linked to now. 'Had' looks back from a past time.",
      'Present Continuous':
        "The present continuous would be 'am' and an -ing verb, about now. This is all in the past.",
    },
    more: "'Frequently' means often. 'Boyhood' means the time when he was a boy.",
    tip: 'In a story told in the past, the past perfect is a step further back in time.',
  },
  'I had tried hard at it, but had made nothing of it.': {
    why: "Both verbs are 'had' and a past participle: the past perfect. They describe efforts before the moment the narrator is telling about.",
    not: {
      'Past Simple': "The past simple would be the two verbs alone, with no 'had' before them.",
      'Present Perfect':
        "The present perfect would start with 'have'. 'Had' looks back from a past time.",
      'Past Continuous':
        "The past continuous would be 'was' and an -ing verb. Here we have 'had' and a participle.",
    },
    more: "'Made nothing of it' means did not understand it or could not do it.",
    tip: "One 'had' can serve two verbs, but writers often repeat it, as here.",
  },
  'My brother ___ (like) spicy food.': {
    why: "'Like' describes a feeling that stays the same, so it takes the present simple. 'My brother' is one person, so the verb ends in -s.",
    not: {
      'is liking':
        "'Like' is a state verb: it describes how you feel, not an action in progress. State verbs do not usually take -ing.",
      like: "'My brother' is one person, like 'he', so the present simple verb needs an -s.",
      liking:
        "An -ing form cannot be the main verb on its own. And 'like' does not usually take -ing at all.",
    },
    more: 'State verbs describe feelings, thoughts and having: hate, prefer, own, believe. They stay in the present simple.',
    tip: 'To talk about food you enjoy, use the present simple: Maya loves curry.',
  },
  'I ___ (recognise) that man from the news.': {
    why: "'Recognise' describes what is in your mind when you see someone you know: a state, not an action. With 'I', the present simple is the plain verb.",
    not: {
      'am recognising': "'Recognise' is a state verb here, so it does not take -ing.",
      recognises: "The -s ending goes with he, she and it. With 'I', the verb has no -s.",
      recognising: 'An -ing form cannot be the main verb on its own.',
    },
    more: 'Verbs of the mind usually stay in the simple form: understand, believe, mean.',
    tip: "'Recognise' is the British spelling, with an s. American English writes it with a z.",
  },
  'This phone ___ (belong) to my sister.': {
    why: "'Belong' describes who owns something: a state, not an action. 'This phone' is one thing, so the present simple verb ends in -s.",
    not: {
      'is belonging': "'Belong' is a state verb, so it does not take -ing.",
      belong: "'This phone' is one thing, like 'it', so the present simple verb needs an -s.",
      belonging: 'An -ing form cannot be the main verb on its own.',
    },
    more: "'Belong to' means 'is owned by'. The noun 'belongings' means the things a person owns.",
    tip: "To say who owns something, use 'belong to' in the present simple.",
  },
  'This bag ___ (contain) my school books.': {
    why: "'Contain' describes what is inside something: a state, not an action. 'This bag' is one thing, so the present simple verb ends in -s.",
    not: {
      'is containing': "'Contain' is a state verb, so it does not take -ing.",
      contain: "'This bag' is one thing, like 'it', so the present simple verb needs an -s.",
      containing: 'An -ing form cannot be the main verb on its own.',
    },
    more: "Labels and lists often use 'contain': This box contains glass.",
    tip: 'Learn state verbs as a group: they almost always stay in the simple form.',
  },
  'My dad ___ (not / drink) coffee.': {
    why: "This is a fact about him, so we use the present simple. The negative is 'does not', or 'doesn’t', and then the plain verb with no -s.",
    not: {
      'don’t drink':
        "'Don’t' is for I, you, we and they. 'My dad' is one person, so use 'doesn’t'.",
      'doesn’t drinks': "After 'doesn’t', the verb has no -s. The -s has already moved to 'does'.",
      'not drinks':
        "English needs 'does' to make a present simple negative. 'Not' alone is not enough.",
    },
    more: "In questions too, 'does' takes the -s, and the main verb stays plain: Does he drive?",
    tip: "Remember: one -s only. If 'does' or 'doesn’t' has it, the main verb has none.",
  },
  'Does your sister ___ (speak) French?': {
    why: "After 'does' in a question, the main verb is always plain, with no -s and no -ing. So the answer is 'speak'.",
    not: {
      speaks: "The -s is already on 'does'. The main verb after it stays plain.",
      speaking: "An -ing verb needs 'is' before it, not 'does'.",
      spoke: "'Spoke' is the past. After 'does', use the plain verb.",
    },
    more: 'Present simple questions: do or does, then the subject, then the plain verb.',
    tip: "To ask about languages, use 'Do you' or 'Does she' and the plain verb.",
  },
  'The bus to town ___ (leave) every twenty minutes.': {
    why: "'Every twenty minutes' is a timetable that repeats, so we use the present simple. 'The bus' is one thing, so the verb ends in -s.",
    not: {
      leave: "'The bus' is one thing, like 'it', so the present simple verb needs an -s.",
      leaving: 'An -ing form cannot be the main verb on its own.',
      'is leave':
        "We do not put 'is' before a plain verb. The present simple needs only the verb with -s.",
    },
    more: 'Timetables for buses, trains and lessons use the present simple, even when they are about tomorrow.',
    tip: 'When you read a timetable aloud, use the present simple.',
  },
  'We ___ (go) swimming every Saturday morning.': {
    why: "'Every Saturday morning' shows a habit, so we use the present simple. With 'we', the verb is plain, with no -s.",
    not: {
      goes: "The -s ending goes with he, she and it. With 'we', the verb has no -s.",
      going: 'An -ing form cannot be the main verb on its own.',
      'are go': "We do not put 'are' before a plain verb. The present simple needs only the verb.",
    },
    more: "We use 'go' with -ing activities: go swimming, go shopping, go dancing.",
    tip: "Words like 'every', 'usually' and 'often' are clues for the present simple.",
  },
  'What time does the film ___ (begin)?': {
    why: "After 'does' in a question, the main verb is plain. Film times are a timetable, which takes the present simple.",
    not: {
      begins: "The -s is already on 'does'. The main verb after it stays plain.",
      began: "The past would need 'did', not 'does'. After 'does', use the plain verb.",
      beginning: "An -ing verb needs 'is' before it, not 'does'.",
    },
    more: 'Cinemas, shops and trains follow timetables, so we ask about them in the present simple.',
    tip: "Ask about times with 'What time does' and the plain verb.",
  },
  'Ali ___ (want) a new bike for his birthday.': {
    why: "'Want' describes a wish: a state, not an action. 'Ali' is one person, so the present simple verb ends in -s.",
    not: {
      'is wanting': "'Want' is a state verb, so in standard English it does not take -ing.",
      want: "'Ali' is one person, like 'he', so the present simple verb needs an -s.",
      wanting: 'An -ing form cannot be the main verb on its own.',
    },
    more: "'Want', 'need' and 'prefer' describe states of mind, so they usually stay in the simple form.",
    tip: "To ask what someone wants, use 'What do you want' or 'What would you like'.",
  },
  'Listen. Someone ___ (sing) in the next room.': {
    why: "'Listen' tells us the singing is happening right now, so we use the present continuous: 'is' and the -ing verb.",
    not: {
      sings:
        "The present simple is for habits and facts. 'Listen' shows an action happening at this moment.",
      sing: "'Someone' takes a singular verb, and here we need the present continuous.",
      singing: "An -ing verb needs 'is', 'am' or 'are' before it.",
    },
    more: "'Someone', 'nobody' and 'everyone' take a singular verb: someone is, nobody is.",
    tip: "When a sentence starts with 'Listen' or 'Look', check for the present continuous.",
  },
  'Be quiet, please. I ___ (talk) on the phone.': {
    why: "The call is happening right now, so we use the present continuous. With 'I', the form is 'am' and the -ing verb.",
    not: {
      talk: "The present simple is for habits. 'Be quiet' shows the action is happening now.",
      talking: "An -ing verb needs 'am', 'is' or 'are' before it.",
      'is talking': "'Is' goes with he, she and it. With 'I', use 'am'.",
    },
    more: 'The present continuous often explains why someone should do something now: be quiet, wait, hurry.',
    tip: "To explain that you are busy, use 'I am' and an -ing verb.",
  },
  'Where is Tom? He ___ (have) a shower.': {
    why: "'Where is Tom?' asks about now, so the answer uses the present continuous. 'Have a shower' is an action, so it can take -ing.",
    not: {
      has: "'Has a shower' would be a habit, such as every morning. The question is about this moment.",
      have: "'He' takes 'has' in the present simple, and here we need the present continuous anyway.",
      having: "An -ing verb needs 'is' before it.",
    },
    more: "'Have' meaning own is a state verb, but 'have' as an action can take -ing: having lunch, having a party.",
    tip: "Answer 'Where is...?' with a place, or with what the person is doing now.",
  },
  'Look. It ___ (snow).': {
    why: "'Look' tells us the snow is falling right now, so we use the present continuous: 'is' and the -ing verb.",
    not: {
      snows:
        "The present simple is for what usually happens, such as snow every winter. 'Look' shows now.",
      snow: "'It' takes a singular verb, and here we need the present continuous.",
      snowing: "An -ing verb needs 'is' before it.",
    },
    more: 'Weather happening now uses the present continuous: it is raining, the wind is blowing.',
    tip: "Describe the weather outside your window with 'it is' and an -ing verb.",
  },
  'My parents ___ (paint) the kitchen this weekend.': {
    why: "The plan is fixed for this weekend, so English uses the present continuous: 'are' and the -ing verb. 'My parents' is plural.",
    not: {
      paint: 'The present simple is for habits and timetables, not for a plan like this one.',
      painting: "An -ing verb needs 'am', 'is' or 'are' before it.",
      'is painting': "'Is' goes with one person. 'My parents' are two people, so use 'are'.",
    },
    more: 'The present continuous can describe arrangements in the near future: We are meeting at six.',
    tip: 'Talk about your weekend plans with the present continuous and a time.',
  },
  'Why are you ___ (laugh)?': {
    why: "After 'are' in a question about now, we need the -ing form: the present continuous.",
    not: {
      laugh: "After 'are', the verb needs -ing.",
      laughed: "'Laughed' is the past. After 'are', use the -ing form.",
      laughs: "After 'are', the verb needs -ing, not -s.",
    },
    more: "Questions in the present continuous put 'am', 'is' or 'are' before the subject, then the -ing verb.",
    tip: "Ask about what someone is doing now with 'What are you' and an -ing verb.",
  },
  'Turn the TV off. Nobody ___ (watch) it.': {
    why: "The TV is on now and no one is looking at it, so we use the present continuous. 'Nobody' takes a singular verb: 'is'.",
    not: {
      watch: "'Nobody' takes a singular verb, and the sentence is about this moment.",
      watching: "An -ing verb needs 'is' before it.",
      'are watching': "'Nobody' takes a singular verb, so use 'is', not 'are'.",
    },
    more: "'Nobody', 'someone' and 'everybody' all take a singular verb.",
    tip: 'Give a reason for an order with the present continuous: no one is using it.',
  },
  'What is that noise? My brothers ___ (fight) over the remote control again.': {
    why: "'What is that noise?' shows the fight is happening now, again, so we use the present continuous. 'My brothers' is plural: 'are' and the -ing verb.",
    not: {
      fight: 'The present simple is for habits. Here the fight is happening now.',
      fights: "'My brothers' is plural, and the action is happening now.",
      'is fighting': "'Is' goes with one person. 'My brothers' are more than one, so use 'are'.",
    },
    more: "'Again' shows something has happened before and is happening once more.",
    tip: 'Complain about something happening now with the present continuous.',
  },
  'I can’t come out. I ___ (do) my homework.': {
    why: "The speaker is busy at this moment, so we use the present continuous. With 'I', the form is 'am' and the -ing verb.",
    not: {
      do: "The present simple is for habits. 'I can’t come out' shows a reason now.",
      doing: "An -ing verb needs 'am', 'is' or 'are' before it.",
      does: "'Does' goes with he, she and it, and the sentence needs the present continuous.",
    },
    more: "We say 'do homework', not 'make homework'.",
    tip: 'To turn down an invitation, give a reason with the present continuous.',
  },
  'Hurry up. The bus ___ (come).': {
    why: "'Hurry up' shows the bus is on its way right now, so we use the present continuous: 'is' and the -ing verb.",
    not: {
      comes: 'The present simple is for timetables and habits. Here the bus is arriving now.',
      come: "'The bus' takes a singular verb, and here we need the present continuous.",
      coming: "An -ing verb needs 'is' before it.",
    },
    more: 'The present continuous can describe something about to happen, already on its way.',
    tip: "Use 'Hurry up' and the present continuous to tell someone something is happening now.",
  },
  'We ___ (swim) in the sea last Saturday.': {
    why: "'Last Saturday' is a finished time, so we use the past simple. 'Swim' is irregular: its past simple is 'swam'.",
    not: {
      'have swum': "The present perfect cannot go with a finished time like 'last Saturday'.",
      swim: "'Swim' is the present. 'Last Saturday' shows the past.",
      swum: "'Swum' is the past participle. It needs 'have' or 'had' before it.",
    },
    more: 'Swim, swam, swum: like sing, sang, sung and drink, drank, drunk.',
    tip: "Words with 'last', such as last week and last year, go with the past simple.",
  },
  'I ___ (draw) a picture of my cat yesterday.': {
    why: "'Yesterday' is a finished time, so we use the past simple. 'Draw' is irregular: its past simple is 'drew'.",
    not: {
      'have drawn': "The present perfect cannot go with 'yesterday', a finished time.",
      draw: "'Draw' is the present. 'Yesterday' shows the past.",
      drawn: "'Drawn' needs 'have' or 'had' before it. On its own, the past simple is 'drew'.",
    },
    more: "Draw, drew, drawn: the second form is for the past simple, the third for after 'have'.",
    tip: 'When you describe your weekend, put each finished action in the past simple.',
  },
  'She ___ (buy) a new coat two days ago.': {
    why: "'Two days ago' is a finished time, so we use the past simple. 'Buy' is irregular: its past simple is 'bought'.",
    not: {
      'has bought': "The present perfect cannot go with 'ago'.",
      buys: "'Buys' is the present. 'Two days ago' shows the past.",
      brought: "'Brought' is the past of 'bring', a different verb. You buy something in a shop.",
    },
    more: "'Bought' and 'brought' look alike. Bring, brought means take something with you.",
    tip: "'Ago' never goes with the present perfect: say 'She bought it two days ago', not 'She has bought it two days ago'.",
  },
  'When did you ___ (arrive) in England?': {
    why: "After 'did', the main verb is always plain. 'Did' already shows the past.",
    not: {
      arrived: "The past is already in 'did'. After it, the verb stays plain.",
      arriving: "An -ing verb needs 'was' or 'were', not 'did'.",
      arrives: "After 'did', use the plain verb, with no -s.",
    },
    more: 'Past simple questions: did, then the subject, then the plain verb.',
    tip: "Ask someone about their past with 'When did you' and the plain verb.",
  },
  'My aunt ___ (move) to Canada in 2019.': {
    why: "2019 is a finished time, so we use the past simple. 'Move' is regular: add -d to make 'moved'.",
    not: {
      'has moved': "The present perfect cannot go with a finished time like 'in 2019'.",
      moves: "'Moves' is the present. 2019 is in the past.",
      move: "'Move' is the plain verb. A finished time in the past needs the past simple.",
    },
    more: 'Regular verbs make the past simple with -ed, or just -d when the verb ends in e.',
    tip: 'Use the past simple with years: in 2019, in 1990.',
  },
  'I ___ (not / understand) the question, so I asked the teacher.': {
    why: "'I asked' shows the story is in the past, so we use the past simple negative: 'didn’t' and the plain verb.",
    not: {
      'don’t understand': "'Don’t' is the present. 'I asked' shows the past.",
      'haven’t understood':
        'The present perfect links to now, but this is a finished story in the past.',
      'not understood': "English needs 'did' to make a past simple negative.",
    },
    more: "After 'didn’t', the verb is plain: didn’t understand, didn’t agree.",
    tip: 'In class, it is fine to say you do not understand and to ask for help.',
  },
  'The match ___ (end) ten minutes ago.': {
    why: "'Ten minutes ago' is a finished time, so we use the past simple. 'End' is regular: add -ed.",
    not: {
      'has ended': "The present perfect cannot go with 'ago'.",
      ends: "'Ends' is the present. 'Ago' shows the past.",
      'is ending': "'Is ending' is happening now. 'Ten minutes ago' is in the past.",
    },
    more: "Without a past time, we could use the present perfect for news: The match has ended. With 'ago', we cannot.",
    tip: "If you see 'ago', check that your verb is in the past simple.",
  },
  'We ___ (eat) pizza for dinner last night.': {
    why: "'Last night' is a finished time, so we use the past simple. 'Eat' is irregular: its past simple is 'ate'.",
    not: {
      'have eaten': "The present perfect cannot go with 'last night'.",
      eat: "'Eat' is the present. 'Last night' shows the past.",
      eaten: "'Eaten' needs 'have' or 'had' before it.",
    },
    more: 'Eat, ate, eaten: three forms to learn together.',
    tip: 'Tell someone about a meal you had with the past simple.',
  },
  'Last year we ___ (fly) to Lagos to see my uncle.': {
    why: "'Last year' is a finished time, so we use the past simple. 'Fly' is irregular: its past simple is 'flew'.",
    not: {
      'have flown': "The present perfect cannot go with 'last year'.",
      fly: "'Fly' is the present. 'Last year' shows the past.",
      'are flying': "'Are flying' is happening now or planned. 'Last year' is in the past.",
    },
    more: 'Fly, flew, flown: three forms to learn together.',
    tip: 'Start a story about a trip with a time word and the past simple.',
  },
  'My grandmother ___ (write) this letter in 1965.': {
    why: "1965 is a finished time, so we use the past simple. 'Write' is irregular: its past simple is 'wrote'.",
    not: {
      'has written': "The present perfect cannot go with a finished time like 'in 1965'.",
      writes: "'Writes' is the present. 1965 is in the past.",
      written: "'Written' needs 'has' or 'had' before it.",
    },
    more: 'Write, wrote, written: the second form stands alone in the past simple.',
    tip: 'For family history, use the past simple with dates.',
  },
  'At eight o’clock last night, I ___ (watch) a film.': {
    why: "At that moment last night, the film was in progress, so we use the past continuous. With 'I', the form is 'was' and the -ing verb.",
    not: {
      'am watching': "'Am watching' is the present. 'Last night' shows the past.",
      'were watching': "'Were' goes with you, we and they. With 'I', use 'was'.",
      'was watch': "After 'was', the verb needs -ing in the past continuous.",
    },
    more: 'The past continuous describes an action in progress at a time in the past.',
    tip: "To say what you were doing at a time, use 'was' or 'were' and an -ing verb.",
  },
  'They ___ (play) tennis when it started to rain.': {
    why: "The game was in progress when the rain began, so we use the past continuous. 'They' takes 'were' and the -ing verb.",
    not: {
      'are playing': "'Are playing' is the present. 'It started to rain' shows the past.",
      'was playing': "'Was' goes with I, he, she and it. With 'they', use 'were'.",
      'were play': "After 'were', the verb needs -ing in the past continuous.",
    },
    more: 'The longer action takes the past continuous, and the event that interrupts it takes the past simple.',
    tip: "Use 'when' and the past simple for the interruption.",
  },
  'Who were you ___ (talk) to on the phone?': {
    why: "After 'were' in a question about an action in progress, we need the -ing form: the past continuous.",
    not: {
      talk: "After 'were', the verb needs -ing.",
      talked: "'Talked' is the past simple. After 'were', use the -ing form.",
      talks: "After 'were', the verb needs -ing, not -s.",
    },
    more: "In a past continuous question, 'was' or 'were' comes before the subject.",
    tip: "Ask about what someone was doing with 'were you' and an -ing verb.",
  },
  'It ___ (rain) when we left the house.': {
    why: "The rain was already falling when we left, so we use the past continuous. 'It' takes 'was' and the -ing verb.",
    not: {
      'is raining': "'Is raining' is the present. 'We left' shows the past.",
      'were raining': "'Were' goes with you, we and they. With 'it', use 'was'.",
      'was rain': "After 'was', the verb needs -ing in the past continuous.",
    },
    more: 'The past continuous sets the background, here the weather, for an event.',
    tip: 'In a story, describe the weather with the past continuous.',
  },
  'I ___ (cycle) to school when I met my old teacher.': {
    why: "The ride was in progress when the speaker met the teacher, so we use the past continuous. With 'I', the form is 'was' and the -ing verb.",
    not: {
      'am cycling': "'Am cycling' is the present. 'I met' shows the past.",
      'were cycling': "'Were' goes with you, we and they. With 'I', use 'was'.",
      cycling: "An -ing verb needs 'was' or 'were' before it.",
    },
    more: "'When' joins the short event, 'I met', to the longer action already in progress.",
    tip: 'Use the past continuous for what you were doing when something surprising happened.',
  },
  'We ___ (not / listen) when the teacher explained the homework.': {
    why: "The not-listening was going on while the teacher explained, so we use the past continuous negative. 'We' takes 'weren’t' and the -ing verb.",
    not: {
      'aren’t listening': "'Aren’t listening' is the present. 'Explained' shows the past.",
      'wasn’t listening': "'Wasn’t' goes with I, he, she and it. With 'we', use 'weren’t'.",
      'didn’t listening': "'Didn’t' goes with the plain verb, not with -ing.",
    },
    more: "The past continuous negative is 'wasn’t' or 'weren’t' and an -ing verb.",
    tip: 'Explain why you missed something with the past continuous: I wasn’t looking.',
  },
  'My sister ___ (sleep) when the storm began.': {
    why: "She was already asleep when the storm started, so we use the past continuous. 'My sister' takes 'was' and the -ing verb.",
    not: {
      'is sleeping': "'Is sleeping' is the present. 'The storm began' shows the past.",
      'were sleeping': "'Were' goes with you, we and they. With one person, use 'was'.",
      'was sleep': "After 'was', the verb needs -ing in the past continuous.",
    },
    more: 'The storm is the short event, and the sleep is the longer action that was already going on.',
    tip: 'Set a scene at night with the past continuous: everyone was sleeping.',
  },
  'At this time yesterday, we ___ (fly) to Spain.': {
    why: "'At this time yesterday' names a moment in the past, and the flight was in progress then. 'We' takes 'were' and the -ing verb.",
    not: {
      'are flying': "'Are flying' is the present. 'Yesterday' shows the past.",
      'was flying': "'Was' goes with I, he, she and it. With 'we', use 'were'.",
      'were fly': "After 'were', the verb needs -ing in the past continuous.",
    },
    more: "'At this time yesterday' means at the same time of day, one day ago.",
    tip: 'Compare now and yesterday: at this time yesterday we were in the air.',
  },
  'Was it ___ (snow) when you got up?': {
    why: "After 'was' in a question about something in progress, we need the -ing form: the past continuous.",
    not: {
      snow: "After 'was', the verb needs -ing.",
      snowed: "'Snowed' is the past simple. After 'was', use the -ing form.",
      snows: "After 'was', the verb needs -ing, not -s.",
    },
    more: "We use 'it' as the subject for weather: it was snowing, it was windy.",
    tip: "Ask about the weather at a past moment with 'Was it' and an -ing verb.",
  },
  'Last night the baby ___ (cry) for hours.': {
    why: "The crying went on through the night, and the past continuous shows it in progress. 'The baby' takes 'was' and the -ing verb.",
    not: {
      'is crying': "'Is crying' is the present. 'Last night' shows the past.",
      'were crying': "'Were' is for plurals. 'The baby' is one, so use 'was'.",
      'was cry': "After 'was', the verb needs -ing in the past continuous.",
    },
    more: 'The past simple is also possible here: the baby cried for hours. The past continuous makes the crying feel long.',
    tip: 'To show that an action felt long, the past continuous helps: the wind was howling all day.',
  },
  'I ___ (live) in this flat since 2018.': {
    why: "'Since 2018' joins a past start to now, so we use the present perfect: 'have' and the past participle.",
    not: {
      'am living':
        "The present continuous cannot go with 'since'. A time from the past to now needs the present perfect.",
      lived:
        "The past simple would mean the speaker no longer lives there. 'Since' reaches up to now.",
      live: "The present simple cannot go with 'since'. A time from the past to now needs the present perfect.",
    },
    more: "'Since' gives the start of the time: since 2018, since Monday. 'For' gives its length.",
    tip: "Many learners use the present with 'since'. Always check for 'have' or 'has'.",
  },
  'She ___ (work) at the hospital for ten years, and she still loves it.': {
    why: "She started ten years ago and still works there, so we use the present perfect. 'She' takes 'has' and the past participle.",
    not: {
      'is working': "The present continuous does not go with 'for ten years' up to now.",
      worked: "The past simple would mean she has stopped. 'She still loves it' shows she has not.",
      works: "The present simple cannot go with 'for ten years' up to now.",
    },
    more: "'Still' shows the situation has not changed: a strong clue for the present perfect.",
    tip: "Say how long you have done something with the present perfect and 'for'.",
  },
  'Have you ever ___ (see) a whale?': {
    why: "After 'have' we need the past participle. For 'see', that is 'seen'.",
    not: {
      saw: "'Saw' is the past simple. After 'have', use the past participle.",
      see: "After 'have', the plain verb is wrong. We need the participle.",
      seeing: "After 'have', the verb needs its participle, not -ing.",
    },
    more: "'Ever' means at any time in your life. It goes in present perfect questions.",
    tip: "Ask about experiences with 'Have you ever' and a past participle.",
  },
  'I ___ (just / finish) my homework.': {
    why: "'Just' means a very short time ago, with a result now, so we use the present perfect: 'have', 'just', and the past participle.",
    not: {
      'have just finish': "After 'have', the verb needs its past participle, with -ed.",
      'has just finished': "'Has' goes with he, she and it. With 'I', use 'have'.",
      'just have finished': "'Just' goes between 'have' and the participle, not before 'have'.",
    },
    more: "'Just', 'already' and 'never' go between 'have' and the past participle.",
    tip: "Share good news that has just happened with 'have just' or 'has just'.",
  },
  'We ___ (not / see) the new film yet.': {
    why: "'Yet' asks about any time up to now, so we use the present perfect negative: 'haven’t' and the past participle.",
    not: {
      'don’t see':
        "The present simple does not go with 'yet'. Up to now needs the present perfect.",
      'haven’t saw': "'Saw' is the past simple. After 'haven’t', use the past participle.",
      'hasn’t seen': "'Hasn’t' goes with he, she and it. With 'we', use 'haven’t'.",
    },
    more: "In British English, 'yet' goes with the present perfect, at the end of a negative or a question.",
    tip: "Say what you still need to do with 'haven’t' and 'yet'.",
  },
  'My brother ___ (break) his arm, so he can’t play today.': {
    why: "The broken arm is the result now, so we use the present perfect. 'My brother' takes 'has' and the past participle, 'broken'.",
    not: {
      'has broke': "'Broke' is the past simple. After 'has', use the past participle.",
      'is breaking': "'Is breaking' would mean it is happening now. The arm is already broken.",
      'have broken': "'Have' goes with I, you, we and they. With one person, use 'has'.",
    },
    more: "Break, broke, broken: the third form goes after 'have', 'has' and 'had'.",
    tip: 'Use the present perfect to explain a situation now: why someone cannot come.',
  },
  'They ___ (already / eat) all the biscuits.': {
    why: "'Already' shows it happened sooner than expected, with a result now: no biscuits. So we use the present perfect.",
    not: {
      'have already ate': "'Ate' is the past simple. After 'have', use the past participle.",
      'has already eaten': "'Has' goes with he, she and it. With 'they', use 'have'.",
      'already have eat':
        "'Already' goes between 'have' and the participle, and the verb needs its participle form.",
    },
    more: "'Already' often goes with the present perfect in British English.",
    tip: "Use 'already' to show surprise that something has happened so soon.",
  },
  'How long have you ___ (know) Sara?': {
    why: "After 'have' we need the past participle. For 'know', that is 'known'.",
    not: {
      knew: "'Knew' is the past simple. After 'have', use the past participle.",
      know: "After 'have', the plain verb is wrong. We need the participle.",
      knowing: "'Know' is a state verb and does not take -ing here.",
    },
    more: "'How long' with the present perfect asks for a length of time up to now.",
    tip: "Answer 'How long...?' with 'for' and a length, or 'since' and a start.",
  },
  'My uncle ___ (own) this shop since 2010.': {
    why: "'Since 2010' joins a past start to now, so we use the present perfect. 'My uncle' takes 'has' and the past participle.",
    not: {
      owns: "The present simple cannot go with 'since'.",
      owned: "The past simple would mean he no longer owns it. 'Since' reaches up to now.",
      'is owning': "'Own' is a state verb, so it does not take -ing.",
    },
    more: "'Own' means have something as your property, such as a house or a car.",
    tip: "Say how long someone has had something with the present perfect and 'since'.",
  },
  'I ___ (never / ride) a horse.': {
    why: "'Never' here means at no time in my life up to now, so we use the present perfect: 'have', 'never', and the past participle, 'ridden'.",
    not: {
      'have never rode': "'Rode' is the past simple. After 'have', use the past participle.",
      'has never ridden': "'Has' goes with he, she and it. With 'I', use 'have'.",
      'never have ride':
        "'Never' goes between 'have' and the participle, and the verb needs its participle form.",
    },
    more: 'Ride, rode, ridden: like drive, drove, driven.',
    tip: "Talk about your experiences with 'I have never' and 'I have', then a participle.",
  },
  'When I got to the cinema, the film ___ (already / start).': {
    why: "The film started before the speaker arrived, so we use the past perfect: 'had', 'already', and the past participle.",
    not: {
      'has already started': "'Has' links to now. This story is all in the past, so use 'had'.",
      'had already start': "After 'had', the verb needs its past participle, with -ed.",
      'have already started': "'Have' links to now. For the earlier of two past events, use 'had'.",
    },
    more: 'The past perfect shows which of two past events came first.',
    tip: "In a story, use 'had' and a participle for what happened before the main event.",
  },
  'She was tired because she ___ (not / sleep) the night before.': {
    why: "The bad night came before she felt tired, so we use the past perfect negative: 'hadn’t' and the past participle.",
    not: {
      'hasn’t slept': "'Hasn’t' links to now. This is a story in the past, so use 'hadn’t'.",
      'hadn’t sleep': "After 'hadn’t', the verb needs its past participle.",
      'haven’t slept': "'Haven’t' links to now, and it does not go with 'she'.",
    },
    more: "'The night before' means the night before that day in the past.",
    tip: "Give the reason for a past feeling with 'because' and the past perfect.",
  },
  'I ___ (never / eat) sushi before I visited Japan.': {
    why: "We look back from the visit, a past event, to the time before it, so we use the past perfect: 'had never' and the past participle.",
    not: {
      'have never eaten':
        "'Have' looks back from now. Here we look back from the visit, so use 'had'.",
      'had never ate': "'Ate' is the past simple. After 'had', use the past participle.",
      'has never eaten': "'Has' links to now and goes with he, she and it.",
    },
    more: "'Before' and the past simple often go with the past perfect for the earlier time.",
    tip: "Describe a first time in the past with 'had never' before it.",
  },
  'By the time the doctor arrived, the pain ___ (go).': {
    why: "The pain went away before the doctor arrived, so we use the past perfect: 'had' and the past participle, 'gone'.",
    not: {
      'has gone': "'Has' links to now. This story is in the past, so use 'had'.",
      'had went': "'Went' is the past simple. After 'had', use the past participle.",
      'have gone': "'Have' links to now. For the earlier past event, use 'had'.",
    },
    more: "'By the time' with the past simple usually goes with the past perfect in the other half.",
    tip: "After 'by the time', check whether the other event happened earlier.",
  },
  'He couldn’t pay because he ___ (lose) his wallet.': {
    why: "He lost the wallet before he tried to pay, so we use the past perfect: 'had' and the past participle.",
    not: {
      'has lost': "'Has' links to now. This story is in the past, so use 'had'.",
      'had lose': "After 'had', the verb needs its past participle.",
      'have lost': "'Have' links to now and does not go with 'he'.",
    },
    more: 'Lose, lost, lost: the past simple and the participle are the same.',
    tip: "Explain a past problem with 'because' and the past perfect.",
  },
  'After we ___ (finish) dinner, we watched a film.': {
    why: "Dinner was over before the film began, so we use the past perfect for the earlier action: 'had' and the past participle.",
    not: {
      'have finished': "'Have' links to now. This story is in the past, so use 'had'.",
      'had finish': "After 'had', the verb needs its past participle, with -ed.",
      'has finished': "'Has' links to now and goes with he, she and it.",
    },
    more: "After 'after', the past perfect makes the order of events very clear.",
    tip: "Order events in your stories with 'after' and the past perfect.",
  },
  'The house was quiet. Everyone ___ (fall) asleep.': {
    why: "Everyone fell asleep before the moment the story describes, so we use the past perfect: 'had' and the past participle, 'fallen'.",
    not: {
      'has fallen': "'Has' links to now. The story is in the past, so use 'had'.",
      'had fell': "'Fell' is the past simple. After 'had', use the past participle.",
      'have fallen': "'Have' links to now, and 'everyone' takes a singular verb.",
    },
    more: 'Fall, fell, fallen: three forms to learn together.',
    tip: 'Use the past perfect to explain why a scene in a story looks the way it does.',
  },
  'I ___ (already / read) the book, so I knew the ending.': {
    why: "The reading happened before the time the speaker describes, so we use the past perfect: 'had', 'already', and the past participle.",
    not: {
      'have already read': "'Have' links to now, but 'I knew' puts the story in the past.",
      'has already read': "'Has' links to now and goes with he, she and it.",
      'was already read':
        "'Was read' is the passive, for a book that someone read. Here the speaker did the reading.",
    },
    more: "'Read' looks the same in all three forms, but the past forms sound like 'red'.",
    tip: "Check your verb forms with the time of the story: knew is past, so use 'had'.",
  },
  'She ___ (study) English for two years before she came to Britain.': {
    why: "The two years of study came before she came to Britain, a past event, so we use the past perfect: 'had' and the past participle.",
    not: {
      'has studied': "'Has' links to now. Here we look back from a past event.",
      studies: "'Studies' is the present. 'Before she came' puts the story in the past.",
      'is studying': "'Is studying' is happening now. The story is in the past.",
    },
    more: 'Study, studied: change y to i and add -ed.',
    tip: "Use 'had' and a participle with 'for' to say how long something lasted before a past event.",
  },
  'They ___ (just / leave) when we arrived.': {
    why: "They left a very short time before we arrived, so we use the past perfect: 'had', 'just', and the past participle.",
    not: {
      'have just left': "'Have' links to now. 'We arrived' puts the story in the past.",
      'has just left': "'Has' links to now and goes with he, she and it.",
      'had just leave': "After 'had', the verb needs its past participle.",
    },
    more: "'Had just' shows something happened only a moment before another past event.",
    tip: "To show a near miss in a story, use 'had just' and a participle.",
  },
  'I think it ___ (rain) later.': {
    why: "'I think' gives an opinion about the future, so we use 'will' and the plain verb.",
    not: {
      rains: "The present simple is for habits and facts. A guess about later needs 'will'.",
      'will rains': "After 'will', the verb has no -s.",
      'will to rain': "After 'will', there is no 'to'.",
    },
    more: "We often use 'will' after I think, I'm sure, probably and perhaps.",
    tip: "Give your opinion about the future with 'I think' and 'will'.",
  },
  'Don’t worry. I ___ (help) you with your bags.': {
    why: "The speaker offers help, deciding at that moment, so we use 'will' and the plain verb.",
    not: {
      help: "The present simple is for habits. An offer needs 'will'.",
      helps: "The -s goes with he, she and it, and an offer needs 'will'.",
      'am help': "We do not put 'am' before a plain verb.",
    },
    more: "'Will' is used for offers, promises and decisions made at the moment of speaking.",
    tip: "Offer help politely with 'I will' and a verb.",
  },
  'I’m sure you ___ (pass) the test.': {
    why: "'I’m sure' gives a confident guess about the future, so we use 'will' and the plain verb.",
    not: {
      pass: 'The present simple does not show a prediction about the future here.',
      passes: "The -s goes with he, she and it, not 'you'.",
      'will passing': "After 'will', use the plain verb, not -ing.",
    },
    more: "'Will' is the same for every subject: I will, you will, she will.",
    tip: "Encourage a friend with 'I’m sure you will'.",
  },
  'Perhaps they ___ (arrive) before dark.': {
    why: "'Perhaps' shows a guess about the future, so we use 'will' and the plain verb.",
    not: {
      arrive: 'The present simple does not show a guess about the future here.',
      arrives: "The -s goes with he, she and it, and a guess needs 'will'.",
      'will arrived': "After 'will', use the plain verb, not the past.",
    },
    more: "'Perhaps' and 'maybe' mean the same. Both often go with 'will'.",
    tip: "Use 'perhaps' with 'will' when you are not sure.",
  },
  'I promise I ___ (phone) you when I land.': {
    why: "A promise about the future takes 'will' and the plain verb.",
    not: {
      phone: "The present simple does not make a promise. Use 'will'.",
      phones: "The -s goes with he, she and it, not 'I'.",
      'will to phone': "After 'will', there is no 'to'.",
    },
    more: "'When I land' is in the present, even though it is about the future. After 'when', English uses the present.",
    tip: "Make a promise with 'I promise I will' and a verb.",
  },
  'The shop ___ (close) early on Christmas Eve.': {
    why: "Christmas Eve is a day still to come, so we need a future form. Of these options only 'will close' is right: 'will' and the plain verb.",
    not: {
      'will closes': "After 'will', the verb has no -s.",
      'will closing': "After 'will', use the plain verb, not -ing.",
      'is close': "We do not put 'is' before a plain verb.",
    },
    more: 'Christmas Eve is the day before Christmas Day, 24 December. Opening times can also take the present simple: The shop closes early on Christmas Eve.',
    tip: "Notices about special days often use 'will': The library will open late.",
  },
  'In 2050, people ___ (live) on the Moon, perhaps.': {
    why: "2050 is in the future, and this is a guess, so we use 'will' and the plain verb.",
    not: {
      live: 'The present simple does not show a guess about 2050.',
      lived: 'The past simple is for the past. 2050 is in the future.',
      'will lives': "After 'will', the verb has no -s.",
    },
    more: "Predictions about the far future use 'will': cars will fly, robots will cook.",
    tip: "Write about your hopes for the future with 'will'.",
  },
  'It’s cold in here. I ___ (shut) the window.': {
    why: "The speaker decides at this moment, so we use 'will' and the plain verb.",
    not: {
      shut: 'The present simple does not show a decision made now.',
      shuts: "The -s goes with he, she and it, and a decision needs 'will'.",
      'will to shut': "After 'will', there is no 'to'.",
    },
    more: "In speaking, 'will' is often shortened: I'll. It is the same verb.",
    tip: "React to a problem with 'I will' and what you will do about it.",
  },
  'I don’t think he ___ (come) to the party.': {
    why: "'I don’t think' gives an opinion about the future, so we use 'will' and the plain verb.",
    not: {
      'will comes': "After 'will', the verb has no -s.",
      'will coming': "After 'will', use the plain verb, not -ing.",
      come: "'He' needs 'will' here for the future, and without it the verb would need -s.",
    },
    more: "We usually make 'think' negative, not 'will': I don’t think he will come.",
    tip: "Give a negative opinion with 'I don’t think' and 'will'.",
  },
  'Will you ___ (carry) this box for me, please?': {
    why: "After 'will', the verb is always plain. 'Will you' with 'please' is a polite request.",
    not: {
      carries: "After 'will', the verb has no -s.",
      carrying: "After 'will', use the plain verb, not -ing.",
      'to carry': "After 'will', there is no 'to'.",
    },
    more: "'Will you' and 'Can you' both make requests. 'Could you' is more polite.",
    tip: "Ask for help with 'Will you' or 'Could you', a plain verb, and 'please'.",
  },
  'Look at those dark clouds: it ___ (rain).': {
    why: "We can see the evidence now, the dark clouds, so we use 'going to': 'is', 'going to', and the plain verb.",
    not: {
      'going to rain': "'Going to' needs 'am', 'is' or 'are' before it.",
      'is go to rain': "The form is 'going to', not 'go to'.",
      'is going to raining': "After 'going to', use the plain verb, not -ing.",
    },
    more: "'Going to' is for predictions based on what we can see now.",
    tip: "When you can see what is about to happen, use 'going to'.",
  },
  'We ___ (visit) the museum tomorrow. We bought the tickets online.': {
    why: "The plan is already made: the tickets are bought. For a plan like this, we use 'are going to' and the plain verb.",
    not: {
      'going to visit': "'Going to' needs 'am', 'is' or 'are' before it.",
      'are go to visit': "The form is 'going to', not 'go to'.",
      'will going to visit': "'Will' and 'going to' do not go together. Use 'are going to'.",
    },
    more: "'Going to' is for plans and intentions made before now.",
    tip: "Talk about plans you have already made with 'going to'.",
  },
  'She ___ (study) medicine at university next year.': {
    why: "This is her plan for next year, so we use 'is going to' and the plain verb.",
    not: {
      'going to study': "'Going to' needs 'is' before it with 'she'.",
      'is go to study': "The form is 'going to', not 'go to'.",
      'will going to study': "'Will' and 'going to' do not go together.",
    },
    more: "'Next year' is a future time. The plan was made before now.",
    tip: "Say what you plan to study with 'I am going to' and a subject.",
  },
  'They ___ (sell) their old car next week.': {
    why: "This is a plan already decided, so we use 'are going to' and the plain verb.",
    not: {
      'going to sell': "'Going to' needs 'are' before it with 'they'.",
      'are go to sell': "The form is 'going to', not 'go to'.",
      'are going to selling': "After 'going to', use the plain verb, not -ing.",
    },
    more: "'Going to' and the plain verb is one of the most common ways to talk about the future.",
    tip: 'Check the three parts: am, is or are; going to; then the plain verb.',
  },
  'I ___ (start) a new job in September.': {
    why: "This is a plan already made, so we use 'going to'. With 'I', the form is 'am going to' and the plain verb.",
    not: {
      'going to start': "'Going to' needs 'am' before it with 'I'.",
      'am go to start': "The form is 'going to', not 'go to'.",
      'is going to start': "'Is' goes with he, she and it. With 'I', use 'am'.",
    },
    more: "Months take 'in': in September, in May.",
    tip: "Share your news with 'I am going to' and your plan.",
  },
  'Be careful: you ___ (drop) those plates.': {
    why: "The speaker can see what is about to happen, so we use 'going to'. With 'you', the form is 'are going to' and the plain verb.",
    not: {
      'going to drop': "'Going to' needs 'are' before it with 'you'.",
      'are go to drop': "The form is 'going to', not 'go to'.",
      'will going to drop': "'Will' and 'going to' do not go together.",
    },
    more: "'Going to' often gives warnings about something we can see is about to happen.",
    tip: "Warn someone with 'Be careful' and 'going to'.",
  },
  'We ___ (have) a barbecue if the weather stays fine.': {
    why: "This is a plan, so we use 'are going to' and the plain verb. The 'if' half stays in the present: if the weather stays fine.",
    not: {
      'going to have': "'Going to' needs 'are' before it with 'we'.",
      'are go to have': "The form is 'going to', not 'go to'.",
      'will going to have': "'Will' and 'going to' do not go together.",
    },
    more: "After 'if', English uses the present for the future: if it stays fine, if we have time.",
    tip: "Make plans that depend on the weather with 'going to' and 'if'.",
  },
  'Watch out. That ladder ___ (fall).': {
    why: "We can see the ladder is about to fall, so we use 'going to': 'is going to' and the plain verb.",
    not: {
      falls: 'The present simple is for habits and facts, not for something about to happen.',
      'going to fall': "'Going to' needs 'is' before it.",
      'is going to falling': "After 'going to', use the plain verb, not -ing.",
    },
    more: "'Watch out' is a warning, like 'Be careful'.",
    tip: "Shout a warning with 'Watch out' and 'going to'.",
  },
  'What are you going to ___ (do) this weekend?': {
    why: "After 'going to', the verb is always plain. So the answer is 'do'.",
    not: {
      doing: "After 'going to', use the plain verb, not -ing.",
      did: "'Did' is the past. After 'going to', use the plain verb.",
      does: "After 'going to', the verb has no -s.",
    },
    more: "Questions with 'going to' put 'am', 'is' or 'are' before the subject.",
    tip: "Ask about someone's plans with 'What are you going to' and a verb.",
  },
  'My brother ___ (not / come) with us tomorrow.': {
    why: "This is a plan for tomorrow, in the negative, so we use 'isn’t going to' and the plain verb.",
    not: {
      'not going to come': "'Going to' needs 'is' before 'not' with 'my brother'.",
      'doesn’t going to come':
        "'Doesn’t' goes with plain verbs. With 'going to', the negative is 'isn’t'.",
      'isn’t go to come': "The form is 'going to', not 'go to'.",
    },
    more: "The negative goes after 'am', 'is' or 'are': I'm not going to, he isn't going to.",
    tip: "Say what someone is not planning to do with 'isn’t going to'.",
  },
  'A: Have you seen my phone? B: Yes, I ___ (see) it on the kitchen table five minutes ago.': {
    why: "A asks with the present perfect, but B gives an exact finished time: 'five minutes ago'. A finished time needs the past simple.",
    not: {
      'have seen': "The present perfect cannot go with 'ago', even when the question used it.",
      see: "'See' is the present. 'Five minutes ago' shows the past.",
      seen: "'Seen' needs 'have' or 'had' before it.",
    },
    more: 'Conversations often move from the present perfect, with no time, to the past simple, once a time is given.',
    tip: "If your answer gives a time such as 'ago' or 'yesterday', switch to the past simple.",
  },
  'A: Is Leo here? B: No, he ___ (go) home. He left at three.': {
    why: "Leo is not here now because he went home: the result is now. So the first answer uses the present perfect, 'has gone'. The time, at three, comes after, in the past simple.",
    not: {
      'has went': "'Went' is the past simple. After 'has', use the past participle.",
      'have gone': "'Have' goes with I, you, we and they. With 'he', use 'has'.",
      goes: "'Goes' is for a habit. Here we explain why he is not here now.",
    },
    more: "'Has gone' means he went and is still away. 'Has been' would mean he went and came back.",
    tip: "Explain why someone is missing with 'has gone' and the place.",
  },
  'A: How was your holiday? B: Great. We ___ (stay) in a small hotel by the sea.': {
    why: "The holiday is over, and A asks with 'was', in the past. B describes it with the past simple.",
    not: {
      'have stayed': 'The present perfect links to now, but the holiday is finished.',
      stay: "'Stay' is the present. The holiday is in the past.",
      'are staying': "'Are staying' is happening now. B is back from the holiday.",
    },
    more: 'Once a conversation is about a finished event, it usually stays in the past simple.',
    tip: "Answer 'How was...?' with an adjective, then details in the past simple.",
  },
  'A: Do you know this song? B: Yes, I ___ (hear) it many times.': {
    why: "'Many times' counts how often up to now, with no time given, so we use the present perfect: 'have' and the past participle.",
    not: {
      'has heard': "'Has' goes with he, she and it. With 'I', use 'have'.",
      hear: 'The present simple does not count times up to now.',
      'am hearing': "'Hear' is a sense verb and does not usually take -ing.",
    },
    more: 'The present perfect is used for experience: how many times something has happened in your life so far.',
    tip: 'Count your experiences with the present perfect: three times, many times.',
  },
  'A: Can you ride a bike? B: Yes. I first ___ (ride) one when I was five.': {
    why: "'When I was five' is a finished time, so B uses the past simple. 'Ride' is irregular: its past simple is 'rode'.",
    not: {
      'have ridden': "The present perfect cannot go with a finished time like 'when I was five'.",
      ride: "'Ride' is the present. 'When I was five' shows the past.",
      ridden: "'Ridden' is the past participle. It needs 'have' or 'had' before it.",
    },
    more: "'First' here means for the first time, at the start.",
    tip: "Say when you first did something with 'first' and the past simple.",
  },
  'A: Are you hungry? B: No, I ___ (just / eat) a big sandwich.': {
    why: "B is not hungry now because of something a moment ago, so we use the present perfect: 'have', 'just', and the past participle.",
    not: {
      'have just ate': "'Ate' is the past simple. After 'have', use the past participle.",
      'has just eaten': "'Has' goes with he, she and it. With 'I', use 'have'.",
      'have just eat': "After 'have', the verb needs its past participle.",
    },
    more: "'Just' means a very short time ago. It sits between 'have' and the participle.",
    tip: "Give a reason for how you feel now with the present perfect and 'just'.",
  },
  'A: Where is your bike? B: Someone ___ (steal) it. I left it outside the shop last night.': {
    why: "The bike is gone now, so B gives the result with the present perfect: 'has' and the past participle, 'stolen'. The details then move to the past simple.",
    not: {
      'has stole': "'Stole' is the past simple. After 'has', use the past participle.",
      steals: "'Steals' is for a habit. The theft is one event, and its result is now.",
      'is stealing': "'Is stealing' would be happening now. The bike is already gone.",
    },
    more: 'Steal, stole, stolen: three forms to learn together.',
    tip: 'Report news with the present perfect first, then the details in the past simple.',
  },
  'A: Did you like the film? B: I don’t know. I ___ (not / watch) it yet.': {
    why: "'Yet' asks about any time up to now, so we use the present perfect negative: 'haven’t' and the past participle.",
    not: {
      'don’t watch': "The present simple does not go with 'yet'.",
      'haven’t watch': "After 'haven’t', the verb needs its past participle, with -ed.",
      'hasn’t watched': "'Hasn’t' goes with he, she and it. With 'I', use 'haven’t'.",
    },
    more: "In British English, 'yet' goes with the present perfect in negatives and questions.",
    tip: "Say what you still have not done with 'haven’t' and 'yet'.",
  },
  'A: Have you ever been to Scotland? B: Yes, I ___ (visit) Edinburgh last summer.': {
    why: "A asks about experience, but B gives a finished time: 'last summer'. With a finished time, B switches to the past simple.",
    not: {
      'have visited': "The present perfect cannot go with 'last summer'.",
      visit: "'Visit' is the present. 'Last summer' shows the past.",
      'am visiting': "'Am visiting' is happening now or planned. 'Last summer' is in the past.",
    },
    more: "'Have you ever...?' often gets a short answer, then the details in the past simple.",
    tip: "Answer an experience question with 'Yes', then say when, in the past simple.",
  },
  'A: Why are you so happy? B: I ___ (pass) my driving test.': {
    why: "B is happy now because of a recent event, and gives no time, so we use the present perfect: 'have' and the past participle.",
    not: {
      pass: 'The present simple is for habits. Passing a test is one event.',
      'am passing': "'Am passing' would be happening now. The test is over.",
      'has passed': "'Has' goes with he, she and it. With 'I', use 'have'.",
    },
    more: 'We use the present perfect for news with a result now. The past simple would also work once you add a time.',
    tip: "Share good news with 'I have' and a past participle.",
  },
  'We got to the cinema at eight. The film ___ (start) ten minutes before, so we missed the beginning.':
    {
      why: "The film started before we arrived, an earlier past event, so we use the past perfect: 'had' and the past participle.",
      not: {
        'has started': "'Has' links to now. The story is in the past, so use 'had'.",
        starts: "'Starts' is the present. The story is in the past.",
        'had start': "After 'had', the verb needs its past participle, with -ed.",
      },
      more: "'Before' at the end means before that past moment, here before we arrived.",
      tip: "Use 'had' and a participle to go one step back in a story.",
    },
  'When Mia got home, the kitchen was clean. Her brother ___ (wash) all the dishes.': {
    why: "The washing happened before Mia got home, and explains why the kitchen was clean. So we use the past perfect: 'had' and the past participle.",
    not: {
      'has washed': "'Has' links to now. The story is in the past, so use 'had'.",
      washes: "'Washes' is the present. The story is in the past.",
      'had wash': "After 'had', the verb needs its past participle, with -ed.",
    },
    more: 'The past perfect often explains a past situation: what had happened to make it so.',
    tip: 'When you describe how a place looked, use the past perfect to say what had happened.',
  },
  'I was very nervous on the plane. I ___ (never / fly) before.': {
    why: "We look back from that flight to the time before it, so we use the past perfect: 'had never' and the past participle, 'flown'.",
    not: {
      'have never flown':
        "'Have' looks back from now, but now the speaker has flown. Here we look back from that flight.",
      'had never flew': "'Flew' is the past simple. After 'had', use the past participle.",
      'has never flown': "'Has' links to now and goes with he, she and it.",
    },
    more: "'Had never' and a participle describes a first time in the past.",
    tip: "Explain a feeling on a first try with 'had never' and a participle.",
  },
  'The teacher was angry with Sam. He ___ (forget) his homework again.': {
    why: "Forgetting came before the teacher was angry, and explains it. So we use the past perfect: 'had' and the past participle.",
    not: {
      'has forgotten': "'Has' links to now. The story is in the past, so use 'had'.",
      'had forgot': "'Forgot' is the past simple. After 'had', use the participle, 'forgotten'.",
      forgets: "'Forgets' is for a habit now. The story is in the past.",
    },
    more: "Forget, forgot, forgotten: the third form goes after 'had'.",
    tip: 'Give the cause of a past feeling with the past perfect.',
  },
  'When we arrived at the party, most of the guests ___ (leave).': {
    why: "The guests went before we arrived, so their leaving is the earlier past event: 'had' and the past participle, 'left'.",
    not: {
      'have left': "'Have' links to now. The story is in the past, so use 'had'.",
      'has left': "'Has' links to now, and 'most of the guests' is plural.",
      'had leave': "After 'had', the verb needs its past participle.",
    },
    more: 'With the past simple instead, the guests would leave as we arrived. The past perfect shows they had already gone.',
    tip: 'Use the past perfect when the order of events changes the meaning.',
  },
  'Ana was tired at school. She ___ (stay) up late to finish her project.': {
    why: "Staying up came before she felt tired, and explains it. So we use the past perfect: 'had' and the past participle.",
    not: {
      'has stayed': "'Has' links to now. The story is in the past, so use 'had'.",
      stays: "'Stays' is the present. The story is in the past.",
      'is staying': "'Is staying' is happening now. The story is in the past.",
    },
    more: "'Stay up' means not go to bed.",
    tip: 'Explain why someone felt tired or happy with the past perfect.',
  },
  'I recognised the man at once. I ___ (meet) him at a wedding two years before.': {
    why: "The meeting came long before the moment of recognising, so we use the past perfect: 'had' and the past participle, 'met'.",
    not: {
      'have met': "'Have' links to now. The story is in the past, so use 'had'.",
      meet: "'Meet' is the present. The story is in the past.",
      'has met': "'Has' links to now and goes with he, she and it.",
    },
    more: "'Two years before' means two years before that past moment, not before now.",
    tip: "Use 'before', not 'ago', when you count back from a past moment.",
  },
  'The streets were wet in the morning. It ___ (rain) in the night.': {
    why: "The rain came before the morning, and explains the wet streets. So we use the past perfect: 'had' and the past participle.",
    not: {
      'has rained': "'Has' links to now. The story is in the past, so use 'had'.",
      rains: "'Rains' is the present. The story is in the past.",
      'is raining': "'Is raining' is happening now. The story is in the past.",
    },
    more: 'The past perfect lets a writer explain what came before, without telling events in order.',
    tip: 'Look for a clue that something happened earlier: wet streets, a clean kitchen.',
  },
  'Zara could not get into her flat. She ___ (leave) her keys at school.': {
    why: 'Leaving the keys came before she tried to get in, and explains why she could not. So we use the past perfect.',
    not: {
      'has left': "'Has' links to now. The story is in the past, so use 'had'.",
      leaves: "'Leaves' is the present. The story is in the past.",
      'had leave': "After 'had', the verb needs its past participle, 'left'.",
    },
    more: 'Leave, left, left: the past simple and the participle are the same.',
    tip: 'When you explain a past problem, use the past perfect for its cause.',
  },
  'Last summer we went on a cycling holiday. By the end of the first day, we ___ (cycle) fifty kilometres.':
    {
      why: "'By the end of the first day' looks back from a past moment, so we use the past perfect: 'had' and the past participle.",
      not: {
        'have cycled': "'Have' looks back from now. Here we look back from a day last summer.",
        cycle: "'Cycle' is the present. The story is in the past.",
        'had cycle': "After 'had', the verb needs its past participle, with -d.",
      },
      more: "'By' a time means at that time or before it.",
      tip: "Use 'by' and the past perfect to say how much was done before a past moment.",
    },
  'Yesterday I saw an accident. I ___ (stand) at the bus stop when two cars crashed.': {
    why: "The standing was in progress when the crash happened, so we use the past continuous. With 'I', the form is 'was' and the -ing verb.",
    not: {
      'am standing': "'Am standing' is the present. 'Yesterday' shows the past.",
      'were standing': "'Were' goes with you, we and they. With 'I', use 'was'.",
      'have stood': 'The present perfect links to now. This story is about yesterday.',
    },
    more: "The past continuous gives the background; the past simple, 'crashed', gives the event.",
    tip: 'When you report what you saw, say what you were doing with the past continuous.',
  },
  'Sorry I missed your call. I ___ (drive), so I could not answer.': {
    why: "The driving was in progress when the phone rang, so we use the past continuous. With 'I', the form is 'was' and the -ing verb.",
    not: {
      'were driving': "'Were' goes with you, we and they. With 'I', use 'was'.",
      'have driven': 'The present perfect links to now. The missed call is a finished past event.',
      'was drive': "After 'was', the verb needs -ing in the past continuous.",
    },
    more: "'I could not answer' is in the past, so the reason is in the past too.",
    tip: 'Explain a missed call with the past continuous: say what was going on.',
  },
  'While we ___ (have) dinner, the lights went out.': {
    why: "Dinner was in progress when the lights went out, so we use the past continuous. 'We' takes 'were' and the -ing verb.",
    not: {
      'are having': "'Are having' is the present. 'The lights went out' shows the past.",
      'was having': "'Was' goes with I, he, she and it. With 'we', use 'were'.",
      'have had': 'The present perfect links to now. This is a story in the past.',
    },
    more: "'While' introduces the longer action; the shorter event comes in the past simple.",
    tip: "Start a story sentence with 'While' and the past continuous.",
  },
  'It was a beautiful morning. The wind ___ (blow) gently and the sea was calm.': {
    why: "The text describes a past scene, with the wind in progress at that time, so we use the past continuous. 'The wind' takes 'was' and the -ing verb.",
    not: {
      'is blowing': "'Is blowing' is the present. The scene is in the past.",
      'were blowing': "'Were' is for plurals. 'The wind' is one thing, so use 'was'.",
      blows: "'Blows' is the present. The scene is in the past.",
    },
    more: 'Writers set a scene with the past continuous, then start the action with the past simple.',
    tip: 'Open a story with weather in the past continuous to set the mood.',
  },
  'Last night I heard a strange noise. I ___ (read) in bed when it started.': {
    why: "The reading was in progress when the noise started, so we use the past continuous. With 'I', the form is 'was' and the -ing verb.",
    not: {
      'am reading': "'Am reading' is the present. 'Last night' shows the past.",
      'were reading': "'Were' goes with you, we and they. With 'I', use 'was'.",
      'have read': 'The present perfect links to now. The story is about last night.',
    },
    more: "'It started' is the short event; 'was reading' is the background.",
    tip: 'In a spooky story, the past continuous builds the scene before something happens.',
  },
  'A: What were you doing when I called? B: I ___ (tidy) my room.': {
    why: "A asks with the past continuous, 'were you doing', so B answers the same way. With 'I', the form is 'was' and the -ing verb.",
    not: {
      'am tidying': "'Am tidying' is the present. A asks about the time of the call.",
      'were tidying': "'Were' goes with you, we and they. With 'I', use 'was'.",
      'have tidied': 'The present perfect links to now. A asks about one moment in the past.',
    },
    more: 'Answer a question in the same tense as the question, unless the time changes.',
    tip: "Listen for 'were you doing' and answer with 'I was' and an -ing verb.",
  },
  'Last Saturday was busy. First I ___ (clean) my room, then I went shopping.': {
    why: "'First' and 'then' list finished actions one after the other, so we use the past simple. 'Clean' is regular: add -ed.",
    not: {
      clean: "'Clean' is the present. The day was last Saturday.",
      'have cleaned': "The present perfect cannot go with 'last Saturday'.",
      'am cleaning': "'Am cleaning' is happening now. The day is over.",
    },
    more: 'A list of completed actions uses the past simple: first, then, after that.',
    tip: "Use 'first', 'then' and 'after that' with the past simple to tell a day in order.",
  },
  'When the phone rang, I ___ (answer) it at once.': {
    why: "'At once' shows the answering came straight after the ringing, two finished actions in order. So both take the past simple.",
    not: {
      answer: "'Answer' is the present. 'The phone rang' shows the past.",
      'have answered': 'The present perfect links to now. This is one finished moment.',
      answers: "'Answers' is the present, and it does not go with 'I'.",
    },
    more: "'When' with two past simple verbs shows one action after the other.",
    tip: 'If one action quickly followed another, use the past simple for both.',
  },
  'A: Did you see the match last night? B: No, I ___ (study) for my test all evening.': {
    why: "B explains what was in progress during the match, all evening, so we use the past continuous. With 'I', the form is 'was' and the -ing verb.",
    not: {
      'am studying': "'Am studying' is the present. 'Last night' shows the past.",
      'were studying': "'Were' goes with you, we and they. With 'I', use 'was'.",
      'have studied': 'The present perfect links to now. A asks about last night.',
    },
    more: "'All evening' shows a long action, which suits the past continuous.",
    tip: 'Say why you missed something with the past continuous and a time.',
  },
  'The wedding party went on very late. At midnight, my parents ___ (still / dance).': {
    why: "At that moment, midnight, the dancing was still going on, so we use the past continuous: 'were', 'still', and the -ing verb.",
    not: {
      'are still dancing': "'Are' is the present. The party is in the past.",
      'was still dancing': "'Was' goes with one person. 'My parents' are two, so use 'were'.",
      'have still danced':
        'The present perfect does not describe an action in progress at a past moment.',
    },
    more: "'Still' goes after 'was' or 'were' and before the -ing verb.",
    tip: "Describe a late night with 'at midnight' and the past continuous.",
  },
  'My dad is a chef. He ___ (work) in a restaurant in the city centre.': {
    why: "This is a fact about his job, true in general, so we use the present simple. 'He' takes the verb with -s.",
    not: {
      work: "'He' needs the -s ending in the present simple.",
      working: 'An -ing form cannot be the main verb on its own.',
      'is work': "We do not put 'is' before a plain verb.",
    },
    more: 'Jobs and where people work are permanent facts, so they take the present simple.',
    tip: "Describe family members' jobs with the present simple.",
  },
  'A: Where is Mum? B: She ___ (work) in the garden.': {
    why: "A asks where Mum is now, so B describes what she is doing at this moment: the present continuous, 'is' and the -ing verb.",
    not: {
      works: "'Works' would be a fact about her job. A asks about now.",
      work: "'She' needs a singular verb, and here we need the present continuous.",
      working: "An -ing verb needs 'is' before it.",
    },
    more: 'The same verb can take both tenses: one for a fact, one for now.',
    tip: "Answer 'Where is...?' with the place or the action happening now.",
  },
  'A: Do you like this music? B: Yes, I ___ (love) it.': {
    why: "'Love' is a feeling, a state verb, so it takes the present simple. With 'I', the verb is plain.",
    not: {
      loves: "The -s ending goes with he, she and it. With 'I', use the plain verb.",
      loving: 'An -ing form cannot be the main verb on its own.',
      'am love': "We do not put 'am' before a plain verb.",
    },
    more: "Advertisements sometimes use 'loving' with 'I'm', but in your writing keep 'love' in the simple form.",
    tip: 'Give opinions with state verbs in the present simple: love, like, hate, prefer.',
  },
  'A: What does your sister do? B: She ___ (teach) maths at a school in Leeds.': {
    why: "'What does your sister do?' asks about her job, a fact. So B uses the present simple. 'She' takes -es after 'teach'.",
    not: {
      teach: "'She' needs the -es ending in the present simple.",
      teaching: 'An -ing form cannot be the main verb on its own.',
      'is teach': "We do not put 'is' before a plain verb.",
    },
    more: 'Verbs ending in -ch, -sh, -s or -x add -es: teaches, washes, misses, fixes.',
    tip: "Answer 'What does she do?' with her job in the present simple.",
  },
  'A: What is your sister doing? B: She ___ (write) an email to her teacher.': {
    why: "'What is your sister doing?' asks about now, so B answers with the present continuous: 'is' and the -ing verb.",
    not: {
      writes: "'Writes' would be a habit. A asks about this moment.",
      write: "'She' needs a singular verb, and here we need the present continuous.",
      writing: "An -ing verb needs 'is' before it.",
    },
    more: 'Write drops its e before -ing: writing, with one t.',
    tip: "Compare the questions: 'What does she do?' is her job, 'What is she doing?' is now.",
  },
  'A: Why are you wearing a coat? B: Because it ___ (snow) outside.': {
    why: "B explains the coat with the weather now, so we use the present continuous: 'is' and the -ing verb.",
    not: {
      snows: "'Snows' is for what usually happens. B means right now.",
      snow: "'It' needs a singular verb, and here we need the present continuous.",
      snowing: "An -ing verb needs 'is' before it.",
    },
    more: "A reason about now, after 'because', also takes the present continuous.",
    tip: "Give reasons about now with 'because' and the present continuous.",
  },
  'This week is different. Usually I walk to school, but this week I ___ (take) the bus.': {
    why: "'Usually' gives the habit, and 'this week' a temporary change. A temporary situation takes the present continuous: 'am' and the -ing verb.",
    not: {
      takes:
        "'Takes' goes with he, she and it, and a temporary change needs the present continuous.",
      taking: "An -ing verb needs 'am' before it.",
      'is taking': "'Is' goes with he, she and it. With 'I', use 'am'.",
    },
    more: 'The present simple is for habits; the present continuous for something different, for now.',
    tip: "Contrast a habit and a change with 'usually' and 'but this week'.",
  },
  'A: Do you understand the question? B: No, I ___ (not / understand) it.': {
    why: "'Understand' is a state verb, so it takes the present simple. The negative with 'I' is 'don’t' and the plain verb.",
    not: {
      'am not understanding':
        "'Understand' is a state verb and does not take -ing in standard English.",
      'doesn’t understand': "'Doesn’t' goes with he, she and it. With 'I', use 'don’t'.",
      'not understand': "English needs 'do' to make a present simple negative.",
    },
    more: 'Short answers are also possible: No, I don’t.',
    tip: 'It is always fine to say you do not understand and to ask again.',
  },
  'A: Can I borrow your pen? B: Sorry, I ___ (use) it right now.': {
    why: "'Right now' shows an action happening at this moment, so we use the present continuous: 'am' and the -ing verb.",
    not: {
      use: "'Use' is the present simple, for habits. 'Right now' needs the continuous.",
      uses: "'Uses' goes with he, she and it, and the sentence needs the continuous.",
      using: "An -ing verb needs 'am' before it.",
    },
    more: 'Use drops its e before -ing: using.',
    tip: "Refuse politely with 'Sorry' and the present continuous.",
  },
  'Every summer my family goes to the coast. We ___ (rent) a small cottage near the beach.': {
    why: "'Every summer' shows a habit, so the second sentence continues it in the present simple. With 'we', the verb is plain.",
    not: {
      rents: "The -s ending goes with he, she and it. With 'we', use the plain verb.",
      renting: 'An -ing form cannot be the main verb on its own.',
      rented: "'Rented' is the past. The habit is still true now: every summer.",
    },
    more: "'Rent' means pay to use something that someone else owns, such as a house.",
    tip: "Describe family traditions with 'every' and the present simple.",
  },
  'A: The phone is ringing. B: OK, I ___ (answer) it.': {
    why: "B decides at the moment of speaking, so we use 'will' and the plain verb.",
    not: {
      answer: 'The present simple does not show a decision made now.',
      answers: "'Answers' goes with he, she and it, and a decision needs 'will'.",
      'will to answer': "After 'will', there is no 'to'.",
    },
    more: "'Will' is used for quick decisions and offers. 'Going to' is for plans made before.",
    tip: "When you offer to do something now, use 'I will' or 'I'll'.",
  },
  'A: Have you got any plans for Saturday? B: Yes, I ___ (see) my cousins. We booked the tickets last week.':
    {
      why: "The plan was made before now: the tickets are booked. For a plan like this, we use 'going to': 'am going to' and the plain verb.",
      not: {
        see: 'The present simple does not show a plan for Saturday.',
        sees: "'Sees' goes with he, she and it, and a plan needs 'going to'.",
        'am go to see': "The form is 'going to', not 'go to'.",
      },
      more: "'Have you got any plans' is a common British way to ask about the future.",
      tip: "Talk about plans already made with 'going to', and add the proof: tickets, bookings.",
    },
  'A: I have a terrible headache. B: Sit down. I ___ (get) you some water.': {
    why: "B offers help at that moment, so we use 'will' and the plain verb.",
    not: {
      get: 'The present simple does not show an offer.',
      gets: "'Gets' goes with he, she and it, and an offer needs 'will'.",
      'will getting': "After 'will', use the plain verb, not -ing.",
    },
    more: "'I will' for offers is often shortened in speaking: I'll get it.",
    tip: "Respond kindly to a problem with 'I will' and an offer.",
  },
  'A: What are your plans after school? B: I ___ (study) art at college. I have already applied.': {
    why: "B made this plan before now and has applied, so we use 'going to': 'am going to' and the plain verb.",
    not: {
      study: 'The present simple does not show a future plan here.',
      studies: "'Studies' goes with he, she and it, and a plan needs 'going to'.",
      'will going to study': "'Will' and 'going to' do not go together.",
    },
    more: "'After school' can mean after the school day, or after you leave school.",
    tip: 'Show that a plan is certain by adding what you have already done.',
  },
  'The sky is dark grey and the wind is strong. There ___ (be) a storm.': {
    why: "The evidence is here now: a dark sky and a strong wind. For a prediction from what we can see, we use 'going to': 'is going to be'.",
    not: {
      'is be': "We do not put 'is' before a plain verb.",
      'going to be': "'Going to' needs 'is' before it.",
      'will going to be': "'Will' and 'going to' do not go together.",
    },
    more: "'There is going to be' predicts something we can see coming.",
    tip: "Warn people about weather you can see coming with 'There is going to be'.",
  },
  'A: Can you help me with my maths? B: Of course. I ___ (show) you after lunch.': {
    why: "B agrees to help as A asks, deciding at that moment, so we use 'will' and the plain verb.",
    not: {
      show: 'The present simple does not show a promise or offer.',
      shows: "'Shows' goes with he, she and it, and an offer needs 'will'.",
      'am show': "We do not put 'am' before a plain verb.",
    },
    more: "'Of course' means 'yes, happily'.",
    tip: "Agree to help with 'Of course' and 'I will'.",
  },
  'A: I heard that Omar has a new job in Spain. B: Yes, he ___ (move) there in June. He has booked his flight.':
    {
      why: "The move is arranged, with a date and a booked flight, so we use the present continuous for a future arrangement: 'is' and the -ing verb.",
      not: {
        move: "'He' needs a singular verb, and an arrangement needs the present continuous here.",
        moving: "An -ing verb needs 'is' before it.",
        'are moving': "'Are' goes with you, we and they. With 'he', use 'is'.",
      },
      more: 'The present continuous with a future time means a fixed arrangement: I am meeting her on Friday.',
      tip: 'Talk about arrangements with a date using the present continuous.',
    },
  'A: I think I left my bag on the bus. B: Don’t worry. I ___ (phone) the bus company for you.': {
    why: "B offers help at the moment of speaking, so we use 'will' and the plain verb.",
    not: {
      phone: 'The present simple does not show an offer.',
      phones: "'Phones' goes with he, she and it, and an offer needs 'will'.",
      'will phoning': "After 'will', use the plain verb, not -ing.",
    },
    more: "'Don’t worry' and then 'I will' is a common way to offer help.",
    tip: "Calm a friend with 'Don’t worry' and an offer with 'will'.",
  },
  'The timetable is on the wall. The next train to London ___ (leave) at 10.15.': {
    why: "Timetables use the present simple, even for the future. 'The next train' is one thing, so the verb ends in -s.",
    not: {
      leave: "'The next train' is one thing, so the verb needs an -s.",
      'is leave': "We do not put 'is' before a plain verb.",
      leaving: 'An -ing form cannot be the main verb on its own.',
    },
    more: 'In Britain, times are often written with a full stop: 10.15.',
    tip: 'Read timetables aloud with the present simple: The ferry sails at six.',
  },
  'A: Shall we go to the beach tomorrow? B: Good idea. I think it ___ (stay) dry.': {
    why: "'I think' gives an opinion about tomorrow, so we use 'will' and the plain verb.",
    not: {
      stays: "The present simple does not give a prediction after 'I think'.",
      'will stays': "After 'will', the verb has no -s.",
      stay: "'It' needs 'will' here for the future.",
    },
    more: "'Stay dry' means no rain will fall.",
    tip: "Give your weather prediction with 'I think it will'.",
  },
  'I will call you when I ___ (reach) home.': {
    why: "After 'when' for a future time, English uses the present simple, not 'will'. With 'I', the verb is plain.",
    not: {
      'will reach': "After 'when', do not use 'will', even for the future.",
      reached: "'Reached' is the past. The call is in the future.",
      reaches: "'Reaches' goes with he, she and it. With 'I', use the plain verb.",
    },
    more: "'Will' goes in the other half: I will call you.",
    tip: "Check every 'when' half of a future sentence: present simple, never 'will'.",
  },
  'If it ___ (rain) tomorrow, we will stay inside.': {
    why: "After 'if' for a future possibility, English uses the present simple. 'It' takes the verb with -s.",
    not: {
      'will rain': "After 'if', do not use 'will' for the future.",
      rained: "'Rained' is the past. 'Tomorrow' is in the future.",
      rain: "'It' needs the -s ending in the present simple.",
    },
    more: "This is the first conditional: if and the present, then 'will' and a verb.",
    tip: "Make plans with 'if' and the present, then 'will'.",
  },
  'A: Can I watch TV? B: Yes, after you ___ (tidy) your room.': {
    why: "After 'after' for a future time, English uses the present simple. With 'you', the verb is plain.",
    not: {
      'will tidy': "After 'after', do not use 'will' for the future.",
      tidied: "'Tidied' is the past. The tidying has not happened yet.",
      tidies: "'Tidies' goes with he, she and it. With 'you', use the plain verb.",
    },
    more: 'Before, after, when, until and as soon as all take the present for the future.',
    tip: "Set a condition with 'after you' and the present simple.",
  },
  'As soon as the bell ___ (ring), we can go home.': {
    why: "After 'as soon as' for a future time, English uses the present simple. 'The bell' is one thing, so the verb takes -s.",
    not: {
      'will ring': "After 'as soon as', do not use 'will'.",
      rang: "'Rang' is the past. The bell has not rung yet.",
      ring: "'The bell' needs the -s ending in the present simple.",
    },
    more: "'As soon as' means immediately after.",
    tip: "Use 'as soon as' and the present simple to say exactly when something will happen.",
  },
  'Before you ___ (lock) the door, check the windows.': {
    why: "After 'before' for a future time, English uses the present simple. With 'you', the verb is plain.",
    not: {
      'will lock': "After 'before', do not use 'will'.",
      locked: "'Locked' is the past. The instruction is about the future.",
      locks: "'Locks' goes with he, she and it. With 'you', use the plain verb.",
    },
    more: "Instructions often use 'before' and the present simple: Before you start, read the question.",
    tip: "Give clear instructions with 'before you' and a plain verb.",
  },
  'A: Is Grandma coming today? B: Yes. I will make tea when she ___ (arrive).': {
    why: "After 'when' for a future time, English uses the present simple. 'She' takes the verb with -s.",
    not: {
      'will arrive': "After 'when', do not use 'will' for the future.",
      arrived: "'Arrived' is the past. Grandma has not come yet.",
      arrive: "'She' needs the -s ending in the present simple.",
    },
    more: "A's question, 'Is Grandma coming?', uses the present continuous for an arrangement.",
    tip: "Put the 'when' half in the present and the other half with 'will'.",
  },
  'If you ___ (not / hurry), you will miss the bus.': {
    why: "After 'if' for a future possibility, English uses the present simple. The negative with 'you' is 'don’t' and the plain verb.",
    not: {
      'won’t hurry': "After 'if', do not use 'will' or 'won’t' for the future.",
      'didn’t hurry': "'Didn’t' is the past. The bus has not gone yet.",
      'doesn’t hurry': "'Doesn’t' goes with he, she and it. With 'you', use 'don’t'.",
    },
    more: "'Unless' means 'if not': Unless you hurry, you will miss the bus.",
    tip: "Warn someone with 'If you don’t' and the result with 'will'.",
  },
  'I will send you a message as soon as I ___ (hear) the results.': {
    why: "After 'as soon as' for a future time, English uses the present simple. With 'I', the verb is plain.",
    not: {
      'will hear': "After 'as soon as', do not use 'will'.",
      heard: "'Heard' is the past. The results have not come yet.",
      'am hearing':
        "'Hear' does not usually take -ing, and the time clause needs the present simple.",
    },
    more: "'Hear' is a sense verb: it usually stays in the simple form.",
    tip: "Promise to share news with 'as soon as I' and the present simple.",
  },
  'If Sam ___ (phone) tonight, I will tell him the news.': {
    why: "After 'if' for a future possibility, English uses the present simple. 'Sam' is one person, so the verb takes -s.",
    not: {
      'will phone': "After 'if', do not use 'will' for the future.",
      phoned: "'Phoned' is the past, and with 'will tell' in the other half it does not fit.",
      phone: "'Sam' needs the -s ending in the present simple.",
    },
    more: "The 'if' half can come first or second: I will tell him the news if Sam calls tonight.",
    tip: "When the 'if' half comes first, put a comma after it.",
  },
  'We can go out when the rain ___ (stop).': {
    why: "After 'when' for a future time, English uses the present simple. 'The rain' takes the verb with -s.",
    not: {
      'will stop': "After 'when', do not use 'will' for the future.",
      stopped: "'Stopped' is the past. The rain is still falling.",
      stop: "'The rain' needs the -s ending in the present simple.",
    },
    more: "'Can' in the other half also shows the future here: we can go out later.",
    tip: "Use 'when' and the present simple to say what has to happen first.",
  },
  'Omar came to England in 2020. He ___ (live) in Bristol since then.': {
    why: "'Since then' joins 2020 to now, so we use the present perfect. 'He' takes 'has' and the past participle.",
    not: {
      lives: "The present simple cannot go with 'since'.",
      lived: "The past simple would mean he no longer lives there. 'Since' reaches up to now.",
      'is living': "The present continuous cannot go with 'since'.",
    },
    more: "'Since then' means from that time until now.",
    tip: "Join a past start to now with 'since' and the present perfect.",
  },
  'A: How long have you had your dog? B: We ___ (have) him for three years.': {
    why: "A asks how long up to now, with the present perfect, and B answers the same way: 'have' and the past participle, 'had'.",
    not: {
      have: "The present simple cannot go with 'for three years' up to now.",
      had: 'The past simple would mean they no longer have the dog.',
      'are having': "'Have' meaning own is a state verb and does not take -ing.",
    },
    more: "'Have had' looks strange, but it is right: 'have' helps, and 'had' is the participle of 'have'.",
    tip: "Answer 'How long have you...?' with the present perfect and 'for' or 'since'.",
  },
  'My sister started piano lessons when she was six. She ___ (play) the piano for eight years now.':
    {
      why: "She started years ago and still plays, so we join the past to now with the present perfect. 'She' takes 'has' and the past participle.",
      not: {
        plays: "The present simple cannot go with 'for eight years' up to now.",
        played: 'The past simple would mean she has stopped.',
        'is playing': "The present continuous cannot go with 'for eight years' up to now.",
      },
      more: "'Now' at the end stresses that the eight years run up to today.",
      tip: "Say how long someone has done a hobby with the present perfect and 'for'.",
    },
  'A: Why do you look so tired? B: I ___ (not / sleep) well for a week.': {
    why: "'For a week' up to now needs the present perfect. The negative with 'I' is 'haven’t' and the past participle.",
    not: {
      'don’t sleep': "The present simple cannot go with 'for a week' up to now.",
      'hasn’t slept': "'Hasn’t' goes with he, she and it. With 'I', use 'haven’t'.",
      'not slept': "English needs 'have' before 'not' and the participle.",
    },
    more: 'Sleep, slept, slept: the past simple and the participle are the same.',
    tip: 'Explain how you feel now with the present perfect.',
  },
  'Mr Khan opened his shop in 1998, and he is still there every day. He ___ (sell) fruit and vegetables there for over twenty-five years.':
    {
      why: "He started in 1998 and is still there, so the selling reaches up to now. With 'for', we use the present perfect: 'has' and the past participle.",
      not: {
        sells: "The present simple cannot go with 'for over twenty-five years' up to now.",
        sold: "The past simple would mean he has stopped. 'He is still there every day' shows he has not.",
        'is selling': "The present continuous cannot go with 'for' up to now.",
      },
      more: 'Sell, sold, sold: the past simple and the participle are the same.',
      tip: "Write about a local business with the present perfect and 'for' or 'since'.",
    },
  'A: Do you know Priya well? B: Yes, I ___ (know) her since we were children.': {
    why: "'Since we were children' joins a past start to now, so we use the present perfect: 'have' and the past participle.",
    not: {
      know: "The present simple cannot go with 'since'.",
      knew: 'The past simple would mean the friendship has ended.',
      'am knowing': "'Know' is a state verb and does not take -ing.",
    },
    more: "After 'since', a short past sentence is common: since we were children, since I joined the club.",
    tip: "Describe old friendships with the present perfect and 'since'.",
  },
  'Our school has a new head teacher. She ___ (work) here since September.': {
    why: "'Since September' joins a past start to now, so we use the present perfect. 'She' takes 'has' and the past participle.",
    not: {
      works: "The present simple cannot go with 'since'.",
      worked: 'The past simple would mean she has left. She is the new head teacher now.',
      'is working': "The present continuous cannot go with 'since'.",
    },
    more: "Months take 'in', but after 'since' just the month: since September.",
    tip: "Introduce someone new with the present perfect and 'since'.",
  },
  'A: Is your brother still at university? B: Yes, he ___ (study) law there for two years now.': {
    why: "He started two years ago and is still there, so we use the present perfect. 'He' takes 'has' and the past participle.",
    not: {
      studies: "The present simple cannot go with 'for two years' up to now.",
      studied: 'The past simple would mean he has finished.',
      'is studying': "The present continuous cannot go with 'for two years now', a time up to now.",
    },
    more: "'Still' in the question and 'now' at the end show that the two years run up to today.",
    tip: "Talk about family members' studies with the present perfect and 'for'.",
  },
  'A: When did you last see Ben? B: I ___ (not / see) him since the summer.': {
    why: "'Since the summer' joins a past time to now, so we use the present perfect negative: 'haven’t' and the past participle.",
    not: {
      'didn’t see':
        "With 'since the summer', the main verb needs the present perfect, not the past simple: the time runs up to now.",
      'don’t see': "The present simple cannot go with 'since'.",
      'hadn’t seen': "'Hadn’t' looks back from a past moment. B is talking about up to now.",
    },
    more: "A's question uses the past simple with 'When'. B answers about the whole time up to now.",
    tip: "Say how long since you last saw someone with 'haven’t' and 'since'.",
  },
  'This café is my favourite. I ___ (come) here every Friday for years.': {
    why: "A habit that started years ago and goes on now takes the present perfect with 'for'. With 'I', 'have' and the past participle.",
    not: {
      come: "The present simple cannot go with 'for years' up to now.",
      came: "The past simple would mean the habit has stopped. 'This café is my favourite' shows it has not.",
      'am coming': "The present continuous cannot go with 'for years' up to now.",
    },
    more: 'Come, came, come: the participle looks the same as the plain verb.',
    tip: 'Describe a favourite place, and say how many years you have kept coming.',
  },
  'Last year my family moved to a new town. At first I ___ (not / know) anyone at my new school.': {
    why: "The story is about last year, a finished time, so we use the past simple negative: 'didn’t' and the plain verb.",
    not: {
      'don’t know': "'Don’t' is the present. 'At first' and 'last year' show the past.",
      'haven’t known': 'The present perfect links to now, but the story is about a finished time.',
      'wasn’t knowing': "'Know' is a state verb and does not take -ing.",
    },
    more: "'At first' means at the beginning, before things changed.",
    tip: "Tell how things changed with 'at first' and the past simple, then 'now' and the present.",
  },
  'A: You speak English very well. B: Thank you. I ___ (study) it since I was ten.': {
    why: "'Since I was ten' joins a past start to now, so we use the present perfect: 'have' and the past participle.",
    not: {
      study: "The present simple cannot go with 'since'.",
      studied: 'The past simple would mean B has stopped studying.',
      'am studying': "The present continuous cannot go with 'since'.",
    },
    more: "Accept a compliment with 'Thank you', then add a detail.",
    tip: "Explain how long you have learned something with 'since' and the present perfect.",
  },
  'Every morning, Lena gets up at seven. But yesterday she ___ (sleep) until ten.': {
    why: "'Yesterday' is a finished time, and 'but' contrasts it with her habit. So we use the past simple: 'slept'.",
    not: {
      sleeps: "'Sleeps' is the present simple. 'Yesterday' shows the past.",
      'has slept': "The present perfect cannot go with 'yesterday'.",
      'was sleep': "'Was' goes with an -ing verb in the past continuous, not with a plain verb.",
    },
    more: 'The first sentence is a habit in the present simple; the second is one past day.',
    tip: "Contrast a habit and one past event with 'but' and the past simple.",
  },
  'A: Where is Dad? B: He ___ (just / go) out. He will be back in ten minutes.': {
    why: "Dad left a moment ago and is still out, so we use the present perfect: 'has', 'just', and the past participle, 'gone'.",
    not: {
      'has just went': "'Went' is the past simple. After 'has', use the past participle.",
      'have just gone': "'Have' goes with I, you, we and they. With 'he', use 'has'.",
      'has just go': "After 'has', the verb needs its past participle.",
    },
    more: "'Gone out' means he is not here now. 'Been out' would mean he went out and is back.",
    tip: "Explain where someone is with 'has just gone' and the place.",
  },
  'When I was a child, I lived in a small village. Every day I ___ (walk) two kilometres to school.':
    {
      why: "'When I was a child' puts the story in the past, and 'every day' gives a habit then. A past habit takes the past simple.",
      not: {
        walk: "'Walk' is the present. The habit was in the past.",
        'have walked': 'The present perfect links to now, but this habit ended long ago.',
        'am walking': "'Am walking' is happening now. The story is about childhood.",
      },
      more: "'Used to' and the plain verb is another way to say a past habit.",
      tip: "Describe your childhood with the past simple and 'every day'.",
    },
  'A: Are you coming to football tonight? B: I can’t. I ___ (hurt) my leg, so I need to rest.': {
    why: "The hurt leg is the reason now, so we use the present perfect: 'have' and the past participle. 'Hurt' looks the same in all its forms.",
    not: {
      'am hurting': "'Am hurting my leg' would mean doing it now. The injury has already happened.",
      hurts: "'Hurts' goes with he, she and it, and the result needs the present perfect.",
      'has hurt': "'Has' goes with he, she and it. With 'I', use 'have'.",
    },
    more: 'Hurt, hurt, hurt: the plain verb, the past and the participle are the same.',
    tip: 'Give a reason now with the present perfect: I have hurt my leg, I have caught a cold.',
  },
  'While I ___ (make) breakfast, I burnt my finger.': {
    why: "Making breakfast was in progress when the burn happened, so we use the past continuous. With 'I', the form is 'was' and the -ing verb.",
    not: {
      'am making': "'Am making' is the present. 'I burnt' shows the past.",
      'were making': "'Were' goes with you, we and they. With 'I', use 'was'.",
      'have made': 'The present perfect links to now. This is a story in the past.',
    },
    more: "'Burnt' and 'burned' are both British past forms of 'burn'.",
    tip: "Tell a small accident with 'while' and the past continuous.",
  },
  'A: Do you want to come to the cinema? B: No thanks. I ___ (already / see) that film.': {
    why: "B has seen it at some time before now, and that is the reason now, so we use the present perfect: 'have', 'already', and the past participle.",
    not: {
      'have already saw': "'Saw' is the past simple. After 'have', use the past participle.",
      'has already seen': "'Has' goes with he, she and it. With 'I', use 'have'.",
      'have already see': "After 'have', the verb needs its past participle.",
    },
    more: "'Already' shows something happened before now, maybe sooner than expected.",
    tip: 'Refuse an invitation politely with a reason in the present perfect.',
  },
  'Tom looked out of the window at nine. It was dark, and it ___ (snow) heavily.': {
    why: "The snow was falling at the moment Tom looked out, so we use the past continuous. 'It' takes 'was' and the -ing verb.",
    not: {
      'is snowing': "'Is snowing' is the present. The story is in the past.",
      'were snowing': "'Were' is for plurals. With 'it', use 'was'.",
      'has snowed': "The present perfect links to now. The story is at nine o'clock in the past.",
    },
    more: "'Was dark' is the past simple of 'be'; 'was snowing' is the past continuous.",
    tip: 'Describe what a character sees from a window with the past continuous.',
  },
  'A: Why are you limping? B: I ___ (fall) off my bike yesterday.': {
    why: "'Yesterday' is a finished time, so we use the past simple. 'Fall' is irregular: its past simple is 'fell'.",
    not: {
      'have fallen': "The present perfect cannot go with 'yesterday'.",
      fall: "'Fall' is the present. 'Yesterday' shows the past.",
      'has fallen': "'Has' goes with he, she and it, and it cannot go with 'yesterday'.",
    },
    more: "'Limping' means walking unevenly because a leg hurts.",
    tip: 'Explain an injury with the past simple and when it happened.',
  },
}
