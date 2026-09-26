// @ts-nocheck
// ─── AQA GCSE English Language Paper 2 Mock Exam Paper - Set 2 ───────────────
// Writers' Viewpoints and Perspectives - one complete paper with source texts

/**
 * WHAT WAS WRONG (27 September 2026). Both sources were presented as real
 * journalism with nothing to show that they were. Source A was labelled
 * "Article from The Guardian, 2023", under the byline "Dr Sarah Mitchell";
 * Source B "Opinion piece from Education Weekly, 2023", by "James
 * Richardson". Neither label gave more than a year, and Source A, sold as
 * the Guardian's, spelt "prioritizes", which the Guardian's house style does
 * not: they read as written for this file. Had they been real, they would
 * have been in copyright and far too long to print here. The model answers
 * then misquoted even the text as printed: the Question 2
 * answers quoted "creatively over compliance, collaboration over
 * competition" (the text said "curiosity over compliance"), quoted a verb,
 * "wastes", that it did not contain, and called its first sentence, a
 * statement, an "interrogative opening". The header promised six papers;
 * there was one.
 *
 * WHAT IT IS NOW. Two genuine public-domain sources on the same debate,
 * whether the old literary curriculum should give way to modern subjects and
 * science, cut by script from the Project Gutenberg texts and never retyped:
 *   - Source A: T. H. Huxley, "A Liberal Education: and Where to Find It",
 *     an address of 4 January 1868, as printed in Lay Sermons, Addresses and
 *     Reviews (Macmillan, 1870), Gutenberg #16729. Four consecutive
 *     paragraphs, from "It may be said" to "dexterity in boxing".
 *   - Source B: Matthew Arnold, "Literature and Science", which his preface
 *     says was first given as the Rede Lecture at Cambridge and recast for
 *     America, as printed in Discourses in America (Macmillan, 1885),
 *     Gutenberg #44919. The closing paragraph.
 * Arnold's lecture answers a later address of Huxley's, the one Arnold says
 * was given at the opening of Sir Josiah Mason's college at Birmingham, not
 * this one, so nothing here says the two passages reply to each other. The
 * question wording, the mark schemes and all eight reading answers were
 * rewritten for these sources, and every quotation in them was checked
 * against its extract by script. The writing task, Question 5, is unchanged
 * apart from the spelling and punctuation of one of its answers.
 *
 * REVIEWED THE SAME DAY. Every quotation was in its extract, but a second
 * reading of what the answers said about the words found four to correct.
 * The Question 1 Grade 4-5 answer said that the new subjects would be,
 * perhaps, "far too many"; Arnold says they will be, and his "perhaps"
 * qualifies the period of confusion that follows. The Question 2 Grade 4-5
 * answer said almost no boy "understands arithmetic", where Huxley doubts
 * that one in five hundred has heard a rule of it explained. Both Question
 * 3 answers fitted a quotation into a sentence it did not fit ("all must
 * 'acquaint ourselves'"). The Question 5 Grade 6-7 answer had
 * five dashes collapsed into hyphens ("literacy-precisely",
 * "reform-implementing"), which read as compound words; they are spaced
 * hyphens now. And the reading section now glosses the older words
 * ("animadversions", "collects", "humane letters"), as a real paper does and
 * as this repository's WJEC papers already do.
 *
 * A real AQA Paper 2 pairs a nineteenth-century source with a twentieth- or
 * twenty-first-century one. Both sources here are nineteenth-century,
 * because a genuine modern article would be in copyright and could be quoted
 * only in fragments.
 *
 * This paper is not in allMockExamPapers (src/data/mock-exams.ts) and nothing
 * imports it, so the site does not serve it. It is still in a public
 * repository, which is reason enough for it to be what it says it is.
 */

import type { MockExamPaper } from './mock-exams'

// ─── Helper: creates a standard Paper 2 paper from config ────────────────────

