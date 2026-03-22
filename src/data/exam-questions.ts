export interface ExamQuestion {
  id: string
  text: string
  board: string
  paper: string
  questionType: string
}

export const examQuestions: ExamQuestion[] = [
  // ============================================================
  // AQA PAPER 1 — Explorations in Creative Reading and Writing
  // ============================================================

  // --- AQA Paper 1: Language Analysis ---
  { id: 'aqa-p1-la-1', text: 'How does the writer use language to create a sense of tension in lines 1–15?', board: 'AQA', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'aqa-p1-la-2', text: 'How does the writer use language to describe the setting in lines 7–19?', board: 'AQA', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'aqa-p1-la-3', text: 'How does the writer use language to present the character\'s feelings in lines 10–22?', board: 'AQA', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'aqa-p1-la-4', text: 'Analyse how the writer uses language to convey a sense of danger in the extract.', board: 'AQA', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'aqa-p1-la-5', text: 'How does the writer use language to create an atmosphere of isolation and unease?', board: 'AQA', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'aqa-p1-la-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 1', questionType: 'Language Analysis' },

  // --- AQA Paper 1: Structure Analysis ---
  { id: 'aqa-p1-sa-1', text: 'How has the writer structured the text to interest you as a reader? You could write about: what the writer focuses your attention on at the beginning, how and why the writer changes this focus as the extract develops, any other structural features that interest you.', board: 'AQA', paper: 'Paper 1', questionType: 'Structure Analysis' },
  { id: 'aqa-p1-sa-2', text: 'How does the writer structure the text to build suspense throughout the extract?', board: 'AQA', paper: 'Paper 1', questionType: 'Structure Analysis' },
  { id: 'aqa-p1-sa-3', text: 'How has the writer structured the text to engage the reader\'s interest? Consider the shift in focus from the external world to the character\'s internal thoughts.', board: 'AQA', paper: 'Paper 1', questionType: 'Structure Analysis' },
  { id: 'aqa-p1-sa-4', text: 'How does the writer use structural choices to create a sense of growing unease throughout the passage?', board: 'AQA', paper: 'Paper 1', questionType: 'Structure Analysis' },
  { id: 'aqa-p1-sa-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 1', questionType: 'Structure Analysis' },

  // --- AQA Paper 1: Evaluation ---
  { id: 'aqa-p1-ev-1', text: 'A student said: "The writer makes the reader feel sympathy for the main character." To what extent do you agree? In your response, you could: consider your own impressions of the character, evaluate how the writer has created these impressions, support your opinions with references to the text.', board: 'AQA', paper: 'Paper 1', questionType: 'Evaluation' },
  { id: 'aqa-p1-ev-2', text: 'A student said: "The ending of the extract is shocking and unexpected." To what extent do you agree with this view? Support your answer with references to the text.', board: 'AQA', paper: 'Paper 1', questionType: 'Evaluation' },
  { id: 'aqa-p1-ev-3', text: 'A student said: "The writer creates a vivid and realistic description of the storm." To what extent do you agree? Evaluate how the writer achieves this effect.', board: 'AQA', paper: 'Paper 1', questionType: 'Evaluation' },
  { id: 'aqa-p1-ev-4', text: 'A student said: "The writer successfully creates a sense of hopelessness in this extract." To what extent do you agree? Support your response with detailed references to the text.', board: 'AQA', paper: 'Paper 1', questionType: 'Evaluation' },
  { id: 'aqa-p1-ev-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 1', questionType: 'Evaluation' },

  // --- AQA Paper 1: Creative Writing (Descriptive) ---
  { id: 'aqa-p1-cwd-1', text: 'Write a description suggested by this picture: a busy market on a summer\'s day.', board: 'AQA', paper: 'Paper 1', questionType: 'Creative Writing (Descriptive)' },
  { id: 'aqa-p1-cwd-2', text: 'Describe an occasion when you felt completely alone.', board: 'AQA', paper: 'Paper 1', questionType: 'Creative Writing (Descriptive)' },
  { id: 'aqa-p1-cwd-3', text: 'Write a description of a place at night, as suggested by this picture: a deserted city street illuminated by neon signs.', board: 'AQA', paper: 'Paper 1', questionType: 'Creative Writing (Descriptive)' },
  { id: 'aqa-p1-cwd-4', text: 'Describe a scene in a forest after a heavy snowfall.', board: 'AQA', paper: 'Paper 1', questionType: 'Creative Writing (Descriptive)' },
  { id: 'aqa-p1-cwd-5', text: 'Write a description suggested by this picture: an abandoned fairground at dusk.', board: 'AQA', paper: 'Paper 1', questionType: 'Creative Writing (Descriptive)' },
  { id: 'aqa-p1-cwd-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 1', questionType: 'Creative Writing (Descriptive)' },

  // --- AQA Paper 1: Creative Writing (Narrative) ---
  { id: 'aqa-p1-cwn-1', text: 'Write a story about a time when everything changed.', board: 'AQA', paper: 'Paper 1', questionType: 'Creative Writing (Narrative)' },
  { id: 'aqa-p1-cwn-2', text: 'Write a story that begins: "I knew from the moment I saw the letter that nothing would ever be the same again."', board: 'AQA', paper: 'Paper 1', questionType: 'Creative Writing (Narrative)' },
  { id: 'aqa-p1-cwn-3', text: 'Write a story with the title "The Discovery".', board: 'AQA', paper: 'Paper 1', questionType: 'Creative Writing (Narrative)' },
  { id: 'aqa-p1-cwn-4', text: 'Write a story that ends with the line: "And as the door closed behind me, I finally understood."', board: 'AQA', paper: 'Paper 1', questionType: 'Creative Writing (Narrative)' },
  { id: 'aqa-p1-cwn-5', text: 'Write the opening of a story set during a journey. Focus on creating a strong sense of atmosphere.', board: 'AQA', paper: 'Paper 1', questionType: 'Creative Writing (Narrative)' },
  { id: 'aqa-p1-cwn-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 1', questionType: 'Creative Writing (Narrative)' },

  // ============================================================
  // AQA PAPER 2 — Writers' Viewpoints and Perspectives
  // ============================================================

  // --- AQA Paper 2: Information Retrieval ---
  { id: 'aqa-p2-ir-1', text: 'Read again the first part of Source A. Choose four statements below which are TRUE. Shade the circles of the ones you think are true.', board: 'AQA', paper: 'Paper 2', questionType: 'Information Retrieval' },
  { id: 'aqa-p2-ir-2', text: 'Read Source A from lines 1 to 12. List four things you learn about the conditions in the factory.', board: 'AQA', paper: 'Paper 2', questionType: 'Information Retrieval' },
  { id: 'aqa-p2-ir-3', text: 'Read Source B from lines 1 to 15. List four things you learn about the writer\'s attitude to travel.', board: 'AQA', paper: 'Paper 2', questionType: 'Information Retrieval' },
  { id: 'aqa-p2-ir-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 2', questionType: 'Information Retrieval' },

  // --- AQA Paper 2: Summary & Synthesis ---
  { id: 'aqa-p2-ss-1', text: 'Use details from both sources. Write a summary of the differences between the two writers\' experiences of school life.', board: 'AQA', paper: 'Paper 2', questionType: 'Summary & Synthesis' },
  { id: 'aqa-p2-ss-2', text: 'Use details from both sources. Write a summary of the similarities and differences between the two writers\' attitudes to city living.', board: 'AQA', paper: 'Paper 2', questionType: 'Summary & Synthesis' },
  { id: 'aqa-p2-ss-3', text: 'Using details from both sources, write a summary of the differences between how the two writers feel about the natural world.', board: 'AQA', paper: 'Paper 2', questionType: 'Summary & Synthesis' },
  { id: 'aqa-p2-ss-4', text: 'Use details from both sources. Write a summary of the different ways the two writers present the experience of poverty.', board: 'AQA', paper: 'Paper 2', questionType: 'Summary & Synthesis' },
  { id: 'aqa-p2-ss-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 2', questionType: 'Summary & Synthesis' },

  // --- AQA Paper 2: Language Analysis ---
  { id: 'aqa-p2-la-1', text: 'Refer only to Source B. How does the writer use language to persuade the reader that the countryside is under threat?', board: 'AQA', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'aqa-p2-la-2', text: 'Refer only to Source A. How does the writer use language to express her frustration with modern technology?', board: 'AQA', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'aqa-p2-la-3', text: 'Refer only to Source B. How does the writer use language to convey his admiration for the explorer?', board: 'AQA', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'aqa-p2-la-4', text: 'Refer only to Source A. How does the writer use language to present a negative view of factory conditions?', board: 'AQA', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'aqa-p2-la-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 2', questionType: 'Language Analysis' },

  // --- AQA Paper 2: Comparison of Writers' Viewpoints ---
  { id: 'aqa-p2-cwv-1', text: 'Compare how the two writers convey their different perspectives on education. In your answer, you could: compare their different perspectives, compare the methods the writers use to convey their perspectives, support your response with references to both texts.', board: 'AQA', paper: 'Paper 2', questionType: "Comparison of Writers' Viewpoints" },
  { id: 'aqa-p2-cwv-2', text: 'Compare how the two writers convey their different attitudes to the city. Support your answer with references to both texts.', board: 'AQA', paper: 'Paper 2', questionType: "Comparison of Writers' Viewpoints" },
  { id: 'aqa-p2-cwv-3', text: 'Compare how the two writers convey their different views about the role of technology in society.', board: 'AQA', paper: 'Paper 2', questionType: "Comparison of Writers' Viewpoints" },
  { id: 'aqa-p2-cwv-4', text: 'Compare how the two writers present their different experiences of growing up. Use references to both sources in your answer.', board: 'AQA', paper: 'Paper 2', questionType: "Comparison of Writers' Viewpoints" },
  { id: 'aqa-p2-cwv-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 2', questionType: "Comparison of Writers' Viewpoints" },

  // --- AQA Paper 2: Persuasive Writing ---
  { id: 'aqa-p2-pw-1', text: '"Social media is destroying young people\'s ability to communicate face to face." Write an article for a broadsheet newspaper in which you argue for or against this statement.', board: 'AQA', paper: 'Paper 2', questionType: 'Persuasive Writing' },
  { id: 'aqa-p2-pw-2', text: '"School uniform stifles individuality and should be abolished." Write a persuasive article for your school magazine arguing your point of view on this topic.', board: 'AQA', paper: 'Paper 2', questionType: 'Persuasive Writing' },
  { id: 'aqa-p2-pw-3', text: '"We have a responsibility to protect our environment for future generations." Write a persuasive leaflet for a local community group encouraging people to adopt more sustainable lifestyles.', board: 'AQA', paper: 'Paper 2', questionType: 'Persuasive Writing' },
  { id: 'aqa-p2-pw-4', text: '"Young people should be allowed to vote from the age of 16." Write a persuasive text aimed at politicians in which you argue your point of view.', board: 'AQA', paper: 'Paper 2', questionType: 'Persuasive Writing' },
  { id: 'aqa-p2-pw-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 2', questionType: 'Persuasive Writing' },

  // --- AQA Paper 2: Argumentative Writing ---
  { id: 'aqa-p2-aw-1', text: '"Examinations are not the best way to assess a student\'s ability." Write an article for a national newspaper in which you argue for or against this view.', board: 'AQA', paper: 'Paper 2', questionType: 'Argumentative Writing' },
  { id: 'aqa-p2-aw-2', text: '"The internet has done more harm than good to society." Write an argument presenting your point of view on this statement.', board: 'AQA', paper: 'Paper 2', questionType: 'Argumentative Writing' },
  { id: 'aqa-p2-aw-3', text: '"Space exploration is a waste of money when there are so many problems here on Earth." Write a balanced argument exploring both sides of this debate.', board: 'AQA', paper: 'Paper 2', questionType: 'Argumentative Writing' },
  { id: 'aqa-p2-aw-4', text: '"Celebrity culture has a negative influence on young people." Write an article in which you argue your point of view on this statement.', board: 'AQA', paper: 'Paper 2', questionType: 'Argumentative Writing' },
  { id: 'aqa-p2-aw-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 2', questionType: 'Argumentative Writing' },

  // --- AQA Paper 2: Letter Writing ---
  { id: 'aqa-p2-lw-1', text: 'Write a letter to your local MP in which you argue that more should be done to support young people\'s mental health.', board: 'AQA', paper: 'Paper 2', questionType: 'Letter Writing' },
  { id: 'aqa-p2-lw-2', text: 'Write a letter to your headteacher suggesting changes to the school day that would benefit students\' wellbeing.', board: 'AQA', paper: 'Paper 2', questionType: 'Letter Writing' },
  { id: 'aqa-p2-lw-3', text: 'Write a letter to a national newspaper expressing your views on the proposal to ban mobile phones in schools.', board: 'AQA', paper: 'Paper 2', questionType: 'Letter Writing' },
  { id: 'aqa-p2-lw-4', text: 'Write a letter to your local council persuading them to invest in facilities for young people in your area.', board: 'AQA', paper: 'Paper 2', questionType: 'Letter Writing' },
  { id: 'aqa-p2-lw-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 2', questionType: 'Letter Writing' },

  // --- AQA Paper 2: Article Writing ---
  { id: 'aqa-p2-artw-1', text: '"Young people today have too much freedom." Write an article for a broadsheet newspaper arguing for or against this statement.', board: 'AQA', paper: 'Paper 2', questionType: 'Article Writing' },
  { id: 'aqa-p2-artw-2', text: 'Write an article for your school magazine about the importance of reading for pleasure.', board: 'AQA', paper: 'Paper 2', questionType: 'Article Writing' },
  { id: 'aqa-p2-artw-3', text: '"Fast fashion is destroying the planet." Write an article for a magazine aimed at young adults exploring this issue.', board: 'AQA', paper: 'Paper 2', questionType: 'Article Writing' },
  { id: 'aqa-p2-artw-4', text: 'Write an article for a teenage magazine about the pressures young people face on social media.', board: 'AQA', paper: 'Paper 2', questionType: 'Article Writing' },
  { id: 'aqa-p2-artw-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 2', questionType: 'Article Writing' },

  // --- AQA Paper 2: Speech Writing ---
  { id: 'aqa-p2-sw-1', text: 'Write a speech to deliver to your school governors persuading them to invest in better sports facilities.', board: 'AQA', paper: 'Paper 2', questionType: 'Speech Writing' },
  { id: 'aqa-p2-sw-2', text: 'Write a speech to deliver to your year group about the importance of volunteering in the local community.', board: 'AQA', paper: 'Paper 2', questionType: 'Speech Writing' },
  { id: 'aqa-p2-sw-3', text: '"We are sleepwalking into a climate catastrophe." Write a speech to deliver at a school assembly in which you persuade students to take action on climate change.', board: 'AQA', paper: 'Paper 2', questionType: 'Speech Writing' },
  { id: 'aqa-p2-sw-4', text: 'Write a speech to deliver to parents at a school open evening about why your school is a great place to learn.', board: 'AQA', paper: 'Paper 2', questionType: 'Speech Writing' },
  { id: 'aqa-p2-sw-custom', text: "I'll type my own question", board: 'AQA', paper: 'Paper 2', questionType: 'Speech Writing' },

  // ============================================================
  // AQA LITERATURE
  // ============================================================

  // --- AQA Literature: Extract-Based Analysis ---
  { id: 'aqa-lit-eba-1', text: 'Read the following extract from Act 1 Scene 5 of Macbeth. Starting with this extract, how does Shakespeare present Lady Macbeth as a powerful character?', board: 'AQA', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'aqa-lit-eba-2', text: 'Read the following extract from Stave 1 of A Christmas Carol. Starting with this extract, how does Dickens present Scrooge as a cold and unfeeling character?', board: 'AQA', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'aqa-lit-eba-3', text: 'Read the following extract from Act 1 of An Inspector Calls. Starting with this extract, how does Priestley present Mr Birling as a foolish character?', board: 'AQA', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'aqa-lit-eba-4', text: 'Read the following extract from Act 3 Scene 1 of Romeo and Juliet. Starting with this extract, how does Shakespeare present the theme of conflict?', board: 'AQA', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'aqa-lit-eba-5', text: 'Read the following extract from Chapter 10 of Jekyll and Hyde. Starting with this extract, how does Stevenson present the duality of human nature?', board: 'AQA', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'aqa-lit-eba-custom', text: "I'll type my own question", board: 'AQA', paper: 'Literature', questionType: 'Extract-Based Analysis' },

  // --- AQA Literature: Essay Response ---
  { id: 'aqa-lit-er-1', text: 'How does Priestley use the character of Sheila to explore ideas about responsibility in An Inspector Calls?', board: 'AQA', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'aqa-lit-er-2', text: 'How does Dickens present the theme of redemption in A Christmas Carol?', board: 'AQA', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'aqa-lit-er-3', text: 'How does Shakespeare explore the relationship between Macbeth and Lady Macbeth throughout the play?', board: 'AQA', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'aqa-lit-er-4', text: 'How does Golding present the theme of civilisation versus savagery in Lord of the Flies?', board: 'AQA', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'aqa-lit-er-custom', text: "I'll type my own question", board: 'AQA', paper: 'Literature', questionType: 'Essay Response' },

  // --- AQA Literature: Character Analysis ---
  { id: 'aqa-lit-ca-1', text: 'How does Shakespeare present Macbeth as a tragic hero?', board: 'AQA', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'aqa-lit-ca-2', text: 'How does Dickens present the character of Scrooge and his transformation in A Christmas Carol?', board: 'AQA', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'aqa-lit-ca-3', text: 'How does Priestley present the character of Inspector Goole as a dramatic device in An Inspector Calls?', board: 'AQA', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'aqa-lit-ca-4', text: 'How does Stevenson present Mr Hyde as a frightening character in Jekyll and Hyde?', board: 'AQA', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'aqa-lit-ca-5', text: 'How does Shakespeare present the character of Lady Macbeth and her downfall?', board: 'AQA', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'aqa-lit-ca-custom', text: "I'll type my own question", board: 'AQA', paper: 'Literature', questionType: 'Character Analysis' },

  // --- AQA Literature: Theme Analysis ---
  { id: 'aqa-lit-ta-1', text: 'How does Shakespeare present the theme of ambition in Macbeth?', board: 'AQA', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'aqa-lit-ta-2', text: 'How does Priestley explore ideas about social class and inequality in An Inspector Calls?', board: 'AQA', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'aqa-lit-ta-3', text: 'How does Dickens present the theme of poverty and social injustice in A Christmas Carol?', board: 'AQA', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'aqa-lit-ta-4', text: 'How does Orwell explore the theme of power and corruption in Animal Farm?', board: 'AQA', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'aqa-lit-ta-5', text: 'How does Shakespeare explore the theme of love and its consequences in Romeo and Juliet?', board: 'AQA', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'aqa-lit-ta-custom', text: "I'll type my own question", board: 'AQA', paper: 'Literature', questionType: 'Theme Analysis' },

  // --- AQA Literature: Poetry Comparison ---
  { id: 'aqa-lit-pc-1', text: 'Compare how the poets present the effects of conflict in "Exposure" by Wilfred Owen and one other poem from the Power and Conflict anthology.', board: 'AQA', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'aqa-lit-pc-2', text: 'Compare how the poets present the power of nature in "Storm on the Island" by Seamus Heaney and one other poem from the Power and Conflict anthology.', board: 'AQA', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'aqa-lit-pc-3', text: 'Compare how the poets present ideas about memory and loss in "Poppies" by Jane Weir and one other poem from the Power and Conflict anthology.', board: 'AQA', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'aqa-lit-pc-4', text: 'Compare how the poets present ideas about power in "Ozymandias" by Percy Bysshe Shelley and one other poem from the Power and Conflict anthology.', board: 'AQA', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'aqa-lit-pc-5', text: 'Compare how the poets present the reality of war in "Bayonet Charge" by Ted Hughes and one other poem from the Power and Conflict anthology.', board: 'AQA', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'aqa-lit-pc-custom', text: "I'll type my own question", board: 'AQA', paper: 'Literature', questionType: 'Poetry Comparison' },

  // --- AQA Literature: Unseen Poetry ---
  { id: 'aqa-lit-up-1', text: 'In the poem, how does the poet present feelings about growing older? You should consider: the language used, the structure of the poem, the effects on the reader.', board: 'AQA', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'aqa-lit-up-2', text: 'In the poem, how does the poet present the experience of loss? Consider the poet\'s use of language, form and structure.', board: 'AQA', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'aqa-lit-up-3', text: 'In both poems, the poets describe an experience of nature. What are the similarities and/or differences between the ways the poets present nature?', board: 'AQA', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'aqa-lit-up-4', text: 'How does the poet use language and structure to convey a sense of wonder in the poem?', board: 'AQA', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'aqa-lit-up-custom', text: "I'll type my own question", board: 'AQA', paper: 'Literature', questionType: 'Unseen Poetry' },

  // ============================================================
  // EDEXCEL PAPER 1 — Fiction and Imaginative Writing
  // ============================================================

  // --- Edexcel Paper 1: Language Analysis ---
  { id: 'edx-p1-la-1', text: 'Analyse how the writer uses language and structure to interest and engage the reader in the extract.', board: 'Edexcel', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'edx-p1-la-2', text: 'How does the writer use language to create a sense of mystery in lines 1–20?', board: 'Edexcel', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'edx-p1-la-3', text: 'Explore how the writer uses language to present the narrator\'s emotions in the extract.', board: 'Edexcel', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'edx-p1-la-4', text: 'How does the writer use language to create a vivid picture of the setting?', board: 'Edexcel', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'edx-p1-la-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Paper 1', questionType: 'Language Analysis' },

  // --- Edexcel Paper 1: Whole Text Analysis ---
  { id: 'edx-p1-wta-1', text: 'In this extract, there is an attempt to create a sense of foreboding. Evaluate how successfully this is achieved. Support your views with detailed reference to the text.', board: 'Edexcel', paper: 'Paper 1', questionType: 'Whole Text Analysis' },
  { id: 'edx-p1-wta-2', text: 'A student said: "The writer creates a powerful sense of place in this extract." To what extent do you agree? Use evidence from the whole text to support your answer.', board: 'Edexcel', paper: 'Paper 1', questionType: 'Whole Text Analysis' },
  { id: 'edx-p1-wta-3', text: 'How does the writer present the relationship between the two characters across the whole extract? Evaluate the effectiveness of the writer\'s methods.', board: 'Edexcel', paper: 'Paper 1', questionType: 'Whole Text Analysis' },
  { id: 'edx-p1-wta-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Paper 1', questionType: 'Whole Text Analysis' },

  // --- Edexcel Paper 1: Imaginative Writing ---
  { id: 'edx-p1-iw-1', text: 'Write the opening of a novel set in a world where electricity has stopped working.', board: 'Edexcel', paper: 'Paper 1', questionType: 'Imaginative Writing' },
  { id: 'edx-p1-iw-2', text: 'Write a short story that begins with the sentence: "The door was open, and it should not have been."', board: 'Edexcel', paper: 'Paper 1', questionType: 'Imaginative Writing' },
  { id: 'edx-p1-iw-3', text: 'Write the opening of a story about a character who receives an unexpected visitor.', board: 'Edexcel', paper: 'Paper 1', questionType: 'Imaginative Writing' },
  { id: 'edx-p1-iw-4', text: 'Look at the image provided. Write a short story suggested by what you see.', board: 'Edexcel', paper: 'Paper 1', questionType: 'Imaginative Writing' },
  { id: 'edx-p1-iw-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Paper 1', questionType: 'Imaginative Writing' },

  // --- Edexcel Paper 1: Creative Writing ---
  { id: 'edx-p1-cw-1', text: 'Write a description of a place that holds special memories for you.', board: 'Edexcel', paper: 'Paper 1', questionType: 'Creative Writing' },
  { id: 'edx-p1-cw-2', text: 'Write a description of a crowded train station during rush hour.', board: 'Edexcel', paper: 'Paper 1', questionType: 'Creative Writing' },
  { id: 'edx-p1-cw-3', text: 'Write a piece of creative writing about a moment of realisation. You may choose to write in any form.', board: 'Edexcel', paper: 'Paper 1', questionType: 'Creative Writing' },
  { id: 'edx-p1-cw-4', text: 'Write a description of a coastal landscape as a storm approaches.', board: 'Edexcel', paper: 'Paper 1', questionType: 'Creative Writing' },
  { id: 'edx-p1-cw-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Paper 1', questionType: 'Creative Writing' },

  // ============================================================
  // EDEXCEL PAPER 2 — Non-Fiction and Transactional Writing
  // ============================================================

  // --- Edexcel Paper 2: Information Retrieval ---
  { id: 'edx-p2-ir-1', text: 'Read Source A. Identify the key points the writer makes about the experience of living in a big city.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Information Retrieval' },
  { id: 'edx-p2-ir-2', text: 'Read Source B from lines 1 to 14. Give four examples of the challenges the writer faced during the expedition.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Information Retrieval' },
  { id: 'edx-p2-ir-3', text: 'Read Source A. List four things you learn about the writer\'s childhood from lines 1–18.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Information Retrieval' },
  { id: 'edx-p2-ir-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Paper 2', questionType: 'Information Retrieval' },

  // --- Edexcel Paper 2: Summary ---
  { id: 'edx-p2-sum-1', text: 'You need to refer to Source A and Source B. Summarise the different attitudes the writers have towards education.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Summary' },
  { id: 'edx-p2-sum-2', text: 'Using details from both sources, write a summary of the differences between the writers\' experiences of travel.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Summary' },
  { id: 'edx-p2-sum-3', text: 'Summarise the similarities and differences between the two writers\' views on the importance of community.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Summary' },
  { id: 'edx-p2-sum-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Paper 2', questionType: 'Summary' },

  // --- Edexcel Paper 2: Language Analysis ---
  { id: 'edx-p2-la-1', text: 'How does the writer of Source B use language to try to influence the reader? Analyse the effects of the writer\'s language choices.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'edx-p2-la-2', text: 'Analyse how the writer of Source A uses language to express their views about homelessness.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'edx-p2-la-3', text: 'How does the writer use language to present a persuasive argument about the environment?', board: 'Edexcel', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'edx-p2-la-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Paper 2', questionType: 'Language Analysis' },

  // --- Edexcel Paper 2: Comparison ---
  { id: 'edx-p2-comp-1', text: 'Compare how the writers of Source A and Source B present their ideas about the natural world. Use detailed references to both sources.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Comparison' },
  { id: 'edx-p2-comp-2', text: 'Compare how the writers of Source A and Source B convey their different experiences of working life.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Comparison' },
  { id: 'edx-p2-comp-3', text: 'Compare how the two writers present their different views about childhood. Support your answer with references to both texts.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Comparison' },
  { id: 'edx-p2-comp-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Paper 2', questionType: 'Comparison' },

  // --- Edexcel Paper 2: Persuasive Writing ---
  { id: 'edx-p2-pw-1', text: '"Homework is a waste of valuable free time." Write a persuasive article for your school website in which you argue your point of view on this topic.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Persuasive Writing' },
  { id: 'edx-p2-pw-2', text: 'Write a persuasive speech to be delivered at a local council meeting arguing that more green spaces are needed in your area.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Persuasive Writing' },
  { id: 'edx-p2-pw-3', text: '"Zoos are cruel and should be banned." Write a persuasive article for a magazine aimed at teenagers, arguing for or against this view.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Persuasive Writing' },
  { id: 'edx-p2-pw-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Paper 2', questionType: 'Persuasive Writing' },

  // --- Edexcel Paper 2: Argumentative Writing ---
  { id: 'edx-p2-aw-1', text: '"Plastic packaging should be completely banned." Write an article for a quality newspaper in which you argue for or against this view.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Argumentative Writing' },
  { id: 'edx-p2-aw-2', text: '"Video games are beneficial to young people." Write a balanced argument exploring both sides of this debate for a parenting magazine.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Argumentative Writing' },
  { id: 'edx-p2-aw-3', text: '"The school leaving age should be raised to 18." Write an argumentative piece for a broadsheet newspaper presenting your viewpoint.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Argumentative Writing' },
  { id: 'edx-p2-aw-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Paper 2', questionType: 'Argumentative Writing' },

  // --- Edexcel Paper 2: Review Writing ---
  { id: 'edx-p2-rw-1', text: 'Write a review of a book, film, or TV programme you have enjoyed recently. Your review should be suitable for publication in a magazine aimed at young people.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Review Writing' },
  { id: 'edx-p2-rw-2', text: 'Write a review of a restaurant or café you have visited recently. Your review should be informative and entertaining for a local newspaper audience.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Review Writing' },
  { id: 'edx-p2-rw-3', text: 'Write a review of a live event (concert, play, or sporting event) you have attended. Write for a magazine audience.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Review Writing' },
  { id: 'edx-p2-rw-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Paper 2', questionType: 'Review Writing' },

  // --- Edexcel Paper 2: Letter Writing ---
  { id: 'edx-p2-lw-1', text: 'Write a letter to the editor of a local newspaper expressing your views on the closure of your local library.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Letter Writing' },
  { id: 'edx-p2-lw-2', text: 'Write a formal letter to a company complaining about the poor service you received and explaining what you expect them to do about it.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Letter Writing' },
  { id: 'edx-p2-lw-3', text: 'Write a letter to your headteacher proposing a charity fundraising event and explaining why the school should support it.', board: 'Edexcel', paper: 'Paper 2', questionType: 'Letter Writing' },
  { id: 'edx-p2-lw-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Paper 2', questionType: 'Letter Writing' },

  // ============================================================
  // EDEXCEL LITERATURE
  // ============================================================

  // --- Edexcel Literature: Extract-Based Analysis ---
  { id: 'edx-lit-eba-1', text: 'Read the following extract from Act 1 Scene 7 of Macbeth. Explore how Shakespeare presents Macbeth\'s inner conflict in this extract and in the play as a whole.', board: 'Edexcel', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'edx-lit-eba-2', text: 'Read the following extract from Stave 3 of A Christmas Carol. How does Dickens use the character of the Ghost of Christmas Present to explore ideas about generosity?', board: 'Edexcel', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'edx-lit-eba-3', text: 'Read the following extract from Act 2 of An Inspector Calls. How does Priestley present the character of Mrs Birling in this extract and elsewhere in the play?', board: 'Edexcel', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'edx-lit-eba-4', text: 'Read the following extract from Act 2 Scene 2 of Romeo and Juliet. How does Shakespeare present the theme of love in this extract and in the play as a whole?', board: 'Edexcel', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'edx-lit-eba-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Literature', questionType: 'Extract-Based Analysis' },

  // --- Edexcel Literature: Essay Response ---
  { id: 'edx-lit-er-1', text: 'How does Shakespeare present the theme of the supernatural in Macbeth?', board: 'Edexcel', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'edx-lit-er-2', text: 'How does Dickens present ideas about family in A Christmas Carol?', board: 'Edexcel', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'edx-lit-er-3', text: 'How does Priestley explore the theme of responsibility in An Inspector Calls?', board: 'Edexcel', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'edx-lit-er-4', text: 'How does Golding explore the loss of innocence in Lord of the Flies?', board: 'Edexcel', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'edx-lit-er-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Literature', questionType: 'Essay Response' },

  // --- Edexcel Literature: Character Analysis ---
  { id: 'edx-lit-ca-1', text: 'How does Shakespeare present the Witches and their influence on Macbeth throughout the play?', board: 'Edexcel', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'edx-lit-ca-2', text: 'How does Dickens use the character of Tiny Tim to convey his message about social responsibility in A Christmas Carol?', board: 'Edexcel', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'edx-lit-ca-3', text: 'How does Priestley present the character of Eric Birling and his development throughout An Inspector Calls?', board: 'Edexcel', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'edx-lit-ca-4', text: 'How does Golding present the character of Jack and his descent into savagery in Lord of the Flies?', board: 'Edexcel', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'edx-lit-ca-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Literature', questionType: 'Character Analysis' },

  // --- Edexcel Literature: Theme Analysis ---
  { id: 'edx-lit-ta-1', text: 'How does Shakespeare present the theme of guilt in Macbeth?', board: 'Edexcel', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'edx-lit-ta-2', text: 'How does Dickens explore the theme of Christmas spirit and goodwill in A Christmas Carol?', board: 'Edexcel', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'edx-lit-ta-3', text: 'How does Priestley explore ideas about gender and the treatment of women in An Inspector Calls?', board: 'Edexcel', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'edx-lit-ta-4', text: 'How does Stevenson explore the theme of reputation and respectability in Jekyll and Hyde?', board: 'Edexcel', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'edx-lit-ta-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Literature', questionType: 'Theme Analysis' },

  // --- Edexcel Literature: Poetry Comparison ---
  { id: 'edx-lit-pc-1', text: 'Compare how the poets present the experience of conflict in two poems you have studied.', board: 'Edexcel', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'edx-lit-pc-2', text: 'Compare how the poets explore the theme of identity in two poems from the anthology.', board: 'Edexcel', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'edx-lit-pc-3', text: 'Compare how two poets use imagery to present their feelings about a place.', board: 'Edexcel', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'edx-lit-pc-4', text: 'Compare how the poets explore ideas about time and change in two poems from the anthology.', board: 'Edexcel', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'edx-lit-pc-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Literature', questionType: 'Poetry Comparison' },

  // --- Edexcel Literature: Unseen Poetry ---
  { id: 'edx-lit-up-1', text: 'Read the poem carefully. How does the poet present ideas about memory? You should consider the poet\'s use of language, structure and form.', board: 'Edexcel', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'edx-lit-up-2', text: 'How does the poet create a sense of isolation in the poem? Consider the effects of language, imagery and structure.', board: 'Edexcel', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'edx-lit-up-3', text: 'Now read Poem 2. Compare the ways the poets present ideas about the passing of time in Poem 1 and Poem 2.', board: 'Edexcel', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'edx-lit-up-custom', text: "I'll type my own question", board: 'Edexcel', paper: 'Literature', questionType: 'Unseen Poetry' },

  // ============================================================
  // OCR PAPER 1 — Communicating Information and Ideas
  // ============================================================

  // --- OCR Paper 1: Information Retrieval ---
  { id: 'ocr-p1-ir-1', text: 'Read Source A. Identify five things you learn about the writer\'s experience of working in a Victorian factory.', board: 'OCR', paper: 'Paper 1', questionType: 'Information Retrieval' },
  { id: 'ocr-p1-ir-2', text: 'Read the first section of the text. What do you learn about the conditions described by the writer?', board: 'OCR', paper: 'Paper 1', questionType: 'Information Retrieval' },
  { id: 'ocr-p1-ir-3', text: 'Read Source B from lines 1 to 20. List four things you learn about the writer\'s journey.', board: 'OCR', paper: 'Paper 1', questionType: 'Information Retrieval' },
  { id: 'ocr-p1-ir-custom', text: "I'll type my own question", board: 'OCR', paper: 'Paper 1', questionType: 'Information Retrieval' },

  // --- OCR Paper 1: Language Analysis ---
  { id: 'ocr-p1-la-1', text: 'How does the writer use language to influence the reader\'s opinion about animal testing?', board: 'OCR', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'ocr-p1-la-2', text: 'How does the writer use language to present a positive view of life in the countryside?', board: 'OCR', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'ocr-p1-la-3', text: 'Analyse how the writer uses language and rhetorical devices to persuade the reader in Source A.', board: 'OCR', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'ocr-p1-la-4', text: 'How does the writer use language to create a critical tone when discussing modern media?', board: 'OCR', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'ocr-p1-la-custom', text: "I'll type my own question", board: 'OCR', paper: 'Paper 1', questionType: 'Language Analysis' },

  // --- OCR Paper 1: Comparison ---
  { id: 'ocr-p1-comp-1', text: 'Compare how the writers of Source A and Source B present their ideas about the importance of education. Use evidence from both texts.', board: 'OCR', paper: 'Paper 1', questionType: 'Comparison' },
  { id: 'ocr-p1-comp-2', text: 'Compare how the two writers convey their different attitudes to food and diet. Support your answer with references to both sources.', board: 'OCR', paper: 'Paper 1', questionType: 'Comparison' },
  { id: 'ocr-p1-comp-3', text: 'Compare the methods the writers of Source A and Source B use to present their views on freedom and control.', board: 'OCR', paper: 'Paper 1', questionType: 'Comparison' },
  { id: 'ocr-p1-comp-custom', text: "I'll type my own question", board: 'OCR', paper: 'Paper 1', questionType: 'Comparison' },

  // --- OCR Paper 1: Writing to Persuade ---
  { id: 'ocr-p1-wtp-1', text: '"All young people should complete a year of community service before going to university." Write a persuasive article for a newspaper in which you argue your point of view.', board: 'OCR', paper: 'Paper 1', questionType: 'Writing to Persuade' },
  { id: 'ocr-p1-wtp-2', text: 'Write a persuasive leaflet encouraging people in your local area to use public transport instead of cars.', board: 'OCR', paper: 'Paper 1', questionType: 'Writing to Persuade' },
  { id: 'ocr-p1-wtp-3', text: '"Junk food advertising should be banned during children\'s TV programmes." Write a persuasive article in which you argue for or against this view.', board: 'OCR', paper: 'Paper 1', questionType: 'Writing to Persuade' },
  { id: 'ocr-p1-wtp-custom', text: "I'll type my own question", board: 'OCR', paper: 'Paper 1', questionType: 'Writing to Persuade' },

  // --- OCR Paper 1: Writing to Argue ---
  { id: 'ocr-p1-wta-1', text: '"Animals should never be kept in captivity." Write an article for a magazine in which you argue for or against this statement.', board: 'OCR', paper: 'Paper 1', questionType: 'Writing to Argue' },
  { id: 'ocr-p1-wta-2', text: '"Everyone should learn to code." Write an article presenting a balanced argument on this topic for a technology magazine.', board: 'OCR', paper: 'Paper 1', questionType: 'Writing to Argue' },
  { id: 'ocr-p1-wta-3', text: '"The gap year is an overrated luxury." Write an argument for a student newspaper exploring different perspectives on this issue.', board: 'OCR', paper: 'Paper 1', questionType: 'Writing to Argue' },
  { id: 'ocr-p1-wta-custom', text: "I'll type my own question", board: 'OCR', paper: 'Paper 1', questionType: 'Writing to Argue' },

  // --- OCR Paper 1: Writing to Advise ---
  { id: 'ocr-p1-wtad-1', text: 'Write an advice column for a school magazine giving tips to Year 11 students on how to manage exam stress effectively.', board: 'OCR', paper: 'Paper 1', questionType: 'Writing to Advise' },
  { id: 'ocr-p1-wtad-2', text: 'A friend has written to you asking for advice about starting a new school. Write a letter giving them helpful guidance.', board: 'OCR', paper: 'Paper 1', questionType: 'Writing to Advise' },
  { id: 'ocr-p1-wtad-3', text: 'Write an article for a school website advising students on how to balance schoolwork with their social life and hobbies.', board: 'OCR', paper: 'Paper 1', questionType: 'Writing to Advise' },
  { id: 'ocr-p1-wtad-custom', text: "I'll type my own question", board: 'OCR', paper: 'Paper 1', questionType: 'Writing to Advise' },

  // ============================================================
  // OCR PAPER 2 — Exploring Effects and Impact
  // ============================================================

  // --- OCR Paper 2: Language Analysis ---
  { id: 'ocr-p2-la-1', text: 'How does the writer use language to create a sense of fear and unease in the extract?', board: 'OCR', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'ocr-p2-la-2', text: 'Analyse how the writer uses language to convey the beauty of the landscape in lines 5–25.', board: 'OCR', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'ocr-p2-la-3', text: 'How does the writer use language to present the character\'s growing sense of excitement?', board: 'OCR', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'ocr-p2-la-4', text: 'How does the writer use language to describe the effects of the weather on the characters?', board: 'OCR', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'ocr-p2-la-custom', text: "I'll type my own question", board: 'OCR', paper: 'Paper 2', questionType: 'Language Analysis' },

  // --- OCR Paper 2: Structure Analysis ---
  { id: 'ocr-p2-sa-1', text: 'How does the writer use structure to create tension and suspense in the extract?', board: 'OCR', paper: 'Paper 2', questionType: 'Structure Analysis' },
  { id: 'ocr-p2-sa-2', text: 'Analyse how the writer has structured the text to engage the reader. Consider the opening, development, and conclusion.', board: 'OCR', paper: 'Paper 2', questionType: 'Structure Analysis' },
  { id: 'ocr-p2-sa-3', text: 'How does the writer use structural features such as shifts in perspective and changes in pace to shape meaning in the extract?', board: 'OCR', paper: 'Paper 2', questionType: 'Structure Analysis' },
  { id: 'ocr-p2-sa-custom', text: "I'll type my own question", board: 'OCR', paper: 'Paper 2', questionType: 'Structure Analysis' },

  // --- OCR Paper 2: Evaluation ---
  { id: 'ocr-p2-ev-1', text: '"The writer successfully creates a character the reader can empathise with." To what extent do you agree with this view? Use evidence from the text to support your answer.', board: 'OCR', paper: 'Paper 2', questionType: 'Evaluation' },
  { id: 'ocr-p2-ev-2', text: '"This extract effectively builds to a dramatic climax." Evaluate how successfully the writer achieves this. Support your response with references to the text.', board: 'OCR', paper: 'Paper 2', questionType: 'Evaluation' },
  { id: 'ocr-p2-ev-3', text: '"The writer creates a vivid and memorable description of place." To what extent do you agree? Evaluate the writer\'s methods with detailed references to the text.', board: 'OCR', paper: 'Paper 2', questionType: 'Evaluation' },
  { id: 'ocr-p2-ev-custom', text: "I'll type my own question", board: 'OCR', paper: 'Paper 2', questionType: 'Evaluation' },

  // --- OCR Paper 2: Creative Writing ---
  { id: 'ocr-p2-cw-1', text: 'Write a piece of creative writing about an unexpected encounter. You may write in any form.', board: 'OCR', paper: 'Paper 2', questionType: 'Creative Writing' },
  { id: 'ocr-p2-cw-2', text: 'Write a piece of creative writing inspired by the theme of "Escape". You may choose any form.', board: 'OCR', paper: 'Paper 2', questionType: 'Creative Writing' },
  { id: 'ocr-p2-cw-3', text: 'Write a creative piece that begins: "It was the sound that reached me first..."', board: 'OCR', paper: 'Paper 2', questionType: 'Creative Writing' },
  { id: 'ocr-p2-cw-custom', text: "I'll type my own question", board: 'OCR', paper: 'Paper 2', questionType: 'Creative Writing' },

  // --- OCR Paper 2: Descriptive Writing ---
  { id: 'ocr-p2-dw-1', text: 'Write a description of a place where you feel completely at peace.', board: 'OCR', paper: 'Paper 2', questionType: 'Descriptive Writing' },
  { id: 'ocr-p2-dw-2', text: 'Describe the scene at a harbour as fishing boats return at the end of the day.', board: 'OCR', paper: 'Paper 2', questionType: 'Descriptive Writing' },
  { id: 'ocr-p2-dw-3', text: 'Write a description of a busy kitchen during a family celebration.', board: 'OCR', paper: 'Paper 2', questionType: 'Descriptive Writing' },
  { id: 'ocr-p2-dw-custom', text: "I'll type my own question", board: 'OCR', paper: 'Paper 2', questionType: 'Descriptive Writing' },

  // --- OCR Paper 2: Narrative Writing ---
  { id: 'ocr-p2-nw-1', text: 'Write the opening of a story in which a character faces a difficult decision.', board: 'OCR', paper: 'Paper 2', questionType: 'Narrative Writing' },
  { id: 'ocr-p2-nw-2', text: 'Write a story with the title "The Waiting Room".', board: 'OCR', paper: 'Paper 2', questionType: 'Narrative Writing' },
  { id: 'ocr-p2-nw-3', text: 'Write a story that begins with a character waking up in an unfamiliar place.', board: 'OCR', paper: 'Paper 2', questionType: 'Narrative Writing' },
  { id: 'ocr-p2-nw-custom', text: "I'll type my own question", board: 'OCR', paper: 'Paper 2', questionType: 'Narrative Writing' },

  // ============================================================
  // OCR LITERATURE
  // ============================================================

  // --- OCR Literature: Extract-Based Analysis ---
  { id: 'ocr-lit-eba-1', text: 'Read the following extract from Act 5 Scene 1 of Macbeth. How does Shakespeare present Lady Macbeth\'s guilt in this extract and in the play as a whole?', board: 'OCR', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'ocr-lit-eba-2', text: 'Read the following extract from Stave 4 of A Christmas Carol. How does Dickens create a sense of fear in this extract? Refer to the extract and the rest of the novella.', board: 'OCR', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'ocr-lit-eba-3', text: 'Read the following extract from Romeo and Juliet, Act 1 Scene 1. How does Shakespeare present the theme of conflict in this extract and in the play as a whole?', board: 'OCR', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'ocr-lit-eba-4', text: 'Read the following extract from An Inspector Calls. How does Priestley use the Inspector to challenge the Birlings\' attitudes in this extract and the rest of the play?', board: 'OCR', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'ocr-lit-eba-custom', text: "I'll type my own question", board: 'OCR', paper: 'Literature', questionType: 'Extract-Based Analysis' },

  // --- OCR Literature: Essay Response ---
  { id: 'ocr-lit-er-1', text: 'How does Shakespeare use the motif of blood to explore guilt in Macbeth?', board: 'OCR', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'ocr-lit-er-2', text: 'How does Dickens use the structure of A Christmas Carol to convey his message about social responsibility?', board: 'OCR', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'ocr-lit-er-3', text: 'How does Orwell use allegory to explore ideas about revolution and power in Animal Farm?', board: 'OCR', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'ocr-lit-er-4', text: 'How does Priestley use dramatic irony in An Inspector Calls to convey his message to the audience?', board: 'OCR', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'ocr-lit-er-custom', text: "I'll type my own question", board: 'OCR', paper: 'Literature', questionType: 'Essay Response' },

  // --- OCR Literature: Character Analysis ---
  { id: 'ocr-lit-ca-1', text: 'How does Shakespeare present Banquo as a contrast to Macbeth?', board: 'OCR', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'ocr-lit-ca-2', text: 'How does Dickens present the character of Bob Cratchit and what he represents in A Christmas Carol?', board: 'OCR', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'ocr-lit-ca-3', text: 'How does Orwell present the character of Squealer and his role in maintaining power in Animal Farm?', board: 'OCR', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'ocr-lit-ca-4', text: 'How does Shakespeare present the character of Friar Lawrence and his role in the tragedy of Romeo and Juliet?', board: 'OCR', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'ocr-lit-ca-custom', text: "I'll type my own question", board: 'OCR', paper: 'Literature', questionType: 'Character Analysis' },

  // --- OCR Literature: Theme Analysis ---
  { id: 'ocr-lit-ta-1', text: 'How does Shakespeare explore the theme of appearance versus reality in Macbeth?', board: 'OCR', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'ocr-lit-ta-2', text: 'How does Dickens present the theme of isolation and its consequences in A Christmas Carol?', board: 'OCR', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'ocr-lit-ta-3', text: 'How does Stevenson explore the theme of science and its dangers in Jekyll and Hyde?', board: 'OCR', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'ocr-lit-ta-4', text: 'How does Golding explore the theme of fear and its effects on the boys in Lord of the Flies?', board: 'OCR', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'ocr-lit-ta-custom', text: "I'll type my own question", board: 'OCR', paper: 'Literature', questionType: 'Theme Analysis' },

  // --- OCR Literature: Poetry Comparison ---
  { id: 'ocr-lit-pc-1', text: 'Compare how the poets present ideas about the destructive nature of conflict in two poems you have studied.', board: 'OCR', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'ocr-lit-pc-2', text: 'Compare how the poets present a sense of place and belonging in two poems from the anthology.', board: 'OCR', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'ocr-lit-pc-3', text: 'Compare how two poets explore the theme of power and its abuse in poems from the anthology.', board: 'OCR', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'ocr-lit-pc-custom', text: "I'll type my own question", board: 'OCR', paper: 'Literature', questionType: 'Poetry Comparison' },

  // --- OCR Literature: Unseen Poetry ---
  { id: 'ocr-lit-up-1', text: 'Read the unseen poem. How does the poet present feelings of nostalgia? Consider the use of language, imagery and structure.', board: 'OCR', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'ocr-lit-up-2', text: 'How does the poet create a mood of sadness and reflection in the poem? Refer to specific techniques in your answer.', board: 'OCR', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'ocr-lit-up-3', text: 'Compare the ways the two poets present ideas about change. Use evidence from both poems.', board: 'OCR', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'ocr-lit-up-custom', text: "I'll type my own question", board: 'OCR', paper: 'Literature', questionType: 'Unseen Poetry' },

  // ============================================================
  // WJEC PAPER 1 — 20th Century Literature Reading and Creative Prose Writing
  // ============================================================

  // --- WJEC Paper 1: Information Retrieval ---
  { id: 'wjec-p1-ir-1', text: 'Read lines 1–15 of the extract. List five things you learn about the main character from these lines.', board: 'WJEC', paper: 'Paper 1', questionType: 'Information Retrieval' },
  { id: 'wjec-p1-ir-2', text: 'Read the first section of the extract. What do you learn about the setting and atmosphere?', board: 'WJEC', paper: 'Paper 1', questionType: 'Information Retrieval' },
  { id: 'wjec-p1-ir-3', text: 'Read lines 1–20 of the extract. List four things you learn about the relationship between the two characters.', board: 'WJEC', paper: 'Paper 1', questionType: 'Information Retrieval' },
  { id: 'wjec-p1-ir-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 1', questionType: 'Information Retrieval' },

  // --- WJEC Paper 1: Language Analysis ---
  { id: 'wjec-p1-la-1', text: 'How does the writer use language to create a sense of tension and danger in the extract?', board: 'WJEC', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'wjec-p1-la-2', text: 'How does the writer use language to describe the character\'s emotions in lines 10–30?', board: 'WJEC', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'wjec-p1-la-3', text: 'How does the writer use language to create a vivid picture of the landscape in the extract?', board: 'WJEC', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'wjec-p1-la-4', text: 'Analyse how the writer uses language to engage the reader in the opening of the extract.', board: 'WJEC', paper: 'Paper 1', questionType: 'Language Analysis' },
  { id: 'wjec-p1-la-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 1', questionType: 'Language Analysis' },

  // --- WJEC Paper 1: Evaluation / Comparison ---
  { id: 'wjec-p1-ec-1', text: '"The writer makes the reader feel sorry for the main character." To what extent do you agree with this statement? You should consider the writer\'s use of language, structure and the ideas in the text.', board: 'WJEC', paper: 'Paper 1', questionType: 'Evaluation / Comparison' },
  { id: 'wjec-p1-ec-2', text: '"The ending of this extract is both surprising and satisfying." How far do you agree with this view? Support your answer with detailed reference to the text.', board: 'WJEC', paper: 'Paper 1', questionType: 'Evaluation / Comparison' },
  { id: 'wjec-p1-ec-3', text: '"The writer creates a world that is both fascinating and disturbing." Evaluate how effectively the writer achieves this. Use evidence from the text to support your response.', board: 'WJEC', paper: 'Paper 1', questionType: 'Evaluation / Comparison' },
  { id: 'wjec-p1-ec-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 1', questionType: 'Evaluation / Comparison' },

  // --- WJEC Paper 1: Descriptive Writing ---
  { id: 'wjec-p1-dw-1', text: 'Write a description of a place in winter. You should aim to create a vivid picture for the reader.', board: 'WJEC', paper: 'Paper 1', questionType: 'Descriptive Writing' },
  { id: 'wjec-p1-dw-2', text: 'Describe an outdoor event on a hot summer\'s day. Focus on the sights, sounds and atmosphere.', board: 'WJEC', paper: 'Paper 1', questionType: 'Descriptive Writing' },
  { id: 'wjec-p1-dw-3', text: 'Write a description suggested by this picture: an old, overgrown garden with a broken gate.', board: 'WJEC', paper: 'Paper 1', questionType: 'Descriptive Writing' },
  { id: 'wjec-p1-dw-4', text: 'Describe a moment of calm after a period of chaos. Use precise and engaging language.', board: 'WJEC', paper: 'Paper 1', questionType: 'Descriptive Writing' },
  { id: 'wjec-p1-dw-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 1', questionType: 'Descriptive Writing' },

  // --- WJEC Paper 1: Narrative Writing ---
  { id: 'wjec-p1-nw-1', text: 'Write the opening of a story about a character who discovers something hidden.', board: 'WJEC', paper: 'Paper 1', questionType: 'Narrative Writing' },
  { id: 'wjec-p1-nw-2', text: 'Write a story that begins: "The silence was the first thing I noticed."', board: 'WJEC', paper: 'Paper 1', questionType: 'Narrative Writing' },
  { id: 'wjec-p1-nw-3', text: 'Write a story with the title "The Last Day".', board: 'WJEC', paper: 'Paper 1', questionType: 'Narrative Writing' },
  { id: 'wjec-p1-nw-4', text: 'Write a story about a journey that does not go as planned.', board: 'WJEC', paper: 'Paper 1', questionType: 'Narrative Writing' },
  { id: 'wjec-p1-nw-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 1', questionType: 'Narrative Writing' },

  // ============================================================
  // WJEC PAPER 2 — 19th and 21st Century Non-Fiction Reading and Transactional/Persuasive Writing
  // ============================================================

  // --- WJEC Paper 2: Information Retrieval ---
  { id: 'wjec-p2-ir-1', text: 'Read the 21st-century non-fiction text. What do you learn about the writer\'s views on modern technology?', board: 'WJEC', paper: 'Paper 2', questionType: 'Information Retrieval' },
  { id: 'wjec-p2-ir-2', text: 'Read lines 1–15 of the 19th-century source. List five things you learn about the conditions in the workhouse.', board: 'WJEC', paper: 'Paper 2', questionType: 'Information Retrieval' },
  { id: 'wjec-p2-ir-3', text: 'Read the first section of Source A. What do you learn about the writer\'s attitude to the people they encountered?', board: 'WJEC', paper: 'Paper 2', questionType: 'Information Retrieval' },
  { id: 'wjec-p2-ir-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 2', questionType: 'Information Retrieval' },

  // --- WJEC Paper 2: Summary ---
  { id: 'wjec-p2-sum-1', text: 'Both texts are about experiences of travel. Using information from both texts, write a summary of what you learn about the different travel experiences described.', board: 'WJEC', paper: 'Paper 2', questionType: 'Summary' },
  { id: 'wjec-p2-sum-2', text: 'Using details from both texts, summarise the different attitudes the writers have towards life in the city.', board: 'WJEC', paper: 'Paper 2', questionType: 'Summary' },
  { id: 'wjec-p2-sum-3', text: 'Both texts describe experiences of hardship. Summarise the different kinds of hardship the writers describe, using evidence from both texts.', board: 'WJEC', paper: 'Paper 2', questionType: 'Summary' },
  { id: 'wjec-p2-sum-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 2', questionType: 'Summary' },

  // --- WJEC Paper 2: Language Analysis ---
  { id: 'wjec-p2-la-1', text: 'How does the writer use language to express their viewpoint about the importance of the natural environment?', board: 'WJEC', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'wjec-p2-la-2', text: 'How does the 19th-century writer use language to describe the poverty they witnessed?', board: 'WJEC', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'wjec-p2-la-3', text: 'Analyse how the writer of the 21st-century text uses language to engage and persuade the reader.', board: 'WJEC', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'wjec-p2-la-4', text: 'How does the writer use language to convey a sense of wonder about scientific discovery?', board: 'WJEC', paper: 'Paper 2', questionType: 'Language Analysis' },
  { id: 'wjec-p2-la-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 2', questionType: 'Language Analysis' },

  // --- WJEC Paper 2: Comparison of Perspectives ---
  { id: 'wjec-p2-cop-1', text: 'Compare and contrast the two writers\' attitudes to childhood. You should consider: what the writers say about childhood, how they use language and structure to convey their views.', board: 'WJEC', paper: 'Paper 2', questionType: 'Comparison of Perspectives' },
  { id: 'wjec-p2-cop-2', text: 'Both writers express views about the role of women in society. Compare and contrast their perspectives using evidence from both texts.', board: 'WJEC', paper: 'Paper 2', questionType: 'Comparison of Perspectives' },
  { id: 'wjec-p2-cop-3', text: 'Compare how the two writers present their different attitudes to progress and change. You must use evidence from both texts.', board: 'WJEC', paper: 'Paper 2', questionType: 'Comparison of Perspectives' },
  { id: 'wjec-p2-cop-4', text: 'Compare how the two writers present their views on the importance of education. Consider both what they say and how they say it.', board: 'WJEC', paper: 'Paper 2', questionType: 'Comparison of Perspectives' },
  { id: 'wjec-p2-cop-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 2', questionType: 'Comparison of Perspectives' },

  // --- WJEC Paper 2: Persuasive Writing ---
  { id: 'wjec-p2-pw-1', text: '"Young people are not doing enough to protect the environment." Write a persuasive article for a national newspaper in which you argue your point of view.', board: 'WJEC', paper: 'Paper 2', questionType: 'Persuasive Writing' },
  { id: 'wjec-p2-pw-2', text: 'Write a persuasive text aimed at parents explaining why teenagers need more independence.', board: 'WJEC', paper: 'Paper 2', questionType: 'Persuasive Writing' },
  { id: 'wjec-p2-pw-3', text: '"Physical education should be compulsory every day in schools." Write a persuasive piece arguing your viewpoint on this issue.', board: 'WJEC', paper: 'Paper 2', questionType: 'Persuasive Writing' },
  { id: 'wjec-p2-pw-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 2', questionType: 'Persuasive Writing' },

  // --- WJEC Paper 2: Argumentative Writing ---
  { id: 'wjec-p2-aw-1', text: '"Artificial intelligence will do more harm than good to society." Write an article for a magazine in which you argue for or against this view.', board: 'WJEC', paper: 'Paper 2', questionType: 'Argumentative Writing' },
  { id: 'wjec-p2-aw-2', text: '"University education should be free for everyone." Write a balanced argument for a broadsheet newspaper exploring this issue.', board: 'WJEC', paper: 'Paper 2', questionType: 'Argumentative Writing' },
  { id: 'wjec-p2-aw-3', text: '"Competitive sport does more harm than good to young people." Write an argument presenting your viewpoint on this issue.', board: 'WJEC', paper: 'Paper 2', questionType: 'Argumentative Writing' },
  { id: 'wjec-p2-aw-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 2', questionType: 'Argumentative Writing' },

  // --- WJEC Paper 2: Letter Writing ---
  { id: 'wjec-p2-lw-1', text: 'Write a letter to the leader of your local council explaining why more youth services are needed in your area and persuading them to take action.', board: 'WJEC', paper: 'Paper 2', questionType: 'Letter Writing' },
  { id: 'wjec-p2-lw-2', text: 'Write a letter to a national newspaper expressing your views on the proposal to extend the school day.', board: 'WJEC', paper: 'Paper 2', questionType: 'Letter Writing' },
  { id: 'wjec-p2-lw-3', text: 'Write a letter to your headteacher suggesting improvements to the school canteen and explaining why these changes would benefit students.', board: 'WJEC', paper: 'Paper 2', questionType: 'Letter Writing' },
  { id: 'wjec-p2-lw-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 2', questionType: 'Letter Writing' },

  // --- WJEC Paper 2: Article Writing ---
  { id: 'wjec-p2-artw-1', text: 'Write an article for a magazine aimed at young people about the importance of mental health awareness.', board: 'WJEC', paper: 'Paper 2', questionType: 'Article Writing' },
  { id: 'wjec-p2-artw-2', text: '"Screen time is ruining family life." Write an article for a newspaper in which you explore this issue.', board: 'WJEC', paper: 'Paper 2', questionType: 'Article Writing' },
  { id: 'wjec-p2-artw-3', text: 'Write an article for your school magazine about the benefits of learning a musical instrument.', board: 'WJEC', paper: 'Paper 2', questionType: 'Article Writing' },
  { id: 'wjec-p2-artw-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 2', questionType: 'Article Writing' },

  // --- WJEC Paper 2: Speech Writing ---
  { id: 'wjec-p2-sw-1', text: 'Write a speech to deliver at a school assembly about why it is important to stand up against bullying.', board: 'WJEC', paper: 'Paper 2', questionType: 'Speech Writing' },
  { id: 'wjec-p2-sw-2', text: '"Our generation will be the one to solve climate change." Write a speech to deliver to your year group in which you inspire them to take environmental action.', board: 'WJEC', paper: 'Paper 2', questionType: 'Speech Writing' },
  { id: 'wjec-p2-sw-3', text: 'Write a speech to deliver to local business leaders persuading them to offer more work experience placements for young people.', board: 'WJEC', paper: 'Paper 2', questionType: 'Speech Writing' },
  { id: 'wjec-p2-sw-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 2', questionType: 'Speech Writing' },

  // --- WJEC Paper 2: Review Writing ---
  { id: 'wjec-p2-rw-1', text: 'Write a review of a book you have read recently for a school newsletter. Include your opinions and recommendations.', board: 'WJEC', paper: 'Paper 2', questionType: 'Review Writing' },
  { id: 'wjec-p2-rw-2', text: 'Write a review of a film, TV series, or documentary for a magazine aimed at teenagers.', board: 'WJEC', paper: 'Paper 2', questionType: 'Review Writing' },
  { id: 'wjec-p2-rw-3', text: 'Write a review of a place you have visited (such as a museum, theme park, or tourist attraction) for a travel website.', board: 'WJEC', paper: 'Paper 2', questionType: 'Review Writing' },
  { id: 'wjec-p2-rw-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Paper 2', questionType: 'Review Writing' },

  // ============================================================
  // WJEC LITERATURE
  // ============================================================

  // --- WJEC Literature: Extract-Based Analysis ---
  { id: 'wjec-lit-eba-1', text: 'Read the following extract from Act 2 Scene 1 of Macbeth. How does Shakespeare create a sense of horror in this extract? You should refer to the context of the play in your answer.', board: 'WJEC', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'wjec-lit-eba-2', text: 'Read the following extract from Stave 1 of A Christmas Carol. How does Dickens use this extract to present ideas about wealth and generosity?', board: 'WJEC', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'wjec-lit-eba-3', text: 'Read the following extract from An Inspector Calls. How does Priestley present ideas about social responsibility in this extract and the wider play?', board: 'WJEC', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'wjec-lit-eba-4', text: 'Read the following extract from Act 3 Scene 5 of Romeo and Juliet. How does Shakespeare present the relationship between Juliet and her parents?', board: 'WJEC', paper: 'Literature', questionType: 'Extract-Based Analysis' },
  { id: 'wjec-lit-eba-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Literature', questionType: 'Extract-Based Analysis' },

  // --- WJEC Literature: Essay Response ---
  { id: 'wjec-lit-er-1', text: 'How does Shakespeare present ideas about kingship and tyranny in Macbeth?', board: 'WJEC', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'wjec-lit-er-2', text: 'How does Dickens use the three Ghosts to change Scrooge in A Christmas Carol?', board: 'WJEC', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'wjec-lit-er-3', text: 'How does Priestley present the differences between the older and younger generations in An Inspector Calls?', board: 'WJEC', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'wjec-lit-er-4', text: 'How does Shakespeare present the theme of fate in Romeo and Juliet?', board: 'WJEC', paper: 'Literature', questionType: 'Essay Response' },
  { id: 'wjec-lit-er-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Literature', questionType: 'Essay Response' },

  // --- WJEC Literature: Character Analysis ---
  { id: 'wjec-lit-ca-1', text: 'How does Shakespeare present the character of Macbeth as both a villain and a victim?', board: 'WJEC', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'wjec-lit-ca-2', text: 'How does Dickens present the Ghost of Christmas Past and its effect on Scrooge?', board: 'WJEC', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'wjec-lit-ca-3', text: 'How does Priestley present Gerald Croft and what he represents in An Inspector Calls?', board: 'WJEC', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'wjec-lit-ca-4', text: 'How does Golding present the character of Ralph and his struggle to maintain order in Lord of the Flies?', board: 'WJEC', paper: 'Literature', questionType: 'Character Analysis' },
  { id: 'wjec-lit-ca-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Literature', questionType: 'Character Analysis' },

  // --- WJEC Literature: Theme Analysis ---
  { id: 'wjec-lit-ta-1', text: 'How does Shakespeare explore the theme of loyalty and betrayal in Macbeth?', board: 'WJEC', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'wjec-lit-ta-2', text: 'How does Dickens explore the theme of memory and regret in A Christmas Carol?', board: 'WJEC', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'wjec-lit-ta-3', text: 'How does Priestley explore ideas about justice and morality in An Inspector Calls?', board: 'WJEC', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'wjec-lit-ta-4', text: 'How does Orwell explore the theme of propaganda and manipulation in Animal Farm?', board: 'WJEC', paper: 'Literature', questionType: 'Theme Analysis' },
  { id: 'wjec-lit-ta-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Literature', questionType: 'Theme Analysis' },

  // --- WJEC Literature: Poetry Comparison ---
  { id: 'wjec-lit-pc-1', text: 'Compare how the poets present the effects of war on individuals in two poems you have studied.', board: 'WJEC', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'wjec-lit-pc-2', text: 'Compare how two poets explore the theme of love and relationships in poems from the anthology.', board: 'WJEC', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'wjec-lit-pc-3', text: 'Compare how the poets use nature to convey their feelings in two poems from the anthology.', board: 'WJEC', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'wjec-lit-pc-4', text: 'Compare how two poets present ideas about death and mortality in poems you have studied.', board: 'WJEC', paper: 'Literature', questionType: 'Poetry Comparison' },
  { id: 'wjec-lit-pc-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Literature', questionType: 'Poetry Comparison' },

  // --- WJEC Literature: Unseen Poetry ---
  { id: 'wjec-lit-up-1', text: 'Read the unseen poem. How does the poet convey feelings about home and belonging? You should write about the poet\'s use of language, imagery and structure.', board: 'WJEC', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'wjec-lit-up-2', text: 'How does the poet explore the experience of growing up in the poem? Consider the poet\'s choices of language and form.', board: 'WJEC', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'wjec-lit-up-3', text: 'Now read the second poem. Compare the ways the two poets present ideas about the relationship between humans and nature.', board: 'WJEC', paper: 'Literature', questionType: 'Unseen Poetry' },
  { id: 'wjec-lit-up-custom', text: "I'll type my own question", board: 'WJEC', paper: 'Literature', questionType: 'Unseen Poetry' },
]

export function getQuestionsForType(board: string, paper: string, questionType: string): ExamQuestion[] {
  return examQuestions.filter(q => q.board === board && q.paper === paper && q.questionType === questionType)
}
