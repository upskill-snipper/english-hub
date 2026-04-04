export interface SpeakingListeningActivity {
  id: string
  title: string
  yearGroup: 7 | 8 | 9
  termUnit: string
  duration: number
  type: string
  instructions: string
  assessmentCriteria: string[]
  resources: string[]
  differentiation: string
  linkedObjectives: string[]
}

export const speakingListeningActivities: SpeakingListeningActivity[] = [
  // =========================================================================
  // YEAR 7 S&L Activities (1-10)
  // =========================================================================

  // --- 1-2: Paired discussion structures ---
  {
    id: 'sl-y7-01',
    title: 'Think-Pair-Share: First Impressions of a Text',
    yearGroup: 7,
    termUnit: 'Autumn 1',
    duration: 20,
    type: 'Paired Discussion',
    instructions: `<h3>Think-Pair-Share: First Impressions of a Text</h3>
<p><strong>Objective:</strong> Students practise articulating their initial responses to a new text clearly and confidently.</p>
<h4>Stage 1 - Think (3 minutes)</h4>
<ul>
  <li>Display a short extract (prose, poem, or non-fiction) on the board.</li>
  <li>Students read silently and jot down three initial reactions using the prompt: <em>"I noticed... / I felt... / I wonder..."</em></li>
</ul>
<h4>Stage 2 - Pair (5 minutes)</h4>
<ul>
  <li>Students turn to their partner and share their three reactions.</li>
  <li>Partner A speaks first for 2 minutes; Partner B listens without interrupting and then summarises what they heard in one sentence.</li>
  <li>Swap roles.</li>
  <li>Remind students to use full sentences and make eye contact.</li>
</ul>
<h4>Stage 3 - Share (10 minutes)</h4>
<ul>
  <li>Select 4-5 pairs to share one combined response with the class.</li>
  <li>The listening partner reports: <em>"My partner noticed that... and I agreed/disagreed because..."</em></li>
  <li>Class votes on the most interesting observation.</li>
</ul>
<h4>Debrief (2 minutes)</h4>
<ul>
  <li>Ask: <em>"What made a good listener today? What made a clear speaker?"</em></li>
</ul>`,
    assessmentCriteria: [
      'Speaks clearly and audibly to a partner',
      'Uses full sentences when sharing ideas',
      'Listens actively and can summarise a partner\'s point',
      'Makes eye contact and uses appropriate body language',
    ],
    resources: [
      'Short text extract (displayed on board)',
      'Think-Pair-Share prompt cards',
      'Student reflection sheet',
    ],
    differentiation: `<p><strong>Support:</strong> Provide sentence starters on cards: "I noticed...", "This made me feel...", "I wonder why...". Pair less confident speakers with supportive partners.</p>
<p><strong>Stretch:</strong> Challenge students to build on their partner's idea by adding a "because" clause and a textual reference. Ask them to evaluate whose initial response was most insightful and explain why.</p>`,
    linkedObjectives: ['7SL.1', '7SL.2'],
  },
  {
    id: 'sl-y7-02',
    title: 'Agree/Disagree Discussion Pairs',
    yearGroup: 7,
    termUnit: 'Autumn 1',
    duration: 25,
    type: 'Paired Discussion',
    instructions: `<h3>Agree/Disagree Discussion Pairs</h3>
<p><strong>Objective:</strong> Students practise responding to a partner's views with structured agreement and disagreement.</p>
<h4>Setup (3 minutes)</h4>
<ul>
  <li>Display a provocative statement related to the current text or topic, e.g., <em>"The villain in this story deserves sympathy."</em></li>
  <li>Students individually decide if they agree or disagree and note two reasons.</li>
</ul>
<h4>Discussion Round 1 (6 minutes)</h4>
<ul>
  <li>Partner A states their position using the stem: <em>"I agree/disagree with this statement because..."</em></li>
  <li>Partner B responds using: <em>"I see your point, but I think..." or "I agree, and I'd add that..."</em></li>
  <li>Each pair tries to reach a shared conclusion.</li>
</ul>
<h4>Discussion Round 2 (6 minutes)</h4>
<ul>
  <li>Display a new statement. Swap who speaks first.</li>
  <li>Encourage students to refer to specific moments in the text.</li>
</ul>
<h4>Whole-Class Feedback (8 minutes)</h4>
<ul>
  <li>Pairs stand on an "agree-disagree spectrum" line across the room.</li>
  <li>Teacher selects students from different positions to justify their stance.</li>
  <li>Class discusses: did anyone change their mind?</li>
</ul>
<h4>Reflection (2 minutes)</h4>
<ul>
  <li>Students write one sentence: <em>"Today I learned to respond to someone by..."</em></li>
</ul>`,
    assessmentCriteria: [
      'States a clear opinion with a supporting reason',
      'Responds to a partner using appropriate discussion stems',
      'Listens carefully and refers to what a partner has said',
      'Can modify or develop a position based on discussion',
    ],
    resources: [
      'Provocative statements (2-3 prepared)',
      'Discussion stem cards (Agree/Disagree/Build)',
      'Agree-Disagree spectrum line (floor tape or markers)',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a printed sheet with discussion stems and a vocabulary bank related to the text. Allow students to rehearse their initial statement silently before speaking.</p>
<p><strong>Stretch:</strong> Require students to use a counter-argument before reaching their conclusion: "Although some might say..., I believe... because...". Ask them to reference specific quotations.</p>`,
    linkedObjectives: ['7SL.1', '7SL.2', '7SL.3'],
  },

  // --- 3-4: Group talk roles and stems ---
  {
    id: 'sl-y7-03',
    title: 'Group Talk Roles: Exploring a Character',
    yearGroup: 7,
    termUnit: 'Autumn 2',
    duration: 30,
    type: 'Group Discussion',
    instructions: `<h3>Group Talk Roles: Exploring a Character</h3>
<p><strong>Objective:</strong> Students share ideas confidently in a group using assigned roles and talk stems.</p>
<h4>Preparation (5 minutes)</h4>
<ul>
  <li>Arrange students in groups of four.</li>
  <li>Assign each student a role card:
    <ul>
      <li><strong>Questioner:</strong> Asks the group questions to deepen thinking.</li>
      <li><strong>Evidence Finder:</strong> Locates specific textual evidence to support points.</li>
      <li><strong>Summariser:</strong> Keeps track of key points and summarises at the end.</li>
      <li><strong>Challenger:</strong> Offers alternative viewpoints and plays devil's advocate.</li>
    </ul>
  </li>
  <li>Display the focus question: <em>"Is [character] a hero, a villain, or something in between?"</em></li>
</ul>
<h4>Group Discussion (15 minutes)</h4>
<ul>
  <li>The Questioner opens with the focus question.</li>
  <li>Each member contributes using their role's talk stems (provided on role cards).</li>
  <li>The Evidence Finder reads relevant quotations aloud.</li>
  <li>The Challenger must offer at least one alternative interpretation.</li>
  <li>The Summariser notes key points on a shared sheet.</li>
  <li>Teacher circulates, noting effective contributions.</li>
</ul>
<h4>Group Feedback (8 minutes)</h4>
<ul>
  <li>Each Summariser presents the group's conclusion in 1 minute.</li>
  <li>Class compares: did groups reach different conclusions? Why?</li>
</ul>
<h4>Reflection (2 minutes)</h4>
<ul>
  <li>Students self-assess: <em>"Which role did I find easiest/hardest? Why?"</em></li>
</ul>`,
    assessmentCriteria: [
      'Fulfils assigned group role effectively',
      'Uses talk stems appropriate to their role',
      'Contributes ideas confidently within the group',
      'Listens to and builds upon others\' contributions',
    ],
    resources: [
      'Role cards with talk stems (Questioner, Evidence Finder, Summariser, Challenger)',
      'Text extract or full text access',
      'Group summary recording sheet',
      'Focus question displayed on board',
    ],
    differentiation: `<p><strong>Support:</strong> Assign the Summariser role to less confident speakers (they listen first). Provide pre-selected quotations for the Evidence Finder. Include example talk stems on each role card.</p>
<p><strong>Stretch:</strong> Remove talk stems and ask students to develop their own. Add a fifth role: "Connector" who links the character discussion to wider themes or other texts.</p>`,
    linkedObjectives: ['7SL.2', '7SL.3'],
  },
  {
    id: 'sl-y7-04',
    title: 'Talk Stems Carousel: Theme Exploration',
    yearGroup: 7,
    termUnit: 'Autumn 2',
    duration: 30,
    type: 'Group Discussion',
    instructions: `<h3>Talk Stems Carousel: Theme Exploration</h3>
<p><strong>Objective:</strong> Students practise using structured talk stems while exploring themes across multiple stations.</p>
<h4>Setup (5 minutes)</h4>
<ul>
  <li>Set up 4-5 stations around the room, each with a large sheet of paper headed with a different theme from the current text (e.g., Power, Friendship, Justice, Fear, Identity).</li>
  <li>Groups of 4-5 students start at a station.</li>
  <li>Each group receives a set of talk stem cards:
    <ul>
      <li><em>"This theme is important because..."</em></li>
      <li><em>"An example of this theme is when..."</em></li>
      <li><em>"I think the writer wants us to feel... about this theme because..."</em></li>
      <li><em>"This connects to... because..."</em></li>
    </ul>
  </li>
</ul>
<h4>Carousel Rounds (4 rounds x 5 minutes = 20 minutes)</h4>
<ul>
  <li>At each station, groups discuss the theme using the talk stems.</li>
  <li>One member writes the group's best idea on the large sheet.</li>
  <li>After 5 minutes, groups rotate clockwise to the next station.</li>
  <li>At new stations, groups must read previous ideas first, then add something new.</li>
</ul>
<h4>Gallery Walk and Feedback (5 minutes)</h4>
<ul>
  <li>Groups return to their original station and read all contributions.</li>
  <li>Each group selects the most insightful comment added by another group and explains their choice to the class.</li>
</ul>`,
    assessmentCriteria: [
      'Uses talk stems to structure verbal contributions',
      'Builds on ideas left by previous groups',
      'Shares ideas clearly within a time limit',
      'Identifies and evaluates contributions from others',
    ],
    resources: [
      'Large sheets of paper (one per station) with theme headings',
      'Talk stem cards (one set per group)',
      'Marker pens',
      'Timer',
    ],
    differentiation: `<p><strong>Support:</strong> Reduce to 3 stations. Provide a word bank of key vocabulary for each theme. Assign a confident scribe in each group.</p>
<p><strong>Stretch:</strong> Add a "Critic" stem: "I would challenge this idea because...". Require groups to rank the themes by importance at the end and justify their ranking orally to the class.</p>`,
    linkedObjectives: ['7SL.1', '7SL.3'],
  },

  // --- 5-6: Hot-seating characters ---
  {
    id: 'sl-y7-05',
    title: 'Hot-Seating: Interviewing a Key Character',
    yearGroup: 7,
    termUnit: 'Spring 1',
    duration: 30,
    type: 'Hot-Seating',
    instructions: `<h3>Hot-Seating: Interviewing a Key Character</h3>
<p><strong>Objective:</strong> Students speak clearly and respond to questions in role, demonstrating understanding of a character's perspective.</p>
<h4>Preparation (8 minutes)</h4>
<ul>
  <li>Select one key character from the current text.</li>
  <li>Divide the class: one volunteer (or teacher) will be "hot-seated" as the character; the rest are interviewers.</li>
  <li>Interviewing students prepare 2-3 questions in pairs, focusing on:
    <ul>
      <li>The character's motivations: <em>"Why did you...?"</em></li>
      <li>The character's feelings: <em>"How did you feel when...?"</em></li>
      <li>The character's relationships: <em>"What do you really think about...?"</em></li>
    </ul>
  </li>
  <li>The hot-seated student reviews key moments and prepares to answer in character.</li>
</ul>
<h4>Hot-Seating Session (15 minutes)</h4>
<ul>
  <li>The character sits in the "hot seat" at the front.</li>
  <li>Interviewers ask questions one at a time, raising hands.</li>
  <li>The character must answer in first person, staying in role.</li>
  <li>Teacher prompts deeper responses if needed: <em>"Can you tell us more about that?"</em></li>
  <li>After 10 minutes, open the floor for follow-up questions.</li>
</ul>
<h4>Debrief (7 minutes)</h4>
<ul>
  <li>Class discusses: <em>"What did we learn about the character that we didn't know before?"</em></li>
  <li>Ask the hot-seated student: <em>"Was there a question you found hard to answer? Why?"</em></li>
  <li>Students write a brief diary entry as the character reflecting on the interview.</li>
</ul>`,
    assessmentCriteria: [
      'Asks clear and relevant questions in role as interviewer',
      'Responds in character with detail and consistency',
      'Speaks audibly and with expression appropriate to the character',
      'Listens to responses and asks relevant follow-up questions',
    ],
    resources: [
      'Hot seat (chair at the front)',
      'Question preparation sheet with prompts',
      'Character profile or key quotations sheet',
      'Diary entry template for follow-up writing',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a character fact file. Give the hot-seated student 3-4 prepared answers they can adapt. Pair weaker questioners with stronger partners to co-construct questions.</p>
<p><strong>Stretch:</strong> Hot-seat two characters simultaneously and ask them to respond to each other. Interviewers must ask questions that create dramatic tension between the characters.</p>`,
    linkedObjectives: ['7SL.1', '7SL.2'],
  },
  {
    id: 'sl-y7-06',
    title: 'Hot-Seating Gallery: Multiple Characters',
    yearGroup: 7,
    termUnit: 'Spring 1',
    duration: 35,
    type: 'Hot-Seating',
    instructions: `<h3>Hot-Seating Gallery: Multiple Characters</h3>
<p><strong>Objective:</strong> Students take on different character perspectives and listen carefully to compare viewpoints.</p>
<h4>Setup (5 minutes)</h4>
<ul>
  <li>Assign 4-5 students to each represent a different character from the text.</li>
  <li>Each "character" sits at a separate table/station around the room.</li>
  <li>Remaining students form small roving interview groups (3-4 students).</li>
  <li>Each character receives a brief with key moments, motivations, and a "secret" - something the character knows but hasn't revealed.</li>
</ul>
<h4>Gallery Interviews (20 minutes)</h4>
<ul>
  <li>Interview groups rotate around the room, spending 4 minutes at each character station.</li>
  <li>At each station, the group asks questions and records key responses on their interview log.</li>
  <li>Groups must try to uncover each character's "secret" through careful questioning.</li>
  <li>Characters should not reveal the secret directly but can hint at it.</li>
</ul>
<h4>Comparison Discussion (8 minutes)</h4>
<ul>
  <li>Interview groups discuss: <em>"Which character was most honest? Which was hiding something? How could you tell?"</em></li>
  <li>Groups present their findings: <em>"We think [character] was hiding... because they said..."</em></li>
</ul>
<h4>Reflection (2 minutes)</h4>
<ul>
  <li>Students assess which questioning techniques were most effective at uncovering information.</li>
</ul>`,
    assessmentCriteria: [
      'Maintains a consistent character voice throughout multiple interviews',
      'Asks probing follow-up questions to uncover hidden information',
      'Compares different character perspectives thoughtfully',
      'Presents findings clearly to the class using evidence from interviews',
    ],
    resources: [
      'Character briefs with key moments, motivations, and secrets',
      'Interview log recording sheets',
      'Station labels/character name cards',
      'Timer for rotations',
    ],
    differentiation: `<p><strong>Support:</strong> Provide characters with a script of 3-4 pre-prepared responses. Give interview groups a question menu to choose from. Assign a note-taker in each group.</p>
<p><strong>Stretch:</strong> Characters must improvise entirely without a brief. Interview groups must write a "newspaper report" after the gallery summarising the conflicting accounts they heard.</p>`,
    linkedObjectives: ['7SL.1', '7SL.2', '7SL.3'],
  },

  // --- 7-8: Simple presentations ---
  {
    id: 'sl-y7-07',
    title: 'My Favourite Text: Mini Presentation',
    yearGroup: 7,
    termUnit: 'Spring 2',
    duration: 35,
    type: 'Presentation',
    instructions: `<h3>My Favourite Text: Mini Presentation</h3>
<p><strong>Objective:</strong> Students deliver a short, structured presentation about a text they enjoy, speaking clearly and with confidence.</p>
<h4>Preparation (Homework or 10 minutes in class)</h4>
<ul>
  <li>Students choose a book, poem, film, or song they love.</li>
  <li>They prepare a 2-minute presentation using the structure:
    <ol>
      <li><strong>Introduction:</strong> What is the text and who created it?</li>
      <li><strong>Summary:</strong> What is it about? (3-4 sentences max)</li>
      <li><strong>Why I love it:</strong> What makes it special to you? Include a favourite moment or line.</li>
      <li><strong>Recommendation:</strong> Who would you recommend it to and why?</li>
    </ol>
  </li>
  <li>Students may use one cue card but should not read from a full script.</li>
</ul>
<h4>Presentations (20 minutes)</h4>
<ul>
  <li>Students present in groups of 5-6 to reduce pressure.</li>
  <li>After each presentation, the audience gives one piece of positive feedback using: <em>"I liked how you..."</em></li>
  <li>Teacher uses a simple checklist to note key speaking skills.</li>
</ul>
<h4>Whole-Class Showcase (5 minutes)</h4>
<ul>
  <li>Each group nominates one presenter to share with the whole class.</li>
  <li>Class votes on the most persuasive recommendation.</li>
</ul>`,
    assessmentCriteria: [
      'Speaks clearly and at an appropriate pace',
      'Maintains eye contact with the audience',
      'Structures the presentation logically with a clear beginning, middle, and end',
      'Shows enthusiasm and personal engagement with the chosen text',
    ],
    resources: [
      'Presentation planning template (4-section structure)',
      'Cue card template (A5)',
      'Peer feedback slips',
      'Teacher assessment checklist',
    ],
    differentiation: `<p><strong>Support:</strong> Allow students to present in pairs. Provide a fill-in-the-blank script they can personalise. Reduce to 1 minute. Allow use of a visual prop (the book cover, a picture).</p>
<p><strong>Stretch:</strong> Extend to 3 minutes. Require a quotation to be read aloud with expression. Students must answer one audience question after presenting. Encourage use of rhetorical techniques (rhetorical question, rule of three).</p>`,
    linkedObjectives: ['7SL.1', '7SL.3'],
  },
  {
    id: 'sl-y7-08',
    title: 'Show and Tell: An Object That Matters',
    yearGroup: 7,
    termUnit: 'Spring 2',
    duration: 30,
    type: 'Presentation',
    instructions: `<h3>Show and Tell: An Object That Matters</h3>
<p><strong>Objective:</strong> Students speak with confidence about a personal object, developing narrative skills and audience awareness.</p>
<h4>Preparation (Set as homework or 5 minutes in class)</h4>
<ul>
  <li>Students bring in (or draw/describe) an object that is important to them.</li>
  <li>They prepare to explain:
    <ul>
      <li>What the object is and where it came from</li>
      <li>Why it matters to them (a story connected to it)</li>
      <li>What it reveals about them as a person</li>
    </ul>
  </li>
</ul>
<h4>Presentation Circle (20 minutes)</h4>
<ul>
  <li>Students sit in a circle (whole class or groups of 8-10).</li>
  <li>Each student speaks for 1-2 minutes, holding or showing their object.</li>
  <li>After each speaker, two audience members must ask a genuine question.</li>
  <li>The speaker answers, then passes the "speaking token" to the next person.</li>
</ul>
<h4>Connection Activity (5 minutes)</h4>
<ul>
  <li>Students find someone whose object shares a theme with theirs (e.g., family, achievement, memory) and discuss the connection.</li>
</ul>`,
    assessmentCriteria: [
      'Speaks with personal engagement and confidence',
      'Tells a clear and engaging narrative about the object',
      'Responds to audience questions thoughtfully',
      'Listens attentively and asks relevant questions to other presenters',
    ],
    resources: [
      'Speaking token (e.g., a small object to pass)',
      'Preparation prompt sheet',
      'Question starter cards for audience members',
    ],
    differentiation: `<p><strong>Support:</strong> Allow students to present to a partner first and then volunteer for the larger group. Provide a structured template: "This is my... I got it when... It matters because...".</p>
<p><strong>Stretch:</strong> Students must connect their object to a theme in the current text being studied. They present without any notes, relying on the object as their only prompt.</p>`,
    linkedObjectives: ['7SL.1', '7SL.3'],
  },

  // --- 9-10: Socratic seminars (introductory) ---
  {
    id: 'sl-y7-09',
    title: 'Introductory Socratic Seminar: A Big Question',
    yearGroup: 7,
    termUnit: 'Summer 1',
    duration: 35,
    type: 'Socratic Seminar',
    instructions: `<h3>Introductory Socratic Seminar: A Big Question</h3>
<p><strong>Objective:</strong> Students participate in a structured academic discussion, listening and responding to peers with confidence.</p>
<h4>Introduction to Socratic Seminars (5 minutes)</h4>
<ul>
  <li>Explain the concept: a discussion where everyone contributes, nobody raises hands, and the goal is deeper understanding rather than winning.</li>
  <li>Display the ground rules:
    <ol>
      <li>Speak one at a time</li>
      <li>Refer to the text</li>
      <li>Build on or respectfully challenge others' ideas</li>
      <li>Use names: "I agree with [Name] because..."</li>
    </ol>
  </li>
</ul>
<h4>Preparation (5 minutes)</h4>
<ul>
  <li>Display a rich, open question related to the current text, e.g., <em>"Is it ever right to break the rules?"</em> or <em>"Can someone be both good and evil?"</em></li>
  <li>Students read a short relevant extract and annotate three points they could raise.</li>
</ul>
<h4>Inner Circle Discussion (12 minutes)</h4>
<ul>
  <li>Arrange chairs in two concentric circles: inner circle (6-8 students) discusses; outer circle observes.</li>
  <li>Inner circle discusses the question, aiming to reference the text at least twice.</li>
  <li>Each outer circle student is paired with an inner circle student and tracks their contributions on a feedback form.</li>
</ul>
<h4>Swap and Continue (10 minutes)</h4>
<ul>
  <li>Inner and outer circles swap. The new inner circle must build on what was said, not repeat it.</li>
</ul>
<h4>Debrief (3 minutes)</h4>
<ul>
  <li>Outer circle partners give feedback: <em>"You contributed well when you said..."</em></li>
  <li>Class reflects on what makes a good seminar discussion.</li>
</ul>`,
    assessmentCriteria: [
      'Contributes at least one relevant point to the discussion',
      'Refers to the text to support ideas',
      'Listens to others and builds on or challenges their points',
      'Uses peers\' names and follows seminar ground rules',
    ],
    resources: [
      'Socratic Seminar ground rules poster',
      'Open discussion question on board',
      'Short text extract with annotation space',
      'Outer circle observation/feedback form',
    ],
    differentiation: `<p><strong>Support:</strong> Provide 3-4 possible responses on cards that students can use as starting points. Allow a "lifeline" where students can ask a partner for help. Reduce inner circle size to 4-5.</p>
<p><strong>Stretch:</strong> Students must reference at least two different parts of the text. Challenge students to change their mind during the discussion and explain why. Award points for building on others' ideas rather than introducing entirely new ones.</p>`,
    linkedObjectives: ['7SL.1', '7SL.2', '7SL.3'],
  },
  {
    id: 'sl-y7-10',
    title: 'Socratic Seminar: The Writer\'s Choices',
    yearGroup: 7,
    termUnit: 'Summer 1',
    duration: 35,
    type: 'Socratic Seminar',
    instructions: `<h3>Socratic Seminar: The Writer's Choices</h3>
<p><strong>Objective:</strong> Students discuss a writer's craft choices collaboratively, developing their confidence in sharing analytical ideas.</p>
<h4>Preparation (8 minutes)</h4>
<ul>
  <li>Provide students with a short extract (10-15 lines) rich in language features.</li>
  <li>Students annotate individually, identifying:
    <ul>
      <li>One word or phrase they find powerful</li>
      <li>One structural choice the writer has made</li>
      <li>One question they have about the writer's intention</li>
    </ul>
  </li>
  <li>Display the seminar question: <em>"What is the most effective choice the writer makes in this extract, and why?"</em></li>
</ul>
<h4>Seminar Discussion (15 minutes)</h4>
<ul>
  <li>Inner circle of 6-8 students discusses.</li>
  <li>Teacher sets a "contribution target": each student should speak at least twice.</li>
  <li>Introduce a "talking chip" system: each student has 3 chips and places one in the centre each time they speak. Once chips are used, they must listen until everyone has contributed.</li>
  <li>Outer circle tracks the flow of conversation on a discussion map (arrows between names showing who responded to whom).</li>
</ul>
<h4>Swap (10 minutes)</h4>
<ul>
  <li>Circles swap. New inner circle is given a follow-up question: <em>"Do you agree with the most popular choice? Why or why not?"</em></li>
</ul>
<h4>Discussion Map Review (2 minutes)</h4>
<ul>
  <li>Display or share discussion maps. Discuss: <em>"Was the conversation balanced? Who could we hear from more next time?"</em></li>
</ul>`,
    assessmentCriteria: [
      'Identifies and discusses specific writer\'s craft choices',
      'Contributes multiple times to the discussion',
      'Responds to peers by agreeing, disagreeing, or extending their ideas',
      'Demonstrates balanced participation using the talking chip system',
    ],
    resources: [
      'Annotated text extract (10-15 lines)',
      'Talking chips (3 per student, e.g., counters)',
      'Discussion map templates for outer circle',
      'Seminar question displayed on board',
    ],
    differentiation: `<p><strong>Support:</strong> Pre-annotate the extract with two features highlighted. Provide sentence starters: "The writer uses... which makes the reader feel... because...". Give 4 chips instead of 3 to encourage participation.</p>
<p><strong>Stretch:</strong> Reduce chips to 2, forcing more concise and impactful contributions. Require students to use analytical terminology (e.g., connotation, juxtaposition, pathetic fallacy). Outer circle writes a paragraph summarising the strongest argument made.</p>`,
    linkedObjectives: ['7SL.1', '7SL.2', '7SL.3'],
  },

  // =========================================================================
  // YEAR 8 S&L Activities (11-20)
  // =========================================================================

  // --- 11-12: Formal debates ---
  {
    id: 'sl-y8-11',
    title: 'Structured Debate: This House Believes...',
    yearGroup: 8,
    termUnit: 'Autumn 1',
    duration: 40,
    type: 'Formal Debate',
    instructions: `<h3>Structured Debate: This House Believes...</h3>
<p><strong>Objective:</strong> Students speak confidently in a formal context, presenting reasoned arguments and building on others' ideas.</p>
<h4>Preparation (10 minutes)</h4>
<ul>
  <li>Introduce the motion, e.g., <em>"This House believes that social media does more harm than good"</em> or a text-related motion.</li>
  <li>Divide the class into Proposition and Opposition teams (or multiple pairs of teams).</li>
  <li>Each team prepares:
    <ul>
      <li>An opening statement (1 minute)</li>
      <li>Three main arguments with evidence</li>
      <li>A predicted counter-argument and rebuttal</li>
      <li>A closing statement (30 seconds)</li>
    </ul>
  </li>
  <li>Assign roles within each team: First Speaker, Second Speaker, Rebutter, Summariser.</li>
</ul>
<h4>Debate Structure (25 minutes)</h4>
<ol>
  <li>Proposition Opening Statement (2 minutes)</li>
  <li>Opposition Opening Statement (2 minutes)</li>
  <li>Proposition Argument 1 (2 minutes) followed by Opposition Challenge (1 minute)</li>
  <li>Opposition Argument 1 (2 minutes) followed by Proposition Challenge (1 minute)</li>
  <li>Proposition Argument 2 (2 minutes) followed by Opposition Challenge (1 minute)</li>
  <li>Opposition Argument 2 (2 minutes) followed by Proposition Challenge (1 minute)</li>
  <li>Free debate: floor opens for questions from audience (4 minutes)</li>
  <li>Opposition Closing Statement (1.5 minutes)</li>
  <li>Proposition Closing Statement (1.5 minutes)</li>
</ol>
<h4>Adjudication (5 minutes)</h4>
<ul>
  <li>Audience votes on which team was more persuasive (not which side they personally agree with).</li>
  <li>Teacher highlights the strongest arguments and most effective speaking techniques.</li>
  <li>Individual students receive one piece of specific feedback.</li>
</ul>`,
    assessmentCriteria: [
      'Presents a clear, structured argument with supporting evidence',
      'Speaks confidently and formally, projecting voice to the audience',
      'Builds on teammates\' points and responds to opposition arguments',
      'Uses persuasive techniques: rhetorical questions, statistics, emotive language',
    ],
    resources: [
      'Debate preparation planning sheet (with sections for arguments, evidence, rebuttals)',
      'Role cards for each debate position',
      'Timer',
      'Voting slips or digital polling tool',
      'Debate scoring rubric for audience',
    ],
    differentiation: `<p><strong>Support:</strong> Provide pre-written argument frames: "Our first point is that... This is supported by...". Allow students to read from notes for their first debate. Assign the Summariser role to less confident speakers.</p>
<p><strong>Stretch:</strong> Require speakers to deliver without notes. Introduce "Points of Information" where the opposition can interject mid-speech. Students must use at least two named persuasive techniques and identify them in their opponent's speech.</p>`,
    linkedObjectives: ['8SL.1', '8SL.2'],
  },
  {
    id: 'sl-y8-12',
    title: 'Balloon Debate: Which Character Survives?',
    yearGroup: 8,
    termUnit: 'Autumn 1',
    duration: 35,
    type: 'Formal Debate',
    instructions: `<h3>Balloon Debate: Which Character Survives?</h3>
<p><strong>Objective:</strong> Students argue persuasively in character, building on others' ideas to challenge and defend positions.</p>
<h4>Setup (5 minutes)</h4>
<ul>
  <li>Explain the scenario: a hot air balloon is losing altitude and one character must be thrown out. Each character must argue why they should stay.</li>
  <li>Select 4-5 characters from the current text (or across texts studied).</li>
  <li>Assign each character to a student or pair of students.</li>
  <li>Give 5 minutes to prepare a 1-minute speech: <em>"I deserve to stay because..."</em></li>
</ul>
<h4>Round 1: Opening Pleas (8 minutes)</h4>
<ul>
  <li>Each character delivers their speech.</li>
  <li>Audience listens and takes notes on the most and least persuasive points.</li>
</ul>
<h4>Round 2: Challenges (10 minutes)</h4>
<ul>
  <li>Characters can now challenge each other: <em>"[Character] should go because..."</em></li>
  <li>Challenged characters have 30 seconds to respond.</li>
  <li>Audience can ask questions to any character.</li>
</ul>
<h4>Vote (5 minutes)</h4>
<ul>
  <li>After each round, the class votes on who to eliminate.</li>
  <li>Continue until one character remains.</li>
  <li>The winning character explains what their survival says about the text's values.</li>
</ul>
<h4>Reflection (7 minutes)</h4>
<ul>
  <li>Discuss: <em>"Did the best debater win, or the most important character? What's the difference?"</em></li>
  <li>Students write a paragraph: <em>"The character who should survive is... because..."</em></li>
</ul>`,
    assessmentCriteria: [
      'Argues persuasively in character with textual justification',
      'Responds to challenges with composure and counter-arguments',
      'Builds on others\' contributions to strengthen or weaken positions',
      'Speaks with confidence, clarity, and appropriate expression',
    ],
    resources: [
      'Character profile cards',
      'Speech preparation template',
      'Voting slips',
      'Balloon debate visual display',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a character profile with 3 key reasons pre-written. Allow pairs to represent each character so they can support each other. Give a "challenge bank" of possible criticisms to use.</p>
<p><strong>Stretch:</strong> Characters must argue using only evidence from the text (no invented reasons). After elimination, the removed character joins the audience as an "expert critic" who can challenge remaining speakers with textual evidence.</p>`,
    linkedObjectives: ['8SL.1', '8SL.2', '8SL.3'],
  },

  // --- 13-14: Speech delivery ---
  {
    id: 'sl-y8-13',
    title: 'Speech Writing and Delivery: A Cause I Care About',
    yearGroup: 8,
    termUnit: 'Autumn 2',
    duration: 45,
    type: 'Speech Delivery',
    instructions: `<h3>Speech Writing and Delivery: A Cause I Care About</h3>
<p><strong>Objective:</strong> Students write and deliver a persuasive speech on a topic they care about, speaking confidently to an audience.</p>
<h4>Stage 1: Speech Writing (15 minutes or homework)</h4>
<ul>
  <li>Students choose a cause or issue they feel strongly about.</li>
  <li>They write a 2-3 minute speech using the structure:
    <ol>
      <li><strong>Hook:</strong> An attention-grabbing opening (question, statistic, anecdote)</li>
      <li><strong>Problem:</strong> What is the issue and why does it matter?</li>
      <li><strong>Evidence:</strong> At least two supporting points with examples</li>
      <li><strong>Call to action:</strong> What should the audience do?</li>
      <li><strong>Memorable close:</strong> A powerful final sentence</li>
    </ol>
  </li>
  <li>Students must include at least three rhetorical techniques (labelled in their script).</li>
</ul>
<h4>Stage 2: Rehearsal (5 minutes)</h4>
<ul>
  <li>Students practise with a partner, focusing on:
    <ul>
      <li>Pace: not too fast</li>
      <li>Volume: projecting to the back of the room</li>
      <li>Eye contact: looking up from notes regularly</li>
      <li>Emphasis: stressing key words and pausing for effect</li>
    </ul>
  </li>
  <li>Partners give one tip for improvement.</li>
</ul>
<h4>Stage 3: Delivery (20 minutes)</h4>
<ul>
  <li>Students deliver their speech to the class or in groups of 8-10.</li>
  <li>Audience completes a feedback grid: Content / Delivery / Persuasiveness (scored 1-5 with a comment).</li>
</ul>
<h4>Feedback and Awards (5 minutes)</h4>
<ul>
  <li>Teacher awards "Best Hook", "Most Passionate Delivery", "Strongest Evidence".</li>
  <li>Students identify one skill they want to improve for next time.</li>
</ul>`,
    assessmentCriteria: [
      'Structures a speech with a clear opening, development, and conclusion',
      'Uses at least three rhetorical techniques effectively',
      'Delivers with appropriate pace, volume, and emphasis',
      'Engages the audience through eye contact and confident body language',
    ],
    resources: [
      'Speech writing template (5-part structure)',
      'Rhetorical techniques reference sheet',
      'Peer feedback grid',
      'Award certificates or labels',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a partially completed speech frame with sentence starters for each section. Allow students to present seated or to a smaller group. Reduce to 1.5 minutes. Provide a list of possible causes to choose from.</p>
<p><strong>Stretch:</strong> Require students to deliver without any notes. Extend to 4 minutes. Include a 1-minute Q&A after the speech. Students must analyse a famous speech (e.g., Greta Thunberg, Martin Luther King Jr.) and identify techniques they will borrow.</p>`,
    linkedObjectives: ['8SL.1', '8SL.3'],
  },
  {
    id: 'sl-y8-14',
    title: 'Famous Speeches: Analyse and Perform',
    yearGroup: 8,
    termUnit: 'Autumn 2',
    duration: 40,
    type: 'Speech Delivery',
    instructions: `<h3>Famous Speeches: Analyse and Perform</h3>
<p><strong>Objective:</strong> Students analyse the techniques in a famous speech and then perform an extract, focusing on delivery skills.</p>
<h4>Analysis Phase (15 minutes)</h4>
<ul>
  <li>Provide groups of 3-4 with an extract from a famous speech (e.g., Churchill's "We shall fight on the beaches", Malala Yousafzai's UN address, Obama's "Yes We Can").</li>
  <li>Groups annotate the extract for:
    <ul>
      <li>Rhetorical techniques (repetition, tricolon, direct address)</li>
      <li>Emotional appeals (pathos, ethos, logos)</li>
      <li>Delivery cues: where would the speaker pause, emphasise, speed up, slow down?</li>
    </ul>
  </li>
  <li>Groups mark up their extract with delivery annotations (underline for emphasis, // for pause, arrows for rising/falling intonation).</li>
</ul>
<h4>Rehearsal (5 minutes)</h4>
<ul>
  <li>Groups decide how to divide the speech for shared performance.</li>
  <li>Each member practises their section, focusing on the annotated delivery cues.</li>
</ul>
<h4>Performance (15 minutes)</h4>
<ul>
  <li>Each group performs their speech extract to the class.</li>
  <li>Audience uses a "delivery checklist" to score: pace, volume, expression, pauses, eye contact.</li>
</ul>
<h4>Comparison (5 minutes)</h4>
<ul>
  <li>Watch a clip of the original speech being delivered.</li>
  <li>Discuss: <em>"What did the original speaker do that we could learn from?"</em></li>
</ul>`,
    assessmentCriteria: [
      'Identifies and explains rhetorical techniques in the speech',
      'Delivers the speech extract with appropriate pace, tone, and emphasis',
      'Uses pauses and intonation to enhance meaning',
      'Evaluates their own performance against the original speaker',
    ],
    resources: [
      'Famous speech extracts (printed, one per group)',
      'Delivery annotation guide (symbols for pause, emphasis, etc.)',
      'Delivery checklist for audience scoring',
      'Video clips of original speeches',
    ],
    differentiation: `<p><strong>Support:</strong> Pre-annotate the speech with some delivery cues. Provide a shorter extract (8-10 lines). Allow groups to perform as a chorus (speaking together). Include a glossary of rhetorical terms.</p>
<p><strong>Stretch:</strong> Students write their own 1-minute speech in the style of the famous speaker, using the same techniques. They deliver both the original extract and their own composition, explaining the techniques they adopted.</p>`,
    linkedObjectives: ['8SL.1', '8SL.3'],
  },

  // --- 15-16: Group discussion with roles ---
  {
    id: 'sl-y8-15',
    title: 'Envoys Discussion: Sharing Expert Knowledge',
    yearGroup: 8,
    termUnit: 'Spring 1',
    duration: 35,
    type: 'Group Discussion with Roles',
    instructions: `<h3>Envoys Discussion: Sharing Expert Knowledge</h3>
<p><strong>Objective:</strong> Students present information clearly to different groups, building on others' ideas through structured discussion.</p>
<h4>Expert Group Phase (12 minutes)</h4>
<ul>
  <li>Divide class into 5 "expert groups", each assigned a different aspect of the text:
    <ul>
      <li>Group 1: Character development</li>
      <li>Group 2: Setting and atmosphere</li>
      <li>Group 3: Key themes</li>
      <li>Group 4: Writer's language techniques</li>
      <li>Group 5: Structural choices</li>
    </ul>
  </li>
  <li>Each expert group discusses their topic, gathering key points and selecting the best quotations.</li>
  <li>Groups prepare a brief summary with 3-4 key points to share.</li>
</ul>
<h4>Envoy Phase (15 minutes)</h4>
<ul>
  <li>One "envoy" from each expert group moves to a new mixed group (one envoy from each topic).</li>
  <li>Each envoy has 2 minutes to present their expert group's findings.</li>
  <li>After each presentation, the mixed group asks one clarifying question.</li>
  <li>The mixed group's task: decide which aspect (character, setting, themes, language, structure) is most important for understanding the text.</li>
</ul>
<h4>Whole-Class Vote and Discussion (8 minutes)</h4>
<ul>
  <li>Each mixed group announces their decision with justification.</li>
  <li>Class discusses whether they agree and why.</li>
</ul>`,
    assessmentCriteria: [
      'Presents expert knowledge clearly and concisely to a new group',
      'Answers clarifying questions with confidence',
      'Listens to envoys from other groups and identifies connections',
      'Builds on others\' ideas to form a justified group conclusion',
    ],
    resources: [
      'Expert group topic cards with guiding questions',
      'Summary recording sheet (3-4 key points + quotations)',
      'Mixed group decision-making template',
    ],
    differentiation: `<p><strong>Support:</strong> Pair less confident students as co-envoys who present together. Provide expert groups with pre-selected quotations and a structured summary frame. Give mixed groups a ranking template.</p>
<p><strong>Stretch:</strong> Envoys must present without notes, relying on their understanding. Mixed groups must produce a written paragraph synthesising all five aspects into a holistic interpretation of the text.</p>`,
    linkedObjectives: ['8SL.1', '8SL.2', '8SL.3'],
  },
  {
    id: 'sl-y8-16',
    title: 'Fishbowl Discussion: Ethical Dilemmas in Literature',
    yearGroup: 8,
    termUnit: 'Spring 1',
    duration: 35,
    type: 'Group Discussion with Roles',
    instructions: `<h3>Fishbowl Discussion: Ethical Dilemmas in Literature</h3>
<p><strong>Objective:</strong> Students discuss complex ethical questions from a text, speaking confidently and building on others' ideas in a structured format.</p>
<h4>Setup (5 minutes)</h4>
<ul>
  <li>Arrange chairs in two circles: an inner "fishbowl" of 5-6 chairs and an outer observation ring.</li>
  <li>Leave one inner chair empty (the "hot chair").</li>
  <li>Present the ethical dilemma from the text, e.g., <em>"Was [character]'s betrayal justified?"</em> or <em>"Should [character] have told the truth?"</em></li>
  <li>All students prepare by noting their position and two supporting reasons.</li>
</ul>
<h4>Fishbowl Discussion (20 minutes)</h4>
<ul>
  <li>5 students begin the discussion in the inner circle.</li>
  <li>When an outer circle student wants to contribute, they tap the empty "hot chair" and join the discussion. One inner circle member must voluntarily leave to maintain the number.</li>
  <li>Roles for outer circle observers:
    <ul>
      <li><strong>Argument Tracker:</strong> Lists the main arguments made</li>
      <li><strong>Evidence Checker:</strong> Notes when textual evidence is used</li>
      <li><strong>Language Monitor:</strong> Records effective phrases and discussion stems used</li>
    </ul>
  </li>
</ul>
<h4>Observer Reports (8 minutes)</h4>
<ul>
  <li>Observers share their findings with the class.</li>
  <li>Class evaluates: <em>"What was the strongest argument? What evidence was most convincing?"</em></li>
</ul>
<h4>Written Reflection (2 minutes)</h4>
<ul>
  <li>Students write their final position and whether the discussion changed their mind.</li>
</ul>`,
    assessmentCriteria: [
      'Contributes thoughtfully to the discussion with clear reasoning',
      'References the text to support ethical arguments',
      'Builds on others\' ideas or respectfully challenges them',
      'Moves in and out of the fishbowl at appropriate moments',
    ],
    resources: [
      'Fishbowl chair arrangement',
      'Ethical dilemma question card',
      'Observer role cards and recording sheets',
      'Reflection slip',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a position statement with two supporting reasons pre-written for students to adapt. Allow students to pass a written note to someone in the fishbowl if they don't want to enter. Reduce inner circle to 4.</p>
<p><strong>Stretch:</strong> Require every participant to reference at least one quotation. Introduce a "devil's advocate" role where one student must argue the opposite of their real view. Students write a balanced discursive essay afterwards using arguments from the fishbowl.</p>`,
    linkedObjectives: ['8SL.1', '8SL.2'],
  },

  // --- 17-18: Performance poetry ---
  {
    id: 'sl-y8-17',
    title: 'Poetry Performance: Bringing a Poem to Life',
    yearGroup: 8,
    termUnit: 'Spring 2',
    duration: 40,
    type: 'Performance Poetry',
    instructions: `<h3>Poetry Performance: Bringing a Poem to Life</h3>
<p><strong>Objective:</strong> Students perform a poem with appropriate expression, demonstrating understanding of tone, mood, and meaning.</p>
<h4>Analysis Phase (10 minutes)</h4>
<ul>
  <li>Provide groups of 3-4 with a poem from the anthology or curriculum.</li>
  <li>Groups discuss:
    <ul>
      <li>What is the poem's overall mood and tone?</li>
      <li>Where does the mood shift?</li>
      <li>Which words or phrases need particular emphasis?</li>
      <li>What pace and volume are appropriate for different sections?</li>
    </ul>
  </li>
  <li>Groups annotate the poem with performance directions: bold for emphasis, slashes for pauses, arrows for pace changes, notes on volume.</li>
</ul>
<h4>Rehearsal (10 minutes)</h4>
<ul>
  <li>Groups decide how to split the poem for performance (solo lines, paired lines, whole-group choruses).</li>
  <li>They may add:
    <ul>
      <li>Physical gestures or movement</li>
      <li>Sound effects (clapping, stamping, whispering)</li>
      <li>Contrasting voices (angry, gentle, fearful)</li>
    </ul>
  </li>
  <li>Each group rehearses at least twice, receiving teacher feedback during circulation.</li>
</ul>
<h4>Performance (15 minutes)</h4>
<ul>
  <li>Each group performs to the class.</li>
  <li>Audience uses a feedback form rating: Expression, Understanding of Meaning, Creativity, Teamwork (1-5 each with a comment).</li>
</ul>
<h4>Reflection (5 minutes)</h4>
<ul>
  <li>Discuss: <em>"Did performing the poem change your understanding of it? How?"</em></li>
  <li>Link to analytical writing: how performance choices reflect interpretation.</li>
</ul>`,
    assessmentCriteria: [
      'Uses vocal expression (tone, pace, volume) to convey the poem\'s meaning',
      'Demonstrates understanding of the poem\'s mood shifts and key moments',
      'Works collaboratively to create an effective group performance',
      'Presents clearly and confidently to an audience',
    ],
    resources: [
      'Poem text (printed, one per group member)',
      'Performance annotation guide',
      'Audience feedback forms',
      'Space for rehearsal and performance',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a pre-annotated version with some performance cues marked. Allow groups to choose between two poems of different complexity. Assign a "director" role to a confident student in each group.</p>
<p><strong>Stretch:</strong> Groups must perform from memory. They add an original stanza (written collaboratively) at the end that extends the poem's themes. After performance, each group writes a director's commentary explaining their interpretive choices.</p>`,
    linkedObjectives: ['8SL.1', '8SL.3'],
  },
  {
    id: 'sl-y8-18',
    title: 'Slam Poetry Workshop: Writing and Performing Original Poetry',
    yearGroup: 8,
    termUnit: 'Spring 2',
    duration: 45,
    type: 'Performance Poetry',
    instructions: `<h3>Slam Poetry Workshop: Writing and Performing Original Poetry</h3>
<p><strong>Objective:</strong> Students write and perform an original spoken word poem, presenting clearly and with passion.</p>
<h4>Introduction (5 minutes)</h4>
<ul>
  <li>Show a short clip of a spoken word/slam poet performing (e.g., a young person's slam poetry competition).</li>
  <li>Discuss: What makes spoken word poetry different from reading a poem on a page? (Emphasis on delivery, emotion, rhythm, audience connection.)</li>
</ul>
<h4>Writing Phase (15 minutes)</h4>
<ul>
  <li>Students write an original poem of 12-20 lines on a theme of their choice:
    <ul>
      <li>Suggested themes: identity, belonging, injustice, growing up, the power of words</li>
    </ul>
  </li>
  <li>Requirements:
    <ul>
      <li>At least one use of repetition for emphasis</li>
      <li>At least one rhetorical question</li>
      <li>A powerful opening line and a memorable final line</li>
      <li>Consider rhythm and how the poem sounds when spoken aloud</li>
    </ul>
  </li>
</ul>
<h4>Peer Rehearsal (8 minutes)</h4>
<ul>
  <li>In pairs, students read their poems aloud twice.</li>
  <li>First read: partner listens for meaning.</li>
  <li>Second read: partner gives specific delivery feedback (pace, emphasis, gesture).</li>
  <li>Students revise their poem and performance based on feedback.</li>
</ul>
<h4>Slam Performance (15 minutes)</h4>
<ul>
  <li>Volunteers perform to the class (or all students perform in groups of 6-8).</li>
  <li>Audience responds with "snapping" (the slam poetry tradition) for lines they connect with.</li>
  <li>Teacher and peer panel score on: Content, Delivery, Originality, Emotional Impact (1-10 each).</li>
</ul>
<h4>Celebration (2 minutes)</h4>
<ul>
  <li>Award "Poet of the Session" and celebrate standout lines.</li>
</ul>`,
    assessmentCriteria: [
      'Writes an original poem with rhetorical and poetic techniques',
      'Performs with conviction, varying pace and volume for effect',
      'Engages the audience through eye contact and physical presence',
      'Responds to peer feedback and refines performance',
    ],
    resources: [
      'Spoken word poetry video clip',
      'Poetry writing template with technique checklist',
      'Peer feedback forms',
      'Scoring sheets for slam panel',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a poem frame with the opening line and structure mapped out. Allow performance in pairs. Offer a word bank related to each theme. Reduce minimum length to 8 lines.</p>
<p><strong>Stretch:</strong> Perform entirely from memory. Include at least four different poetic/rhetorical devices. Write and perform a response poem to a famous spoken word piece. Deliver to the whole class rather than in groups.</p>`,
    linkedObjectives: ['8SL.1', '8SL.3'],
  },

  // --- 19-20: Media presentation ---
  {
    id: 'sl-y8-19',
    title: 'News Report Presentation: Reporting on a Text Event',
    yearGroup: 8,
    termUnit: 'Summer 1',
    duration: 40,
    type: 'Media Presentation',
    instructions: `<h3>News Report Presentation: Reporting on a Text Event</h3>
<p><strong>Objective:</strong> Students present clearly in the style of a news broadcast, demonstrating confident speaking in a range of contexts.</p>
<h4>Planning Phase (15 minutes)</h4>
<ul>
  <li>Groups of 3-4 create a news report about a key event from the current text.</li>
  <li>Assign roles within the group:
    <ul>
      <li><strong>News Anchor:</strong> Introduces and summarises the story from the studio</li>
      <li><strong>On-the-Scene Reporter:</strong> Reports live from the location of the event</li>
      <li><strong>Witness/Character Interview:</strong> Speaks in character as an eyewitness</li>
      <li><strong>Expert Commentator:</strong> Provides analysis and context</li>
    </ul>
  </li>
  <li>Groups plan their broadcast:
    <ul>
      <li>Opening headline (attention-grabbing)</li>
      <li>What happened? When? Where? Who was involved?</li>
      <li>Eyewitness testimony</li>
      <li>Expert analysis: why this event matters</li>
      <li>Closing summary and "reaction from the public"</li>
    </ul>
  </li>
</ul>
<h4>Rehearsal (5 minutes)</h4>
<ul>
  <li>Groups practise smooth handovers between speakers.</li>
  <li>Focus on adopting a "news presenter" register: formal, clear, measured pace.</li>
</ul>
<h4>Broadcast (15 minutes)</h4>
<ul>
  <li>Each group performs their news report (3-4 minutes each).</li>
  <li>Audience scores on: Accuracy (to the text), Clarity, Professionalism of Delivery, Teamwork.</li>
</ul>
<h4>Debrief (5 minutes)</h4>
<ul>
  <li>Discuss how adapting to a "news register" changes how we talk about events.</li>
  <li>Connect to non-fiction writing skills: how is a spoken report similar to written journalism?</li>
</ul>`,
    assessmentCriteria: [
      'Adapts speaking style to a formal media register',
      'Presents factual information clearly and accurately',
      'Works collaboratively with smooth transitions between speakers',
      'Demonstrates confident delivery appropriate to the role (anchor, reporter, witness, expert)',
    ],
    resources: [
      'News report planning template',
      'Role cards (Anchor, Reporter, Witness, Expert)',
      'Props (optional: desk for anchor, microphone prop for reporter)',
      'Audience scoring sheet',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a scripted opening and closing for the Anchor role. Reduce to 3 roles per group. Offer a "news vocabulary" word bank (sources confirm, witnesses report, authorities state). Allow groups to use a teleprompter (screen with key bullet points).</p>
<p><strong>Stretch:</strong> Include a "breaking news" interruption mid-broadcast that forces improvisation. Add a "debate panel" segment where the Expert and Witness disagree. Groups must deliver without scripts. Record and self-evaluate.</p>`,
    linkedObjectives: ['8SL.1', '8SL.2', '8SL.3'],
  },
  {
    id: 'sl-y8-20',
    title: 'Documentary Pitch: Presenting a Concept to Commissioners',
    yearGroup: 8,
    termUnit: 'Summer 1',
    duration: 40,
    type: 'Media Presentation',
    instructions: `<h3>Documentary Pitch: Presenting a Concept to Commissioners</h3>
<p><strong>Objective:</strong> Students develop and deliver a polished media pitch, presenting ideas clearly and persuasively to a panel.</p>
<h4>Brief (5 minutes)</h4>
<ul>
  <li>Explain the task: groups of 3-4 will pitch a documentary idea inspired by a theme from their English studies (e.g., justice, power, identity, social class, prejudice).</li>
  <li>The documentary must connect the theme to both the text studied and the real world.</li>
  <li>The pitch will be delivered to a panel of "commissioners" (teacher and selected students).</li>
</ul>
<h4>Development Phase (15 minutes)</h4>
<ul>
  <li>Groups plan their pitch, covering:
    <ul>
      <li><strong>Title and tagline:</strong> A compelling name and one-sentence summary</li>
      <li><strong>Synopsis:</strong> What is the documentary about? (2-3 sentences)</li>
      <li><strong>Structure:</strong> How many episodes/sections? What does each cover?</li>
      <li><strong>Connection to the text:</strong> How does the theme appear in the studied text?</li>
      <li><strong>Target audience:</strong> Who would watch this and why?</li>
      <li><strong>Unique selling point:</strong> Why should commissioners choose this documentary?</li>
    </ul>
  </li>
  <li>Groups prepare a visual aid (hand-drawn poster, simple slides, or storyboard).</li>
</ul>
<h4>Pitch Delivery (15 minutes)</h4>
<ul>
  <li>Each group delivers a 3-minute pitch to the panel.</li>
  <li>The panel asks 2 questions after each pitch.</li>
  <li>Groups must answer confidently and develop their ideas on the spot.</li>
</ul>
<h4>Commissioning Decision (5 minutes)</h4>
<ul>
  <li>The panel deliberates and selects one documentary to "commission".</li>
  <li>They explain their decision, highlighting effective presentation techniques.</li>
</ul>`,
    assessmentCriteria: [
      'Presents a clear, structured pitch with all required elements',
      'Speaks persuasively, selling the idea with enthusiasm and conviction',
      'Responds to panel questions confidently and coherently',
      'Uses visual aids effectively to support the presentation',
    ],
    resources: [
      'Pitch planning template (title, synopsis, structure, audience, USP)',
      'A3 paper and markers for visual aids',
      'Commissioner question cards',
      'Panel scoring rubric',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a completed example pitch to model expectations. Offer pre-written panel questions so groups can prepare answers in advance. Allow groups to use detailed notes during the pitch. Assign specific sections to each group member.</p>
<p><strong>Stretch:</strong> Pitch must include a 30-second "trailer script" performed live. Panel asks unprepared follow-up questions. Groups must pitch without notes or visual aids, relying on their delivery alone. Include a "competitor analysis" showing how their documentary differs from existing ones.</p>`,
    linkedObjectives: ['8SL.1', '8SL.2', '8SL.3'],
  },

  // =========================================================================
  // YEAR 9 S&L Activities (21-30)
  // =========================================================================

  // --- 21-22: Persuasive speeches ---
  {
    id: 'sl-y9-21',
    title: 'Persuasive Speech: Arguing for Change',
    yearGroup: 9,
    termUnit: 'Autumn 1',
    duration: 45,
    type: 'Persuasive Speech',
    instructions: `<h3>Persuasive Speech: Arguing for Change</h3>
<p><strong>Objective:</strong> Students write and deliver a fluent, persuasive speech that argues for change on a significant issue.</p>
<h4>Context Setting (5 minutes)</h4>
<ul>
  <li>Introduce the scenario: students have been invited to address a panel of decision-makers (school governors, local council, or a fictional government committee) about an issue that needs changing.</li>
  <li>Possible topics: school policy changes, environmental action, social justice issues, community improvements.</li>
</ul>
<h4>Speech Construction (15 minutes or homework)</h4>
<ul>
  <li>Students write a 3-4 minute persuasive speech using the structure:
    <ol>
      <li><strong>Establishment of credibility:</strong> Why should the audience listen to you?</li>
      <li><strong>The problem:</strong> Clear description with evidence (statistics, examples, anecdotes)</li>
      <li><strong>The impact:</strong> Who is affected and how?</li>
      <li><strong>The solution:</strong> A specific, actionable proposal</li>
      <li><strong>Counter-argument and rebuttal:</strong> Address the strongest objection</li>
      <li><strong>Call to action:</strong> What should happen next?</li>
    </ol>
  </li>
  <li>Must include: anaphora (repetition for effect), at least one direct address to the audience, a tricolon, and emotive language.</li>
</ul>
<h4>Delivery (20 minutes)</h4>
<ul>
  <li>Students deliver to the class. The audience plays the role of the panel.</li>
  <li>After each speech, the panel may ask one challenging question.</li>
  <li>Audience evaluates using a detailed rubric: Structure (5), Evidence (5), Rhetorical Skill (5), Delivery (5), Persuasiveness (5).</li>
</ul>
<h4>Feedback (5 minutes)</h4>
<ul>
  <li>Panel votes on the most persuasive speech.</li>
  <li>Teacher provides targeted feedback on fluency, persuasion, and rhetorical technique.</li>
</ul>`,
    assessmentCriteria: [
      'Speaks fluently with minimal hesitation and no reliance on a full script',
      'Constructs a logically sequenced, persuasive argument',
      'Employs a range of rhetorical techniques with deliberate effect',
      'Handles audience questions with confidence and composure',
    ],
    resources: [
      'Speech construction template (6-part structure)',
      'Rhetorical techniques glossary',
      'Audience evaluation rubric (25-point scale)',
      'Panel question preparation cards',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a speech frame with sentence starters for each section. Allow use of cue cards (bullet points only, not full sentences). Offer a bank of statistics and examples for common topics. Pair with a "speech coach" partner who gives feedback during rehearsal.</p>
<p><strong>Stretch:</strong> Deliver entirely from memory. Include a minimum of five named rhetorical techniques. Respond to two panel questions. Write and deliver a 1-minute rebuttal to a peer's speech, demonstrating ability to counter-argue spontaneously.</p>`,
    linkedObjectives: ['9SL.1', '9SL.2'],
  },
  {
    id: 'sl-y9-22',
    title: 'Speech to Inspire: Addressing a Graduation Assembly',
    yearGroup: 9,
    termUnit: 'Autumn 1',
    duration: 45,
    type: 'Persuasive Speech',
    instructions: `<h3>Speech to Inspire: Addressing a Graduation Assembly</h3>
<p><strong>Objective:</strong> Students craft and deliver an inspirational speech, demonstrating fluency, engagement, and sophisticated rhetorical control.</p>
<h4>Context (5 minutes)</h4>
<ul>
  <li>Scenario: students have been asked to deliver a speech at a Year 11 graduation ceremony. The speech should inspire the graduating class as they move to the next stage of their lives.</li>
  <li>Discuss the genre: what makes an inspirational speech different from a persuasive one? (Focus on shared values, storytelling, emotional resonance, hope.)</li>
</ul>
<h4>Analysis of Models (10 minutes)</h4>
<ul>
  <li>Read short extracts from two famous inspirational speeches.</li>
  <li>Identify techniques: personal anecdote, universal themes, metaphor, direct address, building to a climax, inclusive pronouns ("we", "our").</li>
</ul>
<h4>Writing Phase (10 minutes or homework)</h4>
<ul>
  <li>Students write a 3-minute speech including:
    <ul>
      <li>A personal story or anecdote that connects to a universal theme</li>
      <li>A clear message or piece of advice</li>
      <li>At least one extended metaphor</li>
      <li>A powerful, memorable closing line</li>
      <li>Inclusive language that speaks to a whole audience</li>
    </ul>
  </li>
</ul>
<h4>Delivery (15 minutes)</h4>
<ul>
  <li>Students deliver to the class, standing at a lectern or at the front.</li>
  <li>Emphasis on: varied tone, deliberate pauses, building emotion, eye contact across the whole room.</li>
  <li>Audience gives a "standing ovation score" (1-10 with justification).</li>
</ul>
<h4>Reflection (5 minutes)</h4>
<ul>
  <li>Class discusses: what distinguishes a good speech from a great one?</li>
  <li>Students set a personal target for their next speaking opportunity.</li>
</ul>`,
    assessmentCriteria: [
      'Delivers a speech with fluency, emotion, and controlled pacing',
      'Uses storytelling and personal anecdote to connect with the audience',
      'Employs extended metaphor and inclusive language effectively',
      'Builds to a climax with a memorable and impactful conclusion',
    ],
    resources: [
      'Extracts from famous inspirational speeches',
      'Speech writing template (anecdote, message, metaphor, close)',
      'Audience scoring sheet (standing ovation score)',
      'Lectern or podium (optional)',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a modelled opening paragraph. Offer a list of universal themes to choose from (resilience, friendship, courage, change). Allow use of cue cards. Reduce to 2 minutes. Perform to a small group first.</p>
<p><strong>Stretch:</strong> Deliver from memory with no notes. Include subtle humour. Reference a literary quotation and explain its relevance. Record the speech and write a self-evaluation analysing their own rhetorical choices and delivery.</p>`,
    linkedObjectives: ['9SL.1', '9SL.3'],
  },

  // --- 23-24: Academic debates ---
  {
    id: 'sl-y9-23',
    title: 'Academic Debate: Literary Interpretation on Trial',
    yearGroup: 9,
    termUnit: 'Autumn 2',
    duration: 50,
    type: 'Academic Debate',
    instructions: `<h3>Academic Debate: Literary Interpretation on Trial</h3>
<p><strong>Objective:</strong> Students debate a literary proposition using textual evidence, demonstrating the ability to justify and defend interpretations.</p>
<h4>Preparation (15 minutes)</h4>
<ul>
  <li>Present the proposition, e.g.:
    <ul>
      <li><em>"[Character] is the true villain of [text]"</em></li>
      <li><em>"[Text] is fundamentally a story about [theme], not [other theme]"</em></li>
      <li><em>"The writer's primary purpose is to criticise [issue]"</em></li>
    </ul>
  </li>
  <li>Divide into Prosecution (agrees) and Defence (disagrees) teams of 4-5.</li>
  <li>Teams prepare:
    <ul>
      <li>3 key arguments with at least one quotation per argument</li>
      <li>Analysis of how language/structure supports their position</li>
      <li>Anticipated counter-arguments and prepared rebuttals</li>
      <li>Opening and closing statements</li>
    </ul>
  </li>
  <li>Assign roles: Lead Counsel (opening/closing), Witnesses (present arguments), Cross-Examiner (questions the opposition).</li>
</ul>
<h4>Trial Structure (30 minutes)</h4>
<ol>
  <li>Prosecution Opening Statement (2 minutes)</li>
  <li>Defence Opening Statement (2 minutes)</li>
  <li>Prosecution Witness 1 presents argument (3 minutes)</li>
  <li>Defence Cross-Examination of Witness 1 (2 minutes)</li>
  <li>Defence Witness 1 presents argument (3 minutes)</li>
  <li>Prosecution Cross-Examination of Witness 1 (2 minutes)</li>
  <li>Prosecution Witness 2 presents argument (3 minutes)</li>
  <li>Defence Cross-Examination of Witness 2 (2 minutes)</li>
  <li>Defence Witness 2 presents argument (3 minutes)</li>
  <li>Prosecution Cross-Examination of Witness 2 (2 minutes)</li>
  <li>Defence Closing Statement (2 minutes)</li>
  <li>Prosecution Closing Statement (2 minutes)</li>
</ol>
<h4>Jury Deliberation and Verdict (5 minutes)</h4>
<ul>
  <li>Remaining students (the jury) deliberate and deliver a verdict.</li>
  <li>The jury must explain which argument they found most convincing and why, citing specific evidence used.</li>
</ul>`,
    assessmentCriteria: [
      'Constructs a sophisticated argument supported by close textual analysis',
      'Cross-examines effectively, identifying weaknesses in the opposition\'s argument',
      'Speaks fluently and formally, adapting register to the trial context',
      'Justifies interpretations with specific quotations and analytical commentary',
    ],
    resources: [
      'Trial preparation pack (argument template with quotation banks)',
      'Role cards (Lead Counsel, Witnesses, Cross-Examiner)',
      'Text copies with key passages bookmarked',
      'Jury deliberation template',
      'Timer',
    ],
    differentiation: `<p><strong>Support:</strong> Pre-select quotations for each team. Provide cross-examination question starters: "But doesn't the writer suggest... when they write...?". Allow Witnesses to read from prepared statements. Reduce to 2 arguments per side.</p>
<p><strong>Stretch:</strong> Cross-examiners must formulate questions spontaneously (no prepared questions). Closing statements must be delivered without notes and must reference at least two points made by the opposition. Include contextual evidence (historical, biographical) alongside textual analysis.</p>`,
    linkedObjectives: ['9SL.1', '9SL.2'],
  },
  {
    id: 'sl-y9-24',
    title: 'Panel Debate: Contemporary Issues Through a Literary Lens',
    yearGroup: 9,
    termUnit: 'Autumn 2',
    duration: 45,
    type: 'Academic Debate',
    instructions: `<h3>Panel Debate: Contemporary Issues Through a Literary Lens</h3>
<p><strong>Objective:</strong> Students engage in a high-level panel debate connecting literary themes to real-world issues, debating and justifying their views.</p>
<h4>Setup (10 minutes)</h4>
<ul>
  <li>Select a topic that bridges literature and contemporary life, e.g.:
    <ul>
      <li><em>"Are Orwell's warnings in [text] coming true today?"</em></li>
      <li><em>"Has society made progress on the issues raised in [text], or are they still relevant?"</em></li>
      <li><em>"Should [text] be required reading for all students? Why?"</em></li>
    </ul>
  </li>
  <li>Assemble a panel of 5-6 students, each representing a different perspective:
    <ul>
      <li>The Author (arguing their text's relevance)</li>
      <li>A Modern Politician</li>
      <li>A Student/Young Person</li>
      <li>A Literary Critic</li>
      <li>A Social Commentator/Journalist</li>
      <li>Optional: A Character from the text</li>
    </ul>
  </li>
  <li>Panel members prepare a 1-minute opening statement from their perspective.</li>
  <li>Remaining students prepare questions as the "studio audience".</li>
</ul>
<h4>Panel Discussion (25 minutes)</h4>
<ul>
  <li>A student Chair introduces the topic and each panellist.</li>
  <li>Each panellist delivers their opening statement (6 minutes total).</li>
  <li>The Chair opens the floor for audience questions (10 minutes).</li>
  <li>Panellists respond and may challenge each other (9 minutes free debate).</li>
  <li>The Chair asks each panellist for a final one-sentence summary of their position.</li>
</ul>
<h4>Audience Vote and Reflection (10 minutes)</h4>
<ul>
  <li>Audience votes on which panellist was most convincing.</li>
  <li>Class discusses: <em>"What did this debate reveal about the text that we hadn't considered before?"</em></li>
  <li>Written reflection: <em>"How does [text] help us understand [contemporary issue]?"</em></li>
</ul>`,
    assessmentCriteria: [
      'Adopts and sustains a convincing persona with an appropriate register',
      'Connects literary themes to real-world issues with specific examples',
      'Debates fluently, responding to challenges with justified counter-arguments',
      'Asks or responds to questions that deepen the discussion',
    ],
    resources: [
      'Panel role cards with persona descriptions',
      'Opening statement preparation template',
      'Audience question preparation cards',
      'Chair\'s script (introductions, question management, closing)',
      'Voting slips and reflection template',
    ],
    differentiation: `<p><strong>Support:</strong> Provide persona role cards with 3 key points pre-written from each perspective. Give audience members a question bank to choose from. Allow panellists to use notes. Assign the Chair role to the teacher.</p>
<p><strong>Stretch:</strong> Panellists receive their role 5 minutes before the debate and must prepare independently. Audience members must ask follow-up questions (not pre-prepared). The Author panellist must defend their text using only textual evidence, no external research. Written reflection extends to a full essay.</p>`,
    linkedObjectives: ['9SL.1', '9SL.2', '9SL.3'],
  },

  // --- 25-26: Creative justification presentations ---
  {
    id: 'sl-y9-25',
    title: 'Director\'s Vision: Justifying Creative Choices',
    yearGroup: 9,
    termUnit: 'Spring 1',
    duration: 40,
    type: 'Creative Justification',
    instructions: `<h3>Director's Vision: Justifying Creative Choices</h3>
<p><strong>Objective:</strong> Students present and justify creative directorial choices for a scene from a studied text, demonstrating engaging presentation skills.</p>
<h4>Brief (5 minutes)</h4>
<ul>
  <li>Scenario: students are directors pitching their vision for a key scene from the text to a production company.</li>
  <li>Each group of 3-4 selects a pivotal scene and must present their directorial interpretation.</li>
</ul>
<h4>Preparation (15 minutes)</h4>
<ul>
  <li>Groups plan their director's vision, covering:
    <ul>
      <li><strong>Setting and staging:</strong> Where and how is the scene set? (Time period, location, lighting, set design)</li>
      <li><strong>Character direction:</strong> How should key characters be played? (Tone, body language, costume)</li>
      <li><strong>Key moment:</strong> What is the most important moment and how will it be highlighted?</li>
      <li><strong>Audience impact:</strong> What should the audience feel and think?</li>
      <li><strong>Textual justification:</strong> Why have you made these choices? (Link every choice to the writer's language, themes, or context)</li>
    </ul>
  </li>
  <li>Groups create a visual storyboard or mood board for one key moment.</li>
</ul>
<h4>Pitch Presentations (15 minutes)</h4>
<ul>
  <li>Each group delivers a 3-4 minute presentation to the "production company" panel.</li>
  <li>The panel (teacher and students) asks 2 questions after each pitch.</li>
  <li>Key question: <em>"How does this choice reflect the writer's intentions?"</em></li>
</ul>
<h4>Commissioning Decision (5 minutes)</h4>
<ul>
  <li>Panel selects the most compelling vision and explains why.</li>
  <li>Discuss: how do different interpretations of the same scene reveal different readings of the text?</li>
</ul>`,
    assessmentCriteria: [
      'Presents a coherent directorial vision with clear creative choices',
      'Justifies every creative decision with reference to the text',
      'Delivers the pitch engagingly with confidence and enthusiasm',
      'Responds to panel questions by elaborating on textual reasoning',
    ],
    resources: [
      'Scene extract from the studied text',
      'Director\'s vision planning template',
      'A3 paper/materials for storyboard or mood board',
      'Panel question cards',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a partially completed planning template with example creative choices. Offer a list of "directorial decisions to consider" as prompts. Allow use of images found online for mood boards. Assign specific sections to each group member.</p>
<p><strong>Stretch:</strong> Groups must present two contrasting visions (e.g., traditional vs. modern setting) and argue which is more effective. Include a live performance of one key moment directed as they described. Written follow-up: a director's programme note explaining the interpretive choices.</p>`,
    linkedObjectives: ['9SL.2', '9SL.3'],
  },
  {
    id: 'sl-y9-26',
    title: 'Anthology Curator: Justifying Text Selection',
    yearGroup: 9,
    termUnit: 'Spring 1',
    duration: 40,
    type: 'Creative Justification',
    instructions: `<h3>Anthology Curator: Justifying Text Selection</h3>
<p><strong>Objective:</strong> Students present and justify their curated selection of texts for an anthology, demonstrating sophisticated analysis and engaging presentation.</p>
<h4>Brief (5 minutes)</h4>
<ul>
  <li>Scenario: A publisher is creating a new anthology titled <em>"Voices That Changed the World"</em> (or another themed title related to the year's studies). Students are literary curators pitching their selection.</li>
  <li>Each student or pair must select 3-4 texts (poems, extracts, speeches, or short stories) that they would include and justify their choices.</li>
</ul>
<h4>Preparation (15 minutes or homework)</h4>
<ul>
  <li>Students prepare a 3-minute presentation covering:
    <ul>
      <li><strong>Anthology vision:</strong> What is the collection's overall message or purpose?</li>
      <li><strong>Text 1:</strong> What is it, why is it included, and how does it fit the theme? (Include a brief reading of a key line)</li>
      <li><strong>Text 2:</strong> Same structure, showing how it connects to or contrasts with Text 1</li>
      <li><strong>Text 3:</strong> Same structure, showing how it completes the collection's argument</li>
      <li><strong>Ordering rationale:</strong> Why are the texts in this order? What journey does the reader take?</li>
    </ul>
  </li>
  <li>Students must reference specific language features or techniques in each text.</li>
</ul>
<h4>Presentation (15 minutes)</h4>
<ul>
  <li>Students present to the class or in groups of 6-8.</li>
  <li>After each presentation, the audience asks: <em>"Why did you not include [alternative text]?"</em></li>
  <li>The curator must defend their omission.</li>
</ul>
<h4>Class Vote (5 minutes)</h4>
<ul>
  <li>Class votes on which anthology they would most want to read.</li>
  <li>Discuss what made the winning pitch effective.</li>
</ul>`,
    assessmentCriteria: [
      'Presents a cohesive curatorial vision with a clear thematic thread',
      'Analyses specific language features in each chosen text',
      'Justifies inclusion and ordering with sophisticated reasoning',
      'Defends choices persuasively when challenged by the audience',
    ],
    resources: [
      'Anthology planning template',
      'Access to texts studied and wider reading',
      'Audience challenge question cards',
      'Voting slips',
    ],
    differentiation: `<p><strong>Support:</strong> Reduce to 2 texts. Provide a list of 8-10 texts to choose from with brief summaries. Offer a justification frame: "I chose this text because it explores... through the use of... which connects to the anthology's theme of...". Allow use of detailed notes.</p>
<p><strong>Stretch:</strong> Include at least one unseen text (not studied in class) that the student has independently sourced. Write an anthology introduction (200 words) that could appear on the back cover. Present without notes and include a 30-second dramatic reading from one of the chosen texts.</p>`,
    linkedObjectives: ['9SL.2', '9SL.3'],
  },

  // --- 27-28: Discussion of complex themes ---
  {
    id: 'sl-y9-27',
    title: 'Philosophical Chairs: Exploring Moral Complexity',
    yearGroup: 9,
    termUnit: 'Spring 2',
    duration: 40,
    type: 'Complex Theme Discussion',
    instructions: `<h3>Philosophical Chairs: Exploring Moral Complexity</h3>
<p><strong>Objective:</strong> Students discuss complex moral and philosophical questions arising from literature, debating and justifying their views with fluency.</p>
<h4>Setup (5 minutes)</h4>
<ul>
  <li>Arrange three areas in the room: "Agree", "Disagree", "Undecided".</li>
  <li>Present a morally complex statement from the text, e.g.:
    <ul>
      <li><em>"It is always better to tell the truth, even when it causes pain"</em></li>
      <li><em>"People are fundamentally selfish; society just masks it"</em></li>
      <li><em>"Revenge is a form of justice"</em></li>
    </ul>
  </li>
  <li>Students physically move to the area that represents their view.</li>
</ul>
<h4>Structured Discussion (25 minutes)</h4>
<ul>
  <li>Round 1 (8 minutes): Each group discusses within their position. They prepare their 3 strongest arguments with textual evidence.</li>
  <li>Round 2 (10 minutes): A spokesperson from each group presents their arguments to the whole class. After each presentation, students may move positions if persuaded.</li>
  <li>Round 3 (7 minutes): Open debate. Students speak freely but must:
    <ul>
      <li>Reference the text at least once</li>
      <li>Name the person they are responding to</li>
      <li>Use the stem: <em>"While I understand [Name]'s point that..., I would argue..."</em></li>
    </ul>
  </li>
  <li>Track movement: note how many students changed position and why.</li>
</ul>
<h4>Reflection (10 minutes)</h4>
<ul>
  <li>Students who moved explain what argument changed their mind.</li>
  <li>Class discusses: <em>"Can literature help us answer moral questions, or does it just make them more complicated?"</em></li>
  <li>Written reflection: a paragraph evaluating the strongest argument heard, with a personal response.</li>
</ul>`,
    assessmentCriteria: [
      'Articulates a clear moral position with reasoned justification',
      'References the studied text to support philosophical arguments',
      'Engages with opposing views, demonstrating willingness to reconsider',
      'Speaks fluently using sophisticated vocabulary and discussion structures',
    ],
    resources: [
      'Agree/Disagree/Undecided area signs',
      'Moral statement displayed prominently',
      'Discussion tracking sheet (who moved and why)',
      'Reflection writing template',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a "moral reasoning toolkit" with stems for each position. Offer page references where the text addresses the moral issue. Allow students to prepare their initial argument in pairs before the group discussion.</p>
<p><strong>Stretch:</strong> Students must argue from the opposite position to their genuine belief for at least one round. Introduce philosophical terminology (utilitarianism, deontology, moral relativism) and require students to use these frameworks. Written reflection becomes a full discursive essay exploring both sides.</p>`,
    linkedObjectives: ['9SL.1', '9SL.2'],
  },
  {
    id: 'sl-y9-28',
    title: 'Seminar: Power, Privilege, and Voice in Literature',
    yearGroup: 9,
    termUnit: 'Spring 2',
    duration: 45,
    type: 'Complex Theme Discussion',
    instructions: `<h3>Seminar: Power, Privilege, and Voice in Literature</h3>
<p><strong>Objective:</strong> Students engage in a sophisticated seminar discussion about complex themes across texts, presenting ideas engagingly and justifying interpretations.</p>
<h4>Pre-Seminar Preparation (10 minutes or homework)</h4>
<ul>
  <li>Students prepare a "seminar passport" with:
    <ul>
      <li>A thesis statement: their answer to the question <em>"How do the texts we have studied explore who has power and who is silenced?"</em></li>
      <li>3 quotations from at least 2 different texts that support their thesis</li>
      <li>1 contextual point (historical, social, biographical) that strengthens their argument</li>
      <li>1 question they want to pose to the group</li>
    </ul>
  </li>
</ul>
<h4>Seminar Structure (30 minutes)</h4>
<ul>
  <li><strong>Round 1 - Thesis Statements (8 minutes):</strong> Each student shares their thesis in 30 seconds. No responses yet - just listen and note connections.</li>
  <li><strong>Round 2 - Evidence and Analysis (12 minutes):</strong> Open discussion. Students present their quotations and analysis. Others respond, challenge, or build on points. Teacher tracks contributions on a discussion map.</li>
  <li><strong>Round 3 - Student-Led Questions (10 minutes):</strong> Students pose their prepared questions to the group. The group discusses each question for 2-3 minutes before moving to the next.</li>
</ul>
<h4>Seminar Evaluation (5 minutes)</h4>
<ul>
  <li>Teacher shares the discussion map: who spoke, who was responded to, who introduced new ideas.</li>
  <li>Students self-assess using a seminar rubric: Did I contribute? Did I reference texts? Did I respond to others? Did I ask questions?</li>
  <li>Identify: what was the most surprising or challenging idea raised?</li>
</ul>`,
    assessmentCriteria: [
      'Formulates and presents a clear thesis with supporting evidence from multiple texts',
      'Analyses quotations with critical sophistication, considering language, structure, and context',
      'Responds to peers\' ideas with nuance, building, challenging, or synthesising',
      'Poses thoughtful questions that deepen the group\'s understanding',
    ],
    resources: [
      'Seminar passport template',
      'Copies of key texts or quotation booklets',
      'Discussion map template (for teacher)',
      'Self-assessment seminar rubric',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a pre-completed seminar passport with one quotation and one thesis option for students to adapt. Offer a "seminar survival guide" with stems for contributing, responding, and questioning. Allow students to contribute one prepared statement before joining open discussion.</p>
<p><strong>Stretch:</strong> Require cross-textual comparison in every contribution (linking at least two texts). Students must reference critical perspectives (feminist, Marxist, postcolonial) where relevant. After the seminar, write a critical essay synthesising the discussion's key arguments with their own evaluation.</p>`,
    linkedObjectives: ['9SL.1', '9SL.2', '9SL.3'],
  },

  // --- 29-30: Pre-IGCSE oral practice ---
  {
    id: 'sl-y9-29',
    title: 'Pre-IGCSE Individual Oral: Presenting a Literary Analysis',
    yearGroup: 9,
    termUnit: 'Summer 1',
    duration: 45,
    type: 'Pre-IGCSE Oral Practice',
    instructions: `<h3>Pre-IGCSE Individual Oral: Presenting a Literary Analysis</h3>
<p><strong>Objective:</strong> Students deliver a formal individual oral presentation analysing a text, preparing them for IGCSE oral assessment requirements.</p>
<h4>Context (5 minutes)</h4>
<ul>
  <li>Explain the IGCSE oral assessment format: an individual presentation (3-4 minutes) followed by a discussion with the examiner (6-7 minutes).</li>
  <li>Today's practice mirrors this structure.</li>
  <li>Students choose one of the following focus areas for their presentation:
    <ul>
      <li>Analysis of a key passage from a studied text</li>
      <li>Comparison of two characters across one or two texts</li>
      <li>Exploration of how a theme is developed throughout a text</li>
    </ul>
  </li>
</ul>
<h4>Preparation (10 minutes or homework)</h4>
<ul>
  <li>Students prepare their presentation:
    <ul>
      <li><strong>Introduction:</strong> State the focus and why it is significant</li>
      <li><strong>Analysis Point 1:</strong> Close reading of language with quotation and commentary</li>
      <li><strong>Analysis Point 2:</strong> Structural or thematic analysis with evidence</li>
      <li><strong>Analysis Point 3:</strong> Contextual connection or alternative interpretation</li>
      <li><strong>Conclusion:</strong> Summarise the key insight and its wider significance</li>
    </ul>
  </li>
  <li>Students prepare brief notes on a single A5 card (bullet points only).</li>
</ul>
<h4>Presentation and Discussion (25 minutes)</h4>
<ul>
  <li>Students present in pairs or small groups (one presents, others form the "examiner panel").</li>
  <li>After the 3-4 minute presentation, the panel conducts a 4-5 minute discussion:
    <ul>
      <li><em>"Can you explain why you chose that quotation?"</em></li>
      <li><em>"How does this connect to [other aspect of the text]?"</em></li>
      <li><em>"Do you think the writer intended this interpretation?"</em></li>
      <li><em>"Can you compare this to another text you have studied?"</em></li>
    </ul>
  </li>
</ul>
<h4>Feedback (5 minutes)</h4>
<ul>
  <li>Panel gives feedback using IGCSE-style descriptors: Content, Language, Delivery.</li>
  <li>Teacher provides a grade indicator and one key improvement target.</li>
  <li>Students record their target for future practice.</li>
</ul>`,
    assessmentCriteria: [
      'Delivers a structured, analytical presentation with close textual reference',
      'Speaks fluently and persuasively, demonstrating command of analytical vocabulary',
      'Responds to examiner questions with developed, thoughtful answers',
      'Demonstrates ability to think on their feet and extend analysis spontaneously',
    ],
    resources: [
      'IGCSE oral assessment criteria (simplified student version)',
      'Presentation planning template (5-part structure)',
      'A5 cue card template',
      'Examiner question bank',
      'Feedback form with IGCSE descriptors',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a modelled presentation (written or recorded) to analyse before preparing their own. Allow students to choose a passage and provide guiding questions for analysis. Offer sentence starters for each analysis point. Practise with a partner before presenting to the panel.</p>
<p><strong>Stretch:</strong> Present entirely without notes. Include critical theory references (e.g., "A feminist reading might suggest..."). Respond to at least three examiner questions with cross-textual comparison. Self-record and transcribe one section to analyse their own analytical language.</p>`,
    linkedObjectives: ['9SL.1', '9SL.2', '9SL.3'],
  },
  {
    id: 'sl-y9-30',
    title: 'Pre-IGCSE Group Oral: Collaborative Discussion Assessment',
    yearGroup: 9,
    termUnit: 'Summer 1',
    duration: 50,
    type: 'Pre-IGCSE Oral Practice',
    instructions: `<h3>Pre-IGCSE Group Oral: Collaborative Discussion Assessment</h3>
<p><strong>Objective:</strong> Students participate in a formal group discussion that mirrors IGCSE oral assessment conditions, demonstrating fluency, engagement, and the ability to debate and justify views.</p>
<h4>Context (5 minutes)</h4>
<ul>
  <li>Explain the IGCSE group discussion format: a group of 4-5 students discuss a topic or question for 10-15 minutes. Each student is assessed on their individual contribution.</li>
  <li>Key skills assessed: initiating ideas, responding to others, using evidence, managing the discussion, reaching conclusions.</li>
</ul>
<h4>Preparation (10 minutes)</h4>
<ul>
  <li>Reveal the discussion topic. It should be a rich, open question, e.g.:
    <ul>
      <li><em>"Which text we have studied this year has the most to teach us about the world today?"</em></li>
      <li><em>"Is it possible to be a 'good' person in a corrupt society?"</em></li>
      <li><em>"Should we judge characters by the standards of their time or by our own?"</em></li>
    </ul>
  </li>
  <li>Students prepare individually:
    <ul>
      <li>An opening statement (30 seconds): their initial answer with one supporting reason</li>
      <li>2-3 quotations from different texts they could reference</li>
      <li>One point they want to make and one question they want to ask the group</li>
    </ul>
  </li>
</ul>
<h4>Group Discussion (15 minutes per group)</h4>
<ul>
  <li>Groups of 4-5 conduct a discussion while the rest of the class observes.</li>
  <li>The teacher acts as silent assessor (no intervention except to manage time).</li>
  <li>Discussion protocol:
    <ul>
      <li>One student opens with their statement, then invites another to respond</li>
      <li>No hand-raising; students manage turn-taking themselves</li>
      <li>Students must reference the text, use analytical vocabulary, and build on others' points</li>
      <li>In the final 2 minutes, the group must try to reach a shared conclusion or identify the key areas of disagreement</li>
    </ul>
  </li>
</ul>
<h4>Observer Feedback (5 minutes per group)</h4>
<ul>
  <li>Observers provide feedback using the IGCSE discussion rubric:
    <ul>
      <li>Initiation: Did they introduce new ideas?</li>
      <li>Response: Did they engage with others' ideas?</li>
      <li>Evidence: Did they use textual references?</li>
      <li>Fluency: Did they speak confidently and clearly?</li>
      <li>Management: Did they help manage the discussion (inviting others, summarising)?</li>
    </ul>
  </li>
</ul>
<h4>Individual Targets (5 minutes)</h4>
<ul>
  <li>Teacher provides each student with a written target based on IGCSE criteria.</li>
  <li>Students record their target and one specific action they will take to improve.</li>
</ul>`,
    assessmentCriteria: [
      'Initiates discussion with a clear, well-supported opening statement',
      'Responds to and develops others\' contributions with nuance and depth',
      'References multiple texts with analytical precision',
      'Manages the discussion collaboratively, ensuring balanced participation',
    ],
    resources: [
      'IGCSE group discussion assessment criteria (student-friendly version)',
      'Discussion topic card',
      'Individual preparation template',
      'Observer feedback rubric sheets',
      'Individual target recording slips',
    ],
    differentiation: `<p><strong>Support:</strong> Provide a "discussion survival kit" with sentence starters for initiating, responding, challenging, and concluding. Allow students to bring their preparation notes into the discussion. Practise in a lower-stakes setting (with a partner) before the assessed discussion. Teacher may briefly model the opening.</p>
<p><strong>Stretch:</strong> No notes permitted during the discussion. Students must reference at least three different texts. Include spontaneous follow-up topics introduced mid-discussion by the teacher (a "curve ball" question). After the discussion, write a reflective commentary evaluating their own performance against IGCSE band descriptors and setting targets for improvement.</p>`,
    linkedObjectives: ['9SL.1', '9SL.2', '9SL.3'],
  },
]
