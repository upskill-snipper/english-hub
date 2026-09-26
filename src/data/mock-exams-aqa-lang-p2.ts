// @ts-nocheck
// ─── AQA GCSE English Language Paper 2 Mock Exam Papers ─────────────────────
// Writers' Viewpoints and Perspectives - 6 complete papers with source texts

/**
 * WHAT WAS WRONG (found 26 September 2026 by
 * scripts/check-mock-exam-extracts.mjs, fixed 27 September). All twelve
 * source texts were presented as published writing by named people. Each
 * Source A was labelled as an extract from a titled article by a named
 * writer ("The Modern Workplace", 2024, and five like it); each Source B as
 * an article from a named journal ("Future of Work Quarterly" and five
 * more), with a named author, several of them given the
 * title Dr or Professor. None of these articles exists: the passages were
 * written for this file. A student would have taken them for real
 * journalism by real experts, and the names could belong to real people
 * who never said any of it. Three Source B texts also answered the
 * invented Source A writer by name.
 *
 * The model answers argued with those people by name, and misquoted even the
 * passages as printed: nine quotations in eight questions were not in the
 * text (among them "cities exact a psychological toll rarely acknowledged",
 * "intense production and necessary recuperation" and "control repackaged
 * digitally"), and three more joined words of the text across a silent cut.
 * Several answers also said things about the passages that were false: a
 * pair of statements called a rhetorical question, "rhetorical questions" in
 * a passage that asks none, a "statistic about cortisol levels" where no
 * figure is given, an active verb called passive voice, and a writer said
 * not to acknowledge the benefits of cities in a passage with a paragraph of
 * them. Two passages misstated real facts: GDPR was said to establish that
 * people "own" their data (it gives rights over personal data, not
 * ownership), platforms were said to make "thousands of dollars per user"
 * a year, and South Korea was listed among countries with free or low-cost
 * university. One Question 5 answer divided a week into three office days
 * and three remote ones.
 *
 * A second review on 27 September found more. The e-books reply said that
 * when research is done with "digital natives" the comprehension gap
 * between paper and screen "disappears"; the 2018 meta-analysis by Delgado
 * and colleagues found the gap growing, not closing, over the years it
 * covered. It also said "many libraries" lend e-books without copy
 * protection, when library e-books almost always carry it. Both are now
 * claims the evidence supports (some researchers put the gap down to
 * reading habits; libraries lend e-books free; some publishers sell them
 * without copy protection), and the two answers that repeated the old
 * claims follow. Seven answers still said things the passages do not: a
 * repetition of "cycles" (the word is used once), Source B conceding
 * "before" it objects when it concedes after, work "paused" where Source A
 * says reduced, a reply that "does not dismiss worries about noise" when it
 * calls the city's sensory intensity stimulating, "Neither writer
 * considers" a mixed approach that Source B half proposes, cities that
 * "only seem worse" where Source B says "not necessarily", and a reply said
 * to explain Source A's "isolation" when it never mentions it. Every
 * Question 1 mark scheme gave 2 marks per text and 2 for synthesis, 6 in
 * all, then said "Maximum 10 marks"; it is now 4 per text. The university
 * Question 5 answers told students that to be a doctor, lawyer or engineer
 * "university is necessary": what these careers need is a degree, and
 * degree apprenticeships now lead to some of them with a wage instead of
 * fees. One also said "right-of-passage" for rite of passage, and a data
 * answer spelt "theater".
 *
 * WHAT IT IS NOW. The passages are labelled as what they are, specially
 * written for this paper; the invented names, journals and dates are gone,
 * with the unused authorA, dateA, authorB and dateB fields that carried
 * them, and Source B no longer names the Source A writer. The factual errors
 * are corrected in the passages and in the answers that repeated the revenue
 * figure. Every Question 1 to 4 answer now refers to "the writer of
 * Source A" or "Source B", quotes only words its question prints (checked by
 * script), and was reread against the passage for what it claims. Unspaced
 * hyphens used as dashes are now spaced, and spellings are British. There
 * was no genuine text to restore: no label named a real work, so replacing
 * the passages with published ones would make new papers, not correct
 * these.
 *
 * KNOWN GAP. A real 8700/2 paper pairs a nineteenth-century source with a
 * twentieth- or twenty-first-century one, and its Section A questions are
 * worth 4, 8, 12 and 16 marks (true statements, summary, language,
 * comparison). These papers use two modern sources and questions worth 10,
 * 12, 12 and 6, so they practise the skills rather than reproduce the paper.
 * The model answers are also longer or shorter than the timings allow: the
 * Grade 6-7 answers to the 6-mark, 8-minute Question 4 run to 200-260
 * words, while every Question 5 answer (230-350 words) falls short of the
 * "approximately 450-550 words" its own question asks for.
 *
 * This file is not in allMockExamPapers (src/data/mock-exams.ts) and nothing
 * imports it; the teacher toolkit names it only as a fileRef string. It is
 * still in a public repository.
 */

import type { MockExamPaper } from './mock-exams'

// ─── Helper: creates a standard Paper 2 paper from config ────────────────────

interface P2Config {
  set: number
  sourceA: string
  textA: string
  sourceB: string
  textB: string
  q1BothTexts: string
  q1MarkScheme: string[]
  q1Answer45: string
  q1Answer67: string
  q2Text: string
  q2MarkScheme: string[]
  q2Answer45: string
  q2Answer67: string
  q3BothTexts: string
  q3MarkScheme: string[]
  q3Answer45: string
  q3Answer67: string
  q4Text: string
  q4MarkScheme: string[]
  q4Answer45: string
  q4Answer67: string
  q5Prompt: string
  q5Viewpoint: string
  q5MarkScheme: string[]
  q5Answer45: string
  q5Answer67: string
}

