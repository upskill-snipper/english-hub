// @ts-nocheck
import type { MockExamPaper } from './types'

/**
 * WHAT WAS WRONG (found 26 September 2026 by scripts/check-mock-exam-extracts.mjs,
 * fixed 27 September 2026).
 *
 * All five papers are served (index.ts and the chunk loader carry wjecC2A),
 * and no source in them was what its label said:
 *   - Source B of paper 3 was labelled George Borrow, Wild Wales (1862), and
 *     none of its ten sentences is in the book. It had Borrow climb Cadair
 *     Idris from Dolgellau with his wife, "her sister Miss Evans" and a guide
 *     called Griffith. The model answers to questions 3 and 4 quoted nine of
 *     its invented phrases back as Borrow's ("like a map made flesh");
 *   - the other four Source B texts were credited to 19th-century writers and
 *     papers: Thomas Rees, Letters on the Condition of the Welsh Poor (1849);
 *     the Rev. James Phillips in The Cambrian (1847); an 1858 editorial in
 *     The Quarterly Review; and a letter from Eleanor Davies to The Cardiff
 *     Times (1872). None could be traced, and all four read as modern
 *     pastiche ("zeal without proper support is insufficient"), yet a WJEC
 *     Component 2 paper's 19th-century source is always a published text.
 *     Their model answers analysed the invented lines as the period's words;
 *   - the five Source A articles were credited to named writers in real or
 *     real-sounding publications (Wales Online, TES Cymru, National
 *     Geographic Traveller UK, Golwg360, "The Guardian Wales"). They are
 *     practice pieces written for this bank, and one byline was the name of
 *     a Welsh MP;
 *   - the paper 1 comparison answers quoted Source A as saying poverty "could
 *     have happened to any one of us" and cited figures ("169%", "since
 *     2010") that it does not contain, and a paper 3 answer misquoted "a
 *     landscape that has no interest whatsoever in your comfort".
 *
 * WHAT WAS DONE. Each Source B is now a genuine passage, cut by a script from
 * the Project Gutenberg text named in its label (never retyped; underscores
 * that mark italics are dropped, "--" is printed as the dash it stands for,
 * and "[...]" marks each cut), chosen for the same subject:
 *   1. Engels on the ruin of the small farmers of Wales and the Rebecca
 *      riots, in Florence Kelley Wischnewetzky's translation. Question 3
 *      still asks about the poor in 19th-century Wales;
 *   2. Mayhew on the education of costermongers' children. No 19th-century
 *      account of Welsh schools could be found on Gutenberg, so question 3
 *      now asks about poor children in London;
 *   3. Borrow's own ascent of Snowdon (Chapter XXIX), made with his
 *      stepdaughter Henrietta and a hired lad while his wife stayed behind;
 *   4. Thoreau on the telegraph, from "Economy" in Walden. Question 4 now
 *      asks what the writers think technology may cost us, which is
 *      Thoreau's subject, rather than what it might replace;
 *   5. Mill, The Subjection of Women (1869), Chapter I, on "the nature of
 *      women". scripts/check-mock-exam-extracts.mjs gained an entry for the
 *      book so that the passage is checked, not reported unverified.
 * They run to 259-564 words against 235-265 for the invented ones, so
 * that each scene or argument is whole. Every model answer to questions 3 and
 * 4 is rewritten on the new passages and each question 3 glosses its hardest
 * words. Each Source A is labelled as specially written; the teacher's
 * article in paper 2 now carries no byline, and its answers say "the
 * writer". Three Source A answers that called an indirect question a
 * rhetorical one, or a plain phrase parenthetical, are corrected, and the
 * paper 1 list answer now says what Source A says about when the Foundation
 * reported its figure. That fix did not check the Source A articles
 * themselves; the review below found two of their claims false.
 *
 * WHAT A REVIEW OF THAT FIX FOUND (27 September 2026). Every Source B cut is
 * word for word the Gutenberg text, in the named chapter or section, and
 * every quotation in the answers is in its own extract. But the scanner
 * compares quotations without regard to case and only from four words, and
 * nothing read what the answers said about the words. So:
 *   - two quotations had the wrong case: "ragged schools" (three times) for
 *     Mayhew's "Ragged Schools", and "the Old World ... the New" for
 *     Thoreau's lower case;
 *   - four answers misread the text. The paper 2 answer took Mayhew's "such
 *     instances were very rare" to be about children who could read, when it
 *     is about a mother who could read teaching hers. The paper 3 answer took
 *     "an object of admiration, of wonder and almost of fear" to be the view
 *     from the summit, when it is the Wyddfa as seen from the vale below;
 *     another put "frightful precipices" all round the summit, when Borrow
 *     excepts the west; and a Source A answer called "wilder, older, less
 *     tamed" a description of the hills, when it describes the landscape;
 *   - the paper 1 note said the translation was made in 1887. The edition's
 *     own preface says 1885, published the next year in New York, and the
 *     text printed is the London edition of 1892, so the note now says that;
 *   - smaller claims were corrected: "cordially hated" called irony (it is
 *     the ordinary intensifier, heartily); an anecdote called an allegory;
 *     a choice between two things called a list; an appositive phrase called
 *     a subordinate clause; Lewis said to "ask" what she states; "perhaps in
 *     a rough way" called Mayhew's qualification, when he quotes it; and the
 *     Thoreau note's "evangelist" run together with John the Baptist;
 *   - two question 1 answers listed points that do not answer the question
 *     (that the writer had visited food banks; that she had taught for
 *     twenty-two years), and now list points that do;
 *   - two Source A articles stated real-world facts that are false. Paper 1
 *     said the Joseph Rowntree Foundation reported its 3.8 million figure in
 *     2024, when its report Destitution in the UK 2023 gave it, for 2022.
 *     Paper 5 had the Welsh women's team qualify for "the UEFA Nations League
 *     promotion play-offs in 2024" (they were relegated from League A that
 *     season) and named the Western Mail as the real paper that put the news
 *     beneath a dog show, a charge nothing supports. The article now has
 *     them reach the play-offs for the 2025 European Championship, which
 *     they did, and names no paper. Its figure of about 10% of media
 *     coverage, and the other Source A figures, were not checked.
 * src/__tests__/wjec-c2-a-quotes-the-real-text.test.ts now holds every
 * quotation in the answers and notes to its own extract, as whole words and
 * with case, and keeps the invented sources, bylines and false facts out.
 */

// ─── WJEC Component 2 Source Texts ──────────────────────────────────────────

// Exam 01: Poverty
const POVERTY_21C = `In 2023, the Joseph Rowntree Foundation reported that 3.8 million people in the United Kingdom had experienced destitution - a word that should have no place in the sixth-largest economy on earth. Destitution means not having enough money to feed yourself, to heat your home, to keep the lights on. It means choosing, every single day, between eating and staying warm.

I spent three weeks visiting food banks across South Wales, and what struck me was not the scale of need - though the scale is staggering - but the shame. Person after person told me they had never imagined they would need help. A teaching assistant from Merthyr Tydfil, a former small-business owner from Swansea, a retired nurse from Newport. These were people who had worked all their lives and found, through no fault of their own, that work was no longer enough.

The volunteers who run these food banks are extraordinary. They work without pay, without recognition, and often without adequate resources. But charity, however generous, is not a substitute for policy. We cannot food-bank our way out of a structural crisis. The question is not whether people deserve help - of course they do - but why, in one of the wealthiest nations in history, they need it at all.`

const POVERTY_21C_REF =
  'Specially written for this practice paper (not a published text): a feature article, "The New Hunger", under the invented byline Rhiannon Davies'

const POVERTY_19C = `If the peasantry of England shows the consequences which a numerous agricultural proletariat in connection with large farming involves for the country districts, Wales illustrates the ruin of the small holders. If the English country parishes reproduce the antagonism between capitalist and proletarian, the state of the Welsh peasantry corresponds to the progressive ruin of the small bourgeoisie in the towns. In Wales are to be found, almost exclusively, small holders, who cannot with like profit sell their products as cheaply as the larger, more favourably situated English farmers, with whom, however, they are obliged to compete. Moreover, in some places the quality of the land admits of the raising of live stock only, which is but slightly profitable. Then, too, these Welsh farmers, by reason of their separate nationality, which they retain pertinaciously, are much more stationary than the English farmers. But the competition among themselves and with their English neighbours (and the increased mortgages upon their land consequent upon this) has reduced them to such a state that they can scarcely live at all; and because they have not recognised the true cause of their wretched condition, they attribute it to all sorts of small causes, such as high tolls, etc, which do check the development of agriculture and commerce, but are taken into account as standing charges by every one who takes a holding, and are therefore really ultimately paid by the landlord. Here, too, the new Poor Law is cordially hated by the tenants, who hover in perpetual danger of coming under its sway. In 1843, the famous "Rebecca" disturbances broke out among the Welsh peasantry; the men dressed in women's clothing, blackened their faces, and fell in armed crowds upon the toll-gates, destroyed them amidst great rejoicing and firing of guns, demolished the toll-keepers' houses, wrote threatening letters in the name of the imaginary "Rebecca," and once went so far as to storm the workhouse of Carmarthen. [...] The Government appointed a commission to investigate the affair and its causes, and there was an end of the matter. The poverty of the peasantry continues, however, and will one day, since it cannot under existing circumstances grow less, but must go on intensifying, produce more serious manifestations than these humorous Rebecca masquerades.`

const POVERTY_19C_REF =
  'Friedrich Engels, The Condition of the Working-Class in England in 1844 (1845), from "The Agricultural Proletariat", on the small farmers of Wales, translated by Florence Kelley Wischnewetzky (London edition, 1892), from the Project Gutenberg text (#17306)'

