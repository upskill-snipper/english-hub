import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The Bright Lights of Sarajevo, Tony Harrison (1995). A supplement: the page
 * at /igcse/edexcel/poetry/the-bright-lights-of-sarajevo keeps its overview,
 * context and form sections, and this file adds everything it lacked.
 *
 * Every quotation was checked word for word against the poem as the student
 * studies it: page 28 of the Pearson Edexcel International GCSE English
 * Anthology, Issue 8 (February 2026), read from Pearson's own PDF on 25
 * September 2026. Line numbers are that printing's, and the stanza numbers
 * follow its five verse paragraphs (lines 1-11, 12-20, 21-24, 25-42, 43-46),
 * measured from the page layout rather than assumed.
 *
 * The poem is in copyright and is 351 words long, so the whole page may quote
 * 52 of them (fair-dealing.ts). The guide therefore works from twelve short
 * phrases, 51 words in all, and reuses them rather than adding more. Everything
 * else is paraphrase and reference.
 *
 * The anthology's acknowledgement says the poem is reproduced "by kind
 * permission of Tony Harrison". It does not mention Bloodaxe Books, which the
 * page above and the set-text registry both name as the rights holder.
 *
 * Fact-checked on 26 September 2026 against a fresh download of the same PDF
 * (identical file): every quotation, line and stanza reference and the word
 * count held. What was fixed: four passages of prose had copied runs of the poem
 * without quotation marks (the "two shell scars" line, the café and curfew line,
 * and the match-and-cigarette line, nearly whole), which the quotation counter
 * cannot see, so they are now paraphrased; the "I think" note put line 27 in
 * line 25; and the Pleiades entry said "either way" of one pronunciation.
 */