function makeP2(c: P2Config): MockExamPaper {
  const nn = String(c.set).padStart(2, '0')
  return {
    id: `aqa-lang-p2-${nn}`,
    board: 'AQA',
    paperNumber: 2,
    title: 'AQA Paper 2',
    subtitle: `Writers' Viewpoints and Perspectives - Set ${c.set}`,
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: `aqa-lang-p2-${nn}-reading`,
        title: 'Section A: Reading',
        description:
          'You are going to read two texts. You will then answer the questions about both texts.',
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: `aqa-lang-p2-${nn}-q1`,
            questionNumber: 1,
            questionText: `Use details from both sources to write a summary of what each writer says about ${c.q1BothTexts}`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'summary',
            extract: `Source A (${c.sourceA}):\n${c.textA}\n\nSource B (${c.sourceB}):\n${c.textB}`,
            extractSource: 'Both texts',
            modelAnswers: {
              'Grade 4-5': c.q1Answer45,
              'Grade 6-7': c.q1Answer67,
            },
            markScheme: c.q1MarkScheme,
          },
          {
            id: `aqa-lang-p2-${nn}-q2`,
            questionNumber: 2,
            questionText: `How does the writer of Source A use language to ${c.q2Text}\n\nYou could include the writer's choice of:\n- words and phrases\n- language features and techniques\n- sentence forms.`,
            marks: 12,
            suggestedTimeMinutes: 15,
            questionType: 'analysis',
            extract: c.textA,
            extractSource: c.sourceA,
            modelAnswers: {
              'Grade 4-5': c.q2Answer45,
              'Grade 6-7': c.q2Answer67,
            },
            markScheme: c.q2MarkScheme,
          },
          {
            id: `aqa-lang-p2-${nn}-q3`,
            questionNumber: 3,
            questionText: `Compare how the writers present their viewpoints about ${c.q3BothTexts}\n\nYou could compare:\n- the ideas presented in the two texts\n- the language used to present these ideas\n- the writers' methods to influence the reader.`,
            marks: 12,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${c.textA}\n\nSource B:\n${c.textB}`,
            extractSource: 'Both texts',
            modelAnswers: {
              'Grade 4-5': c.q3Answer45,
              'Grade 6-7': c.q3Answer67,
            },
            markScheme: c.q3MarkScheme,
          },
          {
            id: `aqa-lang-p2-${nn}-q4`,
            questionNumber: 4,
            questionText: `You may use details from both texts to support your answer if it is helpful.\n\n${c.q4Text}`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'evaluation',
            extract: `Source A:\n${c.textA}\n\nSource B:\n${c.textB}`,
            extractSource: 'Both texts',
            modelAnswers: {
              'Grade 4-5': c.q4Answer45,
              'Grade 6-7': c.q4Answer67,
            },
            markScheme: c.q4MarkScheme,
          },
        ],
      },
      {
        id: `aqa-lang-p2-${nn}-writing`,
        title: 'Section B: Writing',
        description: 'You are going to write to present a viewpoint.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: `aqa-lang-p2-${nn}-q5`,
            questionNumber: 5,
            questionText: `${c.q5Prompt}\n\nYour task is to write to present a viewpoint.\n\n${c.q5Viewpoint}\n\nYou should write approximately 450-550 words.`,
            marks: 40,
            suggestedTimeMinutes: 45,
            questionType: 'persuasive-writing',
            modelAnswers: {
              'Grade 4-5': c.q5Answer45,
              'Grade 6-7': c.q5Answer67,
            },
            markScheme: c.q5MarkScheme,
          },
        ],
      },
    ],
  }
}

// ─── PAPER 1: REMOTE WORK ───────────────────────────────────────────────────

const paper1: MockExamPaper = makeP2({
  set: 1,
  sourceA: 'Opinion article, specially written for this paper',
  textA: `Remote working has transformed how we think about employment. No longer bound by the constraints of a physical office, workers now enjoy unprecedented flexibility. They can structure their day around personal commitments, eliminate exhausting commutes, and reclaim time with family. The productivity data speaks for itself: remote workers report higher job satisfaction and companies report improved output metrics.

However, this shift comes with hidden costs. The boundary between work and home blurs dangerously. Employees find themselves working longer hours, answering emails at midnight, unable to truly disconnect. The isolation is real. Workers describe feeling disconnected from colleagues, struggling with mental health, missing spontaneous collaboration that drives innovation.

Yet companies embrace remote work primarily for financial reasons - they no longer need expensive office spaces. The supposed employee benefits are secondary. True flexibility requires investment: proper home office equipment, mental health support, structured communication protocols. Few companies provide this. Instead, workers are left to manage hybrid chaos, unclear expectations, and the guilt of never being quite present enough - whether at home or at work.`,
  sourceB: 'Reply article, specially written for this paper',
  textB: `The debate over remote working has become needlessly polarised. Yes, some workers thrive at home. Others genuinely benefit from office culture. But the real opportunity lies in hybrid models - yet these are implemented poorly, creating the worst of both worlds for many employees.

When hybrid working is done well - with respect for both in-office and remote time - companies see remarkable benefits. Teams working remotely produce excellent results on focused tasks. Regular office days foster relationships and spontaneous problem-solving. Culture and innovation require both.

The statistics reveal nuance often missed in this debate. A 2024 study found that workers felt most satisfied when they had autonomy over when to work remotely. A three-day office week worked better than random hybrid schedules. Communication tools improved, but they couldn't replace face-to-face mentoring for junior staff.

The problem isn't remote work itself. It's that many organisations have simply shifted their office culture online without reconsidering how work actually gets done. They've maintained outdated meeting culture, rigid hierarchies, and surveillance practices - now applied digitally. This isn't flexibility; it's just control in a new form. True workplace transformation requires rethinking fundamental assumptions about trust, accountability, and what "being present" actually means in a digital age.`,
  q1BothTexts: 'the benefits and drawbacks of remote working',
  q1MarkScheme: [
    'Award up to 4 marks per text for identifying key points',
    'Award up to 2 marks for synthesising or comparing the texts',
    'Accept paraphrasing; award credit for accurate summaries',
    'Maximum 10 marks',
  ],
  q1Answer45: `Source A presents remote work as good for workers at first, offering flexibility and more time with family. However, the writer argues that companies mainly use it to save money on offices. Workers suffer from blurred boundaries between work and home, and from isolation. Source B accepts that remote work has both advantages and disadvantages, and argues that the answer is hybrid work done well. It says remote teams can produce excellent results, but many companies fail to support it properly and carry on controlling staff in a new form. Both texts criticise the way remote work is actually carried out.`,
  q1Answer67: `The writer of Source A argues that remote work offers real benefits - flexibility, time with family and, it claims, better productivity - but that these are undermined by companies that adopt it to cut costs and then fail to invest in support. The central harms it identifies are isolation and the collapse of the boundary between work and home. The writer of Source B is more even-handed: both remote and office work have value, but hybrid models fail because organisations have moved their old office culture online without rethinking how work gets done. This writer separates genuine flexibility from surveillance "applied digitally", which is only "control in a new form". Both writers see poor implementation as the core problem, but Source A focuses on the wellbeing of employees while Source B focuses on how organisations are run. Source A is more critical of companies' motives; Source B presents the problem as one of outdated thinking, and so as solvable.`,
  q2Text: 'present the negative impacts of remote working on employees',
  q2MarkScheme: [
    'Identifies specific language features/techniques used',
    'Explains the effect of these choices',
    'Connects effects to the aim of showing negative impacts',
    'Uses subject terminology accurately (e.g., hyperbole, repetition, metaphor)',
    'Sophisticated analysis in top band linking semantic fields to meaning',
  ],
  q2Answer45: `The writer uses negative language to stress the downsides. The phrase "hidden costs" suggests problems that workers were not told about, and the boundary between work and home "blurs dangerously", where the adverb makes a gradual change sound like a threat. Employees work "longer hours" and answer emails "at midnight", which shows constant pressure. The writer also says workers feel "disconnected from colleagues", which shows how lonely remote work can be. Mentioning "the guilt of never being quite present enough" appeals to the reader's emotions. The short sentence "The isolation is real." is blunt and emphatic, making the point memorable.`,
  q2Answer67: `The writer of Source A builds a semantic field of danger and isolation to undercut the positive picture painted in the opening paragraph. The adverb in "blurs dangerously" turns a gradual, almost invisible change into a threat, so the loss of the boundary between work and home becomes something to fear. The list "working longer hours, answering emails at midnight, unable to truly disconnect" builds pressure clause by clause, and "midnight" makes the intrusion of work concrete. The writer uses the word "disconnect" twice with opposite effects: workers are "unable to truly disconnect" from their jobs yet feel "disconnected from colleagues", so remote work leaves them tied to work but cut off from people. The four-word sentence "The isolation is real." sits among longer sentences as a blunt assertion that dismisses any doubt. Finally, "primarily for financial reasons" and "The supposed employee benefits are secondary" recast the flexibility praised at the start as a by-product of cost-cutting, which implicitly condemns companies' motives.`,
  q3BothTexts: 'the implementation and responsibility for remote working problems',
  q3MarkScheme: [
    'Identifies ideas in each text (award up to 2 marks per text)',
    'Makes explicit comparisons (not just side-by-side points)',
    'Analyses language choices and their effects',
    'Considers audience and purpose',
    "Top band: sophisticated, integrated comparison of writers' methods",
  ],
  q3Answer45: `Both writers criticise the way companies handle remote work. The writer of Source A blames companies for saving money on offices without investing in support for staff, and sounds angry with employers. The writer of Source B agrees that organisations have failed, but for a different reason: they have moved their old office culture online without rethinking how work gets done. Source A focuses on employees suffering; Source B focuses on changing how organisations think. Source A uses emotional language about "guilt" and "isolation", while Source B uses more analytical language about "office culture" and "fundamental assumptions". Source A is more critical of companies, while Source B points towards solutions such as a planned three-day office week.`,
  q3Answer67: `Both writers see failures of implementation as central, but they place the responsibility differently. The writer of Source A treats companies as culpable: they adopt remote work "primarily for financial reasons" while neglecting their staff, and the dismissive sentence "The supposed employee benefits are secondary" builds a picture of corporate cynicism. The list of costs ("working longer hours, answering emails at midnight, unable to truly disconnect") gives the argument its emotional charge. The writer of Source B, by contrast, treats poor implementation as a failure of thinking rather than of motive. Measured phrases such as "needlessly polarised" and "real opportunity" present this writer as a reasonable arbiter standing above the debate, and the concession "Yes, some workers thrive at home" makes the writer seem fair before the case is made. Yet Source B is not uncritical: "control in a new form" is as sharp as anything in Source A, but it is aimed at habits ("outdated meeting culture, rigid hierarchies") rather than at greed. Source A seems to write for workers who feel let down; Source B for the managers who could change things. Source A diagnoses a moral failure; Source B an intellectual one.`,
  q4Text: `Which source do you find more convincing in its argument? Explain your answer, using evidence from both sources.`,
  q4MarkScheme: [
    'Clear judgement stated (which source is more convincing)',
    'Evidence from the text supports the judgement',
    'Explains why the evidence is effective/convincing',
    'Considers alternative perspective',
    'Top band: sophisticated evaluation of rhetorical strategies and evidence quality',
  ],
  q4Answer45: `I find Source B more convincing because its writer uses more specific evidence, such as "a 2024 study" showing that workers were most satisfied when they could choose when to work remotely. Source A makes claims about isolation and guilt but gives no evidence for them beyond saying that workers "describe" these feelings. Source B admits that remote work has benefits and disadvantages, so it seems fairer and more balanced. Source A seems one-sided against companies, which makes it less trustworthy. Source B's suggestion of a three-day office week is practical. However, Source A is right that companies save money on offices, and Source B does not really deal with this.`,
  q4Answer67: `Source A offers a forceful critique of corporate motives, but Source B is more convincing because its argument is better supported and more precise. Its writer supports claims with evidence - "A 2024 study found" - and a concrete finding ("A three-day office week worked better than random hybrid schedules"), whereas Source A relies mainly on assertion and emotional appeal; even its one appeal to evidence, "The productivity data speaks for itself", names no data. Source B's evidence is not beyond question either, since the study is never named, but it is specific enough to be tested. Its distinction between "flexibility" and "control in a new form" shows a sharper understanding: rather than blaming remote work itself for the pressure employees feel, it traces the problem to organisations that have not rethought how work is done. Its concession that "some workers thrive at home" also builds credibility. However, Source A exposes a gap in Source B's case: good hybrid work needs investment ("proper home office equipment, mental health support"), and companies that adopted remote work "primarily for financial reasons" may not pay for it. Overall, Source B's balance and evidence make it more trustworthy, though Source A's scepticism about companies' motives remains valid.`,
  q5Prompt: `Many jobs that were previously office-based have moved to remote or hybrid working arrangements. This has raised questions about how work should be organised in the future.`,
  q5Viewpoint: `Write an article for a career guidance website presenting your viewpoint on whether most office jobs should be fully remote, fully office-based, or hybrid. Consider the needs of employees, employers, and society.`,
  q5MarkScheme: [
    'Establishes clear viewpoint early',
    'Uses evidence and examples to support points',
    'Employs persuasive techniques effectively',
    'Organises ideas logically with clear paragraphing',
    'Uses sophisticated vocabulary and varied sentence structures',
    'Addresses counterarguments',
    'Top band: compelling, well-developed argument with sophisticated rhetoric',
  ],
  q5Answer45: `The Future of Work Should Be Hybrid

Remote work and office work both have advantages and disadvantages. The best solution is hybrid working because it combines the benefits of both while avoiding the worst problems.

Remote work is good because employees save time commuting and can work flexibly. Productivity often increases because people can focus without office distractions. However, isolation is a real problem, especially for new employees learning from experienced workers. Some jobs need collaboration and brainstorming, which works better in person.

Office work has benefits too. People build relationships, which improves company culture. Face-to-face communication is clearer and faster. However, long commutes waste time, and offices are expensive to maintain. Not everyone works best in an office environment.

Hybrid working solves these problems. Employees can work remotely for focused work but come to the office for meetings and collaboration. This gives flexibility and also builds relationships. Companies save money because they don't need as many desks, but they still have office culture.

The best hybrid model gives employees choice about when to work remotely. This increases job satisfaction and shows that companies trust their workers. Three days in the office and two at home works well for most jobs.

In conclusion, hybrid working is the best solution for the future. It balances the needs of employees with business requirements and provides flexibility while maintaining workplace culture.`,
  q5Answer67: `The Hybrid Workplace: Balancing Autonomy and Connection

The future of work should not be dictated by binary thinking. Remote work offers genuine benefits - enhanced focus, reclaimed time, and increased autonomy - yet carries psychological costs of isolation and disconnection. Conversely, office culture fosters innovation and mentorship but consumes time and resources. The authentic solution lies in intelligent hybrid models that prioritise employee autonomy rather than corporate control.

The evidence is compelling: workers report highest satisfaction when they control their remote work schedule, not when organisations impose rigid mandates. A three-day office week provides sufficient in-person collaboration for mentoring junior staff and spontaneous problem-solving, while two remote days enable deep focus on individual work. This structure respects both human connection and professional productivity.

However, hybrid success requires organisational commitment beyond cost-cutting. Companies must resist the temptation to maintain surveillance-based control digitally. True flexibility means trusting employees to work effectively wherever they choose, equipped with proper technology and communication systems. Poorly implemented hybrid arrangements - random office days, unclear expectations, surveillance monitoring - replicate office culture's worst aspects without its community benefits.

For employers, hybrid working presents opportunity. Reduced office footprints decrease real estate costs while maintaining sufficient in-person interaction for culture and innovation. For employees, autonomy over work location acknowledges individual circumstances: caregiving responsibilities, neurodiversity, commute distances. Society benefits from reduced carbon emissions and decreased traffic congestion.

The counterargument - that fully remote work eliminates commute-related productivity loss - ignores data showing isolated workers struggle with mental health despite output metrics. Equally, insisting all work be office-based ignores how many employees produce excellent work remotely and how forced commuting wastes resources and increases stress.

The ethical choice is hybrid models that genuinely prioritise flexibility and trust. This requires organisations to reconceive fundamental assumptions about productivity, control, and presence. The future of work belongs to companies courageous enough to trust their employees.`,
})

// ─── PAPER 2: BOOKS VS E-BOOKS ──────────────────────────────────────────────

