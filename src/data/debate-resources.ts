export interface DebateTopic {
  id: string;
  title: string;
  motion: string;
  keyStage: string;
  forArguments: string[];
  againstArguments: string[];
  keyVocabulary: string[];
  discussionQuestions: string[];
  relatedTexts: string[];
  teacherNotes: string;
}

export const debateTopics: DebateTopic[] = [
  {
    id: "social-media-ban",
    title: "Social Media Ban for Under 16s",
    motion: "This house believes social media should be banned for users under 16 years old",
    keyStage: "GCSE",
    forArguments: [
      "Protects mental health and reduces anxiety, depression, and low self-esteem",
      "Prevents cyberbullying and online harassment of young people",
      "Reduces screen time addiction and improves sleep patterns",
      "Protects privacy and personal data of minors",
      "Allows teenagers to develop social skills face-to-face",
      "Removes exposure to harmful content and misinformation",
      "Reduces comparison culture and body image issues"
    ],
    againstArguments: [
      "Restricts freedom of expression and connection",
      "Impractical to enforce - teenagers will use VPNs or lie about age",
      "Removes educational opportunities and community building",
      "Disadvantages young activists and social causes",
      "Puts responsibility on young people rather than platforms to regulate",
      "Other countries' experiences show bans don't reduce usage effectively",
      "Young people already navigate digital spaces responsibly"
    ],
    keyVocabulary: [
      "mental health",
      "cyberbullying",
      "regulation",
      "privacy",
      "enforcement",
      "digital literacy",
      "addiction",
      "misinformation"
    ],
    discussionQuestions: [
      "Is it the role of government to protect young people from social media, or parents?",
      "How would a ban be enforced fairly and practically?",
      "What alternatives might better protect young people while preserving benefits?",
      "Does responsibility lie with social media platforms or users?",
      "How do cultural differences affect attitudes to social media and age restrictions?"
    ],
    relatedTexts: [
      "Social media news articles and research studies",
      "Jonathan Haidt's 'The Anxious Generation'",
      "Posts from young activists using social media for change"
    ],
    teacherNotes: "This topic connects to themes of power (tech companies vs. users), responsibility (duty of care), and identity (self-presentation online). Students can research recent legislative attempts like the Online Safety Bill. Encourage balanced debate recognizing both genuine risks and overblown fears."
  },
  {
    id: "school-uniforms",
    title: "School Uniforms",
    motion: "This house believes school uniforms should be abolished",
    keyStage: "GCSE",
    forArguments: [
      "Restricts personal expression and individuality",
      "Creates socioeconomic divide visible through uniform cost and quality",
      "Reduces focus on academics since uniform debates become distractions",
      "Prepares young people poorly for workplace dress codes",
      "Increases bullying based on uniform-wearing ability",
      "Uncomfortable and impractical for many body types",
      "Unnecessary control over what young people wear"
    ],
    againstArguments: [
      "Creates sense of community and school identity",
      "Reduces bullying based on clothing and wealth display",
      "Improves focus on academics rather than fashion competition",
      "Efficient and cost-effective for families",
      "Simplifies getting ready in mornings",
      "Professional preparation for future workplaces",
      "Reduces peer pressure to wear expensive brands"
    ],
    keyVocabulary: [
      "identity",
      "autonomy",
      "conformity",
      "socioeconomic",
      "expression",
      "equality",
      "discipline"
    ],
    discussionQuestions: [
      "Does uniform policy reflect or create equality in schools?",
      "How important is dress code to a school's disciplinary culture?",
      "What do uniforms communicate about education's purpose?",
      "Could compromise solutions (like dress codes instead of uniforms) work better?",
      "How do different cultures view school uniform requirements?"
    ],
    relatedTexts: [
      "Fiction exploring school identity and belonging",
      "Statistics on bullying and socioeconomic factors",
      "School policies from different countries"
    ],
    teacherNotes: "Excellent topic for exploring identity and social class. Links to GCSE themes of power (institution vs. individual), class, and identity. Students often have personal investment in this debate. Consider researching uniform policies across different countries and school types to broaden perspectives."
  },
  {
    id: "animal-testing",
    title: "Animal Testing for Medical Products",
    motion: "This house believes animal testing for medical and cosmetic products should be banned",
    keyStage: "GCSE",
    forArguments: [
      "Animals cannot consent to testing and suffer immensely",
      "Alternative testing methods (human cell cultures, computer models) are increasingly viable",
      "Results on animals don't always translate to humans",
      "Cosmetic testing on animals is unethical when alternatives exist",
      "Animals and humans have intrinsic moral worth beyond utility",
      "Bans have worked in EU without compromising medicine safety",
      "Companies continue testing despite alternatives to avoid admitting redundancy"
    ],
    againstArguments: [
      "Medical breakthroughs depend on animal testing to ensure human safety",
      "Alternative methods cannot fully replicate animal physiology",
      "Life-saving medicines require animal trials before human use",
      "Cosmetic testing comprises small percentage of animal research",
      "Banning testing would slow drug development and cost lives",
      "Animal welfare standards in research are regulated and improving",
      "Refusing testing for developing nations' medicines is itself unethical"
    ],
    keyVocabulary: [
      "ethics",
      "sentience",
      "efficacy",
      "in vitro",
      "regulation",
      "alternatives",
      "consent",
      "utility"
    ],
    discussionQuestions: [
      "Where is the moral line between animal and human welfare?",
      "Can we justify animal suffering for human benefit?",
      "How reliable are alternative testing methods currently?",
      "Who should decide the ethical boundaries of animal research?",
      "Does development status of a country affect the ethics of animal testing?"
    ],
    relatedTexts: [
      "Peter Singer's work on animal ethics",
      "Medical ethics case studies",
      "Statistics on drug approval and animal testing"
    ],
    teacherNotes: "Connects to themes of justice, responsibility, and ethics. Students can research actual regulations in EU, UK, and US. Encourages nuanced thinking about competing goods (human health vs. animal welfare). Avoid overly graphic descriptions but don't sanitize the reality of testing."
  },
  {
    id: "ai-replacing-teachers",
    title: "AI Replacing Teachers in Classrooms",
    motion: "This house believes AI will inevitably replace human teachers within 20 years",
    keyStage: "GCSE",
    forArguments: [
      "AI can provide personalized learning paths for every student",
      "Never tired, always patient, available 24/7",
      "Eliminates human bias in grading and discipline",
      "Can adapt teaching to different learning styles instantly",
      "Reduces education costs significantly",
      "Proven effectiveness in tutoring and skill-building apps",
      "Technology has replaced complex human roles before"
    ],
    againstArguments: [
      "Teaching is fundamentally about human connection and mentorship",
      "AI lacks empathy, emotional support, and pastoral care",
      "Cannot inspire, motivate, or challenge students philosophically",
      "Role models and teacher influence extend beyond content delivery",
      "Social and emotional learning requires human judgment",
      "Creates digital divides and accessibility issues",
      "Society would reject education without human relationships",
      "AI makes errors and lacks true understanding of context"
    ],
    keyVocabulary: [
      "automation",
      "pedagogy",
      "mentorship",
      "personalization",
      "technology",
      "bias",
      "emotional intelligence",
      "accessibility"
    ],
    discussionQuestions: [
      "What aspects of teaching can AI replicate and what requires human interaction?",
      "If AI could deliver better outcomes, would human replacement be justified?",
      "How would education change if teachers became facilitators rather than primary instructors?",
      "What would be lost in education if teaching became entirely AI-driven?",
      "Who bears responsibility for outcomes when AI teaches?"
    ],
    relatedTexts: [
      "Articles on AI in education and EdTech",
      "Science fiction exploring AI and education",
      "Case studies of successful AI tutoring systems"
    ],
    teacherNotes: "Highly relevant to GCSE students. Encourages reflection on teaching's purpose beyond information transfer. Links to themes of power (human vs. machine), responsibility, and identity. Have students consider which subjects might be most affected. Self-aware topic - students may feel personally implicated!"
  },
  {
    id: "censorship-literature",
    title: "Censorship of Literature in Schools",
    motion: "This house believes schools should have strict limits on which books students can read",
    keyStage: "GCSE",
    forArguments: [
      "Some content is genuinely harmful to developing minds",
      "Parents have right to influence their children's education",
      "Inappropriate sexual or violent content distracts from learning",
      "Age-appropriate alternatives exist for most topics",
      "Protects vulnerable students from triggering material",
      "Schools have duty of pastoral care",
      "Some works promote harmful ideologies"
    ],
    againstArguments: [
      "Censorship prevents critical thinking about challenging ideas",
      "Young people encounter difficult content outside school anyway",
      "Literature explores complex human experiences necessary for growth",
      "Censorship often targets marginalized perspectives and voices",
      "Teachers are professionals qualified to select appropriate texts",
      "Limits access to important historical and literary works",
      "Censorship creates curiosity and rebellion rather than understanding",
      "Decides what's 'harmful' based on who holds power"
    ],
    keyVocabulary: [
      "censorship",
      "intellectual freedom",
      "age-appropriate",
      "challenging content",
      "critical thinking",
      "marginalized voices",
      "pastoral care",
      "ideology"
    ],
    discussionQuestions: [
      "Who should decide what content is appropriate for young people?",
      "Is there a difference between guidance and censorship?",
      "How do we balance protection with intellectual freedom?",
      "Which topics or content should genuinely be off-limits?",
      "Can schools teach about censorship without experiencing it?",
      "How do power dynamics affect what gets censored?"
    ],
    relatedTexts: [
      "Banned books lists and their histories",
      "Authors writing about censorship",
      "Literary works frequently challenged in schools"
    ],
    teacherNotes: "Core GCSE English topic connecting to power, freedom, and justice. Students can research banned books and reasons for censorship. Encourages reflection on institutional power. Note: this is specifically about school censorship, not personal choice about what to read at home."
  },
  {
    id: "cancel-culture",
    title: "Cancel Culture and Accountability",
    motion: "This house believes cancel culture is necessary accountability, not mob justice",
    keyStage: "GCSE",
    forArguments: [
      "Traditional power structures protected harmful people from consequences",
      "Social media gives voice to historically marginalized groups",
      "Holds public figures accountable when systems fail",
      "Creates culture where harmful behavior becomes unacceptable",
      "Individual actions have consequences",
      "Protects vulnerable communities from repeated harm",
      "Amplifies important social justice movements"
    ],
    againstArguments: [
      "Disproportionate punishment without fair process or due process",
      "Doesn't allow for growth, apology, or redemption",
      "Silences legitimate debate and discourse",
      "Often based on misinformation or misinterpretation",
      "Mob mentality replaces individual judgment",
      "Destroys livelihoods for mistakes or old posts",
      "Creates culture of fear and self-censorship",
      "Lacks legal protections afforded to formal justice"
    ],
    keyVocabulary: [
      "accountability",
      "justice",
      "due process",
      "proportionality",
      "social justice",
      "marginalization",
      "redemption",
      "consequence"
    ],
    discussionQuestions: [
      "What's the difference between accountability and punishment?",
      "Do public figures have different responsibilities than private citizens?",
      "How do we balance immediate response with time for reflection?",
      "Can someone be 'cancelled' and then rehabilitated?",
      "Who decides what behavior warrants social consequences?",
      "How does power affect who gets cancelled and who doesn't?"
    ],
    relatedTexts: [
      "News articles on high-profile cancellations",
      "Sociological analysis of social media justice",
      "Personal accounts of being cancelled and redemption stories"
    ],
    teacherNotes: "Connects to justice, responsibility, and power themes. Encourage nuanced thinking beyond binary 'cancel culture good/bad'. Students can analyze specific cases and discuss proportionality, evidence, and redemption. Acknowledge this is live cultural conversation without settled answers."
  },
  {
    id: "climate-responsibility",
    title: "Climate Change Responsibility and Individual Action",
    motion: "This house believes individual climate action is more important than corporate regulation",
    keyStage: "GCSE",
    forArguments: [
      "Collective individual action creates cultural pressure for systemic change",
      "Personal responsibility builds investment in solutions",
      "Individuals voting with wallets influences corporate behavior",
      "Small changes from billions add up significantly",
      "Empowers people rather than waiting for government",
      "Individual action demonstrates viability of alternatives",
      "Creates momentum for policy change"
    ],
    againstArguments: [
      "100 companies produce 71% of global emissions - corporations matter most",
      "Individual action is 'greenwashing' that reduces pressure on systems",
      "Puts burden on citizens rather than those most responsible",
      "Systemic change requires regulation, not individual effort",
      "Wealthy nations' individuals can't offset corporate emissions elsewhere",
      "Individual action without policy change is insufficient",
      "Corporate responsibility is about market incentives, not personal choice"
    ],
    keyVocabulary: [
      "sustainability",
      "systemic change",
      "accountability",
      "responsibility",
      "collective action",
      "regulation",
      "carbon footprint",
      "greenwashing"
    ],
    discussionQuestions: [
      "Where does responsibility lie - with individuals or systems?",
      "Can individual action drive systemic change?",
      "What's the relationship between personal and political responsibility?",
      "How do economic systems affect individual environmental choices?",
      "Should wealthy nations bear more responsibility than developing nations?",
      "How do we encourage action without causing environmental anxiety?"
    ],
    relatedTexts: [
      "Climate change reports and statistics",
      "Environmental activism case studies",
      "Philosophy on individual vs. collective responsibility"
    ],
    teacherNotes: "Connects to themes of responsibility, justice, and power. Students can research corporate emissions and individual carbon footprints. Avoids doomism while acknowledging urgency. Links to GCSE English explorations of agency and systemic power."
  },
  {
    id: "gender-neutral-language",
    title: "Gender-Neutral Language in Education",
    motion: "This house believes schools should mandate gender-neutral language in all contexts",
    keyStage: "GCSE",
    forArguments: [
      "Validates non-binary and transgender students",
      "English language already has gender-neutral options (they/them)",
      "Reduces assumption-based discrimination",
      "Reflects linguistic evolution and inclusivity",
      "Protects vulnerable students from deliberate misgendering",
      "Challenges outdated gendered assumptions in curriculum",
      "Creates safer learning environment for all students"
    ],
    againstArguments: [
      "Enforcement becomes punitive rather than educational",
      "Restricts linguistic freedom and natural language development",
      "Existing pronouns serve clear communicative purpose",
      "Mandates undermine genuinely held beliefs about language",
      "Creates culture of language policing",
      "Can feel exclusionary to those unfamiliar with new terms",
      "Educational focus should be content, not language rules",
      "Over-focus on pronouns distracts from genuine inclusion work"
    ],
    keyVocabulary: [
      "inclusion",
      "pronouns",
      "gender identity",
      "linguistic evolution",
      "inclusivity",
      "discrimination",
      "normativity",
      "safe space"
    ],
    discussionQuestions: [
      "What's the difference between encouraging and mandating inclusive language?",
      "How does language shape our perception of gender and identity?",
      "Can rules about language create genuine inclusion or does it feel performative?",
      "What's the balance between protecting students and restricting speech?",
      "How do we include people with different views on gender language?",
      "Does language change need to be taught or does it evolve naturally?"
    ],
    relatedTexts: [
      "Linguistic studies on pronoun usage and identity",
      "Policies from different schools and universities",
      "Personal accounts from non-binary and transgender students"
    ],
    teacherNotes: "Sensitive topic requiring skilled facilitation. Frame as about language evolution and inclusion rather than political correctness. Links to themes of identity, power, and belonging. Students can research how language reflects social change. Emphasize respectful debate despite strong feelings."
  },
  {
    id: "prison-vs-rehabilitation",
    title: "Prison System: Punishment vs. Rehabilitation",
    motion: "This house believes the primary purpose of prisons should be rehabilitation, not punishment",
    keyStage: "GCSE",
    forArguments: [
      "Rehabilitation reduces reoffending rates more effectively than punishment",
      "Punishment-focused systems create cycles of crime and incarceration",
      "People can change given proper support and opportunity",
      "Rehabilitation protects society long-term",
      "Many offenders have experienced trauma and need healing",
      "Norway's restorative justice model shows better outcomes",
      "Punishment often causes additional trauma and harm"
    ],
    againstArguments: [
      "Justice requires punishment proportionate to crime",
      "Victims deserve accountability and retribution",
      "Rehabilitative focus can appear lenient to serious crimes",
      "Rehabilitation requires willing participation - not all prisoners engage",
      "Public safety requires incapacitation of dangerous individuals",
      "Resources for rehabilitation are limited",
      "Criminal behavior shows conscious choice, not just circumstance"
    ],
    keyVocabulary: [
      "rehabilitation",
      "punishment",
      "justice",
      "reoffending",
      "retribution",
      "accountability",
      "systemic",
      "restorative justice"
    ],
    discussionQuestions: [
      "What is the purpose of prison - punishment, protection, or change?",
      "Can someone deserve both punishment and rehabilitation?",
      "How do victim perspectives affect the ideal prison system?",
      "Is rehabilitation possible for all crimes?",
      "How do socioeconomic factors affect criminal behavior and punishment?",
      "What's the relationship between justice and compassion?"
    ],
    relatedTexts: [
      "Case studies of different justice systems",
      "Statistics on reoffending rates",
      "Accounts from formerly incarcerated people",
      "Philosophy on justice and punishment"
    ],
    teacherNotes: "Links to justice and responsibility themes in GCSE. Students can research comparative systems (UK vs. Norway, etc.). Encourages nuanced thinking about crime, punishment, and society. Include voices of victims and reformed offenders for balanced perspective."
  },
  {
    id: "homework-abolition",
    title: "Abolishing Homework",
    motion: "This house believes homework should be abolished from all schools",
    keyStage: "GCSE",
    forArguments: [
      "Homework increases stress and mental health problems in young people",
      "Research shows minimal academic benefit for younger students",
      "Homework exacerbates inequality - wealthier students have tutors",
      "Prevents time for hobbies, sports, and family",
      "Teachers already spend class time on learning",
      "Homework assumes stable home environment with parental support",
      "Young people need rest and unstructured time for development",
      "Homework often becomes parental stress source"
    ],
    againstArguments: [
      "Homework reinforces learning and develops independent study skills",
      "Prepares students for workload and self-direction in higher education",
      "Some subjects require practice outside class (languages, maths)",
      "Differentiates learning and allows targeted practice",
      "Engages parents in education",
      "Moderate homework shows positive correlation with achievement",
      "Teaching time is insufficient without reinforcement",
      "Teaches time management and responsibility"
    ],
    keyVocabulary: [
      "well-being",
      "learning outcomes",
      "equality",
      "independence",
      "stress",
      "achievement",
      "reinforcement",
      "privilege"
    ],
    discussionQuestions: [
      "What's the purpose of homework and is it being achieved?",
      "How do homework impacts differ across socioeconomic levels?",
      "Can learning happen without homework?",
      "What's appropriate homework load at different ages?",
      "How do we balance academic rigor with student well-being?",
      "What alternatives to traditional homework might work?"
    ],
    relatedTexts: [
      "Educational research on homework effectiveness",
      "Policy changes in different countries/schools",
      "Student testimonies on homework stress",
      "Expert opinions from educators and psychologists"
    ],
    teacherNotes: "Personally relevant to GCSE students. Encourages research-based thinking about education. Links to responsibility (managing workload) and well-being. Note complexity: research shows minimal benefit for primary but some benefit for secondary, homework quality matters more than quantity."
  },
  {
    id: "universal-basic-income",
    title: "Universal Basic Income",
    motion: "This house believes governments should provide universal basic income to all citizens",
    keyStage: "GCSE",
    forArguments: [
      "Eliminates poverty and provides economic security",
      "Simplifies welfare system and reduces bureaucratic waste",
      "Enables people to pursue education, creativity, and meaningful work",
      "Recognizes unpaid labor (care work, volunteering, art)",
      "Reduces anxiety about survival and improves mental health",
      "Provides leverage for workers to refuse exploitative jobs",
      "Pilot programs show positive outcomes on health and well-being",
      "Automation makes jobs increasingly unstable"
    ],
    againstArguments: [
      "Unaffordable without massive tax increases",
      "Reduces work motivation and productivity",
      "Inefficient - gives money to wealthy who don't need it",
      "Targeted welfare more effectively helps vulnerable populations",
      "Creates inflation as prices rise with increased purchasing power",
      "Individual responsibility requires work for survival",
      "Pilot programs are too small to predict full implementation effects",
      "Economic growth depends on wage-based labor incentive"
    ],
    keyVocabulary: [
      "poverty",
      "welfare",
      "economic security",
      "productivity",
      "inequality",
      "inflation",
      "automation",
      "dignity"
    ],
    discussionQuestions: [
      "What's the relationship between income and human dignity?",
      "Would UBI change motivation to work and society's values?",
      "How do we balance individual responsibility with collective support?",
      "Is UBI more efficient than current welfare systems?",
      "How does automation affect the viability and necessity of UBI?",
      "What would be the global economic impacts?"
    ],
    relatedTexts: [
      "UBI pilot program results (Finland, Kenya, etc.)",
      "Economic analyses of feasibility",
      "Philosophical arguments about work and dignity",
      "Science fiction exploring post-scarcity economies"
    ],
    teacherNotes: "Connects to class, inequality, and justice themes. Students can research real pilot programs and economic projections. Encourages thinking about what motivates human behavior beyond survival. Explores relationship between work, identity, and value in society."
  },
  {
    id: "monarchy-abolition",
    title: "Abolishing the Monarchy",
    motion: "This house believes the UK should abolish the monarchy and become a republic",
    keyStage: "GCSE",
    forArguments: [
      "Democratic principle requires elected, not hereditary, leadership",
      "Monarchy wastes public money on unproductive ceremonial roles",
      "Perpetuates outdated class system and privilege",
      "Symbolic head of state serves no practical function",
      "Other successful democracies function without monarchies",
      "Monarchy maintains unequal treatment before law",
      "Head of state should represent all citizens, elected ones do"
    ],
    againstArguments: [
      "Monarchy provides stable, unifying symbol above politics",
      "Historical continuity and cultural tradition have value",
      "Monarchy generates tourism revenue exceeding costs",
      "Monarchy serves constitutional role with real (not ceremonial) power in some contexts",
      "Elections create divisive political campaigns for leadership",
      "Monarchy shields political process from partisan leadership",
      "Abolishing requires constitutional change with uncertain outcomes",
      "Public opinion supports continuing monarchy"
    ],
    keyVocabulary: [
      "democracy",
      "heredity",
      "constitutionalism",
      "privilege",
      "symbolism",
      "tradition",
      "republic",
      "meritocracy"
    ],
    discussionQuestions: [
      "What's the difference between symbolic and practical political power?",
      "Can tradition and democracy coexist?",
      "What's the value of having a political leader separate from head of state?",
      "How would abolishing monarchy change British identity and culture?",
      "Is the cost-benefit of monarchy primarily financial or philosophical?",
      "What would a British republic look like?"
    ],
    relatedTexts: [
      "Historical accounts of monarchy's political role",
      "Constitutional analyses of different governance systems",
      "Accounts from citizens of republics and monarchies",
      "Economic analyses of monarchy costs and benefits"
    ],
    teacherNotes: "Particularly relevant to British GCSE students. Links to power, tradition, and democracy. Students can research actual costs of monarchy and functions of other head-of-state systems. Encourages thinking about symbols, tradition, and democracy in tension."
  },
  {
    id: "death-penalty",
    title: "Capital Punishment",
    motion: "This house believes capital punishment is justified for the most serious crimes",
    keyStage: "GCSE",
    forArguments: [
      "Justice for victims requires proportionate punishment",
      "Permanently incapacitates dangerous individuals",
      "Deters serious crime through ultimate consequence",
      "Saves taxpayer money versus life imprisonment",
      "Some crimes are so heinous they deserve death",
      "Victims' families deserve ultimate accountability",
      "Used effectively in other developed democracies"
    ],
    againstArguments: [
      "Irreversible if evidence exonerates the convicted",
      "Innocent people have been executed - system is fallible",
      "Doesn't effectively deter crime (research shows)",
      "Violates human rights and right to life",
      "Morally wrong - state shouldn't execute citizens",
      "Costs more than life imprisonment due to legal appeals",
      "Disproportionately applied to marginalized groups",
      "Contradicts rehabilitation philosophy"
    ],
    keyVocabulary: [
      "capital punishment",
      "justice",
      "deterrent",
      "human rights",
      "irreversible",
      "accountability",
      "systemic bias",
      "retribution"
    ],
    discussionQuestions: [
      "Does justice require proportional punishment, and does death fit any crime?",
      "What's the value of a justice system if it risks executing innocents?",
      "Can state execution ever be morally justified?",
      "How do victim and offender rights balance in justice?",
      "What role does irreversibility play in criminal justice?",
      "How do power and identity affect who receives capital punishment?"
    ],
    relatedTexts: [
      "Case studies of executions and later exonerations",
      "International human rights perspectives",
      "Philosophical and religious arguments on sanctity of life",
      "Statistics on crime deterrence"
    ],
    teacherNotes: "Challenging topic with strong moral dimensions. Frame as about justice philosophy, not glorifying punishment. Links to themes of power (state power), justice, and responsibility. Students can research exonerations and international perspectives. Requires mature facilitation of different moral frameworks."
  },
  {
    id: "wealth-redistribution",
    title: "Progressive Taxation and Wealth Redistribution",
    motion: "This house believes progressive taxation is necessary to reduce inequality",
    keyStage: "GCSE",
    forArguments: [
      "Extreme wealth inequality undermines social cohesion",
      "Wealthy benefit most from society's infrastructure and stability",
      "Diminishing marginal utility of money justifies redistribution",
      "Funds essential services that benefit everyone",
      "Wealthy have better access to tax avoidance strategies",
      "Creates more equal starting point for all citizens",
      "Countries with more equal distribution have better outcomes"
    ],
    againstArguments: [
      "Punishes success and discourages economic achievement",
      "High earners already pay majority of taxes",
      "Reduces investment and economic growth",
      "Inefficient - money lost in government bureaucracy",
      "Violates property rights earned through work",
      "Wealthy can simply leave countries with high taxes",
      "Individuals should decide charitable giving, not government"
    ],
    keyVocabulary: [
      "progressive taxation",
      "inequality",
      "redistribution",
      "utility",
      "infrastructure",
      "wealth gap",
      "meritocracy",
      "incentive"
    ],
    discussionQuestions: [
      "What level of inequality is acceptable in a society?",
      "Does wealth deserve protection as property right?",
      "How do we balance incentive to work with social obligation?",
      "What's the relationship between equality and freedom?",
      "Who should decide how to redistribute wealth?",
      "What evidence shows about effects of progressive taxation?"
    ],
    relatedTexts: [
      "Economic data on inequality and tax rates",
      "Philosophical arguments on property and justice",
      "Policy analyses of different tax systems",
      "Case studies from different countries"
    ],
    teacherNotes: "Connects to class and justice themes. Students can research actual tax rates and government spending. Encourages thinking about what makes a system fair. Acknowledge different value systems (equality vs. freedom vs. merit) drive this debate."
  },
  {
    id: "free-speech-limits",
    title: "Limits on Free Speech",
    motion: "This house believes free speech should have clear legal limits on harmful content",
    keyStage: "GCSE",
    forArguments: [
      "Unlimited speech enables hate speech targeting vulnerable groups",
      "Speech inciting violence has real-world consequences",
      "Misinformation causes harm (health, elections, etc.)",
      "Some speech (threats, harassment) violates others' rights",
      "Society has always had some speech limits (libel, fraud)",
      "Powerful use unlimited speech to silence marginalized voices",
      "Online amplification makes controlling false speech more urgent"
    ],
    againstArguments: [
      "Who decides what speech is harmful is fundamentally dangerous",
      "History shows speech restrictions mainly protect power structures",
      "Restrictions create slippery slope toward authoritarianism",
      "Bad speech is best countered by more speech, not suppression",
      "Defining harm is subjective and politically contested",
      "Drives harmful speech underground rather than addressing it",
      "Chilling effect: fear of legal consequences reduces valuable expression"
    ],
    keyVocabulary: [
      "free speech",
      "hate speech",
      "misinformation",
      "harassment",
      "censorship",
      "dangerous speech",
      "amplification",
      "slippery slope"
    ],
    discussionQuestions: [
      "Where's the line between speech and action?",
      "Can speech cause direct harm without accompanying action?",
      "Who's qualified to decide what speech crosses the line?",
      "How do power dynamics affect free speech?",
      "What's the difference between suppression and consequence?",
      "Can speech limits and free society coexist?"
    ],
    relatedTexts: [
      "Historical examples of speech restrictions",
      "Case studies of harmful misinformation",
      "Philosophical arguments on free speech",
      "International approaches to speech regulation"
    ],
    teacherNotes: "Nuanced topic connecting to freedom, justice, and power. Resist framing as simply 'free speech good' vs. 'free speech bad'. Students can examine specific cases (hate speech, medical misinformation, conspiracy theories). Link to censorship debate on literature."
  },
  {
    id: "work-week-hours",
    title: "Four-Day Work Week",
    motion: "This house believes governments should legislate a four-day work week",
    keyStage: "GCSE",
    forArguments: [
      "Improves mental health and reduces burnout",
      "Increases productivity in fewer hours (research supports)",
      "Provides time for family, hobbies, and self-care",
      "Reduces environmental impact from commuting",
      "Creates jobs as work spreads across more people",
      "Pilot programs show positive outcomes",
      "Disconnects human worth from work productivity"
    ],
    againstArguments: [
      "Reduces economic output and competitiveness",
      "Employers would compress work rather than reduce hours",
      "Hurts service industries requiring consistent staffing",
      "Salary would decrease proportionally",
      "Many jobs can't function on four days (healthcare, retail)",
      "Disadvantages people doing care work outside employment",
      "Individual choice better than government mandate"
    ],
    keyVocabulary: [
      "work-life balance",
      "productivity",
      "mental health",
      "economic growth",
      "sustainability",
      "burnout",
      "flexibility",
      "mandated"
    ],
    discussionQuestions: [
      "What's the relationship between work hours and well-being?",
      "Would shorter weeks improve or reduce economic productivity?",
      "How would industries reliant on constant staffing adapt?",
      "Should work hours be mandated or chosen individually?",
      "What would people do with extra time and would it be equally valuable?",
      "How does this benefit and burden different types of workers?"
    ],
    relatedTexts: [
      "Data from four-day work week pilot programs",
      "Productivity research on work hours",
      "Environmental impact studies",
      "Worker testimony on well-being and hours"
    ],
    teacherNotes: "Relevant to student perspectives on work and well-being. Links to responsibility, productivity, and class. Students can research Iceland's and other pilot programs. Encourages thinking about what counts as valuable work and time."
  },
  {
    id: "artificial-intelligence-regulation",
    title: "Regulating Artificial Intelligence Development",
    motion: "This house believes AI development should be heavily regulated by government",
    keyStage: "GCSE",
    forArguments: [
      "Unregulated AI risks serious harms (bias, displacement, weaponization)",
      "Tech companies prioritize profit over safety",
      "International coordination prevents regulatory arbitrage",
      "Other powerful technologies (pharma, nuclear) are regulated",
      "Regulation enables beneficial AI development more safely",
      "Prevents concentration of power in few companies",
      "Protects workers from sudden displacement"
    ],
    againstArguments: [
      "Regulation stifles innovation and competitiveness",
      "Government lacks expertise to regulate complex technology",
      "Over-regulation benefits established companies, harms startups",
      "Technology evolves faster than regulation can respond",
      "Market competition and consumer choice self-regulate better",
      "Regulation in one country drives development elsewhere",
      "Existing laws address harms (discrimination, safety, etc.)"
    ],
    keyVocabulary: [
      "regulation",
      "innovation",
      "safety",
      "governance",
      "bias",
      "displacement",
      "concentration of power",
      "accountability"
    ],
    discussionQuestions: [
      "What risks does unregulated AI development pose?",
      "Can government effectively regulate rapidly developing technology?",
      "How do we balance innovation with safety?",
      "Who should govern AI - government, companies, or international bodies?",
      "How do AI risks differ from risks of other technologies?",
      "What regulation would be practical and actually prevent harms?"
    ],
    relatedTexts: [
      "News on AI breakthroughs and concerning applications",
      "Proposed AI regulation frameworks",
      "Accounts of AI bias and failures",
      "Expert opinions on AI risks"
    ],
    teacherNotes: "Connects to themes of power, responsibility, and justice. Students can research actual AI incidents (hiring discrimination, image generation, etc.). Links to debates on technology, business, and government. Encourages forward-thinking about responsibility for emerging technology."
  },
  {
    id: "organ-donation-opt-out",
    title: "Opt-Out Organ Donation Systems",
    motion: "This house believes organ donation should be opt-out rather than opt-in",
    keyStage: "GCSE",
    forArguments: [
      "Opt-out increases donation rates and saves lives",
      "Spain and other countries show massively higher donation rates",
      "Still respects choice - people can opt out",
      "Aligns with majority who support donation but don't register",
      "System respects family wishes if documented",
      "Shortage of organs prevents life-saving transplants",
      "Body autonomy respected through prior declaration option"
    ],
    againstArguments: [
      "Presumed consent violates body autonomy",
      "Requiring opt-out is still a form of coercion",
      "Family distress when organs taken against perceived wishes",
      "Violates cultural and religious beliefs without consent",
      "Opt-in respects autonomy more than opt-out",
      "Better to increase communication than change default",
      "Creates vulnerability for marginalized populations"
    ],
    keyVocabulary: [
      "autonomy",
      "consent",
      "presumed consent",
      "donation",
      "transplant",
      "coercion",
      "bodies",
      "choice"
    ],
    discussionQuestions: [
      "Is there a meaningful difference between opt-in and opt-out systems?",
      "Does body autonomy mean right to keep your organs after death?",
      "How do we balance individual choice with social good?",
      "Should system default reflect majority preference?",
      "How do cultural and religious beliefs affect this debate?",
      "What actually increases donation rates - default system or education?"
    ],
    relatedTexts: [
      "Data on donation rates in opt-in vs. opt-out countries",
      "Religious and cultural perspectives on organ donation",
      "Transplant shortage statistics",
      "Ethical philosophy on autonomy and coercion"
    ],
    teacherNotes: "Connects to bodily autonomy, justice, and responsibility. Good case study in how system defaults affect behavior. Students can research actual data on donation rates. Encourages thinking about autonomy vs. collective good."
  },
  {
    id: "gender-sports-participation",
    title: "Transgender Athletes in Sports",
    motion: "This house believes transgender athletes should be able to compete in sport categories matching their gender identity",
    keyStage: "GCSE",
    forArguments: [
      "Transgender people deserve inclusion and dignity",
      "Hormone therapy reduces athletic advantages after transition",
      "Current IOC guidelines provide scientific framework",
      "Exclusion based on identity is discrimination",
      "Very few transgender athletes compete professionally",
      "Competition at amateur/school level should prioritize inclusion",
      "Some advantages exist in all sports (height, genetics)"
    ],
    againstArguments: [
      "Biological advantages persist despite hormone therapy",
      "Fairness to cisgender women's athletics requires limits",
      "Elite women's sports are already marginalized with attention",
      "Risk of cisgender athletes falsely transitioning for advantage",
      "Needs individualized assessment, not blanket policy",
      "International standards should protect competitive balance",
      "Concerns legitimate even if small number of transgender athletes"
    ],
    keyVocabulary: [
      "inclusion",
      "fairness",
      "identity",
      "biology",
      "discrimination",
      "advantage",
      "eligibility",
      "dignity"
    ],
    discussionQuestions: [
      "What's the purpose of sport categories - fairness or inclusion?",
      "How much advantage matters in determining policy?",
      "Can we have both inclusion and fair competition?",
      "How should science, fairness, and dignity balance?",
      "Should different standards apply to different levels of competition?",
      "Who should decide policy - sports bodies, government, or athletes?"
    ],
    relatedTexts: [
      "IOC and sports governing body policies",
      "Scientific research on hormone therapy and athletic performance",
      "Accounts from transgender and cisgender women athletes",
      "Analysis of elite women's sports as marginalized space"
    ],
    teacherNotes: "Sensitive topic requiring balanced facilitation. Frame as genuinely contested question with legitimate concerns on multiple sides. Links to justice, identity, and fairness. Include voices of affected athletes. Acknowledge this is evolving conversation without clear resolution."
  },
  {
    id: "pharmaceutical-pricing",
    title: "Pharmaceutical Drug Pricing",
    motion: "This house believes pharmaceutical companies should be required to price life-saving drugs affordably",
    keyStage: "GCSE",
    forArguments: [
      "Profit barriers prevent access to life-saving medicines",
      "High prices cause unnecessary deaths and suffering",
      "Government funding drives much drug research",
      "Companies profit from publicly-funded research",
      "Price controls in other countries show affordability possible",
      "Extreme pricing exploits patent monopolies",
      "Medical need creates moral obligation beyond profit"
    ],
    againstArguments: [
      "High prices fund research into next generation drugs",
      "Regulating prices reduces innovation incentive",
      "Pharmaceutical development is extremely expensive",
      "Companies invest billions with no guarantee of success",
      "Government-funded research is fundamental but not primary cost",
      "Price controls shift costs through supply chain",
      "Voluntarily licensing to generic makers balances needs"
    ],
    keyVocabulary: [
      "access",
      "pricing",
      "patent",
      "innovation",
      "profit",
      "healthcare",
      "monopoly",
      "affordability"
    ],
    discussionQuestions: [
      "Can life-saving medicines be treated as pure profit commodities?",
      "How should benefit of new drugs be balanced with profit incentive?",
      "What's the role of public funding in drug development?",
      "How do other countries balance access and innovation?",
      "Should different pricing apply in different economic contexts?",
      "Who bears responsibility for unaffordable medicines?"
    ],
    relatedTexts: [
      "Drug pricing case studies (insulin, cancer drugs, etc.)",
      "Research on innovation and pharmaceutical pricing",
      "Government healthcare system comparisons",
      "Accounts from patients unable to afford medicines"
    ],
    teacherNotes: "Connects to justice, responsibility, and class. Students can research specific high-profile drug pricing cases (insulin, EpiPen, etc.). Links to healthcare as human right vs. market commodity. Encourages thinking about what factors should limit profit."
  },
  {
    id: "immigration-policy",
    title: "Immigration Restrictions and Border Control",
    motion: "This house believes wealthy nations should have more open immigration policies",
    keyStage: "GCSE",
    forArguments: [
      "Immigration enriches culture and boosts economy",
      "Wealthy nations benefit from economic inequality they created",
      "Asylum seekers fleeing violence have moral right to safety",
      "Labor shortages addressed through immigration",
      "Immigration generates innovation and diversity",
      "Borders are arbitrary - nationality is accident of birth",
      "Wealthy nations can afford integration costs"
    ],
    againstArguments: [
      "Controls protect jobs and wages for citizens",
      "Infrastructure and services strain under rapid immigration",
      "Nations have right to control borders and identity",
      "Resources limited - should prioritize citizens first",
      "Mass immigration creates integration challenges",
      "Can contribute to exploitation of vulnerable migrants",
      "Open borders without preparation harms both communities"
    ],
    keyVocabulary: [
      "migration",
      "nationality",
      "asylum",
      "borders",
      "integration",
      "refugee",
      "justice",
      "sovereignty"
    ],
    discussionQuestions: [
      "What do nations owe to citizens versus outsiders?",
      "Does nationality deserve special moral status?",
      "How do structural inequalities affect migration?",
      "What level of immigration is sustainable and beneficial?",
      "How should nations balance openness with self-protection?",
      "What's the difference between immigration and asylum?"
    ],
    relatedTexts: [
      "Immigration policy analyses from different countries",
      "Stories of migrants and asylum seekers",
      "Economic research on immigration effects",
      "International law on asylum and refugees"
    ],
    teacherNotes: "Sensitive topic with strong contemporary relevance. Distinguish between immigration (economic) and asylum (protection from danger). Links to justice, responsibility, and national identity. Students should research actual data on immigration effects. Avoid scapegoating while acknowledging real policy challenges."
  },
  {
    id: "fast-fashion",
    title: "Fast Fashion and Consumer Culture",
    motion: "This house believes governments should restrict fast fashion through taxation and regulations",
    keyStage: "GCSE",
    forArguments: [
      "Fashion industry is massive environmental polluter",
      "Textile waste ends up in landfills and global south",
      "Labor exploitation in manufacturing conditions",
      "Encourages throwaway consumer mindset",
      "Tax on fast fashion funds sustainable alternatives",
      "Regulation levels playing field for ethical companies",
      "Pollution costs externalized to environment and poor communities"
    ],
    againstArguments: [
      "Restricts access to affordable clothing for low-income people",
      "Taxation passed to consumers, hurting most vulnerable",
      "Individual choice should drive consumption",
      "Better to educate consumers than mandate behavior",
      "Supply chains complex - regulation hard to enforce",
      "Impacts jobs in manufacturing and retail",
      "Sustainable alternatives currently more expensive"
    ],
    keyVocabulary: [
      "sustainability",
      "consumption",
      "environmental impact",
      "labor exploitation",
      "regulation",
      "pollution",
      "waste",
      "inequality"
    ],
    discussionQuestions: [
      "Who bears responsibility for environmental costs of fashion?",
      "Can individual consumer choices address systemic problems?",
      "How do class and access affect sustainable fashion?",
      "What would ethical fashion look like?",
      "Should regulation focus on production or consumption?",
      "How do workers' rights and environmental protection balance?"
    ],
    relatedTexts: [
      "Environmental impact studies of fashion industry",
      "Documentaries on factory conditions and textile waste",
      "Economics of fast fashion business model",
      "Sustainable fashion alternatives and costs"
    ],
    teacherNotes: "Connects to responsibility, class, and justice. Students engage daily with fashion consumption, making this personally relevant. Links to environmental justice and global inequality. Research actual environmental cost of clothing. Avoid shaming consumption while addressing systemic issues."
  },
  {
    id: "vaccine-mandates",
    title: "Vaccine Mandates and Public Health",
    motion: "This house believes vaccine mandates for public health emergencies are justified",
    keyStage: "GCSE",
    forArguments: [
      "Public health emergencies justify temporary restrictions",
      "Vaccines protect vulnerable people who can't be vaccinated",
      "Mandatory vaccination eliminated diseases like smallpox",
      "Freedom limited when it endangers others",
      "Herd immunity requires sufficient vaccination rates",
      "Health emergencies justify extraordinary measures",
      "Unvaccinated populations become virus reservoirs"
    ],
    againstArguments: [
      "Bodily autonomy is fundamental right even for public health",
      "Mandates erode trust in public health institutions",
      "Coercion should be last resort, not first",
      "Vaccination decisions are personal health choices",
      "Natural immunity provides protection too",
      "Mandates disproportionately affect marginalized groups",
      "Alternatives like testing less coercive than mandates"
    ],
    keyVocabulary: [
      "public health",
      "autonomy",
      "mandate",
      "herd immunity",
      "emergency",
      "coercion",
      "vaccine",
      "collective good"
    ],
    discussionQuestions: [
      "When does public health override individual choice?",
      "What distinguishes emergency from normal circumstances?",
      "How much risk to others justifies restricting freedom?",
      "Are there alternatives to mandates that achieve public health goals?",
      "How do mandates affect vaccine confidence?",
      "Who bears responsibility if mandates cause harm?"
    ],
    relatedTexts: [
      "Public health emergency case studies",
      "Bioethics perspectives on autonomy and collective good",
      "Epidemiological data on vaccination thresholds",
      "History of public health mandates and outcomes"
    ],
    teacherNotes: "Personally recent for GCSE students (COVID vaccines). Highly contested topic requiring skilled facilitation. Frame as genuine ethical conflict, not simple choice. Links to liberty, responsibility, and collective good. Include scientific literacy discussion about vaccine effectiveness claims."
  },
  {
    id: "mental-health-support",
    title: "Mental Health Services in Schools",
    motion: "This house believes schools should provide comprehensive mental health support to all students",
    keyStage: "GCSE",
    forArguments: [
      "Mental health crises among young people are increasing",
      "Schools already identify struggling students effectively",
      "Early intervention prevents worse outcomes later",
      "Reduces stigma when help is accessible at school",
      "Students spend most time in school - logical access point",
      "Prevents crises that disrupt education for whole cohort",
      "Emotional skills training improves academic performance"
    ],
    againstArguments: [
      "Teachers not trained therapists - wrong professionals for complex mental health",
      "Resources would be better spent on education",
      "Parents responsible for children's mental health, not schools",
      "Schools already overextended without additional responsibility",
      "School-based treatment less confidential than therapy",
      "Pathologizes normal adolescent stress and difficult feelings",
      "Resources stretched too thin across all students equally"
    ],
    keyVocabulary: [
      "mental health",
      "support",
      "intervention",
      "stigma",
      "wellbeing",
      "pastoral care",
      "accessibility",
      "crisis"
    ],
    discussionQuestions: [
      "What's school's responsibility for student well-being beyond academics?",
      "Can schools provide therapeutic support or just signposting to services?",
      "How do we prevent pathologizing normal adolescent emotions?",
      "What role should parents play versus schools?",
      "How would comprehensive support be funded and staffed?",
      "Does accessible support at school prevent or delay seeking help?"
    ],
    relatedTexts: [
      "Youth mental health statistics and trends",
      "School-based intervention research and outcomes",
      "Policy from schools implementing mental health programs",
      "Student and parent perspectives on school support"
    ],
    teacherNotes: "Directly relevant to GCSE students' current experience. Links to responsibility and well-being. Acknowledge rising mental health concerns among young people while discussing solutions realistically. Distinguish between prevention/support (school can do) and treatment (requires professionals). Personally sensitive - facilitate with care."
  },
  {
    id: "local-food-production",
    title: "Local Food Production and Sovereignty",
    motion: "This house believes nations should prioritize local food production over global supply chains",
    keyStage: "GCSE",
    forArguments: [
      "Local production reduces environmental impact of transportation",
      "Protects food security from global disruptions",
      "Supports local farmers and rural economies",
      "Creates community connection to food sources",
      "Reduces packaging and processing requirements",
      "Enables faster response to food crises",
      "Promotes sustainable farming practices"
    ],
    againstArguments: [
      "Global supply chains provide cheaper, more abundant food",
      "Not all regions can produce all needed crops efficiently",
      "Specialization creates comparative advantage and efficiency",
      "Local production would increase food costs significantly",
      "Climate dictates what can grow locally (bananas in UK?)",
      "Global trade reduces food security through diversification",
      "Economic disruption to farmers in countries dependent on export"
    ],
    keyVocabulary: [
      "food security",
      "sustainability",
      "local production",
      "supply chain",
      "efficiency",
      "sovereignty",
      "environmental impact",
      "economy"
    ],
    discussionQuestions: [
      "Is food security worth the cost of higher prices?",
      "How does climate affect local food production viability?",
      "What balance between local and global food systems makes sense?",
      "Who bears costs and benefits of local vs. global production?",
      "How does global trade affect farmers in developing nations?",
      "Can sustainability be achieved through global or only local systems?"
    ],
    relatedTexts: [
      "Food systems research and environmental impact data",
      "Case studies of local food production initiatives",
      "Economic analyses of food costs in different systems",
      "Climate and agriculture data by region"
    ],
    teacherNotes: "Connects to sustainability, responsibility, and justice. Links to environmental themes. Students can research food miles and seasonal eating. Explores tension between environmental protection and economic efficiency. Relevant to 'eat local' movement many students encounter."
  }
];
