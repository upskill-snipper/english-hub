// @ts-nocheck
// ─── Types ───────────────────────────────────────────────────────────────────

import type { LessonPlan } from './macbeth-lessons';

// ─── Lesson 1: Opening Chapter — Marriage, Money, and Irony ─────────────────

const lesson1: LessonPlan = {
  id: 'pride-prejudice-01-opening-chapter',
  title: 'Opening Chapter: Marriage, Money, and Irony',
  text: 'Pride and Prejudice',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the opening sentence of Pride and Prejudice and its use of irony to establish tone.',
    'Explore how Austen introduces the themes of marriage and wealth in the first chapter.',
    'Understand the Regency social context that shapes the Bennet family\'s concerns.',
  ],
  successCriteria: [
    'I can explain how Austen uses irony in the novel\'s opening sentence and its effect on the reader.',
    'I can identify at least two ways marriage and money are linked in Chapter 1.',
    'I can describe the contrasting characterisation of Mr and Mrs Bennet using textual evidence.',
  ],
  keywords: [
    'irony', 'satire', 'Regency era', 'entailment',
    'matrimony', 'social commentary', 'narrative voice', 'antithesis',
  ],
  starterActivity: {
    title: 'Unpacking the Most Famous Opening Line in English Literature',
    duration: '8 minutes',
    instructions:
      'Display the opening sentence: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife." Students discuss in pairs: Is this statement true? Who might believe it? What tone does the author adopt? Reveal that Austen is being ironic — the sentence actually tells us more about the society doing the "acknowledging" than about single men. Discuss the difference between what is literally said and what is actually meant.',
    differentiation: {
      support: 'Provide a simplified definition of irony with two everyday examples before discussing the quotation.',
      core: 'Students annotate the sentence, identifying which words signal irony and explaining why.',
      stretch: 'Students rewrite the sentence to express its true meaning without irony, then compare the effect of both versions.',
    },
    resources: ['Opening sentence displayed on board', 'Irony definition card (support tier)', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Close Reading of Chapter 1: Mr and Mrs Bennet',
      duration: '22 minutes',
      instructions:
        'Read Chapter 1 aloud as a class, with students following along with annotated copies. Students complete a dual-column character comparison table for Mr and Mrs Bennet, tracking: what each character says, their attitude to marriage, their attitude to their daughters, and the narrative voice\'s attitude toward each character. Teacher models the first entry using Mr Bennet\'s sarcastic response to his wife. Students then work independently to complete the table. Class discussion: who does Austen want us to sympathise with, and how can we tell?',
      differentiation: {
        support: 'Provide a partially completed comparison table with key quotations already identified; students analyse their effect.',
        core: 'Students complete the comparison table independently and select two quotations to analyse in detail.',
        stretch: 'Students write a paragraph evaluating how Austen uses dialogue to characterise the Bennets without direct narrative description.',
      },
      resources: ['Chapter 1 printed extract', 'Dual-column comparison table worksheet', 'Quotation bank (support tier)'],
    },
    {
      title: 'Marriage and Money: Contextual Investigation',
      duration: '20 minutes',
      instructions:
        'Teacher provides a contextual information sheet on marriage in Regency England covering: entailment, the marriage market, women\'s lack of legal rights to property, and the importance of "connections." Students work in groups to answer three key questions: (1) Why is Mrs Bennet so anxious about her daughters marrying? (2) What does "entailment" mean and how does it affect the Bennet family? (3) How does understanding this context change your reading of the opening sentence? Groups feed back and teacher consolidates by linking context to Austen\'s satirical tone.',
      differentiation: {
        support: 'Provide a glossary of Regency terms and simplified context cards with key facts highlighted.',
        core: 'Students answer all three questions with textual evidence and contextual references.',
        stretch: 'Students evaluate whether Austen presents Mrs Bennet as foolish or as a rational woman responding to genuine economic danger.',
      },
      resources: ['Regency context information sheet', 'Group question cards', 'Key terms glossary (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Exit Ticket: Irony in Action',
    duration: '7 minutes',
    instructions:
      'Students answer: "How does Austen use irony in Chapter 1 to comment on Regency attitudes to marriage? Use one quotation in your answer." Collect responses to assess understanding of irony and contextual knowledge.',
    differentiation: {
      support: 'Sentence starter provided: "Austen uses irony when she writes... This suggests that..."',
      core: 'Full written response with embedded quotation and contextual link.',
      stretch: 'Students add a second sentence exploring Austen\'s authorial intention in adopting an ironic tone from the outset.',
    },
  },
  homework:
    'Write a paragraph explaining why the opening sentence of Pride and Prejudice is ironic. Include at least one piece of contextual information about Regency marriage customs.',
  worksheetQuestions: [
    {
      question: 'What is ironic about the opening sentence of Pride and Prejudice?',
      lines: 5,
      modelAnswer:
        'The opening sentence states that a rich single man "must be in want of a wife" as if it were a universal truth. However, Austen is being ironic: the real "truth" is that families with unmarried daughters are desperate to find wealthy husbands. The irony lies in the reversal — it is not the man who is "in want" but the society around him. Austen uses this to satirise the Regency obsession with marriage as an economic transaction rather than a romantic union.',
      marks: 4,
    },
    {
      question: 'How does Austen contrast Mr and Mrs Bennet in Chapter 1? What is the effect of this contrast?',
      lines: 6,
      modelAnswer:
        'Mrs Bennet is presented as excitable, single-minded, and obsessed with marrying her daughters to wealthy men, declaring that Mr Bingley is "a fine thing for our girls." Mr Bennet, by contrast, is dry, sarcastic, and detached, teasing his wife about his supposed preference for their daughters. Austen uses dialogue rather than direct description to reveal this contrast, allowing the reader to infer character through speech. The effect is comic — Mr Bennet\'s wit exposes Mrs Bennet\'s anxieties — but it also hints at a deeper marital unhappiness, foreshadowing the novel\'s exploration of what makes a successful marriage.',
      marks: 4,
    },
    {
      question: 'Explain what "entailment" means and why it matters to the Bennet family.',
      lines: 4,
      modelAnswer:
        'Entailment was a legal arrangement that restricted the inheritance of property to male heirs. Because the Bennets have no sons, their estate, Longbourn, will pass to Mr Collins upon Mr Bennet\'s death. This means Mrs Bennet and her daughters could be left without a home or income, which is why Mrs Bennet is so desperate for her daughters to marry well. Austen uses entailment to highlight the vulnerability of women in Regency England, where financial security depended almost entirely on marriage.',
      marks: 4,
    },
    {
      question: 'How does understanding Regency context change your interpretation of the opening chapter?',
      lines: 5,
      modelAnswer:
        'Without context, Mrs Bennet can appear simply foolish and materialistic. However, understanding that women in Regency England could not own property, had limited career options, and were entirely dependent on fathers or husbands for financial security reveals that her obsession with marriage is a rational response to genuine economic peril. Austen\'s irony therefore operates on multiple levels: she satirises the marriage market while simultaneously showing why it existed. This makes the opening chapter both comic and deeply critical of the social system it depicts.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson works best if students have not read the novel before — the opening chapter functions as a self-contained introduction.',
    'Emphasise that Austen\'s irony is not just humour but a tool for social criticism. This distinction is key for higher-mark responses.',
    'The entailment concept is essential for understanding the plot; ensure all students grasp it before moving on.',
    'Consider displaying a timeline of women\'s property rights (1792 Wollstonecraft, 1882 Married Women\'s Property Act) to contextualise the Bennets\' situation.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language analysis',
    'AO3: Context',
    'Inference',
    'Close reading',
  ],
};

// ─── Lesson 2: First Impressions — The Meryton Ball ─────────────────────────

const lesson2: LessonPlan = {
  id: 'pride-prejudice-02-meryton-ball',
  title: 'First Impressions: The Meryton Ball',
  text: 'Pride and Prejudice',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Austen presents the first meeting between Elizabeth and Darcy at the Meryton ball.',
    'Explore the significance of "first impressions" as a theme and the novel\'s original title.',
    'Examine how pride and prejudice are established in both characters from the outset.',
  ],
  successCriteria: [
    'I can explain how Darcy\'s comment — "She is tolerable, but not handsome enough to tempt me" — reveals his pride.',
    'I can analyse how Elizabeth\'s response to Darcy\'s slight establishes her character and her prejudice.',
    'I can write an analytical paragraph exploring how Austen uses the ball scene to introduce the central conflict.',
  ],
  keywords: [
    'first impressions', 'pride', 'prejudice', 'social status',
    'characterisation', 'dialogue', 'assembly', 'slight',
  ],
  starterActivity: {
    title: 'First Impressions Experiment',
    duration: '7 minutes',
    instructions:
      'Show four images of people (from different backgrounds, wearing different clothing) and ask students to write three assumptions about each person in 90 seconds. Reveal that the novel was originally titled "First Impressions." Discuss: How reliable are first impressions? What factors influence them? Link to the ideas of pride (judging others as beneath you) and prejudice (forming opinions before knowing someone).',
    differentiation: {
      support: 'Provide a word bank of adjectives for describing first impressions.',
      core: 'Students explain what influenced each assumption and whether it was fair.',
      stretch: 'Students discuss how social class, wealth, and appearance might distort first impressions in Regency England compared to today.',
    },
    resources: ['Four images for first impressions activity', 'Word bank (support tier)', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Close Reading: The Meryton Ball (Chapters 3-4)',
      duration: '22 minutes',
      instructions:
        'Read the key extract from Chapter 3 covering Darcy\'s arrival, his initial reception, and his dismissal of Elizabeth. Students annotate the extract focusing on three areas: (1) How Bingley and Darcy are contrasted, (2) What Darcy\'s language reveals about his character, (3) How Elizabeth responds to the slight. Teacher models annotation of Darcy\'s line "She is tolerable, but not handsome enough to tempt me" — analysing word choice ("tolerable" as condescending, "tempt" implying she should be grateful for his attention). Students then write a PEE paragraph analysing either Darcy\'s pride or Elizabeth\'s prejudice using a quotation from the extract.',
      differentiation: {
        support: 'Provide a pre-annotated version of Darcy\'s key line with guiding questions for the paragraph.',
        core: 'Students annotate independently and write a full PEE paragraph with embedded quotation.',
        stretch: 'Students compare the narrative voice\'s presentation of Darcy with Elizabeth\'s perception of him, noting any discrepancies.',
      },
      resources: ['Chapter 3 extract (annotated copies)', 'PEE paragraph frame', 'Annotation guide'],
    },
    {
      title: 'Bingley vs Darcy: The Foil Effect',
      duration: '20 minutes',
      instructions:
        'Introduce the concept of a literary foil. Students create a Venn diagram comparing Bingley and Darcy across categories: social behaviour, attitude to others, language, and first impressions on Meryton society. In pairs, students discuss: Why does Austen introduce Darcy alongside Bingley? What is the effect of this contrast? Class feedback leads to the key insight: Bingley\'s openness makes Darcy\'s pride more visible, and the community\'s quick judgement of both men mirrors the theme of first impressions. Students write two comparative sentences using connectives of contrast.',
      differentiation: {
        support: 'Provide quotations for each character and a partially completed Venn diagram.',
        core: 'Students complete the Venn diagram independently with textual evidence and write comparative sentences.',
        stretch: 'Students evaluate whether the Meryton community\'s judgement of Darcy is fair, considering his perspective as an outsider among strangers.',
      },
      resources: ['Venn diagram template', 'Quotation bank for Bingley and Darcy', 'Connectives of contrast list'],
    },
  ],
  plenaryActivity: {
    title: 'Judgement Cards',
    duration: '8 minutes',
    instructions:
      'Give students two cards: "PRIDE" and "PREJUDICE." Read five short statements about characters\' behaviour at the ball. Students hold up which card they think applies. Discuss any disagreements — key learning point: pride and prejudice often overlap and are present in both Elizabeth and Darcy, not just one each.',
    differentiation: {
      support: 'Define pride and prejudice on the cards themselves for quick reference.',
      core: 'Students justify their card choice with a reason from the text.',
      stretch: 'Students identify moments where a character displays both pride and prejudice simultaneously.',
    },
  },
  homework:
    'Write a paragraph answering: "How does Austen use the Meryton ball to establish the central conflict between Elizabeth and Darcy?" Include at least two quotations.',
  worksheetQuestions: [
    {
      question: 'Analyse the significance of Darcy\'s comment: "She is tolerable, but not handsome enough to tempt me."',
      lines: 6,
      modelAnswer:
        'Darcy\'s dismissal of Elizabeth reveals his pride and social arrogance. The word "tolerable" is condescending — it reduces Elizabeth to a mediocre assessment rather than a genuine evaluation. The phrase "tempt me" implies that Elizabeth should be grateful for his attention, positioning Darcy as superior. The verb "tempt" also carries connotations of desire and power, suggesting Darcy sees social interaction as something beneath him unless the woman meets his exacting standards. Austen uses this line to establish Darcy\'s pride as his defining flaw while simultaneously creating dramatic irony: the reader already suspects that Elizabeth will eventually "tempt" him greatly.',
      marks: 5,
    },
    {
      question: 'How are Bingley and Darcy presented as foils at the Meryton ball?',
      lines: 5,
      modelAnswer:
        'Bingley is described as "good-looking and gentlemanlike" with "easy, unaffected manners," while Darcy, though initially admired for his wealth and appearance, quickly becomes seen as "the proudest, most disagreeable man in the world." Bingley dances with everyone and praises the company; Darcy refuses to dance and dismisses the women present. Austen uses this contrast to highlight Darcy\'s pride: placed beside Bingley\'s warmth, Darcy\'s coldness is magnified. The foil structure also reflects the theme of first impressions — the community\'s rapid judgement of both men is based on surface behaviour rather than true character.',
      marks: 4,
    },
    {
      question: 'Why is it significant that the novel was originally titled "First Impressions"?',
      lines: 5,
      modelAnswer:
        'The original title highlights the central theme: both Elizabeth and Darcy form inaccurate first impressions of each other at the Meryton ball. Elizabeth judges Darcy as proud and disagreeable based on one overheard comment, while Darcy dismisses Elizabeth as socially beneath him. The entire plot traces how both characters must overcome these initial judgements. Austen renamed the novel "Pride and Prejudice" to foreground the moral and psychological flaws that cause these misjudgements, making the title a diagnosis rather than merely a description of the problem.',
      marks: 4,
    },
    {
      question: 'How does Elizabeth respond to Darcy\'s slight, and what does this reveal about her character?',
      lines: 5,
      modelAnswer:
        'Elizabeth overhears Darcy\'s dismissal and responds with wit rather than distress, retelling the story to her friends "with great spirit" and turning it into an amusing anecdote. This reveals her independence, resilience, and sharp sense of humour — she refuses to be wounded by a man she considers arrogant. However, Austen also subtly suggests that Elizabeth\'s quick dismissal of Darcy mirrors his dismissal of her: both characters form instant judgements and hold to them with conviction. Her spirited response, while admirable, also plants the seed of her prejudice against him.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'The first impressions starter works well as a hook but must be handled sensitively — avoid images that could reinforce stereotypes.',
    'Emphasise that both Elizabeth and Darcy are guilty of pride AND prejudice; avoid the common misconception that each embodies only one.',
    'The foil concept can be extended later when comparing Darcy/Wickham and Elizabeth/Jane.',
    'Collect homework paragraphs to assess students\' ability to integrate quotations — a key skill for this text.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Language analysis',
    'AO2: Structure — use of foils',
    'Comparative analysis',
    'Analytical writing (PEE)',
  ],
};

// ─── Lesson 3: Mr Darcy's Letter — Revelation and Reflection ────────────────

const lesson3: LessonPlan = {
  id: 'pride-prejudice-03-darcys-letter',
  title: "Mr Darcy's Letter: Revelation and Reflection",
  text: 'Pride and Prejudice',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the content and significance of Darcy\'s letter in Chapter 35 as a structural turning point.',
    'Explore how the letter forces Elizabeth to reassess her judgements of both Darcy and Wickham.',
    'Evaluate Austen\'s use of the letter as a narrative device for revelation and character development.',
  ],
  successCriteria: [
    'I can explain the two main revelations in Darcy\'s letter and their impact on the plot.',
    'I can analyse Elizabeth\'s emotional response to the letter and how it begins her transformation.',
    'I can evaluate the letter\'s structural importance as the novel\'s turning point.',
  ],
  keywords: [
    'epistolary', 'turning point', 'anagnorisis', 'self-awareness',
    'revelation', 'narrative device', 'dramatic irony', 'reassessment',
  ],
  starterActivity: {
    title: 'Before and After the Letter',
    duration: '7 minutes',
    instructions:
      'Display two columns: "Elizabeth\'s beliefs BEFORE the letter" and "Elizabeth\'s beliefs AFTER the letter." As a class, brainstorm what Elizabeth believes about Darcy and Wickham before reading the letter (Darcy is proud, cruel, and ruined Wickham\'s prospects; Wickham is charming, honest, and wronged). Leave the "after" column blank — students will return to it at the end of the lesson. This creates a clear purpose for reading.',
    differentiation: {
      support: 'Provide a recap sheet summarising key events from Chapters 1-34 to help students recall Elizabeth\'s beliefs.',
      core: 'Students contribute independently to both columns with specific references to earlier events.',
      stretch: 'Students predict what the letter might reveal and what evidence might change Elizabeth\'s mind.',
    },
    resources: ['Two-column display on board', 'Recap sheet (support tier)', 'Sticky notes for contributions'],
  },
  mainActivities: [
    {
      title: 'Close Reading: Darcy\'s Letter (Chapter 35)',
      duration: '25 minutes',
      instructions:
        'Provide students with an edited extract of Darcy\'s letter (the key passages addressing Wickham\'s true character and Darcy\'s reasons for separating Bingley from Jane). Read the first section aloud; students follow along and annotate for tone, key revelations, and language choices. Teacher models analysis of Darcy\'s account of Wickham\'s attempted elopement with Georgiana — focusing on the shift from public charm to private villainy. Students then read the second section (regarding Jane and Bingley) independently and answer: What reasons does Darcy give? Are they reasonable or arrogant? Students complete a "Revelation Tracker" table listing each claim Darcy makes, the evidence he provides, and whether Elizabeth (and the reader) should believe him.',
      differentiation: {
        support: 'Provide the letter in simplified modern English alongside the original, with key revelations highlighted.',
        core: 'Students complete the Revelation Tracker independently with textual references.',
        stretch: 'Students analyse Darcy\'s tone in the letter — does he sound apologetic, defensive, proud, or honest? What does this reveal about his character at this point?',
      },
      resources: ['Edited extract of Darcy\'s letter', 'Revelation Tracker worksheet', 'Simplified version (support tier)'],
    },
    {
      title: 'Elizabeth\'s Response: The Moment of Anagnorisis',
      duration: '18 minutes',
      instructions:
        'Read Elizabeth\'s response to the letter from Chapter 36: "How despicably I have acted!... Till this moment I never knew myself." Introduce the term "anagnorisis" — a moment of critical self-recognition in a protagonist. Students discuss in pairs: What does Elizabeth realise about herself? Why is "I never knew myself" such a powerful admission? How does this change the direction of the novel? Students write an analytical paragraph exploring how Austen uses Elizabeth\'s response to the letter to develop the theme of self-awareness, using the quotation "Till this moment I never knew myself" as their focus.',
      differentiation: {
        support: 'Provide a paragraph frame with sentence starters and the quotation already embedded.',
        core: 'Students write a full analytical paragraph independently using PEE structure.',
        stretch: 'Students compare Elizabeth\'s moment of self-recognition with a similar moment in another text they have studied, evaluating Austen\'s handling of the convention.',
      },
      resources: ['Chapter 36 extract', 'Anagnorisis definition card', 'Paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Completing the "After" Column',
    duration: '7 minutes',
    instructions:
      'Return to the starter activity. Students now complete the "After" column: What does Elizabeth believe about Darcy and Wickham after reading the letter? Class discussion on the key question: Is the letter the most important moment in the novel? Students vote and justify their answer.',
    differentiation: {
      support: 'Students complete the "after" column using evidence gathered from the Revelation Tracker.',
      core: 'Students justify their vote with a specific textual reference.',
      stretch: 'Students argue for or against the letter as the structural turning point, considering alternative candidates.',
    },
  },
  homework:
    'Answer the following question in one paragraph: "How does Austen use Darcy\'s letter to change the reader\'s understanding of both Darcy and Wickham?"',
  worksheetQuestions: [
    {
      question: 'What are the two main revelations in Darcy\'s letter, and how do they change Elizabeth\'s understanding?',
      lines: 6,
      modelAnswer:
        'The first revelation concerns Wickham: Darcy explains that Wickham squandered the living left to him, demanded additional money, and attempted to elope with Darcy\'s fifteen-year-old sister Georgiana for her fortune. This exposes Wickham as a predatory fortune-hunter rather than the wronged gentleman he presented himself as. The second revelation addresses Darcy\'s interference in Bingley and Jane\'s relationship: he admits he separated them because he believed Jane did not truly love Bingley and because the Bennet family\'s behaviour was socially embarrassing. While the first revelation vindicates Darcy, the second is more ambiguous — his reasons mix genuine concern with class prejudice. Together, these revelations force Elizabeth to recognise that her judgement of both men was fundamentally wrong.',
      marks: 5,
    },
    {
      question: 'Analyse the significance of Elizabeth\'s admission: "Till this moment I never knew myself."',
      lines: 5,
      modelAnswer:
        'This line represents Elizabeth\'s anagnorisis — her moment of painful self-recognition. She realises that she, who prided herself on her wit and perceptiveness, has been blind to Wickham\'s deception and unfair to Darcy. The word "never" emphasises the totality of her self-deception; she has not merely made a minor error but has fundamentally misunderstood herself. Austen uses this moment to develop the theme of prejudice: Elizabeth\'s prejudice against Darcy was not just an opinion but a flaw in her own character that she must acknowledge and overcome. Structurally, this line marks the novel\'s turning point — from this moment, Elizabeth begins to change.',
      marks: 5,
    },
    {
      question: 'Why does Austen choose a letter as the method for Darcy\'s revelations rather than a conversation?',
      lines: 5,
      modelAnswer:
        'A letter allows Darcy to present his case fully and carefully without interruption, which would be impossible in the heated emotional atmosphere after Elizabeth\'s rejection of his proposal. It also allows Elizabeth to re-read and reflect in private, which mirrors her internal process of reassessment — she reads the letter multiple times, each time understanding more. The epistolary form gives the reader direct access to Darcy\'s voice and reasoning without the narrator\'s mediation, making his account feel more honest and personal. Finally, a letter is a one-way communication: Elizabeth cannot argue back, forcing her to sit with the uncomfortable truth rather than deflect it through wit.',
      marks: 4,
    },
    {
      question: 'How does the letter function as a structural turning point in the novel?',
      lines: 5,
      modelAnswer:
        'The letter divides the novel into two halves. Before the letter, the plot is driven by misunderstanding: Elizabeth\'s prejudice against Darcy and her misplaced trust in Wickham create the central conflict. After the letter, both protagonists begin to change — Elizabeth acknowledges her misjudgement, and Darcy, having been told his behaviour is arrogant, begins to reform his manners. The letter therefore initiates the parallel character arcs that drive the second half of the novel toward resolution. It also shifts the reader\'s sympathies, transforming Darcy from an antagonist into a complex, sympathetic figure and revealing Wickham as the true villain.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This lesson covers the most structurally important moment in the novel — ensure students understand why before moving on.',
    'The edited extract of the letter should focus on the Wickham and Bingley/Jane sections; the full letter is very long for classroom reading.',
    'Anagnorisis is a sophisticated term that will impress examiners — encourage students to use it in essays about character development.',
    'Some students may struggle with the idea that Elizabeth is flawed; frame it as Austen showing that even intelligent, likeable people can be prejudiced.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Structure — turning points',
    'AO2: Language analysis',
    'Analytical writing',
    'Critical evaluation',
  ],
};

// ─── Lesson 4: Elizabeth Bennet — Wit, Independence, and Prejudice ──────────

const lesson4: LessonPlan = {
  id: 'pride-prejudice-04-elizabeth-bennet',
  title: 'Elizabeth Bennet: Wit, Independence, and Prejudice',
  text: 'Pride and Prejudice',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Austen presents Elizabeth Bennet as an unconventional heroine through her wit and independence.',
    'Explore how Elizabeth\'s prejudice functions as a character flaw that drives the plot.',
    'Evaluate the extent to which Elizabeth challenges or conforms to Regency expectations of women.',
  ],
  successCriteria: [
    'I can identify at least three quotations that reveal Elizabeth\'s wit, independence, or prejudice.',
    'I can explain how Elizabeth\'s prejudice against Darcy is established and maintained across the first half of the novel.',
    'I can evaluate whether Elizabeth is a feminist figure or a product of her time, using textual evidence.',
  ],
  keywords: [
    'protagonist', 'heroine', 'wit', 'independence',
    'prejudice', 'unconventional', 'Regency femininity', 'free indirect discourse',
  ],
  starterActivity: {
    title: 'The Ideal Regency Woman vs Elizabeth',
    duration: '8 minutes',
    instructions:
      'Display Miss Bingley\'s list of "accomplished" women from Chapter 8: drawing, music, singing, modern languages, and a certain "air" and manner of walking. Students discuss: Does Elizabeth meet these criteria? What does she value instead? Introduce the idea that Elizabeth is Austen\'s challenge to the conventional Regency heroine — she reads rather than draws, walks in mud rather than gliding gracefully, and speaks her mind rather than remaining demure.',
    differentiation: {
      support: 'Provide a simple table listing Miss Bingley\'s criteria and space for students to note whether Elizabeth meets each one.',
      core: 'Students explain what Elizabeth values instead of traditional "accomplishments" and find textual evidence.',
      stretch: 'Students consider why Austen gives the "accomplishments" speech to Miss Bingley specifically — what does this reveal about both characters?',
    },
    resources: ['Chapter 8 extract on "accomplished" women', 'Comparison table (support tier)'],
  },
  mainActivities: [
    {
      title: 'Tracking Elizabeth\'s Wit: A Quotation Study',
      duration: '20 minutes',
      instructions:
        'Provide students with a bank of eight key Elizabeth quotations from across the novel, including: "I could easily forgive his pride, if he had not mortified mine," "There are few people whom I really love, and still fewer of whom I think well," and her exchanges with Lady Catherine. Students sort quotations into three categories: Wit, Independence, and Prejudice (some may fit more than one). For each quotation, students annotate: who is she speaking to, what does the language reveal, and what is Austen\'s purpose? Students select their best annotated quotation and write it up as a PEE paragraph.',
      differentiation: {
        support: 'Pre-sort two quotations as models and provide sentence starters for annotations.',
        core: 'Students sort and annotate all quotations independently, writing one full PEE paragraph.',
        stretch: 'Students identify moments where Elizabeth\'s wit and prejudice overlap — where her cleverness actually reinforces her misjudgement.',
      },
      resources: ['Quotation cards (x8)', 'Sorting grid', 'PEE paragraph frame (support tier)'],
    },
    {
      title: 'Elizabeth\'s Character Arc: From Prejudice to Self-Knowledge',
      duration: '22 minutes',
      instructions:
        'Students create a character arc graph for Elizabeth, plotting her prejudice against Darcy on a scale from -5 (extreme hostility) to +5 (love and respect) at key moments: Meryton ball, Wickham\'s account, Hunsford proposal, reading the letter, visiting Pemberley, Lydia\'s elopement, and the second proposal. For each point on the graph, students write a one-sentence justification using textual evidence. Class discussion: Is Elizabeth\'s change gradual or sudden? What triggers each shift? Teacher consolidates: Austen shows that genuine change requires both external evidence (the letter, Pemberley) and internal willingness to admit error.',
      differentiation: {
        support: 'Provide the key moments pre-identified on the graph with brief plot summaries for each.',
        core: 'Students complete the graph independently with textual justifications for each plot point.',
        stretch: 'Students overlay Darcy\'s arc on the same graph and analyse how the two arcs mirror and complement each other.',
      },
      resources: ['Character arc graph template', 'Plot summary cards (support tier)', 'Coloured pens for overlay'],
    },
  ],
  plenaryActivity: {
    title: 'Debate: Is Elizabeth a Feminist?',
    duration: '7 minutes',
    instructions:
      'Quick-fire debate: "Elizabeth Bennet is a feminist character." Students give a thumbs up or down and the teacher selects three from each side to justify their position in one sentence. Teacher summarises: Austen was writing before the term "feminist" existed, but Elizabeth challenges patriarchal expectations in ways that were radical for 1813. However, she ultimately accepts the conventional ending of marriage — the question is whether she does so on her own terms.',
    differentiation: {
      support: 'Provide the definition of feminism and one argument for each side as a prompt.',
      core: 'Students justify their position with a specific textual reference.',
      stretch: 'Students consider whether the question itself is anachronistic — can we apply modern concepts to Regency fiction?',
    },
  },
  homework:
    'Answer: "How does Austen present Elizabeth as both admirable and flawed?" Write two paragraphs — one on her strengths, one on her weaknesses — with quotations.',
  worksheetQuestions: [
    {
      question: 'How does Austen use Elizabeth\'s wit to characterise her as an unconventional heroine?',
      lines: 6,
      modelAnswer:
        'Elizabeth\'s wit sets her apart from the conventional Regency heroine who was expected to be modest, agreeable, and deferential. When she tells Darcy, "I could easily forgive his pride, if he had not mortified mine," she demonstrates verbal dexterity and self-awareness, turning his rudeness into a moment of comedy. Her willingness to laugh at powerful people — including Lady Catherine de Bourgh — shows independence of mind. Austen uses Elizabeth\'s wit to make her the reader\'s guide and ally: we laugh with Elizabeth, which creates sympathy even when she is wrong. However, her wit also enables her prejudice — she is so clever at mocking Darcy that she convinces herself (and the reader) that her judgement is correct, when it is actually based on wounded pride.',
      marks: 5,
    },
    {
      question: 'In what ways does Elizabeth\'s prejudice function as a character flaw?',
      lines: 5,
      modelAnswer:
        'Elizabeth\'s prejudice against Darcy is established at the Meryton ball and reinforced by Wickham\'s false account of Darcy\'s behaviour. Her flaw is not simply disliking Darcy but believing her own judgement is infallible. She trusts Wickham because he is charming and tells her what she wants to hear, while dismissing Darcy because he wounded her pride. Austen shows that prejudice is not the opposite of intelligence — Elizabeth is the most perceptive character in the novel, yet her perception is distorted by personal bias. Her admission, "Till this moment I never knew myself," reveals that prejudice had blinded her not just to Darcy\'s character but to her own.',
      marks: 4,
    },
    {
      question: 'How does Elizabeth\'s rejection of Mr Collins\'s proposal reveal her values?',
      lines: 5,
      modelAnswer:
        'When Elizabeth refuses Mr Collins, she rejects the Regency expectation that a woman should accept any financially advantageous proposal. Collins offers security — he will inherit Longbourn — and Mrs Bennet is furious at the refusal. Elizabeth, however, values personal respect and emotional honesty over financial safety, telling Collins clearly that she cannot make him happy. This scene reveals her independence and her belief that marriage should be based on mutual esteem rather than convenience. Austen contrasts Elizabeth\'s refusal with Charlotte Lucas\'s acceptance of Collins, creating a debate about whether Elizabeth\'s idealism is admirable or reckless given the economic realities facing women.',
      marks: 4,
    },
    {
      question: 'To what extent does Elizabeth challenge Regency expectations of women?',
      lines: 6,
      modelAnswer:
        'Elizabeth challenges expectations in several ways: she walks three miles through mud to visit Jane, shocking Miss Bingley; she refuses two proposals from men who could offer financial security; she speaks her mind to Darcy and Lady Catherine; and she values reading and conversation over the "accomplishments" expected of genteel women. However, Austen does not present Elizabeth as a revolutionary — she still operates within the marriage market, her happiness is ultimately achieved through marriage to a wealthy man, and she never questions the class system itself. Austen\'s achievement is more subtle: she shows that a woman can be intelligent, independent, and outspoken while still finding fulfilment within the existing social structure, albeit on her own terms rather than society\'s.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'Avoid presenting Elizabeth as flawless — her prejudice is central to the novel\'s moral argument and must be treated as a genuine flaw.',
    'The feminist debate is deliberately provocative. Accept all well-reasoned positions; the point is critical thinking, not a "right" answer.',
    'The character arc graph is a useful revision tool — students should keep it for later essay planning.',
    'Free indirect discourse will be covered in detail in Lesson 8; mention it here but do not over-explain.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Characterisation',
    'AO3: Context — gender',
    'Evaluative writing',
    'Analytical writing (PEE)',
  ],
};

// ─── Lesson 5: Mr Darcy's Character Arc ─────────────────────────────────────

const lesson5: LessonPlan = {
  id: 'pride-prejudice-05-darcy-arc',
  title: "Mr Darcy's Character Arc",
  text: 'Pride and Prejudice',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Trace Darcy\'s character arc from pride and social arrogance to humility and moral growth.',
    'Analyse key moments that reveal Darcy\'s transformation, including his two proposals.',
    'Evaluate whether Darcy truly changes or whether Elizabeth simply learns to see him differently.',
  ],
  successCriteria: [
    'I can compare Darcy\'s first and second proposals, identifying specific changes in his language and attitude.',
    'I can explain how Austen uses Pemberley and the housekeeper\'s testimony to reframe Darcy\'s character.',
    'I can write an evaluative paragraph discussing whether Darcy\'s change is genuine or a matter of perspective.',
  ],
  keywords: [
    'character arc', 'transformation', 'hubris', 'humility',
    'proposal', 'redemption', 'Pemberley', 'social class',
  ],
  starterActivity: {
    title: 'Two Proposals, Two Darcys',
    duration: '8 minutes',
    instructions:
      'Display two short extracts side by side — a key line from Darcy\'s first proposal (Chapter 34) and a key line from his second (Chapter 58). First proposal: "In vain I have struggled. It will not do. My feelings will not be repressed. You must allow me to tell you how ardently I admire and love you." Second proposal: "You are too generous to trifle with me. If your feelings are still what they were last April, tell me so at once." Students discuss: How has Darcy\'s language changed? What does each extract reveal about his attitude? What has caused this change?',
    differentiation: {
      support: 'Highlight key words in each extract and provide guiding questions for comparison.',
      core: 'Students identify three specific differences in tone, language, and attitude.',
      stretch: 'Students analyse the power dynamics in each proposal — who is in control, and how has the balance shifted?',
    },
    resources: ['Two proposal extracts displayed side by side', 'Guiding questions (support tier)'],
  },
  mainActivities: [
    {
      title: 'Darcy\'s Arc: Key Moments Analysis',
      duration: '22 minutes',
      instructions:
        'Provide students with a timeline of Darcy\'s key moments: Meryton ball, Netherfield stay, Hunsford proposal, the letter, Pemberley encounter, intervention in Lydia\'s elopement, and second proposal. For each moment, students answer three questions: (1) How does Darcy behave? (2) What does this reveal about his character? (3) How does Austen want the reader to view him at this point? Teacher models the first entry (Meryton ball) and the fourth (the letter) to show the contrast. Students work independently on the remaining entries. Class discussion: At what point does Darcy begin to change, and what triggers it?',
      differentiation: {
        support: 'Provide brief plot summaries for each key moment and one guided example answer.',
        core: 'Students complete all entries independently with textual evidence.',
        stretch: 'Students distinguish between moments where Darcy genuinely changes and moments where the reader\'s perception of him changes — are they the same thing?',
      },
      resources: ['Timeline template', 'Plot summary cards (support tier)', 'Key quotation bank'],
    },
    {
      title: 'The Housekeeper\'s Testimony and the Pemberley Effect',
      duration: '20 minutes',
      instructions:
        'Read the extract from Chapter 43 where Mrs Reynolds (Darcy\'s housekeeper) praises her master as the best landlord and the best master. Students discuss: Why does Austen include this testimony from a servant? How reliable is Mrs Reynolds? What effect does Pemberley itself have on Elizabeth\'s feelings? Students write an analytical paragraph on how Austen uses the Pemberley visit to reshape both Elizabeth\'s and the reader\'s understanding of Darcy. Key point: Austen uses physical space (the estate, the grounds, the portrait) as an extension of character — Pemberley reveals the Darcy his tenants and servants know, not the one Elizabeth met at a public ball.',
      differentiation: {
        support: 'Provide a paragraph frame focusing on Mrs Reynolds\'s key comments with sentence starters.',
        core: 'Students write a full analytical paragraph independently, linking the Pemberley visit to Darcy\'s characterisation.',
        stretch: 'Students evaluate the problematic implication: does Elizabeth\'s change of heart owe more to Darcy\'s wealth (Pemberley) than his character? Is Austen being ironic?',
      },
      resources: ['Chapter 43 extract', 'Paragraph frame (support tier)', 'Image of a Regency estate for discussion'],
    },
  ],
  plenaryActivity: {
    title: 'Transformation or Revelation?',
    duration: '7 minutes',
    instructions:
      'Class vote on the key evaluative question: "Does Darcy genuinely change, or does Elizabeth simply learn to see him as he always was?" Students write their answer on a post-it note with one piece of evidence and stick it on the "Transformation" or "Revelation" side of the board. Teacher reads two from each side and consolidates: Austen suggests it is both — Darcy was always better than Elizabeth assumed, but Elizabeth\'s criticism also prompted real change in his behaviour.',
    differentiation: {
      support: 'Provide the two options clearly defined with a sentence starter for each.',
      core: 'Students justify their choice with a specific textual reference.',
      stretch: 'Students argue that Austen deliberately leaves this question ambiguous and explain why.',
    },
  },
  homework:
    'Compare Darcy\'s two proposals. Write two paragraphs: one analysing the first proposal and one analysing the second, focusing on how Darcy\'s language reveals his changing character.',
  worksheetQuestions: [
    {
      question: 'How does the language of Darcy\'s first proposal reveal his pride?',
      lines: 6,
      modelAnswer:
        'Darcy\'s first proposal is framed as a struggle against his own feelings: "In vain I have struggled." The word "vain" and the verb "struggled" suggest that loving Elizabeth is something he has fought against because she is socially beneath him. He spends more time explaining why he should not love her — her family\'s lack of connections, their embarrassing behaviour — than expressing genuine affection. The phrase "my feelings will not be repressed" positions his love as an involuntary weakness rather than a joyful choice. Austen uses this proposal to expose Darcy\'s pride at its most damaging: he offers Elizabeth marriage while simultaneously insulting everything about her. Elizabeth\'s furious rejection — "had you behaved in a more gentlemanlike manner" — forces Darcy to confront his arrogance for the first time.',
      marks: 5,
    },
    {
      question: 'How does Austen use the Pemberley visit to develop Darcy\'s characterisation?',
      lines: 5,
      modelAnswer:
        'At Pemberley, Austen provides counter-evidence to Elizabeth\'s (and the reader\'s) negative view of Darcy. Mrs Reynolds describes him as "the best landlord and the best master" who has never spoken a cross word to her. The estate itself — tasteful, well-maintained, beautiful without ostentation — becomes a physical metaphor for Darcy\'s true character: substantial, principled, and genuinely good beneath the proud exterior. Austen also uses Pemberley to show Darcy in his natural environment, where he is relaxed, courteous to the Gardiners, and generous — a stark contrast to his stiff behaviour in the public assemblies of Meryton. The Pemberley visit forces both Elizabeth and the reader to question whether their judgement of Darcy was based on a single context rather than his whole character.',
      marks: 5,
    },
    {
      question: 'How does Darcy\'s handling of Lydia\'s elopement demonstrate his transformation?',
      lines: 5,
      modelAnswer:
        'Darcy secretly tracks down Wickham and Lydia, pays Wickham\'s debts, and arranges their marriage — all without seeking recognition or credit. This is a dramatic contrast to the proud man who publicly insulted Elizabeth at the Meryton ball. His actions reveal selflessness, moral responsibility, and genuine love for Elizabeth: he helps the very family whose behaviour he once cited as a reason against the match. Crucially, Austen has Darcy act in private rather than publicly — he does not want Elizabeth to feel obligated. This modesty represents the completion of his transformation from a man who used his status to judge others to one who uses his resources to help them.',
      marks: 4,
    },
    {
      question: 'Evaluate: Does Darcy truly change, or does Elizabeth simply learn to see him differently?',
      lines: 6,
      modelAnswer:
        'Austen suggests both are true. On one hand, Darcy was always a good landlord, a devoted brother, and a loyal friend — qualities his servants and close acquaintances recognised from the start. Elizabeth\'s prejudice prevented her from seeing these qualities. On the other hand, Darcy himself acknowledges change: he tells Elizabeth that her rejection taught him a lesson — "By you I was properly humbled." His behaviour at Pemberley and during Lydia\'s crisis demonstrates genuine effort to overcome his pride and treat others with greater respect regardless of social standing. Austen\'s nuanced answer is that real moral growth requires both parties: Elizabeth needed to overcome her prejudice to see Darcy clearly, and Darcy needed Elizabeth\'s criticism to recognise and reform his behaviour. Neither transformation alone would have been sufficient.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'The two-proposals comparison is an excellent exam technique — it demonstrates AO2 (structure) analysis across the whole text.',
    'Handle the Pemberley discussion carefully. Students often joke that "Elizabeth falls in love with the house." Austen is aware of this reading — Elizabeth herself quips about it — so treat it as intentional ambiguity rather than a flaw.',
    'Darcy\'s intervention in Lydia\'s elopement is often overlooked; ensure students understand its significance for his character arc.',
    'The "Transformation or Revelation" debate has no single correct answer — reward well-evidenced arguments on either side.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Characterisation',
    'AO2: Structure — character arc',
    'Evaluative writing',
    'Comparative analysis',
  ],
};

// ─── Lesson 6: Marriage in Regency England — Social Commentary ──────────────

const lesson6: LessonPlan = {
  id: 'pride-prejudice-06-marriage-social-commentary',
  title: 'Marriage in Regency England: Social Commentary',
  text: 'Pride and Prejudice',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse the different models of marriage presented in the novel and what each reveals about Regency values.',
    'Explore how Austen uses contrasting marriages to develop her social commentary.',
    'Evaluate which marriage Austen presents as the ideal and why.',
  ],
  successCriteria: [
    'I can compare at least three marriages or relationships in the novel and explain what each represents.',
    'I can explain how Austen uses marriage as a vehicle for social criticism.',
    'I can evaluate Austen\'s presentation of the "ideal" marriage using textual evidence.',
  ],
  keywords: [
    'social commentary', 'institution', 'economic marriage', 'companionate marriage',
    'patriarchy', 'dowry', 'mercenary', 'prudent',
  ],
  starterActivity: {
    title: 'Why Do People Marry?',
    duration: '7 minutes',
    instructions:
      'Students rank six reasons for marriage from most to least important: love, financial security, social status, family pressure, companionship, and physical attraction. Compare modern rankings with what students think Regency priorities would have been. Key point: in Regency England, marriage was primarily an economic and social arrangement. Love was desirable but not essential. Austen\'s radicalism was arguing that the best marriages combine love WITH financial prudence.',
    differentiation: {
      support: 'Provide definitions of each reason and a simple ranking grid.',
      core: 'Students rank independently and justify their top and bottom choices.',
      stretch: 'Students predict which characters in the novel embody each reason for marrying.',
    },
    resources: ['Ranking cards or grid', 'Definitions card (support tier)'],
  },
  mainActivities: [
    {
      title: 'Marriage Gallery: Five Relationships Under the Microscope',
      duration: '25 minutes',
      instructions:
        'Set up five stations, each representing a marriage or relationship: (1) Mr and Mrs Bennet — a mismatch of intellect, (2) Charlotte and Collins — pragmatic acceptance, (3) Lydia and Wickham — passion without sense, (4) Jane and Bingley — mutual affection, (5) Elizabeth and Darcy — the ideal union. Each station has a key extract and three analysis questions. Students rotate in groups, spending 4-5 minutes at each station, completing an analysis grid. After the carousel, teacher leads whole-class ranking: Which marriage is the most successful? Which does Austen criticise most? Key teaching point: Austen does not simply celebrate romantic love — she advocates for marriages that combine genuine affection with mutual respect and economic security.',
      differentiation: {
        support: 'Provide a simplified analysis grid with quotations already identified and one model answer completed.',
        core: 'Students complete the analysis grid independently with textual evidence for each couple.',
        stretch: 'Students identify what Austen is criticising through each flawed marriage and link to her broader social commentary.',
      },
      resources: ['Station cards with extracts (x5)', 'Analysis grid worksheet', 'Timer for rotations'],
    },
    {
      title: 'Charlotte Lucas: The Case for Pragmatism',
      duration: '18 minutes',
      instructions:
        'Focus on Charlotte\'s decision to marry Collins. Read the extract from Chapter 22 where Charlotte explains her reasoning: "I am not romantic, you know; I never was. I ask only a comfortable home." Students debate in pairs: Is Charlotte\'s decision sensible or sad? Is Elizabeth right to be "shocked"? Teacher introduces the contextual point: Charlotte is twenty-seven, plain, and without a fortune — by Regency standards, she is almost past marriageable age. Students write a paragraph evaluating Charlotte\'s choice, considering both Austen\'s presentation and the social context.',
      differentiation: {
        support: 'Provide a for/against table on Charlotte\'s decision with some arguments pre-filled.',
        core: 'Students write an evaluative paragraph independently, considering multiple perspectives.',
        stretch: 'Students consider whether Austen sympathises with Charlotte or judges her, using textual evidence to support their reading.',
      },
      resources: ['Chapter 22 extract', 'For/against table (support tier)', 'Contextual information on women\'s options'],
    },
  ],
  plenaryActivity: {
    title: 'Austen\'s Marriage Manifesto',
    duration: '7 minutes',
    instructions:
      'Students complete the sentence: "Through Pride and Prejudice, Austen argues that the best marriage is one that..." Share three responses under the visualiser and discuss which best captures Austen\'s authorial intention. Teacher consolidation: Austen argues that a good marriage requires mutual respect, intellectual compatibility, genuine affection, AND sufficient financial security — no single factor is enough on its own.',
    differentiation: {
      support: 'Provide a sentence starter: "Austen argues that the best marriage combines..."',
      core: 'Students complete the sentence with a specific reference to one couple in the novel.',
      stretch: 'Students explain why Austen presents this argument through multiple contrasting marriages rather than simply telling the reader.',
    },
  },
  homework:
    'Write a comparative paragraph: "How does Austen use the marriages of Charlotte and Collins and Elizabeth and Darcy to present contrasting views of marriage?"',
  worksheetQuestions: [
    {
      question: 'Compare the marriages of Mr and Mrs Bennet and Elizabeth and Darcy. What does each reveal about Austen\'s views on marriage?',
      lines: 6,
      modelAnswer:
        'The Bennets\' marriage is a cautionary tale: Mr Bennet married for beauty and charm but found that physical attraction without intellectual compatibility leads to contempt and withdrawal. He retreats to his library, and Mrs Bennet\'s "nerves" go unmanaged. Elizabeth and Darcy, by contrast, are intellectual equals who challenge and improve each other. Their marriage combines the emotional connection the Bennets lacked with the mutual respect that sustains long-term partnership. Austen uses the Bennets\' marriage as a warning — this is what happens when you marry for superficial reasons — and Elizabeth and Darcy as the ideal: a marriage of equals built on understanding earned through honest self-reflection.',
      marks: 5,
    },
    {
      question: 'Why does Charlotte Lucas marry Mr Collins? How does Austen present her decision?',
      lines: 5,
      modelAnswer:
        'Charlotte marries Collins for financial security and social respectability, openly stating that she is "not romantic" and asks only for "a comfortable home." Austen presents her decision with sympathy and sadness: Charlotte is intelligent enough to know that Collins is foolish but practical enough to recognise that her options are limited. At twenty-seven, without beauty or fortune, she faces a future of dependence on her family. Austen does not mock Charlotte; instead, she uses the contrast between Charlotte\'s pragmatism and Elizabeth\'s idealism to highlight the impossible choices facing women in a system where marriage was the only route to independence. Charlotte\'s marriage is comfortable but loveless — a compromise that Austen acknowledges as rational even while suggesting it is a form of self-sacrifice.',
      marks: 5,
    },
    {
      question: 'What does Lydia and Wickham\'s relationship represent in the novel\'s commentary on marriage?',
      lines: 5,
      modelAnswer:
        'Lydia and Wickham represent the worst possible marriage: one based entirely on physical attraction and impulsive passion without respect, financial planning, or moral compatibility. Lydia is "untamed, unabashed, wild, noisy, and fearless" — she elopes without considering the consequences for her family\'s reputation. Wickham marries only because Darcy pays him to do so. Austen uses their marriage as a dire warning about passion without judgement: the narrator hints that Wickham\'s affection faded quickly and that Lydia was frequently begging her sisters for money. This relationship serves as the negative extreme against which Elizabeth and Darcy\'s thoughtful, earned love appears all the more valuable.',
      marks: 4,
    },
    {
      question: 'How does Austen use the variety of marriages in the novel to make her social commentary?',
      lines: 6,
      modelAnswer:
        'Austen presents marriage as a spectrum rather than a single institution. The Bennets show the failure of marrying for attraction alone; Charlotte and Collins demonstrate the emptiness of purely pragmatic marriage; Lydia and Wickham illustrate the danger of passion without sense; Jane and Bingley represent sweet but potentially naive compatibility; and Elizabeth and Darcy embody the ideal — a union of intellectual equals who have earned each other\'s respect through honest self-examination. By presenting this spectrum, Austen argues that marriage is the most important decision a woman can make in a society that offers her few other choices, and that the best marriages balance head and heart. Her social commentary is not anti-marriage but anti-system: she criticises a society that reduces women to commodities on the marriage market while celebrating the possibility of genuine partnership within that flawed system.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'The marriage gallery carousel is the core activity; ensure station cards include accessible extracts and clear questions.',
    'Charlotte Lucas is a key figure for AO3 (context) responses — her situation illustrates the economic pressures on women better than almost any other character.',
    'Avoid presenting Elizabeth and Darcy\'s marriage as purely romantic; Austen emphasises its practicality (Darcy\'s wealth, Elizabeth\'s intelligence) alongside love.',
    'The homework comparing Charlotte/Collins with Elizabeth/Darcy is excellent practice for comparative essay questions.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Characterisation',
    'AO3: Context — marriage and gender',
    'Comparative analysis',
    'Evaluative writing',
  ],
};

// ─── Lesson 7: The Role of Women and Class ──────────────────────────────────

const lesson7: LessonPlan = {
  id: 'pride-prejudice-07-women-and-class',
  title: 'The Role of Women and Class',
  text: 'Pride and Prejudice',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Austen presents the limited options available to women in Regency England.',
    'Explore the class hierarchy in the novel and how it shapes characters\' behaviour and judgements.',
    'Evaluate whether Austen challenges or reinforces the class system through the novel\'s resolution.',
  ],
  successCriteria: [
    'I can explain how at least two female characters illustrate the constraints facing women in Regency society.',
    'I can analyse how class prejudice affects the behaviour of characters including Darcy, Lady Catherine, and Miss Bingley.',
    'I can evaluate whether the novel\'s ending reinforces or subverts the class system.',
  ],
  keywords: [
    'patriarchy', 'class hierarchy', 'gentry', 'landed wealth',
    'new money', 'social mobility', 'inheritance', 'propriety',
  ],
  starterActivity: {
    title: 'The Social Ladder of Pride and Prejudice',
    duration: '8 minutes',
    instructions:
      'Display a blank social hierarchy ladder. Students work in pairs to place key characters on the ladder: Lady Catherine de Bourgh, Mr Darcy, Mr Bingley, the Bennet family, Mr Collins, the Gardiners, and Wickham. Discuss: Where does the Bennet family sit and why? Why are the Gardiners (who are "in trade") looked down upon? Why does Darcy\'s initial proposal insult Elizabeth? Key point: the novel\'s central conflict is driven by class — Darcy\'s pride is rooted in class superiority, and Elizabeth\'s prejudice is partly a response to class snobbery.',
    differentiation: {
      support: 'Provide character cards with brief descriptions of each character\'s social position.',
      core: 'Students place characters and explain the criteria they used (birth, wealth, connections, behaviour).',
      stretch: 'Students identify contradictions in the hierarchy — e.g., the Gardiners are more refined than Mrs Bennet despite being "in trade."',
    },
    resources: ['Social ladder diagram', 'Character cards (support tier)', 'Mini-whiteboards'],
  },
  mainActivities: [
    {
      title: 'Women\'s Lives in Regency England: Case Studies',
      duration: '20 minutes',
      instructions:
        'Students study four case studies from the novel representing different female experiences: (1) Elizabeth — refuses proposals, walks independently, speaks her mind; (2) Charlotte — marries without love for security; (3) Lydia — pursues desire without caution, risking ruin; (4) Georgiana — nearly exploited by Wickham, protected by male relatives. For each case study, students answer: What choices does this woman have? What constraints does she face? How does Austen present her situation — sympathetically, critically, or both? Class discussion: What do these four women collectively reveal about Austen\'s view of women\'s position in society?',
      differentiation: {
        support: 'Provide plot summaries for each case study and a structured response frame.',
        core: 'Students complete all four case studies independently with textual evidence.',
        stretch: 'Students compare Austen\'s treatment of women with Mary Wollstonecraft\'s arguments in "A Vindication of the Rights of Woman" (1792), published 21 years before Pride and Prejudice.',
      },
      resources: ['Case study cards (x4)', 'Response frame (support tier)', 'Wollstonecraft extract (stretch tier)'],
    },
    {
      title: 'Lady Catherine vs Elizabeth: Class Confrontation',
      duration: '22 minutes',
      instructions:
        'Read the extract from Chapter 56 where Lady Catherine visits Elizabeth to demand she refuse Darcy. Students annotate the extract for power dynamics, focusing on: Lady Catherine\'s language of authority and social superiority ("honour," "pollution," "arts and allurements") and Elizabeth\'s defiant responses ("He is a gentleman; I am a gentleman\'s daughter; so far we are equal"). Students write an analytical paragraph on how Austen uses this confrontation to critique class prejudice. Key teaching point: this scene dramatises the novel\'s central argument — that moral character matters more than social rank.',
      differentiation: {
        support: 'Pre-annotate Lady Catherine\'s most significant lines and provide a paragraph frame.',
        core: 'Students annotate independently and write a full analytical paragraph with embedded quotations.',
        stretch: 'Students evaluate the irony that Lady Catherine\'s intervention actually brings Elizabeth and Darcy together — what is Austen saying about the self-defeating nature of class snobbery?',
      },
      resources: ['Chapter 56 extract', 'Annotation guide', 'Paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Does the Ending Reinforce or Challenge the Class System?',
    duration: '7 minutes',
    instructions:
      'Quick debate: Elizabeth marries one of the richest men in England. Does this ending challenge the class system (a woman of lower status wins on merit) or reinforce it (the heroine\'s reward is wealth and status)? Students write a one-sentence answer on a post-it note with evidence. Teacher consolidation: Austen\'s ending is deliberately ambiguous — Elizabeth enters the upper class, but she does so on her own terms, having refused to be bullied by Lady Catherine and having been chosen by Darcy for her character rather than her connections.',
    differentiation: {
      support: 'Provide the two options clearly stated with one argument for each.',
      core: 'Students justify their position with a specific reference to the text.',
      stretch: 'Students consider whether Austen could have written a truly subversive ending and why she chose not to.',
    },
  },
  homework:
    'Answer: "How does Austen use the confrontation between Elizabeth and Lady Catherine to challenge class prejudice?" Write one analytical paragraph with embedded quotations.',
  worksheetQuestions: [
    {
      question: 'How does Austen use Lady Catherine de Bourgh to satirise class arrogance?',
      lines: 5,
      modelAnswer:
        'Lady Catherine embodies the worst aspects of the class system: she believes her wealth and title entitle her to dictate other people\'s lives. She demands that Elizabeth refuse Darcy because the match would be a "disgrace" and a "pollution" of his noble line. Austen uses Lady Catherine as a satirical figure — her pomposity, rudeness, and absolute certainty in her own superiority are presented as ridiculous rather than intimidating. Elizabeth\'s calm defiance — "He is a gentleman; I am a gentleman\'s daughter; so far we are equal" — exposes the hollowness of Lady Catherine\'s claims. Austen suggests that true gentility lies in behaviour and character, not in birth or title.',
      marks: 4,
    },
    {
      question: 'How does the Gardiners\' characterisation challenge class assumptions in the novel?',
      lines: 5,
      modelAnswer:
        'The Gardiners, Mrs Bennet\'s brother and his wife, are "in trade" — they earn their living through business rather than inherited land. This makes them socially inferior in Regency terms, and Darcy initially considers the connection embarrassing. However, Austen presents the Gardiners as the most sensible, well-mannered, and morally sound adults in the novel. They are warm, intelligent, and tasteful — more refined than Lady Catherine despite their lower social status. By making the Gardiners admirable and having Darcy come to appreciate them, Austen challenges the assumption that birth determines character. The Gardiners represent Austen\'s argument that moral worth and genuine good manners are more valuable than inherited rank.',
      marks: 4,
    },
    {
      question: 'In what ways does Austen show the limited options available to women in Regency society?',
      lines: 6,
      modelAnswer:
        'Austen shows that women in Regency society had three main options: marry well, marry poorly, or remain single and dependent on relatives. Charlotte Lucas chooses pragmatic marriage to Collins because spinsterhood means poverty and dependence. Elizabeth risks social ruin by refusing Collins and initially rejecting Darcy. Lydia\'s elopement threatens to destroy the entire family\'s reputation, showing how a woman\'s "virtue" was a collective family asset. Even Georgiana Darcy, who is wealthy, is vulnerable to exploitation by Wickham. The entailment of Longbourn — which excludes the Bennet daughters from inheriting — crystallises the fundamental injustice: women\'s financial security depends entirely on the men in their lives. Austen does not explicitly argue for reform, but by showing the consequences of this system through multiple characters, she makes the case implicitly.',
      marks: 5,
    },
    {
      question: 'Does the novel\'s ending reinforce or challenge the class system? Explain your view.',
      lines: 6,
      modelAnswer:
        'The ending can be read both ways. On one hand, Elizabeth\'s marriage to Darcy is a class transgression — she is a gentleman\'s daughter without significant wealth or connections, and she marries one of the richest men in the country against Lady Catherine\'s opposition. This suggests that merit and character can overcome class barriers. On the other hand, Elizabeth is still a gentleman\'s daughter, not a servant or tradesperson — the class gap she bridges is relatively small. Moreover, her "reward" is to enter the very class system the novel critiques, gaining wealth, status, and Pemberley. Austen\'s ending is best understood as reformist rather than revolutionary: she does not reject the class system but argues that it should value character alongside birth. The truly radical element is that Elizabeth refuses to be grateful — she enters Darcy\'s world as an equal, not a supplicant.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'The social ladder activity can be extended by asking students to consider where Austen herself would sit — as the daughter of a clergyman, she occupied a similar position to the Bennets.',
    'The Lady Catherine confrontation is one of the most quotable scenes for exams; ensure students can analyse at least two quotations from it.',
    'Be clear that "trade" vs "land" is the key class distinction in the novel — the Bingleys\' wealth comes from trade, which is why they are not quite on Darcy\'s level.',
    'The stretch activity linking to Wollstonecraft is optional but excellent preparation for A-level study.',
  ],
  targetedSkills: [
    'AO1: Textual reference',
    'AO2: Characterisation',
    'AO3: Context — class and gender',
    'Evaluative writing',
    'Critical analysis',
  ],
};

// ─── Lesson 8: Austen's Use of Irony and Free Indirect Discourse ────────────

const lesson8: LessonPlan = {
  id: 'pride-prejudice-08-irony-and-narrative-voice',
  title: "Austen's Use of Irony and Free Indirect Discourse",
  text: 'Pride and Prejudice',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Austen uses different types of irony (verbal, dramatic, and situational) to create meaning.',
    'Understand and identify free indirect discourse as Austen\'s signature narrative technique.',
    'Explore how the narrative voice shapes the reader\'s sympathies and judgements.',
  ],
  successCriteria: [
    'I can identify and explain at least one example of verbal, dramatic, and situational irony in the novel.',
    'I can define free indirect discourse and identify at least two examples from the text.',
    'I can analyse how Austen\'s narrative voice guides the reader\'s interpretation of characters and events.',
  ],
  keywords: [
    'verbal irony', 'dramatic irony', 'situational irony', 'free indirect discourse',
    'narrative voice', 'third person limited', 'tone', 'satire',
  ],
  starterActivity: {
    title: 'Three Types of Irony',
    duration: '8 minutes',
    instructions:
      'Teach the three types of irony using everyday examples: Verbal (saying "What lovely weather" during a storm), Dramatic (the audience knows the murderer is hiding behind the door but the character does not), Situational (a fire station burning down). Then display three quotations or scenarios from Pride and Prejudice and ask students to identify the type of irony in each: (1) the opening sentence — verbal, (2) the reader knowing Wickham is dishonest while Elizabeth trusts him — dramatic, (3) Lady Catherine\'s visit causing the very engagement she tried to prevent — situational.',
    differentiation: {
      support: 'Provide a definitions card for each type of irony with the everyday example included.',
      core: 'Students identify the type and explain why each example fits.',
      stretch: 'Students find an additional example of each type from their knowledge of the novel.',
    },
    resources: ['Irony definitions display', 'Three example quotations/scenarios', 'Definitions card (support tier)'],
  },
  mainActivities: [
    {
      title: 'Free Indirect Discourse: Hearing Elizabeth\'s Voice Through the Narrator',
      duration: '22 minutes',
      instructions:
        'Define free indirect discourse: a technique where the narrator\'s voice blends with a character\'s thoughts, so we hear what a character is thinking in the narrator\'s third-person voice. Provide three short extracts: one in direct speech (Elizabeth speaking), one in indirect speech (the narrator reporting Elizabeth\'s thoughts), and one in free indirect discourse (the narrator ventriloquising Elizabeth\'s perspective). Students compare all three and identify the differences in effect. Then provide four passages from the novel and ask students to identify which use free indirect discourse and how they can tell. Key teaching point: FID is Austen\'s most important technique — it allows her to show Elizabeth\'s perspective while maintaining the ironic distance to hint that Elizabeth might be wrong.',
      differentiation: {
        support: 'Provide a clear comparison table with the three techniques defined and colour-coded examples.',
        core: 'Students identify FID in all four passages and explain its effect on the reader.',
        stretch: 'Students explain why FID is particularly suited to a novel about prejudice — it allows Austen to show a biased perspective without endorsing it.',
      },
      resources: ['Comparison extracts (direct/indirect/FID)', 'Four passage extracts', 'Technique comparison table (support tier)'],
    },
    {
      title: 'Irony Hunt: Analysing Austen\'s Satirical Voice',
      duration: '20 minutes',
      instructions:
        'Provide students with six extracts from across the novel containing irony (including descriptions of Mr Collins, Mrs Bennet, Lady Catherine, and the narrator\'s commentary on social events). Students work in pairs to: (1) identify the type of irony, (2) explain what Austen is really saying versus what the words literally mean, and (3) analyse the effect on the reader. Pairs then select their best example and write a full analytical paragraph focusing on how Austen uses irony to create social commentary. Share two examples under the visualiser. Teacher consolidation: Austen\'s irony is not just humour — it is her primary tool for social criticism, allowing her to expose foolishness and injustice with wit rather than anger.',
      differentiation: {
        support: 'Reduce to four extracts with the type of irony pre-identified; students focus on explaining the effect.',
        core: 'Students analyse all six extracts and write one full analytical paragraph.',
        stretch: 'Students compare Austen\'s ironic style with a modern satirist and evaluate which is more effective at social criticism.',
      },
      resources: ['Six irony extracts', 'Analysis grid', 'Paragraph frame (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Rewrite Without Irony',
    duration: '7 minutes',
    instructions:
      'Display a famously ironic passage from the novel (e.g., the description of Mr Collins\'s proposal or the opening sentence). Students rewrite it without any irony — stating literally what Austen means. Compare both versions. Key learning: the ironic version is more memorable, more entertaining, and actually more persuasive because it invites the reader to discover the meaning rather than being told. This is why Austen\'s style endures.',
    differentiation: {
      support: 'Work on the opening sentence as a class before students attempt their own rewrite.',
      core: 'Students rewrite independently and compare both versions in a sentence of evaluation.',
      stretch: 'Students explain why irony is a more effective form of social criticism than direct statement.',
    },
  },
  homework:
    'Find two examples of irony in Pride and Prejudice that have not been discussed in class. For each, identify the type, explain what Austen really means, and analyse the effect.',
  worksheetQuestions: [
    {
      question: 'What is free indirect discourse and why is it important to Austen\'s narrative technique?',
      lines: 6,
      modelAnswer:
        'Free indirect discourse (FID) is a narrative technique where the narrator\'s third-person voice blends with a character\'s thoughts and feelings, without using speech marks or reporting verbs like "she thought." For example, when the narrator describes Darcy\'s first proposal through Elizabeth\'s perspective, we see his words filtered through her anger and prejudice — the narrative voice adopts her outrage without explicitly stating "Elizabeth thought." FID is central to Austen\'s technique because it allows her to show Elizabeth\'s perspective intimately while maintaining ironic distance. The reader experiences events through Elizabeth\'s eyes but can also detect moments where her judgement is flawed. This is essential for a novel about prejudice: FID shows how reasonable prejudice can feel from the inside while hinting that it is still wrong.',
      marks: 5,
    },
    {
      question: 'Analyse how Austen uses verbal irony in the opening sentence of the novel.',
      lines: 5,
      modelAnswer:
        'The opening sentence — "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife" — is a masterclass in verbal irony. The phrase "universally acknowledged" presents the statement as objective fact, but Austen means the opposite: it is a subjective belief held by marriage-obsessed mothers like Mrs Bennet. The word "must" implies inevitability, but Austen knows that rich single men are in fact pursued by families, not pursuing wives. By framing a self-serving social assumption as universal truth, Austen satirises the entire marriage market in a single sentence. The irony establishes the novel\'s tone: witty, critical, and alert to the gap between social performance and reality.',
      marks: 4,
    },
    {
      question: 'Identify one example of dramatic irony in the novel and explain its effect.',
      lines: 5,
      modelAnswer:
        'A powerful example of dramatic irony occurs when Elizabeth trusts Wickham\'s account of Darcy\'s cruelty. The reader gradually gathers evidence that Wickham is unreliable — he tells his "private" story to a virtual stranger, his account is suspiciously one-sided, and he conveniently attaches himself to a new heiress when Miss King inherits money. Elizabeth, however, blinded by her prejudice against Darcy, accepts Wickham\'s story completely. The dramatic irony lies in the reader seeing what Elizabeth cannot: that her prejudice has made her gullible. This technique deepens the novel\'s theme by demonstrating that intelligence is no protection against bias — even the wittiest character can be deceived when she wants to believe something.',
      marks: 4,
    },
    {
      question: 'How does Austen use irony to satirise Mr Collins?',
      lines: 5,
      modelAnswer:
        'Austen satirises Mr Collins through verbal irony in his speech and situational irony in his behaviour. His proposal to Elizabeth is a masterpiece of unintentional comedy: he lists his reasons for marrying as though presenting a business case, mentioning Lady Catherine\'s advice before his own feelings, and assures Elizabeth that he will never "reproach" her for her small dowry — a "compliment" that is actually an insult. The situational irony lies in Collins\'s complete inability to recognise Elizabeth\'s refusal: he insists that ladies always refuse at first, demonstrating a lack of self-awareness so total that it becomes comic. Austen uses Collins to satirise social conformity and obsequiousness: he is a man who has so fully absorbed society\'s rules that he cannot recognise genuine human emotion.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'Free indirect discourse is a challenging concept. Use colour-coding (e.g., narrator\'s words in blue, character\'s perspective in red) to make it visual.',
    'This lesson is technique-heavy; balance explanation with practice to avoid cognitive overload.',
    'Emphasise that irony is an AO2 (writer\'s methods) focus — students who can analyse Austen\'s irony will access higher mark bands.',
    'The "Rewrite Without Irony" plenary is deceptively powerful — it helps students understand irony by experiencing its absence.',
  ],
  targetedSkills: [
    'AO2: Language analysis — irony',
    'AO2: Narrative technique — FID',
    'AO2: Writer\'s methods',
    'Technical vocabulary',
    'Analytical writing',
  ],
};

// ─── Lesson 9: Pemberley and Transformation ─────────────────────────────────

const lesson9: LessonPlan = {
  id: 'pride-prejudice-09-pemberley-transformation',
  title: 'Pemberley and Transformation',
  text: 'Pride and Prejudice',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Analyse how Austen uses the setting of Pemberley as a symbol of Darcy\'s true character.',
    'Explore the significance of the Pemberley visit as a structural turning point in Elizabeth\'s transformation.',
    'Evaluate how Austen uses physical space and environment to develop theme and character.',
  ],
  successCriteria: [
    'I can explain how the description of Pemberley reflects Darcy\'s character.',
    'I can analyse the structural importance of the Pemberley visit in Elizabeth\'s changing view of Darcy.',
    'I can write an analytical paragraph exploring Austen\'s use of setting as a method of characterisation.',
  ],
  keywords: [
    'setting', 'symbolism', 'pathetic fallacy', 'estate',
    'taste', 'transformation', 'interiority', 'landscape',
  ],
  starterActivity: {
    title: 'What Does a Home Reveal?',
    duration: '7 minutes',
    instructions:
      'Display images of three very different homes (e.g., a cluttered flat, a minimalist apartment, a grand country house). Students discuss: What can you infer about the people who live in each? In literature, settings are never neutral — they reveal character. Austen uses Pemberley to reveal who Darcy really is, away from the social pressures of balls and assemblies. Preview question: What will Elizabeth discover when she visits Darcy\'s home?',
    differentiation: {
      support: 'Provide adjectives for describing each home and a simple inference frame.',
      core: 'Students make three inferences per image and justify each one.',
      stretch: 'Students consider the literary term "objective correlative" — when an external object reflects an internal state.',
    },
    resources: ['Three home images', 'Inference frame (support tier)'],
  },
  mainActivities: [
    {
      title: 'Close Reading: Arriving at Pemberley (Chapter 43)',
      duration: '25 minutes',
      instructions:
        'Read the extract from Chapter 43 describing Elizabeth\'s first view of Pemberley: "It was a large, handsome stone building, standing well on rising ground... Elizabeth was delighted. She had never seen a place for which nature had done more, or where natural beauty had been so little counteracted by an awkward taste." Students annotate the extract for: (1) what the description reveals about Darcy (taste, substance, naturalness vs ostentation), (2) how Austen uses the landscape to mirror Elizabeth\'s emotional shift, and (3) the significance of words like "natural," "taste," and "handsome." Teacher models annotation of the first sentence, then students work independently. Key insight: Pemberley is described in the same terms we might use for a good person — it is handsome, natural, and tasteful, without pretension. Students write a paragraph analysing how Austen uses the Pemberley description to reshape the reader\'s understanding of Darcy.',
      differentiation: {
        support: 'Provide guided annotation questions beside each sentence of the extract and a paragraph frame.',
        core: 'Students annotate independently and write a full analytical paragraph.',
        stretch: 'Students compare the description of Pemberley with the description of Rosings (Lady Catherine\'s estate) and analyse what the contrast reveals about each owner.',
      },
      resources: ['Chapter 43 extract', 'Annotation guide', 'Paragraph frame (support tier)'],
    },
    {
      title: 'Elizabeth\'s Internal Transformation',
      duration: '18 minutes',
      instructions:
        'Provide students with three short extracts showing Elizabeth\'s thoughts at different moments: (1) after the Meryton ball — hostility, (2) reading the letter — shock and shame, (3) at Pemberley — admiration, regret, and tentative openness. Students track the change in Elizabeth\'s internal language: what adjectives and verbs does Austen associate with her thoughts at each stage? Students create a "transformation map" showing the triggers, evidence, and effects of Elizabeth\'s change. Class discussion on the key question: Is Elizabeth\'s change at Pemberley about Darcy\'s estate, his character, or both?',
      differentiation: {
        support: 'Provide the three extracts with key words highlighted and a partially completed transformation map.',
        core: 'Students complete the transformation map independently with textual evidence.',
        stretch: 'Students evaluate Elizabeth\'s own self-mocking comment — "of this place I might have been mistress" — is she genuinely mercenary, or is Austen using humour to defuse the reader\'s suspicion?',
      },
      resources: ['Three extracts', 'Transformation map template', 'Highlighted extracts (support tier)'],
    },
  ],
  plenaryActivity: {
    title: 'Setting as Character',
    duration: '7 minutes',
    instructions:
      'Students complete the sentence: "Austen uses Pemberley to show that Darcy is..." Share five responses. Teacher consolidation: Pemberley works as an "objective correlative" — it externalises Darcy\'s inner qualities. The estate is substantial but not showy, well-maintained but natural, grand but welcoming. These are the qualities Elizabeth comes to recognise in Darcy himself. Austen uses setting not as mere background but as a form of characterisation.',
    differentiation: {
      support: 'Provide a word bank of adjectives describing both Pemberley and Darcy.',
      core: 'Students complete the sentence with a textual reference to the Pemberley description.',
      stretch: 'Students explain why Austen chose to reveal Darcy\'s character through his home rather than through further dialogue or action.',
    },
  },
  homework:
    'Write a paragraph answering: "How does Austen use the setting of Pemberley to develop the reader\'s understanding of Darcy\'s character?" Include at least two quotations from Chapter 43.',
  worksheetQuestions: [
    {
      question: 'How does Austen\'s description of Pemberley function as characterisation of Darcy?',
      lines: 6,
      modelAnswer:
        'Austen describes Pemberley as "a large, handsome stone building" where "natural beauty had been so little counteracted by an awkward taste." Every detail mirrors Darcy\'s true character: the estate is substantial and impressive (reflecting his wealth and status) but natural rather than ostentatious (reflecting his genuine good taste, as opposed to the showy vulgarity of Lady Catherine\'s Rosings). The word "handsome" echoes the physical descriptions of Darcy himself, creating a parallel between man and estate. The grounds are beautiful but not artificially manicured, suggesting that Darcy\'s best qualities are natural and unforced — they simply need to be seen in the right context. Austen uses Pemberley to argue that first impressions formed in artificial social settings (balls, assemblies) are unreliable; true character is revealed in a person\'s natural environment.',
      marks: 5,
    },
    {
      question: 'Why is the Pemberley visit a structural turning point in the novel?',
      lines: 5,
      modelAnswer:
        'The Pemberley visit is the moment where Elizabeth\'s prejudice fully begins to dissolve. Until this point, she has intellectually accepted (through the letter) that she was wrong about Darcy, but she has not emotionally opened herself to a new understanding. At Pemberley, she sees Darcy in his own world — praised by his servants, courteous to her uncle and aunt, relaxed and generous — and begins to feel what she previously only knew. Structurally, the visit initiates the novel\'s resolution: from this point, Elizabeth is open to Darcy, and when he acts selflessly during Lydia\'s crisis, she is ready to recognise his goodness. The Pemberley visit therefore bridges the novel\'s two halves — the half governed by misunderstanding and the half governed by growing understanding.',
      marks: 4,
    },
    {
      question: 'Compare Austen\'s description of Pemberley with what we know of Rosings Park. What does the contrast reveal?',
      lines: 5,
      modelAnswer:
        'Rosings Park, Lady Catherine\'s estate, is presented through Mr Collins\'s obsequious admiration — he catalogues its grandeur, its cost, and its impressive features. The emphasis is on expense and display, mirroring Lady Catherine\'s character: ostentatious, self-important, and obsessed with rank. Pemberley, by contrast, is described in terms of taste, naturalness, and harmony with its landscape. Where Rosings imposes itself on the viewer, Pemberley invites admiration through its restraint. This contrast mirrors the difference between Lady Catherine and Darcy: she demands respect through title and wealth; he earns it through character and genuine good taste. Austen uses the two estates to make a moral argument: true worth is understated, while hollow authority is loud.',
      marks: 4,
    },
    {
      question: 'How does Elizabeth\'s response to Pemberley reveal her changing feelings about Darcy?',
      lines: 5,
      modelAnswer:
        'Elizabeth\'s response to Pemberley is marked by "delight" and admiration — she has "never seen a place for which nature had done more." Her response is significant because it is aesthetic and moral rather than purely mercenary: she admires the taste, not just the wealth. However, Austen includes Elizabeth\'s self-aware reflection — "of this place I might have been mistress" — which acknowledges the material dimension of her feelings. This honesty is characteristic of both Elizabeth and Austen: neither pretends that wealth is irrelevant. The key shift is that Elizabeth now associates Pemberley\'s qualities with Darcy\'s character rather than dismissing him as merely proud. Her delight in the estate becomes, implicitly, a delight in the man who shaped it — the beginning of love built on genuine understanding rather than first impressions.',
      marks: 5,
    },
  ],
  teacherNotes: [
    'This lesson focuses heavily on AO2 (writer\'s methods) — specifically the use of setting. Ensure students can articulate how setting functions as characterisation.',
    'The Pemberley/Rosings comparison is excellent exam material and can be used for structural analysis (AO2) in essay responses.',
    'Elizabeth\'s "of this place I might have been mistress" line is often quoted out of context to accuse Elizabeth of materialism. Ensure students understand Austen\'s ironic self-awareness here.',
    'If time allows, showing images of real Regency estates (Chatsworth, which inspired Pemberley) can help students visualise the setting.',
  ],
  targetedSkills: [
    'AO2: Writer\'s methods — setting',
    'AO2: Language analysis',
    'AO2: Structure — turning points',
    'Symbolism and inference',
    'Analytical writing',
  ],
};

// ─── Lesson 10: Exam Practice — Comparative Essay ───────────────────────────

const lesson10: LessonPlan = {
  id: 'pride-prejudice-10-exam-practice',
  title: 'Exam Practice: Comparative Essay',
  text: 'Pride and Prejudice',
  board: 'AQA',
  yearGroup: '10-11',
  duration: '60 minutes',
  objectives: [
    'Apply knowledge of Pride and Prejudice to a timed essay question under exam conditions.',
    'Practise structuring a comparative or thematic essay with integrated textual references.',
    'Develop the ability to write analytically about Austen\'s methods (AO2) and context (AO3) under time pressure.',
  ],
  successCriteria: [
    'I can plan a structured essay response in five minutes or fewer.',
    'I can write at least three analytical paragraphs with embedded quotations in timed conditions.',
    'I can integrate references to Austen\'s methods (irony, FID, setting, characterisation) and Regency context into my analysis.',
  ],
  keywords: [
    'essay structure', 'thesis statement', 'embedded quotation', 'analytical paragraph',
    'AO1', 'AO2', 'AO3', 'comparative connectives',
  ],
  starterActivity: {
    title: 'Essay Planning Under Pressure',
    duration: '10 minutes',
    instructions:
      'Display the essay question: "How does Austen use the characters of Elizabeth and Darcy to explore the themes of pride and prejudice?" Students have exactly five minutes to create a bullet-point essay plan covering: a thesis statement (their overall argument), three or four paragraph topics, and at least one quotation per paragraph. After five minutes, display a model plan on the board. Students compare their plan with the model, identifying any gaps. Teacher emphasises: a good plan is the difference between a structured essay and a rambling one. Spend the remaining time ensuring every student has a workable plan before writing begins.',
    differentiation: {
      support: 'Provide a planning frame with paragraph topic headings pre-filled and a quotation bank.',
      core: 'Students plan independently in five minutes and self-assess against the model.',
      stretch: 'Students plan a counter-argument paragraph that acknowledges an alternative interpretation.',
    },
    resources: ['Essay question display', 'Planning frame (support tier)', 'Quotation bank (support tier)', 'Model plan'],
  },
  mainActivities: [
    {
      title: 'Timed Essay Writing',
      duration: '35 minutes',
      instructions:
        'Students write their essay in timed conditions (35 minutes). The question is: "How does Austen use the characters of Elizabeth and Darcy to explore the themes of pride and prejudice?" Remind students of key requirements before they begin: (1) Open with a clear thesis statement, (2) Each paragraph should focus on one aspect of the question, (3) Embed quotations — do not bolt them on, (4) Include analysis of Austen\'s methods (AO2): irony, FID, characterisation, structure, (5) Include at least two references to Regency context (AO3): marriage, class, gender, (6) Use comparative connectives where appropriate: similarly, conversely, in contrast, equally. Teacher circulates during writing, prompting students who are stuck and ensuring all students are writing. Do not interrupt for whole-class input once writing has begun.',
      differentiation: {
        support: 'Provide a paragraph-by-paragraph scaffold with sentence starters for each section, plus a keyword and quotation bank.',
        core: 'Students write independently with access to their own notes from previous lessons.',
        stretch: 'Students aim for a sophisticated conclusion that evaluates Austen\'s overall message about pride and prejudice, considering whether the novel resolves these themes or leaves them in tension.',
      },
      resources: ['Essay scaffold (support tier)', 'Previous lesson notes', 'Lined paper or exam booklets', 'Timer displayed'],
    },
  ],
  plenaryActivity: {
    title: 'Peer Assessment: Two Stars and a Wish',
    duration: '10 minutes',
    instructions:
      'Students swap essays with a partner. Using the assessment criteria provided, each student identifies: two strengths ("stars") and one area for improvement ("wish"). Stars should focus on specific skills: e.g., "You embedded quotations effectively in paragraph 2" or "Your AO3 context point about entailment was well integrated." The wish should be actionable: e.g., "Your third paragraph needs a clearer topic sentence" or "You could add an AO2 point about Austen\'s use of irony." Students return essays and read feedback. Teacher invites three students to share one star they received and one wish they plan to act on.',
    differentiation: {
      support: 'Provide a simplified peer assessment checklist with yes/no criteria.',
      core: 'Students use the full assessment criteria and write qualitative feedback.',
      stretch: 'Students identify the single most effective sentence in their partner\'s essay and explain why it works.',
    },
  },
  homework:
    'Redraft one paragraph from your essay, acting on the feedback you received. Highlight the changes you have made and explain in a brief annotation why each change improves the paragraph.',
  worksheetQuestions: [
    {
      question: 'Write a thesis statement for the essay question: "How does Austen use the characters of Elizabeth and Darcy to explore the themes of pride and prejudice?"',
      lines: 3,
      modelAnswer:
        'Austen uses Elizabeth and Darcy as complementary protagonists whose parallel journeys of self-discovery expose how pride and prejudice — though seemingly opposite flaws — are interconnected: Darcy\'s social pride breeds Elizabeth\'s prejudice against him, while Elizabeth\'s pride in her own judgement blinds her to her prejudice. Through their transformation, Austen argues that genuine self-knowledge, earned through humility and honest reflection, is the foundation of both moral growth and lasting love.',
      marks: 3,
    },
    {
      question: 'Write an analytical paragraph exploring how Austen uses Darcy\'s first proposal to reveal his pride. Include an embedded quotation and an AO2 point about Austen\'s methods.',
      lines: 8,
      modelAnswer:
        'Austen uses Darcy\'s first proposal in Chapter 34 to expose the full extent of his social pride. Darcy begins not with a declaration of love but with an account of his internal "struggle" against his own feelings — "In vain I have struggled. It will not do." The verb "struggled" reveals that Darcy experiences his love for Elizabeth as a conflict between emotion and social propriety; loving her means accepting a woman whose family connections he considers beneath him. Austen\'s method here is significant: she has Darcy articulate his prejudice openly, in his own words, rather than filtering it through the narrator. This direct speech forces both Elizabeth and the reader to hear his arrogance unmediated. The dramatic irony is acute — Darcy believes he is complimenting Elizabeth by confessing how hard he has fought against loving her, when in fact he is insulting her. Austen uses this scene to demonstrate that pride is not merely a personality trait but a structural feature of the class system: Darcy\'s assumptions about social hierarchy are so deeply ingrained that he cannot recognise them as offensive. His proposal fails not because he lacks feeling but because his pride prevents him from expressing it with the respect Elizabeth deserves.',
      marks: 6,
    },
    {
      question: 'Write a paragraph exploring how Austen uses Elizabeth\'s prejudice as a flaw that drives the plot. Include a reference to Regency context (AO3).',
      lines: 8,
      modelAnswer:
        'Elizabeth\'s prejudice against Darcy is established at the Meryton ball and reinforced by Wickham\'s false testimony, but Austen presents it as something more dangerous than simple dislike: it is a failure of the very perceptiveness Elizabeth values in herself. When she declares, "Till this moment I never knew myself," Austen reveals that Elizabeth\'s prejudice was not merely an opinion about Darcy but a fundamental blindness to her own biases. In Regency England, where a woman\'s future depended on her ability to judge character — since she would be legally and financially bound to the man she married — Elizabeth\'s misjudgement carries real stakes. Her prejudice against Darcy nearly costs her the marriage that would provide both love and security, while her trust in Wickham could have exposed her family to the same ruin that Lydia eventually causes. Austen uses Elizabeth\'s prejudice to argue that intelligence without self-awareness is insufficient: the novel\'s moral is that true judgement requires humility, the willingness to admit error and revise one\'s conclusions in light of new evidence.',
      marks: 6,
    },
    {
      question: 'Using the assessment criteria below, evaluate a sample paragraph. Identify one strength and one area for improvement.\n\nSample: "Darcy is proud because he says Elizabeth is not pretty enough. This shows he is rude. In those days men were very powerful and women had to do what they said. Austen wants to show that pride is bad."',
      lines: 5,
      modelAnswer:
        'Strength: The paragraph identifies a relevant quotation reference (Darcy\'s dismissal of Elizabeth) and attempts to link to context ("in those days men were very powerful"). Area for improvement: The analysis is too general — the student states that Darcy is "rude" and pride is "bad" without exploring how Austen\'s language creates this impression. To improve, the student should embed the actual quotation ("tolerable, but not handsome enough to tempt me"), analyse specific word choices (e.g., the condescension of "tolerable"), and explain Austen\'s method (using public dialogue to expose Darcy\'s pride). The contextual point also needs specificity — rather than "men were powerful," the student should link Darcy\'s behaviour to the class hierarchy of Regency England.',
      marks: 4,
    },
  ],
  teacherNotes: [
    'This is an exam-skills lesson. Keep teacher talk to a minimum during the writing phase — the goal is sustained independent writing.',
    'The planning phase is crucial. Students who skip planning consistently produce weaker essays; enforce the five-minute plan.',
    'Circulate during writing to identify common weaknesses for whole-class feedback in the next lesson.',
    'The sample paragraph evaluation in the worksheet is deliberately weak — it helps students internalise the assessment criteria by applying it to someone else\'s work.',
    'Consider collecting essays for formal marking using the AQA mark scheme to provide summative feedback at this point in the unit.',
  ],
  targetedSkills: [
    'AO1: Textual reference and quotation',
    'AO2: Analysis of methods',
    'AO3: Contextual integration',
    'Essay structure and planning',
    'Timed writing',
    'Peer assessment',
  ],
};

// ─── Export ─────────────────────────────────────────────────────────────────

export const pridePrejudiceLessons: LessonPlan[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
];
