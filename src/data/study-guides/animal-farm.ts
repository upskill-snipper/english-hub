import { animalFarmText } from '@/data/full-texts/animal-farm'
import { passage } from '@/lib/study-guides/passage'
import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Animal Farm, George Orwell (Secker and Warburg, 17 August 1945). A
 * SUPPLEMENT: the page at /revision/texts/animal-farm and its sub-pages keep
 * the overview, context, themes, characters, key quotations, structure,
 * essay plans and model answers. This file adds what they lacked: passages
 * for close reading, language analysis as named techniques, and a glossary,
 * plus the timeline and character map the animated visuals draw.
 *
 * RIGHTS. Orwell died on 21 January 1950, so the novella's UK copyright
 * ended on 31 December 2020 and it is in the public domain. Until 26 September
 * 2026 this guide was treated as copyrighted because the novella stays in
 * copyright in the United States until 2041; the site works to UK law only
 * (the founder's decision that day), so it is public domain here.
 *
 * DEEPENED, 26 September 2026 (later the same day). The guide was first
 * written to the copyrighted-text limits: each passage located by a pointer
 * and summarised but never printed, and every quotation kept short. Once the
 * novella was held in src/data/full-texts/animal-farm.ts (the Project
 * Gutenberg Australia transcription), those limits no longer applied here, so:
 * - Every extract now prints its passage. The text is cut from the held
 *   edition by passage() in src/lib/study-guides/passage.ts, from short
 *   anchors, and is never typed, so it cannot differ from the edition. Each
 *   passage was narrowed to a readable length, about 280 to 390 words: Old
 *   Major's extract is now the opening of his argument, Snowball's expulsion
 *   starts as the dogs burst in, and Boxer's starts as Benjamin reads the van.
 *   Notes on phrases that fell outside the narrowed passages moved to the
 *   timeline cards for the same moments.
 * - Two extracts were added, the Chapter 7 confessions and the last scene of
 *   Chapter 10, and every extract now carries at least eleven annotations.
 * - The timeline has at least two moments for every chapter, because the
 *   chapter pages filter it by chapter. Vocabulary and relationships grew.
 * - Every quotation, annotation and printed passage is now checked by the
 *   guide test against the held edition, which it could not do before.
 * The printed passages follow the held edition's punctuation where printings
 * differ: Major's triplet in Chapter 1 has the Oxford comma, and Clover's cry
 * in Chapter 9 reads "They're". The phrases added that day were checked
 * against the held edition only (by the guide test), not against the scanned
 * printings described below, which checked the earlier phrases.
 *
 * REVIEWED, 26 September 2026 (the same evening). Every quotation in the
 * deepened guide was verbatim, so the guide test passed it, but a re-read of
 * each chapter of the held edition against each card, note and definition
 * found claims the test cannot see:
 * - Summaries that said more than the text. The first harvest was finished
 *   two days sooner than it usually took Jones's men, not faster than they
 *   "ever did"; the reading classes were a success, not a failure; the
 *   pasture for superannuated animals was rumoured, not promised; Squealer,
 *   not Napoleon, claims the windmill plans for Napoleon; the banquet crate
 *   arrives by day and the singing comes that night; Clover's cry is not the
 *   last attempt to save Boxer, because the animals then beg the van horses
 *   and think of the gate.
 * - Notes that misdescribed the words they annotate: the van's lettering is
 *   not in capitals, "presided over by himself" is four words, not three,
 *   and two aces of spades show that at least one player cheats, not that
 *   one does; the goose's six ears of corn were taken at harvest, not in a
 *   hungry year; Snowball is spoken of after Chapter 5 by Napoleon as well as
 *   Squealer; and the rule Benjamin breaks in Chapter 10 is his refusal to
 *   read the wall, not a rule of silence.
 * - The Chapter 1 pointer called the opening of Major's argument "the middle
 *   of the speech", and said the speech closes with his rules; it closes
 *   with the dream and the song.
 * - The Wikipedia source was credited with linking Frederick's attack to
 *   Operation Barbarossa, which the article does not name. It links the
 *   forged notes to the pact of August 1939, after which Frederick attacks,
 *   and the Battle of the Windmill to the Second World War; the card now
 *   says that, with the invasion's date from the Barbarossa article.
 * - The held edition's word count includes no THE END, and the Orwell
 *   Foundation has moved the Ukrainian preface to a new address.
 *
 * HOW THE QUOTATIONS WERE FIRST CHECKED (26 September 2026). Before the
 * edition was held, every quotation was first located, and its chapter read
 * off the chapter heading above it, in the Project Gutenberg Australia
 * transcription (eBook 0100011h). Each was then confirmed, word for word, in
 * scans of printed editions through Open Library's full-text search: a 1945
 * printing, Penguin editions of 1998, 2000 and 2007, and Peter Davison's text
 * in The Complete Works of George Orwell (Secker and Warburg, 1997). The 1998
 * and 2007 Penguin printings follow Davison's punctuation wherever the two
 * were compared. Where the editions differ in wording, spelling or
 * punctuation, the phrase was not used. A few extra phrases were checked only
 * in the 1945 and Penguin printings because the search returned no Complete
 * Works page for them: "I am one of the lucky ones" and "But alas! his
 * strength had left him".
 *
 * A second, independent fact-check the same day re-read every quoted phrase
 * against the transcription in context (speaker and chapter), then searched
 * the Open Library scans again for each one. All were found word for word in
 * the scanned printings, including Penguin Books No. 838, the 1946 Harcourt
 * Brace printing and the Complete Works, except Clover's cry in Chapter 9,
 * recorded below.
 *
 * Things the verification turned up, recorded so nobody reintroduces them:
 * - Editions differ in punctuation and spelling. Major's "miserable,
 *   laborious and short" has an Oxford comma in the 1945 and American
 *   printings and none in Davison's text; "realise" is "realize" in some
 *   printings; "Sheepfold" is "Sheep-fold" in 1945. None of those phrases is
 *   annotated or quoted on a card; Major's triplet appears only inside the
 *   printed passage, in the held edition's form.
 * - Clover's cry in Chapter 9 varies between printings. Davison's text, the
 *   first Penguin (No. 838), the 1946 Harcourt Brace printing and most others
 *   read "They are taking you to your death!", but several later printings
 *   and the Gutenberg Australia transcription read "They're". An earlier draft
 *   of this file said every printed edition had "They are"; a second check of
 *   the Open Library scans (26 September 2026) found that false. Only the
 *   words every edition shares, "taking you to your death", are annotated.
 * - The last Commandment and "two legs better" differ in typography between
 *   editions (capitals or italics), not in wording. The Commandment is quoted
 *   in capitals, as every scanned edition prints it. Since the review of 26
 *   September 2026 the other emphasised words, BETTER, WITHOUT CAUSE and TO
 *   EXCESS, are also quoted in capitals, as the held edition prints them.
 * - The final Commandment is printed in capitals with no comma: ALL ANIMALS
 *   ARE EQUAL BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS.
 * - The altered Fourth Commandment is "No animal shall sleep in a bed with
 *   sheets", with no dash. key-quotes/page.tsx prints a dash and analyses it.
 * - Squealer's "Surely, comrades, you do not want Jones back?" is Chapter 5.
 *   His Chapter 3 line is different: "surely there is no one among you who
 *   wants to see Jones come back?"
 * - "The milk and the windfall apples ... should be reserved for the pigs
 *   alone" (Chapter 3) is narration, not Squealer.
 * - "Comrade Napoleon ... is a terrible and magnificent boar" is not in the
 *   novella. "magnificent" does not occur in it at all.
 * - Napoleon and Snowball are first named in Chapter 2, not Chapter 1.
 * - Boxer says "If Comrade Napoleon says it, it must be right" in Chapter 5
 *   and again in Chapter 7. He does not say "Napoleon is always right" in
 *   Chapter 8.
 */
export const guide: StudyGuide = {
  slug: 'animal-farm',
  title: 'Animal Farm',
  author: 'George Orwell',
  form: 'novella',
  scope:
    'The whole novella, all ten chapters, as set for GCSE English Literature by AQA (8702), Pearson Edexcel (1ET0) and OCR (J352). Chapter numbers are the same in every edition but page numbers are not, so this guide locates each moment and each printed passage by chapter and by what happens, not by page.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'George Orwell, Animal Farm, first published by Secker and Warburg, London, in August 1945. Out of copyright in the UK since 1 January 2021. Passages are printed from the Project Gutenberg Australia text.',
  },
  workLength: {
    words: 30000,
    basis:
      'About 30,000 words in ten chapters. The Project Gutenberg Australia transcription, the edition held in src/data/full-texts/animal-farm.ts, counts 30,023 words split on spaces, from the heading of Chapter I to the closing date line, headings included.',
  },

  native: {
    overview: '/revision/texts/animal-farm',
    context: '/revision/texts/animal-farm',
    themes: '/revision/texts/animal-farm',
    characters: '/revision/texts/animal-farm',
    keyQuotes: '/revision/texts/animal-farm',
    structureForm: '/revision/texts/animal-farm',
    examPractice: '/revision/texts/animal-farm',
    modelAnswer: '/revision/texts/animal-farm',
  },

  extracts: [
    {
      title: "Old Major's speech",
      where: 'Chapter 1',
      pointer:
        'Chapter 1, in the big barn at night. The second and third paragraphs of the speech: they begin when Major, having spoken of his coming death, asks what the nature of their life is, and end with his promise that removing Man will abolish hunger and overwork. The speech goes on to the cows, the hens, Clover and Boxer, lays down his rules for after the Rebellion, and ends with his dream and the song.',
      text: passage(
        animalFarmText,
        'section-1',
        'what is the nature of this life of ours',
        'root cause of hunger and overwork',
      ),
      summary:
        "Major tells the animals that their lives are hard, hungry and short, and that this is not nature's fault: the land could feed them all in comfort, but Man takes what they produce. He names a single enemy, Man, and promises that removing him will end hunger and overwork for ever. The paragraphs are the argument on which the whole Rebellion is built.",
      annotations: [
        {
          phrase: 'what is the nature of this life of ours?',
          note: 'A rhetorical question: Major asks it only to answer it himself. The listeners feel they are thinking the problem through with him, when the answer is already decided. “Comrades”, repeated through the speech, is the word for fellow members of a political movement, so the animals are addressed as a movement before one exists.',
        },
        {
          phrase: 'Let us face it',
          note: 'The inclusive “us” places Major among his listeners, and the plain, blunt phrase presents his view as a truth everyone already knows but has avoided. Agreement is invited before any argument has been made.',
        },
        {
          phrase: 'the last atom of our strength',
          note: 'Hyperbole: an atom is the smallest thing there is, so the animals are worked until nothing at all is left. It prepares for Boxer, who is worked in exactly this way, not by Jones but by the pigs.',
        },
        {
          phrase: 'slaughtered with hideous cruelty',
          note: 'The speech climbs from hunger and overwork to violent death. The passive verb names no killer yet, so the animals feel like victims before Major tells them who is to blame: a skilled speaker holding back his answer for effect.',
        },
        {
          phrase: 'No animal in England is free.',
          note: 'Anaphora: “No animal in England” begins two sentences in a row. The repetition gives the speech the rhythm of something meant to be heard aloud, and the short second sentence lands like a verdict.',
        },
        {
          phrase: 'that is the plain truth',
          note: 'Major asserts rather than proves. One reading is that this habit of stating a claim as obvious is exactly what Squealer later copies, using the same confident tone to defend the pigs instead of the animals.',
        },
        {
          phrase: 'a thousand times no',
          note: 'Hyperbole again, and an exclamation, as Major answers his own questions. The emphatic denial turns the speech from complaint to hope: if the misery is not natural, it can be changed.',
        },
        {
          phrase: 'a comfort and a dignity that are now almost beyond our imagining',
          note: 'The vision the Rebellion is fought for. By Chapter 10 the other animals are still hungry, and comfort of this kind is enjoyed only by the pigs, in the farmhouse, so the promise is kept for the few rather than the many.',
        },
        {
          phrase: 'stolen from us by human beings',
          note: 'The heart of the argument: the problem is not that too little is produced but that someone else takes it. In Chapter 10 the farm has grown richer without the animals growing richer, “except, of course, for the pigs and the dogs”, so the taking goes on under new owners.',
        },
        {
          phrase: 'Man is the only real enemy we have.',
          note: 'A single, simple enemy makes rebellion easy to grasp. One reading is that the simplicity is also the danger: the animals are never taught that a tyrant could come from among themselves, and Squealer later keeps them loyal by reminding them of Jones.',
        },
        {
          phrase: 'the root cause of hunger and overwork is abolished for ever',
          note: 'The promise is total, “for ever”, and simple. The rest of the novella tests it: Man is driven out in Chapter 2, yet hunger and overwork return, which suggests that the root cause lay in power itself rather than in one species.',
        },
      ],
      question:
        'Starting with this extract, explore how Orwell presents the ideals behind the Rebellion and how far they are betrayed. Write about the extract and about the novella as a whole.',
    },
    {
      title: 'Snowball is driven out',
      where: 'Chapter 5',
      pointer:
        'Chapter 5, at the Sunday Meeting in the big barn where the windmill is put to the vote. Snowball has just won the animals over, and Napoleon has answered with a “high-pitched whimper”. The passage runs from the dogs bursting in to Napoleon announcing, from Major’s old platform, that the Sunday debates are over.',
      text: passage(
        animalFarmText,
        'section-5',
        'terrible baying sound outside',
        'there would be no more debates',
      ),
      summary:
        'Nine huge dogs rush into the barn and chase Snowball across the pasture until he escapes through a hole in the hedge. They are the puppies Napoleon took away in Chapter 3, and they now stay close to him. Standing where Major once spoke, Napoleon abolishes the Sunday Meetings: a committee of pigs, led by himself, will decide everything in private.',
      annotations: [
        {
          phrase: 'a terrible baying sound',
          note: 'The dogs are heard before they are seen, and baying is the cry of hounds on a hunt. The chase that follows is exactly that: Snowball, a moment ago the most persuasive speaker on the farm, has become the hunted animal.',
        },
        {
          phrase: 'nine enormous dogs wearing brass-studded collars',
          note: 'The studded collars make the dogs look armed, and a collar is also a sign of an owner: these dogs belong to Napoleon. The narrator explains in the next paragraph that they are the puppies he took away, but the reader who remembers Chapter 3 knows first, so the scene exposes a plan Napoleon has been running in secret since the first summer.',
        },
        {
          phrase: 'Too amazed and frightened to speak',
          note: 'The animals fall silent here before anyone has forbidden them to speak. Fear does the regime’s work for it, and silence becomes the farm’s normal state from this chapter on.',
        },
        {
          phrase: 'running as only a pig can run',
          note: 'A flicker of comedy in the middle of terror, as if the narrator cannot resist the picture of a pig sprinting. One reading is that the fable’s light voice makes the violence stranger, because the tone refuses to match the danger.',
        },
        {
          phrase: 'slipped through a hole in the hedge and was seen no more',
          note: 'Snowball leaves the story here and never returns in person; from now on he exists only in what Napoleon and Squealer say about him. The flat phrasing anticipates Chapter 9, where “Boxer was never seen again” is told in the same plain way.',
        },
        {
          phrase: 'they were the puppies whom Napoleon had taken away',
          note: 'The narrator solves the mystery for the animals, but an attentive reader has solved it already. Napoleon planned this while Snowball was drawing windmills, and the dogs are usually read as the secret police that Stalin’s rule depended on.',
        },
        {
          phrase: 'as fierce-looking as wolves',
          note: 'The simile turns farm dogs back into wild predators. Reared in secret and away from their mothers, they have been made into something the farm has never seen, loyal to one master only.',
        },
        {
          phrase: 'they wagged their tails to him',
          note: "The narrator adds that it is the same way the farm's other dogs used to behave to Mr Jones. One reading is that this is the first sign of a pig being treated as the humans were, and it anticipates the final scene, where pig and man cannot be told apart.",
        },
        {
          phrase: 'where Major had previously stood to deliver his speech',
          note: 'Napoleon takes Major’s platform, and with it the founder’s authority. The staging is symbolic: the place where the animals were told that all animals are equal is where one animal now rules alone.',
        },
        {
          phrase: 'They were unnecessary, he said, and wasted time.',
          note: 'Reported speech gives Napoleon’s reasons in their flattest form, with no argument anyone could answer. Democracy is dismissed as an inefficiency, a waste of time rather than a right.',
        },
        {
          phrase: 'presided over by himself',
          note: 'A committee sounds shared, but the four words that close the clause put one pig at its head. The pattern recurs through the novella: a collective name hiding a single ruler.',
        },
        {
          phrase: 'there would be no more debates',
          note: "Reported speech flattens the moment: the end of the farm's democracy arrives in a short clause at the end of a long sentence, as if it were a routine change to the timetable.",
        },
      ],
      question:
        'Starting with this passage, explore how Orwell presents the ways Napoleon takes and keeps power. Write about the passage and about the novella as a whole.',
    },
    {
      title: 'The confessions and executions',
      where: 'Chapter 7',
      pointer:
        'Chapter 7, in the farmyard, four days after Squealer warns that Snowball’s secret agents are hiding on the farm. The dogs have dragged four pigs to Napoleon’s feet and turned on Boxer. The passage begins when “the tumult died down” and runs to the pile of corpses at Napoleon’s feet.',
      text: passage(
        animalFarmText,
        'section-7',
        'Presently the tumult died down',
        'smell of blood, which had been unknown',
      ),
      summary:
        'The four pigs who protested when the Sunday Meetings were abolished confess to plotting with Snowball, and the dogs kill them at once. Napoleon asks whether anyone else has anything to confess. The hens who led the egg protest, a goose and several sheep come forward with confessions, some of them absurd, and every one of them is killed on the spot, until the yard smells of blood for the first time since Jones was driven out.',
      annotations: [
        {
          phrase: 'with guilt written on every line of their countenances',
          note: 'The narrator presents guilt as something that can be read on a face, as the watching animals would read it. Whether the pigs look guilty or simply terrified, the reader cannot tell, and that uncertainty is the point: at a show trial, fear and guilt look the same.',
        },
        {
          phrase: 'They were the same four pigs as had protested',
          note: 'One plain sentence reveals the real offence. In Chapter 5 these four objected when Napoleon abolished the Meetings, so the confession is punishment for speaking out, dressed up as a trial for treason.',
        },
        {
          phrase: 'Without any further prompting',
          note: 'No one is seen forcing the words out: the confessions arrive ready-made. The phrase leaves the reader to wonder what happened before this public scene, which the narrator never tells.',
        },
        {
          phrase: "Jones's secret agent",
          note: 'The prisoners confess to the very story Squealer told the animals four days earlier, that Snowball was Jones’s agent from the start. Their confession does not reveal a plot; it confirms the regime’s own version of history.',
        },
        {
          phrase: 'the dogs promptly tore their throats out',
          note: 'The adverb is shockingly brisk, as if an execution were a routine task done on time. Orwell’s plain style refuses to dramatise the killing, and the lack of emphasis makes it more horrifying, not less.',
        },
        {
          phrase: 'whether any other animal had anything to confess',
          note: 'Napoleon’s question is an invitation and a threat at once. That others step forward at all shows how far fear has spread: one reading is that confessing may now seem safer than waiting to be accused.',
        },
        {
          phrase: 'appeared to them in a dream',
          note: 'The charges grow absurd, and a dream is offered as evidence. The dark comedy is deliberate: the more ridiculous the crimes, the more monstrous it is that animals die for them.',
        },
        {
          phrase: 'secreted six ears of corn',
          note: 'A tiny offence, six ears of corn hidden at the previous year’s harvest and eaten in the night, is punished by death. The goose’s crime exposes a regime that treats any private act as an attack on itself.',
        },
        {
          phrase: 'an especially devoted follower of Napoleon',
          note: 'Even the victims are sorted by their loyalty to the Leader. The charge makes Napoleon the injured party, so the killings can be presented as the defence of those who love him.',
        },
        {
          phrase: 'They were all slain on the spot.',
          note: 'A short sentence of summary judgement: no trial, no defence, no pause. “Slain” is an old, formal verb from epic and scripture, and its grandeur sits grimly beside the farmyard crimes it punishes.',
        },
        {
          phrase: 'the tale of confessions and executions',
          note: 'Confession and execution come as a matched pair, one leading straight to the other. This is one of the novella’s most direct allusions to history: the scene is usually read as Stalin’s purges and the Moscow show trials of the late 1930s.',
        },
        {
          phrase: 'the smell of blood, which had been unknown there since the expulsion of Jones',
          note: 'The paragraph ends by linking Napoleon with Jones. The Rebellion was meant to end killing on the farm, and now it has brought killing back; the comparison is made through the senses, not argued, which makes it harder to escape.',
        },
      ],
      question:
        'Starting with this passage, explore how Orwell presents fear and violence as tools of power. Write about the passage and about the novella as a whole.',
    },
    {
      title: 'Boxer is taken away',
      where: 'Chapter 9',
      pointer:
        'Chapter 9. The animals are weeding turnips when Benjamin gallops up shouting that Boxer is being taken away, and they find a closed van in the yard. The passage begins as they fall silent and Benjamin reads the lettering on its side, and ends with the short sentence “Boxer was never seen again.” The next paragraph moves on three days, to the announcement of his death.',
      text: passage(
        animalFarmText,
        'section-9',
        'That gave the animals pause',
        'Boxer was never seen again',
      ),
      summary:
        "Benjamin pushes Muriel aside and reads the van's lettering aloud: it belongs to a horse slaughterer. As the van drives off, Clover runs after it shouting a warning. Boxer's face appears at the back window and he tries to kick his way out, but he is too weak. The animals beg the horses pulling the van to stop, but they do not understand, and the van is gone.",
      annotations: [
        {
          phrase: 'in the midst of a deadly silence he read',
          note: 'Reading is power on this farm. Muriel is still spelling out the words when Benjamin pushes her aside, and the adjective “deadly” tells the reader what the lettering means before he reads it.',
        },
        {
          phrase: 'Horse Slaughterer and Glue Boiler',
          note: 'The trade sign names Boxer’s fate in the flat language of a business. It is the end Major foretold in Chapter 1, when he warned that “Jones will sell you to the knacker”, carried out not by Jones but by the pigs.',
        },
        {
          phrase: 'Do you not understand what that means?',
          note: 'Benjamin’s question is aimed at every animal who could not, or would not, read the signs. One reading is that it is the question the whole novella asks its own reader.',
        },
        {
          phrase: 'achieved a canter',
          note: 'The anticlimax is painful: Clover tries for a gallop and manages only a canter, the best an old, heavy mare can do. Her body fails her just as Boxer’s has failed him.',
        },
        {
          phrase: 'with the white stripe down his nose',
          note: 'The detail recalls Chapter 1, where the same stripe gave Boxer “a somewhat stupid appearance”. Here it makes his face instantly his own, the last sight the animals have of him.',
        },
        {
          phrase: 'taking you to your death',
          note: "Clover's warning to Boxer is one of the plainest truths any animal speaks aloud in the novella, in short words with nothing softened. It comes from love rather than politics, and it comes too late to change anything.",
        },
        {
          phrase: 'a tremendous drumming of hoofs',
          note: 'Sound imagery: the animals cannot see Boxer now, only hear him. The drumming fades within the same paragraph, so the reader hears his strength die away rather than being told of it.',
        },
        {
          phrase: 'But alas! his strength had left him',
          note: 'The narrator almost never shows feeling, so the old-fashioned lament “alas” stands out. The strength the pigs have used up for years was the foundation of the whole farm, and now it is gone when Boxer needs it for himself.',
        },
        {
          phrase: "Don't take your own brother to his death!",
          note: 'The animals appeal to the van horses as comrades and brothers, in the language Major taught them. The words that once began a revolution now fail to reach animals who have never heard them.',
        },
        {
          phrase: 'the stupid brutes',
          note: "The van horses do not understand the animals' appeal to them as comrades. One reading is that the harsh phrase turns back on the farm animals too, who have failed for years to understand what was being done to them.",
        },
        {
          phrase: 'Too late, someone thought of racing ahead',
          note: 'The sentence opens with “Too late”, two words that could sum up the animals’ whole history under Napoleon: every realisation comes after the moment it could have mattered.',
        },
        {
          phrase: 'Boxer was never seen again.',
          note: "A flat, five-word sentence with no comment and no funeral. The silence is filled three days later by Squealer's account of Boxer dying in hospital, well cared for and happy, which everything the animals have just seen contradicts, so the passage ends with the truth about to be replaced.",
        },
      ],
      question:
        'Starting with this passage, explore how Orwell presents the treatment of Boxer and the other working animals. Write about the passage and about the novella as a whole.',
    },
    {
      title: 'Pig and man',
      where: 'Chapter 10',
      pointer:
        'Chapter 10, the last scene. The pigs are entertaining neighbouring farmers in the farmhouse, and the animals have crept into the garden to watch through the dining-room window. The passage begins as Napoleon, replying to Mr Pilkington’s speech, announces that the farm will take back its old name, and runs to the last words of the novella.',
      text: passage(
        animalFarmText,
        'section-10',
        'He had only one criticism',
        'impossible to say which was which',
      ),
      summary:
        'Napoleon announces that the name Animal Farm has been abolished and the farm will be The Manor Farm again, and proposes a toast to it. Watching through the window, Clover sees something strange happening to the faces of the pigs. The animals creep away, but a violent quarrel over the card game brings them back, and when they look from the pigs to the men they can no longer tell which is which.',
      annotations: [
        {
          phrase: 'excellent and neighbourly speech',
          note: 'Napoleon speaks the polite language of diplomacy to a human neighbour. The farm whose pigeons once carried the slogan “Death to Humanity” is now led by a pig who compliments a farmer on his manners.',
        },
        {
          phrase: 'its correct and original name',
          note: 'The renaming completes the circle: the farm ends where it began, as the Manor Farm. Calling the old name correct erases the Rebellion from the farm’s official history, as the Commandments were erased from its wall.',
        },
        {
          phrase: 'To the prosperity of The Manor Farm!',
          note: 'Napoleon repeats Pilkington’s toast with one change, just as the sheep’s slogan changed by one word. Small alterations in wording have marked every step of the revolution’s betrayal, and this is the last.',
        },
        {
          phrase: 'the mugs were emptied to the dregs',
          note: 'The pigs drink beer with men, breaking Major’s rule and the Fifth Commandment as first painted. One reading is that drinking to the dregs mocks the altered Commandment, which forbade drinking only “TO EXCESS”.',
        },
        {
          phrase: "Clover's old dim eyes",
          note: 'The final vision is seen through Clover, whose sight is failing and who never learned to read. Yet she sees the truth more clearly than any written record on the farm could show it.',
        },
        {
          phrase: 'Some of them had five chins, some had four, some had three.',
          note: 'The countdown is comic and grotesque at once. The chins are the visible record of who has eaten the farm’s produce, and they make the pigs look like the well-fed farmers sitting beside them.',
        },
        {
          phrase: 'melting and changing',
          note: 'The verbs describe a transformation, as in a fairy story, and Orwell subtitled the book A Fairy Story. This is its dark version of the fairy-tale change: not a beast becoming a prince, but a pig becoming a man.',
        },
        {
          phrase: 'each played an ace of spades simultaneously',
          note: 'Two aces of spades cannot come from one honest pack, so at least one of the two players is cheating, and the new allies fall out at once. Orwell said he meant the book to end on a “loud note of discord”, and the ending is often linked to the Tehran Conference of 1943, where Stalin met Roosevelt and Churchill.',
        },
        {
          phrase: 'they were all alike',
          note: 'The voices can no longer be told apart even before the faces can. Sound merges first and sight follows, so the reader reaches the final verdict one sense at a time.',
        },
        {
          phrase: 'from pig to man, and from man to pig, and from pig to man again',
          note: 'Repetition with reversal mimics the animals’ eyes moving back and forth, searching for a difference that is not there. The rhythm slows the last sentence down before its verdict.',
        },
        {
          phrase: 'it was impossible to say which was which',
          note: 'The last words of the novella. The new masters are indistinguishable from the old, and “impossible” makes the verdict absolute: the revolution has come full circle.',
        },
      ],
      question:
        'Starting with this passage, explore how Orwell presents the relationship between the pigs and the humans. Write about the passage and about the novella as a whole.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Fable form and a plain narrative voice',
      example:
        'The first sentence: Mr Jones has locked the hen-houses but is “too drunk to remember to shut the pop-holes” (Chapter 1). Orwell subtitled the book A Fairy Story.',
      effect:
        'The simple sentences and farmyard details sound like a story for children, so the reader relaxes. The political shock works because it arrives in the same calm voice: executions and hunger are told in the tone of a fable, which makes them harder to excuse, not easier. Opening on a drunken, careless owner also suggests that the old order deserved to fall, so the novella is not a defence of Jones.',
    },
    {
      technique: 'Understatement and the naive narrator',
      example:
        '“The mystery of where the milk went to was soon cleared up.” (Chapter 3). In Chapter 8, the ladder, the paint and Squealer on the ground are “a strange incident which hardly anyone was able to understand”.',
      effect:
        'The narrator often reports events as the ordinary animals see them and leaves the reader to draw the conclusion they cannot. This creates dramatic irony: we know exactly who took the milk and who has been repainting the Commandments. The reader is made to do the thinking the animals are no longer allowed to do.',
    },
    {
      technique: "Squealer's rhetoric: false authority and rhetorical questions",
      example:
        "Milk and apples are good for pigs, he claims, “this has been proved by Science, comrades” (Chapter 3). After Snowball's expulsion he asks, “Surely, comrades, you do not want Jones back?” (Chapter 5).",
      effect:
        'Squealer rarely answers a complaint directly. He borrows the authority of Science, which the animals cannot check, and asks questions that allow only one answer. The repeated “comrades” flatters his audience as equals while he tells them what to think. Orwell shows propaganda working not by proving anything but by making disagreement feel like disloyalty.',
    },
    {
      technique: 'Euphemism and redefinition',
      example:
        '“A bed merely means a place to sleep in.” (Squealer, Chapter 6). When rations are cut, Squealer calls it a “readjustment”, never a “reduction” (Chapter 9).',
      effect:
        "If a word can be redefined, a rule can be broken without appearing to break it. Here the pigs do not deny the facts; they change what the words mean. This is the novella's most modern warning: power that controls vocabulary controls what people are able to object to.",
    },
    {
      technique: 'Slogans and repetition',
      example:
        '“Four legs good, two legs bad.” (Chapter 3) becomes “Four legs good, two legs BETTER!” (Chapter 10).',
      effect:
        "The slogan begins as Snowball's shortcut for animals who cannot learn the Commandments, and the sheep repeat it for hours. Because they never understood it, it can be reversed by changing one word, and they bleat the new version just as happily. Repetition replaces thought, and the single changed word marks the whole distance the revolution has travelled.",
    },
    {
      technique: 'Irony through small additions: the altered Commandments',
      example:
        'Beds are now forbidden only “with sheets” (Chapter 6), killing only “WITHOUT CAUSE” and drinking only “TO EXCESS” (both Chapter 8).',
      effect:
        'Each change is two words long, and each opens a loophole in a ban. The additions look reasonable, which is the point: tyranny arrives by small amendments that are easy to accept one at a time. Because the animals trust the wall more than their own memories, whoever holds the paintbrush controls the past.',
    },
    {
      technique: 'Paradox',
      example:
        'The single Commandment left on the barn wall, printed in capitals: “SOME ANIMALS ARE MORE EQUAL THAN OTHERS” (Chapter 10).',
      effect:
        "Equality cannot have degrees, so the sentence contradicts itself. Orwell's point is that it does not need to make sense, only to go unchallenged. It also keeps the old principle, all animals are equal, and empties it from the inside, which is how the regime has treated every ideal Major gave the animals.",
    },
    {
      technique: 'Satirical titles and the cult of personality',
      example:
        'The pigs invent titles for Napoleon such as “Father of All Animals, Terror of Mankind” (Chapter 8).',
      effect:
        "The grand titles are comic in the mouth of a farm pig, and the comedy is the satire: Orwell deflates the language of the personality cult by showing how absurd it sounds. In the same chapter the animals give Napoleon the credit for every success, down to a hen's eggs and the taste of the drinking water, so praise has become a duty rather than a judgement.",
    },
    {
      technique: 'The ironic aside',
      example:
        'The farm has grown richer without the animals growing richer, “except, of course, for the pigs and the dogs” (Chapter 10).',
      effect:
        "The casual phrase “of course” pretends that the exception is obvious and unremarkable, which is exactly how the regime has taught the animals to see it. The narrator's dry tone lets the reader feel the injustice without being told to.",
    },
    {
      technique: 'Free indirect style and the conditional',
      example:
        'After the executions Clover looks down at the farm: “If she could have spoken her thoughts”, and then “These scenes of terror and slaughter” were not what the animals had hoped for (Chapter 7).',
      effect:
        'The narrator puts into words what Clover feels but cannot say, so the reader hears her thoughts in her own simple terms. The conditional “could have” stresses the tragedy: arguably the animal with the clearest moral sense lacks the words to challenge anyone, and she resolves to stay loyal even as she knows this is not what they worked for. Many readers find this the emotional centre of the book.',
    },
    {
      technique: 'Scapegoating through a single, loud accusation',
      example:
        'Standing at the ruins of the windmill, Napoleon roars “Snowball has done this thing!” (Chapter 6).',
      effect:
        'The windmill falls on the night of a violent November gale, and the neighbouring farmers later say its walls were too thin, but Napoleon offers an enemy instead of an explanation. An absent enemy is useful because he can never answer back, and from this point Snowball is blamed for every failure. The exclamation gives the claim force in place of evidence.',
    },
    {
      technique: 'Names as characterisation',
      example:
        'Napoleon shares his name with the general who seized power in France after its revolution and made himself emperor. Squealer is a small, fat pig with a shrill voice. The farm moves from Manor Farm to Animal Farm and back to The Manor Farm (Chapters 2 and 10).',
      effect:
        "The names do some of the allegory's work before a character acts. Napoleon's name tells the reader to expect a revolution that ends in one ruler, and Squealer's suggests noise rather than truth. The farm's return to its old name in the last chapter is the circular structure made visible in a single word.",
    },
  ],

  vocabulary: [
    {
      term: 'Allegory',
      definition:
        "A story in which characters and events stand for something beyond themselves. Animal Farm is usually read as an allegory of the Russian Revolution and Stalin's rule, with Napoleon as Stalin and Snowball as Trotsky. It also works as a general warning about how any revolution can be betrayed.",
    },
    {
      term: 'Fable',
      definition:
        'A short story, often with animal characters, that teaches a moral. Orwell subtitled Animal Farm A Fairy Story, and the fable form lets him make a political argument in terms anyone can follow.',
    },
    {
      term: 'Satire',
      definition:
        'Writing that uses humour, irony and exaggeration to expose foolishness or wrongdoing. Orwell satirises propaganda, personality cults and the people who excuse tyranny.',
    },
    {
      term: 'Animalism',
      definition:
        "The name the pigs give, in Chapter 2, to the system of thought they build from Old Major's teaching. In the allegory it stands for communism as a set of ideals.",
    },
    {
      term: 'The Seven Commandments',
      definition:
        'The rules of Animalism, painted on the barn wall in Chapter 2. They are quietly altered over the novella until, in Chapter 10, only one amended Commandment is left.',
    },
    {
      term: 'Beasts of England',
      definition:
        'The revolutionary song Old Major teaches the animals in Chapter 1. It is banned in Chapter 7, after the executions, and replaced by a song in praise of the farm written by the pig Minimus.',
    },
    {
      term: 'Comrade',
      definition:
        'A fellow member of a political movement, used as a form of address by communists. Every animal is a comrade after the Rebellion; in Chapter 10 Napoleon announces that the custom of calling one another comrade will be suppressed.',
    },
    {
      term: 'Propaganda',
      definition:
        "Information, often false or one-sided, spread to make people support a cause or a ruler. Squealer is the farm's propaganda: the others say he could turn black into white.",
    },
    {
      term: 'Totalitarian',
      definition:
        'Describes a state in which one ruler or party controls every part of life, including work, speech, history and belief, and allows no opposition. By Chapter 7 Animal Farm is a totalitarian state in miniature.',
    },
    {
      term: 'Cult of personality',
      definition:
        "The use of propaganda to present a leader as heroic, wise and almost superhuman. Napoleon's titles, his medals and the poem Minimus writes in his honour in Chapter 8 are a satire of the cult built around Stalin.",
    },
    {
      term: 'Purge and show trial',
      definition:
        "A purge is the removal of people a regime considers disloyal, often by killing them. A show trial is a public trial whose verdict is decided in advance, with forced confessions. The confessions and executions in Chapter 7 are usually read as Stalin's Great Purge of 1936 to 1938 and the Moscow show trials.",
    },
    {
      term: 'Scapegoat',
      definition:
        'Someone blamed for things that are not their fault, so that the real cause is hidden. After his expulsion, Snowball is blamed for the fallen windmill and for every later failure on the farm.',
    },
    {
      term: 'Euphemism',
      definition:
        "A mild word used in place of a harsh one. Squealer speaks of a readjustment of rations rather than a reduction, and Boxer's journey is presented as a trip to hospital.",
    },
    {
      term: 'Proletariat',
      definition:
        'In Marxist thought, the working class, who own nothing but their labour. Boxer and Clover, the hard-working cart-horses, are often read as the proletariat.',
    },
    {
      term: 'Knacker',
      definition:
        'Someone who buys old or worn-out horses to slaughter them for their meat, hides and bones. Old Major warns Boxer of the knacker in Chapter 1, and the van that takes Boxer away in Chapter 9 carries a horse slaughterer’s name.',
    },
    {
      term: 'Sugarcandy Mountain',
      definition:
        'The paradise in the sky that Moses the raven says animals go to when they die. It is usually read as a satire of organised religion: the pigs call it a lie, yet when Moses returns in Chapter 9 they let him stay without working and give him beer.',
    },
    {
      term: 'Windfall',
      definition:
        'Fruit blown off a tree by the wind. The windfall apples are one of the first privileges the pigs keep for themselves, in Chapter 3.',
    },
    {
      term: 'Pop-holes',
      definition:
        'Small openings in a henhouse that let the hens go in and out. Mr Jones is too drunk to shut them in the first sentence of the novella.',
    },
    {
      term: 'Spontaneous Demonstration',
      definition:
        "A weekly march Napoleon orders in Chapter 9 to celebrate the farm's triumphs. The name is ironic, because nothing ordered by a ruler can be spontaneous.",
    },
    {
      term: 'Five-Year Plan',
      definition:
        "Stalin's programmes for the rapid industrialisation of the Soviet Union, the first running from 1928 to 1932. The windmill, built at huge cost in labour and hunger, is usually read as a symbol of them.",
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the reader understands more than the characters do. Much of the novella runs on it: the reader sees who takes the milk and who repaints the Commandments while the animals do not.',
    },
    {
      term: 'Maxim',
      definition:
        'A short saying that states a rule or principle. Snowball reduces the Seven Commandments to a single maxim in Chapter 3, and in Chapter 5 Boxer adopts a second maxim of his own, that Napoleon is always right.',
    },
    {
      term: 'Rhetorical question',
      definition:
        'A question asked for persuasive effect rather than for an answer. Old Major opens his argument with one in Chapter 1, and Squealer ends his speeches with them, usually asking whether the animals want Jones back.',
    },
    {
      term: 'Anaphora',
      definition:
        'The repetition of a word or phrase at the start of successive sentences or clauses, for emphasis. In Chapter 1 Old Major begins two sentences in a row with “No animal in England”.',
    },
    {
      term: 'Hyperbole',
      definition:
        "Deliberate exaggeration for effect. Old Major's “a thousand times no” in Chapter 1 is hyperbole used to inspire; Squealer's figures in Chapter 8, with production up by hundreds of per cent, are exaggeration used to deceive.",
    },
    {
      term: 'Tyrannise',
      definition:
        'To rule over others cruelly and unjustly. In Chapter 1 Old Major warns that no animal must ever tyrannise over his own kind, which is exactly what the pigs go on to do.',
    },
    {
      term: 'Knoll',
      definition:
        'A small rounded hill. The knoll in the long pasture is where the windmill is built, and where the animals huddle round Clover after the executions in Chapter 7.',
    },
    {
      term: 'Mangel-wurzel',
      definition:
        'A kind of beet grown mainly as cattle feed, often shortened to mangel. In the hungry winter of Chapter 7 the animals have nothing to eat but chaff and mangels for days at a time.',
    },
    {
      term: 'Porker',
      definition:
        'A young pig being fattened to be killed for meat. Old Major warns the young porkers in Chapter 1 that they will die at the block within a year, and it is four young porkers who protest in Chapter 5.',
    },
    {
      term: 'Coccidiosis',
      definition:
        'A disease of the gut caused by tiny parasites, which can kill young or weak animals. In Chapter 7 it is the official explanation given for the deaths of the nine hens, who were in fact starved.',
    },
    {
      term: 'Capitulate',
      definition:
        'To surrender and stop resisting. After five days without food, the hens capitulate in Chapter 7 and go back to their nesting boxes.',
    },
    {
      term: 'Retribution',
      definition:
        'Punishment given out of outrage or revenge. After the executions in Chapter 7 the animals cannot decide which is more shocking, the treachery they have been told of or the cruel retribution they have just seen.',
    },
    {
      term: 'Superannuated',
      definition:
        'Retired or put aside because of age. In Chapter 9 it is rumoured that a corner of the large pasture will be fenced off for superannuated animals, but by Chapter 10 the talk has long been dropped and no animal has ever actually retired.',
    },
    {
      term: 'Intermediary',
      definition:
        'A go-between who deals with two sides on behalf of one or both. In Chapter 6 Mr Whymper, a solicitor, becomes the intermediary between Animal Farm and the outside world.',
    },
    {
      term: 'Bon mot',
      definition:
        "A clever or witty remark. In Chapter 10 Mr Pilkington's joke comparing the pigs' lower animals with his own lower classes is called a bon mot, and it sets the table laughing.",
    },
    {
      term: 'Frugal',
      definition:
        'Careful with money and food, avoiding waste. In Chapter 10 Napoleon teaches that the truest happiness lies in working hard and living frugally, while the pigs live in comfort in the farmhouse.',
    },
  ],

  timeline: [
    {
      where: 'Chapter 1',
      title: "Old Major's speech",
      summary:
        'Once Mr Jones has gone to bed drunk, the animals gather in the big barn to hear Old Major, the prize boar. He tells them that their lives are miserable and short because Man takes almost everything they produce, and he calls for Rebellion.',
      setting: 'The big barn at night, Manor Farm',
      who: ['Old Major', 'Mr Jones', 'Boxer', 'Clover', 'Benjamin', 'Mollie'],
      quote: 'Man is the only real enemy we have.',
      themes: ['Revolution and Betrayal', 'Class and Labour'],
      tension: 2,
      significance:
        'A single enemy makes rebellion easy to grasp, but it leaves the animals with no warning that a tyrant could come from among themselves.',
    },
    {
      where: 'Chapter 1',
      title: "Major's warnings",
      summary:
        'Major reminds the cows, the hens and Clover what has been taken from them. Admitting that he himself is “one of the lucky ones”, he warns the young pigs of the knife and Boxer of the knacker, then lays down rules: never live, dress, drink or trade like Man, and never tyrannise over one another.',
      setting: 'The big barn at night, Manor Farm',
      who: ['Old Major', 'Boxer', 'Clover'],
      quote: 'we must not come to resemble him',
      themes: ['Revolution and Betrayal', 'Power and Corruption'],
      tension: 3,
      significance:
        'By Chapter 10 the pigs have taken up every habit of Man that Major lists, and his warning to Boxer comes true in Chapter 9, with the pigs, not Jones, sending him away.',
    },
    {
      where: 'Chapter 1',
      title: 'Beasts of England',
      summary:
        'Major sings the song that came back to him in his dream, and within minutes the whole farm is singing it. They sing it five times through, until the noise wakes Mr Jones, who fires his gun into the dark and the meeting breaks up.',
      setting: 'The big barn, then the dark farmyard',
      who: ['Old Major', 'Mr Jones'],
      quote: 'The singing of this song threw the animals into the wildest excitement.',
      themes: ['Revolution and Betrayal', 'Language and Propaganda'],
      tension: 3,
      significance:
        'The song carries the hopes of the Rebellion, which is why banning it in Chapter 7 marks the moment those hopes are officially declared finished.',
    },
    {
      where: 'Chapter 2',
      title: 'Animalism',
      summary:
        "Old Major dies, and for three months the pigs, the cleverest animals, teach in secret. Snowball, Napoleon and the persuasive Squealer turn Major's ideas into a system they call Animalism, while Mollie worries about sugar and ribbons and Moses the raven tells tales of Sugarcandy Mountain.",
      setting: 'Secret night meetings in the big barn, March to June',
      who: ['Snowball', 'Napoleon', 'Squealer', 'Mollie', 'Moses', 'Boxer', 'Clover'],
      quote: 'The others said of Squealer that he could turn black into white.',
      themes: ['Language and Propaganda', 'Education and Ignorance'],
      tension: 2,
      significance:
        'The pigs lead because they are clever and the others follow because they are not: the division that shapes the whole novella exists before the Rebellion begins.',
    },
    {
      where: 'Chapter 2',
      title: 'The Rebellion',
      summary:
        'On Midsummer’s Eve Mr Jones gets drunk in Willingdon and the animals are left unfed. When a cow breaks into the store-shed and Jones and his men arrive with whips, the animals turn on them together and chase them off the farm.',
      setting: 'The store-shed, the yard and the cart-track to the road',
      who: ['Mr Jones', 'Moses'],
      quote: 'Jones was expelled, and the Manor Farm was theirs.',
      themes: ['Revolution and Betrayal', 'Class and Labour'],
      tension: 4,
      significance:
        'The Rebellion is unplanned and driven by hunger rather than ideas, and it comes “much earlier and more easily” than anyone had expected.',
    },
    {
      where: 'Chapter 2',
      title: 'The Seven Commandments and the milk',
      summary:
        'Next morning the animals tour their farm, keep the farmhouse as a museum and paint a new name on the gate. Snowball writes the Seven Commandments on the barn wall. When the cows need milking, Napoleon sends the others off to the harvest, and by evening the milk has gone.',
      setting: 'The farmhouse, the five-barred gate and the end wall of the big barn',
      who: ['Snowball', 'Napoleon', 'Squealer', 'Mollie', 'Boxer'],
      quote: 'it was noticed that the milk had disappeared.',
      themes: ['Power and Corruption', 'Language and Propaganda'],
      tension: 3,
      significance:
        'The Commandments are meant to be “an unalterable law”, and the missing milk is the first sign of who will benefit from the Rebellion.',
    },
    {
      where: 'Chapter 3',
      title: 'The first harvest',
      summary:
        'The animals bring in the biggest harvest the farm has ever seen, in two days less than it usually took Jones and his men. The pigs direct rather than work. Boxer seems to do the work of three horses and takes a personal motto, and Benjamin says only that donkeys live a long time.',
      setting: 'The hayfield in summer',
      who: ['Boxer', 'Clover', 'Benjamin', 'Mollie'],
      quote: 'The pigs did not actually work, but directed and supervised the others.',
      themes: ['Class and Labour', 'Power and Corruption'],
      tension: 1,
      significance:
        'The happiest time on the farm already has two classes in it: the pigs who direct, and everyone else who works.',
    },
    {
      where: 'Chapter 3',
      title: 'Reading and the maxim',
      summary:
        'At the Sunday Meetings Snowball and Napoleon always disagree. Snowball’s committees fail, but his reading classes succeed after a fashion: by autumn almost every animal is “literate in some degree”, though most get no further than the letter A. Because the stupider animals cannot learn the Seven Commandments, Snowball reduces them to a single maxim, and the sheep bleat it for hours.',
      setting: 'The big barn and the harness-room',
      who: ['Snowball', 'Napoleon', 'Boxer', 'Clover', 'Benjamin', 'Muriel', 'The sheep'],
      quote: 'Boxer could not get beyond the letter D.',
      themes: ['Education and Ignorance', 'Language and Propaganda'],
      tension: 1,
      significance:
        'Animals who cannot read must trust those who can, which is what later lets the Commandments be changed without anyone being able to prove it.',
    },
    {
      where: 'Chapter 3',
      title: 'The milk and the apples',
      summary:
        'As soon as nine puppies are weaned, Napoleon takes them from their mothers to educate them himself, and the farm soon forgets them. The milk and the windfall apples are kept for the pigs, and Squealer explains that brainworkers need them and that otherwise Jones would come back.',
      setting: 'The orchard and the harness-room',
      who: ['Napoleon', 'Squealer', 'Snowball', 'The dogs'],
      quote: 'We pigs are brainworkers.',
      themes: ['Class and Labour', 'Power and Corruption', 'Language and Propaganda'],
      tension: 2,
      significance:
        "In a letter to Dwight Macdonald, Orwell called the pigs' taking of the milk and apples the turning point of the story, and the puppies taken away here return in Chapter 5 as Napoleon's dogs.",
    },
    {
      where: 'Chapter 4',
      title: 'The news spreads',
      summary:
        'Pigeons carry the story of the Rebellion and the tune of Beasts of England to other farms. The neighbouring farmers, Pilkington of Foxwood and Frederick of Pinchfield, dislike each other but both spread stories of horrors on the farm, while animals across the county grow rebellious.',
      setting: 'The Red Lion at Willingdon and the neighbouring farms',
      who: ['Mr Jones', 'Mr Pilkington', 'Mr Frederick'],
      quote: 'And yet the song was irrepressible.',
      themes: ['Revolution and Betrayal', 'Language and Propaganda'],
      tension: 2,
      significance:
        'Writers have linked this wave of rebelliousness to the failed revolutions in Hungary and Germany, and the rivalry between Pilkington and Frederick shapes the rest of the book.',
    },
    {
      where: 'Chapter 4',
      title: 'The Battle of the Cowshed',
      summary:
        "In October Jones and his men, with others from the neighbouring farms of Foxwood and Pinchfield, try to retake the farm. Snowball's ambush wins the battle, and he and Boxer are decorated as Animal Heroes. Boxer grieves, believing he has killed a stable-lad, who was in fact only stunned.",
      setting: 'The farmyard and the cowshed in October',
      who: ['Snowball', 'Boxer', 'Mr Jones', 'Mollie'],
      quote: 'I have no wish to take life, not even human life',
      themes: ['Revolution and Betrayal', 'Loyalty and Betrayal'],
      tension: 4,
      significance:
        "Snowball's courage here is the history Squealer later rewrites, so it matters exactly what this chapter shows.",
    },
    {
      where: 'Chapter 5',
      title: 'Mollie leaves',
      summary:
        "Clover believes she saw one of Mr Pilkington's men stroking Mollie's nose, and finds sugar and ribbons hidden in Mollie's stall. Three days later Mollie disappears, and the pigeons report seeing her between the shafts of a smart dogcart outside a public-house, wearing a scarlet ribbon.",
      setting: "The yard, Mollie's stall and a public-house beyond Willingdon",
      who: ['Mollie', 'Clover'],
      quote: 'None of the animals ever mentioned Mollie again.',
      themes: ['Loyalty and Betrayal', 'Class and Labour'],
      tension: 2,
      significance:
        'Mollie chooses comfort over freedom, and the silence that follows is the first time an animal is simply dropped from the farm’s story.',
    },
    {
      where: 'Chapter 5',
      title: 'The windmill plans',
      summary:
        'Snowball and Napoleon disagree about everything, and most of all about Snowball’s plan for a windmill to make electricity. Snowball covers the floor of the incubator shed with drawings, Napoleon urinates on them, and the farm splits into two factions with rival slogans.',
      setting: 'The incubator shed and the knoll in the long pasture',
      who: ['Snowball', 'Napoleon', 'Benjamin'],
      quote: 'Windmill or no windmill, he said, life would go on as it had always gone on',
      themes: ['Power and Corruption', 'Class and Labour'],
      tension: 3,
      significance:
        'The windmill becomes the farm’s great project and its great burden, and Napoleon’s contempt for the plans is worth remembering when Squealer claims them for him later in the same chapter.',
    },
    {
      where: 'Chapter 5',
      title: 'Snowball is driven out',
      summary:
        "At the Sunday Meeting Snowball's speech for the windmill wins the animals over. As the vote is about to go his way, Napoleon gives a signal, and nine huge dogs, the puppies he took away, chase Snowball off the farm. Napoleon then abolishes the Sunday debates.",
      setting: 'The big barn during a Sunday Meeting',
      who: ['Snowball', 'Napoleon', 'The dogs', 'The sheep'],
      quote: 'uttered a high-pitched whimper of a kind no one had ever heard him utter before',
      themes: ['Power and Corruption', 'Revolution and Betrayal'],
      tension: 5,
      significance:
        'Argument loses to force in a single scene: Napoleon speaks for “barely thirty seconds” because he has the dogs waiting outside, and the farm’s short-lived democracy is over.',
    },
    {
      where: 'Chapter 5',
      title: 'Napoleon is always right',
      summary:
        'Squealer tells the animals that Napoleon has taken on leadership as a sacrifice and warns that one false step could bring Jones back. Boxer accepts it and adopts a second maxim. On the third Sunday after the expulsion Napoleon announces that the windmill will be built after all, and Squealer calls his earlier opposition tactics.',
      setting: 'The farmyard and the big barn',
      who: ['Squealer', 'Boxer', 'Napoleon'],
      quote: 'If Comrade Napoleon says it, it must be right.',
      themes: ['Language and Propaganda', 'Loyalty and Betrayal'],
      tension: 3,
      significance:
        'Propaganda finishes what the dogs began: the animals now silence their own doubts.',
    },
    {
      where: 'Chapter 6',
      title: 'Working like slaves',
      summary:
        'The animals work a sixty-hour week, then Sunday afternoons as well, which are voluntary but cost any absentee half his rations. They break stone by dragging boulders up the quarry and toppling them over the edge, and Boxer does more than anyone, rising earlier still.',
      setting: 'The quarry and the windmill site on the knoll',
      who: ['Boxer', 'Clover', 'Muriel', 'Benjamin'],
      quote: 'All that year the animals worked like slaves.',
      themes: ['Class and Labour'],
      tension: 2,
      significance:
        'The next sentence says “they were happy in their work”, and the gap between the two sentences is the chapter’s irony.',
    },
    {
      where: 'Chapter 6',
      title: 'Trade and the farmhouse beds',
      summary:
        'Napoleon announces that the farm will trade with its neighbours through a solicitor, Mr Whymper, though the animals think they remember resolving never to use money. The pigs move into the farmhouse and sleep in beds, and when Muriel reads the Fourth Commandment to Clover it forbids beds only with sheets.',
      setting: 'The big barn, the farmhouse and the end wall of the barn',
      who: ['Napoleon', 'Squealer', 'Clover', 'Muriel', 'Mr Whymper', 'Boxer'],
      quote: 'A bed merely means a place to sleep in.',
      themes: ['Language and Propaganda', 'Power and Corruption'],
      tension: 3,
      significance:
        'Squealer asks whether the resolution against trade was ever written down, and since it was not, the animals decide they imagined it: memory loses to the written record, and the pigs hold the paintbrush.',
    },
    {
      where: 'Chapter 6',
      title: 'The windmill falls',
      summary:
        'By autumn the half-built windmill is the animals’ pride. In a violent November gale it falls, and Napoleon, after pacing among the ruins, blames Snowball, pronounces a death sentence on him and orders the rebuilding to begin that same morning.',
      setting: 'The ruined windmill on the knoll',
      who: ['Napoleon', 'Boxer', 'Benjamin'],
      quote: 'Snowball has done this thing!',
      themes: ['Language and Propaganda', 'Power and Corruption'],
      tension: 4,
      significance:
        'Snowball becomes the enemy who explains every failure, which is how the regime avoids ever being wrong.',
    },
    {
      where: 'Chapter 7',
      title: "The hens' revolt",
      summary:
        'In a bitter winter the animals go hungry, and Napoleon fools the visiting Mr Whymper by filling the empty bins with sand. He sells the hens’ eggs; when they resist by laying from the rafters so the eggs smash, he stops their rations, and nine hens die before the rest give in.',
      setting: 'The store-shed and the henhouses in winter',
      who: ['Napoleon', 'The hens', 'The dogs', 'Mr Whymper', 'Squealer'],
      quote: 'Nine hens had died in the meantime.',
      themes: ['Power and Corruption', 'Class and Labour'],
      tension: 4,
      significance:
        'The first resistance to Napoleon is starved into surrender and its dead are explained away as disease; some readers link the hens to the victims of the famine in Soviet Ukraine in 1932 and 1933.',
    },
    {
      where: 'Chapter 7',
      title: 'Snowball the traitor',
      summary:
        "Snowball is blamed for every mishap on the farm. Squealer announces that documents prove Snowball was Jones's agent from the start, and retells the Battle of the Cowshed with Napoleon as its hero. Boxer objects until Squealer says that Napoleon has stated it categorically.",
      setting: 'The farmyard in the evening',
      who: ['Squealer', 'Boxer', 'Napoleon'],
      quote: 'Snowball was in league with Jones from the very start!',
      themes: ['Language and Propaganda', 'Loyalty and Betrayal'],
      tension: 3,
      significance:
        'History is rewritten in front of the animals who lived it. Boxer’s one doubt earns him “a very ugly look” from Squealer, and four days later three of the dogs go for him.',
    },
    {
      where: 'Chapter 7',
      title: 'The confessions',
      summary:
        'Napoleon summons the animals to the yard. The dogs drag forward the four pigs who protested in Chapter 5; they confess to plotting with Snowball and are killed. Hens, a goose and sheep confess in turn and are killed too, until the corpses lie in a pile at Napoleon’s feet.',
      setting: 'The farmyard in the late afternoon',
      who: ['Napoleon', 'The dogs', 'Boxer', 'The hens', 'The sheep'],
      quote: 'the air was heavy with the smell of blood',
      themes: ['Power and Corruption', 'Revolution and Betrayal'],
      tension: 5,
      significance:
        'The regime now kills its own members, in a scene usually read as Stalin’s purges and the show trials of the late 1930s.',
    },
    {
      where: 'Chapter 7',
      title: "Clover's vision",
      summary:
        'The survivors huddle on the knoll by the half-finished windmill. Clover looks down at the farm and knows, though she cannot find the words, that this is not what they worked for, yet resolves to stay loyal. The animals sing Beasts of England, and Squealer announces that the song is abolished.',
      setting: 'The knoll above the farm on a spring evening',
      who: ['Clover', 'Boxer', 'Squealer', 'Muriel', 'Benjamin'],
      quote: 'These scenes of terror and slaughter',
      themes: ['Revolution and Betrayal', 'Loyalty and Betrayal'],
      tension: 4,
      significance:
        'Squealer says the song is no longer needed because “the Rebellion is now completed”: the dream is declared achieved at the moment it has most clearly failed.',
    },
    {
      where: 'Chapter 8',
      title: 'Without cause',
      summary:
        'Some of the animals remember that the Sixth Commandment forbade killing. Benjamin will not read it, so Muriel reads it to Clover, with two extra words. Squealer reads out figures proving that production has soared, and Napoleon is given grand titles, credited with every success and praised in a poem by Minimus painted on the barn wall.',
      setting: 'The end wall of the big barn',
      who: ['Clover', 'Muriel', 'Benjamin', 'Squealer', 'Napoleon', 'Minimus'],
      quote: 'No animal shall kill any other animal WITHOUT CAUSE.',
      themes: ['Language and Propaganda', 'Power and Corruption'],
      tension: 3,
      significance:
        'The killings are made lawful after the event by rewriting the law, and the animals blame their own memories rather than the wall.',
    },
    {
      where: 'Chapter 8',
      title: 'The Battle of the Windmill',
      summary:
        "Napoleon sells the farm's timber to Mr Frederick, who pays in forged banknotes. Frederick's men then attack, blow up the finished windmill with blasting powder and are driven off only after a savage fight. Squealer calls it a victory, and the gun is fired to celebrate.",
      setting: 'The pasture and the ruins of the windmill',
      who: ['Napoleon', 'Mr Frederick', 'Mr Pilkington', 'Boxer', 'Squealer', 'Benjamin'],
      quote: 'Then we have won back what we had before',
      themes: ['Power and Corruption', 'Language and Propaganda'],
      tension: 5,
      significance:
        'Frederick’s forged banknotes are often linked to the Molotov-Ribbentrop Pact of August 1939, and the Battle of the Windmill to the Second World War, which reached the Soviet Union with the German invasion of June 1941. Orwell had one detail changed so that every animal takes cover “except Napoleon”, recognising that Stalin stayed in Moscow during the German advance.',
    },
    {
      where: 'Chapter 8',
      title: 'The whisky',
      summary:
        "The pigs find a case of whisky in the farmhouse cellar. Napoleon is seen in Mr Jones's old bowler hat, and next morning Squealer announces that he is dying, but he recovers and soon orders the paddock meant for retired animals to be sown with barley. One night Squealer is found beside a broken ladder and a pot of white paint.",
      setting: 'The farmhouse, then the end wall of the big barn at midnight',
      who: ['Napoleon', 'Squealer', 'Benjamin', 'Muriel'],
      quote: 'No animal shall drink alcohol TO EXCESS.',
      themes: ['Power and Corruption', 'Education and Ignorance'],
      tension: 3,
      significance:
        'Only Benjamin understands what the ladder and the paint mean, and he says nothing: the one animal who can read the truth chooses not to share it.',
    },
    {
      where: 'Chapter 9',
      title: 'Rations and the Republic',
      summary:
        "In another hard winter every ration is cut except the pigs' and the dogs', which Squealer calls a readjustment. The pigs are given beer, weekly Spontaneous Demonstrations celebrate the farm, and Napoleon is elected President. Moses returns with his stories of Sugarcandy Mountain.",
      setting: 'The farmyard and the farmhouse through winter and spring',
      who: ['Squealer', 'Napoleon', 'Moses', 'The sheep'],
      quote: 'There was only one candidate, Napoleon, who was elected unanimously.',
      themes: ['Language and Propaganda', 'Power and Corruption'],
      tension: 2,
      significance:
        'Ceremony replaces food: the songs and processions let the animals forget, as the narrator puts it, “that their bellies were empty”, at least part of the time.',
    },
    {
      where: 'Chapter 9',
      title: 'Boxer falls',
      summary:
        'Boxer works on, older and thinner, hoping to see a good store of stone laid up before he retires. One summer evening he collapses dragging stone to the windmill. Squealer promises that he will be treated in the hospital at Willingdon, and Boxer looks forward to learning the rest of the alphabet.',
      setting: "The knoll by the windmill, then Boxer's stall",
      who: ['Boxer', 'Clover', 'Benjamin', 'Squealer'],
      quote: "Boxer has fallen! He is lying on his side and can't get up!",
      themes: ['Class and Labour', 'Loyalty and Betrayal'],
      tension: 4,
      significance:
        'Boxer was a month from retiring on a pension that no animal has yet received, and his hopes for his retirement make what follows crueller.',
    },
    {
      where: 'Chapter 9',
      title: 'Boxer is taken away',
      summary:
        'While the animals are weeding turnips, a van comes for Boxer. Benjamin reads its lettering: it belongs to a horse slaughterer. Clover runs after it shouting a warning, and Boxer tries to kick his way out, but he is too weak, and the van disappears down the road.',
      setting: 'The farmyard as the van drives away',
      who: ['Boxer', 'Benjamin', 'Clover', 'Muriel'],
      quote: 'Boxer was never seen again.',
      themes: ['Class and Labour', 'Loyalty and Betrayal', 'Education and Ignorance'],
      tension: 5,
      significance:
        'The regime disposes of its most loyal worker, and his end is the one Major foretold in Chapter 1, carried out by the pigs rather than by Jones.',
    },
    {
      where: 'Chapter 9',
      title: "Squealer's story",
      summary:
        "Squealer announces that Boxer died in the hospital, praising Napoleon with his last breath, and explains that the vet had bought the knacker's old van. Napoleon promises a memorial banquet. On the day of the banquet a grocer's van delivers a crate to the farmhouse, and that night the pigs are heard singing and quarrelling.",
      setting: 'The farmyard, then the farmhouse at night',
      who: ['Squealer', 'Napoleon'],
      quote: 'Those were his very last words, comrades.',
      themes: ['Language and Propaganda', 'Loyalty and Betrayal'],
      tension: 3,
      significance:
        'The narrator says only that the pigs had found the money for “another case of whisky” and draws no conclusion; the reader is left to work out where it came from.',
    },
    {
      where: 'Chapter 10',
      title: 'Years pass',
      summary:
        'Years pass, and few animals remember the Rebellion. Jones has died, Boxer is forgotten except by a few, and no animal has ever retired. The windmill is built at last, but it mills corn for profit instead of making electricity, and the other animals are as hungry and hard-worked as ever.',
      setting: 'Animal Farm, years later',
      who: ['Clover', 'Benjamin', 'Napoleon', 'Squealer', 'Moses'],
      quote: 'A time came when there was no one who remembered the old days before the Rebellion',
      themes: ['Education and Ignorance', 'Class and Labour'],
      tension: 1,
      significance:
        'With no memory of the past, the animals cannot tell whether life is better or worse, and have only Squealer’s figures to go on.',
    },
    {
      where: 'Chapter 10',
      title: 'Walking on two legs',
      summary:
        "After a week away with Squealer, the sheep return. One evening Clover's neigh brings the animals running to the yard, where Squealer, then a line of pigs, then Napoleon carrying a whip walk upright on their hind legs, while the sheep bleat a new slogan that drowns any protest.",
      setting: 'The farmyard on a summer evening',
      who: ['Squealer', 'Napoleon', 'The sheep', 'Clover'],
      quote: 'Four legs good, two legs BETTER!',
      themes: ['Power and Corruption', 'Language and Propaganda', 'Education and Ignorance'],
      tension: 4,
      significance:
        "Major's rule that whatever walks on two legs is an enemy is overturned, and nobody is left to argue.",
    },
    {
      where: 'Chapter 10',
      title: 'The single Commandment',
      summary:
        'Clover leads Benjamin to the end of the barn and asks him to read the wall, and for once he agrees. Only one Commandment is left. The next day the pigs carry whips, and soon Napoleon smokes a pipe and the pigs wear Mr Jones’s clothes.',
      setting: 'The end wall of the big barn',
      who: ['Clover', 'Benjamin', 'Napoleon'],
      quote: 'ALL ANIMALS ARE EQUAL BUT SOME ANIMALS ARE MORE EQUAL THAN OTHERS',
      themes: ['Language and Propaganda', 'Power and Corruption', 'Education and Ignorance'],
      tension: 4,
      significance:
        'Benjamin breaks his silence only when there is nothing left to save, and the paradox on the wall keeps the word equal while emptying it of meaning.',
    },
    {
      where: 'Chapter 10',
      title: 'From pig to man',
      summary:
        'The pigs entertain neighbouring farmers in the farmhouse. Mr Pilkington praises how hard the animals are worked and how little they are fed, and Napoleon restores the name The Manor Farm. Watching through the window, the animals see a quarrel break out over the cards and can no longer tell pigs from men.',
      setting: 'The farmhouse dining-room, seen through the window',
      who: ['Napoleon', 'Mr Pilkington', 'Clover'],
      quote: 'it was impossible to say which was which',
      themes: ['Power and Corruption', 'Revolution and Betrayal'],
      tension: 4,
      significance:
        'The story comes full circle, and the quarrel is deliberate: in his 1947 preface to the Ukrainian edition, which survives only in translation, Orwell said he meant the book to end on a “loud note of discord”, not with pigs and men reconciled.',
    },
  ],

  relationships: [
    {
      from: 'Napoleon',
      to: 'Snowball',
      kind: 'rivals for power',
      note: "From Chapter 3 the two are never in agreement. Napoleon wins not by argument but with the dogs, then takes Snowball's windmill as his own and turns Snowball into the enemy blamed for everything.",
    },
    {
      from: 'Napoleon',
      to: 'Squealer',
      kind: 'leader and propagandist',
      note: 'Napoleon rarely explains himself; Squealer does it for him. Their partnership shows that force and persuasion work together: the dogs silence the animals and Squealer makes the silence feel reasonable.',
    },
    {
      from: 'Napoleon',
      to: 'The dogs',
      kind: 'master and enforcers',
      note: 'Taken as puppies in Chapter 3 and reared in secret, the dogs drive out Snowball in Chapter 5 and kill the confessing animals in Chapter 7. They are usually read as the secret police.',
    },
    {
      from: 'Boxer',
      to: 'Napoleon',
      kind: 'loyal worker and leader',
      note: "Boxer's trust is total, and Napoleon uses it. In Chapter 7 Boxer pins one of Napoleon's dogs under his hoof and lets it go only on Napoleon's order. In Chapter 9 he is taken away in a horse slaughterer's van, and soon after, the pigs somehow have money for more whisky.",
    },
    {
      from: 'Boxer',
      to: 'Benjamin',
      kind: 'close friends',
      note: "Benjamin is devoted to Boxer without admitting it, and they spend their Sundays grazing side by side. It is only Boxer's danger that makes the cynical donkey gallop and speak out in Chapter 9.",
    },
    {
      from: 'Boxer',
      to: 'Clover',
      kind: 'fellow cart-horses',
      note: 'Clover warns Boxer not to overstrain himself, and he never listens. Her cry after the van in Chapter 9 is the plainest truth anyone tells him, and the narrator leaves it uncertain whether he understands it.',
    },
    {
      from: 'Squealer',
      to: 'Boxer',
      kind: 'propagandist and believer',
      note: 'When Boxer doubts that Snowball was always a traitor in Chapter 7, Squealer casts him an ugly look. After Boxer is taken away, Squealer describes his death in hospital and his loyal last words, an account the reader has every reason to doubt.',
    },
    {
      from: 'Snowball',
      to: 'Boxer',
      kind: 'fellow Animal Heroes',
      note: 'Both are made Animal Hero, First Class after the Battle of the Cowshed in Chapter 4. In Chapter 7 Boxer is the one animal who speaks up to say that Snowball fought bravely, until Squealer invokes Napoleon’s word.',
    },
    {
      from: 'Old Major',
      to: 'Napoleon',
      kind: 'founder and betrayer',
      note: "Major warns the animals never to resemble Man. Napoleon breaks every one of his rules. Under Napoleon, Major's skull is dug up and set by the flagstaff for the animals to file past, and in Chapter 10 Napoleon announces that it has been buried.",
    },
    {
      from: 'Clover',
      to: 'Benjamin',
      kind: 'the last witnesses',
      note: 'By Chapter 10 they are among the very few who remember the old days. Clover, who cannot read, leads Benjamin to the barn wall, and for once he breaks his rule and reads her the single Commandment left.',
    },
    {
      from: 'Clover',
      to: 'Mollie',
      kind: 'watchful elder and deserter',
      note: 'In Chapter 5 Clover confronts Mollie about the man from Foxwood and finds the sugar and ribbons hidden in her stall. Mollie runs away to a human owner three days later.',
    },
    {
      from: 'Napoleon',
      to: 'Moses',
      kind: 'ruler and preacher',
      note: 'The pigs call Sugarcandy Mountain a lie, yet when Moses returns in Chapter 9 they let him stay without working, on a daily allowance of beer. One reading is that a story of rest after death suits a regime that offers none before it.',
    },
    {
      from: 'Napoleon',
      to: 'Mr Whymper',
      kind: 'client and go-between',
      note: "From Chapter 6 the solicitor is the farm's only link with the outside world. Napoleon uses him to trade and, in Chapter 7, to carry a false report that the farm has plenty of food.",
    },
    {
      from: 'Napoleon',
      to: 'Mr Frederick',
      kind: 'trading partners, then enemies',
      note: "Napoleon sells Frederick the timber in Chapter 8, is paid in forged banknotes, and sees the windmill destroyed by Frederick's men days later.",
    },
    {
      from: 'Napoleon',
      to: 'Mr Pilkington',
      kind: 'neighbours turned allies',
      note: 'At the dinner in Chapter 10 they toast each other, until both play an ace of spades and the evening ends in a quarrel in which pig and man look alike.',
    },
    {
      from: 'Mr Pilkington',
      to: 'Mr Frederick',
      kind: 'rival neighbours',
      note: 'The two farmers dislike each other so much that they can hardly agree even in their own defence. Napoleon plays them against each other over the timber in Chapters 7 and 8, and is cheated by the one he chooses.',
    },
    {
      from: 'Mr Jones',
      to: 'Napoleon',
      kind: 'old master and new',
      note: "Jones is overthrown in Chapter 2, but by Chapter 10 Napoleon lives in his house, drinks, carries a whip and restores his farm's old name. The revolution replaces the master without ending the mastery.",
    },
  ],

  compareWith: [
    {
      title: 'Lord of the Flies',
      href: '/revision/texts/lord-of-the-flies',
      reason:
        'On the AQA and Edexcel lists, a novel in which a society built on shared rules is taken over by a leader who rules through fear, useful for comparing Jack with Napoleon.',
    },
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        "On all three boards' lists, a play by another socialist writer that asks who pays for the comfort of those at the top, as the working animals pay for the pigs.",
    },
    {
      title: 'DNA',
      href: '/revision/texts/dna',
      reason:
        "On the AQA and OCR lists, a play in which a group follows whoever takes control, and silence and a cover-up let a wrong stand, as the animals' silence does on the farm.",
    },
  ],

  contentGuidance: [
    'allegorical_animals',
    'political_ideology',
    'violence',
    'mortality',
    'crime_injustice',
  ],

  quotesFromElsewhere: ['loud note of discord'],

  sources: [
    {
      label:
        'Project Gutenberg Australia transcription of Animal Farm (eBook 0100011h, produced by Colin Choat, first posted August 2001), held since 26 September 2026 as src/data/full-texts/animal-farm.ts: every printed passage is cut from it by passage(), and the guide test checks every quotation and annotation against it. Its chapter headings were also used to place every quotation, and its word count gives the length.',
      url: 'https://gutenberg.net.au/ebooks01/0100011h.html',
    },
    {
      label:
        "Open Library full-text search of scanned printed editions, including Penguin Books No. 838, the 1946 Harcourt Brace printing and Peter Davison's text in The Complete Works of George Orwell (Secker and Warburg, 1997): every quotation in the guide before the deepening found word for word, with punctuation and spelling compared across printings. Clover's cry in Chapter 9 reads “They are” in some printings and “They're” in others, so only the words they share are annotated",
      url: 'https://openlibrary.org/search/inside',
    },
    {
      label:
        "Orwell, preface to the Ukrainian edition (March 1947), at the Orwell Foundation: the ending meant as a loud note of discord, not a reconciliation, and written just after the Tehran Conference; the page notes that Orwell's English original is lost and the text is a back-translation from the Ukrainian",
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/books-by-orwell/animal-farm/preface-to-the-ukrainian-edition-of-animal-farm-by-george-orwell/',
    },
    {
      label:
        "Wikipedia, Animal Farm: published by Secker and Warburg on 17 August 1945 with the subtitle A Fairy Story; written between November 1943 and February 1944; rejected by Gollancz, Jonathan Cape and Faber; the windmill and the five-year plans; the hens and the Holodomor; the banknotes and the 1939 pact. Re-read on 26 September 2026 for the deepening: Orwell's letter to Dwight Macdonald calling the milk and apples the turning point of the story; the puppies and the Stalinist secret police; Chapter 7's confessions as the purges and show trials of the late 1930s; Frederick's forged notes as the Molotov-Ribbentrop Pact of August 1939, after which Frederick attacks without warning, and the Battle of the Windmill as the Second World War (Firchow and Davison); 'all the animals except Napoleon', changed at Orwell's request in recognition of Stalin staying in Moscow during the German advance; the Chapter 4 wave of rebelliousness and the failed revolutions in Hungary and Germany; the ending and the 1943 Tehran Conference",
      url: 'https://en.wikipedia.org/wiki/Animal_Farm',
    },
    {
      label: 'Wikipedia, George Orwell: born Eric Arthur Blair, 25 June 1903; died 21 January 1950',
      url: 'https://en.wikipedia.org/wiki/George_Orwell',
    },
    {
      label:
        'Wikipedia, Great Purge: 1936 to 1938, with the three Moscow show trials and forced confessions',
      url: 'https://en.wikipedia.org/wiki/Great_Purge',
    },
    {
      label: 'Wikipedia, Five-year plans of the Soviet Union: the first ran from 1928 to 1932',
      url: 'https://en.wikipedia.org/wiki/Five-year_plans_of_the_Soviet_Union',
    },
    {
      label:
        'Wikipedia, Leon Trotsky: built and led the Red Army in the civil war; expelled from the party in 1927 and deported from the Soviet Union in 1929',
      url: 'https://en.wikipedia.org/wiki/Leon_Trotsky',
    },
    {
      label:
        'Wikipedia, Napoleon: a general of the French Revolution who took power in a coup in 1799 and crowned himself Emperor of the French in 1804 (for the note on names)',
      url: 'https://en.wikipedia.org/wiki/Napoleon',
    },
    {
      label:
        'Wikipedia, Tehran Conference: 28 November to 1 December 1943, Stalin, Roosevelt and Churchill',
      url: 'https://en.wikipedia.org/wiki/Tehran_Conference',
    },
    {
      label:
        'Wikipedia, Operation Barbarossa: the invasion of the Soviet Union by Nazi Germany and its allies, beginning on 22 June 1941',
      url: 'https://en.wikipedia.org/wiki/Operation_Barbarossa',
    },
    {
      label:
        'Wikipedia, Holodomor: a man-made famine in Soviet Ukraine from 1932 to 1933 (for the note on the hens, stated as a reading)',
      url: 'https://en.wikipedia.org/wiki/Holodomor',
    },
    {
      label:
        'Wikipedia, Coccidiosis: a parasitic disease of the intestinal tract of animals, which can kill young or weak animals',
      url: 'https://en.wikipedia.org/wiki/Coccidiosis',
    },
    {
      label:
        'Wiktionary definitions, fetched 26 September 2026, for the vocabulary entries added that day: maxim, rhetorical question, anaphora, hyperbole, tyrannise, knoll, mangelwurzel, porker, capitulate, retribution, superannuated, intermediary, bon mot and frugal',
      url: 'https://en.wiktionary.org/',
    },
    {
      label:
        'Board placement for the set text and compareWith: src/lib/board/set-texts.ts (Animal Farm on AQA, Edexcel and OCR; Lord of the Flies on AQA and Edexcel; An Inspector Calls on all three; DNA on AQA and OCR)',
    },
  ],
}
