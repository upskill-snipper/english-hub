import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "30+ Spoken Language Presentation Topics | The English Hub",
  description:
    "Over 30 presentation topic ideas for the GCSE English Language Spoken Language endorsement, organised by category. Each includes a title, outline, key points, and potential audience questions.",
};

/* ─── Types ──────────────────────────────────────────────────── */

interface Topic {
  title: string;
  outline: string;
  keyPoints: string[];
  questions: string[];
}

interface Category {
  name: string;
  colour: string;
  borderColour: string;
  bgColour: string;
  topics: Topic[];
}

/* ─── Data ───────────────────────────────────────────────────── */

const CATEGORIES: Category[] = [
  {
    name: "Society and Politics",
    colour: "text-foreground",
    borderColour: "border-[#1A5276]",
    bgColour: "bg-[#1A5276]/5",
    topics: [
      {
        title: "Should the voting age be lowered to 16?",
        outline:
          "Argue that 16-year-olds are mature enough to participate in democracy, drawing on evidence from Scotland's independence referendum and the responsibilities already granted at 16.",
        keyPoints: [
          "Taxation without representation: 16-year-olds pay tax and National Insurance",
          "Legal responsibilities at 16: marriage, joining the armed forces, leaving education",
          "Evidence from Scotland's 2014 referendum showed high youth engagement",
          "Voting as a habit: earlier participation creates lifelong civic engagement",
          "Counter-argument: concerns about maturity and political literacy",
        ],
        questions: [
          "How would you ensure 16-year-olds are politically educated enough to vote?",
          "Should voting be compulsory if the age is lowered?",
          "What about countries that have already lowered the voting age -- what were the results?",
          "Is maturity really about age, or about individual capability?",
        ],
      },
      {
        title: "Should school uniforms be abolished?",
        outline:
          "Examine the arguments for and against school uniforms, considering individuality, equality, cost, discipline, and identity.",
        keyPoints: [
          "Uniforms can suppress individuality and self-expression",
          "They promote equality by reducing visible wealth differences",
          "Cost can be prohibitive for low-income families despite apparent savings",
          "Research on whether uniforms actually improve behaviour and attainment",
          "International comparisons: countries with and without uniform policies",
        ],
        questions: [
          "Do uniforms really reduce bullying, or do students find other ways to differentiate?",
          "How would you address concerns about inappropriate clothing in schools?",
          "Is there a compromise between full uniform and no uniform?",
          "What evidence supports the claim that uniforms improve behaviour?",
        ],
      },
      {
        title: "Should the UK adopt a four-day working week?",
        outline:
          "Present the case for a four-day working week, exploring productivity data, mental health benefits, and environmental impact.",
        keyPoints: [
          "Trials in Iceland and the UK showed maintained or improved productivity",
          "Reduced commuting lowers carbon emissions",
          "Better work-life balance improves mental health and reduces burnout",
          "Potential economic implications and sector-specific challenges",
          "Counter-argument: not all industries or roles can adapt equally",
        ],
        questions: [
          "How would essential services like hospitals manage a four-day week?",
          "Would workers accept a pay cut to work fewer hours?",
          "What were the specific results of the Icelandic trials?",
          "Could a four-day week widen inequality between office and manual workers?",
        ],
      },
      {
        title: "Should public transport be free for all?",
        outline:
          "Argue that free public transport would reduce pollution, improve equality, and boost economic activity, while addressing funding challenges.",
        keyPoints: [
          "Environmental benefits: fewer cars means lower emissions",
          "Social equality: transport costs disproportionately affect low-income households",
          "Economic stimulation: easier access to jobs and services",
          "Successful examples: Luxembourg, Tallinn, and others",
          "Funding models and taxation implications",
        ],
        questions: [
          "How would free public transport be funded?",
          "Would quality of service decline without fare revenue?",
          "What about rural areas with limited public transport?",
          "Could this actually increase overcrowding on existing services?",
        ],
      },
      {
        title: "Is it right that the monarchy still exists in the 21st century?",
        outline:
          "Explore the role of the monarchy in modern Britain, weighing tradition, tourism revenue, and national identity against democratic principles and cost.",
        keyPoints: [
          "The monarchy as a symbol of national identity and continuity",
          "Tourism revenue and the economic argument",
          "The cost to taxpayers: the Sovereign Grant",
          "Democratic principles: should a head of state be elected?",
          "Comparisons with republics and constitutional monarchies worldwide",
        ],
        questions: [
          "What would replace the monarchy if it were abolished?",
          "How much does the monarchy actually contribute to tourism?",
          "Should the monarch have any political power at all?",
          "How do other countries manage without a monarchy?",
        ],
      },
    ],
  },
  {
    name: "Technology and the Digital World",
    colour: "text-primary",
    borderColour: "border-[#2E86C1]",
    bgColour: "bg-primary/5",
    topics: [
      {
        title: "The impact of social media on mental health",
        outline:
          "Examine how social media affects young people's wellbeing, focusing on comparison culture, cyberbullying, and addictive design, while acknowledging positive aspects.",
        keyPoints: [
          "Comparison culture: filtered images and unrealistic standards",
          "Cyberbullying: anonymity enables harassment with lasting effects",
          "Addictive design: notifications, infinite scroll, and dopamine loops",
          "Sleep disruption and FOMO (fear of missing out)",
          "Positive uses: community building, awareness, and support networks",
        ],
        questions: [
          "Should social media platforms have an age limit, and should it be enforced?",
          "Is it possible to use social media healthily, or is it inherently harmful?",
          "What responsibility do tech companies have for their users' mental health?",
          "How does social media affect boys and girls differently?",
        ],
      },
      {
        title: "Should mobile phones be banned in schools?",
        outline:
          "Debate whether schools should prohibit mobile phones, weighing distraction and wellbeing against safety and educational use.",
        keyPoints: [
          "Distraction: studies show phones reduce concentration and academic performance",
          "Cyberbullying during school hours",
          "Safety concerns: parents want to be able to contact children",
          "Educational potential: research tools, apps, and digital literacy",
          "UNESCO's 2023 recommendation to ban smartphones in schools",
        ],
        questions: [
          "How would you handle emergency situations if phones are banned?",
          "Should teachers also be banned from using phones in school?",
          "What about students who use phones for medical reasons?",
          "Is a complete ban better than teaching responsible use?",
        ],
      },
      {
        title: "Is artificial intelligence a threat or an opportunity?",
        outline:
          "Explore the potential benefits and risks of AI, including its impact on employment, education, creativity, and ethics.",
        keyPoints: [
          "AI in healthcare: faster diagnosis and drug discovery",
          "Job displacement: which industries are most at risk?",
          "AI in education: personalised learning vs. academic integrity",
          "Ethical concerns: bias in algorithms, privacy, and surveillance",
          "The need for regulation and human oversight",
        ],
        questions: [
          "Should students be allowed to use AI tools in their schoolwork?",
          "Which jobs do you think are most at risk from AI?",
          "How can we ensure AI does not reinforce existing biases?",
          "Who should be responsible when AI makes a harmful decision?",
        ],
      },
      {
        title: "The dangers of misinformation online",
        outline:
          "Explain how misinformation spreads, why it matters, and what can be done to combat it, with real-world examples.",
        keyPoints: [
          "How algorithms create echo chambers and filter bubbles",
          "Real-world consequences: health misinformation, election interference",
          "The difficulty of distinguishing reliable from unreliable sources",
          "Media literacy education as a solution",
          "The role of social media platforms in fact-checking and moderation",
        ],
        questions: [
          "How do you personally verify whether something you read online is true?",
          "Should governments be allowed to regulate what is published online?",
          "Is censorship ever justified to prevent misinformation?",
          "What role should schools play in teaching media literacy?",
        ],
      },
      {
        title: "Is technology making us less creative?",
        outline:
          "Investigate whether digital tools enhance or diminish human creativity, exploring both sides with examples from art, music, writing, and design.",
        keyPoints: [
          "Passive consumption: scrolling vs. creating",
          "AI-generated art and music: help or replacement?",
          "Shorter attention spans and their impact on deep creative work",
          "Democratisation of creativity: tools available to everyone",
          "Historical parallels: previous technologies that were feared but adopted",
        ],
        questions: [
          "Can AI-generated art truly be considered creative?",
          "Do you think social media encourages or discourages creativity?",
          "What creative activities do you do that do not involve technology?",
          "Is it possible to be creative with technology rather than despite it?",
        ],
      },
      {
        title: "Should there be a legal right to disconnect from work emails?",
        outline:
          "Argue that employees should have a legal right to ignore work communications outside working hours, examining its impact on wellbeing and productivity.",
        keyPoints: [
          "Always-on culture and its impact on mental health",
          "France's 'right to disconnect' law as a case study",
          "Blurred boundaries between work and personal life",
          "Productivity evidence: rest improves output",
          "Counter-argument: flexibility and global business needs",
        ],
        questions: [
          "How would this work for people in different time zones?",
          "Should this apply to teachers and students as well?",
          "What about jobs that require on-call availability?",
          "Is legislation the best approach, or should companies self-regulate?",
        ],
      },
    ],
  },
  {
    name: "Environment and Science",
    colour: "text-emerald-700",
    borderColour: "border-emerald-500",
    bgColour: "bg-emerald-50",
    topics: [
      {
        title: "Is space exploration worth the cost?",
        outline:
          "Evaluate whether the billions spent on space exploration are justified when there are pressing problems on Earth.",
        keyPoints: [
          "Technological spin-offs: GPS, water filtration, medical imaging",
          "Scientific knowledge: understanding our universe and planet",
          "The cost: NASA's budget vs. global poverty spending",
          "Private space companies: Musk, Bezos, and commercialisation",
          "Long-term survival: becoming a multi-planetary species",
        ],
        questions: [
          "Should we fix problems on Earth before exploring space?",
          "Is it ethical for billionaires to fund personal space projects?",
          "What practical benefits has space exploration given us?",
          "Should space exploration be led by governments or private companies?",
        ],
      },
      {
        title: "The ethics of fast fashion",
        outline:
          "Expose the environmental and human cost of the fast fashion industry and argue for more sustainable alternatives.",
        keyPoints: [
          "Environmental damage: water pollution, textile waste, carbon emissions",
          "Exploitation: sweatshop labour and unsafe working conditions",
          "The psychology of overconsumption and disposability",
          "Sustainable alternatives: second-hand, ethical brands, capsule wardrobes",
          "The role of consumers vs. corporations in driving change",
        ],
        questions: [
          "Is it realistic to expect teenagers to avoid fast fashion?",
          "Should the government tax unsustainable fashion practices?",
          "What changes have you personally made to your fashion choices?",
          "Can fast fashion ever be made sustainable?",
        ],
      },
      {
        title: "Should animals be used in scientific research?",
        outline:
          "Debate the ethics of animal testing, balancing medical advances against animal welfare and the availability of alternatives.",
        keyPoints: [
          "Medical breakthroughs enabled by animal research: vaccines, antibiotics, surgical techniques",
          "The ethical argument: animals cannot consent and suffer during experiments",
          "Alternatives: computer modelling, cell cultures, human volunteers",
          "Legal frameworks: the 3Rs (Replacement, Reduction, Refinement)",
          "Cosmetic testing vs. medical research: different ethical standards",
        ],
        questions: [
          "Is there a moral difference between testing on mice and testing on primates?",
          "Would you refuse a medicine if you knew it was tested on animals?",
          "How reliable are animal testing results when applied to humans?",
          "Should cosmetic animal testing be banned worldwide?",
        ],
      },
      {
        title: "The impact of climate change on future generations",
        outline:
          "Present the scientific evidence for climate change and argue that today's decisions will determine the world future generations inherit.",
        keyPoints: [
          "Rising temperatures: IPCC predictions and tipping points",
          "Extreme weather events increasing in frequency and severity",
          "Impact on food and water security",
          "Intergenerational justice: is it fair to leave this problem for the young?",
          "What individuals, governments, and corporations can do",
        ],
        questions: [
          "What is the single most important thing an individual can do?",
          "Should developing countries be held to the same standards as developed ones?",
          "Is climate anxiety among young people justified?",
          "Can technology solve climate change, or do we need behaviour change?",
        ],
      },
      {
        title: "Should nuclear energy be part of the solution to climate change?",
        outline:
          "Make the case for or against nuclear power as a low-carbon energy source, addressing safety, cost, and public perception.",
        keyPoints: [
          "Low carbon emissions compared to fossil fuels",
          "Reliability: nuclear provides consistent baseload power unlike wind and solar",
          "Safety concerns: Chernobyl, Fukushima, and modern reactor design",
          "Nuclear waste: storage and long-term management",
          "Cost and time to build new nuclear power stations",
        ],
        questions: [
          "How do modern reactors compare to Chernobyl-era technology?",
          "Is nuclear waste a solvable problem?",
          "Should the UK build more nuclear power stations?",
          "How does nuclear compare to renewables in cost per megawatt?",
        ],
      },
      {
        title: "Should zoos be closed?",
        outline:
          "Examine whether zoos serve a valid conservation and educational purpose or whether they are outdated institutions that cause animal suffering.",
        keyPoints: [
          "Conservation breeding programmes and endangered species survival",
          "Educational value: inspiring the next generation of conservationists",
          "Animal welfare: confinement, behavioural changes, and reduced lifespans",
          "Alternatives: wildlife sanctuaries, virtual reality experiences, habitat protection",
          "The difference between well-run zoos and poorly managed facilities",
        ],
        questions: [
          "Can you give an example of a species saved by a zoo breeding programme?",
          "Are there better ways to educate children about wildlife?",
          "Should animals born in captivity be released into the wild?",
          "What standards should zoos be required to meet?",
        ],
      },
    ],
  },
  {
    name: "Education and Young People",
    colour: "text-purple-700",
    borderColour: "border-purple-500",
    bgColour: "bg-purple-50",
    topics: [
      {
        title: "Should homework be banned?",
        outline:
          "Argue for or against the abolition of homework, considering its impact on learning, wellbeing, and family life.",
        keyPoints: [
          "Research evidence on whether homework improves academic outcomes",
          "Impact on mental health, stress, and family time",
          "Inequality: not all students have a quiet space or support at home",
          "The difference between meaningful practice and busy work",
          "Alternatives: flipped learning, project-based assessment",
        ],
        questions: [
          "Is there a difference between homework at primary and secondary level?",
          "How would students consolidate learning without homework?",
          "Do you think homework teaches discipline and responsibility?",
          "What would you replace homework with?",
        ],
      },
      {
        title: "Why reading fiction matters",
        outline:
          "Make a passionate case for the importance of reading fiction in developing empathy, vocabulary, imagination, and critical thinking.",
        keyPoints: [
          "Empathy development: experiencing other perspectives through characters",
          "Vocabulary and language acquisition through exposure to rich text",
          "Imagination and creativity: exercising the mind in ways screens do not",
          "Academic benefits: correlation between reading and attainment",
          "The decline in reading for pleasure among young people",
        ],
        questions: [
          "Is reading fiction more valuable than reading non-fiction?",
          "Should schools give students more time to read for pleasure?",
          "Can audiobooks and e-readers replace physical books?",
          "What book has had the biggest impact on you, and why?",
        ],
      },
      {
        title: "The role of art and music in education",
        outline:
          "Argue that creative subjects are essential, not optional, in a balanced education, pushing back against the trend of curriculum narrowing.",
        keyPoints: [
          "Cognitive benefits: creativity, problem-solving, and lateral thinking",
          "Mental health and wellbeing: creative expression as therapy",
          "Cultural value: understanding society through its art and music",
          "Career pathways: the creative industries are a major employer",
          "The EBacc and its impact on uptake of creative subjects",
        ],
        questions: [
          "Should art and music be compulsory to GCSE level?",
          "How would you respond to the argument that STEM subjects are more useful?",
          "Can creativity be taught, or is it innate?",
          "What would schools lose if creative subjects were removed?",
        ],
      },
      {
        title: "Is competitive sport good for young people?",
        outline:
          "Explore whether the emphasis on competition in school sport motivates or discourages young people from being active.",
        keyPoints: [
          "Benefits: teamwork, resilience, goal-setting, and physical fitness",
          "Negative aspects: pressure, exclusion of less athletic students, injuries",
          "Gender disparities in school sport provision",
          "The drop-off in physical activity during teenage years",
          "Alternatives: non-competitive sport, fitness for fun, individual activities",
        ],
        questions: [
          "Should schools offer more non-competitive physical activities?",
          "How can we keep less sporty students engaged in physical activity?",
          "Is winning important, or is participation enough?",
          "What sport or activity has had the biggest positive impact on you?",
        ],
      },
      {
        title: "Should exams be replaced by coursework and continuous assessment?",
        outline:
          "Debate whether the current examination system is the fairest and most effective way to assess students, or whether alternatives would be better.",
        keyPoints: [
          "Exam stress and its impact on mental health and performance",
          "Whether exams truly measure understanding or just memorisation",
          "Coursework benefits: sustained effort, deeper learning, less anxiety",
          "Concerns about coursework: plagiarism, inequality of support, inconsistent marking",
          "International models: countries that use different assessment approaches",
        ],
        questions: [
          "How would you prevent cheating in a coursework-based system?",
          "Are some subjects better suited to exams than others?",
          "Should students have a choice between exams and coursework?",
          "What would universities and employers think of a system without exams?",
        ],
      },
      {
        title: "The importance of learning a second language",
        outline:
          "Argue that learning a foreign language has cognitive, cultural, and career benefits that make it essential in the modern curriculum.",
        keyPoints: [
          "Cognitive benefits: improved memory, multitasking, and problem-solving",
          "Career advantages in a globalised economy",
          "Cultural understanding and empathy across borders",
          "The UK's declining language uptake compared to Europe",
          "Counter-argument: English as a global lingua franca",
        ],
        questions: [
          "Should learning a language be compulsory to GCSE?",
          "Which language would you recommend and why?",
          "Is it ever too late to learn a language?",
          "Does speaking English mean we do not need other languages?",
        ],
      },
    ],
  },
  {
    name: "Health and Wellbeing",
    colour: "text-rose-700",
    borderColour: "border-rose-500",
    bgColour: "bg-rose-50",
    topics: [
      {
        title: "The importance of mental health awareness in schools",
        outline:
          "Argue that schools must do more to support students' mental health, from curriculum changes to better access to counselling.",
        keyPoints: [
          "Rising rates of anxiety, depression, and self-harm among young people",
          "The link between mental health and academic performance",
          "Current provision: what schools offer and where the gaps are",
          "PSHE curriculum: is it enough?",
          "The stigma around mental health and how to reduce it",
        ],
        questions: [
          "What would ideal mental health support in schools look like?",
          "Should teachers be trained as mental health first aiders?",
          "How can we reduce the stigma around asking for help?",
          "Is social media making the mental health crisis worse?",
        ],
      },
      {
        title: "Should junk food advertising be banned?",
        outline:
          "Present the case for restricting junk food advertising, particularly targeting children and young people, to tackle the obesity crisis.",
        keyPoints: [
          "Childhood obesity statistics and health consequences",
          "How advertising influences food choices, especially for children",
          "The impact of online advertising and social media influencers",
          "Existing restrictions and whether they go far enough",
          "Counter-argument: personal responsibility and freedom of choice",
        ],
        questions: [
          "Should parents bear more responsibility for their children's diets?",
          "Would banning advertising actually change eating habits?",
          "What about healthy food advertising -- should that be promoted instead?",
          "Is it fair to restrict advertising for legal products?",
        ],
      },
      {
        title: "Is it ethical to keep pets?",
        outline:
          "Examine the ethics of pet ownership, considering animal welfare, the pet trade, abandonment, and the benefits of the human-animal bond.",
        keyPoints: [
          "The psychological benefits of pet ownership: companionship, stress reduction",
          "Welfare concerns: neglect, abandonment, and unsuitable living conditions",
          "The exotic pet trade and its impact on wild populations",
          "Breeding practices and the health problems they cause",
          "Adoption vs. buying: the shelter overpopulation crisis",
        ],
        questions: [
          "Should certain animals be banned from being kept as pets?",
          "Is it different keeping a dog compared to keeping a fish?",
          "What responsibilities should come with pet ownership?",
          "Should there be a licence required to own a pet?",
        ],
      },
      {
        title: "Should energy drinks be banned for under-16s?",
        outline:
          "Argue that the sale of high-caffeine energy drinks to young people should be restricted by law, citing health evidence and international precedents.",
        keyPoints: [
          "Health effects of excessive caffeine on developing bodies and minds",
          "Sugar content and links to obesity and dental health",
          "Impact on sleep, concentration, and school performance",
          "Current voluntary restrictions by retailers and their effectiveness",
          "International examples of legislation banning sales to minors",
        ],
        questions: [
          "Is banning the best approach, or would education be more effective?",
          "Should the same logic apply to other sugary drinks?",
          "How would a ban be enforced in practice?",
          "Do you think energy drink companies market irresponsibly?",
        ],
      },
    ],
  },
  {
    name: "Culture, Media, and Identity",
    colour: "text-amber-700",
    borderColour: "border-amber-500",
    bgColour: "bg-amber-50",
    topics: [
      {
        title: "Why representation in the media matters",
        outline:
          "Argue that diverse representation in film, television, literature, and advertising has a profound impact on identity, self-esteem, and social attitudes.",
        keyPoints: [
          "The impact of seeing yourself reflected in media during formative years",
          "Stereotyping and its consequences: how media shapes perceptions",
          "Progress made: increasing diversity in casting, writing, and storytelling",
          "Remaining gaps: disability, socioeconomic diversity, LGBTQ+ representation",
          "The commercial case: diverse media reaches wider audiences",
        ],
        questions: [
          "Can you give a specific example of good or bad representation?",
          "Should there be quotas for diversity in media?",
          "Is representation alone enough, or does the quality of representation matter more?",
          "How has representation in media changed during your lifetime?",
        ],
      },
      {
        title: "A person who has inspired you and why",
        outline:
          "Give a heartfelt and well-structured presentation about someone who has had a significant positive impact on your life or worldview.",
        keyPoints: [
          "Who the person is and how you came to know about them",
          "Specific actions, achievements, or qualities that inspire you",
          "How they have influenced your own values, goals, or behaviour",
          "A memorable story or moment that encapsulates their impact",
          "What others can learn from this person's example",
        ],
        questions: [
          "Have you ever met this person in person?",
          "What single quality of theirs do you most admire?",
          "Has this person influenced any specific decisions you have made?",
          "Do you think anyone can be an inspiration, or does it require extraordinary achievement?",
        ],
      },
      {
        title: "Should violent video games be restricted?",
        outline:
          "Examine the debate around violent video games and their potential link to aggression, considering research evidence, age ratings, and parental responsibility.",
        keyPoints: [
          "Research findings: the disputed link between games and real-world violence",
          "Age rating systems (PEGI) and their effectiveness",
          "Desensitisation theory vs. catharsis theory",
          "Parental responsibility and the role of education",
          "The positive aspects of gaming: problem-solving, social connection, creativity",
        ],
        questions: [
          "Do you play violent video games, and if so, do you think they affect you?",
          "Should age ratings be legally enforced rather than advisory?",
          "Is it fair to blame video games for societal violence?",
          "What role should parents play in monitoring their children's gaming?",
        ],
      },
      {
        title: "Is cancel culture a force for good or harm?",
        outline:
          "Explore whether holding public figures accountable online (cancel culture) is a positive form of social justice or a dangerous form of mob mentality.",
        keyPoints: [
          "Defining cancel culture and how it operates on social media",
          "Cases where accountability has led to positive change",
          "Cases where cancellation has been disproportionate or unjust",
          "The impact on free speech and open debate",
          "The difference between accountability and harassment",
        ],
        questions: [
          "Can you give an example of cancel culture being justified?",
          "Where do you draw the line between accountability and bullying?",
          "Should people be judged on past actions that were once considered acceptable?",
          "Does cancel culture actually change behaviour, or just silence people?",
        ],
      },
    ],
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function SpokenLanguageTopicsPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/spoken-language"
            className="inline-flex items-center gap-1 text-sm text-white/70 transition hover:text-white"
          >
            &larr; Spoken Language Guide
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Presentation Topic Ideas
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Over 30 topic ideas for your Spoken Language endorsement, organised
            by category. Each includes a brief outline, key points to cover,
            and potential audience questions to prepare for.
          </p>
        </div>
      </section>

      {/* ── Breadcrumb ────────────────────────────────────────── */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources"
              className="hover:text-foreground transition-colors"
            >
              Resources
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources/spoken-language"
              className="hover:text-foreground transition-colors"
            >
              Spoken Language
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-foreground">Topics</li>
        </ol>
      </nav>

      {/* ── Quick navigation ──────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 pt-8">
        <div className="rounded-lg border border-border bg-muted p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Jump to Category
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.name}
                href={`#${cat.name.toLowerCase().replace(/[\s,&]+/g, "-")}`}
                className={`rounded-full border px-4 py-1.5 text-sm font-medium transition hover:shadow-md ${cat.borderColour} ${cat.bgColour} ${cat.colour}`}
              >
                {cat.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Topics by category ────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <div className="space-y-16">
          {CATEGORIES.map((cat) => (
            <section
              key={cat.name}
              id={cat.name.toLowerCase().replace(/[\s,&]+/g, "-")}
              aria-labelledby={`heading-${cat.name.toLowerCase().replace(/[\s,&]+/g, "-")}`}
            >
              <h2
                id={`heading-${cat.name.toLowerCase().replace(/[\s,&]+/g, "-")}`}
                className={`text-2xl font-bold ${cat.colour}`}
              >
                {cat.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {cat.topics.length} topic{cat.topics.length !== 1 ? "s" : ""}
              </p>

              <div className="mt-6 space-y-6">
                {cat.topics.map((topic, i) => (
                  <div
                    key={i}
                    className={`rounded-lg border-2 ${cat.borderColour}/30 bg-card p-6 shadow-md`}
                  >
                    <h3 className="text-lg font-bold text-foreground">
                      {topic.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {topic.outline}
                    </p>

                    <div className="mt-5 grid gap-5 lg:grid-cols-2">
                      {/* Key points */}
                      <div>
                        <h4 className={`text-sm font-semibold uppercase tracking-wider ${cat.colour}`}>
                          Key Points to Cover
                        </h4>
                        <ul className="ml-4 mt-2 list-disc space-y-1.5 text-sm text-muted-foreground">
                          {topic.keyPoints.map((point, j) => (
                            <li key={j}>{point}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Potential questions */}
                      <div>
                        <h4 className={`text-sm font-semibold uppercase tracking-wider ${cat.colour}`}>
                          Potential Audience Questions
                        </h4>
                        <ul className="ml-4 mt-2 list-disc space-y-1.5 text-sm text-muted-foreground">
                          {topic.questions.map((q, j) => (
                            <li key={j}>{q}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* ── Choosing tips ────────────────────────────────────── */}
        <div className="mt-16 rounded-lg border border-[#2E86C1]/20 bg-primary/5 p-6">
          <h2 className="text-xl font-bold text-foreground">
            How to Choose the Right Topic for You
          </h2>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
            <p>The best topic is one that ticks all of these boxes:</p>
            <ul className="ml-4 list-disc space-y-2">
              <li>
                <strong>You are genuinely interested in it</strong> &mdash;
                passion and enthusiasm come across naturally when you speak and
                will engage your audience.
              </li>
              <li>
                <strong>It allows you to present an argument or viewpoint</strong>{" "}
                &mdash; persuasive topics give you the chance to use rhetorical
                devices and demonstrate higher-level speaking skills.
              </li>
              <li>
                <strong>It has enough depth</strong> &mdash; you need to speak
                for 3&ndash;5 minutes and then answer questions, so your topic
                must have substance.
              </li>
              <li>
                <strong>You can find evidence and examples</strong> &mdash;
                statistics, expert opinions, and real-world cases will strengthen
                your presentation.
              </li>
              <li>
                <strong>It is appropriate for a formal setting</strong> &mdash;
                remember, this is assessed in a formal context by your teacher.
              </li>
            </ul>
          </div>
        </div>

        {/* ── CTA back to guide ───────────────────────────────── */}
        <div className="mt-12 rounded-lg bg-gradient-to-r from-[#1A5276] to-[#2E86C1] p-8 text-center text-white shadow-lg">
          <h2 className="text-2xl font-bold">Ready to Prepare?</h2>
          <p className="mx-auto mt-2 max-w-lg text-white/90">
            Head back to our full Spoken Language guide for detailed advice on
            planning, delivery, answering questions, and hitting every
            assessment criterion.
          </p>
          <Link
            href="/resources/spoken-language"
            className="mt-6 inline-block rounded-lg bg-card px-8 py-3 text-sm font-semibold text-foreground shadow transition hover:bg-blue-50"
          >
            &larr; Back to the Full Guide
          </Link>
        </div>
      </div>

    </>
  );
}
