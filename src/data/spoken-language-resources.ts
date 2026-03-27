export interface SpokenLanguageTask {
  id: string;
  title: string;
  board: string;
  taskType: 'presentation' | 'discussion' | 'role-play';
  topic: string;
  duration: string;
  preparationGuide: string;
  assessmentCriteria: string[];
  modelScript: string;
  teacherNotes: string;
  peerAssessmentSheet: string;
}

// AQA TASKS (4 total: 1 presentation, 1 discussion, 1 role-play, 1 presentation)
const aqaTask1: SpokenLanguageTask = {
  id: 'aqa-001',
  title: 'Persuasive Presentation: Environmental Responsibility in Schools',
  board: 'AQA',
  taskType: 'presentation',
  topic: 'Environmental sustainability and school policy changes',
  duration: '4-5 minutes',
  preparationGuide: `Research school sustainability initiatives, environmental statistics, and successful school policies. Develop persuasive arguments with evidence. Create visual aids showing data, examples, and cost-benefit analysis.`,
  assessmentCriteria: [
    'Clarity and coherence: Argument flows logically with clear structure',
    'Persuasive techniques: Effective use of rhetorical devices and evidence',
    'Engagement: Maintains audience interest through delivery and content',
    'Presentation skills: Clear articulation, appropriate pace, confident body language',
    'Evidence quality: Uses credible sources and specific, relevant data'
  ],
  modelScript: `Good morning. Did you know British schools generate enough plastic waste annually to fill 50 Olympic swimming pools? That's a problem we can solve, starting right here.

First, environmental impact: single-use plastics take 500 years to decompose. Our school has 1,200 students. Multiply that by 190 school days and we're generating 228,000 pieces of plastic annually going into landfills.

Second, cost argument: schools implementing plastic-free lunch policies report 15% savings on waste management costs within the first year. Initial equipment costs £8,000. Annual savings: £12,000. That's a two-thirds payback period.

Third, educational opportunity: this creates a living classroom where environmental responsibility becomes part of our school culture. I've researched fourteen schools successfully implementing this. Collingwood School in London saw 95% container return rates within three months.

So I'm asking for a necessary change, not perfection. Environmental responsibility means doing better when it matters.`,
  teacherNotes: `Focus on persuasive technique effectiveness and evidence quality. Look for logical flow, how counterarguments are handled, confidence in delivery. Common issues: reading from notes (encourage bullet points), weak evidence (require sources), rushed pacing.`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
STRUCTURE: Opening hook, logical progression, closing statement
PERSUASION: Rhetorical devices, evidence integration, audience impact
DELIVERY: Articulation, pacing, eye contact, body language
EVIDENCE: Specific examples, credible sources, proper integration
Score out of 80.`
};

const aqaTask2: SpokenLanguageTask = {
  id: 'aqa-002',
  title: 'Group Discussion: The Impact of Social Media on Mental Health',
  board: 'AQA',
  taskType: 'discussion',
  topic: 'Social media, digital wellness, mental health effects',
  duration: '8-10 minutes (4 participants)',
  preparationGuide: `Research positive and negative impacts of social media on mental health. Develop distinct positions: primarily harmful, beneficial, depends on usage, design is the issue. Gather statistics, recent studies, personal examples.`,
  assessmentCriteria: [
    'Engagement: Actively contributes relevant points throughout',
    'Evidence: Supports arguments with specific, credible data and examples',
    'Listening: Responds to others\' points and builds on discussion',
    'Clarity: Articulates ideas clearly without frequent hesitation',
    'Balance: Acknowledges validity of different viewpoints'
  ],
  modelScript: `Participant 1: "Social media has destroyed real connection. Everyone's on phones instead of talking."

Participant 2: "But my girlfriend lives in Spain. Without technology, we couldn't maintain our relationship."

Participant 3: "Both are true. Technology enables some connections while replacing others."

Participant 4: "I think connection has changed. My closest friends are in a group chat. Different from face-to-face, but real."

Participant 1: "But research shows teenagers are lonelier, depression and anxiety increased."

Participant 2: "Social comparison through Instagram definitely increases anxiety. That's platform design being harmful, not technology itself."

Participant 3: "So there's a difference between technology and how social media platforms are designed for maximum engagement?"

Participant 4: "Exactly. A messaging app for connection is different from TikTok designed to be addictive."

[Discussion continues synthesizing: technology itself isn't inherently bad, platform design matters enormously, individual intention matters, regulation and education needed]`,
  teacherNotes: `Facilitate balanced participation. Note if someone dominates or stays quiet. Assess evidence use, quality of listening, whether discussion moves toward understanding complexity rather than staying binary.`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
KNOWLEDGE: Understands social media and mental health issues
LISTENING: References others' points, builds on ideas
CONTRIBUTION: Regular, substantive, raises new angles
EVIDENCE: Specific examples, credible sources
PERSPECTIVE: Acknowledges validity of different views
Score out of 80.`
};

const aqaTask3: SpokenLanguageTask = {
  id: 'aqa-003',
  title: 'Role-Play: Job Interview for Marketing Manager Position',
  board: 'AQA',
  taskType: 'role-play',
  topic: 'Professional communication, interviews, workplace scenarios',
  duration: '5-7 minutes',
  preparationGuide: `Candidate: research company, develop realistic profile with STAR method examples, practice behavioral questions. Interviewer: develop thoughtful questions assessing competencies, create evaluation rubric.`,
  assessmentCriteria: [
    'Professional demeanor: Appropriate dress, body language, etiquette',
    'Communication: Articulate, grammatically correct responses',
    'Relevance: Answers directly address questions with specific examples',
    'Listening: Demonstrates understanding and responds appropriately',
    'Confidence: Handles questions calmly without excessive hesitation'
  ],
  modelScript: `INTERVIEWER: "Good morning. Tell me about yourself and why you're interested in this marketing manager role."

CANDIDATE: "I've spent five years in digital marketing as Senior Marketing Executive at Bright Digital. I managed campaigns across multiple channels, led a team of three, and drove 35% increase in customer acquisition. I'm attracted to this role because I admire your sustainable marketing approach and I'm excited by the challenge of scaling your digital presence into emerging markets while maintaining brand integrity."

INTERVIEWER: "Impressive results. Can you give me a specific example of a successful campaign?"

CANDIDATE: "Last year, I launched a social media campaign targeting millennial women interested in wellness. Rather than traditional advertising, we partnered with micro-influencers who genuinely used our products. We provided creative freedom while establishing brand guidelines. The result was 150,000 new followers and 28% conversion rate—well above the 3-5% industry benchmark. The key was authenticity."

INTERVIEWER: "How do you use analytics to inform decision-making?"

CANDIDATE: "Data is fundamental. I track KPIs—cost per acquisition, customer lifetime value, engagement rates. But I'm careful not to become paralyzed by data. I look for patterns, test hypotheses. When we saw drop-off in the customer journey, I analyzed through user testing and surveys, then A/B tested solutions. Data helps me ask better questions."

INTERVIEWER: "Tell me about a time you faced failure."

CANDIDATE: "Two years ago, we invested heavily in a video campaign. But when we tested it, engagement was weak. Rather than launch anyway, we pulled back, analyzed why—tone was too formal—and recreated it more conversationally. It delayed launch three weeks but ultimately performed 40% better. The lesson: fail quickly and pivot rather than commit fully to a flawed direction."`,
  teacherNotes: `Assess candidate preparation depth, specific examples, confidence, and thinking on their feet. Assess interviewer on question quality and eliciting meaningful responses. Look for natural interaction, realistic interview feel.`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
PROFESSIONALISM: Body language, etiquette, courtesy
COMMUNICATION: Clarity, grammar, vocabulary, articulation
CONTENT: Specific examples with evidence, relevant answers
LISTENING: Understanding, responsiveness to interviewer
CONFIDENCE: Composure, handling without excessive hesitation
Score out of 80.`
};

const aqaTask4: SpokenLanguageTask = {
  id: 'aqa-004',
  title: 'Persuasive Presentation: Redesigning School Uniform Policy',
  board: 'AQA',
  taskType: 'presentation',
  topic: 'School policy, student autonomy, inclusive dress codes',
  duration: '4-5 minutes',
  preparationGuide: `Research school uniform policies, student satisfaction surveys, schools with flexible policies. Interview students about concerns. Find statistics on mental health and dress codes. Develop specific, feasible proposal.`,
  assessmentCriteria: [
    'Problem identification: Articulates specific issues with current policy',
    'Argument structure: Ideas flow coherently with clear progression',
    'Evidence: Uses student feedback and research to support claims',
    'Tone: Balances passion with respect; not accusatory',
    'Solution: Proposes feasible implementation with realistic timeline'
  ],
  modelScript: `Thank you for taking time to hear this. I'm representing students who want to discuss our uniform policy.

If you were told exactly what to wear every day—down to the color of your socks—how would that affect your sense of self? That's the reality for our students during exactly the time they're figuring out who they are.

I surveyed 180 students. 76% reported uniform restrictions negatively affected their confidence. 63% felt anxious worrying about infractions.

I understand why uniform policies exist—cohesion, equality. But we can achieve those goals while respecting student autonomy.

Hixton Academy in Essex implemented a choice-based uniform system. Students select from an approved color palette—navy, grey, or black—across approved garment types. They maintained blazer requirements but allowed style variation.

The results: zero increase in discipline issues, improved student engagement scores, higher parental satisfaction.

Here's what I'm proposing: maintain uniform cohesion but introduce choice. Students select from approved colors across approved garments. This maintains unity—students are still recognizable as belonging to this school. It reduces socioeconomic visibility. But it respects growing autonomy at exactly the age when that's developmentally crucial.

Implementation is straightforward: communicate policy, provide purchasing window, establish clear guidelines. The cost to the school? Minimal. The cost to families? Potentially lower due to more uniform suppliers and competition.

This isn't eliminating uniform. It's uniform policy that respects student maturity.

I'm asking that you consider piloting this with one year group next term. If it doesn't work, revert. But I believe you'll find it improves student wellbeing without sacrificing school values.`,
  teacherNotes: `Assess evidence quality and research depth. Is problem clearly established? Is proposal realistic? How does student handle anticipated staff skepticism? Connection to learning: persuasion, student voice, institutional change.`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
PROBLEM: Clear identification of issues, evidence-based
ARGUMENT: Logical structure, coherent progression
EVIDENCE: Student feedback, research, specific examples
TONE: Respectful while passionate, balanced
PROPOSAL: Specific, feasible, realistic timeline
Score out of 80.`
};

// EDEXCEL TASKS (4 total)
const edexcelTask1: SpokenLanguageTask = {
  id: 'edexcel-001',
  title: 'Individual Presentation: The Future of Remote Work',
  board: 'Edexcel',
  taskType: 'presentation',
  topic: 'Work trends, technology, social change',
  duration: '3-4 minutes',
  preparationGuide: `Research post-pandemic remote work statistics, interview workers about experiences. Analyze advantages and disadvantages. Create visual aids showing work arrangement preferences and future predictions. Focus on nuanced analysis.`,
  assessmentCriteria: [
    'Relevance: Information is current and relevant',
    'Evidence: Uses research, data, and interviews effectively',
    'Structure: Ideas flow logically with clear progression',
    'Analysis: Goes beyond surface observations',
    'Engagement: Uses language and delivery to maintain interest'
  ],
  modelScript: `Before 2020, remote work was a perk. Now it's a question: is it the future? I'd argue it's in between.

In 2019, 5% of workers globally worked from home full-time. By 2024, that jumped to 35%. Now we're stabilizing at 26% permanent remote work with 45% hybrid arrangements.

Benefits are obvious. You save 40 minutes daily commuting—130 hours annually. Environmentally, if 50% of office workers worked remotely half-time, we'd reduce carbon emissions by 54 million metric tons.

But I interviewed seven workers. Two thrived remotely; five struggled. One junior architect said, "I learned my job sitting next to seniors. I'm missing crucial informal mentoring."

Research shows: remote work increases individual productivity 12-15% but slightly decreases collaboration. The impact isn't universal. Parents benefit from flexibility. Early-career workers suffer. Introverts thrive; extroverts struggle.

The likely future? Hybrid. Three days office, two remote. This solves for most concerns—focused work time, collaborative time preserved, mentorship available, yet significant flexibility.

The challenge: hybrid requires intentional management. Clear collaboration days, communication norms, expectations.

So my conclusion: remote work isn't the future; it's a standard option. The real question is what hybrid model serves our work best. Organizations that figure that out win the talent war.`,
  teacherNotes: `Assess current, relevant content with credible research. Look for interview integration, multiple perspectives, sophisticated analysis. Can student discuss this with genuine engagement?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
CONTENT: Current, relevant, specific evidence
ANALYSIS: Beyond obvious observations, acknowledges complexity
STRUCTURE: Clear opening, logical progression, strong conclusion
DELIVERY: Clear articulation, varied pace, confident engagement
EVIDENCE: Specific data, credible sources, interview integration
Score out of 80.`
};

const edexcelTask2: SpokenLanguageTask = {
  id: 'edexcel-002',
  title: 'Group Discussion: Artificial Intelligence and Employment',
  board: 'Edexcel',
  taskType: 'discussion',
  topic: 'AI, job displacement, economic change, technological ethics',
  duration: '10-12 minutes (3-4 participants)',
  preparationGuide: `Research job displacement vs. job creation through AI. Develop positions: AI causes harm, creates opportunity, depends on policy response. Gather statistics, affected industries, retraining programs.`,
  assessmentCriteria: [
    'Knowledge: Demonstrates understanding of AI and employment issues',
    'Evidence: Uses specific, credible data and examples',
    'Listening: Responds thoughtfully to others\' points',
    'Balance: Acknowledges validity of different viewpoints',
    'Thinking: Explores complexity rather than oversimplifying'
  ],
  modelScript: `Participant 1: "AI will significantly displace workers. McKinsey estimates 400 million workers might be displaced by 2030."

Participant 2: "But that same research shows 375 million new jobs could be created. Not net job loss; job displacement and transition."

Participant 3: "You're both right about displacement, but the distribution problem matters. Jobs lost are in specific sectors—transportation, data entry—affecting specific regions and demographics."

Participant 4: "So technology isn't good or bad. What matters is how we respond. Do we invest in retraining? Support affected workers? Ensure benefits are shared broadly?"

[Discussion progresses through evidence-based exploration of policy solutions, investment needs, and practical implications]`,
  teacherNotes: `Assess nuanced thinking avoiding binary positions. Look for evidence use, listening skills, and synthesis of different perspectives. Can students move from "AI good/bad" to understanding policy matters?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
KNOWLEDGE: Understands AI and employment
LISTENING: References others' points, builds on ideas
CONTRIBUTION: Regular, substantive, new angles
EVIDENCE: Specific examples, credible sources
CRITICAL THINKING: Acknowledges complexity, avoids binary thinking
Score out of 80.`
};

const edexcelTask3: SpokenLanguageTask = {
  id: 'edexcel-003',
  title: 'Role-Play: Community Council Meeting on Local Park Development',
  board: 'Edexcel',
  taskType: 'role-play',
  topic: 'Community engagement, civic participation, negotiation',
  duration: '8-10 minutes',
  preparationGuide: `Prepare different community roles: council representative, parent, teenager, elderly resident, business owner. Develop realistic perspectives with specific concerns. Council rep facilitates discussion toward consensus.`,
  assessmentCriteria: [
    'Character consistency: Maintains realistic role throughout',
    'Specificity: Proposes concrete ideas, not vague wishes',
    'Evidence: Supports positions with relevant information',
    'Listening: Responds to others\' points rather than just advocating',
    'Engagement: Seeks common ground and workable solutions'
  ],
  modelScript: `COUNCIL REP: "We have £200,000 for park renovation. We want community input on priorities."

PARENT: "Safety is my biggest concern. The playground equipment is dangerous. I've stopped bringing my children."

ELDERLY RESIDENT: "I agree on safety. Please consider accessibility. I can barely walk the path. There's no resting seating and no lighting—I won't come after 4pm."

TEENAGER: "The park is empty. What would make it somewhere young people want to be? Better lighting, shelter, gathering space?"

BUSINESS OWNER: "I run the café next to the park. Better lighting, programming events, making it a destination would help. Also, overgrown shrubs create blind spots."

[Discussion continues with council rep synthesizing priorities and negotiating allocation]

COUNCIL REP: "So we're hearing: immediate equipment safety, accessibility improvements, lighting, programming and gathering spaces. I propose: £65,000 for equipment, £35,000 for path widening, £40,000 for lighting, £30,000 for shelter, £30,000 contingency. Fair?"`,
  teacherNotes: `Assess whether participants listen and seek solutions or just advocate. Does council rep synthesize and move toward decisions? Is respect for different needs evident?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
CHARACTER: Maintains realistic role, understands constraints
SPECIFICITY: Concrete suggestions, not vague ideas
EVIDENCE: Supports position with reasoning or information
LISTENING: Responds to others' points, shows understanding
ENGAGEMENT: Seeks solutions, willing to compromise, collaborative
Score out of 80.`
};

const edexcelTask4: SpokenLanguageTask = {
  id: 'edexcel-004',
  title: 'Persuasive Presentation: Supporting a Local Charity Initiative',
  board: 'Edexcel',
  taskType: 'presentation',
  topic: 'Charitable work, community impact, fundraising',
  duration: '4-5 minutes',
  preparationGuide: `Research real local charity, their mission and impact. Interview staff or people served. Gather financial data, outcomes achieved, specific funding needs. Develop persuasive case combining logic and emotion.`,
  assessmentCriteria: [
    'Knowledge: Demonstrates genuine understanding of charity\'s work',
    'Problem framing: Articulates need or problem convincingly',
    'Strategy: Combines emotional appeal with logical evidence',
    'Evidence: Uses real data and stories appropriately',
    'Ask: Clear about what support is needed'
  ],
  modelScript: `I want to tell you about the Riverside Youth Center. They work with young people aged 11-19 facing significant challenges. Last year, they worked with 240 young people. Of those, 89% improved academically, 76% developed measurable social skills.

Marcus came to Riverside at age 13, having been excluded from school. The center connected him with tutoring, mentoring, a sense of belonging. He's now 17, back in school, predicted to pass GCSEs.

Research shows youth mentoring reduces delinquency by 30%, costs £1,500 per young person annually. Riverside is facing crisis: funding cut 40% this year. They can continue serving 120 young people. That means 120 others don't get support.

I'm asking: they need £15,000 to maintain current programming. That's £125 per young person for annual access to tutoring, mentoring, belonging.

Some will donate. Others might volunteer. But whatever you do, recognize that a young person mentored today might never need crisis intervention tomorrow.

The choice is yours, but the need is real.`,
  teacherNotes: `Assess authenticity and genuine connection to charity. Look for respect in telling others' stories, evidence quality, appropriate emotional appeal without exploitation. Is this performative or genuine advocacy?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
KNOWLEDGE: Genuine understanding of charity's work
PROBLEM: Clearly identifies need, uses data appropriately
STRATEGY: Combines emotion and logic, respectful storytelling
EVIDENCE: Real data, credible sources, appropriate story use
ASK: Clear about what support is needed, outcomes explained
Score out of 80.`
};

// OCR TASKS (4 total)
const ocrTask1: SpokenLanguageTask = {
  id: 'ocr-001',
  title: 'Individual Presentation: The Evolution of Fashion and Identity',
  board: 'OCR',
  taskType: 'presentation',
  topic: 'Fashion history, cultural identity, self-expression',
  duration: '4-6 minutes',
  preparationGuide: `Trace fashion evolution showing how it communicates identity. Research fashion as cultural marker. Examine fast fashion impact. Interview people about fashion choices. Develop thesis connecting fashion to identity and culture.`,
  assessmentCriteria: [
    'Thesis clarity: Central argument is clear and sustained',
    'Historical grounding: Shows understanding of fashion evolution and context',
    'Evidence integration: Uses images, research, interviews effectively',
    'Analysis: Explores deeper significance, not just "fashion is fun"',
    'Engagement: Shows genuine interest and insight'
  ],
  modelScript: `When I was eleven, my mum bought me sensible shoes. I hated them. So I bought Converse. The moment I put them on, something shifted. I wasn't "sensible." I felt like myself.

That's what I want to discuss: fashion as identity communication.

Fashion isn't frivolous. It's how we tell the world who we are.

Historically, the 1950s enforced rigid gender roles through fashion: corseted women, identical men. The 1960s miniskirt was rebellion—young people rejecting conservative fashion. Fashion became protest.

The 1970s punk movement: ripped clothes, safety pins, deliberately shocking combinations. This wasn't accidental. It was consciously rejecting mainstream consumer culture.

Now fashion is incredibly complex. Hip-hop culture used fashion to communicate confidence and status. Grime music's aesthetic emerged from London's working-class neighborhoods.

Fashion also marks class. You can estimate someone's socioeconomic status from what they wear.

Contemporary issue: fast fashion. Companies produce thousands of styles weekly, each worn briefly, discarded. Environmentally catastrophic—10% of global carbon emissions. But it's democratizing. Thirty years ago, only wealthy people could afford frequent wardrobe changes.

Trade-off: fast fashion erases meaning. When everyone wears identical outfits from same retailers, you lose identity differentiation that made fashion powerful.

But fashion reclaims meaning through sustainability and activism. People choosing vintage make statements about consumerism. People wearing traditional clothing reclaim cultural identity. People choosing androgynous or non-binary fashion express identity beyond binary gender.

Conclusion: Fashion has always been identity work. Currently, fast fashion erodes that function. But thoughtful approaches—sustainable, culturally aware, identity-conscious—reclaim fashion's power.

What we wear is never purely personal. It's cultural, political, identity.`,
  teacherNotes: `Assess analytical depth beyond personal opinion. Look for cultural awareness without stereotyping, historical understanding, genuine connection between examples and thesis. Can student discuss why fashion matters at societal level?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
THESIS: Clear central argument, sustained throughout, analytical
HISTORICAL: Accurate examples, proper contextualization, connection to present
EVIDENCE: Specific examples, research demonstrated, well-chosen support
DELIVERY: Clear articulation, confident engagement, genuine interest
ANALYSIS: Explores significance, acknowledges complexity, thoughtful conclusions
Score out of 80.`
};

const ocrTask2: SpokenLanguageTask = {
  id: 'ocr-002',
  title: 'Group Discussion: Digital Privacy and Data Rights',
  board: 'OCR',
  taskType: 'discussion',
  topic: 'Privacy, data protection, government surveillance, corporate data use',
  duration: '10-12 minutes (4 participants)',
  preparationGuide: `Research GDPR, data breaches, surveillance, privacy concerns. Develop positions: privacy is fundamental right being violated, data use benefits outweigh risks, regulation is solution, power dynamics matter most.`,
  assessmentCriteria: [
    'Knowledge: Understands privacy issues, regulation, and current cases',
    'Engagement: Contributes substantively and regularly',
    'Listening: Responds to others\' actual points',
    'Evidence: Supports claims with specific cases or data',
    'Nuance: Acknowledges complexity; avoids simplistic positions'
  ],
  modelScript: `Participant 1: "Privacy is lost. Every app wants access to my location, contacts, camera. Google knows my search history, location. Facebook knows my interests."

Participant 2: "But you've traded it. Google services are free because advertising finances them. You're paying with attention and data."

Participant 3: "But is it actually conscious? Do people understand what they're consenting to? Read the terms of service?"

Participant 4: "No, and that's the actual problem. It's the opacity. If Facebook clearly stated what they track, people could make informed choices."

Participant 1: "But there's a power imbalance. A teenager wanting to use social media doesn't really have a choice. The social cost is too high."

[Discussion continues exploring government surveillance, regulation, GDPR, power dynamics, and solutions]`,
  teacherNotes: `Assess cultural sensitivity on power dynamics and marginalization. Look for nuanced thinking avoiding binary "private vs. public." Does discussion recognize different populations are affected differently?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
KNOWLEDGE: Understands privacy issues, regulation, surveillance
LISTENING: References others' points, builds on ideas, asks questions
CONTRIBUTION: Regular, substantive, raises new angles
EVIDENCE: Specific examples, credible sources, logical explanations
CULTURAL: Respects multiple perspectives, recognizes power dynamics, avoids stereotyping
Score out of 80.`
};

const ocrTask3: SpokenLanguageTask = {
  id: 'ocr-003',
  title: 'Role-Play: Educational Counselor Meeting with Student',
  board: 'OCR',
  taskType: 'role-play',
  topic: 'Educational guidance, career planning, wellbeing support',
  duration: '6-8 minutes',
  preparationGuide: `Student: develop realistic struggling scenario (subject difficulty, mental health, social issues). Counselor: prepare open-ended questions exploring concerns, listen actively, validate, support problem-solving.`,
  assessmentCriteria: [
    'Student authenticity: Portrays realistic concerns and emotions',
    'Counselor listening: Genuinely hears student rather than following script',
    'Questions: Asks to understand, not interrogate',
    'Validation: Student\'s concerns are acknowledged as legitimate',
    'Support: Discussion moves toward concrete next steps'
  ],
  modelScript: `COUNSELOR: "Hi Sarah, I want to hear from you what's going on. What brought you in today?"

STUDENT: "I don't know if I want to come back next term. I'm really struggling."

COUNSELOR: "That sounds difficult. Can you tell me what you're struggling with most?"

STUDENT: "Math. I hate it. I don't understand. The teacher goes too fast and everyone else gets it."

COUNSELOR: "So math is feeling overwhelming. How long has this been going on?"

STUDENT: "Since Year 9, but worse this year. If I drop it, I won't have options. If I stay, I'll fail GCSE."

COUNSELOR: "You're caught between two worries. Beyond math, how are things generally?"

STUDENT: "Not great. My parents put pressure on me. They compare me to my sister. Home feels stressful. Some days I don't want to come to school."

COUNSELOR: "Academic pressure plus family pressure. Are there other things affecting you?"

STUDENT: "My friends and I had a falling out. I'm at lunch by myself. That makes school harder."

COUNSELOR: "You're navigating friend situation alongside academic struggles. When you don't want to come to school, how often is that?"

STUDENT: "Most mornings. I get anxiety. Sometimes I tell my mum I'm sick."

COUNSELOR: "That's significant. What specifically makes you most anxious?"

STUDENT: "Being alone. Feeling like I'm failing. Worrying my parents will be disappointed."

COUNSELOR: "Three interconnected things: loneliness, academic struggle, fear of disappointing family. If one eased, would school feel more manageable?"

STUDENT: "Maybe. Friends would help. Math being easier would help. I don't know about the parent thing."

COUNSELOR: "Let's work on these. The friend situation—can it be repaired or can you build new connections?"

STUDENT: "We grew apart. They're into parties; I'm introverted. There's a girl in English class I like."

COUNSELOR: "That's practical. We can work on that. What about math?"

STUDENT: "I'd like to try tutoring. The teacher's not bad, but their way doesn't match how I learn. I learn better step-by-step."

COUNSELOR: "That's self-aware. School offers tutoring. We could arrange that. Would talking to the teacher about your learning style feel possible?"

STUDENT: "Maybe? That feels scary."

COUNSELOR: "We can help you prepare. Regarding your family: has anyone heard how much you're struggling?"

STUDENT: "My mum knows I find math hard. I don't think she knows how bad my anxiety is."

COUNSELOR: "How would she respond if she knew?"

STUDENT: "Probably want to help. She cares a lot about success but she's not bad."

COUNSELOR: "So there's possibility there for support. Let me propose next steps..."`,
  teacherNotes: `Assess counselor on genuine listening vs. following script. Does student feel heard? Assess student on authenticity—is struggle realistic? Do they open up gradually? Both should feel like genuine human interaction.`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
AUTHENTICITY: Realistic struggle, genuine emotions, realistic progression
LISTENING: Asks to understand, references what was said, validates concerns
PRACTICAL: Identifies problems, supports exploration of solutions, collaborative
SAFETY: Non-judgmental space, genuine care, validates experience
INTERACTION: Natural conversation, not scripted, genuine emotion, moved toward understanding
Score out of 80.`
};

const ocrTask4: SpokenLanguageTask = {
  id: 'ocr-004',
  title: 'Persuasive Presentation: Mental Health Support in Schools',
  board: 'OCR',
  taskType: 'presentation',
  topic: 'Mental health, school support systems, student wellbeing',
  duration: '5-6 minutes',
  preparationGuide: `Research student mental health statistics, impact on academic performance, school counselor ratios. Find evidence from schools with enhanced support. Develop cost-benefit analysis. Balance emotion with evidence.`,
  assessmentCriteria: [
    'Problem articulation: Clearly establishes need for mental health support',
    'Evidence quality: Uses statistics and case studies credibly',
    'Understanding: Addresses current system limitations',
    'Strategy: Combines logic, emotion, and values appeal',
    'Proposal: Clear about what changes are needed'
  ],
  modelScript: `One in four students in this school will experience a diagnosable mental health condition this year. One in four.

Let me tell you about someone: they spent two years struggling with anxiety and depression. They came to school every day even though being here was terrifying. Anxiety made focusing impossible. Grades dropped. They fell behind. Finally, a counselor provided real support. That support changed everything.

But they only got it after attempting suicide and spending time in psychiatric hospital. Support came as crisis management, not prevention.

That's what I want to discuss: the mental health crisis in our schools, and why current support levels are inadequate.

Evidence: The NHS reports 16% of young people have diagnosable mental health conditions. That's higher than ever. Post-pandemic: anxiety, depression, self-harm increased. Samaritans report suicide is leading cause of teenage death.

Meanwhile, counselor-to-student ratios are shocking. Recommended: one per 250. We have one per 800. Many students are on waiting lists.

Impact on education: students struggling mentally can't learn effectively. Anxiety and depression impair concentration, memory, motivation. So inadequate mental health support directly undermines academic achievement.

But we have a duty of care. If we know students are struggling and we could help, but we don't, we're failing in a fundamental responsibility.

Cost-benefit analysis: a meta-analysis found that for every dollar invested in mental health support, schools see three dollars in benefits through reduced emergency services, decreased hospitalizations, improved academic outcomes. It's not an expense; it's an investment.

I'm proposing three things: increase counselor staffing to one per 400 students (one additional counselor). Provide mental health training to form tutors. Implement preventative mental health curriculum.

Total cost: approximately £45,000 first year. Estimated ROI from reduced crisis interventions and improved outcomes: £120,000.

So I'm asking: invest in what works. Not because it's nice, but because it's necessary, cost-effective, and directly supports student success.`,
  teacherNotes: `Assess whether student demonstrates genuine understanding of mental health complexity. Look for appropriate tone (serious, not dramatic). Is case study respectful? Evidence credible? Can student discuss this nuance without oversimplifying?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
PROBLEM: Clearly establishes need, uses statistics, explains impact
EVIDENCE: Uses credible sources, appropriate data, case study respectful
UNDERSTANDING: Addresses system limitations, recognizes complexity
STRATEGY: Combines logic and emotion appropriately
PROPOSAL: Specific changes, realistic costs, expected outcomes
Score out of 80.`
};

// WJEC TASKS (4 total)
const wjecTask1: SpokenLanguageTask = {
  id: 'wjec-001',
  title: 'Individual Presentation: The Power of Storytelling in Culture',
  board: 'WJEC',
  taskType: 'presentation',
  topic: 'Literature, culture, oral traditions, identity',
  duration: '5-7 minutes',
  preparationGuide: `Research storytelling across cultures, neuroscience of storytelling, how stories preserve cultural identity. Include oral tradition examples. Develop thesis about storytelling's fundamental importance. Personal reflection included.`,
  assessmentCriteria: [
    'Thesis clarity: Central argument about storytelling is clear and sustained',
    'Cultural awareness: Respectfully engages with traditions beyond own experience',
    'Evidence: Uses examples, research, and personal reflection appropriately',
    'Analysis: Explores why storytelling matters, not just that it does',
    'Engagement: Shows genuine interest and insight'
  ],
  modelScript: `My grandmother told me a Welsh folktale when I was five about a selkie. I don't remember all details, but I remember the feeling: magic, longing, bittersweet beauty. That story became part of me.

She was doing something profound: transmitting culture, encoding values in narrative form.

I want to discuss storytelling as fundamental to being human.

Neuroscience shows: when you read facts, language centers activate. When you read a story, motor cortex, sensory cortex, emotion centers activate. Stories simulate experience.

Evolutionally: our ancestors survived through storytelling. Sharing survival knowledge through narrative was far more memorable than abstract instruction. Stories encoded knowledge in memorable form.

Across cultures, storytelling served critical functions. African griots were historians, genealogists, moral guides. They preserved entire histories through memorized narrative. Aboriginal songlines encode geography, history, spiritual knowledge poetically.

But storytelling does something beyond information transfer: it preserves cultural identity. When culture's stories are suppressed, something fundamental is lost. During colonization, indigenous storytelling was actively discouraged. Yet communities maintained oral traditions anyway. Why? Because stories carry meaning facts alone can't.

We think storytelling is past tense. But Netflix exists because we crave narrative. Podcasts explode because we want stories. Social media is largely storytelling—people narrating their lives.

Contemporary: storytelling drives social change. #MeToo wasn't driven by statistics. It was driven by women sharing personal stories. Stories made abstract injustice human.

Conclusion: Storytelling isn't a relic. It's how humans encode meaning, preserve identity, drive change, understand what it means to be human.

My grandmother's story connected me to centuries of Welsh storytelling tradition. That's the power of story.`,
  teacherNotes: `Assess thesis clarity and cultural sensitivity. Look for respectful engagement with non-Western traditions, depth beyond "stories are important," integration of personal reflection without self-absorption. Can student discuss storytelling as more than personal preference?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
THESIS: Clear central argument, maintained throughout, goes beyond surface
CULTURAL: Respectful, demonstrates understanding, avoids stereotyping
EVIDENCE: Specific examples, credible research, well-chosen support
DELIVERY: Clear articulation, confident engagement, genuine interest
DEPTH: Explains significance, connects examples to thesis, insightful conclusions
Score out of 80.`
};

const wjecTask2: SpokenLanguageTask = {
  id: 'wjec-002',
  title: 'Group Discussion: The Role of Tradition in Modern Society',
  board: 'WJEC',
  taskType: 'discussion',
  topic: 'Tradition, modernization, cultural change, progress',
  duration: '10-12 minutes (4 participants)',
  preparationGuide: `Research traditions' value and modernization impacts. Develop positions: preserve traditions, embrace modernization, some traditions evolve while others fade, balance needed. Consider cultural sensitivity and power dynamics.`,
  assessmentCriteria: [
    'Knowledge: Understands tradition, modernization, and their tensions',
    'Nuance: Avoids binary "preserve all" or "discard all" positions',
    'Evidence: Grounds discussion in specific examples and research',
    'Listening: Responds to others\' points; builds on ideas',
    'Sensitivity: Recognizes tradition has different weight in different communities'
  ],
  modelScript: `Participant 1: "We're losing traditions too quickly. Everything is becoming globalized into sameness."

Participant 2: "But some traditions were genuinely harmful. Foot-binding in China disabled women. Child marriage, honor killings—these are traditions causing real harm."

Participant 3: "Right, and that's an important distinction. Not all traditions are equal. Some have real value for identity. Others are based in genuine harm."

Participant 4: "But who gets to decide? Colonizers told indigenous peoples their traditions were primitive and needed abandoning. That was cultural destruction."

[Discussion continues exploring internal vs. external change, power dynamics, protection of minority traditions, recognition of individual choice]`,
  teacherNotes: `Assess cultural sensitivity deeply. Does discussion avoid Western-centric assumptions? Are non-Western traditions discussed respectfully? Do participants recognize power dynamics and colonial history?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
KNOWLEDGE: Understands tradition, modernization, cultural change
LISTENING: References others' points, builds on ideas, asks clarifying questions
CONTRIBUTION: Regular, substantive, raises new angles
EVIDENCE: Specific examples, credible sources, logical explanations
CULTURAL: Respectful of perspectives, avoids stereotyping, recognizes power dynamics
Score out of 80.`
};

const wjecTask3: SpokenLanguageTask = {
  id: 'wjec-003',
  title: 'Role-Play: Book Club Discussion Leadership',
  board: 'WJEC',
  taskType: 'role-play',
  topic: 'Literary analysis, discussion facilitation, collaborative learning',
  duration: '10-12 minutes',
  preparationGuide: `Leader: read novel deeply, prepare open-ended questions, identify major themes. Participants: read novel, note responses, prepare points with textual evidence. Plan to discuss multiple interpretations respectfully.`,
  assessmentCriteria: [
    'Leader: Asks questions that deepen understanding, not yes/no answers',
    'Leader: Ensures balanced participation, draws in quieter members',
    'Participants: Support interpretations with textual evidence',
    'Participants: Engage with different interpretations genuinely',
    'Overall: Discussion moves deeper into text rather than staying surface'
  ],
  modelScript: `LEADER: "Welcome to book club. Before we dig in, I want to hear what stood out for you. What was your initial reaction?"

EMILY: "I loved it. I found the main character so compelling. The way she navigated impossible situations."

MARCUS: "I had a different read. I thought she was self-serving. Her choices benefited her but hurt people."

LEADER: "Interesting—different interpretations. Marcus, can you point to a specific moment?"

MARCUS: "Around page 200, when she betrayed her friend to protect herself."

EMILY: "But she tried to stop it. She warned her friend."

LEADER: "These are both valid observations. How do we understand her motivation? What was she thinking?"

RACHEL: "The text says she was terrified. She made a bad choice under pressure, not a calculated betrayal."

MARCUS: "But she had time to fix it. That suggests self-interest."

LEADER: "So one reading emphasizes her fear and panic; another emphasizes her choice not to repair. What does the author show internally?"

JAMES: "The author deliberately creates ambiguity. The whole middle section is unreliable narrator. We're meant to struggle with whether she's sympathetic or complicit."

LEADER: "So ambiguity is deliberate? Does the novel elsewhere show the author creating ambiguity?"

[Discussion deepens into thematic exploration: what does it mean that we understand her actions even though they were wrong?]`,
  teacherNotes: `Assess leader facilitation: do questions deepen understanding? Do they draw in quieter voices? Assess participants on textual grounding and openness. Does group develop understanding while respecting disagreement?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
QUESTIONS: Open-ended, thought-provoking, build on responses
FACILITATION: Balanced participation, draws in quieter members
LISTENING: References specific points, helps see connections
TEXT ENGAGEMENT: Supports ideas with textual evidence
DISCUSSION: Contributes meaningfully, respects different readings
DEPTH: Goes deeper into text, multiple perspectives valued, evidence-based
Score out of 80.`
};

const wjecTask4: SpokenLanguageTask = {
  id: 'wjec-004',
  title: 'Persuasive Presentation: Literature Should Be Central to Education',
  board: 'WJEC',
  taskType: 'presentation',
  topic: 'Education, humanities, literary value, curriculum priorities',
  duration: '5-6 minutes',
  preparationGuide: `Research educational funding trends favoring STEM, declining English enrollment. Find evidence of literature's impact on thinking, empathy, civic engagement. Research utilitarian arguments and address them thoughtfully.`,
  assessmentCriteria: [
    'Problem articulation: Establishes why literature\'s value is questioned',
    'Reasoning: Explains what literature teaches beyond job skills',
    'Evidence: Uses research, examples, personal reflection appropriately',
    'Counterargument: Addresses utilitarian objections thoughtfully',
    'Call to action: Clear about supporting literature in curriculum'
  ],
  modelScript: `I want to start with a question: why do you read? Not for a test or job, but why?

I think: because it's meaningful. Because it shows us something about ourselves or the world.

Yet in education, we increasingly justify literature's value in economic terms. What job will studying Macbeth get you? How does reading poetry prepare for employment?

I want to argue this framing is incomplete. Literature isn't valuable only if it leads directly to employment. Literature is valuable because it's how humans make sense of experience.

Brain imaging shows reading narrative fiction shapes how our brains process information. Reading involves simulation: your brain imagines scenes, considers characters' motivations. That's active cognitive work.

Literature develops critical thinking in concrete ways. When you analyze a poem, you're learning to examine language carefully, consider multiple interpretations, support claims with evidence. That exact thinking—detailed analysis, evidence-based argument—is valuable in virtually every field.

Research shows reading literary fiction increases empathy. A Carnegie Mellon study found literary fiction readers performed better on tests measuring understanding of others' mental states.

Why does that matter? Because democracy requires empathy. It requires citizens who understand people different from themselves, imagine experiences beyond their own, recognize common humanity across difference. That's literally what literature does.

Literature preserves human experience across centuries and cultures. When you read Toni Morrison, you're accessing specific African American experience. When you read Adichie, you're understanding Nigerian girlhood.

Now, I'll address the practical objection: "Literature doesn't lead to jobs." Narrowly true. But creative industries—publishing, film, media, games—are massive economic drivers. They require people who understand narrative, character, language.

More broadly, people educated with strong humanities become better leaders, more creative thinkers, better at navigating complexity. That has economic value.

But I want to push back on the premise. We don't require everything be economically justified. We fund sports even though most won't become athletes. We value music even though few become musicians. Why? Because education is about developing as a full human, not just as a future employee.

Literature should be valued the same way. Not because it guarantees a job, but because it teaches deep thinking, understanding of others, meaning-making.

So I'm asking: when schools face budget cuts, don't cut literature. Recognize that an educated person—prepared for citizenship, meaningful work, genuine thinking—is someone who reads, thinks critically about meaning, understands diverse experiences.

That's not soft. That's essential.`,
  teacherNotes: `Assess argument sophistication and genuine engagement. Look for understanding of why the question is being asked, serious engagement with utilitarian objections, recognition that humanities are under real pressure. Is this performative or genuine advocacy?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
PROBLEM: Clearly identifies why literature's value is questioned
ARGUMENT: Logical, developed, avoids simplistic framing
EVIDENCE: Credible research, specific examples, personal reflection
COUNTERARGUMENT: Addresses practical objections thoughtfully
CALL TO ACTION: Clear about supporting literature, meaningful closing
Score out of 80.`
};

// IGCSE TASKS (4 total)
const igcseTask1: SpokenLanguageTask = {
  id: 'igcse-001',
  title: 'Individual Presentation: Globalization and Cultural Identity',
  board: 'IGCSE',
  taskType: 'presentation',
  topic: 'Globalization, culture, identity, interconnection',
  duration: '4-6 minutes',
  preparationGuide: `Research globalization mechanisms and impacts across regions. Analyze both cultural homogenization and cultural blending. Use global examples (K-pop, Afrobeat, fusion cuisine). Develop nuanced analysis avoiding simple "good vs. bad."`,
  assessmentCriteria: [
    'Analysis depth: Goes beyond simple "good vs. bad" binary',
    'Awareness: Uses examples from multiple regions, not just Western perspective',
    'Evidence: Grounds analysis in specific examples and data',
    'Nuance: Recognizes complexity, contradictions, individual agency',
    'Connection: Shows how globalization is relevant to listener'
  ],
  modelScript: `Three years ago, I didn't think about globalization. Then I noticed: my favorite music is Korean pop sung in Korean. My friend's family cooks Nigerian food from Instagram. My school celebrates Diwali and Eid alongside Western holidays. I wear clothes manufactured in Bangladesh. I watch Netflix shows from UK, USA, Korea, Mexico.

I'm living globalization. And it's more complicated than I'd been taught.

I initially imagined cultural homogenization—world becoming one Starbucks, all local cultures erased. That does happen: American fast food displaces local food cultures. English dominates business language.

But that's not the complete story.

Simultaneously, globalization enables creative exchange. K-pop is manufactured and distributed globally while remaining distinctly Korean. Korean artists compete globally while maintaining Korean identity. Their success increased interest in Korean language and culture.

Same with Afrobeat. Nigerian and Ghanaian musicians using global platforms reach worldwide audiences not by erasing African identity but by centering it. Burna Boy, Wizkid, Rema—globally successful while distinctly West African.

This flows both directions. Latin trap fuses Spanish rap with trap production. Japanese anime uses Western storytelling alongside distinctly Japanese aesthetics. Food demonstrates this: Thai restaurants adapt dishes to local taste; chefs travel to Bangkok studying authenticity; fusion cuisine emerges from genuine cultural interaction.

Globalization isn't just Western culture conquering the world. It's complex cultural interchange where local cultures remix, resist, and adapt.

But I acknowledge complexity. When a young person in Indonesia accesses TikTok and YouTube, they're exposed to different values and beauty standards. That's cultural influence, whether consciously chosen or not.

Economics matter too. Global supply chains create wealth at cost of workers in poorer countries. Cultural industries profit from exporting culture; smaller local industries may be displaced.

What's interesting is how individuals navigate this. My friend maintains Yoruba language and culture while speaking English fluently, watching anime, planning to study in the UK. She's synthesizing cultures, not torn between them.

But not everyone has that privilege. A farmer in rural India seeing local markets undermined by global agriculture experiences globalization differently than an urban young person accessing global culture through their phone.

Conclusion: Globalization reshapes culture in complex ways. Yes, some traditions disappear. But simultaneously, young people create hybrid identities maintaining heritage while engaging globally. Global platforms enable expression and exchange impossible otherwise.

The question isn't whether globalization stops. It won't. The question is: how preserve cultural specificity and diversity while engaging in global exchange? How ensure globalization benefits everyone, not just wealthy nations and corporations?

That's what my generation will navigate.`,
  teacherNotes: `Assess analytical nuance avoiding binary thinking. Look for multiple regional examples, recognition of power dynamics (who benefits), personal connection without overshadowing analysis. Can student explain complexity without becoming confused?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
ANALYSIS: Avoids binary positions, acknowledges complexity
AWARENESS: Examples from multiple regions, avoids Western-centric view
EVIDENCE: Specific examples, well-explained, well-integrated
ENGAGEMENT: Makes topic relevant, genuine reflection, balanced approach
DELIVERY: Ideas explained clearly, accessible language, strong opening and closing
Score out of 80.`
};

const igcseTask2: SpokenLanguageTask = {
  id: 'igcse-002',
  title: 'Group Discussion: Technology and Human Connection',
  board: 'IGCSE',
  taskType: 'discussion',
  topic: 'Technology, social media, human relationships, digital wellbeing',
  duration: '10-12 minutes (4 participants)',
  preparationGuide: `Research technology's role in relationships, social media and loneliness, but also connection enabled. Develop positions exploring both benefits and harms. Gather evidence, interviews, statistics.`,
  assessmentCriteria: [
    'Knowledge: Understands technology\'s role in relationships deeply',
    'Nuance: Acknowledges both positive and negative impacts',
    'Evidence: Grounds discussion in specific examples',
    'Listening: Responds to others\' points, builds on ideas',
    'Perspective-taking: Considers how others experience differently'
  ],
  modelScript: `Participant 1: "Technology has destroyed real connection. Everyone on phones instead of talking."

Participant 2: "But my girlfriend lives in Spain. Without technology, we couldn't maintain our relationship."

Participant 3: "Both are true. Technology enables some connections while replacing others."

Participant 4: "I think connection has changed. My closest friends are in group chat. We message constantly. Different, but real."

Participant 1: "But is messaging the same as conversation? You can't see facial expressions."

Participant 2: "Different, but not less intimate. I've had deeper conversations via messaging than face-to-face with people I see daily."

Participant 3: "So it's not technology; it's intention and openness?"

Participant 4: "Exactly. You can sit beside someone and feel disconnected. Or message someone globally and feel understood."

[Discussion continues exploring platform design, addiction, regulation, education, individual differences]`,
  teacherNotes: `Assess whether participants avoid binary thinking. Do they recognize benefits and harms coexist? Is listening evident? Can they explain complexity without becoming confused? Do they understand design and profit motives?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
KNOWLEDGE: Understands technology's role, avoids binary positions
LISTENING: References others' points, builds on ideas
CONTRIBUTION: Regular, substantive, new angles
EVIDENCE: Specific examples, credible sources
PERSPECTIVE: Considers how others experience differently, acknowledges complexity
Score out of 80.`
};

const igcseTask3: SpokenLanguageTask = {
  id: 'igcse-003',
  title: 'Role-Play: Debate on Educational Reform',
  board: 'IGCSE',
  taskType: 'role-play',
  topic: 'Education policy, curriculum, student voice, institutional change',
  duration: '10-12 minutes',
  preparationGuide: `Participants: student, teacher, parent, policy advisor. Each develops realistic perspective with constraints. Prepare evidence supporting position, anticipate counterarguments, prepare to seek common ground.`,
  assessmentCriteria: [
    'Authenticity: Portrays realistic perspective with constraints',
    'Evidence: Supports position with specific data',
    'Listening: Responds to others rather than just advocating',
    'Disagreement: Challenges ideas respectfully',
    'Problem-solving: Seeks common ground and workable solutions'
  ],
  modelScript: `MODERATOR: "The education committee is considering curriculum reform. What changes would most improve education?"

STUDENT: "Our curriculum is too focused on exams and facts. We're taught to memorize information we can Google. We're not taught critical thinking or real problem-solving. We need curriculum connecting to actual life."

TEACHER: "I understand, and I agree learning should be meaningful. But you have to understand the pressures: curriculum requirements, exams students must pass, limited class time. Adding project-based learning sounds great, but who makes time for it?"

PARENT: "I want to push back. We moved to this area for good schools because we want our son to succeed at university. That requires solid foundations in core subjects. If curriculum becomes too vague and project-based, won't students be unprepared?"

POLICY ADVISOR: "Both valid concerns. Research shows project-based learning doesn't decrease exam performance—it can improve it because students understand concepts more deeply. But the teacher's right about implementation. You can't just add projects without restructuring how time is spent."

[Discussion continues toward negotiated solution: fewer standardized tests, project-based assessment, reduced teacher workload, professional development]`,
  teacherNotes: `Assess whether participants listen and seek solutions or entrench. Does someone dominate? Do they acknowledge other perspectives' validity? Is movement toward common ground evident?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
CHARACTER: Maintains realistic role, understands constraints
EVIDENCE: Supports position with specific data or examples
LISTENING: Listens to others' perspectives, shows understanding
DISAGREEMENT: Challenges respectfully, acknowledges valid points
COLLABORATION: Seeks common ground, willing to modify position
Score out of 80.`
};

const igcseTask4: SpokenLanguageTask = {
  id: 'igcse-004',
  title: 'Persuasive Presentation: Youth Voice in Decision-Making',
  board: 'IGCSE',
  taskType: 'presentation',
  topic: 'Youth participation, democratic voice, institutional change',
  duration: '5-6 minutes',
  preparationGuide: `Argue for greater youth voice in decisions affecting young people. Research outcomes when youth are included. Find case studies of successful youth-led initiatives. Develop counterargument responses.`,
  assessmentCriteria: [
    'Problem articulation: Explains why youth voice is excluded and why it matters',
    'Evidence: Uses research on participation outcomes',
    'Counterargument: Addresses skepticism about youth capacity respectfully',
    'Strategy: Combines logic, emotion, and values appeal',
    'Proposals: Clear about what changes are wanted'
  ],
  modelScript: `When I was eight, adults made a decision about my school's lunch program without asking us: when it was served, how it was served, what options existed. The new system was worse—longer lines, less variety, food got cold. It took a year of complaints before they changed it back.

The frustrating part wasn't that they made a bad decision. It was that they made a decision about something affecting us, without asking us what we thought.

This isn't unique to schools. Young people are excluded from decision-making across institutions. Politicians make education policy without consulting students. Employers design entry-level jobs without asking what young people need. Environmentalists make climate policy without centering youth, even though we'll live longest with consequences.

I'm here to argue that this is wrong—ethically, practically, and legally. Young people should have a voice in decisions affecting us.

First, the ethical case: the UN Convention on the Rights of the Child explicitly protects the right of children and young people to be heard. It's an international human right. Yet most institutions ignore this.

Why? Usually because adults assume young people lack judgment or experience. That assumption is wrong.

Research on youth participation consistently shows positive outcomes. A study on youth-led environmental projects found that when young people led climate initiatives, they increased community participation 40% compared to adult-led initiatives. Why? Because people trusted youth authenticity.

A school study showed that when students were included on decision-making committees, school policies improved measurably. Not because students replaced good judgment with bad, but because they contributed perspectives adults hadn't considered.

Here's a specific example: a London school restructured their uniform policy with student input. Without student input, adults would have kept it unchanged or made assumptions. With student input, they created a policy that worked better for everyone—maintained discipline while increasing student agency.

Counterargument: "Young people lack experience. They'll make bad decisions." First, young people don't typically make decisions alone. They're part of committees with adults. Second, young people do have expertise. We're experts on being young in this world. We understand pressures and possibilities adults might not.

Third, the outcome evidence doesn't support the assumption. Youth participation tends to lead to better decisions, because you're accessing information and perspectives you otherwise wouldn't have.

Moreover, young people develop judgment by participating, not by being excluded. If you never ask someone's opinion, they never develop the skills to offer it thoughtfully.

So what would I propose concretely? First: youth representation on decision-making bodies. School leadership, local government, youth justice—anywhere decisions affect young people, there should be youth voices. Second: structured youth councils with real power, not just advisory roles. If youth input doesn't influence decisions, it's tokenism. Third: training for adults on facilitating youth participation respectfully.

Here's what shifts when adults actually listen: young people feel agency. They're more engaged in their institutions because they have voice. They develop leadership skills. And institutions make better decisions because they have access to the people most affected by them.

So I'm asking: include young people in decisions affecting them. Not as tokens. As genuine partners. You'll get better decisions, more engaged young people, and you'll be honoring a right explicitly recognized internationally.

That seems pretty straightforward.`,
  teacherNotes: `Assess authenticity and genuine advocacy for youth voice. Look for understanding of institutional barriers, evidence quality, sophistication in addressing counterarguments. Is this performative or does student demonstrate genuine investment?`,
  peerAssessmentSheet: `Rate each section: 1=Needs improvement, 2=Developing, 3=Good, 4=Excellent
PROBLEM: Identifies why youth voice is excluded, explains why it matters
EVIDENCE: Uses credible research, case studies
COUNTERARGUMENT: Addresses skepticism respectfully, evidence-based responses
STRATEGY: Combines logic, emotion, values appropriately
PROPOSAL: Specific changes, concrete and feasible, expected outcomes explained
Score out of 80.`
};

// EXPORT
export const spokenLanguageTasks: SpokenLanguageTask[] = [
  aqaTask1, aqaTask2, aqaTask3, aqaTask4,
  edexcelTask1, edexcelTask2, edexcelTask3, edexcelTask4,
  ocrTask1, ocrTask2, ocrTask3, ocrTask4,
  wjecTask1, wjecTask2, wjecTask3, wjecTask4,
  igcseTask1, igcseTask2, igcseTask3, igcseTask4
];

export default spokenLanguageTasks;