// Exam 02: Education
const EDUCATION_21C = `Every September, I watch a new cohort of Year 7 students arrive at our school, and every September I notice the same thing: the gap between the confident and the anxious has grown wider. Some children bounce through the gates with new backpacks and labelled pencil cases and the easy assurance of parents who have rehearsed the route and bought the uniform without a second thought. Others arrive quietly, in shoes that are slightly too big or slightly too small, carrying last year's bag, watching everything with the careful alertness of someone who knows that mistakes are expensive.

The attainment gap in Wales is not a mystery. We know exactly what causes it: poverty, housing insecurity, parental stress, lack of access to books, tutors, and quiet spaces to study. We have known this for decades. What we lack is not understanding but will. The Curriculum for Wales promises to nurture every learner, to value wellbeing alongside attainment, and these are admirable ambitions. But ambition without resource is just aspiration, and aspiration without action is just words.

I have taught for twenty-two years. I have seen initiatives come and go, each one heralded as transformative, each one quietly abandoned when the funding dried up. What my students need is not another policy document. They need smaller classes, more teaching assistants, breakfast in the morning, and someone who has time to notice when they are struggling.`

const EDUCATION_21C_REF =
  'Specially written for this practice paper (not a published text): an opinion article by a secondary-school teacher, "Mind the Gap"'

const EDUCATION_19C = `I have used the heading of “Education,” but perhaps to say “non-education,” would be more suitable. Very few indeed of the costermongers’ children are sent even to the Ragged Schools; and if they are, from all I could learn, it is done more that the mother may be saved the trouble of tending them at home, than from any desire that the children shall acquire useful knowledge. Both boys and girls are sent out by their parents in the evening to sell nuts, oranges, &c., at the doors of the theatres, or in any public place, or “round the houses” (a stated circuit from their place of abode). This trade they pursue eagerly for the sake of “bunts,” though some carry home the money they take, very honestly. The costermongers are kind to their children, “perhaps in a rough way, and the women make regular pets of them very often.” One experienced man told me, that he had seen a poor costermonger’s wife—one of the few who could read—instructing her children in reading; but such instances were very rare. The education of these children is such only as the streets afford; and the streets teach them, for the most part—and in greater or lesser degrees,—acuteness—a precocious acuteness—in all that concerns their immediate wants, business, or gratifications; a patient endurance of cold and hunger; a desire to obtain money without working for it; a craving for the excitement of gambling; an inordinate love of amusement; and an irrepressible repugnance to any settled in-door industry.

[...]

It is idle to imagine that these lads, possessed of a mental acuteness almost wonderful, will not educate themselves in vice, if we neglect to train them to virtue. At their youthful age, the power of acquiring knowledge is the strongest, and some kind of education is continually going on. If they are not taught by others, they will form their own characters—developing habits of dissipation, and educing all the grossest passions of their natures, and learning to indulge in the gratification of every appetite without the least restraint.`

const EDUCATION_19C_REF =
  'Henry Mayhew, London Labour and the London Poor, Volume 1 (1851), from "Of the Education of Costermongers\' Children" and "Of the Education of the Coster-Lads", in the text of the enlarged edition of 1861 (Project Gutenberg #55998)'

// Exam 03: Travel
const TRAVEL_21C = `There is a moment, about forty minutes into the train journey from Shrewsbury to Aberystwyth, when the landscape changes so completely that it feels like crossing into another country. The gentle English farmland gives way to something wilder, older, less tamed. The hills rise steeply on either side of the track, covered in rough grass and bracken, and the sky opens up above them - vast, indifferent, magnificent.

I had come to walk the Ceredigion coast path, a sixty-mile stretch of clifftop trail that runs from Cardigan to Ynyslas. I had packed waterproofs and walking boots and a vague hope that the Welsh weather might cooperate. It did not. For four of the five days I spent on the path, the rain was relentless - not the gentle drizzle of popular imagination, but hard, horizontal rain that found every gap in every layer and soaked me to the skin within an hour.

And yet, I cannot remember the last time I felt so alive. There is something about walking in wild weather, in a landscape that has no interest whatsoever in your comfort, that strips away the accumulated nonsense of daily life. The emails, the deadlines, the endless performative busyness - all of it falls away when you are standing on a cliff edge with the wind roaring in your ears and the Atlantic smashing itself against the rocks below. The path does not care about your to-do list. The sea does not check its phone. And slowly, reluctantly, you begin to remember what it feels like to simply be.`

const TRAVEL_21C_REF =
  'Specially written for this practice paper (not a published text): travel writing, "Walking Into Weather", under the invented byline Owen Hartley'

const TRAVEL_19C = `Here we got down at a small inn, and having engaged a young lad to serve as guide, I set out with Henrietta to ascend the hill, my wife remaining behind, not deeming herself sufficiently strong to encounter the fatigue of the expedition.

[...]

We were far from being the only visitors to the hill this day; groups of people, or single individuals, might be seen going up or descending the path as far as the eye could reach. The path was remarkably good, and for some way the ascent was anything but steep. On our left was the Vale of Llanberis, and on our other side a broad hollow, or valley of Snowdon, beyond which were two huge hills forming part of the body of the grand mountain, the lowermost of which our guide told me was called Moel Elia, and the uppermost Moel y Cynghorion. On we went until we had passed both these hills, and come to the neighbourhood of a great wall of rocks constituting the upper region of Snowdon, and where the real difficulty of the ascent commences. Feeling now rather out of breath we sat down on a little knoll with our faces to the south, having a small lake near us, on our left hand, which lay dark and deep, just under the great wall.

[...]

Getting up we set about surmounting what remained of the ascent. The path was now winding and much more steep than it had hitherto been. I was at one time apprehensive that my gentle companion would be obliged to give over the attempt; the gallant girl, however, persevered, and in little more than twenty minutes from the time when we arose from our resting-place under the crags, we stood, safe and sound, though panting, upon the very top of Snowdon, the far-famed Wyddfa.

The Wyddfa is about thirty feet in diameter and is surrounded on three sides by a low wall. In the middle of it is a rude cabin, in which refreshments are sold, and in which a person resides through the year, though there are few or no visitors to the hill’s top, except during the months of summer. Below on all sides are frightful precipices except on the side of the west. Towards the east it looks perpendicularly into the dyffrin or vale, nearly a mile below, from which to the gazer it is at all times an object of admiration, of wonder and almost of fear.

There we stood on the Wyddfa, in a cold bracing atmosphere, though the day was almost stiflingly hot in the regions from which we had ascended. There we stood enjoying a scene inexpressibly grand, comprehending a considerable part of the mainland of Wales, the whole of Anglesey, a faint glimpse of part of Cumberland; the Irish Channel, and what might be either a misty creation or the shadowy outline of the hills of Ireland. Peaks and pinnacles and huge moels stood up here and there, about us and below us, partly in glorious light, partly in deep shade. Manifold were the objects which we saw from the brow of Snowdon, but of all the objects which we saw, those which filled us with delight and admiration, were numerous lakes and lagoons, which, like sheets of ice or polished silver, lay reflecting the rays of the sun in the deep valleys at his feet.`

const TRAVEL_19C_REF =
  'George Borrow, Wild Wales: Its People, Language, and Scenery (1862), Chapter XXIX, his ascent of Snowdon from Llanberis with his stepdaughter Henrietta, from the Project Gutenberg text (#648)'

// Exam 04: Technology
const TECHNOLOGY_21C = `Last month, a school in Cardiff became the first in Wales to introduce AI-powered marking software. The system, developed by a London-based technology firm, can assess a GCSE English essay in approximately ninety seconds, providing feedback on structure, vocabulary, spelling, punctuation, and even - its creators claim - the quality of argument. The headteacher described it as "a game-changer." Several of her colleagues were less enthusiastic.

I am not a Luddite. I use technology every day, and I recognise that it has transformed education in ways that are overwhelmingly positive. Online resources have democratised access to knowledge. Digital tools have made collaboration possible across distances that would once have been insurmountable. But there is a difference between technology that supports learning and technology that replaces the human relationships at its heart.

When I mark a student's essay, I am not merely checking for errors. I am reading for voice, for personality, for the particular way that this particular student sees the world. I am noticing that the quiet girl in the third row has suddenly produced a paragraph of startling originality, or that the boy who never stops talking has written something unexpectedly tender. An algorithm cannot notice these things. It cannot say, "This is different from your usual work - tell me what happened." It cannot see the human being behind the handwriting. And if we lose that, we lose something that no amount of efficiency can replace.`

const TECHNOLOGY_21C_REF =
  'Specially written for this practice paper (not a published text): an opinion article, "The Algorithm Cannot See You", under the invented byline Dr Catrin Morgan'

const TECHNOLOGY_19C = `As with our colleges, so with a hundred “modern improvements”; there is an illusion about them; there is not always a positive advance. The devil goes on exacting compound interest to the last for his early share and numerous succeeding investments in them. Our inventions are wont to be pretty toys, which distract our attention from serious things. They are but improved means to an unimproved end, an end which it was already but too easy to arrive at; as railroads lead to Boston or New York. We are in great haste to construct a magnetic telegraph from Maine to Texas; but Maine and Texas, it may be, have nothing important to communicate. Either is in such a predicament as the man who was earnest to be introduced to a distinguished deaf woman, but when he was presented, and one end of her ear trumpet was put into his hand, had nothing to say. As if the main object were to talk fast and not to talk sensibly. We are eager to tunnel under the Atlantic and bring the old world some weeks nearer to the new; but perchance the first news that will leak through into the broad, flapping American ear will be that the Princess Adelaide has the whooping cough. After all, the man whose horse trots a mile in a minute does not carry the most important messages; he is not an evangelist, nor does he come round eating locusts and wild honey. I doubt if Flying Childers ever carried a peck of corn to mill.`

const TECHNOLOGY_19C_REF =
  'Henry David Thoreau, Walden; or, Life in the Woods (1854), from the chapter "Economy", from the Project Gutenberg text (#205)'

// Exam 05: Gender
const GENDER_21C = `When the Welsh women's football team reached the play-offs for the 2025 European Championship, the news was reported on page fourteen of a national newspaper, beneath an article about a local dog show. The men's team, by contrast, had received front-page coverage for losing a friendly. If you wanted a single image to illustrate the state of gender equality in Welsh sport, you could do worse than that.

The numbers are stark. Women's sport receives approximately 10% of media coverage in the UK. Female athletes earn, on average, a fraction of their male counterparts. Facilities for women's teams remain inferior - I have spoken to players who train on pitches without floodlights, who share changing rooms with the men's reserve team, who buy their own kit because the club's budget does not extend to them.

But statistics do not capture the subtler problem, which is one of assumption. We assume that women's sport is less exciting, less skilful, less worthy of attention, not because we have watched it and formed this judgement, but because we have absorbed it from a culture that has always valued men's bodies in motion more than women's. Challenging this assumption requires more than funding, though funding would help. It requires a fundamental reimagining of what sport is for, and who it belongs to.`

