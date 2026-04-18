/**
 * macbeth-pptx-lessons.ts
 *
 * Five high-quality Macbeth lesson plans designed for PowerPoint generation.
 * Each lesson is detailed enough for a teacher to deliver without additional prep.
 * Shakespeare quotes are public domain — used freely.
 *
 * Uses the LessonPlanData interface from generate-teaching-pdf.
 */

import type { LessonPlanData } from "@/lib/generate-teaching-pdf"

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 1: The Witches' Prophecy (Act 1 Scene 3)
// ═══════════════════════════════════════════════════════════════════════════

const lesson1: LessonPlanData = {
  title: "The Witches' Prophecy — Supernatural Power and Temptation (Act 1 Scene 3)",
  duration: "55 minutes",
  yearGroup: "Year 10/11",
  examBoard: "AQA / Edexcel IGCSE",
  text: "Macbeth — William Shakespeare",
  objectives: [
    "Analyse how Shakespeare presents the witches as agents of chaos and temptation in Act 1 Scene 3",
    "Explore the significance of the witches' prophecies and their effect on Macbeth's ambition",
    "Understand Jacobean attitudes to witchcraft and the supernatural, linking to King James I",
    "Examine Shakespeare's use of language techniques including rhyming couplets, paradox, and equivocation",
    "Evaluate whether the witches cause Macbeth's downfall or merely reveal his existing ambition",
  ],
  starterActivity: {
    title: "Would You Want to Know Your Future?",
    duration: "7 minutes",
    instructions:
      "1. Display the question on the board: 'If three strangers told you that you would one day become the most powerful person in the country, what would you do?'\n2. Students write their response silently for 2 minutes — at least three sentences.\n3. Pair-share for 2 minutes: do they agree or disagree with their partner?\n4. Cold-call three students to share. Record key ideas on the board: Would you believe it? Would it change your behaviour? Would you try to make it happen?\n5. Teacher introduces the context: 'In 1606, this is exactly what happens to a Scottish general named Macbeth — and the consequences are catastrophic.'\n6. Display a brief context slide: King James I wrote a book called Daemonologie (1597) about witchcraft. Witches were genuinely feared. Thousands were executed across Europe.\n7. Ask: 'Why would Shakespeare write a play featuring witches for a king who was terrified of them?'",
    differentiation: {
      support: "Provide sentence starters: 'If someone predicted my future, I would feel... because... I think this would make me want to...' Display key vocabulary on the board: prophecy, temptation, ambition, supernatural.",
      core: "Students write a full response and explain whether they think knowing the future would be a gift or a curse, giving reasons.",
      stretch: "Students consider the moral implications: if you knew you were destined for power, would you be justified in doing anything to achieve it? Where is the line between destiny and choice?",
    },
  },
  mainActivities: [
    {
      title: "Close Reading: The Witches' Language (Act 1 Scene 3, lines 1–37)",
      duration: "15 minutes",
      instructions:
        "1. Distribute printed extracts of Act 1 Scene 3, lines 1–37 (the witches' opening dialogue and Macbeth's arrival).\n2. Teacher reads the extract aloud dramatically. Students follow along and underline any words or phrases that feel strange, disturbing, or supernatural.\n3. Display three focus questions on the board:\n   (a) What patterns do you notice in the witches' speech? (rhythm, rhyme, repetition)\n   (b) What is the effect of 'Fair is foul, and foul is fair'? Why does this paradox matter?\n   (c) How do the witches' words differ from the way other characters speak?\n4. Students annotate their extracts in pairs for 7 minutes, writing marginal notes for each focus question.\n5. Teacher cold-calls three pairs for their best observations.\n6. Teacher models a key point on the board: 'Shakespeare gives the witches trochaic tetrameter — a broken, inverted rhythm — while noble characters speak in iambic pentameter. This rhythmic difference signals that the witches exist outside the natural order.'\n7. Students copy this key point and add it to their notes.",
      differentiation: {
        support: "Provide a glossary handout defining: paradox, trochaic tetrameter, iambic pentameter, equivocation, incantation. Pre-highlight three key phrases in the extract for students to focus on. Pair support students with a confident reader.",
        core: "Students annotate independently using the three focus questions and identify at least two language techniques with brief explanations.",
        stretch: "Students write a paragraph comparing the witches' language to Macbeth's first line in the scene ('So foul and fair a day I have not seen') — what does the echo suggest about the connection between Macbeth and the witches?",
      },
    },
    {
      title: "The Prophecies: What Do the Witches Promise? (Lines 48–78)",
      duration: "15 minutes",
      instructions:
        "1. Read aloud the witches' three prophecies to Macbeth: 'All hail, Macbeth, that shalt be King hereafter!'\n2. Display all three prophecies clearly on the board:\n   - First Witch: 'All hail, Macbeth! Hail to thee, Thane of Glamis!'\n   - Second Witch: 'All hail, Macbeth! Hail to thee, Thane of Cawdor!'\n   - Third Witch: 'All hail, Macbeth, that shalt be King hereafter!'\n3. Ask: 'Which of these prophecies is already true? Which would shock Macbeth? Which would terrify a Jacobean audience?'\n4. Students complete a three-row table in their books:\n   Column 1: The prophecy (short quote)\n   Column 2: Macbeth's reaction\n   Column 3: Why this matters for the plot\n5. Work in pairs for 6 minutes. Teacher circulates and checks for accuracy.\n6. Class discussion (4 minutes): 'Do the witches tell Macbeth to kill Duncan? Or does Macbeth decide that for himself?'\n7. Teacher poses the key debate question on the board: 'The witches plant the seed, but Macbeth waters it.' Students write one sentence agreeing or disagreeing with this statement.\n8. Cold-call three students to share their sentence.",
      differentiation: {
        support: "Provide the three-row table pre-printed with the prophecies in column 1. Include sentence stems for column 3: 'This matters because it suggests that Macbeth...' / 'A Jacobean audience would react to this because...'",
        core: "Students complete all three columns independently and write the agree/disagree sentence with a supporting reason.",
        stretch: "Students also analyse Banquo's prophecy ('Thou shalt get kings, though thou be none') and explain why Shakespeare includes a parallel prophecy for Banquo. What does Banquo's calm reaction reveal about the difference between him and Macbeth?",
      },
    },
    {
      title: "Macbeth's Aside: 'This Supernatural Soliciting' (Lines 127–142)",
      duration: "12 minutes",
      instructions:
        "1. Read aloud Macbeth's aside beginning 'This supernatural soliciting / Cannot be ill, cannot be good.'\n2. Explain the dramatic convention of the aside: the audience hears Macbeth's private thoughts, but the other characters do not.\n3. Display the key quotation on the board: 'If good, why do I yield to that suggestion / Whose horrid image doth unfix my hair / And make my seated heart knock at my ribs?'\n4. Students answer in their books (5 minutes): What is the 'horrid image' Macbeth is imagining? What do the physical reactions ('unfix my hair', 'heart knock at my ribs') reveal about his state of mind?\n5. Teacher draws out the key point: Macbeth is already imagining murder before anyone has suggested it. The witches did not tell him to kill — his own ambition did.\n6. Students write a PEEL paragraph (5 minutes): 'How does Shakespeare use Macbeth's aside to reveal his inner conflict?'\n7. Two volunteers share their paragraphs. Class identifies the strongest piece of evidence used.",
      differentiation: {
        support: "Provide a modern English translation alongside the original. Supply a PEEL frame with sentence starters: 'Shakespeare reveals Macbeth's inner conflict by... This is shown when he says... The word/phrase ... suggests... This links to the theme of...'",
        core: "Students write a full PEEL paragraph independently using at least one embedded quotation from the aside.",
        stretch: "Students extend their paragraph to consider: does this aside make Macbeth a sympathetic character (he is horrified by his own thoughts) or a villainous one (he is already planning murder)? Explore both interpretations.",
      },
    },
  ],
  plenary: {
    title: "Debate Line: Who Is Responsible?",
    instructions:
      "1. Clear a space down the centre of the room (or use an imaginary line).\n2. Read the statement aloud: 'The witches are entirely responsible for Macbeth's downfall.'\n3. Students physically position themselves on a spectrum: strongly agree (left), strongly disagree (right), somewhere in between.\n4. Teacher interviews three students from different positions: 'Why are you standing there? Give one piece of evidence from today's lesson.'\n5. After hearing arguments, allow students to move position if they are persuaded.\n6. Final task (2 minutes): students write one sentence in their books completing: 'I believe the witches are / are not responsible for Macbeth's downfall because...'",
    differentiation: {
      support: "Provide a cue card with two arguments for each side to help students choose their position. Allow verbal rather than written response for the final sentence.",
      core: "Students position themselves independently, give verbal justification, and write a concluding sentence with evidence.",
      stretch: "Students must argue the opposite of their natural position — if they think the witches are responsible, they must argue that Macbeth is, and vice versa. This develops evaluative thinking.",
    },
  },
  keyVocabulary: [
    "prophecy — a prediction of future events, often with supernatural authority",
    "equivocation — deliberately ambiguous language that can be interpreted in more than one way",
    "paradox — a statement that contradicts itself but reveals a deeper truth (e.g. 'fair is foul')",
    "trochaic tetrameter — a stressed-unstressed rhythm pattern; used by the witches to sound unnatural",
    "iambic pentameter — the standard verse rhythm of noble characters in Shakespeare",
    "aside — a speech directed at the audience that other characters cannot hear",
    "soliloquy — a longer speech in which a character reveals their private thoughts",
    "supernatural — beyond the natural world; relating to forces like witchcraft or fate",
    "Jacobean — relating to the reign of King James I (1603–1625)",
    "regicide — the killing of a king, considered a sin against God in Jacobean England",
    "hamartia — a fatal flaw in a tragic hero that leads to their downfall",
    "ambition — a strong desire for power, success, or achievement",
    "temptation — the desire to do something wrong or unwise",
    "Great Chain of Being — the Jacobean belief in a God-ordained hierarchy of all creation",
    "Daemonologie — King James I's 1597 treatise on witchcraft and the supernatural",
  ],
  resourcesNeeded: [
    "Printed extracts of Act 1 Scene 3 (lines 1–78 and 127–142) — one per student",
    "Projector and screen for displaying prophecies, focus questions, and context slides",
    "Three-row prophecy table handout (one per student)",
    "PEEL paragraph frame for support-tier students",
    "Glossary handout for support-tier students (key terms with definitions)",
    "Modern English translation of Macbeth's aside (support tier)",
    "Mini-whiteboards and pens for quick-check responses",
  ],
  homework:
    "Write a 200–250 word response to the following question:\n'How does Shakespeare present the witches as powerful and dangerous in Act 1 Scene 3?'\n\nSuccess criteria:\n- Use at least two quotations from Act 1 Scene 3, embedded within your sentences\n- Identify and analyse at least one language technique (e.g. paradox, rhyming couplets, repetition)\n- Include one sentence of AO3 context linking the witches to Jacobean beliefs about the supernatural\n- Structure your response using PEEL\n- Use formal academic register throughout",
  teacherNotes: [
    "Context first: Spend adequate time on Jacobean witchcraft beliefs in the starter. Students who do not understand that witches were genuinely feared (not fairy-tale figures) will struggle to access AO3 marks throughout the Macbeth unit.",
    "The 'Fair is foul' paradox is one of the most frequently examined quotations in AQA Macbeth papers. Ensure every student can explain it. Model the idea that language itself becomes unreliable in the play — nothing means what it seems to mean.",
    "Macbeth's aside is crucial for the free will vs fate debate. Push students beyond 'the witches made him do it' — the text clearly shows Macbeth imagining murder before anyone suggests it. This nuance separates grade 5 answers from grade 7+ answers.",
    "If time is tight, cut the debate plenary to a quick show-of-hands vote and use the saved time for the PEEL paragraph writing, which has more direct exam value.",
    "Seating tip: Pre-arrange mixed-ability pairs for the annotation activity. Assign the stronger reader in each pair to read the extract aloud while the partner annotates. Swap roles for the second extract.",
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 2: Lady Macbeth's Ambition (Act 1 Scenes 5–7)
// ═══════════════════════════════════════════════════════════════════════════

const lesson2: LessonPlanData = {
  title: "Lady Macbeth's Ambition — Persuasion, Gender & Power (Act 1 Scenes 5–7)",
  duration: "55 minutes",
  yearGroup: "Year 10/11",
  examBoard: "AQA / Edexcel IGCSE",
  text: "Macbeth — William Shakespeare",
  objectives: [
    "Analyse how Shakespeare presents Lady Macbeth as ambitious, manipulative, and transgressive in Act 1",
    "Explore how Lady Macbeth challenges Jacobean gender expectations through her language and behaviour",
    "Examine the persuasion techniques Lady Macbeth uses to convince Macbeth to commit regicide",
    "Understand how Shakespeare uses the soliloquy form to reveal Lady Macbeth's private desires",
    "Evaluate whether Lady Macbeth is a villain, a victim, or a complex tragic figure",
  ],
  starterActivity: {
    title: "Gender Expectations: 1606 vs Today",
    duration: "7 minutes",
    instructions:
      "1. Display two columns on the board: 'What was expected of women in 1606' and 'What was expected of men in 1606.'\n2. Students brainstorm in pairs for 2 minutes, writing ideas on mini-whiteboards.\n3. Cold-call four pairs to share. Teacher fills in the board: women were expected to be obedient, silent, nurturing, pious; men were expected to be brave, decisive, dominant, protective.\n4. Teacher introduces the key concept: 'Lady Macbeth deliberately rejects every single one of these expectations. She asks dark forces to strip away her femininity so she can commit murder. In 1606, this would have been genuinely shocking — even demonic.'\n5. Display the question: 'Is Lady Macbeth powerful or dangerous? Or both?'\n6. Students write one sentence answering this — they will return to it at the end of the lesson.",
    differentiation: {
      support: "Provide a pre-filled list of Jacobean gender expectations and ask students to tick which ones they think Lady Macbeth would break. Define key terms: patriarchy, transgressive, subversive.",
      core: "Students brainstorm independently and write a response sentence explaining whether Lady Macbeth is powerful, dangerous, or both.",
      stretch: "Students consider whether Shakespeare is celebrating or condemning Lady Macbeth's rejection of gender norms. What might a Jacobean audience think versus a modern audience?",
    },
  },
  mainActivities: [
    {
      title: "Lady Macbeth's Soliloquy: 'Unsex Me Here' (Act 1 Scene 5, lines 38–52)",
      duration: "15 minutes",
      instructions:
        "1. Set the context: Lady Macbeth has just received Macbeth's letter about the witches' prophecy. She is alone on stage.\n2. Teacher reads the soliloquy aloud with dramatic intensity: 'Come, you spirits / That tend on mortal thoughts, unsex me here...'\n3. Display the full soliloquy on the projector. Students follow along with printed copies.\n4. Guided annotation (8 minutes). Display four annotation tasks one at a time:\n   (a) Circle every imperative verb (come, fill, stop, take, etc.). What does this tell us about her character?\n   (b) Underline references to the body ('breast', 'milk', 'blood'). Why does Shakespeare make her language so physical?\n   (c) Highlight supernatural references ('spirits', 'murdering ministers'). How does she mirror the witches?\n   (d) Star the word 'unsex'. What exactly is she asking for? Why is this the most shocking word in the speech?\n5. Class feedback (4 minutes): cold-call one student per annotation task.\n6. Teacher consolidates: Lady Macbeth invokes evil spirits to remove her femininity because she believes compassion is a female weakness that will prevent her from committing murder. She equates femininity with moral conscience.\n7. Students write the key quotation in their books: 'unsex me here, / And fill me... of direst cruelty'",
      differentiation: {
        support: "Provide the soliloquy with a line-by-line modern English translation on the facing page. Pre-highlight the imperative verbs. Include a glossary: imperative, soliloquy, invocation, transgressive.",
        core: "Students complete all four annotation tasks independently and copy the teacher's consolidation point.",
        stretch: "Students write a paragraph exploring whether Lady Macbeth's soliloquy proves she is evil or whether it reveals her awareness that murder requires her to destroy the best parts of herself — making her a more complex, even tragic figure.",
      },
    },
    {
      title: "The Persuasion Scene: Lady Macbeth vs Macbeth (Act 1 Scene 7, lines 35–82)",
      duration: "15 minutes",
      instructions:
        "1. Set the context: Macbeth has decided NOT to kill Duncan ('We will proceed no further in this business'). Lady Macbeth must change his mind.\n2. Paired reading: students read the dialogue aloud in pairs — one as Macbeth, one as Lady Macbeth. Swap roles halfway.\n3. Display the persuasion technique grid on the board. Students identify examples of each technique in Lady Macbeth's speech:\n   (a) Questioning his masculinity: 'When you durst do it, then you were a man'\n   (b) Emotional blackmail: 'I have given suck, and know / How tender 'tis to love the babe that milks me'\n   (c) Shaming: 'Was the hope drunk / Wherein you dressed yourself?'\n   (d) Providing a plan: 'his two chamberlains / Will I with wine and wassail so convince'\n4. Students complete the grid in pairs for 6 minutes.\n5. Class discussion (4 minutes): 'Which technique is most effective? Why does Macbeth give in?'\n6. Key point on the board: 'Lady Macbeth weaponises Jacobean masculinity — she knows that calling Macbeth a coward is more devastating than any logical argument.'\n7. Students copy this and highlight the word 'weaponises'.",
      differentiation: {
        support: "Provide the persuasion grid pre-printed with the four technique categories and one example already filled in. Students find one more example for each. Include a word bank: manipulation, coercion, emasculation, rhetoric.",
        core: "Students complete the full grid independently and participate in discussion with textual evidence.",
        stretch: "Students write a paragraph evaluating which persuasion technique is most effective and why. Consider: does Lady Macbeth exploit Macbeth's weakness, or does she understand him so well that her persuasion is a form of intimacy?",
      },
    },
    {
      title: "PEEL Paragraph: How Does Shakespeare Present Lady Macbeth?",
      duration: "12 minutes",
      instructions:
        "1. Display the exam-style question: 'How does Shakespeare present Lady Macbeth as a powerful character in Act 1?'\n2. Teacher models the opening sentence of a PEEL paragraph on the board: 'Shakespeare presents Lady Macbeth as a powerful yet transgressive figure who deliberately rejects the feminine role expected of Jacobean women.'\n3. Students write their own PEEL paragraph (8 minutes), using one quotation from today's lesson.\n4. Peer assessment (3 minutes): swap books with a partner. Partner checks for: (a) a clear point, (b) an embedded quotation, (c) analysis of a language technique, (d) a link to context or theme.\n5. Two volunteers read their paragraphs aloud. Class votes on the strongest piece of analysis.",
      differentiation: {
        support: "Provide a full PEEL frame with sentence starters: 'Shakespeare presents Lady Macbeth as... This is evident when she says \"...\" The word/phrase ... suggests... A Jacobean audience would find this shocking because...'",
        core: "Students write a full PEEL paragraph independently with embedded quotation and language analysis.",
        stretch: "Students write two PEEL paragraphs — one arguing Lady Macbeth is powerful, one arguing she is ultimately powerless (foreshadowing her later madness). Compare the two interpretations in a concluding sentence.",
      },
    },
  ],
  plenary: {
    title: "Return to the Question: Powerful or Dangerous?",
    instructions:
      "1. Display the sentence students wrote in the starter: 'Is Lady Macbeth powerful or dangerous? Or both?'\n2. Students re-read their original sentence and decide whether they want to change their answer after today's lesson.\n3. On a sticky note, students write their final answer with one piece of evidence from today's lesson.\n4. Place sticky notes on a spectrum on the board: 'Powerful' at one end, 'Dangerous' at the other, 'Both' in the middle.\n5. Teacher photographs the board for the next lesson's starter and makes a brief comment on the class split.",
    differentiation: {
      support: "Provide the sentence stem: 'After today's lesson, I now think Lady Macbeth is... because in the text she...'",
      core: "Students write an independent answer with textual evidence and place their sticky note on the spectrum.",
      stretch: "Students add a second sentence considering whether Shakespeare wants the audience to admire or fear Lady Macbeth — or whether the point is that both responses coexist.",
    },
  },
  keyVocabulary: [
    "soliloquy — a speech in which a character reveals their thoughts to the audience while alone on stage",
    "transgressive — going beyond accepted boundaries of behaviour or morality",
    "patriarchy — a social system in which men hold primary power and women are subordinate",
    "emasculation — undermining a man's masculinity or sense of manhood",
    "imperative verb — a command verb (e.g. 'come', 'fill', 'stop') that conveys authority",
    "invocation — a calling upon spirits, gods, or supernatural forces for help",
    "regicide — the killing of a king; in Jacobean England, considered a sin against God",
    "manipulation — controlling or influencing someone in a clever or unscrupulous way",
    "rhetoric — the art of persuasive speaking or writing",
    "subversive — seeking to undermine or overthrow an established system or institution",
    "femininity — qualities traditionally associated with women (gentleness, nurturing, obedience)",
    "masculinity — qualities traditionally associated with men (bravery, strength, decisiveness)",
    "agency — the ability to act independently and make one's own choices",
    "tragic figure — a character whose suffering arouses pity and whose downfall is partly self-caused",
    "complicity — involvement in wrongdoing, even if indirect",
  ],
  resourcesNeeded: [
    "Printed extracts: Act 1 Scene 5 (lines 38–52) and Act 1 Scene 7 (lines 35–82) — one set per student",
    "Projector and screen for displaying the soliloquy, persuasion grid, and focus questions",
    "Persuasion technique grid handout (one per student)",
    "PEEL paragraph frame for support-tier students",
    "Glossary handout for support-tier students",
    "Modern English translation of the soliloquy (support tier)",
    "Sticky notes for plenary spectrum activity",
    "Mini-whiteboards for the starter brainstorm",
  ],
  homework:
    "Write a 200–250 word response to the following question:\n'How does Shakespeare use Lady Macbeth's soliloquy in Act 1 Scene 5 to present her as a transgressive character?'\n\nSuccess criteria:\n- Include at least two quotations from the soliloquy, embedded within your sentences\n- Analyse at least one language technique (e.g. imperatives, supernatural imagery, bodily imagery)\n- Include one sentence linking your analysis to Jacobean gender expectations (AO3)\n- Use the term 'transgressive' or 'subversive' at least once\n- Structure your response using PEEL with a clear topic sentence",
  teacherNotes: [
    "The 'unsex me here' soliloquy is the most commonly examined Lady Macbeth extract in AQA papers. Students must be able to analyse it fluently. Focus on imperatives and the connection between femininity and moral conscience — this is the analytical thread that earns top marks.",
    "Gender context is essential for AO3 but students often handle it crudely ('women had no rights'). Push for specificity: Jacobean women were expected to be silent, obedient, and nurturing. Lady Macbeth's invocation of spirits is a deliberate inversion of the maternal role.",
    "The persuasion scene works brilliantly as paired reading. Cast a confident pair to model it first, then have all pairs read simultaneously. This brings the power dynamic to life far better than silent reading.",
    "Common misconception: students often describe Lady Macbeth as 'evil' without nuance. Challenge this — she asks spirits to remove her compassion, which implies she has compassion to begin with. The soliloquy reveals not evil but the effort required to become capable of evil.",
    "Timing note: the PEEL paragraph activity is the most directly exam-relevant part of the lesson. If the persuasion scene discussion runs over, shorten the discussion and protect the writing time.",
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 3: The Dagger Speech (Act 2 Scene 1)
// ═══════════════════════════════════════════════════════════════════════════

const lesson3: LessonPlanData = {
  title: "The Dagger Speech — Soliloquy, Hallucination & Guilt (Act 2 Scene 1)",
  duration: "55 minutes",
  yearGroup: "Year 10/11",
  examBoard: "AQA / Edexcel IGCSE",
  text: "Macbeth — William Shakespeare",
  objectives: [
    "Analyse Shakespeare's use of the soliloquy form to dramatise Macbeth's psychological deterioration",
    "Explore how the dagger functions as a symbol of guilt, ambition, and moral disintegration",
    "Examine Shakespeare's language techniques: rhetorical questions, sensory imagery, and personification",
    "Understand how the soliloquy creates dramatic tension immediately before the murder of Duncan",
    "Evaluate whether the dagger is a supernatural vision or a product of Macbeth's guilty conscience",
  ],
  starterActivity: {
    title: "What Do You See That Isn't There?",
    duration: "6 minutes",
    instructions:
      "1. Display an optical illusion on the board (e.g. the Rubin vase or Necker cube).\n2. Ask: 'What do you see? Can you trust your eyes?' Brief discussion (1 minute).\n3. Now display the question: 'What would it mean if you started seeing things that definitely were not there — things that frightened you?'\n4. Students write two sentences in their books: what might cause someone to hallucinate, and what would it reveal about their mental state?\n5. Teacher bridges to the text: 'Macbeth is about to murder King Duncan. He is standing alone in a dark corridor at midnight. And he sees a floating dagger, dripping with blood, leading him toward Duncan's chamber. Is it real? Is it his imagination? Or is it something supernatural?'\n6. Display today's key question: 'Is the dagger a sign of guilt, madness, or supernatural intervention?'",
    differentiation: {
      support: "Provide sentence starters: 'If someone started seeing things that weren't there, it might mean they are... This could be caused by...' Define the word 'hallucination' on the board.",
      core: "Students write independently and offer a verbal prediction about what the dagger might symbolise.",
      stretch: "Students consider all three possibilities (guilt, madness, supernatural) and predict which Shakespeare might intend — or whether the ambiguity itself is the point.",
    },
  },
  mainActivities: [
    {
      title: "Close Reading: 'Is This a Dagger Which I See Before Me?' (Lines 33–64)",
      duration: "15 minutes",
      instructions:
        "1. Distribute printed copies of the soliloquy (Act 2 Scene 1, lines 33–64).\n2. Teacher reads the soliloquy aloud slowly and dramatically. Students close their eyes and listen.\n3. Second reading: students follow along on their copies and underline every question Macbeth asks.\n4. Display annotation tasks on the board — students work through them in pairs (8 minutes):\n   (a) Highlight all rhetorical questions. Count them. What does the sheer number of questions reveal about Macbeth's state of mind?\n   (b) Circle sensory references (sight, touch). Why can Macbeth see the dagger but not touch it? What does this suggest?\n   (c) Underline the shift at 'I see thee yet, in form as palpable / As this which now I draw.' What changes here?\n   (d) Box the final couplet: 'Hear it not, Duncan, for it is a knell / That summons thee to heaven or to hell.' What is the effect of ending on this rhyming couplet?\n5. Cold-call four students, one per task.\n6. Teacher consolidates: 'The soliloquy dramatises a mind at war with itself. Macbeth knows what he is about to do is wrong — the questions are his conscience fighting against his ambition. The dagger is the physical manifestation of that internal conflict.'\n7. Students copy this consolidation point.",
      differentiation: {
        support: "Provide the soliloquy with a line-by-line modern English paraphrase. Pre-number the rhetorical questions so students can see how many there are. Include a glossary: rhetorical question, soliloquy, hallucination, palpable, knell.",
        core: "Students complete all four annotation tasks and copy the consolidation point. Identify at least two techniques with brief explanations.",
        stretch: "Students write a paragraph exploring the significance of the shift from questioning ('Is this a dagger?') to commanding ('Come, let me clutch thee') — what does this progression reveal about the moment Macbeth's ambition overcomes his conscience?",
      },
    },
    {
      title: "Symbolism Deep Dive: What Does the Dagger Represent?",
      duration: "12 minutes",
      instructions:
        "1. Display a large image of a dagger on the projector.\n2. Around the image, display four possible interpretations:\n   (a) The dagger is supernatural — sent by the witches or dark forces to guide Macbeth to murder\n   (b) The dagger is psychological — a hallucination caused by guilt and fear\n   (c) The dagger is symbolic — it represents Macbeth's ambition made visible\n   (d) The dagger is dramatic — Shakespeare uses it to create tension for the audience before the murder\n3. Students work in groups of four. Each student argues for one interpretation using evidence from the soliloquy (5 minutes).\n4. Groups then vote on which interpretation they find most convincing and prepare a one-sentence justification.\n5. Spokesperson from each group shares their group's verdict (3 minutes).\n6. Teacher makes the key point: 'The best exam answers do not choose one interpretation — they explore the tension between multiple readings. The dagger means all of these things simultaneously. That is what makes it dramatically powerful.'",
      differentiation: {
        support: "Provide a cue card for each interpretation with a suggested quotation and a sentence stem: 'The dagger could represent... because Shakespeare shows...'",
        core: "Students argue their assigned interpretation using their own selected quotation from the soliloquy.",
        stretch: "Students write a paragraph presenting two interpretations and explaining why the ambiguity is more powerful than a single definitive reading. Use the phrase 'alternatively' or 'a counter-reading suggests...'",
      },
    },
    {
      title: "Exam Practice: Analytical Paragraph on the Soliloquy",
      duration: "12 minutes",
      instructions:
        "1. Display the exam-style question: 'How does Shakespeare use the dagger soliloquy to present Macbeth's internal conflict?'\n2. Teacher models the first sentence: 'Shakespeare uses the dagger soliloquy to dramatise the agonising conflict between Macbeth's ambition and his moral conscience, presenting a protagonist who is aware of his own moral disintegration.'\n3. Students write a full PEEL paragraph independently (8 minutes).\n4. Peer assessment (3 minutes): swap books. Partner underlines the quotation and circles the technique word. If either is missing, write a target in the margin.\n5. One volunteer reads their paragraph aloud. Class identifies what makes it effective.",
      differentiation: {
        support: "Provide a PEEL frame: 'Shakespeare presents Macbeth's conflict by... This is shown in the quotation \"...\" The technique of ... creates the effect of... This links to the theme of ... because...'",
        core: "Write a full PEEL paragraph with embedded quotation, technique identification, and effect analysis.",
        stretch: "Write two connected paragraphs: one analysing the rhetorical questions and one analysing the final couplet. Include a link sentence between them that tracks Macbeth's psychological progression within the speech.",
      },
    },
  ],
  plenary: {
    title: "One-Word Summary and Justify",
    instructions:
      "1. Students choose one word that best captures Macbeth's state of mind in this soliloquy (e.g. tormented, conflicted, terrified, determined, unhinged).\n2. Write the word in large letters on a mini-whiteboard.\n3. Hold up whiteboards simultaneously on the teacher's count.\n4. Teacher selects three different words and asks those students to justify their choice with one piece of textual evidence.\n5. Final reflection: 'Does knowing what Macbeth is feeling make the murder more or less horrifying?' Students write one sentence in their books.",
    differentiation: {
      support: "Provide a word bank of six possible words with brief definitions. Students choose from the list and explain using a sentence stem: 'I chose the word... because in the soliloquy Macbeth...'",
      core: "Students choose their own word independently and justify with textual evidence.",
      stretch: "Students explain why their chosen word captures something that a simpler word like 'scared' or 'guilty' does not — what nuance does their word add?",
    },
  },
  keyVocabulary: [
    "soliloquy — a speech delivered alone on stage, revealing a character's innermost thoughts",
    "hallucination — perceiving something that is not actually present; a sign of psychological disturbance",
    "symbolism — using a concrete object to represent an abstract idea",
    "rhetorical question — a question asked for effect, not expecting an answer",
    "sensory imagery — language that appeals to the five senses (sight, sound, touch, taste, smell)",
    "personification — giving human qualities to non-human things",
    "dramatic tension — a sense of suspense or unease created for the audience",
    "internal conflict — a struggle within a character's own mind between competing desires or values",
    "moral disintegration — the gradual collapse of a person's ethical principles",
    "palpable — able to be touched or felt; tangible",
    "knell — the sound of a bell tolled for a death or funeral",
    "couplet — two consecutive lines of verse that rhyme, often used for emphasis or closure",
    "protagonist — the central character of a narrative or drama",
    "catharsis — the emotional release experienced by the audience through a character's suffering",
    "conscience — an inner sense of right and wrong that guides moral decisions",
  ],
  resourcesNeeded: [
    "Printed copies of Act 2 Scene 1, lines 33–64 (the dagger soliloquy) — one per student",
    "Projector for optical illusion, dagger image, annotation tasks, and exam question",
    "Modern English paraphrase handout for support-tier students",
    "Glossary handout with key terms and definitions",
    "PEEL paragraph frame for support-tier students",
    "Mini-whiteboards and pens for plenary activity",
    "Interpretation cue cards for group activity (four per group)",
  ],
  homework:
    "Write a 250-word response to the question:\n'How does Shakespeare use the dagger as a symbol in Act 2 Scene 1?'\n\nSuccess criteria:\n- Include at least two embedded quotations from the soliloquy\n- Analyse at least two language techniques (e.g. rhetorical questions, imagery, rhyming couplet)\n- Explore at least two possible interpretations of the dagger (supernatural, psychological, symbolic)\n- Include one AO3 sentence linking to Jacobean beliefs about guilt, conscience, or the supernatural\n- Use academic register and write in PEEL paragraphs",
  teacherNotes: [
    "This soliloquy is one of the most commonly set extracts in AQA GCSE Literature Paper 1. Students should be able to analyse it from memory by the end of the unit. Encourage them to learn at least three short quotations from it.",
    "The rhetorical questions are the key analytical entry point. A grade 5 student identifies them; a grade 7+ student explains what the accumulation of questions reveals about Macbeth's fracturing psychological state.",
    "The group interpretation activity is designed to build evaluative skills (AO1 top band). The best answers explore multiple readings rather than committing to a single one. Model the phrase 'alternatively, a reader might interpret this as...'",
    "If students struggle with the language, spend an extra 3 minutes on the modern translation before annotation. Comprehension must come before analysis.",
    "Performance connection: if you have a confident student, ask them to perform the soliloquy for the class. Physical performance makes the psychological deterioration visceral in a way that silent reading cannot.",
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 4: Guilt and Madness — Lady Macbeth's Sleepwalking (Act 5 Scene 1)
// ═══════════════════════════════════════════════════════════════════════════

const lesson4: LessonPlanData = {
  title: "Guilt and Madness — Lady Macbeth's Sleepwalking Scene (Act 5 Scene 1)",
  duration: "55 minutes",
  yearGroup: "Year 10/11",
  examBoard: "AQA / Edexcel IGCSE",
  text: "Macbeth — William Shakespeare",
  objectives: [
    "Analyse how Shakespeare presents Lady Macbeth's psychological collapse in Act 5 Scene 1",
    "Explore the dramatic irony created by comparing Lady Macbeth in Act 1 with Act 5",
    "Examine Shakespeare's use of prose (not verse) to signal Lady Macbeth's mental disintegration",
    "Understand how the motif of blood and handwashing symbolises guilt throughout the play",
    "Evaluate Shakespeare's message about the psychological cost of unchecked ambition",
  ],
  starterActivity: {
    title: "Before and After: Two Lady Macbeths",
    duration: "7 minutes",
    instructions:
      "1. Display two quotations side by side on the board:\n   Act 1: 'A little water clears us of this deed'\n   Act 5: 'all the perfumes of Arabia will not sweeten this little hand'\n2. Students read both quotations silently.\n3. Think-pair-share (3 minutes): 'What has changed between these two moments? What does this change reveal about Lady Macbeth?'\n4. Cold-call three pairs. Teacher draws out the key contrast: in Act 1, Lady Macbeth dismissed guilt as something easily washed away. In Act 5, she is destroyed by the very guilt she thought she could control.\n5. Write the key term on the board: DRAMATIC IRONY — the audience remembers what Lady Macbeth said in Act 1, which makes Act 5 devastating.\n6. Introduce today's focus: 'Today we witness the complete psychological destruction of the most powerful character in Act 1.'",
    differentiation: {
      support: "Provide both quotations printed on a card with the act and scene labelled. Include the question: 'How has Lady Macbeth's attitude to guilt changed?' and sentence starters: 'In Act 1, Lady Macbeth believed... but by Act 5...'",
      core: "Students identify the contrast independently and explain what it reveals about the psychological cost of guilt.",
      stretch: "Students predict what the audience is meant to feel: sympathy, horror, satisfaction, or a complex mixture? What does Shakespeare want us to learn from Lady Macbeth's transformation?",
    },
  },
  mainActivities: [
    {
      title: "Close Reading: The Sleepwalking Scene (Act 5 Scene 1, lines 26–68)",
      duration: "15 minutes",
      instructions:
        "1. Set the context: Lady Macbeth's Gentlewoman has called a Doctor because Lady Macbeth has been sleepwalking and talking in her sleep. They watch from the shadows.\n2. Teacher reads the scene aloud. Use a hushed, disturbed tone for the Doctor and Gentlewoman; a fragmented, desperate tone for Lady Macbeth.\n3. Students follow on printed copies. First task: underline every sentence Lady Macbeth speaks.\n4. Display annotation questions (students work individually, 7 minutes):\n   (a) Notice that Lady Macbeth speaks in prose, not verse. In Shakespeare, prose often signals madness or low status. What does this shift from verse to prose tell us?\n   (b) Find the handwashing reference: 'Out, damned spot! Out, I say!' What is the 'spot'? Why can she not remove it?\n   (c) Identify lines where Lady Macbeth relives specific moments from earlier in the play. Which events haunt her most?\n   (d) 'What, will these hands ne'er be clean?' — compare this to her Act 1 dismissal. What is the dramatic effect?\n5. Cold-call four students for their annotations.\n6. Teacher consolidates: Shakespeare reverses Lady Macbeth's Act 1 certainty. The woman who commanded 'unsex me here' now speaks in broken prose, rubbing imaginary blood from her hands. Her descent from imperatives to questions mirrors her loss of control.\n7. Students copy the consolidation point.",
      differentiation: {
        support: "Provide the extract with Act 1 cross-references printed in the margin (e.g. next to 'Out, damned spot!' write 'Compare Act 1: a little water clears us of this deed'). Include a glossary: prose, verse, motif, dramatic irony, fragmented.",
        core: "Students annotate independently and write the consolidation point. Identify the shift from verse to prose and explain its significance.",
        stretch: "Students write a paragraph exploring the significance of the Doctor's final line: 'More needs she the divine than the physician.' What does it mean that medicine cannot cure Lady Macbeth? What does Shakespeare suggest about the nature of guilt?",
      },
    },
    {
      title: "Blood Motif Tracking: From Act 1 to Act 5",
      duration: "12 minutes",
      instructions:
        "1. Display a timeline on the board with four key blood references across the play:\n   (a) Act 1 Scene 5: Lady Macbeth invokes 'thick night' to hide the act\n   (b) Act 2 Scene 2: 'Will all great Neptune's ocean wash this blood / Clean from my hand?' (Macbeth after the murder)\n   (c) Act 2 Scene 2: 'A little water clears us of this deed' (Lady Macbeth dismisses guilt)\n   (d) Act 5 Scene 1: 'Out, damned spot!' and 'all the perfumes of Arabia'\n2. Students copy the timeline into their books and add one-sentence annotations explaining how attitudes to blood/guilt change at each point.\n3. Key question for discussion (3 minutes): 'Shakespeare uses blood as a symbol of guilt throughout the play. Why does this work so powerfully?'\n4. Teacher makes the key point: 'Blood is a physical substance that should be washable — but Shakespeare makes it permanent. Guilt, like blood, stains permanently. The more you try to remove it, the more it spreads.'\n5. Students add this point to their timeline.",
      differentiation: {
        support: "Provide the timeline pre-printed with the four quotations and spaces for annotation. Include sentence starters: 'At this point in the play, blood represents... This shows that...'",
        core: "Students copy the timeline and annotate all four points independently. Write one sentence explaining why blood works as a symbol of guilt.",
        stretch: "Students add a fifth entry to the timeline: Macbeth's 'I am in blood / Stepped in so far that, should I wade no more, / Returning were as tedious as go o'er' (Act 3 Scene 4). Analyse how this extends the blood motif to irreversibility.",
      },
    },
    {
      title: "Exam Practice: Character Transformation Paragraph",
      duration: "12 minutes",
      instructions:
        "1. Display the exam-style question: 'How does Shakespeare present the change in Lady Macbeth between Act 1 and Act 5?'\n2. Remind students: this is a comparison question. They must discuss BOTH acts and track the change.\n3. Teacher models a topic sentence: 'Shakespeare constructs a devastating arc for Lady Macbeth, transforming her from a commanding, transgressive figure in Act 1 to a psychologically shattered woman in Act 5.'\n4. Students write a full paragraph (8 minutes) comparing one aspect of Lady Macbeth across both acts.\n5. Peer assessment (3 minutes): partner checks for (a) reference to BOTH acts, (b) at least one quotation from each act, (c) a technique identified, (d) a link to theme or context.",
      differentiation: {
        support: "Provide a comparison frame: 'In Act 1, Lady Macbeth is presented as... This is shown when she says \"...\" However, by Act 5, she has changed to... as demonstrated by \"...\" This transformation suggests that Shakespeare wanted to show...'",
        core: "Write a full comparison paragraph with quotations from both acts and technique analysis.",
        stretch: "Write two paragraphs: one comparing the language (imperatives vs questions, verse vs prose), one comparing the themes (power vs powerlessness, control vs madness). Link both to Shakespeare's message about the consequences of moral transgression.",
      },
    },
  ],
  plenary: {
    title: "Verdict: Does Lady Macbeth Deserve Sympathy?",
    instructions:
      "1. Pose the question: 'Does Lady Macbeth deserve the audience's sympathy in Act 5? Or is her suffering just punishment for her crimes?'\n2. Students write their verdict on a mini-whiteboard: SYMPATHY, NO SYMPATHY, or BOTH.\n3. Hold up boards simultaneously.\n4. Teacher selects two students from opposite sides and asks each for one piece of evidence.\n5. Final task (1 minute): students write one sentence in their books: 'Shakespeare presents Lady Macbeth's downfall as...'",
    differentiation: {
      support: "Provide two arguments for each side on a cue card. Students choose their position and explain using the sentence stem: 'I think Lady Macbeth does/does not deserve sympathy because...'",
      core: "Students choose independently and justify with textual evidence from today's lesson.",
      stretch: "Students argue that the question itself is too simple — Shakespeare deliberately creates a character who provokes BOTH sympathy and condemnation simultaneously. What is the dramatic purpose of this complexity?",
    },
  },
  keyVocabulary: [
    "motif — a recurring image, symbol, or idea that develops meaning throughout a text",
    "prose — ordinary speech without a regular rhythmic pattern; in Shakespeare, signals madness or low status",
    "verse — speech written in a regular rhythmic pattern (usually iambic pentameter) for noble characters",
    "dramatic irony — when the audience knows something that a character does not, or remembers what a character has forgotten",
    "fragmented — broken into disconnected pieces; used to describe speech patterns showing mental disturbance",
    "psychological collapse — a complete breakdown of mental stability and rational thought",
    "guilt — a feeling of responsibility for wrongdoing; in Macbeth, manifested physically through blood imagery",
    "transformation arc — the journey a character undergoes from one state to another across a text",
    "juxtaposition — placing two contrasting elements side by side for comparison and effect",
    "transgression — an act that violates moral, social, or divine law",
    "catharsis — the emotional purging experienced by the audience through witnessing suffering",
    "nemesis — the inescapable consequence or punishment for hubris or wrongdoing",
    "compunction — a feeling of unease or guilt about one's actions",
    "indelible — impossible to remove or forget; permanent",
    "pathetic — arousing pity; in literary criticism, not a negative term",
  ],
  resourcesNeeded: [
    "Printed copies of Act 5 Scene 1, lines 26–68 — one per student",
    "Projector for starter quotations, annotation questions, timeline, and exam question",
    "Blood motif timeline handout (one per student, with spaces for annotation)",
    "Comparison paragraph frame for support-tier students",
    "Glossary handout for support-tier students",
    "Mini-whiteboards and pens for plenary",
    "Act 1 cross-reference cards for support-tier annotations",
  ],
  homework:
    "Write a 250-word response to the question:\n'How does Shakespeare use the motif of blood to present ideas about guilt in Macbeth?'\n\nSuccess criteria:\n- Refer to at least two different moments in the play where blood imagery appears\n- Include embedded quotations from at least two different acts\n- Analyse the symbolic meaning of blood at each point — track how it changes\n- Include one AO3 sentence about Jacobean attitudes to guilt, sin, or conscience\n- Use PEEL structure and formal academic register",
  teacherNotes: [
    "The Act 1 vs Act 5 comparison is one of the highest-value exam skills for Macbeth. Train students to always compare early and late presentations of a character — this is what separates grade 5 from grade 7+ responses.",
    "The prose vs verse distinction is a subtle but powerful AO2 point. Many students do not notice the shift. Make it explicit: Lady Macbeth in Act 1 speaks in commanding verse; in Act 5 she speaks in broken, fragmented prose. The form itself enacts her psychological collapse.",
    "The blood motif timeline activity is deliberately designed to be reusable. Students should keep this in their revision notes — it provides ready-made evidence for any question about guilt, Lady Macbeth, or symbolism.",
    "Sensitive content note: the sleepwalking scene deals with mental illness and psychological breakdown. Frame the discussion in literary terms but be aware that some students may have personal connections to mental health issues. Avoid casual language like 'crazy' or 'insane' — use 'psychologically distressed' or 'mentally unstable'.",
    "If time allows, play a recorded performance of the sleepwalking scene (e.g. the Judi Dench or Marion Cotillard version). Visual performance makes the horror of Lady Macbeth's collapse tangible.",
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  LESSON 5: Macbeth's Downfall (Act 5 Scenes 5–8)
// ═══════════════════════════════════════════════════════════════════════════

const lesson5: LessonPlanData = {
  title: "Macbeth's Downfall — Tragedy, Fatalism & Catharsis (Act 5 Scenes 5–8)",
  duration: "55 minutes",
  yearGroup: "Year 10/11",
  examBoard: "AQA / Edexcel IGCSE",
  text: "Macbeth — William Shakespeare",
  objectives: [
    "Analyse Macbeth's 'Tomorrow and tomorrow and tomorrow' soliloquy as an expression of nihilism and despair",
    "Explore how Shakespeare resolves the witches' prophecies through equivocation in Act 5",
    "Examine how Macbeth's death restores the natural order and fulfils the conventions of tragedy",
    "Understand the concepts of hamartia, catharsis, and the tragic hero in relation to Macbeth",
    "Evaluate whether Macbeth is a villain who deserved his fate or a tragic hero destroyed by forces beyond his control",
  ],
  starterActivity: {
    title: "Recap: How Did We Get Here?",
    duration: "6 minutes",
    instructions:
      "1. Display a plot timeline of Macbeth with six key events, but two are missing. Students fill in the gaps from memory on mini-whiteboards.\n2. Reveal the answers and briefly recap: Macbeth is now a tyrant. Lady Macbeth is dead. Malcolm's army is approaching with branches from Birnam Wood. Macbeth believes he cannot be killed by any man 'of woman born'.\n3. Ask: 'What would you do if you discovered that your whole life had been built on a lie — that the prophecies you trusted were tricks?'\n4. Cold-call two students.\n5. Introduce today's focus: 'Today we watch Macbeth lose everything — his wife, his confidence, his meaning, and finally his life. The question is: does he deserve our pity?'",
    differentiation: {
      support: "Provide a partially completed timeline with four of six events filled in. Students complete the final two using a word bank of events.",
      core: "Students complete the timeline from memory and write one sentence predicting how Macbeth will react to his downfall.",
      stretch: "Students predict how Shakespeare will resolve the witches' prophecies — both 'Birnam Wood' and 'none of woman born'. What dramatic technique is Shakespeare using if the prophecies come true in unexpected ways?",
    },
  },
  mainActivities: [
    {
      title: "'Tomorrow and Tomorrow and Tomorrow' — Macbeth's Final Soliloquy (Act 5 Scene 5, lines 17–28)",
      duration: "15 minutes",
      instructions:
        "1. Set the context: Macbeth has just been told that Lady Macbeth is dead. He responds with this soliloquy.\n2. Teacher reads the soliloquy aloud twice: once at normal pace, once slowly with pauses.\n3. Display the full text on the projector. Students have printed copies.\n4. Guided annotation (8 minutes) — display tasks one at a time:\n   (a) 'Tomorrow and tomorrow and tomorrow' — what is the effect of the triple repetition? What does it suggest about Macbeth's view of time?\n   (b) 'Life's but a walking shadow, a poor player / That struts and frets his hour upon the stage' — identify the metaphor. What does comparing life to a bad actor suggest?\n   (c) 'a tale / Told by an idiot, full of sound and fury, / Signifying nothing' — what is Macbeth saying about the meaning of life? What is nihilism?\n   (d) How does this soliloquy differ in tone from the dagger soliloquy in Act 2? What has changed in Macbeth?\n5. Cold-call four students for annotations.\n6. Teacher consolidation: 'This is one of the most famous speeches in English literature. Macbeth has moved beyond guilt, beyond fear, beyond ambition. He has reached nihilism — the belief that life has no meaning. Shakespeare gives us a tragic hero who has destroyed everything that once gave his life purpose.'\n7. Students copy the consolidation point and underline 'nihilism'.",
      differentiation: {
        support: "Provide a modern English translation alongside the original. Pre-label the three metaphors (candle, walking shadow, poor player). Include glossary: nihilism, metaphor, futility, despair.",
        core: "Students annotate independently and write the consolidation point. Identify the shift in tone from Act 2 to Act 5.",
        stretch: "Students write a paragraph arguing whether this speech makes Macbeth more sympathetic or less. Does nihilism indicate depth of feeling (he is devastated by loss) or moral emptiness (he no longer cares about anything, including other people's suffering)?",
      },
    },
    {
      title: "The Prophecies Unravel: Equivocation and Dramatic Irony (Act 5 Scenes 5–8)",
      duration: "12 minutes",
      instructions:
        "1. Display the two remaining prophecies on the board:\n   (a) 'Macbeth shall never vanquished be until / Great Birnam Wood to high Dunsinane Hill / Shall come against him'\n   (b) 'none of woman born / Shall harm Macbeth'\n2. Ask: 'How could a forest move? How could a person not be born of a woman?' Students brainstorm in pairs (2 minutes).\n3. Reveal how Shakespeare resolves each prophecy:\n   (a) Birnam Wood: Malcolm's soldiers carry branches as camouflage — the wood 'moves'\n   (b) 'None of woman born': Macduff was delivered by Caesarean section — 'untimely ripped from his mother's womb'\n4. Introduce the key concept: EQUIVOCATION — language that is technically true but deliberately misleading. The witches never lied; they used words with double meanings.\n5. Students write a PEEL paragraph (6 minutes): 'How does Shakespeare use equivocation to bring about Macbeth's downfall?'\n6. Quick share: two volunteers read their paragraphs.",
      differentiation: {
        support: "Provide the two prophecy resolutions pre-explained. Supply a PEEL frame: 'Shakespeare uses equivocation to... The witches said \"...\" which Macbeth interpreted as... but actually meant... This reveals that...'",
        core: "Students write a PEEL paragraph independently explaining how equivocation works and why it is dramatically effective.",
        stretch: "Students connect equivocation to the play's wider theme: 'Fair is foul, and foul is fair.' How does the entire play function as an exploration of language that cannot be trusted? What is Shakespeare saying about the relationship between words and truth?",
      },
    },
    {
      title: "Macbeth as a Tragic Hero: Genre Analysis",
      duration: "12 minutes",
      instructions:
        "1. Display the five features of a Shakespearean tragedy on the board:\n   (a) A noble protagonist with a fatal flaw (hamartia)\n   (b) The protagonist's choices lead to their own downfall\n   (c) The downfall evokes both pity and fear in the audience\n   (d) Order is restored at the end\n   (e) The audience experiences catharsis — emotional release through the tragic experience\n2. Students draw a five-row table in their books. For each feature, they provide evidence from Macbeth.\n3. Work independently for 6 minutes. Teacher circulates.\n4. Class discussion (4 minutes): 'Does Macbeth fit the definition of a tragic hero? Or has he gone too far — is he simply a villain?'\n5. Teacher makes the key point: 'Macbeth is a play about a good man who makes a catastrophic choice. Shakespeare ensures we remember who Macbeth was before the witches and Lady Macbeth — \"brave Macbeth\", \"worthy gentleman\". This is what makes his downfall tragic rather than merely deserved.'\n6. Students write a concluding sentence: 'Macbeth is a tragic hero because...' or 'Macbeth cannot be called a tragic hero because...'",
      differentiation: {
        support: "Provide the five-row table pre-printed with the tragedy features in column 1. Include prompts: 'Macbeth's hamartia is... Evidence: ...' / 'Order is restored when Malcolm...'",
        core: "Students complete the table independently and write a concluding sentence with a clear position.",
        stretch: "Students evaluate whether calling Macbeth a 'tragic hero' is too generous — does the label excuse his murders? Or is Shakespeare's point precisely that even murderers are human, and understanding them is more valuable than simply condemning them?",
      },
    },
  ],
  plenary: {
    title: "Final Verdict: Villain or Victim?",
    instructions:
      "1. Display a continuum on the board: VILLAIN ← → VICTIM with TRAGIC HERO in the centre.\n2. Students place a sticky dot (or write their initials) on the continuum.\n3. Teacher identifies the class consensus and asks one outlier to defend their position.\n4. Final writing task (2 minutes): 'In one sentence, what does Shakespeare want us to learn from Macbeth's story?'\n5. Cold-call three students to share. End the lesson with the teacher reading the final line of the play: Malcolm's restoration of order.",
    differentiation: {
      support: "Provide three pre-written positions to choose from: (a) 'Macbeth is a villain because...', (b) 'Macbeth is a victim because...', (c) 'Macbeth is a tragic hero because...' Students select and complete one.",
      core: "Students position themselves on the continuum and write a one-sentence justification with evidence.",
      stretch: "Students argue that the continuum is too simplistic — Shakespeare creates a character who is simultaneously villain, victim, and tragic hero. Explain how this complexity serves the play's themes.",
    },
  },
  keyVocabulary: [
    "tragedy — a dramatic genre in which a noble protagonist falls from greatness, evoking pity and fear",
    "tragic hero — a protagonist whose fatal flaw leads to their downfall despite their noble qualities",
    "hamartia — the fatal flaw (often ambition, pride, or hubris) that causes a tragic hero's downfall",
    "catharsis — the emotional release (pity, fear, relief) experienced by the audience in a tragedy",
    "nihilism — the belief that life has no inherent meaning, purpose, or value",
    "equivocation — the use of deliberately ambiguous language to deceive while technically telling the truth",
    "dramatic irony — when the audience understands more than the characters on stage",
    "fatalism — the belief that all events are predetermined and cannot be changed",
    "natural order — the Jacobean concept of a divinely ordained hierarchy (God > King > man > woman > animal)",
    "restoration — the re-establishment of legitimate order after a period of chaos or tyranny",
    "soliloquy — a speech delivered alone on stage, revealing inner thoughts and feelings",
    "metaphor — a comparison that describes one thing as if it were another",
    "futility — the quality of being pointless or useless; having no purpose",
    "tyrant — a cruel and oppressive ruler who seizes power illegitimately",
    "denouement — the final resolution of a plot, when all threads are tied up",
  ],
  resourcesNeeded: [
    "Printed copies of the 'Tomorrow' soliloquy (Act 5 Scene 5, lines 17–28) — one per student",
    "Projector for plot timeline, prophecy display, tragedy features, and continuum",
    "Modern English translation handout for support-tier students",
    "Five-row tragedy table handout (one per student)",
    "PEEL frame for support-tier students",
    "Glossary handout for support-tier students",
    "Mini-whiteboards for the recap starter",
    "Sticky dots or markers for the plenary continuum",
  ],
  homework:
    "Write a 300-word essay response to the question:\n'To what extent is Macbeth a tragic hero?'\n\nSuccess criteria:\n- Define 'tragic hero' and 'hamartia' in your opening paragraph\n- Refer to at least three moments across the play (not just Act 5)\n- Include embedded quotations from at least two different acts\n- Present both sides of the argument: reasons Macbeth IS a tragic hero and reasons he is NOT\n- Reach a clear personal conclusion supported by evidence\n- Include AO3 context on Jacobean tragedy or the Great Chain of Being\n- Write in PEEL paragraphs with formal academic register",
  teacherNotes: [
    "The 'Tomorrow and tomorrow' soliloquy is extremely high-value for exams. It can be used for questions about Macbeth's character, the theme of ambition, the theme of guilt, Shakespeare's use of language, and the conventions of tragedy. Students should learn at least the first four lines by heart.",
    "Equivocation is a sophisticated AO2 point that examiners reward. Link it to the Gunpowder Plot context: Jesuits accused of treason used 'equivocation' (lying by technicality) in their defence. Shakespeare connects the witches' language to this real political debate.",
    "The tragic hero debate is essential preparation for any exam question that asks students to evaluate. The best answers do not simply choose 'hero' or 'villain' — they argue that the play's power lies in the tension between the two.",
    "This is a good lesson to end with Malcolm's speech about restoring order. Jacobean audiences expected divine order to be re-established. Malcolm's coronation is Shakespeare's reassurance that killing a tyrant is legitimate when the tyrant has violated the Great Chain of Being.",
    "Assessment opportunity: the homework essay is a good formative assessment piece. Mark it against AQA criteria and return with targets for improvement. This question appears in some form on almost every Macbeth paper.",
  ],
}

// ═══════════════════════════════════════════════════════════════════════════
//  EXPORT
// ═══════════════════════════════════════════════════════════════════════════

export const macbethPptxLessons: LessonPlanData[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
]
