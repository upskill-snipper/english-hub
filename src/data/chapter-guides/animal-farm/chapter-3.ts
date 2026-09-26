import type { ChapterGuide } from '@/lib/study-guides/chapter-guide'

/**
 * Animal Farm, Chapter 3: the first harvest, Snowball's schemes, Napoleon's
 * puppies and the milk and apples.
 *
 * HOW IT WAS CHECKED (26 September 2026). Every quotation, in closeReading and
 * inside double quotation marks in the prose, was read off Chapter III of the
 * held edition (src/data/full-texts/animal-farm.ts, Project Gutenberg
 * Australia), and chapter-guides.test.ts checks each against it. A few prose
 * quotations reach into other chapters; the test finds those in the whole
 * book. Orwell's own words, from his letter to Dwight Macdonald, and Marx's
 * slogan are in single quotation marks because they are not in the novella.
 * Every historical fact was checked against the pages listed in `sources`.
 *
 * Things the checking turned up, recorded so nobody reintroduces them:
 * - The single maxim is made for "the stupider animals, such as the sheep,
 *   hens, and ducks", not for the sheep alone; the sheep are the ones who
 *   take to bleating it.
 * - The word "educate" is not in the novella. Napoleon says that "the
 *   education of the young" matters most and that he will "make himself
 *   responsible for their education". Four sibling pages (chapters,
 *   characters, themes and essay-plans) put "educate" in quotation marks as
 *   if it were his word.
 * - The loft is reached "by a ladder from the harness-room". The novella does
 *   not say it is above the harness-room.
 * - Squealer's line here is "surely there is no one among you who wants to see
 *   Jones come back?". "Surely, comrades, you do not want Jones back?" is
 *   Chapter 5.
 * - "reserved for the pigs alone" is narration, and the chapter's last words;
 *   it also covers the main crop of apples, not only the windfalls.
 * - The held edition drops two full stops in this chapter (after "capacity"
 *   and after "bigger letters"). The words are right; quote them without
 *   running on into the next sentence.
 *
 * A second, adversarial check the same day corrected these, which the tests
 * cannot catch because they are not quotations:
 * - Napoleon does not "say little". With Snowball he is "by far the most
 *   active in the debates"; he simply opposes whatever Snowball proposes.
 * - The pigs and Benjamin are not the only good readers. The dogs read
 *   "fairly well" and Muriel "somewhat better than the dogs", and in Chapter 9
 *   it is Muriel who begins to spell out the van, so Benjamin is not the one
 *   animal who could read the truth to the others.
 * - Benjamin never shirks. A sentence that listed him after "Almost nobody
 *   shirks" made him one of the shirkers.
 * - The held edition prints the Chapter 10 chant "Four legs good, two legs
 *   BETTER!". Editions differ in how they stress the word (capitals or
 *   italics, as the whole-text guide notes); this guide follows the held
 *   edition. The test ignores case, so it would not notice either way.
 * - Squealer's "comrades" is a comradely address, not flattery, and the
 *   Jones quotation has repetition and exclamation but no rhetorical question
 *   in the words quoted.
 * - Orwell's reply to Macdonald is dated December 1946 by its editor; the
 *   date of Macdonald's own letter is not in the source, so it is not given.
 *   Macdonald's readers took the book to mean revolution always ends badly
 *   for the underdog, and the Trotsky and Stalin rivalry did not "end" in
 *   1929 (Trotsky was killed in 1940); it led to his expulsion and exile.
 */