const paper2: MockExamPaper = makeP2({
  set: 2,
  sourceA: 'Opinion article, specially written for this paper',
  textA: `In an age of screens and notifications, the physical book remains an unparalleled tool for deep learning. When you hold a book, your mind enters a different state - slower, more contemplative, more deeply engaged. Studies show that readers of physical texts demonstrate better comprehension and retention than those reading identical content on screens. The tactile experience matters: the weight in your hands, the smell of paper, the visual progression through pages all anchor memory and meaning.

Yet publishers, authors, and even libraries have succumbed to the digital imperative. We've been sold a story of inevitability: that e-books are the future, that paper is obsolete, that convenience trumps all other values. This narrative benefits technology corporations far more than readers. Digital platforms lock content behind subscriptions, control access, track reading behaviour, and can remove books without warning. Physical books offer something radical in the digital age: ownership and permanence.

The environmental argument, often deployed to justify digital books, deserves scrutiny. Paper production harms ecosystems, yes. But digital infrastructure - server farms consuming vast electricity, planned obsolescence in devices, rare earth mining for components - exacts hidden environmental costs rarely calculated. A physical book, circulated through libraries and used second-hand, may have lower environmental impact than a device requiring replacement every few years.

What we're losing isn't just books - it's cognitive space. When reading becomes frictionless, convenient, algorithmically curated, something essential is surrendered. We need the slow, unconnected experience that books provide.`,
  sourceB: 'Reply article, specially written for this paper',
  textB: `The romantic ideal of the physical book obscures practical realities. E-books have democratised access to literature in ways print never could. A reader in a rural area, a refugee in a camp, a person with visual impairment - all can instantly access millions of titles through digital formats and accessibility features that simply cannot exist in print. Dismissing e-books as mere convenience ignores how they've enabled literacy for populations historically excluded from reading.

Moreover, the "cognitive superiority" of print reading is overstated. Yes, some studies show better comprehension with physical text, but these findings are often small-effect studies with methodological limitations. Some researchers argue that the gap reflects habit rather than the medium: we skim on screens because that is how we use them, and we can learn to read them closely. The advantage may lie less with the paper than with how we have learned to read.

Subscription platforms and digital rights do warrant concern. But the solution isn't abandoning digital formats; it's ensuring equitable access and reader ownership. Public libraries lend e-books free of charge, and some publishers sell them without the copy protection that ties a book to one company's device. Independent publishers increasingly sell books directly, maintaining author-reader relationships outside corporate platforms. The digital ecosystem, while imperfect, is rapidly evolving towards fairer models.

The environmental calculation favours digital decisively. A single e-reader, used for thousands of books over its lifetime, has lower cumulative carbon footprint than print equivalents. Paper books require ongoing printing, shipping, and storage - perpetual environmental costs. Used book markets, while admirable, don't eliminate paper's baseline environmental impact.

Rather than nostalgic returns to print, we should push for digital literacy, platform regulation, and environmental responsibility in how e-books are produced and distributed.`,
  q1BothTexts: 'the advantages and disadvantages of physical books versus e-books',
  q1MarkScheme: [
    'Identifies key points from each source accurately (up to 4 marks per text)',
    'Shows clear understanding of different perspectives',
    'Award up to 2 marks for synthesis or comparison',
    'Accept paraphrasing and indirect references',
    'Maximum 10 marks',
  ],
  q1Answer45: `Source A argues that physical books are better than e-books for learning and memory. The writer says that holding a book, feeling its weight and smelling the paper help you remember what you read. The writer claims that publishers and even libraries have given in to e-books in a way that helps technology companies more than readers, and worries that digital platforms can track readers and remove books. The writer also says e-books may not be better for the environment, because server farms use vast amounts of electricity and devices need replacing. Source B disagrees, saying e-books help more people read, including people in rural areas, refugees and people with visual impairments. It argues that the studies showing print is better are weak. It says digital books are better for the environment because one e-reader can be used for thousands of books.`,
  q1Answer67: `The writer of Source A argues that physical books give a deeper experience than screens, claiming that studies show better comprehension and retention in print and that the physical sensations of reading "anchor memory and meaning". The writer presents the move to digital as serving technology companies rather than readers, pointing to subscriptions, the tracking of reading behaviour and the removal of books without warning. The environmental argument reverses the usual assumption by stressing the hidden costs of server farms, device replacement and mining. The writer of Source B, by contrast, presents digital formats as opening up reading to people historically excluded from it: a reader in a rural area, a refugee, a person with visual impairment. This writer explains the comprehension research as a matter of reading habits rather than of the medium itself, and offers solutions such as free library lending, books sold without copy protection and direct sales rather than abandoning digital formats. Source B argues that one e-reader's lifetime footprint beats the continuing costs of printing, shipping and storing paper. Both writers care about readers' access and ownership; they disagree about which format serves them better.`,
  q2Text: 'present physical books as intellectually and environmentally superior to e-books',
  q2MarkScheme: [
    'Identifies specific language choices/techniques',
    'Explains how these choices create meaning and persuasion',
    "Connects techniques to the author's purpose",
    'Uses accurate subject terminology',
    'Top band: sophisticated analysis of cumulative rhetorical effect',
  ],
  q2Answer45: `The writer uses strong language to make physical books sound superior. Calling the book an "unparalleled tool" suggests nothing else can match it, and saying publishers have "succumbed to the digital imperative" suggests e-books are a trend forced on people. The metaphor "sold a story of inevitability" implies readers have been deceived. When the writer says your mind enters "a different state", reading a book sounds calm and deep. The writer lists sensory details, "the weight in your hands, the smell of paper", which appeal to the reader's senses and make books feel precious. The phrase "something radical in the digital age" makes owning books sound like a rebellion against technology.`,
  q2Answer67: `The writer of Source A presents print as a form of resistance to corporate power. The description of reading as "a different state - slower, more contemplative, more deeply engaged" builds a semantic field of depth and attention, set against the "screens and notifications" of the opening. The metaphor "sold a story of inevitability" casts the rise of e-books as marketing rather than progress, appealing to the reader's scepticism, and the list of what platforms do ("lock content behind subscriptions, control access, track reading behaviour, and can remove books without warning") moves from inconvenience to something close to surveillance. The appeal to the senses - "the weight in your hands, the smell of paper, the visual progression through pages" - suggests that digital reading is thinner and less memorable. Calling physical books "something radical in the digital age" is paradoxical: the older technology becomes the rebellious one, and the words after the colon, "ownership and permanence", deliver the point with force. The environmental paragraph turns a supposed weakness of print into a strength: the concession "Paper production harms ecosystems, yes" is brief, while the "hidden environmental costs rarely calculated" of digital suggest that its supporters have ignored inconvenient facts. The cumulative effect presents print as both better for the mind and more honest.`,
  q3BothTexts: 'whether printed books or e-books represent the future of reading',
  q3MarkScheme: [
    'Identifies contrasting ideas in each source',
    "Makes explicit comparisons between writers' viewpoints",
    'Analyses language techniques used by each writer',
    'Considers rhetorical strategies and effects',
    'Top band: integrated analysis of competing perspectives and rhetorical sophistication',
  ],
  q3Answer45: `The writer of Source A thinks printed books should have a future because they are better for learning and possibly for the environment. This writer writes emotionally about books and criticises technology companies. The writer of Source B disagrees, saying e-books help more people read, so digital reading should be improved rather than rejected. Source B refers to research to support its points, although it names no studies. Source A focuses on the feeling and experience of reading a book, while Source B focuses on practical benefits and access. Source A sounds nostalgic; Source B sounds practical. Source A criticises corporations; Source B wants platforms regulated. They have opposite views about which format is better.`,
  q3Answer67: `The two writers imagine opposite futures: a return to print against a fairer digital world. Source A presents the physical book as better for the mind and more honest, and digital reading as a product of corporate manipulation. Its language is evaluative and emotional: we need "the slow, unconnected experience that books provide", and what is being lost is "cognitive space". Source B uses the language of evidence, questioning the research ("often small-effect studies with methodological limitations") and pointing to the readers that digital formats reach. Its concession ("Subscription platforms and digital rights do warrant concern") anticipates the other side's strongest point and makes the writer seem balanced rather than ideological. Source A presents print as resistance; Source B presents digital reading as a matter of fairness. Stylistically, Source A relies on metaphor ("sold a story of inevitability") and emphatic short statements, while Source B builds its case through concession and logical steps ("Moreover", "Rather than"). Source B's opening, "The romantic ideal of the physical book obscures practical realities", recasts Source A's values as nostalgia. Underneath, the writers disagree about what matters most: Source A argues for the kind of reading people should value; Source B argues for the reading people should be able to reach.`,
  q4Text: `Which source presents a more compelling argument about the future of reading? Explain your answer using evidence from both sources.`,
  q4MarkScheme: [
    'Clear judgement stated',
    'Supported by specific evidence from both texts',
    'Explains why evidence is compelling/convincing',
    'Considers strengths and limitations of alternative view',
    'Top band: sophisticated evaluation of argument quality, evidence, and rhetoric',
  ],
  q4Answer45: `I think Source B is more convincing because it shows who benefits from e-books: "A reader in a rural area, a refugee in a camp, a person with visual impairment". Source A does not deal with this important point. Source B also gives a clear reason why e-readers may be better for the environment, since one device can be used for thousands of books. Source A criticises technology but offers no practical plan beyond returning to print. However, Source A is right that companies can control digital content and remove books, and Source B does not fully answer this.`,
  q4Answer67: `Source B's argument is more compelling because it is grounded in fairness and makes fewer claims it cannot support, though Source A raises concerns that Source B answers too quickly. Source B makes digital access human rather than abstract by naming who benefits: "A reader in a rural area, a refugee in a camp, a person with visual impairment". Its concession that "Subscription platforms and digital rights do warrant concern" is followed by practical answers (libraries that "lend e-books free of charge", publishers who "sell books directly"), which shows problem-solving rather than simple rejection. It also weakens Source A's main claim about learning by describing the studies behind it as "often small-effect studies with methodological limitations". On the environment, however, neither writer gives figures: Source A's "hidden environmental costs rarely calculated" and Source B's claim that one e-reader "has lower cumulative carbon footprint" are both assertions. And Source A's warning that platforms "can remove books without warning" is not really answered by Source B's hope that the digital world is "rapidly evolving towards fairer models". By dismissing print as "The romantic ideal", Source B also risks overlooking the real worry about who owns what we read. Overall, Source B's focus on readers who were historically excluded makes the stronger case, though its trust that platforms will correct themselves deserves more scepticism.`,
  q5Prompt: `Reading habits are changing as technology advances. Young people increasingly access stories through different media: streaming services, social media, podcasts, and interactive apps, alongside traditional books.`,
  q5Viewpoint: `Write an article for a magazine about reading and culture presenting your viewpoint on how reading will (or should) change in the coming decade. Consider the different formats available, how different people might benefit from different formats, and what might be lost or gained in this transformation.`,
  q5MarkScheme: [
    'Clear, sustained viewpoint',
    'Develops ideas with evidence and examples',
    'Uses persuasive techniques effectively',
    'Organises argument logically',
    'Sophisticated vocabulary and varied sentence structures',
    'Addresses counterarguments and complexities',
    'Top band: compelling, nuanced argument with rhetorical sophistication',
  ],
  q5Answer45: `The Future of Reading is Diverse

Reading is changing. Young people don't read books as much as older generations, but they read more than ever before. They read on their phones, watch shows, listen to podcasts, and follow stories on social media. This doesn't mean reading is dying; it's just changing form.

Different formats work for different people. Some people like to read books because they concentrate better without distractions. Other people like audiobooks because they can listen while doing other things like exercising or commuting. Young people might read manga or graphic novels instead of traditional books. These are all forms of reading.

Streaming services tell stories in new ways. Shows like Netflix series can develop characters over many episodes, which books can take longer to do. Podcasts let people listen to stories, which helps people who are busy or who like listening better than reading.

Some people worry that we're losing something important when fewer people read traditional books. They think books are better for learning and memory. However, different formats work for different people. Someone with dyslexia might prefer audiobooks. Someone with limited time might prefer short social media stories.

The future of reading should include all formats. Young people will read differently than their parents, but that doesn't mean it's worse. We should celebrate that more people can access stories in ways that work for them.

In conclusion, reading is not dying; it's evolving. The future will include books, audiobooks, video, and interactive formats. Different people will use different formats, and that's okay.`,
  q5Answer67: `The Transformation of Reading: Embracing Multiple Literacies

The question is not whether reading will change - it already has - but whether cultural institutions will acknowledge this transformation authentically rather than defensively. The future of reading belongs not to a singular format but to a complex, intersecting ecosystem where books, audio, video, and interactive narratives coexist, each serving particular cognitive, social, and emotional needs.

Dismissing new formats as inferior misses crucial equity implications. Audiobooks provide access for blind readers and people with dyslexia, vastly expanding who can engage with complex narratives. Podcasts enable storytelling for people whose lives don't permit sustained sitting and reading - essential recognition for working parents, commuters, and people with attention differences. Graphic novels and manga develop visual literacy and appeal to neurodivergent readers who process visual and textual information simultaneously. These aren't compromises; they're sophisticated tools addressing diverse ways of learning and experiencing narrative.

Simultaneously, the concern about concentrated reading attention deserves serious consideration. Algorithms deliberately fragment attention; social media platforms optimise for distraction. When narrative is interrupted by notifications and algorithm-driven recommendations, something substantive about contemplation is lost. Deep sustained reading - in whatever format - requires resistance against attentional capitalism.

The authentic future is not either/or but both/and: recognising that audiobooks and podcasts enable previously excluded readers while insisting these new formats also demand protection against corporate manipulation and distraction. Young people should encounter sustained, complex narratives across formats - not merely algorithmic fragments designed for engagement metrics.

Culture should invest equally in all formats. Libraries should support audiobook lending, interactive narratives, and podcasts alongside books. Schools should teach media literacy and attention discipline, not condemn formats. Most importantly, we should recognise that the decline of book reading among young people often reflects not format preference but the fact that their time is occupied by forced social media engagement and educational systems that have eliminated pleasure reading.

The future of reading is not a format choice. It's a question of whether we allow young people genuine autonomy in how they encounter stories, or whether we let attention-harvesting platforms colonise all their narrative experiences.`,
})

