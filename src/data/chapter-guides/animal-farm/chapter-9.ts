import type { ChapterGuide } from '@/lib/study-guides/chapter-guide'

/**
 * Animal Farm, Chapter 9 (Chapter IX of the held edition, section-9 of
 * src/data/full-texts/animal-farm.ts).
 *
 * HOW IT WAS CHECKED (26 September 2026). Every close-reading quotation was
 * cut from section-9 of the held edition and every phrase quoted in the prose
 * from somewhere in the book; chapter-guides.test.ts re-checks both. Outside
 * facts come only from the pages listed in `sources`, each fetched that day.
 *
 * Things to keep, so nobody "fixes" them back:
 * - The novella never says the pigs sold Boxer. It says the van was a horse
 *   slaughterer's and that the pigs somehow found money for more whisky. The
 *   sale is the reading the text invites, and it is written here as a reading.
 * - Clover's cry after the van reads "They are" in some printings and
 *   "They're" in others (see the note in src/data/study-guides/animal-farm.ts),
 *   so only the words every printing shares are quoted.
 * - Orwell's own words about the book (the 1947 preface, the 1946 letter) are
 *   given in reported speech, not quotation marks: the test requires every
 *   double-quoted phrase to be found in the novella, and they are not in it.
 *   The preface survives only as a back-translation from Ukrainian in any case.
 *
 * REVIEWED the same day against Chapter IX in full and the sources again.
 * Corrected, so nobody reintroduces them:
 * - Boxer's pension was not "the only reward the farm has ever offered him":
 *   he was made Animal Hero, First Class in Chapter 4.
 * - Clover's warning comes after Boxer's face appears at the window, not
 *   before; she canters, since she cannot gallop.
 * - The retiring ages were fixed when the farm's laws were first drawn up,
 *   not at the Rebellion itself.
 * - "Spontaneous Demonstration" is not an oxymoron on its own; the
 *   contradiction is between the name and the weekly order.
 * - Squealer first hints at rewriting Snowball's part in Chapter 5, not 7.
 * - The Orwell Foundation dates the preface to March 1947, not the edition.
 * - Stakhanov's arranged record is an allegation (a 1985 New York Times
 *   story), and the one-candidate elections rest on Elections in the Soviet
 *   Union, since the 1937 election article only says the promise was reversed.
 * - Readings are marked as readings: that Boxer is Orwell's cart-horse, that
 *   the pigs sent him to the knacker, that Snowball follows Trotsky's path.
 */
