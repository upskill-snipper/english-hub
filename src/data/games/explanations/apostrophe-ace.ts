import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Apostrophe Ace: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/apostrophe-ace.ts). Written with AI on 16 October 2026
 * and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 *
 * Rebuilt for depth on 24 October 2026: an explanation for each of the 201
 * questions, the 24 kept rewritten for their new options and 177 new, among
 * them 89 real sentences from books out of UK copyright, several decisions in
 * one sentence, owners decided by the sentence or a prompt, two owners together
 * or apart, possessive pronouns and verbs. No explanation quotes another
 * question's sentence. Written with AI and checked against each question, as
 * the founder decided (src/lib/games/explanations/types.ts).
 *
 * Checked on 31 October 2026 by a second reader, as the founder decided: 44
 * explanations rewritten. Twenty follow questions whose options changed (see
 * the bank's docblock). Eighteen corrected a fact or a claim: who speaks, or
 * what is happening, around a real line (Pip and the tar-water brandy, Holmes's
 * poisoned thorns, Jonathan Small and the guards, Lydia and the ball, Wemmick's
 * hint, the Ghost's jaw and its one night of life, why the ribbons burn, who
 * announces Boxer's banquet), and a tip that a number before a plural never
 * calls for an apostrophe, which the bank's own "my two brothers' bedrooms"
 * contradicts. Six time phrases and attributive plurals ("two weeks' notice",
 * "the teachers' meeting") now give the reason schools teach the apostrophe,
 * without calling the form some style guides accept a plain mistake.
 */
export const EXPLANATIONS: GameExplanations = {
  "It's raining, so we can't go out.": {
    why: "Both words are contractions. 'It's' is short for 'it is', with the apostrophe in place of the missing 'i'. 'Can't' is short for 'cannot', with the apostrophe in place of the missing 'no'.",
    not: {
      'Its raining, so we cant go out.':
        "'Its' here means 'it is' and 'cant' means 'cannot', so both need an apostrophe for the missing letters.",
      "Its raining, so we can't go out.":
        "'Can't' is right, but 'Its' stands for 'it is' here, so it needs an apostrophe: 'It's'.",
      "It's raining, so we ca'nt go out.":
        "'It's' is right, but the apostrophe in 'can't' goes where the letters 'no' are missing, between 'n' and 't'.",
    },
    more: "'Can't' is a special case: it is short for 'cannot', written as one word, and the apostrophe replaces 'no'.",
    tip: "Do not rely on a spell checker. 'Its' and 'cant' are real words, so it may not flag them.",
  },
  "They won't be here until we're ready.": {
    why: "'Won't' is short for 'will not' and 'we're' is short for 'we are'. Both need an apostrophe where letters are missing. Plain 'were' is a different word, the past tense of 'are'.",
    not: {
      'They wont be here until were ready.':
        "Both contractions have lost their apostrophes. 'Won't' is 'will not' and 'we're' is 'we are'.",
      "They wo'nt be here until we're ready.":
        "The apostrophe in 'won't' goes where the 'o' of 'not' is missing, between 'n' and 't'.",
      "They won't be here until were ready.":
        "'Won't' is right, but 'were' is the past tense of 'are'. Here the sentence means 'we are ready', so it needs 'we're'.",
    },
    more: "'Won't' is irregular: it comes from an old form, 'woll not', not from 'willn't'. Its apostrophe still marks the missing 'o' of 'not'.",
    tip: "Learn the irregular ones by heart: won't (will not), can't (cannot), shan't (shall not).",
  },
  "She's already finished, hasn't she?": {
    why: "'She's' is short for 'she has' and 'hasn't' for 'has not'. Each needs an apostrophe where the letters are missing.",
    not: {
      'Shes already finished, hasnt she?':
        "Both contractions have lost their apostrophes: 'She's' is 'she has' and 'hasn't' is 'has not'.",
      "Shes already finished, hasn't she?":
        "'Hasn't' is right, but 'Shes' is short for 'she has' and needs an apostrophe: 'She's'.",
      "She's already finished, has'nt she?":
        "'She's' is right, but the apostrophe in 'hasn't' goes where the 'o' of 'not' is missing, between 'n' and 't'.",
    },
    more: "The ending 's can stand for 'is' or 'has'. The tag 'hasn't she?' shows that it means 'has' here; in 'She's tired' it means 'is'.",
    tip: "To decide what 's stands for, try 'is' and then 'has'. Use the one that fits the next word.",
  },
  "I'd rather wait until they're back with the tickets.": {
    why: "'I'd' is short for 'I would' and 'they're' for 'they are': 'until they are back'. 'Tickets' is a plain plural, more than one ticket, so it takes no apostrophe.",
    not: {
      "I'd rather wait until their back with the ticket's.":
        "Two slips: 'their' shows belonging, but 'they are back' needs 'they're', and the plain plural 'tickets' takes no apostrophe.",
      "I'd rather wait until their back with the tickets.":
        "'Tickets' is right, but 'their' shows belonging, as in 'their bags'. 'Until they are back' needs 'they're'.",
      "I'd rather wait until they're back with the ticket's.":
        "'They're' is right, but 'tickets' only means more than one ticket. It owns nothing, so it takes no apostrophe.",
    },
    more: "The ending 'd can stand for 'would' or 'had'. 'I'd rather' means 'I would rather', but 'I'd finished' means 'I had finished'.",
    tip: "Test 'they're' by saying 'they are'. If it fits, keep the apostrophe; if the word shows belonging, write 'their'.",
  },
  "You'll be fine once you've practised the songs.": {
    why: "'You'll' is short for 'you will' and 'you've' for 'you have', so each needs an apostrophe for the missing letters. 'Songs' is a plain plural and takes none.",
    not: {
      "Youll be fine once you've practised the songs.":
        "'Songs' is right, but 'Youll' is short for 'you will' and needs an apostrophe: 'You'll'.",
      "You'll be fine once you've practised the song's.":
        "The contractions are right, but 'songs' only means more than one song. It owns nothing, so it takes no apostrophe.",
      "Youll be fine once you've practised the song's.":
        "Two slips: 'You'll' needs its apostrophe for 'you will', and the plain plural 'songs' takes none.",
    },
    more: "Contractions with 'will' and 'have' work with most pronouns: I'll, she'll, we've, they've. After he, she or it, 'has' becomes 's instead: she's gone.",
    tip: "'Practised' is the British spelling of the verb. In British English, 'practise' is the verb and 'practice' the noun.",
  },
  "There's no way he'll agree to those rules.": {
    why: "'There's' is short for 'there is', with the apostrophe for the dropped 'i', and 'he'll' for 'he will'. 'Rules' is a plain plural, more than one rule, so it takes no apostrophe.",
    not: {
      "Theres no way he'll agree to those rule's.":
        "Two slips: 'There's' needs its apostrophe for 'there is', and the plain plural 'rules' takes none.",
      "Theres no way he'll agree to those rules.":
        "'Rules' is right, but 'Theres' is short for 'there is' and needs an apostrophe: 'There's'.",
      "There's no way he'll agree to those rule's.":
        "'There's' is right, but 'rules' only means more than one rule. It owns nothing, so it takes no apostrophe.",
    },
    more: "Some contractions become other words without the apostrophe: he'll, she'll, we'll and I'll. A spell checker may not catch them.",
    tip: 'When you proofread, check every word ending in s: is it a contraction, a possessive or a plain plural?',
  },
  "I'm sure that wasn't my fault.": {
    why: "'I'm' is short for 'I am' and 'wasn't' is short for 'was not'. The apostrophe in 'I'm' replaces the 'a', and in 'wasn't' it replaces the 'o' of 'not'.",
    not: {
      'Im sure that wasnt my fault.':
        "Both contractions have lost their apostrophes: 'I'm' is 'I am' and 'wasn't' is 'was not'.",
      "Im sure that wasn't my fault.":
        "'Wasn't' is right, but 'Im' is short for 'I am' and needs an apostrophe: 'I'm'.",
      "I'm sure that was'nt my fault.":
        "'I'm' is right, but the apostrophe in 'wasn't' goes where the 'o' of 'not' is missing, between 'n' and 't'.",
    },
    more: "Most contractions with 'not' follow one pattern: wasn't, weren't, isn't, aren't, doesn't. The apostrophe sits where the 'o' was dropped.",
    tip: "In a formal essay, avoid contractions: write 'I am' and 'was not' in full.",
  },
  "Scrooge and he were partners for I don't know how many years.": {
    why: "'Don't' is short for 'do not', and its apostrophe marks the missing 'o'. 'Years' simply means more than one year, so it takes no apostrophe. The narrator is talking about Scrooge and his dead partner, Marley.",
    not: {
      'Scrooge and he were partners for I dont know how many years.':
        "'Dont' is short for 'do not', so it needs an apostrophe where the 'o' of 'not' is missing.",
      "Scrooge and he were partners for I don't know how many year's.":
        "'Don't' is right, but 'years' just means more than one year. A plain plural takes no apostrophe.",
      "Scrooge and he were partners for I dont know how many year's.":
        "Two slips: 'don't' needs its apostrophe, and the plain plural 'years' takes none.",
    },
    more: 'An apostrophe never makes a plural. It marks missing letters, as in "don\'t", or shows belonging, as in "Marley\'s".',
    tip: "When you add an 's' to make a plural, ask whether anything is owned. If not, leave the apostrophe out.",
  },
  "I don't make merry myself at Christmas and I can't afford to make idle people merry.": {
    why: "'Don't' is short for 'do not' and 'can't' is short for 'cannot'. In both, the apostrophe sits exactly where letters were taken out: the 'o' of 'not', and the 'no' of 'cannot'.",
    not: {
      "I do'nt make merry myself at Christmas and I can't afford to make idle people merry.":
        "The apostrophe in 'don't' goes where the 'o' of 'not' is missing, between 'n' and 't'.",
      "I don't make merry myself at Christmas and I cant afford to make idle people merry.":
        "'Don't' is right, but 'cant' is short for 'cannot' and needs an apostrophe.",
      "I do'nt make merry myself at Christmas and I cant afford to make idle people merry.":
        "Two slips: the apostrophe in 'don't' is misplaced, and 'can't' has lost its apostrophe.",
    },
    more: 'Scrooge says this to the gentlemen collecting for the poor. The contractions make his refusal sound blunt and quick.',
    tip: "Place the apostrophe where the missing letters were, not where the two words meet: do + n't, not do' + nt.",
  },
  "You wouldn't believe how those two fellows went at it!": {
    why: "'Wouldn't' is short for 'would not', with the apostrophe in place of the missing 'o'. 'Fellows' means two men and owns nothing, so it is a plain plural with no apostrophe.",
    not: {
      'You wouldnt believe how those two fellows went at it!':
        "'Wouldnt' is short for 'would not', so it needs an apostrophe where the 'o' is missing.",
      "You wouldn't believe how those two fellow's went at it!":
        "'Wouldn't' is right, but 'fellows' only means more than one fellow. A plain plural takes no apostrophe.",
      "You wouldnt believe how those two fellow's went at it!":
        "Two slips: 'wouldn't' needs its apostrophe, and the plain plural 'fellows' takes none.",
    },
    more: "The narrator is describing young Scrooge and his fellow apprentice, Dick Wilkins, clearing Fezziwig's warehouse for the Christmas party, as old Scrooge watches.",
    tip: 'Check every word ending in s: is it a plural, a possessive or a contraction? Only the last two take an apostrophe.',
  },
  "We've got to learn before we've got a chance.": {
    why: "Both 'we've' are short for 'we have', and each needs an apostrophe where 'ha' has been dropped. The same contraction needs the same apostrophe every time it appears.",
    not: {
      "Weve got to learn before we've got a chance.":
        "The second 'we've' is right, but the first has lost its apostrophe. Both are short for 'we have'.",
      "We've got to learn before weve got a chance.":
        "The first 'We've' is right, but the second has lost its apostrophe. Both stand for 'we have'.",
      'Weve got to learn before weve got a chance.':
        "Both are short for 'we have', so each needs an apostrophe in place of 'ha'.",
    },
    more: "'Have' shortens to 've after I, you, we and they: I've, you've, we've, they've.",
    tip: 'When a contraction appears twice in a sentence, check both. It is easy to fix one and miss the other.',
  },
  "We could've caught the earlier train if we'd packed our bags sooner.": {
    why: "'Could've' is short for 'could have' and 'we'd' for 'we had': 'if we had packed'. 'Bags' is a plain plural, more than one bag, so it takes no apostrophe.",
    not: {
      "We couldve caught the earlier train if we'd packed our bags sooner.":
        "'Bags' is right, but 'couldve' is short for 'could have', so it needs an apostrophe in place of 'ha': 'could've'.",
      "We could've caught the earlier train if we'd packed our bag's sooner.":
        "The contractions are right, but 'bags' only means more than one bag. It owns nothing, so it takes no apostrophe.",
      "We couldve caught the earlier train if we'd packed our bag's sooner.":
        "Two slips: 'could've' needs its apostrophe, and the plain plural 'bags' takes none.",
    },
    more: "Because 'could've' sounds like 'could of', people sometimes write that. It is always wrong: the word is 'have'.",
    tip: "Never write 'could of', 'should of' or 'would of'. Write 'could have', or 'could've' in speech.",
  },
  "Aren't you glad you didn't go?": {
    why: "'Aren't' is short for 'are not' and 'didn't' for 'did not'. In both, the apostrophe replaces the 'o' of 'not', so it sits just before the 't'.",
    not: {
      "Arent you glad you didn't go?":
        "'Arent' is short for 'are not', so it needs an apostrophe before the 't'.",
      "Aren't you glad you did'nt go?":
        "'Aren't' is right, but the apostrophe in 'didn't' goes where the 'o' is missing, between 'n' and 't'.",
      "Arent you glad you did'nt go?":
        "Two slips: 'aren't' needs its apostrophe, and the one in 'didn't' is in the wrong place.",
    },
    more: "In 'n't' contractions, the 'n' stays and the 'o' goes: are not, aren't; did not, didn't.",
    tip: "Write the full words, cross out the 'o' of 'not', and put the apostrophe in its place.",
  },
  "Don't worry, we'll save you a seat.": {
    why: "'Don't' is short for 'do not' and 'we'll' for 'we will'. Without its apostrophe, 'we'll' turns into 'well', so the apostrophe matters for meaning.",
    not: {
      "Do'nt worry, we'll save you a seat.":
        "'We'll' is right, but the apostrophe in 'don't' goes where the 'o' of 'not' is missing, between 'n' and 't'.",
      "Don't worry, well save you a seat.":
        "'Don't' is right, but without its apostrophe 'we'll', short for 'we will', becomes 'well', another word.",
      "Do'nt worry, well save you a seat.":
        "Two slips: the apostrophe in 'don't' belongs between 'n' and 't', and 'we'll' needs one too, or it reads as 'well'.",
    },
    more: "Several contractions make other words without the apostrophe: we'll and well, she'll and shell, we'd and wed, I'll and ill.",
    tip: 'Read such words twice when you proofread. A spell checker will not catch them.',
  },
  "He won't admit that he's wrong.": {
    why: "'Won't' is short for 'will not', with the apostrophe just before the 't'. 'He's' is short for 'he is'. Both are contractions, so both need apostrophes.",
    not: {
      "He wo'nt admit that he's wrong.":
        "The apostrophe in 'won't' goes where the 'o' of 'not' is missing, between 'n' and 't'.",
      "He won't admit that hes wrong.":
        "'Won't' is right, but 'hes' is short for 'he is' and needs an apostrophe: 'he's'.",
      "He wo'nt admit that hes wrong.":
        "Two slips: the apostrophe in 'won't' is misplaced, and 'he's' has lost its apostrophe.",
    },
    more: "'Won't' is an odd one: the 'will' changes to 'wo'. The apostrophe still goes where the 'o' of 'not' was.",
    tip: "Learn 'won't' and 'can't' by sight: they do not split neatly into two words.",
  },
  "I couldn't keep my eyes off him.": {
    why: "'Couldn't' is short for 'could not', with the apostrophe just before the 't'. 'Eyes' is a plain plural, more than one eye, so it takes no apostrophe.",
    not: {
      "I could'nt keep my eyes off him.":
        "The apostrophe in 'couldn't' goes where the 'o' of 'not' is missing, between 'n' and 't'.",
      "I couldn't keep my eye's off him.":
        "'Couldn't' is right, but 'eyes' is a plain plural. It owns nothing, so it takes no apostrophe.",
      "I could'nt keep my eye's off him.":
        "Two slips: the apostrophe in 'couldn't' is misplaced, and the plain plural 'eyes' takes none.",
    },
    more: 'Pip watches Uncle Pumblechook drink the brandy that Pip secretly topped up with tar-water. The plain words show his nerves.',
    tip: "If 'could not' fits, write 'couldn't', with the apostrophe exactly where the 'o' was.",
  },
  "There's the window where I saw the wandering Spirits!": {
    why: "'There's' is short for 'there is', with the apostrophe in place of the 'i'. 'Spirits' is a plain plural, the ghosts he saw, so it takes no apostrophe.",
    not: {
      'Theres the window where I saw the wandering Spirits!':
        "'Theres' is short for 'there is', so it needs an apostrophe for the missing 'i'.",
      "There's the window where I saw the wandering Spirit's!":
        "'There's' is right, but 'Spirits' is a plain plural and owns nothing.",
      "Theres the window where I saw the wandering Spirit's!":
        "Two slips: 'There's' needs its apostrophe, and the plain plural 'Spirits' takes none.",
    },
    more: 'On Christmas morning Scrooge rushes round his room, delighted to find it all still there.',
    tip: 'A capital letter, as in Spirits, does not change the plural rule: no apostrophe.',
  },
  "He's going to ask your pals, too.": {
    why: "'He's' is short for 'he is', with the apostrophe for the missing 'i'. 'Pals', meaning friends, is a plain plural that owns nothing, so it takes no apostrophe.",
    not: {
      'Hes going to ask your pals, too.':
        "'Hes' is short for 'he is', so it needs an apostrophe: 'He's'.",
      "He's going to ask your pal's, too.":
        "'He's' is right, but 'pals' is a plain plural, more than one pal, and owns nothing.",
      "Hes going to ask your pal's, too.":
        "Two slips: 'He's' needs its apostrophe, and the plain plural 'pals' takes none.",
    },
    more: "Wemmick is telling Pip about Mr Jaggers's dinner invitation, in his friendly, slangy voice.",
    tip: "'He's', 'she's' and 'it's' can each mean 'is' or 'has'. Both need the apostrophe.",
  },
  "Wasn't it Kate's idea to camp by the river?": {
    why: "'Wasn't' is short for 'was not', with the apostrophe for the missing 'o'. The idea belongs to Kate, so her name takes an apostrophe and 's'.",
    not: {
      "Was'nt it Kate's idea to camp by the river?":
        "'Kate's' is right, but the apostrophe in 'wasn't' goes where the 'o' of 'not' is missing, between 'n' and 't'.",
      "Wasn't it Kates idea to camp by the river?":
        "The idea belongs to Kate, so her name needs an apostrophe and 's'.",
      "Was'nt it Kates idea to camp by the river?":
        "Two slips: the apostrophe in 'wasn't' belongs between 'n' and 't', and the idea is Kate's, so her name needs one too.",
    },
    more: 'One sentence can hold both kinds of apostrophe: one for missing letters, one for belonging.',
    tip: 'For each apostrophe, say which job it does: missing letters or belonging.',
  },
  "We're going to the park if it's sunny.": {
    why: "'We're' is short for 'we are' and 'it's' is short for 'it is'. Each needs an apostrophe in place of the missing letters. 'Were' and 'its' are different words with different meanings.",
    not: {
      "Were going to the park if its' sunny.":
        "Two slips: 'Were' needs to be 'We're' for 'we are', and 'its'' is not a word. 'If it is sunny' needs 'it's'.",
      "Were going to the park if it's sunny.":
        "'It's' is right, but 'Were' is the past tense of 'are'. 'We are going' needs 'We're'.",
      "We're going to the park if its' sunny.":
        "'We're' is right, but 'its'' is not a word. 'If it is sunny' needs 'it's', with the apostrophe where the 'i' is missing.",
    },
    more: "Pairs such as were and we're, its and it's, your and you're sound alike but mean different things. The version with the apostrophe always stands for two words.",
    tip: "Test a doubtful one by saying the full words. 'We are going to the park if it is sunny' works, so both need apostrophes.",
  },
  "Let's see who's bringing the snacks.": {
    why: "'Let's' is short for 'let us' and 'who's' for 'who is': 'who is bringing'. 'Snacks' is a plain plural, more than one snack, so it takes no apostrophe.",
    not: {
      "Let's see whose bringing the snacks.":
        "'Snacks' is right, but 'whose' asks about belonging. 'Who is bringing' needs 'who's'.",
      "Let's see who's bringing the snack's.":
        "'Who's' is right, but 'snacks' only means more than one snack. It owns nothing, so it takes no apostrophe.",
      "Let's see whose bringing the snack's.":
        "Two slips: 'who is bringing' needs 'who's', and the plain plural 'snacks' takes no apostrophe.",
    },
    more: "'Who's' is easy to mix up with 'whose', which asks about belonging: 'Whose bag is this?' 'Lets' without an apostrophe is a verb: 'She lets me borrow it.'",
    tip: "Test 'who's' with 'who is'. If 'who is' makes sense, the apostrophe is right.",
  },
  "Where's the report you're writing on earthquakes?": {
    why: "'Where's' is short for 'where is' and 'you're' for 'you are': 'the report you are writing'. 'Earthquakes' is a plain plural and takes no apostrophe.",
    not: {
      "Where's the report your writing on earthquakes?":
        "'Where's' is right, but 'your' shows belonging. 'You are writing' needs 'you're'.",
      "Where's the report you're writing on earthquake's?":
        "The contractions are right, but 'earthquakes' only means more than one earthquake. It owns nothing, so it takes no apostrophe.",
      "Where's the report your writing on earthquake's?":
        "Two slips: 'you are writing' needs 'you're', and the plain plural 'earthquakes' takes no apostrophe.",
    },
    more: "'Your writing' can be correct in another sentence: 'Your writing is neat.' There 'your' shows whose writing it is.",
    tip: "Before an '-ing' verb, 'you're' is almost always the word you want: you're writing, you're going.",
  },
  "They're certain that it's their turn now.": {
    why: "'They're' is short for 'they are' and 'it's' is short for 'it is'. 'Their' stays as it is: it shows belonging, 'their turn', and never takes an apostrophe.",
    not: {
      "They're certain that its they're turn now.":
        "'Its' here means 'it is' and needs an apostrophe, and the turn belongs to them, so it is 'their', not 'they're'.",
      "They're certain that its their turn now.":
        "'They're' is right, but 'its' here means 'it is': 'it is their turn'. It needs an apostrophe.",
      "Theyre certain that it's their turn now.":
        "'It's' is right, but 'Theyre' is short for 'they are' and needs an apostrophe: 'They're'.",
    },
    more: "Their, there and they're sound the same. 'Their' shows belonging, 'there' means a place, and 'they're' means 'they are'.",
    tip: "Test 'they're' with 'they are'. If it does not fit, you need 'their' or 'there'.",
  },
  "There was nothing they wouldn't have cleared away, or couldn't have cleared away, with old Fezziwig looking on.":
    {
      why: "'Wouldn't' is short for 'would not' and 'couldn't' for 'could not'. Each apostrophe stands where the 'o' of 'not' has been dropped, between the 'n' and the 't'.",
      not: {
        "There was nothing they would'nt have cleared away, or couldn't have cleared away, with old Fezziwig looking on.":
          "The apostrophe in 'wouldn't' goes where the 'o' of 'not' is missing, between 'n' and 't'.",
        "There was nothing they wouldn't have cleared away, or couldnt have cleared away, with old Fezziwig looking on.":
          "'Wouldn't' is right, but 'couldnt' is short for 'could not' and needs an apostrophe.",
        "There was nothing they would'nt have cleared away, or couldnt have cleared away, with old Fezziwig looking on.":
          "Two slips: the apostrophe in 'wouldn't' is misplaced, and 'couldn't' has lost its apostrophe.",
      },
      more: "Fezziwig's apprentices are clearing the warehouse for his Christmas party. The two contractions, one after the other, make the clearing sound quick and eager.",
      tip: "All the 'n't' contractions work the same way: wouldn't, couldn't, shouldn't. The apostrophe always comes just before the 't'.",
    },
  "If that's not high praise, tell me higher, and I'll use it.": {
    why: "'That's' is short for 'that is' and 'I'll' for 'I will'. Each needs an apostrophe in place of the missing letters; without one, 'I'll' would turn into 'ill'.",
    not: {
      "If thats not high praise, tell me higher, and I'll use it.":
        "'Thats' is short for 'that is', so it needs an apostrophe for the missing 'i'.",
      "If that's not high praise, tell me higher, and Ill use it.":
        "'That's' is right, but without its apostrophe 'I'll', short for 'I will', becomes 'ill', another word.",
      'If thats not high praise, tell me higher, and Ill use it.':
        "Two slips: 'that's' needs its apostrophe, and so does 'I'll', or it reads as 'ill'.",
    },
    more: 'The narrator speaks straight to the reader, praising Mrs Fezziwig. The contractions make it sound like friendly conversation.',
    tip: 'Contractions bring a chatty, spoken voice into writing. Keep them for dialogue and informal pieces.',
  },
  "Here, he takes it into his head to dislike us, and he won't come and dine with us.": {
    why: "'Won't' is short for 'will not' and needs an apostrophe. 'Takes' is a verb, what he does, and the 's' on a verb never takes an apostrophe. Fred is describing his uncle Scrooge.",
    not: {
      "Here, he take's it into his head to dislike us, and he won't come and dine with us.":
        "'Takes' is a verb, not a noun that owns something. A verb never takes an apostrophe before its 's'.",
      'Here, he takes it into his head to dislike us, and he wont come and dine with us.':
        "'Wont' is short for 'will not', so it needs an apostrophe: 'won't'.",
      "Here, he take's it into his head to dislike us, and he wont come and dine with us.":
        "Two slips: the verb 'takes' takes no apostrophe, and 'won't' needs one.",
    },
    more: 'Verbs ending in s, such as takes, runs and likes, are a common place for a stray apostrophe. Only nouns and some pronouns take a possessive apostrophe.',
    tip: "If the word is something someone does, no apostrophe goes before its 's'.",
  },
  "The Martians can't get out of their pit, can they?": {
    why: "'Can't' is short for 'cannot' and needs an apostrophe. 'Their' shows that the pit belongs to the Martians; it is a possessive word and takes no apostrophe.",
    not: {
      'The Martians cant get out of their pit, can they?':
        "'Cant' is short for 'cannot', so it needs an apostrophe for the missing letters.",
      "The Martians can't get out of there pit, can they?":
        "'Can't' is right, but 'there' means a place. The pit belongs to the Martians, so it is 'their pit'.",
      'The Martians cant get out of there pit, can they?':
        "Two slips: 'can't' needs its apostrophe, and the pit belongs to them, so it is 'their', not 'there'.",
    },
    more: 'A Londoner asks this, sure the Martians are trapped. Readers know already that they are not, which makes the confident question tense.',
    tip: "'Their' always comes before a noun it owns: their pit, their coats. 'There' points to a place.",
  },
  "And they've made their footing good and crippled the greatest power in the world.": {
    why: "'They've' is short for 'they have', with the apostrophe in place of 'ha'. 'Their' shows belonging, their footing, and takes no apostrophe. 'They're' would mean 'they are'.",
    not: {
      'And theyve made their footing good and crippled the greatest power in the world.':
        "'Theyve' is short for 'they have', so it needs an apostrophe: 'they've'.",
      "And they've made they're footing good and crippled the greatest power in the world.":
        "'They've' is right, but 'they're' means 'they are'. The footing belongs to them, so it is 'their footing'.",
      "And theyve made they're footing good and crippled the greatest power in the world.":
        "Two slips: 'they've' needs its apostrophe, and 'they're footing' would mean 'they are footing'.",
    },
    more: 'The artilleryman is describing how the Martians have beaten Britain. The contraction keeps his voice plain and spoken.',
    tip: "Test 'they're' by saying 'they are'. 'They are footing' makes no sense, so 'their' is right.",
  },
  "It never was a war, any more than there's war between man and ants.": {
    why: "'There's' is short for 'there is', with an apostrophe for the missing 'i'. 'Ants' is a plain plural: it means more than one ant and owns nothing, so it takes no apostrophe.",
    not: {
      'It never was a war, any more than theres war between man and ants.':
        "'Theres' is short for 'there is', so it needs an apostrophe for the missing 'i'.",
      "It never was a war, any more than there's war between man and ant's.":
        "'There's' is right, but 'ants' only means more than one ant. A plain plural takes no apostrophe.",
      "It never was a war, any more than theres war between man and ant's.":
        "Two slips: 'there's' needs its apostrophe, and the plain plural 'ants' takes none.",
    },
    more: 'The artilleryman compares people to ants and the Martians to men. Wells uses the image to make humans feel small.',
    tip: 'Plurals of animals and things never need an apostrophe: ants, dogs, apples.',
  },
  "I didn't know that it was you, you see, or just how you'd been buried.": {
    why: "'Didn't' is short for 'did not' and 'you'd' is short for 'you had' here: 'how you had been buried'. Each apostrophe marks the missing letters.",
    not: {
      "I did'nt know that it was you, you see, or just how you'd been buried.":
        "The apostrophe in 'didn't' goes where the 'o' of 'not' is missing, between 'n' and 't'.",
      "I didn't know that it was you, you see, or just how youd been buried.":
        "'Didn't' is right, but 'youd' is short for 'you had' and needs an apostrophe: 'you'd'.",
      "I did'nt know that it was you, you see, or just how youd been buried.":
        "Two slips: the apostrophe in 'didn't' is misplaced, and 'you'd' has lost its apostrophe.",
    },
    more: "The narrator has been trapped for days in a ruined house. 'You'd' stands for 'you had' because 'been' follows; in 'you'd like it', it would mean 'you would'.",
    tip: "If 'd is followed by 'been' or another past form, it means 'had'. If a plain verb follows, it means 'would'.",
  },
  "They'll wonder what people did before there were Martians to take care of them.": {
    why: "'They'll' is short for 'they will', with the apostrophe in place of 'wi'. 'Martians' is a plain plural, so it takes no apostrophe, even though it begins with a capital letter.",
    not: {
      'Theyll wonder what people did before there were Martians to take care of them.':
        "'Theyll' is short for 'they will', so it needs an apostrophe: 'They'll'.",
      "They'll wonder what people did before there were Martian's to take care of them.":
        "'They'll' is right, but 'Martians' only means more than one Martian and owns nothing. It takes no apostrophe.",
      "Theyll wonder what people did before there were Martian's to take care of them.":
        "Two slips: 'They'll' needs its apostrophe, and the plain plural 'Martians' takes none.",
    },
    more: "The artilleryman imagines people who will be happy as the Martians' pets. His bleak joke shows how much he has given up.",
    tip: 'Capital letters do not change the plural rule: Martians, Londoners, Romans. No apostrophe.',
  },
  "If it's amusement you're after, I reckon the game is up.": {
    why: "Two contractions: 'it's' for 'it is' and 'you're' for 'you are'. The sentence means 'If it is amusement you are after', so both need apostrophes.",
    not: {
      "If its amusement you're after, I reckon the game is up.":
        "'Its' without an apostrophe means 'belonging to it'. Here it means 'it is', so it needs one.",
      "If it's amusement your after, I reckon the game is up.":
        "'It's' is right, but 'your' shows belonging. 'You are after' needs 'you're'.",
      'If its amusement your after, I reckon the game is up.':
        "Two slips: 'it's' means 'it is' here, and 'you're' means 'you are'. Both need apostrophes.",
    },
    more: "Its and it's, your and you're: in each pair the word with the apostrophe stands for two words.",
    tip: "Read the sentence with the full words. If 'it is' and 'you are' fit, the apostrophes belong.",
  },
  "I'm delighted to have them, for the chances are that they are all he has.": {
    why: "'I'm' is short for 'I am', with the apostrophe in place of the 'a'. 'Chances' is a plain plural and owns nothing, so it takes no apostrophe. Holmes has found a case of the killer's poisoned thorns.",
    not: {
      'Im delighted to have them, for the chances are that they are all he has.':
        "'Im' is short for 'I am', so it needs an apostrophe in place of the 'a'.",
      "I'm delighted to have them, for the chance's are that they are all he has.":
        "'I'm' is right, but 'chances' is a plain plural. It owns nothing, so it takes no apostrophe.",
      "Im delighted to have them, for the chance's are that they are all he has.":
        "Two slips: 'I'm' needs its apostrophe, and the plain plural 'chances' takes none.",
    },
    more: "'I'm' is the only contraction of 'I am'. There is no other way to write it.",
    tip: 'Plain plurals that end in -ces, such as chances and voices, tempt a stray apostrophe. Leave it out.',
  },
  "I'll never forget how you lectured us all on causes and inferences and effects in the Bishopgate jewel case.":
    {
      why: "'I'll' is short for 'I will', and its apostrophe stands for the missing 'wi'. 'Causes', 'inferences' and 'effects' are plain plurals, so none takes an apostrophe.",
      not: {
        'Ill never forget how you lectured us all on causes and inferences and effects in the Bishopgate jewel case.':
          "Without its apostrophe, 'I'll', short for 'I will', becomes 'ill', meaning unwell.",
        "I'll never forget how you lectured us all on cause's and inferences and effects in the Bishopgate jewel case.":
          "'I'll' is right, but 'causes' is a plain plural and owns nothing, so it takes no apostrophe.",
        "Ill never forget how you lectured us all on cause's and inferences and effects in the Bishopgate jewel case.":
          "Two slips: 'I'll' needs its apostrophe, and the plain plural 'causes' takes none.",
      },
      more: "Athelney Jones, the police detective, says this to Holmes. He mocks Holmes's methods, which makes his later mistakes more satisfying.",
      tip: 'A list of plurals is easy to over-punctuate. None of them owns anything, so none takes an apostrophe.',
    },
  "It's odd that nobody's noticed the cracks.": {
    why: "'It's' is short for 'it is', and 'nobody's' here for 'nobody has': 'nobody has noticed'. 'Cracks' is a plain plural, more than one crack, so it takes no apostrophe.",
    not: {
      "Its odd that nobody's noticed the cracks.":
        "'Its' without an apostrophe means 'belonging to it'. 'It is odd' needs 'It's'.",
      "It's odd that nobody's noticed the crack's.":
        "The contractions are right, but 'cracks' only means more than one crack. It owns nothing, so it takes no apostrophe.",
      "Its odd that nobody's noticed the crack's.":
        "Two slips: 'It is odd' needs 'It's', and the plain plural 'cracks' takes no apostrophe.",
    },
    more: "'Nobody's' can also show belonging, as in 'nobody's business'. Here 'noticed' follows, so it means 'nobody has'.",
    tip: "When 's comes before a past form such as 'noticed' or 'been', it usually stands for 'has'.",
  },
  "I'd have helped with the chairs if I'd known.": {
    why: "Both are 'I'd', for different words: 'I would have helped' and 'if I had known'. Each needs its apostrophe. 'Chairs' is a plain plural, so it takes none.",
    not: {
      "Id have helped with the chairs if I'd known.":
        "The second 'I'd' is right, but the first has lost its apostrophe. 'I'd have helped' means 'I would have helped'.",
      "I'd have helped with the chair's if I'd known.":
        "Both contractions are right, but 'chairs' only means more than one chair. It owns nothing, so it takes no apostrophe.",
      "Id have helped with the chair's if I'd known.":
        "Two slips: the first 'I'd', for 'I would', needs its apostrophe, and the plain plural 'chairs' takes none.",
    },
    more: "'I'd' before a plain verb or 'have' means 'I would'. Before a past form such as 'known' it means 'I had'.",
    tip: 'Spell out each contraction in your head. It shows you which word it stands for, and keeps the apostrophe in place.',
  },
  "We shan't be long, so don't wait up.": {
    why: "'Shan't' is short for 'shall not' and 'don't' for 'do not'. In each, the apostrophe stands just before the 't', where the 'o' of 'not' was dropped.",
    not: {
      "We sha'nt be long, so don't wait up.":
        "The apostrophe in 'shan't' goes where the 'o' of 'not' is missing, between 'n' and 't'.",
      "We shan't be long, so dont wait up.":
        "'Shan't' is right, but 'dont' is short for 'do not' and needs an apostrophe.",
      "We sha'nt be long, so dont wait up.":
        "Two slips: the apostrophe in 'shan't' is misplaced, and 'don't' has lost its apostrophe.",
    },
    more: "'Shan't' is mostly British and a little old-fashioned. It drops two parts at once, the 'll' of 'shall' and the 'o' of 'not', but has only one apostrophe.",
    tip: 'A contraction has one apostrophe, even when more than one letter is missing.',
  },
  "It isn't quite according to what a man wants for his species, but it's about what the facts point to.":
    {
      why: "Three decisions. 'Isn't' is short for 'is not' and 'it's' for 'it is', so both need apostrophes. 'Facts' is a plain plural, more than one fact, so it takes none.",
      not: {
        'It isnt quite according to what a man wants for his species, but its about what the facts point to.':
          "'Isnt' is short for 'is not' and 'its' here means 'it is'. Both need apostrophes.",
        "It isnt quite according to what a man wants for his species, but it's about what the fact's point to.":
          "'Isn't' needs its apostrophe, and 'facts' is a plain plural that owns nothing, so it takes none.",
        "It isn't quite according to what a man wants for his species, but its about what the fact's point to.":
          "'Its' here means 'it is' and needs an apostrophe, and the plain plural 'facts' takes none.",
      },
      more: 'Long sentences hide apostrophe slips. Check each word with an apostrophe, and each word ending in s, one at a time.',
      tip: 'Go through a sentence word by word: contraction, possessive or plain plural? Each answer decides the apostrophe.',
    },
  "Mum lets us stay up late, so let's watch the film.": {
    why: "The two words look alike but do different jobs. 'Lets' means 'allows', a verb with no apostrophe: Mum lets us. 'Let's' is short for 'let us', so it needs an apostrophe: let's watch.",
    not: {
      "Mum let's us stay up late, so let's watch the film.":
        "The second is right, but the first means 'allows': Mum allows us. A verb like that takes no apostrophe.",
      'Mum lets us stay up late, so lets watch the film.':
        "The first is right, but the second means 'let us': 'let us watch the film'. It needs an apostrophe.",
      "Mum let's us stay up late, so lets watch the film.":
        "Both are the wrong way round: 'lets' means 'allows' and takes no apostrophe; 'let's' means 'let us' and needs one.",
    },
    more: 'Try "allows" in place of the word. If it fits, write "lets". If "let us" fits, write "let\'s".',
    tip: 'Suggestions start with "let\'s": let\'s go, let\'s eat. Permission uses "lets": she lets me.',
  },
  "We're sure the lights were on when we left.": {
    why: "'We're' is short for 'we are': 'We are sure'. 'Were' is the past tense of 'are': the lights were on. Only the contraction takes an apostrophe.",
    not: {
      'Were sure the lights were on when we left.':
        "The second 'were' is right, but the first means 'we are': 'We are sure'. It needs an apostrophe.",
      "We're sure the lights we're on when we left.":
        "The first is right, but the second is the past tense of 'are': the lights were on. It takes no apostrophe.",
      "Were sure the lights we're on when we left.":
        "Both are the wrong way round: the first means 'we are' and needs an apostrophe; the second is the past tense and takes none.",
    },
    more: "'Were' rhymes with 'fur' and 'we're' sounds like 'weer', but in quick speech they blur, which is why they get confused in writing.",
    tip: "Test with 'we are'. If it fits, write 'we're'. If the sentence is about the past, write 'were'.",
  },
  "Who's the girl whose bike was stolen?": {
    why: "'Who's' is short for 'who is': 'Who is the girl?' 'Whose' shows belonging, like 'his' or 'her': the girl whose bike was stolen. Possessive words never take an apostrophe.",
    not: {
      'Whose the girl whose bike was stolen?':
        "The second is right, but the first means 'who is': 'Who is the girl?' It needs the apostrophe: 'Who's'.",
      "Who's the girl who's bike was stolen?":
        "The first is right, but the second shows belonging: the bike belongs to the girl. That is 'whose', with no apostrophe.",
      "Whose the girl who's bike was stolen?":
        "Both are the wrong way round: 'who is' needs 'who's', and the girl's bike needs 'whose'.",
    },
    more: 'Whose, his, its, their and your all show belonging, and none takes an apostrophe.',
    tip: "Say 'who is' or 'who has'. If it fits, write 'who's'. If you are asking about an owner, write 'whose'.",
  },
  "They're over there with their coats.": {
    why: "Three words that sound the same. 'They're' means 'they are'. 'There' points to a place. 'Their' shows belonging: their coats. Only 'they're' takes an apostrophe.",
    not: {
      'Their over there with their coats.':
        "The others are right, but the first means 'they are': 'They are over there'. It needs 'They're'.",
      "They're over there with they're coats.":
        "The first two are right, but the coats belong to them, so the last is 'their', with no apostrophe.",
      "Their over there with they're coats.":
        "The first and last are swapped: 'They are' needs 'They're', and the coats belong to them, so it is 'their'.",
    },
    more: "'There' has 'here' inside it, a reminder that it is about place. 'Their' belongs with other owning words: my, your, his, her, our, their.",
    tip: "Check each one: 'they are', a place, or belonging? The answer tells you which spelling to use.",
  },
  'The tree drops its leaves every autumn.': {
    why: "The leaves belong to the tree, so 'its' is the possessive word, with no apostrophe. 'Leaves' simply means more than one leaf, so it takes no apostrophe either.",
    not: {
      "The tree drops it's leaves every autumn.":
        "The leaves belong to the tree, so the word is the possessive 'its'. 'It's' would mean 'it is leaves'.",
      "The tree drops its leave's every autumn.":
        "'Its' is right, but 'leaves' is a plain plural. It owns nothing, so it takes no apostrophe.",
      "The tree drops it's leave's every autumn.":
        "Two slips: the possessive 'its' takes no apostrophe, and nor does the plain plural 'leaves'.",
    },
    more: 'Possessive words such as its, his, her, our and their never take an apostrophe.',
    tip: "Swap in 'his': 'The man drops his keys.' If 'his' would fit, 'its' needs no apostrophe.",
  },
  'The cat licked its paws clean.': {
    why: "The paws belong to the cat, so the possessive 'its' is right, with no apostrophe. 'Paws' means more than one paw and owns nothing, so it takes no apostrophe.",
    not: {
      "The cat licked it's paws clean.":
        "The paws belong to the cat, so the word is the possessive 'its'. 'It's paws' would mean 'it is paws'.",
      "The cat licked its paw's clean.":
        "'Its' is right, but 'paws' is a plain plural. It owns nothing, so it takes no apostrophe.",
      "The cat licked it's paw's clean.":
        "Two slips: the possessive 'its' takes no apostrophe, and nor does the plain plural 'paws'.",
    },
    more: "An animal is often 'it', so 'its' is the word for what belongs to it: its tail, its fur, its paws.",
    tip: "'It's' only ever means 'it is' or 'it has'. Read it that way, and the wrong ones stand out.",
  },
  'It was a crescent with twelve miles between its horns.': {
    why: "The horns, the two points, belong to the crescent, so 'its' is the possessive word, with no apostrophe. 'Miles' is a plain plural, more than one mile, so it takes none.",
    not: {
      "It was a crescent with twelve miles between it's horns.":
        "The horns belong to the crescent, so the word is the possessive 'its'. 'It's horns' would mean 'it is horns'.",
      "It was a crescent with twelve mile's between its horns.":
        "'Its' is right, but 'miles' is a plain plural and owns nothing, so it takes no apostrophe.",
      "It was a crescent with twelve mile's between it's horns.":
        "Two slips: the possessive 'its' takes no apostrophe, and nor does the plain plural 'miles'.",
    },
    more: 'The crescent is the line of Martian fighting-machines. Measuring it in miles shows the reader how vast it is.',
    tip: "'Twelve' tells you 'miles' is plural, but a plural can still own something. Here 'miles' owns nothing, so it takes no apostrophe.",
  },
  "It's been a long day, hasn't it?": {
    why: "'It's' is short for 'it has' here, because 'been' follows: 'it has been'. 'Hasn't' is short for 'has not', with the apostrophe where the 'o' is missing.",
    not: {
      "Its been a long day, hasn't it?":
        "'Its' without an apostrophe means 'belonging to it'. Here the word is short for 'it has', so it needs one.",
      "It's been a long day, has'nt it?":
        "'It's' is right, but the apostrophe in 'hasn't' goes where the 'o' of 'not' is missing, between 'n' and 't'.",
      "Its been a long day, has'nt it?":
        "Two slips: 'It's' needs its apostrophe for 'it has', and the apostrophe in 'hasn't' belongs between the 'n' and the 't'.",
    },
    more: "'It's' can mean 'it is' ('It's cold') or 'it has' ('It's been cold'). Either way it is a contraction, and the next word tells you which.",
    tip: "When 's follows 'it' and a verb such as 'been' or 'gone' comes next, the 's stands for 'has'.",
  },
  "It's time the school updated its website.": {
    why: "The first 'It's' is short for 'It is': 'It is time'. The second 'its' shows that the website belongs to the school, and like 'his' or 'her' it takes no apostrophe.",
    not: {
      'Its time the school updated its website.':
        "The second 'its' is right, but the first means 'it is': 'It is time'. It needs an apostrophe.",
      "Its time the school updated it's website.":
        "Both are the wrong way round: the first means 'it is' and needs an apostrophe; the second shows belonging and takes none.",
      "It's time the school updated it's website.":
        "The first is right, but the second shows that the website belongs to the school. 'It's' would mean 'it is website'.",
    },
    more: 'Possessive words such as its, his, hers, ours, yours and theirs never take an apostrophe.',
    tip: "Try 'it is' in each place. Where it fits, write 'it's'; where it does not, write 'its'.",
  },
  'Again the spectre raised a cry, and shook its chain and wrung its shadowy hands.': {
    why: "Both words show that something belongs to the spectre, Marley's Ghost: its chain, its shadowy hands. The possessive 'its' never takes an apostrophe, just like 'his' and 'her'.",
    not: {
      "Again the spectre raised a cry, and shook it's chain and wrung its shadowy hands.":
        "The chain belongs to the spectre, so the first needs the possessive 'its'. 'It's' would mean 'it is chain'.",
      "Again the spectre raised a cry, and shook its chain and wrung it's shadowy hands.":
        "The hands belong to the spectre too, so the second is also the possessive 'its', with no apostrophe.",
      "Again the spectre raised a cry, and shook it's chain and wrung it's shadowy hands.":
        "Both show belonging: its chain, its hands. 'It's' always means 'it is' or 'it has', which fits neither.",
    },
    more: "Dickens calls the ghost 'it', which makes it seem less human. 'Its' then follows naturally.",
    tip: "Try 'it is' in each place. 'Shook it is chain' makes no sense, so the word is 'its'.",
  },
  "It's clear the company has lost its way.": {
    why: "The first word is short for 'It is': 'It is clear'. The second shows that the way belongs to the company, so it is the possessive 'its', with no apostrophe.",
    not: {
      'Its clear the company has lost its way.':
        "The second is right, but the first means 'it is': 'It is clear'. It needs an apostrophe.",
      "It's clear the company has lost it's way.":
        "The first is right, but the second shows belonging: the company has lost its way. Possessive 'its' takes no apostrophe.",
      "Its clear the company has lost it's way.":
        "Both are the wrong way round: 'It is clear' needs 'It's', and the company's way needs 'its'.",
    },
    more: 'A company, team or school is "it" when you think of it as one thing, so its possessive is "its".',
    tip: "The apostrophe in 'it's' always stands for a missing letter. If no letter is missing, leave it out.",
  },
  "The school's choir won its first prize.": {
    why: "Two kinds of belonging, two different rules. A noun owner takes an apostrophe: the school's choir. The pronoun 'its' never does: its first prize.",
    not: {
      'The schools choir won its first prize.':
        "The choir belongs to the school, so 'school's' needs an apostrophe and 's' to show it.",
      "The school's choir won it's first prize.":
        "'School's' is right, but the prize belongs to the choir, so the word is the possessive 'its', with no apostrophe.",
      "The schools choir won it's first prize.":
        "Two slips: 'school's' needs its apostrophe, and the possessive 'its' takes none.",
    },
    more: "This is why 'its' feels odd: nouns show belonging with an apostrophe, but possessive pronouns, such as its, his and theirs, never do.",
    tip: 'Nouns that own take an apostrophe; pronouns that own take none.',
  },
  'About the Rebellion and its results he would express no opinion.': {
    why: "The results belong to the Rebellion, so 'its' is the possessive word, with no apostrophe. 'Results' is a plain plural, so it takes none either. The sentence is about Benjamin, the donkey.",
    not: {
      "About the Rebellion and it's results he would express no opinion.":
        "The results belong to the Rebellion, so the word is the possessive 'its'. 'It's results' would mean 'it is results'.",
      "About the Rebellion and its result's he would express no opinion.":
        "'Its' is right, but 'results' is a plain plural and owns nothing, so it takes no apostrophe.",
      "About the Rebellion and it's result's he would express no opinion.":
        "Two slips: the possessive 'its' takes no apostrophe, and nor does the plain plural 'results'.",
    },
    more: "Benjamin's silence about the Rebellion is a clue: the cynical donkey suspects it will change nothing.",
    tip: "Quote a line like this to show a character's attitude, then explain what the silence suggests.",
  },
  "My little sister's teddy has lost one of its ears.": {
    why: "The teddy belongs to one sister, so 'sister's'. The ears belong to the teddy, so 'its', the possessive pronoun, with no apostrophe. 'Ears' is a plain plural.",
    not: {
      'My little sisters teddy has lost one of its ears.':
        "The teddy belongs to my sister, so 'sister' needs an apostrophe and 's'.",
      "My little sister's teddy has lost one of it's ears.":
        "'Sister's' is right, but the ears belong to the teddy, so 'its' is the possessive, with no apostrophe.",
      "My little sisters teddy has lost one of it's ears.":
        "Two slips: the teddy is my sister's, which needs an apostrophe, and the teddy's ears need 'its', with none.",
    },
    more: "Two common slips in one short sentence: a missing possessive apostrophe and a wrong 'it's'. 'Ears', a plain plural, takes no apostrophe at all.",
    tip: "'Its' for belonging, 'it's' for 'it is': say the sentence with 'it is' and listen.",
  },
  "When it's cold, the dog won't leave its basket.": {
    why: "Three decisions. 'It's cold' is short for 'it is cold'. 'Won't' is short for 'will not'. The basket belongs to the dog, so it is 'its basket', the possessive, with no apostrophe.",
    not: {
      'When its cold, the dog wont leave its basket.':
        "'It's cold' means 'it is cold', and 'won't' means 'will not'. Both need apostrophes.",
      "When its cold, the dog won't leave it's basket.":
        "Both 'its' are the wrong way round: 'it is cold' needs 'it's', and the dog's basket needs 'its'.",
      "When it's cold, the dog wont leave it's basket.":
        "'Won't' needs its apostrophe, and the basket belongs to the dog, so the possessive 'its' takes none.",
    },
    more: "One sentence can need 'it's' and 'its' a few words apart. Treat each one separately.",
    tip: "Say 'it is' at every 'it's' or 'its'. Keep the apostrophe only where those words fit.",
  },
  "There's a bird in the garden, and it's building its nest.": {
    why: "Three decisions. 'There's' is short for 'there is'. 'It's building' is short for 'it is building'. The nest belongs to the bird, so it is 'its nest', the possessive, with no apostrophe.",
    not: {
      'Theres a bird in the garden, and its building its nest.':
        "'There's' means 'there is' and 'it's' means 'it is'. Both contractions need apostrophes.",
      "There's a bird in the garden, and its building it's nest.":
        "Both 'its' are the wrong way round: 'it is building' needs 'it's', and the bird's nest needs 'its'.",
      "Theres a bird in the garden, and it's building it's nest.":
        "'There's' needs an apostrophe for 'there is', and the nest belongs to the bird, so it is 'its', with none.",
    },
    more: "'It's' and 'its' can sit side by side, one meaning 'it is', the other 'belonging to it'.",
    tip: "Swap in 'it is' at each one. Keep the apostrophe only where it fits.",
  },
  "The company's new logo has lost its charm, and it's too late to change it.": {
    why: "Three decisions. The logo belongs to the company: company's. The charm belongs to the logo, so it is 'its charm', with no apostrophe. 'It's too late' is short for 'it is too late'.",
    not: {
      'The companys new logo has lost its charm, and its too late to change it.':
        "The logo is the company's, so it needs an apostrophe, and 'it's too late' means 'it is too late'.",
      "The company's new logo has lost it's charm, and its too late to change it.":
        "Both 'its' are the wrong way round: the logo's charm is 'its charm', and 'it is too late' needs 'it's'.",
      "The companys new logo has lost it's charm, and it's too late to change it.":
        "The company owns the logo, so it needs an apostrophe, and the charm belongs to the logo, so 'its' takes none.",
    },
    more: "A noun owner takes an apostrophe; the pronoun 'its' never does; the contraction 'it's' always does.",
    tip: 'When a sentence has several "its", test each with "it is". Only those that fit get an apostrophe.',
  },
  "You're right: we're almost there.": {
    why: "'You're right' means 'you are right', and 'we're almost there' means 'we are almost there'. Both are contractions with an apostrophe in place of the 'a'. 'Your' and 'were' are different words.",
    not: {
      'Your right: were almost there.':
        "Both need apostrophes: the sentence means 'you are right' and 'we are almost there'. 'Your' and 'were' are different words.",
      "Youre right: we're almost there.":
        "'We're' is right, but 'Youre' is short for 'you are' and needs an apostrophe: 'You're'.",
      "You're right: were almost there.":
        "'You're' is right, but 'were' is the past tense of 'are'. 'We are almost there' needs 'we're'.",
    },
    more: "Your and you're, were and we're, their and they're: in each pair the apostrophe means two words have joined.",
    tip: 'Read your work aloud, replacing each contraction with its full words. If it still makes sense, the apostrophe belongs.',
  },
  "I have a pretty large experience of boys, and you're a bad set of fellows.": {
    why: "'You're' is short for 'you are': Jaggers is telling Pip what boys like him are. 'Boys' and 'fellows' are plain plurals that own nothing, so neither takes an apostrophe.",
    not: {
      'I have a pretty large experience of boys, and your a bad set of fellows.':
        "'Your' shows belonging. Here Jaggers is telling Pip what boys are, so the word must stand for 'you are': 'you're'.",
      "I have a pretty large experience of boy's, and you're a bad set of fellows.":
        "'You're' is right, but 'boys' is a plain plural and owns nothing, so it takes no apostrophe.",
      "I have a pretty large experience of boy's, and your a bad set of fellows.":
        "Two slips: the plain plural 'boys' takes no apostrophe, and 'you are' needs 'you're'.",
    },
    more: "Mr Jaggers says this to the young Pip on the stairs at Miss Havisham's. The sweeping insult shows his cold, lawyer's manner.",
    tip: "Before 'a' or 'the', the word is nearly always 'you're': you're a star, you're the winner.",
  },
  "You're welcome to bring your sister.": {
    why: "'You're' is short for 'you are': 'You are welcome'. 'Your' shows belonging, your sister, and like 'my' or 'his' it takes no apostrophe.",
    not: {
      'Your welcome to bring your sister.':
        "The second is right, but the first means 'you are': 'You are welcome'. It needs 'You're'.",
      "You're welcome to bring you're sister.":
        "The first is right, but the sister belongs to you, so the second is 'your', with no apostrophe.",
      "Your welcome to bring you're sister.":
        "Both are the wrong way round: 'You are welcome' needs 'You're', and 'your sister' shows belonging.",
    },
    more: "'Your' comes before a noun it owns: your sister, your coat. 'You're' comes before a describing word or a verb: you're welcome, you're going.",
    tip: "Say 'you are' in each place. Keep the apostrophe only where it fits.",
  },
  "If you're cold, your coat is on the hook.": {
    why: "'You're' is short for 'you are': 'If you are cold'. 'Your' shows belonging: your coat. Only the contraction takes an apostrophe.",
    not: {
      'If your cold, your coat is on the hook.':
        "The second is right, but the first means 'you are': 'If you are cold'. It needs 'you're'.",
      "If you're cold, you're coat is on the hook.":
        "The first is right, but the coat belongs to you, so the second is 'your', with no apostrophe.",
      "If your cold, you're coat is on the hook.":
        "Both are the wrong way round: 'you are cold' needs 'you're', and the coat that belongs to you is 'your coat'.",
    },
    more: 'The two words sound the same, so only the meaning tells them apart: being cold, or owning a coat.',
    tip: "Before a describing word such as 'cold' or 'late', write 'you're'. Before a thing, write 'your'.",
  },
  "Your phone is ringing, so you're going to miss the start.": {
    why: "'Your' shows belonging: your phone. 'You're' is short for 'you are': 'you are going to miss the start'. Only the contraction takes an apostrophe.",
    not: {
      "You're phone is ringing, so you're going to miss the start.":
        "The second is right, but the phone belongs to you, so the first is 'Your', with no apostrophe.",
      'Your phone is ringing, so your going to miss the start.':
        "The first is right, but the second means 'you are': 'you are going'. It needs 'you're'.",
      "You're phone is ringing, so your going to miss the start.":
        "Both are the wrong way round: 'Your phone' shows belonging, and 'you are going' needs 'you're'.",
    },
    more: "Before an '-ing' verb, such as 'going', 'you're' is almost always right.",
    tip: "If you can swap in 'my', write 'your': my phone, your phone. If you can swap in 'I am', write 'you're'.",
  },
  "You're lucky it's your birthday.": {
    why: "Three decisions. 'You're' is short for 'you are'. 'It's' is short for 'it is'. 'Your' shows the birthday belongs to you, so it takes no apostrophe.",
    not: {
      'Your lucky its your birthday.':
        "'You're' means 'you are' and 'it's' means 'it is'. Both need apostrophes.",
      "You're lucky its you're birthday.":
        "'It's' needs its apostrophe for 'it is', and the birthday belongs to you, so it is 'your'.",
      "Your lucky it's you're birthday.":
        "Both 'your' words are the wrong way round: 'You are lucky' needs 'You're', and 'your birthday' shows belonging.",
    },
    more: "The sentence has two words that sound like 'yore': one is a contraction, one a possessive. Only the contraction has an apostrophe.",
    tip: "Read it with the full words: 'You are lucky it is your birthday.'",
  },
  "Napoleon took no interest in Snowball's committees.": {
    why: "The committees are Snowball's, so his name takes an apostrophe and 's'. 'Committees' is a plain plural, so it takes none.",
    not: {
      'Napoleon took no interest in Snowballs committees.':
        "The committees belong to Snowball, so his name needs an apostrophe and 's': Snowball's.",
      "Napoleon took no interest in Snowball's committee's.":
        "'Snowball's' is right, but 'committees' is a plain plural. It owns nothing, so it takes no apostrophe.",
      "Napoleon took no interest in Snowballs committee's.":
        "The apostrophe is on the wrong word. It belongs on the owner, Snowball, not on the plural 'committees'.",
    },
    more: 'Snowball sets up committees to organise the animals; Napoleon ignores them and trains the puppies instead. The possessive sets the rivals apart.',
    tip: 'The apostrophe goes on the owner, never on the thing owned.',
  },
  "All of them came to look at Snowball's drawings at least once a day.": {
    why: "The drawings, Snowball's plans for the windmill, belong to him, so his name takes an apostrophe and 's'. 'Drawings' is a plain plural with no apostrophe.",
    not: {
      'All of them came to look at Snowballs drawings at least once a day.':
        "The drawings belong to Snowball, so his name needs an apostrophe and 's'.",
      "All of them came to look at Snowball's drawing's at least once a day.":
        "'Snowball's' is right, but 'drawings' is a plain plural and owns nothing, so it takes no apostrophe.",
      "All of them came to look at Snowballs drawing's at least once a day.":
        "The apostrophe is on the wrong word: it belongs on the owner, Snowball, not on 'drawings'.",
    },
    more: "Even Napoleon comes to look at the drawings, and then urinates on them. The animals' daily visits show how much hope the windmill holds.",
    tip: 'Find who owns what: Snowball owns the drawings, so Snowball gets the apostrophe.',
  },
  "Tomorrow Frederick's wagons would arrive and begin carting it away.": {
    why: "The wagons are Frederick's, so his name takes an apostrophe and 's'. 'Wagons' means more than one wagon and owns nothing, so it takes no apostrophe.",
    not: {
      'Tomorrow Fredericks wagons would arrive and begin carting it away.':
        "The wagons belong to Frederick, so his name needs an apostrophe and 's'.",
      "Tomorrow Frederick's wagon's would arrive and begin carting it away.":
        "'Frederick's' is right, but 'wagons' is a plain plural and owns nothing.",
      "Tomorrow Fredericks wagon's would arrive and begin carting it away.":
        "The apostrophe is on the wrong word: it belongs on Frederick, not on 'wagons'.",
    },
    more: "Frederick is buying the farm's timber, and will pay with forged banknotes.",
    tip: 'Check the word after the owner: if it only means more than one, it needs no apostrophe.',
  },
  "Clover's old dim eyes flitted from one face to another.": {
    why: "The eyes belong to Clover, so her name takes an apostrophe and 's'. 'Eyes' is a plain plural, so it takes none.",
    not: {
      'Clovers old dim eyes flitted from one face to another.':
        "The eyes belong to Clover, so her name needs an apostrophe and 's'.",
      "Clovers' old dim eyes flitted from one face to another.":
        "Clover is one horse, so the apostrophe goes before the 's': Clover's. 'Clovers'' would mean several horses called Clover.",
      "Clovers old dim eyes' flitted from one face to another.":
        "The apostrophe has moved from the owner, Clover, to 'eyes', a plain plural that owns nothing.",
    },
    more: "This is the last chapter: Clover, old now, looks from pig to man. Her dimming eyes match the animals' fading memory.",
    tip: 'A name is a single owner: add an apostrophe and s.',
  },
  "A positive light appeared to issue from Fezziwig's calves.": {
    why: "The calves are Fezziwig's, the backs of his legs, so his name takes an apostrophe and 's'. 'Calves' is a plain plural with no apostrophe.",
    not: {
      'A positive light appeared to issue from Fezziwigs calves.':
        "The calves, the backs of his legs, belong to Fezziwig, so his name needs an apostrophe and 's'.",
      "A positive light appeared to issue from Fezziwig's calve's.":
        "'Fezziwig's' is right, but 'calves' is a plain plural and owns nothing.",
      "A positive light appeared to issue from Fezziwigs calve's.":
        "The apostrophe has moved from the owner, Fezziwig, to 'calves', a plain plural.",
    },
    more: "Old Fezziwig dances so brilliantly that his legs seem to shine. Dickens's comic exaggeration shows his joy.",
    tip: 'Plurals that change f to v, such as calves, halves and leaves, still take no apostrophe.',
  },
  "In the afternoon he turned his steps towards his nephew's house.": {
    why: "The house belongs to Scrooge's one nephew, Fred, so 'nephew' takes an apostrophe and 's'. 'Steps' is a plain plural, so it takes none.",
    not: {
      'In the afternoon he turned his steps towards his nephews house.':
        "The house belongs to his nephew, so 'nephew' needs an apostrophe and 's'.",
      "In the afternoon he turned his step's towards his nephew's house.":
        "'Nephew's' is right, but 'steps' is a plain plural and owns nothing.",
      "In the afternoon he turned his step's towards his nephews house.":
        "The apostrophe has moved from the owner, his nephew, to 'steps', a plain plural.",
    },
    more: "The changed Scrooge goes to Fred's Christmas dinner, the invitation he refused in the first stave.",
    tip: "'His nephew' means one nephew, so the possessive is nephew's.",
  },
  "I could read it in the fellow's brown eyes.": {
    why: "The eyes belong to one fellow, so 'fellow' takes an apostrophe and 's'. 'Eyes' is a plain plural, so it takes none.",
    not: {
      'I could read it in the fellows brown eyes.':
        "The eyes belong to the fellow, so 'fellow' needs an apostrophe and 's'.",
      "I could read it in the fellow's brown eye's.":
        "'Fellow's' is right, but 'eyes' is a plain plural and owns nothing.",
      "I could read it in the fellows brown eye's.":
        "The apostrophe has moved from the owner, the fellow, to 'eyes', a plain plural.",
    },
    more: "Jonathan Small is telling his story. Seized by two Sikh guards, he reads in one man's eyes that the threat is real, so he keeps quiet.",
    tip: "'The fellow' is one person, so his eyes are the fellow's eyes.",
  },
  "My uncle's farm has twenty cows and three horses.": {
    why: "The farm belongs to my uncle, one owner, so 'uncle' takes an apostrophe and 's'. 'Cows' and 'horses' are plain plurals that own nothing.",
    not: {
      'My uncles farm has twenty cows and three horses.':
        "The farm belongs to my uncle, so 'uncle' needs an apostrophe and 's'.",
      "My uncle's farm has twenty cow's and three horses.":
        "'Uncle's' is right, but 'cows' is a plain plural, twenty cows, and owns nothing.",
      "My uncles farm has twenty cow's and three horses.":
        "The apostrophe has moved from the owner, my uncle, to 'cows', a plain plural.",
    },
    more: "'Twenty cows' and 'three horses' are counted things that own nothing. A number tells you a word is plural, not whether it owns something.",
    tip: 'Owner word: apostrophe. Counted things: no apostrophe.',
  },
  "The class read three of Shakespeare's plays this year.": {
    why: "The plays were written by Shakespeare, so they are Shakespeare's plays: one owner, apostrophe and 's'. 'Plays' is a plain plural.",
    not: {
      'The class read three of Shakespeares plays this year.':
        "The plays are Shakespeare's, so his name needs an apostrophe and 's'.",
      "The class read three of Shakespeare's play's this year.":
        "'Shakespeare's' is right, but 'plays' is a plain plural and owns nothing.",
      "The class read three of Shakespeares play's this year.":
        "The apostrophe has moved from the owner, Shakespeare, to 'plays', a plain plural.",
    },
    more: "A writer 'owns' the works in this sense: Shakespeare's plays, Dickens's novels, Brontë's poems.",
    tip: "In an essay, a writer's name with an apostrophe is common: 'Shakespeare's use of imagery'. Check it every time.",
  },
  "The cat's whiskers twitched as it slept.": {
    why: "'As it slept' shows there is one cat, so the owner is singular and takes an apostrophe and 's': cat's. 'Whiskers' is a plain plural, more than one whisker, so it takes no apostrophe.",
    not: {
      'The cats whiskers twitched as it slept.':
        "The whiskers belong to the cat, so 'cat's' needs an apostrophe to show it.",
      "The cats' whiskers twitched as it slept.":
        "'As it slept' tells us there is one cat. 'Cats'' would mean several cats own the whiskers.",
      "The cats whiskers' twitched as it slept.":
        "The apostrophe has moved from 'cat' to 'whiskers', a plain plural that owns nothing. It belongs on 'cat's'.",
    },
    more: 'Clues elsewhere in a sentence, such as "it" or "she", can tell you how many owners there are.',
    tip: 'Find the owner first, then decide one or several. The thing owned never takes the apostrophe.',
  },
  "Without saying anything to the others, she went to Mollie's stall and turned over the straw with her hoof.":
    {
      why: "The stall belongs to Mollie, so her name takes an apostrophe and 's'. 'The others' means the other animals and owns nothing, so it is a plain plural.",
      not: {
        "Without saying anything to the other's, she went to Mollie's stall and turned over the straw with her hoof.":
          "'Mollie's' is right, but 'others' here means the other animals, a plain plural that owns nothing.",
        'Without saying anything to the others, she went to Mollies stall and turned over the straw with her hoof.':
          "The stall belongs to Mollie, so her name needs an apostrophe and 's': Mollie's.",
        "Without saying anything to the other's, she went to Mollies stall and turned over the straw with her hoof.":
          "The apostrophe has moved from the owner, Mollie, to 'others', a plain plural.",
      },
      more: "Clover searches Mollie's stall and finds sugar and ribbons hidden there: proof that Mollie has been visiting the humans.",
      tip: "Words like 'others' and 'ones' are plurals. They take an apostrophe only when they own something.",
    },
  "Major's speech had given to the more intelligent animals on the farm a completely new outlook on life.":
    {
      why: "The speech belongs to old Major, so his name takes an apostrophe and 's'. 'Animals' simply means more than one animal, so it takes none.",
      not: {
        'Majors speech had given to the more intelligent animals on the farm a completely new outlook on life.':
          "The speech is Major's, so his name needs an apostrophe and 's' to show it.",
        "Major's speech had given to the more intelligent animal's on the farm a completely new outlook on life.":
          "'Major's' is right, but 'animals' is a plain plural and owns nothing, so it takes no apostrophe.",
        "Majors speech had given to the more intelligent animal's on the farm a completely new outlook on life.":
          "The apostrophe is on the wrong word: it belongs on the owner, Major, not on 'animals'.",
      },
      more: "Major's speech, given just before he dies, starts the whole Rebellion.",
      tip: 'A speech, an idea or a plan can belong to someone, just as an object can.',
    },
  "Led by three young Black Minorca pullets, the hens made a determined effort to thwart Napoleon's wishes.":
    {
      why: "The wishes are Napoleon's, so his name takes an apostrophe and 's'. 'Hens' and 'pullets' are plain plurals, so neither takes an apostrophe.",
      not: {
        "Led by three young Black Minorca pullets, the hens made a determined effort to thwart Napoleons' wishes.":
          "Napoleon is one owner, so the apostrophe goes before the 's': Napoleon's. 'Napoleons'' would mean several Napoleons.",
        'Led by three young Black Minorca pullets, the hens made a determined effort to thwart Napoleons wishes.':
          "The wishes belong to Napoleon, so his name needs an apostrophe and 's'.",
        "Led by three young Black Minorca pullets, the hens' made a determined effort to thwart Napoleons wishes.":
          "The apostrophe has moved from the owner, Napoleon, to 'hens', a plain plural that owns nothing.",
      },
      more: "Pullets are young hens. The hens' protest over their eggs is the first open rebellion against Napoleon.",
      tip: 'Only an owner takes the apostrophe. Here only one word owns something: Napoleon.',
    },
  "The pigs were in ecstasies over Napoleon's cunning.": {
    why: "The cunning, his cleverness, belongs to Napoleon, so his name takes an apostrophe and 's'. 'Pigs' is a plain plural subject, so it takes none.",
    not: {
      "The pig's were in ecstasies over Napoleon's cunning.":
        "'Napoleon's' is right, but 'pigs' is the subject, a plain plural, and owns nothing.",
      'The pigs were in ecstasies over Napoleons cunning.':
        "The cunning belongs to Napoleon, so his name needs an apostrophe and 's'.",
      "The pig's were in ecstasies over Napoleons cunning.":
        "The apostrophe has moved from the owner, Napoleon, to 'pigs', a plain plural.",
    },
    more: "'In ecstasies' means wildly happy. The pigs think Napoleon has tricked Frederick; in fact Frederick has tricked him.",
    tip: "Qualities belong to people too: Napoleon's cunning, Boxer's strength, Squealer's skill.",
  },
  "The next moment a choking roar of rage sounded from Napoleon's apartments.": {
    why: "The apartments, his private rooms, are Napoleon's, so his name takes an apostrophe and 's'. 'Apartments' is a plain plural with no apostrophe.",
    not: {
      'The next moment a choking roar of rage sounded from Napoleons apartments.':
        "The apartments belong to Napoleon, so his name needs an apostrophe and 's'.",
      "The next moment a choking roar of rage sounded from Napoleon's apartment's.":
        "'Napoleon's' is right, but 'apartments' is a plain plural and owns nothing.",
      "The next moment a choking roar of rage sounded from Napoleons apartment's.":
        "The apostrophe is on the wrong word: it belongs on Napoleon, not on 'apartments'.",
    },
    more: "Napoleon has just learned that Frederick's banknotes are forgeries. That a pig has 'apartments' at all shows how far he has risen.",
    tip: "Read the owner's word aloud with 'of': the apartments of Napoleon. The owner takes the apostrophe.",
  },
  "The dogs flanked the procession and at the head of all marched Napoleon's black cockerel.": {
    why: "The black cockerel is Napoleon's, so his name takes an apostrophe and 's'. 'Dogs' is a plain plural and the subject of 'flanked', so it takes none.",
    not: {
      "The dogs flanked the procession and at the head of all marched Napoleons' black cockerel.":
        "One pig owns the cockerel, so the apostrophe goes before the 's': Napoleon's, not Napoleons'.",
      'The dogs flanked the procession and at the head of all marched Napoleons black cockerel.':
        "The cockerel belongs to Napoleon, so his name needs an apostrophe and 's'.",
      "The dogs' flanked the procession and at the head of all marched Napoleons black cockerel.":
        "The apostrophe has moved from the owner, Napoleon, to 'dogs', a plain plural that owns nothing.",
    },
    more: 'The cockerel marches ahead of Napoleon like a trumpeter. Orwell shows the pig living like a king.',
    tip: 'A plural that does something, such as "the dogs flanked", owns nothing and needs no apostrophe.',
  },
  "The sheep spent the whole day there browsing at the leaves under Squealer's supervision.": {
    why: "The supervision belongs to Squealer, so his name takes an apostrophe and 's'. 'Leaves' is a plain plural, and 'sheep' is a plural that never takes an s.",
    not: {
      'The sheep spent the whole day there browsing at the leaves under Squealers supervision.':
        "The supervision is Squealer's, so his name needs an apostrophe and 's'.",
      "The sheep spent the whole day there browsing at the leave's under Squealer's supervision.":
        "'Squealer's' is right, but 'leaves' is a plain plural and owns nothing.",
      "The sheep spent the whole day there browsing at the leave's under Squealers supervision.":
        "The apostrophe is on the wrong word: it belongs on Squealer, not on 'leaves'.",
    },
    more: 'Squealer is secretly teaching the sheep a new chant. Their day of browsing under his eye prepares a surprise.',
    tip: "'Sheep' is the same in the singular and plural. Its possessive is always sheep's.",
  },
  "Like all of Napoleon's speeches, it was short and to the point.": {
    why: "The speeches are Napoleon's, so his name takes an apostrophe and 's'. 'Speeches' means more than one speech, so it takes no apostrophe.",
    not: {
      'Like all of Napoleons speeches, it was short and to the point.':
        "The speeches belong to Napoleon, so his name needs an apostrophe and 's'.",
      "Like all of Napoleon's speeche's, it was short and to the point.":
        "'Napoleon's' is right, but 'speeches' is a plain plural and owns nothing.",
      "Like all of Napoleons speeche's, it was short and to the point.":
        "The apostrophe is on the wrong word: it belongs on Napoleon, not on 'speeches'.",
    },
    more: "Napoleon's speeches are short, Squealer's long. Orwell contrasts the leader who commands with the spokesman who persuades.",
    tip: 'Plurals ending in -es, such as speeches, boxes and wishes, still take no apostrophe unless they own something.',
  },
  "The grasp, though gentle as a woman's hand, was not to be resisted.": {
    why: "'A' tells us there is one woman, so the owner is singular: 'woman'. One owner takes an apostrophe and 's': a woman's hand.",
    not: {
      'The grasp, though gentle as a womans hand, was not to be resisted.':
        "The hand belongs to a woman, so 'woman' needs an apostrophe and 's' to show it.",
      "The grasp, though gentle as a women's hand, was not to be resisted.":
        "'A' means one, so the owner is 'woman', not the plural 'women'.",
      "The grasp, though gentle as a womans' hand, was not to be resisted.":
        "There is no word 'womans'. One woman's hand is woman's, with the apostrophe before the 's'.",
    },
    more: "The grasp is the first Spirit's. Dickens makes it gentle but firm: Scrooge must go wherever it leads.",
    tip: "Watch for 'a' or 'an' before the owner: it means one, so add apostrophe and s.",
  },
  "Scrooge bent before the Ghost's rebuke, and trembling cast his eyes upon the ground.": {
    why: "The rebuke, a telling-off, is the Ghost's, so 'Ghost' takes an apostrophe and 's'. 'Eyes' is a plain plural, so it takes none.",
    not: {
      'Scrooge bent before the Ghosts rebuke, and trembling cast his eyes upon the ground.':
        "The rebuke belongs to the Ghost, so 'Ghost' needs an apostrophe and 's'.",
      "Scrooge bent before the Ghost's rebuke, and trembling cast his eye's upon the ground.":
        "'Ghost's' is right, but 'eyes' is a plain plural and owns nothing.",
      "Scrooge bent before the Ghosts rebuke, and trembling cast his eye's upon the ground.":
        "The apostrophe has moved from the owner, the Ghost, to 'eyes', a plain plural.",
    },
    more: "The Ghost of Christmas Present has thrown Scrooge's own words back at him: 'decrease the surplus population'.",
    tip: 'A spoken act, such as a rebuke, a promise or a warning, can belong to someone.',
  },
  "They were portly gentlemen, pleasant to behold, and now stood, with their hats off, in Scrooge's office.":
    {
      why: "The office is Scrooge's, so his name takes an apostrophe and 's'. 'Hats' is a plain plural, and 'their' shows belonging without any apostrophe.",
      not: {
        "They were portly gentlemen, pleasant to behold, and now stood, with their hat's off, in Scrooge's office.":
          "'Scrooge's' is right, but 'hats' is a plain plural and owns nothing.",
        'They were portly gentlemen, pleasant to behold, and now stood, with their hats off, in Scrooges office.':
          "The office belongs to Scrooge, so his name needs an apostrophe and 's'.",
        "They were portly gentlemen, pleasant to behold, and now stood, with their hat's off, in Scrooges office.":
          "The apostrophe has moved from the owner, Scrooge, to 'hats', a plain plural.",
      },
      more: "The two gentlemen have come to ask Scrooge for money for the poor. 'Portly' means stout and well fed.",
      tip: "'Their hats' needs no apostrophe at all: 'their' is a possessive word and 'hats' a plain plural.",
    },
  "What sober man's key could have scored those grooves?": {
    why: "The key belongs to one man, so 'man' takes an apostrophe and 's'. 'Grooves' is a plain plural with no apostrophe.",
    not: {
      'What sober mans key could have scored those grooves?':
        "The key belongs to a man, so 'man' needs an apostrophe and 's'.",
      "What sober man's key could have scored those groove's?":
        "'Man's' is right, but 'grooves' is a plain plural and owns nothing.",
      "What sober mans key could have scored those groove's?":
        "The apostrophe has moved from the owner, the man, to 'grooves', a plain plural.",
    },
    more: "Holmes is reading the scratches round a watch's keyhole: a sober man would not miss the hole so often. It is his deduction about Watson's brother.",
    tip: 'A question can hold possessives too. The question mark changes nothing about the apostrophe.',
  },
  "It was nearly eleven o'clock when we reached this final stage of our night's adventures.": {
    why: "'Our night's adventures' means the adventures of one night, so 'night' takes an apostrophe and 's'. 'Adventures' is a plain plural. 'O'clock' keeps its apostrophe for 'of the clock'.",
    not: {
      "It was nearly eleven o'clock when we reached this final stage of our nights adventures.":
        "The adventures belong to the night, so 'night' needs an apostrophe and 's'.",
      "It was nearly eleven o'clock when we reached this final stage of our night's adventure's.":
        "'Night's' is right, but 'adventures' is a plain plural and owns nothing.",
      "It was nearly eleven o'clock when we reached this final stage of our nights adventure's.":
        "The apostrophe has moved from 'night', the owner, to 'adventures', a plain plural.",
    },
    more: "Time can own things: a night's adventures, a day's work. One unit of time takes an apostrophe and 's'.",
    tip: "Check 'o'clock' when you proofread: it always has an apostrophe.",
  },
  "That is Bartholomew's window up there where the moonshine strikes.": {
    why: "The window is Bartholomew's, so his name takes an apostrophe and 's'. 'Strikes' is a verb: the moonlight strikes the window. A verb never takes an apostrophe.",
    not: {
      'That is Bartholomews window up there where the moonshine strikes.':
        "The window belongs to Bartholomew, so his name needs an apostrophe and 's'.",
      "That is Bartholomew's window up there where the moonshine strike's.":
        "'Bartholomew's' is right, but 'strikes' is a verb, what the moonlight does, and a verb takes no apostrophe.",
      "That is Bartholomews window up there where the moonshine strike's.":
        "The apostrophe has moved from the owner, Bartholomew, to the verb 'strikes'.",
    },
    more: "Thaddeus points out his brother's window, where something terrible will soon be found.",
    tip: "If a word ending in s is something done, such as 'strikes' or 'runs', it never takes an apostrophe.",
  },
  "Now, only one white man's name is on the chart.": {
    why: "'One' tells us there is a single man, so the owner is 'man', which takes an apostrophe and 's': man's. The plural would be men's.",
    not: {
      "Now, only one white men's name is on the chart.":
        "'One' means a single man, so the owner is 'man', not the plural 'men'.",
      'Now, only one white mans name is on the chart.':
        "The name belongs to the man, so 'man' needs an apostrophe and 's'.",
      "Now, only one white mans' name is on the chart.":
        "There is no word 'mans'. One man's name is man's, with the apostrophe before the 's'.",
    },
    more: 'Holmes has worked out that only one of the four names on the chart belongs to a white man, Jonathan Small, and so he knows whom to hunt.',
    tip: "'One', 'a' or 'each' before the owner means one: add apostrophe and s.",
  },
  "The jewels will be as well with us as in the Company's coffers.": {
    why: "The coffers, money chests, belong to the Company, one owner, so it takes an apostrophe and 's'. 'Jewels' is a plain plural, so it takes none.",
    not: {
      "The jewel's will be as well with us as in the Company's coffers.":
        "'Company's' is right, but 'jewels' is the subject, a plain plural, and owns nothing.",
      'The jewels will be as well with us as in the Companys coffers.':
        "The coffers belong to the Company, so 'Company' needs an apostrophe and 's'.",
      "The jewel's will be as well with us as in the Companys coffers.":
        "The apostrophe has moved from the owner, the Company, to 'jewels', a plain plural.",
    },
    more: 'The Company is the East India Company, which ruled much of India. Small and his partners argue that stealing the jewels hurts no one.',
    tip: "A company or organisation is one owner: the Company's, the school's, the council's.",
  },
  "I started at once in this harmless seaman's rig and inquired at all the yards down the river.": {
    why: "A 'seaman's rig' is the outfit of a seaman, so 'seaman' takes an apostrophe and 's'. 'Yards', the boatyards, is a plain plural and takes none.",
    not: {
      'I started at once in this harmless seamans rig and inquired at all the yards down the river.':
        "The rig, his outfit, is a seaman's, so 'seaman' needs an apostrophe and 's'.",
      "I started at once in this harmless seaman's rig and inquired at all the yard's down the river.":
        "'Seaman's' is right, but 'yards' is a plain plural and owns nothing.",
      "I started at once in this harmless seamans rig and inquired at all the yard's down the river.":
        "The apostrophe has moved from the owner, the seaman, to 'yards', a plain plural.",
    },
    more: 'Holmes disguised himself as a sailor to search the boatyards for the missing launch.',
    tip: "Possession can mean 'the kind worn by': a seaman's rig, a farmer's coat. The apostrophe is the same.",
  },
  "Enfield's tale went by before his mind in a scroll of lighted pictures.": {
    why: "The tale belongs to Enfield, who told it, so his name takes an apostrophe and 's'. 'Pictures' is a plain plural, so it takes none.",
    not: {
      'Enfields tale went by before his mind in a scroll of lighted pictures.':
        "The tale is Enfield's, so his name needs an apostrophe and 's'.",
      "Enfield's tale went by before his mind in a scroll of lighted picture's.":
        "'Enfield's' is right, but 'pictures' is a plain plural and owns nothing.",
      "Enfields tale went by before his mind in a scroll of lighted picture's.":
        "The apostrophe has moved from the owner, Enfield, to 'pictures', a plain plural.",
    },
    more: "Utterson lies awake replaying Enfield's story of Hyde trampling the child. The 'lighted pictures' make it feel like a nightmare on a screen.",
    tip: "A story belongs to the person who tells it: Enfield's tale, Lanyon's narrative.",
  },
  "In addition, Ogilvy's wire to the Astronomical Exchange had roused every observatory in the three kingdoms.":
    {
      why: "The wire, a telegram, was sent by Ogilvy, so it is Ogilvy's: one owner, apostrophe and 's'. 'Kingdoms' is a plain plural and takes none.",
      not: {
        'In addition, Ogilvys wire to the Astronomical Exchange had roused every observatory in the three kingdoms.':
          "The wire, a telegram, is Ogilvy's, so his name needs an apostrophe and 's'.",
        "In addition, Ogilvy's wire to the Astronomical Exchange had roused every observatory in the three kingdom's.":
          "'Ogilvy's' is right, but 'kingdoms' is a plain plural and owns nothing.",
        "In addition, Ogilvys wire to the Astronomical Exchange had roused every observatory in the three kingdom's.":
          "The apostrophe has moved from the owner, Ogilvy, to 'kingdoms', a plain plural.",
      },
      more: "A name ending in -y keeps its 'y' before the apostrophe: Ogilvy's. Only the plural of a common noun changes y to ies.",
      tip: 'Names never change their spelling to show possession: just add apostrophe and s.',
    },
  "At that I gripped my wife's arm, and without ceremony ran her out into the road.": {
    why: "The arm belongs to the narrator's wife, one person, so 'wife' takes an apostrophe and 's': wife's. The plural 'wives' is only for more than one.",
    not: {
      'At that I gripped my wifes arm, and without ceremony ran her out into the road.':
        "The arm belongs to his wife, so 'wife' needs an apostrophe and 's'.",
      "At that I gripped my wives' arm, and without ceremony ran her out into the road.":
        "'My wife' is one person, so the owner is 'wife', not the plural 'wives'.",
      "At that I gripped my wive's arm, and without ceremony ran her out into the road.":
        "There is no word 'wive'. One wife's arm is wife's: keep the word as it is and add apostrophe and s.",
    },
    more: 'Words ending in -fe change to -ves only in the plural: wife, wives; knife, knives. For one owner, keep the word as it is.',
    tip: 'Spell the owner word as it is for one person, then add the apostrophe and s.',
  },
  "In another moment a bend in the road hid the three men from my brother's eyes.": {
    why: "The eyes are the narrator's brother's, so 'brother' takes an apostrophe and 's'. 'Eyes' is a plain plural with no apostrophe, and 'men' is a plural that does not end in s.",
    not: {
      'In another moment a bend in the road hid the three men from my brothers eyes.':
        "The eyes belong to the narrator's brother, so 'brother' needs an apostrophe and 's'.",
      "In another moment a bend in the road hid the three men from my brother's eye's.":
        "'Brother's' is right, but 'eyes' is a plain plural and owns nothing.",
      "In another moment a bend in the road hid the three men from my brothers eye's.":
        "The apostrophe has moved from the owner, the brother, to 'eyes', a plain plural.",
    },
    more: "Book One follows the narrator's brother through London as well as the narrator himself, so 'my brother' appears again and again.",
    tip: "'My brother' means one brother, so his eyes are 'my brother's eyes'.",
  },
  "One man's hands pressed on the back of another.": {
    why: "'One man' is a single owner, so 'man' takes an apostrophe and 's'. 'Hands' is a plain plural, so it takes none.",
    not: {
      'One mans hands pressed on the back of another.':
        "The hands belong to one man, so 'man' needs an apostrophe and 's'.",
      "One mans hands' pressed on the back of another.":
        "Two slips: one man owns the hands, so 'man's' needs its apostrophe, and the plain plural 'hands' takes none.",
      "One mans' hands pressed on the back of another.":
        "'One man' is a single owner, so the apostrophe goes before the 's': man's. There is no word 'mans'.",
    },
    more: "The crowd fleeing London is so tightly packed that people press against each other's backs.",
    tip: 'Irregular nouns change in the plural: man, men. Pick the right one for the number of owners first.',
  },
  "My brother stood at the pony's head.": {
    why: "One pony has one head, so the owner is singular: 'pony'. Add an apostrophe and 's' without changing the 'y': pony's.",
    not: {
      'My brother stood at the ponies head.':
        "'Ponies' means more than one pony, and it has no apostrophe either. One pony's head is pony's.",
      "My brother stood at the ponies' head.":
        "'Ponies'' would mean several ponies sharing one head. There is one pony here, so it is pony's.",
      "My brother stood at the ponie's head.":
        "There is no word 'ponie'. Keep 'pony' as it is and add apostrophe and s: pony's.",
    },
    more: "The 'y' changes to 'ies' only in the plural: one pony, two ponies, the ponies' stable.",
    tip: "For one owner ending in y, just add apostrophe and s: the pony's, the baby's, the city's.",
  },
  "I could just see the curate's face, a dim, oval shape, and his collar and cuffs.": {
    why: "The face belongs to the curate, so 'curate' takes an apostrophe and 's'. 'Cuffs' is a plain plural, so it takes none.",
    not: {
      'I could just see the curates face, a dim, oval shape, and his collar and cuffs.':
        "The face belongs to the curate, so 'curate' needs an apostrophe and 's'.",
      "I could just see the curate's face, a dim, oval shape, and his collar and cuff's.":
        "'Curate's' is right, but 'cuffs' is a plain plural and owns nothing.",
      "I could just see the curates face, a dim, oval shape, and his collar and cuff's.":
        "The apostrophe has moved from the owner, the curate, to 'cuffs', a plain plural.",
    },
    more: 'A curate is a junior priest. Trapped with the narrator in the dark, he is only a pale shape.',
    tip: "Check each noun in a list: 'collar and cuffs' are things owned, not owners, so neither takes an apostrophe.",
  },
  "Going into the kitchen, I saw a dog's nose peering in through a break among the ruddy fronds.": {
    why: "'A dog's nose' is the nose of one dog, so 'dog' takes an apostrophe and 's'. 'Fronds', the leaves of the red weed, is a plain plural.",
    not: {
      'Going into the kitchen, I saw a dogs nose peering in through a break among the ruddy fronds.':
        "The nose belongs to a dog, so 'dog' needs an apostrophe and 's'.",
      "Going into the kitchen, I saw a dog's nose peering in through a break among the ruddy frond's.":
        "'Dog's' is right, but 'fronds' is a plain plural and owns nothing.",
      "Going into the kitchen, I saw a dogs nose peering in through a break among the ruddy frond's.":
        "The apostrophe has moved from the owner, the dog, to 'fronds', a plain plural.",
    },
    more: 'After days trapped, the narrator sees a living dog: a first sign that the world outside may be changing.',
    tip: "'A' before the owner means one: a dog's nose, a bird's wing.",
  },
  "I heard a sound like the flutter of a bird's wings, and a hoarse croaking, but that was all.": {
    why: "'A bird's wings' are the wings of one bird, so 'bird' takes an apostrophe and 's'. 'Wings' is a plain plural, so it takes none.",
    not: {
      'I heard a sound like the flutter of a birds wings, and a hoarse croaking, but that was all.':
        "The wings belong to a bird, so 'bird' needs an apostrophe and 's'.",
      "I heard a sound like the flutter of a bird's wing's, and a hoarse croaking, but that was all.":
        "'Bird's' is right, but 'wings' is a plain plural and owns nothing.",
      "I heard a sound like the flutter of a birds wing's, and a hoarse croaking, but that was all.":
        "The apostrophe has moved from the owner, the bird, to 'wings', a plain plural.",
    },
    more: 'The silence after the Martians leave is so deep that a single bird is all the narrator hears.',
    tip: "The thing owned can be plural, 'wings', while the owner is singular, 'a bird'. Each follows its own rule.",
  },
  "For God's sake, say no more of his partners.": {
    why: "'For God's sake' means for the sake of God, so 'God' is the owner and takes an apostrophe and 's'. 'Partners' is a plain plural with no apostrophe.",
    not: {
      'For Gods sake, say no more of his partners.':
        "'For God's sake' means 'for the sake of God', so 'God' needs an apostrophe and 's'.",
      "For God's sake, say no more of his partner's.":
        "'God's' is right, but 'partners', his dance partners, is a plain plural and owns nothing.",
      "For Gods sake, say no more of his partner's.":
        "The apostrophe has moved from 'God', the owner, to 'partners', a plain plural.",
    },
    more: 'Mr Bennet is begging his wife to stop listing everyone Mr Bingley danced with at the ball.',
    tip: "Phrases with 'sake' always have a possessive: for goodness' sake, for pity's sake, for my sake.",
  },
  "And so, you like this man's sisters too, do you?": {
    why: "The sisters belong to this one man, Mr Bingley, so 'man' takes an apostrophe and 's'. 'Sisters' is a plain plural, so it takes none.",
    not: {
      'And so, you like this mans sisters too, do you?':
        "The sisters are this man's, so 'man' needs an apostrophe and 's'.",
      "And so, you like this man's sister's too, do you?":
        "'Man's' is right, but 'sisters' is a plain plural and owns nothing.",
      "And so, you like this mans sister's too, do you?":
        "The apostrophe has moved from the owner, the man, to 'sisters', a plain plural.",
    },
    more: 'Elizabeth teases Jane, who likes Mr Bingley, for liking his snobbish sisters as well.',
    tip: "'This man' is one person: this man's sisters. 'These men' would be these men's sisters.",
  },
  "His answer to this sudden attack was delightful to their mother's ear.": {
    why: "'Their' shows that the mother belongs to the sisters, with no apostrophe. The ear belongs to their one mother, so 'mother' takes an apostrophe and 's'.",
    not: {
      "His answer to this sudden attack was delightful to there mother's ear.":
        "'There' means a place. The mother belongs to them, so it is 'their mother's ear'.",
      'His answer to this sudden attack was delightful to their mothers ear.':
        "The ear belongs to their mother, so 'mother' needs an apostrophe and 's'.",
      'His answer to this sudden attack was delightful to there mothers ear.':
        "Two slips: 'their' shows belonging, and the ear is their mother's, with an apostrophe.",
    },
    more: 'Lydia has bluntly reminded Mr Bingley of his promise to give a ball. His polite yes delights Mrs Bennet.',
    tip: "Two kinds of owning word: 'their' never takes an apostrophe; a noun such as 'mother's' does.",
  },
  "I had hold of Joe's hand now, and Joe carried one of the torches.": {
    why: "The hand belongs to Joe, so his name takes an apostrophe and 's'. The second 'Joe' owns nothing, and 'torches' is a plain plural, so neither takes an apostrophe.",
    not: {
      'I had hold of Joes hand now, and Joe carried one of the torches.':
        "The hand belongs to Joe, so his name needs an apostrophe and 's'.",
      "I had hold of Joe's hand now, and Joe carried one of the torche's.":
        "'Joe's' is right, but 'torches' is a plain plural and owns nothing.",
      "I had hold of Joes hand now, and Joe carried one of the torche's.":
        "The apostrophe has moved from the owner, Joe, to 'torches', a plain plural.",
    },
    more: 'Pip and Joe follow the soldiers hunting the escaped convicts across the marshes at night.',
    tip: 'The same name can need an apostrophe in one place and not another. Ask each time whether it owns something.',
  },
  "The twins wore each other's jumpers.": {
    why: "'Each other' is treated as a single owner, so it takes an apostrophe and 's': each other's. 'Jumpers' is a plain plural, so it takes none.",
    not: {
      'The twins wore each others jumpers.':
        "'Each other' owns the jumpers, so it needs an apostrophe and 's': each other's.",
      "The twins wore each others' jumpers.":
        "'Each other' is treated as one owner, so the apostrophe goes before the 's': each other's.",
      "The twins wore each other's jumper's.":
        "'Each other's' is right, but 'jumpers' is a plain plural and owns nothing.",
    },
    more: "'Each other's' is right even when two or more people are involved, because 'other' is singular.",
    tip: "Write 'each other's' and 'one another's' with the apostrophe before the 's'.",
  },
  "It was nobody's fault that the trip was cancelled.": {
    why: "'Nobody' is a single word that can own things, so it takes an apostrophe and 's': nobody's fault. Its 'y' does not change.",
    not: {
      'It was nobodys fault that the trip was cancelled.':
        "The fault belongs to nobody, so 'nobody' needs an apostrophe and 's'.",
      "It was nobodies' fault that the trip was cancelled.":
        "'Nobody' has no plural here. It is one word, so it takes apostrophe and s: nobody's.",
      "It was nobodys' fault that the trip was cancelled.":
        "There is no word 'nobodys'. Add apostrophe and s to 'nobody': nobody's.",
    },
    more: "Words such as somebody, anybody, everyone and nobody take an apostrophe and 's' to show belonging: everyone's favourite.",
    tip: "Keep the word as it is and add apostrophe and s: nobody's, everybody's, someone's.",
  },
  "After a hard day's work, the farmer's dog slept soundly.": {
    why: "Two owners: the work of one day, a day's work, and the dog of one farmer, the farmer's dog. Each takes an apostrophe and 's'.",
    not: {
      "After a hard days work, the farmer's dog slept soundly.":
        "'A hard day's work' means the work of one day, so 'day' needs an apostrophe and 's'.",
      "After a hard day's work, the farmers dog slept soundly.":
        "The dog belongs to the farmer, so 'farmer' needs an apostrophe and 's'.",
      'After a hard days work, the farmers dog slept soundly.':
        "Two owners need apostrophes: a day's work, and the farmer's dog.",
    },
    more: "'A day's work' is one of many time phrases with an apostrophe: a night's sleep, a year's wait.",
    tip: "Ask 'the work of what?' and 'the dog of whom?'. Each answer is an owner that needs an apostrophe.",
  },
  "My sister's friends are coming to stay.": {
    why: "The writer has one sister, so the owner is singular and takes an apostrophe and 's': my sister's friends. 'Friends' is a plain plural.",
    not: {
      'My sisters friends are coming to stay.':
        "The friends belong to the sister, so 'sister' needs an apostrophe to show it.",
      "My sister's friend's are coming to stay.":
        "'Sister's' is right, but 'friends' is a plain plural and owns nothing.",
      "My sisters' friends are coming to stay.":
        "'Sisters'' would mean the friends of several sisters. The prompt says there is only one.",
    },
    more: "The apostrophe's position tells the reader how many owners there are: sister's is one, sisters' is more than one.",
    tip: 'Decide how many owners first. That one decision places the apostrophe.',
  },
  "She quite gloated on these questions and answers, so keen was her enjoyment of Sarah Pocket's jealous dismay.":
    {
      why: "The dismay is Sarah Pocket's, so her surname takes an apostrophe and 's'. With a full name, the apostrophe goes at the end of the whole name. 'Questions' is a plain plural.",
      not: {
        "She quite gloated on these question's and answers, so keen was her enjoyment of Sarah Pocket's jealous dismay.":
          "'Pocket's' is right, but 'questions' is a plain plural and owns nothing.",
        'She quite gloated on these questions and answers, so keen was her enjoyment of Sarah Pockets jealous dismay.':
          "The dismay belongs to Sarah Pocket, so her name needs an apostrophe and 's'.",
        "She quite gloated on these question's and answers, so keen was her enjoyment of Sarah Pockets jealous dismay.":
          "The apostrophe has moved from the owner, Sarah Pocket, to 'questions', a plain plural.",
      },
      more: "Miss Havisham enjoys Pip's good news because it makes her greedy relative Sarah Pocket jealous.",
      tip: "With a full name, put the apostrophe on the last word: Sarah Pocket's, Joe Gargery's.",
    },
  "He kept his very looks to himself, and scarcely directed his eyes to Estella's face once during dinner.":
    {
      why: "The face belongs to Estella, so her name takes an apostrophe and 's'. 'Looks' and 'eyes' are plain plurals that own nothing.",
      not: {
        "He kept his very look's to himself, and scarcely directed his eyes to Estella's face once during dinner.":
          "'Estella's' is right, but 'looks' is a plain plural and owns nothing.",
        'He kept his very looks to himself, and scarcely directed his eyes to Estellas face once during dinner.':
          "The face belongs to Estella, so her name needs an apostrophe and 's'.",
        "He kept his very looks to himself, and scarcely directed his eye's to Estellas face once during dinner.":
          "The apostrophe has moved from the owner, Estella, to 'eyes', a plain plural.",
      },
      more: 'Mr Jaggers barely looks at Estella. Pip later learns why: Jaggers knows who her mother is.',
      tip: 'Names ending in a vowel, such as Estella or Ogilvy, still just add apostrophe and s.',
    },
  "Apart from any inclinations of my own, I understand Wemmick's hint now.": {
    why: "The hint was given by Wemmick, so it is Wemmick's hint: one owner, apostrophe and 's'. 'Inclinations', wishes, is a plain plural with no apostrophe.",
    not: {
      "Apart from any inclination's of my own, I understand Wemmick's hint now.":
        "'Wemmick's' is right, but 'inclinations' is a plain plural and owns nothing.",
      'Apart from any inclinations of my own, I understand Wemmicks hint now.':
        "The hint is Wemmick's, so his name needs an apostrophe and 's'.",
      "Apart from any inclination's of my own, I understand Wemmicks hint now.":
        "The apostrophe has moved from the owner, Wemmick, to 'inclinations', a plain plural.",
    },
    more: "Wemmick had urged Pip to secure Magwitch's 'portable property'. Pip now sees why: once Magwitch is convicted, everything he owns will go to the Crown.",
    tip: 'A hint, a warning or an idea belongs to the person who gave it.',
  },
  "I saw the shadows of the heavy stair-rails, thrown by the watchman's lantern on the wall.": {
    why: "The lantern belongs to the watchman, one owner, so 'watchman' takes an apostrophe and 's'. 'Shadows' and 'stair-rails' are plain plurals.",
    not: {
      "I saw the shadow's of the heavy stair-rails, thrown by the watchman's lantern on the wall.":
        "'Watchman's' is right, but 'shadows' is a plain plural and owns nothing.",
      'I saw the shadows of the heavy stair-rails, thrown by the watchmans lantern on the wall.':
        "The lantern belongs to the watchman, so 'watchman' needs an apostrophe and 's'.",
      "I saw the shadow's of the heavy stair-rails, thrown by the watchmans lantern on the wall.":
        "The apostrophe has moved from the owner, the watchman, to 'shadows', a plain plural.",
    },
    more: "The plural of 'watchman' is 'watchmen', whose possessive is watchmen's. One watchman here, so watchman's.",
    tip: 'Words ending in -man change to -men in the plural, and take apostrophe and s either way.',
  },
  "Wiser now for the artilleryman's teaching, I sought out food and drink.": {
    why: "One soldier, the artilleryman, taught the narrator how to survive, so 'artilleryman' takes an apostrophe and 's'. Its plural would be 'artillerymen'.",
    not: {
      'Wiser now for the artillerymans teaching, I sought out food and drink.':
        "The teaching is the artilleryman's, so 'artilleryman' needs an apostrophe and 's'.",
      "Wiser now for the artillerymen's teaching, I sought out food and drink.":
        "The prompt says one artilleryman taught him, so the owner is singular: artilleryman's, not the plural 'artillerymen'.",
      "Wiser now for the artillerymans' teaching, I sought out food and drink.":
        "There is no word 'artillerymans'. One artilleryman's teaching is artilleryman's.",
    },
    more: 'Words ending in -man make their plural with -men: artilleryman, artillerymen. Pick the right number before adding the apostrophe.',
    tip: 'Ask how many owners there are, then spell that form and add the apostrophe.',
  },
  "The mention of Marley's funeral brings me back to the point I started from.": {
    why: "The funeral is Marley's, so his name takes an apostrophe and 's'. 'Brings' is a verb: the mention brings the narrator back. Verbs never take an apostrophe.",
    not: {
      'The mention of Marleys funeral brings me back to the point I started from.':
        "The funeral is Marley's, so his name needs an apostrophe and 's'.",
      "The mention of Marley's funeral bring's me back to the point I started from.":
        "'Marley's' is right, but 'brings' is a verb, what the mention does, and a verb takes no apostrophe.",
      "The mention of Marleys funeral bring's me back to the point I started from.":
        "The apostrophe has moved from the owner, Marley, to the verb 'brings'.",
    },
    more: 'The narrator insists that Marley is dead, because otherwise nothing wonderful can come of the story.',
    tip: "A verb ending in s after a singular subject, such as 'brings', 'takes' or 'makes', never takes an apostrophe.",
  },
  "We'll need everyone's help to finish the mural.": {
    why: "'We'll' is short for 'we will'. 'Everyone' is a single word, though it means many people, so it takes apostrophe and 's' to show belonging: everyone's help.",
    not: {
      "Well need everyone's help to finish the mural.":
        "Without its apostrophe, 'we'll', short for 'we will', becomes 'well', another word.",
      "We'll need everyones help to finish the mural.":
        "The help belongs to everyone, so 'everyone' needs an apostrophe and 's'.",
      'Well need everyones help to finish the mural.':
        "Two slips: 'we'll' needs its apostrophe, and so does 'everyone's'.",
    },
    more: "'Everyone', 'someone' and 'nobody' all count as single owners: everyone's, someone's, nobody's.",
    tip: "Never write 'everyones'' with the apostrophe after the s. It is always everyone's.",
  },
  "The boy's football landed in next door's garden.": {
    why: "One boy owns the football, so 'boy's' takes an apostrophe and 's'. 'Next door' is treated as one owner too, the house next door, so its garden is next door's garden.",
    not: {
      "The boy's football landed in next doors' garden.":
        "'Boy's' is right, but 'next door' is one owner, the house next door, so the apostrophe goes before the 's': next door's.",
      "The boys' football landed in next doors garden.":
        "'Boys'' would mean several boys own the football, and 'next doors' needs an apostrophe for the neighbours' garden.",
      "The boys football landed in next door's garden.":
        "'Next door's' is right, but the football belongs to one boy, so 'boy's' needs an apostrophe before the 's'.",
    },
    more: "'Next door's garden' is a phrase used as a single owner. The apostrophe goes at the end of the whole phrase.",
    tip: 'When a sentence has two owners, check each one separately.',
  },
  "They had just noticed this when a cry of despair broke from every animal's throat.": {
    why: "'Every' is followed by a singular noun: every animal, one at a time. So the owner is singular, and the possessive is 'animal's', even though many animals cry out.",
    not: {
      "They had just noticed this when a cry of despair broke from every animals' throat.":
        "'Every' is always followed by a singular word: every animal. So the possessive is 'animal's', not 'animals''.",
      'They had just noticed this when a cry of despair broke from every animals throat.':
        "'Every' takes a singular noun, 'animal', and the throat belongs to it, so it needs an apostrophe and 's'.",
      "They had just noticed this when a cry of despair broke from every animals's throat.":
        "'Every animal' is singular, so there is no plural 's'. The possessive is simply 'animal's'.",
    },
    more: "'Each' works the same way: each girl's coat, each player's boots. The meaning is plural, but the grammar is singular.",
    tip: "After 'every' or 'each', write the possessive as for one owner: every animal's.",
  },
  "Scrooge's countenance fell almost as low as the Ghost's had done.": {
    why: "Both are owners. 'Scrooge's countenance' is his face. 'The Ghost's' means 'the Ghost's countenance', with the noun left out to avoid repeating it, so it keeps its apostrophe.",
    not: {
      "Scrooges countenance fell almost as low as the Ghost's had done.":
        "The countenance, his face, belongs to Scrooge, so his name needs an apostrophe and 's'.",
      "Scrooge's countenance fell almost as low as the Ghosts had done.":
        "Only one Ghost is with Scrooge, and 'the Ghost's' stands for 'the Ghost's countenance', so it keeps its apostrophe.",
      'Scrooges countenance fell almost as low as the Ghosts had done.':
        "Both owners need apostrophes: Scrooge's countenance, and the Ghost's, meaning the Ghost's countenance.",
    },
    more: "Earlier, the Ghost's jaw dropped down on to its chest. Now, told he will be haunted by three Spirits, Scrooge's face falls almost as far.",
    tip: 'A possessive can stand alone when the noun is clear: "My bag is lighter than Sam\'s." It still needs its apostrophe.',
  },
  "Scrooge's niece's sisters, and all the other ladies, expressed the same opinion.": {
    why: "Two owners in a row: the niece belongs to Scrooge, so Scrooge's niece; the sisters belong to her, so the niece's sisters. 'Sisters' itself owns nothing, so it takes no apostrophe.",
    not: {
      'Scrooges nieces sisters, and all the other ladies, expressed the same opinion.':
        "Both owners need apostrophes, the niece is Scrooge's and the sisters are the niece's, but 'sisters' takes none.",
      "Scrooges niece's sister's, and all the other ladies, expressed the same opinion.":
        "'Scrooge's' needs its apostrophe, and 'sisters' is a plain plural that owns nothing, so it takes none.",
      "Scrooge's nieces sister's, and all the other ladies, expressed the same opinion.":
        "The niece owns the sisters, so 'niece's' needs the apostrophe, not 'sisters'.",
    },
    more: "Each owner takes its own apostrophe, even in a chain: Scrooge's niece's sisters.",
    tip: 'In a chain of owners, give every owner an apostrophe and leave the last noun alone.',
  },
  "It is that the chief proof of man's real greatness lies in his perception of his own smallness.":
    {
      why: "'Man' here means humanity, a single owner, so it takes an apostrophe and 's'. 'Lies' is a verb, the proof lies in something, so it takes none.",
      not: {
        'It is that the chief proof of mans real greatness lies in his perception of his own smallness.':
          "The greatness belongs to man, meaning people in general, so 'man' needs an apostrophe and 's'.",
        "It is that the chief proof of man's real greatness lie's in his perception of his own smallness.":
          "'Man's' is right, but 'lies' is a verb here, what the proof does, and a verb takes no apostrophe.",
        "It is that the chief proof of mans real greatness lie's in his perception of his own smallness.":
          "The apostrophe has moved from the owner, man, to the verb 'lies'.",
      },
      more: "Holmes is quoting a German writer: true greatness shows in knowing how small we are. 'Man' as a word for all people is old-fashioned, but still singular.",
      tip: "Read the sentence for its verb first. Once you know 'lies' is the verb, you know it takes no apostrophe.",
    },
  "A boy from the town, trenching on Smith's monopoly, was selling papers with the afternoon's news.":
    {
      why: "Two owners: the monopoly belongs to Smith, the newsagent, and the news belongs to the afternoon. Each takes an apostrophe and 's'. 'Papers' is a plain plural and owns nothing.",
      not: {
        'A boy from the town, trenching on Smiths monopoly, was selling papers with the afternoons news.':
          "Both owners need apostrophes: the monopoly is Smith's and the news is the afternoon's.",
        "A boy from the town, trenching on Smiths monopoly, was selling paper's with the afternoon's news.":
          "'Smith's' needs its apostrophe, and 'papers' is a plain plural that owns nothing.",
        "A boy from the town, trenching on Smith's monopoly, was selling paper's with the afternoons news.":
          "'Papers' is a plain plural with no apostrophe, and the news belongs to the afternoon: afternoon's.",
      },
      more: "'Trenching on Smith's monopoly' means stealing his trade: Smith has the right to sell papers at the station. Time, like 'the afternoon', can own things too.",
      tip: 'Go through a long sentence owner by owner, then check every plural for a stray apostrophe.',
    },
  "Her eyes met my brother's, and her hesitation ended.": {
    why: "'My brother's' stands for 'my brother's eyes': the noun is left out because it has just been used. It is still a possessive, so it keeps its apostrophe.",
    not: {
      'Her eyes met my brothers, and her hesitation ended.':
        "The narrator has one brother, and 'my brother's' stands for 'my brother's eyes', with the noun left out, so it keeps its apostrophe.",
      "Her eyes met my brothers', and her hesitation ended.":
        "'Brothers'' would mean the eyes of several brothers. The narrator has one, so the apostrophe goes before the 's'.",
      "Her eyes' met my brothers, and her hesitation ended.":
        "'Eyes' is a plain plural and takes no apostrophe, while 'my brother's', standing for his eyes, needs one.",
    },
    more: "Without the apostrophe, 'my brothers' would mean more than one brother, which changes the meaning completely.",
    tip: 'When a possessive stands alone, ask what noun has been left out. If one has, the apostrophe stays.',
  },
  "A hoof missed my brother's foot by a hair's breadth.": {
    why: "Two owners. The foot belongs to the brother: brother's. And 'a hair's breadth' means the breadth, the width, of a single hair, so 'hair' takes an apostrophe and 's' too.",
    not: {
      "A hoof missed my brothers foot by a hair's breadth.":
        "The foot belongs to the brother, so 'brother' needs an apostrophe and 's'.",
      "A hoof missed my brother's foot by a hairs breadth.":
        "'A hair's breadth' means the width of one hair. 'Hair' owns the breadth, so it needs an apostrophe and 's'.",
      'A hoof missed my brothers foot by a hairs breadth.':
        "Both owners need apostrophes: my brother's foot, and a hair's breadth, the width of a hair.",
    },
    more: "'A hair's breadth' means 'only just': the hoof nearly hit him. Fixed phrases like this keep their apostrophes however often they are used.",
    tip: "Learn the common fixed phrases: a hair's breadth, at arm's length, a stone's throw.",
  },
  "I picked up someone else's coat by mistake.": {
    why: "The owner is 'someone else', a two-word phrase. The apostrophe and 's' go at the end of the whole phrase: someone else's coat.",
    not: {
      'I picked up someone elses coat by mistake.':
        "The coat belongs to someone else, so the whole phrase 'someone else' takes an apostrophe and 's'.",
      "I picked up someone's else coat by mistake.":
        "The owner is the whole phrase 'someone else', so the apostrophe goes at its end: someone else's.",
      "I picked up someone elses' coat by mistake.":
        "There is no word 'elses'. Add apostrophe and s to the end of 'someone else': someone else's.",
    },
    more: "The same happens with 'anyone else's', 'nobody else's' and 'the King of Spain's'. The apostrophe goes at the end of the whole owner.",
    tip: 'When the owner is more than one word, put the apostrophe at the end of the last word.',
  },
  "We had a week's holiday at my aunt's.": {
    why: "Two owners. 'A week's holiday' is a holiday of one week, so 'week' takes an apostrophe and 's'. 'At my aunt's' means at my aunt's house: the noun is left out, but the apostrophe stays.",
    not: {
      "We had a weeks holiday at my aunt's.":
        "'A week's holiday' means a holiday lasting one week, so 'week' needs an apostrophe and 's'.",
      "We had a week's holiday at my aunts.":
        "'My aunt's' means 'my aunt's house', with the noun left out, so it keeps its apostrophe.",
      "We had a weeks' holiday at my aunt's.":
        "'A' means one week, so the apostrophe goes before the 's': a week's. 'Weeks'' is for two weeks or more.",
    },
    more: "We often drop the noun after a possessive when it is obvious: at the dentist's, at the baker's, at Grandma's.",
    tip: "One unit of time: a week's, a day's, a year's. Two or more: two weeks', three days'.",
  },
  "The class's results improved, but the other classes' results fell.": {
    why: "One class is singular: the class's results, with apostrophe and 's'. 'The other classes' are several, and their plural already ends in s, so it takes only an apostrophe: classes'.",
    not: {
      "The classes' results improved, but the other classes' results fell.":
        "Only one class improved, so the first owner is singular and takes apostrophe and 's': class's.",
      "The class's results improved, but the other class's results fell.":
        "Four other classes did worse, so the plural takes only an apostrophe: classes'.",
      "The classes results improved, but the other class's results fell.":
        "Both are wrong: the one class that improved is class's, and the four others are classes'.",
    },
    more: "Nouns ending in s, such as class and bus, take apostrophe and s for one owner: the class's, the bus's. Their plurals add -es: classes', buses'.",
    tip: 'Say it aloud: "the class-iz results" for one class. That extra sound is the extra s.',
  },
  "The boss's office is next to the workers' canteen.": {
    why: "One boss: the boss's office, with apostrophe and 's' after the word's own 's'. Many workers: the workers' canteen, with the apostrophe after the plural 's'.",
    not: {
      "The bosses office is next to the workers' canteen.":
        "'The boss' is one person, so the possessive is boss's, with apostrophe and 's'. 'Bosses' is the plural.",
      "The boss's office is next to the worker's canteen.":
        "The canteen is for all the workers, so the plural takes the apostrophe after its 's': workers'.",
      "The bosses office is next to the worker's canteen.":
        "Both are the wrong way round: one boss is boss's, and many workers are workers'.",
    },
    more: "A singular noun ending in s still takes apostrophe and s: the boss's, the bus's, the glass's.",
    tip: 'Write the owner for the right number first, boss or workers, then add the apostrophe to the end of it.',
  },
  "Like the clock in Miss Havisham's room, and like Miss Havisham's watch, it had stopped at twenty minutes to nine.":
    {
      why: "The room and the watch both belong to Miss Havisham, one owner, so her name takes an apostrophe and 's' each time. 'Minutes' is a plain plural, so it takes none.",
      not: {
        "Like the clock in Miss Havishams room, and like Miss Havisham's watch, it had stopped at twenty minute's to nine.":
          "The room is Miss Havisham's, so the first needs an apostrophe, and 'minutes' is a plain plural with none.",
        "Like the clock in Miss Havisham's room, and like Miss Havishams watch, it had stopped at twenty minute's to nine.":
          "The watch is Miss Havisham's too, so the second needs an apostrophe, and 'minutes' takes none.",
        'Like the clock in Miss Havishams room, and like Miss Havishams watch, it had stopped at twenty minutes to nine.':
          "Both owners need apostrophes: the room and the watch are both Miss Havisham's.",
      },
      more: 'Every clock in Satis House stopped at the moment Miss Havisham was jilted. The repeated possessive ties the stopped time to her.',
      tip: 'When the same owner appears twice, give her name an apostrophe both times.',
    },
  "I can't find my keys, and Dad's are missing too.": {
    why: "'Can't' is short for 'cannot'. 'Keys' is a plain plural. 'Dad's' stands for 'Dad's keys': the noun is left out to avoid repeating it, but Dad is still the owner, so the apostrophe stays.",
    not: {
      'I cant find my keys, and Dads are missing too.':
        "'Can't' needs its apostrophe for 'cannot', and 'Dad's' means Dad's keys, so it needs one too.",
      "I cant find my key's, and Dad's are missing too.":
        "'Can't' needs its apostrophe, and 'keys' is a plain plural that owns nothing.",
      "I can't find my key's, and Dads are missing too.":
        "'Keys' is a plain plural with no apostrophe, and 'Dad's' stands for Dad's keys, so it needs one.",
    },
    more: "Without the apostrophe, 'Dads are missing' would mean more than one dad has gone missing.",
    tip: 'When a possessive stands alone, ask what noun it stands for. If there is one, keep the apostrophe.',
  },
  "Who's coming to Grandma's for lunch?": {
    why: "'Who's' is short for 'who is'. 'Grandma's' stands for 'Grandma's house': the noun is left out, as it often is with homes and shops, but the apostrophe stays.",
    not: {
      "Whose coming to Grandma's for lunch?":
        "'Whose' asks about belonging. 'Who is coming' needs 'Who's'.",
      "Who's coming to Grandmas for lunch?":
        "'Grandma's' means Grandma's house, with the noun left out, so it keeps its apostrophe.",
      'Whose coming to Grandmas for lunch?':
        "Two slips: 'Who is coming' needs 'Who's', and 'Grandma's', meaning her house, needs its apostrophe.",
    },
    more: "We say 'at the dentist's', 'to the baker's', 'round at Sam's'. Each is a possessive with the noun understood.",
    tip: "Going to someone's home is going 'to Grandma's', with an apostrophe.",
  },
  "The student's work was displayed in the hall.": {
    why: "One student owns the work, so the owner is singular and takes apostrophe and 's': the student's work.",
    not: {
      "The students' work was displayed in the hall.":
        "'Students'' would mean the work of several students. The prompt says all of it was by one student.",
      'The students work was displayed in the hall.':
        "The work belongs to the student, so the word needs an apostrophe and 's'.",
      "The students's work was displayed in the hall.":
        "Even for several students this would be wrong: 'students' already ends in a plural 's', so it takes only an apostrophe. One student here is student's.",
    },
    more: "The two forms, student's and students', look nearly the same but describe very different displays.",
    tip: 'In your own writing, decide the number of owners before you write the apostrophe.',
  },
  "Napoleon snuffed deeply at them and pronounced them to be Snowball's.": {
    why: "'Them' are footprints, and Napoleon says they belong to Snowball: Snowball's footprints, with the noun left out. A possessive standing alone like this still takes its apostrophe.",
    not: {
      'Napoleon snuffed deeply at them and pronounced them to be Snowballs.':
        "'Snowball's' means Snowball's footprints. Without the apostrophe it reads as if there were several Snowballs.",
      "Napoleon snuffed deeply at them and pronounced them to be Snowballs'.":
        "There is only one Snowball, so the possessive is Snowball's, with the apostrophe before the 's'.",
      'Napoleon snuffed deeply at them and pronounced them to be Snowball.':
        "The footprints are not Snowball himself: they belong to him, so the name needs an apostrophe and 's'.",
    },
    more: 'Napoleon blames Snowball for the fallen windmill. The animals cannot check his claim, which is the point.',
    tip: 'A possessive at the end of a sentence often stands for a noun said earlier. Keep its apostrophe.',
  },
  "After an hour's wait, we had to queue for another two hours.": {
    why: "'An hour's wait' is a wait lasting one hour: time as owner, so 'hour' takes apostrophe and 's'. 'Two hours' at the end just says how long: a plain plural with no apostrophe, because it owns nothing.",
    not: {
      'After an hours wait, we had to queue for another two hours.':
        "'An hour's wait' is a wait of one hour, a possessive of time, so 'hour' needs an apostrophe and 's'.",
      "After an hour's wait, we had to queue for another two hours'.":
        "'Two hours' here is a plain plural, how long they queued. Nothing follows that it owns, so it takes no apostrophe.",
      "After an hours' wait, we had to queue for another two hour's.":
        "Both are the wrong way round: one hour's wait has the apostrophe before the 's', and the plain plural 'hours' takes none.",
    },
    more: "Time takes an apostrophe only when it comes before the thing it measures: an hour's wait, but wait for an hour.",
    tip: "Ask whether a noun follows the time word. 'An hour's wait': yes, apostrophe. 'For two hours': no.",
  },
  "Grandad's stories are better than anyone else's.": {
    why: "Two owners. The stories are Grandad's. 'Anyone else's' stands for anyone else's stories: the noun is left out, and the owner is the whole phrase 'anyone else', so the apostrophe goes at its end.",
    not: {
      "Grandads stories are better than anyone else's.":
        "The stories are Grandad's, so the word needs an apostrophe and 's'.",
      "Grandad's stories are better than anyone elses.":
        "'Anyone else's' means anyone else's stories, so the phrase needs its apostrophe at the end.",
      "Grandads story's are better than anyone else's.":
        "Two slips: the stories are Grandad's, so his name needs an apostrophe, and 'stories' is a plain plural, not 'story's'.",
    },
    more: 'A word ending in -y makes its plural with -ies: story, stories. An apostrophe never makes a plural.',
    tip: "In a comparison, the second owner often stands alone: better than Sam's, faster than anyone else's.",
  },
  "My parents' house is near the river.": {
    why: "Two parents own the house, so the owner is plural: 'parents'. A plural that ends in 's' takes only an apostrophe after it, so the house is the parents' house.",
    not: {
      'My parents house is near the river.':
        'The house belongs to the parents, so the word needs an apostrophe to show that they own it.',
      "My parent's house is near the river.":
        "'Parent's' would mean the house belongs to one parent. The prompt says both parents live there.",
      "My parents's house is near the river.":
        "'Parents' already ends in a plural 's', so it takes only an apostrophe after it. Adding another 's' makes a word no one says.",
    },
    more: "For one owner add apostrophe and s: my parent's car. For several owners whose plural ends in s, add just the apostrophe: my parents' car.",
    tip: 'Write the owner as a plural first, then look at the last letter. If it is s, add only the apostrophe.',
  },
  "The witnesses' statements matched exactly.": {
    why: "Several witnesses gave statements, so the owner is the plural 'witnesses'. A plural that ends in 's' takes only an apostrophe after it: the witnesses' statements.",
    not: {
      'The witnesses statements matched exactly.':
        'The statements belong to the witnesses, so the word needs an apostrophe to show that they own them.',
      "The witness's statements matched exactly.":
        "'Witness's' would mean one witness gave the statements. The prompt says several witnesses did.",
      "The witnesses's statements matched exactly.":
        "'Witnesses' already ends in a plural 's', so it takes only an apostrophe after it, with no extra 's'.",
    },
    more: 'Words ending in -ss make their plural with -es: witness, witnesses. Spell the plural first, then add the apostrophe.',
    tip: 'One owner: witness\'s. Several: witnesses\'. Say it aloud: both have an extra "iz" sound.',
  },
  "Both countries' leaders signed the treaty.": {
    why: "'Both' tells us there are two countries, so the owner is plural and the apostrophe goes after the 's' of 'countries': countries'.",
    not: {
      'Both countries leaders signed the treaty.':
        'The leaders belong to the countries, so the word needs an apostrophe to show it.',
      "Both country's leaders signed the treaty.":
        "'Both' means two countries, but 'country's' is the form for one. Two countries need the plural, 'countries''.",
      "Both countries's leaders signed the treaty.":
        "'Countries' already ends in a plural 's', so it takes only an apostrophe, with no extra 's'.",
    },
    more: "The plural of 'country' is 'countries', not 'countrys'. Spell the plural first, then add the apostrophe: country's (one), countries' (several).",
    tip: "Look for clue words such as 'both', 'many', 'all' or a number. They show that the owner is plural.",
  },
  "Afterwards Squealer made a round of the farm and set the animals' minds at rest.": {
    why: "Many animals, each with a mind, so the owner is plural. 'Animals' ends in 's', so the apostrophe goes after it: the animals' minds.",
    not: {
      "Afterwards Squealer made a round of the farm and set the animal's minds at rest.":
        "'Minds' shows there are several animals, each with a mind, so the owner is the plural 'animals'', not one animal.",
      'Afterwards Squealer made a round of the farm and set the animals minds at rest.':
        'The minds belong to the animals, so the word needs an apostrophe to show that they own them.',
      "Afterwards Squealer made a round of the farm and set the animals's minds at rest.":
        "'Animals' already ends in a plural 's', so it takes only an apostrophe, with no extra 's'.",
    },
    more: "Squealer's 'round' is his trick: he talks the worried animals out of their doubts, one by one.",
    tip: "A plural thing owned, such as 'minds', can be a clue that the owners are plural too.",
  },
  "At this sight the animals' courage returned to them.": {
    why: "'Returned to them' tells us the owners are plural: all the animals. The plural 'animals' ends in 's', so the apostrophe goes after it: the animals' courage.",
    not: {
      "At this sight the animal's courage returned to them.":
        "'To them' shows there are several animals, so the owner is the plural 'animals'', not one animal.",
      'At this sight the animals courage returned to them.':
        'The courage belongs to the animals, so the word needs an apostrophe to show that they own it.',
      "At this sight the animals's courage returned to them.":
        "'Animals' already ends in a plural 's', so it takes only an apostrophe.",
    },
    more: "'This sight' is the windmill being blown up. Their courage returns as anger, and they charge the men.",
    tip: "Look for 'them', 'their' or 'they' later in the sentence. They show the owner is plural.",
  },
  "In glowing sentences he painted a picture of Animal Farm as it might be when sordid labour was lifted from the animals' backs.":
    {
      why: "The backs belong to all the animals, so the plural 'animals' takes an apostrophe after its 's'. 'Sentences' is a plain plural and takes none.",
      not: {
        "In glowing sentence's he painted a picture of Animal Farm as it might be when sordid labour was lifted from the animals' backs.":
          "'Animals'' is right, but 'sentences' is a plain plural and owns nothing.",
        'In glowing sentences he painted a picture of Animal Farm as it might be when sordid labour was lifted from the animals backs.':
          "The backs belong to the animals, so the plural needs an apostrophe after its 's'.",
        "In glowing sentence's he painted a picture of Animal Farm as it might be when sordid labour was lifted from the animals backs.":
          "The apostrophe has moved from the owners, the animals, to 'sentences', a plain plural.",
      },
      more: "Snowball is describing life once the windmill is built. 'Sordid labour' means grinding, dirty work.",
      tip: "'Backs' is plural, and so are the owners: the animals' backs.",
    },
  "It was mixed every day into the pigs' mash.": {
    why: "The mash belongs to all the pigs, so the owner is the plural 'pigs'. It ends in 's', so the apostrophe goes after it: the pigs' mash.",
    not: {
      "It was mixed every day into the pig's mash.":
        "'Pig's' would mean the mash of one pig. The prompt says it is for all the pigs.",
      'It was mixed every day into the pigs mash.':
        "Some style guides drop the apostrophe in phrases like this, but schools teach the pigs' mash, with the apostrophe after the 's', because the mash is the pigs'.",
      "It was mixed every day into the pigs's mash.":
        "'Pigs' already ends in a plural 's', so it takes only an apostrophe, with no extra 's'.",
    },
    more: "'It' is the missing milk. The animals learn it has gone into the pigs' food: the first sign of their privilege.",
    tip: "Plural owners ending in s take just an apostrophe: the pigs', the hens', the horses'.",
  },
  "Every day added something to their knowledge of the officers' names and connections.": {
    why: "The names belong to many officers, so the plural 'officers' takes an apostrophe after its 's'. 'Their' shows the knowledge belongs to the girls, with no apostrophe.",
    not: {
      "Every day added something to there knowledge of the officers' names and connections.":
        "'There' means a place. The knowledge belongs to them, so it is 'their knowledge'.",
      "Every day added something to their knowledge of the officer's names and connections.":
        "Kitty and Lydia are learning about a whole regiment, so the owners are the plural 'officers''.",
      "Every day added something to there knowledge of the officer's names and connections.":
        "Two slips: the knowledge is 'their' knowledge, and the names belong to many officers, so it is 'officers''.",
    },
    more: 'A regiment of soldiers has arrived in Meryton, and the youngest Bennet sisters can talk of nothing else.',
    tip: "'Names and connections' are plural things owned by plural owners: the officers'.",
  },
  "Are spirits' lives so short?": {
    why: "Scrooge is asking about spirits in general, so the owner is plural: spirits. The plural ends in 's', so the apostrophe goes after it: spirits' lives.",
    not: {
      "Are spirit's lives so short?":
        "Scrooge asks about spirits in general, so the owners are plural: spirits'. 'Spirit's' would mean one spirit.",
      'Are spirits lives so short?':
        'The lives belong to the spirits, so the word needs an apostrophe to show that they own them.',
      "Are spirits's lives so short?":
        "'Spirits' already ends in a plural 's', so it takes only an apostrophe.",
    },
    more: "Scrooge has noticed the Ghost's hair turning grey. It answers that its life on earth is very brief: it ends tonight.",
    tip: 'When you mean a whole kind of thing, such as spirits or teachers in general, the owner is plural.',
  },
  "The horses' bits were covered with foam, their eyes bloodshot.": {
    why: "'Their eyes' later in the sentence shows that several horses are meant. Their plural ends in 's', so the bits are the horses' bits. 'Eyes' is a plain plural.",
    not: {
      "The horse's bits were covered with foam, their eyes bloodshot.":
        "'Their eyes' shows there are several horses, so the owner is the plural 'horses''.",
      "The horses' bits were covered with foam, their eye's bloodshot.":
        "'Horses'' is right, but 'eyes' is a plain plural and owns nothing.",
      "The horse's bits were covered with foam, their eye's bloodshot.":
        "Two slips: several horses means 'horses'', and the plain plural 'eyes' takes no apostrophe.",
    },
    more: "The bits are the metal bars in the horses' mouths. Foam and bloodshot eyes show they have been driven hard in the escape from London.",
    tip: 'A plural pronoun later in the sentence, "their", can tell you the owner is plural.',
  },
  "Both teams' fans sang loudly.": {
    why: "'Both' tells us there are two teams, so the owner is plural: teams. It ends in 's', so the apostrophe goes after it: both teams' fans. 'Fans' owns nothing.",
    not: {
      "Both team's fans sang loudly.":
        "'Both' means two teams, but 'team's' is the form for one. Two teams need the plural, 'teams''.",
      'Both teams fans sang loudly.':
        'The fans belong to the teams, so the word needs an apostrophe to show that they own them.',
      "Both teams' fan's sang loudly.":
        "'Teams'' is right, but 'fans' is a plain plural and owns nothing.",
    },
    more: "'Both', 'all', 'several' and numbers above one are clues that the owner is plural.",
    tip: 'Underline the clue word, such as "both", before you decide where the apostrophe goes.',
  },
  "All the runners' shoes were muddy.": {
    why: "The prompt says there were many runners, so the owner is plural: runners. The plural ends in 's', so the apostrophe follows it: the runners' shoes.",
    not: {
      "All the runner's shoes were muddy.":
        "'Runner's' would mean the shoes of one runner, which can be a correct sentence. The prompt says there were many runners, so it is runners'.",
      'All the runners shoes were muddy.':
        'The shoes belong to the runners, so the word needs an apostrophe to show that they own them.',
      "All the runners' shoe's were muddy.":
        "'Runners'' is right, but 'shoes' is a plain plural and owns nothing.",
    },
    more: "Compare one runner: the runner's shoes. Where the apostrophe sits tells the reader how many owners there are.",
    tip: "For a plural owner, write the plural first, 'runners', then add the apostrophe.",
  },
  "My two brothers' bedrooms are next to mine.": {
    why: "'Two brothers' is plural and ends in 's', so the apostrophe goes after it: my two brothers' bedrooms. 'Mine' already shows belonging, so it takes no apostrophe.",
    not: {
      "My two brother's bedrooms are next to mine.":
        "'Two' means more than one brother, so the plural 'brothers' takes the apostrophe after its 's'.",
      "My two brothers' bedroom's are next to mine.":
        "'Brothers'' is right, but 'bedrooms' is a plain plural and owns nothing.",
      "My two brother's bedroom's are next to mine.":
        "Two slips: two brothers need the plural 'brothers'', and 'bedrooms' is a plain plural with no apostrophe.",
    },
    more: 'Possessive pronouns such as mine, yours, his, hers, ours and theirs never take an apostrophe.',
    tip: 'Numbers are the clearest clue: two, three, ten brothers mean a plural owner.',
  },
  "The three witches' chant opens the play.": {
    why: "'Three witches' is a plural ending in 's', so the apostrophe goes after it: the three witches' chant. The witches open Macbeth together.",
    not: {
      "The three witch's chant opens the play.":
        "'Three' means more than one witch, so the owner is the plural 'witches'', not 'witch's'.",
      'The three witches chant opens the play.':
        'The chant belongs to the witches, so the word needs an apostrophe to show that they own it.',
      "The three witche's chant opens the play.":
        "The plural of 'witch' is 'witches'. Spell the plural first, then add the apostrophe after its 's'.",
    },
    more: 'Nouns ending in -ch, -sh, -s or -x add -es for the plural: witch, witches. The apostrophe then follows the -es.',
    tip: "Spell the plural correctly before you add the apostrophe: witches, then witches'.",
  },
  "The ladies' toilets are upstairs.": {
    why: "The toilets are for ladies, plural. 'Lady' becomes 'ladies' in the plural, which ends in 's', so the apostrophe goes after it: ladies'.",
    not: {
      "The lady's toilets are upstairs.":
        "The toilets are for ladies in general, many people, so the owner is the plural 'ladies''.",
      "The ladys' toilets are upstairs.":
        "The plural of 'lady' is 'ladies', not 'ladys'. Spell the plural first, then add the apostrophe.",
      'The ladies toilets are upstairs.':
        "Signs and some style guides often leave this apostrophe out, but schools teach the ladies' toilets, with the apostrophe after the 's', for toilets meant for ladies.",
    },
    more: 'Nouns ending in a consonant and y change to -ies in the plural: lady, ladies; baby, babies. The apostrophe follows the -ies.',
    tip: 'Make the plural first, ladies, then add the apostrophe after it.',
  },
  "The babies' cots were lined up in a row.": {
    why: "A row of cots means several babies, so the owner is plural: 'babies'. It ends in 's', so the apostrophe goes after it: the babies' cots.",
    not: {
      "The baby's cots were lined up in a row.":
        "Cots in a row means several babies, so the owner is the plural 'babies''.",
      "The babie's cots were lined up in a row.":
        "There is no word 'babie'. The plural is 'babies', and its apostrophe goes after the 's'.",
      'The babies cots were lined up in a row.':
        "The cots belong to the babies, so the plural needs an apostrophe after its 's'.",
    },
    more: "One baby: the baby's cot. Several babies: the babies' cots. The 'y' changes only in the plural.",
    tip: 'Check -y words twice: spelling first (baby or babies), then the apostrophe.',
  },
  "Several countries' flags flew outside the hotel.": {
    why: "'Several' tells us the owners are plural: countries. The plural ends in 's', so the apostrophe goes after it: several countries' flags. 'Flags' owns nothing.",
    not: {
      "Several country's flags flew outside the hotel.":
        "'Several' means more than one country, so the owner is the plural 'countries''.",
      "Several country's flag's flew outside the hotel.":
        "Two slips: several countries need the plural 'countries'', and the plain plural 'flags' takes no apostrophe.",
      "Several countries' flag's flew outside the hotel.":
        "'Countries'' is right, but 'flags' is a plain plural and owns nothing.",
    },
    more: "Spell the plural before you add the apostrophe: country, countries, countries'.",
    tip: "'Several', 'many' and 'all' are clues that the owner is plural.",
  },
  "Most of my classmates' parents came to the concert.": {
    why: "'Most of my classmates' means many classmates, so the owner is plural: classmates. The plural ends in 's', so the apostrophe goes after it. 'Parents' owns nothing.",
    not: {
      "Most of my classmate's parents came to the concert.":
        "'Most of my classmates' means many classmates, so the owner is plural and the apostrophe goes after the 's'.",
      "Most of my classmates' parent's came to the concert.":
        "'Classmates'' is right, but 'parents' is a plain plural and owns nothing.",
      'Most of my classmates parents came to the concert.':
        "The parents belong to the classmates, so the plural needs an apostrophe after its 's'.",
    },
    more: "'Most of', 'all of' and 'some of' come before plural owners.",
    tip: 'Find the owner word and decide: one or many? Here "most of" makes it many.',
  },
  "She not unfrequently stopped at the Parsonage, and had a few minutes' conversation with Charlotte, but was scarcely ever prevailed on to get out.":
    {
      why: "'A few minutes' conversation' is a conversation lasting a few minutes. 'A few' makes the time plural, and the plural ends in 's', so the apostrophe follows it: minutes'.",
      not: {
        "She not unfrequently stopped at the Parsonage, and had a few minute's conversation with Charlotte, but was scarcely ever prevailed on to get out.":
          "'A few' means more than one minute, so the word is the plural 'minutes', and the apostrophe goes after its 's'.",
        'She not unfrequently stopped at the Parsonage, and had a few minutes conversation with Charlotte, but was scarcely ever prevailed on to get out.':
          "Some style guides drop the apostrophe in time phrases like this, but schools and most guides keep it, as the novel does: a few minutes' conversation.",
        "She not unfrequently stopped at the Parsonage, and had a few minutes's conversation with Charlotte, but was scarcely ever prevailed on to get out.":
          "'Minutes' already ends in a plural 's', so it takes only an apostrophe, with no extra 's'.",
      },
      more: 'Miss De Bourgh often stops her small carriage, a phaeton, at the Parsonage, but can hardly ever be persuaded to get out of it.',
      tip: "Count the units of time: a second's thought, but a few seconds' thought. More than one, ending in s, takes just the apostrophe.",
    },
  "And in a few days' time the pigs intended to hold a memorial banquet in Boxer's honour.": {
    why: "'In a few days' time' is time belonging to several days, so the plural 'days' takes an apostrophe after its 's'. The honour is Boxer's, one owner, with apostrophe and 's'. 'Pigs' owns nothing.",
    not: {
      "And in a few day's time the pigs' intended to hold a memorial banquet in Boxer's honour.":
        "Two slips: 'a few days' is plural, so the apostrophe goes after the 's', and 'pigs' is a plain plural subject.",
      "And in a few day's time the pigs intended to hold a memorial banquet in Boxers honour.":
        "Two slips: 'a few days' is plural, so it is days', and the honour is Boxer's, which needs an apostrophe.",
      "And in a few days' time the pigs' intended to hold a memorial banquet in Boxers honour.":
        "'Days'' is right, but 'pigs' is a plain plural subject, and the honour is Boxer's, with an apostrophe.",
    },
    more: 'Napoleon announces the banquet in his speech after Boxer has been taken away. Soon after, the pigs somehow find money to buy whisky.',
    tip: "'In a week's time', 'in a few days' time', 'in two years' time': count the units of time to place the apostrophe.",
  },
  "Snowball also threw on to the fire the ribbons with which the horses' manes and tails had usually been decorated on market days.":
    {
      why: "The manes and tails belong to several horses, so 'horses' takes an apostrophe after its 's'. 'Market days' is a plain plural, more than one day, and owns nothing.",
      not: {
        "Snowball also threw on to the fire the ribbons with which the horse's manes and tails had usually been decorated on market days.":
          "Several manes means several horses, so the owner is the plural 'horses'', with the apostrophe after the 's'.",
        "Snowball also threw on to the fire the ribbons with which the horses' manes and tails had usually been decorated on market day's.":
          "'Horses'' is right, but 'days' is a plain plural and owns nothing.",
        "Snowball also threw on to the fire the ribbons with which the horses manes and tails had usually been decorated on market day's.":
          "The apostrophe has moved from the owners, the horses, to 'days', a plain plural.",
      },
      more: "Snowball says ribbons count as clothes, 'the mark of a human being', so they burn with the whips and halters.",
      tip: 'Read past the owner to the thing owned: several manes usually means several horses.',
    },
  "She had been growing increasingly hysterical, fearful, and depressed during the two days' journeyings.":
    {
      why: "'The two days' journeyings' means the travelling of two days. Time can own things, and two days is plural, so the apostrophe goes after the 's': days'.",
      not: {
        "She had been growing increasingly hysterical, fearful, and depressed during the two day's journeyings.":
          "'Two' means more than one day, so the plural 'days' takes the apostrophe after its 's'.",
        'She had been growing increasingly hysterical, fearful, and depressed during the two days journeyings.':
          "Some style guides drop the apostrophe in time phrases, but schools and most guides keep it, as the novel does: the two days' journeyings, the journeys of two days.",
        "She had been growing increasingly hysterical, fearful, and depressed during the two days' journeying's.":
          "'Days'' is right, but 'journeyings' is a plain plural and owns nothing.",
      },
      more: "Time phrases such as 'a day's journey' and 'two days' journey' follow the ordinary rule for one owner or several.",
      tip: "Count the units of time. One: 's. More than one, ending in s: just the apostrophe.",
    },
  "Our landlord gave us two weeks' notice.": {
    why: "'Two weeks' notice' is a phrase of time: notice of two weeks. Two weeks is plural and ends in 's', so the apostrophe goes after it: weeks'.",
    not: {
      "Our landlord gave us two week's notice.":
        "'Two' means more than one week, so the plural 'weeks' takes the apostrophe after its 's'.",
      'Our landlord gave us two weeks notice.':
        "Many writers leave this apostrophe out, and some style guides accept that, but schools and most guides write two weeks' notice: notice of two weeks.",
      "Our landlord gave us two weeks's notice.":
        "'Weeks' already ends in a plural 's', so it takes only an apostrophe, with no extra 's'.",
    },
    more: "Compare 'a week's notice', for one week, with 'two weeks' notice', for two. Many adults leave the apostrophe out of the second, but schools expect it.",
    tip: "Count the weeks. One: a week's notice. Two or more: two weeks' notice.",
  },
  "In two years' time, the new bridge will open.": {
    why: "'In two years' time' means in a time of two years. Two years is plural and ends in 's', so the apostrophe goes after it: years'.",
    not: {
      "In two year's time, the new bridge will open.":
        "'Two' means more than one year, so the plural 'years' takes the apostrophe after its 's'.",
      'In two years time, the new bridge will open.':
        "Some style guides drop the apostrophe in time phrases like this, but schools and most guides keep it: in two years' time, a time of two years.",
      "In two years's time, the new bridge will open.":
        "'Years' already ends in a plural 's', so it takes only an apostrophe, with no extra 's'.",
    },
    more: "The singular works the same way with apostrophe and s: in a year's time, in a moment's time.",
    tip: "In school writing, 'time' after a number of days, weeks or years takes an apostrophe after the plural 's'.",
  },
  "The Joneses' dog chased its tail past the children's nursery.": {
    why: "Three decisions. The Jones family is 'the Joneses', so their dog is the Joneses' dog. The tail belongs to the dog, so 'its' takes no apostrophe. 'Children' does not end in 's', so it takes apostrophe and 's'.",
    not: {
      "The Joneses dog chased it's tail past the childrens nursery.":
        "Each choice is wrong: the Joneses' dog needs an apostrophe, its tail needs none, and the children's nursery needs one.",
      "The Jones's dog chased its tail past the childrens' nursery.":
        "The family is 'the Joneses', so its possessive is Joneses', and 'children' takes apostrophe and 's': children's.",
      "The Joneses' dog chased it's tail past the childrens' nursery.":
        "'Joneses'' is right, but the tail belongs to the dog, so 'its' takes no apostrophe, and 'children' takes apostrophe and 's'.",
    },
    more: 'To make a family name plural, add -s or -es: the Smiths, the Joneses. Then add the apostrophe after it.',
    tip: 'Take a crowded sentence one word at a time: owner or not, one or several, ends in s or not.',
  },
  "The Smiths' new car is parked outside the Patels' house.": {
    why: "'The Smiths' and 'the Patels' are whole families, plural nouns ending in 's'. Plural owners ending in 's' take only an apostrophe: the Smiths' car, the Patels' house.",
    not: {
      "The Smith's new car is parked outside the Patel's house.":
        "Both families are plural, the Smiths and the Patels, so each apostrophe goes after the plural 's'.",
      "The Smiths new car is parked outside the Patels' house.":
        "The car belongs to the Smith family, so 'Smiths' needs an apostrophe after its 's'.",
      "The Smiths' new car is parked outside the Patels house.":
        "The house belongs to the Patel family, so 'Patels' needs an apostrophe after its 's'.",
    },
    more: "A family's name in the plural never takes an apostrophe unless the family owns something: 'The Patels are here' has none.",
    tip: "'The Smith's car' would mean the car of one person called 'the Smith', which is not how names work.",
  },
  "It's the twins' birthday, so they're having a party.": {
    why: "Three decisions. 'It's' is short for 'it is'. The birthday belongs to both twins, a plural ending in 's', so it is the twins' birthday. 'They're' is short for 'they are'.",
    not: {
      "Its the twins' birthday, so theyre having a party.":
        "'It's' means 'it is' and 'they're' means 'they are'. Both contractions need apostrophes.",
      "Its the twin's birthday, so they're having a party.":
        "'It's' needs an apostrophe for 'it is', and twins are two people, so the plural is twins'.",
      "It's the twin's birthday, so theyre having a party.":
        "Twins are two people, so the plural takes the apostrophe after the 's', and 'they're' needs its apostrophe.",
    },
    more: "Twins share one birthday, so the plural owner takes one apostrophe after the 's'.",
    tip: 'In a busy sentence, label each word: contraction, one owner or several.',
  },
  "We're meeting at Jo's house, and it's only five minutes' walk.": {
    why: "'We're' is short for 'we are'. The house belongs to Jo, one owner: Jo's. 'Five minutes' walk' is a walk of five minutes, a plural time, so the apostrophe goes after the 's'. 'It's' is short for 'it is'.",
    not: {
      "Were meeting at Jos house, and it's only five minutes' walk.":
        "'We're' means 'we are', and the house is Jo's, so both need apostrophes.",
      "Were meeting at Jo's house, and it's only five minute's walk.":
        "'We're' needs an apostrophe for 'we are', and five minutes is plural, so the apostrophe goes after the 's'.",
      "We're meeting at Jos house, and it's only five minute's walk.":
        "The house is Jo's, so her name needs an apostrophe, and five minutes is plural: minutes'.",
    },
    more: "'A minute's walk' for one minute; 'five minutes' walk' for more than one.",
    tip: 'Check time phrases last: they are the ones most often missed.',
  },
  "The dog's bowl is empty, but the cats' bowls are full.": {
    why: "One dog owns the bowl, so it takes apostrophe and 's': dog's. Two cats own the bowls, a plural ending in 's', so the apostrophe goes after it: cats'.",
    not: {
      "The dogs' bowl is empty, but the cats' bowls are full.":
        "There is one dog, so the owner is singular: dog's, with the apostrophe before the 's'.",
      "The dog's bowl is empty, but the cat's bowls are full.":
        "There are two cats, so the owner is plural: cats', with the apostrophe after the 's'.",
      "The dogs' bowl is empty, but the cat's bowls are full.":
        "Both are the wrong way round: one dog is dog's, and two cats are cats'.",
    },
    more: 'The same tiny mark, placed before or after the s, tells the reader how many animals there are.',
    tip: 'Count the owners. One: before the s. More than one, ending in s: after it.',
  },
  "We'll meet outside the Taylors' house at six o'clock.": {
    why: "'We'll' is short for 'we will'. The house belongs to the Taylor family, the Taylors, a plural ending in 's', so the apostrophe goes after it. 'O'clock' keeps its apostrophe for 'of the clock'.",
    not: {
      "Well meet outside the Taylors' house at six o'clock.":
        "Without its apostrophe, 'we'll', short for 'we will', becomes 'well'.",
      "We'll meet outside the Taylor's house at six o'clock.":
        "The house belongs to the Taylor family, a plural, so the apostrophe goes after the 's': Taylors'.",
      "Well meet outside the Taylor's house at six o'clock.":
        "Two slips: 'we'll' needs its apostrophe, and the Taylor family's house is the Taylors' house.",
    },
    more: "A family name in the plural owns things like any plural: the Taylors' house, the Smiths' car.",
    tip: 'Plural family name first, the Taylors, then the apostrophe after it.',
  },
  "The teachers' meeting starts at four.": {
    why: "All the teachers meet, so the owner is plural: teachers. The plural ends in 's', so the apostrophe goes after it: the teachers' meeting.",
    not: {
      "The teacher's meeting starts at four.":
        "'Teacher's' would mean a meeting of one teacher. The prompt says all the teachers meet together.",
      'The teachers meeting starts at four.':
        "Some style guides treat 'teachers' as a describing word here and drop the apostrophe, but schools teach the teachers' meeting, a meeting of the teachers, with the apostrophe after the 's'.",
      "The teachers's meeting starts at four.":
        "'Teachers' already ends in a plural 's', so it takes only an apostrophe.",
    },
    more: "Possession can mean 'for' or 'of', not just ownership: a teachers' meeting is a meeting of teachers.",
    tip: 'Decide the number of owners first; the apostrophe follows.',
  },
  "My brothers' friends are noisy.": {
    why: "Two brothers are the owners, so the plural 'brothers' takes the apostrophe after its 's': my brothers' friends. 'Friends' is a plain plural.",
    not: {
      "My brother's friends are noisy.":
        "'Brother's' would mean the friends of one brother. The prompt says the writer means both.",
      "My brothers' friend's are noisy.":
        "'Brothers'' is right, but 'friends' is a plain plural and owns nothing.",
      'My brothers friends are noisy.':
        "The friends belong to the brothers, so the plural needs an apostrophe after its 's'.",
    },
    more: "Read aloud, brother's and brothers' sound the same. Only the apostrophe shows the reader how many brothers there are.",
    tip: 'When it matters how many owners there are, the apostrophe is the only clue the reader has.',
  },
  "The two girls' bags were lighter than their brother's.": {
    why: "Two girls own the bags, so the plural 'girls' takes the apostrophe after its 's'. 'Their' shows the brother is theirs. 'Brother's' stands for 'their brother's bag', so it keeps its apostrophe.",
    not: {
      "The two girl's bags were lighter than there brother's.":
        "Two girls need the plural 'girls'', and the brother belongs to them, so it is 'their'.",
      "The two girl's bags were lighter than their brothers.":
        "Two girls need 'girls'', and 'their brother's' stands for their brother's bag, so it keeps its apostrophe.",
      "The two girls' bags were lighter than there brothers.":
        "'Girls'' is right, but the brother is theirs, so 'their', and 'brother's' stands for his bag, with an apostrophe.",
    },
    more: "Comparisons often leave out the second noun: lighter than their brother's, faster than Sam's.",
    tip: 'In a comparison, ask what the last possessive stands for. If it stands for a noun, keep the apostrophe.',
  },
  "We've borrowed the Hendersons' ladder, but it's too short.": {
    why: "'We've' is short for 'we have'. The ladder belongs to the Henderson family, the Hendersons, a plural ending in 's', so the apostrophe goes after it. 'It's' is short for 'it is'.",
    not: {
      "Weve borrowed the Hendersons' ladder, but its too short.":
        "'We've' means 'we have' and 'it's' means 'it is'. Both contractions need apostrophes.",
      "We've borrowed the Henderson's ladder, but its too short.":
        "The ladder belongs to the Henderson family, a plural, so it is Hendersons', and 'it is too short' needs 'it's'.",
      "Weve borrowed the Henderson's ladder, but it's too short.":
        "'We've' needs its apostrophe, and the family's ladder is the Hendersons', with the apostrophe after the 's'.",
    },
    more: "Neighbours are often named as a family: the Hendersons. Their possessions take an apostrophe after the plural 's'.",
    tip: "A family plural plus an apostrophe: the Hendersons' ladder, the Taylors' house.",
  },
  "A month's rent is due, but two months' rent is owed.": {
    why: "One month's rent: the singular owner takes apostrophe and 's'. Two months' rent: the plural owner ends in 's', so the apostrophe goes after it.",
    not: {
      "A months rent is due, but two months' rent is owed.":
        "'A month's rent' is the rent for one month, so 'month' needs an apostrophe and 's'.",
      "A month's rent is due, but two month's rent is owed.":
        "'Two months' is plural, so the apostrophe goes after the 's': two months' rent.",
      "A months' rent is due, but two month's rent is owed.":
        "Both are the wrong way round: one month is month's, and two months are months'.",
    },
    more: 'Time phrases follow exactly the same rule as other owners: one or several, then where the plural ends.',
    tip: "Say the number first. 'A' or 'one': 's. Two or more: s'.",
  },
  "Macbeth's ambition grows after the witches' prophecy.": {
    why: "Two owners. The ambition belongs to Macbeth, one owner: Macbeth's. The prophecy is the three witches', a plural ending in 's', so the apostrophe goes after it.",
    not: {
      "Macbeths ambition grows after the witches' prophecy.":
        "The ambition is Macbeth's, so his name needs an apostrophe and 's'.",
      "Macbeth's ambition grows after the witch's prophecy.":
        "The prompt says three witches make the prophecy, so the owner is the plural 'witches''.",
      "Macbeths ambition grows after the witch's prophecy.":
        "Both owners are wrong: Macbeth needs an apostrophe and 's', and three witches are witches'.",
    },
    more: "In an essay on Macbeth you will write both forms often: Macbeth's, Lady Macbeth's, the witches'.",
    tip: 'Check the possessives in your essay quotations and points: they are the commonest slips in literature answers.',
  },
  "In a month's time, the twins' cousins will visit from abroad.": {
    why: "Three decisions. 'A month's time' is one month, so apostrophe and 's'. The cousins belong to both twins, a plural ending in 's', so the apostrophe goes after it. 'Cousins' owns nothing.",
    not: {
      "In a months time, the twin's cousins will visit from abroad.":
        "Two slips: one month's time needs 'month's', and two twins need the plural 'twins''.",
      "In a months time, the twins' cousin's will visit from abroad.":
        "Two slips: one month's time needs 'month's', and the plain plural 'cousins' takes no apostrophe.",
      "In a month's time, the twin's cousin's will visit from abroad.":
        "Two slips: two twins need the plural 'twins'', and the plain plural 'cousins' takes no apostrophe.",
    },
    more: 'A sentence can hold a singular owner, a plural owner and a plain plural side by side. Each follows its own rule.',
    tip: 'Mark each -s word as one owner, several owners or plain plural before you decide.',
  },
  "The men's department is upstairs.": {
    why: "'Men' is a plural that does not end in 's', so it takes apostrophe and 's': men's. Only plurals that already end in 's' take just an apostrophe.",
    not: {
      'The mens department is upstairs.':
        "The department is for men, so 'men' needs an apostrophe and 's' to show the link.",
      "The mens' department is upstairs.":
        "'Men' is already plural and does not end in 's', so the apostrophe goes before the 's': men's.",
      "The mens's department is upstairs.":
        "There is no word 'mens'. The plural is 'men', which takes apostrophe and 's': men's.",
    },
    more: "The apostrophe goes before the s when the plural does not end in s: men's, women's, children's. It goes after the s when it does: boys', girls'.",
    tip: "Shops and signs often leave out apostrophes. In your own writing, always include them: men's, women's.",
  },
  "These are the women's trainers.": {
    why: "'Women' is a plural that does not end in 's', so it takes apostrophe and 's': women's. 'Trainers' is a plain plural and owns nothing, so it takes no apostrophe.",
    not: {
      'These are the womens trainers.':
        "The trainers are for women, so 'women' needs an apostrophe and 's' to show the link.",
      "These are the womens' trainers.":
        "'Women' is already plural and does not end in 's', so the apostrophe goes before the 's': women's.",
      "These are the women's trainer's.":
        "'Women's' is right, but 'trainers' is a plain plural, more than one trainer, and takes no apostrophe.",
    },
    more: 'In a phrase like "women\'s trainers", only the owner word changes. The thing owned stays a plain plural.',
    tip: 'Check the word after the apostrophe too. If it only means more than one, leave it alone.',
  },
  "My little brother loves children's books.": {
    why: "'Children's books' are books for children. 'Children' is a plural that does not end in 's', so it takes apostrophe and 's'. 'Books' is a plain plural.",
    not: {
      'My little brother loves childrens books.':
        "The books are written for children, so 'children' needs an apostrophe and 's' to show the link.",
      "My little brother loves childrens' books.":
        "'Children' is already plural and does not end in 's', so the apostrophe goes before the 's': children's.",
      "My little brother loves children's book's.":
        "'Children's' is right, but 'books' is a plain plural and owns nothing.",
    },
    more: "Possession can mean 'for' rather than 'owned by': children's books, a women's magazine, the men's toilets.",
    tip: "Shops and websites often miss this apostrophe. In your own writing, always write children's.",
  },
  "The geese's pond freezes over in winter.": {
    why: "'Geese' is the plural of 'goose', and it does not end in 's'. Plurals like this take an apostrophe and 's' to show belonging: the geese's pond.",
    not: {
      'The geese pond freezes over in winter.':
        "The pond belongs to the geese, so 'geese' needs an apostrophe and 's' to show that they own it.",
      "The gooses' pond freezes over in winter.":
        "The plural of 'goose' is 'geese', not 'gooses'. Spell the plural correctly first, then add the apostrophe.",
      "The geeses' pond freezes over in winter.":
        "'Geese' is already plural, so it does not take another 's'. A plural that does not end in 's' takes apostrophe and 's'.",
    },
    more: "Irregular plurals include geese, mice, men, women, children and people. Each takes apostrophe and s: the mice's nest, the people's choice.",
    tip: 'Ask whether the plural ends in s. If it does not, add apostrophe and s, as you would for one owner.',
  },
  "The people's voices were finally heard.": {
    why: "'People' is a plural that does not end in 's', so it takes apostrophe and 's': people's. 'Voices' is a plain plural, so it takes no apostrophe.",
    not: {
      'The peoples voices were finally heard.':
        "The voices belong to the people, so 'people' needs an apostrophe and 's' to show it.",
      "The peoples voice's were finally heard.":
        "Two slips: 'people' takes apostrophe and 's', and 'voices' is a plain plural with no apostrophe.",
      "The people's voice's were finally heard.":
        "'People's' is right, but 'voices' is a plain plural and takes no apostrophe.",
    },
    more: "'Peoples' with an s means different nations or groups: 'the peoples of Europe'. Their possessive is peoples'. Here 'people' just means persons, so it is people's.",
    tip: 'An apostrophe never makes a plural. It only shows belonging or missing letters.',
  },
  "The newspaper articles had prepared men's minds for the reception of the idea.": {
    why: "'Men' is a plural that does not end in 's', so it takes an apostrophe and 's': men's minds. 'Articles' is a plain plural with no apostrophe.",
    not: {
      'The newspaper articles had prepared mens minds for the reception of the idea.':
        "The minds belong to men, so 'men' needs an apostrophe and 's' to show it.",
      "The newspaper articles had prepared mens' minds for the reception of the idea.":
        "'Men' is already plural and does not end in 's', so the apostrophe goes before the 's': men's.",
      "The newspaper article's had prepared men's minds for the reception of the idea.":
        "'Men's' is right, but 'articles' is a plain plural subject and owns nothing.",
    },
    more: "Newspapers had written about life on Mars, so people half expected visitors. 'Men' here means people in general.",
    tip: "Irregular plurals take apostrophe and s, just like a single owner: men's, women's, children's.",
  },
  "The firemen's helmets were gleaming in the sun.": {
    why: "'Firemen' is the plural of 'fireman' and does not end in 's'. A plural like that takes an apostrophe and 's': the firemen's helmets.",
    not: {
      "The firemens' helmets were gleaming in the sun.":
        "'Firemen' is already plural and does not end in 's', so the apostrophe goes before the 's': firemen's.",
      'The firemens helmets were gleaming in the sun.':
        "The helmets belong to the firemen, so 'firemen' needs an apostrophe and 's'.",
      "The firemen's helmet's were gleaming in the sun.":
        "'Firemen's' is right, but 'helmets' is a plain plural and owns nothing.",
    },
    more: "Any word ending in -men works the same way: postmen's, policemen's, women's.",
    tip: 'If the plural does not end in s, add apostrophe and s.',
  },
  "The children's coats were hung on their pegs.": {
    why: "'Children' is a plural that does not end in 's', so it takes apostrophe and 's': children's coats. 'Their' shows the pegs belong to them and takes no apostrophe.",
    not: {
      "The childrens' coats were hung on their pegs.":
        "'Children' is already plural and does not end in 's', so the apostrophe goes before the 's': children's.",
      "The children's coats were hung on there pegs.":
        "'There' means a place. The pegs belong to the children, so it is 'their pegs'.",
      "The childrens' coats were hung on there pegs.":
        "Two slips: 'children' takes apostrophe and 's', and the pegs belong to them, so it is 'their'.",
    },
    more: "There is no word 'childrens'. The plural of 'child' is already 'children'.",
    tip: "Say 'children' first, then add the possessive ending: children's.",
  },
  "The women's team and the men's team trained together.": {
    why: "'Women' and 'men' are plurals that do not end in 's'. Each takes an apostrophe and 's' to show belonging: the women's team, the men's team.",
    not: {
      "The womens' team and the men's team trained together.":
        "'Women' is already plural and does not end in 's', so the apostrophe goes before the 's': women's.",
      "The women's team and the mens' team trained together.":
        "'Men' is already plural and does not end in 's', so the apostrophe goes before the 's': men's.",
      "The womens' team and the mens' team trained together.":
        "Both plurals already exist without an 's', women and men, so each takes apostrophe and 's'.",
    },
    more: "There is no such word as 'womens' or 'mens'. The apostrophe always goes after the plural, and these plurals end in n.",
    tip: 'Find the plural, women or men, and add apostrophe and s straight after it.',
  },
  "The sheep's wool was thick, so the shearers were slow.": {
    why: "'Sheep' is the same in the singular and the plural and never ends in 's', so, one sheep or many, its possessive is sheep's. 'Shearers' is a plain plural: the people who shear.",
    not: {
      "The sheeps' wool was thick, so the shearers were slow.":
        "There is no word 'sheeps'. 'Sheep' is its own plural, so it takes apostrophe and 's': sheep's.",
      "The sheep's wool was thick, so the shearer's were slow.":
        "'Sheep's' is right, but 'shearers' is a plain plural, the people who shear, and owns nothing.",
      "The sheeps' wool was thick, so the shearer's were slow.":
        "Both are wrong: 'sheep' has no plural 's', so it is sheep's, and 'shearers' is a plain plural.",
    },
    more: "Deer, fish and sheep are the same in both forms, so their possessives are the same too: the deer's, the fish's, the sheep's.",
    tip: "If a word never takes a plural 's', its possessive is always apostrophe and s.",
  },
  "The children's teacher said it's their best work.": {
    why: "Three decisions. 'Children' does not end in 's', so it takes apostrophe and 's': children's. 'It's' is short for 'it is'. 'Their' shows the work belongs to them and takes no apostrophe.",
    not: {
      "The childrens' teacher said its their best work.":
        "'Children' takes apostrophe and 's', and 'it's' here means 'it is', so it needs an apostrophe.",
      "The children's teacher said its they're best work.":
        "'It's' means 'it is' and needs an apostrophe, and the work belongs to them, so it is 'their'.",
      "The childrens' teacher said it's they're best work.":
        "'Children' takes apostrophe and 's', and 'they're' would mean 'they are best work'. It should be 'their'.",
    },
    more: "Its and it's, their and they're: in each pair, only the contraction has an apostrophe.",
    tip: "Read the full words aloud: 'it is their best work'. Only 'it is' became a contraction.",
  },
  "Sam and Ella's house is by the park.": {
    why: "When two people own one thing together, the apostrophe goes on the last name only: Sam and Ella's house. 'Sam and Ella' work as one owner.",
    not: {
      "Sam's and Ella's house is by the park.":
        'An apostrophe on each name means each owns a separate one. The prompt says they share one house, so only the last name takes it.',
      'Sam and Ellas house is by the park.':
        "The house belongs to Sam and Ella together, so the last name needs an apostrophe and 's'.",
      "Sam's and Ellas house is by the park.":
        'The apostrophe is on the wrong name. When two people share something, it goes on the last name only.',
    },
    more: "If they each owned a house, both names would take an apostrophe: Sam's and Ella's houses.",
    tip: 'One shared thing: apostrophe on the last owner. Separate things: apostrophe on each owner.',
  },
  "Sam's and Ella's bikes were stolen.": {
    why: "Each owns a separate bike, so each name takes its own apostrophe and 's': Sam's and Ella's bikes. 'Bikes' is a plain plural.",
    not: {
      "Sam and Ella's bikes were stolen.":
        'An apostrophe on only the last name means they shared the bikes. The prompt says each had a bike of their own.',
      "Sam's and Ellas bikes were stolen.":
        "Ella owns a bike too, so her name also needs an apostrophe and 's'.",
      "Sam's and Ella's bike's were stolen.":
        "Both names are right, but 'bikes' is a plain plural and owns nothing.",
    },
    more: "Compare 'Sam and Ella's bikes', which would mean bikes they share. One apostrophe more or less changes who owns what.",
    tip: 'Ask whether the owners share one thing or have one each. That tells you how many apostrophes you need.',
  },
  "Mum and Dad's anniversary is in June.": {
    why: "An anniversary belongs to the couple together, so Mum and Dad are one owner. The apostrophe goes on the last name only: Mum and Dad's anniversary.",
    not: {
      "Mum's and Dad's anniversary is in June.":
        'An apostrophe on each name means separate things. An anniversary is shared by the couple, so only the last name takes it.',
      'Mum and Dads anniversary is in June.':
        "The anniversary belongs to Mum and Dad together, so 'Dad' needs an apostrophe and 's'.",
      "Mum's and Dads anniversary is in June.":
        'The apostrophe is on the wrong name. For something shared, it goes on the last name only.',
    },
    more: "Joint ownership puts one apostrophe at the end: Ben and Leah's wedding, Mum and Dad's car.",
    tip: 'If the thing owned is one shared thing, treat the owners as a single group.',
  },
  'Tomatoes and potatoes are on offer this week.': {
    why: 'Both words are plain plurals: more than one tomato, more than one potato. Neither owns anything, so neither takes an apostrophe. Words ending in -o often add -es in the plural.',
    not: {
      "Tomato's and potatoes are on offer this week.":
        "'Tomatoes' is a plain plural, more than one tomato. It owns nothing, so it takes no apostrophe.",
      "Tomatoes and potato's are on offer this week.":
        "'Potatoes' is a plain plural, more than one potato. A plural that owns nothing takes no apostrophe.",
      "Tomato's and potato's are on offer this week.":
        'Both are plain plurals that own nothing, so neither takes an apostrophe.',
    },
    more: "An apostrophe added to a plain plural is so common on market stalls that it has a name: the greengrocer's apostrophe.",
    tip: 'Before you add an apostrophe, ask: does this word own something, or have letters missing? If neither, leave it out.',
  },
  'We ordered two pizzas and three lemonades.': {
    why: "'Pizzas' and 'lemonades' are plain plurals: more than one of each. Neither owns anything, so neither takes an apostrophe.",
    not: {
      "We ordered two pizza's and three lemonades.":
        "'Pizzas' just means more than one pizza. A plain plural takes no apostrophe.",
      "We ordered two pizzas and three lemonade's.":
        "'Lemonades' just means more than one lemonade. A plain plural takes no apostrophe.",
      "We ordered two pizza's and three lemonade's.":
        'Both are plain plurals that own nothing, so neither takes an apostrophe.',
    },
    more: 'Words borrowed from other languages, such as pizza, follow the ordinary rule: add s for the plural, with no apostrophe.',
    tip: "A number before a word, such as 'two pizzas', shows that it is plural. Unless it owns something, it takes no apostrophe.",
  },
  'Her parents both work as nurses.': {
    why: "'Parents' and 'nurses' are plain plurals. The parents do something, they work, but they do not own anything in this sentence, so neither word takes an apostrophe.",
    not: {
      "Her parent's both work as nurses.":
        "'Parents' is the subject, a plain plural. It owns nothing here, so it takes no apostrophe.",
      "Her parents both work as nurse's.":
        "'Nurses' is a plain plural, more than one nurse. It owns nothing, so it takes no apostrophe.",
      "Her parent's both work as nurse's.":
        'Both are plain plurals that own nothing, so neither takes an apostrophe.',
    },
    more: "Compare 'Her parents' house is small', where the parents own the house. Only owning brings the apostrophe.",
    tip: 'If the word is followed by a verb, such as "work", it is usually a plain plural.',
  },
  'She plays the piano and sings in a choir.': {
    why: "'Plays' and 'sings' are verbs: they say what she does. The 's' on a verb after 'she', 'he' or 'it' never takes an apostrophe.",
    not: {
      "She play's the piano and sings in a choir.":
        "'Plays' is a verb, something she does. A verb never takes an apostrophe before its 's'.",
      "She plays the piano and sing's in a choir.":
        "'Sings' is a verb, something she does. A verb never takes an apostrophe before its 's'.",
      "She play's the piano and sing's in a choir.":
        'Both are verbs, things she does, and verbs never take an apostrophe.',
    },
    more: "The 's' on these verbs is not a plural and not a possessive. It simply goes with he, she and it: she plays, he runs.",
    tip: 'If you can put "she" in front of the word and it makes sense, it is a verb: no apostrophe.',
  },
  'The shop sells cakes and biscuits.': {
    why: "'Cakes' and 'biscuits' are plain plurals, and 'sells' is a verb. None of them owns anything or has missing letters, so the sentence needs no apostrophe at all.",
    not: {
      "The shop sells cake's and biscuits.":
        "'Cakes' is a plain plural, more than one cake. It owns nothing, so it takes no apostrophe.",
      "The shop sell's cakes and biscuits.":
        "'Sells' is a verb, what the shop does. A verb never takes an apostrophe.",
      "The shop sells cake's and biscuit's.":
        'Both are plain plurals that own nothing, so neither takes an apostrophe.',
    },
    more: 'A sentence can be perfectly punctuated with no apostrophes. Add one only for belonging or for missing letters.',
    tip: 'Shop signs are a common place for wrong apostrophes. Look out for them and you will make fewer yourself.',
  },
  'My cousin collects stamps and coins.': {
    why: "'Collects' is a verb, and 'stamps' and 'coins' are plain plurals. None owns anything or stands for missing letters, so the sentence needs no apostrophe.",
    not: {
      "My cousin collect's stamps and coins.":
        "'Collects' is a verb, what the cousin does. A verb never takes an apostrophe.",
      "My cousin collects stamp's and coins.":
        "'Stamps' is a plain plural, more than one stamp. It owns nothing, so it takes no apostrophe.",
      "My cousin collect's stamp's and coins.":
        "Neither the verb 'collects' nor the plain plural 'stamps' takes an apostrophe.",
    },
    more: "Three kinds of word end in s: plurals (stamps), verbs (collects) and possessives (Sam's). Only the possessive takes an apostrophe.",
    tip: 'Sort each -s word into plural, verb or possessive. Only possessives get the apostrophe.',
  },
  'The puppies love their new toys.': {
    why: "'Puppies' and 'toys' are plain plurals. 'Their' already shows that the toys belong to the puppies, so no apostrophe is needed anywhere.",
    not: {
      "The puppie's love their new toys.":
        "'Puppies' is a plain plural subject. It owns nothing here, so it takes no apostrophe.",
      "The puppies love their new toy's.":
        "'Toys' is a plain plural, more than one toy. It owns nothing, so it takes no apostrophe.",
      "The puppie's love their new toy's.":
        "Two slips: 'puppies' and 'toys' are plain plurals, and neither takes an apostrophe.",
    },
    more: "'Their' is a possessive word, so it does the job an apostrophe would otherwise do: their toys.",
    tip: "If 'their', 'his' or 'her' already shows the owner, the noun needs no apostrophe.",
  },
  'The Browns are coming for dinner on Sundays.': {
    why: "'The Browns' is the plural of a family name: all the Browns. 'Sundays' means every Sunday. Neither owns anything, so neither takes an apostrophe.",
    not: {
      "The Brown's are coming for dinner on Sundays.":
        "'The Browns' means the Brown family, a plain plural. They own nothing here, so it takes no apostrophe.",
      "The Browns are coming for dinner on Sunday's.":
        "'Sundays' means more than one Sunday, a plain plural, so it takes no apostrophe.",
      "The Brown's are coming for dinner on Sunday's.":
        'Both are plain plurals: the Brown family, and more than one Sunday. Neither takes an apostrophe.',
    },
    more: "Christmas cards often get this wrong: 'From the Brown's'. The family is the Browns, with no apostrophe, unless they own something: the Browns' house.",
    tip: 'Make a family name plural by adding s or es, never an apostrophe: the Browns, the Joneses.',
  },
  "The kittens chased each other's tails.": {
    why: "'Kittens' is the subject, doing the chasing, and owns nothing, so it is a plain plural. 'Each other's' does own the tails, so it takes an apostrophe and 's'.",
    not: {
      "The kitten's chased each other's tails.":
        "'Kittens' is the subject, a plain plural that owns nothing here, so it takes no apostrophe.",
      'The kittens chased each others tails.':
        "'Each other' owns the tails, so it needs an apostrophe and 's': each other's.",
      "The kitten's chased each others tails.":
        "Both are the wrong way round: 'kittens' owns nothing, and 'each other's' needs its apostrophe.",
    },
    more: 'The word ending in s that owns nothing gets no apostrophe; the phrase that owns gets one. One sentence can need both decisions.',
    tip: "Ask of every -s word: does it own the next thing? 'Kittens chased' no; 'each other's tails' yes.",
  },
  'Is this bag yours or hers?': {
    why: "'Yours' and 'hers' are possessive pronouns: they already mean 'belonging to you' and 'belonging to her'. Possessive pronouns never take an apostrophe.",
    not: {
      "Is this bag your's or hers?":
        "'Yours' is a possessive pronoun, and possessive pronouns never take an apostrophe.",
      "Is this bag yours or her's?":
        "'Hers' is a possessive pronoun, and possessive pronouns never take an apostrophe.",
      "Is this bag your's or her's?":
        "Neither 'yours' nor 'hers' takes an apostrophe: both already show belonging.",
    },
    more: 'The full set has no apostrophes at all: mine, yours, his, hers, its, ours, theirs.',
    tip: "Remember 'his' has no apostrophe. 'Hers', 'yours' and 'theirs' follow the same pattern.",
  },
  'The choice is ours, not theirs.': {
    why: "'Ours' and 'theirs' are possessive pronouns, words that already mean 'belonging to us' and 'belonging to them'. They never take an apostrophe.",
    not: {
      "The choice is our's, not theirs.":
        "'Ours' is a possessive pronoun, and possessive pronouns never take an apostrophe.",
      "The choice is ours, not their's.":
        "'Theirs' is a possessive pronoun, and possessive pronouns never take an apostrophe.",
      "The choice is our's, not their's.":
        "Neither 'ours' nor 'theirs' takes an apostrophe: both already show belonging.",
    },
    more: "Nouns show belonging with an apostrophe: the team's choice. Pronouns have their own possessive forms instead: ours, theirs.",
    tip: "If you can swap the word for 'his', it needs no apostrophe.",
  },
  'Whose turn is it to feed the rabbits?': {
    why: "'Whose' asks who owns something: whose turn? Like 'his' and 'their', it shows belonging and takes no apostrophe. 'Who's' would mean 'who is'.",
    not: {
      "Who's turn is it to feed the rabbits?":
        "'Who's' means 'who is'. 'Who is turn' makes no sense: the question asks about belonging, so it is 'Whose'.",
      "Whose turn is it to feed the rabbit's?":
        "'Whose' is right, but 'rabbits' is a plain plural and owns nothing.",
      "Who's turn is it to feed the rabbit's?":
        "Two slips: the question asks whose the turn is, so 'Whose', and 'rabbits' is a plain plural.",
    },
    more: "'Who's' is always short for 'who is' or 'who has': Who's there? Who's finished?",
    tip: "Say 'who is'. If it makes nonsense, write 'whose'.",
  },
  'Theirs is the house with the green door; ours is next door.': {
    why: "'Theirs' and 'ours' stand for 'their house' and 'our house'. They are possessive pronouns, which never take an apostrophe.",
    not: {
      "Their's is the house with the green door; ours is next door.":
        "'Theirs' is a possessive pronoun and never takes an apostrophe.",
      "Theirs is the house with the green door; our's is next door.":
        "'Ours' is a possessive pronoun and never takes an apostrophe.",
      "Their's is the house with the green door; our's is next door.":
        "Neither 'theirs' nor 'ours' takes an apostrophe: both already show belonging.",
    },
    more: 'Each possessive pronoun can stand alone in place of a noun: theirs, ours, yours, mine.',
    tip: 'No possessive pronoun ever has an apostrophe. Learn the list: mine, yours, his, hers, its, ours, theirs.',
  },
  "Half of it is yours and half is Thaddeus Sholto's.": {
    why: "Two kinds of owner. 'Yours' is a possessive pronoun, so it takes no apostrophe. 'Thaddeus Sholto's' means Thaddeus Sholto's half: a name that owns takes an apostrophe and 's', even with the noun left out.",
    not: {
      "Half of it is your's and half is Thaddeus Sholto's.":
        "'Yours' is a possessive pronoun and never takes an apostrophe.",
      'Half of it is yours and half is Thaddeus Sholtos.':
        "'Sholto's' means Sholto's half, with the noun left out. It is still a possessive, so it needs its apostrophe.",
      "Half of it is your's and half is Thaddeus Sholtos.":
        "Both are the wrong way round: the pronoun 'yours' takes no apostrophe, and the name 'Sholto's' needs one.",
    },
    more: 'Watson is telling Mary Morstan that half the Agra treasure is hers. The parallel halves set the two possessives side by side.',
    tip: 'Pronouns that own: no apostrophe. Names and nouns that own: apostrophe and s.',
  },
  "If ever anybody's hair stood on end with terror, mine must have done so then.": {
    why: "'Anybody's hair' takes an apostrophe and 's', because 'anybody' is a noun-like word that owns. 'Mine', meaning 'my hair', is a possessive pronoun, which never takes an apostrophe.",
    not: {
      'If ever anybodys hair stood on end with terror, mine must have done so then.':
        "The hair belongs to anybody, so 'anybody' needs an apostrophe and 's'.",
      "If ever anybody's hair stood on end with terror, mine's must have done so then.":
        "'Mine' is a possessive pronoun and never takes an apostrophe. 'Mine's' would mean 'mine is'.",
      "If ever anybodys hair stood on end with terror, mine's must have done so then.":
        "Both are the wrong way round: 'anybody's' needs an apostrophe, and the pronoun 'mine' takes none.",
    },
    more: "Pip has been told that a 'young man' will come for him if he lets the convict down. His comic exaggeration shows the adult narrator smiling at his younger self.",
    tip: 'Possessive pronouns, mine, yours, his, hers, ours, theirs, never take apostrophes.',
  },
  "Let's see whose turn it is.": {
    why: "'Let's' is short for 'let us'. 'Whose' asks who owns the turn, and like other owning words it takes no apostrophe. 'Who's' would mean 'who is'.",
    not: {
      'Lets see whose turn it is.':
        "'Lets' means 'allows'. 'Let us see' needs the apostrophe: 'Let's'.",
      "Let's see who's turn it is.":
        "'Who's' means 'who is'. 'Who is turn' makes no sense: the turn belongs to someone, so it is 'whose'.",
      "Lets see who's turn it is.":
        "Both are the wrong way round: 'Let us' needs 'Let's', and the owner of the turn needs 'whose'.",
    },
    more: "The two words that sound like 'whose' and 'lets' each have a twin with an apostrophe. Only the contraction, standing for two words, has it.",
    tip: "Expand every apostrophe: 'let us' fits, 'who is' does not.",
  },
  "It's Ben's turn, then yours, then mine.": {
    why: "'It's' is short for 'it is'. The turn belongs to Ben, so his name takes apostrophe and 's'. 'Yours' and 'mine' are possessive pronouns and never take an apostrophe.",
    not: {
      "Its Ben's turn, then your's, then mine.":
        "'It's' means 'it is' and needs an apostrophe, and the pronoun 'yours' takes none.",
      "It's Bens turn, then your's, then mine.":
        "The turn is Ben's, so his name needs an apostrophe, and the pronoun 'yours' takes none.",
      'Its Bens turn, then yours, then mine.':
        "'It's' needs its apostrophe for 'it is', and the turn is Ben's, with an apostrophe.",
    },
    more: 'A name shows belonging with an apostrophe; a possessive pronoun does it without one.',
    tip: 'Names that own: apostrophe. Mine, yours, his, hers, ours, theirs: never.',
  },
  "Nobody's sure whose idea it was.": {
    why: "'Nobody's' is short for 'nobody is': 'Nobody is sure'. 'Whose' asks who owned the idea, and it never takes an apostrophe.",
    not: {
      'Nobodys sure whose idea it was.':
        "'Nobody's' here is short for 'nobody is', so it needs an apostrophe.",
      "Nobody's sure who's idea it was.":
        "'Who's' means 'who is'. The question is who owned the idea, so it is 'whose'.",
      "Nobodys sure who's idea it was.":
        "Both are the wrong way round: 'nobody is' needs 'Nobody's', and the owner of the idea needs 'whose'.",
    },
    more: "'Nobody's' can be a contraction (nobody is) or a possessive (nobody's fault). Either way it takes an apostrophe.",
    tip: "Expand each apostrophe word. 'Nobody is' fits; 'who is idea' does not.",
  },
  "Nobody's going to believe that it's not yours.": {
    why: "Three decisions. 'Nobody's' is short for 'nobody is' and 'it's' for 'it is', so both take apostrophes. 'Yours' is a possessive pronoun, which never takes one.",
    not: {
      'Nobodys going to believe that its not yours.':
        "'Nobody's' means 'nobody is' and 'it's' means 'it is'. Both contractions need apostrophes.",
      "Nobody's going to believe that its not your's.":
        "'It's' means 'it is' and needs an apostrophe, and the pronoun 'yours' never takes one.",
      "Nobodys going to believe that it's not your's.":
        "'Nobody's' needs its apostrophe for 'nobody is', and 'yours' takes none.",
    },
    more: 'Contractions always have apostrophes; possessive pronouns never do. That one rule settles most of this sentence.',
    tip: 'Expand every contraction, then check each pronoun: mine, yours and theirs stay bare.',
  },
}