export const chapter: ChapterGuide = {
  slug: 'animal-farm',
  chapter: 3,
  part: 'Chapter 3',
  title: 'The First Harvest and the First Privilege',

  atAGlance:
    'The animals bring in the biggest harvest the farm has ever seen, and through the first summer and autumn Snowball fills the farm with committees, reading classes and a slogan. Meanwhile Napoleon quietly takes nine puppies away, and Squealer persuades everyone that the milk and apples belong to the pigs. It is the chapter in which equality first openly gives way, so gently that the animals agree to it.',

  summary: [
    "The chapter opens with the hay harvest. The tools were made for humans, so the work is sometimes hard, but the pigs think of a way round every difficulty and the horses know the fields better than Jones's men ever did. The pigs themselves do no physical work: they direct and supervise, and a pig walks behind Boxer and Clover calling out orders as the two horses pull the cutter or the horse-rake round the field. Every animal helps, down to the ducks and hens carrying wisps of hay in their beaks. The harvest is finished two days sooner than under Jones and is the biggest the farm has known, with nothing wasted and nothing stolen.",
    'All summer the farm runs smoothly. The animals are happier than they had thought possible, because the food is now their own, and they have more leisure. Later in the year, with no threshing machine, they tread out the corn and blow away the chaff with their own breath. Boxer works like three horses, arranges for a cockerel to wake him half an hour before everyone else, and answers every setback with his personal motto, “I will work harder!” Almost nobody shirks: Mollie is slow to get up and leaves early, and the cat vanishes whenever there is work but always has an excellent excuse. Benjamin works exactly as he did under Jones, never shirking and never volunteering, and will give no opinion on the Rebellion.',
    "On Sundays there is no work. The animals hoist Snowball's new flag, an old green tablecloth of Mrs Jones's painted with a white hoof and horn, and then hold the Meeting in the big barn, where the coming week's work is planned and resolutions are debated. Only the pigs ever propose anything: the others can vote but cannot think of resolutions of their own. Snowball and Napoleon oppose each other on everything, even on the retiring age once a paddock has been set aside for animals past work. The Meeting ends with Beasts of England, and the afternoon is for recreation.",
    "The pigs make the harness-room their headquarters and study blacksmithing and carpentry there from books taken from the farmhouse. Snowball throws himself into organising Animal Committees: an Egg Production Committee for the hens, a Clean Tails League for the cows, a Whiter Wool Movement for the sheep and a Wild Comrades' Re-education Committee to tame the rats and rabbits. Most of these fail. The wild creatures simply take advantage, and the cat, who joins the Re-education Committee, is seen telling some sparrows that they may perch on her paw, but they keep their distance. The reading and writing classes do better: by autumn almost every animal is literate in some degree. The pigs could already read perfectly and Benjamin reads as well as any pig, the dogs read fairly well and Muriel a little better, Clover learns the alphabet but cannot put words together, Boxer never gets past D and none of the others gets further than A.",
    'Because the sheep, hens and ducks cannot learn the Seven Commandments by heart, Snowball reduces them to a single maxim, “Four legs good, two legs bad.” When the birds protest that they have two legs, he argues that a wing is for moving, not for handling things, and so counts as a leg; the mark of Man is the hand. The birds do not understand his long words but accept his explanation. The maxim is written on the end wall of the barn above the Commandments in bigger letters, and the sheep take to bleating it for hours.',
    "Napoleon takes no interest in the committees, saying that the education of the young matters more. When Jessie and Bluebell's nine puppies are weaned, he takes them from their mothers to a loft reached only by a ladder from the harness-room, and the farm soon forgets them. Then the mystery left at the end of Chapter 2 is solved: the milk is mixed into the pigs' mash every day. When the windfall apples are also ordered to the harness-room for the pigs, some animals murmur, but every pig agrees, Snowball included, and Squealer is sent to explain. The pigs, he says, are brainworkers who need milk and apples for their health, and if they failed in their duty Jones would come back. Nobody wants that, so it is agreed without argument that the milk, the windfalls and later the main crop of apples are for the pigs alone.",
  ],

  keyEvents: [
    'The first hay harvest is the biggest the farm has ever seen and is finished two days faster than under Jones, while the pigs direct the work instead of doing it.',
    'Boxer takes “I will work harder!” as his personal motto and has a cockerel wake him half an hour before everyone else.',
    "Snowball's hoof-and-horn flag and the Sunday Meeting become the farm's weekly ritual, but only the pigs put forward resolutions, and Snowball and Napoleon oppose each other on everything.",
    'The pigs make the harness-room their headquarters; Snowball launches Animal Committees, which mostly fail, and reading classes, which succeed, though most animals get no further than the letter A and the pigs could already read perfectly.',
    'Snowball reduces the Seven Commandments to “Four legs good, two legs bad”, which is written above them on the barn wall and bleated by the sheep for hours.',
    "Napoleon takes Jessie and Bluebell's nine puppies away from their mothers and keeps them hidden in a loft until the farm forgets them.",
    "The missing milk turns out to go into the pigs' mash, and the windfall apples are ordered to the harness-room for the pigs.",
    'Squealer warns that Jones would come back if the pigs failed in their duty, and the animals agree that the milk and apples are for the pigs alone.',
  ],

  closeReading: [
    {
      quote: 'The pigs did not actually work, but directed and supervised the others.',
      technique: 'Understatement and a telling adverb',
      analysis:
        "The adverb “actually” lets the narrator record this in passing, as if it were a small correction, when it marks a real change: a class that gives orders has appeared inside a revolution against masters. The next sentence says “it was natural that they should assume the leadership”, voicing the pigs' excuse in the animals' accepting terms. Orwell leaves the reader to notice what the animals do not, and soon a pig walks behind the horses calling “Gee up, comrade!”, the old command with one new word.",
    },
    {
      quote: 'His answer to every problem, every setback, was “I will work harder!”',
      technique: 'A personal motto, with repetition',
      analysis:
        "The repeated “every” shows that Boxer meets every difficulty with the same answer, and it is always more of his own labour, never a question. The exclamation mark carries his cheerful sincerity, which makes the motto moving and dangerous at once. Orwell presents the loyal worker as both the revolution's strength and its weakness: an animal whose only answer is to give more can be made to give everything. Boxer adds a second maxim in Chapter 5, and in Chapter 9 his strength gives out.",
    },
    {
      quote: 'Donkeys live a long time. None of you has ever seen a dead donkey',
      technique: 'Cryptic reply and ambiguity',
      analysis:
        "Asked whether he is happier now that Jones has gone, Benjamin answers a different question. One reading is that he has outlived many changes and expects life to stay as hard as ever, so a revolution changes little for a donkey. The narrator calls it a “cryptic answer”, and the others have to be content with it. Benjamin can read as well as any pig but never uses the skill, so Orwell gives one of the farm's best readers the least wish to act on what he knows.",
    },
    {
      quote:
        'The other animals understood how to vote, but could never think of any resolutions of their own.',
      technique: 'Antithesis in a balanced sentence',
      analysis:
        'The sentence falls into two halves, what the animals can do and what they cannot, and the hinge word “but” shows how hollow their democracy is. Voting only lets them choose between proposals the pigs have already made, so the pigs set every question. The Meeting has the form of self-government without the substance. It prepares for Chapter 5, where Napoleon ends the Sunday debates and the other animals, who never learned to propose anything themselves, cannot find the arguments to protest.',
    },
    {
      quote: 'Four legs good, two legs bad.',
      technique: 'Slogan built on antithesis and parallelism',
      analysis:
        'Six short words set two groups against each other in a neat parallel, easy to chant and impossible to discuss. Snowball invents it for the animals who cannot learn the Commandments, and when the birds object he answers with jargon, a wing is “an organ of propulsion and not of manipulation”, which they accept without understanding. The sheep bleat it for hours, so a principle has become a noise. Because they learned it without understanding it, the sheep can be taught “Four legs good, two legs BETTER!” in Chapter 10 and bleat that just as loudly.',
    },
    {
      quote: 'kept them in such seclusion that the rest of the farm soon forgot their existence',
      technique: 'Foreshadowing through understatement',
      analysis:
        "The sentence ends a quiet paragraph, and its calm is the danger. Napoleon's claim that “the education of the young” matters most sounds wise, but the ladder, the loft and the seclusion suggest secret training, not schooling, and the farm's forgetting is exactly what he needs. Orwell sets this beside Snowball's public, failing committees: Snowball talks to everyone, while Napoleon works in private on nine animals. A reader who remembers this paragraph recognises the nine dogs who burst into the barn in Chapter 5.",
    },
    {
      quote:
        'Milk and apples (this has been proved by Science, comrades) contain substances absolutely necessary to the well-being of a pig.',
      technique: 'Appeal to false authority, in a parenthesis',
      analysis:
        "Squealer drops his evidence into brackets, as if the proof were too obvious to need more than an aside. Capitalised “Science” is an authority the animals cannot check, and the intensifier “absolutely” leaves no room for doubt. He also calls the pigs “brainworkers”, turning privilege into duty: the pigs, he claims, take the milk for everyone else's sake. Orwell shows propaganda that does not argue so much as borrow prestige, and the animals, few of whom can read well, have nothing to answer it with.",
    },
    {
      quote: 'Jones would come back! Yes, Jones would come back!',
      technique: 'Repetition and exclamation, used as a threat',
      analysis:
        "Squealer repeats the one outcome every animal fears, then asks whether “there is no one among you who wants to see Jones come back”, a question with only one possible answer. Disagreeing about apples now sounds like disloyalty to the Rebellion, and it works at once: “they had no more to say.” The threat of Jones becomes the regime's favourite argument and returns in Chapter 5. Orwell later named this episode as the story's turning point, the moment the other animals should have taken a stand.",
    },
  ],

  characters: [
    {
      name: 'Boxer',
      development:
        "The chapter establishes Boxer as the farm's greatest worker, “more like three horses than one”, rising early to do extra work and meeting every setback with “I will work harder!” It also fixes his limits: he cannot get past the letter D and decides to be content with four letters. Great strength and little learning mean that he will trust others to do his thinking, which is what the pigs rely on for the rest of the novella.",
    },
    {
      name: 'Snowball',
      development:
        'Snowball is the energetic organiser: he designs the flag, forms the committees, sets up the reading classes and invents the maxim, and the narrator calls him indefatigable. Orwell does not make him simply good. His committees mostly fail, he answers the birds with long words they cannot follow, and he agrees with the other pigs that the milk and apples should be theirs. He seems clever and sincere, but he too treats the other animals as creatures to be managed.',
    },
    {
      name: 'Napoleon',
      development:
        'Napoleon is, with Snowball, by far the most active speaker at the Meetings, but only to oppose whatever Snowball proposes, and he takes no interest in the committees. His most important act in the chapter is a quiet one: he takes the nine puppies away, claiming that the education of the young matters most, and hides them until the farm forgets them. It continues Chapter 2, where he stood in front of the milk buckets as the others went to the hayfield. Where Snowball works in public, Napoleon prepares in private.',
    },
    {
      name: 'Squealer',
      development:
        "This is Squealer's first speech in the novella, and it shows his method whole: the comradely address (“Comrades!”), the claim that he dislikes milk and apples himself, an appeal to Science the animals cannot check, a new word, brainworkers, that turns privilege into duty, and the threat of Jones. His body performs sincerity too, skipping from side to side and whisking his tail, and he ends “almost pleadingly”. He wins without a single claim the animals could check.",
    },
    {
      name: 'Benjamin',
      development:
        'Benjamin seems quite unchanged by the Rebellion: he works slowly, never shirks, never volunteers, and gives only a cryptic answer about whether life is better. He can read as well as any pig but says there is nothing worth reading. His refusal to take part matters later: he could read every change on the barn wall as well as any pig, but he keeps what he knows to himself until, in Chapter 9, he reads the side of the van that takes Boxer away, too late to save him.',
    },
    {
      name: 'Clover',
      development:
        'Clover works alongside Boxer in the hayfield and learns the whole alphabet but cannot put words together. The detail looks small here but it shapes her later scenes: in Chapters 6 and 8 she needs Muriel to read the altered Commandments to her, and in Chapter 10 Benjamin reads the wall for her, so she can sense that the rules have changed but cannot check them herself.',
    },
    {
      name: 'Mollie',
      development:
        'Mollie shirks, getting up late and leaving early with a stone in her hoof as an excuse, and she learns only the six letters of her own name, which she decorates with flowers and admires. Her vanity and lack of commitment prepare for her desertion in Chapter 5.',
    },
    {
      name: 'Muriel',
      development:
        "The goat reads somewhat better than the dogs and sometimes reads scraps of newspaper from the rubbish heap to the others in the evenings. It makes her the ordinary animals' reader, which is why Clover turns to her when the Commandments begin to change.",
    },
    {
      name: 'The sheep',
      development:
        'Unable to learn the Seven Commandments, the sheep learn the maxim instead and grow so fond of it that they bleat it for hours without tiring. Their chanting is harmless here, but it is a weapon waiting to be used: in Chapter 5 their bleating drowns out debate.',
    },
    {
      name: 'The dogs',
      development:
        "The dogs learn to read fairly well but are interested only in the Seven Commandments, an irony that grows when Napoleon's dogs kill other animals in Chapter 7 in spite of the Sixth. Jessie and Bluebell's nine puppies are taken by Napoleon as soon as they are weaned; they return in Chapter 5 as “nine enormous dogs wearing brass-studded collars”.",
    },
    {
      name: 'The cat',
      development:
        'The cat disappears whenever there is work and reappears at mealtimes with excuses so charming that nobody doubts her. On the Re-education Committee she tells sparrows that all animals are now comrades while they stay just out of reach, a comic picture of the language of equality used by a predator.',
    },
    {
      name: 'The hens',
      development:
        'The hens and ducks carry wisps of hay, save five bushels of corn by gathering stray grains, and are among the animals who cannot learn the Commandments by heart. They are the willing small workers whose effort the pigs will later claim; in Chapter 7 their eggs are taken for sale.',
    },
  ],

  themes: [
    {
      theme: 'Class and Labour',
      development:
        "The first half of the chapter shows what the Rebellion promised: the animals toil willingly now that the food is their own, and nobody steals or grumbles over rations. The narrator's “everyone worked according to his capacity” echoes the first half of the socialist slogan Marx popularised, ‘from each according to his ability, to each according to his needs’. One reading is that the chapter then breaks the second half. The pigs supervise instead of labouring, and by the end the milk and apples go not by need but by rank. Squealer's word “brainworkers” names the new division, mental work set above physical, the very gap Marx pictured disappearing under communism.",
    },
    {
      theme: 'Education and Ignorance',
      development:
        "The reading classes sort the farm into a ladder of knowledge: the pigs read perfectly, the dogs read nothing but the Commandments, Muriel reads scraps of newspaper, Benjamin will not read, Clover cannot join letters into words, Boxer stops at D and the rest stop at A. Knowledge becomes power, because only those who can read the wall can notice when it is changed. Snowball's slogan replaces understanding with a chant, and Napoleon's private schooling of the puppies turns out in Chapter 5 to have made them his guard. Education, the chapter's great success, is already unequal.",
    },
    {
      theme: 'Language and Propaganda',
      development:
        "Two kinds of persuasion appear side by side. Snowball wins the birds over with words they do not understand, and Squealer wins everyone over with Science, reassurance and fear. Even the narration adopts the pigs' view, calling their leadership “natural”. By the end the animals accept a privilege because it is “put to them in this light”, which suggests Orwell's point: propaganda does not need to be true, only to make objection feel foolish or disloyal.",
    },
    {
      theme: 'Power and Corruption',
      development:
        'Nothing is seized by force in this chapter, and that is what makes it chilling. Power gathers in small, reasonable-sounding steps: the pigs take the harness-room as their headquarters, only pigs propose resolutions, Napoleon removes the puppies, and the milk and apples are kept back. Each step is agreed or unnoticed. Even Snowball shares in the first privilege, so corruption begins with the whole ruling group, not with one villain.',
    },
    {
      theme: 'Revolution and Betrayal',
      development:
        "The chapter holds the Rebellion at its best and at the moment its betrayal begins. The paddock for animals past work, argued over here, is never used: in Chapter 10 “no animal had ever actually retired”. The milk and apples are the first break with Major's rule that all animals are equal, and Orwell himself called this moment the turning point of the story. The other animals murmur and then fall silent, and the novella suggests that this silence is part of what goes wrong.",
    },
  ],

  context: [
    {
      heading: "Orwell's turning point: the milk and apples",
      body: "Soon after Animal Farm came out in the United States, the editor Dwight Macdonald, who ran the magazine Politics, told Orwell that some readers took the book to mean that revolution always ends badly for the underdog, and asked what he had intended. In a reply written in December 1946, Orwell said that he meant it chiefly as a satire on the Russian revolution, with a wider warning that a violent, conspiratorial revolution led by power-hungry people can only bring a change of masters, and he pointed to this chapter: ‘The turning-point of the story was supposed to be when the pigs kept the milk and apples for themselves (Kronstadt).’ He added that if the other animals had put their foot down then, it would have been all right. Orwell's answer suggests that the animals who have “no more to say” at the end of this chapter let slip the moment when a stand might have saved the Rebellion.",
    },
    {
      heading: 'Kronstadt, March 1921',
      body: "Kronstadt was the naval base guarding the sea approach to Petrograd (St Petersburg), and its sailors had helped the Bolsheviks take power in 1917. By early 1921 the civil war was ending but hunger was worsening: in January the government cut city bread rations by a third, and Petrograd's workers went on strike. The Kronstadt sailors backed them with fifteen demands, among them freely elected soviets, free speech and equal rations for all who work, since the Bolsheviks had the best rations. The government crushed the rising after sixteen days, its troops attacking across the ice of the frozen Gulf of Finland. Trotsky, head of the Red Army, signed the order, and Mikhail Tukhachevsky commanded the assault; soon afterwards Lenin's New Economic Policy brought in market reforms. Read this way, the milk and apples are the unequal rations, and it matters that all the pigs agree, “even Snowball and Napoleon”, since Snowball is usually read as Trotsky. Orwell's animals, unlike the sailors, only murmur.",
    },
    {
      heading: 'Committees, classes and a flag',
      body: "One reading links Snowball's reading and writing classes to the Soviet literacy campaign, which Lenin launched with a decree of 26 December 1919 requiring everyone aged 8 to 50 to become literate. The Bolsheviks also saw literacy as a way to spread the Party's ideas, which fits the dogs who read nothing but the Commandments. The hoof and horn on the flag are usually read as the hammer and sickle, designed in 1918 as a symbol of workers and peasants united. Orwell makes his flag green, though, for “the green fields of England”, which one reading takes as a reminder that the warning applies at home as well as in Russia.",
    },
    {
      heading: 'The puppies and the secret police',
      body: "Napoleon's puppies are usually read as the secret police on which Stalin's power rested. Orwell simplifies the history: the first Soviet secret police, the Cheka, was set up on 20 December 1917 under Felix Dzerzhinsky, in Lenin's time, and was not raised privately by Stalin, but a later successor, the NKVD, carried out Stalin's mass arrests and executions in the late 1930s. In the same reading, Snowball and Napoleon's constant disagreement stands for the rivalry between Trotsky and Stalin, which sharpened after Lenin's death in 1924 and led to Trotsky's expulsion from the party in 1927 and his deportation in 1929. Orwell starts the quarrel in the first summer, so the reader sees it coming.",
    },
  ],

  structure:
    "Chapter 3 is the calm between the Rebellion (Chapter 2) and the Battle of the Cowshed (Chapter 4), and it covers the first summer and autumn, from the hay harvest to the ripening apples, mostly in summary rather than scenes. It opens on the shared effort of “How they toiled and sweated to get the hay in!” and closes on the milk and apples “reserved for the pigs alone”, so its first and last words move from all the animals to one group. In between it runs in movements: work, the Sunday ritual, Snowball's schemes, Napoleon's puppies and the milk. Orwell sets Snowball's public failures beside Napoleon's private plan, and ends by answering the question Chapter 2 left open, where the milk went. The harness-room, emptied of its bits and dog-chains in Chapter 2, becomes the pigs' headquarters, the way to the puppies' loft and the store for the apples.",

  vocabulary: [
    {
      term: 'Implements',
      meaning:
        'Tools and equipment. The farm implements were designed for human beings, and no animal can use a tool that means standing on its hind legs, so the work is sometimes hard.',
    },
    {
      term: 'Parasitical',
      meaning:
        "Living off other people's work while giving nothing back. The narrator, in the animals' voice, calls the humans “worthless parasitical human beings”; by the end of the chapter the reader may ask who is living off whom.",
    },
    {
      term: 'Cryptic',
      meaning:
        "Mysterious and hard to interpret. Benjamin's remark about donkeys living a long time is called a cryptic answer because it seems to mean more than it says.",
    },
    {
      term: 'Resolution',
      meaning:
        'A formal proposal put to a meeting for a vote. At the Sunday Meeting only the pigs ever put resolutions forward.',
    },
    {
      term: 'Indefatigable',
      meaning:
        'Tireless, never giving up. The narrator uses it for Snowball as he organises one committee after another.',
    },
    {
      term: 'Faculty',
      meaning:
        'An ability or power of the mind. Benjamin can read as well as any pig but never exercises the faculty, because he says nothing is worth reading.',
    },
    {
      term: 'Maxim',
      meaning:
        'A short saying that sums up a principle. Snowball reduces the Seven Commandments to a single maxim for the animals who cannot learn them.',
    },
    {
      term: 'Propulsion and manipulation',
      meaning:
        "Propulsion is pushing or driving forward; manipulation is handling things with the hands. Snowball uses the words to argue that a bird's wing is a leg, not a hand, and the birds do not understand them.",
    },
    {
      term: 'Whelped',
      meaning: 'Gave birth, of a dog. Jessie and Bluebell whelp soon after the hay harvest.',
    },
    {
      term: 'Seclusion',
      meaning:
        'Being kept hidden away from others. Napoleon keeps the puppies in such seclusion that the farm forgets them.',
    },
    {
      term: 'Windfalls',
      meaning:
        'Fruit blown off a tree by the wind. The windfall apples in the orchard grass are ordered to the harness-room for the pigs.',
    },
    {
      term: 'Brainworkers',
      meaning:
        'People who work with their minds rather than their bodies. Squealer uses the word to argue that the pigs, as managers, need the milk and apples.',
    },
  ],

  examQuestion: {
    question:
      'Starting with Chapter 3, explore how Orwell presents the way inequality returns to Animal Farm. Write about how the pigs set themselves apart in Chapter 3 and how Orwell presents inequality in the novella as a whole. (A GCSE-style question.)',
    guidance: [
      'Decide your argument first. For example: Chapter 3 shows inequality returning in four forms at once, in work, in knowledge, in force and in food, and each form grows through the novella until pigs and men cannot be told apart.',
      "Work: begin with the pigs who “did not actually work, but directed and supervised the others”, and the narrator's “it was natural”. Link to Boxer's motto, his extra labour through the windmill chapters and his fate in Chapter 9.",
      'Knowledge: use the reading classes and the maxim. Show how unequal literacy lets the pigs alter the Commandments in Chapters 6 and 8, and how the sheep turn the maxim into “Four legs good, two legs BETTER!” in Chapter 10.',
      "Force: use Napoleon's puppies, kept in seclusion, and follow them to Chapter 5, where they drive Snowball out, and Chapter 7, where they tear out the throats of the pigs who confess.",
      "Food: analyse Squealer's speech, with Science, “brainworkers” and the threat of Jones, then follow the privilege to the reduced rations of Chapter 9 and the farm that grows richer in Chapter 10 while only the pigs and dogs share the wealth.",
      "Bring in context where it sharpens the analysis: Orwell's letter calling the milk and apples the turning point, and the Kronstadt sailors' demand for equal rations in 1921. Keep it brief and tied to the text.",
      'Conclude on the other animals: they “had no more to say” in Chapter 3, and the novella suggests that the silence of the many is how the privilege of the few survives.',
    ],
    tips: [
      'Quote short phrases and analyse single words, such as “actually”, “natural” and “alone”, rather than copying long sentences.',
      'Present historical parallels as readings and always tie them back to what Orwell does with the text.',
      'Do not treat Snowball as simply good: he agrees about the milk and apples and invents the slogan the sheep later use against debate.',
      'Move across the novella with precise chapter references, and explain why each moment matters instead of retelling the plot.',
    ],
  },

  quiz: [
    {
      question: 'How much sooner than Jones and his men do the animals finish the hay harvest?',
      options: ['One day', 'Two days', 'A week', 'In half the time'],
      answer: 1,
      explanation:
        "The narrator says the animals finish in two days' less time than it usually took Jones and his men, and that it is the biggest harvest the farm has ever seen.",
    },
    {
      question: 'What arrangement does Boxer make with one of the cockerels?',
      options: [
        'To guard the hen-house at night',
        'To carry messages to the pigs',
        'To count the sheaves of corn',
        'To wake him half an hour earlier than anyone else',
      ],
      answer: 3,
      explanation:
        'Boxer has the cockerel call him half an hour early so that he can put in extra volunteer work before the day begins, which fits his motto, “I will work harder!”',
    },
    {
      question: 'According to Snowball, what do the hoof and horn on the flag stand for?',
      options: [
        'The future Republic of the Animals',
        'The victory over Jones',
        'The memory of Old Major',
        'The strength of the horses',
      ],
      answer: 0,
      explanation:
        'Snowball explains that the green stands for the green fields of England and the hoof and horn for the future Republic of the Animals, which will arise when the human race has been finally overthrown.',
    },
    {
      question: 'How far does Boxer get with the alphabet?',
      options: [
        'The letter A',
        'The whole alphabet',
        'The letter D',
        'The six letters of his name',
      ],
      answer: 2,
      explanation:
        'Boxer never gets beyond D, and when he learns E to H he forgets A to D, so he settles for four letters. Clover learns the whole alphabet, and Mollie learns only the letters of her own name.',
    },
    {
      question: 'Why does Snowball reduce the Seven Commandments to a single maxim?',
      options: [
        'The pigs want to change the Commandments',
        'The sheep, hens and ducks cannot learn them by heart',
        'The birds demand a rule of their own',
        'Napoleon orders him to',
      ],
      answer: 1,
      explanation:
        'The maxim is for the animals who cannot learn the Commandments by heart. Snowball says it contains the essential principle of Animalism.',
    },
    {
      question: 'What does Napoleon do with the nine puppies?',
      options: [
        "He enrols them in Snowball's reading classes",
        'He gives them to the sheep to guard',
        'He sets them to watch the orchard',
        'He takes them from their mothers and keeps them hidden in a loft',
      ],
      answer: 3,
      explanation:
        'Napoleon says he will make himself responsible for their education, takes them to a loft reached only by a ladder from the harness-room, and keeps them there until the farm forgets them. They return in Chapter 5.',
    },
    {
      question: 'Which pigs agree that the milk and apples should go to the pigs?',
      options: [
        'All of them, even Snowball and Napoleon',
        'Only Napoleon and Squealer',
        'Only Snowball',
        'None; the other animals vote for it',
      ],
      answer: 0,
      explanation:
        'The narrator says all the pigs are in full agreement on this point, “even Snowball and Napoleon”, who otherwise never agree. The first privilege belongs to the whole ruling group.',
    },
    {
      question: 'What finally silences the animals who murmur about the milk and apples?',
      options: [
        'The dogs growl at them',
        'A vote at the Sunday Meeting',
        "Squealer's warning that Jones would come back",
        "Boxer's new motto",
      ],
      answer: 2,
      explanation:
        'Squealer asks whether anyone wants Jones back. The animals are certain they do not, and when it is put to them in this light they have no more to say.',
    },
  ],

  sources: [
    {
      label:
        'The held edition, src/data/full-texts/animal-farm.ts (Project Gutenberg Australia, eBook 0100011h), section-3 for every close-reading quotation and the whole text for quotations from other chapters; checked by src/__tests__/chapter-guides.test.ts',
      url: 'https://gutenberg.net.au/ebooks01/0100011h.html',
    },
    {
      label:
        "Orwell's letter to Dwight Macdonald, written in December 1946 soon after the book's US publication, edited by Peter Davison, in The New York Review of Books, 11 July 2013 (Macdonald as editor of Politics; his report that some readers took the book to mean revolution always ends badly for the underdog; the satire on the Russian revolution with a wider application to violent conspiratorial revolution and a change of masters; the turning-point sentence; the other animals putting their foot down; Davison's note on Kronstadt guarding the approach to St Petersburg, the strikes, Trotsky and Tukhachevsky, and the New Economic Policy enunciated shortly after)",
      url: 'https://www.nybooks.com/articles/2013/07/11/animal-farm-what-orwell-really-meant/',
    },
    {
      label:
        'Wikipedia, Kronstadt rebellion (raw text fetched 26 September 2026): sixteen days in March 1921; Kronstadt in the October Revolution; January 1921 cut of a third in city bread rations and the Petrograd strikes; the fifteen demands, including new elections to the soviets, freedom of speech and equal rations for all who work, rather than the Bolsheviks having the best rations; Trotsky signed the order; Tukhachevsky took command of the 7th Army and the Petrograd troops and attacked across the ice of the frozen Gulf of Finland; the rising accelerated the New Economic Policy',
      url: 'https://en.wikipedia.org/wiki/Kronstadt_rebellion',
    },
    {
      label:
        'Wikipedia, Animal Farm: the milk and apples as the turning point in the letter to Macdonald and an analogy for Kronstadt; the hoof and horn flag read as the hammer and sickle; the puppies read as the secret police',
      url: 'https://en.wikipedia.org/wiki/Animal_Farm',
    },
    {
      label:
        "Wikipedia, Likbez: Lenin's decree of 26 December 1919 requiring everyone aged 8 to 50 to become literate; the Bolsheviks' view of literacy campaigns as a way to promote Party ideology",
      url: 'https://en.wikipedia.org/wiki/Likbez',
    },
    {
      label:
        'Wikipedia, Hammer and sickle: designed in 1918 by Yevgeny Kamzolkin; a symbol of unity between workers and peasants',
      url: 'https://en.wikipedia.org/wiki/Hammer_and_sickle',
    },
    {
      label:
        'Wikipedia, Cheka: the first Soviet secret police, established on 20 December 1917 and led by Felix Dzerzhinsky; succeeded by the GPU in 1922',
      url: 'https://en.wikipedia.org/wiki/Cheka',
    },
    {
      label:
        "Wikipedia, Joseph Stalin: the NKVD's role in the mass arrests and executions of the late 1930s; Lenin's market-oriented reforms in the New Economic Policy, introduced in response to the post-civil-war strikes and peasant uprisings (raw text fetched 26 September 2026)",
      url: 'https://en.wikipedia.org/wiki/Joseph_Stalin',
    },
    {
      label:
        'Wikipedia, Great Purge: the purge of 1936 to 1938, largely conducted by the NKVD, the secret police of the USSR, often on direct orders from the Politburo headed by Stalin',
      url: 'https://en.wikipedia.org/wiki/Great_Purge',
    },
    {
      label:
        'Wikipedia, Mikhail Tukhachevsky: commanded the 7th Army in the suppression of the Kronstadt rebellion in March 1921',
      url: 'https://en.wikipedia.org/wiki/Mikhail_Tukhachevsky',
    },
    {
      label:
        "Wikipedia, Leon Trotsky: People's Commissar for Military Affairs, who built the Red Army; leader of the Left Opposition from 1923 and, after Lenin's death in 1924, a prominent critic of Stalin; expelled from the party in 1927, exiled in 1928 and deported in 1929; assassinated in Mexico City in 1940 by a Stalinist agent",
      url: 'https://en.wikipedia.org/wiki/Leon_Trotsky',
    },
    {
      label:
        'Wikipedia, From each according to his ability, to each according to his needs: popularised by Marx in the Critique of the Gotha Programme (1875), in a passage imagining the antithesis between mental and physical labour vanishing',
      url: 'https://en.wikipedia.org/wiki/From_each_according_to_his_ability,_to_each_according_to_his_needs',
    },
    {
      label:
        'Character and theme names, and the Chapter 3 timeline moment: src/data/study-guides/animal-farm.ts',
    },
  ],
}
