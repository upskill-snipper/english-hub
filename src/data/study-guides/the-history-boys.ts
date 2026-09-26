import type { StudyGuide } from '@/lib/study-guides/types'

/**
 * The History Boys, Alan Bennett (first performed at the National Theatre on
 * 18 May 2004; published by Faber and Faber the same year). A complete guide:
 * the text had no guide anywhere on the site, so every section is written here.
 *
 * HOW THE QUOTATIONS WERE CHECKED. The play is in copyright and no licensed
 * copy is held in src/data/full-texts, so nothing here could be copied from an
 * edition in the repository. Instead, almost every quotation comes from a
 * passage the exam board itself has printed from the play: the eight extracts
 * on the Eduqas Component 2 papers of June 2017, June 2018, June 2019, October
 * 2020, June 2023, June 2024 and June 2025 and on the specimen paper of 2015.
 * Those papers were read as PDFs, and each speaker was checked by reading the
 * position of the speaker's name against the line on the page, because the
 * plain-text conversion shifts names by a line (it made Posner, not Hector,
 * appear to say "Uncoffined is a typical Hardy usage" in the 2024 extract).
 *
 * Only two quotations come from outside those extracts, and each has two
 * sources that agree word for word:
 * - "The best moments in reading..." is also printed by Faber's own study
 *   guide, which gives page 56 of the Faber edition, as does GradeSaver.
 * - "History is women following behind with the bucket" (Mrs Lintott, Act 2)
 *   is quoted in the same words by GradeSaver, citing the Faber edition, and by
 *   StageAgent, citing the Farrar, Straus and Giroux edition. Film quotation
 *   sites give "with a bucket"; the play text is followed here.
 *
 * DROPPED, because the exact words or the speaker could not be confirmed:
 * - Hector's "Pass the parcel" speech. Every source found was a film
 *   transcript or a quotation site, and the film changes the play.
 * - Irwin's line comparing truth in an examination to thirst at a
 *   wine-tasting: sources disagree on the word order and on "exam" or
 *   "examination".
 * - The line about confusing learning with "the smell of cold stone" (Faber
 *   study guide, p.9): wording confirmed, speaker not.
 * - The line that a teacher is human (Faber study guide, p.42): wording
 *   confirmed, speaker only by revision flashcards.
 * - GradeSaver's quotations of the Headmaster ("unpredictable and
 *   unquantifiable"), Irwin ("an old-fashioned faith in the redemptive power
 *   of words") and Dakin: single source, and GradeSaver was found to misquote
 *   the Deuteronomy line in Hector's first lesson ("before your" for "before
 *   you"), so it is not trusted alone.
 * - Rudge's and Posner's best-known one-liners, which rely on swearing:
 *   Eduqas examiners reported in 2024 that weaker answers quoted the swear
 *   words.
 *
 * SETTING. The film places the school in Sheffield; the play, in the passages
 * checked, only has Hector call Sheffield his own. So the guide says "the
 * north of England". Sources disagree on how many years later the framing
 * scenes are set (Faber: about fifteen for the opening and five for Act 2;
 * British Theatre Guide: twenty), so the guide says "years later".
 *
 * NO PAGE NUMBERS except p.56, where two sources agree: the Eduqas paper is
 * closed book, editions differ, and passages are located by act and moment.
 *
 * FACT-CHECK PASS (September 2026). Every quotation was re-read against fresh
 * copies of the eight Eduqas papers, with speakers taken from word positions,
 * and the plot against GradeSaver, LitCharts and Faber's study guide. These were
 * wrong and have been corrected:
 * - The overview had Dakin proposition Irwin before the results; in the play
 *   the results come first (Act 2), then the confrontation, then the reprieve.
 * - Fiona was listed as present in the reinstatement scene. She never appears.
 * - Irwin's lie: Dakin cannot find his name at the college he claimed, and
 *   Irwin then admits a Bristol degree and an Oxbridge teaching diploma.
 * - The Headmaster brings Hector's retirement forward before Hector answers
 *   with Housman, not after.
 * - Rudge's homes are called affordable by Rudge himself, not by Mrs Lintott.
 * - The boys' lines in the specimen extract all include "sir"; most do not end
 *   with it.
 * - The model answer said the audience "sees" the crash; it is reported.
 * - Dakin does not "enjoy" Posner's love in the play (that is the film); he
 *   calls it a phase.
 * - Near-quotations printed without quotation marks (Hector's "believe also in
 *   me", Dakin's line about making things happen) are now true paraphrases.
 */