const GENDER_21C_REF =
  'Specially written for this practice paper (not a published text): an opinion column, "Level the Playing Field", under the invented byline Megan Lewis'

const GENDER_19C = `Neither does it avail anything to say that the nature of the two sexes adapts them to their present functions and position, and renders these appropriate to them. Standing on the ground of common sense and the constitution of the human mind, I deny that any one knows, or can know, the nature of the two sexes, as long as they have only been seen in their present relation to one another. If men had ever been found in society without women, or women without men, or if there had been a society of men and women in which the women were not under the control of the men, something might have been positively known about the mental and moral differences which may be inherent in the nature of each. What is now called the nature of women is an eminently artificial thing—the result of forced repression in some directions, unnatural stimulation in others. It may be asserted without scruple, that no other class of dependents have had their character so entirely distorted from its natural proportions by their relation with their masters; for, if conquered and slave races have been, in some respects, more forcibly repressed, whatever in them has not been crushed down by an iron heel has generally been let alone, and if left with any liberty of development, it has developed itself according to its own laws; but in the case of women, a hot-house and stove cultivation has always been carried on of some of the capabilities of their nature, for the benefit and pleasure of their masters. Then, because certain products of the general vital force sprout luxuriantly and reach a great development in this heated atmosphere and under this active nurture and watering, while other shoots from the same root, which are left outside in the wintry air, with ice purposely heaped all round them, have a stunted growth, and some are burnt off with fire and disappear; men, with that inability to recognise their own work which distinguishes the unanalytic mind, indolently believe that the tree grows of itself in the way they have made it grow, and that it would die if one half of it were not kept in a vapour bath and the other half in the snow.`

const GENDER_19C_REF =
  'John Stuart Mill, The Subjection of Women (1869), Chapter I, from the Project Gutenberg text (#27083)'

// ─── Mock Exam Papers ──────────────────────────────────────────────────────

