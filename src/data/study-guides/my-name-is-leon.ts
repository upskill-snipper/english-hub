import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * My Name is Leon, Kit de Waal (2016). A complete guide: the text had no guide
 * anywhere on the site before this file.
 *
 * THE NOVEL IS IN COPYRIGHT and no licensed copy is held here. Quotations were
 * checked word for word against these, in order of authority:
 *
 * - The publisher's own sample of the Penguin UK ebook (ISBN 9780241973394),
 *   served by Jellybooks: the contents page (42 chapters) and Chapters 1 to 5 in
 *   full. Every quotation from Chapters 1 to 5 is in it.
 * - Chapter 1 as printed twice more: the extract Linda's Book Bag ran for the
 *   Penguin paperback launch (UK wording) and BookBrowse's excerpt of the Simon &
 *   Schuster edition. THE US EDITION IS AMERICANISED ("Mom", "colored", "period"
 *   for full stop), so it corroborates words, never spelling. Quote the UK text.
 * - AQA's own guide to its 2023 set-text changes, which prints Tufty's lines on
 *   the sun with a page reference (page 94, Penguin), by permission of Penguin.
 * - WJEC's GCSE English Language and Literature knowledge organiser, which gives
 *   chapter-referenced quotations. Where it can be checked against the sample its
 *   words match, but it sometimes adds a word to make a fragment a sentence (its
 *   Chapter 5 line begins "There's", which the novel does not). So only the words
 *   of its Chapter 6, 14 and 41 lines are used here, never its framing.
 * - For Maureen's explanation in Chapter 9, three independent reviews that quote
 *   it identically (two from Penguin review copies), and a reader's published
 *   Kindle highlights (Remy Sharp), which are exported verbatim from the UK ebook.
 * - Those Kindle highlights also give, word for word, Mr Devlin's "Small minds,
 *   big feet" and Carol's curtsy in Chapter 41. Save My Exams quotes both
 *   identically and names the speakers, so each now has two sources.
 * - Leon's "I could be him, Mum" (Chapter 24): Chat About Books (a UK review)
 *   and Save My Exams print it identically; BookBrowse's US guide has "Mom".
 *
 * RE-CHECKED 26 September 2026, against the publisher's sample downloaded again:
 * every Chapter 1 to 5 quotation and plot fact. Corrected in that pass: the
 * police in Chapter 27 were said to take Castro away, which only one summary
 * says; Carol's meeting with Leon in Chapter 41 was called final, when Save My
 * Exams records that she says he can still see her; a Curly Wurly and Maureen
 * swearing under her breath, which no source here supports, were removed.
 *
 * FACT-CHECKED 26 September 2026, independently: every quotation re-matched by
 * script against a fresh download of the sample and fresh copies of the other
 * sources, all verbatim. Corrected in that pass: the riot card put Castro among
 * those present (he is already dead) and told the reveal of his death after the
 * gun, when Leon learns it at the allotment first; Jake was listed as present at
 * Maureen's Chapter 9 explanation, which no source says; "for the first time in
 * months" in Chapter 6 ignored Tina's care the night before; Maureen was said
 * to be "breathless for weeks" and Tufty to show Leon "how things grow" in
 * Chapter 17, neither supported; the Chapter 41 line was said not to promise
 * Jake's return, a claim about what Maureen does not say that one summary
 * contradicts; news of unrest was said to reach Leon "first through the
 * television", when the summaries put the allotment talk (Chapter 20) before the
 * televised riot (Chapter 22), so no order is claimed now; Mr Devlin's "Small
 * minds" line was tied to the Chapter 27 raid, but its Kindle location (2,045
 * of about 3,700) sits nearer Chapter 24 or 25 by an even spread, and a first
 * riot, on a street near Sylvia's, comes in Chapter 22, so no chapter or raid is
 * named for it now; readings stated as facts were reframed as readings.
 *
 * STILL DROPPED, because only Save My Exams printed them: lines of Tufty's poem,
 * DC Green's "Resisting arrest", Maureen's "in my books that's a sin", Tufty's
 * "Babies need looking after" and Leon's outburst in Chapter 37, among others.
 * The riot and Leon's recital of Tufty's poem are therefore described, not
 * quoted. WJEC's Chapter 28 line was left out for its language. Never use a
 * pirated full-text site to check a quotation: they surface in search results.
 *
 * Chapter numbers follow the publisher's contents page. Plot facts after
 * Chapter 5 follow Save My Exams' chapter-by-chapter summary and WJEC's plot
 * outline, which agree wherever both cover an event; details only one of them
 * gives are either left out or kept general. GradeSaver's community summary and
 * Litbug's chapter summaries contradict the novel and were not used.
 */