export const guide: StudyGuide = {
  slug: 'the-history-boys',
  title: 'The History Boys',
  author: 'Alan Bennett',
  form: 'play',
  scope:
    'The whole play, in two acts (first staged in 2004 and published by Faber and Faber the same year). For Eduqas GCSE English Literature it is one of the post-1914 prose and drama texts in Component 2, Section A. You answer one question on it, in about 45 minutes, using an extract printed on the paper and your knowledge of the whole play, and your spelling, punctuation, vocabulary and sentence structures are also assessed on this question. The exam is closed book, so every quotation you use has to be learned. The specification marks the play as one that deals with adult themes and / or contains language of an adult nature. This guide locates moments by act and scene rather than by page, so it works with any edition.',
  rights: {
    status: 'copyright',
    acknowledgement:
      '© Alan Bennett 2004. Published by Faber and Faber, London. Quoted for criticism and review.',
  },
  workLength: {
    words: 23000,
    basis:
      'An estimate, not a count: no licensed copy of the play is held here. The Faber text runs from page 3 to about page 109 (the page references GradeSaver gives for that edition), and a page of this playscript holds roughly 200 words, judging by the passages Eduqas has printed from it, which gives something over 20,000 words. Any length over 3,000 words sets the same 400-word page total, so the estimate cannot loosen the limit.',
  },

  overview: {
    summary: [
      'Eight clever sixth-formers at a boys’ school in the north of England in the 1980s have just achieved outstanding A-level results, and they stay on for an extra term to try for places at Oxford or Cambridge. Three teachers pull them in different directions. Hector, who teaches English and General Studies, fills his lessons with poetry learned by heart, old films and role-play, and insists that none of it is for passing exams. Mrs Lintott, who has taught them history, trusts plainly organised facts. Irwin, a young teacher brought in by the ambitious Headmaster, tells them that their essays are dull and that examiners want an angle, so they must learn to argue the opposite of what everyone believes.',
      'The comedy is quick and constant, but the story darkens. The Headmaster learns that Hector has been touching boys sexually when he gives them lifts on his motorbike, and forces him towards early retirement. Hector and Irwin are made to share lessons, and their argument about what education is for becomes open conflict, most sharply over how the boys should write about the Holocaust. All eight boys win places. Dakin, the most confident of the boys, who has been drawn to Irwin all term, then propositions him, and uses what he knows about the Headmaster’s own behaviour towards his secretary to get Hector reinstated. But when Hector rides off with Irwin on the back of his motorbike there is a crash: Hector is killed and Irwin is left using a wheelchair. At Hector’s memorial, Mrs Lintott tells the audience what became of each boy.',
      'Bennett shows the future before the past. The play opens years later, with Irwin in a wheelchair advising politicians, and the second act opens with him as a television historian being questioned by the adult Posner. So the audience watches the school term knowing that something went wrong, and much of the play’s power is dramatic irony: lines that sound light in the classroom carry a weight the characters cannot yet feel.',
      'The question the characters keep asking is what education is for, and Bennett gives no simple answer. Hector’s teaching is the most generous thing in the play, and his abuse of the boys’ trust is real. Irwin’s method works, and the play suggests that it is also a kind of cheating. The strongest answers keep both halves of each character in view. One warning: the 2006 film cuts close to an hour of the play and changes parts of the ending, and Eduqas examiners have reported answers that described events which do not happen in the play. Revise from the script.',
    ],
  },

  context: [
    {
      heading: 'Alan Bennett and his own scholarship',
      body: 'Alan Bennett was born in Leeds on 9 May 1934, the younger son of a Co-op butcher. He went to Leeds Modern School, learned Russian during his national service, then sat the scholarship examinations for Oxford and was accepted by Exeter College, where he took a first-class degree in history and stayed on for some years as a junior lecturer in medieval history at Magdalen College. In his introduction to the published play he writes about his own schooling and his entry to Oxford, describing Leeds Modern School as a school that sent plenty of boys to Leeds University but very few to Oxford or Cambridge. In a 2006 interview with NPR he admitted using a method rather like Irwin’s in his own scholarship papers, and said he had always been slightly ashamed of it because he knew it was “a bit of a fraud”; he called the play partly “an explanation of that and an expiation of it”. That is worth remembering when you judge Irwin: Bennett was not attacking a method he had never used. (Perhaps there is a private joke, too: when Irwin role-plays an Oxford examiner, he claims to be a fellow of Magdalen, the college where Bennett taught.)',
    },
    {
      heading: 'The play on stage and screen',
      body: 'The History Boys opened at the National Theatre’s Lyttelton Theatre in London on 18 May 2004, directed by Nicholas Hytner, with Richard Griffiths as Hector and Frances de la Tour as Mrs Lintott. It won the 2005 Laurence Olivier Award for Best New Play, opened on Broadway on 23 April 2006 and won six Tony Awards there, including Best Play. A film with the original stage cast followed in 2006. Bennett was already one of Britain’s best-known writers, famous since the satirical revue Beyond the Fringe at the 1960 Edinburgh Festival and for his television monologues Talking Heads (1988). NPR reported that in London the play set off a public debate about the purpose of education. The film is useful for picturing the characters, but it cuts close to an hour of the play and alters parts of the ending (in the film Irwin is not left in a wheelchair, for example), so it is never evidence for an exam answer.',
    },
    {
      heading: 'Oxbridge and the state-school boy',
      body: 'In the period the play is set, a school could keep its best pupils on for an extra term after A levels to sit the Oxford and Cambridge entrance examinations and interviews. The boys’ school has rarely managed it: the Headmaster complains that nobody got in last year or the year before, and Mrs Lintott’s recent record is two boys to Bristol and one to York. The Headmaster wants open scholarships, and Irwin tells the boys bluntly what they are up against: candidates who have been to Rome, Venice and Florence and have been “groomed like thoroughbreds for this one particular race”. That is the play’s class argument in a single image. Bennett, the butcher’s son who got into Oxford, knows both the ambition and its cost, and the play asks whether coaching clever state-school boys to perform like the privileged is a kind of justice or a kind of surrender.',
    },
    {
      heading: 'League tables and a culture of results',
      body: 'When the Headmaster says he is “thinking league tables”, he is speaking the language of the market. Official league tables of school results were first published in England in 1992. They grew out of education laws passed in 1980, 1988 and 1992, which together brought in a national curriculum, high-stakes testing and market competition between schools. The play is set in the 1980s, when Margaret Thatcher was Prime Minister (1979 to 1990), but it was written for an audience in 2004 who lived with league tables every day. One reading is that Bennett places the beginnings of that culture in his 1980s school so that the audience can see where their own world came from. Notice that the Headmaster’s words for what he wants the boys to have are all about surfaces: polish, charm, presentation.',
    },
    {
      heading: 'General Studies and the poets Hector loves',
      body: 'Hector teaches General Studies, which Faber’s study guide explains was a compulsory sixth-form subject meant to broaden pupils’ understanding of culture and society, usually taught by staff whose own subject was something else. Hector says he would call it a waste of time, and uses it to give the boys what he loves: Thomas Hardy, A. E. Housman, Philip Larkin, W. H. Auden, Shakespeare and the Bible, alongside old films. These are Bennett’s own poets as well; he has published a selection of them, Six Poets: Hardy to Larkin. Several of the poems in the play are about war and young men dying. Hardy’s Drummer Hodge, which Posner recites in the last scene of Act 1, is one of Hardy’s poems on the Boer War, which began in 1899: a young drummer from Wessex is buried without a coffin in South Africa, under stars he never understood. In Hardy’s collection Poems of the Past and the Present it appears among his War Poems under the title The Dead Drummer.',
    },
    {
      heading: 'History on television',
      body: 'The framing scenes show where Irwin ends up: advising politicians, and presenting history on television. The Guardian reported in 2011 that the character was modelled on the historian Niall Ferguson; treat that as a newspaper’s claim rather than something the play says. What matters for the exam is what the play shows. The method Irwin teaches in the classroom, finding the angle nobody expects and arguing it with confidence, is the method that makes him a successful broadcaster and a useful adviser to MPs. The play lets the audience decide whether that is a success story or a warning.',
    },
    {
      heading: 'Secrets, sexuality and safeguarding',
      body: 'The play is frank about sex, and much of its comedy is sexual, but at its centre is something that is not comic: a teacher touching his pupils. The Headmaster’s wife, looking out of a charity-shop window, has three times seen Hector’s motorbike with a boy on the pillion and a man “fiddling”. The boys treat the bike rides as a routine they joke about, and a modern audience finds that uncomfortable to watch. Eduqas examiners have noted that good answers comment sensitively on Hector’s behaviour and on how other characters respond to it. Call it what it is, an abuse of trust by an adult with power over the boys, and then ask how Bennett makes the audience feel about a man who is also the play’s most inspiring teacher. The play is full of other secrets: Posner is gay and in love with Dakin, Irwin hides his feelings and the truth about his own education, and the Headmaster harasses his secretary.',
    },
  ],

  themes: [
    {
      title: 'What education is for',
      body: 'This is the argument at the heart of the play, and Bennett gives each adult a different answer. For Hector, learning is for life, not for exams: he counts examinations “as the enemy of education”, and when Irwin says the exam is next month he replies that after the exam “Life goes on”. For Irwin, education is a competition to be won now. For the Headmaster it is results, rankings and reputation; for Mrs Lintott it is well-taught, plainly organised facts. The most convincing reading is that Bennett lets none of them win outright. Hector is right that what he teaches is meant to outlast the exam, and the play ends with his pupils remembering him. But Irwin’s coaching gets all eight boys in, and Hector’s closeness to the boys is bound up with his abuse of their trust. The play invites the audience to take sides and then makes taking sides difficult. Eduqas examiners have said that weaker answers over-simplify Hector; an essay that simply calls him good and Irwin bad misses the play.',
    },
    {
      title: 'History, truth and performance',
      body: 'Irwin treats history as an argument to be won rather than a truth to be found. When Scripps protests “But it’s all true”, Irwin asks what that has to do with anything, and turns the First World War inside out: Britain shared the blame, he says, and the mourning has hidden it, so “It’s not so much lest we forget, as lest we remember.” The method is exciting, and some of it is serious history. But the play tests it against the one subject where cleverness looks like cruelty. In the Holocaust lesson in Act 2, Hector and Posner object that Irwin’s detached, contextual approach makes the suffering smaller. Mrs Lintott supplies a third view: history as a record of what men have got wrong, with “women following behind with the bucket”. One reading is that the play itself behaves like Irwin, showing events out of order and from unexpected angles. Another, which the ending supports, is that Bennett is answering Irwin: there are facts, like a death, that no angle can argue away.',
    },
    {
      title: 'Literature, memory and consolation',
      body: 'Hector believes that poems learned by heart become part of the person who learns them. He will not let Irwin call them “gobbets”, handy lumps of quotation to be served up in an exam; he calls them codes, spells and runes, and says they belong in the heart. Akthar sums up his lessons as “Breaking bread with the dead”, and the Drummer Hodge scene shows what that means: a dead poet’s words meet a lonely boy’s feelings, and “it is as if a hand has come out and taken yours”. Bennett gives these moments real beauty. He also ties them to loss. Hector’s poems are full of the dead, and the play ends with his own death and memorial, so literature becomes a way for the living to keep hold of what they have lost. One reading is that the play believes in that consolation completely; a more careful one is that it values it and shows its limits, because the boys still have to live in a world that rewards Irwin’s methods.',
    },
    {
      title: 'Desire, power and the abuse of trust',
      body: 'Almost every relationship in the play has a question of power inside it. Hector tells the boys that whatever he does in his classroom is “a token of my trust” and calls it “a pact”; once the audience learns what happens on his motorbike, the words turn sour. The Headmaster harasses his secretary, Fiona. Dakin, the most confident boy, discovers that desire is a kind of power: he pursues Irwin, unsettles him, and uses what he knows about the Headmaster to get Hector reinstated. It is Irwin, the adult, who is flustered. Bennett handles all of this with comedy, which can make it easy to miss how serious it is. A strong answer names Hector’s behaviour plainly as abuse, notices that the boys joke about it, and asks why Bennett still gives Hector the play’s most generous speeches. A convincing answer to that is that people who do harm are not always easy to recognise, and the play is honest enough to show it.',
    },
    {
      title: 'Class, ambition and Oxbridge',
      body: 'The boys are clever pupils at a school that rarely gets anyone into Oxford or Cambridge, trying to enter institutions that favour the privileged. Hector wants them to settle for Derby, Leicester, Nottingham or Sheffield; the boys want Oxford and Cambridge because, as Lockwood says, they are “Tried and tested”, and because, Hector retorts, other boys want to go there. Irwin tells them their rivals have been groomed like racehorses, and the Headmaster wants them sent out with “polish”. Rudge is the test case: the Headmaster doubts him, and he gets in too. Bennett, a butcher’s son who went to Oxford, is not against the boys’ ambition. One reading is that the play is angry about a system that makes working-class ability perform before it will be recognised, and sad about what the performance costs. Mrs Lintott’s closing account of the boys’ lives, most of them comfortable and conventional, quietly asks whether the prize was worth what it took.',
    },
    {
      title: 'Outsiders and belonging',
      body: 'Several characters stand at the edge of the group. Posner is the youngest, Jewish and gay, and in love with Dakin, who knows and does not return it. Talking about Hardy and Larkin, Hector describes “a sense of not sharing, of being out of it”, and Posner says he has felt it. Akthar is Muslim; Rudge is the sporty boy the Headmaster writes off; Mrs Lintott is the only woman among the play’s teachers, and her speech about women in history turns her own position into an argument. Even Irwin, the coach who sells the boys an insider’s tricks, turns out never to have been an undergraduate at the kind of college he let them imagine. Bennett’s sympathy is clearest with Posner. The adult Posner we meet at the start of Act 2 has not found the belonging he wanted, which suggests that getting in is not the same as fitting in.',
    },
  ],

  characters: [
    {
      name: 'Hector',
      role: 'English and General Studies teacher, about sixty',
      body: 'Theatrical and learned, Hector teaches through poetry learned by heart, songs, old films and role-play, and treats Oxbridge ambition with comic despair. He hits the boys with an exercise book as part of the performance and calls his classroom a place of trust. He is married, and close to retirement. He also touches boys sexually when he gives them lifts on his motorbike, and when the Headmaster finds out, he is pushed towards early retirement. He breaks down in front of the class, is reinstated through Dakin, and is killed in a motorbike crash with Irwin riding pillion. Any answer about Hector has to deal with both halves of him: the teacher whose lessons the boys never forget, and the man who betrayed their trust. The play refuses to let either half cancel the other.',
    },
    {
      name: 'Irwin',
      role: 'young supply teacher hired to coach the boys for Oxbridge',
      body: 'The Headmaster brings Irwin in to give the boys polish. He tells them their essays are dull and teaches them to find the unexpected angle and argue it with confidence, whether or not it is true; when Timms asks if his other way is cheating, he answers “Possibly.” He is private about his life, drawn to Dakin and unsettled when Dakin pursues him. Dakin discovers that Irwin lied about his own education: he took his degree at Bristol, and went to Oxbridge only for a teaching diploma. The framing scenes show his future as a television historian and adviser to politicians, using a wheelchair after the crash. Bennett admitted using a method like his, which is one reason Irwin is written with some sympathy rather than as a simple villain.',
    },
    {
      name: 'Mrs Lintott',
      role: 'history teacher, Dorothy to the Headmaster',
      body: 'Mrs Lintott has taught the boys the facts that won them their A levels, and she has no patience with the idea that facts need dressing up. Her wit is dry and deflating, and she sees through the Headmaster. In the mock interviews of Act 2 she surprises the boys with a sharp speech about history as a record of men’s failures, and at the end she steps forward to tell the audience what became of each boy. That makes her, in effect, the play’s last historian. One reading is that she is its most reliable voice: she does not pretend about Hector and does not fall for Irwin.',
    },
    {
      name: 'The Headmaster',
      role: 'head of the school, Felix Armstrong',
      body: 'The Headmaster is the play’s satire of a results-driven manager. He thinks in league tables, open scholarships and reports to the governors, and wants the boys given charm, polish and presentation. He resents Hector’s teaching because its results cannot be measured, and uses the discovery of Hector’s behaviour as a way to be rid of him. He is a hypocrite: he harasses his own secretary, Fiona, which is the secret Dakin uses to force him to keep Hector. It is also his instruction, that Hector take Irwin on the bike instead of Dakin, that leads to the crash. Much of the play’s comedy is at his expense, but he is also the character who most clearly speaks for the system the boys are entering.',
    },
    {
      name: 'Dakin',
      role: 'the most confident of the boys',
      body: 'Handsome, clever and sure of himself, Dakin is Posner’s love and the boy most changed by Irwin, whose way of thinking he copies. He pursues Fiona, the Headmaster’s secretary, and boasts about it in the language of military campaigns. Then he turns his attention to Irwin, finds out Irwin’s lie and propositions him. He also saves Hector’s job by threatening to expose the Headmaster. Dakin finds out how much power he has over the adults around him, and the play watches that discovery with admiration and unease. Mrs Lintott’s account of his future, a well-paid tax lawyer, suggests that Irwin’s lessons in performance served him well.',
    },
    {
      name: 'Posner',
      role: 'the youngest of the boys: Jewish, gay and in love with Dakin',
      body: 'Posner is the boy closest to Hector’s idea of literature, the one who learns Drummer Hodge and feels the loneliness in it. He is also the play’s clearest outsider, and he says so. He is offended by Irwin’s detached approach to the Holocaust. Bennett shows him twice: as a schoolboy and, at the start of Act 2, as an unhappy adult who questions Irwin, hoping to sell a newspaper story about what happened with Dakin. The contrast is one of the saddest things in the play, and it raises the question of what his education, both Hector’s and Irwin’s, has given him.',
    },
    {
      name: 'Scripps',
      role: 'the religious boy, and the play’s occasional narrator',
      body: 'Scripps believes in God, plays the piano and is Dakin’s confidant. Hector singles him out in the first lesson as the boy who believes in God. He often speaks directly to the audience, looking back on the events of the term and telling us about the crash, which makes him something like the recorder of the story. When Irwin brushes aside the question of truth, it is Scripps who protests that the conventional answer is true.',
    },
    {
      name: 'Rudge',
      role: 'the sporty boy the Headmaster doubts',
      body: 'Rudge is written off by the Headmaster as the one who will not get in, prefers plain facts to Irwin’s cleverness and refuses to perform in the mock interview. He gets a place anyway. In Mrs Lintott’s account at the end he becomes a builder, and Rudge cuts in to defend his houses as ones first-time buyers can afford. He is the play’s working-class realist, and one reading is that his success is Bennett’s quiet joke at the expense of everyone’s theories of education.',
    },
    {
      name: 'Lockwood',
      role: 'one of the eight boys',
      body: 'Lockwood speaks up for the group’s ambition in the first lesson, calling Oxford and Cambridge “Tried and tested”, and in Irwin’s First World War lesson he asks about the war poets, which gives Irwin the chance to argue that most of them enjoyed the war. He is one of the voices that shows the boys enjoying the argument between their teachers.',
    },
    {
      name: 'Akthar',
      role: 'one of the eight boys, a Muslim',
      body: 'Akthar identifies Housman for Hector in the first lesson and describes Hector’s lessons to Irwin as “Breaking bread with the dead”. In the same scene he teases Irwin about his youth. Mrs Lintott tells us at the end that he becomes a headmaster himself, which gives the play’s debate about teaching a last ironic turn.',
    },
    {
      name: 'Timms',
      role: 'the joker of the group',
      body: 'Timms provides much of the class’s cheek, needling Hector and, in Irwin’s first lesson, asking whether the other way to succeed is to cheat. His later life, running a chain of dry cleaners, is one of the comfortable futures Mrs Lintott lists.',
    },
    {
      name: 'Crowther',
      role: 'one of the eight boys, keen on acting',
      body: 'Crowther protests when Hector hits the boys and, in Irwin’s first lesson, asks the question the whole class is thinking: so why are we bothering? His interest in acting suits a play full of role-play and performance. Mrs Lintott tells us he later becomes a magistrate.',
    },
    {
      name: 'Fiona',
      role: 'the Headmaster’s secretary, never seen on stage',
      body: 'Fiona is talked about but does not appear in the published text. Dakin pursues her and the Headmaster harasses her, and her story is used by Dakin as a weapon. That she never speaks is itself worth noticing: in a play where Mrs Lintott complains that women are left out of history, Fiona is left out of the play.',
    },
  ],

  keyQuotes: [
    {
      text: 'Whatever I do in this room is a token of my trust.',
      where: 'Hector, Act 1: his first lesson of the term',
      analysis:
        'Hector means it as a joke about his own classroom slapstick, just after the boys complain that he hits them. But it is also a claim about power: the boys must accept whatever he does because he is their teacher. Once the audience learns what happens on his motorbike, the line becomes one of the play’s darkest pieces of dramatic irony, a token of trust that he is already abusing.',
    },
    {
      text: 'It is a pact. Bread eaten in secret.',
      where: 'Hector, Act 1: his first lesson of the term',
      analysis:
        'The second phrase comes from the Book of Proverbs, where “Stolen waters are sweet, and bread eaten in secret is pleasant” describes forbidden pleasure. Hector presents his lessons as a shared, almost sacred secret between teacher and pupils. The allusion is a sign of his learning, and it also gives him away: secrecy and forbidden pleasure are exactly what the Headmaster will discover.',
    },
    {
      text: 'All knowledge is precious whether or not it serves the slightest human use',
      where: 'Hector, Act 1: his first lesson, quoting a line the boys identify as A. E. Housman’s',
      analysis:
        'This is Hector’s creed, and characteristically it is borrowed: he quotes it inside spoken quotation marks and makes the boys name the author. Learning is valuable in itself, not for what it gets you. The Headmaster and Irwin believe the opposite, so the line sets up the play’s central conflict in its opening minutes.',
    },
    {
      text: 'Think charm. Think polish. Think Renaissance Man.',
      where: 'The Headmaster to Mrs Lintott, Act 1: the staff room',
      analysis:
        'Three short imperatives with the same opening word, the rhythm of an advertising slogan. The Headmaster wants education to be a finish applied to the boys rather than something inside them. Irwin later uses the same pattern, “Think bored examiners”, which quietly shows that he is carrying out the Headmaster’s idea of education, whatever he thinks of the Headmaster.',
    },
    {
      text: 'Plainly stated and properly organised facts need no presentation, surely.',
      where: 'Mrs Lintott to the Headmaster, Act 1: the staff room',
      analysis:
        'Mrs Lintott’s whole method in one sentence: plain, orderly and confident. The final “surely” is both polite and challenging, inviting the Headmaster to disagree if he dares. When he does, she mocks the idea of facts as garnish, asking whether he means a sprig of parsley. The play is not sure she is right, but it clearly likes her for saying it.',
    },
    {
      text: 'groomed like thoroughbreds for this one particular race',
      where: 'Irwin to the boys, Act 1: his first lesson, on their rivals for places',
      analysis:
        'The simile turns privately educated applicants into racehorses, expensively bred and trained to win one event. It is contemptuous of them, and it is also an honest account of the class gap the boys face. Irwin tells them they should hate these rivals, then offers to train them in the same way, which is the central contradiction of his teaching.',
    },
    {
      text: 'It’s not so much lest we forget, as lest we remember.',
      where: 'Irwin, Act 1: his lesson on the causes of the First World War',
      analysis:
        'Irwin twists the words of remembrance, “lest we forget”, into a paradox: public mourning for the dead, he argues, lets Britain avoid remembering its own share of the blame. It is a brilliant example of his method, a familiar idea turned inside out in a single balanced sentence. Whether it is true matters less to him than whether it will wake up an examiner.',
    },
    {
      text: 'Breaking bread with the dead, sir. That’s what we do.',
      where: 'Akthar to Irwin, Act 1: the boys describe Hector’s lessons',
      analysis:
        'Akthar’s phrase makes reading a shared meal with dead writers, with a hint of religious communion in “breaking bread”. It is one of the loveliest descriptions of Hector’s teaching in the play. It is also part of a teasing performance: the boys are enjoying unsettling Irwin, and the polite, repeated “sir” shows that they, not he, are in control of the conversation.',
    },
    {
      text: 'I count examinations, even for Oxford and Cambridge, as the enemy of education.',
      where: 'Hector to Irwin, Act 1: their argument about “gobbets”',
      analysis:
        'Hector’s most direct statement of belief, made to the man hired to get the boys through those examinations. He immediately adds that he also regards education as the enemy of education, a self-mocking twist that stops the line becoming a sermon. The sentence is useful in almost any essay on the purpose of education.',
    },
    {
      text: 'call them what you like, but do not call them gobbets',
      where: 'Hector to Irwin, Act 1: their argument about exam technique',
      analysis:
        'A gobbet is a lump of raw meat, and also an examiner’s word for a short extract set for comment. Irwin means handy quotations; Hector hears the insult in the word. He offers “Codes, spells, runes” instead, words of magic and hidden meaning. The clash of vocabulary is the clash of the two teachers: quotation as a tool, or quotation as something closer to a spell.',
    },
    {
      text: 'I would have thought it was just the time.',
      where: 'Hector to the Headmaster, Act 1: after being told he has been seen on the bike',
      analysis:
        'The Headmaster has just said “This is no time for poetry”, after Hector answers him with lines of Housman. Hector’s reply is witty and deeply evasive: it refuses to discuss what he has done. One reading is that poetry is how Hector faces what cannot be said; a harsher and more convincing one is that he uses it to avoid facing it at all.',
    },
    {
      text: 'And it is as if a hand has come out and taken yours.',
      where:
        'Hector to Posner, Act 1: the last scene of the act (the speech begins on p.56 of the Faber edition)',
      analysis:
        'The climax of Hector’s speech about the best moments in reading, when a stranger long dead seems to share your private feelings. The image of the hand makes literature physical and consoling. Bennett then makes it literal: the stage direction has Hector put out his hand towards Posner, and the audience, who know by now about the bike, cannot hear the metaphor innocently.',
    },
    {
      text: 'History is women following behind with the bucket.',
      where: 'Mrs Lintott, Act 2: the mock interviews',
      analysis:
        'The punchline of her speech about why history is written by and about men. The bucket is a brilliantly unglamorous image: while men make the wars and the headlines, women clean up after them and are left out of the record. The line turns the play’s argument about history outwards, and it reminds the audience that the play itself has one woman teacher and a secretary who never appears.',
    },
  ],

  extracts: [
    {
      title: 'Hector’s first lesson',
      where: 'Act 1, Hector’s first lesson with the boys after their A-level results',
      pointer:
        'From Hector’s “If, heaven forfend, I was ever entrusted with the timetable” to the stage direction describing him as “a parody of despair”.',
      summary:
        'Hector calls General Studies a waste of time, quotes a line on the value of knowledge and makes the boys name Housman. When Timms uses a homophobic word, Hector hits him with an exercise book, and the boys protest in a pantomime of complaint. Told that they are all going in for Oxford and Cambridge, Hector sits stunned, begs them to settle for less glamorous universities, hits them again, and tells them that what he does in his room is a token of trust and a secret pact. The passage was printed on the Eduqas paper of June 2017.',
      annotations: [
        {
          phrase: 'I am far gone in age and decrepitude',
          note: 'Mock-heroic self-pity. Hector plays the ruined old man in grand, old-fashioned words, and the boys play along. The comedy shows how theatrical his teaching is, and how much the boys enjoy the performance.',
        },
        {
          phrase: 'Wash me in steep-down gulfs of liquid fire.',
          note: 'Othello’s cry of despair after he has killed Desdemona, used by Hector in reaction to the news that the boys want Oxbridge. The comic gap between the tragedy quoted and the situation shows his habit of meeting life through literature.',
        },
        {
          phrase: 'There is a world elsewhere.',
          note: 'Coriolanus says this as he turns his back on Rome, which has banished him. Hector borrows it to tell the boys that there is life beyond Oxbridge. The allusion flatters them as heroes and mocks their ambition in the same breath.',
        },
        {
          phrase: 'Whatever I do in this room is a token of my trust.',
          note: 'Said just after he has hit them, as a joke about the slapstick. By the end of Act 1 the audience knows what else Hector does, and the claim becomes dramatic irony about a teacher’s power over pupils.',
        },
      ],
      question:
        'Using this extract and your knowledge of the whole play, write about Hector and how Bennett presents him as a teacher.',
    },
    {
      title: 'Irwin’s lesson on the First World War',
      where: 'Act 1, one of Irwin’s early history lessons',
      pointer:
        'From Irwin’s “So. Our overall conclusion is that the origins of the Second War” to “Poetry is good up to a point. Adds flavour.”',
      summary:
        'Irwin pretends to be an Oxford examiner reading the boys’ safe answers and says they have sent him to sleep. When Scripps protests that the answer is true, Irwin dismisses the objection and argues the opposite case: that Britain helped cause the First World War and that remembrance has hidden the fact. He mocks Dakin’s view of Haig and tells Lockwood that the war poets seem to have enjoyed the war. The passage was printed on the Eduqas paper of June 2018.',
      annotations: [
        {
          phrase: 'Bristol welcomes you with open arms.',
          note: 'Irwin grades the answers by the universities they would reach, in a comic list that ends with him asleep. It is funny and cruel: good work is only good enough for the places the Headmaster looks down on.',
        },
        {
          phrase: 'What has that got to do with it?',
          note: 'His answer to Scripps’s protest that the answer is true. The rhetorical question, repeated with “anything”, states Irwin’s method plainly: in this game truth is beside the point, and the audience is invited to be shocked.',
        },
        {
          phrase: 'It’s not so much lest we forget, as lest we remember.',
          note: 'A paradox built by reversing the words of remembrance. Irwin’s cleverness is dazzling here, and the play lets the audience feel its attraction before it tests the method against the Holocaust in Act 2.',
        },
        {
          phrase: 'there’s no better way of forgetting something than by commemorating it',
          note: 'A second paradox that attacks the Cenotaph and the Last Post, the most solemn rituals of British memory. Irwin’s contrarian method has become an attack on shared feeling, which is exactly what Hector will object to later.',
        },
        {
          phrase: 'Poetry is good up to a point. Adds flavour.',
          note: 'Poetry reduced to seasoning for an essay, in two clipped sentences. It is the opposite of Hector’s creed, and it echoes the Headmaster’s idea of facts with a serving suggestion. The food imagery keeps returning when the play talks about presentation.',
        },
      ],
      question:
        'Using this extract and your knowledge of the whole play, write about Irwin and how Bennett presents his methods of teaching.',
    },
    {
      title: 'Hector, Posner and Drummer Hodge',
      where: 'Act 1, the last scene of the act',
      pointer:
        'From Hector’s “Oh, how old was Hardy?” to the stage direction as Hector goes off, leaving Dakin and Posner wondering.',
      summary:
        'After Posner recites Hardy’s Drummer Hodge, Hector talks about Hardy’s age and his habit of forming words with “un-”, which Larkin shares, and says it gives a sense of holding back and being left out. Posner says he has felt that. Hector describes the best moments in reading, puts out his hand, and the moment passes. Dakin arrives with a helmet, expecting his turn on the bike, and Hector refuses, quoting Shakespeare as he goes. The passage was printed on the Eduqas paper of June 2024.',
      annotations: [
        {
          phrase: 'Un-kissed. Un-rejoicing. Un-confessed. Un-embraced.',
          note: 'Four one-word sentences built on the same prefix. Hector is teaching grammar, but every word describes a life without love or contact, and the list sounds like a confession of his own loneliness.',
        },
        {
          phrase: 'a sense of not sharing, of being out of it',
          note: 'Hector’s gloss on Hardy and Larkin is also a portrait of Posner, the outsider, who answers that he has felt it. Literature is shown doing what Hector claims for it, finding words for a feeling the reader thought was private.',
        },
        {
          phrase: 'And it is as if a hand has come out and taken yours.',
          note: 'The metaphor makes reading an act of human touch across time. It is the tenderest line Hector has, and it is spoken, with his hand outstretched, to a boy, by a man the audience now knows has been touching boys.',
        },
        {
          phrase: 'But the moment passes.',
          note: 'Four words of stage direction carry the scene. Bennett writes that it seems Posner may take Hector’s hand, or that Hector may put it on Posner’s knee. The audience holds its breath between comfort and fear, and nothing happens.',
        },
        {
          phrase: 'Today I go a different way.',
          note: 'Hector refuses Dakin’s turn on the bike. On the surface it is a brisk goodbye; underneath, it suggests that, now he has been found out, he is giving the rides up. After the crash in Act 2 the line reads as foreshadowing, and the boys are left wondering what has changed.',
        },
      ],
      question:
        'Using this extract and your knowledge of the whole play, write about the relationship between Hector and Posner and how Bennett presents it.',
    },
  ],

  languageAnalysis: [
    {
      technique: 'Allusion and quotation',
      example:
        'In one lesson Hector quotes Housman, Othello’s despair, Coriolanus’s “There is a world elsewhere”, a proverb about bread eaten in secret and a verse from Deuteronomy.',
      effect:
        'Hector speaks through other people’s words, which shows the depth of his reading and the way he meets every feeling with a quotation. It also lets him say things indirectly: the allusions carry meanings, about secrecy and forbidden pleasure, that he would never state openly. Quotation becomes a kind of disguise, and the audience learns to listen for what it hides.',
    },
    {
      technique: 'Dramatic irony',
      example:
        '“Whatever I do in this room is a token of my trust”, said in the first lesson, before the audience knows what happens on Hector’s motorbike.',
      effect:
        'Lines that sound comic when first spoken become disturbing once the audience knows more than the characters. Because Bennett opens each act with the future, the whole play works this way: the audience watches the term already knowing that Irwin will end up in a wheelchair, and hears every joke about the bike with that knowledge.',
    },
    {
      technique: 'Imperatives and repetition',
      example:
        'The Headmaster’s “Think charm. Think polish. Think Renaissance Man.” and Irwin’s “Think bored examiners.”',
      effect:
        'The repeated imperative sounds like advertising or management jargon. When Irwin uses the same pattern with the boys, the echo links him to the Headmaster, however much he scorns him, and shows that his teaching serves the Headmaster’s idea of education as presentation.',
    },
    {
      technique: 'Paradox and antithesis',
      example:
        'Irwin: “It’s not so much lest we forget, as lest we remember”, and remembrance as the best way of forgetting.',
      effect:
        'Balanced, reversed statements are Irwin’s signature. They are memorable and seem profound, which is exactly what he says examiners want. The form makes his cleverness attractive to the boys and to the audience, while the content, an attack on remembrance, is designed to shock.',
    },
    {
      technique: 'Metaphor and simile',
      example:
        'Rival candidates “groomed like thoroughbreds”; exam answers as a Christmas tree hung with gobbets; facts served with a sprig of parsley.',
      effect:
        'The imagery of breeding, decoration and food keeps returning when the characters talk about presentation. It makes Irwin’s and the Headmaster’s idea of education sound like dressing something up for sale, and gives Hector and Mrs Lintott vivid ways of mocking it.',
    },
    {
      technique: 'Stage directions',
      example:
        'In the last scene of Act 1, Hector puts out his hand and it seems Posner may take it, or that Hector may put it on Posner’s knee. “But the moment passes.”',
      effect:
        'Bennett uses the stage direction to turn Hector’s metaphor of the hand into an action, and to hold the audience between two readings of it. Eduqas mark schemes name Bennett’s use of stage directions as something to write about; this is the clearest example to learn.',
    },
    {
      technique: 'Minor sentences and word formation',
      example: '“Un-kissed. Un-rejoicing. Un-confessed. Un-embraced.”',
      effect:
        'Hector teaches a point of grammar, the prefix “un-”, with a list of one-word sentences. The pauses make each word land separately, and together they describe a life of things not done. The lesson on language becomes a quiet revelation of character.',
    },
    {
      technique: 'Comic rhythm and bathos',
      example:
        'Irwin, as an examiner: “Bristol welcomes you with open arms. Manchester longs to have you.” The list goes on to Leeds, and ends with him saying he is asleep.',
      effect:
        'The list builds like praise and collapses into a put-down. Bennett’s comedy often works this way, raising a tone and dropping it. Examiners reward comment on humour, and this pattern of rise and fall is a precise way to describe it.',
    },
    {
      technique: 'Forms of address',
      example:
        'In the scene where the boys describe Hector’s lessons to Irwin, almost every line the boys speak includes “sir”.',
      effect:
        'The repetition is polite on the surface and mocking underneath. The Eduqas specimen mark scheme points to the ironic repetitions of “sir” as a sign that the boys, not Irwin, control the exchange. Titles and forms of address are a good way to write about power in the classroom.',
    },
  ],

  structureForm: [
    {
      heading: 'Two acts, told out of order',
      body: 'The play has two acts, and each begins in the future. Act 1 opens with Irwin, years later and in a wheelchair, advising MPs; Act 2 opens with him presenting a television history programme and being confronted by the adult Posner. The main action, the autumn term, is then played out knowing some of its consequences. This technique, showing the future early, is called prolepsis, and Eduqas examiners have noted answers that comment well on it. It turns the play into a kind of history lesson itself: we know the outcome, and the question is how and why it happened.',
    },
    {
      heading: 'Speaking to the audience',
      body: 'Characters step out of scenes to speak directly to the audience. Scripps looks back on the term and reports the crash; Posner tells us early on where Irwin’s career will lead; and at the end Mrs Lintott tells us what became of each boy. The effect is of people remembering, and it keeps the audience at a slight distance, thinking as well as feeling. It also means that the ending is narrated rather than acted, which makes it sound like the verdict of history.',
    },
    {
      heading: 'Performance inside the play',
      body: 'The play is full of performances: Hector’s role-plays in French, the boys acting out scenes from old films, the mock interviews, Irwin pretending to be an Oxford examiner, Hector’s own mock despair. A play that argues about whether history is a performance is itself built out of performances, which invites the audience to ask when the characters are being sincere. The boys are always partly acting, even when they are being honest.',
    },
    {
      heading: 'Scenes that answer each other',
      body: 'Bennett builds the play from pairs. Hector’s first lesson is followed by Irwin’s; the Headmaster’s “Think charm” is echoed by Irwin’s “Think bored examiners”; the gobbets argument sets Hector’s view against Irwin’s in one room. The motorbike frames the ending: at the close of Act 1 Hector refuses Dakin a ride, and near the end of Act 2 the Headmaster, seeing Dakin with the helmet, sends Irwin instead. Tracing these echoes is an easy way to write about structure rather than just plot.',
    },
    {
      heading: 'Comedy that turns',
      body: 'For most of its length the play is a comedy of wit, cheek and classroom farce. It ends with a death, a memorial and a list of ordinary lives. One useful label is tragicomedy, a play that mixes the two. A useful way to write about it is to show how the jokes carry the serious ideas, and how the tone changes: Hector’s outburst and tears at the start of Act 2, the Holocaust lesson, and the crash, which is reported quietly rather than staged.',
    },
    {
      heading: 'The play, not the film',
      body: 'Bennett also wrote the screenplay for the 2006 film, which uses the original cast but cuts close to an hour of the play, drops much of the framing and changes parts of the ending: in the film Irwin is not left in a wheelchair. Eduqas examiners reported in 2025 that a small number of candidates wrote about things that do not happen in the play. In the exam, every reference should come from the script.',
    },
  ],

  vocabulary: [
    {
      term: 'Oxbridge',
      definition:
        'Oxford and Cambridge universities, spoken of together. In the play they stand for prestige, tradition and privilege.',
    },
    {
      term: 'The extra term',
      definition:
        'In the period of the play, pupils aiming for Oxford or Cambridge could stay on for a term after A levels to sit entrance examinations and interviews. The main action of the play takes place in that term.',
    },
    {
      term: 'General Studies',
      definition:
        'A broad sixth-form subject on culture and society, usually taught by staff from other subjects. Hector teaches it, and uses it for whatever he loves.',
    },
    {
      term: 'Open scholarship',
      definition:
        'An award from an Oxford or Cambridge college to an outstanding candidate. The Headmaster wants them because they bring his school prestige.',
    },
    {
      term: 'Supply teacher',
      definition:
        'A temporary teacher. Irwin is hired for the term to coach the boys, with the hope of a permanent job if he succeeds.',
    },
    {
      term: 'Contrarian',
      definition:
        'Someone who deliberately takes the opposite view to the majority. Irwin teaches contrarian history, and ends up making a career of it on television.',
    },
    {
      term: 'Gobbet',
      definition:
        'A lump or chunk, especially of raw meat; also an examiner’s word for a short extract or quotation set for comment. Irwin uses the second meaning, and Hector hears the first.',
    },
    {
      term: 'Don',
      definition:
        'A university teacher, especially at Oxford or Cambridge. Mrs Lintott asks whether the dons are so naive as to be impressed by presentation.',
    },
    {
      term: 'Renaissance man',
      definition:
        'A person of wide learning and many talents. The Headmaster wants the boys to look like one, which is not the same as being one.',
    },
    {
      term: 'League tables',
      definition:
        'Rankings of schools by exam results. Official ones were first published in England in 1992; the Headmaster is already thinking in them.',
    },
    {
      term: 'Pillion',
      definition:
        'The passenger seat behind the rider on a motorbike. The word matters in the Headmaster’s account of what his wife saw.',
    },
    {
      term: 'Commemoration',
      definition:
        'Public remembrance of the dead, as at the Cenotaph on Remembrance Sunday. Irwin argues that commemorating the First World War has helped Britain forget its share of the blame.',
    },
    {
      term: 'Allusion',
      definition:
        'A brief reference to another text, person or event. Hector’s speech is full of allusions to poetry, Shakespeare and the Bible.',
    },
    {
      term: 'Prolepsis',
      definition:
        'Showing part of the ending near the beginning; a flash-forward. Both acts of the play open with scenes set years after the main action.',
    },
    {
      term: 'Direct address',
      definition:
        'When a character speaks straight to the audience, stepping out of the scene. Scripps, Posner and Mrs Lintott all do it.',
    },
    {
      term: 'Dramatic irony',
      definition:
        'When the audience knows something the characters do not, so that their words carry an extra meaning. Hector’s talk of trust is the clearest example.',
    },
    {
      term: 'Diffidence',
      definition:
        'Shyness or lack of confidence. Hector says diffidence is to be encouraged, and connects Hardy’s and Larkin’s words to it.',
    },
    {
      term: 'Incorrigible',
      definition:
        'Impossible to correct or reform. The Headmaster’s word for Hector when he answers the accusation with poetry.',
    },
  ],

  examPractice: {
    questions: [
      {
        question:
          'Using the extract of Hector’s first lesson (Act 1) and your knowledge of the whole play, write about Hector and how Bennett presents him as a teacher. In your response, refer to the extract and the play as a whole, and show your understanding of characters and events in the play.',
        skill: 'Extract analysis leading into a whole-play argument about a character',
        guidance: [
          'Open with a two-sentence argument, for example: Bennett presents Hector as the most inspiring teacher in the play and as a man who abuses his pupils’ trust, and the play will not let one cancel the other.',
          'Analyse the extract first, briefly and closely: the comic despair and slapstick, the stream of allusions (Othello, Coriolanus, the Bible), and the claim that his room is a place of trust and a secret pact.',
          'Move to the gobbets argument with Irwin later in Act 1: examinations as the enemy of education, and poems learned by heart as codes, spells and runes.',
          'Deal directly and sensitively with the Headmaster’s discovery and Hector’s poetic evasions, then with the Drummer Hodge scene, where the hand metaphor and the stage direction show both sides of him at once.',
          'Use Act 2: his breakdown in front of the class, the shared lessons, his reinstatement through Dakin, the crash and the memorial, and what Mrs Lintott’s account of the boys suggests he gave them.',
          'End with a judgement about what Bennett wants the audience to feel about Hector, and leave a few minutes to check spelling and punctuation, which are assessed on this question.',
        ],
      },
      {
        question:
          'Using the extract of Irwin’s lesson on the First World War (Act 1) and your knowledge of the whole play, write about Irwin’s methods of teaching and how Bennett presents them.',
        skill: 'Extract analysis and whole-play argument about ideas',
        guidance: [
          'State Irwin’s method in one sentence: find the angle nobody expects and argue it confidently, whether or not it is true.',
          'In the extract, analyse the comic role-play of the bored examiner, the dismissal of Scripps’s point about truth, and the paradoxes about remembrance and forgetting.',
          'Link back to his first lesson: the rivals groomed like thoroughbreds, the advice to go to Newcastle and be happy, and the hint that the other way is close to cheating.',
          'Follow the method into Act 2: the Holocaust lesson, where Hector and Posner object, and the boys’ interviews, where it works for most of them.',
          'Use the framing scenes and the revelation that Irwin lied about his own education to show what the play thinks of the method in the long run.',
          'Weigh a judgement: Bennett admitted using a similar method himself, so is Irwin a villain, a realist, or a version of the writer?',
        ],
      },
      {
        question:
          'Using the staff-room extract in which the Headmaster and Mrs Lintott discuss the Oxbridge boys (Act 1), and your knowledge of the whole play, write about Mrs Lintott and how Bennett presents her importance in the play.',
        skill: 'Character importance across the whole play',
        guidance: [
          'Begin with her role in the extract: the teacher whose plain facts earned the boys their A levels, answering the Headmaster’s talk of polish with dry mockery.',
          'Analyse her language: plainly stated and properly organised facts, the sprig of parsley and the umbrella in the cocktail, and her sharp “Are dons so naive?”',
          'Show her as a truth-teller elsewhere: her view of the Headmaster and her plain speaking to Hector about his behaviour.',
          'Analyse her speech in the mock interviews in Act 2, ending with women following behind with the bucket, and link it to her place as the only woman teacher in the play.',
          'Explain her structural importance: she speaks directly to the audience at the end and tells the boys’ futures, so she has, in effect, the last word on the play’s history.',
          'Conclude on what she adds to the argument between Hector and Irwin: a third view of education that the play takes seriously.',
        ],
      },
      {
        question:
          'Using the extract in which Hector and Posner discuss Drummer Hodge (the end of Act 1), and your knowledge of the whole play, write about Posner and how Bennett presents him as an outsider.',
        skill: 'Extract analysis and whole-play argument about a theme through a character',
        guidance: [
          'Open by naming what makes Posner an outsider: the youngest, Jewish, gay and in love with Dakin, who does not love him back.',
          'In the extract, analyse the words formed with “un-” and the sense of not sharing, and Posner’s quiet admission that he has felt it.',
          'Look at the hand metaphor and the stage direction, and explain why the moment is both tender and troubling.',
          'Use other moments: Posner’s objection to Irwin’s approach to the Holocaust, and his unreturned love for Dakin, which Dakin knows about and brushes aside.',
          'Use the structure: the adult Posner at the start of Act 2, trying to sell a story to a newspaper, and what that suggests about where his education has left him.',
          'Conclude with a view: Bennett’s sympathy is clearest with Posner, and the play suggests that winning a place is not the same as belonging.',
        ],
      },
    ],
    tips: [
      'The exam is closed book, so learn a small set of short quotations from both acts and from several characters. Eight to ten that you can analyse will serve you better than thirty you can only recite.',
      'Always move beyond the extract. Eduqas examiners reported in both 2024 and 2025 that not all answers reach the end of the play. Plan a paragraph on Act 2, and one on the ending.',
      'Use the play, not the film. The film cuts a great deal and changes parts of the ending, and examiners have noticed answers describing things that do not happen in the play.',
      'The Eduqas specification lists knowledge of the text, analysis of language, structure and form, and accurate writing for this section, not context. Use context only when it sharpens a point about how Bennett presents a character or idea.',
      'Write about Hector’s behaviour plainly and sensitively. Name it as an abuse of trust, then analyse how Bennett presents it. Do not quote the play’s swear words; examiners report that weaker answers do.',
      'Write about structure: the flash-forwards, direct address and the paired scenes. Examiners have noted pertinent comments on the play’s prolepsis.',
      'Spell the names correctly, because accuracy is assessed on this question: Bennett, Hector, Irwin, Mrs Lintott, Posner, Dakin, Scripps, Akthar, Rudge.',
      'Write about what Bennett presents and shows, rather than simply about what Hector is. The top answers treat characters as the writer’s creations with a purpose in the play.',
    ],
  },

  modelAnswer: {
    question:
      'Write about Hector in The History Boys and how Bennett presents his importance in the play. (The question Eduqas set in June 2024, with the Drummer Hodge extract from the end of Act 1.)',
    paragraph:
      'In the extract Bennett makes Hector important as the one teacher who treats literature as a meeting between people, and the staging makes that belief both moving and troubling. His claim that reading can feel “as if a hand has come out and taken yours” turns an abstract idea into a physical gesture: the dead writer reaches across time to the lonely reader, and Posner, who has just admitted that he “felt that a bit”, is that reader. Yet Bennett immediately makes the metaphor literal. The stage direction has Hector put out his hand, and for a moment it seems he may “put it on Posner’s knee” before “the moment passes”. The audience has already watched the Headmaster confront Hector about the boys on his motorbike, so they cannot hear the image innocently, and the most generous speech in the play is shadowed by his abuse of trust. This double effect is why Hector matters to the whole play: Bennett shows his teaching to be genuinely life-giving, and shows that the same closeness is what he betrays. Even his exit line, “Today I go a different way”, works on two levels, as a refusal to take Dakin on the bike and, once the audience has heard about the crash in Act 2, as foreshadowing of his death.',
    commentary: [
      'It opens with an argument that answers the question, Hector’s importance, rather than a summary of the scene.',
      'Quotations are short and embedded in the sentences, and each is analysed for its effect, including a stage direction, which the mark scheme names as a method to discuss.',
      'It holds both sides of Hector together, inspiring and abusive, and handles the abuse plainly and without sensational detail, which is what examiners mean by commenting sensitively.',
      'It links the extract to the wider play in two directions: back to the Headmaster’s discovery earlier in Act 1 and forward to the crash in Act 2. Eduqas examiners reported in 2024 that fewer answers reached the ending of the play.',
      'Its final sentence makes a point about structure and foreshadowing, reaching beyond character to how the play is built.',
    ],
  },

  timeline: [
    {
      where: 'Act 1, the opening',
      title: 'Irwin advises the MPs',
      summary:
        'Years after the main action, Irwin, now using a wheelchair, coaches a group of MPs on how to present a controversial government bill so that it sounds like a gain rather than a loss.',
      setting: 'A meeting with politicians, years in the future',
      who: ['Irwin'],
      themes: ['History, truth and performance'],
      tension: 2,
      significance:
        'The future comes first: the audience knows from the start that Irwin’s method outlives the classroom, and that something has happened to him.',
    },
    {
      where: 'Act 1, the first lesson',
      title: 'Hector’s first lesson of the term',
      summary:
        'Hector welcomes the boys back after their A levels, is appalled that they all want Oxford and Cambridge, hits them in mock despair and calls his classroom a place of trust and a secret pact.',
      setting: 'Hector’s classroom, the start of the autumn term',
      who: ['Hector', 'Akthar', 'Timms', 'Crowther', 'Dakin', 'Lockwood', 'Scripps'],
      quote: 'Whatever I do in this room is a token of my trust.',
      themes: ['What education is for', 'Desire, power and the abuse of trust'],
      tension: 2,
      significance:
        'Hector’s creed and his secret are both planted in the first scene, and the line about trust will turn sour.',
    },
    {
      where: 'Act 1, the staff room',
      title: 'The Headmaster wants polish',
      summary:
        'The Headmaster praises Mrs Lintott for the boys’ results but tells her that facts are not enough: he is thinking of league tables, and wants charm, polish and presentation.',
      setting: 'The staff room',
      who: ['The Headmaster', 'Mrs Lintott'],
      quote: 'Think charm. Think polish. Think Renaissance Man.',
      themes: ['What education is for', 'Class, ambition and Oxbridge'],
      tension: 2,
      significance:
        'The system the boys must beat is named, and the Headmaster’s decision to hire Irwin follows from it.',
    },
    {
      where: 'Act 1, Hector’s French lesson',
      title: 'Irwin arrives',
      summary:
        'The Headmaster brings Irwin into Hector’s classroom during a role-play in French set in a brothel, which the boys hastily turn into a scene in a wartime hospital. Irwin plays along.',
      setting: 'Hector’s classroom',
      who: ['Hector', 'Irwin', 'The Headmaster', 'Dakin', 'Timms'],
      themes: ['History, truth and performance'],
      tension: 3,
      significance:
        'The rival teachers meet over a performance, and the boys show how quickly they can invent a convincing story.',
    },
    {
      where: 'Act 1, Irwin’s first lesson',
      title: 'Irwin’s verdict on the essays',
      summary:
        'Irwin tells the boys their essays are dull, warns them about rivals who have travelled and been trained for this race, tells them to go to Newcastle and be happy, then hints at another way.',
      setting: 'Irwin’s classroom',
      who: ['Irwin', 'Crowther', 'Timms', 'Dakin'],
      quote: 'Go to Newcastle and be happy.',
      themes: ['Class, ambition and Oxbridge', 'History, truth and performance'],
      tension: 3,
      significance:
        'Irwin’s method is introduced as a way to beat privilege, and Timms’s question, whether it is cheating, is never quite answered.',
    },
    {
      where: 'Act 1, Irwin’s history lesson',
      title: 'Lest we remember',
      summary:
        'Irwin takes the boys’ safe conclusion about the causes of the two world wars and turns it inside out, arguing that Britain shared the blame and that public mourning has hidden it.',
      setting: 'Irwin’s classroom',
      who: ['Irwin', 'Timms', 'Scripps', 'Dakin', 'Lockwood'],
      quote: 'It’s not so much lest we forget, as lest we remember.',
      themes: ['History, truth and performance'],
      tension: 3,
      significance:
        'The play shows the thrill of Irwin’s cleverness before it tests the method against the Holocaust in Act 2.',
    },
    {
      where: 'Act 1, Irwin’s classroom',
      title: 'The boys describe Hector’s lessons',
      summary:
        'Irwin asks what Hector does with them. In a flurry of polite “sir”s, the boys call it knowledge for its own sake, not useful like Irwin’s lessons, and a way of breaking bread with the dead.',
      setting: 'Irwin’s classroom',
      who: ['Irwin', 'Akthar', 'Timms', 'Posner', 'Lockwood', 'Crowther'],
      quote: 'Breaking bread with the dead, sir. That’s what we do.',
      themes: ['Literature, memory and consolation', 'What education is for'],
      tension: 2,
      significance:
        'The boys are loyal to Hector and are also playing the two teachers off against each other, and they know it.',
    },
    {
      where: 'Act 1, Hector and Irwin',
      title: 'Gobbets',
      summary:
        'Irwin asks Hector to let the boys use his material in the exam. Hector calls examinations the enemy of education and is outraged when Irwin calls his quotations gobbets.',
      setting: 'The two teachers alone',
      who: ['Hector', 'Irwin'],
      quote: 'I count examinations, even for Oxford and Cambridge, as the enemy of education.',
      themes: ['What education is for', 'Literature, memory and consolation'],
      tension: 3,
      significance:
        'The play’s central argument is put in its plainest form, face to face, in a scene Eduqas has printed as an extract.',
    },
    {
      where: 'Act 1, the Headmaster’s office',
      title: 'Hector is found out',
      summary:
        'The Headmaster tells Hector that his wife has three times seen a motorbike with a boy on the pillion and a man touching him, and that she took the number. He brings Hector’s retirement forward to the end of term, and Hector answers with lines of Housman.',
      setting: 'The Headmaster’s office, halfway through the term',
      who: ['The Headmaster', 'Hector'],
      quote: 'This is no time for poetry.',
      themes: ['Desire, power and the abuse of trust', 'What education is for'],
      tension: 5,
      significance:
        'Hector’s secret is out, and the Headmaster uses it to have him share lessons with Irwin, which sets up the conflict of Act 2.',
    },
    {
      where: 'Act 1, the last scene',
      title: 'Drummer Hodge',
      summary:
        'Alone with Posner, Hector talks about Hardy’s poem and the loneliness it expresses, and describes the best moments in reading. He reaches out a hand, the moment passes, and he refuses Dakin a ride on the bike.',
      setting: 'Hector’s classroom, after a lesson',
      who: ['Hector', 'Posner', 'Dakin'],
      quote: 'And it is as if a hand has come out and taken yours.',
      themes: [
        'Literature, memory and consolation',
        'Outsiders and belonging',
        'Desire, power and the abuse of trust',
      ],
      tension: 4,
      significance:
        'The play’s most beautiful speech and its most uneasy moment happen together, and the act ends with Hector leaving on his own.',
    },
    {
      where: 'Act 2, the opening',
      title: 'The television historian and the adult Posner',
      summary:
        'Years later Irwin, in a wheelchair, is filming a television history programme among ruins. A man who turns out to be the adult Posner presses him for a newspaper story about Dakin, and Irwin refuses.',
      setting: 'A ruined abbey, during a television recording',
      who: ['Irwin', 'Posner'],
      themes: ['History, truth and performance', 'Outsiders and belonging'],
      tension: 3,
      significance:
        'The second act begins in the future too: Posner has not flourished, and Irwin is still guarding a secret.',
    },
    {
      where: 'Act 2, Hector’s classroom',
      title: 'Hector breaks down',
      summary:
        'Hector tells the class that he and Irwin will now share lessons. The boys do not take him seriously; he shouts at them and then weeps, and Posner awkwardly comforts him.',
      setting: 'Hector’s classroom',
      who: ['Hector', 'Posner'],
      themes: ['What education is for', 'Desire, power and the abuse of trust'],
      tension: 4,
      significance:
        'The performer drops the performance, and the boys see their teacher as a frightened man for the first time.',
    },
    {
      where: 'Act 2, the first shared lesson',
      title: 'The Holocaust lesson',
      summary:
        'Irwin shows the boys how to write about the Holocaust with detachment and in context. Hector, and Posner, who is Jewish, object that this approach makes the suffering smaller.',
      setting: 'A classroom, both teachers present',
      who: ['Irwin', 'Hector', 'Posner'],
      themes: ['History, truth and performance'],
      tension: 4,
      significance:
        'The limit of Irwin’s method is reached: some history cannot be treated as a clever game.',
    },
    {
      where: 'Act 2, the mock interviews',
      title: 'Women following behind with the bucket',
      summary:
        'The three teachers put the boys through practice interviews. Mrs Lintott surprises the boys with a sharp speech about history as a record of men’s failures, cleared up after by women.',
      setting: 'A classroom set up as an interview panel',
      who: ['Mrs Lintott', 'Hector', 'Irwin', 'Rudge'],
      quote: 'History is women following behind with the bucket.',
      themes: ['History, truth and performance', 'Outsiders and belonging'],
      tension: 2,
      significance:
        'A third view of history enters the argument, from the character the men around her tend to overlook.',
    },
    {
      where: 'Act 2, results',
      title: 'All eight get in',
      summary:
        'The boys come back from their examinations and interviews and learn that every one of them, including the doubted Rudge, has won a place at Oxford or Cambridge.',
      setting: 'The school, after the interviews',
      who: ['Rudge', 'Posner', 'Dakin', 'Scripps', 'Akthar', 'Timms', 'Lockwood', 'Crowther'],
      themes: ['Class, ambition and Oxbridge'],
      tension: 2,
      significance:
        'The goal is reached before the end, so the rest of the play asks what the success was worth.',
    },
    {
      where: 'Act 2, Dakin and Irwin',
      title: 'Dakin calls Irwin’s bluff',
      summary:
        'Dakin tells Irwin that he could not find Irwin’s name at the Oxbridge college Irwin claimed, and Irwin admits he took his degree at Bristol. Dakin then makes clear he wants a sexual relationship with him, and Irwin, flustered, agrees to meet.',
      setting: 'A classroom, the two alone',
      who: ['Dakin', 'Irwin'],
      themes: ['Desire, power and the abuse of trust', 'History, truth and performance'],
      tension: 4,
      significance:
        'The pupil now holds the power, and the teacher who taught him to perform is caught in his own performance.',
    },
    {
      where: 'Act 2, the classroom',
      title: 'Hector reinstated, and the last ride',
      summary:
        'Dakin reveals that he has made the Headmaster keep Hector by threatening to expose his harassment of Fiona. When the Headmaster sees Dakin with Hector’s helmet, he tells Hector to take Irwin instead.',
      setting: 'The classroom at the end of term',
      who: ['Dakin', 'The Headmaster', 'Hector', 'Irwin'],
      themes: ['Desire, power and the abuse of trust'],
      tension: 4,
      significance:
        'One abuse of power is used to cover another, and the Headmaster’s instruction puts Irwin on the bike.',
    },
    {
      where: 'Act 2, after the crash',
      title: 'The crash',
      summary:
        'The motorbike crash is reported to the audience rather than shown. Hector is killed and Irwin is left using a wheelchair, and the meeting with Dakin never happens.',
      setting: 'The stage, in direct address',
      who: ['Hector', 'Irwin', 'Scripps', 'Dakin'],
      themes: ['Literature, memory and consolation', 'Desire, power and the abuse of trust'],
      tension: 5,
      significance:
        'The future shown in the opening scenes is explained, and the comedy gives way to loss.',
    },
    {
      where: 'Act 2, the memorial',
      title: 'Hector’s memorial',
      summary:
        'At Hector’s memorial service Mrs Lintott tells the audience what became of each boy: most have comfortable, respectable careers, and Posner, the one closest to Hector’s teaching, has not flourished.',
      setting: 'The school, at Hector’s memorial service',
      who: [
        'Mrs Lintott',
        'The Headmaster',
        'Posner',
        'Dakin',
        'Rudge',
        'Akthar',
        'Timms',
        'Scripps',
      ],
      themes: [
        'What education is for',
        'Class, ambition and Oxbridge',
        'Literature, memory and consolation',
      ],
      tension: 3,
      significance:
        'The play ends as history, told by its historian, and leaves the audience to judge what the boys’ education was for.',
    },
  ],

  relationships: [
    {
      from: 'Hector',
      to: 'Irwin',
      kind: 'rival teachers',
      note: 'They begin as opposites, poetry for life against technique for the exam, and are forced to share lessons. Their argument is the spine of the play, and the Headmaster ends it by putting them on the same motorbike.',
    },
    {
      from: 'Hector',
      to: 'Posner',
      kind: 'teacher and pupil',
      note: 'The Drummer Hodge scene is the play’s tenderest moment and its most uneasy: Hector recognises Posner’s loneliness through Hardy, and his outstretched hand hangs between comfort and something the audience now fears.',
    },
    {
      from: 'Hector',
      to: 'Dakin',
      kind: 'teacher and pupil',
      note: 'Dakin expects his turn on Hector’s bike, drifts towards Irwin, and finally uses his power over the Headmaster to save Hector’s job.',
    },
    {
      from: 'Irwin',
      to: 'Dakin',
      kind: 'teacher and admiring pupil',
      note: 'Dakin copies Irwin’s way of thinking and then pursues him. By Act 2 the pupil holds the power, and Irwin, the adult, agrees to a meeting that the crash prevents.',
    },
    {
      from: 'Posner',
      to: 'Dakin',
      kind: 'unrequited love',
      note: 'Posner loves Dakin, who knows, does not return it and dismisses it as a phase, though in his moment of triumph near the end he gives Posner a showy hug. Bennett plays it for comedy and for pain.',
    },
    {
      from: 'The Headmaster',
      to: 'Hector',
      kind: 'employer and employee',
      note: 'The Headmaster resents teaching he cannot measure and uses the discovery of Hector’s behaviour to push him out, while hiding his own harassment of Fiona.',
    },
    {
      from: 'The Headmaster',
      to: 'Mrs Lintott',
      kind: 'head and senior teacher',
      note: 'He praises her results and dismisses her methods; she answers with dry wit, and it is she, not he, who tells the story at the end.',
    },
    {
      from: 'The Headmaster',
      to: 'Irwin',
      kind: 'employer and hired coach',
      note: 'He hires Irwin to supply polish and results, and in the end sends him off on the back of Hector’s bike.',
    },
    {
      from: 'Mrs Lintott',
      to: 'Hector',
      kind: 'colleagues',
      note: 'Old colleagues who can speak plainly to each other; Mrs Lintott is the one who does not pretend about Hector’s behaviour.',
    },
    {
      from: 'Dakin',
      to: 'Fiona',
      kind: 'girlfriend, never seen',
      note: 'Dakin boasts about his pursuit of Fiona in the language of military campaigns. That she never appears says something about whose story the play tells.',
    },
    {
      from: 'The Headmaster',
      to: 'Fiona',
      kind: 'employer and secretary',
      note: 'His harassment of her is the secret Dakin uses against him.',
    },
    {
      from: 'Scripps',
      to: 'Dakin',
      kind: 'friends',
      note: 'Scripps, the religious boy, is Dakin’s confidant, hearing first about Fiona and then about Irwin.',
    },
    {
      from: 'Irwin',
      to: 'Posner',
      kind: 'teacher and pupil, later interviewer',
      note: 'Posner confides in Irwin at school; years later he returns as a would-be journalist wanting Irwin’s secret.',
    },
    {
      from: 'Akthar',
      to: 'Irwin',
      kind: 'pupil testing a new teacher',
      note: 'Akthar’s teasing in the scene about Hector’s lessons shows how the boys set out to unsettle Irwin before he wins them over.',
    },
  ],

  compareWith: [
    {
      title: 'An Inspector Calls',
      href: '/revision/texts/an-inspector-calls',
      reason:
        'Another Eduqas Section A play in which a teacher-like figure makes characters question what they have been taught, and a final twist changes how the audience sees everything before it.',
    },
    {
      title: 'Blood Brothers',
      href: '/revision/texts/blood-brothers',
      reason:
        'Also on the Eduqas list: young people whose chances are shaped by class and schooling, and a play that shows the audience the ending before the story that leads to it.',
    },
    {
      title: 'The Curious Incident of the Dog in the Night-Time',
      href: '/revision/texts/curious-incident',
      reason:
        'Another Eduqas play in which a teacher shapes how a young person understands the world, and in which the story is told partly in direct address.',
    },
  ],

  contentGuidance: [
    'intimate_relationships',
    'crime_injustice',
    'mortality',
    'discrimination',
    'violence',
    'mythological_religious',
  ],

  quotesFromElsewhere: [
    'a bit of a fraud',
    'an explanation of that and an expiation of it',
    'Stolen waters are sweet, and bread eaten in secret is pleasant',
  ],

  sources: [
    {
      label:
        'WJEC Eduqas GCSE English Literature Component 2 question paper, June 2017: extract of Hector’s first lesson (Act 1), used for every quotation from it and read for speaker positions',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/WJEC-England/Component-2/June%202017%20QP%20-%20Component%202%20Eduqas%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'WJEC Eduqas Component 2 question paper, June 2018: extract of Irwin’s First World War lesson (Act 1)',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/WJEC-England/Component-2/June%202018%20QP%20-%20Component%202%20Eduqas%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'WJEC Eduqas Component 2 question paper, June 2019: staff-room extract, the Headmaster and Mrs Lintott (Act 1)',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/WJEC-England/Component-2/June%202019%20QP%20-%20Component%202%20Eduqas%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'WJEC Eduqas Component 2 question paper, October 2020: the Headmaster confronts Hector (Act 1), including Mrs Armstrong and the charity shop',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/WJEC-England/Component-2/October%202020%20QP%20-%20Component%202%20Eduqas%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'WJEC Eduqas Component 2 question paper, June 2023: Hector and Irwin argue about gobbets (Act 1)',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/WJEC-England/Component-2/June%202023%20QP%20-%20Component%202%20Eduqas%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'WJEC Eduqas Component 2 question paper, June 2024 (C720U20-1): the Drummer Hodge scene at the end of Act 1, and the question on Hector used for the model answer',
      url: 'https://pastpapers.download.wjec.co.uk/S24/S24-C720U20-1.pdf',
    },
    {
      label:
        'WJEC Eduqas Component 2 question paper, June 2025 (C720U20-1): Irwin’s first lesson (Act 1)',
      url: 'https://pastpapers.download.wjec.co.uk/S25/S25-C720U20-1.pdf',
    },
    {
      label:
        'WJEC Eduqas GCSE English Literature Specimen Assessment Materials (2015): extract of the boys describing Hector’s lessons to Irwin, and the specimen mark scheme (the adult Posner, the ironic repetitions of “sir”)',
      url: 'https://www.wjec.co.uk/media/35mh4vb2/eduqas-gcse-english-literature-sams-from-2015.pdf',
    },
    {
      label:
        'WJEC Eduqas Component 2 mark schemes, June 2017, 2018, 2019, 2023 and 2024: indicative content for The History Boys (stage directions, structure and time frame, Hector’s inappropriate behaviour)',
      url: 'https://pmt.physicsandmathstutor.com/download/English-Literature/GCSE/Past-Papers/WJEC-England/Component-2/June%202024%20MS%20-%20Component%202%20Eduqas%20English%20Literature%20GCSE.pdf',
    },
    {
      label:
        'WJEC Eduqas GCSE English Literature specification, Version 4 (August 2024): Component 2 Section A, closed book, source-based, what the section assesses, and the note on adult themes and language',
      url: 'https://www.eduqas.co.uk/qualifications/english-literature-gcse/',
    },
    {
      label:
        'Eduqas GCSE English Literature Examiners’ Report, Summer 2024: The History Boys (answers not reaching the ending, swear words in weaker answers, sensitive comment on Hector)',
      url: 'https://www.eduqas.co.uk/umbraco/surface/blobstorage/download?nodeId=53198',
    },
    {
      label:
        'Eduqas GCSE English Literature Examiners’ Report, Summer 2025: The History Boys (Irwin, prolepsis, film references)',
      url: 'https://www.eduqas.co.uk/media/tbdhukmq/eduqas-gcse-english-literature-s25-e.pdf',
    },
    {
      label:
        'Faber, The History Boys by Alan Bennett: A Study Guide (Andrew Bruff, 2024): plot summary, General Studies, and three quotations with Faber page numbers',
      url: 'https://www.faber.co.uk/journal/the-history-boys-by-alan-bennett-a-study-guide/',
    },
    {
      label:
        'NPR, report on the Broadway transfer, 23 April 2006: Bennett on his own scholarship method and the play as an expiation; the Housman line in performance',
      url: 'https://www.npr.org/2006/04/23/5357884',
    },
    {
      label:
        'GradeSaver, The History Boys study guide (Lee and Boghani, 2015): act-by-act summaries and quotations with Faber page numbers, used for Act 2 plot detail and never alone for a quotation',
      url: 'https://www.gradesaver.com/the-history-boys/study-guide/summary',
    },
    {
      label:
        'GradeSaver, The History Boys Quotes and Analysis (compared against the Eduqas extracts)',
      url: 'https://www.gradesaver.com/the-history-boys/study-guide/quotes',
    },
    {
      label:
        'StageAgent, Mrs Lintott’s monologue, citing the Farrar, Straus and Giroux edition (Act 2): second source for the bucket line',
      url: 'https://stageagent.com/monologues/6892/the-history-boys/mrs-lintott',
    },
    {
      label:
        'Wikipedia, The History Boys: premiere (Lyttelton, 18 May 2004), director, awards, cast list and first edition (Faber, 2004)',
      url: 'https://en.wikipedia.org/wiki/The_History_Boys',
    },
    {
      label:
        'Wikipedia, Alan Bennett: birth, family, schooling, national service, Exeter College, Magdalen, Beyond the Fringe, Talking Heads, the Lawnswood School remark',
      url: 'https://en.wikipedia.org/wiki/Alan_Bennett',
    },
    {
      label:
        'Wikipedia, The History Boys (film): the film’s plot, its changes to the ending and its cuts, used only to warn against film-only detail and to corroborate Act 2 events it shares with the play',
      url: 'https://en.wikipedia.org/wiki/The_History_Boys_(film)',
    },
    {
      label:
        'AQA GCSE English Literature specification (8702): The History Boys listed among the modern drama texts, last examined 2024. (The Headmaster’s first name, Felix, is confirmed by Faber’s study guide, which quotes Dakin’s line about him, and by GradeSaver.)',
      url: 'https://filestore.aqa.org.uk/resources/english/specifications/AQA-8702-SP-2015.PDF',
    },
    {
      label:
        'Faber, The History Boys: Abridged GCSE and A Level study guide by Andrew Bruff (PDF, 2024), read in full: plot summary, the stage direction placing the play in a boys’ school in the north of England in the eighties, Hector as the English teacher given General Studies, the time gaps of about fifteen and five years, the memorial service, the offstage women, and Scripps narrating the crash',
      url: 'https://web.archive.org/web/2024id_/https://static.faber.co.uk/wp-content/uploads/2024/04/History-Boys-Abridged-Education-Edition-A4-V5.pdf',
    },
    {
      label:
        'LitCharts, The History Boys Act 1 and Act 2 summaries: scene order, Posner’s and Hector’s objections in the Holocaust lesson, the Headmaster telling Hector to take Irwin, the narrated crash, and the boys’ futures (cross-checked against GradeSaver; no quotation taken from it alone)',
      url: 'https://www.litcharts.com/lit/the-history-boys/act-2',
    },
    {
      label:
        'The Guardian, interview with Niall Ferguson, 11 April 2011: the claim that the character of Irwin is modelled on Ferguson',
      url: 'https://www.theguardian.com/books/2011/apr/11/niall-ferguson-political-debate-england-america',
    },
    {
      label:
        'WJEC Eduqas GCSE English Literature specification (PDF): the prescribed list, the closed-book rule and the note that the play deals with adult themes and / or language',
      url: 'https://www.eduqas.co.uk/media/ryylno20/gcse-english-literature-specification.pdf',
    },
    {
      label:
        'Philip Fisher, review of The History Boys at the National Theatre (British Theatre Guide, 2004): consulted on the framing scenes; its time gap disagrees with Faber’s, so no figure is given',
      url: 'https://www.britishtheatreguide.info/reviews/historyboys-rev',
    },
    {
      label:
        'G. Leckie and H. Goldstein, The evolution of school league tables in England 1992-2016, British Educational Research Journal (2017): league tables published since 1992, and their origins in the 1980, 1988 and 1992 Acts',
      url: 'https://www.bristol.ac.uk/media-library/sites/cmm/migrated/documents/Leckie_and_Goldstein-2017-British_Educational_Research_Journal.pdf',
    },
    {
      label: 'GOV.UK, Past Prime Ministers: Margaret Thatcher, 1979 to 1990',
      url: 'https://www.gov.uk/government/history/past-prime-ministers/margaret-thatcher',
    },
    {
      label:
        'Project Gutenberg, The King James Bible: Proverbs 9:17 and Deuteronomy 30:19, the sources of Hector’s allusions',
      url: 'https://www.gutenberg.org/ebooks/10',
    },
    {
      label:
        'Project Gutenberg, A. E. Housman, A Shropshire Lad: Loveliest of trees, and On Wenlock Edge',
      url: 'https://www.gutenberg.org/ebooks/5720',
    },
    {
      label:
        'Project Gutenberg, Thomas Hardy, Poems of the Past and the Present: The Dead Drummer (Drummer Hodge), among the War Poems of 1899',
      url: 'https://www.gutenberg.org/ebooks/3168',
    },
    {
      label: 'Project Gutenberg, Shakespeare, Coriolanus: There is a world elsewhere',
      url: 'https://www.gutenberg.org/ebooks/1535',
    },
    {
      label:
        'Project Gutenberg, Shakespeare, Love’s Labour’s Lost: Armado’s closing lines, which Hector quotes at the end of Act 1',
      url: 'https://www.gutenberg.org/ebooks/1510',
    },
    {
      label:
        'Othello, Act 5 Scene 2, in the edition held at src/data/full-texts/othello.ts: Othello’s despair, which Hector quotes in his first lesson',
    },
    {
      label: 'Wiktionary: gobbet, pillion and prolepsis (definitions for the vocabulary)',
      url: 'https://en.wiktionary.org/wiki/gobbet',
    },
  ],
}