// ─── PAPER 3: URBAN MENTAL HEALTH ────────────────────────────────────────────

const paper3: MockExamPaper = makeP2({
  set: 3,
  sourceA: 'Opinion article, specially written for this paper',
  textA: `Cities are engines of human achievement and connection, yet they exact a psychological toll rarely acknowledged. Anxiety disorders and depression are significantly more prevalent among urban populations than their rural counterparts. The constant stimulation - noise, crowds, visual complexity, social density - creates a state of perpetual cognitive overload. Our nervous systems evolved for sparse environments; they cannot sustain equilibrium in cities' relentless sensory demand.

Urban design compounds this crisis. Modern cities prioritise traffic flow and commercial efficiency over human wellbeing. Parks are sparse, green spaces are monetised, and streets are designed for vehicles rather than pedestrians. The loss of biophilic contact - direct nature experience - deprives urban dwellers of a fundamental psychological restorative. Studies demonstrate that even brief exposure to vegetation reduces cortisol levels and anxiety. Cities, by design, deny this essential human need.

Yet cities also offer profound psychological benefits: belonging through community, meaning through cultural engagement, and economic opportunity enabling dignity. The relationship is complex. The issue isn't urbanisation itself but how cities are currently built and structured. A redesigned city - with abundant green space, reduced traffic, lower density, protected quiet zones - might retain psychological benefits while mitigating harm.

The real challenge is political. Real estate development generates enormous profit; genuine urban redesign threatens those profits. Until cities prioritise residents' mental health over developers' returns, urban psychological crisis will deepen.`,
  sourceB: 'Reply article, specially written for this paper',
  textB: `The narrative of urban psychological crisis often reflects rural nostalgia rather than evidence. Yes, cities have higher diagnosed anxiety rates - but this reflects diagnostic access, not necessarily higher actual prevalence. Rural populations face their own mental health crises: geographic isolation, limited mental health services, higher suicide rates, and economic desperation. Urban areas have psychiatrists, therapists, crisis services. Rural areas have gaps.

Moreover, cities provide psychological resources rural life cannot. Diverse communities foster belonging for people excluded in rural homogeneity - LGBTQ+ individuals, ethnic minorities, religious minorities. Cities enable anonymity and freedom unavailable in small communities where everyone knows your business. They offer cultural institutions, educational opportunities, and economic mobility. For millions of people, particularly young people from marginalised backgrounds, cities are psychologically liberating.

The sensory intensity of cities, which critics of city life frame as a pure stressor, actually stimulates cognitive engagement and novelty-seeking behaviour that humans inherently desire. Yes, urbanisation requires psychological adaptation, but humans demonstrate remarkable adaptability. Urban dwellers develop sophisticated attentional filtering; they thrive on stimulation.

Urban mental health issues do exist, but attributing them to city design rather than economic inequality is misleading. Urban poverty, precarious housing, and employment instability generate psychological distress - not inherently urban phenomena but capitalism's manifestations. Rural poverty is equally damaging; it's simply less visible.

Cities should improve green spaces and traffic management - good ideas broadly. But romanticising rural life as psychologically superior ignores the documented mental health challenges rural populations face while erasing the genuine freedom cities provide.`,
  q1BothTexts: 'the effects of city living on mental health',
  q1MarkScheme: [
    'Identifies key points from each text (up to 4 marks per text)',
    'Shows understanding of different perspectives',
    'Synthesises or compares perspectives (up to 2 marks)',
    'Accurate paraphrasing accepted',
    'Maximum 10 marks',
  ],
  q1Answer45: `Source A says that city life harms mental health because of constant noise, crowds and stimulation, and that anxiety and depression are more common in cities. The writer explains that cities have too little nature, which is important for reducing stress. The writer accepts that cities also bring community, culture and jobs, and thinks they could be redesigned with more green space and less traffic. The real obstacle, the writer says, is that developers make money from the way cities are built now. Source B disagrees. It says cities may only seem worse because people there are more likely to be diagnosed, and that rural areas have serious mental health problems of their own. It argues that cities help people who might be excluded elsewhere, such as LGBTQ+ people and religious minorities. It says the stress in cities comes from poverty and insecurity, not from the city itself. Both writers agree that cities have mental health problems, but they disagree about the cause.`,
  q1Answer67: `The writer of Source A argues that city life strains the mind through sensory overload and the loss of contact with nature, made worse by design that favours traffic and commerce over wellbeing. The problem has a political side too: redesign would threaten developers' profits, so the harm continues. Yet the writer does not blame cities as such, accepting that they offer belonging, culture and opportunity, and that a redesigned city could keep those benefits while reducing the harm. The writer of Source B challenges the evidence itself, arguing that higher urban anxiety figures reflect easier access to diagnosis, and that rural mental health crises are just as serious but less visible. This writer stresses what cities give people who are excluded elsewhere - LGBTQ+ individuals, ethnic and religious minorities - and treats the sensory intensity of cities as stimulating rather than harmful. Both accept that cities have mental health problems, but they locate the cause differently: Source A in how cities are built, Source B in poverty and insecurity, which exist in the countryside too.`,
  q2Text: 'show how city design damages mental health',
  q2MarkScheme: [
    'Identifies specific language features and techniques',
    'Explains the effect of these choices on the reader',
    "Connects to the writer's purpose and argument",
    'Accurate terminology usage',
    'Top band: sophisticated analysis of how multiple techniques reinforce meaning',
  ],
  q2Answer45: `The writer uses strong language to show how the design of cities harms mental health. The opening says cities "exact a psychological toll", which makes the damage sound like a price people are forced to pay. The list "noise, crowds, visual complexity, social density" piles up the pressures to show how many there are. The phrase "perpetual cognitive overload" sounds like a serious medical condition and makes the reader worry about city living. When the writer says parks are "sparse" and green spaces are "monetised", it suggests that cities have too little nature and turn what there is into business. Saying "Cities, by design, deny this essential human need" makes the harm sound deliberate. The writer also mentions "cortisol levels", a scientific term that makes the argument sound more authoritative.`,
  q2Answer67: `The writer of Source A opens with praise that turns into an accusation: cities are "engines of human achievement and connection, yet they exact a psychological toll rarely acknowledged". The verb "exact" presents harm as a price extracted from residents, and "rarely acknowledged" casts the writer as revealing something hidden. The list "noise, crowds, visual complexity, social density" accumulates pressures, and "perpetual cognitive overload" turns them into a lasting condition. The claim that "Our nervous systems evolved for sparse environments" appeals to evolutionary authority, suggesting that the harm is built into human biology rather than a matter of taste. The second paragraph moves the blame to design: "Urban design compounds this crisis." The three clauses of "Parks are sparse, green spaces are monetised, and streets are designed for vehicles rather than pedestrians" show a city built for money and traffic rather than people, and the scientific vocabulary of "biophilic contact" and "cortisol levels" lends authority to the claim that nature is a psychological necessity. The short sentence "Cities, by design, deny this essential human need." makes the harm sound deliberate. Finally, the closing opposition between "residents' mental health" and "developers' returns" turns design into a moral choice between wellbeing and profit.`,
  q3BothTexts: 'whether city living is psychologically harmful',
  q3MarkScheme: [
    'Identifies contrasting viewpoints from each text',
    'Makes explicit comparisons between perspectives',
    'Analyses language choices and their effects',
    'Considers how each writer constructs their argument',
    'Top band: sophisticated analysis of competing rhetorical strategies',
  ],
  q3Answer45: `The writer of Source A thinks the way cities are built harms mental health. The writer uses scientific language, such as "cortisol levels", to make the argument sound authoritative. The writer of Source B disagrees and argues that rural areas have mental health problems that are just as serious. Source B thinks the real problem is poverty and inequality, not cities themselves. Source B focuses on the good things about cities: freedom for minorities and economic opportunity. Source A focuses mostly on physical harms such as noise and the lack of nature, although it does accept that cities offer community and culture. Both writers offer some hope: Source A wants cities redesigned with more green space, while Source B suggests that the deeper problem to tackle is inequality.`,
  q3Answer67: `The writers build opposing explanations of the same problem. Source A locates the harm in how cities are built: sensory overload and the loss of nature, sustained because redesign would threaten developers' profits. Source B relocates it to poverty and insecurity, which it calls "not inherently urban phenomena but capitalism's manifestations". Stylistically, Source A draws on scientific authority - "Our nervous systems evolved for sparse environments", "cortisol levels" - to present urban harm as a matter of biology, then moves from evidence to moral critique, ending on "developers' returns". Source B answers with a challenge to the evidence: higher urban anxiety figures reflect "diagnostic access, not necessarily higher actual prevalence". Its opening charge that the crisis narrative reflects "rural nostalgia rather than evidence" reframes Source A's kind of case as sentiment. It concedes the practical proposals ("good ideas broadly") while treating them as secondary. Source B also centres people whom Source A does not mention at all: "LGBTQ+ individuals, ethnic minorities, religious minorities", for whom cities are "psychologically liberating". Where Source A presents sensory intensity as overload, Source B presents it as stimulation that humans "inherently desire". The writers' values differ: Source A puts mental wellbeing and the natural environment first; Source B puts freedom and social justice first. Both make concessions, but differently: Source A sets its acknowledgement of benefits apart in one paragraph ("Yet cities also offer profound psychological benefits"), while Source B builds concessions ("Yes, cities have higher diagnosed anxiety rates", "Yes, urbanisation requires psychological adaptation") into each stage of its argument.`,
  q4Text: `Which source do you find more convincing about the connection between city living and mental health? Explain your answer using evidence from both sources.`,
  q4MarkScheme: [
    'Clear judgement with supporting evidence',
    'Specific textual references from both sources',
    'Explains why evidence is convincing or unconvincing',
    'Considers limitations and strengths of alternative view',
    'Top band: sophisticated evaluation of argument logic and evidence quality',
  ],
  q4Answer45: `I think Source B is more convincing because it answers the argument that cities cause mental illness and explains why that argument is incomplete. It points out that rural areas have mental health problems too, such as isolation and a lack of services. It also explains that cities help some people, like LGBTQ+ people and religious minorities, who may feel excluded in small communities. Source A does accept that cities have benefits, but it spends most of its time on the harms. However, Source A is probably right that cities need more green space and that constant noise is stressful. Source B's point that poverty is a bigger cause makes more sense to me than blaming the design of the city alone.`,
  q4Answer67: `Source B's argument is more convincing overall, though Source A identifies concerns that Source B does not fully answer. Source B concedes Source A's kind of practical proposal ("good ideas broadly") while arguing that the root cause is economic inequality; it accepts the case for green space and traffic management but changes its significance. Its challenge to the evidence - that higher urban anxiety figures may reflect "diagnostic access, not necessarily higher actual prevalence" - exposes a real weakness in Source A, whose claim that anxiety and depression are "significantly more prevalent" in cities is stated without any figures. Source B also introduces people Source A never considers, for whom cities offer "anonymity and freedom unavailable in small communities". However, Source B's claim that urban stress comes from "capitalism's manifestations" sidesteps Source A's specific point about design, and it offers no more evidence than Source A for its own claims, such as "higher suicide rates" in rural areas. Source A's appeal to biology ("Our nervous systems evolved for sparse environments") and to research on vegetation and "cortisol levels" is a credible line of argument, though it names no studies. Ultimately, Source B's recognition that cities can be both a strain and a liberation is more persuasive than Source A's emphasis on harm, though it may underestimate how much the physical environment shapes daily life.`,
  q5Prompt: `Urban populations are growing worldwide, and cities face increasing mental health challenges. At the same time, cities offer opportunities, diversity, and community that rural areas cannot provide.`,
  q5Viewpoint: `Write an article for a public health organisation presenting your viewpoint on how cities can be designed and managed to better support residents' mental health while preserving their social and economic benefits.`,
  q5MarkScheme: [
    'Establishes clear, sustained viewpoint',
    'Develops argument with specific evidence and examples',
    'Uses persuasive techniques effectively',
    'Logical organisation with coherent progression',
    'Sophisticated vocabulary and varied sentence structures',
    'Acknowledges counterarguments or complexities',
    'Top band: compelling argument with nuanced, sophisticated rhetoric',
  ],
  q5Answer45: `Making Cities Better for Mental Health

Cities are growing, and more people live in them than ever before. Cities have benefits, like jobs and culture, but they also cause stress and mental health problems. Cities can be improved to help people's mental health without losing the good things about city life.

One way to improve cities is to add more green spaces. Parks and trees help reduce stress. People feel better when they can see nature. Cities should have parks near where people live so they can easily access them. This doesn't cost too much money and helps everyone.

Another solution is to reduce traffic and make cities quieter. Cars make noise and pollution, which stress people. If cities build better public transportation and bicycle lanes, fewer cars would be on the streets. This would make cities quieter and healthier. It would also help the environment.

Cities also need affordable housing. When people worry about paying rent, they get stressed and anxious. Housing is very expensive in cities, which makes people's mental health worse. Governments should require developers to build affordable housing so more people can afford to live in cities.

Community spaces are also important. Cities should have places where people can meet and talk to each other. This helps people feel less lonely. Community centres, public squares, and libraries are good places for people to connect.

Cities have good things: jobs, culture, and diversity. We can keep these things while also improving mental health. Cities just need better design and planning. If we invest in green space, transportation, housing, and community, cities can be good places for mental health and wellbeing.`,
  q5Answer67: `Designing Psychologically Healthy Cities: Balancing Growth with Wellbeing

The urban mental health crisis is simultaneously real and often misdiagnosed. Cities concentrate psychological stressors - noise, density, sensory overload - while simultaneously providing psychological resources - belonging, cultural engagement, economic mobility - that rural communities cannot offer. Urban mental health improvement therefore requires design interventions that mitigate genuine stressors without sacrificing the diversity and opportunity cities provide.

The research is clear: biophilic access substantially reduces stress markers. Cities must dramatically expand green space - not as luxury amenities in wealthy neighbourhoods but as equitably distributed infrastructure. Singapore and Copenhagen demonstrate that high-density urban development and extensive green networks are compatible. Prioritising tree-lined streets, neighbourhood parks within five minutes' walk, and green roofs on public buildings is both feasible and evidence-based. However, such improvements benefit primarily those who can afford proximity; green gentrification follows. Green space requires accompanying strategies: rent controls, anti-displacement policies, community land trusts.

Traffic and noise reduction similarly demands political will. Converting car infrastructure to pedestrian and cycling networks reduces sensory overload while improving physical health. Cities like Paris and Barcelona have demonstrated that car-free zones increase social interaction and psychological wellbeing. This investment benefits lower-income residents disproportionately, who often lack private cars and suffer concentrated pollution exposure.

Critically, housing affordability directly impacts mental health. Precarious housing, forced moves, homelessness are primary mental health stressors. Some European cities implement strict rent controls and require percentage-of-units affordable housing from developers. This requires rejecting developer profit maximisation - politically difficult but ethically necessary.

Finally, urban design should intentionally create third spaces: public squares, community centres, cultural institutions where diverse residents encounter each other. Loneliness is epidemic in cities; public space design addressing belonging directly supports mental health.

These interventions - green infrastructure, traffic reduction, housing security, public space - are not anti-urban. They strengthen cities' genuine strengths while mitigating their harms. The choice is not between rural wellbeing and urban growth but between negligent urbanism and intentional design that honours both human psychology and human connection.`,
})

