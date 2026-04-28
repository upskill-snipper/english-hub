/**
 * poetry-comparison-pptx-lessons.ts
 *
 * Three high-quality poetry comparison lesson plans for PowerPoint generation.
 * Focuses on AQA Power & Conflict anthology poems.
 * Shelley and Browning poems are public domain — quoted freely.
 * Armitage and Duffy poems are in copyright — referenced by title/theme only,
 * with no extended quotations. Teachers should use their anthology copies.
 *
 * Uses the LessonPlanData interface from generate-teaching-pdf.
 */

import type { LessonPlanData } from '@/lib/generate-teaching-pdf'

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 1: Ozymandias vs My Last Duchess — Power
// ═══════════════════════════════════════════════════════════════════════════

const lesson1: LessonPlanData = {
  title: 'Ozymandias vs My Last Duchess — Comparing Presentations of Power',
  duration: '55 minutes',
  yearGroup: 'Year 10/11',
  examBoard: 'AQA',
  text: 'AQA Power & Conflict Poetry Anthology',
  objectives: [
    "Analyse how Shelley presents the transience of political power in 'Ozymandias'",
    "Analyse how Browning presents the abuse of domestic and political power in 'My Last Duchess'",
    'Develop comparative analytical skills using connectives of similarity and difference',
    'Explore how both poets use dramatic voice and irony to critique powerful figures',
    'Practise structuring a comparison essay using the alternating (point-by-point) method',
  ],
  starterActivity: {
    title: 'What Is Power? A Definition Challenge',
    duration: '7 minutes',
    instructions:
      '1. Display the word POWER in large letters on the board.\n2. Students write a definition of power in ONE sentence (1 minute).\n3. Now display four types of power:\n   (a) Political power — control over a country or government\n   (b) Personal/domestic power — control over other people in private life\n   (c) Military power — control through force and violence\n   (d) Power over time — the ability (or inability) to be remembered\n4. Students discuss in pairs (2 minutes): which type of power is most valuable? Which is most dangerous?\n5. Cold-call three pairs.\n6. Teacher bridges: \'Today we compare two poems about powerful men. Ozymandias was a pharaoh who built an empire — but his power did not survive. The Duke in "My Last Duchess" controls everything in his world — including whether his wife lives or dies. Both poems ask: what does power really mean if it can be destroyed by time or corrupted by cruelty?\'\n7. Display the two poem titles and authors on the board.',
    differentiation: {
      support:
        "Provide the four types of power pre-printed on a card. Students match each type to one of the two poems after the teacher's introduction. Define: transience, tyranny, domestic power, irony.",
      core: 'Students write their own definition and engage in the pair discussion independently.',
      stretch:
        "Students add a fifth type of power: the power of ART and WRITING to outlive political rulers. 'Ozymandias is forgotten, but Shelley's poem about him is immortal.' What does this suggest about poetry's relationship to power?",
    },
  },
  mainActivities: [
    {
      title: 'Ozymandias: The Fall of a Tyrant (Shelley, 1818)',
      duration: '15 minutes',
      instructions:
        "1. Teacher reads 'Ozymandias' aloud. Students follow on their anthology copies.\n2. Brief context (2 minutes): Percy Bysshe Shelley was a Romantic poet and political radical. He hated tyranny and monarchy. The poem describes a ruined statue in the desert — all that remains of a once-mighty king.\n3. Display four key quotations on the board (all public domain):\n   (a) 'Two vast and trunkless legs of stone / Stand in the desert.'\n   (b) 'Half sunk, a shattered visage lies'\n   (c) 'My name is Ozymandias, King of Kings: / Look on my Works, ye Mighty, and despair!'\n   (d) 'Nothing beside remains. Round the decay / Of that colossal Wreck, boundless and bare / The lone and level sands stretch far away.'\n4. Students annotate each quotation (7 minutes). Focus questions:\n   (a) What has happened to the statue? What does its ruined state symbolise about political power?\n   (b) The inscription commands people to 'Look on my Works... and despair!' — but there are no works left. What technique is this? (irony) What is the effect?\n   (c) What does the phrase 'boundless and bare' suggest? How does the alliteration emphasise the emptiness?\n   (d) Shelley uses a sonnet — a form associated with love. Why might he use a love poem's structure for a poem about a tyrant?\n5. Cold-call three students for their annotations.\n6. Key point: 'Shelley's central argument is that political power is transient — it does not survive. Nature (the desert) and time destroy everything human rulers build. The irony is devastating: Ozymandias demanded that people despair at his greatness, but the only thing to despair at is how completely he has been erased.'",
      differentiation: {
        support:
          "Provide the four quotations on annotation cards with one guided question per quotation. Include a glossary: transience, irony, alliteration, sonnet, tyranny, hubris. Define 'Ozymandias' as the Greek name for Pharaoh Ramesses II.",
        core: 'Students annotate all four quotations independently, identifying technique and effect. Write the key point in their books.',
        stretch:
          "Students explore Shelley's political radicalism: he believed that all monarchies and empires would eventually fall. How does the poem function as a political statement as well as a literary one? Is Shelley predicting the fall of the British Empire?",
      },
    },
    {
      title: "My Last Duchess: The Duke's Chilling Control (Browning, 1842)",
      duration: '12 minutes',
      instructions:
        "1. Teacher reads 'My Last Duchess' aloud, using a measured, controlling tone for the Duke.\n2. Brief context (2 minutes): Robert Browning wrote this dramatic monologue from the perspective of a Renaissance Italian duke who is showing a portrait of his previous wife — who is now dead. The Duke is speaking to an envoy negotiating his next marriage.\n3. Students answer three questions in their books (5 minutes), using their anthology copies:\n   (a) What bothered the Duke about the Duchess? Find evidence of what she did that angered him.\n   (b) The Duke says he 'gave commands; / Then all smiles stopped together.' What do you think happened? Why does Browning leave this ambiguous?\n   (c) The Duke treats his dead wife as a possession — a painting he can control. How does the line 'since none puts by / The curtain I have drawn for you, but I' reinforce this?\n4. Class discussion (3 minutes): 'The Duke's power is not political — it is personal. He controls who sees the painting, who hears the story, and who enters his next marriage. What type of power is this?'\n5. Key point: 'Browning presents power as control over other people — specifically, control over a woman who refused to be controlled. The dramatic monologue is brilliant because the Duke reveals his own monstrousness without realising it. He thinks he is impressive; the reader is horrified.'",
      differentiation: {
        support:
          'Provide a character card explaining who the Duke is, who the Duchess was, and who he is speaking to. Highlight key lines in the anthology for students to focus on. Supply sentence starters for each question.',
        core: 'Students answer all three questions independently using their anthology and write the key point.',
        stretch:
          "Students compare the Duke to a modern controlling partner. Is Browning's poem an early critique of coercive control? How does the dramatic monologue form (the victim has no voice; only the abuser speaks) mirror the power dynamic in abusive relationships?",
      },
    },
    {
      title: 'Comparison Writing: Connecting the Two Poems',
      duration: '15 minutes',
      instructions:
        "1. Display the exam-style question: 'Compare how poets present ideas about power in \"Ozymandias\" and one other poem from the anthology.'\n2. Teacher models the alternating comparison structure:\n   Point 1: BOTH poets present powerful men who believe they are untouchable.\n   Ozymandias evidence → analysis\n   HOWEVER, the Duke in 'My Last Duchess'... → analysis\n   Point 2: BOTH poets use irony to undermine the powerful figure.\n   (Continue pattern.)\n3. Display key comparison connectives: Similarly / In contrast / However / While Shelley... Browning... / Both poets... but...\n4. Students write ONE comparison point (8 minutes): choose one similarity or difference between the poems. Write two linked PEEL paragraphs — one per poem — connected by a comparison connective.\n5. Peer assessment (3 minutes): partner checks for (a) reference to BOTH poems, (b) a comparison connective, (c) quotation from at least one poem, (d) technique analysis.\n6. Two volunteers share. Teacher identifies what makes the comparison effective.",
      differentiation: {
        support:
          'Provide a comparison scaffold:\n\'Both Shelley and Browning present powerful men who...\nIn "Ozymandias", Shelley shows this through... (quotation + analysis)\nSimilarly / However, in "My Last Duchess", Browning presents... (quotation + analysis)\nThe key difference/similarity is...\'',
        core: 'Students write a full comparison point independently using the alternating structure with connectives.',
        stretch:
          'Students write two comparison points covering: (1) the type of power each poem explores (political vs personal), (2) the tone each poet uses to critique that power (dramatic irony in both, but different registers). Include analysis of form: sonnet vs dramatic monologue.',
      },
    },
  ],
  plenary: {
    title: 'Which Power Is More Dangerous?',
    instructions:
      "1. Display the question: 'Which type of power is more dangerous — Ozymandias's political tyranny or the Duke's personal control?'\n2. Students vote on mini-whiteboards: OZYMANDIAS or DUKE.\n3. Teacher selects one from each side to justify with evidence.\n4. Closing thought: 'Shelley's answer is that political power is ultimately meaningless — time destroys it. Browning's answer is more chilling: personal power can destroy a person completely, and the powerful figure never has to answer for it.'\n5. Students write one sentence: 'The most important thing I learned about comparing poems today is...'",
    differentiation: {
      support:
        "Provide sentence starters: 'I think [Ozymandias's / the Duke's] power is more dangerous because...'",
      core: 'Students vote independently and justify with textual evidence.',
      stretch:
        'Students consider: which poem would be more effective as a warning to a modern audience? Why? What does each poem say about power that is still relevant today?',
    },
  },
  keyVocabulary: [
    'comparison — examining similarities and differences between two texts',
    "transience — the quality of being temporary or short-lived; central to 'Ozymandias'",
    'tyranny — cruel and oppressive exercise of power; Ozymandias as tyrant',
    'dramatic monologue — a poem spoken by a single character, revealing their personality to the reader',
    'irony — a contrast between appearance and reality, or between what is said and what is meant',
    "hubris — excessive pride that leads to downfall; Ozymandias's fatal flaw",
    "patriarchal power — male dominance over women; the Duke's control over the Duchess",
    'coercive control — a pattern of domination through intimidation, isolation, and manipulation',
    'sonnet — a 14-line poem; Shelley subverts the love sonnet form for political critique',
    'enjambment — lines that run on without punctuation, creating a sense of flow or urgency',
    'alliteration — repetition of initial consonant sounds for emphasis or rhythm',
    'semantic field — a group of words related to the same topic',
    'juxtaposition — placing contrasting ideas side by side for effect',
    'alternating structure — a comparison method that moves back and forth between texts point by point',
    'connective — a word or phrase that links ideas (similarly, however, in contrast, while)',
  ],
  resourcesNeeded: [
    'AQA Power & Conflict Poetry Anthology — student copies (or photocopied poems)',
    'Projector for quotation displays, comparison structure model, and connectives list',
    'Annotation cards for support-tier students (Ozymandias quotations with guided questions)',
    'Comparison scaffold handout for support-tier students',
    'Character card for the Duke (support tier)',
    'Glossary handout for support-tier students',
    'Mini-whiteboards and pens for plenary',
  ],
  homework:
    'Write a 300-word comparison essay response to the question:\n\'Compare how poets present powerful figures in "Ozymandias" and "My Last Duchess".\'\n\nSuccess criteria:\n- Use the alternating comparison structure (point → Poem A evidence/analysis → connective → Poem B evidence/analysis)\n- Include at least two embedded quotations from each poem\n- Analyse at least one language technique per poem\n- Use comparison connectives throughout (similarly, however, in contrast, while)\n- Include at least one comment on form or structure (sonnet vs dramatic monologue)\n- Write in PEEL paragraphs with formal academic register',
  teacherNotes: [
    'Poetry comparison is the skill students find hardest in the AQA exam. This lesson explicitly teaches the alternating structure, which is the most effective method for comparison. Insist that every paragraph references BOTH poems — a common error is writing two separate essays under one title.',
    'Ozymandias quotations are public domain (Shelley died 1822). My Last Duchess quotations are also public domain (Browning died 1889). Both can be quoted freely and at length. This is a rare luxury in the GCSE poetry anthology — use it.',
    "The comparison connectives are a learnable tool. Display them permanently in the classroom. Students who consistently use 'Similarly', 'In contrast', 'However', and 'While X... Y...' will produce more cohesive comparisons and score higher on AO1.",
    "The 'Which power is more dangerous?' plenary provokes genuine debate. Let it run if students are engaged — the ability to argue both sides is the evaluative skill the mark scheme rewards.",
    'Timing note: this lesson is tightly packed. If the Ozymandias annotation runs long, shorten the My Last Duchess section by providing the key point directly rather than building it through discussion. The comparison writing in Activity 3 is the highest-value section — protect this time.',
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 2: Remains vs War Photographer — Conflict and Memory
// ═══════════════════════════════════════════════════════════════════════════

const lesson2: LessonPlanData = {
  title: 'Remains vs War Photographer — Conflict, Memory & Psychological Damage',
  duration: '55 minutes',
  yearGroup: 'Year 10/11',
  examBoard: 'AQA',
  text: 'AQA Power & Conflict Poetry Anthology',
  objectives: [
    "Analyse how Armitage presents the lasting psychological damage of killing in 'Remains'",
    "Analyse how Duffy presents the moral burden of witnessing and recording suffering in 'War Photographer'",
    'Compare how both poets use structure and imagery to convey the persistence of traumatic memory',
    'Explore the theme of moral responsibility: who is accountable for the suffering caused by conflict?',
    'Practise writing a timed comparison paragraph under exam conditions',
  ],
  starterActivity: {
    title: 'Can You Unsee Something?',
    duration: '6 minutes',
    instructions:
      "1. Display the question: 'Have you ever seen something you wish you could forget? What does it feel like when a memory you do not want keeps coming back?'\n2. Students write three sentences describing the experience of an unwanted memory — NOT the content, but the FEELING (2 minutes). How does it arrive? Can you control it? What does it do to your mood?\n3. Pair-share (2 minutes).\n4. Cold-call two students. Write key words on the board: intrusive, uncontrollable, vivid, haunting.\n5. Teacher bridges: 'Both of today's poems are about people who CANNOT forget what they have seen. In \"Remains\", a soldier kills a looter and the image stays with him forever. In \"War Photographer\", a photographer develops images of war and carries the emotional weight of suffering that the public ignores. Both poems ask: what happens to a person when they carry memories of violence that the rest of the world moves on from?'",
    differentiation: {
      support:
        "Provide sentence starters: 'An unwanted memory feels like... It arrives when... I cannot control it because...' Define: intrusive memory, PTSD, psychological trauma.",
      core: 'Students write independently and contribute vocabulary to the board.',
      stretch:
        'Students consider the difference between CHOOSING to remember and being FORCED to remember. Which is more psychologically damaging? How might this distinction apply to a soldier vs a photographer?',
    },
  },
  mainActivities: [
    {
      title: 'Remains: The Soldier Who Cannot Forget (Armitage)',
      duration: '15 minutes',
      instructions:
        "1. Teacher reads 'Remains' aloud. Use a flat, almost casual tone for the opening and allow it to become more disturbed and fragmented as the poem progresses.\n2. Brief context (2 minutes): Simon Armitage based this poem on real testimonies from soldiers returning from Iraq and Afghanistan. The poem's speaker shot a looter and cannot stop replaying the moment.\n3. Students annotate their anthology copies using four focus questions (7 minutes):\n   (a) The poem opens with colloquial, almost casual language ('On another occasion, we got sent out'). Why does Armitage begin so casually? What is the effect when the tone shifts?\n   (b) Find the repetition of 'probably armed, possibly not.' What does the uncertainty suggest about the soldier's guilt?\n   (c) The final stanza shifts to present tense and the image 'stays with me.' How does the tense change convey the persistence of trauma?\n   (d) 'His blood-shadow stays on the street' — the dead man becomes a permanent stain. What does this image symbolise?\n4. Cold-call three students.\n5. Key point: 'Armitage structures \"Remains\" to mimic the experience of trauma: the casual beginning mirrors how the soldier initially processes the event (\"just another day\"), but the poem's descent into fragmented, present-tense imagery mirrors the moment when the memory becomes inescapable. The poem itself becomes the intrusive memory.'",
      differentiation: {
        support:
          'Provide an annotation guide card with the four questions and page/line references. Pre-highlight the tense shift in the final stanza. Define: colloquial, present tense, PTSD, intrusive memory.',
        core: 'Students annotate independently and write the key point. Identify the structural shift from past to present tense.',
        stretch:
          "Students write a paragraph on Armitage's use of form: the poem does not rhyme, does not follow a regular metre, and fragments as it progresses. How does the disintegration of poetic form mirror the disintegration of the speaker's mental state?",
      },
    },
    {
      title: 'War Photographer: The Witness Who Cannot Share (Duffy)',
      duration: '12 minutes',
      instructions:
        "1. Teacher reads 'War Photographer' aloud. Use a measured, controlled tone — the photographer is calm and professional, but something is breaking beneath the surface.\n2. Brief context (2 minutes): Carol Ann Duffy wrote this poem about war photographers who document atrocities and then return to 'ordinary England.' The poem explores the gap between what the photographer has witnessed and what the public is willing to see.\n3. Students answer three questions in their books (5 minutes):\n   (a) The photographer is described as working 'In his darkroom he is finally alone.' Why is solitude important? What does the darkroom symbolise?\n   (b) Find evidence that the public does not care about the photographs. What does this indifference suggest about society's relationship with war?\n   (c) The poem ends with the photographer flying back to a conflict zone. What does this cyclical structure suggest about the nature of his burden?\n4. Class discussion (3 minutes): 'Who is more morally responsible: the soldier who kills, or the public who looks at the photograph and then turns the page?'\n5. Key point: 'Duffy presents the war photographer as a moral intermediary — someone who carries the suffering of the world so that others do not have to. But the public's indifference renders his sacrifice meaningless. The poem critiques not war itself but the comfortable society that consumes images of suffering without feeling anything.'",
      differentiation: {
        support:
          "Provide a summary card explaining the poem's scenario: who, where, what he does, how he feels. Supply guided questions with line references and sentence starters.",
        core: 'Students answer all three questions independently and contribute to the discussion.',
        stretch:
          "Students connect the poem to modern media: we see more images of conflict than ever before (social media, 24-hour news). Has exposure made us more empathetic or more numb? How would Duffy respond to the 'scroll past' culture of 2024?",
      },
    },
    {
      title: 'Comparison Practice: Memory and Responsibility',
      duration: '12 minutes',
      instructions:
        '1. Display the exam-style question: \'Compare how poets present the lasting effects of conflict in "Remains" and "War Photographer".\'\n2. Display a comparison planning grid:\n   Similarity 1: Both present characters haunted by what they have witnessed.\n   Difference 1: The soldier participated in violence; the photographer only witnessed it.\n   Similarity 2: Both use structural techniques to convey the persistence of memory.\n   Difference 2: The soldier\'s guilt is personal; the photographer\'s burden is moral and societal.\n3. Students choose one row from the planning grid and write a comparison point (8 minutes): one PEEL paragraph per poem, connected by a comparison connective.\n4. Quick share (3 minutes): two volunteers read their comparison points.\n5. Teacher feedback: identify where the connective links the two poems and where the analysis goes beyond plot summary.',
      differentiation: {
        support:
          'Provide the planning grid pre-filled and a comparison scaffold with sentence starters for both poems. Students follow the scaffold for their chosen row.',
        core: 'Students select a row and write a comparison point independently using the alternating structure.',
        stretch:
          "Students write TWO comparison points and link them with a thread sentence: 'While both poets explore the persistence of memory, the nature of the moral burden is fundamentally different...'",
      },
    },
  ],
  plenary: {
    title: 'Who Suffers More?',
    instructions:
      "1. Display the question: 'Whose suffering is greater — the soldier in \"Remains\" or the photographer in \"War Photographer\"?'\n2. Students vote: SOLDIER or PHOTOGRAPHER.\n3. Teacher selects one from each side to justify.\n4. Closing thought: 'The answer may be that both suffer from the same wound — the inability to forget what they have seen — but the causes are different. The soldier's trauma is personal guilt; the photographer's is moral isolation. Armitage and Duffy both argue that conflict does not end when the fighting stops — it continues in the minds of those who witnessed it.'\n5. Students write one sentence: 'The most important similarity between these poems is...'",
    differentiation: {
      support:
        "Provide sentence starters for justification: 'I think the soldier / photographer suffers more because...'",
      core: 'Students vote and justify with a reference to a specific line or image from one of the poems.',
      stretch:
        'Students argue that the question misses the point — both poems are ultimately about the FAILURE of society to share the burden of conflict. The real accusation is directed at the reader, not at the sufferer.',
    },
  },
  keyVocabulary: [
    'PTSD — Post-Traumatic Stress Disorder; a psychological condition caused by experiencing or witnessing trauma',
    'intrusive memory — an unwanted, involuntary recollection of a traumatic event',
    "colloquial language — informal, everyday speech; used by Armitage to create an authentic soldier's voice",
    'present tense — verb tense indicating actions happening now; shifts to present tense convey the immediacy of trauma',
    'cyclical structure — a narrative or poem that ends where it began, suggesting repetition or entrapment',
    'dramatic monologue — a poem spoken by a single character, revealing their perspective',
    'moral responsibility — the obligation to act ethically; who is accountable for the effects of conflict?',
    "indifference — lack of interest, concern, or sympathy; the public's reaction to war photography",
    'semantic field — a group of words related to the same topic (e.g. war: blood, shadow, conflict)',
    'enjambment — lines that run on without punctuation, creating urgency or disorientation',
    'caesura — a deliberate pause within a line of poetry, often conveying hesitation or emotional weight',
    'stanza — a grouped set of lines in a poem, functioning like a paragraph',
    'juxtaposition — placing contrasting images or ideas together for dramatic effect',
    'symbolism — using a concrete image to represent an abstract idea',
    "tone — the mood or attitude conveyed by the poet's word choices",
  ],
  resourcesNeeded: [
    'AQA Power & Conflict Poetry Anthology — student copies',
    'Projector for quotation displays, planning grid, and comparison scaffold',
    'Annotation guide cards for support-tier students (both poems)',
    'Comparison planning grid handout (one per student)',
    'Comparison scaffold for support-tier students',
    'Glossary handout for support-tier students',
    'Mini-whiteboards for plenary vote',
  ],
  homework:
    'Write a 300-word comparison response to the question:\n\'Compare how poets present the effects of conflict on individuals in "Remains" and "War Photographer".\'\n\nSuccess criteria:\n- Use the alternating comparison structure throughout\n- Include at least one reference per poem (note: avoid quoting more than a short phrase from Armitage or Duffy — paraphrase and analyse the effect)\n- Analyse at least one structural or language technique per poem\n- Use comparison connectives in every paragraph\n- Comment on the poets\' different perspectives: participant vs witness\n- Write in PEEL paragraphs with formal academic register',
  teacherNotes: [
    "Copyright note: 'Remains' (Simon Armitage, 2008) and 'War Photographer' (Carol Ann Duffy, 1985) are both in copyright. Do NOT reproduce extended quotations on student-facing materials. Students should work from their anthology copies. On PowerPoint slides, display short phrases (under 10 words) for annotation purposes, which falls within fair dealing for educational use.",
    "The colloquial → formal tonal shift in 'Remains' is one of the most effective structural features in the anthology. Students who can track and analyse this shift score highly on AO2.",
    "The 'scroll past' connection to modern media (stretch activity for War Photographer) consistently engages students and produces excellent evaluative writing. Encourage it, but ensure students always return to the TEXT rather than writing a media studies essay.",
    'Sensitive content: both poems deal with violence, death, and psychological trauma. If any student has personal connections to military service, PTSD, or traumatic memory, be aware and offer an alternative focus if needed.',
    'Timing: the comparison writing in Activity 3 is the most important section. If Activities 1 and 2 run over, reduce the plenary to a one-sentence written exit ticket and protect the comparison writing time.',
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 3: Writing a Comparison Essay — Exam Technique
// ═══════════════════════════════════════════════════════════════════════════

const lesson3: LessonPlanData = {
  title: 'Writing a Comparison Essay — Structure, Technique & Exam Success',
  duration: '55 minutes',
  yearGroup: 'Year 10/11',
  examBoard: 'AQA',
  text: 'AQA Power & Conflict Poetry Anthology',
  objectives: [
    'Understand the AQA exam format for the poetry comparison question (Section B, 30 marks)',
    'Learn the alternating comparison structure and practise applying it to a timed response',
    'Develop the ability to select relevant poems for comparison based on thematic connections',
    'Practise writing analytical sentences that integrate quotation, technique, and comparison seamlessly',
    'Build confidence with timed writing under exam conditions',
  ],
  starterActivity: {
    title: 'Exam Format Breakdown',
    duration: '7 minutes',
    instructions:
      "1. Display the AQA Paper 2 Section B question format:\n   'Compare how poets present [theme/idea] in [named poem] and one other poem from the anthology.'\n   30 marks. 45 minutes recommended.\n2. Break down the mark allocation on the board:\n   - AO1 (12 marks): Compare ideas and perspectives; use references to support interpretations\n   - AO2 (12 marks): Analyse language, form, and structure; use terminology\n   - AO3 (6 marks): Show understanding of contexts\n3. Ask: 'What does this tell you about where to focus your energy?'\n4. Key point: AO1 and AO2 are worth 24 of 30 marks. Comparison and technique analysis are MORE important than context in this question.\n5. Display the recommended time split:\n   - 5 minutes planning\n   - 35 minutes writing (3 comparison points, ~250 words each)\n   - 5 minutes checking\n6. Students copy the time split into their books.",
    differentiation: {
      support:
        'Provide a printed exam format card that students can keep in their revision folder. Highlight the key instruction word: COMPARE. Explain that this means every paragraph must mention BOTH poems.',
      core: 'Students copy the mark allocation and time split independently. Ask: what mistakes do students commonly make if they do not know this format?',
      stretch:
        "Students calculate: if AO3 is only 6 marks, roughly how many sentences per essay should be context? (Answer: 3–4 well-placed sentences woven into analysis, not a separate paragraph.) This challenges the common practice of writing a 'context paragraph'.",
    },
  },
  mainActivities: [
    {
      title: 'Anatomy of a Great Comparison Paragraph',
      duration: '15 minutes',
      instructions:
        "1. Display a model comparison paragraph on the board (comparing 'Ozymandias' and 'My Last Duchess' on power — using public domain quotations from Shelley and Browning).\n2. Teacher reads it aloud.\n3. Students annotate the model paragraph by identifying and labelling each component (5 minutes):\n   (a) Topic sentence that introduces the comparison point\n   (b) Poem A: quotation + technique + effect\n   (c) Comparison connective (similarly / however / in contrast)\n   (d) Poem B: quotation + technique + effect\n   (e) Concluding sentence that draws the comparison together\n4. Display a WEAK comparison paragraph alongside the strong one.\n5. Students identify three differences between the strong and weak paragraphs (3 minutes). Likely answers: the weak version has no connective, analyses plot not language, and treats the poems separately instead of comparing them.\n6. Teacher consolidates: 'A great comparison paragraph is not two mini-essays glued together. It is a single argument that moves fluidly between two poems. The connective is the hinge — it forces you to think about relationship, not just content.'\n7. Students copy the five-component structure into their books as a permanent reference.",
      differentiation: {
        support:
          'Provide the model paragraph pre-printed with the five components already colour-coded. Students match each colour to the correct label. Then identify the components in the weak paragraph (or notice their absence).',
        core: 'Students annotate the model paragraph independently, label all five components, and identify three weaknesses in the weak paragraph.',
        stretch:
          'Students rewrite the weak paragraph to make it strong, using the five-component structure. Then compare their rewrite with the model — is there more than one way to write a strong comparison paragraph?',
      },
    },
    {
      title: 'Planning a Comparison: Theme-Based Poem Selection',
      duration: '10 minutes',
      instructions:
        '1. Display a list of common comparison themes with paired poems:\n   - Power: Ozymandias + My Last Duchess / Ozymandias + Tissue\n   - Conflict and suffering: Remains + War Photographer / Bayonet Charge + Exposure\n   - Nature and power: Storm on the Island + Extract from The Prelude\n   - Identity and belonging: Checking Out Me History + The Émigrée\n   - Memory and loss: Poppies + War Photographer\n2. Students choose ONE theme and create a comparison plan (6 minutes):\n   Point 1: One similarity or shared idea → evidence from each poem\n   Point 2: One difference in approach → evidence from each poem\n   Point 3: One comment on form or structure → evidence from each poem\n3. Pair-share plans (2 minutes): partner checks that both poems appear in every point.\n4. Teacher circulates and identifies one strong plan to share with the class.',
      differentiation: {
        support:
          'Provide a pre-started plan with Point 1 partially filled in. Students complete Point 1 and attempt Points 2 and 3 using their anthology. Offer a thematic link card for the chosen pair.',
        core: 'Students create a three-point plan independently using their anthology for evidence.',
        stretch:
          'Students create TWO plans for the same named poem but with different second poems. Then choose which comparison would produce the stronger essay and explain why.',
      },
    },
    {
      title: 'Timed Writing: One Comparison Point Under Exam Conditions',
      duration: '15 minutes',
      instructions:
        "1. Display the question: 'Compare how poets present ideas about power in [named poem] and one other poem from the anthology.'\n2. Use the named poem from Lesson 1 (Ozymandias) or allow student choice.\n3. Set the timer: 12 minutes to write ONE comparison point (the first point from their plan).\n4. Rules: exam conditions — silence, no talking, no phones. Students may use their anthology.\n5. At 12 minutes, pens down.\n6. Self-assessment (3 minutes): students re-read their paragraph and check against the five-component checklist:\n   [ ] Topic sentence introducing the comparison\n   [ ] Poem A: quotation + technique + effect\n   [ ] Comparison connective\n   [ ] Poem B: quotation + technique + effect\n   [ ] Concluding sentence drawing the comparison together\n7. Students tick each component they included and write a target for the component they missed or need to improve.",
      differentiation: {
        support:
          'Provide the five-component checklist printed at the top of the writing paper so students can refer to it while writing. Allow 14 minutes instead of 12. Teacher visits support-tier students at the 3-minute mark to check they have started with a topic sentence.',
        core: 'Students write under timed conditions and self-assess against the checklist independently.',
        stretch:
          'Students write TWO comparison points in 12 minutes (simulating exam pace of ~4 minutes per paragraph). Self-assess both and identify which is stronger and why.',
      },
    },
  ],
  plenary: {
    title: 'Top Tips: What I Will Remember for the Exam',
    instructions:
      "1. Students write THREE exam tips on a sticky note — the three things from today's lesson they most need to remember.\n2. Share with a partner: do you have the same tips or different ones?\n3. Cold-call three students to share their top tip.\n4. Teacher adds any missing essentials:\n   - Every paragraph must mention BOTH poems\n   - Use comparison connectives as hinges between poems\n   - Context should be woven in, not bolted on\n   - Plan for 5 minutes before you write\n   - Quality over quantity: three excellent points beat six weak ones\n5. Students stick their tips into the front of their revision folder.",
    differentiation: {
      support:
        'Provide a list of six tips. Students choose their top three and write them on their sticky note.',
      core: "Students write three tips from memory based on today's lesson.",
      stretch:
        "Students write three tips AND one personal target based on their timed writing performance: 'The specific thing I need to improve is...'",
    },
  },
  keyVocabulary: [
    'comparison — a structured examination of similarities and differences between two texts',
    'alternating structure — a method of comparison that moves point-by-point between two texts',
    'block structure — a method of comparison that discusses one text fully, then the other (less effective for AQA)',
    'comparison connective — a linking word that signals similarity or difference (similarly, however, in contrast, while)',
    'AO1 — Assessment Objective 1: critical, exploratory interpretation supported by textual references',
    'AO2 — Assessment Objective 2: analysis of language, form, and structure using literary terminology',
    'AO3 — Assessment Objective 3: understanding of context (social, historical, literary)',
    'topic sentence — the opening sentence of a paragraph that introduces the main point',
    "embedded quotation — a quotation woven into the grammar of the student's own sentence",
    'technique — a specific literary device used by the poet (e.g. metaphor, enjambment, caesura)',
    "effect — the impact a technique has on the reader's understanding or emotional response",
    'form — the overall shape and type of a poem (sonnet, dramatic monologue, free verse)',
    'structure — how a poem is organised and how its parts relate to each other',
    'register — the level of formality in language (formal academic register required in exams)',
    'evaluation — making a judgement about effectiveness, significance, or relative importance',
  ],
  resourcesNeeded: [
    'AQA Power & Conflict Poetry Anthology — student copies',
    'Projector for exam format breakdown, model paragraphs, and timer',
    'Model comparison paragraph handout (strong and weak versions)',
    'Five-component checklist printed on writing paper for support-tier students',
    'Comparison planning grid handout (one per student)',
    'Timer visible to all students (12 minutes for timed writing)',
    'Sticky notes for plenary tips',
    'Exam format reference card for support-tier students to keep',
  ],
  homework:
    'Complete a full timed comparison response (45 minutes at home, self-timed):\n\'Compare how poets present ideas about conflict in "Remains" and one other poem from the Power & Conflict anthology.\'\n\nSuccess criteria:\n- Spend 5 minutes planning before you write\n- Write three comparison points using the alternating structure\n- Each paragraph must reference BOTH poems with at least one quotation per poem\n- Use comparison connectives in every paragraph\n- Include at least one comment on form or structure across the essay\n- Include 2–3 sentences of integrated context (AO3)\n- Self-assess against the five-component checklist after writing\n- Attach your plan to the front of your response',
  teacherNotes: [
    'This is the most directly exam-relevant lesson in the poetry comparison sequence. The five-component structure is a scaffold that students should internalise — it works for every possible comparison question.',
    'The model paragraph is crucial. Choose or write one that demonstrates: a clear topic sentence, embedded quotation from both poems, technique analysis, a comparison connective as a hinge, and a concluding sentence that draws the two analyses together. Display this model permanently in the classroom.',
    'Common errors to address: (1) Writing two separate mini-essays instead of comparing. (2) Quoting at length without analysing. (3) Dedicating an entire paragraph to context without connecting it to the poems. (4) Only discussing content/themes without analysing language or form.',
    'The timed writing activity is deliberately short (12 minutes for one point). This teaches pace — in the exam, students have approximately 12–15 minutes per comparison point. Students who practise at this pace perform dramatically better in mocks.',
    'Assessment tip: collect the timed paragraphs and mark them against the AQA mark scheme. Return with two targets: one for AO1/comparison quality and one for AO2/technique analysis. This formative feedback is more valuable than marking a full mock essay.',
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  EXPORT
// ═══════════════════════════════════════════════════════════════════════════

export const poetryComparisonPptxLessons: LessonPlanData[] = [lesson1, lesson2, lesson3]
