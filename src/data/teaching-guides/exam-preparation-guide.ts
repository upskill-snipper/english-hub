import type { TeachingGuide } from './index'

export const examPreparationGuide: TeachingGuide = {
  id: 'exam-preparation',
  title: 'Preparing Students for Exams',
  description:
    'Evidence-based strategies for effective exam preparation in English, from long-term curriculum planning to last-minute revision techniques.',
  category: 'exam-prep',
  readTime: 10,
  sections: [
    {
      title: 'Long-Term Exam Preparation: Building From Day One',
      content:
        'Effective exam preparation does not begin in Year 11 — it begins the moment students start studying a text or skill. The most successful English departments treat exam readiness as a thread woven through every lesson rather than a bolt-on revision phase.\n\nThis starts with curriculum design. When planning a scheme of work, map backwards from the exam paper. Identify the specific question types students will face, the assessment objectives being tested, and the skills required. Then ensure your teaching sequence explicitly builds those skills. For example, if AQA English Literature Paper 1 requires students to write about a character across the whole text in 50 minutes, students need repeated practice at selecting and organising quotations from across a text under time pressure — not just close analysis of individual extracts.\n\nInterleaving is a powerful evidence-based strategy that should underpin your curriculum. Rather than teaching a text and moving on entirely, revisit previously studied texts regularly through low-stakes retrieval activities. A five-minute "flashback" starter that asks students to recall a quotation from a text studied two months ago strengthens long-term memory far more effectively than intensive last-minute cramming.\n\nSpaced practice works alongside interleaving. Distribute practice opportunities across the year rather than massing them together. Students who write one timed paragraph per fortnight across the year will outperform those who write five essays in the final week, because spaced practice promotes durable learning that transfers to the exam hall.',
      tips: [
        'Create a department-wide "retrieval calendar" that schedules regular revisiting of previously taught content',
        'Use low-stakes quizzes at the start of every lesson to activate prior knowledge — five questions, two minutes',
        'Teach exam technique explicitly and early: model how to read a question, plan a response, and manage time',
        'Build a quotation bank with students throughout the year rather than issuing a revision sheet in March',
      ],
      examples: [
        {
          scenario: 'Year 10 students have just finished studying "Macbeth" and are moving on to poetry — you want to ensure they retain their Macbeth knowledge',
          approach:
            'Each Monday, include a "Macbeth Minute" starter: project a quotation and ask students to identify the speaker, the context, and one analytical point in sixty seconds. Every third week, set a timed paragraph comparing a theme in Macbeth to the poem currently being studied. This interleaves both texts and practises the comparison skill they will need in the exam.',
        },
      ],
    },
    {
      title: 'Teaching Exam Technique Explicitly',
      content:
        'Many students understand the content but underperform in exams because they lack exam technique. This is a teachable skill, not an innate ability, and it deserves explicit curriculum time.\n\nStart by demystifying the exam paper. Give students the actual paper structure early and often: which questions are worth how many marks, how long they should spend on each, and what the command words mean. Students who know that "How does the writer present..." requires analysis of methods, while "To what extent do you agree..." requires evaluation and argument, will structure their responses far more effectively.\n\nModel the entire exam process transparently. Show students how you would read a question (underlining key words), plan a response (spending three to five minutes before writing), draft an answer, and review it. Use a think-aloud approach where you verbalise your decision-making: "I am choosing this quotation because it lets me analyse a language technique AND link to context, which covers two assessment objectives."\n\nTimed practice is essential, but introduce it gradually. Begin with untimed responses where quality is the focus, then introduce generous time limits, and progressively reduce to exam conditions. Students who are thrown into full timed essays before they have mastered the content and structure will simply practise writing badly under pressure.\n\nExplicitly teach time management for the specific exam they are sitting. Create a timing guide (e.g., "AQA Literature Paper 1: Question 1 = 30 minutes, Question 2 = 50 minutes including 5 minutes planning") and have students practise with a visible clock. Many students lose marks not because they cannot answer a question but because they run out of time on the final question.',
      tips: [
        'Display a "clock strip" during timed practice showing minute-by-minute milestones (e.g., "By 15 minutes, you should be starting paragraph 3")',
        'Practise "examiner vision" — show students how to read their own work through the lens of the mark scheme',
        'Teach the art of the strategic skip: if stuck on a point, move on and return rather than losing time',
        'Use past paper questions regularly, but also create your own so students cannot simply memorise model answers',
      ],
      examples: [
        {
          scenario: 'Students consistently run out of time on the second question of a two-question exam paper',
          approach:
            'Diagnose the cause: are they spending too long on Question 1, or is their planning for Question 2 inefficient? If the former, practise Question 1 in isolation with a strict timer and a "pens down" policy. If the latter, run a series of "speed planning" sessions: give students 5 minutes to produce a bullet-point plan for a question, then discuss and compare plans without writing the full response. This builds the planning muscle so it becomes automatic under pressure.',
        },
      ],
    },
    {
      title: 'Effective Revision Strategies',
      content:
        'Not all revision is created equal. Students default to passive strategies — re-reading notes, highlighting, copying out quotations — because they feel productive. But cognitive science is clear: active retrieval, elaboration, and self-testing are vastly more effective for long-term retention.\n\nTeach students how to revise, not just what to revise. Dedicate lesson time to demonstrating effective strategies and allow students to practise them in class before expecting independent application. Key strategies include retrieval practice (testing yourself from memory before checking), elaborative interrogation (asking "why?" and "how?" about each point), dual coding (combining words with images or diagrams), and the Leitner system for quotation flashcards.\n\nFor English specifically, quotation retention is often the biggest concern for students. Encourage them to learn quotations in clusters linked to themes rather than in isolation. A student who knows five quotations about power in "Macbeth" — each from a different act — can answer almost any question about the play. Mnemonics, dramatic reading, and physical association (linking a quotation to a gesture or location) all aid memorisation.\n\nCreate a revision toolkit that students build throughout the year: quotation banks organised by theme, one-page knowledge organisers for each text, model paragraphs annotated with examiner comments, and personal target cards based on their mock exam feedback. This toolkit becomes their primary revision resource and is far more effective than generic revision guides because it is personalised to their learning journey.',
      tips: [
        'Run a "revision methods" lesson early in Year 10 where students trial different strategies and evaluate their effectiveness',
        'Provide quotation flashcard templates: quotation on one side, analysis and context on the other',
        'Use "brain dumps" — students write everything they know about a topic from memory in 5 minutes, then check gaps',
        'Discourage students from spending revision time making beautiful notes — retrieval beats re-reading every time',
      ],
    },
    {
      title: 'Mock Exams and Targeted Intervention',
      content:
        'Mock exams serve three purposes: they diagnose gaps in knowledge and skill, they build exam stamina and resilience, and they provide data for targeted intervention. To maximise their value, plan what happens after the mock as carefully as the mock itself.\n\nWhen analysing mock results, go beyond raw marks. Break performance down by assessment objective to identify specific weaknesses. A student scoring 15/30 might be losing marks primarily on AO2 (analysis of methods) or primarily on AO3 (context) — and the intervention for each is completely different. Use a simple spreadsheet to RAG-rate each student against each AO, creating a clear picture of where to focus your remaining teaching time.\n\nTargeted intervention should be precise and time-limited. Rather than generic "revision sessions," run focused workshops: "Embedding quotations fluently" for students weak on AO1, "Analysing word-level choices" for those weak on AO2, "Linking context to argument" for those weak on AO3. Students attend only the sessions relevant to their specific needs.\n\nAfter the mock, require students to complete a structured self-analysis: What did I do well? Where did I lose marks? What specific action will I take before the real exam? This develops metacognitive awareness and gives students ownership of their improvement. Follow up by checking that their revision plan targets their actual weaknesses rather than the topics they already feel comfortable with — students naturally gravitate toward their strengths.',
      tips: [
        'Schedule mock exams early enough to allow meaningful intervention — February at the latest for summer exams',
        'Provide question-level analysis, not just total marks, so students understand exactly where marks were gained and lost',
        'Run "exam wrapper" activities after returning mocks: students analyse their performance and set specific targets',
        'Use mock data to adjust your teaching: if 80% of the class struggled with comparison, reteach that skill rather than moving on',
      ],
      examples: [
        {
          scenario: 'Mock exam data reveals that most students can identify language techniques but fail to analyse their effects',
          approach:
            'Run a focused "So What?" sequence: display a student response that identifies a technique (e.g., "The writer uses a metaphor"), then model how to push the analysis further using the prompt "So what? What does this make the reader think, feel, or understand?" Provide three levels of analysis for the same quotation — surface, developing, and sophisticated — and ask students to identify which is which and why. Then have them rewrite their own mock responses using this deeper analytical approach.',
        },
      ],
    },
  ],
  relatedResources: [
    { type: 'guide', id: 'essay-marking', title: 'How to Mark Essays Effectively' },
    { type: 'guide', id: 'using-data', title: 'Using Analytics Data to Improve Teaching' },
    { type: 'guide', id: 'differentiation', title: 'Differentiation Strategies for English' },
  ],
}
