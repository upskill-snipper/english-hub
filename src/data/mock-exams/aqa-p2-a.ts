// @ts-nocheck

/**
 * WHAT WAS WRONG (found 26 September 2026 by
 * scripts/check-mock-exam-extracts.mjs, fixed 27 September). These five
 * papers are live: allMockExamPapers serves them. Each pairs a modern
 * Source A with a nineteenth-century Source B, and every Source B was
 * invented, then labelled as the published words of a real Victorian:
 *   - James Greenwood, "A Night in a Workhouse", Pall Mall Gazette, 1866;
 *   - Matthew Arnold, Reports on Elementary Schools, 1869;
 *   - Thomas Huxley, a lecture "On the Progress of Science", 1871;
 *   - Harriet Martineau, "On the Education of Women", Edinburgh Review, 1859;
 *   - Charles Dickens, "On the Demolition of St Giles", Household Words, 1856.
 * Not one of their 51 sentences is in any of the eighteen Project
 * Gutenberg volumes by these five writers in the checker's cache, and
 * only two runs of six words are. The model answers then quoted the
 * invented lines back as the writers' own ("rational men responding to
 * irrational incentives", "a fire to be kindled", "a price worth paying",
 * a caged-bird analogy and "the paradox of our age"), so a student
 * revising from them would have learned quotations Arnold, Huxley,
 * Martineau and Dickens never wrote.
 *
 * The Source A labels were false in a different way. Each named a writer
 * and a real newspaper (The Observer twice, the New Statesman, the
 * Telegraph, the Guardian) for an article that no search on 27 September
 * found; the passages were written for this file, and the names could
 * belong to real journalists who never wrote them. The answers argued with
 * those people by name.
 *
 * The answers also misread the passages as printed. Every Question 1 had
 * five true statements for a four-mark question, and its answers said so
 * ("H is also true") while still choosing four. Paper 3's Question 3
 * answer cited "percentages (70%, 62%)" and "the paradox is stark",
 * neither of which is in the text; paper 5's quoted "standing at the
 * fence" and "decided in a boardroom" (the text says "stood" and "made");
 * paper 1's joined David's words across "he told me" and cut "have been"
 * out of "have been cut" without marking either cut; paper 2's called
 * three verbs four and a relative clause a parenthetical; paper 5's called
 * plain repetition polyptoton.
 *
 * WHAT IT IS NOW. Each Source B is a genuine passage by the same writer,
 * on the same subject, cut by script from the Project Gutenberg text
 * (scripts/check-mock-exam-extracts.mjs caches them) and never retyped:
 *   - Greenwood, The Seven Curses of London (1869), #45585, Chapter XXIII:
 *     the paragraph on how the "casual pauper" was treated as worse than a
 *     thief. The 1866 article itself is not on Gutenberg.
 *   - Arnold, "Literature and Science", Discourses in America (1885),
 *     #44919: six consecutive paragraphs, from "Let us therefore" to "the
 *     other way", with the training-college paraphrase he says he first
 *     gave in a school-report. His reports are not on Gutenberg.
 *   - Huxley, The Advance of Science in the Last Half-Century (New York,
 *     1889), #15253, an essay on 1837 to 1887: its first two paragraphs,
 *     without the printer's marginal note between them.
 *   - Martineau, Household Education (1849), #38179, Chapter XXI on female
 *     education: the paragraph beginning "As for women not wanting
 *     learning". At over 500 words it is the longest source here, but it
 *     is a single paragraph, printed whole rather than cut.
 *   - Dickens, "On Duty with Inspector Field", Household Words (1851), in
 *     Reprinted Pieces, #872: four consecutive paragraphs in a St Giles
 *     lodging-house, ending "Thus, we make our New Oxford Streets ...
 *     never asking, where the wretches whom we clear out, crowd."
 * Each Source A keeps its title and is labelled as what it is, specially
 * written for this paper; the answers call its author "the writer of
 * Source A". One sentence of paper 3's Source A changed (see the second
 * pass below); the other four keep their text. Every Question 1 now has
 * exactly four true statements. The Question 2 and Question 4 answers are
 * rewritten for the new sources, the Question 3 answers corrected, and
 * every quotation in them was checked by script against its extract.
 * Huxley's essay says nothing about young people, so paper 3's Questions
 * 2 and 4 now ask about what new technology does to people rather than to
 * the young. The writing tasks, Question 5, are unchanged.
 *
 * SECOND PASS (27 September, an adversarial review of the fix above). The
 * rewritten answers still misread a few words, and the review changed:
 *   - paper 3's Source A said "A landmark study published by the
 *     University of Oxford in 2024" found screens harm attention and
 *     reading. The passage was written for this file, nothing identifies
 *     the study, and a student answering paper 3's Question 5 (on banning
 *     phones) could cite it as a real university's finding. It now says
 *     "One large study";
 *   - paper 3's Question 3 answers called "using technology and being used
 *     by it" chiasmus, but its words do not reverse (use, technology; used,
 *     it): the verb turns from active to passive, which they now say;
 *   - paper 3's Question 2 asks only for differences, and both answers
 *     spent a sentence on a similarity; one also said Source A fears that
 *     technology "isolates" when Source A praises its "connection across
 *     distances". Paper 3's Question 4 answers said Huxley mentions no
 *     problems and "concedes nothing": he names pestilence, famine and
 *     anarchy as problems solved, and concedes that science is not a
 *     Victorian invention. They now say he admits no harm or drawback;
 *   - paper 5's answers said Dickens mocks "the authorities'" and
 *     "officials'" Red Tape, but he writes "our" throughout: he blames the
 *     nation, his readers included. Paper 1's said Greenwood's pauper chose
 *     "hunger over theft"; he chose the parish loaf over theft;
 *   - thirty full stops and commas sat inside quotation marks where the
 *     writer's sentence goes on ("reaching for her phone." among them),
 *     and now sit outside, as British practice has it;
 *   - smaller slips: "argumentum ad exemplum" (not a standard term),
 *     "women were once maintained by her father", "men of science" for
 *     Arnold's single President of a Section.
 * A second, independent script matched every Source B against the cached
 * Gutenberg text as one unbroken span (Huxley's two paragraphs apart from
 * the 56-character sidenote between them), and found every quotation in
 * every answer and mark scheme, of any length, in its question's extract;
 * the only exceptions are five quoted words that are glosses, not
 * quotations ("diminished", "converted", "not at all", and Question 5's
 * "progress" and "change").
 *
 * KNOWN GAPS. Paper 3's Source A gives a daily phone time for "The
 * average British teenager", and the other Source A passages give figures
 * (300,000 without a permanent home, a 14.3 per cent pay gap); none was
 * checked here. Huxley's first sentence reads "features ... is", as
 * Gutenberg #15253 prints it; the Collected Essays text may read
 * "feature", which was not checked. Dickens renders the Irish lodgers'
 * speech in dialect and compares them to "maggots in a cheese": that is
 * the text as he published it, and the Question 4 answer invites students
 * to question it.
 */

import type { MockExamPaper } from './types'

// ─── Source Texts ──────────────────────────────────────────────────────────────

// Exam 01: Poverty & Homelessness
const EXAM_01_SOURCE_A = `Walk through any British city centre after midnight and you will see them: figures huddled in doorways, wrapped in sleeping bags that offer little protection against the biting wind. Last January, I spent a week volunteering with a street outreach team in Manchester, and what I witnessed fundamentally changed my understanding of homelessness. It is not, as comfortable narratives suggest, a matter of poor choices. It is a matter of systems failing the people they were designed to protect.

On our first night, we met David, a forty-three-year-old former electrician who had been sleeping rough for eight months. He had lost his job after a back injury, fallen behind on rent, and been evicted within six weeks. The speed of his descent was breathtaking. "One day you're paying taxes," he told me, "the next you're invisible." That word - invisible - came up again and again in our conversations with rough sleepers. Not forgotten. Invisible. As though they had ceased to exist entirely.

The government's own figures reveal the scale of the crisis: over 300,000 people in England are currently without a permanent home. Temporary accommodation costs taxpayers over one billion pounds annually - money spent managing a crisis rather than preventing one. Meanwhile, mental health services have been cut by twenty-three per cent in real terms since 2010, and social housing waiting lists stretch to over a million households. We are not merely failing to solve this problem. We are actively manufacturing it.`

const EXAM_01_SOURCE_A_REF =
  'An article, "Sleeping on the Streets of Britain", specially written for this paper'

// Project Gutenberg #45585, the paragraph beginning "It is to be hoped", cut
// by script, never retyped.
const EXAM_01_SOURCE_B = `It is to be hoped that we are gradually emerging from our bemuddlement; but time was, and that at no very remote period, when to be poor and houseless and hungry were accounted worse sins against society than begging or stealing, even - that is to say, if we may judge from the method of treatment in each case pursued; for while the ruffian who lay wait for you in the dark, and well-nigh strangled you for the sake of as much money as you might chance to have in your pocket, or the brute who precipitated his wife from a third-floor window, claimed and was entitled to calm judicial investigation into the measure of his iniquity and its deserving, the poor fellow who became a casual pauper out of sheer misfortune and hard necessity was without a voice or a single friend. The pig-headed Jack-in-office, whom the ratepayers employed and had confidence in, had no mercy for him. They never considered that it was because he preferred to stave off the pangs of hunger by means of a crust off a parish loaf rather than dine on stolen roast beef, that he came knocking at the workhouse-gate, craving shelter and a mouthful of bread! But one idea pervaded the otherwise empty region that Bumble's cocked-hat covered, and that was, that the man who would beg a parish loaf was more mean and contemptible than the one who, with a proper and independent spirit, as well as a respect for the parochial purse, stole one; and he treated his victim accordingly.`

const EXAM_01_SOURCE_B_REF =
  'James Greenwood, The Seven Curses of London (1869), from Chapter XXIII, "Metropolitan Pauperism"'

// Exam 02: Education Reform
const EXAM_02_SOURCE_A = `Our education system is broken - and we all know it. Every autumn, a fresh cohort of five-year-olds enters school bright-eyed and bursting with curiosity, and every summer, a generation of sixteen-year-olds leaves drained, anxious, and convinced that their worth as human beings can be reduced to a string of numbers on a results slip. Somewhere between those two points, something goes catastrophically wrong.

The problem is not our teachers, who are among the most dedicated professionals in the country and who work, on average, fifty-four hours per week for salaries that would make a city banker laugh. The problem is a system that has become so obsessed with measurement that it has forgotten what it is supposed to be measuring. We test children at seven, at eleven, at sixteen, and at eighteen. We rank them, grade them, sort them into sets, and then express surprise when they develop anxiety disorders at twice the rate of previous generations.

I am not arguing against standards. I am arguing against a definition of standards so narrow that it excludes creativity, critical thinking, collaboration, and emotional intelligence - the very skills that employers consistently tell us they value most. Finland, which routinely tops international education rankings, does not test its children until they are sixteen. Its teachers are trusted professionals, not data-entry clerks. Its students are among the happiest in Europe. There is another way.`

