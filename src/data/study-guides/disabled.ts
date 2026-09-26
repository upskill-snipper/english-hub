import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Disabled, Wilfred Owen. A supplement: the page at /igcse/edexcel/poetry/disabled
 * keeps its overview, context, key quotations, language analysis and form and
 * structure, and this file adds themes, the poem's people, passages for close
 * reading, vocabulary, exam practice and a model answer, mounted below it.
 *
 * TWO TEXTS OF THE POEM. The anthology (Issue 8, February 2026, page 25) prints
 * the later text: 46 lines, numbered in fives, in seven stanzas (6, 7, 7, 8, 8,
 * 3, 7), with lines 30 to 31 on the guilt of Germany and Austria. The edition held in
 * src/data/full-texts/disabled.ts is the 1920 Poems (Gutenberg #1034): 45 lines
 * in five stanzas, without those words, and with "pleasure" for "pleasures"
 * (line 5), "bloodsmear" for "blood-smear" (line 21) and "To-night" for
 * "Tonight" (line 43). Line and stanza references here follow the anthology,
 * because that is the copy a student has in the exam. Every quotation from the
 * poem was chosen from words the two texts share, checked against both, except
 * the anthology's own wording of lines 30 to 31, which the 1920 text lacks; it is
 * listed in quotesFromElsewhere and was read from the Pearson PDF. The other
 * entry there is Owen's Preface, not the poem. Extract C keeps the 1920 hyphen
 * in line 43 ("To-night"; the anthology prints "Tonight") because the test
 * checks passages against the held edition, and its pointer tells the student.
 *
 * Fact-check, 25 September 2026: the June 2023 4EA1/02 paper printed its Part 2
 * poem with no line numbers, so the tips no longer tell a student to use the
 * line numbers of the exam copy.
 *
 * Second fact-check, 26 September 2026: every quotation, extract and line
 * reference re-read against the anthology PDF (page 25, parsed line by line,
 * italics and stanza gaps measured) and against the held edition; the June 2023
 * paper, the Issue 7 specification and the dates of Owen's life re-read at
 * source. No misquotation was found. Four readings that had been stated as
 * facts are now hedged: the soldier's real age, a "charge" the poem never
 * mentions, "arterial" blood, and what the italic Thanked is for.
 */
export const guide: StudyGuide = {
  slug: 'disabled',
  title: 'Disabled',
  author: 'Wilfred Owen',
  form: 'poem',
  scope:
    'The whole poem, as printed on page 25 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 2, for English Language A. Line and stanza references follow that printing: 46 lines, numbered in fives in the margin, in seven stanzas.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Wilfred Owen (1893-1918); out of copyright. Line references follow the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), page 25. Quotations are also checked against Poems (1920), with an introduction by Siegfried Sassoon, Project Gutenberg eBook #1034.',
  },
  workLength: {
    words: 397,
    lines: 46,
    basis:
      "Counted from the anthology printing on page 25 (Issue 8, February 2026), read from the Pearson PDF on 25 September 2026: 46 lines, words counted with the validator's rule (hyphenated words split), the esprit de corps footnote excluded.",
  },

  native: {
    overview: '/igcse/edexcel/poetry/disabled',
    context: '/igcse/edexcel/poetry/disabled',
    keyQuotes: '/igcse/edexcel/poetry/disabled',
    languageAnalysis: '/igcse/edexcel/poetry/disabled',
    structureForm: '/igcse/edexcel/poetry/disabled',
  },

  themes: [
    {
      title: 'Youth and its waste',
      body: "The poem's cruellest arithmetic is about age. The poem implies that the soldier was not yet nineteen when he enlisted, since the age the recruiters wrote down, nineteen, was “his lie” (line 29), yet it now calls him old. His face was “younger than his youth, last year” (line 15), and now “he is old; his back will never brace” (line 16). Owen compresses a lifetime into the short space between last year and now, so that “half his lifetime lapsed in the hot race” (line 19), as if the few moments in which he was wounded used up decades at once. The boys whose voices open the poem (lines 4 to 6) are what he was very recently, and sleep gathers them in as a mother would, leaving him alone. One reading is that the poem mourns a boy rather than a man, and that its title, an official-sounding adjective, hides a teenager. That reading is the more convincing, because every one of his motives is adolescent: a drink, a compliment, a girl. The alternative is harsher: that Owen also holds him responsible, since it is he who “threw away his knees” (line 10). The strongest answers keep both in view.",
    },
    {
      title: 'The lie of glory',
      body: "Lines 21 to 36 go back to the time he joined, and the reasons are deliberately small. He decided after a football match and a drink (line 23); someone said he would “look a god in kilts” (line 25); he wanted “to please his Meg” (line 26), then, correcting himself, “the giddy jilts” (line 27). What he imagined of army life (lines 32 to 35) is costume, ritual and perks: “jewelled hilts / For daggers in plaid socks”, “smart salutes”, “pay arrears”, and “hints for young recruits”, a phrase that sounds lifted from a recruiting leaflet. The enemy is almost absent. In the anthology's text, “Germans he scarcely thought of; all their guilt, / And Austria's, did not move him” (lines 30 to 31): the official case for the war never reached him. Nor did fear, since “no fears / Of Fear came yet” (lines 31 to 32), where the capital letter turns Fear into something waiting for him. Owen's target seems to be less one foolish boy than a culture that sold war as a uniform and a send-off “with drums and cheers” (line 36). The grammar divides the blame carefully: “He asked to join”, but “Smiling they wrote his lie” (lines 28 to 29).",
    },
    {
      title: 'The body, masculinity and desire',
      body: "The poem measures loss through touch and looking. Before the war “girls glanced lovelier as the air grew dim” (line 9); now he will “never feel again how slim / Girls' waists are” (lines 11 to 12), and “All of them touch him like some queer disease” (line 13). The verb has reversed: he no longer touches, he is touched, warily, as if he were infectious. His body was once admired in public: an artist was “silly for his face” (line 14), and after matches he was “carried shoulder-high” (line 22). The climax is a single glance: “the women's eyes / Passed from him to the strong men that were whole” (lines 43 to 44). The last word implies, without saying it, that he is now less than a whole man. It is easy to read the women as shallow, but a more convincing reading is that the poem turns the soldier's own values back on him. He joined partly to be admired, and the war has made him someone people look past. The gaze that helped to send him now dismisses him, and Owen leaves the reader to judge a society that valued young men chiefly for their bodies.",
    },
    {
      title: 'Isolation and a society that looks away',
      body: "The poem opens with the soldier alone, “waiting for dark” (line 1), within earshot of other people but apart from them: “Through the park / Voices of boys rang saddening like a hymn” (lines 3 to 4). His homecoming is a public event that barely happens: “Some cheered him home, but not as crowds cheer Goal” (line 37), and only “a solemn man who brought him fruits / Thanked him” (lines 38 to 39). The anthology prints Thanked in italics, which suggests that this was the only thanks he received; then the man “inquired about his soul”, as though the damaged body were no longer the point. His future is one of institutions and rations: “a few sick years in Institutes” (line 40), doing “what things the rules consider wise” (line 41), and taking “whatever pity they may dole” (line 42). The preface printed in Owen's posthumous Poems (1920) says “The Poetry is in the pity”, yet this poem is scathing about pity handed out in portions. One way to resolve that is to see two kinds of pity: the institution's, which manages him, and the reader's, which the poem asks to be something closer to recognition. The final unanswered question, “Why don't they come?” (lines 45 to 46), leaves that demand with us.",
    },
    {
      title: 'Sport and war',
      body: "Football runs through the poem as the soldier's measure of glory. In line 21 he remembers liking the smear of blood on his leg after a match, when blood was a badge of effort rather than a wound, and being “carried shoulder-high” (line 22). He joined up “after football, when he'd drunk a peg” (line 23), as though enlisting were one more part of a day's sport. When the poem describes his wound it seems to borrow the language of athletics: “the hot race” (line 19) and a “leap of purple” (line 20), which turns the blood spurting from his thigh into a kind of sporting movement. The homecoming completes the pattern, since a goal is cheered louder than he is (line 37). One reading is satirical: Owen exposes the idea that war was a larger, nobler game, and shows its vocabulary collapsing against real injury. Another is elegiac: the sporting images also record what the soldier genuinely loved, a life of physical ease that he can never have again. The two readings work best together, since the satire is aimed at the idea and the grief at the boy.",
    },
    {
      title: 'Time and memory',
      body: "The whole poem takes place in one evening, from “waiting for dark” (line 1) to “How cold and late it is!” (line 45), but memory carries it across years. Its time words mark each jump: “About this time” (line 7) and “In the old times” (line 10) open the past; “last year” (line 15) and “One time he liked” (line 21) return him to it; and a series of lines beginning with Now (lines 11, 16 and 40) drags him back to the present. The story of his enlistment is broken by a sudden present tense, “He wonders why” (line 24), and the answer he gives himself, “That's why” (line 26), is in the present too. The question has outlived the decision, and he is still asking it. Memory here is not comfort. Each happy recollection is followed at once by what it has become, so remembering is a way of losing things again. A reader might see the drift into memory as escape; the more convincing reading is that it is torment, because the poem never lets a memory finish without its Now.",
    },
  ],

  characters: [
    {
      name: 'The soldier',
      role: "The poem's subject: a young volunteer, never named, now a multiple amputee",
      body: 'We meet him already wounded, in a “wheeled chair” and a “ghastly suit of grey” (lines 1 to 2), and line 3 gives his injuries in one flat word and a short phrase: he is legless, and “sewn short at elbow”, so he has lost at least part of an arm. The poem does not say whether he has lost one arm or both, and a careful answer does not guess. What it does record is the wound itself, a “leap of purple” from his thigh (line 20), and the speed of his fall: admired “last year” (line 15), old now. His reasons for joining were vanity, a drink, a compliment and a girl, and he did not have to beg to be accepted (line 28). He is never named; the only person the poem names is Meg. One reading is that his namelessness makes him stand for thousands of such men; another is that it shows how the institutions now see him, as a case rather than a person. His own voice surfaces only in scraps, most painfully at the end, where he cannot move himself and can only ask why no one comes.',
    },
    {
      name: 'The narrator',
      role: "A third-person voice that stays close to the soldier's thoughts",
      body: "The poem is told in the third person, “He sat” rather than I sat, but the narrating voice keeps slipping into the soldier's own words. “That's why” and “Aye, that was it” (lines 26 to 27) are his idiom, not a commentator's, and “How cold and late it is!” (line 45) is his complaint, heard from inside his head. This technique, often called free indirect style, lets Owen do two things at once: the reader shares the soldier's feelings and also sees them from outside, including the foolishness of his reasons. Even the final plea keeps him as an object, asking why they do not come and “put him into bed”, as if he cannot say me even to himself. It would be a mistake to treat the narrator as Owen describing his own experience. Owen enlisted in October 1915, aged 22, and was commissioned as an officer in the Manchester Regiment in 1916. He was treated for shell shock at Craiglockhart War Hospital in Edinburgh, drafted this poem in October 1917 and revised it at Scarborough in July 1918. The voice belongs to an observer who chooses to stand very close to one of the men he writes about.",
    },
    {
      name: 'Meg',
      role: 'The girl he joined up to impress',
      body: "Meg is named once, in line 26, and is the only person in the poem with a name. The possessive in “his Meg” suggests a sweetheart, or at least a girl he thought of as his. At once the soldier's own voice corrects the motive and widens it: “Aye, that was it, to please the giddy jilts” (line 27). A jilt is a woman who readily casts aside a lover, so the word anticipates the rejection he meets at the end of the poem. Meg does not appear again. She is absent from the homecoming, where only a solemn man thanks him, and the poem never says what became of her. That silence invites a reading: the girl he enlisted to please is not there to see what enlisting cost him, and the women of the final stanza, whose eyes pass over him, take her place as a group.",
    },
    {
      name: 'The recruiting officers',
      role: 'The unnamed “they” who accepted his lie',
      body: "They are never described, only shown, and one line does most of the work: “Smiling they wrote his lie; aged nineteen years” (line 29). Placing Smiling first makes their pleasure the first thing we see, before the lie itself, and the semicolon lets the false age stand alone like an entry on a form. The line before, “He didn't have to beg” (line 28), shows how eager they were to take him. Pearson's own specification uses this line as one of its examples of a textual reference, reading it as showing that the recruiters knew he was under age. The poem does not make them melodramatic villains, which is part of its force: they are cheerful, ordinary and complicit. An estimated 250,000 under-age boys volunteered for the British Army in the First World War, lying about their age or giving false names, so the moment is typical rather than exceptional. The same pronoun returns later, for those who dole out pity (line 42) and for the people who do not come (lines 45 to 46).",
    },
    {
      name: 'The girls and women',
      role: 'Admiring before the war; looking elsewhere after it',
      body: "Before the war they are girls, the glancing figures of the lamplit town in stanza 2, and the soldier remembers their slim waists and their “subtle hands” (line 12). After it, they touch him “like some queer disease” (line 13), and on this very evening “the women's eyes” pass from him to other men (lines 43 to 44). The change of noun, from girls to women, may simply mark the passing of time, but it also matches the poem's claim that he has become old. Owen never gives these women a voice, and it is fair to ask whether the poem is unjust to them. A more careful reading is that they are seen entirely through the soldier's shame: what we are shown is not what the women feel, but what he believes they see.",
    },
    {
      name: 'The solemn man',
      role: 'The only person who thanks him',
      body: "He appears in lines 38 to 39: a solemn man brings fruit, thanks the soldier, and then asks about his soul. The poem does not say who he is. His gravity and his interest in the soul suggest a clergyman or a charitable visitor, but that is a reading, not a fact. In the anthology, Thanked is printed in italics, which seems to stress that this was the only thanks the soldier received. The order of the line matters too: the thanks come first, “and then” the soul, as if gratitude were a formality to be got through before the man's real business. Some readers find him kindly; the more convincing reading is that his concern arrives in the wrong place, attending to the soul of a young man whose body the war has already taken.",
    },
    {
      name: 'The artist',
      role: "A memory of the soldier's looks",
      body: 'Line 14 recalls an artist who was “silly for his face”, which in context means foolishly taken with it, because it looked even younger than he was (line 15). The artist exists only to prove what the soldier once had: a face worth looking at. The memory opens stanza 3, and within four lines the face an artist admired has lost its colour, poured “down shell-holes” far from home.',
    },
    {
      name: 'The boys in the park',
      role: 'What he was until recently',
      body: "The poem's first sounds are the voices of boys playing in the park (lines 3 to 6), which to him ring “saddening like a hymn”. They are what he was only recently, and sleep takes them in as a mother would: “Till gathering sleep had mothered them from him” (line 6). The last two words matter. The boys are not simply taken home; they are taken away from him, and the soldier is left alone with no one to mother him, until the poem ends with him waiting for someone to put him to bed.",
    },
    {
      name: 'The carers',
      role: 'The unnamed “they” he waits for at the end',
      body: "The final lines ask, twice, “Why don't they come” to put him into bed (lines 45 to 46). The poem never names them: they are presumably the staff of the institution in which he is to spend his “few sick years”, but all we are given is a pronoun and an absence. It is the same pronoun used for the recruiters who wrote his lie and for those who dole out pity, and the repetition suggests that his life is now arranged by a series of people who act on him. The question receives no answer, and the poem ends before they arrive.",
    },
  ],

  extracts: [
    {
      title: 'The town before the war',
      where: 'Stanza 2, lines 7-13',
      pointer:
        'From “About this time Town used to swing so gay” (line 7) to “like some queer disease” (line 13): the whole of stanza 2, anthology page 25.',
      text: "About this time Town used to swing so gay / When glow-lamps budded in the light blue trees, / And girls glanced lovelier as the air grew dim — / In the old times, before he threw away his knees. / Now he will never feel again how slim / Girls' waists are, or how warm their subtle hands; / All of them touch him like some queer disease.",
      annotations: [
        {
          phrase: 'Town used to swing so gay',
          note: 'Town is capitalised like a name, and the verb swing gives it rhythm and music. Gay has its older meaning of bright and merry, so the town of his memory seems to have a lively personality of its own.',
        },
        {
          phrase: 'glow-lamps budded',
          note: 'Glow-lamps are electric light bulbs, here lamps lit at dusk, and budded turns them into spring blossom opening among the trees. The remembered town is a place of growth and promise, the opposite of his grey suit and waiting.',
        },
        {
          phrase: 'before he threw away his knees',
          note: 'The verb makes him responsible, as if the loss were a careless act, and the casual idiom sounds bitter. Knees, the joints that let a person run and kneel, stand for everything his legs once allowed.',
        },
        {
          phrase: 'how warm their subtle hands',
          note: "The adjectives slim, warm and subtle rebuild the feel of a girl's body in memory, so the reader senses exactly what he has lost. Subtle suggests delicate, knowing hands, and the line comes straight after the turn on Now.",
        },
        {
          phrase: 'like some queer disease',
          note: 'Queer here means strange. The simile reverses the direction of touch: he used to touch girls, and now they touch him warily, as if he carried an infection nobody can name. The vague some adds to the sense of an unnamed horror.',
        },
      ],
      question:
        "Explore how Owen presents the soldier's memories of his life before the war in lines 7 to 13. You should write about the images of the town and the girls, the contrast with his present, and the use of language and structure.",
    },
    {
      title: 'The decision to join',
      where: 'Stanzas 4 and 5, lines 23-29',
      pointer:
        'From “It was after football” (line 23) to “aged nineteen years” (line 29). The anthology has a stanza break after line 28, so the passage runs from the end of stanza 4 into the first line of stanza 5.',
      text: "It was after football, when he'd drunk a peg, / He thought he'd better join. — He wonders why. / Someone had said he'd look a god in kilts, / That's why; and maybe, too, to please his Meg; / Aye, that was it, to please the giddy jilts / He asked to join. He didn't have to beg; / Smiling they wrote his lie; aged nineteen years.",
      annotations: [
        {
          phrase: "when he'd drunk a peg",
          note: 'A peg is a small measure of spirits such as whisky or brandy. The decision to join is made after a drink, on impulse, which makes its consequences all the harder to bear.',
        },
        {
          phrase: 'He wonders why',
          note: 'The memory of enlisting suddenly shifts into the present tense: he is still asking the question now. In the anthology a dash cuts the line in two, separating the thought of then from the regret of now.',
        },
        {
          phrase: 'look a god in kilts',
          note: 'Kilts were worn by the Highland regiments. The hyperbole of god shows how much he wanted to be admired, and it is cruel beside the legless figure of line 3.',
        },
        {
          phrase: 'Aye, that was it',
          note: "The soldier's own voice breaks into the narration, correcting himself as though under questioning. Aye may hint that he is Scottish or from the north of England, which would fit the kilt, though the poem does not say.",
        },
        {
          phrase: 'Smiling they wrote his lie',
          note: "Smiling comes first, so the recruiters' pleasure is what we see before the lie itself. They wrote the false age down anyway; Pearson's specification reads this line as showing they knew he was under age.",
        },
      ],
      question:
        "How does Owen present the soldier's reasons for joining the army in lines 23 to 29? You should write about what he thought and felt, how other people influenced him, and the use of language and structure.",
    },
    {
      title: 'Homecoming and the final evening',
      where: 'Stanzas 6 and 7, lines 37-46',
      pointer:
        "From “Some cheered him home” (line 37) to the final question (line 46). The wording is the anthology's, which also breaks the stanza after line 39.",
      text: "Some cheered him home, but not as crowds cheer Goal. / Only a solemn man who brought him fruits / Thanked him; and then inquired about his soul. / Now, he will spend a few sick years in Institutes, / And do what things the rules consider wise, / And take whatever pity they may dole. / Tonight he noticed how the women's eyes / Passed from him to the strong men that were whole. / How cold and late it is! Why don't they come / And put him into bed? Why don't they come?",
      annotations: [
        {
          phrase: 'not as crowds cheer Goal',
          note: "The capital letter makes Goal a grand event, and the comparison is damning: the roar for a goal is louder than the welcome for a wounded soldier. Football, the poem's measure of glory, returns to judge the homecoming.",
        },
        {
          phrase: 'Thanked him; and then inquired about his soul',
          note: 'The anthology prints Thanked in italics: this is the only thanks he gets. The man then turns straight to the soul, as though the ruined body were no longer his concern.',
        },
        {
          phrase: 'take whatever pity they may dole',
          note: 'To dole is to hand out in small portions, like charity. Pity is rationed by others, and the word whatever shows that he cannot even choose what kind of kindness he receives.',
        },
        {
          phrase: 'Passed from him to the strong men that were whole',
          note: 'Passed is a quiet, almost polite verb, which makes the rejection colder. Whole implies, without stating it, that he is now only part of a man, and it answers the flat word Legless in line 3.',
        },
        {
          phrase: "Why don't they come?",
          note: 'The repeated question ends the poem without an answer. Even in his own plea he is him, not me: the grammar keeps him an object, waiting for other people to act on him.',
        },
      ],
      question:
        "Explore how Owen presents the soldier's life after the war in lines 37 to 46. You should write about his return, his future, how other people treat him, and the use of language and structure.",
    },
  ],

  vocabulary: [
    {
      term: 'ghastly (line 2)',
      definition:
        'Deathly pale, like a ghost; also horrifying. Both senses work: the grey suit makes him look like a corpse, and the sight of him is shocking.',
    },
    {
      term: 'gay (line 7)',
      definition:
        'In its older sense, happy, lively and bright. The town in his memory is merry and full of colour.',
    },
    {
      term: 'glow-lamps (line 8)',
      definition:
        'An old word for electric light bulbs. Here they are lamps lit at dusk among the trees, and they bud like flowers.',
    },
    {
      term: 'queer (line 13)',
      definition:
        'Here in its older sense of strange or odd. The girls touch him as they would something unfamiliar and unpleasant.',
    },
    {
      term: 'silly for (line 14)',
      definition:
        "In context, foolishly taken with. The artist was struck by the soldier's young face; the poem does not say more about him.",
    },
    {
      term: 'brace (line 16)',
      definition:
        "To hold firm and straight. His back will never again stand braced and upright, as a fit young man's, or a soldier's, would.",
    },
    {
      term: 'shell-holes (line 18)',
      definition:
        'Craters blown in the ground by exploding artillery shells. His blood was spilt into them, far from home.',
    },
    {
      term: 'peg (line 23)',
      definition:
        'A small measure of strong spirits, such as whisky or brandy, in dated British usage. He decided to enlist after a drink, not after thought.',
    },
    {
      term: 'kilts (line 25)',
      definition:
        'The pleated tartan garment of Highland dress, worn by the kilted Scottish regiments. Someone told him he would look like a god in one.',
    },
    {
      term: 'giddy jilts (line 27)',
      definition:
        'A jilt is a woman who readily casts aside a lover; giddy means frivolous and easily excited. The phrase is dismissive, and it anticipates his rejection at the end.',
    },
    {
      term: 'hilts (line 32)',
      definition:
        'The handles of swords or daggers. He imagined jewelled ones: war as costume and ornament.',
    },
    {
      term: 'daggers in plaid socks (line 33)',
      definition:
        'This describes the sgian dubh, a small knife worn tucked into the stocking as part of Highland dress, with only the top of its hilt showing. Plaid is tartan cloth.',
    },
    {
      term: 'pay arrears (line 34)',
      definition:
        'Pay that is owed and has built up; arrears are debts not yet paid. Among his dreams of glory he thought about money that would be owed to him.',
    },
    {
      term: 'esprit de corps (line 35)',
      definition:
        'French for a shared pride in the group one belongs to, such as a regiment. The anthology explains the phrase in a footnote.',
    },
    {
      term: 'drafted out (line 36)',
      definition:
        'Sent out as part of a draft, a body of soldiers drawn from a larger force and sent on, here to the war. He was a volunteer, not a conscript: the poem says he asked to join.',
    },
    {
      term: 'Institutes (line 40)',
      definition:
        'Institutions: here, the hospitals or homes where he will be looked after. The capital letter makes them sound official and impersonal.',
    },
    {
      term: 'dole (line 42)',
      definition:
        'To hand out in small amounts, especially as charity. The pity he receives is rationed by others.',
    },
    {
      term: 'free indirect style',
      definition:
        "Third-person narration that takes on a character's own words and thoughts without quotation marks. The narrator says he, but lines such as “Aye, that was it” are the soldier's own voice.",
    },
    {
      term: 'caesura',
      definition:
        'A strong pause within a line of poetry. Line 3 stops dead after elbow, and in the anthology line 24 is split by a dash between the decision and the regret.',
    },
    {
      term: 'full rhyme',
      definition:
        'Words whose sounds match exactly from the stressed vowel onwards, like dark and park or kilts and jilts. The poem mostly uses full rhymes but places them irregularly, so a sound returns unpredictably across stanzas: hymn, him, dim and slim, or Goal, soul, dole and whole.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          "How does the writer present the soldier's feelings about his life before and after the war in ‘Disabled’? In your answer, you should write about: the soldier's memories of his life before he joined the army; how his life, and other people's treatment of him, have changed; the use of language and structure. You should support your answer with close reference to the poem, including brief quotations.",
        skill:
          'Paper 2 Section A essay: understanding the poem, and analysis of language and structure',
        guidance: [
          'Start with a clear overview in one or two sentences: the poem sets a remembered life of admiration, touch and sport against a present of helplessness, and makes each memory hurt by what follows it.',
          'Work through the memories in order: the lamplit town and the girls (lines 7 to 10), the artist and his youthful face (lines 14 to 15), football and being “carried shoulder-high” (lines 21 to 22). For each, choose one or two words and say what they suggest, such as budded.',
          'Show the turn each time: find the Now that follows a memory (lines 11, 16 and 40) and analyse what has replaced it, such as the simile of the “queer disease” in line 13.',
          "Cover the second bullet on other people: the recruiters' smiles (line 29), the thin welcome (line 37), the solemn man (lines 38 to 39), the rules and rationed pity (lines 41 to 42), and the women's eyes (lines 43 to 44).",
          'Give structure real attention rather than one sentence at the end: the movement between past and present, the seven stanzas of uneven length, the sudden present tense of line 24, and the ending that returns to the opening image of waiting.',
          "Comment on the narrative voice: the third-person he that slips into the soldier's own words (lines 26 to 27 and 45 to 46), and what that closeness does to the reader's sympathy.",
          'Finish with a judgement about the whole poem, for example that his feelings move from bitter regret about the past to a present in which he can only ask a question.',
        ],
      },
      {
        question:
          'How does the writer present the ways other people treat the soldier in ‘Disabled’? In your answer, you should write about: how people treated him before he joined the army and when he enlisted; how people treat him now; the use of language and structure. You should support your answer with close reference to the poem, including brief quotations.',
        skill:
          'Paper 2 Section A essay: understanding the poem, and analysis of language and structure',
        guidance: [
          "Open with an argument: the poem shows a society that admired the soldier's body, enlisted him eagerly, and now manages him from a distance.",
          "Before the war: the artist (line 14), the girls (lines 9 to 12), those who carried him shoulder-high after matches (line 22), and the someone who said he would “look a god in kilts” (line 25). Note how much of his sense of himself came from other people's admiration.",
          "Enlistment: analyse lines 28 and 29 together, the eagerness in “He didn't have to beg” and the complicity in “Smiling they wrote his lie”. Explain why placing Smiling first matters.",
          'The send-off and the return: set “drums and cheers” (line 36) against the comparison with a crowd cheering a goal (line 37), then analyse the italic Thanked and the turn to his soul (lines 38 to 39).',
          "The present: the rules, the Institutes and the “pity they may dole” (lines 40 to 42), then the women's eyes (lines 43 to 44). Show how the grammar puts him in a passive position, with things done to him.",
          'Trace the pronoun they through the poem, from the recruiters to the givers of pity to those who do not come, and say what the repetition suggests about the forces arranging his life.',
          'Conclude by weighing blame: does Owen blame individuals, or a whole culture? Use the division between “He asked to join” and “they wrote his lie” as your evidence.',
        ],
      },
      {
        question:
          "Discuss how the writers use language and structure to present a life changed by a single decision or event in ‘Disabled’, ‘Out, Out–’ and The Story of an Hour. In your response you should: discuss the writers' ideas and perspectives about how one moment can change a life; discuss how the writers use language and structure to achieve their effects; include textual references to illustrate the points you make.",
        skill:
          'Coursework option, Assignment A: three Part 2 texts, at least one poem and one prose text',
        guidance: [
          'Check your choice meets the rules: three texts from Part 2 of the anthology, with at least one poem and one prose text. This set pairs two poems about injury with a prose story about sudden news.',
          'Define the focus precisely in your introduction, for example the gap between how a life was expected to go and what one moment made of it.',
          "For ‘Disabled’, centre the decision: lines 23 to 29, the drink, the compliment, the recruiters' smiles, and the present-tense “He wonders why” that shows the decision still haunting him.",
          "Compare methods, not just stories: Owen's movement between past and present against the structures of your other texts, and his third-person voice that slips into the soldier's thoughts against the narrative voices you find there.",
          'Compare endings: ‘Disabled’ ends on an unanswered question. Decide how each of your other texts ends and what each ending leaves the reader with.',
          'Keep comparison inside paragraphs and give each text a fair share. Three texts need planning, so allocate your evidence before you write.',
          'Support every point with brief, exact references, and give line numbers for the poems.',
        ],
      },
      {
        question:
          "How does the writer create sympathy for the soldier in ‘Disabled’? In your answer, you should write about: the soldier's situation at the start and end of the poem; the contrast between his past and his present; the use of language and structure. You should support your answer with close reference to the poem, including brief quotations.",
        skill:
          'Paper 2 Section A essay: understanding the poem, and analysis of language and structure',
        guidance: [
          "Open by naming Owen's main methods: plain physical detail, painful contrast between past and present, and a voice close enough for us to hear the soldier's own words.",
          'Analyse the opening closely: “waiting for dark”, the shivering, the “ghastly suit of grey” and the flat statement of line 3. Explain why understatement moves the reader more than open lament would.',
          "Show how contrast creates sympathy with two pairs, such as the girls' “subtle hands” against the “queer disease” (lines 12 to 13), or “drums and cheers” against the thin welcome (lines 36 to 37).",
          'Consider whether the poem asks us to judge him as well as pity him: he “threw away his knees”, and his reasons were vain. Argue that the sympathy is stronger for being clear-eyed.',
          "End with the final stanza: the women's eyes, the cold and the repeated question. Explain how the circular structure, from waiting for dark to waiting for bed, leaves him trapped.",
        ],
      },
    ],
    tips: [
      "Know which text you are answering on. The anthology prints 46 lines, numbered in fives, in seven stanzas, including the line and a half about the guilt of Germany and Austria (lines 30 to 31). Some websites, and the 1920 edition, print a shorter version with different stanza breaks and small changes of wording, such as a singular noun in line 5. Learn the anthology's wording, and quote from the copy printed with your exam question, which may not carry line numbers: the June 2023 paper printed its poem without them, so quote the words rather than relying on a line reference.",
      'This is an English Language question. Credit comes from understanding the poem and from analysing how Owen uses language and structure; historical context helps only when it sharpens a point about the words on the page.',
      "Write about the narrative voice. It is easy to miss that the poem is in the third person yet keeps borrowing the soldier's own words, as in “Aye, that was it” and “How cold and late it is!”. Explaining that effect lifts an answer.",
      'Be precise about what the poem says. He is “Legless, sewn short at elbow”: he has lost at least part of an arm, but the poem does not say he lost both arms. He lied about his age, but the poem never gives his real age, so do not write that he was 16 or 17 as if it were stated.',
      'Treat structure as meaning: the poem moves between memory and the present, each memory is cut off by a Now, and the sudden present tense of line 24, “He wonders why”, shows the past still hurting.',
      'Follow a word or an image through the poem rather than analysing lines in isolation. The pronoun they, the sporting language, and looking and touching all make strong threads.',
      "Handle the women with care. Calling them shallow is a weak reading; a stronger one is that the poem shows them through the soldier's shame and turns his own values back on him.",
      'Be careful with technical terms. The rhymes are mostly full rhymes (dark and park, kilts and jilts), placed irregularly so that sounds return across stanzas; calling them pararhymes is a mistake.',
      "Pearson's own specification uses line 29 as one of its examples of a textual reference, reading it as showing that the recruiters knew he was under age. It is a safe, strong quotation to know exactly.",
    ],
  },

  modelAnswer: {
    question:
      "How does the writer present the soldier's feelings about his life before and after the war in ‘Disabled’?",
    paragraph:
      "Owen makes the soldier's losses physical and specific, and then lets the structure close on each memory like a trap. In the second stanza the remembered town is soft and sensuous: “glow-lamps budded in the light blue trees”, and the verb budded turns electric lamps into spring blossom, a world still opening. The stanza then turns on a single word, Now, and its sensuous adjectives change their job: he will “never feel again how slim / Girls' waists are”, so the tenderness of slim and warm becomes the measure of what has been taken. The simile that ends the stanza, “All of them touch him like some queer disease”, reverses the grammar of desire, because where he once did the touching he is now the object of other people's reluctant contact, handled as if he were infectious. Owen saves the harshest version of this for the final stanza, where “the women's eyes / Passed from him to the strong men that were whole”. The verb Passed is quiet, even polite, which is exactly what makes it cruel, and whole implies, without ever saying it, that he is now only part of a man. Because he joined partly “to please the giddy jilts”, the reader sees that the admiration he risked his body for is the very thing the war has taken from him, and that irony deepens the sympathy rather than weakening it.",
    commentary: [
      "It opens with an argument about method rather than a summary: the soldier's feelings are shown through physical detail and through a structure that cuts off each memory.",
      'Its quotations are short, exact and embedded, and it analyses single words (budded, Passed, whole) for what they suggest, which is the close language analysis the question rewards.',
      'It treats structure as meaning, noticing the turn on Now at line 11 and linking stanza 2 to the final stanza, so the answer follows how the poem is built.',
      "It covers both the past and the present, and other people's treatment of him, without retelling the poem line by line.",
      "Its last sentence connects the ending to his reasons for joining, a whole-poem judgement that shows the poem's irony has been understood.",
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-6',
      title: 'Waiting for dark',
      summary:
        "At dusk the soldier sits in a wheelchair, shivering in a grey suit. He has lost his legs and at least part of an arm. Boys' voices carry through the park and sound mournful to him, until sleep gathers them away from him.",
      setting: 'At dusk, within earshot of a park',
      who: ['The soldier', 'The boys in the park'],
      quote: 'He sat in a wheeled chair, waiting for dark',
      themes: ['Isolation and a society that looks away', 'Youth and its waste'],
      tension: 2,
      significance:
        'The poem begins after the catastrophe, so the question is never what will happen to him, only what it has cost.',
    },
    {
      where: 'Stanza 2, lines 7-13',
      title: 'The town before the war',
      summary:
        "He remembers the town at this hour in the old days, its lamps lit among the trees and the girls looking lovelier as the light faded. Now he will never feel a girl's waist again, and girls touch him as if he were diseased.",
      setting: 'Remembered: a lamplit town on an evening before the war',
      who: ['The soldier', 'The girls and women'],
      quote: 'before he threw away his knees',
      themes: ['Time and memory', 'The body, masculinity and desire'],
      tension: 3,
      significance:
        'The first memory sets the pattern for the poem: every happy recollection is followed at once by what it has become.',
    },
    {
      where: 'Stanza 3, lines 14-20',
      title: 'Younger than his youth',
      summary:
        'Only last year an artist was taken with his face, which looked younger than he was. Now he is old: his colour has been poured out far away, and the stanza ends with the memory of his wound, blood leaping from his thigh.',
      setting: "Remembered: the artist's admiration, then a battlefield far from home",
      who: ['The soldier', 'The artist'],
      quote: 'Poured it down shell-holes till the veins ran dry',
      themes: ['Youth and its waste', 'Sport and war'],
      tension: 4,
      significance:
        'The only moment of combat in the poem, told as a memory, makes the loss of youth literal: his colour drains away.',
    },
    {
      where: 'Stanza 4, lines 21-28',
      title: 'After football',
      summary:
        'He remembers liking a smear of blood on his leg after a match, and being carried shoulder-high. One day after football, and after a drink, he decided to join, partly because someone told him he would look magnificent in a kilt, and partly to please Meg and the other girls.',
      setting: 'Remembered: after a football match, over a drink',
      who: ['The soldier', 'Meg'],
      quote: "It was after football, when he'd drunk a peg",
      themes: ['The lie of glory', 'Sport and war'],
      tension: 2,
      significance:
        'The decision that cost him his body is made casually, and the poem makes the reader feel just how casually.',
    },
    {
      where: 'Stanza 5, lines 29-36',
      title: 'Smiling they wrote his lie',
      summary:
        'The recruiters accept him with a false age. He barely thinks about the enemy and feels no fear yet; he imagines jewelled daggers, salutes, leave and back pay, and he is sent out to the war to the sound of drums and cheering.',
      setting: 'Remembered: enlistment, then the send-off',
      who: ['The soldier', 'The recruiting officers'],
      quote: 'Smiling they wrote his lie; aged nineteen years',
      themes: ['The lie of glory', 'Youth and its waste'],
      tension: 3,
      significance:
        'The adults who should have protected him are complicit, and the glamour he imagined is set against everything the reader already knows.',
    },
    {
      where: 'Stanza 6, lines 37-39',
      title: 'Cheered home',
      summary:
        'His return is greeted with some cheering, but less than a goal would get. Only a solemn man, who brings him fruit, thanks him, and then asks about his soul.',
      setting: 'Remembered: his return home, wounded',
      who: ['The soldier', 'The solemn man'],
      quote: 'Some cheered him home, but not as crowds cheer Goal',
      themes: ['Isolation and a society that looks away', 'Sport and war'],
      tension: 3,
      significance:
        'The homecoming is the shortest stanza in the poem, and its brevity is the point: the welcome is thin.',
    },
    {
      where: 'Stanza 7, lines 40-46',
      title: "Why don't they come?",
      summary:
        "His future is a few sick years in institutions, obeying rules and accepting rationed pity. This evening he noticed women's eyes moving past him to able-bodied men, and now, cold and late, he waits for someone to put him to bed.",
      setting: 'The present evening, now dark and cold',
      who: ['The soldier', 'The girls and women', 'The carers'],
      quote: 'Passed from him to the strong men that were whole',
      themes: ['Isolation and a society that looks away', 'The body, masculinity and desire'],
      tension: 5,
      significance:
        'The poem ends where it began, waiting, but now the dark has come and no one else has, so the opening image becomes a sentence without an end.',
    },
  ],

  relationships: [
    {
      from: 'The soldier',
      to: 'Meg',
      kind: 'a girl he wanted to please',
      note: "One of his reasons for enlisting (line 26). She is named once and never seen again, and her absence from his homecoming can be read as part of the poem's judgement.",
    },
    {
      from: 'The recruiting officers',
      to: 'The soldier',
      kind: 'recruiters and volunteer',
      note: 'He asked to join, and they accepted him, smiling, with a false age (lines 28 to 29). The poem divides the blame between his eagerness and their complicity.',
    },
    {
      from: 'The girls and women',
      to: 'The soldier',
      kind: 'once admiring, now looking past him',
      note: 'The glances of stanza 2 become the passing eyes of stanza 7 (lines 43 to 44): the approval he wanted is the thing the war has taken from him.',
    },
    {
      from: 'The solemn man',
      to: 'The soldier',
      kind: 'the only one who thanks him',
      note: 'He brings fruit and thanks the soldier (lines 38 to 39), then turns at once to the state of his soul.',
    },
    {
      from: 'The carers',
      to: 'The soldier',
      kind: 'those he now depends on',
      note: 'He can no longer put himself to bed, and the poem ends with him waiting for them to come (lines 45 to 46).',
    },
    {
      from: 'The narrator',
      to: 'The soldier',
      kind: 'a voice that shadows his thoughts',
      note: 'The narrator speaks of him in the third person but keeps adopting his words, so the reader is both inside his feelings and outside them.',
    },
    {
      from: 'The boys in the park',
      to: 'The soldier',
      kind: 'his recent self',
      note: 'Their play is what he had only recently; sleep gathers them in and away from him (line 6).',
    },
    {
      from: 'The artist',
      to: 'The soldier',
      kind: 'an admirer of his looks',
      note: 'Evidence of the young face he had last year (lines 14 to 15), placed just before the memory of the wound that ended it.',
    },
  ],

  compareWith: [
    {
      title: '‘Out, Out–’ by Robert Frost',
      href: '/igcse/edexcel/poetry/out-out',
      reason:
        "Also in Part 2: a boy whose life is destroyed by a single injury, and people around him who carry on afterwards, which pairs closely with Owen's picture of a society that looks away.",
    },
    {
      title: 'The Bright Lights of Sarajevo by Tony Harrison',
      href: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo',
      reason:
        "Another Part 2 poem about young people and war, in which courtship survives in a city under siege, a sharp contrast with the desire Owen's soldier has lost.",
    },
    {
      title: 'The Story of an Hour by Kate Chopin',
      href: '/revision/texts/the-story-of-an-hour',
      reason:
        "A Part 2 prose text for the coursework rule of at least one poem and one prose text: a third-person narrator close to one character's thoughts, and a life overturned by news she cannot control.",
    },
    {
      title: 'Significant Cigarettes by Rose Tremain',
      href: '/revision/texts/significant-cigarettes',
      reason:
        "A Part 2 prose extract whose central character keeps being pulled from the present into memories of what he has lost, as the soldier is through one evening in Owen's poem.",
    },
  ],

  contentGuidance: [
    'violence',
    'mortality',
    'discrimination',
    'intimate_relationships',
    'political_ideology',
    'mythological_religious',
  ],

  quotesFromElsewhere: [
    // The anthology's lines 30 to 31, read from the Pearson PDF (page 25). The
    // 1920 edition held in src/data/full-texts does not contain these words, so
    // the held-edition check cannot confirm them; the Pearson source below does.
    "Germans he scarcely thought of; all their guilt, / And Austria's, did not move him",
    // Owen's Preface, as printed in Poems (1920), Project Gutenberg #1034. The
    // sentence before it differs between editions ("The subject of it is War" in
    // the 1920 text, "My subject is War" in later ones), so only this is quoted.
    'The Poetry is in the pity',
  ],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, page 25 (PDF page 31): the prescribed printing. Read on 25 September 2026 for all 46 lines and their numbering, the seven stanza breaks (measured from the line spacing), the wording of lines 30 to 31, the italic Thanked in line 39, the em dashes in lines 9 and 24, and the esprit de corps footnote. Every quotation from the poem in this guide was checked against it',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Poems by Wilfred Owen (1920), with an introduction by Siegfried Sassoon, Project Gutenberg eBook #1034: the edition held as a byte copy in src/data/full-texts/disabled.ts, against which every quotation and passage was also checked; and the Preface (“The Poetry is in the pity”)',
      url: 'https://www.gutenberg.org/ebooks/1034',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Language A specification, Issue 7, August 2025: Component 2 Section A is one essay question on a Part 2 text, provided in the examination, with 45 minutes advised; Component 3 Assignment A discusses three Part 2 texts including at least one poem and one prose text, with a suggested task format; the mark-scheme guidance cites line 29 of Disabled as a textual reference showing the recruiters knew he was under age',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Specification%20and%20sample%20assessments/9781446954379-int-gcse-englang-a-iss6-02-02-2023.pdf',
    },
    {
      label:
        'Pearson 4EA1/02 question paper, June 2023: the form of a Section A question (a “How does the writer” question on ‘Out, Out–’ with three bullets, the last on language and structure), used as the model for the exam practice here; the poem is printed in the paper without line numbers',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Language-A/2016/Exam-materials/4ea1-02-que-20230613.pdf',
    },
    {
      label:
        'The Wilfred Owen Association, Disabled (critique by Kenneth Simcox, 2001): drafted in October 1917 and revised at Scarborough in July 1918; Robert Graves saw a draft in October 1917',
      url: 'https://www.wilfredowen.org.uk/poetry/disabled',
    },
    {
      label:
        'Wikipedia, Wilfred Owen: born 18 March 1893; enlisted in the Artists Rifles on 21 October 1915; commissioned in the Manchester Regiment on 4 June 1916; treated for shell shock at Craiglockhart War Hospital, Edinburgh, where he met Sassoon; killed on 4 November 1918; Poems (1920) with an introduction by Sassoon',
      url: 'https://en.wikipedia.org/wiki/Wilfred_Owen',
    },
    {
      label:
        'Wikipedia, Recruitment to the British Army during the First World War: around 250,000 under-age boys volunteered, lying about their age or giving false names; conscription from 27 January 1916',
      url: 'https://en.wikipedia.org/wiki/Recruitment_to_the_British_Army_during_the_First_World_War',
    },
    {
      label: 'Wiktionary, peg: a small quantity of strong spirits (British, dated)',
      url: 'https://en.wiktionary.org/wiki/peg',
    },
    {
      label: 'Wiktionary, jilt: a woman who readily casts aside her lover',
      url: 'https://en.wiktionary.org/wiki/jilt',
    },
    {
      label: 'Wiktionary, giddy: frivolous, easily excited',
      url: 'https://en.wiktionary.org/wiki/giddy',
    },
    {
      label: 'Wiktionary, dole: to distribute in small amounts, as alms',
      url: 'https://en.wiktionary.org/wiki/dole',
    },
    {
      label: 'Wiktionary, queer: (dated) strange, odd',
      url: 'https://en.wiktionary.org/wiki/queer',
    },
    {
      label: 'Wiktionary, gay: (dated) happy, joyful and lively; bright',
      url: 'https://en.wiktionary.org/wiki/gay',
    },
    {
      label: 'Wiktionary, glow-lamp: (archaic) a light bulb',
      url: 'https://en.wiktionary.org/wiki/glow-lamp',
    },
    {
      label: 'Wiktionary, ghastly: death-like, pale; horrifyingly shocking',
      url: 'https://en.wiktionary.org/wiki/ghastly',
    },
    { label: 'Wiktionary, brace: to hold firmly', url: 'https://en.wiktionary.org/wiki/brace' },
    {
      label: 'Wiktionary, draft: (British, archaic) a body drawn out from a larger population',
      url: 'https://en.wiktionary.org/wiki/draft',
    },
    {
      label: 'Wiktionary, arrears: outstanding debt',
      url: 'https://en.wiktionary.org/wiki/arrears',
    },
    {
      label:
        'Wiktionary, sgian dubh: a small knife tucked into the hose in Highland dress, only the top of the hilt visible',
      url: 'https://en.wiktionary.org/wiki/sgian_dubh',
    },
  ],
}
