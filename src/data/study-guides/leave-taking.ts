import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Leave Taking, Winsome Pinnock (first staged 1987). A complete guide: the text
 * had only a placeholder page before this file.
 *
 * NO EDITION IS HELD. The play is in copyright and there is no licensed copy in
 * the repository, so every quotation here was checked against published sources
 * that reproduce the Nick Hern Books text, and each one is listed in `sources`:
 *
 * - Nick Hern Books' own sample of Leave Taking: The GCSE Study Guide (2024),
 *   which prints extracts from the 2018 edition with page numbers. The page
 *   references in this guide (27, 29, 35, 36, 39, 40, 45) come from it.
 * - AQA's companion guide and text page, which print Viv's line from page 53.
 * - Nick Hern Books' page for the play, which prints Enid's line about doctors.
 * - Oak National Academy's 29-lesson unit on the play, whose teachers read the
 *   scenes aloud and whose typed quizzes quote the text by scene.
 * - Save My Exams' quotation notes, which cite the 2018 Nick Hern edition.
 *
 * Where two of these agree on the words and the scene, the quotation is used.
 * A few rest on one source only, and they are the publisher's own study guide
 * or Oak's typed quizzes, not memory. Where sources disagreed, the guide says
 * less: Viv's line is quoted from "I search" because AQA prints "no matter how
 * much" and two other sources print "no matter how hard"; "Love has teeth" and
 * "Boy, we really turn English now" are left out because Oak places each in two
 * different scenes. Lines found only on unsourced revision sites were dropped.
 *
 * Plot facts were cross-checked the same way (Eduqas's knowledge organiser,
 * Oak, the Nick Hern guide). Oak's quizzes contain a few scene-number slips, so
 * no plot fact here rests on Oak alone where another source contradicted it.
 *
 * FACT-CHECK PASS (26 September 2026, after the third). Every quotation was
 * searched again in freshly downloaded copies, including Oak's typed quizzes,
 * which confirm "Is time. You ready." and "In a way we poorer than them" (no
 * comma, as Save My Exams prints it) and place Mai's lesson about the client's
 * eyes in Scene Eight. What this pass changed, and why: Scene Four no longer
 * happens "in the dark", which no source says; the end of Scene One is told in
 * its real order (Del hangs back, Mai offers to listen, Del refuses, Mai takes
 * back the charm); Brod "touch[es]" his hat to the Queen, not raises it; the
 * claim that Enid and Del challenge Brod's drinking was dropped (no source);
 * Scene Five's palm reading is mutual (Oak), so it is no longer the moment Mai
 * finds Del's reading difficulty; Scene Seven ends on Mai seeing Del's gift;
 * Pinnock had not seen a Black British cleaner as a heroine, not any cleaner;
 * the copyright line is 1989, 2018, as the publisher prints it; Mai's place in
 * the Windrush generation is "probably", as the context section says.
 *
 * THIRD PASS (26 September 2026). Every source above was downloaded again and
 * matched the copies the second pass had used, and every quotation, scene card
 * and extract phrase in this file was searched for in the fresh copies. Added,
 * each with its sources: Mai's "I can see you need to talk" (Oak's typed quiz
 * and three lessons), Viv's "Pat me on the head" line (AQA's text page, AQA's
 * companion guide and Save My Exams, which agree on page 53 and Scene Five),
 * Brod's "They going forget where them come from" (the Nick Hern guide, page
 * 29), Mai's "Now I see it plain plain" (read aloud in two Oak lessons),
 * Del's "the lowest of the low" (Save My Exams and Oak), the Smithfield detail
 * (Wikipedia on Pinnock's father; Eduqas on Del's), and the Scene Eight facts
 * that Mai arranges the meeting and Del gives back the money (the Nick Hern
 * guide). Still left out: Enid's "If I did send that money home, she wouldn't
 * die", which only one Oak lesson prints, and her Scene Six line about a police
 * caution, which only Save My Exams prints; both moments are described, not
 * quoted, or not used.
 *
 * SECOND PASS (25 September 2026). Every quoted phrase in this file was
 * re-checked against the downloaded text of those sources, and every plot
 * detail against at least one of them. What that pass removed, so that nobody
 * puts it back without a source: Mai's clients wanting "bingo" numbers (no
 * source says bingo); Mai speaking the play's first line; the play being
 * written in Pinnock's "early twenties" (she says only that she was young);
 * the National Theatre production touring before it reached the National (it
 * opened in Canterbury, then played the Cottesloe, then toured); Enid relying
 * on the church "to listen to her"; Mai "insisting on being paid"; Brod's
 * "old suit". Enid's Scene Eight line is cut to "In a way we poorer than them",
 * which Oak's typed quiz and Save My Exams both print; the sentence after it
 * is printed differently by the two, so it is described, not quoted.
 */