export const wjecC2A: MockExamPaper[] = [
  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 01: POVERTY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-01',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-01-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-01-q1',
            questionNumber: 1,
            questionText:
              'Read the 21st-century source text about poverty in Wales (Source A).\n\nList five things you learn about poverty from this text.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${POVERTY_21C}\n\nSource B:\n${POVERTY_19C}`,
            extractSource: `Source A: ${POVERTY_21C_REF} | Source B: ${POVERTY_19C_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. In 2023 the Joseph Rowntree Foundation reported that 3.8 million people in the UK had experienced destitution. 2. Destitution means not having enough money for food or heating. 3. People who visit food banks feel ashamed. 4. Many of the people who need help have worked all their lives. 5. The volunteers who run food banks work without pay.',
            },
            markScheme: ['1 mark per valid point derived from Source A only, maximum 5'],
          },
          {
            id: 'wjec-c2-01-q2',
            questionNumber: 2,
            questionText:
              'How does the writer of Source A use language to persuade the reader that poverty in Wales is a serious problem?\n\nYou should comment on:\n- specific words and phrases\n- language features and techniques\n- the effects on the reader.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${POVERTY_21C}`,
            extractSource: POVERTY_21C_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses the statistic "3.8 million people" to shock the reader with the scale of the problem. The word "destitution" is very strong and suggests extreme poverty. The stark choice "between eating and staying warm" makes the reader feel sympathy because these are basic needs. The writer lists real jobs like "teaching assistant" and "retired nurse" to show that poverty can affect anyone, not just people who do not work. The phrase "no fault of their own" makes the reader feel it is unfair.',
              'Grade 6-7':
                'Davies deploys a carefully layered persuasive strategy that moves from the statistical to the personal to the political. The opening statistic - "3.8 million" - establishes scale, but it is the appositive clause "a word that should have no place in the sixth-largest economy on earth" that converts fact into moral indictment, the modal verb "should" carrying the weight of outrage. The tricolon of deprivation - "to feed yourself, to heat your home, to keep the lights on" - uses infinitive repetition to reduce survival to a checklist of impossibilities. The semantic field of shame ("never imagined," "no fault of their own") reframes poverty as an emotional experience rather than a mere economic statistic. The indirect question at the close - "why, in one of the wealthiest nations in history, they need it at all" - is devastatingly placed: it transforms the reader\'s sympathy into political discomfort by implying systemic failure.',
              'Grade 8-9':
                'Davies constructs a rhetorical architecture of escalating moral pressure. The opening sentence juxtaposes the clinical precision of "3.8 million" against the visceral connotations of "destitution," before the appositive phrase - "a word that should have no place in the sixth-largest economy on earth" - recontextualises the statistic as an obscenity. The second paragraph performs a crucial rhetorical shift from abstraction to testimony: the asyndetic listing of occupations ("A teaching assistant... a former small-business owner... a retired nurse") refuses the anonymity of statistics, while the shared grammatical structure creates an almost liturgical rhythm of dispossession. The phrase "work was no longer enough" inverts the foundational promise of meritocracy with devastating economy. The final paragraph\'s neologistic verb phrase "food-bank our way out" is perhaps the most powerful moment: it transforms a noun associated with charity into a verb of futile action, linguistically enacting the inadequacy of the response it describes. The closing question, asked indirectly rather than with a question mark, achieves its force not through exclamation but through the quiet precision of "at all" - an understatement that functions as the essay\'s loudest moment.',
            },
            markScheme: [
              'Analyses specific language techniques with examples',
              'Comments on effects of individual words and phrases',
              "Considers the writer's persuasive strategies",
              'Uses embedded quotations effectively',
              'Top band: sophisticated, conceptualised analysis of language',
            ],
          },
          {
            id: 'wjec-c2-01-q3',
            questionNumber: 3,
            questionText:
              'Read the 19th-century source text (Source B).\n\nWhat do you learn about the lives of the poor in 19th-century Wales from this text?\n\nYou should comment on:\n- what the writer describes\n- the writer\'s use of language to convey conditions.\n\n(Source B was written in German by Friedrich Engels in 1845. This English translation by Florence Kelley Wischnewetzky is printed from its London edition of 1892. "Small holders" farmed small plots of land; the "new Poor Law" of 1834 offered the poor help mainly by making them enter a workhouse; "tolls" were charges paid at "toll-gates" to use a road; "pertinaciously" means stubbornly.)',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${POVERTY_19C}`,
            extractSource: POVERTY_19C_REF,
            modelAnswers: {
              'Grade 4-5':
                'We learn that most farmers in 19th-century Wales were "small holders" who could not sell their products as cheaply as the bigger English farms, but were "obliged to compete" with them, and the competition ruined them. In some places the land was only good for "live stock", which made little money. Engels says their poverty had become so bad that "they can scarcely live at all", which shows how desperate they were. They also feared the workhouse: "the new Poor Law is cordially hated" because they were in "perpetual danger" of needing it. In 1843 the poor fought back in the "Rebecca" riots, when men "dressed in women\'s clothing" and "blackened their faces" to destroy the toll-gates. Engels thinks the poverty will get worse and lead to "more serious manifestations".',
              'Grade 6-7':
                'Engels presents the poverty of the Welsh farmers as the result of an economic system rather than of bad luck or laziness. His opening uses the language of analysis, not sympathy: Wales "illustrates the ruin of the small holders", as if the country were an example in an argument. He explains the causes step by step - the small farmers are "obliged to compete" with "larger, more favourably situated English farmers", some land allows "the raising of live stock only", and the competition brings "increased mortgages" - so that their poverty seems the logical end of a process. His strongest statement, "they can scarcely live at all", is plain and blunt, and "wretched condition" is one of the few emotive phrases he uses. He is critical of the farmers too, saying they "have not recognised the true cause" of their poverty and blame "all sorts of small causes" such as "high tolls". The new Poor Law is "cordially hated", that is, hated with all their hearts, which shows how much the workhouse was feared, and the verb "hover" makes the danger feel constant. The verbs describing the Rebecca riots ("dressed", "blackened", "destroyed", "demolished") show desperation turning into action, yet Engels calls the riots "humorous Rebecca masquerades" and warns of "more serious manifestations", so the passage ends by predicting that poverty "must go on intensifying".',
            },
            markScheme: [
              'Identifies relevant information from the source',
              'Comments on how language conveys conditions and attitudes',
              'Uses evidence from the text to support points',
              'Shows understanding of implicit as well as explicit meaning',
            ],
          },
          {
            id: 'wjec-c2-01-q4',
            questionNumber: 4,
            questionText:
              "Both writers present their views on poverty.\n\nCompare the following:\n- the writers' attitudes to poverty\n- how they convey these attitudes.\n\nYou must use the text to support your comments and make it clear which text you are referring to.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${POVERTY_21C}\n\nSource B:\n${POVERTY_19C}`,
            extractSource: `Source A: ${POVERTY_21C_REF} | Source B: ${POVERTY_19C_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers think poverty is caused by the system, not by the poor themselves. Davies (Source A) says people are poor "through no fault of their own", and Engels (Source B) says the Welsh farmers have been ruined by competition with "larger, more favourably situated English farmers". Davies uses real people she met, like "a retired nurse from Newport", to make the reader feel sympathy, while Engels writes about the farmers as a group and explains the causes like an economist. Both writers criticise how the authorities respond: Davies says "charity, however generous, is not a substitute for policy", and Engels says the Government appointed a commission "and there was an end of the matter". Davies ends by asking why people "need it at all", but Engels ends with a warning that the poverty "must go on intensifying".',
              'Grade 6-7':
                'Both writers see poverty as structural rather than personal, but they write from very different positions. Davies writes as a witness, "I spent three weeks visiting food banks across South Wales", and builds sympathy through the people she met: "A teaching assistant from Merthyr Tydfil, a former small-business owner from Swansea, a retired nurse from Newport". In this passage Engels names no one; he writes about "the Welsh peasantry" as a class and explains their ruin through cause and effect, from competition to "increased mortgages" to a state in which "they can scarcely live at all". Davies stresses the shame of the poor, who "had never imagined they would need help"; Engels stresses their anger, describing the Rebecca rioters who "blackened their faces" and attacked the toll-gates. Both are scornful of official responses. Davies insists that "charity, however generous, is not a substitute for policy", while Engels dismisses the Government\'s commission with the flat irony of "there was an end of the matter". Their endings differ in tone: Davies closes on a moral challenge, asking why people in "one of the wealthiest nations in history" need help at all, whereas Engels closes on a political prediction that the poverty "must go on intensifying" and will produce "more serious manifestations". Davies wants the reader to feel ashamed that poverty exists; Engels wants the reader to understand that it cannot last.',
              'Grade 8-9':
                'Read together, the texts show two ways of making a reader take poverty seriously: through testimony and through analysis. Davies moves from a statistic to the people behind it. Her list of occupations, "A teaching assistant from Merthyr Tydfil, a former small-business owner from Swansea, a retired nurse from Newport", insists that the poor are workers, and the phrase "work was no longer enough" undermines the belief that work protects people from poverty. Engels, by contrast, presents Wales as a case study: it "illustrates the ruin of the small holders", and the chain of causes he sets out - competition, land fit only for "live stock", "increased mortgages" - makes poverty look like the predictable product of an economic system rather than a misfortune. Both writers reject individual blame, yet Engels, unlike Davies, criticises the poor for misreading their situation: because they "have not recognised the true cause of their wretched condition", they blame "all sorts of small causes" such as "high tolls". Davies treats the poor with tenderness and attends to their "shame"; Engels treats them with a detachment that can turn ironic, calling the riots "humorous Rebecca masquerades". Both are sceptical of official action, but in different registers. Davies\'s antithesis, "charity, however generous, is not a substitute for policy", appeals to a government she still expects to act, while Engels\'s deadpan "there was an end of the matter" suggests he expects nothing from government at all. The endings reveal the deepest difference. Davies asks why people in "one of the wealthiest nations in history" need help at all, an appeal to the reader\'s conscience; Engels predicts that poverty "must go on intensifying" and will produce "more serious manifestations", a warning of unrest rather than an appeal for pity.',
            },
            markScheme: [
              'Compares attitudes from both texts with clear cross-referencing',
              'Analyses methods of presentation in both sources',
              'Uses evidence from both sources to support comparisons',
              'Shows sustained comparative analysis throughout',
              'Top band: sophisticated, evaluative comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-01-writing',
        title: 'Section B: Writing',
        description:
          'In this section you will be assessed for the quality of your writing skills.\n\nFor each task, 12 marks are awarded for communication and organisation; 8 marks are awarded for writing accurately.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-01-q5',
            questionNumber: 5,
            questionText:
              'Your local council is considering closing a community food bank to save money.\n\nWrite a letter to the council arguing that the food bank should remain open.\n\nYou should write between one and two pages.\n\n(12 marks for communication and organisation / 4 marks for writing accurately)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with: appropriate formal register; relevant reasons to keep the food bank open; generally accurate SPaG; some attempt at persuasive techniques.',
              'Grade 6-7':
                'A well-structured letter with: consistent formal tone; a range of persuasive strategies including evidence and emotive language; secure accuracy; clear sense of audience.',
              'Grade 8-9':
                'A compelling letter with: authoritative voice; sophisticated argument that anticipates counter-arguments; varied and precise vocabulary; technical control throughout.',
            },
            markScheme: [
              'Communication & Organisation (12 marks): Appropriate form and register; persuasive purpose; structured argument; audience awareness',
              'Writing Accurately (4 marks): Sentence variety; vocabulary; spelling and punctuation',
            ],
          },
          {
            id: 'wjec-c2-01-q6',
            questionNumber: 6,
            questionText:
              '"In a wealthy country, no one should go hungry."\n\nWrite a speech for a school assembly arguing your point of view on this statement.\n\nYou should write between two and three pages.\n\n(16 marks for communication and organisation / 8 marks for writing accurately)',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with: some rhetorical devices; a discernible argument; appropriate register for a school assembly; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with: effective use of rhetorical techniques (repetition, tricolon, direct address); balanced argument that considers multiple perspectives; consistent accuracy and varied sentence structures.',
              'Grade 8-9':
                'An outstanding speech with: commanding voice and tone; sophisticated rhetorical architecture; nuanced argument that challenges assumptions; linguistic precision and flair; impeccable technical accuracy.',
            },
            markScheme: [
              'Communication & Organisation (16 marks): Purpose, audience, form; quality of argument; structural effectiveness; rhetorical skill',
              'Writing Accurately (8 marks): Sentence construction; vocabulary range and precision; spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 02: EDUCATION
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-02',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-02-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-02-q1',
            questionNumber: 1,
            questionText:
              'Read the 21st-century source text about education in Wales (Source A).\n\nList five things you learn about the challenges facing schools from this text.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${EDUCATION_21C}\n\nSource B:\n${EDUCATION_19C}`,
            extractSource: `Source A: ${EDUCATION_21C_REF} | Source B: ${EDUCATION_19C_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. There is a visible gap between confident and anxious students arriving in Year 7. 2. Some children arrive in shoes that do not fit properly. 3. The attainment gap is caused by poverty and housing insecurity. 4. Some pupils lack access to books, tutors and quiet spaces to study. 5. New initiatives are often abandoned when the funding runs out.',
            },
            markScheme: ['1 mark per valid point derived from Source A only, maximum 5'],
          },
          {
            id: 'wjec-c2-02-q2',
            questionNumber: 2,
            questionText:
              'How does the writer of Source A use language to convey her frustration about the education system?\n\nYou should comment on:\n- specific words and phrases\n- language features and techniques\n- the effects on the reader.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${EDUCATION_21C}`,
            extractSource: EDUCATION_21C_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer contrasts the confident children with "new backpacks" and the anxious ones "in shoes that are slightly too big." This makes the reader see the inequality clearly. The phrase "mistakes are expensive" shows that poorer children cannot afford to get things wrong. She says the gap is "not a mystery" which suggests the government already knows but does nothing. The phrase "ambition without resource is just aspiration" sounds clever and memorable, making her argument more powerful.',
              'Grade 6-7':
                'The writer constructs frustration through a rhetoric of deflation: each apparently positive statement is systematically undercut. The Curriculum for Wales "promises" and has "admirable ambitions" - but the approving vocabulary is immediately cancelled by the devastating epigram "ambition without resource is just aspiration, and aspiration without action is just words." The chain of diminishing synonyms enacts the process of dilution it describes. The opening vignette is structured as an implicit comparison that requires no commentary: the children with "labelled pencil cases" and those with "last year\'s bag" are placed side by side, and the reader is left to draw the moral conclusion. The phrase "careful alertness of someone who knows that mistakes are expensive" is particularly effective: "expensive" carries both literal (financial cost) and metaphorical (social consequence) weight, and the mature awareness attributed to the child - "someone who knows" - is itself an indictment of a system that forces children to understand scarcity before they understand fractions.',
            },
            markScheme: [
              'Analyses specific language techniques with examples',
              'Comments on effects of individual words and phrases',
              'Considers how language conveys attitude and emotion',
              'Uses embedded quotations effectively',
            ],
          },
          {
            id: 'wjec-c2-02-q3',
            questionNumber: 3,
            questionText:
              'Read the 19th-century source text (Source B).\n\nWhat do you learn about the education of poor children in 19th-century London from this text?\n\nYou should comment on:\n- what the writer describes\n- the writer\'s use of language to convey the situation.\n\n(Costermongers sold fruit, vegetables and fish in the streets from barrows and baskets. Ragged schools were free charity schools for the poorest children. "Bunts" was the money a child could keep from sales above the sum owed to a parent or master; "repugnance" means strong dislike.)',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${EDUCATION_19C}`,
            extractSource: EDUCATION_19C_REF,
            modelAnswers: {
              'Grade 4-5':
                'We learn that very few poor children in London went to school at all. Mayhew says hardly any costermongers\' children "are sent even to the Ragged Schools", and when they are, it is mostly so that "the mother may be saved the trouble of tending them", not so that they learn. Instead, "Both boys and girls are sent out by their parents in the evening to sell nuts" and other things, so they are working rather than learning. Their parents are "kind to their children", but few of them could read. One man had seen a mother teaching her children to read, yet Mayhew adds that "such instances were very rare". Mayhew says "the streets teach them" instead, and what they learn is mostly bad: "a craving for the excitement of gambling" and "an inordinate love of amusement". He warns that if they are not taught properly they will educate themselves "in vice".',
              'Grade 6-7':
                'Mayhew presents the education of poor London children as almost entirely absent, and his opening is quietly ironic: he has used the heading "Education", but admits that "non-education" might suit it better, so the reader expects failure from the first sentence. The emphatic "Very few indeed" and the word "even" in "sent even to the Ragged Schools" stress how far these children fall below even the lowest standard, since the ragged schools were free. He is blunt about the parents\' motives: children are sent to school, if at all, so that "the mother may be saved the trouble of tending them", rather "than from any desire that the children shall acquire useful knowledge". Work replaces school, as "Both boys and girls are sent out by their parents in the evening to sell nuts". Mayhew is fair to the parents, who are "kind to their children", though the words he quotes from someone else, "perhaps in a rough way", stop the praise becoming sentimental. The centre of the passage is a long list of what "the streets teach them". It begins with qualities that sound almost admirable, "a precocious acuteness" and "a patient endurance of cold and hunger", and ends in vice and idleness: "a craving for the excitement of gambling", "an irrepressible repugnance to any settled in-door industry". Almost every item is introduced by "a" or "an", as if it were a subject on a timetable, which makes the list an ironic curriculum. The final paragraph turns description into warning: "It is idle to imagine" that these lads "will not educate themselves in vice, if we neglect to train them to virtue". The pronoun "we" makes society responsible for the neglect.',
            },
            markScheme: [
              'Identifies relevant information from the source',
              'Comments on how language conveys conditions and attitudes',
              'Uses evidence from the text to support points',
              'Shows understanding of implicit as well as explicit meaning',
            ],
          },
          {
            id: 'wjec-c2-02-q4',
            questionNumber: 4,
            questionText:
              "Both writers present their views on education.\n\nCompare the following:\n- the writers' attitudes to education and its failures\n- how they convey these attitudes.\n\nYou must use the text to support your comments and make it clear which text you are referring to.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${EDUCATION_21C}\n\nSource B:\n${EDUCATION_19C}`,
            extractSource: `Source A: ${EDUCATION_21C_REF} | Source B: ${EDUCATION_19C_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers think poor children are let down by the education they receive. The teacher in Source A says the attainment gap is caused by "poverty, housing insecurity, parental stress", and Mayhew (Source B) shows poverty keeping children out of school altogether, because they are "sent out by their parents in the evening to sell nuts". The teacher describes the children she sees every September, such as those "in shoes that are slightly too big or slightly too small", while Mayhew describes a whole group, the costermongers\' children. Both writers blame the people in charge rather than the children: the teacher says "What we lack is not understanding but will", and Mayhew warns of what will happen "if we neglect to train them to virtue". The teacher asks for practical help like "smaller classes" and "breakfast in the morning"; Mayhew sets out no plan, but warns that the children will "educate themselves in vice".',
              'Grade 6-7':
                'Both writers argue that poverty decides what education a child receives, but they write from opposite sides of the school gate. The teacher in Source A writes from inside a school, and her authority comes from experience: "I have taught for twenty-two years." Mayhew writes as an investigator of children who are hardly ever inside a school; "Very few indeed" of them are sent "even to the Ragged Schools". Both use contrast to expose inequality. The teacher sets children with "new backpacks and labelled pencil cases" against those "carrying last year\'s bag"; Mayhew sets the schooling these children should have against the lessons that "the streets teach them". Both write lists. The teacher lists causes, "poverty, housing insecurity, parental stress, lack of access to books, tutors, and quiet spaces to study", while Mayhew lists what the streets teach, from "a patient endurance of cold and hunger" to "a craving for the excitement of gambling". Their sense of responsibility is similar: the teacher says "What we lack is not understanding but will", and Mayhew\'s "if we neglect to train them to virtue" also uses "we" to hold society to account. The difference lies in what each writer fears. The teacher fears that children will be failed quietly, and asks for "someone who has time to notice when they are struggling"; Mayhew fears that neglected children will turn to vice, since "It is idle to imagine" that they "will not educate themselves in vice".',
              'Grade 8-9':
                'Separated by more than a century and a half, these texts diagnose the same injustice, that a child\'s education is decided by the family\'s poverty, but they imagine its cost very differently. The teacher in Source A measures it in lost potential. Her opening vignette reads poverty in small signs, "shoes that are slightly too big or slightly too small", and in the "careful alertness of someone who knows that mistakes are expensive", so that inequality is something a child already understands. Mayhew measures it in lost virtue. His ironic correction of his own heading, from "Education" to "non-education", sets the tone for a passage in which schooling is replaced by the street, and his list of what "the streets teach them" is a curriculum in reverse: it opens with qualities that sound almost admirable, "a precocious acuteness" and "a patient endurance of cold and hunger", and ends in "an irrepressible repugnance to any settled in-door industry". Where the teacher treats children as learners whom the system fails, Mayhew treats them as minds that will be formed one way or another, since "some kind of education is continually going on". That idea gives his warning its force: "It is idle to imagine" that they "will not educate themselves in vice, if we neglect to train them to virtue". Both writers finally turn to their readers, and both use "we". The teacher\'s "What we lack is not understanding but will" accuses a society that knows what to do and does not do it; Mayhew\'s "if we neglect" makes the same accusation but frames the consequence as moral danger rather than wasted talent. The teacher\'s remedies are modest and practical, "smaller classes, more teaching assistants, breakfast in the morning"; Mayhew offers no programme, only the conviction that neglect is itself a kind of teaching.',
            },
            markScheme: [
              'Compares attitudes from both texts with clear cross-referencing',
              'Analyses methods of presentation in both sources',
              'Uses evidence from both sources to support comparisons',
              'Shows sustained comparative analysis throughout',
              'Top band: sophisticated, evaluative comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-02-writing',
        title: 'Section B: Writing',
        description:
          'In this section you will be assessed for the quality of your writing skills.\n\nFor each task, 12 marks are awarded for communication and organisation; 8 marks are awarded for writing accurately.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-02-q5',
            questionNumber: 5,
            questionText:
              'You have been asked to write a report for your school governors about how to improve support for disadvantaged students.\n\nWrite your report.\n\nYou should write between one and two pages.\n\n(12 marks for communication and organisation / 4 marks for writing accurately)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear report with: appropriate formal layout and register; relevant practical suggestions; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured report with: effective use of headings and subheadings; evidence-based recommendations; consistent formality and accuracy.',
              'Grade 8-9':
                'An authoritative report with: professional tone; sophisticated analysis of the problem; prioritised, costed recommendations; impeccable technical accuracy.',
            },
            markScheme: [
              'Communication & Organisation (12 marks): Appropriate form and register; informative purpose with recommendations; logical structure; audience awareness',
              'Writing Accurately (4 marks): Sentence variety; vocabulary; spelling and punctuation',
            ],
          },
          {
            id: 'wjec-c2-02-q6',
            questionNumber: 6,
            questionText:
              '"Every child deserves the same quality of education, regardless of where they live or how much money their parents earn."\n\nWrite an article for a national newspaper arguing your point of view on this statement.\n\nYou should write between two and three pages.\n\n(16 marks for communication and organisation / 8 marks for writing accurately)',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: recognisable article conventions (headline, introduction); a range of relevant points; generally accurate writing.',
              'Grade 6-7':
                'A well-crafted article with: engaging headline and opening; balanced argument with evidence; effective use of rhetorical techniques; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: compelling journalistic voice; nuanced argument that interrogates the statement; sophisticated use of evidence, anecdote, and rhetoric; technical precision throughout.',
            },
            markScheme: [
              'Communication & Organisation (16 marks): Purpose, audience, form; quality of argument; structural effectiveness; persuasive/rhetorical skill',
              'Writing Accurately (8 marks): Sentence construction; vocabulary range and precision; spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 03: TRAVEL
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-03',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-03-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-03-q1',
            questionNumber: 1,
            questionText:
              "Read the 21st-century source text about walking in Wales (Source A).\n\nList five things you learn about the writer's experience on the coast path.",
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${TRAVEL_21C}\n\nSource B:\n${TRAVEL_19C}`,
            extractSource: `Source A: ${TRAVEL_21C_REF} | Source B: ${TRAVEL_19C_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. The writer walked the Ceredigion coast path, which is sixty miles long. 2. The path runs from Cardigan to Ynyslas. 3. It rained for four out of five days. 4. The rain was hard and horizontal, not gentle drizzle. 5. The writer felt very alive despite the bad weather.',
            },
            markScheme: ['1 mark per valid point derived from Source A only, maximum 5'],
          },
          {
            id: 'wjec-c2-03-q2',
            questionNumber: 2,
            questionText:
              'How does the writer of Source A use language to convey the experience of walking in the Welsh landscape?\n\nYou should comment on:\n- specific words and phrases\n- language features and techniques\n- the effects on the reader.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${TRAVEL_21C}`,
            extractSource: TRAVEL_21C_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer describes the landscape changing so much it "feels like crossing into another country." The landscape is described as "wilder, older, less tamed" which makes Wales sound exciting and different. The rain is described as "hard, horizontal rain" which sounds intense. The writer uses personification in "The path does not care about your to-do list" to show that nature does not care about human worries. The phrase "simply be" at the end suggests the walk helps you feel peaceful and free.',
              'Grade 6-7':
                'Hartley constructs the Welsh landscape as a site of existential renewal through a rhetoric of subtraction. The opening paragraph uses a tricolon of comparative adjectives - "wilder, older, less tamed" - that defines Wales not by what it is but by its distance from the familiar English landscape, establishing a geography of otherness. The sky is "vast, indifferent, magnificent" - the central adjective "indifferent" is crucial, positioning nature\'s unconcern as liberating rather than hostile. The rain description subverts expectation: "not the gentle drizzle of popular imagination" dismisses the cliche before replacing it with the visceral "hard, horizontal rain that found every gap." The personification of weather as an adversary who "found" weakness is both humorous and physical. The final paragraph\'s sequence of negative constructions - "does not care," "does not check" - creates freedom through negation: the landscape is defined by what it refuses to do, and this refusal becomes a gift. The concluding infinitive "to simply be" is deliberately, almost provocatively simple after the complex prose that precedes it.',
            },
            markScheme: [
              'Analyses specific language techniques with examples',
              'Comments on effects of individual words and phrases',
              'Considers how language conveys experience and emotion',
              'Uses embedded quotations effectively',
            ],
          },
          {
            id: 'wjec-c2-03-q3',
            questionNumber: 3,
            questionText:
              'Read the 19th-century source text (Source B).\n\nWhat do you learn about the experience of travelling in 19th-century Wales from this text?\n\nYou should comment on:\n- what the writer describes\n- the writer\'s use of language to convey the experience.\n\n(Henrietta was Borrow\'s stepdaughter. The Wyddfa is the summit of Snowdon; "moels" are bare, rounded hills; a "dyffrin" is a valley; "apprehensive" means worried.)',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${TRAVEL_19C}`,
            extractSource: TRAVEL_19C_REF,
            modelAnswers: {
              'Grade 4-5':
                'We learn that Borrow climbed Snowdon with his stepdaughter Henrietta and "a young lad" as a guide, while his wife stayed behind because she did not feel strong enough for "the fatigue of the expedition". Snowdon was already popular with visitors: people could be seen on the path "as far as the eye could reach". At first "The path was remarkably good", but later it was "winding and much more steep", and they were "rather out of breath". Borrow worried that Henrietta would have to give up, but she "persevered". At the top there was "a rude cabin" where refreshments were sold, and there were "frightful precipices" on every side but the west. The view was "inexpressibly grand": they could see "the whole of Anglesey" and lakes shining "like sheets of ice or polished silver".',
              'Grade 6-7':
                'Borrow presents travel in 19th-century Wales as an adventure shared with others, and his language moves from plain narrative to wonder. The opening is practical: he engages "a young lad to serve as guide", and his wife stays behind, "not deeming herself sufficiently strong to encounter the fatigue of the expedition", a formal phrasing that treats the climb as a serious undertaking. Yet Snowdon is no lonely wilderness: "We were far from being the only visitors to the hill this day", and the people seen "going up or descending the path as far as the eye could reach" suggest that mountain tourism was already popular. The effort of the climb is told with understatement. At first the ascent is "anything but steep", later they are "rather out of breath", and Borrow admits he was "apprehensive that my gentle companion would be obliged to give over the attempt". The short clause "the gallant girl, however, persevered" makes Henrietta\'s effort heroic, and "safe and sound, though panting" balances relief with exhaustion. The summit brings danger and awe: "frightful precipices" fall away below it, and to someone gazing up from the vale nearly a mile beneath, the Wyddfa is "an object of admiration, of wonder and almost of fear". The last paragraph is built on repetition ("There we stood") and on words of intense feeling such as "inexpressibly grand". The contrast of "partly in glorious light, partly in deep shade" gives the landscape a painter\'s drama, and the simile of lakes "like sheets of ice or polished silver" is completed by a personification: seen from "the brow of Snowdon", they lie "in the deep valleys at his feet", as if the mountain were a giant looking down on Wales.',
            },
            markScheme: [
              'Identifies relevant information from the source',
              'Comments on how language conveys experience and perspective',
              'Uses evidence from the text to support points',
              'Shows understanding of implicit as well as explicit meaning',
            ],
          },
          {
            id: 'wjec-c2-03-q4',
            questionNumber: 4,
            questionText:
              "Both writers describe experiences of travelling in Wales.\n\nCompare the following:\n- the writers' attitudes to the Welsh landscape and the experience of travel\n- how they convey these attitudes.\n\nYou must use the text to support your comments and make it clear which text you are referring to.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${TRAVEL_21C}\n\nSource B:\n${TRAVEL_19C}`,
            extractSource: `Source A: ${TRAVEL_21C_REF} | Source B: ${TRAVEL_19C_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers love the Welsh landscape, but they experience it differently. Hartley (Source A) walks the coast path in "hard, horizontal rain", while Borrow (Source B) climbs Snowdon with his stepdaughter and a guide on a day that was "almost stiflingly hot" below the summit. Both writers find the walking hard: Hartley is soaked "to the skin within an hour", and Borrow and Henrietta are "rather out of breath". Hartley enjoys escaping from "The emails, the deadlines" of modern life, while Borrow enjoys the view from the top, which he calls "inexpressibly grand". Both are impressed by the power of nature: Hartley describes "the Atlantic smashing itself against the rocks below", and Borrow describes "frightful precipices".',
              'Grade 6-7':
                'Both writers present the Welsh landscape as something that rewards effort, but they find different rewards in it. Hartley seeks escape from himself: the landscape "strips away the accumulated nonsense of daily life", and his pleasure lies in hardship, in rain that "found every gap in every layer". Borrow seeks a view. His effort is told with restraint, "rather out of breath", "though panting", and it is repaid at the summit by "a scene inexpressibly grand". The weather shows the difference clearly. Hartley\'s rain is an adversary he comes to welcome; Borrow\'s day is so fine that it was "almost stiflingly hot" below, while the summit offers "a cold bracing atmosphere". Their company differs too. Hartley mentions no companion and addresses the reader directly ("your comfort", "your to-do list"), inviting the reader to share a private experience. Borrow climbs with Henrietta and a guide, among other visitors seen "as far as the eye could reach", so his Wales is a sociable place of tourism, with even "a rude cabin" on the summit. The most telling contrast is in how each writer relates to the landscape. Hartley is humbled by its indifference, "a landscape that has no interest whatsoever in your comfort"; Borrow is exalted by it and gives it a human body, "the brow of Snowdon" with lakes "at his feet", so that the mountain becomes a presence to be admired rather than a force that ignores him.',
            },
            markScheme: [
              'Compares attitudes from both texts with clear cross-referencing',
              'Analyses methods of presentation in both sources',
              'Uses evidence from both sources to support comparisons',
              'Shows sustained comparative analysis throughout',
              'Top band: sophisticated, evaluative comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-03-writing',
        title: 'Section B: Writing',
        description:
          'In this section you will be assessed for the quality of your writing skills.\n\nFor each task, 12 marks are awarded for communication and organisation; 8 marks are awarded for writing accurately.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-03-q5',
            questionNumber: 5,
            questionText:
              'A travel magazine has asked for contributions from readers about their favourite places.\n\nWrite an article for the magazine about a place you have visited that made a strong impression on you.\n\nYou should write between one and two pages.\n\n(12 marks for communication and organisation / 4 marks for writing accurately)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: appropriate magazine style; descriptive and reflective content; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted article with: engaging sensory detail; reflective commentary on the significance of the place; varied sentence structures and accurate writing.',
              'Grade 8-9':
                'An outstanding article with: vivid, original description; sophisticated reflection on the meaning of place and travel; precise, evocative language; flawless technical accuracy.',
            },
            markScheme: [
              'Communication & Organisation (12 marks): Appropriate form and register; descriptive and reflective purpose; effective structure; audience awareness',
              'Writing Accurately (4 marks): Sentence variety; vocabulary; spelling and punctuation',
            ],
          },
          {
            id: 'wjec-c2-03-q6',
            questionNumber: 6,
            questionText:
              '"Young people today spend too much time looking at screens and not enough time experiencing the natural world."\n\nWrite a speech for a school debate arguing your point of view on this statement.\n\nYou should write between two and three pages.\n\n(16 marks for communication and organisation / 8 marks for writing accurately)',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear speech with: some rhetorical devices; a discernible argument with examples; appropriate register for a school debate; generally accurate SPaG.',
              'Grade 6-7':
                'A well-crafted speech with: effective rhetorical techniques; balanced argument considering both sides; strong examples; consistent accuracy and varied syntax.',
              'Grade 8-9':
                'An outstanding speech with: commanding rhetorical voice; sophisticated argument that challenges the binary of the statement; original examples and compelling reasoning; technical virtuosity.',
            },
            markScheme: [
              'Communication & Organisation (16 marks): Purpose, audience, form; quality of argument; structural effectiveness; rhetorical skill',
              'Writing Accurately (8 marks): Sentence construction; vocabulary range and precision; spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 04: TECHNOLOGY
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-04',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-04-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-04-q1',
            questionNumber: 1,
            questionText:
              'Read the 21st-century source text about technology in education (Source A).\n\nList five things you learn about the introduction of AI marking software from this text.',
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${TECHNOLOGY_21C}\n\nSource B:\n${TECHNOLOGY_19C}`,
            extractSource: `Source A: ${TECHNOLOGY_21C_REF} | Source B: ${TECHNOLOGY_19C_REF}`,
            modelAnswers: {
              'Grade 4-5':
                '1. A school in Cardiff was the first in Wales to use AI marking software. 2. The software was made by a London-based company. 3. It can mark an essay in about ninety seconds. 4. It gives feedback on structure, vocabulary, spelling, and punctuation. 5. The headteacher called it "a game-changer" but other teachers were less positive.',
            },
            markScheme: ['1 mark per valid point derived from Source A only, maximum 5'],
          },
          {
            id: 'wjec-c2-04-q2',
            questionNumber: 2,
            questionText:
              'How does the writer of Source A use language to argue that human teachers cannot be replaced by technology?\n\nYou should comment on:\n- specific words and phrases\n- language features and techniques\n- the effects on the reader.',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${TECHNOLOGY_21C}`,
            extractSource: TECHNOLOGY_21C_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer says she is "not a Luddite" to show she is not against all technology, which makes her argument more balanced. She describes marking as reading for "voice" and "personality," which makes it sound personal and human. She gives examples of students doing unexpected things - a "quiet girl" writing something original and a talkative "boy" writing something "tender" - to show that teachers notice things machines cannot. The repeated phrase "It cannot" emphasises the limitations of AI.',
              'Grade 6-7':
                'Morgan constructs her argument through a carefully managed rhetoric of concession and refutation. The pre-emptive declaration "I am not a Luddite" is a strategic disarming of the most obvious counter-argument, establishing the writer as reasonable before she critiques technology. The central paragraph redefines marking through a semantic shift: the vocabulary moves from the technical ("checking for errors") to the humanistic ("voice," "personality," "the particular way that this particular student sees the world"). The repetition of "particular" insists on individuality as the irreducible element that technology cannot process. The anaphoric "It cannot" structure in the final paragraph accumulates absence: each repetition adds another dimension of human perception that the algorithm lacks. The most effective moment is the imagined teacher\'s response - "This is different from your usual work - tell me what happened" - which is simultaneously pedagogical and pastoral, embedding care within assessment. The final sentence\'s conditional "if we lose that" positions this loss as a choice, implicating the reader in the decision.',
            },
            markScheme: [
              'Analyses specific language techniques with examples',
              'Comments on effects of individual words and phrases',
              'Considers how language builds an argument',
              'Uses embedded quotations effectively',
            ],
          },
          {
            id: 'wjec-c2-04-q3',
            questionNumber: 3,
            questionText:
              'Read the 19th-century source text (Source B).\n\nWhat do you learn about 19th-century attitudes to new technology from this text?\n\nYou should comment on:\n- what the writer describes\n- the writer\'s use of language to convey their perspective.\n\n(Source B is by the American writer Henry David Thoreau. Maine and Texas are states at opposite ends of the United States; the "magnetic telegraph" sent messages along wires; the Princess Adelaide is Thoreau\'s example of royal gossip; Flying Childers was a famous racehorse; an "evangelist" brings good news, and the man who came "eating locusts and wild honey" is John the Baptist, the messenger in the Bible who announced the coming of Jesus.)',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${TECHNOLOGY_19C}`,
            extractSource: TECHNOLOGY_19C_REF,
            modelAnswers: {
              'Grade 4-5':
                'We learn that some people in the 19th century were not impressed by new inventions. Thoreau says there is "an illusion" about "modern improvements" and calls inventions "pretty toys" which "distract our attention from serious things". He mocks the telegraph: Americans are "in great haste" to build one from Maine to Texas, but those places may have "nothing important to communicate". He also mocks the plan to "tunnel under the Atlantic", joking that the first news to come through will be that "the Princess Adelaide has the whooping cough". He thinks people care more about speed than sense, as if the aim were "to talk fast and not to talk sensibly". So Thoreau thinks new technology makes things faster but not better.',
              'Grade 6-7':
                'Thoreau presents a sceptical, satirical attitude to the technology his age was proud of. He opens by casting doubt on "modern improvements": "there is an illusion about them; there is not always a positive advance". The image of the devil "exacting compound interest" suggests that progress carries a hidden cost which keeps growing. His most memorable judgement is a paradox: inventions are "improved means to an unimproved end". The two halves are almost the same words, but the meaning turns on "unimproved", which captures his point that technology changes how fast we do things, not whether they are worth doing. The telegraph from Maine to Texas is mocked through anticlimax: after the grand ambition comes the flat possibility that the two states "have nothing important to communicate". The story of the man who is handed a deaf woman\'s "ear trumpet" and then has nothing to say turns the point into comedy. The Atlantic example works the same way, moving from the grandeur of bringing "the old world some weeks nearer to the new" to royal gossip about the "whooping cough", while "the broad, flapping American ear" caricatures a public hungry for trivial news. The closing contrast, that the man whose horse trots "a mile in a minute" does not carry "the most important messages", shows Thoreau valuing the content of a message over the speed at which it travels.',
            },
            markScheme: [
              'Identifies relevant information about attitudes',
              'Comments on how language conveys perspective and concern',
              'Uses evidence from the text to support points',
              'Shows understanding of implicit as well as explicit meaning',
            ],
          },
          {
            id: 'wjec-c2-04-q4',
            questionNumber: 4,
            questionText:
              "Both writers express concerns about the impact of new technology.\n\nCompare the following:\n- the writers' attitudes to new technology and what they think it might cost us\n- how they convey these attitudes.\n\nYou must use the text to support your comments and make it clear which text you are referring to.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${TECHNOLOGY_21C}\n\nSource B:\n${TECHNOLOGY_19C}`,
            extractSource: `Source A: ${TECHNOLOGY_21C_REF} | Source B: ${TECHNOLOGY_19C_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers are worried about new technology. Morgan (Source A) is worried that AI marking will replace the human relationship between teachers and students, and Thoreau (Source B) is worried that inventions like the telegraph "distract our attention from serious things". Neither says technology is all bad: Morgan says "I am not a Luddite", and Thoreau only says "there is not always a positive advance", not that there is never one. Both think speed is not the most important thing. Morgan says the software can mark an essay in "approximately ninety seconds" but cannot "see the human being behind the handwriting", and Thoreau says people want "to talk fast and not to talk sensibly". Morgan is serious and personal, while Thoreau uses humour, such as the joke about the "whooping cough".',
              'Grade 6-7':
                'Both writers accept technology in principle while questioning what it does to human communication. Morgan establishes her reasonableness at once, "I am not a Luddite", and grants that technology has "transformed education in ways that are overwhelmingly positive". Thoreau makes a smaller concession, that "there is not always a positive advance", which implies that sometimes there is, before dismissing inventions as "pretty toys". Both locate the danger in what technology leaves out. For Morgan it is the human reader: marking means reading "for voice, for personality", and an algorithm "cannot see the human being behind the handwriting". For Thoreau it is meaning itself: the telegraph is useless if Maine and Texas "have nothing important to communicate", and a faster world may only mean faster gossip about "the whooping cough". Their methods differ. Morgan uses specific, tender examples, "the quiet girl in the third row" and the boy who "has written something unexpectedly tender", to show what a machine would miss. Thoreau uses satire and paradox, "improved means to an unimproved end", to make the enthusiasm of his age look foolish. Morgan\'s closing conditional, "if we lose that", presents the loss as a choice still to be made; Thoreau writes as if the mistake has already been made, and his final image of the horse that trots "a mile in a minute" but does not carry "the most important messages" leaves the reader to judge a society that values speed over substance.',
              'Grade 8-9':
                'Read together, the texts show each new technology of communication raising the same question: whether faster communication means better communication. Both writers answer no, but from different positions. Morgan writes as a practitioner defending a relationship; Thoreau writes as a philosopher questioning a whole culture. Morgan\'s argument rests on concession and redefinition. "I am not a Luddite" disarms the obvious objection, and the shift in vocabulary from "checking for errors" to "voice" and "personality" redefines marking as attention to "the particular way that this particular student sees the world", where the repetition of "particular" insists on what cannot be standardised. Thoreau\'s argument rests on paradox and anticlimax. The phrase "improved means to an unimproved end" packs his whole case into six words: technology perfects the method while leaving the purpose untouched. His examples reduce grand projects, a telegraph from Maine to Texas and a tunnel "under the Atlantic", to trivial outcomes, "nothing important to communicate" and the Princess Adelaide\'s "whooping cough". Where Morgan fears the loss of something precious, the teacher\'s ability to notice when a pupil\'s work is "different from your usual work", Thoreau fears that there may be nothing of value to send, so that speed exposes emptiness rather than destroying depth. Their tones reflect this. Morgan is earnest, and her conditional "if we lose that" keeps the outcome open; Thoreau is ironic, and the absurd image of "the broad, flapping American ear" treats his readers\' appetite for news as the real problem. Morgan asks us to protect human judgement from machines; Thoreau asks whether we had much to say in the first place.',
            },
            markScheme: [
              'Compares attitudes from both texts with clear cross-referencing',
              'Analyses methods of presentation in both sources',
              'Uses evidence from both sources to support comparisons',
              'Shows sustained comparative analysis throughout',
              'Top band: sophisticated, evaluative comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-04-writing',
        title: 'Section B: Writing',
        description:
          'In this section you will be assessed for the quality of your writing skills.\n\nFor each task, 12 marks are awarded for communication and organisation; 8 marks are awarded for writing accurately.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-04-q5',
            questionNumber: 5,
            questionText:
              'Your school is considering allowing students to use AI tools to help with homework.\n\nWrite a letter to your headteacher giving your views on this proposal.\n\nYou should write between one and two pages.\n\n(12 marks for communication and organisation / 4 marks for writing accurately)',
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear letter with: appropriate formal register; a range of relevant points for and/or against; generally accurate SPaG.',
              'Grade 6-7':
                'A well-structured letter with: balanced argument considering benefits and risks; practical suggestions; consistent formality and accuracy.',
              'Grade 8-9':
                "A compelling letter with: sophisticated argument that goes beyond simple for/against; nuanced understanding of AI's potential and limitations; authoritative voice; technical precision.",
            },
            markScheme: [
              'Communication & Organisation (12 marks): Appropriate form and register; persuasive/argumentative purpose; logical structure; audience awareness',
              'Writing Accurately (4 marks): Sentence variety; vocabulary; spelling and punctuation',
            ],
          },
          {
            id: 'wjec-c2-04-q6',
            questionNumber: 6,
            questionText:
              '"Technology is making us less human, not more connected."\n\nWrite an article for a magazine aimed at young people arguing your point of view on this statement.\n\nYou should write between two and three pages.\n\n(16 marks for communication and organisation / 8 marks for writing accurately)',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: recognisable article conventions; a range of relevant points with examples; appropriate register for a young audience; generally accurate writing.',
              'Grade 6-7':
                'A well-crafted article with: engaging opening and clear structure; balanced argument with personal examples and wider evidence; effective rhetorical techniques; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: distinctive voice appropriate to the audience; sophisticated argument that redefines the terms of the debate; original thinking and compelling examples; flawless technical control.',
            },
            markScheme: [
              'Communication & Organisation (16 marks): Purpose, audience, form; quality of argument; structural effectiveness; persuasive/rhetorical skill',
              'Writing Accurately (8 marks): Sentence construction; vocabulary range and precision; spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // EXAM 05: GENDER
  // ═══════════════════════════════════════════════════════════════════════════
  {
    id: 'wjec-c2-05',
    board: 'WJEC',
    paperNumber: 2,
    title:
      'Component 2: 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing',
    subtitle: 'English Language C700U20-1',
    code: 'C700U20-1',
    totalTimeMinutes: 120,
    totalMarks: 80,
    sections: [
      {
        id: 'wjec-c2-05-reading',
        title: 'Section A: Reading',
        description:
          'Read both source texts carefully. Then answer all the questions in this section.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-05-q1',
            questionNumber: 1,
            questionText:
              "Read the 21st-century source text about gender equality in sport (Source A).\n\nList five things you learn about the treatment of women's sport from this text.",
            marks: 5,
            suggestedTimeMinutes: 5,
            questionType: 'short-answer',
            extract: `Source A:\n${GENDER_21C}\n\nSource B:\n${GENDER_19C}`,
            extractSource: `Source A: ${GENDER_21C_REF} | Source B: ${GENDER_19C_REF}`,
            modelAnswers: {
              'Grade 4-5':
                "1. The Welsh women's football team's success was reported on page fourteen of the newspaper. 2. The men's team got front-page coverage for losing a friendly. 3. Women's sport gets about 10% of media coverage in the UK. 4. Female athletes earn much less than male athletes. 5. Some women players train on pitches without floodlights.",
            },
            markScheme: ['1 mark per valid point derived from Source A only, maximum 5'],
          },
          {
            id: 'wjec-c2-05-q2',
            questionNumber: 2,
            questionText:
              "How does the writer of Source A use language to argue that women's sport is unfairly treated?\n\nYou should comment on:\n- specific words and phrases\n- language features and techniques\n- the effects on the reader.",
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source A:\n${GENDER_21C}`,
            extractSource: GENDER_21C_REF,
            modelAnswers: {
              'Grade 4-5':
                'The writer uses a specific example of the newspaper reporting to show the unfairness: the women\'s success was on page fourteen while the men\'s failure was on the front page. This contrast shocks the reader. She uses statistics - "approximately 10%" - to prove women\'s sport is ignored. The phrase "a fraction of their male counterparts" shows how unequal pay is. The word "assumption" is important because it suggests people are biased without realising it. The final sentence about "who it belongs to" makes the reader think about sport differently.',
              'Grade 6-7':
                'Lewis opens with a devastatingly specific anecdote that stands for the whole problem: the juxtaposition of page fourteen (women qualifying) and the front page (men losing a friendly) inverts every reasonable expectation of newsworthiness, and the detail that the report sat "beneath an article about a local dog show" adds a note of dark comedy that heightens the outrage. The phrase "If you wanted a single image to illustrate" explicitly positions this anecdote as synecdoche, inviting the reader to see the particular as representative. The second paragraph shifts to the empirical: "approximately 10%" and "a fraction" establish statistical authority. The tricolon of practical grievances - "pitches without floodlights... share changing rooms... buy their own kit" - descends from inconvenience to indignity, the asyndetic listing creating a sense of accumulated neglect. The third paragraph performs the most sophisticated rhetorical move: the redefinition of the problem from material ("funding") to cultural ("assumption"). The phrase "not because we have watched it and formed this judgement, but because we have absorbed it" distinguishes between active critical evaluation and passive cultural conditioning, implicating the reader in an unconscious prejudice.',
            },
            markScheme: [
              'Analyses specific language techniques with examples',
              'Comments on effects of individual words and phrases',
              'Considers how language builds a persuasive argument',
              'Uses embedded quotations effectively',
            ],
          },
          {
            id: 'wjec-c2-05-q3',
            questionNumber: 3,
            questionText:
              'Read the 19th-century source text (Source B).\n\nWhat do you learn about 19th-century attitudes to gender and women\'s capabilities from this text?\n\nYou should comment on:\n- what the writer describes\n- the writer\'s use of language to convey their perspective.\n\n("Avail" means help or be of use; "dependents" are people under another\'s power; "hot-house and stove cultivation" is the growing of plants in heated glasshouses; "indolently" means lazily.)',
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'analysis',
            extract: `Source B:\n${GENDER_19C}`,
            extractSource: GENDER_19C_REF,
            modelAnswers: {
              'Grade 4-5':
                'We learn that in the 19th century many people believed that women\'s nature suited them to the roles they already had. Mill disagrees. He says nobody can know "the nature of the two sexes" while they have only been seen "in their present relation to one another", with women "under the control of the men". He argues that what people call "the nature of women" is "an eminently artificial thing", caused by "forced repression" in some ways and "unnatural stimulation" in others. He compares women to a plant grown in a "hot-house": some parts are encouraged to grow while others are left in the "wintry air" and have "a stunted growth". This shows that he thinks women\'s abilities have been held back, not that they are missing.',
              'Grade 6-7':
                'Mill shows that the common 19th-century view of women\'s capabilities rested on an assumption, and he attacks the assumption rather than the conclusions drawn from it. His opening is confident and dismissive: "Neither does it avail anything to say" that nature suits women to their "present functions and position". He then speaks with personal authority, "I deny that any one knows, or can know, the nature of the two sexes", and the correction in "knows, or can know" moves from what people happen to know to what they could ever know. His reasoning is logical: a fair comparison would need a society in which "the women were not under the control of the men", and there has never been one. The key sentence is short and precise: "What is now called the nature of women is an eminently artificial thing". The words "now called" suggest that "nature" is only a label, and the balanced phrases "forced repression in some directions, unnatural stimulation in others" show women both held down and forced on. An extended metaphor of cultivation develops this. Women\'s capabilities are like plants given "hot-house and stove cultivation" for "the benefit and pleasure of their masters", while other shoots are left in the "wintry air", with "ice purposely heaped all round them", or are "burnt off with fire". The adverb "purposely" makes the damage deliberate. Mill ends by mocking men\'s "inability to recognise their own work", as they "indolently believe that the tree grows of itself in the way they have made it grow".',
            },
            markScheme: [
              'Identifies relevant information about attitudes',
              'Comments on how language conveys perspective and argument',
              'Uses evidence from the text to support points',
              'Shows understanding of implicit as well as explicit meaning',
            ],
          },
          {
            id: 'wjec-c2-05-q4',
            questionNumber: 4,
            questionText:
              "Both writers argue against gender inequality.\n\nCompare the following:\n- the writers' attitudes to gender equality and the barriers they identify\n- how they convey these attitudes.\n\nYou must use the text to support your comments and make it clear which text you are referring to.",
            marks: 15,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${GENDER_21C}\n\nSource B:\n${GENDER_19C}`,
            extractSource: `Source A: ${GENDER_21C_REF} | Source B: ${GENDER_19C_REF}`,
            modelAnswers: {
              'Grade 4-5':
                'Both writers argue that women are held back by assumptions rather than by any real lack of ability. Lewis (Source A) says we think women\'s sport is "less exciting, less skilful" not because we have watched it but because "we have absorbed it from a culture". Mill (Source B) says that what people call "the nature of women" is "an eminently artificial thing". Both think the unfairness is created by society. Lewis gives modern evidence, such as women\'s sport getting "approximately 10% of media coverage", while Mill compares women\'s abilities to plants grown in a "hot-house". Lewis wants "a fundamental reimagining" of sport, and Mill wants people to stop believing that the present roles of men and women are natural.',
              'Grade 6-7':
                'Both writers identify the same barrier to equality: an assumption that passes itself off as a judgement. Lewis says we think women\'s sport is less worthy "not because we have watched it and formed this judgement, but because we have absorbed it from a culture"; Mill says that nobody can know "the nature of the two sexes, as long as they have only been seen in their present relation to one another". Both, then, argue that people mistake the effects of inequality for its justification. Their methods differ. Lewis begins with a concrete anecdote, the women\'s team reported "on page fourteen" while the men\'s team received "front-page coverage for losing a friendly", and supports it with statistics. Mill begins with a logical argument and develops it through an extended metaphor, in which some capabilities receive "hot-house and stove cultivation" while others are left in the "wintry air" with "ice purposely heaped all round them". Both writers use contrast. Lewis sets women\'s teams against men\'s and finds their facilities "inferior", with "pitches without floodlights" and changing rooms shared "with the men\'s reserve team"; Mill sets a "vapour bath" against "the snow". Their conclusions differ in scope. Lewis calls for "a fundamental reimagining of what sport is for, and who it belongs to"; Mill\'s target is larger, the whole belief that women\'s present position is natural, and his final image of men who believe "the tree grows of itself in the way they have made it grow" shows them failing to see their own responsibility.',
              'Grade 8-9':
                'These texts, written more than a century and a half apart, share a diagnosis: inequality survives because it passes for nature or common sense. Mill makes the argument in its most general form. His claim that "What is now called the nature of women is an eminently artificial thing" turns his opponents\' language against them, since "now called" suggests that "nature" is only a name given to the results of "forced repression in some directions, unnatural stimulation in others". Lewis applies the same reasoning to one field. Her sentence "We assume that women\'s sport is less exciting, less skilful, less worthy of attention" names the assumption through a list of comparatives, and her correction, "not because we have watched it and formed this judgement, but because we have absorbed it from a culture", does in one sentence what Mill does in a paragraph: it separates a real judgement from an inherited one. Their methods reflect their audiences. Mill argues from principle to Victorian readers likely to resist him, so he builds a careful chain of reasoning and then gives it life through the extended metaphor of the "hot-house" and the "wintry air". Lewis writes for readers who accept equality in principle, so she persuades through evidence and irony, the report on "page fourteen" placed "beneath an article about a local dog show". Both writers finally direct attention to those who hold power. Mill mocks men\'s "inability to recognise their own work", as they "indolently believe that the tree grows of itself"; Lewis calls for a rethinking of "who it belongs to", implying that sport has been claimed by men. The difference is one of scale. Lewis asks for a change of attitude, and of funding, in one area of life; Mill denies that anyone can yet know what women are capable of, which makes every limit placed on them unjustified.',
            },
            markScheme: [
              'Compares attitudes from both texts with clear cross-referencing',
              'Analyses methods of presentation in both sources',
              'Uses evidence from both sources to support comparisons',
              'Shows sustained comparative analysis throughout',
              'Top band: sophisticated, evaluative comparison with conceptualised understanding',
            ],
          },
        ],
      },
      {
        id: 'wjec-c2-05-writing',
        title: 'Section B: Writing',
        description:
          'In this section you will be assessed for the quality of your writing skills.\n\nFor each task, 12 marks are awarded for communication and organisation; 8 marks are awarded for writing accurately.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: 'wjec-c2-05-q5',
            questionNumber: 5,
            questionText:
              "Your school is organising an event to celebrate International Women's Day.\n\nWrite a leaflet to encourage students to attend the event and to explain why it matters.\n\nYou should write between one and two pages.\n\n(12 marks for communication and organisation / 4 marks for writing accurately)",
            marks: 16,
            suggestedTimeMinutes: 20,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear leaflet with: appropriate form (headings, subheadings, direct address); informative and persuasive content; generally accurate SPaG.',
              'Grade 6-7':
                'A well-designed leaflet with: effective combination of information and persuasion; engaging tone appropriate for students; varied sentence structures; consistent accuracy.',
              'Grade 8-9':
                'An outstanding leaflet with: sophisticated balance of practicality and principle; compelling voice that avoids condescension; precise and varied language; flawless technical accuracy.',
            },
            markScheme: [
              'Communication & Organisation (12 marks): Appropriate form and register; informative and persuasive purpose; effective layout; audience awareness',
              'Writing Accurately (4 marks): Sentence variety; vocabulary; spelling and punctuation',
            ],
          },
          {
            id: 'wjec-c2-05-q6',
            questionNumber: 6,
            questionText:
              '"True equality between men and women has already been achieved. There is nothing left to fight for."\n\nWrite an article for a newspaper arguing your point of view on this statement.\n\nYou should write between two and three pages.\n\n(16 marks for communication and organisation / 8 marks for writing accurately)',
            marks: 24,
            suggestedTimeMinutes: 40,
            questionType: 'transactional-writing',
            modelAnswers: {
              'Grade 4-5':
                'A clear article with: recognisable article conventions; a range of relevant points with examples; generally accurate writing.',
              'Grade 6-7':
                'A well-crafted article with: engaging headline and structure; balanced argument with specific evidence; effective rhetorical techniques; consistent accuracy.',
              'Grade 8-9':
                'An outstanding article with: authoritative journalistic voice; sophisticated argument that examines the definition of equality; original examples drawn from multiple domains; technical mastery throughout.',
            },
            markScheme: [
              'Communication & Organisation (16 marks): Purpose, audience, form; quality of argument; structural effectiveness; persuasive/rhetorical skill',
              'Writing Accurately (8 marks): Sentence construction; vocabulary range and precision; spelling, punctuation, grammar',
            ],
          },
        ],
      },
    ],
  },
]
