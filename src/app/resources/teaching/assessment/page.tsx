"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Role guard ──────────────────────────────────────────────── */
const MOCK_USER_ROLE: "student" | "teacher" | "parent" = "teacher";

/* ─── Types ───────────────────────────────────────────────────── */

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

interface EssayQuestion {
  id: string;
  text: string;
  subject: string;
  topic: string;
  marks: number;
  examBoard: string;
  markSchemeRef: string;
}

interface MarkSchemeLevel {
  level: string;
  descriptor: string;
}

interface MarkSchemeTemplate {
  title: string;
  examBoard: string;
  levels: MarkSchemeLevel[];
}

/* ─── Quiz data (5 texts x 10 questions each) ────────────────── */

const QUIZ_TOPICS: Record<string, QuizQuestion[]> = {
  Macbeth: [
    { question: "Who tells Macbeth he will become King?", options: ["Lady Macbeth", "The three witches", "Banquo", "King Duncan"], correctIndex: 1 },
    { question: "What literary device is used when Macbeth sees a dagger before him?", options: ["Simile", "Personification", "Hallucination / soliloquy", "Oxymoron"], correctIndex: 2 },
    { question: "Which theme is NOT central to Macbeth?", options: ["Ambition", "Guilt", "Romantic love", "The supernatural"], correctIndex: 2 },
    { question: "'Fair is foul, and foul is fair' is an example of:", options: ["Metaphor", "Paradox / equivocation", "Alliteration only", "Hyperbole"], correctIndex: 1 },
    { question: "Lady Macbeth's sleepwalking scene primarily reveals her:", options: ["Ambition", "Guilt", "Love for Macbeth", "Fear of the witches"], correctIndex: 1 },
    { question: "What does Macbeth see at the banquet that terrifies him?", options: ["A dagger", "The witches", "Banquo's ghost", "Lady Macbeth weeping"], correctIndex: 2 },
    { question: "Who kills Macbeth at the end of the play?", options: ["Malcolm", "Macduff", "Banquo", "Ross"], correctIndex: 1 },
    { question: "The witches' prophecy about Birnam Wood coming to Dunsinane is fulfilled when:", options: ["Trees magically move", "Soldiers carry branches as camouflage", "A storm blows trees towards the castle", "Macbeth hallucinates"], correctIndex: 1 },
    { question: "Which character represents the divine right of kings and legitimate rule?", options: ["Macbeth", "Duncan", "Lady Macbeth", "The Porter"], correctIndex: 1 },
    { question: "'Will all great Neptune's ocean wash this blood clean from my hand?' is an example of:", options: ["Simile", "Hyperbole", "Personification", "Alliteration"], correctIndex: 1 },
  ],
  "A Christmas Carol": [
    { question: "How many ghosts visit Scrooge in total (including Marley)?", options: ["Three", "Four", "Five", "Two"], correctIndex: 1 },
    { question: "What are the chapters of A Christmas Carol called?", options: ["Chapters", "Acts", "Staves", "Verses"], correctIndex: 2 },
    { question: "Dickens wrote A Christmas Carol partly to highlight:", options: ["The beauty of Christmas traditions", "Victorian poverty and social injustice", "The importance of family meals", "Gothic literature conventions"], correctIndex: 1 },
    { question: "'Hard and sharp as flint' is a:", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], correctIndex: 1 },
    { question: "Ignorance and Want are presented as children clinging to the Ghost of Christmas:", options: ["Past", "Present", "Yet to Come", "Marley"], correctIndex: 1 },
    { question: "What is Tiny Tim's famous line?", options: ["'Merry Christmas!'", "'God bless us, every one!'", "'A merry Christmas, Uncle!'", "'I will honour Christmas in my heart'"], correctIndex: 1 },
    { question: "Scrooge's former business partner is:", options: ["Bob Cratchit", "Fred", "Jacob Marley", "Fan"], correctIndex: 2 },
    { question: "The Ghost of Christmas Past shows Scrooge his time at:", options: ["University", "Fezziwig's warehouse", "The workhouse", "Parliament"], correctIndex: 1 },
    { question: "What does Marley's ghost wear that symbolises his sins?", options: ["A top hat", "Chains made of cash boxes and keys", "A black cloak", "Iron boots"], correctIndex: 1 },
    { question: "Dickens uses the novella form because it was:", options: ["The only form he knew", "Affordable and accessible to a wide readership", "Required by his publisher", "Popular among the aristocracy"], correctIndex: 1 },
  ],
  "An Inspector Calls": [
    { question: "In what year is An Inspector Calls set?", options: ["1945", "1912", "1918", "1939"], correctIndex: 1 },
    { question: "What is the Inspector's name?", options: ["Inspector Morse", "Inspector Goole", "Inspector Smith", "Inspector Birling"], correctIndex: 1 },
    { question: "Priestley's main message in the play is about:", options: ["Romantic relationships", "Social responsibility", "The importance of wealth", "Crime investigation techniques"], correctIndex: 1 },
    { question: "Which character shows the most change by the end of the play?", options: ["Mr Birling", "Mrs Birling", "Sheila", "Gerald"], correctIndex: 2 },
    { question: "The play is set in 1912 but written in 1945. This creates:", options: ["Suspense", "Dramatic irony", "Pathos", "Comic relief"], correctIndex: 1 },
    { question: "Mr Birling's speech about the Titanic being 'unsinkable' demonstrates his:", options: ["Intelligence", "Foolishness and dramatic irony", "Kindness", "Love for his family"], correctIndex: 1 },
    { question: "Eva Smith changed her name to:", options: ["Sheila Birling", "Daisy Renton", "Mrs Birling", "Sybil"], correctIndex: 1 },
    { question: "What did Mrs Birling do to Eva/Daisy?", options: ["Fired her from a job", "Refused her charity appeal", "Stole from her", "Ignored her at a party"], correctIndex: 1 },
    { question: "The Inspector's final speech warns about:", options: ["War", "Fire, blood and anguish", "Economic collapse", "Further investigation"], correctIndex: 1 },
    { question: "Priestley uses the unity of time, place and action. This is a feature of:", options: ["Epic theatre", "The well-made play", "Greek tragedy / classical unities", "Absurdist drama"], correctIndex: 2 },
  ],
  "Jekyll and Hyde": [
    { question: "What does the door symbolise in Jekyll and Hyde?", options: ["Wealth", "Duality / secrecy", "Friendship", "Religion"], correctIndex: 1 },
    { question: "Stevenson wrote Jekyll and Hyde during which era?", options: ["Georgian", "Elizabethan", "Victorian", "Modern"], correctIndex: 2 },
    { question: "Hyde is described using language associated with:", options: ["Royalty", "Animals / primitiveness", "Angels", "Scholars"], correctIndex: 1 },
    { question: "The novella explores the concept of:", options: ["Romantic love", "Time travel", "Duality of human nature", "Political revolution"], correctIndex: 2 },
    { question: "Who narrates most of the novella?", options: ["Jekyll", "Hyde", "Utterson", "Lanyon"], correctIndex: 2 },
    { question: "Dr Lanyon dies after witnessing:", options: ["Hyde committing a murder", "Jekyll's transformation", "A robbery", "The destruction of the laboratory"], correctIndex: 1 },
    { question: "Hyde tramples a young girl in the street. What does this reveal about him?", options: ["His clumsiness", "His cruelty and lack of conscience", "His poor eyesight", "His hurry to get home"], correctIndex: 1 },
    { question: "Jekyll describes Hyde as his 'full sea of liberty'. This means Hyde represents:", options: ["Jekyll's wealth", "Jekyll's suppressed desires freed from moral restraint", "Jekyll's love of the ocean", "Jekyll's scientific achievement"], correctIndex: 1 },
    { question: "The setting of foggy, gas-lit London streets creates an atmosphere of:", options: ["Romance", "Comedy", "Mystery and menace", "Celebration"], correctIndex: 2 },
    { question: "Stevenson's novella reflects contemporary anxieties about:", options: ["Space exploration", "Darwin's theory of evolution and degeneration", "The Industrial Revolution alone", "Women's suffrage"], correctIndex: 1 },
  ],
  "Lord of the Flies": [
    { question: "What does the conch shell symbolise?", options: ["Danger", "Democracy and civilised order", "Nature", "Savagery"], correctIndex: 1 },
    { question: "Who is the first boy Ralph meets on the island?", options: ["Jack", "Simon", "Piggy", "Roger"], correctIndex: 2 },
    { question: "What is 'the beast' on the mountain actually revealed to be?", options: ["A wild boar", "A dead parachutist", "Simon", "A rock formation"], correctIndex: 1 },
    { question: "Which character represents innate human goodness and spirituality?", options: ["Ralph", "Jack", "Simon", "Piggy"], correctIndex: 2 },
    { question: "Jack's tribe paints their faces. This symbolises:", options: ["Celebration", "The loss of identity and civilisation", "War paint for protection", "Artistic expression"], correctIndex: 1 },
    { question: "Who kills Piggy?", options: ["Jack", "Roger", "Ralph", "The beast"], correctIndex: 1 },
    { question: "The 'Lord of the Flies' is literally:", options: ["A giant insect", "The pig's head on a stick", "The beast", "Jack's nickname"], correctIndex: 1 },
    { question: "Golding wrote the novel partly in response to:", options: ["Victorian literature", "World War II and the capacity for human evil", "The American Civil War", "Climate change"], correctIndex: 1 },
    { question: "Ralph weeps at the end of the novel for:", options: ["Being rescued", "The loss of innocence and the darkness of man's heart", "Missing his parents", "Losing the conch"], correctIndex: 1 },
    { question: "The fire on the island symbolises:", options: ["Destruction only", "Hope, rescue and connection to civilisation", "Jack's power", "Fear"], correctIndex: 1 },
  ],
};