const EXAM_02_SOURCE_A_REF = 'An article, "The Exam Factory", specially written for this paper'

// Project Gutenberg #44919, six consecutive paragraphs, from "Let us therefore,
// all of us" to "the other way", cut by script, never retyped.
const EXAM_02_SOURCE_B = `Let us therefore, all of us, avoid indeed as much as possible any invidious comparison between the merits of humane letters, as means of education, and the merits of the natural sciences. But when some President of a Section for Mechanical Science insists on making the comparison, and tells us that 'he who in his training has substituted literature and history for natural science has chosen the less useful alternative,' let us make answer to him that the student of humane letters only, will, at least, know also the great general conceptions brought in by modern physical science; for science, as Professor Huxley says, forces them upon us all. But the student of the natural sciences only, will, by our very hypothesis, know nothing of humane letters; not to mention that in setting himself to be perpetually accumulating natural knowledge, he sets himself to do what only specialists have in general the gift for doing genially. And so he will probably be unsatisfied, or at any rate incomplete, and even more incomplete than the student of humane letters only.

I once mentioned in a school-report, how a young man in one of our English training colleges having to paraphrase the passage in Macbeth beginning,

'Can'st thou not minister to a mind diseased?'

turned this line into, 'Can you not wait upon the lunatic?' And I remarked what a curious state of things it would be, if every pupil of our national schools knew, let us say, that the moon is two thousand one hundred and sixty miles in diameter, and thought at the same time that a good paraphrase for

'Can'st thou not minister to a mind diseased?'

was, 'Can you not wait upon the lunatic?' If one is driven to choose, I think I would rather have a young person ignorant about the moon's diameter, but aware that 'Can you not wait upon the lunatic?' is bad, than a young person whose education had been such as to manage things the other way.`

const EXAM_02_SOURCE_B_REF =
  'Matthew Arnold, "Literature and Science", a lecture first given at Cambridge and recast for American audiences, from Discourses in America (1885)'

// Exam 03: Technology Impact
const EXAM_03_SOURCE_A = `Last Tuesday, I watched my fourteen-year-old daughter attempt to read a novel. She managed three pages before reaching for her phone, scrolling through notifications for ten minutes, then returning to the book - only to re-read the same paragraph she had already finished. This is not laziness. This is what technology has done to the adolescent brain, and we need to talk about it honestly rather than pretending that everything is fine.

The evidence is now overwhelming. One large study found that teenagers who spend more than three hours daily on screens show measurably reduced attention spans, lower reading comprehension scores, and significantly higher rates of anxiety and depression. The average British teenager spends four hours and twenty-two minutes on their phone each day. That is not a statistic. That is nearly a third of their waking life surrendered to an algorithm designed not to inform or educate but to addict.

I am not a Luddite calling for the smashing of machines. Technology has brought extraordinary benefits - access to information, connection across distances, creative tools that previous generations could not have imagined. But there is a difference between using technology and being used by it, and our children are overwhelmingly on the wrong side of that distinction. We owe them boundaries, not because we fear progress, but because we understand that a childhood consumed by screens is a childhood only partially lived.`

const EXAM_03_SOURCE_A_REF =
  'An article, "Screen-Bound: The Silent Crisis in Our Homes", specially written for this paper'

// Project Gutenberg #15253, the essay's first two paragraphs, cut by script,
// never retyped; the printer's marginal note between them is left out.
const EXAM_03_SOURCE_B = `The most obvious and the most distinctive features of the History of Civilisation, during the last fifty years, is the wonderful increase of industrial production by the application of machinery, the improvement of old technical processes and the invention of new ones, accompanied by an even more remarkable development of old and new means of locomotion and intercommunication. By this rapid and vast multiplication of the commodities and conveniences of existence, the general standard of comfort has been raised, the ravages of pestilence and famine have been checked, and the natural obstacles, which time and space offer to mutual intercourse, have been reduced in a manner, and to an extent, unknown to former ages. The diminution or removal of local ignorance and prejudice, the creation of common interests among the most widely separated peoples, and the strengthening of the forces of the organisation of the commonwealth against those of political or social anarchy, thus effected, have exerted an influence on the present and future fortunes of mankind the full significance of which may be divined, but cannot, as yet, be estimated at its full value.

This revolution - for it is nothing less - in the political and social aspects of modern civilisation has been preceded, accompanied, and in great measure caused, by a less obvious, but no less marvellous, increase of natural knowledge, and especially of that part of it which is known as Physical Science, in consequence of the application of scientific method to the investigation of the phenomena of the material world. Not that the growth of physical science is an exclusive prerogative of the Victorian age. Its present strength and volume merely indicate the highest level of a stream which took its rise, alongside of the primal founts of Philosophy, Literature, and Art, in ancient Greece; and, after being dammed up for a thousand years, once more began to flow three centuries ago.`

const EXAM_03_SOURCE_B_REF =
  'Thomas Henry Huxley, the opening of an essay on the progress of science from 1837 to 1887, as printed in The Advance of Science in the Last Half-Century (New York, 1889)'

// Exam 04: Gender Equality
const EXAM_04_SOURCE_A = `When my daughter told me she wanted to be an engineer, her primary school teacher smiled indulgently and suggested she might also like to consider teaching or nursing. My daughter was six years old. She had not yet learned that society had opinions about which ambitions were appropriate for her, but she was about to. That moment - that gentle, well-meaning, devastating redirection - encapsulates everything that is still wrong with gender equality in Britain.

We like to congratulate ourselves on how far we have come. Women can vote, own property, pursue careers, and run for office. These are genuine achievements, won through generations of struggle. But equality in law is not equality in practice. The gender pay gap in the UK remains at 14.3 per cent. Women hold only eight per cent of FTSE 100 CEO positions. Two women a week are killed by a current or former partner. These statistics do not describe a society that has achieved equality. They describe a society that has achieved the comfortable illusion of equality.

The most insidious form of inequality is the one that operates through expectation rather than prohibition. No law prevents my daughter from becoming an engineer. But a thousand small signals - the gendered toys, the classroom assumptions, the media representations, the well-meaning teacher suggesting nursing - combine to create an invisible architecture of limitation that is all the more powerful for being unacknowledged.`

const EXAM_04_SOURCE_A_REF =
  'An article, "The Glass Ceiling Starts at Six", specially written for this paper'

// Project Gutenberg #38179, the paragraph beginning "As for women not wanting
// learning", cut by script, never retyped.
const EXAM_04_SOURCE_B = `As for women not wanting learning, or superior intellectual training, that is more than any one should undertake to say in our day. In former times, it was understood that every woman, (except domestic servants) was maintained by her father, brother or husband; but it is not so now. The footing of women is changed, and it will change more. Formerly, every woman was destined to be married; and it was almost a matter of course that she would be: so that the only occupation thought of for a woman was keeping her husband's house, and being a wife and mother. It is not so now. From a variety of causes, there is less and less marriage among the middle classes of our country; and much of the marriage that there is does not take place till middle life. A multitude of women have to maintain themselves who would never have dreamed of such a thing a hundred years ago. This is not the place for a discussion whether this is a good thing for women or a bad one; or for a lamentation that the occupations by which women might maintain themselves are so few; and of those few, so many engrossed by men. This is not the place for a speculation as to whether women are to grow into a condition of self-maintenance, and their dependence for support upon father, brother and husband to become only occasional. With these considerations, interesting as they are, we have no business at this moment. What we have to think of is the necessity, - in all justice, in all honour, in all humanity, in all prudence, - that every girl's faculties should be made the most of, as carefully as boys'. While so many women are no longer sheltered, and protected, and supported, in safety from the world (as people used to say) every woman ought to be fitted to take care of herself. Every woman ought to have that justice done to her faculties that she may possess herself in all the strength and clearness of an exercised and enlightened mind, and may have at command, for her subsistence, as much intellectual power and as many resources as education can furnish her with. Let us hear nothing of her being shut out, because she is a woman, from any study that she is capable of pursuing: and if one kind of cultivation is more carefully attended to than another, let it be the discipline and exercise of the reasoning faculties. From the simplest rules of arithmetic let her go on, as her brother does, as far into the depths of science, and up to the heights of philosophy as her powers and opportunities permit; and it will certainly be found that the more she becomes a reasoning creature, the more reasonable, disciplined and docile she will be: the more she knows of the value of knowledge and of all other things, the more diligent she will be; - the more sensible of duty, - the more interested in occupations, - the more womanly. This is only coming round to the points we started from; that every human being is to be made as perfect as possible: and that this must be done through the most complete development of all the faculties.`

const EXAM_04_SOURCE_B_REF =
  'Harriet Martineau, Household Education (1849), from Chapter XXI, "The Reasoning Faculties. Female Education"'

// Exam 05: Urban Development
const EXAM_05_SOURCE_A = `They are building a shopping centre where the community garden used to be. I know this because I watched the diggers arrive on a Monday morning in March, their caterpillar tracks churning the soil that, just days earlier, had held the first crocuses of spring. Margaret Chen, who is seventy-eight and has tended a plot there for thirty-one years, stood at the fence with her hands in her pockets and said nothing. There was nothing to say. The decision had been made in a boardroom, by people who had never set foot in the garden, and no amount of petitions or protests had altered it.

This is how modern urban development works. A piece of land is identified, its commercial value calculated, and its human value - the memories, the relationships, the community it sustained - is dismissed as sentimental. The shopping centre will create three hundred jobs, we are told, mostly minimum-wage, mostly zero-hours, mostly performed by people who would rather have kept their allotments. It will generate business rates for the council. It will attract shoppers from surrounding areas. These are the metrics that matter, apparently. The fact that Margaret Chen's mental health has measurably deteriorated since losing her garden does not appear on any spreadsheet.

We have become a society that knows the price of everything and the value of nothing, to borrow Wilde's devastating formulation. Our cities are being redesigned not for the people who live in them but for the money that flows through them, and the consequence is a landscape of identikit retail parks, luxury apartment blocks, and artisan coffee shops where communities used to be.`

