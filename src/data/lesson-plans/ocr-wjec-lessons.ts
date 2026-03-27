// @ts-nocheck
import type { LessonPlan } from "../../types";

export const ocrWjecLessons: LessonPlan[] = [
  // ══════════════════════════════════════════════════════════════════════════
  // OCR LESSONS (1–5)
  // ══════════════════════════════════════════════════════════════════════════

  // ── 1. OCR Language Component 1: Exploring Non-Fiction & Media Texts ────
  {
    id: "ocr-lang-c1-nonfiction-media",
    title: "OCR Language Component 1: Exploring Non-Fiction & Media Texts",
    text: "OCR Language Component 1",
    board: "OCR",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand the structure and demands of OCR Language Component 1",
      "Analyse how writers use language and structure in non-fiction and media texts",
      "Practise identifying and commenting on presentational and rhetorical features",
      "Develop skills in synthesising information from two sources",
    ],
    successCriteria: [
      "I can identify at least four language or structural features in a non-fiction extract",
      "I can explain how presentational devices contribute to meaning and impact",
      "I can synthesise information across two non-fiction sources with clear references",
    ],
    keywords: [
      "non-fiction",
      "media text",
      "rhetoric",
      "synthesis",
      "presentational device",
      "audience",
      "purpose",
      "tone",
    ],
    starterActivity: {
      title: "Media Text Speed Sort",
      duration: "8 minutes",
      instructions:
        "Display six short excerpts from different non-fiction and media text types on the board (newspaper article, blog post, charity leaflet, travel review, speech transcript, advertisement). In pairs, students sort them into categories by purpose (inform, persuade, advise, argue, entertain) and audience. Discuss: how did you decide? What clues did the language give you?",
      differentiation: {
        support:
          "Provide a purpose/audience matching grid with definitions of each purpose.",
        core: "Students sort independently and justify each choice with a specific language clue.",
        stretch:
          "Students identify texts that serve multiple purposes and explain how the writer balances them.",
      },
      resources: ["Media text excerpt slides", "Purpose/audience sorting grid"],
    },
    mainActivities: [
      {
        title: "Deconstructing a Non-Fiction Extract – OCR-Style Analysis",
        duration: "22 minutes",
        instructions:
          "Provide students with a non-fiction extract (e.g. a newspaper feature article about climate activism). Read aloud together. Model annotating the first two paragraphs, identifying: headline effects, topic sentences, use of statistics, emotive language, direct address, and expert quotation. Students then annotate paragraphs 3–5 independently, using the OCR mark scheme criteria (understanding of language, comments on effects, use of terminology). Pairs compare annotations before whole-class feedback.",
        differentiation: {
          support:
            "Supply a scaffolded annotation sheet with prompts (e.g. 'Find a statistic – what effect does it have on the reader?'). Pre-highlight key sections.",
          core: "Students annotate independently using the OCR mark scheme descriptors as a checklist.",
          stretch:
            "Students evaluate the overall effectiveness of the text, considering how language and structure work together to position the reader.",
        },
        resources: [
          "Non-fiction extract (printed, one per student)",
          "OCR Component 1 mark scheme extract",
          "Annotation prompt sheet (support tier)",
        ],
      },
      {
        title: "Synthesis Challenge – Comparing Two Sources",
        duration: "20 minutes",
        instructions:
          "Distribute a second non-fiction text on the same topic (e.g. a personal blog post about climate activism). Explain the OCR synthesis question format: students must identify similarities and differences in how both writers present ideas. Model one comparative point using the structure: 'Both writers… However, Source A uses… whereas Source B…'. Students write three comparative paragraphs independently. Select two or three to share under the visualiser for peer critique.",
        differentiation: {
          support:
            "Provide a Venn diagram template and sentence starters for comparative connectives (similarly, in contrast, whereas).",
          core: "Students write three full comparative paragraphs with embedded quotations from both sources.",
          stretch:
            "Students analyse how the different text types (formal article vs. informal blog) shape the way each writer presents the same issue.",
        },
        resources: [
          "Second non-fiction extract (printed)",
          "Venn diagram template (support tier)",
          "Comparative connectives word bank",
        ],
      },
    ],
    plenaryActivity: {
      title: "Mark Scheme Bingo",
      duration: "7 minutes",
      instructions:
        "Give each student a bingo card containing OCR mark scheme keywords and phrases (e.g. 'clear understanding', 'relevant quotation', 'effect on reader', 'comparison of methods'). Read out definitions or examples; students cross off matching terms. First to complete a line explains each term they crossed off. Reinforce what the examiner is looking for.",
      differentiation: {
        support: "Bingo card includes definitions alongside the terms.",
        core: "Students match terms from memory; definitions read aloud by teacher.",
        stretch:
          "Students create their own example sentence for each term they cross off.",
      },
    },
    homework:
      "Find a non-fiction text online (news article, review, or opinion piece). Annotate it for three language features and one structural feature, explaining the effect of each on the reader. Bring the annotated text to the next lesson.",
    worksheetQuestions: [
      {
        question:
          "Explain two ways in which the writer of Source A uses language to engage the reader. Use specific examples from the text.",
        lines: 6,
        modelAnswer:
          "The writer uses the statistic '97% of scientists agree' to lend authority and credibility to the argument, making it difficult for the reader to dismiss the claims. Additionally, the direct address 'you cannot afford to look away' creates a sense of personal responsibility, compelling the reader to engage with the issue rather than remain passive.",
        marks: 4,
      },
      {
        question:
          "How does the structure of Source A guide the reader's response? Refer to the whole text in your answer.",
        lines: 6,
        modelAnswer:
          "The text opens with a shocking anecdote to hook the reader's attention, then broadens into factual reporting with statistics and expert opinions to build credibility. The shift from third person to direct address in the final paragraphs creates a call to action, moving the reader from passive understanding to a sense of personal urgency. The short, punchy final sentence serves as a powerful conclusion that lingers with the reader.",
        marks: 4,
      },
      {
        question:
          "Compare how the writers of Source A and Source B present their views on the same topic. Use evidence from both sources.",
        lines: 8,
        modelAnswer:
          "Both writers express concern about climate change, but they do so in very different ways. Source A, a newspaper article, adopts a formal, authoritative tone, relying on statistics and expert quotations to persuade the reader logically. In contrast, Source B is a personal blog post that uses first-person anecdotes and emotive language to connect with the reader on an emotional level. While Source A maintains journalistic objectivity, Source B openly admits bias, stating 'I don't care about balance — I care about my children's future.' This difference in approach reflects the conventions of their respective text types.",
        marks: 6,
      },
      {
        question:
          "What is meant by the term 'synthesis' in the context of OCR Language Component 1?",
        lines: 3,
        modelAnswer:
          "Synthesis means combining information from two or more sources to identify similarities, differences, and connections. Rather than analysing each text separately, students must draw the sources together, comparing how they present ideas, perspectives, or information on a shared topic.",
        marks: 2,
      },
      {
        question:
          "Identify one presentational or rhetorical device used in the extract and explain its effect on the reader.",
        lines: 4,
        modelAnswer:
          "The writer uses a rhetorical question — 'How long can we pretend this isn't happening?' — to directly challenge the reader's complacency. By framing the issue as a question rather than a statement, the writer forces the reader to reflect personally, making the argument feel inescapable and increasing its persuasive impact.",
        marks: 3,
      },
      {
        question:
          "Why is it important to consider audience and purpose when analysing a non-fiction text?",
        lines: 4,
        modelAnswer:
          "Audience and purpose shape every choice a writer makes — from vocabulary and tone to structure and presentational devices. A text written to inform teenagers will use very different language from one written to persuade politicians. Understanding these factors allows the reader to evaluate how effectively the writer achieves their aims and why particular techniques have been chosen.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "Choose non-fiction texts that are topical and engaging for your cohort. Climate activism, social media regulation, and youth mental health work well.",
      "The OCR Component 1 mark scheme rewards 'clear and relevant' responses at the mid-band — drill this vocabulary so students understand what examiners expect.",
      "If time is tight, the synthesis activity can be set as a follow-up homework task.",
      "Ensure students understand that OCR non-fiction questions often require comments on both language AND structure, not just one.",
    ],
    targetedSkills: [
      "Language Analysis",
      "Structural Analysis",
      "Synthesis",
      "Non-Fiction Reading",
      "OCR Exam Technique",
      "Audience and Purpose",
    ],
  },

  // ── 2. OCR Language Component 2: Creative & Imaginative Writing ─────────
  {
    id: "ocr-lang-c2-creative-writing",
    title: "OCR Language Component 2: Creative & Imaginative Writing",
    text: "OCR Language Component 2",
    board: "OCR",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand the requirements of OCR Language Component 2 writing tasks",
      "Develop skills in crafting engaging openings using a range of techniques",
      "Practise using sensory language, varied sentence structures, and figurative devices",
      "Apply the OCR mark scheme criteria to self- and peer-assess creative writing",
    ],
    successCriteria: [
      "I can write an engaging opening paragraph using at least three creative techniques",
      "I can vary my sentence structures for deliberate effect",
      "I can use the OCR mark scheme to identify strengths and targets in my own writing",
    ],
    keywords: [
      "creative writing",
      "imaginative writing",
      "sensory language",
      "figurative language",
      "sentence variety",
      "atmosphere",
      "narrative voice",
      "crafting",
    ],
    starterActivity: {
      title: "Opening Line Ranking",
      duration: "8 minutes",
      instructions:
        "Display five opening lines from published novels and short stories on the board. Students rank them from most to least engaging, then discuss in pairs: what techniques make the best openings work? Feed back as a class and create a shared list of 'What makes a great opening?' (e.g. in medias res, a striking image, a question, a bold statement, withholding information).",
      differentiation: {
        support: "Provide a checklist of techniques to look for in each opening.",
        core: "Students rank and justify independently before pair discussion.",
        stretch:
          "Students write their own opening line inspired by the techniques discussed, then share and vote on the best.",
      },
      resources: ["Opening lines slide", "Technique checklist (support tier)"],
    },
    mainActivities: [
      {
        title: "Crafting an Atmospheric Opening — Guided Writing",
        duration: "22 minutes",
        instructions:
          "Display an image stimulus (e.g. an abandoned fairground, a stormy coastline, a crowded market at night). Model writing an opening paragraph step by step: (1) Choose a narrative perspective, (2) Open with a striking sensory detail, (3) Build atmosphere through carefully chosen vocabulary, (4) Vary sentence length for pace and tension. Students then write their own opening paragraph (150–200 words) in response to the same image. Circulate, offering targeted feedback. After 15 minutes, select two or three students to read aloud. Class identifies the techniques used.",
        differentiation: {
          support:
            "Provide a writing scaffold with sentence starters and a word bank of atmospheric vocabulary (e.g. 'looming', 'suffocating', 'fractured').",
          core: "Students write independently using the modelled techniques as a guide.",
          stretch:
            "Students experiment with an unreliable narrator or a non-linear opening that disrupts chronology.",
        },
        resources: [
          "Image stimulus (projected)",
          "Writing scaffold (support tier)",
          "Atmospheric vocabulary word bank",
        ],
      },
      {
        title: "Peer Assessment Using OCR Mark Scheme Criteria",
        duration: "18 minutes",
        instructions:
          "Display simplified OCR Component 2 writing mark scheme bands on the board. Explain what distinguishes a Band 4 response from a Band 5/6 response (e.g. 'appropriate vocabulary' vs. 'ambitious, well-chosen vocabulary'). Students swap their opening paragraphs with a partner. Using a peer feedback sheet aligned to the mark scheme, partners highlight: (1) the best phrase, (2) one example of effective sentence variety, (3) one area for improvement. Students then have 8 minutes to redraft their paragraph, incorporating the feedback.",
        differentiation: {
          support:
            "Peer feedback sheet includes examples of what to look for and how to phrase constructive comments.",
          core: "Students complete the feedback sheet independently and redraft with specific improvements.",
          stretch:
            "Students write a brief examiner-style comment explaining which mark scheme band the paragraph falls into and why.",
        },
        resources: [
          "Simplified OCR mark scheme bands (projected)",
          "Peer feedback sheet",
          "Coloured pens for annotation",
        ],
      },
    ],
    plenaryActivity: {
      title: "Technique Takeaway",
      duration: "7 minutes",
      instructions:
        "Each student writes on a sticky note: one technique they used successfully today and one they want to practise further. Stick notes on the board under two columns: 'Confident' and 'Need to Develop'. Teacher reviews and uses this to plan the next writing lesson. Quick whole-class share of the three most common development targets.",
      differentiation: {
        support: "Provide a list of technique names to choose from.",
        core: "Students write their own technique and a brief explanation.",
        stretch:
          "Students set themselves a specific writing target for homework with a strategy to achieve it.",
      },
    },
    homework:
      "Choose a different image from the selection provided. Write a complete 300–400 word creative piece using at least four techniques from today's lesson. Underline and label each technique in the margin.",
    worksheetQuestions: [
      {
        question:
          "Write the opening paragraph of a story inspired by this image. Focus on creating a vivid atmosphere. (Image: A deserted railway platform at dusk.)",
        lines: 12,
        modelAnswer:
          "The platform stretched ahead like a tongue of grey concrete, licked by the last light of a dying sun. Nobody waited. Nobody came. The timetable board flickered once — twice — then surrendered to darkness, its amber letters dissolving into nothing. Somewhere beyond the rusted footbridge, a pigeon launched itself from the guttering with a clatter that split the silence like a gunshot. I pulled my coat tighter, though it wasn't the cold that made me shiver. The 18:42 was seventeen minutes late, and in a place like this, seventeen minutes felt like a lifetime. A lifetime of watching shadows lengthen across empty tracks, of listening to the wind interrogate the gaps between the platform slabs, of pretending I wasn't afraid.",
        marks: 8,
      },
      {
        question:
          "Explain three techniques you used in your opening paragraph and the effect of each.",
        lines: 6,
        modelAnswer:
          "I used a simile ('like a tongue of grey concrete') to create a vivid visual image that personifies the platform, making the setting feel alive and slightly unsettling. I varied my sentence length, using the short sentence 'Nobody waited. Nobody came.' for dramatic emphasis, slowing the pace and reinforcing the emptiness. I also used pathetic fallacy ('dying sun', 'darkness') to mirror the narrator's growing unease and build an atmosphere of tension.",
        marks: 6,
      },
      {
        question:
          "What does the OCR mark scheme mean by 'ambitious vocabulary'? Give two examples from your own writing.",
        lines: 4,
        modelAnswer:
          "Ambitious vocabulary means choosing words that are precise, evocative, and deliberately selected for their effect — going beyond simple or predictable choices. For example, 'interrogate' (instead of 'blow through') personifies the wind and suggests hostility, while 'surrendered' (instead of 'stopped working') implies defeat and gives the timetable board human qualities, reinforcing the sense of abandonment.",
        marks: 3,
      },
      {
        question:
          "Rewrite the following sentence three different ways, varying the structure each time: 'The train arrived at the station and the doors opened slowly.'",
        lines: 6,
        modelAnswer:
          "(1) With a screech of brakes that shattered the silence, the train heaved itself into the station — and, slowly, reluctantly, the doors began to open. (2) The doors opened slowly. Too slowly. The train had arrived, but something about its stillness made me hesitate. (3) Arriving without warning, the train filled the station with noise and diesel fumes; its doors slid apart like yawning mouths, unhurried, indifferent.",
        marks: 3,
      },
      {
        question:
          "Why is it important to vary sentence structures in creative writing? Refer to the OCR assessment criteria in your answer.",
        lines: 4,
        modelAnswer:
          "Varying sentence structures allows the writer to control pace, rhythm, and emphasis. Short sentences can create tension or shock, while longer, complex sentences can build description and slow the reader down. The OCR mark scheme rewards 'a range of sentence structures used effectively' at the higher bands, meaning students who rely on one sentence type will be limited to mid-band marks regardless of vocabulary quality.",
        marks: 3,
      },
      {
        question:
          "Identify two differences between OCR Component 2 creative writing and a 'free writing' exercise with no mark scheme.",
        lines: 4,
        modelAnswer:
          "In OCR Component 2, writing must be purposeful and demonstrate conscious craft — every technique should contribute to the overall effect, and responses are assessed against specific criteria including communication, organisation, vocabulary, sentence structure, and technical accuracy. Free writing has no such constraints. Additionally, OCR tasks are time-limited and often stimulus-based, meaning students must respond to a specific prompt rather than writing whatever they choose.",
        marks: 2,
      },
    ],
    teacherNotes: [
      "Select image stimuli that offer rich sensory possibilities. Avoid overly busy images — atmospheric, slightly ambiguous settings work best.",
      "Emphasise that OCR creative writing tasks may offer a choice of stimulus (image, title, opening line). Practise all three formats across the unit.",
      "Higher-attaining students often over-write. Remind them that precision is valued over volume — 300 well-crafted words outperform 600 generic ones.",
      "The peer assessment activity requires clear modelling. Demonstrate giving feedback before students attempt it independently.",
    ],
    targetedSkills: [
      "Creative Writing",
      "Descriptive Writing",
      "Sensory Language",
      "Sentence Variety",
      "Self-Assessment",
      "OCR Exam Technique",
    ],
  },

  // ── 3. OCR Literature: Poetry Across Time — Conflict Poems ─────────────
  {
    id: "ocr-lit-poetry-conflict",
    title: "OCR Literature: Poetry Across Time — Conflict Poems",
    text: "OCR Poetry Anthology",
    board: "OCR",
    yearGroup: "Year 11",
    duration: "60 minutes",
    objectives: [
      "Analyse how poets present conflict across different time periods in the OCR anthology",
      "Compare the methods used by two poets to explore the theme of conflict",
      "Develop skills in embedding quotations and using subject-specific terminology",
      "Understand the OCR mark scheme criteria for the comparative poetry question",
    ],
    successCriteria: [
      "I can identify and analyse at least three methods used by a poet to present conflict",
      "I can write a comparative paragraph linking two poems by theme and method",
      "I can use the OCR mark scheme to understand what distinguishes higher-band responses",
    ],
    keywords: [
      "conflict",
      "comparison",
      "methods",
      "imagery",
      "tone",
      "structure",
      "volta",
      "juxtaposition",
      "enjambment",
    ],
    starterActivity: {
      title: "Conflict Word Cloud Challenge",
      duration: "7 minutes",
      instructions:
        "Display the word 'CONFLICT' in the centre of the board. Students have 90 seconds to write as many associations as they can on mini-whiteboards (physical, emotional, political, internal, generational). Share and categorise responses. Then reveal six single-line quotations from different conflict poems in the OCR anthology. Students match each quotation to one of their conflict categories. Discuss: conflict is not only about war.",
      differentiation: {
        support: "Provide conflict category headings to scaffold brainstorming.",
        core: "Students brainstorm freely and categorise their own responses.",
        stretch:
          "Students predict which poetic form or structure might suit each type of conflict and explain why.",
      },
      resources: ["Mini-whiteboards", "Quotation matching slide"],
    },
    mainActivities: [
      {
        title: "Close Analysis – A Single Conflict Poem",
        duration: "20 minutes",
        instructions:
          "Distribute a printed copy of the focus poem (e.g. a poem exploring the aftermath of conflict). Read aloud twice — once for understanding, once for effect. Students annotate for: language techniques (imagery, metaphor, personification), structural choices (enjambment, caesura, stanza breaks, volta), and tone/mood shifts. After 10 minutes of independent annotation, pairs share their three best annotations. Teacher models a paragraph responding to: 'How does the poet present the effects of conflict?' using the OCR format: point → evidence (embedded quotation) → analysis of method → link to context or wider theme.",
        differentiation: {
          support:
            "Provide a pre-annotated version with three techniques highlighted and prompt questions for each.",
          core: "Students annotate independently and write one analytical paragraph following the modelled structure.",
          stretch:
            "Students explore how the poet's use of form (sonnet, free verse, etc.) contributes to the presentation of conflict.",
        },
        resources: [
          "Printed poem (one per student)",
          "Annotation guide sheet",
          "Model paragraph on the board",
        ],
      },
      {
        title: "Comparative Writing – Linking Two Conflict Poems",
        duration: "22 minutes",
        instructions:
          "Introduce a second conflict poem from the OCR anthology. Read aloud and briefly annotate as a class (5 minutes). Explain the OCR comparison question structure: students must compare how two poets present a shared theme. Display the comparative writing frame: 'Both [Poet A] and [Poet B] explore conflict through… However, while [Poet A] uses [method] to suggest…, [Poet B] employs [method] to convey…' Students write two comparative paragraphs. Circulate and target feedback on: embedded quotations, method analysis, and use of comparative connectives.",
        differentiation: {
          support:
            "Provide a paragraph frame with gaps and a bank of comparative connectives (similarly, in contrast, whereas, conversely).",
          core: "Students write two full comparative paragraphs independently.",
          stretch:
            "Students write a third paragraph evaluating which poet presents conflict more effectively and why, engaging with the 'evaluative' band of the mark scheme.",
        },
        resources: [
          "Second printed poem",
          "Comparative writing frame (support tier)",
          "Comparative connectives bank",
        ],
      },
    ],
    plenaryActivity: {
      title: "Examiner's Verdict",
      duration: "8 minutes",
      instructions:
        "Display two anonymous student comparative paragraphs (prepared in advance or selected from today's work, with permission). Students act as examiners, using simplified OCR mark scheme bands to decide which band each response falls into and why. Discuss: what would move each response up one band? Reinforce the importance of method analysis and comparison throughout.",
      differentiation: {
        support: "Mark scheme bands displayed with student-friendly explanations.",
        core: "Students assign a band and write one improvement suggestion.",
        stretch:
          "Students rewrite the weaker paragraph to move it up a band, demonstrating the required improvements.",
      },
    },
    homework:
      "Choose a third conflict poem from the OCR anthology. Write a comparison paragraph linking it to one of the poems studied today. Focus on methods and use at least two embedded quotations.",
    worksheetQuestions: [
      {
        question:
          "How does the poet use imagery to present the effects of conflict? Refer to specific examples from the poem.",
        lines: 6,
        modelAnswer:
          "The poet uses the simile 'his legs stretched out like a broken compass' to reduce the soldier's body to a damaged instrument, stripping away humanity and suggesting the dehumanising impact of war. The image of a 'compass' — something designed for direction and purpose — being 'broken' implies that conflict destroys not only bodies but also meaning and orientation. The clinical, almost detached tone of this image contrasts with the violence it describes, creating an unsettling effect.",
        marks: 4,
      },
      {
        question:
          "Compare how two poems from the OCR conflict anthology present the experience of those affected by war. You should consider the poets' methods and the effects on the reader.",
        lines: 10,
        modelAnswer:
          "Both poems explore how conflict leaves lasting psychological scars, though they approach the theme through contrasting methods. Poet A uses fragmented, broken syntax to mirror the disrupted thoughts of a traumatised speaker, with caesura and short sentences creating a halting rhythm that conveys shock and disorientation. In contrast, Poet B employs a controlled sonnet form, containing the horror of war within a rigid structure that suggests emotional suppression and the speaker's attempt to maintain composure. While Poet A's free verse allows the trauma to spill across the page, Poet B's adherence to form implies that the true cost of conflict is what remains unspoken — trapped beneath the surface.",
        marks: 8,
      },
      {
        question:
          "What is a 'volta' and how might a poet use it in a conflict poem?",
        lines: 3,
        modelAnswer:
          "A volta is a 'turn' or shift in a poem — a change in tone, argument, perspective, or mood. In a conflict poem, a poet might use a volta to shift from describing the glory of battle to revealing its devastating reality, forcing the reader to reassess their initial response and confronting them with an uncomfortable truth.",
        marks: 3,
      },
      {
        question:
          "Explain why the OCR mark scheme values 'comparison throughout' rather than writing about each poem separately.",
        lines: 4,
        modelAnswer:
          "Writing about each poem separately produces two disconnected analyses rather than a genuine comparison. The OCR mark scheme rewards 'comparison throughout' because it demonstrates higher-order thinking: the student must synthesise their understanding of both poems simultaneously, identifying meaningful connections and distinctions in method and meaning. This integrated approach shows analytical sophistication and a deeper understanding of how different poets engage with the same theme.",
        marks: 3,
      },
      {
        question:
          "Choose one structural feature from the poem and explain how it contributes to the presentation of conflict.",
        lines: 5,
        modelAnswer:
          "The poet's use of enjambment across stanza breaks mirrors the way conflict spills beyond boundaries and cannot be contained. The line 'and the blood ran / into the next morning' physically carries the image of bloodshed from one stanza into the next, visually representing how the effects of violence overflow into everyday life. The lack of a full stop forces the reader onward without pause, replicating the relentless, inescapable nature of the conflict's aftermath.",
        marks: 4,
      },
      {
        question:
          "How does understanding the historical context of a conflict poem enhance your analysis?",
        lines: 4,
        modelAnswer:
          "Historical context allows the reader to understand why a poet made particular choices and what they were responding to. For example, knowing that a poem was written during World War I explains the use of graphic imagery as a deliberate challenge to propaganda. Context transforms analysis from surface-level observation into informed interpretation, which the OCR mark scheme rewards at the higher bands through AO3 (context) descriptors.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "Select conflict poems that offer clear comparative possibilities. Poems with contrasting forms (sonnet vs. free verse) or perspectives (soldier vs. civilian) work particularly well.",
      "The OCR poetry comparison question is worth significant marks — students must practise integrating comparison throughout, not writing two separate analyses.",
      "Remind students that 'conflict' in the OCR anthology extends beyond war. Internal conflict, familial conflict, and political conflict are all valid focuses.",
      "Keep a display of key comparative connectives and analytical sentence starters visible throughout the poetry unit.",
    ],
    targetedSkills: [
      "Poetry Analysis",
      "Poetry Comparison",
      "Comparative Writing",
      "Quotation Embedding",
      "OCR Exam Technique",
      "Contextual Understanding",
    ],
  },

  // ── 4. OCR Literature: 19th Century Novel Study Approaches ─────────────
  {
    id: "ocr-lit-19c-novel-study",
    title: "OCR Literature: 19th Century Novel Study Approaches",
    text: "OCR 19th Century Novel",
    board: "OCR",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand the demands of the OCR 19th century novel extract question",
      "Develop strategies for analysing an unseen extract within its wider textual context",
      "Practise close language analysis with a focus on Victorian literary conventions",
      "Link textual analysis to relevant 19th century social and historical context",
    ],
    successCriteria: [
      "I can analyse language and structural choices in a 19th century novel extract",
      "I can connect the extract to the wider themes and narrative arc of the novel",
      "I can incorporate relevant contextual knowledge into my analytical writing",
    ],
    keywords: [
      "Victorian",
      "social class",
      "morality",
      "Gothic",
      "pathetic fallacy",
      "narrative voice",
      "omniscient narrator",
      "industrialisation",
    ],
    starterActivity: {
      title: "Victorian Values Agree/Disagree",
      duration: "8 minutes",
      instructions:
        "Display five statements about Victorian society (e.g. 'Poor people were poor because they were lazy', 'A woman's place was in the home', 'Science was challenging religion'). Students stand on a physical agree/disagree spectrum in the room, then justify their position. Teacher contextualises each statement, connecting it to the set text. Key message: understanding what Victorians believed helps us understand why characters behave as they do.",
      differentiation: {
        support:
          "Provide a brief glossary card explaining each statement's historical background.",
        core: "Students justify their position with reference to their knowledge of the novel.",
        stretch:
          "Students identify which characters in the novel would agree or disagree with each statement and explain why.",
      },
      resources: ["Statements slide", "Glossary cards (support tier)"],
    },
    mainActivities: [
      {
        title: "Extract Analysis – OCR Exam-Style Practice",
        duration: "25 minutes",
        instructions:
          "Distribute an extract from the set 19th century novel (approximately 30 lines). Read aloud together, clarifying archaic vocabulary. Display the OCR exam question: 'How does [the author] present [theme/character] in this extract? Refer closely to the extract in your answer.' Model annotating the first paragraph for: key vocabulary choices, imagery, sentence structure, narrative perspective, and tone. Students annotate the remainder independently. Then model a paragraph using the structure: clear point → embedded quotation → analysis of method → contextual link. Students write two analytical paragraphs under timed conditions (12 minutes).",
        differentiation: {
          support:
            "Provide a vocabulary gloss for archaic words. Supply a paragraph frame with sentence starters and highlighted quotations to choose from.",
          core: "Students annotate and write two paragraphs independently, using the modelled structure.",
          stretch:
            "Students write a third paragraph that considers how a Victorian reader's response might differ from a modern reader's, demonstrating AO3 awareness.",
        },
        resources: [
          "Printed extract with line numbers",
          "Vocabulary gloss sheet (support tier)",
          "Paragraph frame (support tier)",
          "OCR mark scheme extract (for reference)",
        ],
      },
      {
        title: "Zooming Out – Linking the Extract to the Whole Text",
        duration: "17 minutes",
        instructions:
          "Explain that higher-band OCR responses connect the extract to the wider novel. Display a timeline of the novel's key events. Students identify where the extract sits in the narrative and discuss: what has happened before this point? How does this extract develop the character/theme? What happens afterwards? In pairs, students add one sentence to each of their two paragraphs that links their analysis to the wider text. Share examples and discuss what makes an effective 'zoom out' reference.",
        differentiation: {
          support:
            "Provide a completed novel timeline and prompt cards (e.g. 'Before this extract, [character] had…').",
          core: "Students use the timeline to add a contextual link sentence to each paragraph independently.",
          stretch:
            "Students consider how the extract represents a turning point in the novel and write a paragraph exploring this.",
        },
        resources: [
          "Novel events timeline (displayed/printed)",
          "Prompt cards (support tier)",
        ],
      },
    ],
    plenaryActivity: {
      title: "One Thing I'd Add",
      duration: "7 minutes",
      instructions:
        "Students pass their two paragraphs to the person behind them. That person reads and writes one sticky-note suggestion: 'One thing I'd add to improve this is…' (e.g. more context, a better quotation, a method term). Return and read. Quick show of hands: how many received feedback about context? About method? About quotation quality? Reinforce the three areas examiners look for.",
      differentiation: {
        support: "Feedback prompt menu displayed on the board.",
        core: "Students write specific, actionable feedback.",
        stretch:
          "Students rewrite one paragraph incorporating the feedback before handing in.",
      },
    },
    homework:
      "Choose a different extract from the set novel (approximately 20 lines). Write two analytical paragraphs in response to the question: 'How does the author present [theme] in this passage?' Include at least one contextual reference.",
    worksheetQuestions: [
      {
        question:
          "Analyse how the author uses language to present a character in this extract. Refer closely to the text.",
        lines: 8,
        modelAnswer:
          "The author describes the character as having 'a face that seemed carved from the stone of the workhouse itself', using a metaphor that fuses the character with the institution that shaped them. The word 'carved' suggests permanence — this person has been fundamentally formed by poverty, not merely affected by it. The reference to the 'workhouse' immediately signals to a Victorian reader the lowest rung of society, invoking the Poor Law and its deliberate humiliations. The author's choice of an omniscient narrator allows the reader access to the character's inner suffering while maintaining the detached, almost clinical tone typical of Victorian social realism.",
        marks: 6,
      },
      {
        question:
          "Why is it important to link your analysis of an extract to the wider novel in OCR Literature responses?",
        lines: 4,
        modelAnswer:
          "Linking to the wider novel demonstrates a secure understanding of the text as a whole, which is required for higher-band marks in the OCR mark scheme. It shows the examiner that the student can see how the extract fits within the novel's broader narrative arc, character development, and thematic concerns, rather than treating it as an isolated passage. This also allows for more meaningful contextual analysis.",
        marks: 3,
      },
      {
        question:
          "Explain one feature of Victorian literary conventions evident in this extract.",
        lines: 4,
        modelAnswer:
          "The extract uses an omniscient third-person narrator, a convention common in Victorian novels. This narrative voice allows the author to comment on social conditions with authority, guiding the reader's moral response. The narrator's aside — 'as was the custom in those unforgiving times' — directly addresses the reader and signals the author's critical stance toward Victorian social norms, a technique used by Dickens and other Victorian novelists to provoke social reform.",
        marks: 3,
      },
      {
        question:
          "How might a Victorian reader's response to this extract differ from a modern reader's response?",
        lines: 5,
        modelAnswer:
          "A Victorian reader might have accepted certain aspects of the extract as normal — for example, rigid class distinctions or gendered expectations — while a modern reader would likely find them unjust. Conversely, a Victorian reader may have been more shocked by the author's criticism of established institutions, as challenging the status quo was more radical in the 19th century. This dual perspective is valuable because it reveals how the text was both a product of its time and ahead of it.",
        marks: 4,
      },
      {
        question:
          "What does the OCR mark scheme mean by 'thoughtful consideration of the extract and its relationship to the text as a whole'?",
        lines: 4,
        modelAnswer:
          "This descriptor rewards students who do not simply identify features in the extract but consider their significance within the wider novel. 'Thoughtful' implies reflection and depth — the student should explore why the author included this moment, how it develops characters or themes, and what it reveals about the novel's overall message. A 'relationship to the text as a whole' means connecting the extract to events, themes, or character arcs elsewhere in the novel.",
        marks: 3,
      },
      {
        question:
          "Identify a structural choice the author makes in this extract and analyse its effect.",
        lines: 5,
        modelAnswer:
          "The author opens the extract with a long, complex sentence laden with subordinate clauses, mirroring the suffocating social expectations placed on the character. This is followed by a stark, short sentence: 'She said nothing.' The contrast in sentence length creates a sudden silence on the page, reflecting the character's powerlessness. Structurally, this shift forces the reader to pause and register the weight of what is left unsaid, which is arguably more powerful than any spoken response.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson is designed to be adaptable to any OCR 19th century set text. Substitute the extract and timeline for your specific novel.",
      "Victorian vocabulary can be a significant barrier. Pre-teach archaic terms before the lesson or provide a running glossary.",
      "The 'zoom out' skill is essential for higher bands. Students who only analyse the extract in isolation will plateau at Band 3.",
      "Consider building a class context bank (a shared document or display) that students add to throughout the unit.",
    ],
    targetedSkills: [
      "Language Analysis",
      "Contextual Understanding",
      "Character Analysis",
      "19th Century Literature",
      "OCR Exam Technique",
      "Essay Structure",
    ],
  },

  // ── 5. OCR Exam Technique: Maximising Marks Across All Components ──────
  {
    id: "ocr-exam-technique-maximising",
    title: "OCR Exam Technique: Maximising Marks Across All Components",
    text: "OCR Exam Skills",
    board: "OCR",
    yearGroup: "Year 11",
    duration: "60 minutes",
    objectives: [
      "Understand the structure, timing, and mark allocation of all OCR English Language and Literature papers",
      "Decode OCR command words and understand what each question type requires",
      "Develop time management strategies tailored to the OCR exam format",
      "Identify common pitfalls and learn mark-maximising techniques for each component",
    ],
    successCriteria: [
      "I can explain the structure and timing of each OCR paper confidently",
      "I can decode command words and identify what the examiner is looking for",
      "I can apply at least two mark-maximising strategies to improve an existing response",
    ],
    keywords: [
      "command words",
      "mark scheme",
      "assessment objectives",
      "time management",
      "AO1",
      "AO2",
      "AO3",
      "AO4",
      "band descriptors",
    ],
    starterActivity: {
      title: "OCR Paper Knowledge Quiz",
      duration: "8 minutes",
      instructions:
        "Students complete a quick-fire quiz (10 questions) on the structure of the OCR papers: How many components are there? How long is each paper? How many marks is the poetry comparison worth? What percentage is SPaG? Students answer on mini-whiteboards. Reveal answers and address any gaps. Key message: knowing the exam structure is the foundation of good exam technique.",
      differentiation: {
        support:
          "Provide a simplified OCR paper overview sheet to refer to during the quiz.",
        core: "Students answer from memory; review answers afterwards.",
        stretch:
          "Students calculate how many minutes per mark they should spend on each question and explain the implications for their approach.",
      },
      resources: [
        "Quiz slides",
        "OCR paper overview sheet (support tier)",
        "Mini-whiteboards",
      ],
    },
    mainActivities: [
      {
        title: "Command Word Decoder",
        duration: "15 minutes",
        instructions:
          "Display OCR command words: 'Explore', 'How does the writer…', 'Compare', 'Evaluate', 'To what extent…'. For each, students discuss in pairs: what is the examiner asking me to do? What skills does this test? Then reveal the AO being assessed by each command word. Students create a 'Command Word Cheat Sheet' with the word, its meaning, the AO, and a one-sentence strategy. Emphasise: misreading the command word is the single most common reason students lose marks.",
        differentiation: {
          support:
            "Provide a partially completed cheat sheet with the command words and AOs filled in; students add meanings and strategies.",
          core: "Students complete the cheat sheet independently from class discussion.",
          stretch:
            "Students write a mock opening sentence for each command word type, demonstrating how their response style changes.",
        },
        resources: [
          "Command words display slide",
          "Cheat sheet template",
          "AO reference card",
        ],
      },
      {
        title: "Mark Scheme Makeover – Improving Weak Responses",
        duration: "25 minutes",
        instructions:
          "Distribute three short student responses (prepared samples at different band levels) to a typical OCR question. Display the relevant OCR band descriptors. Students work in trios: (1) Read each response, (2) Assign it a band using the mark scheme, (3) Identify specifically what prevents it from reaching the next band. Then each student takes the Band 3 response and rewrites it to reach Band 5, applying the mark-maximising strategies discussed. Compare rewrites and identify the most effective improvements. Teacher models the 'perfect' Band 5/6 version.",
        differentiation: {
          support:
            "Provide an annotated mark scheme with student-friendly band summaries. Students focus on improving one specific aspect (e.g. adding a quotation, improving terminology).",
          core: "Students identify multiple improvements and rewrite the full response to Band 5.",
          stretch:
            "Students rewrite the response to Band 6, incorporating evaluative language, alternative interpretations, and sophisticated contextual references.",
        },
        resources: [
          "Three sample responses (printed)",
          "OCR band descriptors (simplified and full versions)",
          "Highlighters for annotation",
        ],
      },
    ],
    plenaryActivity: {
      title: "My Three Non-Negotiables",
      duration: "7 minutes",
      instructions:
        "Students write down their three personal 'non-negotiable' exam technique rules based on today's lesson (e.g. 'Always check the command word before I start writing', 'Spend no more than X minutes on the extract question', 'Embed quotations rather than copying out long passages'). Share around the table; each group selects their best three to display on the exam technique wall. These become revision reference points.",
      differentiation: {
        support: "Provide a list of possible non-negotiables to choose from.",
        core: "Students create their own three rules and justify each briefly.",
        stretch:
          "Students rank their non-negotiables by impact and explain which would gain the most marks.",
      },
    },
    homework:
      "Complete one full OCR exam question under timed conditions at home. Before writing, annotate the question to identify the command word, the AO being assessed, and your planned approach. Bring both the annotation and the response to the next lesson.",
    worksheetQuestions: [
      {
        question:
          "Explain the difference between AO1, AO2, and AO3 in OCR English Literature. Give an example of how each might appear in an essay.",
        lines: 6,
        modelAnswer:
          "AO1 tests understanding of the text and the ability to use quotations as evidence. For example: 'Scrooge is presented as miserly, as shown when he calls Christmas a \"humbug\".' AO2 tests analysis of the writer's methods — language, structure, and form. For example: 'Dickens uses the metaphor of Scrooge's heart as a \"frozen\" organ to suggest emotional coldness.' AO3 tests understanding of context. For example: 'Victorian readers would recognise Scrooge as representing the wealthy industrialists who ignored the suffering caused by the Poor Law.'",
        marks: 6,
      },
      {
        question:
          "A student writes: 'The poem is about war and it is sad.' Using the OCR mark scheme, explain why this would score in the lower bands and rewrite it to achieve a higher band.",
        lines: 6,
        modelAnswer:
          "This response would score in Band 1/2 because it offers a vague, generalised statement with no evidence, no analysis of method, and no engagement with the writer's craft. A higher-band version: 'The poet presents war as devastatingly futile through the extended metaphor of \"ploughing the same dead field,\" which suggests that conflict achieves nothing but the repetition of suffering. The verb \"ploughing\" connotes both agricultural labour and the churning of trenches, layering the image with associations of both life and death.'",
        marks: 4,
      },
      {
        question:
          "If the OCR Language Paper 1 is 2 hours long and worth 80 marks, how many minutes per mark should you allocate? How would you divide your time across the sections?",
        lines: 4,
        modelAnswer:
          "2 hours = 120 minutes for 80 marks, which gives 1.5 minutes per mark. A question worth 10 marks should therefore take approximately 15 minutes, while one worth 20 marks should take 30 minutes. Students should plan their time before the exam and stick to it, even if they haven't finished a question — moving on to secure marks elsewhere is often more effective than perfecting one answer.",
        marks: 3,
      },
      {
        question:
          "What does 'evaluate' mean as a command word in OCR English, and how should your response differ from an 'analyse' question?",
        lines: 4,
        modelAnswer:
          "'Evaluate' requires the student to make a judgement — to weigh up how effectively the writer achieves something, considering both strengths and limitations. Unlike 'analyse', which focuses on identifying and explaining methods, 'evaluate' demands a personal critical stance: the student must offer an opinion supported by evidence. Higher-band responses consider alternative interpretations rather than presenting a single, fixed reading.",
        marks: 3,
      },
      {
        question:
          "Identify three common mistakes students make in OCR exams and explain how to avoid each one.",
        lines: 6,
        modelAnswer:
          "(1) Retelling the story instead of analysing — avoid this by always starting with a point about method rather than plot. (2) Copying out long quotations instead of embedding short ones — practise selecting 2–4 word quotations woven into your own sentences. (3) Running out of time on early questions and rushing or skipping later ones — avoid this by calculating minutes per mark before the exam and setting a timer for each section.",
        marks: 6,
      },
      {
        question:
          "Why does the OCR mark scheme reward 'critical, exploratory' responses at the highest bands? What does this look like in practice?",
        lines: 5,
        modelAnswer:
          "A 'critical, exploratory' response goes beyond identifying and explaining to questioning, challenging, and offering multiple interpretations. In practice, this means using language like 'alternatively', 'this could also suggest', or 'a contemporary reader might interpret this differently because…'. It demonstrates intellectual curiosity and independence of thought — the student is not just answering the question but engaging in a genuine critical conversation with the text.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson works best after students have completed at least one mock exam and received feedback, so they have concrete areas to improve.",
      "The sample responses for the 'Mark Scheme Makeover' should be tailored to your students' most common weaknesses.",
      "Emphasise that exam technique is a learned skill, not an innate talent. Even strong writers can underperform without deliberate exam practice.",
      "Consider running this lesson in two parts if your students need more time on the mark scheme activity.",
    ],
    targetedSkills: [
      "Exam Technique",
      "Time Management",
      "Question Decoding",
      "Mark Scheme Literacy",
      "Self-Assessment",
      "OCR Exam Technique",
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // WJEC LESSONS (6–10)
  // ══════════════════════════════════════════════════════════════════════════

  // ── 6. WJEC Language Component 1: 20th Century Literature Reading ──────
  {
    id: "wjec-lang-c1-20c-reading",
    title: "WJEC Language Component 1: 20th Century Literature Reading",
    text: "WJEC Language Component 1",
    board: "WJEC",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand the structure and question types of WJEC Language Component 1 (Reading)",
      "Analyse how 20th century writers use language and narrative techniques to engage the reader",
      "Practise responding to WJEC-style questions on a prose extract, including the 'tracking' question",
      "Develop skills in evaluating a writer's choices with reference to the whole extract",
    ],
    successCriteria: [
      "I can identify and explain at least three language techniques used by a 20th century prose writer",
      "I can respond to a WJEC 'tracking' question, following the extract from beginning to end",
      "I can evaluate how effectively a writer creates a particular effect, supporting my view with evidence",
    ],
    keywords: [
      "20th century prose",
      "tracking question",
      "narrative voice",
      "tone",
      "imagery",
      "dialogue",
      "evaluation",
      "impressions",
    ],
    starterActivity: {
      title: "What Makes 20th Century Writing Different?",
      duration: "8 minutes",
      instructions:
        "Display two short extracts side by side: one from a 19th century novel and one from a 20th century novel (both describing a similar scene, e.g. arriving in a city). Students identify three differences in style, vocabulary, and structure. Feed back and create a class list of 20th century prose characteristics (e.g. more informal register, stream of consciousness, shorter sentences, contemporary slang, dialogue-driven). Key message: WJEC Component 1 always uses 20th century literature — know what to expect.",
      differentiation: {
        support:
          "Provide a comparison grid with categories (sentence length, vocabulary, formality) to guide analysis.",
        core: "Students identify differences independently and explain each with a specific example.",
        stretch:
          "Students discuss how changes in society (war, technology, women's rights) influenced the shift in writing style.",
      },
      resources: ["Comparative extracts slide", "Comparison grid (support tier)"],
    },
    mainActivities: [
      {
        title:
          "The WJEC 'Tracking' Question – Reading Through the Extract",
        duration: "25 minutes",
        instructions:
          "Distribute a 20th century prose extract (approximately 40 lines). Explain the WJEC 'tracking' question format: 'What impressions do you get of [character/setting] from the extract? You must refer to the language used in the extract.' Model the tracking approach: work through the extract from top to bottom, selecting key quotations at different points and analysing the impression each creates. Annotate the first third of the extract as a class on the visualiser. Students annotate the remainder independently, selecting at least four quotations with analysis notes. Then students write a response using the structure: impression → quotation → analysis, tracking through the extract sequentially.",
        differentiation: {
          support:
            "Provide a response scaffold dividing the extract into three sections (beginning, middle, end) with spaces for one quotation and analysis per section. Sentence starters included.",
          core: "Students track through the extract independently and write a full response with at least four analytical points.",
          stretch:
            "Students analyse how the writer's methods shift across the extract and comment on the cumulative effect of these changes on the reader.",
        },
        resources: [
          "Printed prose extract (one per student)",
          "Tracking response scaffold (support tier)",
          "Highlighters",
        ],
      },
      {
        title: "Evaluation Question Practice",
        duration: "17 minutes",
        instructions:
          "Display the WJEC evaluation question: 'How does [the writer] make [a specific moment] particularly [effective/dramatic/tense]? You should comment on: what happens, the language used, the structure of the extract.' Explain that this question requires a judgement — students must explain why the methods work, not just identify them. Model one evaluative paragraph. Students write one paragraph independently in 8 minutes. Pairs then swap and use the WJEC mark scheme to identify one strength and one area for improvement.",
        differentiation: {
          support:
            "Provide sentence starters for evaluative language (e.g. 'This is effective because…', 'The writer successfully creates tension by…').",
          core: "Students write an independent evaluative paragraph and conduct peer assessment.",
          stretch:
            "Students consider whether the writer's technique is entirely effective, acknowledging any limitations and offering a nuanced evaluation.",
        },
        resources: [
          "WJEC evaluation question slide",
          "WJEC mark scheme extract",
          "Evaluative language bank",
        ],
      },
    ],
    plenaryActivity: {
      title: "Question Type Quick-Fire",
      duration: "7 minutes",
      instructions:
        "Display five WJEC Component 1 question stems one at a time. For each, students hold up a mini-whiteboard showing: (1) the skill being tested, (2) the approximate time they should spend on it. Teacher confirms correct answers and reinforces the importance of time allocation in the exam. Final question: 'What is the one skill you most need to practise before the exam?' Students write their answer and hand it in as a self-assessment.",
      differentiation: {
        support: "Provide a question types reference card to use during the activity.",
        core: "Students answer from memory and self-assess honestly.",
        stretch:
          "Students explain why each question type is allocated its particular mark weighting.",
      },
    },
    homework:
      "Read a 20th century short story extract provided. Complete a tracking response: 'What impressions do you get of the main character?' Use at least four quotations and track through the extract sequentially.",
    worksheetQuestions: [
      {
        question:
          "What impressions do you get of the setting from the opening of the extract? You must refer to the language used.",
        lines: 8,
        modelAnswer:
          "At the beginning of the extract, the setting is presented as oppressive and claustrophobic. The writer describes the room as 'thick with the smell of damp wool and old arguments', using sensory language that creates a vivid, uncomfortable atmosphere. The metaphor of 'old arguments' having a smell suggests that conflict has seeped into the physical environment itself. As the extract progresses, the imagery shifts — the opening of a window lets in 'a blade of cold air', and the word 'blade' introduces a sense of sharpness and danger, implying that the outside world offers no comfort either. By the end of the extract, the setting feels inescapable, as the character 'sank back into the chair that had moulded itself to her shape', suggesting she has been trapped there so long that even the furniture has adapted to her imprisonment.",
        marks: 10,
      },
      {
        question:
          "Explain what a WJEC 'tracking' question requires you to do and why the order of your response matters.",
        lines: 4,
        modelAnswer:
          "A WJEC tracking question requires you to work through the extract from beginning to end, selecting quotations at different points and analysing the impressions they create. The order matters because the examiner wants to see that you can follow the development of a character, setting, or theme across the extract — how it changes, builds, or shifts. Writing about random quotations out of order will not demonstrate this skill and will limit your mark.",
        marks: 3,
      },
      {
        question:
          "How does the writer make the final paragraph of the extract particularly effective? Comment on language and structure.",
        lines: 6,
        modelAnswer:
          "The writer makes the final paragraph effective by dramatically shortening the sentence length after the long, flowing descriptions of earlier paragraphs. The sentence 'She left.' stands alone, and its brevity creates a powerful contrast that mirrors the character's sudden decisiveness. The use of the past tense ('left', not 'was leaving') conveys finality and irreversibility. Structurally, placing this sentence as the last line gives it maximum impact — the reader is left with a sense of abrupt, quiet resolution after pages of turmoil.",
        marks: 4,
      },
      {
        question:
          "Why does WJEC Language Component 1 focus specifically on 20th century literature?",
        lines: 3,
        modelAnswer:
          "WJEC Component 1 focuses on 20th century literature because it allows students to engage with modern prose that reflects contemporary experiences, language, and social issues. The language is generally more accessible than pre-20th century texts, allowing the assessment to focus on analytical skill rather than comprehension of archaic vocabulary. It also ensures students encounter a range of genres and styles from an important literary period.",
        marks: 2,
      },
      {
        question:
          "Identify one example of dialogue in the extract and analyse what it reveals about the character.",
        lines: 5,
        modelAnswer:
          "When the character says 'I'm fine — I said I'm fine', the repetition reveals that they are clearly not fine. The dash creates a pause that suggests irritation or desperation, and the emphasis implied by 'I said' indicates they are aware their words are unconvincing. The use of dialogue rather than narrative description forces the reader to interpret the subtext — what is unsaid becomes more important than what is spoken, which is a hallmark of effective 20th century characterisation.",
        marks: 4,
      },
      {
        question:
          "What does the WJEC mark scheme mean by 'detailed and sustained analysis' in the higher bands?",
        lines: 4,
        modelAnswer:
          "'Detailed' means the analysis goes beyond identification to explore specific word choices, their connotations, and their effects in depth. 'Sustained' means this quality is maintained throughout the response, not just in one or two paragraphs. A student achieving the higher bands will demonstrate consistent close reading from the first analytical point to the last, rather than starting well and then declining into vague generalisation.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "WJEC Component 1 always uses a 20th century literary prose extract. Ensure students are familiar with a range of 20th century styles (modernism, post-war realism, contemporary literary fiction).",
      "The 'tracking' question is distinctive to WJEC and Eduqas. Drill the sequential approach — students who jump around the extract will be penalised.",
      "Welsh-medium schools may use Eduqas rather than WJEC; confirm which specification your centre follows.",
      "Select extracts that offer rich language for analysis but are accessible enough for all ability levels.",
    ],
    targetedSkills: [
      "Language Analysis",
      "Reading Comprehension",
      "Evaluation",
      "Tracking Analysis",
      "WJEC Exam Technique",
      "Inference",
    ],
  },

  // ── 7. WJEC Language Component 2: Non-Fiction & Transactional Writing ──
  {
    id: "wjec-lang-c2-nonfiction-transactional",
    title: "WJEC Language Component 2: Non-Fiction & Transactional Writing",
    text: "WJEC Language Component 2",
    board: "WJEC",
    yearGroup: "Year 10",
    duration: "60 minutes",
    objectives: [
      "Understand the reading and writing demands of WJEC Language Component 2",
      "Analyse how non-fiction writers use persuasive and rhetorical techniques",
      "Practise writing in a range of transactional formats (letter, article, speech, report, review)",
      "Apply WJEC mark scheme criteria to assess and improve transactional writing",
    ],
    successCriteria: [
      "I can identify and analyse at least four persuasive or rhetorical techniques in a non-fiction text",
      "I can write a transactional piece that is appropriately shaped by format, audience, and purpose",
      "I can use the WJEC mark scheme to self-assess and improve my own transactional writing",
    ],
    keywords: [
      "transactional writing",
      "rhetoric",
      "persuasion",
      "audience",
      "purpose",
      "format",
      "register",
      "discourse markers",
    ],
    starterActivity: {
      title: "Format or Fail",
      duration: "8 minutes",
      instructions:
        "Display five WJEC-style writing prompts on the board (e.g. 'Write a speech to your year group arguing that…', 'Write a letter to a newspaper about…', 'Write a report for the headteacher on…'). Students have 3 minutes to identify: the format, audience, purpose, and likely register of each. Discuss: which would be most formal? Which allows the most personal voice? Key message: in WJEC Component 2, using the wrong format or register will significantly limit your marks.",
      differentiation: {
        support:
          "Provide a format features reference card (letter layout, speech conventions, article structure).",
        core: "Students identify all four elements independently for each prompt.",
        stretch:
          "Students explain how their language choices would differ between the most formal and least formal prompt.",
      },
      resources: [
        "Writing prompts slide",
        "Format features reference card (support tier)",
      ],
    },
    mainActivities: [
      {
        title: "Reading Non-Fiction — Rhetorical Analysis",
        duration: "18 minutes",
        instructions:
          "Distribute a non-fiction text (e.g. a newspaper opinion column about a topical Welsh or UK issue). Read aloud together. Students annotate for persuasive and rhetorical techniques: rhetorical questions, tricolon (rule of three), emotive language, anecdote, direct address, hyperbole, counter-argument, and expert reference. After independent annotation, pairs compare and create a 'Top 5 Techniques' list. Teacher models an analytical paragraph: technique → example → effect on reader. Students write one analytical paragraph independently.",
        differentiation: {
          support:
            "Provide a techniques checklist with definitions and examples. Pre-highlight key sections of the text.",
          core: "Students annotate independently and write a full analytical paragraph.",
          stretch:
            "Students evaluate the overall effectiveness of the text's argument, considering whether any techniques undermine rather than strengthen the writer's case.",
        },
        resources: [
          "Non-fiction text (printed, one per student)",
          "Rhetorical techniques checklist",
          "Highlighters",
        ],
      },
      {
        title: "Transactional Writing — WJEC Exam-Style Task",
        duration: "25 minutes",
        instructions:
          "Display a WJEC-style transactional writing prompt (e.g. 'Write an article for a school magazine in which you argue for or against [topical issue]'). Discuss and agree: format, audience, purpose, register. Students plan using a structure strip (introduction hook → three paragraphs with topic sentences → counter-argument → conclusion). Write for 18 minutes under timed conditions. In the final 5 minutes, students proofread using a SPaG checklist (paragraphs, sentence variety, apostrophes, spelling of key terms, and punctuation variety). Two or three students share their opening paragraphs for class feedback.",
        differentiation: {
          support:
            "Provide a writing frame with paragraph headings, sentence starters, and a persuasive vocabulary bank.",
          core: "Students plan and write independently using the structure strip.",
          stretch:
            "Students incorporate a counter-argument paragraph that they then dismantle, and use a range of advanced punctuation (semicolons, colons, dashes) for effect.",
        },
        resources: [
          "Writing prompt slide",
          "Structure strip template",
          "SPaG proofreading checklist",
          "Persuasive vocabulary bank (support tier)",
        ],
      },
    ],
    plenaryActivity: {
      title: "Two Stars and a Wish",
      duration: "7 minutes",
      instructions:
        "Students read their own transactional writing and complete a self-assessment card: two things they did well (stars) and one thing they would improve (wish). Each star and wish must reference a specific WJEC mark scheme criterion (e.g. 'I used varied punctuation for effect — this meets the Organisation and Communication Band 4 descriptor'). Share wishes in pairs and agree an action step for next time.",
      differentiation: {
        support:
          "Display simplified WJEC mark scheme criteria on the board for reference.",
        core: "Students complete the card independently with specific mark scheme references.",
        stretch:
          "Students assign themselves a mark scheme band for both Communication/Organisation and Writing Skills, justifying each with evidence from their work.",
      },
    },
    homework:
      "Write a letter to a local council member about an issue that matters to you. Use appropriate format, register, and at least five persuasive techniques. Underline and label each technique.",
    worksheetQuestions: [
      {
        question:
          "Identify and explain the effect of three persuasive techniques used in the non-fiction text.",
        lines: 6,
        modelAnswer:
          "The writer uses a tricolon — 'it damages our health, it damages our community, it damages our future' — to build a rhythmic, emphatic argument that accumulates force with each repetition. The emotive language 'devastating' and 'heartbreaking' appeals to the reader's emotions, making it harder to disagree rationally. The direct address 'you know this is wrong' creates a personal, confrontational tone that places responsibility on the individual reader, making the argument feel inescapable.",
        marks: 6,
      },
      {
        question:
          "What is the difference between 'format' and 'register' in transactional writing?",
        lines: 3,
        modelAnswer:
          "Format refers to the structural conventions of a text type — for example, a letter has addresses, a date, 'Dear…' and 'Yours…', while a speech might begin with 'Ladies and gentlemen'. Register refers to the level of formality in language choices — a report for a headteacher would use formal, impersonal register, while a magazine article for teenagers could be more conversational and colloquial.",
        marks: 2,
      },
      {
        question:
          "Write the opening paragraph of a speech to your year group arguing that [your chosen issue]. Make your opening engaging and establish your argument clearly.",
        lines: 8,
        modelAnswer:
          "Every single day, 150 million plastic bottles are bought in this country alone. Let me say that again — 150 million. Now look around this hall. Every one of you has probably used at least one today. I'm not here to make you feel guilty; I'm here to make you feel powerful. Because the truth is, we — yes, us, right here in this room — have the ability to change this. Not next year, not when we're adults, but now. Today I want to convince you that our school should go entirely plastic-free, and I want to show you exactly how we can make it happen.",
        marks: 6,
      },
      {
        question:
          "Explain why the WJEC mark scheme assesses 'organisation' separately from 'communication' in transactional writing.",
        lines: 4,
        modelAnswer:
          "Organisation and communication are separate skills. A student might communicate persuasive ideas effectively but present them in a disorganised, rambling structure — or they might have a clear structure but dull, generic content. By assessing them separately, the WJEC mark scheme recognises that high-quality transactional writing requires both compelling ideas AND a logical, well-signposted structure. This also means students can identify which specific skill they need to improve.",
        marks: 3,
      },
      {
        question:
          "What is a counter-argument and why is it an effective technique in persuasive writing?",
        lines: 4,
        modelAnswer:
          "A counter-argument is when the writer acknowledges an opposing viewpoint before responding to it or dismissing it. It is effective because it demonstrates fairness and credibility — the writer appears reasonable and well-informed rather than one-sided. It also strengthens the overall argument by pre-emptively addressing potential objections, making it harder for the reader to disagree. Example: 'Some might argue that the cost is too high — but can we really put a price on our children's health?'",
        marks: 3,
      },
      {
        question:
          "How does WJEC Component 2 differ from Component 1 in terms of what is assessed?",
        lines: 4,
        modelAnswer:
          "WJEC Component 1 focuses on reading 20th century literary prose, assessing students' ability to analyse language, track impressions, and evaluate effectiveness. Component 2 combines non-fiction reading (analysing persuasive and informational texts) with transactional writing (producing texts for specific audiences and purposes in specified formats). Component 2 therefore has a broader range of skills and includes both reading and extended writing.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "Use topical, engaging non-fiction texts. Issues relevant to Wales (e.g. Welsh language policy, tourism, devolution) add authenticity for WJEC students.",
      "The transactional writing formats (letter, article, speech, report, review) must be explicitly taught — students lose marks for incorrect format conventions.",
      "WJEC/Eduqas Component 2 writing is worth 40 marks. Emphasise that SPaG (spelling, punctuation, grammar) carries significant weight in the writing assessment.",
      "Students in Welsh centres should be aware that WJEC questions may reference Welsh contexts — this is normal and should be embraced, not seen as unusual.",
    ],
    targetedSkills: [
      "Persuasive Writing",
      "Transactional Writing",
      "Rhetorical Devices",
      "Non-Fiction Reading",
      "WJEC Exam Technique",
      "Audience and Purpose",
    ],
  },

  // ── 8. WJEC Literature Component 1: Shakespeare & Poetry ──────────────
  {
    id: "wjec-lit-c1-shakespeare-poetry",
    title: "WJEC Literature Component 1: Shakespeare & Poetry",
    text: "WJEC Literature Component 1",
    board: "WJEC",
    yearGroup: "Year 11",
    duration: "60 minutes",
    objectives: [
      "Understand the structure of the WJEC Literature Component 1 paper (Shakespeare and Poetry)",
      "Develop skills in responding to an extract-based Shakespeare question with wider textual knowledge",
      "Practise comparing two poems from the WJEC anthology on a shared theme",
      "Apply WJEC assessment criteria to strengthen analytical and comparative responses",
    ],
    successCriteria: [
      "I can write an analytical response to a Shakespeare extract question that references the wider play",
      "I can compare two anthology poems using integrated comparison throughout my response",
      "I can identify what distinguishes a Band 4/5 response from a Band 2/3 response using WJEC criteria",
    ],
    keywords: [
      "extract-based question",
      "wider textual knowledge",
      "comparison",
      "dramatic techniques",
      "poetic methods",
      "context",
      "iambic pentameter",
      "anthology",
    ],
    starterActivity: {
      title: "Shakespeare vs. Poetry: Know Your Paper",
      duration: "7 minutes",
      instructions:
        "Display the WJEC Literature Component 1 paper structure on the board. Students complete a gap-fill exercise on mini-whiteboards: Section A = Shakespeare (extract + essay), Section B = Poetry (comparison). Quiz: How long for each section? How many marks? Must you compare in Section B? (Yes — always.) Can you use the anthology in the exam? (Yes — it is an open-book poetry section for WJEC.) Address any misconceptions. Key message: knowing the paper structure saves time and reduces panic on exam day.",
      differentiation: {
        support: "Provide the paper structure as a printed reference card to keep.",
        core: "Students complete the gap-fill from memory and self-correct.",
        stretch:
          "Students calculate a time plan for the paper and explain their reasoning.",
      },
      resources: [
        "Paper structure slide",
        "Mini-whiteboards",
        "Reference card (support tier)",
      ],
    },
    mainActivities: [
      {
        title: "Shakespeare Extract Response — WJEC Style",
        duration: "25 minutes",
        instructions:
          "Distribute a Shakespeare extract (approximately 20–30 lines from the set play). Display the WJEC question: 'Look at the extract. How does [Shakespeare] present [character/theme] here and in the play as a whole?' Emphasise the two-part requirement: detailed analysis of the extract AND references to the wider play. Model annotating the extract for: dramatic techniques (soliloquy, aside, dramatic irony), language (imagery, metaphor, repetition), and contextual significance. Model one paragraph analysing the extract and one 'zooming out' paragraph linking to the wider play. Students then write two paragraphs independently (one extract-focused, one whole-play-focused). Share and critique.",
        differentiation: {
          support:
            "Provide a glossary of Shakespearean vocabulary in the extract and a paragraph frame with sentence starters for both the extract and whole-play paragraphs.",
          core: "Students annotate and write two full paragraphs independently.",
          stretch:
            "Students write a third paragraph exploring how an Elizabethan/Jacobean audience might have responded differently to the extract compared to a modern audience.",
        },
        resources: [
          "Printed Shakespeare extract",
          "Shakespearean vocabulary glossary (support tier)",
          "Paragraph frame (support tier)",
          "WJEC mark scheme extract",
        ],
      },
      {
        title: "Poetry Comparison — Anthology Practice",
        duration: "20 minutes",
        instructions:
          "Display a WJEC-style poetry comparison question: 'Compare the ways in which [theme] is presented in [Poem A] and [Poem B].' Remind students that the WJEC anthology is open-book — they should have annotated copies. Model the comparison structure: introduce both poems' stance on the theme → comparative point 1 (method + quotation from both poems) → comparative point 2 → conclusion evaluating which poem is more effective. Students write one comparative paragraph under timed conditions (8 minutes). Pairs swap and assess using WJEC criteria, focusing on: is comparison integrated throughout, or are the poems discussed separately?",
        differentiation: {
          support:
            "Provide a comparative paragraph frame and pre-selected quotations from both poems.",
          core: "Students write a comparative paragraph independently and complete peer assessment.",
          stretch:
            "Students write two comparative paragraphs and include comments on how form and structure (not just language) contribute to meaning.",
        },
        resources: [
          "Poetry anthology copies (annotated)",
          "Comparative paragraph frame (support tier)",
          "WJEC poetry mark scheme criteria",
        ],
      },
    ],
    plenaryActivity: {
      title: "Band Boundary Challenge",
      duration: "8 minutes",
      instructions:
        "Display two anonymous poetry comparison paragraphs: one at Band 3 and one at Band 4. Students identify which is which and explain the differences, referring to specific WJEC mark scheme language. Then students rewrite one sentence from the Band 3 response to make it Band 4 quality. Share improvements and agree on a class checklist of 'Band 4 non-negotiables'.",
      differentiation: {
        support: "Provide the mark scheme with key phrases highlighted.",
        core: "Students identify the band and rewrite one sentence independently.",
        stretch:
          "Students explain three specific changes that would elevate the Band 3 response to Band 5.",
      },
    },
    homework:
      "Using your annotated anthology, write a comparison of two poems on a theme of your choice. Your response must include: integrated comparison throughout, at least two embedded quotations per poem, and analysis of methods (not just content).",
    worksheetQuestions: [
      {
        question:
          "How does Shakespeare present [character] in this extract? You should comment on language, dramatic techniques, and context.",
        lines: 8,
        modelAnswer:
          "Shakespeare presents the character as increasingly isolated through a combination of language and dramatic technique. The soliloquy form itself signals isolation — the character speaks alone on stage, physically separated from others, which mirrors their emotional and moral separation from society. The rhetorical question 'Is this a dagger which I see before me?' reveals inner turmoil and psychological fracture, as the character can no longer distinguish reality from hallucination. The imagery of blood — 'gouts of blood' — is visceral and suggests guilt is already consuming the character before the act is committed. Contextually, a Jacobean audience would recognise this as divine judgement beginning to manifest, reinforcing the play's moral framework.",
        marks: 8,
      },
      {
        question:
          "Compare how two anthology poems present the theme of loss. You should compare their methods and their effects on the reader.",
        lines: 8,
        modelAnswer:
          "Both poems explore loss, but through strikingly different methods. Poem A uses a regular, controlled form — four neat quatrains with a consistent rhyme scheme — to suggest that the speaker is containing their grief within rigid boundaries, as though structure itself is a coping mechanism. In contrast, Poem B's free verse and irregular line lengths mirror the chaotic, uncontrollable nature of the speaker's grief. While Poem A uses extended metaphor to distance the reader from raw emotion, Poem B employs visceral, physical imagery ('the hollow where your hand used to rest') to create an intimate, almost unbearable immediacy. Both are effective, but Poem B's refusal to offer resolution is arguably more honest about the experience of loss.",
        marks: 8,
      },
      {
        question:
          "Why does the WJEC Literature paper require you to discuss 'the play as a whole' as well as the extract?",
        lines: 4,
        modelAnswer:
          "The WJEC requires discussion of the whole play to ensure students demonstrate broad textual knowledge rather than relying solely on the given extract. This tests whether students understand how the extract fits within the play's narrative arc, character development, and thematic concerns. A student who can connect the extract to other moments in the play shows deeper understanding and achieves higher bands in the mark scheme.",
        marks: 3,
      },
      {
        question:
          "The WJEC poetry section is open-book. How should this affect your preparation and exam approach?",
        lines: 4,
        modelAnswer:
          "Open-book means you can take an annotated anthology into the exam, so rote memorisation of quotations is less important than for closed-book exams. However, this does NOT mean less preparation is needed. Students should annotate their anthologies thoroughly before the exam, identifying key quotations, methods, and thematic links for each poem. In the exam, an annotated anthology saves time and ensures you can find relevant evidence quickly. The risk of open-book is complacency — students who rely on finding quotations in the exam rather than knowing them often run out of time.",
        marks: 3,
      },
      {
        question:
          "Explain the difference between 'integrated comparison' and 'writing about each poem separately'. Which does the WJEC reward?",
        lines: 4,
        modelAnswer:
          "Integrated comparison means discussing both poems within the same paragraph, using comparative connectives (similarly, in contrast, whereas) to draw out connections and differences in method and meaning. Writing about each poem separately means producing two isolated analyses with perhaps a brief link at the end. WJEC rewards integrated comparison because it demonstrates the higher-order skill of synthesis — the ability to see patterns and differences across texts simultaneously. Separate treatment limits students to the mid-bands.",
        marks: 3,
      },
      {
        question:
          "Identify one dramatic technique Shakespeare uses in the extract and explain its effect on the audience.",
        lines: 5,
        modelAnswer:
          "Shakespeare uses dramatic irony when the character declares 'I am settled' immediately before events spiral beyond their control. The audience, aware of what is to come, recognises the terrible gap between the character's confidence and their impending downfall. This creates tension and a sense of tragic inevitability — the character's certainty becomes pitiable rather than reassuring. For a Jacobean audience steeped in the belief that pride precedes a fall, this moment would be particularly charged with moral significance.",
        marks: 4,
      },
    ],
    teacherNotes: [
      "This lesson combines both sections of WJEC Literature Component 1. If your students need more time, split it across two lessons (one Shakespeare, one Poetry).",
      "The open-book anthology is a significant advantage if students have annotated well. Build annotation skills throughout the poetry unit, not just before the exam.",
      "For the Shakespeare section, ensure students practise the 'zoom out' skill — many focus too heavily on the extract and neglect whole-play references.",
      "WJEC mark schemes reward 'purposeful use of textual references' — teach students to embed short quotations rather than copying out long passages.",
    ],
    targetedSkills: [
      "Shakespeare",
      "Poetry Comparison",
      "Dramatic Techniques",
      "Comparative Writing",
      "Contextual Understanding",
      "WJEC Exam Technique",
    ],
  },

  // ── 9. WJEC Literature Component 2: Post-1914 Prose & Drama ───────────
  {
    id: "wjec-lit-c2-post1914-prose-drama",
    title: "WJEC Literature Component 2: Post-1914 Prose & Drama",
    text: "WJEC Literature Component 2",
    board: "WJEC",
    yearGroup: "Year 11",
    duration: "60 minutes",
    objectives: [
      "Understand the structure and demands of WJEC Literature Component 2 (post-1914 prose and drama)",
      "Develop skills in responding to extract-based and essay questions on modern prose and drama texts",
      "Analyse how post-1914 writers use language, structure, and dramatic techniques to convey themes",
      "Explore the social and historical contexts relevant to post-1914 set texts",
    ],
    successCriteria: [
      "I can write an analytical response to a WJEC-style question on a post-1914 prose or drama text",
      "I can connect my analysis to relevant social and historical context",
      "I can distinguish between the requirements of extract-based and essay-style questions",
    ],
    keywords: [
      "post-1914",
      "modern drama",
      "modern prose",
      "stage directions",
      "social context",
      "dramatic tension",
      "characterisation",
      "symbolism",
    ],
    starterActivity: {
      title: "Context Timeline – Post-1914",
      duration: "8 minutes",
      instructions:
        "Display a timeline spanning 1914 to the present day with key historical events marked (WWI, WWII, NHS founded, Windrush, feminism, Thatcherism, devolution in Wales, etc.). Students place their set text on the timeline and identify three contextual factors that might have influenced the writer. Discuss as a class: how does knowing when and where a text was written change how we read it? Key message: WJEC Literature rewards contextual understanding at every band.",
      differentiation: {
        support:
          "Provide a pre-completed timeline with context cards that students match to events.",
        core: "Students identify three contextual factors independently and explain each briefly.",
        stretch:
          "Students explain how the same text might have been written differently if set in a different decade and why.",
      },
      resources: ["Timeline display slide", "Context cards (support tier)"],
    },
    mainActivities: [
      {
        title: "Extract-Based Question – Modern Prose or Drama",
        duration: "25 minutes",
        instructions:
          "Distribute an extract from the set post-1914 text (prose or drama, approximately 25–30 lines). Display the WJEC question: 'How does [the writer] present [theme/character] in this extract and elsewhere in the text?' Read the extract aloud, pausing to clarify meaning and annotate key moments. For drama extracts, identify: stage directions, subtext, dramatic irony, and power dynamics between characters. For prose extracts, focus on: narrative voice, imagery, symbolism, and shifts in tone. Model one analytical paragraph. Students then write two paragraphs: one close analysis of the extract, one referencing elsewhere in the text. Circulate and target feedback on the weakest skill area.",
        differentiation: {
          support:
            "Provide a dual-column annotation guide (left: what happens, right: how the writer presents it). Paragraph frame with sentence starters for both extract and wider-text paragraphs.",
          core: "Students annotate and write two paragraphs independently.",
          stretch:
            "Students write a third paragraph exploring how the writer uses the extract to develop a motif or symbol that runs through the entire text.",
        },
        resources: [
          "Printed extract (one per student)",
          "Annotation guide (support tier)",
          "Paragraph frame (support tier)",
          "WJEC Literature Component 2 mark scheme extract",
        ],
      },
      {
        title: "Essay-Style Question — Planning and Structuring",
        duration: "18 minutes",
        instructions:
          "Display a WJEC essay-style question (no extract provided): 'How does [the writer] present the theme of [theme] in [text]? Write about: the importance of [theme] in the text, how [the writer] presents [theme] by the ways they write.' Explain the difference from the extract question: here, students must select their own evidence from across the text. Model a quick planning technique: mind-map three key moments in the text where the theme is prominent, select a quotation for each, and identify the method used. Students create their own plan in 5 minutes, then write one full paragraph from their plan. Pairs share and critique: is the point clear? Is the quotation well-chosen? Is the method identified and analysed?",
        differentiation: {
          support:
            "Provide a bank of key quotations from the text related to the theme, and a planning template with spaces for three paragraphs.",
          core: "Students plan independently and write one paragraph from their plan.",
          stretch:
            "Students plan all three paragraphs and write a full essay introduction that establishes their argument and references context.",
        },
        resources: [
          "Essay question slide",
          "Planning template",
          "Quotation bank (support tier)",
        ],
      },
    ],
    plenaryActivity: {
      title: "Extract vs. Essay — What Changes?",
      duration: "7 minutes",
      instructions:
        "Display two questions side by side: one extract-based, one essay-style, both on the same text and theme. Students discuss in pairs: how would your approach differ? Create a class table: Extract Question (close analysis + wider references) vs. Essay Question (select your own evidence + sustained argument across the whole text). Students write one sentence summarising the key difference. Teacher reinforces: both require method analysis and context, but the balance of evidence selection shifts.",
      differentiation: {
        support:
          "Provide the comparison table partially completed for students to finish.",
        core: "Students complete the table and summary sentence independently.",
        stretch:
          "Students explain which question type plays to their strengths and create a personal strategy for each.",
      },
    },
    homework:
      "Choose one essay-style question from a past WJEC paper on your set text. Create a detailed plan (three paragraphs, with quotations and methods identified for each) and write one full paragraph. Bring the plan and paragraph to the next lesson.",
    worksheetQuestions: [
      {
        question:
          "How does the writer present the theme of power in this extract? You should consider language, structure, and dramatic/narrative techniques.",
        lines: 8,
        modelAnswer:
          "The writer presents power as corrupt and destabilising through a combination of language and structural choices. The character's speech becomes increasingly fragmented as they gain authority — 'I want — no, I need — no, I will have it' — with the dashes and self-corrections revealing that power is not bringing clarity but confusion and obsession. The stage direction '(stands, towering over the others)' physically manifests the power imbalance, and the verb 'towering' connotes both dominance and threat. Structurally, this extract is positioned at the midpoint of the play, a turning point where the character transitions from sympathetic underdog to oppressor, which forces the audience to reassess their earlier allegiance.",
        marks: 6,
      },
      {
        question:
          "Explain the difference between an extract-based question and an essay question in WJEC Literature Component 2.",
        lines: 4,
        modelAnswer:
          "An extract-based question provides a passage from the text and asks students to analyse it closely before making references to the wider text. An essay question provides no extract — students must select their own evidence from across the entire text to build a sustained argument. Both require analysis of the writer's methods and relevant context, but the essay question places greater demand on the student's knowledge of the text and their ability to select relevant evidence independently.",
        marks: 3,
      },
      {
        question:
          "How might the social or historical context of the text influence the way a character is presented?",
        lines: 5,
        modelAnswer:
          "The social and historical context shapes character presentation because writers often create characters who embody, challenge, or are shaped by the values and conditions of their time. For example, a female character in a post-1914 text set during the 1950s may be presented as constrained by domestic expectations, with the writer using imagery of entrapment to critique societal norms. Understanding this context allows the reader to see the character not just as an individual but as a representative of broader social tensions, which enriches analysis and accesses AO3 marks.",
        marks: 4,
      },
      {
        question:
          "Why are stage directions important when analysing a drama text?",
        lines: 4,
        modelAnswer:
          "Stage directions reveal the playwright's intentions for performance — they convey characters' physical movements, facial expressions, tone of voice, and the overall atmosphere of a scene. Analysing stage directions allows students to discuss the visual and physical impact of a moment, not just the spoken dialogue. For example, a stage direction like '(turns away, clenching fists)' reveals suppressed anger that contradicts the character's calm spoken words, creating dramatic tension and subtext for the audience.",
        marks: 3,
      },
      {
        question:
          "Choose a moment from elsewhere in the text that connects to the theme explored in the extract. Explain the connection.",
        lines: 6,
        modelAnswer:
          "The theme of power explored in the extract connects to the opening scene, where the same character is described as 'small, quiet, easily overlooked'. This contrast is significant because it shows the character's transformation — the power they now wield was not inherent but acquired, making it feel precarious and potentially dangerous. The writer's decision to begin with powerlessness and end with destructive power creates a structural arc that implies power corrupts, a theme reinforced by the cyclical structure of the text where the final scene echoes the first.",
        marks: 4,
      },
      {
        question:
          "What does the WJEC mark scheme mean by 'assured and sustained response' at the higher bands?",
        lines: 4,
        modelAnswer:
          "'Assured' means the response is confident, well-informed, and demonstrates a secure understanding of the text — the student writes with authority rather than uncertainty. 'Sustained' means this quality is maintained throughout the entire response, not just in isolated paragraphs. Together, these descriptors reward students who produce a consistently analytical response that builds a coherent argument from start to finish, rather than offering a few strong points surrounded by weaker material.",
        marks: 3,
      },
    ],
    teacherNotes: [
      "This lesson is designed to work with any WJEC post-1914 set text. Adapt the extract and essay questions to your specific prose or drama text.",
      "WJEC Literature Component 2 covers both prose and drama — ensure students have practised responding to both text types across the unit.",
      "The essay-style question is often where students lose marks because they struggle to select their own evidence. Regular quotation recall practice is essential.",
      "Welsh-context texts (e.g. texts set in Wales or by Welsh writers) may appear on WJEC papers — encourage students to see Welsh contexts as an asset, not an oddity.",
    ],
    targetedSkills: [
      "Character Analysis",
      "Theme Analysis",
      "Dramatic Techniques",
      "Contextual Understanding",
      "Essay Structure",
      "WJEC Exam Technique",
    ],
  },

  // ── 10. WJEC Exam Strategy: Understanding Welsh-Specific Requirements ──
  {
    id: "wjec-exam-strategy-welsh-requirements",
    title: "WJEC Exam Strategy: Understanding Welsh-Specific Requirements",
    text: "WJEC Exam Skills",
    board: "WJEC",
    yearGroup: "Year 11",
    duration: "60 minutes",
    objectives: [
      "Understand how WJEC exam papers differ from other English exam boards (AQA, OCR, Edexcel)",
      "Identify Welsh-specific features of WJEC papers, including text selection, mark scheme language, and assessment structure",
      "Develop targeted revision strategies for WJEC English Language and Literature papers",
      "Practise applying WJEC mark scheme band descriptors to maximise marks",
    ],
    successCriteria: [
      "I can explain at least three ways WJEC papers differ from other exam boards",
      "I can use WJEC band descriptors to accurately assess a sample response",
      "I can create a personalised revision plan that targets my weakest WJEC assessment areas",
    ],
    keywords: [
      "WJEC",
      "Eduqas",
      "band descriptors",
      "assessment objectives",
      "Welsh context",
      "mark allocation",
      "open-book",
      "closed-book",
      "tracking question",
    ],
    starterActivity: {
      title: "Board Comparison Myth-Buster",
      duration: "8 minutes",
      instructions:
        "Display six statements about WJEC exams, some true and some false (e.g. 'WJEC poetry is open-book', 'WJEC is easier than AQA', 'WJEC always includes Welsh-context texts', 'WJEC and Eduqas are identical', 'WJEC Language uses 20th century texts in Component 1'). Students vote true or false on mini-whiteboards. Reveal and discuss each answer, correcting common misconceptions. Key message: WJEC has distinctive features that require specific preparation — generic revision guides for other boards will not fully prepare you.",
      differentiation: {
        support: "Provide a WJEC facts sheet to refer to during the activity.",
        core: "Students answer from memory and self-correct.",
        stretch:
          "Students explain why each misconception exists and how it could lead to lost marks in the exam.",
      },
      resources: [
        "Myth-buster statements slide",
        "Mini-whiteboards",
        "WJEC facts sheet (support tier)",
      ],
    },
    mainActivities: [
      {
        title: "WJEC vs. Other Boards — Understanding the Differences",
        duration: "20 minutes",
        instructions:
          "Distribute a comparison table covering WJEC, AQA, and OCR across key categories: paper structure, number of components, open vs. closed book, text types used, question styles (tracking question, evaluation question, comparison question), and mark allocation. Students work in groups of three, each taking one board to research from provided specification summaries. Groups then teach each other their board's features. As a class, highlight the WJEC-specific elements that require different preparation: (1) the tracking question in Language Component 1, (2) the open-book poetry anthology in Literature, (3) the emphasis on Welsh-context texts, (4) the distinction between WJEC (Wales) and Eduqas (England). Students annotate their comparison table with revision implications.",
        differentiation: {
          support:
            "Provide a partially completed comparison table with the WJEC column filled in. Students focus on understanding the WJEC features rather than researching all three boards.",
          core: "Students research their assigned board and contribute to group teaching independently.",
          stretch:
            "Students analyse which WJEC-specific features represent advantages for well-prepared students and explain how to exploit them in the exam.",
        },
        resources: [
          "Board comparison table template",
          "WJEC specification summary",
          "AQA specification summary",
          "OCR specification summary",
        ],
      },
      {
        title: "Band Descriptor Workshop — WJEC Mark Scheme in Action",
        duration: "22 minutes",
        instructions:
          "Display the WJEC band descriptors for one question type (e.g. the Literature Component 1 Shakespeare question). Read through Bands 1–5 together, highlighting the key words that differentiate each band (e.g. Band 2: 'some understanding' → Band 3: 'sound understanding' → Band 4: 'thorough understanding' → Band 5: 'assured, perceptive understanding'). Distribute two sample student responses to the same question. Students work in pairs to: (1) assign each response a band, (2) underline the specific features that justify their decision, (3) write bullet-point advice for each student to move up one band. Share and discuss as a class. Teacher reveals the 'official' marks and explains any discrepancies. Finally, students identify which band their own most recent mock response fell into and write three personal targets.",
        differentiation: {
          support:
            "Provide a glossary defining WJEC band descriptor terminology (e.g. 'assured' = confident and knowledgeable, 'perceptive' = showing deep insight). Work with a simplified three-band system initially.",
          core: "Students assign bands independently and write specific improvement advice.",
          stretch:
            "Students rewrite one paragraph from the weaker response to demonstrate Band 5 quality, then explain exactly what they changed and why.",
        },
        resources: [
          "WJEC band descriptors (printed, one per student)",
          "Two sample student responses (printed)",
          "Band descriptor glossary (support tier)",
          "Highlighters",
        ],
      },
    ],
    plenaryActivity: {
      title: "My WJEC Revision Action Plan",
      duration: "8 minutes",
      instructions:
        "Students complete a revision action plan template with four sections: (1) My strongest WJEC paper/component and why, (2) My weakest WJEC paper/component and the specific skill I need to improve, (3) Three concrete actions I will take before the exam (e.g. 'Practise two tracking questions under timed conditions'), (4) One WJEC-specific technique I will use in the exam that I didn't know before today. Students share their weakest area with a partner; partners suggest one additional revision strategy. Collect plans and review to inform future lesson planning.",
      differentiation: {
        support:
          "Provide a revision action plan template with prompts and a menu of possible actions.",
        core: "Students complete the plan independently with specific, measurable targets.",
        stretch:
          "Students create a week-by-week revision timetable for the remaining weeks before the exam, allocating specific WJEC skills to each session.",
      },
    },
    homework:
      "Complete one full WJEC past paper question (your choice of component and question type) under timed conditions. Before writing, annotate the question to identify: the command word, the assessment objectives being tested, the time you should spend, and any WJEC-specific requirements (e.g. tracking, comparison, whole-text reference). Bring the annotated question and your response to the next lesson.",
    worksheetQuestions: [
      {
        question:
          "Explain three ways in which WJEC English exams differ from AQA or OCR exams.",
        lines: 6,
        modelAnswer:
          "(1) WJEC Literature includes an open-book poetry section, meaning students can take an annotated anthology into the exam, whereas AQA poetry is closed-book. This requires different revision strategies — WJEC students should invest time in thorough annotation rather than memorisation. (2) WJEC Language Component 1 uses exclusively 20th century literary prose, while other boards may use a wider range of text types and periods. This means WJEC students should be particularly familiar with modern prose styles. (3) WJEC includes a distinctive 'tracking' question that requires students to work through an extract sequentially, which is not a standard question type on other boards.",
        marks: 6,
      },
      {
        question:
          "What is the difference between WJEC and Eduqas, and why does it matter?",
        lines: 4,
        modelAnswer:
          "WJEC is the Welsh exam board and sets papers for schools in Wales, while Eduqas is WJEC's subsidiary that provides qualifications for schools in England. Although the specifications are similar, there are differences in text choices, question wording, and assessment structure. It matters because students must know which specification their school follows — using Eduqas past papers to revise for WJEC (or vice versa) could mean practising the wrong question types or focusing on texts not on their specification.",
        marks: 3,
      },
      {
        question:
          "Using the WJEC band descriptors, explain the difference between a Band 3 and a Band 5 response.",
        lines: 5,
        modelAnswer:
          "A Band 3 response demonstrates 'sound understanding' with 'valid' points supported by 'appropriate' references — it is competent but predictable, offering straightforward analysis without depth. A Band 5 response shows 'assured, perceptive understanding' with 'convincing, well-chosen' textual references and 'sophisticated analysis of methods'. The key difference is depth and originality: Band 5 responses explore layers of meaning, consider alternative interpretations, and demonstrate genuine critical engagement rather than rehearsed observations.",
        marks: 4,
      },
      {
        question:
          "Why might WJEC papers include texts with Welsh contexts or settings? How should you approach these?",
        lines: 4,
        modelAnswer:
          "WJEC is a Welsh exam board, so it naturally draws on Welsh cultural and geographical contexts in its text selections. This might include extracts set in Wales, by Welsh authors, or dealing with Welsh-specific issues (e.g. the Welsh language, industrial communities, rural Wales). Students should approach these texts exactly as they would any other — the analytical skills required are identical. Welsh contexts are not more difficult; they simply require the same close reading and analysis applied to any setting. Students should treat specific Welsh references as contextual details that enrich their understanding rather than obstacles.",
        marks: 3,
      },
      {
        question:
          "Explain why the open-book poetry section in WJEC Literature is both an advantage and a potential pitfall.",
        lines: 5,
        modelAnswer:
          "The open-book format is an advantage because students can refer directly to the poems during the exam, reducing the pressure to memorise quotations and allowing them to find precise evidence quickly. However, it is a potential pitfall because students may become complacent — assuming they can 'find what they need' in the exam without thorough preparation. Under-prepared students waste time searching through unannotated anthologies, write about irrelevant quotations, or fail to develop comparative points because they haven't internalised the poems' themes and methods. The most successful students annotate their anthologies thoroughly and know the poems well enough to navigate them rapidly under exam conditions.",
        marks: 4,
      },
      {
        question:
          "Create a brief revision plan for WJEC English. Identify the three areas you most need to practise and explain one specific strategy for each.",
        lines: 6,
        modelAnswer:
          "(1) Tracking question technique — I will practise three tracking questions under timed conditions, working through each extract sequentially and selecting quotations from the beginning, middle, and end. (2) Poetry comparison — I will create comparison grids for every possible poem pairing in the anthology, identifying shared themes and contrasting methods, so I can respond to any comparison question quickly. (3) SPaG in transactional writing — I will complete one timed transactional writing task per week and proofread specifically for my most common errors (comma splices and apostrophe misuse), using a personal error checklist.",
        marks: 6,
      },
    ],
    teacherNotes: [
      "This lesson is particularly valuable for students who may have used generic revision resources that focus on AQA content. Make the WJEC differences explicit and practical.",
      "The WJEC/Eduqas distinction is important. Verify which specification your centre follows and ensure all practice materials match.",
      "Students in Wales may feel that WJEC is 'less prestigious' or 'different' from English boards. Counter this directly: WJEC GCSEs are equivalent and accepted by all universities and employers.",
      "The revision action plan is a powerful tool — collect and review them, then follow up in individual conversations to hold students accountable.",
      "Consider inviting a WJEC examiner or using WJEC examiner reports to add authenticity to the mark scheme discussion.",
    ],
    targetedSkills: [
      "Exam Technique",
      "Mark Scheme Literacy",
      "Revision Strategies",
      "Self-Assessment",
      "WJEC Exam Technique",
      "Time Management",
    ],
  },
];
