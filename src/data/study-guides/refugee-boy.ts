import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * Refugee Boy, Lemn Sissay's 2013 stage adaptation of Benjamin Zephaniah's
 * 2001 novel. A complete guide: the text had only a placeholder page before
 * this file.
 *
 * THE PRESCRIBED TEXT IS THE PLAY. Pearson's question papers print the text as
 * "Refugee Boy: Benjamin Zephaniah (adapted for the stage by Lemn Sissay)". The
 * novel's plot, cast and ending differ from the play's, so nothing here is
 * taken from the novel except where the context section says so, and says it is
 * the novel.
 *
 * NO EDITION IS HELD. The play is in copyright and there is no licensed copy in
 * the repository, so every quotation was taken from a published source that
 * prints the play's words, and each one is listed in `sources`:
 *
 * - Pearson's own question papers for 2021 to 2025, whose stimulus quotations
 *   are the exam board's printing of the text, with the speaker named. Ten of
 *   the quotations here come from them, most cut to under 15 words.
 * - Pearson's mark schemes for the same papers, whose indicative content quotes
 *   short phrases, and Pearson's exemplar booklet, which prints the specimen
 *   question on Mr Hardwick's line.
 * - Pearson's knowledge organiser, drama activities and trainer's script for
 *   the play. The knowledge organiser contains plot errors (it sets Scene 5 in
 *   Eritrea and has Sweeney helping to rob Alem, both contradicted by Pearson's
 *   own mark schemes and by BBC Bitesize), so no plot fact rests on it alone.
 * - BBC Bitesize's six Edexcel pages on the play, which quote it by scene.
 * - The sample pages of the Collins SNAP text guide, which quote it by scene.
 *
 * Where two of these agree on the words, the quotation is used. A few rest on
 * one careful source only (Collins for the stars line and three of Alem's, BBC
 * for the rally lines and the adjudicator), and none rests on a student
 * script: the candidates' answers in Pearson's exemplar booklet are written
 * from memory and were not used. Where sources disagreed, the guide says less:
 * the letter in Scene 2 is quoted only as "until the fighting stops", because
 * BBC and Pearson print the rest of the sentence differently; Alem's plea in
 * the last scene is quoted only as "Can I come?", because BBC and Pearson
 * repeat "Please" a different number of times; Alem's hope for a world with no
 * refugees is quoted from "no more refugees", because BBC prints both "the day"
 * and "a day" before it. Lines found in only one source that also contained
 * errors were dropped.
 *
 * SCENE NUMBERS follow the 29-scene division that BBC Bitesize and the Collins
 * guide both use. Pearson's drama activities place Alem's West Indian Centre
 * speech in "Sc.26, p.56", where BBC puts it in Scene 27, so the guide groups
 * the last scenes and the scope tells students to check their own copy.
 *
 * FACTS. Where sources disagreed on a fact, the guide follows the ones that
 * agree and says less: BBC Bitesize says in one place that Alem's father is
 * Eritrean, but its own plot page, two Pearson mark schemes and BBC News (2013)
 * all make him Ethiopian and his mother Eritrean; BBC Bitesize dates
 * Zephaniah's refusal of the OBE to 2013, where BBC News and Wikipedia give
 * 2003; Pearson calls Mr Hardwick's hotel a B&B in Berkshire and Collins a
 * London hotel, so the guide says only "Mr Hardwick's hotel". Who plays which
 * court official is described differently by BBC and two mark schemes, so the
 * guide says only that the actors playing the Fitzgerald family voice them.
 *
 * SECOND PASS, 26 September 2026. Every quoted phrase on the page was searched
 * again against the saved copies of the sources above, and each attribution
 * read in its context. What changed, and why:
 * - Ruth's outburst is quoted from "Shut up, I hate you", the wording Pearson's
 *   knowledge organiser and its 2025 mark scheme print; BBC Bitesize alone
 *   opens it with a second "Shut up." Pearson's 2021 mark scheme confirms it
 *   follows Alem mocking her sleep-talking.
 * - "now I need you to be strong more than ever" is kept, but no longer placed
 *   on the Scene 11 card: Pearson's 2023 paper does not say which letter it is
 *   from, and its mark scheme reads it beside the Scene 2 leaving.
 * - Mr Hardwick leaves the letter for Alem (Collins); only a candidate's script
 *   says he hands it over.
 * - "Bang! Bang! Bang!" is placed in Scene 5 only; BBC Bitesize says both
 *   soldier scenes open with loud stage directions "such as" it.
 * - "skirmish" rests on BBC Bitesize alone: the 2025 paper's "skirmish" belongs
 *   to Much Ado About Nothing, not to this play.
 * - Claims no source supported were cut: that Sissay added the stars frame to
 *   the novel, that the adjudicator says "border dispute" in Scene 18, and
 *   Mengistu's dates beyond Pearson's "fled to Zimbabwe in 1991".
 * - The site's style check reads "Bitesize" as an -ize spelling, so rendered
 *   prose says "the BBC's revision guide"; the sources keep the real name.
 *
 * THIRD PASS, 26 September 2026. Every plot and context claim was read again
 * against the saved sources, not only the quotations. What changed, and why:
 * - The star scenes are no longer set "in Africa". BBC Bitesize calls Scenes 1,
 *   7 and 29 flashbacks without saying where they happen, and Pearson's
 *   knowledge organiser puts the last one "in the UK", so the cards say only
 *   that they are memories.
 * - The "awkward jokes" of Scene 17 rested on the knowledge organiser alone and
 *   were cut. BBC Bitesize supports what replaced them: Mr Kelo thanks the
 *   Fitzgeralds and, given money, wants to take them all out to dinner.
 * - The play's final words are not claimed. BBC Bitesize names two different
 *   lines as Alem's "final lines" on the same page ("Can I come? ..." and a line
 *   about the North Star), so the guide says only that "Can I come?" comes in
 *   the last scene. That scene returning to a younger Alem is BBC's reading.
 * - Mr Kelo's "Blood sprays" line is no longer said to describe violence
 *   instead of showing it: BBC Bitesize says the blow is both staged and
 *   narrated.
 * - Smaller corrections: Zephaniah was expelled at 13 (Wikipedia), not simply
 *   left school; the Sri Lankan refugee is BBC News's report, not a quotation;
 *   Sissay's foster parents placed him in a children's home at 12; Alem is
 *   "reading Great Expectations", with no source saying it is set at school;
 *   his last speech is not said to END with the call to his father; Mengistu is
 *   described only as Pearson's 2024 mark scheme describes him; settings not
 *   stated by any source (Scenes 11, 14, 20) were made general.
 *
 * FOURTH PASS (independent check), 26 September 2026. The question papers,
 * mark schemes, exemplar booklet, drama activities, BBC Bitesize, BBC News, The
 * Independent, WJEC and Wikipedia pages were fetched again and read directly,
 * and the Collins sample pages viewed. Every quotation on the page was found in
 * at least one of them with the same speaker. What changed, and why:
 * - Mr Hardwick was "the owner" of the hotel. Collins calls him the manager and
 *   the Black Plays Archive synopsis calls it a B&B, so he now "runs" it.
 * - Scene 4 is set at a bus stop (Collins, WJEC) or "on the street" (BBC), not
 *   in the children's home, so four sentences that placed Sweeney's rant in "a
 *   London children's home" now call him a boy from the home.
 * - Mustapha in Scene 4: Collins says he tries to intervene before he sides
 *   with Sweeney and leaves; the card no longer says only that he was too
 *   frightened to defend Alem.
 * - Mrs Fitzgerald's "chores" in Scene 13 rested on the knowledge organiser
 *   alone and were cut. Pearson's 2023 mark scheme quotes her saying she
 *   "can't talk about Themba", so she is no longer said to be unable to say
 *   his name; BBC's "struggles even to say his name" is used instead.
 * - Hardwick's reassurance is not "Britain's first words to Alem": Collins has
 *   him joke about the noise first.
 * - Alem's West Indian Centre speech is not his "last speech": he speaks again
 *   in the Scene 29 flashback.
 * - Smaller: Ruth is not placed in Scene 17, which no source puts her in; the
 *   extract no longer promises an "empty chair"; the Fitzgeralds' "kitchen"
 *   became their house; Mr Kelo only becomes an asylum seeker in Scene 17;
 *   two readings stated as fact are now offered as readings; Tewdros's name
 *   is spelt Tewodros by WJEC, and the card says so.
 * - Six source labels quoted 15 to 20 words of the play. They are not rendered,
 *   but the repository is public, so each was cut to under 15.
 * Not resolved, and left as the scope's caution: the Scene 8 number for Ruth's
 * outburst rests on the knowledge organiser (BBC's Scene 8 has Ruth explaining
 * refugee status, which fits the same scene). WJEC's Unit 4a sheet gives "We
 * must become that new generation of peacemakers" to Mr Kelo, where Pearson's
 * 2025 mark scheme and BBC Bitesize give it to Alem at the rally; the guide
 * follows the exam board.
 */