// ─── PAPER 4: SEASONAL WORK ─────────────────────────────────────────────────

const paper4: MockExamPaper = makeP2({
  set: 4,
  sourceA: 'Opinion article, specially written for this paper',
  textA: `The modern work culture of perpetual, year-round employment is not inevitable - it is a choice we can unmake. Seasonal work patterns, once the norm across economies, created natural rhythms of intensity and rest, of focused production and necessary recuperation. These rhythms aligned with human biology and genuine sustainability.

Contemporary full-time employment demands constant productivity regardless of natural cycles, seasons, or personal circumstance. This creates burnout, health deterioration, and the paradoxical inefficiency of exhausted workers producing mediocre work. The productivity myth - that more hours equals more output - has been thoroughly debunked by research. Yet organisations continue demanding unsustainable effort.

Consider seasonal work seriously: three months of intensive labour, three months of reduced hours or alternative work, cycling throughout the year. This model exists successfully in agriculture, tourism, construction. It could expand. Workers would experience genuine rest periods, manage health and family responsibilities, pursue education or creative work. Organisations would implement cost-efficiency, concentrating expensive operations during peak seasons while reducing overhead during slower periods.

The opposition is purely ideological. Corporations benefit from workers who feel perpetually obligated, unable to imagine alternatives. Seasonal work threatens this dependence. It enables worker autonomy, demands organisational efficiency, and honours human need for rest and variety.

We've forgotten that relentless work is not natural. Seasonal rhythms are.`,
  sourceB: 'Reply article, specially written for this paper',
  textB: `Seasonal employment models work for particular industries but are largely impractical for modern service, knowledge, and healthcare economies. The argument for seasonal rotation romanticises agricultural work while ignoring its vulnerabilities.

Agricultural workers often experience seasonal unemployment - months without income or benefits. The "rest periods" that advocates of seasonal work celebrate are frequently periods of economic desperation and precarity. Seasonal workers typically lack health insurance, consistent income for housing and food, and professional development. Romanticising this as "rest" ignores the anxiety accompanying irregular income.

Across knowledge work, service work, and healthcare, continuous operation is functional necessity, not ideological choice. Hospitals cannot be staffed seasonally. Tech companies require year-round operations maintaining global systems. Retail requires staff during all periods. The premise that work can be neatly segmented into seasonal cycles misunderstands modern economies' interdependence.

The real insight behind the seasonal model - workers need rest, autonomy, and time for personal development - deserves serious attention. But seasonal rotation is not the mechanism achieving this. Realistic solutions exist: genuinely enforced vacation time, sabbaticals every five to seven years, flexible work arrangements enabling part-time or variable schedules, mental health support, and workplace policies prioritising wellbeing over endless productivity.

These measures can be implemented within existing full-time structures without the economic instability of seasonal employment. Countries with strong labour protections - Germany and the Scandinavian countries - demonstrate that full-time work and worker wellbeing are compatible through regulation and cultural shift, not through seasonal precarity.

The goal is correct: worker rest and autonomy. The mechanism - seasonal employment - is flawed.`,
  q1BothTexts: 'work patterns and worker wellbeing',
  q1MarkScheme: [
    'Identifies key ideas from each source (up to 4 marks per text)',
    'Shows understanding of different perspectives (up to 2 marks)',
    'Accuracy in paraphrasing accepted',
    'Maximum 10 marks',
  ],
  q1Answer45: `Source A says that continuous work throughout the year is bad for workers. The writer suggests that seasonal work - working hard for some months, then having reduced hours or different work - would be better. The writer thinks this would reduce burnout and let people rest, study or look after their families. Source B disagrees with seasonal work. It says that many jobs cannot be seasonal because hospitals and tech companies need to operate all year, and that seasonal workers often go months without income. It thinks the real solution is enforced holidays, sabbaticals and flexible work within ordinary jobs. Both writers want workers to be less stressed and better rested, but they disagree about how to achieve it. Source A wants to change the pattern of the working year; Source B wants to improve conditions within full-time jobs.`,
  q1Answer67: `The writer of Source A argues for reorganising work around seasonal cycles, claiming that constant full-time employment produces burnout and inefficiency and goes against "human biology". The writer presents seasonal rotation as good for workers (rest, education, autonomy) and efficient for organisations, which could concentrate costly operations in peak seasons. The writer of Source B accepts the underlying insight - workers need rest and autonomy - but rejects seasonal employment as the way to achieve it, arguing that it creates insecurity rather than freedom. This writer stresses that healthcare, service and knowledge work need to run continuously, so neat seasonal cycles are impractical, and recasts the "rest periods" as times of "economic desperation and precarity". Source B proposes other means instead: enforced holidays, sabbaticals, flexible schedules and legal protections. Both put worker wellbeing first; they disagree about whether it needs a new structure of work or reform within the existing one.`,
  q2Text: 'present seasonal work as superior to continuous full-time employment',
  q2MarkScheme: [
    'Identifies specific language features used',
    'Explains effects of language choices',
    "Connects to the writer's persuasive purpose",
    'Uses terminology accurately',
    'Top band: sophisticated analysis of rhetorical strategy',
  ],
  q2Answer45: `The writer uses repetition and contrast to support seasonal work. Words such as "rest", "rhythms" and "natural" are repeated to make seasonal work sound healthy. The writer contrasts "natural rhythms" with "perpetual, year-round employment", suggesting that continuous work is unnatural. The phrase "The productivity myth" suggests that businesses believe something false. When the writer says "relentless work is not natural", nature becomes the standard for good work. The writer says corporations "benefit from workers who feel perpetually obligated", suggesting that companies deliberately keep workers dependent, which makes readers feel manipulated by employers. The final sentence, "Seasonal rhythms are.", is short, emphatic and memorable.`,
  q2Answer67: `The writer of Source A presents seasonal work as in tune with human nature. Repeated references to "rhythms", "natural" and "rest" create a lexical field of health and balance, set against the "perpetual" demands of modern employment. The pairing "focused production and necessary recuperation" presents rest not as laziness but as a necessity, which is a crucial reframing. The sentence "The productivity myth - that more hours equals more output - has been thoroughly debunked by research" dismisses the opposing view with an appeal to authority, although no research is named. The accusation that "Corporations benefit from workers who feel perpetually obligated" shifts the argument from economic necessity to deliberate exploitation, turning the reader's scepticism towards employers, and "The opposition is purely ideological" denies the other side any practical case. The closing pair of sentences, "We've forgotten that relentless work is not natural. Seasonal rhythms are.", uses antithesis and a clipped final sentence to present the conclusion as a forgotten truth rediscovered. The writer also cites working examples ("agriculture, tourism, construction") as evidence, without acknowledging that these sectors are often insecure. The cumulative effect presents seasonal work as both morally and practically superior, and any opposition as ideology.`,
  q3BothTexts: 'what changes would best improve worker wellbeing',
  q3MarkScheme: [
    'Identifies different proposed solutions from each text',
    'Makes explicit comparisons between approaches',
    'Analyses language and rhetorical strategies',
    'Considers practical and ideological dimensions',
    'Top band: sophisticated analysis of competing frameworks',
  ],
  q3Answer45: `Both writers want workers to feel better, but they propose different solutions. Source A thinks changing when people work, through seasonal patterns, is the answer. It writes emotionally about natural rhythms and criticises corporations. Source B thinks the answer is enforced holidays, flexible work and better workplace policies. It focuses on practical solutions that could work in modern jobs such as hospitals and tech companies. Source A sounds idealistic; Source B sounds realistic. Source A criticises corporations; Source B suggests reforms. Source B agrees with Source A about the problem but not about the solution, and seems more balanced because it accepts the good idea behind seasonal work while explaining why it would not suit most jobs.`,
  q3Answer67: `The writers propose different kinds of change. Source A calls for a structural change: reorganising the working year itself to follow natural cycles. Its language - "natural", "human biology", "We've forgotten" - presents this as the recovery of a truth that corporations have obscured. Source B accepts the problem but keeps its solutions within existing employment: regulation, policy and cultural change. Its language - "Realistic solutions", "compatible", "strong labour protections" - presents this as pragmatic reform. Stylistically, Source A uses moral rhetoric: work should follow human needs and nature, which makes seasonal work seem an ethical duty. Source B uses practical reasoning: seasonal work creates insecurity, so it defeats its own purpose. Source A assumes that work can be scaled back in slower seasons, whereas Source B insists that modern economies need continuous service ("Hospitals cannot be staffed seasonally"). Source B cites Germany and the Scandinavian countries to show that "full-time work and worker wellbeing are compatible", suggesting that Source A presents a false choice, although Source A might answer that such reforms only adjust the system it wants to change. Source B also answers Source A's central image directly, recasting the "rest periods" as "periods of economic desperation and precarity". Both value rest and autonomy; they disagree about whether these need a new system or a reformed one.`,
  q4Text: `Which source presents a more realistic and achievable approach to improving worker wellbeing? Explain your answer using evidence from both sources.`,
  q4MarkScheme: [
    'Clear judgement with supporting evidence',
    'Specific references from both texts',
    'Explains why evidence strengthens argument',
    'Addresses limitations in alternative view',
    'Top band: sophisticated evaluation of practical and ideological dimensions',
  ],
  q4Answer45: `Source B presents a more realistic approach because it focuses on solutions that can work in modern jobs. It points out that hospitals and tech companies need to run all year, so seasonal work would not work for them. It proposes enforced holidays, sabbaticals and flexible work, which seem more practical. Source A's idea is interesting, but Source B is right that seasonal jobs are insecure, with months without steady income or benefits. However, Source A is right that constant full-time work causes burnout, and Source B does not show that its reforms would be enough. Source B's examples from Germany and Scandinavia show that better worker wellbeing is possible, which supports its argument. Perhaps both approaches could work together: seasonal work in some industries and better holiday policies in others.`,
  q4Answer67: `Source B's approach is more realistic to put into practice, though Source A identifies a problem that Source B's reforms may not fully solve. Source B undermines seasonal work's main appeal by recasting the "rest periods" as "periods of economic desperation and precarity", a direct challenge to Source A's romantic picture. Its reminders that "Hospitals cannot be staffed seasonally" and that "Tech companies require year-round operations" ground the objection in practical necessity rather than ideology, which answers Source A's claim that "The opposition is purely ideological". Its examples of countries where "full-time work and worker wellbeing are compatible through regulation and cultural shift" suggest that Source A's goal can be reached without the insecurity. However, Source B's confidence deserves some scepticism: its reforms depend on regulation being passed and "genuinely enforced", and Source A might reply that employers who benefit from workers who feel "perpetually obligated" will resist exactly that. Source A, for its part, would solve burnout at the price of economic instability, a trade-off it never addresses, and it names none of the "research" it says has debunked the productivity myth. The most realistic approach is probably a combination: enforced holidays, sabbaticals and flexible work within existing jobs, with seasonal models where they genuinely suit an industry. Source B comes closest, granting that seasonal models "work for particular industries", but it mentions this only to limit Source A's case, not as part of its own proposal.`,
  q5Prompt: `Work-life balance has become increasingly difficult for employees in many sectors. Long working hours, constant availability expectations, and pressure to be continually productive take a toll on workers' physical and mental health.`,
  q5Viewpoint: `Write an article for a business magazine presenting your viewpoint on how organisations should redesign work to better support employee wellbeing and maintain business productivity. Consider different industries and roles.`,
  q5MarkScheme: [
    'Clear, sustained viewpoint',
    'Develops with specific evidence and examples',
    'Uses persuasive techniques effectively',
    'Logical organisation',
    'Sophisticated vocabulary and varied sentences',
    'Addresses complexity or counterarguments',
    'Top band: compelling, nuanced argument with sophistication',
  ],
  q5Answer45: `Work Design for Employee Wellbeing

Employees work too many hours and feel stressed. Companies need to change how they organise work so people can be healthy and happy. This is good for employees and also good for business because healthier workers are more productive.

One solution is to enforce vacation time. Employees should be required to take time off, even if they don't want to. Rest is necessary for people to work effectively. Regular breaks from work help prevent burnout and mental health problems.

Another solution is to allow flexible work. Some employees could work from home part of the week, or work different hours that fit their lives better. This gives people more control over their schedule and reduces stress from commuting and rigid office hours.

Organisations should also reduce meetings and emails. Too much communication makes work stressful and prevents people from focusing on important tasks. If companies value focus time and reduce unnecessary communication, employees would be less stressed and more productive.

Mental health support is also important. Organisations should provide counselling, stress management training, and mental health days. When employees feel supported, they work better.

Different industries need different approaches. Hospitals cannot reduce hours because people need care, but they could improve scheduling and provide more mental health support. Offices could allow more flexible work. Retail could hire more people so workers don't need to work such long hours.

In conclusion, companies should redesign work. More vacation, flexible schedules, less meetings, and mental health support would help employees be healthier and more productive. This benefits both employees and business.`,
  q5Answer67: `Redesigning Work: Aligning Productivity with Human Wellbeing

The productivity paradox persists: organisations demand endless output while research consistently demonstrates that exhausted workers produce mediocre work, generating turnover, health costs, and reduced innovation. Genuine organisational success requires redesigning fundamental work structures to align productivity incentives with human psychological and physical needs.

The evidence base is clear: cognitive work deteriorates after sustained intensive effort. The "always-on" culture - constant email, Slack messages, meeting expectations - fragments attention and prevents deep focus that complex work requires. Organisations should implement protected focus time: designated hours without meetings, with email windows rather than constant monitoring. For knowledge work, this structural change alone improves both quality and worker satisfaction.

Vacation enforcement addresses the counterintuitive reality that voluntary vacation policies result in underutilisation; workers feel guilty taking time off. Mandatory vacation with replacement workers ensures genuine rest and prevents burnout-driven turnover. European models demonstrate that enforced vacation reduces overall healthcare costs while improving productivity - ROI is measurable.

Flexible work arrangements deserve differentiation by role and industry. Customer-facing roles and healthcare cannot accommodate full remote work; they require presence. However, hybrid models - three-day office weeks with home-based work for focused tasks - improve outcomes. Tech companies demonstrating this report better retention and quality work. Retail faces structural constraints: hourly workers often require multiple jobs for survival. The solution isn't flexible remote work but sector-wide labour standards: living wages, full-time positions, predictable scheduling.

Remote-first is not the answer for all sectors. The answer is designing work to support human cognition and wellbeing within operational realities. Some industries require presence; they should reduce hours and improve conditions instead. Others can implement flexibility; they should.

Mental health infrastructure - counselling, peer support, clear escalation processes - addresses psychological harm but doesn't substitute for structural change. Creating healthier work requires both.

Fundamentally, organisations must abandon the myth that more hours produce more value. Cognitive economics is clear: focused, rested workers produce superior work. Investing in wellbeing is not benevolence; it is competitive advantage and basic economic rationality.`,
})

