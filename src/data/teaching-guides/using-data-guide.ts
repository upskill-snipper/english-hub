import type { TeachingGuide } from './index'

export const usingDataGuide: TeachingGuide = {
  id: 'using-data',
  title: 'Using Analytics Data to Improve Teaching',
  description:
    'How to interpret student performance data, identify actionable patterns, and translate analytics into meaningful teaching improvements in your English classroom.',
  category: 'data',
  readTime: 9,
  sections: [
    {
      title: 'Understanding Your Data Sources',
      content:
        'English teachers have access to more data than ever before, from platform analytics showing student engagement and quiz scores to formal assessment data, reading age scores, and attendance patterns. The challenge is not a lack of data but knowing which data to prioritise and how to act on it.\n\nStart by distinguishing between formative data (ongoing, used to adjust teaching in real time) and summative data (periodic, used to evaluate progress against benchmarks). The English Hub provides formative data through practice scores, time-on-task metrics, flashcard retention rates, and question-level analysis. Your school\'s assessment system provides summative data through mock results, teacher assessments, and standardised tests.\n\nThe most useful data for day-to-day teaching is granular and recent. A student\'s score on last week\'s practice questions is more actionable than their KS2 SATs result from three years ago. Look for patterns in recent performance: Which topics are students consistently scoring well on? Where are the persistent gaps? Is there a discrepancy between a student\'s effort (time spent, tasks attempted) and their outcomes (scores achieved) — which might indicate they are working hard but using ineffective strategies?\n\nAvoid the trap of treating all data as equally important. Focus on the metrics that directly relate to the learning objectives you are currently teaching. If you are working on analytical writing, the relevant data is their performance on analysis-focused questions, not their spelling accuracy on a vocabulary quiz.',
      tips: [
        'Set up a weekly "data check" routine: spend 10 minutes reviewing student performance from the past week',
        'Use the platform\'s question-level analysis to identify which specific skills students are struggling with',
        'Compare effort data (time spent, tasks completed) with achievement data (scores) to identify students who need strategy support rather than motivation',
        'Keep a simple class tracker (spreadsheet or printout) showing RAG ratings for key skills — update it after each assessment',
      ],
      examples: [
        {
          scenario: 'The dashboard shows that Year 10 students are spending significant time on poetry flashcards but their quiz scores are not improving',
          approach:
            'This effort-achievement gap suggests an ineffective revision strategy. The students are likely passively reviewing cards rather than actively testing themselves. Address this in a lesson by modelling effective flashcard use: look at the prompt, attempt to recall the answer from memory, check, and sort cards into "confident" and "not yet" piles. Then adjust the platform settings to prioritise spaced repetition for cards students are getting wrong.',
        },
      ],
    },
    {
      title: 'Identifying Patterns and Priorities',
      content:
        'Raw data becomes useful only when you identify patterns. There are three levels of pattern to look for: whole-class trends, group-level differences, and individual outliers.\n\nWhole-class trends tell you about your teaching. If 70% of the class scored below the expected level on a particular skill, the issue is likely instructional rather than individual. This data should trigger a reteaching sequence rather than individual intervention. Common whole-class patterns in English include: strong on comprehension but weak on inference, able to identify techniques but unable to analyse effects, and confident with modern texts but struggling with pre-1914 language.\n\nGroup-level differences reveal equity issues. Compare performance across pupil premium and non-pupil premium students, SEND and non-SEND students, boys and girls, and different prior attainment groups. If a gap is widening, ask why: Are your scaffolds reaching the students who need them? Is your questioning sufficiently challenging for higher attainers? Are certain groups disengaging with particular text types?\n\nIndividual outliers deserve attention in both directions. A high-attaining student whose performance suddenly drops may be experiencing personal difficulties. A previously struggling student whose scores have jumped might have found a strategy that works — identify what changed and see if it can be shared with others. Students whose performance is highly inconsistent (strong one week, weak the next) may need support with self-regulation and study habits rather than content knowledge.',
      tips: [
        'After each assessment, identify the "top 3" and "bottom 3" questions by class performance — these are your priorities',
        'Track the pupil premium gap explicitly: plot it over time to see if your interventions are narrowing it',
        'Look for "near misses" — students scoring just below a grade boundary who might be pushed over with targeted support',
        'Use conditional formatting in spreadsheets to make patterns immediately visible: green for on-track, amber for close, red for concern',
      ],
      examples: [
        {
          scenario: 'Data shows that boys in your Year 9 class are significantly underperforming girls on extended writing tasks, but performing equally on shorter analytical questions',
          approach:
            'The issue is likely stamina, planning, or engagement with extended writing rather than analytical ability. Investigate further: are the boys planning before writing? Are they sustaining focus across longer tasks? Trial structured planning time (mandatory 5-minute plan before writing) and mid-task checkpoints. Consider whether the writing topics offer sufficient engagement for all students — choice of question can significantly impact motivation.',
        },
      ],
    },
    {
      title: 'Translating Data Into Teaching Actions',
      content:
        'The gap between identifying a pattern and changing your practice is where many teachers get stuck. The key principle is specificity: vague data leads to vague actions, while specific data enables precise intervention.\n\nFor whole-class issues, redesign your upcoming lessons to address the gap. If students are weak on analysing structural choices, do not simply "do more structure work" — identify the specific sub-skill they lack. Can they identify structural features? If not, teach identification first. Can they identify but not explain the effect? Then focus on modelling effect analysis with sentence stems like "This shift in focus creates a sense of... because the reader..."\n\nFor group-level interventions, create flexible groupings based on current data rather than fixed ability tables. Run targeted workshops during lesson time: while the class works independently on a practice task, pull a group of six students for focused teaching on their specific weakness. Rotate groups weekly based on the most recent data. This is more effective than after-school catch-up sessions because it provides support at the point of learning.\n\nFor individual students, use data to inform your one-to-one conversations. Rather than generic encouragement ("You need to try harder"), data enables precise dialogue: "Your analysis of language is strong — you scored 8/10 on that section. But you scored 3/10 on context. Let\'s work on connecting your language analysis to the historical context." This specificity shows students exactly where to focus and makes improvement feel achievable.\n\nCritically, track whether your interventions are working. If you have adjusted your teaching based on data, check back two weeks later to see if the pattern has changed. If it hasn\'t, try a different approach. Data-informed teaching is iterative, not one-shot.',
      tips: [
        'Use a "data to action" template: What does the data show? What will I do differently? When will I check if it worked?',
        'Plan interventions for no more than 2-3 priorities at a time — trying to fix everything simultaneously fixes nothing',
        'Share data patterns with students (anonymised and presented positively) so they understand the rationale behind your teaching decisions',
        'Build a 5-minute data review into your weekly planning time rather than treating it as an additional task',
      ],
    },
    {
      title: 'Communicating Data With Students and Parents',
      content:
        'Data is most powerful when students themselves understand and use it. Developing data literacy in your students transforms them from passive recipients of grades into active agents in their own learning.\n\nShare performance data with students regularly, but always frame it constructively. Instead of "You got 45% on this test," try "You scored 9/10 on comprehension and 2/10 on evaluation — that tells us exactly what to work on next." This reframes data as diagnostic information rather than a judgement of worth. Use visual representations such as radar charts or progress trackers that show growth over time rather than snapshots.\n\nTeach students to set data-informed targets. Rather than "I want to get a Grade 7," a data-informed target would be "I need to improve my AO2 analysis from Band 3 to Band 4, which means I need to analyse individual word choices rather than just naming techniques." Specific, skill-based targets are more actionable and less anxiety-inducing than grade-based ones.\n\nFor parent communication, translate data into plain language. Parents do not need to know about assessment objectives — they need to know what their child is doing well, what they are working on, and how they can support at home. A parent report that says "James can identify and explain key quotations confidently. His next step is to develop his analysis of how individual words create specific effects, which he can practise by discussing word choices when reading at home" is far more useful than a grade and a generic comment.\n\nUse data in parents\' evenings to ground conversations in evidence. Having specific examples of performance ready ("In the November mock, Emma scored full marks on the context question but struggled with the comparison element — here is what we are doing about it") builds trust and demonstrates that you know their child as a learner.',
      tips: [
        'Create student-facing progress trackers that visualise improvement across skills rather than just showing grades',
        'Hold "data conferences" — brief one-to-one conversations where students review their data and set targets',
        'When reporting to parents, lead with a strength, follow with the development area, and end with a specific action',
        'Use the platform\'s parent-facing features to share engagement and progress data automatically',
      ],
      examples: [
        {
          scenario: 'A parent is concerned that their child "isn\'t making progress" despite the student\'s data showing steady improvement in specific skills',
          approach:
            'Show the parent the granular data: "At the start of term, Aisha was scoring 40% on analytical writing. Her most recent score is 62%. She has moved from Band 2 to Band 3 in her analysis, which means she is now explaining the effects of techniques rather than just identifying them. This is significant progress, even though her overall grade hasn\'t changed yet — grade boundaries require improvement across all skills, and analysis was her main barrier. We are now working on embedding context, which is the next step to unlocking that grade change."',
        },
      ],
    },
  ],
  relatedResources: [
    { type: 'guide', id: 'essay-marking', title: 'How to Mark Essays Effectively' },
    { type: 'guide', id: 'exam-preparation', title: 'Preparing Students for Exams' },
  ],
}