/* ─── Essay question bank (20+ questions) ─────────────────────── */

const ESSAY_QUESTIONS: EssayQuestion[] = [
  // Macbeth
  { id: "eq1", text: "How does Shakespeare present the theme of ambition in Macbeth?", subject: "English Literature", topic: "Macbeth", marks: 30, examBoard: "AQA", markSchemeRef: "AO1, AO2, AO3 — AQA Lit Paper 1 Section A" },
  { id: "eq2", text: "How does Shakespeare use the supernatural to influence Macbeth's actions? Refer to the whole play.", subject: "English Literature", topic: "Macbeth", marks: 30, examBoard: "AQA", markSchemeRef: "AO1, AO2, AO3 — AQA Lit Paper 1 Section A" },
  { id: "eq3", text: "Starting with this extract, how does Shakespeare present the relationship between Macbeth and Lady Macbeth?", subject: "English Literature", topic: "Macbeth", marks: 30, examBoard: "AQA", markSchemeRef: "AO1, AO2, AO3 — AQA Lit Paper 1 Section A" },
  { id: "eq4", text: "Explore the significance of guilt in Macbeth. You should consider the whole play in your answer.", subject: "English Literature", topic: "Macbeth", marks: 40, examBoard: "Edexcel", markSchemeRef: "AO1, AO2, AO3, AO4 — Edexcel Lit Paper 1" },

  // A Christmas Carol
  { id: "eq5", text: "How does Dickens present Scrooge's transformation in A Christmas Carol?", subject: "English Literature", topic: "A Christmas Carol", marks: 30, examBoard: "AQA", markSchemeRef: "AO1, AO2, AO3 — AQA Lit Paper 1 Section B" },
  { id: "eq6", text: "How does Dickens use the Ghost of Christmas Present to convey his message about social inequality?", subject: "English Literature", topic: "A Christmas Carol", marks: 30, examBoard: "AQA", markSchemeRef: "AO1, AO2, AO3 — AQA Lit Paper 1 Section B" },
  { id: "eq7", text: "How does Dickens present the theme of redemption in A Christmas Carol?", subject: "English Literature", topic: "A Christmas Carol", marks: 40, examBoard: "Edexcel", markSchemeRef: "AO1, AO2, AO3, AO4 — Edexcel Lit Paper 1" },

  // An Inspector Calls
  { id: "eq8", text: "How does Priestley present ideas about responsibility in An Inspector Calls?", subject: "English Literature", topic: "An Inspector Calls", marks: 30, examBoard: "AQA", markSchemeRef: "AO1, AO2, AO3 — AQA Lit Paper 2 Section A" },
  { id: "eq9", text: "How does Priestley use the character of the Inspector to convey his message?", subject: "English Literature", topic: "An Inspector Calls", marks: 30, examBoard: "AQA", markSchemeRef: "AO1, AO2, AO3 — AQA Lit Paper 2 Section A" },
  { id: "eq10", text: "How does Priestley present the theme of social class in An Inspector Calls?", subject: "English Literature", topic: "An Inspector Calls", marks: 40, examBoard: "Edexcel", markSchemeRef: "AO1, AO2, AO3, AO4 — Edexcel Lit Paper 1" },

  // Jekyll and Hyde
  { id: "eq11", text: "How does Stevenson present the theme of duality in Jekyll and Hyde?", subject: "English Literature", topic: "Jekyll and Hyde", marks: 30, examBoard: "AQA", markSchemeRef: "AO1, AO2, AO3 — AQA Lit Paper 1 Section B" },
  { id: "eq12", text: "How does Stevenson use setting to create atmosphere in Jekyll and Hyde?", subject: "English Literature", topic: "Jekyll and Hyde", marks: 30, examBoard: "AQA", markSchemeRef: "AO1, AO2, AO3 — AQA Lit Paper 1 Section B" },
  { id: "eq13", text: "How does Stevenson present Hyde as a frightening outsider?", subject: "English Literature", topic: "Jekyll and Hyde", marks: 40, examBoard: "Edexcel", markSchemeRef: "AO1, AO2, AO3, AO4 — Edexcel Lit Paper 1" },

  // Lord of the Flies
  { id: "eq14", text: "How does Golding present the conflict between civilisation and savagery in Lord of the Flies?", subject: "English Literature", topic: "Lord of the Flies", marks: 40, examBoard: "Edexcel", markSchemeRef: "AO1, AO2, AO3, AO4 — Edexcel Lit Paper 1" },
  { id: "eq15", text: "How does Golding use Simon to explore the theme of innate human goodness?", subject: "English Literature", topic: "Lord of the Flies", marks: 40, examBoard: "Edexcel", markSchemeRef: "AO1, AO2, AO3, AO4 — Edexcel Lit Paper 1" },

  // Poetry
  { id: "eq16", text: "Compare how poets present the theme of power in two poems from the anthology.", subject: "English Literature", topic: "Poetry", marks: 30, examBoard: "AQA", markSchemeRef: "AO1, AO2, AO3 — AQA Lit Paper 2 Section B" },
  { id: "eq17", text: "Compare how poets present the effects of conflict in two poems from the anthology.", subject: "English Literature", topic: "Poetry", marks: 30, examBoard: "AQA", markSchemeRef: "AO1, AO2, AO3 — AQA Lit Paper 2 Section B" },

  // Language
  { id: "eq18", text: "Write a description suggested by this picture. (Creative writing — descriptive)", subject: "English Language", topic: "Creative Writing", marks: 40, examBoard: "AQA", markSchemeRef: "AO5 (Content & Organisation 24), AO6 (Technical Accuracy 16) — AQA Lang Paper 1 Q5" },
  { id: "eq19", text: "'Social media has a negative impact on young people.' Write an article for a broadsheet newspaper arguing for or against this statement.", subject: "English Language", topic: "Persuasive Writing", marks: 40, examBoard: "AQA", markSchemeRef: "AO5 (Content & Organisation 24), AO6 (Technical Accuracy 16) — AQA Lang Paper 2 Q5" },
  { id: "eq20", text: "How does the writer use language to describe the setting? Refer to the extract in your answer.", subject: "English Language", topic: "Language Analysis", marks: 12, examBoard: "AQA", markSchemeRef: "AO2 — AQA Lang Paper 1 Q2" },
  { id: "eq21", text: "Write a story about a time when everything changed. (Narrative writing)", subject: "English Language", topic: "Creative Writing", marks: 40, examBoard: "AQA", markSchemeRef: "AO5 (Content & Organisation 24), AO6 (Technical Accuracy 16) — AQA Lang Paper 1 Q5" },
  { id: "eq22", text: "'School uniforms should be abolished.' Write a speech to deliver to your headteacher arguing your point of view.", subject: "English Language", topic: "Persuasive Writing", marks: 40, examBoard: "AQA", markSchemeRef: "AO5 (Content & Organisation 24), AO6 (Technical Accuracy 16) — AQA Lang Paper 2 Q5" },
  { id: "eq23", text: "How does the writer use structure to interest you as a reader? Refer to the whole source.", subject: "English Language", topic: "Language Analysis", marks: 8, examBoard: "AQA", markSchemeRef: "AO2 — AQA Lang Paper 1 Q3" },
  { id: "eq24", text: "Write a letter to your local MP arguing that more should be done to tackle climate change.", subject: "English Language", topic: "Persuasive Writing", marks: 40, examBoard: "Edexcel", markSchemeRef: "AO5, AO6 — Edexcel Lang Paper 2 Section B" },
];

