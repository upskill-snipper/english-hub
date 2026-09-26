import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Out, Out-, Robert Frost (1916). A supplement to the existing page at
 * /igcse/edexcel/poetry/out-out, which keeps its overview, context and form
 * sections; this file adds everything that page lacked.
 *
 * THE PRESCRIBED WORDING. Every quotation was checked against the poem as
 * Pearson prints it: page 26 of the International GCSE English Anthology,
 * Issue 8 (February 2026), downloaded from Pearson on 25 September 2026, and
 * again in the June 2023 4EA1 Paper 2, which reprints the same text word for
 * word. Both take it from Lathem's edition, The Poetry of Robert Frost. The
 * Project Gutenberg Mountain Interval (#29345) and the 1923 Selected Poems
 * (#59824) agree on every quoted word, but differ from the anthology in two
 * places a student might copy: both hyphenate buzz-saw, and neither has a
 * comma after the hand in line 20. Follow the anthology.
 *
 * FACT-CHECK, 25 September 2026. #29345 is NOT the 1916 first edition, as an
 * earlier draft of this file said: its title page reads "Copyright, 1916, 1921"
 * and it was transcribed from a May 1931 printing. The first edition itself was
 * not seen, so nothing here claims what it prints. The rights line had also
 * been written as "© Robert Frost 1916", which is not the credit Pearson prints;
 * it now follows the anthology's acknowledgements page (page 72).
 *
 * SECOND FACT-CHECK, 26 September 2026, against a fresh download of the anthology
 * and the June 2023 paper. Every quotation and line reference held, bar one:
 * the key quotation from line 22 was said to end a sentence begun in line 21,
 * but that sentence begins in line 19. Extract two's pointer also claimed the
 * sentence in which the boy understands, which belongs to extract three. A few
 * readings stated as fact ("many readers find", the doctor's "calm") were
 * softened or cut, because the poem does not say them.
 *
 * THE QUOTATION BUDGET. The anthology text is 301 words by the validator's
 * count, so this page may quote 45 words of it in total (fair-dealing.ts). The
 * validator measures only this file, but the supplement renders on the same URL
 * as the existing page, and that page quotes "as if to prove saws knew what
 * supper meant", four words more than this file's version of line 15. At 45
 * words of its own this file took the URL to 49, over the share. So on 26
 * September 2026 three key quotations were cut back, to "Sweet-scented",
 * "spilling" and "Were not the one dead, turned to their affairs": this file
 * now quotes 41, and the URL as a whole 45, measured with the validator's own
 * rules. Every phrase quoted elsewhere on the page is one of the twelve key
 * quotations or part of one, except the single word since (line 33). Anything
 * else is paraphrased, with a line number. Adding a quotation here, or to the
 * existing page, means removing one.
 *
 * WHAT THE EXISTING PAGE GETS WRONG, and this file does not repeat: the boy
 * pleads with his SISTER, not with the doctor; the poem never says the doctor
 * amputates; the poem gives no reason why "no one believed"; and the poem does not
 * put the yard in Vermont: the view stretches into it. The page also labels the poem
 * 4ET1 Literature, but it is in Part 2 of the anthology, which is 4EA1 only.
 */
export const guide: StudyGuide = {
  slug: 'out-out',
  title: 'Out, Out-',
  author: 'Robert Frost',
  form: 'poem',
  scope:
    'The whole poem, 34 lines, as printed in the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 2, page 26, for English Language A (4EA1): Paper 2 Section A and the Assignment A coursework. Line numbers in this guide follow the anthology, which numbers every fifth line.',
  rights: {
    status: 'copyright',
    acknowledgement:
      'Out, Out- by Robert Frost, from The Poetry of Robert Frost, edited by Edward Connery Lathem, copyright © 1916, 1969 by Henry Holt and Company, copyright © 1944 by Robert Frost, as printed in the Pearson Edexcel International GCSE English Anthology. Quoted in short phrases for criticism and review.',
  },
  workLength: {
    words: 301,
    lines: 34,
    basis:
      "Counted from the poem as printed on page 26 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), title excluded: 34 lines, and 301 words by the validator's wordCount, which counts the parts of a hyphenated or dash-joined word separately, as it does in the quotations it measures. Counting only spaces gives 295.",
  },

  native: {
    overview: '/igcse/edexcel/poetry/out-out',
    context: '/igcse/edexcel/poetry/out-out',
    structureForm: '/igcse/edexcel/poetry/out-out',
  },

  themes: [
    {
      title: 'The fragility of life',
      body: "The poem's subject is how little it takes to end a life. One moment at the saw, at the end of an ordinary working day, leads within a few lines to a death, and Frost gives the last fading of the boy's heartbeat only three words, “Little—less—nothing!”, each smaller than the last. The title sharpens the point. It borrows from Macbeth's speech in Act 5 Scene 5, spoken when he is told of his wife's death, in which he compares life to a candle that burns briefly and to a story that means nothing. One reading is that Frost shares that despair: the boy is put out as casually as a flame, and nothing in the poem offers comfort, faith or meaning. Another reading notices the difference between the two. Macbeth is a murderer who has earned his despair; the boy has done nothing but his work. The allusion therefore makes the death feel random rather than deserved, which is harder to bear. The strongest answers tie the title to the speed of the poem instead of simply naming its source.",
    },
    {
      title: 'Childhood cut short',
      body: "Frost keeps returning to the boy's age. The speaker's wish in lines 10 to 12 is for a little time off, which any boy would treasure, and lines 23 and 24 present him as mature enough to grasp his situation and doing an adult's job, yet still a “child at heart”. That gap, between the labour expected of him and the child he still is, is where much of the poem's sympathy lies. His first response to the injury is a “rueful laugh”, perhaps the embarrassed reaction of someone who half thinks he has done something foolish, and his only words are a plea to his sister. One reading is that the poem condemns the adults who gave a child a man's job. Another is that Frost is recording, without blame, the realities of a rural household in which a boy's work was needed. Arguably the poem leans towards the first more than it admits: the only sentence in which the speaker says what should have happened is a wish that the boy had been let off work.",
    },
    {
      title: 'Indifference and survival',
      body: "The last two lines are the most discussed in the poem. Once the heartbeat has gone, the people around the boy, who “Were not the one dead”, simply “turned to their affairs”. There is no funeral, no grief and no prayer, only a return to business. The word “since” is the hinge: it makes the survivors' reason for moving on the plain fact that they are still alive. One reading is that this is a cold judgement on the onlookers, and that the flat verse copies their indifference. Another is that Frost describes a hard necessity rather than cruelty: in a household that lives by its work the living must go on working, and the poem does not show grief because the family cannot stop for it. The setting can be read as indifferent too. The mountains are described before the accident and never again, as though nothing in the yard could touch them, and the saw's noise runs on in the opening whether it is idling or cutting. Take a side in the exam and explain why, rather than listing both readings.",
    },
    {
      title: 'Work and the machine',
      body: "The saw is the most vivid presence in the poem. It appears before the boy does, in the first line, and it has an animal's voice, “snarled and rattled”, a phrase repeated twice more in line 7 so that its noise runs on under the calm description. By line 15 it behaves as though “saws knew what supper meant”, as if it too wanted its meal. One reading is that the saw stands for the danger machinery had brought into ordinary working lives, a danger that is always present and never dramatic until it strikes. Another, which fits Frost's refusal to settle blame, is that the saw is simply a machine, and the personification shows the people around it, and the speaker, trying to make sense of an accident by giving it a will. Work is also what continues. The boy is hurt doing it, the speaker wishes it had stopped, and at the end the survivors go back to it.",
    },
    {
      title: 'Blame and chance',
      body: "Frost refuses to say whose fault the accident is, and that refusal is one of the poem's most important choices. In line 16 the saw springs at him, or only “seemed to leap”; in line 17 the speaker suggests the boy himself offered the saw his hand; in line 18 the speaker concludes that “Neither refused the meeting”, as though boy and saw had kept an appointment. Each correction moves the blame without settling it. Behind them is a third possibility, the adults who let the work run on, which the speaker has already raised in line 10 with the wish that someone had called a halt for the day. One reading is that the uncertainty is realistic: nobody watching a fast accident can say exactly what happened. A stronger reading is that it is moral. By spreading responsibility between machine, boy and adults, Frost makes it impossible to dismiss the death as someone else's mistake.",
    },
  ],

  characters: [
    {
      name: 'The boy',
      role: 'The victim: a boy working at the saw',
      body: "The boy is never named, which makes him representative as well as particular. Frost shows him through what he does rather than what he thinks: he works at the saw, meets the injury with a “rueful laugh”, turns to the others with the injured hand raised, and then understands what has happened. Lines 23 and 24 present him as mature enough to understand and doing an adult's job, yet a “child at heart”, and that double identity is the key to him. At line 25 he sees that everything is ruined; one reading is that he grasps at once what a working life without a hand would mean. His only words, in lines 25 and 26, beg his sister not to let the doctor take the hand, a child's fear and a worker's understanding at the same moment. The poem draws on a real death. Raymond Tracy Fitzgerald, a teenager from Bethlehem, New Hampshire, died on 24 March 1910 after his hand was badly injured by a sawing machine, and a local paper, the Littleton Courier, reported that the shock brought on heart failure. Accounts of Frost's life say he knew the family, but the poem names no one.",
    },
    {
      name: 'The sister',
      role: "The boy's sister, who announces supper to the workers",
      body: "The sister appears at line 13, wearing an apron, and says a single word, “Supper”. It is the most homely moment in the poem, and Frost times the accident to it: as she speaks, the saw strikes. One reading is that this is cruel irony, the call to food and rest arriving at the instant of disaster. It may also be the moment the boy's attention turns, which is one way to read the speaker's suggestion in line 17 that the boy gave the saw his hand. The boy's plea in lines 25 and 26 is addressed to her, not to the adults, which suggests closeness, and perhaps that she is the one he trusts to protect him. She has no power to do so, and after line 26 she disappears from the poem.",
    },
    {
      name: 'The doctor',
      role: 'The doctor who is sent for and puts the boy under ether',
      body: "The doctor is feared before he arrives. In line 26 he is still on his way, and the boy's dread is that he will cut off the hand. When he does act, in line 28, Frost describes it as putting the boy into the “dark of ether”, a medical phrase that also sounds like the darkness of death. The poem never says that the doctor amputates. Line 27 says the hand is already gone, whether because the saw destroyed it or because it could not be saved. Students often write that the doctor cuts the hand off; the poem does not say so, and an examiner will notice. The doctor is not blamed, but he cannot help, and his brief, practical role, told in one plain sentence, belongs with the level tone of the whole poem.",
    },
    {
      name: 'The onlookers',
      role: 'The unnamed people around the boy, whom the poem calls only they',
      body: 'The poem never says who these people are: family, neighbours or hired men. They are the ones the speaker wishes had stopped work in line 10, the people the boy swings towards in line 20, and those who listen for his heartbeat in line 31; whoever is feeling his pulse in line 30, perhaps the doctor, is frightened by what it shows. In the final line they go back to their business, since they “Were not the one dead”. Keeping them unnamed and undescribed stops the reader blaming any one person, and makes their return to work feel like the behaviour of people in general rather than of a few hard characters. Whether that return is callous or simply necessary is the central question the poem leaves open.',
    },
    {
      name: 'The speaker',
      role: 'The narrating voice, an observer who says I only once',
      body: "The speaker tells the story in the past tense, from outside, in a mostly plain and level voice. Only once, at line 10, does the speaker step forward in the first person, to wish that someone had called an end to the working day and given the boy some time off. That single intrusion changes how the rest reads: it tells us the story is told with hindsight, by someone who knows the ending and wishes it had been different. The speaker is also the source of the poem's uncertainty, correcting the account of the accident twice in lines 16 to 18. One reading is that the level tone is restraint, grief held in check; another is that the speaker, like the onlookers, has moved on. Arguably the wish in line 10 makes the first reading more convincing.",
    },
    {
      name: 'The buzz saw',
      role: 'The machine, written as if it were alive',
      body: "Frost treats the saw almost as a character. It is the subject of the first sentence, it has an animal's voice, and in line 15 it behaves as though “saws knew what supper meant”, as if it had an appetite and understood words. At the moment of the accident it leaps, or seems to, and in line 18 “Neither refused the meeting”, a phrase that gives the machine the same kind of will as the boy. One reading is that the personification makes the saw a predator waiting for its moment; another is that it shows the human need to find an intention behind an accident. After line 18 the machine vanishes from the poem, which is itself telling: it has done what it does, and the poem turns to the human cost. Its name survives only as a verb, when in lines 22 and 25 the boy sees, in the sense of understands, what has happened; one reading is that the echo is deliberate, the word for the machine becoming the word for his realisation.",
    },
  ],

  keyQuotes: [
    {
      text: 'snarled and rattled',
      where: 'Line 1, and twice more in line 7',
      analysis:
        "The saw has an animal's voice from the first line. Snarled is the sound of a dog about to bite, so the verb is onomatopoeia and a warning at once, and its harsh consonants make the yard noisy and threatening. Said twice more in line 7, the phrase becomes a rhythm running under the calm scenery, as if the danger is always there, waiting.",
    },
    {
      text: 'Sweet-scented',
      where: 'Line 3',
      analysis:
        "The soft sibilance of the compound adjective, and the homely, casual noun it describes, make the sawdust and cut wood pleasant rather than dangerous. Frost lets the reader enjoy the smell of new wood in the breeze, which is exactly why the accident will shock: the poem's beauty and its violence come from the same machine.",
    },
    {
      text: 'nothing happened',
      where: 'Line 9',
      analysis:
        'A flat statement that works as dramatic irony. For a reader who hears the echo of Macbeth in the title, a life is already expected to be put out, so the reassurance tempts fate. The colon that follows, and the note that the day is nearly over, make the calm feel like the moment before a disaster.',
    },
    {
      text: 'saws knew what supper meant',
      where: 'Line 15',
      analysis:
        "The personification reaches its height here. The saw seems to understand the sister's call and to want its own meal, so the accident reads almost as a hungry animal striking. The timing is cruel irony: the word that should mean rest, food and family is the cue for the injury.",
    },
    {
      text: 'seemed to leap',
      where: 'Line 16',
      analysis:
        "The speaker corrects the account in the same line that gives it. The saw sprang, or only appeared to, and the next line suggests the boy himself offered it his hand. The hesitation is realistic, since no one can see a fast accident clearly, and it begins the poem's refusal to settle blame.",
    },
    {
      text: 'Neither refused the meeting',
      where: 'Line 18',
      analysis:
        "A chillingly polite phrase for a terrible injury, as if boy and saw had kept an appointment. Meeting gives the machine and the boy equal will, so the blame is shared rather than placed. The understatement is followed at once by the exclamation about the hand, the first break in the speaker's calm.",
    },
    {
      text: 'rueful laugh',
      where: 'Line 19',
      analysis:
        "An unexpected pairing. Rueful means regretful, so this is perhaps the embarrassed laugh of a boy who half thinks he has done something foolish and has not yet understood how serious it is. It shows his youth, and it makes the reader's knowledge of what follows much harder to bear.",
    },
    {
      text: 'spilling',
      where: 'Line 22, ending the sentence that begins in line 19',
      analysis:
        'The boy raises the injured hand partly to plead for help and partly, it seems, to stop his life escaping. The verb is a metaphor that turns his life into a liquid, like the blood he is losing, that might be kept in if he keeps the hand raised, and the enjambment across lines 21 and 22 makes the reader wait for the word that shows how much is at stake.',
    },
    {
      text: 'child at heart',
      where: 'Line 24',
      analysis:
        "Set against the adult labour of the same line, and the description of him as a big boy in line 23, this phrase states the poem's central tension. He is mature enough to understand what the injury means but young enough to be frightened like a child. The contrast asks whether he should have been at the saw at all.",
    },
    {
      text: 'dark of ether',
      where: 'Line 28',
      analysis:
        'Ether was an anaesthetic, so the literal meaning is that the doctor makes the boy unconscious. But dark is also the language of death, and the phrase quietly foreshadows what follows. It is a euphemism the reader only recognises afterwards, and the calm, clinical sentence around it keeps emotion at a distance.',
    },
    {
      text: 'Little—less—nothing!',
      where: 'Line 32',
      analysis:
        "Three words, each smaller than the last, separated by dashes that act like the gaps between failing heartbeats. The diminishing sequence compresses the death into a moment, and the exclamation mark, the speaker's first since line 18, is an open cry of shock. The rest of the line then closes the matter with brutal flatness.",
    },
    {
      text: 'Were not the one dead, turned to their affairs',
      where: 'Line 34, completing the clause that begins with since in line 33',
      analysis:
        "The poem's final judgement, and its most debated. The word “since”, at the end of line 33, makes being alive the only reason the survivors need to move on. The plain vocabulary and the absence of grief can be read as condemning their coldness, or as recording the hard necessity of a working life that cannot stop. The strongest answers argue for one reading.",
    },
  ],

  extracts: [
    {
      title: 'The saw in the evening yard',
      where: 'Lines 1-9',
      pointer:
        'Lines 1 to 9, anthology page 26: from the opening line, where the saw is at work in the yard, to line 9, which ends with the day almost over.',
      summary:
        'The poem opens on the saw cutting wood into short lengths for the stove in a yard. The breeze carries the smell of the fresh-cut wood, and beyond the yard the view opens onto ridge after ridge of mountains in the evening light, reaching as far as Vermont. The saw keeps up its noise, whether running free or cutting, and the speaker remarks that so far the day has passed without incident and is nearly done.',
      annotations: [
        {
          phrase: 'snarled and rattled',
          note: 'The saw is heard before the view is described. Its animal noise opens the poem and returns twice in line 7, so the threat is present from the start.',
        },
        {
          phrase: 'Sweet-scented',
          note: 'Soft sibilance, and the homely noun it describes, make the sawdust and cut wood pleasant. The machine that will injure the boy first gives the scene its beauty, which makes the later contrast sharper.',
        },
        {
          phrase: 'nothing happened',
          note: 'Dramatic irony: the reader, warned by the title, knows something will. The reassuring statement at the end of the calm opening feels like the pause before disaster.',
        },
      ],
      question:
        'How does Frost use the setting in lines 1 to 9 to prepare the reader for the accident?',
    },
    {
      title: 'Supper, and the accident',
      where: 'Lines 13-22',
      pointer:
        'Lines 13 to 22: from the moment the sister arrives (line 13) to the end of the first sentence of line 22, as the boy holds up his injured hand. The sentence that follows it, in which he understands, belongs to the next extract.',
      summary:
        "The boy's sister is standing with the workers to announce supper. As she speaks, the saw seems to spring at his hand. The speaker at once corrects the account, suggesting the boy himself offered it his hand, and concludes that neither boy nor saw held back. His first reaction is a laugh. He turns to the others with the injured hand raised, partly pleading for help and partly, it seems, trying to keep his life inside him.",
      annotations: [
        {
          phrase: 'saws knew what supper meant',
          note: "Personification at its height: the saw seems to understand the sister's word and strike on cue, turning a call to rest into the signal for disaster.",
        },
        {
          phrase: 'seemed to leap',
          note: 'The speaker corrects the account mid-line. The accident becomes uncertain, and the blame begins to shift from the machine towards the boy himself.',
        },
        {
          phrase: 'Neither refused the meeting',
          note: 'Polite, formal language for a horrifying injury. Meeting shares the will between boy and machine, and the understatement makes the horror felt rather than described.',
        },
        {
          phrase: 'rueful laugh',
          note: 'His first reaction is embarrassment, not pain, which shows how young he is and how little he yet understands of what has happened to him.',
        },
        {
          phrase: 'spilling',
          note: 'The metaphor makes his life a liquid he tries to hold in, and the line break before it delays the realisation of how much is at stake.',
        },
      ],
      question: 'How does Frost present the moment of the accident in lines 13 to 22?',
    },
    {
      title: "The boy's plea and his death",
      where: 'Lines 22-34',
      pointer:
        'Lines 22 to 34: from the second sentence of line 22, in which the boy understands everything, to the end of the poem.',
      summary:
        'The boy, mature enough to understand though still a child, sees that everything is ruined and begs his sister not to let the doctor take his hand, but the hand is already lost. The doctor puts him under ether. He lies breathing heavily until whoever is feeling his pulse is frightened. No one can believe it; they listen for a heartbeat, and it fades away. His life is over and nothing more can be made of it, and the people around him return to their own business.',
      annotations: [
        {
          phrase: 'child at heart',
          note: 'The contrast with the adult labour in the same line explains his terror, and asks the reader whether a child should have been at the saw at all.',
        },
        {
          phrase: 'dark of ether',
          note: 'Literally an anaesthetic, but dark is also the language of death, so the phrase foreshadows the ending in the calm voice of a medical report.',
        },
        {
          phrase: 'Little—less—nothing!',
          note: 'The dashes make gaps like failing heartbeats, and the shrinking words compress the whole of dying into a single broken moment of the line.',
        },
        {
          phrase: 'Were not the one dead',
          note: 'The causal word “since”, just before it at the end of line 33, gives the survivors only one reason to move on: they are alive. The flatness can be read as callous or as necessary.',
        },
      ],
      question:
        'How does Frost present the death of the boy and the reaction of the people around him in lines 22 to 34?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Personification',
      example:
        'The saw “snarled and rattled” (line 1) and behaves as though “saws knew what supper meant” (line 15).',
      effect:
        'The machine is given an animal voice and then an understanding of words, so the accident reads as if a predator struck on cue. Frost builds the threat long before the injury, and the personification lets the reader feel the saw as a presence rather than a tool.',
    },
    {
      technique: 'Onomatopoeia and repetition',
      example: '“snarled and rattled” in line 1, said twice more in line 7.',
      effect:
        'The harsh sounds imitate the saw, and the repetition turns them into a rhythm underneath the peaceful scenery. The reader hears the danger continuously, even while the speaker describes mountains and sunset, so the calm is never quite trusted.',
    },
    {
      technique: 'Juxtaposition of beauty and danger',
      example:
        'The “Sweet-scented” wood of line 3 and the layered mountain view at sunset in lines 4 to 6, set beside the noise of the saw.',
      effect:
        'The poem opens as a pastoral scene, peaceful and wide, and the violence comes out of it. The contrast makes the accident more shocking, and the unchanging mountains suggest a natural world that does not notice what happens in the yard.',
    },
    {
      technique: 'Dramatic irony',
      example: '“nothing happened” (line 9), a few lines before the sister announces supper.',
      effect:
        'The reader, warned by a title borrowed from a speech about death, knows more than the speaker lets on. The reassurance increases tension, because the calm is so obviously about to break.',
    },
    {
      technique: 'Hesitation and self-correction',
      example:
        'The saw leaped, or only “seemed to leap” (line 16); the boy himself must have offered it (line 17); “Neither refused the meeting” (line 18).',
      effect:
        'Within three lines the speaker revises the account twice and then settles on a verdict that refuses to choose. Blame shifts from machine to boy to both, and is never settled, which makes the reader think harder about responsibility, including that of the adults who let the work go on.',
    },
    {
      technique: 'Euphemism and understatement',
      example:
        'The “dark of ether” (line 28); the flat clause at the end of line 32 that closes the matter; the building image in line 33, which treats his life as a foundation on which nothing more can rise.',
      effect:
        "The boy's death is not named as it happens: the word dead arrives only in the last line, and then as the survivors' reason for moving on. The restraint keeps the tone level and unsentimental, and the reader supplies the emotion the speaker holds back, which can make the ending more painful than open lament would.",
    },
    {
      technique: 'Fragmented syntax and dashes',
      example: '“Little—less—nothing!” (line 32), and the one-word sentence that opens line 27.',
      effect:
        'The verse breaks apart at the moments of greatest shock. Short sentences and dashes slow the reader, imitate faltering breath and a failing pulse, and make the final decline feel both sudden and drawn out.',
    },
    {
      technique: 'Direct speech',
      example:
        "The sister's single word, “Supper” (line 14), and the boy's plea to his sister in lines 25 and 26.",
      effect:
        "These are the only voices besides the speaker's. The accident comes at the sister's word; the boy's broken plea, addressed to her, lets the reader hear his fear directly and makes him a person rather than a case.",
    },
    {
      technique: 'Allusion',
      example:
        "The title, taken from Macbeth's speech in Act 5 Scene 5, spoken when he hears that his wife has died.",
      effect:
        "Macbeth compares life to a candle that burns briefly and to a story without meaning. Borrowing his words frames the boy's death as a life snuffed out, and invites the reader to ask whether Frost shares that bleak view or is exposing it.",
    },
  ],

  vocabulary: [
    {
      term: 'buzz saw',
      definition:
        'A power-driven circular saw with a toothed metal disc, used on farms to cut logs. The anthology prints it as two words; some other printings of the poem hyphenate it. Follow your anthology.',
    },
    {
      term: 'stove-length',
      definition:
        'Cut short enough to fit into a wood-burning stove. The saw in line 2 is turning logs into firewood for the house.',
    },
    {
      term: 'rueful',
      definition:
        'Showing regret or sorrow, often with a wry or embarrassed edge. A laugh described as rueful is that of someone who knows something has gone wrong.',
    },
    {
      term: 'leaped',
      definition:
        'A past tense of leap. Leaped and leapt are both correct; the anthology prints leaped, so quote it that way.',
    },
    {
      term: 'ether',
      definition:
        'A chemical whose vapour was breathed in as an anaesthetic, to make a patient unconscious before surgery.',
    },
    {
      term: 'pulse',
      definition:
        "The regular beat of blood through an artery, felt at the wrist or neck. In line 30 the person feeling the boy's pulse is frightened by it, the first clear sign that he is dying.",
    },
    {
      term: 'affairs',
      definition:
        'Everyday business and concerns. To turn to your affairs is to go back to ordinary work and life.',
    },
    {
      term: 'Vermont',
      definition:
        'A New England state of the north-eastern United States, lying west of New Hampshire. The view in line 6 reaches into it towards the setting sun, which suggests a yard to its east, looking west; the poem does not say where the yard is, and the real accident happened in New Hampshire.',
    },
    {
      term: 'blank verse',
      definition:
        "Unrhymed lines of iambic pentameter, the main verse form of Shakespeare's plays. Frost uses it loosely, which lets the poem sound like speech.",
    },
    {
      term: 'personification',
      definition:
        'Giving human or animal qualities to something that is not alive, as Frost does with the saw.',
    },
    {
      term: 'onomatopoeia',
      definition: 'A word that imitates the sound it describes, such as the harsh verbs of line 1.',
    },
    {
      term: 'dramatic irony',
      definition:
        'When the reader knows more than a speaker or character, so that calm words carry a sense of what is coming.',
    },
    {
      term: 'euphemism',
      definition:
        'A mild or indirect expression used in place of a harsh one. The poem does not say outright that the boy has died until the word dead appears in its final line.',
    },
    {
      term: 'allusion',
      definition:
        "A reference to another text. The title alludes to a speech in Shakespeare's Macbeth, Act 5 Scene 5.",
    },
    {
      term: 'caesura',
      definition:
        'A pause in the middle of a line, marked by punctuation, as in the one-word sentence that opens line 27.',
    },
    {
      term: 'enjambment',
      definition:
        'When a sentence runs on from one line to the next without a pause, as it does across lines 21 and 22.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does the writer present the accident and its effects in ‘Out, Out-’? In your answer, you should write about: the setting before the accident; how the saw, the boy and the other people are presented; the use of language and structure. Support your answer with close reference to the poem, including brief quotations.',
        skill: 'Language, form and structure analysis of an anthology poem',
        guidance: [
          'Open with an overview that answers the question: a calm, beautiful evening is broken by a sudden accident, and the poem ends with a death the survivors do not mourn.',
          "Lines 1 to 9: analyse the setting as a false calm. Pair the sensory beauty (the “Sweet-scented” wood, the mountain view at sunset) with the saw's animal noise, and explain the dramatic irony of “nothing happened”.",
          "Lines 13 to 18: analyse the accident, its timing to the sister's call and the personification in “saws knew what supper meant”. Then explore the self-correction (“seemed to leap”, “Neither refused the meeting”) and what it does to blame.",
          "Lines 19 to 27: analyse the boy's reaction: the “rueful laugh”, the image of holding in his life, the contrast between adult labour and a “child at heart”, and the plea to his sister.",
          'Lines 28 to 34: analyse the death and the ending: the “dark of ether”, the broken rhythm of “Little—less—nothing!”, and the survivors who go back to their business. Give two readings of the ending and say which you find more convincing.',
          "Comment on structure throughout: one unbroken block of verse, slow description followed by rapid catastrophe, and the speaker's single first-person intrusion at line 10.",
        ],
      },
      {
        question:
          "How does the writer use contrast in ‘Out, Out-’? In your answer, you should write about: the setting and the accident; the boy as worker and as child; the boy's death and the reaction of those around him; the use of language and structure.",
        skill: 'Language and structure analysis, following one idea through the whole poem',
        guidance: [
          'Define the contrasts in your first paragraph and say what they add up to: a poem in which beauty, childhood and life itself are shown to be fragile.',
          "Setting against accident: the pastoral opening and the sweet smell of wood against the saw's animal noise, and the calm statement in line 9 against what follows.",
          'Worker against child: the adult labour and the big boy of lines 23 and 24 against a “child at heart” and the “rueful laugh”, and what that contrast suggests about the adults.',
          "Death against reaction: the slow, broken description of the boy's death in lines 28 to 32 against the brisk final sentence, and the word “since” in line 33.",
          "Structure: the long, leisurely opening against the few lines the accident and the death take, and the level voice against the speaker's two exclamations, in lines 18 and 32.",
          'End by judging what the contrasts reveal, and whether Frost wants the reader to condemn the onlookers or to accept that life goes on.',
        ],
      },
      {
        question:
          'Coursework (Assignment A): Discuss how the writers use language and structure to present sudden loss in ‘Out, Out-’, ‘Disabled’ and ‘The Story of an Hour’.',
        skill: 'Comparison across three anthology texts, one of them prose',
        guidance: [
          'Set out a line of argument across all three: each shows a life changed in a moment, and each asks how other people respond to it.',
          '‘Out, Out-’: the accident told in a few lines after a slow opening, the personified saw, the shared blame, and the survivors who return to work.',
          "‘Disabled’: Owen's soldier, who lied about his age to enlist, now sits in a wheelchair waiting for night. Compare Owen's movement between past and present with Frost's single forward-moving account.",
          "‘The Story of an Hour’: Louise Mallard is told her husband has died in a railway accident, feels a sudden freedom, and dies when he walks in alive. Compare the doctors' confident explanation of her death with the silence of Frost's onlookers.",
          'Organise by points of comparison rather than text by text: the moment of loss, the language that presents it, the reactions of others, and the ending.',
          "Include textual references from all three texts, keep quotations brief, and explain how each writer's choices shape the reader's response.",
        ],
      },
    ],
    tips: [
      'In the 4EA1 examination you are given the text of the poem: the June 2023 paper printed it in full. You do not need to memorise long quotations; you need to know the poem well enough to find the right lines quickly, and to analyse short phrases closely.',
      'Pearson set this poem in the June 2023 paper, with a question on how Frost creates sympathy for the boy. Be ready for a question on the boy, on the saw, on the other people, or on the ending.',
      'Write about the saw carefully. Frost does not say it attacked the boy: it only “seemed to leap”, and the boy may have offered his hand. An answer that tracks the self-correction in lines 16 to 18 beats one that calls the saw evil.',
      'Do not invent. The poem does not name the boy, does not say the doctor cut off the hand, and does not say who the onlookers are or who took his pulse. Precise reading is rewarded.',
      'Argue about the ending. Saying that it is cold is competent; weighing whether it shows callousness or hard necessity, and saying which the evidence supports, is what marks out the strongest answers.',
      "Use the title briefly and precisely. One or two sentences on the Macbeth allusion, tied to the speed of the boy's death, are worth more than a retelling of the play.",
      "Comment on structure as well as language: the slow opening, the sudden accident, the compressed death and the single first-person line all shape the reader's response.",
      "Copy the anthology's text exactly. It prints buzz saw as two words and leaped rather than leapt.",
      'For the coursework, the specification requires at least one prose text among your three. The Story of an Hour pairs well, because it also ends with a sudden death and a reaction to it.',
    ],
  },

  modelAnswer: {
    question: 'How does the writer present the accident and its effects in ‘Out, Out-’?',
    paragraph:
      "Frost presents the accident as sudden, uncertain and almost casual, and his handling of blame is what makes it disturbing. The saw has been personified from the first line, but in line 15 it moves from noise to intention, behaving as though “saws knew what supper meant”. The timing is cruel irony: the sister's call, a word that should mean food and rest, becomes the cue for disaster, and the personification suggests an animal that has been waiting for its moment. Yet Frost will not let the reader settle on that reading. The speaker corrects the account at once, saying the saw only “seemed to leap”, suggests that the boy himself held out his hand, and concludes that “Neither refused the meeting”. The word “meeting” is chillingly polite, as if boy and machine had kept an appointment, and it shares the responsibility between them. One reading is that this hesitation is simply realistic, since no one can say exactly what happens in a fast accident. I find it more convincing that the uncertainty is moral. Because the blame belongs to no single cause, the reader cannot dismiss the death as someone else's mistake, and is left with the speaker's earlier wish, in line 10, that the adults had called an end to the working day.",
    commentary: [
      'It opens with an argument that answers the question, rather than a summary of what happens.',
      'Every quotation is short and embedded in a sentence, and each is followed by analysis of a specific choice: the personification, the timing, and the single word “meeting”.',
      'It follows lines 15 to 18 in order, showing how the self-correction builds, which is analysis of structure as well as language.',
      'It offers two readings of the uncertainty and says which is more convincing, and why.',
      'It links the detail back to the whole poem through the wish in line 10, which shows an understanding of the poem as a whole.',
    ],
  },

  timeline: [
    {
      where: 'Lines 1-9',
      title: 'The saw at work in the yard',
      summary:
        'A buzz saw cuts firewood in a yard at sunset. The breeze smells of fresh wood and ridge after ridge of mountains stretches away towards Vermont, while the machine keeps up its noise. So far, the speaker says, the day has passed without incident.',
      setting: 'A yard at sunset, with a view of mountains that stretch into Vermont',
      who: ['The buzz saw'],
      quote: 'snarled and rattled',
      themes: ['Work and the machine', 'Indifference and survival'],
      tension: 2,
      significance:
        'The calm, beautiful opening makes the accident more shocking, and the saw is established as a threatening presence before the boy appears.',
    },
    {
      where: 'Lines 10-12',
      title: "The speaker's wish",
      summary:
        'The speaker breaks in, in the first person, to wish that someone had called an end to the working day and given the boy a little time off, which any boy would treasure.',
      setting: 'The same yard, as the day ends',
      who: ['The speaker', 'The boy', 'The onlookers'],
      themes: ['Childhood cut short', 'Blame and chance'],
      tension: 2,
      significance:
        'The only first-person line tells the reader the story is told with hindsight and, on one reading, quietly places blame on the adults who let the work run on.',
    },
    {
      where: 'Lines 13-18',
      title: 'Supper, and the saw',
      summary:
        "The boy's sister announces supper. As she speaks, the saw seems to spring at his hand; the speaker corrects the account, suggesting the boy offered his hand, and concludes that neither boy nor saw held back.",
      setting: 'Beside the saw, at the call to supper',
      who: ['The sister', 'The buzz saw', 'The boy', 'The onlookers'],
      quote: 'saws knew what supper meant',
      themes: ['Blame and chance', 'Work and the machine'],
      tension: 5,
      significance:
        "The accident is timed to the most homely moment in the poem, and the speaker's self-correction leaves the blame unsettled.",
    },
    {
      where: 'Lines 19-27',
      title: 'The boy understands',
      summary:
        'The boy laughs, then turns to the others with the injured hand raised, partly asking for help and partly as though holding it up could stop his life draining away. Mature enough to understand, he sees that everything is ruined and begs his sister not to let the doctor take the hand, but it is already lost.',
      setting: 'The yard, immediately after the accident',
      who: ['The boy', 'The onlookers', 'The sister'],
      quote: 'spilling',
      themes: ['Childhood cut short', 'The fragility of life'],
      tension: 5,
      significance:
        "The boy's reaction shows him as both worker and child, and his only words are a plea that comes too late.",
    },
    {
      where: 'Lines 28-32',
      title: 'Ether and the failing pulse',
      summary:
        'The doctor puts the boy under ether and he lies breathing heavily. Whoever is feeling his pulse is frightened; no one can believe it, they listen for a heartbeat, and it fades away to nothing.',
      setting: 'Where the boy lies after the doctor arrives',
      who: ['The doctor', 'The boy', 'The onlookers'],
      quote: 'Little—less—nothing!',
      themes: ['The fragility of life'],
      tension: 4,
      significance:
        'The death is compressed into a few broken words, showing how quickly and quietly a life can end.',
    },
    {
      where: 'Lines 33-34',
      title: 'Back to business',
      summary:
        'With the boy dead and nothing more to be made of his life, the people around him go back to their own business, for no better reason than that they are still alive. The poem ends without a word of grief.',
      setting: 'Where the boy has died, as ordinary life resumes',
      who: ['The onlookers', 'The boy'],
      quote: 'Were not the one dead, turned to their affairs',
      themes: ['Indifference and survival'],
      tension: 3,
      significance:
        "The abrupt, unsentimental ending is the poem's most debated moment: callousness, or the hard necessity of going on.",
    },
  ],

  relationships: [
    {
      from: 'The boy',
      to: 'The sister',
      kind: 'brother and sister',
      note: 'Her call to supper is the moment of the accident, and his only words are a plea to her rather than to the adults: the closest bond in the poem, and one that cannot save him.',
    },
    {
      from: 'The boy',
      to: 'The doctor',
      kind: 'patient and doctor',
      note: 'His only words show that what he dreads is the doctor taking the hand, before the doctor has even arrived. The doctor can give him ether but cannot keep him alive.',
    },
    {
      from: 'The boy',
      to: 'The buzz saw',
      kind: 'worker and machine',
      note: 'Frost frames the accident as a meeting neither side refused, sharing the responsibility between the boy and a machine written as if it had a will.',
    },
    {
      from: 'The onlookers',
      to: 'The boy',
      kind: 'the adults in charge and the child',
      note: "They let the work run on, watch him die, and then go back to their business. Whether that is callousness or necessity is the poem's open question.",
    },
    {
      from: 'The speaker',
      to: 'The boy',
      kind: 'narrator and subject',
      note: "The speaker's one first-person moment is a wish that the boy had been given time off, the most open sympathy the speaker shows.",
    },
    {
      from: 'The speaker',
      to: 'The onlookers',
      kind: 'observer and observed',
      note: 'One reading is that the wish in line 10 is aimed at them, since they could have stopped the work. At the end the speaker neither condemns nor excuses them, and leaves the judgement to the reader.',
    },
  ],

  compareWith: [
    {
      title: 'Disabled (Wilfred Owen)',
      href: '/igcse/edexcel/poetry/disabled',
      reason:
        "Another Part 2 poem about a young life changed in a moment and the indifference that follows: Owen's soldier waits for someone to put him to bed, while Frost's onlookers go back to work.",
    },
    {
      title: 'The Story of an Hour (Kate Chopin)',
      href: '/revision/texts/the-story-of-an-hour',
      reason:
        'A prose partner for the coursework: a sudden death told in a few lines at the end, and a reaction to it that the reader is invited to question.',
    },
    {
      title: 'The Bright Lights of Sarajevo (Tony Harrison)',
      href: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo',
      reason:
        "Both set everyday life beside sudden death, but Harrison's young couple stand at night on the shell scars where, in 1992, mortars killed a bread queue, so life going on can be read as defiance rather than indifference.",
    },
  ],

  contentGuidance: ['mortality', 'violence'],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), page 26: the prescribed text and its line numbering; page 72: the acknowledgement (from The Poetry of Robert Frost, ed. Edward Connery Lathem, copyright 1916, 1969 by Henry Holt and Company, copyright 1944 by Robert Frost). Every quotation was checked against it, and re-checked independently on 25 September 2026.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Language A, Paper 2, June 2023 (P72391A): reprints the poem word for word as the anthology does, and sets a question on how Frost creates sympathy for the boy.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Language-A/2016/Exam-materials/4ea1-02-que-20230613.pdf',
    },
    {
      label:
        'Robert Frost, Mountain Interval (Henry Holt, first published 1916), Project Gutenberg eBook #29345, used to cross-check wording. Not the first edition: its title page reads Copyright 1916, 1921, and it was transcribed from a May 1931 printing. It hyphenates buzz-saw and has no comma after hand in line 20.',
      url: 'https://www.gutenberg.org/ebooks/29345',
    },
    {
      label:
        'Robert Frost, Selected Poems (Henry Holt, 1923), Project Gutenberg eBook #59824: a second printing, agreeing on every quoted word. It also hyphenates buzz-saw and has no comma after hand in line 20.',
      url: 'https://www.gutenberg.org/ebooks/59824',
    },
    {
      label:
        'The Frost Place, educator text of the poem: a third printing, agreeing on every quoted word (it reads beside him at line 13, a variant not quoted here).',
      url: 'https://frostplace.org/wp-content/uploads/2020/10/Out-Out-Poem-Text-EDITED.pdf',
    },
    {
      label:
        'Pearson Edexcel International GCSE English Language A specification, Issue 7 (August 2025): Paper 2 Section A sets one essay question on a Part 2 text, provided in the examination; Assignment A uses three Part 2 texts, at least one poetry and one prose.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Specification%20and%20sample%20assessments/9781446954379-int-gcse-englang-a-iss6-02-02-2023.pdf',
    },
    {
      label:
        "Wikipedia article on the poem: first published in McClure's, July 1916, then in Mountain Interval; written in memory of a neighbour's son, Fitzgerald, who died on 24 March 1910 (citing Fagan, Critical Companion to Robert Frost, 2007, and Parini, Robert Frost: A Life, 1999); the Macbeth allusion.",
      url: 'https://en.wikipedia.org/wiki/Out,_Out%E2%80%94',
    },
    {
      label:
        'PoemShape, on Out, Out: quotes the Littleton Courier of 31 March 1910, via Lea Newman, Robert Frost: The People and Stories Behind His New England Poetry, naming Raymond Tracy Fitzgerald of Bethlehem, whose hand was badly hurt in a sawing machine and who died of shock causing heart failure.',
      url: 'https://poemshape.wordpress.com/2009/07/18/robert-frosts-out-out-2/',
    },
    {
      label:
        'Find a Grave, memorial 62944052, Raymond Tracy Fitzgerald (1893-1910): the birth year behind calling him a teenager. The page itself refused automated access; the dates are from its listing title.',
      url: 'https://www.findagrave.com/memorial/62944052/raymond_tracy-fitzgerald',
    },
    {
      label:
        "Poetry Lovers' Page, literary analysis (citing Pritchard 1984, Meyers 1996, Parini 1999): Frost knew the Fitzgerald family; McClure's, July 1916. It places Frost in Franconia in 1910, which other accounts contradict, so this guide does not say where Frost was living.",
      url: 'https://www.poetryloverspage.com/poets/frost/out_out/literary-analysis',
    },
    {
      label:
        "William Shakespeare, Macbeth, Project Gutenberg eBook #1533: the speech the title alludes to is in Act 5 Scene 5, immediately after Seyton reports the Queen's death.",
      url: 'https://www.gutenberg.org/ebooks/1533',
    },
    {
      label:
        'Anthology Issue 8, pages 25, 28 and 30, and src/data/full-texts/disabled.ts (Project Gutenberg #1034): the facts about Disabled, The Bright Lights of Sarajevo and The Story of an Hour used in the comparisons.',
    },
  ],
}
