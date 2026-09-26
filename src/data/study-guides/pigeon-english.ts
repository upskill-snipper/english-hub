import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Pigeon English, Stephen Kelman (2011). A supplement to the existing guide at
 * /revision/texts/pigeon-english, which keeps its context and themes.
 *
 * THE SELF-AUDIT, redone 26 September 2026 when this file was fact-checked.
 * The primary page was graded section by section against the rubric.
 * - Context (four developed paragraphs) and themes (six themes of seventy words
 *   or more) are rendered and substantive, so they stay native. Both carry
 *   errors that belong to that page and are reported for fixing there: context
 *   says the novel was "longlisted" for the Guardian First Book Award (it was
 *   shortlisted), and claims Kelman "consulted Ghanaian readers during
 *   drafting", which no source supports (he wrote that he absorbed the sights
 *   and sounds of the Ghanaian community where he lived); themes has Harri and
 *   Dean swear "blood brothers", which no source mentions.
 * - The overview was graded NOT substantive, because too much of it is not
 *   this novel: it calls the dead boy "a boy from Harri's school" (the novel's
 *   second page says he went to a different school), invents "a chewing-gum
 *   trial", "a 'blood brothers' ritual" and "a long sequence at a local fair",
 *   and ends the book "with the pigeon rising above the estate in a final
 *   italicised flight", when the novel ends on Harri's own last thoughts of
 *   Agnes. The ending is the most examined fact in the book, so the overview is
 *   written here.
 * - Characters, key quotations and everything after them are written here, as
 *   before: the page's character list makes "Jordan (Dean)" one person, names
 *   Mamma "Grace" (GradeSaver: her name is never given), and says Auntie Sonia
 *   "files off" fingerprints she burned; its seven quotations are unverifiable
 *   ("I just wanted to help", "I'm not even scared, I promise", "Hutious means
 *   scary, in case you didn't know", "Advantage!" and others appear in no
 *   source), and it has no extract, language, structure, vocabulary, exam or
 *   model-answer section.
 *
 * WHAT THE FACT-CHECK CHANGED. The first version of this file (25 September)
 * could not check the novel's opening, and so refused to call "You could see
 * the blood. It was darker than you thought." the first line. It is: two
 * printings of the opening pages, the Guardian news desk's 2012 extract and
 * NPR's excerpt, both begin with it, and LitCharts prints the same two
 * sentences in the final passage, where they return as Harri dies (the last
 * words of the novel are about Agnes, not the blood). The fact-check also
 * corrected: the setting of Auntie Sonia's confession (her flat, not the
 * Opokus'); the context of "In England nobody helps you if you fall over" (Mr
 * Frimpong's complaint at church after the robbery, not Harri's own
 * experience); an invented detail (Lydia tearing up a carnival costume); the
 * order of the April moments; and several character claims that only one
 * source made or that sources disputed.
 *
 * A SECOND FACT-CHECK (26 September) corrected what the first left wrong.
 * - June was out of order. LitCharts' June summary, which follows the page
 *   order, puts Agnes's fever and Harri's offer of his life (page 171) BEFORE
 *   the canteen fingerprints and Killa's craft-knife threat, which come after
 *   Mamma bans Jordan. The stake-out, the fever and Killa's fingerprints are
 *   now three moments in that order.
 * - Harri's part in the robbery of Mr Frimpong. GradeSaver says the mission
 *   was to "stand by"; LitCharts says Harri was to make off with "the prize",
 *   was horrified to see the target, and later that Mr Frimpong did not notice
 *   "it was Harri who knocked him over". The guide no longer says Harri merely
 *   watched: he took part in a robbery whose victim turned out to be Mr
 *   Frimpong, and ran.
 * - The overview said Harri failed the fire-alarm dare by "setting off" the
 *   alarm. He failed because he could not break the glass.
 * - The school race is won before the last day of term, not on it, and the
 *   sources disagree about who kisses whom (LitCharts: Poppy kisses him;
 *   GradeSaver: he kisses her), so the guide says they kiss.
 * - "Fingerprints are just for feeling with" was placed at "the opening of the
 *   July section, after a science lesson". No source gives either detail;
 *   GradeSaver says only that Harri learns what fingerprints are for.
 * - "Five months, one school term": March to July spans the Easter holiday and
 *   two terms. The playground fire is put out by firefighters, which the
 *   timeline now says.
 *
 * THE NOVEL IS IN COPYRIGHT and no licensed copy is held. Quotations were taken
 * only from published printings of the text: the opening extract (pages 3 to
 * 17), cross-checked against NPR's excerpt wherever the two overlap; the
 * extract Kelman published in the Guardian in November 2011; reviews that quote
 * it; and LitCharts' quotations page. The two March quotations found only in
 * the Guardian extract ("I was the dead boy because X-Fire picked me." and "I'm
 * the man of the house until Papa escapes.") come from an OCR text; every
 * passage of it that NPR also prints matched NPR word for word.
 *
 * WHO STABS HARRI is not stated, on purpose. GradeSaver says Jordan, BookRags
 * says Killa, and LitCharts says only "a boy". Sources that disagree about the
 * single most examined fact in the book are a reason to say less, and to teach
 * students to argue from the clues.
 *
 * Page numbers are deliberately not given: the extract's pagination (and
 * LitCharts', which matches it) may not be the Bloomsbury paperback's. Every
 * moment is located by month instead, which works in any edition.
 */
export const guide: StudyGuide = {
  slug: 'pigeon-english',
  title: 'Pigeon English',
  author: 'Stephen Kelman',
  form: 'novel',
  scope:
    'The whole novel (Bloomsbury, 2011), told in five sections named after the months March to July. It is a modern prose text for AQA GCSE English Literature (8702), examined in Section A of Paper 2. All AQA Literature papers are closed book, and in this section you answer one essay question from a choice of two, with no extract printed, so you need the whole novel and its key moments in your head.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Stephen Kelman 2011. Published by Bloomsbury Publishing. Short quotations are used for the purposes of criticism and review.',
  },
  workLength: {
    words: 68000,
    basis:
      'Estimated, not counted: no licensed copy is held. The published opening extract runs to about 3,960 words over pages 3 to 17, roughly 264 words a page, and the edition it comes from ends on page 263 (LitCharts cites the same pagination: the Copenhagen House passage is on page 5 in both). That gives about 65,000 to 70,000 words; the Bloomsbury hardback is 288 pages. Any length above 3,000 words puts the novel under the long-work limit, so the estimate cannot loosen the quotation limits.',
  },

  native: {
    context: '/revision/texts/pigeon-english',
    themes: '/revision/texts/pigeon-english',
  },

  overview: {
    summary: [
      'Pigeon English is narrated by Harrison Opoku, known as Harri, an eleven-year-old in Year 7 who has come to London from Ghana with his mother and his older sister, Lydia, about two months before the story begins. His father, his baby sister Agnes and Grandma Ama are still in Ghana, waiting until the family can afford to bring them over. The Opokus live on the ninth floor of Copenhagen House, one of three tower blocks on the fictional Dell Farm estate. The novel is divided into five sections named after the months from March to July, and it is broken by short passages in italics in the voice of a pigeon that Harri comes to believe is watching over him.',
      'The novel opens outside Chicken Joe’s, a fast-food shop, where a boy a few years older than Harri, from a different school, has been stabbed to death. Harri barely knew him but decides he was a friend, and with his classmate Dean, a devoted watcher of CSI, he turns detective. The boys search for the murder weapon, lift fingerprints with sticky tape, interview suspects in a pub and stake out a food van. Around the investigation Kelman builds Harri’s everyday life: school rules and playground games, Haribo and Chelsea, church, his friendship with Poppy Morgan, and phone calls home to Ghana.',
      'The danger grows while the comedy continues. The Dell Farm Crew, led by X-Fire, try to recruit Harri with dares: he fails the first, when he cannot break the glass of the school fire alarm, and runs from the second, the robbery of Mr Frimpong from his church. Lydia is drawn in through her friend Miquita, who has her wash a bag of bloodstained clothes and later burns her with hair straighteners. Auntie Sonia, who has burned off her fingerprints so that she cannot be deported, is beaten by her partner, Julius. The boys’ evidence points more and more towards Killa, who threatens Harri with a knife. In July the Crew corner Harri and Dean at the basketball court until Lydia gets them away, and a classmate, Connor Green, says he saw Killa running from the scene of the killing with the knife.',
      'Harri wins the school race, and on the last day of term he and Poppy kiss. He runs home through the rain shouting his love for Poppy, the pigeons and the trees he passes. Near home a boy jumps out and stabs him. As he lies on the ground the pigeon speaks to him, and his last thoughts are of Agnes, whose face he cannot picture. The sentences that opened the novel return, word for word, as he dies. Published study guides disagree about who the attacker is, so an exam answer should weigh the clues rather than state a name as fact.',
    ],
  },

  characters: [
    {
      name: 'Harri',
      role: 'Harrison Opoku, the narrator: eleven, in Year 7, newly arrived in London from Accra, Ghana',
      body: 'Harri lives with Mamma and his older sister Lydia on the ninth floor of Copenhagen House, on the Dell Farm estate. He supports Chelsea, collects facts about animals, wants to try every kind of Haribo there is, and is proud of being the fastest runner in Year 7. After a boy is stabbed outside Chicken Joe’s he turns detective with his friend Dean. Kelman told the Evening Standard, “I wanted him to be the epitome of good”, and Harri is kind, loyal and hopeful. But the novel does not make him a saint: he is tempted by the Dell Farm Crew, tries their fire-alarm dare, and, stung by mockery of the trainers he has decorated himself, agrees to a second mission, a street robbery whose victim turns out to be an old man from his own church. The most convincing reading is that his goodness is real precisely because it is tested, and that what destroys him is not a flaw in him but a place that gives a good child so little protection.',
    },
    {
      name: 'The pigeon',
      role: 'The second narrator, who speaks in short italic passages',
      body: 'A pigeon walks through the dead boy’s blood in the novel’s first scene. Harri also tells Papa how one flew into the Opokus’ flat: he caught it with flour, let it go and made it his special pigeon, and he comes to believe it is watching over him. In its own passages the pigeon comments on humans, on other birds and on grief, in a formal, reflective voice quite unlike Harri’s. It tries to intervene: in May it walks past with bread during the robbery of Mr Frimpong, trying to turn Harri away, and in the final pages it speaks to him as he lies wounded. Critics disagreed sharply. The Guardian’s reviewer called it “one of the novel’s few false steps”, the Observer’s thought the pigeon passages the novel’s weakest, and the Spectator’s wanted them cut. Kelman explained his choice to the BBC: “The pigeon is ubiquitous”, a bird some see as vermin and others as benevolent. Whether you read it as a guardian angel, as Harri’s own imagination, or as an outsider’s view of the estate, you need to argue for a reading, not just name one.',
    },
    {
      name: 'Lydia',
      role: 'Harri’s older sister',
      body: 'Lydia teases and bosses Harri and fiercely protects him. Through her friend Miquita she is pulled towards the Crew: she is given a bag of bloodstained clothes to wash at the laundrette, and later Miquita burns her with hair straighteners while demanding to know whether she is with the Crew or against them. She warns Harri to keep away from the gang and to find the right friends, yet insists that her own situation is different because she is a girl. On her birthday, homesick, she cries over a parcel from Ghana, and Harri cheers her by taking her to press their footprints into wet cement. In July she films the Crew’s attack at the basketball court and gets Harri and Dean away. She is, in effect, a child doing a parent’s job.',
    },
    {
      name: 'Mamma',
      role: 'Harri’s mother, a midwife',
      body: 'Mamma works long hospital shifts delivering babies and is devoutly Christian: she tells Harri that CCTV cameras are another way for God to watch you, and, as Harri notices, she prays hardest when the news reports a child’s death. She keeps hard truths from her children to protect them. When a pregnant woman at work abuses her racially and asks for a different midwife, she tells her sister, but gives Harri a harmless invented meaning for the insult. She bans Harri from seeing Jordan after catching the boys throwing stones at buses. Harri also notices that she pays money to Julius, which is not rent. The Observer’s reviewer saw her as forced into moral compromise by the struggle to give her children a better life. A fair reading is that her absences are not neglect but the price of keeping the family afloat, and that the novel makes the reader feel both the love and the cost.',
    },
    {
      name: 'Agnes',
      role: 'Harri’s baby sister, still in Ghana',
      body: 'Agnes could not come to London because Mamma has to work all the time, so Grandma Ama looks after her. For Harri she is a voice on the phone, blowing spit bubbles, and a picture of the future: the family is saving to bring her, Papa and their grandmother over. When she has a fever in June, Harri decides God is punishing him and offers his own life for hers. She recovers. As Harri lies dying, his last thoughts are of her, and of trying and failing to picture her face.',
    },
    {
      name: 'Papa',
      role: 'Harri’s father, still in Ghana',
      body: 'Papa appears only on the phone and in Harri’s memories, but he is clearly warm and loving: Harri loves it when Papa’s voice is smiling. He is selling everything from his shop to pay for the tickets that will reunite the family. He has given Harri a duty, which Harri repeats with pride: “I’m the man of the house until Papa escapes.” Harri takes it seriously, even imagining chasing invaders away. One reading is that, without a father nearby, the older boys of the estate become the nearest models of how to be a man, which is part of the Crew’s pull.',
    },
    {
      name: 'Auntie Sonia',
      role: 'Mamma’s sister, an undocumented migrant in London',
      body: 'Generous and well travelled, Auntie Sonia brings gifts: a football and a CD in April, and in June a remote-controlled car for Harri and a camera phone for Lydia. She has burned her own fingertips on a stove so that she has no fingerprints and cannot be identified and deported, which Harri finds both sickening and fascinating. Her partner, Julius, is violent: in June she has a broken nose and an unconvincing explanation, and after he breaks her foot she decides to escape him and leave London. Her story shows the novel’s adults as trapped as its children, and fingerprints, which Harri and Dean hunt as evidence, become for her something to destroy.',
    },
    {
      name: 'Julius',
      role: 'Auntie Sonia’s partner: violent and feared',
      body: 'Julius carries a baseball bat he calls the Persuader and uses it on people who are late repaying their debts; he also sells fake visas and abuses Auntie Sonia. He is adult violence inside the family, a mirror of the gang violence outside it. Yet in April he tells Harri to “stay good for as long as you can”, which suggests a man who knows exactly what he has become. Kelman gives even Julius a glimpse of how a child turns into him.',
    },
    {
      name: 'Dean',
      role: 'Harri’s best friend at school and his partner in detection',
      body: 'Dean has red hair and is a devoted fan of CSI (Harri trusts him because he has seen all the shows), and he supplies the investigation’s methods: fingerprints lifted with sticky tape, stake-outs, suspect descriptions in police language. The Crew take money from him to let him into the canteen, and later try to rob him of his money and trainers. He is loyal and funny, and as out of his depth as Harri. His television expertise is both the novel’s running joke and its warning, because the methods of a crime drama are no protection against real knives.',
    },
    {
      name: 'Jordan',
      role: 'Harri’s friend in Copenhagen House, expelled from school',
      body: 'Jordan is with Harri at the start, daring him to touch the dead boy’s blood. He has been expelled for kicking a teacher, steals for the Crew in return for cigarettes and a week without being threatened, brags about his crimes and carries what he calls a war knife. He pushes Harri into smashing bottles and throwing stones at buses. When Mamma catches them and bans the friendship, Jordan spits at Harri, and the two become enemies; later someone scratches DEAD into the Opokus’ front door, and Harri suspects Jordan. One published guide names Jordan as the boy who stabs Harri at the end; another names Killa. Jordan is the novel’s picture of a boy Harri’s age who has already gone the way Harri is being pulled.',
    },
    {
      name: 'Poppy Morgan',
      role: 'A girl in Harri’s class, and his first girlfriend',
      body: 'Poppy is blonde, and in an art lesson Harri paints with yellow because of her hair. After she sends him a note asking whether he likes her, they start going out: they hold hands, share a love of Michael Jackson and write their initials on a desk. On the last day of term they kiss. Poppy represents the ordinary childhood Harri ought to be having, which is why the novel places its happiest moment with her immediately before its darkest.',
    },
    {
      name: 'X-Fire',
      role: 'Leader of the Dell Farm Crew',
      body: 'X-Fire leads the Crew because, Harri explains, he is the best at basketball, has stabbed the most people and has stolen the most. In March he uses Harri as the victim in a demonstration of how to stab someone, then takes Harri’s bag and offers him a job. He sets the fire-alarm dare, leads the robbery of Mr Frimpong, warns Harri with a finger shaped like a gun, and burns the dead boy’s photograph at the basketball court. He is menacing, but Kelman insisted the gang were not simple villains: “At heart they are just scared kids trying to survive.” A strong answer uses that tension rather than choosing a side.',
    },
    {
      name: 'Killa',
      role: 'A member of the Dell Farm Crew, and Harri’s chief suspect',
      body: 'Killa is a Year 11 boy at Harri’s school who stays silent while the rest of the Crew boast about stabbings. He falls off his bike beside the dead boy’s funeral procession, breaks Harri’s binoculars, and has his fingerprints taken by Harri and Dean, after which he drags Harri into the school toilets and threatens him with a knife. When the dead boy’s photograph falls at the basketball court, Killa is visibly shaken. Late in July Connor Green says he saw Killa running from the scene of the killing with the knife. The novel never shows an arrest, and the evidence against him reaches the reader through children, one of them a known trickster.',
    },
    {
      name: 'Miquita',
      role: 'Lydia’s friend and Killa’s girlfriend',
      body: 'Miquita is fiercely loyal to the Crew and increasingly violent. She says the dead boy’s death was his own fault for fronting, gives Lydia the bloodstained clothes to wash, burns Lydia with hair straighteners, and attacks Chanelle, apparently to stop her telling about Killa. She also harasses Harri sexually, which he reports without the words to understand it. She shows that the Crew’s reach extends to girls, and that loyalty to it is enforced on friends as well as enemies.',
    },
    {
      name: 'The dead boy',
      role: 'The murdered boy, never named',
      body: 'A boy a few years older than Harri, from a different school, stabbed to death outside Chicken Joe’s just before the novel begins. Harri admits they were only half friends, but the boy supported Chelsea, was brilliant at basketball, and once told older boys to leave Harri alone when they laughed at his short trousers. Harri decides he was a friend even though the boy never knew it. In July Harri remembers the Crew turning on the dead boy at the basketball court after he showed up Killa, a memory that points the reader towards a motive. Keeping him nameless makes him every such boy, and prepares the reader for the moment Harri takes his place.',
    },
    {
      name: 'Connor Green',
      role: 'A boy in Harri’s class',
      body: 'On Harri’s first day Connor plays a crude word trick on him, and Harri draws the lesson at once: “Connor Green is always making tricks.” Near the end of term Connor says he was riding past Chicken Joe’s and saw Killa running from the scene of the killing with the knife. That the novel’s one eyewitness is the boy whose word Harri learned to doubt on his first day is a bleak irony: the truth arrives from the least trusted mouth, and the novel ends before anyone acts on it.',
    },
    {
      name: 'Mr Frimpong',
      role: 'The oldest member of Harri’s church',
      body: 'Mr Frimpong is so devout that he is one of only two people Harri knows who can sing every church song without looking at the words. In May he is the target of the street robbery that is meant to be Harri’s second mission for the Crew: he is knocked to the ground, his shopping is stamped on and X-Fire demands his wallet, and Harri runs. At church afterwards Mr Frimpong complains that in England nobody helps a stranger in trouble. The victim is someone from Harri’s own church, which is what makes the crime impossible for him to dress up as a game.',
    },
    {
      name: 'Terry Takeaway',
      role: 'A local thief and drinker, and the owner of Asbo the dog',
      body: 'Terry got his nickname because he is always stealing things, and he offers to sell the stolen goods to Harri and Dean even though they have no money. He drinks beer for breakfast, which is why Harri calls him dey touch. He is a comic figure rather than a frightening one, and his dog Asbo is friendly. Harri and Dean try to train Asbo to smell evil, and Asbo promptly jumps at Killa, which the boys take as proof. Terry shows the estate’s adults as damaged but not always dangerous.',
    },
    {
      name: 'Altaf',
      role: 'A Somali boy in Harri’s year',
      body: 'Altaf is quiet and has few friends, partly because of prejudice against Somalis; Harri himself at first repeats the playground claim that Somalis are pirates. The two boys, both taken out of religious education by their mothers, bond over superheroes, and Altaf explains his love of them: his father was killed in the war in Somalia, and with powers like Spider-Man’s he could have saved him. Their friendship shows Harri learning past a stereotype, and the novel’s interest in which kinds of power a powerless child can dream of.',
    },
  ],

  keyQuotes: [
    {
      text: 'You could see the blood. It was darker than you thought.',
      where: 'Harri: the novel’s opening words in March, repeated as he lies dying in July',
      analysis:
        'The novel begins with Harri staring at the dead boy’s blood outside Chicken Joe’s, and Kelman returns to these exact sentences in its final pages, when the blood is Harri’s own. The second person “you” turns the reader into a witness, and “darker than you thought” admits that the reality of violence is worse than a child, or a comfortable reader, had imagined. The repetition makes the novel a circle: the witness of the first page is the victim of the last.',
    },
    {
      text: "The dead boy's mamma was guarding the blood.",
      where: 'Harri, March: the opening scene outside Chicken Joe’s',
      analysis:
        'Mamma is Harri’s own word for his mother, so he sees the dead boy’s mother through his own family. The word “guarding” is exact and strange: she stands over the blood as if it were still her son, refusing to let the rain wash it away. The child notices a gesture an adult narrator might find too painful to describe, and the reader feels the grief through his literal eye.',
    },
    {
      text: 'I just wanted to get away before the dying caught us.',
      where: 'Harri, March: racing Jordan home from the scene',
      analysis:
        'Harri turns death into something that chases you, as if it were a game of tag, and trusts his speed to win it. The child’s phrase “the dying” makes death a thing rather than an event. Running is Harri’s answer to danger throughout the novel, and the ending, when he runs home in joy and is caught, turns this early line into foreshadowing.',
    },
    {
      text: "My flat is on floor 9 out of 14. It's not even hutious",
      where: 'Harri, March: introducing Copenhagen House in the opening pages',
      analysis:
        'The precise numbers are a child’s way of showing pride, and hutious, a Ghanaian word for frightening, is used to reassure. The denial plants the fear it denies. A reader who knows what tower blocks mean in British news hears the irony that Harri cannot, and the whole novel works in that gap between his confidence and our unease.',
    },
    {
      text: "In England there's a hell of different words for everything.",
      where: 'Harri, March: on the English he hears in London',
      analysis:
        'Harri treats language as a delight rather than a barrier, and his own phrase proves his point: “a hell of” is borrowed swearing used as a cheerful intensifier. This is the novel’s title in action, a pidgin made of Ghana, school and the street. Kelman makes the reader learn Harri’s vocabulary as Harri learns London’s, so the reader shares the work of belonging.',
    },
    {
      text: "Who'd chook a boy just to get his Chicken Joe's?",
      where: 'Harri, March: puzzling over the killing',
      analysis:
        'Harri assumes the only possible motive is to steal the boy’s food, which shows how far he is from the Crew’s world of respect, territory and revenge. The question comes straight after his puzzlement that young trees are caged to stop people stealing them, so the killing is filed with the other strange rules of London. The reader, who suspects the truth is worse, feels the gap.',
    },
    {
      text: 'I was the dead boy because X-Fire picked me.',
      where: 'Harri, March: X-Fire demonstrates a stabbing at school',
      analysis:
        'X-Fire uses his fingers as a knife and Harri as the body while the Crew boast about stabbings. Harri reports being chosen almost as if it were an honour, and insists he was not even scared. For the reader it is a rehearsal: in March Harri plays the dead boy in a demonstration, and in July he becomes one. It is the novel’s most chilling piece of foreshadowing.',
    },
    {
      text: "it just gives you a crazy surprise. There's never any blood.",
      where: 'Harri, on the boys at school who chook each other with compasses',
      analysis:
        'Violence has become a playground game, and Harri’s comforting tone shows how normal it seems. The word “never” is a child’s absolute, and the reader, who has already seen the dead boy’s blood outside Chicken Joe’s, knows it is false. The line is dramatic irony in miniature: a game of stabbing that is safe only until it is not.',
    },
    {
      text: "We're proper detectives now. It's a personal mission.",
      where: 'Harri, March: after searching by the river for the murder weapon',
      analysis:
        'The words “proper” and “mission” are borrowed from television and the playground, and they make the investigation sound like a game with rules. But “personal” is sincere: Harri has decided the dead boy was his friend. The line shows Kelman fusing comedy and grief, and the word “mission” will return darkly when the Crew set Harri missions of their own.',
    },
    {
      text: "Some of them are so your friends know what side you're on.",
      where: 'Harri, April: on the rules he has learned at his new school',
      analysis:
        'Among rules about danger and teachers, Harri notes the rules that mark loyalty: follow them, he explains, and your friends will trust you. It is an innocent version of the Crew’s logic, in which everyone must declare a side, and it explains why a child who refuses to belong to anyone becomes a target. Kelman uses the list to show how early the estate teaches its children to think in sides.',
    },
    {
      text: "Then I found out it's because I used the wrong command.",
      where: 'Harri, April: on why nobody passed to him at football',
      analysis:
        'Harri had assumed the other boys hated him; the problem was the words he used to call for the ball. It is a small comic moment with a large point: belonging in London is a matter of codes, and an outsider who does not know them is excluded without anyone intending it. Kelman makes exclusion a language problem that Harri can solve, unlike the ones he cannot.',
    },
    {
      text: "Auntie Sonia hasn't even done anything bad. She's never killed anybody or stolen anything.",
      where: 'Harri, April: after Auntie Sonia explains her burnt fingertips',
      analysis:
        'In the detective game, hiding your fingerprints is what a criminal does, so Harri is baffled that his aunt has destroyed hers. His defence is a list of the only crimes he knows. The innocence of the logic exposes the injustice: a woman with no crime to hide must still erase her identity to stay in Britain.',
    },
    {
      text: 'I just wanted to get your attention, Harri, get you out of another mess.',
      where: 'The pigeon, May: after Harri runs from the robbery of Mr Frimpong',
      analysis:
        'Here the pigeon speaks as a guardian, calm and slightly weary, as if it has done this before. The phrase “another mess” suggests a pattern of danger Harri cannot see. One reading makes the bird a guardian angel; the more interesting one is that it can only distract, not protect, which is exactly what the ending proves.',
    },
    {
      text: 'In England nobody helps you if you fall over.',
      where: 'Harri, May: after Mr Frimpong complains at church that nobody helps a stranger',
      analysis:
        'Harri takes up Mr Frimpong’s complaint and explains it in his own way: people cannot tell whether a fall is real or a trick. The irony is that Harri was there. He was part of the robbery that left Mr Frimpong on the ground, and he ran, so the verdict he passes on England also convicts him, whether or not he sees it. The flat, generalising sentence anticipates the novel’s wider silence, in which a police appeal for witnesses to the dead boy’s killing meets nothing.',
    },
    {
      text: "If Agnes dies I'll just swap places with her. She can have my life.",
      where: 'Harri, June: while Agnes has a fever in Ghana',
      analysis:
        'Harri bargains with God in the plain, practical language of a child swapping cards, and “just” makes the offer sound easy. Agnes recovers, and a month later Harri dies. The novel never says the bargain was kept, but the foreshadowing invites the reader to feel that it was, and to ask what kind of world makes a child think in these terms.',
    },
    {
      text: 'Unknown white male came, bought a burger, went again. No signs of guilt.',
      where: 'Harri, June: the stake-out of the Chips n Tings van',
      analysis:
        'Harri logs a passer-by in the language of a police report, and the borrowed jargon collides comically with the most ordinary event imaginable. The joke has an edge: the boys are playing at the investigation that the adults and the police have failed to carry out, and their game is what will expose them to real danger.',
    },
    {
      text: "Fingerprints are just for feeling with ... They don't really mean anything.",
      where: 'Harri, July: on learning what fingerprints are really for',
      analysis:
        'Fingerprints have meant evidence for Harri and exposure for Auntie Sonia; now he learns their biological purpose, which strips them of both meanings. He goes on to wonder whether, without them, you could be anyone you wanted. The discovery is almost consoling, as if identity were less dangerous than it seemed, but it comes too late to protect anyone.',
    },
    {
      text: "Don't worry, you'll be going home soon.",
      where: 'The pigeon, July: the final pages, as Harri lies wounded',
      analysis:
        'Home has carried two meanings all novel: the flat in Copenhagen House, and Ghana, where the family hopes to be whole again. Here the pigeon uses the word for death, as heaven, the way Harri’s Christian upbringing would understand it. Harri’s reply asks to stay. The gentleness of the voice makes the scene bearable to read and harder to forget.',
    },
  ],

  extracts: [
    {
      title: 'The opening: blood outside Chicken Joe’s',
      where: 'March, the first pages',
      pointer:
        'The first pages of the novel, from “You could see the blood.” to the moment Harri and Jordan race each other home.',
      summary:
        'Harri and his friend Jordan stand at the police line outside Chicken Joe’s, looking at the blood of a boy stabbed there, and Jordan dares Harri to touch it. The dead boy’s mother stands over the blood, and a pigeon walks through it. Harri, who hardly knew the boy, looks at the flowers and the football boots tied to the railings, says a prayer, leaves him a bouncy ball, and then races Jordan home.',
      annotations: [
        {
          phrase: "The dead boy's mamma was guarding the blood.",
          note: 'Harri uses his own family word, mamma, for a stranger’s mother, and “guarding” captures a grief too fierce for an adult narrator to describe so plainly: she will not let the rain take her son’s blood.',
        },
        {
          phrase: 'He walked right in the blood.',
          note: 'The pigeon’s first appearance is in the dead boy’s blood, which ties the bird to death from the opening page. Harri reads sadness into its pink eyes, the first sign that he will turn an ordinary city bird into a companion and a witness.',
        },
        {
          phrase: 'Me and the dead boy were only half friends',
          note: 'An honest, childlike measure of friendship. Harri admits how little he knew the boy, which makes his later insistence that the boy was his friend a choice, an act of loyalty rather than a fact.',
        },
        {
          phrase: 'I just wanted to get away before the dying caught us.',
          note: 'Death becomes a chaser in a playground game, and Harri trusts his speed to escape it. The ending, when he runs home and is caught, makes this the first beat of a pattern.',
        },
      ],
      question:
        'How does Kelman use the opening of Pigeon English to present a child’s response to violent death, and how does the opening prepare for the rest of the novel?',
    },
    {
      title: 'Auntie Sonia’s fingers',
      where: 'April',
      pointer:
        'The April section, when the family visits Auntie Sonia’s flat, after Harri and Dean have hunted for fingerprints with sticky tape. Look for Harri’s explanation that includes “Auntie Sonia burned her fingers to get the fingerprints off.”',
      summary:
        'Harri explains that his aunt has burned away her fingerprints so that, if the police catch her, they cannot send her away. He is sickened and fascinated, asks her to tell him more, and tries to fit it into what the detective game has taught him, where hiding fingerprints is what criminals do. He concludes that she has done nothing wrong, and cannot make the two ideas meet.',
      annotations: [
        {
          phrase: 'Auntie Sonia burned her fingers to get the fingerprints off.',
          note: 'A shocking act reported in a flat, matter-of-fact sentence. The understatement is the point: Harri narrates self-harm forced by fear as if it were an ordinary family fact, which is what it has become.',
        },
        {
          phrase: 'Now she has no fingerprints at all.',
          note: 'Fingerprints are the one thing that makes each person unique, so losing them is a kind of self-erasure. The simple “at all” lets the reader register how complete the loss is before Harri does.',
        },
        {
          phrase: "She's never killed anybody or stolen anything.",
          note: 'Harri’s defence uses the only crimes he knows from the detective game. The childish logic exposes an adult injustice: the law treats a woman with nothing to hide as if she were a criminal.',
        },
      ],
      question:
        'How does Kelman use Auntie Sonia to present the pressures on migrants in Pigeon English? Write about this moment and the novel as a whole.',
    },
    {
      title: 'The last run home',
      where: 'July, the final pages',
      pointer:
        'The last pages of the novel, from “I ran fast. I ran down the hill and through the tunnel.” to the end.',
      summary:
        'On the last day of term Harri is elated: he has won the school race and he and Poppy have kissed. He runs home through the rain, shouting his love for Poppy, for the pigeons and for the trees he passes. Near home a boy jumps out and stabs him. The pigeon speaks to him, telling him not to worry, and his last thoughts turn to his baby sister Agnes.',
      annotations: [
        {
          phrase: 'I ran fast. I ran down the hill and through the tunnel.',
          note: 'Short, driving sentences in the past tense carry Harri’s joy and speed. Running has been his escape all novel, so the rhythm of freedom is also the rhythm that carries him to the attack.',
        },
        {
          phrase: 'Poppy I love you',
          note: 'Harri shouts it aloud, set out like a line of a script. It is the most unguarded moment in the book, and Kelman places it immediately before the violence so that the loss is felt at its fullest.',
        },
        {
          phrase: "Can't I stay here?",
          note: 'Harri’s reply to the pigeon, set out as dialogue. A child’s simple question does more than any description could, and it refuses the comfort the pigeon offers, which is why the ending is so painful.',
        },
      ],
      question:
        'How does Kelman present the ending of Pigeon English, and why do you think he chose to end the novel in this way?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Naive first-person narration and dramatic irony',
      example:
        'Harri on the boys who chook each other with compasses: “it just gives you a crazy surprise. There’s never any blood.”',
      effect:
        'Harri understands less than the reader, so every reassurance he offers makes us more afraid for him. Kelman uses the gap to show violence from inside a child’s mind without ever breaking the child’s perspective, and to make the reader do the adult understanding that nobody around Harri is doing.',
    },
    {
      technique: 'Code-switching and a hybrid vocabulary',
      example:
        'Ghanaian words such as asweh and hutious beside London slang such as proper and dope-fine: “My flat is on floor 9 out of 14. It’s not even hutious”',
      effect:
        'Harri’s English is a pidgin assembled from home, school and the street, which is the title’s pun. Kelman lets Harri explain some words in brackets, as a child explaining to a friend, and leaves others to context, so the reader learns them as Harri learns London. The voice is a record of a migration in progress and a claim that Harri’s identity is rich rather than lacking.',
    },
    {
      technique: 'Borrowed register: the language of television police',
      example:
        '“Unknown white male came, bought a burger, went again. No signs of guilt.” and “We’re proper detectives now.”',
      effect:
        'The mismatch between official jargon and trivial events is comic, and it shows how the boys’ idea of justice comes from CSI. It also sharpens the novel’s criticism: children are playing at the investigation adults have abandoned, with methods that cannot protect them.',
    },
    {
      technique: 'Lists and juxtaposition',
      example:
        'The “Signs of guilt include:” list, and the list of wars that begins “Kids vs Teachers”.',
      effect:
        'Lists let Harri impose order on a confusing world, and they place the trivial beside the serious without ranking them. The effect is funny and disturbing at once, because a child who files a gang feud beside a playground rivalry cannot tell which one will kill him.',
    },
    {
      technique: 'Comic repetition and Ghanaian idiom',
      example:
        'Asbo the dog, choking on lager: “Every sneeze made a new sneeze.” and “He couldn’t stop for donkey hours.”',
      effect:
        'The repetition makes the sentence sneeze, and “donkey hours”, a Ghanaian expression for a very long time, turns a grim scene of a drinker’s dog into slapstick. Kelman’s comedy is not relief from the darkness but part of his realism: children laugh at what surrounds them.',
    },
    {
      technique: 'Contrasting register in the pigeon’s voice',
      example:
        'The pigeon speaks of “a cheap act of confederacy against the drip-dripping of ill-captured sand”.',
      effect:
        'Abstract nouns, formal syntax and elaborate imagery could not be further from Harri’s voice. The contrast marks the pigeon as a different order of consciousness, older and sadder. Whether that elevation works was disputed by reviewers, and a strong answer can take a side.',
    },
    {
      technique: 'Understatement',
      example: 'Auntie Sonia’s burnt fingertips: “Now she has no fingerprints at all.”',
      effect:
        'Harri reports horrors in the same flat tone as sweets and football. The understatement forces the reader to supply the horror, and it shows how thoroughly the estate has normalised what should be shocking.',
    },
    {
      technique: 'Foreshadowing',
      example:
        'In March, “I was the dead boy because X-Fire picked me.”; in June, “If Agnes dies I’ll just swap places with her.”',
      effect:
        'Harri plays the dead boy in X-Fire’s demonstration and offers his life for his sister’s, both lightly, and the ending fulfils both. Kelman scatters such hints from the first pages, so that the ending feels both shocking and inevitable.',
    },
  ],

  structureForm: [
    {
      heading: 'Five months, towards the summer holiday',
      body: 'The novel is divided into five sections named after the months March to July; April opens with the image of a fingerprint, which foreshadows the fingerprints that follow. The months track the school year, through the Easter holiday to the end of the summer term, so the story runs towards the summer holiday, which Harri longs for. The calendar works like a countdown the reader can see and Harri cannot: the last day of term, the day of his greatest happiness, is the day he is stabbed.',
    },
    {
      heading: 'Two narrators',
      body: 'Almost all of the novel is Harri’s first-person narration, which moves between the present tense (“I live in Copenhagen House.”) and the past (“I ran fast.”) as a child’s storytelling does. It is broken by short italic passages in the pigeon’s voice. The pigeon can see what Harri cannot and comment on humans from above, its passages sometimes address Harri directly, and in the final pages the two voices meet in dialogue set out like a script. The structure gives the reader two perspectives on the same streets: the child who is inside the danger, and the bird who watches it.',
    },
    {
      heading: 'A detective story the detectives cannot finish',
      body: 'Kelman borrows the shape of a murder mystery: a body, clues, suspects, a stake-out, evidence. But a police appeal for witnesses meets silence, and the case is carried by two eleven-year-olds using methods from television. The clues point to Killa, and near the end Connor Green says he saw him running from the scene with the knife, but there is no arrest and no solution. The form raises the expectation of justice so that the novel can deny it.',
    },
    {
      heading: 'The first sentences return at the end',
      body: 'The novel opens with two short sentences about the dead boy’s blood outside Chicken Joe’s, and the same two sentences return, word for word, in its final passage as Harri lies dying. The investigator becomes the victim, and the unnamed boy of the opening is replaced by the boy who tried to find his killer. Even the pigeon frames the novel: one walks through the blood on the first page, and one speaks to Harri on the last. The circular shape is the argument: on this estate the story repeats, and a child can move from witness to victim in a single afternoon.',
    },
    {
      heading: 'Running',
      body: 'Harri tells the reader early that he is the fastest in Year 7, and running is how he meets every danger: he races Jordan home from the blood in the opening, runs from the robbery of Mr Frimpong, and treats a chase by the Crew as a game he can win. In the final pages he runs home in pure joy, sure that nobody could catch him. Kelman turns Harri’s greatest gift into the motif that carries him to his death, and the reader who has noticed the pattern feels the ending coming before Harri does.',
    },
    {
      heading: 'Episodes, lists and interruptions',
      body: 'The novel moves in short episodes: school, the market, church, the laundrette, games, investigations. Harri interrupts himself with lists, rules, facts about sharks and scars, and the text includes drawn signs. Dialogue is often set out like a script, with the speaker’s name and a colon, so that even Harri’s conversation with the pigeon at the end reads as a scene. The mosaic imitates how a child experiences time, as vivid present moments rather than plot, and it lets the danger build unnoticed in the gaps.',
    },
    {
      heading: 'Comedy and tragedy together',
      body: 'Pigeon English is very funny, and that is part of its design. The Guardian’s reviewer called it “a gut-wrenchingly sad novel that makes you laugh out loud”. Comedy makes Harri loveable, and the more the reader loves him, the more the ending costs. It also resists the way news reports reduce children like him to statistics: a child who jokes, collects sweets and falls in love is a person, not a case.',
    },
    {
      heading: 'The title',
      body: 'Pigeon English puns on pidgin English, a mixed language that grows where speakers of different languages meet, and on the pigeon itself. Harri’s voice is the pidgin: Ghanaian, school and street English together. The pigeon is the other half of the title, an ordinary city bird, dismissed by many as vermin, that the novel lifts into a watcher and a friend. The two meanings join the novel’s two voices.',
    },
  ],

  vocabulary: [
    {
      term: 'Asweh',
      definition:
        'Ghanaian slang, a shortening of ‘I swear’. Harri uses it constantly for emphasis, and it keeps his Ghanaian voice alive inside his London English.',
    },
    {
      term: 'Hutious',
      definition:
        'Ghanaian slang for frightening or scary. Harri applies it to everything from the genuinely dangerous to the merely impressive, such as a wooden samurai sword at the market.',
    },
    {
      term: 'Adjei',
      definition: 'A Ghanaian exclamation of annoyance or dismay.',
    },
    {
      term: 'Obruni',
      definition: 'A Ghanaian word for a white person.',
    },
    {
      term: 'Dey touch',
      definition:
        'Crazy or mad. Harri says Terry Takeaway is dey touch because he drinks beer for breakfast.',
    },
    {
      term: 'Chook',
      definition:
        'To stab. The children use it for anything from a compass jab in class to a killing, which is itself a sign of how normal the idea has become.',
    },
    {
      term: 'Donkey hours',
      definition: 'A Ghanaian expression for a very long time.',
    },
    {
      term: 'Tro-tro',
      definition:
        'A privately owned minibus that runs as a shared taxi in Ghana. Harri remembers one killing a woman selling oranges at a market in Ghana.',
    },
    {
      term: 'Bo-styles',
      definition: 'Slang for cool or excellent, one of Harri’s favourite words of approval.',
    },
    {
      term: 'Red-eyes',
      definition:
        'Furious or fierce. Harri describes Manik’s papa, who guards his son from robbers on the way to school, as always red-eyes.',
    },
    {
      term: 'Fronting',
      definition:
        'Showing off or disrespecting someone. Miquita says the dead boy was killed because he was fronting, which Harri refuses to accept.',
    },
    {
      term: 'Dell Farm Crew',
      definition:
        'The gang of teenage boys from Harri’s estate and school, led by X-Fire. They claim their own tables at school, recruit younger boys through dares called missions, and are behind most of the danger Harri faces.',
    },
    {
      term: 'Pidgin',
      definition:
        'A simplified mixed language that develops where speakers of different languages need to communicate. The novel’s title plays on the word.',
    },
    {
      term: 'Naive narrator',
      definition:
        'A narrator who understands less than the reader, so that the reader sees the significance of events the narrator describes innocently. Harri is the novel’s naive narrator.',
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the reader knows or understands more than a character. Much of the novel’s tension comes from the reader seeing danger that Harri treats as a game.',
    },
    {
      term: 'Code-switching',
      definition:
        'Moving between languages or varieties of a language depending on the situation. Harri switches between Ghanaian, school and street English.',
    },
    {
      term: 'Council estate',
      definition:
        'An area of social housing built by a local council, often including tower blocks. Harri’s home, Copenhagen House, is a tower block on the fictional Dell Farm estate.',
    },
    {
      term: 'Roman à clef',
      definition:
        'A novel that presents real events or people under fictional names. One Booker judge warned that calling Pigeon English merely a roman à clef about the Damilola Taylor case undersells it.',
    },
    {
      term: 'CSI',
      definition:
        'An American television crime drama about forensic investigators. Dean is its devoted fan, and it shapes the boys’ methods and vocabulary.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does Kelman present the effects of violence on young people in Pigeon English? Write about: the violence young people experience and take part in; how Kelman presents its effects by the ways he writes.',
        skill: 'Whole-text essay: argument, language and structure, and context',
        guidance: [
          'Open with a clear argument, for example that Kelman shows violence doing its worst damage not through deaths alone but by teaching children to treat it as normal.',
          'Start with the opening: Harri staring at the dead boy’s blood outside Chicken Joe’s, the boy’s mother guarding it, and the way the children turn stabbing into a game, as in the compass jabs that leave “never any blood”.',
          'Use X-Fire’s demonstration, in which Harri plays the dead boy, and analyse how the naive voice makes the reader see what Harri does not.',
          'Move to the pressure on Harri: the Crew’s missions, the robbery of Mr Frimpong, and how he runs. Then widen out: Lydia pulled in through Miquita, Jordan already lost to the Crew, and the Crew themselves, whom Kelman called scared kids trying to survive.',
          'Use structure: the countdown of the months, the foreshadowing in Harri’s bargain for Agnes, and the novel’s first sentences returning word for word as he dies.',
          'Bring in context where it sharpens the point: the killing of Damilola Taylor in 2000 and Kelman’s own upbringing on a Luton estate. End by judging what Kelman wants a reader to feel and do.',
        ],
      },
      {
        question:
          'How does Kelman use the pigeon in Pigeon English? Write about: what the pigeon says and does; how Kelman uses the pigeon to present ideas about Harri and the world he lives in.',
        skill: 'Whole-text essay: form, voice and interpretation',
        guidance: [
          'Decide your reading before you write: the pigeon as guardian angel, as Harri’s imagination, as the voice of an outsider, or as a device that does not quite work. Say which you find most convincing.',
          'Explain how the pigeon enters: a pigeon walks through the dead boy’s blood in the first scene, and Harri catches one that flies into the flat and makes it his special pigeon.',
          'Analyse the pigeon’s voice against Harri’s: its formal, reflective register and elevated imagery, and what the contrast tells the reader.',
          'Use the pigeon’s intervention in May, when it tries to get Harri’s attention during the robbery of Mr Frimpong, and ask what it can and cannot do.',
          'Analyse the ending: the pigeon’s promise that Harri will be going home soon, and the double meaning of home.',
          'Weigh the criticism: reviewers called the pigeon a false step and one wanted it cut, while Kelman explained why he chose a bird that some people see as vermin and others as benevolent. A top answer argues with the critics rather than ignoring them.',
        ],
      },
      {
        question:
          'How does Kelman present Harri as a character who tries to stay good? Write about: the pressures Harri faces and how he responds to them; how Kelman presents Harri by the ways he writes.',
        skill: 'Whole-text essay: character and methods',
        guidance: [
          'Argue a clear view: for example, that Harri’s goodness is convincing precisely because the novel lets it be tested and sometimes fail.',
          'Show the goodness: his loyalty to the dead boy, whom he calls a friend, his love for Agnes and Lydia, and his decision to investigate when adults stay silent.',
          'Show the pressure and the failures: the fire-alarm dare, and the Mr Frimpong mission he agrees to after being mocked for his trainers. Note that he runs, and what running costs him.',
          'Use Julius’s advice to stay good for as long as you can: what does it suggest about how long goodness lasts on the estate?',
          'Analyse how Kelman makes us trust Harri: humour, enthusiasm, lists and his running commentary on what is right, including the rules he learns.',
          'Use Kelman’s intention: he said he wanted Harri to be the epitome of good, and that the book is at heart a good-versus-evil tale. Ask whether the novel is quite that simple, and end with what it means that its most good-hearted character is the one it cannot save.',
        ],
      },
      {
        question:
          'How does Kelman present ideas about belonging in Pigeon English? Write about: the ways characters try to belong; how Kelman presents these ideas by the ways he writes.',
        skill: 'Whole-text essay: themes, language and context',
        guidance: [
          'Start with language: Harri’s hybrid English, the delight in there being a hell of different words, and the football lesson that he had used the wrong command.',
          'Consider the family split between London and Ghana, and how Papa, Agnes and Grandma Ama keep Ghana present, including Lydia’s homesickness on her birthday.',
          'Analyse Auntie Sonia’s fingerprints as the darkest version of the price of belonging.',
          'Treat the Dell Farm Crew as a false offer of belonging, and the rules about knowing what side you are on.',
          'Include friendships across difference: Dean, Poppy and Altaf, and what they suggest about London at its best.',
        ],
      },
    ],
    tips: [
      'AQA prints no extract for this novel, so learn short quotations by month: two or three from each of March, April, May, June and July cover the whole text.',
      'Learn the first two sentences of the novel. They return, word for word, as Harri dies, and a comment on that repetition is whole-text structure in a single point.',
      'Write about Kelman’s choices, not just Harri’s actions. Making Kelman, not Harri, the subject of your sentences keeps the essay on the writer’s methods: Kelman uses Harri’s naive voice to show, Kelman ends the novel with, and so on.',
      'Analyse the comedy. Weaker answers treat the novel as simply sad; stronger ones explain how the humour makes the reader love Harri and so feel the ending more.',
      'Do not state who stabs Harri as fact. Published guides disagree, and the novel leaves room for argument, so if you mention it, weigh the clues.',
      'Use context to sharpen a point, not as a separate paragraph: the killing of Damilola Taylor, Kelman’s childhood on the Marsh Farm estate in Luton, and the pressures on undocumented migrants that Auntie Sonia shows.',
      'Spell and explain Harri’s words accurately. Writing asweh or hutious correctly, and saying what it does, shows close knowledge of the voice.',
      'Take a view on the pigeon. It is the element critics argue about most, and a supported opinion on it is a mark of a confident reader.',
    ],
  },

  modelAnswer: {
    question: 'How does Kelman present the effects of violence on young people in Pigeon English?',
    paragraph:
      'Kelman presents violence as something the children of Dell Farm have absorbed so completely that it has become a game, and he uses Harri’s naive voice to make the reader see what Harri cannot. When Harri explains that the boys who chook each other with compasses feel only “a crazy surprise” because “There’s never any blood”, the reassurance is meant to comfort, but it does the opposite: “never” is a child’s absolute, and the reader has already stood with Harri outside Chicken Joe’s, where the dead boy’s mother is “guarding the blood”. The same game is played on Harri himself when X-Fire demonstrates a stabbing with his fingers: “I was the dead boy because X-Fire picked me.” Harri reports being chosen almost as an honour, while the reader hears a rehearsal. Kelman then makes the structure complete the pattern. The novel’s first sentences, “You could see the blood. It was darker than you thought.”, return word for word as Harri lies dying, so that the witness of the first page becomes the victim of the last. The second person “you” makes the reader a witness too, and “darker than you thought” suggests that the reality of violence always exceeds what a child, or a comfortable reader, has imagined. Kelman wrote the novel in response to the killing of Damilola Taylor, and the most convincing reading is that the deepest damage he shows is not only the deaths but the way a whole community of children learns to treat blood as ordinary.',
    commentary: [
      'It opens with an argument that answers the question directly, rather than with a plot summary, and the rest of the paragraph proves that argument.',
      'Quotations are short and embedded, and it analyses single words (“never”, “you”, “darker”) rather than whole sentences, which is what close language analysis means.',
      'It links the first page to the last, through X-Fire’s demonstration in between, so the paragraph shows whole-text knowledge and comments on structure as well as language.',
      'It names techniques precisely (naive voice, dramatic irony, second person, foreshadowing) and always says what they make the reader feel or understand.',
      'Context arrives in one sentence and is used to explain Kelman’s purpose, instead of being attached as a separate history lesson.',
    ],
  },

  timeline: [
    {
      where: 'March, the opening',
      title: 'Blood outside Chicken Joe’s',
      summary:
        'Harri and his friend Jordan look at the blood of a boy stabbed to death outside Chicken Joe’s, a fast-food shop, while the dead boy’s mother stands over it and a pigeon walks through it. Harri, only half a friend of the boy, leaves him a bouncy ball and races home.',
      setting: 'The pavement outside Chicken Joe’s, behind a police line',
      who: ['Harri', 'Jordan', 'The dead boy', 'The pigeon'],
      quote: "The dead boy's mamma was guarding the blood.",
      themes: ['Innocence and violence'],
      tension: 3,
      significance:
        'The whole novel grows from a child staring at the aftermath of a killing he cannot understand, and its first sentences will return at the end.',
    },
    {
      where: 'March, Copenhagen House',
      title: 'A new home and a pigeon',
      summary:
        'Harri lives with Mamma and Lydia on the ninth floor of Copenhagen House, while Papa, Agnes and Grandma Ama wait in Ghana. A pigeon flies into the flat; Harri catches it with flour, lets it go, and makes it his special pigeon.',
      setting: 'A ninth-floor flat on the Dell Farm estate',
      who: ['Harri', 'Mamma', 'Lydia', 'The pigeon', 'Papa', 'Agnes'],
      quote: "My flat is on floor 9 out of 14. It's not even hutious",
      themes: ['Family and diaspora', 'Identity and belonging'],
      tension: 1,
      significance:
        'The family is split across two countries, and the bird that will narrate beside Harri arrives.',
    },
    {
      where: 'March, at school',
      title: 'X-Fire’s demonstration',
      summary:
        'At school X-Fire shows how to stab someone, using his fingers for a knife and Harri as the victim, while Dizzy and Clipz boast of stabbings they claim to have done and Killa stays silent. Harri says he was not even scared.',
      setting: 'School',
      who: ['Harri', 'X-Fire', 'Killa'],
      quote: 'I was the dead boy because X-Fire picked me.',
      themes: ['Innocence and violence', 'Class and estate life'],
      tension: 3,
      significance:
        'A rehearsal of the ending: in March Harri plays the dead boy, and in July he becomes one.',
    },
    {
      where: 'March, the knife under the bins',
      title: 'A knife in the dark',
      summary:
        'Up at night waiting for the pigeon, Harri sees a man take a knife from its hiding place under the bins and run off towards the river. Harri notices mostly how the man runs, and is sure he could run faster.',
      setting: 'The view from Harri’s balcony at night',
      who: ['Harri'],
      themes: ['Innocence and violence'],
      tension: 3,
      significance:
        'Harri has seen real evidence, and treats it as a question of who is the faster runner.',
    },
    {
      where: 'March, the funeral',
      title: 'Son and Forever',
      summary:
        'At the dead boy’s funeral Harri and Dean watch the mourners for suspects, because on television the killer comes back to watch the funeral. Killa rides past on his bike and falls off beside the procession.',
      setting: 'The dead boy’s funeral',
      who: ['Harri', 'Dean', 'Killa', 'The dead boy'],
      quote: 'The flowers on the coffin said Son and Forever.',
      themes: ['Innocence and violence', 'Religion, luck and superstition'],
      tension: 2,
      significance:
        'The children’s game meets real grief, and the future chief suspect makes a telling appearance.',
    },
    {
      where: 'March, the Crew’s offer',
      title: 'X-Fire offers a job',
      summary:
        'X-Fire takes Harri’s bag, offers him a job with the Crew, and gives it back, telling Harri to come to them if anyone gives him trouble. The Crew’s pressure on Harri to join has begun, and a dare to set off the school fire alarm follows.',
      setting: 'School',
      who: ['Harri', 'X-Fire'],
      themes: ['Class and estate life', 'Friendship and loyalty'],
      tension: 3,
      significance:
        'The gang’s recruitment begins as an offer of protection, which is why it is so hard to refuse.',
    },
    {
      where: 'March, by the river',
      title: 'Proper detectives',
      summary:
        'Harri and Dean search by the river for the murder weapon, armed with ideas from Dean’s favourite television show, and declare the investigation a personal mission for their dead friend.',
      setting: 'The river near the estate',
      who: ['Harri', 'Dean'],
      quote: "We're proper detectives now. It's a personal mission.",
      themes: ['Friendship and loyalty', 'Innocence and violence'],
      tension: 2,
      significance:
        'The detective game that gives the novel its plot, and its danger, begins in earnest.',
    },
    {
      where: 'April, the laundrette',
      title: 'The bloodstained clothes',
      summary:
        'Miquita gives Lydia a bag of boy’s clothes stained with blood, and Lydia takes them to the laundrette. Harri follows her there, and X-Fire arrives with his dog and asks whether anyone saw her wash them.',
      setting: 'The laundrette',
      who: ['Lydia', 'Miquita', 'X-Fire', 'Harri'],
      themes: ['Innocence and violence', 'Friendship and loyalty'],
      tension: 4,
      significance:
        'Harri’s sister is drawn into hiding evidence, and the Crew’s reach extends into his family.',
    },
    {
      where: 'April, Auntie Sonia’s flat',
      title: 'No fingerprints at all',
      summary:
        'On a family visit, Auntie Sonia explains that she burned off her fingerprints so that she cannot be identified and deported. Harri is sickened, fascinated and confused. Julius comes back with his baseball bat and tells Harri to stay good for as long as he can.',
      setting: 'Auntie Sonia’s flat',
      who: ['Harri', 'Auntie Sonia', 'Mamma', 'Julius'],
      quote: 'Auntie Sonia burned her fingers to get the fingerprints off.',
      themes: ['Identity and belonging', 'Family and diaspora'],
      tension: 3,
      significance:
        'The novel’s fingerprint motif turns from a game into the price of staying in Britain.',
    },
    {
      where: 'May, the second mission',
      title: 'The robbery of Mr Frimpong',
      summary:
        'Stung by mockery of his trainers, Harri agrees to a second Crew mission, a street robbery, and is horrified when the target turns out to be Mr Frimpong from his church. The pigeon walks past with bread, trying to turn him away, and when the old man is knocked down and X-Fire demands his wallet, Harri runs.',
      setting: 'The estate',
      who: ['Harri', 'X-Fire', 'Killa', 'Mr Frimpong', 'The pigeon'],
      quote: 'get you out of another mess',
      themes: ['Friendship and loyalty', 'Religion, luck and superstition'],
      tension: 4,
      significance:
        'Harri cannot pretend the Crew’s violence is a game, and by running he makes himself their enemy.',
    },
    {
      where: 'May, church',
      title: 'Nobody helps you',
      summary:
        'At church Mr Frimpong, injured in the robbery, complains that in England nobody helps a stranger in trouble. Harri, who was part of the robbery and ran, agrees, and explains it in his own way: people cannot tell a real fall from a trick.',
      setting: 'Harri’s church',
      who: ['Harri', 'Mr Frimpong'],
      quote: 'In England nobody helps you if you fall over.',
      themes: ['Class and estate life', 'Religion, luck and superstition'],
      tension: 2,
      significance:
        'Harri states a truth about a whole society that also convicts him, and anticipates the silence around the dead boy’s killing.',
    },
    {
      where: 'May, the straighteners',
      title: 'Miquita burns Lydia',
      summary:
        'While straightening Lydia’s hair, with Harri watching, Miquita asks whether she is with the Crew or against them and burns her cheek with the hot iron. Lydia says she is with them.',
      setting: 'The Opokus’ flat',
      who: ['Miquita', 'Lydia', 'Harri'],
      themes: ['Friendship and loyalty', 'Innocence and violence'],
      tension: 4,
      significance:
        'Loyalty to the Crew is enforced on friends, and Lydia’s innocence is lost as surely as Harri’s.',
    },
    {
      where: 'June, the stake-out',
      title: 'Signs of guilt',
      summary:
        'Harri and Dean hold a stake-out with snacks and binoculars, watching the Chips n Tings van and logging passers-by in police language, and draw up a list of signs of guilt. Nothing comes of it, so they decide they need real evidence.',
      setting: 'The estate, near Harri’s tower block',
      who: ['Harri', 'Dean'],
      quote: 'No signs of guilt.',
      themes: ['Innocence and violence', 'Friendship and loyalty'],
      tension: 2,
      significance:
        'The detective game is at its most comic, and its decision to gather real evidence leads straight to danger.',
    },
    {
      where: 'June, Agnes’s fever',
      title: 'A bargain with God',
      summary:
        'News comes from Ghana that Agnes has a fever. Harri decides God is punishing him for keeping bad company and offers his own life for hers; the pigeon tells him in a dream that she will be well, and after Mamma bans Jordan he sacrifices his alligator tooth. Later in June Agnes recovers.',
      setting: 'The Opokus’ flat',
      who: ['Harri', 'Agnes', 'The pigeon'],
      quote: "If Agnes dies I'll just swap places with her.",
      themes: ['Religion, luck and superstition', 'Family and diaspora'],
      tension: 3,
      significance:
        'The novel’s darkest piece of foreshadowing, made in a child’s bargaining voice.',
    },
    {
      where: 'June, Killa’s fingerprints',
      title: 'The evidence bites back',
      summary:
        'At school Harri provokes Killa as a distraction while Dean lifts the marks of Killa’s hands from a window with sticky tape, and the Crew chase Harri. Later Killa drags Harri into the school toilets, threatens him with a craft knife and orders him to hand the fingerprints back.',
      setting: 'School, then the boys’ toilets',
      who: ['Harri', 'Dean', 'Killa'],
      themes: ['Innocence and violence'],
      tension: 4,
      significance: 'For the first time the game produces real evidence, and real danger.',
    },
    {
      where: 'June, Lydia’s birthday',
      title: 'Footprints in the cement',
      summary:
        'Homesick on her birthday, Lydia cries over a parcel from Ghana. Harri cheers her by taking her to a patch of wet cement, where they press in their footprints and write their names, and he asks the pigeon to guard them.',
      setting: 'A patch of wet cement on the estate',
      who: ['Harri', 'Lydia', 'The pigeon'],
      themes: ['Family and diaspora', 'Identity and belonging'],
      tension: 1,
      significance:
        'A moment of pure tenderness, and a mark left on the estate by two children who want proof that they were there.',
    },
    {
      where: 'July, the basketball court',
      title: 'The dead boy’s photograph',
      summary:
        'Hoping to reach the dead boy’s spirit, Harri and Dean take the boy’s wallet to the basketball court. The Crew corner them; when his photograph falls, Killa is visibly shaken and X-Fire burns it. As X-Fire reaches for his knife, Lydia shouts, and all three escape.',
      setting: 'The empty basketball court',
      who: ['Harri', 'Dean', 'Killa', 'X-Fire', 'Lydia'],
      themes: ['Innocence and violence', 'Friendship and loyalty'],
      tension: 5,
      significance:
        'The novel’s crisis: the Crew know what the boys have, Lydia has filmed it, and Harri is now a target.',
    },
    {
      where: 'July, the playground fire',
      title: 'Connor Green’s claim',
      summary:
        'Connor Green, the class trickster, says he was riding past Chicken Joe’s and saw Killa running from the scene of the killing with the knife. Soon afterwards the estate playground is set on fire, and the neighbours stand and watch it burn until firefighters put it out.',
      setting: 'School, then the estate playground',
      who: ['Connor Green', 'Harri'],
      themes: ['Class and estate life', 'Innocence and violence'],
      tension: 4,
      significance:
        'The clues now point to Killa, but no arrest follows, and the place of childhood burns.',
    },
    {
      where: 'July, the last day of term',
      title: 'The happiest day',
      summary:
        'Harri wins the school race, and on the last day of term he and Poppy kiss. He runs home through the rain, shouting his love for Poppy, for the pigeons and for the trees he passes.',
      setting: 'School, then the streets towards home',
      who: ['Harri', 'Poppy Morgan'],
      quote: 'I ran fast. I ran down the hill and through the tunnel.',
      themes: ['Innocence and violence', 'Identity and belonging'],
      tension: 2,
      significance:
        'Kelman gives Harri his fullest joy immediately before the ending, so the loss is felt completely.',
    },
    {
      where: 'July, the final pages',
      title: 'Going home',
      summary:
        'Near home a boy jumps out and stabs Harri, then runs away. The pigeon speaks to him, promising to show him the way when it is time. His last thoughts are of Agnes, whose face he tries and fails to picture.',
      setting: 'Close to Copenhagen House',
      who: ['Harri', 'The pigeon', 'Agnes'],
      quote: "Don't worry, you'll be going home soon.",
      themes: ['Innocence and violence', 'Religion, luck and superstition', 'Family and diaspora'],
      tension: 5,
      significance:
        'The investigator becomes the victim, and the sentences about blood that opened the novel return in its final passage.',
    },
  ],

  relationships: [
    {
      from: 'Harri',
      to: 'Lydia',
      kind: 'brother and sister',
      note: 'Half teasing, half protection. Lydia warns Harri away from the Crew while being pulled towards it herself; he cheers her on her birthday, and in July she gets him away from the Crew.',
    },
    {
      from: 'Harri',
      to: 'Mamma',
      kind: 'son and mother',
      note: 'Mamma’s faith and discipline shape Harri’s sense of right and wrong, but her long shifts leave him unsupervised on a dangerous estate, and she keeps hard truths from him.',
    },
    {
      from: 'Harri',
      to: 'Papa',
      kind: 'son and father, far apart',
      note: 'Papa is a smiling voice on the phone who has made Harri the man of the house. Harri takes the duty seriously, and misses him.',
    },
    {
      from: 'Harri',
      to: 'Agnes',
      kind: 'brother and baby sister, far apart',
      note: 'Agnes is Harri’s picture of the future. He offers his life for hers when she is ill, and she is in his last thoughts.',
    },
    {
      from: 'Harri',
      to: 'Dean',
      kind: 'best friends and detective partners',
      note: 'Their friendship is play, loyalty and shared imagination, and their investigation is both comic and brave. It is also what exposes them to the Crew.',
    },
    {
      from: 'Harri',
      to: 'Jordan',
      kind: 'friends, then enemies',
      note: 'Jordan pulls Harri towards trouble; after Mamma bans the friendship he spits at Harri, and the boys become enemies. One published guide names Jordan as Harri’s killer.',
    },
    {
      from: 'Harri',
      to: 'The pigeon',
      kind: 'boy and watcher',
      note: 'Harri believes the pigeon is watching over him, and it tries to help, but it can only distract, never protect. At the end it speaks to him directly.',
    },
    {
      from: 'Harri',
      to: 'X-Fire',
      kind: 'would-be recruit and gang leader',
      note: 'X-Fire offers protection and status in exchange for missions. Harri fails the first and runs from the second, and becomes the Crew’s enemy.',
    },
    {
      from: 'Harri',
      to: 'Killa',
      kind: 'detective and chief suspect',
      note: 'Harri’s evidence points more and more at Killa, who threatens him with a knife once he realises the boys have his fingerprints.',
    },
    {
      from: 'Harri',
      to: 'Poppy Morgan',
      kind: 'first girlfriend',
      note: 'The most innocent relationship in the novel, and the happiest moment of Harri’s last day.',
    },
    {
      from: 'Harri',
      to: 'The dead boy',
      kind: 'half friends',
      note: 'Harri adopts the murdered boy as a friend, though they were only half friends, and investigates for him; in the end he shares his fate.',
    },
    {
      from: 'Lydia',
      to: 'Miquita',
      kind: 'friends, then victim and tormentor',
      note: 'Miquita uses the friendship to make Lydia hide evidence, then burns her to test her loyalty to the Crew.',
    },
    {
      from: 'Killa',
      to: 'Miquita',
      kind: 'boyfriend and girlfriend',
      note: 'Miquita’s violence is loyalty to Killa and the Crew, including her attack on Chanelle, apparently to keep her quiet about him.',
    },
    {
      from: 'X-Fire',
      to: 'Killa',
      kind: 'gang leader and gang member',
      note: 'X-Fire leads; Killa is one of his Crew, present at the robbery of Mr Frimpong and at the basketball court, where the dead boy’s photograph shakes him.',
    },
    {
      from: 'Auntie Sonia',
      to: 'Julius',
      kind: 'partners; victim and abuser',
      note: 'Julius’s violence towards Sonia escalates from a broken nose to a broken foot, and she resolves to escape him and leave London.',
    },
    {
      from: 'Mamma',
      to: 'Auntie Sonia',
      kind: 'sisters',
      note: 'Mamma confides in Sonia what she hides from the children, such as the racist abuse she suffers at work, and resists Sonia’s decision to tell Harri and Lydia about her fingerprints. The sisters disagree about how much children should be told.',
    },
  ],

  compareWith: [
    {
      title: 'Anita and Me',
      href: '/revision/texts/anita-and-me',
      reason:
        'Another AQA modern prose text narrated by a child of immigrants growing up in a mixed, working-class community, where friendship with a dangerous older figure tests the narrator’s loyalties.',
    },
    {
      title: 'My Name is Leon',
      href: '/revision/texts/my-name-is-leon',
      reason:
        'Also on AQA’s modern prose list: a child narrator who sees more of an adult world’s failures than he can explain, in a family that has been split apart.',
    },
    {
      title: 'Blood Brothers',
      href: '/revision/texts/blood-brothers',
      reason:
        'Also on the AQA list: poverty, class and violence shape young lives, and an ending the audience is warned of from the start is still shocking when it comes.',
    },
    {
      title: 'Lord of the Flies',
      href: '/revision/texts/lord-of-the-flies',
      reason:
        'A third AQA text about boys, gangs and the loss of innocence, in which play turns into real violence against a boy who stands apart.',
    },
  ],

  contentGuidance: [
    'violence',
    'crime_injustice',
    'mortality',
    'discrimination',
    'intimate_relationships',
    'addiction',
    'mythological_religious',
  ],

  quotesFromElsewhere: [
    'I wanted him to be the epitome of good',
    'At heart they are just scared kids trying to survive.',
    'The pigeon is ubiquitous',
    'one of the novel’s few false steps',
    'a gut-wrenchingly sad novel that makes you laugh out loud',
  ],

  sources: [
    {
      label:
        'AQA, GCSE English Literature (8702) specification, 3.2 Modern texts and poetry: lists Stephen Kelman, Pigeon English, among the modern prose texts, with no last-exam date. Read 25 September 2026.',
      url: 'https://www.aqa.org.uk/subjects/english/gcse/english-8702/specification/subject-content/modern-texts-and-poetry',
    },
    {
      label:
        'AQA, 8702 specification at a glance: all assessments are closed book; Paper 2 Section A is one essay question from a choice of two on the modern text. Read 25 September 2026.',
      url: 'https://www.aqa.org.uk/subjects/english/gcse/english-8702/specification/specification-at-a-glance',
    },
    {
      label:
        'Pigeon English, opening extract (pages 3 to 17, about 3,960 words), uploaded to DocumentCloud by the Guardian news desk on 22 October 2012; read as the Internet Archive mirror\'s OCR text, 26 September 2026. Source for "You could see the blood. It was darker than you thought." as the first sentences, "The dead boy\'s mamma was guarding the blood.", "He walked right in the blood.", "Me and the dead boy were only half friends", "I just wanted to get away before the dying caught us.", "I\'m the fastest in Year 7.", "Connor Green is always making tricks.", "Who\'d chook a boy just to get his Chicken Joe\'s?", "I\'m the man of the house until Papa escapes." and "I was the dead boy because X-Fire picked me.", and for the opening scene, Papa\'s shop, Agnes staying with Grandma Ama, X-Fire\'s demonstration and Mr Frimpong\'s hymns. The last two quotations rest on this source alone; every passage it shares with NPR\'s excerpt matched NPR word for word.',
      url: 'https://archive.org/details/479363-pigeon-english-by-stephen-kelman-extract',
    },
    {
      label:
        'NPR Books, "Excerpt: Pigeon English" (pages 3 to 7 of the novel). Corroborates the opening sentences and the other opening quotations above, and shows that the Copenhagen House sentence continues "It\'s not even hutious, I can look" with a comma, which is why this guide quotes it without closing punctuation.',
      url: 'https://www.npr.org/2010/01/01/141423742/excerpt-pigeon-english',
    },
    {
      label:
        'Alex Clark, review, the Guardian, 19 March 2011. Source for "In England there\'s a hell of different words for everything", "it just gives you a crazy surprise. There\'s never any blood", "guarding the blood", "Unknown white male came, bought a burger, went again. No signs of guilt", and for Copenhagen House, the ninth floor, Chicken Joe\'s, the Chips n Tings stake-out, the Crew\'s names, Haribo and Chelsea. Also the phrases "one of the novel\'s few false steps" and "a gut-wrenchingly sad novel that makes you laugh out loud".',
      url: 'https://www.theguardian.com/books/2011/mar/19/pigeon-english-stephen-kelman-review',
    },
    {
      label:
        'Rachel Aspden, review, the Observer, 13 March 2011. Source for "Every sneeze made a new sneeze" and "He couldn\'t stop for donkey hours" (Asbo choking on lager from his owner), the pigeon\'s "a cheap act of confederacy against the drip-dripping of ill-captured sand", the Dell Farm estate, blonde Poppy Morgan, the pun on pidgin, and the family left in Ghana; also its judgement that the pigeon passages are the weakest and that Mamma is forced into moral compromise.',
      url: 'https://www.theguardian.com/books/2011/mar/13/pigeon-english-stephen-kelman-review',
    },
    {
      label:
        'Stephen Kelman, Guardian First Book award shortlist piece, 11 November 2011: on Damilola Taylor and the Ghanaian community where he lived, with an extract from the novel that is the source for "Some of them are so your friends know what side you\'re on." and the rules around it.',
      url: 'https://www.theguardian.com/books/2011/nov/11/guardian-first-book-stephen-kelman',
    },
    {
      label:
        'LitCharts, Pigeon English quotations page, read 25 and 26 September 2026. Source for the quotations located in March (the funeral flowers, "We\'re proper detectives now"), April (the rules list, the football "wrong command", "Auntie Sonia burned her fingers...", "Auntie Sonia hasn\'t even done anything bad..."), May (the pigeon\'s "I just wanted to get your attention, Harri...", "In England nobody helps you if you fall over", in the context of Mr Frimpong\'s complaint at church, and the "Wars" list), June ("Signs of guilt include", "Talking too fast", "If Agnes dies..."), and July ("Fingerprints are just for feeling with...", "I ran fast...", "Poppy I love you", the pigeon\'s "Don\'t worry, you\'ll be going home soon", "Can\'t I stay here?", and the opening sentences repeated as Harri dies). It prints "hutious. I can look" with a full stop where the two printed extracts have a comma.',
      url: 'https://www.litcharts.com/lit/pigeon-english/quotes',
    },
    {
      label:
        "LitCharts, Pigeon English plot summary and the March and April detailed summaries, read 26 September 2026: the order of events; the dead boy at a different school; the family's visit to Auntie Sonia's flat; Julius telling Harri to \"stay good for as long as you can\" (April); X-Fire leading because he is best at basketball, has stabbed the most people and stolen the most; Terry Takeaway's nickname and beer for breakfast; Poppy's hair and Harri's yellow paint; Miquita burning Lydia and asking whether she is with the Crew; the basketball-court scene, Killa shaken by the photograph and X-Fire burning it; Poppy kissing Harri; \"a boy\" stabbing Harri. Its guide front page wrongly says the novel won prizes for which it was shortlisted; that was not used.",
      url: 'https://www.litcharts.com/lit/pigeon-english/summary',
    },
    {
      label:
        "GradeSaver, Pigeon English study guide (Liv DeSimone, 2022): month summaries, character list, glossary, quotes and analysis, metaphors and similes. Used for the order of events and for details confirmed nowhere else, which this guide paraphrases rather than quotes: Mamma and the CCTV cameras, the invented meaning she gives Harri for a racist insult, the Persuader, Julius's fake visas, Terry's drinking, Michael Jackson, the alligator tooth, Lydia's birthday parcel, Altaf's father, Killa as Year 11, the stake-out inspiring the fingerprints, and Connor Green's claim. Its glossary is the source for asweh, hutious, adjei, obruni, dey touch, chook, donkey hours, bo-styles, red-eyes and fronting. It corroborates \"Just stay good for as long as you can\". Its March summary calls Jordan \"Jason\", and its July summary and character list name Jordan as Harri's killer; neither was used as fact. It also says Harri and Dean charged younger children to use a mattress, where LitCharts says they only considered it, so that incident is not used.",
      url: 'https://www.gradesaver.com/pigeon-english/study-guide/summary',
    },
    {
      label:
        "BookRags, Pigeon English summary. Consulted only to test the ending: it names Killa as the attacker, with a screwdriver, contradicting GradeSaver, which is why this guide names neither. It also wrongly says Harri's father came to England.",
      url: 'https://www.bookrags.com/studyguide-pigeon-english/',
    },
    {
      label:
        'Kirkus Reviews, Pigeon English. Corroborates "In England there\'s a hell of different words for everything" and hutious. Not used for plot: it wrongly gives Harri a baby brother and calls his detective partner Jordan.',
      url: 'https://www.kirkusreviews.com/book-reviews/stephen-kelman/pigeon-english/',
    },
    {
      label:
        'Evening Standard interview, "I feel that I\'ve gatecrashed the Booker Prize shortlist": Kelman on Damilola Taylor, the Marsh Farm estate in Luton, "I wanted him to be the epitome of good", "a good-versus-evil tale", and the gang members as "just scared kids trying to survive".',
      url: 'https://www.standard.co.uk/culture/books/stephen-kelman-i-feel-that-i-ve-gatecrashed-the-booker-prize-shortlist-6440986.html',
    },
    {
      label:
        'BBC News, "Booker longlist: Stephen Kelman on Pigeon English", 3 August 2011: Kelman on the pigeon ("The pigeon is ubiquitous"), his upbringing on a Luton estate, and the novel\'s police appeal for witnesses that "draws only silence".',
      url: 'https://www.bbc.co.uk/news/entertainment-arts-14362417',
    },
    {
      label:
        "Mark Brown, \"Man Booker prize shortlist includes first western and novel by care worker\", the Guardian, 6 September 2011: Kelman's former jobs, the bidding war, and judge Matthew d'Ancona's warning against reading the novel as merely a roman à clef about the Damilola Taylor case.",
      url: 'https://www.theguardian.com/books/2011/sep/06/man-booker-prize-shortlist',
    },
    {
      label:
        'The Guardian, Guardian First Book award shortlist, 11 November 2011, and Desmond Elliott prize shortlist, 25 May 2011: Pigeon English shortlisted for both. (The primary page\'s "longlisted" for the First Book award is wrong.)',
      url: 'https://www.theguardian.com/books/2011/nov/11/guardian-first-book-award-shortlist',
    },
    {
      label:
        'Austen Saunders, review of Pigeon English, the Spectator: argues the pigeon sections should have been cut. Used for the critical debate only.',
      url: 'https://www.spectator.co.uk/article/pigeon-english-by-stephen-kelman/',
    },
    {
      label:
        'Wikipedia, Pigeon English: Bloomsbury, March 2011, 288-page hardback; shortlisted for the Man Booker Prize. Checked against the Guardian reports above.',
      url: 'https://en.wikipedia.org/wiki/Pigeon_English',
    },
    {
      label: 'Wikipedia, Tro tro: a privately owned minibus operated as a shared taxi in Ghana.',
      url: 'https://en.wikipedia.org/wiki/Tro_tro',
    },
  ],
}