interface P2Config {
  set: number
  sourceA: string
  textA: string
  authorA: string
  dateA: string
  sourceB: string
  textB: string
  authorB: string
  dateB: string
  /** Printed under the reading section's instructions, as a real paper glosses a source's older words. */
  glossary?: string
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
  // Questions that print both sources name both, rather than "Both texts",
  // so a student can see whose words each source is.
  const bothSources = `Source A: ${c.sourceA} | Source B: ${c.sourceB}`
  return {
    id: `aqa-lang-p2-set2-${nn}`,
    board: 'AQA',
    paperNumber: 2,
    title: 'AQA Paper 2 (Set 2)',
    subtitle: `Writers' Viewpoints and Perspectives - Set ${c.set}`,
    code: '8700/2',
    totalTimeMinutes: 105,
    totalMarks: 80,
    sections: [
      {
        id: `aqa-lang-p2-set2-${nn}-reading`,
        title: 'Section A: Reading',
        description:
          'You are going to read two texts. You will then answer the questions about both texts.' +
          (c.glossary ? `\n\n${c.glossary}` : ''),
        totalMarks: 40,
        suggestedTimeMinutes: 60,
        questions: [
          {
            id: `aqa-lang-p2-set2-${nn}-q1`,
            questionNumber: 1,
            questionText: `Use details from both sources to write a summary of what each writer says about ${c.q1BothTexts}`,
            marks: 10,
            suggestedTimeMinutes: 12,
            questionType: 'summary',
            extract: `Source A (${c.sourceA}):\n${c.textA}\n\nSource B (${c.sourceB}):\n${c.textB}`,
            extractSource: bothSources,
            modelAnswers: {
              'Grade 4-5': c.q1Answer45,
              'Grade 6-7': c.q1Answer67,
            },
            markScheme: c.q1MarkScheme,
          },
          {
            id: `aqa-lang-p2-set2-${nn}-q2`,
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
            id: `aqa-lang-p2-set2-${nn}-q3`,
            questionNumber: 3,
            questionText: `Compare how the writers present their viewpoints about ${c.q3BothTexts}\n\nYou could compare:\n- the ideas presented in the two texts\n- the language used to present these ideas\n- the writers' methods to influence the reader.`,
            marks: 12,
            suggestedTimeMinutes: 18,
            questionType: 'comparison',
            extract: `Source A:\n${c.textA}\n\nSource B:\n${c.textB}`,
            extractSource: bothSources,
            modelAnswers: {
              'Grade 4-5': c.q3Answer45,
              'Grade 6-7': c.q3Answer67,
            },
            markScheme: c.q3MarkScheme,
          },
          {
            id: `aqa-lang-p2-set2-${nn}-q4`,
            questionNumber: 4,
            questionText: `You may use details from both texts to support your answer if it is helpful.\n\n${c.q4Text}`,
            marks: 6,
            suggestedTimeMinutes: 8,
            questionType: 'evaluation',
            extract: `Source A:\n${c.textA}\n\nSource B:\n${c.textB}`,
            extractSource: bothSources,
            modelAnswers: {
              'Grade 4-5': c.q4Answer45,
              'Grade 6-7': c.q4Answer67,
            },
            markScheme: c.q4MarkScheme,
          },
        ],
      },
      {
        id: `aqa-lang-p2-set2-${nn}-writing`,
        title: 'Section B: Writing',
        description: 'You are going to write to present a viewpoint.',
        totalMarks: 40,
        suggestedTimeMinutes: 45,
        questions: [
          {
            id: `aqa-lang-p2-set2-${nn}-q5`,
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

// ─── PAPER 1: EDUCATION REFORM ──────────────────────────────────────────────

const paper1: MockExamPaper = makeP2({
  set: 1,
  sourceA:
    'Thomas Henry Huxley, "A Liberal Education: and Where to Find It", an address given in London on 4 January 1868, as printed in Lay Sermons, Addresses and Reviews, 1870',
  // Gutenberg #16729, four consecutive paragraphs, cut by script.
  textA: `It may be said that all these animadversions may apply to primary schools, but that the higher schools, at any rate, must be allowed to give a liberal education. In fact, they professedly sacrifice everything else to this object.

Let us inquire into this matter. What do the higher schools, those to which the great middle class of the country sends it children, teach, over and above the instruction given in the primary schools? There is a little more reading and writing of English. But, for all that, every one knows that it is a rare thing to find a boy of the middle or upper classes who can read aloud decently, or who can put his thoughts on paper in clear and grammatical (to say nothing of good or elegant) language. The "ciphering" of the lower schools expands into elementary mathematics in the higher; into arithmetic, with a little algebra, a little Euclid. But I doubt if one boy in five hundred has ever heard the explanation of a rule of arithmetic, or knows his Euclid otherwise than by rote.

Of theology, the middle class schoolboy gets rather less than poorer children, less absolutely and less relatively, because there are so many other claims upon his attention. I venture to say that, in the great majority of cases, his ideas on this subject when he leaves school are of the most shadowy and vague description, and associated with painful impressions of the weary hours spent in learning collects and catechism by heart.

Modern geography, modern history, modern literature; the English language as a language; the whole circle of the sciences, physical, moral, and social, are even more completely ignored in the higher than in the lower schools. Up till within a few years back, a boy might have passed through any one of the great public schools with the greatest distinction and credit, and might never so much as have heard of one of the subjects I have just mentioned. He might never have heard that the earth goes round the sun; that England underwent a great revolution in 1688, and France another in 1789; that there once lived certain notable men called Chaucer, Shakspeare, Milton, Voltaire, Goethe, Schiller. The first might be a German and the last an Englishman for anything he could tell you to the contrary. And as for science, the only idea the word would suggest to his mind would be dexterity in boxing.`,
  authorA: 'Thomas Henry Huxley',
  dateA: '1868',
  sourceB:
    'Matthew Arnold, "Literature and Science", a lecture first given at Cambridge and recast for American audiences, as printed in Discourses in America, 1885',
  // Gutenberg #44919, the lecture's closing paragraph, cut by script.
  textB: `And therefore, to say the truth, I cannot really think that humane letters are in much actual danger of being thrust out from their leading place in education, in spite of the array of authorities against them at this moment. So long as human nature is what it is, their attractions will remain irresistible. As with Greek, so with letters generally: they will some day come, we may hope, to be studied more rationally, but they will not lose their place. What will happen will rather be that there will be crowded into education other matters besides, far too many; there will be, perhaps, a period of unsettlement and confusion and false tendency; but letters will not in the end lose their leading place. If they lose it for a time, they will get it back again. We shall be brought back to them by our wants and aspirations. And a poor humanist may possess his soul in patience, neither strive nor cry, admit the energy and brilliancy of the partisans of physical science, and their present favour with the public, to be far greater than his own, and still have a happy faith that the nature of things works silently on behalf of the studies which he loves, and that, while we shall all have to acquaint ourselves with the great results reached by modern science, and to give ourselves as much training in its disciplines as we can conveniently carry, yet the majority of men will always require humane letters; and so much the more, as they have the more and the greater results of science to relate to the need in man for conduct, and to the need in him for beauty.`,
  authorB: 'Matthew Arnold',
  dateB: '1885',
  glossary:
    "Glossary for Source A: animadversions - criticisms; ciphering - arithmetic, as taught in elementary schools; Euclid - geometry, taught from the Elements of the Greek mathematician Euclid; collects - short prayers set for particular days in the Church of England's services; catechism - a summary of Christian belief in questions and answers, learnt by heart; Shakspeare - an older spelling of Shakespeare.\n\nGlossary for Source B: humane letters - literature, including the Greek and Latin classics; humanist - a scholar or lover of humane letters; partisans - keen supporters; possess his soul in patience - wait calmly.",
  q1BothTexts: 'what education should teach and whether it needs to change.',
  q1MarkScheme: [
    "Clear identification of both writers' main positions: Huxley finds the higher schools failing; Arnold expects literature to keep its leading place",
    'Accurate details from Source A, such as boys who cannot read aloud or write clearly, Euclid learnt by rote, the catechism learnt by heart, and modern subjects and the sciences ignored',
    'Accurate details from Source B, such as letters being "studied more rationally", other subjects "crowded into education", and everyone learning the results of modern science',
    'Specific evidence from both texts, including short, accurate quotations',
    'Inferences about how the positions differ: Huxley sees what is missing as the problem; Arnold accepts some change but not the loss of "humane letters"',
  ],
  q1Answer45: `Source A (Huxley) says that the higher schools claim to give a liberal education but teach very little. He says it is "a rare thing" to find a boy who can "read aloud decently" or write clear English, and he doubts whether many boys know Euclid "otherwise than by rote". Boys spend "weary hours" learning the catechism by heart, and subjects such as modern history, modern literature and "the whole circle of the sciences" are ignored. This suggests that he wants the curriculum to change.

Source B (Arnold) says that literature, which he calls "humane letters", will keep its "leading place in education". He accepts that other subjects will be added, "far too many" of them, and that everyone will have to learn "the great results reached by modern science", but he believes most people "will always require humane letters". He expects change, but not that literature will be pushed out: letters will be "studied more rationally" but "will not lose their place".`,
  q1Answer67: `Huxley, in Source A, sets out to test the claim that the higher schools "must be allowed to give a liberal education", and finds it false. Beyond "a little more reading and writing of English", these schools add only "a little algebra, a little Euclid", mostly learnt "by rote", and their religious teaching leaves ideas that are "shadowy and vague". Most damning, in his view, is what is left out: modern geography, history and literature, the English language and "the whole circle of the sciences". Until "a few years back", he says, a boy could leave a great public school with "the greatest distinction and credit" without knowing that the earth goes round the sun. The implication is that the curriculum has failed and must change.

Arnold, in Source B, looks at the same debate from the other side and is confident that "humane letters" will keep "their leading place in education", however strong "the array of authorities against them". He does not resist change altogether: letters may come to be "studied more rationally", other subjects will be "crowded into education", and everyone must learn "the great results reached by modern science". His reason is human nature: most people "will always require humane letters", because the more science they learn, the more they need letters to relate its results to "the need in man for conduct" and "the need in him for beauty". Where Huxley sees the old curriculum as the problem, Arnold sees it as the part of education that will last.`,
  q2Text: 'express his concern about what the higher schools of his day teach?',
  q2MarkScheme: [
    'Identification of specific language features, for example the adverb "professedly", the repeated "a little", the hyperbole of "one boy in five hundred", the list of neglected subjects and the anticlimax of "dexterity in boxing"',
    'Explanation of the intended effect on the audience, such as making the schools seem neglectful, dull or absurd',
    'Integration of short quotations with analysis',
    'Comment on sentence forms and structure, such as the question Huxley asks and then answers, and the list that builds to the final joke',
    'Sophisticated analysis of how the language builds his concern across the passage',
  ],
  q2Answer45: `Huxley uses language to show that the higher schools fail their pupils. He starts with what "may be said" in their defence, that they "must be allowed to give a liberal education", and then writes "Let us inquire into this matter", which sounds as if he is about to test the claim and prove it wrong. He uses the exaggerated figure "one boy in five hundred" to suggest that almost no pupil has ever had a rule of arithmetic explained to him, and the phrase "by rote" shows that boys memorise without understanding. The adjectives in "painful impressions of the weary hours" show that learning the catechism was dull and unpleasant. He lists subjects such as "modern history, modern literature" and "the whole circle of the sciences" to show how much is missing. Finally, he ends with a joke: the only idea the word science would suggest to a schoolboy is "dexterity in boxing", which makes the schools seem ridiculous.`,
  q2Answer67: `Huxley builds his concern by stating the schools' case and then taking it apart. The defence that they "must be allowed to give a liberal education" is undercut by the adverb in "they professedly sacrifice everything else to this object": the aim is professed, not achieved. He then asks what the higher schools teach "over and above the instruction given in the primary schools" and answers his own question, and the answer is thin. His concessions are grudging ("There is a little more reading and writing of English") and are at once cancelled by "But, for all that". The appeal to shared knowledge in "every one knows" presents his criticism as beyond dispute, and the modest adverb "decently" sets a standard so low that failing it is shameful. The repeated "a little" in "a little algebra, a little Euclid" shrinks the mathematics taught, while the hyperbole of "one boy in five hundred" and the phrase "by rote" suggest learning without understanding. On religious teaching, "shadowy and vague" and "painful impressions of the weary hours" suggest that the schoolboy gains only confusion and boredom. The long list of neglected subjects, ending in "the whole circle of the sciences, physical, moral, and social", accumulates a sense of vast omission, and the superlative "the greatest distinction and credit" is ironic when set against a boy who "might never have heard that the earth goes round the sun". Huxley ends in bathos: the only idea the word science would suggest to such a boy "would be dexterity in boxing". The comic anticlimax makes the schools' neglect seem absurd as well as harmful.`,
  q3BothTexts: 'the traditional curriculum and whether it should change.',
  q3MarkScheme: [
    'Clear comparison of the two viewpoints: Huxley attacks the traditional curriculum for what it leaves out; Arnold defends literature while accepting that science must be learnt',
    'Evidence from both texts, with quotations integrated into the comparison',
    "Analysis of methods: Huxley's lists, hyperbole and sarcasm set against Arnold's concessions, calm confidence and long final sentence",
    'Recognition of common ground as well as difference, for example that both writers think science belongs in education',
    'Perceptive comparison of how each writer tries to influence the reader',
  ],
  q3Answer45: `Both writers are writing about what education should include, but they have different views. Huxley thinks the traditional curriculum is failing: boys learn Euclid "by rote" and subjects such as modern literature and the sciences are "completely ignored". Arnold defends literature, which he calls "humane letters", and believes that letters "will not lose their place" in education. However, Arnold agrees that people need science too, because everyone will have to learn "the great results reached by modern science". Huxley uses sarcasm and exaggeration, such as "dexterity in boxing", to make the schools look foolish, while Arnold uses a calm, confident tone and says that the "attractions" of letters "will remain irresistible". Huxley's criticism suggests that change is needed now, but Arnold thinks that even if letters lose their place "for a time, they will get it back again".`,
  q3Answer67: `The writers disagree about whether the traditional, literary curriculum deserves its place. Huxley presents the higher schools as failing on their own terms: they "professedly sacrifice everything else" to a liberal education, yet their pupils can rarely "read aloud decently" and know Euclid only "by rote". His method is accumulation, a catalogue of what is "completely ignored", from "Modern geography" to "the whole circle of the sciences", followed by a string of facts a boy "might never have heard". Arnold, by contrast, writes as "a poor humanist" defending "humane letters", and where Huxley attacks, Arnold reassures. He admits the strength of the other side, "the array of authorities against them" and "the energy and brilliancy of the partisans of physical science", but rests his confidence on something larger than argument: "So long as human nature is what it is, their attractions will remain irresistible." The two are closer than they first appear, since Arnold agrees that "we shall all have to acquaint ourselves with the great results reached by modern science"; the difference is one of balance rather than exclusion. Their tones differ sharply. Huxley's sarcasm ("dexterity in boxing") is designed to provoke his audience into wanting change, while Arnold's patient voice, with its biblical echo of one who will "neither strive nor cry", invites the reader to trust that "the nature of things works silently" in favour of letters. For Huxley reform is urgent. Arnold foresees, "perhaps", "a period of unsettlement and confusion and false tendency", but insists that letters "will not in the end lose their leading place".`,
  q4Text:
    'Whose argument do you find more persuasive? Which writer presents more convincing evidence for their position?',
  q4MarkScheme: [
    'Clear judgement with supported reasoning',
    'Reference to both texts',
    "Evaluation of the quality of evidence: Huxley's specific examples against his admitted guesses; Arnold's concessions against his appeal to human nature",
    'Analysis of persuasive technique',
    'Sophisticated, balanced judgement with nuanced consideration',
  ],
  q4Answer45: `I find Huxley's argument more persuasive because he gives specific examples of what boys do not learn. He says a boy might never have heard "that the earth goes round the sun" or of writers such as "Chaucer, Shakspeare, Milton", which shows how much the schools leave out. Arnold's argument is calmer, and he admits that science matters, but his main evidence is that "human nature is what it is", which is a belief rather than proof. However, Arnold is persuasive when he accepts that education will change, which makes him seem fair.`,
  q4Answer67: `Huxley's argument is the more persuasive, although both writers rely more on confident assertion than on proof. Huxley's strength is detail: rather than claiming vaguely that schools fail, he names what is missing, from "Modern geography" to the facts that "England underwent a great revolution in 1688, and France another in 1789". His evidence is partly impressionistic, however. "I doubt if one boy in five hundred" and "I venture to say" signal personal judgement rather than measurement, and he admits that his most striking example describes the schools only "Up till within a few years back". Arnold is disarmingly frank about the forces against him, conceding "the array of authorities against them" and granting that all must learn "the great results reached by modern science", and these concessions make him seem reasonable. Yet his central evidence, "So long as human nature is what it is", is an article of faith, and his admission that letters may lose their place "for a time" weakens his reassurance. Arnold persuades through tone and Huxley through detail, and detail is what a reader can test.`,
  q5Prompt:
    'Many people argue that education systems need significant change to prepare students for the modern world.',
  q5Viewpoint:
    'You are going to write to present a viewpoint on whether schools should undergo radical reform or make gradual improvements to the current system.',
  q5MarkScheme: [
    'Engaging opening that establishes perspective',
    'Clear thesis statement',
    'Multiple developed arguments with evidence',
    'Counterargument addressed',
    'Sophisticated vocabulary and varied sentence structures',
    'Compelling conclusion',
  ],
  q5Answer45: `Education reform is essential for our future. Schools today must change to prepare students for jobs that don't exist yet. Traditional subjects like Latin and ancient history don't help students solve modern problems. Instead, schools should teach teamwork, problem-solving, and digital skills that employers actually want.

Some people argue that keeping traditional education is important because it has worked for centuries. However, the modern world is completely different from the past. Students need different skills now. Traditional exams don't measure creativity or teamwork. They only measure how well students remember information, which is pointless when we have Google.

Schools should introduce more project-based learning where students tackle real problems. If students had to design a sustainable city or create a business plan, they would learn real skills. They would also be more interested in school. Currently, many students are bored and disengaged because lessons are disconnected from real life.

Furthermore, the mental health crisis among students shows the current system isn't working. Exam stress and pressure are causing depression and anxiety. Schools could reduce testing and focus on student well-being instead. This doesn't mean having no standards, just better ways to assess learning.

In conclusion, educational reform is not optional but essential. We must change the system to engage students, reduce mental health problems, and teach relevant skills for the modern world.`,
  q5Answer67: `The perpetuation of nineteenth-century pedagogical models in twenty-first-century education represents a fundamental abdication of institutional responsibility. Schools must undergo systematic reform to align curricula and assessment approaches with contemporary skill requirements and cognitive development research.

Critics contend that traditional education has demonstrable value, producing generations of accomplished individuals. Yet this argument commits a temporal fallacy: the skills requisite for industrial-era success prove demonstrably inadequate for knowledge-economy participation. Contemporary employers consistently identify critical gaps in graduates' collaborative abilities, creative problem-solving capacities, and technological literacy - precisely the competencies traditional curricula systematically deprioritise in favour of subject-specific content recall.

Project-based pedagogical frameworks offer compelling alternatives. When students engage substantive real-world challenges - designing sustainable infrastructure, analysing epidemiological data, constructing policy proposals - they develop integrated competencies: disciplinary knowledge, practical application, communicative clarity, and collaborative negotiation. This authenticity simultaneously addresses the mental health crisis afflicting secondary students. The persistent anxiety and depression correlate directly with decontextualised assessment regimes emphasising high-stakes examinations over meaningful learning experiences.

Moreover, technological transformation necessitates curricular evolution. Information accessibility obviates the necessity of content memorisation; educational value increasingly resides in synthesis, critical analysis, and creative application. Schools persisting with rote assessment methodologies effectively prepare students for obsolescence.

However, wholesale institutional dismantling proves neither practical nor advisable. Evolutionary reform - implementing project-based components alongside traditional disciplines, diversifying assessment methods, prioritising student well-being within maintained academic rigour - offers sustainable transformation. Schools require additional resource investment, but this represents prudent human capital development rather than budgetary expenditure.

In essence, educational reform addresses not revolutionary ideology but pragmatic responsiveness to demonstrable shifts in economic requirements and psychological research on learning effectiveness. Schools failing to adapt risk institutional irrelevance.`,
})

export const aqaLangP2MocksSet2: MockExamPaper[] = [paper1]