export const guide: StudyGuide = {
  slug: 'leave-taking',
  title: 'Leave Taking',
  author: 'Winsome Pinnock',
  form: 'play',
  scope:
    "The whole play, in eight scenes. Page references follow the Nick Hern Books edition (2018), the edition AQA's own guidance quotes from; if your copy is a different printing, use the scene numbers, which do not change. Check your board's list of editions with your teacher.",
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Winsome Pinnock 1989, 2018. Published by Nick Hern Books (2018 edition). Short quotations are used for criticism and review.',
  },
  workLength: {
    words: 15000,
    basis:
      'Estimated, not counted: no copy of the play is held. The Nick Hern Books paperback runs to 88 pages including front matter, and published page references place the end of Scene Four at page 45 of eight scenes. Any length above 3,000 words puts the play in the long-work band, where the page may quote at most 400 words in total, so the estimate cannot loosen the limit.',
  },

  overview: {
    summary: [
      'Leave Taking follows the Matthews family over a few weeks in London in the 1980s. Enid came to England from Jamaica as a young woman, one of the Windrush generation, and works as a hospital cleaner, holding down two jobs to give her London-born daughters the chances she never had. Del, 18, has left school, has just lost her job and stays out all night. Viv, a year younger, is revising for the exams that should take her to university. The play opens in the Deptford bedsit of Mai, an obeah woman, where Enid has brought both girls for a reading: she wants to know whether to send money to her sister in Jamaica, who says their mother is ill, and she suspects that Del is pregnant.',
      "Scene Two brings the family's tensions into the open. Brod, Enid's friend since childhood, comes to help her receive the Pastor and rages at a Home Office letter that has made him pay to become a citizen of the country he has lived in for thirty years. Del attacks her mother for bowing to an England that polices and belittles them, blames her for their father's leaving, and is slapped. She walks out, and Viv follows her. That evening, after the Pastor has gone, a phone call from Enid's sister Cynthia in Jamaica brings the news that their mother, Mooma, has died. In Scene Four, grieving and drinking, Enid tells Viv about the poverty she grew up in and the mother who would not say goodbye, gives her a cheque for university, and admits that she wants to go home.",
      "The second half of the play moves to Mai's bedsit. Del has moved in with Mai, and she is pregnant. Viv visits and tries to give her sister the university money, then confesses that she walked out of one of her English exams; Del, furious, throws her out and tells her to go back and sit it. Enid returns to Mai, sleepless and sure that her mother would have lived if she had sent the money, and breaks down. Brod, thrown out by Enid, turns up at Mai's and tells Del what her mother has never told her: that their father, worn down by racist abuse at work, became violent at home, and that Enid left him to protect her daughters.",
      "In the final scene, weeks later, Del has been learning obeah from Mai and sits exams in it. Reading Mai's palm, she finds that Mai's heart is failing. Mai gives her the notebook of everything she knows and sends her to see the next client alone, a meeting Mai has quietly arranged. The client is Enid. Del hands her the envelope of money Viv brought in Scene Five, and for the first time mother and daughter talk honestly: Enid tells Del that Viv is going to study Black Studies, that she has always seen how her daughters are treated, that she was hard on them to prepare them for how hard life would be, and that her own mother never seemed to like her and would not speak to her even on her visits home. The play ends as Del takes her mother's hand and begins a reading.",
      "The title carries the whole play. Every character has taken leave of something: a country, a mother, a husband, a home, a child. The publisher's blurb calls it “an epic story of what we leave behind in order to find home”, and the question it keeps asking is what that leaving costs, and who pays.",
    ],
  },

  context: [
    {
      heading: 'Winsome Pinnock and the play on stage',
      body: "Pinnock was born in Islington, north London, in 1961, to parents who had migrated from Jamaica, and studied English and Drama at Goldsmiths. Her parents were part of the Windrush generation, as she has said, and the play draws on the world she grew up in: her mother worked as a cleaner, like Enid, and her father at Smithfield Meat Market, which is where Eduqas's notes place Del's father's job. That is a link worth knowing, not a key to the play; Pinnock has stressed that the Matthews family is a very specific family, not a portrait of every Caribbean family in Britain. Leave Taking, her first full-length play, written when she was young herself, as she has said, was first staged at the Liverpool Playhouse Studio in November 1987. It won the George Devine Award in 1991, and the National Theatre's production, which opened in Canterbury in December 1994 before playing the National's Cottesloe Theatre and touring into 1995, made her the first Black British woman to have a play produced by the National. The play was revived at the Bush Theatre in London in 2018, directed by Madani Younis, and has been set for GCSE by OCR, AQA and Eduqas, with AQA and Eduqas first examining it in 2025. Pinnock has said that at the time people were talking a great deal about the conflict between first-generation Caribbean migrants and their British-born children, and the play grew from that. Oak National Academy's lessons add that she had never seen a Black British cleaner as the heroine of a play, which is exactly what Enid is.",
    },
    {
      heading: 'The Windrush generation',
      body: "After the Second World War, Britain was short of workers, and people from its Caribbean colonies, who were British subjects with the right to live and work in the UK, were drawn by the promise of work. The Empire Windrush, which brought migrants from the Caribbean in 1948, has given its name to everyone who arrived between then and the early 1970s. Many had been taught at school to think of Britain as the mother country, and thousands of Caribbeans had served in British forces in the two world wars, so many arrived already thinking of themselves as British. Many took jobs in the NHS and on public transport, which needed workers after the war, and many met open hostility. In her introduction to the play Pinnock writes that her own mother came from Jamaica in 1959, that her parents' generation had been “indoctrinated” by a colonial education that glorified all things British, and that despite their disappointment they rarely talked about the hardships they faced. Enid and Brod are of this generation, and Mai, who also came to England from Jamaica, probably is too. Enid's cleaning job, her silence about the past, Brod's thirty years on an estate, and her family's belief that she must be rich all come from this history.",
    },
    {
      heading: "Citizenship, and Brod's letter",
      body: "The Immigration Act 1971 and the British Nationality Act 1981, in force from 1983, narrowed who counted as British. People like Brod, who had arrived as British subjects and never doubted they belonged, found they now had to apply, and pay, to be recognised as citizens. In Scene Two Brod has received exactly such a letter and has had to pay fifty pounds. In 2018, the year of the Bush Theatre revival, the Windrush scandal became national news: the Home Office had wrongly detained people of this generation, denied them work and healthcare, and deported some of them, because they could not prove a status they had always held. Pinnock wrote the play decades earlier, but Brod's anger reads today almost as a prophecy.",
    },
    {
      heading: 'Policing and unrest in the 1980s',
      body: "In April 1981 rioting broke out in Brixton, south London, after a police operation in which officers stopped and searched 943 people in five days under the so-called sus law, which let them stop and search anyone they believed to be acting suspiciously. The African-Caribbean community accused the police of using those powers disproportionately against Black people, and Lord Scarman's report on the riots, published in November 1981, found evidence that stop and search had been used disproportionately and indiscriminately against them. That summer there was unrest in other cities too, including Toxteth in Liverpool, where the play would open six years later, and there was rioting in Brixton again in 1985. This is the world behind Del's accusation that the police are hunting her generation, and behind Brod's remark in Scene Three about the young people rioting on television.",
    },
    {
      heading: 'Jamaica, colonialism and Nanny of the Maroons',
      body: "Britain seized Jamaica in 1655 and ruled it for three centuries, running its economy on the labour of enslaved Africans until slavery was abolished in the 1830s; the island became independent in 1962. In Scene Two Brod blames Jamaica's poverty on colonialism, and Enid's memories of her rural childhood in Scene Four show that poverty from the inside. Brod also asks Viv if she has heard of Nanny of the Maroons, an early eighteenth-century leader of the Windward Maroons, communities of people who had escaped slavery and fought British forces in the mountains, and later named a National Hero of Jamaica. Viv has never been taught about her, and in Scene Seven neither has Del.",
    },
    {
      heading: 'Obeah',
      body: "Obeah is a Caribbean tradition of spiritual and healing practice with roots in West African religion, carried across the Atlantic by enslaved people and kept alive in secret. Its practitioners give readings, read palms, make herbal remedies and charms, and listen to people in trouble. Jamaica's colonial assembly first banned it in 1760, after an uprising of enslaved people, and later laws kept it illegal: Pinnock's introduction points to a law of 1898 that is still on the statute books. In the introduction to the play Pinnock writes that her mother and some of her peers kept an interest in consulting obeah practitioners in times of crisis. When Enid goes to Mai, then, the audience understands that she feels herself to be in crisis, and that she is reaching back to a tradition that colonial law punished and respectable Christian society looked down on.",
    },
    {
      heading: 'Two generations, two strategies',
      body: "The play sets first-generation migrants (Enid, Brod, Mai) against their British-born children (Del, Viv, and Mai's son, who is talked about but never seen). The older generation survived by working hard, keeping quiet and behaving impeccably. Del, born here, refuses to be grateful for a country that treats her as an outsider, and tells her mother she is angry instead; Viv quietly finds that school has no place for her. Pinnock has explained Enid's strictness as fear of how Black young people were treated and criminalised in Britain. That is the key to the play's central conflict: Enid and Del are not arguing about whether racism exists, but about how to survive it.",
    },
  ],

  themes: [
    {
      title: 'Home and belonging',
      body: "Almost everyone in the play asks where home is, and almost every answer turns out to be wrong. In Scene Two Enid insists “this is my home” and tells Brod that if he longs for Jamaica he should go back; at the end of Scene Four, soon after she learns that her mother has died, she says “I want... I want to go home”, and means Jamaica. Brod dreams of Jamaica but cannot answer Enid's challenge to return. Viv wants to go to the West Indies to find out who she is, while Del claims she already knows. Mai offers another answer in Scene Six, at the end of a speech to Del about her son: “You at peace with yourself, you at home anywhere.” One reading takes this as Pinnock's message, that home is an inner settlement rather than a place. The stronger reading notices why Mai needs to say it: her son, born in England, never felt British. The inner peace is needed because the outer home has been refused. Fittingly, the play ends neither in Enid's flat nor in Jamaica, but at a table in a bedsit, where a mother and daughter finally reach each other.",
    },
    {
      title: 'Mothers, daughters and generations',
      body: "The central conflict is between Enid and Del, and it peaks in the slap at the end of Scene Two. But Pinnock builds a chain of mothers and children so that no one is simply to blame. Enid's own mother kept working the land and would not say goodbye on the day Enid left Jamaica, and, as Enid reveals at the very end, never seemed to like her. Mai tells Del that she was hard on her son because she was trying to save him. And in Scene Five Del treats Viv much as Enid treats her, throwing her out to force her back to her exams. The pattern suggests that harshness is how love is handed down in this family, as armour against a hostile world. A reader could see Enid simply as controlling and cold, and Del's anger invites that view. The play, though, keeps revealing what Enid has survived, which makes her strictness look like protection rather than coldness. The ending does not undo the past, but it breaks the pattern: for once, the daughter listens and the mother speaks.",
    },
    {
      title: 'Racism and the promise of Britain',
      body: "Enid's generation was raised to revere Britain, and the play measures that promise against the reality. Enid cleans at a hospital, and Del reminds her that at a staff party she attended as a guest she was the one told to clean up after a colleague who had been sick. Brod, after thirty years here, receives a letter that treats him as an alien, and his friend Gullyman is broken after racists vandalise his car and daub a slur on his door. Del sees police vans hunting her generation and managers who treat them like “the lowest of the low”, including one who treats her as if she cannot speak English, in the city where she was born. Most painfully, Brod reveals in Scene Seven that Del's father, humiliated at work, came home and made Enid “treat him like a king”: racism outside the house became violence inside it. Del accuses Enid of not seeing any of this, but the final scene proves her wrong. Enid has seen it all, and says it makes her want to “tear the place down”. Her silence was never blindness. It was a survival strategy, and the play asks what it has cost her.",
    },
    {
      title: 'Education and identity',
      body: "Education is the family's great hope and its great disappointment. Enid's sacrifices are aimed at Viv's university place, and Viv is a model student who knows how to give the answers examiners reward, yet she tells Del “I search for myself in them books, I'm never there.” The curriculum has no room for Nanny of the Maroons, or for the history Brod carries in his head. Del's schooling failed differently: in Scene Five Mai sees that Del had a liking for books but struggled to read, a difficulty her teachers never recognised. Pinnock does not reject education. Del, who left school, is furious when Viv walks out of an exam, and by the end both sisters are studying: Viv is going to read Black Studies, and Del has sat Mai's exams in obeah, holds her notebook and is trusted with a client of her own. The play's argument is not against learning but about whose knowledge counts, and it treats Mai's teaching and Viv's degree as equally serious.",
    },
    {
      title: 'Healing, faith and obeah',
      body: "Enid lives between two faiths. She cleans her flat anxiously for the Pastor's visit and his blessing, yet in a crisis she goes to Mai, three times in the course of the play. Brod, too, finds English church life tame beside the services he and Enid remember from Jamaica, where the congregation talked in tongues. One reading is that obeah in the play is less about magic than about attention. Mai's creed in Scene One is “I don't deal in numbers”: what she deals in, she says, is people. In Scene Five she calls her work a “calling”. When Enid refuses a doctor in Scene Six, asking “What they know about a black woman soul?”, she is saying that healing needs someone who understands where you come from. Mai gives her a remedy, but the real treatment is letting her grief out. The play leaves it open whether obeah's power is supernatural: Del finds Mai's illness in her palm, yet in Scene Eight Mai forbids her ever to repeat a magic trick with a candle and insists that obeah is a science. What is not in doubt is its meaning. A practice outlawed under colonial rule survives, and passes from Mai to Del, as a way of keeping a culture's memory alive.",
    },
    {
      title: 'Secrets and the past',
      body: "Enid keeps her past locked away. Her daughters know almost nothing about her childhood, her mother or why their father left, and Del fills the gap with blame. Pinnock structures the play as a series of disclosures, each forced out by loss. Mooma's death makes Enid talk to Viv in Scene Four; Enid's breakdown at home, when she stops cooking and cleaning and throws Brod out, brings him to Mai's, where he tells Del the truth in Scene Seven; and in Scene Eight, as Mai's illness is discovered, Del and Enid finally meet face to face. Brod is the family's archive, the one person who knew Enid before England. The past also lives in the people we never see: Mooma, the girls' father, Mai's son, Gullyman. One reading is that Enid's silence was protective, keeping violence out of her daughters' lives, as Brod claims. Another is that it isolated her, so that her own daughter could think of her as a monster. The play supports both, and its ending suggests a third way: Del reading her mother's palm, which is to say reading her past, with her permission.",
    },
  ],

  characters: [
    {
      name: 'Enid',
      role: 'The mother: Jamaican-born, in her forties, a hospital cleaner raising two daughters alone in north London',
      body: "Enid came to England as a young woman to join her husband, full of plans; she had first dreamed of America, where an uncle had gone. She has built a respectable life through sheer work (“I work two jobs seven days a week”, she tells Del) and defends England fiercely: “England been good to me. I proud a my English girls.” She hides her past, even from her daughters, and she worries constantly about how things look. Yet she visits Mai three times, and her faith in obeah shows that Jamaica has never left her. Her mother's death breaks her composure. She drinks alone, tells Viv she comes “from the dirt”, throws Brod and Viv out, stops cooking and cleaning, and lets out a silent scream at Mai's. Pinnock's introduction describes her as “caught between two worlds”, and the play gradually reveals the cost: an abusive marriage she left to protect her children, and a mother who never seemed to love her. In the last scene she finally speaks, and her daughter finally hears her.",
    },
    {
      name: 'Del',
      role: 'The elder daughter, 18, born in London: the rebel who becomes an obeah woman',
      body: "Del's first line, about Mai, is “She stinks”, and in Scene One she calls obeah “mumbo jumbo”, pockets one of Mai's charms and refuses a reading. She stays out all night following a sound system, has lost her job, and is pregnant by a boyfriend she says she has finished with. Her rage at her mother in Scene Two is political as well as personal: she sees police and managers treating her as less than a citizen and cannot bear Enid's gratitude to England. But Pinnock plants hints of another Del from the start, as she “hangs back” when her mother and sister leave Mai's. At Mai's she watches, asks questions and secretly dabs on a love potion; Mai sees the reading difficulty school missed, and later that Del has the gift. She is fiercely protective of Viv's future and, in Scene Seven, refuses at first to hear the truth about her father. Her arc, from mocking obeah to practising it and reading her mother's palm, is the play's clearest journey towards self-acceptance.",
    },
    {
      name: 'Viv',
      role: 'The younger daughter, 17, born in London: the model student looking for herself',
      body: "Viv is Enid's pride: studious, anxious about her grades, headed for university. She is also the family's peacemaker, covering for Del and following her out after the slap. Curious about the Jamaica her mother will not discuss, she wants to go to the West Indies because Brod has told her it will help her understand who she is, and she wants a reading from Mai to find out what grades she will get. Her quiet frustration grows through the play. She feels the books she studies have nothing to do with her, says “Me and those teachers don't speak the same lingo”, and makes one act of rebellion, walking out of an English exam. Her loyalty is shown in sacrifice: she offers Del the money Enid saved for her and promises to help with the baby. By the end, she is going to study Black Studies, a course that promises the education in herself that school never gave her.",
    },
    {
      name: 'Mai',
      role: 'The obeah woman, Jamaican-born, living in a bedsit in Deptford',
      body: "The play opens and closes in Mai's room, and she is in five of its eight scenes. Her mother discovered her gift when she was thirteen, and she treats obeah as a vocation, a “calling” that her husband had no choice about. She is funny, sharp and unsentimental (“I don't deal in numbers”, she says in Scene One; what she deals in is people), and she reads people with great accuracy: she sees that Del needs to talk long before Del admits it, and in Scene Seven, studying Del's face, she recognises her gift (“Now I see it plain plain”). Pinnock calls her an “enigmatic figure”, and we learn about her mainly through what she gives. Her own mother died eighteen years ago; her son, born in England, never felt British and dreamed of escape. Her speech about her ancestors arriving in Jamaica in the hold of a ship gives the play its deepest historical perspective. Dying of a heart condition, she gives Del her notebook and sends her to see a client alone, and the play strongly suggests that Del will take her place, so that the tradition outlives her.",
    },
    {
      name: 'Brod',
      role: "Broderick, Enid's friend since childhood in Jamaica, who appears in three scenes",
      body: "Brod appears only in Scenes Two, Three and Seven, but his impact is enormous. He is the play's political voice: furious at the Home Office letter that has made him pay to be a citizen, bitter about colonialism, haunted by what happened to his friend Gullyman, whose “mind crack” after a racist attack. He is also its memory, the only character who knew Enid in Jamaica, and he teaches the girls the history their schools leave out. He drinks heavily, which the play sometimes treats as a joke, but Pinnock lets us see the loneliness underneath: his wife and children live in Jamaica and he rarely sees them. He loves Enid, though “Not in that way”, and he warns her that her daughters are “going forget where them come from” if she keeps Jamaica from them. In Scene Seven he does what Enid will not, telling Del about her father's violence and her mother's courage. His dramatic function is to open what Enid keeps shut.",
    },
    {
      name: 'Mooma',
      role: "Enid's mother in Jamaica, never seen, whose death turns the play",
      body: "Mooma never appears, yet she shapes every scene after the third. In Scene One Enid tells Mai that her sister in Jamaica says Mooma is ill and needs money, and Enid, suspecting her sister is lying, does not send it. At the end of Scene Three a phone call reports her death, and Enid's guilt drives her collapse. Enid remembers that on the day she left Jamaica her mother kept working the land and would not say goodbye, and in the final scene she reveals the deeper wound: she believes her mother never liked her because of the way she looked, “everything that make you invisible in the world”, and that she never spoke to her again. Mooma is the first link in the play's chain of mothers and daughters, and the reason the ending matters: Enid could never be reconciled with her mother, but Del can still reach Enid.",
    },
  ],

  keyQuotes: [
    {
      text: 'All my life I think of meself as a British subject',
      where: 'Brod, Scene Two (page 27)',
      analysis:
        "Brod's speech about the Home Office letter begins with a lifetime of certainty, “All my life”, before the letter demands he pay to become a citizen. The verb “think” is quietly devastating: what he took as a fact about himself turns out to have been only a belief. The phrase “British subject” is the language of the Empire that brought him here, and the speech exposes how that promise was withdrawn. Use it for belonging, citizenship, and the Windrush context.",
    },
    {
      text: 'England been good to me. I proud a my English girls.',
      where: 'Enid, Scene Two (page 29)',
      analysis:
        'Enid defends England in two short, firm statements, as if saying them makes them true. The irony is in the grammar: she claims her daughters are English in the Jamaican Creole of the country she will not talk about. Her pride is real and earned, but the line also shows how much she needs England to have been worth it. Set it against her collapse after Scene Three, and against Del, who refuses to be grateful.',
    },
    {
      text: 'These girls got Caribbean souls.',
      where: 'Brod, Scene Two (page 29)',
      analysis:
        "Brod's reply to Enid's “English girls” could stand as the play's thesis in five words. Where Enid talks about nationality, he talks about the soul, something inherited rather than chosen and beyond the reach of any Home Office. Pinnock gives both of them part of the truth: the girls are English by birth and Caribbean by inheritance, and the play follows each of them as they discover what that means.",
    },
    {
      text: "You don't see the police vans hunting us down",
      where: 'Del, Scene Two',
      analysis:
        "Del's verb “hunting” turns the police into predators and her generation into prey, in the city where she was born. The accusation “You don't see” is aimed at Enid as much as at the police: Del believes her mother is blind to racism because she is too busy bowing to England. The line reflects the real stop-and-search policing of the early 1980s, and the final scene will show that Del was wrong about what her mother sees.",
    },
    {
      text: 'I can see you need to talk.',
      where: 'Mai to Del, near the end of Scene One',
      analysis:
        "Del has just dismissed Mai's offer of someone to talk to as mumbo jumbo, and Mai answers with calm certainty. The verb “see” matters: Mai's gift is seeing what others hide, and she sees Del's need before Del will admit it. The line plants the relationship that fills the second half of the play, and it starts a pattern of seeing and being seen that runs all the way to the last stage direction.",
    },
    {
      text: 'You see what nonsense you put in the girl head?',
      where: 'Enid to Brod, Scene Three (page 39)',
      analysis:
        "Enid blames Brod for Viv's wish to take a year off and go to Jamaica, dismissing her daughter's search for her roots as “nonsense”. She is speaking to Brod, to Viv and, moments later, into the phone to her sister, so the staging traps her between London and Jamaica. The rhetorical question shuts down the conversation, but the phone call that interrupts it brings the Jamaica she has avoided crashing into her home.",
    },
    {
      text: 'I want... I want to go home.',
      where: 'Enid, the end of Scene Four (page 45)',
      analysis:
        "The line that ends Scene Four reverses everything Enid has insisted on. In Scene Two England was her home; now, in her fresh grief for her mother, “home” means Jamaica. The ellipsis and the repeated “I want” show how hard the admission is to make, as if she has to force it past years of denial. Use it to show the turning point in Enid's arc and the idea that grief exposes what we really belong to.",
    },
    {
      text: 'Pat me on the head and they all come tumbling out',
      where: 'Viv to Del, Scene Five (page 53)',
      analysis:
        'Viv describes her own success with contempt. “Pat me on the head” is how you reward a pet or a small child, so the image makes her a well-trained performer rather than a thinker, and the answers “tumbling out” suggest something automatic, not chosen. It reframes everything Enid is proud of: the model student feels her cleverness has been used to make her obedient. It leads straight into the line that follows it.',
    },
    {
      text: "I search for myself in them books, I'm never there",
      where: 'Viv, Scene Five (page 53)',
      analysis:
        "Viv, the family's academic success, explains why success feels hollow. The metaphor of searching for herself inside books makes the curriculum a mirror that shows her nothing. The short final clause, “I'm never there”, is bleak and absolute. Pinnock criticises a Eurocentric education that leaves Black British students invisible, and the line prepares for Viv's walk-out from her exam and her later choice of Black Studies.",
    },
    {
      text: 'What they know about a black woman soul?',
      where: 'Enid to Mai, Scene Six',
      analysis:
        "Enid's rhetorical question refuses the doctor Mai suggests. She is not rejecting medicine so much as a system that cannot see her: her grief, guilt and exhaustion are, in her words, matters of the soul, and only someone who shares her history can heal them. The phrase “black woman” names the double invisibility of race and gender that she will describe again in the final scene. It explains why she keeps returning to Mai.",
    },
    {
      text: 'You at peace with yourself, you at home anywhere.',
      where: 'Mai to Del, Scene Six',
      analysis:
        "Mai's balanced sentence, two matching clauses, sounds like a proverb, and it offers the play's most hopeful definition of home: not a country but a state of mind. She says it while describing her restless son, born in England but never at home there, and she is really speaking to Del. The more challenging reading is that this peace is needed precisely because the outer world refuses these characters a home. Essential for any essay on belonging.",
    },
    {
      text: "condemn our people to wander the earth like ghosts who can't find rest",
      where: 'Mai to Del, Scene Six',
      analysis:
        "Mai traces a line of forced and chosen journeys, from her grandfather's grandfather in the hold of a slave ship to her mother's migration to Cuba and her own to England, and wonders if it is a curse. The simile of ghosts who cannot rest makes the descendants of slavery restless spirits. The verb “condemn” suggests a sentence passed on a whole people. It is the play's widest view of dislocation, linking Del's restlessness to centuries of history.",
    },
    {
      text: 'Because you want to think of her as a monster?',
      where: 'Brod to Del, Scene Seven',
      analysis:
        "When Del refuses to hear about her father's violence, Brod's question exposes her motive: blaming her mother is easier than pitying her. The word “monster” names the version of Enid that Del has built out of silence and anger. His next words remind Del that she will soon be a mother herself. The scene is the hinge of Del's arc, because what she learns here is what lets her take her mother's hand in Scene Eight.",
    },
    {
      text: 'In a way we poorer than them.',
      where: 'Enid to Del, Scene Eight',
      analysis:
        "Enid compares her family's rural poverty in Jamaica with her life in England and finds England poorer. In Jamaica, she explains, the village shared what little it had; in England you are poor, and you are poor by yourself. The phrase “in a way” marks it as a reluctant admission from someone who has defended England all play. It exposes isolation as the hidden cost of migration, the thing her relatives who think she is rich cannot imagine.",
    },
    {
      text: 'Nobody see you, nobody hear you',
      where: 'Enid to Del, Scene Eight',
      analysis:
        "In the most honest speech she makes in the play, Enid describes life as a Black woman in England through repetition: two parallel clauses, each beginning “Nobody”. She speaks of “you” rather than “I”, keeping her pain at a slight distance even now. The line answers Del's accusation in Scene Two that Enid does not see racism: she has always seen it, and been unseen by it. It is the moment Del begins to understand her.",
    },
    {
      text: 'Right up to the end she never say a word to me',
      where: 'Enid to Del, Scene Eight',
      analysis:
        "Enid's final revelation is that her mother went on refusing her until she died. The phrase “Right up to the end” turns the silence into a lifelong sentence, and it explains Enid's guilt and her reluctance to speak about Jamaica. Placed just before Del reaches for her mother's hand, it gives the ending its weight: Enid could never be reconciled with her mother, but her daughter chooses not to repeat that silence.",
    },
  ],

  extracts: [
    {
      title: "Brod's letter and Enid's English girls",
      where: 'Scene Two, pages 27 to 29',
      pointer:
        "From Brod's account of the Home Office letter, beginning “All my life I think of meself as a British subject” (page 27), to his answer to Enid that the girls have Caribbean souls (page 29).",
      summary:
        "Brod, dressed up for the Pastor's visit in a tie he hates, tells of the letter (page 27) that has made him pay to become a citizen after thirty years in England, and of being called an alien. As the argument about how the girls should be brought up goes on, Enid sets out her own creed: you come to England, you fit in, you keep the rules, and England has been good to her. She calls her daughters English, and Brod answers that she is teaching them all wrong, because they have Caribbean souls (page 29).",
      annotations: [
        {
          phrase: 'All my life I think of meself as a British subject',
          note: "The sentence opens a lifetime of loyalty, which Brod goes on to illustrate with waving a flag on Empire Day and touching his hat whenever he sees a picture of the Queen, before the letter arrives, so the audience feels the betrayal as a fall. “British subject” is the Empire's term, and Brod has taken it at its word.",
        },
        {
          phrase: 'As if me live the last thirty years on the moon',
          note: 'Brod turns the official word “alien” into a bitter joke: the simile of the moon shows how absurd it is to call him foreign after thirty years on a London estate. Humour here carries real hurt.',
        },
        {
          phrase: 'England been good to me',
          note: "Enid's reply is short and absolute. Set against Brod's letter, her gratitude looks either loyal or wilfully blind, and Del will later accuse her of the second. The play slowly shows it is neither.",
        },
        {
          phrase: 'These girls got Caribbean souls',
          note: 'Brod shifts the argument from passports to souls, from what the state decides to what is inherited. The plural “girls” claims both daughters, and the rest of the play tests his claim through each of them.',
        },
      ],
      question:
        "Starting with this extract, explore how Pinnock presents different attitudes to England in Leave Taking. Write about how Pinnock presents Brod's and Enid's attitudes in this extract, and how she presents attitudes to England in the play as a whole.",
    },
    {
      title: "After the Pastor's visit: the phone call",
      where: 'Scene Three, pages 35 to 40',
      pointer:
        "From the opening stage directions, a few hours after the Pastor's visit (page 35), to the moment Enid drops the phone (page 40).",
      summary:
        "Late in the evening, after the Pastor has gone, Enid tidies up while Brod drinks from his flask and picks at the leftovers. Enid worries about how the girls' absence looked, calls her daughters wild, and Brod defends them. The two old friends remember the passionate church services of their youth, and dance. Enid rejects Viv's plan to take a year off and go to Jamaica even as she takes a call from her sister, and through that call she learns that their mother has died.",
      annotations: [
        {
          phrase: "He's a high man",
          note: "Enid's anxious respect for the Pastor shows how much she wants to be seen as respectable in England. Her worry about appearances sets up the painful contrast with the news at the end of the scene.",
        },
        {
          phrase: "Those girls ain't wild, Enid",
          note: "Brod reframes the girls' behaviour against the real unrest he has seen on the news. He is the adult who defends the younger generation to the older, the peacemaker role he plays again with Del in Scene Seven.",
        },
        {
          phrase: 'You see what nonsense you put in the girl head?',
          note: 'Enid speaks to Brod, then to Viv, then into the phone, so the staging divides her attention between London and Jamaica. Her dismissal of Viv’s search for her roots is overtaken by the Jamaica she cannot escape.',
        },
        {
          phrase: 'something drains out of her',
          note: 'Pinnock gives the climax to a stage direction, not a speech. The image of something draining out makes Enid a vessel emptied of the certainty she has held all play; the audience watches the news land before it is spoken.',
        },
      ],
      question:
        "Starting with this extract, explore how Pinnock presents Enid as divided between England and Jamaica. Write about how Pinnock presents Enid in this extract, and how she presents Enid's divided loyalties in the play as a whole.",
    },
    {
      title: "Enid's confession and the palm reading",
      where: 'Scene Eight, the end of the play',
      pointer:
        "From Enid's “Nobody see you, nobody hear you” to the final stage directions, as the lights go down.",
      summary:
        "Enid, who has come to Mai's for a reading and found Del instead, speaks more openly than at any point in the play. She describes being unseen and unheard in England, the silent screaming inside, and finally her own mother, who she believes never liked her and who stayed silent to the end. Del struggles with herself, then makes a decision: she sits with her mother, takes her hand, looks into her eyes and begins a reading as the lights go down.",
      annotations: [
        {
          phrase: 'Nobody see you, nobody hear you',
          note: 'The repeated “nobody” builds a picture of total invisibility. Enid has been accused of not seeing racism; here she reveals she has been living inside it, unseen herself, and the confession changes how Del sees her.',
        },
        {
          phrase: 'Right up to the end she never say a word to me',
          note: "Enid's last revelation explains her guilt and her silence about Jamaica. It also warns Del: this is what a mother and daughter who never speak are left with, which gives the reading that follows its urgency.",
        },
        {
          phrase: 'smooths the palm with her thumbs',
          note: 'The gentle, careful verb “smooths” answers the slap at the end of Scene Two. In a family where a hand was last raised in anger, a hand is now used to heal, and Del touches her mother as Mai has taught her.',
        },
        {
          phrase: "looks into her mother's eyes",
          note: 'Earlier in Scene Eight Mai teaches Del that everything a reader needs to know is in the client’s eyes. The final image is recognition: for the first time in the play Del really looks at her mother, and the play ends on that look.',
        },
      ],
      question:
        'Starting with this extract, explore how Pinnock presents the relationship between Enid and Del. Write about how Pinnock presents their relationship in this extract, and how she presents it in the play as a whole.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Two voices: Jamaican Creole and London English',
      example:
        "Enid, Brod and Mai speak Jamaican Creole (“I proud a my English girls”; “You at peace with yourself, you at home anywhere”), while Del and Viv speak the English of London teenagers (“Me and those teachers don't speak the same lingo”).",
      effect:
        'The generations are divided by speech before they say anything. Pinnock lets the Creole carry rhythm, humour and wisdom rather than treating it as a lack of education, which is itself a political choice on a British stage. The irony that Enid claims her daughters are English in Creole grammar shows that she carries Jamaica in her voice even as she denies it.',
    },
    {
      technique: 'Stage directions that carry the climax',
      example:
        "The news of Mooma's death lands in a stage direction, “As ENID listens something drains out of her”, and in Scene Six Enid's grief comes out first as “a soundless scream” and then as a “howl of pain”.",
      effect:
        "At the moments of greatest feeling, Pinnock takes words away. The audience watches grief arrive before anyone names it, and Enid, who has controlled her speech all play, is overwhelmed by something language cannot hold. Mai's instruction to let it out treats the howl as healing, so silence and sound become part of the play's argument about repression. Pinnock's stage direction even suggests that the howl may echo Brod's talking in tongues in Scene Three, which quietly links Enid's grief to the Jamaican worship she remembered so fondly there.",
    },
    {
      technique: 'Metaphor and loaded verbs',
      example:
        "Del says “You don't see the police vans hunting us down” and accuses Enid of bowing to “your beloved England”; Enid says “I come from the dirt”.",
      effect:
        "“Hunting” makes the police predators; “bowing” makes Enid a servant, and “beloved” turns her love of England into sarcasm. Enid's “dirt” compresses rural poverty and shame into one word. Pinnock's characters argue in images, so a single verb in a quotation often carries a whole attitude: learn these words, not just the lines.",
    },
    {
      technique: 'Simile',
      example:
        "Mai says her people are condemned to wander “like ghosts who can't find rest” (Scene Six), and describes Del's reading difficulty as “words run across the page like black ants” (Scene Five). In Scene Two Brod says the girls are not English the way a newsreader is, with Englishness running through them “like the letters on a stick a rock” (page 29).",
      effect:
        "Two of the similes come from Mai, the character who reads others most clearly. The ghosts make centuries of forced migration into a haunting, linking Del to her enslaved ancestors. The black ants make an invisible learning difficulty vivid and physical, showing an audience what school failed to see. Brod's stick of seaside rock, with its name printed all the way through, is comic and exact: an Englishness that goes right to the centre, which he says Enid's daughters do not have. Pinnock's similes are homely and physical, which makes large ideas about history and identity easy to see.",
    },
    {
      technique: 'Rhetorical questions',
      example:
        'Enid asks “What they know about a black woman soul?” in Scene Six, and Brod asks Del “Because you want to think of her as a monster?” in Scene Seven.',
      effect:
        "The questions are accusations in disguise. Enid's needs no answer because she is sure the answer is nothing; Brod's forces Del to face her own motives. In a family where the truth is rarely stated, Pinnock often lets it arrive as a question that one character throws at another.",
    },
    {
      technique: 'Repetition and broken syntax',
      example:
        "Enid's “I want... I want to go home” at the end of Scene Four, and “Nobody see you, nobody hear you” in Scene Eight.",
      effect:
        'The repeated “I want” and the ellipsis show a woman forcing out an admission she has resisted for years. The repeated “nobody” in Scene Eight builds her invisibility into a pattern. Enid is at her most fluent when defending England and at her most broken when telling the truth, and Pinnock uses that contrast to mark her moments of honesty.',
    },
    {
      technique: 'Comedy',
      example:
        "Mai's dry “I don't deal in numbers” in Scene One; Del's first line about Mai, “She stinks”; Brod's drinking and his dislike of wearing a tie run through Scenes Two and Three.",
      effect:
        "AQA describes the play as funny as well as moving, and the comedy does real work. It makes the characters warm and recognisable, releases tension before the play's blows land, and lets serious ideas, like Brod's alien joke about the moon, arrive in a form an audience can bear. A strong answer notices that the jokes often carry pain.",
    },
    {
      technique: 'The motif of hands',
      example:
        "Near the end of Scene One Mai holds out her hand and makes Del give back the charm she has taken; at the end of Scene Two Enid slaps Del, who says “That's the last time”; in Scene Five Mai and Del read each other's palms; at the end of Scene Eight Del “smooths the palm with her thumbs”.",
      effect:
        "Hands trace the relationship between the generations across the play: first a demand, then a blow, then a half-playful exchange of readings as Mai and Del grow closer, finally a touch that reads and heals. Palm reading is literally a way of reading someone's life through their hand, so the final image joins the family plot and the cultural one: the mother whose hand struck Del in Scene Two is the one whose hand Del now holds.",
    },
    {
      technique: 'The motif of seeing and being seen',
      example:
        "Mai tells Del “I can see you need to talk” (Scene One) and, recognising her gift, “Now I see it plain plain” (Scene Seven); Del accuses Enid, “You don't see the police vans hunting us down” (Scene Two); Enid answers, at last, “Nobody see you, nobody hear you” (Scene Eight); and in the final stage direction Del “looks into her mother's eyes”.",
      effect:
        "Pinnock keeps returning to the verb “see”, and the pattern carries the play's argument. Mai sees people clearly; Del believes her mother sees nothing; Enid reveals that the real problem is being unseen by England. The play ends on a look, so the resolution is an act of seeing. One reading is that Del has learned Mai's way of seeing and turned it on her own mother, which is why the ending feels earned rather than sentimental.",
    },
  ],

  structureForm: [
    {
      heading: 'Eight scenes, two rooms',
      body: "The play has eight scenes and only two settings: Enid's flat in north London and Mai's bedsit in Deptford. Scene One is at Mai's; Scenes Two to Four are in Enid's home; Scenes Five to Eight are all at Mai's. The play's centre of gravity moves exactly halfway through, after Mooma's death, from the tidy, respectable flat Enid has built to the room Pinnock has called a place of “liberating chaos”. As Del leaves home for Mai's, so does the play. By the end, Enid too has to come to Mai's to be heard.",
    },
    {
      heading: 'A play that begins and ends with a reading',
      body: "Leave Taking opens with Enid bringing her daughters to Mai for a reading and closes with Del reading her mother's palm. The circular structure measures Del's change precisely: the girl who mocked obeah as “mumbo jumbo” in Scene One now practises it, and the client whose past she reads is the mother she refused to understand. The frame also shows that something has been handed on, since Mai, who began the play as the reader, is dying at its end.",
    },
    {
      heading: 'The turning point',
      body: "The phone call at the end of Scene Three is the play's climax and turning point. Until then Enid holds her line that England is home and the past is best forgotten. Everything after it is a response to Mooma's death: Enid's confessions to Viv in Scene Four, her collapse in Scene Six, her throwing out of Brod and Viv, and the final conversation with Del. Pinnock puts the crisis early, so that most of the play is about living with loss rather than waiting for it.",
    },
    {
      heading: 'Time between the scenes',
      body: "The action covers a few weeks. Scene Two is a few days after Scene One, Scene Three a few hours after Scene Two, and Scenes Five and Eight each jump a few weeks. Important events happen off stage in the gaps: the Pastor's visit, Del's nights out, Enid throwing Brod and Viv out of the house. Pinnock shows us consequences rather than events, so each scene opens with the audience piecing together what has changed, often from a stage direction: Scene Five opens with Mai sprinkling salt around her room before Del appears in nothing but a T-shirt far too big for her, rubbing her eyes, just woken up, which tells the audience at once that Del now lives there.",
    },
    {
      heading: 'Scene endings as blows',
      body: "Pinnock ends scenes on a physical or verbal shock: Del hanging back and Mai's outstretched hand demanding the stolen charm (Scene One); the slap and Del's exit, with Viv following her (Scene Two); the news of Mooma's death (Scene Three); “I want... I want to go home” (Scene Four); Del kicking the wall, and Mai seeing at last that she has the gift (Scene Seven); the lights going down on the reading (Scene Eight). The endings are good places to look for evidence, and several mirror each other. Mai tells Del to let it out in Scene Seven just as she told Enid in Scene Six, and in Scene Five Del's anger at Viv for walking out of an exam repeats, in a new generation, the harsh love of Enid's slap.",
    },
    {
      heading: 'The characters we never see',
      body: "With a cast of five, Pinnock fills the play with absent people: Mooma, Enid's sister, the girls' father, Mai's son, Brod's wife and children, Gullyman, the Pastor. Pinnock has said that her first draft had more characters, but the Liverpool Playhouse could only afford five actors, so she cut the rest; the limit became a technique. The absent characters are mostly the past and Jamaica, pressing in on a London family through letters, phone calls and memories, which is exactly how the past works on Enid.",
    },
    {
      heading: 'Form: a domestic drama with a political edge',
      body: "The play is a naturalistic family drama: realistic rooms, everyday dialogue, small domestic actions like cleaning, revising and tidying up after a guest. Its politics arrive through that domestic surface, in a letter, a staff party, a bad day at work. This is a choice worth writing about: by keeping history inside the family, Pinnock shows that immigration law, colonial education and racism are not abstractions but things that happen at a kitchen table. A Black British working-class mother at the centre of a play on the National Theatre's stage was itself a statement in the 1990s.",
    },
  ],

  vocabulary: [
    {
      term: 'Obeah',
      definition:
        'A Caribbean tradition of spiritual and healing practice with West African roots: readings, palm reading, herbal remedies and charms. Outlawed under colonial rule in Jamaica.',
    },
    {
      term: 'Windrush generation',
      definition:
        'People who came to Britain from the Caribbean between 1948 and the early 1970s, named after the Empire Windrush. Enid and Brod belong to it, and Mai probably does too.',
    },
    {
      term: 'Windrush scandal',
      definition:
        'The revelation in 2018 that the Home Office had wrongly detained, denied services to and deported people of the Windrush generation who could not prove their right to live in Britain.',
    },
    {
      term: 'Naturalisation',
      definition:
        'The legal process by which someone becomes a citizen of a country they were not born in. Brod is angry to be told he must pay for it after thirty years.',
    },
    {
      term: 'First-generation and second-generation migrants',
      definition:
        'The first generation moved countries (Enid, Brod, Mai); the second generation are their children, born in the new country (Del and Viv).',
    },
    {
      term: 'Diaspora',
      definition:
        'A people scattered from their original homeland, such as the descendants of enslaved Africans across the Caribbean and Britain. Mai speaks for the whole diaspora in Scene Six.',
    },
    {
      term: 'Colonialism',
      definition:
        "One country taking control of another and exploiting it for its own benefit. Britain ruled Jamaica from 1655 to 1962, and Brod blames Jamaica's poverty on colonialism.",
    },
    {
      term: 'Nanny of the Maroons',
      definition:
        'An early eighteenth-century leader of the Windward Maroons, escaped enslaved people who fought British forces in Jamaica; a National Hero of Jamaica. Neither daughter has heard of her.',
    },
    {
      term: 'Jamaican Creole (Patois)',
      definition:
        'The language of Jamaica, with its own grammar and vocabulary, spoken in the play by Enid, Brod and Mai.',
    },
    {
      term: 'Eurocentric',
      definition:
        'Centred on European history and culture while ignoring the rest of the world. Used to describe the school curriculum Viv cannot find herself in.',
    },
    {
      term: 'Stop and search (the sus law)',
      definition:
        'Police powers under an old vagrancy law to stop, search and arrest people believed to be acting suspiciously. The Scarman Report of 1981 found them used disproportionately against Black people. The background to Del’s police vans.',
    },
    {
      term: 'Talking in tongues',
      definition:
        'Speaking in an unknown language during worship, believed by some Christians to be the spirit speaking through a person. Brod and Enid remember it from church in Jamaica.',
    },
    {
      term: 'Bedsit',
      definition:
        'A single rented room used for both living and sleeping. Mai lives and works in one in Deptford, and it becomes the play’s second home.',
    },
    {
      term: 'Dramatic function',
      definition:
        "The job a character or device does in the play: for example, Brod's function is to reveal Enid's past and voice political criticism.",
    },
    {
      term: 'Subtext',
      definition:
        'What a character feels or means beneath what they say. Pinnock asks audiences to listen for it, especially in Enid, who rarely says what she feels.',
    },
    {
      term: 'Foreshadowing',
      definition:
        'A hint of what will happen later. Del hanging back at Mai’s in Scene One foreshadows her moving in with Mai in Scene Five.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Starting with the extract from Scene Eight (from “Nobody see you, nobody hear you” to the end of the play), explore how Pinnock presents the relationship between Enid and Del. Write about how Pinnock presents their relationship in this extract and in the play as a whole.',
        skill: 'Extract and whole-text response',
        guidance: [
          'Open with an argument, not a summary: for example, that Pinnock presents a relationship damaged by silence and repaired by listening, and that the ending is a beginning rather than a neat resolution.',
          "In the extract, analyse Enid's repetition of “nobody” and her use of “you” rather than “I”: she is finally speaking, but still at a distance. Show how this answers Del's accusation in Scene Two that Enid does not see racism.",
          'Analyse the final stage directions closely: the struggle, the decision, the verbs of touch, the look into her eyes. Link the smoothing of the palm back to the slap at the end of Scene Two.',
          "Move to the whole play: Del's hostility in Scenes One and Two, Enid's worry that Del will destroy herself in Scene Six, and Brod's revelation in Scene Seven, which changes what Del knows about her mother.",
          'Bring in the chain of mothers: Enid and Mooma, Mai and her son. Argue that Del breaks a pattern Enid could not, and support it with “Right up to the end she never say a word to me”.',
          'Use context where it explains the conflict: the two generations had different ways of surviving racism, which is why love looks like harshness in this family.',
        ],
      },
      {
        question: 'How does Pinnock explore ideas about home and belonging in Leave Taking?',
        skill: 'Whole-text essay',
        guidance: [
          'Define your terms: home as a place, a country, a family and a feeling. Argue that the play tests each and finds that none is secure, then suggest where Pinnock locates home in the end.',
          "Trace Enid's journey from “this is my home” (Scene Two) to “I want... I want to go home” (end of Scene Four), and explain what changes her.",
          "Contrast the first generation's loss (Brod's letter, “All my life I think of meself as a British subject”) with the second generation's search (Viv's “I search for myself in them books, I'm never there”).",
          "Analyse Mai's two Scene Six lines as the play's thinking at its deepest: the ghosts who cannot rest, and “You at peace with yourself, you at home anywhere”. Weigh whether this is consolation or a real answer.",
          'Use structure: the move from Enid’s flat to Mai’s bedsit halfway through, and the ending at Mai’s table.',
          'Link to context briefly and precisely: the Windrush generation, citizenship law, and the 2018 scandal that made Brod’s anger feel current.',
        ],
      },
      {
        question: 'How does Pinnock present the character of Mai and her importance in the play?',
        skill: 'Whole-text essay (character)',
        guidance: [
          "Establish Mai's dramatic functions: she opens and closes the play, links Jamaica and London, and links the two generations.",
          "Analyse her voice: her humour (“I don't deal in numbers”), her proverb-like wisdom, and her similes in Scene Six.",
          'Show how she understands characters before they understand themselves: Del’s need to talk in Scene One, Del’s reading difficulty in Scene Five, Del’s gift in Scene Seven.',
          'Explore her relationship with Enid: Enid trusts her in a way she trusts no doctor (“What they know about a black woman soul?”), and Mai lets her grief out.',
          'End with the handing on: her failing heart, the notebook, and the client she trusts Del to see alone. Argue that through Mai, Pinnock shows a suppressed tradition surviving.',
        ],
      },
      {
        question: 'How far does Pinnock present Britain as a hostile place for her characters?',
        skill: 'Whole-text essay (argument and context)',
        guidance: [
          'Answer the question of how far directly: Britain is hostile, but it is also where Viv’s future lies and where Enid has made a life, and Pinnock refuses a simple verdict.',
          "Gather the evidence of hostility across generations: Brod's letter and Gullyman, Del's police vans and managers, the staff party, and the racism that turned Del's father violent.",
          "Weigh the other side: Enid's pride (“England been good to me”), the cheque for university, Viv's place to study Black Studies.",
          "Use the final scene to resolve the argument: Enid's “Nobody see you, nobody hear you” shows she has always known the hostility, and chose to endure it for her daughters.",
          'Use context precisely: stop and search, the Scarman Report, the 1981 Act, and the Windrush scandal that gave the 2018 revival its force.',
        ],
      },
    ],
    tips: [
      'Know the scene numbers. Leave Taking is organised in eight numbered scenes, and a precise reference, such as the end of Scene Four, shows command of the whole play.',
      'Quote the dialect exactly as printed. “I proud a my English girls” is not a mistake to correct; the Creole grammar is part of what you are analysing.',
      'Treat the stage directions as evidence. Some of the play’s most important moments, like the news of Mooma’s death and the final reading, are carried by them, and examiners reward answers that remember this is a play.',
      'Do not write Enid off as a villain or Del as simply rude. The strongest answers show how the play changes our view of both, especially after Scene Seven.',
      'Keep context tied to the text. One precise sentence on the Windrush generation or the 1981 riots, linked to a line, is worth more than a paragraph of history.',
      'Remember the absent characters. Mooma, the girls’ father and Mai’s son are never seen but explain much of what the on-stage characters do.',
      'Check with your teacher whether your board prints an extract for this text or asks a whole-play essay, and practise the form you will meet.',
    ],
  },

  modelAnswer: {
    question: 'How does Pinnock explore ideas about home and belonging in Leave Taking?',
    paragraph:
      "Pinnock presents home not as a fixed place but as a claim that grief can overturn. In Scene Two Enid shuts down Brod's longing for Jamaica by insisting “this is my home”, and the demonstrative “this” plants her firmly in the London flat she has cleaned for the Pastor's visit. Yet once she has learned that her mother has died, she ends Scene Four with “I want... I want to go home”, and now home means Jamaica. The ellipsis and the repeated “I want” suggest an admission she has resisted for years, forced out of her by loss. Pinnock places this reversal straight after the play's turning point, the news of Mooma's death, which implies that Enid's belonging in England was always partly an act of will. Mai offers a different answer in Scene Six: “You at peace with yourself, you at home anywhere.” This could be read as the play's message, that home is inner peace. The more convincing reading is that Mai needs such an answer because Britain has refused her son, and Enid, the outer home they were promised. Belonging, for Pinnock, is something her characters must build inside themselves precisely because the country they live in keeps withholding it.",
    commentary: [
      'It opens with an arguable idea (home as a claim that grief can overturn) rather than a description, and every later sentence serves that argument.',
      'It analyses small language choices, the demonstrative “this”, the ellipsis and the repetition, and says what each suggests about Enid rather than simply naming them.',
      'It links two moments across the play and uses structure, pointing out that the reversal comes straight after the turning point, which shows understanding of the whole play.',
      "It weighs two interpretations of Mai's line and says which is more convincing and why, which is the difference between a competent and a strong answer.",
      'It keeps quotations short and embedded in its own sentences, and it ends by returning to the question with a clear judgement.',
    ],
  },

  timeline: [
    {
      where: 'Scene One',
      title: 'The reading at Mai’s',
      summary:
        'Enid brings Del and Viv to Mai for readings. She asks whether to trust her sister’s plea for money for their sick mother, and suspects Del is pregnant. Del mocks obeah and pockets a charm; Viv hopes to learn her exam grades. As the others leave, Del hangs back; Mai offers her someone to talk to, Del refuses, and Mai makes her hand back the charm.',
      setting: 'Mai’s bedsit in Deptford, south-east London',
      who: ['Mai', 'Enid', 'Del', 'Viv'],
      quote: "I don't deal in numbers.",
      themes: ['Healing, faith and obeah', 'Mothers, daughters and generations'],
      tension: 3,
      significance:
        'The play begins with conflict between mother and daughter over obeah, and quietly plants the bond between Del and Mai that will change Del’s life.',
    },
    {
      where: 'Scene Two',
      title: 'The slap',
      summary:
        'A few days later Enid cleans for the Pastor’s visit while Viv revises. Brod rages at the Home Office letter and argues that Enid is cutting her daughters off from Jamaica. Del comes home having stayed out all night and lost her job; the row about England and their father ends with Enid slapping her. Del leaves, and Viv follows.',
      setting: 'Enid’s flat in north London',
      who: ['Enid', 'Viv', 'Brod', 'Del'],
      quote: 'These girls got Caribbean souls.',
      themes: [
        'Racism and the promise of Britain',
        'Home and belonging',
        'Mothers, daughters and generations',
      ],
      tension: 5,
      significance:
        'Every conflict in the play is laid out in one scene, and the slap drives Del out of the family home and into Mai’s world.',
    },
    {
      where: 'Scene Three',
      title: 'The phone call',
      summary:
        'After the Pastor has gone, Brod finds his polite visit tame beside the services he and Enid remember from Jamaica, and the two old friends dance. Enid rejects Viv’s plan to take a year off and go to Jamaica. A call from Enid’s sister Cynthia brings the news that their mother has died.',
      setting: 'Enid’s flat, a few hours later, late evening',
      who: ['Enid', 'Brod', 'Viv', 'Mooma'],
      quote: 'As ENID listens something drains out of her.',
      themes: ['Home and belonging', 'Secrets and the past'],
      tension: 4,
      significance:
        'The turning point: Mooma’s death breaks Enid’s composure and sets off every revelation that follows.',
    },
    {
      where: 'Scene Four',
      title: 'Enid opens up',
      summary:
        'Viv finds her mother on the sofa, drinking and grieving. Grief loosens Enid’s silence: she describes her family’s poverty, the uncle who went to America, the mother who kept working rather than say goodbye, and the plans she made with Viv’s father. She gives Viv a cheque for university.',
      setting: 'The living room of Enid’s flat',
      who: ['Enid', 'Viv', 'Mooma'],
      quote: 'I want... I want to go home.',
      themes: ['Secrets and the past', 'Home and belonging', 'Mothers, daughters and generations'],
      tension: 3,
      significance:
        'Enid’s first confession, and the scene where the woman who called England home admits she longs for Jamaica.',
    },
    {
      where: 'Scene Five',
      title: 'Sisters at Mai’s',
      summary:
        'Weeks later Del is living with Mai and is pregnant. Her questions show a growing interest in obeah, and Mai sees the reading difficulty school ignored. Viv brings the university money for Del and admits she walked out of an English exam; Del throws her out and tells her to go back and sit it.',
      setting: 'Mai’s room, a few weeks later, midday',
      who: ['Mai', 'Del', 'Viv'],
      quote: "Me and those teachers don't speak the same lingo",
      themes: [
        'Education and identity',
        'Mothers, daughters and generations',
        'Healing, faith and obeah',
      ],
      tension: 4,
      significance:
        'The sisters show their loyalty through sacrifice, and Del, who left school, proves how much she values her sister’s education.',
    },
    {
      where: 'Scene Six',
      title: 'Enid’s howl',
      summary:
        'Enid, sleepless for weeks, returns to Mai, sure her mother would have lived if she had sent the money. She turns down Mai’s suggestion of a doctor and lets out her grief in a silent scream and a howl. Mai tells Del about her restless son, born in England, and urges her to go home to her mother.',
      setting: 'Mai’s room',
      who: ['Enid', 'Mai', 'Del'],
      quote: 'You at peace with yourself, you at home anywhere.',
      themes: ['Healing, faith and obeah', 'Home and belonging', 'Secrets and the past'],
      tension: 4,
      significance:
        'Enid’s collapse, and Mai’s speeches on dislocation and peace, give the play its deepest thinking about home.',
    },
    {
      where: 'Scene Seven',
      title: 'Brod tells Del the truth',
      summary:
        'Brod wakes at Mai’s after a night of drinking: Enid has thrown him and Viv out. He tells Del that her father, humiliated by racism at work, became violent at home, and that Enid left him to protect her girls. Del refuses to believe it and kicks the wall. Mai realises that Del has the gift.',
      setting: 'Mai’s room',
      who: ['Brod', 'Mai', 'Del'],
      quote: 'Because you want to think of her as a monster?',
      themes: [
        'Secrets and the past',
        'Racism and the promise of Britain',
        'Mothers, daughters and generations',
      ],
      tension: 4,
      significance:
        'The secret at the heart of the family comes out, and it changes how Del sees her mother.',
    },
    {
      where: 'Scene Eight',
      title: 'Del’s first reading',
      summary:
        'Del sits exams in obeah and, reading Mai’s palm, finds her heart is failing. Mai gives her the notebook and sends her to see the next client alone: Enid. Mother and daughter speak honestly at last, and the play ends as Del takes Enid’s hand and begins the reading.',
      setting: 'Mai’s bedsit, a few weeks later',
      who: ['Del', 'Mai', 'Enid'],
      quote: 'Is time. You ready.',
      themes: [
        'Healing, faith and obeah',
        'Mothers, daughters and generations',
        'Secrets and the past',
      ],
      tension: 4,
      significance:
        'The tradition passes from Mai to Del, and the play closes on a first step towards reconciliation rather than a neat ending.',
    },
  ],

  relationships: [
    {
      from: 'Enid',
      to: 'Del',
      kind: 'mother and elder daughter',
      note: 'The play’s central conflict: accusation and a slap in Scene Two, silence through the middle, and a first honest conversation and a palm reading in Scene Eight.',
    },
    {
      from: 'Enid',
      to: 'Viv',
      kind: 'mother and younger daughter',
      note: 'Enid pins her hopes on Viv’s education and confides in her when the news of Mooma’s death comes; Viv quietly resists the future planned for her before choosing Black Studies.',
    },
    {
      from: 'Del',
      to: 'Viv',
      kind: 'sisters',
      note: 'They bicker, but their loyalty runs deep: Viv covers for Del and offers her the university money, and Del throws Viv out to force her back to her exams.',
    },
    {
      from: 'Enid',
      to: 'Brod',
      kind: 'friends since childhood in Jamaica',
      note: 'They argue about England and Jamaica, dance together, and depend on each other; he loves her, though not in that way, and he tells her daughters what she will not.',
    },
    {
      from: 'Mai',
      to: 'Del',
      kind: 'teacher and apprentice',
      note: 'From mockery in Scene One to shared life in Scenes Five to Eight: Mai sees Del’s gift, teaches her obeah, gives her the notebook and trusts her to see a client alone.',
    },
    {
      from: 'Enid',
      to: 'Mai',
      kind: 'client and obeah woman',
      note: 'Enid visits Mai three times, trusting her with the grief and guilt she can show no one else; the third time, she finds her own daughter in Mai’s place.',
    },
    {
      from: 'Brod',
      to: 'Viv',
      kind: 'family friend she calls uncle',
      note: 'Brod feeds Viv’s curiosity about Jamaica and teaches her history school leaves out, such as Nanny of the Maroons.',
    },
    {
      from: 'Brod',
      to: 'Del',
      kind: 'family friend and truth-teller',
      note: 'In Scene Seven Brod forces Del to hear what happened between her parents, and the revelation begins her understanding of her mother.',
    },
    {
      from: 'Enid',
      to: 'Mooma',
      kind: 'daughter and mother, estranged',
      note: 'An off-stage relationship of silence and guilt: Mooma would not say goodbye or speak to Enid, and her death unlocks Enid’s past.',
    },
  ],

  compareWith: [
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        'Set by all three of this play’s boards: another modern drama in which a family’s private life is broken open to show the social injustice underneath it.',
    },
    {
      title: 'Anita and Me',
      href: '/revision/texts/anita-and-me',
      reason:
        'Also set by AQA, OCR and Eduqas: a British-born daughter of migrants growing up between two cultures, with a parent generation that remembers another country.',
    },
    {
      title: 'Blood Brothers',
      href: '/revision/texts/blood-brothers',
      reason:
        'On AQA and Eduqas beside Leave Taking: a working-class mother, a family divided, and a play that shows how poverty and society shape the lives of the next generation.',
    },
    {
      title: 'Princess & The Hustler',
      href: '/revision/texts/princess-and-the-hustler',
      reason:
        'Added by AQA in the same round as Leave Taking: another play by a Black British woman about a Black British family, set in 1960s Bristol against the backdrop of the bus boycott, and another place to compare a parent’s hopes for her children with how Britain treats them.',
    },
  ],

  contentGuidance: [
    'discrimination',
    'colonialism',
    'crime_injustice',
    'violence',
    'mortality',
    'addiction',
    'mental_health',
    'intimate_relationships',
    'mythological_religious',
    'supernatural',
  ],

  quotesFromElsewhere: [
    'an epic story of what we leave behind in order to find home',
    'caught between two worlds',
    'enigmatic figure',
    'liberating chaos',
    'indoctrinated',
  ],

  sources: [
    {
      label:
        'Nick Hern Books, Leave Taking by Winsome Pinnock: blurb (quoted in the overview), 2018 edition details (paperback, 88 pages, published 24 May 2018; first staged at the Liverpool Playhouse Studio, 1987), its note that the play was inspired by Pinnock’s own family story, and Enid’s line “What they know about a black woman soul?”',
      url: 'https://www.nickhernbooks.co.uk/leave-taking',
    },
    {
      label:
        'Nick Hern Books, Leave Taking: The GCSE Study Guide by Lynette Carr Armstrong and Samantha Wharton (2024), publisher’s sample: extracts from the 2018 edition with page numbers (pages 27, 29, 35, 36, 39, 40, 45, including Brod’s “They going forget where them come from” on page 29), the Scene Eight summary (Mai arranges the meeting with Enid; Del gives back the money), the structure note, obeah and migration context, and the copyright line “1989, 2018”',
      url: 'https://www.nickhernbooks.co.uk/asset/10338?cmsAsset=1',
    },
    {
      label:
        'Nick Hern Books blog, “These stories need to be heard” (25 June 2024): the play at GCSE (OCR, and AQA and Eduqas for first assessment in summer 2025), the National Theatre first, Pinnock’s awards, her account of the generational conflict that inspired it, that she was young herself when she wrote it, that her parents were part of the Windrush generation, and that the Matthews are a very specific family',
      url: 'https://nickhernbooksblog.com/2024/06/25/these-stories-need-to-be-heard-why-leave-takings-arrival-at-gcse-matters/',
    },
    {
      label:
        'AQA, Leave Taking by Winsome Pinnock: text page, with Viv’s lines from page 53 (“Pat me on the head...” and “I search for myself...”)',
      url: 'https://www.aqa.org.uk/spark-something/modern-texts/leave-taking-by-winsome-pinnock',
    },
    {
      label:
        'AQA, GCSE English Literature: Inspirational new texts and poetry (companion guide): description of the play as funny and moving, set in North London; Viv’s line quoted from page 53 of the Nick Hern Books 2018 edition; Princess & The Hustler as its companion new AQA play, set in 1960s Bristol',
      url: 'https://filestore.aqa.org.uk/resources/english/AQA-8702-COMP-GUIDE-TEXTS-POETRY.PDF',
    },
    {
      label:
        'Eduqas, Leave Taking knowledge organiser: eight scenes, the plot by scene, Mai living in Deptford, Del 18 and Viv about to sit A-levels, Mai giving Enid something for the stress, Enid no longer cooking or cleaning, Del’s father’s job at Smithfield meat market, the play starting and ending with a reading',
      url: 'https://resource.download.wjec.co.uk/vtc/2022-23/ko22-23_3-4/eduqas/leave-taking.pdf',
    },
    {
      label:
        'Eduqas, additional resources for Leave Taking: first teaching 2023, first assessment 2025',
      url: 'https://www.eduqas.co.uk/articles/supporting-you-additional-resources-for-winsome-pinnock-s-leave-taking-now-available/',
    },
    {
      label:
        'Oak National Academy, Leave Taking unit (29 lessons): scene-by-scene readings and typed quizzes quoting the text by scene, including Pinnock’s introduction to the play',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons',
    },
    {
      label:
        'Oak National Academy, An introduction to Leave Taking (Scene One: Mai, numbers, mumbo jumbo, the charm)',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/an-introduction-to-leave-taking',
    },
    {
      label:
        'Oak National Academy, Exploring the presentation of 1980s Britain (end of Scene Two: police vans, the staff party, Gullyman, the slap)',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/1980s-britain',
    },
    {
      label: 'Oak National Academy, An exploration of Scene Three',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/an-exploration-of-scene-three',
    },
    {
      label: 'Oak National Academy, An exploration of Scene Four',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/an-exploration-of-scene-four',
    },
    {
      label:
        'Oak National Academy, Scene Five (two lessons: Del and Mai; Viv and Del): the Scene Five opening stage directions, the end of Scene One re-read (“I can see you need to talk”, also in the typed quiz), Viv’s offer to help with the baby',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/a-continued-exploration-of-scene-five',
    },
    {
      label:
        'Oak National Academy, An exploration of Scene Six (Mai on home, dislocation and her son; Enid’s howl)',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/an-exploration-of-scene-six',
    },
    {
      label: 'Oak National Academy, An exploration of Scene Seven',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/an-exploration-of-scene-seven',
    },
    {
      label:
        'Oak National Academy, An exploration of Scene Eight (final stage directions read in full)',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/an-exploration-of-scene-eight',
    },
    {
      label:
        'Oak National Academy, The character of Brod (appears in three scenes; Scene Two quotations)',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/the-character-of-brod',
    },
    {
      label:
        'Oak National Academy, lessons on Enid (shame and guilt; Jamaica and England), Del’s development, and Mai and Del: Scene Four and Scene Eight quotations, Mai in five scenes, Enid’s three visits',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/dels-development',
    },
    {
      label:
        'Oak National Academy, Mai and Del: Pinnock’s introduction calls Mai “enigmatic”; Mai in five scenes; Del in six; Mai teaches that everything is in the client’s eyes; Mai’s son',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/mai-and-del',
    },
    {
      label:
        'Oak National Academy, Del’s relationship with herself: Mai’s mother finds her gift at thirteen (Scene One); Mai studies Del’s face and finds she has the gift, “Now I see it plain plain” (Scene Seven, also read in Creating a convincing argument); Del moves centre stage (Scene Eight)',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/dels-relationship-with-herself',
    },
    {
      label:
        'Oak National Academy, The Windrush generation: Pinnock’s introduction on her mother’s migration in 1959, a generation “indoctrinated” by colonial education, and hardships rarely discussed; Britain as the mother country, and 25,000 Caribbeans serving as British troops in the world wars; jobs in the NHS and transport',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/the-windrush-generation-k2397',
    },
    {
      label:
        'Oak National Academy, Winsome Pinnock introduces Leave Taking: her account of Mai’s “liberating chaos” against Enid’s constrained home; Enid’s strictness as fear of how Black youth were criminalised',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/winsome-pinnock-introduces-leave-taking',
    },
    {
      label:
        'Oak National Academy, Winsome Pinnock on writing Leave Taking: the Liverpool Playhouse could only afford five actors, so characters were cut from the first draft',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/winsome-pinnock-on-writing-leave-taking',
    },
    {
      label:
        'Oak National Academy, Annotating essay questions: Pinnock’s introduction describes Enid as “caught between two worlds”; Pinnock had not seen a cleaner as a lead character before',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/annotating-essay-questions-and-writing-thesis-statements',
    },
    {
      label:
        'Oak National Academy, Enid: England been good to me, and Enid’s relationships with Jamaica and England: Scene Two (“this is my home”, two jobs), Scene Four (“I come from the dirt”), Scene Eight (“Nobody see you”, “Right up to the end”, “tear the place down”)',
      url: 'https://www.thenational.academy/teachers/programmes/english-secondary-ks4-eduqas/units/modern-text-first-study-1718/lessons/enids-relationships-with-jamaica-and-england',
    },
    {
      label:
        'Save My Exams, Leave Taking: Character Quotations (cites Nick Hern Books 2018): Del’s Scene Two speech (“hunting us down”, “the lowest of the low”, “your beloved England”), Viv’s Scene Five lines, Mai’s “black ants” simile, Enid’s Scene Eight lines',
      url: 'https://www.savemyexams.com/gcse/english-literature/aqa/17/revision-notes/3-modern-texts/leave-taking/leave-taking-character-quotations/',
    },
    {
      label:
        'Save My Exams, Leave Taking: Key Theme Quotations (Brod’s letter speech; Enid’s last lines)',
      url: 'https://www.savemyexams.com/gcse/english-literature/aqa/17/revision-notes/3-modern-texts/leave-taking/leave-taking-key-theme-quotations/',
    },
    {
      label: 'Save My Exams, Leave Taking: Writer’s Methods and Techniques (the two settings)',
      url: 'https://www.savemyexams.com/gcse/english-literature/aqa/17/revision-notes/3-modern-texts/leave-taking/leave-taking-writers-methods-and-techniques/',
    },
    {
      label:
        'Wikipedia, Leave Taking: premiere at the Liverpool Playhouse on 11 November 1987, George Devine Award 1991, Lyric Hammersmith 1990, the National Theatre production opening at the Gulbenkian Theatre, Canterbury, on 8 December 1994, then the Cottesloe and a tour to March 1995, the Bush Theatre 2018 directed by Madani Younis',
      url: 'https://en.wikipedia.org/wiki/Leave_Taking',
    },
    {
      label:
        'Wikipedia, Winsome Pinnock: born Islington 1961 to Jamaican parents, her mother a cleaner and her father a checker at Smithfield Meat Market, Goldsmiths, George Devine Award 1991 (this page dates the premiere to 1988; the publisher, AQA and the play’s own page say 1987, which the guide follows)',
      url: 'https://en.wikipedia.org/wiki/Winsome_Pinnock',
    },
    {
      label: 'Wikipedia, Nanny of the Maroons: Windward Maroons, First Maroon War, National Hero',
      url: 'https://en.wikipedia.org/wiki/Nanny_of_the_Maroons',
    },
    {
      label:
        'Wikipedia, Obeah: first banned in Jamaica by the colonial assembly in 1760, after Tacky’s War',
      url: 'https://en.wikipedia.org/wiki/Obeah',
    },
    {
      label: 'Wikipedia, British Nationality Act 1981: in force 1 January 1983',
      url: 'https://en.wikipedia.org/wiki/British_Nationality_Act_1981',
    },
    {
      label: 'Wikipedia, Windrush scandal: detentions, deportations, 2018',
      url: 'https://en.wikipedia.org/wiki/Windrush_scandal',
    },
    {
      label:
        'Wikipedia, 1981 Brixton riot: 943 people stopped and searched in five days under the sus law, the community’s accusation of disproportionate use, the Scarman Report (25 November 1981) and its finding on stop and search, unrest in Toxteth and elsewhere, Brixton again in 1985',
      url: 'https://en.wikipedia.org/wiki/1981_Brixton_riot',
    },
  ],
}