/* ─── Mark scheme templates ───────────────────────────────────── */

const MARK_SCHEME_TEMPLATES: MarkSchemeTemplate[] = [
  {
    title: "AQA Literature Essay (30 marks)",
    examBoard: "AQA",
    levels: [
      { level: "Level 6 (26-30)", descriptor: "Convincing, critical analysis with well-integrated subject terminology. Perceptive understanding of context and its influence on the text." },
      { level: "Level 5 (21-25)", descriptor: "Thoughtful, developed response with clear analysis. Apt use of subject terminology. Thoughtful, detailed links to context." },
      { level: "Level 4 (16-20)", descriptor: "Clear, explained response with relevant references. Clear understanding of techniques and their effects. Clear understanding of context." },
      { level: "Level 3 (11-15)", descriptor: "Some understanding and explanation. Attempts to comment on language/structure with some relevant context." },
      { level: "Level 2 (6-10)", descriptor: "Supported response with some relevant comments. Limited awareness of techniques. Some reference to context." },
      { level: "Level 1 (1-5)", descriptor: "Simple, limited response. Very little awareness of language, form, or context." },
    ],
  },
  {
    title: "AQA Language Paper 1 Q5 — Creative Writing (40 marks)",
    examBoard: "AQA",
    levels: [
      { level: "Content Level 4 (19-24)", descriptor: "Compelling, convincing communication. Extensive, ambitious vocabulary. Sustained crafting of linguistic devices. Varied, inventive structural features." },
      { level: "Content Level 3 (13-18)", descriptor: "Clearly and effectively communicated. Increasingly sophisticated vocabulary. Varied linguistic devices. Effective structural features." },
      { level: "Content Level 2 (7-12)", descriptor: "Some successful communication. Attempts at varied vocabulary. Some use of linguistic devices. Attempts at structural features." },
      { level: "Content Level 1 (1-6)", descriptor: "Simple, limited communication. Simple vocabulary. Random or absent linguistic devices. Minimal structural features." },
      { level: "Technical Level 4 (13-16)", descriptor: "Extensive, accurate sentence forms for effect. Secure, consistent spelling and punctuation. Wide range of punctuation used accurately." },
      { level: "Technical Level 3 (9-12)", descriptor: "Varied sentence forms. Generally secure spelling and punctuation with some errors. Some range of punctuation." },
      { level: "Technical Level 2 (5-8)", descriptor: "Some variety of sentence forms. Some accurate spelling; errors in more complex words. Some punctuation." },
      { level: "Technical Level 1 (1-4)", descriptor: "Simple sentence forms. Frequent errors in spelling. Very limited punctuation." },
    ],
  },
  {
    title: "AQA Language Paper 2 Q5 — Viewpoint Writing (40 marks)",
    examBoard: "AQA",
    levels: [
      { level: "Content Level 4 (19-24)", descriptor: "Compelling, convincing communication matched to purpose. Assured, extensive vocabulary with sustained register. Compelling use of linguistic devices." },
      { level: "Content Level 3 (13-18)", descriptor: "Clearly and consistently matched to purpose. Increasingly sophisticated vocabulary. Clear awareness of register. Varied linguistic devices." },
      { level: "Content Level 2 (7-12)", descriptor: "Some awareness of purpose and audience. Some varied vocabulary. Attempts at register. Some linguistic devices." },
      { level: "Content Level 1 (1-6)", descriptor: "Limited awareness of purpose. Simple vocabulary. Limited or no sense of register." },
      { level: "Technical Level 4 (13-16)", descriptor: "Wide range of accurate sentence forms. High level of accuracy in spelling, punctuation, and grammar." },
      { level: "Technical Level 3 (9-12)", descriptor: "Variety of sentence forms. Generally accurate spelling, punctuation, and grammar." },
      { level: "Technical Level 2 (5-8)", descriptor: "Some sentence variety. Spelling mostly accurate for simple words. Some punctuation." },
      { level: "Technical Level 1 (1-4)", descriptor: "Limited sentence forms. Frequent errors across spelling and punctuation." },
    ],
  },
  {
    title: "Edexcel Literature Essay (40 marks)",
    examBoard: "Edexcel",
    levels: [
      { level: "Level 5 (33-40)", descriptor: "Assured, personal response with cogent argument. Precise, apt textual references integrated into interpretation. Perceptive analysis of language, form and structure. Convincing, evaluative engagement with context (AO3)." },
      { level: "Level 4 (25-32)", descriptor: "Sustained, coherent interpretation. Well-chosen textual references support ideas. Detailed analysis of language, form and structure. Thoughtful consideration of context." },
      { level: "Level 3 (17-24)", descriptor: "Developed personal response. Relevant textual references. Explanation of effects of language, form and structure. Understanding of relevant contexts." },
      { level: "Level 2 (9-16)", descriptor: "Some supported personal response. Some appropriate references. Some comment on language, form and structure. Some awareness of context." },
      { level: "Level 1 (1-8)", descriptor: "Simple personal response. Limited textual reference. Simple identification of language, form and structure. Limited awareness of context." },
    ],
  },
  {
    title: "Edexcel Language Writing (40 marks)",
    examBoard: "Edexcel",
    levels: [
      { level: "Level 5 (33-40)", descriptor: "Communication is convincing and compelling throughout. Tone, style and register are assured and matched to purpose. Sophisticated vocabulary and phrasing. Varied, controlled sentence structures. Spelling, punctuation and grammar are virtually flawless." },
      { level: "Level 4 (25-32)", descriptor: "Communication is effectively matched to purpose throughout. Tone, style and register are consistently appropriate. Wide vocabulary used effectively. Good variety of sentence structures. Spelling, punctuation and grammar are secure with few errors." },
      { level: "Level 3 (17-24)", descriptor: "Communication is generally appropriate to purpose. Tone and register are mostly appropriate. Vocabulary is reasonably varied. Some variety in sentence structures. Spelling, punctuation and grammar are mostly accurate." },
      { level: "Level 2 (9-16)", descriptor: "Some awareness of purpose in communication. Some attempt at appropriate tone. Vocabulary is simple but sometimes effective. Limited sentence variety. Errors in spelling, punctuation and grammar are noticeable." },
      { level: "Level 1 (1-8)", descriptor: "Limited communication. Little awareness of audience or purpose. Very basic vocabulary. Simple sentence structures. Frequent errors impede meaning." },
    ],
  },
  {
    title: "Generic GCSE Marking Criteria",
    examBoard: "Generic",
    levels: [
      { level: "Grade 8-9", descriptor: "Critical, exploratory, conceptualised response. Judicious, precise textual references. Sophisticated analysis of methods. Convincing engagement with context. Original, perceptive interpretation." },
      { level: "Grade 6-7", descriptor: "Thoughtful, developed response. Well-chosen textual support. Detailed, clear analysis of methods. Thoughtful exploration of context. Personal, engaged interpretation." },
      { level: "Grade 4-5", descriptor: "Clear understanding with explained ideas. Relevant references. Clear explanation of effects of methods. Clear understanding of context. Some personal response." },
      { level: "Grade 2-3", descriptor: "Supported response with awareness of the text. Some reference to methods. Some awareness of context. Descriptive rather than analytical." },
      { level: "Grade 1", descriptor: "Simple, limited response. Paraphrase rather than analysis. Little or no reference to methods or context." },
    ],
  },
];

