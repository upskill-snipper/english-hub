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
 * (the founder's decision that day), so it is public domain here. The
 * quotations below were still written to the copyrighted-text limits, which
 * is no longer a constraint on this text.
 *
 * HOW THE QUOTATIONS WERE CHECKED (26 September 2026). No edition is held in
 * src/data/full-texts, so the guide test cannot check these words. Every
 * quotation was first located, and its chapter read off the chapter heading
 * above it, in the Project Gutenberg Australia transcription (eBook 0100011h).
 * Each was then confirmed, word for word, in scans of printed editions through
 * Open Library's full-text search: a 1945 printing, Penguin editions of 1998,
 * 2000 and 2007, and Peter Davison's text in The Complete Works of George
 * Orwell (Secker and Warburg, 1997). The 1998 and 2007 Penguin printings
 * follow Davison's punctuation wherever the two were compared. Where the
 * editions differ in wording, spelling or punctuation, the phrase was not used.
 * A few extra phrases were checked only in the 1945 and Penguin printings
 * because the search returned no Complete Works page for them: "I am one of
 * the lucky ones" and "But alas! his strength had left him".
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
 *   quoted here.
 * - Clover's cry in Chapter 9 varies between printings. Davison's text, the
 *   first Penguin (No. 838), the 1946 Harcourt Brace printing and most others
 *   read "They are taking you to your death!", but several later printings
 *   and the Gutenberg Australia transcription read "They're". An earlier draft
 *   of this file said every printed edition had "They are"; a second check of
 *   the Open Library scans (26 September 2026) found that false. Only the
 *   words every edition shares, "taking you to your death", are quoted.
 * - The last Commandment and "two legs better" differ in typography between
 *   editions (capitals or italics), not in wording. The Commandment is quoted
 *   in capitals, as every scanned edition prints it.
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
    'The whole novella, all ten chapters, as set for GCSE English Literature by AQA (8702), Pearson Edexcel (1ET0) and OCR (J352). Chapter numbers are the same in every edition but page numbers are not, so this guide locates each moment by chapter and by what happens, not by page.',
  rights: {
    status: 'public-domain',
    acknowledgement:
      'George Orwell, Animal Farm, first published by Secker and Warburg, London, in August 1945. Out of copyright in the UK since 1 January 2021.',
  },
  workLength: {
    words: 30000,
    basis:
      'About 30,000 words in ten chapters. The Project Gutenberg Australia transcription counts 30,025 words from the heading of Chapter I to THE END, headings included, and the existing guide above gives the same length. A long work, so the 400-word page limit in fair-dealing.ts applies.',
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
        'Chapter 1, in the big barn. It begins when Major, having spoken about his coming death, asks “Now, comrades, what is the nature of this life of ours?” and runs to “All animals are equal.”, just before he starts to describe his dream.',
      summary:
        "Major tells the animals that their lives are hard, hungry and short, and that this is not nature's fault: the land could feed them all in comfort, but Man takes what they produce and gives back only enough to keep them alive. He reminds the cows, the hens and Clover what has been taken from them, warns the young pigs, Boxer and the dogs of the deaths waiting for them, and calls for Rebellion. After an interruption, when the dogs chase some rats and the meeting votes that rats are comrades, he ends by laying down rules: never live, dress, drink, smoke or trade like Man, and never let any animal tyrannise over another.",
      annotations: [
        {
          phrase: 'slaughtered with hideous cruelty',
          note: 'The speech climbs from hunger and overwork to violent death. The passive verb names no killer yet, so the animals feel like victims before Major tells them who is to blame: a skilled speaker holding back his answer for effect.',
        },
        {
          phrase: 'Man is the only real enemy we have.',
          note: 'A single, simple enemy makes rebellion easy to grasp. One reading is that the simplicity is also the danger: the animals are never taught that a tyrant could come from among themselves, and Squealer later keeps them loyal by reminding them of Jones.',
        },
        {
          phrase: 'I am one of the lucky ones',
          note: 'Major admits that he, a prize boar, has been allowed to reach old age under Jones while the young pigs face the knife. One reading is that Orwell plants a small doubt about the prophet himself: the founder of the revolution has done well out of the old order, as the pigs will out of the new.',
        },
        {
          phrase: 'Jones will sell you to the knacker',
          note: "Direct address makes the threat personal to Boxer. It is the book's most bitter foreshadowing: in Chapter 9 Boxer is taken away in a horse slaughterer's van, and it is the pigs, not Jones, who send him.",
        },
        {
          phrase: 'we must not come to resemble him',
          note: 'Major then lists the habits of Man: houses, beds, clothes, alcohol, tobacco, money and trade. The pigs take up every one of them by Chapter 10, down to Napoleon smoking a pipe, so the novella ends by fulfilling this warning in reverse.',
        },
        {
          phrase: 'Weak or strong, clever or simple, we are all brothers.',
          note: 'Paired opposites insist that differences do not matter. Yet cleverness is exactly the difference the pigs later use to claim privilege, when Squealer argues that the pigs deserve the milk because they are brainworkers.',
        },
      ],
      question:
        'Starting with this speech, explore how Orwell presents the ideals behind the Rebellion and how far they are betrayed. Write about the speech and about the novella as a whole.',
    },
    {
      title: 'Snowball is driven out',
      where: 'Chapter 5',
      pointer:
        'Chapter 5. It begins at the Sunday Meeting where the windmill is put to the vote, with Snowball setting out his case over the bleating of the sheep, and ends when the sheep bleat for nearly a quarter of an hour and “put an end to any chance of discussion”, just before Squealer is sent round to explain.',
      summary:
        "Napoleon dismisses the windmill in barely half a minute, but Snowball's passionate description of a farm run on electricity wins the animals over. As the vote is about to go his way, Napoleon makes a strange sound and nine huge dogs rush in and chase Snowball off the farm. The dogs are the puppies Napoleon took away in Chapter 3. Standing on Major's old platform, Napoleon abolishes the Sunday debates. Four young pigs protest, the dogs growl, and the sheep drown out any objection.",
      annotations: [
        {
          phrase: 'he had spoken for barely thirty seconds',
          note: 'Napoleon does not need to win the argument, because he has already prepared another way to win. His brevity looks like indifference, and the reader later realises it was confidence.',
        },
        {
          phrase: 'In glowing sentences he painted a picture of Animal Farm',
          note: "Snowball's power is words and visions. The metaphor of painting is admiring, but it also hints that he offers a picture rather than the farm as it is. Orwell does not make Snowball simply good, and one reading is that he is another clever pig with a plan for everyone else's labour.",
        },
        {
          phrase: 'uttered a high-pitched whimper',
          note: 'The signal that ends democracy on the farm is not a word but an animal noise, and a feeble one. The anticlimax is satirical: a dictator does not need to be impressive, only to have force waiting outside.',
        },
        {
          phrase: 'nine enormous dogs wearing brass-studded collars',
          note: 'The studded collars make the dogs look armed, and a collar is also a sign of an owner: these dogs belong to Napoleon. The narrator explains a moment later that they are the puppies he took away, but the reader who remembers Chapter 3 knows first, so the scene exposes a plan Napoleon has been running in secret since the first summer.',
        },
        {
          phrase: 'they wagged their tails to him',
          note: "The narrator adds that it is the same way the farm's other dogs used to behave to Mr Jones. One reading is that this is the first sign of a pig being treated as the humans were, and it anticipates the final scene, where pig and man cannot be told apart.",
        },
        {
          phrase: 'there would be no more debates',
          note: "Reported speech flattens the moment: the end of the farm's democracy arrives in a short clause at the end of a long sentence, as if it were a routine change to the timetable.",
        },
        {
          phrase: 'put an end to any chance of discussion',
          note: 'The slogan Snowball devised to help the sheep understand Animalism is now used as noise to stop anyone questioning it. Language that once taught is now a weapon of silence.',
        },
      ],
      question:
        'Starting with this passage, explore how Orwell presents the ways Napoleon takes and keeps power. Write about the passage and about the novella as a whole.',
    },
    {
      title: 'Boxer is taken away',
      where: 'Chapter 9',
      pointer:
        "Chapter 9. It begins as the animals, weeding turnips, see Benjamin galloping from the farm buildings shouting “They're taking Boxer away!”, and ends with the short sentence “Boxer was never seen again.”, just before Squealer announces his death.",
      summary:
        "Benjamin, who has never been seen to gallop before, races to fetch the others. In the yard stands a closed van with lettering on its side, and Boxer's stall is empty. The animals call goodbye until Benjamin reads the lettering aloud: the van belongs to a horse slaughterer. Clover forces her way to the front and runs after it, shouting a warning. Boxer's face appears at the back window and he tries to kick his way out, but he is too weak. The animals beg the horses pulling the van to stop, but they do not understand, and the van is gone.",
      annotations: [
        {
          phrase: 'the first time that anyone had ever seen him gallop',
          note: 'Benjamin, the cynic who has watched everything and said nothing, is finally stirred to act by his friendship with Boxer. The tragedy is timing: the one animal who could always read the truth speaks up only when it is too late.',
        },
        {
          phrase: 'in the midst of a deadly silence he read',
          note: 'Reading is power on this farm. Muriel is still spelling out the words when Benjamin pushes her aside, and the adjective “deadly” tells the reader what the lettering means before he reads it.',
        },
        {
          phrase: 'taking you to your death',
          note: "Clover's warning to Boxer is one of the plainest truths any animal speaks aloud in the novella, in short words with nothing softened. It comes from love rather than politics, and it comes too late to change anything.",
        },
        {
          phrase: 'But alas! his strength had left him',
          note: 'The narrator almost never shows feeling, so the old-fashioned lament “alas” stands out. The strength the pigs have used up for years was the foundation of the whole farm, and now it is gone when Boxer needs it for himself.',
        },
        {
          phrase: 'the stupid brutes',
          note: "The van horses do not understand the animals' appeal to them as comrades. One reading is that the harsh phrase turns back on the farm animals too, who have failed for years to understand what was being done to them.",
        },
        {
          phrase: 'Boxer was never seen again.',
          note: "A flat, five-word sentence with no comment and no funeral. The silence is filled three days later by Squealer's account of Boxer dying in hospital, well cared for and happy, which everything the animals have just seen contradicts, so the passage ends with the truth about to be replaced.",
        },
      ],
      question:
        'Starting with this passage, explore how Orwell presents the treatment of Boxer and the other working animals. Write about the passage and about the novella as a whole.',
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
        '“Four legs good, two legs bad.” (Chapter 3) becomes “Four legs good, two legs better!” (Chapter 10).',
      effect:
        "The slogan begins as Snowball's shortcut for animals who cannot learn the Commandments, and the sheep repeat it for hours. Because they never understood it, it can be reversed by changing one word, and they bleat the new version just as happily. Repetition replaces thought, and the single changed word marks the whole distance the revolution has travelled.",
    },
    {
      technique: 'Irony through small additions: the altered Commandments',
      example:
        'Beds are now forbidden only “with sheets” (Chapter 6), killing only “without cause” and drinking only “to excess” (both Chapter 8).',
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
        'The narrator puts into words what Clover feels but cannot say, so the reader hears her thoughts in her own simple terms. The conditional “could have” stresses the tragedy: arguably the animal with the clearest moral sense lacks the words to challenge anyone, and she ends by resolving to stay loyal. Many readers find this the emotional centre of the book.',
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
        'Someone who buys old or worn-out horses to slaughter them for their meat, hides and bones. Old Major warns Boxer of the knacker in Chapter 1, and the van that takes Boxer away in Chapter 9 belongs to one.',
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
  ],

  timeline: [
    {
      where: 'Chapter 1',
      title: "Old Major's dream",
      summary:
        'Once Mr Jones has gone to bed drunk, the animals gather in the big barn to hear Old Major, the prize boar. He tells them that Man steals almost everything they produce, urges them to rebel, and teaches them the song Beasts of England. He dies three nights later.',
      setting: 'The big barn at night, Manor Farm',
      who: ['Old Major', 'Mr Jones', 'Boxer', 'Clover', 'Benjamin', 'Mollie'],
      quote: 'All men are enemies. All animals are comrades.',
      themes: ['Revolution and Betrayal', 'Class and Labour'],
      tension: 2,
      significance:
        "Major's rules, including his warning never to become like Man, are the standard every later chapter is measured against.",
    },
    {
      where: 'Chapter 2',
      title: 'The Rebellion',
      summary:
        "The pigs, led by Snowball and Napoleon, turn Major's ideas into Animalism. One Sunday in June, left unfed while Mr Jones sleeps off a drinking bout, the animals break into the store-shed and chase Jones and his men off the farm. Next day they rename it Animal Farm and paint Seven Commandments on the barn wall, and by the time they come back from the hayfield that evening the cows' milk has disappeared.",
      setting: 'The yard, the farmhouse and the big barn',
      who: ['Snowball', 'Napoleon', 'Squealer', 'Mr Jones', 'Mollie', 'Moses'],
      quote: 'All animals are equal.',
      themes: ['Revolution and Betrayal', 'Language and Propaganda'],
      tension: 4,
      significance:
        'The Rebellion succeeds almost by accident, and the missing milk is the first sign of who will benefit from it.',
    },
    {
      where: 'Chapter 3',
      title: 'The harvest and the milk',
      summary:
        'The first harvest is the biggest the farm has ever seen, and Boxer makes “I will work harder!” his motto. Snowball runs committees and reading classes and sums up Animalism in a slogan for the sheep. Napoleon takes nine puppies away to educate them in secret, and Squealer persuades the others that the milk and apples must go to the pigs.',
      setting: 'The fields at harvest time, and the harness-room',
      who: ['Boxer', 'Snowball', 'Napoleon', 'Squealer', 'The sheep'],
      quote: 'We pigs are brainworkers.',
      themes: ['Class and Labour', 'Power and Corruption', 'Language and Propaganda'],
      tension: 2,
      significance:
        "Privilege begins with something small, and the puppies taken away here return in Chapter 5 as Napoleon's dogs.",
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
      title: 'Snowball is driven out',
      summary:
        "Mollie deserts the farm for a human owner. Snowball and Napoleon clash over plans for a windmill. As the vote turns Snowball's way, Napoleon signals to nine huge dogs, the puppies he took away, and they chase Snowball off the farm. Napoleon then abolishes the Sunday debates.",
      setting: 'The big barn during a Sunday Meeting',
      who: ['Snowball', 'Napoleon', 'The dogs', 'Mollie', 'The sheep'],
      quote: 'there would be no more debates',
      themes: ['Power and Corruption', 'Revolution and Betrayal'],
      tension: 5,
      significance:
        "Argument loses to force in a single scene, and the farm's short-lived democracy is over.",
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
      title: 'The windmill falls',
      summary:
        'The animals work a sixty-hour week, much of it on the windmill. Napoleon starts trading with neighbouring farms through a solicitor, Mr Whymper, and the pigs move into the farmhouse and sleep in beds, which the Fourth Commandment now seems to allow. In a November gale the half-built windmill falls, and Napoleon blames Snowball.',
      setting: 'The quarry, the farmhouse and the ruined windmill',
      who: ['Boxer', 'Napoleon', 'Squealer', 'Clover', 'Muriel', 'Mr Whymper'],
      quote: 'All that year the animals worked like slaves.',
      themes: ['Class and Labour', 'Language and Propaganda', 'Power and Corruption'],
      tension: 3,
      significance:
        'Snowball becomes the enemy who explains every failure, which is how the regime avoids ever being wrong.',
    },
    {
      where: 'Chapter 7',
      title: 'The confessions',
      summary:
        "In a hard winter Napoleon hides the farm's hunger from the outside world and orders the hens to give up their eggs for sale; their protest ends when their rations are stopped and nine hens die. Animals who confess to plotting with Snowball are then killed by the dogs in front of everyone. Clover grieves for what the Rebellion was meant to be, and Beasts of England is banned.",
      setting: 'The farmyard, then the knoll above the farm',
      who: ['Napoleon', 'The hens', 'The dogs', 'Boxer', 'Clover', 'Squealer'],
      quote: 'These scenes of terror and slaughter',
      themes: ['Power and Corruption', 'Revolution and Betrayal'],
      tension: 5,
      significance:
        'The regime now kills its own members, and the song that began the Rebellion is silenced.',
    },
    {
      where: 'Chapter 8',
      title: 'The Battle of the Windmill',
      summary:
        "The Sixth Commandment is found to contain two extra words. Napoleon sells the farm's timber to Mr Frederick, whose banknotes turn out to be forgeries. Frederick's men attack and blow up the finished windmill, and the animals, badly hurt, drive them off and are told it was a victory. The pigs then find a case of whisky.",
      setting: 'The pasture and the ruins of the windmill',
      who: ['Napoleon', 'Mr Frederick', 'Boxer', 'Squealer', 'Benjamin', 'Muriel'],
      quote: 'No animal shall kill any other animal without cause.',
      themes: ['Power and Corruption', 'Language and Propaganda'],
      tension: 4,
      significance:
        "Napoleon's dealings with humans cost the animals their windmill, while the pigs' lives grow more like Jones's.",
    },
    {
      where: 'Chapter 9',
      title: 'Boxer is taken away',
      summary:
        'Rations are cut for every animal except the pigs and dogs. Boxer works on through injury until he collapses hauling stone. The pigs promise to send him to hospital, but the van that comes for him belongs to a horse slaughterer, and Benjamin reads its side too late. Squealer later tells the animals that Boxer died in hospital.',
      setting: 'The farmyard as the van drives away',
      who: ['Boxer', 'Benjamin', 'Clover', 'Squealer', 'Napoleon'],
      quote: 'Boxer was never seen again.',
      themes: ['Class and Labour', 'Loyalty and Betrayal', 'Education and Ignorance'],
      tension: 5,
      significance:
        "The regime disposes of its most loyal worker, and Squealer's story of his death replaces what the animals saw.",
    },
    {
      where: 'Chapter 10',
      title: 'Walking on two legs',
      summary:
        'Years pass, and few animals remember the Rebellion. The farm has grown richer, but the animals have not. One evening Squealer, then Napoleon, appear walking on their hind legs, Napoleon carrying a whip, while the sheep bleat a new slogan. The barn wall now holds a single Commandment.',
      setting: 'The farmyard and the end wall of the big barn',
      who: ['Squealer', 'Napoleon', 'The sheep', 'Clover', 'Benjamin'],
      quote: 'Four legs good, two legs better!',
      themes: ['Power and Corruption', 'Language and Propaganda', 'Education and Ignorance'],
      tension: 4,
      significance:
        "Major's rule that whatever walks on two legs is an enemy is overturned, and nobody is left to argue.",
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
      note: 'Clover warns Boxer not to overstrain himself, and he never listens. Her cry after the van in Chapter 9 is the last attempt to save him.',
    },
    {
      from: 'Squealer',
      to: 'Boxer',
      kind: 'propagandist and believer',
      note: 'When Boxer doubts that Snowball was always a traitor in Chapter 7, Squealer casts him an ugly look. After Boxer is taken away, Squealer describes his death in hospital and his loyal last words, an account the reader has every reason to doubt.',
    },
    {
      from: 'Old Major',
      to: 'Napoleon',
      kind: 'founder and betrayer',
      note: "Major warns the animals never to resemble Man. Napoleon breaks every one of his rules. Under Napoleon, Major's skull is dug up and set by the flagstaff for the animals to file past, and in Chapter 10 Napoleon announces that it has been buried.",
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
        'Project Gutenberg Australia transcription of Animal Farm (eBook 0100011h, produced by Colin Choat, first posted August 2001): used to locate every quotation, read its chapter from the heading above it, and count the words. Public domain in Australia; consulted, not reproduced.',
      url: 'https://gutenberg.net.au/ebooks01/0100011h.html',
    },
    {
      label:
        "Open Library full-text search of scanned printed editions, including Penguin Books No. 838, the 1946 Harcourt Brace printing and Peter Davison's text in The Complete Works of George Orwell (Secker and Warburg, 1997): every quotation found word for word, with punctuation and spelling compared across printings. Clover's cry in Chapter 9 reads “They are” in some printings and “They're” in others, so only the words they share are quoted",
      url: 'https://openlibrary.org/search/inside',
    },
    {
      label:
        "Orwell, preface to the Ukrainian edition (March 1947), at the Orwell Foundation: the ending meant as a loud note of discord, not a reconciliation, and written just after the Tehran Conference; the page notes that Orwell's English original is lost and the text is a back-translation from the Ukrainian",
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/preface-to-the-ukrainian-edition-of-animal-farm/',
    },
    {
      label:
        'Wikipedia, Animal Farm: published by Secker and Warburg on 17 August 1945 with the subtitle A Fairy Story; written between November 1943 and February 1944; rejected by Gollancz, Jonathan Cape and Faber; the windmill and the five-year plans; the hens and the Holodomor; the banknotes and the 1939 pact',
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
        'Board placement for the set text and compareWith: src/lib/board/set-texts.ts (Animal Farm on AQA, Edexcel and OCR; Lord of the Flies on AQA and Edexcel; An Inspector Calls on all three; DNA on AQA and OCR)',
    },
  ],
}