export const guide: StudyGuide = {
  slug: 'refugee-boy',
  title: 'Refugee Boy',
  author: 'Benjamin Zephaniah, adapted for the stage by Lemn Sissay',
  form: 'play',
  scope:
    "The whole play: Lemn Sissay's 2013 stage adaptation of Benjamin Zephaniah's 2001 novel, in 29 short scenes. Study the play, not the novel, because the plot, the cast and the ending differ. It is set for Pearson Edexcel GCSE English Literature, Paper 1, Section B: you answer one essay from a choice of two, each opening with a short quotation from the play, without a copy of the text. Scene numbers here follow the 29-scene division used by the BBC's revision guide and the Collins guide. One Pearson teaching resource places a speech from the closing scenes one scene earlier than they do, so check the last few scene numbers in your own copy.",
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Lemn Sissay 2013 (the stage adaptation), from the novel © Benjamin Zephaniah 2001 (Bloomsbury). The play is published by Methuen Drama. Short quotations are used for criticism and review.',
  },
  workLength: {
    words: 12000,
    basis:
      "Estimated, not counted: no copy of the play is held. The Methuen Drama edition (London, 2013) runs to 57 pages according to its library record, Pearson's diversity support pages list the play at 66 pages, and Pearson's drama activities cite page 56 for a speech in the closing scenes. At a typical 200 to 250 words a page of play text that is roughly 11,000 to 14,000 words. Any length above 3,000 words puts the play in the long-work band, where the page may quote at most 400 words in total, so the estimate cannot loosen the limit.",
  },

  overview: {
    summary: [
      "Refugee Boy follows Alem Kelo, a fourteen-year-old born in Badme, a town on the border between Ethiopia and Eritrea. His father is Ethiopian and his mother is Eritrean, and when the two countries go to war (1998 to 2000) the family is attacked by soldiers on both sides of the border. Mr Kelo brings Alem to England on what the boy believes is a holiday, then leaves him at Mr Hardwick's hotel with a letter: his parents think he will be safe in England until the fighting stops.",
      "The play follows Alem through the systems that take charge of a child alone. In a children's home he meets Mustapha, who befriends him, and Sweeney, who renames him, attacks him, calls him Refugee Boy and threatens him with a knife. He runs away and is fostered by Mr and Mrs Fitzgerald, whose daughter Ruth is still grieving for Themba, an earlier foster child who took his own life. He goes to school, learns slang, reads Dickens and faces the asylum court. Two flashbacks show the soldiers breaking into the family's home, first in Ethiopia and then in Eritrea.",
      'In Scene 11 a letter from his father tells Alem that his mother has been killed. Grieving, he pulls a knife on a boy who tries to take his bike, and it is Sweeney, of all people, who stops him and warns him not to become like him. Mr Kelo reaches England, and father and son claim asylum together, but the adjudicator rules that the risk to them is minimal and they are refused. Ruth, Mustapha and Alem organise a campaign, while Mr Kelo fears that drawing attention will harm their case.',
      "The final scenes cut between the campaign's rally, where Mustapha, Ruth and Alem give speeches, and Mr Kelo, who is confronted by a man called Tewdros from the peace organisation the Kelos belonged to, and is then stabbed. Alem, who does not know, calls for his father to join him on stage. A radio report says the police believe the killing may have been politically motivated. The play ends where it began, with a younger Alem and his father looking at the stars, and with the question of whether Alem may stay in England unanswered.",
      'The title is the insult Sweeney forces on Alem in Scene 4, and the play asks what that label does to a person, and what it hides. By the end, Alem is speaking in public as a refugee, a son and a citizen of the world, which is what his name means in his language. One question to carry through the play is whether it is a story about a boy being saved by Britain, or about a boy, and a country, being tested.',
    ],
  },

  context: [
    {
      heading: 'Benjamin Zephaniah and the novel',
      body: "Zephaniah was born in Handsworth, Birmingham, on 15 April 1958, to parents who had come to Britain from the Caribbean. He was expelled from school at 13, unable to read or write because of dyslexia, spent time in an approved school and borstal, and served a prison sentence for burglary in his late teens before making his name as a dub poet in the 1980s. In 2003 he publicly turned down an OBE. Refugee Boy, his second novel, was published by Bloomsbury in 2001 and won the Portsmouth Book Award in 2002. BBC News reported in 2013 that he wrote it after befriending a young Sri Lankan refugee who had seen both his parents shot. He told the same reporter that the media of the time called refugees bogus, fake or statistics, when “behind all those statistics there's a human story”. The BBC's revision guide notes that the novel is dedicated to two teenage refugees who were being refused asylum. Zephaniah died on 7 December 2023, aged 65.",
    },
    {
      heading: 'Lemn Sissay and why he adapted it',
      body: "Sissay was born in Wigan in 1967. His mother had come to Britain from Ethiopia the year before, and he was placed with foster parents as a baby; when he was 12 they placed him in a children's home, and he spent the rest of his childhood in the care system, where he suffered abuse. He later received a formal apology from Wigan Council for his treatment in care, and wrote about it in his memoir My Name Is Why (2019). He was the official poet of the London 2012 Olympics and was chancellor of the University of Manchester from 2015 to 2022. BBC News reported in 2013 that he shares Alem's parental roots, and that when the West Yorkshire Playhouse proposed the adaptation he told Zephaniah “This is my story”. That is worth knowing, not as a key to every character, but because it explains what the play adds to the novel: a far larger place for the care system, for children without parents, and for the damage adults do to them.",
    },
    {
      heading: 'The play on stage',
      body: "The adaptation was first performed at the West Yorkshire Playhouse in Leeds on 9 March 2013 and ran there until 30 March, with Fisayo Akinade as Alem, and was published by Methuen Drama the same year. The Independent's reviewer noted that the set seemed to be made almost entirely of suitcases, a simple image of people on the move. Sissay told BBC News that a newcomer shows you who the people on a street really are, and that the story of a young refugee “tells us about ourselves”. That is a useful way into the play: Alem changes, but the play is just as interested in how everyone around him responds to him, from Sweeney to the adjudicator.",
    },
    {
      heading: 'The play is not the novel',
      body: "Students who have read Zephaniah's novel should be careful, because Sissay changed a great deal. The Collins guide points out that the play moves straight from the hotel to the children's home, and that Sweeney, who disappears from the novel once Alem leaves the home, returns in the play to stop the mugging and warn him. In the novel the campaign is started by Alem's school friends; in the play it is organised by Ruth and Mustapha. Most importantly, the novel ends with Alem granted asylum, while the play ends with the court's refusal still standing and his future undecided. In the exam, write about the play only.",
    },
    {
      heading: 'The Eritrean-Ethiopian War and Badme',
      body: "Eritrea became independent from Ethiopia in 1993, after a thirty-year war of independence. The new border was never agreed, and in May 1998 war broke out over the disputed town of Badme, lasting until June 2000 and killing tens of thousands of soldiers and civilians. Alem explains that some people think the area is part of Ethiopia and some think it is part of Eritrea, and the British court dismisses the war as a border dispute. For families like the Kelos, with a parent from each side, the war was catastrophic: Human Rights Watch estimated that Ethiopia expelled about 75,000 people of Eritrean origin during the war, that Eritrea expelled or repatriated about 70,000 Ethiopians, and that families were separated on grounds of origin alone. That is exactly what the two flashbacks show. A peace agreement was signed in Algiers in December 2000, but the border stayed disputed until 2018. In Scene 12 the Eritrean soldier accuses Mr Kelo of links to Mengistu Haile Mariam, the former Ethiopian leader who, as Pearson's 2024 mark scheme notes, fled to Zimbabwe in 1991.",
    },
    {
      heading: 'Seeking asylum in Britain',
      body: "Under the 1951 United Nations Refugee Convention, which Britain signed, a country may not send a refugee back to a place where they would face persecution or a serious threat to their life. Someone who asks for that protection is an asylum seeker until a decision is made, and if refused can appeal. At the time the play is set, appeals were heard by immigration adjudicators, a title replaced in 2005 when adjudicators became immigration judges, so the Adjudicator of the play belongs to the system of its time. A child who arrives alone, as Alem does, is taken into the care of a local authority, which is why he passes from a children's home to foster carers and has a social worker. The play dramatises how slow, formal and uncertain the process is: two hearings, a postponed deportation order, a refusal, and a father who arranges a meeting with the Refugee Council while his son organises a protest.",
    },
    {
      heading: 'Children in care',
      body: "The play's British characters are almost all shaped by the care system. Sweeney and Mustapha live in a children's home, each because of what happened with his father. The Fitzgeralds are experienced foster carers who, Ruth says in Scene 14, have had nine foster children, and one of them, Themba, took his own life. Pearson's mark schemes present the Fitzgeralds as offering the safety that foster care is meant to give, and present the home as a place of anxiety and bullying. Sissay, who grew up in care, lets the audience see both. When Mustapha says he has “Never really known who I was. Spent a life in different homes.”, the short, broken sentences sound like a whole childhood compressed into a line, and Sissay's own experience gives the line particular weight.",
    },
    {
      heading: 'Knives and violence in Britain',
      body: "Pearson's 2024 mark scheme notes the play's focus on knife crime, and the references are deliberate. Sweeney threatens Alem with a knife in Scene 4; in Scene 6 Mrs Fitzgerald notices that the cheese knife has gone missing; in Scene 15 Alem draws it on the boy trying to take his bike; and in Scene 26 Mr Kelo is stabbed. The play refuses to separate a violent Africa from a safe Britain. The war drives the family out, but Alem meets violence again from a boy in his children's home and from a stranger on a street, and his father is killed in London. Pearson's mark scheme for 2022 reads the killing as showing the hostility some people feel towards asylum seekers; the radio report in Scene 28 says only that the police think it may have been politically motivated. Both readings leave the same point standing: Britain is not a place where violence stops.",
    },
    {
      heading: 'Dickens, Shakespeare and the idea of Britain',
      body: "Mr Kelo, who speaks six languages, has read Shakespeare and Dickens, and Alem is reading Great Expectations, the story of Pip, an orphan who has to make his own way. Mr Kelo's England is an England of books: the country he calls “this great country of Dickens and Shakespeare” when he explains, in Scene 17, that he has applied for asylum. The play measures that literary England against the one Alem meets: a children's home, a court that will not listen, a knife. The Collins guide suggests that Great Expectations may quietly foreshadow Alem's own situation, since he too ends up without either parent. Dickens also wrote about the treatment of poor and orphaned children, so the reference points both ways: at Britain's best idea of itself and at the problems it has never solved.",
    },
  ],

  themes: [
    {
      title: 'Home and belonging',
      body: "The Kelos have no safe home anywhere. Soldiers drive them out of Ethiopia for having an Eritrean mother and out of Eritrea for having an Ethiopian father, and Mr Kelo's answer to the soldiers is “I am African”, a refusal to let a border decide who he is. In England, home is offered by people and withheld by the state. Mr Fitzgerald's first words to Alem in Scene 6 are “You'll be right at home here, boy.”, and Pearson's training materials quote Mrs Fitzgerald telling him “You are part of our family”. At the rally, Mustapha, who has lived in different homes all his life, turns the question to the audience: “Don't we all need somewhere we can call home?” One reading is that the play finds home in people rather than places: the Fitzgeralds, Ruth and Mustapha become Alem's family. That is true, but the ending makes it incomplete. The court's refusal still stands when the play ends, and his father is dead. The more convincing reading is that the play shows how much ordinary people can give, and how little that counts when the law says a person does not belong. Sissay's preface, as the BBC's revision guide quotes it, insists that “Immigration is as natural to us as breathing”, and the play asks why the systems it shows treat it as a threat.",
    },
    {
      title: 'Identity and names',
      body: "Alem's name means world in his language, as he tells the rally, and the play keeps asking who has the right to name him. Sweeney calls him “Ali” in Scene 3 while threatening anyone who shortens his own name; in Scene 4 he forces Alem, at knifepoint, to call himself Refugee Boy, a label instead of a name. In Scene 15 Alem turns the lesson around on his attacker: “What's my name? My full name? Say my name.” In court he names himself plainly, “My name is Alem Kelo. My age is fourteen.”, as if facts could protect him. Language is part of the same struggle. He wakes in Scene 2 speaking Amharic, learns slang from Mustapha, and ends the play speaking fluent, persuasive English in public. One reading sees this as Alem losing himself in England. The stronger reading is that he adds to himself without giving anything up: he says grace in Amharic at the Fitzgeralds' table and, in his last public speech, still calls for his father as Father, yet he can also argue with an adjudicator. The play suggests that identity is something a person builds and defends, and that the cruellest thing Sweeney and the court do is try to reduce him to one word.",
    },
    {
      title: 'Violence and fear',
      body: "Violence frames the whole play. The first flashback opens with “Bang! Bang! Bang!”, soldiers break down the door, and Alem's mother is struck in front of him. But Sissay refuses to let Britain be the safe opposite of the war. Sweeney threatens Alem with a knife in Scene 4, and the first flashback follows at once, as if one attack calls up the other; when the letter about his mother arrives in Scene 11, Alem hears banging at the door and the second flashback begins. The most disturbing point is that violence is learned. In Scene 15 Alem, grieving, pulls a knife and echoes Sweeney's own threat, “I'll cut you up”. It is Sweeney who stops him, with his warning “Messed with. Messed up.”, and who reveals that his father used to beat him. Fear drives almost all of it: Mr Kelo leaves his son out of fear, Mr Hardwick is frightened of the screaming boy in his hotel, and Mustapha sides with Sweeney because he is afraid of him. The play's argument is that violence spreads from person to person and from country to country, and that it can only be stopped by someone choosing, as Sweeney finally does, not to pass it on. Mr Kelo's death shows that choice being refused.",
    },
    {
      title: 'Family and friendship',
      body: "Almost every family in the play is broken. Alem loses both parents; Mustapha's father “was driven away” and Mustapha still names every car he sees; Sweeney's father beat him; the Fitzgeralds are still grieving for Themba. Yet the play is full of love. Mr Kelo's decision to leave Alem is an act of love that feels, at first, like betrayal, and his letters are the voice of a father trying to parent from another continent. The Fitzgeralds are not idealised: they worry about money and about how long Alem should stay, and Ruth feels pushed aside, asking “It's always later, isn't it?” when her parents put a foster child first. That honesty makes their kindness more convincing. Mustapha's line “Friends are like the family you make” names what happens by the end: Ruth, Mustapha and Alem become a chosen family and fight for the Kelos together. A reader could argue that the play is sentimental about friendship. The better reading is that it earns it, because each friendship begins in hostility or betrayal, Ruth's outburst in Scene 8, Mustapha's desertion in Scene 4, and has to be rebuilt.",
    },
    {
      title: 'Prejudice',
      body: "Sissay shows the same prejudice on three sides. The Ethiopian soldiers call Alem a “mongrel”, the Eritrean soldiers call the family “Dirty dog traitors”, and in London Sweeney, a boy from his children's home, tells him refugees are “liars and thieves” and “you're all poison”. The repetition across two continents makes the point that prejudice does not belong to one people: it is the same fear of the outsider in different uniforms. Official prejudice is quieter. The court calls the war a “border dispute” and a “skirmish”, and the adjudicator offers his “condolences” for Alem's mother while ruling that the family can go home. Alem's judgement is simple: “The judge doesn't know anything about Ethiopia or Eritrea”. One interpretation, which the BBC's revision guide offers, is that much of this prejudice grows from ignorance and fear. The play supports that, and also shows that ignorance can be unlearned: Sweeney, the loudest bigot in the play, is the one who saves Alem from a knife fight. Prejudice here is not a fixed quality of bad people but something the play believes people can change, which is why its most hateful speech comes early and its most hopeful speeches come last.",
    },
    {
      title: 'Justice and the asylum system',
      body: "The court scenes test Mr Kelo's faith in Britain. He believes in “this great country of Dickens and Shakespeare”, yet a Pearson mark scheme records that he once told Alem that court is where they “punish you for things you haven't done”. In Scene 9 the adjudicator finds “no personal threat” to Alem and the deportation order is only postponed. In Scene 18, although the lawyer describes a “massive escalation of the fighting”, the adjudicator rules that “the risk to the lives of the appellants is minimal”. The distance between those two phrases is the play's sharpest criticism: the law speaks of appellants and risk, while the audience has watched soldiers break down the Kelos' door. Sissay's staging makes the point too, because the actors who play the kind Fitzgerald family also voice the court officials, so the same bodies show welcome and refusal. After the refusal, father and son disagree. Mr Kelo wants to appeal quietly and says “We cannot afford to draw attention to ourselves”; Alem challenges his faith in the system with “Our human rights, Dad”, and complains that the judges do not listen. One reading sides with Mr Kelo as a realist who knows how systems treat people who protest. Another points to the ending, in which he is killed anyway, as support for Alem: keeping quiet did not keep him safe.",
    },
    {
      title: 'Youth and hope',
      body: 'The adults in the play, the soldiers, the adjudicator and even the loving but cautious Mr Kelo, are largely fixed in their ways; the young people change. Ruth moves from telling Alem she hopes they send him back to calling herself his sister; Mustapha moves from following Sweeney to leading a campaign; Sweeney moves from threatening Alem to protecting him. At the rally the three friends speak for their generation. Ruth says “It is time that the voice of the youth be heard”, and Alem calls on the audience to become “that new generation of peacemakers”, turning his own story into a demand on everyone listening. The motif of the stars carries the same hope: in Scene 1 Mr Kelo tells Alem that in England the stars “take it in turns to shine”. Is the ending hopeful? The play invites both answers. Alem has lost both parents and the court has refused him; the last scene returns to a younger Alem asking his father “Can I come?”, which is heartbreaking once we know his father is dead. But the rally has filled the stage with people on his side. The strongest reading is that Sissay leaves the ending open on purpose, so that the question of what happens to Alem passes from the play to the audience.',
    },
  ],

  characters: [
    {
      name: 'Alem',
      role: 'The protagonist: Alem Kelo, fourteen, born in Badme to an Ethiopian father and an Eritrean mother',
      body: "Alem arrives in England believing he is on holiday and wakes in Scene 2 to find himself alone, crying out in Amharic for his father. He speaks Amharic, Tigrinya and English, loves school, reads Great Expectations and tells Mustapha of his lessons, “it's difficult but that's how I learn”. He is generous from the start: in Scene 3 he lies about his chips to protect Mustapha, and in Scene 11, the Collins guide notes, he insists on giving Ruth his pocket money. He defends his parents against Sweeney even at the cost of a beating. The death of his mother changes him. In Scene 15 he pulls a knife on a mugger and echoes Sweeney's threat, and Sissay lets the audience see how close he comes to the path Sweeney warns him off. By the end he has grown into a leader: he argues with his father about the campaign, invokes his mother, “a fighter” who “would not stay quiet”, and speaks to the rally. In his speech at the West Indian Centre he calls for a father the audience has just seen stabbed. Alem is less a victim than a test: of every person and system he meets, and of the audience.",
    },
    {
      name: 'Mr Kelo',
      role: "Alem's father, an Ethiopian, a peace campaigner and a man of books",
      body: "Mr Kelo speaks six languages, has read Shakespeare and Dickens and, with his wife, works for EAST, an organisation campaigning for peace and unity. When the soldiers demand that he choose a side, he says “I am African”. He is present in the play mostly through memory and letters: the stars scenes, the flashbacks and the letters Alem reads aloud, in one of which he tells his son “now I need you to be strong more than ever”. His decision to leave Alem is agonising, and the play presents it as an act of protection rather than desertion. When he reaches England in Scene 17 he is courteous and warm, thanks the Fitzgeralds and wants to take them out to dinner, and puts his faith in the law. After the refusal he fears protest and tells Alem “We cannot afford to draw attention to ourselves”. The BBC's revision guide notes that he minds being called Dad rather than Father, a small sign of a formal, old-fashioned love. He is stabbed in Scene 26 as the rally for him goes on. He embodies the play's saddest irony: the man who trusted peaceful, lawful means the most is the one violence reaches.",
    },
    {
      name: 'Mrs Kelo',
      role: "Alem's mother, an Eritrean, seen only in the two flashbacks",
      body: "Mrs Kelo is on stage only in Scenes 5 and 12, and the BBC's revision guide notes that her only sound is a cry as a soldier strikes her. Almost everything the audience learns about her comes from others: she is educated, speaks several languages and campaigns for peace alongside her husband. In Scene 5 the Ethiopian soldiers attack her as “the enemy”, as a Pearson mark scheme records; in Scene 11 a letter tells Alem she has been “killed by some very evil people”. Her silence is dramatically powerful. She is the play's clearest victim of the war, and yet in Alem's memory she becomes its strongest voice: when he argues with his father in Scene 20 he calls on her as a fighter who would not stay quiet, and uses her example to justify the campaign.",
    },
    {
      name: 'Mustapha',
      role: "A boy in the children's home: Alem's first friend, a comic character with a hidden grief",
      body: "Mustapha talks fast, obsesses over cars, girls and the number of chips he is given, and is the play's main source of comedy in its early scenes. When he first meets Alem he demands “Do you know who I am?”, and Alem's literal reply, as the Collins guide quotes it, is “No, that is why I am asking you.” He teaches Alem slang and warns him to be careful in the home, but in Scene 4, although he tries at first to intervene, he is too frightened of Sweeney to stand by Alem, sides with the bully and leaves with him. In Scene 10 he apologises and promises not to betray Alem again, and keeps his word. In Scene 15 he admits that his father knew nothing about cars and “was driven away” in one; his habit of naming every car he sees is really a way of watching for his father's return. By the end he is a co-organiser of the campaign and speaks at the rally for his best friend. His arc, from comic sidekick to a young man speaking in public about fear and home, is one of the clearest changes in the play.",
    },
    {
      name: 'Sweeney',
      role: "The bully of the children's home, who becomes Alem's unlikely protector",
      body: "Sweeney insists on being top dog. In Scene 3 he calls Alem “Ali” while warning that anyone who shortens his own name will be hurt, and in Scene 4 he takes offence at Alem's defence of his family, attacks him, insults refugees and forces him at knifepoint to call himself Refugee Boy. Pearson's mark schemes read his aggression as a product of his own childhood, and in Scene 15 he reveals it: his father “Used to try and rearrange” his face. In the same scene he arrives as Alem is threatening a mugger, sends the mugger away and tells Alem “You don't want to be like us, Alem. Messed with. Messed up.” The Collins guide notes that Sissay enlarges his role from the novel, where he disappears once Alem leaves the home. Sweeney is the play's most important evidence that people can change, and its most uncomfortable: the audience has to hold his cruelty and his tenderness at the same time.",
    },
    {
      name: 'Ruth',
      role: "The Fitzgeralds' teenage daughter: hostile at first, then Alem's sister in all but name",
      body: "Ruth feels overlooked in a house that is always putting a foster child first, complaining that nobody tells her anything, and she resents being asked nothing about Alem's arrival. She is also grieving for Themba, a foster child she fell for, who took his own life; in Scene 6 she compares Alem to him, and in Scene 8, when Alem teases her about crying out for Themba in her sleep, she explodes. In Scene 13 she tries and fails to make her mother talk about Themba, and in Scene 14 she tells Alem the truth, promises him “you can trust me” and comforts him as he weeps for his mother. From then on she is fiercely loyal: she co-organises the campaign and speaks at the rally for the voice of the young. Pearson's question papers have focused on her twice, once on its own and once on her relationship with Alem, and her change from hostility to loyalty is one of the play's structural spines.",
    },
    {
      name: 'Mrs Fitzgerald',
      role: "Siobhan Fitzgerald, Alem's foster mother: warm, attentive and carrying her own grief",
      body: "Mrs Fitzgerald asks about Alem's week, notices that the cheese knife has gone missing, and tells him, as Pearson's trainer quotes her, “You are part of our family”. She wants him to stay with them rather than go back to the children's home. Her warmth is shadowed by Themba's death, which she cannot talk about. In Scene 13, pressed by Ruth, she breaks: “I can't think about him every day. Every God-forsaken day.” The repeated, intensified phrase shows a grief she has kept down rather than faced. She reminds the audience that the people who care for vulnerable children carry their losses too, and that kindness in this play is never easy.",
    },
    {
      name: 'Mr Fitzgerald',
      role: "Geroid Fitzgerald, Alem's foster father: cheerful, protective of his wife, anxious about money",
      body: "Mr Fitzgerald welcomes Alem with his first words in Scene 6, “You'll be right at home here, boy.”, and his teasing affection for his wife, “I love you, Mrs Fitzgerald” in a line a Pearson mark scheme quotes, gives the household its warmth. He is also the one who worries. According to Pearson's mark scheme he had agreed to only a couple of months, and he worries that his wife, who grows attached to the children they foster, will be hurt. The family's money is tight. These doubts make him realistic rather than saintly. When Mr Kelo arrives in Scene 17, the Fitzgeralds welcome him and give him money, which his first instinct is to spend on taking them all out to dinner: two families from different worlds, each trying to look after the other.",
    },
    {
      name: 'Mr Hardwick',
      role: 'The man who runs the hotel where Mr Kelo leaves Alem, seen in Scene 2',
      body: "Mr Hardwick has the play's first encounter with Alem in England, and it is a frightened one on both sides. Alem has woken to find the door locked and his father gone, and cries out in Amharic and screams; Mr Hardwick tries a joke, then approaches him nervously, repeating that he means no harm. He leaves Mr Kelo's letter for him. He matters because he is Britain's first face in the play: well meaning, bewildered and out of his depth, like much of the system that follows.",
    },
    {
      name: 'Themba',
      role: 'A former foster child of the Fitzgeralds, never seen, whose death shapes Ruth and her mother',
      body: "Themba lived with the Fitzgeralds before Alem. Ruth fell for him, and he took his own life. He never appears, but he is present in Ruth's sleep-talking, in her anger at Alem, whom she says could have been Themba, and in her mother's struggle to say his name. Sissay uses him to show that the care system's children are not only refugees, and that a foster family's grief is real. Alem's arrival forces the Fitzgeralds to face what they have not spoken about, which is part of why Ruth and Alem can finally help each other in Scene 14.",
    },
    {
      name: 'The soldiers',
      role: "The men who break into the Kelos' home in Ethiopia (Scene 5) and in Eritrea (Scene 12)",
      body: "The soldiers are unnamed, which makes them less individuals than the war itself in human form. They burst in, strike Mr and Mrs Kelo, abuse Alem for his mixed heritage and order the family to leave the country or die. The two flashbacks mirror each other so closely that the audience sees the same violence from both sides of the border. The BBC's revision guide notes that Mr Kelo recognises one of the soldiers and tells him he knows his parents, a detail that shows neighbours turned into enemies overnight. Pearson's mark scheme for 2022 makes the same point: the family is abused by people it thought of as friends.",
    },
    {
      name: 'The court officials',
      role: 'The social worker, lawyer and adjudicator in the asylum hearings, voiced by the actors who play the Fitzgerald family',
      body: "The court officials speak for the state. The lawyer argues that the fighting has escalated and that the political circumstances have not changed; the adjudicator speaks of personal threat, appellants and minimal risk, and in Scene 18 refuses the Kelos' claim. Their language turns a war into paperwork. Sissay's stage directions have the actors playing the Fitzgerald family voice these roles, so the audience sees the same performers who make Alem welcome deliver the decision that he must leave. The doubling suggests that the officials are not monsters but ordinary people inside a system that makes them speak coldly.",
    },
    {
      name: 'Tewdros',
      role: "A man from the Kelos' political past in EAST, who confronts Mr Kelo in Scenes 22 and 24",
      body: "Tewdros appears in the cross-cut scenes between the rally speeches. The BBC's revision guide describes him confronting Mr Kelo in Scene 22 and implying, in Scene 24, that Alem is in great danger. The stage direction for the killing in Scene 26 names the attacker only as a man, and the radio report in Scene 28 names nobody. What matters for an essay is the effect: the politics that drove the Kelos from Africa reaches them in London, while the rally celebrates the hope that they might stay. The BBC's revision guide spells his name Tewdros and a WJEC resource spells it Tewodros, so check the spelling in your own copy before you use it.",
    },
    {
      name: 'Hooded',
      role: "The youth who tries to steal Alem's bike in Scene 15",
      body: "Hooded is named only by his hood, which makes him any threatening young man on any street. He demands Alem's bike and threatens him, and Alem, who has been carrying the Fitzgeralds' cheese knife, draws it. The scene matters because it shows Alem, for the first time, becoming the aggressor, and because it brings Sweeney back into the play as the one who stops the fight.",
    },
  ],

  keyQuotes: [
    {
      text: 'In England the stars have to sleep. They take it in turns to shine.',
      where: 'Mr Kelo to Alem, Scene 1',
      analysis:
        "In the play's first scene, a father turns a strange country into a bedtime story. The personification of the stars as taking turns makes England sound orderly, fair and gentle, a place where everyone gets a chance to shine. It is dramatic irony in slow motion: the audience will soon see how unfairly England shares its light. The stars return in Scenes 7 and 29, so this line becomes the motif that ties Alem to his father across distance and death.",
    },
    {
      text: "I'm not going to hurt you. I'm not going to hurt you.",
      where: 'Mr Hardwick to Alem, Scene 2',
      analysis:
        'Pearson set this line for its specimen question on fear, and fear runs both ways in it. Alem is terrified, alone and screaming in Amharic; Mr Hardwick repeats his reassurance because he is frightened too, of a boy he cannot understand. The repetition shows a man trying to calm himself as much as Alem. Mr Hardwick is the first British person Alem meets in the play, and his words are kind in intention, helpless in effect, and a sign of the misunderstandings ahead.',
    },
    {
      text: "you're all poison",
      where: 'Sweeney to Alem, Scene 4',
      analysis:
        "Sweeney's metaphor turns people into a contaminating substance, something to be kept out. The plural “all” erases Alem as an individual: he is no longer a boy but a category. The BBC's revision guide points out that the soldier in the first flashback also uses the word poison, so the insult links a boy from a London children's home to the soldiers of a war zone. Use it to show that prejudice speaks the same language everywhere, and to set against Sweeney's change in Scene 15.",
    },
    {
      text: "My family don't act like sinners. My father is a good man.",
      where: 'Alem to Sweeney, Scene 4',
      analysis:
        "Alem answers Sweeney's claim that family messes you up with a loyal, simple defence. The short declarative sentences show certainty: he does not doubt his father even after being left alone. Dramatically, it is the line that provokes the attack, because Sweeney hears it as an insult to his own family. The moment reveals both boys at once, Alem's security in his parents' love and the wound in Sweeney that makes that security unbearable to him.",
    },
    {
      text: 'Blood sprays from her mouth in an arch and lands like fine dust',
      where: 'Mr Kelo, Scene 5',
      analysis:
        'Pearson printed this line for its 2024 question on aggression. The soldier strikes Mrs Kelo on stage, and Mr Kelo narrates the blow. The precise, almost slow-motion description, the arch and the simile of fine dust, suggests a memory replayed over and over. Putting into words what the audience has just seen fixes it in their minds, and the calm, exact language shows trauma: he cannot stop seeing it. It is the image that explains why he leaves his son in England.',
    },
    {
      text: 'Shut up, I hate you. I hope they send you back.',
      where: "Ruth to Alem, at the Fitzgeralds' house (Scene 8)",
      analysis:
        "Ruth's outburst comes when Alem teases her about crying out for Themba in her sleep. The blunt command and the flat “I hate you” are the words of someone in pain, not only someone cruel: he has touched the grief she cannot speak about. The final sentence is the cruellest thing she could say to a refugee, which is why she says it. Set it against her promise in Scene 14, “you can trust me”, to show one of the play's clearest changes, from grief turned outwards to grief shared.",
    },
    {
      text: 'now I need you to be strong more than ever',
      where: 'Alem, reading aloud one of the letters from his father',
      analysis:
        "Pearson printed the full sentence for its 2023 question on courage, but without saying which of Mr Kelo's letters it comes from, so check the scene in your own copy before you name one. The phrase “more than ever” shows a father who knows he is asking too much of a fourteen-year-old. Because Alem reads the letter aloud, the father's voice comes through the son's mouth, and the audience watches him receive the burden. The letter form suits a play about separation: Mr Kelo can only parent at a distance, through words that arrive after the event.",
    },
    {
      text: 'Dirty dog traitors. Leave Eritrea or die!',
      where: 'A soldier, in the flashback set in Eritrea (Scene 12)',
      analysis:
        "Pearson set this line for its 2022 question on anger. The animal insult dehumanises the family, and “traitors” accuses them of betraying a side they never chose. The brutal choice, leave or die, repeats the Ethiopian soldier's order in Scene 5 with only the country changed. That echo is the point: whichever border the Kelos stand on, they are the enemy. Use it to show the impossibility of their position and why Mr Kelo refuses to say anything but that he is African.",
    },
    {
      text: "I can't think about him every day. Every God-forsaken day.",
      where: 'Mrs Fitzgerald to Ruth, about Themba (Scene 13)',
      analysis:
        "Pearson set this line for its 2025 question on suffering. In it Mrs Fitzgerald calls Themba only “him”, and the BBC's revision guide notes that she struggles even to say his name. The repetition that builds from “every day” to “Every God-forsaken day” shows grief breaking through her self-control. The line shows that suffering in the play is not only a refugee's: the people who care for others are wounded too, and have their own reasons for silence.",
    },
    {
      text: "Whatever happens, whatever, you can trust me. Like I'm your sister, right?",
      where: 'Ruth to Alem, Scene 14',
      analysis:
        "Pearson printed this line for its 2025 question on Ruth and Alem. The repeated “whatever” sounds urgent and teenage, a promise made clumsily but meant completely. The simile of a sister offers Alem a new family at the moment he learns he has lost his mother, and the tag question “right?” asks for his agreement. It marks the turning point of their relationship, from Ruth's outburst in Scene 8 to the alliance that will lead the campaign.",
    },
    {
      text: "You don't want to be like us, Alem. Messed with. Messed up.",
      where: 'Sweeney to Alem, Scene 15',
      analysis:
        "Pearson set this line for its 2021 question on helping others. Sweeney, who once refused to use Alem's name, now uses it. The two short phrases compress a life into cause and effect: first he was damaged, then he became damaging. The pronoun “us” admits he is part of a group he wants Alem to escape. It is the play's clearest statement that violence is learned, and the moment the bully becomes a protector.",
    },
    {
      text: "Every car I see I think it's him driving his way back",
      where: 'Mustapha to Alem, Scene 15',
      analysis:
        "Mustapha's comic obsession with cars is revealed as grief. The habit of naming every car is really a way of watching for his father, who was driven away and never came back. The present tense and “every” show a hope he has never been able to put down. The line makes the audience look back at his earlier jokes differently, and links him to Alem, another boy waiting for a father to return.",
    },
    {
      text: 'this great country of Dickens and Shakespeare',
      where: 'Mr Kelo, Scene 17',
      analysis:
        "Mr Kelo uses this phrase as he explains that he and Alem must ask Britain to let them stay. His Britain is the Britain of its greatest writers: noble, educated, just. The adjective “great” is sincere, which makes it painful, because the next scene is the court's refusal. The phrase shows his faith and his naivety at once, and lets the play measure a literary idea of Britain against its institutions.",
    },
    {
      text: 'We are here because Mother was a fighter and would not stay quiet',
      where: 'Alem to his father, Scene 20',
      analysis:
        "Alem answers his father's caution by invoking his mother. Calling her “Mother” keeps the formal respect Mr Kelo expects even as Alem overrules him. The phrase “would not stay quiet” turns silence into a choice and protest into loyalty to the dead. It marks the reversal of the father-son relationship: the boy who was protected now leads, and argues that speaking out is the family's inheritance.",
    },
    {
      text: 'It is time that the voice of the youth be heard',
      where: 'Ruth, at the rally (Scene 23)',
      analysis:
        "Ruth's speech moves from personal loyalty to public argument. The formal phrasing, “the voice of the youth”, sounds like someone deliberately taking up the language of adults to challenge them. It gives the play's young characters the authority that the adjudicator and the soldiers have abused. The BBC's revision guide reads the rally speakers as Sissay's mouthpieces, and this is the line where that reading is strongest.",
    },
    {
      text: 'we must become that new generation of peacemakers',
      where: 'Alem, at the rally (Scene 25)',
      analysis:
        "Alem's inclusive “we” turns his story into a responsibility for everyone listening, on stage and in the audience. The word “peacemakers” links him to his parents' work for peace and redefines what a refugee can be: not a problem to be managed but a person with something to give. Coming just before Scene 26, the line is almost unbearably ironic, because the audience is about to see where the old generation's conflict leads.",
    },
  ],

  extracts: [
    {
      title: 'Sweeney names him, and the soldiers arrive',
      where: 'Scene 4 into Scene 5',
      pointer:
        "Scene 4, from Mustapha teaching Alem slang at the bus stop to Mustapha leaving with Sweeney; then Scene 5, the flashback that opens with the soldiers at the Kelos' door in Ethiopia.",
      summary:
        "At the bus stop Mustapha is teaching Alem slang when Sweeney arrives and starts talking about family, claiming that it messes you up. Alem defends his parents, Sweeney hears an insult to his own family, and his temper explodes into a racist speech about refugees. He hits Alem, draws a knife and forces him to call himself Refugee Boy, and Mustapha, afraid, leaves with him. The play then cuts straight to the past: soldiers break into the Kelos' home in Ethiopia, strike Mrs Kelo, abuse Alem for his mixed heritage and order the family out.",
      annotations: [
        {
          phrase: 'family messes you up',
          note: "Sweeney's claim is really about himself: it is the first hint of the abuse he reveals in Scene 15. The generalisation lets him attack family without admitting what his own did.",
        },
        {
          phrase: "My family don't act like sinners",
          note: "Alem's loyal reply is innocent and devastating to Sweeney, who hears it as a judgement on his own family. Two boys, one sentence, and two very different childhoods collide.",
        },
        {
          phrase: "I'll cut you up. Refugee Boy",
          note: 'The threat and the label arrive together, so the insult becomes part of the violence. Sweeney reduces Alem to a category, and the play takes its title from the moment he does.',
        },
        {
          phrase: 'Bang! Bang! Bang!',
          note: "The sound that opens the flashback makes the attack in London flow straight into the attack in Ethiopia. The structure shows the audience that one trauma calls up another in Alem's mind.",
        },
        {
          phrase: 'Leave Ethiopia or die!',
          note: "The soldier's order will be repeated in Scene 12 with Eritrea in its place. Placed after Sweeney's rant, it makes the boy from the children's home and the soldiers sound uncomfortably alike.",
        },
      ],
      question:
        "Sweeney: “you're all poison” Explore how Sissay presents prejudice in Refugee Boy. You must refer to the context of the play in your answer.",
    },
    {
      title: 'The bike, the knife and Sweeney',
      where: 'Scene 15',
      pointer:
        'Scene 15, from Mustapha naming passing cars to Sweeney sending the mugger away and warning Alem.',
      summary:
        "The scene begins in comedy, with Mustapha naming passing cars and Alem saying how much he enjoys school. Then Mustapha admits that his father knew nothing about cars and was driven away in one. When Mustapha leaves, a hooded youth tries to take Alem's bike and threatens him. Alem, who has been grieving for his mother, draws the Fitzgeralds' cheese knife, insists on his name and repeats Sweeney's old threat. Sweeney arrives, stops the fight, sends the mugger off and warns Alem not to become like him, revealing that his own father beat him.",
      annotations: [
        {
          phrase: 'driving his way back',
          note: "Mustapha's jokes about cars turn into grief in three words. The present participle shows a hope that has never stopped, and prepares the audience to see other characters' hidden wounds.",
        },
        {
          phrase: "What's my name? My full name? Say my name.",
          note: 'Three questions demand recognition. After Sweeney renamed him Ali and Refugee Boy, Alem insists on his real name, but he does it with a knife, so self-assertion and violence are tangled together.',
        },
        {
          phrase: 'You want to fight?',
          note: "The gentle boy of Scene 3 now issues the challenge. Pearson's mark schemes connect this anger to his feeling of being abandoned by his father and to the strain of adjusting to England, and the news of his mother's death sits just behind it. That is a stronger reading than simple bravado.",
        },
        {
          phrase: 'Used to try and rearrange',
          note: "Sweeney's bitter joke about his father's violence explains his own. The euphemism of rearranging a face lets him speak about abuse without breaking down, and makes the audience pity the bully.",
        },
      ],
      question:
        'Sweeney: “Messed with. Messed up.” Explore how violence is presented in Refugee Boy. You must refer to the context of the play in your answer.',
    },
    {
      title: 'The rally and the missing father',
      where: 'Scenes 21 to 29, the end of the play',
      pointer:
        "From Mustapha's rally speech for his best friend (Scene 21) through the cross-cut scenes with Mr Kelo, to the stars at the very end (Scene 29).",
      summary:
        "The final scenes are short and cut rapidly between two places. At the rally, Mustapha, Ruth and Alem each speak against the Kelos' deportation. Elsewhere, Mr Kelo is confronted by Tewdros, a man from EAST, and then, in Scene 26, stabbed. At the West Indian Centre Alem, not knowing, says he would rather be celebrating than demonstrating and calls for his father to join him. A radio report describes the killing of a man of both nationalities. The play ends with a flashback to a younger Alem with his father, under the stars.",
      annotations: [
        {
          phrase: "Don't we all need somewhere we can call home?",
          note: "Mustapha's rhetorical question moves the play's theme from the Kelos to everyone. Coming from a boy who has lived in many homes, it claims that belonging is a universal need, not a favour.",
        },
        {
          phrase: 'we must become that new generation of peacemakers',
          note: 'Alem makes his story a demand on the audience. The line sits just before the killing, so its hope and the violence that follows are placed side by side for the audience to weigh.',
        },
        {
          phrase: 'Father, are you here?',
          note: 'Dramatic irony at its most painful: the audience has just seen Mr Kelo stabbed, and Alem does not know. The formal “Father” reminds us of the respect their relationship was built on.',
        },
        {
          phrase: 'politically motivated',
          note: "The radio report's official phrase flattens a father's death into a news item, and the report does not even name him. The play ends its public story in the same cold language as the court.",
        },
        {
          phrase: 'Can I come?',
          note: 'The last scene returns to the past, and a child pleads to go with his father. After Scene 26 the question has an answer he cannot hear, which makes the circular ending grief rather than comfort.',
        },
      ],
      question:
        'Alem: “Father, are you here?” In what ways is loss significant in Refugee Boy? You must refer to the context of the play in your answer.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Code-switching between Amharic, formal English and slang',
      example:
        'Alem wakes in Scene 2 crying out in Amharic before the English “Where is my father?”; in Scene 6 he tells the Fitzgeralds that school is great and lists his subjects for them; later he experiments with slang such as “Yo momma”.',
      effect:
        "Alem's speech tracks his journey. Amharic is the language of home and panic; formal English is the language of the classroom and his father's books; slang is the language of belonging among teenagers. Sissay lets the audience hear Alem adding to himself rather than replacing himself, which is central to any answer on identity. Even in fluent public English at the end, he still calls his father Father.",
    },
    {
      technique: 'Sound in the stage directions',
      example:
        "The Scene 5 flashback opens with the stage direction “Bang! Bang! Bang!”, both soldier scenes begin with loud stage directions, and a Pearson mark scheme notes that the same banging is used for the knocking at the Fitzgeralds' door.",
      effect:
        "The sound is both gunfire and knocking, so the audience cannot always tell which world it is in, which is exactly Alem's experience. Loud, sudden noise jolts the audience and makes his fear physical. On a page the directions are easy to skip; in the theatre they are some of the most powerful moments in the play.",
    },
    {
      technique: 'Echo and repetition across scenes',
      example:
        "Sweeney's “I'll cut you up” in Scene 4 is repeated by Alem in Scene 15; the Ethiopian soldier's “Leave Ethiopia or die!” in Scene 5 returns in Scene 12 as “Leave Eritrea or die!”.",
      effect:
        "Sissay builds meaning by repeating lines in new mouths. The soldiers' echo shows that both sides of the border hate the Kelos in the same words. Alem's echo of Sweeney is more disturbing, because it shows violence being passed on like a language. Spotting these echoes lets you write about the whole play rather than one moment, which is what this essay rewards.",
    },
    {
      technique: 'Dehumanising insults and animal imagery',
      example:
        "The Ethiopian soldier calls Alem a “mongrel”; the Eritrean soldier calls the family “Dirty dog traitors”; Sweeney tells Alem “you're all poison”.",
      effect:
        "Each insult turns a person into an animal or a substance, something that can be driven out without guilt. The pattern across three speakers in two continents shows that prejudice works the same way everywhere: it begins by making people less than human. It also explains Alem's insistence on his own name, the opposite of being called an animal or a label.",
    },
    {
      technique: 'The euphemistic language of officialdom',
      example:
        'The court calls the war a “border dispute” and a “skirmish”, and in Scene 18 the adjudicator rules that “the risk to the lives of the appellants is minimal”.',
      effect:
        "Euphemism makes horror sound manageable. “Skirmish” shrinks a war; “appellants” turns a father and son into a category of case; “minimal” makes a life-or-death judgement sound like a statistic. The audience, having watched the flashbacks, hears the gap between the language and the reality. It echoes Zephaniah's complaint that refugees were treated as statistics rather than as human stories.",
    },
    {
      technique: 'Rhetorical questions and inclusive pronouns',
      example:
        "At the rally Mustapha asks “Don't we all need somewhere we can call home?”, and Alem says “we must become that new generation of peacemakers”.",
      effect:
        'The speeches are addressed as much to the theatre audience as to the crowd on stage. The rhetorical question expects agreement, and “we” includes the listener, so the audience is drawn into the campaign. This is where the play is most openly persuasive. Whether that makes it powerful or preachy is a debate worth having in an essay, as long as you argue it.',
    },
    {
      technique: 'Motif: the stars',
      example:
        'In Scene 1 Mr Kelo tells Alem that in England the stars “take it in turns to shine”; the stars return in the flashbacks of Scenes 7 and 29.',
      effect:
        'The stars link father and son across distance and, in the end, death. They stand for guidance, the North Star by which travellers find their way, and for a fairness in which everyone gets a turn. Placing them at the beginning and end gives the play a circular shape, so the final image is both comforting and cruel: the boy under the stars no longer has the father who taught him to read them.',
    },
    {
      technique: 'Comedy and misunderstanding',
      example:
        'When Mustapha demands “Do you know who I am?”, Alem answers literally, “No, that is why I am asking you.”; Mustapha keeps complaining that he has been given only six chips.',
      effect:
        "The humour makes the children's home feel real and makes the audience like Alem and Mustapha before the violence begins. It also shows Alem's English: correct, literal and blind to slang, so the joke is also a sign of how much he has to learn. When the comedy later gives way to Mustapha's grief about his father, the contrast deepens both.",
    },
  ],

  structureForm: [
    {
      heading: 'Twenty-nine short scenes',
      body: "The play moves in 29 short scenes rather than long acts, jumping between the children's home, the Fitzgeralds' house, a courtroom, a street and a house in Africa. The effect is almost cinematic, and it suits a story about a boy passed from place to place with no control over where he goes next. The last run of scenes is the fastest: the BBC's revision guide notes that Scenes 21 to 29 are each very short, which quickens the pace towards the ending and gives the audience no time to settle. WJEC's drama guide adds that the play runs for about 80 minutes, usually without an interval, and that the first production used a cast of six, each playing several roles.",
    },
    {
      heading: 'A circular frame: the stars',
      body: "The play opens and closes under the stars, with Mr Kelo and Alem looking up together, and returns to the same image in Scene 7. These scenes are memories, set before the play's main action, so the play begins and ends in the past. At the start, the frame introduces the relationship at the heart of the play; at the end, after Scene 26, it becomes an act of mourning. A circular structure often suggests completion. Here it suggests something closer to loss: the play goes back to where it started because that moment can never be had again.",
    },
    {
      heading: 'Flashbacks triggered by trauma',
      body: "The two soldier scenes, 5 and 12, are flashbacks, and each is placed straight after a crisis in England: Sweeney's attack in Scene 4, and the letter about Alem's mother in Scene 11, when he hears banging at the door. Sissay structures the play around how trauma works, with the present calling up the past without warning. The two flashbacks mirror each other, one in Ethiopia and one in Eritrea, with the same break-in, the same beating and the same order to leave or die, so the structure itself makes the argument that the family is unsafe on both sides of the border.",
    },
    {
      heading: 'Doubling: the Fitzgeralds as the court',
      body: "Sissay's stage directions have the actors who play the Fitzgerald family also voice the social worker, the lawyer and the adjudicator in the court scenes. Doubling is partly practical in a small cast, but here it carries meaning. The same people who welcome Alem into their home deliver the state's decision that he must go, which suggests that the officials are ordinary people trapped in a cold system, and that Britain offers welcome and refusal with the same face. It also reminds the audience that they are watching a performance, and that the court's version of events is only one version.",
    },
    {
      heading: 'Letters, speeches and a radio report',
      body: "Much of the play's most important information arrives in forms that speak straight out: Mr Kelo's letters, which the Collins guide notes are spoken by both father and son in Scene 2; the rally speeches, addressed to the crowd and to the audience; and the radio news report in Scene 28. These forms mark the distance between people. Mr Kelo can only reach his son in writing, and Alem learns of his mother's death from a letter. By the end the play has moved from private conversation to public speech, from a boy who cannot make anyone understand him to a young man addressing a crowd.",
    },
    {
      heading: 'Cross-cutting and dramatic irony at the climax',
      body: "In the final scenes Sissay cuts between the rally and Mr Kelo's confrontation with Tewdros, so the audience watches hope and danger build at the same time. When Mr Kelo is stabbed in Scene 26, the audience knows, and Alem does not; his call for his father to join him on stage is dramatic irony at its most painful. The radio report then describes the killing without naming anyone. This structure refuses the audience the comfort of a resolution and makes them carry knowledge the characters do not yet have.",
    },
    {
      heading: 'An open ending',
      body: "The play does not tell us whether Alem is allowed to stay. The court has refused the claim, his father is dead, and the last scene returns to the past. This is a deliberate change from Zephaniah's novel, which ends with Alem granted asylum. By leaving the question open, Sissay makes it the audience's question, which fits the campaigning spirit of the rally speeches. In an essay, avoid saying what happens to Alem next; the strongest answers explain why the play refuses to say.",
    },
  ],

  vocabulary: [
    {
      term: 'Refugee',
      definition:
        'A person forced to leave their country to escape war, persecution or disaster. Sweeney uses the word as an insult; the play tries to give it back its human meaning.',
    },
    {
      term: 'Asylum',
      definition:
        'Protection given by a country to someone who has fled danger in their own. To seek asylum is to ask for that protection.',
    },
    {
      term: 'Asylum seeker',
      definition:
        'Someone who has asked for asylum and is waiting for a decision. Alem is one for most of the play, and his father becomes one when he reaches England and applies.',
    },
    {
      term: 'Refugee status',
      definition:
        'Legal recognition, under the 1951 Refugee Convention, that a person is a refugee and cannot be sent back to danger. Ruth explains to Alem that this is what he needs.',
    },
    {
      term: 'Persecution',
      definition:
        'Cruel treatment of people because of who they are, such as their origin, beliefs or politics. The Kelos are persecuted in both Ethiopia and Eritrea.',
    },
    {
      term: 'Deportation order',
      definition:
        "An official order to remove someone from a country. Alem's is postponed in Scene 9; after Scene 18 the threat of deportation drives the campaign.",
    },
    {
      term: 'Adjudicator',
      definition:
        'The official who decided immigration and asylum appeals in the UK. Adjudicators were renamed immigration judges in 2005, so the title belongs to the time the play is set, around 2000.',
    },
    {
      term: 'Appellant',
      definition:
        "A person making an appeal against a decision. The adjudicator's use of the word for Alem and his father turns a family into a legal category.",
    },
    {
      term: 'Foster care',
      definition:
        'Care of a child in a family home by trained carers, such as the Fitzgeralds, while the child cannot live with their own family.',
    },
    {
      term: "Children's home",
      definition:
        "A residential home run for children in care. Alem's first placement, where he meets Mustapha and Sweeney.",
    },
    {
      term: 'Amharic',
      definition:
        'A language widely spoken in Ethiopia. Alem speaks it when he is frightened or praying; he also speaks Tigrinya, a language spoken in Eritrea and northern Ethiopia.',
    },
    {
      term: 'Badme',
      definition:
        'The disputed border town where Alem was born and where the 1998 to 2000 war between Ethiopia and Eritrea began.',
    },
    {
      term: 'EAST',
      definition:
        "The organisation for peace and unity in Africa that Alem's parents work for. It connects the Kelos' politics to the violence that follows them.",
    },
    {
      term: 'Dual heritage',
      definition:
        'Having parents from two different countries or backgrounds. The soldiers attack Alem for his, calling him a mongrel.',
    },
    {
      term: 'Flashback',
      definition:
        'A scene set earlier than the main action. Scenes 1, 5, 7, 12 and 29 are flashbacks to Africa or to Alem with his father.',
    },
    {
      term: 'Doubling',
      definition:
        'One actor playing more than one role. In this play the actors of the Fitzgerald family also voice the court officials, which carries meaning of its own.',
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the audience knows something a character does not, as when Alem calls for his father after the audience has seen him killed.',
    },
    {
      term: 'Motif',
      definition:
        "A repeated image or idea that carries meaning through a text. The stars are the play's central motif.",
    },
    {
      term: 'Code-switching',
      definition:
        'Moving between languages or ways of speaking depending on who you are with. Alem moves between Amharic, formal English and slang.',
    },
    {
      term: 'Episodic structure',
      definition:
        'A structure built from many short, separate scenes rather than a few long ones. It suits a play about a boy moved from place to place.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          "Sweeney: “You don't want to be like us, Alem. Messed with. Messed up.” Explore the significance of Sweeney in Refugee Boy. You must refer to the context of the play in your answer.",
        skill: 'Whole-play essay on a character, with context',
        guidance: [
          'Place the quotation first: Scene 15, after Alem draws a knife on the boy trying to take his bike. Say why it is surprising that Sweeney, of all people, says it.',
          'Go back to Scenes 3 and 4: Sweeney renames Alem, insults refugees, threatens him with a knife and forces him to call himself Refugee Boy. Show what this reveals about his need for power.',
          'Explain his change in Scene 15: he stops the fight, warns Alem and reveals that his father beat him. Argue whether this makes him a bully to pity, a character who changes, or both.',
          "Connect him to Alem: Alem echoes Sweeney's threat in Scene 15, so Sweeney shows the audience who Alem could become. This is the heart of the play's argument that violence is learned.",
          "Bring in context that fits the point: children in care, Sissay's own years in children's homes, and Pearson's note that the play deals with knife crime.",
          "Conclude on Sissay's purpose: Sweeney is proof that prejudice and violence can be unlearned, and that the care system shapes children it is meant to protect.",
        ],
      },
      {
        question:
          'Mr Kelo: “this great country of Dickens and Shakespeare” Explore how Britain is presented in Refugee Boy. You must refer to the context of the play in your answer.',
        skill: 'Whole-play essay on an idea, with context',
        guidance: [
          "Start with Mr Kelo's idea of Britain: a country of great writers, where in Scene 1 even the stars take turns to shine. Explain why his faith matters.",
          "Set against it the Britain Alem meets: the frightened man who runs the hotel, a children's home where he is attacked, a street where he is mugged.",
          'Then the Britain that helps: the Fitzgeralds, Ruth and Mustapha, the school where Alem thrives. Argue that the play shows ordinary people at their best.',
          'Then the state: the court scenes, the language of risk and appellants, the refusal in Scene 18. Link to the 1951 Refugee Convention and the asylum process.',
          "Consider the ending: Mr Kelo is killed in London, and the play does not say whether Alem may stay. What is Sissay saying about the gap between Britain's people and its systems?",
        ],
      },
      {
        question:
          'Alem: “we must become that new generation of peacemakers” In what ways is hope important in Refugee Boy? You must refer to the context of the play in your answer.',
        skill: 'Whole-play essay on a theme, with context',
        guidance: [
          "Locate the quotation in Alem's rally speech (Scene 25), and note that it comes just before Mr Kelo is killed.",
          'Trace the stars motif from Scene 1 to Scene 29 as a symbol of hope, guidance and the bond between father and son.',
          "Show the young characters as the play's source of hope: Ruth's and Mustapha's changes, the campaign, the rally speeches.",
          "Weigh the evidence against hope: both parents killed, the court's refusal standing, the final return to a child asking his father if he can come.",
          "Use context: the Eritrean-Ethiopian war, Zephaniah's aim of showing the human story behind refugee statistics, and the play's campaigning spirit.",
          'Conclude with a judgement: the play offers hope as a task for the audience rather than as a happy ending.',
        ],
      },
      {
        question:
          'Mustapha: “Friends are like the family you make.” Explore how friendship is presented in Refugee Boy. You must refer to the context of the play in your answer.',
        skill: 'Whole-play essay on a relationship theme, with context',
        guidance: [
          "Begin with Mustapha's own family: his father was driven away, and his car-naming is a way of watching for him. His line comes from someone who needed friends to replace family.",
          'Show friendship failing first: Mustapha leaves with Sweeney in Scene 4, and Ruth tells Alem she hopes they send him back in Scene 8.',
          "Show it being rebuilt: Mustapha's apology in Scene 10, Ruth's promise in Scene 14, and Sweeney's protection in Scene 15.",
          'Show friendship becoming political: Ruth and Mustapha organise the campaign and speak at the rally.',
          "Link to context: children in care and foster families, and Sissay's own childhood without his birth family.",
        ],
      },
    ],
    tips: [
      "This question tests your argument about the whole play and your use of context. It does not ask you to analyse language closely. Pearson's own training for this play says your references do not have to be quotations, as long as you make it very clear which part of the play you mean, and its mark schemes reward relevant paraphrase. A precise reference to a scene is worth more than a half-remembered quotation.",
      'Write about the play, not the novel. The novel has different characters and ends with Alem granted asylum; the play leaves his future undecided. Mixing them up is an easy way to lose credit.',
      "Tie every piece of context to a point. The war, the asylum courts, the care system and Sissay's own childhood are all relevant, but only when they explain why something happens in the play or why Sissay shaped it that way.",
      "Treat the play as a play. The flashbacks, the sound of the banging, the doubling of the Fitzgeralds as the court and the cross-cut ending are Sissay's choices, and writing about their effect on an audience is what lifts an answer above retelling.",
      'Start from the stimulus quotation, then move across the whole play. Say who speaks it and when, then use it as a springboard rather than the whole answer.',
      "Pearson's papers from 2021 to 2025 have asked about Ruth, Alem, Mustapha, the Fitzgeralds, the relationship between Ruth and Alem, anger, aggression, courage, suffering and how people help others. Be ready for any character or theme, not just Alem.",
      'Spelling, punctuation and grammar are assessed in this answer. Learn to spell the names and the key terms: Alem, Mustapha, Sweeney, Fitzgerald, Eritrea, Ethiopia, Badme, asylum, adjudicator.',
      "Write about Sissay's purposes, not only the characters' feelings. Pearson's own training for this play points out that naming the playwright's choices and the audience's response is how a critical style shows: it proves you understand the characters as creations with a job to do, not as real people.",
    ],
  },

  modelAnswer: {
    question:
      'Sweeney: “Messed with. Messed up.” Explore how violence is presented in Refugee Boy. You must refer to the context of the play in your answer.',
    paragraph:
      "Sissay presents violence not as something Alem escapes by coming to Britain but as something that follows him and, more disturbingly, begins to shape him. In Scene 4 Sweeney attacks him and threatens him with a knife, and the play cuts straight to the flashback of soldiers breaking into the Kelos' home in Ethiopia, as if one attack calls up the other; the audience sees that a boy from a London children's home and the soldiers of a war zone can share the same language of threat. The most unsettling moment comes in Scene 15, when Alem, grieving for his murdered mother, draws the Fitzgeralds' cheese knife on the boy trying to take his bike and repeats Sweeney's own words, “I'll cut you up”. The gentle, studious boy of the early scenes has learned violence the way he learned slang, by copying. It is therefore significant that the person who stops him is Sweeney, whose warning, “Messed with. Messed up.”, compresses a whole life into two phrases: first he was damaged, then he damaged others. Sissay, who spent his own teenage years in children's homes, suggests that violence is taught to children before it is chosen by them. Mr Kelo's stabbing in London at the end of the play confirms the point: no border keeps violence out.",
    commentary: [
      'It opens with a clear argument that answers the question directly, and every later sentence develops that argument rather than retelling the plot.',
      'It uses the structure of the play, the cut from Scene 4 to Scene 5, as evidence, which shows an understanding of the text as drama.',
      'The two quotations are short, accurate and placed exactly, and each is followed by interpretation of what it shows about violence being passed on.',
      'The context about Sissay is tied to a specific point about Sweeney and Alem rather than added as a separate fact, which is what the question asks for.',
      "It ends by moving outwards to the whole play, linking Scene 15 to Mr Kelo's death, so the paragraph shows a view of the play as a whole.",
    ],
  },

  timeline: [
    {
      where: 'Scene 1',
      title: 'The North Star',
      summary:
        "In a memory from before the play's main action, Mr Kelo shows Alem the North Star and tells him that in England the stars take turns to shine.",
      setting: 'Under the night sky, in a memory',
      who: ['Mr Kelo', 'Alem'],
      quote: 'In England the stars have to sleep. They take it in turns to shine.',
      themes: ['Family and friendship', 'Youth and hope'],
      tension: 1,
      significance:
        'It establishes the bond at the heart of the play and the stars motif that returns at the very end.',
    },
    {
      where: 'Scene 2',
      title: 'Alone in the hotel',
      summary:
        "Alem wakes in Mr Hardwick's hotel to find his father gone and the door locked, and panics in Amharic. Mr Hardwick tries to calm him and leaves him a letter from his father explaining that he is to stay in England until the fighting stops.",
      setting: "Mr Hardwick's hotel in England",
      who: ['Alem', 'Mr Hardwick', 'Mr Kelo'],
      quote: "I'm not going to hurt you. I'm not going to hurt you.",
      themes: ['Violence and fear', 'Home and belonging'],
      tension: 4,
      significance: "Alem's life as a refugee begins in fear and misunderstanding on both sides.",
    },
    {
      where: 'Scene 3',
      title: "The children's home",
      summary:
        "In a children's home Alem meets Mustapha, who talks nonstop and cares more about chips than names, and Sweeney, who calls Alem Ali but threatens anyone who shortens his own name.",
      setting: "A children's home",
      who: ['Alem', 'Mustapha', 'Sweeney'],
      themes: ['Identity and names', 'Family and friendship'],
      tension: 2,
      significance: 'Comedy introduces the care system, and the struggle over names begins.',
    },
    {
      where: 'Scene 4',
      title: 'Sweeney names him Refugee Boy',
      summary:
        "At a bus stop Sweeney takes Alem's defence of his parents as an insult, attacks him, rants against refugees and forces him at knifepoint to call himself Refugee Boy. Mustapha leaves with Sweeney.",
      setting: 'A bus stop',
      who: ['Alem', 'Mustapha', 'Sweeney'],
      quote: "you're all poison",
      themes: ['Prejudice', 'Violence and fear', 'Identity and names'],
      tension: 4,
      significance:
        'The play takes its title from this moment, and violence in Britain triggers memories of violence in Africa.',
    },
    {
      where: 'Scene 5',
      title: 'Soldiers in Ethiopia',
      summary:
        "A flashback: soldiers break into the Kelos' home in Ethiopia, strike Mrs Kelo because she is Eritrean, abuse Alem for his mixed heritage and order the family to leave the country.",
      setting: "The Kelos' home in Ethiopia",
      who: ['Alem', 'Mr Kelo', 'Mrs Kelo', 'The soldiers'],
      quote: 'Blood sprays from her mouth in an arch and lands like fine dust',
      themes: ['Violence and fear', 'Prejudice', 'Home and belonging'],
      tension: 5,
      significance:
        "It shows why Alem was brought to England, and after it he runs away from the children's home.",
    },
    {
      where: 'Scene 6',
      title: 'Dinner with the Fitzgeralds',
      summary:
        'Now fostered by the Fitzgeralds, Alem has settled into school well. Ruth compares him with Themba, a boy who lived with them before, and Mrs Fitzgerald notices that the cheese knife is missing.',
      setting: "The Fitzgeralds' dinner table",
      who: ['Alem', 'Mr Fitzgerald', 'Mrs Fitzgerald', 'Ruth'],
      quote: "You'll be right at home here, boy.",
      themes: ['Family and friendship', 'Home and belonging'],
      tension: 2,
      significance:
        'A new, imperfect family begins, and the missing knife is a warning planted for Scene 15.',
    },
    {
      where: 'Scene 7',
      title: 'Stars and English lessons',
      summary:
        'A second memory of Alem and his father under the stars, in which Mr Kelo encourages his son to speak English and prepares him for life in Britain.',
      setting: 'Under the night sky, in a memory',
      who: ['Mr Kelo', 'Alem'],
      themes: ['Family and friendship', 'Identity and names'],
      tension: 1,
      significance:
        'It shows that Mr Kelo was preparing Alem for England long before he left him there.',
    },
    {
      where: 'Scene 8',
      title: "Ruth's outburst",
      summary:
        "At the Fitzgeralds' house it emerges that Ruth calls out for Themba in her sleep. When Alem says he hears her crying at night, she turns on him and says she hopes he is sent back.",
      setting: "The Fitzgeralds' house",
      who: ['Ruth', 'Alem', 'Themba'],
      quote: 'Shut up, I hate you. I hope they send you back.',
      themes: ['Family and friendship', 'Home and belonging'],
      tension: 3,
      significance:
        "Ruth's grief is turned outwards, the low point from which their relationship will be rebuilt.",
    },
    {
      where: 'Scene 9',
      title: 'The first hearing',
      summary:
        'In court, the adjudicator says Alem faces no personal threat, but the deportation order is postponed. Alem tells the court that it is Christmas in Ethiopia and Eritrea that day and wishes them well.',
      setting: 'An asylum court',
      who: ['Alem', 'The court officials'],
      themes: ['Justice and the asylum system', 'Identity and names'],
      tension: 3,
      significance: "The system's cold language meets Alem's warmth, and his case is left hanging.",
    },
    {
      where: 'Scene 11',
      title: 'The letter about his mother',
      summary:
        'A letter from Mr Kelo tells Alem that his mother has been killed and that his father will try to come to Britain. The news brings the sound of banging at the door.',
      setting: 'England, where the letter reaches Alem',
      who: ['Alem', 'Mr Kelo', 'Mrs Kelo'],
      themes: ['Family and friendship', 'Violence and fear'],
      tension: 5,
      significance: "The turning point of Alem's story: grief will change how he behaves.",
    },
    {
      where: 'Scene 12',
      title: 'Soldiers in Eritrea',
      summary:
        'A second flashback mirrors the first: now in Eritrea, soldiers attack the family because Mr Kelo is Ethiopian, accuse him of links to Mengistu, threaten him with a gun and order them out.',
      setting: "The Kelos' home in Eritrea",
      who: ['Alem', 'Mr Kelo', 'Mrs Kelo', 'The soldiers'],
      quote: 'Dirty dog traitors. Leave Eritrea or die!',
      themes: ['Violence and fear', 'Prejudice', 'Home and belonging'],
      tension: 5,
      significance: 'The mirror shows that the family is unsafe on both sides of the border.',
    },
    {
      where: 'Scene 13',
      title: 'Ruth and her mother',
      summary:
        'Ruth insists that she and her mother must talk about Themba. Mrs Fitzgerald cannot bear to and loses her temper, and the argument exposes the grief the family has buried.',
      setting: "The Fitzgeralds' house",
      who: ['Ruth', 'Mrs Fitzgerald', 'Themba'],
      quote: "I can't think about him every day. Every God-forsaken day.",
      themes: ['Family and friendship'],
      tension: 3,
      significance:
        "Suffering in the play is not only the refugee's: the carers carry their own losses.",
    },
    {
      where: 'Scene 14',
      title: 'Snow and a sister',
      summary:
        'Ruth tells Alem about Themba, whom she fell for and who took his own life, and promises Alem he can trust her like a sister. It snows for the first time in his life, and he weeps for his mother.',
      setting: 'England, in the first snow Alem has ever seen',
      who: ['Ruth', 'Alem', 'Themba'],
      quote: "Whatever happens, whatever, you can trust me. Like I'm your sister, right?",
      themes: ['Family and friendship', 'Youth and hope'],
      tension: 3,
      significance: 'Two grieving teenagers help each other, and a chosen family begins.',
    },
    {
      where: 'Scene 15',
      title: 'The bike and the knife',
      summary:
        "Mustapha admits his father was driven away. Then a hooded youth tries to take Alem's bike, and Alem draws the cheese knife and repeats Sweeney's threat. Sweeney arrives, stops the fight and warns him.",
      setting: 'A street',
      who: ['Alem', 'Mustapha', 'Hooded', 'Sweeney'],
      quote: "You don't want to be like us, Alem. Messed with. Messed up.",
      themes: ['Violence and fear', 'Identity and names', 'Family and friendship'],
      tension: 5,
      significance:
        'Violence is shown being learned and then refused, and the bully becomes a protector.',
    },
    {
      where: 'Scene 17',
      title: 'Mr Kelo returns',
      summary:
        "Mr Kelo arrives at the Fitzgeralds' after searching for his son through social services. He thanks them, learns that Alem cannot leave with him until a court allows it, and explains that he has applied for asylum for them both.",
      setting: "The Fitzgeralds' house",
      who: ['Mr Kelo', 'Alem', 'Mr Fitzgerald', 'Mrs Fitzgerald'],
      quote: 'this great country of Dickens and Shakespeare',
      themes: ['Family and friendship', 'Justice and the asylum system'],
      tension: 2,
      significance:
        "Father and son are reunited, and Mr Kelo's faith in Britain is set up to be tested.",
    },
    {
      where: 'Scene 18',
      title: 'Asylum refused',
      summary:
        'Alem and his father appear in court together. Although the lawyer describes a massive escalation of the fighting, the adjudicator rules that the risk to their lives is minimal and they should return home.',
      setting: 'An asylum court',
      who: ['Alem', 'Mr Kelo', 'The court officials'],
      themes: ['Justice and the asylum system', 'Home and belonging'],
      tension: 4,
      significance: 'The system refuses them, and the play turns from waiting to protest.',
    },
    {
      where: 'Scenes 19 and 20',
      title: 'Campaign and quarrel',
      summary:
        'Ruth and Mustapha organise a campaign and rally against the deportation. Mr Kelo, who has arranged to see the Refugee Council and appeal, fears drawing attention; Alem invokes his mother and insists on protest.',
      setting: "The campaign's preparations, then a quarrel between father and son",
      who: ['Ruth', 'Mustapha', 'Alem', 'Mr Kelo'],
      quote: 'We are here because Mother was a fighter and would not stay quiet',
      themes: ['Youth and hope', 'Justice and the asylum system', 'Family and friendship'],
      tension: 3,
      significance:
        'The son now leads the father, and the young characters take the story into public.',
    },
    {
      where: 'Scenes 21 to 25',
      title: 'The rally',
      summary:
        'Mustapha, Ruth and Alem speak at the rally in turn. Between their speeches the play cuts away to Mr Kelo, who is confronted by Tewdros, a man from EAST, who suggests that Alem is in danger.',
      setting: 'The rally, and a place away from it',
      who: ['Mustapha', 'Ruth', 'Alem', 'Mr Kelo', 'Tewdros'],
      quote: 'we must become that new generation of peacemakers',
      themes: ['Youth and hope', 'Home and belonging', 'Prejudice'],
      tension: 4,
      significance: 'Public hope and private danger build side by side towards the climax.',
    },
    {
      where: 'Scenes 26 to 28',
      title: 'Father, are you here?',
      summary:
        'Mr Kelo is stabbed. Alem, not knowing, speaks at the West Indian Centre and calls for his father to join him. A radio report says the police think the killing may have been politically motivated.',
      setting: 'An unnamed place, the West Indian Centre, and a radio news bulletin',
      who: ['Mr Kelo', 'Alem'],
      quote: 'Father, are you here?',
      themes: ['Violence and fear', 'Family and friendship', 'Justice and the asylum system'],
      tension: 5,
      significance:
        "The play's climax, built on dramatic irony: violence has followed the family to London.",
    },
    {
      where: 'Scene 29',
      title: 'Back to the stars',
      summary:
        'The play ends where it began, with a younger Alem and his father under the stars, the boy asking to go with him, and the question of whether Alem may stay in Britain left unanswered.',
      setting: 'Under the night sky',
      who: ['Alem', 'Mr Kelo'],
      quote: 'Can I come?',
      themes: ['Youth and hope', 'Family and friendship'],
      tension: 2,
      significance:
        "The circular ending turns a memory into mourning and leaves Alem's future to the audience.",
    },
  ],

  relationships: [
    {
      from: 'Alem',
      to: 'Mr Kelo',
      kind: 'son and father',
      note: 'A formal, devoted bond kept alive through the stars and letters. After Scene 18 it reverses, as the son leads the protest the father fears, and it ends in dramatic irony and mourning.',
    },
    {
      from: 'Alem',
      to: 'Mrs Kelo',
      kind: 'son and mother',
      note: 'Seen only in the flashbacks, she becomes after her death the voice Alem invokes to justify speaking out.',
    },
    {
      from: 'Mr Kelo',
      to: 'Mrs Kelo',
      kind: 'husband and wife, across the border',
      note: 'An Ethiopian and an Eritrean, partners in marriage and in their work for peace; their marriage is exactly what the soldiers on both sides cannot accept.',
    },
    {
      from: 'Alem',
      to: 'Mustapha',
      kind: 'friends',
      note: "A friendship begun on Alem's first day in the home, betrayed in Scene 4 when Mustapha sides with Sweeney, repaired by his apology, and sealed in the campaign he co-leads.",
    },
    {
      from: 'Sweeney',
      to: 'Alem',
      kind: 'bully and victim, then protector',
      note: "Sweeney renames, attacks and labels Alem, then in Scene 15 stops him becoming what Sweeney is. Each is the other's mirror: two boys damaged by violence.",
    },
    {
      from: 'Sweeney',
      to: 'Mustapha',
      kind: 'fellow residents of the home',
      note: "Sweeney takes Mustapha's chips and uses him as an audience, and Mustapha is too frightened to resist, which is why he deserts Alem in Scene 4.",
    },
    {
      from: 'Ruth',
      to: 'Alem',
      kind: 'foster sister and brother',
      note: 'Resentment and grief turn into trust in Scene 14, when she promises he can trust her like a sister; together they lead the campaign.',
    },
    {
      from: 'Ruth',
      to: 'Mrs Fitzgerald',
      kind: 'daughter and mother',
      note: 'Ruth wants to talk about Themba and to be consulted; her mother cannot bear to talk, and their quarrel in Scene 13 shows a family keeping its grief quiet.',
    },
    {
      from: 'Mr Fitzgerald',
      to: 'Mrs Fitzgerald',
      kind: 'husband and wife, foster carers',
      note: 'Affectionate and teasing, but he worries about her being hurt again by a child they cannot keep, and about money.',
    },
    {
      from: 'Mrs Fitzgerald',
      to: 'Alem',
      kind: 'foster mother and foster son',
      note: "She wants him to stay with them rather than return to the children's home and tells him he is part of the family, a welcome the court then withholds.",
    },
    {
      from: 'Ruth',
      to: 'Themba',
      kind: 'first love, lost',
      note: 'Ruth fell for Themba, an earlier foster child who took his own life; her grief shapes her hostility to Alem and, later, her understanding of him.',
    },
    {
      from: 'Mustapha',
      to: 'Ruth',
      kind: 'fellow campaigners',
      note: 'Brought together by their friendship with Alem, they organise the campaign and speak at the rally, the young generation taking charge.',
    },
    {
      from: 'Tewdros',
      to: 'Mr Kelo',
      kind: 'figures from the same political past',
      note: 'Connected through EAST, Tewdros confronts Mr Kelo during the rally scenes and implies that Alem is in danger, bringing the politics of Africa into London.',
    },
  ],

  compareWith: [
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        'Another Edexcel modern play in which a comfortable society is made to answer for how it treats a vulnerable outsider, and which ends by handing the question to the audience.',
    },
    {
      title: 'Anita and Me',
      href: '/revision/texts/anita-and-me',
      reason:
        'Also on the Edexcel modern list: a child of migrants growing up in Britain, facing racism, and working out an identity between two cultures.',
    },
    {
      title: 'Blood Brothers',
      href: '/revision/texts/blood-brothers',
      reason:
        'Another Edexcel modern play in which children are shaped by the families and systems around them, and in which violence, once learned, ends in a death on stage.',
    },
    {
      title: 'No Problem, Benjamin Zephaniah',
      href: '/revision/poetry/edexcel/conflict',
      reason:
        "Zephaniah's own poem in the Edexcel Conflict cluster is spoken by someone treated as the problem because of race and stereotype, the prejudice Sweeney and the soldiers voice in the play.",
    },
  ],

  contentGuidance: ['violence', 'crime_injustice', 'mortality', 'mental_health', 'discrimination'],

  quotesFromElsewhere: [
    "behind all those statistics there's a human story",
    'This is my story',
    'tells us about ourselves',
    'Immigration is as natural to us as breathing',
  ],

  sources: [
    {
      label:
        "Pearson Edexcel GCSE English Literature 1ET0/01, question paper, June 2021: Question 17 (Ruth, “When you brought Alem into the house...”) and Question 18 (Sweeney, “You don't want to be like us, Alem. Messed with. Messed up.”)",
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/Edexcel/Paper-1/June%202021%20QP%20-%20Paper%201%20Edexcel%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'Pearson 1ET0/01 question paper, June 2022: Question 17 (Soldier, “TRAITORS. Dirty dog traitors. Leave Eritrea or die!”) and Question 18 (Alem, “My name is Alem Kelo. My age is fourteen.”, going on to name Badme as his birthplace). The acknowledgements page credits the novel, Bloomsbury, 2001.',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/Edexcel/Paper-1/June%202022%20QP%20-%20Paper%201%20Edexcel%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        "Pearson 1ET0/01 question paper, June 2023: Question 17 (Mrs Fitzgerald, “you want to stay here with us, don't you? Not at the children's home”) and Question 18 (Alem reading a letter from his father, “now I need you to be strong more than ever”)",
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/Edexcel/Paper-1/June%202023%20QP%20-%20Paper%201%20Edexcel%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'Pearson 1ET0/01 question paper, June 2024: Question 17 (Mr Kelo, “Blood sprays from her mouth in an arch and lands like fine dust ...”) and Question 18 (Mustapha, on fathers)',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/Edexcel/Paper-1/June%202024%20QP%20-%20Paper%201%20Edexcel%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        "Pearson 1ET0/01 question paper, June 2025: Question 17 (Ruth, “Whatever happens, whatever, you can trust me. Like I'm your sister, right?”) and Question 18 (Mrs Fitzgerald to Ruth about Themba, after saying she cannot talk about it, “I can't think about him every day. Every God-forsaken day.”)",
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/Edexcel/Paper-1/June%202025%20QP%20-%20Paper%201%20Edexcel%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        "Pearson 1ET0/01 mark schemes, June 2021 to June 2025, indicative content for Questions 17 and 18: father Ethiopian and mother Eritrean (2021, 2022); “I'll cut you up. Refugee Boy” (2022, 2025); “you're all poison” (2023, 2024); “Used to try and rearrange” (2024, 2025); “driving his way back”, “was driven away”, “Six chips”, “Gimme your chips, Musty” (2024); “killed by some very evil people”, “punish you for things you haven't done”, “Our human rights” (2023); “You'll be right at home here”, “I love you, Mrs Fitzgerald”, Mr Fitzgerald's couple of months (2023); “It's always later, isn't it?” (2022, 2025); Mengistu and the Scene 12 gun (2024); “politically motivated” (2022, 2025); the Man's killing read as hostility to asylum seekers (2022)",
      url: 'https://www.physicsandmathstutor.com/past-papers/gcse-english-literature/edexcel-paper-1/',
    },
    {
      label:
        "Pearson, Refugee Boy exemplar scripts and commentaries (Issue 1, March 2021), which prints the question from the sample assessment materials on Mr Hardwick's line, “I'm not going to hurt you. I'm not going to hurt you.”, after he tries to hush Alem. The candidates' own quotations in it were not used.",
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/Refugee-Boy-Exemplar-Responses.pdf',
    },
    {
      label:
        "Pearson, Refugee Boy knowledge organiser (Scene 8 and Scene 14 contents, Mustapha's “Never really known who I was” and “Friends are like the family you make”, Ruth's “Shut up, I hate you”, the Fitzgeralds' first names). Contains plot errors, so used only where another source agrees.",
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/Refugee%20Boy%20KOs.zip',
    },
    {
      label:
        "Pearson, Refugee Boy drama activities (places Sweeney's “You don't want to be like us, Alem. Messed with. Messed up.” in Scene 15, and the West Indian Centre speech at “Sc.26, p.56”)",
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/Refugee%20Boy%20Drama%20Activities.pdf',
    },
    {
      label:
        "Pearson trainer's script, Refugee Boy: preparing for exam questions (1ET0-20PSG06): Mrs Fitzgerald's “You are part of our family”; Mustapha's “Do you know who I am?”; the advice that references need not be quotations because language analysis is not asked for",
      url: 'https://qualifications.pearson.com/content/dam/pdf/Support/Training/1ET0-20PSG06-downloadable-materials.zip',
    },
    {
      label:
        'Pearson, Diversity resources for GCSE English Literature (B0436, version 1.1, May 2021): lists the play as “Refugee Boy by Benjamin Zephaniah and adapted for the stage by Lemn Sissay (2013) 66pp”, used only for the page count in workLength. Its one-line summary sets the story in a B&B in Berkshire, which Collins and BBC Bitesize contradict (a London hotel), so the guide names no place.',
      url: 'https://qualifications.pearson.com/content/dam/pdf/GCSE/English%20Literature/2015/teaching-and-learning-materials/A2347_Diversity_Support_pages.pdf',
    },
    {
      label:
        'Pearson, GCSE English Literature new diverse texts page and Refugee Boy support materials',
      url: 'https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015/teaching-support/new-diverse-texts.html',
    },
    {
      label:
        'BBC Bitesize, Plot overview in Refugee Boy (Edexcel): scene-by-scene summary of all 29 scenes, the flashback table, and the rally lines',
      url: 'https://www.bbc.co.uk/bitesize/articles/zm4jtcw',
    },
    {
      label:
        "BBC Bitesize, Characters in Refugee Boy (Edexcel): “I am African”, “killed by some very evil people”, Mustapha's lines on fear and home, Sweeney's and Alem's parallel threats, the doubling of the court officials",
      url: 'https://www.bbc.co.uk/bitesize/articles/zcnb8p3',
    },
    {
      label:
        "BBC Bitesize, Themes in Refugee Boy (Edexcel): “Where is my father?”, “Friends are like the family you make”, the stars, the insults “poison”, “mongrel” and “Dirty dog traitors”, “You'll be right at home here, boy.”; the last scene returning to “a younger, more vulnerable version of Alem”. The same page calls two different lines Alem's final lines, so the guide does not say which is last.",
      url: 'https://www.bbc.co.uk/bitesize/articles/zhwxfdm',
    },
    {
      label:
        "BBC Bitesize, Context in Refugee Boy (Edexcel): “Bang! Bang! Bang!”, “Leave Ethiopia or die!”, the court's “skirmish”, Sissay's preface, “this great country of Dickens and Shakespeare”, “The judge doesn't know anything about Ethiopia or Eritrea”",
      url: 'https://www.bbc.co.uk/bitesize/articles/zjrdxg8',
    },
    {
      label:
        "BBC Bitesize, Exam-style questions for Refugee Boy (Edexcel): the closed-book format, and Ruth's “Shut up. Shut up, I hate you. I hope they send you back.” The guide quotes only the part that Pearson's knowledge organiser and 2025 mark scheme also print, “Shut up, I hate you. I hope they send you back.”, because the sources differ on the opening.",
      url: 'https://www.bbc.co.uk/bitesize/articles/zvty46f',
    },
    {
      label:
        "Pearson 1ET0/01 mark scheme, June 2021, Question 17 on Ruth: Alem mocks her for crying and calling out for Themba, and she tells him to shut up and hopes he will be sent back; her mother's “I can't. I can't, okay?” when Ruth wants to talk about Themba. Used to place Ruth's outburst after the sleep-talking that Pearson's knowledge organiser puts in Scene 8.",
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Mark-Schemes/Edexcel/Paper-1/June%202021%20MS%20-%20Paper%201%20Edexcel%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        "WJEC, GCSE Drama: Refugee Boy (teaching resource, 2021-22): first performance at the West Yorkshire Playhouse on 9 March 2013; the suitcase set; the play runs for about 80 minutes, usually without an interval; an original cast of six playing several roles; the episodic structure; Alem's speech in Scene 27; the letter read in Scene 11; Sissay's “This is my story, Benjamin”",
      url: 'https://resource.download.wjec.co.uk/vtc/2021-22/wjec21-22_1-2/batch-b-pdf/refugee-boy.pdf',
    },
    {
      label:
        "Collins SNAP Revision, Refugee Boy Edexcel GCSE 9-1 Text Guide (ISBN 9780008520311), publisher's sample pages: contents (29 scenes), Scenes 1-4, Alem, and the Grade 7+ annotated response on Sweeney. Source of the Scene 1 stars line, Alem's Scene 3, 4, 15 and 20 lines, and the play-versus-novel differences; calls Mr Hardwick the hotel manager, sets Scene 4 at a bus stop, and has Mustapha try to intervene before he sides with Sweeney and leaves with him.",
      url: 'https://collins.co.uk/products/9780008520311',
    },
    {
      label:
        'WJEC, GCSE English Language and Literature, Unit 4a, Plays: Refugee Boy (one-page summary): 29 scenes, a bus stop among the settings, and the spelling Tewodros for the man BBC Bitesize calls Tewdros',
      url: 'https://resource.download.wjec.co.uk/vtc/2023-24/mfw/mfw23-24_2-8/pdf/unit-4a-plays-refugee-boy-benjamin-zephaniah-lemn-sissay.pdf',
    },
    {
      label:
        "National Theatre Black Plays Archive, Refugee Boy (West Yorkshire Playhouse, 2013): cast of six; its synopsis opens in a B&B in Datchet, a third account of where Mr Hardwick works, so the guide names no place and says only that he runs the hotel. Its opening night of 19 March is contradicted by The Independent's review of 18 March, so the 9 March date is kept.",
      url: 'https://www.blackplaysarchive.org.uk/productions/refugee-boy/',
    },
    {
      label:
        "Ian Youngs, Benjamin Zephaniah's Refugee Boy steps on stage, BBC News, 14 March 2013: Sissay's parental roots, “This is my story”, the Sri Lankan refugee, “behind all those statistics”, the OBE in 2003, Fisayo Akinade, the run to 30 March",
      url: 'https://www.bbc.co.uk/news/entertainment-arts-21753181',
    },
    {
      label:
        'Jonathan Brown, review of Refugee Boy, West Yorkshire Playhouse, The Independent, 18 March 2013: the suitcase set, the holiday, Fisayo Akinade',
      url: 'https://www.independent.co.uk/arts-entertainment/theatre-dance/reviews/refugee-boy-west-yorkshire-playhouse-leeds-8538956.html',
    },
    {
      label:
        "Open Library edition record for Benjamin Zephaniah's Refugee Boy, adapted for the stage by Lemn Sissay (Methuen Drama, London, 2013, 57 pages)",
      url: 'https://openlibrary.org/books/OL44531704M',
    },
    {
      label:
        'Wikipedia, Refugee Boy (the novel: Bloomsbury, 28 August 2001; 2002 Portsmouth Book Award; the play first performed at the West Yorkshire Playhouse on 9 March 2013; the novel ends with Alem granted asylum)',
      url: 'https://en.wikipedia.org/wiki/Refugee_Boy',
    },
    {
      label:
        'Wikipedia, Benjamin Zephaniah (born 15 April 1958, Handsworth; dyslexia and school at 13; approved school, borstal and prison; OBE declined 2003; died 7 December 2023)',
      url: 'https://en.wikipedia.org/wiki/Benjamin_Zephaniah',
    },
    {
      label:
        "Wikipedia, Lemn Sissay (born 1967, Wigan; foster care and children's homes; Wigan Council apology 2018; London 2012 Olympics poet; University of Manchester chancellor 2015-2022; My Name Is Why, 2019)",
      url: 'https://en.wikipedia.org/wiki/Lemn_Sissay',
    },
    {
      label:
        'Wikipedia, Eritrean-Ethiopian War (6 May 1998 to 18 June 2000; Eritrean independence 1993; Badme; Algiers Agreement 2000; border dispute to 2018)',
      url: 'https://en.wikipedia.org/wiki/Eritrean%E2%80%93Ethiopian_War',
    },
    {
      label:
        'Human Rights Watch, The Horn of Africa War: Mass Expulsions and the Nationality Issue (2003): an estimated 75,000 people of Eritrean origin forcibly expelled by Ethiopia during the war; an estimated 70,000 Ethiopians expelled by Eritrea or repatriated with its involvement; families separated on grounds of origin',
      url: 'https://www.hrw.org/report/2003/01/29/horn-africa-war/mass-expulsions-and-nationality-issue',
    },
    {
      label:
        'Wikipedia, Immigration Appellate Authority (immigration adjudicators, replaced in 2005 when they became immigration judges)',
      url: 'https://en.wikipedia.org/wiki/Immigration_Appellate_Authority',
    },
  ],
}