const EXAM_05_SOURCE_A_REF =
  'An article, "Concrete Over Community", specially written for this paper'

// Project Gutenberg #872, four consecutive paragraphs, from "Saint Giles's
// church clock" to "Red Tape", cut by script, never retyped.
const EXAM_05_SOURCE_B = `Saint Giles's church clock, striking eleven, hums through our hand from the dilapidated door of a dark outhouse as we open it, and are stricken back by the pestilent breath that issues from within. Rogers to the front with the light, and let us look!

Ten, twenty, thirty - who can count them! Men, women, children, for the most part naked, heaped upon the floor like maggots in a cheese! Ho! In that dark corner yonder! Does anybody lie there? Me sir, Irish me, a widder, with six children. And yonder? Me sir, Irish me, with me wife and eight poor babes. And to the left there? Me sir, Irish me, along with two more Irish boys as is me friends. And to the right there? Me sir and the Murphy fam'ly, numbering five blessed souls. And what's this, coiling, now, about my foot? Another Irish me, pitifully in want of shaving, whom I have awakened from sleep - and across my other foot lies his wife - and by the shoes of Inspector Field lie their three eldest - and their three youngest are at present squeezed between the open door and the wall. And why is there no one on that little mat before the sullen fire? Because O'Donovan, with his wife and daughter, is not come in from selling Lucifers! Nor on the bit of sacking in the nearest corner? Bad luck! Because that Irish family is late to-night, a-cadging in the streets!

They are all awake now, the children excepted, and most of them sit up, to stare. Wheresoever Mr. Rogers turns the flaming eye, there is a spectral figure rising, unshrouded, from a grave of rags. Who is the landlord here? - I am, Mr. Field! says a bundle of ribs and parchment against the wall, scratching itself. - Will you spend this money fairly, in the morning, to buy coffee for 'em all? - Yes, sir, I will! - O he'll do it, sir, he'll do it fair. He's honest! cry the spectres. And with thanks and Good Night sink into their graves again.

Thus, we make our New Oxford Streets, and our other new streets, never heeding, never asking, where the wretches whom we clear out, crowd. With such scenes at our doors, with all the plagues of Egypt tied up with bits of cobweb in kennels so near our homes, we timorously make our Nuisance Bills and Boards of Health, nonentities, and think to keep away the Wolves of Crime and Filth, by our electioneering ducking to little vestrymen and our gentlemanly handling of Red Tape!`

const EXAM_05_SOURCE_B_REF =
  'Charles Dickens, "On Duty with Inspector Field", Household Words (1851), as collected in Reprinted Pieces'

// ─── Mock Exam Papers ──────────────────────────────────────────────────────────