export const guide: StudyGuide = {
  slug: 'my-name-is-leon',
  title: 'My Name is Leon',
  author: 'Kit de Waal',
  form: 'novel',
  scope:
    'The whole novel (2016), in 42 numbered chapters. It is set for AQA GCSE English Literature (8702), Paper 2 Section A (modern texts), first examined in summer 2025. AQA sets the prose novel, not the BBC film. The exam is closed book and prints no extract: you write an essay on the novel from memory, so you need chapter references and short quotations you can trust.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Kit de Waal 2016. First published by Viking, an imprint of Penguin Books, in 2016; paperback by Penguin Books, 2017. Short quotations are used for the purposes of criticism and review.',
  },
  workLength: {
    words: 75000,
    basis:
      'Estimated, not counted: no licensed copy is held to count. The publisher’s sample of Chapters 1 to 5 runs to about 8,900 words, which is 5 of the novel’s 42 chapters, and Google Books lists the Penguin UK ebook at 288 pages; both point to a novel of roughly 75,000 to 80,000 words. A reader’s published Kindle highlights place Carol’s farewell in Chapter 41 at about location 3,556, which at roughly 21 words a location agrees. Any length over 3,000 words puts it under the long-work limit, so the estimate cannot loosen the quotation limits.',
  },

  overview: {
    summary: [
      'The novel opens on 2 April 1980, in a hospital, as Leon, eight years and nine months old, holds his newborn half-brother, Jake, while their mother, Carol, goes off to the smoking room and leaves him in charge. It is the first of many times. Carol loves her boys but is sinking into depression; Leon’s father, Byron, is gone, and Jake’s father, Tony, wants nothing to do with them. By the summer holidays Leon is feeding and changing Jake on his own while Carol stays in bed. When the money and the nappies run out, their neighbour Tina finds Carol, calls an ambulance and Social Services, and the brothers are taken to Maureen, an experienced foster carer in Birmingham.',
      'Maureen feeds them, listens to Leon and tells him the truth. So when the social workers decide that Jake will be adopted and Leon will not, it is Maureen who explains why: Jake is a white baby, and Leon, who is nine and mixed-race, is not. After Jake leaves, Leon’s grief comes out as anger. He steals, hides things and starts to plan a way to get Jake and his mother back. When Maureen is taken ill he moves in with her sister, Sylvia, and a new bike carries him to the allotments, where he meets Tufty, a Black man who reminds him of his dad, and Mr Devlin, an older Irishman. Through them Leon sees what 1981 means for the Black community around him: police harassment, anger and protest.',
      'The crisis comes in July 1981. Leon overhears half a conversation, is sure that Maureen and Sylvia are planning a life without him, and runs out into a night of rioting that began after a man died in police custody. He carries a pistol taken from Mr Devlin’s shed, which turns out to be made of wood. Tufty and Mr Devlin follow him into danger, and the three of them escape to Sylvia’s. In the last chapters Leon sees Carol in Bristol, hears from her that she cannot look after him, and learns that his home is to be with Maureen. The final chapter is set on the day of the royal wedding.',
      'De Waal tells the story in the present tense and in the third person, but so close to Leon that we see only what he sees. The reader understands more than he does, and that gap is where much of the novel’s power lies. It is a story about a child let down by the adults and institutions around him, and a story about a child who is found, fed and loved by people he never expected. Strong answers hold both of those together, and notice that the ending is hopeful without being complete: Leon has a home, but he has not got Jake back.',
    ],
  },

  context: [
    {
      heading: 'Kit de Waal',
      body: 'Kit de Waal was born in Birmingham in 1960 to an Irish mother and a Caribbean father from St Kitts, and grew up among the city’s Irish community in the 1960s and 1970s. Her mother was a foster carer. She worked for fifteen years in criminal and family law, sat as a magistrate, has served on adoption panels, advised Social Services on the care of foster children and wrote training manuals on adoption and foster care. She took an MA in creative writing at Oxford Brookes University. In 1981 she was living in Handsworth, in Birmingham, and she has said that the riots of that summer happened at the end of her road. That background matters. The social workers, case notes, panels and placements in the novel are drawn by someone who knew the system from the inside, the riot is one she lived beside, and the Irish and Caribbean Birmingham of the allotments is the city of her own childhood.',
    },
    {
      heading: 'Publication and reception',
      body: 'My Name is Leon was de Waal’s first novel. Viking, an imprint of Penguin, published it on 2 June 2016, and the Penguin paperback followed in April 2017. It was shortlisted for the Costa First Novel Award and won the Kerry Group Irish Novel of the Year award for 2017. Sir Lenny Henry narrated the audiobook and optioned the novel for the screen, and a BBC Two film directed by Lynette Linton, with the newcomer Cole Martin as Leon and a cast including Lenny Henry, Monica Dolan, Olivia Williams and Christopher Eccleston, was first broadcast on 10 June 2022. The film is an adaptation. The exam is on the book, and details from the film will not earn credit if the novel does not contain them.',
    },
    {
      heading: 'On the AQA specification',
      body: 'AQA added the novel to Paper 2, Section A (modern texts) of GCSE English Literature for first teaching in September 2023, with the first exams in summer 2025. It was one of three new modern texts, all by women, alongside Princess & The Hustler and Leave Taking; to make room, AQA withdrew The History Boys, Never Let Me Go and The Curious Incident of the Dog in the Night-Time, which were last examined in summer 2024. AQA’s own introduction calls the novel a coming-of-age story that deals with heavy subjects without becoming a story of misery, and that balance is worth keeping in mind: examiners reward answers that see the humour and warmth as well as the pain.',
    },
    {
      heading: 'Britain in 1981: policing and the riots',
      body: 'The second year of the novel is 1981, when rioting broke out in several English cities. In Brixton, London, in April, it followed Operation Swamp 81, in which plain-clothes police stopped and searched 943 people in five days. In July there were riots in Toxteth in Liverpool, Moss Side in Manchester and Handsworth in Birmingham, among other places; in Handsworth the worst violence came on the night of 10 to 11 July. Many Black people had long complained of being targeted under the so-called sus law, a power from the Vagrancy Act 1824 to stop and search people on suspicion alone. Lord Scarman’s report, published on 25 November 1981, found unquestionable evidence that stop and search had been used disproportionately and indiscriminately against Black people. De Waal’s riot is fictional in its detail, set off in the story by a death in police custody, but the police raid on the allotment, the treatment of Castro and the anger that follows belong to this real history. (The real Handsworth riot had a different flashpoint, so do not write that the novel’s riot copies it.)',
    },
    {
      heading: 'The royal wedding',
      body: 'Prince Charles married Lady Diana Spencer at St Paul’s Cathedral on Wednesday 29 July 1981. The day was a national holiday; about 28 million people in Britain watched on BBC and ITV, and around ten million took part in street parties. The novel sets Sylvia’s plans for a street party beside the riots, so that the summer of 1981 shows two faces of one country: one celebrating an ancient institution, and one protesting against the way another institution, the police, treated its citizens. Leon moves between the two, and the novel ends on the day of the wedding.',
    },
    {
      heading: 'The Irish in Birmingham',
      body: 'Mr Devlin belongs to one of Birmingham’s oldest migrant communities, and de Waal grew up inside it. On 21 November 1974 IRA bombs in Birmingham pubs killed 21 people and injured 182. Anti-Irish feeling followed: Irish people were abused and assaulted and Irish homes and businesses were attacked, and six Irishmen, the Birmingham Six, were convicted in 1975 and freed only when their convictions were quashed in 1991. In 1981 republican prisoners in Northern Ireland were on hunger strike, and ten died, the first of them Bobby Sands on 5 May; Leon hears talk of the hunger strikes at the allotments. So the novel’s Irishman and its Black characters meet as members of two communities that had both been treated with suspicion, and their quarrels suggest that the two men are wary of each other too.',
    },
    {
      heading: 'Race and the care system',
      body: 'The novel’s central injustice is a placement decision: the white baby is adopted, and his older, mixed-race brother is left in foster care. De Waal knew such decisions from adoption panels. In an interview with the Guardian, quoted by the Letterpress Project, she said that siblings are separated too often, and that sometimes there is no other option. The novel does not pretend the choice is simple, but it makes us feel its cost through Leon, and Maureen is blunt about the reason. Penguin’s teaching resources for the novel group its concerns under four headings: neglect and the care system, police brutality, interpersonal and institutional racism, and language and identity. That is a useful map of the connections an examiner hopes to see.',
    },
    {
      heading: 'A childhood in 1980',
      body: 'De Waal fills Leon’s world with the things a boy of 1980 cared about: The Dukes of Hazzard on the television (he wanted to name the baby Bo, after one of its heroes), Action Man soldiers, and, for his tenth birthday, Star Wars toys. These are not decoration. Leon’s love of toy soldiers and guns sits beside his gentleness with Jake and his care for plants, and the pistol at the climax grows out of a childhood full of pretend weapons. The period also explains Leon’s freedom. As NATE reports, de Waal has pointed out that a Leon of today would be “at home, on his phone, not out in the world”; in 1981 a nine-year-old with a bike could ride alone to the allotments, and the plot depends on it.',
    },
  ],

  themes: [
    {
      title: 'Family and belonging',
      body: 'The novel begins with a promise. In Chapter 1 Carol tells Leon it will be “Just me and you and him. Always.”, and within months the three of them are scattered. De Waal then builds a second family out of unlikely people: Maureen, who feeds Leon and tells him the truth; Sylvia, blunt and reluctant, who takes him in; Tufty, who reminds him of his dad; and Mr Devlin, who makes room for him at the allotment. One reading is that the novel argues family is made by care rather than by blood. That is convincing, but it is only half the picture, because Leon never stops wanting the family he was born into, and his meeting with Carol in Chapter 41 is tender even as it settles that he cannot live with her. The more precise argument is that de Waal lets both kinds of family be real: the lost one explains Leon’s grief, and the found one explains his survival. Belonging, for Leon, is not a place but a set of people who notice him.',
    },
    {
      title: 'Race and identity',
      body: 'Leon’s identity is questioned from the first chapter, when he tells the baby that “Mum says he’s coloured but Dad says he’s black” and decides that both are wrong, because his father is dark brown and he is light brown. Carol’s word is one many people already rejected in 1980, as Leon’s father does, and it is offensive now; what matters is that Leon sets aside both adults’ labels and describes himself. The care system is less careful. Jake, a white baby, is adopted; Leon, older and mixed-race, is not, and Maureen tells him why without softening it: “Because he’s a baby, a white baby. And you’re not.” At the allotments Leon finds Black men who talk about racism and politics and who remind him of his father, and through them he glimpses a heritage he has been cut off from. The cost of that separation is sharpest in Chapter 24, when he offers his mother “I could be him, Mum”: the boy whose name is the novel’s title offers to become, some of the time, the brother who was wanted. De Waal presents identity as something other people try to decide for Leon, and the novel moves towards him claiming it. The title itself is a statement of who he is.',
    },
    {
      title: 'Childhood and responsibility',
      body: 'From the first page Leon is given jobs that belong to adults. In the hospital Carol leaves him with the words “Leon, you watch him, love”, and by Chapter 5 he is running Jake’s mornings like a manual, with instructions that begin “Change the nappy”. Carol tells Tina that Leon is “a good kid, just gets on with it”, and de Waal lets the reader see the cost she cannot: the missed school, the hunger, the exhaustion. Leon’s reasoning is a child’s, which makes it more painful. He believes that “Leon can make her better if someone will give him some money”, as if his mother’s illness were a shopping problem. The novel’s arc can be read as Leon being given his childhood back. Maureen asks him to tell her Jake’s routines, which respects his expertise and lifts the burden from him in one gesture, and by the end he is a boy with a bike, runner beans of his own and adults who carry the weight.',
    },
    {
      title: 'The care system',
      body: 'De Waal knew the care system professionally, and the novel is neither an attack on it nor a defence. Leon sees social workers with a child’s suspicion: they “have two pretend faces, Pretend Happy and Pretend Sad”, and the decisions about his life are taken in rooms he is not in and recorded in papers he reads by stealth in Chapter 12. The system separates the brothers, moves Leon when Maureen falls ill and leaves him waiting for news of Jake. Yet it is also the system that rescues the boys from the flat and places them with Maureen, the novel’s best adult. The most convincing reading is that de Waal criticises the way the system treats children as cases, making decisions about them rather than with them, while showing that its success or failure depends on individual people. The contrast is sharpest when Maureen, who works inside the system, is openly angry at the decision to split the boys.',
    },
    {
      title: 'Loss and anger',
      body: 'Leon loses his father, his mother, his brother and, for a time, Maureen, and the novel is honest about what that does to a child. His grief comes out sideways: he takes coins from purses, hoards things for an escape, wrecks his room when Jake leaves and imagines switching the adults around him off like a television. De Waal presents this anger as understandable. As early as Chapter 5 the narration admits that “all the things he has to do make Leon so tired and angry”, and it notes that the adults around him hide their feelings, as social workers “make angry into sad”. Leon has no such mask. A strong answer argues that his anger is grief without a safe outlet, and that the riot at the climax turns his private rage into a public scene, where it becomes dangerous. What ends it is the adults who come after him.',
    },
    {
      title: 'Growth and hope',
      body: 'The allotments are the novel’s answer to the flats and offices where Leon’s life has been decided. There Tufty teaches him how to plant seeds and give growing things support, and he grows runner beans of his own. Tufty turns the sun into a kind of philosophy, telling Leon that it “is a healer” and that “You can manage in the sun what you can’t manage in the rain” (Chapter 17). The link to Leon is left for the reader to make: a child who has grown up in the rain is being given some sun. Some readers find the gardening symbolism too neat, but de Waal earns it by making hope slow and partial. Maureen’s words in Chapter 41, “This isn’t the whole of your life, love”, do not pretend that the hard part is over. They promise that the worst part of Leon’s life will not be all of it.',
    },
    {
      title: 'Injustice and protest',
      body: 'Leon’s story is set inside a year of public anger. At the allotments Tufty and his friends argue about racism and policing, and Tufty writes poems about it. Then the argument arrives in person: plain-clothes police come to the allotment, abuse Tufty’s friend Castro and wreck Tufty’s plot (Chapter 27). Even Mr Devlin, who is often at odds with Tufty, has no time for them: looking at plants their boots have trampled, he sums the police up as “Small minds, big feet.” Later a death in police custody, which turns out to be Castro’s, sets off a riot. De Waal does not make the riot glamorous. Leon, carrying a pistol from Mr Devlin’s shed that turns out to be wooden, walks into the middle of it and puts himself and the two men who follow him in danger. When a policeman raises his baton at him, it is words that save him: Leon recites lines from Tufty’s poem, and the man stops. One reading is that the novel sympathises with the protesters’ anger while fearing its violence; another is that it shows how injustice drags even children into conflict. Both are well supported. A strong answer can go further and argue that the private injustice of the adoption decision and the public injustice of the policing grow from the same attitudes.',
    },
  ],

  characters: [
    {
      name: 'Leon',
      role: 'The protagonist, nine years old for most of the novel',
      body: 'Leon was born on 5 July 1971, so he is eight years and nine months old when the novel opens and turns ten in Chapter 30. His mother is white and his father is Black, and he is the one who notices everything: moods, silences, whose purse has been left on the sofa. He loves Jake with a fierce, practical love, and much of his identity is being Jake’s big brother. He is also a child who steals, lies, eavesdrops and explodes, and de Waal never asks us to excuse those things, only to understand them. His watchfulness is a survival skill learned in a home where he had to read his mother’s moods, and it is also a weakness: in Chapter 4 Carol shouts at him for “sneaking around”, and in Chapter 35 he hears half a conversation and, in the next chapter, runs away into the night. The most rewarding way to write about Leon is as a boy who has been made to act like an adult, and whom the novel slowly allows to be a child again.',
    },
    {
      name: 'Jake',
      role: 'Leon’s baby half-brother',
      body: 'Jake is born on 2 April 1980, in Chapter 1, with blonde hair like his mother’s and blue eyes; his father is Tony. Leon wanted to call him Bo, after The Dukes of Hazzard. For the first part of the novel Jake is Leon’s responsibility and delight; after his adoption he becomes an absence, kept present by a photograph, a toy bear and Leon’s plan to rescue him. Jake barely acts, because he is a baby, but he is central to the novel’s argument about race: he is adopted quickly because he is a white baby, while his brother is not. De Waal uses him as the measure of what the system values, and of what Leon has lost.',
    },
    {
      name: 'Carol',
      role: 'Leon and Jake’s mother',
      body: 'Carol Rycroft is beautiful in Leon’s eyes (“Everyone’s always saying it”, he tells Jake) and ill. Tina tells the social workers she was depressed the first time, with Leon, and after Jake’s birth she slides into a breakdown: she stays in bed, leaves Leon in charge and, in Chapter 5, will not talk, eat or get up. Leon covers for her because he loves her. Case notes he reads in Chapter 12 describe wider problems, and by Chapter 16 she is living in a halfway house in Bristol. It is easy to write Carol off as selfish, and she can be: she blames Leon for Tony’s rejection in Chapter 4. But de Waal also shows a mother who says “I want better for my boys” in the same chapter, and who is not well enough or supported enough to give it to them. The most convincing reading holds both: Carol’s love is real, and it is not enough. In Chapter 41 she tells Leon herself that she cannot look after him, and still tells him she loves him.',
    },
    {
      name: 'Maureen',
      role: 'Leon’s foster carer',
      body: 'Maureen is an experienced foster carer who has looked after many children. Leon first sees her red hair as “a flaming halo” (Chapter 6), and the angelic image fits what she does: she feeds him, learns Jake’s routines from him and treats him as someone worth listening to. She is also plain-spoken. It is Maureen who tells Leon why Jake is adopted and he is not, and who is openly angry that the brothers are split. Her illness removes her from the middle of the novel, and her talk with Sylvia about the future is the conversation Leon misunderstands in Chapter 35. By the end she is the person who takes him to see his mother and tells him that the hard part is not the whole of his life. If the novel has a moral centre it is Maureen: a woman working inside the system who puts the child first.',
    },
    {
      name: 'Sylvia',
      role: 'Maureen’s sister',
      body: 'Sylvia is blunter and less motherly than Maureen, and she takes Leon in when Maureen goes into hospital. He does not want to live with her, and she is no substitute mother. Yet the relationship grows. She deals with his school, his lies and his temper, plans a street party for the royal wedding and, after he damages her bathroom in a rage in Chapter 28, makes him clear it up while telling him that she likes him and that Maureen loves him. By Chapter 34, when she comes home unhappy, it is Leon who comforts her. Sylvia shows that care does not have to look soft to be real.',
    },
    {
      name: 'Tufty',
      role: 'An allotment holder and Leon’s mentor',
      body: 'Tufty is a Black man with a plot at the allotments, and he treats Leon as a person from their first meeting. He teaches him about seeds and plants, reminds him of his dad and gives him a place among men who talk about racism and politics. Tufty is thoughtful: he writes poems about what he sees and reads them to his friends. He also teaches Leon about police brutality towards Black people, and Leon then sees it for himself when the police come to the allotment. In the riot he follows Leon into danger, and it is lines from Tufty’s poem that Leon recites to stop a policeman’s baton in Chapter 39: the mentor’s words protect the boy. Arguably, Tufty’s importance is that he offers Leon a Black male role model at the moment the care system has left him with none.',
    },
    {
      name: 'Mr Devlin',
      role: 'An older Irishman at the allotments',
      body: 'Mr Devlin keeps the allotment rules, is gruff with children and objects to Leon’s bike. His shed, full of tools and knives, fascinates Leon. Slowly he softens, teaching Leon to plant and making room for him, and Leon repays him by taking things from the shed, including a pistol that turns out to be made of wood. In the riot Mr Devlin is injured trying to reach Leon and to tell the crowd that the gun is not real. His Irishness links him to the suspicion Irish people met in Birmingham after 1974, and his friendship with Leon, like Tufty’s, is one the care system would never have arranged.',
    },
    {
      name: 'Tina',
      role: 'The family’s neighbour',
      body: 'Tina lives on the next landing with her baby, Bobby, and has minded Leon more times than she can count. Her boyfriend’s single word when he finds Leon there, “Again?”, tells the reader in Chapter 1 how often Carol leaves him. In Chapter 5 it is Tina who finds Carol, calls an ambulance and Social Services, and tells Leon that he is a good kid who does not deserve this. Leon listens to her tell the social workers everything and feels betrayed, which shows how fiercely he has been protecting his mother.',
    },
    {
      name: 'The Zebra',
      role: 'Leon’s social worker',
      body: 'Leon names her the Zebra in Chapter 5 because her black hair is white underneath; her real name is Judy. To Leon she is the face of the system, the adult who arrives with news and takes him places, and he treats everything she says with suspicion. She is not unkind, and it is through her that Leon is given the bike that leads him to the allotments. She shows how a well-meaning professional can still feel, to a child, like someone deciding his life without him.',
    },
    {
      name: 'Castro',
      role: 'Tufty’s friend',
      body: 'Castro is the angriest of Tufty’s friends, impatient for change. In Chapter 27 plain-clothes police confront and abuse him at the allotments; in Chapter 31 Leon finds him hiding from the police in the shed Leon has made his own. The death in police custody that sets off the riot is his, as Leon learns in Chapter 36. Castro is a minor character with a major function: he is how the novel shows the policing of 1981 through a man Leon knows.',
    },
    {
      name: 'Byron',
      role: 'Leon’s father',
      body: 'Leon’s father is Black, and Leon remembers him in fragments: a car with no roof that he once took Leon for a drive in, the arguments with Carol, the way he talked. He has been in prison before, and a court case takes him out of Leon’s life: in Chapter 5 Tina tells the social workers that he has run off rather than face court. His absence is one reason Tufty matters so much.',
    },
    {
      name: 'Tony',
      role: 'Jake’s father',
      body: 'Tony is married, or as good as, and in Chapter 4 he comes to the door to tell Carol to stop ringing him, offering money for a baby he will not even come in to see. His rejection helps tip Carol into breakdown. His contempt for her, which Leon overhears from behind the sofa, is one of the first adult cruelties the novel shows through a child’s eyes.',
    },
  ],

  keyQuotes: [
    {
      text: 'No one has to tell Leon that this is a special moment.',
      where: 'Narrator, Chapter 1 (the first sentence)',
      analysis:
        'The opening sentence sets up the whole method of the novel: third person, present tense, and so close to Leon that his feelings become ours. The negative phrasing also hints at a child who is used to being told things by adults, and who, here, already knows. The special moment is the birth of the brother who will define him.',
    },
    {
      text: 'Leon, you watch him, love',
      where: 'Carol, Chapter 1',
      analysis:
        'Carol’s first words to Leon about Jake are an instruction, spoken as she leaves for the smoking room on the day of the birth. The endearment love softens the order, but responsibility has passed from mother to son at once. The line introduces the role reversal that shapes the first five chapters.',
    },
    {
      text: 'Just me and you and him. Always.',
      where: 'Carol, Chapter 1',
      analysis:
        'A promise the novel breaks almost immediately, so it works as dramatic irony. The simple monosyllables and the one-word sentence Always sound certain, which makes the loss more painful. Carol means it, and that is the point: her love is sincere but cannot keep the family together.',
    },
    {
      text: 'Mum says he’s coloured but Dad says he’s black',
      where: 'Leon, talking to Jake, Chapter 1',
      analysis:
        'Leon repeats two adults’ labels for his father and then rejects both, describing his father as dark brown and himself as light brown. Carol’s word is outdated and now offensive. The moment shows Leon insisting on his own description of himself, the first sign of the novel’s interest in who gets to define his identity.',
    },
    {
      text: 'My. Name. Is. Leon.',
      where: 'Leon, introducing himself to Jake, Chapter 2',
      analysis:
        'The full stops slow each word to the pace of someone speaking to a baby and turn the sentence into a vow. The novel takes its title from this line, so the book’s name is Leon’s first act of defining himself, spoken to the brother he is about to lose. Keep the punctuation when you quote it.',
    },
    {
      text: 'He’s a good kid, just gets on with it.',
      where: 'Carol, to Tina, Chapter 2',
      analysis:
        'Carol praises Leon for coping, while Leon listens and the reader sees what coping costs him. The casual phrase just gets on with it reveals how far she depends on him without noticing it. It is a sharp example of the novel’s dramatic irony: the adults underestimate the child they rely on.',
    },
    {
      text: 'If you hadn’t been sneaking around',
      where: 'Carol, screaming at Leon after Tony leaves, Chapter 4',
      analysis:
        'Carol turns her hurt at Tony’s rejection on to her son, blaming Leon because Tony would not come in to see Jake. The verb sneaking makes Leon’s watchfulness sound like a crime, when it is how he protects the family. The same habit of listening will mislead him badly in Chapter 35, so this line plants a thread the whole plot pulls on.',
    },
    {
      text: 'Leon can make her better if someone will give him some money.',
      where: 'Narrator, Leon’s thoughts, Chapter 5',
      analysis:
        'Leon treats his mother’s breakdown as a problem money can solve, which is exactly how a nine-year-old might reason. The confident modal verb can shows his determination to keep the family together and hide the truth, and the reader knows he cannot. Innocence and responsibility are fused in one sentence.',
    },
    {
      text: 'Social workers have two pretend faces, Pretend Happy and Pretend Sad.',
      where: 'Narrator, Chapter 5',
      analysis:
        'Leon’s capitalised names turn the professionals’ expressions into masks, and the next sentence says they make angry into sad. The line is funny, but it also shows how little Leon trusts the adults who now control his life, and how clearly he sees through performance. It sets up the care system as a world of faces rather than feelings.',
    },
    {
      text: 'a flaming halo',
      where: 'Narrator, describing Maureen’s red hair, Chapter 6',
      analysis:
        'Leon’s first image of Maureen is angelic, and the novel largely confirms it: she feeds him, listens to him and tells him the truth. Flaming adds energy and a hint of temper, fitting a woman who is openly angry with the system that splits the brothers. It is a child’s idea of a rescuer, and the fuzzy red hair keeps her human rather than saintly.',
    },
    {
      text: 'Because he’s a baby, a white baby. And you’re not.',
      where: 'Maureen, explaining why Jake is adopted, Chapter 9',
      analysis:
        'Maureen names the racism in the adoption decision plainly. The repetition of baby, now qualified by white, isolates the reason in one adjective, and the blunt short sentence that follows lands on Leon. Her honesty is a kind of respect no other adult has shown him, which is why he trusts her.',
    },
    {
      text: 'a dark star of pain in his throat',
      where: 'Narrator, as Carol leaves after her visit, Chapter 14',
      analysis:
        'The metaphor turns the lump in the throat of someone trying not to cry into something burning and cosmic. It is one of the few images that reach beyond a child’s vocabulary, which marks the size of the feeling. Leon’s love for his mother survives the evidence of what she cannot do.',
    },
    {
      text: 'You can manage in the sun what you can’t manage in the rain.',
      where: 'Tufty, Chapter 17 (page 94 in the Penguin edition AQA quotes)',
      analysis:
        'Tufty’s gardener’s wisdom works as a parable about Leon. The balanced sentence sets sun against rain, and the reader thinks of the grey days in Carol’s flat. AQA chose these lines to introduce the novel, and they carry its hope: children, like plants, can recover when the conditions change.',
    },
    {
      text: 'I could be him, Mum',
      where: 'Leon, to Carol at the Family Centre, Chapter 24',
      analysis:
        'When talk of Jake makes Carol sad, Leon imitates his brother and offers to be him if she will come back for him. The modal could makes it a child’s bargain: he believes his mother’s love has to be earned by becoming the white baby who was wanted. Set against the title, many readers find it one of the saddest lines in the novel: the boy who announced his own name offers, some of the time, to be someone else.',
    },
    {
      text: 'Small minds, big feet.',
      where: 'Mr Devlin, looking at plants that police boots have trampled at the allotments',
      analysis:
        'Mr Devlin’s verdict follows his remark that the police are the same all over the world. The antithesis of small and big makes the police both stupid and heavy-footed, and the big feet are literal too: their boots have trampled the plants. That Mr Devlin, often at odds with Tufty, says it suggests that an Irishman in 1981 knew what it was to be policed with suspicion.',
    },
    {
      text: 'She gives a little curtsy like he’s a king and she’s a servant.',
      where: 'Narrator, as Carol leaves Leon in Bristol, Chapter 41',
      analysis:
        'Carol’s farewell is playful and charming, and the simile reverses their roles: for once the mother bows to the son. Yet Leon has spent the novel looking after her, so the gesture is tender and evasive at once. The royal image also echoes the wedding the next chapter celebrates. She is leaving him in someone else’s care, and she does it with a joke.',
    },
    {
      text: 'This isn’t the whole of your life, love.',
      where: 'Maureen, on the way home from Bristol, Chapter 41',
      analysis:
        'Maureen does not deny that Leon’s life has been hard, and she does not pretend the pain is over. She changes the scale, making the pain a part of his life rather than all of it. The endearment love here comforts, where Carol’s love in Chapter 1 handed him a job.',
    },
  ],

  extracts: [
    {
      title: 'The hospital: a brother, and a first job',
      where: 'Chapter 1',
      pointer:
        'The opening chapter, dated 2 April 1980: from the first sentence, “No one has to tell Leon that this is a special moment”, to Carol’s promise, “Just me and you and him. Always.”, just before Tina puts her coat on to leave.',
      summary:
        'Leon is given his newborn brother to hold. When the nurse tries to hand the baby to Carol, she goes off to the smoking room and leaves Leon in charge. Alone with Jake, Leon tells him who he is, when his birthday is, what he likes on television and what their mother is like, and promises to teach him his colours and numbers. Carol comes back delighted with her two boys and promises Leon that it will always be the three of them.',
      annotations: [
        {
          phrase: 'No one has to tell Leon that this is a special moment',
          note: 'The first sentence establishes the whole method: third person, present tense, and so close to Leon that we feel what he feels. It also shows at once what matters most to him.',
        },
        {
          phrase: 'A right little man',
          note: 'The nurse means it kindly, but the phrase starts a pattern: adults see Leon as bigger and older than he is, and so they hand him adult jobs.',
        },
        {
          phrase: 'Leon, you watch him, love',
          note: 'Carol’s first instruction about the baby. The affectionate word love disguises a transfer of responsibility from mother to son within minutes of the birth.',
        },
        {
          phrase: 'like a big full stop',
          note: 'Leon’s simile for the black centre of Jake’s eyes comes from the schoolroom, the world of a child learning to write. It is also a quiet warning, because a full stop is an ending.',
        },
        {
          phrase: 'Just me and you and him. Always.',
          note: 'Carol’s promise becomes dramatic irony once we know the story. The short, emphatic sentences sound certain, and the word Always is the first thing the novel breaks.',
        },
      ],
      question:
        'Practice task: how does de Waal present Leon’s relationships with his mother and his brother in the opening chapter, and how does the chapter prepare the reader for the rest of the novel?',
    },
    {
      title: 'The summer the flat falls silent',
      where: 'Chapter 5',
      pointer:
        'From the start of the chapter (“As soon as the summer holidays start”) to its end, as the Zebra drives the boys to the foster carer’s house.',
      summary:
        'With school over, Leon runs the household. He changes and feeds Jake, searches the purse and the sofa for money, and tries to wake a mother who will not speak, eat or get up. When the nappies and food run out he asks Tina for a pound. Tina finds Carol, rings for an ambulance and Social Services from the phone box, and takes the boys in for the night. The next evening two social workers arrive, Leon listens to Tina tell them everything, and one of them, whom he calls the Zebra, drives the boys to a foster carer.',
      annotations: [
        {
          phrase: 'nothing in the fridge and nothing in the cupboard',
          note: 'The balanced repetition sounds almost casual, which is the point: Leon reports hunger as a fact of life, and the flat tone makes the neglect more shocking to an adult reader.',
        },
        {
          phrase: 'so tired and angry',
          note: 'One of the few early moments where the narration admits Leon’s resentment. The anger that drives the second half of the novel starts here, in exhaustion.',
        },
        {
          phrase: 'like she’s a goldfish in a bowl',
          note: 'A child’s simile for his mother’s silent, moving lips. It is precise and painful: Carol is present but cut off, visible but unreachable, as if behind glass.',
        },
        {
          phrase: 'But Leon does.',
          note: 'Tina says she does not know what will happen, and the narration answers in three words. Leon has been in care before, and the short sentence shows he already knows he will lose his home.',
        },
        {
          phrase: 'Pretend Happy and Pretend Sad',
          note: 'Leon’s capitalised labels turn the social workers’ expressions into masks. The invented names show his sharp eye for adult performance and his refusal to trust it.',
        },
      ],
      question:
        'Practice task: how does de Waal use Leon’s point of view in this chapter to present neglect? Refer closely to the language of the passage, then link it to one later moment in the novel.',
    },
    {
      title: 'Maureen explains',
      where: 'Chapter 9',
      pointer:
        'After the social workers’ visit, when Maureen explains that Jake is going to have a new mum and dad and Leon asks why: her answer begins “Because, love. Just because.”',
      summary:
        'The social workers visit Maureen’s house and tell Leon that Jake is going to be adopted by a new family, and that Leon is not. Afterwards Maureen explains what adoption means, and when Leon asks why, she does not hide behind procedure. She tells him that Jake is going because he is a white baby, that people can be horrible and that life is unfair, and she makes it clear that she thinks the decision is wrong.',
      annotations: [
        {
          phrase: 'Because, love. Just because.',
          note: 'Maureen begins as adults often do, with a non-answer, but she does not stop there. The hesitation shows the truth is hard to say, and that she is about to say it anyway.',
        },
        {
          phrase: 'a white baby',
          note: 'The repetition of baby, now qualified by white, isolates the reason. De Waal makes the adoption system’s preference audible in a single adjective.',
        },
        {
          phrase: 'And you’re not. Apparently.',
          note: 'The one-word sentence Apparently is Maureen’s sarcasm aimed at the system, not at Leon. It signals that she does not accept its judgement, which is why Leon can trust her.',
        },
        {
          phrase: 'life isn’t fair, pigeon',
          note: 'Maureen’s pet name for Leon softens a brutal truth. Comfort and injustice arrive in the same breath, which is how the novel handles race throughout.',
        },
      ],
      question:
        'Practice task: how does de Waal present attitudes to race in this moment, and how do those attitudes shape Leon’s life in the rest of the novel?',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Close third-person narration in the present tense',
      example:
        'Chapter 3 opens with “Leon has begun to notice the things that make his mum cry” and then lists them, ending with “when she’s staring at Jake”.',
      effect:
        'The narrator uses Leon’s name rather than I, but tells us only what he notices, in words a nine-year-old would use. The present tense traps us in his moment, without hindsight. The list shows a child who has studied his mother closely, and its last item, which Leon cannot explain, lets the reader sense an illness he cannot name.',
    },
    {
      technique: 'Dramatic irony',
      example:
        'In Chapter 2 Carol tells Tina that everything but the baby “goes over his head” while Leon listens; in Chapter 5 Tina says she does not know what will happen, and the narration replies “But Leon does.”',
      effect:
        'The adults underestimate Leon, and the reader knows they are wrong because we are inside his head. The gap between what adults say about him and what we see him understand is the novel’s most persistent irony, and it turns the reader into Leon’s advocate.',
    },
    {
      technique: 'Child’s-eye similes',
      example:
        'Jake’s eyes have a black centre “like a big full stop” (Chapter 1) and later “like a drop of ink in the sea” (Chapter 3); Carol’s lips move “like she’s a goldfish in a bowl” (Chapter 5).',
      effect:
        'Every comparison comes from Leon’s world: exercise books, the seaside, a pet. De Waal keeps the imagery within a child’s range, which makes the voice convincing, but lets it carry meanings he does not see: the full stop as an ending, the mother behind glass.',
    },
    {
      technique: 'Invented, capitalised names',
      example:
        '“Wobbly Bobby” for Tina’s baby (Chapter 1), the Zebra for a social worker, and “Pretend Happy and Pretend Sad” for the social workers’ faces (both Chapter 5).',
      effect:
        'Naming is how Leon gets a grip on a world he cannot control. The nicknames are funny, which keeps the novel from misery, but they also reduce powerful adults to labels, just as the system reduces Leon to a case.',
    },
    {
      technique: 'Punctuation as characterisation',
      example:
        'Leon introduces himself to Jake in Chapter 2 as “Big. Brother” and then “My. Name. Is. Leon.”',
      effect:
        'Full stops between single words slow the sentence to the pace of someone talking to a baby, and give each word the weight of a vow. Because the novel takes its title from this speech, the punctuation is worth analysing in any answer on identity.',
    },
    {
      technique: 'Imperatives and instructions',
      example:
        'In Chapter 5 Leon’s routine for Jake’s mornings is set out like a manual, beginning “Change the nappy”.',
      effect:
        'The shift into instructions shows how completely Leon has taken on an adult’s role: he has turned care into a system because no one else will. There is pride in it, and the pride is what makes it painful to read.',
    },
    {
      technique: 'Pathetic fallacy and the sun',
      example:
        'In Chapter 4, in summer, “the sky is the same colour as the garden slabs, dull and grey”; in Chapter 17 Tufty tells Leon that the sun “is a healer”.',
      effect:
        'The grey sky over the maisonette reflects the home’s low mood, while Tufty’s sun belongs to the allotments and to hope. Tracing weather and light across the novel is a strong whole-text point about how de Waal links setting to Leon’s state of mind.',
    },
    {
      technique: 'Terms of endearment in dialogue',
      example:
        'Carol’s “Leon, you watch him, love” (Chapter 1) against Maureen’s “This isn’t the whole of your life, love” (Chapter 41); Maureen also calls Leon pigeon.',
      effect:
        'The same word frames two very different sentences: one hands a child a job, the other takes a weight off him. Comparing how adults speak to Leon is a precise way to show which of them actually care for him.',
    },
    {
      technique: 'Metaphor for grief',
      example: 'After Carol’s visit in Chapter 14, Leon feels “a dark star of pain in his throat”.',
      effect:
        'The metaphor makes a physical sensation vast and burning. It is one of the rare moments where the narration reaches beyond a child’s words, which signals how large the feeling is and how little Leon can say it aloud.',
    },
  ],

  structureForm: [
    {
      heading: 'Forty-two short chapters across sixteen months',
      body: 'The novel is told in 42 numbered chapters. The first is dated 2 April 1980, the day of Jake’s birth, and the story ends in the summer of 1981 with the royal wedding. The short chapters suit a child’s perspective, each one a scene or a day, and they let de Waal move quickly through time: Leon turns nine by Chapter 4 and ten in Chapter 30. Learn the chapter numbers of the turning points, because in a closed-book exam a precise reference is a sign of control.',
    },
    {
      heading: 'A pattern of attachment and loss',
      body: 'Leon’s life is built as a series of homes: the maisonette with Carol, Maureen’s house, Sylvia’s. Each time he settles, something removes him, and the novel repeats the pattern so often that Leon, and the reader, come to expect loss. That is why his belief in Chapter 35 that Maureen will leave him is so convincing, and why the ending, in which he is told he will stay, carries such weight.',
    },
    {
      heading: 'An absence at the centre',
      body: 'Jake leaves in Chapter 10, less than a quarter of the way through, and does not return. The rest of the novel is shaped by his absence: a photograph, a toy bear, a birthday letter and Leon’s escape plan keep him present. This is a structural choice worth writing about. De Waal refuses the reunion a reader might expect, and makes the story about how Leon lives with loss rather than how he reverses it.',
    },
    {
      heading: 'Information that arrives by accident',
      body: 'Because the narration stays with Leon, the reader learns what he learns, often by eavesdropping: from behind the sofa in Chapter 4, from the kitchen doorway in Chapter 5, from a social worker’s papers in Chapter 12 and from the hallway in Chapter 35. Some of what he hears is true and some is half-heard. De Waal uses the device to show how little is explained to children in care, and to let the reader see further than Leon does.',
    },
    {
      heading: 'Private story, public history',
      body: 'News of unrest reaches Leon through talk at the allotments and reports on the television news, then through the police raid in Chapter 27, until the riot chapters bring the city’s crisis and Leon’s together. This convergence is the novel’s climax. The structure argues that a child’s life cannot be separated from the society around him, and that the injustice done to Leon and the injustice on the streets belong to the same world.',
    },
    {
      heading: 'A coming-of-age story with an open ending',
      body: 'The novel follows a child from dependence to a kind of understanding, which makes it a bildungsroman, and AQA introduces it as a coming-of-age story. Flashbacks, often prompted by what Leon sees in the present, fill in his father and his past. The resolution is deliberately partial. Leon has a permanent home and adults who love him, but Jake is gone and Carol cannot care for him. Examiners reward answers that do not tidy this up: the ending is hopeful because it is honest.',
    },
  ],

  vocabulary: [
    {
      term: 'Foster carer',
      definition:
        'An adult approved to look after a child who cannot live with their own family, while the child stays in the care of the local authority. Maureen is Leon’s foster carer.',
    },
    {
      term: 'Adoption',
      definition:
        'The legal process by which a child becomes a permanent member of a new family. Jake is adopted; for most of the novel, Leon is not.',
    },
    {
      term: 'Social Services',
      definition:
        'The local council department responsible for children who need protection or care. Tina calls them in Chapter 5.',
    },
    {
      term: 'Halfway house',
      definition:
        'Supported accommodation for people recovering from illness, addiction or prison before they live independently. Carol is living in one in Bristol.',
    },
    {
      term: 'Allotment',
      definition:
        'A plot of land, usually rented from the local council, for growing fruit, vegetables or flowers. The allotments are where Leon meets Tufty and Mr Devlin.',
    },
    {
      term: 'Role reversal',
      definition:
        'When a child takes on a parent’s responsibilities. Leon caring for Jake, and for Carol, is the novel’s central example.',
    },
    {
      term: 'Close third person',
      definition:
        'Narration that uses he or she but follows one character’s thoughts and perceptions, sometimes called focalisation. The novel is focalised through Leon.',
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the reader understands something a character does not. De Waal uses it constantly, because the reader sees more than nine-year-old Leon.',
    },
    {
      term: 'Bildungsroman',
      definition:
        'A coming-of-age novel that follows a young person’s growth towards understanding and a place in the world.',
    },
    {
      term: 'Mixed race',
      definition:
        'Having parents of different ethnic backgrounds. Leon’s mother is white and his father is Black. Many people now also say mixed heritage.',
    },
    {
      term: 'Coloured',
      definition:
        'An outdated term for Black and other non-white people, now considered offensive. Leon repeats it in Chapter 1 as his mother’s word, and says that both his parents’ labels are wrong.',
    },
    {
      term: 'Stop and search',
      definition:
        'A police power to search a person in the street. In 1981 many Black people felt it was used against them unfairly, and the Scarman Report agreed that it had been used disproportionately.',
    },
    {
      term: 'Riot, or uprising',
      definition:
        'A violent public disturbance. Many people prefer the word uprising for the events of 1981, to stress that they were protests against real injustice.',
    },
    {
      term: 'Pathetic fallacy',
      definition:
        'Weather or setting that reflects a character’s mood, as with the grey summer sky over the maisonette in Chapter 4.',
    },
    {
      term: 'Motif',
      definition:
        'An image or idea that recurs through a text, such as the sun, seeds and growing things, or toy guns, in this novel.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'How does de Waal present ideas about family in My Name is Leon? Write about: the different families Leon is part of in the novel; how de Waal presents ideas about family by the ways she writes.',
        skill: 'Whole-text essay: theme',
        guidance: [
          'Open with a thesis that answers how, not just what: for example, that de Waal presents family as something that can be lost through illness and other people’s decisions, and made again through care.',
          'Start with the first family (Chapters 1 to 5): Carol’s promise “Just me and you and him. Always.”, Leon’s role as carer (“Leon, you watch him, love”), and the absent fathers.',
          'Analyse the break in Chapters 9 and 10: the adoption decision and Maureen’s explanation. Show that family is being defined by the system as well as by love.',
          'Explore the found family: Maureen’s care, Sylvia’s grudging warmth, Tufty and Mr Devlin at the allotments. Use method as well as content, such as Maureen’s pet names and the symbolism of the allotment.',
          'Use structure: the repeated moves, Jake’s absence from Chapter 10 onwards, and the ending, in which Leon learns his home will be with Maureen, without Jake.',
          'Bring in context precisely, such as de Waal’s work on adoption panels, then conclude by weighing the two kinds of family rather than simply choosing one.',
        ],
      },
      {
        question:
          'How does de Waal present Maureen as an important figure in My Name is Leon? Write about: what Maureen says and does; how de Waal presents Maureen by the ways she writes.',
        skill: 'Whole-text essay: character',
        guidance: [
          'Argue for her function, not just her kindness: Maureen shows what care should look like, and so exposes what Leon has lacked and what the system gets wrong.',
          'Chapter 6: the first description (“a flaming halo”), the food, and her asking Leon for Jake’s routines. Analyse the angelic image and the way she gives Leon back his childhood.',
          'Chapter 9: her honesty about race (“Because he’s a baby, a white baby. And you’re not.”). Explore the sarcasm of Apparently and the comfort of her pet name, pigeon.',
          'Her illness from Chapter 13 onwards: how her absence repeats Leon’s pattern of loss, and how her breathlessness foreshadows it.',
          'Chapter 35: the half-heard conversation, and why Leon’s trust in Maureen makes his fear that she will leave so intense.',
          'Chapter 41: the visit to Bristol and “This isn’t the whole of your life, love”. End by arguing that Maureen is the novel’s moral centre, while recognising that she cannot give Leon back his brother.',
        ],
      },
      {
        question:
          'How does de Waal explore the effects of racism in My Name is Leon? Write about: how racism affects Leon and other characters; how de Waal presents these effects by the ways she writes.',
        skill: 'Whole-text essay: theme and context',
        guidance: [
          'Define the forms of racism the novel shows: in language (Chapter 1), in the care system (Chapter 9) and in policing (Chapter 27 and the riot).',
          'Analyse Leon’s self-description in Chapter 1: he sets aside his mother’s outdated word and his father’s label and describes himself. Explain what this shows about identity.',
          'Analyse the adoption decision through Maureen’s words and through structure: Jake’s departure is the turning point of the whole novel.',
          'Explore the allotments: Tufty and his friends give Leon a Black community, and the police raid on Castro shows racism as violence. Link it to Operation Swamp 81 and the Scarman Report in one precise sentence.',
          'Consider the riot: how Leon’s private anger meets the public anger of 1981, and how de Waal shows its danger without dismissing its cause.',
          'Conclude on the novel’s argument: racism shapes Leon’s life before he can name it, and the novel’s hope lies in the adults who see him as a person.',
        ],
      },
      {
        question:
          'How does de Waal present Leon’s anger in My Name is Leon? Write about: what makes Leon angry and how he shows it; how de Waal presents his anger by the ways she writes.',
        skill: 'Whole-text essay: character and theme',
        guidance: [
          'Thesis: Leon’s anger is grief without a safe outlet, and de Waal asks the reader to understand it rather than condemn it.',
          'Trace its roots in Chapters 4 and 5: Carol’s blame, the first thefts, and the admission that his duties make him “so tired and angry”.',
          'Contrast Leon with the adults who hide their feelings: the social workers “make angry into sad”. Analyse what the capitalised Pretend faces suggest.',
          'Explore the eruptions: wrecking his room when Jake leaves, damaging Sylvia’s bathroom, imagining switching the adults off, and the secret escape plan.',
          'Analyse the climax: the riot chapters as the moment his private anger becomes public and dangerous, and what brings it to an end.',
          'Conclude with what the novel offers instead: adults who stay, and Maureen’s promise that this is not the whole of his life.',
        ],
      },
      {
        question: 'How far does de Waal present the adults in Leon’s life as letting him down?',
        skill: 'Whole-text essay: argument',
        guidance: [
          'Answer the how far directly: many adults fail Leon, but the novel is also full of adults who do not, and de Waal is interested in the difference.',
          'The failures: Carol’s illness and her blame in Chapter 4, Tony’s rejection, Byron’s absence, and the system that splits the brothers.',
          'Complicate them: Carol’s love (“I want better for my boys”), Tina’s help in Chapter 5, and social workers who rescue the boys even as Leon distrusts them. Then show the cost of the failures through Leon himself: in Chapter 24 he offers his mother “I could be him, Mum”.',
          'The adults who stay: Maureen, Sylvia, and Tufty and Mr Devlin, who follow Leon into the riot at their own risk.',
          'Use method: the dramatic irony makes the reader judge adults by what Leon sees, which is not always fair to them. Say so.',
          'Conclude with a balanced judgement, and link it to de Waal’s professional knowledge of the care system.',
        ],
      },
    ],
    tips: [
      'Learn quotations exactly, and learn them short. The exam is closed book, and a four-word quotation you can analyse beats a long one you half remember.',
      'Keep the punctuation of “My. Name. Is. Leon.” The full stops are the thing you analyse.',
      'Know the chapter numbers of the turning points: 1, 5, 9 and 10, 14, 17, 24, 27, 35, the night of the riot in 36 to 39, and 41. Precise references show command of the whole novel.',
      'Write about the narrative voice as a method. Saying that the reader understands more than Leon does, and why that matters, is the most useful single idea about how the novel is written.',
      'Do not write Carol off as a villain. The strongest answers show that she loves her boys and still cannot care for them, and that the novel asks for understanding.',
      'Keep context tied to the text. One accurate sentence on 1981 policing, linked to the raid on Castro, is worth more than a paragraph of history.',
      'Handle the language of race with care. If you discuss the word Carol uses in Chapter 1, say that it is outdated and offensive, and focus on how Leon rejects it.',
      'Remember that the novel is set in 1980 and 1981 but was published in 2016. You can write about both: the world Leon lives in, and why a writer with de Waal’s experience returned to it.',
      'Quote from the British edition. American editions change words such as Mum, and the exam expects the text AQA sets.',
    ],
  },

  modelAnswer: {
    question: 'How does de Waal present the relationship between Leon and Jake in My Name is Leon?',
    paragraph:
      'De Waal presents Leon’s love for Jake as care before it is companionship, and she makes that care the foundation of Leon’s identity. The novel’s first sentence, “No one has to tell Leon that this is a special moment”, places us so close to Leon that his feeling becomes the reader’s, and within a page Carol has left him with the instruction “Leon, you watch him, love”. The affectionate “love” disguises a transfer of responsibility from a mother to her eight-year-old son, and the opening chapters show him accepting it. In Chapter 2 he introduces himself as “Big. Brother” and then “My. Name. Is. Leon.”: the full stops slow each word into a vow, and because the novel takes its title from this speech, it suggests that Leon’s sense of who he is cannot be separated from being Jake’s brother. That is why the adoption decision is so devastating. When Maureen tells him that Jake is being adopted because he is “a white baby”, the system does not only separate two children; it removes the role that has defined Leon, which explains why his grief turns so quickly into anger and into plans to get Jake back.',
    commentary: [
      'It opens with an argument about how the relationship is presented, as care before companionship and as the basis of Leon’s identity, rather than a plot summary.',
      'Every quotation is short and exact, and each is followed by analysis of a specific word or piece of punctuation: love, the full stops, white.',
      'It writes about narrative method as well as language: the close third person of the first sentence, and the origin of the title as a structural point.',
      'It links the early chapters to the adoption decision in Chapter 9, showing knowledge of the whole novel rather than one scene.',
      'It ends by explaining consequences, connecting the relationship to Leon’s anger, which sets up the next paragraph of an essay.',
    ],
  },

  timeline: [
    {
      where: 'Chapter 1',
      title: 'A brother is born',
      summary:
        'On 2 April 1980 Leon holds his newborn half-brother, Jake, while Carol goes to the smoking room and leaves him in charge. He tells Jake all about himself, then spends the night at their neighbour Tina’s, as he often does.',
      setting: 'A hospital ward, then Tina’s maisonette on the next landing',
      who: ['Leon', 'Jake', 'Carol', 'Tina'],
      quote: 'No one has to tell Leon that this is a special moment.',
      themes: ['Family and belonging', 'Childhood and responsibility'],
      tension: 1,
      significance:
        'The bond that drives the novel is made on the first page, and so is the pattern of Leon being left in charge.',
    },
    {
      where: 'Chapter 2',
      title: 'Big brother',
      summary:
        'Carol brings Jake home and Leon watches him as if he were the television, introducing himself word by word. Within weeks Carol is keeping Leon off school, and Tina urges her to see a doctor.',
      setting: 'The family’s ground-floor maisonette by the dual carriageway',
      who: ['Leon', 'Jake', 'Carol', 'Tina'],
      quote: 'My. Name. Is. Leon.',
      themes: ['Family and belonging', 'Race and identity'],
      tension: 2,
      significance:
        'The title comes from this moment: Leon announces who he is to the brother he will lose.',
    },
    {
      where: 'Chapter 4',
      title: 'Tony at the door',
      summary:
        'Jake’s father, Tony, comes to tell Carol he is as good as married and wants nothing to do with her. Carol turns on Leon for listening, Leon resolves to take money from her purse, and next day Carol asks him to look after Jake.',
      setting: 'The maisonette hallway, watched from behind the sofa',
      who: ['Leon', 'Carol', 'Tony', 'Jake'],
      quote: 'Look after him and look after yourself.',
      themes: ['Childhood and responsibility', 'Loss and anger'],
      tension: 3,
      significance: 'Stealing begins here, as Leon’s private answer to adults who hurt him.',
    },
    {
      where: 'Chapter 5',
      title: 'Tina calls for help',
      summary:
        'In the summer holidays Leon feeds and changes Jake alone while Carol stays in bed and will not respond. When the money and nappies run out he asks Tina for a pound; she finds Carol and calls an ambulance and Social Services.',
      setting: 'The maisonette, Tina’s flat and the phone box at the end of the road',
      who: ['Leon', 'Jake', 'Carol', 'Tina', 'The Zebra'],
      quote: 'nothing in the fridge and nothing in the cupboard',
      themes: ['Childhood and responsibility', 'The care system'],
      tension: 5,
      significance:
        'The home Leon has been holding together collapses, and the care system enters his life.',
    },
    {
      where: 'Chapter 6',
      title: 'Maureen',
      summary:
        'Leon wakes at the foster carer’s house. Maureen feeds him bacon sandwiches and asks him to tell her how to look after Jake, and an adult takes the work of caring for his brother from him.',
      setting: 'Maureen’s house',
      who: ['Leon', 'Jake', 'Maureen'],
      quote: 'a flaming halo',
      themes: ['Family and belonging', 'The care system'],
      tension: 2,
      significance: 'Food and routine mark the difference between neglect and care.',
    },
    {
      where: 'Chapter 9',
      title: 'Why Jake, and not Leon',
      summary:
        'The social workers tell Leon that Jake is going to be adopted by a new family and that he is not. When Leon asks why, Maureen tells him plainly that Jake is a white baby and Leon is not, and that she thinks it wrong.',
      setting: 'Maureen’s house, after the social workers’ visit',
      who: ['Leon', 'Maureen'],
      quote: 'Because he’s a baby, a white baby. And you’re not.',
      themes: ['Race and identity', 'The care system'],
      tension: 4,
      significance: 'The novel names the racism in the system through the one adult Leon trusts.',
    },
    {
      where: 'Chapter 10',
      title: 'Jake leaves',
      summary:
        'After Christmas, Maureen collects Leon from school and tells him that Jake is being adopted that day. Leon at last asks whether he is going too, and the answer is no. When Jake has gone, Leon wrecks his room.',
      setting: 'Maureen’s house',
      who: ['Leon', 'Jake', 'Maureen'],
      themes: ['Loss and anger', 'Family and belonging'],
      tension: 5,
      significance:
        'Jake is absent from here to the end, and the plot becomes Leon’s attempt to undo this day.',
    },
    {
      where: 'Chapter 14',
      title: 'Carol’s visit',
      summary:
        'Carol visits Leon at Maureen’s for the first time in months. She is frail, shaky and distressed, above all about Jake, and the visit leaves Leon aching for her.',
      setting: 'Maureen’s house',
      who: ['Leon', 'Carol', 'Maureen'],
      quote: 'a dark star of pain in his throat',
      themes: ['Loss and anger', 'Family and belonging'],
      tension: 4,
      significance: 'Leon’s love for his mother survives the evidence of what she cannot do.',
    },
    {
      where: 'Chapter 15',
      title: 'Maureen is taken ill',
      summary:
        'Maureen, whose breathing has been getting worse, wakes Leon in the night needing help, and it is Leon who calls the ambulance. Her sister Sylvia takes him home with her, and in the next chapter he changes school again and is given a bike.',
      setting: 'Maureen’s house at night, the hospital, then Sylvia’s',
      who: ['Leon', 'Maureen', 'Sylvia'],
      themes: ['Loss and anger', 'The care system'],
      tension: 4,
      significance: 'Just as Leon settles, the pattern of loss repeats itself.',
    },
    {
      where: 'Chapter 17',
      title: 'The allotments',
      summary:
        'Riding his new bike, Leon finds the allotments and meets Tufty, who talks to him about the sun, and Mr Devlin, the older Irishman who keeps the allotment rules.',
      setting: 'The allotments, a bike ride from Sylvia’s',
      who: ['Leon', 'Tufty', 'Mr Devlin'],
      quote: 'You can manage in the sun what you can’t manage in the rain.',
      themes: ['Growth and hope', 'Family and belonging'],
      tension: 2,
      significance: 'Leon gains a world of his own, and two men who will become father figures.',
    },
    {
      where: 'Chapter 24',
      title: 'The Family Centre',
      summary:
        'Leon is taken to see Carol at a Family Centre. She is thin and glassy-eyed, they laugh together, and when talk of Jake makes her sad Leon imitates his brother and offers to be Jake for her.',
      setting: 'A Family Centre',
      who: ['Leon', 'Carol', 'Sylvia', 'The Zebra'],
      quote: 'I could be him, Mum',
      themes: ['Family and belonging', 'Childhood and responsibility'],
      tension: 4,
      significance:
        'Leon offers to replace the brother he has lost, which shows how far he believes love must be earned.',
    },
    {
      where: 'Chapter 27',
      title: 'The police at the allotment',
      summary:
        'Plain-clothes police officers come to the allotments, confront and abuse Tufty’s friend Castro and deliberately damage Tufty’s plot, while Leon watches. Leon now sees for himself the policing that Tufty’s friends have argued about.',
      setting: 'Tufty’s plot at the allotments',
      who: ['Leon', 'Tufty', 'Castro'],
      themes: ['Injustice and protest', 'Race and identity'],
      tension: 4,
      significance:
        'The racism Leon has met in the care system appears in its most open and violent form.',
    },
    {
      where: 'Chapter 28',
      title: 'The reviewing officer',
      summary:
        'A man from Social Services tells Leon that Jake has been adopted and that Leon cannot live with him. Leon’s grief erupts: he wrecks Sylvia’s bathroom and his bedroom, and Sylvia makes him clear up, telling him she likes him and that Maureen loves him.',
      setting: 'Sylvia’s house',
      who: ['Leon', 'Sylvia'],
      themes: ['Loss and anger', 'The care system'],
      tension: 4,
      significance:
        'The system speaks to Leon about his brother, and his anger shows how little its words can hold.',
    },
    {
      where: 'Chapter 30',
      title: 'Leon turns ten',
      summary:
        'On his tenth birthday Leon is given a photograph of Jake and a letter, and at the allotment Mr Devlin makes room for him to grow things of his own. His secret plan to find Jake is taking shape.',
      setting: 'Sylvia’s house and the allotments',
      who: ['Leon', 'Mr Devlin', 'Sylvia'],
      themes: ['Growth and hope', 'Family and belonging'],
      tension: 2,
      significance:
        'Leon is given something to tend just as his escape plan grows, so hope and loss pull against each other.',
    },
    {
      where: 'Chapter 35',
      title: 'Half a conversation',
      summary:
        'Out of hospital and staying at Sylvia’s, Maureen talks with her sister about moving away. Leon, listening in the hall, is sure they are planning a life without him. The television news reports a riot after a man has died in police custody.',
      setting: 'Sylvia’s hallway',
      who: ['Leon', 'Maureen', 'Sylvia'],
      themes: ['Loss and anger', 'Family and belonging'],
      tension: 4,
      significance: 'Leon’s habit of eavesdropping, learned to survive, now misleads him.',
    },
    {
      where: 'Chapters 36 to 39',
      title: 'Into the riot',
      summary:
        'Leon climbs out of his window at night and goes to the allotment, where he learns that the man who died in custody was Castro. Tufty and Mr Devlin find him in the shed, and he runs from them into the riot, where he holds up the pistol he took from Mr Devlin’s shed. It is wooden. Mr Devlin is hurt trying to reach him, Leon stops a policeman’s raised baton by reciting Tufty’s poem, and the three of them reach Sylvia’s.',
      setting: 'The allotment shed, then the streets at night',
      who: ['Leon', 'Tufty', 'Mr Devlin'],
      themes: ['Injustice and protest', 'Loss and anger'],
      tension: 5,
      significance: 'Leon’s private anger and the city’s public anger meet in one scene.',
    },
    {
      where: 'Chapter 41',
      title: 'Bristol',
      summary:
        'Maureen takes Leon to Bristol to see Carol, who tells him herself that she cannot look after him, and that she still loves him and Jake. On the way home Maureen tells Leon that he is going to live with her, and that this hard time is not his whole life.',
      setting: 'Bristol, and the journey home',
      who: ['Leon', 'Carol', 'Maureen'],
      quote: 'This isn’t the whole of your life, love.',
      themes: ['Family and belonging', 'Growth and hope'],
      tension: 3,
      significance:
        'For once the adults tell Leon the truth about his future to his face, and his mother tells it herself.',
    },
    {
      where: 'Chapter 42',
      title: 'The royal wedding',
      summary:
        'The last chapter is set on the day of the royal wedding, 29 July 1981. As the household gets ready for the celebrations, Mr Devlin comes to help and Leon plants seeds.',
      setting: 'Birmingham, on the day of the royal wedding',
      who: ['Leon', 'Maureen', 'Sylvia', 'Mr Devlin'],
      themes: ['Growth and hope', 'Family and belonging'],
      tension: 1,
      significance:
        'The novel ends with the family Leon has found, and with something planted for the future.',
    },
  ],

  relationships: [
    {
      from: 'Leon',
      to: 'Jake',
      kind: 'half-brothers',
      note: 'Leon is Jake’s carer before he is his playmate. Separated in Chapter 10, they are held together for the rest of the novel only by Leon’s memory, a photograph and his plan to find him.',
    },
    {
      from: 'Leon',
      to: 'Carol',
      kind: 'son and mother',
      note: 'The roles are reversed from the start: Leon looks after Carol and covers for her, and in Chapter 24 he offers to be Jake for her. His love survives everything, and in Chapter 41 she tells him herself that she cannot care for him, and that she loves him.',
    },
    {
      from: 'Leon',
      to: 'Maureen',
      kind: 'foster child and foster carer',
      note: 'Maureen gives Leon food, routine and the truth. He comes to love her, which is why he is so shaken when he thinks she will leave him.',
    },
    {
      from: 'Maureen',
      to: 'Sylvia',
      kind: 'sisters',
      note: 'Sylvia worries about Maureen’s health and, when Maureen is in hospital, looks after Leon for her.',
    },
    {
      from: 'Leon',
      to: 'Sylvia',
      kind: 'child and reluctant carer',
      note: 'Leon resents moving in with Sylvia, but her bluntness wins him over. After he wrecks her bathroom in Chapter 28 she tells him that she likes him, and by Chapter 34 he is the one comforting her.',
    },
    {
      from: 'Leon',
      to: 'Tufty',
      kind: 'pupil and mentor',
      note: 'Tufty teaches Leon to grow things, reminds him of his dad and opens a Black community to him.',
    },
    {
      from: 'Leon',
      to: 'Mr Devlin',
      kind: 'unlikely friends',
      note: 'Gruff at first, Mr Devlin makes room for Leon at the allotment. Leon takes things from his shed, and Mr Devlin still comes after him into the riot.',
    },
    {
      from: 'Tufty',
      to: 'Mr Devlin',
      kind: 'allotment neighbours and rivals',
      note: 'They quarrel and distrust each other, yet on the night of the riot they go after Leon together.',
    },
    {
      from: 'Tufty',
      to: 'Castro',
      kind: 'friends',
      note: 'Castro’s anger, and his treatment by the police, bring the politics of 1981 into the allotments.',
    },
    {
      from: 'Carol',
      to: 'Tina',
      kind: 'neighbours and friends',
      note: 'Tina has minded Carol’s children for months. In Chapter 5 she is the one who calls for help, and Leon feels she has betrayed his mother.',
    },
    {
      from: 'Carol',
      to: 'Tony',
      kind: 'former lovers',
      note: 'Tony, Jake’s father, rejects Carol and the baby in Chapter 4, and his rejection helps bring on her breakdown.',
    },
    {
      from: 'Carol',
      to: 'Byron',
      kind: 'Leon’s parents, separated',
      note: 'Byron came and went, spent time in prison, and argued with Carol; Tina tells the social workers that it all came to a head when Carol got pregnant by Tony.',
    },
    {
      from: 'Leon',
      to: 'The Zebra',
      kind: 'child and social worker',
      note: 'Leon watches the Zebra with suspicion: she is the face of the system that makes decisions about him.',
    },
  ],

  compareWith: [
    {
      title: 'Pigeon English',
      href: '/revision/texts/pigeon-english',
      reason:
        'Also on AQA’s modern prose list: an eleven-year-old narrator, newly arrived from Ghana, watching a violent adult world he only half understands.',
    },
    {
      title: 'Anita and Me',
      href: '/revision/texts/anita-and-me',
      reason:
        'Also on AQA’s modern prose list: a coming-of-age novel set in the West Midlands of the 1970s, where race and belonging shape a child’s growing up.',
    },
    {
      title: 'Leave Taking',
      href: '/revision/texts/leave-taking',
      reason:
        'Added to AQA’s modern texts at the same time: a British Caribbean family in which a mother’s struggles and her children’s search for identity pull against each other.',
    },
    {
      title: 'Blood Brothers',
      href: '/revision/texts/blood-brothers',
      reason:
        'An AQA modern drama about brothers separated as babies, in which poverty and class decide which boy gets which life.',
    },
  ],

  contentGuidance: [
    'mental_health',
    'discrimination',
    'violence',
    'crime_injustice',
    'addiction',
    'mortality',
  ],

  quotesFromElsewhere: ['at home, on his phone, not out in the world'],

  sources: [
    {
      label:
        'Penguin UK ebook sample (ISBN 9780241973394), served by Jellybooks: contents page (42 chapters) and Chapters 1 to 5 in full. Source of every quotation from Chapters 1 to 5, the chapter 1 date, Leon’s birthday, Carol’s surname and the plot of Chapters 1 to 5.',
      url: 'https://www.jellybooks.com/cloud_reader/excerpts/my-name-is-leon_9780241973394-ex/L3Leb',
    },
    {
      label:
        'Linda’s Book Bag, An Extract from My Name is Leon (30 March 2017): Chapter 1 as printed for the Penguin paperback launch, with the Penguin blurb and author biography (Irish mother who was a foster carer, Caribbean father, fifteen years in criminal and family law, magistrate, adoption panels, training manuals). Paperback date 6 April 2017.',
      url: 'https://lindasbookbag.com/2017/03/30/an-extract-from-my-name-is-leon-by-kit-de-waal/',
    },
    {
      label:
        'BookBrowse, excerpt of the Simon & Schuster edition, Chapter 1. Used to corroborate wording only: the US text is Americanised.',
      url: 'https://www.bookbrowse.com/excerpts/index.cfm/book_number/3453/my-name-is-leon',
    },
    {
      label:
        'AQA, GCSE English Literature companion guide to the 2023 set-text changes: Tufty’s lines on the sun (page 94, Penguin), the description of the novel, first teaching 2023 and first exam 2025, Paper 2 Section A, and the three texts withdrawn.',
      url: 'https://filestore.aqa.org.uk/resources/english/AQA-8702-COMP-GUIDE-TEXTS-POETRY.PDF',
    },
    {
      label: 'AQA, My Name is Leon by Kit de Waal (Spark Something page)',
      url: 'https://www.aqa.org.uk/spark-something/modern-texts/my-name-is-leon-by-kit-de-waal',
    },
    {
      label:
        'WJEC, GCSE English Language and Literature Unit 4b knowledge organiser: 42 chapters, plot outline, and quotations referenced to Chapters 1, 5, 6, 14, 17 and 41; the Zebra’s name, Judy.',
      url: 'https://resource.download.wjec.co.uk/vtc/2023-24/mfw/mfw23-24_2-12/pdf/my-name-is-leon_kit-de-Waal.pdf',
    },
    {
      label:
        'Save My Exams, My Name is Leon plot summary (chapter by chapter). Used for plot facts after Chapter 5, including the chapter numbers of the Family Centre visit (24), the police raid (27), the reviewing officer (28), Castro’s death (36) and Leon’s recital of Tufty’s poem (39).',
      url: 'https://www.savemyexams.com/gcse/english-literature/aqa/17/revision-notes/3-modern-texts/my-name-is-leon/my-name-is-leon-plot-summary/',
    },
    {
      label:
        'Save My Exams, My Name is Leon character quotations: names Maureen as the speaker of the Chapter 41 line WJEC prints, and Mr Devlin as the speaker of “Small minds, big feet”; prints Leon’s Chapter 24 line and Carol’s curtsy identically to the sources below. No quotation rests on it alone.',
      url: 'https://www.savemyexams.com/gcse/english-literature/aqa/17/revision-notes/3-modern-texts/my-name-is-leon/my-name-is-leon-character-quotations/',
    },
    {
      label:
        'Remy Sharp, Review: My Name Is Leon (December 2019): five Kindle highlights exported verbatim from the UK ebook, including Maureen’s Chapter 9 explanation, Mr Devlin’s “Small minds, big feet” and Carol’s curtsy in Chapter 41.',
      url: 'https://remysharp.com/books/2019/my-name-is-leon',
    },
    {
      label:
        'Chat About Books, review of My Name Is Leon (May 2016): quotes Leon’s “I could be him, Mum” at the Family Centre, with the UK spelling. BookBrowse’s US reading guide gives the same words with “Mom”.',
      url: 'https://chataboutbooks.blog/2016/05/26/my-name-is-leon-by-kit-de-waal/',
    },
    {
      label:
        'Reviews quoting Maureen’s Chapter 9 explanation word for word: Books Are My Favourite And Best (from a Penguin review copy), the Letterpress Project (which also quotes de Waal’s Guardian interview on separated siblings and mentions the hunger strikes), and Floralia.',
      url: 'https://booksaremyfavouriteandbest.com/2016/06/03/my-name-is-leon-by-kit-de-waal/',
    },
    {
      label: 'The Letterpress Project, My Name Is Leon',
      url: 'https://letterpressproject.co.uk/inspiring-older-readers/2016-10-22/my-name-is-leon',
    },
    {
      label: 'Floralia, Growing new lives with inner city gardens: My Name is Leon',
      url: 'https://floraliawordsandimages.wordpress.com/2019/02/07/book-review-growing-new-lives-with-inner-city-gardens-my-name-is-leon/',
    },
    {
      label:
        'Bibliomaniac UK review: corroborates the Chapter 3 and Chapter 5 lines on Carol crying and the social workers’ faces.',
      url: 'https://bibliomaniacuk.blogspot.com/2016/12/my-name-is-leon-kit-de-waal.html',
    },
    {
      label:
        'NATE, Why we switched to My Name is Leon at GCSE (February 2026): corroborates Chapter 5 wording and reports de Waal’s remark about a Leon of today.',
      url: 'https://www.nate.org.uk/2026/02/06/why-we-switched-to-my-name-is-leon-at-gcse-and-why-you-should-too/',
    },
    {
      label:
        'Google Books, My Name Is Leon (Penguin UK, 2 June 2016, 288 pages), with author biography: Costa First Novel Award shortlist and Kerry Group Irish Novel of the Year 2017; brought up among the Irish community of Birmingham.',
      url: 'https://books.google.com/books?id=jt7gCgAAQBAJ',
    },
    {
      label:
        'Penguin, Lit in Colour teaching resources for My Name is Leon (KS4): the four themes of the teacher planning booklet.',
      url: 'https://www.penguin.co.uk/about/social-impact/lit-in-colour/teaching-resources/my-name-is-leon-ks4',
    },
    {
      label:
        'Wikipedia, Kit de Waal: born 1960 in Birmingham, father from Basseterre, St Kitts, MA at Oxford Brookes, Viking publication, Lenny Henry audiobook and option, and her remark that in 1981 she lived in Handsworth with the riots at the end of her road.',
      url: 'https://en.wikipedia.org/wiki/Kit_de_Waal',
    },
    {
      label:
        'NationalWorld, My Name is Leon: BBC Two release date and cast (4 June 2022): broadcast on BBC Two on Friday 10 June 2022, directed by Lynette Linton, screenplay by Shola Amoo, newcomer Cole Martin as Leon.',
      url: 'https://www.nationalworld.com/culture/television/my-name-is-leon-bbc-two-release-date-trailer-cast-lenny-henry-malachi-kirby-monica-dolan-kit-de-waal-3716304',
    },
    {
      label:
        'Royal Television Society, BBC releases first-look images of My Name Is Leon (28 October 2021): the cast, including Lenny Henry, Monica Dolan, Olivia Williams and Christopher Eccleston.',
      url: 'https://rts.org.uk/article/bbc-releases-first-look-images-my-name-leon',
    },
    {
      label: 'Wikipedia, 1981 Brixton riot: Operation Swamp 81, the sus law, the Scarman Report',
      url: 'https://en.wikipedia.org/wiki/1981_Brixton_riot',
    },
    {
      label:
        'Wikipedia, 1981 Handsworth riots: 10 to 12 July 1981, the worst violence on the night of 10 to 11 July, and a flashpoint other than a death in custody.',
      url: 'https://en.wikipedia.org/wiki/1981_Handsworth_riots',
    },
    {
      label: 'Wikipedia, Wedding of Prince Charles and Lady Diana Spencer',
      url: 'https://en.wikipedia.org/wiki/Wedding_of_Prince_Charles_and_Lady_Diana_Spencer',
    },
    {
      label: 'Wikipedia, Birmingham pub bombings',
      url: 'https://en.wikipedia.org/wiki/Birmingham_pub_bombings',
    },
    {
      label: 'Wikipedia, 1981 Irish hunger strike',
      url: 'https://en.wikipedia.org/wiki/1981_Irish_hunger_strike',
    },
  ],
}
