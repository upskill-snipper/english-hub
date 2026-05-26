// @ts-nocheck
import type { BoardExamGuide } from './types'

export const igcseGuide: BoardExamGuide = {
  boardId: 'IGCSE',
  boardName: 'Edexcel IGCSE',
  boardColor: '#8B5CF6',

  overview: `
    <p>
      Pearson Edexcel International GCSE English Language A (<strong>4EA1</strong>) is one of the most widely sat
      international qualifications in British schools overseas, international schools, and independent schools in
      the UK. It is graded <strong>9-1</strong>, mirroring the domestic GCSE scale, and is recognised by universities
      and employers worldwide. The qualification is structured across <strong>two papers</strong>: Paper 1 focuses on
      non-fiction reading and transactional writing, while Paper 2 combines poetry from a set anthology with
      imaginative/creative writing.
    </p>
    <p>
      The most distinctive feature of the IGCSE English Language A specification is its <strong>45-poem anthology</strong>,
      organised into <strong>six thematic clusters</strong> - the largest anthology of any English qualification at this
      level. The clusters are: <em>Culture and Identity</em>, <em>Belonging</em>, <em>Conflict</em>,
      <em>War and its Aftermath</em>, <em>Time and Place</em>, and <em>The Natural World</em>. Students study poems
      from all six clusters, and the examination may draw from any of them. This breadth demands sustained revision
      across a wide range of poetic voices, periods, and traditions - from Romantic and Victorian poets through to
      modern and contemporary writers.
    </p>
    <p>
      Unlike the domestic Edexcel GCSE, the IGCSE has <strong>no spoken language endorsement</strong>. Assessment is
      entirely through written examinations. Paper 1 carries <strong>60%</strong> of the total marks and Paper 2
      carries <strong>40%</strong>, making Paper 1 the critical paper for overall grade outcomes. The specification
      shares Edexcel's emphasis on <strong>"Reading as a Writer"</strong> - the principle that students should analyse
      how writers craft language for deliberate effect, rather than simply identifying techniques.
    </p>
    <p>
      Strategic advice for IGCSE students centres on three priorities. First, invest heavily in Paper 1, which
      dominates the weighting - strong reading comprehension and confident transactional writing here can secure
      the majority of your grade. Second, for Paper 2 poetry, ensure you have studied poems across <strong>all six
      clusters</strong>, with at least two poems per cluster memorised in detail (key quotations, form, context).
      Third, practise the comparison element of the poetry question rigorously - the exam asks you to compare an
      unseen poem with one from the anthology, requiring both analytical flexibility and deep anthology knowledge.
      Finally, in all writing tasks, prioritise <strong>accuracy</strong> - spelling, punctuation, and grammar are
      assessed explicitly and can make the difference between adjacent grades.
    </p>
  `,

  specCodes: [
    { subject: 'English Language A', code: '4EA1' },
    { subject: 'English Language B', code: '4EB1' },
  ],

  // ─── Language Assessment Objectives ──────────────────────────────────────────
  languageAOs: [
    {
      code: 'AO1',
      description:
        'Read and understand a variety of texts, selecting and interpreting information, ideas and perspectives.',
      weighting: '~25%',
    },
    {
      code: 'AO2',
      description:
        'Understand and analyse how writers use linguistic and structural devices to achieve their effects, using relevant terminology to support their views.',
      weighting: '~25%',
    },
    {
      code: 'AO3',
      description:
        "Explore links and connections between writers' ideas and perspectives, as well as how these are conveyed.",
      weighting: '~10%',
    },
    {
      code: 'AO4',
      description:
        'Communicate effectively and imaginatively, adapting form, tone and register for different purposes and audiences. Organise information and ideas, using structural and grammatical features to support coherence and cohesion.',
      weighting: '~25%',
    },
    {
      code: 'AO5',
      description:
        'Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation.',
      weighting: '~15%',
    },
  ],

  // ─── Literature Assessment Objectives ────────────────────────────────────────
  literatureAOs: [
    {
      code: 'AO1',
      description:
        'A close knowledge of the content of the poetry anthology and the ability to refer to it in detail.',
      weighting: '~30%',
    },
    {
      code: 'AO2',
      description:
        'Understanding and analysis of how writers use linguistic, structural and presentational devices to achieve their effects, with appropriate use of terminology.',
      weighting: '~40%',
    },
    {
      code: 'AO4',
      description:
        "A personal and informed response to the poems studied, showing engagement with and understanding of the writers' ideas and attitudes.",
      weighting: '~30%',
    },
  ],

  // ─── Language Papers ─────────────────────────────────────────────────────────
  languagePapers: [
    // ── Paper 1: Non-fiction Texts & Transactional Writing ──
    {
      title: 'Paper 1: Non-fiction Texts and Transactional Writing',
      code: '4EA1/01',
      time: '2 hours 15 minutes',
      marks: 90,
      weighting: '60%',
      textType:
        'Non-fiction extracts (e.g. articles, letters, speeches, travel writing, autobiography)',
      sections: [
        {
          title: 'Section A: Reading',
          marks: 45,
          questions: [
            {
              question: 'Q1 - Short-answer comprehension questions on a non-fiction extract',
              marks: 10,
              ao: 'AO1',
              skill: 'Information retrieval and inference',
              time: '10-12 minutes',
              advice:
                'Read the extract carefully before answering. These questions test your ability to locate explicit information and make simple inferences. Keep answers concise and use evidence from the text.',
            },
            {
              question:
                'Q2 - Explain how the writer uses language and structure to achieve effects',
              marks: 10,
              ao: 'AO2',
              skill: 'Language and structure analysis',
              time: '12-15 minutes',
              advice:
                'Focus on specific word choices, imagery, and structural decisions. Embed short quotations and analyse the <em>effect</em> of each technique rather than simply naming it. The "Reading as a Writer" principle applies here - think about <em>why</em> the writer made these choices.',
            },
            {
              question: "Q3 - Compare writers' ideas and perspectives across two non-fiction texts",
              marks: 15,
              ao: 'AO1 + AO3',
              skill: 'Comparison and synthesis',
              time: '18-20 minutes',
              advice:
                'You must address <strong>both</strong> texts with equal depth. Structure your response comparatively - do not write about one text then the other. Identify similarities and differences in the writers\' viewpoints and the methods they use to convey them. Use connectives like "whereas", "similarly", "in contrast".',
            },
            {
              question: 'Q4 - Analyse how language is used in a specified section of the text',
              marks: 10,
              ao: 'AO2',
              skill: 'Close language analysis',
              time: '12-15 minutes',
              advice:
                'This question demands detailed, word-level analysis. Select precise quotations and explore connotations, figurative language, and tone. Avoid feature-spotting - every technique identified must be linked to its effect on the reader.',
            },
          ],
        },
        {
          title: 'Section B: Transactional Writing',
          marks: 45,
          questions: [
            {
              question:
                'Q5 - Transactional writing task (e.g. letter, article, speech, report, review)',
              marks: 20,
              ao: 'AO4 (15) + AO5 (5)',
              skill: 'Transactional writing',
              time: '25-30 minutes',
              advice:
                'Match form, audience, and purpose precisely. Use rhetorical techniques (tricolon, anaphora, direct address) with control. A strong opening and clear paragraphing are essential. Proofread for accuracy - AO5 marks reward correct spelling, punctuation, and grammar.',
            },
            {
              question: 'Q6 - Second transactional writing task (different form from Q5)',
              marks: 25,
              ao: 'AO4 (19) + AO5 (6)',
              skill: 'Transactional writing',
              time: '30-35 minutes',
              advice:
                'This is the higher-tariff writing question. Adapt your style confidently to the specified form. Demonstrate range - varied sentence structures, ambitious vocabulary, and conscious structural choices. Plan for 3-5 minutes before writing. Accuracy remains critical.',
            },
          ],
        },
      ],
    },

    // ── Paper 2: Poetry & Prose Texts & Imaginative Writing ──
    {
      title: 'Paper 2: Poetry and Prose Texts and Imaginative Writing',
      code: '4EA1/02',
      time: '1 hour 30 minutes',
      marks: 60,
      weighting: '40%',
      textType:
        'Poetry from the Edexcel IGCSE anthology (45 poems across 6 clusters) + unseen poem',
      sections: [
        {
          title: 'Section A: Poetry',
          marks: 30,
          questions: [
            {
              question:
                'Q1 - Respond to an unseen poem and compare it with a named poem from the anthology',
              marks: 30,
              ao: 'AO1 + AO2 + AO4',
              skill: 'Poetry analysis and comparison',
              time: '45 minutes',
              advice:
                'This question is the centrepiece of Paper 2. You are given an unseen poem and asked to compare it with a named poem from the anthology. Read the unseen poem at least twice. Identify thematic and stylistic connections. Structure your response comparatively - weave analysis of both poems together rather than writing about them separately. AO2 is dominant: analyse language, form, and structure in both poems. Your anthology knowledge must be secure - you need to quote from memory.',
            },
          ],
        },
        {
          title: 'Section B: Imaginative Writing',
          marks: 30,
          questions: [
            {
              question: 'Q2 - Imaginative/creative writing from a choice of prompts',
              marks: 30,
              ao: 'AO4 (24) + AO5 (6)',
              skill: 'Imaginative/creative writing',
              time: '40-45 minutes',
              advice:
                'Choose the prompt that plays to your strengths. Plan for 5 minutes - a clear narrative arc or descriptive structure will score higher than unplanned writing. Use varied sentence lengths for effect, ambitious vocabulary, and conscious techniques (e.g. cyclical structure, symbolism, pathetic fallacy). Proofread carefully - AO5 rewards spelling and punctuation accuracy.',
            },
          ],
        },
      ],
    },
  ],

  // ─── Literature Papers (IGCSE is Language-only; left empty) ────────────────
  literaturePapers: [],

  // ─── Mark Bands ──────────────────────────────────────────────────────────────
  markBands: [
    {
      level: 5,
      descriptor: 'Exceptional, Conceptualised',
      ao1: 'Assured, perceptive interpretation with judicious and precise textual references integrated fluently',
      ao2: "Sophisticated analysis of writer's craft with precise, assured use of subject terminology; nuanced exploration of effects on the reader",
    },
    {
      level: 4,
      descriptor: 'Perceptive, Detailed',
      ao1: 'Critical, exploratory response demonstrating a secure understanding of the text with well-chosen references',
      ao2: "Detailed analysis of writer's methods with confident use of relevant subject terminology; clear exploration of effects on the reader",
    },
    {
      level: 3,
      descriptor: 'Clear, Relevant',
      ao1: 'Clear, sustained response with effective use of references to support interpretation',
      ao2: "Clear explanation of writer's methods with appropriate use of subject terminology; clear understanding of effects on the reader",
    },
    {
      level: 2,
      descriptor: 'Supported, Some',
      ao1: 'Some understanding demonstrated with references used to support a range of statements',
      ao2: "Some identification and comment on writer's methods with some use of subject terminology; some reference to effect on the reader",
    },
    {
      level: 1,
      descriptor: 'Simple, Limited',
      ao1: 'Simple, limited comment with occasional references that rarely support interpretation',
      ao2: "Simple awareness of writer's methods with limited use of subject terminology; little or no reference to effect",
    },
  ],

  // ─── Grade Boundaries ────────────────────────────────────────────────────────
  gradeBoundaries: [
    {
      year: '2025 (4EA1)',
      max: 150,
      grade9: 127,
      grade8: 118,
      grade7: 109,
      grade6: 97,
      grade5: 85,
      grade4: 74,
    },
    {
      year: '2024 (4EA1)',
      max: 150,
      grade9: 125,
      grade8: 116,
      grade7: 107,
      grade6: 95,
      grade5: 84,
      grade4: 73,
    },
    {
      year: '2023 (4EA1)',
      max: 150,
      grade9: 123,
      grade8: 114,
      grade7: 105,
      grade6: 93,
      grade5: 82,
      grade4: 71,
    },
  ],

  // ─── Examiner Tips ───────────────────────────────────────────────────────────
  examinerTips: [
    {
      question: 'Paper 1, Section A (Non-fiction Reading)',
      tips: [
        'The reading section carries 45 marks - nearly a third of the entire qualification. Approach it with the same seriousness as the writing tasks.',
        'For Q1 (retrieval), keep answers short and precise. Do not over-elaborate on simple comprehension questions.',
        'For Q2 and Q4 (language analysis), always explain the <em>effect</em> of techniques - naming a metaphor without exploring its impact will not access the higher mark bands.',
        'For Q3 (comparison), examiners consistently report that weaker responses focus too heavily on one text. Ensure genuine balance across both sources.',
      ],
    },
    {
      question: 'Paper 1, Section B (Transactional Writing)',
      tips: [
        'Accuracy is heavily rewarded. Proofread every response - common errors in spelling, apostrophes, and sentence demarcation cost marks across both AO4 and AO5.',
        'Match the conventions of the specified form precisely. A speech should use rhetorical devices and direct address; a letter needs appropriate opening/closing; an article needs a headline and subheading.',
        'Plan before you write. A well-structured response with a clear opening, developed middle, and purposeful conclusion will always outscore a longer but rambling answer.',
        'Q6 carries more marks than Q5 - allocate your time accordingly and do not rush the second task.',
      ],
    },
    {
      question: 'Paper 2, Section A (Poetry Comparison)',
      tips: [
        '<strong>This is the single most challenging question on the IGCSE.</strong> You must analyse an unseen poem and compare it with a named anthology poem - all from memory.',
        'Read the unseen poem at least twice before writing. Annotate it for key techniques, tone, and themes.',
        'Your anthology knowledge must be secure. You need to quote from the named poem from memory - vague paraphrasing will not access the higher mark bands.',
        'Structure comparatively throughout. The strongest responses weave analysis of both poems together, using connectives such as "similarly", "in contrast", "both poets employ".',
        'AO2 dominates - focus on <em>how</em> poets use language, form, and structure rather than simply <em>what</em> the poems are about.',
      ],
    },
    {
      question: 'Paper 2, Section B (Imaginative Writing)',
      tips: [
        'Choose the prompt that allows you to demonstrate your best writing. If you are stronger at narrative, choose a story prompt; if descriptive writing is your strength, choose accordingly.',
        'Conscious crafting scores higher than length. A shorter, carefully structured piece with deliberate language choices will outscore a long, unfocused response.',
        'Use techniques you have studied in the poetry anthology - imagery, symbolism, varied sentence structures, shifts in tone - to elevate your own writing.',
        'Leave 3-5 minutes to proofread. AO5 accuracy marks are the easiest to secure and the easiest to lose through carelessness.',
      ],
    },
    {
      question: 'General - Anthology Revision Strategy',
      tips: [
        'With 45 poems across 6 clusters, you cannot afford to revise selectively. The named poem in the exam could come from any cluster.',
        'Create a revision grid: for each poem, note the poet, era, key themes, form/structure, 2-3 key quotations, and a top comparison partner.',
        'Practise writing comparative paragraphs under timed conditions - aim for a developed comparison point in 8-10 minutes.',
        'Group poems thematically across clusters (e.g. all poems about loss, all poems using nature imagery) to build flexible comparison skills.',
      ],
    },
    {
      question: 'General - Time Management',
      tips: [
        'Paper 1 is 2 hours 15 minutes for 90 marks. Budget roughly 1.5 minutes per mark: ~55 minutes for reading, ~65 minutes for writing, ~15 minutes for planning and checking.',
        'Paper 2 is 1 hour 30 minutes for 60 marks. Budget ~45 minutes for the poetry question and ~45 minutes for the writing task.',
        'The most common examiner complaint is incomplete responses. Pace yourself and ensure every question receives a full answer.',
      ],
    },
  ],

  // ─── Key Changes ─────────────────────────────────────────────────────────────
  keyChanges: [
    {
      year: '2019',
      change:
        'The IGCSE English Language A specification (4EA1) was revised with updated anthology content and a move to the 9-1 grading scale, aligning with the domestic GCSE reform.',
    },
    {
      year: '2017',
      change:
        'Pearson confirmed 9-1 grading for all Edexcel International GCSEs, replacing the legacy A*-G scale. First teaching of the revised 4EA1 specification began.',
    },
    {
      year: '2024',
      change:
        'Updated poetry anthology with refreshed selection across all six clusters, maintaining the 45-poem structure but introducing several new contemporary voices.',
    },
  ],

  // ─── Poetry Anthology (45 poems across 6 clusters - representative selection) ─
  poems: [
    // ── Cluster 1: Culture and Identity ──
    {
      title: 'Search For My Tongue',
      poet: 'Sujata Bhatt',
      era: 'Contemporary',
      themes: ['Cultural identity', 'Language', 'Belonging', 'Displacement'],
      topComparison: 'Half-Caste',
      formAnalysis:
        "Bilingual poem incorporating Gujarati script. The extended metaphor of the tongue as a plant - dying, then regrowing - enacts the poem's central argument about the resilience of mother tongue.",
      keyQuotation: '"I thought I spit it out / but overnight while I dream, / it grows back"',
    },
    {
      title: 'Half-Caste',
      poet: 'John Agard',
      era: 'Contemporary',
      themes: ['Racial identity', 'Prejudice', 'Language and labelling', 'Humour as resistance'],
      topComparison: 'Search For My Tongue',
      formAnalysis:
        'Caribbean dialect and phonetic spelling challenge Standard English conventions. The poem\'s structure - a series of absurd hypotheticals - dismantles the logic of the term "half-caste" through reductio ad absurdum.',
      keyQuotation: '"Explain yuself / wha yu mean / when yu say half-caste"',
    },

    // ── Cluster 2: Belonging ──
    {
      title: 'Piano',
      poet: 'D. H. Lawrence',
      era: '20th Century',
      themes: ['Nostalgia', 'Childhood', 'Memory', 'Loss of innocence'],
      topComparison: 'Once Upon a Time',
      formAnalysis:
        "Three quatrains with a regular AABB rhyme scheme. The musical imagery (piano, singing) mirrors the poem's exploration of how sound triggers involuntary memory.",
      keyQuotation: '"In spite of myself, the insidious mastery of song / Betrays me back"',
    },
    {
      title: 'Once Upon a Time',
      poet: 'Gabriel Okara',
      era: '20th Century',
      themes: [
        'Authenticity vs. performance',
        'Colonialism',
        'Loss of innocence',
        'Father-child bond',
      ],
      topComparison: 'Piano',
      formAnalysis:
        'Seven stanzas of free verse with a conversational, confessional tone. The father addresses his son directly, creating an intimate dramatic monologue that shifts from cynicism to hope.',
      keyQuotation: '"So show me, son, / how to laugh; show me how / I used to laugh and smile"',
    },

    // ── Cluster 3: Conflict ──
    {
      title: 'The Class Game',
      poet: 'Mary Casey',
      era: 'Contemporary',
      themes: ['Class division', 'Social prejudice', 'Identity', 'Defiance'],
      topComparison: 'Half-Caste',
      formAnalysis:
        "Confrontational dramatic monologue in colloquial, working-class dialect. Rhetorical questions drive the poem's challenge to class-based assumptions. The irregular form mirrors the speaker's raw energy.",
      keyQuotation: '"How can you tell what class I\'m from? / Can you tell what class I\'m from?"',
    },
    {
      title: 'Exposure',
      poet: 'Wilfred Owen',
      era: 'World War I',
      themes: ['Suffering', 'Futility of war', 'Nature as enemy', 'Hopelessness'],
      topComparison: 'Dulce et Decorum Est',
      formAnalysis:
        'Eight stanzas of pararhyme (half-rhyme) with a shortened final line in each stanza, creating a sense of incompleteness and exhaustion. The present tense places the reader in the trenches.',
      keyQuotation: '"But nothing happens" - the refrain that encapsulates the futile waiting',
    },

    // ── Cluster 4: War and its Aftermath ──
    {
      title: 'Dulce et Decorum Est',
      poet: 'Wilfred Owen',
      era: 'World War I',
      themes: ['Horror of war', 'Propaganda', 'Suffering', 'Truth vs. lies'],
      topComparison: 'Exposure',
      formAnalysis:
        'Loosely sonnet-like structure subverted by the horror of its content. The shift from exhausted march to gas attack to bitter address demonstrates masterful structural control. Iambic pentameter fragments under the violence.',
      keyQuotation:
        '"If you could hear, at every jolt, the blood / Come gargling from the froth-corrupted lungs"',
    },
    {
      title: 'War Photographer',
      poet: 'Carol Ann Duffy',
      era: 'Contemporary',
      themes: ['Conflict', 'Guilt', 'Apathy', 'Suffering vs. comfort'],
      topComparison: 'Poppies',
      formAnalysis:
        "Four regular sestets with a near-rhyme scheme. The controlled form mirrors the photographer's professional detachment, while the content reveals his inner turmoil.",
      keyQuotation:
        '"A hundred agonies in black and white / from which his editor will pick out five or six"',
    },

    // ── Cluster 5: Time and Place ──
    {
      title: 'Ozymandias',
      poet: 'Percy Bysshe Shelley',
      era: 'Romantic',
      themes: ['Power and its transience', 'Hubris', 'Art vs. time', 'Empire'],
      topComparison: 'London',
      formAnalysis:
        'Irregular sonnet with an unusual rhyme scheme that breaks from both Petrarchan and Shakespearean conventions - the fractured form mirrors the shattered statue it describes.',
      keyQuotation: '"Look on my Works, ye Mighty, and despair! / Nothing beside remains"',
    },
    {
      title: 'London',
      poet: 'William Blake',
      era: 'Romantic',
      themes: ['Oppression', 'Poverty', 'Corruption', 'Social injustice'],
      topComparison: 'Ozymandias',
      formAnalysis:
        'Four quatrains with an ABAB rhyme scheme. The relentless regularity mirrors the inescapable systems of control the speaker observes. Anaphora of "In every" hammers the universality of suffering.',
      keyQuotation: '"In every cry of every Man, / In every Infant\'s cry of fear"',
    },

    // ── Cluster 6: The Natural World ──
    {
      title: 'Hawk Roosting',
      poet: 'Ted Hughes',
      era: '20th Century',
      themes: ['Power', 'Nature', 'Violence', 'Control', 'God complex'],
      topComparison: 'Ozymandias',
      formAnalysis:
        "Six quatrains of free verse spoken in the hawk's voice - a dramatic monologue of absolute authority. The lack of enjambment and end-stopped lines reflect the hawk's total self-assurance.",
      keyQuotation: '"I kill where I please because it is all mine"',
    },
    {
      title: 'Storm on the Island',
      poet: 'Seamus Heaney',
      era: 'Contemporary',
      themes: ["Nature's power", 'Fear', 'Vulnerability', 'Community resilience'],
      topComparison: 'Exposure',
      formAnalysis:
        'Blank verse (unrhymed iambic pentameter) in a single stanza. The conversational opening ("We are prepared") gives way to increasingly violent imagery as the storm asserts its dominance.',
      keyQuotation: '"It is a huge nothing that we fear"',
    },
  ],

  // ─── Unique Features ─────────────────────────────────────────────────────────
  uniqueFeatures: [
    'Largest poetry anthology of any English qualification at this level - 45 poems across 6 thematic clusters (Culture and Identity, Belonging, Conflict, War and its Aftermath, Time and Place, The Natural World)',
    'International curriculum designed for British schools overseas, international schools, and independent schools - recognised globally alongside domestic GCSEs',
    'No spoken language endorsement - assessment is entirely through written examinations, simplifying the qualification structure',
    'Shares the Edexcel "Reading as a Writer" philosophy with the domestic specification - students are expected to analyse how writers craft language for deliberate effect, not simply identify techniques',
    'Paper 2 poetry question requires comparison of an unseen poem with a named anthology poem, demanding both flexible analytical skills and secure memorisation of the anthology',
    'Two transactional writing tasks on Paper 1 (unlike some boards which offer only one), testing adaptability across different forms, audiences, and purposes',
    'Graded 9-1, fully aligned with the domestic GCSE grading scale, ensuring equivalence in university and employer recognition',
    'The 60/40 paper weighting heavily favours Paper 1 - strategic revision should prioritise non-fiction reading and transactional writing skills',
  ],
}