// ─── PAPER 5: PERSONAL DATA ─────────────────────────────────────────────────

const paper5: MockExamPaper = makeP2({
  set: 5,
  sourceA: 'Opinion article, specially written for this paper',
  textA: `Personal data has become the economy's most valuable currency, yet individuals have surrendered ownership without negotiation. Tech platforms harvest behavioural data - what you search, purchase, click, linger on - then monetise it through advertising and sale. Users become the product, not the customer.

This asymmetry is fundamentally exploitative. Platforms earn billions from this data every year, while users receive "free" services that cost companies relatively little to operate. We've normalised this extraction as inevitable, yet it's purely structural: legal and political choices allow it.

Real solutions exist. The European Union's GDPR gave individuals legal rights over their personal data, including the right to see it and to have it erased. Predictably, tech companies mobilised massive lobbying against equivalent legislation elsewhere. Some countries could implement data cooperatives: users collectively own and negotiate data rights, sharing profits. Others could mandate that companies pay for personal data.

Without systemic change, surveillance capitalism will deepen. Governments must choose: do citizens own themselves, or do corporations?`,
  sourceB: 'Reply article, specially written for this paper',
  textB: `Data regulation deserves serious consideration, but the narrative of exploited users oversimplifies digital economics. Users do receive genuine value: free email, social networks, search, navigation, communication. These services genuinely cost companies substantial resources. The advertising-supported model sustains free access enabling billions of people to connect globally.

"Owning data" is more conceptually complex than the rhetoric suggests. Data derives value through aggregation, analysis, and insight - not individual data points. Your individual search history is worthless; collective patterns enabling Netflix recommendations create value. Compensating individuals for discrete data points wouldn't generate meaningful income while destroying the analytics enabling valuable services.

GDPR provides important protections - informed consent, deletion rights, transparency. But it also created burdens: constant consent pop-ups, complex opt-out processes that reduce usability. Privacy protection and usability often conflict.

Legitimate concerns exist: data breaches exposing personal information, excessive tracking, algorithmic manipulation. Regulation should address these harms - transparency requirements, security standards, limitations on manipulative uses. But conflating these specific harms with "exploitation" because companies profit from data analysis oversimplifies economics and may destroy services that benefit users, especially in developing countries where digital access is crucial.

Better solutions than data ownership: transparency about data use, user control over specific tracking practices, accountability for algorithmic systems, and sector-specific regulation addressing genuine harms.`,
  q1BothTexts: 'personal data, its value, and who should benefit from it',
  q1MarkScheme: [
    'Identifies key points from each source (up to 4 marks per text)',
    'Shows understanding of different perspectives',
    'Synthesis or comparison (up to 2 marks)',
    'Maximum 10 marks',
  ],
  q1Answer45: `Source A argues that tech companies take personal data from users and make money from it without paying them. The writer thinks users should own their data or be paid for it, and that governments should change the law. Source B disagrees, saying users get valuable free services such as email, search and navigation in return. It explains that data is valuable only when it is combined with lots of other people's data, so paying individuals would not give them much. Both writers discuss data and profit, but Source A thinks the system is unfair exploitation, while Source B thinks users get a reasonable deal and that only specific harms need regulating.`,
  q1Answer67: `The writer of Source A presents the data economy as exploitation: users have "surrendered ownership without negotiation" of their behavioural data, which platforms turn into billions, while users receive "free" services in return. The writer treats this as a structural injustice that only legal and political choices can end, pointing to data cooperatives or payment for personal data. The writer of Source B contests the idea of exploitation, arguing that users receive genuine value - free services that let billions connect - and that data's value comes from aggregate analysis, not individual data points. This writer accepts that GDPR brought important protections while noting the burdens it created. Both recognise how valuable data is; they disagree about whether the current exchange is fair and whether ownership is a workable solution. Critically, Source B doubts that paying individuals would generate meaningful income, suggesting that Source A's solution misunderstands how data creates value.`,
  q2Text: 'present data ownership as a fundamental right that has been wrongfully surrendered',
  q2MarkScheme: [
    'Identifies language features and techniques',
    'Explains effects on reader',
    'Connects to persuasive purpose',
    'Uses terminology accurately',
    'Top band: sophisticated analysis of rhetorical strategy',
  ],
  q2Answer45: `The writer uses strong moral language to make data ownership seem important. Calling the system "fundamentally exploitative" is a serious accusation. Saying individuals "surrendered ownership without negotiation" suggests they had no real choice. Calling data "the economy's most valuable currency" makes it sound as important as money. Saying we have "normalised this extraction as inevitable" implies that we should stop accepting it. The rhetorical question at the end, "do citizens own themselves, or do corporations?", makes readers think about freedom and control.`,
  q2Answer67: `The writer of Source A presents data ownership as a moral right through a series of deliberate choices. The claim that individuals "have surrendered ownership without negotiation" frames data collection as a loss imposed on people rather than a bargain they made; the verb "surrendered" suggests defeat rather than agreement. Calling personal data "the economy's most valuable currency" equates data with money, so owning it becomes a matter of basic economic justice. The description of the exchange as an "asymmetry" that is "fundamentally exploitative" lifts the issue from a commercial dispute to an injustice. Crucially, the writer states, "We've normalised this extraction as inevitable, yet it's purely structural: legal and political choices allow it." This moves exploitation from something inevitable to something chosen, and so something that can be undone. The list "what you search, purchase, click, linger on" makes the surveillance personal and intimate, and "Users become the product, not the customer" uses antithesis to reverse the reader's idea of who is being served. The final rhetorical question, "do citizens own themselves, or do corporations?", raises the stakes to autonomy and selfhood, so that accepting the current system feels like surrendering part of oneself.`,
  q3BothTexts: 'the ethics and economics of personal data use by technology companies',
  q3MarkScheme: [
    'Identifies contrasting viewpoints',
    'Makes explicit comparisons',
    'Analyses language and strategies',
    'Considers ethical and economic dimensions',
    'Top band: sophisticated analysis of competing frameworks',
  ],
  q3Answer45: `The writers disagree about whether the use of personal data is fair. Source A focuses on ethics: it is wrong to profit from people's data without paying them. Source B focuses on economics: the value comes from analysing lots of data together, and users get free services. Source A uses moral language about exploitation; Source B uses practical language about value and benefits. Source A wants to change the system with new laws; Source B wants targeted regulation but to keep the basic system. Source A seems angrier about unfairness; Source B seems more interested in balancing privacy against useful services.`,
  q3Answer67: `The writers argue from different values. Source A puts individual autonomy and ownership first: data is personal property taken without a fair bargain, and justice requires either paying people or letting them bargain collectively. Its language is moral and rights-based: "fundamentally exploitative", "surrendered ownership", "citizens own themselves". Source B weighs consequences: value created through aggregation, services that benefit users, and practical improvements to regulation. It frames individual data as economically "worthless" and collective analysis as the source of value that returns to users as better services. Stylistically, Source A deals in moral absolutes, ending on a stark choice: "Governments must choose: do citizens own themselves, or do corporations?" Source B deals in trade-offs, conceding that "Legitimate concerns exist" before warning that treating them as exploitation "may destroy services that benefit users". Source B concedes some of Source A's concerns while repositioning them: it does not deny that data is collected, but argues that collection is not exploitative given what users receive. Its reference to "developing countries where digital access is crucial" implicitly suggests that Source A's proposals could harm poorer populations. Source A assumes that ownership would allow profits to be shared; Source B argues that ownership would not work economically. Both oppose harmful practices, but they differ on whether the problem is the use of data itself or particular harmful uses.`,
  q4Text: `Which source presents a more convincing argument about personal data and digital platforms? Explain your answer using evidence from both sources.`,
  q4MarkScheme: [
    'Clear judgement with evidence',
    'Specific textual references',
    'Explains why evidence is convincing',
    'Considers alternative perspective',
    'Top band: sophisticated evaluation',
  ],
  q4Answer45: `Source B's argument is more convincing because it accepts some of the concerns in Source A but explains why Source A's solution will not work. It is right that one person's data is not valuable alone; it is the combination that matters. If companies had to pay people for their individual data, people would not get much money. Source A is right that the system seems unfair, but Source B's solutions, such as transparency and targeted regulation, seem more practical. However, Source A makes a good point that companies make a great deal of money while users are not paid at all, which does seem unfair.`,
  q4Answer67: `Source B's argument is more economically informed and practical, though Source A identifies an unfairness that Source B does not fully resolve. Source B's distinction between individual and aggregate data exposes a flaw in Source A's ownership premise: paying individuals would not generate meaningful income and might destroy the analytics behind useful services. Its example - "Your individual search history is worthless; collective patterns enabling Netflix recommendations create value" - is clear and directly undermines Source A's core proposal. Its acknowledgement that "GDPR provides important protections" before it notes the burdens shows balance; it does not dismiss privacy concerns but weighs their costs. However, Source A's point about an unequal exchange - platforms earn billions while users receive "free" services - is not properly answered. Source B says users receive "genuine value", but this sidesteps the central question of whether companies should keep all the profit from data analysis without sharing any of it. Source A's idea of data cooperatives, mentioned but not explored, suggests a middle way between individual ownership and the current system that Source B never considers. Overall, Source B's attention to how data actually creates value makes it more convincing than Source A's ownership vision, though its dismissal of structural unfairness deserves more scepticism.`,
  q5Prompt: `Technology companies collect vast amounts of personal data from billions of users. This data is extremely valuable for business purposes, yet users typically receive no direct benefit.`,
  q5Viewpoint: `Write an article for a technology ethics journal presenting your viewpoint on how the data economy should be regulated to balance business interests with fair treatment of users. Consider practical implementation and different stakeholder perspectives.`,
  q5MarkScheme: [
    'Clear, sustained viewpoint',
    'Develops with evidence and examples',
    'Persuasive techniques',
    'Logical organisation',
    'Sophisticated language',
    'Addresses counterarguments',
    'Top band: compelling, nuanced argument',
  ],
  q5Answer45: `Regulating Data: Fair Treatment for Users

Technology companies have too much power over personal data. They collect information about what people do online and make money from selling it or using it for advertising. This isn't fair because users don't know what's happening or get any money. The data economy needs regulation.

One solution is transparency. Companies should tell users exactly what data they collect and how they use it. Right now the privacy policies are long and complicated so nobody reads them. If companies had to explain clearly what data they use, people could make better choices.

Another solution is user control. People should be able to easily delete their data or stop companies from collecting certain types of information. Right now, opting out is difficult and complicated.

Companies should also be honest about advertising. If companies use data to target advertising, they should tell users. People deserve to know when they're being targeted.

Some people say free services are worth the data cost. This is true, but people should have a choice. If people knew what their data was worth, they could decide whether the service is a fair deal.

Technology companies are very powerful and users are vulnerable. Regulations should protect users while still allowing companies to run their businesses. Transparency, user control, and honest advertising are reasonable requirements that balance both sides.

In conclusion, the data economy needs regulation to be fair. Companies should be transparent about data use, give users control, and be honest about how data is used for advertising.`,
  q5Answer67: `Restructuring the Data Economy: From Extraction to Equitable Partnership

The current data economy operates through asymmetric information and power: tech platforms extract behavioural data worth billions every year while offering services that users cannot meaningfully refuse without social and economic exclusion. The ethical challenge is restructuring this economy to enable genuine user agency, equitable benefit-sharing, and transparency - while preserving innovation incentives.

The distinction between individual ownership and collective interests deserves attention. Individual data compensation is economically impractical; aggregate data creates value through analysis that individual-level payments cannot capture. However, this doesn't justify current extraction. Better solutions exist: data cooperatives where users collectively own and negotiate data rights, sharing analytics benefits; algorithmic transparency requirements ensuring platforms disclose how personal data drives content curation and targeting; platform-specific regulation addressing documented harms; and mandatory data security standards.

Transparency is foundational but insufficient. Current consent frameworks create "consent theatre": dense, incomprehensible policies that obscure rather than enable choice. Meaningful transparency requires restructuring: simple, machine-readable privacy notices; visible data flow visualisation; and enforceable limits on secondary use beyond consented purposes.

Crucially, the "free service" framing deserves scepticism. Users have largely no alternative - email, social networks, search are effectively mandatory for participation. True choice requires alternatives. Open-source platforms and interoperable systems enabling user data portability would create competitive pressure improving treatment across ecosystems.

Developing countries present particular considerations. Data regulation could disrupt free service access crucial for populations unable to pay. Solutions should differentiate: premium users with maximal control and benefit-sharing; opt-in data sharing for users prioritising free access. This acknowledges economic realities while not exploiting inequality.

Practically, regulation should mandate: transparent data handling; user rights to access, delete, and port data; security standards with accountability; and prohibitions on manipulative uses (dark patterns, exploitative microtargeting). These protections address specific documented harms while preserving services that benefit billions globally.

The goal is neither corporate capture nor impossible individual ownership, but genuine partnerships: users retain meaningful control and benefit from analytics value they enable.`,
})

