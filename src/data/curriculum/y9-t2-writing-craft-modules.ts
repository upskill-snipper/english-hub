import type { CourseModule } from '../courses';

export const y9T2WritingCraftModules: CourseModule[] = [
  // ── T2: Transactional Writing ──────────────────────────────────────────────

  {
    id: 'y9t2-m1',
    title: 'Writing for Purpose',
    duration: '45 mins',
    content: `<h2>Articles, Speeches, Letters, and Reports</h2>
<p>Every piece of transactional writing exists for a reason. Unlike creative writing, where you might write for artistic expression, transactional writing always has a clear, practical purpose: to inform, to persuade, to advise, to argue, or to entertain within a structured format. Understanding which format to use and how to adapt your writing to serve that purpose is the foundation of everything you will learn in this unit.</p>

<h3>The Four Core Formats</h3>
<p>At GCSE level, you will be expected to write confidently in at least four transactional formats. Each has its own conventions, and examiners will reward you for demonstrating that you know and can apply them.</p>

<p><strong>1. Articles</strong></p>
<p>Articles appear in newspapers, magazines, and online publications. They require a compelling headline that draws the reader in, a strapline or subheading that expands on the headline, and an opening paragraph that hooks the reader immediately. The body of an article uses short paragraphs for readability and often includes subheadings to break up the text. A strong article balances fact with opinion and speaks directly to its audience. The tone can range from serious and investigative to light and conversational, depending on the publication.</p>

<p><strong>2. Speeches</strong></p>
<p>A speech is written to be heard, not read. This changes everything about how you write it. Sentences should be punchy and rhythmic. You can use direct address ("You know this to be true"), rhetorical questions ("How long must we wait?"), and repetition for emphasis ("We will fight for fairness. We will fight for equality. We will fight for justice."). A speech needs a powerful opening that commands attention, a clearly structured argument, and a memorable closing that leaves the audience moved or motivated to act.</p>

<p><strong>3. Letters</strong></p>
<p>Formal letters follow strict conventions: your address in the top right, the recipient's address on the left, the date, a formal greeting ("Dear Sir/Madam" or "Dear Mr Thompson"), and a formal sign-off ("Yours faithfully" with Sir/Madam, "Yours sincerely" with a named recipient). The first paragraph states your purpose clearly. Subsequent paragraphs develop your points logically. The final paragraph states what action you expect. Informal letters to friends or family relax these rules but still require clear organisation.</p>

<p><strong>4. Reports</strong></p>
<p>Reports present findings and recommendations in a structured, formal way. They typically include a title, an introduction stating the purpose and scope, a findings section with numbered or bulleted points, and a conclusion with recommendations. Reports use impersonal language ("It was found that..." rather than "I think...") and prioritise clarity and objectivity over flair.</p>

<div class="key-term"><strong>Key Term: Format conventions</strong> -- The specific structural features that define a text type. Using the correct conventions signals to the examiner that you understand the form, which is a separate assessment objective worth significant marks.</div>

<h3>Matching Format to Purpose</h3>
<p>The format you choose must serve your purpose. If you want to argue passionately for a cause, a speech gives you the tools of rhetoric and emotional appeal. If you need to present balanced information, a report or article may be more appropriate. If you are addressing a specific person or organisation with a request or complaint, a letter is the correct choice.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In the exam, the question will usually specify the format. Read it carefully. If it says "Write an article," do not write a letter. If it says "Write a speech," include direct address and rhetorical features. Getting the format wrong limits your marks immediately, regardless of how well you write.</div>

<h3>Opening Strategies Across Formats</h3>
<p>The opening is where you win or lose your reader. Across all formats, consider these approaches: a bold statement ("The education system is failing our children"), a surprising statistic ("One in three young people reports feeling anxious every single day"), an anecdote ("Last Tuesday, I watched a Year 7 student sit alone at lunch for the fourth day in a row"), or a provocative question ("What would you do if your school banned mobile phones permanently?"). The best openings create curiosity and make the reader want to continue.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Starting with "In this article I am going to write about..." This is weak and mechanical. Jump straight into your content with energy and confidence. Show the examiner that you can engage a reader from the first sentence.</div>`,
    quiz: [
      { id: 'y9t2-m1-q1', question: 'Which sign-off is correct when writing to "Dear Sir/Madam"?', options: ['Yours sincerely', 'Yours faithfully', 'Kind regards', 'Best wishes'], correct: 1, explanation: '"Yours faithfully" is used when you do not know the recipient\'s name (Dear Sir/Madam). "Yours sincerely" is used when you address someone by name (Dear Mr Thompson).' },
      { id: 'y9t2-m1-q2', question: 'What makes a speech different from an article in terms of writing style?', options: ['Speeches are longer than articles', 'Speeches are written to be heard and use rhythm, repetition, and direct address', 'Speeches must include statistics', 'Articles are always more persuasive'], correct: 1, explanation: 'A speech is performed aloud, so it relies on rhetorical devices like repetition, direct address, and rhythmic sentence structures that sound powerful when spoken.' },
      { id: 'y9t2-m1-q3', question: 'What type of language should a formal report use?', options: ['Emotional and personal language', 'Slang and colloquialisms', 'Impersonal and objective language', 'Poetic and figurative language'], correct: 2, explanation: 'Reports prioritise objectivity and clarity. They use impersonal constructions like "It was observed that..." rather than subjective opinions.' },
      { id: 'y9t2-m1-q4', question: 'Which opening strategy is WEAKEST for an article?', options: ['A surprising statistic', 'A provocative question', '"In this article I am going to talk about..."', 'A bold, controversial statement'], correct: 2, explanation: 'Telling the reader what you are going to do is mechanical and unengaging. Strong openings hook the reader immediately with content, not announcements.' },
      { id: 'y9t2-m1-q5', question: 'Why is it important to use the correct format conventions in an exam?', options: ['It makes your handwriting look neater', 'Format is a separate assessment objective worth significant marks', 'The examiner prefers letters to speeches', 'It saves time in the exam'], correct: 1, explanation: 'Format conventions are assessed as part of the "form" or "organisation" assessment objective. Demonstrating you understand the form shows skill and earns marks independently of your content.' },
    ],
  },

  {
    id: 'y9t2-m2',
    title: 'Argument and Persuasion',
    duration: '45 mins',
    content: `<h2>Building a Sustained Viewpoint</h2>
<p>Argument and persuasion are related but distinct skills. An argument presents a logical case supported by evidence and reasoning. Persuasion goes further: it uses emotional appeal, rhetorical techniques, and strategic language to move the reader toward a particular viewpoint. The best transactional writing combines both, building a case that is intellectually convincing and emotionally compelling.</p>

<h3>The Structure of a Sustained Argument</h3>
<p>A sustained argument is not a list of disconnected points. It is a carefully constructed chain of reasoning where each paragraph builds on the last, creating a cumulative effect. Think of it as a staircase: each step takes the reader higher toward your conclusion.</p>

<p><strong>Step 1: Establish your position</strong> -- Your opening paragraph should make your viewpoint absolutely clear. Do not sit on the fence. Take a stance and own it: "School uniforms are an outdated, unnecessary restriction that stifles individuality and serves no educational purpose."</p>

<p><strong>Step 2: Build with evidence</strong> -- Each body paragraph should present a distinct reason that supports your argument. Use facts, statistics, expert opinions, and real-world examples. A point without evidence is just an opinion; a point with evidence is an argument.</p>

<p><strong>Step 3: Address the counterargument</strong> -- The strongest writers acknowledge opposing views and then dismantle them. This is called a rebuttal. "Some argue that uniforms create equality. However, this ignores the reality that students express status through shoes, bags, and phones regardless of what they wear."</p>

<p><strong>Step 4: Build to a powerful conclusion</strong> -- Your final paragraph should not simply repeat your introduction. It should feel like the inevitable destination of everything you have argued. Use your strongest emotional appeal here, leaving the reader with something memorable.</p>

<div class="key-term"><strong>Key Term: Rebuttal</strong> -- Acknowledging an opposing viewpoint and then arguing against it. This demonstrates intellectual maturity and makes your own argument stronger by showing you have considered alternatives.</div>

<h3>Persuasive Techniques</h3>
<p>Beyond logical argument, skilled writers use persuasive techniques to influence the reader emotionally:</p>
<ul>
<li><strong>Emotive language</strong> -- Words chosen for their emotional impact. "Children are suffering" is more powerful than "Children are affected."</li>
<li><strong>Inclusive pronouns</strong> -- "We" and "our" create solidarity. "We all know this must change" makes the reader feel part of your cause.</li>
<li><strong>Anecdote</strong> -- A brief personal story that illustrates your point. "I once watched a student break down in tears because she could not afford the correct PE kit."</li>
<li><strong>Rule of three</strong> -- Listing three items for rhythmic impact. "It is unfair, unnecessary, and damaging."</li>
<li><strong>Hyperbole</strong> -- Deliberate exaggeration for emphasis. "Every single student in this country deserves better."</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The examiner wants to see a range of persuasive techniques used naturally, not mechanically. Do not label your techniques in your writing ("I am now going to use a rhetorical question"). Just use them. The skill is in the seamless integration.</div>

<h3>Connectives for Argument</h3>
<p>Strong argument writing uses discourse markers that signal the progression of your reasoning: "Furthermore" and "Moreover" add weight to your case. "However" and "Nevertheless" introduce counterarguments or qualifications. "Consequently" and "Therefore" show cause and effect. "Crucially" and "Most importantly" signal your key points. These connectives are the mortar between your bricks; without them, your argument feels like a pile of rubble rather than a wall.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Using "firstly, secondly, thirdly" throughout your essay. This creates a list, not an argument. Each paragraph should feel connected to the last through ideas and reasoning, not just numbered in sequence.</div>`,
    quiz: [
      { id: 'y9t2-m2-q1', question: 'What is a rebuttal?', options: ['A type of opening statement', 'Acknowledging and arguing against an opposing view', 'A personal anecdote used for persuasion', 'Repeating your main argument'], correct: 1, explanation: 'A rebuttal shows you have considered the opposing argument and can dismantle it. This demonstrates intellectual maturity and strengthens your own position.' },
      { id: 'y9t2-m2-q2', question: '"We must act now -- for our children, for our future, for our world." Which technique is this?', options: ['Hyperbole', 'Rebuttal', 'Rule of three with inclusive pronouns', 'Counterargument'], correct: 2, explanation: 'The list of three ("for our children, for our future, for our world") is a rule of three, and "our" is an inclusive pronoun that creates solidarity with the audience.' },
      { id: 'y9t2-m2-q3', question: 'Why should a conclusion NOT simply repeat the introduction?', options: ['Because the examiner might notice', 'Because it should feel like the logical destination of your argument', 'Because conclusions should always include a question', 'Because introductions are not important'], correct: 1, explanation: 'A strong conclusion builds on everything argued in the essay. It should feel like the inevitable end point, not a copy of the beginning. Use your most powerful emotional appeal here.' },
      { id: 'y9t2-m2-q4', question: 'What is the difference between argument and persuasion?', options: ['They are exactly the same thing', 'Argument uses logic and evidence; persuasion adds emotional appeal', 'Persuasion is formal and argument is informal', 'Arguments are always spoken and persuasion is written'], correct: 1, explanation: 'Argument relies on logical reasoning and evidence. Persuasion adds emotional techniques like emotive language, anecdotes, and rhetorical devices to move the reader beyond logic.' },
      { id: 'y9t2-m2-q5', question: 'Which connective best introduces a counterargument?', options: ['Furthermore', 'Therefore', 'However', 'In addition'], correct: 2, explanation: '"However" signals a shift to an opposing viewpoint. "Furthermore" and "In addition" build on the same point, while "Therefore" shows a conclusion.' },
    ],
  },

  {
    id: 'y9t2-m3',
    title: 'Rhetorical Techniques',
    duration: '45 mins',
    content: `<h2>Advanced Application of Rhetoric</h2>
<p>Rhetoric is the art of effective communication. It has been studied and practised for over two thousand years, from the ancient Greek orators to modern politicians and journalists. At its core, rhetoric is about choosing your words, structures, and strategies to have maximum impact on your audience. In Year 9, you should be moving beyond simply identifying rhetorical techniques and toward using them deliberately and skilfully in your own writing.</p>

<h3>Aristotle's Three Appeals</h3>
<p>The Greek philosopher Aristotle identified three modes of persuasion that remain the foundation of all rhetoric:</p>

<p><strong>Ethos (Credibility)</strong> -- Convincing your audience that you are trustworthy and knowledgeable. You establish ethos by demonstrating expertise, using formal language where appropriate, referencing credible sources, and showing fairness by acknowledging opposing views. If your reader trusts you, they are far more likely to accept your argument.</p>

<p><strong>Pathos (Emotion)</strong> -- Appealing to your audience's feelings. Emotive language, vivid descriptions, personal anecdotes, and carefully chosen examples can make your reader feel anger, sympathy, pride, or urgency. Pathos is powerful but must be used with control; too much emotional appeal without substance will make your writing feel manipulative rather than persuasive.</p>

<p><strong>Logos (Logic)</strong> -- Using facts, evidence, statistics, and logical reasoning to build your case. A well-structured argument with clear cause-and-effect connections appeals to logos. Presenting data, citing research, and drawing logical conclusions all strengthen the rational foundation of your writing.</p>

<div class="key-term"><strong>Key Term: Ethos, Pathos, Logos</strong> -- The three modes of persuasion identified by Aristotle. The most effective writing balances all three: it is credible (ethos), emotionally engaging (pathos), and logically sound (logos).</div>

<h3>Advanced Rhetorical Devices</h3>
<p>Beyond the basics of rhetorical questions and repetition, practise these more sophisticated techniques:</p>

<p><strong>Anaphora</strong> -- Repeating a word or phrase at the start of successive clauses. "We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields." This creates rhythm and builds momentum.</p>

<p><strong>Antithesis</strong> -- Placing two contrasting ideas side by side for emphasis. "It was the best of times, it was the worst of times." The contrast sharpens both ideas and creates a memorable effect.</p>

<p><strong>Tricolon</strong> -- A series of three parallel elements. "Government of the people, by the people, for the people." Three items feel complete and satisfying in a way that two or four do not.</p>

<p><strong>Juxtaposition</strong> -- Placing two different ideas close together to highlight the contrast. Describing the wealth of a CEO alongside the poverty of their workers, for instance, forces the reader to confront inequality without you having to state it directly.</p>

<p><strong>Imperative commands</strong> -- Telling the audience what to do. "Stand up. Speak out. Make your voice heard." Imperatives create urgency and position you as a leader rather than a commentator.</p>

<h3>Applying Rhetoric in Your Writing</h3>
<p>The key to effective rhetoric is integration. Do not treat these techniques as a checklist to tick off. Instead, let them arise naturally from your argument. A rhetorical question works when it genuinely provokes thought. Anaphora works when the repetition builds genuine momentum. If a technique feels forced, it will weaken your writing rather than strengthen it.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Examiners reward variety and sophistication. Using anaphora, antithesis, or tricolon shows a level of rhetorical awareness beyond the basics. But remember: one well-deployed device is worth more than five poorly integrated ones.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Overloading every paragraph with rhetorical questions. One or two well-placed rhetorical questions are effective. Five in a row is exhausting for the reader and suggests you have only one tool in your toolkit.</div>`,
    quiz: [
      { id: 'y9t2-m3-q1', question: 'What does "ethos" mean in rhetoric?', options: ['Appealing to emotion', 'Establishing credibility and trust', 'Using logical evidence', 'Creating rhythm through repetition'], correct: 1, explanation: 'Ethos is about establishing your credibility as a writer or speaker. If the audience trusts you, they are more willing to accept your argument.' },
      { id: 'y9t2-m3-q2', question: '"We will not be silenced. We will not be ignored. We will not be defeated." What device is this?', options: ['Antithesis', 'Anaphora', 'Juxtaposition', 'Hyperbole'], correct: 1, explanation: 'Anaphora is the repetition of a word or phrase at the beginning of successive clauses. Here, "We will not be" is repeated three times to build momentum and determination.' },
      { id: 'y9t2-m3-q3', question: '"Ask not what your country can do for you -- ask what you can do for your country." What device is this?', options: ['Tricolon', 'Anaphora', 'Antithesis', 'Imperative'], correct: 2, explanation: 'Antithesis places two contrasting ideas side by side. The structure reverses the relationship between "you" and "your country," making the contrast sharp and memorable.' },
      { id: 'y9t2-m3-q4', question: 'Why should rhetorical techniques arise naturally rather than be forced?', options: ['Because examiners deduct marks for using techniques', 'Because forced techniques weaken writing and feel mechanical', 'Because rhetoric is outdated', 'Because you should only use one technique per essay'], correct: 1, explanation: 'Techniques that feel forced or mechanical distract from your argument. The best rhetoric is seamless -- the reader feels its impact without noticing the craft behind it.' },
      { id: 'y9t2-m3-q5', question: 'Which of Aristotle\'s three appeals does a statistic best support?', options: ['Ethos', 'Pathos', 'Logos', 'None of them'], correct: 2, explanation: 'Statistics are factual evidence that appeal to logic and reasoning (logos). They support your argument with data rather than emotion or personal credibility.' },
    ],
  },

  {
    id: 'y9t2-m4',
    title: 'Register Control',
    duration: '40 mins',
    content: `<h2>Formal vs Informal Writing</h2>
<p>Register is the level of formality in your writing. It is determined by your audience, your purpose, and the conventions of the form you are writing in. A letter of complaint to a company requires a formal register. A blog post aimed at teenagers can use an informal register. The skill is not simply knowing the difference, but being able to shift confidently between registers -- and to control the subtle shades in between.</p>

<h3>What Makes Writing Formal?</h3>
<p>Formal writing is characterised by several features that work together to create a professional, authoritative tone:</p>
<ul>
<li><strong>Standard English</strong> -- Correct grammar, no slang, no contractions. "I would be grateful" not "I'd be well happy."</li>
<li><strong>Sophisticated vocabulary</strong> -- "Investigate" rather than "look into," "acknowledge" rather than "get back to me."</li>
<li><strong>Impersonal constructions</strong> -- "It has been observed that..." rather than "I noticed that..."</li>
<li><strong>Complex sentence structures</strong> -- Subordinate clauses, embedded information, and varied syntax.</li>
<li><strong>Passive voice</strong> -- "The decision was made" rather than "We made the decision." The passive removes the agent and creates objectivity.</li>
<li><strong>Hedging language</strong> -- "It could be argued that..." or "Evidence suggests that..." This qualifies statements and avoids absolute claims.</li>
</ul>

<h3>What Makes Writing Informal?</h3>
<p>Informal writing mirrors natural speech and creates a sense of closeness with the reader:</p>
<ul>
<li><strong>Contractions</strong> -- "Don't," "can't," "it's."</li>
<li><strong>Colloquial language</strong> -- Everyday expressions and idioms ("at the end of the day," "the bottom line").</li>
<li><strong>Direct address</strong> -- Speaking to the reader as "you."</li>
<li><strong>Short, punchy sentences</strong> -- "It's wrong. Simple as that."</li>
<li><strong>First person</strong> -- "I think," "In my experience."</li>
<li><strong>Humour and personality</strong> -- Wit, sarcasm, or a conversational tone.</li>
</ul>

<div class="key-term"><strong>Key Term: Register</strong> -- The level of formality in language, determined by audience, purpose, and context. Skilled writers adjust their register fluidly, sometimes even within a single piece, to achieve different effects.</div>

<h3>The Spectrum Between Formal and Informal</h3>
<p>Register is not simply a switch between "formal" and "informal." It is a spectrum. A newspaper editorial is formal but accessible. A magazine feature might be semi-formal with moments of humour. A charity appeal letter might begin formally but shift to an emotional, more personal tone. The most sophisticated writers move along this spectrum deliberately, choosing their register to serve each section of their writing.</p>

<h3>Register Shifts for Effect</h3>
<p>Sometimes, a deliberate shift in register creates a powerful effect. Imagine a formal speech that suddenly drops into a personal anecdote: "The statistics are damning. The evidence is irrefutable. And I know this because my own daughter came home last week and told me she was afraid to go to school." The shift from impersonal formality to raw personal experience is jarring -- and that is precisely the point. It cuts through the formality and connects with the audience on a human level.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The mark scheme rewards "appropriate register." This means matching your level of formality to the task. A formal letter written in slang will lose marks. Equally, a blog post written in stiff, impersonal language will feel wrong. Read the question carefully and pitch your register to the audience and purpose specified.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Mixing registers unintentionally. Writing "The ramifications of this policy are, like, really bad" undermines your formality with slang. Every word must fit the register you have chosen, unless you are shifting register deliberately for effect.</div>`,
    quiz: [
      { id: 'y9t2-m4-q1', question: 'Which sentence uses formal register correctly?', options: ['"The results were, like, really surprising."', '"It has been observed that the results were unexpected."', '"I reckon the results are pretty mad."', '"The results? Shocking, mate."'], correct: 1, explanation: 'Formal register uses impersonal constructions, standard English, and sophisticated vocabulary. "It has been observed that..." is impersonal and avoids slang.' },
      { id: 'y9t2-m4-q2', question: 'What is "hedging language"?', options: ['Language that avoids the topic', 'Language that qualifies statements and avoids absolute claims', 'Language used in informal writing', 'Language that exaggerates for effect'], correct: 1, explanation: 'Hedging language softens claims to show academic caution: "It could be argued that..." or "Evidence suggests that..." It avoids presenting opinions as absolute facts.' },
      { id: 'y9t2-m4-q3', question: 'Why might a writer deliberately shift register mid-text?', options: ['Because they made a mistake', 'To create emotional impact by contrasting formality with personal experience', 'Because informal writing is always better', 'Because examiners prefer mixed registers'], correct: 1, explanation: 'A deliberate register shift can be powerful. Moving from formal analysis to a personal anecdote, for example, creates emotional impact through contrast.' },
      { id: 'y9t2-m4-q4', question: 'What determines the appropriate register for a piece of writing?', options: ['The length of the piece', 'Audience, purpose, and context', 'The writer\'s personal preference', 'The number of paragraphs'], correct: 1, explanation: 'Register is determined by who you are writing for (audience), why you are writing (purpose), and what format you are using (context). These three factors together dictate the level of formality.' },
      { id: 'y9t2-m4-q5', question: 'Which feature is characteristic of formal writing?', options: ['Contractions like "don\'t" and "can\'t"', 'Use of passive voice', 'Slang and colloquialisms', 'Short, one-word sentences'], correct: 1, explanation: 'The passive voice ("The decision was made") removes the agent and creates objectivity, which is a hallmark of formal writing. Contractions and slang belong to informal register.' },
    ],
  },

  {
    id: 'y9t2-m5',
    title: 'Audience Adaptation',
    duration: '40 mins',
    content: `<h2>Writing for Different Readers</h2>
<p>Every piece of writing has an intended audience, and understanding that audience is essential to writing effectively. The same topic -- school meals, for instance -- would be written completely differently for a headteacher, a group of Year 7 students, a local newspaper, or a government minister. Audience adaptation means adjusting your vocabulary, tone, register, level of detail, and persuasive strategies to connect with the specific people you are addressing.</p>

<h3>Identifying Your Audience</h3>
<p>In an exam, the question will usually specify your audience. Read carefully. "Write a letter to the school governors" is very different from "Write an article for a teenage magazine." If the audience is not stated explicitly, the form and purpose will imply it: a formal report implies a professional audience; a blog post implies a general or younger readership.</p>

<h3>Adapting Your Language</h3>
<p>The most immediate way to adapt for audience is through vocabulary and tone:</p>
<ul>
<li><strong>For adults in authority</strong> (headteachers, governors, politicians) -- Use formal register, sophisticated vocabulary, reasoned argument, and evidence. Show respect for their position while presenting your case with confidence.</li>
<li><strong>For peers</strong> (other students, young people) -- Use a more conversational tone, relatable examples, direct address, and shared experiences. You can be more informal, but maintain clarity and purpose.</li>
<li><strong>For a general audience</strong> (newspaper readers, website visitors) -- Balance accessibility with sophistication. Avoid jargon but do not patronise. Use a range of techniques to engage different types of reader.</li>
<li><strong>For younger children</strong> -- Simplify vocabulary without being condescending. Use concrete examples rather than abstract ideas. Keep sentences shorter and explanations clear.</li>
</ul>

<div class="key-term"><strong>Key Term: Audience adaptation</strong> -- The process of adjusting language, tone, structure, and content to suit the needs, expectations, and knowledge level of your intended reader. This is an assessed skill worth marks in every transactional writing question.</div>

<h3>Adapting Your Content</h3>
<p>Audience adaptation is not just about language; it also affects what you include. Writing to a headteacher about phone policies requires different evidence than writing to students. The headteacher cares about educational outcomes, behaviour data, and policy precedents. Students care about fairness, personal freedom, and practical impact on their daily lives. Select your arguments and examples to resonate with the specific concerns of your audience.</p>

<h3>Tone and Relationship</h3>
<p>Consider the power dynamic between you and your reader. Writing to someone in authority requires a respectful but assertive tone. Writing to peers allows for a more equal, collaborative tone. Writing to persuade a hostile audience requires careful diplomacy: acknowledge their concerns before presenting your alternative view. Writing to a sympathetic audience allows you to be bolder and more direct.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> One of the most common ways students lose marks is by ignoring the audience. If the question says "Write a speech to your year group," do not write as if you are addressing parliament. Match your language, examples, and tone to the specific audience named in the question.</div>

<h3>Creating a Reader Profile</h3>
<p>Before you start writing, spend thirty seconds building a mental picture of your reader. Ask yourself: How old are they? What do they already know about this topic? What are their likely concerns or objections? What tone will they respond to? What kind of evidence will they find convincing? This simple exercise ensures every sentence you write is targeted and purposeful.</p>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing in exactly the same way regardless of audience. If your letter to the headteacher sounds identical to your blog post for teenagers, you are not demonstrating the skill of audience adaptation. The examiner needs to see clear differences in how you write for different readers.</div>`,
    quiz: [
      { id: 'y9t2-m5-q1', question: 'When writing to a headteacher, which approach is most appropriate?', options: ['Casual language with slang', 'Formal register with evidence and reasoned argument', 'Emotional pleas without evidence', 'Humorous and sarcastic tone'], correct: 1, explanation: 'A headteacher is a figure of authority. Formal register, evidence-based reasoning, and respectful but confident tone demonstrate maturity and are most likely to be persuasive.' },
      { id: 'y9t2-m5-q2', question: 'Why should you adapt your content as well as your language for different audiences?', options: ['Because different audiences care about different things', 'Because some audiences cannot read complex words', 'Because content does not matter as much as language', 'Because the examiner only marks language'], correct: 0, explanation: 'Different audiences have different concerns. A headteacher cares about educational outcomes; students care about fairness and daily impact. Your arguments should address what matters to your specific reader.' },
      { id: 'y9t2-m5-q3', question: 'What is the best first step before writing for a specific audience?', options: ['Start writing immediately', 'Build a mental profile of your reader', 'Choose the longest words you know', 'Decide how many paragraphs to write'], correct: 1, explanation: 'Spending thirty seconds picturing your reader -- their age, knowledge, concerns, and expectations -- ensures your writing is targeted and appropriate from the first sentence.' },
      { id: 'y9t2-m5-q4', question: 'How should you adapt when writing for a hostile audience?', options: ['Be aggressive and confrontational', 'Ignore their concerns entirely', 'Acknowledge their concerns before presenting your alternative', 'Use as much emotional language as possible'], correct: 2, explanation: 'A hostile audience will resist if you dismiss their views. Acknowledging their position first shows respect and fairness, making them more receptive to your argument.' },
      { id: 'y9t2-m5-q5', question: 'If no audience is specified in the question, how can you determine who you are writing for?', options: ['Assume it is for the examiner only', 'The form and purpose will imply the audience', 'Write for yourself', 'It does not matter'], correct: 1, explanation: 'The format and purpose of the task imply the audience. A formal report implies a professional audience; a blog post implies a general or younger readership. Use these clues to pitch your register.' },
    ],
  },

  {
    id: 'y9t2-m6',
    title: 'Editing and Refining',
    duration: '40 mins',
    content: `<h2>Self-Assessment Strategies</h2>
<p>The difference between a good piece of writing and an excellent one is almost always editing. First drafts capture ideas; editing shapes those ideas into something polished, precise, and powerful. In an exam, you will not have time for a full redraft, but you can and should build in five minutes at the end for checking and refining. Those five minutes can be worth several marks.</p>

<h3>The Three Levels of Editing</h3>
<p>Professional writers edit at three levels, and you should too:</p>

<p><strong>Level 1: Content and Structure (Macro Editing)</strong></p>
<p>Read through your entire piece and ask: Does every paragraph serve my purpose? Is my argument logical and coherent? Have I addressed the question fully? Is there a clear beginning, middle, and end? Are my paragraphs in the most effective order? This is about the big picture -- the architecture of your writing. If a paragraph does not advance your argument, it needs to be cut or reworked.</p>

<p><strong>Level 2: Sentences and Style (Micro Editing)</strong></p>
<p>Now zoom in on individual sentences. Are they varied in length and structure? Is every word earning its place? Can you replace a weak verb with a stronger one? Can you cut unnecessary words? "Due to the fact that" becomes "because." "At this point in time" becomes "now." Conciseness is a sign of confidence. Every unnecessary word dilutes your impact.</p>

<p><strong>Level 3: Technical Accuracy (Proofreading)</strong></p>
<p>Finally, check spelling, punctuation, and grammar. These are the easiest marks to gain and the easiest to lose. Common errors to look for: missing apostrophes, comma splices, homophones (their/there/they're, your/you're), missing capital letters for proper nouns, and inconsistent tense.</p>

<div class="key-term"><strong>Key Term: Comma splice</strong> -- Joining two independent clauses with just a comma. "The weather was terrible, we stayed inside." This is a common error. Fix it with a full stop, a semicolon, or a conjunction: "The weather was terrible, so we stayed inside."</div>

<h3>Self-Assessment Checklist</h3>
<p>Use this checklist to evaluate your own writing before submitting it:</p>
<ul>
<li>Have I answered the question that was actually asked?</li>
<li>Is my format correct (article, speech, letter, report)?</li>
<li>Is my register appropriate for the audience?</li>
<li>Does every paragraph have a clear purpose?</li>
<li>Have I used a range of sentence structures?</li>
<li>Have I used ambitious vocabulary accurately?</li>
<li>Have I varied my paragraph lengths for effect?</li>
<li>Is my spelling, punctuation, and grammar accurate?</li>
<li>Does my conclusion feel like a satisfying ending, not a sudden stop?</li>
</ul>

<h3>Common Errors to Eliminate</h3>
<p>Certain errors are so common that fixing them alone can raise your work by a full grade:</p>
<ul>
<li><strong>Its vs It's</strong> -- "It's" means "it is." "Its" is possessive. "The dog wagged its tail."</li>
<li><strong>Could of / Should of</strong> -- These do not exist. The correct forms are "could have" and "should have."</li>
<li><strong>Affect vs Effect</strong> -- "Affect" is usually a verb (to influence). "Effect" is usually a noun (a result).</li>
<li><strong>Sentence fragments</strong> -- Incomplete sentences that lack a main verb. While fragments can be used deliberately for effect, accidental fragments suggest poor control.</li>
</ul>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Technical accuracy is worth up to 16 marks on some exam papers. Spending five minutes proofreading at the end of your exam is the most efficient use of time possible. Fix three or four errors and you could gain two or three marks with minimal effort.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Thinking that editing is only about correcting spelling mistakes. True editing involves questioning your content, refining your style, tightening your sentences, and improving your vocabulary. Proofreading is just the final step.</div>`,
    quiz: [
      { id: 'y9t2-m6-q1', question: 'What is a comma splice?', options: ['Using too many commas in a list', 'Joining two independent clauses with only a comma', 'Forgetting a comma after an introductory clause', 'Using a comma before "and"'], correct: 1, explanation: 'A comma splice joins two complete sentences with just a comma. Fix it with a full stop, semicolon, or conjunction. "It was late, we went home" should be "It was late, so we went home."' },
      { id: 'y9t2-m6-q2', question: 'Which level of editing focuses on the overall structure and argument?', options: ['Proofreading', 'Micro editing', 'Macro editing', 'Spell checking'], correct: 2, explanation: 'Macro editing examines the big picture: the overall structure, logical flow of argument, paragraph order, and whether the writing addresses the question fully.' },
      { id: 'y9t2-m6-q3', question: '"Due to the fact that it was raining, we cancelled the event." How would you improve this?', options: ['Add more detail about the rain', 'Replace "due to the fact that" with "because"', 'Remove the comma', 'Change "cancelled" to "canceled"'], correct: 1, explanation: '"Due to the fact that" is an unnecessarily wordy phrase. "Because" says the same thing in one word. Conciseness is a sign of confident, controlled writing.' },
      { id: 'y9t2-m6-q4', question: 'Which is the correct use of "its"?', options: ['"Its going to rain tomorrow."', '"The cat cleaned its paws."', '"Its a beautiful day."', '"Its time to leave."'], correct: 1, explanation: '"Its" (no apostrophe) is possessive -- belonging to it. "It\'s" (with apostrophe) means "it is." The cat owns the paws, so "its paws" is correct.' },
      { id: 'y9t2-m6-q5', question: 'Why is proofreading in an exam described as the most efficient use of time?', options: ['Because it takes the longest', 'Because fixing a few errors can gain several marks with minimal effort', 'Because examiners only mark spelling', 'Because it replaces planning'], correct: 1, explanation: 'Technical accuracy is worth significant marks. Spending five minutes to correct three or four errors is a very high return on a small time investment.' },
    ],
  },

  // ── T2.2: Creative Writing -- Craft & Style ─────────────────────────────────

  {
    id: 'y9t2-m7',
    title: 'Crafted Narrative Writing',
    duration: '45 mins',
    content: `<h2>Deliberate Structure in Narrative</h2>
<p>Crafted narrative writing is the difference between telling a story and constructing one. Anyone can recount events in chronological order. A skilled writer makes deliberate choices about structure, pacing, openings, and endings to create a narrative that resonates with the reader long after they have finished reading. In Year 9, you should be moving beyond instinctive storytelling toward conscious, intentional craft.</p>

<h3>Narrative Structures Beyond Chronological</h3>
<p>Chronological structure -- beginning, middle, end -- is the most natural way to tell a story, but it is not the only way, and it is often not the most effective. Consider these alternatives:</p>

<p><strong>In medias res</strong> -- Starting in the middle of the action. Instead of building slowly to the dramatic moment, you drop the reader right into it: "The glass shattered. I stood there, my hand still raised, watching the shards fall in what felt like slow motion." This creates immediate tension and curiosity. The reader wants to know: what happened before this? What happens next?</p>

<p><strong>Circular structure</strong> -- Ending where you began, but with the character or situation transformed. A story that opens with a character sitting alone on a park bench might end with them on the same bench, but now everything has changed. The repetition of setting highlights how much has shifted internally.</p>

<p><strong>Flashback structure</strong> -- Interrupting the present narrative to revisit the past. This allows you to reveal backstory at the most dramatically effective moment, rather than front-loading information the reader does not yet care about.</p>

<p><strong>Dual timeline</strong> -- Alternating between two time periods. A character preparing for a job interview might alternate with scenes from their childhood that explain why this moment matters so much. The juxtaposition creates meaning through contrast.</p>

<div class="key-term"><strong>Key Term: In medias res</strong> -- Latin for "in the middle of things." A narrative technique that begins the story at a dramatic or crucial moment, then fills in background information as the story progresses. It is one of the most effective ways to hook a reader immediately.</div>

<h3>The Five-Part Narrative Arc</h3>
<p>Whether you use a linear or non-linear structure, most effective narratives follow a recognisable arc:</p>
<ul>
<li><strong>Exposition</strong> -- Establish the setting, character, and situation. Keep this brief. Do not spend three paragraphs describing the weather before anything happens.</li>
<li><strong>Rising action</strong> -- Introduce conflict or tension. Something must go wrong, change, or challenge the character.</li>
<li><strong>Climax</strong> -- The point of highest tension or the most significant moment. Everything builds toward this.</li>
<li><strong>Falling action</strong> -- The aftermath of the climax. How does the character respond? What changes?</li>
<li><strong>Resolution</strong> -- The ending. This does not have to wrap everything up neatly. Ambiguous or open endings can be very powerful.</li>
</ul>

<h3>Pacing: Controlling Time</h3>
<p>Pacing is how you control the speed at which the reader moves through your story. Slow down at moments of emotional intensity by expanding descriptions, using sensory detail, and stretching seconds into paragraphs. Speed up through less important moments with summary: "The next three weeks passed in a blur of revision and anxiety." Skilled pacing means spending the most words on the most important moments.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> In a timed exam, you have roughly 45 minutes for creative writing. Plan a focused narrative with no more than three or four scenes. Trying to tell an epic story with multiple characters and locations will result in a rushed, underdeveloped piece. A small story told well always beats a big story told badly.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Writing a story where "lots of things happen" but none of them are developed. Three pages of plot with no description, no character depth, and no atmospheric detail will score lower than one well-crafted scene with rich language and genuine emotion.</div>`,
    quiz: [
      { id: 'y9t2-m7-q1', question: 'What does "in medias res" mean?', options: ['At the end of the story', 'In the middle of things', 'In a flashback', 'In the future'], correct: 1, explanation: '"In medias res" is Latin for "in the middle of things." It means starting your narrative at a dramatic or crucial moment rather than at the chronological beginning.' },
      { id: 'y9t2-m7-q2', question: 'What is a circular narrative structure?', options: ['A story with no ending', 'A story that ends where it began, but with transformation', 'A story told backwards', 'A story with multiple narrators'], correct: 1, explanation: 'A circular structure returns to the opening setting or situation, but the character or situation has changed. The repetition highlights the transformation that has occurred.' },
      { id: 'y9t2-m7-q3', question: 'How should you handle pacing at a moment of high emotional intensity?', options: ['Speed up to maintain excitement', 'Skip it and move to the next scene', 'Slow down with sensory detail and expanded description', 'Use only dialogue'], correct: 2, explanation: 'Moments of high emotion deserve the most attention. Slowing down with sensory detail, expanded description, and stretched time allows the reader to fully experience the moment.' },
      { id: 'y9t2-m7-q4', question: 'In a 45-minute exam, how many scenes should your narrative ideally contain?', options: ['As many as possible', 'Three or four focused scenes', 'Only one scene', 'At least ten'], correct: 1, explanation: 'Three or four well-developed scenes give you enough scope for a narrative arc while allowing time to develop each scene with rich language. Too many scenes results in a rushed, superficial piece.' },
      { id: 'y9t2-m7-q5', question: 'What is the climax of a narrative?', options: ['The opening sentence', 'The point of highest tension or most significant moment', 'The final paragraph', 'The setting description'], correct: 1, explanation: 'The climax is the peak of the story -- the moment of greatest tension, conflict, or emotional intensity. Everything in the narrative builds toward this moment.' },
    ],
  },

  {
    id: 'y9t2-m8',
    title: 'Controlling Perspective and Viewpoint',
    duration: '45 mins',
    content: `<h2>Who Tells the Story Matters</h2>
<p>Perspective is one of the most powerful tools in a writer's arsenal. The same events can feel entirely different depending on who is telling the story and how much they know. Choosing your narrative perspective is not a neutral decision -- it shapes everything: what the reader knows, how they feel, whose emotions they access, and what is hidden from them. Mastering perspective control is what separates competent writing from genuinely compelling storytelling.</p>

<h3>First Person Narration</h3>
<p>Writing in the first person ("I") creates immediacy and intimacy. The reader is inside the narrator's head, experiencing events through their eyes, sharing their thoughts and emotions directly. This perspective is powerful for creating empathy and a strong narrative voice.</p>
<p>However, first person has limitations. You can only describe what the narrator sees, knows, and feels. You cannot reveal other characters' internal thoughts unless the narrator infers them. This limitation can be a strength: unreliable narration, where the narrator's version of events may not be trustworthy, creates fascinating complexity.</p>

<h3>Third Person Limited</h3>
<p>Third person limited ("He," "She," "They") follows one character closely, almost like a camera positioned just behind their shoulder. You describe their thoughts and feelings but not those of other characters. This perspective offers more flexibility than first person -- you can describe the character from the outside as well as the inside -- while still maintaining a close emotional connection.</p>

<h3>Third Person Omniscient</h3>
<p>The omniscient narrator knows everything: every character's thoughts, every secret, every event past and future. This perspective offers maximum flexibility but requires careful management. Jumping between characters' thoughts within a single paragraph can feel chaotic. The best omniscient narration moves between viewpoints deliberately, often focusing on one character per scene.</p>

<div class="key-term"><strong>Key Term: Unreliable narrator</strong> -- A first-person narrator whose account may be biased, incomplete, or deliberately deceptive. The reader must read between the lines to discover the truth. This technique creates layers of meaning and invites active engagement from the reader.</div>

<h3>Second Person Narration</h3>
<p>Second person ("You") is rare but powerful. "You walk into the room. You see the letter on the table. Your hands are shaking." This places the reader directly into the story as the protagonist. It creates an unsettling immediacy and can be used for immersive description or to explore themes of identity and control.</p>

<h3>Choosing the Right Perspective</h3>
<p>Your choice should serve the story. Ask yourself: Whose experience is most important? How much should the reader know? Do you want intimacy or distance? Is there a gap between what the narrator tells us and what actually happened? A mystery benefits from limited perspective -- the reader discovers clues alongside the character. A story about conflicting viewpoints might use multiple perspectives. A confessional story demands first person.</p>

<h3>Voice and Perspective</h3>
<p>Perspective determines not just who speaks but how they speak. A first-person child narrator uses simple vocabulary and misunderstands adult situations, creating dramatic irony. A third-person narrator describing a Victorian setting might adopt the formal diction of the period. The narrative voice should feel authentic to the perspective you have chosen.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> First person is the most popular choice in exams and is often the safest for creating a strong voice. However, if you can control third person limited effectively, it demonstrates greater technical skill. Whichever you choose, be consistent and deliberate.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Accidentally switching between perspectives. Starting in first person ("I walked into the room") and then shifting to third person ("She felt nervous") within the same scene is a technical error that loses marks. Choose your perspective and maintain it.</div>`,
    quiz: [
      { id: 'y9t2-m8-q1', question: 'What is the main advantage of first person narration?', options: ['You can describe all characters\' thoughts', 'It creates immediacy and intimacy with the reader', 'It allows an objective viewpoint', 'It is the easiest to write'], correct: 1, explanation: 'First person places the reader inside the narrator\'s head, creating a direct emotional connection. The reader experiences events through the narrator\'s eyes and shares their thoughts.' },
      { id: 'y9t2-m8-q2', question: 'What is an unreliable narrator?', options: ['A narrator who forgets details', 'A narrator whose account may be biased, incomplete, or deceptive', 'A third person narrator', 'A narrator who speaks in second person'], correct: 1, explanation: 'An unreliable narrator tells the story in a way that may not reflect reality. The reader must interpret their account critically, creating layers of meaning beyond the surface.' },
      { id: 'y9t2-m8-q3', question: 'What is the key limitation of third person limited perspective?', options: ['You cannot describe settings', 'You can only access one character\'s thoughts and feelings', 'You must write in past tense', 'You cannot use dialogue'], correct: 1, explanation: 'Third person limited follows one character closely. You can describe their internal world but not other characters\' thoughts, unless your focal character infers them.' },
      { id: 'y9t2-m8-q4', question: 'When might second person narration ("you") be effective?', options: ['In formal essays', 'When creating immersive, unsettling immediacy', 'In newspaper articles', 'When writing dialogue'], correct: 1, explanation: 'Second person places the reader directly into the story as protagonist. The effect is immersive and can feel unsettling because it removes the reader\'s distance from the events.' },
      { id: 'y9t2-m8-q5', question: 'What is the most common mistake students make with perspective?', options: ['Using too much dialogue', 'Accidentally switching between perspectives within a scene', 'Writing in past tense', 'Using too many characters'], correct: 1, explanation: 'Switching from "I" to "She" or from limited to omniscient within a scene is a technical error. Choose your perspective at the planning stage and maintain it consistently throughout.' },
    ],
  },

  {
    id: 'y9t2-m9',
    title: 'Descriptive Techniques',
    duration: '45 mins',
    content: `<h2>Imagery, Symbolism, and Motif</h2>
<p>Descriptive writing at its best does far more than paint a picture. It creates an experience. It makes the reader feel the cold, hear the silence, taste the fear. In Year 9, you should be moving beyond surface-level description toward writing that uses imagery, symbolism, and motif to create layers of meaning beneath the surface of your prose.</p>

<h3>Sensory Imagery</h3>
<p>The foundation of all powerful description is sensory detail. Engage all five senses, not just sight:</p>
<ul>
<li><strong>Visual</strong> -- What can be seen? Colours, shapes, light, shadow, movement. "The corridor stretched ahead, fluorescent lights flickering in a sickly yellow rhythm."</li>
<li><strong>Auditory</strong> -- What can be heard? Sounds, silence, volume, pitch. "The only sound was the distant drip of a leaking pipe, metronomic and maddening."</li>
<li><strong>Tactile</strong> -- What can be felt? Temperature, texture, pressure, pain. "The metal railing was ice against her palm, burning with cold."</li>
<li><strong>Olfactory</strong> -- What can be smelled? Scents trigger memory and emotion powerfully. "The classroom smelled of chalk dust and anxiety."</li>
<li><strong>Gustatory</strong> -- What can be tasted? "She swallowed hard, tasting copper -- the metallic tang of fear."</li>
</ul>
<p>The most effective descriptions combine multiple senses. Do not describe a scene only through what can be seen. Layer in sounds, textures, and smells to create a fully immersive experience.</p>

<div class="key-term"><strong>Key Term: Sensory imagery</strong> -- Language that appeals to one or more of the five senses (sight, hearing, touch, smell, taste). Using multiple senses creates vivid, immersive description that makes the reader feel present in the scene.</div>

<h3>Symbolism</h3>
<p>A symbol is an object, image, or element that represents something beyond its literal meaning. A storm can symbolise emotional turmoil. A locked door can represent an obstacle or a secret. A withered plant might symbolise neglect or decay. Symbolism adds a layer of meaning to your writing that rewards attentive readers.</p>
<p>The key to effective symbolism is subtlety. Do not write: "The broken mirror symbolised her shattered identity." Instead, describe the mirror -- the cracks, the fragmented reflection, the way she avoids looking at it -- and let the reader make the connection. Trust your reader. The meaning is more powerful when they discover it for themselves.</p>

<h3>Motif</h3>
<p>A motif is a recurring image, symbol, or idea that appears throughout a piece of writing. While a symbol appears once, a motif is threaded through the narrative, gaining significance each time it reappears. The colour red appearing at key moments. References to water or drowning. The recurring image of a clock. Each recurrence deepens the motif's meaning and creates coherence across your writing.</p>

<p>Using a motif in exam writing demonstrates sophisticated craft. Choose one image connected to your theme and weave it through your piece. If your story is about isolation, references to empty spaces -- an empty chair, a vacant house, a deserted street -- create a motif that reinforces your theme without stating it directly.</p>

<h3>Show, Don't Tell</h3>
<p>This is the most important principle in descriptive writing. Instead of telling the reader how a character feels, show it through their actions, physical sensations, and surroundings:</p>
<ul>
<li><strong>Telling:</strong> "She was nervous."</li>
<li><strong>Showing:</strong> "Her fingers drummed against the desk. She checked the clock. Checked it again. The second hand seemed to have stopped."</li>
</ul>
<p>Showing requires more words but creates a far more powerful and immersive experience. The reader infers the emotion rather than being told it, which makes them an active participant in the story.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The highest-level descriptive writing does not just describe what things look like. It uses description to convey emotion, atmosphere, and meaning. A grey sky is not just a grey sky -- it reflects the character's mood, foreshadows events, or symbolises stagnation. Make every description work on multiple levels.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Over-describing everything. Not every object in a room needs a paragraph. Select the details that matter -- the ones that create atmosphere, reveal character, or advance your narrative. Three precise details are worth more than twenty vague ones.</div>`,
    quiz: [
      { id: 'y9t2-m9-q1', question: 'What is the difference between a symbol and a motif?', options: ['There is no difference', 'A symbol appears once; a motif recurs throughout a text', 'A motif is visual; a symbol is auditory', 'Symbols are used in poetry; motifs in prose'], correct: 1, explanation: 'A symbol is a single element that represents something beyond its literal meaning. A motif is a recurring image or idea threaded throughout the text, gaining significance with each appearance.' },
      { id: 'y9t2-m9-q2', question: '"Her fingers drummed against the desk. She checked the clock. Checked it again." Is this showing or telling?', options: ['Telling', 'Showing', 'Neither', 'Both'], correct: 1, explanation: 'This is showing. Instead of stating "She was nervous," the writer reveals her anxiety through physical actions and behaviours. The reader infers the emotion, which is more powerful.' },
      { id: 'y9t2-m9-q3', question: 'Which sense is often most neglected in descriptive writing?', options: ['Sight', 'Sound', 'Smell', 'All senses are used equally'], correct: 2, explanation: 'Students tend to focus heavily on visual description. Smell (olfactory imagery) is often overlooked, yet it is one of the most powerful senses for triggering memory and emotion.' },
      { id: 'y9t2-m9-q4', question: 'Why should symbolism be subtle rather than explicit?', options: ['Because examiners dislike symbolism', 'Because meaning is more powerful when the reader discovers it', 'Because symbols must be hidden completely', 'Because explicit symbolism is grammatically incorrect'], correct: 1, explanation: 'Stating "the broken mirror symbolised her shattered identity" removes the reader\'s role in discovering meaning. Subtle symbolism invites interpretation and creates a richer reading experience.' },
      { id: 'y9t2-m9-q5', question: 'How can you use a motif effectively in exam creative writing?', options: ['Mention it once at the beginning', 'Choose one image connected to your theme and weave it throughout', 'Use as many different motifs as possible', 'Explain the motif in your conclusion'], correct: 1, explanation: 'Select one image that connects to your theme and reference it at key moments throughout your piece. Each recurrence deepens its significance and demonstrates sophisticated craft to the examiner.' },
    ],
  },

  {
    id: 'y9t2-m10',
    title: 'Developing Atmosphere and Tone',
    duration: '45 mins',
    content: `<h2>Creating Mood Through Language</h2>
<p>Atmosphere is the emotional quality of a piece of writing -- the feeling it creates in the reader. Tone is the writer's attitude toward the subject or audience. Together, they determine how the reader experiences your writing on an emotional level. A skilled writer controls atmosphere and tone as deliberately as a film director controls lighting and music, making the reader feel exactly what they want them to feel.</p>

<h3>Building Atmosphere Through Setting</h3>
<p>Setting is not just a backdrop; it is one of your most powerful tools for creating atmosphere. Every detail you choose contributes to the mood. Consider how different settings create different feelings:</p>

<p>A tense atmosphere might use: narrow corridors, flickering lights, shadows, locked doors, distant sounds, cold temperatures, and decay. The physical environment mirrors the emotional state you want to create.</p>

<p>A peaceful atmosphere might use: open spaces, natural light, gentle sounds (birdsong, flowing water), warm colours, soft textures, and familiar objects. Every sensory detail contributes to calm.</p>

<p>A melancholic atmosphere might use: rain, grey skies, empty rooms, abandoned objects, fading photographs, wilting flowers, and silence. The setting becomes a reflection of sadness or loss.</p>

<div class="key-term"><strong>Key Term: Pathetic fallacy</strong> -- Using weather, landscape, or natural elements to reflect or reinforce a character's emotional state or the mood of a scene. A storm during an argument, sunshine during a moment of joy. Used well, it creates resonance; used clumsily, it becomes cliche.</div>

<h3>Word-Level Atmosphere</h3>
<p>Atmosphere lives in individual word choices. Every noun, verb, and adjective carries connotations that contribute to mood. Compare:</p>
<ul>
<li>"The house stood at the end of the lane" -- neutral, no atmosphere.</li>
<li>"The house loomed at the end of the lane" -- "loomed" suggests threat, size, oppression.</li>
<li>"The cottage nestled at the end of the lane" -- "nestled" suggests cosiness, warmth, safety.</li>
</ul>
<p>A single verb changes everything. This is why word choice matters more than length. A short sentence with the perfect verb creates more atmosphere than a long paragraph of generic description.</p>

<h3>Sentence Structure and Atmosphere</h3>
<p>The rhythm of your sentences affects atmosphere as much as your word choices:</p>
<ul>
<li><strong>Short, staccato sentences</strong> create tension, urgency, or shock. "He stopped. Listened. Nothing. Then -- footsteps."</li>
<li><strong>Long, flowing sentences</strong> create calm, beauty, or overwhelming emotion. They carry the reader along in a steady current.</li>
<li><strong>Fragments</strong> create unease, disorientation, or raw emotion. "Silence. Absolute. Suffocating."</li>
<li><strong>Listing</strong> can create a sense of abundance, chaos, or monotony depending on context.</li>
</ul>

<h3>Controlling Tone</h3>
<p>Tone is communicated through your choice of language, your sentence structures, and the relationship you create with the reader. A bitter tone uses sharp, cutting language. A nostalgic tone uses warm, wistful language that looks back with longing. An ironic tone says one thing while meaning another, creating a gap between surface meaning and true intent. A menacing tone uses understated threat rather than explicit violence.</p>

<p>The most important thing about tone is consistency. If you establish a sombre, reflective tone in your opening paragraph, a sudden burst of humour in the third paragraph will feel jarring unless the shift is deliberate. Every sentence should contribute to the overall tone you are building.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Atmosphere and tone are where the highest marks live in creative writing. Examiners look for "compelling" and "convincing" writing at the top of the mark scheme. This means writing that creates a genuine emotional response -- writing that makes them feel something. Focus on atmosphere and your marks will rise.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Relying entirely on pathetic fallacy for atmosphere. Yes, rain can signal sadness. But if every sad scene has rain and every happy scene has sunshine, your writing feels formulaic. Use pathetic fallacy sparingly, and consider subverting it: a sunny day can make grief feel even more isolating.</div>`,
    quiz: [
      { id: 'y9t2-m10-q1', question: '"The house loomed at the end of the lane." What does the verb "loomed" contribute?', options: ['It describes the colour of the house', 'It creates a sense of threat and oppression', 'It tells us the house is small', 'It suggests the house is new'], correct: 1, explanation: '"Loomed" suggests something large, threatening, and dominating. It transforms a neutral description into an atmospheric one through a single word choice.' },
      { id: 'y9t2-m10-q2', question: 'What is pathetic fallacy?', options: ['A logical error in an argument', 'Using weather or nature to reflect emotional state or mood', 'A type of metaphor', 'Writing that makes the reader feel sad'], correct: 1, explanation: 'Pathetic fallacy uses natural elements like weather and landscape to mirror or reinforce the emotional atmosphere of a scene. A storm during conflict or sunshine during joy are classic examples.' },
      { id: 'y9t2-m10-q3', question: 'How do short, staccato sentences affect atmosphere?', options: ['They create calm and peace', 'They create tension, urgency, or shock', 'They make writing boring', 'They are only used in poetry'], correct: 1, explanation: 'Short sentences force the reader to pause after each one, creating a sharp, tense rhythm. They are particularly effective during moments of danger, fear, or revelation.' },
      { id: 'y9t2-m10-q4', question: 'Why is consistency of tone important?', options: ['Because you can only use one tone per essay', 'Because unexpected shifts feel jarring unless they are deliberate', 'Because examiners prefer a single mood', 'Because changing tone is always wrong'], correct: 1, explanation: 'A sudden, unintentional shift in tone disrupts the reading experience. Tone can change, but it must be a deliberate choice that serves the writing, not an accidental inconsistency.' },
      { id: 'y9t2-m10-q5', question: 'How can pathetic fallacy be subverted for greater effect?', options: ['By never using it', 'By using weather that contrasts with the mood, e.g., sunshine during grief', 'By using it in every paragraph', 'By explaining what pathetic fallacy is in your story'], correct: 1, explanation: 'Subverting pathetic fallacy -- such as setting a funeral on a bright, sunny day -- can be more powerful than the conventional approach. The contrast between setting and emotion creates a jarring, memorable effect.' },
    ],
  },

  {
    id: 'y9t2-m11',
    title: 'Sentence Variety for Effect',
    duration: '40 mins',
    content: `<h2>Short, Complex, and Minor Sentences</h2>
<p>Sentence variety is not about following a rule that says you must alternate between long and short sentences. It is about understanding the effect that different sentence structures create and deploying them intentionally to shape the reader's experience. A skilled writer uses sentence length and structure the way a musician uses tempo and dynamics: speeding up, slowing down, pausing, and building to create rhythm, tension, and emotional impact.</p>

<h3>Short Sentences</h3>
<p>A short sentence punches. It stops the reader. It demands attention. After a paragraph of flowing, complex prose, a short sentence lands with impact because it breaks the established rhythm. Short sentences are particularly effective for:</p>
<ul>
<li><strong>Creating tension</strong> -- "She turned the handle. Locked."</li>
<li><strong>Delivering a revelation</strong> -- "He knew."</li>
<li><strong>Expressing finality</strong> -- "It was over."</li>
<li><strong>Creating starkness</strong> -- "The room was empty."</li>
</ul>
<p>The power of a short sentence depends on contrast. Ten short sentences in a row lose their impact because there is no variation. A single short sentence after three long ones is devastating.</p>

<h3>Complex Sentences</h3>
<p>Complex sentences contain a main clause and one or more subordinate clauses. They allow you to layer information, qualify ideas, and create flowing, sophisticated prose. Complex sentences are effective for:</p>
<ul>
<li><strong>Building atmosphere</strong> -- "The house, which had stood empty for seventeen years, its windows clouded with grime and its garden swallowed by brambles, seemed to watch them from the end of the lane."</li>
<li><strong>Conveying thought processes</strong> -- "Although she knew she should turn back, although every instinct told her to run, she stepped forward, drawn by something she could not name."</li>
<li><strong>Creating a sense of accumulation</strong> -- Layering subordinate clauses builds a sense of things piling up, overwhelming the character or the reader.</li>
</ul>

<h3>Minor Sentences (Fragments)</h3>
<p>A minor sentence is a grammatically incomplete sentence used deliberately for effect. "Darkness. Silence. Then -- a scream." Fragments break the rules of grammar intentionally, and this rule-breaking creates impact. They are effective for:</p>
<ul>
<li><strong>Creating disorientation</strong> -- "Voices. Somewhere close. Or perhaps not."</li>
<li><strong>Expressing shock or numbness</strong> -- "Gone. Just like that."</li>
<li><strong>Mimicking fractured thought</strong> -- "Running. Keep running. Don't look back."</li>
<li><strong>Establishing setting with sparse intensity</strong> -- "A road. No streetlights. November."</li>
</ul>

<div class="key-term"><strong>Key Term: Minor sentence (fragment)</strong> -- A grammatically incomplete sentence used deliberately for stylistic effect. Unlike an accidental fragment, which is an error, a deliberate minor sentence shows sophisticated control and creates specific effects like tension, disorientation, or emotional rawness.</div>

<h3>Periodic and Loose Sentences</h3>
<p>A <strong>periodic sentence</strong> builds suspense by placing the main clause at the end: "Despite the warnings, despite the danger, despite everything she had been told, she opened the door." The reader must wait for the payoff, which creates anticipation.</p>

<p>A <strong>loose sentence</strong> delivers the main idea first and then adds detail: "She opened the door, ignoring the warnings, the danger, everything she had been told." This feels more natural and conversational. Both structures are useful; the choice depends on whether you want to build suspense or deliver information directly.</p>

<h3>Combining for Rhythm</h3>
<p>The real skill is in combination. A paragraph that moves from long, atmospheric sentences to a single sharp fragment creates a rhythm that carries the reader along and then stops them dead. Consider this pattern: long -- long -- medium -- short. The momentum builds and then snaps. This is not a formula to follow mechanically, but a principle to understand: variation creates rhythm, and rhythm creates feeling.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> The mark scheme specifically rewards "a range of sentence structures used to create effects." This means examiners are actively looking for variety. If every sentence in your writing is the same length and structure, you are limiting your marks. Practise varying your sentences until it becomes instinctive.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Using minor sentences throughout your entire piece. One or two fragments per page are powerful. Twenty fragments suggest you cannot write in complete sentences. The impact of a fragment depends on its rarity.</div>`,
    quiz: [
      { id: 'y9t2-m11-q1', question: 'Why is a short sentence most powerful after longer ones?', options: ['Because short sentences are always better', 'Because the contrast with the established rhythm creates impact', 'Because examiners prefer short sentences', 'Because long sentences are wrong'], correct: 1, explanation: 'The impact of a short sentence depends on contrast. After flowing, complex prose, a sudden short sentence breaks the rhythm and stops the reader. Without contrast, it has no special power.' },
      { id: 'y9t2-m11-q2', question: '"Darkness. Silence. Then -- a scream." What sentence type is this?', options: ['Complex sentences', 'Compound sentences', 'Minor sentences (fragments)', 'Simple sentences'], correct: 2, explanation: '"Darkness" and "Silence" are grammatically incomplete -- they have no verb. These are deliberate fragments used for atmospheric effect, creating sparse, tense description.' },
      { id: 'y9t2-m11-q3', question: 'What is a periodic sentence?', options: ['A sentence that repeats periodically', 'A sentence that places the main clause at the end for suspense', 'A sentence about time', 'A sentence with no punctuation'], correct: 1, explanation: 'A periodic sentence delays the main idea until the end, forcing the reader to wait through subordinate clauses. This creates anticipation and suspense.' },
      { id: 'y9t2-m11-q4', question: 'What effect does a complex sentence with layered subordinate clauses create?', options: ['Simplicity and clarity', 'A sense of accumulation or overwhelming detail', 'Humour', 'Informality'], correct: 1, explanation: 'Layering subordinate clauses builds information and atmosphere, creating a sense of things piling up. This can convey an overwhelming environment, a racing mind, or rich atmospheric detail.' },
      { id: 'y9t2-m11-q5', question: 'How many minor sentences per page are typically effective?', options: ['As many as possible', 'None -- fragments are always errors', 'One or two', 'At least ten'], correct: 2, explanation: 'One or two deliberate fragments per page are powerful. Overusing them diminishes their impact and suggests a lack of sentence control. Their power depends on their rarity.' },
    ],
  },

  {
    id: 'y9t2-m12',
    title: 'Assessment: Transactional and Creative Writing Portfolio',
    duration: '55 mins',
    content: `<h2>Bringing It All Together</h2>
<p>This module is your opportunity to demonstrate everything you have learned across the transactional and creative writing units. By now, you should be confident in writing for purpose and audience, constructing sustained arguments, deploying rhetorical techniques, controlling register, crafting narratives with deliberate structure, using imagery and symbolism, building atmosphere and tone, and varying your sentences for effect. This assessment draws on all of these skills.</p>

<h3>Part One: Transactional Writing</h3>
<p>In the GCSE exam, you will typically have 45 minutes to produce a piece of transactional writing. The task will specify a form (article, speech, letter, or report), a purpose (argue, persuade, advise, inform), and often an audience (headteacher, fellow students, newspaper readers). Your job is to demonstrate command of all the skills assessed:</p>

<p><strong>Content (AO5)</strong> -- Communicate clearly, effectively, and imaginatively. Select and adapt tone, style, and register for different forms, purposes, and audiences. Organise information and ideas using structural and grammatical features to support coherence and clarity.</p>

<p><strong>Technical Accuracy (AO6)</strong> -- Use a range of vocabulary and sentence structures for clarity, purpose, and effect with accurate spelling and punctuation.</p>

<h3>Planning a Transactional Piece</h3>
<p>Spend five minutes planning. Your plan should include:</p>
<ul>
<li><strong>Format check</strong> -- What are the conventions of this form? Note down the key features you must include.</li>
<li><strong>Audience and register</strong> -- Who are you writing for? What level of formality is appropriate?</li>
<li><strong>Paragraph plan</strong> -- What is each paragraph about? In what order will you present your ideas? Where will your counterargument go?</li>
<li><strong>Techniques to use</strong> -- Note two or three rhetorical or persuasive techniques you will integrate naturally.</li>
<li><strong>Opening and closing</strong> -- Draft your first and last sentences. These are the most important in the piece.</li>
</ul>

<h3>Part Two: Creative Writing</h3>
<p>Creative writing in the exam is assessed on the same objectives but with different emphasis. Here, "communicate imaginatively" carries more weight. You are judged on the quality of your descriptions, the effectiveness of your narrative structure, the sophistication of your language choices, and your ability to create atmosphere and engage the reader emotionally.</p>

<h3>Planning a Creative Piece</h3>
<p>Your plan should include:</p>
<ul>
<li><strong>Narrative structure</strong> -- Will you use chronological order, in medias res, circular structure, or flashback? Decide before you start.</li>
<li><strong>Perspective</strong> -- First person or third person limited? Who is your narrator?</li>
<li><strong>Key scenes</strong> -- Identify three or four key moments. Do not try to cover too much ground.</li>
<li><strong>Atmosphere and motif</strong> -- What mood do you want to create? Is there a recurring image you can thread through?</li>
<li><strong>Sensory details</strong> -- Note specific sensory details for your most important scene. What can be seen, heard, felt, smelled?</li>
</ul>

<div class="key-term"><strong>Key Term: Assessment objectives</strong> -- The specific skills that examiners are looking for and awarding marks for. AO5 covers content and organisation (what you say and how you structure it). AO6 covers technical accuracy (spelling, punctuation, grammar, and sentence variety). Understanding these helps you target your revision and exam technique.</div>

<h3>Common Pitfalls in Timed Writing</h3>
<p>Under pressure, even strong writers make predictable mistakes. Knowing these in advance helps you avoid them:</p>
<ul>
<li><strong>Not reading the question carefully</strong> -- Write an article when asked for an article. Write a speech when asked for a speech. This sounds obvious, but under time pressure, students rush past the question.</li>
<li><strong>Spending too long on the opening</strong> -- Your opening matters, but not at the expense of everything else. If your first paragraph takes ten minutes, you have a problem.</li>
<li><strong>Plot over quality</strong> -- In creative writing, three well-crafted pages of rich description and atmosphere will always outscore five pages of thin plot summary.</li>
<li><strong>Forgetting to proofread</strong> -- The last five minutes should always be reserved for checking spelling, punctuation, and grammar. This is where easy marks live.</li>
<li><strong>Ending abruptly</strong> -- A rushed ending undermines the entire piece. Plan your conclusion before you start writing so you know where you are heading.</li>
</ul>

<h3>What Top-Band Writing Looks Like</h3>
<p>Examiners describe the highest-level writing as "compelling" and "convincing." It is writing that makes them forget they are marking an exam. It has a distinctive voice, controlled structure, ambitious vocabulary used accurately, varied sentences that create deliberate effects, and a clear sense that every word has been chosen for a reason. You do not need to be a literary genius to achieve this. You need to plan, write with purpose, use the techniques you have learned, and leave time to refine. That is what craft is: deliberate choices executed with skill.</p>

<div class="examiner-tip"><strong>Examiner Tip:</strong> Examiners read hundreds of papers. The ones that stand out are not the longest or the most complicated -- they are the ones with genuine voice, controlled craft, and writing that makes the examiner feel something. Focus on quality, not quantity. A shorter, polished piece will always outscore a longer, sloppy one.</div>

<div class="common-mistake"><strong>Common Mistake:</strong> Treating the writing exam as a test of speed. The goal is not to fill as many pages as possible. It is to demonstrate the highest quality writing you can produce in the time available. Plan carefully, write with purpose, and edit ruthlessly.</div>`,
    quiz: [
      { id: 'y9t2-m12-q1', question: 'What does AO5 assess in writing exams?', options: ['Spelling and punctuation only', 'Content, organisation, and communication', 'Handwriting quality', 'How many pages you write'], correct: 1, explanation: 'AO5 assesses your content and organisation: how clearly and effectively you communicate, how well you adapt to form and audience, and how coherently you structure your ideas.' },
      { id: 'y9t2-m12-q2', question: 'How long should you spend planning in a 45-minute writing task?', options: ['No time -- just start writing', 'About 5 minutes', 'About 20 minutes', 'The entire time'], correct: 1, explanation: 'Five minutes of planning ensures your writing has direction, structure, and purpose. Without a plan, you risk losing focus, rambling, or ending abruptly because you ran out of ideas.' },
      { id: 'y9t2-m12-q3', question: 'In creative writing, what scores higher?', options: ['Five pages of plot summary', 'Three pages of rich description, atmosphere, and crafted language', 'The longest response', 'A story with the most characters'], correct: 1, explanation: 'Quality always outscores quantity. Three pages of richly crafted writing with atmosphere, imagery, and deliberate technique will achieve higher marks than five pages of thin, undeveloped plot.' },
      { id: 'y9t2-m12-q4', question: 'What do examiners mean when they describe writing as "compelling"?', options: ['It is very long', 'It uses the most complex vocabulary', 'It makes the reader forget they are marking and genuinely engages them', 'It follows a strict formula'], correct: 2, explanation: '"Compelling" writing draws the reader in completely. It has voice, craft, emotional power, and a sense that every word was chosen deliberately. It makes the examiner feel something genuine.' },
      { id: 'y9t2-m12-q5', question: 'Why should you plan your conclusion before you start writing?', options: ['Because conclusions are the longest paragraph', 'So you know where your writing is heading and avoid ending abruptly', 'Because the examiner reads the conclusion first', 'Because you should write the conclusion first'], correct: 1, explanation: 'Knowing your ending gives your writing direction and purpose. Without a planned conclusion, you risk running out of time and ending abruptly, which undermines the entire piece.' },
    ],
  },
];