/* ─── Progress tracker templates ──────────────────────────────── */

const PROGRESS_TRACKERS = [
  {
    title: "Literature Text Tracker",
    description: "Track student progress across all studied texts with grade boundaries and target grades.",
    columns: ["Student Name", "Macbeth", "ACC", "AIC", "J&H", "R&J", "Poetry", "Average", "Target", "Gap"],
  },
  {
    title: "Language Skills Tracker",
    description: "Monitor development of reading and writing skills across both Language papers.",
    columns: ["Student Name", "P1 Q1", "P1 Q2", "P1 Q3", "P1 Q4", "P1 Q5", "P2 Q1", "P2 Q2", "P2 Q3", "P2 Q4", "P2 Q5"],
  },
  {
    title: "Weekly Homework Tracker",
    description: "Log homework completion, quality, and feedback across the half-term.",
    columns: ["Student Name", "Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Completion %"],
  },
];

/* ─── Skills checklist data ──────────────────────────────────── */

const SKILLS_CHECKLIST = {
  "Literature Skills": [
    "Can identify and explain key themes across studied texts",
    "Can analyse the effect of language choices using subject terminology",
    "Can comment on structural features and their effects",
    "Can link ideas to relevant social and historical context",
    "Can compare two texts or poems thematically",
    "Can use embedded quotations effectively in analytical writing",
    "Can construct a clear, sustained argument across an essay",
    "Can evaluate a writer's methods and their impact on the reader",
  ],
  "Language Reading Skills": [
    "Can retrieve explicit information from a text (AO1)",
    "Can explain and comment on how language is used for effect (AO2)",
    "Can analyse structural choices across a text (AO2)",
    "Can evaluate critically, giving a personal response with evidence (AO4)",
    "Can compare writers' viewpoints and perspectives (AO3)",
    "Can synthesise information from two texts (AO1)",
  ],
  "Language Writing Skills": [
    "Can write for a range of purposes: describe, narrate, argue, persuade, advise, explain",
    "Can adapt tone and register to match audience and form",
    "Can use a range of vocabulary including ambitious word choices",
    "Can craft varied sentence structures for deliberate effect",
    "Can organise writing with clear paragraphs and discourse markers",
    "Can use accurate spelling, punctuation and grammar consistently",
    "Can use linguistic devices: simile, metaphor, personification, rhetorical questions",
    "Can structure a whole text effectively (opening, development, conclusion)",
  ],
};

