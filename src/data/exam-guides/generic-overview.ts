// @ts-nocheck
// ─── Generic Overview: The English GCSE Landscape ───────────────────────────

export const genericOverview = {
  landscape: {
    title: 'The English GCSE Landscape',
    content: `
      <p><strong>English at GCSE level is split into two entirely separate qualifications:</strong> English Language and English Literature. You sit exams for both, you receive two separate grades (each on the 9–1 scale), and universities and employers see them independently on your results slip. This is important — doing brilliantly in Literature does <em>not</em> compensate for a weak Language grade, and vice versa.</p>

      <p><strong>No coursework counts towards your final grade.</strong> Since the 2015 reforms, both qualifications are assessed entirely by terminal examination. The only exception is the <strong>Spoken Language endorsement</strong> in English Language, which is reported separately on your certificate as Pass, Merit, or Distinction — it does not affect your 9–1 grade. Colleges and universities can see it, but it carries no numerical weight.</p>

      <p>In England, all exam boards are regulated by <strong>Ofqual</strong> (the Office of Qualifications and Examinations Regulation). This means that regardless of whether your school uses AQA, Edexcel (Pearson), OCR, or WJEC Eduqas, the following things are <em>identical</em>:</p>

      <ul>
        <li>The <strong>Assessment Objectives (AOs)</strong> — the skills being tested are defined by the Department for Education, not by individual boards</li>
        <li>The <strong>grading standard</strong> — a Grade 7 at AQA is meant to represent the same standard as a Grade 7 at Edexcel</li>
        <li>The <strong>subject content requirements</strong> — every board must cover a 19th-century novel, a Shakespeare play, a poetry anthology, and unseen poetry in Literature</li>
      </ul>

      <p><strong>So what actually differs between boards?</strong> Quite a lot in practice:</p>

      <ul>
        <li><strong>Question framing:</strong> AQA tends to give you a specific extract and ask you to analyse it; Edexcel often gives broader essay-style questions</li>
        <li><strong>Text choices:</strong> The set texts and poetry anthologies differ significantly — AQA's anthology includes poets like Simon Armitage and Carol Ann Duffy, while Edexcel features different selections</li>
        <li><strong>Paper structure:</strong> AQA splits Language into two papers (Explorations in Creative Reading/Writing and Writers' Viewpoints/Perspectives); Edexcel also uses two papers but with different emphases</li>
        <li><strong>Weighting of AOs:</strong> While the AOs are the same, boards weight them differently across papers — for instance, AQA gives roughly equal weight to reading and writing in Language, while other boards may lean more heavily on one</li>
        <li><strong>Mark allocation per question:</strong> The number of marks available for individual questions varies, which changes how long you should spend on each</li>
      </ul>

      <p><strong>The bottom line:</strong> The skills you need are universal. If you can analyse language closely, structure an argument clearly, and write with control and flair, you will do well on <em>any</em> board. The differences are tactical — knowing your board's specific question types and mark allocations lets you use your time and energy efficiently.</p>
    `
  },

  universalAOs: {
    language: [
      {
        code: 'AO1',
        description: 'Identify and interpret explicit and implicit information and ideas. Select and synthesise evidence from different texts.',
        weighting: '~20%'
      },
      {
        code: 'AO2',
        description: 'Explain, comment on and analyse how writers use language and structure to achieve effects and influence readers, using relevant subject terminology to support their views.',
        weighting: '~35%'
      },
      {
        code: 'AO3',
        description: 'Compare writers\' ideas and perspectives, as well as how these are conveyed, across two or more texts.',
        weighting: '~15%'
      },
      {
        code: 'AO4',
        description: 'Evaluate texts critically and support this with appropriate textual references.',
        weighting: '~15%'
      },
      {
        code: 'AO5',
        description: 'Communicate clearly, effectively and imaginatively, selecting and adapting tone, style and register for different forms, purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion of texts.',
        weighting: '~25%'
      },
      {
        code: 'AO6',
        description: 'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
        weighting: '~15%'
      },
      {
        code: 'AO7–AO9',
        description: 'These cover Spoken Language (AO7: presenting, AO8: listening/responding, AO9: using Standard English). They are assessed separately and reported as Pass/Merit/Distinction — they do not contribute to the 9–1 grade.',
        weighting: 'Separate endorsement'
      }
    ],
    literature: [
      {
        code: 'AO1',
        description: 'Read, understand and respond to texts. Maintain a critical style and develop an informed personal response. Use textual references, including quotations, to support and illustrate interpretations.',
        weighting: '~35%'
      },
      {
        code: 'AO2',
        description: 'Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.',
        weighting: '~35%'
      },
      {
        code: 'AO3',
        description: 'Show understanding of the relationships between texts and the contexts in which they were written.',
        weighting: '~15%'
      },
      {
        code: 'AO4',
        description: 'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
        weighting: '~15%'
      }
    ],
    keyPrinciple: 'AO1 and AO2 together account for approximately 70% of all Literature marks across every board. Context (AO3) matters but is secondary to close textual analysis.'
  },

  markSchemeExplainer: {
    title: 'How Level of Response Marking Works',
    content: `
      <p>Understanding how your work is actually marked is one of the most powerful advantages you can have. English exams do <strong>not</strong> use point-marking (where you get one mark per correct point). Instead, they use <strong>Level of Response</strong> marking — and this changes everything about how you should approach your answers.</p>

      <p><strong>Here is how it works in practice:</strong></p>

      <ol>
        <li><strong>The examiner reads your entire response first.</strong> They do not mark sentence by sentence. They read the whole thing to get an overall impression of the quality of your work.</li>
        <li><strong>They determine which Level best fits your response.</strong> Mark schemes typically have 4–6 levels (e.g., Level 1 = simple/limited, Level 4 = detailed/perceptive, Level 6 = critical/exploratory). The examiner decides which level descriptor best matches your response as a whole.</li>
        <li><strong>Individual errors do not automatically drag you down.</strong> If your response is consistently perceptive and analytical (Level 4/5) but you make one weak point, that single weak point does not pull you into Level 3. The examiner is looking at the <em>overall quality</em>.</li>
        <li><strong>Best-fit marking applies.</strong> Your response does not need to match every single bullet point in a level descriptor. The examiner places you in the level that is the <em>best fit</em> overall.</li>
        <li><strong>Mark within the level is determined by consistency.</strong> Once the examiner has placed you in a level (say Level 4, which might be 16–20 marks), they then decide where within that range you fall. A response that sustains Level 4 quality throughout gets 19–20; one that dips occasionally might get 16–17.</li>
      </ol>

      <p><strong>What this means for you:</strong></p>

      <ul>
        <li><strong>Consistency matters more than occasional brilliance.</strong> A response that is solidly analytical throughout will outscore one that has one brilliant paragraph surrounded by description.</li>
        <li><strong>You do not need to cover everything.</strong> Three well-developed analytical points will beat six surface-level observations.</li>
        <li><strong>Quality of expression counts.</strong> The way you write your analysis — your critical vocabulary, the fluency of your argument, the precision of your language — is part of how examiners judge your level.</li>
        <li><strong>Spelling mistakes in your analysis will not kill your grade</strong> (unless they are so frequent they impede meaning). The examiner is assessing your analytical thinking, not running a spell-check.</li>
      </ul>
    `
  },

  level3ToLevel4: {
    title: 'What Moves You from Level 3 to Level 4/5',
    subtitle: 'The Most Important Transition: Grade 6-7 → Grade 8-9',
    comparisons: [
      {
        level3: 'The writer uses a metaphor to show fear',
        level45: 'The metaphor positions the reader to experience the narrator\'s fear from the inside — the simile \'like a caged bird\' both evokes the physical constraint and the psychological imprisonment, suggesting that fear is not merely felt but <em>inhabited</em>.'
      },
      {
        level3: 'Context added as separate paragraph at the end',
        level45: 'Context woven into analysis: "Writing in 1945, with the Welfare State being created around him, Priestley weaponises Birling\'s obliviousness — his confident prediction that \'the Titanic…unsinkable\' becomes dramatic irony that the original audience would have felt viscerally."'
      },
      {
        level3: 'This is effective because it creates tension',
        level45: 'This is particularly effective because it positions the reader to anticipate the revelation before it is made explicit — Stevenson withholds the name but saturates the description with enough sensory revulsion that the reader constructs their own version of Hyde before the text confirms it.'
      },
      {
        level3: 'Dickens presents Scrooge as greedy',
        level45: 'Dickens constructs Scrooge less as a psychologically complex individual than as a moral argument — his transformation is deliberately rapid because Dickens is not interested in realistic character development; he is writing a polemic designed to shame his middle-class readership into charitable action before Christmas Day.'
      }
    ]
  },

  gradeBoundarySummary: {
    title: 'Grade Boundaries Across All Boards (2025)',
    insight: 'Even Grade 9 English Language at AQA requires only 74.4%. Getting everything right is not expected — what earns the top grade is quality of analytical writing, not perfection.',
    boards: [
      {
        board: 'AQA 8700',
        subject: 'Language',
        max: 160,
        grade9: '119 (74.4%)',
        grade7: '100 (62.5%)',
        grade4: '73 (45.6%)'
      },
      {
        board: 'AQA 8702',
        subject: 'Literature',
        max: 160,
        grade9: '136 (85%)',
        grade7: '108 (67.5%)',
        grade4: '62 (38.8%)'
      },
      {
        board: 'Edexcel 1EN0',
        subject: 'Language',
        max: 160,
        grade9: '131 (81.9%)',
        grade7: '115 (71.9%)',
        grade4: '86 (53.8%)'
      },
      {
        board: 'Edexcel 1EN2',
        subject: 'Language',
        max: 160,
        grade9: '140 (87.5%)',
        grade7: '121 (75.6%)',
        grade4: '86 (53.8%)'
      },
      {
        board: 'Edexcel 1ET0',
        subject: 'Literature',
        max: 160,
        grade9: '135 (84.4%)',
        grade7: '115 (71.9%)',
        grade4: '73 (45.6%)'
      }
    ]
  }
};