export const guide: StudyGuide = {
  slug: 'the-bright-lights-of-sarajevo',
  title: 'The Bright Lights of Sarajevo',
  author: 'Tony Harrison',
  form: 'poem',
  scope:
    'The whole poem, 46 lines, as printed on page 28 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), Part 2, for English Language A. Line and stanza references in this guide follow that printing.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Tony Harrison 1995. As printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), where it is reproduced by kind permission of Tony Harrison. Quoted here in short extracts for criticism and review.',
  },
  workLength: {
    words: 351,
    lines: 46,
    basis:
      "Counted from the poem as printed in the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), p. 28, extracted from Pearson's PDF: 46 lines, 351 words split on spaces (the dash that ends line 11 is not a word). Counting each part of a hyphenated compound separately, as the quotation counter does, gives 358; the lower figure is recorded so the limit errs tight.",
  },

  themes: [
    {
      title: 'Survival under siege',
      body: 'Harrison opens not with explosions but with chores. The first stanza lists the labours that fill a Sarajevan day: queuing to refill gas canisters and wheeling them home in prams, queuing for a small ration of bread, “dodging snipers” on the way, and carrying water up as many as eleven flights of stairs. Each task is ordinary, and each is made exhausting or deadly by the siege. The effect is to show war as something endured hour by hour rather than as a headline. One reading is that Harrison is correcting the way the war was usually seen from outside: the long first sentence makes the reader wait through the drudgery, as the citizens must, before anything else can happen. Notice too that prams, made for babies, now carry fuel. The siege has bent every object away from its purpose, which prepares for the sacks of the final line.',
    },
    {
      title: 'Love as defiance',
      body: 'The turn in line 11, “that’s just not the case”, announces that the young of Sarajevo refuse to stay indoors. They walk, flirt and pair off. Stanzas 2 and 3 describe how courtship usually goes in the dark, from a deliberate bump onwards; then the speaker picks out one couple and follows them to a shared coffee and a held hand. The courtship is told gently and with humour, as a series of tests a boy has to pass. The more convincing reading is that this is not escapism but resistance: to go out at night in a city under fire, and to fall for someone there, is to insist that the siege has not won. The alternative deserves weight. Harrison never lets the romance float free of the war. The couple stand on the site of a massacre, and the final hand-hold happens behind sandbags. Love here does not defeat violence; it carries on beside it, which may be the braver thing.',
    },
    {
      title: 'Identity and division',
      body: 'The Bosnian War was fought largely along ethnic lines, between Bosnian Muslims (now usually called Bosniaks), Serbs and Croats. In the unlit streets, the poem notices, the walkers are “impossible to mark / as Muslim, Serb or Croat”, and even the different words the communities use for bread cannot be matched to a face. The darkness that makes the city dangerous also makes it equal. This suggests that the divisions the war was fought over are not visible facts about people but labels put on them. Yet the poem is not neutral: it names the shelling as Serb three times, in lines 10, 30 and 42. The strongest answers notice both moves. One persuasive reading is that Harrison separates the army besieging the city from the Serbs walking inside it, blaming the guns without blaming a people.',
    },
    {
      title: 'Beauty beside atrocity',
      body: 'The poem’s most striking image puts the loveliest thing in the city inside its worst wound. The rain-filled mortar holes where the bread queue was killed in 1992 now reflect the clear night sky, so the boy sees “fragments of the splintered Pleiades” at his feet. Harrison refuses to choose between the two meanings. The stars are beautiful, and the reflection is a moment the couple can share; but the words used for them belong to shrapnel, and the holes are “death-deep, death-dark wells”. One reading is that beauty is a kind of healing, the city’s scars filling with light. A darker and arguably more accurate reading is that nothing in Sarajevo, not even starlight, can now be seen apart from the killing that shaped it.',
    },
    {
      title: 'Light and darkness',
      body: 'The title promises bright lights, an idiom that usually means the glamour of a big city at night. Besieged Sarajevo has none of that. There are no torches in the streets, and the lights the poem actually shows are small and borrowed: the brief flame that lights a cigarette, stars reflected in puddles, the candles of one café. The title is ironic, but not only ironic, because these tiny lights are where the human moments happen. That flame lets the boy read the girl’s eyes; a candle lights their coffee. Darkness works both ways too. It may shelter the walkers from snipers, and it shelters them from labels, yet the same clear sky that shows the stars is, the speaker notes, ideal for the “bomber’s eye”. Light in this poem is precious because it is dangerous.',
    },
    {
      title: 'Witness and memory',
      body: 'In 1995 The Guardian commissioned Harrison to go to Bosnia and write poems about the war, and the speaker behaves like a reporter. He watches, notes precise detail and even hedges, “I think”, rather than claiming to know what the couple feel. He makes no speeches and does not tell the reader what to conclude. Instead he makes the place itself remember: the shell scars under the couple’s feet carry the 1992 massacre into the present, and the poem records it in two brutal couplets, lines 29-32. One reading is that the poem is itself a memorial, fixing the massacre and the courtship side by side so that neither can be forgotten. Another is that the speaker’s distance is a limit: he sees the young mostly as dark shapes and never gives them words of their own.',
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The observing voice, usually identified with Harrison himself',
      body: 'In the first stanza the speaker addresses the reader directly, supposing what we would expect of a besieged city at night, and he only appears as I in line 25, when he picks one couple out of the crowd. He is an outsider and an observer. His tone is conversational, even wry, and his tentative “I think” in line 27 shows a reporter’s honesty about the limits of what he can know. Tony Harrison (1937-2025) was in Bosnia in 1995 on a commission from The Guardian, so it is natural to read the speaker as Harrison, but the poem never names him and it is safer in an exam to write about the speaker. His choice of detail carries his judgement: he is the one who sees the massacre site beneath the couple and names the shells as Serb.',
    },
    {
      name: 'The boy',
      role: 'One of the young walkers, and the poem’s lover',
      body: 'The boy is never named or described beyond his shape in the dark. Stanzas 2 and 3 describe how any boy courts a girl in the unlit streets: a deliberate collision, her tone of voice, then a match or lighter to read her eyes. In stanza 4 the speaker picks out one boy who has passed these tests and is about to take a girl’s hand. It is through his eyes that the poem sees the stars reflected in the shell-holes (line 39), which gives its most beautiful and most disturbing image to a young man in love. In the last stanza he leads her away to a café and holds her hand. He stands for the ordinary hopes of youth carrying on in impossible conditions: where the war would have him hide, he acts, gently and with purpose.',
    },
    {
      name: 'The girl',
      role: 'The young woman the boy courts',
      body: 'The girl is seen only from outside, as a dark shape the boy is drawn to. The poem still gives her the deciding voice: it is the way she speaks that signals she approves of him, and he checks her eyes by the light of a match or lighter to see whether he has made progress. The courtship seems to move forward only with her approval. She never speaks directly, which is one limit of a poem told by a watching stranger. Some readers find her a symbol rather than a person, the city’s life and future; others see simply a young woman choosing, in the middle of a war, to spend an evening with someone she likes. Both readings can be argued from the text.',
    },
    {
      name: 'The young of Sarajevo',
      role: 'The crowd of evening walkers',
      body: 'The young people of the city walk slowly through the dark after the day’s queues, going out for an evening walk along streets that shelling has wrecked. In the dark they cannot be told apart, so the poem sees them as one community rather than three. They do not bump into one another except on purpose, as a way of flirting. They are the answer to the question the first stanza sets up: after a day of queues and snipers, would anyone go out at night? They do. Their walk turns survival into normal life, and the poem narrows from them to a single couple, as a camera might.',
    },
  ],

  keyQuotes: [
    {
      text: 'dodging snipers',
      where: 'Stanza 1, line 6',
      analysis:
        'The verb dodging is casual, the language of a game or a crowded pavement, and it is attached to the threat of being shot. Harrison slips the danger into a list of errands, between the bread ration and the water, so the reader registers how routine the risk of death has become. Snipers firing at civilians in the streets were a daily danger in the besieged city.',
    },
    {
      text: 'that’s just not the case',
      where: 'Stanza 1, line 11',
      analysis:
        'The turning point of the poem arrives in the plainest possible words. After ten lines building the expectation of empty, frightened streets, the speaker dismisses it with a spoken, almost shrugging phrase. The flat tone makes the young people’s defiance sound natural rather than heroic, and the dash at the end of the line, with the rhyme that carries across the stanza break, throws the reader forward into the evening.',
    },
    {
      text: 'impossible to mark / as Muslim, Serb or Croat',
      where: 'Stanza 2, lines 13-14',
      analysis:
        'To mark someone is to identify them, and in a war it is also to single them out as a target. In the dark the walkers can be neither. The three communities whose divisions drove the war are listed evenly, joined by or, with nothing to tell them apart, which suggests the identities the war was fought over cannot even be seen. The darkness that endangers the city also makes it one.',
    },
    {
      text: 'tender radar',
      where: 'Stanza 3, line 21',
      analysis:
        'An unexpected pairing. Radar is military technology, used to detect aircraft and guide weapons, and in a city under bombardment it belongs to the language of war. Harrison softens it with tender, turning it into the intuition by which the boy senses the girl likes him. War has entered even the vocabulary of love, but here it is used to find a partner, not a target.',
    },
    {
      text: 'I think',
      where: 'Stanza 4, line 27',
      analysis:
        'The speaker first appears as I in line 25, and two lines later he admits uncertainty. The small hedge, set off by commas, is a reporter’s honesty: he can see what the boy is about to do but cannot know it. It keeps the poem grounded in observation, and makes the reader trust the terrible facts that follow in the next few lines.',
    },
    {
      text: 'Serb mortars massacred the breadshop queue',
      where: 'Stanza 4, line 30',
      analysis:
        'The most violent line in the poem is also one of its most compressed. The alliteration of mortars and massacred sounds like repeated impact, and the victims are reduced to a queue, the very activity of the first stanza. The attack the poem appears to recall, on people queuing for bread in May 1992, was blamed on the Bosnian Serb forces besieging the city, who denied it. Naming the mortars as Serb is a clear judgement.',
    },
    {
      text: 'blood-dunked crusts of shredded bread',
      where: 'Stanza 4, line 31',
      analysis:
        'Dunked is a homely word, for dipping food into a drink, and fusing it with blood makes the horror more intimate, not less. Bread has been the poem’s symbol of survival since the daily ration of line 5; here it becomes evidence of slaughter. The line rhymes with the dead at the end of the next line, so the couplet locks food and death together.',
    },
    {
      text: 'bomber’s eye',
      where: 'Stanza 4, line 38',
      analysis:
        'The clear, starry sky that gives the couple their view is, the speaker notes, ideal for an attacker. Reducing the attacker to a single watching eye makes the sky itself threatening. Harrison will not let the romantic night be only romantic: the conditions for beauty are exactly the conditions for danger, and a clear evening is a frightening one in Sarajevo.',
    },
    {
      text: 'fragments of the splintered Pleiades',
      where: 'Stanza 4, line 40',
      analysis:
        'The Pleiades, the Seven Sisters of Greek myth, are one of the best-known sights of the night sky. Reflected in a rain-filled shell-hole they are broken up, and Harrison describes them with the vocabulary of shrapnel. Beauty is present, but shattered. One reading sees hope, light filling the city’s wounds; the more unsettling reading is that the war has broken even the stars.',
    },
    {
      text: 'death-deep, death-dark wells',
      where: 'Stanza 4, line 41',
      analysis:
        'The repeated compound, heavy with d sounds, makes the puddles seem bottomless. Wells are sources of water and life, and the poem has already shown Sarajevans hauling water upstairs, but these were dug by mortars and are measured in death. The doubled phrase slows the line to a solemn pace just before the poem turns back to the couple.',
    },
    {
      text: 'candlelit café',
      where: 'Stanza 5, line 44',
      analysis:
        'Candles are a necessity in a city that went months without electricity, yet the phrase carries every romantic association of a first date. Coming after the violence of stanza 4, the domestic vocabulary of candles and coffee softens the tone. Harrison lets both meanings stand, hardship and romance together, which is the poem’s whole argument in two words.',
    },
    {
      text: 'AID flour sacks refilled with sand',
      where: 'Stanza 5, line 46',
      analysis:
        'The last line compresses the whole siege. Sacks that brought flour, the city’s bread, as humanitarian aid have become sandbags against the shells, and the capitals probably mimic the lettering stamped on them. The final rhyme joins the held hand of line 45 to this sand, so the poem ends with love sheltered by the tools of war: tender, but not safe.',
    },
  ],

  extracts: [
    {
      title: 'From the day’s queues to the evening walk',
      where: 'Stanzas 1 and 2, lines 1-20 (anthology page 28)',
      pointer:
        'Lines 1-20: from the opening line, about the hours Sarajevans spend queuing, to the last line of stanza 2, where a boy is attracted to a girl in the dark.',
      summary:
        'The first stanza is one long sentence listing the hardships of a day under siege: queuing for gas and bread, avoiding snipers and hauling water upstairs. It seems to be building to the conclusion that the streets must be empty at night, then overturns it in line 11, which ends on a dash. The second stanza shows young people walking slowly through the dark, where nobody can tell which community anyone belongs to, and where they collide only when a boy wants to meet a girl.',
      annotations: [
        {
          phrase: 'dodging snipers',
          note: 'The casual verb makes mortal danger sound like a routine part of the errands, which is exactly the horror: Sarajevans have had to get used to being shot at.',
        },
        {
          phrase: 'that’s just not the case',
          note: 'The colloquial phrasing turns the whole poem. After ten lines of hardship the speaker flatly contradicts the expectation he has built, and the rhyme with line 12 carries the reader across the stanza break into the evening.',
        },
        {
          phrase: 'impossible to mark / as Muslim, Serb or Croat',
          note: 'To mark is to label, and in a war to target. The dark protects the walkers from both, and the evenly weighted list suggests that the differences the war is fought over cannot be seen.',
        },
      ],
      question:
        'How does Harrison use language and structure in lines 1-20 to present the contrast between daytime survival and evening life in Sarajevo?',
    },
    {
      title: 'The shell scars and the stars',
      where: 'Stanza 4, lines 25-42',
      pointer:
        'Lines 25-42: the whole of the long fourth stanza, from the speaker first saying that he sees a couple to the stanza’s last line, about the mortar shells.',
      summary:
        'The speaker singles out a couple who have got past the early tests of courtship; the boy seems about to take the girl’s hand. Then the poem reveals where they are standing: on the scars left by the mortar attack that killed people queuing for bread in 1992. Rain has filled the holes, the sky has cleared, and in the water the boy sees the stars broken into pieces.',
      annotations: [
        {
          phrase: 'Serb mortars massacred the breadshop queue',
          note: 'The heavy alliteration on m and the blunt verb land like the shells themselves. Naming the attackers, and reducing the victims to a queue, shows how the siege turned ordinary routine into a target.',
        },
        {
          phrase: 'blood-dunked crusts of shredded bread',
          note: 'The compound adjective is shockingly domestic, as if bread had been dipped in a drink. Bread, the poem’s sign of daily survival, becomes evidence of slaughter, and the rhyme in the next line seals it.',
        },
        {
          phrase: 'bomber’s eye',
          note: 'The clear night that shows the stars is also perfect for an attack. The phrase makes the danger a watching eye and stops the romantic sky from becoming merely pretty.',
        },
        {
          phrase: 'fragments of the splintered Pleiades',
          note: 'Fragments and splinters are words for shrapnel, so even the starlight is described as if it had exploded. The Seven Sisters, a classical image of beauty, lie broken in a shell-hole.',
        },
        {
          phrase: 'death-deep, death-dark wells',
          note: 'Wells should give water and life, echoing the water carried upstairs in stanza 1, but these were dug by death. The doubled compound slows the line and deepens the holes.',
        },
      ],
      question:
        'How does Harrison use language, form and structure in lines 25-42 to bring together the massacre of the past and the romance of the present?',
    },
    {
      title: 'Coffee behind the sandbags',
      where: 'Stanza 5, lines 43-46',
      pointer:
        'Lines 43-46: the final four-line stanza, from the boy leading the girl away to the last line of the poem.',
      summary:
        'The poem ends in two couplets. The boy leads the girl away from the shell-holes to share a single coffee in a café lit by candles, where they can stay until the curfew. In the final couplet he holds her hand, sheltered by sandbags made from the sacks that once carried aid flour.',
      annotations: [
        {
          phrase: 'candlelit café',
          note: 'In a city without power the candle is a necessity, but the phrase also carries every romantic association of a date. The poem lets both be true at once, which is its argument.',
        },
        {
          phrase: 'AID flour sacks',
          note: 'The capitals probably suggest the lettering stamped on the sacks, reminding the reader that the city is being kept alive by outside help. Flour is the last appearance of the poem’s thread of bread.',
        },
        {
          phrase: 'refilled with sand',
          note: 'Food has become fortification. The final rhyme pairs the held hand with sand, so the poem ends on tenderness and defence in the same breath: love sheltered by the tools of war.',
        },
      ],
      question:
        'How effective is the ending of The Bright Lights of Sarajevo? Refer closely to the language and structure of lines 43-46 and to the rest of the poem.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Juxtaposition',
      example:
        'The gentle courtship of stanza 3 is followed, within a few lines, by “Serb mortars massacred the breadshop queue” in stanza 4.',
      effect:
        'Setting romance and massacre side by side stops either being read alone. The reader feels the shock of the city’s double life, and the love story gains weight because it happens, literally, on top of the killing.',
    },
    {
      technique: 'Periodic sentence and a delayed turn',
      example:
        'Lines 1-11 are one sentence. Its main clause is held back until line 8 and then overturned by “that’s just not the case”.',
      effect:
        'The syntax makes the reader wait through the day’s labours as the citizens must. The long build-up gives the reversal its force, and the colloquial wording makes the defiance sound matter-of-fact rather than heroic.',
    },
    {
      technique: 'Metaphor',
      example: 'Courtship described as military technology in “tender radar” (line 21).',
      effect:
        'Radar belongs to air defence and bombing, but the adjective turns it into intuition. Even love in Sarajevo speaks the language of war, though here the technology finds a partner rather than a target.',
    },
    {
      technique: 'Compound adjectives',
      example:
        '“blood-dunked crusts of shredded bread” (line 31) and “death-deep, death-dark wells” (line 41).',
      effect:
        'Hyphenated coinages compress horror into single, heavy units. Their clustered stresses slow the line, so the reader is made to pause on what they describe without the poem dwelling on detail.',
    },
    {
      technique: 'Alliteration',
      example:
        'The repeated m of “Serb mortars massacred” and the d sounds of “death-deep, death-dark wells”.',
      effect:
        'The heavy consonants sound like impacts, so the verse enacts the shelling. It is a restrained way of making violence felt through sound rather than description.',
    },
    {
      technique: 'Semantic field of explosion',
      example:
        'The reflected stars are “fragments of the splintered Pleiades” (line 40), and the holes they lie in were blasted into the pavement by shells.',
      effect:
        'Words for shrapnel are applied to starlight, so the beauty of the night is contaminated by the violence that made the holes it shines in. Harrison will not let the image be simply lovely.',
    },
    {
      technique: 'Rhyming couplets',
      example:
        'All 46 lines rhyme in pairs, including the couplet that rhymes the year 1992 with the bread queue (lines 29-30) and the last, which rhymes the held hand with sand.',
      effect:
        'The steady couplets give the poem the easy pace of conversation and the neatness of a report. When they carry a massacre, the tidy form makes the content more shocking, and the final couplet binds tenderness to defence.',
    },
    {
      technique: 'Irony',
      example:
        'The title’s bright lights, set against unlit streets and a clear sky that suits the “bomber’s eye”.',
      effect:
        'The idiom bright lights suggests the glamour of a city at night; Sarajevo’s lights are a match, stars in puddles and candles. The irony exposes what the siege has taken, while the small lights that remain become precious.',
    },
    {
      technique: 'Listing in threes',
      example:
        'The three communities in “Muslim, Serb or Croat” (line 14), echoed by three different words for bread in line 16.',
      effect:
        'Listing the identities evenly, with nothing to tell them apart, suggests their equality. The matching words for bread show that the difference lies in what people call things, not in the people themselves.',
    },
    {
      technique: 'Conversational register',
      example:
        'The speaker’s hedge “I think” (line 27), and his direct address to the reader in line 8.',
      effect:
        'The spoken, unhurried voice suits a reporter’s poem and wins the reader’s trust. It also means the horror of stanza 4 arrives without warning, delivered in the same even tone as the flirting.',
    },
  ],

  vocabulary: [
    {
      term: 'Siege',
      definition:
        'A military operation in which an army surrounds a place and cuts off its supplies. The siege of Sarajevo lasted from April 1992 to February 1996, the longest siege of a capital city in modern warfare.',
    },
    {
      term: 'Canister',
      definition:
        'A metal container, here one for gas used in cooking and heating, which Sarajevans had to queue to refill.',
    },
    {
      term: 'Rationed',
      definition:
        'Allowed only a fixed, small amount of something scarce, such as bread, each day.',
    },
    {
      term: 'Sniper',
      definition:
        'A gunman who shoots from a hidden position. During the siege snipers fired on civilians in the streets, and warning signs appeared across the city.',
    },
    {
      term: 'Devoid',
      definition: 'Completely empty of, or lacking, something.',
    },
    {
      term: 'Stroller',
      definition:
        'Here, a person walking slowly and for pleasure. It is not the American word for a pushchair, though the poem has already shown prams being used to carry gas.',
    },
    {
      term: 'Ploy',
      definition:
        'A tactic or trick for getting something; in the poem, a deliberate collision as a way of meeting someone.',
    },
    {
      term: 'Radar',
      definition:
        'A system that uses radio waves to detect aircraft or other objects, used in war to spot and target the enemy. The poem uses it as a metaphor for sensing someone’s feelings.',
    },
    {
      term: 'Mortar',
      definition:
        'A short, wide-barrelled gun that fires explosive shells in a high, steep arc, used to bombard Sarajevo throughout the siege. The holes in the poem were made by the shells such guns fire.',
    },
    {
      term: 'Massacre',
      definition: 'The deliberate killing of many people who cannot defend themselves.',
    },
    {
      term: 'Pleiades',
      definition:
        'A bright cluster of stars in the constellation Taurus, also called the Seven Sisters after the daughters of Atlas and Pleione in Greek mythology. In British English usually pronounced PLY-uh-deez; American English often says PLEE-uh-deez. Either way its last syllable rhymes with sees, the last word of line 39.',
    },
    {
      term: 'Curfew',
      definition: 'A rule that people must be off the streets by a set time at night.',
    },
    {
      term: 'Aid',
      definition:
        'Humanitarian aid: food and supplies sent from abroad. More than 13,000 aid flights reached Sarajevo during the siege. The poem prints the word in capitals, as if copied from the sacks.',
    },
    {
      term: 'Hljeb, hleb and kruh',
      definition:
        'Words for bread. Dictionaries list hljeb as Bosnian and Ijekavian Serbian, hleb as Ekavian Serbian and kruh as Croatian. The anthology spells the first hjleb: quote it as your copy prints it.',
    },
    {
      term: 'Bosniak',
      definition:
        'The name now usually used for Bosnian Muslims, who with Serbs and Croats were the three main communities of Bosnia during the war. The poem, written in 1995, says Muslim.',
    },
    {
      term: 'Couplet',
      definition:
        'A pair of rhyming lines. The whole poem is written in rhyming couplets: 46 lines, 23 pairs.',
    },
    {
      term: 'Juxtaposition',
      definition:
        'Placing two contrasting things side by side so that each changes how the other is read.',
    },
    {
      term: 'Periodic sentence',
      definition:
        'A sentence that holds back its main point until late. The first stanza of the poem is a single sentence of this kind, eleven lines long.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does Harrison present the effects of war on ordinary people in The Bright Lights of Sarajevo? In your answer, write about the writer’s use of language, form and structure, and refer closely to the poem, using brief quotations.',
        skill: 'Language, form and structure analysis across the whole poem',
        guidance: [
          'Open with a clear argument: the poem shows war less as battle than as the wearing texture of daily life, and it shows ordinary people answering it with ordinary life.',
          'Stanza 1: analyse the list of chores and the long, delayed sentence. Link “dodging snipers” to how danger has become routine.',
          'Stanzas 2 and 3: explore how the dark removes ethnic labels, and how the courtship is described with tender humour, including the metaphor of “tender radar”.',
          'Stanza 4: analyse the two massacre couplets (lines 29-32), their alliteration and the compound adjective “blood-dunked”, and the way the speaker’s attention moves from the couple to the ground beneath them.',
          'Stanza 5: show how the ending holds love and defence together in the sandbags made from aid sacks.',
          'Throughout, comment on form: the steady couplets and the conversational voice, and what they do to the shocking content.',
        ],
      },
      {
        question:
          'Explore how Harrison uses contrast to present hope in The Bright Lights of Sarajevo.',
        skill: 'Language and structure analysis: contrast',
        guidance: [
          'Define the hope carefully: not victory or peace, but the survival of normal life and of love.',
          'Contrast day and night: the labour of the first stanza against the walking of the second, turned by “that’s just not the case”.',
          'Contrast light and dark: the unlit streets against the match, the stars and the candles, and the irony of the title.',
          'Contrast beauty and atrocity: the stars reflected in the shell-holes. Argue whether this image is hopeful or disturbing, and settle on a view.',
          'Finish with the final couplet and judge how far the hope is qualified by the sandbags around it.',
        ],
      },
      {
        question:
          'How does Harrison present the relationship between the boy and the girl in The Bright Lights of Sarajevo?',
        skill: 'Language analysis: presentation of a relationship',
        guidance: [
          'Trace the stages of the courtship in order: the deliberate collision, the voice, the match flare, the hand, the café.',
          'Analyse how the vocabulary of war is borrowed for love, as in “tender radar”, and how the girl’s approval steers each stage.',
          'Show how the setting interrupts the romance: they stand on shell scars, and the boy sees the stars in the mortar holes.',
          'Consider what the relationship stands for, the city’s refusal to give up ordinary life, and weigh the view that the couple are symbols against the view that they are simply two young people.',
        ],
      },
      {
        question:
          'Look again at lines 25-42. How does Harrison use language and structure to present the past and the present in this part of the poem?',
        skill: 'Close language and structure analysis of a section',
        guidance: [
          'Identify the movement: from the couple in the present, down to the massacre of 1992, then back to the present sky reflected in the holes.',
          'Analyse the two massacre couplets (lines 29-32): the alliteration, the blunt verb, and the domestic horror of “blood-dunked crusts of shredded bread”.',
          'Analyse the stars in the water, the shrapnel words used for them, and the irony of a clear sky for the “bomber’s eye”.',
          'Comment on structure: two long sentences built up with and, the second holding back its main verb until line 39, when the boy looks down.',
        ],
      },
    ],
    tips: [
      'Quote the poem as the anthology prints it, including its spelling of the words for bread. This guide’s references follow the Issue 8 layout, with five verse paragraphs: lines 1-11, 12-20, 21-24, 25-42 and 43-46.',
      'Do not call the poem simply hopeful or simply bleak. The strongest answers show that Harrison holds both at once, and then decide which the ending leans towards.',
      'Write about the speaker as an observer. His hedged, conversational voice is a choice, and saying what it does lifts an answer above a list of techniques.',
      'Use context briefly and only where it explains a line: the siege, the three communities, the 1992 attack on a bread queue. Do not retell the history of the war.',
      'Track a motif across the poem to write precisely about structure. Bread appears in lines 5, 16, 30 and 31, with flour in line 46; light, or its absence, in lines 14-15, 18, 23, 26, 37-40 and 44.',
      'Treat the violence factually and briefly. Credit comes from analysing how Harrison makes the massacre shocking, not from describing the massacre itself.',
      'Comment on the form. Twenty-three tidy rhyming couplets carrying a massacre is a striking choice, and its effect is worth a paragraph of its own.',
    ],
  },

  modelAnswer: {
    question:
      'How does Harrison present the effects of war on ordinary people in The Bright Lights of Sarajevo?',
    paragraph:
      'Harrison presents the effects of war most powerfully by refusing to separate them from ordinary life. In the fourth stanza the speaker’s attention moves from the couple, about to hold hands, down to the ground they stand on, where “Serb mortars massacred the breadshop queue”. The alliterative m sounds fall like impacts, and the blunt verb is set beside the most ordinary of scenes, a queue at a bread shop, so the reader sees how the siege turned routine itself into a target. The next line is more disturbing still: “blood-dunked crusts of shredded bread”. The compound adjective sounds almost domestic, as though bread had been dipped in a drink, and that is its horror, because bread has been the poem’s symbol of daily survival since the ration of line 5. Structurally, Harrison delivers this memory inside one long sentence that begins with a romance and ends with the dead, in the same easy rhyming couplets he used for flirting. One reading is that this evenness is a failure of feeling, but it is more convincing to see it as a reporter’s restraint: the tidy form lets the facts speak, and the war’s effect is shown as something the city’s young must now, literally, stand on.',
    commentary: [
      'It opens with an argument that answers the question directly, rather than a summary of the poem.',
      'Both quotations are brief, embedded in the sentence and followed by analysis of particular words and sounds, not just their general meaning.',
      'It links language to structure, tracing the bread motif back to stanza 1 and commenting on the long sentence and the couplet form.',
      'It weighs an alternative reading and explains why the chosen one is more convincing, which shows independent judgement.',
      'Context is present in the precise point about how the siege made routine dangerous, without a detour into the history of the war.',
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-11',
      title: 'A day of queues and snipers',
      summary:
        'The poem lists the labours of a Sarajevan day: queuing for gas refills and bread rations, avoiding snipers and carrying water up long flights of stairs. The speaker supposes that no one would go out at night, then turns in line 11 to say that tonight they do.',
      setting: 'Besieged Sarajevo by day: queues, stairwells and shelled streets',
      who: ['The speaker'],
      quote: 'dodging snipers',
      themes: ['Survival under siege'],
      tension: 3,
      significance:
        'The long, dragging first sentence makes the reader feel the weight of the day before the evening can begin.',
    },
    {
      where: 'Stanza 2, lines 12-20',
      title: 'The evening walk',
      summary:
        'Young people walk slowly through the unlit streets. In the dark nobody can tell which of the city’s communities anyone belongs to, or which word for bread they use. They do not collide, except on purpose, when a boy is attracted to a girl.',
      setting: 'Unlit streets after dark',
      who: ['The young of Sarajevo', 'The boy', 'The girl'],
      quote: 'impossible to mark / as Muslim, Serb or Croat',
      themes: ['Identity and division', 'Light and darkness'],
      tension: 2,
      significance:
        'The darkness that endangers the city also erases the ethnic labels the war is being fought over.',
    },
    {
      where: 'Stanza 3, lines 21-24',
      title: 'The tests of courtship',
      summary:
        'The poem describes how courtship proceeds in the dark, in careful stages. The girl’s tone of voice signals her approval, then the small flame struck to light a cigarette lets the boy read in her eyes whether he has made progress.',
      setting: 'A dark street, lit for a moment by a match',
      who: ['The boy', 'The girl'],
      quote: 'tender radar',
      themes: ['Love as defiance', 'Light and darkness'],
      tension: 1,
      significance:
        'The gentlest stanza borrows the language of war for love, and its tiny light is the first in the poem to mean hope.',
    },
    {
      where: 'Stanza 4, lines 25-32',
      title: 'Standing on the shell scars',
      summary:
        'The speaker picks out a couple who have got past these tests; the boy is about to take the girl’s hand. They are standing on the marks left by two shells in 1992, when a mortar attack killed people queuing at a bread shop, and the speaker describes the bloodied bread lying with the dead on the pavement.',
      setting: 'The pavement where a bread queue was shelled, marked by two shell scars',
      who: ['The speaker', 'The boy', 'The girl'],
      quote: 'Serb mortars massacred the breadshop queue',
      themes: ['Witness and memory', 'Beauty beside atrocity'],
      tension: 5,
      significance:
        'The romance is set literally on top of an atrocity, and the tension of the poem peaks in four lines of violence, lines 29-32.',
    },
    {
      where: 'Stanza 4, lines 33-42',
      title: 'Stars in the shell-holes',
      summary:
        'The mortar holes at the couple’s feet are full of rainwater. The clouds have cleared, leaving a starry sky that is also ideal for bombing, and in the water the boy sees the stars of the Pleiades broken up in reflection.',
      setting: 'Rain-filled mortar holes under a clear night sky',
      who: ['The boy'],
      quote: 'fragments of the splintered Pleiades',
      themes: ['Beauty beside atrocity', 'Light and darkness'],
      tension: 4,
      significance:
        'The central image joins beauty and violence so closely that neither can be seen without the other.',
    },
    {
      where: 'Stanza 5, lines 43-46',
      title: 'Coffee before the curfew',
      summary:
        'The boy leads the girl away to a café lit by candles, where the two of them share a single cup of coffee before the curfew. The poem ends with him holding her hand behind sacks that once held aid flour and are now filled with sand for protection.',
      setting: 'A candlelit café sheltered by improvised sandbags',
      who: ['The boy', 'The girl'],
      quote: 'AID flour sacks refilled with sand',
      themes: ['Love as defiance', 'Survival under siege'],
      tension: 3,
      significance:
        'The ending finds tenderness inside the defences of war: love survives, but only behind the sandbags.',
    },
  ],

  relationships: [
    {
      from: 'The boy',
      to: 'The girl',
      kind: 'a new couple',
      note: 'Their courtship moves in stages, from a deliberate collision in the dark to the reading of her voice and eyes, to a held hand in a candlelit café. It is the poem’s evidence that ordinary life survives the siege.',
    },
    {
      from: 'The speaker',
      to: 'The boy',
      kind: 'observer and observed',
      note: 'The speaker watches from outside and guesses at what the boy will do next. His distance lets him set the romance against the history of the ground beneath their feet, which he, not the lovers, puts into words.',
    },
    {
      from: 'The young of Sarajevo',
      to: 'The boy',
      kind: 'crowd and individual',
      note: 'The poem narrows from the anonymous crowd of walkers to one couple, so the boy comes to stand for all the young people who refuse to stay indoors.',
    },
  ],

  compareWith: [
    {
      title: 'Disabled (Wilfred Owen)',
      href: '/igcse/edexcel/poetry/disabled',
      reason:
        'Both poems set evening romance against the damage of war, but where Harrison’s young couple still find each other among the shell scars, Owen’s wounded soldier watches from a wheelchair as women look past him.',
    },
    {
      title: 'Out, Out- (Robert Frost)',
      href: '/igcse/edexcel/poetry/out-out',
      reason:
        'Both show ordinary life carrying on beside sudden death: Frost’s onlookers return to their own concerns after the boy dies, while Harrison’s young people go walking where a bread queue was killed.',
    },
    {
      title: 'An Unknown Girl (Moniza Alvi)',
      href: '/igcse/edexcel/poetry/an-unknown-girl',
      reason:
        'Both centre on a brief moment of closeness in an evening street, but Alvi’s bright, neon-lit bazaar is the opposite of Harrison’s unlit, besieged city.',
    },
    {
      title: 'Still I Rise (Maya Angelou)',
      href: '/igcse/edexcel/poetry/still-i-rise',
      reason:
        'Both are about refusing to be defeated, but Angelou’s speaker proclaims her defiance in her own voice, while Harrison shows defiance quietly, through what an observer sees people do.',
    },
  ],

  contentGuidance: ['violence', 'mortality', 'intimate_relationships', 'discrimination'],

  native: {
    overview: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo',
    context: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo',
    structureForm: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo',
  },

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, p. 28: the poem as prescribed. Every quotation, line number and the five-paragraph layout were checked against this page; the Issue 8 change list (p. 3 of the PDF file, unnumbered) records two wording changes to this poem, at lines 32 and 43; the acknowledgements (printed pp. 71-72, the Harrison entry on p. 72) say it is reproduced by kind permission of Tony Harrison',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Bloodaxe Books, Tony Harrison author page: (1937-2025); born in Leeds; read Classics at Leeds University; in 1995 commissioned by The Guardian to visit Bosnia and write poems about the war',
      url: 'https://www.bloodaxebooks.com/ecs/category/tony-harrison',
    },
    {
      label:
        'Wikipedia, Tony Harrison: born 30 April 1937 in Beeston, Leeds; died in Newcastle on 26 September 2025, citing The Times obituary of 27 September 2025; The Bright Lights of Sarajevo listed under 1995',
      url: 'https://en.wikipedia.org/wiki/Tony_Harrison',
    },
    {
      label:
        "Wikipedia, The Labourers of Herakles, citing Kathleen Riley, The Reception and Performance of Euripides' Herakles (OUP, 2008), pp. 340-341: Harrison commissioned by The Guardian to write poems on the war in Bosnia, leaving after the play's Delphi premiere on 23 August 1995",
      url: 'https://en.wikipedia.org/wiki/The_Labourers_of_Herakles',
    },
    {
      label:
        'Wikipedia, Siege of Sarajevo: 5 April 1992 to 29 February 1996; the longest siege of a capital city in modern warfare; months without gas, electricity or water; snipers; more than 13,000 aid flights',
      url: 'https://en.wikipedia.org/wiki/Siege_of_Sarajevo',
    },
    {
      label:
        'Wikipedia, Sarajevo bread line massacre: 27 May 1992, Vaso Miskin street (now Ferhadija), people queuing for bread; suspected to be the Army of Republika Srpska, which denied it. Casualty figures differ between articles (26 dead here, 22 in the Vedran Smailovic article), so the guide gives no number',
      url: 'https://en.wikipedia.org/wiki/Sarajevo_bread_line_massacre',
    },
    {
      label: 'Wikipedia, Bosnian War: the three sides, Bosniaks, Bosnian Serbs and Bosnian Croats',
      url: 'https://en.wikipedia.org/wiki/Bosnian_War',
    },
    {
      label: 'Wiktionary, hljeb: Bosnian and Ijekavian Serbian; hleb is the Ekavian form',
      url: 'https://en.wiktionary.org/wiki/hljeb',
    },
    {
      label: 'Wiktionary, kruh: the Croatian word for bread',
      url: 'https://en.wiktionary.org/wiki/kruh',
    },
    {
      label:
        'Wikipedia, Pleiades: star cluster in Taurus, the Seven Sisters, daughters of Atlas and Pleione',
      url: 'https://en.wikipedia.org/wiki/Pleiades',
    },
    {
      label: 'Wiktionary, bright lights: the glamour of a place, especially a big city',
      url: 'https://en.wiktionary.org/wiki/bright_lights',
    },
    {
      label: 'Wiktionary, stroller (one who strolls) and ploy (a tactic or scheme)',
      url: 'https://en.wiktionary.org/wiki/stroller',
    },
  ],
}