/* ─── Page ───────────────────────────────────────────────────── */

export default function AssessmentToolsPage() {
  const [activeTab, setActiveTab] = useState<"quiz" | "essays" | "markschemes" | "progress">("quiz");
  const [selectedQuizTopic, setSelectedQuizTopic] = useState<string>(Object.keys(QUIZ_TOPICS)[0]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  const [essayTopicFilter, setEssayTopicFilter] = useState("");
  const [essayBoardFilter, setEssayBoardFilter] = useState("");
  const [expandedMarkSchemes, setExpandedMarkSchemes] = useState<Set<number>>(new Set());
  const [markSchemeBoard, setMarkSchemeBoard] = useState("");

  const quizQuestions = QUIZ_TOPICS[selectedQuizTopic] || [];
  const currentQuestion = quizQuestions[currentQuestionIndex];

  const filteredEssays = ESSAY_QUESTIONS.filter((eq) => {
    const matchesTopic = essayTopicFilter === "" || eq.topic === essayTopicFilter;
    const matchesBoard = essayBoardFilter === "" || eq.examBoard === essayBoardFilter;
    return matchesTopic && matchesBoard;
  });

  const essayTopics = [...new Set(ESSAY_QUESTIONS.map((eq) => eq.topic))];
  const essayBoards = [...new Set(ESSAY_QUESTIONS.map((eq) => eq.examBoard))];

  const filteredMarkSchemes = MARK_SCHEME_TEMPLATES.filter(
    (ms) => markSchemeBoard === "" || ms.examBoard === markSchemeBoard
  );

  function startQuiz() {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setQuizComplete(false);
    setShowAllAnswers(false);
  }

  function checkAnswer() {
    setShowAnswer(true);
    if (selectedAnswer === currentQuestion.correctIndex) {
      setScore((s) => s + 1);
    }
  }

  function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex((i) => i + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      setQuizComplete(true);
    }
  }

  function toggleMarkScheme(index: number) {
    setExpandedMarkSchemes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  function handlePrint() {
    window.print();
  }

  /* ── Access guard ──────────────────────────────────────────── */
  if (MOCK_USER_ROLE !== "teacher") {
    return (
      <>
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="max-w-md rounded-xl border border-red-200 bg-red-50 p-8 text-center">
            <h2 className="text-lg font-bold text-red-800">Teacher Access Only</h2>
            <p className="mt-2 text-sm text-red-600">
              Assessment tools are only available to verified teacher accounts.
            </p>
            <Link
              href="/resources"
              className="mt-6 inline-block rounded-lg bg-[#1A5276] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1A5276]/90"
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#1A5276]/80 px-4 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-4 text-sm text-white/70">
            <Link href="/resources/teaching" className="hover:text-white transition-colors">
              Teaching Resources
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Assessment Tools</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Assessment Tools
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Quick quizzes, essay question banks, mark scheme templates, and progress trackers for formative and summative assessment.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <div className="sticky top-0 z-20 border-b border-border bg-card shadow-md print:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8">
          {([
            { key: "quiz" as const, label: "Quick Quiz" },
            { key: "essays" as const, label: "Essay Questions" },
            { key: "markschemes" as const, label: "Mark Schemes" },
            { key: "progress" as const, label: "Progress Trackers" },
          ]).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`whitespace-nowrap border-b-2 px-4 py-3.5 text-sm font-medium transition-colors ${
                activeTab === tab.key
                  ? "border-[#2E86C1] text-foreground"
                  : "border-transparent text-muted-foreground hover:border-gray-300 hover:text-muted-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">

        {/* ── Quick Quiz Tab ─────────────────────────────────────── */}
        {activeTab === "quiz" && (
          <div>
            <h2 className="text-xl font-bold text-foreground">Quick Quiz Generator</h2>
            <p className="mt-2 text-muted-foreground">
              Select a text and run a 10-question multiple-choice quiz. Perfect for starters, plenaries, or revision sessions.
            </p>

            {/* Topic selector */}
            <div className="mt-6 flex flex-wrap gap-2">
              {Object.keys(QUIZ_TOPICS).map((topic) => (
                <button
                  key={topic}
                  onClick={() => {
                    setSelectedQuizTopic(topic);
                    setQuizStarted(false);
                    setQuizComplete(false);
                    setShowAllAnswers(false);
                  }}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedQuizTopic === topic
                      ? "bg-[#1A5276] text-white"
                      : "bg-gray-100 text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>

            {/* Quiz area */}
            <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md sm:p-8">
              {!quizStarted && !quizComplete && (
                <div className="text-center py-8">
                  <h3 className="text-lg font-bold text-foreground">{selectedQuizTopic} Quiz</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{quizQuestions.length} multiple choice questions</p>
                  <button
                    onClick={startQuiz}
                    className="mt-6 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    Start Quiz
                  </button>
                </div>
              )}

              {quizStarted && !quizComplete && currentQuestion && (
                <div>
                  {/* Progress bar */}
                  <div className="mb-6 flex items-center justify-between text-sm text-muted-foreground">
                    <span>Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
                    <span>Score: {score}/{currentQuestionIndex + (showAnswer ? 1 : 0)}</span>
                  </div>
                  <div className="mb-6 h-2 rounded-full bg-gray-100">
                    <div
                      className="h-2 rounded-full bg-primary transition-all"
                      style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>

                  <h3 className="text-lg font-bold text-foreground">{currentQuestion.question}</h3>

                  <div className="mt-4 space-y-2">
                    {currentQuestion.options.map((option, i) => {
                      let optionClass = "border-border bg-card hover:border-[#2E86C1]/40";
                      if (showAnswer) {
                        if (i === currentQuestion.correctIndex) {
                          optionClass = "border-green-500 bg-green-50";
                        } else if (i === selectedAnswer && i !== currentQuestion.correctIndex) {
                          optionClass = "border-red-500 bg-red-50";
                        }
                      } else if (i === selectedAnswer) {
                        optionClass = "border-[#2E86C1] bg-primary/5";
                      }

                      return (
                        <button
                          key={i}
                          onClick={() => !showAnswer && setSelectedAnswer(i)}
                          disabled={showAnswer}
                          className={`flex w-full items-center gap-3 rounded-lg border-2 p-4 text-left text-sm transition ${optionClass}`}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-300 text-xs font-bold">
                            {String.fromCharCode(65 + i)}
                          </span>
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    {!showAnswer ? (
                      <button
                        onClick={checkAnswer}
                        disabled={selectedAnswer === null}
                        className="rounded-lg bg-[#1A5276] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1A5276]/90 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Check Answer
                      </button>
                    ) : (
                      <button
                        onClick={nextQuestion}
                        className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                      >
                        {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                      </button>
                    )}
                  </div>
                </div>
              )}

              {quizComplete && (
                <div className="text-center py-8">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-3xl font-bold text-foreground">{score}/{quizQuestions.length}</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">Quiz Complete!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {score === quizQuestions.length
                      ? "Perfect score! Excellent knowledge."
                      : score >= quizQuestions.length * 0.6
                        ? "Good result. Review the questions you missed."
                        : "Keep revising. Try the quiz again after reviewing the material."}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={startQuiz}
                      className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
                    >
                      Retry Quiz
                    </button>
                    <button
                      onClick={() => setShowAllAnswers(!showAllAnswers)}
                      className="rounded-lg border border-[#1A5276] px-6 py-2.5 text-sm font-semibold text-foreground transition hover:bg-[#1A5276]/5"
                    >
                      {showAllAnswers ? "Hide Answers" : "View All Answers"}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Expandable answers section */}
            {showAllAnswers && (
              <div className="mt-6 rounded-xl border border-border bg-card shadow-md overflow-hidden">
                <div className="bg-[#1A5276] px-5 py-3">
                  <h3 className="font-bold text-white">{selectedQuizTopic} — Answer Key</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  {quizQuestions.map((q, i) => (
                    <div key={i} className="px-5 py-4">
                      <p className="text-sm font-medium text-foreground">
                        <span className="mr-2 font-bold text-primary">Q{i + 1}.</span>
                        {q.question}
                      </p>
                      <p className="mt-1 text-sm text-green-700">
                        <span className="font-semibold">Answer:</span>{" "}
                        {String.fromCharCode(65 + q.correctIndex)}) {q.options[q.correctIndex]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── Essay Questions Tab ────────────────────────────────── */}
        {activeTab === "essays" && (
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-foreground">Essay Question Bank</h2>
                <p className="mt-1 text-muted-foreground">
                  {ESSAY_QUESTIONS.length} exam-style essay questions organised by text and exam board.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  value={essayTopicFilter}
                  onChange={(e) => setEssayTopicFilter(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-card px-3 py-2.5 text-sm text-muted-foreground focus:border-[#2E86C1] focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">All Topics</option>
                  {essayTopics.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
                <select
                  value={essayBoardFilter}
                  onChange={(e) => setEssayBoardFilter(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-card px-3 py-2.5 text-sm text-muted-foreground focus:border-[#2E86C1] focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">All Exam Boards</option>
                  {essayBoards.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Showing {filteredEssays.length} of {ESSAY_QUESTIONS.length} questions
            </p>

            <div className="mt-4 space-y-4">
              {filteredEssays.map((eq) => (
                <div
                  key={eq.id}
                  className="rounded-xl border border-border bg-card p-5 shadow-md"
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-foreground">
                      {eq.subject}
                    </span>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {eq.topic}
                    </span>
                    <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                      {eq.marks} marks
                    </span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {eq.examBoard}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground">{eq.text}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    <span className="font-semibold">Mark scheme:</span> {eq.markSchemeRef}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Mark Schemes Tab ───────────────────────────────────── */}
        {activeTab === "markschemes" && (
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-foreground">Mark Scheme Templates</h2>
                <p className="mt-2 text-muted-foreground">
                  Reference mark schemes for GCSE English assessments. Use these to standardise marking and provide targeted feedback.
                </p>
              </div>
              <div className="flex gap-2">
                <select
                  value={markSchemeBoard}
                  onChange={(e) => setMarkSchemeBoard(e.target.value)}
                  className="rounded-lg border border-gray-300 bg-card px-3 py-2.5 text-sm text-muted-foreground focus:border-[#2E86C1] focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">All Boards</option>
                  <option value="AQA">AQA</option>
                  <option value="Edexcel">Edexcel</option>
                  <option value="Generic">Generic</option>
                </select>
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#1A5276] px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-[#1A5276]/5 print:hidden"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m0 0a48.77 48.77 0 0 1 10.5 0m-10.5 0V6.169c0-1.244.757-2.373 1.916-2.793a48.032 48.032 0 0 1 6.168 0c1.159.42 1.916 1.549 1.916 2.793V8.034" />
                  </svg>
                  Print
                </button>
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {filteredMarkSchemes.map((template, idx) => (
                <div key={template.title} className="rounded-xl border border-border bg-card shadow-md overflow-hidden print:break-inside-avoid">
                  <button
                    onClick={() => toggleMarkScheme(idx)}
                    className="flex w-full items-center justify-between bg-[#1A5276] px-5 py-3 text-left print:pointer-events-none"
                  >
                    <div className="flex items-center gap-3">
                      <h3 className="font-bold text-white">{template.title}</h3>
                      <span className="rounded-full bg-card/20 px-2 py-0.5 text-xs font-medium text-white">
                        {template.examBoard}
                      </span>
                    </div>
                    <svg
                      className={`h-5 w-5 text-white/80 transition-transform print:hidden ${expandedMarkSchemes.has(idx) ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div className={`divide-y divide-gray-100 ${expandedMarkSchemes.has(idx) ? "" : "hidden print:block"}`}>
                    {template.levels.map((level) => (
                      <div key={level.level} className="flex flex-col gap-1 px-5 py-3 sm:flex-row sm:gap-4">
                        <span className="shrink-0 text-sm font-bold text-primary sm:w-52">
                          {level.level}
                        </span>
                        <p className="text-sm text-muted-foreground">{level.descriptor}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Progress Trackers Tab ──────────────────────────────── */}
        {activeTab === "progress" && (
          <div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-xl font-bold text-foreground">Progress Tracker Templates</h2>
                <p className="mt-2 text-muted-foreground">
                  Printable tracker templates and skills checklists for monitoring student progress.
                </p>
              </div>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-lg border border-[#1A5276] px-4 py-2.5 text-sm font-semibold text-foreground transition hover:bg-[#1A5276]/5 print:hidden"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m0 0a48.77 48.77 0 0 1 10.5 0m-10.5 0V6.169c0-1.244.757-2.373 1.916-2.793a48.032 48.032 0 0 1 6.168 0c1.159.42 1.916 1.549 1.916 2.793V8.034" />
                </svg>
                Print All
              </button>
            </div>

            {/* Progress grid templates */}
            <div className="mt-6 space-y-6">
              {PROGRESS_TRACKERS.map((tracker) => (
                <div key={tracker.title} className="rounded-xl border border-border bg-card p-6 shadow-md print:break-inside-avoid">
                  <h3 className="text-lg font-bold text-foreground">{tracker.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{tracker.description}</p>

                  {/* Preview table */}
                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-muted">
                          {tracker.columns.map((col) => (
                            <th
                              key={col}
                              className="whitespace-nowrap border border-border px-3 py-2 text-left font-semibold text-muted-foreground"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {Array.from({ length: 5 }, (_, row) => (
                          <tr key={row}>
                            {tracker.columns.map((col, i) => (
                              <td
                                key={col}
                                className="border border-border px-3 py-2 text-muted-foreground"
                              >
                                {i === 0 ? `Student ${row + 1}` : ""}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <button
                    className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 print:hidden"
                    onClick={() => {
                      const headers = tracker.columns.join(",");
                      const rows = Array.from({ length: 30 }, (_, i) => {
                        const cells = tracker.columns.map((_, ci) => ci === 0 ? `Student ${i + 1}` : "");
                        return cells.join(",");
                      });
                      const csv = [headers, ...rows].join("\n");
                      const blob = new Blob([csv], { type: "text/csv" });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `${tracker.title.replace(/\s+/g, "_").toLowerCase()}.csv`;
                      a.click();
                      URL.revokeObjectURL(url);
                    }}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download CSV
                  </button>
                </div>
              ))}
            </div>

            {/* Skills Checklist */}
            <div className="mt-10">
              <h2 className="text-xl font-bold text-foreground">Skills Checklist</h2>
              <p className="mt-2 text-muted-foreground">
                Printable skills checklist for tracking individual student competencies across Literature and Language.
              </p>

              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                {Object.entries(SKILLS_CHECKLIST).map(([category, skills]) => (
                  <div key={category} className="rounded-xl border border-border bg-card shadow-md overflow-hidden print:break-inside-avoid">
                    <div className="bg-[#1A5276] px-5 py-3">
                      <h3 className="text-sm font-bold text-white">{category}</h3>
                    </div>
                    <div className="p-4 space-y-3">
                      {skills.map((skill, i) => (
                        <label key={i} className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 text-primary focus:ring-primary/20"
                          />
                          <span className="text-xs leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                            {skill}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          header, footer, nav { display: none !important; }
          .print\\:hidden { display: none !important; }
          .print\\:block { display: block !important; }
          .print\\:break-inside-avoid { break-inside: avoid; }
          body { font-size: 11pt; }
          .sticky { position: static !important; }
        }
      `}</style>

    </>
  );
}
