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
 *
 * THIRD PASS (31 October 2026): the questions AQA sets from summer 2026.
 * The marks already matched 8700/2, but the questions were in the old forms
 * and much of their wording was AQA's own rubric, copied. Checked against
 * src/data/mark-scheme-guides/aqa-lang-paper2.ts:
 *   - Question 2 asked for "a summary of the similarities and differences"
 *     (paper 3's, of the differences). AQA now asks what the student can
 *     infer about differences the question names, so each names one person,
 *     group or thing in each source, and its answers and mark scheme infer
 *     differences only, from both sources. The answers are new;
 *   - Question 3 named no lines, and its answers ranged over all of Source
 *     A. AQA's names lines, so each now names two paragraphs (the second and
 *     third; paper 2's the first and second, where its answers lay), and the
 *     answers were rewritten to stay inside them, since an answer from
 *     outside the lines goes to the bottom of its level;
 *   - every Question 1 had A and C among its four true statements, so a
 *     student who always chose A and C took two marks on each paper unread.
 *     The same statements, some reworded so that they do not just repeat the
 *     source, are reordered, and each was checked against its paragraph:
 *     the true ones are B D E H, A D F G, C D F H, A B E G and B C F H. Their
 *     mark scheme said nothing was lost for choosing more than four, which
 *     the guide does not support; the paper asks for no more than four;
 *   - "You now need to refer only to Source A", "For this question, you
 *     need to refer to the whole of Source A, together with the whole of
 *     Source B", "In your answer, you could:", "in which you argue your
 *     point of view on this statement" and both section instructions are now
 *     in the site's words. Question 4 asks for the writers' feelings and
 *     perspectives, as the guide records AQA's question;
 *   - the minutes follow AQA's advice: Question 2 about 8 (was 10) and
 *     Question 3 about 12 (was 15), after 15 minutes' reading;
 *   - each mark scheme was the same few generic lines, Question 4's asking
 *     for "historical contexts", which AO3 does not mark. Each now gives its
 *     paper's points, with the guide's levels and caps (Q2_LEVELS and the
 *     rest, below the sources);
 *   - the Question 5 statements lost their dashes, paper 4's essay was given
 *     readers, and paper 1's Question 4 answer no longer quotes Greenwood's
 *     man who threw his wife from a window: "violent criminals" says enough.
 *
 * FOURTH PASS (31 October 2026): a second reader of the third pass, each
 * paper read whole against the guide. Every Question 1 key was checked
 * against its paragraph and is right. Fixed:
 *   - Question 1 keys: B, D, F and H were the letters most often true, so
 *     always choosing alternate letters from B scored 12 of 20. Paper 3's F
 *     and G are swapped (key now C D G H), and no simple pattern (first
 *     four, last four, alternate letters) scores more than 11;
 *   - paper 1's Question 2: the pauper "became poor" out of misfortune;
 *     Greenwood says he became a casual pauper. Both answers now say so;
 *   - paper 1's Question 2: "the only help in Source A" was the volunteers,
 *     but Source A names temporary accommodation; now the only help David is
 *     shown receiving;
 *   - paper 1's Question 4: Source A "blames the government", quoting "We
 *     are actively manufacturing it", whose "We" is society, the reader
 *     included; it now says so;
 *   - paper 2's Question 2: "Arnold's students are fed too narrow a diet"
 *     made his warning a fact; it is now his danger, as the answer goes on;
 *   - paper 2's Question 3: "The problem is not our teachers" was called a
 *     concession, but it grants nothing: it rules out a counter-argument,
 *     and the answer, mark scheme and terms now call it that;
 *   - paper 4's Question 2: every woman "maintained by her father, brother
 *     or husband" dropped Martineau's "(except domestic servants)"; now kept;
 *   - paper 4's Question 3: "an invisible architecture of limitation" was
 *     called an extended metaphor; it is one metaphor, in one sentence;
 *   - paper 4's Question 4: both answers sent a girl "as far into the depths
 *     of science" as her brother; Martineau's "as far" runs to "as her
 *     powers and opportunities permit", and "as her brother does" is how she
 *     goes on. Both now quote it so;
 *   - paper 5's Question 2: "the youngest children" behind the door are one
 *     family's three youngest;
 *   - Question 5: every answer was an outline of what a good answer does.
 *     Each paper's Grade 8-9 is now a full model answer to the task as set,
 *     in its form and for its readers (526 to 547 words, written for this
 *     site); the Grade 4-5 and 6-7 outlines are unchanged. They give no
 *     statistics, the only writers they quote are the paper's own Greenwood
 *     and Martineau, and their facts are dates (1849, 1869, 1918).
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

// ─── Levels ────────────────────────────────────────────────────────────────────
// In the words of src/data/mark-scheme-guides/aqa-lang-paper2.ts, which was
// checked against AQA's 8700/2 sample mark scheme for the 2026 exams, with its
// caps. Shared by all five papers, so a correction is made once.

const Q2_LEVELS = [
  'Level 4, 7-8 marks: sharp, thoughtful inferences, with precise details from both sources woven together to bring out the differences.',
  'Level 3, 5-6 marks: sound inferences from both sources, linking well-chosen details from each to show the differences.',
  'Level 2, 3-4 marks: some attempt to work out what details suggest, with some useful references and some differences noted.',
  'Level 1, 1-2 marks: retells what the sources say rather than working anything out, with a simple difference and a detail or two.',
  'An answer that uses only one source scores 3 marks at most. Level 3 and above need both sources and the differences the question names.',
]

const Q3_LEVELS = [
  "Level 4, 10-12 marks: looks beneath the surface, analysing how the writer's choices work together, with sharply chosen quotations and confident, precise terms.",
  'Level 3, 7-9 marks: for each quotation, says plainly what effect the words have on the reader and why, using several well-chosen quotations and correct terms.',
  'Level 2, 4-6 marks: tries to say what some of the language does, with a few suitable quotations and some terms.',
  'Level 1, 1-3 marks: says something basic about a word or two, or names a technique without saying what it does.',
  'An answer that writes about the other source, or about lines outside the ones named, is placed at the bottom of the level it would otherwise reach. Level 3 and above need the focus the question names.',
]

const Q4_LEVELS = [
  "Level 4, 13-16 marks: a thoughtful, sustained comparison, analysing how each writer's methods shape their view, with well-chosen detail from both sources.",
  'Level 3, 9-12 marks: compares the views directly and well, explaining how each writer conveys them, with relevant detail from both sources.',
  "Level 2, 5-8 marks: tries to compare the writers' views, with some comment on their methods and some useful detail.",
  "Level 1, 1-4 marks: makes a basic link between the writers' views and spots a method or two, with simple references.",
  'An answer that uses only one source scores 6 marks at most. Level 3 and above need both sources.',
]

const Q5_AO5_LEVELS = [
  'Level 4, 19-24 marks: argues with real force and confidence, pitched exactly for the audience. Ambitious, exact vocabulary and a carefully planned structure carry the reader through a developed argument.',
  'Level 3, 13-18 marks: argues clearly throughout, in a tone that suits the form and audience. Vocabulary and persuasive methods are chosen for effect, and well-linked paragraphs build the case.',
  'Level 2, 7-12 marks: puts a view across in places. There is some attempt at a suitable tone and form, some deliberate word choices, and paragraphs and linking phrases begin to organise the argument.',
  'Level 1, 1-6 marks: states a view simply, with little sense of the audience. Ideas are few and loosely joined, and paragraphs, if used, do not really organise the argument.',
  'Writing that does not respond to the statement in the way the task asks cannot score more than 12 of these 24 marks.',
]

const Q5_AO6_LEVELS = [
  'Level 4, 13-16 marks: every sentence starts and ends in the right place, and every kind of punctuation is used with skill. Even adventurous words are spelt right, and long sentences stay clear and correct.',
  'Level 3, 9-12 marks: sentences nearly always start and end in the right place, and most punctuation is used well. Most words are spelt right, hard ones included, and sentence types are varied on purpose.',
  'Level 2, 5-8 marks: sentences usually start and end in the right place, and several kinds of punctuation are tried. Some harder words are spelt correctly, with some variety in sentences and words.',
  'Level 1, 1-4 marks: a few sentences start and end in the right place, and some punctuation is used on purpose. Simple words are spelt correctly, but sentences and vocabulary are mostly simple.',
]

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
        description: `Spend about 15 minutes reading Source A, Source B and the questions. Then answer all four questions in this section, allowing about 45 minutes for them.\n\nSource A: ${EXAM_01_SOURCE_A_REF}\nSource B: ${EXAM_01_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-01-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Source A, from "Walk through any British city centre" to "designed to protect".\n\nWhich four of the statements below are true? Write down their letters, and choose no more than four.\n\nA) The sleeping bags give strong protection against the wind.\nB) After midnight, people can be seen huddled in doorways in British city centres.\nC) The writer spent a month in Manchester.\nD) The writer describes the wind as biting.\nE) The writer volunteered with a street outreach team.\nF) The outreach work took place in the summer.\nG) The writer blames poor personal choices for homelessness.\nH) What the writer saw changed their understanding of homelessness.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_01_SOURCE_A}\n\nSource B:\n${EXAM_01_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_01_SOURCE_A_REF} | Source B: ${EXAM_01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, D, E, H. B: "after midnight and you will see them: figures huddled in doorways". D: "the biting wind". E: "I spent a week volunteering with a street outreach team". H: "what I witnessed fundamentally changed my understanding of homelessness". A is false: the sleeping bags "offer little protection". C is false: the writer spent "a week" there, not a month. F is false: the work was done "Last January". G is false: homelessness is not "a matter of poor choices".',
              'Grade 6-7':
                'B, D, E, H. A is contradicted by "little protection against the biting wind". C is false: the writer spent "a week" volunteering, not a month. F is false: the work took place "Last January", in winter. G is refuted directly: homelessness is "not, as comfortable narratives suggest, a matter of poor choices", but "a matter of systems failing the people they were designed to protect".',
            },
            markScheme: [
              'True: B, D, E, H. One mark for each, up to 4.',
              'B: "you will see them: figures huddled in doorways", after midnight.',
              'D: "the biting wind".',
              'E: the writer spent a week "volunteering with a street outreach team".',
              'H: what the writer witnessed "fundamentally changed" their understanding.',
              'Not true: A (the bags give "little protection"), C (a week, not a month), F (it was "Last January"), G (homelessness is not "a matter of poor choices").',
              'Each statement is judged against the first paragraph alone. The paper asks for no more than four.',
            ],
          },
          {
            id: 'aqa-p2-01-q2',
            questionNumber: 2,
            questionText:
              'This question is about both sources.\n\nDavid, in Source A, and the man Greenwood calls a "casual pauper", in Source B, both have nowhere to live. What can you infer about the differences between their situations?\n\nBack up what you infer with details from both sources.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_01_SOURCE_A}\n\nSource B:\n${EXAM_01_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_01_SOURCE_A_REF} | Source B: ${EXAM_01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'David and the casual pauper are in different situations, first because of how they became homeless. David was a "former electrician" who lost his job "after a back injury" and was "evicted within six weeks", which suggests that in Source A someone with a steady job can lose everything very quickly. Greenwood says only that the man became a casual pauper "out of sheer misfortune and hard necessity", and that the officials "never considered" why he came to them, which suggests that nobody asked about his story at all. They also look for help in different places. David has been "sleeping rough for eight months", so he seems to have nowhere to go, and it is volunteers on a "street outreach team" who find him. The pauper goes to an institution: he comes "knocking at the workhouse-gate, craving shelter and a mouthful of bread", which suggests there was somewhere for him, but that he had to beg to get in. The biggest difference is how other people treat them. David feels "invisible", as if people do not even notice him. The pauper is noticed but judged: the official thinks a man who begs is "more mean and contemptible" than a thief, so he is treated almost like a criminal.',
              'Grade 6-7':
                'The clearest difference between David and Greenwood\'s casual pauper lies less in their poverty than in the way the world responds to it. David\'s fall is traced in detail: a "former electrician", he lost his job "after a back injury", fell behind on rent and was "evicted within six weeks". The precision suggests that in Source A homelessness can strike a working, tax-paying man almost overnight, and that someone has taken the trouble to hear his story. The pauper is given no story of his own. He became a pauper "out of sheer misfortune and hard necessity" and is "without a voice or a single friend": where David is quoted in his own words, the pauper never speaks, and Greenwood has to speak for him. Their needs, and where they turn, differ too. The pauper asks for the barest things, "shelter and a mouthful of bread", and must come "knocking at the workhouse-gate" for them, which implies that relief existed but had to be pleaded for. David is "sleeping rough", and the only help he is shown receiving comes from volunteers on the street, which suggests that the institutions meant to catch him have not done so; the writer calls it "systems failing the people they were designed to protect". Above all, they are wronged in opposite ways. David\'s word for himself is "invisible", a word the writer heard "again and again" from rough sleepers: society does not see him at all. The pauper is seen only too clearly, and judged. The official Greenwood calls "Bumble", after the beadle in Dickens\'s Oliver Twist, believes a man who begs a loaf "more mean and contemptible" than one who steals it, and treats the pauper as his "victim". One man is ignored; the other is treated almost as a criminal.',
            },
            markScheme: {
              'What to reward': [
                "Inferences about how David's situation differs from the casual pauper's, each backed by details from both sources.",
                'How they became homeless: David\'s fall is precise and sudden ("former electrician", "evicted within six weeks"); the pauper\'s is put down to "sheer misfortune and hard necessity", and the officials "never considered" his reasons.',
                'Voice: David is quoted in his own words; the pauper is "without a voice or a single friend".',
                'Help: David sleeps rough and is found by volunteers; the pauper must come "knocking at the workhouse-gate" to beg for "shelter and a mouthful of bread".',
                'How others see them: David is "invisible"; the pauper is seen and judged "more mean and contemptible" than a thief.',
                "Points about similarities, or about the writers' language, are not what this question rewards.",
              ],
              'Levels (8 marks)': Q2_LEVELS,
            },
          },
          {
            id: 'aqa-p2-01-q3',
            questionNumber: 3,
            questionText:
              'This question is about Source A only.\n\nLook again at the second and third paragraphs, from "On our first night" to the end of the source.\n\nHow does the writer use language in these lines to make the homelessness crisis seem urgent?\n\nSupport your points with short quotations from these lines, using subject terms where they help.',
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_01_SOURCE_A}`,
            extractSource: EXAM_01_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses David\'s story to make the crisis feel real and urgent. David lost his job, fell behind on his rent and was "evicted within six weeks", and putting these events one after another shows how quickly a person can lose their home. The writer calls the speed of it "breathtaking", which suggests shock. David\'s own words, that one day "you\'re paying taxes" and the next "you\'re invisible", make the problem personal. The writer repeats "invisible" to emphasise how society ignores homeless people, and the short sentences "Not forgotten. Invisible." make the reader stop and think. The statistics, "over 300,000 people" and "over one billion pounds", shock the reader with the size of the problem. At the end, the sentence "We are actively manufacturing it" is powerful because "manufacturing" suggests the crisis is being made on purpose, so it needs to be stopped now.',
              'Grade 6-7':
                'The writer makes the crisis urgent by moving from one man\'s story to national figures, so that a single case becomes a pattern. David is introduced with precise detail, a "forty-three-year-old former electrician" who had been "sleeping rough for eight months", and "former electrician" presents him as a skilled, working man, which closes off any idea that homelessness happens only to other kinds of people. His fall is told in a list of three, he had "lost his job", "fallen behind on rent" and "been evicted within six weeks", and the quick run of the list mirrors the speed of the descent, which the writer calls "breathtaking". David\'s own antithesis, "One day you\'re paying taxes" and "the next you\'re invisible", compresses a life into a sentence, and his "you" warns the reader that this could happen to anyone. The word "invisible" is then repeated and sharpened by two sentence fragments, "Not forgotten. Invisible.", which insist on a distinction: the forgotten were once noticed, but the invisible are not seen at all. The final paragraph turns to statistics, "over 300,000 people", "over one billion pounds annually", "twenty-three per cent", which give the argument authority and scale. The most urgent language comes last. The contrast in "managing a crisis rather than preventing one" suggests that money is spent on the wrong task, and the closing pair of sentences moves from failure to guilt: "We are not merely failing to solve this problem. We are actively manufacturing it." The verb "manufacturing" turns policy into a factory process that produces homelessness, and the inclusive "We" makes the reader share the blame, so the need to act feels immediate.',
              'Grade 8-9':
                'The writer builds urgency by refusing the reader any distance from the crisis, first through one man\'s testimony and then through figures that turn it into an accusation. David is introduced with the detail of a case file, "a forty-three-year-old former electrician", and the occupation matters: an electrician is skilled, employed and ordinary, so the reader cannot treat him as a stranger to their own world. His descent is compressed into a single sentence of three clauses, from losing "his job after a back injury" to being "evicted within six weeks", with the time phrase arriving last, like a verdict; the short sentence that follows, "The speed of his descent was breathtaking.", names the reader\'s own shock. David\'s testimony is the centre of the passage. The antithesis of "One day you\'re paying taxes" and "the next you\'re invisible" turns a whole life into a before and after, and the general "you" makes his experience a vulnerability anyone might share. The writer then subjects "invisible" to a kind of correction, "Not forgotten. Invisible.", where the fragments work with the precision of a diagnosis. The distinction matters: to be forgotten implies that one was once known, while to be invisible is to have been erased from sight altogether, "As though they had ceased to exist entirely." The final paragraph shifts into the language of government, "over 300,000 people", "over one billion pounds annually", "twenty-three per cent in real terms", but the writer turns that bureaucratic register against itself. The phrase "money spent managing a crisis rather than preventing one" exposes the spending as waste, and the closing sentences replace failure with intent: "We are not merely failing to solve this problem. We are actively manufacturing it." The verb "manufacturing" imports the vocabulary of industry, so that homelessness becomes a product, assembled from the cuts and waiting lists the paragraph has just listed, and the adverb "actively" removes the excuse of accident. Because the pronoun is "We", the reader is implicated in the manufacture, and the urgency becomes personal: a crisis that is being made can also be stopped.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of language from the second and third paragraphs only, focused on how it makes the crisis seem urgent.',
                'David\'s story: the precise detail ("former electrician", "evicted within six weeks"), the list of three that tells his fall, and the word "breathtaking".',
                'David\'s antithesis, "One day you\'re paying taxes" and "the next you\'re invisible", and the repetition of "invisible" in the fragments "Not forgotten. Invisible."',
                'The statistics, which give scale and authority ("over 300,000 people", "over one billion pounds annually").',
                'The contrast "managing a crisis rather than preventing one" and the closing accusation, with the verb "manufacturing", the adverb "actively" and the inclusive "We".',
                'Subject terms used accurately where they help: list of three, antithesis, sentence fragment, statistics, inclusive pronoun.',
              ],
              'Levels (12 marks)': Q3_LEVELS,
            },
          },
          {
            id: 'aqa-p2-01-q4',
            questionNumber: 4,
            questionText:
              "This question is about the whole of Source A and the whole of Source B.\n\nBoth sources are about the way society treats people who have no home. Compare the two writers' feelings and perspectives on it, and the methods each one uses to convey them.\n\nAim to:\n- set the two writers' feelings and views side by side, point by point\n- explain how each writer's language, tone and structure convey those views\n- back up your points with short quotations from both sources.",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_01_SOURCE_A}\n\nSource B:\n${EXAM_01_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_01_SOURCE_A_REF} | Source B: ${EXAM_01_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers criticise the way society treats homeless people. The writer of Source A uses statistics such as "over 300,000 people" and "one billion pounds" to show how big the problem is, and blames society as a whole, the reader included: "We are actively manufacturing it." Greenwood uses no statistics. Instead he compares the homeless man with violent criminals, who are given "calm judicial investigation", while the workhouse official has "no mercy" for the hungry pauper. Both writers use a person to make the problem real: Source A quotes David, while Source B describes "the poor fellow" who comes to the workhouse for bread. Greenwood also mocks the official, saying his head is "the otherwise empty region" under his hat. The writer of Source A sounds urgent and serious, while Greenwood is angry but uses mockery. Both want the reader to see that these people have been treated unfairly.',
              'Grade 6-7':
                'Both writers argue that society has failed homeless people, but they place the failure differently and use different methods. The writer of Source A addresses the reader directly ("Walk through any British city centre after midnight and you will see them") and builds from one man\'s story to national figures, ending with the accusation that "We are actively manufacturing it": the inclusive "We" makes every reader part of the system that produces homelessness. Greenwood, writing in 1869, looks back on a way of thinking he hopes is passing ("It is to be hoped that we are gradually emerging from our bemuddlement"), and his method is ironic comparison. One long sentence sets the treatment of violent criminals, who "claimed and was entitled to calm judicial investigation", against that of "the poor fellow who became a casual pauper", who "was without a voice or a single friend": the pauper arrives only at the end of the sentence, after all the consideration given to the criminals, and is given nothing. Where the writer of Source A blames "systems", Greenwood gives the system a face, the official he calls Bumble, a "pig-headed Jack-in-office" whose head is "the otherwise empty region that Bumble\'s cocked-hat covered". The contrast between "a crust off a parish loaf" and "stolen roast beef" exposes the absurd logic by which begging is judged worse than stealing. Both writers deny that the homeless deserve their fate: David lost his job "after a back injury", and Greenwood\'s man fell "out of sheer misfortune and hard necessity". The tones differ, though. The writer of Source A is urgent and uses evidence; Greenwood is scornful, and his closing words, "he treated his victim accordingly", call the pauper a "victim", making the official, not the pauper, the wrongdoer.',
            },
            markScheme: {
              'What to reward': [
                'A comparison of the writers\' feelings and perspectives: both deny that the homeless deserve their fate, but the writer of Source A blames "systems" and government spending, and Greenwood a merciless parish official and the ratepayers who trust him.',
                'Methods compared: Source A\'s direct address, one man\'s story widened by national figures, and the inclusive "We"; Greenwood\'s long ironic sentence setting criminals\' "calm judicial investigation" against the pauper\'s treatment, his mockery of "Bumble", and "a crust off a parish loaf" set against "stolen roast beef".',
                'Tone: urgent and evidence-led in Source A; scornful in Source B, which ends by calling the pauper a "victim".',
                'Perspectives shaped by their times: a modern writer counting the cost of a national crisis; a Victorian writer hoping his society is "gradually emerging" from an old way of thinking.',
                'Comparison kept up across both whole sources, rather than one source and then the other.',
              ],
              'Levels (16 marks)': Q4_LEVELS,
            },
          },
        ],
      },
      {
        id: 'aqa-p2-01-writing',
        title: 'Section B: Writing',
        description:
          'Spend about 45 minutes on this section: about 5 minutes planning, 35 writing and 5 checking. Write in full sentences, and leave time at the end to check your spelling and punctuation.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-01-q5',
            questionNumber: 5,
            questionText:
              '"Homelessness is not a natural disaster. It is a political choice, and it is a choice we can reverse."\n\nA broadsheet newspaper has invited its readers to send in opinion articles on this statement. Write your article for the paper, setting out your own view and arguing for it.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear argumentative article that: directly addresses the statement; uses some persuasive devices such as rhetorical questions and statistics; has a clear introduction, body, and conclusion; matches the register of a newspaper article; demonstrates generally accurate spelling and punctuation with some sentence variety.',
              'Grade 6-7':
                'A compelling argument that: engages critically with the statement rather than simply agreeing or disagreeing; uses a range of persuasive techniques including counter-argument; deploys evidence and examples effectively (may draw on source material); sustains an appropriate register for a broadsheet audience; demonstrates consistent technical accuracy with ambitious vocabulary and varied sentence structures.',
              'Grade 8-9': `Nobody Is Born in a Doorway\n\nHomelessness is not bad luck on a national scale. It is the result of decisions, and decisions can be changed.\n\nWhen a river floods a village, nobody asks whose fault the rain was. We send help, we rebuild and, if we are wise, we raise the flood defences. Homelessness is often spoken about in the same way, as though it simply happens to a country, like a storm arriving from somewhere beyond our control. That comparison is not only wrong but convenient, because it lets us feel sorry without feeling responsible. The statement is right. Homelessness is a political choice, and a choice is something we can make differently.\n\nConsider how a person actually loses a home. It is rarely one dramatic event. More often it is a chain: a job lost after an illness, a rent that rises faster than wages, a family that breaks apart, a support service that has closed or keeps people waiting for months. Every link in that chain is shaped by decisions that someone has made, about how many homes are built, how much rents may rise and how quickly help arrives. None of them is a law of nature. A chain forged by human hands can be broken by human hands.\n\nSome readers will object that people make their own choices, and that no government can protect everyone from their mistakes. There is truth in this. Everyone makes mistakes, and some people who sleep rough face difficulties that no housing policy could solve on its own. But the argument proves less than it seems to. Not everyone who makes a mistake is punished for it by losing a roof. What turns a setback into a catastrophe is usually the absence of a safety net, and the strength of that net is decided in Parliament and in council chambers, not in the sky.\n\nHistory offers an encouraging lesson. In 1869 the journalist James Greenwood described how a man who begged for bread at the workhouse gate could be treated as worse than a thief: he was "without a voice or a single friend". The officials who ran such places were sure that poverty was a moral failing, and they treated the poor accordingly. We no longer think that way, and the workhouses have gone. Attitudes that once seemed as fixed as the weather turned out to be choices, and they were reversed.\n\nWhat would reversing this choice look like now? It would mean building enough homes that ordinary people can afford, so that one lost pay packet does not lead to an eviction notice. It would mean help that reaches people before they reach the street, instead of emergency measures once the damage is done. Above all, it would mean treating a person without a home as a fellow citizen with a claim on us, not as a problem to be moved along.\n\nNone of this is simple, and none of it is free. But it costs far less, in money and in human misery, than paying for the consequences of a crisis we refuse to prevent. A natural disaster is something we must endure. Homelessness is something we have allowed. The good news is that anything we have allowed, we can also stop allowing.`,
            },
            markScheme: {
              'What to reward': [
                'A clear view of the statement, argued consistently: the writer may agree, disagree or argue for a position in between.',
                'The conventions of an opinion article for broadsheet readers: a headline, an opening that draws the reader in, a measured but forceful register, paragraphs that build the case, and a strong ending.',
                'Evidence and examples chosen for a purpose. Ideas from the sources may be used, though they are not required.',
                'An opposing view answered rather than ignored.',
              ],
              'Content and organisation (AO5, 24 marks)': Q5_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': Q5_AO6_LEVELS,
            },
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
        description: `Spend about 15 minutes reading Source A, Source B and the questions. Then answer all four questions in this section, allowing about 45 minutes for them.\n\nSource A: ${EXAM_02_SOURCE_A_REF}\nSource B: ${EXAM_02_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-02-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Source A, from "Our education system is broken" to "catastrophically wrong".\n\nWhich four of the statements below are true? Write down their letters, and choose no more than four.\n\nA) The writer thinks the education system is not working.\nB) Children start school at the age of seven.\nC) The writer thinks the system works well for most students.\nD) Five-year-olds are described as bright-eyed.\nE) Sixteen-year-olds leave school feeling confident.\nF) Five-year-olds start school full of curiosity.\nG) Sixteen-year-olds leave school feeling anxious.\nH) Pupils\' results are given as a string of letters.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_02_SOURCE_A}\n\nSource B:\n${EXAM_02_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_02_SOURCE_A_REF} | Source B: ${EXAM_02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, D, F, G. A: "Our education system is broken". D: five-year-olds enter school "bright-eyed". F: they are "bursting with curiosity". G: sixteen-year-olds leave "drained, anxious". B is false: it is "five-year-olds" who enter school. C is false: the writer says "something goes catastrophically wrong". E is false: they leave "drained, anxious", not confident. H is false: the results slip shows "a string of numbers", not letters.',
              'Grade 6-7':
                'A, D, F, G. B is false: "a fresh cohort of five-year-olds enters school", so children start at five, not seven. C is contradicted by "Our education system is broken" and "something goes catastrophically wrong". E is false: the sixteen-year-olds leave "drained, anxious", not confident. H is false: the results slip carries "a string of numbers", not letters.',
            },
            markScheme: [
              'True: A, D, F, G. One mark for each, up to 4.',
              'A: "Our education system is broken".',
              'D: five-year-olds enter school "bright-eyed".',
              'F: they are "bursting with curiosity".',
              'G: sixteen-year-olds leave "drained, anxious".',
              'Not true: B (school starts at five), C (something goes "catastrophically wrong"), E (they leave "drained, anxious"), H (the results slip shows "a string of numbers").',
              'Each statement is judged against the first paragraph alone. The paper asks for no more than four.',
            ],
          },
          {
            id: 'aqa-p2-02-q2',
            questionNumber: 2,
            questionText:
              'This question is about both sources.\n\nWhat can you infer about the differences between the young people described in Source A and the young people described in Source B?\n\nBack up what you infer with details from both sources.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_02_SOURCE_A}\n\nSource B:\n${EXAM_02_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_02_SOURCE_A_REF} | Source B: ${EXAM_02_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The young people in the two sources are let down by education in different ways. In Source A they are harmed in how they feel. They start school "bright-eyed and bursting with curiosity" but leave "drained, anxious", which suggests that years of tests have worn out their energy and confidence. Arnold\'s young man is let down in his understanding instead. He was at a training college, so he was training to be a teacher, but he turned a line of Macbeth into "Can you not wait upon the lunatic?", which shows he had not understood what Shakespeare meant. This suggests his education had not taught him to read literature closely, even though he would soon be teaching others. They also face different pressures. In Source A children are tested "at seven, at eleven, at sixteen, and at eighteen", so they are measured all the time. In Source B the danger is a student who learns only science and so knows "nothing of humane letters", meaning literature and history. The writer of Source A worries that young people are unhappy, with "anxiety disorders", while Arnold worries that they will be "incomplete".',
              'Grade 6-7':
                'The young people in Source A are damaged in their feelings, while those in Source B are left lacking in understanding. The writer of Source A traces a change from "bright-eyed and bursting with curiosity" at five to "drained, anxious" at sixteen, and the word "drained" suggests that something has been taken out of them in the years between. They even come to believe that "their worth as human beings" can be measured in "a string of numbers", which implies that constant testing has taught them to judge themselves by their grades. Arnold is concerned less with how his young people feel than with what they understand. His example is "a young man in one of our English training colleges", someone being trained to teach, who paraphrased "Can\'st thou not minister to a mind diseased?" as "Can you not wait upon the lunatic?". The flatness of the paraphrase suggests a mind that can handle words but cannot hear what they mean, and because he is to be a teacher, the gap is likely to be passed on to his pupils. The causes differ too. Source A\'s children are tested "at seven, at eleven, at sixteen, and at eighteen": they are measured too often. Arnold\'s danger is too narrow a diet, natural science without "humane letters", so that a student "perpetually accumulating natural knowledge" will be left "unsatisfied, or at any rate incomplete". Finally, the scale differs. Source A speaks for a whole "generation", with "anxiety disorders at twice the rate of previous generations", which suggests a harm already spread across the country. Arnold builds his case on a single student and on imagined pupils who know that "the moon is two thousand one hundred and sixty miles in diameter", and his "what a curious state of things it would be" suggests that, for him, the danger is still a possibility to be prevented.',
            },
            markScheme: {
              'What to reward': [
                'Inferences about how the young people in Source A differ from those in Source B, each backed by details from both sources.',
                'What is harmed: feelings and self-worth in Source A ("drained, anxious", "their worth as human beings"); understanding in Source B (the paraphrase "Can you not wait upon the lunatic?").',
                'The cause: constant testing in Source A ("at seven, at eleven, at sixteen, and at eighteen"); in Source B, an education in natural science alone, knowing "nothing of humane letters".',
                'Scale: a whole "generation" in Source A, a harm already widespread; in Source B one student teacher and pupils Arnold imagines, a danger still to be prevented.',
                "Points about similarities, or about the writers' language, are not what this question rewards.",
              ],
              'Levels (8 marks)': Q2_LEVELS,
            },
          },
          {
            id: 'aqa-p2-02-q3',
            questionNumber: 3,
            questionText:
              'This question is about Source A only.\n\nLook again at the first two paragraphs, from "Our education system is broken" to "twice the rate of previous generations".\n\nHow does the writer use language in these lines to argue that the education system needs fundamental reform?\n\nSupport your points with short quotations from these lines, using subject terms where they help.',
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_02_SOURCE_A}`,
            extractSource: EXAM_02_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer starts with the blunt statement "Our education system is broken", which immediately tells the reader there is a serious problem. The word "broken" suggests something that no longer works and needs fixing. The contrast between five-year-olds who are "bright-eyed and bursting with curiosity" and sixteen-year-olds who are "drained, anxious" shows how school damages children. The word "drained" is powerful because it suggests all their energy has been taken away. The writer says the system is "obsessed with measurement", which makes it sound out of control. The list "at seven, at eleven, at sixteen, and at eighteen" shows how often children are tested, and the verbs in "rank them, grade them, sort them into sets" make children sound like objects being sorted. Because the writer says "The problem is not our teachers", the reader sees that the whole system has to change, not just the people in it.',
              'Grade 6-7':
                'The writer frames the education system as actively destructive through a before-and-after contrast. The first paragraph sets "bright-eyed and bursting with curiosity" against "drained, anxious", and "drained" implies that the system has taken something vital out of children. The alliteration of "bright-eyed and bursting" suggests energy and potential, which makes the loss more keenly felt. The phrase "something goes catastrophically wrong" is deliberately vague: the adverb "catastrophically" is emotionally charged, but "something" holds back the cause, raising a question that the next paragraph answers. That paragraph opens by ruling out the obvious culprit, "The problem is not our teachers", which answers the most likely counter-argument before the blame moves to a system "so obsessed with measurement". The word "obsessed" presents the system as compulsive rather than merely mistaken, and the paradox that it "has forgotten what it is supposed to be measuring" suggests that it has lost its purpose. The list of test points, "at seven, at eleven, at sixteen, and at eighteen", creates a relentless rhythm, and the run of verbs in "rank them, grade them, sort them into sets" treats children like goods on a production line. The paragraph ends in irony: we "express surprise" when they develop "anxiety disorders at twice the rate of previous generations", as though the result were not obvious. Because the fault lies in the system itself rather than in its teachers, the language leaves fundamental reform as the only answer.',
              'Grade 8-9':
                'The writer constructs the argument as a diagnosis: the education system is presented not merely as flawed but as pathological, a system whose dysfunction has become its defining characteristic. The opening sentence, "Our education system is broken - and we all know it", performs two rhetorical operations at once. Its dash creates a pause that mimics reluctant admission, while "we all know it" turns a contested claim into received wisdom, recruiting the reader\'s agreement before the argument has begun. The first paragraph\'s time structure, from "Every autumn" to "every summer", frames schooling as a cycle repeated year after year, and the seasonal language gives the damage the inevitability of a natural law. The verb "reduced" in "can be reduced to a string of numbers" is precisely chosen: it means both "diminished" and "converted", implying that examinations perform an act of violent simplification upon human complexity. In the second paragraph, the precision of "fifty-four hours per week" lends authority, while "salaries that would make a city banker laugh" introduces class through an image of contemptuous amusement, presenting teachers as undervalued by the same logic that drives the testing regime. The paradox at the centre of the paragraph, a system "so obsessed with measurement" that it "has forgotten what it is supposed to be measuring", accuses it of having lost its purpose. The list "rank them, grade them, sort them into sets" extends the idea through three verbs that progressively dehumanise, moving from numerical ("rank") through evaluative ("grade") to institutional ("sort them into sets"), each step further from the individual child. The repeated "We" makes the reader part of the machine, and the closing irony, that we "express surprise" at "anxiety disorders at twice the rate of previous generations", exposes a system that cannot see its own effects. A system whose faults are this structural cannot be patched, and the language leaves fundamental reform as the only response.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of language from the first two paragraphs only, focused on how it argues that the system needs fundamental reform.',
                'The blunt opening, "Our education system is broken", and the assumed agreement of "we all know it".',
                'The contrast between "bright-eyed and bursting with curiosity" and "drained, anxious", and the vague but charged "something goes catastrophically wrong".',
                'The counter-argument ruled out in "The problem is not our teachers", and the blame moved to a system "so obsessed with measurement".',
                'The lists "at seven, at eleven, at sixteen, and at eighteen" and "rank them, grade them, sort them into sets", and the irony of "express surprise".',
                'Subject terms used accurately where they help: contrast, alliteration, counter-argument, paradox, list, irony, inclusive pronoun.',
              ],
              'Levels (12 marks)': Q3_LEVELS,
            },
          },
          {
            id: 'aqa-p2-02-q4',
            questionNumber: 4,
            questionText:
              "This question is about the whole of Source A and the whole of Source B.\n\nBoth sources are about the failings of education. Compare the two writers' feelings and perspectives on those failings, and the methods each one uses to convey them.\n\nAim to:\n- set the two writers' feelings and views side by side, point by point\n- explain how each writer's language, tone and structure convey those views\n- back up your points with short quotations from both sources.",
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
            markScheme: {
              'What to reward': [
                'A comparison of feelings and perspectives: both writers think an education can narrow the mind; the writer of Source A is alarmed and angry about testing and children\'s well-being, Arnold wry and courteous about a training in science that leaves out "humane letters".',
                'Methods compared: Source A\'s blunt declaration ("Our education system is broken - and we all know it"), its before-and-after contrast and its statistics; Arnold\'s opening concession, his comic example ("Can you not wait upon the lunatic?") repeated for effect, and the precise figure for the moon\'s diameter.',
                'Endings: Source A\'s confident "There is another way"; Arnold\'s modest "I think I would rather have".',
                'Perspectives shaped by their times and roles: a modern writer speaking for anxious families; a Victorian lecturer answering a man of science who had called literature and history "the less useful alternative".',
                'Comparison kept up across both whole sources, rather than one source and then the other.',
              ],
              'Levels (16 marks)': Q4_LEVELS,
            },
          },
        ],
      },
      {
        id: 'aqa-p2-02-writing',
        title: 'Section B: Writing',
        description:
          'Spend about 45 minutes on this section: about 5 minutes planning, 35 writing and 5 checking. Write in full sentences, and leave time at the end to check your spelling and punctuation.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-02-q5',
            questionNumber: 5,
            questionText:
              '"Examinations are the enemy of real learning. Schools should assess students through coursework, projects, and portfolios instead."\n\nYou have been invited to speak about this statement at a conference for teachers, parents and school leaders. Write the speech you would give, setting out your own view and arguing for it.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech that: addresses the audience directly; uses some persuasive devices (rhetorical questions, personal anecdotes); has a logical structure; matches the register of a speech (direct address, spoken markers); demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-crafted speech that: engages with both sides of the argument; uses rhetorical techniques suited to the spoken form, such as repetition, tricolon and direct audience engagement; deploys evidence and personal experience effectively; maintains a consistent spoken register; demonstrates consistent technical accuracy with ambitious vocabulary.',
              'Grade 8-9': `Good morning, everyone, and thank you for inviting a student to speak at a conference about students. It happens less often than it should.\n\nI have been asked whether examinations are the enemy of real learning. I want to give you an honest answer, and it is not quite the one the statement expects. Exams are not the enemy. But they have grown into a bully, and a bully needs to be put back in its place.\n\nLet me begin with what exams do well, because those who want to abolish them sometimes forget it. An exam is fair in one important way. Everyone sits the same paper, at the same time, in the same silence. Nobody's older sister helped to write it. Nobody's parents paid a tutor to polish it the night before. Coursework, for all its strengths, can quietly reward the students who have the most help at home. If every exam were replaced by a portfolio, I am not convinced that the students who gained most would be the ones who need it most.\n\nSo why do I still believe that something has gone wrong? Because of what exams have done to the way we learn. Think about the question you hear most often in a classroom. It does not begin with why, or with what if. It is this: will it be in the exam? That one question tells you everything. When the test becomes the purpose of learning, curiosity becomes a waste of time. We learn to memorise paragraphs instead of forming our own ideas. We learn which topics we can safely ignore. In the end, we learn that a subject is worth knowing only for as long as it can be marked.\n\nWe learn something else too, something no syllabus ever intended. I have watched friends who love history, who read about it for pleasure, decide that they are "bad at it" because they panic in a timed paper. A single morning in a sports hall can undo years of genuine interest. That is not a measure of learning. It is a measure of nerve.\n\nWhat, then, am I asking you to do? Not to tear down the exam hall, but to make it one room in a larger house. Let a project sit beside the written paper, so that a student who can research, plan and present over several weeks has the chance to show it. Let a portfolio record how far a student has come, not only where they stood on one morning in June. Use exams for what they measure well, and stop asking them to measure everything.\n\nSome of you will say that this means more work for teachers who are already stretched. You are right, and I do not say it lightly. But I would ask you to weigh that work against the cost of doing nothing: a generation that can pass tests but has forgotten why it ever wanted to learn.\n\nYou are the people who decide how we are assessed. Please remember that we are more than the results we produce. Measure us, by all means. Just make sure you are measuring the things that matter.\n\nThank you.`,
            },
            markScheme: {
              'What to reward': [
                'A clear view of the statement, argued consistently: the writer may agree, disagree or argue for a position in between.',
                'The conventions of a speech to teachers, parents and school leaders: a greeting, direct address, spoken signposts, devices that work when heard aloud, and an ending that stays with the audience.',
                'Evidence and examples chosen for a purpose. Ideas from the sources may be used, though they are not required.',
                'An opposing view answered rather than ignored.',
              ],
              'Content and organisation (AO5, 24 marks)': Q5_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': Q5_AO6_LEVELS,
            },
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
        description: `Spend about 15 minutes reading Source A, Source B and the questions. Then answer all four questions in this section, allowing about 45 minutes for them.\n\nSource A: ${EXAM_03_SOURCE_A_REF}\nSource B: ${EXAM_03_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-03-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Source A, from "Last Tuesday" to "everything is fine".\n\nWhich four of the statements below are true? Write down their letters, and choose no more than four.\n\nA) The daughter was reading a magazine.\nB) She scrolled through notifications for five minutes.\nC) The writer\'s daughter is fourteen years old.\nD) She read three pages before she reached for her phone.\nE) The writer blames laziness for this behaviour.\nF) The writer thinks we should pretend that everything is fine.\nG) She went back to her book and read the same paragraph again.\nH) The writer blames technology for her behaviour.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_03_SOURCE_A}\n\nSource B:\n${EXAM_03_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_03_SOURCE_A_REF} | Source B: ${EXAM_03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'C, D, G, H. C: "my fourteen-year-old daughter". D: "She managed three pages before reaching for her phone". G: she returned "to the book" only "to re-read the same paragraph she had already finished". H: "This is what technology has done to the adolescent brain". A is false: she was reading "a novel". B is false: she scrolled for "ten minutes". E is false: "This is not laziness." F is false: the writer wants us to talk about it "honestly rather than pretending that everything is fine".',
              'Grade 6-7':
                'C, D, G, H. A is false: she was trying to read "a novel", not a magazine. B is false: she scrolled for "ten minutes", not five. E is directly contradicted by "This is not laziness." F reverses the writer\'s view, which is that we need to talk about it "honestly rather than pretending that everything is fine".',
            },
            markScheme: [
              'True: C, D, G, H. One mark for each, up to 4.',
              'C: "my fourteen-year-old daughter".',
              'D: "She managed three pages before reaching for her phone".',
              'G: she went back only "to re-read the same paragraph".',
              'H: "This is what technology has done to the adolescent brain".',
              'Not true: A (it was "a novel"), B (it was "ten minutes"), E ("This is not laziness"), F (we should talk about it "honestly rather than pretending").',
              'Each statement is judged against the first paragraph alone. The paper asks for no more than four.',
            ],
          },
          {
            id: 'aqa-p2-03-q2',
            questionNumber: 2,
            questionText:
              'This question is about both sources.\n\nEach writer describes the new technology of their own time: in Source A, the phone and its screen; in Source B, machinery and the new means of travel and communication. What can you infer about the differences between these two kinds of technology?\n\nBack up what you infer with details from both sources.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_03_SOURCE_A}\n\nSource B:\n${EXAM_03_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_03_SOURCE_A_REF} | Source B: ${EXAM_03_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The technology in the two sources does very different things to people. In Source A the phone affects the mind: teenagers who spend a long time on screens have "reduced attention spans" and more "anxiety and depression", and the writer\'s daughter manages only "three pages" of her book before "reaching for her phone". This suggests that the phone pulls people away from things that matter. Huxley\'s machines change the way people live. Because of them "the general standard of comfort has been raised" and "the ravages of pestilence and famine have been checked", which suggests that the inventions of his time made ordinary life safer and easier. They also seem to be made for different reasons. In Source A the phone runs on "an algorithm designed not to inform or educate but to addict", so it seems to work against the people using it. Huxley\'s new ways of travelling and communicating bring people together, helping to remove "local ignorance and prejudice". The writer of Source A thinks children need "boundaries" to protect them from technology, while Huxley calls the change a "revolution" and mentions no harm that it has done.',
              'Grade 6-7':
                'The technology in Source A acts on the mind and harms it; the technology in Source B acts on the material world and improves it. The phone and its screens bring "measurably reduced attention spans, lower reading comprehension scores" and more "anxiety and depression", and they run on "an algorithm designed not to inform or educate but to addict", which implies a technology that serves its makers rather than its users. Huxley\'s machinery, better processes and "the invention of new ones" have multiplied "the commodities and conveniences of existence", raised "the general standard of comfort" and checked "the ravages of pestilence and famine", which suggests that for his readers new technology meant longer and easier lives. Connection works differently too. The phone draws a teenager away from the book in front of her and into her "notifications"; the new "means of locomotion and intercommunication" of Huxley\'s age (the railway, the steamship and the telegraph) have reduced "the natural obstacles, which time and space offer", creating "common interests among the most widely separated peoples". Source A does grant "connection across distances", but only in passing, before its case against screens, which suggests that for its writer connection is a small gain set against a large loss. The scale differs as well: Source A\'s technology is measured in one household and in "four hours and twenty-two minutes" a day, Huxley\'s in "the History of Civilisation, during the last fifty years". Finally, the two technologies point to different futures. The writer of Source A thinks children must be given "boundaries", implying a danger that is still growing, while Huxley thinks the full significance of the change "cannot, as yet, be estimated at its full value", implying that its benefits have only begun.',
            },
            markScheme: {
              'What to reward': [
                'Inferences about how the technology in Source A differs from the technology in Source B, each backed by details from both sources.',
                'What it acts on: the mind in Source A ("reduced attention spans", "anxiety and depression"); daily life in Source B ("the general standard of comfort has been raised").',
                'Whom it serves: "an algorithm designed not to inform or educate but to addict", against machines that multiply "the commodities and conveniences of existence".',
                'Connection: a phone that pulls a reader from her book, with "connection across distances" granted only in passing, against transport and communication that create "common interests among the most widely separated peoples".',
                'Scale and future: one household and a call for "boundaries", against fifty years of civilisation and benefits that "cannot, as yet, be estimated".',
                "Points about similarities, or about the writers' language, are not what this question rewards.",
              ],
              'Levels (8 marks)': Q2_LEVELS,
            },
          },
          {
            id: 'aqa-p2-03-q3',
            questionNumber: 3,
            questionText:
              'This question is about Source A only.\n\nLook again at the second and third paragraphs, from "The evidence is now overwhelming" to the end of the source.\n\nHow does the writer use language in these lines to express concern about what technology is doing to young people?\n\nSupport your points with short quotations from these lines, using subject terms where they help.',
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_03_SOURCE_A}`,
            extractSource: EXAM_03_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer begins with the short, confident sentence "The evidence is now overwhelming", which makes the concern sound proven rather than just an opinion. The list of findings, from "reduced attention spans" to "significantly higher rates of anxiety and depression", builds up the harm one problem after another. The figure "four hours and twenty-two minutes" is precise, which makes it believable, and when the writer adds "That is not a statistic", the reader is made to think of it as part of a real life. The verb "surrendered" suggests that young people have given up in a battle, and the phrase "designed not to inform or educate but to addict" suggests that technology companies are hooking children on purpose, as if phones were a drug. The phrase "being used by it" reverses the normal idea of using technology, making young people sound like victims. The ending, "a childhood only partially lived", is sad because it suggests that children are missing out on part of growing up.',
              'Grade 6-7':
                'The writer expresses concern by building from scientific evidence to a moral judgement, so that worry becomes a demand for action. The second paragraph opens with the blunt declarative "The evidence is now overwhelming", which closes down doubt before any findings are given. The findings come as a list of three, from "measurably reduced attention spans" to "significantly higher rates of anxiety and depression", and the clinical adverbs "measurably" and "significantly" borrow the authority of research, while the harms grow more serious as the list moves from learning to mental health. The most powerful technique is the redefinition of a number. After "four hours and twenty-two minutes", the writer insists "That is not a statistic. That is nearly a third of their waking life", turning a figure into a share of a young person\'s existence. The verb "surrendered" makes the image military, of ground lost and freedom handed over, while "algorithm" reduces the opponent to cold machinery. The phrase "designed not to inform or educate but to addict" negates two positive verbs before ending on one that presents technology as a drug. In the final paragraph, the concession "I am not a Luddite" and the list of "extraordinary benefits" make the writer sound fair, which strengthens the turn on "But". The antithesis "using technology and being used by it" repeats one verb, first active and then passive, so that the user becomes the used, and "overwhelmingly" stresses how many children are on the wrong side. The verb "owe" in "We owe them boundaries" makes action a debt that adults must pay. The closing phrase "a childhood only partially lived" is deliberately understated: the adverb "partially" concedes that something is lived while insisting that something essential is missing.',
              'Grade 8-9':
                'The writer\'s language works by dismantling the reader\'s defences: each sentence closes an escape route, until concern becomes obligation. The paragraph opens with an unqualified declarative, "The evidence is now overwhelming", whose adverb "now" implies that a debate has ended. The findings follow in a cumulative list, from "measurably reduced attention spans" to "significantly higher rates of anxiety and depression", and the order matters: the harms move from the classroom to the mind, so the list grows more serious as it goes. The writer then moves from a study to a single figure, "four hours and twenty-two minutes", and refuses to let it remain a figure: "That is not a statistic." The sentence tells the reader how to process the information, converting a number into "nearly a third of their waking life". The phrase "surrendered to an algorithm designed not to inform or educate but to addict" layers several techniques. The verb "surrendered" casts young people as a defeated army, giving up their time to an enemy; "algorithm" makes that enemy impersonal; and the pattern "not to inform or educate but to addict" negates two values of the Enlightenment before introducing a verb from medicine and crime. The final paragraph begins with a pre-emptive concession, "I am not a Luddite calling for the smashing of machines", whose historical allusion makes the opposite extreme look absurd and so makes the writer\'s position sound moderate. The list of "extraordinary benefits" is generous, but it exists to be overturned by the conjunction "But". The antithesis "using technology and being used by it" repeats a single verb, first active and then passive, and so performs the reversal it describes, the subject becoming the object. The adverb "overwhelmingly" echoes "overwhelming" from the start of these lines, binding the evidence to the judgement. The closing sentence turns concern into duty through the verb "owe", and its final image, "a childhood only partially lived", draws its power from calculated understatement: "partially" is more unsettling than a total loss would be, because it concedes that something exists while insisting that it is not enough.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of language from the second and third paragraphs only, focused on how it expresses concern about what technology does to young people.',
                'The certainty of "The evidence is now overwhelming", and the list of findings with the clinical adverbs "measurably" and "significantly".',
                'The redefinition of a number in "That is not a statistic", and the image in "surrendered to an algorithm".',
                'The pattern "not to inform or educate but to addict", which ends on a verb from addiction.',
                'The concession "I am not a Luddite", the turn on "But", and the antithesis "using technology and being used by it".',
                'The moral verb in "We owe them boundaries", and the understatement of "a childhood only partially lived".',
                'Subject terms used accurately where they help: declarative, list, metaphor, concession, antithesis, active and passive voice, understatement.',
              ],
              'Levels (12 marks)': Q3_LEVELS,
            },
          },
          {
            id: 'aqa-p2-03-q4',
            questionNumber: 4,
            questionText:
              "This question is about the whole of Source A and the whole of Source B.\n\nBoth sources are about new technology and what it does to people. Compare the two writers' feelings and perspectives on it, and the methods each one uses to convey them.\n\nAim to:\n- set the two writers' feelings and views side by side, point by point\n- explain how each writer's language, tone and structure convey those views\n- back up your points with short quotations from both sources.",
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
            markScheme: {
              'What to reward': [
                'A comparison of feelings and perspectives: the writer of Source A is alarmed by what screens do to children, though not opposed to technology; Huxley is proud and confident, and admits no drawback to the changes he describes.',
                'Methods compared: Source A moves from one daughter to statistics and a moral demand, in the language of addiction and loss ("surrendered", "to addict"); Huxley surveys "the History of Civilisation" in long, formal sentences, with admiring words ("wonderful", "marvellous") and the image of science as a stream "dammed up for a thousand years".',
                'Contrast used differently: a moral line "between using technology and being used by it"; a historical line between the present and "former ages".',
                'Perspectives shaped by their times: a parent writing while the effects on children are still being measured; a Victorian scientist looking back on fifty years of railways, telegraphs and factories.',
                'Comparison kept up across both whole sources, rather than one source and then the other.',
              ],
              'Levels (16 marks)': Q4_LEVELS,
            },
          },
        ],
      },
      {
        id: 'aqa-p2-03-writing',
        title: 'Section B: Writing',
        description:
          'Spend about 45 minutes on this section: about 5 minutes planning, 35 writing and 5 checking. Write in full sentences, and leave time at the end to check your spelling and punctuation.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-03-q5',
            questionNumber: 5,
            questionText:
              '"Smartphones should be banned in schools. They are destroying young people\'s ability to learn, to concentrate, and to connect with each other."\n\nWrite a letter to the Secretary of State for Education, the government minister responsible for schools in England, giving your own view of this statement and the reasons for it.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear formal letter that: addresses the recipient appropriately; uses some persuasive devices; presents a logical argument with examples; matches the formal register of a letter to a government minister; demonstrates generally accurate spelling, punctuation, and grammar.',
              'Grade 6-7':
                'A well-structured formal letter that: engages with the complexity of the issue; deploys a range of persuasive techniques including counter-argument; uses evidence effectively; sustains an appropriately formal and respectful register throughout; demonstrates consistent technical accuracy with varied sentence forms.',
              'Grade 8-9': `Dear Secretary of State,\n\nI am writing as a Year 11 student to ask you to support a simple change that would make a real difference in schools across England: keeping smartphones out of lessons and corridors for the whole of the school day. I agree that phones should be banned in schools, although, as I will explain, I think the word "destroying" claims more than my own experience can show.\n\nLet me describe an ordinary lesson. A teacher begins to explain a difficult idea, and somewhere in the room a phone vibrates. It lasts only a second, but in that second, half the class looks up, and the student whose phone it is stops listening altogether. Concentration is not a tap that can be turned off and on again at no cost. Every interruption is paid for with the minutes it takes to find the thread again, and over a school day those minutes add up to lessons that were never really taught.\n\nThe harm does not end when the bell rings. At lunchtime I have seen groups of friends sitting together in complete silence, each of them looking at a screen. They are together and apart at the same time. School is one of the few places where young people from very different homes spend every day in each other's company, and it would be a great loss if we spent that time scrolling rather than talking.\n\nI am aware of the arguments against a ban, and I do not dismiss them. Some parents want to be able to reach their children, especially on the journey to and from school. Some students need their phones for medical reasons, or because they care for a relative at home. These are real needs, and any rule must respect them. But they are arguments for sensible exceptions, not for allowing phones in every lesson. A phone that is switched off and kept in a bag or a locker until home time is still there in an emergency.\n\nOthers will say that phones are tools for learning. Occasionally they can be, but schools already have computers and tablets that a teacher can hand out when a lesson needs them, without the messages, games and notifications that come with a personal phone. The difference is control. A school device serves the lesson; a personal phone competes with it.\n\nI would not go as far as the statement when it says that phones are destroying our ability to learn. Many students use them sensibly, and blaming the device alone lets us ignore the habits that surround it. That is why I believe any ban should come with lessons on using technology well, so that we leave school with self-control as well as qualifications.\n\nMost of all, I am asking for clarity. A student who moves from one school to another can find that what was normal in the first is forbidden in the second. A clear expectation from you, with exceptions for genuine need, would be fair because it would be the same for everyone.\n\nThank you for taking the time to read my letter. I hope you will consider what students themselves have to say about the places where we learn.\n\nYours sincerely,\n\n[Your name]`,
            },
            markScheme: {
              'What to reward': [
                'A clear view of the statement, argued consistently: the writer may agree, disagree or argue for a position in between.',
                'The conventions of a formal letter to a government minister: a suitable greeting and sign-off, a clear statement of purpose, a respectful and formal register, and paragraphs that build the case.',
                'Evidence and examples chosen for a purpose. Ideas from the sources may be used, though they are not required.',
                'An opposing view answered rather than ignored.',
              ],
              'Content and organisation (AO5, 24 marks)': Q5_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': Q5_AO6_LEVELS,
            },
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
        description: `Spend about 15 minutes reading Source A, Source B and the questions. Then answer all four questions in this section, allowing about 45 minutes for them.\n\nSource A: ${EXAM_04_SOURCE_A_REF}\nSource B: ${EXAM_04_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-04-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Source A, from "When my daughter told me" to "gender equality in Britain".\n\nWhich four of the statements below are true? Write down their letters, and choose no more than four.\n\nA) The writer\'s daughter wanted to be an engineer.\nB) The teacher smiled indulgently.\nC) The daughter was at secondary school.\nD) The teacher suggested that the daughter become a doctor.\nE) The teacher suggested nursing as another career to consider.\nF) The daughter was seven years old.\nG) The writer describes the redirection as devastating.\nH) The daughter had already learned about gender expectations.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_04_SOURCE_A}\n\nSource B:\n${EXAM_04_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_04_SOURCE_A_REF} | Source B: ${EXAM_04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'A, B, E, G. A: "my daughter told me she wanted to be an engineer". B: the teacher "smiled indulgently". E: she "suggested she might also like to consider teaching or nursing". G: "gentle, well-meaning, devastating redirection". C is false: it was her "primary school teacher". D is false: the teacher suggested "teaching or nursing". F is false: she was "six years old". H is false: "She had not yet learned".',
              'Grade 6-7':
                'A, B, E, G. C is false: the teacher was her "primary school teacher". D is false: the teacher suggested "teaching or nursing", not medicine. F is false: "My daughter was six years old." H is contradicted by "She had not yet learned that society had opinions".',
            },
            markScheme: [
              'True: A, B, E, G. One mark for each, up to 4.',
              'A: "my daughter told me she wanted to be an engineer".',
              'B: the teacher "smiled indulgently".',
              'E: she might "also like to consider teaching or nursing".',
              'G: "that gentle, well-meaning, devastating redirection".',
              'Not true: C (a "primary school teacher"), D (it was "teaching or nursing"), F (she was "six years old"), H ("She had not yet learned").',
              'Each statement is judged against the first paragraph alone. The paper asks for no more than four.',
            ],
          },
          {
            id: 'aqa-p2-04-q2',
            questionNumber: 2,
            questionText:
              "This question is about both sources.\n\nWhat can you infer about the differences between the barriers facing the writer's daughter in Source A and the barriers facing the women Martineau writes about in Source B?\n\nBack up what you infer with details from both sources.",
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_04_SOURCE_A}\n\nSource B:\n${EXAM_04_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_04_SOURCE_A_REF} | Source B: ${EXAM_04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The barriers facing the daughter in Source A are hidden, while the barriers in Source B are open. Nobody tells the daughter that she cannot be an engineer: "No law prevents my daughter from becoming an engineer". Instead a teacher gently suggests "teaching or nursing", which suggests that today girls are steered rather than stopped. In Source B a girl could be "shut out, because she is a woman, from any study", which suggests that in Martineau\'s time some subjects were closed to girls altogether. The barriers also come at different points in life. The daughter meets hers at six, in a primary school, so it starts early and quietly. Martineau\'s women meet theirs when they have to earn a living: "A multitude of women have to maintain themselves", but the jobs open to them "are so few", and many are "engrossed by men". This suggests that their problem was practical and about money, not only about what people expected of them. Finally, the writer of Source A can list rights that women have won, "vote, own property, pursue careers", whereas in Martineau\'s "former times" every woman but a servant was "maintained by her father, brother or husband", which suggests that a woman\'s whole life once depended on the men around her.',
              'Grade 6-7':
                'The barriers facing the daughter in Source A are invisible and work on her expectations; those facing Martineau\'s women are visible and work on their lives. The writer of Source A stresses that "No law prevents my daughter from becoming an engineer", yet "a thousand small signals", from "the gendered toys" to "the well-meaning teacher suggesting nursing", combine into "an invisible architecture of limitation". This suggests a barrier that works "through expectation rather than prohibition", one that a girl may come to accept without ever noticing it. Martineau\'s barriers are open enough to be argued against directly. She has to insist that no girl be "shut out, because she is a woman, from any study", which implies that such shutting out was openly argued for; and she notes that the ways a woman might earn a living "are so few; and of those few, so many engrossed by men". Where the daughter\'s barrier limits what she hopes for, the Victorian woman\'s limits whether she can support herself at all: "A multitude of women have to maintain themselves", and Martineau\'s case is that every woman "ought to be fitted to take care of herself". Their places in time differ too. The daughter is surrounded by rights already won, as women "can vote, own property, pursue careers, and run for office", so her barrier survives inside legal equality, which is why the writer calls it "the comfortable illusion of equality". Martineau\'s women are only beginning to leave a world in which "every woman was destined to be married" and her only occupation was "keeping her husband\'s house". For them the barrier is already giving way, under the pressure of need: "The footing of women is changed, and it will change more". The daughter\'s barrier, by contrast, is "all the more powerful for being unacknowledged", which suggests that it may be harder to remove because it is harder to see.',
            },
            markScheme: {
              'What to reward': [
                'Inferences about how the barriers facing the daughter in Source A differ from those facing the women in Source B, each backed by details from both sources.',
                'Hidden against open: "No law prevents my daughter", "an invisible architecture of limitation"; against a girl "shut out, because she is a woman, from any study".',
                'Expectation against livelihood: a teacher "suggesting nursing" to a six-year-old; women who "have to maintain themselves" when the occupations open to them "are so few".',
                'Their place in time: rights already won in Source A, so the barrier survives inside legal equality; in Source B a world where "every woman was destined to be married", now changing ("it will change more").',
                "Points about similarities, or about the writers' language, are not what this question rewards.",
              ],
              'Levels (8 marks)': Q2_LEVELS,
            },
          },
          {
            id: 'aqa-p2-04-q3',
            questionNumber: 3,
            questionText:
              'This question is about Source A only.\n\nLook again at the second and third paragraphs, from "We like to congratulate ourselves" to the end of the source.\n\nHow does the writer use language in these lines to challenge the idea that gender equality has been achieved?\n\nSupport your points with short quotations from these lines, using subject terms where they help.',
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_04_SOURCE_A}`,
            extractSource: EXAM_04_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer starts by listing what women have won: "Women can vote, own property, pursue careers, and run for office". This makes it sound as if equality has been achieved, but then the short sentence "But equality in law is not equality in practice" shows that it has not. The statistics, such as the pay gap of "14.3 per cent" and women holding "only eight per cent" of the top jobs in Britain\'s biggest companies, give evidence that women are still held back, and the word "only" makes the figure sound unfair. The phrase "comfortable illusion of equality" is powerful because "illusion" means it is not real, and "comfortable" suggests that people prefer not to look closely. The metaphor "invisible architecture of limitation" suggests barriers that are built like a building but cannot be seen. The list of "the gendered toys, the classroom assumptions, the media representations" shows how many different things hold girls back.',
              'Grade 6-7':
                'The writer challenges the idea of equality by first granting it and then taking it apart. The paragraph opens with irony, "We like to congratulate ourselves on how far we have come", where the inclusive "We" and the verb "congratulate" suggest a society pleased with itself, perhaps too soon. The list "Women can vote, own property, pursue careers, and run for office" builds a catalogue of progress, and the writer even calls these "genuine achievements, won through generations of struggle", a concession that makes what follows harder to dismiss. Then the short sentence "But equality in law is not equality in practice" turns the argument on a single distinction, its repeated "equality" setting the two kinds side by side. The statistics that follow move from pay ("14.3 per cent") to power ("only eight per cent of FTSE 100 CEO positions") to women\'s safety, and the sentences stay short and plain, so that the facts seem to speak for themselves. The next two sentences repeat the frame "a society that has achieved", so that the only change, "the comfortable illusion of", carries the whole charge. In the final paragraph the adjective "insidious" suggests a harm that spreads unseen, and the contrast "through expectation rather than prohibition" explains why laws have not ended it. The list of "small signals", "the gendered toys, the classroom assumptions, the media representations", repeats the definite article, presenting each as familiar, and the metaphor "invisible architecture of limitation" is the passage\'s centrepiece: "architecture" implies design and permanence, while "invisible" explains why it is so rarely challenged.',
              'Grade 8-9':
                'The writer\'s strategy is a controlled demolition: each sentence removes a layer of the reader\'s belief that equality has been achieved, until the structure beneath is exposed. The opening, "We like to congratulate ourselves on how far we have come", uses the inclusive first person to implicate the reader in a shared self-satisfaction, and "like to" hints that the congratulation is a habit rather than a judgement. The catalogue "Women can vote, own property, pursue careers, and run for office" is granted generously, even honoured as "genuine achievements, won through generations of struggle", so that the turn, when it comes, cannot be dismissed as ingratitude. That turn, "But equality in law is not equality in practice", is built on a repeated noun: the sentence holds two equalities side by side and opens the gap between them. The statistics then descend in a deliberate order, from pay ("14.3 per cent") through power ("only eight per cent") to safety, and the plain declaratives offer no comment, as though the numbers need none. The pair of sentences that follows repeats "a society that has achieved", altering only its object, so that "the comfortable illusion of equality" arrives as a correction of the reader\'s own assumption; "comfortable" names the motive for the illusion, since believing in equality spares a society the effort of achieving it. The final paragraph names the mechanism. The adjective "insidious" suggests a harm that spreads unseen, and the antithesis "through expectation rather than prohibition" explains why the law has not reached it, a point the next sentence proves with the writer\'s own daughter: "No law prevents my daughter from becoming an engineer." The list set between dashes, "the gendered toys, the classroom assumptions, the media representations", moves from home to school to the wider culture before arriving at "the well-meaning teacher suggesting nursing", a small, ordinary figure who becomes one signal among "a thousand". The metaphor "an invisible architecture of limitation" is the passage\'s keystone: "architecture" implies design and endurance, while "invisible" explains why it survives. The closing paradox, "all the more powerful for being unacknowledged", identifies how inequality lasts: not through open oppression, but through a society\'s refusal to see the structures that produce it.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of language from the second and third paragraphs only, focused on how it challenges the idea that equality has been achieved.',
                'The irony of "We like to congratulate ourselves", and the rights granted as "genuine achievements" before the turn "But equality in law is not equality in practice".',
                'The statistics, their order (pay, power, safety) and their plain presentation; the repeated frame "a society that has achieved" and the phrase "the comfortable illusion of equality".',
                'The adjective "insidious", the contrast "through expectation rather than prohibition", and the list of "small signals".',
                'The metaphor "invisible architecture of limitation" and the paradox "all the more powerful for being unacknowledged".',
                'Subject terms used accurately where they help: irony, inclusive pronoun, concession, repetition, statistics, metaphor, paradox.',
              ],
              'Levels (12 marks)': Q3_LEVELS,
            },
          },
          {
            id: 'aqa-p2-04-q4',
            questionNumber: 4,
            questionText:
              "This question is about the whole of Source A and the whole of Source B.\n\nBoth sources are about the position of women in society. Compare the two writers' feelings and perspectives on it, and the methods each one uses to convey them.\n\nAim to:\n- set the two writers' feelings and views side by side, point by point\n- explain how each writer's language, tone and structure convey those views\n- back up your points with short quotations from both sources.",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'comparison',
            extract: `Source A:\n${EXAM_04_SOURCE_A}\n\nSource B:\n${EXAM_04_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_04_SOURCE_A_REF} | Source B: ${EXAM_04_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that women are held back, and both want girls to be able to go as far as they can. The writer of Source A uses a personal story about a six-year-old daughter who wanted to be an engineer, and statistics such as "eight per cent of FTSE 100 CEO positions". Martineau does not use statistics or a personal story. She argues step by step, explaining how women\'s lives have changed: in the past a woman was supported by "her father, brother or husband", but now many "have to maintain themselves". Both writers say girls should not be limited: the writer of Source A says "No law prevents my daughter from becoming an engineer", and Martineau says a girl should "go on, as her brother does", as far into science "as her powers and opportunities permit". Martineau repeats words for effect: "in all justice, in all honour, in all humanity, in all prudence". The writer of Source A is angry that equality is only an "illusion", while Martineau is calmer, and even says that an educated woman will be "the more womanly", which shows she is trying to reassure the readers of her own time.',
              'Grade 6-7':
                'Both writers believe that women\'s position is shaped by society rather than by nature, but they write from opposite ends of a long change, and their methods reflect it. The writer of Source A must persuade readers who think equality has been won, so the article first grants the victories ("Women can vote, own property, pursue careers, and run for office") before turning with "But equality in law is not equality in practice." Martineau must persuade readers who doubt that women need learning at all, so she begins by dismissing that doubt as something no one "should undertake to say in our day", and then argues from changed facts: a woman was once "maintained by her father, brother or husband", but "it is not so now". Her repetition of "It is not so now" and "This is not the place" gives the argument the feel of a patient but firm lesson. Both writers make their case through contrast. The writer of Source A sets the ambition of a six-year-old against a teacher\'s "gentle, well-meaning, devastating redirection"; Martineau sets the girl beside "her brother", insisting that she should "go on, as her brother does", as far "into the depths of science, and up to the heights of philosophy as her powers and opportunities permit". Martineau\'s four-part repetition, "in all justice, in all honour, in all humanity, in all prudence", appeals to morality and to good sense at once, while the writer of Source A relies on statistics and on the metaphor of an "invisible architecture of limitation". The clearest difference lies in how far each writer questions the ideas of the day. The writer of Source A ends on a warning about a barrier "all the more powerful for being unacknowledged". Near her close, Martineau reassures her readers that an educated woman will be "the more reasonable, disciplined and docile" and "the more womanly": she argues for change within her era\'s idea of what a woman should be, where the writer of Source A questions the ideas themselves.',
            },
            markScheme: {
              'What to reward': [
                "A comparison of feelings and perspectives: both writers see women's position as shaped by society rather than by nature; the writer of Source A is angry that legal equality hides real inequality, while Martineau argues calmly that changed times make girls' education a necessity.",
                'Methods compared: Source A\'s anecdote, statistics and the metaphor "invisible architecture of limitation"; Martineau\'s step-by-step argument from changed facts ("It is not so now"), her four-part repetition "in all justice, in all honour, in all humanity, in all prudence", and the comparison of a girl with "her brother".',
                'How far each questions the ideas of her day: Source A questions the expectations themselves; Martineau reassures her readers that an educated woman will be "the more womanly".',
                'Perspectives shaped by their times: a modern parent facing hidden barriers; a writer in 1849, when many women "have to maintain themselves" but few occupations were open to them.',
                'Comparison kept up across both whole sources, rather than one source and then the other.',
              ],
              'Levels (16 marks)': Q4_LEVELS,
            },
          },
        ],
      },
      {
        id: 'aqa-p2-04-writing',
        title: 'Section B: Writing',
        description:
          'Spend about 45 minutes on this section: about 5 minutes planning, 35 writing and 5 checking. Write in full sentences, and leave time at the end to check your spelling and punctuation.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-04-q5',
            questionNumber: 5,
            questionText:
              '"Gender equality is not just a women\'s issue. It is a human issue, and it requires action from everyone."\n\nYour school is publishing a collection of students\' essays on the theme of fairness, to be read by students, parents and teachers. Write your essay for the collection, giving your own view of this statement and the reasons for it.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear essay that: addresses the statement directly; uses some persuasive devices and examples; has an introduction, developed paragraphs, and a conclusion; keeps a register suited to an essay that students, parents and teachers will read; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A well-structured essay that: develops a thoughtful argument engaging with the complexity of the statement; uses a range of evidence and examples; employs counter-argument effectively; maintains a consistent academic register; demonstrates strong technical accuracy with ambitious vocabulary and varied syntax.',
              'Grade 8-9': `Fairness Belongs to Everyone\n\nWhen people hear the words "gender equality", many picture a debate that belongs to women: women asking for equal pay, for a fair share of senior jobs, for the right to be taken seriously. Those arguments matter, and they are far from won. But I want to argue that the statement is right to call this a human issue. Unfairness between the sexes harms everyone it touches, and it will end only when everyone helps to end it.\n\nStart with the people this debate usually leaves out: boys and men. From an early age, many boys learn that some feelings are not allowed. They are told to toughen up, to stop crying, to laugh things off. A boy who wants to study dance, or who hopes one day to stay at home and look after his children, may find his ambition treated as a joke. These are the same narrow expectations that tell a girl engineering is not for her, simply pointed in a different direction. If we challenge only half of them, the other half stays standing.\n\nHistory shows that progress has never been the work of one group alone. A little over a hundred years ago, no woman in Britain could vote for a Member of Parliament. When the law changed in 1918, it was passed by a Parliament made up entirely of men, enough of whom had been persuaded that the old rule was unjust. The women who campaigned made that change possible, but they needed others to act as well. As long ago as 1849, Harriet Martineau insisted that every girl's mind should be developed "as carefully as boys'". Her argument began to win only when enough people, men among them, decided that she was right.\n\nSome readers may worry that talking about boys distracts attention from the disadvantages that women and girls still face. I understand that concern, and I share it. It would be wrong to pretend that boys and girls meet exactly the same obstacles, or that every problem is equally serious. But fairness is not a cake, where a slice given to one person leaves less for someone else. A school that questions lazy assumptions about boys will question lazy assumptions about girls too, because the habit of questioning does not choose its targets.\n\nSo what does action from everyone look like? It need not be dramatic. It might be a father who does his share of the cooking and the school run without being asked. It might be a student who notices that the girls in a group project always end up taking the notes, and suggests swapping roles. It might be a teacher who thinks twice before asking for "strong boys" to carry the chairs. Each of these is small, but expectations are built from small things, and small things can take them apart.\n\nFairness is not a gift that one half of humanity hands to the other. It is a way of living together that benefits all of us: daughters and sons, mothers and fathers, students and teachers. That is why it requires action from everyone, including you, and including me.`,
            },
            markScheme: {
              'What to reward': [
                'A clear view of the statement, argued consistently: the writer may agree, disagree or argue for a position in between.',
                'The conventions of an essay for a school collection: an introduction that sets out the argument, developed paragraphs, a measured register that suits students, parents and teachers, and a conclusion that draws the argument together.',
                'Evidence and examples chosen for a purpose. Ideas from the sources may be used, though they are not required.',
                'An opposing view answered rather than ignored.',
              ],
              'Content and organisation (AO5, 24 marks)': Q5_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': Q5_AO6_LEVELS,
            },
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
        description: `Spend about 15 minutes reading Source A, Source B and the questions. Then answer all four questions in this section, allowing about 45 minutes for them.\n\nSource A: ${EXAM_05_SOURCE_A_REF}\nSource B: ${EXAM_05_SOURCE_B_REF}`,
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'aqa-p2-05-q1',
            questionNumber: 1,
            questionText:
              'Look again at the first paragraph of Source A, from "They are building a shopping centre" to "altered it".\n\nWhich four of the statements below are true? Write down their letters, and choose no more than four.\n\nA) The diggers arrived on a Tuesday.\nB) A shopping centre is going up on the site of a community garden.\nC) Margaret Chen is seventy-eight.\nD) The first daffodils of spring had appeared.\nE) The decision was made by local residents.\nF) Margaret has looked after a plot there for over thirty years.\nG) Petitions persuaded the developers to change their plans.\nH) Margaret stood at the fence without speaking.',
            marks: 4,
            suggestedTimeMinutes: 5,
            questionType: 'multiple-choice',
            extract: `Source A:\n${EXAM_05_SOURCE_A}\n\nSource B:\n${EXAM_05_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_05_SOURCE_A_REF} | Source B: ${EXAM_05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'B, C, F, H. B: "They are building a shopping centre where the community garden used to be." C: Margaret Chen "is seventy-eight". F: she "has tended a plot there for thirty-one years". H: she "stood at the fence with her hands in her pockets and said nothing". A is false: the diggers came "on a Monday morning". D is false: the flowers were "the first crocuses of spring", not daffodils. E is false: the decision was made "in a boardroom". G is false: "no amount of petitions or protests had altered it".',
              'Grade 6-7':
                'B, C, F, H. A is false: the diggers arrived "on a Monday morning in March". D is false: the soil had held "the first crocuses of spring", not daffodils. E is contradicted: the decision was made "in a boardroom, by people who had never set foot in the garden". G is contradicted: "no amount of petitions or protests had altered it."',
            },
            markScheme: [
              'True: B, C, F, H. One mark for each, up to 4.',
              'B: "They are building a shopping centre where the community garden used to be."',
              'C: Margaret Chen "is seventy-eight".',
              'F: she "has tended a plot there for thirty-one years".',
              'H: she "stood at the fence" and "said nothing".',
              'Not true: A (it was "a Monday morning"), D (it was "the first crocuses of spring"), E (the decision was made "in a boardroom"), G ("no amount of petitions or protests had altered it").',
              'Each statement is judged against the first paragraph alone. The paper asks for no more than four.',
            ],
          },
          {
            id: 'aqa-p2-05-q2',
            questionNumber: 2,
            questionText:
              'This question is about both sources.\n\nWhat can you infer about the differences between the people who lose their garden in Source A and the people crowded into the dark outhouse in Source B?\n\nBack up what you infer with details from both sources.',
            marks: 8,
            suggestedTimeMinutes: 8,
            questionType: 'summary',
            extract: `Source A:\n${EXAM_05_SOURCE_A}\n\nSource B:\n${EXAM_05_SOURCE_B}`,
            extractSource: `Source A: ${EXAM_05_SOURCE_A_REF} | Source B: ${EXAM_05_SOURCE_B_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'The people in the two sources lose very different things. In Source A, Margaret Chen loses a plot in a community garden that she had looked after "for thirty-one years", and the writer says such places hold "the memories, the relationships, the community". This suggests that what is taken from her is part of her life and her friendships, and her "mental health has measurably deteriorated" since. In Source B the people have lost their homes altogether: Dickens says that when new streets are built, the poor are cleared out and "crowd" somewhere else. He shows "Men, women, children, for the most part naked, heaped upon the floor", which suggests that they have no beds and hardly any clothes, and whole families share one room, like the widow "with six children". Their poverty is different too. In Source A the new jobs will be "mostly minimum-wage, mostly zero-hours", so people there will be badly paid but in work. In Source B people get money by "selling Lucifers", which are matches, or "a-cadging in the streets" late at night, which suggests they have no proper work at all. Margaret is described on her own, standing in silence at the fence, while the people in Source B are so crowded together that the narrator asks "who can count them!"',
              'Grade 6-7':
                'The people in Source A lose a shared place and the life it held; the people in Source B have already lost their homes and live at the edge of survival. Margaret Chen, "seventy-eight", had tended her plot "for thirty-one years", and the writer says that land like hers sustained "the memories, the relationships, the community". What is taken from her is belonging, and the damage is inward: she "said nothing", and her "mental health has measurably deteriorated". Dickens\'s lodgers have nothing left to lose but floor space. They are the "wretches whom we clear out" to make "our New Oxford Streets", and they have crowded into a single outhouse, "Men, women, children, for the most part naked, heaped upon the floor". The families listed, a widow "with six children" and a man with his wife and "eight poor babes", suggest that whole households have been pushed out together, and one family\'s three youngest are "squeezed between the open door and the wall". The ways they live differ too. Source A\'s people are offered jobs, "mostly minimum-wage, mostly zero-hours", so they are poor but employed; Dickens\'s lodgers get by "selling Lucifers" (matches) and "a-cadging in the streets", still out after eleven at night, which suggests they have no work at all. How far they are seen differs as well. Margaret is a named woman whose suffering, the writer complains, "does not appear on any spreadsheet"; the lodgers are a crowd too large to count ("who can count them!"), mostly unnamed, cleared away by a nation "never heeding, never asking" where they go. The garden\'s people are overlooked by distant decision-makers; the outhouse\'s people are not even counted as a cost.',
            },
            markScheme: {
              'What to reward': [
                'Inferences about how the people who lose the garden in Source A differ from the people in the outhouse in Source B, each backed by details from both sources.',
                'What is lost: a shared place of "memories" and "relationships", tended "for thirty-one years"; against homes, with whole families "heaped upon the floor" of one outhouse.',
                'The harm: inward and quiet in Source A (Margaret "said nothing"; her "mental health has measurably deteriorated"); overcrowding and destitution in Source B ("for the most part naked").',
                'Work: badly paid jobs, "mostly minimum-wage, mostly zero-hours"; against "selling Lucifers" (matches) and "a-cadging in the streets" late at night.',
                'Being seen: a named woman left off "any spreadsheet"; against a crowd cleared away "never heeding, never asking".',
                "Points about similarities, or about the writers' language, are not what this question rewards.",
              ],
              'Levels (8 marks)': Q2_LEVELS,
            },
          },
          {
            id: 'aqa-p2-05-q3',
            questionNumber: 3,
            questionText:
              'This question is about Source A only.\n\nLook again at the second and third paragraphs, from "This is how modern urban development works" to the end of the source.\n\nHow does the writer use language in these lines to criticise modern urban development?\n\nSupport your points with short quotations from these lines, using subject terms where they help.',
            marks: 12,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EXAM_05_SOURCE_A}`,
            extractSource: EXAM_05_SOURCE_A_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer opens with "This is how modern urban development works", which makes the process sound like a cold routine. The passive verbs in "A piece of land is identified, its commercial value calculated" hide who is doing it, so the developers seem faceless. The contrast between "commercial value" and "human value" shows that money is put before people, and the phrase "dismissed as sentimental" shows how people\'s feelings are brushed aside. The words "we are told" suggest that the writer does not believe the promises. The repetition of "mostly" in "mostly minimum-wage, mostly zero-hours" is sarcastic and shows that the jobs are not really good ones. The short sentence "These are the metrics that matter, apparently." ends on "apparently", which mocks the developers. The quotation from Oscar Wilde, "the price of everything and the value of nothing", sums up the argument powerfully, and the list "identikit retail parks, luxury apartment blocks, and artisan coffee shops" suggests that every town is starting to look the same.',
              'Grade 6-7':
                'The writer builds the criticism through a sustained opposition between the language of human value and the language of commercial transaction. The flat opening, "This is how modern urban development works", presents the process as a routine, and the passive verbs that follow, "is identified", "calculated", "is dismissed", remove the people responsible, so that development seems to happen without anyone choosing it. The parallel of "its commercial value calculated" and "its human value" sets the two kinds of value side by side, and the list of what is lost, "the memories, the relationships, the community it sustained", gives the human side a weight that the dismissive word "sentimental" cannot cancel. The rest of the paragraph turns to sarcasm. The phrase "we are told" distances the writer from the promises, and the repeated "mostly" in "mostly minimum-wage, mostly zero-hours" turns three hundred jobs into a grudging list of qualifications, ending on people "who would rather have kept their allotments". The short sentences beginning "It will" mimic a sales pitch, which the single word "apparently" then punctures. The paragraph closes on "does not appear on any spreadsheet", where the language of bookkeeping exposes what the system cannot count. In the final paragraph the borrowed epigram, "the price of everything and the value of nothing", sums up the argument, and the antithesis "not for the people who live in them but for the money" makes money the city\'s new resident. The closing list, "identikit retail parks, luxury apartment blocks, and artisan coffee shops", mocks a sameness in which even "artisan" has become a brand, and the final clause, "where communities used to be", ends on loss.',
              'Grade 8-9':
                'The writer\'s language exposes how the vocabulary of development hides the human realities it displaces. The paragraph opens as a demonstration, "This is how modern urban development works", and the sentence that follows is built like a process: land "is identified", its value "calculated", its human value "dismissed as sentimental". The passive verbs leave no one responsible, and the missing verb in "its commercial value calculated" gives the clause the brisk shorthand of a report. Set between dashes, "the memories, the relationships, the community it sustained" interrupts the process with what it destroys, and the interruption is itself the point: human value has to break into a sentence that has no room for it. The adjective "sentimental", the developers\' word rather than the writer\'s, shows how a language of calculation can make feeling sound like weakness. The writer then adopts the language of economic benefit only to empty it. The promise of "three hundred jobs" is qualified at once by "we are told", and the triple "mostly" deflates each promise in turn, ending on people "who would rather have kept their allotments". The repeated openings "It will generate" and "It will attract" imitate a developer\'s brochure, and the one-word comment "apparently" turns the brochure into satire. The sentence about Margaret Chen uses the language of measurement against the system that relies on it: her mental health "has measurably deteriorated", yet it "does not appear on any spreadsheet". The harm is measurable but unmeasured, because the spreadsheet decides what counts. The final paragraph widens from one garden to "a society", borrowing Wilde\'s epigram, "the price of everything and the value of nothing", as the authority for a judgement the article has already earned. Its antithesis, "not for the people who live in them but for the money", makes money the city\'s real resident, and the closing list, "identikit retail parks, luxury apartment blocks, and artisan coffee shops", ends in the relative clause "where communities used to be", so that each new building carries the ghost of what it replaced.',
            },
            markScheme: {
              'What to reward': [
                'Analysis of language from the second and third paragraphs only, focused on how it criticises modern urban development.',
                'The routine of "This is how modern urban development works", and the passive verbs that hide who decides ("is identified", "dismissed as sentimental").',
                'The contrast of "commercial value" with "human value", and the list "the memories, the relationships, the community it sustained".',
                'Sarcasm: "we are told", the repeated "mostly", the brochure-like sentences beginning "It will", and the deflating "apparently".',
                'The bookkeeping language of "does not appear on any spreadsheet", Wilde\'s epigram, the antithesis "not for the people who live in them but for the money", and the closing list that ends "where communities used to be".',
                'Subject terms used accurately where they help: passive voice, contrast, list, repetition, sarcasm, epigram, antithesis.',
              ],
              'Levels (12 marks)': Q3_LEVELS,
            },
          },
          {
            id: 'aqa-p2-05-q4',
            questionNumber: 4,
            questionText:
              "This question is about the whole of Source A and the whole of Source B.\n\nBoth sources are about new building in a city and what it does to the people already living there. Compare the two writers' feelings and perspectives on it, and the methods each one uses to convey them.\n\nAim to:\n- set the two writers' feelings and views side by side, point by point\n- explain how each writer's language, tone and structure convey those views\n- back up your points with short quotations from both sources.",
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
            markScheme: {
              'What to reward': [
                'A comparison of feelings and perspectives: both writers condemn development that ignores the people it displaces; the writer of Source A grieves for a lost community space, while Dickens warns that clearing the poor from one street packs them into another.',
                'Methods compared: Source A builds an argument from one scene and one woman to a general judgement borrowed from Wilde; Dickens takes the reader into the outhouse in the present tense ("let us look!"), with exclamations, quick questions and answers, and images of death and decay ("a grave of rags").',
                'Blame: "people who had never set foot in the garden" in Source A; in Source B "we", the nation and its readers, with their "gentlemanly handling of Red Tape".',
                'Perspectives shaped by their times: a modern writer counting human costs left off "any spreadsheet"; a Victorian journalist describing overcrowding and disease close to his readers\' homes.',
                'Comparison kept up across both whole sources, rather than one source and then the other.',
              ],
              'Levels (16 marks)': Q4_LEVELS,
            },
          },
        ],
      },
      {
        id: 'aqa-p2-05-writing',
        title: 'Section B: Writing',
        description:
          'Spend about 45 minutes on this section: about 5 minutes planning, 35 writing and 5 checking. Write in full sentences, and leave time at the end to check your spelling and punctuation.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: 'aqa-p2-05-q5',
            questionNumber: 5,
            questionText:
              '"New buildings and developments are the sign of a thriving town. Those who resist change are simply standing in the way of progress."\n\nYour local newspaper has asked its readers what they think of plans to build on open land in the town. Write an article for the paper giving your own view of this statement and the reasons for it.\n\n[40 marks: 24 for content and organisation, 16 for technical accuracy]',
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear newspaper article that: addresses the statement with a personal point of view; uses some persuasive techniques such as rhetorical questions, emotive language, and examples; has a clear structure with a headline, introduction, body, and conclusion; matches the register of a local newspaper; demonstrates generally accurate spelling and punctuation.',
              'Grade 6-7':
                'A compelling article that: engages critically with both sides of the statement; uses a range of rhetorical techniques fluently; deploys local and national examples effectively; sustains an appropriate register for a local newspaper audience; demonstrates consistent technical accuracy with varied and ambitious sentence structures.',
              'Grade 8-9': `Progress Is a Direction, Not a Bulldozer\n\nEvery town needs to grow. Our families need homes they can afford, our high street needs shoppers, and our young people need reasons to stay here rather than leave for the city. On that much, I agree with the supporters of the plans to build on the open land at the edge of town. Where I part company with them is the idea, in the statement this paper has asked us to consider, that anyone who resists change is simply standing in the way of progress.\n\nThe trouble lies in that word "simply". It assumes that every new building is a step forward and every objection a step back. But progress and construction are not the same thing. A town does not thrive because it has more concrete; it thrives because the people who live in it have what they need. A new estate with no doctor's surgery, no bus route and no school places is not progress. It is a problem postponed until the first residents move in.\n\nThink about what the open land does for us now. On any dry weekend you will find families walking their dogs there, children wobbling along on their first bikes, and older neighbours who rarely go anywhere else stopping for a chat on the path. None of this appears in a planning application, because none of it makes money. Yet it is exactly what makes a town a community rather than a collection of buildings. And once a field has been built on, it is gone for good. An ugly car park can be knocked down, but a meadow cannot be put back.\n\nThe developers will reply that we cannot have it both ways: if we want homes, they have to go somewhere. That is a fair point, and I will not pretend that every objection is noble. Some people who oppose new housing already have comfortable homes and would rather nobody else joined them. But the choice is not between building on our green spaces and building nothing at all. Our town is full of land that has already been spoiled: the empty factory by the canal, the flats above the high street shops that have stood empty for years, the old bus depot behind its rusting fence. Build there first. Turn neglected places into homes, and you improve the town twice, once by adding houses and once by removing an eyesore.\n\nReal progress also means listening to the people it is supposed to serve. The residents who filled the community hall at last month's consultation were not enemies of the future. They were its neighbours, and they knew things about traffic, flooding and the primary school that no glossy brochure could tell you. Hearing them out is not a delay. It is how good plans are made.\n\nSo yes, let our town grow. Let it grow upwards on old sites and inwards towards its centre, and outwards only when there is no better choice. A thriving town is not one that says yes to every developer. It is one that knows the difference between change that improves people's lives and change that only improves somebody's profits.`,
            },
            markScheme: {
              'What to reward': [
                'A clear view of the statement, argued consistently: the writer may agree, disagree or argue for a position in between.',
                'The conventions of an article for a local newspaper: a headline, an opening that draws readers in, local examples they will recognise, a register that suits a general readership, and a strong ending.',
                'Evidence and examples chosen for a purpose. Ideas from the sources may be used, though they are not required.',
                'An opposing view answered rather than ignored.',
              ],
              'Content and organisation (AO5, 24 marks)': Q5_AO5_LEVELS,
              'Technical accuracy (AO6, 16 marks)': Q5_AO6_LEVELS,
            },
          },
        ],
      },
    ],
  },
]
