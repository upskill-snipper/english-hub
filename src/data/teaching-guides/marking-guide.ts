import type { TeachingGuide } from './index'

export const markingGuide: TeachingGuide = {
  id: 'marking-guide',
  title: 'Expert Guide to Marking GCSE English',
  description:
    'A comprehensive guide to marking GCSE English Language and Literature, covering AO-by-AO breakdowns, common pitfalls, moderation strategies, grade boundary guidance, and model marked responses with annotations.',
  category: 'marking',
  readTime: 18,
  sections: [
    {
      title: 'AO-by-AO Breakdown: English Language',
      content:
        'Accurate marking begins with a forensic understanding of each Assessment Objective and what it actually rewards. Too many teachers mark holistically based on "feel" rather than systematically against AOs, which leads to inconsistency and inaccurate grading.\n\nAO1 in English Language assesses the ability to identify and interpret explicit and implicit information and ideas, and to select and synthesise evidence. At the lower end, students simply retrieve surface-level information. At the higher end, they draw perceptive inferences and synthesise across the text with precision. When marking AO1, ask yourself: has the student gone beyond what is stated to explore what is implied? Are they selecting judicious evidence rather than quoting at length? The common error here is rewarding students who quote extensively but interpret superficially — length of quotation does not equal depth of understanding.\n\nAO2 assesses analysis of writers\' methods and their effects, using relevant terminology. This is where the most marking inconsistency occurs. A Level 2 response will identify a technique and explain what it means. A Level 4 response will analyse how the technique creates a specific effect on the reader and explore why the writer chose it. When marking AO2, look for the quality of the analysis, not the number of techniques spotted. A student who analyses one metaphor in depth, exploring connotations and reader response, deserves more credit than one who lists five techniques with surface-level comments.\n\nAO3 assesses comparison of writers\' ideas and perspectives. This appears primarily in Paper 2. The key discriminator is whether students compare integratively — weaving points about both texts together — or write about each text sequentially with a brief linking sentence. Integrated comparison is a Level 3+ skill, and you should reward it clearly.\n\nAO4 assesses evaluation, requiring students to critically assess texts with a sustained, convincing personal response. This is often misunderstood: students think evaluation means giving their opinion about whether they liked the text. In reality, it means assessing how effectively the writer achieves their purpose, supported by textual evidence. When marking AO4, reward students who engage critically with authorial choices rather than simply agreeing with the text.\n\nAO5 and AO6 assess writing: content and organisation (AO5) and technical accuracy (AO6). AO5 rewards well-structured, engaging writing with a clear register and effective use of linguistic devices. AO6 rewards accuracy in spelling, punctuation, and grammar, with a particular emphasis on sentence demarcation and the use of a range of punctuation. When marking writing, resist the temptation to focus disproportionately on SPaG errors — AO5 carries significantly more weight, and a creative, well-organised response with some technical errors may deserve a higher overall mark than a technically accurate but pedestrian one.',
      tips: [
        'Create an AO checklist for each question type and tick off which AOs each paragraph addresses — this keeps your marking objective',
        'Annotate in the margin which AO you are crediting at each point (e.g., "AO2 - analysis of verb choice") to create an audit trail',
        'When in doubt about a mark, re-read the level descriptors rather than relying on your instinct — this is especially important when tired',
        'Remember that AOs are weighted differently across questions: check the mark scheme to ensure you are not over-crediting a lightly weighted AO',
      ],
      examples: [
        {
          scenario: 'A student writes: "The writer uses a simile to describe the storm. This makes the reader feel scared."',
          approach:
            'This is AO2 at Level 1-2: the technique is identified and a basic effect is stated, but there is no analysis of how the simile creates that effect. Award low Level 2. In your annotation, write: "You have identified the technique — now zoom in on the specific words within the simile. What do they connote? Why has the writer chosen this comparison rather than another?" This targets the gap between identification and analysis.',
        },
        {
          scenario: 'A student writes: "Dickens uses the adjective \'squeezing\' to describe Scrooge, which has connotations of tightness and restriction, suggesting he is not only financially mean but emotionally constrained. The sibilance of \'squeezing, wrenching, grasping\' creates an almost serpentine quality, aligning Scrooge with something predatory and cold-blooded."',
          approach:
            'This is AO2 at Level 4: the student explores multiple layers of meaning, considers connotations, links technique to characterisation, and offers a perceptive interpretation. Award upper Level 4. Annotate: "Excellent — the link between sound and characterisation is sophisticated. To push further, consider what Dickens wants the reader to feel about Scrooge at this point and why."',
        },
      ],
    },
    {
      title: 'AO-by-AO Breakdown: English Literature',
      content:
        'English Literature AOs differ from Language and require a shift in marking mindset. The emphasis moves from skills-based assessment to knowledge-informed critical response.\n\nAO1 in Literature assesses the ability to read, understand, and respond to texts, maintaining a critical style and developing an informed personal response. "Critical style" is the key phrase: students should write as literary critics, not as storytellers. Responses that retell the plot, no matter how accurately, cannot access the upper levels of AO1. When marking, look for a clear argument that runs through the response, a sense of the student engaging with the text rather than simply describing it, and evidence that they are addressing the specific question rather than writing everything they know.\n\nAO2 assesses analysis of the language, form, and structure used by a writer to create meanings and effects, using relevant subject terminology. In Literature, this must be embedded within a broader argument about the text, not bolted on as isolated technique-spotting. A strong AO2 response might analyse how Shakespeare uses iambic pentameter to convey Macbeth\'s mental state — the technique serves the interpretation, not the other way around. When marking, reward responses where method analysis illuminates meaning rather than existing as a separate layer.\n\nAO3 assesses understanding of the relationships between texts and the contexts in which they were written. This is the AO that most frequently causes marking errors. Context is not background information dumped into an introduction — it must be used to inform interpretation. A student who writes "Shakespeare lived in a patriarchal society" earns minimal AO3 credit. A student who writes "Lady Macbeth\'s manipulation of Macbeth\'s masculinity would have been particularly shocking to a Jacobean audience, who associated female ambition with witchcraft and moral corruption" is using context to enrich their analysis. When marking AO3, ask: is the context illuminating the text, or is it sitting beside it?\n\nAO4 assesses the ability to use a range of vocabulary and sentence structures for clarity, purpose, and effect, with accurate spelling and punctuation. In Literature, this is worth fewer marks than in Language, but it still matters. A well-written response that uses academic vocabulary and varies sentence structure will naturally score higher. Do not penalise minor slips under pressure, but do note patterns of inaccuracy that impede communication.',
      tips: [
        'The single most common error in Literature marking is over-crediting context that is not linked to analysis — be rigorous about this',
        'Look for a thesis or argument running through the response: top-band answers have a clear, sustained line of reasoning',
        'Do not penalise students for not covering every possible point — depth is rewarded over breadth at every level',
        'When a student offers an unconventional interpretation, credit it if it is supported by textual evidence — the mark scheme rewards "personal response"',
      ],
      examples: [
        {
          scenario: 'A student begins their Inspector Calls response with a full paragraph about Priestley\'s socialist beliefs and the 1945 Labour landslide',
          approach:
            'This is context without textual connection — it reads like a history essay. AO3 credit is minimal because the context is not being used to analyse the text. Write: "This is accurate context, but it needs to be woven into your analysis of the play. For example, how does Priestley use the Birling family to dramatise the conflict between capitalism and socialism? Lead with the text and bring in context to support your interpretation." Do not award more than low Level 2 for AO3 regardless of the accuracy of the historical knowledge.',
        },
      ],
    },
    {
      title: 'Common Marking Pitfalls and How to Avoid Them',
      content:
        'Even experienced markers fall into patterns that compromise accuracy. Awareness of these pitfalls is the first step to avoiding them.\n\nThe halo effect occurs when a strong opening paragraph leads you to mark the rest of the response generously, or when you are influenced by knowing which student wrote the piece. Counter this by reading the entire response before assigning a mark, and by marking anonymously where possible. Some departments assign candidate numbers for assessed pieces specifically to eliminate bias.\n\nMarking drift happens across a batch of essays. Your standards at essay number five may differ from essay number thirty. Combat this by re-reading the mark scheme and a benchmark response every ten essays. Keep a "standard set" of three marked responses (one at each end of the grade range and one in the middle) visible as you mark, and compare each new response against them.\n\nThe severity-leniency trap is where your marking is consistently too harsh or too generous compared to the exam board standard. This is often unconscious and can persist for years if unchallenged. The only reliable cure is external benchmarking: attend exam board standardisation meetings, compare your marks against senior examiner marks, and use the board\'s marked exemplar materials to calibrate your judgement.\n\nOver-marking writing and under-marking reading (or vice versa) is common in Language papers. Teachers who are passionate about creative writing may unconsciously over-reward Section B, while those with a Literature background may over-credit analysis in Section A. Check your marks per section against the available marks to ensure proportionality.\n\nRecency bias means you remember the last paragraph most vividly and it disproportionately influences your mark. A student who writes three weak paragraphs and one strong final paragraph may receive a higher mark than a student who writes three strong paragraphs and one weak conclusion, even though the latter has demonstrated greater overall skill. Mark paragraph by paragraph, noting the level of each, then look at the overall picture.',
      tips: [
        'Mark in batches of no more than 10-12 essays at a time to maintain accuracy — take a genuine break between batches',
        'Use a standardisation protocol at the start of every marking session: re-read the mark scheme and mark one benchmark response before touching student work',
        'If you catch yourself thinking "this sounds like a Grade 7 student," stop — mark the work, not the student',
        'Record your marks on a separate sheet rather than on the script to prevent earlier marks from influencing later ones',
      ],
      examples: [
        {
          scenario: 'You are marking a set of 30 Year 11 mock papers and notice that your marks feel inconsistent by the end',
          approach:
            'Stop marking and return to the beginning. Select your third, fifteenth, and twenty-eighth scripts and re-mark them blind (covering your original mark). Compare the two marks. If they differ by more than one mark on a 30-mark question, your standards have drifted. Identify the direction of drift (harsher or more lenient) and recalibrate by re-reading the level descriptors. Consider splitting the batch across two sessions.',
        },
      ],
    },
    {
      title: 'Moderation: Ensuring Accuracy and Consistency',
      content:
        'Internal moderation is a professional obligation that protects students and supports teachers. It should be embedded as a routine departmental activity, not treated as a bureaucratic add-on.\n\nTriple-blind moderation is the gold standard for high-stakes assessments such as mock exams. Three teachers mark the same set of scripts independently, then compare marks. Where marks agree within a tolerance (usually one mark on a 30-mark question, two marks on a 40-mark question), the average stands. Where marks diverge, the three teachers discuss the response against the mark scheme and agree a final mark. This process takes time but produces highly accurate marks that will withstand external scrutiny.\n\nCross-moderation is more efficient for ongoing assessment. Each teacher in the department marks their own classes, then swaps a sample (typically five scripts: the top, bottom, and three from the middle of the mark range) with a colleague. The colleague marks the sample blind and the two sets of marks are compared. Discrepancies trigger a discussion and, if necessary, a re-mark of the full set.\n\nStandardisation meetings should happen at least termly, ideally half-termly. The most effective format is to mark a response live as a department, discussing each paragraph and agreeing where it sits within the level descriptors. This collaborative marking builds shared understanding and surfaces different interpretations that individual marking cannot. Use exam board exemplar materials for these sessions, as they come with senior examiner marks and commentary.\n\nDocument your moderation. Keep records of the samples moderated, the marks compared, and the outcomes. This creates an evidence trail for external quality assurance visits and demonstrates to SLT and Ofsted that your assessment is robust. A simple spreadsheet showing original mark, moderated mark, and agreed mark for each sample is sufficient.',
      tips: [
        'Schedule moderation into the department calendar at the start of the year — it will not happen if left ad hoc',
        'Use exam board exemplar materials for standardisation: they are the definitive benchmark',
        'When marks diverge in moderation, always return to the mark scheme rather than debating subjective impressions',
        'Rotate moderation partners each half-term so the department develops a shared standard rather than paired consistency',
        'New teachers should be moderated more frequently and paired with experienced markers for mentoring',
      ],
    },
    {
      title: 'Grade Boundary Guidance',
      content:
        'Understanding grade boundaries is essential for accurate progress reporting and realistic target-setting, but boundaries must be used intelligently rather than mechanically.\n\nGrade boundaries shift every year based on the cohort and the difficulty of the paper. AQA, for example, publishes grade boundaries after each exam series, and these can vary significantly: Grade 5 on English Language Paper 1 might require 38 marks one year and 42 the next. This means you cannot simply apply last year\'s boundaries to this year\'s mock papers and expect accurate predictions.\n\nFor mock exams, the best practice is to use a range of recent grade boundaries to establish a "zone" rather than a single threshold. If Grade 5 has fallen between 36 and 44 marks across the last four exam series, a student scoring 40 is in the Grade 5 zone but might fall on either side depending on the year. Communicate this uncertainty to students and parents honestly — a mock grade is an estimate, not a guarantee.\n\nWhen setting internal assessments (rather than full past papers), grade boundaries must be adjusted to reflect the different difficulty level and question selection. A 25-mark assessment on a single extract is not comparable to a 40-mark exam question on a whole text. Use professional judgement to establish indicative boundaries, and cross-reference against your knowledge of the students and their prior performance.\n\nCumulative boundaries across papers are what ultimately determine the GCSE grade. A student does not need to achieve Grade 5 on every paper — they need their total UMS or raw marks across all papers to exceed the cumulative Grade 5 boundary. This means a student who excels on Paper 1 but struggles on Paper 2 may still achieve their target grade. Help students understand this by showing them how marks from different papers contribute to the final grade.\n\nBe cautious about using grade boundaries to set minimum expected progress targets. A student whose target is Grade 6 does not need to achieve Grade 6 on every piece of work throughout the year — learning is not linear. Use boundaries as a reference point for summative assessment, not as a week-by-week target.',
      tips: [
        'Maintain a spreadsheet of grade boundaries from the last five years for each paper — this shows the range of variation and prevents over-reliance on a single year',
        'When reporting mock grades to parents, always include the caveat that boundaries vary and the grade is indicative',
        'Use the "marks to next grade" metric rather than just the grade: a student on 34 marks who needs 36 for Grade 5 has a clear, achievable target',
        'Consider providing students with a "boundary tracker" showing cumulative marks across papers and the distance to each grade threshold',
      ],
      examples: [
        {
          scenario: 'A parent queries why their child received Grade 4 on the mock when they "only needed two more marks for Grade 5"',
          approach:
            'Use this as an opportunity to frame the grade positively while maintaining accuracy. Explain that the boundaries used are based on a range of recent years and that the student is in the Grade 4/5 borderline zone. Share the specific areas where those two marks could be gained (e.g., "Three more marks on AO2 analysis would push them over — here is what that looks like"). Provide a concrete action plan rather than a reassurance.',
        },
      ],
    },
    {
      title: 'Model Marked Responses With Annotations',
      content:
        'One of the most powerful tools in a marker\'s arsenal is a bank of model responses at different grade levels, annotated with examiner-style commentary. These serve three purposes: they calibrate your own marking, they provide teaching resources for exam technique lessons, and they give students concrete examples of what each grade looks like.\n\nWhen creating annotated responses, mark up the following elements: which AO each section addresses and at what level, where the student moves between levels (e.g., "Level 3 analysis here, dropping to Level 2 when evidence is not embedded"), what the student does well (with specific praise tied to the mark scheme), what would improve the response (with specific, actionable suggestions), and the final mark with a brief justification.\n\nA well-annotated Grade 5 response is often more useful than a Grade 9 one because it shows students what "good enough" looks like and what specific improvements would push it higher. Grade 5 sits at the pivot point of the mark scheme, and small changes can make a significant difference. Annotate a Grade 5 response to show exactly which sentences are earning marks and which are not, then create a "improved version" that demonstrates the changes needed for Grade 7.\n\nBuild your bank across all question types. You need at least three levels of annotated response (Grade 3-4, Grade 5-6, Grade 7-9) for each major question type: Language Paper 1 extract analysis, Language Paper 2 comparison, Language creative writing, Language transactional writing, Literature extract response, and Literature essay response. This is a significant investment of time, but once created, the bank serves for years with minor updates.\n\nUse student responses rather than writing your own model answers. Authentic student writing (with permission and anonymised) is more relatable and more realistic than teacher-written exemplars. Students can see themselves in a peer\'s work in a way they cannot in a polished teacher response.',
      tips: [
        'Colour-code your annotations by AO (e.g., blue for AO1, green for AO2, red for AO3) so patterns are immediately visible',
        'Always show the mark scheme level descriptors alongside the annotated response so students can see the connection',
        'Create "before and after" pairs showing a paragraph at Grade 4 and the same paragraph improved to Grade 6 — the specific changes make the abstract concrete',
        'Store annotated responses in a shared department folder so all teachers benefit from the bank',
        'Update the bank annually with responses from the current cohort to keep it fresh and relevant',
      ],
      examples: [
        {
          scenario: 'You want to show Year 11 the difference between a Grade 5 and Grade 7 response to an "Inspector Calls" question',
          approach:
            'Select two genuine student responses to the same question. For the Grade 5, annotate where the student makes valid points (AO1 Level 3), identifies techniques (AO2 Level 2-3), and mentions context (AO3 Level 2). Then annotate the Grade 7, highlighting how the argument is sustained (AO1 Level 4), analysis explores effects in depth (AO2 Level 4), and context is integrated into interpretation (AO3 Level 3-4). Project both side by side and ask students to identify what the Grade 7 does differently. Use their observations to create a class "upgrade checklist."',
        },
      ],
    },
    {
      title: 'Time-Saving Marking Strategies',
      content:
        'A full-time English teacher marking thoroughly can spend 10+ hours per week on marking alone. This is not sustainable and, beyond a certain point, does not improve student outcomes. The goal is to maximise the impact of every minute spent marking.\n\nLive marking is the single most impactful time-saving strategy. As students write during the lesson, circulate with a pen and mark work in real time. You can assess 10-15 books in a 20-minute writing task, providing instant verbal feedback alongside brief written annotations. The feedback is timely (students act on it immediately), efficient (you are marking during teaching time, not at home), and formative (you can adjust your teaching in response to what you see).\n\nCode marking replaces lengthy written comments with codes that map to a standard feedback menu. Create a department-wide code sheet: for example, "T1 = embed your quotations," "T2 = analyse the effect on the reader," "T3 = link to context," "T4 = vary your sentence structures." Students receive the code and look up the full feedback themselves. This takes seconds per essay instead of minutes and has the added benefit of requiring students to actively engage with the feedback rather than passively reading it.\n\nSelective marking means you do not need to mark every piece of work with the same depth. Create a marking policy that distinguishes between "deep mark" pieces (assessed work receiving full written feedback against the mark scheme), "light mark" pieces (a quick check for completion and one brief comment), and "self/peer assessed" pieces (students assess their own or each other\'s work using a provided mark scheme). A typical cycle might include one deep mark and two light marks per class per half-term.\n\nWhole-class feedback sheets, discussed in detail in our essay marking guide, replace individual comments with a single-page class summary. Reading a set of 30 essays and completing a WCF sheet takes approximately 45 minutes compared to 3+ hours for individual written feedback, with comparable impact on student progress when combined with a targeted improvement task.\n\nDictated feedback using voice-to-text tools can halve your marking time. Record verbal feedback for each student using your phone, then have it transcribed. You can also send brief audio messages to students via your school\'s communication platform — many students find verbal feedback easier to understand and more personal than written comments.',
      tips: [
        'Aim for a maximum of 5-7 minutes per essay for deep marking — set a timer and stick to it',
        'Designate one evening per week as "no marking" to protect your wellbeing — sustainable marking is effective marking',
        'Invest time upfront in creating code sheets and WCF templates: they save exponentially more time over the year',
        'Negotiate with SLT if your marking policy demands unsustainable workload — bring evidence of effective alternatives like WCF and live marking',
        'Use comparative judgement platforms where students rank work against each other — this is faster than absolute marking and develops evaluative skills',
      ],
    },
  ],
  relatedResources: [
    { type: 'guide', id: 'essay-marking', title: 'How to Mark Essays Effectively' },
    { type: 'guide', id: 'using-data', title: 'Using Analytics Data to Improve Teaching' },
    { type: 'guide', id: 'exam-preparation', title: 'Preparing Students for Exams' },
  ],
}