export const aqaP2A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 01 - Poverty & Homelessness
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-01',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-01-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_01_SOURCE_A_REF}\nSource B: ${EXAM_01_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-01-q1',
            questionNumber: 1,
            questionText:
              "Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer volunteered with a street outreach team.\nB) The writer spent a month in Manchester.\nC) Figures were huddled in doorways.\nD) Sleeping bags offered strong protection.\nE) The outreach work took place in the summer.\nF) The writer's understanding of homelessness changed.\nG) The writer blames poor personal choices for homelessness.\nH) The wind was described as biting.",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_01_SOURCE_A}\n\nSource B:\n${EXAM_01_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_01_SOURCE_A_REF} | Source B: ${EXAM_01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, F, H - A: "I spent a week volunteering with a street outreach team". C: "figures huddled in doorways". F: "fundamentally changed my understanding of homelessness." H: "the biting wind." B is false (a week, not a month). D is false (they offered "little protection"). E is false (it was "Last January"). G is false (the writer says it is not "a matter of poor choices").',
              'Grade 6-7':
                'A, C, F, H. B is false: the writer spent "a week", not a month. D is contradicted by "little protection". E is false: the work took place "Last January", in winter. G is refuted directly: homelessness is "not, as comfortable narratives suggest, a matter of poor choices."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks deducted for incorrect selections beyond four',
            ],
          },
          {
            id: 'aqa-p2-01-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the conditions experienced by homeless people in each source.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_01_SOURCE_A}\n\nSource B:\n${EXAM_01_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_01_SOURCE_A_REF} | Source B: ${EXAM_01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both sources show homeless people living in hard conditions. In Source A, people sleep outside, "huddled in doorways" in sleeping bags that give "little protection against the biting wind". In Source B, the homeless man is "poor and houseless and hungry" and has to come "knocking at the workhouse-gate, craving shelter and a mouthful of bread". Both writers show that homeless people are ignored or treated badly by others. David in Source A says that once he lost his home he became "invisible", and the man in Source B "was without a voice or a single friend". A difference is that the man in Source B is treated as if he were worse than a criminal: the official in charge thinks a man who begs for bread is "more mean and contemptible" than one who steals it. In Source A, David ended up on the streets after an injury and eviction, while the man in Source B has fallen "out of sheer misfortune and hard necessity".',
              'Grade 6-7':
                'Both writers present homelessness as a condition of exposure and need, though the settings differ: the writer of Source A describes rough sleepers outdoors, "huddled in doorways" with "little protection against the biting wind", while Greenwood\'s casual pauper has reached the workhouse, "knocking at the workhouse-gate, craving shelter and a mouthful of bread". Both insist that the people they describe did not choose their condition. The writer of Source A rejects the "comfortable narratives" of "poor choices" and traces David\'s fall through injury, debt and eviction; Greenwood\'s man became a pauper "out of sheer misfortune and hard necessity", and chose to beg rather than steal: he preferred "a crust off a parish loaf" to "stolen roast beef". Both also suggest that the worst of the condition is how others see these people. David says he became "invisible"; Greenwood\'s pauper "was without a voice or a single friend". The difference lies in who is to blame. In Source A it is "systems" and government spending that fail people. In Source B it is the workhouse official Greenwood calls Bumble, after the beadle in Dickens\'s Oliver Twist: a "pig-headed Jack-in-office" who treats a hungry man as worse than a thief, so that the homeless are not only ignored but punished.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear similarities and/or differences in conditions',
              'Uses evidence from both texts to support points',
              'Synthesises information rather than alternating between texts',
              'Infers beyond surface-level details',
              'Top band: perceptive synthesis with judicious references',
            ],
          },
          {
            id: 'aqa-p2-01-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to convey the urgency of the homelessness crisis?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_01_SOURCE_A}`,
            extractSource: EXAM_01_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses strong language to show how serious homelessness is. The phrase "biting wind" uses personification to make the cold seem aggressive. Statistics like "300,000 people" and "one billion pounds" shock the reader with the scale of the problem. The direct quotation from David, who says that one day "you\'re paying taxes" and the next "you\'re invisible", makes the problem personal and real. The writer uses repetition of "invisible" to emphasise how society ignores homeless people. At the end, the sentence "We are actively manufacturing it" is powerful because "manufacturing" suggests the crisis is being produced deliberately.',
              'Grade 6-7':
                'The writer deploys a multi-layered rhetorical strategy that moves from sensory immediacy to statistical authority to moral accusation. The opening imperative - "Walk through any British city centre after midnight" - positions the reader as witness, making the crisis inescapable. The phrase "little protection against the biting wind" combines understatement ("little") with personification ("biting") to create a visceral sense of vulnerability. The anecdote of David is rhetorically precise: his former occupation as an "electrician" establishes respectability, while the temporal compression "lost his job... fallen behind on rent... been evicted within six weeks" uses the tricolon to dramatise the speed of descent. David\'s word "invisible" is emphasised through repetition - "Not forgotten. Invisible" - the sentence fragments forcing a distinction that redefines the problem from neglect to erasure. The final paragraph\'s statistics ("300,000", "one billion pounds", "twenty-three per cent") accumulate as an indictment, but the most devastating technique is the concluding antithesis: "managing a crisis rather than preventing one" and "We are not merely failing to solve this problem. We are actively manufacturing it." The verb "manufacturing" transforms government policy from passive neglect to deliberate production, converting a social tragedy into a political crime.',
              'Grade 8-9':
                'The writer constructs urgency through a rhetorical architecture that systematically closes every exit the reader might use to avoid engagement. The opening second-person imperative - "Walk through any British city centre after midnight and you will see them" - is not an invitation but a confrontation: the future tense "you will see" presents the crisis as an inevitability the reader must face. The pronoun "them" is deliberately dehumanising, before the subsequent phrase "figures huddled in doorways" restores specificity - this oscillation between abstraction and detail is a technique the writer uses throughout to prevent emotional distance. David\'s testimony operates as a rhetorical centrepiece: the antithetical structure of "One day you\'re paying taxes" and "the next you\'re invisible" compresses a life\'s catastrophe into a single sentence, the second-person "you" generalising his experience into a universal vulnerability. The word "invisible" is then subjected to a forensic correction - "Not forgotten. Invisible" - where the sentence fragments perform the precision of a diagnosis. The distinction matters: to be forgotten implies prior knowledge; to be invisible is to have been erased from perception entirely. The final paragraph shifts to institutional language - "300,000 people", "one billion pounds", "twenty-three per cent" - but the writer subverts the bureaucratic register through the concluding metaphor. "Manufacturing" imports the language of industry: homelessness is not a natural disaster but a product, assembled from policy decisions ("mental health services have been cut", "social housing waiting lists") as deliberately as any commodity. The participial progression from "managing" to "manufacturing" implies an economy of suffering - the crisis is sustained because it generates the very spending that justifies the system\'s existence.',
            },
            markScheme: [
              "Analyses the effects of the writer's language choices in detail",
              'Selects judicious quotations and embeds them within analysis',
              'Uses subject terminology accurately (e.g., imperative, tricolon, antithesis)',
              'Considers how language positions and manipulates the reader',
              'Explores layers of meaning in individual words and phrases',
              'Top band: perceptive, detailed, conceptualised analysis of language',
            ],
          },
          {
            id: 'aqa-p2-01-q4',
            questionNumber: 4,
            questionText:
              "For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different perspectives on society's treatment of homeless people.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_01_SOURCE_A}\n\nSource B:\n${EXAM_01_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_01_SOURCE_A_REF} | Source B: ${EXAM_01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers criticise the way society treats homeless people. The writer of Source A uses statistics such as "over 300,000 people" and "one billion pounds" to show how big the problem is, and blames the government: "We are actively manufacturing it." Greenwood uses no statistics. Instead he compares the homeless man with criminals: a robber, or "the brute who precipitated his wife from a third-floor window", is given "calm judicial investigation", but the workhouse official has "no mercy" for the hungry pauper. Both writers use a person to make the problem real: Source A quotes David, while Source B describes "the poor fellow" who comes to the workhouse for bread. Greenwood also mocks the official, saying his head is "the otherwise empty region" under his hat. The writer of Source A sounds urgent and serious, while Greenwood is angry but uses mockery. Both want the reader to see that these people have been treated unfairly.',
              'Grade 6-7':
                'Both writers argue that society has failed homeless people, but they place the failure differently and use different methods. The writer of Source A addresses the reader directly ("Walk through any British city centre after midnight and you will see them") and builds from one man\'s story to national figures, ending with the accusation that "We are actively manufacturing it": the inclusive "We" makes every reader part of the system that produces homelessness. Greenwood, writing in 1869, looks back on a way of thinking he hopes is passing ("It is to be hoped that we are gradually emerging from our bemuddlement"), and his method is ironic comparison. One long sentence sets the treatment of violent criminals, who "claimed and was entitled to calm judicial investigation", against that of "the poor fellow who became a casual pauper", who "was without a voice or a single friend": the pauper arrives only at the end of the sentence, after all the consideration given to the criminals, and is given nothing. Where the writer of Source A blames "systems", Greenwood gives the system a face, the official he calls Bumble, a "pig-headed Jack-in-office" whose head is "the otherwise empty region that Bumble\'s cocked-hat covered". The contrast between "a crust off a parish loaf" and "stolen roast beef" exposes the absurd logic by which begging is judged worse than stealing. Both writers deny that the homeless deserve their fate: David lost his job "after a back injury", and Greenwood\'s man fell "out of sheer misfortune and hard necessity". The tones differ, though. The writer of Source A is urgent and uses evidence; Greenwood is scornful, and his closing words, "he treated his victim accordingly", call the pauper a "victim", making the official, not the pauper, the wrongdoer.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout the response',
              'Analyses methods used by both writers to convey their viewpoints',
              'Uses well-selected evidence from both texts',
              'Shows clear understanding of different historical contexts',
              'Sustains a comparative structure rather than writing about each source separately',
              'Top band: perceptive, detailed comparison with a sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-01-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-01-q5',
            questionNumber: 5,
            questionText:
              '"Homelessness is not a natural disaster - it is a political choice, and it is a choice we can reverse."\n\nWrite an article for a broadsheet newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear argumentative article that: directly addresses the statement; uses some persuasive devices such as rhetorical questions and statistics; has a clear introduction, body, and conclusion; matches the register of a newspaper article; demonstrates generally accurate spelling and punctuation with some sentence variety.',
              'Grade 6-7':
                'A compelling argument that: engages critically with the statement rather than simply agreeing or disagreeing; uses a range of persuasive techniques including counter-argument; deploys evidence and examples effectively (may draw on source material); sustains an appropriate register for a broadsheet audience; demonstrates consistent technical accuracy with ambitious vocabulary and varied sentence structures.',
              'Grade 8-9':
                'An assured, sophisticated argument that: develops a nuanced and original perspective on the statement; crafts a distinctive authorial voice appropriate to a broadsheet readership; deploys rhetorical strategies with precision - anaphora, tricolon, antithesis, strategic concession; uses counter-argument to strengthen rather than undermine the central position; demonstrates extensive vocabulary, varied syntax, and technical virtuosity throughout; structures the argument for cumulative impact.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Compelling, convincing communication matched to purpose and audience',
              'AO5: Sustained crafting of a structured, coherent argument',
              'AO6 Technical Accuracy (16 marks): Accurate and consistent sentence demarcation',
              'AO6: Wide range of punctuation used accurately for effect',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms used for purpose and effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 02 - Education Reform
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-02',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-02-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_02_SOURCE_A_REF}\nSource B: ${EXAM_02_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-02-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) Five-year-olds enter school with curiosity.\nB) Sixteen-year-olds leave school feeling confident.\nC) The writer believes the education system is broken.\nD) Children receive a string of letters on results day.\nE) Five-year-olds are described as bright-eyed.\nF) Sixteen-year-olds leave school feeling anxious.\nG) Children start school at the age of seven.\nH) The writer thinks the system works well for most students.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_02_SOURCE_A}\n\nSource B:\n${EXAM_02_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_02_SOURCE_A_REF} | Source B: ${EXAM_02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, F - A: "a fresh cohort of five-year-olds enters school bright-eyed and bursting with curiosity". C: "Our education system is broken". E: "bright-eyed". F: "drained, anxious". B is false (they leave "drained" and "anxious"). D is false (it says "numbers", not "letters"). G is false (it is "five-year-olds" who enter school). H is false.',
              'Grade 6-7':
                'A, C, E, F. B is false: the sixteen-year-olds leave "drained, anxious", not confident. D is false: the results slip carries "a string of numbers", not letters. G is false: "a fresh cohort of five-year-olds enters school". H is contradicted by "something goes catastrophically wrong".',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks deducted for incorrect selections beyond four',
            ],
          },
          {
            id: 'aqa-p2-02-q2',
            questionNumber: 2,
            questionText:
              "You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in the writers' criticisms of the education systems they describe.",
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_02_SOURCE_A}\n\nSource B:\n${EXAM_02_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_02_SOURCE_A_REF} | Source B: ${EXAM_02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers criticise education for giving students the wrong kind of learning. Source A says the system is "so obsessed with measurement" that it tests children again and again, and that its idea of standards "excludes creativity, critical thinking, collaboration, and emotional intelligence". Source B criticises an education in science alone, which leaves a student knowing "nothing of humane letters" (literature and history), so that he is "incomplete". Both writers give an example of what goes wrong. Source A describes children who start school "bursting with curiosity" but leave "drained, anxious". Source B describes a student at a teacher-training college who turned a line of Macbeth into "Can you not wait upon the lunatic?", which shows that he did not understand it. A difference is that Source A worries about pupils\' mental health, saying they develop "anxiety disorders", while Source B is concerned with what students understand, not how they feel.',
              'Grade 6-7':
                'Both writers attack an education that values the storing of facts above the kind of understanding that makes a person whole, though they place the fault differently. The writer of Source A blames a system "so obsessed with measurement that it has forgotten what it is supposed to be measuring", where children are tested "at seven, at eleven, at sixteen, and at eighteen" and a narrow idea of standards shuts out "creativity, critical thinking, collaboration, and emotional intelligence". Arnold\'s target is an education in natural science alone. A student trained only in science will know "nothing of humane letters" and, "perpetually accumulating natural knowledge", will be left "unsatisfied, or at any rate incomplete". His evidence is a case he once described in a school-report: a young man at a training college who paraphrased "Can\'st thou not minister to a mind diseased?" as "Can you not wait upon the lunatic?". Both writers, then, contrast what can be counted with what matters. The writer of Source A sets numbers "on a results slip" against children\'s "worth as human beings"; Arnold sets knowing that "the moon is two thousand one hundred and sixty miles in diameter" against understanding a line of Shakespeare, and would "rather have a young person ignorant about the moon\'s diameter". The differences are of focus and feeling. The writer of Source A is concerned with the harm to children\'s well-being, "anxiety disorders at twice the rate of previous generations", and is openly angry ("catastrophically wrong"). Arnold is concerned with what an education leaves out of the mind, and argues calmly, even with humour, beginning with the concession that comparisons between subjects should be avoided "as much as possible".',
            },
            markScheme: [
              'Must reference both sources throughout',
              'Identifies clear similarities and differences in criticisms',
              'Uses evidence from both texts',
              'Synthesises rather than alternating between sources',
              'Infers beyond surface-level details',
              'Top band: perceptive inferences with judicious textual support',
            ],
          },
          {
            id: 'aqa-p2-02-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to argue that the education system needs fundamental reform?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_02_SOURCE_A}`,
            extractSource: EXAM_02_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer starts with the blunt statement "Our education system is broken" which immediately tells the reader there is a serious problem. The word "broken" suggests something that needs fixing. The contrast between five-year-olds who are "bright-eyed and bursting with curiosity" and sixteen-year-olds who are "drained, anxious" shows how school damages children. The word "drained" is powerful because it suggests all their energy has been taken away. The writer uses the metaphor of testing as an obsession to criticise the system. The reference to Finland is used to show that there is a better way of doing things.',
              'Grade 6-7':
                'The writer structures the argument through a devastating before-and-after contrast that frames the education system as actively destructive. The opening paragraph\'s juxtaposition of "bright-eyed and bursting with curiosity" against "drained, anxious, and convinced that their worth... can be reduced to a string of numbers" uses the semantic field of energy depletion - "drained" implies the system has extracted something vital. The alliterative "bright-eyed and bursting" creates a sense of abundant potential, making its loss more keenly felt. The phrase "something goes catastrophically wrong" is strategically vague - the adverb "catastrophically" is emotionally charged, but "something" withholds the specific cause, creating a mystery the article then solves. The second paragraph deploys strategic concession: "The problem is not our teachers" preemptively defuses the most common objection before redirecting blame to "a system that has become so obsessed with measurement". The metaphor of obsession pathologises the system - it is not merely mistaken but compulsive. The listing of test points - "at seven, at eleven, at sixteen, and at eighteen" - creates a claustrophobic rhythm of relentless assessment. The final paragraph uses the example of Finland as a rhetorical trump card, the three short sentences - "Its teachers are trusted professionals... Its students are among the happiest in Europe. There is another way" - building to a conclusion that is both hopeful and accusatory: if another way exists, the failure to adopt it is a choice.',
              'Grade 8-9':
                'The writer constructs the argument as a diagnostic narrative: the education system is presented not merely as flawed but as pathological, a system whose dysfunction has become its defining characteristic. The opening sentence - "Our education system is broken - and we all know it" - performs two rhetorical operations simultaneously. The dash creates a pause that mimics reluctant admission, while "we all know it" transforms a controversial claim into received wisdom, recruiting the reader\'s complicity before the argument has even begun. The first paragraph\'s temporal structure - "every autumn" to "every summer" - frames education as a cyclical process of destruction, the seasonal language imbuing it with the inevitability of natural law. The verb "reduced" in "their worth... can be reduced to a string of numbers" is precisely chosen: it means both "diminished" and "converted", implying that the examination system performs an act of violent simplification upon human complexity. The second paragraph\'s relative clause - "who work, on average, fifty-four hours per week for salaries that would make a city banker laugh" - is rhetorically sophisticated: the statistical precision of "fifty-four hours" lends authority, while "make a city banker laugh" introduces class politics through the image of contemptuous amusement, positioning teachers as exploited by the same economic logic that drives the testing regime. The metaphor of measurement obsession is extended through the listing "rank them, grade them, sort them into sets" - three verbs that progressively dehumanise, moving from numerical ("rank") through evaluative ("grade") to institutional ("sort them into sets"), each step further from the individual child. The final paragraph\'s invocation of Finland is an argument from example, but its real power lies in the three terminal sentences whose parallel structure ("Its teachers... Its students... There is") creates a litany of contrast that makes the British system seem not merely inferior but wilfully perverse.',
            },
            markScheme: [
              'Analyses the effects of specific language choices in detail',
              'Selects judicious quotations and embeds them in analysis',
              'Uses subject terminology accurately (metaphor, antithesis, tricolon, etc.)',
              'Considers how language positions and persuades the reader',
              'Explores multiple layers of meaning',
              'Top band: perceptive, detailed, conceptualised analysis of language',
            ],
          },
          {
            id: 'aqa-p2-02-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to the failings of the education system.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_02_SOURCE_A}\n\nSource B:\n${EXAM_02_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_02_SOURCE_A_REF} | Source B: ${EXAM_02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers think the education system is failing young people. The writer of Source A is angry and uses strong words such as "broken" and "catastrophically wrong", while Arnold is calmer and more polite, beginning by saying that we should avoid "any invidious comparison" between subjects. The writer of Source A uses facts and figures, such as teachers working "fifty-four hours per week", and the example of Finland. Arnold uses a real example that he once gave in a school-report: a student who turned a line of Shakespeare into "Can you not wait upon the lunatic?". This is funny, but it makes the serious point that the student had not understood the line. Both writers say what they would prefer. The writer of Source A says "There is another way", and Arnold says he would rather have a young person who does not know the size of the moon but can see that the paraphrase is bad. Both writers think education should develop the whole person, not just fill students with facts or test scores.',
              'Grade 6-7':
                'Both writers see the failings of education as a narrowing of the mind, but their attitudes differ: the writer of Source A is alarmed and accusing, Arnold wry and persuasive. The writer of Source A opens with a blunt declaration, "Our education system is broken - and we all know it", in which "we all know it" presents a disputed claim as common sense. Arnold opens with a concession, urging that we "avoid indeed as much as possible any invidious comparison" between subjects, and only then answers the claim that literature and history are "the less useful alternative". His courtesy makes his counter-attack harder to dismiss. Both use contrast to expose what the system values. The writer of Source A sets "bright-eyed and bursting with curiosity" against "drained, anxious", a before-and-after picture of damage done. Arnold\'s contrast is comic: he quotes "Can\'st thou not minister to a mind diseased?" twice, each time followed by "Can you not wait upon the lunatic?", and the repetition lets the absurdity of the paraphrase speak for itself, while the precise figure "two thousand one hundred and sixty miles" mocks the kind of fact an education might prize instead. Their evidence differs too. The writer of Source A relies on statistics and on Finland, a country that "does not test its children until they are sixteen"; Arnold relies on a single case from his own experience and on reasoning. Both end on a preference rather than a complaint. The writer of Source A insists "There is another way"; Arnold, more modestly, says "I think I would rather have" a young person who can tell a good paraphrase from a bad one than one who knows the moon\'s diameter. The difference in tone reflects their situations: a modern writer addressing readers who share the anxiety, and a Victorian lecturer answering a man of science who had called literature and history "the less useful alternative".',
            },
            markScheme: [
              'Compares attitudes from both sources throughout the response',
              'Analyses methods used by both writers',
              'Uses well-selected evidence from both texts',
              'Shows understanding of how context shapes perspective and method',
              'Sustains a comparative framework',
              'Top band: perceptive, detailed comparison with a sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-02-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-02-q5',
            questionNumber: 5,
            questionText:
              '"Examinations are the enemy of real learning. Schools should assess students through coursework, projects, and portfolios instead."\n\nWrite a speech to be delivered at a schools conference in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech that: addresses the audience directly; uses some persuasive devices (rhetorical questions, personal anecdotes); has a logical structure; matches the register of a speech (direct address, spoken markers); demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted speech that: engages with both sides of the argument; uses rhetorical techniques appropriate to the spoken form - repetition, tricolon, direct audience engagement; deploys evidence and personal experience effectively; maintains a consistent spoken register; demonstrates consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9':
                'An assured, persuasive speech that: develops a nuanced argument that acknowledges complexity; crafts a distinctive, authoritative voice; deploys sophisticated rhetorical strategies - anaphora, antithesis, strategic pauses, humour; builds to a powerful conclusion; demonstrates extensive vocabulary, varied syntax, and faultless technical accuracy throughout.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Compelling communication matched to the speech form',
              'AO5: Structured argument with effective use of discourse markers',
              'AO6 Technical Accuracy (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used accurately',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 03 - Technology Impact
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-03',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-03-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_03_SOURCE_A_REF}\nSource B: ${EXAM_03_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-03-q1',
            questionNumber: 1,
            questionText:
              "Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer's daughter is fourteen years old.\nB) The daughter was reading a magazine.\nC) She managed three pages before picking up her phone.\nD) She scrolled through notifications for five minutes.\nE) She re-read a paragraph she had already finished.\nF) The writer blames laziness for this behaviour.\nG) The writer attributes this behaviour to what technology has done.\nH) The writer thinks we should pretend that everything is fine.",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_03_SOURCE_A}\n\nSource B:\n${EXAM_03_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_03_SOURCE_A_REF} | Source B: ${EXAM_03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, G - A: "my fourteen-year-old daughter". C: "She managed three pages before reaching for her phone". E: "only to re-read the same paragraph she had already finished." G: "This is what technology has done to the adolescent brain". B is false (a novel). D is false (ten minutes). F is explicitly denied ("This is not laziness"). H is false (we should talk about it "honestly rather than pretending that everything is fine").',
              'Grade 6-7':
                'A, C, E, G. B is false: she was reading "a novel". D is false: she scrolled for "ten minutes", not five. F is directly contradicted by "This is not laziness." H reverses the writer\'s view, which is that we should talk about it "honestly rather than pretending that everything is fine."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks deducted for incorrect selections beyond four',
            ],
          },
          {
            id: 'aqa-p2-03-q2',
            questionNumber: 2,
            questionText:
              "You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the differences between what the writers say new technology has done to people's lives.",
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_03_SOURCE_A}\n\nSource B:\n${EXAM_03_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_03_SOURCE_A_REF} | Source B: ${EXAM_03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The writers see the effects of new technology very differently. The writer of Source A thinks technology is harming young people: teenagers who spend a long time on screens have "reduced attention spans" and "higher rates of anxiety and depression", and the writer\'s own daughter cannot read more than three pages before "reaching for her phone". Huxley, in Source B, thinks new machines have made life much better. He says that because of machinery "the general standard of comfort has been raised" and "the ravages of pestilence and famine have been checked". The writer of Source A says the phone\'s algorithm is designed "to addict", but Huxley says that new ways of travelling and communicating have brought people together and reduced "local ignorance and prejudice". Even where both mention the same benefit, they differ: Source A mentions "connection across distances" only briefly before returning to the harm, while for Huxley the shrinking of the obstacles of time and space is one of the great achievements of his age. The main difference is that Source A thinks children need "boundaries", while Huxley calls the change a "revolution" and does not mention any harm.',
              'Grade 6-7':
                'The two writers reach opposite verdicts on what new technology does to people. For the writer of Source A its effect falls on the mind, and it is harmful: screens bring "measurably reduced attention spans, lower reading comprehension scores" and more "anxiety and depression", and the phone is driven by "an algorithm designed not to inform or educate but to addict". Huxley sees its effect as material and social, and entirely good: machinery, better processes and "the invention of new ones" have multiplied "the commodities and conveniences of existence", raised "the general standard of comfort" and checked famine and disease. Where Source A fears that technology distracts the young and is built to addict them, Huxley believes the new "means of locomotion and intercommunication" (in his time, the railway, the steamship and the telegraph) bring people together, creating "common interests among the most widely separated peoples". Even the benefit they share shows the difference: the writer of Source A grants that technology has brought "extraordinary benefits", including "connection across distances", but only as a concession before the case against it, whereas for Huxley the reduction of the obstacles "which time and space offer" is part of his central claim. The difference is also one of scale. The writer of Source A starts from one teenager in one household; Huxley surveys "the History of Civilisation, during the last fifty years" and "the present and future fortunes of mankind". Their views of the future differ too: the writer of Source A wants "boundaries" for children, while Huxley thinks the full significance of the change "cannot, as yet, be estimated at its full value", which suggests that its benefits have only begun.',
            },
            markScheme: [
              'Must reference both sources',
              "Identifies clear differences in the writers' views of what technology does to people",
              'Uses evidence from both texts',
              'Synthesises rather than alternating',
              'Infers beyond surface details',
              'Top band: perceptive synthesis with judicious textual references',
            ],
          },
          {
            id: 'aqa-p2-03-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to express concerns about the impact of technology on young people?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_03_SOURCE_A}`,
            extractSource: EXAM_03_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses a personal anecdote about a daughter to make the issue feel real and relatable. The phrase "reaching for her phone" suggests an automatic, almost addictive action. The statistics about screen time - "four hours and twenty-two minutes" - shock the reader with how much time is wasted. The phrase "algorithm designed not to inform or educate but to addict" suggests technology companies are deliberately harming young people. The phrase "being used by it" reverses the normal idea of using technology, making young people sound like victims.',
              'Grade 6-7':
                'The writer constructs the argument through an escalation from the domestic to the societal, anchored by the opening anecdote that transforms private concern into public crisis. The scene of the daughter\'s failed attempt to read is narrated with clinical precision - "three pages", "ten minutes", "the same paragraph" - the specificity creating an almost experimental quality, as though the daughter is an unwitting subject in a study of attention collapse. The phrase "reaching for her phone" is significant: "reaching" connotes involuntary compulsion, an instinct rather than a decision. The second paragraph shifts to statistical authority, but the most powerful technique is the redefinition of a number: "That is not a statistic. That is nearly a third of their waking life surrendered to an algorithm". The verb "surrendered" militarises the image - this is territory lost, autonomy ceded - while "algorithm" reduces the opponent to cold mechanics. The tripartite purpose of the algorithm - "not to inform or educate but to addict" - uses the rule of three with a devastating twist: two positive verbs negated, followed by one that reframes technology as a drug. The final paragraph\'s central antithesis - "using technology and being used by it" - is the article\'s rhetorical centrepiece: the same verb turns from active to passive, so that the user becomes the used, exposing the power imbalance. The concluding phrase "a childhood only partially lived" is deliberately understated, the adverb "partially" more haunting than a more dramatic formulation because it concedes that something is experienced while insisting that something essential is missing.',
              'Grade 8-9':
                'The writer\'s linguistic strategy operates through a systematic dismantling of the reader\'s defences, beginning with the deliberately mundane and escalating to the existential. The opening anecdote is structured as a micro-narrative of cognitive failure: "managed three pages" (the verb "managed" implies struggle against resistance), "reaching for her phone" (the present participle suggesting habitual compulsion), "re-read the same paragraph" (the prefix "re-" encoding futility). The sentence "This is not laziness" performs a pre-emptive counter-argument, its blunt declarative closing down the most comfortable interpretation before offering the more disturbing one: "This is what technology has done to the adolescent brain". The shift from "my fourteen-year-old daughter" to "the adolescent brain" is itself significant - the definite article and scientific noun depersonalise, transforming a parent\'s worry into a neurological diagnosis. The second paragraph moves from a study to a figure, "four hours and twenty-two minutes", and then refuses to let it stay a figure: "That is not a statistic." The sentence is a metacommentary that instructs the reader how to process the information, converting a number into a portion of a life. The phrase "surrendered to an algorithm designed not to inform or educate but to addict" layers multiple techniques: the passive voice of "surrendered" removes young people\'s agency; the tricolon negates two Enlightenment values before introducing a medical-criminal verb. The final paragraph\'s antithesis - "using technology and being used by it" - repeats one verb, first active and then passive, and so performs the reversal it describes, the subject becoming the object. The closing image, "a childhood only partially lived", achieves its power through calculated understatement: "partially" is more devastating than "not at all" because it concedes that something exists while insisting it is insufficient - the linguistic equivalent of a half-empty room.',
            },
            markScheme: [
              "Analyses the effects of the writer's language choices in detail",
              'Selects judicious quotations embedded within analysis',
              'Uses subject terminology accurately',
              'Considers how language positions and persuades the reader',
              'Explores layers of meaning in individual words and phrases',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-03-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their different attitudes to new technology and what it does to people.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_03_SOURCE_A}\n\nSource B:\n${EXAM_03_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_03_SOURCE_A_REF} | Source B: ${EXAM_03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The writers have opposite attitudes. The writer of Source A is worried about technology and its effect on children, while Huxley is proud of what machines and science have achieved. The writer of Source A uses a personal story about a daughter who could read only "three pages" before picking up her phone, and then statistics such as "four hours and twenty-two minutes" a day. Huxley does not use personal stories. He writes in long, formal sentences with lists of benefits: comfort raised, "pestilence and famine" checked, "local ignorance and prejudice" removed. The writer of Source A uses emotive words such as "addict" and "surrendered", while Huxley uses admiring words such as "wonderful" and "marvellous". Huxley calls the change "This revolution - for it is nothing less", which shows how important he thinks it is. Only the writer of Source A admits anything on the other side, saying "I am not a Luddite" and accepting that technology has brought "extraordinary benefits". Huxley does not mention any harm that the changes have done.',
              'Grade 6-7':
                'The writer of Source A regards new technology with alarm, Huxley with pride, and their methods follow from their attitudes. The writer of Source A works from the particular to the general: the opening anecdote of a daughter who "managed three pages before reaching for her phone" makes the harm domestic and visible before any statistics arrive, and the verb "managed" makes reading sound like a struggle. Huxley works entirely in the general. His first sentence surveys "the History of Civilisation, during the last fifty years", and his long sentences pile up abstract nouns ("production", "improvement", "invention", "development") so that progress seems vast and orderly. Their vocabulary is opposed. The writer of Source A reaches for the language of loss and addiction: life "surrendered to an algorithm", a technology designed "to addict", "a childhood only partially lived". Huxley\'s language is admiring and elevated: "wonderful increase", "no less marvellous", and, in "This revolution - for it is nothing less -", a pause that insists on the scale of the change. Both writers use contrast, but differently. The writer of Source A draws a moral line "between using technology and being used by it"; Huxley\'s contrast is historical, between the present and "former ages", and he ends with an image of science as a stream that, "after being dammed up for a thousand years, once more began to flow", which makes progress seem natural and unstoppable. The writer of Source A concedes that technology has brought "extraordinary benefits" and is "not a Luddite", which makes the call for "boundaries" sound reasonable; Huxley admits no drawback at all, which makes his confidence seem complete. His first readers, looking back over fifty years of railways, telegraphs and factories, had seen the benefits for themselves; the writer of Source A is writing about a technology whose effects on children are still being measured.',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers to convey their views',
              'Uses well-selected evidence from both texts',
              'Shows understanding of how historical context shapes perspective',
              'Sustains a comparative structure',
              'Top band: perceptive, detailed comparison with sustained critical engagement',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-03-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-03-q5',
            questionNumber: 5,
            questionText:
              '"Smartphones should be banned in schools. They are destroying young people\'s ability to learn, to concentrate, and to connect with each other."\n\nWrite a letter to the Secretary of State for Education in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear formal letter that: addresses the recipient appropriately; uses some persuasive devices; presents a logical argument with examples; matches the formal register of a letter to a government minister; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7':
                'A well-structured formal letter that: engages with the complexity of the issue; deploys a range of persuasive techniques including counter-argument; uses evidence effectively; sustains an appropriately formal and respectful register throughout; demonstrates consistent technical accuracy with varied sentence forms.',
              'Grade 8-9':
                'A sophisticated formal letter that: develops a nuanced position that goes beyond simple agreement or disagreement; uses the conventions of formal correspondence to powerful rhetorical effect; deploys precisely chosen evidence and examples; crafts a distinctive, authoritative voice; demonstrates faultless technical accuracy with ambitious vocabulary and syntactic variety.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Compelling communication matched to the letter form and audience',
              'AO5: Coherent argument with effective structural choices',
              'AO6 Technical Accuracy (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used accurately',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 04 - Gender Equality
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-04',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-04-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_04_SOURCE_A_REF}\nSource B: ${EXAM_04_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-04-q1',
            questionNumber: 1,
            questionText:
              "Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) The writer's daughter wanted to be an engineer.\nB) The teacher suggested that the daughter become a doctor.\nC) The teacher suggested nursing as an alternative.\nD) The daughter was seven years old.\nE) The teacher smiled indulgently.\nF) The writer describes the redirection as devastating.\nG) The daughter was at secondary school.\nH) The daughter had already learned about gender expectations.",
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_04_SOURCE_A}\n\nSource B:\n${EXAM_04_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_04_SOURCE_A_REF} | Source B: ${EXAM_04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, E, F - A: "my daughter told me she wanted to be an engineer". C: "suggested she might also like to consider teaching or nursing." E: "smiled indulgently". F: "gentle, well-meaning, devastating redirection". B is false (the teacher suggested "teaching or nursing"). D is false (she was six). G is false (it was her "primary school teacher"). H is false ("She had not yet learned").',
              'Grade 6-7':
                'A, C, E, F. B is false: the teacher suggested "teaching or nursing", not medicine. D is false: "My daughter was six years old." G is false: the teacher was her "primary school teacher". H is contradicted by "She had not yet learned that society had opinions".',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks deducted for incorrect selections beyond four',
            ],
          },
          {
            id: 'aqa-p2-04-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the writers present the barriers women face.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_04_SOURCE_A}\n\nSource B:\n${EXAM_04_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_04_SOURCE_A_REF} | Source B: ${EXAM_04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers describe barriers that hold women back. In Source A the barriers are mostly hidden: a teacher steering a girl who wants to be an engineer towards "teaching or nursing", and "gendered toys" and "classroom assumptions". In Source B the barriers are more open. Martineau says a girl should not be "shut out, because she is a woman" from subjects she could study, and that the jobs women can do to support themselves "are so few", with many of them taken by men. Both writers show that people expect women to follow a set path. Source A says society has "opinions about which ambitions were appropriate", and Source B says that in the past "the only occupation thought of for a woman was keeping her husband\'s house". A difference is that Source A gives statistics, such as the "14.3 per cent" pay gap, while Source B argues that girls should be educated "as carefully as boys\'" because many women now have to support themselves.',
              'Grade 6-7':
                'Both writers show that women are held back less by their own abilities than by what society expects of them, but the barriers they describe belong to different stages of the same struggle. For the writer of Source A the barrier is now invisible: "No law prevents my daughter from becoming an engineer", yet "a thousand small signals", from "the gendered toys" to "the well-meaning teacher suggesting nursing", build "an invisible architecture of limitation". For Martineau, writing in 1849, the barriers are open and practical. She has to argue that a girl\'s mind should be trained "as carefully as boys\'", and that no girl should be "shut out, because she is a woman, from any study that she is capable of pursuing"; and the ways a woman might earn a living "are so few; and of those few, so many engrossed by men". Both writers identify an expectation that decides a woman\'s path in advance. In Source A it is the teacher\'s gentle redirection of a six-year-old; in Source B it is the old assumption that "every woman was destined to be married" and that her only occupation was "keeping her husband\'s house, and being a wife and mother". A key difference is the direction of change each describes. The writer of Source A warns that legal progress has produced only "the comfortable illusion of equality". Martineau sees the ground already shifting under women: "The footing of women is changed, and it will change more", and because "A multitude of women have to maintain themselves", keeping them from learning has become not only unjust but impractical.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear similarities and differences in barriers',
              'Uses evidence from both texts',
              'Synthesises rather than alternating',
              'Infers beyond surface-level details',
              'Top band: perceptive synthesis with judicious references',
            ],
          },
          {
            id: 'aqa-p2-04-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to challenge the idea that gender equality has been achieved?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_04_SOURCE_A}`,
            extractSource: EXAM_04_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the personal story of a daughter to show that inequality starts very young. The phrase "smiled indulgently" suggests the teacher didn\'t take the daughter seriously. The list of achievements - "Women can vote, own property, pursue careers" - is then undercut by the statistics showing inequality still exists. The phrase "comfortable illusion of equality" is powerful because "illusion" means it isn\'t real. The metaphor "invisible architecture of limitation" suggests barriers that are built deliberately but cannot be seen. The listing of "gendered toys, the classroom assumptions, the media representations" shows how many different things limit women.',
              'Grade 6-7':
                'The writer constructs the argument through a rhetorical architecture of revelation - systematically stripping away the surface of equality to expose the structures beneath. The opening anecdote operates at multiple levels: "smiled indulgently" encodes the teacher\'s condescension in a single adverb - "indulgently" implies tolerance of a childish whim, reducing engineering to a phase to be grown out of. The tricolon of adjectives describing the redirection - "gentle, well-meaning, devastating" - performs a rhetorical ambush: the first two adjectives establish benign intent before the third detonates their complacency. The second paragraph uses the strategy of concession and demolition: "Women can vote, own property, pursue careers, and run for office" builds a catalogue of progress before "But equality in law is not equality in practice" introduces the devastating distinction. The statistics that follow - "14.3 per cent", "eight per cent", "Two women a week" - form a descending scale from financial to existential, the climax of "killed by a current or former partner" transforming the argument from economics to survival. The extended metaphor of "invisible architecture" in the final paragraph is the article\'s conceptual centrepiece: "architecture" implies deliberate design, not accidental inequality, while "invisible" explains why it persists unchallenged. The listing of contributing factors - "the gendered toys, the classroom assumptions, the media representations" - uses the definite article before each noun to present these as known, catalogued phenomena that society has simply chosen not to address.',
              'Grade 8-9':
                'The writer\'s linguistic strategy is one of controlled demolition: each paragraph removes a layer of the reader\'s assumption that equality has been achieved, until the structural foundations of inequality are exposed. The opening anecdote\'s power lies in its specificity and its misdirection. "Smiled indulgently" performs an entire ideology in two words: the adverb "indulgently" connotes parental tolerance of fantasy, encoding the assumption that a girl wanting to be an engineer is cute rather than serious. The three-part adjectival phrase "gentle, well-meaning, devastating" is syntactically calibrated - the comma before "devastating" creates a pause that mimics the moment of realisation, the rhythmic disruption forcing the reader to reassess the apparently innocuous scene. The second paragraph\'s opening - "We like to congratulate ourselves" - uses the inclusive first person to implicate the reader in collective self-delusion, before the verb "congratulate" is revealed as premature through the conjunction "But". The statistical sequence enacts a descent from economic inequality (14.3%) through professional exclusion (8%) to gendered violence ("Two women a week are killed"), the diminishing numbers paradoxically increasing the horror as the metric shifts from percentages to bodies. The final paragraph\'s extended metaphor of "invisible architecture of limitation" is the essay\'s conceptual keystone. "Architecture" implies intentionality - these barriers are designed, not accidental - while "invisible" explains their durability: what cannot be seen cannot be challenged. The concluding paradox - "all the more powerful for being unacknowledged" - identifies the mechanism by which inequality perpetuates itself: it is sustained not by active oppression but by the collective refusal to see the structures that produce it.',
            },
            markScheme: [
              'Analyses the effects of specific language choices in detail',
              'Selects and embeds judicious quotations',
              'Uses subject terminology accurately',
              "Considers how language challenges the reader's assumptions",
              'Explores multiple layers of meaning',
              'Top band: perceptive, detailed, conceptualised analysis',
            ],
          },
          {
            id: 'aqa-p2-04-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their perspectives on the position of women in society.\n\nIn your answer, you could:\n- compare their different perspectives\n- compare the methods they use to convey their perspectives\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_04_SOURCE_A}\n\nSource B:\n${EXAM_04_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_04_SOURCE_A_REF} | Source B: ${EXAM_04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that women are held back, and both want girls to be able to go as far as they can. The writer of Source A uses a personal story about a six-year-old daughter who wanted to be an engineer, and statistics such as "eight per cent of FTSE 100 CEO positions". Martineau does not use statistics or a personal story. She argues step by step, explaining how women\'s lives have changed: in the past a woman was supported by "her father, brother or husband", but now many "have to maintain themselves". Both writers say girls should not be limited: the writer of Source A says "No law prevents my daughter from becoming an engineer", and Martineau says a girl should go "as far into the depths of science" as her brother. Martineau repeats words for effect: "in all justice, in all honour, in all humanity, in all prudence". The writer of Source A is angry that equality is only an "illusion", while Martineau is calmer, and even says that an educated woman will be "the more womanly", which shows she is trying to reassure the readers of her own time.',
              'Grade 6-7':
                'Both writers believe that women\'s position is shaped by society rather than by nature, but they write from opposite ends of a long change, and their methods reflect it. The writer of Source A must persuade readers who think equality has been won, so the article first grants the victories ("Women can vote, own property, pursue careers, and run for office") before turning with "But equality in law is not equality in practice." Martineau must persuade readers who doubt that women need learning at all, so she begins by dismissing that doubt as something no one "should undertake to say in our day", and then argues from changed facts: a woman was once "maintained by her father, brother or husband", but "it is not so now". Her repetition of "It is not so now" and "This is not the place" gives the argument the feel of a patient but firm lesson. Both writers make their case through contrast. The writer of Source A sets the ambition of a six-year-old against a teacher\'s "gentle, well-meaning, devastating redirection"; Martineau sets the girl beside "her brother", insisting that she should go "as far into the depths of science, and up to the heights of philosophy" as he does. Martineau\'s four-part repetition, "in all justice, in all honour, in all humanity, in all prudence", appeals to morality and to good sense at once, while the writer of Source A relies on statistics and on the metaphor of an "invisible architecture of limitation". The clearest difference lies in how far each writer questions the ideas of the day. The writer of Source A ends on a warning about a barrier "all the more powerful for being unacknowledged". Near her close, Martineau reassures her readers that an educated woman will be "the more reasonable, disciplined and docile" and "the more womanly": she argues for change within her era\'s idea of what a woman should be, where the writer of Source A questions the ideas themselves.',
            },
            markScheme: [
              'Compares perspectives from both sources throughout',
              'Analyses methods used by both writers',
              'Uses well-selected evidence from both texts',
              'Shows understanding of how context influences method and argument',
              'Sustains a comparative structure',
              'Top band: perceptive, detailed comparison with sustained critical voice',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-04-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-04-q5',
            questionNumber: 5,
            questionText:
              '"Gender equality is not just a women\'s issue - it is a human issue, and it requires action from everyone."\n\nWrite an essay in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear essay that: addresses the statement directly; uses some persuasive devices and examples; has an introduction, developed paragraphs, and a conclusion; maintains a formal register appropriate to an essay; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-structured essay that: develops a thoughtful argument engaging with the complexity of the statement; uses a range of evidence and examples; employs counter-argument effectively; maintains a consistent academic register; demonstrates strong technical accuracy with ambitious vocabulary and varied syntax.',
              'Grade 8-9':
                'A sophisticated essay that: constructs a nuanced, original argument; demonstrates intellectual rigour and independence of thought; uses precisely selected evidence and examples; creates a distinctive, authoritative voice; deploys varied rhetorical strategies with control; shows faultless technical accuracy throughout.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Compelling communication matched to the essay form',
              'AO5: Coherent, sustained argument with effective structural choices',
              'AO6 Technical Accuracy (16 marks): Accurate sentence demarcation',
              'AO6: Range of punctuation used accurately for effect',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 05 - Urban Development
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'aqa-p2-05',
    board: 'AQA',
    paperNumber: 2,
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    subtitle: 'English Language 8700/2',
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: 'aqa-p2-05-reading',
        title: 'Section A: Reading',
        description: `Read Source A and Source B carefully. Then answer all the questions in this section.\n\nSource A: ${EXAM_05_SOURCE_A_REF}\nSource B: ${EXAM_05_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-05-q1',
            questionNumber: 1,
            questionText:
              'Read again Source A, the first paragraph.\n\nChoose four statements below which are TRUE.\n\nA) A shopping centre is being built where a garden was.\nB) The diggers arrived on a Tuesday.\nC) Margaret Chen is seventy-eight years old.\nD) Margaret has tended a plot for thirty-one years.\nE) The first daffodils of spring had appeared.\nF) Margaret stood at the fence.\nG) The decision was made by local residents.\nH) Petitions persuaded the developers to change their plans.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_05_SOURCE_A}\n\nSource B:\n${EXAM_05_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_05_SOURCE_A_REF} | Source B: ${EXAM_05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, C, D, F - A: "They are building a shopping centre where the community garden used to be." C: "who is seventy-eight". D: "has tended a plot there for thirty-one years". F: "stood at the fence". B is false (Monday). E is false (crocuses, not daffodils). G is false (the decision was made "in a boardroom"). H is false ("no amount of petitions or protests had altered it").',
              'Grade 6-7':
                'A, C, D, F. B is false: the diggers arrived "on a Monday morning". E is false: the flowers were "the first crocuses of spring", not daffodils. G is contradicted: the decision was made "in a boardroom, by people who had never set foot in the garden". H is contradicted: "no amount of petitions or protests had altered it."',
            },
            markScheme: [
              '1 mark for each correct answer',
              'Maximum 4 marks',
              'No marks deducted for incorrect selections beyond four',
            ],
          },
          {
            id: 'aqa-p2-05-q2',
            questionNumber: 2,
            questionText:
              'You need to refer to Source A and Source B for this question.\n\nUse details from both sources. Write a summary of the similarities and differences in how the writers present the impact of development on communities.',
            marks: 8,
            suggestedTimeMinutes: 10,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_05_SOURCE_A}\n\nSource B:\n${EXAM_05_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_05_SOURCE_A_REF} | Source B: ${EXAM_05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers show that when new things are built, the people who were already there suffer. In Source A a community garden is replaced by a shopping centre, and Margaret Chen, who had a plot there "for thirty-one years", loses it; her "mental health has measurably deteriorated". In Source B, Dickens says that when new streets such as New Oxford Street are built, the poor people who are cleared out go and crowd into other places, and nobody asks where. He describes one of these places, a dark outhouse in St Giles packed with families: "Ten, twenty, thirty - who can count them!" Both writers show that the people who make the changes do not care about those affected. In Source A the decision was made by "people who had never set foot in the garden", and in Source B new streets are made "never heeding, never asking" what happens to the poor. A difference is that Source A is about losing a place that made people happy, while Source B is about people being pushed into terrible, overcrowded conditions.',
              'Grade 6-7':
                'Both writers present development as something done to a community by people who never see its cost, but the communities and the costs are very different. The writer of Source A describes a loss: a community garden, a place of "memories" and "relationships", replaced by a shopping centre, with the damage traced through one woman, Margaret Chen, who "stood at the fence with her hands in her pockets and said nothing". Dickens describes where the losers of development end up. His final paragraph makes the link explicit: "we make our New Oxford Streets, and our other new streets, never heeding, never asking, where the wretches whom we clear out, crowd." The scene before it shows the answer, a dark outhouse in St Giles where "Men, women, children" lie "heaped upon the floor", family after family, among them a widow "with six children" and a man with his wife and "eight poor babes". Both writers accuse those responsible of distance. In Source A the decision was made "in a boardroom, by people who had never set foot in the garden"; Dickens widens the blame to "we", the nation and its lawmakers, and mocks "our electioneering ducking to little vestrymen and our gentlemanly handling of Red Tape". The difference is in what is being destroyed. For the writer of Source A, development destroys a community\'s shared life and well-being; for Dickens it destroys homes and packs the poor into overcrowding and disease, "the plagues of Egypt ... so near our homes", a danger he suggests reaches the rest of society too.',
            },
            markScheme: [
              'Must reference both sources',
              'Identifies clear similarities and differences',
              'Uses evidence from both texts',
              'Synthesises rather than alternating between sources',
              'Infers beyond surface-level detail',
              'Top band: perceptive synthesis with judicious textual references',
            ],
          },
          {
            id: 'aqa-p2-05-q3',
            questionNumber: 3,
            questionText:
              'You now need to refer only to Source A.\n\nHow does the writer use language to criticise modern urban development?',
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_05_SOURCE_A}`,
            extractSource: EXAM_05_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer starts with a specific, personal example to show the impact of development. The image of diggers "churning the soil" that had held "the first crocuses of spring" contrasts destruction with nature and new life. Margaret Chen, who "stood at the fence" with "her hands in her pockets", creates a picture of helplessness. The phrase "made in a boardroom, by people who had never set foot in the garden" criticises how decisions are made by distant people. The sarcastic listing of "minimum-wage, mostly zero-hours" jobs shows the writer doesn\'t think the benefits are real. The quote from Oscar Wilde at the end - "the price of everything and the value of nothing" - sums up the argument powerfully.',
              'Grade 6-7':
                'The writer constructs this criticism through a sustained opposition between the language of human value and the language of commercial transaction. The opening paragraph establishes this through concrete imagery: "caterpillar tracks churning the soil that, just days earlier, had held the first crocuses of spring" juxtaposes mechanical destruction with organic life, the specificity of "crocuses" lending the loss a seasonal poignancy - this is not merely land being destroyed but a cycle of renewal being interrupted. Margaret Chen is introduced with precise biographical detail - "seventy-eight", "thirty-one years" - numbers that quantify human investment in the language of measurement, challenging the development\'s own quantitative logic on its own terms. The phrase "said nothing. There was nothing to say" uses the repetition of "nothing" to perform the silencing of community voice, while the passive construction "the decision had been made in a boardroom" strips agency from both Margaret and the reader. The second paragraph deploys sarcasm through accumulation: "mostly minimum-wage, mostly zero-hours, mostly performed by people who would rather have kept their allotments" - the anaphoric "mostly" reduces the promised benefits to grudging qualifications. The clause "does not appear on any spreadsheet" is the paragraph\'s devastating conclusion, its language of bureaucratic exclusion exposing the limits of economic rationality. The Wilde quotation in the final paragraph - "the price of everything and the value of nothing" - functions as an epigram that crystallises the entire argument, while "identikit retail parks, luxury apartment blocks, and artisan coffee shops" uses the tricolon to satirise the monotonous homogeneity that replaces distinctive community.',
              'Grade 8-9':
                'The writer\'s linguistic strategy operates through a systematic exposure of the epistemological violence of economic language - the way in which the vocabulary of development renders invisible the human realities it displaces. The opening scene is structured as an elegy: "caterpillar tracks churning the soil that, just days earlier, had held the first crocuses of spring" layers temporal registers - the industrial present ("churning") obliterating the organic past ("had held"), with the pluperfect tense encoding the garden as already lost. The specificity of "crocuses" is crucial: spring flowers connote renewal, and their destruction by machinery transforms the development from construction into a negation of the natural cycle. Margaret Chen\'s silence - "stood at the fence with her hands in her pockets and said nothing" - is the paragraph\'s rhetorical centre. The somatic detail of "hands in her pockets" connotes both resignation and concealment of emotion, while the repetition in "said nothing. There was nothing to say" collapses the distinction between choice and impossibility: silence becomes the only adequate response to a decision that has already been made outside the vocabulary of community. The second paragraph performs a devastating act of rhetorical judo, appropriating the language of economic benefit only to expose its emptiness: "three hundred jobs" is immediately qualified by "minimum-wage, mostly zero-hours" - the anaphoric "mostly" functioning as a slow deflation of each promise. The sentence "The fact that Margaret Chen\'s mental health has measurably deteriorated since losing her garden does not appear on any spreadsheet" uses the language of quantification ("measurably") against the system that relies upon it, exposing a paradox: the harm is measurable but unmeasured, because the spreadsheet decides what counts as data. The concluding Wilde quotation is strategically positioned as an authoritative reformulation of the article\'s central thesis, while the final tricolon - "identikit retail parks, luxury apartment blocks, and artisan coffee shops where communities used to be" - uses the relative clause "where communities used to be" as a temporal haunting, each commercial space carrying the ghost of what it replaced.',
            },
            markScheme: [
              'Analyses the effects of specific language choices in detail',
              'Selects judicious quotations and embeds them within analysis',
              'Uses subject terminology accurately',
              "Considers how language positions the reader and conveys the writer's attitude",
              'Explores multiple layers of meaning in words and phrases',
              'Top band: perceptive, detailed, conceptualised analysis of language',
            ],
          },
          {
            id: 'aqa-p2-05-q4',
            questionNumber: 4,
            questionText:
              'For this question, you need to refer to the whole of Source A, together with the whole of Source B.\n\nCompare how the two writers convey their attitudes to urban development and its impact on communities.\n\nIn your answer, you could:\n- compare their different attitudes\n- compare the methods they use to convey their attitudes\n- support your response with references to both texts.',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_05_SOURCE_A}\n\nSource B:\n${EXAM_05_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_05_SOURCE_A_REF} | Source B: ${EXAM_05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers are angry about the way development treats ordinary people. The writer of Source A is angry about a garden being replaced by a shopping centre, and Dickens is angry that new streets push the poor into terrible overcrowding. The writer of Source A uses one person, Margaret Chen, to show the human cost. Dickens shows a whole room of people, "Men, women, children", and lets us hear their answers as the families are counted one by one. The writer of Source A uses sarcasm, describing the jobs as "mostly minimum-wage, mostly zero-hours", while Dickens uses shocking images, comparing the people to "maggots in a cheese" and calling them "spectres" rising from "a grave of rags". Both writers end by blaming those who let it happen: the writer of Source A says cities are redesigned "for the money that flows through them", and Dickens mocks "our gentlemanly handling of Red Tape", putting himself and his readers among those to blame.',
              'Grade 6-7':
                'Both writers condemn development that ignores the people it displaces, but their methods differ as much as their subjects. The writer of Source A builds an argument: a single scene (the diggers "churning the soil"), then an analysis of "how modern urban development works", then a general judgement, borrowed from Wilde, that we know "the price of everything and the value of nothing". Dickens offers almost no argument until the last paragraph. Instead he takes the reader into the scene, in the present tense and the first person plural ("as we open it", "let us look!"), so that we stand in the doorway beside Inspector Field and are "stricken back by the pestilent breath". His exclamations ("Ten, twenty, thirty - who can count them!") and the rapid questions and answers that follow make the crowding felt rather than stated. Only then does he turn to the cause: "Thus, we make our New Oxford Streets". The word "Thus" turns the scene into evidence, and "we" makes the reader part of the cause, much as the writer of Source A implicates "a society that knows the price of everything". Their imagery differs sharply. The writer of Source A uses gentle, natural images, "the first crocuses of spring", to show what is lost. Dickens uses images of death and decay, "maggots in a cheese", "a grave of rags", "spectres", which shock the reader but also strip the lodgers of their humanity, a choice a modern reader may question. Both turn to scorn. The writer of Source A dismisses the "metrics that matter, apparently", the last word heavy with sarcasm; Dickens ends by mocking "our electioneering ducking to little vestrymen and our gentlemanly handling of Red Tape", the "our" again refusing to let his readers off. The difference in their views is one of stakes: the writer of Source A grieves for a lost community space, while Dickens warns that clearing the poor from one street only packs them more tightly into another.',
            },
            markScheme: [
              'Compares attitudes from both sources throughout',
              'Analyses methods used by both writers to convey their views',
              'Uses well-selected evidence from both texts',
              'Shows understanding of how context shapes perspective',
              'Sustains a comparative framework',
              'Top band: perceptive, detailed comparison with sustained critical engagement',
            ],
          },
        ],
      },
      {
        id: 'aqa-p2-05-writing',
        title: 'Section B: Writing',
        description:
          'You are advised to spend about 45 minutes on this section. Write in full sentences. You are reminded of the need to plan your answer. You should leave enough time to check your work at the end.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-05-q5',
            questionNumber: 5,
            questionText:
              '"New buildings and developments are the sign of a thriving town. Those who resist change are simply standing in the way of progress."\n\nWrite an article for your local newspaper in which you argue your point of view on this statement.\n\n(24 marks for content and organisation / 16 marks for technical accuracy)',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear newspaper article that: addresses the statement with a personal point of view; uses some persuasive techniques such as rhetorical questions, emotive language, and examples; has a clear structure with a headline, introduction, body, and conclusion; matches the register of a local newspaper; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A compelling article that: engages critically with both sides of the statement; uses a range of rhetorical techniques fluently; deploys local and national examples effectively; sustains an appropriate register for a local newspaper audience; demonstrates consistent technical accuracy with varied and ambitious sentence structures.',
              'Grade 8-9':
                'An assured, sophisticated article that: develops a nuanced argument that redefines "progress" and "change" on the writer\'s own terms; crafts a distinctive journalistic voice; deploys rhetorical strategies with precision - irony, concession, escalation; uses counter-argument strategically; demonstrates faultless technical accuracy with extensive vocabulary and masterful control of syntax.',
            },
            markScheme: [
              'AO5 Content & Organisation (24 marks): Compelling, convincing communication matched to purpose and audience',
              'AO5: Sustained, coherent argument with effective structural choices',
              'AO6 Technical Accuracy (16 marks): Accurate and consistent sentence demarcation',
              'AO6: Wide range of punctuation used accurately',
              'AO6: Accurate spelling of ambitious vocabulary',
              'AO6: Varied sentence forms for purpose and effect',
            ],
          },
        ],
      },
    ],
  },
]
