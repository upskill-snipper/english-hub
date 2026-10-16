import type { GameExplanations } from '@/lib/games/explanations/types'

/**
 * Apostrophe Ace: the explanation a student sees after each answer, by question
 * key (src/data/games/banks/apostrophe-ace.ts). Written with AI on 16 October 2026
 * and checked against each question and its options, as the founder decided
 * (src/lib/games/explanations/types.ts).
 */
export const EXPLANATIONS: GameExplanations = {
  "I don't know where she went.": {
    why: "'Don't' is short for 'do not'. The apostrophe replaces the missing 'o' of 'not', so it goes between the 'n' and the 't'. One apostrophe is all this sentence needs.",
    not: {
      'I dont know where she went.':
        "'Dont' is not a word. The apostrophe is missing, so the reader cannot see that the 'o' of 'not' has been left out.",
      "I do'nt know where she went.":
        "The apostrophe is in the wrong place. It must go where the letter is missing, between the 'n' and the 't', not after the 'o'.",
      "I don't' know where she went.":
        'The first apostrophe is right, but the second, at the end, has no job. An apostrophe needs a missing letter or an owner.',
    },
    more: "A contraction squeezes two words into one. The apostrophe takes the place of the letters that are dropped: do not becomes don't, is not becomes isn't, cannot becomes can't.",
    tip: 'Say the two full words, then see which letters you dropped. The apostrophe goes in that gap.',
  },
  "It's raining, so we can't go out.": {
    why: "Both words are contractions. 'It's' is short for 'it is', with the apostrophe in place of the missing 'i'. 'Can't' is short for 'cannot', with the apostrophe in place of the missing 'no'. Both need one.",
    not: {
      'Its raining, so we cant go out.':
        "Neither contraction has its apostrophe. 'Its' without one shows belonging, so it cannot mean 'it is', and 'cant' does not show that 'cannot' was shortened.",
      "Its raining, so we can't go out.":
        "'Can't' is right, but this sentence needs 'it is'. 'Its' without an apostrophe shows belonging, so it does not fit.",
      "It's raining, so we cant go out.":
        "'It's' is right, but 'cant' needs its apostrophe too: can't.",
    },
    more: "'Can't' is a special case. It is short for 'cannot', and the apostrophe replaces the 'no'. The two contractions here do different jobs: 'it's' joins a pronoun and a verb, and 'can't' joins a verb and 'not'.",
    tip: "Do not rely on a spell checker for these. 'Its' and 'cant' are real words, so a checker may not flag them.",
  },
  "They won't be here until we're ready.": {
    why: "'Won't' is short for 'will not' and 'we're' is short for 'we are'. Both need an apostrophe. Plain 'were' is a different word, the past tense of 'are'.",
    not: {
      'They wont be here until were ready.':
        "Both apostrophes are missing, so 'wont' and 'were' read as other words instead of 'will not' and 'we are'.",
      "They wo'nt be here until we're ready.":
        "'We're' is right, but the apostrophe in 'won't' is in the wrong place. It goes between the 'n' and the 't'.",
      "They won't be here until were ready.":
        "'Won't' is right, but 'were' needs an apostrophe to mean 'we are': we're.",
    },
    more: "'Were' (as in 'they were late') and 'we're' look alike but mean different things. If 'we are' fits, use the apostrophe. 'Won't' is an irregular contraction: it is not 'willn't'.",
    tip: "Learn the irregular ones by heart: won't (will not), can't (cannot), shan't (shall not).",
  },
  "She's already finished, hasn't she?": {
    why: "'She's' is short for 'she has' here, because 'has finished' is the perfect tense. 'Hasn't' is short for 'has not'. Each needs an apostrophe where letters are missing.",
    not: {
      'Shes already finished, hasnt she?':
        "Both apostrophes are missing. 'Shes' and 'hasnt' are not words; each should show the dropped letters.",
      "Shes' already finished, hasn't she?":
        "The apostrophe in 'hasn't' is right, but the one in 'she's' is in the wrong place. It goes before the 's', where 'ha' was dropped, not after.",
      "She's already finished, hasnt she?":
        "'She's' is right, but 'hasnt' needs an apostrophe: hasn't.",
    },
    more: "The ending 's can stand for 'is' or 'has'. The tag 'hasn't she?' shows that it means 'has' here. In 'She's tired', it means 'is'. The word after it, or the tag, tells you which.",
    tip: "To decide what 's stands for, try 'is' and then 'has'. Use the one that fits the next word.",
  },
  "We're going to the park if it's sunny.": {
    why: "'We're' is short for 'we are' and 'it's' is short for 'it is'. Each needs an apostrophe in place of the missing letters. 'Were' and 'its' are different words.",
    not: {
      'Were going to the park if its sunny.':
        "Neither apostrophe is there. 'Were' is the past tense of 'are' and 'its' shows belonging, so neither means what the writer wants.",
      "Were going to the park if it's sunny.":
        "'It's' is right, but 'were' is the past tense of 'are'. We need 'we're', short for 'we are'.",
      "We're going to the park if its sunny.":
        "'We're' is right, but 'its' shows belonging. Here we need 'it's', short for 'it is'.",
    },
    more: "Pairs such as were/we're, its/it's, your/you're and their/they're sound alike but mean different things. The version with the apostrophe always stands for two words.",
    tip: "Test a doubtful one by saying the full words: 'We are going to the park if it is sunny' works, so both need apostrophes.",
  },
  "I'd rather wait until they're back.": {
    why: "'I'd' is short for 'I would' ('I would rather'), and 'they're' is short for 'they are'. The apostrophe in 'I'd' replaces 'woul', and in 'they're' it replaces 'a'.",
    not: {
      'Id rather wait until theyre back.':
        "Both apostrophes are missing, so 'Id' and 'theyre' do not read as 'I would' and 'they are'.",
      "I'd rather wait until theyre back.":
        "'I'd' is right, but 'theyre' needs an apostrophe: they're.",
      "Id rather wait until they're back.":
        "'They're' is right, but 'Id' needs an apostrophe to mean 'I would': I'd.",
    },
    more: "The ending 'd can stand for 'would' or 'had'. 'I'd rather' means 'I would rather', but 'I'd finished' means 'I had finished'. The word after it tells you which.",
    tip: "Contractions suit speech, emails and dialogue. In a formal essay, write 'I would rather'.",
  },
  "Let's see who's coming to the party.": {
    why: "'Let's' is short for 'let us' and 'who's' is short for 'who is'. The apostrophes replace the dropped 'u' and 'i'. Without them, nothing shows that the words were shortened.",
    not: {
      'Lets see whos coming to the party.':
        "Both apostrophes are missing, so the shortened 'let us' and 'who is' are not marked.",
      "Lets see who's coming to the party.":
        "'Who's' is right, but 'let's' (let us) needs an apostrophe too.",
      "Let's see whos coming to the party.":
        "'Let's' is right, but 'who's' (who is) needs an apostrophe too.",
    },
    more: "'Who's' is easy to mix up with 'whose', which asks about belonging, as in 'Whose bag is this?' 'Lets' without an apostrophe is a different word, a verb: 'She lets me borrow it.'",
    tip: "Test 'who's' with 'who is'. 'Who is coming to the party?' makes sense, so the apostrophe is right.",
  },
  "You'll be fine once you've practised.": {
    why: "'You'll' is short for 'you will' and 'you've' is short for 'you have'. The apostrophes stand in for the missing 'wi' and 'ha'. Each contraction needs one.",
    not: {
      'Youll be fine once youve practised.':
        "Both apostrophes are missing, so 'youll' and 'youve' are not shown as shortened forms.",
      "You'll be fine once youve practised.":
        "'You'll' is right, but 'youve' needs an apostrophe: you've.",
      "Youll be fine once you've practised.":
        "'You've' is right, but 'youll' needs an apostrophe: you'll.",
    },
    more: "Contractions with 'will' and 'have' work with most pronouns: I'll, she'll, we've, they've. After he, she or it, 'has' becomes 's instead: she's gone.",
    tip: "'Practised' is the British spelling of the verb. In British English, practise is the verb and practice is the noun.",
  },
  "There's no way he'll agree to that.": {
    why: "'There's' is short for 'there is' and 'he'll' is short for 'he will'. The apostrophes show the dropped 'i' and 'wi'. Without the apostrophe, 'hell' becomes a different word.",
    not: {
      'Theres no way hell agree to that.':
        "Both apostrophes are missing. 'Hell' is a real word with a very different meaning, so the sentence goes wrong.",
      "Theres no way he'll agree to that.":
        "'He'll' is right, but 'there's' (there is) needs an apostrophe too.",
      "There's no way hell agree to that.":
        "'There's' is right, but 'hell' needs an apostrophe to mean 'he will': he'll.",
    },
    more: "Some contractions turn into other words without the apostrophe: he'll becomes hell, she'll becomes shell, we'll becomes well and I'll becomes ill. A spell checker may not catch these.",
    tip: 'When you proofread, look hardest at words such as hell, shell, well and ill. They may hide a missing apostrophe.',
  },
  "I'm sure that wasn't my fault.": {
    why: "'I'm' is short for 'I am' and 'wasn't' is short for 'was not'. The apostrophe in 'I'm' replaces the 'a', and in 'wasn't' it replaces the 'o'.",
    not: {
      'Im sure that wasnt my fault.':
        "Both apostrophes are missing, so the shortened 'I am' and 'was not' are not marked.",
      "Im sure that wasn't my fault.": "'Wasn't' is right, but 'Im' needs an apostrophe: I'm.",
      "I'm sure that wasnt my fault.": "'I'm' is right, but 'wasnt' needs an apostrophe: wasn't.",
    },
    more: "Most contractions with 'not' follow one pattern: wasn't, weren't, isn't, aren't, doesn't. The apostrophe sits in the place of the dropped 'o'. 'I'm' is the only contraction of 'I am'.",
    tip: "In a formal essay, avoid contractions: write 'I am' and 'was not' in full.",
  },
  "Shouldn't we have told them sooner?": {
    why: "'Shouldn't' is short for 'should not'. The apostrophe replaces the dropped 'o', so it goes between the 'n' and the 't'. The sentence is a question, so the verb comes before 'we'.",
    not: {
      'Shouldnt we have told them sooner?':
        "The apostrophe is missing. 'Shouldnt' does not show that the 'o' of 'not' has been left out.",
      "Should'nt we have told them sooner?":
        "The apostrophe is in the wrong place. It goes where the 'o' was dropped, between the 'n' and the 't'.",
      "Shouldn't' we have told them sooner?":
        "The first apostrophe is right, but the second, after the 't', has no job. An apostrophe needs a missing letter or an owner.",
    },
    more: "In a question the helping verb comes before the subject, as in 'Shouldn't we have' here. In speech 'should have' becomes 'should've', and you may see 'should of' in careless writing, which is wrong.",
    tip: "Write 'should have', never 'should of'. They sound the same in speech, but 'of' is wrong in writing.",
  },
  'The dog wagged its tail happily.': {
    why: "'Its' with no apostrophe shows that the tail belongs to the dog. 'It's' always means 'it is' or 'it has', and 'it is tail' makes no sense here. So the word needs no apostrophe.",
    not: {
      "The dog wagged it's tail happily.":
        "'It's' means 'it is' or 'it has'. 'The dog wagged it is tail' makes no sense, so 'its' with no apostrophe is needed.",
      "The dog wagged its' tail happily.":
        "'Its' never takes an apostrophe after the 's' either. It is already the possessive form.",
      'The dog wagged it,s tail happily.':
        "A comma is not an apostrophe. Even with an apostrophe the word would be wrong here, because 'its' needs none.",
    },
    more: "Possessive words such as its, his, hers, ours, yours and theirs never take an apostrophe. 'Its' follows the same pattern as 'his' and 'her': his tail, her tail, its tail.",
    tip: "Test 'it's' by saying 'it is' or 'it has'. If the sentence breaks, use 'its'.",
  },
  "It's been a long day, hasn't it?": {
    why: "'It's' is short for 'it has' here, because 'been' follows: 'it has been'. The tag 'hasn't it?' uses the same verb. 'Hasn't' is short for 'has not'. Both need apostrophes.",
    not: {
      "Its been a long day, hasn't it?":
        "'Its' with no apostrophe shows belonging. Here it must mean 'it has', so it needs an apostrophe: it's.",
      "Its' been a long day, hasn't it?":
        "The apostrophe is in the wrong place. In 'it's' it goes before the 's', where 'ha' was dropped, not after.",
      "Its been a long day, has'nt it?":
        "Two mistakes: 'its' needs an apostrophe to mean 'it has', and the apostrophe in 'has'nt' must come between the 'n' and the 't'.",
    },
    more: "'It's' can mean 'it is' ('It's cold') or 'it has' ('It's been cold'). Either way it is a contraction. The next word tells you which: 'been' or 'got' means 'has', and an adjective such as 'cold' means 'is'.",
    tip: "When 's follows 'it' and a verb such as 'been' or 'gone' comes next, the 's stands for 'has'.",
  },
  'The team lost its best player.': {
    why: "The best player belonged to the team, so we need the possessive 'its', with no apostrophe. 'It's best player' would mean 'it is best player', which makes no sense.",
    not: {
      "The team lost it's best player.":
        "'It's' means 'it is' or 'it has'. 'It is best player' does not make sense, so no apostrophe is needed.",
      "The team lost its' best player.":
        "'Its' is already the possessive form, so it does not need an apostrophe after the 's'.",
      "The team lost it's' best player.":
        "This has two apostrophes and needs none. 'Its' is the possessive and carries no apostrophe at all.",
    },
    more: "A team, company or school is 'it' when we think of it as one thing: 'The school lost its way.' The possessive is still 'its', even when many people are inside.",
    tip: "If 'it is' makes no sense, you need 'its' with no apostrophe. 'The team lost it is best player' does not work, so 'its' is right.",
  },
  "I think it's going to snow tonight.": {
    why: "'It's' is short for 'it is': 'it is going to snow'. The apostrophe replaces the missing 'i'. 'Its' without one would show belonging, and nothing here belongs to 'it'.",
    not: {
      'I think its going to snow tonight.':
        "'Its' shows belonging. The sentence needs 'it is', so the word needs an apostrophe: it's.",
      "I think its' going to snow tonight.":
        "The apostrophe is in the wrong place. In 'it's' it comes before the 's', where the 'i' was dropped.",
      'I think it,s going to snow tonight.':
        "A comma cannot replace the apostrophe. Write 'it's' with an apostrophe.",
    },
    more: "'It's going to' is the future with 'going to'. Say 'it is going to snow' to check. The contraction 'it's' is correct when 'it is' or 'it has' fits in its place.",
    tip: "Do the swap test every time. If 'it is' or 'it has' fits, write it's. If neither fits, write its.",
  },
  'Every car has its own number plate.': {
    why: "The number plate belongs to the car, so we need the possessive 'its'. It never takes an apostrophe. 'It's own' would mean 'it is own', which does not make sense.",
    not: {
      "Every car has it's own number plate.":
        "'It's' means 'it is' or 'it has'. 'It is own number plate' makes no sense, so 'its' has no apostrophe here.",
      "Every car has its' own number plate.":
        "'Its' is already the possessive, so it needs no apostrophe after the 's'.",
      "Every car has its own number plate'.":
        "'Its' is right, but the stray apostrophe after 'plate' has no job. An apostrophe needs a missing letter or an owner.",
    },
    more: "'Own' often follows a possessive word: my own, her own, its own. Because 'its' is possessive, it never takes an apostrophe here, however many cars there are.",
    tip: "Make 'its own' a fixed pair in your head. It has no apostrophe, just like 'his own' and 'their own'.",
  },
  "You're going to love this film.": {
    why: "'You're' is short for 'you are': 'you are going to love this film'. The apostrophe replaces the 'a'. 'Your' shows belonging, and nothing here belongs to you.",
    not: {
      'Your going to love this film.':
        "'Your' shows belonging, as in 'your film'. Here the sentence needs 'you are', so it needs 'you're'.",
      'Youre going to love this film.':
        "The apostrophe is missing. 'Youre' is not a word; it must be written 'you're'.",
      "Your' going to love this film.":
        "An apostrophe after 'your' has no job. The word needed is 'you're', with the apostrophe before the 're'.",
    },
    more: "'Your' goes before a noun it owns: your film, your coat. 'You're' goes before a verb or a describing word: you're going, you're right.",
    tip: "Say 'you are'. If it fits, write you're. If it does not, write your.",
  },
  'Is this your coat on the chair?': {
    why: "The coat belongs to you, so we need 'your', which shows ownership and takes no apostrophe. 'You're coat' would mean 'you are coat', which makes no sense.",
    not: {
      "Is this you're coat on the chair?":
        "'You're' means 'you are'. 'Is this you are coat' makes no sense. The coat belongs to you, so 'your' is needed.",
      'Is this youre coat on the chair?':
        "'Youre' is not a word. The coat belongs to you, so the word needed is 'your'.",
      "Is this your' coat on the chair?":
        "'Your' already shows ownership, so it takes no apostrophe.",
    },
    more: "'Your' is a possessive determiner. It comes before a noun: your coat, your idea. The other possessive determiners also take no apostrophe: my, his, her, its, our, their.",
    tip: "To check, try swapping in 'my'. 'Is this my coat?' works, so use 'your' here.",
  },
  "You're right: we're almost there.": {
    why: "'You're right' means 'you are right', and 'we're almost there' means 'we are almost there'. Both are contractions with an apostrophe in place of the 'a'. 'Your' and 'were' are different words.",
    not: {
      'Your right: were almost there.':
        "Both apostrophes are missing. 'Your' shows belonging and 'were' is the past tense of 'are'. Neither means 'you are' or 'we are'.",
      "Youre right: we're almost there.":
        "'We're' is right, but 'youre' needs an apostrophe: you're.",
      "You're right: were almost there.":
        "'You're' is right, but 'were' needs an apostrophe to mean 'we are': we're.",
    },
    more: "These are among the most common slips in writing. The pairs sound alike: your and you're, were and we're, their and they're. In each pair, the apostrophe means that two words have joined.",
    tip: 'Read your finished work aloud, replacing each contraction with its full words. If it still makes sense, the apostrophe belongs.',
  },
  'Remember to bring your homework.': {
    why: "The homework belongs to you, so we need 'your', which shows ownership and takes no apostrophe. 'You're homework' would mean 'you are homework', which makes no sense.",
    not: {
      "Remember to bring you're homework.":
        "'You're' means 'you are'. 'Bring you are homework' makes no sense. The homework belongs to you, so 'your' is needed.",
      'Remember to bring youre homework.':
        "'Youre' is not a word. The word needed is 'your', with no apostrophe.",
      "Remember to bring your' homework.":
        "'Your' already shows ownership, so it takes no apostrophe.",
    },
    more: "Use 'your' when what follows belongs to you, even with an adjective between, as in 'your new coat'. Use 'you're' when 'you are' fits: you're late, you're a star.",
    tip: "'Your homework' shows who owns it, and 'your' never takes an apostrophe. 'You're late' is a contraction of 'you are late'.",
  },
  "You're the best person for the job.": {
    why: "'You're' is short for 'you are': 'you are the best person for the job'. The apostrophe replaces the 'a'. 'Your the best' would use the possessive word by mistake.",
    not: {
      'Your the best person for the job.':
        "'Your' shows belonging. Here the sentence needs 'you are', so it must be 'you're'.",
      'Youre the best person for the job.':
        "The apostrophe is missing. 'Youre' is not a word; it must be written 'you're'.",
      "Your' the best person for the job.":
        "An apostrophe after 'your' has no job. The word needed is 'you're', with the apostrophe before the 're'.",
    },
    more: "'You're' is followed by a describing word, a noun phrase or an -ing verb: you're kind, you're the best, you're going. 'Your' is followed by the thing you own, such as 'your coat' or 'your new coat'.",
    tip: "Mistakes with 'your' and 'you're' stand out in job applications and exam answers. Always do the 'you are' test.",
  },
  "The dog's bone was buried in the garden.": {
    why: "The bone belongs to one dog, so the apostrophe goes before the 's': dog's. The label above the question says singular possession, which means there is a single owner.",
    not: {
      'The dogs bone was buried in the garden.':
        "'Dogs' with no apostrophe only tells us there is more than one dog. It does not show that the bone belongs to the dog.",
      "The dogs' bone was buried in the garden.":
        "An apostrophe after the 's' is the pattern for several owners, so this would mean several dogs shared a bone. The label says singular possession: one dog.",
      'The dog,s bone was buried in the garden.':
        "A comma is not an apostrophe. Possession needs an apostrophe: dog's.",
    },
    more: "For one owner, add apostrophe and s to the noun: the dog's bone, the girl's coat, the teacher's desk. The mark moves with the number of owners. One tiny mark changes the meaning.",
    tip: 'Write the owner first, then ask: one or many? For one owner, add apostrophe and s.',
  },
  "My sister's phone is broken again.": {
    why: "The phone belongs to one sister, so the apostrophe goes before the 's': sister's. The label above the question says singular possession, so it is about a single owner.",
    not: {
      'My sisters phone is broken again.':
        "Without an apostrophe, 'sisters' just means more than one sister. It does not show who owns the phone.",
      "My sisters' phone is broken again.":
        "An apostrophe after the 's' is for several owners, such as two sisters sharing a phone. The label says singular possession, so it is wrong here.",
      'My sister,s phone is broken again.': 'A comma cannot do the job of an apostrophe.',
    },
    more: "'Sister's' with the apostrophe before the 's' tells the reader there is one sister. 'Sisters'' with it after tells them there are several. The position of one mark changes who owns the phone.",
    tip: 'In your own writing, decide first how many owners there are. That tells you where the apostrophe goes.',
  },
  "The teacher marked Tom's essay first.": {
    why: "The essay belongs to Tom, one person, so we add apostrophe and 's' to his name: Tom's. A name is a singular noun, so it follows the same rule as any single owner.",
    not: {
      'The teacher marked Toms essay first.':
        "Without an apostrophe, 'Toms' would mean several boys called Tom. It does not show that the essay belongs to him.",
      "The teacher marked Toms' essay first.":
        "An apostrophe after the 's' would suggest the essay belonged to several people named Tom. The label says singular possession, so there is one Tom and the apostrophe goes before the 's'.",
      'The teacher marked Tom,s essay first.': 'A comma cannot stand in for an apostrophe.',
    },
    more: "Names follow the same rule as other nouns. Add apostrophe and s to show ownership: Tom's essay, Maya's bag, the teacher's desk. A name that already ends in s is covered in other questions.",
    tip: "Look out for this in essays on books you study. 'Macbeth's ambition' has the apostrophe before the s, because the ambition belongs to one man.",
  },
  "We met at the city's main library.": {
    why: "The main library belongs to one city, so we add apostrophe and 's' to the singular noun: city's. The 'y' stays; we do not change it to 'ie'.",
    not: {
      'We met at the citys main library.':
        "'Citys' is not a word. The plural is 'cities', and the possessive of one city is 'city's'.",
      "We met at the citys' main library.":
        "'Citys' is a misspelling of the plural, so adding an apostrophe after it does not help. For one city, write city's.",
      "We met at the citie's main library.":
        "'Citie' is not a word. For one city, keep the 'y' and add apostrophe and 's': city's.",
    },
    more: "A noun ending in -y keeps the 'y' when we add apostrophe and s for one owner: the baby's toy, the company's profits. The 'y' only changes in the plural, where 'city' becomes 'cities'.",
    tip: "Spell the word first, then add the apostrophe. One city: city's. Several cities: cities'.",
  },
  "The company's profits rose this year.": {
    why: "The profits belong to one company, so we add apostrophe and 's' to the singular noun: company's. The 'y' stays. The label above the question says singular possession, so it is about one company.",
    not: {
      'The companys profits rose this year.':
        "'Companys' is not a word. The possessive of one company is 'company's', with an apostrophe.",
      "The companys' profits rose this year.":
        "'Companys' is a misspelling, so an apostrophe after it does not help. For one company, write company's.",
      "The companies' profits rose this year.":
        'This is correct for several companies, but the label says singular possession, so the question is about one company.',
    },
    more: "Spell the plural correctly first. For several companies it is 'companies', and the apostrophe comes after it: companies'. For one company, write company's.",
    tip: "Always spell the plural correctly before you add the apostrophe. 'Companys' and 'citys' are not words.",
  },
  "She borrowed the doctor's pen.": {
    why: "The pen belongs to one doctor, so we add apostrophe and 's': doctor's. The label above the question says singular possession, so it is about a single owner.",
    not: {
      'She borrowed the doctors pen.':
        "Without an apostrophe, 'doctors' only means more than one doctor. It does not show whose pen it is.",
      "She borrowed the doctors' pen.":
        "An apostrophe after the 's' is for several owners, such as two doctors sharing a pen. The label says singular possession, so it is wrong here.",
      'She borrowed the doctor,s pen.': 'A comma is not an apostrophe.',
    },
    more: "A job title works like any other noun: the doctor's pen, the teacher's desk, the pilot's seat. Add apostrophe and s to show that one person owns something.",
    tip: "'The doctor's' is easy to mix up with 'the doctors', a plain plural. Ask yourself whether anything belongs to them.",
  },
  "The baby's toy fell on the floor.": {
    why: "The toy belongs to one baby, so we add apostrophe and 's' to the singular noun: baby's. The 'y' stays. The label above the question says singular possession, so it is about one baby.",
    not: {
      'The babys toy fell on the floor.':
        "'Babys' is not a word. The possessive of one baby is 'baby's'.",
      "The babys' toy fell on the floor.":
        "'Babys' is a misspelling of the plural, so an apostrophe after it does not help. For one baby, write baby's.",
      "The babies' toy fell on the floor.":
        'This is correct for several babies, but the label says singular possession, so the question is about one baby.',
    },
    more: "The 'y' changes only in the plural: baby becomes babies. For one owner it stays and we add apostrophe and s: baby's. For several owners, spell the plural first, then add the apostrophe: babies'.",
    tip: 'Check words ending in -y twice: once for the spelling, once for the apostrophe.',
  },
  "James's car wouldn't start this morning.": {
    why: "The car belongs to one person, James, so we add apostrophe and 's' to his name: James's. 'Wouldn't' is short for 'would not', so it needs an apostrophe too.",
    not: {
      "James car wouldn't start this morning.":
        "'James' needs an apostrophe to show that the car belongs to him. 'Wouldn't' is right.",
      "James' car wouldnt start this morning.":
        "Both 'James's' and 'James'' are accepted for a name ending in s. The mistake here is 'wouldnt', which needs an apostrophe: wouldn't.",
      "Jame's car wouldn't start this morning.":
        "'Jame' is not his name. Keep the whole name, James, and add the apostrophe after it: James's.",
    },
    more: "For a singular name ending in s, British writers often add apostrophe and s, as in James's car and Charles's bike, because that is how we say it. Some add only the apostrophe. Pick one style and keep to it.",
    tip: "Say it aloud. If you hear an extra 'iz' sound, as in 'Jameses car', write the extra s after the apostrophe.",
  },
  "The dogs' bones were scattered everywhere.": {
    why: "The bones belong to several dogs, so the apostrophe goes after the plural 's': dogs'. The label above the question says plural possession, so it is about more than one owner.",
    not: {
      'The dogs bones were scattered everywhere.':
        "Without an apostrophe, 'dogs' only tells us there is more than one dog. It does not show that the bones belong to them.",
      "The dog's bones were scattered everywhere.":
        "An apostrophe before the 's' is for one dog. The label says plural possession, so the apostrophe belongs after the 's'.",
      "The dogs's bones were scattered everywhere.":
        "'Dogs' already ends in 's', so only an apostrophe is added. A second 's' is a mistake.",
    },
    more: "For plural owners that end in s, add only an apostrophe: the dogs' bones, the girls' coats, the teachers' desks. Compare one owner: the dog's bones, the girl's coat.",
    tip: 'Write the plural first, then look at the last letter. If it is s, add only the apostrophe.',
  },
  "The students' lockers are by the gym.": {
    why: "The lockers belong to many students, so the apostrophe goes after the plural 's': students'. The label above the question says plural possession, so it is about more than one owner.",
    not: {
      'The students lockers are by the gym.':
        "Without an apostrophe, 'students' only tells us there is more than one student. It does not show that the lockers belong to them.",
      "The student's lockers are by the gym.":
        "An apostrophe before the 's' is for one student. The label says plural possession, so the apostrophe belongs after the 's'.",
      "The students's lockers are by the gym.":
        "'Students' already ends in 's', so only an apostrophe is added. A second 's' is a mistake.",
    },
    more: "The apostrophe position tells the reader how many owners there are: students' means many, student's means one. The verb 'are' only tells us there are several lockers, not several students.",
    tip: "Look for the plural in your own sentence before you add the apostrophe: students, so students'.",
  },
  "The girls' changing room was repainted.": {
    why: "The changing room belongs to the girls, so the apostrophe goes after the plural 's': girls'. The label above the question says plural possession, so it is about more than one owner.",
    not: {
      'The girls changing room was repainted.':
        "Without an apostrophe, 'girls' only tells us there is more than one girl. It does not show that the room belongs to them.",
      "The girl's changing room was repainted.":
        "An apostrophe before the 's' is for one girl. The label says plural possession, so the apostrophe belongs after the 's'.",
      "The girls's changing room was repainted.":
        "'Girls' already ends in 's', so only an apostrophe is added. A second 's' is a mistake.",
    },
    more: "A group can own something, and the group is then the owner: girls'. If the room were one girl's, it would be the girl's changing room.",
    tip: 'Read the sentence and ask who the room belongs to. If the answer is more than one person, put the apostrophe after the s.',
  },
  "The teachers' meeting starts at four.": {
    why: "The meeting is for all the teachers, so the apostrophe goes after the plural 's': teachers'. The label above the question says plural possession, so it is about more than one owner.",
    not: {
      'The teachers meeting starts at four.':
        "Without an apostrophe, 'teachers' only tells us there is more than one teacher. It does not show whose meeting it is.",
      "The teacher's meeting starts at four.":
        "An apostrophe before the 's' is for one teacher. The label says plural possession, so the apostrophe belongs after the 's'.",
      "The teachers's meeting starts at four.":
        "'Teachers' already ends in 's', so only an apostrophe is added. A second 's' is a mistake.",
    },
    more: "Possession is not always ownership. A teachers' meeting is a meeting for teachers. The apostrophe shows a link between the group and the thing, just as it does in 'the students' lockers'.",
    tip: "Do not skip the apostrophe in everyday phrases such as 'teachers' meeting' or 'players' kit'. It is the same rule.",
  },
  "Both countries' leaders signed the treaty.": {
    why: "'Both' tells us there are two countries, so the owner is plural and the apostrophe goes after the 's' of 'countries': countries'. 'Country's' would mean one country, and we cannot say 'both country'.",
    not: {
      'Both countries leaders signed the treaty.':
        "Without an apostrophe, 'countries' only tells us there are two countries. It does not show that the leaders belong to them.",
      "Both country's leaders signed the treaty.":
        "'Country's' means one country, but 'both' means two. The label says plural possession, so the apostrophe goes after the 's' of 'countries'.",
      "Both countries's leaders signed the treaty.":
        "'Countries' already ends in 's', so only an apostrophe is added. A second 's' is a mistake.",
    },
    more: "The plural of 'country' is 'countries', not 'countrys'. Spell the plural first, then add the apostrophe: country's (one), countries' (many).",
    tip: "Look for clue words such as 'both', 'many' or 'several'. They can show that the owner is plural.",
  },
  "The players' kit was left in the bus.": {
    why: "The kit belongs to the players, so the apostrophe goes after the plural 's': players'. The label above the question says plural possession, so it is about more than one owner.",
    not: {
      'The players kit was left in the bus.':
        "Without an apostrophe, 'players' only tells us there is more than one player. It does not show whose kit it is.",
      "The player's kit was left in the bus.":
        "An apostrophe before the 's' is for one player. The label says plural possession, so the apostrophe belongs after the 's'.",
      "The players's kit was left in the bus.":
        "'Players' already ends in 's', so only an apostrophe is added. A second 's' is a mistake.",
    },
    more: "A single thing can belong to many owners. 'The players' kit' can be one bag of kit owned by the whole team. The apostrophe tells us who the owners are, not how many things there are.",
    tip: 'Find the owner, check whether it is one or many, then place the apostrophe. The thing owned does not change the rule.',
  },
  "The children's playground was rebuilt.": {
    why: "'Children' is a plural that does not end in 's', so we add apostrophe and 's': children's. Only plurals that already end in 's' take just an apostrophe.",
    not: {
      'The childrens playground was rebuilt.':
        "'Childrens' is not a word. The plural is 'children', and the possessive needs an apostrophe: children's.",
      "The childrens' playground was rebuilt.":
        "This is a common mistake. 'Children' is already a plural, so it needs no extra 's' before the apostrophe. Write children's.",
      "The childs' playground was rebuilt.":
        "'Child' is the singular, and 'childs' is not a word. The plural of 'child' is 'children'.",
    },
    more: "The irregular plurals include men, women, children, people, mice and geese. Each takes apostrophe and s to show belonging: men's, women's, children's, people's.",
    tip: "Ask whether the plural ends in s. 'Children' does not, so treat it like a singular: add apostrophe and s.",
  },
  "The men's department is upstairs.": {
    why: "'Men' is a plural that does not end in 's', so we add apostrophe and 's': men's. Only plurals that already end in 's' take just an apostrophe.",
    not: {
      'The mens department is upstairs.':
        "'Mens' is not a word. Shop signs often miss out the apostrophe, but standard writing needs it: men's.",
      "The mens' department is upstairs.":
        "'Men' is already a plural, so it needs no extra 's' before the apostrophe. Write men's.",
      "The mens's department is upstairs.":
        "'Mens' is not a word, so adding 's to it makes it worse. Start from 'men' and add apostrophe and s: men's.",
    },
    more: "The apostrophe goes before the s when the plural does not end in s: men's, women's, children's, people's. It goes after the s when the plural does: boys', girls', teachers'.",
    tip: "Shops and signs often leave out apostrophes. In your own writing, always include them: men's, women's.",
  },
  "These are the women's trainers.": {
    why: "'Women' is a plural that does not end in 's', so we add apostrophe and 's': women's. The trainers belong to women, more than one owner.",
    not: {
      'These are the womens trainers.':
        "'Womens' is not a word. The plural is 'women', and the trainers belong to them, so it needs an apostrophe: women's.",
      "These are the womens' trainers.":
        "'Women' is already a plural, so it needs no extra 's' before the apostrophe. Write women's.",
      "These are the womans' trainers.":
        "'Woman' is the singular and 'womans' is not a word. The plural is 'women'.",
    },
    more: "Spelling matters here: one woman, two women. The apostrophe goes on the correct word: woman's for one, women's for several.",
    tip: 'Make sure you have the right plural first: man and men, woman and women, child and children.',
  },
  "The people's voices were finally heard.": {
    why: "'People' is a plural that does not end in 's', so we add apostrophe and 's': people's. The voices belong to the people, many owners.",
    not: {
      'The peoples voices were finally heard.':
        "'Peoples' can mean separate nations, and there is no apostrophe to show ownership. The plural is 'people', so write people's.",
      "The people' voices were finally heard.":
        "'People' does not end in 's', so an apostrophe alone is not enough. Add apostrophe and s: people's.",
      "The peoples's voices were finally heard.":
        "'Peoples's' is wrong twice over. Start from 'people' and add apostrophe and s: people's.",
    },
    more: "'People' is the normal plural of 'person', so it has no s and takes apostrophe and s. 'Peoples' is a different word, used for separate nations or groups: the peoples of Africa.",
    tip: "In speeches and essays on society, 'the people's voice' is a common phrase. Remember the apostrophe goes before the s.",
  },
  "The mice's nest was hidden in the wall.": {
    why: "'Mice' is a plural that does not end in the letter 's', so we add apostrophe and 's': mice's. It shows that the nest belongs to the mice.",
    not: {
      'The mice nest was hidden in the wall.':
        "Without an apostrophe, 'mice nest' does not show that the nest belongs to the mice. Add apostrophe and s: mice's.",
      "The mices' nest was hidden in the wall.":
        "'Mices' is not a word. The plural of 'mouse' is 'mice', so add apostrophe and s to that: mice's.",
      "The mice' nest was hidden in the wall.":
        "'Mice' does not end in the letter 's', so an apostrophe alone is not enough. Add apostrophe and s: mice's.",
    },
    more: "Other irregular plurals follow the same pattern, such as geese's. If it sounds clumsy, a writer may rephrase: 'the nest of the mice'. Both are correct.",
    tip: "If a possessive sounds awkward, try an 'of' phrase: 'the nest of the mice'. In a formal essay, choose whichever reads more clearly.",
  },
  'I bought three apples at the shop.': {
    why: "'Apples' is a simple plural. It means more than one apple, and nothing belongs to the apples, so no apostrophe is needed. An apostrophe is for missing letters or ownership, not for plurals.",
    not: {
      "I bought three apple's at the shop.":
        "This is the greengrocer's apostrophe. 'Apple's' would mean something belongs to the apple, but 'apples' is only a plural.",
      "I bought three apples' at the shop.":
        "An apostrophe after the 's' shows that the apples own something. Nothing follows to be owned, so it is wrong.",
      'I bought three apple,s at the shop.':
        "A plural is made by adding 's' to the word, with nothing between 'apple' and 's'.",
    },
    more: "This mistake is so common that it has a name: the greengrocer's apostrophe. Check whether anything belongs to the word. If not, and no letters are missing, use no apostrophe.",
    tip: 'Before adding an apostrophe to a word that ends in s, ask whether it is a contraction or whether something belongs to it. If neither, leave it out.',
  },
  'The 1990s were a memorable decade.': {
    why: "'1990s' is a plural: it means the years from 1990 to 1999. Nothing belongs to the decade in this sentence and no letters are missing, so no apostrophe is needed.",
    not: {
      "The 1990's were a memorable decade.":
        "An apostrophe before the 's' would suggest something belongs to 1990, one year. We mean the whole decade, so it is simply a plural.",
      "The 1990s' were a memorable decade.":
        "An apostrophe after the 's' would show that the decade owns something. Nothing follows to be owned.",
      "The 199'0s were a memorable decade.":
        'An apostrophe inside a number has no job here. The plural of 1990 is made by adding s.',
    },
    more: "An apostrophe belongs in a date only when digits are left out: the '90s is short for the 1990s. With the full number written, just add s.",
    tip: 'Write decades as 1990s, 1960s and so on. In an essay on a text set in the 1920s, no apostrophe is needed.',
  },
  'We saw lots of birds in the park.': {
    why: "'Birds' is a plural meaning more than one bird. Nothing belongs to the birds here, and no letters are missing, so there is no apostrophe. We simply add 's' to make a plural.",
    not: {
      "We saw lots of bird's in the park.":
        "This is the greengrocer's apostrophe. 'Bird's' would mean something belongs to one bird, but we mean many birds.",
      "We saw lots of birds' in the park.":
        "An apostrophe after the 's' would show that the birds own something. Nothing follows to be owned.",
      'We saw lots of bird,s in the park.':
        "A plural is made by adding 's' directly, with no comma or other mark between 'bird' and 's'.",
    },
    more: "'Lots of birds' is plural, so 'birds' needs no apostrophe. Compare 'the birds' nests' (the nests belong to many birds) and 'the bird's nest' (one bird).",
    tip: "Try a quick test. Is there a noun after the word that the birds own? 'Birds' nests': yes. 'Lots of birds': no.",
  },
  'The shop sells fresh vegetables daily.': {
    why: "'Vegetables' is a plain plural. It means more than one vegetable, and nothing belongs to them, so no apostrophe is needed. A plural never takes an apostrophe just because it ends in 's'.",
    not: {
      "The shop sells fresh vegetable's daily.":
        "This is the greengrocer's apostrophe. Nothing belongs to the vegetable here, and 'vegetable is daily' makes no sense.",
      "The shop sells fresh vegetables' daily.":
        "An apostrophe after the 's' would show that the vegetables own something. 'Daily' is an adverb, not something they own.",
      'The shop sells fresh vegetable,s daily.':
        "A comma cannot split a plural. Add 's' directly to the word.",
    },
    more: "A shop is the classic place for this slip: signs offering 'apple's' or 'potato's'. The plural of most nouns is just s. Some words ending in o add es: potatoes, tomatoes.",
    tip: "When you see a word ending in 's', ask whether it is a plural, a contraction or a possessive. Only the last two ever need an apostrophe.",
  },
  'There are five DVDs on the shelf.': {
    why: "'DVDs' is the plural of 'DVD': we add a lower-case 's' to the initials. Nothing belongs to the discs and no letters are missing, so no apostrophe is needed.",
    not: {
      "There are five DVD's on the shelf.":
        "An apostrophe before the 's' wrongly suggests ownership or a missing letter. The plural of initials is just the initials plus s.",
      "There are five DVDs' on the shelf.":
        "An apostrophe after the 's' would show that the DVDs own something. Nothing follows to be owned.",
      "There are five DV'Ds on the shelf.":
        'An apostrophe inside the initials has no job. The plural adds s at the end: DVDs.',
    },
    more: "Plurals of initials, such as CDs, PCs and MPs, add a plain s. A possessive adds an apostrophe, as in 'the MP's office'. Do not mix them up.",
    tip: 'Treat initials like any other word. If you mean more than one, add s. If something belongs to one, add apostrophe and s.',
  },
  'The students worked hard all term.': {
    why: "'Students' is a plural subject: it means more than one student who worked. Nothing belongs to the students and no letters are missing, so no apostrophe is needed.",
    not: {
      "The students's worked hard all term.":
        "'Students' already ends in 's'. Adding apostrophe and 's' after it is a mistake, and nothing is owned.",
      "The students' worked hard all term.":
        "An apostrophe after the 's' shows ownership, but nothing follows to be owned. 'Worked' is a verb, not something the students have.",
      'The students,s worked hard all term.':
        "'Students' is already the plural, so the comma and the extra 's' are mistakes. A comma is not an apostrophe.",
    },
    more: "A plural is not possessive just because it ends in s. Compare 'The students worked' (plural) with 'The students' work' (the work belongs to them). A noun that follows is the clue.",
    tip: 'Ask what the word owns. If it owns nothing, it is a plain plural: no apostrophe.',
  },
  "The cat's whiskers twitched as it slept.": {
    why: "The whiskers belong to one cat, so we add apostrophe and 's': cat's. 'As it slept' confirms there is one cat, because we say 'it', not 'they'.",
    not: {
      'The cats whiskers twitched as it slept.':
        "Without an apostrophe, 'cats' only tells us there is more than one cat. It does not show that the whiskers belong to the cat.",
      "The cats' whiskers twitched as it slept.":
        "An apostrophe after the 's' means several cats, but 'it slept' tells us there is only one cat.",
      "The cats whisker's twitched as it slept.":
        "The apostrophe is on the wrong word. The cat owns the whiskers, so it belongs in 'cat's', and 'whiskers' is a plain plural.",
    },
    more: "An apostrophe on 'whisker's' is a plural mistake, like the greengrocer's apostrophe. The apostrophe belongs on the owner (cat), not on the thing owned (whiskers).",
    tip: 'Find the owner first, then put the apostrophe on it. The thing owned never gets one just because it is plural.',
  },
  "My parents' house is near the river.": {
    why: "The house belongs to my parents, so the apostrophe goes after the plural 's': parents'. The label above the question says plural possession, so it is about more than one owner.",
    not: {
      'My parents house is near the river.':
        "Without an apostrophe, 'parents' only tells us there is more than one parent. It does not show that the house belongs to them.",
      "My parent's house is near the river.":
        "An apostrophe before the 's' is for one parent. The label says plural possession, so the apostrophe belongs after the 's'.",
      "My parents's house is near the river.":
        "'Parents' already ends in 's', so only an apostrophe is added. A second 's' is a mistake.",
    },
    more: "'My parents' house' means the house of both parents. 'My parent's house' would mean one parent's house. The position of one small mark gives the reader important information.",
    tip: 'In writing about families, check whether you mean one parent or both. The apostrophe tells the reader.',
  },
  "Where's the report you're writing?": {
    why: "'Where's' is short for 'where is' and 'you're' is short for 'you are'. Each apostrophe replaces dropped letters. 'Your' would show belonging, which does not fit here.",
    not: {
      "Wheres the report you're writing?":
        "'You're' is right, but 'wheres' is not a word. It needs an apostrophe to show 'where is': where's.",
      'Wheres the report your writing?':
        "Both words are wrong. 'Where's' needs an apostrophe, and 'your' shows belonging, so it must be 'you're' (you are).",
      "Where's the report your writing?":
        "'Where's' is right, but 'your' shows belonging. We need 'you are', so it must be 'you're'.",
    },
    more: "Two contractions in one sentence are common in speech. A quick test works for both: say the long form. 'Where is the report you are writing?' makes sense.",
    tip: 'In long sentences, check each apostrophe in turn rather than reading the whole sentence at once.',
  },
  "It's time the school updated its website.": {
    why: "The first word is short for 'it is': 'it is time'. The second word shows that the website belongs to the school, so it is the possessive 'its' with no apostrophe.",
    not: {
      'Its time the school updated its website.':
        "The second 'its' is right, but the first needs an apostrophe because it means 'it is': it's.",
      "Its time the school updated it's website.":
        "The two words are the wrong way round. The first means 'it is' and needs an apostrophe; the second shows belonging and needs none.",
      "It's time the school updated it's website.":
        "The first 'it's' is right, but the second shows that the website belongs to the school, so it is 'its' with no apostrophe.",
    },
    more: "This sentence needs both forms because the two words do different jobs. It's means it is or it has (a contraction). Its means belonging to it (a possessive). They look alike but are not interchangeable.",
    tip: "Do the swap test on each one separately. Replace the first with 'it is' and it works. Replace the second and 'updated it is website' does not.",
  },
  "The boy's football landed in next door's garden.": {
    why: "The football belongs to one boy and the garden to next door, so each owner gets apostrophe and 's': boy's and next door's. The label above the question says singular possession, so it is about single owners.",
    not: {
      'The boys football landed in next doors garden.':
        'Both apostrophes are missing, so neither owner is shown.',
      "The boys' football landed in next doors garden.":
        "'Next doors' is missing its apostrophe: next door's. The label also says singular possession, so 'boy's' is expected.",
      "The boys football landed in next door's garden.":
        "'Next door's' is right, but 'boys' needs an apostrophe to show the football belongs to the boy: boy's.",
    },
    more: "'Next door' acts like a noun here, meaning the house next door, so it takes apostrophe and s to show the garden belongs to it: next door's garden.",
    tip: 'Check every owner in the sentence. This one has two, so it needs two apostrophes.',
  },
  "Charles's bike has a flat tyre.": {
    why: "The bike belongs to one person, Charles, so we add apostrophe and 's' to his name: Charles's. We say an extra 'iz' sound, so we write the extra 's'. The rest of the sentence needs no apostrophe.",
    not: {
      'Charles bike has a flat tyre.':
        "An apostrophe is needed to show that the bike belongs to Charles: Charles's.",
      "Charles' bike has a flat tyre'.":
        "'Charles'' on its own is acceptable, but the apostrophe after 'tyre' has no job. Nothing is missing there and nothing is owned.",
      "Charle's bike has a flat tyre.":
        "'Charle' is not his name. Keep the whole name, Charles, and add the apostrophe after it: Charles's.",
    },
    more: "For a singular name ending in s, both Charles's and Charles' are accepted in British English. Many writers choose apostrophe and s because it matches how we say it. Keep to one style in the same piece.",
    tip: "Say it aloud. If you hear an extra syllable, 'Charles-iz', write the s after the apostrophe.",
  },
  "The witnesses' statements matched exactly.": {
    why: "The statements belong to several witnesses, so the apostrophe goes after the plural 's': witnesses'. The label above the question says plural possession, so it is about more than one owner.",
    not: {
      'The witnesses statements matched exactly.':
        "Without an apostrophe, 'witnesses' only tells us there is more than one witness. It does not show that the statements belong to them.",
      "The witness's statements matched exactly.":
        "This puts the apostrophe for one witness. The label says plural possession, so we need the plural form: witnesses'.",
      "The witnesses's statements matched exactly.":
        "'Witnesses' already ends in 's', so only an apostrophe is added. A second 's' is a mistake.",
    },
    more: "Take care with words that already end in an s sound. One witness: witness's. Several witnesses: witnesses'. Spell the word you mean first, then place the apostrophe.",
    tip: 'Words ending in -ss, -x or -ch usually add -es in the plural, as in witness and witnesses. Spell the plural before you add the apostrophe.',
  },
  "They're certain that it's their turn now.": {
    why: "'They're' is short for 'they are' and 'it's' is short for 'it is'. 'Their' is right as it stands, because it shows that the turn belongs to them, so it takes no apostrophe.",
    not: {
      'Theyre certain that its their turn now.':
        "Both contractions are missing apostrophes. 'Theyre' is not a word, and 'its' shows belonging instead of meaning 'it is'.",
      "They're certain that its their turn now.":
        "'They're' is right, but 'its' shows belonging. Here it must mean 'it is', so it needs an apostrophe: it's.",
      "Theyre certain that it's their turn now.":
        "'It's' is right, but 'theyre' needs an apostrophe: they're.",
    },
    more: "There, their and they're sound the same. 'Their' shows belonging (their turn), 'there' shows place (over there) and 'they're' is 'they are'. Only 'they're' has an apostrophe.",
    tip: "Memorise the three with a test. If 'they are' fits, write they're. If it shows who owns something, write their. If it means a place, write there.",
  },
  "The geese's pond freezes over in winter.": {
    why: "'Geese' is a plural that does not end in 's', so we add apostrophe and 's': geese's. It shows that the pond belongs to the geese.",
    not: {
      'The geese pond freezes over in winter.':
        "Without an apostrophe, 'geese pond' does not show that the pond belongs to the geese. Add apostrophe and s: geese's.",
      "The gooses' pond freezes over in winter.":
        "'Gooses' is not the plural of 'goose'. The plural is 'geese', so add apostrophe and s to that: geese's.",
      "The geeses' pond freezes over in winter.":
        "'Geeses' is not a word. 'Geese' is already the plural, so add apostrophe and s to it: geese's.",
    },
    more: "One goose, many geese. The same rule applies to other irregular plurals: the children's toys, the men's choir. If it sounds awkward, rephrase: 'the pond of the geese'.",
    tip: "Use the irregular plural first, then add apostrophe and s. Do not invent plurals such as 'geeses' or 'mices'.",
  },
}
