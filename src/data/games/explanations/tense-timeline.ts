import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Tense Timeline: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/tense-timeline.ts). Written with AI on 16 October 2026
 * and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  'The train leaves at half past seven every morning.': {
    why: "The clue is 'every morning': it shows something that happens again and again. 'Leaves' (verb + s with 'the train') is the present simple, used for habits and fixed timetables.",
    not: {
      'Present Continuous':
        "'The train is leaving' would mean it is leaving right now. 'Every morning' shows a regular timetable, not one action in progress.",
      'Past Simple': "'The train left' would be about the past. 'Leaves' shows it is true now.",
      'Past Continuous':
        "'The train was leaving' would mean it was in the middle of leaving at one moment in the past. This sentence is about every morning.",
      'Present Perfect':
        "'The train has left' would mean it is already gone now. 'Every morning' shows a repeated event, not one result.",
      'Past Perfect':
        "'The train had left' would mean it went before another past event. Nothing here refers to an earlier past time.",
      "Future 'will'":
        "'The train will leave' would be a prediction for one trip. 'Every morning' shows a fixed, repeated timetable.",
      "'going to' Future":
        "'The train is going to leave' would be a plan or a warning for one trip. This sentence gives a regular timetable.",
    },
    more: "We use the present simple for timetables, even for the future: 'The film starts at eight tonight.'",
    tip: 'Words such as every day, always and usually often point to the present simple.',
  },
  'My sister works in a small bakery on the high street.': {
    why: "There is no time word here. The clue is the verb 'works': it states a fact about her job now, and the -s ending goes with 'my sister' (she) in the present simple.",
    not: {
      'Present Continuous':
        "'My sister is working' would mean she is working now, perhaps only for a short time. This sentence is about her normal job.",
      'Past Simple':
        "'My sister worked' would mean she used to work there and does not now. Nothing here says the job has ended.",
      'Past Continuous':
        "'My sister was working' would mean she was in the middle of work at a past moment. No past moment is given.",
      'Present Perfect':
        "'My sister has worked' would need a time such as 'for five years'. Here we simply say where she works now.",
      'Past Perfect':
        "'My sister had worked' would mean she worked there before another past time. No past time is given.",
      "Future 'will'":
        "'My sister will work' would be a prediction about later. This sentence states a fact about now.",
      "'going to' Future":
        "'My sister is going to work' would be a plan for the future. This sentence is about her job now.",
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
      'Present Perfect':
        "'Water has boiled' would mean it has just finished boiling. A general fact does not need a link to now.",
      'Past Perfect':
        "'Water had boiled' would mean it boiled before another past event. No past events are mentioned.",
      "Future 'will'":
        "'Water will boil' would be a prediction about one future moment. The fact is true all the time.",
      "'going to' Future":
        "'Water is going to boil' would warn that boiling is about to start. This sentence is a general fact.",
    },
    more: "Facts about nature and science use the present simple: 'The sun rises in the east. Ice melts when it is warm.'",
    tip: "In science answers, write facts in the present simple: 'Plants need light to grow.'",
  },
  'We usually have dinner at about seven o’clock.': {
    why: "The clue is 'usually': it shows a habit, something we do on most days. 'Have' is the present simple. 'At about seven o’clock' is our usual time, not one moment now.",
    not: {
      'Present Continuous':
        "'We are having dinner' would mean we are eating now. 'Usually' shows what we do on most days.",
      'Past Simple':
        "'We usually had dinner' would mean this was our habit once, but not now. This sentence is about now.",
      'Past Continuous':
        "'We were having dinner' would mean we were in the middle of eating at one past moment. 'Usually' means most days.",
      'Present Perfect':
        "'We have had dinner' would mean we have already eaten. 'Usually' shows a habit, not a finished action.",
      'Past Perfect':
        "'We had had dinner' would mean we ate before another past time. Nothing in the sentence is about the past.",
      "Future 'will'":
        "'We will have dinner' would be a plan or a prediction for later. 'Usually' shows what happens on most days.",
      "'going to' Future":
        "'We are going to have dinner' would be a plan for one evening. 'Usually' shows a habit, not a plan.",
    },
    more: "Frequency words (always, usually, often, sometimes, never) go before the main verb in the present simple: 'We usually have dinner.'",
    tip: "To talk about your habits in speaking, use the present simple with a frequency word: 'I sometimes walk to school.'",
  },
  'She speaks three languages fluently.': {
    why: "There is no time word. The clue is that this is something she can do all the time, a fact about her. 'Speaks' (verb + s) is the present simple.",
    not: {
      'Present Continuous':
        "'She is speaking' would mean she is speaking now. This sentence says what she is able to do in general.",
      'Past Simple': "'She spoke' would be about the past. This sentence is about her ability now.",
      'Past Continuous':
        "'She was speaking' would mean she was talking at a past moment. No past moment is given.",
      'Present Perfect':
        "'She has spoken' would talk about speaking that connects the past to now. This sentence states an ability, not an event.",
      'Past Perfect':
        "'She had spoken' would mean she spoke before another past time. No earlier past time is given.",
      "Future 'will'": "'She will speak' would be about the future. She can do this now.",
      "'going to' Future":
        "'She is going to speak' would be a plan to speak soon. This sentence states a fact about her now.",
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
      'Past Continuous':
        "'The shop was opening' would mean it was in the middle of opening at a past moment. This sentence gives regular hours.",
      'Present Perfect':
        "'The shop has opened' would mean it is open now because it opened a short time ago. Here we have a timetable.",
      'Past Perfect':
        "'The shop had opened' would mean it opened before another past time. No past time is given.",
      "Future 'will'":
        "'The shop will open' would be a prediction for one day. Opening hours are a regular timetable.",
      "'going to' Future":
        "'The shop is going to open' would be a plan for one day. Here we have regular opening hours.",
    },
    more: "Shops, schools, trains and buses follow timetables, so we use the present simple: 'School starts at half past eight.'",
    tip: "On a sign or a notice, opening times use the present simple: 'The library closes at five.'",
  },
  'He never drinks coffee after lunch.': {
    why: "The clue is the verb form 'drinks' (verb + s), which is the present simple. With 'never', it describes a habit: something he does at no time.",
    not: {
      'Present Continuous':
        "'He is not drinking' would mean he is not drinking now, or not today. 'Never' shows a habit that is always true.",
      'Past Simple':
        "'He never drank' would mean he did not drink it in the past, and it may have changed. This sentence is about now.",
      'Past Continuous':
        "'He was not drinking' would mean he was not doing it at one past moment. 'Never' describes a general habit.",
      'Present Perfect':
        "'He has never drunk' would mean he has not drunk coffee at any time up to now. This sentence is about a daily habit after lunch.",
      'Past Perfect':
        "'He had never drunk' would mean he had not drunk it up to a past time. No past time is given.",
      "Future 'will'":
        "'He will never drink' would be a promise or a prediction about the future. This sentence describes his habit now.",
      "'going to' Future":
        "'He is never going to drink' would be a strong plan for the future. This sentence describes what he does now.",
    },
    more: "'Never' already makes the meaning negative, so we do not add 'not'. We say 'He never drinks coffee', not 'He does not never drink'.",
  },
  'Look, the children are playing in the garden right now.': {
    why: "The clues are the order 'Look' and the words 'right now': they show the action is happening at this moment. 'Are playing' (are + -ing) is the present continuous.",
    not: {
      'Present Simple':
        "'Look' is an order, not the present simple. The present simple would be 'The children play', for what they usually do. 'Right now' shows it is happening at this moment.",
      'Past Simple':
        "'The children played' would mean they finished playing earlier. 'Right now' puts the action in the present.",
      'Past Continuous':
        "'The children were playing' would mean they were playing at a past moment. 'Right now' means this moment.",
      'Present Perfect':
        "'The children have played' would mean they have finished, with a result now. 'Right now' shows the playing is still going on.",
      'Past Perfect':
        "'The children had played' would mean they played before another past time. 'Right now' is about the present.",
      "Future 'will'":
        "'The children will play' would be a prediction about later. 'Right now' means it is happening now.",
      "'going to' Future":
        "'The children are going to play' would be a plan for soon. 'Right now' shows they are playing at this moment.",
    },
    more: "The present continuous is made with am, is or are plus a verb ending in -ing: 'She is eating.'",
    tip: 'Words such as now, right now and at the moment point to the present continuous.',
  },
  'I am reading a fascinating novel this week.': {
    why: "The form 'am reading' (am + -ing) is the present continuous. 'This week' is a short period around now, not a permanent habit, so it is a temporary activity.",
    not: {
      'Present Simple':
        "'I read a novel every week' would be the present simple, for a habit. 'Am reading' shows a temporary activity in progress.",
      'Past Simple':
        "'I read it last week' (said like 'red') would be the past simple, for a finished action. 'Am reading' shows I am still reading.",
      'Past Continuous':
        "'I was reading' would mean I was in the middle of reading at a past moment. 'This week' is the present period.",
      'Present Perfect':
        "'I have read a fascinating novel' would mean I have finished it. 'Am reading' shows I am still in the middle.",
      'Past Perfect':
        "'I had read' would mean I finished before another past time. This sentence is about now.",
      "Future 'will'":
        "'I will read' would be a prediction or a promise about the future. I am doing it now.",
      "'going to' Future":
        "'I am going to read' would be a plan to start. This sentence says I am already reading.",
    },
    more: "You may not be reading at this exact second. The present continuous also covers things in progress around now: 'I am learning to drive.'",
  },
  'They are building a new library near the station.': {
    why: "There is no time word. 'Are building' (are + -ing) shows work that is in progress now, so it is the present continuous.",
    not: {
      'Present Simple':
        "'They build' would describe what builders do in general. This sentence is about one library that is being built now.",
      'Past Simple':
        "'They built' would mean the library is finished. The building is still going on.",
      'Past Continuous':
        "'They were building' would be about work in progress at a past time. No past time is given.",
      'Present Perfect':
        "'They have built' would mean the library is now finished. The work is still in progress.",
      'Past Perfect':
        "'They had built' would mean it was finished before another past time. No past time is given.",
      "Future 'will'":
        "'They will build' would mean the work has not started. This sentence says it is happening.",
      "'going to' Future":
        "'They are going to build' would mean the work has not started yet. 'Are building' means it has.",
    },
    more: "Use the present continuous for projects and changes that are going on now: 'The city is growing.'",
  },
  'Why are you wearing your coat indoors?': {
    why: "There is no time word. The question asks what you are doing now: you have a coat on at this moment, inside a building. 'Are wearing' (are + -ing) is the present continuous.",
    not: {
      'Present Simple':
        "'Why do you wear' would ask about a habit. This question asks about what you are doing now.",
      'Past Simple':
        "'Why did you wear' would ask about a time that is over. The coat is on you now.",
      'Past Continuous':
        "'Why were you wearing' would ask about a past moment. This question is about now.",
      'Present Perfect':
        "'Why have you worn your coat indoors?' would ask about something finished, with a result now. This question is about this moment.",
      'Past Perfect':
        "'Why had you worn' would ask about something before another past time. No past time is given.",
      "Future 'will'": "'Why will you wear' would ask about a future action. The coat is on now.",
      "'going to' Future":
        "'Why are you going to wear' would ask about a plan. You are wearing the coat already.",
    },
    more: "Questions in the present continuous put am, is or are before the person: 'What are you doing? Is he coming?'",
  },
  'My parents are travelling around Italy at the moment.': {
    why: "The clue is 'at the moment': it means this period now. 'Are travelling' (are + -ing) is the present continuous for something that is temporary.",
    not: {
      'Present Simple':
        "'My parents travel' would be about what they usually do. 'At the moment' shows this trip is happening now.",
      'Past Simple':
        "'My parents travelled' would mean the trip is finished. 'At the moment' puts it in the present.",
      'Past Continuous':
        "'My parents were travelling' would mean they were on the trip at a past time. 'At the moment' means now.",
      'Present Perfect':
        "'My parents have travelled' would mean they have finished a trip, or have that experience. 'At the moment' shows the trip is still going on.",
      'Past Perfect':
        "'My parents had travelled' would mean they travelled before another past time. 'At the moment' is about now.",
      "Future 'will'":
        "'My parents will travel' would be about a future trip. They are travelling now.",
      "'going to' Future":
        "'My parents are going to travel' would mean the trip has not begun. They are already travelling.",
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
      'Past Continuous':
        "'She was studying' would mean she was in the middle of studying at a past time. 'This month' is the present period.",
      'Present Perfect':
        "'She has studied' would mean she has done the studying already. 'Is studying' shows it is still going on.",
      'Past Perfect':
        "'She had studied' would mean she studied before another past time. This sentence is about now.",
      "Future 'will'":
        "'She will study' would be a prediction or a promise about later. She is studying now, this month.",
      "'going to' Future":
        "'She is going to study' would be a plan to start. 'Is studying' shows she has already started.",
    },
    more: "She may not be studying at this exact second. The present continuous also covers a busy period: 'He is working hard this term.'",
  },
  'The weather is getting colder these days.': {
    why: "The clues are 'these days' and 'getting': they describe a change that is happening now. 'Is getting' (is + -ing) is the present continuous.",
    not: {
      'Present Simple':
        "'The weather gets colder' would be a general fact, such as every winter. 'Is getting' shows a change that is happening now.",
      'Past Simple':
        "'The weather got colder' would mean the change is finished. 'These days' means the present.",
      'Past Continuous':
        "'The weather was getting colder' would be about a past time. 'These days' means now.",
      'Present Perfect':
        "'The weather has got colder' would mean the change has happened, with a result now. 'Is getting' shows it is still changing.",
      'Past Perfect':
        "'The weather had got colder' would mean it changed before another past time. This sentence is about now.",
      "Future 'will'":
        "'The weather will get colder' would be a prediction about later. 'These days' shows the change is happening now.",
      "'going to' Future":
        "'The weather is going to get colder' would be a prediction from evidence. This sentence says it is changing now.",
    },
    more: "Use the present continuous for changes in progress: 'Prices are rising. The days are getting longer.'",
  },
  'We visited my grandmother in Wales last summer.': {
    why: "The clue is 'last summer': a time that is finished. 'Visited' (verb + -ed) is the past simple, used for an action that started and finished in the past.",
    not: {
      'Present Simple':
        "'We visit' would describe a habit, such as every summer. 'Last summer' is a time that is over.",
      'Present Continuous':
        "'We are visiting' would mean we are visiting now. 'Last summer' is over.",
      'Past Continuous':
        "'We were visiting' would mean we were in the middle of the visit at a past moment. This sentence reports the whole finished visit.",
      'Present Perfect':
        "'We have visited' would link the past to now, and it cannot be used with 'last summer'. A time that is over needs the past simple.",
      'Past Perfect':
        "'We had visited' would mean we went before another past time. This sentence gives only one past time.",
      "Future 'will'":
        "'We will visit' would be about a future visit. 'Last summer' is already past.",
      "'going to' Future":
        "'We are going to visit' would be a plan. 'Last summer' shows the visit has already happened.",
    },
    more: 'Regular verbs add -ed (visit, visited). Irregular verbs change: buy, bought; go, went.',
    tip: 'Words such as yesterday, last week and ago point to the past simple.',
  },
  'He bought a second-hand bicycle yesterday.': {
    why: "The clue is 'yesterday': a day that is finished. 'Bought' is the past simple of the irregular verb 'buy'.",
    not: {
      'Present Simple':
        "'He buys' would describe a habit or a fact. 'Yesterday' is a time that is over.",
      'Present Continuous': "'He is buying' would mean he is buying it now. 'Yesterday' is over.",
      'Past Continuous':
        "'He was buying' would mean he was in the middle of buying at a past moment. This sentence reports the finished action.",
      'Present Perfect':
        "'He has bought' would link the past to now, and it cannot be used with 'yesterday'. A time that is over needs the past simple.",
      'Past Perfect':
        "'He had bought' would mean he bought it before another past time. Only one past time is given.",
      "Future 'will'": "'He will buy' would be about the future. 'Yesterday' is in the past.",
      "'going to' Future":
        "'He is going to buy' would be a plan. 'Yesterday' shows he has already bought it.",
    },
    more: 'Irregular past forms must be learned: buy, bought; make, made; see, saw.',
  },
  'The film started at eight and finished at ten.': {
    why: "The verbs 'started' and 'finished' are past simple forms, and 'at eight' and 'at ten' are exact times. So this is the past simple.",
    not: {
      'Present Simple':
        "'The film starts at eight' would give a timetable for a film still to come. Here both actions are finished.",
      'Present Continuous':
        "'The film is starting' would mean it is starting now. Here it started and finished in the past.",
      'Past Continuous':
        "'The film was starting' would mean it was in the middle of starting at a past moment. These times are finished facts.",
      'Present Perfect':
        "'The film has started' would mean it began recently, with a result now. Exact times such as 'at eight' need the past simple.",
      'Past Perfect':
        "'The film had started' would mean it began before another past event. No other past event is given.",
      "Future 'will'":
        "'The film will start' would be about the future. These times are already in the past.",
      "'going to' Future":
        "'The film is going to start' would be a plan or a warning. Here the film is over.",
    },
    more: "Use the past simple for events in order, as in a story: 'He opened the door and walked in.'",
  },
  'They moved to Manchester three years ago.': {
    why: "The clue is 'three years ago': a time that is finished. 'Moved' (move + -d) is the past simple.",
    not: {
      'Present Simple':
        "'They move' would be a habit or a timetable. 'Three years ago' is a time that is over.",
      'Present Continuous':
        "'They are moving' would mean they are moving now. 'Three years ago' is over.",
      'Past Continuous':
        "'They were moving' would mean they were in the middle of moving at a past moment. This sentence reports the finished move.",
      'Present Perfect':
        "'They have moved' would link the past to now, and it cannot be used with 'ago'. A time that is over needs the past simple.",
      'Past Perfect':
        "'They had moved' would mean they moved before another past time. Only one past time is given.",
      "Future 'will'":
        "'They will move' would be about the future. 'Three years ago' is in the past.",
      "'going to' Future":
        "'They are going to move' would be a plan. 'Three years ago' shows the move has already happened.",
    },
    more: "'Ago' goes with the past simple, not the present perfect: 'I met her two years ago.'",
  },
  'I broke my arm when I was nine.': {
    why: "The clue is 'when I was nine': a time that is over. 'Broke' is the past simple of 'break', and 'was' is the past simple of 'be'.",
    not: {
      'Present Simple':
        "'I break my arm' would describe a habit or a fact about now. 'When I was nine' is a time that is over.",
      'Present Continuous':
        "'I am breaking my arm' would mean it is happening now. This happened long ago.",
      'Past Continuous':
        "'I was breaking my arm' would mean I was in the middle of breaking it. This sentence reports one finished event.",
      'Present Perfect':
        "'I have broken my arm' would link the past to now, and it cannot be used with 'when I was nine'. A time that is over needs the past simple.",
      'Past Perfect':
        "'I had broken my arm' would mean it happened before another past time. Here 'when I was nine' is the time itself.",
      "Future 'will'":
        "'I will break my arm' would be about the future. This happened in the past.",
      "'going to' Future":
        "'I am going to break my arm' would be a plan or a warning. The event is finished.",
    },
    more: "A question about a time that is over also uses the past simple: 'When did you break your arm?'",
  },
  'She wrote a letter to the council last week.': {
    why: "The clue is 'last week': a time that is finished. 'Wrote' is the past simple of the irregular verb 'write'.",
    not: {
      'Present Simple': "'She writes' would describe a habit. 'Last week' is a time that is over.",
      'Present Continuous': "'She is writing' would mean she is writing now. 'Last week' is over.",
      'Past Continuous':
        "'She was writing' would mean she was in the middle of writing at a past moment. This sentence reports a finished action.",
      'Present Perfect':
        "'She has written' would link the past to now, and it cannot be used with 'last week'. A time that is over needs the past simple.",
      'Past Perfect':
        "'She had written' would mean she wrote it before another past time. Only one past time is given.",
      "Future 'will'": "'She will write' would be about the future. 'Last week' is in the past.",
      "'going to' Future":
        "'She is going to write' would be a plan. 'Last week' shows she has already written it.",
    },
    more: 'Irregular verbs change their form: write, wrote, written. Learn all three forms.',
    tip: "Do not say 'has written' with 'last week'. A time that is over needs the past simple.",
  },
  'We did not see anyone at the party.': {
    why: "There is no time word, but 'did not see' is the past simple negative: 'did not' plus the plain verb. The party is over, so this is past simple.",
    not: {
      'Present Simple':
        "'We do not see anyone' would describe a habit or a fact about now. The party is over.",
      'Present Continuous':
        "'We are not seeing anyone' would be about now, and 'see' is not normally used in the continuous. This sentence is about a finished party.",
      'Past Continuous':
        "'We were not seeing anyone' is not natural, as 'see' is not normally used in the continuous. This sentence reports the whole party.",
      'Present Perfect':
        "'We have not seen anyone' would link to now, for example 'up to now'. This sentence is about a finished event.",
      'Past Perfect':
        "'We had not seen anyone' would mean before another past time. No other past time is given.",
      "Future 'will'":
        "'We will not see anyone' would be about a future party. This party is in the past.",
      "'going to' Future":
        "'We are not going to see anyone' would be a plan. The party has already happened.",
    },
    more: "For negatives and questions in the past simple, use did and the plain verb: 'We did not go.' 'Did you see him?'",
    tip: "After 'did' or 'did not', use the plain verb: 'did not see', never 'did not saw'.",
  },
  'I was cooking dinner when the phone rang.': {
    why: "The clue is 'when the phone rang': a short event interrupted a longer one. 'Was cooking' (was + -ing) is the past continuous for the action already in progress.",
    not: {
      'Present Simple':
        "'I cook dinner' would describe a habit. This sentence is about one past evening.",
      'Present Continuous':
        "'I am cooking dinner' would mean I am cooking now. This sentence is about the past.",
      'Present Perfect':
        "'I have cooked dinner' would mean it is finished, with a result now. 'Was cooking' means I was in the middle of it.",
      'Past Perfect':
        "'I had cooked dinner' would mean it was finished before the phone rang. 'Was cooking' means it was still going on.",
      "Future 'will'":
        "'I will cook dinner' would be about the future. The phone has already rung.",
      "'going to' Future":
        "'I am going to cook dinner' would be a plan for later. This sentence says I was already cooking.",
    },
    more: "The other verb, 'rang', is the past simple: it is the short action that interrupted. The sentence is about the longer action, 'was cooking'.",
    tip: "In a story, use the past continuous for the scene and the past simple for the events: 'It was raining when I left.'",
  },
  'They were watching television all evening.': {
    why: "The clue is 'were watching' (were + -ing): an action that went on through 'all evening'. That is the past continuous.",
    not: {
      'Present Simple':
        "'They watch television' would describe a habit. 'All evening' is one past evening.",
      'Present Continuous':
        "'They are watching television' would mean they are watching now. The evening is over.",
      'Past Simple':
        "'They watched' would report the whole evening as one finished fact. 'Were watching' shows the activity going on through the evening.",
      'Present Perfect':
        "'They have watched television' would link the evening to now. This sentence is about a finished evening.",
      'Past Perfect':
        "'They had watched television' would mean before another past time. No other past time is given.",
      "Future 'will'":
        "'They will watch television' would be about the future. 'All evening' is in the past.",
      "'going to' Future":
        "'They are going to watch television' would be a plan. The evening has already happened.",
    },
    more: 'The past continuous shows a long action in progress, such as watching television for the whole evening.',
  },
  'While she was walking home, it began to rain.': {
    why: "The clue is 'While': it joins a longer action to another event. 'Was walking' (was + -ing) is the past continuous: she was in the middle of walking.",
    not: {
      'Present Simple':
        "'She walks home' would describe a habit. This sentence is about one past journey.",
      'Present Continuous':
        "'She is walking home' would mean it is happening now. This sentence is about the past.",
      'Present Perfect':
        "'She has walked home' would mean she has arrived, with a result now. 'Was walking' shows she was still on the way.",
      'Past Perfect':
        "'She had walked home' would mean she arrived before another past event. 'Was walking' shows she was still walking.",
      "Future 'will'":
        "'She will walk home' would be about the future. This sentence is about the past.",
      "'going to' Future":
        "'She is going to walk home' would be a plan. Here the walking was already happening.",
    },
    more: "The other verb, 'began', is the past simple: it is the event that happened while she was walking.",
    tip: "'While' is usually followed by the past continuous. 'When' often goes with the past simple.",
  },
  'At nine o’clock last night we were still revising.': {
    why: "The clues are 'At nine o’clock last night' and 'still': the action was in progress at one moment in the past. 'Were revising' (were + -ing) is the past continuous.",
    not: {
      'Present Simple':
        "'We revise' would describe a habit. 'At nine o’clock last night' is one past moment.",
      'Present Continuous':
        "'We are still revising' would mean we are revising now. 'Last night' is over.",
      'Past Simple':
        "'We revised' would report the revision as a finished fact. 'Were still revising' shows it was in progress at nine o’clock.",
      'Present Perfect':
        "'We have revised' would link to now, and it cannot be used with 'last night'. A time that is over does not take the present perfect.",
      'Past Perfect':
        "'We had revised' would mean we finished before another past time. 'Still' shows we had not finished at nine o’clock.",
      "Future 'will'":
        "'We will revise' would be a prediction about the future. 'Last night' is in the past.",
      "'going to' Future":
        "'We are going to revise' would be a plan. 'Last night' shows this is already past.",
    },
    more: "Use 'at' with a clock time in the past to show what was happening then: 'At six I was having dinner.'",
  },
  'He was waiting for the bus when he saw the accident.': {
    why: "The clue is 'when he saw the accident': a short event during a longer one. 'Was waiting' (was + -ing) is the past continuous for the longer action.",
    not: {
      'Present Simple':
        "'He waits for the bus' would describe a habit. This sentence is about one past moment.",
      'Present Continuous':
        "'He is waiting' would mean it is happening now. This sentence is about the past.",
      'Present Perfect':
        "'He has waited' would link to now, or mean the waiting is over. 'Was waiting' shows he was still waiting.",
      'Past Perfect':
        "'He had waited' would mean the waiting finished before he saw the accident. 'Was waiting' shows it was still going on.",
      "Future 'will'": "'He will wait' would be about the future. This sentence is in the past.",
      "'going to' Future":
        "'He is going to wait' would be a plan. Here the waiting was already in progress.",
    },
    more: "The other verb, 'saw', is the past simple: it is the short event. He was already waiting before he saw the accident.",
  },
  'The sun was shining and the birds were singing.': {
    why: "There is no time word. Two actions were in progress together, to describe a scene. 'Was shining' and 'were singing' (was or were + -ing) are the past continuous.",
    not: {
      'Present Simple':
        "'The sun shines and the birds sing' would be general facts. This sentence describes one past scene.",
      'Present Continuous':
        "'The sun is shining' would describe the scene now. This sentence is about the past.",
      'Past Simple':
        "'The sun shone and the birds sang' would report finished events. 'Was shining' and 'were singing' describe a scene in progress.",
      'Present Perfect':
        "'The sun has shone' would link to now. This sentence describes a past scene.",
      'Past Perfect':
        "'The sun had shone' would mean it shone before another past time. No other past time is given.",
      "Future 'will'": "'The sun will shine' would be a prediction. This scene is in the past.",
      "'going to' Future":
        "'The sun is going to shine' would be a forecast. The scene has already happened.",
    },
    more: "Writers use the past continuous to set the scene in a story: 'The wind was blowing and the rain was falling.'",
    tip: 'In your own stories, set the scene with the past continuous, then use the past simple for the events.',
  },
  'What were you doing at midnight?': {
    why: "The form 'were you doing' (were + -ing) is the past continuous. 'Were' puts the question in the past, and 'at midnight' names the moment it asks about.",
    not: {
      'Present Simple':
        "'What do you do at midnight?' would ask about a habit. 'Were' puts the question in the past, and 'at midnight' names one moment.",
      'Present Continuous':
        "'What are you doing at midnight?' would ask about now or a plan. 'Were' puts the question in the past.",
      'Past Simple':
        "'What did you do at midnight?' would ask for the finished action. 'Were you doing' asks what was in progress then.",
      'Present Perfect':
        "'What have you done at midnight?' would link to now. 'Were' puts this question in the past.",
      'Past Perfect':
        "'What had you done at midnight?' would ask about before another past time. No other past time is given.",
      "Future 'will'":
        "'What will you do at midnight?' would ask about the future. This question is about the past.",
      "'going to' Future":
        "'What are you going to do at midnight?' would ask about a plan. This question is about the past.",
    },
    more: "In a question in the past continuous, was or were comes before the person: 'Where were you going?'",
  },
  'I have never been to Japan.': {
    why: "The form 'have been' (have + past participle) is the present perfect, used for experience. 'Never' shows we mean your whole life up to now, with no exact time.",
    not: {
      'Present Simple':
        "'I never go to Japan' would describe a habit, as if I do not go each year. This sentence is about my whole life up to now.",
      'Present Continuous':
        "'I am going to Japan' would mean I am travelling there now, or have a trip planned. 'Never been' is about my life so far.",
      'Past Simple':
        "'I never went to Japan' would be about a time that is over. This sentence covers my whole life up to now.",
      'Past Continuous':
        "'I was never going to Japan' would be about a plan at a past time. This sentence is about experience.",
      'Past Perfect':
        "'I had never been to Japan' would mean up to a moment in the past, such as 'until 2019'. This sentence is up to now.",
      "Future 'will'":
        "'I will never go to Japan' would be a prediction about the future. This sentence is about the past up to now.",
      "'going to' Future":
        "'I am never going to go to Japan' would be a decision about the future. This sentence is about experience up to now.",
    },
    more: "Use 'have been to' for places you have visited: 'She has been to Spain twice.'",
    tip: "To talk about life experience, use the present perfect. If you give an exact past time, change to the past simple: 'I went to Japan in 2019.'",
  },
  'She has just finished her homework.': {
    why: "The form 'has just finished' (has + past participle) is the present perfect. 'Just' means a very short time ago, so the action is recent and the news matters now.",
    not: {
      'Present Simple':
        "'She finishes her homework' would describe a habit. 'Has just finished' shows one recent action that is done.",
      'Present Continuous':
        "'She is finishing her homework' would mean she is nearly done, or doing it now. 'Has just finished' means it is done.",
      'Past Simple':
        "'She finished her homework' would simply report a past action. 'Has just finished' links it to now.",
      'Past Continuous':
        "'She was finishing' would mean she was in the middle of it at a past time. 'Has just finished' means it is done.",
      'Past Perfect':
        "'She had finished' would mean she finished before another past time. 'Has' shows this is about now.",
      "Future 'will'":
        "'She will finish' would be about the future. 'Has finished' shows it has already happened.",
      "'going to' Future":
        "'She is going to finish' would be a plan. 'Has finished' shows it is already done.",
    },
    more: "'Just', 'already' and 'yet' often go with the present perfect: 'Have you finished yet?'",
  },
  'We have lived in this village since 2015.': {
    why: "The clue is 'since 2015': a starting point in the past. 'Have lived' (have + past participle) is the present perfect: we began living here in 2015 and still live here.",
    not: {
      'Present Simple':
        "'We live in this village' would state where we live now. 'Have lived ... since 2015' adds that it began in 2015 and continues.",
      'Present Continuous':
        "'We are living in this village' would sound temporary. 'Have lived since 2015' shows a long time up to now.",
      'Past Simple':
        "'We lived in this village' would mean we do not live here now. 'Have lived' shows we still do.",
      'Past Continuous':
        "'We were living in this village' would be about a past time. 'Have lived' links the past to now.",
      'Past Perfect':
        "'We had lived in this village' would mean before another past time. 'Have lived' shows it goes up to now.",
      "Future 'will'":
        "'We will live in this village' would be about the future. 'Have lived since 2015' looks back from now.",
      "'going to' Future":
        "'We are going to live in this village' would be a plan. 'Have lived' shows we already live here.",
    },
    more: "Use 'since' with a starting point and 'for' with a length of time: since Monday, for two weeks.",
  },
  'They have already eaten their lunch.': {
    why: "The form 'have eaten' (have + past participle) is the present perfect. The word 'already' supports it: it means 'before now', and lunch is finished, which matters now.",
    not: {
      'Present Simple':
        "'They eat their lunch' would describe a habit. 'Have eaten' shows the lunch is finished now.",
      'Present Continuous':
        "'They are eating their lunch' would mean they are eating now. 'Have already eaten' shows they have finished.",
      'Past Simple':
        "'They ate their lunch' would simply report a past action. 'Have already eaten' links it to now: lunch is finished.",
      'Past Continuous':
        "'They were eating their lunch' would mean they were in the middle of it at a past moment. 'Have eaten' shows it is done.",
      'Past Perfect':
        "'They had already eaten' would mean before another past time. This sentence is about now.",
      "Future 'will'":
        "'They will eat their lunch' would be about the future. 'Have eaten' shows it has happened.",
      "'going to' Future":
        "'They are going to eat their lunch' would be a plan. 'Have eaten' shows it has happened.",
    },
    more: "'Already' usually goes between have and the past participle: 'They have already eaten.'",
  },
  'Have you ever ridden a horse?': {
    why: "The form 'have you ridden' (have + past participle) is the present perfect, used to ask about experience. 'Ever' means 'at any time in your life'.",
    not: {
      'Present Simple':
        "'Do you ride a horse?' would ask about a habit. 'Ever' asks about any time in your life up to now.",
      'Present Continuous':
        "'Are you riding a horse?' would ask what you are doing now. 'Ever' asks about experience.",
      'Past Simple':
        "'Did you ride a horse?' would ask about one time that is over. 'Ever' asks about your whole life.",
      'Past Continuous':
        "'Were you riding a horse?' would ask about one past moment. 'Ever' asks about your whole life.",
      'Past Perfect':
        "'Had you ever ridden a horse?' would ask about before a past time. This question is about now.",
      "Future 'will'":
        "'Will you ever ride a horse?' would ask about the future. This question is about your experience so far.",
      "'going to' Future":
        "'Are you going to ride a horse?' would ask about a plan. 'Ever' asks about experience up to now.",
    },
    more: "The answer often uses 'never' or 'once': 'No, I have never ridden a horse.'",
  },
  'He has worked here for ten years.': {
    why: "The form 'has worked' (has + past participle) is the present perfect: it goes up to now. 'For ten years' tells us how long: he started ten years ago and still works here.",
    not: {
      'Present Simple':
        "'He works here' would state a fact. 'For ten years' adds how long, up to now.",
      'Present Continuous':
        "'He is working here' would mean he works here now, perhaps for a short time. 'For ten years' shows a long time.",
      'Past Simple':
        "'He worked here for ten years' would mean he does not work here now. 'Has worked' shows he still does.",
      'Past Continuous':
        "'He was working here' would be about a past time. 'Has worked' goes up to now.",
      'Past Perfect':
        "'He had worked here for ten years' would mean up to a past moment. This sentence is about now.",
      "Future 'will'":
        "'He will work here for ten years' would be a future plan. This sentence looks back from now.",
      "'going to' Future":
        "'He is going to work here' would be a plan. This sentence says he already has for ten years.",
    },
    more: "Compare: 'He worked here for ten years' (past simple) means he does not work here now.",
  },
  'I have lost my keys and I cannot find them.': {
    why: "There is no time word. The clue is the result now: 'I cannot find them'. 'Have lost' (have + past participle) is the present perfect: a past action with a result for the present.",
    not: {
      'Present Continuous':
        "'I am losing my keys' would mean it is happening now, as if they are slipping away. 'Have lost' means they are already gone.",
      'Past Simple':
        "'I lost my keys' would simply report a past event. 'Have lost' links it to now: I still cannot find them.",
      'Past Continuous':
        "'I was losing my keys' would mean I was in the middle of losing them at a past moment. They are lost now.",
      'Past Perfect':
        "'I had lost my keys' would mean before another past time. This sentence is about now.",
      "Future 'will'": "'I will lose my keys' would be a prediction. They are already lost.",
      "'going to' Future":
        "'I am going to lose my keys' would be a warning about the future. They are already lost.",
    },
    more: "'Cannot find' only shows the result now: the keys are still lost. The tense being asked about is 'have lost'.",
    tip: "Use the present perfect when a past action matters now: 'I have lost my phone' means I need help finding it.",
  },
  'By the time we arrived, the train had already left.': {
    why: "The form 'had left' (had + past participle) is the past perfect. 'By the time we arrived' gives the later moment, and 'already' shows the train had gone before it.",
    not: {
      'Present Simple':
        "'The train leaves' would describe a timetable. This sentence is about a past event before we arrived.",
      'Present Continuous':
        "'The train is leaving' would mean it is leaving now. This sentence is about the past.",
      'Past Continuous':
        "'The train was leaving' would mean it was in the middle of leaving when we arrived. This sentence says 'had left': it was already gone.",
      'Present Perfect':
        "'The train has already left' would mean it is gone now. 'By the time we arrived' sets the time in the past.",
      "Future 'will'":
        "'The train will leave' would be about the future. This sentence is about the past.",
      "'going to' Future":
        "'The train is going to leave' would be a plan or a warning. The train had already gone.",
    },
    more: "There are two past events: first the train left, then we arrived. The other verb, 'arrived', is the past simple and names the later event.",
    tip: 'Use the past perfect to show which of two past events came first.',
  },
  'She had finished the report before the meeting began.': {
    why: "The form 'had finished' (had + past participle) is the past perfect. 'Before the meeting began' names the later event, so the report came first.",
    not: {
      'Present Simple':
        "'She finishes the report' would describe a habit. This sentence is about two past events.",
      'Present Continuous':
        "'She is finishing the report' would mean she is doing it now. This sentence is about the past.",
      'Past Continuous':
        "'She was finishing the report' would mean she was still working when the meeting began. This sentence says 'had finished': she was already done.",
      'Present Perfect':
        "'She has finished the report' would link to now. This sentence is about a past time.",
      "Future 'will'":
        "'She will finish the report' would be about the future. The meeting has already begun.",
      "'going to' Future":
        "'She is going to finish the report' would be a plan. This sentence says it was done before the meeting.",
    },
    more: "The other verb, 'began', is the past simple: it names the later event, the start of the meeting.",
  },
  'They were tired because they had walked all day.': {
    why: "'Had walked' (had + past participle) is the past perfect. The walking came first, and it caused the tiredness.",
    not: {
      'Present Simple':
        "'They are tired because they walk all day' would be about a habit now. This sentence is about one past day.",
      'Present Continuous':
        "'They are walking' would mean they are walking now. This sentence is about the past.",
      'Past Continuous':
        "'They were walking all day' would describe the long walk as in progress. 'Had walked' shows it finished first and caused the tiredness.",
      'Present Perfect':
        "'They have walked all day' would link to now. This sentence is about the past.",
      "Future 'will'":
        "'They will walk' would be about the future. This sentence is about the past.",
      "'going to' Future":
        "'They are going to walk' would be a plan. The walking had already happened.",
    },
    more: "The other verb, 'were', is the past simple: it tells us how they felt. A reason that came earlier often uses the past perfect: 'She was late because she had missed the bus.'",
  },
  'When I got home, my brother had cooked dinner.': {
    why: "'Had cooked' (had + past participle) is the past perfect. 'When I got home' names the later moment, so the dinner was cooked first.",
    not: {
      'Present Simple':
        "'My brother cooks dinner' would describe a habit. This sentence is about one past evening.",
      'Present Continuous':
        "'My brother is cooking dinner' would mean he is cooking now. This sentence is about the past.",
      'Past Continuous':
        "'My brother was cooking dinner' would mean he was still cooking when I got home. 'Had cooked' means he had finished.",
      'Present Perfect':
        "'My brother has cooked dinner' would mean it is ready now. 'When I got home' sets the time in the past.",
      "Future 'will'":
        "'My brother will cook dinner' would be about the future. This sentence is about the past.",
      "'going to' Future":
        "'My brother is going to cook dinner' would be a plan. The dinner was already cooked.",
    },
    more: "Compare: 'When I got home, my brother cooked dinner' (past simple) would mean he cooked after I arrived.",
  },
  'He realised he had forgotten his passport.': {
    why: "There is no time word. The clue is 'realised': he noticed later that the forgetting had already happened. 'Had forgotten' (had + past participle) is the past perfect, for the earlier event.",
    not: {
      'Present Simple':
        "'He forgets his passport' would describe a habit. This sentence is about one past moment.",
      'Present Continuous':
        "'He is forgetting his passport' would mean it is happening now. This sentence is about the past.",
      'Past Continuous':
        "'He was forgetting his passport' would mean he was in the middle of forgetting it. 'Had forgotten' means the forgetting was finished first.",
      'Present Perfect':
        "'He has forgotten his passport' would mean he still does not have it now. 'Realised' puts the sentence in the past.",
      "Future 'will'":
        "'He will forget his passport' would be a prediction. He had already forgotten it.",
      "'going to' Future":
        "'He is going to forget his passport' would be a warning. He had already forgotten it.",
    },
    more: "The other verb, 'realised', is the past simple: it is the later moment. After verbs such as 'knew' or 'realised', we often use the past perfect for the earlier event: 'She knew she had seen him before.'",
  },
  'The film had started by the time we sat down.': {
    why: "'Had started' (had + past participle) is the past perfect. 'By the time we sat down' names the later moment, so the film began first.",
    not: {
      'Present Simple': "'The film starts' would be a timetable. This sentence is about the past.",
      'Present Continuous':
        "'The film is starting' would mean it is starting now. This sentence is about the past.",
      'Past Continuous':
        "'The film was starting' would mean it was in the middle of starting when we sat down. 'Had started' shows it began first.",
      'Present Perfect':
        "'The film has started' would mean it is already on now. 'By the time we sat down' sets the time in the past.",
      "Future 'will'":
        "'The film will start' would be about the future. This sentence is about the past.",
      "'going to' Future": "'The film is going to start' would be a plan. It had already started.",
    },
    more: "'By the time we sat down' names the later moment, and the earlier event uses the past perfect. The other verb, 'sat', is the past simple.",
  },
  'I had never seen snow until I moved to Scotland.': {
    why: "The form 'had never seen' (had + never + past participle) is the past perfect. 'Until I moved to Scotland' names the later moment, and 'never' means no experience before it.",
    not: {
      'Present Simple':
        "'I never see snow' would describe a habit now. This sentence is about my life up to a past moment.",
      'Present Continuous':
        "A present continuous (am + -ing) would be about now. 'Until I moved to Scotland' puts this sentence in the past.",
      'Past Continuous':
        "A past continuous would describe one moment in progress. 'Had never seen' covers my whole life before I moved.",
      'Present Perfect':
        "'I have never seen snow' would mean up to now. 'Until I moved to Scotland' sets an earlier past point.",
      "Future 'will'":
        "'I will never see snow' would be a prediction. This sentence is about the past.",
      "'going to' Future":
        "'I am never going to see snow' would be a decision about the future. This sentence is about the past.",
    },
    more: "Compare the present perfect: 'I have never seen snow' means up to now. The past perfect means up to a point in the past. The other verb, 'moved', is the past simple.",
  },
  'I think it will rain later this afternoon.': {
    why: "The clues are 'I think' and 'later this afternoon': an opinion about the future. 'Will rain' (will + verb) is the 'will' future, used to predict.",
    not: {
      'Present Continuous':
        "'It is raining' would mean it is happening now. 'Later this afternoon' is in the future.",
      'Past Simple':
        "'It rained' would be about a time that is over. 'Later this afternoon' is still to come.",
      'Past Continuous':
        "'It was raining' would be about a past moment. 'Later this afternoon' is still to come.",
      'Present Perfect':
        "'It has rained' would mean it has rained up to now. This sentence looks forward.",
      'Past Perfect':
        "'It had rained' would mean it rained before another past time. This sentence looks forward.",
      "'going to' Future":
        "'It is going to rain' would be a prediction from evidence, such as dark clouds. 'I think' shows an opinion, so 'will' fits.",
    },
    more: "'Think' is in the present simple, but it only shows an opinion. The prediction is 'will rain'. We often use 'will' after think, believe and expect: 'I expect she will come.'",
  },
  'Don’t worry, I will help you with your bags.': {
    why: "There is no time word. The clue is 'Don’t worry': the speaker decides now to offer help. 'Will help' (will + verb) is the 'will' future, used for offers.",
    not: {
      'Present Simple':
        "'Don’t worry' is an order, not the present simple. The present simple would be 'I help you', a habit or a fact. 'Will help' is an offer for the next moment.",
      'Present Continuous':
        "'I am helping you' would mean I am doing it now. 'Don’t worry' shows I am offering to help.",
      'Past Simple':
        "'I helped you' would mean it is done. This sentence is an offer for what comes next.",
      'Past Continuous':
        "'I was helping you' would be about a past moment. This sentence is an offer.",
      'Present Perfect':
        "'I have helped you' would mean the help is done. This sentence is an offer.",
      'Past Perfect':
        "'I had helped you' would mean before another past time. This sentence is an offer.",
      "'going to' Future":
        "'I am going to help you' would be a plan I had already made. This sentence is a decision made now, as an offer.",
    },
    more: "Orders such as 'Don’t worry', 'Look' and 'Be careful' use the plain verb, and they have no tense of their own. To name the tense, look at the other verb.",
    tip: "Use 'will' to make an offer or a quick decision: 'It is hot. I will open the window.'",
  },
  'She will be twenty years old next month.': {
    why: "The clue is 'next month': a future time. 'Will be' (will + verb) is the 'will' future. It states a fact that we already know about the future.",
    not: {
      'Present Simple':
        "'She is twenty years old' would state her age now. 'Next month' looks to the future.",
      'Present Continuous':
        "The present continuous ('is being') is not used for age. 'Next month' needs a future form such as 'will be'.",
      'Past Simple': "'She was twenty' would be about a past time. 'Next month' is in the future.",
      'Past Continuous':
        "The past continuous ('was being') does not describe age. 'Next month' looks forward, not back.",
      'Present Perfect':
        "'She has been twenty' would mean she is twenty now and has been for some time. 'Next month' looks forward.",
      'Past Perfect':
        "'She had been twenty' would mean before another past time. 'Next month' looks forward.",
      "'going to' Future":
        "'She is going to be twenty' means almost the same here. But this sentence has 'will be', so it is the 'will' future.",
    },
    more: "Facts about the future that nobody can change often use 'will': 'Tomorrow will be Tuesday.'",
  },
  'The shop will close early on Christmas Eve.': {
    why: "The form 'will close' (will + verb) is the 'will' future. 'On Christmas Eve' names the day, and the sentence says what the shop will do.",
    not: {
      'Present Simple':
        "'The shop closes early' would give a timetable as a fact. This sentence has 'will close', so it is the 'will' future.",
      'Present Continuous':
        "'The shop is closing early' would mean it is closing now, or it is a fixed arrangement. This sentence has 'will close'.",
      'Past Simple':
        "'The shop closed early' would be about a time that is over. This sentence has 'will close', so it looks forward.",
      'Past Continuous':
        "'The shop was closing early' would be about a past moment. This sentence has 'will close', so it looks forward.",
      'Present Perfect':
        "'The shop has closed early' would mean it has already closed. This sentence has 'will close', so it looks forward.",
      'Past Perfect':
        "'The shop had closed early' would mean before another past time. This sentence has 'will close', so it looks forward.",
      "'going to' Future":
        "'The shop is going to close early' would be a plan or a sign that it is about to happen. This sentence uses 'will close'.",
    },
    more: "Shops and offices often announce future changes with 'will': 'We will open at ten on Monday.'",
  },
  'I promise I will phone you when I land.': {
    why: "The clue is 'promise': a promise about the future uses 'will'. 'Will phone' (will + verb) is the 'will' future.",
    not: {
      'Present Continuous':
        "'I am phoning you' would mean I am calling now. A promise looks to the future.",
      'Past Simple': "'I phoned you' would mean it is done. This sentence is a promise.",
      'Past Continuous':
        "'I was phoning you' would be about a past moment. This sentence is a promise.",
      'Present Perfect':
        "'I have phoned you' would mean the call is done. This sentence is a promise for later.",
      'Past Perfect':
        "'I had phoned you' would mean before another past time. This sentence is a promise.",
      "'going to' Future":
        "'I am going to phone you' would be a plan. A promise to do something is usually 'will'.",
    },
    more: "The verbs 'promise' and 'land' are in the present simple, but the promise itself is 'will phone'. After 'when', we use the present simple even for the future.",
  },
  'Perhaps they will arrive before dark.': {
    why: "The word 'will' before the verb makes this the 'will' future. 'Perhaps' shows doubt, so it is a guess about what may happen.",
    not: {
      'Present Simple':
        "'They arrive' would be a timetable or a habit. This sentence has 'will arrive', a prediction about the future.",
      'Present Continuous':
        "'They are arriving' would mean they are arriving now, or it is a fixed arrangement. This sentence has 'will arrive', a guess about later.",
      'Past Simple':
        "'They arrived before dark' would be about a time that is over. This sentence has 'will arrive', so it looks forward.",
      'Past Continuous':
        "'They were arriving' would be about a past moment. This sentence has 'will arrive', so it looks forward.",
      'Present Perfect':
        "'They have arrived' would mean they are here now. This sentence has 'will arrive', so they have not come yet.",
      'Past Perfect':
        "'They had arrived' would mean before another past time. This sentence looks forward.",
      "'going to' Future":
        "'They are going to arrive' would show a plan or a sign now. 'Perhaps' shows only a guess, so 'will' fits better.",
    },
    more: "Perhaps, probably and maybe often go with 'will': 'Perhaps it will snow.'",
  },
  'I am sure you will pass the test.': {
    why: "There is no time word. 'Will pass' (will + verb) is the 'will' future. 'I am sure' shows how certain the speaker is, so it is a prediction from opinion.",
    not: {
      'Present Continuous':
        "'You are passing the test' would mean you are doing well now. This sentence has 'will pass', so it looks forward.",
      'Past Simple': "'You passed the test' would mean it is done. This sentence is a prediction.",
      'Past Continuous':
        "'You were passing the test' would be about a past moment. This sentence is a prediction.",
      'Present Perfect':
        "'You have passed the test' would mean it is done. This sentence is a prediction.",
      'Past Perfect':
        "'You had passed the test' would mean before another past time. This sentence is a prediction.",
      "'going to' Future":
        "'You are going to pass the test' would suggest a sign now, such as good marks. 'I am sure' is an opinion, so 'will' fits.",
    },
    more: "'Am' is the present simple of 'be', but it only shows the speaker's opinion. The prediction is 'will pass'. We use 'will' for predictions based on opinion: 'I think it will be fun.'",
  },
  'We are going to visit the museum tomorrow.': {
    why: "The clues are 'tomorrow' and 'are going to visit': a plan that has already been made. This is the 'going to' future (be + going to + verb).",
    not: {
      'Present Simple':
        "'We visit the museum tomorrow' would give a fixed timetable. 'Are going to visit' shows a plan we have made.",
      'Present Continuous':
        "'We are visiting the museum' is the present continuous: we are there now, or the visit is fixed. This sentence has 'going to + verb', which shows a plan.",
      'Past Simple':
        "'We visited the museum' would be about a time that is over. 'Tomorrow' is in the future.",
      'Past Continuous':
        "'We were visiting the museum' would be about a past moment. 'Tomorrow' looks forward.",
      'Present Perfect':
        "'We have visited the museum' would mean it has already happened. 'Tomorrow' looks forward.",
      'Past Perfect':
        "'We had visited the museum' would mean before another past time. 'Tomorrow' looks forward.",
      "Future 'will'":
        "'We will visit the museum' is also about the future, but it is a prediction or a decision made now. 'Are going to visit' shows a plan already made.",
    },
    more: "Use 'going to' for plans and intentions: 'I am going to learn French.'",
    tip: "In speaking, 'going to' is often said 'gonna'. In writing, always write 'going to'.",
  },
  'Look at those dark clouds: it is going to rain.': {
    why: "The clue is 'those dark clouds': we can see the evidence now. 'Is going to rain' (is + going to + verb) is the 'going to' future, for a prediction from evidence.",
    not: {
      'Present Simple':
        "'Look' is an order, not the present simple. The present simple would be 'It rains', a general fact. The dark clouds show that rain is coming soon.",
      'Present Continuous':
        "'It is raining' would mean it is raining now. The clouds show it will rain soon.",
      'Past Simple':
        "'It rained' would be about a time that is over. The clouds are in front of us now.",
      'Past Continuous':
        "'It was raining' would be about a past moment. 'Look at those' is about now.",
      'Present Perfect':
        "'It has rained' would link a past event to now. The clouds point to the future.",
      'Past Perfect':
        "'It had rained' would mean before another past time. The clouds point to the future.",
      "Future 'will'":
        "'It will rain' would be an opinion or a prediction without evidence. The clouds are evidence we can see now, so 'going to' fits.",
    },
    more: "Compare: 'I think it will rain' is an opinion. 'It is going to rain' is a prediction from what you can see.",
  },
  'She is going to study medicine at university.': {
    why: "There is no time word. The clue is 'is going to study': she has already decided, so it is a plan. This is the 'going to' future (be + going to + verb).",
    not: {
      'Present Simple':
        "'She studies medicine' would state what she does now. 'Is going to study' shows a plan for later.",
      'Present Continuous':
        "'She is studying medicine' would mean she is studying it now. 'Is going to study' shows she has not started.",
      'Past Simple':
        "'She studied medicine' would be about the past. This sentence is about a plan.",
      'Past Continuous':
        "'She was studying medicine' would be about a past time. This sentence is about a plan.",
      'Present Perfect':
        "'She has studied medicine' would mean she has done it. This sentence is about a plan.",
      'Past Perfect':
        "'She had studied medicine' would mean before another past time. This sentence is about a plan.",
      "Future 'will'":
        "'She will study medicine' would be a prediction or a decision made now. 'Is going to study' shows a plan she has already made.",
    },
    more: "'Going to' shows an intention that is already decided: 'I am going to be a nurse.'",
  },
  'They are going to sell their old car next week.': {
    why: "The clues are 'next week' and 'are going to sell': they have made a decision. This is the 'going to' future (be + going to + verb).",
    not: {
      'Present Simple':
        "'They sell their old car' would be a habit or a timetable. 'Next week' with 'going to' shows a plan.",
      'Present Continuous':
        "'They are selling their old car' would mean they are selling it now, or have arranged it. 'Going to' shows the plan for next week.",
      'Past Simple':
        "'They sold their old car' would be about a time that is over. 'Next week' is in the future.",
      'Past Continuous':
        "'They were selling their old car' would be about a past moment. 'Next week' looks forward.",
      'Present Perfect':
        "'They have sold their old car' would mean the sale is done. 'Next week' looks forward.",
      'Past Perfect':
        "'They had sold their old car' would mean before another past time. 'Next week' looks forward.",
      "Future 'will'":
        "'They will sell their old car' would be a prediction or a decision made now. 'Are going to sell' shows a decision they have already made.",
    },
    more: "Future time words (tomorrow, next week, in September) go with both 'will' and 'going to'. Look at the verb form to decide.",
  },
  'I am going to start a new job in September.': {
    why: "The form 'am going to start' (be + going to + verb) is the 'going to' future. 'In September' gives the time of the plan.",
    not: {
      'Present Simple':
        "'I start a new job in September' would give a fixed date, like a timetable. 'Am going to start' shows my plan.",
      'Present Continuous':
        "'I am starting a new job' would mean I am starting it now, or have an arrangement. 'Going to start' shows my plan.",
      'Past Simple':
        "'I started a new job' would be about a time that is over. This sentence has 'am going to start', so it looks forward.",
      'Past Continuous':
        "'I was starting a new job' would be about a past moment. This sentence has 'am going to start', so it looks forward.",
      'Present Perfect':
        "'I have started a new job' would mean it has begun. This sentence looks forward to September.",
      'Past Perfect':
        "'I had started a new job' would mean before another past time. This sentence has 'am going to start', so it looks forward.",
      "Future 'will'":
        "'I will start a new job' would be a prediction or a decision made now. 'Am going to start' shows a plan I already have.",
    },
    more: "Use am with I, is with he, she and it, and are with you, we and they: 'I am going to', 'she is going to', 'they are going to'.",
  },
  'Be careful: you are going to drop those plates.': {
    why: "There is no time word. The clue is 'Be careful': there is a danger that we can see now. 'Are going to drop' is the 'going to' future, used for something that is about to happen.",
    not: {
      'Present Simple':
        "'Be careful' is an order, not the present simple. The present simple would be 'You drop plates', a habit. The warning is about the next moment.",
      'Present Continuous':
        "'You are dropping those plates' would mean it is happening now. The warning is about the next moment.",
      'Past Simple':
        "'You dropped those plates' would mean it has happened. The warning comes before.",
      'Past Continuous':
        "'You were dropping those plates' would be about a past moment. The warning is about now.",
      'Present Perfect':
        "'You have dropped those plates' would mean they have fallen. 'Be careful' shows they have not.",
      'Past Perfect':
        "'You had dropped those plates' would mean before another past time. The warning is about now.",
      "Future 'will'":
        "'You will drop those plates' would be a prediction. 'Be careful' shows we can see the danger now, so 'going to' fits.",
    },
    more: "We use 'going to' for warnings about what is about to happen: 'Look out, you are going to fall.'",
  },
  'We are going to have a barbecue if the weather stays fine.': {
    why: "There is no time word. The clue is 'are going to have': a plan, which depends on the weather ('if the weather stays fine'). This is the 'going to' future (be + going to + verb).",
    not: {
      'Present Continuous':
        "'We are having a barbecue' would mean it is happening now, or it is fixed. 'Going to have' shows a plan that depends on the weather.",
      'Past Simple':
        "'We had a barbecue' would be about a time that is over. This sentence looks forward.",
      'Past Continuous':
        "'We were having a barbecue' would be about a past moment. This sentence looks forward.",
      'Present Perfect':
        "'We have had a barbecue' would mean it has happened. This sentence looks forward.",
      'Past Perfect':
        "'We had had a barbecue' would mean before another past time. This sentence looks forward.",
      "Future 'will'":
        "'We will have a barbecue' would be a prediction or a decision made now. 'Going to' shows a plan we already have.",
    },
    more: "After 'if', the verb ('stays') is in the present simple even when it talks about the future. The plan itself is 'are going to have'.",
  },
}
