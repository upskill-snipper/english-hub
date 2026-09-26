import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * If-, Rudyard Kipling (1910). A supplement: the page at /igcse/edexcel/poetry/if
 * keeps its overview, context, key quotations, language analysis and form and
 * structure, and this file adds the six sections it lacked: themes, the poem's
 * people, passages for close reading, vocabulary, exam practice and a model
 * answer.
 *
 * THE SELF-AUDIT (25 September 2026). The page above was read in full and each
 * of the eleven sections graded. SUBSTANTIVE, so kept: overview (a stanza by
 * stanza summary and an overall reading), context (five headed sections),
 * key quotations (eight, every one checked word for word against the
 * anthology and found exact), language analysis (six devices, each with an
 * example and effect) and form and structure (eight headed points). ABSENT, so
 * written here: themes (only chips on the quotation cards, never developed),
 * characters (no section on the speaker or the son), extracts, vocabulary,
 * exam practice and a model answer.
 *
 * WORDING. The anthology (Issue 8, February 2026, page 51, read from Pearson's
 * PDF) and the edition held in src/data/full-texts/if.ts (Rewards and Fairies,
 * Gutenberg #556) have identical words in all 32 lines. They differ only in
 * punctuation, in four places: line 2 ends with a comma in the anthology and a
 * semicolon in Gutenberg, line 8 a colon against a semicolon, line 10 a
 * semicolon against a comma, and line 16 a colon against a semicolon. The
 * anthology also spaces its dashes where Gutenberg uses a double hyphen. The
 * passages below follow the anthology's punctuation, because that is the copy
 * a student has in the exam, and line numbers follow the anthology, which
 * prints one beside every fifth line. The stanza breaks were measured from the
 * PDF's line spacing: four stanzas of eight lines.
 *
 * THE PAGE ABOVE, checked while this was written. Its key quotations are
 * exact. These things are not, and are listed for whoever maintains that page:
 * - Context says the poem was written in 1895. No source reached gives a date
 *   of writing, and the Jameson Raid, which Kipling said the verses were drawn
 *   from, began only on 29 December 1895.
 * - Context says the poem is framed as advice to Kipling's son John. That is a
 *   common reading, not a fact: the poem does not name him, Kipling's own
 *   account names Jameson, and John was born in August 1897, after the date the
 *   same paragraph gives for the writing.
 * - Context dates the BBC favourite-poem poll to 1995; Wikipedia gives 1996.
 *   Unresolved, so this file does not mention the poll.
 * - Context places the Wimbledon inscription above the players' entrance to
 *   Centre Court. Widely repeated, but not confirmed from an official source
 *   here, so this file does not mention it.
 * - Form says there is an occasional feminine ending and gives "too" as one.
 *   Every odd-numbered line has a feminine ending and every even-numbered line,
 *   "too" included, ends on a stress. The extract notes and tips below give the
 *   accurate pattern.
 * - Its comparison card for Piano quotes "weeping like a child". The anthology
 *   (page 57) has "weep like a child".
 *
 * FACT-CHECK (26 September 2026). Every quotation, extract line and line
 * number was re-checked against the anthology PDF (page 51, PDF page 57, stanza
 * breaks confirmed from the line spacing) and the held edition; the exam
 * questions, timings and examiners' report against Pearson's own PDFs. Fixed:
 * the poem was said to be published "five years" before the First World War
 * (1910 to 1914 is four); the son was "the you of every line" (eleven lines have
 * no you); line 10 was paraphrased as thoughts "ruling" the son, where the
 * poem says they must not be his aim; stanza 3's four-line conditions were
 * called the longest in the poem (lines 5-8 and 13-16 are as long); the
 * examiners' report was made to describe "stronger answers" where it says
 * responses to If- were stronger than to the Thomas poem; Epictetus, a Greek,
 * was called a Roman; and several readings stated as facts were marked as
 * readings.
 */
export const guide: StudyGuide = {
  slug: 'if',
  title: 'If-',
  author: 'Rudyard Kipling',
  form: 'poem',
  scope:
    'The whole poem, as printed on page 51 of the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), Part 3: four stanzas of eight lines, 32 lines in all. Line numbers in this guide follow the anthology, which prints one beside every fifth line. Set for Pearson Edexcel International GCSE English Literature (4ET1), Paper 1 Section B, where it is compared with another Part 3 poem; the anthology poems are provided in the examination.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'Rudyard Kipling (1865-1936); out of copyright. Published in Rewards and Fairies (1910). Line references follow the Pearson Edexcel International GCSE English Anthology (Issue 8, February 2026), page 51. Quotations are also checked against Rewards and Fairies, Project Gutenberg eBook #556.',
  },
  workLength: {
    words: 291,
    lines: 32,
    basis:
      'Counted on 25 September 2026 from page 51 of the Pearson Edexcel International GCSE English Anthology, Issue 8 (February 2026), in Pearson’s own PDF: four stanzas of eight lines, 32 lines, 291 words by the validator’s word count (hyphenated words split), title and author line excluded. The poem is out of copyright, so no quotation limit applies; the length is recorded for reference.',
  },

  native: {
    overview: '/igcse/edexcel/poetry/if',
    context: '/igcse/edexcel/poetry/if',
    keyQuotes: '/igcse/edexcel/poetry/if',
    languageAnalysis: '/igcse/edexcel/poetry/if',
    structureForm: '/igcse/edexcel/poetry/if',
  },

  themes: [
    {
      title: 'Self-control and stoicism',
      body: 'The poem’s first demand is that the son stay in command of himself while everyone around him loses control. It opens on people losing their heads “and blaming it on you” (line 2), and the answer is not to argue back but to “keep your head”, to trust yourself, to wait, and to refuse to repay lies with lies or hatred with hatred (lines 1 to 7). The idea is stated most sharply in lines 11 and 12, where success and failure are personified as “Triumph and Disaster” and dismissed as “impostors”: neither tells the truth about a person’s worth, so both should be met with the same steady face. That is close to the teaching of the Stoics, the Greek and Roman philosophers who held that things such as wealth and health are not truly good in themselves and that only virtue is good. One reading praises this as strength: calm is what lets a person act well under pressure. Another reads it as suppression, and its best evidence is line 20, where the son must lose everything and “never breathe a word about your loss”. The first reading is more convincing for most of the poem, because its verbs are verbs of mastery rather than denial: keep, trust, wait, meet, treat. The son is allowed to dream and to think, provided his dreams do not become his “master” (line 9) and thinking does not become his “aim” (line 10). But line 20 is where mastery tips into silence, and a strong answer notices the point at which the poem asks for more than control.',
    },
    {
      title: 'Balance and moderation',
      body: 'Almost every piece of advice in the poem arrives with a limit attached. The son must trust himself “But make allowance for their doubting too” (line 4); he must be patient, honest and free of hatred, “And yet don’t look too good, nor talk too wise” (line 8); he may dream and think, but dreams must not be his master nor thoughts his aim (lines 9 and 10); he may mix with crowds and with Kings without losing his “virtue” or “the common touch” (lines 25 and 26); and everyone should matter to him, “but none too much” (line 28). The small connecting words carry the idea: but, and yet, nor, not too. The ideal is not an extreme quality but a point of balance between two faults, such as arrogance and self-doubt, or snobbery and flattery. This matters for how the poem is usually read. It is often treated as a hymn to toughness, yet a son who was tough without being modest would fail the tests of lines 8 and 26. The warning against looking too good is the most interesting of them, because a poem made entirely of moral advice is at risk of sounding exactly like that. One reading is that Kipling knows this and guards against it; a less generous one is that the poem commits the fault it warns against. The first is more persuasive, because the plain, everyday idioms (keep your head, make allowance, the common touch) stop the advice from sounding lofty.',
    },
    {
      title: 'Resilience and endurance',
      body: 'The middle of the poem, lines 13 to 24, is a sequence of losses, and each is harder than the last. First the son’s work is damaged: his honest words are “Twisted by knaves to make a trap for fools” (line 14), and he must watch the things he gave his life to lie broken (line 15). Then he damages himself, staking everything on a single bet and losing it (lines 17 to 19). Finally his body gives out, and he must make his heart, nerve and sinew keep working “long after they are gone” (line 22). The picture of courage is strikingly unglamorous. The answer to ruin is to “stoop and build ’em up with worn-out tools” (line 16): bending down, starting again, working with what is left. The answer to losing a fortune is to “start again at your beginnings” (line 19) and say nothing. Is Kipling recommending reckless gambling in lines 17 and 18? One reading says yes: the repeated one (one heap, one turn) admires the nerve of an all-or-nothing risk. The more convincing reading is that the bet is there to set up the loss, since the lines that follow give their weight to how he loses, not to whether he should have played. The climax is the Will in line 24, personified as the last voice left when everything else has gone, and it says only “Hold on”. Endurance in this poem is not an absence of weakness but what remains after weakness has taken everything else.',
    },
    {
      title: 'Integrity among other people',
      body: 'The poem is crowded. Around the son stand people who panic and blame him (lines 1 and 2), doubt him (line 3), lie about him and hate him (lines 6 and 7), and twist his words (lines 13 and 14); further out are crowds and Kings, foes and loving friends (lines 25 to 27). Kipling defines the ideal man largely by how he behaves among them. He must not copy them, dealing in lies because he is lied about, and he must not despise them either, since he has to “make allowance for their doubting too” (line 4) and let “all men count” with him (line 28). Integrity here means being the same person whoever you are with, which is the point of lines 25 and 26: the son should be able to “talk with crowds and keep your virtue” and “walk with Kings” without looking down on ordinary people. Two facts about the poem’s origins sharpen the idea. In Rewards and Fairies (1910) it follows a story in which George Washington resists public pressure to join France in a war against Britain; and Kipling later said the verses were drawn from the character of Leander Starr Jameson, who led a failed armed raid into the Transvaal at the end of 1895 and was tried and imprisoned for it. One possible reading, given this, hears the opening lines as a defence of a man the public blamed. But the poem names no one, and its advice works because it is general. In the exam, use this context in a clause, if at all, and keep the focus on how the language presents other people.',
    },
    {
      title: 'Manhood and a father’s advice',
      body: 'The reward comes in the last two lines, and in two parts: the whole Earth, and, “which is more”, the status of being “a Man” (line 32). The capital letter makes manhood a title, earned by passing every test, rather than something a boy grows into simply by getting older. Only at that point does the speaker say “my son”, the one moment the poem’s impersonal voice becomes a parent’s. One reading hears love in the ending: the advice is a father’s gift, and the pride of the final line is the warmth the whole poem has held back. Another hears pressure: the grammar makes manhood conditional on a list of tests almost nobody could pass, and Kipling himself, in his autobiography Something of Myself (1937), said the verses contained “counsels of perfection” that were easy to give. A third reading, common today, questions the kind of manhood being defined. Patience, honesty, modesty and courage belong to anyone, yet the reward is named as becoming a man, and the model man never shows his loss (line 20). The most convincing answer combines the first two readings: the ending is tender, and it is tender precisely because the standard is so high. Whether that standard is inspiring or crushing is the question worth arguing in an essay.',
    },
  ],

  characters: [
    {
      name: 'The speaker',
      role: 'The voice giving the advice: impersonal for thirty-one lines, revealed as a father only by the words “my son” at the very end.',
      body: 'The speaker never says I or me. The only first-person word in the poem is “my”, in its last two words. For thirty-one lines the voice sounds less like a person than like a set of rules or proverbs: calm, measured and certain. Its authority seems to come from experience, since its images of loss, the things you gave your life to lying broken, a fortune thrown away on one toss, sound lived through rather than imagined. The late reveal changes how the whole poem reads. What seemed to be general wisdom becomes a father’s voice, and the demands become a parent’s hopes. It is tempting to call the speaker Kipling, and many readers do, but the poem does not, so in an answer it is safer to write about the speaker or the father. There is a small irony to notice: the speaker warns the son not to “talk too wise” (line 8) in a poem made entirely of wise talk. One reading is that the warning shows the speaker’s humility, since he knows the danger; another is that it shows how hard his own advice is to follow. Either way, his tone hardly rises: there is no anger, no pleading and no doubt, only steady instruction, and the only exclamation marks come with the Will’s command in line 24 and the final line. That evenness is itself a demonstration of the self-control he recommends.',
    },
    {
      name: 'The son',
      role: 'The “you” the whole poem speaks to, addressed by some form of you or your thirty-two times but never heard, and named only as “my son” in the last line.',
      body: 'We learn nothing about the son except what he must become. He has no name, age, appearance or reply; the poem is entirely about his future, imagining him with dreams, work, winnings, enemies, friends and a place in public life. Because he is only a “you”, any reader can step into his place, which helps explain why the poem is so often used as general advice. The one voice the poem gives him is inside him: the Will of line 24, which says “Hold on”, is the only direct speech in the poem. One reading is that by that point the father’s advice has become the son’s own inner voice, which is exactly what advice is meant to do. The poem is often described as addressed to Kipling’s son John, who was born in 1897 and was still a child when it was published in 1910. The poem itself does not name him, and Kipling said the verses were drawn from Jameson’s character, so the identification is a reading, not a fact. John Kipling was killed at the Battle of Loos on 27 September 1915, aged eighteen. Knowing that can change how a reader hears the poem’s demand to hold on, but the poem was published in 1910, four years before the war began, and cannot know it.',
    },
    {
      name: 'Other people',
      role: 'Everyone the son lives among: those who panic, doubt, lie, hate and twist his words, and the crowds, Kings, foes and loving friends of the last stanza.',
      body: 'No one else in the poem is named or described, yet other people are everywhere, and almost all of them are a threat or a temptation. In the first half they are hostile: they lose their heads and blame him (lines 1 and 2), doubt him (line 3), lie about him and hate him (lines 6 and 7), and twist his truth into a trap for fools (lines 13 and 14), a phrase that divides them into the cunning and the gullible. In the last stanza they become a whole social world: crowds and Kings, foes and “loving friends” (line 27). The surprising pairing is the last. Kipling puts friends in the same line as enemies, which implies that both can hurt: one reading is that enemies wound by attack and friends by affection or flattery, and the son must be proof against both. The poem’s view of other people can be read as wise detachment or as a lonely one: the ideal man lets “all men count” with him, “but none too much” (line 28). Which reading you take shapes your whole answer, so decide, and give the other.',
    },
  ],

  extracts: [
    {
      title: 'Dreams, impostors and worn-out tools',
      where: 'Stanza 2, lines 9-16',
      pointer:
        'The whole of stanza 2, from “If you can dream” (line 9) to “worn-out tools” (line 16), anthology page 51.',
      text: 'If you can dream — and not make dreams your master; / If you can think — and not make thoughts your aim; / If you can meet with Triumph and Disaster / And treat those two impostors just the same; / If you can bear to hear the truth you’ve spoken / Twisted by knaves to make a trap for fools, / Or watch the things you gave your life to, broken, / And stoop and build ’em up with worn-out tools:',
      annotations: [
        {
          phrase: 'not make dreams your master',
          note: 'Dreams are allowed, but only as servants. A master and servant pattern runs through the poem: the son must rule his dreams, and later make his exhausted body serve his turn (line 22), rather than be ruled by either. The dash holds a pause between the permission and the warning.',
        },
        {
          phrase: 'Triumph and Disaster',
          note: 'Capital letters personify success and failure as two visitors the son must meet, almost like callers at the door. Setting them side by side in one line makes them equals, which is exactly the lesson of the next line.',
        },
        {
          phrase: 'those two impostors',
          note: 'An impostor pretends to be someone they are not. Success and failure both lie about what a person is worth, so neither should change how he behaves. The idea is close to the Stoic teaching that only virtue is truly good.',
        },
        {
          phrase: 'Twisted by knaves to make a trap for fools',
          note: 'The line opens on a stressed syllable, breaking the pattern of the lines around it, so the rhythm twists as the words do. The old-fashioned knaves and fools divide people into the dishonest and the gullible, and the son’s own truth becomes the bait.',
        },
        {
          phrase: 'stoop and build ’em up with worn-out tools',
          note: 'Stoop is a humble, physical verb: the son bends down among the ruins. The casual contraction and the worn-out tools make the rebuilding ordinary, tiring work, so courage here means starting again with what is left rather than a grand gesture.',
        },
      ],
      question:
        'Explore how Kipling presents the right response to success, failure and loss in lines 9 to 16. Write about the personification, the balanced structure of the lines, and the choice of verbs.',
    },
    {
      title: 'Hold on',
      where: 'Stanza 3, lines 17-24',
      pointer:
        'The whole of stanza 3, from “If you can make one heap of all your winnings” (line 17) to the Will’s command at the end of line 24, anthology page 51.',
      text: 'If you can make one heap of all your winnings / And risk it on one turn of pitch-and-toss, / And lose, and start again at your beginnings / And never breathe a word about your loss; / If you can force your heart and nerve and sinew / To serve your turn long after they are gone, / And so hold on when there is nothing in you / Except the Will which says to them: ‘Hold on!’',
      annotations: [
        {
          phrase: 'one heap of all your winnings',
          note: 'Everything the son has gained is piled together, and the repeated one (one heap, then one turn) stresses that the risk is all or nothing. The line is a test of nerve, not financial advice.',
        },
        {
          phrase: 'one turn of pitch-and-toss',
          note: 'Pitch-and-toss was a simple game of throwing and tossing coins, decided largely by luck, so the stake is enormous and the game trivial. The mismatch suggests that fortunes can be won or lost by luck, which is why the response in the next two lines matters more than the bet.',
        },
        {
          phrase: 'never breathe a word about your loss',
          note: 'To breathe a word is an idiom for the smallest possible complaint. This is the poem’s most demanding line about feeling: the son must not only bear the loss but keep it entirely to himself, which is where many modern readers begin to question the ideal.',
        },
        {
          phrase: 'your heart and nerve and sinew',
          note: 'The list is joined by and twice (polysyndeton), piling up feeling, courage and physical strength so that each weighs more. The verb force before it is violent: the son drives his own body as if it belonged to someone else.',
        },
        {
          phrase: 'Except the Will which says to them',
          note: 'The Will is capitalised and personified as the last voice left inside him. Them points back to heart, nerve and sinew, so the self divides into a body that has given up and a will that commands it to carry on.',
        },
        {
          phrase: 'Hold on',
          note: 'The words of line 23 come back as direct speech, the only speech in the whole poem. The repetition turns a description into a command the son hears inside himself, and the stanza ends on it.',
        },
      ],
      question:
        'How does Kipling present endurance in lines 17 to 24? Write about the gambling image, the language of the body, and the way the stanza builds to its final command. Note that the stanza has only two conditions, each four lines long, fewer than any other stanza.',
    },
    {
      title: 'The reward',
      where: 'Stanza 4, lines 25-32',
      pointer:
        'The whole of stanza 4, from “If you can talk with crowds” (line 25) to “my son” (line 32), anthology page 51.',
      text: 'If you can talk with crowds and keep your virtue, / Or walk with Kings — nor lose the common touch, / If neither foes nor loving friends can hurt you, / If all men count with you, but none too much; / If you can fill the unforgiving minute / With sixty seconds’ worth of distance run, / Yours is the Earth and everything that’s in it, / And — which is more — you’ll be a Man, my son!',
      annotations: [
        {
          phrase: 'nor lose the common touch',
          note: 'Kings sit at one extreme of society and the common touch belongs to the other. The son must be at ease with royalty without losing his ease with ordinary people, a balance the poem values above rank.',
        },
        {
          phrase: 'neither foes nor loving friends can hurt you',
          note: 'Enemies and friends share a line because both can wound, one by attack and one by affection. The adjective loving makes the second danger the more surprising, and it widens the poem’s idea of self-control to include love.',
        },
        {
          phrase: 'the unforgiving minute',
          note: 'Time is personified as something that will not forgive waste. Unforgiving is a moral word, so a minute becomes a strict judge, and idleness becomes a kind of offence against it.',
        },
        {
          phrase: 'sixty seconds’ worth of distance run',
          note: 'A running image: every second of the minute must be used, as a runner covers ground. The exact number turns a vague ideal, working hard, into something measured, and it links to the final rhyme of run with son.',
        },
        {
          phrase: 'Yours is the Earth and everything that’s in it',
          note: 'After thirty lines of conditions the main clause finally arrives, opening on the stressed word Yours. The reward is total, and the phrasing can be heard as biblical, like a promise of inheritance, which would make the son an heir.',
        },
        {
          phrase: 'you’ll be a Man, my son',
          note: 'The capital M makes manhood a title earned by passing the tests. The speaker’s only word about himself, my, comes in the last two words, so the rules turn into a father’s hope at the very end of the poem.',
        },
      ],
      question:
        'Explore how Kipling builds to the ending of the poem in lines 25 to 32. Write about the social world of the stanza, the image of time, and the effect of the final two lines on your reading of the whole poem.',
    },
  ],

  vocabulary: [
    {
      term: 'keep your head',
      definition:
        'An idiom meaning to stay calm and think clearly in a situation likely to cause distress (line 1). Its opposite, losing your head, describes everyone around the son in line 2.',
    },
    {
      term: 'make allowance for',
      definition:
        'To take something into account and be understanding about it. In line 4 the son must trust himself, but still accept that other people have their reasons for doubting him.',
    },
    {
      term: 'impostor',
      definition:
        'Someone who deceives others by pretending to be someone they are not. In line 12 Triumph and Disaster are both impostors, because neither shows a person’s true worth.',
    },
    {
      term: 'knave',
      definition:
        'A dated word for a tricky, dishonest man, a rogue (line 14). It first meant a boy or a servant, and it is also the old name for the jack in a pack of cards.',
    },
    {
      term: 'pitch-and-toss',
      definition:
        'A gambling game with coins: players throw coins at a mark, and the nearest tosses them all and keeps those that land heads up (line 18). The phrase can also mean trusting everything to luck.',
    },
    {
      term: 'sinew',
      definition:
        'A tendon, the tough cord of the body; figuratively, muscular power and strength (line 21). With heart and nerve it completes a list of feeling, courage and body.',
    },
    {
      term: 'serve your turn',
      definition:
        'An old idiom, to serve the turn, meaning to be enough for your purpose or need. In line 22 the son must make his exhausted heart, nerve and sinew go on being of use.',
    },
    {
      term: 'the Will',
      definition:
        'Willpower: the determination to carry on. Kipling capitalises and personifies it in line 24 as a voice that gives orders to the tired body.',
    },
    {
      term: 'virtue',
      definition:
        'Good moral conduct; behaviour in keeping with moral principles (line 25). To keep your virtue among crowds is to stay good when surrounded by people who might flatter you or lead you astray.',
    },
    {
      term: 'the common touch',
      definition:
        'The quality in a powerful or famous person of understanding and getting on with ordinary people (line 26). Wiktionary’s entry for the phrase quotes this line.',
    },
    {
      term: 'unforgiving',
      definition:
        'Unwilling to forgive or show mercy; allowing no room for error or weakness (line 29). Applied to a minute, it personifies time as a strict judge.',
    },
    {
      term: 'Stoicism',
      definition:
        'A philosophy founded in Athens around 300 BCE by Zeno of Citium, and later taught in the Roman world by Seneca, Epictetus and Marcus Aurelius, which held that only virtue is truly good. In everyday English a stoic person bears hardship calmly and without complaint.',
    },
    {
      term: 'anaphora',
      definition:
        'Repeating the same word or phrase at the start of successive lines or clauses. Thirteen of the poem’s thirty-two lines begin with If, eleven of them with If you can.',
    },
    {
      term: 'conditional clause',
      definition:
        'A clause beginning with if that sets a condition for the main clause. The poem is a chain of conditional clauses whose main clause, Yours is the Earth, arrives only in line 31.',
    },
    {
      term: 'feminine ending',
      definition:
        'A line that ends on an unstressed syllable, such as “about you” or “waiting”. In If- every odd-numbered line has one, and every even-numbered line ends on a stress, which gives the poem its steady, swinging rhythm.',
    },
    {
      term: 'polysyndeton',
      definition:
        'Using more conjunctions than a list needs, as in heart and nerve and sinew (line 21). It slows the list down and makes each item weigh more.',
    },
    {
      term: 'didactic',
      definition:
        'Intended to teach, especially to give moral instruction. If- is a didactic poem: its whole purpose is advice, which is why its tone and its humility matter so much.',
    },
    {
      term: 'octave',
      definition:
        'A stanza of eight lines. The poem has four, each rhyming ABABCDCD, so each can also be read as two linked quatrains.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Compare the ways the writers present people giving advice to others in If- and Do not go gentle into that good night. You should make reference to language, form and structure. Support your answer with examples from the poems. (Pearson 4ET1/01, January 2020)',
        skill: 'Comparison of two named poems: language, form and structure',
        guidance: [
          'Open with a comparative thesis that answers the question: both poems give advice across the generations, but in opposite directions and opposite moods. Kipling’s father counsels calm self-command; Thomas’s son begs his dying father to resist death with rage.',
          'Compare the grammar of the advice. Kipling uses conditions that turn advice into tests and delay the reward until line 31; Thomas uses direct commands. Ask what each choice suggests about the speaker’s authority and feelings.',
          'Compare form. Kipling’s four regular eight-line stanzas, held together as one long sentence, model the self-control he recommends; Thomas’s villanelle keeps returning to its two refrains, which can suggest desperation or insistence.',
          'Compare the moment each addressee is named: “my son” in Kipling’s last line, and Thomas’s father in the first line of his final stanza. Explain how naming the person late changes the way the whole poem is read.',
          'Analyse two or three precise moments from If-, such as the personified “Triumph and Disaster” (line 11) or the Will’s command in line 24, and set each beside a moment in Thomas that gives the opposite advice.',
          'Conclude with a judgement: whose advice is harder to follow, and which speaker seems more in control of his feelings? Keep the comparison running through every paragraph rather than writing about one poem and then the other.',
        ],
      },
      {
        question:
          'Compare how the writers present thoughts about life in If- and Prayer Before Birth. You should make reference to language, form and structure. Support your answer with examples from the poems. (Pearson 4ET1/01R, May 2023)',
        skill: 'Comparison of two named poems: language, form and structure',
        guidance: [
          'Establish the contrast of viewpoint: If- looks at life from experience, an older voice passing on what it has learned, while Prayer Before Birth looks at it from before birth, a voice asking to be protected from the world.',
          'Compare how each builds its thoughts through repetition. Kipling’s repeated If turns life into a series of tests that can be passed; MacNeice’s repeated opening turns it into a series of pleas. Ask whether life is presented as something to master or something to fear.',
          'Compare the view of other people. In If- they panic, doubt, lie, hate and twist words, but the son can rise above them; ask whether the unborn speaker of the other poem believes that is possible.',
          'Use the ending of If-: the conditional reward in lines 31 and 32 can be read as confident that a good life can be achieved, however demanding the conditions. Set that confidence against the tone of the other poem’s ending.',
          'Keep each point comparative, with a short quotation from each poem, and finish with a judgement about which poem is more hopeful, and why.',
        ],
      },
      {
        question:
          'Compare the ways the writers present a relationship between a parent and a child in If- and one other poem from the anthology. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparison with a poem of your choice',
        guidance: [
          'Choose the second poem for contrast. Poem at Thirty-Nine (an adult daughter remembering what her father taught her), Do not go gentle into that good night (a son speaking to his dying father) and Piano (a grown man overcome by a memory of his mother) all work.',
          'Identify whose voice each poem uses. If- is the parent speaking to the child, entirely one-way, and the child never answers; decide whether your second poem gives the child’s point of view instead.',
          'Analyse how If- presents the parent’s authority: the calm, impersonal voice, the absence of I and me, and the late, warm reveal of “my son” in line 32.',
          'Analyse what the parent hands on in If-: not money but a code of conduct, summed up in the reward of becoming “a Man”. Compare what is passed on, or remembered, in the other poem.',
          'Compare structure: Kipling’s regular stanzas and single sentence against the shape of your second poem, and say what each shape suggests about the relationship.',
          'Finish by judging the relationships. Is Kipling’s father loving, demanding, or both? Support the judgement from the poem’s language rather than from biography.',
        ],
      },
      {
        question:
          'Compare how the writers present the control or release of strong feelings in If- and Piano. You should make reference to language, form and structure. Support your answer with examples from the poems.',
        skill: 'Comparison of two named poems: language, form and structure',
        guidance: [
          'Thesis: If- recommends mastering emotion, while Piano shows an adult man who cannot master his, and gives way to tears at a memory of childhood.',
          'Analyse Kipling’s language of control: the verbs keep, trust, wait, force and hold on, and the demand in line 20 to “never breathe a word about your loss”.',
          'Analyse how Kipling’s form enacts control: the single sentence, the regular ABABCDCD rhyme scheme, and the steady alternation of lines ending unstressed and stressed.',
          'Set against these the moments in Piano where the speaker resists his feelings and then yields to them, and compare how its form handles that change.',
          'Weigh the two views. Is Kipling’s control strength or suppression, and is Lawrence’s speaker weak or honest? Argue for one reading of each and acknowledge the other.',
        ],
      },
    ],
    tips: [
      'Analyse the sentence, not only the words. The whole poem is one sentence: thirteen lines begin with If, and the main clause does not arrive until line 31. Saying what that delay does, making the son and the reader wait and endure, is structural analysis that many answers miss.',
      'Be precise about rhythm. Every odd-numbered line ends on an unstressed syllable (“about you”, “waiting”, “master”) and every even-numbered line on a stress, which gives the poem its steady, swinging regularity. Vague remarks about the poem’s music earn little: the January 2020 examiners’ report singled them out as underdeveloped.',
      'The same report found answers on If- stronger than those on the Thomas poem, with many commenting on its contrasts, on the personification of Triumph and Disaster, and on how “my son” gives the poem a personal message of advice. It also criticised answers that simply named a term, gave an example and added only a very brief comment. Choose fewer examples and develop each one.',
      'Compare throughout. That report also found many candidates wrote about each poem separately and compared them only in the introduction and conclusion. Make every paragraph about both poems.',
      'Keep context brief. The specification describes Section B as testing the analysis of language, form and structure and the links between poems; context is not among the skills it lists for this section, and the January 2020 examiners’ report says context is not assessed there, though it may be included when it supports a relevant point. Jameson, John Kipling and the Empire are worth a clause only when they sharpen a point about the words.',
      'Write about the speaker, not Kipling. The poem never says I or me, and its only first-person word is “my”, in the last line. A father whose identity is revealed late is more accurate, and more interesting, than an assumption that this is Kipling talking to John.',
      'Have an opinion about the ideal. Is it admirable self-command, or an impossible standard that asks a man to hide his feelings? The strongest answers argue one view and show they have weighed the other, using lines 20 and 32 as evidence.',
      'The anthology is provided in the exam, so give line numbers and quote short, exact phrases rather than whole lines. The papers checked for this guide (January 2020, May 2023 and May 2024) all advised spending 40 minutes on the Section B question.',
    ],
  },

  modelAnswer: {
    question:
      'Compare the ways the writers present people giving advice to others in If- and Do not go gentle into that good night. (Pearson 4ET1/01, January 2020)',
    paragraph:
      'Both poets delay naming the person being advised until the final stanza, but they use the delay to opposite ends. Kipling builds his advice as one long conditional sentence: thirteen of his thirty-two lines begin with “If”, and the main clause does not arrive until line 31, so the son, like the reader, must wait and “not be tired by waiting” before the reward is granted. The conditions turn advice into a series of tests, and the balanced clauses within them, such as “dream — and not make dreams your master”, teach restraint as much as ambition. Only in the last line does the impersonal voice become a parent’s, with “my son”, so the whole poem is reread as a father’s gift, calm and certain because it speaks from experience. Thomas also withholds his address until the final stanza, where the speaker names his father for the first time, but his advice comes as direct commands rather than conditions, and the two refrains of the villanelle return again and again, as if repetition itself could make his father obey. Where Kipling’s regular stanzas and steady rhymes model the self-control he recommends, Thomas’s circling form enacts a son’s desperation. The direction of the advice matters as much as its content: Kipling’s father instructs from above, while Thomas’s son pleads, reversing the usual order of the generations, and that reversal is why one poem sounds like a lesson and the other like a plea.',
    commentary: [
      'It opens with a comparative point that answers the question directly, and the point is about how the advice is given, not only what it says.',
      'It treats structure as meaning: the counted lines, the delayed main clause and the late naming of the son are each tied to an effect on the reader.',
      'Its quotations from If- are short, exact and embedded in the sentence, and each is followed by what it does rather than left to speak for itself.',
      'The comparison with Thomas runs through the paragraph instead of being saved for the end, which is what the January 2020 examiners’ report asked for, and it describes the villanelle’s form precisely without needing long quotation.',
      'It closes with a judgement about the relationship between the generations, a whole-poem idea that goes beyond listing techniques.',
    ],
  },

  timeline: [
    {
      where: 'Stanza 1, lines 1-8',
      title: 'Keeping your head',
      summary:
        'The first tests are about temper. While others panic and blame him, the son must stay calm, trust himself without dismissing their doubts, wait patiently, and answer lies and hatred without lying or hating in return, all without seeming superior.',
      setting: 'A crisis in which everyone else is losing control',
      who: ['The son', 'Other people', 'The speaker'],
      quote: 'If you can keep your head when all about you',
      themes: [
        'Self-control and stoicism',
        'Balance and moderation',
        'Integrity among other people',
      ],
      tension: 2,
      significance:
        'It sets the pattern for the whole poem: a condition beginning with If, and a virtue held in check by a limit.',
    },
    {
      where: 'Stanza 2, lines 9-12',
      title: 'Two impostors',
      summary:
        'The tests turn inward. The son may dream and think, as long as his dreams do not rule him and thinking does not become an end in itself, and he must meet success and failure, personified as Triumph and Disaster, with the same calm, because neither is what it pretends to be.',
      setting: 'The inner life: ambitions, ideas, success and failure',
      who: ['The son'],
      quote: 'And treat those two impostors just the same',
      themes: ['Self-control and stoicism', 'Balance and moderation'],
      tension: 2,
      significance:
        'Lines 11 and 12 state the poem’s central idea: that success and failure are both false guides to a person’s worth.',
    },
    {
      where: 'Stanza 2, lines 13-16',
      title: 'Broken and rebuilt',
      summary:
        'Now the son’s work is damaged. His honest words are twisted by knaves to trap fools, he must watch the things he gave his life to lie broken, and he must bend down and rebuild them with worn-out tools.',
      setting: 'The son’s life’s work, in ruins',
      who: ['The son', 'Other people'],
      quote: 'And stoop and build ’em up with worn-out tools',
      themes: ['Resilience and endurance', 'Integrity among other people'],
      tension: 3,
      significance:
        'Courage is shown as patient, humble repair rather than heroic action, which sets the tone for the losses to come.',
    },
    {
      where: 'Stanza 3, lines 17-20',
      title: 'The single throw',
      summary:
        'The son must be able to stake everything he has won on one throw of a simple gambling game, lose it all, start again from nothing, and never say a word about what he has lost.',
      setting: 'A gamble on a game of pitch-and-toss',
      who: ['The son'],
      quote: 'And risk it on one turn of pitch-and-toss',
      themes: ['Resilience and endurance', 'Self-control and stoicism'],
      tension: 4,
      significance:
        'The test is not the bet but the loss, and the silence afterwards is the poem’s hardest demand on feeling.',
    },
    {
      where: 'Stanza 3, lines 21-24',
      title: 'Hold on',
      summary:
        'The body reaches its limit. The son must force his heart, nerve and sinew to keep working after they are spent, and hold on when nothing is left in him except the Will, which tells them to hold on.',
      setting: 'Complete exhaustion of body and nerve',
      who: ['The son'],
      quote: 'And so hold on when there is nothing in you',
      themes: ['Resilience and endurance'],
      tension: 5,
      significance:
        'The climax of endurance, and the only direct speech in the poem, spoken by the Will inside the son.',
    },
    {
      where: 'Stanza 4, lines 25-30',
      title: 'Crowds, Kings and the unforgiving minute',
      summary:
        'The last tests are social. The son must stay himself among crowds and Kings, be hurt by neither enemies nor friends, value everyone but no one too much, and fill every minute with effort, like a runner covering distance.',
      setting: 'Public life, from ordinary crowds to royalty',
      who: ['The son', 'Other people'],
      quote: 'If you can fill the unforgiving minute',
      themes: ['Integrity among other people', 'Balance and moderation'],
      tension: 3,
      significance:
        'The poem widens from private hardship to a whole life lived in public, and time itself becomes a judge.',
    },
    {
      where: 'Stanza 4, lines 31-32',
      title: 'Yours is the Earth',
      summary:
        'The main clause finally arrives. If the son can do all of this, the Earth and everything in it will be his, and, more important still, he will be a Man, which is the moment the speaker at last calls him my son.',
      setting: 'The promised future',
      who: ['The speaker', 'The son'],
      quote: 'Yours is the Earth and everything that’s in it',
      themes: ['Manhood and a father’s advice'],
      tension: 4,
      significance:
        'The reward and the relationship are revealed together, so the whole poem is reread as a father’s advice.',
    },
  ],

  relationships: [
    {
      from: 'The speaker',
      to: 'The son',
      kind: 'father and son; adviser and advised',
      note: 'Entirely one-way: the speaker talks for thirty-two lines and the son never answers. It becomes personal only in the last two words, which turn a list of rules into a father’s hope.',
    },
    {
      from: 'The son',
      to: 'Other people',
      kind: 'the individual and the crowd',
      note: 'He must live among them without copying their faults or despising them: making allowance for their doubt (line 4), refusing to lie or hate in return (lines 6 and 7), and staying the same with crowds and Kings (lines 25 and 26).',
    },
    {
      from: 'The speaker',
      to: 'Other people',
      kind: 'a wary observer',
      note: 'The speaker’s world is full of knaves and fools (line 14) and people who panic and blame. His advice assumes others will often be hostile, and teaches the son to expect it without becoming like them.',
    },
  ],

  compareWith: [
    {
      title: 'Do not go gentle into that good night by Dylan Thomas',
      href: '/resources/revision-notes/do-not-go-gentle-into-that-good-night',
      reason:
        'Set with If- in January 2020 on people giving advice: a son pleads with his dying father where Kipling’s father counsels calm, and both poems wait until the final stanza to name the person they address.',
    },
    {
      title: 'Prayer Before Birth by Louis MacNeice',
      href: '/revision/texts/prayer-before-birth',
      reason:
        'Set with If- in May 2023 on thoughts about life: an unborn child’s repeated pleas for protection from the world answer Kipling’s confident, repeated conditions for mastering it.',
    },
    {
      title: 'Poem at Thirty-Nine by Alice Walker',
      href: '/revision/texts/poem-at-thirty-nine',
      reason:
        'The other side of a parent’s advice: an adult daughter remembering what her father taught her, where If- is the parent speaking before the lessons have been learned.',
    },
    {
      title: 'Piano by D H Lawrence',
      href: '/igcse/edexcel/poetry/piano',
      reason:
        'A grown man who gives way to tears at a memory of childhood, the opposite of the self-command If- demands, which makes the two a sharp pairing on masculinity and emotion.',
    },
  ],

  contentGuidance: ['mortality', 'colonialism'],

  quotesFromElsewhere: [
    // Kipling's autobiography, Something of Myself (1937), chapter VII (p. 146
    // in the edition the Kipling Society cites): "They were drawn from
    // Jameson's character, and contained counsels of perfection most easy to
    // give." Checked on 26 September 2026 against two copies of the chapter's
    // text (telelib and the Kipling Society) as well as the Readers' Guide.
    // Only the three words are quoted; the rest is paraphrased.
    'counsels of perfection',
  ],

  sources: [
    {
      label:
        'Pearson Edexcel International GCSE English Anthology, Issue 8, February 2026, page 51 (PDF page 57): the prescribed printing. Read on 25 September 2026 for all 32 lines, the line numbering (every fifth line), the four stanza breaks (measured from the line spacing), the punctuation, and the word count. Every quotation in this guide was checked against it. Pages 52, 57, 62 and 69 were read to confirm the facts stated about the comparison poems, which are not quoted',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Language%20A/2016/Teaching%20and%20learning%20materials/9781446931080-int-gcse-eng-ant.pdf',
    },
    {
      label:
        'Rewards and Fairies by Rudyard Kipling (1910), Project Gutenberg eBook #556: the edition held as a byte copy in src/data/full-texts/if.ts, against which every quotation and passage was also checked; its contents show the poem following the story Brother Square-Toes',
      url: 'https://www.gutenberg.org/files/556/556-h/556-h.htm',
    },
    {
      label:
        'Pearson Edexcel International GCSE in English Literature (4ET1) specification, Issue 3, August 2025: Section B is one essay question from a choice of two, comparing two poems from Part 3 of the anthology; the examination is closed book but the anthology poems are provided; Section B tests language, form and structure and links between texts',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/Specification%20and%20sample%20assessments/international-gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 question paper, 7 January 2020 (P59788A): Question 2, comparing people giving advice in If- and Do not go gentle into that good night; 40 minutes advised for Section B',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/Edexcel-IGCSE/New-Spec-Paper-1/QP/January%202020%20QP.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 Examiners’ Report, January 2020: on Question 2, stronger responses to If- than to the Thomas poem; comments on contrasts, the personification of Triumph and Disaster and the use of my son; weaknesses were fragmented coverage, term-spotting, vague remarks about musicality, and comparison left to the introduction and conclusion; and, for Section B generally, that context is not assessed in that part of the paper but may be included if relevant',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International%20GCSE/English%20Literature/2016/exam-materials/4ET1_01_pef_20200305.pdf',
    },
    {
      label:
        'Pearson 4ET1/01R question paper, 17 May 2023 (P72861A): Question 2, comparing thoughts about life in If- and Prayer Before Birth; 40 minutes advised',
      url: 'https://revisionworld.com/sites/default/files/revisionworld/documents/PEL334et1-01r-que-20230518.pdf',
    },
    {
      label:
        'Pearson 4ET1/01 question paper, 13 May 2024 (P75723A): the two Section B question shapes (two named poems, or one named poem and one of the candidate’s choice) and the standard instruction to refer to language, form and structure; 40 minutes advised',
      url: 'https://qualifications.pearson.com/content/dam/pdf/International-GCSE/English-Literature/2016/Exam-materials/4et1-01-que-20240514.pdf',
    },
    {
      label:
        'The Kipling Society, Readers’ Guide to If- (notes by Donald Mackenzie, with additions by Alastair Wilson): published in Rewards and Fairies (1910) after the story Brother Square-Toes, in which George Washington holds out against public opinion; Jameson (1853-1917) led the raid of 1895 against the Transvaal and was tried and imprisoned; Something of Myself p. 146, that the verses were drawn from Jameson’s character and contained counsels of perfection most easy to give',
      url: 'https://www.kiplingsociety.co.uk/readers-guide/rg_if1.htm',
    },
    {
      label:
        'Rudyard Kipling, Something of Myself (1937), chapter VII, The Very-Own House: the sentence saying the verses were drawn from Jameson’s character and contained counsels of perfection most easy to give, read in the chapter’s own text. Also at https://www.kiplingsociety.co.uk/tale/something-of-myself-7.htm',
      url: 'https://www.telelib.com/authors/K/KiplingRudyard/prose/SomethingOfMyself/myself_chap_7.html',
    },
    {
      label:
        'Wikipedia, Rewards and Fairies: a historical fantasy book published in 1910, a follow-up to Puck of Pook’s Hill; in Brother Square-Toes, set in Philadelphia in 1793, Washington says he will not fight with the French against Britain',
      url: 'https://en.wikipedia.org/wiki/Rewards_and_Fairies',
    },
    {
      label:
        'Wikipedia, Jameson Raid: 29 December 1895 to 2 January 1896, led by Leander Starr Jameson into the South African Republic (Transvaal); it failed, Jameson surrendered and was tried in London and imprisoned',
      url: 'https://en.wikipedia.org/wiki/Jameson_Raid',
    },
    {
      label:
        'Commonwealth War Graves Commission, Lieutenant John Kipling: born 17 August 1897; commissioned in the Irish Guards after his father used his connection with Lord Roberts, poor eyesight having led to his rejection; died 27 September 1915 in the Battle of Loos, aged 18',
      url: 'https://www.cwgc.org/stories/stories/lieutenant-john-kipling/',
    },
    {
      label: 'Wikipedia, Rudyard Kipling: born 30 December 1865 in Bombay; died 18 January 1936',
      url: 'https://en.wikipedia.org/wiki/Rudyard_Kipling',
    },
    {
      label:
        'Wikipedia, If-: consulted for publication and reception. It describes the poem as paternal advice to John, which this guide treats as a reading rather than a fact, and dates the BBC favourite-poem poll to 1996 where the page above says 1995, so the poll is not mentioned here',
      url: 'https://en.wikipedia.org/wiki/If%E2%80%94',
    },
    {
      label:
        'Stanford Encyclopedia of Philosophy, Stoicism: founded by Zeno of Citium in Athens around 300 BCE; Seneca, Epictetus and Marcus Aurelius; wealth and health are not good, only virtue is good',
      url: 'https://plato.stanford.edu/entries/stoicism/',
    },
    {
      label:
        'Wiktionary, keep one’s head: to remain calm, level-headed, in a situation likely to cause distress',
      url: 'https://en.wiktionary.org/wiki/keep_one%27s_head',
    },
    {
      label:
        'Wiktionary, allowance: the taking into account of mitigating circumstances (to make allowance for)',
      url: 'https://en.wiktionary.org/wiki/allowance',
    },
    {
      label:
        'Wiktionary, impostor: someone who attempts to deceive by using an assumed name or identity',
      url: 'https://en.wiktionary.org/wiki/impostor',
    },
    {
      label:
        'Wiktionary, knave: (archaic) a boy, a servant; (dated) a tricky, deceitful fellow; the jack in cards',
      url: 'https://en.wiktionary.org/wiki/knave',
    },
    {
      label:
        'Wiktionary, pitch and toss: a coin game in which the thrower nearest a mark tosses all the coins and keeps those landing heads up; figuratively, trusting to luck',
      url: 'https://en.wiktionary.org/wiki/pitch_and_toss',
    },
    {
      label: 'Wiktionary, sinew: a tendon; figuratively, muscular power, nerve, vigour',
      url: 'https://en.wiktionary.org/wiki/sinew',
    },
    {
      label: 'Wiktionary, serve the turn: (dated) to suffice for one’s immediate purpose or need',
      url: 'https://en.wiktionary.org/wiki/serve_the_turn',
    },
    {
      label: 'Wiktionary, virtue: good moral conduct, accordance with moral principles',
      url: 'https://en.wiktionary.org/wiki/virtue',
    },
    {
      label:
        'Wiktionary, common touch: rapport with ordinary people, usually in a celebrity or leader; the entry quotes If-',
      url: 'https://en.wiktionary.org/wiki/common_touch',
    },
    {
      label:
        'Wiktionary, unforgiving: unwilling to forgive; having no allowance for error or weakness',
      url: 'https://en.wiktionary.org/wiki/unforgiving',
    },
  ],
}