// ─── PAPER 6: UNIVERSITY EDUCATION ──────────────────────────────────────────

const paper6: MockExamPaper = makeP2({
  set: 6,
  sourceA: 'Opinion article, specially written for this paper',
  textA: `University has become an economically irrational choice. Graduates emerge with £40,000-£80,000 debt, often working jobs not requiring degrees, while alternative paths - apprenticeships, trade skills, entrepreneurship - provide immediate income and faster wealth-building. The degree, once an elite credential, is now a mass commodity. Employers no longer differentiate based on degree presence but on specific skills and experience.

Universities justify their role as knowledge transmission institutions, yet this function is increasingly obsolete. Online education - MIT OpenCourseWare, Coursera, YouTube - distributes knowledge freely or cheaply. The institutional advantage universities once held is gone.

The remaining argument is university as social experience and networking opportunity. But this comes at immense cost: tuition fees, living expenses, and the opportunity cost of years out of the labour market. For most graduates, this investment won't pay off.

Universities serve institutional interests: tuition income, research funding, faculty employment. They serve elite students well - those with family support enabling leisure to study. They exploit working-class students, extracting tuition while providing limited genuine career advantage.

The honest choice: explore alternatives. Consider apprenticeships, skilled trades, direct entry to work with on-the-job training. For a minority pursuing research or specialised knowledge, university remains valuable. For most, university is a debt-generating trap.`,
  sourceB: 'Reply article, specially written for this paper',
  textB: `The anti-university argument relies on flawed economic calculation. Yes, university carries costs - tuition, opportunity costs, time investment. But the data demonstrates clear lifetime earnings advantage: graduates earn 30-40% more over careers than non-graduates, with the differential increasing over decades. Return on investment is measurable and significant.

The "knowledge is free online" argument ignores learning science: knowledge acquisition is harder and slower without instruction, structure, and feedback. Online resources democratise access, but structured education with expert instruction still outpaces self-directed learning for most learners. Universities provide that structure.

The case against university romanticises apprenticeships without acknowledging their limitations. Apprenticeships require employer willingness to invest in training - increasingly scarce. They often offer lower wages during training years, and career ceilings restricting mobility. University, despite costs, provides greater flexibility and advancement opportunity across career changes.

The social and intellectual benefits that critics dismiss as luxury deserve weight. University develops critical thinking, disciplinary depth, and intellectual community. These enable adaptability as economies transform. Workers with only specific job training struggle when that training becomes obsolete. University graduates demonstrate greater adaptability and resilience to economic change.

Critically, university's weakness - relatively high costs - is a policy choice. Countries with free or low-cost university (Germany and the Nordic countries) combine degree benefits with affordability. Rather than abandoning university, we should fix pricing.`,
  q1BothTexts: 'the value and purpose of university education',
  q1MarkScheme: [
    'Identifies key ideas from both sources (up to 4 marks per text)',
    'Shows understanding of different viewpoints',
    'Synthesis or comparison (up to 2 marks)',
    'Maximum 10 marks',
  ],
  q1Answer45: `Source A thinks university is too expensive and not worth the cost for most people. The writer says students can learn online for free or cheaply, or take apprenticeships instead and start earning straight away. Source B agrees that university costs money but says graduates earn more over their careers, so it is worth it. It argues that university develops critical thinking and helps people adapt when jobs change. Both discuss the value of university, but Source A thinks it is not worth the cost, while Source B thinks the benefits outweigh the costs and that the price should be lowered.`,
  q1Answer67: `The writer of Source A argues that university is economically irrational: graduates leave with heavy debt, often in jobs that do not need degrees, while apprenticeships, trades and entrepreneurship give immediate income and "faster wealth-building". Degrees have become a "mass commodity", free or cheap online courses have made universities' role in passing on knowledge "increasingly obsolete", and universities serve their own interests rather than students'. The writer of Source B contests the calculation, citing a lifetime earnings advantage of 30-40% that grows over decades. This writer argues that structured teaching with expert instruction still beats self-directed learning for most people, and that apprenticeships depend on employers willing to train and can limit later careers. Source B also values critical thinking and adaptability, and treats high cost as a policy choice that other countries have avoided. Both accept that university has costs and benefits; they disagree about whether it pays off and about what kind of learning prepares people for a changing economy.`,
  q2Text: 'argue that university has become economically irrational and exploitative',
  q2MarkScheme: [
    'Identifies specific language features',
    'Explains effects on reader',
    'Connects to persuasive purpose',
    'Uses terminology accurately',
    'Top band: sophisticated analysis of rhetorical technique',
  ],
  q2Answer45: `The writer uses strong language to criticise universities. The opening calls university an "economically irrational choice", which sets a negative tone straight away. The writer says universities "exploit working-class students", which is a serious accusation. The writer contrasts how universities "serve elite students well" with how they treat working-class students, showing an unfair system. The final sentence, "For most, university is a debt-generating trap.", is emphatic and memorable, and the word "trap" suggests that students are caught and cannot escape. Setting "For a minority" against "For most" in the final paragraph makes university sound worthwhile for only a few people.`,
  q2Answer67: `The writer of Source A presents university as a predatory institution through morally charged language. The opening sentence, "University has become an economically irrational choice.", states the claim as fact rather than opinion, setting an authoritative tone. The metaphor in "debt-generating trap" associates university with predation and with being unable to escape. Describing universities' role in passing on knowledge as "increasingly obsolete" suggests that they have become redundant. The writer claims that universities serve "institutional interests: tuition income, research funding, faculty employment", a list that presents them as self-interested organisations rather than servants of students. The blunt statement that they "exploit working-class students, extracting tuition while providing limited genuine career advantage" makes exploitation a defining feature, appealing to the reader's sense of fairness. Contrasting this with how they "serve elite students well - those with family support enabling leisure to study" builds a picture of a system divided by class. The final paragraph's parallel structure, "For a minority ... For most ...", concedes a small exception only to make the conclusion that "university is a debt-generating trap" seem to apply to nearly everyone. The cumulative effect is to present the writer as an advocate for students let down by an unfair system.`,
  q3BothTexts: 'the relationship between cost and value in university education',
  q3MarkScheme: [
    'Identifies different perspectives on cost-value trade-off',
    'Makes explicit comparisons',
    'Analyses rhetorical strategies',
    'Considers underlying assumptions',
    'Top band: sophisticated analysis of competing frameworks',
  ],
  q3Answer45: `The writers disagree about whether the costs of university are worth the benefits. Source A focuses on costs: debt, lost income while studying and tuition fees. It argues that these costs make university a bad financial choice for most people. Source B focuses on benefits: higher lifetime earnings, critical thinking and adaptability when careers change. It argues that the earnings difference makes the investment worthwhile. Source A writes to convince people university is a bad deal; Source B writes to convince them it is a good one. Source A seems to want to protect working-class students from expensive mistakes, while Source B wants to show that university pays off and that its price can be fixed. They read the same situation very differently.`,
  q3Answer67: `The writers build opposite accounts of costs and benefits. Source A stresses visible, immediate costs - "£40,000-£80,000 debt", the opportunity cost of years out of work - and sets them against alternatives that "provide immediate income". Its focus is the present: students pay now for an uncertain return. Source B stresses the long term: graduates "earn 30-40% more over careers than non-graduates, with the differential increasing over decades", so the costs are repaid over a working life. Stylistically, Source A uses a concrete debt figure that creates alarm, while Source B uses a percentage that emphasises proportional gain; neither names the source of its figures. Source A treats university mainly as a financial investment and dismisses its social side as coming "at immense cost", whereas Source B insists on benefits beyond money: "critical thinking, disciplinary depth, and intellectual community". Where Source A presents apprenticeships as a faster route to income, Source B points to their "career ceilings restricting mobility". The most significant move comes at the end of Source B: it concedes the central complaint, that costs are high, but reframes it as "a policy choice", pointing to Germany and the Nordic countries, where university is free or cheap. This turns Source A's evidence against university into an argument for reforming it: Source B does not deny the cost problem but presents it as solvable rather than fundamental.`,
  q4Text: `Which source presents a more compelling argument about university education's value? Explain your answer using evidence from both sources.`,
  q4MarkScheme: [
    'Clear judgement with evidence',
    'Specific textual references',
    'Explains why evidence is compelling',
    'Considers the other perspective',
    'Top band: sophisticated evaluation',
  ],
  q4Answer45: `Source B's argument is more compelling because it gives specific earnings data showing that graduates earn more. Source A does not give any figures for the income from alternative paths, so its claims seem less supported. Source B also makes good points about critical thinking and adaptability. However, Source A is right that university costs a lot and that many students struggle with debt. Source B does admit that costs are high, but it only says that pricing should be fixed without explaining how. Both make good points, but Source B, with its concrete data, seems stronger.`,
  q4Answer67: `Source B's argument is more compelling in its use of evidence, though Source A identifies problems that Source B does not fully address. Source B's claim that graduates "earn 30-40% more over careers than non-graduates, with the differential increasing over decades" is quantifiable and directly counters Source A's case, although Source B never says where "the data" comes from. Its distinction between immediate costs and lifetime benefits is sound economic reasoning: it does not deny the costs but sets them in a longer timeframe. Its point that "knowledge acquisition is harder and slower without instruction, structure, and feedback" appeals to learning science and answers Source A's claim that online courses have made universities obsolete. However, Source A's charge that universities serve "institutional interests" rather than students deserves more attention than Source B gives it. The assertion that "University develops critical thinking" is offered without evidence, and a sceptical reader might ask whether every course delivers it. The proposal that "we should fix pricing" is reasonable but vague, since it offers no way of overcoming the interests that keep costs high. Source A also rightly recognises that university's value depends on the student: "For a minority pursuing research or specialised knowledge, university remains valuable." Source B's point about the limits of apprenticeships ("employer willingness to invest in training - increasingly scarce") is fair, but it does not consider how apprenticeships might be expanded. Overall, Source B's grounding in earnings data and learning science makes it more convincing than Source A's moralised language, though its confidence that universities deliver what they promise deserves some scepticism.`,
  q5Prompt: `The cost of university education has risen dramatically, and many graduates face substantial debt. At the same time, university remains a popular path for young people seeking to develop skills and improve their career prospects.`,
  q5Viewpoint: `Write an article for a careers guidance website presenting your viewpoint on how young people should evaluate whether university is right for them. Consider different circumstances, career aspirations, and alternative paths.`,
  q5MarkScheme: [
    'Clear, sustained viewpoint',
    'Develops with specific evidence and examples',
    'Uses persuasive techniques effectively',
    'Logical organisation and progression',
    'Sophisticated vocabulary and varied sentence structures',
    'Addresses counterarguments or complexity',
    'Top band: compelling, nuanced argument with rhetorical sophistication',
  ],
  q5Answer45: `Is University Right for You?

University is expensive, and many students worry about debt. But for some young people, university is a good choice. The question is: is it right for you?

University is worth considering if you know what you want to study. If you're interested in a career that needs a degree, like medicine or law, you will need one. If you're interested in learning about a subject deeply, university provides that opportunity. University also helps with networking - you meet people who might help your career.

University might not be worth it if you don't know what you want to study. Some people go to university without a clear goal and don't finish, or finish with debt but no job. This is wasteful.

Apprenticeships are a good alternative. You earn money while learning a skill. After your apprenticeship, you have experience and no debt. For some jobs, apprenticeships are better than university.

You should consider:
- What career do you want?
- Does that career need a degree?
- Can you afford university or get financial support?
- Would you prefer learning on the job?

If you want to be a doctor, lawyer, or engineer, you will need a degree, although some employers now offer degree apprenticeships, where you study for a degree while you work and are paid. If you want to learn a trade, apprenticeships might be better. If you're not sure what you want, you could do an apprenticeship first, then decide about university later.

In conclusion, university is good for some people but not for everyone. You should think carefully about your goals, costs, and alternatives before deciding.`,
  q5Answer67: `Evaluating University: A Framework for Individual Circumstances

University remains valuable - but not universally. The decision requires rigorous self-assessment beyond romantic narratives of education and beyond cynical dismissals of institutional value. Neither "everyone should attend" nor "university is a trap" captures the complex reality: university's value is highly dependent on individual circumstances, explicit career pathways, and available alternatives.

First, clarify career requirements. Some professions mandate degrees: medicine, law, engineering, psychology require specific credentials. For these paths, a degree is essential, not optional, although degree apprenticeships now offer a route to some of them that pays a wage rather than charging fees. However, the majority of degrees don't directly enable careers requiring them. The genuine question: does the specific career require the specific degree?

Second, evaluate individual learning style and motivation. University functions well for self-directed learners motivated by intellectual depth and discipline-specific knowledge. It functions poorly for people requiring external structure but lacking intrinsic motivation. Apprenticeships, offering structure and immediate relevance, suit different learners. Assess honestly where you belong.

Third, calculate genuine cost - and honestly assess your financial situation. High-income families for whom tuition represents small expense relative to lifetime earnings benefit disproportionately. Working-class students carrying debt burden through all career stages face genuine hardship that critics of university rightly identify. Some debts are worth carrying; others represent exploitation. Be specific about what you can afford.

Fourth, consider practical alternatives. Apprenticeships, while limited in availability, provide income, experience, and credential without debt. Direct entry with on-the-job training suits some fields. Gap years enabling clear career direction before university expense represent valid timing. The decision isn't binary: consider sequencing.

Finally, recognise intellectual development's genuine value beyond immediate economics. University cultivates critical thinking, exposure to disciplinary expertise, and intellectual community. These matter - but not for everyone, and not at any cost.

A realistic framework: if your career requires a degree, a degree is unavoidable, though not always a full-time one. If it doesn't, evaluate honestly: cost-benefit analysis plus learning-style assessment plus available alternatives. Avoid both rose-tinted narratives of university as an essential rite of passage and cynical rejection of its genuine intellectual value. Instead, make the decision that serves your specific circumstances and aspirations.`,
})

export const aqaLangP2Mocks: MockExamPaper[] = [paper1, paper2, paper3, paper4, paper5, paper6]