export const chapter: ChapterGuide = {
  slug: 'animal-farm',
  chapter: 9,
  part: 'Chapter 9',
  title: "Boxer's Last Year",
  atAGlance:
    "While the pigs give themselves beer, new privileges and a Republic with Napoleon as its only candidate, Boxer works through injury towards a pension he never receives. When he collapses, the van that comes for him, supposedly to take him to hospital, bears a horse slaughterer's name, and Squealer's story of a peaceful death in hospital replaces what the animals saw with their own eyes. It is the novella's emotional climax: the most loyal worker on the farm is used up and driven away in a van with a knacker's name on its side, and the others are persuaded to feel grateful.",

  summary: [
    "Boxer's hoof, split in the Battle of the Windmill, is slow to heal, but the rebuilding of the windmill begins the day after the celebrations of what the pigs called a victory, and he will not take a day off. He hides the pain from everyone except Clover, who treats the hoof with herbs she chews into poultices and, with Benjamin, urges him to work less hard. His one ambition is to see the windmill well under way before he retires. The narrator recalls that when the farm's laws were first drawn up, retiring ages were fixed, twelve for horses and pigs, with generous pensions promised, though no animal has yet retired. Since the small field beyond the orchard has gone to barley, there is a rumour that a corner of the large pasture will become a grazing-ground for retired animals. Boxer will be twelve in the late summer of the following year.",
    "The winter is as cold as the last and food is shorter still. Every animal's rations are cut except those of the pigs and the dogs, and Squealer explains that too much equality would go against the principles of Animalism. He calls the cut a “readjustment”, never a “reduction”, and reads out figures proving that the animals have more food, shorter hours and longer lives than under Jones. They believe him, partly because they can hardly remember Jones's day. In the autumn the four sows have produced thirty-one piebald young pigs, and since Napoleon is the only boar on the farm, the narrator remarks drily, their father can be guessed. Napoleon teaches them himself in the farmhouse kitchen, they are discouraged from playing with the other young animals, and a schoolroom is promised for them. New rules say that other animals must stand aside for a pig on the path and that all pigs may wear green ribbons on their tails on Sundays.",
    'Money is short. The egg contract rises to six hundred a week, rations are cut again in February and lanterns in the stalls are banned to save oil, while Napoleon has sugar that he forbids to the other pigs. One afternoon a rich smell, which someone says is cooking barley, drifts from the old brew-house; the animals hope for a warm mash, but it is announced that all barley is now reserved for the pigs, who each receive a pint of beer a day, with half a gallon for Napoleon, served in the Crown Derby soup tureen. The hardships are partly offset, the narrator says, by more songs, speeches and processions, and Napoleon orders a weekly Spontaneous Demonstration: a march round the farm in military formation, behind the black cockerel and then the pigs, with Boxer and Clover carrying a banner reading “Long live Comrade Napoleon!” Anyone who grumbles is drowned out by the sheep bleating “Four legs good, two legs bad!”, and for part of the time the celebrations help the animals forget their empty bellies.',
    "In April Animal Farm is proclaimed a Republic. Napoleon is the only candidate for President and is elected unanimously. On the same day new documents are said to show that Snowball did not merely try to lose the Battle of the Cowshed by a trick but actually led the human forces, charging in with the cry “Long live Humanity!”, and that the wounds on his back were made by Napoleon's teeth. In midsummer Moses the raven returns after years away, unchanged, still doing no work and preaching about Sugarcandy Mountain. Many of the animals believe him now, since their lives are hungry and hard. The pigs call his stories lies, yet let him stay, idle, with a gill of beer a day.",
    "Boxer's hoof heals and he works harder than ever; all the animals work like slaves that year, on the farm, the windmill and a schoolhouse for the young pigs begun in March. Boxer never admits weakness, but his hide is less shiny and his great haunches seem to have shrunk, and on the quarry slope his lips silently shape his motto because he has no voice left. Late one summer evening, hauling stone alone, he collapses on the knoll by the windmill with blood trickling from his mouth. He tells Clover that it is his lung, that the others can finish the windmill without him, and that he had been looking forward to retiring, perhaps with Benjamin for company. Squealer arrives full of concern and says Napoleon is arranging for Boxer to be treated in the hospital at Willingdon. The animals are uneasy at the thought of a sick comrade in human hands, but Squealer persuades them. For two days Boxer rests in his stall, dosed with pink medicine from the farmhouse bathroom and planning to spend his retirement learning the remaining twenty-two letters of the alphabet.",
    "In the middle of a working day, while the animals are weeding turnips under a pig's supervision, Benjamin gallops up braying that they are taking Boxer away. In the yard stands a closed van with lettering on its side and a sly-looking driver, and Boxer's stall is empty. The animals call goodbye until Benjamin, pushing aside Muriel as she spells out the words, reads the lettering aloud: the van belongs to a horse slaughterer. Clover canters after it calling his name, Boxer's face appears at the small window at the back, and she shouts to him to get out. A moment later there is a drumming of hoofs as he tries to kick his way out, but his strength has gone. The van horses ignore the animals' pleas, nobody thinks of shutting the gate until it is too late, and Boxer is never seen again. Three days later Squealer announces that Boxer died in hospital, describes his last words in praise of Napoleon, and dismisses the idea that he went to the knacker: the vet, he says, had bought the van and not yet painted out the old name. The animals are relieved. Napoleon gives a short speech in Boxer's honour, announces a wreath and a memorial banquet, and recommends Boxer's two maxims to everyone. On the day of the banquet a grocer's van delivers a large wooden crate; that night there is singing, a quarrel and a crash of glass, and word goes round that the pigs have found the money for another case of whisky.",
  ],

  keyEvents: [
    'Rations are cut for every animal except the pigs and the dogs, and Squealer argues that too much equality would betray Animalism while proving with figures that the animals are better fed than under Jones.',
    'Thirty-one young pigs, all by implication fathered by Napoleon, are raised and taught apart from the other young animals, and all pigs gain new privileges on the path and on Sundays.',
    'The barley is reserved for the pigs, who now drink beer every day, half a gallon of it for Napoleon.',
    'Animal Farm becomes a Republic with Napoleon as the only candidate for President, and on the same day Snowball is recast as the leader of the human forces at the Battle of the Cowshed.',
    'Moses returns, and the pigs, while calling his Sugarcandy Mountain a lie, let him stay and pay him in beer.',
    'Boxer collapses while hauling stone, and Squealer promises that Napoleon will send him to the hospital at Willingdon.',
    'A van comes for Boxer, Benjamin reads that it belongs to a horse slaughterer, and Boxer is too weak to kick his way out.',
    "Squealer announces Boxer's death in hospital and explains away the van, Napoleon promises a wreath and a banquet, and the pigs are heard drinking a new case of whisky.",
  ],

  closeReading: [
    {
      quote:
        'A too rigid equality in rations, Squealer explained, would have been contrary to the principles of Animalism.',
      technique: 'Paradox delivered in reported speech',
      analysis:
        'Animalism was founded on the principle that all animals are equal, yet here equality itself is said to break its principles. The qualifier “too rigid” makes fairness sound like a fault of excess, as if equality could be overdone. Orwell reports the argument instead of letting Squealer voice it, and the flat tag “Squealer explained” presents a contradiction as a routine clarification. The satire is that the ideology is now quoted against its own centre, and the animals exempted are the pigs and the dogs: the rulers and their enforcers.',
    },
    {
      quote: 'But doubtless it had been worse in the old days. They were glad to believe so.',
      technique: 'Free indirect style and irony',
      analysis:
        "The narrator slips into the animals' own way of thinking. The adverb “doubtless” sounds certain but signals the opposite: nobody can check, because Jones's day has almost faded from their memories. The second, shorter sentence then exposes the motive. The animals do not believe Squealer because of evidence; they believe him because believing is comfortable. Orwell's point is that propaganda works best when its listeners consent to it, and the line prepares for the end of the chapter, when the animals are “enormously relieved” to accept Squealer's account of Boxer.",
    },
    {
      quote:
        'Napoleon had commanded that once a week there should be held something called a Spontaneous Demonstration',
      technique: 'Irony: an order to be spontaneous',
      analysis:
        "A demonstration cannot be spontaneous if it is commanded by the leader and held on a weekly timetable, so the sentence contradicts itself: the leader orders, by the calendar, what is supposed to be unplanned. The phrase “something called” shows the narrator holding the official term at arm's length. The march itself goes in ranked order behind Napoleon's cockerel, the pigs leading and the poultry last, with dogs on either side, so the procession acts out the new hierarchy while it is meant to celebrate the farm's struggles and triumphs. Orwell satirises celebrations that are organised from above and presented as the people's own joy, and shows how well they work: the animals enjoy them.",
    },
    {
      quote: 'was it not right and just that a better world should exist somewhere else?',
      technique: 'Rhetorical question in free indirect style',
      analysis:
        "This is the animals' reasoning, not Moses's, in their own voice. The question expects the answer yes, but it argues from need rather than evidence: because their lives are “hungry and laborious”, a paradise ought to exist. The narrator finds the pigs' attitude to Moses hard to determine, but the question suggests one reason they tolerate a raven they call a liar. A story of rest after death makes endless work and short rations easier to bear, and the “gill of beer” they pay him suggests they know it. His return is usually read as a satire of the Church's place under Stalin.",
    },
    {
      quote: 'At such times his lips were seen to form the words ... he had no voice left',
      technique: 'Passive voice and a literal detail with a figurative meaning',
      analysis:
        "The ellipsis stands for Boxer's motto, “I will work harder”, now mouthed without sound. The passive “were seen to form” makes Boxer something the others watch rather than someone who speaks. The final clause is literal, since he is exhausted, but it can also be read as a summary of his place on the farm: the strongest animal has no say in how it is run. Orwell lets the slogan outlast the voice it has worn out, as it does after his death, when Napoleon hands his maxims on to everyone.",
    },
    {
      quote:
        'Alfred Simmonds, Horse Slaughterer and Glue Boiler, Willingdon. Dealer in Hides and Bone-Meal. Kennels Supplied.',
      technique: 'Found text: a trade sign read as a list',
      analysis:
        "Orwell lets a business sign deliver the climax. Its practical language lists what a horse's body becomes, glue, hides and bone-meal, as if Boxer were stock. “Kennels Supplied” is the cruellest detail, because it fulfils Old Major's warning in Chapter 1 that the knacker would boil Boxer down “for the foxhounds”. The truth is painted in plain sight, missed only because the animals cannot read it quickly enough. Muriel is still spelling it out when Benjamin, who could always “read as well as any pig”, reads it aloud, with Boxer already shut inside.",
    },
    {
      quote: 'had been bought by the veterinary surgeon, who had not yet painted the old name out',
      technique: 'Plausible, mundane detail in indirect speech',
      analysis:
        "Squealer's explanation, given in indirect speech so that it sounds like fact, works because it is ordinary: a second-hand van, a job not yet done. The reader has a reason for doubt. In Chapter 8 Squealer was found around midnight below the painted Commandments, beside “an overturned pot of white paint”, and one of them soon proved to have changed. One reading is that this lie turns on the regime's own method: the pigs paint over words when it suits them, and here the story needs paint left unused.",
    },
    {
      quote:
        'from somewhere or other the pigs had acquired the money to buy themselves another case of whisky',
      technique: 'Understatement and deliberate vagueness',
      analysis:
        "The chapter ends on a rumour, not a statement. The vague “somewhere or other” pretends not to know where the money came from, but the reader has watched a van bearing a horse slaughterer's name leave with Boxer inside, so the gap invites one answer. The usual reading, which the novella implies but never states, is that the pigs sold Boxer to the knacker. “Another case” recalls the whisky found in the cellar in Chapter 8. Placing the pigs' hangover straight after the worker's death is the chapter's final, silent judgement.",
    },
  ],

  characters: [
    {
      name: 'Boxer',
      development:
        "The chapter completes Boxer's story. He works on through the split hoof from the Battle of the Windmill, hiding the pain from all but Clover, and his one ambition is to see the windmill well under way before he retires at twelve. When he falls he is only a month from the pension he has been promised, and it never comes. His plans for retirement are touchingly small: a corner of the pasture, Benjamin for company and the twenty-two letters of the alphabet he never learnt, having been unable to get past D in Chapter 3. Even when he collapses his thoughts go at once to the windmill and the store of stone laid up for it. In the van, the strength that could once have smashed it to matchwood has gone. After his death the pigs take control of his memory: Squealer reports last words praising Napoleon, and Napoleon offers his maxims to every animal as a model.",
    },
    {
      name: 'Napoleon',
      development:
        "Napoleon is mostly offstage, and that is the point: his decisions arrive as announcements. He keeps sugar that he forbids to the other pigs, takes half a gallon of beer a day from the Crown Derby soup tureen, and has had the field once meant for retired animals sown with barley, all of it now reserved for the pigs. As the only boar he is, by implication, the father of the thirty-one young pigs, and he teaches them himself. He orders the Spontaneous Demonstrations and becomes President without a contest. He is never shown deciding Boxer's fate; Squealer reports his distress and his arrangements. He appears in person only for the oration, where he announces a wreath of laurels from the farmhouse garden and a memorial banquet, and turns Boxer's maxims into a lesson in obedience for everyone else.",
    },
    {
      name: 'Squealer',
      development:
        "Squealer is at his most versatile. With the animals hungry, he reads out figures in a shrill, rapid voice to prove they are better fed than under Jones, and renames a cut a “readjustment”. When Boxer falls he arrives “full of sympathy and concern”, and after the van has gone he performs grief, wiping away a tear with his trotter and claiming to have been at the bedside. Then his manner changes in a moment, his eyes dart about suspiciously, and he calls the animals' own reading of the van “a foolish and wicked rumour”. The switch from tears to threat suggests that the feeling is a tool. The last words he reports for Boxer end on “Napoleon is always right”, the maxim Boxer had adopted in Chapter 5, which makes them sound plausible to the animals and suspicious to the reader.",
    },
    {
      name: 'Benjamin',
      development:
        "Benjamin's friendship with Boxer, shown before only in small ways, drives the climax. He urges Boxer to work less, lies at his side keeping the flies off with his tail, and is the companion Boxer hopes to retire with. When the van comes, the donkey who has watched everything without acting is seen to gallop for the first time, and he reads the lettering that Muriel is still spelling out. His furious “Fools! Fools!” is aimed at animals who wave goodbye without reading what is in front of them. One reading is that his own years of silence share the blame, since he could always read the signs and chose not to explain them. He acts at last when it is too late, and Chapter 10 describes him as “more morose and taciturn” since Boxer's death.",
    },
    {
      name: 'Clover',
      development:
        "Clover is Boxer's nurse throughout. She treats his hoof with poultices, warns him that “A horse's lungs do not last for ever”, gives him the pink medicine twice a day and lies in his stall in the evenings. When the van leaves she forces her way to the front and, unable to gallop, manages a canter behind it. In Chapter 7 she lacked the words to express her thoughts; here she finds words at last, and shouts to Boxer that they are “taking you to your death”. It comes too late to save him. Her love is real, but the chapter gives no sign that she questions Squealer's explanation, and Chapter 10 finds her two years past a retirement that never comes.",
    },
    {
      name: 'Moses',
      development:
        "Moses returns in midsummer after several years away, quite unchanged: he does no work and preaches Sugarcandy Mountain as before, pointing past a dark cloud to the country where animals will rest from their labours. Many animals believe him now, because their lives are hungry and hard. The narrator singles out the pigs' attitude as hard to explain: they call his stories lies, yet let him stay without working and pay him a gill of beer a day. The reward suggests his preaching is useful to them, which is how his return is usually read.",
    },
    {
      name: 'The young pigs',
      development:
        "The thirty-one young pigs born in the autumn are piebald, and the narrator's dry remark that Napoleon is the only boar leaves no doubt about their father. They are taught by Napoleon himself, a schoolroom is planned for them, and they are discouraged from playing with the other young animals. Together with the new rules that other animals must stand aside for a pig on the path and that pigs of every rank may wear green ribbons on Sundays, they suggest a ruling class that is now born rather than made. The first pigs took charge because they were the cleverest animals; the next generation simply inherits the position.",
    },
    {
      name: 'The other animals',
      development:
        "The rest of the farm believes what it is told because belief is easier than memory. The animals accept Squealer's figures because Jones has almost faded from their minds, enjoy the Spontaneous Demonstrations because being reminded that they are their own masters helps them forget their hunger, and many believe Moses. The sheep bleat down anyone who complains. Muriel is still spelling out the lettering on the van when Benjamin pushes her aside. The nearest they come to defiance is leaving the turnip weeding without waiting for the pig's orders, and it changes nothing. At the end they are “enormously relieved” by Squealer's explanation.",
    },
  ],

  themes: [
    {
      theme: 'Class and Labour',
      development:
        "The chapter sets the promise of a pension against the reality of work until death. No animal has yet retired on the generous pensions agreed when the farm's laws were first drawn up, and the field that might have been a grazing-ground for retired animals grows barley for the pigs' beer. The line that all the animals “worked like slaves” that year repeats Chapter 6 almost word for word, which suggests that only the masters have changed. Class also becomes visible and inherited: the pigs' children are schooled apart, other animals step aside for pigs on the path, and every pig may wear a green ribbon. Boxer's fate is the theme's conclusion. The worker who gave the farm everything is removed as soon as he can no longer work, in a van that deals in horses' bodies as goods.",
    },
    {
      theme: 'Language and Propaganda',
      development:
        "This is the chapter in which the regime's words do the most work. Squealer turns a reduction into a “readjustment”, proves with figures that hungry animals are well fed, and argues that too much equality betrays Animalism. The Spontaneous Demonstration is ordered, the Republic has one candidate, and new documents rewrite the Battle of the Cowshed again, going further than in Chapters 7 and 8. The climax shows propaganda defeating the animals' own senses: they hear the van's lettering read aloud, see Boxer's face at its window and hear him kicking, then accept Squealer's story of a vet's van with an old name on it. The novella leaves little doubt that the words painted on the van tell the truth; the words in Squealer's mouth replace them.",
    },
    {
      theme: 'Loyalty and Betrayal',
      development:
        "Boxer's loyalty is the chapter's centre and its tragedy. He trusts that Napoleon is always right, trusts the promise of a pension and trusts the pigs to send him to hospital, and each trust is betrayed. The betrayal does not end with his death: his loyalty is turned into propaganda, as Squealer reports last words praising Napoleon and Napoleon recommends his maxims to every animal. Against this Orwell sets a different kind of loyalty, the friendship of Clover and Benjamin, who nurse him, chase the van and try to save him. Personal loyalty is shown as real but powerless; political loyalty as something the powerful use up and throw away.",
    },
    {
      theme: 'Education and Ignorance',
      development:
        "Reading decides who can know the truth. Boxer's modest dream is to learn the rest of the alphabet, while the young pigs are taught by Napoleon himself and a schoolhouse is begun for them. When the van comes, Muriel can only spell the words out slowly, and it takes Benjamin to say what they mean. Ignorance of the past matters just as much. Because the animals barely remember Jones's day, they cannot test Squealer's figures, and because in Chapter 7 they only “thought they remembered” the Battle of the Cowshed, they cannot defend Snowball now. The pigs' power rests on what the others cannot read and cannot remember.",
    },
    {
      theme: 'Power and Corruption',
      development:
        "The pigs move further into Jones's way of life: beer brewed from the barley, half a gallon of it for Napoleon in the Crown Derby soup tureen, sugar, lamp oil and candles for the house, and finally whisky. In the same season everyone else's rations are cut and lanterns are banned from the stalls to save oil. Power takes new forms too: Napoleon becomes President without a contest, dogs flank the processions, and the young pigs are raised as a separate class. Most tellingly, the pigs hand Boxer over to the human world the Rebellion was fought to escape. Old Major warned that Jones would sell Boxer to the knacker; in this chapter, the novella strongly implies, it is the pigs who send him there.",
    },
  ],

  context: [
    {
      heading: "Orwell's cart-horse, and the moral he meant",
      body: "In the preface he wrote in March 1947 for a Ukrainian translation, Orwell said the story took shape when he saw a boy of about ten driving a huge cart-horse along a narrow path, whipping it whenever it tried to turn. It struck him that if such animals ever became aware of their strength, humans would have no power over them, and that men exploit animals much as the rich exploit the proletariat. His English original is lost and the preface survives only as a translation back from Ukrainian, so these are his ideas rather than his exact words. One reading is that Boxer is that horse. His strength goes into every stone of the windmill and pins one of Napoleon's dogs to the ground in Chapter 7, but he never turns it on the pigs, and by the time he kicks at the van it has gone. In a letter to Dwight Macdonald in December 1946, Orwell said he meant the moral to be that revolutions only bring a radical improvement when the masses are alert and know how to throw out their leaders once those leaders have done their job. The animals at the end of this chapter, relieved by Squealer's story, are the opposite of alert.",
    },
    {
      heading: 'Snowball rewritten, and a Republic with one candidate',
      body: "Snowball's changing history is usually read against Stalin's treatment of Leon Trotsky. Trotsky built the Red Army and led it to victory in the Russian Civil War; after losing the struggle with Stalin he was expelled from the party in 1927 and deported from the Soviet Union in 1929. In the Moscow show trials of 1936 to 1938, defendants made forced confessions, many under torture, to invented plots said to have been directed by Trotsky from exile, and the last trial alleged collusion with German and Japanese agents. Trotsky was condemned in his absence. The official Short Course history of the party, published on 1 October 1938, presented him and Stalin's other old rivals as having opposed Lenin from the beginning, and he was written out of official history. Snowball's journey from Animal Hero to leader of the human forces can be read as following the same path. The one-candidate Republic can be read alongside the 1936 Stalin Constitution, which promised universal suffrage and a secret ballot, and the first elections held under it, on 12 December 1937, which allowed only one candidate for each seat. If these readings are right, Orwell does not keep strict historical order: these events belong to the 1930s, while Moses's return in the same chapter points to 1943.",
    },
    {
      heading: 'Equal rations, equal pay and the model worker',
      body: "Squealer's claim that too much equality would break the principles of Animalism can be read alongside a real reversal. In a speech on 23 June 1931, Stalin told a conference of business executives that wage equalisation must be abolished, that pay should follow the work done rather than need, and that anyone drawing up wage scales on the principle of wage equalisation was breaking with Marxism and Leninism. In both cases equality is declared a betrayal of the ideology that promised it. Boxer, meanwhile, has been compared to Alexey Stakhanov, the miner credited on 31 August 1935 with cutting 102 tonnes of coal in 5 hours and 45 minutes, fourteen times his quota, and held up in newspapers and posters as a model for other workers. In 1985 The New York Times printed a story alleging that the Communist Party had arranged the record, with many other miners helping him. One reading is that Boxer, too, is more useful to the regime as an example than as a worker by the end: once he can no longer work, Napoleon holds up his maxims for every animal to adopt.",
    },
    {
      heading: 'Moses and the Church in wartime',
      body: "Moses's return is usually read as Stalin's wartime turn towards the Russian Orthodox Church. The Soviet state had persecuted the Church from its first years: a League of Militant Atheists was founded in 1925, and by 1941 only 500 churches remained open, out of about 54,000 before the First World War. After Germany invaded in 1941, Stalin needed the Church's moral and patriotic support for the war. In the early hours of 5 September 1943 he met its three senior leaders and promised concessions in return for their loyalty, and on 8 September a council of bishops elected Metropolitan Sergius Patriarch of Moscow. Orwell wrote Animal Farm between November 1943 and February 1944, so this was recent news. The pigs' behaviour fits the reading: they call Moses's paradise a lie, yet keep him on the farm, idle and paid in beer, while a story of rest after death helps hungry animals keep working.",
    },
  ],

  structure:
    "Chapter 9 is the novella's emotional climax and the last chapter before the leap of years that opens Chapter 10. It is built in two movements. For the first half of its length the narrator summarises nearly a year in a dry, reporting voice: rations, piglets, barley, parades, a Republic, the return of Moses. Time passes quickly, Squealer's arguments are reported rather than heard, and apart from Moses's sermon there is little direct speech. When Boxer falls the pace slows to minutes and the chapter turns to scene, with dialogue, a chase and one short sentence to end it. Then Squealer's account undoes what the animals saw, and the chapter closes not on grief but on a crate delivered to the farmhouse. Two echoes tie it to the rest of the book: Old Major's warning about the knacker in Chapter 1 comes true, and the line about working like slaves repeats Chapter 6.",

  vocabulary: [
    {
      term: 'Superannuated',
      meaning:
        'Too old to go on working, and so retired, usually with a pension. The grazing-ground in the large pasture is rumoured to be for superannuated animals; by Chapter 10 the talk of it has long since been dropped.',
    },
    {
      term: 'Readjustment',
      meaning:
        "A small change made to put something right. Squealer's word for a cut in rations: a euphemism that makes a loss sound like a correction.",
    },
    {
      term: 'Piebald',
      meaning:
        "Marked with patches of two colours. Used of the thirty-one young pigs, just before the narrator's dry hint about who their father is.",
    },
    {
      term: 'Poultice',
      meaning:
        'A soft, warm mass of herbs or other material pressed on to a wound or sore to ease it. Clover makes them for Boxer by chewing herbs.',
    },
    {
      term: 'Precincts',
      meaning:
        'The area inside the boundaries of a place. The Spontaneous Demonstrations march round the precincts of the farm.',
    },
    {
      term: 'Spontaneous Demonstration',
      meaning:
        "A weekly march Napoleon orders to celebrate the farm's struggles and triumphs. Spontaneous means unplanned and unprompted, so a demonstration held every week on the leader's orders cannot be what its name says.",
    },
    {
      term: 'Complicity',
      meaning:
        "Involvement with someone else in doing wrong. The new documents are said to reveal more of Snowball's complicity with Jones.",
    },
    {
      term: 'Stratagem',
      meaning:
        'A trick or scheme to outwit an enemy. The animals had been told Snowball tried to lose the Battle of the Cowshed by a stratagem; now they are told he fought openly for Jones.',
    },
    {
      term: 'Gill',
      meaning:
        'A small measure of liquid, a quarter of an imperial pint. Moses is paid a gill of beer a day, a small wage for saying what the pigs call lies.',
    },
    {
      term: 'Knacker',
      meaning:
        'Someone who buys worn-out horses and slaughters them for their meat, hides and bones. The lettering on the van names one, the fate Old Major warned Boxer of in Chapter 1.',
    },
    {
      term: 'Demeanour',
      meaning:
        "The way someone behaves and looks. Squealer's demeanour changes in a moment from tearful grief to darting suspicion.",
    },
    {
      term: 'Interment',
      meaning:
        "Burial. Napoleon says Boxer's remains could not be brought back for interment on the farm, so there is no body for anyone to see.",
    },
  ],

  examQuestion: {
    question:
      'Starting with Chapter 9, explore how Orwell presents the ways the pigs use stories and lies to keep the other animals working. Write about Chapter 9 and about the novella as a whole. (A GCSE-style question.)',
    guidance: [
      'Open with an argument, not a list. For example: in Chapter 9 stories do the work the dogs did in Chapter 7, keeping hungry animals loyal, and the fate of Boxer shows what that loyalty costs.',
      "Begin with Squealer's figures and his “readjustment”. Link back to his first defence of privilege in Chapter 3, when the milk and apples went to the pigs, and show how the lies have grown from small excuses to a whole false picture of the farm.",
      "Trace the rewriting of Snowball: his real courage at the Battle of the Cowshed in Chapter 4, Squealer's hint in Chapter 5 that his part was “much exaggerated”, the claim in Chapter 7 that he tried to get the animals defeated, the claim in Chapter 8 that his medal was a legend he spread himself, and the leader of the human forces here. Show that each version can go further because the animals only “thought they remembered”.",
      "Use Moses to show that comfort controls as well as fear: the pigs call Sugarcandy Mountain a lie, yet pay him to preach. One sentence of context on Stalin and the Church in 1943 is enough before you return to Orwell's methods.",
      "Make Boxer's removal the centre of the essay. Analyse the lettering on the van, Squealer's explanation and the last words he reports, and show how Boxer's loyalty is turned into a story that keeps the others working.",
      "Reach across the novella: Old Major's warning about the knacker in Chapter 1, Boxer's two maxims from Chapters 3 and 5, and Chapter 10, where almost nobody is left who remembers enough to compare the present with the past.",
      "Conclude with Orwell's purpose: the revolution is betrayed not only by force but by stories the ruled are willing to believe. His letter to Dwight Macdonald, which puts the moral in the masses staying alert, lets you argue that he wanted readers to be more alert than the animals.",
    ],
    tips: [
      'Keep quotations short and build them into your own sentences. A single word such as “readjustment” can carry a paragraph of analysis.',
      "For every story in the chapter, say who tells it and who benefits. The narrator often reports the pigs' claims without correcting them, which leaves the judgement to you, so point that out.",
      'Treat the sale of Boxer as what the text implies, not what it states. Saying that Orwell invites the reader to conclude it is more precise than saying the novella tells us so.',
      'Use context only where it sharpens a point about the text, and present it as a reading: Moses is usually read as the Church, which is different from saying Orwell tells us so.',
    ],
  },

  quiz: [
    {
      question: 'What word does Squealer always use for the cut in rations?',
      options: ['A reduction', 'A readjustment', 'A sacrifice', 'A shortage'],
      answer: 1,
      explanation:
        'The narrator notes that Squealer always called it a readjustment, never a reduction. The euphemism makes a loss sound like a sensible correction.',
    },
    {
      question: 'Whose rations are not cut during the hard winter?',
      options: [
        'The horses and the cows',
        'The hens and the geese',
        'The sheep and the cats',
        'The pigs and the dogs',
      ],
      answer: 3,
      explanation:
        'All rations are reduced except those of the pigs and the dogs: the rulers and the enforcers who keep them in power.',
    },
    {
      question: 'How does Napoleon become President when Animal Farm is proclaimed a Republic?',
      options: [
        'He is the only candidate and is elected unanimously',
        'He defeats Squealer in a close vote',
        'The dogs choose him at a Sunday Meeting',
        'He declares himself President without any vote',
      ],
      answer: 0,
      explanation:
        'There is only one candidate, Napoleon, and he is elected unanimously. The form of an election remains, with no choice inside it.',
    },
    {
      question: 'What do the documents said to be discovered in April claim about Snowball?',
      options: [
        'He had hidden in the cowshed during the Battle of the Cowshed',
        "He had sold the farm's timber to Mr Frederick in secret",
        'He had led the human forces at the Battle of the Cowshed',
        'He had broken into the store-shed to steal the corn',
      ],
      answer: 2,
      explanation:
        "Snowball is now said to have charged into battle as the leader of the human forces, shouting “Long live Humanity!”, and the wounds on his back are credited to Napoleon's teeth. Each rewrite goes further than the last.",
    },
    {
      question: 'How do the pigs treat Moses when he returns?',
      options: [
        'They drive him off the farm and forbid him to return',
        'They make him work in the quarry like the others',
        'They call his stories lies but let him stay, idle, with a gill of beer a day',
        'They give him charge of the young pigs in the farmhouse',
      ],
      answer: 2,
      explanation:
        'The pigs declare his stories about Sugarcandy Mountain to be lies, yet allow him to remain without working and pay him in beer, which suggests his preaching is useful to them.',
    },
    {
      question: 'What does Boxer plan to do when he retires?',
      options: [
        'Learn the remaining twenty-two letters of the alphabet',
        'Help Clover look after the young animals',
        'Guard the windmill against Frederick at night',
        'Write a new song to replace Beasts of England',
      ],
      answer: 0,
      explanation:
        'Boxer could never get beyond the letter D in Chapter 3, so twenty-two letters remain. His dream of rest and learning makes his fate harder to read.',
    },
    {
      question: 'Who reads out the whole of the lettering on the side of the van?',
      options: ['Muriel', 'Clover', 'Squealer', 'Benjamin'],
      answer: 3,
      explanation:
        'Muriel begins to spell the words out, but Benjamin pushes her aside and reads them in a deadly silence. The animal who could always read acts at last, too late.',
    },
    {
      question: 'How does Squealer explain the words on the van?',
      options: [
        'The van was borrowed from a farm on the other side of Willingdon',
        'The vet had bought it from the knacker and not yet repainted it',
        'The words were painted on as a joke by the human farmers',
        'Snowball had crept in at night and painted the words on',
      ],
      answer: 1,
      explanation:
        'Squealer claims the vet bought the van second-hand from the knacker and had not yet got round to painting over the lettering. It is an ordinary-sounding story, and the animals are glad to believe it.',
    },
  ],

  sources: [
    {
      label:
        'The held edition, src/data/full-texts/animal-farm.ts (Project Gutenberg Australia transcription, eBook 0100011h): every quotation, and every event in the summary, read from Chapter IX, with Chapters I to VIII and X for the cross-references.',
      url: 'https://gutenberg.net.au/ebooks01/0100011h.html',
    },
    {
      label:
        "The verified whole-text guide, src/data/study-guides/animal-farm.ts: character and theme names, the Chapter 9 timeline moment, and the note that Clover's cry differs between printings.",
    },
    {
      label:
        'Orwell, preface to the Ukrainian edition of Animal Farm (March 1947), at the Orwell Foundation: the boy whipping a huge cart-horse, animals unaware of their strength, the rich exploiting the proletariat; the English original lost, the text a back-translation from Ukrainian.',
      url: 'https://www.orwellfoundation.com/the-orwell-foundation/orwell/essays-and-other-works/preface-to-the-ukrainian-edition-of-animal-farm/',
    },
    {
      label:
        "The New York Review of Books, 11 July 2013, an excerpt of Orwell's letter to Dwight Macdonald of December 1946: the moral that revolutions only bring a radical improvement when the masses are alert and know how to get rid of their leaders once their job is done.",
      url: 'https://www.nybooks.com/articles/2013/07/11/animal-farm-what-orwell-really-meant/',
    },
    {
      label:
        'Wikipedia, Animal Farm: written between November 1943 and February 1944; Boxer compared to Alexey Stakhanov; Moses and Stalin bringing back the Russian Orthodox Church during the war. (The article states that Napoleon sold Boxer to the knacker; this guide presents that as the reading the novella implies.)',
      url: 'https://en.wikipedia.org/wiki/Animal_Farm',
    },
    {
      label:
        'Wikipedia, Leon Trotsky: built the Red Army and led it to victory in the civil war; expelled from the party in 1927, deported in 1929; sentenced to death in absentia at the Moscow show trials in 1936; written out of official history under Stalin.',
      url: 'https://en.wikipedia.org/wiki/Leon_Trotsky',
    },
    {
      label:
        'Wikipedia, Moscow trials: three trials, August 1936, January 1937 and March 1938; nominally directed against Trotskyists, with defendants pressed to admit a Trotsky-led conspiracy; the third alleging collusion with agents of the German and Japanese governments; confessions extracted under torture. (This article does not say Trotsky was tried in his absence; the Trotsky article above says he was sentenced to death in absentia.)',
      url: 'https://en.wikipedia.org/wiki/Moscow_trials',
    },
    {
      label:
        'Wikipedia, History of the Communist Party of the Soviet Union (Bolsheviks) (the Short Course): published 1 October 1938; presented Trotsky and other old rivals of Stalin as having opposed Lenin from the beginning.',
      url: 'https://en.wikipedia.org/wiki/History_of_the_Communist_Party_of_the_Soviet_Union_(Bolsheviks)',
    },
    {
      label:
        'Wikipedia, 1936 Constitution of the Soviet Union: adopted 5 December 1936, known as the Stalin Constitution; promised universal direct suffrage and secret voting.',
      url: 'https://en.wikipedia.org/wiki/1936_Constitution_of_the_Soviet_Union',
    },
    {
      label:
        'Wikipedia, 1937 Soviet Union legislative election: held 12 December 1937, the first under the 1936 Constitution; originally announced as multi-candidate, the announcement reversed halfway through the year.',
      url: 'https://en.wikipedia.org/wiki/1937_Soviet_Union_legislative_election',
    },
    {
      label:
        'Wikipedia, Elections in the Soviet Union: between 1936 and 1989 voters were given a single, party-approved candidate, the only option on the ballot, and could vote against the only candidate only by spoiling the ballot.',
      url: 'https://en.wikipedia.org/wiki/Elections_in_the_Soviet_Union',
    },
    {
      label:
        'Stalin, New Conditions, New Tasks in Economic Construction, speech at a conference of business executives, 23 June 1931 (Marxists Internet Archive): wage equalisation to be abolished; pay by work performed, not needs; equal-pay wage scales a break with Marxism and Leninism.',
      url: 'https://www.marxists.org/reference/archive/stalin/works/1931/06/23.htm',
    },
    {
      label:
        'Wikipedia, Alexei Stakhanov: reported on 31 August 1935 to have mined 102 tonnes of coal in 5 hours and 45 minutes, fourteen times his quota; held up in newspapers and posters as a model; in 1985 the New York Times printed a story alleging that the Party had arranged the record, with many other miners helping.',
      url: 'https://en.wikipedia.org/wiki/Alexei_Stakhanov',
    },
    {
      label:
        "Wikipedia, Patriarch Sergius of Moscow: Stalin met the three chief hierarchs of the Church in the early hours of 5 September 1943 and promised concessions for their loyalty; Sergius elected Patriarch on 8 September 1943; the German invasion of 1941 made Stalin need the Church's moral and patriotic support.",
      url: 'https://en.wikipedia.org/wiki/Patriarch_Sergius_of_Moscow',
    },
    {
      label:
        'Wikipedia, Religion in the Soviet Union: the League of Militant Atheists founded in 1925; by 1941 only 500 churches open out of about 54,000 before the First World War.',
      url: 'https://en.wikipedia.org/wiki/Religion_in_the_Soviet_Union',
    },
    {
      label: 'Wikipedia, Gill (unit): an imperial gill is a quarter of an imperial pint.',
      url: 'https://en.wikipedia.org/wiki/Gill_(unit)',
    },
  ],
}
